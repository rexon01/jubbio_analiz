import { r as _0x1204e1, j as _0x37ee4b, s as _0x4b4054 } from "./index-cQfEKR1W.js";
import { M as _0x4e0fc8 } from "./minus-DgcuZCwQ.js";
var l = Object.defineProperty;
var a = Object.defineProperties;
var o = Object.getOwnPropertyDescriptors;
var i = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty;
var u = Object.prototype.propertyIsEnumerable;
var c = (_0x15066f, _0x36b651, _0x26b9f7) => _0x36b651 in _0x15066f ? l(_0x15066f, _0x36b651, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: _0x26b9f7
}) : _0x15066f[_0x36b651] = _0x26b9f7;
function d(_0x15daa9) {
  let _0x194ed3 = _0x15daa9.getBoundingClientRect().right;
  let _0xf33c15 = _0x15daa9;
  while (_0xf33c15) {
    if (getComputedStyle(_0xf33c15).overflowX !== "visible") {
      return _0xf33c15.getBoundingClientRect().left + _0xf33c15.clientLeft + _0xf33c15.clientWidth - _0x194ed3;
    }
    _0xf33c15 = _0xf33c15.parentElement;
  }
  return document.documentElement.clientWidth - _0x194ed3;
}
var p = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", "[style$=\"2147483647 !important;\"]"].join(",");
var m = _0x1204e1.createContext({});
var f = _0x1204e1.forwardRef((_0x3b884b, _0x59ff0c) => {
  var _0x34be55;
  var _0x5d4f5c;
  var _0x35885d;
  var _0x5af112;
  var _0x18ce12;
  var _0x20384e = _0x3b884b;
  var {
    value: _0x4d9be4,
    onChange: _0x4840f2,
    maxLength: _0x2a62d7,
    textAlign: _0x2998a7 = "left",
    pattern: _0x336b04,
    placeholder: _0xed9063,
    inputMode: _0x26159b = "numeric",
    onComplete: _0x5190b8,
    pushPasswordManagerStrategy: _0x2750ac = "increase-width",
    pasteTransformer: _0x44ac5d,
    containerClassName: _0x212795,
    noScriptCSSFallback: _0x161a0f = h,
    nonce: _0x4c1135,
    render: _0x5815c0,
    children: _0x18df21
  } = _0x20384e;
  var _0x1f8919 = ((_0x589867, _0x51ce5c) => {
    var _0x6b7a23 = {};
    for (var _0x3e07c0 in _0x589867) {
      if (s.call(_0x589867, _0x3e07c0) && _0x51ce5c.indexOf(_0x3e07c0) < 0) {
        _0x6b7a23[_0x3e07c0] = _0x589867[_0x3e07c0];
      }
    }
    if (_0x589867 != null && i) {
      for (var _0x3e07c0 of i(_0x589867)) {
        if (_0x51ce5c.indexOf(_0x3e07c0) < 0 && u.call(_0x589867, _0x3e07c0)) {
          _0x6b7a23[_0x3e07c0] = _0x589867[_0x3e07c0];
        }
      }
    }
    return _0x6b7a23;
  })(_0x20384e, ["value", "onChange", "maxLength", "textAlign", "pattern", "placeholder", "inputMode", "onComplete", "pushPasswordManagerStrategy", "pasteTransformer", "containerClassName", "noScriptCSSFallback", "nonce", "render", "children"]);
  let [_0x16f80e, _0x476147] = _0x1204e1.useState(typeof _0x1f8919.defaultValue == "string" ? _0x1f8919.defaultValue : "");
  let _0x1b7f22 = _0x4d9be4 ?? _0x16f80e;
  let _0x319916 = function (_0x1a6c65) {
    let _0xa4d024 = _0x1204e1.useRef();
    _0x1204e1.useEffect(() => {
      _0xa4d024.current = _0x1a6c65;
    });
    return _0xa4d024.current;
  }(_0x1b7f22);
  let _0x5ce7af = _0x1204e1.useCallback(_0x3a8397 => {
    if (_0x4840f2 != null) {
      _0x4840f2(_0x3a8397);
    }
    _0x476147(_0x3a8397);
  }, [_0x4840f2]);
  let _0xde1814 = _0x1204e1.useMemo(() => _0x336b04 ? typeof _0x336b04 == "string" ? new RegExp(_0x336b04) : _0x336b04 : null, [_0x336b04]);
  let _0x26c2fa = _0x1204e1.useRef(null);
  let _0x443508 = _0x1204e1.useRef(null);
  let _0x43d430 = _0x1204e1.useRef({
    value: _0x1b7f22,
    onChange: _0x5ce7af,
    isIOS: typeof window != "undefined" && ((_0x5d4f5c = (_0x34be55 = window == null ? undefined : window.CSS) == null ? undefined : _0x34be55.supports) == null ? undefined : _0x5d4f5c.call(_0x34be55, "-webkit-touch-callout", "none"))
  });
  let _0x2734b4 = _0x1204e1.useRef({
    prev: [(_0x35885d = _0x26c2fa.current) == null ? undefined : _0x35885d.selectionStart, (_0x5af112 = _0x26c2fa.current) == null ? undefined : _0x5af112.selectionEnd, (_0x18ce12 = _0x26c2fa.current) == null ? undefined : _0x18ce12.selectionDirection]
  });
  _0x1204e1.useImperativeHandle(_0x59ff0c, () => _0x26c2fa.current, []);
  _0x1204e1.useEffect(() => {
    let _0x584f95 = _0x26c2fa.current;
    let _0x13df75 = _0x443508.current;
    if (!_0x584f95 || !_0x13df75) {
      return;
    }
    function _0x2c1f52() {
      if (document.activeElement !== _0x584f95) {
        _0x19b444(null);
        _0x26a22d(null);
        return;
      }
      let _0x216f71;
      let _0x117315 = _0x584f95.selectionStart;
      let _0xf4af9 = _0x584f95.selectionEnd;
      let _0x5cf6b4 = _0x584f95.selectionDirection;
      let _0x3d5b39 = _0x584f95.maxLength;
      let _0x3d1e5d = _0x584f95.value;
      let _0x424336 = _0x2734b4.current.prev;
      let _0xa38fc = -1;
      let _0x5ed9e1 = -1;
      if (_0x3d1e5d.length !== 0 && _0x117315 !== null && _0xf4af9 !== null) {
        let _0x117169 = _0x117315 === _0xf4af9;
        let _0xeca5 = _0x117315 === _0x3d1e5d.length && _0x3d1e5d.length < _0x3d5b39;
        if (_0x117169 && !_0xeca5) {
          let _0x4dc062 = _0x117315;
          if (_0x4dc062 === 0) {
            _0xa38fc = 0;
            _0x5ed9e1 = 1;
            _0x216f71 = "forward";
          } else if (_0x4dc062 === _0x3d5b39) {
            _0xa38fc = _0x4dc062 - 1;
            _0x5ed9e1 = _0x4dc062;
            _0x216f71 = "backward";
          } else if (_0x3d5b39 > 1 && _0x3d1e5d.length > 1) {
            let _0x87f3dc = 0;
            if (_0x424336[0] !== null && _0x424336[1] !== null) {
              _0x216f71 = _0x4dc062 < _0x424336[1] ? "backward" : "forward";
              let _0xd07ea = _0x424336[0] === _0x424336[1] && _0x424336[0] < _0x3d5b39;
              if (_0x216f71 === "backward" && !_0xd07ea) {
                _0x87f3dc = -1;
              }
            }
            _0xa38fc = _0x87f3dc + _0x4dc062;
            _0x5ed9e1 = _0x87f3dc + _0x4dc062 + 1;
          }
        }
        if (_0xa38fc !== -1 && _0x5ed9e1 !== -1 && _0xa38fc !== _0x5ed9e1) {
          _0x584f95.setSelectionRange(_0xa38fc, _0x5ed9e1, _0x216f71);
        }
      }
      let _0x39412d = _0xa38fc !== -1 ? _0xa38fc : _0x117315;
      let _0x5ba255 = _0x5ed9e1 !== -1 ? _0x5ed9e1 : _0xf4af9;
      let _0xb573cd = _0x216f71 ?? _0x5cf6b4;
      _0x19b444(_0x39412d);
      _0x26a22d(_0x5ba255);
      _0x2734b4.current.prev = [_0x39412d, _0x5ba255, _0xb573cd];
    }
    if (_0x43d430.current.value !== _0x584f95.value) {
      _0x43d430.current.onChange(_0x584f95.value);
    }
    _0x2734b4.current.prev = [_0x584f95.selectionStart, _0x584f95.selectionEnd, _0x584f95.selectionDirection];
    document.addEventListener("selectionchange", _0x2c1f52, {
      capture: true
    });
    _0x2c1f52();
    if (document.activeElement === _0x584f95) {
      _0x5a87df(true);
    }
    if (!document.getElementById("input-otp-style")) {
      let _0x33edb2 = document.createElement("style");
      _0x33edb2.id = "input-otp-style";
      if (_0x4c1135) {
        _0x33edb2.setAttribute("nonce", _0x4c1135);
      }
      document.head.appendChild(_0x33edb2);
      if (_0x33edb2.sheet) {
        let _0xe44c37 = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
        v(_0x33edb2.sheet, "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }");
        v(_0x33edb2.sheet, "[data-input-otp]:autofill { " + _0xe44c37 + " }");
        v(_0x33edb2.sheet, "[data-input-otp]:-webkit-autofill { " + _0xe44c37 + " }");
        v(_0x33edb2.sheet, "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }");
        v(_0x33edb2.sheet, "[data-input-otp] + * { pointer-events: all !important; }");
      }
    }
    let _0x437376 = () => {
      if (_0x13df75) {
        _0x13df75.style.setProperty("--root-height", _0x584f95.clientHeight + "px");
      }
    };
    _0x437376();
    let _0x1d850 = typeof ResizeObserver == "undefined" ? null : new ResizeObserver(_0x437376);
    if (_0x1d850 != null) {
      _0x1d850.observe(_0x584f95);
    }
    return () => {
      document.removeEventListener("selectionchange", _0x2c1f52, {
        capture: true
      });
      if (_0x1d850 != null) {
        _0x1d850.disconnect();
      }
    };
  }, []);
  let [_0x3fd5e9, _0x578b61] = _0x1204e1.useState(false);
  let [_0x1c07f9, _0x5a87df] = _0x1204e1.useState(false);
  let [_0x3867e3, _0x19b444] = _0x1204e1.useState(null);
  let [_0x12a8f6, _0x26a22d] = _0x1204e1.useState(null);
  _0x1204e1.useEffect(() => {
    let _0xe1536a = function (_0x1bf196) {
      return [setTimeout(_0x1bf196, 0), setTimeout(_0x1bf196, 10), setTimeout(_0x1bf196, 50)];
    }(() => {
      var _0x56371a;
      var _0x23cd1c;
      var _0x2c039e;
      var _0xe2ec23;
      if ((_0x56371a = _0x26c2fa.current) != null) {
        _0x56371a.dispatchEvent(new Event("input"));
      }
      let _0x4ea0b7 = (_0x23cd1c = _0x26c2fa.current) == null ? undefined : _0x23cd1c.selectionStart;
      let _0x8bec20 = (_0x2c039e = _0x26c2fa.current) == null ? undefined : _0x2c039e.selectionEnd;
      let _0x39e315 = (_0xe2ec23 = _0x26c2fa.current) == null ? undefined : _0xe2ec23.selectionDirection;
      if (_0x4ea0b7 !== null && _0x8bec20 !== null) {
        _0x19b444(_0x4ea0b7);
        _0x26a22d(_0x8bec20);
        _0x2734b4.current.prev = [_0x4ea0b7, _0x8bec20, _0x39e315];
      }
    });
    return () => {
      _0xe1536a.forEach(_0xbf02c1 => clearTimeout(_0xbf02c1));
    };
  }, [_0x1b7f22, _0x1c07f9]);
  _0x1204e1.useEffect(() => {
    if (_0x319916 !== undefined && _0x1b7f22 !== _0x319916 && _0x319916.length < _0x2a62d7 && _0x1b7f22.length === _0x2a62d7) {
      if (_0x5190b8 != null) {
        _0x5190b8(_0x1b7f22);
      }
    }
  }, [_0x2a62d7, _0x5190b8, _0x319916, _0x1b7f22]);
  let _0x2945a2 = function ({
    containerRef: _0x141d5f,
    inputRef: _0x9f3f34,
    pushPasswordManagerStrategy: _0x347e2f,
    isFocused: _0x4df470
  }) {
    let [_0x2abeed, _0x20e4c2] = _0x1204e1.useState(false);
    let [_0x585e1f, _0xeb947f] = _0x1204e1.useState(false);
    let [_0x12409b, _0x76af6a] = _0x1204e1.useState(false);
    let _0x457915 = _0x1204e1.useMemo(() => _0x347e2f !== "none" && (_0x347e2f === "increase-width" || _0x347e2f === "experimental-no-flickering") && _0x2abeed && _0x585e1f, [_0x2abeed, _0x585e1f, _0x347e2f]);
    let _0x39fea5 = _0x1204e1.useCallback(() => {
      let _0x1ee2fd = _0x141d5f.current;
      let _0x35d718 = _0x9f3f34.current;
      if (!_0x1ee2fd || !_0x35d718 || _0x12409b || _0x347e2f === "none") {
        return;
      }
      let _0x183c04 = _0x1ee2fd;
      let _0x335f99 = _0x183c04.getBoundingClientRect().left + _0x183c04.offsetWidth - 18;
      let _0x50465b = _0x183c04.getBoundingClientRect().top + _0x183c04.offsetHeight / 2;
      if (document.querySelectorAll(p).length !== 0 || document.elementFromPoint(_0x335f99, _0x50465b) !== _0x1ee2fd) {
        _0xeb947f(d(_0x1ee2fd) >= 40);
        _0x20e4c2(true);
        _0x76af6a(true);
      }
    }, [_0x141d5f, _0x9f3f34, _0x12409b, _0x347e2f]);
    _0x1204e1.useEffect(() => {
      let _0x3b77fc = _0x141d5f.current;
      if (!_0x3b77fc || _0x347e2f === "none") {
        return;
      }
      function _0x32954f() {
        _0xeb947f(d(_0x3b77fc) >= 40);
      }
      _0x32954f();
      let _0x27e6b5 = setInterval(_0x32954f, 1000);
      return () => {
        clearInterval(_0x27e6b5);
      };
    }, [_0x141d5f, _0x347e2f]);
    _0x1204e1.useEffect(() => {
      let _0x6914dd = _0x4df470 || document.activeElement === _0x9f3f34.current;
      if (_0x347e2f === "none" || !_0x6914dd) {
        return;
      }
      let _0x37b258 = setTimeout(_0x39fea5, 0);
      let _0x380034 = setTimeout(_0x39fea5, 2000);
      let _0x36d1d7 = setTimeout(_0x39fea5, 5000);
      let _0x3ecc74 = setTimeout(() => {
        _0x76af6a(true);
      }, 6000);
      return () => {
        clearTimeout(_0x37b258);
        clearTimeout(_0x380034);
        clearTimeout(_0x36d1d7);
        clearTimeout(_0x3ecc74);
      };
    }, [_0x9f3f34, _0x4df470, _0x347e2f, _0x39fea5]);
    return {
      hasPWMBadge: _0x2abeed,
      willPushPWMBadge: _0x457915,
      PWM_BADGE_SPACE_WIDTH: "40px"
    };
  }({
    containerRef: _0x443508,
    inputRef: _0x26c2fa,
    pushPasswordManagerStrategy: _0x2750ac,
    isFocused: _0x1c07f9
  });
  let _0x38892b = _0x1204e1.useCallback(_0x2aa3fc => {
    let _0x23c1cd = _0x2aa3fc.currentTarget.value.slice(0, _0x2a62d7);
    if (_0x23c1cd.length > 0 && _0xde1814 && !_0xde1814.test(_0x23c1cd)) {
      _0x2aa3fc.preventDefault();
    } else {
      if (typeof _0x319916 == "string" && _0x23c1cd.length < _0x319916.length) {
        document.dispatchEvent(new Event("selectionchange"));
      }
      _0x5ce7af(_0x23c1cd);
    }
  }, [_0x2a62d7, _0x5ce7af, _0x319916, _0xde1814]);
  let _0x524b52 = _0x1204e1.useCallback(() => {
    var _0x5ab72c;
    if (_0x26c2fa.current) {
      let _0x81d694 = Math.min(_0x26c2fa.current.value.length, _0x2a62d7 - 1);
      let _0x1c419d = _0x26c2fa.current.value.length;
      if ((_0x5ab72c = _0x26c2fa.current) != null) {
        _0x5ab72c.setSelectionRange(_0x81d694, _0x1c419d);
      }
      _0x19b444(_0x81d694);
      _0x26a22d(_0x1c419d);
    }
    _0x5a87df(true);
  }, [_0x2a62d7]);
  let _0x4c4e3a = _0x1204e1.useCallback(_0x61f061 => {
    var _0x5cb389;
    var _0x1b1c04;
    let _0x4023a0 = _0x26c2fa.current;
    if (!_0x44ac5d && (!_0x43d430.current.isIOS || !_0x61f061.clipboardData || !_0x4023a0)) {
      return;
    }
    let _0xd166c1 = _0x61f061.clipboardData.getData("text/plain");
    let _0x2fd4f4 = _0x44ac5d ? _0x44ac5d(_0xd166c1) : _0xd166c1;
    _0x61f061.preventDefault();
    let _0x1fd0cd = (_0x5cb389 = _0x26c2fa.current) == null ? undefined : _0x5cb389.selectionStart;
    let _0x2ae41a = (_0x1b1c04 = _0x26c2fa.current) == null ? undefined : _0x1b1c04.selectionEnd;
    let _0x563605 = (_0x1fd0cd !== _0x2ae41a ? _0x1b7f22.slice(0, _0x1fd0cd) + _0x2fd4f4 + _0x1b7f22.slice(_0x2ae41a) : _0x1b7f22.slice(0, _0x1fd0cd) + _0x2fd4f4 + _0x1b7f22.slice(_0x1fd0cd)).slice(0, _0x2a62d7);
    if (_0x563605.length > 0 && _0xde1814 && !_0xde1814.test(_0x563605)) {
      return;
    }
    _0x4023a0.value = _0x563605;
    _0x5ce7af(_0x563605);
    let _0x281cf8 = Math.min(_0x563605.length, _0x2a62d7 - 1);
    let _0x3281b6 = _0x563605.length;
    _0x4023a0.setSelectionRange(_0x281cf8, _0x3281b6);
    _0x19b444(_0x281cf8);
    _0x26a22d(_0x3281b6);
  }, [_0x2a62d7, _0x5ce7af, _0x44ac5d, _0xde1814, _0x1b7f22]);
  let _0x49e43d = _0x1204e1.useMemo(() => ({
    position: "relative",
    cursor: _0x1f8919.disabled ? "default" : "text",
    userSelect: "none",
    WebkitUserSelect: "none",
    pointerEvents: "none"
  }), [_0x1f8919.disabled]);
  let _0x19c391 = _0x1204e1.useMemo(() => ({
    position: "absolute",
    inset: 0,
    width: _0x2945a2.willPushPWMBadge ? "calc(100% + " + _0x2945a2.PWM_BADGE_SPACE_WIDTH + ")" : "100%",
    clipPath: _0x2945a2.willPushPWMBadge ? "inset(0 " + _0x2945a2.PWM_BADGE_SPACE_WIDTH + " 0 0)" : undefined,
    height: "100%",
    display: "flex",
    textAlign: _0x2998a7,
    opacity: "1",
    color: "transparent",
    pointerEvents: "all",
    background: "transparent",
    caretColor: "transparent",
    border: "0 solid transparent",
    outline: "0 solid transparent",
    boxShadow: "none",
    lineHeight: "1",
    letterSpacing: "-.5em",
    fontSize: "var(--root-height, 16px)",
    fontFamily: "monospace",
    fontVariantNumeric: "tabular-nums"
  }), [_0x2945a2.PWM_BADGE_SPACE_WIDTH, _0x2945a2.willPushPWMBadge, _0x2998a7]);
  let _0xf81a64 = _0x1204e1.useMemo(() => {
    var _0x57f144;
    return _0x1204e1.createElement("input", ((_0x171d7d, _0x92f856) => a(_0x171d7d, o(_0x92f856)))(((_0x5c5570, _0x4d5bda) => {
      for (var _0x13bded in _0x4d5bda ||= {}) {
        if (s.call(_0x4d5bda, _0x13bded)) {
          c(_0x5c5570, _0x13bded, _0x4d5bda[_0x13bded]);
        }
      }
      if (i) {
        for (var _0x13bded of i(_0x4d5bda)) {
          if (u.call(_0x4d5bda, _0x13bded)) {
            c(_0x5c5570, _0x13bded, _0x4d5bda[_0x13bded]);
          }
        }
      }
      return _0x5c5570;
    })({
      autoComplete: _0x1f8919.autoComplete || "one-time-code"
    }, _0x1f8919), {
      "data-input-otp": true,
      "data-input-otp-placeholder-shown": _0x1b7f22.length === 0 || undefined,
      "data-input-otp-mss": _0x3867e3,
      "data-input-otp-mse": _0x12a8f6,
      inputMode: _0x26159b,
      pattern: _0xde1814 == null ? undefined : _0xde1814.source,
      "aria-placeholder": _0xed9063,
      style: _0x19c391,
      maxLength: _0x2a62d7,
      value: _0x1b7f22,
      ref: _0x26c2fa,
      spellCheck: (_0x57f144 = _0x1f8919.spellCheck) != null && _0x57f144,
      onPaste: _0x36fa3c => {
        var _0x35ea34;
        _0x4c4e3a(_0x36fa3c);
        if ((_0x35ea34 = _0x1f8919.onPaste) != null) {
          _0x35ea34.call(_0x1f8919, _0x36fa3c);
        }
      },
      onChange: _0x38892b,
      onMouseOver: _0x5069c4 => {
        var _0x40f9d2;
        _0x578b61(true);
        if ((_0x40f9d2 = _0x1f8919.onMouseOver) != null) {
          _0x40f9d2.call(_0x1f8919, _0x5069c4);
        }
      },
      onMouseLeave: _0x1a2b22 => {
        var _0x405cb3;
        _0x578b61(false);
        if ((_0x405cb3 = _0x1f8919.onMouseLeave) != null) {
          _0x405cb3.call(_0x1f8919, _0x1a2b22);
        }
      },
      onFocus: _0x281bca => {
        var _0x35bf8;
        _0x524b52();
        if ((_0x35bf8 = _0x1f8919.onFocus) != null) {
          _0x35bf8.call(_0x1f8919, _0x281bca);
        }
      },
      onBlur: _0x423c03 => {
        var _0x2c19bc;
        _0x5a87df(false);
        if ((_0x2c19bc = _0x1f8919.onBlur) != null) {
          _0x2c19bc.call(_0x1f8919, _0x423c03);
        }
      }
    }));
  }, [_0x38892b, _0x524b52, _0x4c4e3a, _0x26159b, _0x19c391, _0x2a62d7, _0x12a8f6, _0x3867e3, _0xed9063, _0x1f8919, _0xde1814 == null ? undefined : _0xde1814.source, _0x1b7f22]);
  let _0x33e337 = _0x1204e1.useMemo(() => ({
    slots: Array.from({
      length: _0x2a62d7
    }).map((_0x26a1a0, _0x120cc5) => {
      let _0x314adb = _0x1c07f9 && _0x3867e3 !== null && _0x12a8f6 !== null && (_0x3867e3 === _0x12a8f6 && _0x120cc5 === _0x3867e3 || _0x120cc5 >= _0x3867e3 && _0x120cc5 < _0x12a8f6);
      let _0x54fc00 = _0x1b7f22[_0x120cc5] !== undefined ? _0x1b7f22[_0x120cc5] : null;
      return {
        char: _0x54fc00,
        placeholderChar: _0x1b7f22[0] !== undefined ? null : (_0xed9063 == null ? undefined : _0xed9063[_0x120cc5]) ?? null,
        isActive: _0x314adb,
        hasFakeCaret: _0x314adb && _0x54fc00 === null
      };
    }),
    isFocused: _0x1c07f9,
    isHovering: !_0x1f8919.disabled && _0x3fd5e9
  }), [_0x1c07f9, _0x3fd5e9, _0x2a62d7, _0x12a8f6, _0x3867e3, _0xed9063, _0x1f8919.disabled, _0x1b7f22]);
  let _0x4cf94d = _0x1204e1.useMemo(() => _0x5815c0 ? _0x5815c0(_0x33e337) : _0x1204e1.createElement(m.Provider, {
    value: _0x33e337
  }, _0x18df21), [_0x18df21, _0x33e337, _0x5815c0]);
  return _0x1204e1.createElement(_0x1204e1.Fragment, null, _0x161a0f !== null && _0x1204e1.createElement("noscript", null, _0x1204e1.createElement("style", null, _0x161a0f)), _0x1204e1.createElement("div", {
    ref: _0x443508,
    "data-input-otp-container": true,
    translate: "no",
    style: _0x49e43d,
    className: _0x212795
  }, _0x4cf94d, _0x1204e1.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none"
    }
  }, _0xf81a64)));
});
function v(_0x7997f9, _0x4946af) {
  try {
    _0x7997f9.insertRule(_0x4946af);
  } catch (_0x1a959c) {
    console.warn("input-otp could not insert CSS rule:", _0x4946af);
  }
}
f.displayName = "Input";
var h = "\n[data-input-otp] {\n  --nojs-bg: white !important;\n  --nojs-fg: black !important;\n\n  background-color: var(--nojs-bg) !important;\n  color: var(--nojs-fg) !important;\n  caret-color: var(--nojs-fg) !important;\n  letter-spacing: .25em !important;\n  text-align: center !important;\n  border: 1px solid var(--nojs-fg) !important;\n  border-radius: 4px !important;\n  width: 100% !important;\n}\n@media (prefers-color-scheme: dark) {\n  [data-input-otp] {\n    --nojs-bg: black !important;\n    --nojs-fg: white !important;\n  }\n}";
const g = _0x1204e1.forwardRef(({
  className: _0x24c772,
  containerClassName: _0x18018f,
  ..._0x18c2bd
}, _0x5ef8e2) => _0x37ee4b.jsx(f, {
  ref: _0x5ef8e2,
  containerClassName: _0x4b4054("flex items-center gap-2 has-[:disabled]:opacity-50", _0x18018f),
  className: _0x4b4054("disabled:cursor-not-allowed", _0x24c772),
  inputMode: "numeric",
  autoComplete: "one-time-code",
  ..._0x18c2bd
}));
g.displayName = "InputOTP";
const b = _0x1204e1.forwardRef(({
  className: _0x430b59,
  ..._0x4316b5
}, _0x4bb65d) => _0x37ee4b.jsx("div", {
  ref: _0x4bb65d,
  className: _0x4b4054("flex items-center", _0x430b59),
  ..._0x4316b5
}));
b.displayName = "InputOTPGroup";
const w = _0x1204e1.forwardRef(({
  index: _0xad92bf,
  className: _0x2c7e9a,
  ..._0x46447a
}, _0x2404f3) => {
  const _0x5f577b = _0x1204e1.useContext(m);
  const {
    char: _0x1b699f,
    hasFakeCaret: _0x255a05,
    isActive: _0x1f367b
  } = _0x5f577b.slots[_0xad92bf];
  return _0x37ee4b.jsxs("div", {
    ref: _0x2404f3,
    className: _0x4b4054("relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md select-none", _0x1f367b && "z-10 ring-1 ring-ring", _0x2c7e9a),
    style: {
      WebkitUserSelect: "none",
      userSelect: "none"
    },
    ..._0x46447a,
    children: [_0x1b699f, _0x255a05 && _0x37ee4b.jsx("div", {
      className: "pointer-events-none absolute inset-0 flex items-center justify-center",
      children: _0x37ee4b.jsx("div", {
        className: "h-4 w-px animate-caret-blink bg-foreground duration-1000"
      })
    })]
  });
});
w.displayName = "InputOTPSlot";
const S = _0x1204e1.forwardRef(({
  ..._0xc00d3f
}, _0x3e6355) => _0x37ee4b.jsx("div", {
  ref: _0x3e6355,
  role: "separator",
  ..._0xc00d3f,
  children: _0x37ee4b.jsx(_0x4e0fc8, {})
}));
S.displayName = "InputOTPSeparator";
export { g as I, b as a, w as b, S as c };