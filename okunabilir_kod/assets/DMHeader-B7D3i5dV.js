import { r as _0x3560d0, ba as _0x57be16, P as _0x1db747, d4 as _0xc0906a, aV as _0x4c57e9, b as _0x3c2cee, j as _0xb259b5, aN as _0x2724d7, B as _0x2d5baf, I as _0x3be984, b2 as _0x5cbc99 } from "./index-cQfEKR1W.js";
import { bk as _0x26e7cd, c0 as _0x470d9c, af as _0x39384a } from "./AppLayout-BEBJqe9_.js";
import { h, aT as _0x523da7, M as _0x46cd49 } from "./soundboardFx-C2LP-Hjs.js";
import { u as _0xfb588b } from "./searchSidebarStore-DiJGmBtO.js";
import "./tr-D975n4_R.js";
import "./select-DQjjzSZW.js";
import "./index-Oyyh46KT.js";
import "./arrow-left-B3FhifN2.js";
import "./arrow-right-DvlsXLCB.js";
import "./loader-circle-CTtxa1g9.js";
import "./switch-lfnbGePn.js";
import "./drawer-X7YyCqpZ.js";
import "./index-yuEHo9bu.js";
import "./input-AMyERYwJ.js";
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
import "./avatar-C-4BWxT3.js";
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
import "./index-BUijt7wr.js";
const j = ({
  isBot: _0x205aed = false,
  canCall: _0x5329af = true,
  userName: _0x240aee,
  userAvatar: _0x6ec140,
  userStatus: _0x338858,
  isGroup: _0x9b66a = false,
  groupIcon: _0x371d39,
  showUserProfile: _0x20c840,
  onToggleUserProfile: _0x17a68a,
  onEditGroup: _0x3c74f7,
  channelId: _0x3225eb,
  memberIds: _0x2081cc = [],
  userId: _0x50bcb0,
  username: _0x37d847,
  bannerUrl: _0x487ec3,
  bio: _0x46f35d,
  isFriend: _0x35dd71 = false,
  allowDirectMessages: _0x2575ac,
  isBlocked: _0x167dc5 = false,
  activities: _0x350366,
  profileTheme: _0x28fd0d,
  isSearchActive: _0x2207ce = false,
  onToggleSearch: _0x34a54c,
  isPinnedActive: _0x423726 = false,
  hasNewPins: _0x4fa03a = false
}) => {
  const {
    t: _0x306ab6
  } = _0x3c2cee();
  const {
    initiateCall: _0x23e174,
    isLoading: _0x31fc3f
  } = (() => {
    const [_0x3faddb, _0x4238bc] = _0x3560d0.useState(false);
    return {
      initiateCall: _0x3560d0.useCallback(async _0x3e0418 => {
        const {
          channelId: _0x2fc70e,
          callType: _0x328ab2,
          memberIds: _0x148176
        } = _0x3e0418;
        const _0x44086a = h.getState();
        const _0x1d2be0 = _0x57be16.getState();
        if (_0x44086a.status === "starting" || _0x44086a.status === "ringing" || _0x44086a.status === "ongoing") {
          _0x1db747.error("Zaten aktif bir arama var");
          return null;
        }
        if (_0x1d2be0.status === "joined" || _0x1d2be0.status === "joining") {
          try {
            await _0x26e7cd();
          } catch (_0x4cead3) {
            _0x1d2be0.reset();
          }
        }
        try {
          _0x4238bc(true);
          _0x44086a.setStatus("starting");
          _0x44086a.setError(null);
          _0xc0906a.preload().catch(() => {});
          const _0x53220f = await _0x470d9c({
            channel_id: _0x2fc70e,
            call_type: _0x328ab2,
            member_ids: _0x148176
          });
          const {
            updateChannel: _0x4a1d5d
          } = _0x4c57e9.getState();
          _0x4a1d5d(String(_0x53220f.channel_id), {
            active_call: {
              status: "active",
              initiator_id: _0x53220f.initiator_id,
              participant_ids: [_0x53220f.initiator_id],
              started_at: Math.floor(Date.now() / 1000)
            }
          });
          const _0x3d6601 = _0x53220f.joined_existing === true;
          const _0x422c3a = _0x3d6601 ? "ongoing" : "ringing";
          _0x44086a.setCall({
            id: "call_" + _0x53220f.room_name,
            channel_id: _0x53220f.channel_id,
            call_type: _0x53220f.call_type,
            initiator_id: _0x53220f.initiator_id,
            status: _0x422c3a,
            livekit_room_name: _0x53220f.room_name,
            participants: [],
            created_at: new Date().toISOString()
          });
          _0x44086a.setParticipants([]);
          _0x44086a.setStatus(_0x3d6601 ? "ongoing" : "ringing");
          if (_0x3d6601) {
            _0x44086a.dismissIncomingCall();
          }
          const _0x378d11 = "wss://livekit.jubbio.com";
          _0x1d2be0.joinWithSession({
            guildId: "dm-call-" + _0x53220f.channel_id,
            channelId: _0x53220f.channel_id,
            channelName: _0x53220f.call_type === "dm" ? "DM Arama" : "Grup Arama",
            token: _0x53220f.token,
            livekitUrl: _0x378d11,
            roomName: _0x53220f.room_name,
            identity: String(_0x53220f.initiator_id)
          });
          console.log("%c[StartCall] Arama başlatıldı → room_name: %s, channel_id: %s, initiator_id: %s", "color: #8b5cf6; font-weight: bold;", _0x53220f.room_name, _0x53220f.channel_id, _0x53220f.initiator_id);
          return _0x53220f;
        } catch (_0x477842) {
          _0x44086a.setStatus("error");
          _0x1d2be0.setStatus("idle");
          const _0x425013 = _0x477842?.message || "";
          if (_0x425013.includes("network") || _0x425013.includes("timeout")) {
            _0x1db747.error("Ağ bağlantısı hatası!");
            _0x44086a.setError("Ağ bağlantısı hatası");
          } else if (_0x425013.includes("unauthorized") || _0x425013.includes("401")) {
            _0x1db747.error("Yetkilendirme hatası!");
            _0x44086a.setError("Yetkilendirme hatası");
          } else if (_0x425013.includes("busy") || _0x425013.includes("409")) {
            _0x1db747.error("Kullanıcı başka bir aramada!");
            _0x44086a.setError("Kullanıcı meşgul");
          } else if (_0x425013.includes("rate_limited") || _0x425013.includes("429")) {
            _0x1db747.error("Çok fazla arama denemesi, lütfen bekleyin.");
            _0x44086a.setError("Rate limit");
          } else {
            _0x1db747.error("Arama başlatılamadı!");
            _0x44086a.setError("Arama başlatılamadı");
          }
          return null;
        } finally {
          _0x4238bc(false);
        }
      }, []),
      endCall: _0x3560d0.useCallback(async () => {
        h.getState().endCall();
        await _0x26e7cd();
      }, []),
      isLoading: _0x3faddb
    };
  })();
  const _0x45050c = _0x523da7();
  const _0x244dbb = _0x46cd49(_0x3225eb || "");
  const _0x4d6409 = _0x45050c === "starting" || _0x45050c === "ringing" || _0x45050c === "ongoing";
  const _0x3e2096 = _0x244dbb.length > 0;
  const _0x2a2264 = () => {
    if (!_0x9b66a && _0x50bcb0) {
      _0x5cbc99.getState().openProfileModal({
        userId: _0x50bcb0,
        name: _0x240aee,
        username: _0x37d847 || _0x240aee.toLowerCase().replace(/\s+/g, ""),
        avatarUrl: _0x6ec140,
        bannerUrl: _0x487ec3,
        profileTheme: _0x28fd0d,
        bio: _0x46f35d,
        presenceStatus: _0x338858 || "offline",
        isBot: _0x205aed,
        isFriend: _0x35dd71,
        isSelf: false,
        isSentPending: false,
        allowDirectMessages: _0x2575ac
      });
    }
  };
  const _0x585271 = _0x3560d0.useCallback(() => {
    if (_0x3225eb) {
      _0xfb588b.getState().toggleDMPinned(_0x3225eb);
    }
  }, [_0x3225eb]);
  return <div className="flex items-center justify-between px-4 py-2 bg-surface-raised/95 backdrop-blur-sm border-b border-border-default h-14"><div className="flex items-center gap-2">{_0x9b66a ? <div className="w-8 h-8 rounded-full bg-surface-overlay flex items-center justify-center overflow-hidden">{_0x371d39 ? <img src={_0x371d39} alt={_0x240aee} className="w-8 h-8 rounded-full object-cover" /> : <_0x3be984 icon="solar:users-group-rounded-bold-duotone" className="size-5.5 text-text-tertiary" />}</div> : <div className="relative"><div className={"w-8 h-8 rounded-full bg-surface-overlay flex items-center justify-center overflow-hidden " + (!_0x9b66a && _0x50bcb0 ? "cursor-pointer group/avatar" : "")} onClick={_0x2a2264}>{_0x6ec140 ? <img src={_0x6ec140} alt={_0x240aee} className="w-8 h-8 rounded-full object-cover" /> : <span className="text-sm font-semibold text-text-primary">{_0x240aee.charAt(0).toUpperCase()}</span>}{!_0x9b66a && _0x50bcb0 && <div className="absolute inset-0 rounded-full bg-black/0 group-hover/avatar:bg-black/30 transition-colors" />}</div>{_0x338858 != null && <div className="absolute -bottom-0.5 -right-0.5 overflow-visible [&:has([data-presence-device=mobile])]:-bottom-2 [&:has([data-presence-device=mobile])]:-right-1.5"><_0x39384a userId={_0x50bcb0 || ""} status={_0x338858} size={3.5} borderColor="border-surface-raised" /></div>}</div>}<div className="flex flex-col"><div className="flex items-center gap-1.5"><h1 className={"text-sm font-semibold text-text-primary " + (!_0x9b66a && _0x50bcb0 ? "cursor-pointer hover:underline" : "")} onClick={_0x2a2264}>{_0x240aee}</h1>{_0x205aed && <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-emerald-500/15 shrink-0"><svg className="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg><span className="text-[9px] font-medium text-emerald-400">{_0x306ab6("userDetailsPopover.app")}</span></div>}</div>{!_0x9b66a && !_0x205aed && <span className="text-xs text-text-tertiary">{_0x3e2096 ? <span className="text-green-400 flex items-center gap-1"><span className="flex items-center gap-0.5"><span className="w-1 h-1 bg-green-400 rounded-full animate-bounce [animation-delay:-0.3s]" /><span className="w-1 h-1 bg-green-400 rounded-full animate-bounce [animation-delay:-0.15s]" /><span className="w-1 h-1 bg-green-400 rounded-full animate-bounce" /></span><span>{_0x306ab6("dm.typing")}</span></span> : _0x350366 && _0x350366.length > 0 && _0x350366.find(_0x569b2a => _0x569b2a.type === "playing") ? <span className="text-green-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /><span>{_0x350366.find(_0x4e7986 => _0x4e7986.type === "playing").name} oynuyor</span></span> : _0x338858 != null ? _0x306ab6(_0x338858 === "online" ? "dm.statusOnline" : _0x338858 === "idle" ? "dm.statusIdle" : _0x338858 === "dnd" ? "dm.statusDnd" : "dm.statusOffline") : null}</span>}{_0x9b66a && _0x3e2096 && <span className="text-xs text-green-400 flex items-center gap-1"><span className="flex items-center gap-0.5"><span className="w-1 h-1 bg-green-400 rounded-full animate-bounce [animation-delay:-0.3s]" /><span className="w-1 h-1 bg-green-400 rounded-full animate-bounce [animation-delay:-0.15s]" /><span className="w-1 h-1 bg-green-400 rounded-full animate-bounce" /></span><span>{_0x244dbb.length === 1 ? _0x306ab6("dm.typingUser", {
              name: _0x244dbb[0].display_name || _0x244dbb[0].username
            }) : _0x306ab6("dm.typingCount", {
              count: _0x244dbb.length
            })}</span></span>}</div></div><div className="flex items-center gap-0.5">{!_0x205aed && _0x5329af && <_0x2724d7 label={_0x306ab6(_0x4d6409 ? "dm.callOngoing" : "dm.voiceCall")} side="bottom"><_0x2d5baf variant="link" size="sm" onClick={() => (async () => {
          if (_0x205aed || !_0x5329af) {
            return;
          }
          if (!_0x3225eb || _0x2081cc.length === 0) {
            console.warn("[DMHeader] Cannot start call: missing channelId or memberIds");
            return;
          }
          const _0xa44032 = _0x9b66a ? "gdm" : "dm";
          const _0x3538cf = await _0x23e174({
            channelId: _0x3225eb,
            callType: _0xa44032,
            memberIds: _0x2081cc
          });
          if (_0x3538cf) {
            console.log("[DMHeader] Call started:", _0x3538cf);
          }
        })(false)} disabled={_0x31fc3f || _0x4d6409 || !_0x3225eb || _0x167dc5} className="h-8 w-8 p-0 text-text-tertiary hover:text-text-primary hover:bg-surface-overlay/50 disabled:opacity-50 disabled:cursor-not-allowed"><_0x3be984 icon="solar:phone-bold" className="size-5" /></_0x2d5baf></_0x2724d7>}{_0x9b66a && _0x3c74f7 && <_0x2724d7 label={_0x306ab6("dm.editGroup")} side="bottom"><_0x2d5baf variant="link" size="sm" onClick={_0x3c74f7} className="h-8 w-8 p-0 text-text-tertiary hover:text-text-primary hover:bg-surface-overlay/50"><_0x3be984 icon="solar:pen-new-round-bold" className="size-5" /></_0x2d5baf></_0x2724d7>}{_0x3225eb && <_0x2724d7 label={_0x306ab6("server.pinnedMessages")} side="bottom"><div className="relative"><_0x2d5baf variant="link" size="sm" onClick={_0x585271} className={"h-8 w-8 p-0 hover:bg-surface-overlay/50 " + (_0x423726 ? "text-accent-primary-text bg-accent-subtle" : "text-text-tertiary hover:text-text-primary")}><_0x3be984 icon="solar:pin-bold" className="size-5" /></_0x2d5baf>{_0x4fa03a && <div className="absolute bottom-1 left-1 size-2 bg-red-400/70 rounded-full animate-pulse" />}</div></_0x2724d7>}{_0x17a68a && <_0x2724d7 label={_0x306ab6(_0x20c840 ? "dm.hideUserProfile" : "dm.showUserProfile")} side="bottom"><_0x2d5baf variant="link" size="sm" onClick={_0x17a68a} className="h-8 w-8 p-0 text-text-tertiary hover:text-text-primary hover:bg-surface-overlay/50"><_0x3be984 icon="solar:users-group-rounded-bold" className="size-5" /></_0x2d5baf></_0x2724d7>}{_0x3225eb && _0x34a54c && <_0x2724d7 label={_0x306ab6(_0x2207ce ? "search.hideSearch" : "search.showSearch")} side="bottom"><_0x2d5baf variant="link" size="sm" onClick={_0x34a54c} className={"h-8 w-8 p-0 hover:bg-surface-overlay/50 " + (_0x2207ce ? "text-accent-primary-text bg-accent-subtle" : "text-text-tertiary hover:text-text-primary")}><_0x3be984 icon="solar:magnifer-bold" className="size-5" /></_0x2d5baf></_0x2724d7>}</div></div>;
};
export { j as default };