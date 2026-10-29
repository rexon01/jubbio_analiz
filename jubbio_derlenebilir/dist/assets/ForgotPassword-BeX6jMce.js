import { b as _0x4841cf, r as _0x2cd4ac, m as _0x4b1a78, j as _0x3feb6d, B as _0xeabf10, L as _0xc32093, h as _0x204b74, A as _0x1687ca } from "./index-cQfEKR1W.js";
import { A as _0x491aad, a as _0xc63af0, b as _0x14f8f4 } from "./AuthInput-C-W1lSJn.js";
import { S as _0x33de78 } from "./submit-button-B2LF_DTf.js";
import "./thumbs-up-h5dpjlcj.js";
import "./heart-BTCd1Bwb.js";
import "./zap-B3VH4qT9.js";
import "./smile-Do8NR4vN.js";
import "./camera-Tq38xvm2.js";
import "./coffee-BNwzMqh6.js";
import "./gift-Co-azAyt.js";
import "./sparkles-CEeENQ_D.js";
import "./users-CoSbgNbJ.js";
import "./video-AtsAgCNJ.js";
import "./hash-Dd0s6IKZ.js";
import "./settings-BHmftTyd.js";
import "./image-CYAMq37h.js";
import "./palette-M-F5ZK9w.js";
import "./trophy-D1hvddoK.js";
import "./input-AMyERYwJ.js";
import "./label-ODyS97Ju.js";
import "./PasswordInput-B3lf9zf0.js";
const h = () => {
  const {
    t: _0x7926ca
  } = _0x4841cf();
  const [_0x1cf109, _0x50e297] = _0x2cd4ac.useState("");
  const [_0x3adafe, _0x1a69a2] = _0x2cd4ac.useState("");
  const [_0x523747, _0x7226f8] = _0x2cd4ac.useState(false);
  const [_0x3e8ce1, _0x424243] = _0x2cd4ac.useState(false);
  const _0xbcca08 = _0x2cd4ac.useCallback(() => {
    if (_0x1cf109 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(_0x1cf109)) {
      _0x1a69a2(_0x7926ca("auth.invalidEmail"));
    } else {
      _0x1a69a2("");
    }
  }, [_0x1cf109, _0x7926ca]);
  const _0x377ded = _0x2cd4ac.useMemo(() => {
    const _0x40a336 = [];
    if (!_0x1cf109.trim()) {
      _0x40a336.push(_0x7926ca("auth.emailRequired"));
    }
    return _0x40a336;
  }, [_0x1cf109, _0x7926ca]);
  const _0x485864 = _0x2cd4ac.useMemo(() => _0x377ded.length > 0 || !!_0x3adafe, [_0x377ded, _0x3adafe]);
  const _0x39a1e2 = _0x2cd4ac.useMemo(() => {
    const _0x2bdb18 = [..._0x377ded];
    if (_0x3adafe) {
      _0x2bdb18.push(_0x7926ca("auth.emailInvalid"));
    }
    return [...new Set(_0x2bdb18)];
  }, [_0x377ded, _0x3adafe, _0x7926ca]);
  const _0x1852ae = _0x2cd4ac.useCallback(_0x599288 => _0x50e297(_0x599288.target.value), []);
  _0x4b1a78(_0x7926ca("auth.resetPassword"), "");
  return _0x3feb6d.jsxs(_0x491aad, {
    children: [_0x3feb6d.jsx(_0xc63af0, {
      title: _0x7926ca("auth.forgotPasswordTitle"),
      description: _0x7926ca(_0x523747 ? "auth.forgotPasswordSubmittedDesc" : "auth.forgotPasswordDesc")
    }), _0x3feb6d.jsxs("form", {
      onSubmit: async _0x22d1e2 => {
        _0x22d1e2.preventDefault();
        if (!_0x485864 && !_0x3e8ce1 && !_0x523747) {
          _0x424243(true);
          try {
            await _0x204b74.forgotPassword({
              email: _0x1cf109
            });
            _0x7226f8(true);
          } catch (_0x236cdd) {
            if (_0x236cdd instanceof _0x1687ca && _0x236cdd.response?.status === 429) {
              return;
            }
          } finally {
            _0x424243(false);
          }
        }
      },
      className: "grid gap-4",
      children: [_0x3feb6d.jsx(_0x14f8f4, {
        id: "email",
        label: _0x7926ca("auth.email"),
        type: "email",
        placeholder: _0x7926ca("auth.emailPlaceholder"),
        required: true,
        value: _0x1cf109,
        onChange: _0x1852ae,
        onBlur: _0xbcca08,
        error: _0x3adafe,
        autoComplete: "email"
      }), _0x3feb6d.jsx(_0x33de78, {
        disabled: _0x485864 || _0x523747,
        loading: _0x3e8ce1,
        errorList: _0x39a1e2,
        errorTitle: _0x7926ca("auth.completeForm"),
        errorDescription: _0x7926ca("auth.forgotPasswordFormErrorDesc"),
        children: _0x7926ca(_0x523747 ? "auth.sent" : "auth.sendResetLink")
      }), _0x3feb6d.jsx(_0xeabf10, {
        variant: "link",
        asChild: true,
        className: "w-full",
        children: _0x3feb6d.jsx(_0xc32093, {
          to: "/login",
          children: _0x7926ca("auth.backToLogin")
        })
      })]
    })]
  });
};
export { h as default };