import { e, d as _0x1aa1de, b as _0x3c5046, f as _0x41037a, r as _0x3c8bc0, j as _0x366690, B as _0x29b531, I as _0x291958, L as _0x204022, s as _0x236237, as as _0x587a21, at as _0x7482e1, au as _0x482f77, av as _0x3eeeaa, aw as _0x2cbd3f, ax as _0x4a0cbe, ay as _0x6093c1, F as _0x1058db, az as _0x40af0d, aA as _0x230476, an as _0x5e4635 } from "./index-cQfEKR1W.js";
import { A as _0x93cf08, a as _0x1bea09, b as _0x3f4eff } from "./avatar-C-4BWxT3.js";
import { C } from "./ConfirmDialog-B4gIndKy.js";
const k = {
  tr: {
    flag: "🇹🇷",
    label: "Türkçe"
  },
  en: {
    flag: "🇬🇧",
    label: "English"
  },
  az: {
    flag: "🇦🇿",
    label: "Azərbaycan"
  },
  uz: {
    flag: "🇺🇿",
    label: "O'zbekcha"
  }
};
function w({
  onMenuClick: _0x374d2b,
  showMobileMenu: _0x2e93fe = false
}) {
  const _0x8f256a = e();
  const _0x497e85 = _0x1aa1de();
  const {
    t: _0x257ddf,
    i18n: _0x167dcf
  } = _0x3c5046();
  const {
    user: _0x27d9e4,
    isAuthenticated: _0xf2cc36,
    logoutAndRedirect: _0x198c65
  } = _0x41037a();
  const _0x323733 = _0x8f256a.pathname.startsWith("/dev/docs");
  const _0x546e1f = _0x8f256a.pathname.startsWith("/dev/applications");
  _0x8f256a.pathname.startsWith("/dev/instances");
  const _0x290dad = _0x27d9e4?.display_name?.charAt(0) || _0x27d9e4?.username?.charAt(0) || "?";
  const _0x247bdd = _0x167dcf.language || "tr";
  const [_0x65755d, _0x17ec1f] = _0x3c8bc0.useState(false);
  const _0x5d5a95 = _0x3c8bc0.useCallback(async () => {
    await _0x198c65();
    _0x17ec1f(false);
  }, [_0x198c65]);
  const _0x1e2f7e = _0x31f36f => {
    _0x167dcf.changeLanguage(_0x31f36f);
    localStorage.setItem("app-language", _0x31f36f);
  };
  return _0x366690.jsxs(_0x366690.Fragment, {
    children: [_0x366690.jsx("header", {
      className: "h-14 border-b border-border-default bg-surface-raised/90 backdrop-blur-xl backdrop-saturate-150",
      children: _0x366690.jsxs("div", {
        className: "flex h-full items-center justify-between px-6",
        children: [_0x366690.jsxs("div", {
          className: "flex items-center gap-6",
          children: [_0x2e93fe && _0x374d2b && _0x366690.jsx(_0x29b531, {
            variant: "ghost",
            size: "icon",
            className: "lg:hidden size-9",
            onClick: _0x374d2b,
            children: _0x366690.jsx(_0x291958, {
              icon: "solar:hamburger-menu-bold-duotone",
              className: "size-5"
            })
          }), _0x366690.jsxs(_0x204022, {
            to: "/dev/applications",
            className: "flex items-end gap-1 select-none",
            children: [_0x366690.jsx("img", {
              src: "/jubbio-logo-32x32.svg",
              alt: "Jubbio",
              className: "size-7"
            }), _0x366690.jsx("span", {
              className: "text-xl leading-[20px] font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent",
              children: ".dev"
            })]
          })]
        }), _0x366690.jsxs("div", {
          className: "flex items-center gap-3",
          children: [_0x366690.jsxs("div", {
            className: "hidden sm:flex items-center gap-1 p-1 max-h-10 rounded-full bg-surface-overlay/50 border border-border-default",
            children: [_0x366690.jsx(_0x204022, {
              to: "/dev/applications",
              className: _0x236237("px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200", _0x546e1f ? "bg-surface-inset text-text-primary shadow-sm" : "text-text-tertiary hover:text-text-secondary"),
              children: _0x257ddf("developer.header.apps")
            }), false, _0x366690.jsx(_0x204022, {
              to: "/dev/docs",
              className: _0x236237("px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200", _0x323733 ? "bg-surface-inset text-text-primary shadow-sm" : "text-text-tertiary hover:text-text-secondary"),
              children: _0x257ddf("developer.header.docs")
            })]
          }), _0xf2cc36 && _0x27d9e4 ? _0x366690.jsxs(_0x587a21, {
            children: [_0x366690.jsx(_0x7482e1, {
              asChild: true,
              children: _0x366690.jsx("button", {
                className: "size-9 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 cursor-pointer transition-opacity hover:opacity-80",
                "aria-label": _0x257ddf("developer.header.userMenu"),
                children: _0x366690.jsxs(_0x93cf08, {
                  className: "size-9",
                  children: [_0x366690.jsx(_0x1bea09, {
                    src: _0x27d9e4.avatar_url || undefined,
                    alt: _0x27d9e4.display_name || _0x27d9e4.username
                  }), _0x366690.jsx(_0x3f4eff, {
                    className: "bg-gradient-to-br from-emerald-500 to-teal-600 text-text-primary text-sm font-semibold",
                    children: _0x290dad.toUpperCase()
                  })]
                })
              })
            }), _0x366690.jsxs(_0x482f77, {
              align: "end",
              sideOffset: 8,
              className: "w-64 z-110",
              children: [_0x366690.jsxs("div", {
                className: "px-4 py-3 mb-1 flex items-center gap-3 relative overflow-hidden",
                children: [_0x27d9e4.banner_url && _0x366690.jsx("div", {
                  className: "absolute inset-0 bg-cover bg-center opacity-20",
                  style: {
                    backgroundImage: "url(" + _0x27d9e4.banner_url + ")"
                  }
                }), _0x366690.jsxs(_0x93cf08, {
                  className: "size-10 relative",
                  children: [_0x366690.jsx(_0x1bea09, {
                    src: _0x27d9e4.avatar_url || undefined,
                    alt: _0x27d9e4.display_name || _0x27d9e4.username
                  }), _0x366690.jsx(_0x3f4eff, {
                    className: "bg-gradient-to-br from-emerald-500 to-teal-600 text-text-primary text-sm font-semibold",
                    children: _0x290dad.toUpperCase()
                  })]
                }), _0x366690.jsxs("div", {
                  className: "flex-1 min-w-0 relative",
                  children: [_0x366690.jsx("p", {
                    className: "text-sm font-medium text-text-secondary truncate",
                    children: _0x27d9e4.display_name || _0x27d9e4.username
                  }), _0x366690.jsxs("p", {
                    className: "text-xs text-text-muted truncate",
                    children: ["@", _0x27d9e4.username]
                  })]
                })]
              }), _0x366690.jsxs(_0x3eeeaa, {
                onClick: () => _0x497e85("/app"),
                children: [_0x366690.jsx(_0x291958, {
                  icon: "solar:user-bold-duotone",
                  className: "size-4"
                }), _0x366690.jsx("span", {
                  className: "flex-1",
                  children: _0x257ddf("developer.header.goToApp")
                })]
              }), _0x366690.jsxs(_0x3eeeaa, {
                onClick: () => _0x497e85("/dev/applications"),
                children: [_0x366690.jsx(_0x291958, {
                  icon: "solar:settings-bold-duotone",
                  className: "size-4"
                }), _0x366690.jsx("span", {
                  className: "flex-1",
                  children: _0x257ddf("developer.header.apps")
                })]
              }), _0x366690.jsx(_0x2cbd3f, {}), _0x366690.jsx("div", {
                className: "px-1 py-1",
                children: _0x366690.jsxs(_0x4a0cbe, {
                  children: [_0x366690.jsxs(_0x6093c1, {
                    hideChevron: true,
                    children: [_0x366690.jsx(_0x291958, {
                      icon: "solar:global-bold-duotone",
                      className: "size-4"
                    }), _0x366690.jsx("span", {
                      className: "flex-1",
                      children: _0x257ddf("developer.header.language")
                    }), _0x366690.jsx("span", {
                      className: "text-base leading-none mr-1",
                      children: k[_0x247bdd].flag
                    }), _0x366690.jsx(_0x1058db, {
                      className: "size-4 text-text-muted"
                    })]
                  }), _0x366690.jsx(_0x40af0d, {
                    sideOffset: 8,
                    className: "w-48",
                    children: _0x230476.map(_0x2b6e24 => {
                      const _0xc6fa6f = k[_0x2b6e24];
                      const _0x5f2ff7 = _0x247bdd === _0x2b6e24;
                      return _0x366690.jsxs(_0x3eeeaa, {
                        onClick: () => _0x1e2f7e(_0x2b6e24),
                        className: _0x236237(_0x5f2ff7 && "bg-surface-inset/40"),
                        children: [_0x366690.jsx("span", {
                          className: "text-base leading-none",
                          children: _0xc6fa6f.flag
                        }), _0x366690.jsx("span", {
                          className: _0x236237("flex-1", _0x5f2ff7 ? "text-emerald-400 font-medium" : ""),
                          children: _0xc6fa6f.label
                        }), _0x5f2ff7 && _0x366690.jsx(_0x5e4635, {
                          className: "size-4 text-emerald-400"
                        })]
                      }, _0x2b6e24);
                    })
                  })]
                })
              }), _0x366690.jsx(_0x2cbd3f, {}), _0x366690.jsx("div", {
                className: "px-1 py-1",
                children: _0x366690.jsxs(_0x3eeeaa, {
                  variant: "destructive",
                  onClick: () => _0x17ec1f(true),
                  children: [_0x366690.jsx(_0x291958, {
                    icon: "solar:logout-2-bold-duotone",
                    className: "size-4"
                  }), _0x366690.jsx("span", {
                    className: "flex-1",
                    children: _0x257ddf("developer.header.logout")
                  })]
                })
              })]
            })]
          }) : _0x366690.jsxs(_0x587a21, {
            children: [_0x366690.jsx(_0x7482e1, {
              asChild: true,
              children: _0x366690.jsx("button", {
                className: "size-9 rounded-full bg-surface-overlay/80 border border-border-default flex items-center justify-center transition-all duration-200 hover:bg-surface-inset/80 hover:border-border-default cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50",
                "aria-label": _0x257ddf("developer.header.login"),
                children: _0x366690.jsx(_0x291958, {
                  icon: "solar:lock-bold-duotone",
                  className: "size-4 text-text-tertiary"
                })
              })
            }), _0x366690.jsxs(_0x482f77, {
              align: "end",
              sideOffset: 8,
              className: "w-56 z-110",
              children: [_0x366690.jsxs(_0x3eeeaa, {
                onClick: () => _0x497e85("/login"),
                children: [_0x366690.jsx(_0x291958, {
                  icon: "solar:lock-bold-duotone",
                  className: "size-4"
                }), _0x366690.jsx("span", {
                  className: "flex-1",
                  children: _0x257ddf("developer.header.login")
                })]
              }), _0x366690.jsx(_0x2cbd3f, {}), _0x366690.jsxs(_0x4a0cbe, {
                children: [_0x366690.jsxs(_0x6093c1, {
                  hideChevron: true,
                  children: [_0x366690.jsx(_0x291958, {
                    icon: "solar:global-bold-duotone",
                    className: "size-4"
                  }), _0x366690.jsx("span", {
                    className: "flex-1",
                    children: _0x257ddf("developer.header.language")
                  }), _0x366690.jsx("span", {
                    className: "text-base leading-none mr-1",
                    children: k[_0x247bdd].flag
                  }), _0x366690.jsx(_0x1058db, {
                    className: "size-4 text-text-muted"
                  })]
                }), _0x366690.jsx(_0x40af0d, {
                  sideOffset: 8,
                  className: "w-48",
                  children: _0x230476.map(_0x8e97e9 => {
                    const _0xe09dd4 = k[_0x8e97e9];
                    const _0x1e016f = _0x247bdd === _0x8e97e9;
                    return _0x366690.jsxs(_0x3eeeaa, {
                      onClick: () => _0x1e2f7e(_0x8e97e9),
                      className: _0x236237(_0x1e016f && "bg-surface-inset/40"),
                      children: [_0x366690.jsx("span", {
                        className: "text-base leading-none",
                        children: _0xe09dd4.flag
                      }), _0x366690.jsx("span", {
                        className: _0x236237("flex-1", _0x1e016f ? "text-emerald-400 font-medium" : ""),
                        children: _0xe09dd4.label
                      }), _0x1e016f && _0x366690.jsx(_0x5e4635, {
                        className: "size-4 text-emerald-400"
                      })]
                    }, _0x8e97e9);
                  })
                })]
              })]
            })]
          })]
        })]
      })
    }), _0x366690.jsx(C, {
      open: _0x65755d,
      onOpenChange: _0x17ec1f,
      onConfirm: _0x5d5a95,
      variant: "danger",
      icon: _0x366690.jsx(_0x291958, {
        icon: "solar:logout-2-bold-duotone",
        className: "size-5 text-red-400"
      }),
      title: _0x257ddf("settings.logoutConfirmTitle"),
      subtitle: _0x257ddf("settings.logoutConfirmSubtitle"),
      description: _0x257ddf("settings.logoutConfirmDesc"),
      confirmText: _0x257ddf("settings.logoutConfirmTitle"),
      cancelText: _0x257ddf("settings.logoutCancel")
    })]
  });
}
export { w as D };