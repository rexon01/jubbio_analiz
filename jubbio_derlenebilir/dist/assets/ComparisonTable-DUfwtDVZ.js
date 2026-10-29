import { j as _0x519cf8, al as _0x2dc14b, s as _0x5571be, am as _0x44ce84, r, b as _0x34feb8, B as _0x3e6439, f as _0x22fbfd, I as _0x1b96cc, an as _0x4c55ab, X as _0x5a349a } from "./index-cQfEKR1W.js";
import { getPricingForMonths as _0x3ca42c, formatPrice as _0x23746c, isSubscriptionActive as _0x5303b9, getSubscriptionMonths as _0x4b8595, getPricingMonths as _0x46c844 } from "./subscription-Cl5JAGbQ.js";
import { C as _0x212255, a as _0x193445 } from "./card-Bk6R3tFg.js";
import { G as _0x204be0 } from "./gift-Co-azAyt.js";
const v = _0x44ce84("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
  variants: {
    variant: {
      default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
      secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
      destructive: "border-transparent bg-destructive text-text-primary [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function y({
  className: _0xf3a396,
  variant: _0x2781a8,
  asChild: _0x33cb86 = false,
  ..._0x2cac8d
}) {
  const _0x58d9c3 = _0x33cb86 ? _0x2dc14b : "span";
  return _0x519cf8.jsx(_0x58d9c3, {
    "data-slot": "badge",
    className: _0x5571be(v({
      variant: _0x2781a8
    }), _0xf3a396),
    ..._0x2cac8d
  });
}
const j = r.memo(function ({
  plan: _0x17c6fb,
  pricing: _0x1fe24e,
  months: _0x4c6dfe,
  disabled: _0x1f0006,
  isCurrentPlan: _0x2ce532,
  canExtend: _0x5cf2da,
  isPopular: _0x310cb9,
  onSelect: _0x26856d,
  onGift: _0x384e74
}) {
  const {
    t: _0xa4d8bd
  } = _0x34feb8();
  const _0x35b9b9 = _0xa4d8bd(_0x4c6dfe === 12 ? "subscription.packages.year" : "subscription.packages.months", {
    count: _0x4c6dfe
  });
  const _0x40cf80 = !_0x1fe24e || _0x1fe24e.available === false;
  const _0x109e1d = _0x3ca42c(_0x17c6fb, 1);
  const _0x2c475d = _0x109e1d ? _0x109e1d.monthlyPrice ?? _0x109e1d.price : null;
  const _0x5d5093 = _0x1fe24e ? _0x1fe24e.monthlyPrice ?? Math.round(_0x1fe24e.price / _0x4c6dfe) : null;
  const _0x4d9e63 = _0x2c475d && _0x5d5093 && _0x4c6dfe > 1 ? _0x2c475d - _0x5d5093 : null;
  const _0xb44df5 = _0x4d9e63 ? _0x4d9e63 * _0x4c6dfe : null;
  return _0x519cf8.jsx(_0x212255, {
    "aria-label": _0x17c6fb.name + " " + _0x35b9b9,
    className: _0x5571be("min-w-0 gap-0 rounded-2xl py-0 shadow-none backdrop-blur-none transition-colors border-0", _0x310cb9 || _0x2ce532 ? "bg-surface-raised ring-1 ring-accent-primary/20" : "bg-surface-raised hover:ring-1 hover:ring-accent-primary/10"),
    children: _0x519cf8.jsxs(_0x193445, {
      className: "flex flex-1 flex-col p-5",
      children: [_0x519cf8.jsxs("div", {
        className: "mb-5 flex min-h-6 flex-wrap items-center justify-between gap-2",
        children: [_0x519cf8.jsx("h3", {
          className: "text-sm font-semibold text-text-primary",
          children: _0x35b9b9
        }), (_0x2ce532 || _0x310cb9) && _0x519cf8.jsx(y, {
          variant: "outline",
          className: "rounded-full border-accent-primary/15 bg-accent-primary/8 px-2 text-[10px] text-accent-primary-text",
          children: _0xa4d8bd(_0x2ce532 ? "subscription.currentPlan" : "subscription.packages.bestValue")
        })]
      }), _0x519cf8.jsxs("p", {
        className: "flex flex-wrap items-baseline gap-x-1",
        children: [_0x519cf8.jsx("span", {
          className: "text-3xl font-semibold tracking-tight text-text-primary",
          children: _0x1fe24e ? _0x23746c(_0x1fe24e.monthlyPrice ?? Math.round(_0x1fe24e.price / _0x4c6dfe), _0x1fe24e.currency) : "—"
        }), _0x1fe24e && _0x519cf8.jsx("span", {
          className: "text-xs text-text-muted",
          children: _0xa4d8bd("subscription.perMonth")
        })]
      }), _0x519cf8.jsx("p", {
        className: "mt-1 text-xs text-text-muted",
        children: _0x1fe24e ? _0xa4d8bd("subscription.packages.multiplier", {
          count: _0x4c6dfe
        }) : _0xa4d8bd("subscription.packages.unavailable")
      }), _0xb44df5 && _0xb44df5 > 0 ? _0x519cf8.jsx("div", {
        className: "mt-3 inline-flex self-start rounded-lg bg-white px-2.5 py-1.5",
        children: _0x519cf8.jsxs("span", {
          className: "text-xs font-semibold text-black",
          children: [_0x23746c(_0xb44df5, _0x1fe24e.currency), " ", _0xa4d8bd("subscription.packages.savings")]
        })
      }) : _0x4c6dfe === 1 && _0x1fe24e ? _0x519cf8.jsx("div", {
        className: "mt-3 inline-flex self-start rounded-lg bg-white/10 px-2.5 py-1.5",
        children: _0x519cf8.jsx("span", {
          className: "text-xs font-medium text-text-muted",
          children: _0xa4d8bd("subscription.packages.noCommitment")
        })
      }) : null, _0x519cf8.jsxs("div", {
        className: "mb-5 mt-3 flex min-h-5 flex-wrap items-center justify-between gap-2 text-xs",
        children: [_0x519cf8.jsx("span", {
          className: "text-text-secondary",
          children: _0x1fe24e ? _0xa4d8bd("subscription.packages.totalPrice", {
            price: _0x23746c(_0x1fe24e.price, _0x1fe24e.currency, _0x1fe24e.formattedPrice)
          }) : "—"
        }), _0x1fe24e?.discountPercentage ? _0x519cf8.jsx("span", {
          className: "font-medium text-accent-primary-text",
          children: _0xa4d8bd("subscription.discount", {
            percent: _0x1fe24e.discountPercentage
          })
        }) : null]
      }), _0x519cf8.jsxs("div", {
        className: "mt-auto flex items-stretch gap-2",
        children: [_0x519cf8.jsx(_0x3e6439, {
          variant: _0x310cb9 ? "default" : "outline",
          onClick: _0x26856d,
          disabled: _0x1f0006 || _0x40cf80,
          className: _0x5571be("h-auto min-h-10 min-w-0 flex-1 whitespace-normal rounded-lg px-3 py-2 text-xs border-0", _0x310cb9 ? "bg-accent-primary text-text-on-accent hover:bg-accent-primary/90" : "bg-surface-overlay/60 text-text-primary hover:bg-surface-overlay"),
          children: _0xa4d8bd(_0x40cf80 ? "subscription.packages.unavailable" : _0x5cf2da ? "subscription.prepaid.addTime" : "subscription.selectPlan")
        }), _0x384e74 && _0x519cf8.jsx(_0x3e6439, {
          variant: "outline",
          onClick: _0x384e74,
          disabled: _0x1f0006 || _0x40cf80,
          className: "h-auto min-h-10 w-10 shrink-0 rounded-lg border-0 bg-surface-overlay/60 text-text-muted hover:bg-surface-overlay hover:text-text-primary",
          "aria-label": _0xa4d8bd("subscription.giftPlan"),
          title: _0xa4d8bd("subscription.giftPlan"),
          children: _0x519cf8.jsx(_0x204be0, {
            className: "size-3.5"
          })
        })]
      }), _0x519cf8.jsx("p", {
        className: "mt-3 text-[10px] leading-relaxed text-text-muted",
        children: _0x1fe24e ? _0xa4d8bd("subscription.prepaid." + (_0x5cf2da || (_0x1fe24e.isOnetime ?? _0x4c6dfe === 3) ? "noRenewal" : "renewalNotice"), {
          count: _0x4c6dfe
        }) : _0xa4d8bd("subscription.packages.unavailable")
      })]
    })
  });
});
function N({
  plans: _0xc65040,
  subscription: _0x3d6adc,
  disabled: _0x436f60,
  onSelect: _0x3ffead,
  onGift: _0x5a18de
}) {
  const {
    t: _0x19a73d
  } = _0x34feb8();
  const _0x1c45b0 = _0x22fbfd(_0x34b3c4 => _0x34b3c4.user?.id);
  const _0x484d3d = _0xc65040.find(_0x1d8f85 => _0x1d8f85.id === "nexus") ?? _0xc65040.find(_0x1b5617 => _0x1b5617.tier === "pro");
  const _0x25c423 = String(_0x1c45b0) === "1" ? _0xc65040.find(_0x25cdb6 => _0x25cdb6.id === "nexus-test") : undefined;
  const _0x3b8824 = _0x25c423?.pricing[0];
  if (_0x484d3d) {
    return _0x519cf8.jsxs(_0x519cf8.Fragment, {
      children: [_0x519cf8.jsxs("div", {
        className: "mb-5 space-y-1",
        children: [_0x519cf8.jsx("h2", {
          className: "text-lg font-semibold text-text-primary",
          children: _0x19a73d("subscription.packages.title")
        }), _0x519cf8.jsx("p", {
          className: "text-sm text-text-muted",
          children: _0x19a73d("subscription.packages.description")
        })]
      }), _0x519cf8.jsx("div", {
        className: "grid grid-cols-1 items-stretch gap-4 md:grid-cols-3 lg:gap-5",
        children: [1, 3, 12].map(_0x1d0540 => {
          const _0x35cd13 = _0x3ca42c(_0x484d3d, _0x1d0540);
          return _0x519cf8.jsx(j, {
            plan: _0x484d3d,
            pricing: _0x35cd13,
            months: _0x1d0540,
            disabled: _0x436f60,
            isCurrentPlan: Boolean(_0x3d6adc && _0x5303b9(_0x3d6adc) && _0x3d6adc.planId === _0x484d3d.id && _0x4b8595(_0x3d6adc) === _0x1d0540),
            canExtend: Boolean(_0x3d6adc && _0x5303b9(_0x3d6adc) && _0x3d6adc.planId !== "free"),
            isPopular: _0x1d0540 === 12,
            onSelect: () => {
              if (_0x35cd13) {
                _0x3ffead(_0x484d3d, _0x35cd13);
              }
            },
            onGift: _0x35cd13 ? () => _0x5a18de(_0x484d3d, _0x35cd13) : undefined
          }, _0x1d0540);
        })
      }), _0x25c423 && _0x3b8824 && _0x519cf8.jsxs("div", {
        className: "mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border-default bg-surface-inset p-4",
        children: [_0x519cf8.jsxs("div", {
          className: "space-y-1",
          children: [_0x519cf8.jsx("p", {
            className: "text-sm font-medium text-text-primary",
            children: _0x19a73d("subscription.liveTest.title")
          }), _0x519cf8.jsx("p", {
            className: "text-xs text-text-muted",
            children: _0x19a73d("subscription.liveTest.description")
          })]
        }), _0x519cf8.jsxs(_0x3e6439, {
          variant: "outline",
          disabled: _0x436f60 || _0x3b8824.available === false,
          onClick: () => _0x3ffead(_0x25c423, _0x3b8824),
          children: [_0x519cf8.jsx(_0x1b96cc, {
            icon: "solar:card-linear",
            className: "size-4"
          }), _0x19a73d("subscription.liveTest.pay", {
            price: _0x23746c(_0x3b8824.price, _0x3b8824.currency)
          })]
        })]
      })]
    });
  } else {
    return null;
  }
}
function w() {
  return _0x519cf8.jsxs("div", {
    className: "space-y-8 animate-pulse",
    children: [_0x519cf8.jsx("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-4",
      children: [0, 1, 2].map(_0x41e0d2 => _0x519cf8.jsxs("div", {
        className: "flex flex-col rounded-2xl border border-border-default/40 bg-surface-overlay/20 p-6 space-y-4",
        children: [_0x519cf8.jsxs("div", {
          className: "flex items-center gap-3",
          children: [_0x519cf8.jsx("div", {
            className: "size-10 rounded-xl bg-surface-overlay/50"
          }), _0x519cf8.jsxs("div", {
            className: "space-y-2 flex-1",
            children: [_0x519cf8.jsx("div", {
              className: "h-4 w-24 rounded bg-surface-overlay/50"
            }), _0x519cf8.jsx("div", {
              className: "h-3 w-36 rounded bg-surface-overlay/30"
            })]
          })]
        }), _0x519cf8.jsx("div", {
          className: "h-8 w-28 rounded bg-surface-overlay/50"
        }), _0x519cf8.jsx("div", {
          className: "h-4 w-20 rounded bg-surface-overlay/30"
        }), _0x519cf8.jsx("div", {
          className: "flex-1"
        }), _0x519cf8.jsx("div", {
          className: "h-10 w-full rounded-xl bg-surface-overlay/40"
        })]
      }, _0x41e0d2))
    }), _0x519cf8.jsxs("div", {
      className: "rounded-2xl border border-border-default/40 bg-surface-overlay/10 p-5 space-y-3",
      children: [_0x519cf8.jsx("div", {
        className: "h-5 w-36 rounded bg-surface-overlay/40"
      }), _0x519cf8.jsx("div", {
        className: "space-y-2",
        children: [0, 1, 2, 3, 4].map(_0xe06c07 => _0x519cf8.jsxs("div", {
          className: "flex items-center gap-4",
          children: [_0x519cf8.jsx("div", {
            className: "h-4 flex-1 rounded bg-surface-overlay/25"
          }), _0x519cf8.jsx("div", {
            className: "h-4 w-16 rounded bg-surface-overlay/25"
          }), _0x519cf8.jsx("div", {
            className: "h-4 w-16 rounded bg-surface-overlay/25"
          })]
        }, _0xe06c07))
      })]
    })]
  });
}
function k({
  className: _0x4e6f2b,
  ..._0x1f7ac1
}) {
  return _0x519cf8.jsx("div", {
    "data-slot": "table-container",
    className: "relative w-full overflow-x-auto",
    children: _0x519cf8.jsx("table", {
      "data-slot": "table",
      className: _0x5571be("w-full caption-bottom text-sm", _0x4e6f2b),
      ..._0x1f7ac1
    })
  });
}
function P({
  className: _0x595ca7,
  ..._0x4c039f
}) {
  return _0x519cf8.jsx("thead", {
    "data-slot": "table-header",
    className: _0x5571be("[&_tr]:border-b", _0x595ca7),
    ..._0x4c039f
  });
}
function M({
  className: _0x2c18e7,
  ..._0x55da34
}) {
  return _0x519cf8.jsx("tbody", {
    "data-slot": "table-body",
    className: _0x5571be("[&_tr:last-child]:border-0", _0x2c18e7),
    ..._0x55da34
  });
}
function C({
  className: _0x5908cd,
  ..._0x99aab6
}) {
  return _0x519cf8.jsx("tr", {
    "data-slot": "table-row",
    className: _0x5571be("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", _0x5908cd),
    ..._0x99aab6
  });
}
function z({
  className: _0x2e20ae,
  ..._0x16f9d3
}) {
  return _0x519cf8.jsx("th", {
    "data-slot": "table-head",
    className: _0x5571be("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", _0x2e20ae),
    ..._0x16f9d3
  });
}
function T({
  className: _0xf8aabc,
  ..._0x5f37c8
}) {
  return _0x519cf8.jsx("td", {
    "data-slot": "table-cell",
    className: _0x5571be("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", _0xf8aabc),
    ..._0x5f37c8
  });
}
const $ = [{
  key: "appearance",
  features: ["badge", "animatedAvatar", "profileBanner", "profileTheme", "customTheme", "serverProfile"]
}, {
  key: "media",
  features: ["maxMessageLength", "uploadLimit", "crossGuildEmoji", "emojiSlots", "maxDMs"]
}, {
  key: "community",
  features: ["maxGuilds", "maxOwnedGuilds", "fuelAmount"]
}];
const G = r.memo(function ({
  plans: _0x4b3098,
  currentPlanId: _0x1ee8a5,
  highlightPlanId: _0x1cea58
}) {
  const {
    t: _0x123150,
    i18n: _0x516355
  } = _0x34feb8();
  const _0x3a6725 = _0x4b3098.filter(_0x2a5cfa => _0x2a5cfa.id !== "nexus-test");
  if (!_0x3a6725.length) {
    return null;
  }
  const _0x1e4a69 = new Map(_0x3a6725.flatMap(_0x5d10fa => _0x5d10fa.features.map(_0x49f806 => [_0x49f806.key, _0x49f806])));
  const _0x516d17 = _0x1cea58 ?? _0x1ee8a5;
  const _0x2e4598 = _0x3a6725.find(_0x14d703 => _0x14d703.id === _0x516d17 || _0x14d703.tier === _0x516d17) ?? _0x3a6725.find(_0x2e181d => _0x2e181d.tier === "pro");
  const _0xb8b946 = _0x3a6725.find(_0x96950a => _0x96950a.tier === "free");
  const _0x2efe51 = _0x2e4598 && _0xb8b946 ? [..._0x1e4a69.keys()].filter(_0x3b658b => _0x2e4598.features.find(_0x35de19 => _0x35de19.key === _0x3b658b)?.value !== _0xb8b946.features.find(_0x4aac36 => _0x4aac36.key === _0x3b658b)?.value).length : _0x1e4a69.size;
  const _0x35837e = new Set($.flatMap(_0x590470 => _0x590470.features));
  const _0x4f1f4a = $.map(_0x1377d4 => ({
    ..._0x1377d4,
    features: [..._0x1377d4.features, ...(_0x1377d4.key === "community" ? [..._0x1e4a69.keys()].filter(_0x357cfa => !_0x35837e.has(_0x357cfa)) : [])].filter(_0x3adb42 => _0x1e4a69.has(_0x3adb42))
  })).filter(_0x5a17c1 => _0x5a17c1.features.length);
  const _0x4c0f3e = _0x2e4598?.pricing[0]?.currency ?? "TRY";
  const _0x57b186 = "minmax(0, 1fr) repeat(" + _0x3a6725.length + ", 170px)";
  return _0x519cf8.jsxs("div", {
    className: "space-y-5",
    children: [_0x519cf8.jsxs("div", {
      className: "space-y-1.5",
      children: [_0x519cf8.jsxs("div", {
        className: "flex items-center gap-2.5",
        children: [_0x519cf8.jsx("img", {
          src: "https://cdn.jubbio.com/badges/icons/1775103030899_nexus.png",
          alt: "",
          className: "size-6"
        }), _0x519cf8.jsx("h2", {
          className: "text-lg font-semibold text-text-primary",
          children: _0x2e4598 ? _0x123150("subscription.comparison.title", {
            plan: _0x2e4598.name,
            count: _0x2efe51
          }) : _0x123150("subscription.comparePlans")
        })]
      }), _0x519cf8.jsx("p", {
        className: "max-w-lg text-xs leading-relaxed text-text-muted",
        children: _0x123150("subscription.comparison.description", {
          plan: _0x2e4598?.name ?? ""
        })
      })]
    }), _0x519cf8.jsx("div", {
      className: "overflow-x-auto",
      children: _0x519cf8.jsxs("div", {
        className: "relative",
        style: {
          minWidth: 230 + _0x3a6725.length * 170
        },
        children: [_0x519cf8.jsx("div", {
          "aria-hidden": true,
          className: "pointer-events-none absolute inset-x-0 bottom-0 top-5 grid",
          style: {
            gridTemplateColumns: _0x57b186
          },
          children: _0x3a6725.map((_0x4e293a, _0x16d99b) => _0x4e293a.id === _0x2e4598?.id ? _0x519cf8.jsx("div", {
            style: {
              gridColumn: _0x16d99b + 2
            },
            className: "rounded-2xl border border-accent-primary/25 bg-gradient-to-b from-accent-primary/10 to-accent-primary/3"
          }, _0x4e293a.id) : null)
        }), _0x519cf8.jsxs(k, {
          className: "relative table-fixed border-separate border-spacing-0",
          children: [_0x519cf8.jsxs("colgroup", {
            children: [_0x519cf8.jsx("col", {}), _0x3a6725.map(_0x5107f8 => _0x519cf8.jsx("col", {
              style: {
                width: 170
              }
            }, _0x5107f8.id))]
          }), _0x519cf8.jsx(P, {
            children: _0x519cf8.jsxs(C, {
              className: "border-0 hover:bg-transparent",
              children: [_0x519cf8.jsx(z, {
                className: "h-32 whitespace-normal border-b border-border-default px-0 pb-5 pt-16 align-bottom text-sm font-semibold text-text-primary",
                children: _0x123150("subscription.comparison.features")
              }), _0x3a6725.map(_0x3bd13d => {
                const _0xae5661 = _0x3bd13d.tier !== "free";
                const _0x41ee93 = _0x3bd13d.pricing.map(_0x3f08b7 => _0x3f08b7.monthlyPrice ?? Math.round(_0x3f08b7.price / _0x46c844(_0x3f08b7)));
                const _0xe0dc8d = _0x41ee93.length ? Math.min(..._0x41ee93) : null;
                return _0x519cf8.jsxs(z, {
                  scope: "col",
                  className: "relative h-32 whitespace-normal border-b border-border-default px-3 pb-5 pt-12 text-center align-bottom",
                  children: [_0x3bd13d.id === _0x2e4598?.id && _0x519cf8.jsx(y, {
                    className: "absolute left-1/2 top-2 -translate-x-1/2 rounded-full border-0 bg-accent-primary px-3 py-1 text-[10px] text-text-on-accent",
                    children: _0x123150("subscription.comparison.recommended")
                  }), _0x519cf8.jsxs("div", {
                    className: "flex items-center justify-center gap-2 text-sm font-semibold text-text-primary",
                    children: [_0xae5661 && _0x519cf8.jsx("img", {
                      src: "https://cdn.jubbio.com/badges/icons/1775103030899_nexus.png",
                      alt: "",
                      className: "size-4"
                    }), _0xae5661 ? _0x3bd13d.name : _0x123150("subscription.free")]
                  }), _0x519cf8.jsx("p", {
                    className: "mt-2 text-xs font-normal text-text-secondary",
                    children: _0xae5661 ? _0xe0dc8d !== null ? "" + _0x23746c(_0xe0dc8d, _0x3bd13d.pricing[0].currency) + _0x123150("subscription.perMonth") : "—" : new Intl.NumberFormat(_0x516355.resolvedLanguage, {
                      style: "currency",
                      currency: _0x4c0f3e,
                      maximumFractionDigits: 0
                    }).format(0)
                  }), _0x3bd13d.id === _0x1ee8a5 && _0x519cf8.jsx("p", {
                    className: "mt-1 text-[10px] font-normal text-text-muted",
                    children: _0x123150("subscription.currentPlan")
                  })]
                }, _0x3bd13d.id);
              })]
            })
          }), _0x519cf8.jsx(M, {
            children: _0x4f1f4a.map(_0x4290f6 => _0x519cf8.jsxs(r.Fragment, {
              children: [_0x519cf8.jsxs(C, {
                className: "border-0 hover:bg-transparent",
                children: [_0x519cf8.jsx(z, {
                  scope: "row",
                  className: "h-auto whitespace-normal px-0 pb-3 pt-9 text-sm font-semibold text-text-primary",
                  children: _0x123150("subscription.comparison." + _0x4290f6.key)
                }), _0x3a6725.map(_0x38378c => _0x519cf8.jsx(T, {
                  className: "p-0"
                }, _0x38378c.id))]
              }), _0x4290f6.features.map(_0x7aa3c3 => _0x519cf8.jsxs(C, {
                className: "border-0 hover:bg-transparent",
                children: [_0x519cf8.jsx(z, {
                  scope: "row",
                  className: "h-auto whitespace-normal border-b border-border-default/80 py-3 pr-5 pl-0 text-xs font-normal leading-relaxed text-text-secondary",
                  children: _0x123150(_0x1e4a69.get(_0x7aa3c3).label, {
                    defaultValue: _0x7aa3c3
                  })
                }), _0x3a6725.map(_0x3f1cf6 => {
                  const _0x2d77e1 = _0x3f1cf6.features.find(_0x2f7184 => _0x2f7184.key === _0x7aa3c3)?.value;
                  const _0x3b4a39 = _0x3f1cf6.id === _0x2e4598?.id;
                  const _0xa70402 = _0x2d77e1 === true;
                  return _0x519cf8.jsx(T, {
                    className: _0x5571be("border-b border-border-default/80 py-3 text-center text-xs tabular-nums", _0x3b4a39 ? "font-semibold text-text-primary" : "text-text-secondary"),
                    children: _0x2d77e1 === undefined || typeof _0x2d77e1 == "boolean" ? _0x519cf8.jsxs("span", {
                      className: "flex justify-center",
                      children: [_0xa70402 ? _0x519cf8.jsx(_0x4c55ab, {
                        "aria-hidden": true,
                        className: "size-4 text-text-primary"
                      }) : _0x519cf8.jsx(_0x5a349a, {
                        "aria-hidden": true,
                        className: "size-4 text-text-muted/60"
                      }), _0x519cf8.jsx("span", {
                        className: "sr-only",
                        children: _0x123150(_0xa70402 ? "subscription.comparison.included" : "subscription.comparison.notIncluded")
                      })]
                    }) : typeof _0x2d77e1 == "number" ? _0x2d77e1.toLocaleString(_0x516355.resolvedLanguage) : String(_0x2d77e1).replace(/(\d)(MB|GB)$/i, "$1 $2")
                  }, _0x3f1cf6.id);
                })]
              }, _0x7aa3c3))]
            }, _0x4290f6.key))
          })]
        })]
      })
    })]
  });
});
export { y as B, G as C, w as N, N as P, k as T, P as a, C as b, z as c, M as d, T as e };