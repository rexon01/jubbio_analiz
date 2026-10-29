import { v as _0x45b273, b as _0x5de1b5, f as _0x419651, r as _0x15f33d, d as _0x4d166d, b2 as _0x2efdd2, dp as _0x50fa31, P as _0x8d7b9e, j as _0x1b392a, I as _0x4d4250, an as _0x2cde2a, h as _0xcff330, n as _0x4576bf, p as _0x14d5e2, K as _0x334fe6, X as _0x4a1aee } from "./index-cQfEKR1W.js";
import { T as _0x41c986 } from "./TurnstileModal-DSCaGaLL.js";
import { b as _0x5deb27, a as _0x118a75, B as _0x33a765 } from "./developer-DXeZvdzI.js";
import { A as _0x438e01, a as _0x5cfcb0, b as _0x14a588 } from "./avatar-C-4BWxT3.js";
import { L as _0x45be0b } from "./loader-circle-CTtxa1g9.js";
import { A as _0x2306c3 } from "./arrow-right-DvlsXLCB.js";
import "./submit-button-B2LF_DTf.js";
const _ = "https://gateway.jubbio.com";
function S() {
  const [_0x9086f9] = _0x45b273();
  const {
    t: _0x227dd2
  } = _0x5de1b5();
  const {
    isAuthenticated: _0x434f44,
    accessToken: _0x36984a,
    user: _0x3df5a2
  } = _0x419651();
  const _0x200c77 = _0x9086f9.get("client_id");
  const _0x1631bc = _0x9086f9.get("redirect_uri");
  const _0x297b1f = _0x9086f9.get("scope") || "";
  const _0x322a54 = _0x9086f9.get("state") || "";
  const _0xe2cb90 = _0x9086f9.get("permissions") || "0";
  const _0x497fd8 = _0x9086f9.get("response_type") || "";
  const _0x3c0a1e = _0x9086f9.get("code_challenge") || "";
  const _0x4638f2 = _0x9086f9.get("code_challenge_method") || "";
  const [_0x4732ed, _0x43aec4] = _0x15f33d.useState(null);
  const [_0xb69b00, _0x1b5d13] = _0x15f33d.useState(true);
  const [_0x3aad20, _0x4d4472] = _0x15f33d.useState(null);
  const [_0x4cdf44, _0x522853] = _0x15f33d.useState(false);
  const [_0x4745c3, _0x28f130] = _0x15f33d.useState(false);
  const [_0x44f359, _0x2200bb] = _0x15f33d.useState(null);
  const _0x9f051b = _0x36984a || _0x44f359;
  const _0x36e530 = _0x434f44 || !!_0x44f359;
  const _0x28dd67 = _0x4d166d();
  const _0x371f6a = _0x2efdd2(_0x92b93b => _0x92b93b.openOAuth2Modal);
  const _0xb5ffd1 = _0x15f33d.useMemo(() => _0x297b1f.split(/\s+/).filter(Boolean), [_0x297b1f]);
  const _0x1f2509 = _0xb5ffd1.includes("bot");
  const _0x4c44a8 = _0x15f33d.useRef(false);
  _0x15f33d.useEffect(() => {
    if (!_0x4c44a8.current) {
      if (_0x200c77 && _0x434f44 && _0x1f2509) {
        _0x4c44a8.current = true;
        _0x371f6a({
          clientId: _0x200c77,
          scope: _0x297b1f,
          permissions: _0xe2cb90,
          redirectUri: _0x1631bc,
          state: _0x322a54 || undefined,
          responseType: _0x497fd8 || undefined,
          codeChallenge: _0x3c0a1e || undefined,
          codeChallengeMethod: _0x4638f2 || undefined
        });
        _0x28dd67("/app", {
          replace: true
        });
      }
    }
  }, [_0x434f44, _0x1f2509, _0x200c77]);
  const _0x1cd107 = _0x15f33d.useRef(false);
  _0x15f33d.useEffect(() => {
    if (_0x1cd107.current) {
      return;
    }
    _0x1cd107.current = true;
    if (!_0x200c77) {
      return;
    }
    const _0x24e8ee = new URLSearchParams();
    _0x24e8ee.set("client_id", _0x200c77);
    if (_0x1631bc) {
      _0x24e8ee.set("redirect_uri", _0x1631bc);
    }
    if (_0x297b1f) {
      _0x24e8ee.set("scope", _0x297b1f);
    }
    if (_0x322a54) {
      _0x24e8ee.set("state", _0x322a54);
    }
    if (_0xe2cb90 !== "0") {
      _0x24e8ee.set("permissions", _0xe2cb90);
    }
    if (_0x497fd8) {
      _0x24e8ee.set("response_type", _0x497fd8);
    }
    if (_0x3c0a1e) {
      _0x24e8ee.set("code_challenge", _0x3c0a1e);
    }
    if (_0x4638f2) {
      _0x24e8ee.set("code_challenge_method", _0x4638f2);
    }
    _0x50fa31.get(_ + "/api/v1/oauth2/authorize?" + _0x24e8ee.toString()).then(_0x1834e0 => {
      _0x43aec4(_0x1834e0.data);
      _0x1b5d13(false);
    }).catch(_0x1ae8fe => {
      _0x4d4472(_0x1ae8fe?.response?.data?.message || _0x227dd2("oauth2.appInfoFailed"));
      _0x1b5d13(false);
    });
  }, [_0x200c77]);
  _0x15f33d.useEffect(() => {
    if (!_0xb69b00 && !!_0x4732ed && !_0x36e530) {
      _0x28f130(true);
    }
  }, [_0xb69b00, _0x4732ed, _0x36e530]);
  _0x15f33d.useEffect(() => {
    if (_0x36e530) {
      _0x28f130(false);
    }
  }, [_0x36e530]);
  const _0x55186e = parseInt(_0xe2cb90, 10);
  const _0x255208 = _0x15f33d.useMemo(() => _0x4732ed?.scopeInfo?.length ? _0x4732ed.scopeInfo : _0xb5ffd1.map(_0x324bdb => {
    const _0x3b716d = _0x5deb27.find(_0x10cbac => _0x10cbac.id === _0x324bdb);
    if (_0x3b716d) {
      return {
        scope: _0x324bdb,
        name: _0x3b716d.label,
        description: _0x3b716d.description
      };
    } else {
      return null;
    }
  }).filter(Boolean), [_0x4732ed, _0xb5ffd1]);
  const _0x1bf47f = _0x15f33d.useMemo(() => _0x118a75.filter(_0xd98e61 => (_0x55186e & _0xd98e61.value) === _0xd98e61.value), [_0x55186e]);
  const _0x55fa52 = _0x15f33d.useMemo(() => new Set(_0x33a765), []);
  const [_0x7e436b, _0x22aade] = _0x15f33d.useState(null);
  const _0x3fee37 = _0x15f33d.useCallback(async () => {
    if (_0x200c77) {
      if (!_0x1f2509 || _0x7e436b) {
        _0x522853(true);
        try {
          const _0xa4b8f0 = {
            client_id: _0x200c77,
            scope: _0x297b1f,
            permissions: _0xe2cb90,
            action: "approve"
          };
          if (_0x1631bc) {
            _0xa4b8f0.redirect_uri = _0x1631bc;
          }
          if (_0x322a54) {
            _0xa4b8f0.state = _0x322a54;
          }
          if (_0x7e436b) {
            _0xa4b8f0.guild_id = _0x7e436b;
          }
          if (_0x497fd8) {
            _0xa4b8f0.response_type = _0x497fd8;
          }
          if (_0x3c0a1e) {
            _0xa4b8f0.code_challenge = _0x3c0a1e;
          }
          if (_0x4638f2) {
            _0xa4b8f0.code_challenge_method = _0x4638f2;
          }
          const _0x571617 = {};
          if (_0x9f051b) {
            _0x571617.Authorization = "Bearer " + _0x9f051b;
          }
          const _0x4a0b59 = await _0x50fa31.post(_ + "/api/v1/oauth2/authorize", _0xa4b8f0, {
            headers: _0x571617
          });
          if (_0x4a0b59.data.redirect_url) {
            window.location.href = _0x4a0b59.data.redirect_url;
            return;
          }
          if (_0x4a0b59.data.success) {
            _0x8d7b9e.success(_0x227dd2("oauth2.botAdded", {
              name: _0x4732ed?.application?.name || "Bot"
            }));
            return;
          }
          _0x8d7b9e.success(_0x227dd2("oauth2.authSuccess"));
        } catch (_0x2c36d1) {} finally {
          _0x522853(false);
        }
      } else {
        _0x8d7b9e.error(_0x227dd2("oauth2.selectServerError"));
      }
    }
  }, [_0x200c77, _0x297b1f, _0xe2cb90, _0x1631bc, _0x322a54, _0x7e436b, _0x497fd8, _0x3c0a1e, _0x4638f2, _0x9f051b, _0x1f2509, _0x4732ed]);
  const _0x41d3c5 = _0x15f33d.useCallback(async () => {
    if (_0x200c77) {
      try {
        const _0x445748 = {
          client_id: _0x200c77,
          scope: _0x297b1f,
          action: "deny"
        };
        if (_0x1631bc) {
          _0x445748.redirect_uri = _0x1631bc;
        }
        if (_0x322a54) {
          _0x445748.state = _0x322a54;
        }
        const _0x39d3a8 = {};
        if (_0x9f051b) {
          _0x39d3a8.Authorization = "Bearer " + _0x9f051b;
        }
        const _0x38a79b = await _0x50fa31.post(_ + "/api/v1/oauth2/authorize", _0x445748, {
          headers: _0x39d3a8
        });
        if (_0x38a79b.data.redirect_url) {
          window.location.href = _0x38a79b.data.redirect_url;
          return;
        }
      } catch {}
      window.history.back();
    }
  }, [_0x200c77, _0x297b1f, _0x1631bc, _0x322a54, _0x9f051b]);
  const _0x54a99b = _0x15f33d.useCallback(_0x2f6e1a => {
    if (_0x1f2509 && _0x200c77) {
      _0x419651.getState().setAccessToken(_0x2f6e1a);
      _0x371f6a({
        clientId: _0x200c77,
        scope: _0x297b1f,
        permissions: _0xe2cb90,
        redirectUri: _0x1631bc,
        state: _0x322a54 || undefined,
        responseType: _0x497fd8 || undefined,
        codeChallenge: _0x3c0a1e || undefined,
        codeChallengeMethod: _0x4638f2 || undefined
      });
      _0x28dd67("/app", {
        replace: true
      });
      return;
    }
    _0x2200bb(_0x2f6e1a);
    _0x28f130(false);
  }, [_0x1f2509, _0x200c77, _0x297b1f, _0xe2cb90, _0x1631bc, _0x322a54, _0x497fd8, _0x3c0a1e, _0x4638f2, _0x28dd67, _0x371f6a]);
  if (!_0x200c77) {
    return <A><F message={_0x227dd2("oauth2.consent.missingClientId")} /></A>;
  }
  if (_0xb69b00) {
    return <A><div className="flex flex-col items-center gap-3 py-16"><_0x45be0b className="size-8 animate-spin text-accent-primary" /><p className="text-sm text-text-tertiary">{_0x227dd2("oauth2.appLoading")}</p></div></A>;
  }
  if (_0x3aad20) {
    return <A><F message={_0x3aad20} /></A>;
  }
  const _0x3a9fa0 = _0x4732ed.application;
  return <A><div className="w-full max-w-5xl"><div className="md:rounded-2xl md:border md:border-border-default md:bg-surface-raised/60 md:backdrop-blur-xl md:shadow-xl md:shadow-black/10 md:max-h-[85vh] md:min-h-[480px] md:overflow-hidden flex flex-col md:flex-row min-h-[100dvh] md:min-h-[480px]"><div className="md:w-2/5 shrink-0 bg-surface-base/50 border-b md:border-b-0 md:border-r border-border-default p-6 md:p-8 flex flex-col"><div className="flex items-center gap-2 mb-6 md:mb-8"><img src="/jubbio-logo-32x32.svg" alt="Jubbio" className="size-6" /><span className="text-sm font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Jubbio</span></div><div className="flex-1 flex flex-col items-center justify-center py-4"><_0x438e01 className="size-24 rounded-2xl ring-2 ring-border-subtle mb-4">{_0x3a9fa0.avatar_url ? <_0x5cfcb0 src={_0x3a9fa0.avatar_url} className="rounded-2xl" /> : <_0x14a588 className="rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800"><_0x4d4250 icon="solar:bot-bold-duotone" className="size-12 text-text-tertiary" /></_0x14a588>}</_0x438e01><h2 className="text-xl font-bold text-text-primary text-center">{_0x3a9fa0.name}</h2>{_0x3a9fa0.description && <p className="text-sm text-text-tertiary text-center mt-2 line-clamp-3 max-w-[300px]">{_0x3a9fa0.description}</p>}{_0x36e530 && <div className="mt-6 flex items-center gap-3"><div className="size-10 rounded-full bg-surface-overlay border border-border-default flex items-center justify-center overflow-hidden">{_0x3df5a2?.avatar_url ? <img src={_0x3df5a2.avatar_url} alt="" className="size-full object-cover" /> : <_0x4d4250 icon="solar:user-bold-duotone" className="size-5 text-text-tertiary" />}</div><_0x2306c3 className="size-4 text-text-muted" /><div className="size-10 rounded-xl bg-surface-overlay border border-border-default flex items-center justify-center overflow-hidden">{_0x3a9fa0.avatar_url ? <img src={_0x3a9fa0.avatar_url} alt="" className="size-full object-cover rounded-lg" /> : <_0x4d4250 icon="solar:bot-bold-duotone" className="size-5 text-text-tertiary" />}</div></div>}{_0x36e530 && <p className="text-xs text-text-muted mt-3 text-center">{_0x227dd2("oauth2.consent.continueAs", {
                name: _0x3df5a2?.display_name || _0x3df5a2?.username || "User"
              })}</p>}</div>{_0x4732ed?.redirect_uri && <div className="mt-auto pt-4"><p className="text-[11px] text-text-muted flex items-center gap-1"><_0x4d4250 icon="solar:square-arrow-right-up-bold-duotone" className="size-3 shrink-0" /><span className="truncate">{_0x227dd2("oauth2.consent.redirectTo", {
                  host: (() => {
                    try {
                      return new URL(_0x4732ed.redirect_uri).hostname;
                    } catch {
                      return _0x4732ed.redirect_uri;
                    }
                  })()
                })}</span></p></div>}</div><div className="flex-1 p-6 md:p-8 flex flex-col min-h-0">{_0x4745c3 ? <div className="flex-1 flex flex-col justify-center"><div className="mb-5"><h3 className="text-base font-semibold text-text-primary">{_0x227dd2("oauth2.consent.login")}</h3><p className="text-sm text-text-muted mt-1">{_0x227dd2("oauth2.consent.loginDesc", {
                  appName: _0x3a9fa0.name
                })}</p></div><_Component onSuccess={_0x54a99b} /></div> : _0x36e530 ? <_0x1b392a.Fragment><div className="mb-5"><h3 className="text-base font-semibold text-text-primary">{_0x227dd2("oauth2.consent.accessRequest", {
                  appName: _0x3a9fa0.name
                })}</h3><p className="text-sm text-text-muted mt-1">{_0x227dd2("oauth2.consent.accessDesc")}</p></div><div className="flex-1 overflow-y-auto -mx-1 px-1 space-y-4 scrollbar-thin">{_0x1f2509 && <C token={_0x9f051b} selectedServerId={_0x7e436b} onSelect={_0x22aade} />}{_0x255208.length > 0 && <div className="rounded-xl bg-surface-base/60 border border-border-default overflow-hidden divide-y divide-border-default/50">{_0x255208.map(_0xf68394 => {
                  const _0x1d979c = _0x1f2509 && _0x55fa52.has(_0xf68394.scope);
                  return <div className={"flex items-start gap-3 px-4 py-3 " + (_0x1d979c ? "opacity-40" : "")} key={_0xf68394.scope}><div className={"size-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 " + (_0x1d979c ? "bg-amber-500/15" : "bg-emerald-500/15")}>{_0x1d979c ? <_0x4d4250 icon="solar:danger-triangle-bold-duotone" className="size-3 text-amber-400" /> : <_0x2cde2a className="size-3 text-emerald-400" />}</div><div className="flex-1 min-w-0"><p className={"text-sm font-medium " + (_0x1d979c ? "text-text-muted line-through" : "text-text-secondary")}>{_0x227dd2("oauth2.scopes." + _0xf68394.scope.replace(/\./g, "_") + ".name", {
                          defaultValue: _0xf68394.name
                        })}</p><p className="text-xs text-text-muted mt-0.5">{_0x227dd2("oauth2.scopes." + _0xf68394.scope.replace(/\./g, "_") + ".description", {
                          defaultValue: _0xf68394.description
                        })}</p>{_0x1d979c && <p className="text-[10px] text-amber-400/80 mt-0.5">{_0x227dd2("oauth2.consent.botIncompatible")}</p>}</div></div>;
                })}</div>}{_0x1f2509 && _0x1bf47f.length > 0 && <div className="space-y-2"><label className="text-xs text-text-tertiary font-medium flex items-center gap-1.5"><_0x4d4250 icon="solar:shield-bold-duotone" className="size-3.5" />{_0x227dd2("oauth2.botPermissions")}</label><div className="rounded-xl bg-surface-base/60 border border-border-default p-3"><div className="grid grid-cols-2 gap-2">{_0x1bf47f.map(_0x22f8c0 => <div className="flex items-center gap-1.5 text-xs text-text-tertiary" key={_0x22f8c0.id}><_0x2cde2a className="size-3 text-emerald-400 shrink-0" /><span className="truncate">{_0x22f8c0.label}</span></div>)}</div></div></div>}<div className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl bg-amber-500/8 border border-amber-500/15"><_0x4d4250 icon="solar:danger-triangle-bold-duotone" className="size-4 text-amber-400 mt-0.5 shrink-0" /><p className="text-xs text-amber-200/70">{_0x227dd2("oauth2.consent.trustWarning")}</p></div></div><div className="flex items-center gap-3 pt-5 mt-auto border-t border-border-default/50"><button onClick={_0x41d3c5} className="flex-1 h-11 rounded-xl border border-border-default hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer">{_0x227dd2("oauth2.cancel")}</button><button onClick={_0x3fee37} disabled={_0x4cdf44 || _0x1f2509 && !_0x7e436b} className="flex-1 h-11 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer">{_0x4cdf44 ? <_0x1b392a.Fragment><_0x45be0b className="size-4 animate-spin" /> {_0x227dd2("oauth2.authorizing")}</_0x1b392a.Fragment> : _0x227dd2("oauth2.authorize")}</button></div></_0x1b392a.Fragment> : null}</div></div></div></A>;
}
function _Component({
  onSuccess: _0x483e65
}) {
  const {
    t: _0x29c221
  } = _0x5de1b5();
  const [_0x468ab5, _0x5bebf4] = _0x15f33d.useState("");
  const [_0x320672, _0x1ad245] = _0x15f33d.useState("");
  const [_0x17f636, _0x2bc2a7] = _0x15f33d.useState(false);
  const [_0x1ad1c2, _0x2a71ff] = _0x15f33d.useState(false);
  const [_0x56d199, _0x312a40] = _0x15f33d.useState(null);
  const [_0x308a7f, _0x38a035] = _0x15f33d.useState(false);
  const [_0x1964f0, _0x24165c] = _0x15f33d.useState(null);
  const [_0x4c8982, _0x4a27ea] = _0x15f33d.useState("");
  const [_0x276c1c, _0x5f8468] = _0x15f33d.useState("app");
  const [_0x38d6b9, _0x32a709] = _0x15f33d.useState(false);
  const _0x43d7e3 = _0x15f33d.useCallback(async _0xbc8628 => {
    _0xbc8628.preventDefault();
    if (_0x468ab5 && _0x320672) {
      await _0x2e43da();
    }
  }, [_0x468ab5, _0x320672]);
  const _0x2e43da = _0x15f33d.useCallback(async _0x196069 => {
    _0x2a71ff(true);
    _0x312a40(null);
    try {
      const _0x52861d = await _0xcff330.login({
        email: _0x468ab5,
        password: _0x320672,
        ...(_0x196069 && {
          turnstileToken: _0x196069
        })
      });
      if (_0x4576bf(_0x52861d)) {
        _0x38a035(true);
        _0x24165c(_0x52861d.userId);
        _0x5f8468(_0x52861d.twoFactorMethod);
        _0x2a71ff(false);
        return;
      }
      if (_0x14d5e2(_0x52861d)) {
        _0x312a40(_0x29c221("oauth2.consent.emailVerificationRequired"));
        _0x2a71ff(false);
        return;
      }
      _0x483e65(_0x52861d.access_token);
    } catch (_0x3f7322) {
      _0x312a40(_0x3f7322?.response?.data?.message || _0x29c221("oauth2.consent.loginFailed"));
    } finally {
      _0x2a71ff(false);
    }
  }, [_0x468ab5, _0x320672, _0x483e65, _0x29c221]);
  const _0x1454e7 = _0x15f33d.useCallback(async _0x55bf8c => {
    _0x55bf8c.preventDefault();
    if (_0x1964f0 && _0x4c8982) {
      _0x2a71ff(true);
      _0x312a40(null);
      try {
        const _0x3c7536 = await _0xcff330.complete2FALogin(_0x1964f0, _0x4c8982, _0x276c1c);
        _0x483e65(_0x3c7536.access_token);
      } catch (_0xd05b41) {
        _0x312a40(_0xd05b41?.response?.data?.message || _0x29c221("oauth2.consent.twoFAFailed"));
      } finally {
        _0x2a71ff(false);
      }
    }
  }, [_0x1964f0, _0x4c8982, _0x276c1c, _0x483e65]);
  if (_0x308a7f) {
    return <div className="space-y-4"><div className="flex items-center gap-2 text-text-tertiary"><_0x4d4250 icon="solar:lock-bold-duotone" className="size-4" /><span className="text-sm font-medium">{_0x29c221("oauth2.consent.twoFATitle")}</span></div><p className="text-xs text-text-muted">{_0x29c221(_0x276c1c === "app" ? "oauth2.consent.twoFAApp" : "oauth2.consent.twoFAEmail")}</p><form onSubmit={_0x1454e7} className="space-y-3"><input type="text" inputMode="numeric" autoComplete="one-time-code" value={_0x4c8982} onChange={_0x5e0dbf => _0x4a27ea(_0x5e0dbf.target.value)} placeholder="000000" className="w-full rounded-xl border border-border-default bg-surface-base px-4 py-3 text-sm text-text-primary text-center tracking-[0.3em] font-mono placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-primary/50" autoFocus={true} />{_0x56d199 && <p className="text-xs text-red-400 text-center">{_0x56d199}</p>}<button type="submit" disabled={_0x1ad1c2 || _0x4c8982.length < 6} className="w-full h-11 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer">{_0x1ad1c2 ? <_0x45be0b className="size-4 animate-spin" /> : _0x29c221("oauth2.consent.verify")}</button></form></div>;
  } else {
    return <form onSubmit={_0x43d7e3} className="space-y-4"><div className="space-y-1.5"><label className="text-xs text-text-tertiary font-medium">{_0x29c221("oauth2.consent.email")}</label><input type="email" value={_0x468ab5} onChange={_0x250ec0 => _0x5bebf4(_0x250ec0.target.value)} placeholder="ornek@email.com" autoComplete="email" className="w-full rounded-xl border border-border-default bg-surface-base px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-primary/50" autoFocus={true} /></div><div className="space-y-1.5"><label className="text-xs text-text-tertiary font-medium">{_0x29c221("oauth2.consent.password")}</label><div className="relative"><input type={_0x17f636 ? "text" : "password"} value={_0x320672} onChange={_0x3d97f2 => _0x1ad245(_0x3d97f2.target.value)} placeholder="••••••••" autoComplete="current-password" className="w-full rounded-xl border border-border-default bg-surface-base px-4 py-3 pr-11 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-primary/50" /><button type="button" onClick={() => _0x2bc2a7(!_0x17f636)} className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-text-muted hover:text-text-secondary transition-colors cursor-pointer">{_0x17f636 ? <_0x4d4250 icon="solar:eye-closed-bold-duotone" className="size-4" /> : <_0x4d4250 icon="solar:eye-bold-duotone" className="size-4" />}</button></div></div>{_0x56d199 && <p className="text-xs text-red-400">{_0x56d199}</p>}<button type="submit" disabled={_0x1ad1c2 || !_0x468ab5 || !_0x320672} className="w-full h-11 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer">{_0x1ad1c2 ? <_0x1b392a.Fragment><_0x45be0b className="size-4 animate-spin" /> {_0x29c221("oauth2.consent.loggingIn")}</_0x1b392a.Fragment> : <_0x1b392a.Fragment><_0x4d4250 icon="solar:login-2-bold-duotone" className="size-4" /> {_0x29c221("oauth2.consent.loginButton")}</_0x1b392a.Fragment>}</button><_0x41c986 isOpen={_0x38d6b9} onClose={() => _0x32a709(false)} onVerify={_0x5863fc => {
        _0x32a709(false);
        _0x2e43da(_0x5863fc);
      }} /></form>;
  }
}
function C({
  token: _0x253c71,
  selectedServerId: _0x5b8326,
  onSelect: _0x55c12d
}) {
  const {
    t: _0x4f3bcb
  } = _0x5de1b5();
  const [_0x677682, _0x586e19] = _0x15f33d.useState([]);
  const [_0x534962, _0x2f82aa] = _0x15f33d.useState(true);
  const [_0x1dfd45, _0x4f50e9] = _0x15f33d.useState(false);
  const [_0x516e1a, _0x416e16] = _0x15f33d.useState("");
  _0x15f33d.useEffect(() => {
    _0x50fa31.get(_ + "/api/v1/users/@me/guilds", {
      headers: {
        Authorization: "Bearer " + _0x253c71
      }
    }).then(_0x1bd621 => {
      _0x586e19(_0x1bd621.data.guilds || _0x1bd621.data || []);
      _0x2f82aa(false);
    }).catch(() => {
      _0x586e19([]);
      _0x2f82aa(false);
    });
  }, [_0x253c71]);
  const _0x1cc0e0 = _0x15f33d.useMemo(() => {
    const _0x52e379 = _0x516e1a.toLowerCase().trim();
    if (_0x52e379) {
      return _0x677682.filter(_0x9a7d88 => _0x9a7d88.name.toLowerCase().includes(_0x52e379));
    } else {
      return _0x677682;
    }
  }, [_0x677682, _0x516e1a]);
  const _0x5798c3 = _0x677682.find(_0x2f3497 => _0x2f3497.id === _0x5b8326);
  if (_0x534962) {
    return <div className="space-y-2"><label className="text-xs text-text-tertiary font-medium">{_0x4f3bcb("oauth2.selectServer")}</label><div className="rounded-xl bg-surface-base/60 border border-border-default p-3 flex items-center justify-center"><_0x45be0b className="size-4 animate-spin text-text-muted" /></div></div>;
  } else {
    return <div className="space-y-2"><label className="text-xs text-text-tertiary font-medium">{_0x4f3bcb("oauth2.addToServer")}</label><div className="relative"><button onClick={() => _0x4f50e9(!_0x1dfd45)} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-surface-base/60 border border-border-default hover:bg-interactive-muted transition-colors cursor-pointer">{_0x5798c3 ? <_0x1b392a.Fragment><_0x438e01 className="size-7">{_0x5798c3.icon_url ? <_0x5cfcb0 src={_0x5798c3.icon_url} /> : <_0x14a588 className="bg-surface-inset text-text-primary text-xs">{_0x5798c3.name.charAt(0).toUpperCase()}</_0x14a588>}</_0x438e01><span className="flex-1 text-left text-sm text-text-primary truncate">{_0x5798c3.name}</span></_0x1b392a.Fragment> : <span className="flex-1 text-left text-sm text-text-muted">{_0x4f3bcb("oauth2.selectServer")}</span>}<_0x334fe6 className={"size-4 text-text-tertiary transition-transform " + (_0x1dfd45 ? "rotate-180" : "")} /></button>{_0x1dfd45 && <div className="absolute top-full left-0 right-0 mt-1.5 rounded-xl bg-surface-raised/95 backdrop-blur-xl border border-border-default shadow-2xl z-50 overflow-hidden max-h-[260px] flex flex-col"><div className="p-2 border-b border-border-default"><div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-surface-inset/40"><_0x4d4250 icon="solar:magnifer-bold-duotone" className="size-3.5 text-text-muted" /><input type="text" value={_0x516e1a} onChange={_0x6c46bc => _0x416e16(_0x6c46bc.target.value)} placeholder={_0x4f3bcb("oauth2.searchServer")} className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none" autoFocus={true} />{_0x516e1a && <button onClick={() => _0x416e16("")} className="text-text-muted hover:text-text-secondary cursor-pointer"><_0x4a1aee className="size-3.5" /></button>}</div></div><div className="flex-1 overflow-y-auto scrollbar-thin py-1">{_0x1cc0e0.length === 0 ? <div className="py-6 text-center"><p className="text-sm text-text-muted">{_0x4f3bcb(_0x516e1a ? "oauth2.serverNotFound" : "oauth2.consent.noServers")}</p></div> : _0x1cc0e0.map(_0x4339d5 => {
              const _0x153b7b = _0x4339d5.id === _0x5b8326;
              return <button onClick={() => {
                _0x55c12d(_0x4339d5.id);
                _0x4f50e9(false);
                _0x416e16("");
              }} className={"w-full flex items-center gap-2.5 px-3 py-2 hover:bg-interactive-muted transition-colors cursor-pointer " + (_0x153b7b ? "bg-accent-subtle/50" : "")} key={_0x4339d5.id}><_0x438e01 className="size-8">{_0x4339d5.icon_url ? <_0x5cfcb0 src={_0x4339d5.icon_url} /> : <_0x14a588 className="bg-surface-inset text-text-primary text-xs">{_0x4339d5.name.charAt(0).toUpperCase()}</_0x14a588>}</_0x438e01><p className="flex-1 text-left text-sm text-text-primary truncate">{_0x4339d5.name}</p>{_0x153b7b && <_0x2cde2a className="size-4 text-accent-primary shrink-0" />}</button>;
            })}</div></div>}</div></div>;
  }
}
function A({
  children: _0x275e2c
}) {
  return <div className="min-h-screen bg-background flex items-center justify-center md:p-8 relative overflow-hidden"><div className="absolute inset-0 overflow-hidden pointer-events-none"><div className="absolute top-20 left-10 w-72 h-72 bg-primary/8 rounded-full blur-3xl" /><div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" /><div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/6 rounded-full blur-2xl" /></div><div className="relative z-10 w-full flex justify-center">{_0x275e2c}</div></div>;
}
function F({
  message: _0x53720b
}) {
  const {
    t: _0x20cc2d
  } = _0x5de1b5();
  return <div className="w-full max-w-md"><div className="rounded-2xl border border-border-default bg-surface-raised/60 p-8 text-center space-y-3"><div className="size-12 rounded-full bg-red-500/10 flex items-center justify-center mx-auto"><_0x4d4250 icon="solar:danger-triangle-bold-duotone" className="size-6 text-red-400" /></div><h2 className="text-base font-semibold text-text-primary">{_0x20cc2d("oauth2.consent.error")}</h2><p className="text-sm text-text-tertiary">{_0x53720b}</p><button onClick={() => window.history.back()} className="mt-2 px-4 py-2 rounded-lg bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm transition-colors cursor-pointer">{_0x20cc2d("oauth2.goBack")}</button></div></div>;
}
export { S as default };