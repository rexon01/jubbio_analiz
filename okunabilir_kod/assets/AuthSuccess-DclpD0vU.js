import { b as _0x2d259f, v as _0x36c80b, r as _0x481720, j as _0x59738d, B as _0x342a02, I as _0x449ff5 } from "./index-cQfEKR1W.js";
function i() {
  const {
    t: _0x212f2f
  } = _0x2d259f();
  const [_0x4f2a99] = _0x36c80b();
  const _0x3f6cc6 = (_0x4f2a99.get("status") || "success") === "error";
  const [_0x581848, _0x175232] = _0x481720.useState(false);
  _0x481720.useEffect(() => {
    if (_0x3f6cc6) {
      return;
    }
    const _0x1508bc = setTimeout(() => {
      try {
        window.location.href = "jubbio://focus";
      } catch {}
      _0x175232(true);
    }, 400);
    return () => clearTimeout(_0x1508bc);
  }, [_0x3f6cc6]);
  const _0x2bbdb2 = _0x481720.useCallback(() => {
    try {
      window.location.href = "jubbio://focus";
    } catch {}
  }, []);
  return <div className="min-h-screen bg-surface-base flex items-center justify-center p-4"><div className="max-w-sm w-full text-center space-y-6"><img src="/jubbio-logo-32x32.svg" alt="Jubbio" className="size-12 mx-auto" />{_0x3f6cc6 ? <_0x59738d.Fragment><h2 className="text-lg font-semibold text-text-primary">{_0x212f2f("authSuccess.errorTitle")}</h2><p className="text-text-tertiary text-sm">{_0x212f2f("authSuccess.errorDesc")}</p></_0x59738d.Fragment> : _0x581848 ? <_0x59738d.Fragment><h2 className="text-lg font-semibold text-text-primary">{_0x212f2f("authSuccess.successTitle")}</h2><p className="text-text-tertiary text-sm">{_0x212f2f("authSuccess.successDesc")}</p><_0x342a02 onClick={_0x2bbdb2} className="bg-accent-primary text-surface-base hover:bg-accent-primary/90"><_0x449ff5 icon="solar:monitor-bold-duotone" className="size-4 mr-2" />{_0x212f2f("authSuccess.openApp")}</_0x342a02></_0x59738d.Fragment> : <_0x59738d.Fragment><h2 className="text-lg font-semibold text-text-primary">{_0x212f2f("authSuccess.tryingTitle")}</h2><p className="text-text-tertiary text-sm">{_0x212f2f("authSuccess.tryingDesc")}</p></_0x59738d.Fragment>}</div></div>;
}
export { i as default };