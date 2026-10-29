import { b as _0x30f288, j as _0x57949e, I as _0x51c48c, s as _0xac0746 } from "./index-cQfEKR1W.js";
import { S as _0x574426 } from "./switch-lfnbGePn.js";
import { L as _0x4bbbc1 } from "./label-ODyS97Ju.js";
const l = ({
  isPublic: _0x1d5928 = true,
  onPublicChange: _0x1b00cc,
  label: _0x40125b,
  publicLabel: _0x136505,
  privateLabel: _0x28f0f1,
  variant: _0x1dad73 = "default"
}) => {
  const {
    t: _0x3cf3ae
  } = _0x30f288();
  const _0x63cbe8 = _0x40125b ?? _0x3cf3ae("serverSettings.general.visibilityLabel");
  const _0x229125 = _0x136505 ?? _0x3cf3ae("serverSettings.general.visibilityPublic");
  const _0x190a47 = _0x28f0f1 ?? _0x3cf3ae("serverSettings.general.visibilityPrivate");
  const _0x1c44da = _0x1dad73 === "nsfw";
  const _0xd38e8e = _0x1dad73 === "hide-offline";
  const _0x4f8dd3 = _0x1dad73 === "community";
  return _0x57949e.jsxs("div", {
    role: "button",
    tabIndex: 0,
    onClick: () => _0x1b00cc(!_0x1d5928),
    onKeyDown: _0x53c860 => {
      if (_0x53c860.key === "Enter" || _0x53c860.key === " ") {
        _0x53c860.preventDefault();
        _0x1b00cc(!_0x1d5928);
      }
    },
    "aria-pressed": _0x1d5928,
    className: _0xac0746("group/vs w-full flex items-center cursor-pointer justify-between gap-3 rounded-xl px-4 py-3 transition-all duration-150 active:brightness-95", _0x1c44da ? _0x1d5928 ? "bg-emerald-500/10" : "bg-orange-500/10" : _0xd38e8e ? _0x1d5928 ? "bg-orange-500/10" : "bg-surface-inset/40" : _0x4f8dd3 ? _0x1d5928 ? "bg-accent-subtle border border-accent-primary/30" : "bg-surface-overlay/40 border border-border-default" : _0x1d5928 ? "bg-emerald-500/10" : "bg-surface-inset/40"),
    children: [_0x57949e.jsxs("div", {
      className: "flex items-center gap-3 min-w-0",
      children: [_0x1c44da ? _0x57949e.jsx(_0x51c48c, {
        icon: "solar:shield-bold-duotone",
        className: "w-6 h-6 " + (_0x1d5928 ? "text-emerald-400" : "text-orange-400")
      }) : _0xd38e8e ? _0x1d5928 ? _0x57949e.jsx(_0x51c48c, {
        icon: "solar:lock-bold-duotone",
        className: "size-6 text-orange-400"
      }) : _0x57949e.jsx(_0x51c48c, {
        icon: "solar:global-bold-duotone",
        className: "size-6 text-text-secondary"
      }) : _0x4f8dd3 ? _0x57949e.jsx(_0x51c48c, {
        icon: "solar:global-bold-duotone",
        className: "size-5 " + (_0x1d5928 ? "text-accent-primary-text" : "text-text-secondary")
      }) : _0x1d5928 ? _0x57949e.jsx(_0x51c48c, {
        icon: "solar:global-bold-duotone",
        className: "size-6 text-emerald-400"
      }) : _0x57949e.jsx(_0x51c48c, {
        icon: "solar:lock-bold-duotone",
        className: "size-6 text-text-secondary"
      }), _0x57949e.jsxs("div", {
        className: "min-w-0 text-left",
        children: [_0x57949e.jsx(_0x4bbbc1, {
          className: "text-sm font-medium text-text-primary/90 cursor-pointer",
          onClick: _0x275e53 => {
            _0x275e53.preventDefault();
            _0x1b00cc(!_0x1d5928);
          },
          children: _0x63cbe8
        }), _0x57949e.jsx(_0x4bbbc1, {
          className: "text-xs text-text-tertiary cursor-pointer",
          onClick: _0x2ec528 => {
            _0x2ec528.preventDefault();
            _0x1b00cc(!_0x1d5928);
          },
          children: _0x1d5928 ? _0x229125 : _0x190a47
        })]
      })]
    }), _0x57949e.jsx("div", {
      className: "inline-flex",
      onClick: _0x247e9a => _0x247e9a.stopPropagation(),
      onKeyDown: _0x19a50d => _0x19a50d.stopPropagation(),
      children: _0x57949e.jsx(_0x574426, {
        checked: _0x1d5928,
        onCheckedChange: _0x1af2a0 => _0x1b00cc(Boolean(_0x1af2a0)),
        "aria-label": _0x63cbe8
      })
    })]
  });
};
export { l as V };