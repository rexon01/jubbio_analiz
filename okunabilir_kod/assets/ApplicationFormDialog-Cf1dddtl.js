import { R as _0x4f0ee9, b as _0x1197cb, r as _0x39340d, d$ as _0x29f6bb, j as _0x53445f, I as _0x156497 } from "./index-cQfEKR1W.js";
import { A as _0x19eaaf, a as _0x468848, b as _0x33f307 } from "./avatar-C-4BWxT3.js";
import { D as _0x526df3, a as _0x177390, c as _0x94fd0e, d as _0x241084 } from "./dialog-BMMpM7PR.js";
import { L as _0x58f8c9 } from "./loader-circle-CTtxa1g9.js";
const u = _0x4f0ee9.memo(({
  open: _0x5e4a13,
  onClose: _0x28ca34,
  guildId: _0x1e1b3c,
  guildName: _0x5a4b9d,
  guildAvatarUrl: _0x5a98dd,
  guildSplashUrl: _0x39d00f,
  guildDescription: _0x5b271e,
  guildMemberCount: _0x234a38,
  guildOnlineCount: _0x2b46a2,
  questions: _0x292327,
  pending: _0x27add7
}) => {
  const {
    t: _0x50b243
  } = _0x1197cb();
  const [_0x3fb0f3, _0x2a2d6a] = _0x39340d.useState(() => {
    const _0x4132e7 = {};
    _0x292327.forEach(_0x36fafa => {
      _0x4132e7[_0x36fafa.id] = "";
    });
    return _0x4132e7;
  });
  const [_0x27a7a3, _0x4d8b3e] = _0x39340d.useState(false);
  const [_0x10b57e, _0x37a6bb] = _0x39340d.useState(false);
  const _0xc43d06 = !_0x292327.some(_0x760130 => _0x760130.required && !_0x3fb0f3[_0x760130.id]?.trim());
  const _0x5271aa = _0x5a4b9d.slice(0, 2).toUpperCase();
  const _0x3a9ef0 = _0x39340d.useCallback(async () => {
    if (_0xc43d06 && !_0x27a7a3) {
      try {
        _0x4d8b3e(true);
        const _0x3864a5 = _0x292327.map(_0x5df4d2 => ({
          question_id: _0x5df4d2.id,
          question: _0x5df4d2.question,
          answer: _0x3fb0f3[_0x5df4d2.id]?.trim() || ""
        })).filter(_0x2396d9 => _0x2396d9.answer);
        await _0x29f6bb(_0x1e1b3c, _0x3864a5);
        _0x37a6bb(true);
      } catch {} finally {
        _0x4d8b3e(false);
      }
    }
  }, [_0x1e1b3c, _0x292327, _0x3fb0f3, _0xc43d06, _0x27a7a3]);
  const _0x26b4a9 = _0x39340d.useCallback(_0x1a9c1f => {
    if (!_0x1a9c1f) {
      _0x28ca34();
    }
  }, [_0x28ca34]);
  if (_0x27add7) {
    return <_0x526df3 open={_0x5e4a13} onOpenChange={_0x26b4a9}><_0x177390 className="sm:max-w-sm p-0 gap-0 bg-transparent border-0 shadow-none overflow-hidden"><_0x94fd0e className="sr-only">{_0x50b243("invite.modal.applicationPendingTitle", "Application Pending")}</_0x94fd0e><_0x241084 className="sr-only">{_0x5a4b9d}</_0x241084><div className="rounded-2xl border border-border-default bg-surface-raised shadow-xl shadow-black/10 overflow-hidden"><div className="px-6 py-12 flex flex-col items-center gap-3 text-center"><div className="size-16 rounded-full bg-blue-500/15 flex items-center justify-center"><_0x156497 icon="solar:clock-circle-bold-duotone" className="size-8 text-blue-400" /></div><h3 className="text-base font-semibold text-text-primary">{_0x50b243("invite.modal.applicationPendingTitle", "Application Pending")}</h3><p className="text-sm text-text-tertiary max-w-xs">{_0x50b243("invite.modal.applicationPendingDesc", "You already have a pending application for this server. Please wait for it to be reviewed.")}</p><button onClick={_0x28ca34} className="mt-3 h-10 px-8 rounded-xl text-sm font-medium bg-surface-inset/40 border border-border-subtle text-text-secondary hover:bg-interactive-muted transition-colors cursor-pointer">{_0x50b243("invite.modal.close", "Close")}</button></div></div></_0x177390></_0x526df3>;
  } else if (_0x10b57e) {
    return <_0x526df3 open={_0x5e4a13} onOpenChange={_0x26b4a9}><_0x177390 className="sm:max-w-sm p-0 gap-0 bg-transparent border-0 shadow-none overflow-hidden"><_0x94fd0e className="sr-only">{_0x50b243("invite.modal.applicationSent", "Application Sent!")}</_0x94fd0e><_0x241084 className="sr-only">{_0x5a4b9d}</_0x241084><div className="rounded-2xl border border-border-default bg-surface-raised shadow-xl shadow-black/10 overflow-hidden"><div className="px-6 py-12 flex flex-col items-center gap-3 text-center"><div className="size-16 rounded-full bg-emerald-500/15 flex items-center justify-center"><_0x156497 icon="solar:check-circle-bold-duotone" className="size-8 text-emerald-400" /></div><h3 className="text-base font-semibold text-text-primary">{_0x50b243("invite.modal.applicationSent", "Application Sent!")}</h3><p className="text-sm text-text-tertiary max-w-xs">{_0x50b243("invite.modal.applicationSentDesc", "Your application has been submitted. You will be notified once it is reviewed.")}</p><button onClick={_0x28ca34} className="mt-3 h-10 px-8 rounded-xl text-sm font-medium bg-surface-inset/40 border border-border-subtle text-text-secondary hover:bg-interactive-muted transition-colors cursor-pointer">{_0x50b243("invite.modal.close", "Close")}</button></div></div></_0x177390></_0x526df3>;
  } else {
    return <_0x526df3 open={_0x5e4a13} onOpenChange={_0x26b4a9}><_0x177390 className="p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-4xl max-h-[85dvh] overflow-hidden"><_0x94fd0e className="sr-only">{_0x50b243("invite.modal.applicationForm", "Application Form")}</_0x94fd0e><_0x241084 className="sr-only">{_0x5a4b9d}</_0x241084><div className="rounded-2xl border border-border-default bg-surface-raised shadow-xl shadow-black/10 overflow-hidden"><div className="flex flex-col md:flex-row md:min-h-[460px] max-h-[85dvh]"><div className="md:w-[45%] shrink-0 relative bg-surface-base/50 border-b md:border-b-0 md:border-r border-border-default p-6 md:p-8 flex flex-col overflow-hidden">{_0x39d00f && <_0x53445f.Fragment><img src={_0x39d00f} alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm" /><div className="absolute inset-0 bg-surface-base/60" /></_0x53445f.Fragment>}<div className="relative flex-1 flex flex-col items-center justify-center py-4"><_0x19eaaf className="size-20 rounded-2xl ring-2 ring-border-subtle mb-4">{_0x5a98dd ? <_0x468848 src={_0x5a98dd} className="rounded-2xl" /> : <_0x33f307 className="rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 text-lg font-bold text-text-tertiary">{_0x5271aa}</_0x33f307>}</_0x19eaaf><h2 className="text-lg font-bold text-text-primary text-center">{_0x5a4b9d}</h2>{_0x5b271e && <p className="text-sm text-text-tertiary text-center mt-2 line-clamp-3 max-w-[280px]">{_0x5b271e}</p>}{(_0x234a38 || _0x2b46a2) && <div className="flex items-center gap-3 mt-4">{_0x2b46a2 !== undefined && _0x2b46a2 > 0 && <div className="flex items-center gap-1.5 text-xs text-text-muted"><span className="size-2 rounded-full bg-emerald-400" /><span>{_0x2b46a2.toLocaleString()} {_0x50b243("invite.modal.online", "online")}</span></div>}{_0x234a38 !== undefined && _0x234a38 > 0 && <div className="flex items-center gap-1.5 text-xs text-text-muted"><span className="size-2 rounded-full bg-surface-inset" /><span>{_0x234a38.toLocaleString()} {_0x50b243("invite.modal.members", "members")}</span></div>}</div>}</div><div className="relative mt-auto pt-4"><p className="text-[11px] text-text-muted flex items-start gap-1.5"><_0x156497 icon="solar:info-circle-bold-duotone" className="size-3.5 shrink-0 mt-0.5" /><span>{_0x50b243("invite.modal.applicationHint", "Your application will be reviewed by the server moderators.")}</span></p></div></div><div className="flex-1 p-6 md:p-8 flex flex-col min-h-0"><div className="mb-4"><h3 className="text-base font-semibold text-text-primary">{_0x50b243("invite.modal.applicationForm", "Application Form")}</h3><p className="text-sm text-text-muted mt-1">{_0x50b243("invite.modal.applicationFormDesc", "Answer the questions below to apply.")}</p></div><div className="flex-1 overflow-y-auto -mx-1 px-1 space-y-4 scrollbar-thin">{_0x292327.sort((_0xd4508b, _0x8aeef9) => _0xd4508b.position - _0x8aeef9.position).map((_0x144c62, _0x44a33e) => <div className="space-y-1.5" key={_0x144c62.id}><label className="text-sm font-medium text-text-secondary flex items-center gap-1.5"><span className="text-xs text-text-muted font-mono">{_0x44a33e + 1}.</span>{_0x144c62.question}{_0x144c62.required ? <span className="text-amber-500 text-[10px] font-semibold uppercase">*</span> : <span className="text-[10px] text-text-muted font-medium">({_0x50b243("serverSettings.onboarding.optional", "Optional")})</span>}</label><textarea value={_0x3fb0f3[_0x144c62.id] || ""} onChange={_0x3589d8 => _0x2a2d6a(_0x1b12b2 => ({
                    ..._0x1b12b2,
                    [_0x144c62.id]: _0x3589d8.target.value.slice(0, 1000)
                  }))} placeholder={_0x144c62.placeholder || _0x50b243("invite.modal.answerPlaceholder", "Type your answer...")} maxLength={1000} rows={3} className="w-full rounded-xl border border-border-default bg-surface-base/60 px-3.5 py-2.5 text-sm text-text-secondary placeholder:text-text-muted outline-none focus:border-accent-primary/40 focus:ring-1 focus:ring-accent-primary/20 resize-none transition-colors" /><div className="flex justify-end mt-0.5"><span className={"text-[10px] " + ((_0x3fb0f3[_0x144c62.id]?.length || 0) > 900 ? "text-amber-500" : "text-text-muted/50")}>{_0x3fb0f3[_0x144c62.id]?.length || 0}/1000</span></div></div>)}</div><div className="pt-5 mt-auto border-t border-border-default/50"><div className="flex items-center gap-3"><button type="button" onClick={_0x28ca34} className="flex-1 h-11 rounded-xl border border-border-default hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer">{_0x50b243("invite.modal.cancel", "Cancel")}</button><button type="button" onClick={_0x3a9ef0} disabled={!_0xc43d06 || _0x27a7a3} className="flex-1 h-11 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer">{_0x27a7a3 ? <_0x53445f.Fragment><_0x58f8c9 className="size-4 animate-spin" />{_0x50b243("invite.modal.submitting", "Submitting...")}</_0x53445f.Fragment> : <_0x53445f.Fragment><_0x156497 icon="solar:arrow-right-bold" className="size-4" />{_0x50b243("invite.modal.submitApplication", "Submit Application")}</_0x53445f.Fragment>}</button></div></div></div></div></div></_0x177390></_0x526df3>;
  }
});
export { u as A };