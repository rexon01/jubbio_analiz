import { r as _0xb34cec, b as _0x4f4fbb, aP as _0x1a636d, h as _0x20b80d, j as _0x586263, I as _0x39d628, B as _0x1cf66c, X as _0x2b0085 } from "./index-cQfEKR1W.js";
import { A as _0x21cb17, a as _0x551343, b as _0x43c257 } from "./avatar-C-4BWxT3.js";
import { I as _0x54cf9b } from "./input-AMyERYwJ.js";
import { C as _0x3c4646 } from "./ConfirmDialog-B4gIndKy.js";
import { L as _0x29fe3c } from "./loader-circle-CTtxa1g9.js";
import "./alert-dialog-BZuoGg7O.js";
import "./index-yuEHo9bu.js";
import "./index-Oyyh46KT.js";
const _Component = _0xb34cec.memo(({
  user: _0xecb462,
  onUnblock: _0xf470a0,
  isLoading: _0x5136ac
}) => {
  const {
    t: _0x2164ef
  } = _0x4f4fbb("privacy");
  const _0xfc9340 = _0xb34cec.useMemo(() => (_0xecb462.display_name || _0xecb462.username).split(" ").filter(Boolean).map(_0x4a869c => _0x4a869c[0]).join("").slice(0, 2).toUpperCase(), [_0xecb462]);
  return <div className="flex items-center gap-3 py-3.5 border-b border-border-default last:border-b-0"><_0x21cb17 className="size-12">{_0xecb462.avatar_url ? <_0x551343 src={_0xecb462.avatar_url} alt={_0xecb462.display_name || _0xecb462.username} /> : <_0x43c257 className="bg-surface-inset text-text-secondary text-sm font-semibold">{_0xfc9340}</_0x43c257>}</_0x21cb17><div className="flex-1 min-w-0"><p className="text-[15px] font-semibold text-text-secondary truncate">{_0xecb462.display_name || _0xecb462.username}</p><p className="text-[13px] text-text-muted truncate">@{_0xecb462.username}</p></div><button onClick={_0xf470a0} disabled={_0x5136ac} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-inset/15 border border-border-strong/30 text-text-secondary text-[13px] font-medium hover:bg-emerald-500/15 hover:border-emerald-500/30 hover:text-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed transition-colors cursor-pointer">{_0x5136ac ? <_0x29fe3c className="size-3.5 animate-spin" /> : <_0x39d628 icon="solar:forbidden-bold-duotone" className="size-3.5" />}<span>{_0x2164ef("unblock")}</span></button></div>;
});
_Component.displayName = "BlockedUserRow";
const b = _0xb34cec.memo(() => {
  const {
    t: _0x137b93
  } = _0x4f4fbb("privacy");
  const _0x181322 = _0x1a636d(_0x3d9b56 => _0x3d9b56.blockedUsers);
  const [_0x5b615e, _0x4562e9] = _0xb34cec.useState(null);
  const [_0x535681, _0x3ba498] = _0xb34cec.useState(null);
  const [_0x151867, _0x20b644] = _0xb34cec.useState("");
  const [_0x3e23e9, _0x1b7462] = _0xb34cec.useState(false);
  const _0x521307 = _0xb34cec.useMemo(() => {
    if (!_0x151867.trim()) {
      return _0x181322;
    }
    const _0x26ef0a = _0x151867.toLowerCase();
    return _0x181322.filter(_0x3d78e8 => _0x3d78e8.display_name?.toLowerCase().includes(_0x26ef0a) || _0x3d78e8.username?.toLowerCase().includes(_0x26ef0a));
  }, [_0x181322, _0x151867]);
  const _0x1b6b07 = _0xb34cec.useCallback(async () => {
    if (!_0x535681 || _0x5b615e !== null) {
      return;
    }
    const _0x3ab96c = _0x535681.id;
    _0x3ba498(null);
    _0x4562e9(_0x3ab96c);
    try {
      await _0x20b80d.unblockUser(_0x3ab96c);
    } catch (_0x3d0330) {
      console.error("Failed to unblock user:", _0x3d0330);
    } finally {
      _0x4562e9(null);
    }
  }, [_0x535681, _0x5b615e]);
  return <div className="space-y-8"><section><div className="mb-4 flex items-center justify-between"><div><div className="flex items-center gap-2"><_0x39d628 icon="solar:shield-bold-duotone" className="size-4 text-text-tertiary" /><div className="text-base leading-snug font-semibold text-text-secondary">{_0x137b93("blockedUsers")}</div></div><p className="text-sm leading-snug text-text-muted mt-0.5">{_0x181322.length > 0 ? _0x137b93("blockedUsersDescCount", {
              count: _0x181322.length
            }) : _0x137b93("blockedUsersDescEmpty")}</p></div>{_0x181322.length > 0 && (_0x3e23e9 ? <div className="relative flex items-center gap-1.5"><div className="relative"><_0x39d628 icon="solar:magnifer-bold-duotone" className="absolute left-2.5 top-1/2 -translate-y-1/2 text-text-tertiary w-3.5 h-3.5" /><_0x54cf9b placeholder={_0x137b93("searchUser")} value={_0x151867} onChange={_0x2c9279 => _0x20b644(_0x2c9279.target.value)} onKeyDown={_0x2f825e => {
              if (_0x2f825e.key === "Escape") {
                _0x1b7462(false);
                _0x20b644("");
              }
            }} className="pl-8 h-8 w-52 bg-surface-overlay/50 border-border-strong text-xs" autoFocus={true} /></div><_0x1cf66c variant="ghost" size="sm" onClick={() => {
            _0x1b7462(false);
            _0x20b644("");
          }} className="h-8 w-8 p-0 text-text-tertiary hover:text-text-secondary"><_0x2b0085 className="w-3.5 h-3.5" /></_0x1cf66c></div> : <_0x1cf66c variant="ghost" size="sm" onClick={() => _0x1b7462(true)} className="h-8 w-8 p-0 text-text-tertiary hover:text-text-secondary hover:bg-interactive-hover"><_0x39d628 icon="solar:magnifer-bold-duotone" className="w-3.5 h-3.5" /></_0x1cf66c>)}</div>{_0x151867.trim() && <div className="flex items-center gap-2 mb-3"><span className="inline-flex items-center gap-1.5 text-xs bg-surface-overlay/60 border border-border-default rounded-full px-3 py-1 text-text-secondary"><_0x39d628 icon="solar:magnifer-bold-duotone" className="w-3 h-3 text-text-tertiary" /><span className="font-medium">{_0x521307.length}</span> {_0x137b93("resultsFound")}</span><button onClick={() => {
          _0x20b644("");
          _0x1b7462(false);
        }} className="text-xs text-text-tertiary hover:text-text-secondary hover:bg-interactive-hover/60 rounded-md px-2.5 py-1 transition-colors cursor-pointer">{_0x137b93("showAll")}</button></div>}<div className="rounded-lg border border-border-default bg-surface-raised/40 overflow-hidden">{_0x181322.length === 0 ? <div className="p-12 text-center"><div className="flex items-center justify-center mb-4"><_0x39d628 icon="solar:ghost-bold-duotone" className="w-16 h-16 text-text-muted" /></div><h3 className="text-lg font-semibold text-text-secondary mb-2">{_0x137b93("noBlockedUsers")}</h3><p className="text-text-tertiary text-sm max-w-md mx-auto">{_0x137b93("noBlockedUsersDesc")}</p></div> : _0x521307.length === 0 ? <div className="p-12 text-center"><div className="flex items-center justify-center mb-4"><_0x39d628 icon="solar:ghost-bold-duotone" className="w-16 h-16 text-text-muted" /></div><h3 className="text-lg font-semibold text-text-secondary mb-2">{_0x137b93("noResults")}</h3><p className="text-text-tertiary text-sm max-w-md mx-auto mb-4">{_0x137b93("noResultsUser", {
              query: _0x151867
            })}</p><button onClick={() => {
            _0x20b644("");
            _0x1b7462(false);
          }} className="h-8 px-4 text-xs text-text-secondary bg-surface-overlay/60 hover:bg-interactive-active border border-border-default rounded-md transition-colors cursor-pointer">{_0x137b93("showAllCapital")}</button></div> : <div className="px-4">{_0x521307.map(_0x3af307 => <_Component user={_0x3af307} onUnblock={() => _0x3ba498(_0x3af307)} isLoading={_0x5b615e === _0x3af307.id} key={_0x3af307.id} />)}</div>}</div></section><_0x3c4646 open={!!_0x535681} onOpenChange={_0x248c4b => !_0x248c4b && _0x3ba498(null)} onConfirm={_0x1b6b07} variant="default" icon={<_0x39d628 icon="solar:forbidden-bold-duotone" className="size-5 text-emerald-400" />} title={_0x137b93("unblock")} description={<_0x586263.Fragment><span className="font-medium text-text-secondary">{_0x535681?.display_name || _0x535681?.username}</span> {_0x137b93("unblockConfirmDesc")}</_0x586263.Fragment>} confirmText={_0x137b93("unblock")} cancelText={_0x137b93("cancel")} /></div>;
});
b.displayName = "BlockedUsersSettings";
export { b as default };