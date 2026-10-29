import { aG as _0x1d8469, b as _0x228089, f as _0x58ffa3, aP as _0x8accaa, c5 as _0x5bfe81, a_ as _0x519474, b1 as _0x421f24, b9 as _0x44950e, r as _0x1bb6be, j as _0x1f8423, I as _0x5a3c7a, L as _0x56fbc4 } from "./index-cQfEKR1W.js";
import { L as _0x2f2c02 } from "./LiveFeed-CUXYXohQ.js";
import { u as _0x133cd4 } from "./useChannels-DWXrCtmH.js";
import { A as _0x15976d, a as _0x5e3bf1, b as _0x599fde } from "./avatar-C-4BWxT3.js";
import { P as _0x332467 } from "./StreamPreviewImage-Cmfxenlr.js";
import { a9 as _0x3ca984 } from "./AppLayout-BEBJqe9_.js";
import "./ApplicationFormDialog-Cf1dddtl.js";
import "./dialog-BMMpM7PR.js";
import "./index-yuEHo9bu.js";
import "./loader-circle-CTtxa1g9.js";
import "./chevron-left-CoNyL-61.js";
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
import "./ConfirmDialog-B4gIndKy.js";
import "./alert-dialog-BZuoGg7O.js";
import "./user-DSjlY8FD.js";
import "./refresh-cw-C3NlhmpS.js";
import "./trash-2-DuFcDcAU.js";
import "./clipboard-BQ9qambq.js";
import "./label-ODyS97Ju.js";
import "./video-AtsAgCNJ.js";
import "./plus-B7c2Px8R.js";
import "./channelNotificationStore-FXjXBmS_.js";
import "./index.module-CsHioFCV.js";
function g(_0x5b027f, _0x1e4ba8, _0x5673c0, _0x4cc5f4) {
  const _0x368438 = new Set(_0x5b027f.filter(_0x290114 => !_0x290114.is_blocked_by_me && !_0x290114.is_blocking_me && !["offline", "invisible"].includes(_0x4cc5f4[String(_0x290114.id)]?.state ?? _0x290114.presence_status ?? "online")).map(_0x2b4675 => _0x2b4675.id));
  return _0x5673c0.filter(_0x1cfe35 => _0x1e4ba8.get(_0x1cfe35.id)?.some(_0x2a7d7f => _0x368438.has(_0x2a7d7f.user_id) && !_0x2a7d7f.is_bot)).map(_0x1190a7 => _0x1190a7.id);
}
function _Component({
  id: _0x4bddd6
}) {
  _0x133cd4(_0x4bddd6);
  return null;
}
function N({
  guildId: _0x334626,
  channelId: _0x2e4711,
  userId: _0x1af251
}) {
  const _0x5239ef = _0x1bb6be.useRef(null);
  const [_0x406138, _0x3cf598] = _0x1bb6be.useState(false);
  _0x1bb6be.useEffect(() => {
    const _0x538f59 = new IntersectionObserver(([_0x3a7ab2]) => _0x3cf598(_0x3a7ab2.isIntersecting));
    if (_0x5239ef.current) {
      _0x538f59.observe(_0x5239ef.current);
    }
    return () => _0x538f59.disconnect();
  }, []);
  return <div ref={_0x5239ef} className="mt-3 aspect-video overflow-hidden rounded-md bg-surface-inset">{_0x406138 && <_0x332467 guildId={_0x334626} channelId={_0x2e4711} userId={_0x1af251} refreshInterval={15000} />}</div>;
}
function _() {
  const {
    t: _0x2fd80f
  } = _0x228089();
  const _0x1a707b = _0x58ffa3(_0x47f5d0 => _0x47f5d0.user?.id);
  const _0x386549 = _0x8accaa(_0xc5e2ca => _0xc5e2ca.friends);
  const _0x697da8 = _0x8accaa(_0x279260 => _0x279260.isLoaded);
  const _0x4e6b72 = _0x5bfe81(_0x1d3cae => _0x1d3cae.voiceStates);
  const _0x533f11 = _0x519474(_0x187387 => _0x187387.servers);
  const _0x3f06e = _0x421f24(_0x5b2da6 => _0x5b2da6.guildChannels);
  const _0x4e4915 = _0x421f24(_0x12137c => _0x12137c.loadingGuilds);
  const _0x5ecbf8 = _0x44950e(_0x24cd71 => _0x24cd71.presenceMap);
  const _0x4f27f9 = _0x1bb6be.useMemo(() => _0x697da8 && _0x1a707b ? g(_0x386549, _0x4e6b72, _0x533f11, _0x5ecbf8) : [], [_0x697da8, _0x1a707b, _0x386549, _0x4e6b72, _0x533f11, _0x5ecbf8]);
  const _0x2dda06 = _0x1bb6be.useMemo(() => _0x697da8 && _0x1a707b ? function (_0x485869, _0x30b8e3, _0x355288, _0x250427, _0x34c9b8) {
    const _0x18e295 = new Map();
    const _0x124850 = new Map(_0x485869.map(_0x126340 => [_0x126340.id, _0x126340]));
    for (const _0x491615 of g(_0x485869, _0x30b8e3, _0x355288, _0x34c9b8)) {
      const _0x859ad6 = _0x355288.find(_0xd4dae0 => _0xd4dae0.id === _0x491615);
      const _0x218cf5 = _0x30b8e3.get(_0x491615) ?? [];
      for (const _0x642e9f of _0x218cf5) {
        const _0x11feb3 = _0x124850.get(_0x642e9f.user_id);
        if (!_0x11feb3 || _0x642e9f.is_bot || _0x11feb3.is_blocked_by_me || _0x11feb3.is_blocking_me || ["offline", "invisible"].includes(_0x34c9b8[String(_0x11feb3.id)]?.state ?? _0x11feb3.presence_status ?? "online")) {
          continue;
        }
        const _0x43f98c = _0x250427.get(_0x491615)?.channels.find(_0x28ad2a => _0x28ad2a.id === _0x642e9f.channel_id);
        if (!_0x43f98c || _0x43f98c.effective_permissions !== undefined && !_0x859ad6.is_owner && !_0x3ca984(_0x43f98c.effective_permissions, _0x1d8469.VIEW_CHANNEL)) {
          continue;
        }
        if (_0x43f98c.is_private && _0x43f98c.effective_permissions === undefined && !_0x859ad6.is_owner) {
          continue;
        }
        const _0x2ebaea = _0x18e295.get(_0x11feb3.id);
        if (_0x2ebaea && (_0x2ebaea.voice.joined_at ?? 0) >= (_0x642e9f.joined_at ?? 0)) {
          continue;
        }
        const _0x395d7d = new Set(_0x218cf5.filter(_0x2292f7 => _0x2292f7.channel_id === _0x642e9f.channel_id && !_0x2292f7.is_bot && _0x2292f7.user_id !== _0x642e9f.user_id).map(_0x57ab4f => _0x57ab4f.user_id)).size;
        _0x18e295.set(_0x11feb3.id, {
          friend: _0x11feb3,
          voice: _0x642e9f,
          guild: _0x859ad6,
          channelName: _0x43f98c.name,
          companions: _0x395d7d
        });
      }
    }
    return [..._0x18e295.values()].sort((_0x443e4d, _0xaeec52) => Number(_0xaeec52.voice.is_streaming) - Number(_0x443e4d.voice.is_streaming) || Number(_0xaeec52.friend.is_favorite) - Number(_0x443e4d.friend.is_favorite) || _0x443e4d.friend.username.localeCompare(_0xaeec52.friend.username));
  }(_0x386549, _0x4e6b72, _0x533f11, _0x3f06e, _0x5ecbf8) : [], [_0x697da8, _0x1a707b, _0x386549, _0x4e6b72, _0x533f11, _0x3f06e, _0x5ecbf8]);
  const _0x1563f4 = !_0x697da8 || _0x4f27f9.some(_0x224d15 => _0x4e4915.has(_0x224d15));
  return <aside className="w-full shrink-0 p-3 lg:h-full lg:w-[320px] lg:min-h-0 xl:w-[350px]" aria-label={_0x2fd80f("homeActivities.title")}>{_0x4f27f9.map(_0x5e3ebc => <_Component id={_0x5e3ebc} key={_0x1a707b + ":" + _0x5e3ebc} />)}<div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-border-default/60 bg-surface-raised"><header className="shrink-0 px-5 pb-4 pt-5"><div className="flex items-center gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-accent-primary/10 text-accent-primary"><_0x5a3c7a icon="solar:headphones-round-bold-duotone" className="size-5" aria-hidden={true} /></span><h2 className="flex-1 text-sm font-semibold text-text-primary">{_0x2fd80f("homeActivities.title")}</h2>{_0x2dda06.length > 0 && <span className="rounded-full bg-surface-overlay px-2.5 py-1 text-xs font-medium tabular-nums text-text-secondary">{_0x2dda06.length}</span>}</div><p className="mt-3 text-xs leading-relaxed text-text-tertiary">{_0x2fd80f("homeActivities.description")}</p></header><div className={"min-h-0 flex-1 overflow-y-auto scrollbar-thin " + (_0x2dda06.length !== 0 || _0x1563f4 ? "space-y-2.5 px-3 pb-3" : "flex items-center justify-center p-3")}>{_0x2dda06.length === 0 && (_0x1563f4 ? <div role="status" aria-label={_0x2fd80f("homeActivities.loading")} className="space-y-3">{[0, 1, 2].map(_0x4d8d05 => <div aria-hidden={true} className="rounded-xl border border-border-default/40 p-3.5 motion-safe:animate-pulse" key={_0x4d8d05}><div className="flex items-center gap-3"><div className="size-10 rounded-full bg-surface-overlay" /><div className="flex-1 space-y-2"><div className="h-2.5 w-24 rounded bg-surface-overlay" /><div className="h-2 w-16 rounded bg-surface-overlay" /></div></div><div className="mt-4 h-2 w-4/5 rounded bg-surface-overlay" /></div>)}</div> : <div role="status" className="flex min-h-[260px] w-full flex-col items-center justify-center p-5 text-center lg:min-h-0"><div className="mb-5 grid size-20 place-items-center rounded-full border border-border-default/60 bg-surface-overlay/30"><_0x5a3c7a icon="solar:headphones-round-bold-duotone" className="size-9 text-text-muted" aria-hidden={true} /></div><p className="max-w-[220px] text-sm leading-relaxed text-text-secondary">{_0x2fd80f("homeActivities.empty")}</p></div>)}{_0x2dda06.map(({
          friend: _0x252b8b,
          voice: _0x1600ee,
          guild: _0x5e4470,
          channelName: _0x17d63a,
          companions: _0x4453aa
        }) => <_0x56fbc4 to={"/app/server/" + _0x5e4470.id + "/" + _0x1600ee.channel_id} className="group block overflow-hidden rounded-xl border border-border-default/60 bg-surface-base/30 p-3.5 transition-colors hover:border-border-strong hover:bg-surface-overlay/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary" key={_0x1a707b + ":" + _0x252b8b.id + ":" + _0x5e4470.id + ":" + _0x1600ee.channel_id}><div className="flex items-center gap-3"><div className="relative shrink-0"><_0x15976d className="size-10"><_0x5e3bf1 src={_0x252b8b.avatar_url || _0x1600ee.avatar_url || undefined} alt="" /><_0x599fde className="bg-surface-overlay text-xs font-semibold">{(_0x252b8b.display_name || _0x252b8b.username).slice(0, 2).toUpperCase()}</_0x599fde></_0x15976d><span className={"absolute -bottom-0.5 -right-0.5 grid size-4 place-items-center rounded-full ring-2 ring-surface-raised " + (_0x1600ee.is_streaming ? "bg-red-500 text-white" : "bg-surface-overlay text-text-secondary")}><_0x5a3c7a icon={_0x1600ee.is_streaming ? "solar:screencast-2-bold" : "solar:headphones-round-bold"} className="size-2.5" aria-hidden={true} /></span></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-text-primary">{_0x252b8b.display_name || _0x252b8b.username}</p><p className="mt-0.5 truncate text-[11px] text-text-tertiary">{_0x2fd80f(_0x4453aa ? "homeActivities.together" : "homeActivities.alone", {
                  count: _0x4453aa
                })}</p></div>{_0x1600ee.is_streaming && <span className="flex shrink-0 items-center gap-1.5 rounded-md bg-red-500/10 px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-red-400"><span className="size-1.5 rounded-full bg-red-400" />{_0x2fd80f("voice.screenShare.live")}</span>}</div><div className="mt-3.5 flex items-center gap-2.5 rounded-lg bg-surface-overlay/40 px-2.5 py-2"><_0x5a3c7a icon="solar:volume-loud-bold-duotone" className="size-4 shrink-0 text-text-muted" aria-hidden={true} /><div className="min-w-0 flex-1"><p className="truncate text-xs font-medium text-text-secondary" title={_0x17d63a}>{_0x17d63a}</p><p className="mt-0.5 truncate text-[10px] text-text-tertiary" title={_0x5e4470.name}>{_0x5e4470.name}</p></div><_0x5a3c7a icon="solar:alt-arrow-right-linear" className="size-3.5 shrink-0 text-text-muted transition-transform group-hover:translate-x-0.5" aria-hidden={true} /></div>{_0x1600ee.is_streaming && <N guildId={_0x5e4470.id} channelId={_0x1600ee.channel_id} userId={_0x252b8b.id} />}<div className="mt-3 flex items-center justify-between gap-2 text-[10px]"><span className="truncate text-text-tertiary">{_0x2fd80f(_0x1600ee.is_streaming ? "homeActivities.streaming" : "homeActivities.voice")}</span><span className="shrink-0 font-medium text-text-secondary transition-colors group-hover:text-accent-primary">{_0x2fd80f("homeActivities.openRoom")}</span></div></_0x56fbc4>)}</div></div></aside>;
}
const y = "home_activities_collapsed";
const w = _0x1bb6be.memo(() => {
  const [_0x3e8ada, _0x45be] = _0x1bb6be.useState(() => localStorage.getItem(y) === "true");
  _0x1bb6be.useEffect(() => {
    localStorage.setItem(y, String(_0x3e8ada));
  }, [_0x3e8ada]);
  return <div className="flex h-full w-full flex-col-reverse bg-surface-base overflow-auto scrollbar-thin lg:flex-row lg:overflow-hidden"><div className="min-h-[50vh] min-w-0 flex-1 lg:min-h-0"><_0x2f2c02 activitiesCollapsed={_0x3e8ada} onToggleActivities={() => _0x45be(_0x551459 => !_0x551459)} /></div>{!_0x3e8ada && <_ />}</div>;
});
w.displayName = "HomeContent";
export { w as default };