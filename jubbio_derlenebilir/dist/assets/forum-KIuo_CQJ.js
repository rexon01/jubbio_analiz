import { a0 as _0x3ebc22 } from "./soundboardFx-C2LP-Hjs.js";
import { c as _0x533c7c, O as _0x16c81f } from "./index-cQfEKR1W.js";
async function s(_0x4deca7, _0x29f913, _0x55e65c) {
  try {
    return (await _0x533c7c.get("/api/v1/channels/" + _0x4deca7 + "/" + _0x29f913 + "/forum/posts", {
      params: _0x55e65c
    })).data.data;
  } catch (_0x269dd6) {
    throw _0x16c81f(_0x269dd6);
  }
}
async function c(_0x2a22e5, _0x60c694, _0xb3d18d) {
  try {
    const {
      files: _0x2df79e,
      ..._0x5622f
    } = _0xb3d18d;
    const _0x162d09 = _0x2df79e?.length ? await _0x3ebc22(_0x60c694, _0x2df79e, undefined, undefined, "forum") : null;
    if (_0x162d09) {
      const _0x2554e0 = await _0x533c7c.post("/api/v1/channels/" + _0x2a22e5 + "/" + _0x60c694 + "/forum/posts", {
        ..._0x5622f,
        upload_ids: _0x162d09.ids
      });
      _0x162d09.consumed();
      return _0x2554e0.data.data;
    }
    if (_0x2df79e && _0x2df79e.length > 0) {
      const _0x17524a = new FormData();
      _0x17524a.append("title", _0x5622f.title);
      if (_0x5622f.content) {
        _0x17524a.append("content", _0x5622f.content);
      }
      if (_0x5622f.tag_ids && _0x5622f.tag_ids.length > 0) {
        _0x17524a.append("tag_ids", _0x5622f.tag_ids.join(","));
      }
      if (_0x5622f.is_private !== undefined) {
        _0x17524a.append("is_private", String(_0x5622f.is_private));
      }
      for (const _0x36d686 of _0x2df79e) {
        _0x17524a.append("files", _0x36d686);
      }
      return (await _0x533c7c.post("/api/v1/channels/" + _0x2a22e5 + "/" + _0x60c694 + "/forum/posts", _0x17524a, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })).data.data;
    }
    return (await _0x533c7c.post("/api/v1/channels/" + _0x2a22e5 + "/" + _0x60c694 + "/forum/posts", _0x5622f)).data.data;
  } catch (_0x1edef1) {
    throw _0x16c81f(_0x1edef1);
  }
}
async function o(_0x56a780, _0x5b92f6, _0x2dec6b) {
  try {
    return (await _0x533c7c.get("/api/v1/channels/" + _0x56a780 + "/" + _0x5b92f6 + "/forum/posts/" + _0x2dec6b)).data.data;
  } catch (_0x53b2cc) {
    throw _0x16c81f(_0x53b2cc);
  }
}
async function r(_0x4ef4ad, _0xb8011f, _0x385667, _0xc20200) {
  try {
    return (await _0x533c7c.patch("/api/v1/channels/" + _0x4ef4ad + "/" + _0xb8011f + "/forum/posts/" + _0x385667, _0xc20200)).data.data;
  } catch (_0x110651) {
    throw _0x16c81f(_0x110651);
  }
}
async function i(_0x4d5626, _0x45382f, _0x3963b4) {
  try {
    await _0x533c7c.delete("/api/v1/channels/" + _0x4d5626 + "/" + _0x45382f + "/forum/posts/" + _0x3963b4);
  } catch (_0x4d0e93) {
    throw _0x16c81f(_0x4d0e93);
  }
}
async function e(_0x2e7af4, _0x2866d2, _0x58e5e0, _0x38f329) {
  try {
    await _0x533c7c.patch("/api/v1/channels/" + _0x2e7af4 + "/" + _0x2866d2 + "/forum/posts/" + _0x58e5e0 + "/status", {
      status: _0x38f329
    });
  } catch (_0x59dcf5) {
    throw _0x16c81f(_0x59dcf5);
  }
}
async function h(_0x36426d, _0x48dd50, _0x30bcf2, _0x2f0913) {
  try {
    await _0x533c7c.patch("/api/v1/channels/" + _0x36426d + "/" + _0x48dd50 + "/forum/posts/" + _0x30bcf2 + "/pin", {
      pinned: _0x2f0913
    });
  } catch (_0x318e4b) {
    throw _0x16c81f(_0x318e4b);
  }
}
async function p(_0x59f4a4, _0x3afded, _0x550e0b, _0xfeda33) {
  try {
    await _0x533c7c.patch("/api/v1/channels/" + _0x59f4a4 + "/" + _0x3afded + "/forum/posts/" + _0x550e0b + "/lock", {
      locked: _0xfeda33
    });
  } catch (_0x15d123) {
    throw _0x16c81f(_0x15d123);
  }
}
async function u(_0x191e9b, _0x1b5010, _0x48cf40, _0x44d96f) {
  try {
    await _0x533c7c.patch("/api/v1/channels/" + _0x191e9b + "/" + _0x1b5010 + "/forum/posts/" + _0x48cf40 + "/answer", {
      message_id: _0x44d96f
    });
  } catch (_0x11293b) {
    throw _0x16c81f(_0x11293b);
  }
}
async function d(_0x3c0000, _0x2fed7c, _0x909618, _0xac723e) {
  try {
    await _0x533c7c.post("/api/v1/channels/" + _0x3c0000 + "/" + _0x2fed7c + "/forum/posts/" + _0x909618 + "/vote", {
      value: _0xac723e
    });
  } catch (_0x1dc715) {
    throw _0x16c81f(_0x1dc715);
  }
}
async function $(_0x4af103, _0x733908, _0x3b1682) {
  try {
    await _0x533c7c.delete("/api/v1/channels/" + _0x4af103 + "/" + _0x733908 + "/forum/posts/" + _0x3b1682 + "/vote");
  } catch (_0x4acc27) {
    throw _0x16c81f(_0x4acc27);
  }
}
async function f(_0x1683ce, _0xded5ea, _0x4af275, _0x131fa2) {
  try {
    await _0x533c7c.post("/api/v1/channels/" + _0x1683ce + "/" + _0xded5ea + "/forum/posts/" + _0x4af275 + "/subscribe", _0x131fa2 ? {
      notify_level: _0x131fa2
    } : undefined);
  } catch (_0x1dc599) {
    throw _0x16c81f(_0x1dc599);
  }
}
async function w(_0x71b77c, _0xc0fe69, _0x58129f) {
  try {
    await _0x533c7c.delete("/api/v1/channels/" + _0x71b77c + "/" + _0xc0fe69 + "/forum/posts/" + _0x58129f + "/subscribe");
  } catch (_0x3e52b1) {
    throw _0x16c81f(_0x3e52b1);
  }
}
async function l(_0x5a5e1a, _0x2d8a6d) {
  try {
    return (await _0x533c7c.get("/api/v1/channels/" + _0x5a5e1a + "/" + _0x2d8a6d + "/forum/tags")).data.data;
  } catch (_0x3ad60b) {
    throw _0x16c81f(_0x3ad60b);
  }
}
async function y(_0x2befe5, _0x7fcc44, _0x43d21c) {
  try {
    return (await _0x533c7c.post("/api/v1/channels/" + _0x2befe5 + "/" + _0x7fcc44 + "/forum/tags", _0x43d21c)).data.data;
  } catch (_0x337eb5) {
    throw _0x16c81f(_0x337eb5);
  }
}
async function m(_0x2da19a, _0xb54e02, _0x2d719a, _0x48b1f0) {
  try {
    return (await _0x533c7c.patch("/api/v1/channels/" + _0x2da19a + "/" + _0xb54e02 + "/forum/tags/" + _0x2d719a, _0x48b1f0)).data.data;
  } catch (_0x6f7551) {
    throw _0x16c81f(_0x6f7551);
  }
}
async function v(_0x4a7004, _0x1b562d, _0x50241b) {
  try {
    await _0x533c7c.delete("/api/v1/channels/" + _0x4a7004 + "/" + _0x1b562d + "/forum/tags/" + _0x50241b);
  } catch (_0x4eea24) {
    throw _0x16c81f(_0x4eea24);
  }
}
async function g(_0x416b69, _0xb7cd9f) {
  try {
    return (await _0x533c7c.get("/api/v1/channels/" + _0x416b69 + "/" + _0xb7cd9f + "/forum/settings")).data.data;
  } catch (_0x24547c) {
    throw _0x16c81f(_0x24547c);
  }
}
async function _(_0x463128, _0x5f4754, _0x42dc35) {
  try {
    return (await _0x533c7c.patch("/api/v1/channels/" + _0x463128 + "/" + _0x5f4754 + "/forum/settings", _0x42dc35)).data.data;
  } catch (_0x43902) {
    throw _0x16c81f(_0x43902);
  }
}
async function b(_0x1cbbc3, _0xca2213, _0x4b6dc8) {
  try {
    return (await _0x533c7c.get("/api/v1/channels/" + _0x1cbbc3 + "/" + _0xca2213 + "/forum/search", {
      params: _0x4b6dc8
    })).data.data;
  } catch (_0x138ada) {
    throw _0x16c81f(_0x138ada);
  }
}
async function j(_0x4c8da5, _0x519900) {
  try {
    return (await _0x533c7c.get("/api/v1/channels/" + _0x4c8da5 + "/" + _0x519900 + "/forum/subscribed")).data.data ?? [];
  } catch (_0x5681a6) {
    throw _0x16c81f(_0x5681a6);
  }
}
export { g as a, w as b, o as c, p as d, h as e, e as f, l as g, i as h, r as i, c as j, j as k, s as l, u as m, b as n, y as o, m as p, v as q, $ as r, f as s, _ as u, d as v };