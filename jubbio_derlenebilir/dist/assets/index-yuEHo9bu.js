import { r as _0x28d05, j as _0x55f30e, Q as _0x44c6a6, S as _0x2fea67, T as _0xf73a63, U as _0x3b55ae, V as _0x2a298f, W as _0x2c26d8, Y as _0x1be5b7, Z as _0x5d6de0, $ as _0x163542, a0 as _0x2226f8, a1 as _0x4dca35, a2 as _0x13a613, a3 as _0x5c3a66, a4 as _0x284d30, a5 as _0x49f92d, a6 as _0x219249, a7 as _0x2a4292, a8 as _0x4cd098 } from "./index-cQfEKR1W.js";
var R = Object.defineProperty;
var v = (_0x171115, _0x17329b) => R(_0x171115, "name", {
  value: _0x17329b,
  configurable: true
});
var j = "Dialog";
var [x, y] = _0x1be5b7(j);
var [O, m] = x(j);
var w = v(_0x3774e0 => {
  const {
    __scopeDialog: _0x41935b,
    children: _0x136375,
    open: _0x50287b,
    defaultOpen: _0x4d9d55,
    onOpenChange: _0x226b57,
    modal: _0x43433f = true
  } = _0x3774e0;
  const _0x140006 = _0x28d05.useRef(null);
  const _0x118960 = _0x28d05.useRef(null);
  const {
    nodes: _0x2ddb07,
    registry: _0x8a31b4
  } = _0x2226f8();
  const [_0x42bf0a, _0xa38521] = _0x4dca35({
    prop: _0x50287b,
    defaultProp: _0x4d9d55 ?? false,
    onChange: _0x226b57,
    caller: j
  });
  const [_0x329a91, _0x476272] = _0x28d05.useState(0);
  const [_0x41da8d, _0x5e7bdf] = _0x28d05.useState(0);
  return _0x55f30e.jsx(O, {
    scope: _0x41935b,
    triggerRef: _0x140006,
    contentRef: _0x118960,
    contentId: _0x13a613(),
    titleId: _0x13a613(),
    descriptionId: _0x13a613(),
    titlePresent: _0x329a91 > 0,
    descriptionPresent: _0x41da8d > 0,
    setTitleCount: _0x476272,
    setDescriptionCount: _0x5e7bdf,
    open: _0x42bf0a,
    onOpenChange: _0xa38521,
    onOpenToggle: _0x28d05.useCallback(() => _0xa38521(_0x36c193 => !_0x36c193), [_0xa38521]),
    modal: _0x43433f,
    branchNodes: _0x2ddb07,
    branchRegistry: _0x8a31b4,
    children: _0x136375
  });
}, "Dialog");
var P = _0x28d05.forwardRef(v(function (_0x4e434c, _0x38c0f9) {
  const {
    __scopeDialog: _0x66dc7,
    ..._0x450482
  } = _0x4e434c;
  const _0x314473 = m("DialogTrigger", _0x66dc7);
  const _0x3cff09 = _0x3b55ae(_0x38c0f9, _0x314473.triggerRef);
  return _0x55f30e.jsx(_0x2c26d8.button, {
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": _0x314473.open,
    "aria-controls": _0x314473.open ? _0x314473.contentId : undefined,
    "data-state": $(_0x314473.open),
    ..._0x450482,
    ref: _0x3cff09,
    onClick: _0x163542(_0x4e434c.onClick, _0x314473.onOpenToggle)
  });
}, "DialogTrigger"));
var F = "DialogPortal";
var [I, M] = x(F, {
  forceMount: undefined
});
var A = v(_0x200699 => {
  const {
    __scopeDialog: _0xa39ab9,
    forceMount: _0x1447b7,
    children: _0x3622b1,
    container: _0x82c7ad
  } = _0x200699;
  const _0x17a7a2 = m(F, _0xa39ab9);
  return _0x55f30e.jsx(I, {
    scope: _0xa39ab9,
    forceMount: _0x1447b7,
    children: _0x28d05.Children.map(_0x3622b1, _0x48939a => _0x55f30e.jsx(_0x44c6a6, {
      present: _0x1447b7 || _0x17a7a2.open,
      children: _0x55f30e.jsx(_0x2fea67, {
        asChild: true,
        container: _0x82c7ad,
        children: _0x48939a
      })
    }))
  });
}, "DialogPortal");
var T = "DialogOverlay";
var E = _0x28d05.forwardRef(v(function (_0x36f790, _0x2f98eb) {
  const _0x3db68b = M(T, _0x36f790.__scopeDialog);
  const {
    forceMount: _0x527d5a = _0x3db68b.forceMount,
    ..._0x24450f
  } = _0x36f790;
  const _0x1a1429 = m(T, _0x36f790.__scopeDialog);
  if (_0x1a1429.modal) {
    return _0x55f30e.jsx(_0x44c6a6, {
      present: _0x527d5a || _0x1a1429.open,
      children: _0x55f30e.jsx(k, {
        ..._0x24450f,
        ref: _0x2f98eb
      })
    });
  } else {
    return null;
  }
}, "DialogOverlay"));
var S = _0x5d6de0("DialogOverlay.RemoveScroll");
var k = _0x28d05.forwardRef(v(function (_0x3865e1, _0xc58815) {
  const {
    __scopeDialog: _0xd8eaf2,
    ..._0x446fe8
  } = _0x3865e1;
  const _0x7e0828 = m(T, _0xd8eaf2);
  const _0x123258 = _0xf73a63();
  const _0x4add00 = _0x3b55ae(_0xc58815, _0x123258);
  return _0x55f30e.jsx(_0x2a298f, {
    as: S,
    allowPinchZoom: true,
    shards: _0x28d05.useMemo(() => [_0x7e0828.contentRef, ..._0x7e0828.branchNodes.map(_0x10c785 => ({
      current: _0x10c785
    }))], [_0x7e0828.contentRef, _0x7e0828.branchNodes]),
    children: _0x55f30e.jsx(_0x2c26d8.div, {
      "data-state": $(_0x7e0828.open),
      ..._0x446fe8,
      ref: _0x4add00,
      style: {
        pointerEvents: "auto",
        ..._0x446fe8.style
      }
    })
  });
}, "DialogOverlayImpl"));
var N = "DialogContent";
var U = _0x28d05.forwardRef(v(function (_0x4b7539, _0x4008f8) {
  const _0x3e78dc = M(N, _0x4b7539.__scopeDialog);
  const {
    forceMount: _0x593446 = _0x3e78dc.forceMount,
    ..._0x41b529
  } = _0x4b7539;
  const _0x168cd2 = m(N, _0x4b7539.__scopeDialog);
  return _0x55f30e.jsx(_0x44c6a6, {
    present: _0x593446 || _0x168cd2.open,
    children: _0x168cd2.modal ? _0x55f30e.jsx(Z, {
      ..._0x41b529,
      ref: _0x4008f8
    }) : _0x55f30e.jsx(z, {
      ..._0x41b529,
      ref: _0x4008f8
    })
  });
}, "DialogContent"));
var Z = _0x28d05.forwardRef(v(function (_0x47b81b, _0x281877) {
  const _0x16d4b7 = m(N, _0x47b81b.__scopeDialog);
  const _0x331740 = _0x28d05.useRef(null);
  const _0x1e6c6d = _0x3b55ae(_0x281877, _0x16d4b7.contentRef, _0x331740);
  _0x28d05.useEffect(() => {
    const _0x67260b = _0x331740.current;
    if (_0x67260b) {
      return _0x5c3a66(_0x67260b);
    }
  }, []);
  return _0x55f30e.jsx(K, {
    ..._0x47b81b,
    ref: _0x1e6c6d,
    trapFocus: _0x16d4b7.open,
    disableOutsidePointerEvents: _0x16d4b7.open,
    onCloseAutoFocus: _0x163542(_0x47b81b.onCloseAutoFocus, _0x5ee661 => {
      _0x5ee661.preventDefault();
      _0x16d4b7.triggerRef.current?.focus();
    }),
    onPointerDownOutside: _0x163542(_0x47b81b.onPointerDownOutside, _0x3134d9 => {
      const _0x522cc1 = _0x3134d9.detail.originalEvent;
      const _0x43e5cc = _0x522cc1.button === 0 && _0x522cc1.ctrlKey === true;
      if (_0x522cc1.button === 2 || _0x43e5cc) {
        _0x3134d9.preventDefault();
      }
    }),
    onFocusOutside: _0x163542(_0x47b81b.onFocusOutside, _0x4eac48 => _0x4eac48.preventDefault())
  });
}, "DialogContentModal"));
var z = _0x28d05.forwardRef(v(function (_0x30d394, _0x4f3f77) {
  const _0x273336 = m(N, _0x30d394.__scopeDialog);
  const _0x5abf61 = _0x28d05.useRef(false);
  const _0x38218f = _0x28d05.useRef(false);
  return _0x55f30e.jsx(K, {
    ..._0x30d394,
    ref: _0x4f3f77,
    trapFocus: false,
    disableOutsidePointerEvents: false,
    onCloseAutoFocus: _0x3cb926 => {
      _0x30d394.onCloseAutoFocus?.(_0x3cb926);
      if (!_0x3cb926.defaultPrevented) {
        if (!_0x5abf61.current) {
          _0x273336.triggerRef.current?.focus();
        }
        _0x3cb926.preventDefault();
      }
      _0x5abf61.current = false;
      _0x38218f.current = false;
    },
    onInteractOutside: _0x3a2ef2 => {
      _0x30d394.onInteractOutside?.(_0x3a2ef2);
      if (!_0x3a2ef2.defaultPrevented) {
        _0x5abf61.current = true;
        if (_0x3a2ef2.detail.originalEvent.type === "pointerdown") {
          _0x38218f.current = true;
        }
      }
      const _0x55742a = _0x3a2ef2.target;
      const _0x1fe1a9 = _0x273336.triggerRef.current?.contains(_0x55742a);
      if (_0x1fe1a9) {
        _0x3a2ef2.preventDefault();
      }
      if (_0x3a2ef2.detail.originalEvent.type === "focusin" && _0x38218f.current) {
        _0x3a2ef2.preventDefault();
      }
    }
  });
}, "DialogContentNonModal"));
var K = _0x28d05.forwardRef(v(function (_0x5185d2, _0x5d3ee0) {
  const {
    __scopeDialog: _0x3b97e7,
    trapFocus: _0x18ba9f,
    onOpenAutoFocus: _0x48d164,
    onCloseAutoFocus: _0x287045,
    "aria-describedby": _0x52d9a3,
    children: _0x1225bf,
    ..._0x588f11
  } = _0x5185d2;
  const _0x131d90 = m(N, _0x3b97e7);
  _0x284d30();
  return _0x55f30e.jsx(_0x49f92d, {
    registry: _0x131d90.branchRegistry,
    children: _0x55f30e.jsx(_0x219249, {
      asChild: true,
      loop: true,
      trapped: _0x18ba9f,
      branches: _0x131d90.branchNodes,
      onMountAutoFocus: _0x48d164,
      onUnmountAutoFocus: _0x287045,
      children: _0x55f30e.jsx(_0x2a4292, {
        role: "dialog",
        id: _0x131d90.contentId,
        "aria-labelledby": _0x131d90.titlePresent ? _0x131d90.titleId : undefined,
        "aria-describedby": _0x131d90.descriptionPresent ? Y(_0x52d9a3, _0x131d90.descriptionId) : _0x52d9a3,
        "data-state": $(_0x131d90.open),
        ..._0x588f11,
        ref: _0x5d3ee0,
        deferPointerDownOutside: true,
        onDismiss: () => _0x131d90.onOpenChange(false),
        children: _0x1225bf
      })
    })
  });
}, "DialogContentImpl"));
var Q = _0x28d05.forwardRef(v(function (_0xa876a6, _0x15d790) {
  const {
    __scopeDialog: _0x14144f,
    ..._0x155c2e
  } = _0xa876a6;
  const _0x153076 = m("DialogTitle", _0x14144f);
  const {
    setTitleCount: _0x4d8954
  } = _0x153076;
  _0x4cd098(() => {
    _0x4d8954(_0x252e74 => _0x252e74 + 1);
    return () => _0x4d8954(_0x369982 => _0x369982 - 1);
  }, [_0x4d8954]);
  return _0x55f30e.jsx(_0x2c26d8.h2, {
    id: _0x153076.titleId,
    ..._0x155c2e,
    ref: _0x15d790
  });
}, "DialogTitle"));
var V = _0x28d05.forwardRef(v(function (_0x254956, _0x14f8fb) {
  const {
    __scopeDialog: _0x48d626,
    ..._0x57c1f0
  } = _0x254956;
  const _0x22191b = m("DialogDescription", _0x48d626);
  const {
    setDescriptionCount: _0x5eb41d
  } = _0x22191b;
  _0x4cd098(() => {
    _0x5eb41d(_0x377a88 => _0x377a88 + 1);
    return () => _0x5eb41d(_0x1c44c9 => _0x1c44c9 - 1);
  }, [_0x5eb41d]);
  return _0x55f30e.jsx(_0x2c26d8.p, {
    id: _0x22191b.descriptionId,
    ..._0x57c1f0,
    ref: _0x14f8fb
  });
}, "DialogDescription"));
var W = _0x28d05.forwardRef(v(function (_0x21bcb8, _0x1caeb4) {
  const {
    __scopeDialog: _0x499c3b,
    ..._0x5eb2da
  } = _0x21bcb8;
  const _0x5b8d69 = m("DialogClose", _0x499c3b);
  return _0x55f30e.jsx(_0x2c26d8.button, {
    type: "button",
    ..._0x5eb2da,
    ref: _0x1caeb4,
    onClick: _0x163542(_0x21bcb8.onClick, () => _0x5b8d69.onOpenChange(false))
  });
}, "DialogClose"));
function Y(..._0x50a71e) {
  const _0x31cf2b = new Set();
  for (const _0x1b446d of _0x50a71e) {
    if (typeof _0x1b446d == "string") {
      for (const _0x22b6ad of String(_0x1b446d).trim().split(/\s+/)) {
        if (_0x22b6ad) {
          _0x31cf2b.add(_0x22b6ad);
        }
      }
    }
  }
  if (_0x31cf2b.size > 0) {
    return Array.from(_0x31cf2b).join(" ");
  } else {
    return undefined;
  }
}
function $(_0x1ec3f3) {
  if (_0x1ec3f3) {
    return "open";
  } else {
    return "closed";
  }
}
v(Y, "concatAriaDescribedby");
v($, "getState");
export { w as D, U as a, W as b, Q as c, V as d, A as e, E as f, P as g, y as h };