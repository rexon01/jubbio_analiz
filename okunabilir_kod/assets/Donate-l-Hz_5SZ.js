import { c as _0x1f2080, b as _0xc9ba4c, r as _0x148716, f as _0x34ebcb, x as _0x5e1d0c, C as _0x55f535, j as _0x36616f, E as _0x77a180, I as _0x5d2b31, s as _0x35b2f6, L as _0x3258d0, P as _0x290239, _ as _0x435773 } from "./index-cQfEKR1W.js";
import { I as _0x59e864, i as _0xa0c537 } from "./IyzicoCheckoutFrame-f1WDW5o8.js";
import { A as _0x206e45 } from "./arrow-left-B3FhifN2.js";
import { L as _0x3cc826 } from "./loader-circle-CTtxa1g9.js";
import { A as _0xdfccb8 } from "./arrow-right-DvlsXLCB.js";
const _Component = _0x148716.lazy(() => _0x435773(() => import("./Aurora-QHjOwBoE.js"), [], import.meta.url));
const j = {
  USD: [5, 25, 50, 100, 500],
  EUR: [5, 25, 50, 100, 500],
  TRY: [50, 100, 250, 1000, 5000]
};
const f = {
  USD: 5,
  EUR: 5,
  TRY: 50
};
const v = {
  USD: "$",
  EUR: "€",
  TRY: "₺"
};
const y = () => {
  const {
    t: _0x47f97a
  } = _0xc9ba4c();
  const [_0x3b87d6, _0x374b22] = _0x148716.useState(100);
  const [_0x3825e3, _0x3d6b0a] = _0x148716.useState("");
  const [_0x171a96, _0x2426e5] = _0x148716.useState("one-time");
  const [_0x15a1f4, _0x59ecc5] = _0x148716.useState("TRY");
  const [_0x307e2e, _0xb38e6a] = _0x148716.useState("");
  const [_0x40b000, _0xcd39c0] = _0x148716.useState("");
  const [_0x34b275, _0x503efc] = _0x148716.useState(false);
  const [_0x58f1f0, _0x1d9a9f] = _0x148716.useState(null);
  const _0x46dbe4 = _0x148716.useRef(null);
  const [_0x240e4a, _0x2831c3] = _0x148716.useState();
  const _0xc388c0 = _0x34ebcb(_0x5c934e => _0x5c934e.isAuthenticated);
  const _0x1283c3 = _0x5e1d0c();
  _0x55f535(_0x47f97a("donate.pageTitle"), _0x47f97a("donate.pageDescription"), "");
  _0x148716.useEffect(() => {
    if (!_0xc388c0 && _0x171a96 === "monthly") {
      _0x2426e5("one-time");
    }
  }, [_0xc388c0, _0x171a96]);
  _0x148716.useEffect(() => {
    const _0x3e6622 = _0x4fd691 => {
      if (_0xa0c537(_0x4fd691, _0x46dbe4.current, "donate") && _0x4fd691.data.status !== "pending") {
        if (_0x4fd691.data.status === "success") {
          _0x1d9a9f(null);
          _0x2831c3(undefined);
          _0x503efc(false);
          _0x290239.success(_0x47f97a("donate.thanks", "Bağışın için teşekkürler!"));
        } else if (_0x4fd691.data.status === "failure") {
          _0x1d9a9f(null);
          _0x2831c3(undefined);
          _0x503efc(false);
          _0x290239.error(_0x47f97a("donate.paymentError"));
        }
      }
    };
    window.addEventListener("message", _0x3e6622);
    return () => window.removeEventListener("message", _0x3e6622);
  }, [_0x47f97a]);
  const _0x5ca89a = _0x3b87d6 ?? (_0x3825e3 ? Number(_0x3825e3) : null);
  const _0x19d05e = _0x5ca89a && _0x5ca89a >= f[_0x15a1f4] && (_0xc388c0 || _0x307e2e.includes("@"));
  const _0x138c69 = v[_0x15a1f4];
  if (_0x58f1f0 || _0x240e4a) {
    return <_0x77a180 showDownloadBar={false} accentColor="#FF1744">{_0x1283c3 && <div className="absolute inset-x-0 top-0 h-[280px] md:h-[800px] opacity-40 pointer-events-none" style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 60%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 60%, transparent 100%)"
      }}><_0x148716.Suspense fallback={null}><_Component colorStops={["#FF6B35", "#FF1744", "#D500F9"]} amplitude={1.2} blend={0.6} speed={0.3} /></_0x148716.Suspense></div>}<div className="relative mx-auto max-w-xl px-4 sm:px-6 pt-36 md:pt-44 pb-8"><div className="mb-6"><h2 className="flex items-center gap-3 text-xl font-semibold text-white"><button type="button" onClick={() => {
              _0x1d9a9f(null);
              _0x2831c3(undefined);
              _0x503efc(false);
            }} className="flex size-8 items-center justify-center rounded-lg bg-white/[0.08] text-white/60 hover:bg-white/[0.12] hover:text-white transition-colors cursor-pointer"><_0x206e45 className="size-4.5" /></button>{_0x47f97a("donate.paymentTitle", "Ödeme")}</h2></div><_0x59e864 frameRef={_0x46dbe4} checkoutFormContent={_0x58f1f0 ?? ""} paymentPageUrl={_0x240e4a} className="w-full min-h-[500px] rounded-2xl border border-white/[0.08] bg-white" title="iyzico checkout" /><p className="text-center text-[11px] text-white/30 mt-4">{_0x47f97a("donate.securePayment", "Güvenli ödeme altyapısı ile korunmaktadır")}</p></div></_0x77a180>;
  } else {
    return <_0x77a180 showDownloadBar={false} accentColor="#FF1744">{_0x1283c3 && <div className="absolute inset-x-0 top-0 h-[280px] md:h-[800px] opacity-40 pointer-events-none" style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 60%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 60%, transparent 100%)"
      }}><_0x148716.Suspense fallback={null}><_Component colorStops={["#FF6B35", "#FF1744", "#D500F9"]} amplitude={1.2} blend={0.6} speed={0.3} /></_0x148716.Suspense></div>}<div className="relative mx-auto max-w-xl px-4 sm:px-6 pt-36 md:pt-44 pb-8"><div className="mb-10"><h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{_0x47f97a("donate.title")}</h1><p className="mt-3 text-sm text-white/50 leading-relaxed max-w-md">{_0x47f97a("donate.description")}</p></div><form onSubmit={async _0x35b3ba => {
          _0x35b3ba.preventDefault();
          if (_0x19d05e && _0x5ca89a && !_0x34b275) {
            _0x503efc(true);
            try {
              const _0x122ac0 = await async function (_0x270468) {
                return (await _0x1f2080.post("https://gateway.jubbio.com/api/v1/auth/donations", _0x270468)).data;
              }({
                amount: _0x5ca89a * 100,
                currency: _0x15a1f4,
                recurring: _0x171a96 === "monthly",
                ...(!_0xc388c0 && {
                  email: _0x307e2e
                }),
                ...(_0x40b000.trim() && {
                  message: _0x40b000.trim()
                })
              });
              if (_0x122ac0.checkoutFormContent || _0x122ac0.paymentPageUrl) {
                _0x1d9a9f(_0x122ac0.checkoutFormContent ?? null);
                _0x2831c3(_0x122ac0.paymentPageUrl);
              } else {
                _0x290239.error(_0x47f97a("donate.paymentError"));
                _0x503efc(false);
              }
            } catch {
              _0x290239.error(_0x47f97a("donate.paymentError"));
              _0x503efc(false);
            }
          }
        }} className="space-y-5">{!_0xc388c0 && <div><label htmlFor="donate-email" className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">{_0x47f97a("donate.emailLabel")}</label><div className="relative"><_0x5d2b31 icon="solar:letter-bold-duotone" className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-white/30" /><input id="donate-email" type="email" value={_0x307e2e} onChange={_0x386b40 => _0xb38e6a(_0x386b40.target.value)} placeholder={_0x47f97a("donate.emailPlaceholder")} className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] pl-10 pr-4 text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#FF1744]/50 focus:bg-white/[0.05]" /></div></div>}<div><label className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">{_0x47f97a("donate.amountLabel")}</label><div className="grid grid-cols-3 sm:flex gap-2">{j[_0x15a1f4].map(_0x32216c => <button type="button" onClick={() => (_0x4084dd => {
                _0x374b22(_0x4084dd);
                _0x3d6b0a("");
              })(_0x32216c)} className={_0x35b2f6("sm:flex-1 rounded-xl border py-3.5 text-sm font-semibold transition-all duration-200", _0x3b87d6 === _0x32216c ? "bg-[#FF1744] text-black border-[#FF1744]" : "bg-white/[0.03] border-white/[0.08] text-white/60 hover:bg-white/[0.06] hover:text-white")} key={_0x32216c}>{_0x138c69}{_0x32216c}</button>)}<button type="button" onClick={() => {
                _0x374b22(null);
                _0x3d6b0a("");
              }} className={_0x35b2f6("sm:flex-1 rounded-xl border py-3.5 text-sm font-semibold transition-all duration-200", _0x3b87d6 === null ? "bg-[#FF1744] text-black border-[#FF1744]" : "bg-white/[0.03] border-white/[0.08] text-white/60 hover:bg-white/[0.06] hover:text-white")}>{_0x47f97a("donate.other")}</button></div>{_0x3b87d6 === null && <div className="relative mt-3"><span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-medium text-white/30">{_0x138c69}</span><input type="text" inputMode="numeric" value={_0x3825e3} onChange={_0x34dac9 => {
                _0x3d6b0a(_0x34dac9.target.value.replace(/[^0-9]/g, ""));
                _0x374b22(null);
              }} placeholder={_0x47f97a("donate.customPlaceholder")} autoFocus={true} className="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] pl-8 pr-4 text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#FF1744]/50 focus:bg-white/[0.05]" /></div>}</div><div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div><label className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">{_0x47f97a("donate.typeLabel")}</label><div className="grid grid-cols-1 gap-2">{["one-time"].map(_0xdb855e => {
                  const _0x1c7cb2 = _0xdb855e === "monthly" && !_0xc388c0;
                  return <button type="button" onClick={() => !_0x1c7cb2 && _0x2426e5(_0xdb855e)} disabled={_0x1c7cb2} className={_0x35b2f6("relative rounded-xl py-3 text-xs font-medium transition-all duration-200", _0x1c7cb2 ? "bg-white/[0.02] text-white/20 cursor-not-allowed" : _0x171a96 === _0xdb855e ? "bg-[#FF1744] text-black" : "bg-white/[0.03] border border-white/[0.08] text-white/60 hover:bg-white/[0.06] hover:text-white")} key={_0xdb855e}>{_0x47f97a("donate.types." + _0xdb855e)}{_0x1c7cb2 && <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-[7px] font-medium text-amber-400 bg-amber-500/20 px-1.5 py-0.5 rounded-full whitespace-nowrap">{_0x47f97a("donate.loginRequired")}</span>}</button>;
                })}</div></div><div><label className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">{_0x47f97a("donate.currencyLabel")}</label><div className="grid grid-cols-1 gap-2">{["TRY"].map(_0x324ebd => <button type="button" onClick={() => {
                  _0x59ecc5(_0x324ebd);
                  if (_0x3b87d6 !== null && !j[_0x324ebd].includes(_0x3b87d6)) {
                    _0x374b22(j[_0x324ebd][1]);
                  }
                }} className={_0x35b2f6("rounded-xl py-3 text-xs font-medium transition-all duration-200", _0x15a1f4 === _0x324ebd ? "bg-[#FF1744] text-black" : "bg-white/[0.03] border border-white/[0.08] text-white/60 hover:bg-white/[0.06] hover:text-white")} key={_0x324ebd}>{v[_0x324ebd]}</button>)}</div></div></div><div><label htmlFor="donate-message" className="block text-xs font-medium text-white/40 mb-2 uppercase tracking-wider">{_0x47f97a("donate.messageLabel")} <span className="text-white/20 normal-case">({_0x47f97a("donate.optional")})</span></label><textarea id="donate-message" value={_0x40b000} onChange={_0x5b6a7e => _0xcd39c0(_0x5b6a7e.target.value)} placeholder={_0x47f97a("donate.messagePlaceholder")} maxLength={500} rows={2} className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#FF1744]/50 focus:bg-white/[0.05] resize-none" /></div>{!_0xc388c0 && <p className="text-[11px] text-white/30"><_0x5d2b31 icon="solar:user-bold-duotone" className="size-3 inline mr-1 align-[-2px]" />{_0x47f97a("donate.anonymousNotice")} <_0x3258d0 to="/login?returnUrl=/donate" className="underline hover:text-white/60">{_0x47f97a("donate.loginToLink")}</_0x3258d0></p>}<button type="submit" disabled={!_0x19d05e || _0x34b275} className={_0x35b2f6("group relative w-full overflow-hidden rounded-full px-6 py-4 text-sm font-semibold transition-all duration-300", _0x19d05e && !_0x34b275 ? "bg-[#FF1744] text-black hover:bg-[#D50032] active:scale-[0.98] cursor-pointer" : "cursor-not-allowed bg-white/[0.05] text-white/20")}><span className="relative flex items-center justify-center gap-2.5">{_0x34b275 ? <_0x3cc826 className="size-4 animate-spin" /> : <_0x5d2b31 icon="solar:heart-bold-duotone" className="size-4 fill-current transition-transform duration-300 group-hover:scale-110" />}{_0x19d05e && _0x5ca89a ? _0x47f97a("donate.submitWithAmount", {
                symbol: _0x138c69,
                amount: _0x5ca89a
              }) : _0x47f97a("donate.submit")}{!_0x34b275 && <_0xdfccb8 className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />}</span></button><p className="text-center text-[11px] text-white/25">{_0x47f97a("donate.minimumNote", {
              symbol: _0x138c69,
              min: f[_0x15a1f4]
            })}</p></form></div></_0x77a180>;
  }
};
export { y as default };