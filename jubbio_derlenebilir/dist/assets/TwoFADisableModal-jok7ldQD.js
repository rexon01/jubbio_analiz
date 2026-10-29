import { b as _0x482641, r as _0x46fda7, P as _0x3ce2ea, j as _0x1ed6a0, aT as _0x17e8ae } from "./index-cQfEKR1W.js";
import { I as _0x24938a, a as _0x599ab9, b as _0x1c3ad7, c as _0x1f434c } from "./input-otp-BJ3P97wC.js";
import { D as _0x5e6a27, a as _0x45ef48, c as _0x4e77aa, d as _0x4ac6d7 } from "./dialog-BMMpM7PR.js";
import { V as _0x9968da } from "./index-Oyyh46KT.js";
import { s as _0x26f351 } from "./2fa-BVSDQ2X9.js";
import { E as _0x2def7f } from "./refresh-cw-C3NlhmpS.js";
import { E as _0x59af08 } from "./eye-CZP2GlMx.js";
import { L as _0x20440f } from "./lock-BtNDHQqS.js";
import "./minus-DgcuZCwQ.js";
import "./index-yuEHo9bu.js";
const j = ({
  isOpen: _0x27f865,
  onClose: _0x1a1564,
  onDisable: _0x49ed34,
  twoFactorType: _0x4a7411
}) => {
  const {
    t: _0x595cbb
  } = _0x482641("privacy");
  const [_0x1b6086, _0x262ea9] = _0x46fda7.useState("");
  const [_0xb40d01, _0x5ac6a0] = _0x46fda7.useState("");
  const [_0x4a32a3, _0x33c94d] = _0x46fda7.useState(false);
  const [_0x30f52c, _0x34bc8e] = _0x46fda7.useState(false);
  const [_0x218083, _0x2d3038] = _0x46fda7.useState(0);
  const [_0x48659d, _0x54d69a] = _0x46fda7.useState(false);
  const [_0x2d1946, _0x29c8a5] = _0x46fda7.useState(false);
  const [_0x2c1310, _0xfb0150] = _0x46fda7.useState("");
  _0x46fda7.useEffect(() => {
    if (_0x27f865 && _0x4a7411 === "email") {
      _0x5a3eb7();
    }
  }, [_0x27f865, _0x4a7411]);
  _0x46fda7.useEffect(() => {
    if (_0x218083 > 0) {
      const _0x3b8954 = setTimeout(() => {
        _0x2d3038(_0x218083 - 1);
      }, 1000);
      return () => clearTimeout(_0x3b8954);
    }
  }, [_0x218083]);
  const _0x5a3eb7 = _0x46fda7.useCallback(async () => {
    if (!(_0x218083 > 0)) {
      try {
        _0x34bc8e(true);
        await _0x26f351();
        _0x2d3038(90);
      } catch {} finally {
        _0x34bc8e(false);
      }
    }
  }, [_0x218083]);
  const _0x3e7990 = _0x46fda7.useCallback(() => {
    _0x1a1564();
    _0x262ea9("");
    _0x5ac6a0("");
    _0x33c94d(false);
    _0x34bc8e(false);
    _0x2d3038(0);
    _0x54d69a(false);
    _0x29c8a5(false);
    _0xfb0150("");
  }, [_0x1a1564]);
  const _0x3cde25 = _0x46fda7.useCallback(async () => {
    if (!_0x1b6086.trim()) {
      _0x3ce2ea.error(_0x595cbb("twoFADisable.enterPasswordFirst"));
      return;
    }
    const _0x185fa2 = _0x2d1946 ? _0x2c1310 : _0xb40d01;
    const _0xe0b329 = _0x2d1946 ? 8 : 6;
    if (_0x185fa2 && _0x185fa2.length === _0xe0b329) {
      try {
        _0x33c94d(true);
        await _0x49ed34(_0x1b6086, _0x185fa2);
        _0x3e7990();
      } catch {
        _0x5ac6a0("");
        _0xfb0150("");
      } finally {
        _0x33c94d(false);
      }
    } else {
      _0x3ce2ea.error(_0x595cbb("twoFADisable.enterDigitCode", {
        length: _0xe0b329,
        type: _0x595cbb(_0x2d1946 ? "twoFADisable.backupType" : "twoFADisable.verificationType")
      }));
    }
  }, [_0x1b6086, _0xb40d01, _0x2c1310, _0x2d1946, _0x49ed34, _0x3e7990]);
  const _0x56b377 = _0x1b6086.trim().length > 0 && (_0x2d1946 ? _0x2c1310.length === 8 : _0xb40d01.length === 6);
  const _0x456860 = "w-12 h-12 text-lg font-semibold border-border-strong bg-surface-inset/50 hover:bg-surface-inset/50 focus:bg-surface-inset/50 transition-colors " + (_0x4a7411 === "email" ? "focus:border-green-500/50" : "focus:border-red-500/50");
  const _0xb416ed = "w-10 h-12 text-lg font-semibold border-border-strong bg-surface-inset/50 hover:bg-surface-inset/50 focus:bg-surface-inset/50 focus:border-red-500/50 transition-colors";
  return _0x1ed6a0.jsx(_0x5e6a27, {
    open: _0x27f865,
    onOpenChange: _0x3e7990,
    children: _0x1ed6a0.jsxs(_0x45ef48, {
      className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md overflow-hidden",
      children: [_0x1ed6a0.jsxs(_0x9968da, {
        children: [_0x1ed6a0.jsx(_0x4e77aa, {
          children: _0x595cbb("twoFADisable.title")
        }), _0x1ed6a0.jsx(_0x4ac6d7, {
          children: _0x595cbb("twoFADisable.description")
        })]
      }), _0x1ed6a0.jsx("div", {
        className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40",
        children: _0x1ed6a0.jsxs("div", {
          className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col max-h-[90vh]",
          children: [_0x1ed6a0.jsxs("div", {
            className: "px-4 py-4 border-b border-border-subtle",
            children: [_0x1ed6a0.jsx("h2", {
              className: "text-lg font-semibold text-text-primary",
              children: _0x595cbb("twoFADisable.title")
            }), _0x1ed6a0.jsx("p", {
              className: "text-sm text-text-tertiary mt-1",
              children: _0x595cbb("twoFADisable.description")
            })]
          }), _0x1ed6a0.jsx("div", {
            className: "px-4 py-4 overflow-y-auto scrollbar-thin scrollbar-track-surface-overlay/50 scrollbar-thumb-border-strong/70 hover:scrollbar-thumb-border-strong/80 scrollbar-thumb-rounded-full",
            children: _0x1ed6a0.jsxs("form", {
              onSubmit: _0x15c8c9 => {
                _0x15c8c9.preventDefault();
                _0x3cde25();
              },
              className: "space-y-5",
              children: [_0x1ed6a0.jsx("input", {
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
              }), _0x1ed6a0.jsx("div", {
                className: "p-4 rounded-xl border border-red-500/20 bg-red-500/5",
                children: _0x1ed6a0.jsxs("div", {
                  className: "flex items-start gap-3",
                  children: [_0x1ed6a0.jsx("div", {
                    className: "flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/30",
                    children: _0x1ed6a0.jsx(_0x17e8ae, {
                      className: "w-4 h-4 text-red-400"
                    })
                  }), _0x1ed6a0.jsxs("div", {
                    className: "flex-1",
                    children: [_0x1ed6a0.jsx("h3", {
                      className: "text-sm font-semibold text-red-200 mb-1",
                      children: _0x595cbb("twoFADisable.securityWarning")
                    }), _0x1ed6a0.jsx("p", {
                      className: "text-xs text-red-300/80 leading-relaxed",
                      children: _0x595cbb("twoFADisable.securityWarningDesc")
                    })]
                  })]
                })
              }), _0x1ed6a0.jsxs("div", {
                className: "space-y-2",
                children: [_0x1ed6a0.jsx("label", {
                  className: "text-sm font-medium text-text-secondary",
                  children: _0x595cbb("twoFADisable.accountPassword")
                }), _0x1ed6a0.jsxs("div", {
                  className: "relative",
                  children: [_0x1ed6a0.jsx("input", {
                    type: _0x48659d ? "text" : "password",
                    value: _0x1b6086,
                    onChange: _0x2d5611 => _0x262ea9(_0x2d5611.target.value),
                    placeholder: _0x595cbb("twoFADisable.enterPassword"),
                    className: "w-full h-10 rounded-xl bg-surface-inset/40 border border-border-subtle text-text-secondary placeholder:text-text-muted px-3 pr-10 text-sm focus:outline-none focus:border-red-500/50 transition-colors",
                    disabled: _0x4a32a3,
                    required: true,
                    autoComplete: "current-password"
                  }), _0x1ed6a0.jsx("button", {
                    type: "button",
                    onClick: () => _0x54d69a(!_0x48659d),
                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-secondary transition-colors",
                    disabled: _0x4a32a3,
                    children: _0x48659d ? _0x1ed6a0.jsx(_0x2def7f, {
                      className: "w-4 h-4"
                    }) : _0x1ed6a0.jsx(_0x59af08, {
                      className: "w-4 h-4"
                    })
                  })]
                })]
              }), _0x1ed6a0.jsxs("div", {
                className: "space-y-3",
                children: [_0x1ed6a0.jsxs("div", {
                  className: "text-center",
                  children: [_0x1ed6a0.jsx("label", {
                    className: "text-sm font-medium text-text-secondary block mb-2",
                    children: _0x595cbb(_0x2d1946 ? "twoFADisable.backupCode" : "twoFADisable.twoFAVerificationCode")
                  }), _0x1ed6a0.jsxs("p", {
                    className: "text-xs text-text-tertiary",
                    children: [_0x4a7411 === "app" ? _0x2d1946 ? _0x595cbb("twoFADisable.enterBackupCode") : _0x1ed6a0.jsxs(_0x1ed6a0.Fragment, {
                      children: [_0x595cbb("twoFADisable.enterAppCode"), " ", _0x1ed6a0.jsx("button", {
                        type: "button",
                        onClick: () => {
                          _0x29c8a5(!_0x2d1946);
                          _0x5ac6a0("");
                          _0xfb0150("");
                        },
                        className: "text-xs text-text-tertiary hover:text-text-secondary underline transition-colors",
                        children: _0x595cbb("twoFADisable.useBackupCode")
                      })]
                    }) : _0x1ed6a0.jsxs(_0x1ed6a0.Fragment, {
                      children: [_0x595cbb("twoFADisable.enterEmailCode"), " ", _0x1ed6a0.jsx("button", {
                        type: "button",
                        onClick: _0x5a3eb7,
                        disabled: _0x30f52c || _0x218083 > 0,
                        className: "text-xs text-text-tertiary hover:text-text-secondary underline transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                        children: _0x30f52c ? _0x595cbb("twoFADisable.sending") : _0x218083 > 0 ? _0x595cbb("twoFADisable.resendCooldown", {
                          seconds: _0x218083
                        }) : _0x595cbb("twoFADisable.resend")
                      })]
                    }), _0x4a7411 === "app" && _0x2d1946 && _0x1ed6a0.jsxs(_0x1ed6a0.Fragment, {
                      children: [" ", _0x1ed6a0.jsx("button", {
                        type: "button",
                        onClick: () => {
                          _0x29c8a5(!_0x2d1946);
                          _0x5ac6a0("");
                          _0xfb0150("");
                        },
                        className: "text-xs text-text-tertiary hover:text-text-secondary underline transition-colors",
                        children: _0x595cbb("twoFADisable.useNormalCode")
                      })]
                    })]
                  })]
                }), _0x1ed6a0.jsx("div", {
                  className: "flex justify-center",
                  children: _0x1ed6a0.jsx("div", {
                    className: "bg-surface-inset/40 border border-border-subtle rounded-xl p-4",
                    children: _0x2d1946 ? _0x1ed6a0.jsxs(_0x24938a, {
                      maxLength: 8,
                      value: _0x2c1310,
                      onChange: _0xfb0150,
                      children: [_0x1ed6a0.jsx(_0x599ab9, {
                        children: Array.from({
                          length: 4
                        }, (_0x2c7289, _0x18cbd0) => _0x1ed6a0.jsx(_0x1c3ad7, {
                          index: _0x18cbd0,
                          className: _0xb416ed
                        }, _0x18cbd0))
                      }), _0x1ed6a0.jsx(_0x1f434c, {
                        className: "mx-2 text-text-muted"
                      }), _0x1ed6a0.jsx(_0x599ab9, {
                        children: Array.from({
                          length: 4
                        }, (_0x466f30, _0x1d6d37) => _0x1ed6a0.jsx(_0x1c3ad7, {
                          index: _0x1d6d37 + 4,
                          className: _0xb416ed
                        }, _0x1d6d37 + 4))
                      })]
                    }) : _0x1ed6a0.jsxs(_0x24938a, {
                      maxLength: 6,
                      value: _0xb40d01,
                      onChange: _0x5ac6a0,
                      children: [_0x1ed6a0.jsx(_0x599ab9, {
                        children: Array.from({
                          length: 3
                        }, (_0x4fe547, _0x3651d4) => _0x1ed6a0.jsx(_0x1c3ad7, {
                          index: _0x3651d4,
                          className: _0x456860
                        }, _0x3651d4))
                      }), _0x1ed6a0.jsx(_0x1f434c, {
                        className: "mx-2 text-text-muted"
                      }), _0x1ed6a0.jsx(_0x599ab9, {
                        children: Array.from({
                          length: 3
                        }, (_0x448714, _0x113efe) => _0x1ed6a0.jsx(_0x1c3ad7, {
                          index: _0x113efe + 3,
                          className: _0x456860
                        }, _0x113efe + 3))
                      })]
                    })
                  })
                })]
              }), _0x1ed6a0.jsx("p", {
                className: "text-xs text-text-muted text-center",
                children: _0x595cbb("twoFADisable.disableWarning")
              })]
            })
          }), _0x1ed6a0.jsxs("div", {
            className: "sticky bottom-0 px-4 py-3 border-t border-border-subtle flex gap-3",
            children: [_0x1ed6a0.jsx("button", {
              onClick: _0x3e7990,
              disabled: _0x4a32a3,
              className: "flex-1 h-10 rounded-xl text-sm font-medium text-text-secondary bg-surface-inset/40 border border-border-subtle hover:bg-interactive-muted transition-colors cursor-pointer disabled:opacity-50",
              children: _0x595cbb("common.cancel", {
                ns: "translation"
              })
            }), _0x1ed6a0.jsx("button", {
              onClick: _0x3cde25,
              disabled: _0x4a32a3 || !_0x56b377 || _0x30f52c,
              className: "flex-1 h-10 rounded-xl text-sm font-semibold transition-colors cursor-pointer disabled:cursor-not-allowed disabled:bg-surface-inset disabled:text-text-tertiary bg-red-500 hover:bg-red-600 text-text-primary",
              children: _0x4a32a3 ? _0x1ed6a0.jsxs("div", {
                className: "flex items-center justify-center gap-2",
                children: [_0x1ed6a0.jsx("div", {
                  className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                }), _0x595cbb("twoFADisable.disabling")]
              }) : _0x30f52c ? _0x595cbb("twoFADisable.sendingCode") : _0x1ed6a0.jsxs("div", {
                className: "flex items-center justify-center gap-2",
                children: [_0x1ed6a0.jsx(_0x20440f, {
                  className: "w-4 h-4"
                }), _0x595cbb("twoFADisable.disableTwoFA")]
              })
            })]
          })]
        })
      })]
    })
  });
};
export { j as default };