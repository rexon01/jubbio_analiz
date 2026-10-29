import { y as _0x5e3425, d as _0x40f96d, b as _0x218491, r, P as _0x32a2e9, j as _0x350570, B as _0xe99a4e, I as _0x4b8bdf, F as _0x8f8a4c, X as _0x5de834, aq as _0x285bb6, ar as _0x35c161, aB as _0x4ad733, s as _0x1ddf46 } from "./index-cQfEKR1W.js";
import { u } from "./developerStore-J5Gy1Hed.js";
import { b } from "./developer-DCtAQT29.js";
import { s as _0x56576c, c as _0x37148b } from "./2fa-BVSDQ2X9.js";
import { A as _0x564ef1, a as _0x59532e, b as _0x13ebcd } from "./avatar-C-4BWxT3.js";
import { I as _0x3e6d65 } from "./input-AMyERYwJ.js";
import { L as _0x4e363c } from "./label-ODyS97Ju.js";
import { I as _0x331655, a as _0x12025e, b as _0x3aee67, c as _0x1b3bb8 } from "./input-otp-BJ3P97wC.js";
import { D as _0x1dfec1, a as _0x459e5b, c as _0x35abe4, d as _0x395b38 } from "./dialog-BMMpM7PR.js";
import { V as _0x59fb48 } from "./index-Oyyh46KT.js";
import { D as _0x2725d7 } from "./DevHeader-WqTblGAC.js";
import { A as _0x5ad303 } from "./arrow-left-B3FhifN2.js";
import "./minus-DgcuZCwQ.js";
import "./index-yuEHo9bu.js";
import "./ConfirmDialog-B4gIndKy.js";
import "./alert-dialog-BZuoGg7O.js";
import "./loader-circle-CTtxa1g9.js";
const E = [{
  titleKey: "developer.nav.general",
  icon: "solar:settings-bold-duotone",
  items: [{
    titleKey: "developer.nav.appInfo",
    href: "",
    icon: "solar:home-2-bold-duotone"
  }]
}, {
  titleKey: "developer.nav.auth",
  icon: "solar:key-bold-duotone",
  items: [{
    titleKey: "OAuth2",
    href: "oauth2",
    icon: "solar:key-bold-duotone"
  }, {
    titleKey: "Bot",
    href: "bot",
    icon: "solar:cpu-bolt-bold-duotone"
  }, {
    titleKey: "GUI Apps",
    href: "gui",
    icon: "solar:widget-bold-duotone"
  }]
}, {
  titleKey: "developer.nav.interactions",
  icon: "solar:bolt-bold-duotone",
  items: [{
    titleKey: "developer.nav.interactionSettings",
    href: "interactions",
    icon: "solar:bolt-bold-duotone"
  }, {
    titleKey: "developer.nav.slashCommands",
    href: "commands",
    icon: "solar:command-bold-duotone"
  }]
}];
function O({
  section: _0x3cb118,
  basePath: _0x7b72b0,
  onItemClick: _0x3bd458
}) {
  const {
    t: _0x5bd605
  } = _0x218491();
  return _0x350570.jsxs("div", {
    className: "mb-4",
    children: [_0x350570.jsx("div", {
      className: "mb-2 px-1",
      children: _0x350570.jsx("span", {
        className: "text-xs font-semibold text-text-tertiary",
        children: _0x5bd605(_0x3cb118.titleKey)
      })
    }), _0x350570.jsx("div", {
      className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden divide-y divide-border-default",
      children: _0x3cb118.items.map(_0x7d68f4 => {
        const _0x3ab6c2 = _0x7d68f4.href ? _0x7b72b0 + "/" + _0x7d68f4.href : _0x7b72b0;
        const _0xe13603 = _0x7d68f4.titleKey.startsWith("developer.") ? _0x5bd605(_0x7d68f4.titleKey) : _0x7d68f4.titleKey;
        return _0x350570.jsx(_0x4ad733, {
          to: _0x3ab6c2,
          end: !_0x7d68f4.href,
          onClick: _0x3bd458,
          className: ({
            isActive: _0x5b4989
          }) => _0x1ddf46("group flex items-center gap-3 px-3 py-2.5 text-left cursor-pointer transition-all duration-200", _0x5b4989 ? "bg-accent-subtle" : "hover:bg-surface-overlay/30 active:bg-surface-overlay/50"),
          children: ({
            isActive: _0x3b1bc7
          }) => _0x350570.jsxs(_0x350570.Fragment, {
            children: [_0x350570.jsx("span", {
              className: _0x1ddf46("flex size-7 shrink-0 items-center justify-center rounded-lg transition-all duration-200", _0x3b1bc7 ? "bg-accent-subtle" : "bg-surface-overlay/50 group-hover:bg-surface-inset/50"),
              children: typeof _0x7d68f4.icon == "string" ? _0x350570.jsx(_0x4b8bdf, {
                icon: _0x7d68f4.icon,
                className: _0x1ddf46("size-3.5 transition-colors duration-200", _0x3b1bc7 ? "text-accent-primary-text" : "text-text-muted group-hover:text-text-secondary")
              }) : (() => {
                const _0x3b68af = _0x7d68f4.icon;
                return _0x350570.jsx(_0x3b68af, {
                  className: _0x1ddf46("size-3.5 transition-colors duration-200", _0x3b1bc7 ? "text-accent-primary-text" : "text-text-muted group-hover:text-text-secondary")
                });
              })()
            }), _0x350570.jsx("span", {
              className: _0x1ddf46("flex-1 text-sm font-medium transition-colors duration-200", _0x3b1bc7 ? "text-accent-primary-text" : "text-text-secondary group-hover:text-text-primary"),
              children: _0xe13603
            }), _0x350570.jsx(_0x8f8a4c, {
              className: _0x1ddf46("size-4 transition-all duration-200", _0x3b1bc7 ? "text-accent-primary-text translate-x-0 opacity-100" : "text-text-muted -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-text-tertiary")
            })]
          })
        }, _0x7d68f4.href);
      })
    })]
  });
}
function P() {
  return _0x350570.jsxs("div", {
    className: "p-4 space-y-4 animate-pulse",
    children: [_0x350570.jsxs("div", {
      className: "flex items-center gap-2 mb-4",
      children: [_0x350570.jsx("div", {
        className: "size-4 rounded bg-surface-overlay"
      }), _0x350570.jsx("div", {
        className: "h-4 w-20 rounded bg-surface-overlay"
      })]
    }), _0x350570.jsxs("div", {
      className: "flex items-center gap-3",
      children: [_0x350570.jsx("div", {
        className: "size-12 rounded-xl bg-surface-overlay"
      }), _0x350570.jsxs("div", {
        className: "flex-1 space-y-2",
        children: [_0x350570.jsx("div", {
          className: "h-4 w-24 rounded bg-surface-overlay"
        }), _0x350570.jsx("div", {
          className: "h-3 w-32 rounded bg-surface-overlay"
        })]
      })]
    }), _0x350570.jsx("div", {
      className: "pt-4 space-y-3",
      children: [1, 2, 3].map(_0x5b0eb3 => _0x350570.jsx("div", {
        className: "h-10 rounded-xl bg-surface-overlay/50"
      }, _0x5b0eb3))
    })]
  });
}
function B({
  open: _0x4c94d0,
  onOpenChange: _0x105c49,
  appId: _0x4b6df3,
  appName: _0xedae6e,
  onDeleted: _0x13b80a
}) {
  const [_0x4f1bd5, _0xfa7c4b] = r.useState("");
  const [_0x380e08, _0x333111] = r.useState("");
  const [_0x15ef73, _0x24e9c8] = r.useState(false);
  const [_0x44bbda, _0x4b0161] = r.useState(false);
  const [_0x4ef99f, _0x18c1f1] = r.useState(false);
  const [_0x226da1, _0x3fa753] = r.useState(0);
  const [_0x2688cf, _0x356c02] = r.useState(false);
  const [_0x4a4abd, _0x56502f] = r.useState(false);
  const [_0x572890, _0x674b3c] = r.useState("");
  const [_0x30ec85, _0x380bcf] = r.useState(null);
  const {
    t: _0x44720d
  } = _0x218491();
  r.useEffect(() => {
    if (_0x4c94d0) {
      (async () => {
        try {
          _0x4b0161(true);
          const _0x265747 = await _0x37148b();
          if (_0x265747.twoFactorEnabled && _0x265747.twoFactorMethod) {
            _0x380bcf(_0x265747.twoFactorMethod);
          }
        } catch {} finally {
          _0x4b0161(false);
        }
      })();
    }
  }, [_0x4c94d0]);
  const _0x2ee65e = r.useCallback(async () => {
    if (!(_0x226da1 > 0)) {
      try {
        _0x18c1f1(true);
        await _0x56576c();
        _0x3fa753(90);
      } catch {} finally {
        _0x18c1f1(false);
      }
    }
  }, [_0x226da1]);
  r.useEffect(() => {
    if (_0x226da1 > 0) {
      const _0x1d64d3 = setTimeout(() => {
        _0x3fa753(_0x226da1 - 1);
      }, 1000);
      return () => clearTimeout(_0x1d64d3);
    }
  }, [_0x226da1]);
  r.useEffect(() => {
    if (_0x4c94d0 && _0x30ec85 === "email") {
      _0x2ee65e();
    }
  }, [_0x4c94d0, _0x30ec85, _0x2ee65e]);
  const _0x29d585 = r.useCallback(() => {
    if (!_0x15ef73 && !_0x44bbda) {
      _0x105c49(false);
      _0xfa7c4b("");
      _0x333111("");
      _0x674b3c("");
      _0x356c02(false);
      _0x56502f(false);
      _0x380bcf(null);
      _0x3fa753(0);
    }
  }, [_0x15ef73, _0x44bbda, _0x105c49]);
  const _0x3818cf = r.useCallback(async () => {
    if (_0x4f1bd5.trim()) {
      if (_0x30ec85) {
        const _0x544286 = _0x4a4abd ? _0x572890 : _0x380e08;
        const _0xa7a26c = _0x4a4abd ? 8 : 6;
        if (!_0x544286 || _0x544286.length !== _0xa7a26c) {
          _0x32a2e9.error(_0x44720d("developer.deleteModal.codeRequired", {
            length: _0xa7a26c,
            type: _0x44720d(_0x4a4abd ? "developer.deleteModal.backupCode" : "developer.deleteModal.verificationCode")
          }));
          return;
        }
      }
      try {
        _0x24e9c8(true);
        const _0x11c4b0 = _0x30ec85 ? _0x4a4abd ? _0x572890 : _0x380e08 : undefined;
        await b(_0x4b6df3, {
          password: _0x4f1bd5,
          twoFactorCode: _0x11c4b0
        });
        _0x29d585();
        _0x13b80a();
      } catch {} finally {
        _0x24e9c8(false);
      }
    } else {
      _0x32a2e9.error(_0x44720d("developer.deleteModal.passwordRequired"));
    }
  }, [_0x4f1bd5, _0x380e08, _0x572890, _0x4a4abd, _0x30ec85, _0x4b6df3, _0x29d585, _0x13b80a]);
  const _0x12a829 = r.useMemo(() => "w-10 h-12 text-lg font-semibold border-border-default bg-surface-inset/50 hover:bg-surface-inset/50 focus:bg-surface-inset/50 focus:border-red-500/50 transition-colors", []);
  const _0x2818bc = r.useMemo(() => "w-12 h-12 text-lg font-semibold border-border-default bg-surface-inset/50 hover:bg-surface-inset/50 focus:bg-surface-inset/50 transition-colors " + (_0x30ec85 === "email" ? "focus:border-green-500/50" : "focus:border-red-500/50"), [_0x30ec85]);
  const _0x1f68c7 = _0x4f1bd5.trim().length > 0 && (!_0x30ec85 || (_0x4a4abd ? _0x572890.length === 8 : _0x380e08.length === 6));
  if (_0x44bbda) {
    return _0x350570.jsx(_0x1dfec1, {
      open: _0x4c94d0,
      onOpenChange: _0x29d585,
      children: _0x350570.jsxs(_0x459e5b, {
        className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md overflow-hidden",
        children: [_0x350570.jsxs(_0x59fb48, {
          children: [_0x350570.jsx(_0x35abe4, {
            children: _0x44720d("developer.deleteModal.title")
          }), _0x350570.jsx(_0x395b38, {
            children: _0x44720d("developer.deleteModal.description")
          })]
        }), _0x350570.jsx("div", {
          className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40",
          children: _0x350570.jsx("div", {
            className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden",
            children: _0x350570.jsxs("div", {
              className: "flex flex-col items-center justify-center py-12",
              children: [_0x350570.jsx("div", {
                className: "size-8 animate-spin rounded-full border-2 border-border-default border-t-red-400"
              }), _0x350570.jsx("p", {
                className: "mt-4 text-sm text-text-tertiary",
                children: _0x44720d("developer.deleteModal.checking")
              })]
            })
          })
        })]
      })
    });
  } else {
    return _0x350570.jsx(_0x1dfec1, {
      open: _0x4c94d0,
      onOpenChange: _0x29d585,
      children: _0x350570.jsxs(_0x459e5b, {
        className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md overflow-hidden",
        children: [_0x350570.jsxs(_0x59fb48, {
          children: [_0x350570.jsx(_0x35abe4, {
            children: _0x44720d("developer.deleteModal.title")
          }), _0x350570.jsx(_0x395b38, {
            children: _0x44720d("developer.deleteModal.description")
          })]
        }), _0x350570.jsx("div", {
          className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40",
          children: _0x350570.jsxs("div", {
            className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col max-h-[85vh]",
            children: [_0x350570.jsxs("div", {
              className: "px-4 py-4 border-b border-border-subtle",
              children: [_0x350570.jsx("h2", {
                className: "text-lg font-semibold text-text-primary",
                children: _0x44720d("developer.deleteModal.title")
              }), _0x350570.jsx("p", {
                className: "text-sm text-text-tertiary mt-1",
                children: _0x44720d("developer.deleteModal.description")
              })]
            }), _0x350570.jsxs("form", {
              onSubmit: _0x5d920d => {
                _0x5d920d.preventDefault();
                _0x3818cf();
              },
              className: "px-4 py-4 space-y-6 overflow-y-auto scrollbar-thin flex-1",
              children: [_0x350570.jsx("input", {
                type: "email",
                autoComplete: "email",
                style: {
                  position: "absolute",
                  left: "-9999px",
                  opacity: 0,
                  pointerEvents: "none"
                },
                tabIndex: -1,
                "aria-hidden": "true"
              }), _0x350570.jsx("div", {
                className: "p-4 rounded-lg border border-blue-500/20 bg-blue-500/10",
                children: _0x350570.jsxs("div", {
                  className: "flex items-start gap-3",
                  children: [_0x350570.jsx("div", {
                    className: "flex items-center justify-center w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30",
                    children: _0x350570.jsx(_0x4b8bdf, {
                      icon: "solar:danger-triangle-bold-duotone",
                      className: "w-4 h-4 text-blue-400"
                    })
                  }), _0x350570.jsxs("div", {
                    className: "flex-1",
                    children: [_0x350570.jsx("h3", {
                      className: "text-sm font-semibold text-blue-200 mb-1",
                      children: _0x44720d("developer.deleteModal.warning")
                    }), _0x350570.jsx("p", {
                      className: "text-xs text-blue-300/80 leading-relaxed",
                      children: _0x44720d("developer.deleteModal.warningDesc")
                    })]
                  })]
                })
              }), _0x350570.jsxs("div", {
                className: "p-3 rounded-lg border border-border-default bg-surface-overlay/30",
                children: [_0x350570.jsx("div", {
                  className: "text-xs text-text-tertiary mb-1",
                  children: _0x44720d("developer.deleteModal.appToDelete")
                }), _0x350570.jsx("div", {
                  className: "text-sm font-medium text-text-secondary",
                  children: _0xedae6e
                })]
              }), _0x350570.jsxs("div", {
                className: "space-y-3",
                children: [_0x350570.jsx(_0x4e363c, {
                  className: "text-sm font-medium text-text-secondary",
                  children: _0x44720d("developer.deleteModal.password")
                }), _0x350570.jsxs("div", {
                  className: "relative",
                  children: [_0x350570.jsx(_0x3e6d65, {
                    type: _0x2688cf ? "text" : "password",
                    value: _0x4f1bd5,
                    onChange: _0x3e550e => _0xfa7c4b(_0x3e550e.target.value),
                    placeholder: _0x44720d("developer.deleteModal.passwordPlaceholder"),
                    className: "pr-10 bg-surface-overlay/40 border-border-default text-text-secondary placeholder:text-text-tertiary focus:border-red-500/50 focus:bg-surface-overlay/60",
                    disabled: _0x15ef73,
                    required: true,
                    autoComplete: "current-password"
                  }), _0x350570.jsx("button", {
                    type: "button",
                    onClick: () => _0x356c02(!_0x2688cf),
                    className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-text-tertiary hover:text-text-secondary transition-colors",
                    disabled: _0x15ef73,
                    children: _0x2688cf ? _0x350570.jsx(_0x4b8bdf, {
                      icon: "solar:eye-closed-bold-duotone",
                      className: "w-4 h-4"
                    }) : _0x350570.jsx(_0x4b8bdf, {
                      icon: "solar:eye-bold-duotone",
                      className: "w-4 h-4"
                    })
                  })]
                })]
              }), _0x30ec85 && _0x350570.jsxs("div", {
                className: "space-y-3",
                children: [_0x350570.jsxs("div", {
                  className: "text-center",
                  children: [_0x350570.jsx(_0x4e363c, {
                    className: "text-sm font-medium text-text-secondary block mb-2",
                    children: _0x44720d(_0x4a4abd ? "developer.deleteModal.backupCodeLabel" : "developer.deleteModal.twoFACode")
                  }), _0x350570.jsx("p", {
                    className: "text-xs text-text-tertiary",
                    children: _0x30ec85 === "totp" ? _0x4a4abd ? _0x350570.jsxs(_0x350570.Fragment, {
                      children: [_0x44720d("developer.deleteModal.backupHint"), " ", _0x350570.jsx("button", {
                        type: "button",
                        onClick: () => {
                          _0x56502f(false);
                          _0x333111("");
                          _0x674b3c("");
                        },
                        className: "text-xs text-text-tertiary hover:text-text-secondary underline transition-colors",
                        children: _0x44720d("developer.deleteModal.useNormalCode")
                      })]
                    }) : _0x350570.jsxs(_0x350570.Fragment, {
                      children: [_0x44720d("developer.deleteModal.totpHint"), " ", _0x350570.jsx("button", {
                        type: "button",
                        onClick: () => {
                          _0x56502f(true);
                          _0x333111("");
                          _0x674b3c("");
                        },
                        className: "text-xs text-text-tertiary hover:text-text-secondary underline transition-colors",
                        children: _0x44720d("developer.deleteModal.useBackupCode")
                      })]
                    }) : _0x350570.jsxs(_0x350570.Fragment, {
                      children: [_0x44720d("developer.deleteModal.emailHint"), " ", _0x350570.jsx("button", {
                        type: "button",
                        onClick: _0x2ee65e,
                        disabled: _0x4ef99f || _0x226da1 > 0,
                        className: "text-xs text-text-tertiary hover:text-text-secondary underline transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                        children: _0x4ef99f ? _0x44720d("developer.deleteModal.sending") : _0x226da1 > 0 ? _0x44720d("developer.deleteModal.resendCountdown", {
                          seconds: _0x226da1
                        }) : _0x44720d("developer.deleteModal.resend")
                      })]
                    })
                  })]
                }), _0x350570.jsx("div", {
                  className: "flex justify-center",
                  children: _0x350570.jsx("div", {
                    className: "bg-surface-overlay/40 border border-border-default rounded-lg p-4",
                    children: _0x4a4abd ? _0x350570.jsxs(_0x331655, {
                      maxLength: 8,
                      value: _0x572890,
                      onChange: _0x674b3c,
                      children: [_0x350570.jsx(_0x12025e, {
                        children: Array.from({
                          length: 4
                        }, (_0x5ce974, _0x365eec) => _0x350570.jsx(_0x3aee67, {
                          index: _0x365eec,
                          className: _0x12a829
                        }, _0x365eec))
                      }), _0x350570.jsx(_0x1b3bb8, {
                        className: "mx-2 text-text-muted"
                      }), _0x350570.jsx(_0x12025e, {
                        children: Array.from({
                          length: 4
                        }, (_0x506de5, _0x3f2d82) => _0x350570.jsx(_0x3aee67, {
                          index: _0x3f2d82 + 4,
                          className: _0x12a829
                        }, _0x3f2d82 + 4))
                      })]
                    }) : _0x350570.jsxs(_0x331655, {
                      maxLength: 6,
                      value: _0x380e08,
                      onChange: _0x333111,
                      children: [_0x350570.jsx(_0x12025e, {
                        children: Array.from({
                          length: 3
                        }, (_0x322ee8, _0xedb16f) => _0x350570.jsx(_0x3aee67, {
                          index: _0xedb16f,
                          className: _0x2818bc
                        }, _0xedb16f))
                      }), _0x350570.jsx(_0x1b3bb8, {
                        className: "mx-2 text-text-muted"
                      }), _0x350570.jsx(_0x12025e, {
                        children: Array.from({
                          length: 3
                        }, (_0x412963, _0x5dcc0b) => _0x350570.jsx(_0x3aee67, {
                          index: _0x5dcc0b + 3,
                          className: _0x2818bc
                        }, _0x5dcc0b + 3))
                      })]
                    })
                  })
                })]
              }), _0x350570.jsxs("div", {
                className: "text-center pt-2",
                children: [_0x350570.jsx("button", {
                  type: "submit",
                  disabled: _0x15ef73 || !_0x1f68c7 || _0x4ef99f,
                  className: "w-full py-3 px-6 bg-red-500/20 border border-red-500/30 text-red-200 rounded-lg hover:bg-red-500/30 hover:border-red-500/50 transition-all duration-200 text-sm font-medium cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed",
                  children: _0x350570.jsxs("div", {
                    className: "flex items-center justify-center gap-2",
                    children: [_0x15ef73 ? _0x350570.jsx("div", {
                      className: "w-4 h-4 border-2 border-red-400 border-t-transparent rounded-full animate-spin"
                    }) : _0x350570.jsx(_0x4b8bdf, {
                      icon: "solar:trash-bin-trash-bold-duotone",
                      className: "size-4 group-hover:scale-110 transition-transform"
                    }), _0x44720d(_0x15ef73 ? "developer.deleteModal.deleting" : _0x4ef99f ? "developer.deleteModal.sendingCode" : "developer.deleteModal.deleteButton")]
                  })
                }), _0x350570.jsx("p", {
                  className: "text-xs text-text-muted mt-2",
                  children: _0x44720d("developer.deleteModal.irreversible")
                })]
              })]
            })]
          })
        })]
      })
    });
  }
}
function L() {
  const {
    appId: _0x4601c1
  } = _0x5e3425();
  const _0x52e6a1 = _0x40f96d();
  const {
    t: _0x5c5c2d
  } = _0x218491();
  const {
    currentApplication: _0x5cf696,
    fetchApplication: _0x700128,
    isLoadingApp: _0x4d82f9,
    clearCurrentApplication: _0x3da796,
    removeApplication: _0x26e107
  } = u();
  const [_0x43eeee, _0x76e156] = r.useState(false);
  const [_0x906392, _0x554607] = r.useState(false);
  const [_0x28adf9, _0x456489] = r.useState(null);
  r.useEffect(() => {
    if (_0x4601c1) {
      _0x456489(null);
      _0x700128(_0x4601c1).catch(_0x4ecf05 => {
        const _0x548ee4 = _0x4ecf05?.response?.status;
        if (_0x548ee4 === 403 || _0x548ee4 === 404) {
          _0x456489(_0x5c5c2d("developer.detail.noAccess"));
          _0x32a2e9.error(_0x5c5c2d("developer.detail.noAccess"));
          setTimeout(() => _0x52e6a1("/dev/applications"), 1500);
        }
      });
    }
    return () => _0x3da796();
  }, [_0x4601c1, _0x700128, _0x3da796, _0x52e6a1, _0x5c5c2d]);
  const _0x1c2848 = "/dev/applications/" + _0x4601c1;
  const _0x6fb997 = r.useCallback(() => {
    if (_0x4601c1) {
      _0x26e107(_0x4601c1);
    }
    _0x52e6a1("/dev/applications");
  }, [_0x4601c1, _0x26e107, _0x52e6a1]);
  if (_0x4d82f9 || _0x5cf696 && !_0x28adf9) {
    return _0x350570.jsxs("div", {
      className: "h-screen flex flex-col bg-surface-base overflow-hidden",
      children: [_0x350570.jsx(_0x2725d7, {
        showMobileMenu: true,
        onMenuClick: () => _0x76e156(true)
      }), _0x350570.jsxs("div", {
        className: "flex flex-1 overflow-hidden",
        children: [_0x350570.jsx("aside", {
          className: "hidden lg:flex lg:w-72 lg:flex-col border-r border-border-default bg-surface-base",
          children: _0x4d82f9 ? _0x350570.jsx(P, {}) : _0x350570.jsxs(_0x350570.Fragment, {
            children: [_0x350570.jsxs("div", {
              className: "p-4 border-b border-border-default",
              children: [_0x350570.jsxs("button", {
                onClick: () => _0x52e6a1("/dev/applications"),
                className: "flex items-center gap-2 text-sm text-text-tertiary hover:text-text-secondary transition-colors mb-4",
                children: [_0x350570.jsx(_0x5ad303, {
                  className: "size-4"
                }), _0x5c5c2d("developer.detail.apps")]
              }), _0x350570.jsxs("div", {
                className: "flex items-center gap-3",
                children: [_0x350570.jsx(_0x564ef1, {
                  className: "size-12 rounded-xl shrink-0",
                  children: _0x5cf696?.avatar_url ? _0x350570.jsx(_0x59532e, {
                    src: _0x5cf696.avatar_url,
                    alt: _0x5cf696.name
                  }) : _0x350570.jsx(_0x13ebcd, {
                    className: "rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 text-text-secondary text-lg font-semibold",
                    children: _0x5cf696?.name?.charAt(0)?.toUpperCase() || "?"
                  })
                }), _0x350570.jsxs("div", {
                  className: "min-w-0",
                  children: [_0x350570.jsx("h2", {
                    className: "font-semibold text-text-primary truncate",
                    children: _0x5cf696?.name || _0x5c5c2d("developer.detail.loading")
                  }), _0x350570.jsx("p", {
                    className: "text-xs text-text-muted truncate font-mono",
                    children: _0x5cf696?.id
                  })]
                })]
              })]
            }), _0x350570.jsxs("nav", {
              className: "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent px-3 py-4",
              children: [E.map(_0x5cd61e => _0x350570.jsx(O, {
                section: _0x5cd61e,
                basePath: _0x1c2848
              }, _0x5cd61e.titleKey)), _0x350570.jsxs("div", {
                className: "mb-4",
                children: [_0x350570.jsx("div", {
                  className: "mb-2 px-1",
                  children: _0x350570.jsx("span", {
                    className: "text-xs font-semibold text-red-400/80",
                    children: _0x5c5c2d("developer.detail.dangerZone")
                  })
                }), _0x350570.jsx("div", {
                  className: "rounded-xl bg-red-500/5 border border-red-500/20 overflow-hidden",
                  children: _0x350570.jsxs("button", {
                    onClick: () => _0x554607(true),
                    className: "w-full group flex items-center gap-3 px-3 py-2.5 text-left cursor-pointer transition-all duration-200 hover:bg-red-500/10 active:bg-red-500/20",
                    children: [_0x350570.jsx("span", {
                      className: "flex size-7 shrink-0 items-center justify-center rounded-lg bg-red-500/10 group-hover:bg-red-500/20 transition-colors",
                      children: _0x350570.jsx(_0x4b8bdf, {
                        icon: "solar:trash-bin-trash-bold-duotone",
                        className: "size-3.5 text-red-400"
                      })
                    }), _0x350570.jsx("span", {
                      className: "flex-1 text-sm font-medium text-red-400 group-hover:text-red-300 transition-colors",
                      children: _0x5c5c2d("developer.detail.deleteApp")
                    }), _0x350570.jsx(_0x8f8a4c, {
                      className: "size-4 text-red-500/50 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all"
                    })]
                  })
                })]
              })]
            })]
          })
        }), _0x43eeee && _0x350570.jsxs(_0x350570.Fragment, {
          children: [_0x350570.jsx("div", {
            className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden",
            onClick: () => _0x76e156(false)
          }), _0x350570.jsxs("aside", {
            className: "fixed inset-y-0 left-0 z-50 w-80 flex flex-col bg-surface-base border-r border-border-default lg:hidden",
            children: [_0x350570.jsxs("div", {
              className: "flex h-14 items-center justify-between px-4 border-b border-border-default",
              children: [_0x350570.jsxs("div", {
                className: "flex items-center gap-2",
                children: [_0x350570.jsx(_0x4b8bdf, {
                  icon: "solar:bot-bold-duotone",
                  className: "size-5 text-accent-primary-text"
                }), _0x350570.jsx("span", {
                  className: "font-semibold text-text-primary truncate",
                  children: _0x5cf696?.name || _0x5c5c2d("developer.detail.loading")
                })]
              }), _0x350570.jsx(_0xe99a4e, {
                variant: "ghost",
                size: "icon",
                className: "size-8 rounded-lg",
                onClick: () => _0x76e156(false),
                children: _0x350570.jsx(_0x5de834, {
                  className: "size-4"
                })
              })]
            }), _0x350570.jsxs("nav", {
              className: "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent px-3 py-4",
              children: [E.map(_0x279f1b => _0x350570.jsx(O, {
                section: _0x279f1b,
                basePath: _0x1c2848,
                onItemClick: () => _0x76e156(false)
              }, _0x279f1b.titleKey)), _0x350570.jsxs("div", {
                className: "mb-4",
                children: [_0x350570.jsx("div", {
                  className: "mb-2 px-1",
                  children: _0x350570.jsx("span", {
                    className: "text-xs font-semibold text-red-400/80",
                    children: _0x5c5c2d("developer.detail.dangerZone")
                  })
                }), _0x350570.jsx("div", {
                  className: "rounded-xl bg-red-500/5 border border-red-500/20 overflow-hidden",
                  children: _0x350570.jsxs("button", {
                    onClick: () => {
                      _0x76e156(false);
                      _0x554607(true);
                    },
                    className: "w-full group flex items-center gap-3 px-3 py-2.5 text-left cursor-pointer transition-all duration-200 active:bg-red-500/10",
                    children: [_0x350570.jsx("span", {
                      className: "flex size-7 shrink-0 items-center justify-center rounded-lg bg-red-500/10",
                      children: _0x350570.jsx(_0x4b8bdf, {
                        icon: "solar:trash-bin-trash-bold-duotone",
                        className: "size-3.5 text-red-400"
                      })
                    }), _0x350570.jsx("span", {
                      className: "flex-1 text-sm font-medium text-red-400",
                      children: _0x5c5c2d("developer.detail.deleteApp")
                    }), _0x350570.jsx(_0x8f8a4c, {
                      className: "size-4 text-red-500/50"
                    })]
                  })
                })]
              })]
            })]
          })]
        }), _0x350570.jsx("main", {
          className: "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent",
          children: _0x350570.jsx("div", {
            className: "mx-auto max-w-4xl px-6 py-10",
            children: _0x4d82f9 ? _0x350570.jsx("div", {
              className: "flex items-center justify-center py-20",
              children: _0x350570.jsx("div", {
                className: "size-8 animate-spin rounded-full border-2 border-border-default border-t-accent-primary"
              })
            }) : _0x350570.jsx(_0x285bb6, {
              context: {
                application: _0x5cf696
              }
            })
          })
        })]
      }), _0x5cf696 && _0x350570.jsx(B, {
        open: _0x906392,
        onOpenChange: _0x554607,
        appId: _0x5cf696.id,
        appName: _0x5cf696.name,
        onDeleted: _0x6fb997
      }), _0x350570.jsx(_0x35c161, {
        position: "top-center"
      })]
    });
  } else {
    return _0x350570.jsxs("div", {
      className: "h-screen flex flex-col bg-surface-base overflow-hidden",
      children: [_0x350570.jsx(_0x2725d7, {
        showMobileMenu: true,
        onMenuClick: () => _0x76e156(true)
      }), _0x350570.jsxs("div", {
        className: "flex-1 flex flex-col items-center justify-center",
        children: [_0x350570.jsx("h2", {
          className: "text-xl font-semibold text-text-secondary",
          children: _0x28adf9 || _0x5c5c2d("developer.detail.notFound")
        }), _0x350570.jsx("p", {
          className: "text-sm text-text-tertiary mt-2",
          children: _0x28adf9 ? _0x5c5c2d("developer.detail.redirecting") : ""
        }), _0x350570.jsxs(_0xe99a4e, {
          variant: "ghost",
          className: "mt-4",
          onClick: () => _0x52e6a1("/dev/applications"),
          children: [_0x350570.jsx(_0x5ad303, {
            className: "size-4 mr-2"
          }), _0x5c5c2d("developer.detail.backToApps")]
        })]
      })]
    });
  }
}
export { L as default };