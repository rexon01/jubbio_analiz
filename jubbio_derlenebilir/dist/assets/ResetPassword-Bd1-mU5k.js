import { b as _0x14e787, d as _0x5b43ac, e as _0x2329c5, v as _0x23c6e4, r, m as _0xd2e60c, R as _0x4ee399, j as _0x2e18b3, L as _0x2ddb99, h as _0x3454af } from "./index-cQfEKR1W.js";
import { A as _0x896c33, a as _0x347b6c, b as _0x4f0294 } from "./AuthInput-C-W1lSJn.js";
import _0x4fe450 from "./PasswordStrengthInput-BfCaCTBa.js";
import { S as _0x5ce005 } from "./submit-button-B2LF_DTf.js";
import { a as _0x2b66f2 } from "./validators-DXDy_d27.js";
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
import "./index-BUijt7wr.js";
const w = () => {
  const {
    t: _0xb0e080
  } = _0x14e787();
  const _0x1a0ec9 = _0x5b43ac();
  const _0x116b32 = _0x2329c5();
  const [_0x31a53f] = _0x23c6e4();
  const _0x22c0c5 = _0x31a53f.get("token");
  const [_0x4cb01f, _0x58e2da] = r.useState("");
  const [_0x421be8, _0x241f48] = r.useState("");
  const [_0x19cf7e, _0xe4bbd4] = r.useState("");
  const [_0x394f40, _0x4fb33d] = r.useState(false);
  const [_0x312ac6, _0x5c2bd9] = r.useState(null);
  const _0x489687 = r.useMemo(() => _0x312ac6 === false ? "Jubbio | " + _0xb0e080("auth.invalidLink") : _0x312ac6 === null ? "Jubbio | " + _0xb0e080("auth.checking") : "Jubbio | " + _0xb0e080("auth.newPassword"), [_0x312ac6, _0xb0e080]);
  _0xd2e60c(_0x489687);
  const _0x44eceb = r.useCallback(_0x2d9d78 => {
    _0x58e2da(_0x2d9d78.target.value);
  }, []);
  const _0x20ee25 = r.useCallback(_0x51a706 => {
    _0x241f48(_0x51a706.target.value);
  }, []);
  const _0x5cc3bd = r.useCallback(() => {
    _0xe4bbd4(_0x4cb01f && _0x421be8 && _0x4cb01f !== _0x421be8 ? _0xb0e080("auth.passwordsDoNotMatch") : "");
  }, [_0x4cb01f, _0x421be8]);
  r.useEffect(() => {
    (async () => {
      if (_0x22c0c5) {
        try {
          await _0x3454af.verifyResetToken(_0x22c0c5);
          _0x5c2bd9(true);
        } catch {
          _0x5c2bd9(false);
        }
      } else {
        _0x5c2bd9(false);
      }
    })();
  }, [_0x22c0c5, _0x116b32.pathname]);
  _0x4ee399.useEffect(() => {
    _0x5cc3bd();
  }, [_0x4cb01f, _0x421be8, _0x5cc3bd, _0x116b32.pathname]);
  const _0x471561 = r.useMemo(() => _0x2b66f2(_0x4cb01f), [_0x4cb01f]);
  const _0x551669 = r.useMemo(() => {
    const _0x55c043 = [];
    if (_0x4cb01f) {
      if (_0x471561) {
        _0x55c043.push(_0x471561);
      }
    } else {
      _0x55c043.push(_0xb0e080("auth.passwordRequired"));
    }
    if (!_0x421be8) {
      _0x55c043.push(_0xb0e080("auth.confirmPasswordRequired"));
    }
    if (_0x19cf7e) {
      _0x55c043.push(_0x19cf7e);
    }
    return [...new Set(_0x55c043)];
  }, [_0x4cb01f, _0x421be8, _0x471561, _0x19cf7e, _0xb0e080]);
  const _0x5d3ff2 = r.useMemo(() => _0x551669.length > 0, [_0x551669]);
  if (_0x312ac6 === false) {
    return _0x2e18b3.jsxs(_0x896c33, {
      children: [_0x2e18b3.jsx(_0x347b6c, {
        title: _0xb0e080("auth.invalidLink"),
        description: _0xb0e080("auth.invalidLinkDesc")
      }), _0x2e18b3.jsx("div", {
        className: "text-center",
        children: _0x2e18b3.jsx(_0x2ddb99, {
          to: "/forgot-password",
          className: "underline",
          children: _0xb0e080("auth.sendResetRequest")
        })
      })]
    });
  } else if (_0x312ac6 === null) {
    return _0x2e18b3.jsx(_0x896c33, {
      children: _0x2e18b3.jsx(_0x347b6c, {
        title: _0xb0e080("auth.checking"),
        description: _0xb0e080("auth.verifyingResetLink")
      })
    });
  } else {
    return _0x2e18b3.jsxs(_0x896c33, {
      children: [_0x2e18b3.jsx(_0x347b6c, {
        title: _0xb0e080("auth.setNewPassword"),
        description: _0xb0e080("auth.setNewPasswordDesc")
      }), _0x2e18b3.jsxs("form", {
        onSubmit: async _0x45e310 => {
          _0x45e310.preventDefault();
          if (!_0x5d3ff2 && !_0x394f40 && _0x22c0c5 && _0x312ac6) {
            _0x4fb33d(true);
            try {
              await _0x3454af.resetPassword({
                token: _0x22c0c5,
                password: _0x4cb01f
              });
              _0x1a0ec9("/login");
            } catch {} finally {
              _0x4fb33d(false);
            }
          }
        },
        className: "grid gap-4",
        children: [_0x2e18b3.jsx(_0x4fe450, {
          id: "password",
          label: _0xb0e080("auth.newPasswordLabel"),
          required: true,
          value: _0x4cb01f,
          onChange: _0x44eceb,
          autoComplete: "new-password"
        }), _0x2e18b3.jsx(_0x4f0294, {
          id: "confirm-password",
          label: _0xb0e080("auth.confirmNewPassword"),
          type: "password",
          required: true,
          value: _0x421be8,
          onChange: _0x20ee25,
          error: _0x19cf7e,
          autoComplete: "new-password"
        }), _0x2e18b3.jsx(_0x5ce005, {
          disabled: _0x5d3ff2,
          loading: _0x394f40,
          errorList: _0x551669,
          errorTitle: _0xb0e080("auth.completeForm"),
          errorDescription: _0xb0e080("auth.resetPasswordFormErrorDesc"),
          children: _0xb0e080("auth.changePassword")
        })]
      })]
    });
  }
};
export { w as default };