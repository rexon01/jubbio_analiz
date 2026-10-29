import { j as _0x342793, s as _0x20bb1e, r as _0x5b446b, F as _0x56b4e9, d as _0x2f36ce, b as _0x89b032, P as _0x554d61, B as _0x343b8a, I as _0x49ef24 } from "./index-cQfEKR1W.js";
import { u as _0x32d621 } from "./developerStore-J5Gy1Hed.js";
import { A as _0x2170be, a as _0x5d66f6, b as _0x44ff16 } from "./avatar-C-4BWxT3.js";
import { C as _0x4772b2 } from "./chevron-left-CoNyL-61.js";
import { D as _0x32b536, a as _0xc41ab, b as _0x1ec495, c as _0x2775b3, d as _0x20a753 } from "./dialog-BMMpM7PR.js";
import { L as _0x4fd2dc } from "./loader-circle-CTtxa1g9.js";
import { P as _0x87ec38 } from "./plus-B7c2Px8R.js";
import "./developer-DCtAQT29.js";
import "./index-yuEHo9bu.js";
const N = ({
  className: _0x15feaf,
  ..._0x46623f
}) => _0x342793.jsx("nav", {
  role: "navigation",
  "aria-label": "pagination",
  className: _0x20bb1e("mx-auto flex w-full justify-center", _0x15feaf),
  ..._0x46623f
});
N.displayName = "Pagination";
const y = _0x5b446b.forwardRef(({
  className: _0x6f311b,
  ..._0x355ff1
}, _0x4538c5) => _0x342793.jsx("ul", {
  ref: _0x4538c5,
  className: _0x20bb1e("flex flex-row items-center gap-1", _0x6f311b),
  ..._0x355ff1
}));
y.displayName = "PaginationContent";
const w = _0x5b446b.forwardRef(({
  className: _0x2a0997,
  ..._0x23ac3c
}, _0xb9c813) => _0x342793.jsx("li", {
  ref: _0xb9c813,
  className: _0x20bb1e("", _0x2a0997),
  ..._0x23ac3c
}));
w.displayName = "PaginationItem";
const k = ({
  className: _0x2110c7,
  isActive: _0x3a5815,
  size: _0x110319 = "icon",
  ..._0x1c5c9c
}) => _0x342793.jsx("button", {
  type: "button",
  "aria-current": _0x3a5815 ? "page" : undefined,
  className: _0x20bb1e("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", "disabled:pointer-events-none disabled:opacity-50", _0x3a5815 ? "border border-input bg-background shadow-sm" : "hover:bg-accent hover:text-accent-foreground", {
    default: "h-9 px-4 py-2",
    sm: "h-8 px-3",
    lg: "h-10 px-6",
    icon: "size-9"
  }[_0x110319], _0x2110c7),
  ..._0x1c5c9c
});
k.displayName = "PaginationLink";
const C = ({
  className: _0x15335a,
  ..._0x38f022
}) => _0x342793.jsx(k, {
  "aria-label": "Go to previous page",
  size: "default",
  className: _0x20bb1e("gap-1 pl-2.5", _0x15335a),
  ..._0x38f022,
  children: _0x342793.jsx(_0x4772b2, {
    className: "h-4 w-4"
  })
});
C.displayName = "PaginationPrevious";
const z = ({
  className: _0x47d542,
  ..._0x7cba94
}) => _0x342793.jsx(k, {
  "aria-label": "Go to next page",
  size: "default",
  className: _0x20bb1e("gap-1 pr-2.5", _0x47d542),
  ..._0x7cba94,
  children: _0x342793.jsx(_0x56b4e9, {
    className: "h-4 w-4"
  })
});
function _({
  open: _0x21d4d4,
  onOpenChange: _0x309b36
}) {
  const _0x1c13cd = _0x2f36ce();
  const {
    createApplication: _0x4ce871
  } = _0x32d621();
  const {
    t: _0x3d632c
  } = _0x89b032();
  const [_0x2bc8a6, _0x1a7c38] = _0x5b446b.useState("");
  const [_0x3b6451, _0x5a7318] = _0x5b446b.useState(false);
  const [_0x264529, _0x414638] = _0x5b446b.useState(false);
  const _0x3e1a0a = _0x5b446b.useCallback(async () => {
    if (_0x2bc8a6.trim()) {
      if (_0x2bc8a6.length > 32) {
        _0x554d61.error(_0x3d632c("developer.createModal.nameMaxLength"));
      } else {
        _0x5a7318(true);
        try {
          const _0x6fe6c3 = await _0x4ce871(_0x2bc8a6.trim(), _0x264529);
          _0x309b36(false);
          _0x1a7c38("");
          _0x1c13cd("/dev/applications/" + _0x6fe6c3.id + (_0x264529 ? "/gui" : ""));
        } catch {} finally {
          _0x5a7318(false);
        }
      }
    } else {
      _0x554d61.error(_0x3d632c("developer.createModal.nameRequired"));
    }
  }, [_0x2bc8a6, _0x4ce871, _0x309b36, _0x1c13cd, _0x264529]);
  const _0x97af43 = _0x5b446b.useCallback(() => {
    if (!_0x3b6451) {
      _0x309b36(false);
      _0x1a7c38("");
    }
  }, [_0x3b6451, _0x309b36]);
  const _0x30e431 = _0x2bc8a6.trim().length > 0 && !_0x3b6451;
  return _0x342793.jsx(_0x32b536, {
    open: _0x21d4d4,
    onOpenChange: _0x97af43,
    children: _0x342793.jsx(_0xc41ab, {
      className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md overflow-hidden",
      children: _0x342793.jsx("div", {
        className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40",
        children: _0x342793.jsxs("div", {
          className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col",
          children: [_0x342793.jsxs(_0x1ec495, {
            className: "px-4 py-4 border-b border-border-subtle shrink-0",
            children: [_0x342793.jsx(_0x2775b3, {
              className: "text-lg font-semibold text-text-primary",
              children: _0x3d632c("developer.createModal.title")
            }), _0x342793.jsx(_0x20a753, {
              className: "text-text-muted text-sm",
              children: _0x3d632c("developer.createModal.description")
            })]
          }), _0x342793.jsxs("div", {
            className: "px-4 py-5 space-y-4",
            children: [_0x342793.jsxs("label", {
              className: "flex items-center gap-2 text-sm text-text-secondary",
              children: [_0x342793.jsx("input", {
                type: "checkbox",
                checked: _0x264529,
                onChange: _0x35c1ef => _0x414638(_0x35c1ef.target.checked)
              }), "GUI uygulaması olarak başlat"]
            }), _0x264529 && _0x342793.jsx("p", {
              className: "text-xs text-text-muted",
              children: "Bot hesabı ve bot token’ı olmadan başlayın. Bot token’ı oluşturursanız bot yeteneği daha sonra eklenir."
            }), _0x342793.jsxs("div", {
              className: "w-full min-w-0",
              children: [_0x342793.jsx("label", {
                htmlFor: "app-name",
                className: "text-xs text-text-muted mb-1.5 block",
                children: _0x3d632c("developer.createModal.nameLabel")
              }), _0x342793.jsx("input", {
                id: "app-name",
                type: "text",
                value: _0x2bc8a6,
                onChange: _0xb72da8 => {
                  const _0x2d66ff = _0xb72da8.target.value;
                  if (new TextEncoder().encode(_0x2d66ff).length <= 128) {
                    _0x1a7c38(_0x2d66ff);
                  }
                },
                onKeyDown: _0xe465ab => {
                  if (_0xe465ab.key === "Enter" && _0x2bc8a6.trim() && !_0x3b6451) {
                    _0x3e1a0a();
                  }
                },
                placeholder: _0x3d632c("developer.createModal.namePlaceholder"),
                maxLength: 32,
                autoComplete: "off",
                autoFocus: true,
                className: "w-full h-11 px-4 rounded-xl bg-surface-inset/40 border border-border-subtle text-text-primary text-sm placeholder:text-text-muted outline-none focus:border-accent-primary/50 transition-colors"
              }), _0x342793.jsx("p", {
                className: "mt-1.5 text-[11px] text-text-muted",
                children: _0x3d632c("developer.createModal.charCount", {
                  count: _0x2bc8a6.length
                })
              })]
            })]
          }), _0x342793.jsx("div", {
            className: "px-4 py-3 border-t border-border-subtle",
            children: _0x342793.jsxs("div", {
              className: "flex items-center gap-2",
              children: [_0x342793.jsx("button", {
                type: "button",
                onClick: _0x97af43,
                disabled: _0x3b6451,
                className: "flex-1 h-10 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                children: _0x3d632c("developer.createModal.cancel")
              }), _0x342793.jsx("button", {
                type: "button",
                onClick: _0x3e1a0a,
                disabled: !_0x30e431,
                className: "flex-1 h-10 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer",
                children: _0x3b6451 ? _0x342793.jsxs(_0x342793.Fragment, {
                  children: [_0x342793.jsx(_0x4fd2dc, {
                    className: "size-4 animate-spin"
                  }), _0x3d632c("developer.createModal.creating")]
                }) : _0x3d632c("developer.createModal.create")
              })]
            })
          })]
        })
      })
    })
  });
}
function A() {
  const _0x9f7bbc = _0x2f36ce();
  const {
    applications: _0x474fbe,
    pagination: _0x4b211c,
    isLoading: _0x362fd0,
    error: _0x53a521,
    fetchApplications: _0x8fe3e0
  } = _0x32d621();
  const [_0x2f9529, _0x378b0e] = _0x5b446b.useState(false);
  const {
    t: _0x50f733,
    i18n: _0x2dc51b
  } = _0x89b032();
  _0x5b446b.useEffect(() => {
    _0x8fe3e0();
  }, [_0x8fe3e0]);
  const _0x496b98 = _0x1abc94 => {
    _0x8fe3e0(_0x1abc94);
  };
  const _0x1eaae6 = _0x17c0c2 => {
    const _0x474742 = _0x2dc51b.language;
    return new Date(_0x17c0c2).toLocaleDateString(_0x474742, {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  if (_0x362fd0) {
    return _0x342793.jsx("div", {
      className: "flex items-center justify-center py-20",
      children: _0x342793.jsx("div", {
        className: "size-8 animate-spin rounded-full border-2 border-border-default border-t-primary"
      })
    });
  } else if (_0x53a521) {
    return _0x342793.jsxs("div", {
      className: "flex flex-col items-center justify-center py-20 text-center",
      children: [_0x342793.jsx("p", {
        className: "text-red-400 mb-4",
        children: _0x53a521
      }), _0x342793.jsx(_0x343b8a, {
        variant: "outline",
        onClick: () => _0x8fe3e0(),
        children: _0x50f733("developer.apps.retry")
      })]
    });
  } else {
    return _0x342793.jsxs("div", {
      className: "space-y-6 max-w-5xl mx-auto",
      children: [_0x342793.jsxs("div", {
        className: "relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent-primary/20 via-accent-primary/10 to-surface-raised/50 border border-accent-border p-6",
        children: [_0x342793.jsx("div", {
          className: "absolute top-0 right-0 w-64 h-64 bg-accent-subtle rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
        }), _0x342793.jsx("div", {
          className: "absolute bottom-0 left-0 w-48 h-48 bg-accent-subtle rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"
        }), _0x342793.jsxs("div", {
          className: "relative flex items-center gap-4",
          children: [_0x342793.jsx("div", {
            className: "flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent-subtle border border-accent-primary/30",
            children: _0x342793.jsx(_0x49ef24, {
              icon: "solar:stars-bold-duotone",
              className: "size-6 text-accent-primary-text"
            })
          }), _0x342793.jsxs("div", {
            children: [_0x342793.jsx("h1", {
              className: "text-2xl font-bold bg-gradient-to-r from-accent-primary via-[#c8ff5e] to-accent-primary bg-clip-text text-transparent",
              children: "Jubbio Developer Portal"
            }), _0x342793.jsx("p", {
              className: "text-sm text-text-tertiary mt-0.5",
              children: _0x50f733("developer.apps.portalSubtitle")
            })]
          })]
        })]
      }), _0x342793.jsxs("div", {
        className: "flex items-center justify-between",
        children: [_0x342793.jsxs("div", {
          children: [_0x342793.jsx("h2", {
            className: "text-xl font-semibold text-text-primary",
            children: _0x50f733("developer.apps.title")
          }), _0x342793.jsx("p", {
            className: "mt-0.5 text-sm text-text-muted",
            children: _0x4b211c ? _0x50f733("developer.apps.subtitle", {
              count: _0x4b211c.total
            }) : _0x50f733("developer.apps.manageHint")
          })]
        }), _0x342793.jsxs(_0x343b8a, {
          onClick: () => _0x378b0e(true),
          children: [_0x342793.jsx(_0x87ec38, {
            className: "size-4"
          }), _0x50f733("developer.apps.newApp")]
        })]
      }), _0x474fbe.length === 0 ? _0x342793.jsx("div", {
        className: "rounded-2xl bg-surface-raised/50 border border-border-default py-16",
        children: _0x342793.jsxs("div", {
          className: "flex flex-col items-center justify-center text-center px-4",
          children: [_0x342793.jsx("div", {
            className: "rounded-2xl bg-surface-overlay/50 p-5",
            children: _0x342793.jsx(_0x49ef24, {
              icon: "solar:bot-bold-duotone",
              className: "size-10 text-text-muted"
            })
          }), _0x342793.jsx("h3", {
            className: "mt-5 text-lg font-medium text-text-secondary",
            children: _0x50f733("developer.apps.noApps")
          }), _0x342793.jsx("p", {
            className: "mt-2 text-sm text-text-muted max-w-sm",
            children: _0x50f733("developer.apps.noAppsDesc")
          }), _0x342793.jsxs(_0x343b8a, {
            className: "mt-6",
            onClick: () => _0x378b0e(true),
            children: [_0x342793.jsx(_0x87ec38, {
              className: "size-4"
            }), _0x50f733("developer.apps.createApp")]
          })]
        })
      }) : _0x342793.jsxs("div", {
        className: "space-y-3",
        children: [_0x342793.jsx("div", {
          className: "rounded-2xl bg-surface-raised/50 border border-border-default overflow-hidden divide-y divide-border-default",
          children: _0x474fbe.map(_0x1777c6 => _0x342793.jsx(M, {
            app: _0x1777c6,
            onClick: () => _0x9f7bbc("/dev/applications/" + _0x1777c6.id),
            formatDate: _0x1eaae6
          }, _0x1777c6.id))
        }), _0x4b211c && _0x4b211c.total_pages > 1 && _0x342793.jsx("div", {
          className: "pt-4",
          children: _0x342793.jsx(N, {
            children: _0x342793.jsxs(y, {
              children: [_0x342793.jsx(w, {
                children: _0x342793.jsx(C, {
                  onClick: () => _0x496b98(_0x4b211c.current_page - 1),
                  disabled: !_0x4b211c.has_prev,
                  className: _0x4b211c.has_prev ? "cursor-pointer" : "opacity-50 cursor-not-allowed"
                })
              }), Array.from({
                length: _0x4b211c.total_pages
              }, (_0x4a1c5a, _0x5c445b) => _0x5c445b + 1).map(_0x21987c => _0x342793.jsx(w, {
                children: _0x342793.jsx(k, {
                  onClick: () => _0x496b98(_0x21987c),
                  isActive: _0x21987c === _0x4b211c.current_page,
                  className: "cursor-pointer",
                  children: _0x21987c
                })
              }, _0x21987c)), _0x342793.jsx(w, {
                children: _0x342793.jsx(z, {
                  onClick: () => _0x496b98(_0x4b211c.current_page + 1),
                  disabled: !_0x4b211c.has_next,
                  className: _0x4b211c.has_next ? "cursor-pointer" : "opacity-50 cursor-not-allowed"
                })
              })]
            })
          })
        })]
      }), _0x342793.jsx(_, {
        open: _0x2f9529,
        onOpenChange: _0x378b0e
      })]
    });
  }
}
function M({
  app: _0x5acb04,
  onClick: _0x4cc500,
  formatDate: _0x3016a0
}) {
  return _0x342793.jsxs("button", {
    onClick: _0x4cc500,
    className: "w-full flex items-center gap-4 px-4 py-4 text-left cursor-pointer transition-all duration-200 hover:bg-surface-overlay/30 active:bg-surface-overlay/50 group",
    children: [_0x342793.jsx(_0x2170be, {
      className: "size-12 rounded-xl shrink-0",
      children: _0x5acb04.avatar_url ? _0x342793.jsx(_0x5d66f6, {
        src: _0x5acb04.avatar_url,
        alt: _0x5acb04.name
      }) : _0x342793.jsx(_0x44ff16, {
        className: "rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 text-text-secondary text-lg font-semibold",
        children: _0x5acb04.name.charAt(0).toUpperCase()
      })
    }), _0x342793.jsxs("div", {
      className: "flex-1 min-w-0",
      children: [_0x342793.jsx("h3", {
        className: "font-semibold text-text-primary truncate group-hover:text-text-primary transition-colors",
        children: _0x5acb04.name
      }), _0x342793.jsxs("div", {
        className: "flex items-center gap-1.5 mt-1 text-xs text-text-muted",
        children: [_0x342793.jsx(_0x49ef24, {
          icon: "solar:calendar-bold-duotone",
          className: "size-3"
        }), _0x342793.jsx("span", {
          children: _0x3016a0(_0x5acb04.created_at)
        })]
      })]
    }), _0x342793.jsx(_0x56b4e9, {
      className: "size-5 text-text-muted group-hover:text-text-tertiary group-hover:translate-x-0.5 transition-all duration-200"
    })]
  });
}
z.displayName = "PaginationNext";
export { A as default };