import { t as _0x3f044d, r as _0x89e86f, U as _0x4339fc, a8 as _0x1e952b, j as _0x3ec44a, W as _0x4b9b1c, $ as _0xfdb0b0, Y as _0x13e0d2, ao as _0x3ab017, ab as _0x798cde, ad as _0x4401d0, S as _0x11477f, Q as _0x3db7a7, aj as _0x3e3d57, a3 as _0x2048a9, a4 as _0x313f25, V as _0x5749e0, a6 as _0x3e52f6, a7 as _0x17c7b1, af as _0x3f57d2, ag as _0x3470a4, a2 as _0x20c47c, ap as _0x4e04bb, a1 as _0x402912, ac as _0x2b943a, Z as _0x2bedf5, K as _0x2672cc, s as _0x3e525d, an as _0x54a403 } from "./index-cQfEKR1W.js";
import { a as _0x422810 } from "./index-Oyyh46KT.js"; /**
                                                      * @license lucide-react v0.535.0 - ISC
                                                      *
                                                      * This source code is licensed under the ISC license.
                                                      * See the LICENSE file in the root directory of this source tree.
                                                      */
const R = _0x3f044d("chevron-up", [["path", {
  d: "m18 15-6-6-6 6",
  key: "153udz"
}]]);
function E(_0x14bbbb, [_0x23b972, _0x4dd161]) {
  return Math.min(_0x4dd161, Math.max(_0x23b972, _0x14bbbb));
}
(0, Object.defineProperty)(E, "name", {
  value: "clamp",
  configurable: true
});
var D = Object.defineProperty;
function M(_0x24ff68) {
  const _0x197c01 = _0x89e86f.useRef({
    value: _0x24ff68,
    previous: _0x24ff68
  });
  return _0x89e86f.useMemo(() => {
    if (_0x197c01.current.value !== _0x24ff68) {
      _0x197c01.current.previous = _0x197c01.current.value;
      _0x197c01.current.value = _0x24ff68;
    }
    return _0x197c01.current.previous;
  }, [_0x24ff68]);
}
((_0x30a65e, _0x27c24d) => {
  D(_0x30a65e, "name", {
    value: _0x27c24d,
    configurable: true
  });
})(M, "usePrevious");
var N = Object.defineProperty;
var O = (_0x443cd1, _0x1447f0) => N(_0x443cd1, "name", {
  value: _0x1447f0,
  configurable: true
});
var L = {
  ItemAligned: "item-aligned",
  Popper: "popper"
};
var A = "rtl";
var H = [" ", "Enter", "ArrowUp", "ArrowDown"];
var z = [" ", "Enter"];
var B = "Select";
var [V, F, K] = _0x3ab017(B);
var [W, U] = _0x13e0d2(B, [K, _0x798cde]);
var q = _0x798cde();
var [Y, X] = W(B);
var [Z, $] = W(B);
function G(_0x18a339) {
  const {
    __scopeSelect: _0x50c872,
    children: _0x1c2f80,
    open: _0x22545d,
    defaultOpen: _0x42af1a,
    onOpenChange: _0x1a051a,
    value: _0x21732d,
    defaultValue: _0x5cc279,
    onValueChange: _0x34dc8b,
    dir: _0x2015da,
    name: _0x1b73b7,
    autoComplete: _0x11523f,
    disabled: _0x1703ff,
    required: _0x3b097a,
    form: _0x47fb95,
    internal_do_not_use_render: _0x239091
  } = _0x18a339;
  const _0x2d53ac = q(_0x50c872);
  const [_0x3a428d, _0x414406] = _0x89e86f.useState(null);
  const [_0x431419, _0x4322be] = _0x89e86f.useState(null);
  const [_0x1ea666, _0x35e2e6] = _0x89e86f.useState(false);
  const _0x5a265d = _0x4e04bb(_0x2015da);
  const [_0x2216a2, _0x3078a5] = _0x402912({
    prop: _0x22545d,
    defaultProp: _0x42af1a ?? false,
    onChange: _0x1a051a,
    caller: B
  });
  const [_0x3635a5, _0x74d2fd] = _0x402912({
    prop: _0x21732d,
    defaultProp: _0x5cc279,
    onChange: _0x34dc8b,
    caller: B
  });
  const _0x3163ea = _0x89e86f.useRef(null);
  const _0x513e00 = _0x89e86f.useRef(_0x3635a5);
  _0x89e86f.useEffect(() => {
    const _0x4d1f2e = _0x47fb95 ? _0x3a428d?.ownerDocument.getElementById(_0x47fb95) : _0x3a428d?.form;
    if (_0x4d1f2e instanceof HTMLFormElement) {
      const _0x113cdd = O(() => _0x74d2fd(_0x513e00.current), "reset");
      _0x4d1f2e.addEventListener("reset", _0x113cdd);
      return () => _0x4d1f2e.removeEventListener("reset", _0x113cdd);
    }
  }, [_0x47fb95, _0x3a428d, _0x74d2fd]);
  const _0x362462 = !_0x3a428d || !!_0x47fb95 || !!_0x3a428d.closest("form");
  const [_0x2dd25d, _0x5d3ea5] = _0x89e86f.useState(new Set());
  const _0x573f96 = _0x20c47c();
  const _0x2e5143 = Array.from(_0x2dd25d).map(_0x4cbaad => _0x4cbaad.props.value).join(";");
  const _0x5d57f0 = _0x89e86f.useCallback(_0x1fdc00 => {
    _0x5d3ea5(_0x44a2ee => new Set(_0x44a2ee).add(_0x1fdc00));
  }, []);
  const _0x1728dd = _0x89e86f.useCallback(_0x5ae408 => {
    _0x5d3ea5(_0xf0ba19 => {
      const _0x38d62b = new Set(_0xf0ba19);
      _0x38d62b.delete(_0x5ae408);
      return _0x38d62b;
    });
  }, []);
  const _0x4e6a0c = {
    required: _0x3b097a,
    trigger: _0x3a428d,
    onTriggerChange: _0x414406,
    valueNode: _0x431419,
    onValueNodeChange: _0x4322be,
    valueNodeHasChildren: _0x1ea666,
    onValueNodeHasChildrenChange: _0x35e2e6,
    contentId: _0x573f96,
    value: _0x3635a5,
    onValueChange: _0x74d2fd,
    open: _0x2216a2,
    onOpenChange: _0x3078a5,
    dir: _0x5a265d,
    triggerPointerDownPosRef: _0x3163ea,
    disabled: _0x1703ff,
    name: _0x1b73b7,
    autoComplete: _0x11523f,
    form: _0x47fb95,
    nativeOptions: _0x2dd25d,
    nativeSelectKey: _0x2e5143,
    isFormControl: _0x362462
  };
  return _0x3ec44a.jsx(_0x2b943a, {
    ..._0x2d53ac,
    children: _0x3ec44a.jsx(Y, {
      scope: _0x50c872,
      ..._0x4e6a0c,
      children: _0x3ec44a.jsx(V.Provider, {
        scope: _0x50c872,
        children: _0x3ec44a.jsx(Z, {
          scope: _0x50c872,
          onNativeOptionAdd: _0x5d57f0,
          onNativeOptionRemove: _0x1728dd,
          children: Ne(_0x239091) ? _0x239091(_0x4e6a0c) : _0x1c2f80
        })
      })
    })
  });
}
O(G, "SelectProvider");
var Q = O(_0x5db539 => {
  const {
    __scopeSelect: _0x40b8ff,
    children: _0x42e4e5,
    ..._0x2d67c3
  } = _0x5db539;
  return _0x3ec44a.jsx(G, {
    __scopeSelect: _0x40b8ff,
    ..._0x2d67c3,
    internal_do_not_use_render: ({
      isFormControl: _0x42ee05
    }) => _0x3ec44a.jsxs(_0x3ec44a.Fragment, {
      children: [_0x42e4e5, _0x42ee05 ? _0x3ec44a.jsx(Me, {
        __scopeSelect: _0x40b8ff
      }) : null]
    })
  });
}, "Select");
var J = _0x89e86f.forwardRef(O(function (_0x293f6f, _0x3d1841) {
  const {
    __scopeSelect: _0x370db4,
    disabled: _0x3490ed = false,
    ..._0x26602b
  } = _0x293f6f;
  const _0x358c4e = q(_0x370db4);
  const _0x4bc5c8 = X("SelectTrigger", _0x370db4);
  const _0x3a8477 = _0x4bc5c8.disabled || _0x3490ed;
  const _0x1d3f14 = _0x4339fc(_0x3d1841, _0x4bc5c8.onTriggerChange);
  const _0x50206b = F(_0x370db4);
  const _0x14f471 = _0x89e86f.useRef("touch");
  const [_0x446ec0, _0x5a9bcc, _0x5db358] = Le(_0x1d85d3 => {
    const _0x571173 = _0x50206b().filter(_0x29b4c4 => !_0x29b4c4.disabled);
    const _0x281927 = _0x571173.find(_0x204148 => _0x204148.value === _0x4bc5c8.value);
    const _0x1df118 = Ae(_0x571173, _0x1d85d3, _0x281927);
    if (_0x1df118 !== undefined) {
      _0x4bc5c8.onValueChange(_0x1df118.value);
    }
  });
  const _0x4eedac = O(_0x1b75cd => {
    if (!_0x3a8477) {
      _0x4bc5c8.onOpenChange(true);
      _0x5db358();
    }
    if (_0x1b75cd) {
      _0x4bc5c8.triggerPointerDownPosRef.current = {
        x: Math.round(_0x1b75cd.pageX),
        y: Math.round(_0x1b75cd.pageY)
      };
    }
  }, "handleOpen");
  return _0x3ec44a.jsx(_0x4401d0, {
    asChild: true,
    ..._0x358c4e,
    children: _0x3ec44a.jsx(_0x4b9b1c.button, {
      type: "button",
      role: "combobox",
      "aria-controls": _0x4bc5c8.open ? _0x4bc5c8.contentId : undefined,
      "aria-expanded": _0x4bc5c8.open,
      "aria-required": _0x4bc5c8.required,
      "aria-autocomplete": "none",
      dir: _0x4bc5c8.dir,
      "data-state": _0x4bc5c8.open ? "open" : "closed",
      disabled: _0x3a8477,
      "data-disabled": _0x3a8477 ? "" : undefined,
      "data-placeholder": Oe(_0x4bc5c8.value) ? "" : undefined,
      ..._0x26602b,
      ref: _0x1d3f14,
      onClick: _0xfdb0b0(_0x26602b.onClick, _0x115915 => {
        _0x115915.currentTarget.focus();
        if (_0x14f471.current !== "mouse") {
          _0x4eedac(_0x115915);
        }
      }),
      onPointerDown: _0xfdb0b0(_0x26602b.onPointerDown, _0x16e5a7 => {
        _0x14f471.current = _0x16e5a7.pointerType;
        const _0x848500 = _0x16e5a7.target;
        if (_0x848500.hasPointerCapture(_0x16e5a7.pointerId)) {
          _0x848500.releasePointerCapture(_0x16e5a7.pointerId);
        }
        if (_0x16e5a7.button === 0 && _0x16e5a7.ctrlKey === false && _0x16e5a7.pointerType === "mouse") {
          _0x4eedac(_0x16e5a7);
          _0x16e5a7.preventDefault();
        }
      }),
      onKeyDown: _0xfdb0b0(_0x26602b.onKeyDown, _0x2115b8 => {
        const _0x40f053 = _0x446ec0.current !== "";
        if (!_0x2115b8.ctrlKey && !_0x2115b8.altKey && !_0x2115b8.metaKey && _0x2115b8.key.length === 1) {
          _0x5a9bcc(_0x2115b8.key);
        }
        if (!_0x40f053 || _0x2115b8.key !== " ") {
          if (H.includes(_0x2115b8.key)) {
            _0x4eedac();
            _0x2115b8.preventDefault();
          }
        }
      })
    })
  });
}, "SelectTrigger"));
var ee = _0x89e86f.forwardRef(O(function (_0x34e39f, _0x4ecf21) {
  const {
    __scopeSelect: _0x2ff7c7,
    className: _0x689de0,
    style: _0x5a85bf,
    children: _0x4d014a,
    placeholder: _0x368af7 = "",
    ..._0x2f78c2
  } = _0x34e39f;
  const _0x2db85f = X("SelectValue", _0x2ff7c7);
  const {
    onValueNodeHasChildrenChange: _0x24072f
  } = _0x2db85f;
  const _0x1e908a = _0x4d014a !== undefined;
  const _0x3a9a66 = _0x4339fc(_0x4ecf21, _0x2db85f.onValueNodeChange);
  _0x1e952b(() => {
    _0x24072f(_0x1e908a);
  }, [_0x24072f, _0x1e908a]);
  const _0x3b2324 = Oe(_0x2db85f.value);
  return _0x3ec44a.jsx(_0x4b9b1c.span, {
    ..._0x2f78c2,
    asChild: !_0x3b2324 && _0x2f78c2.asChild,
    ref: _0x3a9a66,
    style: {
      pointerEvents: "none"
    },
    children: _0x3ec44a.jsx(_0x89e86f.Fragment, {
      children: _0x3b2324 ? _0x368af7 : _0x4d014a
    }, _0x3b2324 ? "placeholder" : "value")
  });
}, "SelectValue"));
var te = _0x89e86f.forwardRef(O(function (_0x24f074, _0x307332) {
  const {
    __scopeSelect: _0x41be42,
    children: _0x1c3066,
    ..._0x554919
  } = _0x24f074;
  return _0x3ec44a.jsx(_0x4b9b1c.span, {
    "aria-hidden": true,
    ..._0x554919,
    ref: _0x307332,
    children: _0x1c3066 || "▼"
  });
}, "SelectIcon"));
var [ne, oe] = W("SelectPortal", {
  forceMount: undefined
});
var re = O(_0x3f8a3a => {
  const {
    __scopeSelect: _0x2044c7,
    forceMount: _0xcb213e,
    ..._0x57dfe4
  } = _0x3f8a3a;
  return _0x3ec44a.jsx(ne, {
    scope: _0x3f8a3a.__scopeSelect,
    forceMount: _0xcb213e,
    children: _0x3ec44a.jsx(_0x11477f, {
      asChild: true,
      ..._0x57dfe4
    })
  });
}, "SelectPortal");
var ae = "SelectContent";
var le = _0x89e86f.forwardRef(O(function (_0x3e6f22, _0x30f483) {
  const _0x22da6f = oe(ae, _0x3e6f22.__scopeSelect);
  const {
    forceMount: _0x4ba71e = _0x22da6f.forceMount,
    ..._0x2b0b62
  } = _0x3e6f22;
  const _0x45c81b = X(ae, _0x3e6f22.__scopeSelect);
  const [_0x3b8a21, _0x330425] = _0x89e86f.useState();
  _0x1e952b(() => {
    _0x330425(new DocumentFragment());
  }, []);
  return _0x3ec44a.jsx(_0x3db7a7, {
    present: _0x4ba71e || _0x45c81b.open,
    children: ({
      present: _0x1f47bb
    }) => _0x1f47bb ? _0x3ec44a.jsx(pe, {
      ..._0x2b0b62,
      ref: _0x30f483
    }) : _0x3ec44a.jsx(se, {
      ..._0x2b0b62,
      fragment: _0x3b8a21
    })
  });
}, "SelectContent"));
var se = _0x89e86f.forwardRef(O(function (_0x3fc28c, _0x93c77e) {
  const {
    __scopeSelect: _0x125fa4,
    children: _0x5ebbcc,
    fragment: _0x28cf1c
  } = _0x3fc28c;
  if (_0x28cf1c) {
    return _0x3e3d57.createPortal(_0x3ec44a.jsx(ce, {
      scope: _0x125fa4,
      children: _0x3ec44a.jsx(V.Slot, {
        scope: _0x125fa4,
        children: _0x3ec44a.jsx("div", {
          ref: _0x93c77e,
          children: _0x5ebbcc
        })
      })
    }), _0x28cf1c);
  } else {
    return null;
  }
}, "SelectContentFragment"));
var ie = 10;
var [ce, de] = W(ae);
var ue = _0x2bedf5("SelectContent.RemoveScroll");
var pe = _0x89e86f.forwardRef(O(function (_0x529806, _0x38df7d) {
  const {
    __scopeSelect: _0x2c4e38
  } = _0x529806;
  const {
    position: _0x1409a7 = L.ItemAligned,
    onCloseAutoFocus: _0x216b92,
    onEscapeKeyDown: _0x2efdff,
    onPointerDownOutside: _0x2cdda7,
    side: _0x4f4fba,
    sideOffset: _0x575b23,
    align: _0x1d0658,
    alignOffset: _0x5f1f03,
    arrowPadding: _0x2916f5,
    collisionBoundary: _0xf1ee2,
    collisionPadding: _0x5455d7,
    sticky: _0x27a144,
    hideWhenDetached: _0x1c06dd,
    avoidCollisions: _0x424576,
    ..._0xc702fa
  } = _0x529806;
  const _0x5945d0 = X(ae, _0x2c4e38);
  const [_0x568d27, _0x12baa7] = _0x89e86f.useState(null);
  const [_0x224897, _0xd662a7] = _0x89e86f.useState(null);
  const _0x172b57 = _0x4339fc(_0x38df7d, _0x12baa7);
  const [_0x385bf0, _0x49196f] = _0x89e86f.useState(null);
  const [_0x23c584, _0x2f5e2c] = _0x89e86f.useState(null);
  const _0x188fd1 = F(_0x2c4e38);
  const [_0x2a8504, _0x23aa66] = _0x89e86f.useState(false);
  const _0x22be8e = _0x89e86f.useRef(false);
  _0x89e86f.useEffect(() => {
    if (_0x568d27) {
      return _0x2048a9(_0x568d27);
    }
  }, [_0x568d27]);
  _0x313f25();
  const _0x480c24 = _0x89e86f.useCallback(_0x177c64 => {
    const [_0x59e957, ..._0x4d4006] = _0x188fd1().map(_0xeb47eb => _0xeb47eb.ref.current);
    const [_0x51cf5a] = _0x4d4006.slice(-1);
    const _0x18e778 = document.activeElement;
    for (const _0x1dd478 of _0x177c64) {
      if (_0x1dd478 === _0x18e778) {
        return;
      }
      _0x1dd478?.scrollIntoView({
        block: "nearest"
      });
      if (_0x1dd478 === _0x59e957 && _0x224897) {
        _0x224897.scrollTop = 0;
      }
      if (_0x1dd478 === _0x51cf5a && _0x224897) {
        _0x224897.scrollTop = _0x224897.scrollHeight;
      }
      _0x1dd478?.focus();
      if (document.activeElement !== _0x18e778) {
        return;
      }
    }
  }, [_0x188fd1, _0x224897]);
  const _0x1f600b = _0x89e86f.useCallback(() => _0x480c24([_0x385bf0, _0x568d27]), [_0x480c24, _0x385bf0, _0x568d27]);
  _0x89e86f.useEffect(() => {
    if (_0x2a8504) {
      _0x1f600b();
    }
  }, [_0x2a8504, _0x1f600b]);
  const {
    onOpenChange: _0x4bc52b,
    triggerPointerDownPosRef: _0x2196b0
  } = _0x5945d0;
  _0x89e86f.useEffect(() => {
    if (_0x568d27) {
      let _0x663423 = {
        x: 0,
        y: 0
      };
      const _0x17e0d = O(_0x27652b => {
        _0x663423 = {
          x: Math.abs(Math.round(_0x27652b.pageX) - (_0x2196b0.current?.x ?? 0)),
          y: Math.abs(Math.round(_0x27652b.pageY) - (_0x2196b0.current?.y ?? 0))
        };
      }, "handlePointerMove");
      const _0x33f380 = O(_0x58441c => {
        if (_0x663423.x <= 10 && _0x663423.y <= 10) {
          _0x58441c.preventDefault();
        } else if (!_0x58441c.composedPath().includes(_0x568d27)) {
          _0x4bc52b(false);
        }
        document.removeEventListener("pointermove", _0x17e0d);
        _0x2196b0.current = null;
      }, "handlePointerUp");
      if (_0x2196b0.current !== null) {
        document.addEventListener("pointermove", _0x17e0d);
        document.addEventListener("pointerup", _0x33f380, {
          capture: true,
          once: true
        });
      }
      return () => {
        document.removeEventListener("pointermove", _0x17e0d);
        document.removeEventListener("pointerup", _0x33f380, {
          capture: true
        });
      };
    }
  }, [_0x568d27, _0x4bc52b, _0x2196b0]);
  _0x89e86f.useEffect(() => {
    const _0x5441ca = O(() => _0x4bc52b(false), "close");
    window.addEventListener("blur", _0x5441ca);
    window.addEventListener("resize", _0x5441ca);
    return () => {
      window.removeEventListener("blur", _0x5441ca);
      window.removeEventListener("resize", _0x5441ca);
    };
  }, [_0x4bc52b]);
  const [_0x5e4e70, _0x30c4bc] = Le(_0x31b57b => {
    const _0x18b65f = _0x188fd1().filter(_0x5a9209 => !_0x5a9209.disabled);
    const _0x4d11e0 = _0x18b65f.find(_0x19b566 => _0x19b566.ref.current === document.activeElement);
    const _0x19038d = Ae(_0x18b65f, _0x31b57b, _0x4d11e0);
    if (_0x19038d) {
      setTimeout(() => _0x19038d.ref.current?.focus());
    }
  });
  const _0x1305d3 = _0x89e86f.useCallback((_0x10ab19, _0x5014dc, _0x8fda54) => {
    const _0x5ee14c = !_0x22be8e.current && !_0x8fda54;
    if (_0x5945d0.value !== undefined && _0x5945d0.value === _0x5014dc || _0x5ee14c) {
      _0x49196f(_0x10ab19);
      if (_0x5ee14c) {
        _0x22be8e.current = true;
      }
    }
  }, [_0x5945d0.value]);
  const _0x59d503 = _0x89e86f.useCallback(() => _0x568d27?.focus(), [_0x568d27]);
  const _0x3809cd = _0x89e86f.useCallback((_0x2ea682, _0x5e4955, _0x1b3af9) => {
    const _0x451177 = !_0x22be8e.current && !_0x1b3af9;
    if (_0x5945d0.value !== undefined && _0x5945d0.value === _0x5e4955 || _0x451177) {
      _0x2f5e2c(_0x2ea682);
    }
  }, [_0x5945d0.value]);
  const _0x1d2ace = _0x1409a7 === L.Popper ? he : fe;
  const _0x3de42d = _0x1d2ace === he ? {
    side: _0x4f4fba,
    sideOffset: _0x575b23,
    align: _0x1d0658,
    alignOffset: _0x5f1f03,
    arrowPadding: _0x2916f5,
    collisionBoundary: _0xf1ee2,
    collisionPadding: _0x5455d7,
    sticky: _0x27a144,
    hideWhenDetached: _0x1c06dd,
    avoidCollisions: _0x424576
  } : {};
  return _0x3ec44a.jsx(ce, {
    scope: _0x2c4e38,
    content: _0x568d27,
    viewport: _0x224897,
    onViewportChange: _0xd662a7,
    itemRefCallback: _0x1305d3,
    selectedItem: _0x385bf0,
    onItemLeave: _0x59d503,
    itemTextRefCallback: _0x3809cd,
    focusSelectedItem: _0x1f600b,
    selectedItemText: _0x23c584,
    position: _0x1409a7,
    isPositioned: _0x2a8504,
    searchRef: _0x5e4e70,
    children: _0x3ec44a.jsx(_0x5749e0, {
      as: ue,
      allowPinchZoom: true,
      children: _0x3ec44a.jsx(_0x3e52f6, {
        asChild: true,
        trapped: _0x5945d0.open,
        onMountAutoFocus: _0x5205b9 => {
          _0x5205b9.preventDefault();
        },
        onUnmountAutoFocus: _0xfdb0b0(_0x216b92, _0x4e719f => {
          _0x5945d0.trigger?.focus({
            preventScroll: true
          });
          _0x4e719f.preventDefault();
        }),
        children: _0x3ec44a.jsx(_0x17c7b1, {
          asChild: true,
          disableOutsidePointerEvents: true,
          onEscapeKeyDown: _0x2efdff,
          onPointerDownOutside: _0x2cdda7,
          onFocusOutside: _0x34f746 => _0x34f746.preventDefault(),
          onDismiss: () => _0x5945d0.onOpenChange(false),
          children: _0x3ec44a.jsx(_0x1d2ace, {
            role: "listbox",
            id: _0x5945d0.contentId,
            "data-state": _0x5945d0.open ? "open" : "closed",
            dir: _0x5945d0.dir,
            onContextMenu: _0x223e20 => _0x223e20.preventDefault(),
            ..._0xc702fa,
            ..._0x3de42d,
            onPlaced: () => _0x23aa66(true),
            ref: _0x172b57,
            style: {
              display: "flex",
              flexDirection: "column",
              outline: "none",
              ..._0xc702fa.style
            },
            onKeyDown: _0xfdb0b0(_0xc702fa.onKeyDown, _0x3c576d => {
              const _0x1c1e8c = _0x3c576d.ctrlKey || _0x3c576d.altKey || _0x3c576d.metaKey;
              if (_0x3c576d.key === "Tab") {
                _0x3c576d.preventDefault();
              }
              if (!_0x1c1e8c && _0x3c576d.key.length === 1) {
                _0x30c4bc(_0x3c576d.key);
              }
              if (["ArrowUp", "ArrowDown", "Home", "End"].includes(_0x3c576d.key)) {
                let _0x40ceed = _0x188fd1().filter(_0x258321 => !_0x258321.disabled).map(_0x3c794d => _0x3c794d.ref.current);
                if (["ArrowUp", "End"].includes(_0x3c576d.key)) {
                  _0x40ceed = _0x40ceed.slice().reverse();
                }
                if (["ArrowUp", "ArrowDown"].includes(_0x3c576d.key)) {
                  const _0x953638 = _0x3c576d.target;
                  const _0x560ac3 = _0x40ceed.indexOf(_0x953638);
                  _0x40ceed = _0x40ceed.slice(_0x560ac3 + 1);
                }
                setTimeout(() => _0x480c24(_0x40ceed));
                _0x3c576d.preventDefault();
              }
            })
          })
        })
      })
    })
  });
}, "SelectContentImpl"));
var fe = _0x89e86f.forwardRef(O(function (_0x1e7f21, _0x16e5b2) {
  const {
    __scopeSelect: _0x4d5553,
    onPlaced: _0x108b24,
    ..._0x2cb721
  } = _0x1e7f21;
  const _0x94db0c = X(ae, _0x4d5553);
  const _0xbf0718 = de(ae, _0x4d5553);
  const [_0x5b7d5b, _0x51e54c] = _0x89e86f.useState(null);
  const [_0x3cee5f, _0x2e6603] = _0x89e86f.useState(null);
  const _0x1683ec = _0x4339fc(_0x16e5b2, _0x2e6603);
  const _0x2a9cb9 = F(_0x4d5553);
  const _0x4fc0c5 = _0x89e86f.useRef(false);
  const _0x500385 = _0x89e86f.useRef(true);
  const {
    viewport: _0x54d350,
    selectedItem: _0x1a9cca,
    selectedItemText: _0x14ecda,
    focusSelectedItem: _0x5de808
  } = _0xbf0718;
  const _0x2f755c = _0x89e86f.useCallback(() => {
    if (_0x94db0c.trigger && _0x94db0c.valueNode && _0x5b7d5b && _0x3cee5f && _0x54d350 && _0x1a9cca && _0x14ecda) {
      const _0xe95f85 = _0x94db0c.trigger.getBoundingClientRect();
      const _0x3ee3d2 = _0x3cee5f.getBoundingClientRect();
      const _0x335599 = _0x94db0c.valueNode.getBoundingClientRect();
      const _0x17b22c = _0x14ecda.getBoundingClientRect();
      if (_0x94db0c.dir !== A) {
        const _0x3040a3 = _0x17b22c.left - _0x3ee3d2.left;
        const _0x37ae37 = _0x335599.left - _0x3040a3;
        const _0x183d04 = _0xe95f85.left - _0x37ae37;
        const _0x4310a7 = _0xe95f85.width + _0x183d04;
        const _0x454dcc = Math.max(_0x4310a7, _0x3ee3d2.width);
        const _0x198cb4 = window.innerWidth - ie;
        const _0x1f5c14 = E(_0x37ae37, [ie, Math.max(ie, _0x198cb4 - _0x454dcc)]);
        _0x5b7d5b.style.minWidth = _0x4310a7 + "px";
        _0x5b7d5b.style.left = _0x1f5c14 + "px";
      } else {
        const _0x496f40 = _0x3ee3d2.right - _0x17b22c.right;
        const _0x4f08af = window.innerWidth - _0x335599.right - _0x496f40;
        const _0x21a43c = window.innerWidth - _0xe95f85.right - _0x4f08af;
        const _0x279080 = _0xe95f85.width + _0x21a43c;
        const _0x24915d = Math.max(_0x279080, _0x3ee3d2.width);
        const _0xbf22ec = window.innerWidth - ie;
        const _0x58ea88 = E(_0x4f08af, [ie, Math.max(ie, _0xbf22ec - _0x24915d)]);
        _0x5b7d5b.style.minWidth = _0x279080 + "px";
        _0x5b7d5b.style.right = _0x58ea88 + "px";
      }
      const _0x4c7505 = _0x2a9cb9();
      const _0x18d4c9 = window.innerHeight - ie * 2;
      const _0x180df4 = _0x54d350.scrollHeight;
      const _0xd18d19 = window.getComputedStyle(_0x3cee5f);
      const _0x53380e = parseInt(_0xd18d19.borderTopWidth, 10);
      const _0x122cfa = parseInt(_0xd18d19.paddingTop, 10);
      const _0x5ee33d = parseInt(_0xd18d19.borderBottomWidth, 10);
      const _0x49204a = _0x53380e + _0x122cfa + _0x180df4 + parseInt(_0xd18d19.paddingBottom, 10) + _0x5ee33d;
      const _0x44ba85 = Math.min(_0x1a9cca.offsetHeight * 5, _0x49204a);
      const _0x283f3e = window.getComputedStyle(_0x54d350);
      const _0x1abe56 = parseInt(_0x283f3e.paddingTop, 10);
      const _0x24c35f = parseInt(_0x283f3e.paddingBottom, 10);
      const _0x160ef7 = _0xe95f85.top + _0xe95f85.height / 2 - ie;
      const _0x39dea2 = _0x18d4c9 - _0x160ef7;
      const _0xb0fd4c = _0x1a9cca.offsetHeight / 2;
      const _0xa3fb7c = _0x53380e + _0x122cfa + (_0x1a9cca.offsetTop + _0xb0fd4c);
      const _0x502d4e = _0x49204a - _0xa3fb7c;
      if (_0xa3fb7c <= _0x160ef7) {
        const _0x2847cc = _0x4c7505.length > 0 && _0x1a9cca === _0x4c7505[_0x4c7505.length - 1].ref.current;
        _0x5b7d5b.style.bottom = "0px";
        const _0x468f4b = _0x3cee5f.clientHeight - _0x54d350.offsetTop - _0x54d350.offsetHeight;
        const _0x16e733 = _0xa3fb7c + Math.max(_0x39dea2, _0xb0fd4c + (_0x2847cc ? _0x24c35f : 0) + _0x468f4b + _0x5ee33d);
        _0x5b7d5b.style.height = _0x16e733 + "px";
      } else {
        const _0x1e72e7 = _0x4c7505.length > 0 && _0x1a9cca === _0x4c7505[0].ref.current;
        _0x5b7d5b.style.top = "0px";
        const _0x4d89fb = Math.max(_0x160ef7, _0x53380e + _0x54d350.offsetTop + (_0x1e72e7 ? _0x1abe56 : 0) + _0xb0fd4c) + _0x502d4e;
        _0x5b7d5b.style.height = _0x4d89fb + "px";
        _0x54d350.scrollTop = _0xa3fb7c - _0x160ef7 + _0x54d350.offsetTop;
      }
      _0x5b7d5b.style.margin = ie + "px 0";
      _0x5b7d5b.style.minHeight = _0x44ba85 + "px";
      _0x5b7d5b.style.maxHeight = _0x18d4c9 + "px";
      _0x108b24?.();
      requestAnimationFrame(() => _0x4fc0c5.current = true);
    }
  }, [_0x2a9cb9, _0x94db0c.trigger, _0x94db0c.valueNode, _0x5b7d5b, _0x3cee5f, _0x54d350, _0x1a9cca, _0x14ecda, _0x94db0c.dir, _0x108b24]);
  _0x1e952b(() => _0x2f755c(), [_0x2f755c]);
  const [_0x196348, _0x202647] = _0x89e86f.useState();
  _0x1e952b(() => {
    if (_0x3cee5f) {
      _0x202647(window.getComputedStyle(_0x3cee5f).zIndex);
    }
  }, [_0x3cee5f]);
  const _0x356a6c = _0x89e86f.useCallback(_0x4c13c0 => {
    if (_0x4c13c0 && _0x500385.current === true) {
      _0x2f755c();
      _0x5de808?.();
      _0x500385.current = false;
    }
  }, [_0x2f755c, _0x5de808]);
  return _0x3ec44a.jsx(me, {
    scope: _0x4d5553,
    contentWrapper: _0x5b7d5b,
    shouldExpandOnScrollRef: _0x4fc0c5,
    onScrollButtonChange: _0x356a6c,
    children: _0x3ec44a.jsx("div", {
      ref: _0x51e54c,
      style: {
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        zIndex: _0x196348
      },
      children: _0x3ec44a.jsx(_0x4b9b1c.div, {
        ..._0x2cb721,
        ref: _0x1683ec,
        style: {
          boxSizing: "border-box",
          maxHeight: "100%",
          ..._0x2cb721.style
        }
      })
    })
  });
}, "SelectItemAlignedPosition"));
var he = _0x89e86f.forwardRef(O(function (_0x138aed, _0x11bd31) {
  const {
    __scopeSelect: _0x2fbaf5,
    align: _0x35089f = "start",
    collisionPadding: _0x1b0954 = ie,
    ..._0x402e07
  } = _0x138aed;
  const _0x3d5049 = q(_0x2fbaf5);
  return _0x3ec44a.jsx(_0x3f57d2, {
    ..._0x3d5049,
    ..._0x402e07,
    ref: _0x11bd31,
    align: _0x35089f,
    collisionPadding: _0x1b0954,
    style: {
      boxSizing: "border-box",
      ..._0x402e07.style,
      "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-select-content-available-width": "var(--radix-popper-available-width)",
      "--radix-select-content-available-height": "var(--radix-popper-available-height)",
      "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
    }
  });
}, "SelectPopperPosition"));
var [me, ve] = W(ae, {});
var ge = "SelectViewport";
var xe = _0x89e86f.forwardRef(O(function (_0x242923, _0x10a46c) {
  const {
    __scopeSelect: _0xcfd18d,
    nonce: _0x32a622,
    ..._0x135ccd
  } = _0x242923;
  const _0x20ec61 = de(ge, _0xcfd18d);
  const _0x3a14bf = ve(ge, _0xcfd18d);
  const _0x384f51 = _0x4339fc(_0x10a46c, _0x20ec61.onViewportChange);
  const _0x59e0b2 = _0x89e86f.useRef(0);
  return _0x3ec44a.jsxs(_0x3ec44a.Fragment, {
    children: [_0x3ec44a.jsx("style", {
      dangerouslySetInnerHTML: {
        __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
      },
      nonce: _0x32a622
    }), _0x3ec44a.jsx(V.Slot, {
      scope: _0xcfd18d,
      children: _0x3ec44a.jsx(_0x4b9b1c.div, {
        "data-radix-select-viewport": "",
        role: "presentation",
        ..._0x135ccd,
        ref: _0x384f51,
        style: {
          position: "relative",
          flex: 1,
          overflow: "hidden auto",
          ..._0x135ccd.style
        },
        onScroll: _0xfdb0b0(_0x135ccd.onScroll, _0xd4499 => {
          const _0x174a5a = _0xd4499.currentTarget;
          const {
            contentWrapper: _0x5b61bf,
            shouldExpandOnScrollRef: _0x43575a
          } = _0x3a14bf;
          if (_0x43575a?.current && _0x5b61bf) {
            const _0x3ebb2 = Math.abs(_0x59e0b2.current - _0x174a5a.scrollTop);
            if (_0x3ebb2 > 0) {
              const _0x3909c4 = window.innerHeight - ie * 2;
              const _0x217c16 = parseFloat(_0x5b61bf.style.minHeight);
              const _0x2e166d = parseFloat(_0x5b61bf.style.height);
              const _0x21d0ea = Math.max(_0x217c16, _0x2e166d);
              if (_0x21d0ea < _0x3909c4) {
                const _0x489ef3 = _0x21d0ea + _0x3ebb2;
                const _0x9dfec2 = Math.min(_0x3909c4, _0x489ef3);
                const _0x412114 = _0x489ef3 - _0x9dfec2;
                _0x5b61bf.style.height = _0x9dfec2 + "px";
                if (_0x5b61bf.style.bottom === "0px") {
                  _0x174a5a.scrollTop = _0x412114 > 0 ? _0x412114 : 0;
                  _0x5b61bf.style.justifyContent = "flex-end";
                }
              }
            }
          }
          _0x59e0b2.current = _0x174a5a.scrollTop;
        })
      })
    })]
  });
}, "SelectViewport"));
var [we, Se] = W("SelectGroup");
var be = "SelectItem";
var [ye, Ce] = W(be);
var je = _0x89e86f.forwardRef(O(function (_0x2cb7f7, _0x529da1) {
  const {
    __scopeSelect: _0x19eca6,
    value: _0x57055b,
    disabled: _0x10143d = false,
    textValue: _0x3d71e7,
    ..._0x1f1594
  } = _0x2cb7f7;
  const _0x5d96bf = X(be, _0x19eca6);
  const _0xa74644 = de(be, _0x19eca6);
  const _0x13a0ee = _0x5d96bf.value === _0x57055b;
  const [_0xf523bd, _0x5e31de] = _0x89e86f.useState(_0x3d71e7 ?? "");
  const [_0xdadfdf, _0x22e750] = _0x89e86f.useState(false);
  const _0x10d857 = _0x3470a4(_0x20731e => _0xa74644.itemRefCallback?.(_0x20731e, _0x57055b, _0x10143d));
  const _0x5b7ada = _0x4339fc(_0x529da1, _0x10d857);
  const _0x19576d = _0x20c47c();
  const _0x320003 = _0x89e86f.useRef("touch");
  const _0x4fc986 = O(() => {
    _0x5d96bf.onValueChange(_0x57055b);
    _0x5d96bf.onOpenChange(false);
  }, "handleSelect");
  return _0x3ec44a.jsx(ye, {
    scope: _0x19eca6,
    value: _0x57055b,
    disabled: _0x10143d,
    textId: _0x19576d,
    isSelected: _0x13a0ee,
    onItemTextChange: _0x89e86f.useCallback(_0x59f00f => {
      _0x5e31de(_0x52b269 => _0x52b269 || (_0x59f00f?.textContent ?? "").trim());
    }, []),
    children: _0x3ec44a.jsx(V.ItemSlot, {
      scope: _0x19eca6,
      value: _0x57055b,
      disabled: _0x10143d,
      textValue: _0xf523bd,
      children: _0x3ec44a.jsx(_0x4b9b1c.div, {
        role: "option",
        "aria-labelledby": _0x19576d,
        "data-highlighted": _0xdadfdf ? "" : undefined,
        "aria-selected": _0x13a0ee && _0xdadfdf,
        "data-state": _0x13a0ee ? "checked" : "unchecked",
        "aria-disabled": _0x10143d || undefined,
        "data-disabled": _0x10143d ? "" : undefined,
        tabIndex: _0x10143d ? undefined : -1,
        ..._0x1f1594,
        ref: _0x5b7ada,
        onFocus: _0xfdb0b0(_0x1f1594.onFocus, () => _0x22e750(true)),
        onBlur: _0xfdb0b0(_0x1f1594.onBlur, () => _0x22e750(false)),
        onClick: _0xfdb0b0(_0x1f1594.onClick, () => {
          if (!_0x10143d) {
            if (_0x320003.current !== "mouse") {
              _0x4fc986();
            }
          }
        }),
        onPointerUp: _0xfdb0b0(_0x1f1594.onPointerUp, () => {
          if (!_0x10143d) {
            if (_0x320003.current === "mouse") {
              _0x4fc986();
            }
          }
        }),
        onPointerDown: _0xfdb0b0(_0x1f1594.onPointerDown, _0x1dbedd => {
          _0x320003.current = _0x1dbedd.pointerType;
        }),
        onPointerMove: _0xfdb0b0(_0x1f1594.onPointerMove, _0x4629ea => {
          _0x320003.current = _0x4629ea.pointerType;
          if (_0x10143d) {
            _0xa74644.onItemLeave?.();
          } else if (_0x320003.current === "mouse") {
            _0x4629ea.currentTarget.focus({
              preventScroll: true
            });
          }
        }),
        onPointerLeave: _0xfdb0b0(_0x1f1594.onPointerLeave, _0x1d321e => {
          if (_0x1d321e.currentTarget === document.activeElement) {
            _0xa74644.onItemLeave?.();
          }
        }),
        onKeyDown: _0xfdb0b0(_0x1f1594.onKeyDown, _0x31d3b5 => {
          if (_0x10143d || _0x31d3b5.target !== _0x31d3b5.currentTarget) {
            return;
          }
          if (_0xa74644.searchRef?.current === "" || _0x31d3b5.key !== " ") {
            if (z.includes(_0x31d3b5.key)) {
              _0x4fc986();
            }
            if (_0x31d3b5.key === " ") {
              _0x31d3b5.preventDefault();
            }
          }
        })
      })
    })
  });
}, "SelectItem"));
var _e = "SelectItemText";
var Pe = _0x89e86f.forwardRef(O(function (_0x561fe6, _0xee8227) {
  const {
    __scopeSelect: _0x1cfa2f,
    className: _0x196656,
    style: _0x4bccd2,
    ..._0x37f197
  } = _0x561fe6;
  const _0x140623 = X(_e, _0x1cfa2f);
  const _0x492e9f = de(_e, _0x1cfa2f);
  const _0x41ffd1 = Ce(_e, _0x1cfa2f);
  const _0x1f3119 = $(_e, _0x1cfa2f);
  const [_0x5c7c27, _0x3fc8bb] = _0x89e86f.useState(null);
  const _0x343f23 = _0x3470a4(_0x51258c => _0x492e9f.itemTextRefCallback?.(_0x51258c, _0x41ffd1.value, _0x41ffd1.disabled));
  const _0x4df222 = _0x4339fc(_0xee8227, _0x3fc8bb, _0x41ffd1.onItemTextChange, _0x343f23);
  const _0xacf6f8 = _0x5c7c27?.textContent;
  const _0x47e8a3 = _0x89e86f.useMemo(() => _0x3ec44a.jsx("option", {
    value: _0x41ffd1.value,
    disabled: _0x41ffd1.disabled,
    children: _0xacf6f8
  }, _0x41ffd1.value), [_0x41ffd1.disabled, _0x41ffd1.value, _0xacf6f8]);
  const {
    onNativeOptionAdd: _0x5688f2,
    onNativeOptionRemove: _0x37d23d
  } = _0x1f3119;
  _0x1e952b(() => {
    _0x5688f2(_0x47e8a3);
    return () => _0x37d23d(_0x47e8a3);
  }, [_0x5688f2, _0x37d23d, _0x47e8a3]);
  return _0x3ec44a.jsxs(_0x3ec44a.Fragment, {
    children: [_0x3ec44a.jsx(_0x4b9b1c.span, {
      id: _0x41ffd1.textId,
      ..._0x37f197,
      ref: _0x4df222
    }), _0x41ffd1.isSelected && _0x140623.valueNode && !_0x140623.valueNodeHasChildren && !Oe(_0x140623.value) ? _0x3e3d57.createPortal(_0x37f197.children, _0x140623.valueNode) : null]
  });
}, "SelectItemText"));
var Ie = _0x89e86f.forwardRef(O(function (_0x4c54f0, _0x30e6ce) {
  const {
    __scopeSelect: _0x5cfa29,
    ..._0x505432
  } = _0x4c54f0;
  if (Ce("SelectItemIndicator", _0x5cfa29).isSelected) {
    return _0x3ec44a.jsx(_0x4b9b1c.span, {
      "aria-hidden": true,
      ..._0x505432,
      ref: _0x30e6ce
    });
  } else {
    return null;
  }
}, "SelectItemIndicator"));
var Te = "SelectScrollUpButton";
var ke = _0x89e86f.forwardRef(O(function (_0xc2f3b9, _0x5ed058) {
  const _0x253d9f = de(Te, _0xc2f3b9.__scopeSelect);
  const _0x24d0df = ve(Te, _0xc2f3b9.__scopeSelect);
  const [_0x13bd0d, _0x205a46] = _0x89e86f.useState(false);
  const _0x20a4ee = _0x4339fc(_0x5ed058, _0x24d0df.onScrollButtonChange);
  _0x1e952b(() => {
    if (_0x253d9f.viewport && _0x253d9f.isPositioned) {
      let _0x37072d = function () {
        const _0x436162 = _0x338a47.scrollTop > 0;
        _0x205a46(_0x436162);
      };
      O(_0x37072d, "handleScroll");
      const _0x338a47 = _0x253d9f.viewport;
      _0x37072d();
      _0x338a47.addEventListener("scroll", _0x37072d);
      return () => _0x338a47.removeEventListener("scroll", _0x37072d);
    }
  }, [_0x253d9f.viewport, _0x253d9f.isPositioned]);
  if (_0x13bd0d) {
    return _0x3ec44a.jsx(De, {
      ..._0xc2f3b9,
      ref: _0x20a4ee,
      onAutoScroll: () => {
        const {
          viewport: _0x3a173f,
          selectedItem: _0x6c5b21
        } = _0x253d9f;
        if (_0x3a173f && _0x6c5b21) {
          _0x3a173f.scrollTop = _0x3a173f.scrollTop - _0x6c5b21.offsetHeight;
        }
      }
    });
  } else {
    return null;
  }
}, "SelectScrollUpButton"));
var Re = "SelectScrollDownButton";
var Ee = _0x89e86f.forwardRef(O(function (_0x15c6ff, _0x14f911) {
  const _0x31fd1b = de(Re, _0x15c6ff.__scopeSelect);
  const _0x17c03b = ve(Re, _0x15c6ff.__scopeSelect);
  const [_0xa675bf, _0x178e3d] = _0x89e86f.useState(false);
  const _0x47542b = _0x4339fc(_0x14f911, _0x17c03b.onScrollButtonChange);
  _0x1e952b(() => {
    if (_0x31fd1b.viewport && _0x31fd1b.isPositioned) {
      let _0x421430 = function () {
        const _0xa17d10 = _0xf9ecdb.scrollHeight - _0xf9ecdb.clientHeight;
        const _0x4a2f9b = Math.ceil(_0xf9ecdb.scrollTop) < _0xa17d10;
        _0x178e3d(_0x4a2f9b);
      };
      O(_0x421430, "handleScroll");
      const _0xf9ecdb = _0x31fd1b.viewport;
      _0x421430();
      _0xf9ecdb.addEventListener("scroll", _0x421430);
      return () => _0xf9ecdb.removeEventListener("scroll", _0x421430);
    }
  }, [_0x31fd1b.viewport, _0x31fd1b.isPositioned]);
  if (_0xa675bf) {
    return _0x3ec44a.jsx(De, {
      ..._0x15c6ff,
      ref: _0x47542b,
      onAutoScroll: () => {
        const {
          viewport: _0x37afd0,
          selectedItem: _0x3912a5
        } = _0x31fd1b;
        if (_0x37afd0 && _0x3912a5) {
          _0x37afd0.scrollTop = _0x37afd0.scrollTop + _0x3912a5.offsetHeight;
        }
      }
    });
  } else {
    return null;
  }
}, "SelectScrollDownButton"));
var De = _0x89e86f.forwardRef(O(function (_0x40128d, _0x300b10) {
  const {
    __scopeSelect: _0x1f457c,
    onAutoScroll: _0x4d1970,
    ..._0x13acd4
  } = _0x40128d;
  const _0x1f247a = de("SelectScrollButton", _0x1f457c);
  const _0x369af0 = _0x89e86f.useRef(null);
  const _0x2a2ed7 = F(_0x1f457c);
  const _0x1905fa = _0x89e86f.useCallback(() => {
    if (_0x369af0.current !== null) {
      window.clearInterval(_0x369af0.current);
      _0x369af0.current = null;
    }
  }, []);
  _0x89e86f.useEffect(() => () => _0x1905fa(), [_0x1905fa]);
  _0x1e952b(() => {
    const _0x50d738 = _0x2a2ed7().find(_0x394ae4 => _0x394ae4.ref.current === document.activeElement);
    _0x50d738?.ref.current?.scrollIntoView({
      block: "nearest"
    });
  }, [_0x2a2ed7]);
  return _0x3ec44a.jsx(_0x4b9b1c.div, {
    "aria-hidden": true,
    ..._0x13acd4,
    ref: _0x300b10,
    style: {
      flexShrink: 0,
      ..._0x13acd4.style
    },
    onPointerDown: _0xfdb0b0(_0x13acd4.onPointerDown, () => {
      if (_0x369af0.current === null) {
        _0x369af0.current = window.setInterval(_0x4d1970, 50);
      }
    }),
    onPointerMove: _0xfdb0b0(_0x13acd4.onPointerMove, () => {
      _0x1f247a.onItemLeave?.();
      if (_0x369af0.current === null) {
        _0x369af0.current = window.setInterval(_0x4d1970, 50);
      }
    }),
    onPointerLeave: _0xfdb0b0(_0x13acd4.onPointerLeave, () => {
      _0x1905fa();
    })
  });
}, "SelectScrollButtonImpl"));
var Me = _0x89e86f.forwardRef(O(function ({
  __scopeSelect: _0x377203,
  ..._0x4d6428
}, _0x4eca1c) {
  const _0x560dea = X("SelectBubbleInput", _0x377203);
  const {
    value: _0x3de7f9,
    onValueChange: _0x48febf,
    required: _0x210dfe,
    disabled: _0x26ba38,
    name: _0x43fa57,
    autoComplete: _0x233f05,
    form: _0x4d180b
  } = _0x560dea;
  const {
    nativeOptions: _0x587331,
    nativeSelectKey: _0x26099b
  } = _0x560dea;
  const _0x26df52 = _0x89e86f.useRef(null);
  const _0xa753d4 = _0x4339fc(_0x4eca1c, _0x26df52);
  const _0x3f0da2 = _0x3de7f9 ?? "";
  const _0x2ce6c0 = M(_0x3f0da2);
  const _0x56a1c5 = Array.from(_0x587331).some(_0xe2008f => (_0xe2008f.props.value ?? "") === "");
  _0x89e86f.useEffect(() => {
    const _0x3414a0 = _0x26df52.current;
    if (!_0x3414a0) {
      return;
    }
    const _0x46e88a = window.HTMLSelectElement.prototype;
    const _0x3fb440 = Object.getOwnPropertyDescriptor(_0x46e88a, "value").set;
    if (_0x2ce6c0 !== _0x3f0da2 && _0x3fb440) {
      const _0x4007a1 = new Event("change", {
        bubbles: true
      });
      _0x3fb440.call(_0x3414a0, _0x3f0da2);
      _0x3414a0.dispatchEvent(_0x4007a1);
    }
  }, [_0x2ce6c0, _0x3f0da2]);
  return _0x3ec44a.jsxs(_0x4b9b1c.select, {
    "aria-hidden": true,
    required: _0x210dfe,
    tabIndex: -1,
    name: _0x43fa57,
    autoComplete: _0x233f05,
    disabled: _0x26ba38,
    form: _0x4d180b,
    onChange: _0x476881 => _0x48febf(_0x476881.target.value),
    ..._0x4d6428,
    style: {
      ..._0x422810,
      ..._0x4d6428.style
    },
    ref: _0xa753d4,
    defaultValue: _0x3f0da2,
    children: [Oe(_0x3de7f9) && !_0x56a1c5 ? _0x3ec44a.jsx("option", {
      value: ""
    }) : null, Array.from(_0x587331)]
  }, _0x26099b);
}, "SelectBubbleInput"));
function Ne(_0x3d9d40) {
  return typeof _0x3d9d40 == "function";
}
function Oe(_0x3b7077) {
  return _0x3b7077 === "" || _0x3b7077 === undefined;
}
function Le(_0x9ba481) {
  const _0x1877bc = _0x3470a4(_0x9ba481);
  const _0x2729a2 = _0x89e86f.useRef("");
  const _0x507ec9 = _0x89e86f.useRef(0);
  const _0x6d0839 = _0x89e86f.useCallback(_0x59a006 => {
    const _0x3a9ef0 = _0x2729a2.current + _0x59a006;
    _0x1877bc(_0x3a9ef0);
    O(function _0x481691(_0x352c41) {
      _0x2729a2.current = _0x352c41;
      window.clearTimeout(_0x507ec9.current);
      if (_0x352c41 !== "") {
        _0x507ec9.current = window.setTimeout(() => _0x481691(""), 1000);
      }
    }, "updateSearch")(_0x3a9ef0);
  }, [_0x1877bc]);
  const _0x4f4591 = _0x89e86f.useCallback(() => {
    _0x2729a2.current = "";
    window.clearTimeout(_0x507ec9.current);
  }, []);
  _0x89e86f.useEffect(() => () => window.clearTimeout(_0x507ec9.current), []);
  return [_0x2729a2, _0x6d0839, _0x4f4591];
}
function Ae(_0x320367, _0x5f3ff0, _0x292662) {
  const _0x6a518a = _0x5f3ff0.length > 1 && Array.from(_0x5f3ff0).every(_0x20bac0 => _0x20bac0 === _0x5f3ff0[0]) ? _0x5f3ff0[0] : _0x5f3ff0;
  const _0x348bfb = _0x292662 ? _0x320367.indexOf(_0x292662) : -1;
  let _0x28804e = He(_0x320367, Math.max(_0x348bfb, 0));
  if (_0x6a518a.length === 1) {
    _0x28804e = _0x28804e.filter(_0x449dd9 => _0x449dd9 !== _0x292662);
  }
  const _0xaacae5 = _0x28804e.find(_0x7b377d => _0x7b377d.textValue.toLowerCase().startsWith(_0x6a518a.toLowerCase()));
  if (_0xaacae5 !== _0x292662) {
    return _0xaacae5;
  } else {
    return undefined;
  }
}
function He(_0x261a02, _0x40acdf) {
  return _0x261a02.map((_0x4e6f90, _0x44c85e) => _0x261a02[(_0x40acdf + _0x44c85e) % _0x261a02.length]);
}
function ze({
  ..._0x1e2fd9
}) {
  return _0x3ec44a.jsx(Q, {
    "data-slot": "select",
    ..._0x1e2fd9
  });
}
function Be({
  ..._0x32679e
}) {
  return _0x3ec44a.jsx(ee, {
    "data-slot": "select-value",
    ..._0x32679e
  });
}
function Ve({
  className: _0x4e1bd2,
  size: _0x7acf86 = "default",
  children: _0x4edca1,
  icon: _0x1ddb8a,
  ..._0x541e6b
}) {
  return _0x3ec44a.jsxs(J, {
    "data-slot": "select-trigger",
    "data-size": _0x7acf86,
    className: _0x3e525d("border-border-strong data-[placeholder]:text-text-muted [&_svg:not([class*='text-'])]:text-text-tertiary focus-visible:border-border-default focus-visible:ring-border-default/50 aria-invalid:ring-red-500/20 aria-invalid:border-red-500 bg-surface-overlay/50 hover:bg-surface-overlay/70 text-text-primary flex w-fit items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", _0x4e1bd2),
    ..._0x541e6b,
    children: [_0x4edca1, _0x3ec44a.jsx(te, {
      asChild: true,
      children: _0x1ddb8a ?? _0x3ec44a.jsx(_0x2672cc, {
        className: "size-4 opacity-50"
      })
    })]
  });
}
function Fe({
  className: _0x31d024,
  children: _0x2e6d3b,
  position: _0x5b3ded = "popper",
  ..._0x50813d
}) {
  return _0x3ec44a.jsx(re, {
    children: _0x3ec44a.jsxs(le, {
      "data-slot": "select-content",
      className: _0x3e525d("bg-surface-raised/90 text-text-primary data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-116 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border border-border-strong shadow-md backdrop-blur-sm", _0x5b3ded === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", _0x31d024),
      position: _0x5b3ded,
      ..._0x50813d,
      children: [_0x3ec44a.jsx(We, {}), _0x3ec44a.jsx(xe, {
        className: _0x3e525d("p-1", _0x5b3ded === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
        children: _0x2e6d3b
      }), _0x3ec44a.jsx(Ue, {})]
    })
  });
}
function Ke({
  className: _0x5289db,
  children: _0x103036,
  indicator: _0x4b5bf3,
  ..._0x3de59f
}) {
  return _0x3ec44a.jsxs(je, {
    "data-slot": "select-item",
    className: _0x3e525d("focus:bg-interactive-hover focus:text-text-primary data-[highlighted]:bg-interactive-hover hover:bg-interactive-hover [&_svg:not([class*='text-'])]:text-text-tertiary relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", _0x5289db),
    ..._0x3de59f,
    children: [_0x3ec44a.jsx("span", {
      className: "absolute right-2 flex size-3.5 items-center justify-center",
      children: _0x3ec44a.jsx(Ie, {
        children: _0x4b5bf3 ?? _0x3ec44a.jsx(_0x54a403, {
          className: "size-4"
        })
      })
    }), _0x3ec44a.jsx(Pe, {
      children: _0x103036
    })]
  });
}
function We({
  className: _0x5ec616,
  ..._0x104a12
}) {
  return _0x3ec44a.jsx(ke, {
    "data-slot": "select-scroll-up-button",
    className: _0x3e525d("flex cursor-default items-center justify-center py-1", _0x5ec616),
    ..._0x104a12,
    children: _0x3ec44a.jsx(R, {
      className: "size-4"
    })
  });
}
function Ue({
  className: _0x17a151,
  ..._0x208c72
}) {
  return _0x3ec44a.jsx(Ee, {
    "data-slot": "select-scroll-down-button",
    className: _0x3e525d("flex cursor-default items-center justify-center py-1", _0x17a151),
    ..._0x208c72,
    children: _0x3ec44a.jsx(_0x2672cc, {
      className: "size-4"
    })
  });
}
O(Ne, "isFunction");
O(Oe, "shouldShowPlaceholder");
O(Le, "useTypeaheadSearch");
O(Ae, "findNextItem");
O(He, "wrapArray");
export { R as C, ze as S, Ve as a, Be as b, Fe as c, Ke as d, E as e, M as u };