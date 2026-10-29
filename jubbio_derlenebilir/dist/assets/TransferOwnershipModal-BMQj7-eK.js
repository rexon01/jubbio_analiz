import { r as _0x238b19, b as _0x3a3dcd, j as _0x4e3575, aT as _0x3b2cf7, P as _0x5dea90 } from "./index-cQfEKR1W.js";
import { D as _0x50e165, a as _0x167eab, b as _0x1bf6fe, c as _0x2961bf, d as _0x2fbf0c } from "./dialog-BMMpM7PR.js";
import { C as _0x11be6a } from "./zap-B3VH4qT9.js";
import { A as _0x13656b } from "./arrow-right-DvlsXLCB.js";
import "./index-yuEHo9bu.js";
const m = ({
  open: _0x50c200,
  onOpenChange: _0x482d02,
  onConfirm: _0x115016,
  groupName: _0x481dbf,
  newOwnerName: _0x1f6bf3,
  newOwnerId: _0x4748fc,
  loading: _0x1eb70b = false
}) => {
  const [_0x2947a1, _0x3da329] = _0x238b19.useState(false);
  const {
    t: _0x267908
  } = _0x3a3dcd();
  const _0x279a0e = _0x1eb70b || _0x2947a1;
  return _0x4e3575.jsx(_0x50e165, {
    open: _0x50c200,
    onOpenChange: _0x482d02,
    children: _0x4e3575.jsx(_0x167eab, {
      className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md overflow-hidden",
      children: _0x4e3575.jsx("div", {
        className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40",
        children: _0x4e3575.jsxs("div", {
          className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col",
          children: [_0x4e3575.jsxs(_0x1bf6fe, {
            className: "px-4 py-4 border-b border-border-subtle shrink-0",
            children: [_0x4e3575.jsxs(_0x2961bf, {
              className: "text-lg font-semibold text-text-primary flex items-center gap-2",
              children: [_0x4e3575.jsx(_0x11be6a, {
                className: "size-5 text-yellow-400"
              }), _0x267908("groupDM.transferOwnership")]
            }), _0x4e3575.jsx(_0x2fbf0c, {
              className: "text-text-muted text-sm",
              children: _0x267908("groupDM.transferOwnershipConfirm", {
                groupName: _0x481dbf || _0x267908("groupDM.name"),
                newOwner: _0x1f6bf3 || _0x267908("groupDM.newOwner")
              })
            })]
          }), _0x4e3575.jsxs("div", {
            className: "px-4 py-5 space-y-4",
            children: [_0x4e3575.jsxs("div", {
              className: "flex items-center justify-center gap-3",
              children: [_0x4e3575.jsxs("div", {
                className: "flex items-center gap-2 px-3 py-2.5 bg-surface-inset/40 border border-border-subtle rounded-xl",
                children: [_0x4e3575.jsx(_0x11be6a, {
                  className: "size-4 text-yellow-400"
                }), _0x4e3575.jsx("span", {
                  className: "text-sm text-text-secondary",
                  children: _0x267908("groupDM.you")
                })]
              }), _0x4e3575.jsx(_0x13656b, {
                className: "size-4 text-text-muted"
              }), _0x4e3575.jsxs("div", {
                className: "flex items-center gap-2 px-3 py-2.5 bg-surface-inset/40 border border-border-subtle rounded-xl",
                children: [_0x4e3575.jsx(_0x11be6a, {
                  className: "size-4 text-blue-400"
                }), _0x4e3575.jsx("span", {
                  className: "text-sm text-text-secondary",
                  children: _0x1f6bf3 || _0x267908("groupDM.newOwner")
                })]
              })]
            }), _0x4e3575.jsx("div", {
              className: "bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-3",
              children: _0x4e3575.jsxs("div", {
                className: "flex items-start gap-2",
                children: [_0x4e3575.jsx(_0x3b2cf7, {
                  className: "size-4 text-yellow-400 mt-0.5 shrink-0"
                }), _0x4e3575.jsx("div", {
                  className: "text-sm text-yellow-200",
                  children: _0x267908("groupDM.transferWarning")
                })]
              })
            })]
          }), _0x4e3575.jsx("div", {
            className: "px-4 py-3 border-t border-border-subtle",
            children: _0x4e3575.jsxs("div", {
              className: "flex items-center gap-2",
              children: [_0x4e3575.jsx("button", {
                onClick: () => {
                  _0x482d02(false);
                },
                disabled: _0x279a0e,
                className: "flex-1 h-10 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                children: _0x267908("groupDM.cancel")
              }), _0x4e3575.jsx("button", {
                onClick: async () => {
                  if (_0x4748fc) {
                    _0x3da329(true);
                    try {
                      await _0x115016(_0x4748fc);
                      _0x482d02(false);
                    } catch (_0x14a379) {
                      console.error("Transfer ownership error:", _0x14a379);
                    } finally {
                      _0x3da329(false);
                    }
                  } else {
                    _0x5dea90.error(_0x267908("groupDM.invalidUserSelected"));
                  }
                },
                disabled: _0x279a0e,
                className: "flex-1 h-10 rounded-xl bg-yellow-600 hover:bg-yellow-700 text-text-primary text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer",
                children: _0x267908(_0x279a0e ? "groupDM.transferring" : "groupDM.transferBtn")
              })]
            })
          })]
        })
      })
    })
  });
};
export { m as default };