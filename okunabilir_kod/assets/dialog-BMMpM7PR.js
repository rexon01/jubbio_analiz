import { j as _0x19d449, X as _0x45ce86, s as _0x2f0ae4 } from "./index-cQfEKR1W.js";
import { D as _0xbad955, a as _0x4dafa9, b as _0xe7b68e, c as _0x1f01ed, d as _0x119809, e as _0x413250, f as _0x5b0a76 } from "./index-yuEHo9bu.js";
function c({
  ..._0x335496
}) {
  return <_0xbad955 data-slot="dialog" {..._0x335496} />;
}
function _Component2({
  ..._0x2ffa36
}) {
  return <_0x413250 data-slot="dialog-portal" {..._0x2ffa36} />;
}
function m({
  ..._0x1f0790
}) {
  return <_0xe7b68e data-slot="dialog-close" {..._0x1f0790} />;
}
function _Component({
  className: _0xa7d234,
  ..._0x5a143c
}) {
  return <_0x5b0a76 data-slot="dialog-overlay" className={_0x2f0ae4("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-110 bg-black/50 dark:bg-black/70 backdrop-blur-sm pointer-events-auto", _0xa7d234)} {..._0x5a143c} />;
}
function x({
  className: _0x592e9c,
  children: _0x595eaa,
  showCloseButton: _0xc0bda = true,
  overlayClassName: _0x33e458,
  wrapperClassName: _0x238bab,
  ..._0x3eaadf
}) {
  return <_Component2 data-slot="dialog-portal"><_Component className={_0x33e458} /><div className={_0x2f0ae4("fixed inset-0 z-115 flex items-center justify-center pointer-events-none", _0x238bab)}><_0x4dafa9 data-slot="dialog-content" className={_0x2f0ae4("bg-surface-raised/95 backdrop-blur-sm border-border-default text-text-primary data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 grid w-full max-w-[calc(100%-2rem)] max-h-[calc(100vh-7rem)] md:max-h-[calc(100vh-2rem)] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg pointer-events-auto overflow-hidden", _0x592e9c)} {..._0x3eaadf}>{_0x595eaa}{_0xc0bda && <_0xe7b68e data-slot="dialog-close" className="absolute top-3 right-3 size-9 rounded-full bg-surface-inset/50 hover:bg-surface-inset/80 flex items-center justify-center transition-colors cursor-pointer press focus:outline-none focus:ring-2 focus:ring-border-default focus:ring-offset-2 focus:ring-offset-surface-raised disabled:pointer-events-none z-99"><_0x45ce86 className="size-5 text-text-tertiary" /><span className="sr-only">Close</span></_0xe7b68e>}</_0x4dafa9></div></_Component2>;
}
function g({
  className: _0x18e3b4,
  ..._0x164cf4
}) {
  return <div data-slot="dialog-header" className={_0x2f0ae4("flex flex-col gap-1 text-center sm:text-left", _0x18e3b4)} {..._0x164cf4} />;
}
function p({
  className: _0x360ed2,
  ..._0x4a9858
}) {
  return <div data-slot="dialog-footer" className={_0x2f0ae4("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", _0x360ed2)} {..._0x4a9858} />;
}
function j({
  className: _0x1d30f9,
  ..._0xdc9481
}) {
  return <_0x1f01ed data-slot="dialog-title" className={_0x2f0ae4("text-lg leading-none font-semibold text-text-primary", _0x1d30f9)} {..._0xdc9481} />;
}
function b({
  className: _0x21d7c5,
  ..._0x1fcfdd
}) {
  return <_0x119809 data-slot="dialog-description" className={_0x2f0ae4("text-text-tertiary text-sm", _0x21d7c5)} {..._0x1fcfdd} />;
}
export { c as D, x as a, g as b, j as c, b as d, m as e, p as f };