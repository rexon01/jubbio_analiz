import { t as _0x3aa8b3, r as _0x343849, b as _0x2f1424, d as _0x2fc401, a_ as _0x3cd00e, b1 as _0x1d3975, aV as _0x4253d4, j as _0x398623 } from "./index-cQfEKR1W.js";
import { t as _0x32ce1b } from "./soundboardFx-C2LP-Hjs.js";
import { K as _0x311096 } from "./Kbd-CeTtuCSA.js";
import { Z as _0x96ce0c, V as _0x215bd2 } from "./AppLayout-BEBJqe9_.js";
import { S as _0x224ec2 } from "./search-BXcLTinX.js";
import { H as _0x198a54 } from "./hash-Dd0s6IKZ.js";
import { U as _0x1c9029 } from "./users-CoSbgNbJ.js";
import { S as _0x120681 } from "./server-BodYxqZP.js";
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
import "./index.module-CsHioFCV.js"; /**
                                     * @license lucide-react v0.535.0 - ISC
                                     *
                                     * This source code is licensed under the ISC license.
                                     * See the LICENSE file in the root directory of this source tree.
                                     */
const j = _0x3aa8b3("message-square", [["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  key: "1lielz"
}]]);
const f = _0x343849.memo(({
  open: _0x65b7e5,
  onOpenChange: _0x4602dd
}) => {
  const {
    t: _0x16d911
  } = _0x2f1424();
  const _0x1ea2ff = _0x2fc401();
  const [_0x34754d, _0x126f7e] = _0x343849.useState("");
  const [_0x4156f1, _0x22ca91] = _0x343849.useState(0);
  const _0x18c90c = _0x343849.useRef(null);
  const _0xd38e00 = _0x343849.useRef(null);
  const _0x1e6187 = _0x3cd00e(_0x3dc67b => _0x3dc67b.servers);
  const _0x1d21ee = _0x1d3975(_0xfb29c2 => _0xfb29c2.guildChannels);
  const _0x31a945 = _0x4253d4(_0x51caed => _0x51caed.channelsMap);
  _0x343849.useEffect(() => {
    if (!_0x65b7e5) {
      return;
    }
    const _0x42b99e = setTimeout(() => _0x18c90c.current?.focus(), 50);
    return () => clearTimeout(_0x42b99e);
  }, [_0x65b7e5]);
  const _0x187337 = _0x343849.useMemo(() => {
    const _0x245e2b = [];
    for (const _0x24a670 of _0x1e6187) {
      _0x245e2b.push({
        id: "server-" + _0x24a670.id,
        type: "server",
        name: _0x24a670.name,
        icon: "server",
        serverId: _0x24a670.id
      });
      const _0x238024 = _0x1d21ee.get(_0x24a670.id);
      if (_0x238024?.channels) {
        for (const _0xf891ab of _0x238024.channels) {
          const _0x42f611 = _0xf891ab.type === "voice" ? "voice" : _0xf891ab.type === "announcement" ? "announcement" : "hash";
          _0x245e2b.push({
            id: "channel-" + _0xf891ab.id,
            type: "channel",
            name: _0xf891ab.name,
            subtitle: _0x24a670.name,
            icon: _0x42f611,
            serverId: _0x24a670.id,
            channelId: _0xf891ab.id
          });
        }
      }
    }
    const _0x475b11 = [..._0x31a945.values()];
    for (const _0x139c80 of _0x475b11) {
      const _0x303d75 = _0x139c80.participant;
      const _0x2cafdf = _0x139c80.is_group ? _0x139c80.name || _0x139c80.participants?.map(_0x3c6643 => _0x3c6643.display_name || _0x3c6643.username).join(", ") || "Group" : _0x303d75?.display_name || _0x303d75?.username || "DM";
      _0x245e2b.push({
        id: "dm-" + _0x139c80.id,
        type: "dm",
        name: _0x2cafdf,
        icon: _0x139c80.is_group ? "group" : "dm",
        channelId: _0x139c80.id
      });
    }
    return _0x245e2b;
  }, [_0x1e6187, _0x1d21ee, _0x31a945]);
  const _0x1a5e83 = _0x343849.useMemo(() => {
    if (!_0x34754d.trim()) {
      return _0x187337.slice(0, 20);
    }
    const _0x4bb647 = _0x34754d.toLowerCase();
    return _0x187337.filter(_0x20bc54 => _0x20bc54.name.toLowerCase().includes(_0x4bb647) || _0x20bc54.subtitle?.toLowerCase().includes(_0x4bb647)).slice(0, 20);
  }, [_0x187337, _0x34754d]);
  _0x343849.useEffect(() => {
    _0x22ca91(0);
  }, [_0x1a5e83.length]);
  const _0x209164 = _0x343849.useCallback(_0xfcfecf => {
    _0x4602dd(false);
    if (_0xfcfecf.type === "server" && _0xfcfecf.serverId) {
      const _0x5adb26 = _0x32ce1b.getLastVisitedChannel(_0xfcfecf.serverId);
      _0x1ea2ff(_0x5adb26 ? "/app/server/" + _0xfcfecf.serverId + "/" + _0x5adb26 : "/app/server/" + _0xfcfecf.serverId);
    } else if (_0xfcfecf.type === "channel" && _0xfcfecf.serverId && _0xfcfecf.channelId) {
      _0x1ea2ff("/app/server/" + _0xfcfecf.serverId + "/" + _0xfcfecf.channelId);
    } else if (_0xfcfecf.type === "dm" && _0xfcfecf.channelId) {
      _0x1ea2ff("/app/dm/" + _0xfcfecf.channelId);
    }
  }, [_0x1ea2ff, _0x4602dd]);
  const _0x7eec3d = _0x343849.useCallback(_0x4b7d45 => {
    if (_0x4b7d45.key === "ArrowDown") {
      _0x4b7d45.preventDefault();
      _0x22ca91(_0x2cf014 => Math.min(_0x2cf014 + 1, _0x1a5e83.length - 1));
    } else if (_0x4b7d45.key === "ArrowUp") {
      _0x4b7d45.preventDefault();
      _0x22ca91(_0x4e5137 => Math.max(_0x4e5137 - 1, 0));
    } else if (_0x4b7d45.key === "Enter") {
      _0x4b7d45.preventDefault();
      const _0x41ed99 = _0x1a5e83[_0x4156f1];
      if (_0x41ed99) {
        _0x209164(_0x41ed99);
      }
    } else if (_0x4b7d45.key === "Escape") {
      _0x4b7d45.preventDefault();
      _0x4602dd(false);
    }
  }, [_0x1a5e83, _0x4156f1, _0x209164, _0x4602dd]);
  _0x343849.useEffect(() => {
    const _0x23b2f1 = _0xd38e00.current;
    if (!_0x23b2f1) {
      return;
    }
    const _0x36a679 = _0x23b2f1.children[_0x4156f1];
    if (_0x36a679) {
      _0x36a679.scrollIntoView({
        block: "nearest"
      });
    }
  }, [_0x4156f1]);
  const _0x162bd7 = _0x738bc2 => {
    switch (_0x738bc2) {
      case "hash":
      case "announcement":
      default:
        return _0x398623.jsx(_0x198a54, {
          className: "size-4 text-text-muted"
        });
      case "voice":
        return _0x398623.jsx(_0x215bd2, {
          className: "size-4 text-text-muted"
        });
      case "server":
        return _0x398623.jsx(_0x120681, {
          className: "size-4 text-text-muted"
        });
      case "dm":
        return _0x398623.jsx(j, {
          className: "size-4 text-text-muted"
        });
      case "group":
        return _0x398623.jsx(_0x1c9029, {
          className: "size-4 text-text-muted"
        });
    }
  };
  if (_0x65b7e5) {
    return _0x398623.jsxs("div", {
      className: "fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh]",
      children: [_0x398623.jsx("div", {
        className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
        onClick: () => _0x4602dd(false)
      }), _0x398623.jsx("div", {
        className: "relative w-full max-w-lg mx-4 p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl",
        children: _0x398623.jsxs("div", {
          className: "bg-surface-raised rounded-2xl overflow-hidden",
          children: [_0x398623.jsxs("div", {
            className: "flex items-center gap-3 px-4 py-3 border-b border-border-subtle",
            children: [_0x398623.jsx(_0x224ec2, {
              className: "size-5 text-text-muted shrink-0"
            }), _0x398623.jsx("input", {
              ref: _0x18c90c,
              value: _0x34754d,
              onChange: _0x2c8c81 => _0x126f7e(_0x2c8c81.target.value),
              onKeyDown: _0x7eec3d,
              placeholder: _0x16d911("shortcuts.quickSwitcherPlaceholder", "Sunucu, kanal veya DM ara..."),
              className: "flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none",
              autoComplete: "off",
              spellCheck: false
            }), _0x398623.jsx(_0x311096, {
              keys: _0x96ce0c + "+K"
            })]
          }), _0x398623.jsx("div", {
            ref: _0xd38e00,
            className: "max-h-[50vh] overflow-y-auto scrollbar-thin p-2",
            children: _0x1a5e83.length === 0 ? _0x398623.jsx("div", {
              className: "py-8 text-center text-sm text-text-muted",
              children: _0x16d911("shortcuts.quickSwitcherNoResults", "Sonuç bulunamadı")
            }) : _0x1a5e83.map((_0x49f02e, _0xbb3f02) => _0x398623.jsxs("button", {
              onClick: () => _0x209164(_0x49f02e),
              className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors cursor-pointer " + (_0xbb3f02 === _0x4156f1 ? "bg-interactive-muted" : "hover:bg-surface-overlay/40"),
              children: [_0x398623.jsx("div", {
                className: "size-8 rounded-lg bg-surface-overlay/60 flex items-center justify-center shrink-0",
                children: _0x162bd7(_0x49f02e.icon)
              }), _0x398623.jsxs("div", {
                className: "min-w-0 flex-1",
                children: [_0x398623.jsx("div", {
                  className: "text-sm text-text-primary truncate",
                  children: _0x49f02e.name
                }), _0x49f02e.subtitle && _0x398623.jsx("div", {
                  className: "text-[11px] text-text-muted truncate",
                  children: _0x49f02e.subtitle
                })]
              }), _0x398623.jsx("div", {
                className: "text-[10px] text-text-muted uppercase tracking-wider shrink-0",
                children: _0x49f02e.type === "server" ? _0x16d911("shortcuts.typeServer", "Sunucu") : _0x49f02e.type === "channel" ? _0x16d911("shortcuts.typeChannel", "Kanal") : _0x16d911("shortcuts.typeDM", "DM")
              })]
            }, _0x49f02e.id))
          }), _0x398623.jsxs("div", {
            className: "px-4 py-2.5 border-t border-border-subtle flex items-center gap-4 text-[11px] text-text-muted",
            children: [_0x398623.jsxs("span", {
              className: "flex items-center gap-1",
              children: [_0x398623.jsx(_0x311096, {
                keys: "↑↓"
              }), " ", _0x16d911("shortcuts.navigate", "gezin")]
            }), _0x398623.jsxs("span", {
              className: "flex items-center gap-1",
              children: [_0x398623.jsx(_0x311096, {
                keys: "Enter"
              }), " ", _0x16d911("shortcuts.select", "seç")]
            }), _0x398623.jsxs("span", {
              className: "flex items-center gap-1",
              children: [_0x398623.jsx(_0x311096, {
                keys: "Esc"
              }), " ", _0x16d911("shortcuts.close", "kapat")]
            })]
          })]
        })
      })]
    });
  } else {
    return null;
  }
});
f.displayName = "QuickSwitcher";
export { f as default };