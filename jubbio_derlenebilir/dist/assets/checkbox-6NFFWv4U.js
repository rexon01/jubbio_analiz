import { r as _0x14374d, j as _0x44841e, Q as _0xbf541c, W as _0x428fa0, U as _0x40e347, ak as _0x934f3c, $ as _0x7e2b38, Y as _0x192617, a1 as _0x1a2d65, an as _0x1623b6, s as _0x3bd8d8 } from "./index-cQfEKR1W.js";
var l = Object.defineProperty;
var b = (_0x1c0589, _0x1161f2) => l(_0x1c0589, "name", {
  value: _0x1161f2,
  configurable: true
});
var h = "Checkbox";
var [f, p] = _0x192617(h);
var [k, C] = f(h);
function x(_0x2454b9) {
  const {
    __scopeCheckbox: _0x2f36eb,
    checked: _0xacd030,
    children: _0x40193b,
    defaultChecked: _0x1e0bba,
    disabled: _0x680fcb,
    form: _0x12f7b7,
    name: _0x4302d8,
    onCheckedChange: _0x37342d,
    required: _0x162a96,
    value: _0x42c625 = "on",
    internal_do_not_use_render: _0x3311e0
  } = _0x2454b9;
  const [_0x21edf1, _0xc6f408] = _0x1a2d65({
    prop: _0xacd030,
    defaultProp: _0x1e0bba ?? false,
    onChange: _0x37342d,
    caller: h
  });
  const [_0x4a0240, _0x383d0f] = _0x14374d.useState(null);
  const [_0x3c7c37, _0x30f353] = _0x14374d.useState(null);
  const _0x3f1260 = _0x14374d.useRef(false);
  const [_0x56e280, _0x321322] = _0x14374d.useReducer(_0x4312ff => _0x4312ff + 1, 0);
  const _0x14eb28 = !_0x4a0240 || !!_0x12f7b7 || !!_0x4a0240.closest("form");
  const _0x493356 = {
    checked: _0x21edf1,
    disabled: _0x680fcb,
    setChecked: _0xc6f408,
    control: _0x4a0240,
    setControl: _0x383d0f,
    name: _0x4302d8,
    form: _0x12f7b7,
    value: _0x42c625,
    hasConsumerStoppedPropagationRef: _0x3f1260,
    userInteractionCount: _0x56e280,
    onUserInteraction: _0x321322,
    required: _0x162a96,
    defaultChecked: !j(_0x1e0bba) && _0x1e0bba,
    isFormControl: _0x14eb28,
    bubbleInput: _0x3c7c37,
    setBubbleInput: _0x30f353
  };
  return _0x44841e.jsx(k, {
    scope: _0x2f36eb,
    ..._0x493356,
    children: y(_0x3311e0) ? _0x3311e0(_0x493356) : _0x40193b
  });
}
b(x, "CheckboxProvider");
var m = _0x14374d.forwardRef(b(function ({
  __scopeCheckbox: _0x5d145b,
  onKeyDown: _0x17054b,
  onClick: _0x51dadf,
  ..._0x1a5aca
}, _0x493721) {
  const {
    control: _0x118e00,
    value: _0x2c9df4,
    disabled: _0x5c94cc,
    checked: _0x2e83c7,
    required: _0x2c558b,
    setControl: _0x36937b,
    setChecked: _0x1ec863,
    hasConsumerStoppedPropagationRef: _0x2f3ab5,
    onUserInteraction: _0x132808,
    isFormControl: _0x2b0b8a,
    bubbleInput: _0x3506c6
  } = C("CheckboxTrigger", _0x5d145b);
  const _0x341000 = _0x40e347(_0x493721, _0x36937b);
  const _0x2065e5 = _0x14374d.useRef(_0x2e83c7);
  _0x14374d.useEffect(() => {
    const _0x2ebab7 = _0x118e00?.form;
    if (_0x2ebab7) {
      const _0x4e33f0 = b(() => _0x1ec863(_0x2065e5.current), "reset");
      _0x2ebab7.addEventListener("reset", _0x4e33f0);
      return () => _0x2ebab7.removeEventListener("reset", _0x4e33f0);
    }
  }, [_0x118e00, _0x1ec863]);
  return _0x44841e.jsx(_0x428fa0.button, {
    type: "button",
    role: "checkbox",
    "aria-checked": j(_0x2e83c7) ? "mixed" : _0x2e83c7,
    "aria-required": _0x2c558b,
    "data-state": I(_0x2e83c7),
    "data-disabled": _0x5c94cc ? "" : undefined,
    disabled: _0x5c94cc,
    value: _0x2c9df4,
    ..._0x1a5aca,
    ref: _0x341000,
    onKeyDown: _0x7e2b38(_0x17054b, _0x429f6d => {
      if (_0x429f6d.key === "Enter") {
        _0x429f6d.preventDefault();
      }
    }),
    onClick: _0x7e2b38(_0x51dadf, _0xd09325 => {
      _0x132808();
      _0x1ec863(_0x312151 => !!j(_0x312151) || !_0x312151);
      if (_0x3506c6 && _0x2b0b8a) {
        _0x2f3ab5.current = _0xd09325.isPropagationStopped();
        if (!_0x2f3ab5.current) {
          _0xd09325.stopPropagation();
        }
      }
    })
  });
}, "CheckboxTrigger"));
var v = _0x14374d.forwardRef(b(function (_0x836d0, _0xb7e7be) {
  const {
    __scopeCheckbox: _0x32c1db,
    name: _0x3a46f3,
    checked: _0x5089c3,
    defaultChecked: _0x23034d,
    required: _0x5c15c1,
    disabled: _0x3f9eda,
    value: _0xc4b3eb,
    onCheckedChange: _0x3b3344,
    form: _0x37f1c5,
    ..._0x33a636
  } = _0x836d0;
  return _0x44841e.jsx(x, {
    __scopeCheckbox: _0x32c1db,
    checked: _0x5089c3,
    defaultChecked: _0x23034d,
    disabled: _0x3f9eda,
    required: _0x5c15c1,
    onCheckedChange: _0x3b3344,
    name: _0x3a46f3,
    form: _0x37f1c5,
    value: _0xc4b3eb,
    internal_do_not_use_render: ({
      isFormControl: _0x3e2052
    }) => _0x44841e.jsxs(_0x44841e.Fragment, {
      children: [_0x44841e.jsx(m, {
        ..._0x33a636,
        ref: _0xb7e7be,
        __scopeCheckbox: _0x32c1db
      }), _0x3e2052 && _0x44841e.jsx(_, {
        __scopeCheckbox: _0x32c1db
      })]
    })
  });
}, "Checkbox"));
var g = _0x14374d.forwardRef(b(function (_0x2ad5c8, _0x168e8b) {
  const {
    __scopeCheckbox: _0x2e6f11,
    forceMount: _0x2b8437,
    ..._0x4d1b01
  } = _0x2ad5c8;
  const _0x4fc7cd = C("CheckboxIndicator", _0x2e6f11);
  return _0x44841e.jsx(_0xbf541c, {
    present: _0x2b8437 || j(_0x4fc7cd.checked) || _0x4fc7cd.checked === true,
    children: _0x44841e.jsx(_0x428fa0.span, {
      "data-state": I(_0x4fc7cd.checked),
      "data-disabled": _0x4fc7cd.disabled ? "" : undefined,
      ..._0x4d1b01,
      ref: _0x168e8b,
      style: {
        pointerEvents: "none",
        ..._0x2ad5c8.style
      }
    })
  });
}, "CheckboxIndicator"));
var _ = _0x14374d.forwardRef(b(function ({
  __scopeCheckbox: _0x2b57d4,
  onClick: _0xeff0a6,
  ..._0xf9f7d4
}, _0x1b6a58) {
  const {
    control: _0x28389b,
    hasConsumerStoppedPropagationRef: _0x8fa151,
    userInteractionCount: _0x466143,
    checked: _0x57f16c,
    defaultChecked: _0xbfe8e8,
    required: _0x20d154,
    disabled: _0x36abad,
    name: _0x3eb0d6,
    value: _0x3292fe,
    form: _0x460053,
    bubbleInput: _0x213e20,
    setBubbleInput: _0x3237a6
  } = C("CheckboxBubbleInput", _0x2b57d4);
  const _0x381152 = _0x40e347(_0x1b6a58, _0x3237a6);
  const _0x193317 = _0x934f3c(_0x28389b);
  const _0x2d4da3 = _0x14374d.useRef(false);
  const _0x4996ec = _0x14374d.useRef(_0x57f16c);
  const _0x5bd323 = _0x14374d.useRef(_0x466143);
  _0x14374d.useEffect(() => {
    const _0x260339 = _0x213e20;
    if (!_0x260339) {
      return;
    }
    const _0x5e6e6d = window.HTMLInputElement.prototype;
    const _0x3605cd = Object.getOwnPropertyDescriptor(_0x5e6e6d, "checked").set;
    const _0x4fb40e = _0x466143 !== _0x5bd323.current;
    _0x5bd323.current = _0x466143;
    const _0x5bc2c4 = _0x4996ec.current !== _0x57f16c;
    _0x4996ec.current = _0x57f16c;
    const _0x33ec53 = !_0x4fb40e || !_0x8fa151.current;
    if (_0x5bc2c4 && _0x3605cd) {
      _0x2d4da3.current = !_0x4fb40e;
      const _0x2314ef = new Event("click", {
        bubbles: _0x33ec53
      });
      _0x260339.indeterminate = j(_0x57f16c);
      _0x3605cd.call(_0x260339, !j(_0x57f16c) && _0x57f16c);
      _0x260339.dispatchEvent(_0x2314ef);
      _0x2d4da3.current = false;
    }
  }, [_0x213e20, _0x57f16c, _0x8fa151, _0x466143]);
  const _0x4d4ba1 = _0x14374d.useRef(!j(_0x57f16c) && _0x57f16c);
  return _0x44841e.jsx(_0x428fa0.input, {
    type: "checkbox",
    "aria-hidden": true,
    defaultChecked: _0xbfe8e8 ?? _0x4d4ba1.current,
    required: _0x20d154,
    disabled: _0x36abad,
    name: _0x3eb0d6,
    value: _0x3292fe,
    form: _0x460053,
    ..._0xf9f7d4,
    tabIndex: -1,
    ref: _0x381152,
    onClick: _0x7e2b38(_0xeff0a6, _0x59c6f9 => {
      if (_0x2d4da3.current) {
        _0x59c6f9.stopPropagation();
      }
    }),
    style: {
      ..._0xf9f7d4.style,
      ..._0x193317,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0,
      transform: "translateX(-100%)"
    }
  });
}, "CheckboxBubbleInput"));
function y(_0x1b8343) {
  return typeof _0x1b8343 == "function";
}
function j(_0x8a31f4) {
  return _0x8a31f4 === "indeterminate";
}
function I(_0x13113a) {
  if (j(_0x13113a)) {
    return "indeterminate";
  } else if (_0x13113a) {
    return "checked";
  } else {
    return "unchecked";
  }
}
function R({
  className: _0x3d6bf6,
  ..._0x17d207
}) {
  return _0x44841e.jsx(v, {
    "data-slot": "checkbox",
    className: _0x3bd8d8("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", _0x3d6bf6),
    ..._0x17d207,
    children: _0x44841e.jsx(g, {
      "data-slot": "checkbox-indicator",
      className: "flex items-center justify-center text-current transition-none",
      children: _0x44841e.jsx(_0x1623b6, {
        className: "size-3.5"
      })
    })
  });
}
b(y, "isFunction");
b(j, "isIndeterminate");
b(I, "getState");
export { R as C };