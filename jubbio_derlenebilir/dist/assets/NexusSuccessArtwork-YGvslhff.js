import { j as _0x2a967f } from "./index-cQfEKR1W.js";
function s() {
  return _0x2a967f.jsxs("div", {
    "aria-hidden": "true",
    className: "nexus-success-artwork pointer-events-none relative mx-auto flex h-36 w-full items-center justify-center",
    children: [_0x2a967f.jsx("div", {
      className: "absolute h-28 w-44 rounded-full bg-accent-primary/15 blur-3xl"
    }), _0x2a967f.jsx("div", {
      className: "nexus-success-ring absolute size-28 rounded-full border border-accent-primary/20"
    }), _0x2a967f.jsx("div", {
      className: "absolute size-36 rounded-full border border-accent-primary/5"
    }), Array.from({
      length: 20
    }, (_0xe40d88, _0x4b2d42) => {
      const _0x233689 = _0x4b2d42 / 20 * Math.PI * 2;
      return _0x2a967f.jsx("span", {
        className: "nexus-success-particle absolute left-1/2 top-1/2 h-1.5 w-1 rounded-sm",
        style: {
          "--nexus-x": Math.cos(_0x233689) * (82 + _0x4b2d42 % 3 * 16) + "px",
          "--nexus-y": Math.sin(_0x233689) * (50 + _0x4b2d42 % 4 * 12) + "px",
          "--nexus-rotate": _0x4b2d42 * 43 + "deg",
          animationDelay: 0.1 + _0x4b2d42 % 5 * 0.045 + "s",
          backgroundColor: _0x4b2d42 % 3 == 0 ? "var(--text-primary)" : "var(--accent-primary)"
        }
      }, _0x4b2d42);
    }), _0x2a967f.jsxs("div", {
      className: "nexus-success-badge relative flex size-20 items-center justify-center rounded-3xl border border-accent-primary/25 bg-accent-primary/10 shadow-[0_0_40px_-12px_var(--accent-primary)]",
      children: [_0x2a967f.jsx("img", {
        src: "https://cdn.jubbio.com/badges/icons/1775103030899_nexus.png",
        alt: "",
        className: "size-14 object-contain"
      }), _0x2a967f.jsx("span", {
        className: "nexus-success-check absolute -bottom-1.5 -right-1.5 flex size-7 items-center justify-center rounded-full border-4 border-surface-raised bg-accent-primary text-black",
        children: _0x2a967f.jsx("svg", {
          viewBox: "0 0 16 16",
          fill: "none",
          className: "size-3.5",
          children: _0x2a967f.jsx("path", {
            d: "m3.5 8 3 3 6-6",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        })
      })]
    })]
  });
}
export { s as N };