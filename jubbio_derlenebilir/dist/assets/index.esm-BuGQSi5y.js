import { r as _0x18f219, R as _0x1178bf } from "./index-cQfEKR1W.js";
const e = _0x18f219.createContext(null);
function i({
  clientId: _0x682d47,
  nonce: _0x131483,
  locale: _0x2bbdc3,
  onScriptLoadSuccess: _0x4f73bc,
  onScriptLoadError: _0x51d9f9,
  children: _0x12c0b2
}) {
  const _0x185b0a = function (_0x343381 = {}) {
    const {
      nonce: _0x2bf16f,
      locale: _0x44dec1,
      onScriptLoadSuccess: _0x591aa4,
      onScriptLoadError: _0x4874b7
    } = _0x343381;
    const [_0x4b6895, _0x4169bf] = _0x18f219.useState(false);
    const _0x437578 = _0x18f219.useRef(_0x591aa4);
    _0x437578.current = _0x591aa4;
    const _0x5bd8af = _0x18f219.useRef(_0x4874b7);
    _0x5bd8af.current = _0x4874b7;
    _0x18f219.useEffect(() => {
      const _0x151006 = document.createElement("script");
      _0x151006.src = "https://accounts.google.com/gsi/client";
      if (_0x44dec1) {
        _0x151006.src += "?hl=" + _0x44dec1;
      }
      _0x151006.async = true;
      _0x151006.defer = true;
      _0x151006.nonce = _0x2bf16f;
      _0x151006.onload = () => {
        var _0x3db774;
        _0x4169bf(true);
        if ((_0x3db774 = _0x437578.current) !== null && _0x3db774 !== undefined) {
          _0x3db774.call(_0x437578);
        }
      };
      _0x151006.onerror = () => {
        var _0x1758c6;
        _0x4169bf(false);
        if ((_0x1758c6 = _0x5bd8af.current) !== null && _0x1758c6 !== undefined) {
          _0x1758c6.call(_0x5bd8af);
        }
      };
      document.body.appendChild(_0x151006);
      return () => {
        document.body.removeChild(_0x151006);
      };
    }, [_0x2bf16f]);
    return _0x4b6895;
  }({
    nonce: _0x131483,
    onScriptLoadSuccess: _0x4f73bc,
    onScriptLoadError: _0x51d9f9,
    locale: _0x2bbdc3
  });
  const _0x34e783 = _0x18f219.useMemo(() => ({
    locale: _0x2bbdc3,
    clientId: _0x682d47,
    scriptLoadedSuccessfully: _0x185b0a
  }), [_0x682d47, _0x185b0a]);
  return _0x1178bf.createElement(e.Provider, {
    value: _0x34e783
  }, _0x12c0b2);
}
function l() {
  const _0x1ccddd = _0x18f219.useContext(e);
  if (!_0x1ccddd) {
    throw new Error("Google OAuth components must be used within GoogleOAuthProvider");
  }
  return _0x1ccddd;
}
function d(_0x432f48) {
  return (_0x432f48 == null ? undefined : _0x432f48.clientId) ?? (_0x432f48 == null ? undefined : _0x432f48.client_id);
}
const t = {
  large: 40,
  medium: 32,
  small: 20
};
function c({
  onSuccess: _0x2c5839,
  onError: _0x5ad414,
  useOneTap: _0x312afc,
  promptMomentNotification: _0xcf62ba,
  type: _0x5529ce = "standard",
  theme: _0x4b9fae = "outline",
  size: _0x42f072 = "large",
  text: _0x57fa12,
  shape: _0x243e66,
  logo_alignment: _0x567d81,
  width: _0x56819b,
  click_listener: _0x339233,
  state: _0x36ceff,
  containerProps: _0x804dbb,
  login_hint: _0x2a984f,
  ..._0x4f4f11
}) {
  const _0x19eec = _0x18f219.useRef(null);
  const {
    clientId: _0x3e9e9b,
    locale: _0x320d22,
    scriptLoadedSuccessfully: _0x380ead
  } = l();
  const _0x5f4555 = _0x18f219.useRef(_0x2c5839);
  _0x5f4555.current = _0x2c5839;
  const _0x391e6e = _0x18f219.useRef(_0x5ad414);
  _0x391e6e.current = _0x5ad414;
  const _0x25f8a2 = _0x18f219.useRef(_0xcf62ba);
  _0x25f8a2.current = _0xcf62ba;
  _0x18f219.useEffect(() => {
    var _0x2ad8c2;
    var _0x249356;
    var _0x198b19;
    if (_0x380ead) {
      if ((_0x2ad8c2 = window?.google?.accounts?.id) !== null && _0x2ad8c2 !== undefined) {
        _0x2ad8c2.initialize({
          client_id: _0x3e9e9b,
          callback: _0x26577d => {
            var _0x18d62c;
            if (!(_0x26577d == null ? undefined : _0x26577d.credential)) {
              if ((_0x18d62c = _0x391e6e.current) === null || _0x18d62c === undefined) {
                return undefined;
              } else {
                return _0x18d62c.call(_0x391e6e);
              }
            }
            const {
              credential: _0x24b076,
              select_by: _0x1e5982
            } = _0x26577d;
            _0x5f4555.current({
              credential: _0x24b076,
              clientId: d(_0x26577d),
              select_by: _0x1e5982
            });
          },
          login_hint: _0x2a984f,
          ..._0x4f4f11
        });
      }
      if ((_0x249356 = window?.google?.accounts?.id) !== null && _0x249356 !== undefined) {
        _0x249356.renderButton(_0x19eec.current, {
          type: _0x5529ce,
          theme: _0x4b9fae,
          size: _0x42f072,
          text: _0x57fa12,
          shape: _0x243e66,
          logo_alignment: _0x567d81,
          width: _0x56819b,
          locale: _0x320d22,
          click_listener: _0x339233,
          state: _0x36ceff
        });
      }
      if (_0x312afc) {
        if ((_0x198b19 = window?.google?.accounts?.id) !== null && _0x198b19 !== undefined) {
          _0x198b19.prompt(_0x25f8a2.current);
        }
      }
      return () => {
        var _0x3304a9;
        if (_0x312afc) {
          if ((_0x3304a9 = window?.google?.accounts?.id) !== null && _0x3304a9 !== undefined) {
            _0x3304a9.cancel();
          }
        }
      };
    }
  }, [_0x3e9e9b, _0x380ead, _0x312afc, _0x5529ce, _0x4b9fae, _0x42f072, _0x57fa12, _0x243e66, _0x567d81, _0x56819b, _0x320d22, _0x2a984f]);
  return _0x1178bf.createElement("div", {
    ..._0x804dbb,
    ref: _0x19eec,
    style: {
      height: t[_0x42f072],
      ...(_0x804dbb == null ? undefined : _0x804dbb.style)
    }
  });
}
function r() {
  var _0x424bd2;
  if ((_0x424bd2 = window?.google?.accounts?.id) !== null && _0x424bd2 !== undefined) {
    _0x424bd2.disableAutoSelect();
  }
}
function u({
  flow: _0x35f3d7 = "implicit",
  scope: _0x3c4313 = "",
  onSuccess: _0x1b12ba,
  onError: _0x24c4ad,
  onNonOAuthError: _0x2b862d,
  overrideScope: _0x10774c,
  state: _0x3c835c,
  ..._0x2ffc9a
}) {
  const {
    clientId: _0x54d36b,
    scriptLoadedSuccessfully: _0x32290f
  } = l();
  const _0x4170dc = _0x18f219.useRef();
  const _0x27992e = _0x18f219.useRef(_0x1b12ba);
  _0x27992e.current = _0x1b12ba;
  const _0x1885e6 = _0x18f219.useRef(_0x24c4ad);
  _0x1885e6.current = _0x24c4ad;
  const _0x575220 = _0x18f219.useRef(_0x2b862d);
  _0x575220.current = _0x2b862d;
  _0x18f219.useEffect(() => {
    var _0x1b5a6e;
    if (!_0x32290f) {
      return;
    }
    const _0x21fe82 = _0x35f3d7 === "implicit" ? "initTokenClient" : "initCodeClient";
    const _0x353109 = (_0x1b5a6e = window?.google?.accounts) === null || _0x1b5a6e === undefined ? undefined : _0x1b5a6e.oauth2[_0x21fe82]({
      client_id: _0x54d36b,
      scope: _0x10774c ? _0x3c4313 : "openid profile email " + _0x3c4313,
      callback: _0x464b10 => {
        var _0x3e0fb3;
        var _0xf86daa;
        if (_0x464b10.error) {
          if ((_0x3e0fb3 = _0x1885e6.current) === null || _0x3e0fb3 === undefined) {
            return undefined;
          } else {
            return _0x3e0fb3.call(_0x1885e6, _0x464b10);
          }
        }
        if ((_0xf86daa = _0x27992e.current) !== null && _0xf86daa !== undefined) {
          _0xf86daa.call(_0x27992e, _0x464b10);
        }
      },
      error_callback: _0x26506a => {
        var _0x3d1d1f;
        if ((_0x3d1d1f = _0x575220.current) !== null && _0x3d1d1f !== undefined) {
          _0x3d1d1f.call(_0x575220, _0x26506a);
        }
      },
      state: _0x3c835c,
      ..._0x2ffc9a
    });
    _0x4170dc.current = _0x353109;
  }, [_0x54d36b, _0x32290f, _0x35f3d7, _0x3c4313, _0x3c835c]);
  const _0x4f1dc0 = _0x18f219.useCallback(_0x4e88f1 => {
    var _0x48d92a;
    if ((_0x48d92a = _0x4170dc.current) === null || _0x48d92a === undefined) {
      return undefined;
    } else {
      return _0x48d92a.requestAccessToken(_0x4e88f1);
    }
  }, []);
  const _0x1f66f2 = _0x18f219.useCallback(() => {
    var _0x40b068;
    if ((_0x40b068 = _0x4170dc.current) === null || _0x40b068 === undefined) {
      return undefined;
    } else {
      return _0x40b068.requestCode();
    }
  }, []);
  if (_0x35f3d7 === "implicit") {
    return _0x4f1dc0;
  } else {
    return _0x1f66f2;
  }
}
function s({
  onSuccess: _0x174865,
  onError: _0x537bf1,
  promptMomentNotification: _0x1e2156,
  cancel_on_tap_outside: _0x25feec,
  prompt_parent_id: _0x5044de,
  state_cookie_domain: _0x1892e9,
  hosted_domain: _0x262468,
  use_fedcm_for_prompt: _0x533b9e = false,
  use_fedcm_for_button: _0x57e98b = false,
  disabled: _0x16df90,
  auto_select: _0x27c6a4
}) {
  const {
    clientId: _0x469570,
    scriptLoadedSuccessfully: _0x3f6506
  } = l();
  const _0xb99e96 = _0x18f219.useRef(_0x174865);
  _0xb99e96.current = _0x174865;
  const _0x10ac0c = _0x18f219.useRef(_0x537bf1);
  _0x10ac0c.current = _0x537bf1;
  const _0x1a3982 = _0x18f219.useRef(_0x1e2156);
  _0x1a3982.current = _0x1e2156;
  _0x18f219.useEffect(() => {
    var _0xbd8350;
    var _0x149c31;
    var _0x211296;
    if (_0x3f6506) {
      if (!_0x16df90) {
        if ((_0x149c31 = window?.google?.accounts?.id) !== null && _0x149c31 !== undefined) {
          _0x149c31.initialize({
            client_id: _0x469570,
            callback: _0x3e3407 => {
              var _0x2e1442;
              if (!(_0x3e3407 == null ? undefined : _0x3e3407.credential)) {
                if ((_0x2e1442 = _0x10ac0c.current) === null || _0x2e1442 === undefined) {
                  return undefined;
                } else {
                  return _0x2e1442.call(_0x10ac0c);
                }
              }
              const {
                credential: _0x2210de,
                select_by: _0x3263db
              } = _0x3e3407;
              _0xb99e96.current({
                credential: _0x2210de,
                clientId: d(_0x3e3407),
                select_by: _0x3263db
              });
            },
            hosted_domain: _0x262468,
            cancel_on_tap_outside: _0x25feec,
            prompt_parent_id: _0x5044de,
            state_cookie_domain: _0x1892e9,
            use_fedcm_for_prompt: _0x533b9e,
            use_fedcm_for_button: _0x57e98b,
            auto_select: _0x27c6a4
          });
        }
        if ((_0x211296 = window?.google?.accounts?.id) !== null && _0x211296 !== undefined) {
          _0x211296.prompt(_0x1a3982.current);
        }
        return () => {
          var _0x199b32;
          if ((_0x199b32 = window?.google?.accounts?.id) !== null && _0x199b32 !== undefined) {
            _0x199b32.cancel();
          }
        };
      }
      if ((_0xbd8350 = window?.google?.accounts?.id) !== null && _0xbd8350 !== undefined) {
        _0xbd8350.cancel();
      }
    }
  }, [_0x469570, _0x3f6506, _0x25feec, _0x5044de, _0x1892e9, _0x262468, _0x533b9e, _0x57e98b, _0x16df90, _0x27c6a4]);
}
function v(_0x3e3ffd, _0x33b094, ..._0xd8977b) {
  var _0x2fc33f;
  return window?.google && ((_0x2fc33f = window?.google?.accounts?.oauth2) === null || _0x2fc33f === undefined ? undefined : _0x2fc33f.hasGrantedAllScopes(_0x3e3ffd, _0x33b094, ..._0xd8977b)) || false;
}
function a(_0x22a9b3, _0x4f430d, ..._0x9d32c4) {
  var _0x452d81;
  return window?.google && ((_0x452d81 = window?.google?.accounts?.oauth2) === null || _0x452d81 === undefined ? undefined : _0x452d81.hasGrantedAnyScope(_0x22a9b3, _0x4f430d, ..._0x9d32c4)) || false;
}
export { c as GoogleLogin, i as GoogleOAuthProvider, r as googleLogout, v as hasGrantedAllScopesGoogle, a as hasGrantedAnyScopeGoogle, u as useGoogleLogin, l as useGoogleOAuth, s as useGoogleOneTapLogin };