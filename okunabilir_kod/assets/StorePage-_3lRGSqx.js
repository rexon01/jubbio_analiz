import { r as _0x53d548, ci as _0x3d3c0f, j as _0x42b80a, _ as _0x3e075c, d as _0x4a0ecb, b as _0x497c9d, cj as _0x2fec1, B as _0x5ec30c, I as _0x4e2ff6, X as _0x517adf, b2 as _0x79e4b0, F as _0x51cd39, a_ as _0x22c154, bU as _0x2fe2d1, d_ as _0x4fd713 } from "./index-cQfEKR1W.js";
import { B as _0x244ad9, S as _0x64c5d5 } from "./AppLayout-BEBJqe9_.js";
import { G as _0x1dcf54 } from "./GuildPreviewModal-BeoGMRq0.js";
import { I as _0x4405cc } from "./input-AMyERYwJ.js";
import { A as _0x2bc45e, a as _0x18fd45, b as _0x4b41e9 } from "./avatar-C-4BWxT3.js";
import { v as _0x49ab5a } from "./developer-DCtAQT29.js";
import { S as _0x1248e1 } from "./search-BXcLTinX.js";
import { P as _0x11be9b } from "./plus-B7c2Px8R.js";
import "./soundboardFx-C2LP-Hjs.js";
import "./index-BUijt7wr.js";
import "./tr-D975n4_R.js";
import "./select-DQjjzSZW.js";
import "./index-Oyyh46KT.js";
import "./arrow-left-B3FhifN2.js";
import "./arrow-right-DvlsXLCB.js";
import "./loader-circle-CTtxa1g9.js";
import "./switch-lfnbGePn.js";
import "./drawer-X7YyCqpZ.js";
import "./index-yuEHo9bu.js";
import "./subscription-Cl5JAGbQ.js";
import "./useTheme-CzNZmxfV.js";
import "./ComparisonTable-DUfwtDVZ.js";
import "./card-Bk6R3tFg.js";
import "./gift-Co-azAyt.js";
import "./CheckoutPlaceholder-Dr0TfmeQ.js";
import "./IyzicoCheckoutFrame-f1WDW5o8.js";
import "./zap-B3VH4qT9.js";
import "./dialog-BMMpM7PR.js";
import "./submit-button-B2LF_DTf.js";
import "./NexusSuccessArtwork-YGvslhff.js";
import "./circle-x-BBSKKBIf.js";
import "./ConfirmDialog-B4gIndKy.js";
import "./alert-dialog-BZuoGg7O.js";
import "./user-DSjlY8FD.js";
import "./refresh-cw-C3NlhmpS.js";
import "./trash-2-DuFcDcAU.js";
import "./clipboard-BQ9qambq.js";
import "./label-ODyS97Ju.js";
import "./video-AtsAgCNJ.js";
import "./channelNotificationStore-FXjXBmS_.js";
import "./index.module-CsHioFCV.js";
const C = _0x53d548.lazy(() => _0x3e075c(() => import("./StoreAppDetailPage-FQOx-Hi5.js"), [], import.meta.url));
const _Component2 = ({
  className: _0x36e5d5
}) => <_0x4e2ff6 icon="solar:refresh-bold-duotone" className={_0x36e5d5} />;
const _ = ({
  className: _0x9b8f74
}) => <_0x4e2ff6 icon="solar:medal-ribbons-star-bold-duotone" className={_0x9b8f74} />;
const S = ({
  className: _0x5118ac
}) => <_0x4e2ff6 icon="solar:fire-bold-duotone" className={_0x5118ac} />;
const A = ({
  className: _0xb57da5
}) => <_0x4e2ff6 icon="solar:stars-bold-duotone" className={_0xb57da5} />;
const E = [{
  id: "all",
  labelKey: "store.categories.all",
  icon: "solar:stars-bold-duotone"
}, {
  id: "moderation",
  labelKey: "store.categories.moderation",
  icon: "solar:shield-bold-duotone"
}, {
  id: "music",
  labelKey: "store.categories.music",
  icon: "solar:music-note-bold-duotone"
}, {
  id: "games",
  labelKey: "store.categories.games",
  icon: "solar:gamepad-bold-duotone"
}, {
  id: "utility",
  labelKey: "store.categories.utility",
  icon: "solar:wrench-bold-duotone"
}, {
  id: "social",
  labelKey: "store.categories.social",
  icon: "solar:chat-square-bold-duotone"
}];
const T = "529364362352140288";
function F() {
  const {
    t: _0x4d2272
  } = _0x497c9d();
  const [_0x330c07, _0x332c5e] = _0x53d548.useState(false);
  const [_0x217dce, _0xef225b] = _0x53d548.useState(false);
  const _0x50b9e1 = _0x22c154(_0x53d548.useCallback(_0x312904 => _0x312904.servers?.some(_0x10ea6c => _0x10ea6c.id === T) ?? false, []));
  const {
    navigateToServer: _0x54755d
  } = _0x2fe2d1();
  const _0x2aa4dc = {
    id: T,
    name: "Jubbio Developers",
    description: _0x4d2272("store.devCardSubtitle"),
    avatar_url: null,
    banner_url: null,
    discovery_splash_url: null,
    member_count: 0,
    online_count: 0,
    is_verified: true,
    is_creator: true,
    is_live: false,
    discovery_score: 0,
    boost_tier: 0,
    primary_category: null,
    preferred_locale: null
  };
  const _0x2c1322 = _0x53d548.useCallback(() => {
    if (_0x50b9e1) {
      _0x54755d(T);
    } else {
      _0x332c5e(true);
    }
  }, [_0x50b9e1, _0x54755d]);
  const _0x41654e = _0x53d548.useCallback(async () => {
    if (!_0x217dce) {
      try {
        _0xef225b(true);
        if ((await _0x4fd713(T)).application_required) {
          _0x332c5e(false);
          return;
        }
        const {
          addServerIfNotExists: _0x4eb455
        } = _0x22c154.getState();
        _0x4eb455({
          id: T,
          name: "Jubbio Developers",
          avatar_url: null,
          banner_url: null
        });
        _0x332c5e(false);
        setTimeout(() => {
          _0x54755d(T);
        }, 500);
      } catch {} finally {
        _0xef225b(false);
      }
    }
  }, [_0x217dce, _0x54755d]);
  return <_0x42b80a.Fragment><button onClick={_0x2c1322} className="flex items-center gap-3 pl-2.5 pr-4 py-2 rounded-lg bg-surface-overlay/50 border border-border-default/50 hover:border-border-strong/60 hover:bg-surface-overlay/70 active:scale-[0.98] transition-all cursor-pointer group min-w-[280px]"><div className="shrink-0"><div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-primary/5 flex items-center justify-center"><_0x4e2ff6 icon="solar:code-bold-duotone" className="size-5 text-accent-primary" /></div></div><div className="flex flex-col items-start min-w-0 flex-1"><span className="text-sm font-semibold text-text-primary truncate group-hover:text-accent-primary-text transition-colors">{_0x4d2272("store.devCardTitle")}</span><span className="text-xs text-text-muted">{_0x4d2272("store.devCardSubtitle")}</span></div></button><_0x1dcf54 open={_0x330c07} onOpenChange={_0x332c5e} guild={_0x2aa4dc} onJoin={_0x41654e} isJoining={_0x217dce} /></_0x42b80a.Fragment>;
}
function K() {
  const {
    t: _0xc5d1b2
  } = _0x497c9d();
  return <header className="w-full"><div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12"><div className="flex flex-col gap-3 flex-1"><h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">{_0xc5d1b2("store.heroTitle")} <span className="text-accent-primary">{_0xc5d1b2("store.heroTitleHighlight")}</span></h1><p className="text-lg text-text-muted max-w-lg">{_0xc5d1b2("store.heroSubtitle")}</p></div><div className="flex flex-col gap-2.5 shrink-0"><F /></div></div></header>;
}
function P({
  selectedCategory: _0x283ab5,
  onCategorySelect: _0x11f954,
  searchExpanded: _0xeb2ccb,
  onSearchExpandChange: _0x150712,
  searchQuery: _0x57e8eb,
  onSearchChange: _0x327612
}) {
  const {
    t: _0x4b7ea3
  } = _0x497c9d();
  const _0x4c77b2 = _0x53d548.useRef(null);
  const _0x1fc87b = _0x53d548.useRef(null);
  const _0x4f09e0 = _0x53d548.useRef(null);
  const [_0x19e6b0, _0x33fa04] = _0x53d548.useState(_0x57e8eb);
  const [_0x13b2da, _0x4ca9e5] = _0x53d548.useState(null);
  const _0x3616fb = _0x53d548.useRef(null);
  _0x53d548.useEffect(() => {
    _0x33fa04(_0x57e8eb);
  }, [_0x57e8eb]);
  _0x53d548.useEffect(() => {
    if (_0xeb2ccb) {
      _0x4c77b2.current?.focus();
    }
  }, [_0xeb2ccb]);
  _0x53d548.useEffect(() => () => {
    if (_0x3616fb.current) {
      clearTimeout(_0x3616fb.current);
    }
  }, []);
  _0x53d548.useEffect(() => {
    const _0x54cd56 = () => {
      const _0x35adc = _0x4f09e0.current;
      const _0x445381 = _0x1fc87b.current;
      if (!_0x35adc || !_0x445381) {
        return;
      }
      const _0x3bfef7 = _0x445381.getBoundingClientRect();
      const _0x1a684d = _0x35adc.getBoundingClientRect();
      _0x4ca9e5({
        left: _0x1a684d.left - _0x3bfef7.left + _0x445381.scrollLeft,
        width: _0x1a684d.width
      });
    };
    _0x54cd56();
    const _0x3cca6a = requestAnimationFrame(_0x54cd56);
    const _0x51a0e9 = requestAnimationFrame(() => requestAnimationFrame(_0x54cd56));
    return () => {
      cancelAnimationFrame(_0x3cca6a);
      cancelAnimationFrame(_0x51a0e9);
    };
  }, [_0x283ab5, _0xeb2ccb]);
  const _0x47fe8d = _0x53d548.useCallback(_0x3da192 => {
    const _0x3a9b4d = _0x3da192.target.value;
    _0x33fa04(_0x3a9b4d);
    if (_0x3616fb.current) {
      clearTimeout(_0x3616fb.current);
    }
    _0x3616fb.current = setTimeout(() => _0x327612(_0x3a9b4d), 300);
  }, [_0x327612]);
  const _0x4db8fd = _0x53d548.useCallback(() => {
    _0x150712(false);
  }, [_0x150712]);
  const _0x392933 = _0x53d548.useCallback(() => {
    _0x33fa04("");
    if (_0x3616fb.current) {
      clearTimeout(_0x3616fb.current);
    }
    _0x327612("");
    _0x4c77b2.current?.focus();
  }, [_0x327612]);
  const _0x41d2bc = _0x53d548.useCallback(_0x4a5d55 => {
    _0x4f09e0.current = _0x4a5d55;
    if (_0x4a5d55 && _0x1fc87b.current) {
      requestAnimationFrame(() => {
        if (!_0x4a5d55 || !_0x1fc87b.current) {
          return;
        }
        const _0x9accd8 = _0x1fc87b.current.getBoundingClientRect();
        const _0x51c94b = _0x4a5d55.getBoundingClientRect();
        _0x4ca9e5({
          left: _0x51c94b.left - _0x9accd8.left + _0x1fc87b.current.scrollLeft,
          width: _0x51c94b.width
        });
      });
    }
  }, []);
  return <div className="shrink-0 w-full px-4 pt-2 pb-1"><div ref={_0x1fc87b} className="relative flex items-center gap-1.5 p-1.5 rounded-2xl bg-surface-raised border border-border-subtle min-w-0">{_0x13b2da != null && !_0xeb2ccb && <div className="absolute top-1.5 bottom-1.5 rounded-xl bg-surface-inset/60 transition-[left,width] duration-200 ease-out pointer-events-none" style={{
        left: _0x13b2da.left,
        width: _0x13b2da.width
      }} />}<button ref={_0x283ab5 !== "all" || _0xeb2ccb ? undefined : _0x41d2bc} type="button" onClick={() => _0x11f954("all")} className={"relative z-1 shrink-0 py-2.5 px-4 text-sm font-medium rounded-xl transition-colors cursor-pointer whitespace-nowrap " + (_0x283ab5 !== "all" || _0xeb2ccb ? "text-text-tertiary hover:text-text-secondary" : "text-text-primary")}>{_0x4b7ea3("store.categories.all")}</button><div className={"relative min-w-0 flex items-center justify-start overflow-hidden transition-all duration-200 " + (_0xeb2ccb ? "flex-[0.7]" : "flex-1")}><div className="flex gap-0.5 items-center min-w-0 overflow-hidden justify-start">{E.filter(_0x360e95 => _0x360e95.id !== "all").map(_0x3e2ccb => {
            const _0x34bfb8 = _0x283ab5 === _0x3e2ccb.id;
            return <button ref={_0x34bfb8 && !_0xeb2ccb ? _0x41d2bc : undefined} type="button" onClick={() => _0x11f954(_0x3e2ccb.id)} className={"relative z-1 shrink-0 py-2.5 px-4 text-sm font-medium rounded-xl transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 " + (_0x34bfb8 && !_0xeb2ccb ? "text-text-primary" : "text-text-tertiary hover:text-text-secondary")} key={_0x3e2ccb.id}><_0x4e2ff6 icon={_0x3e2ccb.icon} className="size-4" /><span>{_0x4b7ea3(_0x3e2ccb.labelKey)}</span></button>;
          })}</div></div>{_0xeb2ccb ? <div className="flex items-center flex-[0.3] min-w-0 transition-all duration-200"><_0x4405cc ref={_0x4c77b2} type="text" placeholder={_0x4b7ea3("store.searchPlaceholder")} value={_0x19e6b0} onChange={_0x47fe8d} icon={<_0x1248e1 className="size-4" />} wrapperClassName="flex-1 h-10" rightElement={<button type="button" onClick={_0x19e6b0 ? _0x392933 : _0x4db8fd} className="size-6 rounded-lg flex items-center justify-center shrink-0 text-text-tertiary hover:text-text-primary transition-colors"><_0x517adf className="size-4" /></button>} /></div> : <button type="button" onClick={() => _0x150712(true)} className="relative z-1 shrink-0 flex items-center justify-center size-10 aspect-square rounded-xl text-text-tertiary hover:text-text-secondary transition-colors cursor-pointer"><_0x1248e1 className="size-5" /></button>}</div></div>;
}
function I({
  app: _0x586fb0
}) {
  const _0x480636 = _0x4a0ecb();
  const {
    t: _0x540496
  } = _0x497c9d();
  const _0x5d747c = _0x79e4b0(_0x5dbacc => _0x5dbacc.openOAuth2Modal);
  const _0x35a942 = _0x586fb0.bot?.display_name || _0x586fb0.bot?.username || _0x586fb0.name;
  const _0x2bb290 = _0x586fb0.bot?.banner_url;
  const _0x5f0085 = _0x586fb0.bot?.avatar_url;
  const _0x33f2ac = _0x586fb0.bot?.bio || _0x586fb0.description;
  return <div className="relative w-full h-[220px] sm:h-[260px] rounded-3xl overflow-hidden cursor-pointer group" onClick={() => _0x480636("/app/store/" + _0x586fb0.id)}><div className="absolute inset-0 bg-gradient-to-br from-accent-primary/30 via-surface-overlay to-surface-raised">{_0x2bb290 && <img src={_0x2bb290} alt="" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />}</div><div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" /><div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-accent-primary text-text-on-accent text-xs font-bold uppercase tracking-wide flex items-center gap-1.5"><_0x4e2ff6 icon="solar:crown-bold-duotone" className="size-3.5" />{_0x540496("store.appOfTheWeek")}</div><div className="absolute bottom-0 left-0 right-0 p-5"><div className="flex items-end gap-4"><_0x2bc45e className="size-16 sm:size-20 rounded-2xl ring-2 ring-border-default shadow-2xl">{_0x5f0085 ? <_0x18fd45 src={_0x5f0085} alt={_0x35a942} className="object-cover" /> : null}<_0x4b41e9 className="bg-surface-inset rounded-2xl"><_0x4e2ff6 icon="solar:bot-bold-duotone" className="size-8 text-text-secondary" /></_0x4b41e9></_0x2bc45e><div className="flex-1 min-w-0"><h3 className="font-bold text-text-primary text-xl sm:text-2xl truncate">{_0x35a942}</h3><p className="text-sm text-text-primary/70 line-clamp-2 mt-1">{_0x33f2ac}</p><div className="flex items-center gap-4 mt-2"><span className="flex items-center gap-1 text-sm text-text-primary/60"><_0x4e2ff6 icon="solar:users-group-rounded-bold-duotone" className="size-4" />{_0x540496("store.serverCount", {
                count: _0x586fb0.guild_count || 0
              })}</span></div></div><_0x5ec30c size="lg" className="bg-accent-primary text-text-on-accent hover:bg-accent-primary/90 rounded-xl px-6 h-11 font-semibold hidden sm:flex" onClick={_0x478e98 => {
          _0x478e98.stopPropagation();
          const _0x51365d = _0x586fb0.client_id || _0x586fb0.id;
          _0x5d747c({
            clientId: _0x51365d,
            scope: "bot",
            permissions: "0",
            redirectUri: null
          });
        }}><_0x11be9b className="size-5 mr-1" />{_0x540496("store.add")}</_0x5ec30c></div></div></div>;
}
function R({
  app: _0x912dce,
  index: _0x3399ea
}) {
  const _0x5903fe = _0x4a0ecb();
  const {
    t: _0x5cffbd
  } = _0x497c9d();
  const _0x24efe5 = _0x79e4b0(_0x150717 => _0x150717.openOAuth2Modal);
  const _0x137f37 = _0x912dce.bot?.display_name || _0x912dce.bot?.username || _0x912dce.name;
  const _0x53cad4 = _0x912dce.bot?.banner_url;
  const _0x460834 = _0x912dce.bot?.avatar_url;
  const _0x42e9c1 = _0x912dce.bot?.bio || _0x912dce.description;
  const _0x5b2455 = [{
    labelKey: "store.badges.editorsChoice",
    icon: _,
    color: "bg-accent-primary text-text-on-accent"
  }, {
    labelKey: "store.badges.popular",
    icon: S,
    color: "bg-orange-500 text-text-primary"
  }, {
    labelKey: "store.badges.new",
    icon: A,
    color: "bg-blue-500 text-text-primary"
  }];
  const _0x337ab0 = _0x5b2455[_0x3399ea % _0x5b2455.length];
  const _0x561930 = _0x337ab0.icon;
  return <div className="relative min-w-[300px] sm:min-w-[360px] h-[180px] rounded-2xl overflow-hidden cursor-pointer group" onClick={() => _0x5903fe("/app/store/" + _0x912dce.id)}><div className="absolute inset-0 bg-gradient-to-br from-surface-inset to-surface-raised">{_0x53cad4 && <img src={_0x53cad4} alt="" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />}</div><div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" /><div className={"absolute top-3 left-3 px-2 py-1 rounded-full " + _0x337ab0.color + " text-[10px] font-bold uppercase tracking-wide flex items-center gap-1"}><_0x561930 className="size-3" />{_0x5cffbd(_0x337ab0.labelKey)}</div><div className="absolute bottom-0 left-0 right-0 p-4"><div className="flex items-end gap-3"><_0x2bc45e className="size-12 rounded-xl ring-2 ring-border-default shadow-xl">{_0x460834 ? <_0x18fd45 src={_0x460834} alt={_0x137f37} className="object-cover" /> : null}<_0x4b41e9 className="bg-surface-inset rounded-xl"><_0x4e2ff6 icon="solar:bot-bold-duotone" className="size-5 text-text-secondary" /></_0x4b41e9></_0x2bc45e><div className="flex-1 min-w-0"><h3 className="font-bold text-text-primary text-base truncate">{_0x137f37}</h3><p className="text-xs text-text-primary/70 line-clamp-1">{_0x42e9c1}</p><div className="flex items-center gap-2 mt-1"><span className="flex items-center gap-1 text-xs text-text-primary/60"><_0x4e2ff6 icon="solar:users-group-rounded-bold-duotone" className="size-3" />{_0x912dce.guild_count?.toLocaleString() || "0"}</span></div></div><_0x5ec30c size="sm" className="bg-surface-inset/80 backdrop-blur-sm text-text-primary hover:bg-interactive-hover rounded-full size-9 p-0" onClick={_0x5a1ecf => {
          _0x5a1ecf.stopPropagation();
          const _0x36621e = _0x912dce.client_id || _0x912dce.id;
          _0x24efe5({
            clientId: _0x36621e,
            scope: "bot",
            permissions: "0",
            redirectUri: null
          });
        }}><_0x11be9b className="size-4" /></_0x5ec30c></div></div></div>;
}
function _Component({
  app: _0x5150ec,
  onClick: _0x3ffe4b,
  rank: _0x2b2a62
}) {
  const _0x3a2c15 = _0x79e4b0(_0x179a88 => _0x179a88.openOAuth2Modal);
  const _0x454df3 = _0x5150ec.bot?.display_name || _0x5150ec.bot?.username || _0x5150ec.name;
  const _0x1a84e6 = _0x5150ec.bot?.avatar_url;
  return <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-interactive-hover transition-all cursor-pointer group" onClick={_0x3ffe4b}>{_0x2b2a62 && <span className={"text-lg font-bold w-6 text-center " + (_0x2b2a62 <= 3 ? "text-accent-primary-text" : "text-text-muted")}>{_0x2b2a62}</span>}<_0x2bc45e className="size-11 rounded-xl shrink-0">{_0x1a84e6 ? <_0x18fd45 src={_0x1a84e6} alt={_0x454df3} className="object-cover" /> : null}<_0x4b41e9 className="bg-gradient-to-br from-surface-inset to-surface-overlay rounded-xl"><_0x4e2ff6 icon="solar:bot-bold-duotone" className="size-5 text-text-secondary" /></_0x4b41e9></_0x2bc45e><div className="flex-1 min-w-0"><h3 className="font-semibold text-text-primary text-sm truncate">{_0x454df3}</h3><div className="flex items-center gap-2"><span className="flex items-center gap-0.5 text-[10px] text-text-muted"><_0x4e2ff6 icon="solar:users-group-rounded-bold-duotone" className="size-2.5" />{_0x5150ec.guild_count?.toLocaleString() || "0"}</span></div></div><_0x5ec30c size="icon" variant="ghost" className="size-8 rounded-full text-text-tertiary hover:text-accent-primary-text hover:bg-accent-subtle opacity-0 group-hover:opacity-100 transition-all shrink-0" onClick={_0x33c593 => {
      _0x33c593.stopPropagation();
      const _0x5f076a = _0x5150ec.client_id || _0x5150ec.id;
      _0x3a2c15({
        clientId: _0x5f076a,
        scope: "bot",
        permissions: "0",
        redirectUri: null
      });
    }}><_0x11be9b className="size-4" /></_0x5ec30c></div>;
}
function M({
  app: _0x70abda,
  onClick: _0x4bdffc
}) {
  const {
    t: _0x26c110
  } = _0x497c9d();
  const _0x4c3e0b = _0x79e4b0(_0x34f266 => _0x34f266.openOAuth2Modal);
  const _0x2bc3a1 = _0x70abda.bot?.display_name || _0x70abda.bot?.username || _0x70abda.name;
  const _0x31c3e8 = _0x70abda.bot?.avatar_url;
  const _0x390e82 = _0x70abda.bot?.banner_url;
  const _0x1e8917 = _0x70abda.bot?.bio || _0x70abda.description;
  return <div className="group relative rounded-2xl bg-surface-overlay/40 border border-border-strong/40 overflow-hidden hover:border-surface-inset/60 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 cursor-pointer" onClick={_0x4bdffc}><div className="relative h-20 bg-gradient-to-br from-surface-inset to-surface-overlay overflow-hidden">{_0x390e82 ? <img src={_0x390e82} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> : <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-transparent to-surface-overlay" />}<div className="absolute inset-0 bg-gradient-to-t from-surface-raised/90 via-surface-raised/20 to-transparent" /><button className="absolute top-2 right-2 size-8 rounded-full bg-accent-primary text-text-on-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 hover:bg-accent-primary/90 shadow-lg cursor-pointer" onClick={_0x3c1d58 => {
        _0x3c1d58.stopPropagation();
        const _0x4e6715 = _0x70abda.client_id || _0x70abda.id;
        _0x4c3e0b({
          clientId: _0x4e6715,
          scope: "bot",
          permissions: "0",
          redirectUri: null
        });
      }}><_0x11be9b className="size-5" /></button></div><div className="relative px-3 -mt-7 mb-3"><_0x2bc45e className="size-14 rounded-2xl ring-4 ring-surface-overlay/90 shadow-lg">{_0x31c3e8 ? <_0x18fd45 src={_0x31c3e8} alt={_0x2bc3a1} className="object-cover" /> : null}<_0x4b41e9 className="bg-gradient-to-br from-surface-inset to-surface-overlay text-text-secondary rounded-2xl"><_0x4e2ff6 icon="solar:bot-bold-duotone" className="size-6" /></_0x4b41e9></_0x2bc45e></div><div className="px-3 pb-3"><div className="mb-1.5"><h3 className="font-semibold text-text-primary text-sm truncate">{_0x2bc3a1}</h3><div className="flex items-center gap-2 mt-0.5"><span className="flex items-center gap-0.5 text-[10px] text-text-muted"><_0x4e2ff6 icon="solar:users-group-rounded-bold-duotone" className="size-2.5" />{_0x26c110("store.serverCount", {
              count: _0x70abda.guild_count || 0
            })}</span></div></div>{_0x1e8917 && <p className="text-xs text-text-tertiary line-clamp-2 leading-relaxed">{_0x1e8917}</p>}</div></div>;
}
function O({
  apps: _0x579b52,
  onAppClick: _0x3edd08
}) {
  const {
    t: _0x2ec26e
  } = _0x497c9d();
  const _0xec30f0 = _0x579b52.slice(0, 5);
  const _0x28291f = _0x579b52.slice(5, 10);
  return <section><div className="flex items-center justify-between mb-3"><h2 className="text-base font-semibold text-text-secondary flex items-center gap-2"><_0x4e2ff6 icon="solar:graph-up-bold-duotone" className="size-4 text-accent-primary-text" />{_0x2ec26e("store.topCharts")}</h2><button className="text-xs text-accent-primary-text hover:text-[#9ee607] flex items-center gap-0.5 font-medium">{_0x2ec26e("store.viewAll")}<_0x51cd39 className="size-3" /></button></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-1 rounded-2xl bg-surface-raised/50 border border-border-default/50 p-2"><div className="space-y-0.5">{_0xec30f0.map((_0x1d6ede, _0x5f7486) => <_Component app={_0x1d6ede} onClick={() => _0x3edd08(_0x1d6ede.id)} rank={_0x5f7486 + 1} key={_0x1d6ede.id} />)}</div><div className="space-y-0.5">{_0x28291f.map((_0x38e88c, _0x100562) => <_Component app={_0x38e88c} onClick={() => _0x3edd08(_0x38e88c.id)} rank={_0x100562 + 6} key={_0x38e88c.id} />)}</div></div></section>;
}
function L({
  title: _0x10579f,
  icon: _0x573908,
  iconColor: _0x3acee2 = "text-text-tertiary",
  apps: _0x528cf7
}) {
  const {
    t: _0x2f54e0
  } = _0x497c9d();
  if (_0x528cf7.length === 0) {
    return null;
  } else {
    return <section><div className="flex items-center justify-between mb-3"><h2 className="text-base font-semibold text-text-secondary flex items-center gap-2"><_0x573908 className={"size-4 " + _0x3acee2} />{_0x10579f}</h2><button className="text-xs text-accent-primary-text hover:text-[#9ee607] flex items-center gap-0.5 font-medium">{_0x2f54e0("store.viewAll")}<_0x51cd39 className="size-3" /></button></div><div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4" style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none"
      }}>{_0x528cf7.map((_0x29a33d, _0x168d8c) => <div className="snap-start" key={_0x29a33d.id}><R app={_0x29a33d} index={_0x168d8c} /></div>)}</div></section>;
  }
}
function B({
  apps: _0x4bcf4f,
  onAppClick: _0x272765
}) {
  const {
    t: _0x2e77b5
  } = _0x497c9d();
  const _0x49a980 = _0x79e4b0(_0x4d9324 => _0x4d9324.openOAuth2Modal);
  if (_0x4bcf4f.length < 3) {
    return null;
  }
  return <section><div className="flex items-center justify-between mb-3"><h2 className="text-base font-semibold text-text-secondary flex items-center gap-2"><_0x4e2ff6 icon="solar:heart-bold-duotone" className="size-4 text-pink-400" />{_0x2e77b5("store.staffPicks")}</h2></div><div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{_0x4bcf4f.slice(0, 3).map(_0x1815e7 => {
        const _0x2bf911 = _0x1815e7.bot?.display_name || _0x1815e7.bot?.username || _0x1815e7.name;
        const _0xf0631b = _0x1815e7.bot?.avatar_url;
        const _0x3365d7 = _0x1815e7.bot?.bio || _0x1815e7.description;
        return <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500/10 via-surface-overlay/50 to-surface-raised/50 border border-pink-500/20 hover:border-pink-500/40 transition-all cursor-pointer group" onClick={() => _0x272765(_0x1815e7.id)} key={_0x1815e7.id}><div className="flex items-center gap-3 mb-3"><_0x2bc45e className="size-12 rounded-xl">{_0xf0631b ? <_0x18fd45 src={_0xf0631b} alt={_0x2bf911} className="object-cover" /> : null}<_0x4b41e9 className="bg-surface-inset rounded-xl"><_0x4e2ff6 icon="solar:bot-bold-duotone" className="size-5 text-text-secondary" /></_0x4b41e9></_0x2bc45e><div className="flex-1 min-w-0"><h3 className="font-semibold text-text-primary text-sm truncate">{_0x2bf911}</h3><div className="flex items-center gap-1.5"><_0x4e2ff6 icon="solar:users-group-rounded-bold-duotone" className="size-3 text-text-muted" /><span className="text-xs text-text-tertiary">{_0x1815e7.guild_count?.toLocaleString() || "0"}</span></div></div></div><p className="text-xs text-text-tertiary line-clamp-2">{_0x3365d7}</p><_0x5ec30c size="sm" className="w-full mt-3 bg-pink-500/20 text-pink-200 hover:bg-pink-500/30 rounded-xl h-8 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity" onClick={_0x2f9023 => ((_0x97ab31, _0x8172d1) => {
            _0x97ab31.stopPropagation();
            const _0xf02879 = _0x8172d1.client_id || _0x8172d1.id;
            _0x49a980({
              clientId: _0xf02879,
              scope: "bot",
              permissions: "0",
              redirectUri: null
            });
          })(_0x2f9023, _0x1815e7)}><_0x11be9b className="size-3.5 mr-1" />{_0x2e77b5("store.add")}</_0x5ec30c></div>;
      })}</div></section>;
}
const D = _0x53d548.memo(function ({
  isVisible: _0x23dfc8 = true,
  isVertical: _0x4e3089 = false
}) {
  const _0x45b1c1 = _0x4a0ecb();
  const {
    t: _0x7d2193
  } = _0x497c9d();
  const {
    status: _0x13e0bf
  } = _0x2fec1();
  const _0x184de3 = _0x13e0bf === "joined";
  const [_0x8618c1, _0x443425] = _0x53d548.useState("");
  const [_0x7adf92, _0x63f63c] = _0x53d548.useState("all");
  const [_0x536694, _0x25784e] = _0x53d548.useState(false);
  const [_0x219906, _0x5505e9] = _0x53d548.useState([]);
  const [_0x597fa7, _0x564cd5] = _0x53d548.useState(true);
  const [_0x1b205f, _0x79e991] = _0x53d548.useState(false);
  const [_0x315678, _0x3150c1] = _0x53d548.useState(null);
  const [_0xf99019, _0x17e479] = _0x53d548.useState(null);
  const [_0x5576c0, _0x4c3d64] = _0x53d548.useState(false);
  const _0x179866 = _0x53d548.useCallback(async (_0x2dcd37, _0x7b5010 = false) => {
    try {
      if (_0x7b5010) {
        _0x79e991(true);
      } else {
        _0x564cd5(true);
      }
      const _0x19cdc4 = {
        limit: 24
      };
      if (_0x2dcd37) {
        _0x19cdc4.cursor = _0x2dcd37;
      }
      if (_0x7adf92 !== "all") {
        _0x19cdc4.tag = _0x7adf92;
      }
      if (_0x8618c1.trim()) {
        _0x19cdc4.search = _0x8618c1.trim();
      }
      const _0x261701 = await _0x49ab5a(_0x19cdc4);
      _0x5505e9(_0x7b5010 ? _0x116192 => [..._0x116192, ..._0x261701.applications] : _0x261701.applications);
      _0x3150c1(_0x261701.cursors.next);
    } catch (_0x3aa283) {} finally {
      _0x564cd5(false);
      _0x79e991(false);
    }
  }, [_0x7adf92, _0x8618c1]);
  _0x53d548.useEffect(() => {
    if (_0x23dfc8 && !_0x5576c0) {
      _0x4c3d64(true);
      _0x179866();
    }
  }, [_0x23dfc8, _0x5576c0]);
  _0x53d548.useEffect(() => {
    if (_0x23dfc8 && _0x5576c0) {
      _0x179866();
    }
  }, [_0x7adf92]);
  _0x53d548.useEffect(() => {
    if (!_0x23dfc8 || !_0x5576c0) {
      return;
    }
    if (_0xf99019) {
      clearTimeout(_0xf99019);
    }
    const _0x1b2138 = setTimeout(() => _0x179866(), 300);
    _0x17e479(_0x1b2138);
    return () => {
      if (_0x1b2138) {
        clearTimeout(_0x1b2138);
      }
    };
  }, [_0x8618c1]);
  const _0x2ff4a8 = () => {
    if (_0x315678 && !_0x1b205f) {
      _0x179866(_0x315678, true);
    }
  };
  const _0x1d4e7d = _0x4eb6ef => _0x45b1c1("/app/store/" + _0x4eb6ef);
  const _0x1021ea = _0x219906[0];
  const _0x3dfcbe = _0x219906.slice(1, 5);
  const _0xb62345 = _0x219906.slice(0, 10);
  const _0x37fe84 = _0x219906.slice(2, 5);
  const _0x2f7bc4 = [..._0x219906].reverse().slice(0, 4);
  const _0x593e6c = _0x8618c1.trim().length > 0 || _0x7adf92 !== "all";
  return <div className="w-full h-full flex flex-col overflow-hidden bg-surface-raised/70"><div className={"flex-1 overflow-y-auto overflow-x-hidden scrollbar-thin min-h-0 " + (_0x4e3089 ? _0x184de3 ? "pb-52" : "pb-28" : "")}><div className="relative shrink-0 w-full pb-12 pt-28 bg-black/40"><div className="absolute top-2 left-0 right-0 z-10 w-full px-4"><div className="max-w-6xl mx-auto"><P selectedCategory={_0x7adf92} onCategorySelect={_0x63f63c} searchExpanded={_0x536694} onSearchExpandChange={_0x25784e} searchQuery={_0x8618c1} onSearchChange={_0x443425} /></div></div><div className="px-4 max-w-6xl mx-auto"><K /></div></div><div className="max-w-6xl mx-auto px-4 py-6 space-y-6">{_0x597fa7 ? <div className="flex items-center justify-center py-20"><_Component2 className="size-8 animate-spin text-accent-primary" /></div> : _0x593e6c ? <section><h2 className="text-base font-semibold text-text-secondary mb-4">{_0x8618c1 ? _0x7d2193("store.resultsFor", {
              query: _0x8618c1
            }) : _0x7d2193(E.find(_0x251a02 => _0x251a02.id === _0x7adf92)?.labelKey || "store.categories.all")}</h2>{_0x219906.length > 0 ? <_0x42b80a.Fragment><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">{_0x219906.map(_0x2849a5 => <M app={_0x2849a5} onClick={() => _0x1d4e7d(_0x2849a5.id)} key={_0x2849a5.id} />)}</div>{_0x315678 && <div className="flex justify-center mt-6"><_0x5ec30c variant="outline" onClick={_0x2ff4a8} disabled={_0x1b205f} className="min-w-[150px] rounded-full">{_0x1b205f ? <_0x42b80a.Fragment><_Component2 className="size-4 mr-2 animate-spin" />{_0x7d2193("store.loading")}</_0x42b80a.Fragment> : _0x7d2193("store.loadMore")}</_0x5ec30c></div>}</_0x42b80a.Fragment> : <div className="text-center py-12"><_0x4e2ff6 icon="solar:bot-bold-duotone" className="size-12 text-text-muted mx-auto mb-3" /><p className="text-text-tertiary">{_0x7d2193("store.noResults")}</p></div>}</section> : _0x219906.length === 0 ? <div className="text-center py-20"><_0x4e2ff6 icon="solar:bot-bold-duotone" className="size-16 text-text-muted mx-auto mb-4" /><h3 className="text-lg font-semibold text-text-primary mb-2">{_0x7d2193("store.emptyTitle")}</h3><p className="text-text-tertiary">{_0x7d2193("store.emptyDesc")}</p></div> : <div className="space-y-8">{_0x1021ea && <I app={_0x1021ea} />}{_0x3dfcbe.length > 0 && <L title={_0x7d2193("store.featured")} icon={_} iconColor="text-accent-primary-text" apps={_0x3dfcbe} />}{_0xb62345.length >= 5 && <O apps={_0xb62345} onAppClick={_0x1d4e7d} />}<B apps={_0x37fe84} onAppClick={_0x1d4e7d} />{_0x2f7bc4.length > 0 && <section><div className="flex items-center justify-between mb-3"><h2 className="text-base font-semibold text-text-secondary flex items-center gap-2"><_0x4e2ff6 icon="solar:clock-circle-bold-duotone" className="size-4 text-blue-400" />{_0x7d2193("store.newlyAdded")}</h2></div><div className="grid grid-cols-2 sm:grid-cols-4 gap-3">{_0x2f7bc4.map(_0x255f6f => <M app={_0x255f6f} onClick={() => _0x1d4e7d(_0x255f6f.id)} key={_0x255f6f.id} />)}</div></section>}{_0x219906.length > 0 && <section><h2 className="text-base font-semibold text-text-secondary mb-4 flex items-center gap-2"><_0x4e2ff6 icon="solar:bot-bold-duotone" className="size-4 text-text-tertiary" />{_0x7d2193("store.allApps")}</h2><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">{_0x219906.map(_0x3365ea => <M app={_0x3365ea} onClick={() => _0x1d4e7d(_0x3365ea.id)} key={_0x3365ea.id} />)}</div>{_0x315678 && <div className="flex justify-center mt-6"><_0x5ec30c variant="outline" onClick={_0x2ff4a8} disabled={_0x1b205f} className="min-w-[150px] rounded-full">{_0x1b205f ? <_0x42b80a.Fragment><_Component2 className="size-4 mr-2 animate-spin" />{_0x7d2193("store.loading")}</_0x42b80a.Fragment> : _0x7d2193("store.loadMore")}</_0x5ec30c></div>}</section>}</div>}</div></div></div>;
});
const U = _0x53d548.memo(function ({
  storeAppId: _0x23bfd6
}) {
  const _0x197c68 = _0x51ade7 => _0x23bfd6 ? <_0x53d548.Suspense fallback={<div className="flex-1 flex items-center justify-center"><div className="size-8 border-2 border-accent-primary border-t-transparent rounded-full animate-spin" /></div>}><C /></_0x53d548.Suspense> : <D isVertical={_0x51ade7} />;
  if (_0x3d3c0f() === "vertical") {
    return <div className="h-full w-full text-text-primary overflow-hidden flex"><_0x244ad9 renderMode="vertical-only" /><div className="flex-1 min-w-0 h-full relative bg-surface-raised/95 backdrop-blur-sm rounded-tl-xl border-l border-t border-border-strong/60 overflow-hidden"><div className="h-full w-full flex flex-col">{_0x197c68(true)}</div><div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 w-[400px]"><_0x64c5d5 floating={true} /></div></div></div>;
  } else {
    return <div className="h-full w-full text-text-primary overflow-hidden bg-surface-raised/95 backdrop-blur-sm"><div className="h-full w-full flex flex-col">{_0x197c68(false)}</div></div>;
  }
});
export { U as default };