import { R as _0x2f2500, b as _0x448a60, r as _0x10d477, j as _0x50026e, I as _0x496d34, bV as _0x215bf6, d as _0x197c5c, e as _0x4256e2, d8 as _0x29ca25, P as _0x379547, h as _0x53c347, B as _0x50ca99, an as _0x638679, X as _0x4301b1, as as _0x58da4b, at as _0x59a587, au as _0x260132, av as _0x23b472, aw as _0x38c82a } from "./index-cQfEKR1W.js";
import { O as _0x332241, F as _0x340845 } from "./soundboardFx-C2LP-Hjs.js";
import { C as _0x3eb281 } from "./ConfirmDialog-B4gIndKy.js";
import { R as _0x17e844 } from "./ReportDialog-ByLH3UTW.js";
import { r as _0x1c6d29 } from "./report-SxkUMari.js";
import { L as _0x18c9f8 } from "./loader-circle-CTtxa1g9.js";
import { A as _0x450580 } from "./arrow-up-B3WqkBSJ.js";
const w = [{
  value: "spam",
  labelKey: "report.reasons.spam",
  descKey: "report.reasons.spamDesc",
  icon: <_0x496d34 icon="solar:danger-triangle-bold-duotone" className="size-4" />
}, {
  value: "harassment",
  labelKey: "report.reasons.harassment",
  descKey: "report.reasons.harassmentDesc",
  icon: <_0x496d34 icon="solar:chat-square-bold-duotone" className="size-4" />
}, {
  value: "hate_speech",
  labelKey: "report.reasons.hateSpeech",
  descKey: "report.reasons.hateSpeechDesc",
  icon: <_0x496d34 icon="solar:shield-warning-bold-duotone" className="size-4" />
}, {
  value: "nsfw",
  labelKey: "report.reasons.nsfw",
  descKey: "report.reasons.nsfwDesc",
  icon: <_0x496d34 icon="solar:shield-bold-duotone" className="size-4" />
}, {
  value: "underage",
  labelKey: "report.reasons.underage",
  descKey: "report.reasons.underageDesc",
  icon: <_0x496d34 icon="solar:user-bold-duotone" className="size-4" />
}, {
  value: "self_harm",
  labelKey: "report.reasons.selfHarm",
  descKey: "report.reasons.selfHarmDesc",
  icon: <_0x496d34 icon="solar:heart-bold-duotone" className="size-4" />
}, {
  value: "violence",
  labelKey: "report.reasons.violence",
  descKey: "report.reasons.violenceDesc",
  icon: <_0x496d34 icon="solar:shield-warning-bold-duotone" className="size-4" />
}, {
  value: "impersonation",
  labelKey: "report.reasons.impersonation",
  descKey: "report.reasons.impersonationDesc",
  icon: <_0x496d34 icon="solar:user-cross-bold-duotone" className="size-4" />
}, {
  value: "other",
  labelKey: "report.reasons.other",
  descKey: "report.reasons.otherDesc",
  icon: <_0x496d34 icon="solar:help-bold-duotone" className="size-4" />
}];
const D = _0x2f2500.memo(({
  open: _0x461518,
  onOpenChange: _0x4b7fa3,
  userId: _0x36bb14,
  username: _0x2576a2,
  guildId: _0x3181da
}) => {
  const {
    t: _0x431d73
  } = _0x448a60();
  const _0x344c82 = _0x10d477.useCallback(async (_0x35ea81, _0x23b43e) => {
    await _0x1c6d29(_0x36bb14, {
      reason: _0x35ea81,
      description: _0x23b43e,
      guild_id: _0x3181da
    });
  }, [_0x36bb14, _0x3181da]);
  return <_0x17e844 open={_0x461518} onOpenChange={_0x4b7fa3} title={_0x431d73("report.userTitle", {
    name: _0x2576a2 || ""
  })} subtitle={_0x431d73("report.userSubtitle")} reasonOptions={w} onSubmit={_0x344c82} />;
});
const R = ({
  isFriend: _0x4bd079,
  isSentPending: _0x55f6a8,
  isReceivedPending: _0x5053b0 = false,
  isSelf: _0x5bce54,
  addingFriend: _0x5e4913,
  cancelling: _0x164d19,
  acceptingRequest: _0x1f7d76 = false,
  onAddFriend: _0x3007a5,
  onCancelRequest: _0x5eda24,
  onRemoveFriend: _0x221e58,
  onAcceptRequest: _0x46b9aa,
  onRejectRequest: _0x2ab793,
  onBlock: _0x57c38d,
  onUnblock: _0x5788dc,
  isBlocked: _0x5663b6 = false,
  onCopyUserId: _0x886537,
  userId: _0x39a6a8,
  username: _0xedd1cc,
  hideMessageButton: _0x50791f = false,
  allowDirectMessages: _0x365b94,
  hasExistingDMChannel: _0x105375 = false,
  isBot: _0x1419e9 = false,
  guildId: _0x3996aa,
  additionalMenuItems: _0x1122e1,
  onMenuOpenChange: _0x19de34,
  onEditProfile: _0x1db830
}) => {
  const [_0xdff7cf, _0x5a240c] = _0x10d477.useState(false);
  const [_0x5ef2f1, _0xe60e39] = _0x10d477.useState(false);
  const [_0x381335, _0x3cac75] = _0x10d477.useState(false);
  const [_0x1346e5, _0x3504fc] = _0x10d477.useState(false);
  const {
    t: _0x303f0c
  } = _0x448a60();
  const _0x311c31 = _0x215bf6();
  const _0x43335d = _0x197c5c();
  const _0x1c87c9 = _0x4256e2();
  const _0x59fe7c = _0x29ca25();
  const _0x13e379 = _0x2f2500.useMemo(() => _0x1c87c9.pathname.startsWith("/app/dm/") ? _0x1c87c9.pathname.split("/app/dm/")[1] : null, [_0x1c87c9.pathname]);
  const _0x14c4d2 = _0x2f2500.useCallback(async _0x25561d => {
    try {
      const _0x47dcba = await _0x332241(_0x25561d);
      const _0x2efd77 = _0x47dcba.channel_id;
      if (_0x13e379 && _0x2efd77 === _0x13e379) {
        return;
      }
      const _0x57b788 = {
        ..._0x47dcba,
        last_message_at: _0x47dcba.last_message_at || null,
        participant: _0x47dcba.participant,
        participants: _0x47dcba.participants
      };
      _0x59fe7c(_0x57b788);
      _0x43335d("/app/dm/" + _0x2efd77, {
        replace: _0x13e379 === _0x2efd77,
        state: {
          isLoading: true,
          channelId: _0x2efd77,
          dmChannel: _0x57b788
        }
      });
      _0x340845();
    } catch {}
  }, [_0x13e379, _0x43335d, _0x59fe7c]);
  const _0x24948d = _0x2f2500.useCallback(() => {
    _0xe60e39(true);
    _0x5a240c(false);
  }, []);
  const _0x4e9238 = _0x2f2500.useCallback(async () => {
    if (_0x39a6a8) {
      _0x3cac75(true);
      try {
        const _0x51aec7 = Number(_0x39a6a8);
        if (Number.isNaN(_0x51aec7)) {
          _0x379547.error(_0x303f0c("friends.invalidUser"));
          return;
        }
        await _0x53c347.blockUser(_0x51aec7);
        _0xe60e39(false);
        _0x57c38d?.();
      } catch {} finally {
        _0x3cac75(false);
      }
    }
  }, [_0x39a6a8, _0x57c38d]);
  if (_0x5bce54 && !_0x1db830) {
    return null;
  }
  if (_0x1419e9) {
    return null;
  }
  const _0x74df25 = !_0x5bce54 || Boolean(_0x1122e1) || Boolean(_0x311c31 && _0x886537 && _0x39a6a8);
  return <div className="flex shrink-0 items-center gap-0">{_0x5bce54 ? <_0x50ca99 size="icon" variant="secondary" onClick={_0x37c4fb => {
      _0x37c4fb.preventDefault();
      _0x37c4fb.stopPropagation();
      _0x1db830?.();
    }} className={"w-7 h-7 rounded-l-md " + (_0x74df25 ? "rounded-r-none" : "rounded-r-md") + " bg-surface-overlay/70 border border-border-default text-text-secondary hover:bg-surface-inset/80"} aria-label={_0x303f0c("profileModal.editProfile")} title={_0x303f0c("profileModal.editProfile")}><_0x496d34 icon="solar:pen-bold-duotone" className="size-4" /></_0x50ca99> : _0x4bd079 ? <_0x50ca99 size="sm" onClick={_0x20c71d => {
      _0x20c71d.stopPropagation();
      _0x20c71d.preventDefault();
      _0x221e58();
    }} className="h-7 px-2 rounded-l-md rounded-r-none bg-accent-primary text-white hover:bg-accent-primary/90" aria-label={_0x303f0c("friends.yourFriend")} title={_0x303f0c("friends.removeFriend")}><_0x638679 className="size-3.5" /><span className="text-[11px]">{_0x303f0c("friends.yourFriend")}</span></_0x50ca99> : _0x5053b0 ? <div className="flex items-center gap-1.5"><_0x50ca99 size="sm" onClick={_0x2513ac => {
        _0x2513ac.stopPropagation();
        _0x2513ac.preventDefault();
        _0x46b9aa?.();
      }} disabled={_0x1f7d76} className="h-7 px-2.5 rounded-md bg-accent-primary text-white hover:bg-accent-primary/90 active:scale-95 transition-all disabled:opacity-70" aria-label={_0x303f0c("friends.acceptRequest")}>{_0x1f7d76 ? <_0x18c9f8 className="size-3.5 animate-spin" /> : <_0x638679 className="size-3.5" />}<span className="text-[11px] font-semibold">{_0x303f0c("friends.acceptRequest")}</span></_0x50ca99><_0x50ca99 size="icon" variant="secondary" onClick={_0x36dd9f => {
        _0x36dd9f.stopPropagation();
        _0x36dd9f.preventDefault();
        _0x2ab793?.();
      }} disabled={_0x1f7d76} className="w-7 h-7 rounded-l-md rounded-r-none bg-surface-inset/60 border-r border-border-subtle text-text-secondary hover:bg-red-500/15 hover:text-red-400 hover:border-red-500/30 disabled:opacity-50" aria-label={_0x303f0c("friends.rejectRequest")} title={_0x303f0c("friends.rejectRequest")}><_0x4301b1 className="size-4" /></_0x50ca99></div> : _0x55f6a8 ? <_0x50ca99 size="sm" onClick={_0x559f43 => {
      _0x559f43.stopPropagation();
      _0x559f43.preventDefault();
      _0x5eda24();
    }} disabled={_0x164d19} className="h-7 px-2 rounded-l-md rounded-r-none bg-accent-primary text-white hover:bg-accent-primary/90" aria-label={_0x303f0c("friends.cancelRequest")}><_0x638679 className="size-3.5" /><span className="text-[11px]">{_0x303f0c("friends.cancelRequest")}</span></_0x50ca99> : <_0x50ca99 size="icon" variant="secondary" onClick={_0x5b5ff3 => {
      _0x5b5ff3.stopPropagation();
      _0x5b5ff3.preventDefault();
      _0x3007a5();
    }} disabled={_0x5e4913} className="w-7 h-7 rounded-l-md rounded-r-none bg-surface-overlay/70 border border-border-default text-text-secondary hover:bg-surface-inset/80" aria-label={_0x303f0c("friends.addFriend")} title={_0x303f0c("friends.add")}><_0x496d34 icon="solar:user-plus-bold-duotone" className="size-4" /></_0x50ca99>}{_0x74df25 && <_0x58da4b open={_0xdff7cf} onOpenChange={_0x2b45c3 => {
      _0x5a240c(_0x2b45c3);
      _0x19de34?.(_0x2b45c3);
    }}><_0x59a587 asChild={true}><_0x50ca99 size="icon" variant="secondary" className="h-7 w-7 rounded-l-none rounded-r-md bg-accent-primary/15 border border-accent-primary/20 border-l-0 text-white hover:bg-accent-primary/25" title={_0x303f0c("friends.moreOptions")} aria-label={_0x303f0c("friends.moreOptions")}><_0x496d34 icon="solar:menu-dots-bold" className="w-4 h-4" /></_0x50ca99></_0x59a587><_0x260132 className="w-60 z-130" align="end" sideOffset={5}>{!_0x5bce54 && _0x39a6a8 && !_0x50791f && (_0x105375 || _0x365b94 !== "none" && (_0x365b94 !== "friends" || !!_0x4bd079)) && <_0x50026e.Fragment><_0x23b472 onClick={_0x4eb958 => {
            _0x4eb958.stopPropagation();
            _0x14c4d2(Number(_0x39a6a8));
            _0x5a240c(false);
          }}><_0x496d34 icon="solar:chat-round-dots-bold-duotone" className="size-4" /><span className="flex-1">{_0x303f0c("friends.sendMessage")}</span></_0x23b472>{_0x57c38d && <_0x38c82a />}</_0x50026e.Fragment>}{_0x1122e1 && <_0x50026e.Fragment>{_0x1122e1}{!_0x5bce54 && <_0x38c82a />}</_0x50026e.Fragment>}{!_0x5bce54 && (_0x5663b6 && _0x5788dc ? <_0x23b472 onClick={_0x347224 => {
          _0x347224.stopPropagation();
          _0x5788dc();
          _0x5a240c(false);
        }}><_0x496d34 icon="solar:forbidden-bold-duotone" className="size-4" /><span className="flex-1">{_0x303f0c("friends.unblock")}</span></_0x23b472> : _0x57c38d && <_0x23b472 variant="destructive" onClick={_0x1dee0a => {
          _0x1dee0a.stopPropagation();
          _0x24948d();
        }}><_0x496d34 icon="solar:forbidden-bold-duotone" className="size-4" /><span className="flex-1">{_0x303f0c("friends.block")}</span></_0x23b472>)}{!_0x5bce54 && _0x39a6a8 && <_0x23b472 variant="destructive" onClick={_0x463ca0 => {
          _0x463ca0.stopPropagation();
          _0x3504fc(true);
          _0x5a240c(false);
        }}><_0x496d34 icon="solar:flag-bold-duotone" className="size-4" /><span className="flex-1">{_0x303f0c("report.reportUser")}</span></_0x23b472>}{!_0x5bce54 && _0x4bd079 && <_0x23b472 variant="destructive" onClick={_0x545d2a => {
          _0x545d2a.stopPropagation();
          _0x221e58();
          _0x5a240c(false);
        }}><_0x496d34 icon="solar:user-minus-bold-duotone" className="size-4" /><span className="flex-1">{_0x303f0c("friends.removeFriend")}</span></_0x23b472>}{_0x311c31 && _0x886537 && _0x39a6a8 && <_0x50026e.Fragment><_0x38c82a /><_0x23b472 onClick={_0x42300a => {
            _0x42300a.stopPropagation();
            _0x886537();
            _0x5a240c(false);
          }}><_0x496d34 icon="solar:copy-bold-duotone" className="size-4" /><span className="flex-1">{_0x303f0c("friends.copyUserId")}</span></_0x23b472></_0x50026e.Fragment>}</_0x260132></_0x58da4b>}<_0x3eb281 open={_0x5ef2f1} onOpenChange={_0xe60e39} onConfirm={_0x4e9238} isLoading={_0x381335} variant="danger" icon={<_0x496d34 icon="solar:forbidden-bold-duotone" className="size-5 text-red-400" />} title={_0x303f0c("friends.blockConfirmTitle")} description={_0x303f0c("friends.blockConfirmDescription", {
      username: _0xedd1cc
    })} confirmText={_0x303f0c(_0x381335 ? "friends.blocking" : "friends.block")} />{!_0x5bce54 && _0x39a6a8 && <D open={_0x1346e5} onOpenChange={_0x3504fc} userId={String(_0x39a6a8)} username={_0xedd1cc} guildId={_0x3996aa} />}</div>;
};
const K = _0x2f2500.memo(({
  className: _0x311642 = "",
  username: _0x127e55
}) => {
  const {
    t: _0x25e18c
  } = _0x448a60();
  return <div className={"rounded-xl bg-accent-primary/8 border border-accent-primary/20 px-3 py-2.5 flex items-center gap-2.5 " + _0x311642}><div className="size-8 rounded-lg bg-accent-primary/15 flex items-center justify-center shrink-0"><_0x496d34 icon="solar:user-plus-bold-duotone" className="size-4 text-accent-primary-text" /></div><div className="flex-1 min-w-0"><p className="text-[12px] font-medium text-text-primary leading-tight">{_0x25e18c("dm.incomingFriendRequest", {
          username: _0x127e55 || "?"
        })}</p><p className="text-[11px] text-text-muted leading-tight mt-0.5">{_0x25e18c("dm.incomingFriendRequestDesc")}</p></div><_0x450580 className="size-6 text-accent-primary-text shrink-0" /></div>;
});
export { R as F, K as I };