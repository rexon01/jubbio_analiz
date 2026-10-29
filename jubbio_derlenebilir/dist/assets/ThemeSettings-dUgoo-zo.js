import { b as _0x49647e, aU as _0x1f4377, dN as _0xf8bb9a, r, ec as _0x1d5247, f9 as _0x5398c3, P as _0x215cdd, fa as _0x3b5842, ed as _0x14fe69, j as _0x141940, I as _0x317faf, b2 as _0x14163f, eU as _0x332c79, eW as _0x579a57, fb as _0x8d4ac7 } from "./index-cQfEKR1W.js";
import { S as _0x10f0a2 } from "./separator-Ba6vNTx4.js";
const g = ({
  className: _0x131af8
}) => _0x141940.jsx(_0x317faf, {
  icon: "solar:refresh-bold-duotone",
  className: _0x131af8
});
function v(_0xe057ae, _0x16d122, _0x3a0f79) {
  _0x3a0f79 /= 100;
  const _0x427e9f = (_0x16d122 /= 100) * Math.min(_0x3a0f79, 1 - _0x3a0f79);
  const _0x3504cf = _0x3caf26 => {
    const _0x2dee20 = (_0x3caf26 + _0xe057ae / 30) % 12;
    const _0x1db273 = _0x3a0f79 - _0x427e9f * Math.max(Math.min(_0x2dee20 - 3, 9 - _0x2dee20, 1), -1);
    return Math.round(_0x1db273 * 255).toString(16).padStart(2, "0");
  };
  return "#" + _0x3504cf(0) + _0x3504cf(8) + _0x3504cf(4);
}
const p = ({
  serverId: _0x57c779
}) => {
  const {
    t: _0x26c27f
  } = _0x49647e();
  const _0xfb96c8 = _0x1f4377(_0x3c3aac => _0x3c3aac.guildFuelStatus[_0x57c779]?.boost_tier ?? 0) >= 3;
  const _0x49c733 = _0xf8bb9a(_0x3b4a58 => _0x3b4a58.guilds.get(_0x57c779));
  const _0xa9e19e = _0x49c733?.theme_config;
  const [_0x5651c9, _0x522eab] = r.useState(250);
  const [_0x50b7f1, _0x30c634] = r.useState("vivid");
  const [_0x57eac9, _0x1cc3df] = r.useState("dark");
  const [_0x592a81, _0x560995] = r.useState(false);
  const [_0x52e753, _0x121403] = r.useState(false);
  const [_0xb7e7de, _0x26cba3] = r.useState(false);
  r.useEffect(() => {
    if (_0xa9e19e) {
      if (_0xa9e19e.hue != null) {
        _0x522eab(_0xa9e19e.hue);
      } else if (_0xa9e19e.accent_color) {
        _0x522eab(function (_0x5853b0) {
          const _0x3871e9 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(_0x5853b0);
          if (!_0x3871e9) {
            return 0;
          }
          const _0x5ba05d = parseInt(_0x3871e9[1], 16) / 255;
          const _0xbb0a7a = parseInt(_0x3871e9[2], 16) / 255;
          const _0x45891d = parseInt(_0x3871e9[3], 16) / 255;
          const _0x2fa01e = Math.max(_0x5ba05d, _0xbb0a7a, _0x45891d);
          const _0x10d527 = Math.min(_0x5ba05d, _0xbb0a7a, _0x45891d);
          let _0xec02ba = 0;
          if (_0x2fa01e !== _0x10d527) {
            const _0x274838 = _0x2fa01e - _0x10d527;
            switch (_0x2fa01e) {
              case _0x5ba05d:
                _0xec02ba = ((_0xbb0a7a - _0x45891d) / _0x274838 + (_0xbb0a7a < _0x45891d ? 6 : 0)) * 60;
                break;
              case _0xbb0a7a:
                _0xec02ba = ((_0x45891d - _0x5ba05d) / _0x274838 + 2) * 60;
                break;
              case _0x45891d:
                _0xec02ba = ((_0x5ba05d - _0xbb0a7a) / _0x274838 + 4) * 60;
            }
          }
          return Math.round(_0xec02ba);
        }(_0xa9e19e.accent_color));
      }
      if (_0xa9e19e.intensity) {
        _0x30c634(_0xa9e19e.intensity);
      } else if (_0xa9e19e.header_color === "vivid" || _0xa9e19e.header_color === "pastel") {
        _0x30c634(_0xa9e19e.header_color);
      }
      if (_0xa9e19e.mode) {
        _0x1cc3df(_0xa9e19e.mode);
      } else if (_0xa9e19e.sidebar_color === "dark" || _0xa9e19e.sidebar_color === "light") {
        _0x1cc3df(_0xa9e19e.sidebar_color);
      }
    }
  }, [_0xa9e19e]);
  const _0xa404ea = r.useMemo(() => {
    const _0x3154c3 = _0x8d4ac7(_0x5651c9, _0x50b7f1);
    if (_0x57eac9 === "dark") {
      return _0x3154c3.dark;
    } else {
      return _0x3154c3.light;
    }
  }, [_0x5651c9, _0x50b7f1, _0x57eac9]);
  const _0x124ee9 = r.useCallback(_0x4aa286 => {
    _0x522eab(_0x4aa286);
    if (_0xb7e7de) {
      _0x1d5247({
        hue: _0x4aa286,
        intensity: _0x50b7f1,
        mode: _0x57eac9
      });
    }
  }, [_0x50b7f1, _0x57eac9, _0xb7e7de]);
  const _0x4c64bc = r.useCallback(_0xb2176d => {
    _0x1cc3df(_0xb2176d);
    if (_0xb7e7de) {
      _0x1d5247({
        hue: _0x5651c9,
        intensity: _0x50b7f1,
        mode: _0xb2176d
      });
    }
  }, [_0x5651c9, _0x50b7f1, _0xb7e7de]);
  const _0x5e6ca8 = r.useCallback(_0x39083f => {
    _0x30c634(_0x39083f);
    if (_0xb7e7de) {
      _0x1d5247({
        hue: _0x5651c9,
        intensity: _0x39083f,
        mode: _0x57eac9
      });
    }
  }, [_0x5651c9, _0x57eac9, _0xb7e7de]);
  const _0x5a76b8 = r.useCallback(() => {
    _0x26cba3(true);
    _0x1d5247({
      hue: _0x5651c9,
      intensity: _0x50b7f1,
      mode: _0x57eac9
    });
  }, [_0x5651c9, _0x50b7f1, _0x57eac9]);
  const _0x2acd0e = r.useCallback(() => {
    _0x26cba3(false);
    if (_0xa9e19e) {
      _0x1d5247(_0xa9e19e);
    } else {
      _0x14fe69();
    }
  }, [_0xa9e19e]);
  const _0x10cbdc = r.useCallback(async () => {
    const _0x4afd81 = v(_0x5651c9, 70, 55);
    _0x560995(true);
    try {
      const _0x45f66b = {
        accent_color: _0x4afd81,
        sidebar_color: _0x57eac9,
        header_color: _0x50b7f1
      };
      const _0x645215 = await _0x5398c3(_0x57c779, _0x45f66b);
      _0xf8bb9a.getState().updateGuild(_0x57c779, {
        theme_config: {
          ..._0x645215.data.theme_config,
          hue: _0x5651c9,
          intensity: _0x50b7f1,
          mode: _0x57eac9
        }
      });
      _0x1d5247({
        hue: _0x5651c9,
        intensity: _0x50b7f1,
        mode: _0x57eac9
      });
      _0x26cba3(false);
      _0x215cdd.success(_0x26c27f("serverSettings.theme.saved"));
    } catch {} finally {
      _0x560995(false);
    }
  }, [_0x5651c9, _0x50b7f1, _0x57eac9, _0x57c779, _0x26c27f]);
  const _0x3133da = r.useCallback(async () => {
    _0x121403(true);
    try {
      await _0x3b5842(_0x57c779);
      _0xf8bb9a.getState().updateGuild(_0x57c779, {
        theme_config: null
      });
      _0x14fe69();
      _0x26cba3(false);
      _0x215cdd.success(_0x26c27f("serverSettings.theme.deleted"));
    } catch {} finally {
      _0x121403(false);
    }
  }, [_0x57c779, _0x26c27f]);
  if (_0xfb96c8) {
    return _0x141940.jsx("div", {
      className: "w-full",
      children: _0x141940.jsxs("div", {
        className: "space-y-8",
        children: [_0x141940.jsxs("section", {
          children: [_0x141940.jsxs("div", {
            className: "mb-4",
            children: [_0x141940.jsxs("div", {
              className: "flex items-center gap-2",
              children: [_0x141940.jsx(_0x317faf, {
                icon: "solar:palette-bold-duotone",
                className: "size-4 text-text-tertiary"
              }), _0x141940.jsx("div", {
                className: "text-base font-semibold text-text-secondary",
                children: _0x26c27f("serverSettings.theme.title")
              })]
            }), _0x141940.jsx("p", {
              className: "text-sm text-text-muted mt-0.5",
              children: _0x26c27f("serverSettings.theme.description")
            })]
          }), _0x141940.jsxs("div", {
            className: "rounded-2xl border-2 border-amber-500/30 bg-amber-500/5 p-4",
            children: [_0x141940.jsxs("div", {
              className: "flex items-center gap-2 mb-1",
              children: [_0x141940.jsx(_0x317faf, {
                icon: "solar:gas-station-bold-duotone",
                className: "size-4 text-amber-400"
              }), _0x141940.jsx("span", {
                className: "text-sm font-semibold text-text-secondary",
                children: _0x26c27f("serverSettings.theme.premiumFeature")
              }), _0x141940.jsx("span", {
                className: "flex items-center gap-1 rounded-full bg-amber-500/15 border border-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-400 uppercase tracking-wide",
                children: "Tier 3"
              })]
            }), _0x141940.jsx("p", {
              className: "text-[11px] text-text-muted",
              children: _0x26c27f("serverSettings.theme.premiumDesc")
            })]
          })]
        }), _0x141940.jsx(_0x10f0a2, {
          className: "bg-surface-overlay/70"
        }), _0x141940.jsxs("section", {
          children: [_0x141940.jsxs("div", {
            className: "mb-4",
            children: [_0x141940.jsxs("div", {
              className: "flex items-center gap-2",
              children: [_0x141940.jsx(_0x317faf, {
                icon: "solar:palette-bold-duotone",
                className: "size-4 text-text-tertiary"
              }), _0x141940.jsx("div", {
                className: "text-base font-semibold text-text-secondary",
                children: _0x26c27f("serverSettings.theme.colorSection")
              })]
            }), _0x141940.jsx("p", {
              className: "text-sm text-text-muted mt-0.5",
              children: _0x26c27f("serverSettings.theme.colorSectionDesc")
            })]
          }), _0x141940.jsx("div", {
            className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden",
            children: _0x141940.jsxs("div", {
              className: "px-4 py-3",
              children: [_0x141940.jsxs("div", {
                className: "flex items-center justify-between mb-3",
                children: [_0x141940.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [_0x141940.jsx("div", {
                    className: "size-5 rounded-full border border-white/20 shadow-sm",
                    style: {
                      backgroundColor: v(_0x5651c9, 70, 55)
                    }
                  }), _0x141940.jsxs("span", {
                    className: "text-xs font-mono text-text-tertiary",
                    children: [_0x5651c9, "Â°"]
                  })]
                }), _0x141940.jsxs("button", {
                  type: "button",
                  onClick: () => {
                    _0x522eab(Math.floor(Math.random() * 360));
                    if (_0xb7e7de) {
                      _0x1d5247({
                        hue: _0x5651c9,
                        intensity: _0x50b7f1,
                        mode: _0x57eac9
                      });
                    }
                  },
                  className: "flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-text-secondary bg-surface-overlay hover:bg-interactive-active rounded-lg transition-colors cursor-pointer",
                  children: [_0x141940.jsx(_0x317faf, {
                    icon: "solar:shuffle-bold-duotone",
                    className: "size-3"
                  }), _0x26c27f("serverSettings.theme.randomize")]
                })]
              }), _0x141940.jsx("input", {
                type: "range",
                min: 0,
                max: 360,
                value: _0x5651c9,
                onChange: _0x47aa9e => _0x124ee9(Number(_0x47aa9e.target.value)),
                className: "w-full h-3 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white/50 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer",
                style: {
                  background: "linear-gradient(to right, hsl(0,70%,55%), hsl(60,70%,55%), hsl(120,70%,55%), hsl(180,70%,55%), hsl(240,70%,55%), hsl(300,70%,55%), hsl(360,70%,55%))"
                }
              })]
            })
          })]
        }), _0x141940.jsx(_0x10f0a2, {
          className: "bg-surface-overlay/70"
        }), _0x141940.jsxs("section", {
          children: [_0x141940.jsxs("div", {
            className: "mb-4",
            children: [_0x141940.jsxs("div", {
              className: "flex items-center gap-2",
              children: [_0x141940.jsx(_0x317faf, {
                icon: "solar:sun-bold-duotone",
                className: "size-4 text-text-tertiary"
              }), _0x141940.jsx("div", {
                className: "text-base font-semibold text-text-secondary",
                children: _0x26c27f("serverSettings.theme.modeSection")
              })]
            }), _0x141940.jsx("p", {
              className: "text-sm text-text-muted mt-0.5",
              children: _0x26c27f("serverSettings.theme.modeSectionDesc")
            })]
          }), _0x141940.jsx("div", {
            className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden p-4",
            children: _0x141940.jsx("div", {
              className: "grid grid-cols-4 gap-2",
              children: [{
                m: "dark",
                i: "vivid",
                label: _0x26c27f("serverSettings.theme.dark"),
                sub: _0x26c27f("serverSettings.theme.vivid")
              }, {
                m: "dark",
                i: "pastel",
                label: _0x26c27f("serverSettings.theme.dark"),
                sub: _0x26c27f("serverSettings.theme.pastel")
              }, {
                m: "light",
                i: "vivid",
                label: _0x26c27f("serverSettings.theme.light"),
                sub: _0x26c27f("serverSettings.theme.vivid")
              }, {
                m: "light",
                i: "pastel",
                label: _0x26c27f("serverSettings.theme.light"),
                sub: _0x26c27f("serverSettings.theme.pastel")
              }].map(_0x300a5d => {
                const _0x1475a3 = _0x57eac9 === _0x300a5d.m && _0x50b7f1 === _0x300a5d.i;
                const _0x36b2c7 = _0x332c79(_0x5651c9, _0x300a5d.i);
                const _0x406a1f = _0x579a57(_0x5651c9, _0x300a5d.m);
                return _0x141940.jsxs("button", {
                  type: "button",
                  onClick: () => {
                    _0x4c64bc(_0x300a5d.m);
                    _0x5e6ca8(_0x300a5d.i);
                  },
                  className: "flex flex-col items-center gap-2 py-3 rounded-xl transition-all cursor-pointer " + (_0x1475a3 ? "bg-accent-primary/15 ring-1 ring-accent-primary/30" : "hover:bg-surface-overlay/50"),
                  children: [_0x141940.jsx("div", {
                    className: "size-10 rounded-full transition-all " + (_0x1475a3 ? "ring-2 ring-accent-primary ring-offset-2 ring-offset-surface-raised" : "ring-1 ring-border-default"),
                    style: {
                      background: "conic-gradient(from 180deg, " + _0x406a1f + " 0% 50%, " + _0x36b2c7 + " 50% 100%)"
                    }
                  }), _0x141940.jsxs("div", {
                    className: "text-center",
                    children: [_0x141940.jsx("div", {
                      className: "text-[11px] font-medium leading-none " + (_0x1475a3 ? "text-accent-primary-text" : "text-text-secondary"),
                      children: _0x300a5d.label
                    }), _0x141940.jsx("div", {
                      className: "text-[9px] leading-none mt-1 " + (_0x1475a3 ? "text-accent-primary-text/60" : "text-text-muted"),
                      children: _0x300a5d.sub
                    })]
                  })]
                }, _0x300a5d.m + "-" + _0x300a5d.i);
              })
            })
          })]
        }), _0x141940.jsx(_0x10f0a2, {
          className: "bg-surface-overlay/70"
        }), _0x141940.jsxs("section", {
          children: [_0x141940.jsx("div", {
            className: "mb-4",
            children: _0x141940.jsxs("div", {
              className: "flex items-center gap-2",
              children: [_0x141940.jsx(_0x317faf, {
                icon: "solar:eye-bold-duotone",
                className: "size-4 text-text-tertiary"
              }), _0x141940.jsx("div", {
                className: "text-base font-semibold text-text-secondary",
                children: _0x26c27f("serverSettings.theme.previewSection")
              })]
            })
          }), _0x141940.jsxs("div", {
            className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden",
            children: [_0x141940.jsx("div", {
              className: "p-4",
              children: _0x141940.jsxs("div", {
                className: "rounded-lg border border-white/10 overflow-hidden",
                children: [_0x141940.jsxs("div", {
                  className: "h-6 flex items-center px-2 gap-1.5 border-b",
                  style: {
                    backgroundColor: _0xa404ea["--surface-overlay"],
                    borderColor: _0xa404ea["--border-default"]
                  },
                  children: [_0x141940.jsx("div", {
                    className: "size-1.5 rounded-full",
                    style: {
                      backgroundColor: _0xa404ea["--border-strong"]
                    }
                  }), _0x141940.jsx("div", {
                    className: "size-1.5 rounded-full",
                    style: {
                      backgroundColor: _0xa404ea["--border-strong"]
                    }
                  }), _0x141940.jsx("div", {
                    className: "size-1.5 rounded-full",
                    style: {
                      backgroundColor: _0xa404ea["--border-strong"]
                    }
                  })]
                }), _0x141940.jsxs("div", {
                  className: "flex gap-0",
                  style: {
                    backgroundColor: _0xa404ea["--surface-base"]
                  },
                  children: [_0x141940.jsxs("div", {
                    className: "w-16 shrink-0 p-2 space-y-1 border-r",
                    style: {
                      backgroundColor: _0xa404ea["--surface-raised"],
                      borderColor: _0xa404ea["--border-default"]
                    },
                    children: [_0x141940.jsx("div", {
                      className: "h-1.5 w-full rounded",
                      style: {
                        backgroundColor: _0xa404ea["--surface-overlay"]
                      }
                    }), _0x141940.jsx("div", {
                      className: "h-1.5 w-3/4 rounded",
                      style: {
                        backgroundColor: _0xa404ea["--surface-overlay"]
                      }
                    }), _0x141940.jsx("div", {
                      className: "h-1.5 w-full rounded",
                      style: {
                        backgroundColor: _0xa404ea["--accent-subtle"]
                      }
                    })]
                  }), _0x141940.jsxs("div", {
                    className: "flex-1 p-2 space-y-1.5",
                    children: [_0x141940.jsxs("div", {
                      className: "flex items-center gap-1",
                      children: [_0x141940.jsx("div", {
                        className: "size-3 rounded-full",
                        style: {
                          backgroundColor: _0xa404ea["--accent-primary"]
                        }
                      }), _0x141940.jsx("div", {
                        className: "h-1.5 w-12 rounded",
                        style: {
                          backgroundColor: _0xa404ea["--text-secondary"]
                        }
                      })]
                    }), _0x141940.jsx("div", {
                      className: "h-1.5 w-full rounded",
                      style: {
                        opacity: 0.3,
                        backgroundColor: _0xa404ea["--text-tertiary"]
                      }
                    }), _0x141940.jsx("div", {
                      className: "h-1.5 w-4/5 rounded",
                      style: {
                        opacity: 0.3,
                        backgroundColor: _0xa404ea["--text-tertiary"]
                      }
                    }), _0x141940.jsxs("div", {
                      className: "flex items-center gap-1 mt-1",
                      children: [_0x141940.jsx("div", {
                        className: "px-2 py-0.5 rounded text-[8px] font-medium",
                        style: {
                          backgroundColor: _0xa404ea["--accent-primary"],
                          color: _0xa404ea["--text-on-accent"]
                        },
                        children: "Button"
                      }), _0x141940.jsx("div", {
                        className: "px-2 py-0.5 rounded text-[8px]",
                        style: {
                          backgroundColor: _0xa404ea["--accent-subtle"],
                          color: _0xa404ea["--accent-primary-text"]
                        },
                        children: "Label"
                      })]
                    })]
                  })]
                })]
              })
            }), _0x141940.jsx("div", {
              className: "px-4 pb-3 border-t border-border-default",
              children: _0x141940.jsxs("div", {
                className: "flex gap-2.5 pt-3",
                children: [_0x141940.jsx("div", {
                  className: "shrink-0 mt-0.5",
                  children: _0x141940.jsx("div", {
                    className: "size-4 rounded-full bg-accent-subtle flex items-center justify-center",
                    children: _0x141940.jsx("span", {
                      className: "text-[10px] text-accent-primary-text font-semibold",
                      children: "i"
                    })
                  })
                }), _0x141940.jsx("p", {
                  className: "text-[11px] text-text-secondary leading-relaxed",
                  children: _0x26c27f("serverSettings.theme.contrastInfo")
                })]
              })
            })]
          })]
        }), _0x141940.jsx(_0x10f0a2, {
          className: "bg-surface-overlay/70"
        }), _0x141940.jsxs("section", {
          className: "flex items-center gap-3 flex-wrap",
          children: [_0xb7e7de ? _0x141940.jsxs("button", {
            onClick: _0x2acd0e,
            className: "h-9 px-4 text-sm font-medium rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 transition-colors cursor-pointer flex items-center gap-1.5",
            children: [_0x141940.jsx(_0x317faf, {
              icon: "solar:eye-bold-duotone",
              className: "size-3.5"
            }), _0x26c27f("serverSettings.theme.stopPreview")]
          }) : _0x141940.jsxs("button", {
            onClick: _0x5a76b8,
            className: "h-9 px-4 text-sm font-medium rounded-lg bg-surface-inset/40 border border-border-subtle text-text-secondary hover:bg-interactive-muted transition-colors cursor-pointer flex items-center gap-1.5",
            children: [_0x141940.jsx(_0x317faf, {
              icon: "solar:eye-bold-duotone",
              className: "size-3.5"
            }), _0x26c27f("serverSettings.theme.livePreview")]
          }), _0x141940.jsxs("button", {
            onClick: _0x10cbdc,
            disabled: _0x592a81,
            className: "h-9 px-4 text-sm font-semibold rounded-lg bg-accent-primary hover:brightness-110 text-black transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5",
            children: [_0x592a81 && _0x141940.jsx(g, {
              className: "size-3.5 animate-spin"
            }), _0x26c27f("serverSettings.theme.save")]
          }), _0xa9e19e && _0x141940.jsxs("button", {
            onClick: _0x3133da,
            disabled: _0x52e753,
            className: "h-9 px-4 text-sm font-medium rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5",
            children: [_0x52e753 && _0x141940.jsx(g, {
              className: "size-3.5 animate-spin"
            }), _0x141940.jsx(_0x317faf, {
              icon: "solar:refresh-bold-duotone",
              className: "size-3.5"
            }), _0x26c27f("serverSettings.theme.remove")]
          })]
        })]
      })
    });
  } else {
    return _0x141940.jsx("div", {
      className: "w-full",
      children: _0x141940.jsxs("div", {
        className: "space-y-6",
        children: [_0x141940.jsxs("div", {
          children: [_0x141940.jsxs("div", {
            className: "flex items-center gap-2 mb-1",
            children: [_0x141940.jsx(_0x317faf, {
              icon: "solar:palette-bold-duotone",
              className: "size-4 text-text-tertiary"
            }), _0x141940.jsx("h2", {
              className: "text-base font-semibold text-text-secondary",
              children: _0x26c27f("serverSettings.theme.title")
            })]
          }), _0x141940.jsx("p", {
            className: "text-sm text-text-muted",
            children: _0x26c27f("serverSettings.theme.description")
          })]
        }), _0x141940.jsx("div", {
          className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden",
          children: _0x141940.jsxs("div", {
            className: "px-4 py-3 flex items-center gap-3",
            children: [_0x141940.jsx("span", {
              className: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10",
              children: _0x141940.jsx(_0x317faf, {
                icon: "solar:gas-station-bold-duotone",
                className: "size-4 text-amber-400"
              })
            }), _0x141940.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [_0x141940.jsx("div", {
                className: "text-[15px] font-medium text-text-secondary",
                children: _0x26c27f("serverSettings.theme.tierLocked")
              }), _0x141940.jsx("div", {
                className: "text-[13px] text-text-tertiary mt-0.5",
                children: _0x26c27f("serverSettings.theme.tierLockedDesc")
              })]
            }), _0x141940.jsx("button", {
              type: "button",
              onClick: () => {
                _0x14163f.getState().closeServerSettings();
                _0x14163f.getState().openGuildFuel(_0x57c779);
              },
              className: "h-8 px-3 text-xs font-medium rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-200 hover:bg-amber-500/30 transition-colors active:scale-[0.97] cursor-pointer shrink-0",
              children: _0x26c27f("serverSettings.general.unlockWithTier", {
                tier: 3
              })
            })]
          })
        })]
      })
    });
  }
};
export { p as default };