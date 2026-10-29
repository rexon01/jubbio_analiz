import { t as _0x46a6b6, R as _0x3498f7, b as _0x2669a8, r as _0x22082d, j as _0x3e34c4, aT as _0x165636, y as _0xb7a84a, d as _0x13631d, b2 as _0x42329e, I as _0x5d5ee4, B as _0xe0e10d, F as _0x534c5a } from "./index-cQfEKR1W.js";
import { A as _0x51f243, a as _0x4e74fa, b as _0x4e8b9d } from "./avatar-C-4BWxT3.js";
import { y as _0x1db7ed, z as _0x4184f6, A as _0x3e1b0a } from "./developer-DCtAQT29.js";
import { R as _0x20aabc } from "./ReportDialog-ByLH3UTW.js";
import { C as _0x55f7ea } from "./circle-alert-C4f7nAa2.js";
import { S as _0x58cd77 } from "./shield-off-BIo5sBqK.js";
import { E as _0x5df39d } from "./eye-CZP2GlMx.js";
import { C as _0xdad647 } from "./circle-question-mark-PWsoYL5a.js";
import { A as _0x538fe6 } from "./arrow-left-B3FhifN2.js";
import { P as _0x259bc2 } from "./plus-B7c2Px8R.js";
import "./dialog-BMMpM7PR.js";
import "./index-yuEHo9bu.js";
import "./drawer-X7YyCqpZ.js";
import "./loader-circle-CTtxa1g9.js"; /**
                                      * @license lucide-react v0.535.0 - ISC
                                      *
                                      * This source code is licensed under the ISC license.
                                      * See the LICENSE file in the root directory of this source tree.
                                      */
const _Component = _0x46a6b6("bug", [["path", {
  d: "m8 2 1.88 1.88",
  key: "fmnt4t"
}], ["path", {
  d: "M14.12 3.88 16 2",
  key: "qol33r"
}], ["path", {
  d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",
  key: "d7y7pr"
}], ["path", {
  d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",
  key: "xs1cw7"
}], ["path", {
  d: "M12 20v-9",
  key: "1qisl0"
}], ["path", {
  d: "M6.53 9C4.6 8.8 3 7.1 3 5",
  key: "32zzws"
}], ["path", {
  d: "M6 13H2",
  key: "82j7cp"
}], ["path", {
  d: "M3 21c0-2.1 1.7-3.9 3.8-4",
  key: "4p0ekp"
}], ["path", {
  d: "M20.97 5c0 2.1-1.6 3.8-3.5 4",
  key: "18gb23"
}], ["path", {
  d: "M22 13h-4",
  key: "1jl80f"
}], ["path", {
  d: "M17.2 17c2.1.1 3.8 1.9 3.8 4",
  key: "k3fwyw"
}]]);
const _ = _0x46a6b6("skull", [["path", {
  d: "m12.5 17-.5-1-.5 1h1z",
  key: "3me087"
}], ["path", {
  d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",
  key: "1o5pge"
}], ["circle", {
  cx: "15",
  cy: "12",
  r: "1",
  key: "1tmaij"
}], ["circle", {
  cx: "9",
  cy: "12",
  r: "1",
  key: "1vctgf"
}]]);
const R = [{
  value: "spam",
  labelKey: "report.appReasons.spam",
  descKey: "report.appReasons.spamDesc",
  icon: <_0x55f7ea className="size-4" />
}, {
  value: "malicious",
  labelKey: "report.appReasons.malicious",
  descKey: "report.appReasons.maliciousDesc",
  icon: <_ className="size-4" />
}, {
  value: "harassment",
  labelKey: "report.appReasons.harassment",
  descKey: "report.appReasons.harassmentDesc",
  icon: <_0x165636 className="size-4" />
}, {
  value: "nsfw",
  labelKey: "report.appReasons.nsfw",
  descKey: "report.appReasons.nsfwDesc",
  icon: <_0x58cd77 className="size-4" />
}, {
  value: "misleading",
  labelKey: "report.appReasons.misleading",
  descKey: "report.appReasons.misleadingDesc",
  icon: <_0x5df39d className="size-4" />
}, {
  value: "hate_speech",
  labelKey: "report.appReasons.hateSpeech",
  descKey: "report.appReasons.hateSpeechDesc",
  icon: <_Component className="size-4" />
}, {
  value: "other",
  labelKey: "report.appReasons.other",
  descKey: "report.appReasons.otherDesc",
  icon: <_0xdad647 className="size-4" />
}];
const S = _0x3498f7.memo(({
  open: _0x2f19d6,
  onOpenChange: _0x525db2,
  appId: _0x341677,
  appName: _0x5ca550
}) => {
  const {
    t: _0x3508c4
  } = _0x2669a8();
  const _0x5e787b = _0x22082d.useCallback(async (_0x571fd4, _0x176c7d) => {
    const _0x54bff3 = {
      reason: _0x571fd4,
      description: _0x176c7d
    };
    await _0x1db7ed(_0x341677, _0x54bff3);
  }, [_0x341677]);
  return <_0x20aabc open={_0x2f19d6} onOpenChange={_0x525db2} title={_0x3508c4("report.appTitle", {
    name: _0x5ca550
  })} subtitle={_0x3508c4("report.appSubtitle")} reasonOptions={R} onSubmit={_0x5e787b} maxDescriptionLength={1000} />;
});
function C() {
  const {
    appId: _0x4e52db
  } = _0xb7a84a();
  const _0x4d5e1a = _0x13631d();
  const {
    t: _0x2d6401
  } = _0x2669a8();
  const [_0x58b74d, _0x20f458] = _0x22082d.useState(null);
  const [_0x209110, _0x2f9b5b] = _0x22082d.useState([]);
  const [_0x3528cb, _0x41d6aa] = _0x22082d.useState(true);
  const [_0x421302, _0x3ba2f7] = _0x22082d.useState(false);
  const [_0x52781a, _0x12a822] = _0x22082d.useState(false);
  const _0x556702 = _0x22082d.useRef(null);
  const _0x332c2f = _0x42329e(_0x14be3c => _0x14be3c.openOAuth2Modal);
  const _0x2ca3da = () => {
    if (!_0x58b74d) {
      return;
    }
    const _0x5747bf = _0x58b74d.client_id || _0x58b74d.id;
    _0x332c2f({
      clientId: _0x5747bf,
      scope: "bot",
      permissions: "0",
      redirectUri: null
    });
  };
  _0x22082d.useEffect(() => {
    const _0x6ae427 = _0x556702.current;
    if (!_0x6ae427) {
      return;
    }
    const _0xdebd48 = new IntersectionObserver(([_0x7c0e4a]) => {
      _0x3ba2f7(!_0x7c0e4a.isIntersecting);
    }, {
      threshold: 0,
      rootMargin: "-60px 0px 0px 0px"
    });
    _0xdebd48.observe(_0x6ae427);
    return () => _0xdebd48.disconnect();
  }, [_0x58b74d]);
  _0x22082d.useEffect(() => {
    (async () => {
      if (_0x4e52db) {
        try {
          _0x41d6aa(true);
          const [_0x326152, _0x22c106] = await Promise.all([_0x4184f6(_0x4e52db), _0x3e1b0a(_0x4e52db).catch(() => [])]);
          _0x20f458(_0x326152);
          _0x2f9b5b(_0x22c106);
        } catch {
          _0x4d5e1a("/app/discover/apps");
        } finally {
          _0x41d6aa(false);
        }
      }
    })();
  }, [_0x4e52db, _0x4d5e1a]);
  if (_0x3528cb) {
    return <div className="flex-1 flex items-center justify-center"><div className="size-8 border-2 border-accent-primary border-t-transparent rounded-full animate-spin" /></div>;
  }
  if (!_0x58b74d) {
    return null;
  }
  const _0x110edb = _0x58b74d.bot?.display_name || _0x58b74d.bot?.username || _0x58b74d.name;
  const _0x11a7b2 = _0x58b74d.bot?.avatar_url;
  const _0x1c8389 = _0x58b74d.bot?.banner_url;
  const _0x17664c = _0x58b74d.bot?.bio || _0x58b74d.description;
  const _0x3c3a40 = _0x58b74d.created_at ? new Date(_0x58b74d.created_at) : null;
  return <div className="flex-1 overflow-auto bg-surface-base scrollbar-thin"><div className="relative"><div className="h-44 bg-gradient-to-br from-surface-overlay to-surface-raised overflow-hidden">{_0x1c8389 && <img src={_0x1c8389} alt="" className="w-full h-full object-cover opacity-70" />}<div className="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/40 to-transparent" /></div><div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 z-10"><button onClick={() => _0x4d5e1a(-1)} className="size-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-text-primary hover:bg-black/60 transition-colors"><_0x538fe6 className="size-5" /></button><div className="flex gap-2"><button className="size-9 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-text-primary hover:bg-black/60 transition-colors"><_0x5d5ee4 icon="solar:share-bold-duotone" className="size-5" /></button></div></div></div><div className="max-w-2xl mx-auto px-4 -mt-12 relative z-10 pb-28 space-y-6"><section ref={_0x556702} className="rounded-2xl bg-surface-raised/80 backdrop-blur-sm border border-border-default/50 p-4"><div className="flex gap-4"><_0x51f243 className="size-20 rounded-2xl ring-2 ring-surface-overlay shadow-xl shrink-0">{_0x11a7b2 ? <_0x4e74fa src={_0x11a7b2} alt={_0x110edb} className="object-cover" /> : null}<_0x4e8b9d className="bg-gradient-to-br from-surface-inset to-surface-overlay rounded-2xl"><_0x5d5ee4 icon="solar:bot-bold-duotone" className="size-8 text-text-tertiary" /></_0x4e8b9d></_0x51f243><div className="flex-1 min-w-0"><h1 className="text-xl font-bold text-text-primary truncate">{_0x110edb}</h1>{_0x58b74d.bot?.username && <p className="text-sm text-text-tertiary">@{_0x58b74d.bot.username}</p>}<div className="flex items-center gap-3 mt-2"><span className="flex items-center gap-1 text-sm text-text-tertiary"><_0x5d5ee4 icon="solar:users-group-rounded-bold-duotone" className="size-4" />{_0x2d6401("store.serverCount", {
                  count: _0x58b74d.guild_count || 0
                })}</span>{_0x3c3a40 && <_0x3e34c4.Fragment><span className="text-text-muted">•</span><span className="text-sm text-text-tertiary">{_0x3c3a40.toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short"
                  })}</span></_0x3e34c4.Fragment>}</div></div></div><_0xe0e10d size="lg" className="w-full mt-4 rounded-xl h-12 font-semibold text-base bg-accent-primary text-text-on-accent hover:bg-accent-primary/90" onClick={_0x2ca3da}><_0x259bc2 className="size-5 mr-2" />{_0x2d6401("store.detail.addToServer")}</_0xe0e10d></section><section><div className="rounded-2xl bg-surface-raised/50 border border-border-default/50 overflow-hidden divide-y divide-border-default/50"><div className="flex items-center gap-3 px-4 py-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/20"><_0x5d5ee4 icon="solar:users-group-rounded-bold-duotone" className="size-4 text-blue-400" /></span><div className="flex-1"><div className="text-sm font-medium text-text-secondary">{_0x2d6401("store.detail.activeServers")}</div><div className="text-xs text-text-muted">{_0x2d6401("store.detail.usedInServers", {
                  count: _0x58b74d.guild_count || 0
                })}</div></div><span className="text-lg font-bold text-text-primary">{(_0x58b74d.guild_count || 0).toLocaleString()}</span></div>{_0x3c3a40 && <div className="flex items-center gap-3 px-4 py-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-purple-500/20"><_0x5d5ee4 icon="solar:calendar-bold-duotone" className="size-4 text-purple-400" /></span><div className="flex-1"><div className="text-sm font-medium text-text-secondary">{_0x2d6401("store.detail.createdAt")}</div><div className="text-xs text-text-muted">{_0x2d6401("store.detail.createdAtDesc")}</div></div><span className="text-sm font-medium text-text-primary">{_0x3c3a40.toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}</span></div>}</div></section><section><div className="mb-3"><h2 className="text-sm font-semibold text-text-secondary">{_0x2d6401("store.detail.about")}</h2></div><div className="rounded-2xl bg-surface-raised/50 border border-border-default/50 p-4"><p className="text-sm text-text-secondary leading-relaxed whitespace-pre-wrap">{_0x17664c || _0x2d6401("store.detail.noDescription")}</p>{_0x58b74d.tags && _0x58b74d.tags.length > 0 && <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border-default/50">{_0x58b74d.tags.map(_0x18fd71 => <span className="px-3 py-1 rounded-full bg-surface-overlay/70 text-text-secondary text-xs font-medium" key={_0x18fd71}>{_0x18fd71}</span>)}</div>}</div></section>{_0x209110.length > 0 && <section><div className="mb-3"><h2 className="text-sm font-semibold text-text-secondary">{_0x2d6401("store.detail.commands")} ({_0x209110.length})</h2></div><div className="rounded-2xl bg-surface-raised/50 border border-border-default/50 overflow-hidden divide-y divide-border-default/50">{_0x209110.map(_0x23df19 => <div className="px-4 py-3" key={_0x23df19.id}><div className="flex items-center gap-2"><span className="text-sm font-mono font-medium text-accent-primary-text">/{_0x23df19.name}</span></div><p className="text-xs text-text-muted mt-0.5">{_0x23df19.description}</p>{_0x23df19.options && _0x23df19.options.length > 0 && <div className="flex flex-wrap gap-1.5 mt-2">{_0x23df19.options.map((_0x4848b5, _0x17d26f) => <span className={"px-2 py-0.5 rounded text-[10px] font-mono " + (_0x4848b5.required ? "bg-accent-primary/10 text-accent-primary-text" : "bg-surface-overlay/70 text-text-muted")} key={_0x17d26f}>{_0x4848b5.name}{_0x4848b5.required ? "*" : ""}</span>)}</div>}</div>)}</div></section>}<section><div className="mb-3"><h2 className="text-sm font-semibold text-text-secondary">{_0x2d6401("store.detail.info")}</h2></div><div className="rounded-2xl bg-surface-raised/50 border border-border-default/50 overflow-hidden divide-y divide-border-default/50">{_0x58b74d.privacy_policy_url && <button onClick={() => window.open(_0x58b74d.privacy_policy_url, "_blank", "noopener,noreferrer")} className="w-full flex items-center gap-3 px-4 py-3 text-left active:bg-surface-overlay/50"><span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-surface-overlay/70"><_0x5d5ee4 icon="solar:shield-bold-duotone" className="size-4 text-text-tertiary" /></span><div className="flex-1 min-w-0"><div className="text-sm font-medium text-text-secondary">{_0x2d6401("store.detail.privacyPolicy")}</div><div className="text-xs text-text-muted truncate">{_0x58b74d.privacy_policy_url}</div></div><_0x5d5ee4 icon="solar:square-arrow-right-up-bold-duotone" className="size-4 text-text-muted shrink-0" /></button>}{_0x58b74d.terms_of_service_url && <button onClick={() => window.open(_0x58b74d.terms_of_service_url, "_blank", "noopener,noreferrer")} className="w-full flex items-center gap-3 px-4 py-3 text-left active:bg-surface-overlay/50"><span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-surface-overlay/70"><_0x5d5ee4 icon="solar:document-bold-duotone" className="size-4 text-text-tertiary" /></span><div className="flex-1 min-w-0"><div className="text-sm font-medium text-text-secondary">{_0x2d6401("store.detail.termsOfService")}</div><div className="text-xs text-text-muted truncate">{_0x58b74d.terms_of_service_url}</div></div><_0x5d5ee4 icon="solar:square-arrow-right-up-bold-duotone" className="size-4 text-text-muted shrink-0" /></button>}{_0x58b74d.custom_install_url && <button onClick={() => window.open(_0x58b74d.custom_install_url, "_blank", "noopener,noreferrer")} className="w-full flex items-center gap-3 px-4 py-3 text-left active:bg-surface-overlay/50"><span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-surface-overlay/70"><_0x5d5ee4 icon="solar:link-bold-duotone" className="size-4 text-text-tertiary" /></span><div className="flex-1 min-w-0"><div className="text-sm font-medium text-text-secondary">{_0x2d6401("store.detail.website")}</div><div className="text-xs text-text-muted truncate">{_0x58b74d.custom_install_url}</div></div><_0x5d5ee4 icon="solar:square-arrow-right-up-bold-duotone" className="size-4 text-text-muted shrink-0" /></button>}<div className="flex items-center gap-3 px-4 py-3"><span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-surface-overlay/70"><_0x5d5ee4 icon="solar:hashtag-bold-duotone" className="size-4 text-text-tertiary" /></span><div className="flex-1 min-w-0"><div className="text-sm font-medium text-text-secondary">{_0x2d6401("store.detail.appId")}</div><div className="text-xs text-text-muted font-mono truncate">{_0x58b74d.id}</div></div></div></div></section><section><div className="rounded-2xl bg-red-900/20 border border-red-800/30 overflow-hidden"><button onClick={() => _0x12a822(true)} className="w-full flex items-center gap-3 px-4 py-3 text-left active:bg-red-900/30"><span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-red-500/20"><_0x5d5ee4 icon="solar:danger-triangle-bold-duotone" className="size-4 text-red-400" /></span><div className="flex-1 min-w-0"><div className="text-sm font-medium text-red-200">{_0x2d6401("store.detail.reportApp")}</div><div className="text-xs text-red-400/70">{_0x2d6401("store.detail.reportAppDesc")}</div></div><_0x534c5a className="size-4 text-red-400" /></button></div></section></div><S open={_0x52781a} onOpenChange={_0x12a822} appId={_0x58b74d.id} appName={_0x110edb} /><div className={"fixed bottom-20 left-1/2 -translate-x-1/2 z-50 w-full max-w-xl px-4 transition-all duration-300 ease-out " + (_0x421302 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none")}><div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-surface-raised/80 backdrop-blur-xl border border-border-strong/50 shadow-2xl shadow-black/5 dark:shadow-black/40"><_0x51f243 className="size-10 rounded-xl shrink-0">{_0x11a7b2 ? <_0x4e74fa src={_0x11a7b2} alt={_0x110edb} className="object-cover" /> : null}<_0x4e8b9d className="bg-surface-overlay rounded-xl"><_0x5d5ee4 icon="solar:bot-bold-duotone" className="size-4 text-text-tertiary" /></_0x4e8b9d></_0x51f243><div className="flex-1 min-w-0"><span className="text-sm font-semibold text-text-primary block truncate">{_0x110edb}</span><span className="text-xs text-text-tertiary">{_0x2d6401("store.serverCount", {
              count: _0x58b74d.guild_count || 0
            })}</span></div><_0xe0e10d size="sm" className="rounded-xl h-9 px-5 font-semibold text-sm shrink-0 bg-accent-primary text-text-on-accent hover:bg-accent-primary/90" onClick={_0x2ca3da}>{_0x2d6401("store.add")}</_0xe0e10d></div></div></div>;
}
export { C as default };