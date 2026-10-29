import { r as _0x1f8a6d, j as _0x2377a1, W as _0x2b67f3, U as _0x113076, ak as _0x330f7b, $ as _0x1d3119, Y as _0x5dd57c, a1 as _0x3274ea, s as _0x2aa615 } from "./index-cQfEKR1W.js";
var u = Object.defineProperty;
var d = (_0x193305, _0x1a32eb) => u(_0x193305, "name", {
  value: _0x1a32eb,
  configurable: true
});
var l = "Switch";
var [p, h] = _0x5dd57c(l);
var [f, b] = p(l);
function m(_0x8f6c3c) {
  const {
    __scopeSwitch: _0x2a95cb,
    checked: _0x161801,
    children: _0xae08c3,
    defaultChecked: _0x5df9ef,
    disabled: _0x4fcd03,
    form: _0x314c0b,
    name: _0x18740f,
    onCheckedChange: _0x5a30d7,
    required: _0x242da4,
    value: _0xf3563e = "on",
    internal_do_not_use_render: _0x3bacc7
  } = _0x8f6c3c;
  const [_0x2ac1c5, _0x47e9c3] = _0x3274ea({
    prop: _0x161801,
    defaultProp: _0x5df9ef ?? false,
    onChange: _0x5a30d7,
    caller: l
  });
  const [_0x433912, _0x31390b] = _0x1f8a6d.useState(null);
  const [_0x48be69, _0x5a520b] = _0x1f8a6d.useState(null);
  const _0x11c137 = _0x1f8a6d.useRef(false);
  const [_0x1843cb, _0x3068cd] = _0x1f8a6d.useReducer(_0x45df25 => _0x45df25 + 1, 0);
  const _0x337baa = !_0x433912 || !!_0x314c0b || !!_0x433912.closest("form");
  const _0x29c237 = {
    checked: _0x2ac1c5,
    setChecked: _0x47e9c3,
    disabled: _0x4fcd03,
    control: _0x433912,
    setControl: _0x31390b,
    name: _0x18740f,
    form: _0x314c0b,
    value: _0xf3563e,
    hasConsumerStoppedPropagationRef: _0x11c137,
    userInteractionCount: _0x1843cb,
    onUserInteraction: _0x3068cd,
    required: _0x242da4,
    defaultChecked: _0x5df9ef,
    isFormControl: _0x337baa,
    bubbleInput: _0x48be69,
    setBubbleInput: _0x5a520b
  };
  return _0x2377a1.jsx(f, {
    scope: _0x2a95cb,
    ..._0x29c237,
    children: v(_0x3bacc7) ? _0x3bacc7(_0x29c237) : _0xae08c3
  });
}
d(m, "SwitchProvider");
var k = _0x1f8a6d.forwardRef(d(function ({
  __scopeSwitch: _0x17a544,
  onClick: _0x24ab45,
  ..._0x7664bf
}, _0x4f61e3) {
  const {
    control: _0xc865d8,
    form: _0x38778b,
    value: _0x580495,
    disabled: _0x27ab77,
    checked: _0x43e4f4,
    required: _0x58ec8d,
    setControl: _0x485703,
    setChecked: _0x47d576,
    hasConsumerStoppedPropagationRef: _0x397343,
    onUserInteraction: _0x3e1c60,
    isFormControl: _0x5d5234,
    bubbleInput: _0x42ca55
  } = b("SwitchTrigger", _0x17a544);
  const _0x8c1e2c = _0x113076(_0x4f61e3, _0x485703);
  const _0x8013ae = _0x1f8a6d.useRef(_0x43e4f4);
  _0x1f8a6d.useEffect(() => {
    const _0x198345 = _0x38778b ? _0xc865d8?.ownerDocument.getElementById(_0x38778b) : _0xc865d8?.form;
    if (_0x198345 instanceof HTMLFormElement) {
      const _0x318ede = d(() => _0x47d576(_0x8013ae.current), "reset");
      _0x198345.addEventListener("reset", _0x318ede);
      return () => _0x198345.removeEventListener("reset", _0x318ede);
    }
  }, [_0xc865d8, _0x38778b, _0x47d576]);
  return _0x2377a1.jsx(_0x2b67f3.button, {
    type: "button",
    role: "switch",
    "aria-checked": _0x43e4f4,
    "aria-required": _0x58ec8d,
    "data-state": C(_0x43e4f4),
    "data-disabled": _0x27ab77 ? "" : undefined,
    disabled: _0x27ab77,
    value: _0x580495,
    ..._0x7664bf,
    ref: _0x8c1e2c,
    onClick: _0x1d3119(_0x24ab45, _0x2eeeb6 => {
      _0x3e1c60();
      _0x47d576(_0x3c510c => !_0x3c510c);
      if (_0x42ca55 && _0x5d5234) {
        _0x397343.current = _0x2eeeb6.isPropagationStopped();
        if (!_0x397343.current) {
          _0x2eeeb6.stopPropagation();
        }
      }
    })
  });
}, "SwitchTrigger"));
var x = _0x1f8a6d.forwardRef(d(function (_0x18a93f, _0x536f92) {
  const {
    __scopeSwitch: _0x2dfa83,
    name: _0x5d0512,
    checked: _0x5aedaa,
    defaultChecked: _0x21b3f2,
    required: _0x4fe28b,
    disabled: _0x32dce1,
    value: _0x1a15e5,
    onCheckedChange: _0x4d7874,
    form: _0x29c096,
    ..._0x4f79e2
  } = _0x18a93f;
  return _0x2377a1.jsx(m, {
    __scopeSwitch: _0x2dfa83,
    checked: _0x5aedaa,
    defaultChecked: _0x21b3f2,
    disabled: _0x32dce1,
    required: _0x4fe28b,
    onCheckedChange: _0x4d7874,
    name: _0x5d0512,
    form: _0x29c096,
    value: _0x1a15e5,
    internal_do_not_use_render: ({
      isFormControl: _0x21aa5b
    }) => _0x2377a1.jsxs(_0x2377a1.Fragment, {
      children: [_0x2377a1.jsx(k, {
        ..._0x4f79e2,
        ref: _0x536f92,
        __scopeSwitch: _0x2dfa83
      }), _0x21aa5b && _0x2377a1.jsx(g, {
        __scopeSwitch: _0x2dfa83
      })]
    })
  });
}, "Switch"));
var w = _0x1f8a6d.forwardRef(d(function (_0x3d1bcd, _0xd147fd) {
  const {
    __scopeSwitch: _0x51ed0a,
    ..._0x33163e
  } = _0x3d1bcd;
  const _0x204060 = b("SwitchThumb", _0x51ed0a);
  return _0x2377a1.jsx(_0x2b67f3.span, {
    "data-state": C(_0x204060.checked),
    "data-disabled": _0x204060.disabled ? "" : undefined,
    ..._0x33163e,
    ref: _0xd147fd
  });
}, "SwitchThumb"));
var g = _0x1f8a6d.forwardRef(d(function ({
  __scopeSwitch: _0x382fd4,
  onClick: _0x4563cf,
  ..._0x46eac4
}, _0x4e00ed) {
  const {
    control: _0xa0ee24,
    hasConsumerStoppedPropagationRef: _0x48082b,
    userInteractionCount: _0x4193b1,
    checked: _0x218f67,
    defaultChecked: _0x1f9d0f,
    required: _0x1dcc2d,
    disabled: _0x1506c2,
    name: _0x66cce8,
    value: _0xa0488c,
    form: _0x59fde7,
    bubbleInput: _0xa194d3,
    setBubbleInput: _0x1005a6
  } = b("SwitchBubbleInput", _0x382fd4);
  const _0x4a768e = _0x113076(_0x4e00ed, _0x1005a6);
  const _0x5ebd74 = _0x330f7b(_0xa0ee24);
  const _0x384c21 = _0x1f8a6d.useRef(false);
  const _0x3d06ff = _0x1f8a6d.useRef(_0x218f67);
  const _0x45d728 = _0x1f8a6d.useRef(_0x4193b1);
  _0x1f8a6d.useEffect(() => {
    const _0x28e21e = _0xa194d3;
    if (!_0x28e21e) {
      return;
    }
    const _0x46d608 = window.HTMLInputElement.prototype;
    const _0x4280d6 = Object.getOwnPropertyDescriptor(_0x46d608, "checked").set;
    const _0x4a1658 = _0x4193b1 !== _0x45d728.current;
    _0x45d728.current = _0x4193b1;
    const _0x51fa4c = _0x3d06ff.current !== _0x218f67;
    _0x3d06ff.current = _0x218f67;
    const _0x3f02c8 = !_0x4a1658 || !_0x48082b.current;
    if (_0x51fa4c && _0x4280d6) {
      _0x384c21.current = !_0x4a1658;
      const _0x4f178d = new Event("click", {
        bubbles: _0x3f02c8
      });
      _0x4280d6.call(_0x28e21e, _0x218f67);
      _0x28e21e.dispatchEvent(_0x4f178d);
      _0x384c21.current = false;
    }
  }, [_0xa194d3, _0x218f67, _0x48082b, _0x4193b1]);
  const _0x1aa448 = _0x1f8a6d.useRef(_0x218f67);
  return _0x2377a1.jsx(_0x2b67f3.input, {
    type: "checkbox",
    "aria-hidden": true,
    defaultChecked: _0x1f9d0f ?? _0x1aa448.current,
    required: _0x1dcc2d,
    disabled: _0x1506c2,
    name: _0x66cce8,
    value: _0xa0488c,
    form: _0x59fde7,
    ..._0x46eac4,
    tabIndex: -1,
    ref: _0x4a768e,
    onClick: _0x1d3119(_0x4563cf, _0x47fddd => {
      if (_0x384c21.current) {
        _0x47fddd.stopPropagation();
      }
    }),
    style: {
      ..._0x46eac4.style,
      ..._0x5ebd74,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0,
      transform: "translateX(-100%)"
    }
  });
}, "SwitchBubbleInput"));
function v(_0x4fbce6) {
  return typeof _0x4fbce6 == "function";
}
function C(_0x1e7d26) {
  if (_0x1e7d26) {
    return "checked";
  } else {
    return "unchecked";
  }
}
function S({
  className: _0x34fe6a,
  size: _0x28b764 = "default",
  ..._0x11aea4
}) {
  return _0x2377a1.jsx(x, {
    "data-slot": "switch",
    className: _0x2aa615("peer group inline-flex shrink-0 items-center rounded-full transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer", "data-[state=checked]:bg-emerald-500 data-[state=unchecked]:bg-surface-inset", _0x28b764 === "default" && "h-[31px] w-[51px]", _0x28b764 === "sm" && "h-[22px] w-[38px]", _0x34fe6a),
    ..._0x11aea4,
    children: _0x2377a1.jsx(w, {
      "data-slot": "switch-thumb",
      className: _0x2aa615("pointer-events-none block rounded-full bg-white shadow-md transition-all duration-200", _0x28b764 === "default" && "h-[27px] w-[27px] data-[state=checked]:translate-x-[22px] data-[state=unchecked]:translate-x-[2px] group-active:w-[33px] group-active:data-[state=checked]:translate-x-[16px] group-active/vs:w-[33px] group-active/vs:data-[state=checked]:translate-x-[16px]", _0x28b764 === "sm" && "h-[18px] w-[18px] data-[state=checked]:translate-x-[18px] data-[state=unchecked]:translate-x-[2px] group-active:w-[22px] group-active:data-[state=checked]:translate-x-[14px]")
    })
  });
}
d(v, "isFunction");
d(C, "getState");
export { S };