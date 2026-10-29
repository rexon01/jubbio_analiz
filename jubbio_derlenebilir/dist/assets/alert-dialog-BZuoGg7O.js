import { r as _0xdb74ca, j as _0x2d20b0, U as _0x795392, $ as _0x26dfb3, Y as _0x24d059, s, ai as _0x37b8a4 } from "./index-cQfEKR1W.js";
import { e as _0x4204a2, f as _0x50b935, h as _0x5c84f0, D as _0x49e6f3, g as _0x44dca9, a as _0x572274, c as _0x134c80, d as _0xd17fe3, b as _0x474297 } from "./index-yuEHo9bu.js";
var m = Object.defineProperty;
var b = (_0xb1f346, _0x3f0faa) => m(_0xb1f346, "name", {
  value: _0x3f0faa,
  configurable: true
});
var [j, D] = _0x24d059("AlertDialog", [_0x5c84f0]);
var A = _0x5c84f0();
var v = b(_0x1032c1 => {
  const {
    __scopeAlertDialog: _0x1955c1,
    ..._0x49a2e3
  } = _0x1032c1;
  const _0x1421a6 = A(_0x1955c1);
  return _0x2d20b0.jsx(_0x49e6f3, {
    ..._0x1421a6,
    ..._0x49a2e3,
    modal: true
  });
}, "AlertDialog");
_0xdb74ca.forwardRef(b(function (_0x3a2dc9, _0x8fddc2) {
  const {
    __scopeAlertDialog: _0x328b43,
    ..._0x11138d
  } = _0x3a2dc9;
  const _0x9cea7 = A(_0x328b43);
  return _0x2d20b0.jsx(_0x44dca9, {
    ..._0x9cea7,
    ..._0x11138d,
    ref: _0x8fddc2
  });
}, "AlertDialogTrigger"));
var _ = b(_0x24beed => {
  const {
    __scopeAlertDialog: _0x58aca8,
    ..._0x3fc384
  } = _0x24beed;
  const _0x24579d = A(_0x58aca8);
  return _0x2d20b0.jsx(_0x4204a2, {
    ..._0x24579d,
    ..._0x3fc384
  });
}, "AlertDialogPortal");
var N = _0xdb74ca.forwardRef(b(function (_0x2b4fe3, _0x4333f5) {
  const {
    __scopeAlertDialog: _0x3debba,
    ..._0x5451da
  } = _0x2b4fe3;
  const _0x288e55 = A(_0x3debba);
  return _0x2d20b0.jsx(_0x50b935, {
    ..._0x288e55,
    ..._0x5451da,
    ref: _0x4333f5
  });
}, "AlertDialogOverlay"));
var [w, h] = j("AlertDialogContent");
var y = _0xdb74ca.forwardRef(b(function (_0x189af6, _0x5bc87d) {
  const {
    __scopeAlertDialog: _0x28f5dc,
    children: _0x40258f,
    ..._0x47d7f3
  } = _0x189af6;
  const _0x44261d = A(_0x28f5dc);
  const _0x3c9b56 = _0xdb74ca.useRef(null);
  const _0x23f2e3 = _0x795392(_0x5bc87d, _0x3c9b56);
  const _0x44ed7a = _0xdb74ca.useRef(null);
  return _0x2d20b0.jsx(w, {
    scope: _0x28f5dc,
    cancelRef: _0x44ed7a,
    children: _0x2d20b0.jsx(_0x572274, {
      role: "alertdialog",
      ..._0x44261d,
      ..._0x47d7f3,
      ref: _0x23f2e3,
      onOpenAutoFocus: _0x26dfb3(_0x47d7f3.onOpenAutoFocus, _0x18598c => {
        _0x18598c.preventDefault();
        _0x44ed7a.current?.focus({
          preventScroll: true
        });
      }),
      onPointerDownOutside: _0x185a86 => _0x185a86.preventDefault(),
      onInteractOutside: _0x157d0b => _0x157d0b.preventDefault(),
      children: _0x40258f
    })
  });
}, "AlertDialogContent"));
var R = _0xdb74ca.forwardRef(b(function (_0x1d3907, _0x91b965) {
  const {
    __scopeAlertDialog: _0x1990f2,
    ..._0x3fb7da
  } = _0x1d3907;
  const _0x1e7131 = A(_0x1990f2);
  return _0x2d20b0.jsx(_0x134c80, {
    ..._0x1e7131,
    ..._0x3fb7da,
    ref: _0x91b965
  });
}, "AlertDialogTitle"));
var O = _0xdb74ca.forwardRef(b(function (_0x2abc6e, _0x503283) {
  const {
    __scopeAlertDialog: _0x38e6dd,
    ..._0x5c42ad
  } = _0x2abc6e;
  const _0x6a3197 = A(_0x38e6dd);
  return _0x2d20b0.jsx(_0xd17fe3, {
    ..._0x6a3197,
    ..._0x5c42ad,
    ref: _0x503283
  });
}, "AlertDialogDescription"));
var k = _0xdb74ca.forwardRef(b(function (_0x6a29a5, _0x3bfe7f) {
  const {
    __scopeAlertDialog: _0x200e85,
    ..._0x27e011
  } = _0x6a29a5;
  const _0x8b69b7 = A(_0x200e85);
  return _0x2d20b0.jsx(_0x474297, {
    ..._0x8b69b7,
    ..._0x27e011,
    ref: _0x3bfe7f
  });
}, "AlertDialogAction"));
var z = _0xdb74ca.forwardRef(b(function (_0xc46107, _0xd2d883) {
  const {
    __scopeAlertDialog: _0x2d026d,
    ..._0x38c80c
  } = _0xc46107;
  const {
    cancelRef: _0x2d18e7
  } = h("AlertDialogCancel", _0x2d026d);
  const _0x44ad92 = A(_0x2d026d);
  const _0x2d4390 = _0x795392(_0xd2d883, _0x2d18e7);
  return _0x2d20b0.jsx(_0x474297, {
    ..._0x44ad92,
    ..._0x38c80c,
    ref: _0x2d4390
  });
}, "AlertDialogCancel"));
function C({
  ..._0x4f5da7
}) {
  return _0x2d20b0.jsx(v, {
    "data-slot": "alert-dialog",
    ..._0x4f5da7
  });
}
function P({
  ..._0x3e1edc
}) {
  return _0x2d20b0.jsx(_, {
    "data-slot": "alert-dialog-portal",
    ..._0x3e1edc
  });
}
function F({
  className: _0x7aea7,
  ..._0x39caa2
}) {
  return _0x2d20b0.jsx(N, {
    "data-slot": "alert-dialog-overlay",
    "data-user-popover": "1",
    onMouseDown: _0x2b1fba => {
      _0x2b1fba.stopPropagation();
    },
    className: s("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-115 bg-black/50 dark:bg-black/70 backdrop-blur-sm", _0x7aea7),
    ..._0x39caa2
  });
}
function T({
  className: _0x359c1d,
  ..._0x3fae8e
}) {
  return _0x2d20b0.jsxs(P, {
    children: [_0x2d20b0.jsx(F, {}), _0x2d20b0.jsx("div", {
      className: "fixed inset-0 z-115 flex items-center justify-center",
      children: _0x2d20b0.jsx(y, {
        "data-slot": "alert-dialog-content",
        "data-user-popover": "1",
        className: s("bg-surface-raised border-border-default data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 grid w-full max-w-[calc(100%-2rem)] gap-4 rounded-xl border p-6 shadow-[0_8px_32px_rgba(0,0,0,0.45)] duration-200 sm:max-w-lg", _0x359c1d),
        ..._0x3fae8e
      })
    })]
  });
}
function I({
  className: _0x4c5fb8,
  ..._0x3d3b51
}) {
  return _0x2d20b0.jsx("div", {
    "data-slot": "alert-dialog-header",
    className: s("flex flex-col gap-3 text-center sm:text-left pb-2 border-b border-border-default", _0x4c5fb8),
    ..._0x3d3b51
  });
}
function M({
  className: _0x27577c,
  ..._0x52325d
}) {
  return _0x2d20b0.jsx("div", {
    "data-slot": "alert-dialog-footer",
    className: s("flex flex-col-reverse gap-3 sm:flex-row sm:justify-end pt-4 border-t border-border-default", _0x27577c),
    ..._0x52325d
  });
}
function S({
  className: _0x4e41bb,
  ..._0x5a1350
}) {
  return _0x2d20b0.jsx(R, {
    "data-slot": "alert-dialog-title",
    className: s("text-lg font-semibold text-text-secondary", _0x4e41bb),
    ..._0x5a1350
  });
}
function U({
  className: _0x3e1dc1,
  ..._0x59abae
}) {
  return _0x2d20b0.jsx(O, {
    "data-slot": "alert-dialog-description",
    className: s("text-text-secondary text-sm leading-relaxed", _0x3e1dc1),
    ..._0x59abae
  });
}
function Y({
  className: _0x2e0d93,
  ..._0x56fe56
}) {
  return _0x2d20b0.jsx(k, {
    className: s(_0x37b8a4(), "bg-surface-inset hover:bg-interactive-active text-text-secondary border-border-default", _0x2e0d93),
    ..._0x56fe56
  });
}
function $({
  className: _0x366923,
  ..._0x5970fb
}) {
  return _0x2d20b0.jsx(z, {
    className: s(_0x37b8a4({
      variant: "outline"
    }), "border-border-default bg-surface-raised/40 text-text-secondary hover:bg-surface-overlay/60 hover:text-text-secondary", _0x366923),
    ..._0x5970fb
  });
}
export { C as A, T as a, S as b, U as c, I as d, M as e, $ as f, Y as g };