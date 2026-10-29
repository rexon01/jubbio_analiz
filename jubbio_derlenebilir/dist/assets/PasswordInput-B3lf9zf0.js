import { R as _0x3a7a6a, r as _0x5e025b, j as _0x4cc229, s as _0x51ddca, I as _0x22532d } from "./index-cQfEKR1W.js";
import { I as _0x107930 } from "./input-AMyERYwJ.js";
const n = _0x4cc229.jsx(_0x22532d, {
  icon: "solar:lock-password-bold-duotone",
  className: "size-5"
});
const d = _0x3a7a6a.forwardRef(({
  className: _0xf9c621,
  type: _0x521c2d,
  icon: _0x380732,
  ..._0x55c196
}, _0x2ec556) => {
  const [_0x3d563c, _0x10c188] = _0x5e025b.useState(false);
  const _0x32d84a = _0x380732 === undefined ? n : _0x380732;
  const _0x116267 = _0x4cc229.jsx("div", {
    className: "flex cursor-pointer items-center",
    onMouseDown: _0x4deed9 => _0x4deed9.preventDefault(),
    onClick: () => {
      _0x10c188(!_0x3d563c);
    },
    children: _0x3d563c ? _0x4cc229.jsx(_0x22532d, {
      icon: "solar:eye-closed-bold-duotone",
      className: "h-5 w-5 text-muted-foreground"
    }) : _0x4cc229.jsx(_0x22532d, {
      icon: "solar:eye-bold-duotone",
      className: "h-5 w-5 text-muted-foreground"
    })
  });
  return _0x4cc229.jsx(_0x107930, {
    type: _0x3d563c ? "text" : "password",
    className: _0x51ddca(_0xf9c621),
    ref: _0x2ec556,
    icon: _0x32d84a,
    rightElement: _0x116267,
    ..._0x55c196
  });
});
d.displayName = "PasswordInput";
export { d as default };