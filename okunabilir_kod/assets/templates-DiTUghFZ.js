import { c as _0x1ae7b5, O as _0x6cb22b } from "./index-cQfEKR1W.js";
async function e(_0x5eca84, _0x39d0bd) {
  try {
    const _0x5f1d8a = await _0x1ae7b5.post("/api/v1/guilds/" + _0x5eca84 + "/template", _0x39d0bd);
    return _0x5f1d8a.data.template || _0x5f1d8a.data;
  } catch (_0xbd362f) {
    throw _0x6cb22b(_0xbd362f);
  }
}
async function n(_0x466d41) {
  try {
    const _0x3ac049 = await _0x1ae7b5.get("/api/v1/templates/" + _0x466d41);
    return _0x3ac049.data.template || _0x3ac049.data;
  } catch (_0x9e293f) {
    throw _0x6cb22b(_0x9e293f);
  }
}
async function s(_0x30a495) {
  try {
    const _0x4d8664 = await _0x1ae7b5.get("/api/v1/guilds/" + _0x30a495 + "/template");
    return _0x4d8664.data.template || _0x4d8664.data;
  } catch (_0x10ba96) {
    throw _0x6cb22b(_0x10ba96);
  }
}
async function c(_0x45e79b, _0x3d192b) {
  try {
    const _0x77a4ab = await _0x1ae7b5.put("/api/v1/guilds/" + _0x45e79b + "/template", _0x3d192b || {});
    return _0x77a4ab.data.template || _0x77a4ab.data;
  } catch (_0x3af3de) {
    throw _0x6cb22b(_0x3af3de);
  }
}
async function i(_0x59255d) {
  try {
    return (await _0x1ae7b5.delete("/api/v1/guilds/" + _0x59255d + "/template")).data;
  } catch (_0x5d5448) {
    throw _0x6cb22b(_0x5d5448);
  }
}
async function r(_0x32d112, _0xd3fdf4) {
  try {
    return (await _0x1ae7b5.post("/api/v1/templates/" + _0x32d112 + "/use", _0xd3fdf4)).data;
  } catch (_0x42bdd3) {
    throw _0x6cb22b(_0x42bdd3);
  }
}
async function o(_0x216ebd) {
  return (await _0x1ae7b5.get("/api/v1/discord-templates/" + encodeURIComponent(_0x216ebd))).data.template;
}
async function p(_0x506ed9, _0x24f7f0) {
  return (await _0x1ae7b5.post("/api/v1/discord-templates/" + encodeURIComponent(_0x506ed9) + "/use", {
    name: _0x24f7f0
  })).data;
}
export { n as a, s as b, e as c, i as d, o as g, p as i, c as s, r as u };