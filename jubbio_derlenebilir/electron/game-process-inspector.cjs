'use strict';
const { execFile: nativeExecFile } = require('node:child_process');
const { watch: nativeWatch } = require('node:fs');
const path = require('node:path');
const { verifyGameExecutable } = require('./game-detection-policy.cjs');

const SNAPSHOT_SCRIPT = `[Console]::OutputEncoding = New-Object System.Text.UTF8Encoding($false)
$ErrorActionPreference = 'Stop'
@(Get-CimInstance Win32_Process -Property ProcessId,Name,CreationDate | ForEach-Object {
  if ($_.CreationDate) { [pscustomobject]@{pid=[int]$_.ProcessId;name=$_.Name;startedAt=$_.CreationDate.ToUniversalTime().ToString('yyyy-MM-ddTHH:mm:ss.fffZ')} }
}) | ConvertTo-Json -Compress`;

function inspectionScript(pids) {
  return `[Console]::OutputEncoding = New-Object System.Text.UTF8Encoding($false)
$ErrorActionPreference = 'Stop'
$versions = @{}
@(@(${pids.join(',')}) | ForEach-Object {
  try {
    $p = Get-Process -Id $_ -ErrorAction Stop
    $exePath = $p.Path
    if ($exePath -and !$exePath.StartsWith('\\\\')) {
      if (!$versions.ContainsKey($exePath)) { $versions[$exePath] = [System.Diagnostics.FileVersionInfo]::GetVersionInfo($exePath) }
      $v = $versions[$exePath]
      [pscustomobject]@{pid=$p.Id;startedAt=$p.StartTime.ToUniversalTime().ToString('yyyy-MM-ddTHH:mm:ss.fffZ');executablePath=$exePath;productName=$v.ProductName;fileDescription=$v.FileDescription;companyName=$v.CompanyName}
    }
  } catch { }
}) | ConvertTo-Json -Compress`;
}

function createGameProcessInspector({ execFile = nativeExecFile, watch = nativeWatch, clock = Date.now, maxEntries = 128, metadataTtl = 300000 } = {}) {
  let snapshot = [], snapshotAt = -Infinity, snapshotTask = null, inspectTask = null, epoch = 0;
  const cache = new Map(), watchers = new Map(), keyPaths = new Map();
  const stats = { snapshots: 0, inspections: 0, cacheHits: 0, snapshotMs: 0, inspectionMs: 0 };
  const keyOf = item => `${item.pid}:${item.startedAt}`;
  const invalidate = key => {
    cache.delete(key);
    const file = keyPaths.get(key), group = watchers.get(file);
    keyPaths.delete(key);
    if (group) { group.keys.delete(key); if (!group.keys.size) { group.watcher.close(); watchers.delete(file); } }
  };
  const run = script => new Promise((resolve, reject) => {
    const powershell = path.win32.join(process.env.SystemRoot || 'C:\\Windows', 'System32', 'WindowsPowerShell', 'v1.0', 'powershell.exe');
    execFile(powershell, ['-NoProfile', '-NonInteractive', '-EncodedCommand', Buffer.from(script, 'utf16le').toString('base64')],
      { windowsHide: true, encoding: 'utf8', timeout: 5000, maxBuffer: 2 * 1024 * 1024 }, (error, stdout) => {
        if (error) return reject(error);
        try { const result = JSON.parse(String(stdout || '[]').replace(/^\uFEFF/, '').trim() || '[]'); resolve(Array.isArray(result) ? result : [result]); }
        catch (error) { reject(error); }
      });
  });
  async function getSnapshot() {
    if (snapshotTask) return snapshotTask;
    if (clock() - snapshotAt < 2000) return snapshot;
    const version = epoch, started = clock();
    snapshotTask = (async () => {
      stats.snapshots++;
      const rows = await run(SNAPSHOT_SCRIPT);
      if (version !== epoch) return [];
      snapshot = rows.filter(row => Number.isInteger(row.pid) && row.pid > 0 && typeof row.name === 'string' && typeof row.startedAt === 'string')
        .map(row => ({ pid: row.pid, name: row.name.toLowerCase(), startedAt: row.startedAt }));
      snapshotAt = clock(); stats.snapshotMs = clock() - started;
      const live = new Set(snapshot.map(keyOf));
      for (const key of cache.keys()) if (!live.has(key)) invalidate(key);
      return snapshot;
    })();
    try { return await snapshotTask; } finally { snapshotTask = null; }
  }
  async function inspect(rows) {
    // One bounded OS metadata call at a time; concurrent callers reuse the populated cache.
    if (inspectTask) await inspectTask;
    const now = clock(), version = epoch;
    const missing = rows.filter(row => {
      const entry = cache.get(keyOf(row));
      if (entry && entry.expires > now) { stats.cacheHits++; return false; }
      invalidate(keyOf(row)); return true;
    }).slice(0, 32);
    if (!missing.length) return;
    inspectTask = (async () => {
      const started = clock(); stats.inspections++;
      let facts = [];
      try { facts = await run(inspectionScript(missing.map(row => row.pid))); } catch { /* Unknown processes are never approved. */ }
      if (version !== epoch) return;
      stats.inspectionMs = clock() - started;
      for (const row of missing) {
        const key = keyOf(row);
        const fact = facts.find(fact => fact.pid === row.pid && fact.startedAt === row.startedAt) || null;
        cache.set(key, { fact, expires: clock() + (fact ? metadataTtl : 30000) });
        if (fact) {
          try {
            const file = fact.executablePath.toLowerCase();
            let group = watchers.get(file);
            if (!group) {
              const invalidateFile = () => { for (const item of [...(watchers.get(file)?.keys || [])]) invalidate(item); };
              const watcher = watch(fact.executablePath, { persistent: false }, invalidateFile);
              watcher.on('error', invalidateFile);
              group = { watcher, keys: new Set() }; watchers.set(file, group);
            }
            group.keys.add(key); keyPaths.set(key, file);
          } catch { cache.get(key).expires = clock() + 30000; }
        }
        while (cache.size > maxEntries) invalidate(cache.keys().next().value);
      }
    })();
    try { await inspectTask; } finally { inspectTask = null; }
  }
  async function verify(candidates) {
    if (!Array.isArray(candidates) || candidates.length > 100) throw new Error('Invalid game candidates');
    if (clock() - snapshotAt > 45000) return {};
    const safe = candidates.filter(c => c && typeof c.process_name === 'string' && c.process_name.length <= 256 && typeof c.name === 'string' && c.name.length <= 256 && Number.isSafeInteger(c.id) && c.id > 0);
    const names = new Set(safe.map(c => c.process_name.toLowerCase()));
    const rows = snapshot.filter(row => names.has(row.name));
    await inspect(rows);
    const result = Object.create(null);
    for (const candidate of safe) {
      const matches = rows.filter(row => row.name === candidate.process_name.toLowerCase());
      const decisions = matches.map(row => ({ row, verdict: verifyGameExecutable(cache.get(keyOf(row))?.fact, candidate) }));
      const approved = decisions.find(item => item.verdict.approved);
      result[candidate.process_name] = approved
        ? { approved: true, gameId: candidate.id, instanceKey: keyOf(approved.row), reason: approved.verdict.reason }
        : { approved: false, gameId: candidate.id, reason: decisions[0]?.verdict.reason || 'process_not_running' };
    }
    return result;
  }
  function clear() {
    epoch++; snapshot = []; snapshotAt = -Infinity;
    for (const key of cache.keys()) invalidate(key);
  }
  return { getSnapshot, verify, clear, get stats() { return { ...stats, cachedProcesses: cache.size, watchers: watchers.size }; } };
}

module.exports = { createGameProcessInspector };
