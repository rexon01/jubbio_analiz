import { r as _0x5d6a6e, j as _0x4e2899, W as _0x317f6, ag as _0x57276d, a8 as _0x4a8325, Y as _0x1d9487, s as _0x197438 } from "./index-cQfEKR1W.js";
var i = Object.defineProperty;
var u = (_0x7978fe, _0x5452e1) => i(_0x7978fe, "name", {
  value: _0x5452e1,
  configurable: true
});
var c = "Avatar";
var [l, d] = _0x1d9487(c);
var f = "idle";
var g = "loading";
var m = "loaded";
var v = "error";
var L = [0, () => {}];
var [S, p] = l(c);
var _Component = _0x5d6a6e.forwardRef(u(function (_0x9845a5, _0x5b31ca) {
  const {
    __scopeAvatar: _0x3f0446,
    ..._0x23f267
  } = _0x9845a5;
  const [_0x35a23c, _0x1bb9c6] = _0x5d6a6e.useState(f);
  const [_0x3774c3, _0x2c44d7] = y();
  return <S scope={_0x3f0446} imageLoadingStatus={_0x35a23c} setImageLoadingStatus={_0x1bb9c6} imageCount={_0x3774c3} setImageCount={_0x2c44d7}><_0x317f6.span {..._0x23f267} ref={_0x5b31ca} /></S>;
}, "Avatar"));
var _Component2 = _0x5d6a6e.forwardRef(u(function (_0x1b3e32, _0x412a9e) {
  const {
    __scopeAvatar: _0x24f075,
    src: _0x15789c,
    onLoadingStatusChange: _0x854034,
    ..._0x5d91ea
  } = _0x1b3e32;
  const _0x325ea7 = p("AvatarImage", _0x24f075);
  _0x325ea7.setImageCount;
  const _0xfb3db2 = I(_0x15789c, {
    referrerPolicy: _0x5d91ea.referrerPolicy,
    crossOrigin: _0x5d91ea.crossOrigin,
    loadingStatus: _0x325ea7.imageLoadingStatus,
    setLoadingStatus: _0x325ea7.setImageLoadingStatus
  });
  const _0x5dbe1b = _0x57276d(_0x56bd36 => {
    _0x854034?.(_0x56bd36);
  });
  const _0x4541ca = _0x5d6a6e.useRef(_0xfb3db2);
  _0x4a8325(() => {
    const _0x3ab5d9 = _0x4541ca.current;
    _0x4541ca.current = _0xfb3db2;
    if (_0xfb3db2 !== _0x3ab5d9) {
      _0x5dbe1b(_0xfb3db2);
    }
  }, [_0xfb3db2, _0x5dbe1b]);
  if (_0xfb3db2 === m) {
    return <_0x317f6.img {..._0x5d91ea} ref={_0x412a9e} src={_0x15789c} />;
  } else {
    return null;
  }
}, "AvatarImage"));
var _Component3 = _0x5d6a6e.forwardRef(u(function (_0x35b2ec, _0x1c8c55) {
  const {
    __scopeAvatar: _0x20b780,
    delayMs: _0x43897b,
    ..._0x2eb179
  } = _0x35b2ec;
  const _0x492b99 = p("AvatarFallback", _0x20b780);
  const [_0x4fd955, _0x40b9a6] = _0x5d6a6e.useState(_0x43897b === undefined);
  _0x5d6a6e.useEffect(() => {
    if (_0x43897b !== undefined) {
      const _0x159cc4 = window.setTimeout(() => _0x40b9a6(true), _0x43897b);
      return () => window.clearTimeout(_0x159cc4);
    }
  }, [_0x43897b]);
  if (_0x4fd955 && _0x492b99.imageLoadingStatus !== m) {
    return <_0x317f6.span {..._0x2eb179} ref={_0x1c8c55} />;
  } else {
    return null;
  }
}, "AvatarFallback"));
function I(_0x2ded1a, {
  loadingStatus: _0x55d4ff,
  setLoadingStatus: _0x22bff6,
  referrerPolicy: _0x3a40e0,
  crossOrigin: _0x3abf91
}) {
  _0x4a8325(() => {
    if (!_0x2ded1a) {
      _0x22bff6(v);
      return;
    }
    const _0x16818c = new window.Image();
    const _0x513904 = u(_0x1f6837 => {
      const _0x12a00d = _0x1f6837.currentTarget;
      _0x22bff6(A(_0x12a00d));
    }, "handleLoad");
    const _0x3caaa8 = u(() => _0x22bff6(v), "handleError");
    _0x16818c.addEventListener("load", _0x513904);
    _0x16818c.addEventListener("error", _0x3caaa8);
    if (_0x3a40e0) {
      _0x16818c.referrerPolicy = _0x3a40e0;
    }
    _0x16818c.crossOrigin = _0x3abf91 ?? null;
    _0x16818c.src = _0x2ded1a;
    _0x22bff6(A(_0x16818c));
    return () => {
      _0x16818c.removeEventListener("load", _0x513904);
      _0x16818c.removeEventListener("error", _0x3caaa8);
      _0x22bff6(f);
    };
  }, [_0x2ded1a, _0x3abf91, _0x3a40e0, _0x22bff6]);
  return _0x55d4ff;
}
function A(_0x5acc61) {
  if (_0x5acc61.complete) {
    if (_0x5acc61.naturalWidth > 0) {
      return m;
    } else {
      return v;
    }
  } else {
    return g;
  }
}
function y() {
  return L;
}
function b(_0x3e7c35) {}
function h({
  className: _0x2926ed,
  ..._0x3a7fa1
}) {
  return <_Component data-slot="avatar" className={_0x197438("relative flex size-8 shrink-0 overflow-hidden rounded-full", _0x2926ed)} {..._0x3a7fa1} />;
}
function C({
  className: _0x4e2c23,
  src: _0x2c481f,
  ..._0x3f9cd3
}) {
  return <_Component2 data-slot="avatar-image" className={_0x197438("aspect-square size-full", _0x4e2c23)} src={_0x2c481f === "" ? undefined : _0x2c481f} referrerPolicy="no-referrer" {..._0x3f9cd3} />;
}
function E({
  className: _0x372e23,
  ..._0x1dde01
}) {
  return <_Component3 data-slot="avatar-fallback" className={_0x197438("bg-muted flex size-full items-center justify-center rounded-full", _0x372e23)} {..._0x1dde01} />;
}
u(I, "useImageLoadingStatus");
u(A, "getImageLoadingStatus");
u(y, "useImageCount");
u(b, "useUpdateImageCount");
export { h as A, C as a, E as b };