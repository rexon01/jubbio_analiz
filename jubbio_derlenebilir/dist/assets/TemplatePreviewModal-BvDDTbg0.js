import { R as _0x38ecf1, b as _0x15269b, d as _0x4ac794, b2 as _0x4eb384, r, a_ as _0x1b67e5, j as _0x507d0c, I as _0x57cd68 } from "./index-cQfEKR1W.js";
import { D as _0x126d25, a as _0x58e679, c as _0x3335e8, d as _0x44dd93 } from "./dialog-BMMpM7PR.js";
import { V as _0x10a73b } from "./index-Oyyh46KT.js";
import { u as _0x4ebe82, a as _0x1d998c } from "./templates-DiTUghFZ.js";
import { L as _0xf86f49 } from "./loader-circle-CTtxa1g9.js";
import "./index-yuEHo9bu.js";
const b = _0x38ecf1.memo(() => {
  const {
    t: _0x1d1273
  } = _0x15269b();
  const _0x3cb837 = _0x4ac794();
  const _0x6574c5 = _0x4eb384(_0x45c0c8 => _0x45c0c8.isTemplatePreviewOpen);
  const _0x55cdc7 = _0x4eb384(_0x6539bd => _0x6539bd.templatePreviewCode);
  const _0x5abdce = _0x4eb384(_0x45045f => _0x45045f.closeTemplatePreview);
  const [_0xc06277, _0x1676e4] = r.useState(null);
  const [_0x4e9848, _0x15d402] = r.useState(false);
  const [_0x24e2f5, _0x23e6df] = r.useState(null);
  const [_0x236855, _0x44a214] = r.useState("");
  const [_0x260b55, _0x2712e1] = r.useState(false);
  r.useEffect(() => {
    if (!_0x6574c5 || !_0x55cdc7) {
      _0x1676e4(null);
      _0x23e6df(null);
      _0x44a214("");
      return;
    }
    (async () => {
      _0x15d402(true);
      _0x23e6df(null);
      try {
        const _0x5ca212 = await _0x1d998c(_0x55cdc7);
        _0x1676e4(_0x5ca212);
        _0x44a214(_0x5ca212.serialized_guild.name || "");
      } catch (_0x39b29f) {
        const _0x1fc362 = _0x39b29f?.response?.status;
        _0x23e6df(_0x1fc362 === 404 ? _0x1d1273("template.preview.notFound") : _0x1fc362 === 410 ? _0x1d1273("template.preview.expired") : _0x39b29f?.response?.data?.error || _0x1d1273("template.preview.fetchError"));
      } finally {
        _0x15d402(false);
      }
    })();
  }, [_0x6574c5, _0x55cdc7, _0x1d1273]);
  const _0x30f75d = r.useCallback(async () => {
    if (_0x55cdc7 && _0x236855.trim() && !(_0x236855.trim().length < 2) && !_0x260b55) {
      _0x2712e1(true);
      try {
        const _0x509b5d = (await _0x4ebe82(_0x55cdc7, {
          name: _0x236855.trim()
        })).guild;
        if (_0x509b5d?.id) {
          const {
            addServerIfNotExists: _0x41bb71
          } = _0x1b67e5.getState();
          _0x41bb71({
            id: _0x509b5d.id,
            name: _0x509b5d.name,
            avatar_url: _0x509b5d.avatar_url || null,
            banner_url: _0x509b5d.banner_url || null,
            is_owner: true
          });
          _0x5abdce();
          setTimeout(() => _0x3cb837("/app/server/" + _0x509b5d.id), 50);
        }
      } catch {} finally {
        _0x2712e1(false);
      }
    }
  }, [_0x55cdc7, _0x236855, _0x260b55, _0x5abdce, _0x3cb837]);
  const _0x598c87 = r.useCallback((_0xa95956, _0x255bb4) => {
    const _0x6367ce = [];
    const _0x3d3cdc = _0xa95956.filter(_0x3df398 => _0x3df398.category_index == null);
    if (_0x3d3cdc.length > 0) {
      _0x6367ce.push({
        category: null,
        channels: _0x3d3cdc
      });
    }
    _0x255bb4.forEach((_0x447143, _0x573e4c) => {
      const _0x1c83c6 = _0xa95956.filter(_0x57aa9a => _0x57aa9a.category_index === _0x573e4c);
      _0x6367ce.push({
        category: _0x447143,
        channels: _0x1c83c6
      });
    });
    return _0x6367ce;
  }, []);
  const _0x320231 = r.useCallback(_0x2b410b => {
    if (!_0x2b410b) {
      _0x5abdce();
    }
  }, [_0x5abdce]);
  return _0x507d0c.jsx(_0x126d25, {
    open: _0x6574c5,
    onOpenChange: _0x320231,
    children: _0x507d0c.jsxs(_0x58e679, {
      className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-lg overflow-hidden",
      children: [_0x507d0c.jsxs(_0x10a73b, {
        children: [_0x507d0c.jsx(_0x3335e8, {
          children: _0x1d1273("template.preview.title")
        }), _0x507d0c.jsx(_0x44dd93, {
          children: _0x1d1273("template.preview.description")
        })]
      }), _0x507d0c.jsx("div", {
        className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40",
        children: _0x507d0c.jsxs("div", {
          className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col max-h-[calc(100dvh-2rem)]",
          children: [_0x4e9848 && _0x507d0c.jsx("div", {
            className: "flex items-center justify-center py-20",
            children: _0x507d0c.jsx(_0xf86f49, {
              className: "size-8 animate-spin text-accent-primary"
            })
          }), _0x24e2f5 && !_0x4e9848 && _0x507d0c.jsxs("div", {
            className: "px-6 py-12 text-center",
            children: [_0x507d0c.jsx("div", {
              className: "size-14 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-4",
              children: _0x507d0c.jsx(_0x57cd68, {
                icon: "solar:shield-check-bold-duotone",
                className: "size-7 text-red-400"
              })
            }), _0x507d0c.jsx("h3", {
              className: "text-base font-semibold text-text-primary mb-2",
              children: _0x1d1273("template.preview.errorTitle")
            }), _0x507d0c.jsx("p", {
              className: "text-sm text-text-muted",
              children: _0x24e2f5
            }), _0x507d0c.jsx("button", {
              onClick: _0x5abdce,
              className: "mt-6 h-10 px-6 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-sm font-medium text-text-secondary transition-colors cursor-pointer",
              children: _0x1d1273("common.close")
            })]
          }), _0xc06277 && !_0x4e9848 && !_0x24e2f5 && _0x507d0c.jsxs(_0x507d0c.Fragment, {
            children: [_0x507d0c.jsxs("div", {
              className: "px-5 py-4 border-b border-border-subtle shrink-0",
              children: [_0x507d0c.jsxs("div", {
                className: "flex items-center gap-3",
                children: [_0x507d0c.jsx("div", {
                  className: "size-10 rounded-xl bg-accent-subtle flex items-center justify-center",
                  children: _0x507d0c.jsx(_0x57cd68, {
                    icon: "solar:folder-bold-duotone",
                    className: "size-5 text-accent-primary-text"
                  })
                }), _0x507d0c.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [_0x507d0c.jsx("h2", {
                    className: "text-base font-semibold text-text-primary truncate",
                    children: _0xc06277.name
                  }), _0xc06277.description && _0x507d0c.jsx("p", {
                    className: "text-xs text-text-muted truncate mt-0.5",
                    children: _0xc06277.description
                  })]
                })]
              }), _0x507d0c.jsxs("div", {
                className: "flex items-center gap-4 mt-3 text-xs text-text-tertiary",
                children: [_0x507d0c.jsxs("span", {
                  className: "flex items-center gap-1.5",
                  children: [_0x507d0c.jsx(_0x57cd68, {
                    icon: "solar:users-group-rounded-bold-duotone",
                    className: "size-3.5"
                  }), _0x1d1273("template.preview.usageCount", {
                    count: _0xc06277.usage_count
                  }), _0xc06277.max_uses > 0 && " / " + _0xc06277.max_uses]
                }), _0xc06277.expires_at && _0x507d0c.jsxs("span", {
                  className: "flex items-center gap-1.5",
                  children: [_0x507d0c.jsx(_0x57cd68, {
                    icon: "solar:clock-circle-bold-duotone",
                    className: "size-3.5"
                  }), _0x1d1273("template.preview.expiresAt", {
                    date: new Date(_0xc06277.expires_at).toLocaleDateString()
                  })]
                })]
              })]
            }), _0x507d0c.jsxs("div", {
              className: "px-5 py-4 overflow-y-auto scrollbar-thin flex-1 space-y-4",
              children: [_0x507d0c.jsxs("div", {
                children: [_0x507d0c.jsx("h4", {
                  className: "text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2",
                  children: _0x1d1273("template.preview.channels")
                }), _0x507d0c.jsx("div", {
                  className: "rounded-xl bg-surface-inset/30 border border-border-subtle p-3 space-y-2",
                  children: _0x598c87(_0xc06277.serialized_guild.channels, _0xc06277.serialized_guild.categories).map((_0x54a455, _0x20bd60) => _0x507d0c.jsxs("div", {
                    children: [_0x54a455.category && _0x507d0c.jsxs("div", {
                      className: "flex items-center gap-1.5 text-[11px] font-semibold text-text-tertiary uppercase tracking-wider mt-2 first:mt-0 mb-1",
                      children: [_0x507d0c.jsx(_0x57cd68, {
                        icon: "solar:folder-bold-duotone",
                        className: "size-3"
                      }), _0x54a455.category.name]
                    }), _0x54a455.channels.map((_0x33845c, _0x225b30) => _0x507d0c.jsxs("div", {
                      className: "flex items-center gap-2 py-1 pl-2 text-sm text-text-secondary",
                      children: [_0x33845c.type === "voice" ? _0x507d0c.jsx(_0x57cd68, {
                        icon: "solar:volume-loud-bold-duotone",
                        className: "size-3.5 text-text-muted shrink-0"
                      }) : _0x507d0c.jsx(_0x57cd68, {
                        icon: "solar:hashtag-bold-duotone",
                        className: "size-3.5 text-text-muted shrink-0"
                      }), _0x507d0c.jsx("span", {
                        className: "truncate",
                        children: _0x33845c.name
                      }), _0x33845c.is_private && _0x507d0c.jsx("span", {
                        className: "text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 shrink-0",
                        children: _0x1d1273("template.preview.private")
                      })]
                    }, _0x225b30))]
                  }, _0x20bd60))
                })]
              }), _0x507d0c.jsxs("div", {
                children: [_0x507d0c.jsx("h4", {
                  className: "text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2",
                  children: _0x1d1273("template.preview.roles")
                }), _0x507d0c.jsxs("div", {
                  className: "rounded-xl bg-surface-inset/30 border border-border-subtle p-3 space-y-1.5",
                  children: [_0xc06277.serialized_guild.roles.filter(_0x4941b3 => !_0x4941b3.is_default).sort((_0x3ae2b5, _0x2f5c1a) => _0x3ae2b5.position - _0x2f5c1a.position).map((_0x43e0df, _0x18c261) => _0x507d0c.jsxs("div", {
                    className: "flex items-center gap-2 py-1 text-sm",
                    children: [_0x507d0c.jsx("span", {
                      className: "size-3 rounded-full shrink-0",
                      style: {
                        backgroundColor: _0x43e0df.color ? "#" + _0x43e0df.color.toString(16).padStart(6, "0") : "#99aab5"
                      }
                    }), _0x507d0c.jsx("span", {
                      className: "text-text-secondary truncate",
                      children: _0x43e0df.name
                    })]
                  }, _0x18c261)), _0xc06277.serialized_guild.roles.filter(_0x44a721 => !_0x44a721.is_default).length === 0 && _0x507d0c.jsx("p", {
                    className: "text-xs text-text-muted py-1",
                    children: _0x1d1273("template.preview.noRoles")
                  })]
                })]
              })]
            }), _0x507d0c.jsxs("div", {
              className: "px-5 py-4 border-t border-border-subtle shrink-0 space-y-3",
              children: [_0x507d0c.jsxs("div", {
                children: [_0x507d0c.jsx("label", {
                  className: "text-xs text-text-muted mb-1.5 block",
                  children: _0x1d1273("template.preview.serverNameLabel")
                }), _0x507d0c.jsx("input", {
                  type: "text",
                  value: _0x236855,
                  onChange: _0x57e892 => _0x44a214(_0x57e892.target.value),
                  placeholder: _0x1d1273("template.preview.serverNamePlaceholder"),
                  maxLength: 100,
                  className: "w-full h-10 px-3 rounded-xl bg-surface-inset/40 border border-border-subtle text-text-primary text-sm placeholder:text-text-muted outline-none focus:border-accent-primary/50 transition-colors",
                  onKeyDown: _0x158c5b => {
                    if (_0x158c5b.key === "Enter") {
                      _0x30f75d();
                    }
                  }
                })]
              }), _0x507d0c.jsxs("div", {
                className: "flex items-center gap-2",
                children: [_0x507d0c.jsx("button", {
                  onClick: _0x5abdce,
                  disabled: _0x260b55,
                  className: "flex-1 h-10 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer disabled:opacity-50",
                  children: _0x1d1273("common.cancel")
                }), _0x507d0c.jsx("button", {
                  onClick: _0x30f75d,
                  disabled: _0x236855.trim().length < 2 || _0x260b55,
                  className: "flex-1 h-10 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer",
                  children: _0x260b55 ? _0x507d0c.jsxs(_0x507d0c.Fragment, {
                    children: [_0x507d0c.jsx(_0xf86f49, {
                      className: "size-4 animate-spin"
                    }), _0x1d1273("template.preview.creating")]
                  }) : _0x1d1273("template.preview.createServer")
                })]
              })]
            })]
          })]
        })
      })]
    })
  });
});
export { b as default };