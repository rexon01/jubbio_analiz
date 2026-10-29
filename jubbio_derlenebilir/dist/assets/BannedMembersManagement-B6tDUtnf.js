import { b as _0x393ddb, r as _0x457db2, f7 as _0x4770c1, ea as _0x5686ad, P as _0x1c10b0, j as _0x1f1832, aN as _0x494d65, B as _0x1138d5, X as _0x27e29a, I as _0x2e68b7, F as _0x3f0cef, f8 as _0x22de26 } from "./index-cQfEKR1W.js";
import { u as _0x3e3e41, f as _0x330dda, g, a as _0x2c6f76, c as _0x508af2, b as _0x31ec11 } from "./index-DmnqsUkn.js";
import { I as _0x2bc3e2 } from "./input-AMyERYwJ.js";
import { T as _0x28d4ee, a as _0x36d3c7, b as _0x591496, c as _0xf618c3, d as _0x347445, e as _0x5d5d0d } from "./ComparisonTable-DUfwtDVZ.js";
import { C } from "./ConfirmDialog-B4gIndKy.js";
import { P as _0x16e600, a as _0x55cd53, b as _0x322ecc } from "./tr-D975n4_R.js";
import { C as _0x23f4b1 } from "./chevron-left-CoNyL-61.js";
import "./subscription-Cl5JAGbQ.js";
import "./card-Bk6R3tFg.js";
import "./gift-Co-azAyt.js";
import "./alert-dialog-BZuoGg7O.js";
import "./index-yuEHo9bu.js";
import "./index-Oyyh46KT.js";
import "./loader-circle-CTtxa1g9.js";
const R = ({
  className: _0x58498e
}) => _0x1f1832.jsx(_0x2e68b7, {
  icon: "solar:forbidden-bold-duotone",
  className: _0x58498e
});
const D = ({
  className: _0x205603
}) => _0x1f1832.jsx(_0x2e68b7, {
  icon: "solar:magnifer-bold-duotone",
  className: _0x205603
});
const F = ({
  className: _0x2ec00a
}) => _0x1f1832.jsx(_0x2e68b7, {
  icon: "solar:shield-cross-bold-duotone",
  className: _0x2ec00a
});
const P = ({
  serverId: _0x227c5e
}) => {
  const {
    t: _0x599e0f,
    i18n: _0x57cdc2
  } = _0x393ddb();
  const [_0x276d1e, _0x92c369] = _0x457db2.useState([]);
  const [_0x3e73cc, _0x8418d] = _0x457db2.useState(true);
  const [_0x40620b, _0x23bd8d] = _0x457db2.useState(null);
  const [_0x4e2054, _0xe9683f] = _0x457db2.useState(null);
  const [_0x3be170, _0x3f060b] = _0x457db2.useState(false);
  const [_0x4b0504, _0x521747] = _0x457db2.useState(false);
  const [_0x5d6df6, _0x37de6e] = _0x457db2.useState([{
    id: "banned_at",
    desc: true
  }]);
  const [_0x5c561f, _0x43135f] = _0x457db2.useState([]);
  const [_0x1720d3, _0x2c8495] = _0x457db2.useState({});
  const [_0x173ce0, _0x17b316] = _0x457db2.useState("");
  const [_0x5954f5, _0x54bafd] = _0x457db2.useState(false);
  const [_0x3de91b, _0x1d80ba] = _0x457db2.useState(false);
  const [_0x525d20, _0x1f046d] = _0x457db2.useState("");
  const [_0x38a460, _0xc8c32b] = _0x457db2.useState("");
  const [_0x4001a2, _0x510387] = _0x457db2.useState(false);
  const [_0x486986, _0x452aec] = _0x457db2.useState({
    pageIndex: 0,
    pageSize: 25
  });
  const _0x55f567 = _0x457db2.useCallback(async () => {
    if (_0x227c5e) {
      _0x8418d(true);
      _0x23bd8d(null);
      try {
        const _0x29c9a4 = await _0x4770c1(_0x227c5e);
        _0x92c369(_0x29c9a4.banned_members || []);
      } catch (_0x21afdc) {
        const _0x3a2c81 = _0x21afdc?.response?.data?.error || _0x21afdc?.response?.data?.message || _0x599e0f("serverSettings.bans.loadError");
        _0x23bd8d(_0x3a2c81);
        console.error("API Error:", _0x21afdc);
      } finally {
        _0x8418d(false);
      }
    }
  }, [_0x227c5e]);
  _0x457db2.useEffect(() => {
    _0x55f567();
  }, [_0x55f567]);
  const _0x4d89f7 = _0x457db2.useCallback(_0x21f888 => {
    if (!_0x4b0504 || !!_0x21f888) {
      _0x3f060b(_0x21f888);
      if (!_0x21f888) {
        _0xe9683f(null);
      }
    }
  }, [_0x4b0504]);
  const _0x2bd6ef = _0x457db2.useCallback(_0x584b3a => {
    _0xe9683f(_0x584b3a);
    _0x3f060b(true);
  }, []);
  const _0x1654d7 = _0x457db2.useCallback(async () => {
    if (_0x525d20.trim()) {
      _0x510387(true);
      try {
        const _0x25a265 = _0x525d20.trim();
        const _0x1357ff = /^\d+$/.test(_0x25a265);
        await _0x5686ad(_0x227c5e, {
          ...(_0x1357ff ? {
            user_id: Number(_0x25a265)
          } : {
            username: _0x25a265
          }),
          reason: _0x38a460.trim() || undefined
        });
        _0x1c10b0.success(_0x599e0f("serverSettings.bans.banSuccess"));
        _0x1d80ba(false);
        _0x1f046d("");
        _0xc8c32b("");
        _0x55f567();
      } catch (_0x1454f7) {
        const _0x2ea108 = _0x1454f7?.response?.data?.message || _0x1454f7?.message || _0x599e0f("serverSettings.bans.banFailed");
        _0x1c10b0.error(_0x2ea108);
      } finally {
        _0x510387(false);
      }
    }
  }, [_0x227c5e, _0x525d20, _0x38a460, _0x55f567, _0x599e0f]);
  const _0x19c192 = _0x457db2.useMemo(() => [{
    accessorKey: "username",
    header: _0x599e0f("serverSettings.bans.bannedMemberHeader"),
    cell: ({
      row: _0x2647d0
    }) => {
      const _0x83d8c2 = _0x2647d0.original;
      const _0x426a8c = _0x83d8c2.user?.display_name || _0x83d8c2.user?.username || _0x599e0f("serverSettings.bans.userLabel", {
        id: _0x83d8c2.user_id
      });
      return _0x1f1832.jsxs("div", {
        className: "flex items-center gap-3",
        children: [_0x1f1832.jsx("div", {
          className: "w-8 h-8 rounded-full bg-surface-inset flex items-center justify-center text-sm font-semibold text-text-secondary shrink-0",
          children: _0x426a8c.charAt(0).toUpperCase()
        }), _0x1f1832.jsxs("div", {
          className: "flex flex-col min-w-0",
          children: [_0x1f1832.jsx("div", {
            className: "flex items-center gap-2",
            children: _0x1f1832.jsx("span", {
              className: "font-medium text-text-secondary truncate max-w-[180px]",
              children: _0x426a8c
            })
          }), _0x1f1832.jsxs("span", {
            className: "text-xs text-text-tertiary truncate max-w-[180px]",
            children: ["@", _0x83d8c2.user?.username || "unknown"]
          })]
        })]
      });
    },
    size: 250
  }, {
    accessorKey: "banned_reason",
    header: _0x599e0f("serverSettings.bans.banReasonHeader"),
    cell: ({
      row: _0x1cb234
    }) => {
      const _0x1002af = _0x1cb234.original.banned_reason || _0x599e0f("serverSettings.bans.noReason");
      return _0x1f1832.jsx(_0x494d65, {
        label: _0x1002af,
        children: _0x1f1832.jsx("div", {
          className: "max-w-xs truncate text-sm text-text-secondary cursor-default",
          children: _0x1002af
        })
      });
    },
    size: 200
  }, {
    accessorKey: "banned_by_user",
    header: _0x599e0f("serverSettings.bans.bannedByHeader"),
    cell: ({
      row: _0xa84f52
    }) => {
      const _0x3267d4 = _0xa84f52.original.banned_by_user;
      const _0x91c480 = _0x3267d4?.display_name || _0x3267d4?.username || _0x599e0f("serverSettings.bans.unknownUser");
      return _0x1f1832.jsxs("div", {
        className: "flex flex-col",
        children: [_0x1f1832.jsx("span", {
          className: "text-sm text-text-secondary",
          children: _0x91c480
        }), _0x1f1832.jsxs("span", {
          className: "text-xs text-text-tertiary",
          children: ["@", _0x3267d4?.username || "unknown"]
        })]
      });
    },
    size: 200
  }, {
    accessorKey: "banned_at",
    header: _0x599e0f("serverSettings.bans.banDateHeader"),
    cell: ({
      row: _0x11b795
    }) => {
      const _0x1e2dcf = _0x11b795.original.banned_at;
      if (!_0x1e2dcf) {
        return _0x1f1832.jsx("span", {
          className: "text-text-tertiary",
          children: "-"
        });
      }
      const _0x336b6f = new Date(_0x1e2dcf);
      const _0x1c2730 = new Date().getTime() - _0x336b6f.getTime();
      const _0x44daba = Math.floor(_0x1c2730 / 86400000);
      const _0x3d9d19 = _0x336b6f.toLocaleDateString(_0x57cdc2.language, {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
      const _0x189972 = _0x336b6f.toLocaleTimeString(_0x57cdc2.language, {
        hour: "2-digit",
        minute: "2-digit"
      });
      let _0x1fa417 = "";
      if (_0x44daba === 0) {
        _0x1fa417 = _0x599e0f("serverSettings.bans.today");
      } else if (_0x44daba === 1) {
        _0x1fa417 = _0x599e0f("serverSettings.bans.yesterday");
      } else if (_0x44daba < 7) {
        _0x1fa417 = _0x599e0f("serverSettings.bans.daysAgo", {
          count: _0x44daba
        });
      } else if (_0x44daba < 30) {
        const _0x226f01 = Math.floor(_0x44daba / 7);
        _0x1fa417 = _0x599e0f("serverSettings.bans.weeksAgo", {
          count: _0x226f01
        });
      } else {
        _0x1fa417 = _0x599e0f("serverSettings.bans.monthsAgo", {
          count: Math.floor(_0x44daba / 30)
        });
      }
      const _0x370f65 = _0x336b6f.toLocaleDateString(_0x57cdc2.language, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
      return _0x1f1832.jsx(_0x494d65, {
        label: _0x370f65,
        children: _0x1f1832.jsxs("div", {
          className: "flex flex-col gap-1 cursor-default",
          children: [_0x1f1832.jsx("span", {
            className: "text-sm text-text-secondary font-medium",
            children: _0x3d9d19
          }), _0x1f1832.jsxs("span", {
            className: "text-xs text-text-tertiary",
            children: [_0x189972, " • ", _0x1fa417]
          })]
        })
      });
    },
    size: 180
  }, {
    id: "actions",
    header: "",
    cell: ({
      row: _0x5e0d10
    }) => {
      const _0x1359e2 = _0x5e0d10.original;
      return _0x1f1832.jsx(_0x1138d5, {
        variant: "outline",
        size: "sm",
        className: "text-green-400 bg-green-500/10 border-green-500/20 hover:bg-green-500/20 hover:border-green-500/30 cursor-pointer",
        onClick: () => _0x2bd6ef(_0x1359e2),
        children: _0x599e0f("serverSettings.bans.unban")
      });
    },
    enableSorting: false,
    enableHiding: false,
    size: 150
  }], [_0x2bd6ef]);
  const _0x119ffa = _0x3e3e41({
    data: _0x276d1e,
    columns: _0x19c192,
    getCoreRowModel: _0x31ec11(),
    getPaginationRowModel: _0x508af2(),
    getSortedRowModel: _0x2c6f76(),
    getFilteredRowModel: g(),
    onSortingChange: _0x37de6e,
    onColumnFiltersChange: _0x43135f,
    onRowSelectionChange: _0x2c8495,
    onGlobalFilterChange: _0x17b316,
    onPaginationChange: _0x452aec,
    state: {
      sorting: _0x5d6df6,
      columnFilters: _0x5c561f,
      rowSelection: _0x1720d3,
      globalFilter: _0x173ce0,
      pagination: _0x486986
    },
    globalFilterFn: "includesString"
  });
  if (_0x3e73cc) {
    return _0x1f1832.jsx("div", {
      className: "space-y-8",
      children: _0x1f1832.jsxs("section", {
        children: [_0x1f1832.jsxs("div", {
          className: "mb-2",
          children: [_0x1f1832.jsxs("div", {
            className: "flex items-center gap-2",
            children: [_0x1f1832.jsx(F, {
              className: "size-4 text-text-tertiary"
            }), _0x1f1832.jsx("div", {
              className: "text-base leading-snug font-semibold text-text-secondary",
              children: _0x599e0f("serverSettings.bans.title")
            })]
          }), _0x1f1832.jsx("p", {
            className: "text-sm leading-snug text-text-muted mt-0.5",
            children: _0x599e0f("serverSettings.bans.description")
          })]
        }), _0x1f1832.jsx("div", {
          className: "rounded-2xl border border-border-default bg-surface-raised/40 p-8 hover:bg-interactive-muted transition-colors",
          children: _0x1f1832.jsx("div", {
            className: "flex items-center justify-center",
            children: _0x1f1832.jsx("div", {
              className: "size-8 border-[3px] border-border-default border-t-accent-primary rounded-full animate-spin"
            })
          })
        })]
      })
    });
  } else if (_0x40620b) {
    return _0x1f1832.jsx("div", {
      className: "space-y-8",
      children: _0x1f1832.jsxs("section", {
        children: [_0x1f1832.jsxs("div", {
          className: "mb-2",
          children: [_0x1f1832.jsxs("div", {
            className: "flex items-center gap-2",
            children: [_0x1f1832.jsx(F, {
              className: "size-4 text-text-tertiary"
            }), _0x1f1832.jsx("div", {
              className: "text-base leading-snug font-semibold text-text-secondary",
              children: _0x599e0f("serverSettings.bans.title")
            })]
          }), _0x1f1832.jsx("p", {
            className: "text-sm leading-snug text-text-muted mt-0.5",
            children: _0x599e0f("serverSettings.bans.description")
          })]
        }), _0x1f1832.jsx("div", {
          className: "rounded-2xl border border-red-800/70 bg-red-900/20 p-8 hover:bg-red-900/25 transition-colors",
          children: _0x1f1832.jsxs("div", {
            className: "text-center",
            children: [_0x1f1832.jsx("p", {
              className: "text-red-400",
              children: _0x40620b
            }), _0x1f1832.jsx(_0x1138d5, {
              variant: "outline",
              className: "mt-4",
              onClick: _0x55f567,
              children: _0x599e0f("serverSettings.bans.retryButton")
            })]
          })
        })]
      })
    });
  } else {
    return _0x1f1832.jsxs("div", {
      className: "space-y-3",
      children: [_0x1f1832.jsxs("section", {
        children: [_0x1f1832.jsxs("div", {
          className: "flex items-center justify-between gap-4 mb-2",
          children: [_0x1f1832.jsxs("div", {
            children: [_0x1f1832.jsxs("div", {
              className: "flex items-center gap-2",
              children: [_0x1f1832.jsx(F, {
                className: "size-4 text-text-tertiary"
              }), _0x1f1832.jsx("div", {
                className: "text-base leading-snug font-semibold text-text-secondary",
                children: _0x599e0f("serverSettings.bans.title")
              })]
            }), _0x1f1832.jsxs("p", {
              className: "text-sm leading-snug text-text-muted mt-0.5",
              children: [_0x599e0f("serverSettings.bans.description"), ".", _0x276d1e.length > 0 && " • " + _0x599e0f("serverSettings.bans.bannedCount", {
                count: _0x276d1e.length
              })]
            })]
          }), _0x1f1832.jsxs("div", {
            className: "flex items-center gap-2",
            children: [_0x1f1832.jsxs(_0x16e600, {
              open: _0x3de91b,
              onOpenChange: _0xc93897 => {
                _0x1d80ba(_0xc93897);
                if (!_0xc93897) {
                  _0x1f046d("");
                  _0xc8c32b("");
                }
              },
              children: [_0x1f1832.jsx(_0x55cd53, {
                asChild: true,
                children: _0x1f1832.jsxs(_0x1138d5, {
                  size: "sm",
                  className: "h-8 text-xs bg-accent-primary text-black hover:bg-accent-primary/90",
                  children: [_0x1f1832.jsx(R, {
                    className: "w-3.5 h-3.5 mr-1.5"
                  }), _0x599e0f("serverSettings.bans.banMember")]
                })
              }), _0x1f1832.jsx(_0x322ecc, {
                className: "w-72 p-0 bg-surface-overlay/95 backdrop-blur-xl border-border-subtle",
                side: "bottom",
                align: "end",
                sideOffset: 8,
                children: _0x1f1832.jsxs("div", {
                  className: "p-4 space-y-3",
                  children: [_0x1f1832.jsxs("div", {
                    children: [_0x1f1832.jsx("p", {
                      className: "text-sm font-semibold text-text-primary mb-1",
                      children: _0x599e0f("serverSettings.bans.banMemberTitle")
                    }), _0x1f1832.jsx("p", {
                      className: "text-[11px] text-text-muted leading-relaxed",
                      children: _0x599e0f("serverSettings.bans.banMemberDesc")
                    })]
                  }), _0x1f1832.jsxs("div", {
                    className: "space-y-2",
                    children: [_0x1f1832.jsx(_0x2bc3e2, {
                      value: _0x525d20,
                      onChange: _0x438376 => _0x1f046d(_0x438376.target.value),
                      placeholder: _0x599e0f("serverSettings.bans.banInputPlaceholder"),
                      className: "h-8 text-xs bg-surface-inset/40 border-border-default",
                      onKeyDown: _0x2b0148 => {
                        if (_0x2b0148.key === "Enter" && _0x525d20.trim()) {
                          _0x1654d7();
                        }
                      },
                      autoFocus: true
                    }), _0x1f1832.jsx(_0x2bc3e2, {
                      value: _0x38a460,
                      onChange: _0x55e399 => _0xc8c32b(_0x55e399.target.value),
                      placeholder: _0x599e0f("serverSettings.bans.banReasonPlaceholder"),
                      className: "h-8 text-xs bg-surface-inset/40 border-border-default",
                      onKeyDown: _0x485b65 => {
                        if (_0x485b65.key === "Enter" && _0x525d20.trim()) {
                          _0x1654d7();
                        }
                      }
                    })]
                  }), _0x1f1832.jsx(_0x1138d5, {
                    onClick: _0x1654d7,
                    disabled: !_0x525d20.trim() || _0x4001a2,
                    className: "w-full h-8 text-xs bg-red-500/90 hover:bg-red-500 text-white disabled:opacity-50",
                    children: _0x4001a2 ? _0x1f1832.jsxs("span", {
                      className: "flex items-center gap-1.5",
                      children: [_0x1f1832.jsx("div", {
                        className: "size-3 border-2 border-white/40 border-t-white rounded-full animate-spin"
                      }), _0x599e0f("serverSettings.bans.banning")]
                    }) : _0x1f1832.jsxs("span", {
                      className: "flex items-center gap-1.5",
                      children: [_0x1f1832.jsx(R, {
                        className: "size-3.5"
                      }), _0x599e0f("serverSettings.bans.confirmBan")]
                    })
                  })]
                })
              })]
            }), _0x276d1e.length > 0 && (_0x5954f5 ? _0x1f1832.jsxs("div", {
              className: "relative flex items-center gap-1.5",
              children: [_0x1f1832.jsxs("div", {
                className: "relative",
                children: [_0x1f1832.jsx(D, {
                  className: "absolute left-2.5 top-1/2 -translate-y-1/2 text-text-tertiary w-3.5 h-3.5"
                }), _0x1f1832.jsx(_0x2bc3e2, {
                  placeholder: _0x599e0f("serverSettings.bans.searchPlaceholder"),
                  value: _0x173ce0,
                  onChange: _0x143bc4 => _0x17b316(_0x143bc4.target.value),
                  onKeyDown: _0xebb412 => {
                    if (_0xebb412.key === "Escape") {
                      _0x54bafd(false);
                      _0x17b316("");
                    }
                  },
                  className: "pl-8 h-8 w-52 bg-surface-overlay/50 border-border-strong text-xs",
                  autoFocus: true
                })]
              }), _0x1f1832.jsx(_0x1138d5, {
                variant: "ghost",
                size: "sm",
                onClick: () => {
                  _0x54bafd(false);
                  _0x17b316("");
                },
                className: "h-8 w-8 p-0 text-text-tertiary hover:text-text-secondary",
                children: _0x1f1832.jsx(_0x27e29a, {
                  className: "w-3.5 h-3.5"
                })
              })]
            }) : _0x1f1832.jsx(_0x1138d5, {
              variant: "ghost",
              size: "sm",
              onClick: () => _0x54bafd(true),
              className: "h-8 w-8 p-0 text-text-tertiary hover:text-text-secondary hover:bg-surface-overlay/50",
              children: _0x1f1832.jsx(D, {
                className: "w-3.5 h-3.5"
              })
            }))]
          })]
        }), _0x173ce0.trim() && _0x1f1832.jsxs("div", {
          className: "flex items-center gap-2 mb-3",
          children: [_0x1f1832.jsxs("span", {
            className: "inline-flex items-center gap-1.5 text-xs bg-surface-overlay/60 border border-border-default rounded-full px-3 py-1 text-text-secondary",
            children: [_0x1f1832.jsx(D, {
              className: "w-3 h-3 text-text-tertiary"
            }), _0x1f1832.jsx("span", {
              className: "font-medium",
              children: _0x119ffa.getFilteredRowModel().rows.length
            }), " ", _0x599e0f("serverSettings.bans.resultsFound")]
          }), _0x1f1832.jsx("button", {
            onClick: () => {
              _0x17b316("");
              _0x54bafd(false);
            },
            className: "text-xs text-text-tertiary hover:text-text-secondary hover:bg-surface-overlay/60 rounded-md px-2.5 py-1 transition-colors cursor-pointer",
            children: _0x599e0f("serverSettings.bans.showAll")
          })]
        })]
      }), _0x1f1832.jsxs("section", {
        children: [_0x1f1832.jsx("div", {
          className: "rounded-2xl border border-border-default bg-surface-raised/40 overflow-hidden hover:bg-interactive-muted transition-colors",
          children: _0x119ffa.getRowModel().rows?.length ? _0x1f1832.jsxs(_0x28d4ee, {
            children: [_0x1f1832.jsx(_0x36d3c7, {
              children: _0x119ffa.getHeaderGroups().map(_0x1451c9 => _0x1f1832.jsx(_0x591496, {
                className: "border-border-default",
                children: _0x1451c9.headers.map(_0x4a00d0 => _0x1f1832.jsx(_0xf618c3, {
                  className: "text-text-secondary font-semibold",
                  style: {
                    width: _0x4a00d0.getSize()
                  },
                  children: _0x4a00d0.isPlaceholder ? null : _0x330dda(_0x4a00d0.column.columnDef.header, _0x4a00d0.getContext())
                }, _0x4a00d0.id))
              }, _0x1451c9.id))
            }), _0x1f1832.jsx(_0x347445, {
              children: _0x119ffa.getRowModel().rows.map(_0x4fb4ac => _0x1f1832.jsx(_0x591496, {
                "data-state": _0x4fb4ac.getIsSelected() && "selected",
                className: "border-border-subtle transition-colors " + (_0x4fb4ac.getIsSelected() ? "bg-surface-overlay/50! hover:bg-surface-overlay/70" : "hover:bg-surface-overlay/30"),
                children: _0x4fb4ac.getVisibleCells().map(_0xa40661 => _0x1f1832.jsx(_0x5d5d0d, {
                  style: {
                    width: _0xa40661.column.getSize()
                  },
                  children: _0x330dda(_0xa40661.column.columnDef.cell, _0xa40661.getContext())
                }, _0xa40661.id))
              }, _0x4fb4ac.id))
            })]
          }) : _0x1f1832.jsxs("div", {
            className: "p-12 text-center",
            children: [_0x1f1832.jsx("div", {
              className: "flex items-center justify-center mb-4",
              children: _0x1f1832.jsx(_0x2e68b7, {
                icon: "solar:ghost-bold-duotone",
                className: "w-16 h-16 text-text-muted"
              })
            }), _0x1f1832.jsx("h3", {
              className: "text-lg font-semibold text-text-secondary mb-2",
              children: _0x173ce0.trim() ? _0x599e0f("serverSettings.bans.noSearchResult") : _0x599e0f("serverSettings.bans.noBans")
            }), _0x1f1832.jsx("p", {
              className: "text-text-tertiary text-sm max-w-md mx-auto mb-6",
              children: _0x173ce0.trim() ? _0x599e0f("serverSettings.bans.noSearchResultDesc", {
                query: _0x173ce0
              }) : _0x599e0f("serverSettings.bans.noBansDesc")
            }), _0x173ce0.trim() && _0x1f1832.jsx("button", {
              onClick: () => {
                _0x17b316("");
                _0x54bafd(false);
              },
              className: "h-8 px-4 text-xs text-text-secondary bg-surface-overlay/60 hover:bg-surface-inset/60 border border-border-default rounded-md transition-colors cursor-pointer",
              children: _0x599e0f("serverSettings.bans.showAllButton")
            })]
          })
        }), _0x276d1e.length > 0 && _0x1f1832.jsxs("div", {
          className: "flex items-center justify-between mt-4",
          children: [_0x1f1832.jsx("p", {
            className: "text-xs text-text-muted",
            children: _0x599e0f("serverSettings.bans.membersShowing", {
              count: _0x119ffa.getFilteredRowModel().rows.length
            })
          }), _0x1f1832.jsxs("div", {
            className: "flex items-center gap-2",
            children: [_0x1f1832.jsx(_0x1138d5, {
              variant: "outline",
              size: "sm",
              onClick: () => _0x119ffa.previousPage(),
              disabled: !_0x119ffa.getCanPreviousPage(),
              children: _0x1f1832.jsx(_0x23f4b1, {
                className: "w-4 h-4"
              })
            }), _0x1f1832.jsx(_0x1138d5, {
              variant: "outline",
              size: "sm",
              onClick: () => _0x119ffa.nextPage(),
              disabled: !_0x119ffa.getCanNextPage(),
              children: _0x1f1832.jsx(_0x3f0cef, {
                className: "w-4 h-4"
              })
            })]
          })]
        })]
      }), _0x4e2054 && _0x1f1832.jsx(C, {
        open: _0x3be170,
        onOpenChange: _0x4d89f7,
        onConfirm: async () => {
          if (_0x4e2054) {
            _0x521747(true);
            try {
              await _0x22de26(_0x227c5e, _0x4e2054.user_id, _0x599e0f("serverSettings.bans.unbanReason"));
              _0x55f567();
              _0x3f060b(false);
              _0xe9683f(null);
            } catch (_0x5493a6) {
              console.error("Unban Error:", _0x5493a6);
            } finally {
              _0x521747(false);
            }
          }
        },
        isLoading: _0x4b0504,
        variant: "default",
        icon: _0x1f1832.jsx(R, {
          className: "size-5 text-green-400"
        }),
        title: _0x599e0f("serverSettings.bans.unbanTitle"),
        subtitle: _0x599e0f("serverSettings.bans.unbanIrreversible"),
        description: _0x1f1832.jsxs(_0x1f1832.Fragment, {
          children: [_0x1f1832.jsx("span", {
            className: "font-semibold text-text-secondary",
            children: _0x4e2054.user?.display_name || _0x4e2054.user?.username || _0x599e0f("serverSettings.bans.userLabel", {
              id: _0x4e2054.user_id
            })
          }), " ", _0x599e0f("serverSettings.bans.unbanConfirm", {
            name: ""
          })]
        }),
        confirmText: _0x599e0f(_0x4b0504 ? "serverSettings.bans.unbanning" : "serverSettings.bans.unban"),
        cancelText: _0x599e0f("serverSettings.bans.cancel")
      })]
    });
  }
};
export { P as default };