import { r as _0x596415, d as _0x581456, b as _0x2e98d9, j as _0xb14ff0, I as _0x3b2340, X as _0x1a0d76, s as _0x1a13de } from "./index-cQfEKR1W.js";
import { A as _0x423ac3 } from "./arrow-right-DvlsXLCB.js";
const l = [{
  titleKey: "developer.docsSearch.items.introduction",
  href: "/dev/docs",
  categoryKey: "developer.docsSearch.categories.gettingStarted"
}, {
  titleKey: "developer.docsSearch.items.quickstart",
  href: "/dev/docs/quickstart",
  categoryKey: "developer.docsSearch.categories.gettingStarted"
}, {
  titleKey: "developer.docsSearch.items.authentication",
  href: "/dev/docs/authentication",
  categoryKey: "developer.docsSearch.categories.gettingStarted"
}, {
  titleKey: "developer.docsSearch.items.client",
  href: "/dev/docs/js/client",
  categoryKey: "developer.docsSearch.categories.jsBasic"
}, {
  titleKey: "developer.docsSearch.items.events",
  href: "/dev/docs/js/events",
  categoryKey: "developer.docsSearch.categories.jsBasic"
}, {
  titleKey: "developer.docsSearch.items.structures",
  href: "/dev/docs/js/structures",
  categoryKey: "developer.docsSearch.categories.jsBasic"
}, {
  titleKey: "developer.docsSearch.items.interactions",
  href: "/dev/docs/js/interactions",
  categoryKey: "developer.docsSearch.categories.jsInteractions"
}, {
  titleKey: "developer.docsSearch.items.builders",
  href: "/dev/docs/js/builders",
  categoryKey: "developer.docsSearch.categories.jsInteractions"
}, {
  titleKey: "developer.docsSearch.items.restApi",
  href: "/dev/docs/js/rest-api",
  categoryKey: "developer.docsSearch.categories.jsApiVoice"
}, {
  titleKey: "developer.docsSearch.items.voice",
  href: "/dev/docs/js/voice",
  categoryKey: "developer.docsSearch.categories.jsApiVoice"
}, {
  titleKey: "developer.docsSearch.items.permissions",
  href: "/dev/docs/js/permissions",
  categoryKey: "developer.docsSearch.categories.jsAdvanced"
}, {
  titleKey: "developer.docsSearch.items.collectors",
  href: "/dev/docs/js/collectors",
  categoryKey: "developer.docsSearch.categories.jsAdvanced"
}, {
  titleKey: "developer.docsSearch.items.sharding",
  href: "/dev/docs/js/sharding",
  categoryKey: "developer.docsSearch.categories.jsAdvanced"
}, {
  titleKey: "developer.docsSearch.items.enums",
  href: "/dev/docs/js/enums",
  categoryKey: "developer.docsSearch.categories.jsAdvanced"
}, {
  titleKey: "developer.docsSearch.items.formatting",
  href: "/dev/docs/js/formatting",
  categoryKey: "developer.docsSearch.categories.jsAdvanced"
}, {
  titleKey: "developer.docsSearch.items.oauth2Flow",
  href: "/dev/docs/oauth2/flow",
  categoryKey: "developer.docsSearch.categories.oauth2"
}, {
  titleKey: "developer.docsSearch.items.scopes",
  href: "/dev/docs/oauth2/scopes",
  categoryKey: "developer.docsSearch.categories.oauth2"
}, {
  titleKey: "developer.docsSearch.items.webhookManagement",
  href: "/dev/docs/webhooks/management",
  categoryKey: "developer.docsSearch.categories.webhooks"
}, {
  titleKey: "developer.docsSearch.items.webhookExecute",
  href: "/dev/docs/webhooks/execute",
  categoryKey: "developer.docsSearch.categories.webhooks"
}];
function i({
  isOpen: _0x3e6843,
  onClose: _0x235bcc
}) {
  const [_0x3cd10e, _0x1cb1c7] = _0x596415.useState("");
  const [_0x591aee, _0x4a1254] = _0x596415.useState(0);
  const _0x536bde = _0x596415.useRef(null);
  const _0x562ab2 = _0x581456();
  const {
    t: _0xe732a4
  } = _0x2e98d9();
  const _0xa94c7b = l.map(_0x50cab0 => ({
    ..._0x50cab0,
    title: _0xe732a4(_0x50cab0.titleKey),
    category: _0xe732a4(_0x50cab0.categoryKey)
  }));
  const _0x45d6e5 = _0x3cd10e.trim() ? _0xa94c7b.filter(_0x4f1a3a => _0x4f1a3a.title.toLowerCase().includes(_0x3cd10e.toLowerCase()) || _0x4f1a3a.category.toLowerCase().includes(_0x3cd10e.toLowerCase())) : _0xa94c7b.slice(0, 6);
  _0x596415.useEffect(() => {
    if (_0x3e6843) {
      _0x1cb1c7("");
      _0x4a1254(0);
      setTimeout(() => _0x536bde.current?.focus(), 50);
    }
  }, [_0x3e6843]);
  _0x596415.useEffect(() => {
    if (!_0x3e6843) {
      return;
    }
    const _0x1f085d = _0x330c3f => {
      if (_0x330c3f.key === "Escape") {
        _0x330c3f.preventDefault();
        _0x235bcc();
      }
    };
    document.addEventListener("keydown", _0x1f085d);
    return () => document.removeEventListener("keydown", _0x1f085d);
  }, [_0x3e6843, _0x235bcc]);
  const _0x369e1d = _0x596415.useCallback(_0x166f02 => {
    switch (_0x166f02.key) {
      case "ArrowDown":
        _0x166f02.preventDefault();
        _0x4a1254(_0xf1551 => _0xf1551 < _0x45d6e5.length - 1 ? _0xf1551 + 1 : 0);
        break;
      case "ArrowUp":
        _0x166f02.preventDefault();
        _0x4a1254(_0xe2886 => _0xe2886 > 0 ? _0xe2886 - 1 : _0x45d6e5.length - 1);
        break;
      case "Enter":
        _0x166f02.preventDefault();
        if (_0x45d6e5[_0x591aee]) {
          _0x562ab2(_0x45d6e5[_0x591aee].href);
          _0x235bcc();
        }
        break;
      case "Escape":
        _0x166f02.preventDefault();
        _0x235bcc();
    }
  }, [_0x45d6e5, _0x591aee, _0x562ab2, _0x235bcc]);
  _0x596415.useEffect(() => {
    _0x4a1254(0);
  }, [_0x3cd10e]);
  if (_0x3e6843) {
    return _0xb14ff0.jsxs(_0xb14ff0.Fragment, {
      children: [_0xb14ff0.jsx("div", {
        className: "fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm",
        onClick: _0x235bcc
      }), _0xb14ff0.jsx("div", {
        className: "fixed inset-0 z-[101] flex items-start justify-center pt-[15vh] px-4",
        onClick: _0x235bcc,
        children: _0xb14ff0.jsxs("div", {
          className: "w-full max-w-xl bg-surface-raised border border-border-default rounded-2xl shadow-2xl overflow-hidden",
          onClick: _0x1b06a5 => _0x1b06a5.stopPropagation(),
          children: [_0xb14ff0.jsxs("div", {
            className: "flex items-center gap-3 px-4 py-3 border-b border-border-default",
            children: [_0xb14ff0.jsx(_0x3b2340, {
              icon: "solar:magnifer-bold-duotone",
              className: "size-5 text-text-muted shrink-0"
            }), _0xb14ff0.jsx("input", {
              ref: _0x536bde,
              type: "text",
              value: _0x3cd10e,
              onChange: _0x3412f9 => _0x1cb1c7(_0x3412f9.target.value),
              onKeyDown: _0x369e1d,
              placeholder: _0xe732a4("developer.docsSearch.placeholder"),
              className: "flex-1 bg-transparent text-text-primary placeholder-text-muted text-base outline-none",
              autoComplete: "off",
              spellCheck: false
            }), _0x3cd10e && _0xb14ff0.jsx("button", {
              onClick: () => _0x1cb1c7(""),
              className: "p-1 rounded-md hover:bg-surface-overlay text-text-muted hover:text-text-secondary transition-colors",
              children: _0xb14ff0.jsx(_0x1a0d76, {
                className: "size-4"
              })
            }), _0xb14ff0.jsx("kbd", {
              className: "hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] rounded border border-border-strong bg-surface-overlay text-text-tertiary",
              children: "ESC"
            })]
          }), _0xb14ff0.jsx("div", {
            className: "max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-surface-overlay scrollbar-track-transparent",
            children: _0x45d6e5.length > 0 ? _0xb14ff0.jsxs("div", {
              className: "p-2",
              children: [!_0x3cd10e && _0xb14ff0.jsx("div", {
                className: "px-3 py-2 text-xs font-medium text-text-muted uppercase tracking-wider",
                children: _0xe732a4("developer.docsSearch.quickAccess")
              }), _0x45d6e5.map((_0x626e, _0x3fd83e) => _0xb14ff0.jsxs("button", {
                onClick: () => {
                  _0x562ab2(_0x626e.href);
                  _0x235bcc();
                },
                onMouseEnter: () => _0x4a1254(_0x3fd83e),
                className: _0x1a13de("w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-150", _0x591aee === _0x3fd83e ? "bg-emerald-500/10" : "hover:bg-surface-overlay/50"),
                children: [_0xb14ff0.jsx("span", {
                  className: _0x1a13de("flex size-8 shrink-0 items-center justify-center rounded-lg transition-colors", _0x591aee === _0x3fd83e ? "bg-emerald-500/15" : "bg-surface-overlay/70"),
                  children: _0xb14ff0.jsx(_0x3b2340, {
                    icon: "solar:file-text-bold-duotone",
                    className: _0x1a13de("size-4 transition-colors", _0x591aee === _0x3fd83e ? "text-emerald-400" : "text-text-muted")
                  })
                }), _0xb14ff0.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [_0xb14ff0.jsx("div", {
                    className: _0x1a13de("text-sm font-medium truncate transition-colors", _0x591aee === _0x3fd83e ? "text-emerald-400" : "text-text-secondary"),
                    children: _0x626e.title
                  }), _0xb14ff0.jsx("div", {
                    className: "text-xs text-text-muted truncate",
                    children: _0x626e.category
                  })]
                }), _0xb14ff0.jsx(_0x423ac3, {
                  className: _0x1a13de("size-4 shrink-0 transition-all duration-150", _0x591aee === _0x3fd83e ? "text-emerald-400 opacity-100 translate-x-0" : "text-text-muted opacity-0 -translate-x-2")
                })]
              }, _0x626e.href))]
            }) : _0xb14ff0.jsxs("div", {
              className: "px-4 py-8 text-center",
              children: [_0xb14ff0.jsx(_0x3b2340, {
                icon: "solar:magnifer-bold-duotone",
                className: "size-10 text-surface-inset mx-auto mb-3"
              }), _0xb14ff0.jsx("p", {
                className: "text-sm text-text-muted",
                children: _0xe732a4("developer.docsSearch.noResults")
              }), _0xb14ff0.jsx("p", {
                className: "text-xs text-text-muted mt-1",
                children: _0xe732a4("developer.docsSearch.noResultsHint")
              })]
            })
          }), _0xb14ff0.jsxs("div", {
            className: "flex items-center justify-between px-4 py-2.5 border-t border-border-default bg-surface-raised/50",
            children: [_0xb14ff0.jsxs("div", {
              className: "flex items-center gap-4 text-xs text-text-muted",
              children: [_0xb14ff0.jsxs("span", {
                className: "flex items-center gap-1",
                children: [_0xb14ff0.jsx("kbd", {
                  className: "px-1.5 py-0.5 rounded border border-border-strong bg-surface-overlay text-text-tertiary",
                  children: "↑"
                }), _0xb14ff0.jsx("kbd", {
                  className: "px-1.5 py-0.5 rounded border border-border-strong bg-surface-overlay text-text-tertiary",
                  children: "↓"
                }), _0xb14ff0.jsx("span", {
                  className: "ml-1",
                  children: _0xe732a4("developer.docsSearch.navigate")
                })]
              }), _0xb14ff0.jsxs("span", {
                className: "flex items-center gap-1",
                children: [_0xb14ff0.jsx("kbd", {
                  className: "px-1.5 py-0.5 rounded border border-border-strong bg-surface-overlay text-text-tertiary",
                  children: "↵"
                }), _0xb14ff0.jsx("span", {
                  className: "ml-1",
                  children: _0xe732a4("developer.docsSearch.select")
                })]
              })]
            }), _0xb14ff0.jsx("div", {
              className: "text-xs text-text-muted",
              children: _0xe732a4("developer.docsSearch.resultCount", {
                count: _0x45d6e5.length
              })
            })]
          })]
        })
      })]
    });
  } else {
    return null;
  }
}
export { i as default };