import { t as _0x43d9c3, R as _0x4b76f8, b as _0x1c6225, r, j as _0x341ee2, aN as _0x30b6e9, I as _0x4247a6, aG as _0x382aa4, an as _0x414adf, B as _0x266aa8 } from "./index-cQfEKR1W.js";
import { a as _0x1568a9, i as _0x13eb7f } from "./forumStore-8MsrR85a.js";
import { u as _0x5623ed, E as _0xfa9517 } from "./AppLayout-BEBJqe9_.js";
import { D as _0xe37606, a as _0x51fe5b, c as _0x309893 } from "./dialog-BMMpM7PR.js";
import { V as _0x1e2378 } from "./index-Oyyh46KT.js";
import { P as _0x4ea6aa, a as _0x51c305, b as _0x41fa79 } from "./tr-D975n4_R.js";
import { F as _0x31f51d } from "./ForumTagBadge-BD2DdFbQ.js";
import { S as _0x4e6fcb } from "./search-BXcLTinX.js";
/**
* @license lucide-react v0.535.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const w = _0x43d9c3("tag", [["path", {
  d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
  key: "vktsd0"
}], ["circle", {
  cx: "7.5",
  cy: "7.5",
  r: ".5",
  fill: "currentColor",
  key: "kqv944"
}]]);
const k = ({
  className: _0x4bf720
}) => _0x341ee2.jsx(_0x4247a6, {
  icon: "solar:like-bold-duotone",
  className: _0x4bf720
});
const C = ({
  className: _0x2ffa34
}) => _0x341ee2.jsx(_0x4247a6, {
  icon: "solar:dislike-bold-duotone",
  className: _0x2ffa34
});
const S = _0x4b76f8.memo(({
  guildId: _0x17ab8e,
  channelId: _0xba858e,
  postId: _0x1b18e1,
  score: _0x66171,
  userVote: _0x13fbec,
  allowDownvotes: _0x41ab38 = false,
  shrink: _0x1b1734 = false,
  vertical: _0x1764ec = false
}) => {
  const {
    t: _0x6cd36e
  } = _0x1c6225();
  const {
    has: _0x1ab37f
  } = _0x5623ed(_0x17ab8e);
  const _0x110b79 = _0x1ab37f(_0x382aa4.SEND_MESSAGES_IN_THREADS);
  const _0x2e7afb = r.useCallback((_0x4ad5d9, _0x5ed740) => {
    _0x4ad5d9.stopPropagation();
    if (_0x110b79) {
      if (_0x13fbec === _0x5ed740) {
        _0x1568a9.getState().removeVote(_0x17ab8e, _0xba858e, _0x1b18e1);
      } else {
        _0x1568a9.getState().vote(_0x17ab8e, _0xba858e, _0x1b18e1, _0x5ed740);
      }
    }
  }, [_0x17ab8e, _0xba858e, _0x1b18e1, _0x13fbec, _0x110b79]);
  const _0x1f6ec0 = _0x341ee2.jsxs("div", {
    className: "flex " + (_0x1764ec ? "flex-col" : "") + " items-center gap-0.5 rounded-full bg-surface-inset border border-white/[0.06] " + (_0x1764ec ? "py-0.5 w-7" : "px-0.5 h-7") + " " + (_0x1b1734 ? "shrink-0" : "") + " " + (_0x110b79 ? "" : "opacity-60 cursor-not-allowed"),
    children: [_0x341ee2.jsx("button", {
      onClick: _0x113372 => _0x2e7afb(_0x113372, 1),
      disabled: !_0x110b79,
      className: "size-6 rounded-full flex items-center justify-center transition-colors " + (_0x110b79 ? "cursor-pointer" : "cursor-not-allowed") + " " + (_0x13fbec === 1 ? "text-green-400 bg-green-400/10" : "text-text-muted hover:text-green-400 hover:bg-green-400/10"),
      children: _0x341ee2.jsx(k, {
        className: "size-4"
      })
    }), _0x341ee2.jsx("span", {
      className: "text-[12px] font-bold min-w-[18px] text-center tabular-nums " + (_0x66171 > 0 ? "text-green-400" : _0x66171 < 0 ? "text-red-400" : "text-text-secondary"),
      children: _0x66171
    }), _0x41ab38 && _0x341ee2.jsx("button", {
      onClick: _0x37efee => _0x2e7afb(_0x37efee, -1),
      disabled: !_0x110b79,
      className: "size-6 rounded-full flex items-center justify-center transition-colors " + (_0x110b79 ? "cursor-pointer" : "cursor-not-allowed") + " " + (_0x13fbec === -1 ? "text-red-400 bg-red-400/10" : "text-text-muted hover:text-red-400 hover:bg-red-400/10"),
      children: _0x341ee2.jsx(C, {
        className: "size-4"
      })
    })]
  });
  if (_0x110b79) {
    return _0x1f6ec0;
  } else {
    return _0x341ee2.jsx(_0x30b6e9, {
      label: _0x6cd36e("forum.noVotePermission"),
      side: "top",
      children: _0x1f6ec0
    });
  }
});
const z = _0x4b76f8.memo(({
  open: _0x788967,
  onOpenChange: _0x2059ea,
  post: _0x498876,
  guildId: _0x1eea7d,
  channelId: _0x3bf93e,
  settings: _0x44732d
}) => {
  const {
    t: _0x45b9e8
  } = _0x1c6225();
  const _0x36f446 = _0x13eb7f(_0x3bf93e);
  const [_0x2be59f, _0x579311] = r.useState(_0x498876.title);
  const [_0x1984cc, _0x309430] = r.useState(_0x498876.content || "");
  const [_0x5dbb60, _0x3263c2] = r.useState(_0x498876.tags?.map(_0x36db47 => _0x36db47.id) ?? []);
  const [_0x3e003e, _0x2e198f] = r.useState("");
  const [_0x2f72a7, _0x29b587] = r.useState(false);
  const _0x38ae8d = r.useRef(null);
  const _0x449f58 = r.useRef(null);
  const _0x39f8d0 = r.useRef("title");
  r.useEffect(() => {
    if (_0x788967) {
      _0x579311(_0x498876.title);
      _0x309430(_0x498876.content || "");
      _0x3263c2(_0x498876.tags?.map(_0x2e1a64 => _0x2e1a64.id) ?? []);
      _0x2e198f("");
      setTimeout(() => _0x38ae8d.current?.focus(), 50);
    }
  }, [_0x788967, _0x498876.id]);
  const _0x37fcc2 = _0x44732d?.max_title_length ?? 100;
  const _0x1caed6 = _0x44732d?.min_title_length ?? 5;
  const _0x2844a1 = _0x44732d?.require_tag ?? false;
  const _0x63bdef = r.useMemo(() => !(_0x2be59f.trim().length < _0x1caed6) && !(_0x2be59f.length > _0x37fcc2) && (!_0x2844a1 || _0x5dbb60.length !== 0), [_0x2be59f, _0x5dbb60, _0x1caed6, _0x37fcc2, _0x2844a1]);
  const _0x880506 = r.useMemo(() => {
    const _0x4fca67 = (_0x498876.tags?.map(_0x1e4e03 => _0x1e4e03.id) ?? []).sort().join(",");
    const _0x4618f3 = [..._0x5dbb60].sort().join(",");
    return _0x2be59f !== _0x498876.title || _0x1984cc !== (_0x498876.content || "") || _0x4fca67 !== _0x4618f3;
  }, [_0x2be59f, _0x1984cc, _0x5dbb60, _0x498876]);
  const _0x169fef = r.useMemo(() => {
    if (!_0x3e003e.trim()) {
      return _0x36f446;
    }
    const _0x26c094 = _0x3e003e.toLowerCase();
    return _0x36f446.filter(_0x10200c => _0x10200c.name.toLowerCase().includes(_0x26c094));
  }, [_0x36f446, _0x3e003e]);
  const _0x13b5d6 = r.useCallback(_0x4c1e65 => {
    _0x3263c2(_0x572315 => _0x572315.includes(_0x4c1e65) ? _0x572315.filter(_0x28755c => _0x28755c !== _0x4c1e65) : _0x572315.length >= 5 ? _0x572315 : [..._0x572315, _0x4c1e65]);
  }, []);
  const _0xcf62d3 = r.useCallback(_0x566dc1 => {
    if (_0x39f8d0.current === "title") {
      _0x579311(_0x50d151 => _0x50d151 + _0x566dc1);
    } else {
      _0x309430(_0x504a70 => _0x504a70 + _0x566dc1);
    }
  }, []);
  const _0x2efd86 = r.useCallback(async () => {
    if (_0x63bdef && _0x880506 && !_0x2f72a7) {
      _0x29b587(true);
      try {
        const _0x14c52d = {};
        if (_0x2be59f !== _0x498876.title) {
          _0x14c52d.title = _0x2be59f.trim();
        }
        if (_0x1984cc !== (_0x498876.content || "")) {
          _0x14c52d.content = _0x1984cc.trim();
        }
        const _0x3ddf8b = (_0x498876.tags?.map(_0x12e58b => _0x12e58b.id) ?? []).sort().join(",");
        if (_0x3ddf8b !== [..._0x5dbb60].sort().join(",")) {
          _0x14c52d.tag_ids = _0x5dbb60;
        }
        await _0x1568a9.getState().updatePost(_0x1eea7d, _0x3bf93e, _0x498876.id, _0x14c52d);
        _0x2059ea(false);
      } catch {} finally {
        _0x29b587(false);
      }
    }
  }, [_0x63bdef, _0x880506, _0x2f72a7, _0x2be59f, _0x1984cc, _0x5dbb60, _0x498876, _0x1eea7d, _0x3bf93e, _0x2059ea]);
  return _0x341ee2.jsx(_0xe37606, {
    open: _0x788967,
    onOpenChange: _0x2059ea,
    children: _0x341ee2.jsxs(_0x51fe5b, {
      className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md overflow-hidden",
      "aria-describedby": undefined,
      children: [_0x341ee2.jsx(_0x1e2378, {
        children: _0x341ee2.jsx(_0x309893, {
          children: _0x45b9e8("forum.editPost")
        })
      }), _0x341ee2.jsx("div", {
        className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40",
        children: _0x341ee2.jsxs("div", {
          className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col",
          children: [_0x341ee2.jsxs("div", {
            className: "px-4 pt-4 pb-2",
            children: [_0x341ee2.jsx("input", {
              ref: _0x38ae8d,
              value: _0x2be59f,
              onChange: _0x165dbb => _0x579311(_0x165dbb.target.value),
              onFocus: () => {
                _0x39f8d0.current = "title";
              },
              placeholder: _0x45b9e8("forum.postTitlePlaceholder"),
              maxLength: _0x37fcc2,
              className: "w-full pr-10 bg-transparent text-lg font-medium text-text-primary placeholder:text-text-muted outline-none mb-3"
            }), _0x341ee2.jsx("textarea", {
              ref: _0x449f58,
              value: _0x1984cc,
              onChange: _0x3fe3c3 => _0x309430(_0x3fe3c3.target.value),
              onFocus: () => {
                _0x39f8d0.current = "content";
              },
              placeholder: _0x45b9e8("forum.postContentPlaceholder"),
              rows: 5,
              className: "w-full bg-transparent text-[13px] text-text-secondary placeholder:text-text-muted/60 outline-none resize-y leading-relaxed min-h-[120px] overflow-y-auto scrollbar-thin"
            })]
          }), _0x341ee2.jsxs("div", {
            className: "flex items-center gap-2 px-4 py-3 border-t border-border-default/40",
            children: [_0x341ee2.jsx("div", {
              className: "flex items-center h-8 rounded-full bg-surface-inset/50 border border-white/[0.06] overflow-hidden shrink-0",
              children: _0x341ee2.jsx(_0xfa9517, {
                onEmojiSelect: _0xcf62d3,
                initialMode: "emoji",
                hideGif: true,
                modal: true,
                children: _0x341ee2.jsx("button", {
                  type: "button",
                  className: "flex items-center justify-center w-8 h-8 text-text-muted hover:text-text-primary hover:bg-surface-inset/60 transition-colors cursor-pointer",
                  children: _0x341ee2.jsx(_0x4247a6, {
                    icon: "solar:emoji-funny-circle-bold",
                    className: "size-4"
                  })
                })
              })
            }), _0x36f446.length > 0 && _0x341ee2.jsxs(_0x4ea6aa, {
              modal: true,
              children: [_0x341ee2.jsx(_0x51c305, {
                asChild: true,
                children: _0x341ee2.jsxs("div", {
                  className: "flex items-center gap-1.5 h-8 px-3 rounded-full border cursor-pointer transition-colors shrink-0 " + (_0x5dbb60.length > 0 ? "bg-accent-subtle text-accent-primary-text border-white/[0.06]" : _0x2844a1 && _0x5dbb60.length === 0 ? "bg-red-500/10 text-red-400 border-red-500/20 animate-pulse" : "bg-surface-inset/50 text-text-muted hover:text-text-primary hover:bg-surface-inset/80 border-white/[0.06]"),
                  children: [_0x341ee2.jsx(w, {
                    className: "size-3.5"
                  }), _0x341ee2.jsx("span", {
                    className: "text-[12px] font-medium",
                    children: _0x5dbb60.length > 0 ? _0x5dbb60.length + " etiket" : _0x45b9e8(_0x2844a1 ? "forum.tags.required" : "forum.tags.selectTags")
                  })]
                })
              }), _0x341ee2.jsxs(_0x41fa79, {
                className: "w-52 p-0 bg-surface-overlay/95 backdrop-blur-xl border-border-default",
                align: "start",
                sideOffset: 8,
                children: [_0x341ee2.jsx("div", {
                  className: "p-2 border-b border-white/05",
                  children: _0x341ee2.jsxs("div", {
                    className: "flex items-center gap-2 px-2.5 h-8 rounded-lg bg-surface-inset/40 border border-border-default/60",
                    children: [_0x341ee2.jsx(_0x4e6fcb, {
                      className: "size-3.5 text-text-muted shrink-0"
                    }), _0x341ee2.jsx("input", {
                      value: _0x3e003e,
                      onChange: _0x1a1595 => _0x2e198f(_0x1a1595.target.value),
                      placeholder: _0x45b9e8("common.search"),
                      className: "flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none"
                    })]
                  })
                }), _0x341ee2.jsxs("div", {
                  className: "max-h-60 overflow-y-auto p-2 scrollbar-none space-y-0.5",
                  children: [_0x341ee2.jsxs("div", {
                    className: "flex items-center justify-between px-2.5 py-1",
                    children: [_0x341ee2.jsx("span", {
                      className: "text-[11px] font-semibold text-text-primary",
                      children: _0x45b9e8("forum.tags.selectTags")
                    }), _0x341ee2.jsxs("span", {
                      className: "text-[11px] font-medium " + (_0x5dbb60.length >= 5 ? "text-red-400" : "text-text-muted"),
                      children: [_0x5dbb60.length, "/5"]
                    })]
                  }), _0x169fef.length > 0 ? _0x169fef.map(_0x4b943f => {
                    const _0xf83bfd = _0x5dbb60.includes(_0x4b943f.id);
                    const _0x828ea9 = !_0xf83bfd && _0x5dbb60.length >= 5;
                    return _0x341ee2.jsxs("button", {
                      onClick: () => !_0x828ea9 && _0x13b5d6(_0x4b943f.id),
                      className: "w-full text-left px-2.5 py-1.5 rounded-md text-[12px] transition-colors flex items-center gap-2 " + (_0xf83bfd ? "bg-accent-subtle text-accent-primary-text font-medium cursor-pointer" : _0x828ea9 ? "text-text-muted/50 cursor-not-allowed" : "text-text-secondary hover:bg-surface-inset/50 cursor-pointer"),
                      children: [_0x341ee2.jsx(_0x31f51d, {
                        name: _0x4b943f.name,
                        emoji: _0x4b943f.emoji,
                        color: _0x4b943f.color,
                        size: "small",
                        className: _0x828ea9 ? "opacity-40" : ""
                      }), _0x341ee2.jsx("span", {
                        className: "ml-auto shrink-0",
                        children: _0xf83bfd && _0x341ee2.jsx(_0x414adf, {
                          className: "size-3.5"
                        })
                      })]
                    }, _0x4b943f.id);
                  }) : _0x341ee2.jsx("p", {
                    className: "px-2.5 py-3 text-xs text-text-muted italic text-center",
                    children: _0x45b9e8("common.noResults")
                  })]
                })]
              })]
            }), _0x341ee2.jsx(_0x266aa8, {
              size: "sm",
              className: "h-8 px-4 text-[13px] font-semibold shrink-0 ml-auto",
              onClick: _0x2efd86,
              disabled: !_0x63bdef || !_0x880506 || _0x2f72a7,
              children: _0x45b9e8(_0x2f72a7 ? "common.loading" : "common.save")
            })]
          })]
        })
      })]
    })
  });
});
export { S as F, w as T, z as a };