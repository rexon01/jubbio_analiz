import { J as _0x47bf40, r as _0x43aeab, b as _0x44424a, j as _0x24574a, I as _0x206364, s as _0x25c0f0 } from "./index-cQfEKR1W.js";
import { N as _0x438371, P as _0x586fb1, C as _0xbd9e4d } from "./ComparisonTable-DUfwtDVZ.js";
import { C as _0x1b06c8 } from "./CheckoutPlaceholder-Dr0TfmeQ.js";
import { bB as _0x4adfdc } from "./AppLayout-BEBJqe9_.js";
import { A as _0x2c0566 } from "./arrow-left-B3FhifN2.js";
import { L as _0x12c87f } from "./loader-circle-CTtxa1g9.js";
import "./subscription-Cl5JAGbQ.js";
import "./card-Bk6R3tFg.js";
import "./gift-Co-azAyt.js";
import "./IyzicoCheckoutFrame-f1WDW5o8.js";
import "./zap-B3VH4qT9.js";
import "./dialog-BMMpM7PR.js";
import "./index-yuEHo9bu.js";
import "./submit-button-B2LF_DTf.js";
import "./NexusSuccessArtwork-YGvslhff.js";
import "./soundboardFx-C2LP-Hjs.js";
import "./index-BUijt7wr.js";
import "./tr-D975n4_R.js";
import "./select-DQjjzSZW.js";
import "./index-Oyyh46KT.js";
import "./arrow-right-DvlsXLCB.js";
import "./switch-lfnbGePn.js";
import "./drawer-X7YyCqpZ.js";
import "./input-AMyERYwJ.js";
import "./useTheme-CzNZmxfV.js";
import "./circle-x-BBSKKBIf.js";
import "./avatar-C-4BWxT3.js";
import "./ConfirmDialog-B4gIndKy.js";
import "./alert-dialog-BZuoGg7O.js";
import "./user-DSjlY8FD.js";
import "./refresh-cw-C3NlhmpS.js";
import "./trash-2-DuFcDcAU.js";
import "./clipboard-BQ9qambq.js";
import "./label-ODyS97Ju.js";
import "./video-AtsAgCNJ.js";
import "./plus-B7c2Px8R.js";
import "./channelNotificationStore-FXjXBmS_.js";
import "./index.module-CsHioFCV.js";
const p = () => {
  const {
    plans: _0x309d8b,
    currentSubscription: _0x226600,
    selectPlanForCheckout: _0x5ccf44,
    cancelSubscription: _0x3bf528,
    fetchPlans: _0x28dc1b,
    fetchSubscriptionStatus: _0x1509ce,
    checkoutPlanId: _0x5a0b00,
    redeemGiftCode: _0x311843
  } = _0x47bf40();
  const [_0x3d3a47, _0x2d0743] = _0x43aeab.useState(_0x226600 ? "manage" : "plans");
  const [_0x58d7cd, _0x2a5838] = _0x43aeab.useState(false);
  const {
    t: _0x2ebb94
  } = _0x44424a();
  const [_0xaa4380, _0x1e8ea7] = _0x43aeab.useState(null);
  const [_0x36ef02, _0x1f5354] = _0x43aeab.useState(false);
  const [_0x20324e, _0x1886bb] = _0x43aeab.useState("");
  const [_0x559fe5, _0x4bd850] = _0x43aeab.useState(false);
  _0x43aeab.useEffect(() => {
    (async () => {
      await _0x28dc1b();
      await _0x1509ce();
    })();
  }, []);
  _0x43aeab.useEffect(() => {
    _0x2d0743(_0x5a36e8 => _0x5a36e8 === "checkout" ? _0x5a36e8 : _0x226600 ? "manage" : "plans");
  }, [_0x226600]);
  const _0x2b600e = _0x43aeab.useCallback((_0x3564ca, _0x3547fb) => {
    if (_0x3547fb.available !== false) {
      _0x5ccf44(_0x3564ca.id);
      _0x1e8ea7(_0x3547fb.id);
      _0x2a5838(false);
      _0x2d0743("checkout");
    }
  }, [_0x5ccf44]);
  const _0x1e0b47 = _0x43aeab.useCallback(async () => {
    const _0x71ec3a = _0x20324e.trim();
    if (_0x71ec3a) {
      _0x4bd850(true);
      try {
        await _0x311843(_0x71ec3a);
        _0x1886bb("");
        _0x1f5354(false);
      } catch {} finally {
        _0x4bd850(false);
      }
    }
  }, [_0x20324e, _0x311843]);
  if (_0x3d3a47 === "checkout" && _0x5a0b00) {
    const _0x3f8daf = _0x309d8b.find(_0x354804 => _0x354804.id === _0x5a0b00);
    const _0x547003 = _0x3f8daf?.pricing.find(_0x25427e => _0x25427e.id === _0xaa4380) ?? null;
    if (_0x3f8daf && _0x547003) {
      return <div className="max-w-lg mx-auto"><_0x1b06c8 plan={_0x3f8daf} pricing={_0x547003} isGift={_0x58d7cd} onBack={() => {
          _0x2d0743("plans");
          _0x2a5838(false);
        }} onComplete={() => {
          _0x2d0743("manage");
          _0x2a5838(false);
        }} /></div>;
    }
  }
  if (_0x3d3a47 === "manage" && _0x226600) {
    return <div className="max-w-lg mx-auto"><button onClick={() => _0x2d0743("plans")} className="inline-flex items-center gap-1.5 mb-6 text-sm text-text-muted hover:text-text-primary transition-colors cursor-pointer"><_0x2c0566 className="size-3.5" />{_0x2ebb94("nexus.backToPlans")}</button><_0x4adfdc subscription={_0x226600} onChangePlan={() => _0x2d0743("plans")} onCancel={() => _0x3bf528()} /></div>;
  } else {
    return <div className="space-y-0">{_0x226600 && <button onClick={() => _0x2d0743("manage")} className="inline-flex items-center gap-1.5 mb-4 text-sm text-text-muted hover:text-text-primary transition-colors cursor-pointer"><_0x2c0566 className="size-3.5" />{_0x2ebb94("subscription.backToManage")}</button>}<div className="relative overflow-hidden rounded-2xl mb-10"><div className="relative bg-gradient-to-b from-[color-mix(in_oklch,var(--accent-primary)_25%,var(--surface-base))] via-[color-mix(in_oklch,var(--accent-primary)_8%,var(--surface-base))] to-surface-base overflow-hidden"><div className="pointer-events-none absolute inset-0"><div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-white/[0.01] blur-[120px]" /><div className="absolute top-[20%] right-[5%] size-64 rounded-full bg-[color-mix(in_oklch,var(--accent-primary)_6%,transparent)] blur-[80px]" /><div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface-base to-transparent" /><div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.015)_1px,transparent_0)] bg-[length:32px_32px]" /><img src="https://cdn.jubbio.com/badges/icons/1775103030899_nexus.png" alt="" className="absolute top-[10%] right-[6%] size-32 rotate-[12deg] opacity-[0.06]" /></div><div className="relative px-6 pt-12 pb-10 text-center"><div className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/[0.08] px-3 py-1.5 mb-5"><img src="https://cdn.jubbio.com/badges/icons/1775103030899_nexus.png" alt="Nexus" className="size-4" /><span className="text-xs font-semibold text-text-primary">Jubbio Nexus</span></div><h1 className="text-3xl md:text-4xl font-black text-text-primary tracking-tight leading-none mb-3">{_0x2ebb94("nexus.heroHeadline")} <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] via-[color-mix(in_oklch,var(--accent-primary)_60%,white)] to-[var(--accent-primary)]">{_0x2ebb94("nexus.heroAccent")}</span></h1><p className="text-sm text-text-muted max-w-md mx-auto leading-relaxed">{_0x2ebb94("nexus.heroDescription")}</p></div></div></div>{_0x309d8b.length === 0 ? <_0x438371 /> : <div className="space-y-12"><section><_0x586fb1 plans={_0x309d8b} subscription={_0x226600} onSelect={(_0x17f90b, _0x46864b) => {
            _0x2b600e(_0x17f90b, _0x46864b);
          }} onGift={(_0x32ee95, _0x4cd130) => {
            _0x5ccf44(_0x32ee95.id);
            _0x1e8ea7(_0x4cd130.id);
            _0x2a5838(true);
            _0x2d0743("checkout");
          }} /></section><section><_0xbd9e4d plans={_0x309d8b.filter(_0x4b808f => _0x4b808f.id !== "plus")} currentPlanId={_0x226600?.planId ?? null} highlightPlanId="pro" /></section><section><div className="relative"><button onClick={() => _0x1f5354(!_0x36ef02)} className={_0x25c0f0("flex items-center gap-3 px-5 py-4 transition-all cursor-pointer w-full group", _0x36ef02 ? "bg-white/[0.06] border border-b-0 border-white/[0.1] rounded-t-2xl" : "bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] rounded-2xl")}><div className={_0x25c0f0("flex size-10 items-center justify-center rounded-xl border transition-all", _0x36ef02 ? "bg-accent-primary/12 border-accent-border/20" : "bg-white/[0.06] border-white/[0.08]")}><_0x206364 icon="solar:gift-bold-duotone" className={_0x25c0f0("size-4.5 transition-colors", _0x36ef02 ? "text-accent-primary-text" : "text-text-muted")} /></div><div className="text-left flex-1"><p className={_0x25c0f0("text-sm font-semibold transition-colors", "text-text-primary")}>{_0x2ebb94("subscription.redeemGiftCode")}</p><p className="text-[11px] text-text-muted mt-0.5">{_0x2ebb94("subscription.giftCodeHint")}</p></div><div className={_0x25c0f0("flex size-6 items-center justify-center rounded-full transition-all", _0x36ef02 ? "bg-white/[0.08] rotate-180" : "bg-white/[0.06]")}><svg className="size-3.5 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg></div></button>{_0x36ef02 && <div className="rounded-b-2xl bg-white/[0.04] border border-t-0 border-white/[0.1] p-5 animate-in fade-in-0 slide-in-from-top-1 duration-200"><div className="flex items-stretch"><div className="relative flex-1"><_0x206364 icon="solar:gift-bold-duotone" className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-text-muted/50" /><input type="text" value={_0x20324e} onChange={_0x40f734 => _0x1886bb(_0x40f734.target.value.toUpperCase())} placeholder="GIFT-XXXX-XXXX" className="w-full h-11 rounded-l-xl rounded-r-none bg-white/[0.06] border border-r-0 border-white/[0.08] pl-10 pr-4 text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.08] transition-all font-mono tracking-wider" onKeyDown={_0x22527f => {
                    if (_0x22527f.key === "Enter") {
                      _0x1e0b47();
                    }
                  }} autoFocus={true} /></div><button type="button" onClick={_0x1e0b47} disabled={!_0x20324e.trim() || _0x559fe5} className="flex size-11 shrink-0 items-center justify-center rounded-r-xl rounded-l-none bg-accent-primary text-text-on-accent transition-all hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">{_0x559fe5 ? <_0x12c87f className="size-4 animate-spin" /> : <_0x2c0566 className="size-4 rotate-180" />}</button></div></div>}</div></section></div>}</div>;
  }
};
export { p as default };