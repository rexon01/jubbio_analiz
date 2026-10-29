import { b as _0x3be7d6, r, eF as _0x4e15fa, dw as _0x2572c3, j as _0xf28a1, I as _0xf54eb1 } from "./index-cQfEKR1W.js";
import { I as _0x190aa1 } from "./input-AMyERYwJ.js";
import { L as _0x3dc99b } from "./label-ODyS97Ju.js";
import { B as _0x53a40b } from "./ComparisonTable-DUfwtDVZ.js";
import { i as _0x2f19d3 } from "./index-Bk4sqYoK.js";
const d = ({
  guildId: _0x125580,
  isOpen: _0xe8e441,
  searchQuery: _0x120ddb,
  onSearchQueryChange: _0x4ae3b8,
  selectedMemberIds: _0x34f87a,
  onSelectedMembersChange: _0x1ef555,
  disabledMemberIds: _0x4a1f66 = [],
  excludeRoleId: _0x400751,
  includeRoleId: _0x51ce1f,
  showBadge: _0x1ab278 = true,
  showLabel: _0x422809 = true,
  filterOwner: _0x5645be = false,
  ownerUserId: _0x16963f,
  height: _0x2ff4fc = "320px"
}) => {
  const {
    t: _0x526eb5
  } = _0x3be7d6();
  const [_0x10627f, _0x3fe497] = r.useState([]);
  const [_0x4c7dfd, _0x2e57ec] = r.useState(false);
  const [_0x55f531, _0x1ecfb8] = r.useState(false);
  const [_0x4cc889, _0x18261d] = r.useState(null);
  const [_0x3df781, _0x4f7196] = r.useState(false);
  const _0x1a2f37 = r.useRef(-1);
  const _0x2bfb6f = r.useRef(null);
  const [_0x4b1b49, _0x5de4fe] = r.useState([]);
  const [_0x24863f, _0x2eeaa2] = r.useState(false);
  const [_0x34b2e3, _0x246d3b] = r.useState("");
  const [_0x147d0d, _0x16be76] = r.useState(false);
  const _0x3ccf7c = r.useCallback(async _0x1c6e8f => {
    if (!_0x125580 || !_0x1c6e8f.trim()) {
      _0x5de4fe([]);
      _0x246d3b("");
      return;
    }
    _0x2eeaa2(true);
    try {
      const _0x37c23a = {};
      if (_0x400751) {
        _0x37c23a.exclude = _0x400751;
      }
      if (_0x51ce1f) {
        _0x37c23a.include = _0x51ce1f;
      }
      const _0x44fcaa = await _0x4e15fa(_0x125580, _0x1c6e8f.trim(), _0x37c23a);
      _0x5de4fe(_0x44fcaa);
      _0x246d3b(_0x1c6e8f.trim());
    } catch (_0x2ce103) {
      console.error("[MemberSelector] Error searching members:", _0x2ce103);
      _0x5de4fe([]);
    } finally {
      _0x2eeaa2(false);
    }
  }, [_0x125580, _0x400751, _0x51ce1f]);
  const _0x335ba4 = r.useCallback(() => {
    const _0x4ce03e = _0x120ddb.trim();
    if (_0x4ce03e && _0x4ce03e.length >= 3) {
      _0x3ccf7c(_0x4ce03e);
    }
  }, [_0x120ddb, _0x3ccf7c]);
  const _0x241e91 = r.useCallback(async () => {
    if (_0x125580) {
      _0x2e57ec(true);
      try {
        const _0xd75207 = {
          flat: true,
          force: true
        };
        if (_0x400751) {
          _0xd75207.exclude = _0x400751;
        }
        if (_0x51ce1f) {
          _0xd75207.include = _0x51ce1f;
        }
        const _0x18dd66 = await _0x2572c3(_0x125580, _0xd75207);
        _0x3fe497(_0x18dd66?.members || []);
        const _0x4a67ca = _0x18dd66?.page_info;
        if (_0x4a67ca) {
          _0x1ecfb8(Boolean(_0x4a67ca.has_next));
          _0x18261d(_0x4a67ca.has_next && _0x4a67ca.next_cursor || null);
        }
      } catch (_0x2f547a) {
        console.error("[MemberSelector] Error loading members:", _0x2f547a);
      } finally {
        _0x2e57ec(false);
      }
    }
  }, [_0x125580, _0x400751, _0x51ce1f]);
  const _0x10b675 = r.useCallback(async () => {
    if (_0x125580 && _0xe8e441 && _0x55f531 && !_0x3df781 && _0x4cc889) {
      _0x4f7196(true);
      try {
        const _0x537993 = {
          cursor: _0x4cc889,
          flat: true,
          force: true
        };
        if (_0x400751) {
          _0x537993.exclude = _0x400751;
        }
        if (_0x51ce1f) {
          _0x537993.include = _0x51ce1f;
        }
        const _0x3bbf7d = await _0x2572c3(_0x125580, _0x537993);
        const _0x536800 = _0x3bbf7d?.members || [];
        if (_0x536800.length > 0) {
          _0x3fe497(_0x12b365 => {
            const _0x42f9ff = new Set(_0x12b365.map(_0x789b67 => String(_0x789b67.user_id ?? _0x789b67.id)));
            const _0x371c54 = _0x536800.filter(_0x583ce => !_0x42f9ff.has(String(_0x583ce.user_id ?? _0x583ce.id)));
            return [..._0x12b365, ..._0x371c54];
          });
        }
        const _0x5d0724 = _0x3bbf7d?.page_info;
        _0x1ecfb8(Boolean(_0x5d0724?.has_next));
        _0x18261d(_0x5d0724?.has_next && _0x5d0724.next_cursor || null);
      } catch (_0x53ee9e) {} finally {
        _0x4f7196(false);
      }
    }
  }, [_0x125580, _0xe8e441, _0x55f531, _0x4cc889, _0x3df781, _0x400751, _0x51ce1f]);
  r.useEffect(() => {
    if (_0xe8e441 && _0x125580) {
      _0x3fe497([]);
      _0x1ecfb8(false);
      _0x18261d(null);
      _0x5de4fe([]);
      _0x246d3b("");
      _0x1a2f37.current = -1;
      _0x241e91();
    }
  }, [_0xe8e441, _0x125580, _0x400751, _0x51ce1f]);
  r.useEffect(() => {
    if (!_0xe8e441) {
      _0x3fe497([]);
      _0x1ecfb8(false);
      _0x18261d(null);
      _0x4f7196(false);
      _0x5de4fe([]);
      _0x246d3b("");
      _0x1a2f37.current = -1;
    }
  }, [_0xe8e441]);
  r.useEffect(() => _0x120ddb.trim() ? _0x120ddb.trim().length < 3 ? (_0x5de4fe([]), _0x246d3b(""), void _0x2eeaa2(false)) : undefined : (_0x5de4fe([]), _0x246d3b(""), void _0x2eeaa2(false)), [_0x120ddb]);
  const _0x477bff = r.useMemo(() => {
    let _0x15d499 = [];
    _0x15d499 = _0x120ddb.trim() && _0x34b2e3 === _0x120ddb.trim() ? _0x4b1b49 : _0x10627f;
    if (_0x5645be && _0x16963f) {
      _0x15d499 = _0x15d499.filter(_0xfbfb7c => String(_0xfbfb7c.user_id ?? _0xfbfb7c.id) !== String(_0x16963f));
    }
    return _0x15d499.map((_0x505619, _0x599e5d) => ({
      type: "member",
      id: _0x120ddb.trim() ? "search-" + (_0x505619.user_id ?? _0x505619.id) + "-" + _0x599e5d : "member-" + (_0x505619.user_id ?? _0x505619.id),
      data: _0x505619
    }));
  }, [_0x120ddb, _0x34b2e3, _0x4b1b49, _0x10627f, _0x5645be, _0x16963f]);
  const _0x239d81 = r.useCallback(() => {
    if (!_0x2bfb6f.current || !_0xe8e441 || !_0x55f531 || _0x3df781 || _0x120ddb.trim()) {
      return;
    }
    const _0xffe4aa = _0x477bff.length;
    const _0x57f97f = _0x2bfb6f.current.findItemIndex(_0x2bfb6f.current.scrollOffset + _0x2bfb6f.current.viewportSize);
    if (_0x1a2f37.current < _0xffe4aa && _0x57f97f + 50 > _0xffe4aa) {
      _0x1a2f37.current = _0xffe4aa;
      _0x10b675();
    }
  }, [_0xe8e441, _0x55f531, _0x3df781, _0x120ddb, _0x477bff.length, _0x10b675]);
  return _0xf28a1.jsxs("div", {
    className: "space-y-3",
    children: [_0x1ab278 && _0xf28a1.jsxs("div", {
      className: "flex items-center justify-between p-2.5 rounded-lg bg-surface-overlay/30 border border-border-default",
      children: [_0xf28a1.jsxs("div", {
        className: "flex items-center gap-2",
        children: [_0xf28a1.jsx(_0xf54eb1, {
          icon: "solar:users-group-rounded-bold-duotone",
          className: "size-5 text-purple-400"
        }), _0xf28a1.jsx("span", {
          className: "text-xs font-medium text-text-secondary",
          children: _0x526eb5("serverSettings.memberSelector.members")
        })]
      }), _0xf28a1.jsx(_0x53a40b, {
        variant: "secondary",
        className: "text-xs bg-surface-inset/50 px-1.5 py-0.5",
        children: _0x120ddb.trim() ? _0x526eb5("serverSettings.memberSelector.resultCount", {
          count: _0x4b1b49.length
        }) : _0x526eb5("serverSettings.memberSelector.memberCount", {
          count: _0x10627f.length
        })
      })]
    }), _0xf28a1.jsxs("div", {
      className: "space-y-2",
      children: [_0x422809 && _0xf28a1.jsx(_0x3dc99b, {
        className: "text-xs font-medium text-text-secondary",
        children: _0x526eb5("serverSettings.memberSelector.searchLabel")
      }), _0xf28a1.jsxs("div", {
        className: "relative",
        children: [_0xf28a1.jsx(_0xf54eb1, {
          icon: "solar:magnifer-bold-duotone",
          className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary w-4 h-4"
        }), _0xf28a1.jsx(_0x190aa1, {
          value: _0x120ddb,
          onChange: _0x2c16a6 => _0x4ae3b8(_0x2c16a6.target.value),
          onKeyDown: _0x10c875 => {
            if (_0x10c875.key === "Enter") {
              _0x10c875.preventDefault();
              if (_0x120ddb.trim() && _0x120ddb.trim().length >= 3) {
                _0x335ba4();
              }
            }
          },
          onFocus: () => _0x16be76(true),
          onBlur: () => _0x16be76(false),
          placeholder: _0x526eb5("serverSettings.memberSelector.searchPlaceholder"),
          className: "pl-10 pr-20 h-10 bg-surface-overlay/50 border-border-strong",
          autoComplete: "off"
        }), _0x147d0d && _0x120ddb.trim() && _0x120ddb.trim().length >= 3 && _0xf28a1.jsx("button", {
          type: "button",
          onMouseDown: _0x43cced => {
            _0x43cced.preventDefault();
            _0x43cced.stopPropagation();
          },
          onClick: _0xc7fbe0 => {
            _0xc7fbe0.preventDefault();
            _0xc7fbe0.stopPropagation();
            if (_0x120ddb.trim() && _0x120ddb.trim().length >= 3) {
              _0x335ba4();
            }
          },
          className: "absolute right-2 top-1/2 transform -translate-y-1/2 px-1.5 py-0.5 text-[10px] rounded-md border border-border-default bg-surface-overlay/60 text-text-secondary hover:bg-interactive-active hover:border-border-default transition-colors cursor-pointer",
          children: _0xf28a1.jsx("span", {
            className: "text-xs",
            children: "Enter"
          })
        })]
      }), _0x120ddb.trim() && _0x120ddb.trim().length < 3 && _0xf28a1.jsx("div", {
        className: "text-xs text-amber-400 bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20",
        children: _0x526eb5("serverSettings.memberSelector.minChars")
      }), _0x120ddb.trim() && _0x120ddb.trim().length >= 3 && !_0x24863f && _0x34b2e3 === _0x120ddb.trim() && _0xf28a1.jsxs("div", {
        className: "flex items-center justify-between",
        children: [_0xf28a1.jsx("div", {
          className: "text-xs text-text-tertiary",
          children: _0x526eb5("serverSettings.memberSelector.searchResultsFor", {
            query: _0x120ddb,
            count: _0x4b1b49.length
          })
        }), _0xf28a1.jsx("button", {
          type: "button",
          onClick: () => {
            _0x4ae3b8("");
            _0x5de4fe([]);
            _0x246d3b("");
            _0x2eeaa2(false);
          },
          className: "text-xs text-blue-400 hover:text-blue-300 underline transition-colors",
          children: _0x526eb5("serverSettings.memberSelector.clear")
        })]
      }), _0x24863f && _0xf28a1.jsx("div", {
        className: "text-xs text-text-tertiary",
        children: _0x526eb5("serverSettings.memberSelector.searching", {
          query: _0x120ddb
        })
      })]
    }), _0xf28a1.jsxs("div", {
      className: "max-h-80",
      style: {
        height: _0x2ff4fc
      },
      children: [_0x4c7dfd ? _0xf28a1.jsx(_0x2f19d3, {
        style: {
          height: "100%"
        },
        className: "scrollbar-thin",
        data: [...Array(8)].map((_0x1efc58, _0x442f15) => ({
          id: "skeleton-" + _0x442f15,
          type: "skeleton"
        })),
        children: () => _0xf28a1.jsxs("div", {
          style: {
            height: "58px",
            minHeight: "58px"
          },
          className: "flex items-center gap-3 px-3 animate-pulse",
          children: [_0xf28a1.jsx("div", {
            className: "w-7 h-7 rounded-full bg-surface-inset shrink-0"
          }), _0xf28a1.jsxs("div", {
            className: "flex-1 space-y-1.5",
            children: [_0xf28a1.jsx("div", {
              className: "h-3 bg-surface-inset rounded w-32"
            }), _0xf28a1.jsx("div", {
              className: "h-2.5 bg-surface-inset rounded w-24"
            })]
          }), _0xf28a1.jsx("div", {
            className: "w-4 h-4 rounded border-2 border-border-strong shrink-0"
          })]
        })
      }) : _0x477bff.length === 0 ? _0xf28a1.jsx("div", {
        className: "text-center py-12",
        children: _0xf28a1.jsxs("div", {
          className: "space-y-4",
          children: [_0xf28a1.jsx("div", {
            className: "w-20 h-20 mx-auto rounded-full bg-surface-overlay/30 flex items-center justify-center",
            children: _0xf28a1.jsx(_0xf54eb1, {
              icon: "solar:users-group-rounded-bold-duotone",
              className: "w-10 h-10 text-text-muted"
            })
          }), _0xf28a1.jsxs("div", {
            children: [_0xf28a1.jsx("h3", {
              className: "text-lg font-semibold text-text-secondary mb-2",
              children: _0x120ddb.trim() ? _0x526eb5("serverSettings.memberSelector.noSearchResult") : _0x526eb5(_0x400751 ? "serverSettings.memberSelector.noMembersToAdd" : "serverSettings.memberSelector.noMembers")
            }), _0xf28a1.jsx("p", {
              className: "text-sm text-text-tertiary max-w-md mx-auto",
              children: _0x120ddb.trim() ? _0x526eb5("serverSettings.memberSelector.noSearchResultDesc", {
                query: _0x120ddb
              }) : _0x526eb5(_0x400751 ? "serverSettings.memberSelector.noMembersToAddDesc" : "serverSettings.memberSelector.noMembersDesc")
            })]
          })]
        })
      }) : _0xf28a1.jsx(_0x2f19d3, {
        ref: _0x2bfb6f,
        style: {
          height: "100%"
        },
        onScroll: _0x239d81,
        className: "scrollbar-thin",
        data: _0x477bff,
        children: _0x2aced0 => {
          const _0x2ea96f = _0x2aced0.data;
          const _0x2bea79 = _0x2ea96f.user_id ? String(_0x2ea96f.user_id) : String(_0x2ea96f.id);
          const _0x5eebed = _0x34f87a.includes(_0x2bea79);
          const _0x325b8d = _0x4a1f66.includes(_0x2bea79);
          return _0xf28a1.jsxs("div", {
            style: {
              height: "58px",
              minHeight: "58px"
            },
            className: "flex items-center gap-3 p-3 rounded-lg border border-border-default transition-colors relative mb-2 " + (_0x325b8d ? "bg-surface-overlay/20 opacity-60 cursor-not-allowed" : "bg-surface-overlay/30 hover:bg-interactive-hover cursor-pointer"),
            onClick: () => {
              if (_0x325b8d) {
                return;
              }
              const _0x340a87 = _0x5eebed ? _0x34f87a.filter(_0x1b3af9 => _0x1b3af9 !== _0x2bea79) : [..._0x34f87a, _0x2bea79];
              const _0x41fd86 = _0x120ddb.trim() && _0x34b2e3 === _0x120ddb.trim() ? _0x4b1b49 : _0x10627f;
              _0x1ef555(_0x340a87, _0x41fd86);
            },
            children: [_0x325b8d && _0xf28a1.jsx("div", {
              className: "absolute top-1 right-1 px-1.5 py-0.5 bg-amber-500/20 text-amber-300 text-xs rounded border border-amber-500/30",
              children: _0x526eb5("serverSettings.memberSelector.alreadyHasAccess")
            }), _0xf28a1.jsxs("div", {
              className: "flex items-center gap-2 flex-1",
              children: [_0x2ea96f.avatar_url ? _0xf28a1.jsx("img", {
                src: _0x2ea96f.avatar_url,
                alt: _0x2ea96f.display_name || _0x2ea96f.username || "",
                className: "size-7 bg-surface-inset rounded-full shrink-0 object-cover",
                onError: _0x24a0eb => {
                  _0x24a0eb.currentTarget.style.display = "none";
                  _0x24a0eb.currentTarget.nextElementSibling?.classList.remove("hidden");
                }
              }) : null, _0xf28a1.jsx("div", {
                className: "size-7 rounded-full bg-surface-inset flex items-center justify-center text-text-secondary font-medium text-xs shrink-0 " + (_0x2ea96f.avatar_url ? "hidden" : ""),
                children: (_0x2ea96f.display_name || _0x2ea96f.username)?.[0]?.toUpperCase()
              }), _0xf28a1.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [_0xf28a1.jsxs("div", {
                  className: "flex items-center gap-1.5",
                  children: [_0xf28a1.jsx("span", {
                    className: "text-xs font-medium text-text-secondary truncate",
                    children: _0x2ea96f.display_name || _0x2ea96f.username
                  }), _0x2ea96f.isOwner && _0xf28a1.jsx(_0xf54eb1, {
                    icon: "solar:crown-bold-duotone",
                    className: "w-3.5 h-3.5 text-amber-400 shrink-0"
                  })]
                }), _0xf28a1.jsxs("div", {
                  className: "text-xs text-text-tertiary",
                  children: ["@", _0x2ea96f.username]
                })]
              })]
            }), !_0x325b8d && _0xf28a1.jsx("div", {
              className: "flex items-center gap-2",
              children: _0xf28a1.jsx("div", {
                className: "w-4 h-4 rounded border-2 transition-colors " + (_0x5eebed ? "bg-blue-500 border-blue-500" : "border-border-default"),
                children: _0x5eebed && _0xf28a1.jsx("div", {
                  className: "w-full h-full flex items-center justify-center",
                  children: _0xf28a1.jsx("div", {
                    className: "w-2 h-2 bg-white rounded-sm"
                  })
                })
              })
            })]
          });
        }
      }), _0x3df781 && _0xf28a1.jsx("div", {
        className: "pt-2 text-center",
        children: _0xf28a1.jsx("div", {
          className: "text-xs text-text-tertiary",
          children: _0x526eb5("serverSettings.memberSelector.loadingMore")
        })
      })]
    })]
  });
};
export { d as M };