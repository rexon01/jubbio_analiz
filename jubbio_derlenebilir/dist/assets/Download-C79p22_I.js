const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./Silk-Qs7jpmi6.js", "./index-cQfEKR1W.js", "./index-Cm--a4Hl.css", "./react-three-fiber.esm-m4S1SNob.js", "./with-selector-DzPX4d1H.js"]) => i.map(i => d[i]);
import { b as _0x466fab, x as _0x29d367, C as _0x11c1d8, r as _0x3e76f8, j as _0x1640fa, E as _0x5aa3a8, I as _0x4f169a, F as _0x392d4d, L as _0x13aa5a, X as _0x234648, _ as _0x15794b } from "./index-cQfEKR1W.js";
const x = _0x3e76f8.lazy(() => _0x15794b(() => import("./Silk-Qs7jpmi6.js"), __vite__mapDeps([0, 1, 2, 3, 4]), import.meta.url));
const m = "https://cdn.jubbio.com/downloads/v3.7.4";
const p = {
  windows: {
    name: "Windows",
    icon: _0x1640fa.jsx(_0x4f169a, {
      icon: "mdi:microsoft-windows",
      className: "size-7"
    }),
    descriptionKey: "download.platforms.windows.description",
    fileName: "Jubbio-Setup.exe",
    requirementKeys: ["download.platforms.windows.req1", "download.platforms.windows.req2", "download.platforms.windows.req3"],
    gradient: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-500/20"
  },
  macos: {
    name: "macOS",
    icon: _0x1640fa.jsx(_0x4f169a, {
      icon: "mdi:apple",
      className: "size-7"
    }),
    descriptionKey: "download.platforms.macos.description",
    fileName: "Jubbio.dmg",
    requirementKeys: ["download.platforms.macos.req1", "download.platforms.macos.req2", "download.platforms.macos.req3"],
    gradient: "from-zinc-900 to-black",
    iconBg: "bg-black"
  },
  linux: {
    name: "Linux",
    icon: _0x1640fa.jsx(_0x4f169a, {
      icon: "mdi:linux",
      className: "size-10"
    }),
    descriptionKey: "download.platforms.linux.description",
    fileName: "Jubbio.AppImage",
    requirementKeys: ["download.platforms.linux.req1", "download.platforms.linux.req2", "download.platforms.linux.req3"],
    gradient: "from-slate-700 to-slate-800",
    iconBg: "bg-surface-inset/50"
  }
};
const h = {
  android: {
    name: "Android",
    icon: _0x1640fa.jsx(_0x4f169a, {
      icon: "mdi:android",
      className: "size-7"
    }),
    descriptionKey: "download.platforms.android.description",
    fileName: "Jubbio.apk",
    requirementKeys: ["download.platforms.android.req1", "download.platforms.android.req2", "download.platforms.android.req3"],
    gradient: "from-green-500 to-emerald-500",
    iconBg: "bg-green-500/20",
    available: true
  },
  ios: {
    name: "iOS",
    icon: _0x1640fa.jsx(_0x4f169a, {
      icon: "mdi:apple",
      className: "size-7"
    }),
    descriptionKey: "download.platforms.ios.description",
    fileName: "",
    requirementKeys: ["download.platforms.ios.req1", "download.platforms.ios.req2", "download.platforms.ios.req3"],
    gradient: "from-zinc-900 to-black",
    iconBg: "bg-black",
    available: true
  }
};
const b = () => {
  const {
    t: _0x5170a0
  } = _0x466fab();
  const _0x559865 = _0x29d367();
  _0x11c1d8(_0x5170a0("download.pageTitle"), _0x5170a0("download.pageDescription"), "");
  const [_0x10e407, _0x2a547f] = _0x3e76f8.useState("unknown");
  const [_0x432e01, _0xa4948] = _0x3e76f8.useState("windows");
  const [_0x5efe91, _0x2ba7bd] = _0x3e76f8.useState("android");
  const [_0x37d63d, _0x4ebb0f] = _0x3e76f8.useState(false);
  const [_0xe4fdbf, _0x4a7c01] = _0x3e76f8.useState(false);
  _0x3e76f8.useEffect(() => {
    const _0x466a6d = (() => {
      const _0x3917cd = navigator.userAgent.toLowerCase();
      if (/android/i.test(_0x3917cd)) {
        return "android";
      } else if (/iphone|ipad|ipod/i.test(_0x3917cd)) {
        return "ios";
      } else if (_0x3917cd.includes("win")) {
        return "windows";
      } else if (_0x3917cd.includes("mac")) {
        return "macos";
      } else if (_0x3917cd.includes("linux")) {
        return "linux";
      } else {
        return "unknown";
      }
    })();
    const _0x247e92 = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
    _0x2a547f(_0x466a6d);
    _0x4ebb0f(_0x247e92);
    if (_0x247e92) {
      _0x2ba7bd(_0x466a6d === "ios" ? "ios" : "android");
    } else if (_0x466a6d === "windows" || _0x466a6d === "macos" || _0x466a6d === "linux") {
      _0xa4948(_0x466a6d);
    }
  }, []);
  const _0x312794 = p[_0x432e01];
  const _0x5cf92f = h[_0x5efe91];
  if (_0x37d63d) {
    return _0x1640fa.jsx(_0x5aa3a8, {
      accentColor: "#38BDF8",
      children: _0x1640fa.jsxs("div", {
        className: "relative pb-4",
        children: [_0x1640fa.jsxs("section", {
          className: "relative overflow-hidden pt-36 md:pt-44 pb-8",
          children: [_0x559865 && _0x1640fa.jsx("div", {
            className: "absolute inset-0 opacity-50 pointer-events-none",
            style: {
              maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)"
            },
            children: _0x1640fa.jsx(_0x3e76f8.Suspense, {
              fallback: null,
              children: _0x1640fa.jsx(x, {
                speed: 1.8,
                scale: 1.2,
                color: "#1A3D6E",
                noiseIntensity: 1.2,
                rotation: 0.3
              })
            })
          }), _0x1640fa.jsx("div", {
            className: "container relative mx-auto max-w-6xl px-4",
            children: _0x1640fa.jsxs("div", {
              className: "mx-auto max-w-4xl text-center",
              children: [_0x1640fa.jsx("div", {
                className: "mb-4 flex justify-center",
                children: _0x1640fa.jsxs("div", {
                  className: "inline-flex items-center gap-2 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 px-4 py-1.5 text-sm text-[#38BDF8]",
                  children: [_0x1640fa.jsx(_0x4f169a, {
                    icon: "solar:download-bold-duotone",
                    className: "size-4"
                  }), _0x1640fa.jsx("span", {
                    className: "font-medium",
                    children: _0x5170a0("download.badge")
                  })]
                })
              }), _0x1640fa.jsxs("h1", {
                className: "mb-4 text-3xl font-bold text-text-primary tracking-tight",
                children: [_0x1640fa.jsxs("span", {
                  className: "bg-gradient-to-br from-white via-white to-slate-400 bg-clip-text text-transparent",
                  children: [_0x5170a0("download.title"), " "]
                }), _0x1640fa.jsx("span", {
                  className: "bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC] bg-clip-text text-transparent",
                  children: _0x5170a0("download.titleHighlight")
                })]
              }), _0x1640fa.jsx("p", {
                className: "mb-6 max-w-xl mx-auto text-base text-text-tertiary",
                children: _0x5170a0("download.description")
              })]
            })
          })]
        }), _0x1640fa.jsx("section", {
          className: "relative py-4",
          children: _0x1640fa.jsxs("div", {
            className: "container relative mx-auto max-w-4xl px-4",
            children: [_0x1640fa.jsxs("div", {
              className: "mb-6",
              children: [_0x1640fa.jsxs("div", {
                className: "mb-3",
                children: [_0x1640fa.jsx("div", {
                  className: "text-sm font-semibold text-text-secondary",
                  children: _0x5170a0("download.recommended")
                }), _0x1640fa.jsx("p", {
                  className: "text-xs text-text-muted mt-0.5",
                  children: _0x5170a0("download.recommendedDescMobile")
                })]
              }), _0x5cf92f.available ? _0x1640fa.jsxs("div", {
                className: "rounded-2xl bg-surface-overlay/50 border border-border-default overflow-hidden backdrop-blur-xl shadow-lg",
                children: [_0x1640fa.jsx("a", {
                  href: _0x5efe91 === "android" ? "https://play.google.com/store/apps/details?id=com.jubbio.app" : "https://apps.apple.com/tr/app/jubbio/id6757996237",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "w-full flex items-center justify-center px-4 py-4",
                  children: _0x1640fa.jsx("img", {
                    src: _0x5efe91 === "android" ? "/app-download-icons/download-from-playstore.png" : "/app-download-icons/download-from-appstore.svg",
                    alt: _0x5efe91 === "android" ? "Google Play" : "App Store",
                    className: "h-14 w-auto transition-transform hover:scale-105",
                    loading: "eager",
                    fetchPriority: "high"
                  })
                }), _0x1640fa.jsx("div", {
                  className: "px-4 py-3 border-t border-border-default bg-surface-overlay/30",
                  children: _0x1640fa.jsx("div", {
                    className: "flex flex-wrap gap-x-4 gap-y-1",
                    children: _0x5cf92f.requirementKeys.map((_0x39ecda, _0x313494) => _0x1640fa.jsxs("div", {
                      className: "flex items-center gap-1.5 text-xs text-text-tertiary",
                      children: [_0x1640fa.jsx(_0x4f169a, {
                        icon: "solar:check-circle-bold-duotone",
                        className: "size-3 text-accent-primary-text"
                      }), _0x5170a0(_0x39ecda)]
                    }, _0x313494))
                  })
                })]
              }) : _0x1640fa.jsxs("div", {
                className: "rounded-2xl bg-surface-overlay/50 border border-border-default overflow-hidden backdrop-blur-xl shadow-lg",
                children: [_0x1640fa.jsxs("div", {
                  className: "w-full flex items-center gap-4 px-4 py-4 text-left",
                  children: [_0x1640fa.jsx("span", {
                    className: "flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br " + _0x5cf92f.gradient + " text-text-primary shadow-lg opacity-50",
                    children: _0x5cf92f.icon
                  }), _0x1640fa.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [_0x1640fa.jsx("div", {
                      className: "flex items-center gap-2",
                      children: _0x1640fa.jsx("span", {
                        className: "text-base font-semibold text-text-tertiary",
                        children: _0x5170a0("download.downloadFor", {
                          platform: _0x5cf92f.name
                        })
                      })
                    }), _0x1640fa.jsx("div", {
                      className: "text-sm text-text-muted mt-0.5",
                      children: _0x5170a0(_0x5cf92f.descriptionKey)
                    })]
                  }), _0x1640fa.jsx("span", {
                    className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-surface-inset text-text-muted shadow-lg",
                    children: _0x1640fa.jsx(_0x4f169a, {
                      icon: "solar:download-bold-duotone",
                      className: "size-5"
                    })
                  })]
                }), _0x1640fa.jsx("div", {
                  className: "px-4 py-3 border-t border-border-default bg-amber-500/10",
                  children: _0x1640fa.jsxs("div", {
                    className: "flex items-start gap-2",
                    children: [_0x1640fa.jsx("svg", {
                      className: "size-4 text-amber-400 shrink-0 mt-0.5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: _0x1640fa.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      })
                    }), _0x1640fa.jsx("p", {
                      className: "text-xs text-amber-200/80 leading-relaxed",
                      children: _0x5170a0("download.iosWarning")
                    })]
                  })
                })]
              })]
            }), _0x1640fa.jsxs("div", {
              className: "mb-6",
              children: [_0x1640fa.jsx("div", {
                className: "mb-3",
                children: _0x1640fa.jsx("div", {
                  className: "text-sm font-semibold text-text-secondary",
                  children: _0x5170a0("download.otherPlatform")
                })
              }), _0x1640fa.jsx("div", {
                className: "rounded-2xl bg-surface-raised/40 border border-border-default overflow-hidden backdrop-blur-xl shadow-lg",
                children: _0x1640fa.jsxs("button", {
                  onClick: () => _0x2ba7bd(_0x5efe91 === "android" ? "ios" : "android"),
                  className: "w-full flex items-center gap-4 px-4 py-3 text-left cursor-pointer hover:bg-interactive-hover active:bg-surface-overlay transition-colors",
                  children: [_0x1640fa.jsx("span", {
                    className: "flex size-10 shrink-0 items-center justify-center rounded-xl " + (_0x5efe91 === "android" ? h.ios.iconBg : h.android.iconBg) + " backdrop-blur-sm text-text-primary",
                    children: _0x5efe91 === "android" ? h.ios.icon : h.android.icon
                  }), _0x1640fa.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [_0x1640fa.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [_0x1640fa.jsx("span", {
                        className: "text-sm font-medium text-text-secondary",
                        children: _0x5efe91 === "android" ? "iOS" : "Android"
                      }), (_0x10e407 === "ios" && _0x5efe91 === "android" || _0x10e407 === "android" && _0x5efe91 === "ios") && _0x1640fa.jsx("span", {
                        className: "px-1.5 py-0.5 text-[10px] font-medium rounded bg-surface-inset/70 text-text-tertiary",
                        children: _0x5170a0("download.yourDevice")
                      })]
                    }), _0x1640fa.jsx("div", {
                      className: "text-xs text-text-tertiary mt-0.5",
                      children: _0x5170a0(_0x5efe91 === "android" ? h.ios.descriptionKey : h.android.descriptionKey)
                    })]
                  }), _0x1640fa.jsx(_0x392d4d, {
                    className: "size-4 text-text-muted"
                  })]
                })
              })]
            }), _0x1640fa.jsxs("div", {
              children: [_0x1640fa.jsxs("div", {
                className: "mb-3",
                children: [_0x1640fa.jsx("div", {
                  className: "text-sm font-semibold text-text-secondary",
                  children: _0x5170a0("download.alternative")
                }), _0x1640fa.jsx("p", {
                  className: "text-xs text-text-muted mt-0.5",
                  children: _0x5170a0("download.alternativeDesc")
                })]
              }), _0x1640fa.jsxs("div", {
                className: "rounded-2xl bg-surface-raised/40 border border-border-default overflow-hidden backdrop-blur-xl shadow-lg",
                children: [_0x1640fa.jsxs(_0x13aa5a, {
                  to: "/app",
                  className: "w-full flex items-center gap-4 px-4 py-3 text-left cursor-pointer hover:bg-interactive-hover active:bg-surface-overlay transition-colors",
                  children: [_0x1640fa.jsx("span", {
                    className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20",
                    children: _0x1640fa.jsx("svg", {
                      className: "size-5 text-emerald-400",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: _0x1640fa.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      })
                    })
                  }), _0x1640fa.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [_0x1640fa.jsx("div", {
                      className: "text-sm font-medium text-text-secondary",
                      children: _0x5170a0("download.webApp")
                    }), _0x1640fa.jsx("div", {
                      className: "text-xs text-text-tertiary mt-0.5",
                      children: _0x5170a0("download.webAppDesc")
                    })]
                  }), _0x1640fa.jsx(_0x392d4d, {
                    className: "size-4 text-text-muted"
                  })]
                }), _0x1640fa.jsx("div", {
                  className: "px-4 py-2.5 border-t border-border-default bg-amber-500/5",
                  children: _0x1640fa.jsxs("div", {
                    className: "flex items-start gap-2",
                    children: [_0x1640fa.jsx("svg", {
                      className: "size-3.5 text-amber-400 shrink-0 mt-0.5",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: _0x1640fa.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      })
                    }), _0x1640fa.jsx("p", {
                      className: "text-[11px] text-amber-200/70 leading-relaxed",
                      children: _0x5170a0("download.mobileWarning")
                    })]
                  })
                })]
              })]
            })]
          })
        })]
      })
    });
  }
  const _0x282b7e = _0x312794;
  return _0x1640fa.jsx(_0x5aa3a8, {
    accentColor: "#38BDF8",
    children: _0x1640fa.jsxs("div", {
      className: "relative pb-20",
      children: [_0x1640fa.jsxs("section", {
        className: "relative overflow-hidden pt-36 md:pt-44 pb-12",
        children: [_0x559865 && _0x1640fa.jsx("div", {
          className: "absolute inset-0 opacity-50 pointer-events-none",
          style: {
            maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)"
          },
          children: _0x1640fa.jsx(_0x3e76f8.Suspense, {
            fallback: null,
            children: _0x1640fa.jsx(x, {
              speed: 1.8,
              scale: 1.2,
              color: "#1A3D6E",
              noiseIntensity: 1.2,
              rotation: 0.3
            })
          })
        }), _0x1640fa.jsx("div", {
          className: "container relative mx-auto max-w-6xl px-4",
          children: _0x1640fa.jsxs("div", {
            className: "mx-auto max-w-4xl text-center",
            children: [_0x1640fa.jsx("div", {
              className: "mb-6 flex justify-center",
              children: _0x1640fa.jsxs("div", {
                className: "inline-flex items-center gap-2 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 px-4 py-1.5 text-sm text-[#38BDF8]",
                children: [_0x1640fa.jsx(_0x4f169a, {
                  icon: "solar:download-bold-duotone",
                  className: "size-4"
                }), _0x1640fa.jsx("span", {
                  className: "font-medium",
                  children: _0x5170a0("download.badge")
                })]
              })
            }), _0x1640fa.jsxs("h1", {
              className: "mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight",
              children: [_0x1640fa.jsxs("span", {
                className: "bg-gradient-to-br from-white via-white to-slate-400 bg-clip-text text-transparent",
                children: [_0x5170a0("download.title"), " "]
              }), _0x1640fa.jsx("span", {
                className: "bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC] bg-clip-text text-transparent",
                children: _0x5170a0("download.titleHighlight")
              })]
            }), _0x1640fa.jsx("p", {
              className: "mb-8 max-w-xl mx-auto text-lg text-text-tertiary",
              children: _0x5170a0("download.descriptionDesktop")
            })]
          })
        })]
      }), _0x1640fa.jsx("section", {
        className: "relative py-8 pb-32",
        children: _0x1640fa.jsxs("div", {
          className: "container relative mx-auto max-w-4xl px-4",
          children: [_0x282b7e && _0x1640fa.jsxs("div", {
            className: "mb-8",
            children: [_0x1640fa.jsxs("div", {
              className: "mb-4",
              children: [_0x1640fa.jsx("div", {
                className: "text-sm font-semibold text-text-secondary",
                children: _0x5170a0("download.recommended")
              }), _0x1640fa.jsx("p", {
                className: "text-xs text-text-muted mt-0.5",
                children: _0x5170a0("download.recommendedDescDesktop")
              })]
            }), _0x1640fa.jsxs("div", {
              className: "rounded-2xl bg-surface-overlay/50 border border-border-default overflow-hidden backdrop-blur-xl shadow-lg hover:bg-interactive-active transition-colors",
              children: [_0x432e01 === "windows" ? _0x1640fa.jsxs("button", {
                onClick: () => _0x4a7c01(true),
                className: "w-full flex items-center gap-4 px-5 py-5 text-left cursor-pointer",
                children: [_0x1640fa.jsx("span", {
                  className: "flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br " + _0x282b7e.gradient + " text-text-primary shadow-lg",
                  children: _0x282b7e.icon
                }), _0x1640fa.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [_0x1640fa.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [_0x1640fa.jsx("span", {
                      className: "text-lg font-semibold text-text-primary",
                      children: _0x5170a0("download.downloadFor", {
                        platform: _0x282b7e.name
                      })
                    }), _0x10e407 === _0x432e01 && _0x1640fa.jsx("span", {
                      className: "px-2.5 py-1 text-xs font-medium rounded-full bg-accent-subtle text-accent-primary-text backdrop-blur-sm",
                      children: _0x5170a0("download.detected")
                    })]
                  }), _0x1640fa.jsx("div", {
                    className: "text-sm text-text-tertiary mt-1",
                    children: _0x5170a0(_0x282b7e.descriptionKey)
                  })]
                }), _0x1640fa.jsx("span", {
                  className: "flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent-primary text-surface-raised shadow-lg",
                  children: _0x1640fa.jsx(_0x4f169a, {
                    icon: "solar:download-bold-duotone",
                    className: "size-6"
                  })
                })]
              }) : _0x1640fa.jsxs("a", {
                href: m + "/" + _0x282b7e.fileName,
                className: "w-full flex items-center gap-4 px-5 py-5 text-left cursor-pointer",
                children: [_0x1640fa.jsx("span", {
                  className: "flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br " + _0x282b7e.gradient + " text-text-primary shadow-lg",
                  children: _0x282b7e.icon
                }), _0x1640fa.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [_0x1640fa.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [_0x1640fa.jsx("span", {
                      className: "text-lg font-semibold text-text-primary",
                      children: _0x5170a0("download.downloadFor", {
                        platform: _0x282b7e.name
                      })
                    }), _0x10e407 === _0x432e01 && _0x1640fa.jsx("span", {
                      className: "px-2.5 py-1 text-xs font-medium rounded-full bg-accent-subtle text-accent-primary-text backdrop-blur-sm",
                      children: _0x5170a0("download.detected")
                    })]
                  }), _0x1640fa.jsx("div", {
                    className: "text-sm text-text-tertiary mt-1",
                    children: _0x5170a0(_0x282b7e.descriptionKey)
                  })]
                }), _0x1640fa.jsx("span", {
                  className: "flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent-primary text-surface-raised shadow-lg",
                  children: _0x1640fa.jsx(_0x4f169a, {
                    icon: "solar:download-bold-duotone",
                    className: "size-6"
                  })
                })]
              }), _0x1640fa.jsx("div", {
                className: "px-5 py-4 border-t border-border-default bg-surface-overlay/30",
                children: _0x1640fa.jsx("div", {
                  className: "flex flex-wrap gap-x-6 gap-y-2",
                  children: _0x282b7e.requirementKeys.map((_0x305c20, _0x1877fd) => _0x1640fa.jsxs("div", {
                    className: "flex items-center gap-2 text-sm text-text-tertiary",
                    children: [_0x1640fa.jsx(_0x4f169a, {
                      icon: "solar:check-circle-bold-duotone",
                      className: "size-4 text-accent-primary-text"
                    }), _0x5170a0(_0x305c20)]
                  }, _0x1877fd))
                })
              })]
            })]
          }), _0x432e01 === "linux" && _0x1640fa.jsxs("div", {
            className: "mb-8",
            children: [_0x1640fa.jsxs("div", {
              className: "mb-4",
              children: [_0x1640fa.jsx("div", {
                className: "text-sm font-semibold text-text-secondary",
                children: _0x5170a0("download.linuxPackages")
              }), _0x1640fa.jsx("p", {
                className: "text-xs text-text-muted mt-0.5",
                children: _0x5170a0("download.linuxPackagesDesc")
              })]
            }), _0x1640fa.jsxs("div", {
              className: "rounded-2xl bg-surface-raised/40 border border-border-default overflow-hidden divide-y divide-border-default backdrop-blur-xl shadow-lg",
              children: [_0x1640fa.jsxs("a", {
                href: m + "/Jubbio.deb",
                className: "w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer hover:bg-interactive-hover active:bg-surface-overlay transition-colors",
                children: [_0x1640fa.jsx("span", {
                  className: "flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#A80030]/20 backdrop-blur-sm",
                  children: _0x1640fa.jsx(_0x4f169a, {
                    icon: "mdi:debian",
                    className: "size-6 text-[#A80030]"
                  })
                }), _0x1640fa.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [_0x1640fa.jsx("div", {
                    className: "text-base font-medium text-text-secondary",
                    children: _0x5170a0("download.debPackage")
                  }), _0x1640fa.jsx("div", {
                    className: "text-sm text-text-tertiary mt-0.5",
                    children: _0x5170a0("download.debPackageDesc")
                  })]
                }), _0x1640fa.jsx(_0x4f169a, {
                  icon: "solar:download-bold-duotone",
                  className: "size-5 text-text-tertiary"
                })]
              }), _0x1640fa.jsxs("a", {
                href: m + "/Jubbio.rpm",
                className: "w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer hover:bg-interactive-hover active:bg-surface-overlay transition-colors",
                children: [_0x1640fa.jsx("span", {
                  className: "flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#5D9FD7]/20 backdrop-blur-sm",
                  children: _0x1640fa.jsx(_0x4f169a, {
                    icon: "mdi:fedora",
                    className: "size-6 text-[#5D9FD7]"
                  })
                }), _0x1640fa.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [_0x1640fa.jsx("div", {
                    className: "text-base font-medium text-text-secondary",
                    children: _0x5170a0("download.rpmPackage")
                  }), _0x1640fa.jsx("div", {
                    className: "text-sm text-text-tertiary mt-0.5",
                    children: _0x5170a0("download.rpmPackageDesc")
                  })]
                }), _0x1640fa.jsx(_0x4f169a, {
                  icon: "solar:download-bold-duotone",
                  className: "size-5 text-text-tertiary"
                })]
              }), _0x1640fa.jsxs("a", {
                href: m + "/Jubbio.AppImage",
                className: "w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer hover:bg-interactive-hover active:bg-surface-overlay transition-colors",
                children: [_0x1640fa.jsx("span", {
                  className: "flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#6893af]/20 backdrop-blur-sm",
                  children: _0x1640fa.jsx(_0x4f169a, {
                    icon: "simple-icons:appimage",
                    className: "size-6 text-[#6893af]"
                  })
                }), _0x1640fa.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [_0x1640fa.jsx("div", {
                    className: "text-base font-medium text-text-secondary",
                    children: _0x5170a0("download.appImage")
                  }), _0x1640fa.jsx("div", {
                    className: "text-sm text-text-tertiary mt-0.5",
                    children: _0x5170a0("download.appImageDesc")
                  })]
                }), _0x1640fa.jsx(_0x4f169a, {
                  icon: "solar:download-bold-duotone",
                  className: "size-5 text-text-tertiary"
                })]
              })]
            })]
          }), _0x1640fa.jsxs("div", {
            className: "mb-8",
            children: [_0x1640fa.jsxs("div", {
              className: "mb-4",
              children: [_0x1640fa.jsx("div", {
                className: "text-sm font-semibold text-text-secondary",
                children: _0x5170a0("download.otherPlatforms")
              }), _0x1640fa.jsx("p", {
                className: "text-xs text-text-muted mt-0.5",
                children: _0x5170a0("download.otherPlatformsDesc")
              })]
            }), _0x1640fa.jsx("div", {
              className: "rounded-2xl bg-surface-raised/40 border border-border-default overflow-hidden divide-y divide-border-default backdrop-blur-xl shadow-lg",
              children: ["windows", "macos", "linux"].filter(_0x30afc2 => _0x30afc2 !== _0x432e01).map(_0x36f8de => {
                const _0x5ae5ae = p[_0x36f8de];
                const _0x41c9a0 = _0x36f8de === _0x10e407;
                return _0x1640fa.jsxs("button", {
                  onClick: () => _0xa4948(_0x36f8de),
                  className: "w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer hover:bg-interactive-hover active:bg-surface-overlay transition-colors",
                  children: [_0x1640fa.jsx("span", {
                    className: "flex size-12 shrink-0 items-center justify-center rounded-xl " + _0x5ae5ae.iconBg + " backdrop-blur-sm text-text-primary",
                    children: _0x5ae5ae.icon
                  }), _0x1640fa.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [_0x1640fa.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [_0x1640fa.jsx("span", {
                        className: "text-base font-medium text-text-secondary",
                        children: _0x5ae5ae.name
                      }), _0x41c9a0 && _0x1640fa.jsx("span", {
                        className: "px-2 py-0.5 text-xs font-medium rounded bg-surface-inset/70 text-text-tertiary backdrop-blur-sm",
                        children: _0x5170a0("download.yourSystem")
                      })]
                    }), _0x1640fa.jsx("div", {
                      className: "text-sm text-text-tertiary mt-0.5",
                      children: _0x5170a0(_0x5ae5ae.descriptionKey)
                    })]
                  }), _0x1640fa.jsx(_0x392d4d, {
                    className: "size-5 text-text-muted"
                  })]
                }, _0x36f8de);
              })
            })]
          }), _0x1640fa.jsxs("div", {
            children: [_0x1640fa.jsxs("div", {
              className: "mb-4",
              children: [_0x1640fa.jsx("div", {
                className: "text-sm font-semibold text-text-secondary",
                children: _0x5170a0("download.alternative")
              }), _0x1640fa.jsx("p", {
                className: "text-xs text-text-muted mt-0.5",
                children: _0x5170a0("download.alternativeDesc")
              })]
            }), _0x1640fa.jsx("div", {
              className: "rounded-2xl bg-surface-raised/40 border border-border-default overflow-hidden backdrop-blur-xl shadow-lg",
              children: _0x1640fa.jsxs(_0x13aa5a, {
                to: "/app",
                className: "w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer hover:bg-interactive-hover active:bg-surface-overlay transition-colors",
                children: [_0x1640fa.jsx("span", {
                  className: "flex size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20",
                  children: _0x1640fa.jsx("svg", {
                    className: "size-5 text-emerald-400",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: _0x1640fa.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    })
                  })
                }), _0x1640fa.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [_0x1640fa.jsx("div", {
                    className: "text-base font-medium text-text-secondary",
                    children: _0x5170a0("download.webApp")
                  }), _0x1640fa.jsx("div", {
                    className: "text-sm text-text-tertiary mt-0.5",
                    children: _0x5170a0("download.webAppDesc")
                  })]
                }), _0x1640fa.jsx(_0x392d4d, {
                  className: "size-5 text-text-muted"
                })]
              })
            })]
          })]
        })
      }), _0xe4fdbf && _0x1640fa.jsxs("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4",
        children: [_0x1640fa.jsx("div", {
          className: "absolute inset-0 bg-black/70 backdrop-blur-sm",
          onClick: () => _0x4a7c01(false)
        }), _0x1640fa.jsxs("div", {
          className: "relative w-full max-w-lg rounded-2xl bg-surface-raised border border-border-default shadow-2xl overflow-hidden",
          children: [_0x1640fa.jsxs("div", {
            className: "flex items-center justify-between px-6 py-4 border-b border-border-default",
            children: [_0x1640fa.jsxs("div", {
              className: "flex items-center gap-3",
              children: [_0x1640fa.jsx("span", {
                className: "flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-text-primary shadow-lg",
                children: _0x1640fa.jsx(_0x4f169a, {
                  icon: "mdi:microsoft-windows",
                  className: "size-5"
                })
              }), _0x1640fa.jsxs("div", {
                children: [_0x1640fa.jsx("h2", {
                  className: "text-lg font-semibold text-text-primary",
                  children: _0x5170a0("download.windowsModalTitle")
                }), _0x1640fa.jsx("p", {
                  className: "text-xs text-text-tertiary",
                  children: _0x5170a0("download.windowsModalDesc")
                })]
              })]
            }), _0x1640fa.jsx("button", {
              onClick: () => _0x4a7c01(false),
              className: "flex size-8 items-center justify-center rounded-lg hover:bg-interactive-hover transition-colors text-text-tertiary hover:text-text-primary cursor-pointer",
              children: _0x1640fa.jsx(_0x234648, {
                className: "size-5"
              })
            })]
          }), _0x1640fa.jsxs("div", {
            className: "p-6 space-y-4",
            children: [_0x1640fa.jsxs("a", {
              href: "https://apps.microsoft.com/detail/9NGG0XLCSZPD?hl=tr-tr&gl=TR",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center gap-4 rounded-xl bg-surface-overlay/70 border border-border-default px-4 py-4 hover:bg-interactive-hover transition-colors group",
              children: [_0x1640fa.jsx("span", {
                className: "flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/20",
                children: _0x1640fa.jsx("svg", {
                  className: "size-6 text-blue-400",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  children: _0x1640fa.jsx("path", {
                    d: "M11.4 2H2v9.4h9.4V2zM22 2h-9.4v9.4H22V2zM11.4 12.6H2V22h9.4v-9.4zM22 12.6h-9.4V22H22v-9.4z"
                  })
                })
              }), _0x1640fa.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [_0x1640fa.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [_0x1640fa.jsx("span", {
                    className: "text-base font-medium text-text-primary",
                    children: _0x5170a0("download.microsoftStore")
                  }), _0x1640fa.jsx("span", {
                    className: "px-2 py-0.5 text-[10px] font-medium rounded-full bg-accent-subtle text-accent-primary-text",
                    children: _0x5170a0("download.recommended")
                  })]
                }), _0x1640fa.jsx("p", {
                  className: "text-sm text-text-tertiary mt-0.5",
                  children: _0x5170a0("download.microsoftStoreDesc")
                })]
              }), _0x1640fa.jsx(_0x4f169a, {
                icon: "solar:square-arrow-right-up-bold-duotone",
                className: "size-5 text-text-muted group-hover:text-text-secondary transition-colors"
              })]
            }), _0x1640fa.jsxs("div", {
              className: "flex items-center gap-3",
              children: [_0x1640fa.jsx("div", {
                className: "flex-1 h-px bg-surface-inset/50"
              }), _0x1640fa.jsx("span", {
                className: "text-xs text-text-muted font-medium",
                children: _0x5170a0("download.or")
              }), _0x1640fa.jsx("div", {
                className: "flex-1 h-px bg-surface-inset/50"
              })]
            }), _0x1640fa.jsxs("div", {
              className: "rounded-xl bg-surface-overlay/70 border border-border-default overflow-hidden",
              children: [_0x1640fa.jsxs("a", {
                href: m + "/" + p.windows.fileName,
                className: "flex items-center gap-4 px-4 py-4 hover:bg-interactive-hover transition-colors group",
                children: [_0x1640fa.jsx("span", {
                  className: "flex size-12 shrink-0 items-center justify-center rounded-xl bg-surface-inset/50",
                  children: _0x1640fa.jsx(_0x4f169a, {
                    icon: "solar:download-bold-duotone",
                    className: "size-6 text-text-secondary"
                  })
                }), _0x1640fa.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [_0x1640fa.jsx("span", {
                    className: "text-base font-medium text-text-primary",
                    children: _0x5170a0("download.installerExe")
                  }), _0x1640fa.jsx("p", {
                    className: "text-sm text-text-tertiary mt-0.5",
                    children: _0x5170a0("download.installerExeDesc")
                  })]
                }), _0x1640fa.jsx(_0x4f169a, {
                  icon: "solar:download-bold-duotone",
                  className: "size-5 text-text-muted group-hover:text-text-secondary transition-colors"
                })]
              }), _0x1640fa.jsx("div", {
                className: "px-4 py-3 border-t border-border-default bg-surface-overlay/50",
                children: _0x1640fa.jsxs("div", {
                  className: "flex items-start gap-3",
                  children: [_0x1640fa.jsx(_0x4f169a, {
                    icon: "solar:shield-warning-bold-duotone",
                    className: "size-5 text-text-tertiary shrink-0 mt-0.5"
                  }), _0x1640fa.jsxs("div", {
                    className: "space-y-2",
                    children: [_0x1640fa.jsx("p", {
                      className: "text-sm font-medium text-text-secondary",
                      children: _0x5170a0("download.smartScreenTitle")
                    }), _0x1640fa.jsx("p", {
                      className: "text-xs text-text-tertiary leading-relaxed",
                      children: _0x5170a0("download.smartScreenDesc", {
                        protectedText: _0x5170a0("download.smartScreenProtectedText")
                      })
                    }), _0x1640fa.jsx("p", {
                      className: "text-xs text-text-tertiary leading-relaxed",
                      children: _0x5170a0("download.smartScreenReason")
                    }), _0x1640fa.jsx("p", {
                      className: "text-xs text-text-secondary font-medium",
                      children: _0x5170a0("download.smartScreenBypass")
                    }), _0x1640fa.jsxs("ol", {
                      className: "text-xs text-text-tertiary leading-relaxed space-y-1.5 list-none",
                      children: [_0x1640fa.jsxs("li", {
                        className: "flex items-start gap-2",
                        children: [_0x1640fa.jsx("span", {
                          className: "flex size-5 shrink-0 items-center justify-center rounded-full bg-surface-inset/70 text-[10px] font-semibold text-text-secondary mt-0.5",
                          children: "1"
                        }), _0x1640fa.jsx("span", {
                          children: _0x5170a0("download.smartScreenStep1", {
                            screen: _0x5170a0("download.smartScreenStep1Screen"),
                            action: _0x5170a0("download.smartScreenStep1Action")
                          })
                        })]
                      }), _0x1640fa.jsxs("li", {
                        className: "flex items-start gap-2",
                        children: [_0x1640fa.jsx("span", {
                          className: "flex size-5 shrink-0 items-center justify-center rounded-full bg-surface-inset/70 text-[10px] font-semibold text-text-secondary mt-0.5",
                          children: "2"
                        }), _0x1640fa.jsx("span", {
                          children: _0x5170a0("download.smartScreenStep2", {
                            action: _0x5170a0("download.smartScreenStep2Action")
                          })
                        })]
                      })]
                    }), _0x1640fa.jsx("p", {
                      className: "text-[11px] text-text-muted leading-relaxed",
                      children: _0x5170a0("download.smartScreenAlt")
                    })]
                  })]
                })
              })]
            })]
          })]
        })]
      })]
    })
  });
};
export { b as default };