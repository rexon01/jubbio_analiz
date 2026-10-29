import { b as _0xe60bbd, r as _0x202fe8, j as _0x2b1ce8, B as _0x2c299a, I as _0x5f5b5f } from "./index-cQfEKR1W.js";
import { S as _0x5a1ff2 } from "./switch-lfnbGePn.js";
import { I as _0x20d0da } from "./input-AMyERYwJ.js";
import { S as _0x4512f9 } from "./separator-Ba6vNTx4.js";
import { S as _0x1f1a8a, a as _0x4db713, b as _0x3941c3, c as _0x491e06, d as _0x300e89 } from "./select-DQjjzSZW.js";
import { o as _0x28ee06, p as _0x8d2c5f, q as _0x15db9e, g as _0x5810c7, u as _0x106f09, a as _0x5dbb5f } from "./forum-KIuo_CQJ.js";
import { L as _0x22e7c9 } from "./label-ODyS97Ju.js";
import { D as _0x1af5a4, a as _0x3f5b8d, b as _0x1f74c1, c as _0x37b353, d as _0x4ec775 } from "./dialog-BMMpM7PR.js";
import { E as _0x4cc25e } from "./AppLayout-BEBJqe9_.js";
import { j as _0x5a592e } from "./soundboardFx-C2LP-Hjs.js";
import { F as _0x2c07b9 } from "./ForumTagBadge-BD2DdFbQ.js";
import { T as _0x2a47df } from "./TipTapEditor-BMYECO5E.js";
import "./index-Oyyh46KT.js";
import "./index-yuEHo9bu.js";
import "./tr-D975n4_R.js";
import "./arrow-left-B3FhifN2.js";
import "./arrow-right-DvlsXLCB.js";
import "./loader-circle-CTtxa1g9.js";
import "./drawer-X7YyCqpZ.js";
import "./subscription-Cl5JAGbQ.js";
import "./useTheme-CzNZmxfV.js";
import "./ComparisonTable-DUfwtDVZ.js";
import "./card-Bk6R3tFg.js";
import "./gift-Co-azAyt.js";
import "./CheckoutPlaceholder-Dr0TfmeQ.js";
import "./IyzicoCheckoutFrame-f1WDW5o8.js";
import "./zap-B3VH4qT9.js";
import "./submit-button-B2LF_DTf.js";
import "./NexusSuccessArtwork-YGvslhff.js";
import "./circle-x-BBSKKBIf.js";
import "./avatar-C-4BWxT3.js";
import "./ConfirmDialog-B4gIndKy.js";
import "./alert-dialog-BZuoGg7O.js";
import "./user-DSjlY8FD.js";
import "./refresh-cw-C3NlhmpS.js";
import "./trash-2-DuFcDcAU.js";
import "./clipboard-BQ9qambq.js";
import "./video-AtsAgCNJ.js";
import "./plus-B7c2Px8R.js";
import "./channelNotificationStore-FXjXBmS_.js";
import "./index.module-CsHioFCV.js";
import "./index-BUijt7wr.js";
import "./with-selector-DzPX4d1H.js";
import "./radio-DVcFOQyH.js";
const T = ({
  className: _0x221081
}) => <_0x5f5b5f icon="solar:add-circle-bold-duotone" className={_0x221081} />;
const D = ({
  className: _0x5c0c19
}) => <_0x5f5b5f icon="solar:trash-bin-trash-bold-duotone" className={_0x5c0c19} />;
const _Component = ({
  className: _0x3f858c
}) => <_0x5f5b5f icon="solar:tag-bold-duotone" className={_0x3f858c} />;
const I = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4", "#3b82f6", "#6366f1", "#8b5cf6", "#ec4899"];
const E = ({
  guildId: _0xa613a2,
  channelId: _0x664ea8,
  requireTag: _0x41c381,
  onRequireTagChange: _0x32f809
}) => {
  const {
    t: _0x2470f1
  } = _0xe60bbd();
  const [_0x13fe8b, _0x58f349] = _0x202fe8.useState([]);
  const [_0x4d5a7a, _0x58ce6b] = _0x202fe8.useState(true);
  const [_0x238390, _0x10c6a8] = _0x202fe8.useState(false);
  const [_0x3639b6, _0x3644a1] = _0x202fe8.useState(null);
  const [_0x450353, _0x58a61d] = _0x202fe8.useState({
    name: "",
    emoji: "",
    color: ""
  });
  _0x202fe8.useEffect(() => {
    (async () => {
      _0x58ce6b(true);
      try {
        const _0x5702dd = await _0x5810c7(_0xa613a2, _0x664ea8);
        _0x58f349(_0x5702dd);
      } catch {} finally {
        _0x58ce6b(false);
      }
    })();
  }, [_0xa613a2, _0x664ea8]);
  const _0x33f78c = _0x202fe8.useCallback(async () => {
    try {
      const _0x5a8e5c = await _0x28ee06(_0xa613a2, _0x664ea8, {
        name: _0x450353.name,
        emoji: _0x450353.emoji || undefined,
        color: _0x450353.color || undefined
      });
      _0x58f349(_0x576828 => [..._0x576828, _0x5a8e5c]);
      _0x10c6a8(false);
      _0x58a61d({
        name: "",
        emoji: "",
        color: ""
      });
    } catch {}
  }, [_0xa613a2, _0x664ea8, _0x450353]);
  const _0x2d9f11 = _0x202fe8.useCallback(async () => {
    if (_0x3639b6) {
      try {
        const _0x26a0c0 = await _0x8d2c5f(_0xa613a2, _0x664ea8, _0x3639b6.id, {
          name: _0x450353.name,
          emoji: _0x450353.emoji || undefined,
          color: _0x450353.color || undefined
        });
        _0x58f349(_0x588916 => _0x588916.map(_0xff1b5a => _0xff1b5a.id === _0x3639b6.id ? _0x26a0c0 : _0xff1b5a));
        _0x10c6a8(false);
        _0x3644a1(null);
      } catch {}
    }
  }, [_0xa613a2, _0x664ea8, _0x3639b6, _0x450353]);
  const _0x324b16 = _0x202fe8.useCallback(async _0x2a2195 => {
    try {
      await _0x15db9e(_0xa613a2, _0x664ea8, _0x2a2195);
      _0x58f349(_0x19d5d1 => _0x19d5d1.filter(_0x52badf => _0x52badf.id !== _0x2a2195));
    } catch {}
  }, [_0xa613a2, _0x664ea8]);
  if (_0x4d5a7a) {
    return <div className="flex items-center justify-center py-12"><div className="size-6 border-2 border-border-default border-t-accent-primary rounded-full animate-spin" /></div>;
  } else {
    return <div className="space-y-8"><section className="space-y-4"><div className="flex items-center justify-between"><div><div className="flex items-center gap-2"><_Component className="size-4 text-text-tertiary" /><h3 className="text-base leading-snug font-semibold text-text-secondary">{_0x2470f1("forum.tags.title")} <span className="text-text-muted font-normal">({_0x13fe8b.length}/25)</span></h3></div><p className="text-sm leading-snug text-text-muted mt-0.5">{_0x2470f1("forum.tags.description")}</p></div><_0x2c299a onClick={() => {
            _0x3644a1(null);
            _0x58a61d({
              name: "",
              emoji: "",
              color: ""
            });
            _0x10c6a8(true);
          }} size="sm" className="gap-1.5 shrink-0"><T className="size-3.5" />{_0x2470f1("forum.tags.createTag")}</_0x2c299a></div>{_0x32f809 && <div className="rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden"><div role="button" tabIndex={0} onClick={() => _0x32f809(!_0x41c381)} onKeyDown={_0xcddeac => _0xcddeac.key === "Enter" && _0x32f809(!_0x41c381)} className="w-full flex items-center justify-between px-4 py-3 text-left active:bg-interactive-hover cursor-pointer"><div className="flex-1 min-w-0 pr-3"><span className="text-[15px] font-medium text-text-secondary block">{_0x2470f1("forum.settings.requireTag")}</span><p className="text-[13px] text-text-tertiary mt-0.5">{_0x2470f1("forum.settings.requireTagDesc")}</p></div><div className="shrink-0 group/vs"><_0x5a1ff2 checked={_0x41c381 ?? false} onCheckedChange={_0x32f809} onClick={_0xcfccf9 => _0xcfccf9.stopPropagation()} /></div></div></div>}{_0x13fe8b.length > 0 ? <div className="flex flex-wrap gap-2">{_0x13fe8b.map(_0x1eb0e3 => <div className="relative group" key={_0x1eb0e3.id}><_0x2c07b9 name={_0x1eb0e3.name} emoji={_0x1eb0e3.emoji} color={_0x1eb0e3.color} onClick={() => (_0x3d6c20 => {
              _0x3644a1(_0x3d6c20);
              _0x58a61d({
                name: _0x3d6c20.name,
                emoji: _0x3d6c20.emoji,
                color: _0x3d6c20.color
              });
              _0x10c6a8(true);
            })(_0x1eb0e3)} className="group-hover:ring-1 group-hover:ring-white/10" /><_0x5f5b5f icon="solar:pen-bold-duotone" className="absolute right-2 top-1/2 -translate-y-1/2 size-3 text-text-muted opacity-0 group-hover:opacity-70 transition-opacity pointer-events-none" /></div>)}</div> : <p className="text-sm text-text-muted italic">{_0x2470f1("forum.tags.noTags")}</p>}</section><_0x1af5a4 open={_0x238390} onOpenChange={_0x10c6a8}><_0x3f5b8d className="p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-sm overflow-visible" onOpenAutoFocus={_0x24dce6 => _0x24dce6.preventDefault()}><div className="p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40"><div className="bg-surface-raised/95 backdrop-blur-xl rounded-2xl flex flex-col"><_0x1f74c1 className="px-4 py-4 border-b border-border-subtle shrink-0"><_0x37b353 className="text-lg font-semibold text-text-primary">{_0x2470f1(_0x3639b6 ? "forum.tags.editTag" : "forum.tags.createTag")}</_0x37b353><_0x4ec775 className="text-text-muted text-sm">{_0x2470f1("forum.tags.description")}</_0x4ec775></_0x1f74c1><div className="px-4 py-4 space-y-4"><div className="space-y-1.5"><_0x22e7c9 className="text-xs text-text-muted">{_0x2470f1("forum.tags.tagName")}</_0x22e7c9><div className="flex items-center gap-0 rounded-xl bg-surface-inset/40 border border-border-subtle overflow-hidden focus-within:border-accent-primary/50 transition-colors"><_0x4cc25e onEmojiSelect={_0x33dec1 => _0x58a61d(_0x3856b0 => ({
                      ..._0x3856b0,
                      emoji: _0x33dec1
                    }))} initialMode="emoji" hideGif={true} modal={true}><button type="button" className="w-10 h-10 flex items-center justify-center hover:bg-surface-inset/50 transition-colors cursor-pointer shrink-0 border-r border-border-subtle">{_0x450353.emoji ? <img src={_0x5a592e(_0x450353.emoji)} alt={_0x450353.emoji} className="size-5" /> : <_0x5f5b5f icon="solar:emoji-funny-circle-bold" className="size-5 text-text-muted" />}</button></_0x4cc25e><input value={_0x450353.name} onChange={_0x11534b => _0x58a61d(_0x5bfa4c => ({
                      ..._0x5bfa4c,
                      name: _0x11534b.target.value
                    }))} placeholder={_0x2470f1("forum.tags.tagNamePlaceholder")} maxLength={30} autoFocus={true} className="flex-1 h-10 px-3 bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none" /></div></div><div className="space-y-1.5"><_0x22e7c9 className="text-xs text-text-muted">{_0x2470f1("forum.tags.color")}</_0x22e7c9><div className="flex items-center gap-2"><button onClick={() => _0x58a61d(_0x575054 => ({
                      ..._0x575054,
                      color: ""
                    }))} className={"size-6 rounded-full cursor-pointer transition-all border border-border-default bg-surface-inset/50 flex items-center justify-center " + (_0x450353.color === "" ? "ring-2 ring-offset-2 ring-offset-surface-raised ring-white/50 scale-110" : "hover:scale-110")}><svg className="size-3.5 text-text-muted" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="8" cy="8" r="6" /><line x1="3" y1="13" x2="13" y2="3" /></svg></button><label className={"size-6 rounded-full cursor-pointer transition-all border border-border-default bg-surface-inset/50 flex items-center justify-center hover:scale-110 relative overflow-hidden " + (_0x450353.color && !I.includes(_0x450353.color) ? "ring-2 ring-offset-2 ring-offset-surface-raised ring-white/50 scale-110" : "")} style={_0x450353.color && !I.includes(_0x450353.color) ? {
                      backgroundColor: _0x450353.color,
                      borderColor: _0x450353.color
                    } : undefined}>{(!_0x450353.color || I.includes(_0x450353.color)) && <_0x5f5b5f icon="solar:pen-bold-duotone" className="size-3 text-text-muted" />}<input type="color" value={_0x450353.color || "#6366f1"} onChange={_0xd0a8b6 => _0x58a61d(_0x518c98 => ({
                        ..._0x518c98,
                        color: _0xd0a8b6.target.value
                      }))} className="absolute inset-0 opacity-0 cursor-pointer" /></label>{I.map(_0xf1fd02 => <button onClick={() => _0x58a61d(_0x51c46c => ({
                      ..._0x51c46c,
                      color: _0xf1fd02
                    }))} className={"size-6 rounded-full cursor-pointer transition-all " + (_0x450353.color === _0xf1fd02 ? "ring-2 ring-offset-2 ring-offset-surface-raised ring-white/50 scale-110" : "hover:scale-110")} style={{
                      backgroundColor: _0xf1fd02
                    }} key={_0xf1fd02} />)}</div></div>{_0x450353.name && <div className="pt-2"><_0x22e7c9 className="text-xs text-text-muted mb-2 block">{_0x2470f1("forum.tags.preview")}</_0x22e7c9><_0x2c07b9 name={_0x450353.name} emoji={_0x450353.emoji} color={_0x450353.color} /></div>}</div><div className="px-4 py-3 border-t border-border-subtle space-y-2"><div className="flex items-center gap-2">{_0x3639b6 ? <button onClick={() => {
                    _0x324b16(_0x3639b6.id);
                    _0x10c6a8(false);
                  }} className="flex-1 h-10 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-sm font-medium transition-colors cursor-pointer flex items-center justify-center gap-1.5"><D className="size-3.5" />{_0x2470f1("common.delete")}</button> : <button onClick={() => _0x10c6a8(false)} className="flex-1 h-10 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer">{_0x2470f1("common.cancel")}</button>}<button onClick={_0x3639b6 ? _0x2d9f11 : _0x33f78c} disabled={!_0x450353.name.trim()} className="flex-1 h-10 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">{_0x2470f1(_0x3639b6 ? "common.save" : "forum.tags.createTag")}</button></div></div></div></div></_0x3f5b8d></_0x1af5a4></div>;
  }
};
const L = ({
  className: _0x39b323
}) => <_0x5f5b5f icon="solar:sort-bold-duotone" className={_0x39b323} />;
const O = ({
  className: _0x250fcc
}) => <_0x5f5b5f icon="solar:widget-bold-duotone" className={_0x250fcc} />;
const P = ({
  className: _0x1b4b77
}) => <_0x5f5b5f icon="solar:chart-bold-duotone" className={_0x1b4b77} />;
const F = ({
  className: _0x40f6a6
}) => <_0x5f5b5f icon="solar:chat-square-bold-duotone" className={_0x40f6a6} />;
const V = ({
  className: _0xe52e91
}) => <_0x5f5b5f icon="solar:text-bold-duotone" className={_0xe52e91} />;
const A = ({
  className: _0x3e4a48
}) => <_0x5f5b5f icon="solar:document-text-bold-duotone" className={_0x3e4a48} />;
const B = ({
  className: _0x525664
}) => <_0x5f5b5f icon="solar:file-text-bold-duotone" className={_0x525664} />;
const M = ({
  layout: _0x20a72d
}) => {
  switch (_0x20a72d) {
    case "list":
      return <div className="w-full h-full rounded-lg bg-surface-base border border-border-default overflow-hidden p-2 flex flex-col gap-1.5">{[1, 2, 3, 4].map(_0x2dce6d => <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-surface-overlay/30" key={_0x2dce6d}><div className="size-2 rounded-full bg-surface-inset/60" /><div className="flex-1 space-y-1"><div className="h-1.5 w-3/4 rounded-full bg-surface-inset/50" /><div className="h-1 w-1/2 rounded-full bg-surface-inset/30" /></div></div>)}</div>;
    case "gallery":
      return <div className="w-full h-full rounded-lg bg-surface-base border border-border-default overflow-hidden p-2 grid grid-cols-2 gap-1.5">{[1, 2, 3, 4].map(_0x51a884 => <div className="rounded-md bg-surface-overlay/30 overflow-hidden" key={_0x51a884}><div className="h-[60%] bg-surface-inset/30" /><div className="p-1.5 space-y-1"><div className="h-1.5 w-3/4 rounded-full bg-surface-inset/50" /><div className="h-1 w-1/2 rounded-full bg-surface-inset/30" /></div></div>)}</div>;
    default:
      return null;
  }
};
const R = _0x34ca8b => (_0x34ca8b || "").replace(/\r\n/g, "\n").replace(/\n+$/, "");
const J = _0x202fe8.forwardRef(({
  guildId: _0x24077a,
  channelId: _0x5aeebf,
  onDirtyChange: _0x944130
}, _0x251c8d) => {
  const {
    t: _0x2a049d
  } = _0xe60bbd();
  const [_0x3bcf52, _0x274811] = _0x202fe8.useState(null);
  const [_0x241687, _0x47e426] = _0x202fe8.useState(null);
  const [_0x26e1ae, _0x31c6d9] = _0x202fe8.useState(true);
  const [_0x2b4ce5, _0x17d16e] = _0x202fe8.useState("");
  const [_0x187165, _0x1ee7bc] = _0x202fe8.useState("");
  _0x202fe8.useEffect(() => {
    (async () => {
      _0x31c6d9(true);
      try {
        const _0xe35485 = await _0x5dbb5f(_0x24077a, _0x5aeebf);
        const _0x27bde8 = {
          ..._0xe35485,
          guidelines: _0xe35485.guidelines || ""
        };
        _0x274811(_0x27bde8);
        _0x47e426(_0x27bde8);
        _0x17d16e(R(_0xe35485.guidelines));
        _0x1ee7bc(R(_0xe35485.guidelines));
      } catch {} finally {
        _0x31c6d9(false);
      }
    })();
  }, [_0x24077a, _0x5aeebf]);
  const _0x383bc7 = _0x202fe8.useMemo(() => {
    if (!_0x3bcf52 || !_0x241687) {
      return false;
    }
    const _0x1e1ed4 = R(_0x2b4ce5) !== R(_0x187165);
    const _0x2179b7 = (() => {
      const {
        guidelines: _0x3a6734,
        ..._0x4e14c2
      } = _0x3bcf52;
      const {
        guidelines: _0x31d81c,
        ..._0x654cc5
      } = _0x241687;
      return JSON.stringify(_0x4e14c2) !== JSON.stringify(_0x654cc5);
    })();
    return _0x1e1ed4 || _0x2179b7;
  }, [_0x3bcf52, _0x241687, _0x2b4ce5, _0x187165]);
  _0x202fe8.useEffect(() => {
    _0x944130?.(_0x383bc7);
  }, [_0x383bc7, _0x944130]);
  const _0x3f8a73 = _0x202fe8.useCallback((_0x581214, _0x137c0c) => {
    _0x47e426(_0x5a1378 => _0x5a1378 ? {
      ..._0x5a1378,
      [_0x581214]: _0x137c0c
    } : _0x5a1378);
  }, []);
  _0x202fe8.useImperativeHandle(_0x251c8d, () => ({
    reset: () => {
      _0x47e426(_0x3bcf52);
      _0x17d16e(R(_0x3bcf52?.guidelines));
    },
    save: async () => {
      if (!_0x3bcf52 || !_0x241687) {
        return;
      }
      const _0x18559e = {
        ..._0x241687,
        guidelines: _0x2b4ce5
      };
      const _0x5b525e = {};
      const _0x5859f1 = Object.keys(_0x18559e);
      for (const _0x1a9cc0 of _0x5859f1) {
        if (_0x1a9cc0 === "guidelines") {
          if (R(_0x3bcf52.guidelines) !== R(_0x2b4ce5)) {
            _0x5b525e.guidelines = _0x2b4ce5;
          }
        } else if (JSON.stringify(_0x3bcf52[_0x1a9cc0]) !== JSON.stringify(_0x18559e[_0x1a9cc0])) {
          _0x5b525e[_0x1a9cc0] = _0x18559e[_0x1a9cc0];
        }
      }
      if (Object.keys(_0x5b525e).length === 0) {
        return;
      }
      const _0x54a86b = await _0x106f09(_0x24077a, _0x5aeebf, _0x5b525e);
      const _0x1a09f1 = {
        ..._0x54a86b,
        guidelines: _0x54a86b.guidelines || ""
      };
      _0x274811(_0x1a09f1);
      _0x47e426(_0x1a09f1);
      _0x17d16e(R(_0x54a86b.guidelines));
      _0x1ee7bc(R(_0x54a86b.guidelines));
    }
  }), [_0x3bcf52, _0x241687, _0x2b4ce5, _0x24077a, _0x5aeebf]);
  if (_0x26e1ae || !_0x241687) {
    return <div className="flex items-center justify-center py-12"><div className="size-6 border-2 border-border-default border-t-accent-primary rounded-full animate-spin" /></div>;
  } else {
    return <div className="space-y-8"><section><div className="mb-2"><div className="flex items-center gap-2"><A className="size-4 text-text-tertiary" /><div className="text-base leading-snug font-semibold text-text-secondary">{_0x2a049d("forum.settings.guidelines")}</div></div><p className="text-sm leading-snug text-text-muted mt-0.5">{_0x2a049d("forum.settings.guidelinesDesc")}</p></div><div className="space-y-1.5"><div className="rounded-xl bg-surface-overlay/40 border border-border-default overflow-hidden focus-within:border-accent-primary/50 transition-colors"><_0x2a47df value={_0x2b4ce5} onChange={_0x17d16e} onSubmit={() => false} placeholder={_0x2a049d("forum.settings.guidelinesPlaceholder")} maxLength={2000} maxByteLength={8000} className="min-h-[100px] max-h-[200px] overflow-y-auto text-sm px-3 py-2" enableMarkdown={true} alwaysShowToolbar={true} multiline={true} /></div><div className="flex items-center justify-end text-[11px] text-text-muted">{_0x2b4ce5.length}/2000</div></div></section><_0x4512f9 className="bg-surface-overlay/70" /><section><div className="mb-2"><div className="flex items-center gap-2"><B className="size-4 text-text-tertiary" /><div className="text-base leading-snug font-semibold text-text-secondary">{_0x2a049d("forum.settings.postTemplate")}</div></div><p className="text-sm leading-snug text-text-muted mt-0.5">{_0x2a049d("forum.settings.postTemplateDesc")}</p></div><div className="space-y-1.5"><textarea value={_0x241687.post_template || ""} onChange={_0x318ea9 => _0x3f8a73("post_template", _0x318ea9.target.value)} placeholder={_0x2a049d("forum.settings.postTemplatePlaceholder")} rows={6} maxLength={4000} className="w-full rounded-xl bg-surface-overlay/40 border border-border-default px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted/60 outline-none resize-y min-h-[120px] max-h-[300px] focus:border-accent-primary/50 transition-colors font-mono leading-relaxed" /><div className="flex items-center justify-end text-[11px] text-text-muted">{(_0x241687.post_template || "").length}/4000</div></div></section><_0x4512f9 className="bg-surface-overlay/70" /><section><div className="mb-2"><div className="flex items-center gap-2"><L className="size-4 text-text-tertiary" /><div className="text-base leading-snug font-semibold text-text-secondary">{_0x2a049d("forum.settings.defaultSort")}</div></div><p className="text-sm leading-snug text-text-muted mt-0.5">{_0x2a049d("forum.settings.defaultSortDesc")}</p></div><_0x1f1a8a value={_0x241687.default_sort_order} onValueChange={_0x2570e6 => _0x3f8a73("default_sort_order", _0x2570e6)}><_0x4db713 className="w-56 h-9 text-sm"><_0x3941c3 /></_0x4db713><_0x491e06><_0x300e89 value="latest_activity">{_0x2a049d("forum.sort.latestActivity")}</_0x300e89><_0x300e89 value="creation_date">{_0x2a049d("forum.sort.creationDate")}</_0x300e89><_0x300e89 value="most_votes">{_0x2a049d("forum.sort.mostVotes")}</_0x300e89><_0x300e89 value="most_replies">{_0x2a049d("forum.sort.mostReplies")}</_0x300e89></_0x491e06></_0x1f1a8a></section><_0x4512f9 className="bg-surface-overlay/70" /><section><div className="mb-4"><div className="flex items-center gap-2"><O className="size-4 text-text-tertiary" /><div className="text-base leading-snug font-semibold text-text-secondary">{_0x2a049d("forum.settings.defaultLayout")}</div></div><p className="text-sm leading-snug text-text-muted mt-0.5">{_0x2a049d("forum.settings.defaultLayoutDesc")}</p></div><div className="flex gap-4"><div className="w-[65%] shrink-0 rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden divide-y divide-border-default">{["list", "gallery"].map(_0x442a1e => {
              const _0x4bca8b = _0x241687.default_layout === _0x442a1e;
              return <button onClick={() => _0x3f8a73("default_layout", _0x442a1e)} className={"w-full flex items-center gap-3 px-4 py-3 text-left transition-colors cursor-pointer " + (_0x4bca8b ? "bg-accent-subtle" : "active:bg-interactive-hover")} key={_0x442a1e}><div className={"size-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors " + (_0x4bca8b ? "border-accent-primary bg-accent-primary" : "border-border-strong")}>{_0x4bca8b && <div className="size-1.5 rounded-full bg-surface-raised" />}</div><span className={"text-sm font-medium transition-colors " + (_0x4bca8b ? "text-accent-primary-text" : "text-text-secondary")}>{_0x2a049d("forum.layout." + _0x442a1e)}</span></button>;
            })}</div><div className="w-[35%] h-[180px]"><M layout={_0x241687.default_layout} /></div></div></section><_0x4512f9 className="bg-surface-overlay/70" /><section><div className="mb-2"><div className="flex items-center gap-2"><P className="size-4 text-text-tertiary" /><div className="text-base leading-snug font-semibold text-text-secondary">{_0x2a049d("forum.settings.allowVoting")}</div></div><p className="text-sm leading-snug text-text-muted mt-0.5">{_0x2a049d("forum.settings.allowVotingDesc")}</p></div><div className="rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden divide-y divide-border-default"><div role="button" tabIndex={0} onClick={() => _0x3f8a73("allow_voting", !_0x241687.allow_voting)} onKeyDown={_0x3df3c4 => _0x3df3c4.key === "Enter" && _0x3f8a73("allow_voting", !_0x241687.allow_voting)} className="w-full flex items-center justify-between px-4 py-3 text-left active:bg-interactive-hover cursor-pointer"><div className="flex-1 min-w-0 pr-3"><span className="text-[15px] font-medium text-text-secondary block">{_0x2a049d("forum.settings.allowVoting")}</span><p className="text-[13px] text-text-tertiary mt-0.5">{_0x2a049d("forum.settings.allowVotingToggleDesc")}</p></div><div className="shrink-0 group/vs"><_0x5a1ff2 checked={_0x241687.allow_voting} onCheckedChange={_0x175e8f => _0x3f8a73("allow_voting", _0x175e8f)} onClick={_0x139613 => _0x139613.stopPropagation()} /></div></div>{_0x241687.allow_voting && <div role="button" tabIndex={0} onClick={() => _0x3f8a73("allow_downvotes", !_0x241687.allow_downvotes)} onKeyDown={_0x51ceb6 => _0x51ceb6.key === "Enter" && _0x3f8a73("allow_downvotes", !_0x241687.allow_downvotes)} className="w-full flex items-center justify-between px-4 py-3 text-left active:bg-interactive-hover cursor-pointer"><div className="flex-1 min-w-0 pr-3"><span className="text-[15px] font-medium text-text-secondary block">{_0x2a049d("forum.settings.allowDownvotes")}</span><p className="text-[13px] text-text-tertiary mt-0.5">{_0x2a049d("forum.settings.allowDownvotesDesc")}</p></div><div className="shrink-0 group/vs"><_0x5a1ff2 checked={_0x241687.allow_downvotes} onCheckedChange={_0x7686f4 => _0x3f8a73("allow_downvotes", _0x7686f4)} onClick={_0x509644 => _0x509644.stopPropagation()} /></div></div>}</div></section><_0x4512f9 className="bg-surface-overlay/70" /><section><div className="mb-2"><div className="flex items-center gap-2"><F className="size-4 text-text-tertiary" /><div className="text-base leading-snug font-semibold text-text-secondary">{_0x2a049d("forum.settings.general")}</div></div><p className="text-sm leading-snug text-text-muted mt-0.5">{_0x2a049d("forum.settings.generalDescription")}</p></div><div className="rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden divide-y divide-border-default"><div role="button" tabIndex={0} onClick={() => _0x3f8a73("is_qa_mode", !_0x241687.is_qa_mode)} onKeyDown={_0x1d394c => _0x1d394c.key === "Enter" && _0x3f8a73("is_qa_mode", !_0x241687.is_qa_mode)} className="w-full flex items-center justify-between px-4 py-3 text-left active:bg-interactive-hover cursor-pointer"><div className="flex-1 min-w-0 pr-3"><span className="text-[15px] font-medium text-text-secondary block">{_0x2a049d("forum.settings.qaMode")}</span><p className="text-[13px] text-text-tertiary mt-0.5">{_0x2a049d("forum.settings.qaModeDesc")}</p></div><div className="shrink-0 group/vs"><_0x5a1ff2 checked={_0x241687.is_qa_mode} onCheckedChange={_0x3914c9 => _0x3f8a73("is_qa_mode", _0x3914c9)} onClick={_0x525f1a => _0x525f1a.stopPropagation()} /></div></div></div></section><_0x4512f9 className="bg-surface-overlay/70" /><section><div className="mb-2"><div className="flex items-center gap-2"><V className="size-4 text-text-tertiary" /><div className="text-base leading-snug font-semibold text-text-secondary">{_0x2a049d("forum.settings.titleLength")}</div></div><p className="text-sm leading-snug text-text-muted mt-0.5">{_0x2a049d("forum.settings.titleLengthDesc")}</p></div><div className="flex items-center gap-2"><_0x20d0da type="number" min={1} max={50} value={_0x241687.min_title_length} onChange={_0x392c71 => _0x3f8a73("min_title_length", parseInt(_0x392c71.target.value) || 5)} className="w-20 h-9 text-sm text-center" /><span className="text-sm text-text-muted">—</span><_0x20d0da type="number" min={10} max={300} value={_0x241687.max_title_length} onChange={_0x1a7285 => _0x3f8a73("max_title_length", parseInt(_0x1a7285.target.value) || 100)} className="w-20 h-9 text-sm text-center" /></div></section><_0x4512f9 className="bg-surface-overlay/70" /><section><E guildId={_0x24077a} channelId={_0x5aeebf} requireTag={_0x241687.require_tag} onRequireTagChange={_0x1ddd22 => _0x3f8a73("require_tag", _0x1ddd22)} /></section></div>;
  }
});
J.displayName = "ForumSettingsTab";
export { J as default };