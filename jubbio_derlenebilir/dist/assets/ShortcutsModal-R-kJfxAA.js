import { r as _0x2e1cf1, b as _0x22c42b, d0 as _0x568810, j as _0x5e8499, X as _0x3e42a6, I as _0x272f9a } from "./index-cQfEKR1W.js";
import { bP as _0x19c478 } from "./AppLayout-BEBJqe9_.js";
import { K as _0xe5e90b } from "./Kbd-CeTtuCSA.js";
import "./soundboardFx-C2LP-Hjs.js";
import "./index-BUijt7wr.js";
import "./tr-D975n4_R.js";
import "./select-DQjjzSZW.js";
import "./index-Oyyh46KT.js";
import "./arrow-left-B3FhifN2.js";
import "./arrow-right-DvlsXLCB.js";
import "./loader-circle-CTtxa1g9.js";
import "./switch-lfnbGePn.js";
import "./drawer-X7YyCqpZ.js";
import "./index-yuEHo9bu.js";
import "./input-AMyERYwJ.js";
import "./subscription-Cl5JAGbQ.js";
import "./useTheme-CzNZmxfV.js";
import "./ComparisonTable-DUfwtDVZ.js";
import "./card-Bk6R3tFg.js";
import "./gift-Co-azAyt.js";
import "./CheckoutPlaceholder-Dr0TfmeQ.js";
import "./IyzicoCheckoutFrame-f1WDW5o8.js";
import "./zap-B3VH4qT9.js";
import "./dialog-BMMpM7PR.js";
import "./submit-button-B2LF_DTf.js";
import "./NexusSuccessArtwork-YGvslhff.js";
import "./circle-x-BBSKKBIf.js";
import "./avatar-C-4BWxT3.js";
import "./ConfirmDialog-B4gIndKy.js";
import "./alert-dialog-BZuoGg7O.js";
import "./user-DSjlY8FD.js";
import "./refresh-cw-C3NlhmpS.js";
import "./trash-2-DuFcDcAU.js";
import "./clipboard-BQ9qambq.js";
import "./label-ODyS97Ju.js";
import "./video-AtsAgCNJ.js";
import "./plus-B7c2Px8R.js";
import "./channelNotificationStore-FXjXBmS_.js";
import "./index.module-CsHioFCV.js";
const c = ["navigation", "messaging", "voice", "general"];
function l(_0x379ecc) {
  return _0x379ecc.split("+").map(_0x5426fa => _0x5426fa.startsWith("Key") ? _0x5426fa.slice(3) : _0x5426fa.startsWith("Digit") ? _0x5426fa.slice(5) : _0x5426fa.startsWith("Numpad") ? "Num" + _0x5426fa.slice(6) : _0x5426fa === "Space" ? "Space" : _0x5426fa.startsWith("Mouse") ? "Mouse " + _0x5426fa.slice(5) : _0x5426fa).join("+");
}
const m = {
  navigation: _0x5e8499.jsx(_0x272f9a, {
    icon: "solar:compass-bold-duotone",
    className: "size-4"
  }),
  messaging: _0x5e8499.jsx(_0x272f9a, {
    icon: "solar:chat-square-bold-duotone",
    className: "size-4"
  }),
  voice: _0x5e8499.jsx(_0x272f9a, {
    icon: "solar:microphone-bold-duotone",
    className: "size-4"
  }),
  general: _0x5e8499.jsx(_0x272f9a, {
    icon: "solar:settings-bold-duotone",
    className: "size-4"
  })
};
const d = _0x2e1cf1.memo(({
  open: _0x2129ac,
  onOpenChange: _0x318204
}) => {
  const {
    t: _0x456f34
  } = _0x22c42b();
  const _0x314cfa = _0x568810();
  const _0x5a9d16 = _0x2e1cf1.useMemo(() => _0x19c478.map(_0x55914b => {
    if (_0x55914b.id === "toggle-mute" && _0x314cfa.muteKey) {
      const _0x2d3bd0 = l(_0x314cfa.muteKey);
      return {
        ..._0x55914b,
        keys: _0x2d3bd0
      };
    }
    if (_0x55914b.id === "toggle-deafen" && _0x314cfa.deafenKey) {
      const _0x3760e8 = l(_0x314cfa.deafenKey);
      return {
        ..._0x55914b,
        keys: _0x3760e8
      };
    }
    return _0x55914b;
  }), [_0x314cfa.muteKey, _0x314cfa.deafenKey]);
  _0x2e1cf1.useEffect(() => {
    if (!_0x2129ac) {
      return;
    }
    const _0x44d490 = _0x1852cf => {
      if (_0x1852cf.key === "Escape") {
        _0x1852cf.preventDefault();
        _0x318204(false);
      }
    };
    document.addEventListener("keydown", _0x44d490);
    return () => document.removeEventListener("keydown", _0x44d490);
  }, [_0x2129ac, _0x318204]);
  if (!_0x2129ac) {
    return null;
  }
  const _0x6fc396 = c.reduce((_0x2cc969, _0x911aa4) => {
    _0x2cc969[_0x911aa4] = _0x5a9d16.filter(_0x586bee => _0x586bee.category === _0x911aa4);
    return _0x2cc969;
  }, {});
  const _0x3be3bc = {
    navigation: _0x456f34("shortcuts.categoryNavigation"),
    messaging: _0x456f34("shortcuts.categoryMessaging"),
    voice: _0x456f34("shortcuts.categoryVoice"),
    general: _0x456f34("shortcuts.categoryGeneral")
  };
  return _0x5e8499.jsxs("div", {
    className: "fixed inset-0 z-[9999] flex items-center justify-center",
    children: [_0x5e8499.jsx("div", {
      className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
      onClick: () => _0x318204(false)
    }), _0x5e8499.jsx("div", {
      className: "relative w-full max-w-lg max-h-[80vh] mx-4 p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/40",
      children: _0x5e8499.jsxs("div", {
        className: "bg-surface-raised rounded-2xl overflow-hidden flex flex-col max-h-[80vh]",
        children: [_0x5e8499.jsxs("div", {
          className: "flex items-center justify-between px-6 py-5 border-b border-border-subtle shrink-0",
          children: [_0x5e8499.jsxs("div", {
            children: [_0x5e8499.jsx("h2", {
              className: "text-lg font-semibold text-text-primary",
              children: _0x456f34("shortcuts.title")
            }), _0x5e8499.jsx("p", {
              className: "text-sm text-text-muted mt-0.5",
              children: _0x456f34("shortcuts.description")
            })]
          }), _0x5e8499.jsx("button", {
            onClick: () => _0x318204(false),
            className: "size-9 rounded-xl hover:bg-interactive-muted flex items-center justify-center transition-colors cursor-pointer",
            children: _0x5e8499.jsx(_0x3e42a6, {
              className: "size-5 text-text-muted"
            })
          })]
        }), _0x5e8499.jsx("div", {
          className: "overflow-y-auto scrollbar-thin p-6 space-y-6",
          children: c.map(_0xc29c5d => {
            const _0x5825b5 = _0x6fc396[_0xc29c5d];
            if (_0x5825b5 && _0x5825b5.length !== 0) {
              return _0x5e8499.jsxs("div", {
                className: "space-y-2",
                children: [_0x5e8499.jsxs("div", {
                  className: "flex items-center gap-2 pb-2 border-b border-border-subtle",
                  children: [_0x5e8499.jsx("span", {
                    className: "flex size-7 items-center justify-center rounded-lg bg-surface-overlay/60 text-text-tertiary",
                    children: m[_0xc29c5d]
                  }), _0x5e8499.jsx("h3", {
                    className: "text-sm font-semibold text-text-secondary",
                    children: _0x3be3bc[_0xc29c5d]
                  })]
                }), _0x5e8499.jsx("div", {
                  className: "space-y-0.5",
                  children: _0x5825b5.map(_0x2c165a => _0x5e8499.jsxs("div", {
                    className: "flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-surface-overlay/30 transition-colors group",
                    children: [_0x5e8499.jsx("span", {
                      className: "text-[13px] text-text-secondary group-hover:text-text-primary transition-colors",
                      children: _0x456f34(_0x2c165a.label)
                    }), _0x5e8499.jsx(_0xe5e90b, {
                      keys: _0x2c165a.keys
                    })]
                  }, _0x2c165a.id))
                })]
              }, _0xc29c5d);
            } else {
              return null;
            }
          })
        })]
      })
    })]
  });
});
d.displayName = "ShortcutsModal";
export { d as default };