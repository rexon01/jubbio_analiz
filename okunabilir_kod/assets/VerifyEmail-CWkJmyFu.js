import { b as _0x31f114, v as _0x218b17, d as _0x25e899, r as _0x460cdc, j as _0x157304, I as _0xa62dbc, B as _0x43a6e5, h as _0x170c8e } from "./index-cQfEKR1W.js";
import { L as _0x5f4f50 } from "./loader-circle-CTtxa1g9.js";
const d = () => {
  const {
    t: _0x4ee135
  } = _0x31f114();
  const [_0x18bb90] = _0x218b17();
  const _0x1e7354 = _0x25e899();
  const [_0x4eedb1, _0x236c21] = _0x460cdc.useState("loading");
  const [_0x263091, _0x1b7167] = _0x460cdc.useState("");
  const _0xb4beac = _0x460cdc.useRef(false);
  const _0xc48639 = _0x18bb90.get("token");
  _0x460cdc.useEffect(() => {
    if (_0xb4beac.current) {
      return;
    }
    _0xb4beac.current = true;
    (async () => {
      if (!_0xc48639) {
        _0x236c21("error");
        _0x1b7167(_0x4ee135("auth.invalidVerificationLink"));
        return;
      }
      try {
        const _0x4e6ac0 = await _0x170c8e.verifyEmail(_0xc48639);
        _0x236c21("success");
        _0x1b7167(_0x4e6ac0.message || _0x4ee135("auth.emailVerified"));
      } catch (_0x3ea62f) {
        _0x236c21("error");
        _0x1b7167(_0x3ea62f?.response?.data?.message || _0x4ee135("auth.verificationFailed"));
      }
    })();
  }, [_0xc48639]);
  return <div className="min-h-screen bg-surface-base flex items-center justify-center p-4"><div className="max-w-md w-full"><div className="bg-surface-raised/50 border border-border-default rounded-2xl p-8 text-center"><div className="mb-6">{_0x4eedb1 === "loading" && <div className="w-16 h-16 mx-auto rounded-full bg-surface-overlay flex items-center justify-center"><_0x5f4f50 className="w-8 h-8 text-text-tertiary animate-spin" /></div>}{_0x4eedb1 === "success" && <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center"><_0xa62dbc icon="solar:check-circle-bold-duotone" className="w-8 h-8 text-emerald-400" /></div>}{_0x4eedb1 === "error" && <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 flex items-center justify-center"><_0xa62dbc icon="solar:close-circle-bold-duotone" className="w-8 h-8 text-red-400" /></div>}</div><h1 className="text-xl font-semibold text-text-primary mb-2">{_0x4eedb1 === "loading" && _0x4ee135("auth.verifyingEmail")}{_0x4eedb1 === "success" && _0x4ee135("auth.emailVerifiedTitle")}{_0x4eedb1 === "error" && _0x4ee135("auth.verificationFailedTitle")}</h1><p className="text-sm text-text-tertiary mb-6">{_0x4eedb1 === "loading" && _0x4ee135("auth.pleaseWait")}{_0x4eedb1 !== "loading" && _0x263091}</p>{_0x4eedb1 !== "loading" && <div className="space-y-3">{_0x4eedb1 === "success" && <_0x43a6e5 onClick={() => _0x1e7354("/app")} className="bg-emerald-600 hover:bg-emerald-600 text-text-primary">{_0x4ee135("auth.goToApp")}</_0x43a6e5>}{_0x4eedb1 === "error" && <div className="space-y-2"><p className="text-xs text-text-muted">{_0x4ee135("auth.verificationErrorHint")}</p><button onClick={() => _0x1e7354("/login")} className="cursor-pointer text-xs text-text-tertiary hover:text-text-secondary underline">{_0x4ee135("auth.login")}</button></div>}</div>}</div><div className="mt-6 text-center"><div className="flex items-center justify-center gap-2 text-text-muted"><_0xa62dbc icon="solar:letter-bold-duotone" className="w-4 h-4" /><span className="text-xs">{_0x4ee135("auth.emailVerification")}</span></div></div></div></div>;
};
export { d as default };