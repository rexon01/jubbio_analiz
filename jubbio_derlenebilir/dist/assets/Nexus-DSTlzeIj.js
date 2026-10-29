import { r as _0x2f0fb5, b as _0x585bf5, x as _0x39b2f8, H as _0x4ea9bd, j as _0x177109, _ as _0x392dc2, d as _0x4b8c3b, J as _0x1e9542, C as _0x49666d, E as _0x5373e9, X as _0x4656fd, I as _0x557e46, L as _0x355594, K as _0x4f8ee2 } from "./index-cQfEKR1W.js";
import { N as _0x433ff7, P as _0xc10f07, C as _0x37869f } from "./ComparisonTable-DUfwtDVZ.js";
import "./subscription-Cl5JAGbQ.js";
import "./card-Bk6R3tFg.js";
import "./gift-Co-azAyt.js";
const j = _0x2f0fb5.lazy(() => _0x392dc2(() => import("./Silk-Qs7jpmi6.js"), [], import.meta.url));
const b = _0x2f0fb5.memo(() => {
  const {
    t: _0x443db5
  } = _0x585bf5();
  const _0x29c4ee = _0x39b2f8();
  const _0xf415a4 = _0x4ea9bd();
  return _0x177109.jsxs("section", {
    className: "relative w-full flex flex-col items-center pt-36 md:pt-52 pb-16",
    children: [_0x29c4ee && _0x177109.jsx("div", {
      className: "absolute inset-0 opacity-40",
      style: {
        maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)"
      },
      children: _0x177109.jsx(_0x2f0fb5.Suspense, {
        fallback: _0x177109.jsx("div", {
          className: "w-full h-full bg-[#151518]"
        }),
        children: _0x177109.jsx(j, {
          speed: 1.6,
          scale: 1,
          color: "#4A7A00",
          noiseIntensity: 1.2,
          rotation: 0.15
        })
      })
    }), _0x177109.jsxs("div", {
      className: "relative z-10 flex flex-col items-center text-center px-4",
      children: [_0x177109.jsxs("h1", {
        className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1]",
        children: ["Jubbio ", _0x177109.jsx("span", {
          style: {
            color: _0xf415a4
          },
          children: "Nexus"
        })]
      }), _0x177109.jsx("p", {
        className: "mt-6 text-base md:text-lg text-white/50 leading-relaxed max-w-md",
        children: _0x443db5("nexus.subtitle")
      })]
    })]
  });
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
  return _0x177109.jsxs("div", {
    className: "rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-colors hover:bg-white/[0.04]",
    children: [_0x177109.jsxs("button", {
      onClick: () => _0x3f5421(_0x2d2c04),
      className: "w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer",
      children: [_0x177109.jsx("span", {
        className: "text-sm font-medium text-white",
        children: _0x35bde8("nexus." + _0x294110.question)
      }), _0x177109.jsx(_0x4f8ee2, {
        className: "size-4 text-white/40 shrink-0 transition-transform duration-200 " + (_0x23ece4 ? "rotate-180" : "")
      })]
    }), _0x177109.jsx("div", {
      className: "grid transition-[grid-template-rows] duration-200",
      style: {
        gridTemplateRows: _0x23ece4 ? "1fr" : "0fr"
      },
      children: _0x177109.jsx("div", {
        className: "overflow-hidden",
        children: _0x177109.jsx("p", {
          className: "px-5 pb-4 text-sm text-white/50 leading-relaxed",
          children: _0x35bde8("nexus." + _0x294110.answer)
        })
      })
    })]
  });
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
  return _0x177109.jsxs(_0x5373e9, {
    showDownloadBar: false,
    accentColor: "#ADFF08",
    children: [_0x177109.jsx(b, {}), _0x177109.jsx("div", {
      className: "relative pb-4",
      children: _0x177109.jsxs("div", {
        className: "relative max-w-5xl mx-auto px-4 pb-4",
        children: [_0x3cdb58.length === 0 ? _0x177109.jsx("div", {
          className: "mb-20",
          children: _0x177109.jsx(_0x433ff7, {})
        }) : _0x177109.jsxs(_0x177109.Fragment, {
          children: [_0x177109.jsx("section", {
            className: "mb-16",
            children: _0x177109.jsx(_0xc10f07, {
              plans: _0x3cdb58,
              subscription: null,
              onSelect: (_0x2d4d0a, _0x2c70fa) => _0x2082b7("/app?nexus=select&plan=" + encodeURIComponent(_0x2c70fa.id)),
              onGift: (_0x18f03c, _0xa26969) => _0x2082b7("/app?nexus=gift&plan=" + encodeURIComponent(_0xa26969.id))
            })
          }), _0x177109.jsx("section", {
            className: "mb-16",
            children: _0x177109.jsx(_0x37869f, {
              plans: _0x3cdb58.filter(_0x40f599 => _0x40f599.id !== "plus"),
              currentPlanId: null,
              highlightPlanId: "pro"
            })
          })]
        }), _0x177109.jsx("div", {
          className: "flex flex-wrap items-center justify-center gap-8 mb-16",
          children: g.map((_0x3ec9e5, _0x1004c9) => _0x177109.jsxs("div", {
            className: "flex items-center gap-2.5 text-text-muted",
            children: [typeof _0x3ec9e5.icon == "string" ? _0x177109.jsx(_0x557e46, {
              icon: _0x3ec9e5.icon,
              className: "size-4"
            }) : _0x177109.jsx(_0x3ec9e5.icon, {
              className: "size-4"
            }), _0x177109.jsx("span", {
              className: "text-sm",
              children: _0x13c55a("nexus." + _0x3ec9e5.key)
            })]
          }, _0x1004c9))
        }), _0x177109.jsxs("section", {
          className: "mb-12 pt-8",
          children: [_0x177109.jsx("div", {
            className: "mb-8 text-center",
            children: _0x177109.jsx("h2", {
              className: "text-2xl font-bold text-white",
              children: _0x13c55a("nexus.faqTitle")
            })
          }), _0x177109.jsx("div", {
            className: "space-y-2 max-w-2xl mx-auto",
            children: w.map((_0x3eb169, _0x43392f) => _0x177109.jsx(N, {
              faq: _0x3eb169,
              index: _0x43392f,
              isOpen: _0x563a49 === _0x43392f,
              onToggle: _0x1df833
            }, _0x43392f))
          })]
        }), _0x177109.jsx("div", {
          className: "mt-12 text-center",
          children: _0x177109.jsxs("p", {
            className: "text-sm text-text-tertiary",
            children: [_0x13c55a("nexus.questionsText"), " ", _0x177109.jsx(_0x355594, {
              to: "/help-center",
              className: "text-accent-primary-text hover:underline underline-offset-2",
              children: _0x13c55a("nexus.helpCenter")
            })]
          })
        })]
      })
    })]
  });
};
export { v as default };