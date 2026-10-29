import { r as _0x23233a, b as _0xed0718, j as _0x3da8cd, I as _0x52811d } from "./index-cQfEKR1W.js";
import { D as _0x1f9664, a as _0x2b6298, b as _0x2f7c16, c as _0x3f4a32, d as _0x3d1c60 } from "./dialog-BMMpM7PR.js";
import { I as _0x5dd2e2, a as _0xc60ade, b as _0x18bac7, c as _0x57590a } from "./input-otp-BJ3P97wC.js";
import { L as _0x387e99 } from "./loader-circle-CTtxa1g9.js";
function p(_0x5d32f3) {
  return _0x5d32f3.normalize("NFKC").replace(/[٠-٩۰-۹]/g, _0x357937 => String(_0x357937.charCodeAt(0) & 15)).replace(/[\s\u200B-\u200D\uFEFF]/g, "");
}
const h = ({
  isOpen: _0x1752f2,
  onClose: _0x11a636,
  onVerify: _0x1f0552,
  onResend: _0x44331e,
  email: _0x3ade7f,
  otpExpiresIn: _0x376f6c,
  isLoading: _0x3b39e7,
  type: _0x4158d7
}) => {
  const [_0x29e8f5, _0xdc61f6] = _0x23233a.useState("");
  const [_0x5f3572, _0x1c06ec] = _0x23233a.useState(() => Date.now() + _0x376f6c * 1000);
  const [_0xeec71f, _0x1256d5] = _0x23233a.useState(() => Date.now() + 60000);
  const [_0xc424bf, _0x1de9a5] = _0x23233a.useState(Date.now);
  const [_0x415b1a, _0x1ff78a] = _0x23233a.useState(false);
  const _0x13bfcd = _0x23233a.useRef(false);
  const _0xb482c6 = Math.max(0, Math.ceil((_0x5f3572 - _0xc424bf) / 1000));
  const _0x1e88a8 = _0xc424bf >= _0xeec71f;
  const {
    t: _0x3ac550
  } = _0xed0718();
  _0x23233a.useEffect(() => {
    if (_0x1752f2) {
      _0xdc61f6("");
      const _0x3eead7 = Date.now();
      _0x1de9a5(_0x3eead7);
      _0x1c06ec(_0x3eead7 + _0x376f6c * 1000);
      _0x1256d5(_0x3eead7 + 60000);
    }
  }, [_0x1752f2, _0x376f6c]);
  _0x23233a.useEffect(() => {
    if (!_0x1752f2) {
      return;
    }
    const _0x3c610c = setInterval(() => _0x1de9a5(Date.now()), 1000);
    return () => clearInterval(_0x3c610c);
  }, [_0x1752f2]);
  const _0x72913f = _0x23233a.useCallback(_0x3ca58b => Math.floor(_0x3ca58b / 60) + ":" + (_0x3ca58b % 60).toString().padStart(2, "0"), []);
  const _0x544a26 = _0x29e8f5.length === 6;
  const _0x1734cb = _0x23233a.useCallback(async () => {
    if (!!_0x544a26 && !_0x3b39e7 && !_0x415b1a && !_0x13bfcd.current && !(_0xb482c6 <= 0)) {
      _0x13bfcd.current = true;
      try {
        await _0x1f0552(_0x29e8f5);
      } finally {
        _0x13bfcd.current = false;
      }
    }
  }, [_0x544a26, _0x3b39e7, _0x415b1a, _0xb482c6, _0x1f0552, _0x29e8f5]);
  const _0x534095 = _0x23233a.useCallback(async () => {
    if (_0x1e88a8 && !_0x415b1a && !_0x3b39e7 && !_0x13bfcd.current) {
      _0x13bfcd.current = true;
      _0x1ff78a(true);
      try {
        await _0x44331e();
        _0xdc61f6("");
        const _0x559920 = Date.now();
        _0x1de9a5(_0x559920);
        _0x1c06ec(_0x559920 + _0x376f6c * 1000);
        _0x1256d5(_0x559920 + 60000);
      } catch {} finally {
        _0x13bfcd.current = false;
        _0x1ff78a(false);
      }
    }
  }, [_0x1e88a8, _0x415b1a, _0x3b39e7, _0x376f6c, _0x44331e]);
  const _0x25d4bd = _0x3ac550(_0x4158d7 === "register" ? "auth.otp.verifyAccount" : _0x4158d7 === "email-change" ? "auth.otp.emailChangeVerification" : "auth.otp.emailVerification");
  return _0x3da8cd.jsx(_0x1f9664, {
    open: _0x1752f2,
    onOpenChange: _0x5450d5 => !_0x5450d5 && _0x11a636(),
    children: _0x3da8cd.jsx(_0x2b6298, {
      className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md overflow-hidden",
      children: _0x3da8cd.jsx("div", {
        className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40",
        children: _0x3da8cd.jsxs("div", {
          className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col",
          children: [_0x3da8cd.jsxs(_0x2f7c16, {
            className: "px-6 pt-6 pb-4 text-center",
            children: [_0x3da8cd.jsx("div", {
              className: "mx-auto mb-4 size-14 rounded-2xl bg-accent-subtle flex items-center justify-center",
              children: _0x3da8cd.jsx(_0x52811d, {
                icon: "solar:letter-bold-duotone",
                className: "size-7 text-accent-primary-text"
              })
            }), _0x3da8cd.jsx(_0x3f4a32, {
              className: "text-xl font-semibold text-text-primary",
              children: _0x25d4bd
            }), _0x3da8cd.jsxs(_0x3d1c60, {
              className: "text-text-tertiary text-sm mt-2",
              children: [_0x3da8cd.jsx("span", {
                className: "text-accent-primary-text font-medium",
                children: _0x3ade7f
              }), " ", _0x3ac550("auth.otp.enterCodeSent")]
            })]
          }), _0x3da8cd.jsxs("div", {
            className: "px-6 pb-6 flex flex-col items-center gap-5",
            children: [_0x3da8cd.jsxs(_0x5dd2e2, {
              maxLength: 6,
              value: _0x29e8f5,
              onChange: _0xcf7211 => _0xdc61f6(p(_0xcf7211)),
              pasteTransformer: p,
              inputMode: "numeric",
              pattern: "^[0-9]*$",
              disabled: _0x3b39e7 || _0x415b1a,
              children: [_0x3da8cd.jsxs(_0xc60ade, {
                children: [_0x3da8cd.jsx(_0x18bac7, {
                  index: 0,
                  className: "h-12 w-12 text-xl font-semibold"
                }), _0x3da8cd.jsx(_0x18bac7, {
                  index: 1,
                  className: "h-12 w-12 text-xl font-semibold"
                }), _0x3da8cd.jsx(_0x18bac7, {
                  index: 2,
                  className: "h-12 w-12 text-xl font-semibold"
                })]
              }), _0x3da8cd.jsx(_0x57590a, {}), _0x3da8cd.jsxs(_0xc60ade, {
                children: [_0x3da8cd.jsx(_0x18bac7, {
                  index: 3,
                  className: "h-12 w-12 text-xl font-semibold"
                }), _0x3da8cd.jsx(_0x18bac7, {
                  index: 4,
                  className: "h-12 w-12 text-xl font-semibold"
                }), _0x3da8cd.jsx(_0x18bac7, {
                  index: 5,
                  className: "h-12 w-12 text-xl font-semibold"
                })]
              })]
            }), _0x3da8cd.jsx("div", {
              className: "text-center",
              children: _0xb482c6 > 0 ? _0x3da8cd.jsx("p", {
                className: "text-sm text-text-tertiary",
                children: _0x3ac550("auth.otp.codeExpiresIn", {
                  time: _0x72913f(_0xb482c6)
                })
              }) : _0x3da8cd.jsx("p", {
                className: "text-sm text-red-400",
                children: _0x3ac550("auth.otp.codeExpired")
              })
            }), _0x3da8cd.jsxs("div", {
              className: "text-center text-sm",
              children: [_0x3da8cd.jsxs("span", {
                className: "text-text-muted",
                children: [_0x3ac550("auth.otp.didntReceiveCode"), " "]
              }), _0x1e88a8 ? _0x3da8cd.jsx("button", {
                type: "button",
                onClick: _0x534095,
                disabled: _0x415b1a || _0x3b39e7,
                className: "text-accent-primary-text hover:text-accent-primary-text/80 font-medium disabled:opacity-50 cursor-pointer",
                children: _0x3ac550(_0x415b1a ? "auth.otp.resending" : "auth.otp.resend")
              }) : _0x3da8cd.jsx("span", {
                className: "text-text-muted",
                children: _0x3ac550("auth.otp.pleaseWait")
              })]
            })]
          }), _0x3da8cd.jsx("div", {
            className: "px-6 py-4 border-t border-border-subtle",
            children: _0x3da8cd.jsxs("div", {
              className: "flex items-center gap-3",
              children: [_0x3da8cd.jsx("button", {
                onClick: _0x11a636,
                className: "flex-1 h-11 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer",
                children: _0x3ac550("common.cancel")
              }), _0x3da8cd.jsx("button", {
                onClick: _0x1734cb,
                disabled: !_0x544a26 || _0xb482c6 <= 0 || _0x3b39e7 || _0x415b1a,
                className: "flex-1 h-11 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer",
                children: _0x3b39e7 ? _0x3da8cd.jsxs(_0x3da8cd.Fragment, {
                  children: [_0x3da8cd.jsx(_0x387e99, {
                    className: "size-4 animate-spin"
                  }), _0x3ac550("auth.otp.verifying")]
                }) : _0x3ac550("auth.otp.verify")
              })]
            })
          })]
        })
      })
    })
  });
};
export { h as O };