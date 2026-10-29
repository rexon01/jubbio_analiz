import { r as _0x2f0fb5, b as _0x585bf5, x as _0x39b2f8, H as _0x4ea9bd, j as _0x177109, _ as _0x392dc2, d as _0x4b8c3b, J as _0x1e9542, C as _0x49666d, E as _0x5373e9, X as _0x4656fd, I as _0x557e46, L as _0x355594, K as _0x4f8ee2 } from "./index-cQfEKR1W.js";
import { N as _0x433ff7, P as _0xc10f07, C as _0x37869f } from "./ComparisonTable-DUfwtDVZ.js";
import "./subscription-Cl5JAGbQ.js";
import "./card-Bk6R3tFg.js";
import "./gift-Co-azAyt.js";
const _Component = _0x2f0fb5.lazy(() => _0x392dc2(() => import("./Silk-Qs7jpmi6.js"), [], import.meta.url));
const _Component2 = _0x2f0fb5.memo(() => {
  const {
    t: _0x443db5
  } = _0x585bf5();
  const _0x29c4ee = _0x39b2f8();
  const _0xf415a4 = _0x4ea9bd();
  return <section className="relative w-full flex flex-col items-center pt-36 md:pt-52 pb-16">{_0x29c4ee && <div className="absolute inset-0 opacity-40" style={{
      maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)"
    }}><_0x2f0fb5.Suspense fallback={<div className="w-full h-full bg-[#151518]" />}><_Component speed={1.6} scale={1} color="#4A7A00" noiseIntensity={1.2} rotation={0.15} /></_0x2f0fb5.Suspense></div>}<div className="relative z-10 flex flex-col items-center text-center px-4"><h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]">Jubbio <span style={{
          color: _0xf415a4
        }}>Nexus</span></h1><p className="mt-6 text-base md:text-lg text-white/50 leading-relaxed max-w-md">{_0x443db5("nexus.subtitle")}</p></div></section>;
});
const g = [{
  icon: _0x4656fd,
  key: "trust.cancelAnytime"
}, {
  icon: "solar:card-bold-duotone",
  key: "trust.securePayment"
}, {
  icon: "solar:shield-bold-duotone",
  key: "trust.dataProtected"
}];
const w = [{
  question: "faq.cancelQuestion",
  answer: "faq.cancelAnswer"
}, {
  question: "faq.refundQuestion",
  answer: "faq.refundAnswer"
}, {
  question: "faq.paymentQuestion",
  answer: "faq.paymentAnswer"
}, {
  question: "faq.planChangeQuestion",
  answer: "faq.planChangeAnswer"
}, {
  question: "faq.activationQuestion",
  answer: "faq.activationAnswer"
}];
const N = _0x2f0fb5.memo(({
  faq: _0x294110,
  index: _0x2d2c04,
  isOpen: _0x23ece4,
  onToggle: _0x3f5421
}) => {
  const {
    t: _0x35bde8
  } = _0x585bf5();
  return <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-colors hover:bg-white/[0.04]"><button onClick={() => _0x3f5421(_0x2d2c04)} className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"><span className="text-sm font-medium text-white">{_0x35bde8("nexus." + _0x294110.question)}</span><_0x4f8ee2 className={"size-4 text-white/40 shrink-0 transition-transform duration-200 " + (_0x23ece4 ? "rotate-180" : "")} /></button><div className="grid transition-[grid-template-rows] duration-200" style={{
      gridTemplateRows: _0x23ece4 ? "1fr" : "0fr"
    }}><div className="overflow-hidden"><p className="px-5 pb-4 text-sm text-white/50 leading-relaxed">{_0x35bde8("nexus." + _0x294110.answer)}</p></div></div></div>;
});
N.displayName = "FaqItem";
const v = () => {
  const {
    t: _0x13c55a
  } = _0x585bf5();
  const _0x2082b7 = _0x4b8c3b();
  const {
    plans: _0x3cdb58,
    fetchPlans: _0x365999
  } = _0x1e9542();
  _0x49666d(_0x13c55a("nexus.pageTitle"), _0x13c55a("nexus.pageDescription"), "");
  const [_0x563a49, _0x4aa81f] = _0x2f0fb5.useState(null);
  const _0x1df833 = _0x2f0fb5.useCallback(_0x2e6d2e => {
    _0x4aa81f(_0x28e624 => _0x28e624 === _0x2e6d2e ? null : _0x2e6d2e);
  }, []);
  _0x2f0fb5.useEffect(() => {
    if (_0x3cdb58.length === 0) {
      _0x365999();
    }
  }, [_0x3cdb58.length, _0x365999]);
  return <_0x5373e9 showDownloadBar={false} accentColor="#ADFF08"><_Component2 /><div className="relative pb-4"><div className="relative max-w-5xl mx-auto px-4 pb-4">{_0x3cdb58.length === 0 ? <div className="mb-20"><_0x433ff7 /></div> : <_0x177109.Fragment><section className="mb-16"><_0xc10f07 plans={_0x3cdb58} subscription={null} onSelect={(_0x2d4d0a, _0x2c70fa) => _0x2082b7("/app?nexus=select&plan=" + encodeURIComponent(_0x2c70fa.id))} onGift={(_0x18f03c, _0xa26969) => _0x2082b7("/app?nexus=gift&plan=" + encodeURIComponent(_0xa26969.id))} /></section><section className="mb-16"><_0x37869f plans={_0x3cdb58.filter(_0x40f599 => _0x40f599.id !== "plus")} currentPlanId={null} highlightPlanId="pro" /></section></_0x177109.Fragment>}<div className="flex flex-wrap items-center justify-center gap-8 mb-16">{g.map((_0x3ec9e5, _0x1004c9) => <div className="flex items-center gap-2.5 text-text-muted" key={_0x1004c9}>{typeof _0x3ec9e5.icon == "string" ? <_0x557e46 icon={_0x3ec9e5.icon} className="size-4" /> : <_0x3ec9e5.icon className="size-4" />}<span className="text-sm">{_0x13c55a("nexus." + _0x3ec9e5.key)}</span></div>)}</div><section className="mb-12 pt-8"><div className="mb-8 text-center"><h2 className="text-2xl font-bold text-white">{_0x13c55a("nexus.faqTitle")}</h2></div><div className="space-y-2 max-w-2xl mx-auto">{w.map((_0x3eb169, _0x43392f) => <N faq={_0x3eb169} index={_0x43392f} isOpen={_0x563a49 === _0x43392f} onToggle={_0x1df833} key={_0x43392f} />)}</div></section><div className="mt-12 text-center"><p className="text-sm text-text-tertiary">{_0x13c55a("nexus.questionsText")} <_0x355594 to="/help-center" className="text-accent-primary-text hover:underline underline-offset-2">{_0x13c55a("nexus.helpCenter")}</_0x355594></p></div></div></div></_0x5373e9>;
};
export { v as default };