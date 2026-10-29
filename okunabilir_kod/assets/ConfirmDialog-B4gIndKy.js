import { r as _0x193286, b as _0x5d22f8, j as _0x5811b0 } from "./index-cQfEKR1W.js";
import { A as _0x2b88f0, a as _0x107b4b, b as _0x318627, c as _0xb521e3 } from "./alert-dialog-BZuoGg7O.js";
import { V as _0x1e5e29 } from "./index-Oyyh46KT.js";
import { L as _0xba4631 } from "./loader-circle-CTtxa1g9.js";
const d = {
  danger: {
    iconBg: "bg-red-500/15",
    btn: "bg-red-500 hover:bg-red-600 text-text-primary",
    btnDisabled: "bg-surface-inset text-text-tertiary"
  },
  warning: {
    iconBg: "bg-amber-500/15",
    btn: "bg-amber-500 hover:bg-amber-600 text-black",
    btnDisabled: "bg-surface-inset text-text-tertiary"
  },
  default: {
    iconBg: "bg-accent-subtle",
    btn: "bg-accent-primary hover:bg-[#9cef00] text-black",
    btnDisabled: "bg-surface-inset text-text-tertiary"
  }
};
const c = _0x193286.memo(({
  open: _0x21dea6,
  onOpenChange: _0x2e8567,
  onConfirm: _0x14db52,
  isLoading: _0x3f51e7 = false,
  icon: _0x352cc7,
  title: _0x498b23,
  subtitle: _0x2b356b,
  description: _0x4d3bcb,
  warningText: _0x543ee4,
  confirmText: _0x44ccf9,
  cancelText: _0x54da30,
  variant: _0x1494bb = "default"
}) => {
  const {
    t: _0x3fb7f2
  } = _0x5d22f8();
  const _0x34bb0f = d[_0x1494bb];
  const _0x5cd8fd = _0x54da30 ?? _0x3fb7f2("common.cancel");
  const _0x2a7e5b = _0x193286.useCallback(() => {
    if (!_0x3f51e7) {
      _0x2e8567(false);
    }
  }, [_0x2e8567, _0x3f51e7]);
  const _0x497946 = _0x193286.useCallback(async _0x30199d => {
    _0x30199d.stopPropagation();
    _0x30199d.preventDefault();
    if (!_0x3f51e7) {
      await _0x14db52();
    }
  }, [_0x14db52, _0x3f51e7]);
  return <_0x2b88f0 open={_0x21dea6} onOpenChange={_0x2a7e5b}><_0x107b4b className="p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-sm" onClick={_0xb84e37 => _0xb84e37.stopPropagation()} onOpenAutoFocus={() => {
      document.activeElement?.blur();
    }}><_0x1e5e29><_0x318627>{_0x498b23}</_0x318627><_0xb521e3>{typeof _0x4d3bcb == "string" ? _0x4d3bcb : _0x498b23}</_0xb521e3></_0x1e5e29><div className="p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40"><div className="bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden p-5"><div className="flex items-center gap-3 mb-4"><div className={"size-10 rounded-xl flex items-center justify-center shrink-0 " + _0x34bb0f.iconBg}>{_0x352cc7}</div><div className="min-w-0 flex-1"><p className="text-base font-semibold text-text-primary truncate">{_0x498b23}</p>{_0x2b356b && <p className="text-xs text-text-tertiary mt-0.5 truncate">{_0x2b356b}</p>}</div></div>{typeof _0x4d3bcb == "string" ? <p className="text-[13px] text-text-tertiary leading-relaxed mb-5">{_0x4d3bcb}</p> : <div className="text-[13px] text-text-tertiary leading-relaxed mb-5">{_0x4d3bcb}</div>}{_0x543ee4 && <p className="text-xs text-red-400 -mt-2 mb-5">{_0x543ee4}</p>}<div className="flex gap-3"><button onClick={_0x2a7e5b} disabled={_0x3f51e7} className="flex-1 h-10 rounded-xl text-sm font-medium text-text-secondary bg-surface-inset/40 border border-border-subtle hover:bg-interactive-muted transition-colors cursor-pointer disabled:opacity-50">{_0x5cd8fd}</button><button onClick={_0x497946} disabled={_0x3f51e7} className={"flex-1 h-10 rounded-xl text-sm font-semibold transition-colors cursor-pointer disabled:cursor-not-allowed " + (_0x3f51e7 ? _0x34bb0f.btnDisabled : _0x34bb0f.btn)}>{_0x3f51e7 ? <_0xba4631 className="size-4 animate-spin mx-auto" /> : _0x44ccf9}</button></div></div></div></_0x107b4b></_0x2b88f0>;
});
c.displayName = "ConfirmDialog";
export { c as C };