import { R as _0x39a8ed, r as _0x523c89, b as _0x554a03, dW as _0x3ebca8, _ as _0xe62992, P as _0x4e120c, j as _0x561ae1, I as _0x4744f0, B as _0x36f3f1 } from "./index-cQfEKR1W.js";
import { S as _0x5d0ad3 } from "./separator-Ba6vNTx4.js";
import { V as _0x40a9c4 } from "./VisibilitySwitch-CMTX5ZFx.js";
import { aL as _0x3f7f05, aM as _0x3528b4, aN as _0x3b7a54, ae as _0x2bd385 } from "./soundboardFx-C2LP-Hjs.js";
import { P as _0x419649, G as _0x4f0aa8 } from "./PermissionManager-DIa7EmgV.js";
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
const x = _0x523c89.forwardRef(({
  guildId: _0x1742ed,
  categoryId: _0x5a3806,
  categoryData: _0x532e41,
  onDirtyChange: _0x4d7736
}, _0x315db9) => {
  const {
    t: _0x172fc4
  } = _0x554a03();
  const [_0xb9cf15, _0x6bfa49] = _0x39a8ed.useState(false);
  const [_0x527062, _0x3fb8fd] = _0x39a8ed.useState(false);
  const [_0x14d5a8, _0x4c3aa7] = _0x39a8ed.useState(false);
  const [_0xb6596d, _0x2e1f28] = _0x39a8ed.useState(false);
  const [_0x170f38, _0x2168ae] = _0x39a8ed.useState(false);
  const [_0x5d9540, _0x5c633b] = _0x39a8ed.useState([]);
  const [_0x58b503, _0x5c8e59] = _0x39a8ed.useState(false);
  const [_0x39a5ba, _0xc959dc] = _0x39a8ed.useState("");
  const [_0x26febf, _0x5534e6] = _0x39a8ed.useState("");
  const [_0x55d623, _0x585740] = _0x39a8ed.useState([]);
  const [_0x1a16cd, _0xc1ead7] = _0x39a8ed.useState([]);
  const [_0x5d9377, _0x5f16ac] = _0x39a8ed.useState(false);
  const [_0x15252a, _0x23baea] = _0x39a8ed.useState(null);
  const [_0x3cbfa7, _0x2a053f] = _0x39a8ed.useState(false);
  const [_0x4f30fa, _0x1d25ad] = _0x523c89.useState(false);
  const _0x203c59 = _0x39a8ed.useRef(null);
  const _0x3b3103 = _0x39a8ed.useMemo(() => _0x15252a?.permissions ? _0x15252a.permissions.filter(_0x5ea4ad => _0x5ea4ad.type === "role").map(_0x231b42 => ({
    id: String(_0x231b42.target_id),
    name: _0x231b42.target_name,
    color: "#5865f2",
    permissionsCount: 0
  })) : [], [_0x15252a]);
  const _0x3c7309 = _0x39a8ed.useMemo(() => _0x15252a?.permissions ? _0x15252a.permissions.filter(_0x10f0b8 => _0x10f0b8.type === "member").map(_0x1a44da => ({
    id: String(_0x1a44da.target_id),
    name: _0x1a44da.target_name,
    avatar: undefined,
    permissionsCount: 0
  })) : [], [_0x15252a]);
  const _0x53e6e2 = _0x39a8ed.useCallback(async () => {
    if (!_0x1742ed || !_0x5a3806) {
      _0x23baea(null);
      _0x2a053f(false);
      return;
    }
    try {
      _0x2a053f(true);
      const _0x2f8884 = await _0x3f7f05(_0x1742ed, _0x5a3806);
      _0x23baea(_0x2f8884);
      console.log("[CategoryPermissionsSettings] Category permissions loaded:", _0x2f8884);
    } catch (_0x3f3315) {
      console.error("[CategoryPermissionsSettings] Error loading category permissions:", _0x3f3315);
      _0x23baea(null);
    } finally {
      _0x2a053f(false);
    }
  }, [_0x1742ed, _0x5a3806]);
  _0x39a8ed.useEffect(() => {
    _0x53e6e2();
  }, [_0x53e6e2]);
  _0x39a8ed.useEffect(() => {
    if (_0x532e41) {
      const _0x5359aa = _0x532e41.is_private || false;
      console.log("[CategoryPermissionsSettings] Setting isPrivate from categoryData:", _0x5359aa);
      _0x6bfa49(_0x5359aa);
      _0x3fb8fd(_0x5359aa);
    }
  }, [_0x532e41]);
  _0x3ebca8("category_updated", _0x73ab8 => {
    const {
      guild_id: _0x46a91a,
      category_id: _0x33df28,
      changes: _0x1c55ca
    } = _0x73ab8;
    if (String(_0x46a91a) === String(_0x1742ed) && String(_0x33df28) === String(_0x5a3806) && _0x1c55ca && typeof _0x1c55ca.is_private == "boolean") {
      console.log("[CategoryPermissionsSettings] Updating is_private state:", {
        oldValue: _0xb9cf15,
        newValue: _0x1c55ca.is_private
      });
      _0x6bfa49(_0x1c55ca.is_private);
      _0x3fb8fd(_0x1c55ca.is_private);
      _0x4c3aa7(false);
      if (_0x4d7736) {
        _0x4d7736(_0xb6596d);
      }
    }
  });
  _0x3ebca8("permission_updated", _0x128520 => {
    const {
      scope: _0x10eee2,
      target_id: _0x2ccdce,
      guild_id: _0x160d1d
    } = _0x128520;
    if (_0x10eee2 === "category" && String(_0x160d1d) === String(_0x1742ed) && String(_0x2ccdce) === String(_0x5a3806)) {
      console.log("[CategoryPermissionsSettings] permission_updated event received:", _0x128520);
      _0x53e6e2();
    }
  });
  const _0x467e79 = _0x523c89.useCallback(_0x599173 => {
    const _0x71206a = !_0x599173;
    _0x6bfa49(_0x71206a);
    const _0x17af63 = _0x71206a !== _0x527062;
    _0x4c3aa7(_0x17af63);
    if (_0x4d7736) {
      _0x4d7736(_0x17af63 || _0xb6596d);
    }
  }, [_0x527062, _0xb6596d, _0x4d7736]);
  const _0xd6e53b = _0x523c89.useCallback(() => {
    _0x2168ae(true);
    _0x25a6ae();
  }, []);
  const _0x25a6ae = async () => {
    if (_0x1742ed) {
      _0x5c8e59(true);
      try {
        const {
          getGuildRoles: _0x4a35cf
        } = await _0xe62992(async () => {
          const {
            getGuildRoles: _0x4ce601
          } = await import("./index-cQfEKR1W.js").then(_0x4e982a => _0x4e982a.fs);
          return {
            getGuildRoles: _0x4ce601
          };
        }, [], import.meta.url);
        const _0x11413e = await _0x4a35cf(_0x1742ed);
        const _0x4cd8e8 = Array.isArray(_0x11413e) ? _0x11413e : [];
        _0x5c633b(_0x4cd8e8);
        console.log("[CategoryPermissionsSettings] Roles loaded:", _0x4cd8e8.length);
      } catch (_0x285f8a) {
        console.error("[CategoryPermissionsSettings] Error loading roles:", _0x285f8a);
      } finally {
        _0x5c8e59(false);
      }
    }
  };
  const _0x42af95 = _0x523c89.useCallback(async () => {
    if (_0x55d623.length !== 0 || _0x1a16cd.length !== 0) {
      _0x5f16ac(true);
      try {
        console.log("Bulk permissions atanıyor (kategori):", {
          selectedRoleIds: _0x55d623,
          selectedMemberIds: _0x1a16cd
        });
        const _0x1973bf = await _0x3528b4(_0x1742ed, _0x5a3806, _0x55d623, _0x1a16cd);
        console.log("Bulk permissions başarıyla atandı:", _0x1973bf);
        await _0x53e6e2();
        _0x2168ae(false);
        _0x585740([]);
        _0xc1ead7([]);
        _0xc959dc("");
        _0x5534e6("");
      } catch (_0x10b61e) {
        console.error("Bulk permissions atama hatası:", _0x10b61e);
      } finally {
        _0x5f16ac(false);
      }
    }
  }, [_0x1742ed, _0x5a3806, _0x55d623, _0x1a16cd, _0x53e6e2]);
  const _0x4b7ad3 = _0x523c89.useCallback(async () => {
    if (_0x1742ed && _0x5a3806) {
      _0x1d25ad(true);
      try {
        const _0xffc645 = await _0x3b7a54(_0x1742ed, _0x5a3806);
        console.log("[CategoryPermissionsSettings] Sync completed:", _0xffc645);
        _0x4e120c.success(_0x172fc4("serverSettings.categorySettings.permissionsSynced", {
          count: _0xffc645.channels_synced
        }));
      } catch (_0x14a471) {
        console.error("[CategoryPermissionsSettings] Sync error:", _0x14a471);
        _0x4e120c.error(_0x14a471?.message || _0x172fc4("serverSettings.categorySettings.syncFailed"));
      } finally {
        _0x1d25ad(false);
      }
    }
  }, [_0x1742ed, _0x5a3806, _0x172fc4]);
  const _0x4537b6 = _0x39a8ed.useCallback(async () => {
    try {
      const _0x13bc42 = [];
      if (_0x14d5a8 && _0xb9cf15 !== _0x527062) {
        console.log("[CategoryPermissionsSettings] Updating category settings (is_private):", _0xb9cf15);
        _0x13bc42.push(_0x2bd385(_0x1742ed, _0x5a3806, {
          is_private: _0xb9cf15
        }));
      }
      if (_0xb6596d && _0x203c59.current) {
        console.log("[CategoryPermissionsSettings] Updating permissions via PermissionManager");
        _0x13bc42.push(_0x203c59.current.savePermissions());
      }
      if (_0x13bc42.length > 0) {
        await Promise.all(_0x13bc42);
        console.log("[CategoryPermissionsSettings] All updates completed successfully");
        await _0x53e6e2();
        _0x4c3aa7(false);
        _0x2e1f28(false);
        if (_0x4d7736) {
          _0x4d7736(false);
        }
      }
    } catch (_0x404a32) {
      console.error("[CategoryPermissionsSettings] Save error:", _0x404a32);
      throw _0x404a32;
    }
  }, [_0x1742ed, _0x5a3806, _0xb9cf15, _0x14d5a8, _0x527062, _0xb6596d, _0x53e6e2, _0x4d7736]);
  _0x523c89.useImperativeHandle(_0x315db9, () => ({
    getValues: () => ({
      isPrivate: _0xb9cf15
    }),
    reset: () => {
      _0x6bfa49(_0x527062);
      _0x4c3aa7(false);
      _0x2e1f28(false);
      if (_0x4d7736) {
        _0x4d7736(false);
      }
    },
    savePermissions: _0x4537b6
  }), [_0x4537b6, _0xb9cf15, _0x527062, _0x4d7736]);
  const _0x315fc5 = _0x523c89.useMemo(() => <section><div className="mb-4"><div className="flex items-center gap-2"><_0x4744f0 icon="solar:eye-bold-duotone" className="size-4 text-text-tertiary" /><div className="text-base leading-snug font-semibold text-text-secondary">{_0x172fc4("serverSettings.categorySettings.accessStatus")}</div></div><p className="text-xs text-text-muted mt-0.5">{_0x172fc4("serverSettings.categorySettings.accessStatusDesc")}</p></div><_0x40a9c4 isPublic={!_0xb9cf15} onPublicChange={_0x467e79} label={_0x172fc4("serverSettings.categorySettings.categoryAccess")} publicLabel={_0x172fc4("serverSettings.categorySettings.categoryPublic")} privateLabel={_0x172fc4("serverSettings.categorySettings.categoryPrivate")} variant="default" /></section>, [_0xb9cf15, _0x467e79]);
  return <div className="space-y-8">{_0x315fc5}<_0x5d0ad3 className="bg-surface-overlay/70" /><section><div role="button" tabIndex={0} onClick={_0x4b7ad3} onKeyDown={_0x51feb9 => {
        if (_0x51feb9.key === "Enter" || _0x51feb9.key === " ") {
          _0x51feb9.preventDefault();
          _0x4b7ad3();
        }
      }} className="w-full flex items-center cursor-pointer justify-between gap-3 rounded-xl px-4 py-3 transition-colors bg-surface-overlay/40 border border-border-default hover:bg-surface-overlay/60"><div className="flex items-center gap-3 min-w-0"><_0x4744f0 icon="solar:refresh-circle-bold-duotone" className="size-4.5 text-text-secondary" /><div className="min-w-0 text-left"><div className="text-sm font-medium text-text-primary/90">{_0x172fc4("serverSettings.categorySettings.syncPermissions")}</div><div className="text-xs text-text-tertiary">{_0x172fc4("serverSettings.categorySettings.syncPermissionsDesc")}</div></div></div><_0x36f3f1 variant="default" size="sm" onClick={_0x16c0ba => {
          _0x16c0ba.stopPropagation();
          _0x4b7ad3();
        }} disabled={_0x4f30fa} className="gap-2 shrink-0">{_0x4f30fa ? <_0x4744f0 icon="svg-spinners:ring-resize" className="size-4" /> : <_0x4744f0 icon="solar:refresh-bold" className="size-4" />}{_0x172fc4("serverSettings.categorySettings.syncToChannels")}</_0x36f3f1></div></section><_0x5d0ad3 className="bg-surface-overlay/70" /><_0x419649 ref={_0x203c59} guildId={_0x1742ed} categoryId={_0x5a3806} entityType="category" channelPermissions={_0x15252a} loadingChannelPermissions={_0x3cbfa7} onGiveAccess={_0xd6e53b} onDirtyChange={_0x258b88 => {
      _0x2e1f28(_0x258b88);
      if (_0x4d7736) {
        _0x4d7736(_0x14d5a8 || _0x258b88);
      }
    }} onPermissionRemoved={_0x53e6e2} />{_0x170f38 && <_0x4f0aa8 isOpen={_0x170f38} onClose={() => _0x2168ae(false)} guildId={_0x1742ed} availableRoles={_0x5d9540} rolesLoading={_0x58b503} roleSearchQuery={_0x39a5ba} setRoleSearchQuery={_0xc959dc} selectedRoleIds={_0x55d623} setSelectedRoleIds={_0x585740} memberSearchQuery={_0x26febf} setMemberSearchQuery={_0x5534e6} selectedMemberIds={_0x1a16cd} setSelectedMemberIds={_0xc1ead7} onAssignRoles={_0x42af95} assigningRoles={_0x5d9377} disabledRoleIds={_0x3b3103.map(_0x2fa4d2 => _0x2fa4d2.id)} disabledMemberIds={_0x3c7309.map(_0x1498f4 => _0x1498f4.id)} key={"give-access-category-" + _0x1742ed + "-" + _0x5a3806} />}</div>;
});
x.displayName = "CategoryPermissionsSettings";
const v = _0x39a8ed.memo(x);
export { v as default };