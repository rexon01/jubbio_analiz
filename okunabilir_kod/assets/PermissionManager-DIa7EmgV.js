import { b as _0x138d6e, r as _0x4c53a4, j as _0xbb26ee, I as _0x212889, R as _0x52dd81, aG as _0x186898, eY as _0x4651a1, aI as _0x2b5005, P as _0x31c33c, dw as _0x30ee2c, X as _0x119ace, an as _0x165a74 } from "./index-cQfEKR1W.js";
import { B as _0x3e8789 } from "./ComparisonTable-DUfwtDVZ.js";
import { x as _0x2b32a0, aH as _0x28c174, aI as _0xab2543, aJ as _0x12857b, aK as _0xbd2f92 } from "./soundboardFx-C2LP-Hjs.js";
import { M as _0x3f9c3e } from "./MemberSelector-COJb6MJ2.js";
import { D as _0x44718, a as _0x23d95a, c as _0x129948, d as _0x4e88a2 } from "./dialog-BMMpM7PR.js";
import { V as _0x150a5b } from "./index-Oyyh46KT.js";
import { M as _0x2cf52a } from "./minus-DgcuZCwQ.js";
const E = ({
  role: _0x4dfc82,
  isSelected: _0x2cd7c3,
  onToggle: _0x2696cd,
  disabled: _0x3e94d6 = false
}) => {
  const {
    t: _0x495733
  } = _0x138d6e();
  const _0x2703d6 = _0x4c53a4.useMemo(() => _0x2b32a0(_0x4dfc82.name, "emoji inline-block align-[-0.1em] w-[1em] h-[1em]"), [_0x4dfc82.name]);
  return <div className={"flex items-center gap-3 p-3 rounded-lg border border-border-default transition-colors h-[58px] relative " + (_0x3e94d6 ? "bg-surface-overlay/20 opacity-60 cursor-not-allowed" : "bg-surface-overlay/30 hover:bg-surface-overlay/50 cursor-pointer")} onClick={() => !_0x3e94d6 && _0x2696cd(_0x4dfc82.id)}>{_0x3e94d6 && <div className="absolute top-1 right-1 px-1.5 py-0.5 bg-amber-500/20 text-amber-300 text-xs rounded border border-amber-500/30">{_0x495733("roles.alreadyHasAccess")}</div>}<div className="flex items-center gap-2 flex-1"><div className="flex items-center gap-2"><div className="size-7 rounded-full border-2 border-border-subtle shadow-lg flex items-center justify-center shrink-0" style={(_0x3048c9 => {
          if (_0x3048c9 === 0) {
            return {
              backgroundColor: "#94a3b8"
            };
          }
          return {
            backgroundColor: "#" + _0x3048c9.toString(16).padStart(6, "0")
          };
        })(_0x4dfc82.color)} />{_0x4dfc82.is_primary && <div className="text-orange-400"><_0x212889 icon="solar:star-bold-duotone" className="w-3.5 h-3.5 fill-current" /></div>}</div><div className="flex-1 min-w-0"><div className="flex items-center gap-2"><span className="text-xs font-medium text-text-secondary truncate" dangerouslySetInnerHTML={{
            __html: _0x2703d6
          }} /><div className="flex items-center gap-1">{_0x4dfc82.position === 0 && <span className="text-xs text-text-muted bg-surface-inset/50 px-2 py-0.5 rounded">@all</span>}{_0x4dfc82.is_default && <_0x3e8789 variant="outline" className="text-xs px-1.5 py-0.5 border-purple-500/40 text-purple-400 bg-purple-500/10">{_0x495733("roles.default")}</_0x3e8789>}{_0x4dfc82.is_primary && <_0x3e8789 variant="outline" className="text-xs px-1.5 py-0.5 border-orange-500/40 text-orange-400 bg-orange-500/10">{_0x495733("roles.primary")}</_0x3e8789>}</div></div></div></div>{!_0x3e94d6 && <div className="flex items-center gap-2"><div className={"w-4 h-4 rounded border-2 transition-colors " + (_0x2cd7c3 ? "bg-blue-500 border-blue-500" : "border-border-default")}>{_0x2cd7c3 && <div className="w-full h-full flex items-center justify-center"><div className="w-2 h-2 bg-white rounded-sm" /></div>}</div></div>}</div>;
};
const A = ({
  isOpen: _0x36879c,
  onClose: _0x28cdf9,
  guildId: _0x1e8f92,
  availableRoles: _0x1582a8,
  rolesLoading: _0x358778,
  roleSearchQuery: _0x5a62a1,
  setRoleSearchQuery: _0x269ff8,
  selectedRoleIds: _0x2a6186,
  setSelectedRoleIds: _0x411c92,
  memberSearchQuery: _0x7ad043,
  setMemberSearchQuery: _0x44031d,
  selectedMemberIds: _0x3685c0,
  setSelectedMemberIds: _0x4794d6,
  onAssignRoles: _0x3ba81a,
  assigningRoles: _0x209621,
  disabledRoleIds: _0x5f0829 = [],
  disabledMemberIds: _0x415715 = []
}) => {
  const {
    t: _0x5dbef7
  } = _0x138d6e();
  const [_0x458214, _0x3cf900] = _0x4c53a4.useState([]);
  const _0x59955e = _0x5a62a1.trim() ? _0x1582a8.filter(_0x2459d4 => _0x2459d4.name.toLowerCase().includes(_0x5a62a1.toLowerCase())) : _0x1582a8;
  _0x4c53a4.useEffect(() => {
    if (!_0x36879c) {
      _0x411c92([]);
      _0x4794d6([]);
      _0x269ff8("");
      _0x44031d("");
      _0x3cf900([]);
    }
  }, [_0x36879c, _0x411c92, _0x4794d6, _0x269ff8, _0x44031d]);
  return <_0x44718 open={_0x36879c} onOpenChange={_0x4dec7b => !_0x4dec7b && _0x28cdf9()}><_0x23d95a className="p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-4xl overflow-hidden" showCloseButton={true}><_0x150a5b><_0x129948>{_0x5dbef7("serverSettings.giveAccess.title")}</_0x129948><_0x4e88a2>{_0x5dbef7("serverSettings.giveAccess.description")}</_0x4e88a2></_0x150a5b><div className="p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40"><div className="bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col max-h-[85vh]"><div className="px-4 py-4 border-b border-border-subtle"><h2 className="text-lg font-semibold text-text-primary">{_0x5dbef7("serverSettings.giveAccess.title")}</h2><p className="text-sm text-text-tertiary mt-1">{_0x5dbef7("serverSettings.giveAccess.description")}</p></div><div className="px-4 py-4 flex-1 overflow-y-auto scrollbar-thin space-y-4">{(_0x2a6186.length > 0 || _0x3685c0.length > 0) && <div className="p-3 rounded-xl bg-surface-inset/40 border border-border-subtle"><div className="flex items-center gap-2 mb-3"><_0x212889 icon="solar:users-group-rounded-bold-duotone" className="w-4 h-4 text-text-tertiary" /><span className="text-sm font-medium text-text-secondary">{_0x5dbef7("serverSettings.giveAccess.selectedItems")}</span><span className="text-xs text-text-muted bg-surface-inset/40 px-1.5 py-0.5 rounded-md">{_0x5dbef7("serverSettings.giveAccess.itemCount", {
                    count: _0x2a6186.length + _0x3685c0.length
                  })}</span></div><div className="flex flex-wrap gap-2">{_0x2a6186.map(_0x2d2ef0 => {
                  const _0x50fcd5 = _0x1582a8.find(_0x298847 => String(_0x298847.id) === String(_0x2d2ef0));
                  if (_0x50fcd5) {
                    return <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg border border-blue-500/30 bg-blue-600/10 min-w-0 max-w-48" key={"selected-role-" + _0x50fcd5.id}><div className="size-5 rounded-full border border-border-default shrink-0" style={{
                        backgroundColor: _0x50fcd5.color === 0 ? "#94a3b8" : "#" + _0x50fcd5.color.toString(16).padStart(6, "0")
                      }} />{_0x50fcd5.is_primary && <_0x212889 icon="solar:star-bold-duotone" className="w-3 h-3 text-orange-400 shrink-0" />}<span className="text-xs font-medium text-text-secondary truncate">{_0x50fcd5.name}</span><span className="text-xs text-blue-400 bg-blue-500/20 px-1 py-0.5 rounded">{_0x5dbef7("serverSettings.giveAccess.roleTag")}</span></div>;
                  } else {
                    return null;
                  }
                })}{_0x3685c0.map(_0x319e16 => {
                  const _0x1416ea = _0x458214.find(_0x4fa851 => String(_0x4fa851.user_id || _0x4fa851.id) === String(_0x319e16));
                  if (_0x1416ea) {
                    return <div className="flex items-center gap-2 px-2.5 py-2 rounded-lg border border-purple-500/30 bg-purple-600/10 min-w-0 max-w-48" key={"selected-member-" + _0x1416ea.id}>{_0x1416ea.avatar_url ? <img src={_0x1416ea.avatar_url} alt="" className="w-5 h-5 rounded-full shrink-0 object-cover" /> : <div className="w-5 h-5 rounded-full bg-surface-inset flex items-center justify-center text-text-secondary font-medium text-xs shrink-0">{(_0x1416ea.display_name || _0x1416ea.username || "?")[0]?.toUpperCase()}</div>}{_0x1416ea.isOwner && <_0x212889 icon="solar:crown-bold-duotone" className="w-3 h-3 text-amber-400 shrink-0" />}<span className="text-xs font-medium text-text-secondary truncate">{_0x1416ea.display_name || _0x1416ea.username}</span><span className="text-xs text-purple-400 bg-purple-500/20 px-1 py-0.5 rounded">{_0x5dbef7("serverSettings.giveAccess.memberTag")}</span></div>;
                  } else {
                    return null;
                  }
                })}</div></div>}<div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div className="space-y-3"><div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-inset/40 border border-border-subtle"><div className="flex items-center gap-2"><_0x212889 icon="solar:shield-bold-duotone" className="size-4 text-blue-400" /><span className="text-xs font-medium text-text-secondary">{_0x5dbef7("serverSettings.giveAccess.rolesSection")}</span></div><span className="text-xs text-text-muted bg-surface-inset/40 px-1.5 py-0.5 rounded-md">{_0x5a62a1.trim() ? _0x5dbef7("serverSettings.giveAccess.searchResults", {
                      count: _0x59955e.length
                    }) : _0x5dbef7("serverSettings.giveAccess.roleCount", {
                      count: _0x59955e.length
                    })}</span></div><div className="space-y-2"><label className="text-xs font-medium text-text-secondary">{_0x5dbef7("serverSettings.giveAccess.searchRoles")}</label><div className="relative"><_0x212889 icon="solar:magnifer-bold-duotone" className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary w-4 h-4" /><input value={_0x5a62a1} onChange={_0x3d1360 => _0x269ff8(_0x3d1360.target.value)} placeholder={_0x5dbef7("serverSettings.giveAccess.searchRolesPlaceholder")} className="w-full h-10 pl-10 pr-16 rounded-xl text-sm bg-surface-inset/40 border border-border-subtle text-text-primary placeholder:text-text-muted outline-none focus:border-border-default transition-colors" autoComplete="off" />{_0x5a62a1.trim() && <button type="button" onClick={() => _0x269ff8("")} className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 text-xs rounded-md border border-border-subtle bg-surface-inset/40 text-text-secondary hover:bg-interactive-muted transition-colors cursor-pointer">{_0x5dbef7("serverSettings.giveAccess.clear")}</button>}</div></div><div className="max-h-80 overflow-y-auto space-y-2 scrollbar-thin">{_0x358778 ? <div className="space-y-2">{[...Array(5)].map((_0x94e9bc, _0x2f8e4c) => <div className="flex items-center gap-3 p-3 rounded-xl border border-border-subtle bg-surface-inset/40 animate-pulse" key={_0x2f8e4c}><div className="w-10 h-10 rounded-full bg-surface-inset shrink-0" /><div className="flex-1 space-y-2"><div className="h-4 bg-surface-inset rounded w-32" /><div className="h-3 bg-surface-inset rounded w-24" /></div></div>)}</div> : _0x59955e.length === 0 ? <div className="text-center py-12"><div className="w-16 h-16 mx-auto rounded-full bg-surface-inset/40 flex items-center justify-center mb-3"><_0x212889 icon="solar:shield-bold-duotone" className="w-8 h-8 text-text-muted" /></div><h3 className="text-base font-semibold text-text-secondary mb-1">{_0x5a62a1.trim() ? _0x5dbef7("serverSettings.giveAccess.noSearchResults") : _0x5dbef7("serverSettings.giveAccess.noRoles")}</h3><p className="text-sm text-text-tertiary max-w-md mx-auto">{_0x5a62a1.trim() ? _0x5dbef7("serverSettings.giveAccess.noSearchResultsDesc", {
                        query: _0x5a62a1
                      }) : _0x5dbef7("serverSettings.giveAccess.noRolesDesc")}</p></div> : _0x59955e.map(_0x4eb47d => {
                    const _0x3f774d = _0x5f0829.includes(String(_0x4eb47d.id)) || _0x4eb47d.position === 0;
                    return <E role={_0x4eb47d} isSelected={_0x2a6186.includes(_0x4eb47d.id)} onToggle={_0x4d0136 => {
                      if (_0x3f774d) {
                        return;
                      }
                      const _0x35a44a = _0x2a6186.includes(_0x4d0136);
                      _0x411c92(_0x35a44a ? _0x2a6186.filter(_0x1198f7 => _0x1198f7 !== _0x4d0136) : [..._0x2a6186, _0x4d0136]);
                    }} showSelection={true} disabled={_0x3f774d} key={_0x4eb47d.id} />;
                  })}</div></div><_0x3f9c3e guildId={_0x1e8f92} isOpen={_0x36879c} searchQuery={_0x7ad043} onSearchQueryChange={_0x44031d} selectedMemberIds={_0x3685c0} onSelectedMembersChange={(_0x3686c8, _0x587e6f) => {
                _0x4794d6(_0x3686c8);
                _0x3cf900(_0x587e6f);
              }} disabledMemberIds={_0x415715} showBadge={true} showLabel={true} /></div></div><div className="sticky bottom-0 px-4 py-3 border-t border-border-subtle flex items-center justify-between"><div className="text-sm text-text-tertiary">{_0x2a6186.length > 0 || _0x3685c0.length > 0 ? <span className="text-text-secondary font-medium">{_0x5dbef7("serverSettings.giveAccess.selectedSummary", {
                  roles: _0x2a6186.length,
                  members: _0x3685c0.length
                })}</span> : <span className="text-amber-400">{_0x5dbef7("serverSettings.giveAccess.selectPrompt")}</span>}</div><div className="flex gap-3"><button onClick={_0x28cdf9} className="h-10 px-4 rounded-xl text-sm font-medium text-text-secondary bg-surface-inset/40 border border-border-subtle hover:bg-interactive-muted transition-colors cursor-pointer">{_0x5dbef7("serverSettings.giveAccess.cancelBtn")}</button><button onClick={_0x3ba81a} disabled={_0x2a6186.length === 0 && _0x3685c0.length === 0 || _0x209621} className="h-10 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer disabled:cursor-not-allowed disabled:bg-surface-inset disabled:text-text-tertiary bg-accent-primary hover:bg-[#9cef00] text-black">{_0x209621 ? <div className="flex items-center gap-2"><div className="w-4 h-4 animate-spin rounded-full border-2 border-black border-t-transparent" />{_0x5dbef7("serverSettings.giveAccess.granting")}</div> : _0x5dbef7("serverSettings.giveAccess.grantAccess", {
                  count: _0x2a6186.length + _0x3685c0.length
                })}</button></div></div></div></div></_0x23d95a></_0x44718>;
};
A.displayName = "GiveAccessToTheChannel";
const _ = ({
  className: _0x5b0aed
}) => <_0x212889 icon="solar:crown-bold-duotone" className={_0x5b0aed} />;
const _Component = ({
  className: _0x5a2474
}) => <_0x212889 icon="solar:star-bold-duotone" className={_0x5a2474} />;
const C = _0x52dd81.memo(({
  permission: _0x3da481,
  onChangeState: _0x484e69
}) => <div className="flex items-center justify-between py-2.5 px-4 border-b border-border-default/50 last:border-b-0 transition-colors hover:bg-surface-overlay/50"><div className="flex-1 min-w-0 pr-3"><h4 className="text-sm font-medium text-text-secondary leading-tight">{_0x3da481.name}</h4><p className="text-xs text-text-muted mt-0.5 leading-snug">{_0x3da481.description}</p></div><div className="flex shrink-0 rounded-lg border border-border-default overflow-hidden bg-surface-overlay/30"><button onClick={() => _0x484e69(_0x3da481.id, "deny")} title="Reddet" className={"p-1.5 transition-colors cursor-pointer border-r border-border-default " + (_0x3da481.state === "deny" ? "bg-red-500 text-white" : "text-text-tertiary hover:bg-red-500/20 hover:text-red-400")}><_0x119ace className="w-4 h-4" /></button><button onClick={() => _0x484e69(_0x3da481.id, "neutral")} title="Devral" className={"p-1.5 transition-colors cursor-pointer border-r border-border-default " + (_0x3da481.state === "neutral" ? "bg-surface-inset text-text-primary" : "text-text-tertiary hover:bg-surface-inset/70 hover:text-text-secondary")}><_0x2cf52a className="w-4 h-4" /></button><button onClick={() => _0x484e69(_0x3da481.id, "allow")} title="İzin Ver" className={"p-1.5 transition-colors cursor-pointer " + (_0x3da481.state === "allow" ? "bg-green-500 text-white" : "text-text-tertiary hover:bg-green-500/20 hover:text-green-400")}><_0x165a74 className="w-4 h-4" /></button></div></div>);
C.displayName = "PermissionRow";
const M = _0x52dd81.memo(({
  target: _0x18ab04,
  isActive: _0x3304a4,
  onSelect: _0x5d7436,
  onRemove: _0x6e0dbd,
  isRemoving: _0x2ba75d,
  removable: _0x213c88
}) => {
  const {
    t: _0x32cb81
  } = _0x138d6e();
  return <div onClick={() => _0x5d7436(_0x18ab04)} role="button" tabIndex={0} onKeyDown={_0xb53e2c => {
    if (_0xb53e2c.key === "Enter" || _0xb53e2c.key === " ") {
      _0xb53e2c.preventDefault();
      _0x5d7436(_0x18ab04);
    }
  }} className={"w-full p-2 cursor-pointer rounded-lg border transition-colors text-left " + (_0x3304a4 ? "bg-accent-subtle border-accent-primary/40" : "bg-surface-overlay/50 border-border-default hover:bg-surface-inset/70")}><div className="flex items-center gap-1.5">{_0x18ab04.type === "role" ? <div className="w-6 h-6 rounded-full border border-border-default shrink-0" style={{
        backgroundColor: _0x18ab04.color === 0 ? "#94a3b8" : "#" + _0x18ab04.color?.toString(16).padStart(6, "0")
      }} /> : _0x18ab04.avatar_url ? <img src={_0x18ab04.avatar_url} alt={_0x18ab04.name} className="w-6 h-6 rounded-full object-cover shrink-0" /> : <div className="w-6 h-6 rounded-full bg-surface-inset flex items-center justify-center text-text-secondary font-medium text-sm shrink-0">{_0x18ab04.name[0]?.toUpperCase()}</div>}<div className="flex-1"><div className="flex items-center gap-2"><span className={"text-sm font-medium " + (_0x3304a4 ? "text-blue-200" : "text-text-secondary")}>{_0x18ab04.name}</span>{_0x18ab04.type === "role" && _0x18ab04.is_primary && <_Component className="w-3 h-3 text-orange-400" />}{_0x18ab04.type === "member" && _0x18ab04.isOwner && <_ className="w-3 h-3 text-amber-400" />}</div>{_0x18ab04.type === "member" && _0x18ab04.username && <div className="text-xs text-text-tertiary">@{_0x18ab04.username}</div>}</div><span className={"text-xs px-2 py-1 rounded " + (_0x18ab04.type === "role" ? "text-blue-400 bg-blue-500/20" : "text-purple-400 bg-purple-500/20")}>{_0x18ab04.type === "role" ? _0x32cb81("roles.role") : _0x32cb81("roles.member")}</span>{_0x213c88 && <button onClick={_0x33fdb3 => {
        _0x33fdb3.stopPropagation();
        _0x6e0dbd(_0x18ab04);
      }} disabled={_0x2ba75d} className="p-1 rounded hover:bg-red-500/20 text-text-tertiary hover:text-red-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" title={_0x32cb81("roles.removeAccess")}>{_0x2ba75d ? <div className="w-4 h-4 border-2 border-red-400 border-t-transparent rounded-full animate-spin" /> : <_0x119ace className="w-4 h-4" />}</button>}</div></div>;
});
M.displayName = "TargetItem";
const R = _0x52dd81.forwardRef(({
  guildId: _0x46cb6e,
  channelId: _0xc22749,
  categoryId: _0x47d2fe,
  channelPermissions: _0x32791d,
  loadingChannelPermissions: _0x2daf79,
  onGiveAccess: _0x3ea837,
  onDirtyChange: _0x325101,
  onPermissionRemoved: _0x3af487,
  entityType: _0x7be5e7 = "channel",
  channelType: _0x16d74a = "text"
}, _0x1694f1) => {
  const {
    t: _0x49b245
  } = _0x138d6e();
  const _0x231eb8 = _0x7be5e7 === "category" ? _0x47d2fe : _0xc22749;
  const [_0x48a8c9, _0xcc9805] = _0x52dd81.useState([]);
  const [_0x47de4c, _0x5717e6] = _0x52dd81.useState([]);
  const [_0x5862f0, _0x9621e2] = _0x52dd81.useState(null);
  const [_0x1fc31e, _0x57e54d] = _0x52dd81.useState([]);
  const [_0x18e1c0, _0x102732] = _0x52dd81.useState(null);
  const [_0xbb4352, _0x1bc51a] = _0x52dd81.useState(null);
  const _0x5889a8 = _0x52dd81.useMemo(() => [{
    id: "access",
    label: _0x49b245("roles.permissionAccess"),
    description: _0x49b245("roles.permissionAccessDescription"),
    permissions: ["VIEW_CHANNEL"]
  }, {
    id: "messaging",
    label: _0x49b245("roles.permissionMessaging"),
    description: _0x49b245("roles.permissionMessagingDescription"),
    permissions: ["SEND_MESSAGES", "READ_MESSAGE_HISTORY", "EMBED_LINKS", "ATTACH_FILES", "SEND_POLLS"]
  }, {
    id: "threads",
    label: _0x49b245("roles.permissionThreads"),
    description: _0x49b245("roles.permissionThreadsDescription"),
    permissions: ["CREATE_THREADS", "SEND_MESSAGES_IN_THREADS", "MANAGE_THREADS"]
  }, {
    id: "interaction",
    label: _0x49b245("roles.permissionInteraction"),
    description: _0x49b245("roles.permissionInteractionDescription"),
    permissions: ["ADD_REACTIONS", "MENTION_EVERYONE"]
  }, {
    id: "moderation",
    label: _0x49b245("roles.permissionModeration"),
    description: _0x49b245("roles.permissionModerationDescription"),
    permissions: ["MANAGE_MESSAGES"]
  }], [_0x49b245]);
  const _0x4d78ab = _0x52dd81.useMemo(() => [{
    id: "access",
    label: _0x49b245("roles.permissionVoiceAccess"),
    description: _0x49b245("roles.permissionVoiceAccessDescription"),
    permissions: ["VIEW_CHANNEL", "CONNECT"]
  }, {
    id: "voice",
    label: _0x49b245("roles.permissionVoice"),
    description: _0x49b245("roles.permissionVoiceDescription"),
    permissions: ["SPEAK", "USE_VAD", "PRIORITY_SPEAKER"]
  }, {
    id: "video",
    label: _0x49b245("roles.permissionVideoStream"),
    description: _0x49b245("roles.permissionVideoStreamDescription"),
    permissions: ["STREAM", "SHARE_SCREEN", "SHARE_CAMERA"]
  }, {
    id: "messaging",
    label: _0x49b245("roles.permissionMessaging"),
    description: _0x49b245("roles.permissionMessagingDescription"),
    permissions: ["SEND_MESSAGES", "READ_MESSAGE_HISTORY", "EMBED_LINKS", "ATTACH_FILES"]
  }, {
    id: "interaction",
    label: _0x49b245("roles.permissionInteraction"),
    description: _0x49b245("roles.permissionInteractionDescription"),
    permissions: ["ADD_REACTIONS", "MENTION_EVERYONE"]
  }, {
    id: "moderation",
    label: _0x49b245("roles.permissionVoiceModeration"),
    description: _0x49b245("roles.permissionVoiceModerationDescription"),
    permissions: ["MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "MANAGE_MESSAGES"]
  }], [_0x49b245]);
  const _0x236ed6 = _0x52dd81.useMemo(() => [{
    id: "app-access",
    label: "Uygulama erişimi",
    description: "Kanalı görüntüleme ve uygulama üzerinde işlem yapma izinleri.",
    permissions: ["VIEW_CHANNEL", "SEND_MESSAGES"]
  }, {
    id: "app-management",
    label: "Kanal yönetimi",
    description: "Uygulama kanalını ve odalarını yönetme.",
    permissions: ["MANAGE_CHANNELS"]
  }], []);
  const _0x336ac8 = _0x52dd81.useMemo(() => _0x16d74a === "app" ? _0x236ed6 : _0x16d74a === "voice" ? _0x4d78ab : _0x5889a8, [_0x16d74a, _0x236ed6, _0x4d78ab, _0x5889a8]);
  const _0x24b88c = _0x52dd81.useMemo(() => _0x336ac8.flatMap(_0x2cea46 => _0x2cea46.permissions), [_0x336ac8]);
  const _0x1a1c5a = _0x52dd81.useCallback((_0x1b508e, _0x322ae7) => {
    const _0x419c8d = [];
    const _0x3dc87e = [];
    const _0x524f93 = BigInt(_0x1b508e);
    const _0x15f408 = BigInt(_0x322ae7);
    _0x24b88c.forEach(_0x40d596 => {
      const _0x513e91 = BigInt(_0x186898[_0x40d596]);
      if (_0x524f93 & _0x513e91) {
        _0x419c8d.push(_0x40d596.toLowerCase());
      } else if (_0x15f408 & _0x513e91) {
        _0x3dc87e.push(_0x40d596.toLowerCase());
      }
    });
    return {
      allowPermissions: _0x419c8d,
      denyPermissions: _0x3dc87e
    };
  }, [_0x24b88c]);
  const _0x4e5eff = _0x52dd81.useMemo(() => _0x24b88c.map(_0x1e52af => ({
    id: _0x1e52af.toLowerCase(),
    name: _0x16d74a === "app" && _0x1e52af === "SEND_MESSAGES" ? "Uygulamayı kullan" : _0x49b245("roles.permLabel." + _0x1e52af, _0x2b5005[_0x1e52af]),
    description: _0x16d74a === "app" && _0x1e52af === "SEND_MESSAGES" ? "Oyunlara oyuncu olarak katılma, ortak veriyi değiştirme ve uygulama işlemlerini kullanma." : _0x49b245("roles.permDesc." + _0x1e52af, _0x4651a1[_0x1e52af]),
    state: "neutral"
  })), [_0x24b88c, _0x49b245, _0x16d74a]);
  _0x52dd81.useEffect(() => {
    if (!_0x5862f0) {
      _0x5717e6(_0x4e5eff);
      _0x57e54d(_0x4e5eff);
      return;
    }
    const _0x12962b = _0x32791d?.permissions?.find(_0x1f769a => String(_0x1f769a.target_id) === _0x5862f0.id && _0x1f769a.type === _0x5862f0.type);
    if (_0x12962b) {
      const {
        allowPermissions: _0x5e8ac3,
        denyPermissions: _0x59c5d3
      } = _0x1a1c5a(_0x12962b.allow_permissions, _0x12962b.deny_permissions);
      const _0x359b2d = _0x4e5eff.map(_0x2b9bee => _0x5e8ac3.includes(_0x2b9bee.id) ? {
        ..._0x2b9bee,
        state: "allow"
      } : _0x59c5d3.includes(_0x2b9bee.id) ? {
        ..._0x2b9bee,
        state: "deny"
      } : {
        ..._0x2b9bee,
        state: "neutral"
      });
      _0x5717e6(_0x359b2d);
      _0x57e54d(_0x359b2d);
    } else {
      _0x5717e6(_0x4e5eff);
      _0x57e54d(_0x4e5eff);
    }
  }, [_0x5862f0, _0x32791d, _0x4e5eff, _0x1a1c5a]);
  const _0x3e141a = _0x52dd81.useRef(false);
  const _0x21b2c1 = _0x52dd81.useRef(false);
  _0x52dd81.useEffect(() => {
    if (_0x21b2c1.current) {
      return;
    }
    if (!_0x32791d?.permissions) {
      return;
    }
    const _0x2ae95c = _0x32791d.permissions.filter(_0x4e4e42 => _0x4e4e42.target_name && _0x4e4e42.target_name.trim()).map(_0x51201b => {
      const _0x640669 = _0x18e1c0 ? String(_0x18e1c0.user_id ?? _0x18e1c0.id) : null;
      return {
        id: String(_0x51201b.target_id),
        type: _0x51201b.type,
        name: _0x51201b.target_name,
        avatar_url: _0x51201b.avatar_url || null,
        color: _0x51201b.type === "role" ? 5793266 : undefined,
        isOwner: _0x51201b.type === "member" && _0x640669 === String(_0x51201b.target_id),
        is_primary: false,
        allow_permissions: _0x51201b.allow_permissions,
        deny_permissions: _0x51201b.deny_permissions
      };
    });
    _0xcc9805(_0x2ae95c);
    if (_0x3e141a.current) {
      if (!_0x2ae95c.some(_0x4cdca6 => _0x4cdca6.id === _0x5862f0?.id && _0x4cdca6.type === _0x5862f0?.type) && _0x2ae95c.length > 0) {
        _0x9621e2(_0x2ae95c[0]);
      }
    } else {
      if (_0x2ae95c.length > 0) {
        _0x9621e2(_0x2ae95c[0]);
      }
      _0x3e141a.current = true;
    }
  }, [_0x32791d?.permissions, _0x18e1c0, _0x5862f0]);
  _0x52dd81.useEffect(() => {
    let _0x1ef3aa = false;
    (async () => {
      if (_0x46cb6e) {
        try {
          const _0x29b926 = await _0x30ee2c(_0x46cb6e, {
            flat: true
          });
          if (_0x1ef3aa) {
            return;
          }
          const _0x1f2bba = _0x29b926?.members?.find(_0x310220 => _0x310220.isOwner) || null;
          if (_0x1f2bba) {
            _0x102732(_0x1f2bba);
          }
        } catch (_0x3803d4) {
          console.error("Sunucu sahibi bilgileri yüklenirken hata:", _0x3803d4);
        }
      }
    })();
    return () => {
      _0x1ef3aa = true;
    };
  }, [_0x46cb6e]);
  const _0x38d086 = _0x52dd81.useCallback((_0x426fa4, _0x1510ec) => {
    _0x5717e6(_0x42fe89 => _0x42fe89.map(_0xd98e90 => _0xd98e90.id === _0x426fa4 ? {
      ..._0xd98e90,
      state: _0x1510ec
    } : _0xd98e90));
  }, []);
  const _0x2f0e60 = _0x52dd81.useCallback(async _0xc0f73f => {
    if (!_0x46cb6e || !_0x231eb8) {
      return;
    }
    const _0x523a80 = _0x32791d?.permissions?.find(_0x37f198 => String(_0x37f198.target_id) === _0xc0f73f.id && _0x37f198.type === _0xc0f73f.type);
    if (_0x523a80) {
      _0x21b2c1.current = true;
      _0x1bc51a(_0x523a80.id);
      try {
        if (_0x7be5e7 === "category") {
          await _0x28c174(_0x46cb6e, _0x231eb8, _0x523a80.id);
        } else {
          await _0xab2543(_0x46cb6e, _0x231eb8, _0x523a80.id);
        }
        _0x31c33c.success(_0x49b245("roles.accessRemoved", {
          name: _0xc0f73f.name
        }));
        const _0x4d310e = _0x48a8c9.filter(_0x5829d3 => _0x5829d3.id !== _0xc0f73f.id || _0x5829d3.type !== _0xc0f73f.type);
        _0xcc9805(_0x4d310e);
        if (_0x5862f0?.id === _0xc0f73f.id && _0x5862f0?.type === _0xc0f73f.type) {
          _0x9621e2(_0x4d310e.length > 0 ? _0x4d310e[0] : null);
        }
        _0x3af487?.();
      } catch (_0x2b01e0) {} finally {
        _0x1bc51a(null);
        _0x21b2c1.current = false;
      }
    } else {
      _0x31c33c.error(_0x49b245("roles.permissionNotFound"));
    }
  }, [_0x46cb6e, _0x231eb8, _0x7be5e7, _0x32791d, _0x5862f0, _0x48a8c9, _0x3af487]);
  const _0x3bc3a9 = _0x52dd81.useMemo(() => _0x47de4c.length !== 0 && _0x1fc31e.length !== 0 && _0x47de4c.some(_0x5e33b9 => {
    const _0x26bc2a = _0x1fc31e.find(_0x50f0ea => _0x50f0ea.id === _0x5e33b9.id);
    return _0x26bc2a && _0x26bc2a.state !== _0x5e33b9.state;
  }), [_0x47de4c, _0x1fc31e]);
  _0x52dd81.useEffect(() => {
    _0x325101?.(_0x3bc3a9);
  }, [_0x3bc3a9, _0x325101]);
  const _0x5718c4 = _0x52dd81.useCallback(async () => {
    if (_0x5862f0 && _0x46cb6e && _0x231eb8) {
      try {
        const _0x4901c3 = _0x32791d?.permissions?.find(_0x4a4ac7 => String(_0x4a4ac7.target_id) === _0x5862f0.id && _0x4a4ac7.type === _0x5862f0.type);
        if (!_0x4901c3) {
          console.error("İzin kaydı bulunamadı:", _0x5862f0.id, _0x5862f0.type);
          throw new Error(_0x49b245("roles.permissionNotFound"));
        }
        let _0xc9376d = 0x0n;
        let _0x5c4fe5 = 0x0n;
        _0x47de4c.forEach(_0x5985d1 => {
          const _0x2d087c = _0x24b88c.find(_0x255dd2 => _0x255dd2.toLowerCase() === _0x5985d1.id);
          if (_0x2d087c) {
            const _0x11d7a0 = BigInt(_0x186898[_0x2d087c]);
            if (_0x5985d1.state === "allow") {
              _0xc9376d |= _0x11d7a0;
            } else if (_0x5985d1.state === "deny") {
              _0x5c4fe5 |= _0x11d7a0;
            }
          } else {
            console.warn("Ã¢Å¡Â\xA0Ã¯Â¸Â Permission key bulunamadı:", _0x5985d1.id, "Available keys:", _0x24b88c);
          }
        });
        if (_0x7be5e7 === "category") {
          await _0x12857b(_0x46cb6e, _0x231eb8, _0x4901c3.id, Number(_0xc9376d), Number(_0x5c4fe5));
        } else {
          await _0xbd2f92(_0x46cb6e, _0x231eb8, _0x4901c3.id, Number(_0xc9376d), Number(_0x5c4fe5));
        }
        _0x57e54d(_0x47de4c);
      } catch (_0x611239) {
        console.error("İzin güncelleme hatası:", _0x611239);
        throw _0x611239;
      }
    } else {
      console.error("Eksik parametreler:", {
        activePermissionTarget: _0x5862f0,
        guildId: _0x46cb6e,
        entityId: _0x231eb8,
        entityType: _0x7be5e7
      });
    }
  }, [_0x5862f0, _0x46cb6e, _0x231eb8, _0x7be5e7, _0x32791d, _0x47de4c, _0x24b88c]);
  const _0x17ff6f = _0x52dd81.useCallback(() => {
    _0x5717e6(_0x1fc31e);
  }, [_0x1fc31e]);
  _0x52dd81.useImperativeHandle(_0x1694f1, () => ({
    savePermissions: _0x5718c4,
    resetPermissions: _0x17ff6f
  }), [_0x5718c4, _0x17ff6f]);
  if (_0x2daf79) {
    return <div className="w-full space-y-6 mt-6"><div className="flex items-center justify-center py-12"><div className="size-8 border-[3px] border-border-default border-t-accent-primary rounded-full animate-spin" /></div></div>;
  } else {
    return <div className="w-full space-y-6 mt-6"><div><h2 className="text-base leading-snug font-semibold text-text-primary flex items-center gap-2"><_0x212889 icon="solar:shield-bold-duotone" className="size-4 text-text-tertiary" />{_0x49b245(_0x7be5e7 === "category" ? "roles.category" : "roles.channel")} {_0x49b245("roles.permissionsLabel")}</h2><p className="text-sm leading-snug text-text-tertiary mt-1">{_0x49b245("roles.managePermissionsDescription")}</p></div><div className="grid grid-cols-1 xl:grid-cols-6 gap-4"><div className="xl:col-span-2 space-y-2 xl:sticky xl:top-6 xl:self-start"><div className="flex items-center gap-2"><_0x212889 icon="solar:users-group-rounded-bold-duotone" className="w-5 h-5 text-blue-400" /><h3 className="text-base leading-snug font-medium text-text-secondary">{_0x49b245("roles.selectRoleOrMember")}</h3></div>{_0x3ea837 && <button onClick={_0x3ea837} className="w-full mt-2 px-4 py-2.5 bg-accent-primary/70 hover:bg-accent-primary text-black cursor-pointer rounded-lg text-sm font-medium transition-colors">{_0x49b245("roles.giveAccess")}</button>}{_0x48a8c9.length > 0 && <div className="mt-4 space-y-4">{_0x48a8c9.filter(_0x2f83ec => _0x2f83ec.type === "role" && _0x2f83ec.name === "all").length > 0 && <div><div className="text-xs font-medium text-text-muted mb-2">@all</div>{_0x48a8c9.filter(_0x132e66 => _0x132e66.type === "role" && _0x132e66.name === "all").map(_0x27417d => {
                const _0x41de54 = _0x5862f0?.id === _0x27417d.id && _0x5862f0?.type === _0x27417d.type;
                const _0x53c920 = _0x32791d?.permissions?.find(_0x193acb => String(_0x193acb.target_id) === _0x27417d.id && _0x193acb.type === _0x27417d.type);
                const _0x51b8c2 = _0xbb4352 === _0x53c920?.id;
                return <M target={_0x27417d} isActive={_0x41de54} onSelect={_0x9621e2} onRemove={_0x2f0e60} isRemoving={_0x51b8c2} removable={false} key={_0x27417d.type + "-" + _0x27417d.id} />;
              })}</div>}{_0x48a8c9.filter(_0x55c45b => _0x55c45b.type === "role" && _0x55c45b.name !== "all").length > 0 && <div><div className="text-xs font-medium text-text-muted mb-2">{_0x49b245("roles.roles")}</div><div className="space-y-1.5">{_0x48a8c9.filter(_0x2e3b19 => _0x2e3b19.type === "role" && _0x2e3b19.name !== "all").map(_0x3d9178 => {
                  const _0x190d56 = _0x5862f0?.id === _0x3d9178.id && _0x5862f0?.type === _0x3d9178.type;
                  const _0x2de628 = _0x32791d?.permissions?.find(_0x437f7e => String(_0x437f7e.target_id) === _0x3d9178.id && _0x437f7e.type === _0x3d9178.type);
                  const _0x4d01da = _0xbb4352 === _0x2de628?.id;
                  return <M target={_0x3d9178} isActive={_0x190d56} onSelect={_0x9621e2} onRemove={_0x2f0e60} isRemoving={_0x4d01da} removable={true} key={_0x3d9178.type + "-" + _0x3d9178.id} />;
                })}</div></div>}{_0x48a8c9.filter(_0x4b8b43 => _0x4b8b43.type === "member").length > 0 && <div><div className="text-xs font-medium text-text-muted mb-2">{_0x49b245("roles.members")}</div><div className="space-y-1.5">{_0x48a8c9.filter(_0x348ede => _0x348ede.type === "member").map(_0x8af439 => {
                  const _0x3b829a = _0x5862f0?.id === _0x8af439.id && _0x5862f0?.type === _0x8af439.type;
                  const _0x399c2b = _0x32791d?.permissions?.find(_0x26576f => String(_0x26576f.target_id) === _0x8af439.id && _0x26576f.type === _0x8af439.type);
                  const _0x2f6d31 = _0xbb4352 === _0x399c2b?.id;
                  return <M target={_0x8af439} isActive={_0x3b829a} onSelect={_0x9621e2} onRemove={_0x2f0e60} isRemoving={_0x2f6d31} removable={true} key={_0x8af439.type + "-" + _0x8af439.id} />;
                })}</div></div>}</div>}</div><div className="xl:col-span-4 space-y-2"><div className="flex items-center gap-2"><_0x212889 icon="solar:shield-bold-duotone" className="w-5 h-5 text-green-400" /><h3 className="text-base leading-snug font-medium text-text-secondary">{_0x49b245("roles.permissionsLabel")}</h3>{_0x5862f0 && <span className="ml-auto flex items-center gap-2 text-sm text-text-tertiary"><span className={"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium " + (_0x5862f0.type === "role" ? "text-blue-300 bg-blue-500/15" : "text-purple-300 bg-purple-500/15")}>{_0x5862f0.type === "role" ? <div className="w-3.5 h-3.5 rounded-full border border-border-default shrink-0" style={{
                  backgroundColor: _0x5862f0.color === 0 ? "#94a3b8" : "#" + _0x5862f0.color?.toString(16).padStart(6, "0")
                }} /> : _0x5862f0.avatar_url ? <img src={_0x5862f0.avatar_url} alt="" className="w-3.5 h-3.5 rounded-full object-cover" /> : <div className="w-3.5 h-3.5 rounded-full bg-surface-inset flex items-center justify-center text-[8px] text-text-secondary font-medium">{_0x5862f0.name[0]?.toUpperCase()}</div>}{_0x5862f0.name}</span></span>}</div>{_0x48a8c9.length > 0 ? <_0xbb26ee.Fragment><div className="space-y-6 mt-4">{_0x336ac8.map(_0x56a9d8 => {
                const _0x410417 = _0x47de4c.filter(_0xbf42c1 => _0x56a9d8.permissions.some(_0x105237 => _0x105237.toLowerCase() === _0xbf42c1.id));
                if (_0x410417.length === 0) {
                  return null;
                } else {
                  return <div className="bg-surface-overlay/40 rounded-xl border border-border-default overflow-hidden" key={_0x56a9d8.id}><div className="px-4 py-3 bg-surface-inset/30 border-b border-border-default/50"><h4 className="text-base font-semibold text-text-primary">{_0x56a9d8.label}</h4><p className="text-xs text-text-muted mt-0.5">{_0x56a9d8.description}</p></div><div>{_0x410417.map(_0x5ec223 => <C permission={_0x5ec223} onChangeState={_0x38d086} key={_0x5ec223.id} />)}</div></div>;
                }
              })}</div></_0xbb26ee.Fragment> : <div className="text-center py-16"><div className="w-20 h-20 mx-auto rounded-full bg-surface-overlay/30 flex items-center justify-center mb-6"><_0x212889 icon="solar:shield-bold-duotone" className="w-10 h-10 text-text-muted" /></div><h3 className="text-xl font-semibold text-text-secondary mb-3">{_0x49b245("roles.editPermissions")}</h3><p className="text-text-tertiary max-w-md mx-auto mb-5">{_0x49b245("roles.editPermissionsDescription")}</p>{_0x3ea837 && <button onClick={_0x3ea837} className="px-5 py-2.5 bg-accent-primary/70 hover:bg-accent-primary text-black cursor-pointer rounded-lg text-sm font-medium transition-colors">{_0x49b245("roles.giveAccess")}</button>}</div>}</div></div></div>;
  }
});
R.displayName = "PermissionManager";
export { A as G, R as P };