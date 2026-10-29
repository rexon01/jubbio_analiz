import { c as _0x4faef1, O as _0x1e9ad8 } from "./index-cQfEKR1W.js";
async function t(_0x2ec08f, _0x101dcb) {
  try {
    await _0x4faef1.post("/api/v1/reports/messages/" + _0x2ec08f, _0x101dcb);
  } catch (_0x58bf1a) {
    throw _0x1e9ad8(_0x58bf1a);
  }
}
async function r(_0x3e3bda, _0x3b713e) {
  try {
    await _0x4faef1.post("/api/v1/reports/users/" + _0x3e3bda, _0x3b713e);
  } catch (_0x136c0d) {
    throw _0x1e9ad8(_0x136c0d);
  }
}
export { t as a, r };