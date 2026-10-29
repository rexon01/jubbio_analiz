import { r as _0x343845, j as _0x4be8b2, B as _0x20fadf, d as _0xec7663, I as _0x15231b, an as _0x1a8c5e } from "./index-cQfEKR1W.js";
import { c as _0x3ec4d5 } from "./clipboard-BQ9qambq.js";
import { L as _0x179842 } from "./loader-circle-CTtxa1g9.js";
function l(_0x53eb7e) {
  let _0x3a9072 = "";
  for (let _0x1e0390 = 0; _0x1e0390 < _0x53eb7e.length; _0x1e0390++) {
    _0x3a9072 += String.fromCharCode(_0x53eb7e[_0x1e0390]);
  }
  return btoa(_0x3a9072).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function c() {
  const _0x248771 = function (_0x3b4d86 = 64) {
    const _0x5cb71e = new Uint8Array(_0x3b4d86);
    crypto.getRandomValues(_0x5cb71e);
    return l(_0x5cb71e).slice(0, _0x3b4d86);
  }();
  return {
    verifier: _0x248771,
    challenge: await async function (_0x55525f) {
      const _0x2d05c7 = new TextEncoder().encode(_0x55525f);
      const _0x2771ea = await crypto.subtle.digest("SHA-256", _0x2d05c7);
      return l(new Uint8Array(_0x2771ea));
    }(_0x248771)
  };
}
class d {
  constructor(_0x345b9e = "jubbio_") {
    this.prefix = _0x345b9e;
  }
  key(_0x1a82eb) {
    return "" + this.prefix + _0x1a82eb;
  }
  saveTokens(_0x280246) {
    const _0x14f184 = Date.now() + _0x280246.expires_in * 1000;
    localStorage.setItem(this.key("access_token"), _0x280246.access_token);
    localStorage.setItem(this.key("refresh_token"), _0x280246.refresh_token);
    localStorage.setItem(this.key("expires_at"), _0x14f184.toString());
    localStorage.setItem(this.key("scope"), _0x280246.scope);
  }
  getAccessToken() {
    const _0x3de714 = localStorage.getItem(this.key("expires_at"));
    if (_0x3de714 && Date.now() > parseInt(_0x3de714, 10)) {
      return null;
    } else {
      return localStorage.getItem(this.key("access_token"));
    }
  }
  getRefreshToken() {
    return localStorage.getItem(this.key("refresh_token"));
  }
  isLoggedIn() {
    return this.getAccessToken() !== null || this.getRefreshToken() !== null;
  }
  clear() {
    localStorage.removeItem(this.key("access_token"));
    localStorage.removeItem(this.key("refresh_token"));
    localStorage.removeItem(this.key("expires_at"));
    localStorage.removeItem(this.key("scope"));
  }
  saveAuthState(_0x106c38, _0x5579dd) {
    sessionStorage.setItem(this.key("state"), _0x106c38);
    sessionStorage.setItem(this.key("verifier"), _0x5579dd);
  }
  getAuthState() {
    return {
      state: sessionStorage.getItem(this.key("state")),
      verifier: sessionStorage.getItem(this.key("verifier"))
    };
  }
  clearAuthState() {
    sessionStorage.removeItem(this.key("state"));
    sessionStorage.removeItem(this.key("verifier"));
  }
}
const u = ["identify"];
class h {
  constructor(_0x184a06) {
    if (!_0x184a06.clientId) {
      throw new Error("jubbio-auth: clientId is required");
    }
    if (!_0x184a06.redirectUri) {
      throw new Error("jubbio-auth: redirectUri is required");
    }
    this.config = {
      baseUrl: "https://gateway.jubbio.com",
      authorizeUrl: "https://jubbio.com",
      scopes: u,
      popup: false,
      autoStore: true,
      storagePrefix: "jubbio_",
      ..._0x184a06
    };
    this.storage = new d(this.config.storagePrefix);
  }
  async login() {
    const {
      verifier: _0x4db247,
      challenge: _0x19c13a
    } = await c();
    const _0x5c61e8 = function (_0x2f0555 = 32) {
      const _0x57fb59 = new Uint8Array(_0x2f0555);
      crypto.getRandomValues(_0x57fb59);
      return l(_0x57fb59).slice(0, _0x2f0555);
    }();
    this.storage.saveAuthState(_0x5c61e8, _0x4db247);
    const _0x37136f = new URLSearchParams({
      client_id: this.config.clientId,
      redirect_uri: this.config.redirectUri,
      response_type: "code",
      scope: (this.config.scopes || u).join(" "),
      state: _0x5c61e8,
      code_challenge: _0x19c13a,
      code_challenge_method: "S256"
    });
    const _0xd8de5b = this.config.authorizeUrl + "/oauth2/authorize?" + _0x37136f.toString();
    if (this.config.popup) {
      this.openPopup(_0xd8de5b);
    } else {
      window.location.href = _0xd8de5b;
    }
  }
  async handleCallback(_0x30fcca) {
    const _0x1611ac = new URL(_0x30fcca || window.location.href);
    const _0x5a68c9 = _0x1611ac.searchParams.get("code");
    const _0x349d96 = _0x1611ac.searchParams.get("state");
    const _0x5c6dfe = _0x1611ac.searchParams.get("error");
    if (_0x5c6dfe) {
      const _0xd0e251 = _0x1611ac.searchParams.get("error_description") || _0x5c6dfe;
      throw new x(_0x5c6dfe, _0xd0e251);
    }
    if (!_0x5a68c9) {
      throw new x("missing_code", "No authorization code in callback URL");
    }
    const _0x3164d4 = this.storage.getAuthState();
    if (!_0x3164d4.state || _0x3164d4.state !== _0x349d96) {
      throw new x("state_mismatch", "State parameter does not match. Possible CSRF attack.");
    }
    if (!_0x3164d4.verifier) {
      throw new x("missing_verifier", "PKCE verifier not found. Did you call login() first?");
    }
    const _0x2f822b = await this.exchangeCode(_0x5a68c9, _0x3164d4.verifier);
    this.storage.clearAuthState();
    if (this.config.autoStore) {
      this.storage.saveTokens(_0x2f822b);
    }
    const _0x43e2f8 = await this.getUser(_0x2f822b.access_token);
    if (typeof window != "undefined" && window.history) {
      const _0x126632 = new URL(window.location.href);
      _0x126632.searchParams.delete("code");
      _0x126632.searchParams.delete("state");
      window.history.replaceState({}, "", _0x126632.toString());
    }
    return {
      user: _0x43e2f8,
      tokens: _0x2f822b
    };
  }
  async exchangeCode(_0x36a9b7, _0x36342f) {
    const _0x1d3942 = await fetch(this.config.baseUrl + "/api/v1/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        grant_type: "authorization_code",
        code: _0x36a9b7,
        client_id: this.config.clientId,
        redirect_uri: this.config.redirectUri,
        code_verifier: _0x36342f
      })
    });
    if (!_0x1d3942.ok) {
      const _0x119906 = await _0x1d3942.json().catch(() => ({}));
      throw new x(_0x119906.error || "token_exchange_failed", _0x119906.error_description || "Token exchange failed (" + _0x1d3942.status + ")");
    }
    return _0x1d3942.json();
  }
  async refreshToken(_0x3e12ca) {
    const _0x16bc18 = this.storage.getRefreshToken();
    if (!_0x16bc18) {
      throw new x("no_refresh_token", "No refresh token available");
    }
    const _0x19c93c = {
      grant_type: "refresh_token",
      refresh_token: _0x16bc18,
      client_id: this.config.clientId
    };
    if (_0x3e12ca) {
      _0x19c93c.client_secret = _0x3e12ca;
    }
    const _0x8719f5 = await fetch(this.config.baseUrl + "/api/v1/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(_0x19c93c)
    });
    if (!_0x8719f5.ok) {
      const _0x4ea893 = await _0x8719f5.json().catch(() => ({}));
      if (_0x8719f5.status === 400 || _0x8719f5.status === 401) {
        this.storage.clear();
      }
      throw new x(_0x4ea893.error || "refresh_failed", _0x4ea893.error_description || "Token refresh failed (" + _0x8719f5.status + ")");
    }
    const _0x3394bd = await _0x8719f5.json();
    if (this.config.autoStore) {
      this.storage.saveTokens(_0x3394bd);
    }
    return _0x3394bd;
  }
  async getUser(_0x361a94) {
    return this.apiGet("/api/v1/oauth2/users/@me", _0x361a94);
  }
  async getGuilds(_0x562ffe) {
    return this.apiGet("/api/v1/oauth2/users/@me/guilds", _0x562ffe);
  }
  async getConnections(_0x515720) {
    return this.apiGet("/api/v1/oauth2/users/@me/connections", _0x515720);
  }
  async getRelationships(_0x798455) {
    return this.apiGet("/api/v1/oauth2/users/@me/relationships", _0x798455);
  }
  async apiGet(_0x2c61c3, _0x360e6e) {
    const _0x8df347 = _0x360e6e || this.storage.getAccessToken();
    if (!_0x8df347) {
      throw new x("not_authenticated", "No access token available. Call login() first.");
    }
    const _0x566f81 = await fetch("" + this.config.baseUrl + _0x2c61c3, {
      headers: {
        Authorization: "Bearer " + _0x8df347
      }
    });
    if (!_0x566f81.ok) {
      const _0x450118 = await _0x566f81.json().catch(() => ({}));
      throw new x(_0x450118.error || "api_error", _0x450118.error_description || _0x450118.message || "API request failed (" + _0x566f81.status + ")");
    }
    return _0x566f81.json();
  }
  isLoggedIn() {
    return this.storage.isLoggedIn();
  }
  getAccessToken() {
    return this.storage.getAccessToken();
  }
  logout() {
    this.storage.clear();
  }
  openPopup(_0x103b1d) {
    const _0x27985a = this.config.popupOptions?.width || 500;
    const _0x244ff1 = this.config.popupOptions?.height || 700;
    const _0x273d35 = window.screenX + (window.outerWidth - _0x27985a) / 2;
    const _0x574e98 = window.screenY + (window.outerHeight - _0x244ff1) / 2;
    if (!window.open(_0x103b1d, "jubbio-auth", "width=" + _0x27985a + ",height=" + _0x244ff1 + ",left=" + _0x273d35 + ",top=" + _0x574e98 + ",toolbar=no,menubar=no")) {
      window.location.href = _0x103b1d;
    }
  }
}
class x extends Error {
  constructor(_0x3a211f, _0x5c1b8f) {
    super(_0x5c1b8f);
    this.name = "JubbioAuthError";
    this.code = _0x3a211f;
  }
}
const m = _0x343845.createContext(null);
function p({
  config: _0x85730c,
  children: _0x54b1e4
}) {
  const _0x5ea638 = _0x343845.useMemo(() => new h(_0x85730c), [_0x85730c.clientId, _0x85730c.redirectUri]);
  const [_0x3390f8, _0x5f483e] = _0x343845.useState(null);
  const [_0x1e6460, _0x5822b6] = _0x343845.useState(false);
  const _0x163539 = _0x5ea638.isLoggedIn();
  _0x343845.useEffect(() => {
    if (_0x163539 && !_0x3390f8) {
      _0x5822b6(true);
      _0x5ea638.getUser().then(_0x5f483e).catch(() => {}).finally(() => _0x5822b6(false));
    }
  }, [_0x163539]);
  const _0x13c876 = {
    auth: _0x5ea638,
    user: _0x3390f8,
    isLoggedIn: _0x163539,
    isLoading: _0x1e6460,
    login: async () => {
      _0x5822b6(true);
      try {
        await _0x5ea638.login();
      } catch (_0x41223a) {
        _0x5822b6(false);
      }
    },
    logout: () => {
      _0x5ea638.logout();
      _0x5f483e(null);
    },
    setUser: _0x5f483e
  };
  return _0x4be8b2.jsx(m.Provider, {
    value: _0x13c876,
    children: _0x54b1e4
  });
}
function g() {
  const _0x3837e5 = _0x343845.useContext(m);
  if (!_0x3837e5) {
    throw new Error("useJubbio must be used within <JubbioProvider>");
  }
  return _0x3837e5;
}
const f = "#5865F2";
const y = "#4752C4";
const b = "#FFFFFF";
const j = "#1E1F22";
const v = "#2B2D31";
const w = "#B5BAC1";
const k = "#ED4245";
const N = {
  small: {
    padding: "8px 16px",
    fontSize: "13px",
    iconSize: 16,
    height: "32px"
  },
  medium: {
    padding: "10px 20px",
    fontSize: "14px",
    iconSize: 20,
    height: "40px"
  },
  large: {
    padding: "14px 28px",
    fontSize: "16px",
    iconSize: 24,
    height: "48px"
  }
};
function S({
  size: _0x5a6876 = 20,
  color: _0x1aff40 = "#FFFFFF"
}) {
  return _0x4be8b2.jsx("svg", {
    width: _0x5a6876,
    height: _0x5a6876,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: _0x4be8b2.jsx("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z",
      fill: _0x1aff40
    })
  });
}
function _({
  label: _0x32334b = "Jubbio ile Giriş Yap",
  size: _0x489733 = "medium",
  theme: _0x53c74c = "brand",
  showLogo: _0x553eea = true,
  fullWidth: _0x5e1baa = false,
  className: _0x2b7bb1 = "",
  style: _0x451d1b,
  children: _0x444bc3,
  disabled: _0x320ebf
}) {
  const {
    login: _0x5bbb39,
    isLoading: _0xf506c8
  } = g();
  const _0x22174a = N[_0x489733];
  const _0x138f30 = {
    brand: {
      bg: f,
      hover: y,
      color: b,
      logoColor: b,
      border: "none"
    },
    dark: {
      bg: j,
      hover: v,
      color: b,
      logoColor: f,
      border: "none"
    },
    light: {
      bg: b,
      hover: "#F2F3F5",
      color: "#2E3338",
      logoColor: f,
      border: "1px solid #D3D6DA"
    }
  }[_0x53c74c];
  const _0xdfcff1 = _0x343845.useCallback(() => {
    _0x5bbb39();
  }, [_0x5bbb39]);
  const _0x265246 = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    border: _0x138f30.border,
    borderRadius: "8px",
    cursor: _0xf506c8 || _0x320ebf ? "wait" : "pointer",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontWeight: 600,
    transition: "background-color 0.17s ease, transform 0.1s ease",
    backgroundColor: _0x138f30.bg,
    color: _0x138f30.color,
    fontSize: _0x22174a.fontSize,
    padding: _0x22174a.padding,
    height: _0x22174a.height,
    width: _0x5e1baa ? "100%" : undefined,
    opacity: _0xf506c8 || _0x320ebf ? 0.7 : 1,
    ..._0x451d1b
  };
  return _0x4be8b2.jsx("button", {
    type: "button",
    className: ("jubbio-login-btn " + _0x2b7bb1).trim(),
    style: _0x265246,
    onClick: _0xdfcff1,
    disabled: _0xf506c8 || _0x320ebf,
    "aria-label": _0x32334b,
    onMouseEnter: _0x4ff4cc => {
      _0x4ff4cc.target.style.backgroundColor = _0x138f30.hover;
    },
    onMouseLeave: _0x5f4d8f => {
      _0x5f4d8f.target.style.backgroundColor = _0x138f30.bg;
    },
    children: _0x444bc3 ?? _0x4be8b2.jsxs(_0x4be8b2.Fragment, {
      children: [_0x553eea && _0x4be8b2.jsx(S, {
        size: _0x22174a.iconSize,
        color: _0x138f30.logoColor
      }), _0x4be8b2.jsx("span", {
        children: _0xf506c8 ? "Yükleniyor..." : _0x32334b
      })]
    })
  });
}
function C({
  successRedirect: _0x32beac = "/",
  redirectDelay: _0x2caa57 = 1500,
  loadingComponent: _0x4c2a08,
  successComponent: _0x39a5fa,
  errorComponent: _0x1958f9,
  onSuccess: _0x295f7c,
  onError: _0x5a19de
}) {
  const {
    auth: _0x406921,
    setUser: _0x131ed1
  } = g();
  const [_0x5ba075, _0x3bbe47] = _0x343845.useState("loading");
  const [_0x29c1d0, _0x47a863] = _0x343845.useState("");
  const [_0x24ebba, _0x53153d] = _0x343845.useState("");
  _0x343845.useEffect(() => {
    _0x406921.handleCallback().then(_0x103c6e => {
      _0x131ed1(_0x103c6e.user);
      _0x47a863(_0x103c6e.user.display_name || _0x103c6e.user.username);
      _0x3bbe47("success");
      if (_0x295f7c != null) {
        _0x295f7c(_0x103c6e);
      }
      setTimeout(() => {
        window.location.href = _0x32beac;
      }, _0x2caa57);
    }).catch(_0x172932 => {
      _0x53153d(_0x172932.message);
      _0x3bbe47("error");
      if (_0x5a19de != null) {
        _0x5a19de(_0x172932);
      }
    });
  }, []);
  const _0x3fcb6a = {
    position: "fixed",
    inset: 0,
    zIndex: 99999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "16px",
    background: j,
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    color: b
  };
  if (_0x5ba075 === "loading") {
    if (_0x4c2a08) {
      return _0x4be8b2.jsx(_0x4be8b2.Fragment, {
        children: _0x4c2a08
      });
    } else {
      return _0x4be8b2.jsxs("div", {
        style: _0x3fcb6a,
        children: [_0x4be8b2.jsx("div", {
          style: {
            width: 40,
            height: 40,
            border: "3px solid " + w,
            borderTopColor: f,
            borderRadius: "50%",
            animation: "jubbio-spin 0.8s linear infinite"
          }
        }), _0x4be8b2.jsx("p", {
          style: {
            fontSize: 16,
            margin: 0,
            color: w
          },
          children: "Giriş yapılıyor..."
        }), _0x4be8b2.jsx("style", {
          children: "@keyframes jubbio-spin { to { transform: rotate(360deg); } }"
        })]
      });
    }
  } else if (_0x5ba075 === "success") {
    if (_0x39a5fa) {
      return _0x4be8b2.jsx(_0x4be8b2.Fragment, {
        children: _0x39a5fa(_0x29c1d0)
      });
    } else {
      return _0x4be8b2.jsxs("div", {
        style: _0x3fcb6a,
        children: [_0x4be8b2.jsx("div", {
          style: {
            fontSize: 48
          },
          children: "✓"
        }), _0x4be8b2.jsxs("p", {
          style: {
            fontSize: 18,
            fontWeight: 600,
            margin: 0
          },
          children: ["Hoş geldin, ", _0x29c1d0, "!"]
        }), _0x4be8b2.jsx("p", {
          style: {
            fontSize: 14,
            margin: 0,
            color: w
          },
          children: "Yönlendiriliyorsun..."
        })]
      });
    }
  } else if (_0x1958f9) {
    return _0x4be8b2.jsx(_0x4be8b2.Fragment, {
      children: _0x1958f9(_0x24ebba)
    });
  } else {
    return _0x4be8b2.jsxs("div", {
      style: _0x3fcb6a,
      children: [_0x4be8b2.jsx("div", {
        style: {
          fontSize: 48
        },
        children: "✕"
      }), _0x4be8b2.jsx("p", {
        style: {
          fontSize: 18,
          fontWeight: 600,
          margin: 0,
          color: k
        },
        children: "Giriş başarısız"
      }), _0x4be8b2.jsx("p", {
        style: {
          fontSize: 14,
          margin: 0,
          color: w
        },
        children: _0x24ebba
      })]
    });
  }
}
const z = "https://gateway.jubbio.com";
const I = window.location.origin + "/test/callback";
const A = ["identify", "email", "guilds", "connections", "guilds.join", "guilds.members.read", "guilds.channels.read", "guilds.channels.write", "guilds.roles.write", "applications.commands", "webhook.incoming", "openid"];
function T() {
  const [_0x105060, _0x120b9f] = _0x343845.useState(() => sessionStorage.getItem("oauth2_test_client_id") || "");
  const [_0x3273cf, _0x1d34e6] = _0x343845.useState(A.join(" "));
  const _0x1a3346 = _0x343845.useMemo(() => _0x105060.trim() ? {
    clientId: _0x105060.trim(),
    redirectUri: I,
    scopes: _0x3273cf.split(/\s+/).filter(Boolean),
    baseUrl: z
  } : null, [_0x105060, _0x3273cf]);
  const _0x38f69e = _0x343845.useCallback(() => {
    sessionStorage.setItem("oauth2_test_client_id", _0x105060.trim());
    sessionStorage.setItem("oauth2_test_scopes", _0x3273cf);
  }, [_0x105060, _0x3273cf]);
  return _0x4be8b2.jsxs("div", {
    className: "w-full max-w-md space-y-6",
    children: [_0x4be8b2.jsxs("div", {
      className: "text-center space-y-3",
      children: [_0x4be8b2.jsxs("div", {
        className: "flex items-center justify-center gap-2",
        children: [_0x4be8b2.jsx("img", {
          src: "/jubbio-logo-32x32.svg",
          alt: "Jubbio",
          className: "w-10 h-10"
        }), _0x4be8b2.jsx("span", {
          className: "text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent",
          children: "Jubbio"
        })]
      }), _0x4be8b2.jsx("h1", {
        className: "text-xl font-semibold text-text-primary",
        children: "OAuth2 Test"
      }), _0x4be8b2.jsx("p", {
        className: "text-sm text-text-tertiary",
        children: "@jubbio/auth-react SDK ile giriş testi"
      })]
    }), _0x4be8b2.jsxs("div", {
      className: "space-y-4 rounded-xl border border-border-default bg-surface-overlay p-5",
      children: [_0x4be8b2.jsxs("div", {
        className: "space-y-2",
        children: [_0x4be8b2.jsx("label", {
          className: "text-sm font-medium text-text-secondary",
          children: "Client ID"
        }), _0x4be8b2.jsx("input", {
          type: "text",
          value: _0x105060,
          onChange: _0x4072ff => _0x120b9f(_0x4072ff.target.value),
          placeholder: "Developer Portal'dan alınan client_id",
          className: "w-full rounded-lg border border-border-default bg-surface-base px-3 py-2 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-primary/50"
        })]
      }), _0x4be8b2.jsxs("div", {
        className: "space-y-2",
        children: [_0x4be8b2.jsx("label", {
          className: "text-sm font-medium text-text-secondary",
          children: "Scopes"
        }), _0x4be8b2.jsx("input", {
          type: "text",
          value: _0x3273cf,
          onChange: _0x2f219d => _0x1d34e6(_0x2f219d.target.value),
          placeholder: "identify email guilds",
          className: "w-full rounded-lg border border-border-default bg-surface-base px-3 py-2 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-primary/50"
        }), _0x4be8b2.jsx("p", {
          className: "text-xs text-text-tertiary",
          children: "identify, email, guilds, connections, openid..."
        })]
      })]
    }), _0x1a3346 ? _0x4be8b2.jsx(p, {
      config: _0x1a3346,
      children: _0x4be8b2.jsx(U, {
        onBeforeLogin: _0x38f69e
      })
    }) : _0x4be8b2.jsxs("div", {
      className: "space-y-3",
      children: [_0x4be8b2.jsxs(_0x20fadf, {
        size: "lg",
        className: "w-full gap-2 text-base",
        disabled: true,
        children: [_0x4be8b2.jsx("img", {
          src: "/jubbio-logo-32x32.svg",
          alt: "",
          className: "size-5 opacity-50"
        }), "Jubbio ile Giriş Yap"]
      }), _0x4be8b2.jsxs("p", {
        className: "text-xs text-center text-status-danger",
        children: ["Önce Client ID girin. Redirect URI: ", _0x4be8b2.jsx("code", {
          className: "text-text-secondary",
          children: I
        })]
      })]
    })]
  });
}
function U({
  onBeforeLogin: _0x15888f
}) {
  const {
    login: _0x556ac2
  } = g();
  const _0x507089 = _0x343845.useCallback(async () => {
    _0x15888f();
    await _0x556ac2();
  }, [_0x556ac2, _0x15888f]);
  return _0x4be8b2.jsx("div", {
    onClick: _0x507089,
    children: _0x4be8b2.jsx(_, {
      label: "Jubbio ile Giriş Yap",
      size: "large",
      theme: "brand",
      fullWidth: true
    })
  });
}
function F() {
  const _0x220e30 = sessionStorage.getItem("oauth2_test_client_id") || "";
  const _0x5bb284 = sessionStorage.getItem("oauth2_test_scopes") || "identify email";
  const _0xee6dc5 = _0x343845.useMemo(() => ({
    clientId: _0x220e30,
    redirectUri: I,
    scopes: _0x5bb284.split(/\s+/).filter(Boolean),
    baseUrl: z
  }), [_0x220e30, _0x5bb284]);
  return _0x4be8b2.jsx(p, {
    config: _0xee6dc5,
    children: _0x4be8b2.jsx(R, {})
  });
}
function R() {
  const _0x20675d = _0xec7663();
  const {
    auth: _0x277fb3
  } = g();
  const [_0x4f3ab7, _0x53d075] = _0x343845.useState(null);
  const [_0x15fffe, _0x102da6] = _0x343845.useState({});
  const [_0x4e3952, _0x566a88] = _0x343845.useState("profile");
  const [_0x1bf3b1, _0x492b6b] = _0x343845.useState(null);
  const _0x3a0b27 = _0x343845.useCallback(async _0x834df5 => {
    _0x53d075(_0x834df5);
    const _0x222a78 = (_0x834df5.tokens.scope || "").split(" ");
    const _0x479689 = {};
    const _0x2e0879 = [];
    if (_0x222a78.includes("guilds")) {
      _0x2e0879.push(_0x277fb3.getGuilds().then(_0x37d558 => {
        _0x479689.guilds = _0x37d558;
      }).catch(_0x457038 => {
        _0x479689.guildsError = _0x457038.message;
      }));
    }
    if (_0x222a78.includes("connections")) {
      _0x2e0879.push(_0x277fb3.getConnections().then(_0x37f45e => {
        _0x479689.connections = _0x37f45e;
      }).catch(_0xf56143 => {
        _0x479689.connectionsError = _0xf56143.message;
      }));
    }
    if (_0x222a78.includes("relationships.read")) {
      _0x2e0879.push(_0x277fb3.getRelationships().then(_0x5d110a => {
        _0x479689.relationships = _0x5d110a;
      }).catch(_0x3f4338 => {
        _0x479689.relationshipsError = _0x3f4338.message;
      }));
    }
    await Promise.all(_0x2e0879);
    _0x102da6({
      ..._0x479689
    });
  }, [_0x277fb3]);
  const _0xe6d6ba = _0x343845.useCallback(() => {
    _0x277fb3.logout();
    sessionStorage.removeItem("oauth2_test_client_id");
    sessionStorage.removeItem("oauth2_test_scopes");
    _0x20675d("/test");
  }, [_0x277fb3, _0x20675d]);
  const _0x1982af = _0x343845.useCallback((_0x1f50ba, _0x457372) => {
    _0x3ec4d5(_0x1f50ba);
    _0x492b6b(_0x457372);
    setTimeout(() => _0x492b6b(null), 2000);
  }, []);
  if (!_0x4f3ab7) {
    return _0x4be8b2.jsx("div", {
      className: "w-full max-w-md",
      children: _0x4be8b2.jsx(C, {
        successRedirect: "",
        redirectDelay: 999999,
        onSuccess: _0x3a0b27,
        onError: _0x554fe2 => console.error("OAuth2 error:", _0x554fe2),
        errorComponent: _0x29cea3 => _0x4be8b2.jsxs("div", {
          className: "space-y-4 text-center",
          children: [_0x4be8b2.jsx("div", {
            className: "size-16 rounded-full bg-status-danger/10 flex items-center justify-center mx-auto",
            children: _0x4be8b2.jsx(_0x15231b, {
              icon: "solar:close-circle-bold-duotone",
              className: "size-8 text-status-danger"
            })
          }), _0x4be8b2.jsx("h2", {
            className: "text-lg font-semibold text-text-primary",
            children: "Giriş Başarısız"
          }), _0x4be8b2.jsx("p", {
            className: "text-sm text-text-tertiary",
            children: _0x29cea3
          }), _0x4be8b2.jsx(_0x20fadf, {
            variant: "outline",
            className: "w-full",
            onClick: () => _0x20675d("/test"),
            children: "Tekrar Dene"
          })]
        }),
        loadingComponent: _0x4be8b2.jsxs("div", {
          className: "flex flex-col items-center gap-3 py-12",
          children: [_0x4be8b2.jsx(_0x179842, {
            className: "size-8 animate-spin text-accent-primary"
          }), _0x4be8b2.jsx("p", {
            className: "text-sm text-text-tertiary",
            children: "Giriş yapılıyor..."
          })]
        })
      })
    });
  }
  const _0x2f98a4 = _0x4f3ab7.user;
  const _0x10283e = _0x4f3ab7.tokens;
  const _0x22e379 = (_0x10283e.scope || "").split(" ").filter(Boolean);
  return _0x4be8b2.jsxs("div", {
    className: "w-full max-w-lg space-y-5",
    children: [_0x4be8b2.jsxs("div", {
      className: "rounded-xl border border-border-default bg-surface-overlay overflow-hidden",
      children: [_0x4be8b2.jsx("div", {
        className: "h-20 bg-gradient-to-r from-accent-primary/30 to-primary/20"
      }), _0x4be8b2.jsx("div", {
        className: "px-5 pb-4 -mt-8",
        children: _0x4be8b2.jsxs("div", {
          className: "flex items-end gap-3",
          children: [_0x4be8b2.jsx("div", {
            className: "size-16 rounded-full border-4 border-surface-overlay bg-surface-base overflow-hidden shrink-0",
            children: _0x2f98a4.avatar_url ? _0x4be8b2.jsx("img", {
              src: _0x2f98a4.avatar_url,
              alt: "",
              className: "size-full object-cover"
            }) : _0x4be8b2.jsx("div", {
              className: "size-full bg-surface-inset flex items-center justify-center",
              children: _0x4be8b2.jsx(_0x15231b, {
                icon: "solar:user-bold-duotone",
                className: "size-6 text-text-tertiary"
              })
            })
          }), _0x4be8b2.jsxs("div", {
            className: "min-w-0 pb-0.5 flex-1",
            children: [_0x4be8b2.jsxs("div", {
              className: "flex items-center gap-2",
              children: [_0x4be8b2.jsx("h3", {
                className: "text-base font-semibold text-text-primary truncate",
                children: _0x2f98a4.display_name || _0x2f98a4.username
              }), _0x4be8b2.jsx(_0x15231b, {
                icon: "solar:check-circle-bold-duotone",
                className: "size-4 text-status-success shrink-0"
              })]
            }), _0x4be8b2.jsxs("p", {
              className: "text-xs text-text-tertiary truncate",
              children: ["@", _0x2f98a4.username]
            })]
          }), _0x4be8b2.jsxs(_0x20fadf, {
            variant: "outline",
            size: "sm",
            className: "gap-1.5 shrink-0",
            onClick: _0xe6d6ba,
            children: [_0x4be8b2.jsx(_0x15231b, {
              icon: "solar:logout-2-bold-duotone",
              className: "size-3.5"
            }), "Çıkış"]
          })]
        })
      })]
    }), _0x4be8b2.jsx("div", {
      className: "flex flex-wrap gap-1.5",
      children: _0x22e379.map(_0x511b05 => _0x4be8b2.jsx("span", {
        className: "px-2 py-0.5 rounded-full bg-accent-primary/10 text-[11px] font-medium text-accent-primary",
        children: _0x511b05
      }, _0x511b05))
    }), _0x4be8b2.jsx("div", {
      className: "flex gap-1 rounded-lg bg-surface-inset/50 p-1",
      children: [{
        id: "profile",
        label: "Profil"
      }, {
        id: "guilds",
        label: "Sunucular"
      }, {
        id: "connections",
        label: "Bağlantılar"
      }, {
        id: "relationships",
        label: "Arkadaşlar"
      }, {
        id: "token",
        label: "Token"
      }].map(_0x2e57b1 => _0x4be8b2.jsx("button", {
        onClick: () => _0x566a88(_0x2e57b1.id),
        className: "flex-1 px-2 py-1.5 rounded-md text-xs font-medium transition-colors " + (_0x4e3952 === _0x2e57b1.id ? "bg-surface-overlay text-text-primary shadow-sm" : "text-text-tertiary hover:text-text-secondary"),
        children: _0x2e57b1.label
      }, _0x2e57b1.id))
    }), _0x4be8b2.jsxs("div", {
      className: "rounded-xl border border-border-default bg-surface-overlay overflow-hidden",
      children: [_0x4e3952 === "profile" && _0x4be8b2.jsx(E, {
        user: _0x2f98a4
      }), _0x4e3952 === "guilds" && _0x4be8b2.jsx(D, {
        guilds: _0x15fffe.guilds,
        error: _0x15fffe.guildsError,
        hasScope: _0x22e379.includes("guilds")
      }), _0x4e3952 === "connections" && _0x4be8b2.jsx($, {
        data: _0x15fffe.connections,
        error: _0x15fffe.connectionsError,
        hasScope: _0x22e379.includes("connections"),
        scopeName: "connections"
      }), _0x4e3952 === "relationships" && _0x4be8b2.jsx(P, {
        data: _0x15fffe.relationships,
        error: _0x15fffe.relationshipsError,
        hasScope: _0x22e379.includes("relationships.read")
      }), _0x4e3952 === "token" && _0x4be8b2.jsx(L, {
        tokens: _0x10283e,
        copied: _0x1bf3b1,
        onCopy: _0x1982af
      })]
    }), _0x4be8b2.jsx(_0x20fadf, {
      variant: "outline",
      className: "w-full",
      onClick: () => {
        _0x277fb3.logout();
        _0x20675d("/test");
      },
      children: "Yeni Test"
    })]
  });
}
function E({
  user: _0x4a26b5
}) {
  const _0x45d401 = [["ID", _0x4a26b5.id], ["Kullanıcı Adı", _0x4a26b5.username], ["Görünen Ad", _0x4a26b5.display_name], ["E-posta", _0x4a26b5.email], ["Katılım", _0x4a26b5.created_at ? new Date(_0x4a26b5.created_at).toLocaleDateString("tr-TR") : null], ["Avatar", _0x4a26b5.avatar_url]].filter(([, _0x16da9a]) => _0x16da9a != null);
  return _0x4be8b2.jsx("div", {
    className: "divide-y divide-border-default/50",
    children: _0x45d401.map(([_0x37caa7, _0x464aaa]) => _0x4be8b2.jsxs("div", {
      className: "flex items-center justify-between px-4 py-2.5",
      children: [_0x4be8b2.jsx("span", {
        className: "text-xs text-text-tertiary",
        children: _0x37caa7
      }), String(_0x464aaa).startsWith("http") ? _0x4be8b2.jsx("a", {
        href: String(_0x464aaa),
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-xs text-accent-primary truncate max-w-[60%]",
        children: String(_0x464aaa)
      }) : _0x4be8b2.jsx("span", {
        className: "text-sm text-text-primary truncate max-w-[60%]",
        children: String(_0x464aaa)
      })]
    }, _0x37caa7))
  });
}
function D({
  guilds: _0x3ddbfa,
  error: _0x2feb1f,
  hasScope: _0x3dbe90
}) {
  if (_0x3dbe90) {
    if (_0x2feb1f) {
      return _0x4be8b2.jsx(J, {
        error: _0x2feb1f
      });
    } else if (_0x3ddbfa) {
      if (_0x3ddbfa.length) {
        return _0x4be8b2.jsx("div", {
          className: "divide-y divide-border-default/50 max-h-80 overflow-y-auto scrollbar-thin",
          children: _0x3ddbfa.map(_0x1b76c5 => _0x4be8b2.jsxs("div", {
            className: "flex items-center gap-3 px-4 py-2.5",
            children: [_0x4be8b2.jsx("div", {
              className: "size-9 rounded-full bg-surface-inset overflow-hidden shrink-0 flex items-center justify-center",
              children: _0x1b76c5.icon_url ? _0x4be8b2.jsx("img", {
                src: _0x1b76c5.icon_url,
                alt: "",
                className: "size-full object-cover"
              }) : _0x4be8b2.jsx("span", {
                className: "text-xs font-medium text-text-tertiary",
                children: _0x1b76c5.name.charAt(0)
              })
            }), _0x4be8b2.jsxs("div", {
              className: "min-w-0 flex-1",
              children: [_0x4be8b2.jsx("p", {
                className: "text-sm text-text-primary truncate",
                children: _0x1b76c5.name
              }), _0x4be8b2.jsxs("p", {
                className: "text-[11px] text-text-tertiary",
                children: [_0x1b76c5.member_count, " üye"]
              })]
            }), _0x4be8b2.jsx("span", {
              className: "text-[10px] text-text-muted font-mono",
              children: _0x1b76c5.id
            })]
          }, _0x1b76c5.id))
        });
      } else {
        return _0x4be8b2.jsx(O, {
          label: "Sunucu bulunamadı"
        });
      }
    } else {
      return _0x4be8b2.jsx(K, {});
    }
  } else {
    return _0x4be8b2.jsx(G, {
      scope: "guilds"
    });
  }
}
function P({
  data: _0x53ee24,
  error: _0x1854cf,
  hasScope: _0x4e211e
}) {
  if (!_0x4e211e) {
    return _0x4be8b2.jsx(G, {
      scope: "relationships.read"
    });
  }
  if (_0x1854cf) {
    return _0x4be8b2.jsx(J, {
      error: _0x1854cf
    });
  }
  if (!_0x53ee24) {
    return _0x4be8b2.jsx(K, {});
  }
  if (!_0x53ee24.length) {
    return _0x4be8b2.jsx(O, {
      label: "Arkadaş bulunamadı"
    });
  }
  const _0x433273 = _0x53ee24;
  return _0x4be8b2.jsx("div", {
    className: "divide-y divide-border-default/50 max-h-80 overflow-y-auto scrollbar-thin",
    children: _0x433273.map(_0x4409bc => _0x4be8b2.jsxs("div", {
      className: "flex items-center gap-3 px-4 py-2.5",
      children: [_0x4be8b2.jsx("div", {
        className: "size-9 rounded-full bg-surface-inset overflow-hidden shrink-0 flex items-center justify-center",
        children: _0x4409bc.avatar_url ? _0x4be8b2.jsx("img", {
          src: _0x4409bc.avatar_url,
          alt: "",
          className: "size-full object-cover"
        }) : _0x4be8b2.jsx(_0x15231b, {
          icon: "solar:user-bold-duotone",
          className: "size-4 text-text-tertiary"
        })
      }), _0x4be8b2.jsxs("div", {
        className: "min-w-0 flex-1",
        children: [_0x4be8b2.jsx("p", {
          className: "text-sm text-text-primary truncate",
          children: _0x4409bc.display_name || _0x4409bc.username
        }), _0x4be8b2.jsxs("p", {
          className: "text-[11px] text-text-tertiary",
          children: ["@", _0x4409bc.username]
        })]
      }), _0x4409bc.since && _0x4be8b2.jsx("span", {
        className: "text-[10px] text-text-muted",
        children: new Date(_0x4409bc.since).toLocaleDateString("tr-TR")
      })]
    }, _0x4409bc.id))
  });
}
function $({
  data: _0x2b134f,
  error: _0x10ace0,
  hasScope: _0x36a714,
  scopeName: _0x21ec60
}) {
  if (_0x36a714) {
    if (_0x10ace0) {
      return _0x4be8b2.jsx(J, {
        error: _0x10ace0
      });
    } else if (_0x2b134f) {
      if (Array.isArray(_0x2b134f) && !_0x2b134f.length) {
        return _0x4be8b2.jsx(O, {
          label: "Veri bulunamadı"
        });
      } else {
        return _0x4be8b2.jsx("pre", {
          className: "p-4 text-xs text-text-secondary overflow-auto max-h-80 scrollbar-thin",
          children: JSON.stringify(_0x2b134f, null, 2)
        });
      }
    } else {
      return _0x4be8b2.jsx(K, {});
    }
  } else {
    return _0x4be8b2.jsx(G, {
      scope: _0x21ec60
    });
  }
}
function L({
  tokens: _0xb4fdf0,
  copied: _0x273436,
  onCopy: _0x4d3c94
}) {
  return _0x4be8b2.jsxs("div", {
    className: "p-4 space-y-3",
    children: [_0x4be8b2.jsx(B, {
      label: "Access Token",
      value: _0xb4fdf0.access_token,
      copied: _0x273436,
      onCopy: _0x4d3c94,
      copyKey: "access"
    }), _0xb4fdf0.refresh_token && _0x4be8b2.jsx(B, {
      label: "Refresh Token",
      value: _0xb4fdf0.refresh_token,
      copied: _0x273436,
      onCopy: _0x4d3c94,
      copyKey: "refresh"
    }), _0x4be8b2.jsxs("div", {
      className: "flex items-center justify-between text-xs text-text-tertiary pt-1",
      children: [_0x4be8b2.jsxs("span", {
        children: ["Süre: ", _0xb4fdf0.expires_in, "s"]
      }), _0x4be8b2.jsxs("span", {
        children: ["Tip: ", _0xb4fdf0.token_type]
      }), _0x4be8b2.jsxs("span", {
        children: ["Scope: ", _0xb4fdf0.scope]
      })]
    })]
  });
}
function B({
  label: _0xe8ee49,
  value: _0x16b026,
  copied: _0x18f1b7,
  onCopy: _0x2882a9,
  copyKey: _0x453c5d
}) {
  return _0x4be8b2.jsxs("div", {
    className: "space-y-1.5",
    children: [_0x4be8b2.jsxs("div", {
      className: "flex items-center justify-between gap-2",
      children: [_0x4be8b2.jsx("span", {
        className: "text-xs text-text-tertiary",
        children: _0xe8ee49
      }), _0x4be8b2.jsxs("button", {
        onClick: () => _0x2882a9(_0x16b026, _0x453c5d),
        className: "flex items-center gap-1 text-xs text-accent-primary hover:text-accent-primary/80 transition-colors",
        children: [_0x18f1b7 === _0x453c5d ? _0x4be8b2.jsx(_0x1a8c5e, {
          className: "size-3"
        }) : _0x4be8b2.jsx(_0x15231b, {
          icon: "solar:copy-bold-duotone",
          className: "size-3"
        }), _0x18f1b7 === _0x453c5d ? "Kopyalandı" : "Kopyala"]
      })]
    }), _0x4be8b2.jsx("code", {
      className: "block text-xs text-text-secondary bg-surface-base rounded-lg p-2 break-all max-h-20 overflow-auto scrollbar-thin",
      children: _0x16b026
    })]
  });
}
function G({
  scope: _0x3b29fa
}) {
  return _0x4be8b2.jsx("div", {
    className: "p-6 text-center",
    children: _0x4be8b2.jsxs("p", {
      className: "text-sm text-text-tertiary",
      children: [_0x4be8b2.jsx("code", {
        className: "text-text-secondary",
        children: _0x3b29fa
      }), " scope'u verilmemiş"]
    })
  });
}
function J({
  error: _0x36669d
}) {
  return _0x4be8b2.jsxs("div", {
    className: "p-4 flex items-start gap-2",
    children: [_0x4be8b2.jsx(_0x15231b, {
      icon: "solar:danger-triangle-bold-duotone",
      className: "size-4 text-status-danger mt-0.5 shrink-0"
    }), _0x4be8b2.jsx("p", {
      className: "text-sm text-status-danger",
      children: _0x36669d
    })]
  });
}
function K() {
  return _0x4be8b2.jsx("div", {
    className: "p-6 flex justify-center",
    children: _0x4be8b2.jsx(_0x179842, {
      className: "size-5 animate-spin text-accent-primary"
    })
  });
}
function O({
  label: _0x1ed011
}) {
  return _0x4be8b2.jsx("div", {
    className: "p-6 text-center text-sm text-text-tertiary",
    children: _0x1ed011
  });
}
function M({
  children: _0x59e0c5
}) {
  return _0x4be8b2.jsxs("div", {
    className: "min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden",
    children: [_0x4be8b2.jsxs("div", {
      className: "absolute inset-0 overflow-hidden pointer-events-none",
      children: [_0x4be8b2.jsx("div", {
        className: "absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl"
      }), _0x4be8b2.jsx("div", {
        className: "absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
      }), _0x4be8b2.jsx("div", {
        className: "absolute top-1/2 left-1/3 w-64 h-64 bg-primary/6 rounded-full blur-2xl"
      })]
    }), _0x4be8b2.jsx("div", {
      className: "relative z-10 w-full flex justify-center",
      children: _0x59e0c5
    })]
  });
}
function W() {
  return _0x4be8b2.jsx(M, {
    children: _0x4be8b2.jsx(T, {})
  });
}
function Y() {
  return _0x4be8b2.jsx(M, {
    children: _0x4be8b2.jsx(F, {})
  });
}
export { Y as TestOAuth2Callback, W as default };