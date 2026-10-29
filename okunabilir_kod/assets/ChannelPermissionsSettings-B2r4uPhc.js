import { R as _0x532734, r as _0x39beb8, b as _0xb17b35, dW as _0x26b905, _ as _0x5479bf, j as _0x4c6dac, I as _0x4263c8 } from "./index-cQfEKR1W.js";
import { S as _0x12a9e2 } from "./separator-Ba6vNTx4.js";
import { V as _0x38d3f7 } from "./VisibilitySwitch-CMTX5ZFx.js";
import { aF as _0x2065f1, aG as _0x3e1ffd, aE as _0x1f32a0 } from "./soundboardFx-C2LP-Hjs.js";
import { P as _0x4a1e08, G as _0x344065 } from "./PermissionManager-DIa7EmgV.js";
import "./switch-lfnbGePn.js";
import "./label-ODyS97Ju.js";
import "./index-BUijt7wr.js";
import "./ComparisonTable-DUfwtDVZ.js";
import "./subscription-Cl5JAGbQ.js";
import "./card-Bk6R3tFg.js";
import "./gift-Co-azAyt.js";
import "./MemberSelector-COJb6MJ2.js";
import "./input-AMyERYwJ.js";
import "./index-Bk4sqYoK.js";
import "./dialog-BMMpM7PR.js";
import "./index-yuEHo9bu.js";
import "./index-Oyyh46KT.js";
import "./minus-DgcuZCwQ.js";
const g = _0x39beb8.forwardRef(({
  guildId: _0xf447a5,
  channelId: _0x595b5d,
  channelDetails: _0x24e8e6,
  isLoadingChannelDetails: _0x3db784,
  onDirtyChange: _0x3388d4
}, _0x5d9aa6) => {
  const {
    t: _0x1702f2
  } = _0xb17b35();
  const [_0xfd6992, _0x355148] = _0x532734.useState(false);
  const [_0x47c6b6, _0x1f57f0] = _0x532734.useState(false);
  const [_0x3e1f12, _0x1641fe] = _0x532734.useState(false);
  const [_0x4e911f, _0x355026] = _0x532734.useState(false);
  const [_0x31b33b, _0x8219f] = _0x532734.useState(false);
  const [_0x3322bf, _0x21a8b5] = _0x532734.useState([]);
  const [_0x34c0d1, _0x5c008d] = _0x532734.useState(false);
  const [_0x557a45, _0x573e59] = _0x532734.useState("");
  const [_0x21a06f, _0x56d370] = _0x532734.useState("");
  const [_0x2b8260, _0x59a9de] = _0x532734.useState([]);
  const [_0xd6d7b6, _0x4d345c] = _0x532734.useState([]);
  const [_0x42556e, _0x5dce58] = _0x532734.useState(false);
  const [_0x5e2bcd, _0x1a2072] = _0x532734.useState(null);
  const [_0x542d75, _0x38a28b] = _0x532734.useState(false);
  const _0x23579b = _0x532734.useRef(null);
  const _0x3030db = _0x532734.useMemo(() => _0x5e2bcd?.permissions ? _0x5e2bcd.permissions.filter(_0x2d5a2c => _0x2d5a2c.type === "role").map(_0x5d4b46 => ({
    id: String(_0x5d4b46.target_id),
    name: _0x5d4b46.target_name,
    color: "var(--accent-primary-text, #adff08)",
    permissionsCount: 0
  })) : [], [_0x5e2bcd]);
  const _0x297c61 = _0x532734.useMemo(() => _0x5e2bcd?.permissions ? _0x5e2bcd.permissions.filter(_0x296af7 => _0x296af7.type === "member").map(_0x2b7363 => ({
    id: String(_0x2b7363.target_id),
    name: _0x2b7363.target_name,
    avatar: undefined,
    permissionsCount: 0
  })) : [], [_0x5e2bcd]);
  _0x532734.useEffect(() => {
    if (_0x24e8e6 && !_0x3db784) {
      const _0x2d4f0f = _0x24e8e6.is_private || false;
      _0x355148(_0x2d4f0f);
      _0x1f57f0(_0x2d4f0f);
    }
  }, [_0xf447a5, _0x24e8e6, _0x3db784]);
  const _0x4146b1 = _0x532734.useCallback(async () => {
    if (!_0xf447a5 || !_0x595b5d) {
      _0x1a2072(null);
      _0x38a28b(false);
      return;
    }
    try {
      _0x38a28b(true);
      const _0x41a982 = await _0x2065f1(_0xf447a5, _0x595b5d);
      _0x1a2072(_0x41a982);
    } catch (_0x449bd1) {
      console.error("[ChannelPermissionsSettings] Error loading channel permissions:", _0x449bd1);
      _0x1a2072(null);
    } finally {
      _0x38a28b(false);
    }
  }, [_0xf447a5, _0x595b5d]);
  _0x532734.useEffect(() => {
    _0x4146b1();
  }, [_0x4146b1]);
  _0x26b905("channel_updated", _0x486986 => {
    const {
      guild_id: _0x2863f5,
      channel_id: _0x21a59a,
      changes: _0x31053b
    } = _0x486986;
    if (String(_0x2863f5) === String(_0xf447a5) && String(_0x21a59a) === String(_0x595b5d) && _0x31053b && typeof _0x31053b.is_private == "boolean") {
      _0x355148(_0x31053b.is_private);
      _0x1f57f0(_0x31053b.is_private);
      _0x1641fe(false);
      if (_0x3388d4) {
        _0x3388d4(_0x4e911f);
      }
    }
  });
  _0x26b905("permission_updated", _0xefea86 => {
    const {
      scope: _0x3e0fc0,
      target_id: _0x1d3f1b,
      guild_id: _0x4e2734
    } = _0xefea86;
    if (_0x3e0fc0 === "channel" && String(_0x4e2734) === String(_0xf447a5) && String(_0x1d3f1b) === String(_0x595b5d)) {
      _0x4146b1();
    }
  });
  const _0x791e6 = _0x39beb8.useCallback(_0x48350b => {
    const _0x4d7609 = !_0x48350b;
    _0x355148(_0x4d7609);
    const _0x429e9f = _0x4d7609 !== _0x47c6b6;
    _0x1641fe(_0x429e9f);
    if (_0x3388d4) {
      _0x3388d4(_0x429e9f || _0x4e911f);
    }
  }, [_0x47c6b6, _0x4e911f, _0x3388d4]);
  const _0x10daf4 = _0x39beb8.useCallback(() => {
    _0x8219f(true);
    _0x101721();
  }, []);
  const _0x101721 = async () => {
    if (_0xf447a5) {
      _0x5c008d(true);
      try {
        const {
          getGuildRoles: _0x67483e
        } = await _0x5479bf(async () => {
          const {
            getGuildRoles: _0x8983f5
          } = await import("./index-cQfEKR1W.js").then(_0x1bc595 => _0x1bc595.fs);
          return {
            getGuildRoles: _0x8983f5
          };
        }, [], import.meta.url);
        const _0x231325 = await _0x67483e(_0xf447a5);
        const _0x58df03 = Array.isArray(_0x231325) ? _0x231325 : [];
        _0x21a8b5(_0x58df03);
      } catch (_0x3b0900) {
        console.error("[ChannelPermissionsSettings] Error loading roles:", _0x3b0900);
      } finally {
        _0x5c008d(false);
      }
    }
  };
  const _0x291673 = _0x39beb8.useCallback(async () => {
    if (_0x2b8260.length !== 0 || _0xd6d7b6.length !== 0) {
      _0x5dce58(true);
      try {
        await _0x3e1ffd(_0xf447a5, _0x595b5d, _0x2b8260, _0xd6d7b6);
        _0x38a28b(true);
        try {
          const _0x5931fc = await _0x2065f1(_0xf447a5, _0x595b5d);
          _0x1a2072(_0x5931fc);
        } catch {
          _0x1a2072(null);
        } finally {
          _0x38a28b(false);
        }
        _0x8219f(false);
        _0x59a9de([]);
        _0x4d345c([]);
        _0x573e59("");
        _0x56d370("");
      } catch (_0x3cd0c5) {
        console.error("Bulk permissions atama hatası:", _0x3cd0c5);
      } finally {
        _0x5dce58(false);
      }
    }
  }, [_0xf447a5, _0x595b5d, _0x2b8260, _0xd6d7b6]);
  const _0x4aff76 = _0x532734.useCallback(async () => {
    try {
      const _0x14ef3b = [];
      if (_0x3e1f12 && _0xfd6992 !== _0x47c6b6) {
        _0x14ef3b.push(_0x1f32a0(_0xf447a5, _0x595b5d, {
          is_private: _0xfd6992
        }));
      }
      if (_0x4e911f && _0x23579b.current) {
        _0x14ef3b.push(_0x23579b.current.savePermissions());
      }
      if (_0x14ef3b.length > 0) {
        await Promise.all(_0x14ef3b);
        _0x1641fe(false);
        _0x355026(false);
        _0x38a28b(true);
        try {
          const _0x1758fa = await _0x2065f1(_0xf447a5, _0x595b5d);
          _0x1a2072(_0x1758fa);
        } catch {
          _0x1a2072(null);
        } finally {
          _0x38a28b(false);
        }
        if (_0x3388d4) {
          _0x3388d4(false);
        }
      }
    } catch (_0xbe99f3) {
      console.error("[ChannelPermissionsSettings] Save error:", _0xbe99f3);
      if (_0x23579b.current) {
        _0x23579b.current.resetPermissions();
      }
      if (_0x3e1f12) {
        _0x355148(_0x47c6b6);
        _0x1641fe(false);
      }
      throw _0xbe99f3;
    }
  }, [_0xf447a5, _0x595b5d, _0xfd6992, _0x47c6b6, _0x3e1f12, _0x4e911f, _0x3388d4]);
  _0x39beb8.useImperativeHandle(_0x5d9aa6, () => ({
    getValues: () => ({
      isPrivate: _0xfd6992
    }),
    reset: () => {
      _0x355148(_0x47c6b6);
      _0x1641fe(false);
      _0x355026(false);
      if (_0x23579b.current) {
        _0x23579b.current.resetPermissions();
      }
      if (_0x3388d4) {
        _0x3388d4(false);
      }
    },
    savePermissions: _0x4aff76
  }), [_0x4aff76, _0x47c6b6, _0x3388d4, _0xfd6992]);
  const _0x2c9385 = _0x39beb8.useMemo(() => <section><div className="mb-4"><div className="flex items-center gap-2"><_0x4263c8 icon="solar:eye-bold-duotone" className="size-4 text-text-tertiary" /><div className="text-base leading-snug font-semibold text-text-secondary">{_0x1702f2("serverSettings.channelSettings.accessStatus")}</div></div><p className="text-sm leading-snug text-text-muted mt-0.5">{_0x1702f2("serverSettings.channelSettings.accessStatusDesc")}</p></div><_0x38d3f7 isPublic={!_0xfd6992} onPublicChange={_0x791e6} label={_0x1702f2("serverSettings.channelSettings.channelAccess")} publicLabel={_0x1702f2("serverSettings.channelSettings.channelPublic")} privateLabel={_0x1702f2("serverSettings.channelSettings.channelPrivate")} variant="default" />{_0xfd6992 && <div className="mt-3 rounded-lg bg-blue-500/10 border border-blue-500/20 px-3 py-2.5"><p className="text-xs text-blue-300/80 leading-relaxed">{_0x1702f2("serverSettings.channelSettings.privateChannelNote")}</p></div>}</section>, [_0xfd6992, _0x791e6, _0x1702f2]);
  return <div className="space-y-8">{_0x2c9385}<_0x12a9e2 className="bg-surface-overlay/70" /><_0x4a1e08 ref={_0x23579b} guildId={_0xf447a5} channelId={_0x595b5d} channelPermissions={_0x5e2bcd} loadingChannelPermissions={_0x542d75} onGiveAccess={_0x10daf4} onDirtyChange={_0x313c4a => {
      _0x355026(_0x313c4a);
      if (_0x3388d4) {
        _0x3388d4(_0x3e1f12 || _0x313c4a);
      }
    }} onPermissionRemoved={_0x4146b1} channelType={_0x24e8e6?.type === "app" ? "app" : _0x24e8e6?.type === "voice" ? "voice" : "text"} />{_0x31b33b && <_0x344065 isOpen={_0x31b33b} onClose={() => _0x8219f(false)} guildId={_0xf447a5} availableRoles={_0x3322bf} rolesLoading={_0x34c0d1} roleSearchQuery={_0x557a45} setRoleSearchQuery={_0x573e59} selectedRoleIds={_0x2b8260} setSelectedRoleIds={_0x59a9de} memberSearchQuery={_0x21a06f} setMemberSearchQuery={_0x56d370} selectedMemberIds={_0xd6d7b6} setSelectedMemberIds={_0x4d345c} onAssignRoles={_0x291673} assigningRoles={_0x42556e} disabledRoleIds={_0x3030db.map(_0x2267fc => _0x2267fc.id)} disabledMemberIds={_0x297c61.map(_0x5ad1b8 => _0x5ad1b8.id)} key={"give-access-" + _0xf447a5 + "-" + _0x595b5d} />}</div>;
});
g.displayName = "ChannelPermissionsSettings";
const h = _0x532734.memo(g);
export { h as default };