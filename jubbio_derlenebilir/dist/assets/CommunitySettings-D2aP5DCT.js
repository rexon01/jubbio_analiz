import { R as _0x2b4f81, r as _0x34526f, b as _0x461da7, fc as _0x44b336, dY as _0x60b566, j as _0x4c2346, I as _0x53bbf8, eX as _0x157ac0 } from "./index-cQfEKR1W.js";
import { S as _0x4ad1de } from "./switch-lfnbGePn.js";
import { V as _0x34e532 } from "./VisibilitySwitch-CMTX5ZFx.js";
import { S as _0x40b384 } from "./separator-Ba6vNTx4.js";
import { S as _0x41261e, a as _0x591da8, b as _0x5e9633, c as _0x2e47ea, d as _0x56142b } from "./select-DQjjzSZW.js";
import { a6 as _0x56937a } from "./soundboardFx-C2LP-Hjs.js";
import { C as _0xa01d48 } from "./CreateChannelDialog-BwAcKo9h.js";
import "./label-ODyS97Ju.js";
import "./index-Oyyh46KT.js";
import "./index-BUijt7wr.js";
import "./dialog-BMMpM7PR.js";
import "./index-yuEHo9bu.js";
import "./submit-button-B2LF_DTf.js";
import "./validators-DXDy_d27.js";
import "./apps-ravZtBTn.js";
import "./input-AMyERYwJ.js";
import "./arrow-right-DvlsXLCB.js";
import "./TipTapEditor-BMYECO5E.js";
import "./with-selector-DzPX4d1H.js";
import "./radio-DVcFOQyH.js";
import "./subscription-Cl5JAGbQ.js";
import "./AppLayout-BEBJqe9_.js";
import "./tr-D975n4_R.js";
import "./arrow-left-B3FhifN2.js";
import "./loader-circle-CTtxa1g9.js";
import "./drawer-X7YyCqpZ.js";
import "./useTheme-CzNZmxfV.js";
import "./ComparisonTable-DUfwtDVZ.js";
import "./card-Bk6R3tFg.js";
import "./gift-Co-azAyt.js";
import "./CheckoutPlaceholder-Dr0TfmeQ.js";
import "./IyzicoCheckoutFrame-f1WDW5o8.js";
import "./zap-B3VH4qT9.js";
import "./NexusSuccessArtwork-YGvslhff.js";
import "./circle-x-BBSKKBIf.js";
import "./avatar-C-4BWxT3.js";
import "./ConfirmDialog-B4gIndKy.js";
import "./alert-dialog-BZuoGg7O.js";
import "./user-DSjlY8FD.js";
import "./refresh-cw-C3NlhmpS.js";
import "./trash-2-DuFcDcAU.js";
import "./clipboard-BQ9qambq.js";
import "./video-AtsAgCNJ.js";
import "./plus-B7c2Px8R.js";
import "./channelNotificationStore-FXjXBmS_.js";
import "./index.module-CsHioFCV.js";
import "./hash-Dd0s6IKZ.js";
const b = ({
  className: _0x26a1bb
}) => _0x4c2346.jsx(_0x53bbf8, {
  icon: "solar:document-text-bold-duotone",
  className: _0x26a1bb
});
const v = ({
  className: _0x195c7b
}) => _0x4c2346.jsx(_0x53bbf8, {
  icon: "solar:bell-bing-bold-duotone",
  className: _0x195c7b
});
const y = ({
  className: _0x4b6340
}) => _0x4c2346.jsx(_0x53bbf8, {
  icon: "solar:add-circle-bold-duotone",
  className: _0x4b6340
});
const f = _0x34526f.forwardRef(({
  serverId: _0x2dd8c0,
  onDirtyChange: _0x455f68
}, _0x15181c) => {
  const {
    t: _0x570a33
  } = _0x461da7();
  const [_0x493306, _0x430575] = _0x34526f.useState(false);
  const [_0x1a0c78, _0x145a39] = _0x34526f.useState(false);
  const [_0x273e66, _0x463238] = _0x34526f.useState(true);
  const [_0x52ff36, _0x50c82f] = _0x34526f.useState(false);
  const [_0x32a00e, _0x45ef9a] = _0x34526f.useState(null);
  const [_0x554e87, _0x38c7d5] = _0x34526f.useState(null);
  const [_0x13e6ac, _0x4e2605] = _0x34526f.useState(0);
  const [_0x4e0956, _0x3d6607] = _0x34526f.useState(0);
  const [_0x144550, _0x125a11] = _0x34526f.useState(null);
  const [_0x33f91c, _0x419041] = _0x34526f.useState(null);
  const _0x49b70e = _0x44b336(_0x2dd8c0);
  const _0x508870 = _0x34526f.useMemo(() => _0x49b70e?.channels ? _0x49b70e.channels.find(_0x1999a7 => _0x1999a7.type === "rules") ?? null : null, [_0x49b70e?.channels]);
  const _0x113a40 = _0x34526f.useMemo(() => _0x49b70e?.channels ? _0x49b70e.channels.filter(_0x3fc63d => _0x3fc63d.type === "text" || _0x3fc63d.type === "announcement" || !_0x3fc63d.type) : [], [_0x49b70e?.channels]);
  _0x34526f.useEffect(() => {
    let _0x96e22b = false;
    (async () => {
      if (_0x2dd8c0) {
        try {
          const _0x117a90 = await _0x157ac0(_0x2dd8c0);
          if (_0x96e22b) {
            return;
          }
          const _0x4dcc5f = _0x117a90.is_community === true;
          _0x430575(_0x4dcc5f);
          _0x145a39(_0x4dcc5f);
          const _0x33af04 = _0x117a90.system_channel_id || null;
          const _0x216398 = _0x117a90.system_channel_flags ?? 0;
          _0x45ef9a(_0x33af04);
          _0x38c7d5(_0x33af04);
          _0x4e2605(_0x216398);
          _0x3d6607(_0x216398);
          const _0x2b624d = _0x117a90.boost_channel_id || null;
          _0x125a11(_0x2b624d);
          _0x419041(_0x2b624d);
        } catch (_0x391656) {
          console.error("Topluluk ayarları yüklenemedi", _0x391656);
        } finally {
          if (!_0x96e22b) {
            _0x463238(false);
          }
        }
      }
    })();
    return () => {
      _0x96e22b = true;
    };
  }, [_0x2dd8c0]);
  const _0x21af09 = _0x34526f.useMemo(() => _0x493306 !== _0x1a0c78 || _0x32a00e !== _0x554e87 || _0x144550 !== _0x33f91c || _0x13e6ac !== _0x4e0956, [_0x493306, _0x1a0c78, _0x32a00e, _0x554e87, _0x144550, _0x33f91c, _0x13e6ac, _0x4e0956]);
  _0x34526f.useEffect(() => {
    _0x455f68?.(_0x21af09);
  }, [_0x21af09, _0x455f68]);
  _0x34526f.useEffect(() => () => {
    _0x455f68?.(false);
  }, [_0x455f68]);
  _0x34526f.useImperativeHandle(_0x15181c, () => ({
    reset: () => {
      _0x430575(_0x1a0c78);
      _0x45ef9a(_0x554e87);
      _0x4e2605(_0x4e0956);
      _0x125a11(_0x33f91c);
      _0x455f68?.(false);
    },
    save: async () => {
      if (!_0x21af09) {
        return;
      }
      const _0x3519d8 = {};
      if (_0x493306 !== _0x1a0c78) {
        _0x3519d8.is_community = _0x493306;
      }
      if (_0x32a00e !== _0x554e87) {
        _0x3519d8.system_channel_id = _0x32a00e;
      }
      if (_0x144550 !== _0x33f91c) {
        _0x3519d8.boost_channel_id = _0x144550;
      }
      if (_0x13e6ac !== _0x4e0956) {
        _0x3519d8.system_channel_flags = _0x13e6ac;
      }
      await _0x60b566(_0x2dd8c0, _0x3519d8);
      _0x145a39(_0x493306);
      _0x38c7d5(_0x32a00e);
      _0x419041(_0x144550);
      _0x3d6607(_0x13e6ac);
      _0x455f68?.(false);
    }
  }));
  const _0x3faec6 = _0x34526f.useCallback(async (_0x2aa22f, _0x492323, _0xab9fc8, _0x350541) => {
    await _0x56937a(_0x2dd8c0, {
      name: _0x2aa22f,
      type: _0x492323,
      is_private: !_0xab9fc8,
      category_id: _0x350541 || undefined
    });
  }, [_0x2dd8c0]);
  if (_0x273e66) {
    return _0x4c2346.jsx("div", {
      className: "flex items-center justify-center py-16",
      children: _0x4c2346.jsx("div", {
        className: "size-8 border-[3px] border-border-default border-t-accent-primary rounded-full animate-spin"
      })
    });
  } else {
    return _0x4c2346.jsxs("div", {
      className: "space-y-8",
      children: [_0x4c2346.jsxs("section", {
        children: [_0x4c2346.jsxs("div", {
          className: "mb-2",
          children: [_0x4c2346.jsxs("div", {
            className: "flex items-center gap-2",
            children: [_0x4c2346.jsx(_0x53bbf8, {
              icon: "solar:global-bold-duotone",
              className: "size-4 text-text-tertiary"
            }), _0x4c2346.jsx("div", {
              className: "text-base leading-snug font-semibold text-text-secondary",
              children: _0x570a33("serverSettings.general.communityMode")
            })]
          }), _0x4c2346.jsx("p", {
            className: "text-sm leading-snug text-text-muted mt-0.5",
            children: _0x570a33("serverSettings.general.communityModeDesc")
          })]
        }), _0x4c2346.jsx(_0x34e532, {
          variant: "community",
          isPublic: _0x493306,
          onPublicChange: _0x430575,
          label: _0x570a33("serverSettings.general.communityToggle"),
          publicLabel: _0x570a33("serverSettings.general.communityOn"),
          privateLabel: _0x570a33("serverSettings.general.communityOff")
        })]
      }), _0x4c2346.jsx(_0x40b384, {
        className: "bg-surface-overlay/70"
      }), _0x4c2346.jsxs("section", {
        children: [_0x4c2346.jsxs("div", {
          className: "mb-2",
          children: [_0x4c2346.jsxs("div", {
            className: "flex items-center gap-2",
            children: [_0x4c2346.jsx(b, {
              className: "size-4 text-text-tertiary"
            }), _0x4c2346.jsx("div", {
              className: "text-base leading-snug font-semibold text-text-secondary",
              children: _0x570a33("serverSettings.community.rulesChannel")
            })]
          }), _0x4c2346.jsx("p", {
            className: "text-sm leading-snug text-text-muted mt-0.5",
            children: _0x570a33("serverSettings.community.rulesChannelDesc")
          })]
        }), _0x508870 ? _0x4c2346.jsxs("div", {
          className: "flex items-center gap-3 rounded-xl px-4 py-3 bg-teal-500/5 dark:bg-teal-950/30 border border-teal-600/15 dark:border-teal-800/25",
          children: [_0x4c2346.jsx("div", {
            className: "size-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center shrink-0",
            children: _0x4c2346.jsx(_0x53bbf8, {
              icon: "solar:hashtag-bold-duotone",
              className: "size-4 text-text-primary"
            })
          }), _0x4c2346.jsxs("div", {
            className: "min-w-0",
            children: [_0x4c2346.jsxs("div", {
              className: "text-sm font-medium text-text-secondary",
              children: ["# ", _0x508870.name]
            }), _0x4c2346.jsx("div", {
              className: "text-xs text-teal-700 dark:text-teal-400/80",
              children: _0x570a33("serverSettings.community.rulesChannelActive")
            })]
          })]
        }) : _0x4c2346.jsxs("button", {
          type: "button",
          onClick: () => _0x50c82f(true),
          className: "w-full flex items-center gap-3 rounded-xl px-4 py-3 bg-surface-overlay/40 border border-dashed border-border-strong hover:border-accent-primary/30 hover:bg-accent-subtle transition-colors cursor-pointer",
          children: [_0x4c2346.jsx("div", {
            className: "size-8 rounded-lg bg-surface-inset/60 flex items-center justify-center shrink-0",
            children: _0x4c2346.jsx(y, {
              className: "size-4 text-text-tertiary"
            })
          }), _0x4c2346.jsxs("div", {
            className: "min-w-0 text-left",
            children: [_0x4c2346.jsx("div", {
              className: "text-sm font-medium text-text-secondary",
              children: _0x570a33("serverSettings.community.createRulesChannel")
            }), _0x4c2346.jsx("div", {
              className: "text-xs text-text-muted",
              children: _0x570a33("serverSettings.community.createRulesChannelDesc")
            })]
          })]
        })]
      }), _0x4c2346.jsx(_0xa01d48, {
        isOpen: _0x52ff36,
        onClose: () => _0x50c82f(false),
        onCreate: _0x3faec6,
        initialType: "rules",
        initialVisibility: true,
        categoryId: "",
        categoriesData: _0x49b70e?.categoriesData ?? []
      }), _0x4c2346.jsx(_0x40b384, {
        className: "bg-surface-overlay/70"
      }), _0x4c2346.jsxs("section", {
        children: [_0x4c2346.jsxs("div", {
          className: "mb-3",
          children: [_0x4c2346.jsxs("div", {
            className: "flex items-center gap-2",
            children: [_0x4c2346.jsx(v, {
              className: "size-4 text-text-tertiary"
            }), _0x4c2346.jsx("div", {
              className: "text-base leading-snug font-semibold text-text-secondary",
              children: _0x570a33("serverSettings.community.systemChannel")
            })]
          }), _0x4c2346.jsx("p", {
            className: "text-sm leading-snug text-text-muted mt-0.5",
            children: _0x570a33("serverSettings.community.systemChannelDesc")
          })]
        }), _0x4c2346.jsxs(_0x41261e, {
          value: _0x32a00e || "_none",
          onValueChange: _0x3bbcb9 => _0x45ef9a(_0x3bbcb9 === "_none" ? null : _0x3bbcb9),
          children: [_0x4c2346.jsx(_0x591da8, {
            className: "w-full h-10 bg-surface-overlay/40 border-border-default text-text-primary",
            children: _0x4c2346.jsx(_0x5e9633, {
              placeholder: _0x570a33("serverSettings.community.selectSystemChannel")
            })
          }), _0x4c2346.jsxs(_0x2e47ea, {
            className: "bg-surface-raised/95 border-border-strong/50 backdrop-blur-xl",
            children: [_0x4c2346.jsx(_0x56142b, {
              value: "_none",
              children: _0x4c2346.jsx("div", {
                className: "flex items-center gap-2 text-text-muted",
                children: _0x570a33("serverSettings.community.noSystemChannel")
              })
            }), _0x113a40.map(_0x5419f9 => _0x4c2346.jsx(_0x56142b, {
              value: _0x5419f9.id,
              children: _0x4c2346.jsxs("div", {
                className: "flex items-center gap-2",
                children: [_0x4c2346.jsx(_0x53bbf8, {
                  icon: "solar:hashtag-bold-duotone",
                  className: "size-3.5 text-text-tertiary"
                }), _0x4c2346.jsx("span", {
                  children: _0x5419f9.name
                })]
              })
            }, _0x5419f9.id))]
          })]
        }), _0x32a00e && _0x4c2346.jsxs("div", {
          className: "mt-4 space-y-2",
          children: [_0x4c2346.jsx("p", {
            className: "text-xs font-medium text-text-tertiary uppercase tracking-wide",
            children: _0x570a33("serverSettings.community.systemMessageTypes")
          }), _0x4c2346.jsxs("div", {
            className: "grid gap-2",
            children: [_0x4c2346.jsxs("div", {
              role: "button",
              tabIndex: 0,
              onClick: () => _0x4e2605(_0x1f3a6f => _0x1f3a6f ^ 1),
              onKeyDown: _0x3c6605 => _0x3c6605.key === "Enter" && _0x4e2605(_0x5d9f4e => _0x5d9f4e ^ 1),
              className: "group/vs rounded-xl border border-border-default bg-surface-overlay/20 px-4 py-3 flex items-center justify-between gap-3 cursor-pointer hover:bg-surface-overlay/30 transition-colors",
              children: [_0x4c2346.jsxs("div", {
                className: "flex items-center gap-3 min-w-0",
                children: [_0x4c2346.jsx("div", {
                  className: "size-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0",
                  children: _0x4c2346.jsx(_0x53bbf8, {
                    icon: "solar:hand-shake-bold-duotone",
                    className: "size-4 text-green-400"
                  })
                }), _0x4c2346.jsxs("div", {
                  className: "min-w-0",
                  children: [_0x4c2346.jsx("div", {
                    className: "text-sm font-medium text-text-secondary",
                    children: _0x570a33("serverSettings.community.flagWelcome")
                  }), _0x4c2346.jsx("div", {
                    className: "text-xs text-text-muted",
                    children: _0x570a33("serverSettings.community.flagWelcomeDesc")
                  })]
                })]
              }), _0x4c2346.jsx("div", {
                className: "shrink-0",
                onClick: _0x4aaf6f => _0x4aaf6f.stopPropagation(),
                children: _0x4c2346.jsx(_0x4ad1de, {
                  checked: !(_0x13e6ac & 1),
                  onCheckedChange: () => _0x4e2605(_0x1df21f => _0x1df21f ^ 1),
                  "aria-label": _0x570a33("serverSettings.community.flagWelcome")
                })
              })]
            }), _0x4c2346.jsxs("div", {
              role: "button",
              tabIndex: 0,
              onClick: () => _0x4e2605(_0x1f42bc => _0x1f42bc ^ 4),
              onKeyDown: _0x369ebf => _0x369ebf.key === "Enter" && _0x4e2605(_0x3d98d6 => _0x3d98d6 ^ 4),
              className: "group/vs rounded-xl border border-border-default bg-surface-overlay/20 px-4 py-3 flex items-center justify-between gap-3 cursor-pointer hover:bg-surface-overlay/30 transition-colors",
              children: [_0x4c2346.jsxs("div", {
                className: "flex items-center gap-3 min-w-0",
                children: [_0x4c2346.jsx("div", {
                  className: "size-8 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0",
                  children: _0x4c2346.jsx(_0x53bbf8, {
                    icon: "solar:logout-2-bold-duotone",
                    className: "size-4 text-orange-400"
                  })
                }), _0x4c2346.jsxs("div", {
                  className: "min-w-0",
                  children: [_0x4c2346.jsx("div", {
                    className: "text-sm font-medium text-text-secondary",
                    children: _0x570a33("serverSettings.community.flagLeave")
                  }), _0x4c2346.jsx("div", {
                    className: "text-xs text-text-muted",
                    children: _0x570a33("serverSettings.community.flagLeaveDesc")
                  })]
                })]
              }), _0x4c2346.jsx("div", {
                className: "shrink-0",
                onClick: _0x30da4c => _0x30da4c.stopPropagation(),
                children: _0x4c2346.jsx(_0x4ad1de, {
                  checked: !(_0x13e6ac & 4),
                  onCheckedChange: () => _0x4e2605(_0xfe1a91 => _0xfe1a91 ^ 4),
                  "aria-label": _0x570a33("serverSettings.community.flagLeave")
                })
              })]
            }), _0x4c2346.jsxs("div", {
              className: "rounded-xl border border-border-default bg-surface-overlay/20 overflow-hidden",
              children: [_0x4c2346.jsxs("div", {
                role: "button",
                tabIndex: 0,
                onClick: () => _0x4e2605(_0x48c3b2 => _0x48c3b2 ^ 2),
                onKeyDown: _0x71f47 => _0x71f47.key === "Enter" && _0x4e2605(_0x3f6a95 => _0x3f6a95 ^ 2),
                className: "group/vs px-4 py-3 flex items-center justify-between gap-3 cursor-pointer hover:bg-surface-overlay/30 transition-colors",
                children: [_0x4c2346.jsxs("div", {
                  className: "flex items-center gap-3 min-w-0",
                  children: [_0x4c2346.jsx("div", {
                    className: "size-8 rounded-lg bg-rose-500/10 flex items-center justify-center shrink-0",
                    children: _0x4c2346.jsx(_0x53bbf8, {
                      icon: "solar:gas-station-bold-duotone",
                      className: "size-4 text-rose-400"
                    })
                  }), _0x4c2346.jsxs("div", {
                    className: "min-w-0",
                    children: [_0x4c2346.jsx("div", {
                      className: "text-sm font-medium text-text-secondary",
                      children: _0x570a33("serverSettings.community.flagBoost")
                    }), _0x4c2346.jsx("div", {
                      className: "text-xs text-text-muted",
                      children: _0x570a33("serverSettings.community.flagBoostDesc")
                    })]
                  })]
                }), _0x4c2346.jsx("div", {
                  className: "shrink-0",
                  onClick: _0xaaa9bc => _0xaaa9bc.stopPropagation(),
                  children: _0x4c2346.jsx(_0x4ad1de, {
                    checked: !(_0x13e6ac & 2),
                    onCheckedChange: () => _0x4e2605(_0x57afca => _0x57afca ^ 2),
                    "aria-label": _0x570a33("serverSettings.community.flagBoost")
                  })
                })]
              }), !(_0x13e6ac & 2) && _0x4c2346.jsx("div", {
                className: "px-4 pb-3.5 pt-1",
                children: _0x4c2346.jsxs("div", {
                  className: "flex items-center gap-2.5 rounded-lg bg-rose-500/[0.04] border border-rose-500/10 px-2 py-2.5",
                  children: [_0x4c2346.jsx("div", {
                    className: "size-6 rounded-md bg-rose-500/10 flex items-center justify-center shrink-0",
                    children: _0x4c2346.jsx(_0x53bbf8, {
                      icon: "solar:arrow-right-bold",
                      className: "size-3 text-rose-400/80"
                    })
                  }), _0x4c2346.jsx("div", {
                    className: "flex-1 min-w-0",
                    children: _0x4c2346.jsxs(_0x41261e, {
                      value: _0x144550 || "_none",
                      onValueChange: _0x317fb4 => _0x125a11(_0x317fb4 === "_none" ? null : _0x317fb4),
                      children: [_0x4c2346.jsx(_0x591da8, {
                        className: "w-full h-7 text-xs bg-transparent border-0 shadow-none px-2 text-text-primary hover:bg-rose-500/[0.06] rounded-md transition-colors focus:ring-0 [&>svg]:text-rose-400/60",
                        children: _0x4c2346.jsx(_0x5e9633, {})
                      }), _0x4c2346.jsxs(_0x2e47ea, {
                        className: "bg-surface-raised/95 border-border-strong/50 backdrop-blur-xl",
                        children: [_0x4c2346.jsx(_0x56142b, {
                          value: "_none",
                          children: _0x4c2346.jsxs("div", {
                            className: "flex items-center gap-2 text-text-muted text-xs",
                            children: [_0x4c2346.jsx(_0x53bbf8, {
                              icon: "solar:hashtag-bold-duotone",
                              className: "size-3 text-text-tertiary"
                            }), _0x570a33("serverSettings.community.boostChannelDefault")]
                          })
                        }), _0x113a40.filter(_0x3800de => _0x3800de.id !== _0x32a00e).map(_0x4ad607 => _0x4c2346.jsx(_0x56142b, {
                          value: _0x4ad607.id,
                          children: _0x4c2346.jsxs("div", {
                            className: "flex items-center gap-2 text-xs",
                            children: [_0x4c2346.jsx(_0x53bbf8, {
                              icon: "solar:hashtag-bold-duotone",
                              className: "size-3 text-text-tertiary"
                            }), _0x4c2346.jsx("span", {
                              children: _0x4ad607.name
                            })]
                          })
                        }, _0x4ad607.id))]
                      })]
                    })
                  })]
                })
              })]
            })]
          })]
        })]
      })]
    });
  }
});
const N = _0x2b4f81.memo(f);
export { N as default };