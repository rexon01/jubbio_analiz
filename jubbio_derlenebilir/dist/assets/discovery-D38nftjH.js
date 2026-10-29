import { c as _0x4d4bd9, O as _0x77c5a } from "./index-cQfEKR1W.js";
function r(_0x171f55) {
  const _0x244d0b = _0x171f55?.guilds ?? _0x171f55?.data ?? [];
  return {
    data: Array.isArray(_0x244d0b) ? _0x244d0b : [],
    next_cursor: _0x171f55?.next_cursor ?? null,
    has_more: Boolean(_0x171f55?.has_more)
  };
}
async function c(_0x4a2650) {
  try {
    const _0x298067 = {};
    if (_0x4a2650?.selectable) {
      _0x298067.selectable = "true";
    }
    return (await _0x4d4bd9.get("/api/v1/discovery/categories", {
      params: _0x298067
    })).data;
  } catch (_0x1c7318) {
    throw _0x77c5a(_0x1c7318);
  }
}
async function s(_0x3ebbff, _0xb5283e) {
  try {
    return r((await _0x4d4bd9.get("/api/v1/discovery/search", {
      params: {
        q: _0x3ebbff,
        cursor: _0xb5283e
      }
    })).data);
  } catch (_0x342845) {
    throw _0x77c5a(_0x342845);
  }
}
async function i(_0x182377, _0x40962b) {
  try {
    const _0x36d2d9 = {};
    if (_0x182377 != null) {
      _0x36d2d9.category_id = _0x182377;
    }
    if (_0x40962b) {
      _0x36d2d9.cursor = _0x40962b;
    }
    return r((await _0x4d4bd9.get("/api/v1/discovery", {
      params: _0x36d2d9
    })).data);
  } catch (_0x40cdd6) {
    throw _0x77c5a(_0x40cdd6);
  }
}
async function e(_0x430065, _0x66876f) {
  try {
    await _0x4d4bd9.post("/api/v1/discovery/guilds/" + _0x430065 + "/report", _0x66876f);
  } catch (_0x4ea08c) {
    throw _0x77c5a(_0x4ea08c);
  }
}
async function n(_0x334140) {
  try {
    return (await _0x4d4bd9.get("/api/v1/guilds/" + _0x334140 + "/settings/general")).data;
  } catch (_0x52f689) {
    throw _0x77c5a(_0x52f689);
  }
}
async function o(_0x2b606e, _0x49fb28) {
  try {
    await _0x4d4bd9.put("/api/v1/guilds/" + _0x2b606e + "/discovery/category", {
      category_id: _0x49fb28 != null ? parseInt(String(_0x49fb28), 10) : null
    });
  } catch (_0x2521d4) {
    throw _0x77c5a(_0x2521d4);
  }
}
async function u(_0x2d8098) {
  try {
    return (await _0x4d4bd9.get("/api/v1/guilds/" + _0x2d8098 + "/discovery/eligibility")).data;
  } catch (_0x3ed48f) {
    throw _0x77c5a(_0x3ed48f);
  }
}
async function y() {
  try {
    return (await _0x4d4bd9.get("/api/v1/discovery/featured")).data;
  } catch (_0xe9dcc1) {
    throw _0x77c5a(_0xe9dcc1);
  }
}
export { c as a, y as b, u as c, n as d, i as g, e as r, s, o as u };