'use strict';
const path = require('node:path');
const policy = require('./resources/game-process-policy.json');
const blocked = new Set(policy.blocked_names);

const normalize = value => String(value || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
const normalizedPath = value => String(value || '').replace(/\\/g, '/').toLowerCase();
const runtimes = new Set(policy.runtime_names);
const helpers = new Set(policy.helper_names);

function validRules(rules) {
  if (!rules || typeof rules !== 'object' || Array.isArray(rules)) return false;
  const keys = ['product_names', 'publishers', 'path_suffixes'];
  if (Object.keys(rules).some(key => !keys.includes(key))) return false;
  if (!keys.every(key => rules[key] === undefined || (Array.isArray(rules[key]) && rules[key].length > 0 && rules[key].length <= 16 && rules[key].every(v => typeof v === 'string' && v.trim().length > 0 && v.length <= 200)))) return false;
  if (['product_names', 'publishers'].some(key => rules[key]?.some(value => !normalize(value)))) return false;
  if (rules.path_suffixes?.some(value => /(^[a-z]:|^[/\\]|\.\.|[*?])/i.test(value) || normalizedPath(value).split('/').filter(Boolean).length < 2)) return false;
  return keys.filter(key => rules[key]?.length).length >= 2;
}

function verifyGameExecutable(facts, candidate) {
  const deny = reason => ({ approved: false, reason });
  if (!facts?.executablePath || !facts.startedAt) return deny('unreadable_executable');
  const exePath = normalizedPath(facts.executablePath);
  const exe = path.win32.basename(facts.executablePath).toLowerCase();
  if (blocked.has(exe)) return deny('blocked_process');
  if (exe !== String(candidate.process_name).toLowerCase()) return deny('executable_changed');
  if (exePath.startsWith('//') || /\/(windows|winnt)\/(system32|syswow64|winsxs|servicing)\//.test(exePath)) return deny('system_executable');
  // Codex the application and Codex the game may share the filename, never the publisher/product identity.
  const company = normalize(facts.companyName), product = normalize(facts.productName), description = normalize(facts.fileDescription);
  if ((company.includes('openai') && (exe === 'codex.exe' || product.includes('codex'))) ||
      product === 'microsoftwindowsoperatingsystem') return deny('non_game_application');

  const rules = candidate.verification_rules;
  if (rules != null) {
    if (!validRules(rules)) return deny('invalid_verification_rules');
    if ((runtimes.has(exe) || helpers.has(exe)) && !rules.path_suffixes?.length) return deny('runtime_needs_installation_rule');
    if (rules.product_names && !rules.product_names.some(value => normalize(value) === product)) return deny('product_mismatch');
    if (rules.publishers && !rules.publishers.some(value => normalize(value) === company)) return deny('publisher_mismatch');
    if (rules.path_suffixes && !rules.path_suffixes.some(value => exePath.endsWith('/' + normalizedPath(value)))) return deny('installation_mismatch');
    return { approved: true, reason: 'verified_rules' };
  }
  if (runtimes.has(exe)) return deny('ambiguous_runtime');
  if (helpers.has(exe) || [product, description].some(value => /easyanticheat|unitycrashhandler|crashreportclient|crashpadhandler|battleye/.test(value))) return deny('helper_needs_verification_rules');
  const title = normalize(candidate.name);
  if (title.length < 3) return deny('ambiguous_title');
  const library = /\/(?:steamapps\/common|epic games|riot games|ea games|gog games|ubisoft game launcher\/games|games)\/([^/]+)\//.exec(exePath);
  const productMatches = product === title || description === title;
  // A verified executable inside the game's own library folder also covers generic engine metadata.
  const installationMatches = library && normalize(library[1]) === title;
  if (library && (productMatches || installationMatches)) return { approved: true, reason: 'game_installation' };
  return deny('insufficient_evidence');
}

module.exports = { verifyGameExecutable, validRules };
