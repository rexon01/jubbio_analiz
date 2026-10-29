const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./OAuth2AuthorizePage-DqyhKGcn.js", "./index-cQfEKR1W.js", "./index-Cm--a4Hl.css", "./TurnstileModal-DSCaGaLL.js", "./submit-button-B2LF_DTf.js", "./developer-DXeZvdzI.js", "./avatar-C-4BWxT3.js", "./loader-circle-CTtxa1g9.js", "./arrow-right-DvlsXLCB.js"]) => i.map(i => d[i]);
import { v as _0x48a86e, j as _0x59eb92, aJ as _0x329db, r as _0x4d15ff, aK as _0x28057b, _ as _0x56a7cb } from "./index-cQfEKR1W.js";
const r = _0x4d15ff.lazy(() => _0x56a7cb(() => import("./OAuth2AuthorizePage-DqyhKGcn.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]), import.meta.url));
function n() {
  const [_0x1c34e3] = _0x48a86e();
  const _0x149060 = (_0x1c34e3.get("scope") || "").split(/[\s+]/).includes("bot");
  const _0x2571b4 = _0x59eb92.jsx(_0x4d15ff.Suspense, {
    fallback: _0x59eb92.jsx(_0x28057b, {}),
    children: _0x59eb92.jsx(r, {})
  });
  if (_0x149060) {
    return _0x59eb92.jsx(_0x329db, {
      deepLink: "jubbio://oauth2/authorize?" + _0x1c34e3.toString(),
      children: _0x2571b4
    });
  } else {
    return _0x2571b4;
  }
}
export { n as default };