import { b as _0xfcb344, j as _0x1e20bd, aN as _0x59bfc4, I as _0xa43d4c } from "./index-cQfEKR1W.js";
import { D as _0x45c2cb, a as _0x417e79, c as _0x15a118 } from "./dialog-BMMpM7PR.js";
import { S as _0x552985 } from "./submit-button-B2LF_DTf.js";
import { a as _0x52d7e4, o as _0x551d3d } from "./AppLayout-BEBJqe9_.js";
const d = _0x4b4b75 => _0x4b4b75 >= 1000000 ? (_0x4b4b75 / 1000000).toFixed(1) + "M" : _0x4b4b75 >= 1000 ? (_0x4b4b75 / 1000).toFixed(1) + "K" : _0x4b4b75.toString();
const m = _0x121165 => _0x121165.slice(0, 2).toUpperCase();
const x = ({
  open: _0x1e51e0,
  onOpenChange: _0x5d0f54,
  guild: _0x270d84,
  onJoin: _0x2fcd4b,
  isJoining: _0x1f0e33
}) => {
  const {
    t: _0x580b3e
  } = _0xfcb344();
  const {
    name: _0x16fb32,
    description: _0x440ff4,
    avatar_url: _0x611fcb,
    banner_url: _0x59f09b,
    discovery_splash_url: _0x3505a6,
    member_count: _0x8410cf,
    online_count: _0xe50fb8,
    is_verified: _0x2af63f,
    is_creator: _0x39d09c
  } = _0x270d84;
  const _0x38637c = _0x3505a6 || _0x59f09b;
  const _0x84a688 = _0x38637c ? _0x52d7e4(_0x38637c) : null;
  const _0x40e917 = _0x611fcb ? _0x551d3d(_0x611fcb) : null;
  return _0x1e20bd.jsx(_0x45c2cb, {
    open: _0x1e51e0,
    onOpenChange: _0x5d0f54,
    children: _0x1e20bd.jsxs(_0x417e79, {
      className: "sm:max-w-md p-0 overflow-hidden bg-surface-raised border-border-default",
      children: [_0x1e20bd.jsx(_0x15a118, {
        className: "sr-only",
        children: _0x16fb32
      }), _0x1e20bd.jsxs("div", {
        className: "relative h-32 sm:h-40 bg-gradient-to-br from-accent-primary/20 to-surface-overlay",
        children: [_0x84a688 && _0x1e20bd.jsx("img", {
          src: _0x84a688,
          alt: "",
          className: "absolute inset-0 w-full h-full object-cover"
        }), _0x1e20bd.jsx("div", {
          className: "absolute inset-0 bg-gradient-to-t from-surface-raised via-transparent to-transparent"
        })]
      }), _0x1e20bd.jsxs("div", {
        className: "px-5 pb-5 -mt-10 relative",
        children: [_0x1e20bd.jsx("div", {
          className: "relative size-20 rounded-2xl ring-6 ring-surface-raised border border-border-subtle overflow-hidden bg-surface-overlay grid place-items-center text-text-secondary text-lg font-semibold mb-4",
          children: _0x40e917 ? _0x1e20bd.jsx("img", {
            src: _0x40e917,
            alt: _0x16fb32,
            className: "absolute inset-0 w-full h-full object-cover"
          }) : _0x1e20bd.jsx("span", {
            children: m(_0x16fb32)
          })
        }), _0x1e20bd.jsxs("div", {
          className: "flex items-center gap-2 mb-2",
          children: [_0x1e20bd.jsx("h2", {
            className: "text-xl font-bold text-text-primary truncate",
            children: _0x16fb32
          }), _0x2af63f && _0x1e20bd.jsx(_0x59bfc4, {
            label: _0x580b3e("discover.verifiedServer"),
            side: "top",
            children: _0x1e20bd.jsx("div", {
              className: "shrink-0",
              children: _0x1e20bd.jsx(_0xa43d4c, {
                icon: "solar:verified-check-bold",
                className: "size-5 text-accent-primary-text"
              })
            })
          }), _0x39d09c && _0x1e20bd.jsx(_0x59bfc4, {
            label: _0x580b3e("discover.creatorServer"),
            side: "top",
            children: _0x1e20bd.jsx("div", {
              className: "shrink-0",
              children: _0x1e20bd.jsx(_0xa43d4c, {
                icon: "solar:clapperboard-play-bold-duotone",
                className: "size-5 text-red-400"
              })
            })
          })]
        }), _0x1e20bd.jsxs("div", {
          className: "flex items-center gap-4 text-sm text-text-muted mb-4",
          children: [_0xe50fb8 !== undefined && _0xe50fb8 > 0 && _0x1e20bd.jsxs("span", {
            className: "flex items-center gap-1.5",
            children: [_0x1e20bd.jsx("span", {
              className: "size-2 rounded-full bg-accent-primary"
            }), d(_0xe50fb8), " ", _0x580b3e("discover.online")]
          }), _0x8410cf !== undefined && _0x1e20bd.jsxs("span", {
            className: "flex items-center gap-1.5",
            children: [_0x1e20bd.jsx("span", {
              className: "size-2 rounded-full bg-text-muted/50"
            }), d(_0x8410cf), " ", _0x580b3e("discover.members")]
          })]
        }), _0x440ff4 && _0x1e20bd.jsx("p", {
          className: "text-sm text-text-secondary leading-relaxed mb-5 line-clamp-4",
          children: _0x440ff4
        }), _0x1e20bd.jsx(_0x552985, {
          onClick: _0x2fcd4b,
          loading: _0x1f0e33,
          type: "button",
          children: _0x580b3e("discover.joinCommunity")
        })]
      })]
    })
  });
};
export { x as G };