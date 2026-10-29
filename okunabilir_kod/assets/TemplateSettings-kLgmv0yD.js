import { R as _0x468ddc, r as _0x4ff40a, b as _0x520095, P as _0x45441c, j as _0x559e92, I as _0x2bf966 } from "./index-cQfEKR1W.js";
import { c as _0x2a8e47, s as _0x4dd73e, d as _0x546665, b as _0x4a6603 } from "./templates-DiTUghFZ.js";
import { S as _0x1f16ec } from "./separator-Ba6vNTx4.js";
import { C as _0x10b5e1 } from "./ConfirmDialog-B4gIndKy.js";
import "./alert-dialog-BZuoGg7O.js";
import "./index-yuEHo9bu.js";
import "./index-Oyyh46KT.js";
import "./loader-circle-CTtxa1g9.js";
const _Component = ({
  className: _0x52f0b9
}) => <_0x2bf966 icon="solar:refresh-bold-duotone" className={_0x52f0b9} />;
const _Component3 = ({
  className: _0x466836
}) => <_0x2bf966 icon="solar:trash-bin-trash-bold-duotone" className={_0x466836} />;
const _Component2 = ({
  className: _0xe5dd3e
}) => <_0x2bf966 icon="solar:layers-bold-duotone" className={_0xe5dd3e} />;
const _Component4 = ({
  className: _0x14d6ec
}) => <_0x2bf966 icon="solar:info-circle-bold-duotone" className={_0x14d6ec} />;
const b = _0x4ff40a.forwardRef(({
  serverId: _0x44d129,
  onDirtyChange: _0x17fb11
}, _0x41bd63) => {
  const {
    t: _0x1d58ff
  } = _0x520095();
  const [_0xc28b2b, _0x2958af] = _0x4ff40a.useState(null);
  const [_0x407995, _0x255a1e] = _0x4ff40a.useState(true);
  const [_0x338c9a, _0x24a645] = _0x4ff40a.useState(false);
  const [_0x10c3a7, _0x4e90d8] = _0x4ff40a.useState("");
  const [_0x4f2485, _0x275006] = _0x4ff40a.useState("");
  const [_0x2b84f0, _0x2b0c69] = _0x4ff40a.useState(0);
  const [_0x2ea8a0, _0x517251] = _0x4ff40a.useState("");
  const [_0x3e79a9, _0x14167e] = _0x4ff40a.useState("");
  const [_0x47f3ef, _0x12f5ae] = _0x4ff40a.useState("");
  const [_0x38c25e, _0x4cc633] = _0x4ff40a.useState(0);
  const [_0xfb341d, _0x137415] = _0x4ff40a.useState("");
  const [_0x2d5b24, _0x26d950] = _0x4ff40a.useState(false);
  const [_0x132b2c, _0x414d8f] = _0x4ff40a.useState(false);
  const [_0x437e53, _0x1c86c7] = _0x4ff40a.useState(false);
  _0x4ff40a.useEffect(() => {
    let _0x145652 = false;
    (async () => {
      _0x255a1e(true);
      try {
        const _0x57af71 = await _0x4a6603(_0x44d129);
        if (_0x145652) {
          return;
        }
        _0x2958af(_0x57af71);
        _0x24a645(true);
        _0x4e90d8(_0x57af71.name);
        _0x275006(_0x57af71.description || "");
        _0x2b0c69(_0x57af71.max_uses);
        _0x517251(_0x57af71.expires_at ? _0x57af71.expires_at.split("T")[0] : "");
        _0x14167e(_0x57af71.name);
        _0x12f5ae(_0x57af71.description || "");
        _0x4cc633(_0x57af71.max_uses);
        _0x137415(_0x57af71.expires_at ? _0x57af71.expires_at.split("T")[0] : "");
      } catch (_0x51c31d) {
        if (_0x145652) {
          return;
        }
        if (_0x51c31d?.response?.status === 404) {
          _0x24a645(false);
          _0x2958af(null);
        }
      } finally {
        if (!_0x145652) {
          _0x255a1e(false);
        }
      }
    })();
    return () => {
      _0x145652 = true;
    };
  }, [_0x44d129]);
  const _0x33e747 = _0x4ff40a.useMemo(() => _0x338c9a ? _0x10c3a7 !== _0x3e79a9 || _0x4f2485 !== _0x47f3ef || _0x2b84f0 !== _0x38c25e || _0x2ea8a0 !== _0xfb341d : _0x10c3a7.trim().length > 0, [_0x10c3a7, _0x4f2485, _0x2b84f0, _0x2ea8a0, _0x3e79a9, _0x47f3ef, _0x38c25e, _0xfb341d, _0x338c9a]);
  _0x4ff40a.useEffect(() => {
    _0x17fb11?.(_0x33e747);
  }, [_0x33e747, _0x17fb11]);
  _0x4ff40a.useEffect(() => () => {
    _0x17fb11?.(false);
  }, [_0x17fb11]);
  _0x4ff40a.useImperativeHandle(_0x41bd63, () => ({
    reset: () => {
      if (_0x338c9a && _0xc28b2b) {
        _0x4e90d8(_0x3e79a9);
        _0x275006(_0x47f3ef);
        _0x2b0c69(_0x38c25e);
        _0x517251(_0xfb341d);
      } else {
        _0x4e90d8("");
        _0x275006("");
        _0x2b0c69(0);
        _0x517251("");
      }
      _0x17fb11?.(false);
    },
    save: async () => {
      if (_0x33e747) {
        try {
          if (_0x338c9a) {
            const _0x4f4cb7 = {};
            if (_0x10c3a7.trim() !== _0x3e79a9) {
              _0x4f4cb7.name = _0x10c3a7.trim();
            }
            if (_0x4f2485 !== _0x47f3ef) {
              _0x4f4cb7.description = _0x4f2485.trim() || null;
            }
            if (_0x2b84f0 !== _0x38c25e) {
              _0x4f4cb7.max_uses = _0x2b84f0;
            }
            if (_0x2ea8a0 !== _0xfb341d) {
              _0x4f4cb7.expires_at = _0x2ea8a0 ? new Date(_0x2ea8a0).toISOString() : null;
            }
            const _0x11b867 = await _0x4dd73e(_0x44d129, _0x4f4cb7);
            _0x2958af(_0x5786d7 => _0x5786d7 ? {
              ..._0x5786d7,
              ..._0x11b867,
              serialized_guild: _0x5786d7.serialized_guild
            } : _0x5786d7);
            _0x14167e(_0x11b867.name);
            _0x12f5ae(_0x11b867.description || "");
            _0x4cc633(_0x11b867.max_uses);
            _0x137415(_0x11b867.expires_at ? _0x11b867.expires_at.split("T")[0] : "");
          } else {
            if (!_0x10c3a7.trim()) {
              _0x45441c.error(_0x1d58ff("template.settings.nameRequired"));
              return;
            }
            const _0x33d38e = {
              name: _0x10c3a7.trim()
            };
            if (_0x4f2485.trim()) {
              _0x33d38e.description = _0x4f2485.trim();
            }
            if (_0x2b84f0 > 0) {
              _0x33d38e.max_uses = _0x2b84f0;
            }
            if (_0x2ea8a0) {
              _0x33d38e.expires_at = new Date(_0x2ea8a0).toISOString();
            }
            const _0x43e790 = await _0x2a8e47(_0x44d129, _0x33d38e);
            _0x2958af({
              ..._0x43e790,
              serialized_guild: {
                name: "",
                verification_level: 0,
                explicit_content_filter: 0,
                afk_timeout: 300,
                roles: [],
                categories: [],
                channels: []
              }
            });
            _0x24a645(true);
            _0x14167e(_0x43e790.name);
            _0x12f5ae(_0x43e790.description || "");
            _0x4cc633(_0x43e790.max_uses);
            _0x137415(_0x43e790.expires_at ? _0x43e790.expires_at.split("T")[0] : "");
          }
          _0x17fb11?.(false);
        } catch {}
      }
    }
  }));
  const _0x596b47 = _0x4ff40a.useCallback(async () => {
    _0x26d950(true);
    try {
      const _0x16a75d = await _0x4dd73e(_0x44d129, {});
      _0x2958af(_0x478aaa => _0x478aaa ? {
        ..._0x478aaa,
        ..._0x16a75d,
        serialized_guild: _0x478aaa.serialized_guild
      } : _0x478aaa);
    } catch {} finally {
      _0x26d950(false);
    }
  }, [_0x44d129]);
  const _0xd9bf3e = _0x4ff40a.useCallback(async () => {
    _0x1c86c7(true);
    try {
      await _0x546665(_0x44d129);
      _0x2958af(null);
      _0x24a645(false);
      _0x4e90d8("");
      _0x275006("");
      _0x2b0c69(0);
      _0x517251("");
      _0x14167e("");
      _0x12f5ae("");
      _0x4cc633(0);
      _0x137415("");
      _0x414d8f(false);
      _0x17fb11?.(false);
    } catch {} finally {
      _0x1c86c7(false);
    }
  }, [_0x44d129, _0x17fb11]);
  const _0x446701 = _0x4ff40a.useCallback(() => {
    if (!_0xc28b2b) {
      return;
    }
    const _0x577b1e = "https://jubbio.com/template/" + _0xc28b2b.code;
    navigator.clipboard.writeText(_0x577b1e);
    _0x45441c.success(_0x1d58ff("template.settings.linkCopied"));
  }, [_0xc28b2b, _0x1d58ff]);
  const _0x2c1f4c = _0x4ff40a.useCallback(() => {
    if (_0xc28b2b) {
      navigator.clipboard.writeText(_0xc28b2b.code);
      _0x45441c.success(_0x1d58ff("template.settings.codeCopied"));
    }
  }, [_0xc28b2b, _0x1d58ff]);
  if (_0x407995) {
    return <div className="flex items-center justify-center py-16"><div className="size-8 border-[3px] border-border-default border-t-accent-primary rounded-full animate-spin" /></div>;
  } else {
    return <div className="space-y-8">{_0x338c9a && _0xc28b2b && <_0x559e92.Fragment><section><div className="rounded-xl bg-emerald-500/5 border border-emerald-500/15 p-4 space-y-3"><div className="flex items-center gap-2 h-9 px-3 rounded-lg bg-surface-inset/50 border border-border-subtle"><_0x2bf966 icon="solar:link-bold-duotone" className="size-3.5 text-emerald-400 shrink-0" /><span className="text-xs text-text-secondary font-mono truncate flex-1">jubbio.com/template/{_0xc28b2b.code}</span></div><div className="flex flex-wrap gap-2"><button onClick={_0x446701} className="h-8 px-3 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-xs font-medium text-emerald-400 transition-colors cursor-pointer flex items-center gap-1.5"><_0x2bf966 icon="solar:copy-bold-duotone" className="size-3.5" />{_0x1d58ff("template.settings.copyLink")}</button><button onClick={_0x2c1f4c} className="h-8 px-3 rounded-lg bg-surface-inset/50 hover:bg-interactive-muted text-xs font-medium text-text-secondary transition-colors cursor-pointer flex items-center gap-1.5"><_0x2bf966 icon="solar:copy-bold-duotone" className="size-3.5" />{_0x1d58ff("template.settings.copyCode")}</button><button onClick={_0x596b47} disabled={_0x2d5b24} className="h-8 px-3 rounded-lg bg-surface-inset/50 hover:bg-interactive-muted text-xs font-medium text-text-secondary transition-colors cursor-pointer flex items-center gap-1.5 disabled:opacity-50">{_0x2d5b24 ? <_Component className="size-3.5 animate-spin" /> : <_0x2bf966 icon="solar:refresh-bold-duotone" className="size-3.5" />}{_0x1d58ff("template.settings.syncButton")}</button></div><div className="flex flex-wrap items-center gap-3 text-xs text-text-tertiary pt-1"><span className="flex items-center gap-1.5"><_0x2bf966 icon="solar:users-group-rounded-bold-duotone" className="size-3.5 text-emerald-400/70" />{_0x1d58ff("template.settings.usedCount", {
                  count: _0xc28b2b.usage_count
                })}{_0xc28b2b.max_uses > 0 && " / " + _0xc28b2b.max_uses}</span>{_0xc28b2b.expires_at && <span className="flex items-center gap-1.5"><_0x2bf966 icon="solar:clock-circle-bold-duotone" className="size-3.5 text-emerald-400/70" />{_0x1d58ff("template.settings.expiresAt", {
                  date: new Date(_0xc28b2b.expires_at).toLocaleDateString()
                })}</span>}<span className="flex items-center gap-1.5"><_0x2bf966 icon="solar:refresh-bold-duotone" className="size-3.5 text-emerald-400/70" />{_0x1d58ff("template.settings.lastSynced", {
                  time: (_0x125e84 => {
                    const _0x514d5e = new Date(_0x125e84);
                    const _0x47fdd4 = new Date().getTime() - _0x514d5e.getTime();
                    const _0x4afce4 = Math.floor(_0x47fdd4 / 86400000);
                    if (_0x4afce4 === 0) {
                      return _0x1d58ff("template.settings.today");
                    } else if (_0x4afce4 === 1) {
                      return _0x1d58ff("template.settings.yesterday");
                    } else {
                      return _0x1d58ff("template.settings.daysAgo", {
                        count: _0x4afce4
                      });
                    }
                  })(_0xc28b2b.updated_at)
                })}</span></div>{_0xc28b2b.is_synced === false && <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20"><_0x2bf966 icon="solar:danger-triangle-bold-duotone" className="size-3.5 text-amber-400 shrink-0" /><span className="text-xs text-amber-300">{_0x1d58ff("template.settings.staleWarning")}</span></div>}</div></section><_0x1f16ec className="bg-surface-overlay/70" /></_0x559e92.Fragment>}<section>{_0x338c9a ? <div className="mb-4"><div className="flex items-center gap-2"><_Component2 className="size-4 text-text-tertiary" /><div className="text-base leading-snug font-semibold text-text-secondary">{_0x1d58ff("template.settings.editTitle")}</div></div></div> : <div className="mb-4"><p className="text-sm leading-snug text-text-muted">{_0x1d58ff("template.settings.subtitle")}</p></div>}<div className="space-y-4"><div><label className="text-xs font-medium text-text-muted mb-1.5 block">{_0x1d58ff("template.settings.nameLabel")} {!_0x338c9a && <span className="text-red-400">*</span>}</label><input type="text" value={_0x10c3a7} onChange={_0x3bc174 => _0x4e90d8(_0x3bc174.target.value)} maxLength={100} placeholder={_0x1d58ff("template.settings.namePlaceholder")} className="w-full h-10 px-3 rounded-xl bg-surface-overlay/40 border border-border-default text-text-primary text-sm placeholder:text-text-muted outline-none focus:border-accent-primary/50 transition-colors" /></div><div><label className="text-xs font-medium text-text-muted mb-1.5 block">{_0x1d58ff("template.settings.descriptionLabel")}</label><input type="text" value={_0x4f2485} onChange={_0x42ce79 => _0x275006(_0x42ce79.target.value)} maxLength={120} placeholder={_0x1d58ff("template.settings.descriptionPlaceholder")} className="w-full h-10 px-3 rounded-xl bg-surface-overlay/40 border border-border-default text-text-primary text-sm placeholder:text-text-muted outline-none focus:border-accent-primary/50 transition-colors" /></div><div className="grid grid-cols-2 gap-3"><div><label className="text-xs font-medium text-text-muted mb-1.5 block">{_0x1d58ff("template.settings.maxUsesLabel")}</label><input type="number" value={_0x2b84f0} onChange={_0x42fa24 => _0x2b0c69(Math.max(0, parseInt(_0x42fa24.target.value) || 0))} min={0} className="w-full h-10 px-3 rounded-xl bg-surface-overlay/40 border border-border-default text-text-primary text-sm outline-none focus:border-accent-primary/50 transition-colors" /><span className="text-[10px] text-text-muted mt-1 block">{_0x1d58ff("template.settings.maxUsesHint")}</span></div><div><label className="text-xs font-medium text-text-muted mb-1.5 block">{_0x1d58ff("template.settings.expiresAtLabel")}</label><input type="date" value={_0x2ea8a0} onChange={_0x1cd8ae => _0x517251(_0x1cd8ae.target.value)} className="w-full h-10 px-3 rounded-xl bg-surface-overlay/40 border border-border-default text-text-primary text-sm outline-none focus:border-accent-primary/50 transition-colors" /></div></div></div></section>{_0x338c9a && <_0x559e92.Fragment><_0x1f16ec className="bg-surface-overlay/70" /><section><div className="mb-3"><div className="flex items-center gap-2"><_Component3 className="size-4 text-red-400/70" /><div className="text-base leading-snug font-semibold text-red-400/90">{_0x1d58ff("template.settings.deleteButton")}</div></div></div><button onClick={() => _0x414d8f(true)} className="flex items-center gap-3 rounded-xl px-4 py-3 bg-red-500/5 border border-red-500/15 hover:bg-red-500/10 hover:border-red-500/25 transition-colors cursor-pointer w-full text-left"><div className="size-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0"><_Component3 className="size-4 text-red-400" /></div><div className="min-w-0"><div className="text-sm font-medium text-red-400">{_0x1d58ff("template.settings.deleteConfirmTitle")}</div><div className="text-xs text-text-muted">{_0x1d58ff("template.settings.deleteConfirmDesc")}</div></div></button></section></_0x559e92.Fragment>}{!_0x338c9a && <_0x559e92.Fragment><_0x1f16ec className="bg-surface-overlay/70" /><section><div className="flex gap-3 rounded-xl bg-emerald-500/5 border border-emerald-500/15 p-4"><div className="size-8 rounded-lg bg-emerald-400/10 flex items-center justify-center shrink-0 mt-0.5"><_Component4 className="size-4 text-emerald-400" /></div><p className="text-xs text-text-secondary leading-relaxed">{_0x1d58ff("template.settings.infoText")}</p></div></section></_0x559e92.Fragment>}<_0x10b5e1 open={_0x132b2c} onOpenChange={_0x414d8f} onConfirm={_0xd9bf3e} isLoading={_0x437e53} icon={<_Component3 className="size-5 text-red-400" />} title={_0x1d58ff("template.settings.deleteConfirmTitle")} description={_0x1d58ff("template.settings.deleteConfirmDesc")} confirmText={_0x1d58ff("template.settings.deleteConfirmButton")} variant="danger" /></div>;
  }
});
b.displayName = "TemplateSettings";
const f = _0x468ddc.memo(b);
export { f as default };