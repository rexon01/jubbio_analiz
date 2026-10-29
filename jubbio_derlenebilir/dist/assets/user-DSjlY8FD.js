import { t as _0x2be917, c as _0x47189c, O as _0x14ebb0 } from "./index-cQfEKR1W.js"; /**
                                                                                      * @license lucide-react v0.535.0 - ISC
                                                                                      *
                                                                                      * This source code is licensed under the ISC license.
                                                                                      * See the LICENSE file in the root directory of this source tree.
                                                                                      */
const c = _0x2be917("clock", [["path", {
  d: "M12 6v6l4 2",
  key: "mmk7yg"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}]]);
const e = _0x2be917("log-out", [["path", {
  d: "m16 17 5-5-5-5",
  key: "1bji2h"
}], ["path", {
  d: "M21 12H9",
  key: "dn1m92"
}], ["path", {
  d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
  key: "1uf3rs"
}]]);
const r = async () => {
  try {
    return (await _0x47189c.get("/api/v1/auth/privacy-settings")).data;
  } catch (_0x4a23e7) {
    throw _0x14ebb0(_0x4a23e7);
  }
};
const h = async _0x5123c2 => {
  try {
    return (await _0x47189c.patch("/api/v1/auth/privacy-settings", _0x5123c2)).data;
  } catch (_0x360810) {
    throw _0x14ebb0(_0x360810);
  }
};
const y = async () => {
  try {
    return (await _0x47189c.get("/api/v1/auth/privacy/export", {
      responseType: "blob"
    })).data;
  } catch (_0x26bd20) {
    throw _0x14ebb0(_0x26bd20);
  }
};
const p = async _0x38ad57 => {
  try {
    return (await _0x47189c.patch("/api/v1/auth/me/presence-status", {
      presence_status: _0x38ad57
    })).data;
  } catch (_0x18e5fa) {
    throw _0x14ebb0(_0x18e5fa);
  }
};
const i = async (_0x4163c9, _0x1d800d) => {
  try {
    return (await _0x47189c.patch("/api/v1/auth/me/custom-status", {
      text: _0x4163c9,
      emoji: _0x1d800d
    })).data;
  } catch (_0x3860b7) {
    throw _0x14ebb0(_0x3860b7);
  }
};
const u = async () => {
  try {
    return (await _0x47189c.delete("/api/v1/auth/me/custom-status")).data;
  } catch (_0x5066cd) {
    throw _0x14ebb0(_0x5066cd);
  }
};
export { c as C, e as L, h as a, u as c, y as e, r as g, i as s, p as u };