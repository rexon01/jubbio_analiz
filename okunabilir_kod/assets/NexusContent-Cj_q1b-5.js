import { b as _0x4c1a7a, v as _0x35cdba, J as _0x38a5ae, r as _0x423cbe, j as _0x58be92, I as _0x9d177a, s as _0x415a2a } from "./index-cQfEKR1W.js";
import { getPricingForInterval as _0x245310 } from "./subscription-Cl5JAGbQ.js";
import { N as _0x4693cd, P as _0x29986f, C as _0x5f3c35 } from "./ComparisonTable-DUfwtDVZ.js";
import { C as _0x219c72 } from "./CheckoutPlaceholder-Dr0TfmeQ.js";
import { bB as _0x3c6b19 } from "./AppLayout-BEBJqe9_.js";
import { A as _0x16f69d } from "./arrow-left-B3FhifN2.js";
import { L as _0x3ef7e5 } from "./loader-circle-CTtxa1g9.js";
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
function b() {
  const {
    t: _0x26ad96
  } = _0x4c1a7a();
  const [_0x562886] = _0x35cdba();
  const {
    plans: _0x55c5be,
    currentSubscription: _0x18fa8f,
    selectedInterval: _0x459fd0,
    setSelectedInterval: _0xdd7ed0,
    selectPlanForCheckout: _0x8e4a48,
    cancelSubscription: _0x2121f5,
    fetchPlans: _0x4e2d38,
    fetchSubscriptionStatus: _0x18a964,
    checkoutPlanId: _0x114b9d,
    redeemGiftCode: _0x1304dd
  } = _0x38a5ae();
  const [_0x417aae, _0x12b93a] = _0x423cbe.useState(_0x18fa8f ? "manage" : "plans");
  const [_0x191809, _0x367012] = _0x423cbe.useState(false);
  const [_0x537af8, _0x205798] = _0x423cbe.useState(null);
  const [_0x56589d, _0x4f1799] = _0x423cbe.useState(false);
  const _0x9808b8 = _0x562886.get("action");
  const _0x30e1bb = _0x562886.get("plan");
  const _0x4d7ce6 = _0x562886.get("interval");
  const _0x1c9b2b = _0x423cbe.useCallback((_0x3c4ae2, _0x3c14b3) => {
    if (_0x3c14b3.available !== false) {
      _0x8e4a48(_0x3c4ae2.id);
      _0x205798(_0x3c14b3.id);
      _0x367012(false);
      _0x12b93a("checkout");
    }
  }, [_0x8e4a48]);
  _0x423cbe.useEffect(() => {
    (async () => {
      await _0x4e2d38();
      await _0x18a964();
    })();
  }, []);
  _0x423cbe.useEffect(() => {
    _0x12b93a(_0x4b485b => _0x4b485b === "checkout" ? _0x4b485b : _0x18fa8f ? "manage" : "plans");
  }, [_0x18fa8f]);
  _0x423cbe.useEffect(() => {
    if (!_0x9808b8 || _0x56589d || _0x55c5be.length === 0) {
      return;
    }
    if (_0x4d7ce6) {
      _0xdd7ed0(_0x4d7ce6);
    }
    const _0x23a55f = _0x30e1bb || "nexus";
    const _0x38bb72 = _0x55c5be.find(_0x402732 => _0x402732.id === _0x23a55f) ?? _0x55c5be.find(_0x3b4b98 => _0x3b4b98.tier === "pro");
    if (!_0x38bb72) {
      return;
    }
    const _0x2f2f19 = _0x38bb72.pricing.find(_0x5506e9 => _0x5506e9.id === _0x30e1bb) ?? _0x245310(_0x38bb72, _0x4d7ce6 || _0x459fd0);
    if (_0x2f2f19 && _0x2f2f19.available !== false) {
      _0x205798(_0x2f2f19.id);
      if (_0x9808b8 === "select") {
        _0x8e4a48(_0x38bb72.id);
        _0x367012(false);
        _0x12b93a("checkout");
      } else if (_0x9808b8 === "gift") {
        _0x8e4a48(_0x38bb72.id);
        _0x367012(true);
        _0x12b93a("checkout");
      }
      _0x4f1799(true);
    } else {
      _0x4f1799(true);
    }
  }, [_0x9808b8, _0x30e1bb, _0x4d7ce6, _0x56589d, _0x55c5be, _0x8e4a48, _0xdd7ed0, _0x459fd0]);
  return <div className="h-full w-full flex flex-col bg-surface-base overflow-hidden relative"><div className="absolute top-4 left-4 md:top-6 md:left-6 z-20"><div className="flex items-center gap-2.5 h-11 pl-2.5 pr-4 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 select-none"><img src="https://cdn.jubbio.com/badges/icons/1775103030899_nexus.png" alt="Nexus" className="size-7 rounded-full object-contain" /><span className="text-sm font-semibold text-white/90">Jubbio Nexus</span></div></div>{(_0x417aae === "checkout" || _0x417aae === "manage") && <div className="absolute top-4 left-44 md:top-6 md:left-52 z-20"><button onClick={() => {
        _0x12b93a("plans");
        _0x367012(false);
      }} className="inline-flex items-center gap-1.5 h-10 px-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/70 transition hover:bg-black/60 hover:text-white cursor-pointer text-xs font-medium"><_0x16f69d className="size-3.5" />{_0x26ad96("nexus.backToPlans")}</button></div>}{_0x417aae === "plans" && _0x18fa8f && <div className="absolute top-4 left-44 md:top-6 md:left-52 z-20"><button onClick={() => _0x12b93a("manage")} className="inline-flex items-center gap-1.5 h-10 px-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/70 transition hover:bg-black/60 hover:text-white cursor-pointer text-xs font-medium"><_0x16f69d className="size-3.5" />{_0x26ad96("subscription.backToManage")}</button></div>}<div className="absolute top-4 right-4 md:top-6 md:right-6 z-20"><_Component redeemGiftCode={_0x1304dd} /></div><div className="flex-1 overflow-y-auto scrollbar-none"><_Component2 view={_0x417aae} plans={_0x55c5be} currentSubscription={_0x18fa8f} checkoutPricingId={_0x537af8} checkoutPlanId={_0x114b9d} isGiftMode={_0x191809} onSelectPlan={_0x1c9b2b} onGift={(_0x145c30, _0x695732) => {
        _0x8e4a48(_0x145c30.id);
        _0x205798(_0x695732.id);
        _0x367012(true);
        _0x12b93a("checkout");
      }} onChangePlan={() => _0x12b93a("plans")} onCancel={() => _0x2121f5()} onCheckoutBack={() => {
        _0x12b93a("plans");
        _0x367012(false);
      }} onCheckoutComplete={() => {
        _0x12b93a("manage");
        _0x367012(false);
      }} t={_0x26ad96} /></div></div>;
}
function _Component2({
  view: _0x147a83,
  plans: _0x3f4f6d,
  currentSubscription: _0x5626fd,
  checkoutPricingId: _0x6afa74,
  checkoutPlanId: _0xc2b77d,
  isGiftMode: _0x2787ae,
  onSelectPlan: _0x43b622,
  onGift: _0x465874,
  onChangePlan: _0x2be49f,
  onCancel: _0x2a1de6,
  onCheckoutBack: _0x25eb3a,
  onCheckoutComplete: _0x3b9ea3,
  t: _0x47aadd
}) {
  if (_0x147a83 === "checkout" && _0xc2b77d) {
    const _0x461c2b = _0x3f4f6d.find(_0x1526ea => _0x1526ea.id === _0xc2b77d);
    const _0x40e5af = _0x461c2b?.pricing.find(_0x3f68ef => _0x3f68ef.id === _0x6afa74) ?? null;
    if (_0x461c2b && _0x40e5af) {
      return <div className="max-w-lg mx-auto px-6 pt-8 pb-12"><_0x219c72 plan={_0x461c2b} pricing={_0x40e5af} isGift={_0x2787ae} onBack={_0x25eb3a} onComplete={_0x3b9ea3} /></div>;
    }
  }
  if (_0x147a83 === "manage" && _0x5626fd) {
    return <div className="max-w-lg mx-auto px-6 pt-8 pb-12"><_0x3c6b19 subscription={_0x5626fd} onChangePlan={_0x2be49f} onCancel={_0x2a1de6} /></div>;
  } else {
    return <_0x58be92.Fragment><div className="relative overflow-hidden bg-gradient-to-b from-[color-mix(in_oklch,var(--accent-primary)_30%,black)] via-[color-mix(in_oklch,var(--accent-primary)_12%,var(--surface-base))] to-surface-base"><div className="pointer-events-none absolute inset-0"><div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-white/[0.015] blur-[150px]" /><div className="absolute top-[20%] right-[5%] size-96 rounded-full bg-[color-mix(in_oklch,var(--accent-primary)_8%,transparent)] blur-[100px]" /><div className="absolute top-[30%] left-[5%] size-72 rounded-full bg-[color-mix(in_oklch,var(--accent-primary)_6%,transparent)] blur-[80px]" /><div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface-base to-transparent" /><div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:40px_40px]" /><img src="https://cdn.jubbio.com/badges/icons/1775103030899_nexus.png" alt="" className="absolute top-[12%] left-[3%] size-52 rotate-[-20deg] opacity-[0.08]" /><img src="https://cdn.jubbio.com/badges/icons/1775103030899_nexus.png" alt="" className="absolute bottom-[15%] right-[5%] size-40 rotate-[15deg] opacity-[0.05]" /></div><div className="relative max-w-5xl mx-auto px-8 md:px-12 pt-24 pb-16 md:pt-28 md:pb-20"><div className="text-center mb-10 md:mb-12 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.1s_forwards]"><h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none mb-4">{_0x47aadd("nexus.heroHeadline")}<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-primary)] via-white to-[var(--accent-primary)]">{_0x47aadd("nexus.heroAccent")}</span></h1><p className="text-sm md:text-base text-white/50 max-w-lg mx-auto leading-relaxed">{_0x47aadd("nexus.heroDescription")}</p></div></div></div><div className="max-w-5xl mx-auto px-8 md:px-12 py-8 space-y-10"><section className="opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.5s_forwards]">{_0x3f4f6d.length === 0 ? <_0x4693cd /> : <_0x29986f plans={_0x3f4f6d} subscription={_0x5626fd} onSelect={_0x43b622} onGift={_0x465874} />}</section>{_0x3f4f6d.length > 0 && <section className="opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.7s_forwards]"><_0x5f3c35 plans={_0x3f4f6d.filter(_0x3d69b7 => _0x3d69b7.id !== "plus")} currentPlanId={_0x5626fd?.planId ?? null} highlightPlanId="pro" /></section>}</div></_0x58be92.Fragment>;
  }
}
function _Component({
  redeemGiftCode: _0x1aa472
}) {
  const {
    t: _0xa3ce26
  } = _0x4c1a7a();
  const [_0x3ef3f3, _0x359b27] = _0x423cbe.useState(false);
  const [_0x53a6f4, _0x31f25a] = _0x423cbe.useState("");
  const [_0x5e3ffe, _0x57aa0f] = _0x423cbe.useState(false);
  const _0x1fb786 = _0x423cbe.useCallback(async () => {
    const _0x434c46 = _0x53a6f4.trim();
    if (_0x434c46) {
      _0x57aa0f(true);
      try {
        await _0x1aa472(_0x434c46);
        _0x31f25a("");
        _0x359b27(false);
      } catch {} finally {
        _0x57aa0f(false);
      }
    }
  }, [_0x53a6f4, _0x1aa472]);
  return <div className="relative"><button onClick={() => _0x359b27(!_0x3ef3f3)} className={_0x415a2a("inline-flex size-10 items-center justify-center rounded-full backdrop-blur-sm border transition cursor-pointer", _0x3ef3f3 ? "bg-white/15 border-white/20 text-white" : "bg-black/40 border-white/10 text-white/70 hover:bg-black/60 hover:text-white")}><_0x9d177a icon="solar:gift-bold-duotone" className="size-4.5" /></button>{_0x3ef3f3 && <_0x58be92.Fragment><div className="fixed inset-0 z-[-1] bg-black/80" onClick={() => _0x359b27(false)} /><div className="absolute top-full right-0 mt-2 w-80 rounded-xl overflow-hidden animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200 z-10"><div className="p-px rounded-xl bg-gradient-to-br from-white/[0.08] via-transparent to-white/[0.03]"><div className="rounded-xl bg-black/80 backdrop-blur-xl border border-white/[0.06] shadow-[0_16px_48px_-8px_rgba(0,0,0,0.6)]"><div className="px-4 pt-4 pb-3"><div className="flex items-center gap-2.5 mb-1"><div className="flex size-8 items-center justify-center rounded-lg bg-accent-primary/15 border border-accent-border/20"><_0x9d177a icon="solar:gift-bold-duotone" className="size-4 text-accent-primary-text" /></div><div><p className="text-sm font-semibold text-white">{_0xa3ce26("subscription.redeemGiftCode")}</p><p className="text-[11px] text-white/40">{_0xa3ce26("subscription.giftCodeHint")}</p></div></div></div><div className="px-4 pb-4"><div className="flex items-center gap-2"><input type="text" value={_0x53a6f4} onChange={_0x560e12 => _0x31f25a(_0x560e12.target.value.toUpperCase())} placeholder="GIFT-XXXX-XXXX" className="flex-1 h-10 rounded-lg bg-white/[0.06] border border-white/[0.08] px-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent-primary/50 focus:bg-white/[0.08] transition-all font-mono tracking-wider" onKeyDown={_0x29a9f2 => {
                  if (_0x29a9f2.key === "Enter") {
                    _0x1fb786();
                  }
                }} autoFocus={true} /><button type="button" onClick={_0x1fb786} disabled={!_0x53a6f4.trim() || _0x5e3ffe} className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent-primary transition-all hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer">{_0x5e3ffe ? <_0x3ef7e5 className="size-4 text-text-on-accent animate-spin" /> : <_0x16f69d className="size-4 text-text-on-accent rotate-180" />}</button></div></div></div></div></div></_0x58be92.Fragment>}</div>;
}
export { b as default };