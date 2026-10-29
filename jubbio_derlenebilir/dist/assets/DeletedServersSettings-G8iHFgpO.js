import { R as _0x5c7158, b as _0x23a51e, r as _0x2cc0cd, fo as _0x1db52b, P as _0x5562d3, fp as _0x537051, a_ as _0x3ca74a, j as _0x436477, B as _0x124217, I as _0x35d975, X as _0x3ea835 } from "./index-cQfEKR1W.js";
import { I as _0x4dd711 } from "./input-AMyERYwJ.js";
import { P as _0x3e3900, a as _0x41bae4, b as _0x5f3633 } from "./tr-D975n4_R.js";
const v = ({
  className: _0x28f601
}) => _0x436477.jsx(_0x35d975, {
  icon: "solar:refresh-bold-duotone",
  className: _0x28f601
});
const j = ({
  className: _0x3ba498
}) => _0x436477.jsx(_0x35d975, {
  icon: "solar:clock-circle-bold-duotone",
  className: _0x3ba498
});
const N = ({
  className: _0x506d6b
}) => _0x436477.jsx(_0x35d975, {
  icon: "solar:users-group-rounded-bold-duotone",
  className: _0x506d6b
});
const p = ({
  className: _0x31d05b
}) => _0x436477.jsx(_0x35d975, {
  icon: "solar:danger-circle-bold-duotone",
  className: _0x31d05b
});
const b = ({
  className: _0x2cebf0
}) => _0x436477.jsx(_0x35d975, {
  icon: "solar:magnifer-bold-duotone",
  className: _0x2cebf0
});
const g = ({
  className: _0x4572d4
}) => _0x436477.jsx(_0x35d975, {
  icon: "solar:trash-bin-trash-bold-duotone",
  className: _0x4572d4
});
const f = _0x2cc0cd.memo(({
  daysRemaining: _0x18169a
}) => {
  const _0xaf687e = Math.max(0, Math.min(100, _0x18169a / 30 * 100));
  const _0x39f36e = _0x18169a <= 7;
  const _0x3aeceb = _0x18169a <= 3;
  return _0x436477.jsx("div", {
    className: "mt-2",
    children: _0x436477.jsx("div", {
      className: "h-1.5 rounded-full bg-surface-overlay overflow-hidden",
      children: _0x436477.jsx("div", {
        className: "h-full rounded-full transition-all duration-500 " + (_0x3aeceb ? "bg-red-500" : _0x39f36e ? "bg-amber-500" : "bg-accent-primary/60"),
        style: {
          width: _0xaf687e + "%"
        }
      })
    })
  });
});
f.displayName = "ExpiryBar";
const y = _0x2cc0cd.memo(({
  server: _0x216a6d,
  isRestoring: _0x21bb81,
  isAnyRestoring: _0x4f9017,
  openPopoverId: _0x2fb506,
  onPopoverChange: _0x84d527,
  onRestore: _0x474414,
  getInitials: _0x584aad,
  formatDate: _0xd30590
}) => {
  const {
    t: _0x285e51
  } = _0x23a51e("serverSettings");
  const _0x569539 = _0x216a6d.days_remaining;
  const _0x4919b0 = _0x569539 <= 7;
  const _0x28faf6 = _0x569539 <= 3;
  return _0x436477.jsx("div", {
    className: "p-4 rounded-xl border border-border-default bg-surface-raised/40 hover:bg-surface-raised/60 transition-colors",
    children: _0x436477.jsxs("div", {
      className: "flex items-start gap-4",
      children: [_0x436477.jsx("div", {
        className: "relative shrink-0",
        children: _0x216a6d.avatar_url ? _0x436477.jsx("img", {
          src: _0x216a6d.avatar_url,
          alt: _0x216a6d.name,
          className: "size-12 rounded-xl object-cover"
        }) : _0x436477.jsx("div", {
          className: "size-12 rounded-xl bg-surface-inset flex items-center justify-center",
          children: _0x436477.jsx("span", {
            className: "text-sm font-bold text-text-secondary",
            children: _0x584aad(_0x216a6d.name)
          })
        })
      }), _0x436477.jsxs("div", {
        className: "flex-1 min-w-0",
        children: [_0x436477.jsx("h4", {
          className: "text-[15px] font-semibold text-text-secondary truncate",
          children: _0x216a6d.name
        }), _0x436477.jsxs("div", {
          className: "flex items-center gap-3 mt-1",
          children: [_0x436477.jsxs("span", {
            className: "flex items-center gap-1 text-[13px] text-text-tertiary",
            children: [_0x436477.jsx(N, {
              className: "size-3"
            }), _0x216a6d.member_count, " ", _0x285e51("deletedServers.member")]
          }), _0x436477.jsx("span", {
            className: "text-[13px] text-text-muted",
            children: "•"
          }), _0x436477.jsxs("span", {
            className: "text-[13px] text-text-tertiary",
            children: [_0x285e51("deletedServers.deletedAt"), ": ", _0xd30590(_0x216a6d.deleted_at)]
          })]
        }), _0x436477.jsxs("div", {
          className: "flex items-center gap-1 mt-1 text-[13px] " + (_0x28faf6 ? "text-red-400" : _0x4919b0 ? "text-amber-400" : "text-text-muted"),
          children: [_0x436477.jsx(j, {
            className: "size-3"
          }), _0x285e51("deletedServers.daysUntilDeletion", {
            days: _0x569539
          })]
        }), _0x436477.jsx(f, {
          daysRemaining: _0x569539
        })]
      }), _0x436477.jsx("div", {
        className: "shrink-0",
        children: _0x436477.jsxs(_0x3e3900, {
          open: _0x2fb506 === _0x216a6d.id,
          onOpenChange: _0x4b97fd => _0x84d527(_0x4b97fd ? _0x216a6d.id : null),
          children: [_0x436477.jsx(_0x41bae4, {
            asChild: true,
            children: _0x436477.jsxs(_0x124217, {
              variant: "outline",
              size: "sm",
              disabled: _0x21bb81 || _0x4f9017 && !_0x21bb81,
              className: "gap-1.5",
              children: [_0x436477.jsx(v, {
                className: "size-4 " + (_0x21bb81 ? "animate-spin" : "")
              }), _0x285e51(_0x21bb81 ? "deletedServers.loading" : "deletedServers.restore")]
            })
          }), _0x436477.jsx(_0x5f3633, {
            className: "w-72 p-4 bg-surface-raised border-border-default",
            align: "end",
            children: _0x436477.jsxs("div", {
              className: "space-y-3",
              children: [_0x436477.jsxs("div", {
                className: "flex items-center gap-2",
                children: [_0x436477.jsx(v, {
                  className: "size-5 text-accent-primary-text"
                }), _0x436477.jsx("h4", {
                  className: "font-semibold text-text-secondary",
                  children: _0x285e51("deletedServers.restoreServer")
                })]
              }), _0x436477.jsxs("p", {
                className: "text-sm text-text-tertiary",
                children: [_0x436477.jsx("span", {
                  className: "font-medium text-text-secondary",
                  children: _0x216a6d.name
                }), " ", _0x285e51("deletedServers.restoreConfirm")]
              }), _0x436477.jsxs("div", {
                className: "flex gap-2 pt-1",
                children: [_0x436477.jsx(_0x124217, {
                  variant: "outline",
                  size: "sm",
                  className: "flex-1",
                  onClick: () => _0x84d527(null),
                  children: _0x285e51("deletedServers.cancel")
                }), _0x436477.jsx(_0x124217, {
                  size: "sm",
                  className: "flex-1 bg-accent-primary hover:bg-accent-primary/90 text-text-on-accent",
                  onClick: () => _0x474414(_0x216a6d),
                  children: _0x285e51("deletedServers.restore")
                })]
              })]
            })
          })]
        })
      })]
    })
  });
});
y.displayName = "ServerRow";
const S = _0x5c7158.memo(() => {
  const {
    t: _0x2b12cc
  } = _0x23a51e("serverSettings");
  const [_0x5b7a4c, _0x40fc9e] = _0x2cc0cd.useState([]);
  const [_0x17d00c, _0x5120ca] = _0x2cc0cd.useState(true);
  const [_0x120345, _0x4bc96f] = _0x2cc0cd.useState(null);
  const [_0x54d505, _0x488660] = _0x2cc0cd.useState(null);
  const [_0x5c430f, _0x190025] = _0x2cc0cd.useState(null);
  const [_0x4dbd2e, _0x136fb8] = _0x2cc0cd.useState("");
  const [_0x20db4b, _0x295f52] = _0x2cc0cd.useState(false);
  const _0x17cf0d = _0x2cc0cd.useCallback(async () => {
    try {
      _0x5120ca(true);
      _0x4bc96f(null);
      const _0x2c1a75 = await _0x1db52b();
      _0x40fc9e(Array.isArray(_0x2c1a75) ? _0x2c1a75 : []);
    } catch (_0x83dede) {
      const _0x582128 = _0x83dede?.response?.data?.error || _0x83dede?.response?.data?.message || _0x2b12cc("deletedServers.loadError");
      _0x4bc96f(_0x582128);
      _0x40fc9e([]);
    } finally {
      _0x5120ca(false);
    }
  }, []);
  _0x2cc0cd.useEffect(() => {
    _0x17cf0d();
  }, [_0x17cf0d]);
  const _0x5d548e = _0x2cc0cd.useMemo(() => [..._0x5b7a4c].sort((_0x4e72ae, _0x556989) => _0x4e72ae.days_remaining - _0x556989.days_remaining), [_0x5b7a4c]);
  const _0x2aa289 = _0x2cc0cd.useMemo(() => {
    if (!_0x4dbd2e.trim()) {
      return _0x5d548e;
    }
    const _0x6cd23e = _0x4dbd2e.toLowerCase();
    return _0x5d548e.filter(_0x186335 => _0x186335.name.toLowerCase().includes(_0x6cd23e));
  }, [_0x5d548e, _0x4dbd2e]);
  const _0x2b7a1d = _0x2cc0cd.useCallback(_0x5a4c27 => _0x5a4c27.split(" ").map(_0x2e76b4 => _0x2e76b4[0]).filter(Boolean).slice(0, 2).join("").toUpperCase(), []);
  const _0x39b5fe = _0x2cc0cd.useCallback(_0xc29624 => new Date(_0xc29624).toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric"
  }), []);
  const _0x979f79 = _0x2cc0cd.useCallback(async _0x5608b0 => {
    _0x488660(_0x5608b0.id);
    _0x190025(null);
    try {
      _0x5562d3.loading(_0x2b12cc("deletedServers.restoring"), {
        id: "restore-" + _0x5608b0.id
      });
      const _0xbe5d9e = await _0x537051(_0x5608b0.id);
      const {
        addServerIfNotExists: _0x451bdf
      } = _0x3ca74a.getState();
      _0x451bdf({
        id: _0x5608b0.id,
        name: _0x5608b0.name,
        avatar_url: _0x5608b0.avatar_url,
        banner_url: null
      });
      _0x40fc9e(_0x3e90f2 => _0x3e90f2.filter(_0x3a4c10 => _0x3a4c10.id !== _0x5608b0.id));
      _0x5562d3.success(_0xbe5d9e.message || _0x2b12cc("deletedServers.restoreSuccess", {
        name: _0x5608b0.name
      }), {
        id: "restore-" + _0x5608b0.id
      });
    } catch (_0x304aee) {
      const _0x312395 = _0x304aee?.response?.data?.error || _0x304aee?.response?.data?.message || _0x2b12cc("deletedServers.restoreError");
      _0x5562d3.error(_0x312395, {
        id: "restore-" + _0x5608b0.id
      });
    } finally {
      _0x488660(null);
    }
  }, []);
  if (_0x17d00c) {
    return null;
  } else if (_0x120345) {
    return _0x436477.jsxs("div", {
      className: "flex flex-col items-center justify-center py-16 text-center",
      children: [_0x436477.jsx("div", {
        className: "size-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4",
        children: _0x436477.jsx(p, {
          className: "size-8 text-red-400"
        })
      }), _0x436477.jsx("h3", {
        className: "text-lg font-semibold text-text-secondary mb-2",
        children: _0x2b12cc("deletedServers.errorOccurred")
      }), _0x436477.jsx("p", {
        className: "text-sm text-text-tertiary max-w-md mb-4",
        children: _0x120345
      }), _0x436477.jsx(_0x124217, {
        variant: "outline",
        onClick: _0x17cf0d,
        children: _0x2b12cc("deletedServers.retry")
      })]
    });
  } else if (_0x5b7a4c.length === 0) {
    return _0x436477.jsx("div", {
      className: "space-y-8",
      children: _0x436477.jsxs("section", {
        children: [_0x436477.jsxs("div", {
          className: "mb-4",
          children: [_0x436477.jsxs("div", {
            className: "flex items-center gap-2",
            children: [_0x436477.jsx(g, {
              className: "size-4 text-text-tertiary"
            }), _0x436477.jsx("div", {
              className: "text-base leading-snug font-semibold text-text-secondary",
              children: _0x2b12cc("deletedServers.title")
            })]
          }), _0x436477.jsx("p", {
            className: "text-sm leading-snug text-text-muted mt-0.5",
            children: _0x2b12cc("deletedServers.emptyDesc")
          })]
        }), _0x436477.jsxs("div", {
          className: "p-12 text-center",
          children: [_0x436477.jsx("div", {
            className: "flex items-center justify-center mb-4",
            children: _0x436477.jsx(_0x35d975, {
              icon: "solar:ghost-bold-duotone",
              className: "w-16 h-16 text-text-muted"
            })
          }), _0x436477.jsx("h3", {
            className: "text-lg font-semibold text-text-secondary mb-2",
            children: _0x2b12cc("deletedServers.noDeletedServers")
          }), _0x436477.jsx("p", {
            className: "text-text-tertiary text-sm max-w-md mx-auto",
            children: _0x2b12cc("deletedServers.noDeletedServersDesc")
          })]
        })]
      })
    });
  } else {
    return _0x436477.jsxs("div", {
      className: "space-y-6",
      children: [_0x436477.jsxs("div", {
        className: "flex items-center justify-between",
        children: [_0x436477.jsxs("div", {
          children: [_0x436477.jsxs("div", {
            className: "flex items-center gap-2",
            children: [_0x436477.jsx(g, {
              className: "size-4 text-text-tertiary"
            }), _0x436477.jsx("div", {
              className: "text-base leading-snug font-semibold text-text-secondary",
              children: _0x2b12cc("deletedServers.title")
            })]
          }), _0x436477.jsx("p", {
            className: "text-sm leading-snug text-text-muted mt-0.5",
            children: _0x2b12cc("deletedServers.restorableCount", {
              count: _0x5b7a4c.length
            })
          })]
        }), _0x20db4b ? _0x436477.jsxs("div", {
          className: "relative flex items-center gap-1.5",
          children: [_0x436477.jsxs("div", {
            className: "relative",
            children: [_0x436477.jsx(b, {
              className: "absolute left-2.5 top-1/2 -translate-y-1/2 text-text-tertiary w-3.5 h-3.5"
            }), _0x436477.jsx(_0x4dd711, {
              placeholder: _0x2b12cc("deletedServers.searchServer"),
              value: _0x4dbd2e,
              onChange: _0x46a4e2 => _0x136fb8(_0x46a4e2.target.value),
              onKeyDown: _0x423165 => {
                if (_0x423165.key === "Escape") {
                  _0x295f52(false);
                  _0x136fb8("");
                }
              },
              className: "pl-8 h-8 w-52 bg-surface-overlay/50 border-border-strong text-xs",
              autoFocus: true
            })]
          }), _0x436477.jsx(_0x124217, {
            variant: "ghost",
            size: "sm",
            onClick: () => {
              _0x295f52(false);
              _0x136fb8("");
            },
            className: "h-8 w-8 p-0 text-text-tertiary hover:text-text-secondary",
            children: _0x436477.jsx(_0x3ea835, {
              className: "w-3.5 h-3.5"
            })
          })]
        }) : _0x436477.jsx(_0x124217, {
          variant: "ghost",
          size: "sm",
          onClick: () => _0x295f52(true),
          className: "h-8 w-8 p-0 text-text-tertiary hover:text-text-secondary hover:bg-interactive-hover",
          children: _0x436477.jsx(b, {
            className: "w-3.5 h-3.5"
          })
        })]
      }), _0x4dbd2e.trim() && _0x436477.jsxs("div", {
        className: "flex items-center gap-2",
        children: [_0x436477.jsxs("span", {
          className: "inline-flex items-center gap-1.5 text-xs bg-surface-overlay/60 border border-border-default rounded-full px-3 py-1 text-text-secondary",
          children: [_0x436477.jsx(b, {
            className: "w-3 h-3 text-text-tertiary"
          }), _0x436477.jsx("span", {
            className: "font-medium",
            children: _0x2aa289.length
          }), " ", _0x2b12cc("deletedServers.resultsFound")]
        }), _0x436477.jsx("button", {
          onClick: () => {
            _0x136fb8("");
            _0x295f52(false);
          },
          className: "text-xs text-text-tertiary hover:text-text-secondary hover:bg-interactive-hover/60 rounded-md px-2.5 py-1 transition-colors cursor-pointer",
          children: _0x2b12cc("deletedServers.showAll")
        })]
      }), _0x436477.jsx("div", {
        className: "p-4 rounded-xl bg-blue-500/5 border border-blue-500/20",
        children: _0x436477.jsxs("div", {
          className: "flex items-start gap-3",
          children: [_0x436477.jsx("div", {
            className: "size-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5",
            children: _0x436477.jsx(j, {
              className: "size-3 text-blue-400"
            })
          }), _0x436477.jsxs("div", {
            className: "flex-1 text-xs text-text-secondary",
            children: [_0x436477.jsx("p", {
              className: "font-medium text-blue-400 mb-1",
              children: _0x2b12cc("deletedServers.restoreTimeTitle")
            }), _0x436477.jsx("p", {
              children: _0x2b12cc("deletedServers.restoreTimeDesc")
            })]
          })]
        })
      }), _0x2aa289.length === 0 ? _0x436477.jsxs("div", {
        className: "p-12 text-center",
        children: [_0x436477.jsx("div", {
          className: "flex items-center justify-center mb-4",
          children: _0x436477.jsx(_0x35d975, {
            icon: "solar:ghost-bold-duotone",
            className: "w-16 h-16 text-text-muted"
          })
        }), _0x436477.jsx("h3", {
          className: "text-lg font-semibold text-text-secondary mb-2",
          children: _0x2b12cc("deletedServers.noResults")
        }), _0x436477.jsx("p", {
          className: "text-text-tertiary text-sm max-w-md mx-auto mb-4",
          children: _0x2b12cc("deletedServers.noResultsServer", {
            query: _0x4dbd2e
          })
        }), _0x436477.jsx("button", {
          onClick: () => {
            _0x136fb8("");
            _0x295f52(false);
          },
          className: "h-8 px-4 text-xs text-text-secondary bg-surface-overlay/60 hover:bg-interactive-active border border-border-default rounded-md transition-colors cursor-pointer",
          children: _0x2b12cc("deletedServers.showAllCapital")
        })]
      }) : _0x436477.jsx("div", {
        className: "space-y-3",
        children: _0x2aa289.map(_0x2231cd => _0x436477.jsx(y, {
          server: _0x2231cd,
          isRestoring: _0x54d505 === _0x2231cd.id,
          isAnyRestoring: _0x54d505 !== null,
          openPopoverId: _0x5c430f,
          onPopoverChange: _0x190025,
          onRestore: _0x979f79,
          getInitials: _0x2b7a1d,
          formatDate: _0x39b5fe
        }, _0x2231cd.id))
      })]
    });
  }
});
export { S as default };