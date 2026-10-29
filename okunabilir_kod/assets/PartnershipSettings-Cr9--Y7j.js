import { r as _0x560ce0, b as _0x59550e, f as _0x250476, P as _0x1bd915, j as _0x451046, I as _0x5f00c3, an as _0x4ff1b6, F as _0x37e409, X as _0x4b4b75 } from "./index-cQfEKR1W.js";
import { p as _0x1ba608 } from "./partnership-CCggKLDk.js";
import { A as _0x1b9fd3 } from "./arrow-left-B3FhifN2.js";
import { P as _0xefa3e1 } from "./plus-B7c2Px8R.js";
const m = [{
  id: "content_creator",
  icon: "solar:clapperboard-play-bold-duotone",
  gradient: "from-purple-500 to-pink-500"
}, {
  id: "community",
  icon: "solar:users-group-rounded-bold-duotone",
  gradient: "from-blue-500 to-cyan-500"
}, {
  id: "corporate",
  icon: "solar:buildings-bold-duotone",
  gradient: "from-amber-500 to-green-500"
}];
const p = [{
  value: "youtube",
  label: "YouTube",
  icon: "simple-icons:youtube",
  color: "#FF0000"
}, {
  value: "twitch",
  label: "Twitch",
  icon: "simple-icons:twitch",
  color: "#9146FF"
}, {
  value: "kick",
  label: "Kick",
  icon: "simple-icons:kick",
  color: "#53FC18"
}, {
  value: "instagram",
  label: "Instagram",
  icon: "simple-icons:instagram",
  color: "#E4405F"
}, {
  value: "tiktok",
  label: "TikTok",
  icon: "simple-icons:tiktok",
  color: "#00F2EA"
}, {
  value: "twitter",
  label: "X (Twitter)",
  icon: "simple-icons:x",
  color: "#ffffff"
}, {
  value: "discord",
  label: "Discord",
  icon: "simple-icons:discord",
  color: "#5865F2"
}, {
  value: "other",
  label: "Diğer",
  icon: "solar:global-bold",
  color: "#94a3b8"
}];
const u = [{
  value: "1000-5000",
  label: "1.000 - 5.000",
  avgCount: 3000
}, {
  value: "5000-10000",
  label: "5.000 - 10.000",
  avgCount: 7500
}, {
  value: "10000-50000",
  label: "10.000 - 50.000",
  avgCount: 30000
}, {
  value: "50000-100000",
  label: "50.000 - 100.000",
  avgCount: 75000
}, {
  value: "100000-500000",
  label: "100.000 - 500.000",
  avgCount: 300000
}, {
  value: "500000+",
  label: "500.000+",
  avgCount: 500000
}];
const b = _0x560ce0.memo(({
  serverId: _0xb5e14e
}) => {
  const {
    t: _0xa8f636
  } = _0x59550e();
  const _0x2b1cfb = _0x250476(_0x290ba7 => _0x290ba7.user);
  const [_0x56a0fe, _0x372cd5] = _0x560ce0.useState(true);
  const [_0x36e3e0, _0x175650] = _0x560ce0.useState(null);
  const [_0x40afdb, _0x3c9b79] = _0x560ce0.useState("type");
  const [_0x1b29cf, _0x1b4c9e] = _0x560ce0.useState(null);
  const [_0x288d05, _0x21a342] = _0x560ce0.useState([]);
  const [_0x4c54f1, _0x1123c6] = _0x560ce0.useState(null);
  const [_0x3e0c3f, _0x4a2159] = _0x560ce0.useState(_0x2b1cfb?.email || "");
  const [_0x1b8cb7, _0x5af20c] = _0x560ce0.useState([""]);
  const [_0x25b2e3, _0x53bcda] = _0x560ce0.useState("");
  const _0x138902 = _0x560ce0.useCallback(_0x328c02 => {
    _0x21a342(_0x227bff => _0x227bff.includes(_0x328c02) ? _0x227bff.filter(_0xe01787 => _0xe01787 !== _0x328c02) : [..._0x227bff, _0x328c02]);
  }, []);
  _0x560ce0.useEffect(() => {
    _0x1ba608.getStatus(_0xb5e14e).then(_0x432ca => {
      if (_0x432ca.has_application && _0x432ca.application) {
        _0x175650(_0x432ca.application);
      }
    }).catch(() => {}).finally(() => _0x372cd5(false));
  }, [_0xb5e14e]);
  const _0x36bf4b = _0x560ce0.useCallback((_0x366177, _0x53ca7b) => {
    _0x5af20c(_0x36d60b => {
      const _0xb2102b = [..._0x36d60b];
      _0xb2102b[_0x366177] = _0x53ca7b;
      if (_0x366177 === _0xb2102b.length - 1 && _0x53ca7b.trim() !== "") {
        _0xb2102b.push("");
      }
      return _0xb2102b;
    });
  }, []);
  const _0x20b27d = _0x560ce0.useCallback(_0x55224c => {
    _0x5af20c(_0x188a6a => _0x188a6a.length > 1 ? _0x188a6a.filter((_0x8c9ed8, _0x1342fe) => _0x1342fe !== _0x55224c) : _0x188a6a);
  }, []);
  const _0x565b4f = _0x560ce0.useCallback(async () => {
    if (!_0x1b29cf || !_0x3e0c3f || _0x288d05.length === 0 || !_0x4c54f1) {
      return;
    }
    const _0x230112 = u.find(_0x2a60d4 => _0x2a60d4.value === _0x4c54f1);
    _0x3c9b79("submitting");
    try {
      const _0x4c122d = _0x1b8cb7.filter(_0x1a3585 => _0x1a3585.trim() !== "");
      const _0x209ebd = {
        partner_type: _0x1b29cf,
        platforms: _0x288d05,
        follower_count: _0x230112?.avgCount || 0,
        has_jubbio_guild: true,
        guild_id: _0xb5e14e,
        email: _0x3e0c3f,
        social_links: _0x4c122d.length > 0 ? _0x4c122d.slice(0, 10) : undefined,
        reason: _0x25b2e3.trim() || undefined
      };
      await _0x1ba608.apply(_0x209ebd);
      _0x3c9b79("done");
    } catch {
      _0x3c9b79("details");
      _0x1bd915.error(_0xa8f636("partnership.settings.error"));
    }
  }, [_0x1b29cf, _0x288d05, _0x4c54f1, _0x3e0c3f, _0x1b8cb7, _0x25b2e3, _0xb5e14e, _0xa8f636]);
  if (_0x56a0fe) {
    return <div className="flex flex-col items-center justify-center min-h-[400px]"><div className="size-8 border-[3px] border-border-default border-t-accent-primary rounded-full animate-spin" /></div>;
  }
  if (_0x36e3e0 && _0x40afdb !== "done") {
    const _0x5e489f = {
      pending: {
        icon: "solar:clock-circle-bold-duotone",
        color: "text-status-warning",
        bg: "bg-status-warning-subtle",
        label: _0xa8f636("partnership.settings.status.pending")
      },
      approved: {
        icon: "solar:check-circle-bold-duotone",
        color: "text-status-success",
        bg: "bg-status-success-subtle",
        label: _0xa8f636("partnership.settings.status.approved")
      },
      rejected: {
        icon: "solar:close-circle-bold-duotone",
        color: "text-status-error",
        bg: "bg-status-error-subtle",
        label: _0xa8f636("partnership.settings.status.rejected")
      }
    }[_0x36e3e0.status];
    const _0x3b08ba = {
      content_creator: {
        label: _0xa8f636("partnership.settings.typeCreator"),
        icon: "solar:clapperboard-play-bold-duotone",
        gradient: "from-purple-500 to-pink-500"
      },
      community: {
        label: _0xa8f636("partnership.settings.typeCommunity"),
        icon: "solar:users-group-rounded-bold-duotone",
        gradient: "from-blue-500 to-cyan-500"
      },
      corporate: {
        label: _0xa8f636("partnership.settings.typeCorporate"),
        icon: "solar:buildings-bold-duotone",
        gradient: "from-amber-500 to-green-500"
      }
    }[_0x36e3e0.partner_type];
    return <div className="flex flex-col items-center min-h-[400px]"><div className="flex flex-col items-center text-center mt-6 mb-8"><div className={"size-16 rounded-full " + _0x5e489f.bg + " flex items-center justify-center mb-4"}><_0x5f00c3 icon={_0x5e489f.icon} className={"size-8 " + _0x5e489f.color} /></div><h2 className="text-xl font-bold text-text-primary mb-1">{_0xa8f636("partnership.settings.existingTitle")}</h2><div className={"inline-flex items-center gap-2 px-3 py-1.5 rounded-full " + _0x5e489f.bg + " mt-2"}><_0x5f00c3 icon={_0x5e489f.icon} className={"size-3.5 " + _0x5e489f.color} /><span className={"text-xs font-semibold " + _0x5e489f.color}>{_0x5e489f.label}</span></div>{_0x36e3e0.created_at && <p className="text-[11px] text-text-muted mt-2">{new Date(_0x36e3e0.created_at).toLocaleDateString()}</p>}</div><div className="w-full rounded-xl border border-border-default/30 overflow-hidden divide-y divide-border-default/30 bg-surface-raised/50">{_0x3b08ba && <div className="flex items-center gap-3 px-4 py-3"><div className={"size-8 rounded-lg bg-gradient-to-br " + _0x3b08ba.gradient + " flex items-center justify-center shrink-0"}><_0x5f00c3 icon={_0x3b08ba.icon} className="size-4 text-white" /></div><div><p className="text-[10px] text-text-muted uppercase tracking-wide">{_0xa8f636("partnership.settings.typeTitle")}</p><p className="text-sm font-medium text-text-primary">{_0x3b08ba.label}</p></div></div>}{_0x36e3e0.platforms && _0x36e3e0.platforms.length > 0 && <div className="px-4 py-3"><p className="text-[10px] text-text-muted uppercase tracking-wide mb-2">{_0xa8f636("partnership.settings.platformTitle")}</p><div className="flex flex-wrap gap-1.5">{_0x36e3e0.platforms.map(_0x582c24 => {
              const _0x6ce659 = p.find(_0x1c486d => _0x1c486d.value === _0x582c24);
              return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-overlay/40 text-[11px] font-medium text-text-secondary" key={_0x582c24}>{_0x6ce659 && <_0x5f00c3 icon={_0x6ce659.icon} className="size-3.5" style={{
                  color: _0x6ce659.color
                }} />}{_0x6ce659?.label || _0x582c24}</span>;
            })}</div></div>}<div className="grid grid-cols-2 divide-x divide-border-default/30">{_0x36e3e0.follower_count > 0 && <div className="px-4 py-3"><p className="text-[10px] text-text-muted uppercase tracking-wide mb-0.5">{_0xa8f636("partnership.settings.followerLabel")}</p><p className="text-sm font-semibold text-text-primary">{_0x36e3e0.follower_count.toLocaleString()}</p></div>}{_0x36e3e0.email && <div className="px-4 py-3"><p className="text-[10px] text-text-muted uppercase tracking-wide mb-0.5">{_0xa8f636("partnership.settings.emailLabel")}</p><p className="text-sm text-text-primary truncate">{_0x36e3e0.email}</p></div>}</div>{_0x36e3e0.social_links && _0x36e3e0.social_links.length > 0 && <div className="px-4 py-3"><p className="text-[10px] text-text-muted uppercase tracking-wide mb-2">{_0xa8f636("partnership.settings.socialLabel")}</p><div className="space-y-1.5">{_0x36e3e0.social_links.map((_0x1eacd0, _0xedb8a8) => <a href={_0x1eacd0} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-accent-primary-text hover:underline truncate group" key={_0xedb8a8}><_0x5f00c3 icon="solar:link-bold-duotone" className="size-3.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" /><span className="truncate">{_0x1eacd0.replace(/^https?:\/\//, "")}</span></a>)}</div></div>}{_0x36e3e0.reason && <div className="px-4 py-3"><p className="text-[10px] text-text-muted uppercase tracking-wide mb-1">{_0xa8f636("partnership.settings.reasonLabel")}</p><p className="text-xs text-text-secondary leading-relaxed">{_0x36e3e0.reason}</p></div>}</div>{_0x36e3e0.status === "rejected" && <button type="button" onClick={() => {
        _0x175650(null);
        _0x3c9b79("type");
      }} className="mt-5 w-full h-10 rounded-xl bg-surface-overlay/40 text-text-secondary text-xs font-medium hover:bg-surface-overlay/60 transition-colors cursor-pointer">{_0xa8f636("partnership.settings.reapply")}</button>}</div>;
  }
  if (_0x40afdb === "done") {
    return <div className="flex flex-col items-center justify-center min-h-[400px] text-center"><div className="size-16 rounded-full bg-status-success/10 border border-status-success/20 flex items-center justify-center mb-5"><_0x4ff1b6 className="size-8 text-status-success" strokeWidth={2.5} /></div><h2 className="text-xl font-bold text-text-primary mb-2">{_0xa8f636("partnership.settings.doneTitle")}</h2><p className="text-sm text-text-tertiary max-w-xs leading-relaxed">{_0xa8f636("partnership.settings.doneDesc")}</p></div>;
  } else if (_0x40afdb === "submitting") {
    return <div className="flex flex-col items-center justify-center min-h-[400px]"><div className="size-10 border-[3px] border-border-default border-t-accent-primary rounded-full animate-spin mb-4" /><p className="text-sm text-text-tertiary">{_0xa8f636("partnership.settings.sending")}</p></div>;
  } else {
    return <div className="min-h-[400px] flex flex-col"><div className="flex items-center gap-1.5 mb-6">{["type", "platforms", "details"].map((_0x36ba18, _0x2e19b0) => {
          const _0x11f820 = ["type", "platforms", "details"].indexOf(_0x40afdb);
          const _0x57d50e = _0x2e19b0 < _0x11f820;
          const _0x105b80 = _0x2e19b0 === _0x11f820;
          return <div className="flex-1" key={_0x36ba18}><div className={"h-1.5 rounded-full transition-all duration-300 " + (_0x57d50e ? "bg-text-secondary" : _0x105b80 ? "bg-text-muted/50" : "bg-surface-overlay")} /></div>;
        })}</div>{_0x40afdb === "type" && <div className="flex-1 flex flex-col"><h3 className="text-lg font-semibold text-text-primary mb-1">{_0xa8f636("partnership.settings.typeTitle")}</h3><p className="text-xs text-text-muted mb-6">{_0xa8f636("partnership.settings.typeSubtitle")}</p><div className="space-y-3 flex-1">{m.map(_0x545318 => <button type="button" onClick={() => {
            _0x1b4c9e(_0x545318.id);
            _0x3c9b79("platforms");
          }} className={"w-full flex items-center gap-4 p-4 rounded-xl border transition-all cursor-pointer group text-left " + (_0x1b29cf === _0x545318.id ? "border-border-default bg-surface-overlay/35" : "border-border-default/50 bg-surface-overlay/20 hover:bg-surface-overlay/50 hover:border-border-strong/50")} key={_0x545318.id}><div className={"size-11 rounded-xl bg-gradient-to-br " + _0x545318.gradient + " flex items-center justify-center shrink-0"}><_0x5f00c3 icon={_0x545318.icon} className="size-5.5 text-white" /></div><div className="flex-1 min-w-0"><p className="text-sm font-medium text-text-primary">{_0x545318.id === "content_creator" ? _0xa8f636("partnership.settings.typeCreator") : _0x545318.id === "community" ? _0xa8f636("partnership.settings.typeCommunity") : _0xa8f636("partnership.settings.typeCorporate")}</p><p className="text-[11px] text-text-muted mt-0.5">{_0x545318.id === "content_creator" ? _0xa8f636("partnership.settings.typeCreatorDesc") : _0x545318.id === "community" ? _0xa8f636("partnership.settings.typeCommunityDesc") : _0xa8f636("partnership.settings.typeCorporateDesc")}</p></div><_0x37e409 className="size-4 text-text-muted group-hover:text-text-secondary transition-colors shrink-0" /></button>)}</div></div>}{_0x40afdb === "platforms" && <div className="flex-1 flex flex-col"><button type="button" onClick={() => _0x3c9b79("type")} className="flex items-center gap-1 text-xs text-text-muted hover:text-text-secondary transition-colors mb-4 cursor-pointer"><_0x1b9fd3 className="size-3.5" />{_0xa8f636("common.back", "Geri")}</button><h3 className="text-lg font-semibold text-text-primary mb-1">{_0xa8f636("partnership.settings.platformTitle")}</h3><p className="text-xs text-text-muted mb-5">{_0xa8f636("partnership.settings.platformSubtitle")}</p><div className="flex flex-wrap gap-2 mb-6">{p.map(_0xd9e3be => {
            const _0x33c400 = _0x288d05.includes(_0xd9e3be.value);
            return <button type="button" onClick={() => _0x138902(_0xd9e3be.value)} className={"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer " + (_0x33c400 ? "bg-surface-overlay/50 text-text-primary ring-1 ring-border-strong" : "bg-surface-overlay/20 text-text-tertiary hover:text-text-secondary hover:bg-surface-overlay/40")} key={_0xd9e3be.value}><_0x5f00c3 icon={_0xd9e3be.icon} className="size-3.5" style={{
                color: _0x33c400 ? _0xd9e3be.color : undefined
              }} />{_0xd9e3be.label}{_0x33c400 && <_0x4ff1b6 className="size-3 ml-0.5" />}</button>;
          })}</div><h4 className="text-sm font-medium text-text-secondary mb-3">{_0xa8f636("partnership.settings.followerLabel")} <span className="text-status-error">*</span></h4><div className="grid grid-cols-2 gap-2 mb-6">{u.map(_0x238165 => <button type="button" onClick={() => _0x1123c6(_0x238165.value)} className={"relative px-3 py-2.5 rounded-lg border text-xs font-medium transition-all cursor-pointer text-left " + (_0x4c54f1 === _0x238165.value ? "border-border-strong bg-surface-overlay/60 text-text-primary" : "border-border-default/40 bg-surface-overlay/20 text-text-tertiary hover:bg-surface-overlay/40")} key={_0x238165.value}>{_0x4c54f1 === _0x238165.value && <div className="absolute right-2.5 top-1/2 -translate-y-1/2 size-4 rounded-full bg-text-secondary flex items-center justify-center"><_0x4ff1b6 className="size-2.5 text-surface-base" strokeWidth={3} /></div>}{_0x238165.label}</button>)}</div><button type="button" onClick={() => _0x3c9b79("details")} disabled={_0x288d05.length === 0 || !_0x4c54f1} className="mt-auto w-full h-11 rounded-xl bg-accent-primary text-black text-sm font-semibold hover:bg-accent-primary-hover transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">{_0xa8f636("common.next")}</button></div>}{_0x40afdb === "details" && <div className="flex-1 flex flex-col"><button type="button" onClick={() => _0x3c9b79("platforms")} className="flex items-center gap-1 text-xs text-text-muted hover:text-text-secondary transition-colors mb-4 cursor-pointer"><_0x1b9fd3 className="size-3.5" />{_0xa8f636("common.back", "Geri")}</button><h3 className="text-lg font-semibold text-text-primary mb-1">{_0xa8f636("partnership.settings.detailsTitle")}</h3><p className="text-xs text-text-muted mb-5">{_0xa8f636("partnership.settings.detailsSubtitle")}</p><div className="space-y-4 flex-1"><div><label className="text-xs font-medium text-text-secondary mb-1.5 block">{_0xa8f636("partnership.settings.emailLabel")} <span className="text-status-error">*</span></label><input type="email" value={_0x3e0c3f} onChange={_0x57b491 => _0x4a2159(_0x57b491.target.value)} placeholder="ornek@mail.com" className="w-full h-10 rounded-lg bg-surface-inset/30 border border-border-subtle text-text-primary placeholder:text-text-muted px-3 text-sm focus:outline-none focus:border-border-strong transition-colors" /></div><div><label className="text-xs font-medium text-text-secondary mb-1.5 block">{_0xa8f636("partnership.settings.socialLabel")}</label><div className="space-y-2">{_0x1b8cb7.map((_0x164c67, _0x2c4b61) => <div className="flex items-center gap-2" key={_0x2c4b61}><div className="relative flex-1"><_0x5f00c3 icon="solar:link-bold-duotone" className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-text-muted" /><input type="url" value={_0x164c67} onChange={_0x2dd683 => _0x36bf4b(_0x2c4b61, _0x2dd683.target.value)} placeholder={_0x2c4b61 === 0 ? "https://twitch.tv/kanal" : "https://kick.com/kanal"} className="w-full h-10 rounded-lg bg-surface-inset/30 border border-border-subtle text-text-primary placeholder:text-text-muted pl-9 pr-3 text-sm focus:outline-none focus:border-border-strong transition-colors" /></div>{_0x1b8cb7.length > 1 && _0x2c4b61 < _0x1b8cb7.length - 1 && <button type="button" onClick={() => _0x20b27d(_0x2c4b61)} className="size-8 rounded-lg flex items-center justify-center text-text-muted hover:text-status-error hover:bg-status-error-subtle transition-colors cursor-pointer shrink-0"><_0x4b4b75 className="size-3.5" /></button>}</div>)}</div><p className="text-[10px] text-text-muted mt-1.5 flex items-center gap-1"><_0xefa3e1 className="size-3" />{_0xa8f636("partnership.settings.socialHint")}</p></div><div><label className="text-xs font-medium text-text-secondary mb-1.5 block">{_0xa8f636("partnership.settings.reasonLabel")}<span className="text-text-muted ml-1">({_0xa8f636("common.optional")})</span></label><textarea value={_0x25b2e3} onChange={_0x65fb12 => _0x53bcda(_0x65fb12.target.value)} placeholder={_0xa8f636("partnership.settings.reasonPlaceholder")} rows={3} className="w-full rounded-lg bg-surface-inset/30 border border-border-subtle text-text-primary placeholder:text-text-muted px-3 py-2.5 text-sm focus:outline-none focus:border-border-strong transition-colors resize-y" /></div></div><button type="button" onClick={_0x565b4f} disabled={!_0x3e0c3f} className="mt-5 w-full h-11 rounded-xl bg-accent-primary text-black text-sm font-semibold hover:bg-accent-primary-hover transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">{_0xa8f636("partnership.settings.submit")}</button></div>}</div>;
  }
});
export { b as default };