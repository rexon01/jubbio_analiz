import { c as _0x260004, O as _0x1e7709 } from "./index-cQfEKR1W.js";
const r = new class {
  async apply(_0x9fe4a4) {
    try {
      return (await _0x260004.post("/api/v1/partnership/apply", _0x9fe4a4)).data;
    } catch (_0x4d1a97) {
      throw _0x1e7709(_0x4d1a97);
    }
  }
  async getStatus(_0x1041af) {
    try {
      return (await _0x260004.get("/api/v1/partnership/status/" + _0x1041af)).data;
    } catch (_0x5edbcd) {
      throw _0x1e7709(_0x5edbcd);
    }
  }
}();
export { r as p };