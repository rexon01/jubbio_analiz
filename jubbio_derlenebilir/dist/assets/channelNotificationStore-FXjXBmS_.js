import { aa as _0x4b21de } from "./index-cQfEKR1W.js";
const t = _0x4b21de((_0x4bb14f, _0x5841e5) => ({
  overrides: new Map(),
  initializeFromReadySupplemental: _0x5c61fe => {
    const _0x108363 = new Map();
    for (const _0x5d46c7 of _0x5c61fe) {
      _0x108363.set(_0x5d46c7.channel_id, _0x5d46c7);
    }
    _0x4bb14f({
      overrides: _0x108363
    });
  },
  setOverride: (_0x7d9b4, _0x20adbe) => {
    _0x4bb14f(_0x27e1e3 => {
      const _0x495bac = new Map(_0x27e1e3.overrides);
      const _0x7782ef = _0x495bac.get(_0x7d9b4);
      _0x495bac.set(_0x7d9b4, {
        channel_id: _0x7d9b4,
        muted: _0x20adbe.muted ?? _0x7782ef?.muted ?? false,
        mute_until: _0x20adbe.mute_until !== undefined ? _0x20adbe.mute_until : _0x7782ef?.mute_until,
        notification_level: _0x20adbe.notification_level ?? _0x7782ef?.notification_level ?? -1
      });
      return {
        overrides: _0x495bac
      };
    });
  },
  removeOverride: _0x598532 => {
    _0x4bb14f(_0x2bda9b => {
      const _0x2636af = new Map(_0x2bda9b.overrides);
      _0x2636af.delete(_0x598532);
      return {
        overrides: _0x2636af
      };
    });
  },
  isChannelMuted: _0xb5b9a1 => {
    const _0x4405de = _0x5841e5().overrides.get(_0xb5b9a1);
    return !!_0x4405de && !!_0x4405de.muted && (!_0x4405de.mute_until || !(_0x4405de.mute_until < Date.now() / 1000));
  }
}));
const i = _0xfc704e => t(_0x1efa93 => {
  const _0x435a88 = _0x1efa93.overrides.get(_0xfc704e);
  return !!_0x435a88 && !!_0x435a88.muted && (!_0x435a88.mute_until || !(_0x435a88.mute_until < Date.now() / 1000));
});
const r = _0x57db3a => t(_0x502d31 => {
  const _0xb1c417 = _0x502d31.overrides.get(_0x57db3a);
  return _0xb1c417?.notification_level ?? -1;
});
const n = _0x4b89fe => t(_0x5d8f63 => {
  const _0x4274a4 = _0x5d8f63.overrides.get(_0x4b89fe);
  return _0x4274a4?.mute_until ?? null;
});
const o = {
  initializeFromReadySupplemental: _0x203416 => t.getState().initializeFromReadySupplemental(_0x203416),
  setOverride: (_0x4478ae, _0x540613) => t.getState().setOverride(_0x4478ae, _0x540613),
  removeOverride: _0x48f45d => t.getState().removeOverride(_0x48f45d)
};
export { o as channelNotificationActions, n as useChannelMuteUntil, i as useChannelMuted, r as useChannelNotificationLevel, t as useChannelNotificationStore };