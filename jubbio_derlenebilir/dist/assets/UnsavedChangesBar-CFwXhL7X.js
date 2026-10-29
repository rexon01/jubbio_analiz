import { b as _0x56c12f, aj as _0x2a57f3, j as _0x810c82 } from "./index-cQfEKR1W.js";
function a({
  hasChanges: _0x59f1e2,
  isSaving: _0x13139a,
  onSave: _0x14aa6b,
  onReset: _0x5db7c0,
  saveText: _0x3102ed,
  resetText: _0x554f83,
  children: _0x150a2f
}) {
  const {
    t: _0x2d5c84
  } = _0x56c12f();
  if (!_0x59f1e2) {
    return null;
  }
  const _0x257f1f = _0x3102ed || _0x2d5c84("developer.unsaved.save");
  const _0x340ca2 = _0x554f83 || _0x2d5c84("developer.unsaved.reset");
  return _0x2a57f3.createPortal(_0x810c82.jsx("div", {
    className: "fixed inset-x-0 bottom-0 z-[10000] pointer-events-none",
    children: _0x810c82.jsx("div", {
      className: "mx-auto max-w-4xl px-6 pb-6",
      children: _0x810c82.jsxs("div", {
        className: "pointer-events-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-2 rounded-2xl border border-border-default bg-surface-base/90 px-4 py-3 sm:px-5 sm:py-2.5 backdrop-blur-md shadow-[0_18px_50px_-24px_rgba(0,0,0,0.8)]",
        children: [_0x810c82.jsx("div", {
          className: "text-xs sm:text-sm text-text-secondary",
          children: _0x150a2f || _0x2d5c84("developer.unsaved.message")
        }), _0x810c82.jsxs("div", {
          className: "flex w-full sm:w-auto gap-2",
          children: [_0x810c82.jsx("button", {
            onClick: _0x5db7c0,
            disabled: _0x13139a,
            className: "flex-1 sm:flex-none h-9 sm:h-8 rounded-xl sm:rounded-lg border border-border-default bg-surface-raised/60 px-3 text-sm sm:text-xs text-text-secondary transition active:bg-surface-overlay/60 hover:bg-surface-overlay/60 sm:px-4 sm:text-sm disabled:opacity-50",
            children: _0x340ca2
          }), _0x810c82.jsx("button", {
            onClick: _0x14aa6b,
            disabled: _0x13139a,
            className: "flex-1 sm:flex-none h-9 sm:h-8 rounded-xl sm:rounded-lg bg-accent-primary px-4 text-sm sm:text-xs font-semibold text-black transition active:bg-accent-primary/90 hover:bg-accent-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm",
            children: _0x13139a ? _0x2d5c84("developer.unsaved.saving") : _0x257f1f
          })]
        })]
      })
    })
  }), document.body);
}
export { a as U };