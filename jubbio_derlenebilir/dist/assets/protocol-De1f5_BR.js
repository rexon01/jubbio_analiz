const e = 65536;
const r = ["rooms", "documents", "notifications", "jobs", "voice"];
function t(_0x511401, _0x2a78c9 = "Oyuncu") {
  return _0x511401?.displayName?.trim() || _0x511401?.username?.trim() || _0x2a78c9;
}
function n(_0x4b4d4f) {
  return Array.isArray(_0x4b4d4f) && _0x4b4d4f.length <= 128 && _0x4b4d4f.every(_0x24fa32 => _0x24fa32 && typeof _0x24fa32.id == "string" && _0x24fa32.id.length <= 64 && typeof _0x24fa32.displayName == "string" && _0x24fa32.displayName.length <= 80 && ["player", "spectator"].includes(_0x24fa32.role) && (_0x24fa32.username === undefined || typeof _0x24fa32.username == "string" && _0x24fa32.username.length <= 80) && (_0x24fa32.avatarUrl === undefined || typeof _0x24fa32.avatarUrl == "string" && _0x24fa32.avatarUrl.length <= 2048));
}
const o = ["context.get", "rooms.list", "rooms.create", "rooms.join", "rooms.leave", "rooms.close", "rooms.delete", "rooms.command", "documents.get", "documents.update", "jobs.list", "jobs.create", "jobs.delete", "notifications.send", "voice.join", "voice.leave"];
const i = _0x41cb5f => typeof _0x41cb5f == "object" && _0x41cb5f !== null && !Array.isArray(_0x41cb5f) && (Object.getPrototypeOf(_0x41cb5f) === Object.prototype || Object.getPrototypeOf(_0x41cb5f) === null);
function s(_0x1eb7f5, _0xcc8217, _0x5ecc7f = 0) {
  return !(++_0xcc8217.nodes > 8192) && !(_0x5ecc7f > 16) && (_0x1eb7f5 === null || typeof _0x1eb7f5 == "boolean" || (typeof _0x1eb7f5 == "number" ? Number.isFinite(_0x1eb7f5) : typeof _0x1eb7f5 == "string" ? (_0xcc8217.chars += _0x1eb7f5.length, _0xcc8217.chars <= e) : Array.isArray(_0x1eb7f5) ? _0x1eb7f5.length <= 4096 && _0x1eb7f5.every(_0x1dac4a => s(_0x1dac4a, _0xcc8217, _0x5ecc7f + 1)) : !!i(_0x1eb7f5) && Object.entries(_0x1eb7f5).every(([_0x564933, _0x42ddf3]) => !["__proto__", "prototype", "constructor"].includes(_0x564933) && (_0xcc8217.chars += _0x564933.length, _0xcc8217.chars <= e && s(_0x42ddf3, _0xcc8217, _0x5ecc7f + 1)))));
}
function a(_0x2c9f46) {
  if (!i(_0x2c9f46) || _0x2c9f46.v !== 1 || _0x2c9f46.type !== "request" || typeof _0x2c9f46.id != "string" || !_0x2c9f46.id || _0x2c9f46.id.length > 128) {
    return false;
  }
  if (!o.includes(_0x2c9f46.method) || !i(_0x2c9f46.params)) {
    return false;
  }
  if (!s(_0x2c9f46, {
    nodes: 0,
    chars: 0
  })) {
    return false;
  }
  try {
    return new TextEncoder().encode(JSON.stringify(_0x2c9f46)).byteLength <= e;
  } catch {
    return false;
  }
}
function c(_0x277c43, _0xd044fb = false) {
  if (!i(_0x277c43) || _0x277c43.schemaVersion !== 1) {
    throw new Error("Unsupported manifest schema");
  }
  if (typeof _0x277c43.name != "string" || !_0x277c43.name.trim() || _0x277c43.name.length > 80) {
    throw new Error("Invalid application name");
  }
  if (typeof _0x277c43.version != "string" || _0x277c43.version.length > 80 || !/^\d+\.\d+\.\d+(?:-[a-zA-Z0-9.-]+)?$/.test(_0x277c43.version)) {
    throw new Error("Invalid application version");
  }
  if (typeof _0x277c43.entryPoint != "string" || _0x277c43.entryPoint.length > 240 || !/^[a-zA-Z0-9_./-]+\.html$/.test(_0x277c43.entryPoint) || _0x277c43.entryPoint.startsWith("/") || _0x277c43.entryPoint.split("/").some(_0x5ed82d => ["", ".", ".."].includes(_0x5ed82d))) {
    throw new Error("Invalid entry point");
  }
  if (!Array.isArray(_0x277c43.capabilities) || _0x277c43.capabilities.some(_0x2ffcb3 => !r.includes(_0x2ffcb3)) || new Set(_0x277c43.capabilities).size !== _0x277c43.capabilities.length) {
    throw new Error("Invalid capabilities");
  }
  if (!i(_0x277c43.room) || !["workspace", "turn_based", "realtime"].includes(String(_0x277c43.room.kind)) || !Number.isInteger(_0x277c43.room.maxParticipants) || Number(_0x277c43.room.maxParticipants) < 1 || Number(_0x277c43.room.maxParticipants) > 128 || typeof _0x277c43.room.spectators != "boolean") {
    throw new Error("Invalid room configuration");
  }
  if (!i(_0x277c43.backend) || !["managed", "external"].includes(String(_0x277c43.backend.mode))) {
    throw new Error("Invalid backend mode");
  }
  if (!Array.isArray(_0x277c43.networkOrigins) || _0x277c43.networkOrigins.length > 10) {
    throw new Error("Invalid network origins");
  }
  const _0x27b518 = _0xe92672 => {
    if (typeof _0xe92672 != "string") {
      throw new Error("Invalid network origin");
    }
    const _0x33fdb9 = new URL(_0xe92672);
    const _0x1289f9 = ["localhost", "127.0.0.1", "[::1]"].includes(_0x33fdb9.hostname);
    if (!["https:", "wss:"].includes(_0x33fdb9.protocol) && (!_0xd044fb || !_0x1289f9 || !["http:", "ws:"].includes(_0x33fdb9.protocol))) {
      throw new Error("Network origin must use TLS");
    }
    if (_0x33fdb9.username || _0x33fdb9.password || _0x33fdb9.pathname !== "/" || _0x33fdb9.search || _0x33fdb9.hash) {
      throw new Error("Network entry must be an origin");
    }
    return _0x33fdb9.origin;
  };
  const _0x48aa71 = _0x277c43.networkOrigins.map(_0x27b518);
  if (new Set(_0x48aa71).size !== _0x48aa71.length) {
    throw new Error("Duplicate network origins");
  }
  if (_0x277c43.backend.mode === "external") {
    if (typeof _0x277c43.backend.endpoint != "string") {
      throw new Error("External backend requires an endpoint");
    }
    const _0x4c1b56 = new URL(_0x277c43.backend.endpoint);
    if (_0x277c43.backend.endpoint.length > 2048 || _0x4c1b56.username || _0x4c1b56.password || _0x4c1b56.hash || _0x4c1b56.search) {
      throw new Error("Backend endpoint cannot contain credentials, queries or fragments");
    }
    if (_0x4c1b56.protocol !== "wss:" && (!_0xd044fb || _0x4c1b56.protocol !== "ws:" || !["localhost", "127.0.0.1", "[::1]"].includes(_0x4c1b56.hostname))) {
      throw new Error("Room backend endpoint must use WebSocket TLS");
    }
    _0x27b518(_0x4c1b56.protocol + "//" + _0x4c1b56.host);
    if (!_0x48aa71.includes(_0x4c1b56.protocol + "//" + _0x4c1b56.host)) {
      throw new Error("Backend origin is not declared");
    }
  }
  return {
    schemaVersion: 1,
    name: _0x277c43.name.trim(),
    version: _0x277c43.version,
    entryPoint: _0x277c43.entryPoint,
    capabilities: [..._0x277c43.capabilities],
    room: {
      kind: _0x277c43.room.kind,
      maxParticipants: Number(_0x277c43.room.maxParticipants),
      spectators: _0x277c43.room.spectators
    },
    backend: {
      mode: _0x277c43.backend.mode,
      ...(_0x277c43.backend.mode === "external" ? {
        endpoint: _0x277c43.backend.endpoint
      } : {})
    },
    networkOrigins: _0x48aa71
  };
}
export { n as a, a as i, t as p, c as v };