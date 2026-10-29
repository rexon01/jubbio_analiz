import { r as _0x3ddf5f, j as _0x2aea0d, I as _0x59771a, b as _0x2cd9e0, f1 as _0x543d39, f2 as _0x12d5d8, f3 as _0x4ea1da, bf as _0x39d36f, aU as _0x30d03c, P as _0x4a9d62 } from "./index-cQfEKR1W.js";
import { e as _0x1f2cc6, bI as _0xbf70fe, bJ as _0x9b1f74, bK as _0x836703, bL as _0x574bd9 } from "./AppLayout-BEBJqe9_.js";
import { D as _0x592040, a as _0x18cd91, c as _0x1a11be, d as _0x107e05 } from "./dialog-BMMpM7PR.js";
import { V as _0x2df590 } from "./index-Oyyh46KT.js";
import { C as _0x25b38a } from "./ConfirmDialog-B4gIndKy.js";
import { S as _0x2ae823 } from "./separator-Ba6vNTx4.js";
import "./soundboardFx-C2LP-Hjs.js";
import "./index-BUijt7wr.js";
import "./tr-D975n4_R.js";
import "./select-DQjjzSZW.js";
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
import "./submit-button-B2LF_DTf.js";
import "./NexusSuccessArtwork-YGvslhff.js";
import "./circle-x-BBSKKBIf.js";
import "./avatar-C-4BWxT3.js";
import "./user-DSjlY8FD.js";
import "./refresh-cw-C3NlhmpS.js";
import "./trash-2-DuFcDcAU.js";
import "./clipboard-BQ9qambq.js";
import "./label-ODyS97Ju.js";
import "./video-AtsAgCNJ.js";
import "./plus-B7c2Px8R.js";
import "./channelNotificationStore-FXjXBmS_.js";
import "./index.module-CsHioFCV.js";
import "./alert-dialog-BZuoGg7O.js";
const y = ({
  className: _0x327bba
}) => _0x2aea0d.jsx(_0x59771a, {
  icon: "solar:add-circle-bold-duotone",
  className: _0x327bba
});
const S = ({
  className: _0x17e839
}) => _0x2aea0d.jsx(_0x59771a, {
  icon: "solar:trash-bin-trash-bold-duotone",
  className: _0x17e839
});
function w({
  slots: _0x354b47,
  type: _0x1bfae6,
  onUpload: _0x19f25e,
  onEdit: _0x9fda5,
  onDelete: _0x45bfa5,
  maxHeight: _0x14fa11 = 360
}) {
  const _0x2296ed = _0x3ddf5f.useRef(null);
  const _0xb138da = Math.ceil(_0x354b47.length / 5);
  const _0x10887e = _0x1f2cc6({
    count: _0xb138da,
    getScrollElement: () => _0x2296ed.current,
    estimateSize: () => 72,
    overscan: 3
  });
  const _0x37960a = _0x3ddf5f.useCallback(() => _0x19f25e(_0x1bfae6), [_0x19f25e, _0x1bfae6]);
  return _0x2aea0d.jsx("div", {
    ref: _0x2296ed,
    className: "rounded-xl border border-border-default overflow-auto bg-surface-raised/50 scrollbar-thin",
    style: {
      maxHeight: _0x14fa11
    },
    children: _0x2aea0d.jsx("div", {
      style: {
        height: _0x10887e.getTotalSize() + "px",
        position: "relative"
      },
      children: _0x10887e.getVirtualItems().map(_0x5a4695 => {
        const _0x15eaa6 = _0x5a4695.index;
        return _0x2aea0d.jsx("div", {
          className: "absolute left-0 right-0 grid grid-cols-5 " + (_0x15eaa6 !== _0xb138da - 1 ? "border-b border-border-default" : ""),
          style: {
            top: _0x5a4695.start + "px",
            height: _0x5a4695.size + "px"
          },
          children: Array.from({
            length: 5
          }).map((_0x3fcc91, _0x3e49c9) => {
            const _0x5c9fde = _0x15eaa6 * 5 + _0x3e49c9;
            if (_0x5c9fde >= _0x354b47.length) {
              return _0x2aea0d.jsx("div", {}, _0x3e49c9);
            }
            const _0x14a8d9 = _0x354b47[_0x5c9fde];
            const _0x350ea1 = _0x3e49c9 === 4;
            return _0x2aea0d.jsx("div", {
              className: "relative cursor-pointer " + (_0x350ea1 ? "" : "border-r border-border-default"),
              style: {
                height: _0x5a4695.size
              },
              children: _0x14a8d9 ? _0x2aea0d.jsxs("div", {
                className: "group absolute inset-0 flex items-center justify-center",
                children: [_0x2aea0d.jsx("img", {
                  src: _0x14a8d9.image_url,
                  alt: ":" + _0x14a8d9.name + ":",
                  className: "size-9 object-contain " + (_0x14a8d9.available ? "" : "opacity-50 grayscale"),
                  loading: "lazy"
                }), _0x2aea0d.jsx("div", {
                  className: "absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent pt-4 pb-1 px-1 opacity-0 group-hover:opacity-100 transition-opacity",
                  children: _0x2aea0d.jsxs("span", {
                    className: "block text-sm text-text-primary font-medium truncate text-center",
                    children: [":", _0x14a8d9.name, ":"]
                  })
                }), _0x2aea0d.jsxs("div", {
                  className: "absolute top-1 right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
                  children: [_0x2aea0d.jsx("button", {
                    onClick: _0x3cc04d => {
                      _0x3cc04d.stopPropagation();
                      _0x9fda5(_0x14a8d9);
                    },
                    className: "p-1.5 rounded-md bg-surface-inset hover:bg-interactive-active text-text-secondary hover:text-text-primary transition-colors cursor-pointer",
                    children: _0x2aea0d.jsx(_0x59771a, {
                      icon: "solar:pen-bold-duotone",
                      className: "size-3"
                    })
                  }), _0x2aea0d.jsx("button", {
                    onClick: _0x441a5c => {
                      _0x441a5c.stopPropagation();
                      _0x45bfa5(_0x14a8d9);
                    },
                    className: "p-1.5 rounded-md bg-red-500/80 hover:bg-red-500 text-text-primary transition-colors cursor-pointer",
                    children: _0x2aea0d.jsx(S, {
                      className: "size-3"
                    })
                  })]
                })]
              }) : _0x2aea0d.jsx("button", {
                onClick: _0x37960a,
                className: "absolute inset-0 flex items-center justify-center hover:bg-surface-overlay/50 transition-colors group cursor-pointer",
                children: _0x2aea0d.jsx(y, {
                  className: "size-5 text-text-tertiary group-hover:text-text-muted group-hover:scale-110 transition-all"
                })
              })
            }, _0x3e49c9);
          })
        }, _0x5a4695.key);
      })
    })
  });
}
const k = ({
  className: _0x119c04
}) => _0x2aea0d.jsx(_0x59771a, {
  icon: "solar:trash-bin-trash-bold-duotone",
  className: _0x119c04
});
const z = ({
  className: _0x4a207e
}) => _0x2aea0d.jsx(_0x59771a, {
  icon: "solar:close-circle-bold-duotone",
  className: _0x4a207e
});
const C = ({
  className: _0x11f7ca
}) => _0x2aea0d.jsx(_0x59771a, {
  icon: "solar:refresh-bold-duotone",
  className: _0x11f7ca
});
const _ = ({
  className: _0x4aaaed
}) => _0x2aea0d.jsx(_0x59771a, {
  icon: "solar:gallery-bold-duotone",
  className: _0x4aaaed
});
const L = ({
  className: _0x5dac2d
}) => _0x2aea0d.jsx(_0x59771a, {
  icon: "solar:stars-bold-duotone",
  className: _0x5dac2d
});
const T = ({
  className: _0x44f2a2
}) => _0x2aea0d.jsx(_0x59771a, {
  icon: "solar:emoji-funny-circle-bold-duotone",
  className: _0x44f2a2
});
const A = ["image/png", "image/gif"];
const E = /^[a-zA-Z0-9_]{2,32}$/;
const D = {
  0: 50,
  1: 100,
  2: 150,
  3: 250
};
const F = ({
  serverId: _0x534d48
}) => {
  const {
    t: _0x706c9b
  } = _0x2cd9e0();
  const _0x5b9de1 = _0x543d39(_0x534d48);
  const _0x4d8396 = _0x12d5d8(_0x534d48);
  const _0x13aacf = _0x4ea1da(_0x534d48);
  const _0x9bcf94 = _0x39d36f(_0x4a67cf => _0x4a67cf.setLoading);
  const _0xfd9472 = _0x3ddf5f.useRef(null);
  const _0x3d0bbf = _0x3ddf5f.useRef("static");
  const _0x110cd8 = _0x30d03c(_0xd61789 => _0xd61789.guildFuelStatus[_0x534d48]?.boost_tier ?? 0);
  const _0x57be91 = D[_0x110cd8] ?? 50;
  _0x3ddf5f.useEffect(() => {
    if (!_0x13aacf && !_0x4d8396) {
      _0x9bcf94(_0x534d48, true);
      _0xbf70fe(_0x534d48).catch(_0x530063 => console.error("Failed to fetch guild emojis:", _0x530063)).finally(() => _0x9bcf94(_0x534d48, false));
    }
  }, [_0x534d48, _0x13aacf, _0x4d8396, _0x9bcf94]);
  const [_0x26fc73, _0x45d480] = _0x3ddf5f.useState(false);
  const [_0x846116, _0x46aced] = _0x3ddf5f.useState(null);
  const [_0x1ad263, _0x3938ce] = _0x3ddf5f.useState(null);
  const [_0x1f4a3a, _0x972a4f] = _0x3ddf5f.useState("");
  const [_0x35cb1d, _0x5cabd4] = _0x3ddf5f.useState(false);
  const [_0x4ca0e2, _0x1641c2] = _0x3ddf5f.useState(null);
  const [_0x5a00b7, _0x27906c] = _0x3ddf5f.useState("");
  const [_0x3055de, _0x3bbde8] = _0x3ddf5f.useState(false);
  const [_0x50e2c8, _0xb46e5d] = _0x3ddf5f.useState(null);
  const [_0x57bcb3, _0x3be7d8] = _0x3ddf5f.useState(false);
  const _0x24072c = _0x5b9de1.filter(_0x2e5a3e => !_0x2e5a3e.animated);
  const _0x394b1b = _0x5b9de1.filter(_0x1c6e7f => _0x1c6e7f.animated);
  const _0x322952 = _0x3ddf5f.useCallback(_0x17ac73 => {
    const _0x3172a9 = _0x17ac73.target.files?.[0];
    if (!_0x3172a9) {
      return;
    }
    if (!A.includes(_0x3172a9.type)) {
      _0x4a9d62.error(_0x706c9b("serverSettings.emojis.invalidFormat"));
      return;
    }
    if (_0x3172a9.size > 524288) {
      _0x4a9d62.error(_0x706c9b("serverSettings.emojis.fileTooLarge"));
      return;
    }
    const _0x2b0175 = new FileReader();
    _0x2b0175.onload = _0x600589 => _0x46aced(_0x600589.target?.result);
    _0x2b0175.readAsDataURL(_0x3172a9);
    const _0x56a339 = _0x3172a9.name.replace(/\.[^/.]+$/, "").replace(/[^a-zA-Z0-9_]/g, "_").slice(0, 32);
    _0x972a4f(_0x56a339 || "emoji");
    _0x3938ce(_0x3172a9);
    _0x5cabd4(true);
    if (_0xfd9472.current) {
      _0xfd9472.current.value = "";
    }
  }, [_0x706c9b]);
  const _0x9d0a04 = _0x3ddf5f.useCallback(_0x7a90bc => {
    _0x3d0bbf.current = _0x7a90bc;
    if (_0xfd9472.current) {
      _0xfd9472.current.accept = _0x7a90bc === "animated" ? ".gif" : ".png";
      _0xfd9472.current.click();
    }
  }, []);
  const _0x2be6b9 = _0x3ddf5f.useCallback(async () => {
    if (_0x1ad263 && _0x1f4a3a) {
      if (E.test(_0x1f4a3a)) {
        _0x45d480(true);
        try {
          await _0x9b1f74(_0x534d48, _0x1f4a3a, _0x1ad263);
          _0x5cabd4(false);
          _0x46aced(null);
          _0x3938ce(null);
          _0x972a4f("");
        } catch {} finally {
          _0x45d480(false);
        }
      } else {
        _0x4a9d62.error(_0x706c9b("serverSettings.emojis.invalidName"));
      }
    }
  }, [_0x534d48, _0x1ad263, _0x1f4a3a]);
  const _0x4eb7bc = _0x3ddf5f.useCallback(async () => {
    if (_0x4ca0e2 && _0x5a00b7) {
      if (E.test(_0x5a00b7)) {
        if (_0x5a00b7 !== _0x4ca0e2.name) {
          _0x3bbde8(true);
          try {
            await _0x836703(_0x534d48, _0x4ca0e2.id, {
              name: _0x5a00b7
            });
            _0x1641c2(null);
            _0x27906c("");
          } catch {} finally {
            _0x3bbde8(false);
          }
        } else {
          _0x1641c2(null);
        }
      } else {
        _0x4a9d62.error(_0x706c9b("serverSettings.emojis.invalidName"));
      }
    }
  }, [_0x534d48, _0x4ca0e2, _0x5a00b7]);
  const _0x219fb3 = _0x3ddf5f.useCallback(async () => {
    if (_0x50e2c8) {
      _0x3be7d8(true);
      try {
        await _0x574bd9(_0x534d48, _0x50e2c8.id);
        _0xb46e5d(null);
      } catch {} finally {
        _0x3be7d8(false);
      }
    }
  }, [_0x534d48, _0x50e2c8]);
  const _0x414b51 = _0x3ddf5f.useCallback(_0x2f4267 => {
    _0x1641c2(_0x2f4267);
    _0x27906c(_0x2f4267.name);
  }, []);
  const _0x31e023 = _0x3ddf5f.useCallback(_0x174a1a => {
    const _0x504d49 = [..._0x174a1a];
    while (_0x504d49.length < _0x57be91) {
      _0x504d49.push(null);
    }
    return _0x504d49;
  }, [_0x57be91]);
  const _0x5ad194 = _0x3ddf5f.useMemo(() => _0x31e023(_0x24072c), [_0x24072c, _0x31e023]);
  const _0x9d499 = _0x3ddf5f.useMemo(() => _0x31e023(_0x394b1b), [_0x394b1b, _0x31e023]);
  return _0x2aea0d.jsxs("div", {
    className: "space-y-8",
    children: [_0x2aea0d.jsx("input", {
      ref: _0xfd9472,
      type: "file",
      accept: ".png,.gif",
      onChange: _0x322952,
      className: "hidden"
    }), _0x2aea0d.jsxs("div", {
      className: "space-y-4",
      children: [_0x2aea0d.jsxs("div", {
        children: [_0x2aea0d.jsxs("div", {
          className: "flex items-center gap-2",
          children: [_0x2aea0d.jsx(T, {
            className: "size-4 text-text-tertiary"
          }), _0x2aea0d.jsx("div", {
            className: "text-base leading-snug font-semibold text-text-secondary",
            children: _0x706c9b("serverSettings.emojis.title")
          })]
        }), _0x2aea0d.jsx("p", {
          className: "text-sm leading-snug text-text-muted mt-0.5",
          children: _0x706c9b("serverSettings.emojis.description")
        })]
      }), _0x2aea0d.jsx(_0x2ae823, {
        className: "bg-surface-overlay/70"
      })]
    }), false, _0x4d8396 ? _0x2aea0d.jsx("div", {
      className: "flex items-center justify-center py-20",
      children: _0x2aea0d.jsxs("div", {
        className: "flex flex-col items-center gap-3",
        children: [_0x2aea0d.jsx(C, {
          className: "size-10 text-accent-primary-text animate-spin"
        }), _0x2aea0d.jsx("span", {
          className: "text-sm text-text-tertiary",
          children: _0x706c9b("common.loading")
        })]
      })
    }) : _0x2aea0d.jsxs("div", {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
      children: [_0x2aea0d.jsxs("div", {
        className: "space-y-3",
        children: [_0x2aea0d.jsxs("div", {
          className: "flex items-center justify-between px-1",
          children: [_0x2aea0d.jsxs("div", {
            className: "flex items-center gap-2.5",
            children: [_0x2aea0d.jsx("div", {
              className: "w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center",
              children: _0x2aea0d.jsx(_, {
                className: "size-4 text-blue-400"
              })
            }), _0x2aea0d.jsxs("div", {
              children: [_0x2aea0d.jsx("h3", {
                className: "text-sm font-semibold text-text-primary",
                children: _0x706c9b("serverSettings.emojis.staticEmojis")
              }), _0x2aea0d.jsx("p", {
                className: "text-xs text-text-muted",
                children: "PNG • 512KB max"
              })]
            })]
          }), _0x2aea0d.jsxs("div", {
            className: "flex items-center gap-1.5 text-sm",
            children: [_0x2aea0d.jsx("span", {
              className: "font-semibold text-text-primary",
              children: _0x24072c.length
            }), _0x2aea0d.jsxs("span", {
              className: "text-text-muted",
              children: ["/ ", _0x57be91]
            })]
          })]
        }), _0x2aea0d.jsx(w, {
          slots: _0x5ad194,
          type: "static",
          onUpload: _0x9d0a04,
          onEdit: _0x414b51,
          onDelete: _0xb46e5d
        })]
      }), _0x2aea0d.jsxs("div", {
        className: "space-y-3",
        children: [_0x2aea0d.jsxs("div", {
          className: "flex items-center justify-between px-1",
          children: [_0x2aea0d.jsxs("div", {
            className: "flex items-center gap-2.5",
            children: [_0x2aea0d.jsx("div", {
              className: "w-8 h-8 rounded-lg bg-accent-subtle border border-accent-border flex items-center justify-center",
              children: _0x2aea0d.jsx(L, {
                className: "size-4 text-accent-primary-text"
              })
            }), _0x2aea0d.jsxs("div", {
              children: [_0x2aea0d.jsx("h3", {
                className: "text-sm font-semibold text-text-primary",
                children: _0x706c9b("serverSettings.emojis.animatedEmojis")
              }), _0x2aea0d.jsx("p", {
                className: "text-xs text-text-muted",
                children: "GIF • 512KB max"
              })]
            })]
          }), _0x2aea0d.jsxs("div", {
            className: "flex items-center gap-1.5 text-sm",
            children: [_0x2aea0d.jsx("span", {
              className: "font-semibold text-text-primary",
              children: _0x394b1b.length
            }), _0x2aea0d.jsxs("span", {
              className: "text-text-muted",
              children: ["/ ", _0x57be91]
            })]
          })]
        }), _0x2aea0d.jsx(w, {
          slots: _0x9d499,
          type: "animated",
          onUpload: _0x9d0a04,
          onEdit: _0x414b51,
          onDelete: _0xb46e5d
        })]
      })]
    }), _0x2aea0d.jsx(_0x592040, {
      open: _0x35cb1d,
      onOpenChange: _0x5cabd4,
      children: _0x2aea0d.jsxs(_0x18cd91, {
        className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-sm overflow-hidden",
        children: [_0x2aea0d.jsxs(_0x2df590, {
          children: [_0x2aea0d.jsx(_0x1a11be, {
            children: _0x706c9b("serverSettings.emojis.uploadTitle")
          }), _0x2aea0d.jsx(_0x107e05, {
            children: _0x706c9b("serverSettings.emojis.uploadDescription")
          })]
        }), _0x2aea0d.jsxs("div", {
          className: "rounded-2xl border border-border-default bg-surface-raised overflow-hidden",
          children: [_0x2aea0d.jsxs("div", {
            className: "px-4 py-3 border-b border-border-default flex items-center justify-between",
            children: [_0x2aea0d.jsx("h2", {
              className: "text-base font-semibold text-text-primary",
              children: _0x706c9b("serverSettings.emojis.uploadTitle")
            }), _0x2aea0d.jsx("button", {
              onClick: () => _0x5cabd4(false),
              className: "p-1 rounded-lg hover:bg-surface-overlay text-text-tertiary hover:text-text-primary transition-colors",
              children: _0x2aea0d.jsx(z, {
                className: "size-4"
              })
            })]
          }), _0x2aea0d.jsxs("div", {
            className: "p-4 space-y-4",
            children: [_0x846116 && _0x2aea0d.jsx("div", {
              className: "flex justify-center",
              children: _0x2aea0d.jsx("div", {
                className: "p-4 rounded-xl bg-surface-overlay/50 border border-border-default",
                children: _0x2aea0d.jsx("img", {
                  src: _0x846116,
                  alt: "Preview",
                  className: "size-16 object-contain"
                })
              })
            }), _0x2aea0d.jsxs("div", {
              className: "space-y-1.5",
              children: [_0x2aea0d.jsx("label", {
                className: "text-xs font-medium text-text-secondary",
                children: _0x706c9b("serverSettings.emojis.nameLabel")
              }), _0x2aea0d.jsxs("div", {
                className: "relative",
                children: [_0x2aea0d.jsx("span", {
                  className: "absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-sm",
                  children: ":"
                }), _0x2aea0d.jsx("input", {
                  type: "text",
                  value: _0x1f4a3a,
                  onChange: _0x22b380 => _0x972a4f(_0x22b380.target.value.replace(/[^a-zA-Z0-9_]/g, "")),
                  placeholder: "emoji_name",
                  maxLength: 32,
                  className: "w-full h-9 rounded-lg bg-surface-overlay/50 border border-border-default text-text-secondary placeholder:text-text-muted px-5 text-sm focus:outline-none focus:border-accent-primary/50 transition-colors"
                }), _0x2aea0d.jsx("span", {
                  className: "absolute right-3 top-1/2 -translate-y-1/2 text-text-muted text-sm",
                  children: ":"
                })]
              })]
            })]
          }), _0x2aea0d.jsxs("div", {
            className: "px-4 py-3 border-t border-border-default flex gap-2",
            children: [_0x2aea0d.jsx("button", {
              onClick: () => _0x5cabd4(false),
              disabled: _0x26fc73,
              className: "flex-1 h-9 rounded-lg text-sm font-medium text-text-secondary bg-surface-overlay/50 hover:bg-surface-inset/50 transition-colors disabled:opacity-50",
              children: _0x706c9b("common.cancel")
            }), _0x2aea0d.jsxs("button", {
              onClick: _0x2be6b9,
              disabled: !_0x1ad263 || !_0x1f4a3a || _0x26fc73,
              className: "flex-1 h-9 rounded-lg text-sm font-semibold transition-all disabled:opacity-50 bg-accent-primary hover:bg-accent-primary/90 text-black flex items-center justify-center gap-1.5",
              children: [_0x26fc73 && _0x2aea0d.jsx(C, {
                className: "size-3.5 animate-spin"
              }), _0x706c9b(_0x26fc73 ? "common.loading" : "serverSettings.emojis.upload")]
            })]
          })]
        })]
      })
    }), _0x2aea0d.jsx(_0x592040, {
      open: !!_0x4ca0e2,
      onOpenChange: () => _0x1641c2(null),
      children: _0x2aea0d.jsxs(_0x18cd91, {
        className: "p-0 gap-0 bg-transparent border-0 shadow-none max-w-[400px]! overflow-hidden fixed",
        style: {
          width: "400px",
          maxWidth: "calc(100vw - 2rem)"
        },
        children: [_0x2aea0d.jsxs(_0x2df590, {
          children: [_0x2aea0d.jsx(_0x1a11be, {
            children: _0x706c9b("serverSettings.emojis.editTitle")
          }), _0x2aea0d.jsx(_0x107e05, {
            children: _0x706c9b("serverSettings.emojis.editDescription")
          })]
        }), _0x2aea0d.jsx("div", {
          className: "p-px rounded-2xl bg-linear-to-br from-border-strong/40 via-transparent to-transparent shadow-2xl shadow-black/5 dark:shadow-black/40 overflow-hidden",
          children: _0x2aea0d.jsxs("div", {
            className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col",
            children: [_0x2aea0d.jsx("div", {
              className: "px-5 py-4 border-b border-border-subtle",
              children: _0x2aea0d.jsx("h2", {
                className: "text-lg font-semibold text-text-primary",
                children: _0x706c9b("serverSettings.emojis.editTitle")
              })
            }), _0x2aea0d.jsx("div", {
              className: "px-5 py-4",
              children: _0x2aea0d.jsxs("div", {
                className: "rounded-xl bg-surface-inset/40 border border-border-subtle overflow-hidden",
                children: [_0x4ca0e2 && _0x2aea0d.jsxs("div", {
                  className: "flex items-center gap-4 p-4",
                  children: [_0x2aea0d.jsx("div", {
                    className: "w-14 h-14 rounded-xl bg-surface-overlay/50 flex items-center justify-center shrink-0",
                    children: _0x2aea0d.jsx("img", {
                      src: _0x4ca0e2.image_url,
                      alt: ":" + _0x4ca0e2.name + ":",
                      className: "size-10 object-contain"
                    })
                  }), _0x2aea0d.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [_0x2aea0d.jsxs("p", {
                      className: "text-text-primary font-medium truncate",
                      children: [":", _0x5a00b7 || _0x4ca0e2.name, ":"]
                    }), _0x2aea0d.jsx("p", {
                      className: "text-xs text-text-muted",
                      children: _0x4ca0e2.animated ? _0x706c9b("serverSettings.emojis.animated") : _0x706c9b("serverSettings.emojis.static")
                    })]
                  })]
                }), _0x2aea0d.jsx("div", {
                  className: "mx-4 h-px bg-surface-inset/60"
                }), _0x2aea0d.jsxs("div", {
                  className: "flex items-center gap-3 px-4 py-3",
                  children: [_0x2aea0d.jsx("div", {
                    className: "w-9 h-9 rounded-lg bg-surface-inset/40 flex items-center justify-center shrink-0",
                    children: _0x2aea0d.jsx(_0x59771a, {
                      icon: "solar:pen-bold-duotone",
                      className: "size-4 text-text-tertiary"
                    })
                  }), _0x2aea0d.jsxs("div", {
                    className: "flex-1 min-w-0",
                    children: [_0x2aea0d.jsx("label", {
                      className: "text-xs text-text-muted block mb-1",
                      children: _0x706c9b("serverSettings.emojis.nameLabel")
                    }), _0x2aea0d.jsx("input", {
                      type: "text",
                      value: _0x5a00b7,
                      onChange: _0x54ee1c => _0x27906c(_0x54ee1c.target.value.replace(/[^a-zA-Z0-9_]/g, "")),
                      placeholder: "emoji_name",
                      maxLength: 32,
                      autoFocus: true,
                      className: "w-full bg-transparent text-text-primary text-sm placeholder:text-text-muted outline-none"
                    })]
                  }), _0x2aea0d.jsxs("span", {
                    className: "text-xs text-text-muted shrink-0",
                    children: [_0x5a00b7.length, "/32"]
                  })]
                })]
              })
            }), _0x2aea0d.jsx("div", {
              className: "px-5 py-4 border-t border-border-subtle",
              children: _0x2aea0d.jsxs("div", {
                className: "flex items-center gap-2",
                children: [_0x2aea0d.jsx("button", {
                  onClick: () => _0x1641c2(null),
                  disabled: _0x3055de,
                  className: "h-10 px-5 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors disabled:opacity-50",
                  children: _0x706c9b("common.cancel")
                }), _0x2aea0d.jsx("div", {
                  className: "flex-1"
                }), _0x2aea0d.jsxs("button", {
                  onClick: _0x4eb7bc,
                  disabled: !_0x5a00b7 || _0x3055de,
                  className: "h-10 px-5 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2",
                  children: [_0x3055de && _0x2aea0d.jsx(C, {
                    className: "size-4 animate-spin"
                  }), _0x706c9b(_0x3055de ? "common.loading" : "common.save")]
                })]
              })
            })]
          })
        })]
      })
    }), _0x2aea0d.jsx(_0x25b38a, {
      open: !!_0x50e2c8,
      onOpenChange: () => _0xb46e5d(null),
      onConfirm: _0x219fb3,
      isLoading: _0x57bcb3,
      icon: _0x2aea0d.jsx(k, {
        className: "size-5 text-red-400"
      }),
      title: _0x706c9b("serverSettings.emojis.deleteTitle"),
      subtitle: _0x706c9b("serverSettings.emojis.deleteWarning"),
      description: _0x50e2c8 ? _0x2aea0d.jsxs("div", {
        className: "flex items-center gap-3 p-3 rounded-xl bg-surface-inset/40 border border-border-subtle",
        children: [_0x2aea0d.jsx("img", {
          src: _0x50e2c8.image_url,
          alt: ":" + _0x50e2c8.name + ":",
          className: "size-10 object-contain"
        }), _0x2aea0d.jsxs("div", {
          children: [_0x2aea0d.jsxs("div", {
            className: "text-sm text-text-primary font-medium",
            children: [":", _0x50e2c8.name, ":"]
          }), _0x2aea0d.jsx("div", {
            className: "text-xs text-text-muted",
            children: _0x50e2c8.animated ? _0x706c9b("serverSettings.emojis.animated") : _0x706c9b("serverSettings.emojis.static")
          })]
        })]
      }) : "",
      confirmText: _0x706c9b("serverSettings.emojis.delete"),
      variant: "danger"
    })]
  });
};
export { F as default };