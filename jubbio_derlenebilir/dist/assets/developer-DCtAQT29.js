import { c as _0xb12c8f, O as _0x237ab6 } from "./index-cQfEKR1W.js";
const i = async (_0x51a479 = 1, _0x4080e8 = 25) => {
  try {
    return (await _0xb12c8f.get("/api/v1/applications", {
      params: {
        page: _0x51a479,
        limit: _0x4080e8
      }
    })).data;
  } catch (_0x2d2144) {
    throw _0x237ab6(_0x2d2144);
  }
};
const n = async _0x5444f4 => {
  try {
    return (await _0xb12c8f.get("/api/v1/applications/" + _0x5444f4)).data;
  } catch (_0x4863da) {
    throw _0x237ab6(_0x4863da);
  }
};
const p = async (_0x2b5a71, _0x39d73a, _0x3ec7dc) => {
  try {
    if (_0x3ec7dc) {
      const _0x62329 = new FormData();
      _0x62329.append("icon", _0x3ec7dc);
      Object.entries(_0x39d73a).forEach(([_0xf40902, _0x34925a]) => {
        if (_0x34925a != null) {
          if (Array.isArray(_0x34925a)) {
            _0x62329.append(_0xf40902, JSON.stringify(_0x34925a));
          } else {
            _0x62329.append(_0xf40902, String(_0x34925a));
          }
        }
      });
      return (await _0xb12c8f.patch("/api/v1/applications/" + _0x2b5a71, _0x62329, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })).data;
    }
    return (await _0xb12c8f.patch("/api/v1/applications/" + _0x2b5a71, _0x39d73a)).data;
  } catch (_0x3925b5) {
    throw _0x237ab6(_0x3925b5);
  }
};
const r = async _0xbcd33c => {
  try {
    return (await _0xb12c8f.patch("/api/v1/applications/" + _0xbcd33c, {
      delete_icon: true
    })).data;
  } catch (_0x18d305) {
    throw _0x237ab6(_0x18d305);
  }
};
const s = async (_0x3dadf9, _0x365be8 = false) => {
  try {
    return (await _0xb12c8f.post("/api/v1/applications", {
      name: _0x3dadf9,
      gui_only: _0x365be8
    })).data;
  } catch (_0x59fdde) {
    throw _0x237ab6(_0x59fdde);
  }
};
const c = async (_0x5acfe0, _0x3e69c1) => {
  try {
    return (await _0xb12c8f.delete("/api/v1/applications/" + _0x5acfe0, {
      data: _0x3e69c1
    })).data;
  } catch (_0x5213ca) {
    throw _0x237ab6(_0x5213ca);
  }
};
const o = async _0x532968 => {
  try {
    return (await _0xb12c8f.get("/api/v1/applications/" + _0x532968 + "/oauth2")).data;
  } catch (_0x277f5b) {
    throw _0x237ab6(_0x277f5b);
  }
};
const e = async _0x1fe16b => {
  try {
    return (await _0xb12c8f.post("/api/v1/applications/" + _0x1fe16b + "/oauth2/reset-secret")).data;
  } catch (_0x15cd28) {
    throw _0x237ab6(_0x15cd28);
  }
};
const d = async (_0x11bf30, _0x302484) => {
  try {
    return (await _0xb12c8f.patch("/api/v1/applications/" + _0x11bf30 + "/oauth2", _0x302484)).data;
  } catch (_0xb8231d) {
    throw _0x237ab6(_0xb8231d);
  }
};
const h = async _0x27833a => {
  try {
    return (await _0xb12c8f.get("/api/v1/applications/" + _0x27833a + "/bot")).data;
  } catch (_0x5deac4) {
    throw _0x237ab6(_0x5deac4);
  }
};
const w = async (_0x5e48d9, _0x5ce286, _0x45bba9, _0xb66597) => {
  try {
    if (_0x45bba9 || _0xb66597) {
      const _0x5e9534 = new FormData();
      if (_0x45bba9) {
        _0x5e9534.append("bot_avatar", _0x45bba9);
      }
      if (_0xb66597) {
        _0x5e9534.append("bot_banner", _0xb66597);
      }
      Object.entries(_0x5ce286).forEach(([_0x3e0e05, _0x52723b]) => {
        if (_0x52723b != null) {
          if (typeof _0x52723b == "object") {
            _0x5e9534.append(_0x3e0e05, JSON.stringify(_0x52723b));
          } else {
            _0x5e9534.append(_0x3e0e05, String(_0x52723b));
          }
        }
      });
      return (await _0xb12c8f.patch("/api/v1/applications/" + _0x5e48d9 + "/bot", _0x5e9534, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })).data;
    }
    return (await _0xb12c8f.patch("/api/v1/applications/" + _0x5e48d9 + "/bot", _0x5ce286)).data;
  } catch (_0x208b4f) {
    throw _0x237ab6(_0x208b4f);
  }
};
const y = async _0x5eaa9b => {
  try {
    return (await _0xb12c8f.post("/api/v1/applications/" + _0x5eaa9b + "/token")).data;
  } catch (_0x4e61c0) {
    throw _0x237ab6(_0x4e61c0);
  }
};
const l = async _0x17b9e3 => {
  try {
    return (await _0xb12c8f.get("/api/v1/applications/" + _0x17b9e3 + "/commands")).data;
  } catch (_0x1e7c26) {
    throw _0x237ab6(_0x1e7c26);
  }
};
const m = async (_0x99fab9, _0x158d6f, _0x378fe2) => {
  try {
    if (_0x378fe2) {
      const _0x4f593a = new FormData();
      _0x4f593a.append("name", _0x158d6f.name);
      _0x4f593a.append("description", _0x158d6f.description);
      if (_0x158d6f.options) {
        _0x4f593a.append("options", JSON.stringify(_0x158d6f.options));
      }
      if (_0x158d6f.dm_permission !== undefined) {
        _0x4f593a.append("dm_permission", String(_0x158d6f.dm_permission));
      }
      if (_0x158d6f.nsfw !== undefined) {
        _0x4f593a.append("nsfw", String(_0x158d6f.nsfw));
      }
      _0x4f593a.append("icon", _0x378fe2);
      return (await _0xb12c8f.post("/api/v1/applications/" + _0x99fab9 + "/commands", _0x4f593a, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })).data;
    }
    return (await _0xb12c8f.post("/api/v1/applications/" + _0x99fab9 + "/commands", _0x158d6f)).data;
  } catch (_0x275ade) {
    throw _0x237ab6(_0x275ade);
  }
};
const u = async (_0x19605c, _0x59f1f4, _0x3ef0e5, _0x23580e) => {
  try {
    if (_0x23580e) {
      const _0xc2ad9c = new FormData();
      if (_0x3ef0e5.name) {
        _0xc2ad9c.append("name", _0x3ef0e5.name);
      }
      if (_0x3ef0e5.description) {
        _0xc2ad9c.append("description", _0x3ef0e5.description);
      }
      if (_0x3ef0e5.options) {
        _0xc2ad9c.append("options", JSON.stringify(_0x3ef0e5.options));
      }
      if (_0x3ef0e5.dm_permission !== undefined) {
        _0xc2ad9c.append("dm_permission", String(_0x3ef0e5.dm_permission));
      }
      if (_0x3ef0e5.nsfw !== undefined) {
        _0xc2ad9c.append("nsfw", String(_0x3ef0e5.nsfw));
      }
      _0xc2ad9c.append("icon", _0x23580e);
      return (await _0xb12c8f.patch("/api/v1/applications/" + _0x19605c + "/commands/" + _0x59f1f4, _0xc2ad9c, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })).data;
    }
    return (await _0xb12c8f.patch("/api/v1/applications/" + _0x19605c + "/commands/" + _0x59f1f4, _0x3ef0e5)).data;
  } catch (_0x2bdec4) {
    throw _0x237ab6(_0x2bdec4);
  }
};
const v = async (_0x15c555, _0x5d38f9) => {
  try {
    await _0xb12c8f.delete("/api/v1/applications/" + _0x15c555 + "/commands/" + _0x5d38f9);
  } catch (_0x3e4502) {
    throw _0x237ab6(_0x3e4502);
  }
};
const $ = async _0x3cc28f => {
  try {
    return (await _0xb12c8f.get("/api/v1/applications/" + _0x3cc28f + "/interactions")).data;
  } catch (_0x43e0d5) {
    throw _0x237ab6(_0x43e0d5);
  }
};
const g = async (_0x1fbc5e, _0x19374c) => {
  try {
    return (await _0xb12c8f.patch("/api/v1/applications/" + _0x1fbc5e + "/interactions", {
      interactions_endpoint_url: _0x19374c
    })).data;
  } catch (_0x2e0140) {
    throw _0x237ab6(_0x2e0140);
  }
};
const f = async _0x5488f8 => {
  try {
    return (await _0xb12c8f.get("/api/v1/applications/public", {
      params: _0x5488f8
    })).data;
  } catch (_0x14d7f4) {
    throw _0x237ab6(_0x14d7f4);
  }
};
const b = async _0x294b84 => {
  try {
    return (await _0xb12c8f.get("/api/v1/applications/public/" + _0x294b84)).data;
  } catch (_0x3b69ff) {
    throw _0x237ab6(_0x3b69ff);
  }
};
const _ = async _0x5a9792 => {
  try {
    return (await _0xb12c8f.get("/api/v1/applications/" + _0x5a9792 + "/commands/public")).data;
  } catch (_0x588b26) {
    throw _0x237ab6(_0x588b26);
  }
};
const S = async (_0x56c0d0, _0x3dff25) => {
  try {
    await _0xb12c8f.post("/api/v1/applications/public/" + _0x56c0d0 + "/report", _0x3dff25);
  } catch (_0x167c19) {
    throw _0x237ab6(_0x167c19);
  }
};
const O = async _0xdd957 => {
  try {
    return (await _0xb12c8f.get("/api/v1/applications/oauth2/authorize/info", {
      params: {
        client_id: _0xdd957
      }
    })).data;
  } catch (_0x5c526c) {
    throw _0x237ab6(_0x5c526c);
  }
};
const j = async _0x19fda9 => {
  try {
    return (await _0xb12c8f.post("/api/v1/oauth2/authorize", _0x19fda9)).data;
  } catch (_0x129eb3) {
    throw _0x237ab6(_0x129eb3);
  }
};
const C = async _0x2d5ae5 => {
  try {
    return (await _0xb12c8f.get("/api/v1/applications/" + _0x2d5ae5 + "/listing/eligibility")).data;
  } catch (_0x2ce2a0) {
    throw _0x237ab6(_0x2ce2a0);
  }
};
const D = async _0x46b485 => {
  try {
    return (await _0xb12c8f.post("/api/v1/applications/" + _0x46b485 + "/listing/request")).data;
  } catch (_0x21687d) {
    throw _0x237ab6(_0x21687d);
  }
};
const F = async _0x8e18c3 => {
  try {
    return (await _0xb12c8f.post("/api/v1/applications/" + _0x8e18c3 + "/listing/cancel")).data;
  } catch (_0xe0626b) {
    throw _0x237ab6(_0xe0626b);
  }
};
export { _ as A, i as a, c as b, s as c, r as d, C as e, F as f, n as g, o as h, d as i, e as j, h as k, w as l, y as m, $ as n, g as o, l as p, u as q, D as r, m as s, v as t, p as u, f as v, O as w, j as x, S as y, b as z };