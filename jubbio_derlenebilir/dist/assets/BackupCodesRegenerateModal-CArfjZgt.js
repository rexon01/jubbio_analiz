import { b as _0x5eacde, r as _0x12dfb1, P as _0x46136a, j as _0xc577c9 } from "./index-cQfEKR1W.js";
import { D as _0x3e3597, a as _0x5ef537, c as _0x3fdcd1, d as _0x222868 } from "./dialog-BMMpM7PR.js";
import { V as _0x718c5f } from "./index-Oyyh46KT.js";
import { e as _0x2f548a } from "./2fa-BVSDQ2X9.js";
import { B as _0x17a8a5 } from "./BackupCodesDisplay-DP8oY1WR.js";
import { K as _0x1919f3 } from "./key-gGt-5vdN.js";
import { E as _0xa65f12 } from "./refresh-cw-C3NlhmpS.js";
import { E as _0x8fc4a } from "./eye-CZP2GlMx.js";
import { L as _0x26a54d } from "./lock-BtNDHQqS.js";
import "./index-yuEHo9bu.js";
import "./clipboard-BQ9qambq.js";
import "./download-CURuSoyZ.js";
const u = ({
  isOpen: _0x28e77b,
  onClose: _0x1a7024
}) => {
  const {
    t: _0x274463
  } = _0x5eacde("privacy");
  const [_0x3ad8b6, _0x4a2243] = _0x12dfb1.useState("");
  const [_0x543c16, _0x2a7a07] = _0x12dfb1.useState(false);
  const [_0x346ca2, _0x1b4f40] = _0x12dfb1.useState(false);
  const [_0x5ab17e, _0x221757] = _0x12dfb1.useState([]);
  const [_0x54ae41, _0x3c7ddd] = _0x12dfb1.useState(false);
  const _0x39fd6b = _0x12dfb1.useCallback(async () => {
    if (_0x3ad8b6.trim()) {
      try {
        _0x1b4f40(true);
        const _0x3e611d = await _0x2f548a(_0x3ad8b6);
        _0x221757(_0x3e611d.backupCodes);
        _0x3c7ddd(true);
        _0x46136a.success(_0x274463("backupCodesRegenerate.codesRegeneratedToast"));
      } catch (_0x23729f) {
        console.error("Backup codes regenerate hatası:", _0x23729f);
        const _0x20d899 = _0x23729f.response?.data?.message || _0x274463("backupCodesRegenerate.regenerateFailed");
        _0x46136a.error(_0x20d899);
      } finally {
        _0x1b4f40(false);
      }
    } else {
      _0x46136a.error(_0x274463("backupCodesRegenerate.enterPasswordFirst"));
    }
  }, [_0x3ad8b6, _0x274463]);
  const _0x11d6b1 = _0x12dfb1.useCallback(() => {
    _0x1a7024();
    _0x4a2243("");
    _0x2a7a07(false);
    _0x1b4f40(false);
    _0x221757([]);
    _0x3c7ddd(false);
  }, [_0x1a7024]);
  return _0xc577c9.jsx(_0x3e3597, {
    open: _0x28e77b,
    onOpenChange: _0x11d6b1,
    children: _0xc577c9.jsxs(_0x5ef537, {
      className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md overflow-hidden",
      children: [_0xc577c9.jsxs(_0x718c5f, {
        children: [_0xc577c9.jsx(_0x3fdcd1, {
          children: _0x274463("backupCodesRegenerate.title")
        }), _0xc577c9.jsx(_0x222868, {
          children: _0x274463("backupCodesRegenerate.description")
        })]
      }), _0xc577c9.jsx("div", {
        className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40",
        children: _0xc577c9.jsxs("div", {
          className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col max-h-[90vh]",
          children: [_0xc577c9.jsxs("div", {
            className: "px-4 py-4 border-b border-border-subtle",
            children: [_0xc577c9.jsx("h2", {
              className: "text-lg font-semibold text-text-primary",
              children: _0x274463("backupCodesRegenerate.title")
            }), _0xc577c9.jsx("p", {
              className: "text-sm text-text-tertiary mt-1",
              children: _0x274463("backupCodesRegenerate.description")
            })]
          }), _0xc577c9.jsx("div", {
            className: "px-4 py-4 overflow-y-auto scrollbar-thin scrollbar-track-surface-overlay/50 scrollbar-thumb-border-strong/70 hover:scrollbar-thumb-border-strong/80 scrollbar-thumb-rounded-full",
            children: _0x54ae41 ? _0xc577c9.jsxs("div", {
              className: "space-y-4",
              children: [_0xc577c9.jsx("div", {
                className: "p-4 rounded-xl border border-green-500/20 bg-green-500/5",
                children: _0xc577c9.jsxs("div", {
                  className: "flex items-start gap-3",
                  children: [_0xc577c9.jsx("div", {
                    className: "flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/30",
                    children: _0xc577c9.jsx(_0x26a54d, {
                      className: "w-4 h-4 text-green-400"
                    })
                  }), _0xc577c9.jsxs("div", {
                    className: "flex-1",
                    children: [_0xc577c9.jsx("h3", {
                      className: "text-sm font-semibold text-green-200 mb-1",
                      children: _0x274463("backupCodesRegenerate.codesRegeneratedSuccess")
                    }), _0xc577c9.jsx("p", {
                      className: "text-xs text-green-300/80 leading-relaxed",
                      children: _0x274463("backupCodesRegenerate.newCodesCreated")
                    })]
                  })]
                })
              }), _0xc577c9.jsx(_0x17a8a5, {
                backupCodes: _0x5ab17e,
                showWarning: true
              })]
            }) : _0xc577c9.jsxs("form", {
              onSubmit: _0xf10c00 => {
                _0xf10c00.preventDefault();
                _0x39fd6b();
              },
              className: "space-y-4",
              children: [_0xc577c9.jsx("input", {
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
              }), _0xc577c9.jsx("div", {
                className: "p-4 rounded-xl border border-orange-500/20 bg-orange-500/5",
                children: _0xc577c9.jsxs("div", {
                  className: "flex items-start gap-3",
                  children: [_0xc577c9.jsx("div", {
                    className: "flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/30",
                    children: _0xc577c9.jsx(_0x1919f3, {
                      className: "w-4 h-4 text-orange-400"
                    })
                  }), _0xc577c9.jsxs("div", {
                    className: "flex-1",
                    children: [_0xc577c9.jsx("h3", {
                      className: "text-sm font-semibold text-orange-200 mb-1",
                      children: _0x274463("backupCodesRegenerate.securityVerification")
                    }), _0xc577c9.jsx("p", {
                      className: "text-xs text-orange-300/80 leading-relaxed",
                      children: _0x274463("backupCodesRegenerate.securityVerificationDesc")
                    })]
                  })]
                })
              }), _0xc577c9.jsxs("div", {
                className: "space-y-2",
                children: [_0xc577c9.jsx("label", {
                  className: "text-sm font-medium text-text-secondary",
                  children: _0x274463("backupCodesRegenerate.password")
                }), _0xc577c9.jsxs("div", {
                  className: "relative",
                  children: [_0xc577c9.jsx("input", {
                    type: _0x543c16 ? "text" : "password",
                    value: _0x3ad8b6,
                    onChange: _0x2fb629 => _0x4a2243(_0x2fb629.target.value),
                    placeholder: _0x274463("backupCodesRegenerate.enterCurrentPassword"),
                    className: "w-full h-10 rounded-xl bg-surface-inset/40 border border-border-subtle text-text-secondary placeholder:text-text-muted px-3 pr-10 text-sm focus:outline-none focus:border-orange-500/50 transition-colors",
                    disabled: _0x346ca2,
                    required: true,
                    autoComplete: "current-password"
                  }), _0xc577c9.jsx("button", {
                    type: "button",
                    onClick: () => _0x2a7a07(!_0x543c16),
                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-secondary transition-colors",
                    disabled: _0x346ca2,
                    children: _0x543c16 ? _0xc577c9.jsx(_0xa65f12, {
                      className: "w-4 h-4"
                    }) : _0xc577c9.jsx(_0x8fc4a, {
                      className: "w-4 h-4"
                    })
                  })]
                })]
              }), _0xc577c9.jsx("p", {
                className: "text-xs text-text-muted",
                children: _0x274463("backupCodesRegenerate.invalidatesExistingCodes")
              })]
            })
          }), _0xc577c9.jsxs("div", {
            className: "sticky bottom-0 px-4 py-3 border-t border-border-subtle flex gap-3",
            children: [_0xc577c9.jsx("button", {
              onClick: _0x11d6b1,
              disabled: _0x346ca2,
              className: "flex-1 h-10 rounded-xl text-sm font-medium text-text-secondary bg-surface-inset/40 border border-border-subtle hover:bg-interactive-muted transition-colors cursor-pointer disabled:opacity-50",
              children: _0x54ae41 ? _0x274463("backupCodesRegenerate.close") : _0x274463("common.cancel", {
                ns: "translation"
              })
            }), !_0x54ae41 && _0xc577c9.jsx("button", {
              onClick: _0x39fd6b,
              disabled: _0x346ca2 || !_0x3ad8b6.trim(),
              className: "flex-1 h-10 rounded-xl text-sm font-semibold transition-colors cursor-pointer disabled:cursor-not-allowed disabled:bg-surface-inset disabled:text-text-tertiary bg-orange-500 hover:bg-orange-600 text-text-primary",
              children: _0x346ca2 ? _0xc577c9.jsxs("div", {
                className: "flex items-center justify-center gap-2",
                children: [_0xc577c9.jsx("div", {
                  className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                }), _0x274463("backupCodesRegenerate.regenerating")]
              }) : _0xc577c9.jsxs("div", {
                className: "flex items-center justify-center gap-2",
                children: [_0xc577c9.jsx(_0x26a54d, {
                  className: "w-4 h-4"
                }), _0x274463("backupCodesRegenerate.regenerateBackupCodes")]
              })
            })]
          })]
        })
      })]
    })
  });
};
export { u as default };