import { t as _0x13ab53, R as _0x1d7495, cP as _0x18ef1e, a, r as _0x1792b2, j as _0x2f7094, b as _0x531aba, F as _0x5899a6 } from "./index-cQfEKR1W.js";
import { D as _0x47e03c, a as _0x50afd6, b as _0x3df16e, c as _0xb052b8, d as _0x4342e4 } from "./dialog-BMMpM7PR.js";
import { D as _0x17c677, a as _0x4a2912, b as _0x37f8b8, c as _0x366741, d as _0x34102a } from "./drawer-X7YyCqpZ.js";
import { fetchLatestChangelog as _0x5d1169, dismissChangelog as _0xa2a3e0 } from "./changelog-CKthbQuH.js";
import { C as _0x4a112c } from "./chevron-left-CoNyL-61.js";
import { Z as _0x23f260 } from "./zap-B3VH4qT9.js";
import { S as _0x2675ea } from "./sparkles-CEeENQ_D.js";
import "./index-yuEHo9bu.js"; /**
                              * @license lucide-react v0.535.0 - ISC
                              *
                              * This source code is licensed under the ISC license.
                              * See the LICENSE file in the root directory of this source tree.
                              */
const k = _0x13ab53("wrench", [["path", {
  d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
  key: "1ngwbx"
}]]);
const w = {
  feature: _0x2f7094.jsx(_0x2675ea, {
    className: "size-3.5"
  }),
  improvement: _0x2f7094.jsx(_0x23f260, {
    className: "size-3.5"
  }),
  fix: _0x2f7094.jsx(k, {
    className: "size-3.5"
  })
};
const C = {
  feature: {
    bg: "bg-accent-subtle",
    text: "text-accent-primary-text",
    labelKey: "changelog.new"
  },
  improvement: {
    bg: "bg-sky-500/15",
    text: "text-sky-400",
    labelKey: "changelog.improved"
  },
  fix: {
    bg: "bg-orange-500/15",
    text: "text-orange-400",
    labelKey: "changelog.fixed"
  }
};
const z = _0x1d7495.memo(({
  slide: _0x2f4e0a,
  currentSlide: _0x4d0b82,
  total: _0x5e9b0c,
  isLast: _0x122529,
  direction: _0x26e73b,
  onNext: _0x1430ec,
  onPrev: _0xb50788,
  onGoTo: _0x48bbe0,
  onClose: _0x2ffff9
}) => {
  const {
    t: _0x5d3f4d
  } = _0x531aba();
  const _0x36db98 = _0x2f4e0a.type === "hero";
  const _0x5dfe94 = _0x36db98 ? null : C[_0x2f4e0a.type];
  const _0x5a8cb6 = _0x36db98 ? null : w[_0x2f4e0a.type];
  return _0x2f7094.jsxs("div", {
    className: "flex flex-col",
    children: [(_0x2f4e0a.video_url || _0x2f4e0a.image_url) && _0x2f7094.jsxs("div", {
      className: "relative w-full aspect-[2/1] overflow-hidden bg-surface-overlay border-b border-border-subtle",
      children: [_0x2f4e0a.video_url ? _0x2f7094.jsx("video", {
        src: _0x2f4e0a.video_url,
        autoPlay: true,
        loop: true,
        muted: true,
        playsInline: true,
        className: "absolute inset-0 w-full h-full object-cover " + (_0x26e73b === "left" ? "animate-in slide-in-from-right-full duration-300" : "animate-in slide-in-from-left-full duration-300")
      }, "video-" + _0x4d0b82) : _0x2f7094.jsx("img", {
        src: _0x2f4e0a.image_url,
        alt: _0x2f4e0a.title,
        className: "absolute inset-0 w-full h-full object-cover " + (_0x26e73b === "left" ? "animate-in slide-in-from-right-full duration-300" : "animate-in slide-in-from-left-full duration-300"),
        draggable: false
      }, "img-" + _0x4d0b82), _0x4d0b82 > 0 && _0x2f7094.jsx("button", {
        onClick: _0xb50788,
        className: "absolute left-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center transition-colors cursor-pointer",
        children: _0x2f7094.jsx(_0x4a112c, {
          className: "size-4 text-text-primary"
        })
      }), _0x4d0b82 < _0x5e9b0c - 1 && _0x2f7094.jsx("button", {
        onClick: _0x1430ec,
        className: "absolute right-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm flex items-center justify-center transition-colors cursor-pointer",
        children: _0x2f7094.jsx(_0x5899a6, {
          className: "size-4 text-text-primary"
        })
      }), _0x2f7094.jsx("div", {
        className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5",
        children: Array.from({
          length: _0x5e9b0c
        }).map((_0x5a5c84, _0x47fd92) => _0x2f7094.jsx("button", {
          onClick: () => _0x48bbe0(_0x47fd92),
          className: "rounded-full transition-all duration-200 cursor-pointer " + (_0x47fd92 === _0x4d0b82 ? "w-5 h-1.5 bg-white" : "size-1.5 bg-surface-overlay/60 hover:bg-surface-overlay/80")
        }, _0x47fd92))
      })]
    }), _0x2f7094.jsx("div", {
      className: "px-5 pt-4 pb-2 " + (_0x26e73b === "left" ? "animate-in fade-in slide-in-from-right-4 duration-300" : "animate-in fade-in slide-in-from-left-4 duration-300"),
      children: _0x36db98 ? _0x2f7094.jsxs(_0x2f7094.Fragment, {
        children: [_0x2f7094.jsx("h2", {
          className: "text-text-primary text-xl font-bold mb-2",
          children: _0x2f4e0a.title
        }), _0x2f7094.jsx("p", {
          className: "text-text-tertiary text-sm leading-relaxed",
          children: _0x2f4e0a.description
        })]
      }) : _0x2f7094.jsxs(_0x2f7094.Fragment, {
        children: [_0x5dfe94 && _0x2f7094.jsx("div", {
          className: "flex items-center gap-1.5 mb-2.5",
          children: _0x2f7094.jsxs("span", {
            className: "inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full " + _0x5dfe94.bg + " " + _0x5dfe94.text,
            children: [_0x5a8cb6, _0x5d3f4d(_0x5dfe94.labelKey)]
          })
        }), _0x2f7094.jsx("h3", {
          className: "text-text-primary text-base font-semibold mb-1.5",
          children: _0x2f4e0a.title
        }), _0x2f7094.jsx("p", {
          className: "text-text-tertiary text-[13px] leading-relaxed",
          children: _0x2f4e0a.description
        })]
      })
    }, _0x4d0b82), _0x2f7094.jsxs("div", {
      className: "px-5 py-4 flex items-center gap-2",
      children: [_0x2f7094.jsx("button", {
        onClick: _0x2ffff9,
        className: "h-9 px-4 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-text-tertiary text-sm font-medium transition-colors cursor-pointer",
        children: _0x5d3f4d("changelog.skip")
      }), _0x2f7094.jsxs("button", {
        onClick: _0x1430ec,
        className: "flex-1 h-9 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors cursor-pointer flex items-center justify-center gap-1.5",
        children: [_0x5d3f4d(_0x122529 ? "changelog.gotIt" : "changelog.next"), !_0x122529 && _0x2f7094.jsx(_0x5899a6, {
          className: "size-4"
        })]
      })]
    })]
  });
});
z.displayName = "SlideContent";
const S = _0x1d7495.memo(() => {
  const _0x335c35 = _0x18ef1e(_0x1d322f => _0x1d322f.isOpen);
  const _0x260c55 = _0x18ef1e(_0x5c3340 => _0x5c3340.close);
  const _0x5217cd = _0x18ef1e(_0x3df0e6 => _0x3df0e6.markSeen);
  const _0x78e289 = _0x18ef1e(_0x1aed3e => _0x1aed3e.entry);
  const _0xc05fe = _0x18ef1e(_0x3e9958 => _0x3e9958.setEntry);
  const _0x20cf15 = a("(max-width: 767px)");
  const [_0x512eb5, _0x192b43] = _0x1792b2.useState(0);
  const [_0x1a22cd, _0x4512ff] = _0x1792b2.useState("left");
  _0x1792b2.useEffect(() => {
    if (_0x335c35 && !_0x78e289) {
      _0x5d1169().then(_0x4d1619 => _0xc05fe(_0x4d1619)).catch(() => {});
    }
  }, [_0x335c35, _0x78e289, _0xc05fe]);
  const _0x4b009f = _0x78e289?.slides ?? [];
  const _0x9082d5 = _0x4b009f.length;
  const _0x13d65a = _0x512eb5 === _0x9082d5 - 1;
  const _0x2ce0b3 = _0x1792b2.useCallback(async () => {
    _0x260c55();
    _0x5217cd();
    _0x192b43(0);
    try {
      await _0xa2a3e0();
    } catch {}
  }, [_0x260c55, _0x5217cd]);
  const _0x5db740 = _0x1792b2.useCallback(() => {
    if (_0x13d65a) {
      _0x2ce0b3();
    } else {
      _0x4512ff("left");
      _0x192b43(_0x22b9bf => Math.min(_0x22b9bf + 1, _0x9082d5 - 1));
    }
  }, [_0x13d65a, _0x9082d5, _0x2ce0b3]);
  const _0x360190 = _0x1792b2.useCallback(() => {
    _0x4512ff("right");
    _0x192b43(_0x596ddf => Math.max(_0x596ddf - 1, 0));
  }, []);
  const _0x305b4b = _0x1792b2.useCallback(_0x3a0f46 => {
    _0x4512ff(_0x3a0f46 > _0x512eb5 ? "left" : "right");
    _0x192b43(_0x3a0f46);
  }, [_0x512eb5]);
  if (!_0x78e289 || _0x9082d5 === 0) {
    return null;
  }
  const _0x18058a = _0x4b009f[_0x512eb5];
  const _0x4900fd = _0x2f7094.jsx(z, {
    slide: _0x18058a,
    currentSlide: _0x512eb5,
    total: _0x9082d5,
    isLast: _0x13d65a,
    direction: _0x1a22cd,
    onNext: _0x5db740,
    onPrev: _0x360190,
    onGoTo: _0x305b4b,
    onClose: _0x2ce0b3
  });
  if (_0x20cf15) {
    return _0x2f7094.jsx(_0x17c677, {
      open: _0x335c35,
      onOpenChange: _0x20de6e => !_0x20de6e && _0x2ce0b3(),
      children: _0x2f7094.jsxs(_0x4a2912, {
        className: "bg-surface-raised border-border-default text-text-primary max-h-[90dvh]",
        children: [_0x2f7094.jsxs(_0x37f8b8, {
          className: "sr-only",
          children: [_0x2f7094.jsx(_0x366741, {
            children: _0x78e289.title
          }), _0x2f7094.jsx(_0x34102a, {
            children: _0x78e289.subtitle || ""
          })]
        }), _0x4900fd]
      })
    });
  } else {
    return _0x2f7094.jsx(_0x47e03c, {
      open: _0x335c35,
      onOpenChange: _0x27affb => !_0x27affb && _0x2ce0b3(),
      children: _0x2f7094.jsxs(_0x50afd6, {
        className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-[440px] overflow-hidden",
        children: [_0x2f7094.jsxs(_0x3df16e, {
          className: "sr-only",
          children: [_0x2f7094.jsx(_0xb052b8, {
            children: _0x78e289.title
          }), _0x2f7094.jsx(_0x4342e4, {
            children: _0x78e289.subtitle || ""
          })]
        }), _0x2f7094.jsx("div", {
          className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40",
          children: _0x2f7094.jsx("div", {
            className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col",
            children: _0x4900fd
          })
        })]
      })
    });
  }
});
export { S as default };