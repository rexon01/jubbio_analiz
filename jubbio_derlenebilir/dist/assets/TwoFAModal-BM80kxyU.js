import { b as _0x48c08a, r as _0x4995bc, P as _0x59b50f, j as _0x34e67b } from "./index-cQfEKR1W.js";
import { I as _0x3cadb3, a as _0x1e6379, b as _0x3d40f1, c as _0x54236b } from "./input-otp-BJ3P97wC.js";
import { D as _0x44f14d, a as _0x4c1873, b as _0x4abf9a, c as _0x2b2d5f, d as _0xd2c647 } from "./dialog-BMMpM7PR.js";
import { s as _0x1fc7da } from "./2fa-BVSDQ2X9.js";
import { L as _0x11b313 } from "./loader-circle-CTtxa1g9.js";
import { K as _0x157bb5 } from "./key-gGt-5vdN.js";
import { M as _0x912bc8 } from "./mail-VxBGiXYt.js";
import { S as _0x4fe0bc } from "./smartphone-CEPSHImI.js";
import "./minus-DgcuZCwQ.js";
import "./index-yuEHo9bu.js";
const j = ({
  isOpen: _0x34c77e,
  onClose: _0x59ce76,
  onVerify: _0x47026d,
  twoFactorType: _0x4bbe89,
  isLoading: _0x53d23e = false,
  userId: _0x1fb295,
  isLoginMode: _0x405e1e = false,
  skipAutoSend: _0x40aef2 = false
}) => {
  const {
    t: _0x360b31
  } = _0x48c08a("privacy");
  const [_0x34c17d, _0x64482f] = _0x4995bc.useState("");
  const [_0x3f2494, _0x3211b8] = _0x4995bc.useState("");
  const [_0x511e98, _0x5d89b1] = _0x4995bc.useState(false);
  const [_0x43ccff, _0x5efdf4] = _0x4995bc.useState(false);
  const [_0x3e2e6d, _0x3daa2a] = _0x4995bc.useState(0);
  _0x4995bc.useEffect(() => {
    if (!!_0x34c77e && _0x4bbe89 === "email" && !_0x405e1e && !_0x40aef2) {
      _0x1bf7e5();
    }
    if (_0x34c77e && _0x40aef2 && _0x4bbe89 === "email") {
      _0x3daa2a(90);
    }
  }, [_0x34c77e, _0x4bbe89, _0x405e1e, _0x40aef2]);
  _0x4995bc.useEffect(() => {
    if (_0x3e2e6d > 0) {
      const _0x56a1f3 = setTimeout(() => {
        _0x3daa2a(_0x3e2e6d - 1);
      }, 1000);
      return () => clearTimeout(_0x56a1f3);
    }
  }, [_0x3e2e6d]);
  const _0x1bf7e5 = _0x4995bc.useCallback(async () => {
    if (!(_0x3e2e6d > 0)) {
      try {
        _0x5efdf4(true);
        if (_0x405e1e) {
          _0x47026d("", "email");
        } else {
          await _0x1fc7da();
        }
        _0x3daa2a(90);
      } catch {} finally {
        _0x5efdf4(false);
      }
    }
  }, [_0x3e2e6d, _0x405e1e, _0x47026d, _0x360b31]);
  const _0x47b536 = _0x4995bc.useCallback(async () => {
    const _0x13ede7 = _0x511e98 ? _0x3f2494 : _0x34c17d;
    const _0x251d5a = _0x511e98 ? 8 : 6;
    if (!_0x13ede7 || _0x13ede7.length !== _0x251d5a) {
      _0x59b50f.error(_0x360b31("twoFAModal.enterDigitCode", {
        length: _0x251d5a,
        type: _0x360b31(_0x511e98 ? "twoFAModal.backupType" : "twoFAModal.verificationType")
      }));
      return;
    }
    if (_0x405e1e && _0x1fb295) {
      _0x47026d(_0x13ede7, "app");
      return;
    }
    let _0x507d29;
    _0x507d29 = _0x511e98 ? "backup" : _0x4bbe89;
    _0x47026d(_0x13ede7, _0x507d29);
  }, [_0x34c17d, _0x3f2494, _0x511e98, _0x4bbe89, _0x47026d, _0x405e1e, _0x1fb295, _0x360b31]);
  const _0x4f0766 = _0x4995bc.useCallback(() => {
    _0x59ce76();
    _0x64482f("");
    _0x3211b8("");
    _0x5d89b1(false);
    _0x5efdf4(false);
    _0x3daa2a(0);
  }, [_0x59ce76]);
  const _0x27b047 = _0x511e98 ? _0x3f2494.length === 8 : _0x34c17d.length === 6;
  const {
    icon: _0x4d523a,
    color: _0xee89f1
  } = _0x511e98 ? {
    icon: _0x157bb5,
    color: "#f97316"
  } : _0x4bbe89 === "email" ? {
    icon: _0x912bc8,
    color: "var(--accent-primary-text, #adff08)"
  } : {
    icon: _0x4fe0bc,
    color: "var(--accent-primary-text, #adff08)"
  };
  return _0x34e67b.jsx(_0x44f14d, {
    open: _0x34c77e,
    onOpenChange: _0x4f0766,
    children: _0x34e67b.jsx(_0x4c1873, {
      className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md overflow-hidden",
      children: _0x34e67b.jsx("div", {
        className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40",
        children: _0x34e67b.jsxs("div", {
          className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col",
          children: [_0x34e67b.jsxs(_0x4abf9a, {
            className: "px-6 pt-6 pb-4 text-center",
            children: [_0x34e67b.jsx("div", {
              className: "mx-auto mb-4 size-14 rounded-2xl flex items-center justify-center",
              style: {
                backgroundColor: _0xee89f1 + "15"
              },
              children: _0x34e67b.jsx(_0x4d523a, {
                className: "size-7",
                style: {
                  color: _0xee89f1
                }
              })
            }), _0x34e67b.jsx(_0x2b2d5f, {
              className: "text-xl font-semibold text-text-primary",
              children: _0x360b31(_0x511e98 ? "twoFAModal.backupCodeVerification" : _0x4bbe89 === "email" ? "twoFAModal.emailVerification" : "twoFAModal.twoFAVerification")
            }), _0x34e67b.jsx(_0xd2c647, {
              className: "text-text-tertiary text-sm mt-2",
              children: _0x360b31(_0x511e98 ? "twoFAModal.backupCodeDesc" : _0x4bbe89 === "email" ? "twoFAModal.emailCodeDesc" : "twoFAModal.appCodeDesc")
            })]
          }), _0x34e67b.jsxs("div", {
            className: "px-6 pb-6 flex flex-col items-center gap-5",
            children: [_0x511e98 ? _0x34e67b.jsxs(_0x3cadb3, {
              maxLength: 8,
              value: _0x3f2494,
              onChange: _0x3211b8,
              disabled: _0x53d23e,
              children: [_0x34e67b.jsxs(_0x1e6379, {
                children: [_0x34e67b.jsx(_0x3d40f1, {
                  index: 0,
                  className: "h-12 w-10 text-xl font-semibold"
                }), _0x34e67b.jsx(_0x3d40f1, {
                  index: 1,
                  className: "h-12 w-10 text-xl font-semibold"
                }), _0x34e67b.jsx(_0x3d40f1, {
                  index: 2,
                  className: "h-12 w-10 text-xl font-semibold"
                }), _0x34e67b.jsx(_0x3d40f1, {
                  index: 3,
                  className: "h-12 w-10 text-xl font-semibold"
                })]
              }), _0x34e67b.jsx(_0x54236b, {}), _0x34e67b.jsxs(_0x1e6379, {
                children: [_0x34e67b.jsx(_0x3d40f1, {
                  index: 4,
                  className: "h-12 w-10 text-xl font-semibold"
                }), _0x34e67b.jsx(_0x3d40f1, {
                  index: 5,
                  className: "h-12 w-10 text-xl font-semibold"
                }), _0x34e67b.jsx(_0x3d40f1, {
                  index: 6,
                  className: "h-12 w-10 text-xl font-semibold"
                }), _0x34e67b.jsx(_0x3d40f1, {
                  index: 7,
                  className: "h-12 w-10 text-xl font-semibold"
                })]
              })]
            }) : _0x34e67b.jsxs(_0x3cadb3, {
              maxLength: 6,
              value: _0x34c17d,
              onChange: _0x64482f,
              disabled: _0x53d23e,
              children: [_0x34e67b.jsxs(_0x1e6379, {
                children: [_0x34e67b.jsx(_0x3d40f1, {
                  index: 0,
                  className: "h-12 w-12 text-xl font-semibold"
                }), _0x34e67b.jsx(_0x3d40f1, {
                  index: 1,
                  className: "h-12 w-12 text-xl font-semibold"
                }), _0x34e67b.jsx(_0x3d40f1, {
                  index: 2,
                  className: "h-12 w-12 text-xl font-semibold"
                })]
              }), _0x34e67b.jsx(_0x54236b, {}), _0x34e67b.jsxs(_0x1e6379, {
                children: [_0x34e67b.jsx(_0x3d40f1, {
                  index: 3,
                  className: "h-12 w-12 text-xl font-semibold"
                }), _0x34e67b.jsx(_0x3d40f1, {
                  index: 4,
                  className: "h-12 w-12 text-xl font-semibold"
                }), _0x34e67b.jsx(_0x3d40f1, {
                  index: 5,
                  className: "h-12 w-12 text-xl font-semibold"
                })]
              })]
            }), _0x34e67b.jsxs("div", {
              className: "text-center text-sm",
              children: [_0x4bbe89 === "email" && _0x34e67b.jsxs(_0x34e67b.Fragment, {
                children: [_0x34e67b.jsxs("span", {
                  className: "text-text-muted",
                  children: [_0x360b31("twoFAModal.codeNotReceived"), " "]
                }), _0x3e2e6d > 0 ? _0x34e67b.jsx("span", {
                  className: "text-text-muted",
                  children: _0x360b31("twoFAModal.resendCooldown", {
                    seconds: _0x3e2e6d
                  })
                }) : _0x34e67b.jsx("button", {
                  type: "button",
                  onClick: _0x1bf7e5,
                  disabled: _0x43ccff,
                  className: "text-accent-primary-text hover:text-accent-primary-text/80 font-medium disabled:opacity-50 cursor-pointer",
                  children: _0x360b31(_0x43ccff ? "twoFAModal.sending" : "twoFAModal.resendCode")
                })]
              }), _0x4bbe89 === "app" && !_0x511e98 && _0x34e67b.jsxs(_0x34e67b.Fragment, {
                children: [_0x34e67b.jsxs("span", {
                  className: "text-text-muted",
                  children: [_0x360b31("twoFAModal.cantAccessApp"), " "]
                }), _0x34e67b.jsx("button", {
                  type: "button",
                  onClick: () => {
                    _0x5d89b1(true);
                    _0x64482f("");
                    _0x3211b8("");
                  },
                  className: "text-accent-primary-text hover:text-accent-primary-text/80 font-medium cursor-pointer",
                  children: _0x360b31("twoFAModal.useBackupCode")
                })]
              }), _0x511e98 && _0x34e67b.jsxs(_0x34e67b.Fragment, {
                children: [_0x34e67b.jsxs("span", {
                  className: "text-text-muted",
                  children: [_0x360b31("twoFAModal.canAccessApp"), " "]
                }), _0x34e67b.jsx("button", {
                  type: "button",
                  onClick: () => {
                    _0x5d89b1(false);
                    _0x64482f("");
                    _0x3211b8("");
                  },
                  className: "text-accent-primary-text hover:text-accent-primary-text/80 font-medium cursor-pointer",
                  children: _0x360b31("twoFAModal.useNormalCode")
                })]
              })]
            })]
          }), _0x34e67b.jsx("div", {
            className: "px-6 py-4 border-t border-border-subtle",
            children: _0x34e67b.jsxs("div", {
              className: "flex items-center gap-3",
              children: [_0x34e67b.jsx("button", {
                onClick: _0x4f0766,
                className: "flex-1 h-11 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer",
                children: _0x360b31("twoFAModal.cancel")
              }), _0x34e67b.jsx("button", {
                onClick: _0x47b536,
                disabled: !_0x27b047 || _0x53d23e || _0x43ccff,
                className: "flex-1 h-11 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer",
                children: _0x53d23e ? _0x34e67b.jsxs(_0x34e67b.Fragment, {
                  children: [_0x34e67b.jsx(_0x11b313, {
                    className: "size-4 animate-spin"
                  }), _0x360b31("twoFAModal.verifying")]
                }) : _0x360b31("twoFAModal.verify")
              })]
            })
          })]
        })
      })
    })
  });
};
export { j as default };