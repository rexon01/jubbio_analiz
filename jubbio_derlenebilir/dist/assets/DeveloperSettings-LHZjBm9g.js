import { r as _0x250a2e, b as _0x61c13a, bC as _0x29e7d6, bD as _0x4a4aa1, j as _0x4c3936, I as _0x40b1df } from "./index-cQfEKR1W.js";
import { S as _0x2efc5f } from "./switch-lfnbGePn.js";
import { S as _0x417dd4 } from "./separator-Ba6vNTx4.js";
const c = ({
  className: _0x39dd3a
}) => _0x4c3936.jsx(_0x40b1df, {
  icon: "solar:code-bold-duotone",
  className: _0x39dd3a
});
const l = ({
  className: _0x109aae
}) => _0x4c3936.jsx(_0x40b1df, {
  icon: "solar:monitor-bold-duotone",
  className: _0x109aae
});
const d = ({
  className: _0x35ef12
}) => _0x4c3936.jsx(_0x40b1df, {
  icon: "solar:users-group-rounded-bold-duotone",
  className: _0x35ef12
});
const x = _0x250a2e.forwardRef(({
  onDirtyChange: _0x20bc3d
}, _0x3dbeae) => {
  const {
    t: _0x478e43
  } = _0x61c13a();
  const _0x122c5a = _0x29e7d6(_0x453843 => _0x453843.settings.appearance.developerMode ?? false);
  const _0x227d4a = _0x29e7d6(_0x86eda8 => _0x86eda8.settings.home.showFriendSuggestions ?? true);
  const _0x545e07 = _0x29e7d6(_0x3fa68e => _0x3fa68e.setAppearanceSettings);
  const _0x14ab73 = _0x29e7d6(_0x4c08d5 => _0x4c08d5.setHomeSettings);
  const [_0x4fcb7d, _0x3acb22] = _0x250a2e.useState(_0x122c5a);
  const [_0x16b2ea, _0xb46d5e] = _0x250a2e.useState(_0x122c5a);
  const [_0x516e17, _0x34afed] = _0x250a2e.useState(_0x227d4a);
  const [_0x34b432, _0x1857b5] = _0x250a2e.useState(_0x227d4a);
  const [_0x295469, _0x5dfb1f] = _0x250a2e.useState(false);
  _0x250a2e.useEffect(() => {
    if (window.electron?.autoLaunch) {
      window.electron.autoLaunch.get().then(_0x3dd0e2 => {
        _0x5dfb1f(!!_0x3dd0e2?.enabled);
      });
    }
  }, []);
  const _0x2ac518 = _0x250a2e.useCallback(async _0x55d449 => {
    if (!window.electron?.autoLaunch) {
      return;
    }
    const _0x5bffcf = await window.electron.autoLaunch.set(_0x55d449);
    if (_0x5bffcf?.success) {
      _0x5dfb1f(_0x55d449);
    }
  }, []);
  _0x250a2e.useEffect(() => {
    _0x3acb22(_0x122c5a);
    _0xb46d5e(_0x122c5a);
  }, [_0x122c5a]);
  _0x250a2e.useEffect(() => {
    _0x34afed(_0x227d4a);
    _0x1857b5(_0x227d4a);
  }, [_0x227d4a]);
  const _0xc195b2 = _0x250a2e.useMemo(() => _0x4fcb7d !== _0x16b2ea || _0x516e17 !== _0x34b432, [_0x4fcb7d, _0x16b2ea, _0x516e17, _0x34b432]);
  _0x250a2e.useEffect(() => {
    _0x20bc3d?.(_0xc195b2);
  }, [_0xc195b2, _0x20bc3d]);
  const _0x51e638 = _0x250a2e.useCallback(_0x1b6539 => {
    _0x3acb22(_0x1b6539);
  }, []);
  const _0x50f1e6 = _0x250a2e.useCallback(_0x6e9800 => {
    _0x34afed(_0x6e9800);
  }, []);
  const _0x5ce910 = _0x250a2e.useCallback(async () => {
    if (!_0xc195b2) {
      return false;
    }
    try {
      if (_0x4fcb7d !== _0x16b2ea) {
        await _0x4a4aa1.updateAppearanceSettings({
          developerMode: _0x4fcb7d
        });
        _0x545e07({
          developerMode: _0x4fcb7d
        });
        _0xb46d5e(_0x4fcb7d);
      }
      if (_0x516e17 !== _0x34b432) {
        await _0x4a4aa1.updateHomeSettings({
          showFriendSuggestions: _0x516e17
        });
        _0x14ab73({
          showFriendSuggestions: _0x516e17
        });
        _0x1857b5(_0x516e17);
      }
      _0x20bc3d?.(false);
      return true;
    } catch (_0x4a6cbf) {
      console.error("Failed to save developer settings:", _0x4a6cbf);
      return false;
    }
  }, [_0xc195b2, _0x4fcb7d, _0x16b2ea, _0x516e17, _0x34b432, _0x545e07, _0x14ab73, _0x20bc3d]);
  const _0x28ba1c = _0x250a2e.useCallback(() => {
    _0x3acb22(_0x16b2ea);
    _0x34afed(_0x34b432);
    _0x20bc3d?.(false);
  }, [_0x16b2ea, _0x34b432, _0x20bc3d]);
  const _0xa8c3f7 = _0x250a2e.useCallback(() => ({
    developerMode: _0x4fcb7d,
    showFriendSuggestions: _0x516e17
  }), [_0x4fcb7d, _0x516e17]);
  const _0x52dc02 = _0x250a2e.useCallback(_0x7dcade => {
    _0x3acb22(_0x7dcade.developerMode);
    _0xb46d5e(_0x7dcade.developerMode);
    _0x34afed(_0x7dcade.showFriendSuggestions);
    _0x1857b5(_0x7dcade.showFriendSuggestions);
    _0x20bc3d?.(false);
  }, [_0x20bc3d]);
  _0x250a2e.useImperativeHandle(_0x3dbeae, () => ({
    getValues: _0xa8c3f7,
    markPristine: _0x52dc02,
    reset: _0x28ba1c,
    save: _0x5ce910
  }), [_0xa8c3f7, _0x52dc02, _0x28ba1c, _0x5ce910]);
  return _0x4c3936.jsxs("div", {
    className: "space-y-8",
    children: [!!window.electron?.autoLaunch && _0x4c3936.jsxs("section", {
      children: [_0x4c3936.jsxs("div", {
        className: "mb-4 sm:mb-5",
        children: [_0x4c3936.jsxs("div", {
          className: "flex items-center gap-2",
          children: [_0x4c3936.jsx(l, {
            className: "size-4 text-text-tertiary"
          }), _0x4c3936.jsx("div", {
            className: "text-base font-semibold text-text-secondary",
            children: _0x478e43("settings.desktopApplication")
          })]
        }), _0x4c3936.jsx("p", {
          className: "text-sm text-text-muted mt-0.5",
          children: _0x478e43("settings.desktopApplicationDesc")
        })]
      }), _0x4c3936.jsx("div", {
        className: "rounded-xl bg-surface-overlay/40 border border-border-default overflow-hidden",
        children: _0x4c3936.jsxs("div", {
          role: "button",
          tabIndex: 0,
          onClick: () => _0x2ac518(!_0x295469),
          onKeyDown: _0x1fe049 => _0x1fe049.key === "Enter" && _0x2ac518(!_0x295469),
          className: "group/vs w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-surface-overlay/50 active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 focus-visible:ring-inset rounded-xl cursor-pointer",
          children: [_0x4c3936.jsxs("div", {
            className: "flex items-start gap-3 flex-1 min-w-0 pr-3",
            children: [_0x4c3936.jsx("span", {
              className: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-inset mt-0.5",
              children: _0x4c3936.jsx(l, {
                className: "size-4 text-text-secondary"
              })
            }), _0x4c3936.jsxs("div", {
              children: [_0x4c3936.jsx("span", {
                className: "text-[15px] font-medium text-text-secondary block",
                children: _0x478e43("settings.autoLaunch")
              }), _0x4c3936.jsx("p", {
                className: "text-[13px] text-text-tertiary mt-0.5 max-w-md",
                children: _0x478e43("settings.autoLaunchDesc")
              })]
            })]
          }), _0x4c3936.jsx(_0x2efc5f, {
            checked: _0x295469,
            onCheckedChange: _0x2ac518,
            onClick: _0x543252 => _0x543252.stopPropagation()
          })]
        })
      })]
    }), !!window.electron?.autoLaunch && _0x4c3936.jsx(_0x417dd4, {
      className: "bg-surface-overlay/70"
    }), _0x4c3936.jsxs("section", {
      children: [_0x4c3936.jsxs("div", {
        className: "mb-4 sm:mb-5",
        children: [_0x4c3936.jsxs("div", {
          className: "flex items-center gap-2",
          children: [_0x4c3936.jsx(c, {
            className: "size-4 text-text-tertiary"
          }), _0x4c3936.jsx("div", {
            className: "text-base font-semibold text-text-secondary",
            children: _0x478e43("settings.developer")
          })]
        }), _0x4c3936.jsx("p", {
          className: "text-sm text-text-muted mt-0.5",
          children: _0x478e43("settings.developerDesc")
        })]
      }), _0x4c3936.jsx("div", {
        className: "rounded-xl bg-surface-overlay/40 border border-border-default overflow-hidden",
        children: _0x4c3936.jsxs("div", {
          role: "button",
          tabIndex: 0,
          onClick: () => _0x51e638(!_0x4fcb7d),
          onKeyDown: _0x141ef4 => _0x141ef4.key === "Enter" && _0x51e638(!_0x4fcb7d),
          className: "group/vs w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-surface-overlay/50 active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 focus-visible:ring-inset rounded-xl cursor-pointer",
          children: [_0x4c3936.jsxs("div", {
            className: "flex items-start gap-3 flex-1 min-w-0 pr-3",
            children: [_0x4c3936.jsx("span", {
              className: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-inset mt-0.5",
              children: _0x4c3936.jsx(c, {
                className: "size-4 text-text-secondary"
              })
            }), _0x4c3936.jsxs("div", {
              children: [_0x4c3936.jsx("span", {
                className: "text-[15px] font-medium text-text-secondary block",
                children: _0x478e43("settings.developerMode")
              }), _0x4c3936.jsx("p", {
                className: "text-[13px] text-text-tertiary mt-0.5 max-w-md",
                children: _0x478e43("settings.developerModeDesc")
              })]
            })]
          }), _0x4c3936.jsx(_0x2efc5f, {
            checked: _0x4fcb7d,
            onCheckedChange: _0x51e638,
            onClick: _0x40cede => _0x40cede.stopPropagation()
          })]
        })
      })]
    }), _0x4c3936.jsx(_0x417dd4, {
      className: "bg-surface-overlay/70"
    }), _0x4c3936.jsxs("section", {
      children: [_0x4c3936.jsxs("div", {
        className: "mb-4 sm:mb-5",
        children: [_0x4c3936.jsxs("div", {
          className: "flex items-center gap-2",
          children: [_0x4c3936.jsx(d, {
            className: "size-4 text-text-tertiary"
          }), _0x4c3936.jsx("div", {
            className: "text-base font-semibold text-text-secondary",
            children: _0x478e43("settings.homePage")
          })]
        }), _0x4c3936.jsx("p", {
          className: "text-sm text-text-muted mt-0.5",
          children: _0x478e43("settings.homePageDesc")
        })]
      }), _0x4c3936.jsx("div", {
        className: "rounded-xl bg-surface-overlay/40 border border-border-default overflow-hidden",
        children: _0x4c3936.jsxs("div", {
          role: "button",
          tabIndex: 0,
          onClick: () => _0x50f1e6(!_0x516e17),
          onKeyDown: _0x348a36 => _0x348a36.key === "Enter" && _0x50f1e6(!_0x516e17),
          className: "group/vs w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-surface-overlay/50 active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 focus-visible:ring-inset rounded-xl cursor-pointer",
          children: [_0x4c3936.jsxs("div", {
            className: "flex items-start gap-3 flex-1 min-w-0 pr-3",
            children: [_0x4c3936.jsx("span", {
              className: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-inset mt-0.5",
              children: _0x4c3936.jsx(d, {
                className: "size-4 text-text-secondary"
              })
            }), _0x4c3936.jsxs("div", {
              children: [_0x4c3936.jsx("span", {
                className: "text-[15px] font-medium text-text-secondary block",
                children: _0x478e43("settings.showFriendSuggestions")
              }), _0x4c3936.jsx("p", {
                className: "text-[13px] text-text-tertiary mt-0.5 max-w-md",
                children: _0x478e43("settings.showFriendSuggestionsDesc")
              })]
            })]
          }), _0x4c3936.jsx(_0x2efc5f, {
            checked: _0x516e17,
            onCheckedChange: _0x50f1e6,
            onClick: _0x5e3d94 => _0x5e3d94.stopPropagation()
          })]
        })
      })]
    })]
  });
});
x.displayName = "DeveloperSettings";
export { x as default };