import { r as _0x3e17ea, j as _0x2fd1b0, W as _0x1336e7, s as _0x4c5adf } from "./index-cQfEKR1W.js";
var i = Object.defineProperty;
var e = (_0x3ba6f2, _0x5e6332) => i(_0x3ba6f2, "name", {
  value: _0x5e6332,
  configurable: true
});
var n = {
  Horizontal: "horizontal",
  Vertical: "vertical"
};
var l = n.Horizontal;
var s = Object.values(n);
var c = _0x3e17ea.forwardRef(e(function (_0x117bc4, _0x5ea111) {
  const {
    decorative: _0x344321,
    orientation: _0x58dcef = l,
    ..._0x207b80
  } = _0x117bc4;
  const _0x1a2ce3 = d(_0x58dcef) ? _0x58dcef : l;
  const _0x1879c6 = _0x344321 ? {
    role: "none"
  } : {
    "aria-orientation": _0x1a2ce3 === n.Vertical ? _0x1a2ce3 : undefined,
    role: "separator"
  };
  return _0x2fd1b0.jsx(_0x1336e7.div, {
    "data-orientation": _0x1a2ce3,
    ..._0x1879c6,
    ..._0x207b80,
    ref: _0x5ea111
  });
}, "Separator"));
function d(_0x3ccb34) {
  return s.includes(_0x3ccb34);
}
function u({
  className: _0x22b223,
  orientation: _0x4c04dd = "horizontal",
  decorative: _0x21dc62 = true,
  ..._0x8a152c
}) {
  return _0x2fd1b0.jsx(c, {
    "data-slot": "separator",
    decorative: _0x21dc62,
    orientation: _0x4c04dd,
    className: _0x4c5adf("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", _0x22b223),
    ..._0x8a152c
  });
}
e(d, "isValidOrientation");
export { u as S };