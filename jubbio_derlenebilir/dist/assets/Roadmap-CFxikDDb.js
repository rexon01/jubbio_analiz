import { b as _0x42de39, r as _0x30de7a, C as _0x53de16, j as _0xb2214f, E as _0x50d235, B as _0x493277, L as _0x3d4eaf, I as _0x33db8d, s as _0x5ae6ce } from "./index-cQfEKR1W.js";
import { I as _0x437ed4 } from "./input-AMyERYwJ.js";
import { D as _0x59e411, a as _0x4a7b72, e as _0xea8c27, b as _0x1e844d, c as _0xa9d32a, d as _0x6f6f2d } from "./dialog-BMMpM7PR.js";
import { S as _0x4715cb, a as _0x3948ac, b as _0x3f4b40, c as _0x186d69, d as _0x557519 } from "./select-DQjjzSZW.js";
import "./index-yuEHo9bu.js";
import "./index-Oyyh46KT.js";
const N = ["building", "planned", "shipped"];
const k = ["voice", "community", "messaging", "platform"];
const w = [{
  id: "voiceQuality",
  status: "building",
  category: "voice",
  date: "2026-10-15"
}, {
  id: "onboarding",
  status: "building",
  category: "community",
  date: "2026-10-14"
}, {
  id: "search",
  status: "building",
  category: "messaging",
  date: "2026-10-12"
}, {
  id: "events",
  status: "planned",
  category: "community",
  date: "2026-10-11"
}, {
  id: "mobile",
  status: "planned",
  category: "platform",
  date: "2026-10-10"
}, {
  id: "threads",
  status: "planned",
  category: "messaging",
  date: "2026-10-09"
}, {
  id: "dmPins",
  status: "shipped",
  category: "messaging",
  date: "2026-10-08"
}, {
  id: "streamPreview",
  status: "shipped",
  category: "voice",
  date: "2026-10-06"
}, {
  id: "safety",
  status: "shipped",
  category: "platform",
  date: "2026-10-04"
}];
const y = {
  building: "text-[#62734f]",
  planned: "text-stone-600",
  shipped: "text-emerald-700"
};
const $ = {
  voice: "solar:microphone-3-bold-duotone",
  community: "solar:users-group-rounded-bold-duotone",
  messaging: "solar:chat-round-dots-bold-duotone",
  platform: "solar:monitor-bold-duotone"
};
function C() {
  const {
    t: _0x239d03,
    i18n: _0x398bb5
  } = _0x42de39();
  const [_0x51c50e, _0x3d6843] = _0x30de7a.useState("all");
  const [_0x27b2f8, _0x53f139] = _0x30de7a.useState("all");
  const [_0x2b532a, _0x28f236] = _0x30de7a.useState("");
  const [_0x4e4f91, _0x53a457] = _0x30de7a.useState(null);
  _0x53de16(_0x239d03("roadmap.pageTitle"), _0x239d03("roadmap.description"), "");
  const _0x16cf20 = _0x19b896 => new Intl.DateTimeFormat(_0x398bb5.resolvedLanguage || "en", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(_0x19b896 + "T12:00:00Z"));
  const _0x86ce5d = w.filter(_0xae88f0 => (_0x51c50e === "all" || _0xae88f0.status === _0x51c50e) && (_0x27b2f8 === "all" || _0xae88f0.category === _0x27b2f8) && (_0x239d03("roadmap.items." + _0xae88f0.id + ".title") + " " + _0x239d03("roadmap.items." + _0xae88f0.id + ".summary")).toLocaleLowerCase(_0x398bb5.resolvedLanguage || "en").includes(_0x2b532a.trim().toLocaleLowerCase(_0x398bb5.resolvedLanguage || "en")));
  return _0xb2214f.jsxs(_0x50d235, {
    showDownloadBar: false,
    showClickEffects: false,
    children: [_0xb2214f.jsx("header", {
      className: "relative isolate overflow-hidden px-6 pb-12 pt-36 text-center md:pb-16 md:pt-48",
      children: _0xb2214f.jsxs("div", {
        className: "mx-auto flex max-w-3xl flex-col items-center",
        children: [_0xb2214f.jsxs("h1", {
          className: "text-4xl font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-5xl md:text-7xl",
          children: [_0x239d03("roadmap.titleIntro"), _0xb2214f.jsx("br", {}), _0xb2214f.jsx("span", {
            className: "italic text-[#ADFF08]",
            children: _0x239d03("roadmap.title")
          })]
        }), _0xb2214f.jsx("p", {
          className: "mt-6 max-w-lg text-sm leading-relaxed text-white/55 sm:text-base",
          children: _0x239d03("roadmap.description")
        }), _0xb2214f.jsx(_0x493277, {
          asChild: true,
          className: "group mt-7 h-11 rounded-full bg-[#ADFF08] px-6 text-black shadow-none hover:bg-[#bdff3d]",
          children: _0xb2214f.jsxs(_0x3d4eaf, {
            to: "/contact",
            children: [_0x239d03("roadmap.suggest"), _0xb2214f.jsx(_0x33db8d, {
              icon: "solar:arrow-right-up-bold-duotone",
              className: "size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            })]
          })
        })]
      })
    }), _0xb2214f.jsxs("div", {
      className: "mx-auto max-w-7xl px-5 pb-8 sm:px-8 lg:px-12",
      children: [_0xb2214f.jsxs("div", {
        className: "rounded-3xl bg-[#f1f2ed] p-4 text-[#191b17] sm:p-6 lg:p-8",
        children: [_0xb2214f.jsx("section", {
          "aria-label": _0x239d03("roadmap.filters"),
          className: "pb-5",
          children: _0xb2214f.jsxs("div", {
            className: "flex flex-col justify-between gap-4 xl:flex-row xl:items-center",
            children: [_0xb2214f.jsx("div", {
              className: "flex flex-wrap gap-1",
              role: "group",
              "aria-label": _0x239d03("roadmap.statusFilter"),
              children: ["all", ...N].map(_0x58b5b4 => _0xb2214f.jsxs(_0x493277, {
                variant: "ghost",
                size: "sm",
                "aria-pressed": _0x51c50e === _0x58b5b4,
                onClick: () => _0x3d6843(_0x58b5b4),
                className: _0x5ae6ce("h-9 rounded-full border border-transparent px-3 text-black/55 hover:bg-white/70 hover:text-black dark:hover:bg-white/70", _0x51c50e === _0x58b5b4 && "border-[#d8ddd0] bg-[#e3e9d9] text-[#35412b] hover:bg-[#dce4d0] hover:text-[#35412b] dark:hover:bg-[#dce4d0]"),
                children: [_0x239d03("roadmap.status." + _0x58b5b4), _0xb2214f.jsx("span", {
                  className: "ml-1 text-xs tabular-nums opacity-45",
                  children: w.filter(_0x1feee0 => _0x58b5b4 === "all" || _0x1feee0.status === _0x58b5b4).length
                })]
              }, _0x58b5b4))
            }), _0xb2214f.jsxs("div", {
              className: "flex flex-col gap-3 sm:flex-row",
              children: [_0xb2214f.jsx(_0x437ed4, {
                type: "search",
                "aria-label": _0x239d03("roadmap.search"),
                placeholder: _0x239d03("roadmap.search"),
                value: _0x2b532a,
                onChange: _0x910f21 => _0x28f236(_0x910f21.target.value),
                icon: _0xb2214f.jsx(_0x33db8d, {
                  icon: "solar:magnifer-bold-duotone",
                  className: "size-4 text-black/45"
                }),
                className: "text-black",
                wrapperClassName: "h-9 bg-[#fafbf8] ring-black/10 sm:w-52 focus-within:bg-white focus-within:ring-black/20 focus-within:ring-offset-0 [&>p]:text-black/40"
              }), _0xb2214f.jsxs(_0x4715cb, {
                value: _0x27b2f8,
                onValueChange: _0x53f139,
                children: [_0xb2214f.jsx(_0x3948ac, {
                  "aria-label": _0x239d03("roadmap.categoryFilter"),
                  icon: _0xb2214f.jsx(_0x33db8d, {
                    icon: "solar:alt-arrow-down-bold-duotone",
                    className: "size-4 text-black/40"
                  }),
                  className: "w-full border-black/10 bg-[#fafbf8] text-black/65 shadow-none sm:w-44 hover:bg-white [&_svg]:text-black/40",
                  children: _0xb2214f.jsx(_0x3f4b40, {})
                }), _0xb2214f.jsx(_0x186d69, {
                  className: "border-black/10 bg-[#fafbf8] text-[#191b17] shadow-none backdrop-blur-none",
                  children: ["all", ...k].map(_0x4eb212 => _0xb2214f.jsx(_0x557519, {
                    value: _0x4eb212,
                    indicator: _0xb2214f.jsx(_0x33db8d, {
                      icon: "solar:check-read-bold-duotone",
                      className: "size-4 text-[#35412b]"
                    }),
                    className: "text-black/65 focus:bg-[#e8ecdf] focus:text-[#191b17] data-[highlighted]:bg-[#e8ecdf] hover:bg-[#e8ecdf]",
                    children: _0x239d03("roadmap.category." + _0x4eb212)
                  }, _0x4eb212))
                })]
              })]
            })]
          })
        }), _0xb2214f.jsxs("div", {
          className: "mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-4 text-[11px] text-black/45",
          children: [_0xb2214f.jsx("span", {
            "aria-live": "polite",
            children: _0x239d03("roadmap.results", {
              count: _0x86ce5d.length
            })
          }), _0xb2214f.jsx("span", {
            children: _0x239d03("roadmap.updated", {
              date: _0x16cf20("2026-10-15")
            })
          })]
        }), _0x86ce5d.length ? _0xb2214f.jsx("div", {
          className: _0x5ae6ce("grid gap-8", _0x51c50e === "all" && "lg:grid-cols-3 lg:gap-5"),
          children: N.filter(_0x14cca4 => _0x51c50e === "all" || _0x14cca4 === _0x51c50e).map(_0x4c58d4 => {
            const _0x280190 = _0x86ce5d.filter(_0x1fa23f => _0x1fa23f.status === _0x4c58d4);
            return _0xb2214f.jsxs("section", {
              "aria-labelledby": "roadmap-" + _0x4c58d4,
              className: "min-w-0",
              children: [_0xb2214f.jsxs("div", {
                className: "mb-2 flex items-center gap-2.5",
                children: [_0xb2214f.jsx(_0x33db8d, {
                  icon: _0x4c58d4 === "shipped" ? "solar:check-circle-bold-duotone" : _0x4c58d4 === "building" ? "solar:clock-circle-bold-duotone" : "solar:calendar-bold-duotone",
                  className: _0x5ae6ce("size-4", _0x4c58d4 === "shipped" ? "text-emerald-700" : "text-[#677456]")
                }), _0xb2214f.jsx("h2", {
                  id: "roadmap-" + _0x4c58d4,
                  className: "text-sm font-semibold text-[#191b17]",
                  children: _0x239d03("roadmap.status." + _0x4c58d4)
                }), _0xb2214f.jsx("span", {
                  className: "ml-auto text-xs tabular-nums text-black/35",
                  children: _0x280190.length.toString().padStart(2, "0")
                })]
              }), _0xb2214f.jsx("p", {
                className: "mb-5 text-xs leading-5 text-black/45",
                children: _0x239d03("roadmap.statusDescription." + _0x4c58d4)
              }), _0xb2214f.jsx("div", {
                className: _0x5ae6ce("grid gap-3", _0x51c50e !== "all" && "sm:grid-cols-2 lg:grid-cols-3"),
                children: _0x280190.length ? _0x280190.map(_0x3bacee => {
                  const _0x150658 = _0x3bacee.id === "voiceQuality";
                  return _0xb2214f.jsxs(_0x493277, {
                    variant: "ghost",
                    onClick: () => _0x53a457(_0x3bacee),
                    className: _0x5ae6ce("group h-full min-h-52 w-full flex-col items-start justify-start gap-4 whitespace-normal rounded-2xl border border-black/7 bg-[#fafbf8] p-5 text-left shadow-none transition-colors hover:border-black/15 hover:bg-white dark:hover:bg-white focus-visible:ring-black/25", _0x150658 && "border-[#d5deca] bg-[#e5eddc] hover:border-[#c6d2b7] hover:bg-[#dee8d3] dark:hover:bg-[#dee8d3]"),
                    children: [_0xb2214f.jsxs("span", {
                      className: "inline-flex items-center gap-2 text-[11px] font-normal text-black/55",
                      children: [_0xb2214f.jsx(_0x33db8d, {
                        icon: $[_0x3bacee.category],
                        className: "size-3.5"
                      }), _0x239d03("roadmap.category." + _0x3bacee.category)]
                    }), _0xb2214f.jsx("span", {
                      className: "text-lg font-semibold leading-snug tracking-tight text-[#191b17]",
                      children: _0x239d03("roadmap.items." + _0x3bacee.id + ".title")
                    }), _0xb2214f.jsx("span", {
                      className: "text-sm font-normal leading-relaxed text-black/55",
                      children: _0x239d03("roadmap.items." + _0x3bacee.id + ".summary")
                    }), _0xb2214f.jsxs("span", {
                      className: "mt-auto flex w-full items-center justify-between pt-2 text-[11px] font-normal text-black/40",
                      children: [_0x16cf20(_0x3bacee.date), _0xb2214f.jsx("span", {
                        className: "flex size-7 items-center justify-center rounded-full bg-[#edf0e8] text-black/55 transition-colors group-hover:bg-[#dce3d2] group-hover:text-[#35412b]",
                        children: _0xb2214f.jsx(_0x33db8d, {
                          icon: "solar:arrow-right-up-bold-duotone",
                          className: "size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        })
                      })]
                    })]
                  }, _0x3bacee.id);
                }) : _0xb2214f.jsx("p", {
                  className: "py-6 text-sm text-black/45",
                  children: _0x239d03("roadmap.emptyColumn")
                })
              })]
            }, _0x4c58d4);
          })
        }) : _0xb2214f.jsxs("div", {
          className: "flex min-h-64 flex-col items-center justify-center gap-3 text-center",
          children: [_0xb2214f.jsx(_0x33db8d, {
            icon: "solar:magnifer-bold-duotone",
            className: "mb-1 size-6 text-black/30"
          }), _0xb2214f.jsx("h2", {
            className: "text-lg font-medium text-black",
            children: _0x239d03("roadmap.emptyTitle")
          }), _0xb2214f.jsx("p", {
            className: "text-sm text-black/50",
            children: _0x239d03("roadmap.emptyDescription")
          }), _0xb2214f.jsxs(_0x493277, {
            variant: "ghost",
            onClick: () => {
              _0x3d6843("all");
              _0x53f139("all");
              _0x28f236("");
            },
            className: "text-black/70 hover:bg-black/5 hover:text-black dark:hover:bg-black/5",
            children: [_0xb2214f.jsx(_0x33db8d, {
              icon: "solar:close-circle-bold-duotone",
              className: "size-4"
            }), _0x239d03("roadmap.clear")]
          })]
        })]
      }), _0xb2214f.jsxs("aside", {
        className: "mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/40 sm:flex-row",
        children: [_0xb2214f.jsx("p", {
          className: "max-w-lg",
          children: _0x239d03("roadmap.note")
        }), _0xb2214f.jsxs(_0x3d4eaf, {
          to: "/help-center",
          className: "group inline-flex shrink-0 items-center gap-2 text-white/65 hover:text-white",
          children: [_0x239d03("roadmap.help"), _0xb2214f.jsx(_0x33db8d, {
            icon: "solar:arrow-right-bold-duotone",
            className: "size-3.5 transition-transform duration-300 group-hover:translate-x-1"
          })]
        })]
      })]
    }), _0xb2214f.jsx(_0x59e411, {
      open: !!_0x4e4f91,
      onOpenChange: _0x3e93cc => {
        if (!_0x3e93cc) {
          _0x53a457(null);
        }
      },
      children: _0x4e4f91 && _0xb2214f.jsxs(_0x4a7b72, {
        showCloseButton: false,
        className: "gap-6 overflow-y-auto border-black/10 bg-[#fafbf8] text-[#191b17] shadow-none backdrop-blur-none",
        children: [_0xb2214f.jsx(_0xea8c27, {
          asChild: true,
          children: _0xb2214f.jsx(_0x493277, {
            "data-slot": "dialog-close",
            variant: "ghost",
            size: "icon",
            "aria-label": _0x239d03("common.close"),
            className: "absolute right-3 top-3 rounded-full text-black/50 hover:bg-[#e8ecdf] hover:text-black dark:hover:bg-[#e8ecdf]",
            children: _0xb2214f.jsx(_0x33db8d, {
              icon: "solar:close-circle-bold-duotone",
              className: "size-5"
            })
          })
        }), _0xb2214f.jsxs(_0x1e844d, {
          className: "gap-4 text-left",
          children: [_0xb2214f.jsxs("div", {
            className: "flex items-center gap-3 pr-8 text-xs",
            children: [_0xb2214f.jsx("span", {
              className: y[_0x4e4f91.status],
              children: _0x239d03("roadmap.status." + _0x4e4f91.status)
            }), _0xb2214f.jsx("span", {
              className: "text-black/45",
              children: _0x239d03("roadmap.category." + _0x4e4f91.category)
            })]
          }), _0xb2214f.jsx(_0xa9d32a, {
            className: "text-2xl leading-tight tracking-tight text-[#191b17]",
            children: _0x239d03("roadmap.items." + _0x4e4f91.id + ".title")
          }), _0xb2214f.jsx(_0x6f6f2d, {
            className: "text-sm leading-relaxed text-black/55",
            children: _0x239d03("roadmap.items." + _0x4e4f91.id + ".summary")
          })]
        }), _0xb2214f.jsx("p", {
          className: "text-sm leading-7 text-black/65",
          children: _0x239d03("roadmap.items." + _0x4e4f91.id + ".detail")
        }), _0xb2214f.jsxs("div", {
          className: "flex flex-wrap justify-between gap-3 border-t border-black/10 pt-4 text-xs text-black/45",
          children: [_0xb2214f.jsx("span", {
            children: _0x239d03("roadmap.updated", {
              date: _0x16cf20(_0x4e4f91.date)
            })
          }), _0xb2214f.jsx("span", {
            children: _0x239d03("roadmap.preview")
          })]
        })]
      })
    })]
  });
}
export { C as default };