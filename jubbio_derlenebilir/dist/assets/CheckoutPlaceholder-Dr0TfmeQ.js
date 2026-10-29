import { t as _0x4810db, w as _0x2f9246, f as _0x83d147, b as _0x2cf29e, r as _0x35d903, aj as _0x27ac12, j as _0x2d6898, an as _0x1018af, I as _0x2aa5c3, B as _0x5c0e39, J as _0x56d3d8, aO as _0x24cbdb, aP as _0x1637bd } from "./index-cQfEKR1W.js";
import { I as _0x1b4277, i as _0x184fdf } from "./IyzicoCheckoutFrame-f1WDW5o8.js";
import { getPricingMonths as _0x444bfd, previewNexusEnd as _0x1b5fff, formatPrice as _0x1528f4 } from "./subscription-Cl5JAGbQ.js";
import { C as _0x3c627a, Z as _0x10573b, S as _0x1938fd } from "./zap-B3VH4qT9.js";
import { D as _0x17acf2, a as _0x2d2ed7, b as _0x2dd2f1, c as _0x43ea8c, d as _0x26ca49, f as _0x4b0179 } from "./dialog-BMMpM7PR.js";
import { S } from "./submit-button-B2LF_DTf.js";
import { N as _0x395770 } from "./NexusSuccessArtwork-YGvslhff.js";
import { A as _0x3d16a2 } from "./arrow-left-B3FhifN2.js";
import { L as _0x271083 } from "./loader-circle-CTtxa1g9.js"; /**
                                                              * @license lucide-react v0.535.0 - ISC
                                                              *
                                                              * This source code is licensed under the ISC license.
                                                              * See the LICENSE file in the root directory of this source tree.
                                                              */
const E = _0x4810db("user", [["path", {
  d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
  key: "975kel"
}], ["circle", {
  cx: "12",
  cy: "7",
  r: "4",
  key: "17ys0d"
}]]);
const U = "https://jubbio.com";
function F(_0x4fdecb) {
  if (!_0x2f9246()) {
    return false;
  }
  const _0x11b5b7 = _0x83d147.getState().user;
  const _0xb14877 = new URL(U + "/app/checkout");
  _0xb14877.searchParams.set("type", "fuel");
  _0xb14877.searchParams.set("packSize", _0x4fdecb.packSize);
  _0xb14877.searchParams.set("billing", _0x4fdecb.billingType);
  if (_0x4fdecb.transactionId) {
    _0xb14877.searchParams.set("txn", _0x4fdecb.transactionId);
  }
  if (_0x11b5b7?.id) {
    _0xb14877.searchParams.set("uid", String(_0x11b5b7.id));
  }
  if (_0x11b5b7?.username) {
    _0xb14877.searchParams.set("uname", _0x11b5b7.username);
  }
  window.electron?.openExternal?.(_0xb14877.toString());
  return true;
}
const R = {
  User: E,
  Zap: _0x10573b,
  Crown: _0x3c627a
};
const T = {
  emerald: {
    accent: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
    accentHex: "#10b981",
    buttonClass: "bg-emerald-500 hover:bg-emerald-400 text-text-primary"
  },
  violet: {
    accent: "text-accent-primary-text",
    iconBg: "bg-accent-subtle",
    accentHex: "#adff08",
    buttonClass: "bg-accent-primary hover:bg-accent-primary/90 text-black"
  },
  slate: {
    accent: "text-text-tertiary",
    iconBg: "bg-surface-overlay/80",
    accentHex: "#94a3b8",
    buttonClass: "bg-surface-inset hover:bg-interactive-active text-text-secondary"
  }
};
const M = ["#adff08", "#10b981", "#f472b6", "#60a5fa", "#fbbf24", "#a78bfa", "#34d399", "#fb923c", "#e879f9", "#22d3ee"];
const B = 300;
let D = 0;
function A(_0x3ff923) {
  return Array.from({
    length: _0x3ff923
  }, (_0x10f938, _0x36314b) => {
    const _0x4b9af6 = _0x36314b < _0x3ff923 / 2 ? "left" : "right";
    const _0x5d59f7 = _0x4b9af6 === "left" ? 2 + Math.random() * 3 : 95 + Math.random() * 3;
    const _0x142e9c = 97 + Math.random() * 3;
    const _0x2317d0 = _0x4b9af6 === "left" ? 15 : 95;
    const _0x17771b = _0x4b9af6 === "left" ? 85 : 165;
    const _0x134479 = (_0x2317d0 + Math.random() * (_0x17771b - _0x2317d0)) * Math.PI / 180;
    const _0x3dd329 = 350 + Math.random() * 700;
    return {
      id: "c-" + D++,
      x: _0x5d59f7,
      y: _0x142e9c,
      tx: Math.cos(_0x134479) * _0x3dd329,
      ty: -Math.sin(_0x134479) * _0x3dd329,
      rot: 720 + Math.random() * 540 + "deg",
      size: 5 + Math.random() * 7,
      color: M[Math.floor(Math.random() * M.length)],
      rotation: Math.random() * 360,
      shape: ["circle", "rect", "star"][_0x36314b % 3],
      delay: Math.random() * 0.3,
      duration: 1.4 + Math.random() * 0.8
    };
  });
}
function L({
  pieces: _0x1932e6
}) {
  return _0x2d6898.jsx("div", {
    className: "pointer-events-none absolute inset-0 overflow-hidden",
    children: _0x1932e6.map(_0x5f57d8 => _0x2d6898.jsx("div", {
      className: "absolute animate-confetti-burst",
      style: {
        left: _0x5f57d8.x + "%",
        top: _0x5f57d8.y + "%",
        "--tx": _0x5f57d8.tx + "px",
        "--ty": _0x5f57d8.ty + "px",
        "--rot": _0x5f57d8.rot,
        animationDelay: _0x5f57d8.delay + "s",
        animationDuration: _0x5f57d8.duration + "s"
      },
      children: _0x5f57d8.shape === "star" ? _0x2d6898.jsx(_0x1938fd, {
        className: "fill-current",
        style: {
          width: _0x5f57d8.size,
          height: _0x5f57d8.size,
          color: _0x5f57d8.color,
          transform: "rotate(" + _0x5f57d8.rotation + "deg)"
        }
      }) : _0x2d6898.jsx("div", {
        style: {
          width: _0x5f57d8.shape === "circle" ? _0x5f57d8.size : _0x5f57d8.size * 0.5,
          height: _0x5f57d8.shape === "circle" ? _0x5f57d8.size : _0x5f57d8.size * 1.6,
          backgroundColor: _0x5f57d8.color,
          borderRadius: _0x5f57d8.shape === "circle" ? "50%" : "2px",
          transform: "rotate(" + _0x5f57d8.rotation + "deg)"
        }
      })
    }, _0x5f57d8.id))
  });
}
function $({
  open: _0x4708f3,
  plan: _0x23073c,
  isGift: _0x47f66d,
  onClose: _0x1c345a
}) {
  const {
    t: _0x43a2b4
  } = _0x2cf29e();
  const _0x4948a0 = T[_0x23073c.color] ?? T.slate;
  const _0x3a5105 = R[_0x23073c.icon] ?? E;
  const [_0x2d3ae4, _0x1d5580] = _0x35d903.useState([]);
  const _0x5b582d = _0x35d903.useRef(undefined);
  const _0x6e7b6b = _0x35d903.useCallback(() => {
    if (_0x5b582d.current) {
      clearTimeout(_0x5b582d.current);
    }
    _0x5b582d.current = setTimeout(() => {
      _0x1d5580(_0xd3c0ca => _0xd3c0ca.length > B ? _0xd3c0ca.slice(_0xd3c0ca.length - B) : _0xd3c0ca);
    }, 2500);
  }, []);
  _0x35d903.useEffect(() => {
    if (_0x4708f3) {
      _0x1d5580(A(80));
      _0x6e7b6b();
    } else {
      _0x1d5580([]);
      if (_0x5b582d.current) {
        clearTimeout(_0x5b582d.current);
      }
    }
  }, [_0x4708f3, _0x6e7b6b]);
  _0x35d903.useEffect(() => () => {
    if (_0x5b582d.current) {
      clearTimeout(_0x5b582d.current);
    }
  }, []);
  const _0x4d55ab = _0x35d903.useCallback(() => {
    _0x1d5580(_0x3f0037 => {
      const _0x458e56 = [..._0x3f0037, ...A(50)];
      if (_0x458e56.length > B) {
        return _0x458e56.slice(_0x458e56.length - B);
      } else {
        return _0x458e56;
      }
    });
    _0x6e7b6b();
  }, [_0x6e7b6b]);
  _0x35d903.useEffect(() => {
    if (!_0x4708f3) {
      return;
    }
    const _0x307427 = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = _0x307427;
    };
  }, [_0x4708f3]);
  if (_0x4708f3) {
    return _0x27ac12.createPortal(_0x2d6898.jsxs("div", {
      className: "fixed inset-0 z-[60] flex items-center justify-center",
      onClick: _0x1c345a,
      children: [_0x2d6898.jsx("div", {
        className: "absolute inset-0 bg-black/70 backdrop-blur-sm"
      }), _0x2d6898.jsx(L, {
        pieces: _0x2d3ae4
      }), _0x2d6898.jsx("div", {
        className: "relative w-full max-w-sm mx-4",
        onClick: _0x33bf6d => _0x33bf6d.stopPropagation(),
        children: _0x2d6898.jsx("div", {
          className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40",
          children: _0x2d6898.jsxs("div", {
            className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden relative",
            children: [_0x2d6898.jsx("img", {
              src: "/jubbio-logo.svg",
              alt: "",
              "aria-hidden": "true",
              className: "pointer-events-none absolute -left-16 top-1/3 -translate-y-1/2 size-40 opacity-[0.12] rotate-[8deg]"
            }), _0x2d6898.jsxs("div", {
              className: "relative z-10 px-6 pt-8 pb-6 flex flex-col items-center text-center gap-5",
              children: [_0x2d6898.jsx("div", {
                className: "flex size-16 items-center justify-center rounded-2xl " + _0x4948a0.iconBg,
                children: _0x2d6898.jsx(_0x3a5105, {
                  className: "size-8 " + _0x4948a0.accent
                })
              }), _0x2d6898.jsxs("div", {
                className: "space-y-2",
                children: [_0x2d6898.jsx("h2", {
                  className: "text-xl font-bold text-text-primary cursor-pointer select-none active:scale-95 transition-transform",
                  onClick: _0x4d55ab,
                  title: "🎉",
                  children: _0x43a2b4("subscription.celebration.title")
                }), _0x2d6898.jsx("p", {
                  className: "text-sm text-text-tertiary leading-relaxed",
                  children: _0x43a2b4(_0x47f66d ? "subscription.celebration.giftMessage" : "subscription.celebration.message", {
                    plan: _0x23073c.name
                  })
                })]
              }), _0x2d6898.jsxs("button", {
                type: "button",
                onClick: _0x1c345a,
                className: "w-full h-10 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer " + _0x4948a0.buttonClass,
                children: [_0x2d6898.jsx(_0x1018af, {
                  className: "size-4"
                }), _0x43a2b4("subscription.celebration.continue")]
              })]
            })]
          })
        })
      }), _0x2d6898.jsx("style", {
        children: "\n        @keyframes confetti-burst {\n          0% { opacity: 1; transform: translate(0, 0) rotate(0deg); }\n          100% { opacity: 0; transform: translate(var(--tx), var(--ty)) rotate(var(--rot)); }\n        }\n        .animate-confetti-burst {\n          animation: confetti-burst var(--duration, 1.5s) ease-out forwards;\n        }\n      "
      })]
    }), document.body);
  } else {
    return null;
  }
}
function O({
  open: _0x21f710,
  pricing: _0x582c46,
  subscription: _0x2f99f2,
  success: _0x3e919d,
  busy: _0x34a7c6,
  error: _0x2e2dae,
  onClose: _0xd45d2a,
  onConfirm: _0x8dd364
}) {
  const {
    t: _0x54c814,
    i18n: _0x55065a
  } = _0x2cf29e();
  const _0x320d0f = _0x444bfd(_0x582c46);
  const _0x552e91 = _0x2f99f2?.planId !== "free" && _0x2f99f2?.currentPeriodEnd && Date.parse(_0x2f99f2.currentPeriodEnd) > Date.now() ? _0x2f99f2.currentPeriodEnd : null;
  const _0x530fcb = _0x2f99f2?.source === "iyzico" && _0x2f99f2.autoRenew !== false;
  const _0x49d74a = _0x3e919d ? _0x2f99f2?.autoRenew === true : !_0x552e91 && !(_0x582c46.isOnetime ?? _0x320d0f === 3);
  const _0x19491d = _0x3e919d ? _0x552e91 : _0x1b5fff(_0x552e91, _0x320d0f);
  const _0x584b6c = _0xe1c256 => new Intl.DateTimeFormat(_0x55065a.language, {
    dateStyle: "long"
  }).format(new Date(_0xe1c256));
  return _0x2d6898.jsx(_0x17acf2, {
    open: _0x21f710,
    onOpenChange: _0x5687a1 => {
      if (!_0x5687a1 && !_0x34a7c6) {
        _0xd45d2a();
      }
    },
    children: _0x2d6898.jsxs(_0x2d2ed7, {
      className: "w-[calc(100%_-_2rem)] sm:max-w-md grid-rows-[auto_minmax(0,1fr)_auto] gap-0 p-0",
      showCloseButton: !_0x34a7c6,
      children: [_0x2d6898.jsxs(_0x2dd2f1, {
        className: _0x3e919d ? "relative px-6 pt-5 pb-6 gap-2 text-center" : "px-5 pt-5 pb-4 gap-1.5 text-left",
        children: [_0x3e919d && _0x2d6898.jsx(_0x395770, {}), _0x3e919d && _0x2d6898.jsx("p", {
          className: "text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-primary-text",
          children: _0x54c814("subscription.prepaid.paymentComplete")
        }), _0x2d6898.jsxs("div", {
          className: _0x3e919d ? "space-y-2" : "flex items-start gap-3",
          children: [!_0x3e919d && _0x2d6898.jsx("div", {
            className: "size-10 rounded-lg bg-accent-primary/20 flex items-center justify-center shrink-0",
            children: _0x2d6898.jsx(_0x2aa5c3, {
              icon: "solar:calendar-add-bold-duotone",
              className: "size-5 text-accent-primary"
            })
          }), _0x2d6898.jsxs("div", {
            className: _0x3e919d ? "space-y-2" : "flex-1 min-w-0 pr-4",
            children: [_0x2d6898.jsx(_0x43ea8c, {
              className: _0x3e919d ? "text-2xl font-semibold tracking-tight" : "text-base",
              children: _0x54c814("subscription.prepaid." + (_0x3e919d ? "successTitle" : _0x552e91 ? "extendTitle" : "startTitle"))
            }), _0x2d6898.jsx(_0x26ca49, {
              className: _0x3e919d ? "mx-auto max-w-72 text-[13px] leading-relaxed" : "mt-0.5",
              children: _0x54c814("subscription.prepaid." + (_0x3e919d ? "successDescription" : _0x49d74a ? "recurringDescription" : "description"), {
                count: _0x320d0f
              })
            })]
          })]
        })]
      }), _0x2d6898.jsxs("div", {
        className: "overflow-y-auto scrollbar-thin px-5 pb-5 space-y-4",
        children: [_0x2d6898.jsxs("dl", {
          className: "rounded-lg border divide-y text-[13px] " + (_0x3e919d ? "nexus-success-details border-accent-primary/15 bg-accent-primary/[0.03] divide-accent-primary/10" : "border-border-subtle bg-surface-base/50 divide-border-subtle"),
          children: [!_0x3e919d && _0x552e91 && _0x2d6898.jsxs("div", {
            className: "flex items-center justify-between gap-4 px-3.5 py-3",
            children: [_0x2d6898.jsx("dt", {
              className: "text-text-tertiary",
              children: _0x54c814("subscription.prepaid.currentEnd")
            }), _0x2d6898.jsx("dd", {
              className: "text-text-secondary text-right",
              children: _0x584b6c(_0x552e91)
            })]
          }), _0x2d6898.jsxs("div", {
            className: "flex items-center justify-between gap-4 px-3.5 py-3",
            children: [_0x2d6898.jsx("dt", {
              className: "text-text-tertiary",
              children: _0x54c814(_0x3e919d ? "subscription.prepaid.addedTimeSuccess" : "subscription.prepaid.addedTime")
            }), _0x2d6898.jsxs("dd", {
              className: "font-medium text-text-primary",
              children: ["+", _0x54c814("subscription.packages.months", {
                count: _0x320d0f
              })]
            })]
          }), _0x19491d && _0x2d6898.jsxs("div", {
            className: "flex items-center justify-between gap-4 px-3.5 py-3 bg-accent-primary/5",
            children: [_0x2d6898.jsx("dt", {
              className: "text-text-secondary",
              children: _0x54c814("subscription.prepaid." + (_0x49d74a ? "nextRenewal" : _0x3e919d ? "end" : "newEnd"))
            }), _0x2d6898.jsx("dd", {
              className: "font-semibold text-accent-primary-text text-right",
              children: _0x584b6c(_0x19491d)
            })]
          }), !_0x3e919d && _0x2d6898.jsxs("div", {
            className: "flex items-center justify-between gap-4 px-3.5 py-3",
            children: [_0x2d6898.jsx("dt", {
              className: "text-text-tertiary",
              children: _0x54c814("subscription.prepaid." + (_0x49d74a ? "recurringPayment" : "oneTimePayment"))
            }), _0x2d6898.jsx("dd", {
              className: "font-semibold text-text-primary",
              children: _0x1528f4(_0x582c46.price, _0x582c46.currency, _0x582c46.formattedPrice)
            })]
          })]
        }), _0x2d6898.jsxs("div", {
          className: "flex items-start gap-2.5 text-[13px] text-text-tertiary leading-relaxed",
          children: [_0x2d6898.jsx(_0x2aa5c3, {
            icon: "solar:shield-check-bold-duotone",
            className: "mt-0.5 size-4 shrink-0 text-accent-primary"
          }), _0x2d6898.jsx("p", {
            children: _0x54c814("subscription.prepaid." + (_0x49d74a ? "renewalNotice" : "noRenewal"), {
              count: _0x320d0f
            })
          })]
        }), !_0x3e919d && _0x530fcb && _0x2d6898.jsx("div", {
          className: "rounded-lg bg-amber-500/10 p-3 text-[13px] text-text-secondary leading-relaxed",
          children: _0x54c814("subscription.prepaid.conversionNotice")
        }), !_0x3e919d && _0x2d6898.jsx("p", {
          className: "text-xs text-text-muted leading-relaxed",
          children: _0x54c814("subscription.prepaid." + (_0x49d74a ? "recurringPaymentNotice" : "paymentNotice"))
        }), _0x2e2dae && _0x2d6898.jsx("p", {
          role: "alert",
          className: "rounded-lg bg-red-500/10 p-3 text-[13px] text-red-400",
          children: _0x2e2dae
        })]
      }), _0x2d6898.jsx(_0x4b0179, {
        className: "px-5 py-4 border-t border-border-subtle bg-surface-base/50",
        children: _0x3e919d ? _0x2d6898.jsx(_0x5c0e39, {
          className: "w-full",
          onClick: _0xd45d2a,
          children: _0x54c814("subscription.prepaid.done")
        }) : _0x2d6898.jsx(S, {
          type: "button",
          className: "bg-white text-black hover:bg-white/90 [&_svg]:text-black/70",
          loading: _0x34a7c6,
          onClick: _0x8dd364,
          "aria-label": _0x54c814("subscription.prepaid." + (_0x34a7c6 ? "preparing" : "continue")),
          children: _0x54c814("subscription.prepaid.continue")
        })
      })]
    })
  });
}
const G = {
  emerald: {
    button: "bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 shadow-lg shadow-emerald-500/20 text-text-primary",
    accent: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
    border: "border-emerald-500/20",
    badgeBg: "bg-emerald-500/10 text-emerald-400",
    glow: ""
  },
  violet: {
    button: "bg-gradient-to-r from-accent-primary/80 to-accent-primary hover:from-accent-primary/90 hover:to-accent-primary shadow-lg shadow-accent-primary/15 text-black",
    accent: "text-accent-primary-text",
    iconBg: "bg-accent-subtle",
    border: "border-accent-border",
    badgeBg: "bg-accent-subtle text-accent-primary-text",
    glow: "shadow-[0_0_30px_-10px_rgba(173,255,8,0.1)]"
  },
  slate: {
    button: "bg-surface-inset hover:bg-interactive-active text-text-secondary",
    accent: "text-text-tertiary",
    iconBg: "bg-surface-overlay/80",
    border: "border-border-default",
    badgeBg: "bg-surface-inset/50 text-text-tertiary",
    glow: ""
  }
};
function H({
  recipientUserId: _0x3c0f79,
  recipientUsername: _0x2e7c7c,
  onSelectFriend: _0x395eae,
  onUsernameChange: _0x483736
}) {
  const {
    t: _0x2346d7
  } = _0x2cf29e();
  const _0x35db5b = _0x1637bd(_0x109d4c => _0x109d4c.friends);
  const [_0x3d851c, _0x3a9e54] = _0x35d903.useState("friends");
  const [_0x2d7c89, _0x122178] = _0x35d903.useState("");
  const _0x3832ac = _0x35d903.useMemo(() => _0x35db5b.filter(_0x957d38 => !_0x957d38.is_blocked_by_me && !_0x957d38.is_blocking_me), [_0x35db5b]);
  const _0x277516 = _0x35d903.useMemo(() => {
    if (!_0x2d7c89.trim()) {
      return _0x3832ac;
    }
    const _0xd49b21 = _0x2d7c89.toLowerCase();
    return _0x3832ac.filter(_0x2563fe => _0x2563fe.display_name.toLowerCase().includes(_0xd49b21) || _0x2563fe.username.toLowerCase().includes(_0xd49b21));
  }, [_0x3832ac, _0x2d7c89]);
  return _0x2d6898.jsxs("div", {
    className: "px-5 py-4",
    children: [_0x2d6898.jsxs("div", {
      className: "flex items-center gap-2.5 mb-4",
      children: [_0x2d6898.jsx("div", {
        className: "flex size-7 items-center justify-center rounded-lg bg-pink-500/15",
        children: _0x2d6898.jsx(_0x2aa5c3, {
          icon: "solar:gift-bold-duotone",
          className: "size-3.5 text-pink-400"
        })
      }), _0x2d6898.jsx("span", {
        className: "text-sm font-semibold text-text-primary",
        children: _0x2346d7("subscription.gift.recipientTitle")
      })]
    }), _0x2d6898.jsxs("div", {
      className: "flex mb-4 rounded-xl bg-white/[0.04] border border-white/[0.06] p-1",
      children: [_0x2d6898.jsxs("button", {
        type: "button",
        onClick: () => _0x3a9e54("friends"),
        className: "flex-1 flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-[13px] font-medium transition-all cursor-pointer " + (_0x3d851c === "friends" ? "bg-pink-500/15 text-pink-300 shadow-sm" : "text-text-muted hover:text-text-tertiary"),
        children: [_0x2d6898.jsx(_0x2aa5c3, {
          icon: "solar:users-group-rounded-bold-duotone",
          className: "size-3.5"
        }), _0x2346d7("subscription.gift.friendsTab")]
      }), _0x2d6898.jsxs("button", {
        type: "button",
        onClick: () => _0x3a9e54("username"),
        className: "flex-1 flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-[13px] font-medium transition-all cursor-pointer " + (_0x3d851c === "username" ? "bg-pink-500/15 text-pink-300 shadow-sm" : "text-text-muted hover:text-text-tertiary"),
        children: [_0x2d6898.jsx(_0x2aa5c3, {
          icon: "mdi:at",
          className: "size-3.5"
        }), _0x2346d7("subscription.gift.usernameTab")]
      })]
    }), _0x3d851c === "friends" ? _0x2d6898.jsxs("div", {
      className: "space-y-2.5",
      children: [_0x2d6898.jsxs("div", {
        className: "relative",
        children: [_0x2d6898.jsx(_0x2aa5c3, {
          icon: "solar:magnifer-bold-duotone",
          className: "absolute left-3.5 top-1/2 -translate-y-1/2 size-3.5 text-text-muted"
        }), _0x2d6898.jsx("input", {
          type: "text",
          value: _0x2d7c89,
          onChange: _0x2f719b => _0x122178(_0x2f719b.target.value),
          placeholder: _0x2346d7("subscription.gift.searchFriends"),
          className: "w-full rounded-xl bg-white/[0.04] border border-white/[0.08] pl-10 pr-3 py-2.5 text-sm text-text-secondary placeholder-text-muted outline-none focus:border-pink-500/30 focus:bg-white/[0.06] transition-all"
        })]
      }), _0x2d6898.jsx("div", {
        className: "max-h-44 overflow-y-auto space-y-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border-strong rounded-xl",
        children: _0x277516.length === 0 ? _0x2d6898.jsx("p", {
          className: "text-[13px] text-text-muted text-center py-6",
          children: _0x2346d7("subscription.gift.noFriendsFound")
        }) : _0x277516.map(_0x1aa727 => _0x2d6898.jsxs("button", {
          type: "button",
          onClick: () => _0x395eae(_0x1aa727.id, _0x1aa727.username),
          className: "w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all cursor-pointer " + (_0x3c0f79 === _0x1aa727.id ? "bg-pink-500/12 border border-pink-500/25" : "hover:bg-white/[0.04] border border-transparent"),
          children: [_0x1aa727.avatar_url ? _0x2d6898.jsx("img", {
            src: _0x1aa727.avatar_url,
            alt: "",
            className: "size-8 rounded-full object-cover"
          }) : _0x2d6898.jsx("div", {
            className: "size-8 rounded-full bg-white/[0.06] flex items-center justify-center",
            children: _0x2d6898.jsx(_0x2aa5c3, {
              icon: "solar:user-bold-duotone",
              className: "size-4 text-text-muted"
            })
          }), _0x2d6898.jsxs("div", {
            className: "flex-1 min-w-0",
            children: [_0x2d6898.jsx("p", {
              className: "text-[13px] font-medium text-text-primary truncate",
              children: _0x1aa727.display_name
            }), _0x2d6898.jsxs("p", {
              className: "text-[11px] text-text-muted truncate",
              children: ["@", _0x1aa727.username]
            })]
          }), _0x3c0f79 === _0x1aa727.id && _0x2d6898.jsx(_0x1018af, {
            className: "size-4 text-pink-400 shrink-0"
          })]
        }, _0x1aa727.id))
      })]
    }) : _0x2d6898.jsxs("div", {
      className: "relative",
      children: [_0x2d6898.jsx(_0x2aa5c3, {
        icon: "mdi:at",
        className: "absolute left-3.5 top-1/2 -translate-y-1/2 size-3.5 text-text-muted"
      }), _0x2d6898.jsx("input", {
        type: "text",
        value: _0x2e7c7c,
        onChange: _0x5bec9d => _0x483736(_0x5bec9d.target.value),
        placeholder: _0x2346d7("subscription.giftRecipientPlaceholder"),
        className: "w-full rounded-xl bg-white/[0.04] border border-white/[0.08] pl-10 pr-3 py-3 text-sm text-text-secondary placeholder-text-muted outline-none focus:border-pink-500/30 focus:bg-white/[0.06] transition-all"
      })]
    }), _0x2d6898.jsx("p", {
      className: "text-[11px] text-text-muted mt-3",
      children: _0x2346d7("subscription.giftNote")
    })]
  });
}
function q({
  plan: _0x59230b,
  colors: _0x91961e
}) {
  const {
    t: _0x316646
  } = _0x2cf29e();
  const [_0x5274e4, _0x18efbe] = _0x35d903.useState(false);
  const _0x5ee75e = _0x5274e4 ? _0x59230b.features : _0x59230b.features.slice(0, 4);
  const _0x2d44fa = _0x59230b.features.length - 4;
  return _0x2d6898.jsxs("div", {
    className: "flex flex-wrap gap-2",
    children: [_0x5ee75e.map(_0x26b5fe => _0x2d6898.jsxs("span", {
      className: "inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] px-3 py-1.5 text-[12px] text-text-secondary",
      children: [_0x2d6898.jsx(_0x1018af, {
        className: "size-3 shrink-0 " + _0x91961e.accent
      }), _0x316646(_0x26b5fe.label), (typeof _0x26b5fe.value == "string" || typeof _0x26b5fe.value == "number") && _0x2d6898.jsx("span", {
        className: "font-medium text-text-primary ml-0.5",
        children: _0x26b5fe.value
      })]
    }, _0x26b5fe.key)), _0x2d44fa > 0 && !_0x5274e4 && _0x2d6898.jsxs("button", {
      type: "button",
      onClick: () => _0x18efbe(true),
      className: "inline-flex items-center rounded-full bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 text-[12px] text-text-muted hover:text-text-secondary hover:bg-white/[0.06] transition-colors cursor-pointer",
      children: ["+", _0x2d44fa, " ", _0x316646("subscription.checkout.moreFeatures")]
    })]
  });
}
function V({
  plan: _0x46d955,
  pricing: _0x29e046,
  isGift: _0x5d3da4,
  onBack: _0x341b44,
  onComplete: _0x1d5366
}) {
  const {
    t: _0x45a5c1
  } = _0x2cf29e();
  const _0x411a6c = G[_0x46d955.color] ?? G.slate;
  const [_0x4ee440, _0x1dfbdb] = _0x35d903.useState(false);
  const [_0x2e48e4, _0x3c541e] = _0x35d903.useState(false);
  const [_0x3f4045, _0xe8b581] = _0x35d903.useState(false);
  const [_0xbdaf5a, _0x5a2476] = _0x35d903.useState(null);
  const [_0x348975, _0x73aee0] = _0x35d903.useState(null);
  const [_0x5d5aab, _0x26bba2] = _0x35d903.useState("");
  const [_0x21666c, _0x5d0e3b] = _0x35d903.useState(null);
  const _0x197985 = _0x35d903.useRef(null);
  const [_0x154aa6, _0x3c50ca] = _0x35d903.useState();
  const {
    subscribe: _0x20606c,
    fetchSubscriptionStatus: _0x987d7c,
    currentSubscription: _0x3bc57c
  } = _0x56d3d8();
  const _0x4b5e31 = _0x444bfd(_0x29e046);
  const _0xcf2b4f = _0x45a5c1("subscription.packages.period", {
    count: _0x4b5e31
  });
  const _0x3fb027 = _0x4b5e31 > 1 ? _0x1528f4(_0x29e046.monthlyPrice ?? Math.round(_0x29e046.price / _0x4b5e31), _0x29e046.currency) : null;
  _0x35d903.useEffect(() => {
    const _0x28353c = async _0x52c795 => {
      if (_0x184fdf(_0x52c795, _0x197985.current, "subscription")) {
        if (_0x52c795.data?.type === "iyzico-callback" && _0x52c795.data?.status === "success") {
          _0x5d0e3b(null);
          _0x3c50ca(undefined);
          _0xe8b581(false);
          await _0x987d7c().catch(() => {});
          _0x1dfbdb(true);
        } else if (_0x52c795.data?.type === "iyzico-callback" && _0x52c795.data?.status === "failure") {
          _0x5d0e3b(null);
          _0x3c50ca(undefined);
          _0xe8b581(false);
          _0x5a2476(_0x45a5c1("subscription.checkout.paymentFailed"));
        }
      }
    };
    window.addEventListener("message", _0x28353c);
    return () => window.removeEventListener("message", _0x28353c);
  }, [_0x987d7c, _0x45a5c1]);
  const _0x3c80c6 = _0x35d903.useCallback(async () => {
    if (!function (_0x5c50b0) {
      if (!_0x2f9246()) {
        return false;
      }
      const _0x4a783a = _0x83d147.getState().user;
      const _0x396ef1 = new URL(U + "/app/checkout");
      _0x396ef1.searchParams.set("plan", String(_0x5c50b0.planId));
      _0x396ef1.searchParams.set("interval", _0x5c50b0.interval);
      if (_0x4a783a?.id) {
        _0x396ef1.searchParams.set("uid", String(_0x4a783a.id));
      }
      if (_0x4a783a?.username) {
        _0x396ef1.searchParams.set("uname", _0x4a783a.username);
      }
      if (_0x5c50b0.isGift) {
        _0x396ef1.searchParams.set("gift", "1");
        if (_0x5c50b0.recipientUserId) {
          _0x396ef1.searchParams.set("recipientId", String(_0x5c50b0.recipientUserId));
        }
        if (_0x5c50b0.recipientUsername) {
          _0x396ef1.searchParams.set("recipientUsername", _0x5c50b0.recipientUsername);
        }
      }
      window.electron?.openExternal?.(_0x396ef1.toString());
      return true;
    }({
      planId: _0x29e046.backendId,
      interval: _0x29e046.interval,
      isGift: _0x5d3da4,
      recipientUserId: _0x348975 ?? undefined,
      recipientUsername: _0x5d5aab.trim() || undefined
    })) {
      _0xe8b581(true);
      _0x5a2476(null);
      try {
        if (_0x5d3da4) {
          if (!_0x348975 && !_0x5d5aab.trim()) {
            _0x5a2476(_0x45a5c1("subscription.gift.recipientRequired"));
            _0xe8b581(false);
            return;
          }
          const _0x63e97 = await _0x24cbdb({
            planId: _0x29e046.backendId,
            ...(_0x348975 ? {
              recipientUserId: _0x348975
            } : {
              recipientUsername: _0x5d5aab.trim()
            })
          });
          if (_0x63e97.checkoutFormContent || _0x63e97.paymentPageUrl) {
            _0x3c541e(false);
            _0x5d0e3b(_0x63e97.checkoutFormContent ?? null);
            _0x3c50ca(_0x63e97.paymentPageUrl);
          } else {
            _0x5a2476(_0x45a5c1("subscription.checkout.paymentFailed"));
            _0xe8b581(false);
          }
        } else {
          const _0x300a26 = await _0x20606c(_0x29e046.backendId, true);
          if (_0x300a26.checkoutFormContent || _0x300a26.paymentPageUrl) {
            _0x3c541e(false);
            _0x5d0e3b(_0x300a26.checkoutFormContent ?? null);
            _0x3c50ca(_0x300a26.paymentPageUrl);
          } else {
            _0x5a2476(_0x45a5c1("subscription.checkout.paymentFailed"));
            _0xe8b581(false);
          }
        }
      } catch (_0x43e506) {
        const _0x22a2e7 = _0x43e506?.response?.data?.code;
        const _0x165a31 = {
          ALREADY_SUBSCRIBED: _0x45a5c1("subscription.checkout.alreadySubscribed"),
          PREPAID_CONVERSION_REQUIRED: _0x45a5c1("subscription.prepaid.conversionError"),
          PREPAID_CONVERSION_FAILED: _0x45a5c1("subscription.prepaid.conversionError"),
          MOBILE_SUBSCRIPTION_STORE_MANAGED: _0x45a5c1("subscription.prepaid.mobileError"),
          PLAN_NOT_FOUND: _0x45a5c1("subscription.checkout.planNotFound"),
          RECIPIENT_NOT_FOUND: _0x45a5c1("subscription.gift.recipientNotFound"),
          RECIPIENT_ALREADY_SUBSCRIBED: _0x45a5c1("subscription.gift.recipientAlreadySubscribed"),
          CANNOT_GIFT_SELF: _0x45a5c1("subscription.gift.cannotGiftSelf"),
          FREE_PLAN_CANNOT_GIFT: _0x45a5c1("subscription.gift.freePlanCannotGift")
        };
        _0x5a2476(_0x165a31[_0x22a2e7] ?? _0x45a5c1("subscription.checkout.paymentFailed"));
        _0xe8b581(false);
      } finally {
        if (!_0x5d3da4) {
          await _0x987d7c();
        }
      }
    }
  }, [_0x29e046.backendId, _0x29e046.interval, _0x20606c, _0x987d7c, _0x5d3da4, _0x348975, _0x5d5aab, _0x45a5c1]);
  const _0x33ec0e = _0x35d903.useCallback(() => {
    _0x1dfbdb(false);
    _0x1d5366();
  }, [_0x1d5366]);
  if (_0x21666c || _0x154aa6) {
    return _0x2d6898.jsxs("div", {
      className: "mx-auto max-w-lg space-y-5",
      children: [_0x2d6898.jsxs("h2", {
        className: "flex items-center gap-3 text-xl font-semibold text-text-primary",
        children: [_0x2d6898.jsx("button", {
          type: "button",
          onClick: () => {
            _0x5d0e3b(null);
            _0x3c50ca(undefined);
            _0xe8b581(false);
          },
          className: "flex size-8 items-center justify-center rounded-lg bg-surface-overlay/50 text-text-tertiary hover:bg-surface-overlay/80 hover:text-text-secondary transition-colors cursor-pointer",
          children: _0x2d6898.jsx(_0x3d16a2, {
            className: "size-4.5"
          })
        }), _0x45a5c1("subscription.checkout.payment")]
      }), _0x2d6898.jsx(_0x1b4277, {
        frameRef: _0x197985,
        checkoutFormContent: _0x21666c ?? "",
        paymentPageUrl: _0x154aa6,
        className: "w-full min-h-[500px] rounded-2xl border border-white/[0.08] bg-white",
        title: "iyzico checkout"
      }), _0x2d6898.jsx("p", {
        className: "text-center text-[11px] text-text-muted",
        children: _0x45a5c1("subscription.checkout.securePaymentNote")
      })]
    });
  } else {
    return _0x2d6898.jsxs(_0x2d6898.Fragment, {
      children: [!_0x5d3da4 && _0x46d955.id !== "nexus-test" && _0x2d6898.jsx(O, {
        open: _0x2e48e4 || _0x4ee440,
        pricing: _0x29e046,
        subscription: _0x3bc57c,
        success: _0x4ee440,
        busy: _0x3f4045,
        error: _0xbdaf5a,
        onClose: () => {
          if (_0x4ee440) {
            _0x33ec0e();
          } else {
            _0x3c541e(false);
          }
        },
        onConfirm: () => {
          _0x3c80c6();
        }
      }), _0x2d6898.jsx($, {
        open: _0x4ee440 && (Boolean(_0x5d3da4) || _0x46d955.id === "nexus-test"),
        plan: _0x46d955,
        isGift: _0x5d3da4,
        onClose: _0x33ec0e
      }), _0x2d6898.jsxs("div", {
        className: "mx-auto max-w-lg space-y-5",
        children: [_0x2d6898.jsxs("h2", {
          className: "flex items-center gap-3 text-xl font-semibold text-text-primary",
          children: [_0x2d6898.jsx("button", {
            type: "button",
            onClick: _0x341b44,
            className: "flex size-8 items-center justify-center rounded-lg bg-surface-overlay/50 text-text-tertiary hover:bg-surface-overlay/80 hover:text-text-secondary transition-colors cursor-pointer",
            children: _0x2d6898.jsx(_0x3d16a2, {
              className: "size-4.5"
            })
          }), _0x45a5c1(_0x5d3da4 ? "subscription.giftCheckoutTitle" : "subscription.checkout.title")]
        }), _0x2d6898.jsxs("div", {
          className: "rounded-2xl border border-white/[0.08] overflow-hidden",
          children: [_0x2d6898.jsx("div", {
            className: "relative p-4 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-transparent",
            children: _0x2d6898.jsxs("div", {
              className: "flex items-center gap-3.5",
              children: [_0x2d6898.jsx("img", {
                src: "https://cdn.jubbio.com/badges/icons/1775103030899_nexus.png",
                alt: _0x46d955.name,
                className: "size-10"
              }), _0x2d6898.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [_0x2d6898.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [_0x2d6898.jsx("p", {
                    className: "text-lg font-bold text-text-primary",
                    children: _0x46d955.name
                  }), _0x29e046.discountPercentage && _0x2d6898.jsxs("span", {
                    className: "rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider " + _0x411a6c.badgeBg,
                    children: ["%", _0x29e046.discountPercentage, " ", _0x45a5c1("subscription.checkout.off")]
                  })]
                }), _0x2d6898.jsx("p", {
                  className: "text-xs text-text-muted mt-0.5",
                  children: _0x45a5c1(_0x46d955.description)
                })]
              })]
            })
          }), _0x2d6898.jsxs("div", {
            className: "px-5 py-4 space-y-3 border-t border-white/[0.06]",
            children: [_0x2d6898.jsxs("div", {
              className: "flex items-center justify-between",
              children: [_0x2d6898.jsx("span", {
                className: "text-sm text-text-tertiary",
                children: _0x45a5c1("subscription.checkout.plan")
              }), _0x2d6898.jsxs("span", {
                className: "text-sm font-medium text-text-secondary",
                children: [_0x46d955.name, " (", _0x45a5c1(_0x4b5e31 === 12 ? "subscription.packages.year" : "subscription.packages.months", {
                  count: _0x4b5e31
                }), ")"]
              })]
            }), _0x2d6898.jsxs("div", {
              className: "flex items-center justify-between",
              children: [_0x2d6898.jsx("span", {
                className: "text-sm text-text-tertiary",
                children: _0x45a5c1("subscription.checkout.price")
              }), _0x2d6898.jsxs("span", {
                className: "text-sm font-semibold text-text-primary",
                children: [_0x1528f4(_0x29e046.price, _0x29e046.currency, _0x29e046.formattedPrice), " ", _0x2d6898.jsx("span", {
                  className: "text-xs font-normal text-text-muted",
                  children: _0xcf2b4f
                })]
              })]
            }), _0x3fb027 && _0x2d6898.jsxs("div", {
              className: "flex items-center justify-between",
              children: [_0x2d6898.jsx("span", {
                className: "text-sm text-text-tertiary",
                children: _0x45a5c1("subscription.checkout.monthlyEquivalent")
              }), _0x2d6898.jsxs("span", {
                className: "text-sm text-text-tertiary",
                children: ["~", _0x3fb027, _0x45a5c1("subscription.perMonth")]
              })]
            })]
          }), _0x2d6898.jsxs("div", {
            className: "flex items-baseline justify-between px-5 py-4 border-t border-white/[0.06] bg-white/[0.02]",
            children: [_0x2d6898.jsx("span", {
              className: "text-sm font-semibold text-text-secondary",
              children: _0x45a5c1("subscription.checkout.total")
            }), _0x2d6898.jsx("span", {
              className: "text-2xl font-black tracking-tight " + _0x411a6c.accent,
              children: _0x1528f4(_0x29e046.price, _0x29e046.currency, _0x29e046.formattedPrice)
            })]
          })]
        }), _0x2d6898.jsxs("div", {
          className: "rounded-2xl border border-white/[0.08] overflow-hidden",
          children: [_0x2d6898.jsxs("div", {
            className: "px-5 pt-4 pb-4",
            children: [_0x2d6898.jsx("p", {
              className: "text-sm font-semibold text-text-muted mb-3",
              children: _0x45a5c1("subscription.checkout.includes")
            }), _0x2d6898.jsx(q, {
              plan: _0x46d955,
              colors: _0x411a6c
            })]
          }), _0x5d3da4 && _0x2d6898.jsx("div", {
            className: "border-t border-white/[0.06]",
            children: _0x2d6898.jsx(H, {
              recipientUserId: _0x348975,
              recipientUsername: _0x5d5aab,
              onSelectFriend: (_0x1ad9ef, _0x3308ce) => {
                _0x73aee0(_0x1ad9ef);
                _0x26bba2(_0x3308ce);
              },
              onUsernameChange: _0x383721 => {
                _0x26bba2(_0x383721);
                _0x73aee0(null);
              }
            })
          })]
        }), _0x2d6898.jsxs("div", {
          className: "flex items-center justify-center gap-4 py-1",
          children: [_0x2d6898.jsxs("div", {
            className: "flex items-center gap-1.5 text-text-muted",
            children: [_0x2d6898.jsx(_0x2aa5c3, {
              icon: "solar:shield-check-bold-duotone",
              className: "size-3.5"
            }), _0x2d6898.jsx("span", {
              className: "text-xs",
              children: _0x45a5c1("subscription.checkout.securePayment")
            })]
          }), _0x2d6898.jsxs("div", {
            className: "flex items-center gap-1.5 text-text-muted",
            children: [_0x2d6898.jsx(_0x2aa5c3, {
              icon: "solar:lock-bold-duotone",
              className: "size-3.5"
            }), _0x2d6898.jsx("span", {
              className: "text-xs",
              children: _0x45a5c1("subscription.checkout.encrypted")
            })]
          })]
        }), _0xbdaf5a && _0x2d6898.jsx("div", {
          className: "rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3",
          children: _0x2d6898.jsx("p", {
            className: "text-sm text-red-400",
            children: _0xbdaf5a
          })
        }), _0x2d6898.jsx("button", {
          type: "button",
          onClick: () => {
            if (_0x5d3da4 || _0x46d955.id === "nexus-test") {
              _0x3c80c6();
            } else {
              _0x5a2476(null);
              _0x3c541e(true);
            }
          },
          disabled: _0x3f4045,
          className: "w-full rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 " + _0x411a6c.button,
          children: _0x3f4045 ? _0x2d6898.jsxs(_0x2d6898.Fragment, {
            children: [_0x2d6898.jsx(_0x271083, {
              className: "size-4 animate-spin"
            }), _0x45a5c1("subscription.checkout.processing")]
          }) : _0x45a5c1(_0x5d3da4 ? "subscription.giftNow" : "subscription.checkout.buy")
        }), _0x2d6898.jsxs("p", {
          className: "text-center text-[11px] text-text-muted leading-relaxed",
          children: [_0x45a5c1("subscription.checkout.termsPrefix"), " ", _0x2d6898.jsx("a", {
            href: "/terms-of-service",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-text-tertiary underline underline-offset-2 hover:text-text-secondary",
            children: _0x45a5c1("subscription.checkout.termsLink")
          }), " ", _0x45a5c1("subscription.checkout.termsAnd"), " ", _0x2d6898.jsx("a", {
            href: "/privacy-policy",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-text-tertiary underline underline-offset-2 hover:text-text-secondary",
            children: _0x45a5c1("subscription.checkout.privacyLink")
          }), _0x45a5c1("subscription.checkout.termsSuffix")]
        })]
      })]
    });
  }
}
export { V as C, E as U, F as o };