import { t as _0x1bf8b7, aU as _0x58be0f, aZ as _0x25247a, r as _0x3d3e72, P as _0x3c5b78, b as _0x592aca, j as _0x4f49a3, s as _0x4480cf, I as _0x3ef2b2, b2 as _0x24b86e, a_ as _0x2241c0, aj as _0x574739, X as _0xc4cdd9, B as _0x3c3314, _ as _0x362580, an as _0xdc45e3 } from "./index-cQfEKR1W.js";
import { D as _0x50b113, a as _0x462229, c as _0x4a0d70 } from "./dialog-BMMpM7PR.js";
import { syncTitleBarOverlay as _0x3a6dd8 } from "./useTheme-CzNZmxfV.js";
import { A as _0x40e1c1, a as _0x17c1f1, b as _0x32761d } from "./avatar-C-4BWxT3.js";
import { T as _0x5d9738 } from "./trophy-D1hvddoK.js";
import { y as _0x122946 } from "./AppLayout-BEBJqe9_.js";
import { L as _0x27fbec } from "./loader-circle-CTtxa1g9.js";
import { P as _0x3a4529 } from "./plus-B7c2Px8R.js";
import "./index-yuEHo9bu.js";
import "./soundboardFx-C2LP-Hjs.js";
import "./index-BUijt7wr.js";
import "./tr-D975n4_R.js";
import "./select-DQjjzSZW.js";
import "./index-Oyyh46KT.js";
import "./arrow-left-B3FhifN2.js";
import "./arrow-right-DvlsXLCB.js";
import "./switch-lfnbGePn.js";
import "./drawer-X7YyCqpZ.js";
import "./input-AMyERYwJ.js";
import "./subscription-Cl5JAGbQ.js";
import "./ComparisonTable-DUfwtDVZ.js";
import "./card-Bk6R3tFg.js";
import "./gift-Co-azAyt.js";
import "./CheckoutPlaceholder-Dr0TfmeQ.js";
import "./IyzicoCheckoutFrame-f1WDW5o8.js";
import "./zap-B3VH4qT9.js";
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
import "./index.module-CsHioFCV.js"; /**
                                     * @license lucide-react v0.535.0 - ISC
                                     *
                                     * This source code is licensed under the ISC license.
                                     * See the LICENSE file in the root directory of this source tree.
                                     */
const C = _0x1bf8b7("flame", [["path", {
  d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
  key: "96xj49"
}]]);
function F() {
  const {
    userFuel: _0x4e274b,
    userFuelLoading: _0x3a9f25,
    userFuelError: _0x3bab04,
    fetchUserFuel: _0x23b568
  } = _0x58be0f();
  _0x25247a("fuel_renewal_failed", _0x3d3e72.useCallback((_0x428b37, _0x280757) => {
    const _0x27ca26 = _0x280757;
    _0x58be0f.getState().handleRenewalFailed(_0x27ca26);
    _0x3c5b78.warning("Fuel yenilenemedi: " + _0x27ca26.guild_id, {
      description: "3 gün içinde envanterinizi doldurun, aksi halde fuel düşecek."
    });
  }, []));
  _0x25247a("fuel_renewal_success", _0x3d3e72.useCallback((_0x27e127, _0x309985) => {
    const _0xebf79c = _0x309985;
    _0x58be0f.getState().handleRenewalSuccess(_0xebf79c);
  }, []));
  return {
    userFuel: _0x4e274b,
    isLoading: _0x3a9f25,
    error: _0x3bab04,
    refetch: _0x23b568
  };
}
function L(_0x1760d9) {
  const {
    guildFuelStatus: _0xba4140,
    guildFuelLoading: _0xe536f0,
    guildFuelError: _0xdb42a7,
    guildBoosters: _0x4e6cb2,
    guildBoostersLoading: _0x15c98,
    placingFuel: _0x8b32a4,
    fetchGuildFuelStatus: _0x2530ec,
    fetchGuildBoosters: _0x4014d8,
    placeFuel: _0x48c214,
    getPlacementsForGuild: _0x1e3d94
  } = _0x58be0f();
  const _0x333483 = _0xba4140[_0x1760d9] ?? null;
  const _0x1d370a = _0xe536f0[_0x1760d9] ?? false;
  const _0x516731 = _0xdb42a7[_0x1760d9] ?? null;
  const _0x716260 = _0x4e6cb2[_0x1760d9] ?? [];
  const _0x175152 = _0x15c98[_0x1760d9] ?? false;
  const _0x358178 = _0x1e3d94(_0x1760d9);
  _0x25247a("guild_fuel_update", _0x3d3e72.useCallback((_0x3905a4, _0x5444ca) => {
    const _0x948ea7 = _0x5444ca;
    if (_0x948ea7.guild_id === _0x1760d9) {
      _0x58be0f.getState().handleGuildFuelUpdate(_0x948ea7);
    }
  }, [_0x1760d9]));
  _0x25247a("guild_boost_tier_change", _0x3d3e72.useCallback((_0x512c44, _0x497b44) => {
    const _0x5e7314 = _0x497b44;
    if (_0x5e7314.guild_id === _0x1760d9) {
      _0x58be0f.getState().handleBoostTierChange(_0x5e7314);
    }
  }, [_0x1760d9]));
  _0x25247a("guild_level_up", _0x3d3e72.useCallback((_0x25b1f7, _0x5c57e1) => {
    const _0x39a85c = _0x5c57e1;
    if (_0x39a85c.guild_id === _0x1760d9) {
      _0x58be0f.getState().handleGuildLevelUp(_0x39a85c);
    }
  }, [_0x1760d9]));
  return {
    status: _0x333483,
    isLoading: _0x1d370a,
    error: _0x516731,
    boosters: _0x716260,
    boostersLoading: _0x175152,
    myPlacements: _0x358178,
    placingFuel: _0x8b32a4,
    placeFuel: _0x3d3e72.useCallback(async _0x3bf2e6 => _0x48c214(_0x1760d9, _0x3bf2e6), [_0x1760d9, _0x48c214]),
    refetchStatus: () => _0x2530ec(_0x1760d9),
    refetchBoosters: () => _0x4014d8(_0x1760d9)
  };
}
const S = ["bg-amber-500/10 border-amber-500/20 text-amber-400", "bg-slate-400/10 border-slate-400/20 text-slate-400", "bg-orange-600/10 border-orange-600/20 text-orange-500"];
function M({
  boosters: _0x34bcc0,
  isLoading: _0x1a2e2a,
  className: _0xd46aad
}) {
  const {
    t: _0x593e07
  } = _0x592aca();
  if (_0x1a2e2a) {
    return <div className={_0x4480cf("space-y-2", _0xd46aad)}>{[...Array(3)].map((_0x65f251, _0x32bb34) => <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-surface-inset/20 animate-pulse" key={_0x32bb34}><div className="size-8 rounded-full bg-surface-inset/60" /><div className="flex-1 space-y-1.5"><div className="h-3 w-24 rounded bg-surface-inset/60" /><div className="h-2.5 w-16 rounded bg-surface-inset/40" /></div><div className="h-4 w-10 rounded bg-surface-inset/40" /></div>)}</div>;
  } else if (_0x34bcc0.length === 0) {
    return <div className={_0x4480cf("flex flex-col items-center justify-center py-8 text-center", _0xd46aad)}><div className="size-12 rounded-full bg-surface-inset/30 flex items-center justify-center mb-3"><C className="size-5 text-text-muted" /></div><p className="text-sm text-text-muted">{_0x593e07("fuel.noBoosters")}</p><p className="text-xs text-text-muted/70 mt-0.5">{_0x593e07("fuel.beFirstBooster")}</p></div>;
  } else {
    return <div className={_0x4480cf("space-y-1.5", _0xd46aad)}>{_0x34bcc0.map((_0x10636f, _0x204c48) => {
        const _0x3bbebf = _0x10636f.display_name || _0x10636f.username || "Kullanıcı #" + _0x10636f.user_id;
        const _0x1c294b = _0x3bbebf.charAt(0).toUpperCase();
        return <div className={_0x4480cf("flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors", "hover:bg-surface-inset/20", _0x204c48 < 3 && "bg-surface-inset/10")} key={_0x10636f.user_id}><div className={_0x4480cf("flex items-center justify-center size-7 rounded-lg border text-xs font-bold shrink-0", _0x204c48 < 3 ? S[_0x204c48] : "bg-surface-inset/20 border-border-subtle text-text-muted")}>{_0x204c48 < 3 ? <_0x5d9738 className="size-3.5" /> : <span>{_0x204c48 + 1}</span>}</div><_0x40e1c1 className="size-8 shrink-0">{_0x10636f.avatar_url ? <_0x17c1f1 src={_0x10636f.avatar_url} alt={_0x3bbebf} /> : null}<_0x32761d className="text-[11px] font-semibold bg-surface-inset/40 text-text-secondary">{_0x1c294b}</_0x32761d></_0x40e1c1><div className="flex-1 min-w-0"><p className="text-sm font-medium text-text-primary truncate">{_0x3bbebf}</p>{_0x10636f.username && <p className="text-xs text-text-muted truncate">@{_0x10636f.username}</p>}</div><div className="text-right shrink-0"><p className="text-sm font-bold text-text-primary tabular-nums">{_0x10636f.active_fuel}</p><p className="text-[10px] text-text-muted">{_0x593e07("fuel.fuelUnit")}</p></div></div>;
      })}</div>;
  }
}
function P({
  open: _0x170c38,
  onOpenChange: _0xd2a393,
  userFuel: _0x4999f1,
  guildName: _0x4261ff,
  onPlace: _0x441cb2,
  isPlacing: _0x8bec2 = false
}) {
  const {
    t: _0x324fcf
  } = _0x592aca();
  const [_0x8dfeb0, _0x58ce9f] = _0x3d3e72.useState(1);
  const [_0x44013f, _0x27d05d] = _0x3d3e72.useState(false);
  const [_0x133752, _0x5b5218] = _0x3d3e72.useState(false);
  const _0x55acee = _0x4999f1?.total_placeable ?? 0;
  const _0x41a537 = _0x8dfeb0 > 0 && _0x8dfeb0 <= _0x55acee && !_0x8bec2;
  const _0x204246 = _0x3d3e72.useCallback(async () => {
    if (_0x41a537) {
      try {
        await _0x441cb2(_0x8dfeb0);
        _0xd2a393(false);
        _0x58ce9f(1);
        _0x27d05d(false);
        _0x5b5218(false);
      } catch {}
    }
  }, [_0x8dfeb0, _0x41a537, _0x441cb2, _0xd2a393]);
  return <_0x50b113 open={_0x170c38} onOpenChange={_0xd2a393}><_0x462229 className="p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-[380px] overflow-hidden" showCloseButton={false} aria-describedby={undefined}><_0x4a0d70 className="sr-only">{_0x324fcf("fuel.placeModal.title")}</_0x4a0d70><div className="rounded-2xl overflow-hidden bg-surface-base border border-border-default shadow-2xl"><div className="relative overflow-hidden px-6 pt-7 pb-5 bg-gradient-to-b from-accent-subtle/30 to-surface-base"><div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 rounded-full bg-accent-primary/10 blur-[60px]" /><div className="relative flex flex-col items-center"><div className="flex items-center justify-center size-14 rounded-2xl bg-accent-primary/10 shadow-[0_0_24px_-6px] shadow-accent-primary/20 mb-3"><_0x3ef2b2 icon="solar:gas-station-bold-duotone" className="size-7 text-accent-primary" /></div><h2 className="text-lg font-bold text-text-primary">{_0x324fcf("fuel.placeModal.title")}</h2><p className="text-xs text-text-muted mt-1">{_0x4261ff ? _0x324fcf("fuel.placeModal.description", {
                guild: _0x4261ff
              }) : _0x324fcf("fuel.placeModal.descriptionGeneric")}</p></div></div><div className="px-5 pb-5 space-y-4"><div className="text-center py-2"><span className="text-4xl font-black text-text-primary tabular-nums">{_0x8dfeb0}</span><span className="text-lg text-text-muted ml-2">{_0x324fcf("fuel.fuelUnit")}</span></div><_0x122946 value={[_0x8dfeb0]} onValueChange={([_0x12a999]) => {
            _0x58ce9f(_0x12a999);
            _0x27d05d(false);
          }} min={1} max={Math.max(1, _0x55acee)} step={1} disabled={_0x55acee === 0} trackClassName="h-2.5 bg-surface-inset/60 rounded-full" rangeClassName="bg-accent-primary rounded-full" thumbClassName="size-5 border-2 border-accent-primary bg-surface-raised shadow-md" /><div className="grid grid-cols-5 gap-1.5">{[1, 5, 10, _0x55acee].filter((_0x20512e, _0x3bca4d, _0x5808f5) => _0x20512e > 0 && _0x5808f5.indexOf(_0x20512e) === _0x3bca4d).map(_0x42ee02 => <button onClick={() => {
              _0x58ce9f(Math.min(_0x42ee02, _0x55acee));
              _0x27d05d(false);
            }} className={_0x4480cf("py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer tabular-nums text-center", _0x8dfeb0 !== _0x42ee02 || _0x44013f ? "bg-surface-inset/20 text-text-muted hover:text-text-secondary hover:bg-surface-inset/40 border border-transparent" : "bg-accent-primary/10 text-accent-primary-text border border-accent-border/50")} key={_0x42ee02}>{_0x42ee02 === _0x55acee ? "MAX" : _0x42ee02}</button>)}<div className={_0x4480cf("rounded-lg border overflow-hidden", _0x44013f ? "border-accent-border/50 bg-accent-primary/10" : "border-transparent bg-surface-inset/20")}>{_0x44013f ? <input type="number" min={1} max={_0x55acee} value={_0x8dfeb0 || ""} onChange={_0x32f845 => {
                const _0xb8c00a = _0x32f845.target.value;
                _0x58ce9f(_0xb8c00a !== "" ? Math.min(_0x55acee, Number(_0xb8c00a)) : 0);
              }} onBlur={() => {
                if (_0x8dfeb0 < 1) {
                  _0x58ce9f(1);
                }
              }} autoFocus={true} className="w-full h-full py-2 px-1 text-xs font-bold text-center text-accent-primary-text bg-transparent outline-none tabular-nums [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" /> : <button onClick={() => _0x27d05d(true)} className="w-full py-2 text-xs font-bold text-text-muted hover:text-text-secondary cursor-pointer">#</button>}</div></div><p className="text-xs text-text-muted text-center">{_0x324fcf("fuel.placeable", {
              count: _0x55acee
            })}</p><label className="flex items-center gap-3 cursor-pointer group py-1"><div className={_0x4480cf("size-5 rounded-md border-2 flex items-center justify-center transition-all shrink-0", _0x133752 ? "bg-accent-primary border-accent-primary" : "border-border-strong group-hover:border-accent-primary/50")}>{_0x133752 && <svg className="size-3 text-text-on-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}</div><input type="checkbox" checked={_0x133752} onChange={_0x1ae640 => _0x5b5218(_0x1ae640.target.checked)} className="sr-only" /><span className="text-xs text-text-muted">{_0x324fcf("fuel.placeModal.irreversible")}</span></label><button onClick={_0x204246} disabled={!_0x41a537 || !_0x133752} className="w-full flex items-center justify-center gap-2 h-11 rounded-xl bg-accent-primary hover:bg-accent-primary-hover text-text-on-accent font-bold text-sm transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-accent-primary/15">{_0x8bec2 ? <_0x27fbec className="size-4 animate-spin" /> : <_0x4f49a3.Fragment><_0x3ef2b2 icon="solar:gas-station-bold-duotone" className="size-4" />{_0x324fcf("fuel.placeModal.confirm")}</_0x4f49a3.Fragment>}</button></div></div></_0x462229></_0x50b113>;
}
const B = _0x3d3e72.lazy(() => _0x362580(() => import("./FuelPackModal-Yv3-REPv.js"), [], import.meta.url));
const A = {
  0: {
    gradient: "from-slate-900 via-slate-800 to-slate-900",
    accent: "text-slate-400",
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
    glow: ""
  },
  1: {
    gradient: "from-emerald-950 via-emerald-900/80 to-slate-900",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "shadow-[0_0_80px_-20px] shadow-emerald-500/20"
  },
  2: {
    gradient: "from-violet-950 via-purple-900/80 to-slate-900",
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    glow: "shadow-[0_0_80px_-20px] shadow-violet-500/20"
  },
  3: {
    gradient: "from-amber-950 via-orange-900/80 to-slate-900",
    accent: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    glow: "shadow-[0_0_80px_-20px] shadow-amber-500/30"
  }
};
const E = [({
  className: _0xe1ac8d
}) => <_0x3ef2b2 icon="solar:ghost-bold-duotone" className={_0xe1ac8d} />, ({
  className: _0x2c9a03
}) => <_0x3ef2b2 icon="solar:bottle-bold-duotone" className={_0x2c9a03} />, ({
  className: _0x3ec6cf
}) => <_0x3ef2b2 icon="solar:gas-station-bold-duotone" className={_0x3ec6cf} />, ({
  className: _0xad1549
}) => <_0x3ef2b2 icon="solar:rocket-2-bold-duotone" className={_0xad1549} />];
function U(_0x523e89) {
  const _0x4eb486 = new Date(_0x523e89).getTime() - Date.now();
  if (_0x4eb486 <= 0) {
    return "";
  }
  const _0x35f155 = Math.floor(_0x4eb486 / 86400000);
  if (_0x35f155 > 0) {
    return _0x35f155 + "d";
  }
  return Math.floor(_0x4eb486 / 3600000) + "h";
}
function T() {
  const _0x30412e = _0x24b86e(_0x2516e5 => _0x2516e5.isGuildFuelOpen);
  const _0x382a2e = _0x24b86e(_0x3d8912 => _0x3d8912.guildFuelServerId);
  const _0x1ae305 = _0x24b86e(_0x2aecb4 => _0x2aecb4.closeGuildFuel);
  const _0x1344e9 = _0x2241c0(_0x5836a7 => _0x5836a7.servers);
  const [_0x514109, _0x524ea6] = _0x3d3e72.useState(false);
  const [_0x441c44, _0x48a444] = _0x3d3e72.useState(false);
  const [_0x250da8, _0x1d2bd1] = _0x3d3e72.useState(false);
  const [_0x166b38, _0x5edf76] = _0x3d3e72.useState(false);
  const _0x5ca271 = _0x3d3e72.useMemo(() => _0x382a2e ? _0x1344e9.find(_0x375289 => _0x375289.id === _0x382a2e) : undefined, [_0x1344e9, _0x382a2e]);
  const _0x4b3586 = _0x5ca271?.name;
  const _0xa9390c = _0x5ca271?.avatar_url;
  _0x3d3e72.useEffect(() => {
    if (_0x30412e) {
      requestAnimationFrame(() => requestAnimationFrame(() => _0x524ea6(true)));
    } else {
      _0x524ea6(false);
    }
  }, [_0x30412e]);
  _0x3d3e72.useEffect(() => {
    if (!_0x30412e) {
      return;
    }
    const _0xf39e5e = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = _0xf39e5e;
    };
  }, [_0x30412e]);
  _0x3d3e72.useEffect(() => {
    const _0x595df5 = window.electron;
    if (_0x595df5?.setTitleBarOverlay && _0x30412e) {
      _0x595df5.setTitleBarOverlay({
        color: "#00000000",
        symbolColor: "#00000000",
        height: 0
      });
      return () => {
        _0x595df5.setTitleBarOverlay?.({
          height: 32
        });
        const _0x7d9ec8 = document.documentElement.classList.contains("dark") ? "dark" : "light";
        _0x3a6dd8(_0x7d9ec8);
      };
    }
  }, [_0x30412e]);
  const _0x550ad1 = _0x3d3e72.useCallback(() => {
    _0x524ea6(false);
    setTimeout(_0x1ae305, 280);
  }, [_0x1ae305]);
  _0x3d3e72.useEffect(() => {
    if (!_0x30412e) {
      return;
    }
    const _0x1c00af = _0x512d40 => {
      if (_0x512d40.key === "Escape" && !_0x441c44 && !_0x250da8) {
        _0x550ad1();
      }
    };
    window.addEventListener("keydown", _0x1c00af);
    return () => window.removeEventListener("keydown", _0x1c00af);
  }, [_0x30412e, _0x441c44, _0x250da8, _0x550ad1]);
  if (_0x30412e && _0x382a2e) {
    return _0x574739.createPortal(<div className="fixed inset-0 z-60"><div className={_0x4480cf("absolute inset-0 bg-surface-base transition-opacity duration-300", _0x514109 ? "opacity-100" : "opacity-0")} /><div className={_0x4480cf("absolute inset-0 flex flex-col transform-gpu transition-all duration-300 ease-out overflow-hidden", _0x514109 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}><div className="fixed top-4 left-4 md:top-6 md:left-6 z-20"><O guildId={_0x382a2e} /></div><div className="fixed top-4 left-1/2 -translate-x-1/2 md:top-6 z-20"><div className="flex items-center gap-2.5 h-11 pl-2 pr-4 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 select-none">{_0xa9390c ? <img src={_0xa9390c} alt={_0x4b3586 || ""} className="size-7 rounded-full object-cover" /> : <div className="size-7 rounded-full bg-white/10 flex items-center justify-center"><span className="text-[10px] font-bold text-white/70">{(_0x4b3586 || "G").charAt(0).toUpperCase()}</span></div>}<span className="text-sm font-semibold text-white/90">{_0x4b3586 || "Guild"}</span></div></div><div className="fixed top-4 right-4 md:top-6 md:right-6 z-20 flex items-center gap-1"><I onBuyClick={() => _0x1d2bd1(true)} /><button onClick={() => _0x5edf76(!_0x166b38)} className={_0x4480cf("inline-flex size-10 items-center justify-center rounded-full backdrop-blur-sm border transition cursor-pointer", _0x166b38 ? "bg-white/15 border-white/20 text-white" : "bg-black/40 border-white/10 text-white/70 hover:bg-black/60 hover:text-white")}><_0x3ef2b2 icon="solar:users-group-rounded-bold-duotone" className="size-5" /></button><button onClick={_0x550ad1} className="inline-flex size-10 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/70 transition hover:bg-black/60 hover:text-white cursor-pointer"><_0xc4cdd9 className="size-5" /></button></div><V guildId={_0x382a2e} guildName={_0x4b3586} onPlaceClick={() => {
          const _0x4640bf = _0x58be0f.getState().userFuel;
          if (!_0x4640bf || _0x4640bf.total_placeable <= 0) {
            _0x1d2bd1(true);
          } else {
            _0x48a444(true);
          }
        }} /><D open={_0x166b38} guildId={_0x382a2e} onClose={() => _0x5edf76(false)} /></div><G open={_0x441c44} onOpenChange={_0x48a444} guildId={_0x382a2e} guildName={_0x4b3586} /><_0x3d3e72.Suspense fallback={_0x250da8 ? <_0x50b113 open={true} onOpenChange={_0x1d2bd1}><_0x462229 className="p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-[420px] overflow-hidden" showCloseButton={false} aria-describedby={undefined}><_0x4a0d70 className="sr-only">Loading</_0x4a0d70><div className="rounded-2xl overflow-hidden bg-surface-base border border-border-default shadow-2xl"><div className="px-6 pt-8 pb-6 bg-gradient-to-b from-amber-950/80 to-surface-base"><div className="flex flex-col items-center"><div className="size-20 rounded-3xl mb-4 bg-surface-inset/50 animate-pulse" /><div className="h-5 w-32 rounded bg-surface-inset/50 animate-pulse mb-2" /><div className="h-4 w-48 rounded bg-surface-inset/30 animate-pulse" /></div></div><div className="px-5 pb-5 pt-4 space-y-3"><div className="grid grid-cols-3 gap-2">{[1, 2, 3].map(_0x22040e => <div className="h-28 rounded-xl bg-surface-inset/30 animate-pulse" key={_0x22040e} />)}</div><div className="h-16 rounded-xl bg-surface-inset/20 animate-pulse" /><div className="h-12 rounded-xl bg-surface-inset/30 animate-pulse" /></div></div></_0x462229></_0x50b113> : null}>{_0x250da8 && <B open={_0x250da8} onOpenChange={_0x1d2bd1} />}</_0x3d3e72.Suspense></div>, document.body);
  } else {
    return null;
  }
}
function G({
  open: _0x626e1e,
  onOpenChange: _0x901384,
  guildId: _0x58ab13,
  guildName: _0x22eae6
}) {
  const {
    userFuel: _0x23587a
  } = F();
  const {
    placeFuel: _0xe2dd62,
    placingFuel: _0xf20b27
  } = L(_0x58ab13);
  return <P open={_0x626e1e} onOpenChange={_0x901384} userFuel={_0x23587a} guildName={_0x22eae6} onPlace={_0xe2dd62} isPlacing={_0xf20b27} />;
}
const I = _0x3d3e72.memo(function ({
  onBuyClick: _0x3e181d
}) {
  const {
    t: _0x33c7f5
  } = _0x592aca();
  const {
    userFuel: _0x1b6976
  } = F();
  const [_0x20195b, _0x565aaa] = _0x3d3e72.useState(false);
  if (_0x1b6976) {
    return <div className="relative" onMouseEnter={() => _0x565aaa(true)} onMouseLeave={() => _0x565aaa(false)}><div className="flex items-center h-10 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 select-none"><div className="flex items-center gap-2 pl-2.5 pr-2 cursor-default"><_0x3ef2b2 icon="solar:gas-station-bold-duotone" className="size-5 text-amber-400" /><span className="text-sm font-bold text-white tabular-nums">{_0x1b6976.total_placeable}</span></div><div className="w-px h-5 bg-white/10" /><button onClick={_0x3e181d} className="flex items-center justify-center size-9 rounded-full text-accent-primary hover:bg-white/10 transition cursor-pointer"><_0x3a4529 className="size-4" /></button></div>{_0x20195b && <div className="absolute top-full right-0 mt-2 w-56 rounded-xl bg-black/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_12px_32px_-6px_rgba(0,0,0,0.5)] p-3.5 animate-in fade-in-0 zoom-in-95 duration-150 space-y-3"><div className="flex items-center justify-between"><div className="flex items-center gap-1.5"><_0x3ef2b2 icon="solar:gas-station-bold-duotone" className="size-3.5 text-amber-400" /><span className="text-[11px] text-white/50">{_0x33c7f5("fuel.tank", "Depo")}</span></div><span className="text-sm font-bold text-white tabular-nums">{_0x1b6976.total_placeable}</span></div><div className="h-px bg-white/[0.06]" /><div className="space-y-2"><div className="flex items-center justify-between"><div className="flex items-center gap-1.5"><_0x3ef2b2 icon="solar:graph-up-bold-duotone" className="size-3.5 text-emerald-400" /><span className="text-[11px] text-white/50">{_0x33c7f5("fuel.streak")}</span></div><span className="text-sm font-bold text-white tabular-nums">{_0x1b6976.streak.current} <span className="text-[10px] text-white/30 font-normal">{_0x33c7f5("fuel.streakUnit")}</span></span></div><div className="flex items-center gap-1">{[1, 2, 3, 4].map(_0x29dc88 => <div className={"flex-1 h-1.5 rounded-full " + (_0x1b6976.streak.current >= _0x29dc88 ? "bg-emerald-400" : "bg-white/[0.08]")} key={_0x29dc88} />)}</div><div className="flex items-center justify-between"><span className="text-[10px] text-white/30">{_0x33c7f5("fuel.weeklyBonus", "Haftalık bonus")}</span><span className="text-[11px] font-semibold text-emerald-400">+{_0x1b6976.streak.next_bonus} fuel</span></div></div></div>}</div>;
  } else {
    return null;
  }
});
const O = function ({
  guildId: _0x1cfc9c
}) {
  const {
    t: _0x3c2b0a
  } = _0x592aca();
  const {
    status: _0x4afc83
  } = L(_0x1cfc9c);
  const [_0x3eba22, _0x10bd26] = _0x3d3e72.useState(false);
  const [_0x1f2ced, _0x5b27d4] = _0x3d3e72.useState(null);
  const _0x3533c5 = _0x3d3e72.useRef(null);
  const _0x265104 = _0x3d3e72.useRef(null);
  const _0x7d9c8e = _0x3d3e72.useRef(false);
  const _0xce322 = _0x4afc83?.guild_xp ?? 0;
  _0x3d3e72.useEffect(() => {
    if (_0x4afc83) {
      if (!_0x7d9c8e.current) {
        _0x7d9c8e.current = true;
        _0x3533c5.current = _0xce322;
        return;
      }
      if (_0x3533c5.current !== null && _0xce322 > _0x3533c5.current) {
        const _0x57322b = _0xce322 - _0x3533c5.current;
        _0x5b27d4(_0x57322b);
        if (_0x265104.current) {
          clearTimeout(_0x265104.current);
        }
        _0x265104.current = setTimeout(() => _0x5b27d4(null), 2500);
      }
      _0x3533c5.current = _0xce322;
    }
  }, [_0xce322, _0x4afc83]);
  if (!_0x4afc83) {
    return null;
  }
  const _0xd92bfe = _0x4afc83.level_progress;
  if (!_0xd92bfe) {
    return null;
  }
  const _0x2670bd = _0xd92bfe.is_max_level ? 1 : _0xd92bfe.xp_needed_for_next ? _0xd92bfe.xp_in_current_level / (_0xd92bfe.xp_in_current_level + _0xd92bfe.xp_needed_for_next) : 1;
  const _0x59c5a2 = Math.PI * 2 * 15;
  const _0x48e55a = _0x59c5a2 * (1 - _0x2670bd);
  return <div className="relative" onMouseEnter={() => _0x10bd26(true)} onMouseLeave={() => _0x10bd26(false)}><div className="flex items-center gap-2 h-11 pl-1.5 pr-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 cursor-default select-none"><div className="relative size-8 flex items-center justify-center"><svg className="absolute inset-0 -rotate-90" viewBox="0 0 36 36"><circle cx="18" cy="18" r={15} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" /><circle cx="18" cy="18" r={15} fill="none" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" strokeDasharray={_0x59c5a2} strokeDashoffset={_0x48e55a} className="transition-all duration-1000 ease-out" /></svg><span className="text-xs font-black text-white tabular-nums">{_0x4afc83.guild_level}</span></div><span className="text-sm font-semibold text-white/70 tabular-nums">{_0xce322.toLocaleString()} <span className="text-white/40 text-xs">XP</span></span></div>{_0x1f2ced !== null && <div className="absolute -top-1 -right-2 px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold tabular-nums animate-in fade-in-0 zoom-in-75 slide-in-from-bottom-2 duration-300">+{_0x1f2ced} XP</div>}{_0x3eba22 && <div className="absolute top-full left-0 mt-2 rounded-xl bg-black/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_12px_32px_-6px_rgba(0,0,0,0.5)] px-4 py-3 animate-in fade-in-0 zoom-in-95 duration-150"><div className="flex items-center gap-3 whitespace-nowrap"><span className="text-[11px] text-white/50">{_0x3c2b0a("fuel.level")}</span><span className="text-xs font-bold text-violet-400 tabular-nums">{_0x4afc83.guild_level}</span><div className="w-px h-3.5 bg-white/10" /><span className="text-[11px] text-white/50">{_0x3c2b0a("fuel.xp")}</span><span className="text-xs font-bold text-white tabular-nums">{_0xce322.toLocaleString()}{!_0xd92bfe.is_max_level && _0xd92bfe.next_level_xp && <span className="text-white/30"> / {_0xd92bfe.next_level_xp.toLocaleString()}</span>}</span></div></div>}</div>;
};
function D({
  open: _0x46c1d9,
  guildId: _0x5acc4a,
  onClose: _0x1d2d75
}) {
  const {
    t: _0x19f527
  } = _0x592aca();
  const {
    boosters: _0x278c92,
    boostersLoading: _0x18000c,
    myPlacements: _0x4c2c12
  } = L(_0x5acc4a);
  const [_0x46e149, _0x14ef47] = _0x3d3e72.useState("mine");
  const _0x36ef5b = _0x58be0f(_0x54951b => _0x54951b.userFuel);
  const _0x457079 = _0x58be0f(_0x4ce83c => _0x4ce83c.fetchUserFuelPage);
  const [_0x1634d0, _0x2c0146] = _0x3d3e72.useState(false);
  const _0x32c708 = _0x36ef5b?.placements_pagination;
  const _0x4e01ce = !!_0x32c708 && _0x32c708.page < _0x32c708.total_pages;
  if (_0x46c1d9) {
    return <_0x4f49a3.Fragment><div className="fixed inset-0 z-15" onClick={_0x1d2d75} /><div className="fixed top-16 right-4 md:top-18 md:right-6 z-20 w-80 max-h-[65vh] rounded-xl border border-border-default bg-surface-raised shadow-[0_12px_40px_-8px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200"><div className="flex shrink-0 border-b border-border-default"><button onClick={() => _0x14ef47("mine")} className={_0x4480cf("flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs text-center transition-colors cursor-pointer border-b-2", _0x46e149 === "mine" ? "text-text-primary font-medium border-accent-primary" : "text-text-muted border-transparent hover:text-text-secondary")}><_0x3ef2b2 icon="solar:gas-station-bold-duotone" className="size-3.5" />{_0x19f527("fuel.myFuel")}</button><button onClick={() => _0x14ef47("top")} className={_0x4480cf("flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs text-center transition-colors cursor-pointer border-b-2", _0x46e149 === "top" ? "text-text-primary font-medium border-accent-primary" : "text-text-muted border-transparent hover:text-text-secondary")}><_0x3ef2b2 icon="solar:users-group-rounded-bold-duotone" className="size-3.5" />{_0x19f527("fuel.boosters")}</button></div><div className="flex-1 overflow-y-auto p-2 scrollbar-thin">{_0x46e149 === "mine" ? _0x4c2c12.length === 0 ? <div className="flex flex-col items-center justify-center py-8 text-center"><div className="flex size-8 items-center justify-center rounded-lg bg-surface-overlay/70 mb-2"><_0x3ef2b2 icon="solar:gas-station-bold-duotone" className="size-4 text-text-muted" /></div><p className="text-xs text-text-muted">{_0x19f527("fuel.noFuelYet")}</p></div> : <div className="rounded-lg border border-border-default overflow-hidden divide-y divide-border-default">{_0x4c2c12.map(_0x4f8354 => {
              const _0xca0094 = _0x4f8354.source === "subscription" ? "text-emerald-400" : _0x4f8354.source === "purchased" ? "text-violet-400" : "text-amber-400";
              const _0x3d7a86 = _0x4f8354.source === "subscription" ? "bg-emerald-500/10" : _0x4f8354.source === "purchased" ? "bg-violet-500/10" : "bg-amber-500/10";
              return <div className={_0x4480cf("flex items-center gap-2.5 px-3 py-2", _0x4f8354.in_grace && "bg-red-500/5")} key={_0x4f8354.placement_id}><span className={_0x4480cf("flex size-6 shrink-0 items-center justify-center rounded-md", _0x3d7a86)}><_0x3ef2b2 icon="solar:gas-station-bold-duotone" className={_0x4480cf("size-3.5", _0xca0094)} /></span><div className="flex-1 min-w-0"><div className="text-xs font-medium text-text-secondary">{_0x4f8354.amount} {_0x19f527("fuel.fuelUnit")}{_0x4f8354.in_grace && <span className="ml-1 text-[10px] text-red-500">grace</span>}</div><div className="text-[11px] text-text-tertiary">{_0x4f8354.source === "subscription" ? _0x19f527("fuel.nexusSlot") : _0x4f8354.source === "purchased" ? _0x19f527("fuel.inventory") : _0x19f527("fuel.bonus")}{_0x4f8354.next_renewal_at && !_0x4f8354.in_grace && " · " + U(_0x4f8354.next_renewal_at)}{!_0x4f8354.next_renewal_at && !_0x4f8354.in_grace && " Â· âˆ"}</div></div></div>;
            })}{_0x4e01ce && <button onClick={async () => {
              if (_0x32c708 && !_0x1634d0) {
                _0x2c0146(true);
                await _0x457079(_0x32c708.page + 1, _0x32c708.limit);
                _0x2c0146(false);
              }
            }} disabled={_0x1634d0} className="w-full py-2 text-[11px] font-medium text-text-muted hover:text-text-secondary hover:bg-surface-inset/20 transition-colors cursor-pointer disabled:opacity-50">{_0x1634d0 ? <_0x27fbec className="size-3.5 animate-spin mx-auto" /> : _0x19f527("fuel.loadMore", "Daha fazla göster")}</button>}</div> : <div className="rounded-lg border border-border-default overflow-hidden p-2"><M boosters={_0x278c92} isLoading={_0x18000c} /></div>}</div></div></_0x4f49a3.Fragment>;
  } else {
    return null;
  }
}
const $ = [{
  key: "emoji_slots",
  values: ["50", "100", "150", "250"]
}, {
  key: "animated_emoji_slots",
  values: ["50", "100", "150", "250"]
}, {
  key: "upload_limit",
  values: ["25MB", "25MB", "50MB", "100MB"]
}, {
  key: "server_avatar",
  values: [true, true, true, true]
}, {
  key: "custom_banner",
  values: [true, true, true, true]
}, {
  key: "animated_icon",
  values: [false, true, true, true]
}, {
  key: "animated_banner",
  values: [false, false, false, true]
}, {
  key: "vanity_url",
  values: [false, false, false, true]
}, {
  key: "custom_theme",
  values: [false, false, false, true]
}];
const R = ["text-text-muted", "text-emerald-400", "text-violet-400", "text-amber-400"];
const H = _0x3d3e72.memo(function ({
  currentTier: _0x20a21d
}) {
  const {
    t: _0x4225e8
  } = _0x592aca();
  const _0x5636bb = _0x11aecf => {
    if (_0x11aecf !== _0x20a21d) {
      return "";
    }
    switch (_0x11aecf) {
      case 0:
        return "bg-white/[0.04]";
      case 1:
        return "bg-emerald-500/[0.08]";
      case 2:
        return "bg-violet-500/[0.08]";
      case 3:
        return "bg-amber-500/[0.08]";
      default:
        return "";
    }
  };
  return <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0"><div className="min-w-[600px]"><div className="grid grid-cols-[1.8fr_1fr_1fr_1fr_1fr] items-stretch gap-0 min-h-[48px] border-b border-border-default"><div />{[0, 1, 2, 3].map(_0x866d68 => {
          const _0x54c9b6 = E[_0x866d68];
          const _0x398cfe = _0x866d68 === _0x20a21d;
          return <div className="px-1" key={_0x866d68}><div className={_0x4480cf("flex items-center justify-center gap-1.5 h-full rounded-t-lg", _0x5636bb(_0x866d68))}><_0x54c9b6 className={_0x4480cf("size-4", _0x398cfe ? R[_0x866d68] : "text-text-muted/60")} /><span className={_0x4480cf("text-xs font-bold", _0x398cfe ? R[_0x866d68] : "text-text-muted")}>{_0x4225e8("fuel.tierName" + _0x866d68)}</span></div></div>;
        })}</div><div>{$.map((_0x3eb913, _0x550c66) => {
          const _0x26ea74 = _0x550c66 === $.length - 1;
          return <div className={_0x4480cf("grid grid-cols-[1.8fr_1fr_1fr_1fr_1fr] items-stretch gap-0 min-h-[48px]", !_0x26ea74 && "border-b border-border-subtle")} key={_0x3eb913.key}><span className="text-sm text-text-secondary pr-4 flex items-center">{_0x4225e8("fuel.perks." + _0x3eb913.key)}</span>{_0x3eb913.values.map((_0x314103, _0x151173) => {
              const _0x1f8605 = _0x151173 === _0x20a21d;
              return <div className="px-1" key={_0x151173}><div className={_0x4480cf("flex items-center justify-center h-full", _0x5636bb(_0x151173), _0x26ea74 && _0x5636bb(_0x151173) && "rounded-b-lg")}>{_0x314103 === false ? <span className="text-text-muted/30">—</span> : _0x314103 === true ? <_0xdc45e3 className={_0x4480cf("size-4", _0x1f8605 ? "text-accent-primary-text" : "text-emerald-400/70")} /> : <span className={_0x4480cf("text-sm tabular-nums", _0x1f8605 ? "text-text-primary font-semibold" : "text-text-tertiary")}>{_0x314103}</span>}</div></div>;
            })}</div>;
        })}</div></div></div>;
});
const _Component = _0x3d3e72.memo(function ({
  fuelLevel: _0x958275,
  boostTier: _0x2b093f,
  thresholds: _0x4cef65
}) {
  const {
    t: _0x288934
  } = _0x592aca();
  const _0x721891 = _0x4cef65.tier3;
  const _0x5c5721 = _0x958275 > _0x721891;
  const _0x523ee3 = _0x5c5721 ? 0.82 : 1;
  const _0xed335d = _0x5c5721 ? Math.min(100, _0x958275 / (_0x721891 * 1.22) * 100) : Math.min(100, _0x958275 / _0x721891 * 100);
  const _0x5584de = [...(_0x2b093f === 0 ? [{
    tier: 0,
    position: 0,
    fuel: 0,
    icon: E[0],
    color: "slate",
    name: _0x288934("fuel.tierName0")
  }] : []), {
    tier: 1,
    position: _0x4cef65.tier1 / _0x721891 * 100 * _0x523ee3,
    fuel: _0x4cef65.tier1,
    icon: E[1],
    color: "emerald",
    name: _0x288934("fuel.tierName1")
  }, {
    tier: 2,
    position: _0x4cef65.tier2 / _0x721891 * 100 * _0x523ee3,
    fuel: _0x4cef65.tier2,
    icon: E[2],
    color: "violet",
    name: _0x288934("fuel.tierName2")
  }, {
    tier: 3,
    position: _0x4cef65.tier3 / _0x721891 * 100 * _0x523ee3,
    fuel: _0x4cef65.tier3,
    icon: E[3],
    color: "amber",
    name: _0x288934("fuel.tierName3")
  }];
  const _0x491a54 = {
    slate: {
      active: "bg-slate-500 shadow-[0_0_20px_-4px] shadow-slate-400/50",
      passed: "bg-slate-600",
      locked: "bg-slate-600",
      iconActive: "text-white",
      iconPassed: "text-slate-300",
      iconLocked: "text-slate-400",
      labelActive: "text-white",
      labelPassed: "text-slate-400",
      labelLocked: "text-slate-600"
    },
    emerald: {
      active: "bg-emerald-600 shadow-[0_0_20px_-4px] shadow-emerald-400/50",
      passed: "bg-emerald-800",
      locked: "bg-emerald-950",
      iconActive: "text-white",
      iconPassed: "text-emerald-300",
      iconLocked: "text-emerald-700",
      labelActive: "text-emerald-400",
      labelPassed: "text-emerald-500",
      labelLocked: "text-emerald-800"
    },
    violet: {
      active: "bg-violet-600 shadow-[0_0_20px_-4px] shadow-violet-400/50",
      passed: "bg-violet-800",
      locked: "bg-violet-950",
      iconActive: "text-white",
      iconPassed: "text-violet-300",
      iconLocked: "text-violet-700",
      labelActive: "text-violet-400",
      labelPassed: "text-violet-500",
      labelLocked: "text-violet-800"
    },
    amber: {
      active: "bg-amber-600 shadow-[0_0_20px_-4px] shadow-amber-400/50",
      passed: "bg-amber-800",
      locked: "bg-amber-950",
      iconActive: "text-white",
      iconPassed: "text-amber-300",
      iconLocked: "text-amber-700",
      labelActive: "text-amber-400",
      labelPassed: "text-amber-500",
      labelLocked: "text-amber-800"
    }
  }[["slate", "emerald", "violet", "amber"][_0x2b093f] || "slate"];
  return <div className="flex items-center gap-1"><div className="relative flex-1"><div className="relative h-2.5 rounded-full bg-white/[0.06]"><div className={_0x4480cf("absolute -inset-y-1 left-0 rounded-full blur-md opacity-40 animate-[barFill_1s_ease-out_1s_forwards]", _0x2b093f === 0 ? "bg-slate-400" : _0x2b093f === 1 ? "bg-emerald-400" : _0x2b093f === 2 ? "bg-violet-400" : "bg-amber-400")} style={{
          "--bar-width": _0xed335d + "%",
          width: "0%"
        }} /><div className="absolute inset-y-0 left-0 rounded-full overflow-hidden animate-[barFill_1s_ease-out_1s_forwards]" style={{
          "--bar-width": _0xed335d + "%",
          width: "0%"
        }}><div className={_0x4480cf("h-full w-full rounded-full relative", _0x2b093f === 0 ? "bg-gradient-to-r from-slate-500 to-slate-300" : _0x2b093f === 1 ? "bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-300" : _0x2b093f === 2 ? "bg-gradient-to-r from-violet-600 via-violet-400 to-violet-300" : "bg-gradient-to-r from-amber-600 via-amber-400 to-amber-300")}><div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" /></div></div></div>{_0x5c5721 && <div className="absolute top-full right-0 mt-2 flex items-center gap-1"><span className="text-xs font-bold text-white/70 tabular-nums">{_0x958275}</span><span className="text-[10px] text-white/40">{_0x288934("fuel.fuelUnit")}</span></div>}{_0x5584de.map((_0x1cdee4, _0x415655) => {
        const _0x51b7d6 = _0x1cdee4.icon;
        const _0x28103b = _0x2b093f >= _0x1cdee4.tier;
        const _0x57c7a5 = _0x2b093f === _0x1cdee4.tier;
        return <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 animate-[pinPop_0.4s_cubic-bezier(0.34,1.56,0.64,1)_forwards]" style={{
          left: _0x1cdee4.position + "%",
          animationDelay: 0.5 + _0x415655 * 0.12 + "s"
        }} key={_0x1cdee4.tier}><div className={_0x4480cf("relative flex items-center justify-center rounded-full transition-all duration-500", _0x57c7a5 ? "size-12" : _0x28103b ? "size-11" : "size-9", _0x57c7a5 ? _0x491a54.active : _0x28103b ? _0x491a54.passed : _0x491a54.locked, _0x57c7a5 && "ring-4 ring-white/10 scale-110")}><_0x51b7d6 className={_0x4480cf("transition-all", _0x57c7a5 ? _0x4480cf("size-5", _0x491a54.iconActive) : _0x28103b ? _0x4480cf("size-5", _0x491a54.iconPassed) : _0x4480cf("size-4", _0x491a54.iconLocked))} /></div><div className="absolute top-full mt-3 flex flex-col items-center"><p className={_0x4480cf("text-[11px] font-bold whitespace-nowrap", _0x57c7a5 ? "text-white" : _0x28103b ? "text-white/60" : "text-white/40")}>{_0x1cdee4.name}</p><p className={_0x4480cf("text-[10px] tabular-nums mt-0.5 whitespace-nowrap", _0x28103b ? "text-white/40" : "text-white/20")}>{_0x1cdee4.fuel} {_0x288934("fuel.fuelUnit")}</p></div></div>;
      })}</div>{_0x5c5721 && <_0x3ef2b2 icon="solar:rewind-forward-bold-duotone" className="size-5 shrink-0 text-amber-400" />}</div>;
});
function V({
  guildId: _0x54a60e,
  guildName: _0x48a1f4,
  onPlaceClick: _0x1af324
}) {
  const {
    t: _0x51d83f
  } = _0x592aca();
  const {
    status: _0x43802c
  } = L(_0x54a60e);
  const {
    userFuel: _0x2d268c
  } = F();
  const _0x3bd4cc = _0x3d3e72.useRef(false);
  _0x3d3e72.useEffect(() => {
    if (_0x3bd4cc.current) {
      return;
    }
    _0x3bd4cc.current = true;
    const _0x3e700c = _0x58be0f.getState();
    _0x3e700c.fetchGuildFuelStatus(_0x54a60e);
    _0x3e700c.fetchGuildBoosters(_0x54a60e);
    _0x3e700c.fetchUserFuel();
  }, [_0x54a60e]);
  if (!_0x43802c) {
    return <div className="flex-1 flex items-center justify-center bg-surface-base"><div className="flex flex-col items-center gap-3"><div className="size-10 border-[3px] border-border-default border-t-accent-primary rounded-full animate-spin" /><p className="text-sm text-text-muted">{_0x51d83f("common.loading")}...</p></div></div>;
  }
  const _0x3e7319 = _0x43802c.boost_tier;
  const _0x5d99db = A[_0x3e7319];
  return <div className="flex-1 overflow-y-auto scrollbar-none"><div className={_0x4480cf("relative overflow-hidden bg-gradient-to-b", _0x5d99db.gradient)}><div className="pointer-events-none absolute inset-0"><div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-white/[0.015] blur-[150px]" /><div className="absolute top-[20%] right-[5%] size-96 rounded-full bg-white/[0.01] blur-[100px]" /><div className="absolute top-[30%] left-[5%] size-72 rounded-full bg-white/[0.01] blur-[80px]" /><div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface-base to-transparent" /><div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:40px_40px]" /><_0x3ef2b2 icon="solar:gas-station-bold-duotone" className="absolute top-[8%] left-[8%] size-48 text-white/[0.06] rotate-[-15deg]" /><_0x3ef2b2 icon="solar:gas-station-bold-duotone" className="absolute top-[15%] right-[12%] size-36 text-white/[0.05] rotate-[20deg]" /><_0x3ef2b2 icon="solar:rocket-2-bold-duotone" className="absolute bottom-[20%] left-[15%] size-40 text-white/[0.04] rotate-[10deg]" /></div><div className="relative max-w-5xl mx-auto px-8 md:px-12 pt-20 pb-20 md:pt-28 md:pb-28"><div className="text-center mb-14 md:mb-16 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.1s_forwards]"><h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none mb-4">{_0x51d83f("fuel.heroHeadline")}<br /><span className={_0x4480cf("bg-clip-text text-transparent", _0x3e7319 === 0 ? "bg-gradient-to-r from-white via-slate-200 to-white" : _0x3e7319 === 1 ? "bg-gradient-to-r from-emerald-300 via-emerald-100 to-emerald-300" : _0x3e7319 === 2 ? "bg-gradient-to-r from-violet-300 via-violet-100 to-violet-300" : "bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-300")}>{_0x51d83f("fuel.heroHeadlineAccent")}</span></h1><p className="text-base md:text-lg text-white/50 max-w-lg mx-auto leading-relaxed">{_0x51d83f("fuel.heroDescription")}</p></div><div className="mb-16 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.3s_forwards]"><_Component fuelLevel={_0x43802c.fuel_level} boostTier={_0x3e7319} thresholds={_0x43802c.tier_thresholds} /></div><div className="flex flex-col items-center gap-4 opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.5s_forwards]"><_0x3c3314 size="lg" className={_0x4480cf("font-bold text-base px-10 py-6 rounded-2xl shadow-2xl transition-all", _0x3e7319 === 0 ? "bg-white text-slate-900 hover:bg-white/90 shadow-white/10" : _0x3e7319 === 1 ? "bg-emerald-500 text-white hover:bg-emerald-400 shadow-emerald-500/30" : _0x3e7319 === 2 ? "bg-violet-500 text-white hover:bg-violet-400 shadow-violet-500/30" : "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-400 hover:to-orange-400 shadow-amber-500/30")} onClick={_0x1af324}><_0x3ef2b2 icon="solar:gas-station-bold-duotone" className="size-5" />{_0x51d83f("fuel.placeButton")}</_0x3c3314><p className="text-sm text-white/40">{_0x51d83f("fuel.fuelActive", {
              count: _0x43802c.fuel_level
            })}{_0x2d268c && <span className="text-white/30"> · {_0x51d83f("fuel.placeable", {
                count: _0x2d268c.total_placeable
              })}</span>}</p></div></div></div><div className="max-w-5xl mx-auto px-8 md:px-12 py-10 space-y-10"><section className="opacity-0 animate-[fadeSlideUp_0.6s_ease-out_0.7s_forwards]"><div className="flex items-center gap-3 mb-6"><div className={_0x4480cf("size-8 rounded-lg flex items-center justify-center", _0x5d99db.bg, _0x5d99db.border, "border")}><_0x3ef2b2 icon="solar:medal-ribbons-star-bold-duotone" className={_0x4480cf("size-4", _0x5d99db.accent)} /></div><h2 className="text-xl font-bold text-text-primary">{_0x51d83f("fuel.comparison")}</h2></div><H currentTier={_0x3e7319} /></section></div></div>;
}
export { T as default };