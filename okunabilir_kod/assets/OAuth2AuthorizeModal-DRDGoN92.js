import { R as _0x28b041, b as _0x2ae8c3, a as _0x1affbc, f as _0xe066f3, r as _0xa17246, aG as _0x401002, P as _0x224967, j as _0x4f97ac, K as _0x3ee18b, X as _0x386bc7, an as _0x2e7c78, aT as _0x25d7cf } from "./index-cQfEKR1W.js";
import { D as _0x206734, a as _0x38deca, c as _0xd7a186 } from "./dialog-BMMpM7PR.js";
import { D as _0x294bf2, a as _0x2a136d, c as _0xd6bf25 } from "./drawer-X7YyCqpZ.js";
import { A as _0x55512a, a as _0xd7adec, b as _0xe8caf4 } from "./avatar-C-4BWxT3.js";
import { bN as _0x54d78a, a9 as _0xb08672, bv as _0x2ba2a7 } from "./AppLayout-BEBJqe9_.js";
import { b as _0x3fda6d, a as _0xe065a1, B as _0x3d4d4b } from "./developer-DXeZvdzI.js";
import { w as _0x36031d, x as _0x11fcc3 } from "./developer-DCtAQT29.js";
import { B as _0x388103 } from "./bot--rnBv7zG.js";
import { U as _0x4da7da } from "./CheckoutPlaceholder-Dr0TfmeQ.js";
import { A as _0x59291a } from "./arrow-right-DvlsXLCB.js";
import { E as _0x1a485a } from "./external-link-C9yxkvw1.js";
import { S as _0x521464 } from "./search-BXcLTinX.js";
import { L as _0x2e6230 } from "./loader-circle-CTtxa1g9.js";
import "./index-yuEHo9bu.js";
import "./soundboardFx-C2LP-Hjs.js";
import "./index-BUijt7wr.js";
import "./tr-D975n4_R.js";
import "./select-DQjjzSZW.js";
import "./index-Oyyh46KT.js";
import "./arrow-left-B3FhifN2.js";
import "./switch-lfnbGePn.js";
import "./input-AMyERYwJ.js";
import "./subscription-Cl5JAGbQ.js";
import "./useTheme-CzNZmxfV.js";
import "./ComparisonTable-DUfwtDVZ.js";
import "./card-Bk6R3tFg.js";
import "./gift-Co-azAyt.js";
import "./zap-B3VH4qT9.js";
import "./circle-x-BBSKKBIf.js";
import "./ConfirmDialog-B4gIndKy.js";
import "./alert-dialog-BZuoGg7O.js";
import "./user-DSjlY8FD.js";
import "./refresh-cw-C3NlhmpS.js";
import "./trash-2-DuFcDcAU.js";
import "./submit-button-B2LF_DTf.js";
import "./clipboard-BQ9qambq.js";
import "./label-ODyS97Ju.js";
import "./video-AtsAgCNJ.js";
import "./plus-B7c2Px8R.js";
import "./channelNotificationStore-FXjXBmS_.js";
import "./index.module-CsHioFCV.js";
import "./IyzicoCheckoutFrame-f1WDW5o8.js";
import "./NexusSuccessArtwork-YGvslhff.js";
const T = _0x28b041.memo(({
  open: _0x528578,
  onOpenChange: _0x526d61,
  params: _0x3dc950
}) => {
  const {
    t: _0x198472
  } = _0x2ae8c3();
  const _0x5130e4 = _0x1affbc("(max-width: 767px)");
  const {
    servers: _0x83d3de
  } = _0x54d78a();
  const {
    user: _0x37af28
  } = _0xe066f3();
  const _0x8554d4 = _0x3dc950?.clientId || null;
  const _0x4e39ed = _0x3dc950?.scope?.split(" ") || [];
  const _0x4e140b = parseInt(_0x3dc950?.permissions || "0", 10);
  const _0x526bed = _0x3dc950?.redirectUri || null;
  const [_0x3789b4, _0x230a26] = _0xa17246.useState(null);
  const [_0x3c4173, _0x14721b] = _0xa17246.useState(false);
  const [_0x7b4494, _0x52da07] = _0xa17246.useState("");
  const [_0xb8ab3a, _0x35bdb1] = _0xa17246.useState(false);
  const [_0x3ce2a8, _0x3f6e76] = _0xa17246.useState(null);
  const [_0x25f166, _0x5ebd63] = _0xa17246.useState(true);
  const [_0x44fa93, _0x494c46] = _0xa17246.useState(null);
  const [_0x1911bd, _0x342168] = _0xa17246.useState(null);
  const _0x22d326 = _0x4e39ed.includes("bot");
  const _0x44817c = _0x3fda6d.filter(_0x1b5ad8 => _0x4e39ed.includes(_0x1b5ad8.id));
  const _0x20a454 = _0xe065a1.filter(_0x3bc9a7 => (_0x4e140b & _0x3bc9a7.value) === _0x3bc9a7.value);
  const _0x2a9df3 = new Set(_0x3d4d4b);
  const _0x5035e6 = _0xa17246.useMemo(() => _0x83d3de.filter(_0xaef03f => !!_0xaef03f.is_owner || _0xaef03f.permissions !== undefined && _0xb08672(_0xaef03f.permissions, _0x401002.MANAGE_GUILD)).map(_0x53de13 => ({
    id: _0x53de13.id,
    name: _0x53de13.name,
    avatar_url: _0x53de13.avatar_url,
    is_owner: _0x53de13.is_owner || false,
    permissions: _0x53de13.permissions
  })), [_0x83d3de]);
  const _0x51030b = _0xa17246.useMemo(() => {
    const _0x350b08 = _0x7b4494.toLowerCase().trim();
    if (_0x350b08) {
      return _0x5035e6.filter(_0x338974 => _0x338974.name.toLowerCase().includes(_0x350b08));
    } else {
      return _0x5035e6;
    }
  }, [_0x5035e6, _0x7b4494]);
  const _0x1ba4e2 = _0xa17246.useMemo(() => _0x5035e6.find(_0x3709d8 => _0x3709d8.id === _0x3789b4) || null, [_0x5035e6, _0x3789b4]);
  _0xa17246.useEffect(() => {
    if (_0x8554d4 && _0x528578) {
      _0x5ebd63(true);
      _0x494c46(null);
      _0x36031d(_0x8554d4).then(_0x256991 => {
        _0x3f6e76(_0x256991);
        _0x5ebd63(false);
      }).catch(_0x17eef0 => {
        _0x494c46(_0x17eef0?.response?.data?.message || _0x198472("oauth2.appInfoFailed"));
        _0x5ebd63(false);
      });
    }
  }, [_0x8554d4, _0x528578]);
  _0xa17246.useEffect(() => {
    if (!_0x528578) {
      _0x230a26(null);
      _0x14721b(false);
      _0x52da07("");
      _0x342168(null);
    }
  }, [_0x528578]);
  const _0xec8ebd = _0xa17246.useCallback(async () => {
    if (_0x8554d4) {
      if (!_0x22d326 || _0x3789b4) {
        _0x35bdb1(true);
        _0x342168(null);
        try {
          const _0x381743 = await _0x11fcc3({
            client_id: _0x8554d4,
            redirect_uri: _0x526bed || undefined,
            scope: _0x3dc950?.scope || "",
            state: _0x3dc950?.state,
            guild_id: _0x3789b4 || undefined,
            permissions: _0x3dc950?.permissions || "0",
            action: "approve",
            response_type: _0x3dc950?.responseType,
            code_challenge: _0x3dc950?.codeChallenge,
            code_challenge_method: _0x3dc950?.codeChallengeMethod
          });
          if (_0x381743.success) {
            _0x526d61(false);
            return;
          }
          if (_0x381743.redirect_url) {
            window.location.href = _0x381743.redirect_url;
            return;
          }
          _0x526d61(false);
        } catch (_0x1ae994) {
          const _0x51adb4 = _0x1ae994?.response?.data?.message || _0x1ae994?.response?.data?.detail || _0x1ae994?.message || _0x198472("oauth2.authorizeFailed");
          _0x342168(_0x51adb4);
        } finally {
          _0x35bdb1(false);
        }
      } else {
        _0x224967.error(_0x198472("oauth2.selectServerError"));
      }
    }
  }, [_0x8554d4, _0x22d326, _0x3789b4, _0x526bed, _0x3dc950, _0x526d61, _0x198472]);
  const _0x2fceae = _0xa17246.useCallback(async () => {
    if (_0x8554d4) {
      try {
        const _0x58389a = await _0x11fcc3({
          client_id: _0x8554d4,
          redirect_uri: _0x526bed || undefined,
          scope: _0x3dc950?.scope || "",
          state: _0x3dc950?.state,
          action: "deny"
        });
        if (_0x58389a.redirect_url) {
          window.location.href = _0x58389a.redirect_url;
          return;
        }
      } catch {}
    }
    _0x526d61(false);
  }, [_0x8554d4, _0x526bed, _0x3dc950, _0x526d61]);
  const _0xe275c0 = _0x3ce2a8;
  const _0x254740 = _0xe275c0?.icon_url || _0xe275c0?.bot?.avatar_url || null;
  const _0x2bfaf3 = <div className="flex flex-col md:flex-row md:min-h-[480px] max-h-[85dvh]"><div className="md:w-2/5 shrink-0 bg-surface-base/50 border-b md:border-b-0 md:border-r border-border-default p-6 md:p-8 flex flex-col"><div className="flex items-center gap-2 mb-6 md:mb-8"><img src="/jubbio-logo-32x32.svg" alt="Jubbio" className="size-6" /><span className="text-sm font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Jubbio</span></div><div className="flex-1 flex flex-col items-center justify-center py-4"><_0x55512a className="size-24 rounded-2xl ring-2 ring-border-subtle mb-4">{_0x254740 ? <_0xd7adec src={_0x254740} className="rounded-2xl" /> : <_0xe8caf4 className="rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800"><_0x388103 className="size-12 text-text-tertiary" /></_0xe8caf4>}</_0x55512a><h2 className="text-xl font-bold text-text-primary text-center">{_0xe275c0?.name || _0x198472("oauth2.externalApp")}</h2>{_0xe275c0?.description && <p className="text-sm text-text-tertiary text-center mt-2 line-clamp-3 max-w-[300px]">{_0xe275c0.description}</p>}{_0xe275c0?.tags && _0xe275c0.tags.length > 0 && <div className="flex flex-wrap gap-1.5 mt-3 justify-center">{_0xe275c0.tags.slice(0, 3).map(_0x1e5dc1 => <span className="px-2 py-0.5 rounded-full bg-surface-inset/40 text-xs text-text-tertiary" key={_0x1e5dc1}>{_0x1e5dc1}</span>)}</div>}<div className="mt-6 flex items-center gap-3"><div className="size-10 rounded-full bg-surface-overlay border border-border-default flex items-center justify-center overflow-hidden">{_0x37af28?.avatar_url ? <img src={_0x37af28.avatar_url} alt="" className="size-full object-cover" /> : <_0x4da7da className="size-5 text-text-tertiary" />}</div><_0x59291a className="size-4 text-text-muted" /><div className="size-10 rounded-xl bg-surface-overlay border border-border-default flex items-center justify-center overflow-hidden">{_0x254740 ? <img src={_0x254740} alt="" className="size-full object-cover rounded-lg" /> : <_0x388103 className="size-5 text-text-tertiary" />}</div></div><p className="text-xs text-text-muted mt-3 text-center">{_0x198472("oauth2.consent.continueAs", {
            name: _0x37af28?.display_name || _0x37af28?.username || "User"
          })}</p></div>{_0x526bed && <div className="mt-auto pt-4"><p className="text-[11px] text-text-muted flex items-center gap-1"><_0x1a485a className="size-3 shrink-0" /><span className="truncate">{_0x198472("oauth2.consent.redirectTo", {
              host: (() => {
                try {
                  return new URL(_0x526bed).hostname;
                } catch {
                  return _0x526bed;
                }
              })()
            })}</span></p></div>}</div><div className="flex-1 p-6 md:p-8 flex flex-col min-h-0"><div className="mb-5"><h3 className="text-base font-semibold text-text-primary">{_0x198472("oauth2.consent.accessRequest", {
            appName: _0xe275c0?.name || _0x198472("oauth2.externalApp")
          })}</h3><p className="text-sm text-text-muted mt-1">{_0x198472("oauth2.consent.accessDesc")}</p></div><div className="flex-1 overflow-y-auto -mx-1 px-1 space-y-4 scrollbar-thin">{_0x22d326 && <div className="space-y-2"><label className="text-xs text-text-tertiary font-medium">{_0x198472("oauth2.addToServer")}</label><div className="relative"><button onClick={() => _0x14721b(!_0x3c4173)} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-surface-base/60 border border-border-default hover:bg-interactive-muted transition-colors cursor-pointer">{_0x1ba4e2 ? <_0x4f97ac.Fragment><_0x55512a className="size-7">{_0x1ba4e2.avatar_url ? <_0xd7adec src={_0x1ba4e2.avatar_url} /> : <_0xe8caf4 className="bg-surface-inset text-text-primary text-xs">{_0x1ba4e2.name.charAt(0).toUpperCase()}</_0xe8caf4>}</_0x55512a><span className="flex-1 text-left text-sm text-text-primary truncate">{_0x1ba4e2.name}</span></_0x4f97ac.Fragment> : <span className="flex-1 text-left text-sm text-text-muted">{_0x198472("oauth2.selectServer")}</span>}<_0x3ee18b className={"size-4 text-text-tertiary transition-transform " + (_0x3c4173 ? "rotate-180" : "")} /></button>{_0x3c4173 && <div className="absolute top-full left-0 right-0 mt-1.5 rounded-xl bg-surface-raised/95 backdrop-blur-xl border border-border-default shadow-2xl z-50 overflow-hidden max-h-[260px] flex flex-col"><div className="p-2 border-b border-border-default"><div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-surface-inset/40"><_0x521464 className="size-3.5 text-text-muted" /><input type="text" value={_0x7b4494} onChange={_0x450d23 => _0x52da07(_0x450d23.target.value)} placeholder={_0x198472("oauth2.searchServer")} className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none" autoFocus={true} />{_0x7b4494 && <button onClick={() => _0x52da07("")} className="text-text-muted hover:text-text-secondary cursor-pointer"><_0x386bc7 className="size-3.5" /></button>}</div></div><div className="flex-1 overflow-y-auto scrollbar-thin py-1">{_0x51030b.length === 0 ? <div className="py-6 text-center"><p className="text-sm text-text-muted">{_0x198472(_0x7b4494 ? "oauth2.serverNotFound" : "oauth2.noPermissionServer")}</p></div> : _0x51030b.map(_0x3c0878 => {
                  const _0x394e0b = _0x3c0878.id === _0x3789b4;
                  return <button onClick={() => {
                    _0x230a26(_0x3c0878.id);
                    _0x14721b(false);
                    _0x52da07("");
                  }} className={"w-full flex items-center gap-2.5 px-3 py-2 hover:bg-interactive-muted transition-colors cursor-pointer " + (_0x394e0b ? "bg-accent-subtle/50" : "")} key={_0x3c0878.id}><_0x55512a className="size-8">{_0x3c0878.avatar_url ? <_0xd7adec src={_0x3c0878.avatar_url} /> : <_0xe8caf4 className="bg-surface-inset text-text-primary text-xs">{_0x3c0878.name.charAt(0).toUpperCase()}</_0xe8caf4>}</_0x55512a><div className="flex-1 min-w-0 text-left"><p className="text-sm text-text-primary truncate">{_0x3c0878.name}</p><p className="text-xs text-text-muted">{_0x3c0878.is_owner ? _0x198472("oauth2.owner") : _0x198472("oauth2.admin")}</p></div>{_0x394e0b && <_0x2e7c78 className="size-4 text-accent-primary shrink-0" />}</button>;
                })}</div></div>}</div></div>}{_0x44817c.length > 0 && <div className="rounded-xl bg-surface-base/60 border border-border-default overflow-hidden divide-y divide-border-default/50">{_0x44817c.map(_0xe8ff2f => {
            const _0x30a028 = _0x22d326 && _0x2a9df3.has(_0xe8ff2f.id);
            return <div className={"flex items-start gap-3 px-4 py-3 " + (_0x30a028 ? "opacity-40" : "")} key={_0xe8ff2f.id}><div className={"size-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 " + (_0x30a028 ? "bg-amber-500/15" : "bg-emerald-500/15")}>{_0x30a028 ? <_0x25d7cf className="size-3 text-amber-400" /> : <_0x2e7c78 className="size-3 text-emerald-400" />}</div><div className="flex-1 min-w-0"><p className={"text-sm font-medium " + (_0x30a028 ? "text-text-muted line-through" : "text-text-secondary")}>{_0x198472("oauth2.scopes." + _0xe8ff2f.id.replace(/\./g, "_") + ".name", {
                    defaultValue: _0xe8ff2f.label
                  })}</p><p className="text-xs text-text-muted mt-0.5">{_0x198472("oauth2.scopes." + _0xe8ff2f.id.replace(/\./g, "_") + ".description", {
                    defaultValue: _0xe8ff2f.description
                  })}</p>{_0x30a028 && <p className="text-[10px] text-amber-400/80 mt-0.5">{_0x198472("oauth2.consent.botIncompatible")}</p>}</div></div>;
          })}</div>}{_0x22d326 && _0x20a454.length > 0 && <div className="space-y-2"><label className="text-xs text-text-tertiary font-medium flex items-center gap-1.5"><_0x2ba2a7 className="size-3.5" />{_0x198472("oauth2.botPermissions")}</label><div className="rounded-xl bg-surface-base/60 border border-border-default p-3"><div className="grid grid-cols-2 gap-2">{_0x20a454.map(_0x3427a7 => <div className="flex items-center gap-1.5 text-xs text-text-tertiary" key={_0x3427a7.id}><_0x2e7c78 className="size-3 text-emerald-400 shrink-0" /><span className="truncate">{_0x3427a7.label}</span></div>)}</div></div></div>}<div className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl bg-amber-500/8 border border-amber-500/15"><_0x25d7cf className="size-4 text-amber-400 mt-0.5 shrink-0" /><div className="text-xs text-amber-200/70"><p>{_0x198472("oauth2.consent.trustWarning")}</p>{(_0xe275c0?.terms_of_service_url || _0xe275c0?.privacy_policy_url) && <div className="flex items-center gap-2 mt-1.5">{_0xe275c0.terms_of_service_url && <a href={_0xe275c0.terms_of_service_url} target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-200 underline flex items-center gap-1">{_0x198472("oauth2.termsOfService")} <_0x1a485a className="size-3 shrink-0" /></a>}{_0xe275c0.terms_of_service_url && _0xe275c0.privacy_policy_url && <span className="text-amber-400/50">•</span>}{_0xe275c0.privacy_policy_url && <a href={_0xe275c0.privacy_policy_url} target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-200 underline flex items-center gap-1">{_0x198472("oauth2.privacyPolicy")} <_0x1a485a className="size-3 shrink-0" /></a>}</div>}</div></div></div><div className="pt-5 mt-auto border-t border-border-default/50 space-y-3">{_0x1911bd && <p className="text-xs text-red-400">{_0x1911bd}</p>}<div className="flex items-center gap-3"><button onClick={_0x2fceae} className="flex-1 h-11 rounded-xl border border-border-default hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer">{_0x198472("oauth2.cancel")}</button><button onClick={_0xec8ebd} disabled={_0xb8ab3a || _0x22d326 && !_0x3789b4} className="flex-1 h-11 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer">{_0xb8ab3a ? <_0x4f97ac.Fragment><_0x2e6230 className="size-4 animate-spin" /> {_0x198472("oauth2.authorizing")}</_0x4f97ac.Fragment> : _0x198472("oauth2.authorize")}</button></div></div></div></div>;
  const _0x467689 = <div className="flex flex-col items-center justify-center py-16"><_0x2e6230 className="size-8 animate-spin text-accent-primary mb-3" /><p className="text-sm text-text-tertiary">{_0x198472("oauth2.appLoading")}</p></div>;
  const _0x3fefba = <div className="flex flex-col items-center justify-center py-16 px-4"><div className="size-12 rounded-full bg-red-500/10 flex items-center justify-center mb-3"><_0x25d7cf className="size-6 text-red-400" /></div><p className="text-red-400 text-sm text-center">{_0x44fa93}</p><button onClick={() => _0x526d61(false)} className="mt-4 px-4 py-2 rounded-lg bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm transition-colors cursor-pointer">{_0x198472("oauth2.goBack")}</button></div>;
  const _0x1ca8c7 = _0x25f166 ? _0x467689 : _0x44fa93 ? _0x3fefba : _0x2bfaf3;
  if (_0x5130e4) {
    return <_0x294bf2 open={_0x528578} onOpenChange={_0x526d61}><_0x2a136d className="bg-surface-raised border-border-default text-text-primary max-h-[90dvh]"><_0xd6bf25 className="sr-only">{_0x198472("oauth2.externalApp")}</_0xd6bf25>{_0x1ca8c7}</_0x2a136d></_0x294bf2>;
  } else {
    return <_0x206734 open={_0x528578} onOpenChange={_0x526d61}><_0x38deca className="p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-4xl max-h-[85dvh] overflow-hidden"><_0xd7a186 className="sr-only">{_0x198472("oauth2.externalApp")}</_0xd7a186><div className="rounded-2xl border border-border-default bg-surface-raised/60 backdrop-blur-xl shadow-xl shadow-black/10 overflow-hidden">{_0x1ca8c7}</div></_0x38deca></_0x206734>;
  }
});
export { T as default };