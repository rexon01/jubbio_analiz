import { r as _0x3fe8b4, ab as _0x401cef, a1 as _0x34b4ac, j as _0x312cb0, ac as _0x45d16a, ad as _0x14b7b7, W as _0x478f90, $ as _0x137ebf, Q as _0x36b97f, S as _0x5d4446, U as _0x318e93, ae as _0x2e46eb, a7 as _0x203650, af as _0x46ec1b, Y as _0x3aec23, s as _0x1946b7, a as _0x27774c, I as _0x24578d } from "./index-cQfEKR1W.js";
var g;
var b = Object.defineProperty;
var C = (_0x8762f2, _0x2bf3d2) => b(_0x8762f2, "name", {
  value: _0x2bf3d2,
  configurable: true
});
var j = "HoverCard";
var [w, y] = _0x3aec23(j, [_0x401cef]);
var D = _0x401cef();
var [N, P] = w(j);
var O = C(_0x4ae22 => {
  const {
    __scopeHoverCard: _0x29d43d,
    children: _0x413ba9,
    open: _0x28c1c1,
    defaultOpen: _0x309445,
    onOpenChange: _0x3bac00,
    openDelay: _0x14ecc3 = 700,
    closeDelay: _0x46d167 = 300
  } = _0x4ae22;
  const _0x59f8b5 = D(_0x29d43d);
  const _0x142db8 = _0x3fe8b4.useRef(0);
  const _0x1fadb5 = _0x3fe8b4.useRef(0);
  const _0xa92346 = _0x3fe8b4.useRef(false);
  const _0x5bb3c6 = _0x3fe8b4.useRef(false);
  const [_0x4c92c4, _0x3ac746] = _0x34b4ac({
    prop: _0x28c1c1,
    defaultProp: _0x309445 ?? false,
    onChange: _0x3bac00,
    caller: j
  });
  const _0x1735a7 = _0x3fe8b4.useCallback(() => {
    clearTimeout(_0x1fadb5.current);
    _0x142db8.current = window.setTimeout(() => _0x3ac746(true), _0x14ecc3);
  }, [_0x14ecc3, _0x3ac746]);
  const _0x4f810a = _0x3fe8b4.useCallback(() => {
    clearTimeout(_0x142db8.current);
    if (!_0xa92346.current && !_0x5bb3c6.current) {
      _0x1fadb5.current = window.setTimeout(() => _0x3ac746(false), _0x46d167);
    }
  }, [_0x46d167, _0x3ac746]);
  const _0x2390e2 = _0x3fe8b4.useCallback(() => _0x3ac746(false), [_0x3ac746]);
  _0x3fe8b4.useEffect(() => () => {
    clearTimeout(_0x142db8.current);
    clearTimeout(_0x1fadb5.current);
  }, []);
  return <N scope={_0x29d43d} open={_0x4c92c4} onOpenChange={_0x3ac746} onOpen={_0x1735a7} onClose={_0x4f810a} onDismiss={_0x2390e2} hasSelectionRef={_0xa92346} isPointerDownOnContentRef={_0x5bb3c6}><_0x45d16a {..._0x59f8b5}>{_0x413ba9}</_0x45d16a></N>;
}, "HoverCard");
var S = _0x3fe8b4.forwardRef(C(function (_0x27e19f, _0x3e266d) {
  const {
    __scopeHoverCard: _0x5bcb38,
    ..._0x8a2dfa
  } = _0x27e19f;
  const _0x3ae6bc = P("HoverCardTrigger", _0x5bcb38);
  const _0xde8e96 = D(_0x5bcb38);
  return <_0x14b7b7 asChild={true} {..._0xde8e96}><_0x478f90.a data-state={_0x3ae6bc.open ? "open" : "closed"} {..._0x8a2dfa} ref={_0x3e266d} onPointerEnter={_0x137ebf(_0x27e19f.onPointerEnter, L(_0x3ae6bc.onOpen))} onPointerLeave={_0x137ebf(_0x27e19f.onPointerLeave, L(_0x3ae6bc.onClose))} onFocus={_0x137ebf(_0x27e19f.onFocus, _0x3ae6bc.onOpen)} onBlur={_0x137ebf(_0x27e19f.onBlur, _0x3ae6bc.onClose)} onTouchStart={_0x137ebf(_0x27e19f.onTouchStart, _0x1e1b2b => _0x1e1b2b.preventDefault())} /></_0x14b7b7>;
}, "HoverCardTrigger"));
var T = "HoverCardPortal";
var [_Component, R] = w(T, {
  forceMount: undefined
});
var E = C(_0x29572c => {
  const {
    __scopeHoverCard: _0xc3001b,
    forceMount: _0x14b1f0,
    children: _0x1bc879,
    container: _0x4f1d1a
  } = _0x29572c;
  const _0x2a5169 = P(T, _0xc3001b);
  return <_Component scope={_0xc3001b} forceMount={_0x14b1f0}><_0x36b97f present={_0x14b1f0 || _0x2a5169.open}><_0x5d4446 asChild={true} container={_0x4f1d1a}>{_0x1bc879}</_0x5d4446></_0x36b97f></_Component>;
}, "HoverCardPortal");
var H = "HoverCardContent";
var _ = _0x3fe8b4.forwardRef(C(function (_0x2cfb7a, _0x1ad84e) {
  const _0x4af19c = R(H, _0x2cfb7a.__scopeHoverCard);
  const {
    forceMount: _0x3a661f = _0x4af19c.forceMount,
    ..._0x3ef1de
  } = _0x2cfb7a;
  const _0xe4e36c = P(H, _0x2cfb7a.__scopeHoverCard);
  return <_0x36b97f present={_0x3a661f || _0xe4e36c.open}><F data-state={_0xe4e36c.open ? "open" : "closed"} {..._0x3ef1de} onPointerEnter={_0x137ebf(_0x2cfb7a.onPointerEnter, L(_0xe4e36c.onOpen))} onPointerLeave={_0x137ebf(_0x2cfb7a.onPointerLeave, L(_0xe4e36c.onClose))} ref={_0x1ad84e} /></_0x36b97f>;
}, "HoverCardContent"));
var F = _0x3fe8b4.forwardRef(C(function (_0x13d421, _0x461688) {
  const {
    __scopeHoverCard: _0x5794e0,
    onEscapeKeyDown: _0x313cfd,
    onPointerDownOutside: _0x839dc1,
    onFocusOutside: _0x10c9c2,
    onInteractOutside: _0x2074c9,
    ..._0xd81095
  } = _0x13d421;
  const _0x45caa9 = P(H, _0x5794e0);
  const _0x22ef47 = D(_0x5794e0);
  const _0x4eed33 = _0x3fe8b4.useRef(null);
  const [_0x17585b, _0x1a7e65] = _0x3fe8b4.useState(null);
  const _0x386d78 = _0x318e93(_0x461688, _0x4eed33, _0x1a7e65);
  _0x2e46eb(_0x17585b);
  const [_0x1ac31a, _0x234052] = _0x3fe8b4.useState(false);
  _0x3fe8b4.useEffect(() => {
    if (_0x1ac31a) {
      const _0x3fe386 = document.body;
      g = _0x3fe386.style.userSelect || _0x3fe386.style.webkitUserSelect;
      _0x3fe386.style.userSelect = "none";
      _0x3fe386.style.webkitUserSelect = "none";
      return () => {
        _0x3fe386.style.userSelect = g;
        _0x3fe386.style.webkitUserSelect = g;
      };
    }
  }, [_0x1ac31a]);
  _0x3fe8b4.useEffect(() => {
    if (_0x4eed33.current) {
      const _0x39c18b = C(() => {
        _0x234052(false);
        _0x45caa9.isPointerDownOnContentRef.current = false;
        setTimeout(() => {
          if (document.getSelection()?.toString() !== "") {
            _0x45caa9.hasSelectionRef.current = true;
          }
        });
      }, "handlePointerUp");
      document.addEventListener("pointerup", _0x39c18b);
      return () => {
        document.removeEventListener("pointerup", _0x39c18b);
        _0x45caa9.hasSelectionRef.current = false;
        _0x45caa9.isPointerDownOnContentRef.current = false;
      };
    }
  }, [_0x45caa9.isPointerDownOnContentRef, _0x45caa9.hasSelectionRef]);
  _0x3fe8b4.useEffect(() => {
    if (_0x4eed33.current) {
      M(_0x4eed33.current).forEach(_0x286aa4 => _0x286aa4.setAttribute("tabindex", "-1"));
    }
  });
  return <_0x203650 asChild={true} disableOutsidePointerEvents={false} onInteractOutside={_0x2074c9} onEscapeKeyDown={_0x313cfd} onPointerDownOutside={_0x839dc1} onFocusOutside={_0x137ebf(_0x10c9c2, _0x4f715e => {
    _0x4f715e.preventDefault();
  })} onDismiss={_0x45caa9.onDismiss}><_0x46ec1b {..._0x22ef47} {..._0xd81095} onPointerDown={_0x137ebf(_0xd81095.onPointerDown, _0x36e22a => {
      if (_0x36e22a.currentTarget.contains(_0x36e22a.target)) {
        _0x234052(true);
      }
      _0x45caa9.hasSelectionRef.current = false;
      _0x45caa9.isPointerDownOnContentRef.current = true;
    })} ref={_0x386d78} style={{
      ..._0xd81095.style,
      userSelect: _0x1ac31a ? "text" : undefined,
      WebkitUserSelect: _0x1ac31a ? "text" : undefined,
      "--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
      "--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
      "--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
    }} /></_0x203650>;
}, "HoverCardContentImpl"));
function L(_0x13ac99) {
  return _0x43cad1 => _0x43cad1.pointerType === "touch" ? undefined : _0x13ac99();
}
function M(_0x4aa4bd) {
  const _0x5169bc = [];
  const _0x20a6cd = document.createTreeWalker(_0x4aa4bd, NodeFilter.SHOW_ELEMENT, {
    acceptNode: C(_0x1e64d1 => _0x1e64d1.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP, "acceptNode")
  });
  while (_0x20a6cd.nextNode()) {
    _0x5169bc.push(_0x20a6cd.currentNode);
  }
  return _0x5169bc;
}
function _Component2({
  ..._0x470aa6
}) {
  return <O data-slot="hover-card" {..._0x470aa6} />;
}
function I({
  ..._0x30e5c4
}) {
  return <S data-slot="hover-card-trigger" {..._0x30e5c4} />;
}
function U({
  className: _0x494fe3,
  align: _0x52c635 = "center",
  sideOffset: _0x1eb828 = 4,
  animate: _0x30026b = true,
  ..._0x5b7dac
}) {
  return <E data-slot="hover-card-portal"><_ data-slot="hover-card-content" align={_0x52c635} sideOffset={_0x1eb828} className={_0x1946b7("bg-[color-mix(in_oklab,var(--surface-raised),black_20%)] text-popover-foreground z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", _0x30026b && "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", _0x494fe3)} {..._0x5b7dac} /></E>;
}
C(L, "excludeTouch");
C(M, "getTabbableNodes");
const W = () => <svg width={18} height={18} viewBox="0 0 48 48"><path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" fill="#FFC107" /><path d="M5.3 14.7l7.4 5.4C14.5 16.2 18.9 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 15.4 2 8.1 7.3 5.3 14.7z" fill="#FF3D00" /><path d="M24 46c5.4 0 10.3-1.8 14.1-5l-7-5.4c-2 1.4-4.5 2.2-7.1 2.2-6 0-11.1-4-12.9-9.5l-7.3 5.6C6.9 40.9 14.8 46 24 46z" fill="#4CAF50" /><path d="M44.5 20H24v8.5h11.8c-1 3-3 5.5-5.7 7.1l7 5.4C41.6 36.9 46 31 46 24c0-1.3-.2-2.7-.5-4z" fill="#1976D2" /></svg>;
const B = ({
  errorList: _0x3af89e,
  errorTitle: _0x5d2143,
  errorDescription: _0x50341e
}) => <div className="space-y-3">{_0x5d2143 && <h4 className="font-semibold text-left text-sm">{_0x5d2143}</h4>}{_0x50341e && <p className="text-xs text-muted-foreground">{_0x50341e}</p>}<div className="space-y-2 pt-1">{_0x3af89e.map(_0x3a5123 => <div className="flex items-center text-xs" key={_0x3a5123}><_0x24578d icon="solar:close-circle-bold-duotone" className="mr-2 h-4 w-4 shrink-0 text-destructive" /><span className="font-medium">{_0x3a5123}</span></div>)}</div></div>;
const A = _0x3fe8b4.forwardRef(({
  loading: _0x74845e,
  disabled: _0x5aec6d,
  disabledReason: _0x39f38f,
  errorList: _0x3a988a,
  errorTitle: _0x2a2321,
  errorDescription: _0x5629aa,
  variant: _0x4dd7ef = "default",
  isPressed: _0x5c94b4,
  children: _0x40acec,
  className: _0xb32704,
  onClick: _0x2f3af0,
  type: _0x2504c8 = "submit",
  ..._0x5c7a44
}, _0x1ca2fb) => {
  const _0x4b9c82 = _0x27774c("(max-width: 768px)");
  const _0x18eef6 = _0x5aec6d || _0x74845e;
  const _0x167a77 = _0x18eef6 && _0x3a988a && _0x3a988a.length > 0;
  const _0x388397 = _0x4dd7ef === "google";
  const _0x25a825 = _0x4dd7ef === "secondary";
  const _0x3160a7 = <button ref={_0x1ca2fb} type={_0x2504c8} disabled={_0x18eef6} onClick={_0x2f3af0} className={_0x1946b7("w-full h-11 rounded-xl text-sm font-semibold transition-all duration-150 flex items-center justify-center gap-2.5", _0x388397 ? _0x18eef6 ? "border border-border bg-white/60 text-[#1f1f1f]/50 cursor-not-allowed" : _0x1946b7("border border-border bg-white text-[#1f1f1f] cursor-pointer hover:bg-gray-50 active:bg-gray-100 active:scale-[0.98]", _0x5c94b4 && "bg-gray-100 scale-[0.98]") : _0x25a825 ? _0x18eef6 ? "bg-surface-inset/30 text-text-muted/50 cursor-not-allowed" : _0x1946b7("bg-surface-inset/40 text-text-secondary cursor-pointer active:bg-interactive-active active:scale-[0.98]", _0x5c94b4 && "bg-interactive-active scale-[0.98]") : _0x18eef6 ? "bg-surface-inset/60 text-text-muted/60 cursor-not-allowed" : _0x1946b7("bg-accent-primary text-black cursor-pointer active:brightness-90 active:scale-[0.98]", _0x5c94b4 && "brightness-90 scale-[0.98]"), _0xb32704)} {..._0x5c7a44}>{_0x74845e ? <svg className={_0x1946b7("size-5 animate-spin", _0x388397 || _0x25a825 ? "text-gray-500" : "text-white/70")} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2.5" /><path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg> : <_0x312cb0.Fragment>{_0x388397 && <W />}{_0x40acec}</_0x312cb0.Fragment>}</button>;
  if (_0x4b9c82 && _0x167a77) {
    return <div className="grid gap-2">{_0x3160a7}<div className="w-full rounded-md shadow-lg p-4 border text-left"><B errorList={_0x3a988a} errorTitle={_0x2a2321} errorDescription={_0x5629aa} /></div></div>;
  } else if (_0x167a77) {
    return <_Component2 openDelay={200}><I asChild={true}><div className={_0x1946b7("w-full", {
          "cursor-not-allowed": _0x18eef6
        })} onClick={_0x29b745 => {
          if (_0x18eef6) {
            _0x29b745.preventDefault();
            _0x29b745.stopPropagation();
          }
        }}>{_0x3160a7}</div></I><U side="top" sideOffset={8} className="w-(--radix-hover-card-trigger-width) rounded-md shadow-lg p-4 border"><B errorList={_0x3a988a} errorTitle={_0x2a2321} errorDescription={_0x5629aa} /></U></_Component2>;
  } else if (_0x18eef6 && _0x39f38f && !_0x74845e) {
    return <_Component2 openDelay={300} closeDelay={0}><I asChild={true}><span className="inline-block w-full">{_0x3160a7}</span></I><U side="top" className="z-[9999] w-auto px-3 py-2 text-sm">{_0x39f38f}</U></_Component2>;
  } else {
    return _0x3160a7;
  }
});
A.displayName = "SubmitButton";
export { _Component2 as H, A as S, I as a, U as b };