import { c as _0x8bdad } from "./index-cQfEKR1W.js";
const a = "https://gateway.jubbio.com";
const i = new class {
  async getProviders() {
    return (await _0x8bdad.get(a + "/api/v1/connections/providers")).data;
  }
  async getUserConnections() {
    return (await _0x8bdad.get(a + "/api/v1/connections")).data;
  }
  async authorize(_0x470982) {
    return (await _0x8bdad.get(a + "/api/v1/connections/" + _0x470982 + "/authorize")).data.url;
  }
  async disconnect(_0x5e74c3) {
    await _0x8bdad.delete(a + "/api/v1/connections/" + _0x5e74c3);
  }
  async updateVisibility(_0x268527, _0x4dad2d) {
    await _0x8bdad.patch(a + "/api/v1/connections/" + _0x268527 + "/visibility", {
      is_visible: _0x4dad2d
    });
  }
  async getUserPublicConnections(_0x11fcc1) {
    return (await _0x8bdad.get(a + "/api/v1/connections/user/" + _0x11fcc1)).data;
  }
}();
export { i as c };