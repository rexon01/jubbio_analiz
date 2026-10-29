import { r as _0x53352f, j as _0x360459, W as _0x287911, s as _0x121fd2 } from "./index-cQfEKR1W.js";
var o = Object.defineProperty;
var r = (_0x4be583, _0x38f51e) => o(_0x4be583, "name", {
  value: _0x38f51e,
  configurable: true
});
var _Component = _0x53352f.forwardRef(r(function (_0x5ab94a, _0x261ead) {
  return <_0x287911.label {..._0x5ab94a} ref={_0x261ead} onMouseDown={_0x389e46 => {
    if (!_0x389e46.target.closest("button, input, select, textarea")) {
      _0x5ab94a.onMouseDown?.(_0x389e46);
      if (!_0x389e46.defaultPrevented && _0x389e46.detail > 1) {
        _0x389e46.preventDefault();
      }
    }
  }} />;
}, "Label"));
function l({
  className: _0x348830,
  ..._0x52836c
}) {
  return <_Component data-slot="label" className={_0x121fd2("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", _0x348830)} {..._0x52836c} />;
}
export { l as L };