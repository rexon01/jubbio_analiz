import { ah as _0x561c2a, c as _0x207ad4, O as _0x2d2e20 } from "./index-cQfEKR1W.js";
const t = async (_0x153b8d, _0x124516) => {
  try {
    return (await _0x207ad4.post(_0x153b8d, _0x124516)).data;
  } catch (_0x54b5cc) {
    throw _0x2d2e20(_0x54b5cc);
  }
};
const r = async _0x2c5e9d => {
  const _0x17c72e = await t("/api/v1/auth/2fa/setup", _0x2c5e9d);
  if (!_0x561c2a(_0x17c72e, ["message", "method"])) {
    throw new Error("Invalid 2FA setup response");
  }
  return _0x17c72e;
};
const n = async (_0x2694c1, _0x239d86, _0x21edec) => {
  const _0x24e6f1 = {
    code: _0x2694c1,
    method: _0x239d86
  };
  if (_0x239d86 === "app" && _0x21edec) {
    _0x24e6f1.sessionId = _0x21edec;
  }
  const _0xc8c1d7 = await t("/api/v1/auth/2fa/verify", _0x24e6f1);
  if (!_0x561c2a(_0xc8c1d7, ["success", "message"])) {
    throw new Error("Invalid 2FA verification response");
  }
  return _0xc8c1d7;
};
const o = async () => {
  const _0x2fe6cf = await t("/api/v1/auth/2fa/resend-email");
  if (!_0x561c2a(_0x2fe6cf, ["message", "expiresIn"])) {
    throw new Error("Invalid email 2FA resend response");
  }
  return _0x2fe6cf;
};
const i = async () => {
  const _0x3fa6c0 = await t("/api/v1/auth/2fa/send-code");
  if (!_0x561c2a(_0x3fa6c0, ["message"])) {
    throw new Error("Invalid email 2FA send response");
  }
  return _0x3fa6c0;
};
const c = async (_0x1b11df, _0x4a3617) => {
  const _0x47b5aa = await t("/api/v1/auth/2fa/disable", {
    password: _0x1b11df,
    twoFactorCode: _0x4a3617
  });
  if (!_0x561c2a(_0x47b5aa, ["message"])) {
    throw new Error("Invalid 2FA disable response");
  }
  return _0x47b5aa;
};
const d = async _0x355402 => {
  const _0x1000af = await t("/api/v1/auth/2fa/regenerate-backup", {
    password: _0x355402
  });
  if (!_0x561c2a(_0x1000af, ["message", "backupCodes"])) {
    throw new Error("Invalid backup codes regeneration response");
  }
  return _0x1000af;
};
const p = async (_0x1c0c24, _0x44d558) => {
  const _0x4372c6 = {
    password: _0x1c0c24
  };
  if (_0x44d558) {
    _0x4372c6.twoFactorCode = _0x44d558;
  }
  const _0x35c821 = await t("/api/v1/auth/privacy/delete-account", _0x4372c6);
  if (!_0x561c2a(_0x35c821, ["message", "success", "deletionDate", "auditTrailKept"])) {
    throw new Error("Invalid account deletion response");
  }
  return _0x35c821;
};
const w = async () => {
  try {
    const _0x42cf20 = await _0x207ad4.get("/api/v1/auth/2fa/status");
    const _0x3f7c9c = _0x42cf20.data.method === "app" ? "totp" : _0x42cf20.data.method || null;
    return {
      twoFactorEnabled: _0x42cf20.data.enabled,
      twoFactorMethod: _0x3f7c9c
    };
  } catch (_0x3f1f2c) {
    throw _0x2d2e20(_0x3f1f2c);
  }
};
export { p as a, r as b, w as c, c as d, d as e, o as r, i as s, n as v };