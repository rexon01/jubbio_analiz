import { R as _0x19fb08, b as _0x49269e, j as _0x35519d, s as _0x321c38, aj as _0x2d888a, I as _0x34649d } from "./index-cQfEKR1W.js";
import { L as _0x42e045 } from "./label-ODyS97Ju.js";
import _0x962b1a from "./PasswordInput-B3lf9zf0.js";
import "./input-AMyERYwJ.js";
const n = <_0x34649d icon="solar:lock-password-bold-duotone" className="size-5" />;
const i = _0x19fb08.forwardRef(({
  label: _0xf9a828,
  id: _0x23d7e5,
  value: _0x13f162,
  onChange: _0xaff958,
  icon: _0xfa9cf,
  ..._0x1b275b
}, _0x23e3e6) => {
  const {
    t: _0x28aa92
  } = _0x49269e();
  const [_0x1e1611, _0x45c57b] = _0x19fb08.useState(false);
  const [_0x10b649, _0x3c9277] = _0x19fb08.useState({});
  const _0x140270 = _0x19fb08.useRef(null);
  const [_0x213cf2, _0x2ec6c1] = _0x19fb08.useState({
    length: false,
    hasLetter: false,
    hasNumber: false,
    hasSpecialChar: false
  });
  const _0x459d34 = _0xfa9cf !== undefined ? _0xfa9cf : n;
  _0x19fb08.useEffect(() => {
    _0x2ec6c1({
      length: _0x13f162.length >= 8,
      hasLetter: /[a-zA-Z]/.test(_0x13f162),
      hasNumber: /\d/.test(_0x13f162),
      hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(_0x13f162)
    });
  }, [_0x13f162]);
  const _0x119673 = _0x19fb08.useCallback(() => {
    if (_0x140270.current) {
      const _0x1eecf4 = _0x140270.current.getBoundingClientRect();
      _0x3c9277({
        position: "fixed",
        top: _0x1eecf4.bottom + 8,
        left: _0x1eecf4.left,
        width: _0x1eecf4.width,
        zIndex: 9999
      });
    }
  }, []);
  _0x19fb08.useEffect(() => {
    if (_0x1e1611 && _0x13f162) {
      _0x119673();
      window.addEventListener("scroll", _0x119673, true);
      window.addEventListener("resize", _0x119673);
      return () => {
        window.removeEventListener("scroll", _0x119673, true);
        window.removeEventListener("resize", _0x119673);
      };
    }
  }, [_0x1e1611, _0x13f162, _0x119673]);
  const _0xbdf52b = _0x13f162.length > 0 && (!_0x213cf2.length || !_0x213cf2.hasLetter);
  const _0x1dbf4f = _0x1e1611 && _0x13f162;
  return <div className="grid gap-1.5"><_0x42e045 htmlFor={_0x23d7e5} className="text-[13px] text-text-tertiary">{_0xf9a828}{_0x1b275b.required && <span className="text-red-500/90">*</span>}</_0x42e045><div ref={_0x140270}><_0x962b1a id={_0x23d7e5} ref={_0x23e3e6} value={_0x13f162} onChange={_0xaff958} onFocus={() => _0x45c57b(true)} onBlur={() => _0x45c57b(false)} icon={_0x459d34} className={_0x321c38("h-11 bg-surface-overlay/50 border-border-default", {
        "border-destructive": _0xbdf52b
      })} {..._0x1b275b} /></div>{_0x1dbf4f && _0x2d888a.createPortal(<div className="bg-popover text-popover-foreground rounded-xl shadow-lg p-4 border border-border-default" style={_0x10b649}><div className="space-y-3"><h4 className="font-semibold text-left text-sm">{_0x28aa92("auth.passwordStrength.title")}</h4><div className="space-y-2 pt-1"><_Component valid={_0x213cf2.length} text={_0x28aa92("auth.passwordStrength.minLength")} /><_Component valid={_0x213cf2.hasLetter} text={_0x28aa92("auth.passwordStrength.hasLetter")} /><_Component valid={_0x213cf2.hasNumber} text={_0x28aa92("auth.passwordStrength.hasNumber")} /><_Component valid={_0x213cf2.hasSpecialChar} text={_0x28aa92("auth.passwordStrength.hasSpecialChar")} /></div></div></div>, document.body)}</div>;
});
const _Component = ({
  valid: _0x9d704c,
  text: _0x14bca3
}) => <p className={_0x321c38("flex items-center text-xs", _0x9d704c ? "text-emerald-600" : "text-muted-foreground")}>{_0x9d704c ? <_0x34649d icon="solar:check-circle-bold-duotone" className="mr-2 h-4 w-4" /> : <_0x34649d icon="solar:close-circle-bold-duotone" className="mr-2 h-4 w-4" />}{_0x14bca3}</p>;
i.displayName = "PasswordStrengthInput";
const h = _0x19fb08.memo(i);
export { h as default };