import { r as _0x1e9105, b as _0x2fd61b, a as _0x32ae2f, j as _0x339f29, an as _0x2aa6c9, I as _0x1f718f } from "./index-cQfEKR1W.js";
import { D as _0x4b5f1e, a as _0x35f2d5, b as _0x296561, c as _0x141506, d as _0x59c635 } from "./dialog-BMMpM7PR.js";
import { D as _0x525bf9, a as _0x2a11ae, b as _0xe611e1, c as _0x3246b6, d as _0x1f3f9e } from "./drawer-X7YyCqpZ.js";
import { L as _0x2c446e } from "./loader-circle-CTtxa1g9.js";
const f = _0x1e9105.memo(function ({
  open: _0x6be100,
  onOpenChange: _0x4e830c,
  title: _0x4ccd6c,
  subtitle: _0x1ec465,
  reasonOptions: _0x4fc3a1,
  onSubmit: _0x300156,
  maxDescriptionLength: _0x32ea0d = 1000,
  requiredDescriptionReason: _0x2d9c4 = "other"
}) {
  const {
    t: _0x39a2e7
  } = _0x2fd61b();
  const [_0x36629e, _0x5641ce] = _0x1e9105.useState(null);
  const [_0xd8e99, _0x1f4366] = _0x1e9105.useState("");
  const [_0x5280a1, _0x2c9f68] = _0x1e9105.useState(false);
  const [_0x1fd9b2, _0x218f27] = _0x1e9105.useState(false);
  const _0x171cd1 = _0x32ae2f("(max-width: 767px)");
  const _0xd35e2d = _0x36629e === _0x2d9c4;
  const _0x1b4ea8 = _0x36629e !== null && (!_0xd35e2d || _0xd8e99.trim().length > 0);
  const _0x6f9f44 = _0x1e9105.useCallback(async () => {
    if (_0x36629e && _0x1b4ea8) {
      try {
        _0x2c9f68(true);
        _0x218f27(false);
        await _0x300156(_0x36629e, _0xd8e99.trim() || undefined);
        _0x4e830c(false);
        _0x5641ce(null);
        _0x1f4366("");
      } catch {
        _0x218f27(true);
      } finally {
        _0x2c9f68(false);
      }
    }
  }, [_0x36629e, _0xd8e99, _0x1b4ea8, _0x300156, _0x4e830c, _0x39a2e7]);
  const _0x300655 = _0x1e9105.useCallback(_0x43c64c => {
    if (!_0x43c64c) {
      _0x5641ce(null);
      _0x1f4366("");
      _0x218f27(false);
    }
    _0x4e830c(_0x43c64c);
  }, [_0x4e830c]);
  const _0x5c8390 = _0x1e9105.useMemo(() => _0x339f29.jsxs("div", {
    className: "flex flex-col min-h-0 max-h-[calc(85dvh-120px)]",
    children: [_0x339f29.jsxs("div", {
      className: "flex-1 min-h-0 overflow-y-auto scrollbar-thin",
      children: [_0x339f29.jsx("div", {
        className: "px-4 py-3",
        children: _0x339f29.jsx("div", {
          className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden divide-y divide-border-default",
          children: _0x4fc3a1.map(_0x39f0b0 => {
            const _0x5f069c = _0x36629e === _0x39f0b0.value;
            return _0x339f29.jsxs("button", {
              "aria-pressed": _0x5f069c,
              disabled: _0x5280a1,
              onClick: () => _0x5641ce(_0x39f0b0.value),
              className: "w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors cursor-pointer " + (_0x5f069c ? "bg-surface-overlay/50" : "active:bg-surface-overlay/50"),
              children: [_0x339f29.jsx("span", {
                className: "flex size-7 shrink-0 items-center justify-center rounded-lg " + (_0x5f069c ? "bg-accent-subtle text-accent-primary-text" : "bg-surface-overlay/70 text-text-tertiary") + " transition-colors",
                children: _0x39f0b0.icon
              }), _0x339f29.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [_0x339f29.jsx("span", {
                  className: "text-[14px] font-medium block " + (_0x5f069c ? "text-text-primary" : "text-text-secondary"),
                  children: _0x39a2e7(_0x39f0b0.labelKey)
                }), _0x339f29.jsx("p", {
                  className: "text-[12px] text-text-muted mt-0.5 leading-tight",
                  children: _0x39a2e7(_0x39f0b0.descKey)
                })]
              }), _0x5f069c && _0x339f29.jsx("span", {
                className: "flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-subtle",
                children: _0x339f29.jsx(_0x2aa6c9, {
                  className: "size-3.5 text-accent-primary-text"
                })
              })]
            }, _0x39f0b0.value);
          })
        })
      }), _0x36629e && _0x339f29.jsxs("div", {
        className: "px-4 pb-3",
        children: [_0x339f29.jsx("label", {
          className: "text-xs text-text-tertiary mb-1.5 block",
          children: _0x39a2e7(_0xd35e2d ? "report.descriptionRequired" : "report.descriptionOptional")
        }), _0x339f29.jsx("textarea", {
          value: _0xd8e99,
          onChange: _0x397478 => _0x1f4366(_0x397478.target.value.slice(0, _0x32ea0d)),
          placeholder: _0x39a2e7("report.descriptionPlaceholder"),
          rows: 3,
          className: "w-full px-3 py-2 rounded-lg bg-surface-overlay/50 border border-border-default text-text-primary text-sm placeholder:text-text-muted outline-none focus:ring-1 focus:ring-accent-primary/30 transition-all resize-none scrollbar-thin"
        }), _0x339f29.jsxs("div", {
          className: "flex items-center justify-between mt-1.5",
          children: [_0x339f29.jsxs("span", {
            className: "text-[11px] text-text-muted",
            children: [_0xd8e99.length, "/", _0x32ea0d]
          }), _0xd35e2d && _0xd8e99.trim().length === 0 && _0x339f29.jsx("span", {
            className: "text-[11px] text-red-400",
            children: _0x39a2e7("report.descriptionRequiredHint")
          })]
        })]
      })]
    }), _0x339f29.jsxs("div", {
      className: "px-4 py-3 border-t border-border-subtle shrink-0",
      children: [_0x1fd9b2 && _0x339f29.jsx("p", {
        role: "alert",
        className: "mb-3 text-sm text-red-400",
        children: _0x39a2e7("moderation.failed")
      }), _0x339f29.jsxs("div", {
        className: "flex items-center gap-2",
        children: [_0x339f29.jsx("button", {
          onClick: () => _0x300655(false),
          className: "flex-1 h-10 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer",
          children: _0x39a2e7("report.cancel")
        }), _0x339f29.jsxs("button", {
          onClick: _0x6f9f44,
          disabled: !_0x1b4ea8 || _0x5280a1,
          className: "flex-1 h-10 rounded-xl bg-red-500 hover:bg-red-500/90 text-text-primary text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer",
          children: [_0x5280a1 ? _0x339f29.jsx(_0x2c446e, {
            className: "size-4 animate-spin"
          }) : _0x339f29.jsx(_0x1f718f, {
            icon: "solar:flag-bold-duotone",
            className: "size-4"
          }), _0x39a2e7("report.submit")]
        })]
      })]
    })]
  }), [_0x36629e, _0xd8e99, _0x5280a1, _0x1fd9b2, _0x1b4ea8, _0xd35e2d, _0x4fc3a1, _0x32ea0d, _0x6f9f44, _0x300655, _0x39a2e7]);
  if (_0x171cd1) {
    return _0x339f29.jsx(_0x525bf9, {
      open: _0x6be100,
      onOpenChange: _0x300655,
      children: _0x339f29.jsxs(_0x2a11ae, {
        className: "bg-surface-raised border-border-default text-text-primary max-h-[90dvh]",
        children: [_0x339f29.jsxs(_0xe611e1, {
          className: "px-4 py-3 border-b border-border-subtle",
          children: [_0x339f29.jsx(_0x3246b6, {
            className: "text-lg font-semibold",
            children: _0x4ccd6c
          }), _0x339f29.jsx(_0x1f3f9e, {
            className: "text-text-muted text-sm",
            children: _0x1ec465
          })]
        }), _0x5c8390]
      })
    });
  } else {
    return _0x339f29.jsx(_0x4b5f1e, {
      open: _0x6be100,
      onOpenChange: _0x300655,
      children: _0x339f29.jsx(_0x35f2d5, {
        className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md overflow-hidden max-h-[85dvh]",
        children: _0x339f29.jsx("div", {
          className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40",
          children: _0x339f29.jsxs("div", {
            className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col max-h-[85dvh]",
            children: [_0x339f29.jsxs(_0x296561, {
              className: "px-4 py-4 border-b border-border-subtle shrink-0",
              children: [_0x339f29.jsx(_0x141506, {
                className: "text-lg font-semibold text-text-primary",
                children: _0x4ccd6c
              }), _0x339f29.jsx(_0x59c635, {
                className: "text-text-muted text-sm",
                children: _0x1ec465
              })]
            }), _0x5c8390]
          })
        })
      })
    });
  }
});
export { f as R };