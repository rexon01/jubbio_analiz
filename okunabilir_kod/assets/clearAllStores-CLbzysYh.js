import { aa as _0x170b5f, dH as _0x4b88e5, dI as _0x51b55c, dJ as _0x1da671, dK as _0x3cfa15, dL as _0x4304fc, dM as _0x177819, d6 as _0x1a865e, aW as _0x1a95a3, b1 as _0x534990, aV as _0x58f804, aP as _0x53ca83, dN as _0x3658d2, cy as _0x5b4b63, c8 as _0x198998, c2 as _0x3d95c9, ba as _0xc5f9de, c5 as _0x4e128f, b9 as _0x393c4c, J as _0x35362d, dO as _0x145557, bf as _0x53d51f, c4 as _0x561186, u as _0x5cad39, d3 as _0x3c132e, bC as _0x3ac55c, b4 as _0x31a7ce, aU as _0x48b1ac, cL as _0x20dbe1, dP as _0xdcdbbd, bb as _0x1a6eea, cP as _0x13098f, b0 as _0x4e58bb, b2 as _0x36979c, d5 as _0x16c87f } from "./index-cQfEKR1W.js";
import { Z as _0x4bae2f, E, H as _0x4c0b1f, n as _0x108474, u as _0x27d601, _ as _0x5ec013, a as _0x3916ec, h as _0x5681c9, c as _0x5b160d, f as _0x262082, Q as _0x1da72d, y as _0x5d92d8, C as _0x5d46cc, $ as _0x1e90b6, i as _0x1f2584, g as _0x4e772a, Y as _0x1159e8 } from "./soundboardFx-C2LP-Hjs.js";
import { u as _0x32d03f, a as _0xe8bc8b, b as _0x2e606c } from "./forumStore-8MsrR85a.js";
import { useChannelNotificationStore as _0x401b1e } from "./channelNotificationStore-FXjXBmS_.js";
import { u as _0x3b9afe } from "./developerStore-J5Gy1Hed.js";
import { u as _0x1e82cb } from "./searchSidebarStore-DiJGmBtO.js";
import { u as _0x4c73f0 } from "./discoveryStore-BjtYMY9E.js";
import { u as _0x1b5269 } from "./socialRoomStore-D5IaorPr.js";
import "./index-BUijt7wr.js";
import "./forum-KIuo_CQJ.js";
import "./developer-DCtAQT29.js";
import "./discovery-D38nftjH.js";
const rt = _0x170b5f(_0x2994ad => ({
  swipeOffsetX: 0,
  isDragging: false,
  setSwipeOffset: (_0x399fd2, _0x596646) => _0x2994ad({
    swipeOffsetX: _0x399fd2,
    isDragging: _0x596646
  }),
  reset: () => _0x2994ad({
    swipeOffsetX: 0,
    isDragging: false
  })
}));
function ot() {}
function lt() {
  try {
    const _0x5b7dff = [];
    for (let _0x324b1f = 0; _0x324b1f < localStorage.length; _0x324b1f++) {
      const _0x4a5e03 = localStorage.key(_0x324b1f);
      if (_0x4a5e03 && (_0x4a5e03.includes("::u=") || _0x4a5e03.startsWith("guilds:") || _0x4a5e03.startsWith("channels:") || _0x4a5e03.startsWith("messages:") || _0x4a5e03.startsWith("dm:") || _0x4a5e03.startsWith("friends:") || _0x4a5e03.startsWith("unread:"))) {
        _0x5b7dff.push(_0x4a5e03);
      }
    }
    _0x5b7dff.forEach(_0x34af52 => {
      try {
        localStorage.removeItem(_0x34af52);
      } catch {}
    });
  } catch {}
}
async function nt() {
  _0x4b88e5.invalidate();
  await new Promise(_0x203536 => setTimeout(_0x203536, 0));
  const _0x149a77 = [["process scanner", () => _0x1a865e.stop()], ["typing timers", () => {
    const _0x36f5d6 = E.getState();
    for (const _0x3c9e14 of Object.values(_0x36f5d6._timeouts)) {
      for (const _0x48ac8f of Object.values(_0x3c9e14)) {
        clearTimeout(_0x48ac8f);
      }
    }
    E.setState(E.getInitialState(), true);
  }], ["read acknowledgements", () => _0x4c0b1f.clear()], ["persistent cache timers", _0x51b55c], ["friend cache timers", _0x1da671], ["API cache", () => _0x1a95a3.clearAll()], ["member cache", _0x3cfa15], ["message snapshots", _0x4304fc], ["server prefetch", _0x4bae2f], ["suggestions", ot], ["local caches", lt], ["useInstanceStore", () => {
    _0x108474.getState().clearInstances();
    _0x108474.setState(_0x108474.getInitialState(), true);
  }], ["useChannelsStore", () => {
    _0x534990.getState().clear();
    _0x534990.setState(_0x534990.getInitialState(), true);
  }], ["useDMChannelsStore", () => {
    _0x58f804.getState().clearCache();
    _0x58f804.setState(_0x58f804.getInitialState(), true);
  }], ["useDMChannelCacheStore", () => {
    _0x27d601.getState().clear();
    _0x27d601.setState(_0x27d601.getInitialState(), true);
  }], ["useFriendsStore", () => {
    _0x53ca83.getState().reset();
    _0x53ca83.setState(_0x53ca83.getInitialState(), true);
  }], ["useGuildDetailsStore", () => {
    _0x3658d2.getState().clear();
    _0x3658d2.setState(_0x3658d2.getInitialState(), true);
  }], ["useGuildUserCacheStore", () => {
    _0x5b4b63.getState().clear();
    _0x5b4b63.setState(_0x5b4b63.getInitialState(), true);
  }], ["useGuildSettingsStore", () => {
    _0x198998.getState().clear();
    _0x198998.setState(_0x198998.getInitialState(), true);
  }], ["useLastVisitedChannelStore", () => {
    _0x5ec013.getState().clear();
    _0x5ec013.setState(_0x5ec013.getInitialState(), true);
  }], ["useNotificationStore", () => {
    _0x3916ec.getState().clearAllNotifications();
    _0x3916ec.setState(_0x3916ec.getInitialState(), true);
  }], ["useUnreadMessagesStore", () => {
    _0x3d95c9.getState().clear();
    _0x3d95c9.setState(_0x3d95c9.getInitialState(), true);
  }], ["useVoiceStore", () => {
    _0xc5f9de.getState().reset();
    _0xc5f9de.setState(_0xc5f9de.getInitialState(), true);
  }], ["useGuildVoiceStateStore", () => {
    _0x4e128f.getState().reset();
    _0x4e128f.setState(_0x4e128f.getInitialState(), true);
  }], ["useCallStore", () => {
    _0x5681c9.getState().reset();
    _0x5681c9.setState(_0x5681c9.getInitialState(), true);
  }], ["useSlidePanelStore", () => {
    rt.getState().reset();
    rt.setState(rt.getInitialState(), true);
  }], ["usePresenceStore", () => {
    _0x393c4c.getState().clearAll();
    _0x393c4c.setState(_0x393c4c.getInitialState(), true);
  }], ["useServerProfileStore", () => {
    _0x32d03f.getState().clear();
    _0x32d03f.setState(_0x32d03f.getInitialState(), true);
  }], ["useSubscriptionStore", () => {
    _0x35362d.getState().reset();
    _0x35362d.setState(_0x35362d.getInitialState(), true);
  }], ["useGuildRolesStore", () => {
    _0x145557.getState().clear();
    _0x145557.setState(_0x145557.getInitialState(), true);
  }], ["useGuildEmojisStore", () => _0x53d51f.getState().clear()], ["useGuildNotificationSettingsStore", () => {
    _0x561186.getState().clear();
    _0x561186.setState(_0x561186.getInitialState(), true);
  }], ["useEphemeralMessagesStore", () => {
    _0x5cad39.getState().clearAll();
    _0x5cad39.setState(_0x5cad39.getInitialState(), true);
  }], ["useMemberTimeoutStore", () => {
    _0x3c132e.getState().clearAll();
    _0x3c132e.setState(_0x3c132e.getInitialState(), true);
  }], ["useUserSettingsStore", () => _0x3ac55c.getState().reset()], ["useNotificationInboxStore", () => {
    _0x5b160d.getState().reset(null);
    _0x5b160d.setState(_0x5b160d.getInitialState(), true);
  }], ["useInboxStore", () => {
    _0x262082.getState().clear();
    _0x262082.setState(_0x262082.getInitialState(), true);
  }], ["useModerationStore", () => {
    _0x31a7ce.getState().reset(null);
    _0x31a7ce.setState(_0x31a7ce.getInitialState(), true);
  }], ["useFuelStore", () => {
    _0x48b1ac.getState().reset();
    _0x48b1ac.setState(_0x48b1ac.getInitialState(), true);
  }], ["useForumStore", () => {
    _0xe8bc8b.getState().clear();
    _0xe8bc8b.setState(_0xe8bc8b.getInitialState(), true);
  }], ["useGuildSoundboardStore", () => {
    _0x20dbe1.getState().clear();
    _0x20dbe1.setState(_0x20dbe1.getInitialState(), true);
  }], ["useOnboardingStore", () => {
    _0xdcdbbd.getState().seed([]);
    _0xdcdbbd.setState(_0xdcdbbd.getInitialState(), true);
  }], ["useSearchSidebarStore", () => {
    _0x1e82cb.getState().closeAll();
    _0x1e82cb.setState(_0x1e82cb.getInitialState(), true);
  }], ["useVolumeStore", () => _0x1a6eea.getState().clearAllCachedVolumes()], ["usePageStore", _0x177819], ["useChangelogStore", () => _0x13098f.setState(_0x13098f.getInitialState(), true)], ["useDMPinSaving", () => _0x1da72d.setState({
    saving: false
  })], ["useSoundboardFx", () => _0x5d92d8.setState({
    items: []
  })], ["useNewMessageMarkerStore", () => _0x5d46cc.setState(_0x5d46cc.getInitialState(), true)], ["usePermissionsStore", () => _0x4e58bb.setState(_0x4e58bb.getInitialState(), true)], ["useUIModalStore", () => _0x36979c.setState(_0x36979c.getInitialState(), true)], ["useChannelNotificationStore", () => _0x401b1e.setState(_0x401b1e.getInitialState(), true)], ["useChannelViewStateStore", () => _0x1e90b6.setState(_0x1e90b6.getInitialState(), true)], ["useFavoriteGifsStore", () => _0x1f2584.setState(_0x1f2584.getInitialState(), true)], ["useDeveloperStore", () => _0x3b9afe.setState(_0x3b9afe.getInitialState(), true)], ["useDraftStore", () => _0x2e606c.setState({
    ..._0x2e606c.getInitialState(),
    _hasHydrated: true
  }, true)], ["usePendingApplicationsStore", () => _0x4e772a.setState(_0x4e772a.getInitialState(), true)], ["useDiscoveryStore", () => _0x4c73f0.setState(_0x4c73f0.getInitialState(), true)], ["useGameActivityStore", () => _0x16c87f.setState(_0x16c87f.getInitialState(), true)], ["useSocialRoomActive", () => _0x1b5269.setState(_0x1b5269.getInitialState(), true)], ["useVoiceViewStore", () => _0x1159e8.setState(_0x1159e8.getInitialState(), true)]];
  const _0x55d7ad = [];
  for (const [_0x3f0aea, _0x1cab2a] of _0x149a77) {
    try {
      _0x1cab2a();
    } catch (_0x508557) {
      console.error("Account cleanup failed:", _0x3f0aea, _0x508557);
      _0x55d7ad.push(_0x508557);
    }
  }
  if (_0x55d7ad.length) {
    throw new AggregateError(_0x55d7ad, "Account state could not be cleared");
  }
}
export { nt as clearAllStores };