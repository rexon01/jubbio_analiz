import { u as _0x4c20c8, a as _0x43f28c, b as _0x3d88e6, r as _0x4cc831, c as _0x59eede, j as _0x367950 } from "./index-cQfEKR1W.js";
import { D as _0x16b03a, a as _0x8db8c0, b as _0x52a03c, c, d as _0x2571ff } from "./dialog-BMMpM7PR.js";
import { D as _0x560baf, a as _0x3be8b5, b as _0x2b92b7, c as _0x4e1e85, d as _0x3dc6f4 } from "./drawer-X7YyCqpZ.js";
import "./index-yuEHo9bu.js";
const p = () => {
  const _0x18cfcd = _0x4c20c8(_0x17d31d => _0x17d31d.activeModal);
  const _0x2625bf = _0x4c20c8(_0x41c2d5 => _0x41c2d5.closeModal);
  const _0xdce7c6 = _0x43f28c("(max-width: 767px)");
  const {
    t: _0xcc0266
  } = _0x3d88e6();
  const [_0x341735, _0x4cc33b] = _0x4cc831.useState({});
  const [_0xe5356f, _0x1bd079] = _0x4cc831.useState(false);
  const [_0x3fcdeb, _0x2c257e] = _0x4cc831.useState({});
  _0x4cc831.useEffect(() => {
    if (_0x18cfcd?.data) {
      const _0x3b072b = {};
      _0x18cfcd.data.components.forEach(_0x42224d => {
        _0x42224d.components.forEach(_0x11e369 => {
          _0x3b072b[_0x11e369.custom_id] = _0x11e369.value || "";
        });
      });
      _0x4cc33b(_0x3b072b);
      _0x2c257e({});
    }
  }, [_0x18cfcd]);
  const _0x4f9740 = _0x4cc831.useCallback((_0x2aea04, _0x315781) => {
    _0x4cc33b(_0x235fa1 => ({
      ..._0x235fa1,
      [_0x2aea04]: _0x315781
    }));
    _0x2c257e(_0x1865f7 => ({
      ..._0x1865f7,
      [_0x2aea04]: ""
    }));
  }, []);
  const _0x45cac2 = _0x4cc831.useCallback(() => {
    if (!_0x18cfcd?.data) {
      return false;
    }
    const _0x16fb82 = {};
    let _0x2b6d34 = true;
    _0x18cfcd.data.components.forEach(_0x484c25 => {
      _0x484c25.components.forEach(_0x240727 => {
        const _0x4c1199 = _0x341735[_0x240727.custom_id] || "";
        if (_0x240727.required !== false && _0x4c1199.length === 0) {
          _0x16fb82[_0x240727.custom_id] = _0xcc0266("interactionModal.required");
          _0x2b6d34 = false;
        } else if (_0x240727.min_length && _0x4c1199.length < _0x240727.min_length) {
          _0x16fb82[_0x240727.custom_id] = _0xcc0266("interactionModal.minLength", {
            count: _0x240727.min_length
          });
          _0x2b6d34 = false;
        } else if (_0x240727.max_length && _0x4c1199.length > _0x240727.max_length) {
          _0x16fb82[_0x240727.custom_id] = _0xcc0266("interactionModal.maxLength", {
            count: _0x240727.max_length
          });
          _0x2b6d34 = false;
        }
      });
    });
    _0x2c257e(_0x16fb82);
    return _0x2b6d34;
  }, [_0x18cfcd, _0x341735]);
  const _0x30efdb = _0x4cc831.useCallback(async () => {
    if (_0x18cfcd && _0x45cac2()) {
      _0x1bd079(true);
      try {
        const _0xe16693 = _0x18cfcd.data.components.map(_0x209287 => ({
          type: 1,
          components: _0x209287.components.map(_0x26fd20 => ({
            type: 4,
            custom_id: _0x26fd20.custom_id,
            value: _0x341735[_0x26fd20.custom_id] || ""
          }))
        }));
        await _0x59eede.post("/api/v1/interactions/modal", {
          application_id: _0x18cfcd.application_id,
          custom_id: _0x18cfcd.data.custom_id,
          guild_id: _0x18cfcd.guild_id,
          channel_id: _0x18cfcd.channel_id,
          components: _0xe16693
        });
        _0x2625bf();
      } catch (_0x18e0f8) {
        console.error("Modal submit failed:", _0x18e0f8);
      } finally {
        _0x1bd079(false);
      }
    }
  }, [_0x18cfcd, _0x341735, _0x45cac2, _0x2625bf]);
  if (!_0x18cfcd) {
    return null;
  }
  const _0x397cb5 = _0x367950.jsxs("div", {
    className: "flex flex-col h-full",
    children: [_0x367950.jsx("div", {
      className: "px-4 py-4 flex-1 overflow-y-auto scrollbar-thin",
      children: _0x18cfcd.data.components.map((_0x324698, _0x2b263b) => _0x367950.jsx("div", {
        className: "mb-4 last:mb-0",
        children: _0x324698.components.map(_0x2371e3 => _0x367950.jsx(f, {
          input: _0x2371e3,
          value: _0x341735[_0x2371e3.custom_id] || "",
          error: _0x3fcdeb[_0x2371e3.custom_id],
          onChange: _0xb36820 => _0x4f9740(_0x2371e3.custom_id, _0xb36820)
        }, _0x2371e3.custom_id))
      }, _0x2b263b))
    }), _0x367950.jsx("div", {
      className: "sticky bottom-0 px-4 py-3 border-t border-border-subtle bg-surface-raised/95 backdrop-blur-xl",
      children: _0x367950.jsxs("div", {
        className: "flex items-center gap-2",
        children: [_0x367950.jsx("button", {
          onClick: _0x2625bf,
          className: "flex-1 h-10 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer",
          children: _0xcc0266("interactionModal.cancel")
        }), _0x367950.jsx("button", {
          onClick: _0x30efdb,
          disabled: _0xe5356f,
          className: "flex-1 h-10 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer",
          children: _0xe5356f ? _0x367950.jsxs(_0x367950.Fragment, {
            children: [_0x367950.jsx("div", {
              className: "size-4 border-2 border-black/30 border-t-black rounded-full animate-spin"
            }), _0xcc0266("interactionModal.submitting")]
          }) : _0xcc0266("interactionModal.submit")
        })]
      })
    })]
  });
  if (_0xdce7c6) {
    return _0x367950.jsx(_0x560baf, {
      open: !!_0x18cfcd,
      onOpenChange: _0x2a6466 => !_0x2a6466 && _0x2625bf(),
      children: _0x367950.jsxs(_0x3be8b5, {
        className: "bg-surface-raised border-border-default text-text-primary max-h-[90dvh]",
        children: [_0x367950.jsxs(_0x2b92b7, {
          className: "px-4 py-3 border-b border-border-subtle",
          children: [_0x367950.jsx(_0x4e1e85, {
            className: "text-lg font-semibold",
            children: _0x18cfcd.data.title
          }), _0x367950.jsx(_0x3dc6f4, {
            className: "text-text-muted text-sm",
            children: _0xcc0266("interactionModal.description")
          })]
        }), _0x367950.jsx("div", {
          className: "flex-1 overflow-y-auto scrollbar-thin flex flex-col",
          children: _0x397cb5
        })]
      })
    });
  } else {
    return _0x367950.jsx(_0x16b03a, {
      open: !!_0x18cfcd,
      onOpenChange: _0x3bf8c0 => !_0x3bf8c0 && _0x2625bf(),
      children: _0x367950.jsx(_0x8db8c0, {
        className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md max-h-[85dvh] overflow-hidden",
        children: _0x367950.jsx("div", {
          className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40",
          children: _0x367950.jsxs("div", {
            className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col max-h-[85dvh]",
            children: [_0x367950.jsxs(_0x52a03c, {
              className: "px-4 py-4 border-b border-border-subtle shrink-0",
              children: [_0x367950.jsx(c, {
                className: "text-lg font-semibold text-text-primary",
                children: _0x18cfcd.data.title
              }), _0x367950.jsx(_0x2571ff, {
                className: "text-text-muted text-sm",
                children: _0xcc0266("interactionModal.description")
              })]
            }), _0x367950.jsx("div", {
              className: "flex-1 overflow-y-auto scrollbar-thin flex flex-col min-h-0",
              children: _0x397cb5
            })]
          })
        })
      })
    });
  }
};
const f = ({
  input: _0x110738,
  value: _0x1c6ff2,
  error: _0x514d04,
  onChange: _0x14a33a
}) => {
  const _0x80f9fe = _0x110738.required !== false;
  const _0x54e9e = _0x1c6ff2.length;
  const _0x463680 = _0x110738.max_length || 4000;
  return _0x367950.jsxs("div", {
    className: "space-y-1.5",
    children: [_0x367950.jsxs("label", {
      className: "block text-xs font-semibold text-text-tertiary uppercase tracking-wide",
      children: [_0x110738.label, _0x80f9fe && _0x367950.jsx("span", {
        className: "text-red-400 ml-1",
        children: "*"
      })]
    }), _0x110738.style === 1 ? _0x367950.jsx("input", {
      type: "text",
      value: _0x1c6ff2,
      onChange: _0x1751e4 => {
        const _0x6a19ab = _0x1751e4.target.value;
        if (!_0x110738.max_length || new TextEncoder().encode(_0x6a19ab).length <= _0x110738.max_length * 4) {
          _0x14a33a(_0x6a19ab);
        }
      },
      placeholder: _0x110738.placeholder,
      maxLength: _0x110738.max_length,
      className: "w-full h-11 px-4 rounded-xl bg-surface-inset/40 border text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors " + (_0x514d04 ? "border-red-500/50 focus:border-red-500" : "border-border-subtle focus:border-accent-primary/50")
    }) : _0x367950.jsx("textarea", {
      value: _0x1c6ff2,
      onChange: _0x4251f2 => {
        const _0x40a86e = _0x4251f2.target.value;
        if (!_0x110738.max_length || new TextEncoder().encode(_0x40a86e).length <= _0x110738.max_length * 4) {
          _0x14a33a(_0x40a86e);
        }
      },
      placeholder: _0x110738.placeholder,
      maxLength: _0x110738.max_length,
      rows: 4,
      className: "w-full px-4 py-3 rounded-xl bg-surface-inset/40 border text-sm text-text-primary placeholder:text-text-muted outline-none resize-y min-h-[100px] transition-colors scrollbar-thin " + (_0x514d04 ? "border-red-500/50 focus:border-red-500" : "border-border-subtle focus:border-accent-primary/50")
    }), _0x367950.jsxs("div", {
      className: "flex justify-between items-center",
      children: [_0x514d04 ? _0x367950.jsx("span", {
        className: "text-xs text-red-400",
        children: _0x514d04
      }) : _0x367950.jsx("span", {}), _0x367950.jsxs("span", {
        className: "text-xs text-text-muted",
        children: [_0x54e9e, " / ", _0x463680, _0x110738.min_length && _0x54e9e < _0x110738.min_length && _0x367950.jsxs("span", {
          className: "text-amber-400 ml-1",
          children: ["(min: ", _0x110738.min_length, ")"]
        })]
      })]
    })]
  });
};
export { p as InteractionModal, p as default };