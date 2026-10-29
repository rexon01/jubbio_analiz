import { b as _0xc45ea1, r as _0x243acc, aQ as _0x20a747, aR as _0x1b57eb, aS as _0x90173c, j as _0x3ce73d, aT as _0x1f5779, s as _0x5adf96, an as _0x56fcf3, I as _0x3c08fc, aU as _0x20fa1e } from "./index-cQfEKR1W.js";
import { D as _0x4667b8, a as _0x491328, c as _0x5b82a6 } from "./dialog-BMMpM7PR.js";
import { o as _0x1c6d29 } from "./CheckoutPlaceholder-Dr0TfmeQ.js";
import { I as _0x211c93 } from "./IyzicoCheckoutFrame-f1WDW5o8.js";
import { A as _0xd634c5 } from "./arrow-left-B3FhifN2.js";
import { L as _0x354fd2 } from "./loader-circle-CTtxa1g9.js";
import "./index-yuEHo9bu.js";
import "./subscription-Cl5JAGbQ.js";
import "./zap-B3VH4qT9.js";
import "./submit-button-B2LF_DTf.js";
import "./NexusSuccessArtwork-YGvslhff.js";
const g = {
  small: ({
    className: _0x144b78
  }) => _0x3ce73d.jsx(_0x3c08fc, {
    icon: "solar:bottle-bold-duotone",
    className: _0x144b78
  }),
  medium: ({
    className: _0x3e57dc
  }) => _0x3ce73d.jsx(_0x3c08fc, {
    icon: "solar:gas-station-bold-duotone",
    className: _0x3e57dc
  }),
  large: ({
    className: _0x21d311
  }) => _0x3ce73d.jsx(_0x3c08fc, {
    icon: "solar:rocket-2-bold-duotone",
    className: _0x21d311
  })
};
const v = {
  small: "emerald",
  medium: "amber",
  large: "violet"
};
function j({
  open: _0x8da347,
  onOpenChange: _0x1ce824,
  initialPack: _0x5e0700 = "medium",
  initialPurchaseType: _0x5add26 = "one-time"
}) {
  const {
    t: _0x357275,
    i18n: _0x15e7f2
  } = _0xc45ea1();
  const [_0x5ba0fd, _0x147346] = _0x243acc.useState(_0x5e0700);
  const _0x3cc671 = _0x243acc.useRef(null);
  const _0x455e87 = _0x243acc.useRef(0);
  const [_0x29a71a, _0xefb99d] = _0x243acc.useState([]);
  const [_0x271117, _0x4e3c38] = _0x243acc.useState(true);
  const [_0x3dd69e, _0x1e73f5] = _0x243acc.useState(false);
  const [_0x5b051f, _0x3edda3] = _0x243acc.useState(0);
  const [_0x8e2b7b, _0x18325b] = _0x243acc.useState(_0x5add26);
  const [_0x3acf13, _0x50c470] = _0x243acc.useState("select");
  const [_0x2c73ae, _0x22950a] = _0x243acc.useState("");
  const [_0x1ee974, _0xa6fc4c] = _0x243acc.useState();
  const [_0x47f418, _0xf31eec] = _0x243acc.useState(false);
  const [_0xa6169c, _0x3b0f02] = _0x243acc.useState(null);
  _0x243acc.useEffect(() => {
    if (!_0x8da347) {
      _0x455e87.current++;
      _0x50c470("select");
      _0x22950a("");
      _0xa6fc4c(undefined);
      _0xf31eec(false);
      _0x3b0f02(null);
      _0xefb99d([]);
      _0x4e3c38(true);
    }
  }, [_0x8da347]);
  const _0x4c31a1 = _0x243acc.useMemo(() => function (_0x49af7, _0x205e6e, _0x4428a9) {
    const _0x4756cb = new Map();
    const _0x541045 = _0x205e6e === "subscription" ? "monthly" : "onetime";
    for (const _0x2ff438 of _0x49af7) {
      const _0x3fe92e = /^fuel-(small|medium|large)-(monthly|onetime)$/.exec(_0x2ff438.slug);
      if (!_0x2ff438.is_active || !_0x3fe92e || _0x3fe92e[2] !== _0x541045) {
        continue;
      }
      if (_0x205e6e === "subscription" ? _0x2ff438.interval !== "MONTHLY" || _0x2ff438.interval_count !== 1 : _0x2ff438.interval != null) {
        continue;
      }
      const _0x345481 = _0x2ff438.features?.type;
      if (_0x345481 != null && _0x345481 !== (_0x205e6e === "subscription" ? "fuel" : "fuel-onetime")) {
        continue;
      }
      const _0xed8c10 = Number(_0x2ff438.features?.fuelAmount ?? _0x2ff438.features?.fuel_amount);
      const _0x47e993 = Number(_0x2ff438.price);
      if (!Number.isInteger(_0xed8c10) || _0xed8c10 <= 0 || !Number.isFinite(_0x47e993) || _0x47e993 <= 0 || !/^[A-Z]{3}$/.test(_0x2ff438.currency)) {
        continue;
      }
      const _0x36defb = _0x3fe92e[1];
      if (!_0x4756cb.has(_0x36defb)) {
        _0x4756cb.set(_0x36defb, {
          id: _0x36defb,
          fuel: _0xed8c10,
          price: _0x2ff438.formattedPrice || new Intl.NumberFormat(_0x4428a9, {
            style: "currency",
            currency: _0x2ff438.currency
          }).format(_0x47e993),
          available: _0x205e6e === "one-time" || Boolean(_0x2ff438.iyzico_pricing_plan_ref)
        });
      }
    }
    return ["small", "medium", "large"].flatMap(_0x2fd57b => _0x4756cb.has(_0x2fd57b) ? [_0x4756cb.get(_0x2fd57b)] : []);
  }(_0x29a71a, _0x8e2b7b, _0x15e7f2.language).map(_0x4cf183 => ({
    ..._0x4cf183,
    icon: g[_0x4cf183.id],
    color: v[_0x4cf183.id]
  })), [_0x29a71a, _0x8e2b7b, _0x15e7f2.language]);
  const _0xb80bf3 = _0x4c31a1.find(_0x6af894 => _0x6af894.id === _0x5ba0fd) || _0x4c31a1[0];
  const _0x30c1fc = _0xb80bf3?.icon || g[_0x5ba0fd];
  _0x243acc.useEffect(() => {
    if (_0xb80bf3 && _0xb80bf3.id !== _0x5ba0fd) {
      _0x147346(_0xb80bf3.id);
    }
  }, [_0xb80bf3, _0x5ba0fd]);
  _0x243acc.useEffect(() => {
    if (!_0x8da347) {
      return;
    }
    let _0x35af71 = false;
    _0x4e3c38(true);
    _0x1e73f5(false);
    _0xefb99d([]);
    _0x20a747("fuel").then(_0x3fc836 => {
      if (!Array.isArray(_0x3fc836)) {
        throw new Error("Invalid fuel catalog");
      }
      if (!_0x35af71) {
        _0xefb99d(_0x3fc836);
      }
    }).catch(() => {
      if (!_0x35af71) {
        _0x1e73f5(true);
      }
    }).finally(() => {
      if (!_0x35af71) {
        _0x4e3c38(false);
      }
    });
    return () => {
      _0x35af71 = true;
    };
  }, [_0x8da347, _0x5b051f]);
  _0x243acc.useEffect(() => {
    if (_0x3acf13 !== "checkout") {
      return;
    }
    const _0x360283 = _0x2a9f0e => {
      const _0x59225e = new Set([window.location.origin, "https://gateway.jubbio.com", "https://api.jubbio.com"]);
      try {
        _0x59225e.add(new URL("https://gateway.jubbio.com", window.location.origin).origin);
      } catch {}
      if (_0x2a9f0e.source === _0x3cc671.current?.contentWindow && _0x59225e.has(_0x2a9f0e.origin) && _0x2a9f0e.data?.kind === "fuel" && (_0x2a9f0e.data?.type === "iyzico-callback" || _0x2a9f0e.data?.iyzicoCallback)) {
        if (_0x2a9f0e.data.pending || _0x2a9f0e.data.status === "pending") {
          return;
        }
        if (_0x2a9f0e.data.success || _0x2a9f0e.data.status === "success") {
          _0x20fa1e.getState().fetchUserFuel();
          _0x1ce824(false);
        } else {
          _0x3b0f02(_0x357275("fuel.packs.paymentFailed"));
          _0x50c470("error");
        }
      }
    };
    window.addEventListener("message", _0x360283);
    return () => window.removeEventListener("message", _0x360283);
  }, [_0x3acf13, _0x1ce824, _0x357275]);
  const _0x3efb0d = _0x243acc.useCallback(async () => {
    if (_0x47f418 || _0x271117 || !_0xb80bf3?.available) {
      return;
    }
    if (_0x1c6d29({
      packSize: _0xb80bf3.id,
      billingType: _0x8e2b7b === "subscription" ? "monthly" : "one-time"
    })) {
      _0x1ce824(false);
      return;
    }
    const _0x5de71c = ++_0x455e87.current;
    _0xf31eec(true);
    _0x3b0f02(null);
    try {
      const _0x4dcf00 = _0x8e2b7b === "one-time" ? await _0x1b57eb(_0xb80bf3.id) : await _0x90173c(_0xb80bf3.id);
      if (_0x5de71c !== _0x455e87.current) {
        return;
      }
      if (!_0x4dcf00.checkoutFormContent && !_0x4dcf00.paymentPageUrl) {
        throw new Error("No checkout form received");
      }
      _0x22950a(_0x4dcf00.checkoutFormContent ?? "");
      _0xa6fc4c(_0x4dcf00.paymentPageUrl);
      _0x50c470("checkout");
    } catch (_0x116b38) {
      if (_0x5de71c !== _0x455e87.current) {
        return;
      }
      _0x3b0f02(_0x116b38 && typeof _0x116b38 == "object" && "message" in _0x116b38 && typeof _0x116b38.message == "string" ? _0x116b38.message : _0x357275("fuel.packs.checkoutError"));
      _0x50c470("error");
    } finally {
      if (_0x5de71c === _0x455e87.current) {
        _0xf31eec(false);
      }
    }
  }, [_0xb80bf3, _0x271117, _0x47f418, _0x8e2b7b, _0x357275, _0x1ce824]);
  if (_0x3acf13 === "checkout") {
    return _0x3ce73d.jsx(_0x4667b8, {
      open: _0x8da347,
      onOpenChange: _0x1ce824,
      children: _0x3ce73d.jsxs(_0x491328, {
        className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-[480px] overflow-hidden",
        showCloseButton: false,
        "aria-describedby": undefined,
        children: [_0x3ce73d.jsx(_0x5b82a6, {
          className: "sr-only",
          children: _0x357275("fuel.packs.checkout")
        }), _0x3ce73d.jsxs("div", {
          className: "rounded-2xl overflow-hidden bg-surface-base border border-border-default shadow-2xl",
          children: [_0x3ce73d.jsxs("div", {
            className: "flex items-center gap-3 px-5 py-4 border-b border-border-subtle",
            children: [_0x3ce73d.jsx("button", {
              onClick: () => _0x50c470("select"),
              className: "p-1.5 rounded-lg hover:bg-surface-overlay/40 transition-colors",
              children: _0x3ce73d.jsx(_0xd634c5, {
                className: "size-5 text-text-muted"
              })
            }), _0x3ce73d.jsxs("div", {
              children: [_0x3ce73d.jsx("h3", {
                className: "font-semibold text-text-primary",
                children: _0x357275("fuel.packs.checkout")
              }), _0x3ce73d.jsxs("p", {
                className: "text-xs text-text-muted",
                children: [_0xb80bf3?.fuel, " ", _0x357275("fuel.fuelUnit"), " • ", _0xb80bf3?.price, _0x8e2b7b === "subscription" && " / " + _0x357275("fuel.packs.monthly")]
              })]
            })]
          }), _0x3ce73d.jsx(_0x211c93, {
            frameRef: _0x3cc671,
            checkoutFormContent: _0x2c73ae,
            paymentPageUrl: _0x1ee974,
            title: _0x357275("fuel.packs.checkout"),
            className: "w-full min-h-[500px] border-0 bg-white"
          })]
        })]
      })
    });
  } else if (_0x3acf13 === "error") {
    return _0x3ce73d.jsx(_0x4667b8, {
      open: _0x8da347,
      onOpenChange: _0x1ce824,
      children: _0x3ce73d.jsxs(_0x491328, {
        className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-[420px] overflow-hidden",
        showCloseButton: false,
        "aria-describedby": undefined,
        children: [_0x3ce73d.jsx(_0x5b82a6, {
          className: "sr-only",
          children: _0x357275("fuel.packs.error")
        }), _0x3ce73d.jsx("div", {
          className: "rounded-2xl overflow-hidden bg-surface-base border border-border-default shadow-2xl p-6",
          children: _0x3ce73d.jsxs("div", {
            className: "flex flex-col items-center text-center",
            children: [_0x3ce73d.jsx("div", {
              className: "size-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4",
              children: _0x3ce73d.jsx(_0x1f5779, {
                className: "size-8 text-red-400"
              })
            }), _0x3ce73d.jsx("h3", {
              className: "text-lg font-bold text-text-primary mb-2",
              children: _0x357275("fuel.packs.errorTitle")
            }), _0x3ce73d.jsx("p", {
              className: "text-sm text-text-muted mb-6",
              children: _0xa6169c || _0x357275("fuel.packs.checkoutError")
            }), _0x3ce73d.jsxs("div", {
              className: "flex gap-3 w-full",
              children: [_0x3ce73d.jsx("button", {
                onClick: () => _0x50c470("select"),
                className: "flex-1 h-11 rounded-xl font-medium bg-surface-overlay/40 hover:bg-surface-overlay/60 text-text-secondary border border-border-default transition-colors",
                children: _0x357275("common.back")
              }), _0x3ce73d.jsx("button", {
                onClick: _0x3efb0d,
                className: "flex-1 h-11 rounded-xl font-medium bg-brand-primary hover:bg-brand-primary/90 text-white transition-colors",
                children: _0x357275("common.retry")
              })]
            })]
          })
        })]
      })
    });
  } else {
    return _0x3ce73d.jsx(_0x4667b8, {
      open: _0x8da347,
      onOpenChange: _0x1ce824,
      children: _0x3ce73d.jsxs(_0x491328, {
        className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-[420px] max-h-[90dvh] overflow-y-auto",
        showCloseButton: false,
        "aria-describedby": undefined,
        children: [_0x3ce73d.jsx(_0x5b82a6, {
          className: "sr-only",
          children: _0x357275("fuel.packs.title")
        }), _0x3ce73d.jsxs("div", {
          className: "rounded-2xl overflow-hidden bg-surface-base border border-border-default shadow-2xl",
          children: [_0x3ce73d.jsxs("div", {
            className: _0x5adf96("relative overflow-hidden px-6 pt-8 pb-6", _0x5ba0fd === "small" ? "bg-gradient-to-b from-emerald-950/80 to-surface-base" : _0x5ba0fd === "medium" ? "bg-gradient-to-b from-amber-950/80 to-surface-base" : "bg-gradient-to-b from-violet-950/80 to-surface-base"),
            children: [_0x3ce73d.jsx("div", {
              className: _0x5adf96("pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full blur-[80px] opacity-30", _0x5ba0fd === "small" ? "bg-emerald-500" : _0x5ba0fd === "medium" ? "bg-amber-500" : "bg-violet-500")
            }), _0x3ce73d.jsxs("div", {
              className: "relative flex flex-col items-center",
              children: [_0x3ce73d.jsx("div", {
                className: _0x5adf96("flex items-center justify-center size-20 rounded-3xl mb-4 transition-all duration-300", _0x5ba0fd === "small" ? "bg-emerald-500/10 shadow-[0_0_40px_-8px] shadow-emerald-500/30" : _0x5ba0fd === "medium" ? "bg-amber-500/10 shadow-[0_0_40px_-8px] shadow-amber-500/30" : "bg-violet-500/10 shadow-[0_0_40px_-8px] shadow-violet-500/30"),
                children: _0x3ce73d.jsx(_0x30c1fc, {
                  className: _0x5adf96("size-10 transition-all duration-300", _0x5ba0fd === "small" ? "text-emerald-400" : _0x5ba0fd === "medium" ? "text-amber-400" : "text-violet-400")
                })
              }), _0x3ce73d.jsx("h2", {
                className: "text-xl font-bold text-text-primary",
                children: _0x357275("fuel.packs.title")
              }), _0x3ce73d.jsx("p", {
                className: "text-sm text-text-muted mt-1",
                children: _0x357275("fuel.packs.description")
              })]
            })]
          }), !_0x271117 && (_0x3dd69e || _0x4c31a1.length === 0) && _0x3ce73d.jsxs("div", {
            className: "px-5 py-3 text-center text-sm text-text-muted",
            role: "status",
            children: [_0x3ce73d.jsx("p", {
              children: _0x357275("fuel.packs.plansUnavailable")
            }), _0x3ce73d.jsx("button", {
              onClick: () => _0x3edda3(_0xd932a3 => _0xd932a3 + 1),
              className: "mt-2 text-text-primary",
              children: _0x357275("common.retry")
            })]
          }), _0x3ce73d.jsx("div", {
            className: "px-5 pb-2 -mt-1",
            children: _0x3ce73d.jsx("div", {
              className: "grid grid-cols-3 gap-2",
              children: _0x4c31a1.map(_0x3f4c55 => {
                const _0x27204c = _0x5ba0fd === _0x3f4c55.id;
                const _0x19d1f6 = _0x3f4c55.icon;
                return _0x3ce73d.jsxs("button", {
                  disabled: _0x47f418 || !_0x3f4c55.available,
                  onClick: () => _0x147346(_0x3f4c55.id),
                  className: _0x5adf96("relative flex flex-col items-center gap-2 px-3 py-4 rounded-xl border-2 transition-all cursor-pointer", _0x27204c ? _0x5adf96(_0x3f4c55.color === "emerald" ? "border-emerald-500/50 bg-emerald-500/5" : _0x3f4c55.color === "violet" ? "border-violet-500/50 bg-violet-500/5" : "border-amber-500/50 bg-amber-500/5") : "border-border-subtle bg-surface-inset/10 hover:border-border-strong hover:bg-surface-inset/20"),
                  children: [_0x27204c && _0x3ce73d.jsx("div", {
                    className: _0x5adf96("absolute -top-1.5 -right-1.5 size-5 rounded-full flex items-center justify-center", _0x3f4c55.color === "emerald" ? "bg-emerald-500" : _0x3f4c55.color === "violet" ? "bg-violet-500" : "bg-amber-500"),
                    children: _0x3ce73d.jsx(_0x56fcf3, {
                      className: "size-3 text-white"
                    })
                  }), _0x3ce73d.jsx(_0x19d1f6, {
                    className: _0x5adf96("size-7 transition-colors", _0x27204c ? _0x3f4c55.color === "emerald" ? "text-emerald-400" : _0x3f4c55.color === "violet" ? "text-violet-400" : "text-amber-400" : "text-text-muted")
                  }), _0x3ce73d.jsxs("div", {
                    className: "text-center",
                    children: [_0x3ce73d.jsx("p", {
                      className: _0x5adf96("text-lg font-black tabular-nums", _0x27204c ? "text-text-primary" : "text-text-secondary"),
                      children: _0x3f4c55.fuel
                    }), _0x3ce73d.jsx("p", {
                      className: "text-[10px] text-text-muted uppercase tracking-wider",
                      children: _0x357275("fuel.fuelUnit")
                    })]
                  }), _0x3ce73d.jsx("p", {
                    className: _0x5adf96("text-xs font-semibold tabular-nums", _0x27204c ? _0x3f4c55.color === "emerald" ? "text-emerald-400" : _0x3f4c55.color === "violet" ? "text-violet-400" : "text-amber-400" : "text-text-muted"),
                    children: _0x3f4c55.price
                  })]
                }, _0x3f4c55.id);
              })
            })
          }), _0x3ce73d.jsxs("div", {
            className: "px-5 pt-4",
            children: [_0x3ce73d.jsxs("div", {
              className: "grid grid-cols-2 gap-2 p-1 rounded-xl bg-surface-inset/20 border border-border-subtle",
              children: [_0x3ce73d.jsx("button", {
                disabled: _0x47f418,
                onClick: () => _0x18325b("one-time"),
                className: _0x5adf96("py-2.5 px-3 rounded-lg text-sm font-medium transition-all", _0x8e2b7b === "one-time" ? "bg-surface-overlay text-text-primary shadow-sm" : "text-text-muted hover:text-text-secondary"),
                children: _0x357275("fuel.packs.oneTime")
              }), _0x3ce73d.jsx("button", {
                disabled: _0x47f418,
                onClick: () => _0x18325b("subscription"),
                className: _0x5adf96("py-2.5 px-3 rounded-lg text-sm font-medium transition-all", _0x8e2b7b === "subscription" ? "bg-surface-overlay text-text-primary shadow-sm" : "text-text-muted hover:text-text-secondary"),
                children: _0x357275("fuel.packs.monthly")
              })]
            }), _0x8e2b7b === "subscription" && _0x3ce73d.jsx("p", {
              className: "text-xs text-text-muted text-center mt-2",
              children: _0x357275("fuel.packs.subscriptionNote")
            })]
          }), _0x3ce73d.jsx("div", {
            className: "px-5 pt-4 pb-5",
            children: _0x3ce73d.jsx("button", {
              onClick: _0x3efb0d,
              disabled: _0x47f418 || _0x271117 || !_0xb80bf3?.available,
              className: _0x5adf96("w-full flex items-center justify-center gap-2 h-12 rounded-xl font-bold text-base transition-all", _0x5ba0fd === "small" ? "bg-emerald-500 hover:bg-emerald-600 text-white" : _0x5ba0fd === "medium" ? "bg-amber-500 hover:bg-amber-600 text-white" : "bg-violet-500 hover:bg-violet-600 text-white", (_0x47f418 || _0x271117 || !_0xb80bf3?.available) && "opacity-70 cursor-not-allowed"),
              children: _0x47f418 || _0x271117 ? _0x3ce73d.jsxs(_0x3ce73d.Fragment, {
                children: [_0x3ce73d.jsx(_0x354fd2, {
                  className: "size-5 animate-spin"
                }), _0x357275("common.loading")]
              }) : _0x3ce73d.jsxs(_0x3ce73d.Fragment, {
                children: [_0x3ce73d.jsx(_0x3c08fc, {
                  icon: "solar:card-bold-duotone",
                  className: "size-5"
                }), _0x357275("fuel.packs.purchase"), _0xb80bf3 && _0x3ce73d.jsxs(_0x3ce73d.Fragment, {
                  children: [" • ", _0xb80bf3.price]
                }), _0x8e2b7b === "subscription" && "/" + _0x357275("fuel.packs.mo")]
              })
            })
          })]
        })]
      })
    });
  }
}
export { j as default };