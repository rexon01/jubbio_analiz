import { aC as _0xcba6ba, b as _0xe253e3, r as _0x52f45a, P as _0x2517e7, j as _0x4d0dbd, B as _0x481987, an as _0x14f2fd, I as _0x128903, X as _0x13f02c, K as _0x233146, F as _0x55d123 } from "./index-cQfEKR1W.js";
import { I as _0x2beef1 } from "./input-AMyERYwJ.js";
import { L as _0x1c442f } from "./label-ODyS97Ju.js";
import { C as _0x26c92c } from "./checkbox-6NFFWv4U.js";
import { C as _0x2cdfa3 } from "./ConfirmDialog-B4gIndKy.js";
import { S as _0x2fd49f, a as _0x21e0df, b as _0x46cfa1, c as _0x52fa23, d as _0x4a08e9 } from "./select-DQjjzSZW.js";
import { c as _0x59b92d } from "./clipboard-BQ9qambq.js";
import { B as _0x3ec90c, a as _0x2c9d53, O as _0x498c98 } from "./developer-DXeZvdzI.js";
import { U as _0x3aa20a } from "./UnsavedChangesBar-CFwXhL7X.js";
import { h as _0x2a1944, i as _0x254de5, j as _0xf80668 } from "./developer-DCtAQT29.js";
import { P as _0x32c8b6 } from "./plus-B7c2Px8R.js";
import "./alert-dialog-BZuoGg7O.js";
import "./index-yuEHo9bu.js";
import "./index-Oyyh46KT.js";
import "./loader-circle-CTtxa1g9.js";
const U = ({
  className: _0x235175
}) => _0x4d0dbd.jsx(_0x128903, {
  icon: "solar:bot-bold-duotone",
  className: _0x235175
});
const R = ({
  className: _0x5380dc
}) => _0x4d0dbd.jsx(_0x128903, {
  icon: "solar:user-bold-duotone",
  className: _0x5380dc
});
const _ = _0x52f45a.memo(function ({
  selectedPermissions: _0x47a2fd,
  onToggle: _0x19be5d,
  calculatedValue: _0x49063e
}) {
  const {
    t: _0x488632
  } = _0xe253e3();
  const _0x52ef91 = _0x52f45a.useMemo(() => new Set(_0x47a2fd), [_0x47a2fd]);
  return _0x4d0dbd.jsxs("div", {
    className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden mb-6",
    children: [_0x4d0dbd.jsxs("div", {
      className: "px-4 py-3 border-b border-border-default flex items-center justify-between",
      children: [_0x4d0dbd.jsx("div", {
        className: "text-xs text-text-tertiary",
        children: _0x488632("developer.oauth2Tab.botPermissions")
      }), _0x4d0dbd.jsx("span", {
        className: "text-[10px] font-mono text-text-muted",
        children: _0x488632("developer.oauth2Tab.permissionValue", {
          value: _0x49063e
        })
      })]
    }), _0x4d0dbd.jsx("div", {
      className: "p-3 grid grid-cols-2 gap-1.5",
      children: _0x2c9d53.map(_0x287dc8 => _0x4d0dbd.jsxs("label", {
        className: "flex items-center gap-1.5 px-2 py-1.5 rounded text-[11px] cursor-pointer transition-colors " + (_0x52ef91.has(_0x287dc8.id) ? "bg-accent-subtle border border-accent-primary/30 text-text-secondary" : "bg-surface-overlay/30 border border-border-default text-text-tertiary hover:bg-surface-overlay/50"),
        children: [_0x4d0dbd.jsx(_0x26c92c, {
          checked: _0x52ef91.has(_0x287dc8.id),
          onCheckedChange: () => _0x19be5d(_0x287dc8.id),
          className: "size-3"
        }), _0x4d0dbd.jsx("span", {
          children: _0x287dc8.label
        })]
      }, _0x287dc8.id))
    })]
  });
});
const D = new Set(["bot", "applications.commands", "applications.commands.permissions.update"]);
const I = ["user", "guilds", "webhook"];
const M = ["messages", "dm", "voice", "relationships", "presence", "account", "activities", "rpc"];
function O() {
  const {
    application: _0x3cd531
  } = _0xcba6ba();
  const {
    t: _0x4b0e38
  } = _0xe253e3();
  const [_0x53283b, _0x1c0738] = _0x52f45a.useState(null);
  const [_0x458739, _0x492b5f] = _0x52f45a.useState(true);
  const [_0x3072e8, _0x1dba0d] = _0x52f45a.useState(null);
  const [_0xa50924, _0x1508e0] = _0x52f45a.useState("");
  const [_0x1350ff, _0x526a8a] = _0x52f45a.useState(null);
  const [_0x7e145, _0x1b37c6] = _0x52f45a.useState([]);
  const [_0x2ebf5, _0x14b746] = _0x52f45a.useState(false);
  const [_0x17d00a, _0x429d7f] = _0x52f45a.useState(null);
  const [_0x1f91a7, _0x6be499] = _0x52f45a.useState(false);
  const [_0x330e12, _0x59e382] = _0x52f45a.useState(false);
  const [_0x234c54, _0x6e348e] = _0x52f45a.useState(false);
  const [_0x2c14bc, _0x28adbc] = _0x52f45a.useState("bot");
  const [_0x1e045b, _0x1ca29c] = _0x52f45a.useState([]);
  const [_0x276fc8, _0x19c61f] = _0x52f45a.useState([]);
  const [_0x432e17, _0x2e839d] = _0x52f45a.useState("");
  const [_0x31f065, _0x249c4e] = _0x52f45a.useState(false);
  const _0x1181ae = _0x52f45a.useMemo(() => new Set(_0x3ec90c), []);
  const _0x51478b = _0x2c14bc === "bot";
  const _0x5d7880 = _0x2c14bc === "oauth2";
  const _0x59f622 = _0x52f45a.useMemo(() => new Set(_0x1e045b), [_0x1e045b]);
  const _0x3d4e72 = _0x52f45a.useMemo(() => new Set(_0x276fc8), [_0x276fc8]);
  const _0x533149 = _0x52f45a.useMemo(() => _0x1e045b.some(_0x2d44f0 => !D.has(_0x2d44f0)), [_0x1e045b]);
  _0x52f45a.useEffect(() => {
    if (_0x51478b && !_0x59f622.has("bot")) {
      _0x1ca29c(_0x28d719 => [..._0x28d719.filter(_0xcf4795 => !_0x1181ae.has(_0xcf4795)), "bot"]);
    }
    if (!_0x51478b) {
      _0x1ca29c(_0xed88d9 => _0xed88d9.filter(_0x2e85ef => !D.has(_0x2e85ef)));
      _0x19c61f([]);
    }
  }, [_0x2c14bc]);
  _0x52f45a.useEffect(() => {
    if (_0x7e145.length > 0) {
      if (!_0x432e17 || !_0x7e145.includes(_0x432e17)) {
        _0x2e839d(_0x7e145[0]);
      }
    } else {
      _0x2e839d("");
    }
  }, [_0x7e145, _0x432e17]);
  const _0x378619 = _0x52f45a.useMemo(() => !!_0x53283b && JSON.stringify(_0x7e145) !== JSON.stringify(_0x53283b.redirect_uris), [_0x7e145, _0x53283b]);
  const _0x4c788d = _0x52f45a.useCallback(async () => {
    if (_0x3cd531?.id) {
      try {
        _0x492b5f(true);
        _0x1dba0d(null);
        const _0x834966 = await _0x2a1944(_0x3cd531.id);
        _0x1c0738(_0x834966);
        _0x1b37c6(_0x834966.redirect_uris);
      } catch (_0x248075) {
        _0x1dba0d(_0x248075.response?.data?.message || _0x248075.response?.data?.error || _0x248075.message);
      } finally {
        _0x492b5f(false);
      }
    }
  }, [_0x3cd531?.id]);
  _0x52f45a.useEffect(() => {
    _0x4c788d();
  }, [_0x4c788d]);
  const _0x25b7cb = _0x52f45a.useCallback(async (_0x407b10, _0xec502) => {
    await _0x59b92d(_0x407b10);
    _0x526a8a(_0xec502);
    _0x2517e7.success(_0x4b0e38("developer.oauth2Tab.copied"));
    setTimeout(() => _0x526a8a(null), 2000);
  }, []);
  const _0x1e7a8a = _0x52f45a.useMemo(() => {
    if (!_0x53283b) {
      return "";
    }
    const _0x16226 = window.location.origin + "/oauth2/authorize";
    const _0x3186f5 = new URLSearchParams({
      client_id: _0x53283b.client_id,
      response_type: "code"
    });
    if (_0x1e045b.length > 0) {
      _0x3186f5.set("scope", _0x1e045b.join(" "));
    }
    if (_0x51478b && _0x276fc8.length > 0) {
      if (_0x3d4e72.has("administrator")) {
        _0x3186f5.set("permissions", "8");
      } else {
        const _0x29a182 = _0x2c9d53.filter(_0x381696 => _0x3d4e72.has(_0x381696.id)).reduce((_0x4800b0, _0x5b3da9) => _0x4800b0 | _0x5b3da9.value, 0);
        _0x3186f5.set("permissions", _0x29a182.toString());
      }
    }
    if (_0x432e17 && _0x533149) {
      _0x3186f5.set("redirect_uri", _0x432e17);
    }
    return _0x16226 + "?" + _0x3186f5.toString();
  }, [_0x53283b, _0x1e045b, _0x276fc8, _0x3d4e72, _0x432e17, _0x533149, _0x51478b]);
  const _0xa3204f = _0x52f45a.useMemo(() => _0x3d4e72.has("administrator") ? "8" : _0x2c9d53.filter(_0x11ec44 => _0x3d4e72.has(_0x11ec44.id)).reduce((_0x38579f, _0x52baf4) => _0x38579f | _0x52baf4.value, 0).toString(), [_0x276fc8, _0x3d4e72]);
  const _0x22cda0 = _0x52f45a.useCallback(_0x1704ed => {
    if (!_0x51478b || !_0x1181ae.has(_0x1704ed)) {
      _0x1ca29c(_0x4388e7 => _0x4388e7.includes(_0x1704ed) ? _0x4388e7.filter(_0x14967b => _0x14967b !== _0x1704ed) : [..._0x4388e7, _0x1704ed]);
    }
  }, [_0x51478b, _0x1181ae]);
  const _0x25e829 = _0x52f45a.useCallback(_0xcfb855 => {
    _0x19c61f(_0x3fc21d => _0x3fc21d.includes(_0xcfb855) ? _0x3fc21d.filter(_0x532162 => _0x532162 !== _0xcfb855) : [..._0x3fc21d, _0xcfb855]);
  }, []);
  if (!_0x3cd531) {
    return _0x4d0dbd.jsx("div", {
      className: "flex items-center justify-center py-20",
      children: _0x4d0dbd.jsx("div", {
        className: "size-8 animate-spin rounded-full border-2 border-border-default border-t-accent-primary"
      })
    });
  }
  if (_0x458739) {
    return _0x4d0dbd.jsx("div", {
      className: "flex items-center justify-center py-20",
      children: _0x4d0dbd.jsx("div", {
        className: "size-8 animate-spin rounded-full border-2 border-border-default border-t-accent-primary"
      })
    });
  }
  if (_0x3072e8) {
    return _0x4d0dbd.jsxs("div", {
      className: "flex flex-col items-center justify-center py-20 text-center",
      children: [_0x4d0dbd.jsx("p", {
        className: "text-red-400 mb-4",
        children: _0x3072e8
      }), _0x4d0dbd.jsx(_0x481987, {
        variant: "outline",
        onClick: _0x4c788d,
        children: _0x4b0e38("developer.oauth2Tab.retry")
      })]
    });
  }
  if (!_0x53283b) {
    return _0x4d0dbd.jsx("div", {
      className: "text-center py-10 text-text-tertiary",
      children: _0x4b0e38("developer.oauth2Tab.noSettings")
    });
  }
  const _0xdcad57 = async () => {
    if (_0xa50924.trim()) {
      try {
        new URL(_0xa50924.trim());
        const _0x1c015a = _0xa50924.trim();
        if (_0x7e145.includes(_0x1c015a)) {
          _0x2517e7.error(_0x4b0e38("developer.oauth2Tab.uriExists"));
          return;
        }
        _0x1b37c6(_0x455bec => [..._0x455bec, _0x1c015a]);
        _0x1508e0("");
      } catch {
        _0x2517e7.error(_0x4b0e38("developer.oauth2Tab.invalidUrl"));
      }
    }
  };
  const _0xa57063 = _0x3fa506 => {
    const _0x1105ee = _0x51478b && _0x1181ae.has(_0x3fa506.id);
    const _0x2e469f = _0x59f622.has(_0x3fa506.id);
    return _0x4d0dbd.jsxs("label", {
      className: "flex items-center gap-2 px-3 py-2 rounded-lg transition-all cursor-pointer " + (_0x1105ee ? "bg-surface-overlay/20 border border-border-default text-text-muted cursor-not-allowed opacity-50" : _0x2e469f ? "bg-accent-subtle border border-accent-primary/30 text-text-secondary" : "bg-surface-overlay/30 border border-border-default text-text-secondary hover:bg-surface-overlay/50"),
      children: [_0x4d0dbd.jsx(_0x26c92c, {
        checked: _0x2e469f,
        onCheckedChange: () => _0x22cda0(_0x3fa506.id),
        disabled: _0x1105ee,
        className: "size-4"
      }), _0x4d0dbd.jsxs("div", {
        className: "flex-1 min-w-0",
        children: [_0x4d0dbd.jsxs("div", {
          className: "flex items-center gap-2",
          children: [_0x4d0dbd.jsx("span", {
            className: "font-mono text-xs",
            children: _0x3fa506.label
          }), _0x3fa506.requiresRedirect && _0x4d0dbd.jsx("span", {
            className: "text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400",
            children: "redirect"
          })]
        }), _0x4d0dbd.jsx("p", {
          className: "text-[11px] text-text-tertiary truncate",
          children: _0x3fa506.description
        }), _0x3fa506.warning && _0x4d0dbd.jsx("p", {
          className: "text-[10px] text-amber-400 mt-0.5",
          children: _0x3fa506.warning
        }), _0x1105ee && _0x4d0dbd.jsx("p", {
          className: "text-[10px] text-red-400 mt-0.5",
          children: _0x4b0e38("developer.oauth2Tab.botIncompatibleHint")
        })]
      })]
    }, _0x3fa506.id);
  };
  const _0x355b8a = _0x125d7f => {
    const _0x4dc3ea = _0x498c98[_0x125d7f];
    if (_0x4dc3ea) {
      return _0x4d0dbd.jsxs("div", {
        className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden",
        children: [_0x4d0dbd.jsx("div", {
          className: "px-4 py-3 border-b border-border-default",
          children: _0x4d0dbd.jsxs("div", {
            className: "flex items-center gap-2",
            children: [_0x4d0dbd.jsx("span", {
              className: "text-base",
              children: _0x4dc3ea.icon
            }), _0x4d0dbd.jsx("span", {
              className: "text-xs font-medium text-text-secondary",
              children: _0x4dc3ea.label
            })]
          })
        }), _0x4d0dbd.jsx("div", {
          className: "p-3 space-y-2",
          children: _0x4dc3ea.scopes.map(_0x4a2992 => _0xa57063(_0x4a2992))
        })]
      }, _0x125d7f);
    } else {
      return null;
    }
  };
  return _0x4d0dbd.jsxs("div", {
    className: "space-y-8 pb-24",
    children: [_0x4d0dbd.jsxs("div", {
      children: [_0x4d0dbd.jsx("h1", {
        className: "text-2xl font-bold text-text-primary",
        children: _0x4b0e38("developer.oauth2Tab.title")
      }), _0x4d0dbd.jsxs("p", {
        className: "text-sm text-text-tertiary mt-1",
        children: [_0x4b0e38("developer.oauth2Tab.subtitle"), " · ", _0x4d0dbd.jsx("a", {
          href: "/dev/docs/oauth2/flow",
          className: "text-accent-primary-text hover:underline",
          target: "_blank",
          rel: "noopener noreferrer",
          children: _0x4b0e38("developer.oauth2Tab.viewDocs")
        })]
      })]
    }), _0x4d0dbd.jsxs("section", {
      children: [_0x4d0dbd.jsxs("div", {
        className: "mb-4",
        children: [_0x4d0dbd.jsx("div", {
          className: "text-sm font-semibold text-text-secondary",
          children: _0x4b0e38("developer.oauth2Tab.clientCredentials")
        }), _0x4d0dbd.jsx("p", {
          className: "text-xs text-text-muted mt-0.5",
          children: _0x4b0e38("developer.oauth2Tab.secretResetHint")
        })]
      }), _0x4d0dbd.jsxs("div", {
        className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden divide-y divide-border-default",
        children: [_0x4d0dbd.jsxs("div", {
          className: "px-4 py-4",
          children: [_0x4d0dbd.jsx(_0x1c442f, {
            className: "text-xs text-text-tertiary mb-2 block",
            children: "Client ID"
          }), _0x4d0dbd.jsxs("div", {
            className: "flex items-center gap-2",
            children: [_0x4d0dbd.jsx(_0x2beef1, {
              value: _0x53283b.client_id,
              readOnly: true,
              className: "font-mono text-sm bg-surface-overlay/50 border-border-default"
            }), _0x4d0dbd.jsx(_0x481987, {
              variant: "outline",
              size: "icon",
              onClick: () => _0x25b7cb(_0x53283b.client_id, "clientId"),
              className: "shrink-0",
              children: _0x1350ff === "clientId" ? _0x4d0dbd.jsx(_0x14f2fd, {
                className: "size-4 text-green-400"
              }) : _0x4d0dbd.jsx(_0x128903, {
                icon: "solar:copy-bold-duotone",
                className: "size-4"
              })
            })]
          })]
        }), _0x4d0dbd.jsxs("div", {
          className: "px-4 py-4",
          children: [_0x4d0dbd.jsx(_0x1c442f, {
            className: "text-xs text-text-tertiary mb-2 block",
            children: "Client Secret"
          }), _0x4d0dbd.jsxs("div", {
            className: "flex items-center gap-2",
            children: [_0x17d00a ? _0x4d0dbd.jsxs(_0x4d0dbd.Fragment, {
              children: [_0x4d0dbd.jsxs("div", {
                className: "relative flex-1",
                children: [_0x4d0dbd.jsx(_0x2beef1, {
                  value: _0x1f91a7 ? _0x17d00a : "•".repeat(40),
                  readOnly: true,
                  className: "font-mono text-sm bg-surface-overlay/50 border-border-default pr-10"
                }), _0x4d0dbd.jsx("button", {
                  type: "button",
                  onClick: () => _0x6be499(!_0x1f91a7),
                  className: "absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-secondary",
                  children: _0x1f91a7 ? _0x4d0dbd.jsx(_0x128903, {
                    icon: "solar:eye-closed-bold-duotone",
                    className: "size-4"
                  }) : _0x4d0dbd.jsx(_0x128903, {
                    icon: "solar:eye-bold-duotone",
                    className: "size-4"
                  })
                })]
              }), _0x4d0dbd.jsx(_0x481987, {
                variant: "outline",
                size: "icon",
                onClick: () => _0x25b7cb(_0x17d00a, "clientSecret"),
                className: "shrink-0",
                children: _0x1350ff === "clientSecret" ? _0x4d0dbd.jsx(_0x14f2fd, {
                  className: "size-4 text-green-400"
                }) : _0x4d0dbd.jsx(_0x128903, {
                  icon: "solar:copy-bold-duotone",
                  className: "size-4"
                })
              })]
            }) : _0x4d0dbd.jsxs("div", {
              className: "flex-1 flex items-center gap-2 px-3 py-2 rounded-md bg-surface-overlay/50 border border-border-default text-text-muted text-sm",
              children: [_0x4d0dbd.jsx(_0x128903, {
                icon: "solar:danger-triangle-bold-duotone",
                className: "size-4"
              }), _0x4d0dbd.jsx("span", {
                children: _0x4b0e38("developer.oauth2Tab.secretHidden")
              })]
            }), _0x4d0dbd.jsxs(_0x481987, {
              variant: "outline",
              size: "sm",
              className: "shrink-0 gap-2 h-9",
              onClick: () => _0x59e382(true),
              children: [_0x4d0dbd.jsx(_0x128903, {
                icon: "solar:refresh-bold-duotone",
                className: "size-3"
              }), _0x4b0e38("developer.oauth2Tab.reset")]
            })]
          })]
        })]
      })]
    }), _0x4d0dbd.jsxs("section", {
      children: [_0x4d0dbd.jsxs("div", {
        className: "mb-4",
        children: [_0x4d0dbd.jsx("div", {
          className: "text-sm font-semibold text-text-secondary",
          children: _0x4b0e38("developer.oauth2Tab.redirectUris")
        }), _0x4d0dbd.jsx("p", {
          className: "text-xs text-text-muted mt-0.5",
          children: _0x4b0e38("developer.oauth2Tab.redirectUriRequired")
        })]
      }), _0x4d0dbd.jsx("div", {
        className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden",
        children: _0x4d0dbd.jsxs("div", {
          className: "px-4 py-4 space-y-3",
          children: [_0x4d0dbd.jsxs("div", {
            className: "flex gap-2",
            children: [_0x4d0dbd.jsx(_0x2beef1, {
              value: _0xa50924,
              onChange: _0x25a1d2 => _0x1508e0(_0x25a1d2.target.value),
              placeholder: "https://example.com/callback",
              className: "bg-surface-overlay/50 border-border-default",
              onKeyDown: _0x3057fd => _0x3057fd.key === "Enter" && _0xdcad57()
            }), _0x4d0dbd.jsxs(_0x481987, {
              onClick: _0xdcad57,
              size: "sm",
              className: "shrink-0 gap-2 h-9",
              children: [_0x4d0dbd.jsx(_0x32c8b6, {
                className: "size-3"
              }), _0x4b0e38("developer.oauth2Tab.addUri")]
            })]
          }), _0x7e145.length > 0 ? _0x4d0dbd.jsx("div", {
            className: "space-y-2",
            children: _0x7e145.map(_0x54a693 => _0x4d0dbd.jsxs("div", {
              className: "flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-overlay/30 border border-border-default group",
              children: [_0x4d0dbd.jsx(_0x128903, {
                icon: "solar:square-arrow-right-up-bold-duotone",
                className: "size-4 text-text-muted shrink-0"
              }), _0x4d0dbd.jsx("span", {
                className: "flex-1 font-mono text-sm text-text-secondary truncate",
                children: _0x54a693
              }), _0x4d0dbd.jsx(_0x481987, {
                variant: "ghost",
                size: "icon",
                onClick: () => (_0x42d3db => _0x1b37c6(_0x259fbb => _0x259fbb.filter(_0x319d1b => _0x319d1b !== _0x42d3db)))(_0x54a693),
                className: "size-7 opacity-0 group-hover:opacity-100 transition-opacity text-text-tertiary hover:text-red-400",
                children: _0x4d0dbd.jsx(_0x13f02c, {
                  className: "size-4"
                })
              })]
            }, _0x54a693))
          }) : _0x4d0dbd.jsx("p", {
            className: "text-sm text-text-muted text-center py-4",
            children: _0x4b0e38("developer.oauth2Tab.noRedirectUris")
          })]
        })
      })]
    }), _0x4d0dbd.jsxs("section", {
      children: [_0x4d0dbd.jsxs("div", {
        className: "mb-4",
        children: [_0x4d0dbd.jsx("div", {
          className: "text-sm font-semibold text-text-secondary",
          children: _0x4b0e38("developer.oauth2Tab.urlGenerator")
        }), _0x4d0dbd.jsx("p", {
          className: "text-xs text-text-muted mt-0.5",
          children: _0x4b0e38("developer.oauth2Tab.urlGeneratorDesc")
        })]
      }), _0x4d0dbd.jsx("div", {
        className: "text-xs text-text-muted uppercase tracking-wider mb-3",
        children: _0x4b0e38("developer.oauth2Tab.step1")
      }), _0x4d0dbd.jsx("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6",
        children: [{
          mode: "bot",
          icon: U,
          title: _0x4b0e38("developer.oauth2Tab.flowBot"),
          desc: _0x4b0e38("developer.oauth2Tab.flowBotDesc"),
          color: "blue"
        }, {
          mode: "oauth2",
          icon: R,
          title: _0x4b0e38("developer.oauth2Tab.flowOAuth2"),
          desc: _0x4b0e38("developer.oauth2Tab.flowOAuth2Desc"),
          color: "purple"
        }].map(({
          mode: _0x5d4995,
          icon: _0x3bc328,
          title: _0x2bbf08,
          desc: _0x51a97b,
          color: _0x254164
        }) => {
          const _0x7bb658 = _0x2c14bc === _0x5d4995;
          return _0x4d0dbd.jsxs("button", {
            type: "button",
            onClick: () => _0x28adbc(_0x5d4995),
            className: "relative p-4 rounded-xl border text-left transition-all cursor-pointer " + (_0x7bb658 ? _0x254164 === "blue" ? "border-blue-500/50 bg-blue-500/10" : "border-purple-500/50 bg-purple-500/10" : "border-border-default bg-surface-raised/50 hover:bg-surface-overlay/50"),
            children: [_0x7bb658 && _0x4d0dbd.jsx("div", {
              className: "absolute top-3 right-3",
              children: _0x4d0dbd.jsx(_0x14f2fd, {
                className: "size-4 text-accent-primary-text"
              })
            }), _0x4d0dbd.jsx(_0x3bc328, {
              className: "size-6 mb-2 " + (_0x7bb658 ? _0x254164 === "blue" ? "text-blue-400" : "text-purple-400" : "text-text-tertiary")
            }), _0x4d0dbd.jsx("div", {
              className: "text-sm font-medium text-text-secondary",
              children: _0x2bbf08
            }), _0x4d0dbd.jsx("div", {
              className: "text-[11px] text-text-tertiary mt-1",
              children: _0x51a97b
            })]
          }, _0x5d4995);
        })
      }), _0x51478b && _0x4d0dbd.jsxs(_0x4d0dbd.Fragment, {
        children: [_0x4d0dbd.jsx("div", {
          className: "text-xs text-text-muted uppercase tracking-wider mb-3",
          children: _0x4b0e38("developer.oauth2Tab.step2Bot")
        }), _0x4d0dbd.jsx("div", {
          className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden mb-6",
          children: _0x4d0dbd.jsx("div", {
            className: "p-3 space-y-2",
            children: _0x498c98.bot.scopes.map(_0x527547 => _0xa57063(_0x527547))
          })
        })]
      }), _0x51478b && _0x59f622.has("bot") && _0x4d0dbd.jsxs(_0x4d0dbd.Fragment, {
        children: [_0x4d0dbd.jsx("div", {
          className: "text-xs text-text-muted uppercase tracking-wider mb-3",
          children: _0x4b0e38("developer.oauth2Tab.step3Perms")
        }), _0x4d0dbd.jsxs("div", {
          className: "p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 mb-3 flex items-start gap-2",
          children: [_0x4d0dbd.jsx(_0x128903, {
            icon: "solar:info-circle-bold-duotone",
            className: "size-4 text-amber-400 shrink-0 mt-0.5"
          }), _0x4d0dbd.jsx("p", {
            className: "text-xs text-amber-200/80",
            children: _0x4b0e38("developer.oauth2Tab.botPermissionsInfo")
          })]
        }), _0x4d0dbd.jsx(_, {
          selectedPermissions: _0x276fc8,
          onToggle: _0x25e829,
          calculatedValue: _0xa3204f
        })]
      }), _0x5d7880 && _0x4d0dbd.jsxs(_0x4d0dbd.Fragment, {
        children: [_0x4d0dbd.jsx("div", {
          className: "text-xs text-text-muted uppercase tracking-wider mb-3",
          children: _0x4b0e38("developer.oauth2Tab.step2Scopes")
        }), _0x533149 && _0x7e145.length === 0 && _0x4d0dbd.jsxs("div", {
          className: "mb-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-start gap-2",
          children: [_0x4d0dbd.jsx(_0x128903, {
            icon: "solar:danger-triangle-bold-duotone",
            className: "size-4 text-amber-400 shrink-0 mt-0.5"
          }), _0x4d0dbd.jsxs("div", {
            children: [_0x4d0dbd.jsx("p", {
              className: "text-sm text-amber-200",
              children: _0x4b0e38("developer.oauth2Tab.redirectRequired")
            }), _0x4d0dbd.jsx("p", {
              className: "text-xs text-amber-400/80 mt-0.5",
              children: _0x4b0e38("developer.oauth2Tab.redirectRequiredHint")
            })]
          })]
        }), _0x4d0dbd.jsx("div", {
          className: "space-y-3 mb-3",
          children: I.map(_0x454d78 => _0x355b8a(_0x454d78))
        }), _0x4d0dbd.jsxs("button", {
          onClick: () => _0x249c4e(!_0x31f065),
          className: "flex items-center gap-2 w-full px-4 py-3 rounded-xl bg-surface-raised/50 border border-border-default hover:bg-surface-overlay/50 transition-colors text-left cursor-pointer mb-3",
          children: [_0x31f065 ? _0x4d0dbd.jsx(_0x233146, {
            className: "size-4"
          }) : _0x4d0dbd.jsx(_0x55d123, {
            className: "size-4"
          }), _0x4d0dbd.jsx(_0x128903, {
            icon: "solar:settings-bold-duotone",
            className: "size-4 text-text-tertiary"
          }), _0x4d0dbd.jsx("span", {
            className: "text-sm font-medium text-text-secondary",
            children: _0x4b0e38("developer.oauth2Tab.advancedScopes")
          })]
        }), _0x31f065 && _0x4d0dbd.jsx("div", {
          className: "space-y-3 mb-3",
          children: M.map(_0x19bf9d => _0x355b8a(_0x19bf9d))
        }), _0x533149 && _0x7e145.length > 0 && _0x4d0dbd.jsx("div", {
          className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden mb-6",
          children: _0x4d0dbd.jsxs("div", {
            className: "px-4 py-4",
            children: [_0x4d0dbd.jsx(_0x1c442f, {
              className: "text-xs text-text-tertiary mb-2 block",
              children: "Redirect URI"
            }), _0x4d0dbd.jsxs(_0x2fd49f, {
              value: _0x432e17,
              onValueChange: _0x2e839d,
              children: [_0x4d0dbd.jsx(_0x21e0df, {
                className: "bg-surface-overlay/50 border-border-default",
                children: _0x4d0dbd.jsx(_0x46cfa1, {
                  placeholder: _0x4b0e38("developer.oauth2Tab.selectRedirectUri")
                })
              }), _0x4d0dbd.jsx(_0x52fa23, {
                children: _0x7e145.map(_0x47102a => _0x4d0dbd.jsx(_0x4a08e9, {
                  value: _0x47102a,
                  children: _0x4d0dbd.jsx("span", {
                    className: "font-mono text-xs",
                    children: _0x47102a
                  })
                }, _0x47102a))
              })]
            })]
          })
        })]
      }), _0x1e045b.length > 0 && _0x4d0dbd.jsxs("div", {
        className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden",
        children: [_0x4d0dbd.jsxs("div", {
          className: "px-4 py-3 border-b border-border-default flex items-center justify-between",
          children: [_0x4d0dbd.jsx("div", {
            className: "text-xs text-text-tertiary",
            children: _0x4b0e38("developer.oauth2Tab.generatedUrl")
          }), _0x4d0dbd.jsxs(_0x481987, {
            variant: "ghost",
            size: "sm",
            onClick: () => _0x25b7cb(_0x1e7a8a, "oauth2Url"),
            className: "h-7 gap-1.5 text-xs",
            children: [_0x1350ff === "oauth2Url" ? _0x4d0dbd.jsx(_0x14f2fd, {
              className: "size-3 text-green-400"
            }) : _0x4d0dbd.jsx(_0x128903, {
              icon: "solar:copy-bold-duotone",
              className: "size-3"
            }), _0x4b0e38("developer.oauth2Tab.copy")]
          })]
        }), _0x4d0dbd.jsxs("div", {
          className: "px-4 py-4",
          children: [_0x4d0dbd.jsx("div", {
            className: "p-3 rounded-lg bg-surface-overlay/30 border border-border-default",
            children: _0x4d0dbd.jsx("code", {
              className: "text-xs text-text-secondary break-all",
              children: _0x1e7a8a
            })
          }), _0x4d0dbd.jsx("div", {
            className: "mt-3 flex flex-wrap gap-1.5",
            children: _0x1e045b.map(_0x5af2e1 => _0x4d0dbd.jsx("span", {
              className: "px-2 py-0.5 rounded bg-accent-subtle border border-accent-primary/30 text-[10px] font-mono text-accent-primary-text",
              children: _0x5af2e1
            }, _0x5af2e1))
          })]
        })]
      })]
    }), _0x4d0dbd.jsx(_0x3aa20a, {
      hasChanges: _0x378619,
      onSave: async () => {
        if (_0x3cd531?.id) {
          _0x14b746(true);
          try {
            const _0x166f63 = await _0x254de5(_0x3cd531.id, {
              redirect_uris: _0x7e145
            });
            _0x1c0738(_0x166f63.settings);
          } catch {} finally {
            _0x14b746(false);
          }
        }
      },
      onReset: () => {
        if (_0x53283b) {
          _0x1b37c6(_0x53283b.redirect_uris);
        }
      },
      isSaving: _0x2ebf5
    }), _0x4d0dbd.jsx(_0x2cdfa3, {
      open: _0x330e12,
      onOpenChange: _0x59e382,
      onConfirm: async () => {
        if (_0x3cd531?.id) {
          _0x6e348e(true);
          try {
            const _0x30ad2e = await _0xf80668(_0x3cd531.id);
            _0x429d7f(_0x30ad2e.client_secret);
            _0x6be499(true);
            _0x59e382(false);
          } catch {} finally {
            _0x6e348e(false);
          }
        }
      },
      isLoading: _0x234c54,
      variant: "danger",
      icon: _0x4d0dbd.jsx(_0x128903, {
        icon: "solar:key-bold-duotone",
        className: "size-5 text-red-400"
      }),
      title: _0x4b0e38("developer.oauth2Tab.resetSecretTitle"),
      description: _0x4b0e38("developer.oauth2Tab.resetSecretDesc"),
      confirmText: _0x4b0e38(_0x234c54 ? "developer.oauth2Tab.resetting" : "developer.oauth2Tab.resetConfirm"),
      cancelText: _0x4b0e38("developer.oauth2Tab.resetSecretCancel")
    })]
  });
}
export { O as default };