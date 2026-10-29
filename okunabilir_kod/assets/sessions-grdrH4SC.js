import { c as _0x3d60fd, O as _0x3c86eb } from "./index-cQfEKR1W.js";
async function s() {
  try {
    return (await _0x3d60fd.get("/api/v1/auth/sessions")).data;
  } catch (_0x286f40) {
    throw _0x3c86eb(_0x286f40);
  }
}
async function n(_0x610795) {
  try {
    await _0x3d60fd.delete("/api/v1/auth/sessions/" + _0x610795);
  } catch (_0x35bcc9) {
    throw _0x3c86eb(_0x35bcc9);
  }
}
async function i() {
  try {
    return (await _0x3d60fd.delete("/api/v1/auth/sessions")).data;
  } catch (_0x322031) {
    throw _0x3c86eb(_0x322031);
  }
}
async function c(_0x4f9aec, _0x3e3199) {
  try {
    return (await _0x3d60fd.put("/api/v1/auth/sessions/" + _0x4f9aec + "/data", {
      session_data: _0x3e3199
    })).data.data;
  } catch (_0x1b484e) {
    throw _0x3c86eb(_0x1b484e);
  }
}
async function r(_0x20803c, _0x220bb6) {
  try {
    return (await _0x3d60fd.patch("/api/v1/auth/sessions/" + _0x20803c + "/data", {
      session_data: _0x220bb6
    })).data.data;
  } catch (_0x2b891b) {
    throw _0x3c86eb(_0x2b891b);
  }
}
async function e(_0x21b29d, _0x6afb62) {
  try {
    return (await _0x3d60fd.put("/api/v1/auth/sessions/" + _0x21b29d + "/security", {
      security_context: _0x6afb62
    })).data.data;
  } catch (_0x5dd72e) {
    throw _0x3c86eb(_0x5dd72e);
  }
}
async function o(_0x2a8bc5, _0x4e2511) {
  try {
    return (await _0x3d60fd.patch("/api/v1/auth/sessions/" + _0x2a8bc5 + "/security", {
      security_context: _0x4e2511
    })).data.data;
  } catch (_0x22f4e4) {
    throw _0x3c86eb(_0x22f4e4);
  }
}
async function u() {
  try {
    return (await _0x3d60fd.get("/api/v1/auth/analytics/session-stats")).data;
  } catch (_0x47a83e) {
    throw _0x3c86eb(_0x47a83e);
  }
}
async function h() {
  try {
    return (await _0x3d60fd.get("/api/v1/auth/analytics/device-activity")).data;
  } catch (_0x4060a6) {
    throw _0x3c86eb(_0x4060a6);
  }
}
async function y() {
  try {
    return (await _0x3d60fd.get("/api/v1/auth/analytics/session-limit")).data;
  } catch (_0xf38a79) {
    throw _0x3c86eb(_0xf38a79);
  }
}
export { i as endAllSessions, n as endSession, h as getDeviceActivity, y as getSessionLimit, u as getSessionStats, s as getSessions, o as patchSecurityContext, r as patchSessionData, e as updateSecurityContext, c as updateSessionData };