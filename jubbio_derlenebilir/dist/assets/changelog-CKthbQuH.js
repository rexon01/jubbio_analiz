import { c as _0x564a98, a9 as _0x5b3d28 } from "./index-cQfEKR1W.js";
async function o() {
  const _0x27fc5b = {
    web: "web",
    desktop: "desktop",
    mobile: "mobile",
    android: "android",
    ios: "ios"
  }[_0x5b3d28] || "web";
  const {
    data: _0x333fe1
  } = await _0x564a98.get("/api/v1/changelog/latest", {
    params: {
      platform: _0x27fc5b
    }
  });
  return _0x333fe1.entry;
}
async function s() {
  const {
    data: _0x56da8d
  } = await _0x564a98.post("/api/v1/users/@me/changelog/dismiss");
  return _0x56da8d;
}
export { s as dismissChangelog, o as fetchLatestChangelog };