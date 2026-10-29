import { r as _0x166ff4, b as _0x5e620a, P as _0x32ec30, j as _0x3a7e06, I as _0x483c82 } from "./index-cQfEKR1W.js";
import { D as _0x2d66e8, a as _0x313ee8, b as _0x41ca4c, c as _0x576d28, d as _0x216490 } from "./dialog-BMMpM7PR.js";
const c = {
  SHEET: 100,
  MODAL: 110
};
const m = ({
  className: _0xb07f17
}) => _0x3a7e06.jsx(_0x483c82, {
  icon: "solar:user-minus-bold-duotone",
  className: _0xb07f17
});
const u = [{
  labelKey: "moderation.timeout60s",
  value: 60,
  color: "bg-blue-500/20 text-blue-400 border-blue-500/30"
}, {
  labelKey: "moderation.timeout5m",
  value: 300,
  color: "bg-yellow-500/20 text-yellow-400 border-blue-500/30"
}, {
  labelKey: "moderation.timeout10m",
  value: 600,
  color: "bg-orange-500/20 text-orange-400 border-orange-500/30"
}, {
  labelKey: "moderation.timeout1h",
  value: 3600,
  color: "bg-red-500/20 text-red-400 border-red-500/30"
}, {
  labelKey: "moderation.timeout1d",
  value: 86400,
  color: "bg-purple-500/20 text-purple-400 border-purple-500/30"
}, {
  labelKey: "moderation.other",
  value: "custom",
  color: "bg-gray-500/20 text-gray-400 border-gray-500/30"
}];
const b = [{
  labelKey: "moderation.ban1h",
  value: 3600,
  color: "bg-red-500/20 text-red-400 border-red-500/30"
}, {
  labelKey: "moderation.ban1d",
  value: 86400,
  color: "bg-orange-500/20 text-orange-400 border-orange-500/30"
}, {
  labelKey: "moderation.ban1w",
  value: 604800,
  color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
}, {
  labelKey: "moderation.ban1m",
  value: 2592000,
  color: "bg-purple-500/20 text-purple-400 border-purple-500/30"
}, {
  labelKey: "moderation.banPermanent",
  value: "permanent",
  color: "bg-red-600/20 text-red-500 border-red-600/30"
}, {
  labelKey: "moderation.other",
  value: "custom",
  color: "bg-gray-500/20 text-gray-400 border-gray-500/30"
}];
const x = ({
  isOpen: _0x4a0dc3,
  onClose: _0x46309a,
  onApply: _0x47149b,
  memberName: _0x249fe5,
  guildId: _0x209110,
  memberId: _0xc39301,
  isTimedOut: _0x340635,
  actionType: _0x5584c2
}) => {
  const [_0x854eeb, _0x47a623] = _0x166ff4.useState(null);
  const [_0x3a4847, _0x40d3d0] = _0x166ff4.useState("");
  const [_0x10d7bf, _0x28c9b4] = _0x166ff4.useState("");
  const [_0x32ec2d, _0x445712] = _0x166ff4.useState(false);
  const {
    t: _0x4836ae
  } = _0x5e620a();
  _0x166ff4.useEffect(() => {
    if (_0x4a0dc3) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.pointerEvents = "";
      document.body.style.overflow = "";
      _0x47a623(null);
      _0x40d3d0("");
      _0x28c9b4("");
      _0x445712(false);
    }
    return () => {
      document.body.style.pointerEvents = "";
      document.body.style.overflow = "";
    };
  }, [_0x4a0dc3]);
  _0x166ff4.useEffect(() => () => {
    document.body.style.pointerEvents = "";
    document.body.style.overflow = "";
  }, []);
  const _0x5d78f8 = _0x166ff4.useCallback(_0x58344d => {
    if (_0x58344d === "custom") {
      _0x445712(true);
      _0x47a623(null);
      _0x40d3d0("");
    } else if (_0x58344d === "permanent") {
      _0x47a623(-1);
      _0x445712(false);
      _0x40d3d0("");
    } else {
      _0x47a623(_0x58344d);
      _0x445712(false);
      _0x40d3d0("");
    }
  }, []);
  const _0x14910b = _0x166ff4.useCallback(async () => {
    if (_0x5584c2 === "timeout") {
      const _0x5a2f40 = _0x854eeb || parseInt(_0x3a4847);
      if (!_0x5a2f40 || _0x5a2f40 <= 0) {
        _0x32ec30.error(_0x4836ae("moderation.selectValidDuration"));
        return;
      }
      if (!_0x209110 || !_0xc39301) {
        _0x32ec30.error(_0x4836ae("moderation.guildOrMemberMissing"));
        return;
      }
      try {
        const _0x130c24 = _0x10d7bf.trim() || _0x4836ae("moderation.noReasonProvided");
        if (_0x47149b) {
          _0x47149b("timeout", _0x130c24, _0x5a2f40);
        }
        _0x503b15();
      } catch {}
    } else if (_0x5584c2 === "ban") {
      const _0x21129c = _0x854eeb || parseInt(_0x3a4847);
      const _0x3de003 = _0x21129c === -1 ? undefined : _0x21129c || undefined;
      if (!_0x209110 || !_0xc39301) {
        _0x32ec30.error(_0x4836ae("moderation.guildOrMemberMissing"));
        return;
      }
      try {
        const _0xd98ce7 = _0x10d7bf.trim() || _0x4836ae("moderation.noReasonProvided");
        if (_0x47149b) {
          _0x47149b("ban", _0xd98ce7, _0x3de003);
        }
        _0x503b15();
      } catch {}
    } else if (_0x5584c2 === "kick") {
      if (!_0x209110 || !_0xc39301) {
        _0x32ec30.error(_0x4836ae("moderation.guildOrMemberMissing"));
        return;
      }
      try {
        const _0x3d3ae8 = _0x10d7bf.trim() || _0x4836ae("moderation.noReasonProvided");
        if (_0x47149b) {
          _0x47149b("kick", _0x3d3ae8);
        }
        _0x503b15();
      } catch {}
    }
  }, [_0x854eeb, _0x3a4847, _0x209110, _0xc39301, _0x10d7bf, _0x47149b, _0x5584c2]);
  const _0x503b15 = _0x166ff4.useCallback(() => {
    _0x47a623(null);
    _0x40d3d0("");
    _0x28c9b4("");
    _0x445712(false);
    _0x46309a();
  }, [_0x46309a]);
  const _0x3121a5 = _0x5ca781 => _0x5ca781 < 60 ? _0x4836ae("moderation.durationSeconds", {
    count: _0x5ca781
  }) : _0x5ca781 < 3600 ? _0x4836ae("moderation.durationMinutes", {
    count: Math.floor(_0x5ca781 / 60)
  }) : _0x5ca781 < 86400 ? _0x4836ae("moderation.durationHours", {
    count: Math.floor(_0x5ca781 / 3600)
  }) : _0x5ca781 < 604800 ? _0x4836ae("moderation.durationDays", {
    count: Math.floor(_0x5ca781 / 86400)
  }) : _0x5ca781 < 2592000 ? _0x4836ae("moderation.durationWeeks", {
    count: Math.floor(_0x5ca781 / 604800)
  }) : _0x5ca781 < 31536000 ? _0x4836ae("moderation.durationMonths", {
    count: Math.floor(_0x5ca781 / 2592000)
  }) : _0x4836ae("moderation.durationYears", {
    count: Math.floor(_0x5ca781 / 31536000)
  });
  return _0x3a7e06.jsx(_0x2d66e8, {
    open: _0x4a0dc3,
    onOpenChange: _0x1a551d => {
      if (!_0x1a551d) {
        document.body.style.pointerEvents = "";
        document.body.style.overflow = "";
        _0x503b15();
      }
    },
    children: _0x3a7e06.jsx(_0x313ee8, {
      className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md overflow-hidden",
      style: {
        zIndex: c.MODAL
      },
      children: _0x3a7e06.jsx("div", {
        className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40",
        children: _0x3a7e06.jsxs("div", {
          className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col max-h-[calc(100dvh-2rem)]",
          children: [_0x3a7e06.jsxs(_0x41ca4c, {
            className: "px-4 py-4 border-b border-border-subtle shrink-0",
            children: [_0x3a7e06.jsxs(_0x576d28, {
              className: "text-lg font-semibold text-text-primary flex items-center gap-2",
              children: [_0x5584c2 === "ban" ? _0x3a7e06.jsx(_0x483c82, {
                icon: "solar:forbidden-bold-duotone",
                className: "size-5 text-red-400"
              }) : _0x5584c2 === "kick" ? _0x3a7e06.jsx(m, {
                className: "size-5 text-orange-400"
              }) : _0x3a7e06.jsx(_0x483c82, {
                icon: "solar:clock-circle-bold-duotone",
                className: "size-5 text-orange-400"
              }), _0x4836ae(_0x5584c2 === "ban" ? "moderation.banMember" : _0x5584c2 === "kick" ? "moderation.kickMember" : _0x340635 ? "moderation.timeoutUpdate" : "moderation.timeoutApply")]
            }), _0x3a7e06.jsx(_0x216490, {
              className: "text-text-muted text-sm",
              children: _0x4836ae(_0x5584c2 === "ban" ? "moderation.memberBannedDesc" : _0x5584c2 === "kick" ? "moderation.memberKickedDesc" : "moderation.memberTimedOutDesc", {
                name: _0x249fe5
              })
            })]
          }), _0x3a7e06.jsxs("div", {
            className: "px-4 py-5 space-y-4 overflow-y-auto scrollbar-thin",
            children: [(_0x5584c2 === "timeout" || _0x5584c2 === "ban") && _0x3a7e06.jsxs(_0x3a7e06.Fragment, {
              children: [_0x3a7e06.jsxs("div", {
                className: "space-y-3",
                children: [_0x3a7e06.jsxs("h4", {
                  className: "text-sm font-medium text-text-secondary",
                  children: [_0x4836ae(_0x5584c2 === "timeout" ? "moderation.presetDurations" : "moderation.banDuration"), _0x5584c2 === "ban" && _0x3a7e06.jsx("span", {
                    className: "text-xs text-text-muted font-normal ml-2",
                    children: _0x4836ae("moderation.banDurationHint")
                  })]
                }), _0x3a7e06.jsx("div", {
                  className: "grid grid-cols-6 gap-0",
                  children: (_0x5584c2 === "timeout" ? u : b).map(_0x521f09 => _0x3a7e06.jsx("button", {
                    className: "h-8 text-xs border border-border-subtle transition-all first:rounded-l-xl last:rounded-r-xl cursor-pointer " + (_0x854eeb === _0x521f09.value || _0x521f09.value === "custom" && _0x32ec2d ? "ring-2 ring-orange-400/50 border-orange-400/50 bg-orange-500/10 text-orange-300" : "bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary"),
                    onClick: () => _0x5d78f8(_0x521f09.value),
                    children: _0x4836ae(_0x521f09.labelKey)
                  }, _0x521f09.value))
                })]
              }), _0x32ec2d && _0x3a7e06.jsxs("div", {
                className: "space-y-3",
                children: [_0x3a7e06.jsx("h4", {
                  className: "text-sm font-medium text-text-secondary",
                  children: _0x4836ae("moderation.customDuration")
                }), _0x3a7e06.jsxs("div", {
                  className: "space-y-3",
                  children: [_0x3a7e06.jsxs("div", {
                    className: "grid grid-cols-3 gap-3",
                    children: [_0x3a7e06.jsxs("div", {
                      className: "space-y-1.5",
                      children: [_0x3a7e06.jsx("label", {
                        className: "text-xs text-text-muted font-medium",
                        children: _0x4836ae("moderation.dayLabel")
                      }), _0x3a7e06.jsx("input", {
                        type: "number",
                        placeholder: "0",
                        value: Math.floor((parseInt(_0x3a4847) || 0) / 86400),
                        onChange: _0x39babd => {
                          const _0x5bf161 = parseInt(_0x39babd.target.value) || 0;
                          _0x40d3d0((_0x5bf161 * 86400).toString());
                        },
                        className: "w-full h-11 px-3 rounded-xl bg-surface-inset/40 border border-border-subtle text-text-primary text-sm placeholder:text-text-muted outline-none focus:border-accent-primary/50 transition-colors text-center",
                        min: "0"
                      })]
                    }), _0x3a7e06.jsxs("div", {
                      className: "space-y-1.5",
                      children: [_0x3a7e06.jsx("label", {
                        className: "text-xs text-text-muted font-medium",
                        children: _0x4836ae("moderation.hourLabel")
                      }), _0x3a7e06.jsx("input", {
                        type: "number",
                        placeholder: "0",
                        value: Math.floor((parseInt(_0x3a4847) || 0) % 86400 / 3600),
                        onChange: _0x313997 => {
                          const _0x52b5dc = parseInt(_0x313997.target.value) || 0;
                          const _0xfe5309 = Math.floor((parseInt(_0x3a4847) || 0) / 86400);
                          _0x40d3d0((_0xfe5309 * 86400 + _0x52b5dc * 3600).toString());
                        },
                        className: "w-full h-11 px-3 rounded-xl bg-surface-inset/40 border border-border-subtle text-text-primary text-sm placeholder:text-text-muted outline-none focus:border-accent-primary/50 transition-colors text-center",
                        min: "0",
                        max: "23"
                      })]
                    }), _0x3a7e06.jsxs("div", {
                      className: "space-y-1.5",
                      children: [_0x3a7e06.jsx("label", {
                        className: "text-xs text-text-muted font-medium",
                        children: _0x4836ae("moderation.minuteLabel")
                      }), _0x3a7e06.jsx("input", {
                        type: "number",
                        placeholder: "0",
                        value: Math.floor((parseInt(_0x3a4847) || 0) % 3600 / 60),
                        onChange: _0x43292a => {
                          const _0xdc6804 = parseInt(_0x43292a.target.value) || 0;
                          const _0x335aed = Math.floor((parseInt(_0x3a4847) || 0) / 86400);
                          const _0x5d792d = Math.floor((parseInt(_0x3a4847) || 0) % 86400 / 3600);
                          _0x40d3d0((_0x335aed * 86400 + _0x5d792d * 3600 + _0xdc6804 * 60).toString());
                        },
                        className: "w-full h-11 px-3 rounded-xl bg-surface-inset/40 border border-border-subtle text-text-primary text-sm placeholder:text-text-muted outline-none focus:border-accent-primary/50 transition-colors text-center",
                        min: "0",
                        max: "59"
                      })]
                    })]
                  }), _0x3a4847 && parseInt(_0x3a4847) > 0 && _0x3a7e06.jsx("div", {
                    className: "p-3 bg-surface-inset/40 border border-border-subtle rounded-xl",
                    children: _0x3a7e06.jsxs("div", {
                      className: "text-center",
                      children: [_0x3a7e06.jsx("div", {
                        className: "text-xs text-text-muted mb-1",
                        children: _0x4836ae("moderation.totalDuration")
                      }), _0x3a7e06.jsx("div", {
                        className: "text-lg font-semibold text-text-secondary",
                        children: _0x3121a5(parseInt(_0x3a4847))
                      })]
                    })
                  })]
                })]
              })]
            }), _0x5584c2 !== "kick" && _0x3a7e06.jsxs("div", {
              className: "space-y-2",
              children: [_0x3a7e06.jsx("h4", {
                className: "text-sm font-medium text-text-secondary",
                children: _0x4836ae("moderation.reasonOptional")
              }), _0x3a7e06.jsx("textarea", {
                placeholder: _0x4836ae(_0x5584c2 === "ban" ? "moderation.banReasonPlaceholder" : "moderation.timeoutReasonPlaceholder"),
                value: _0x10d7bf,
                onChange: _0x4ca98c => _0x28c9b4(_0x4ca98c.target.value),
                className: "w-full px-4 py-3 rounded-xl bg-surface-inset/40 border border-border-subtle text-sm text-text-primary placeholder:text-text-muted outline-none resize-y min-h-[80px] transition-colors scrollbar-thin focus:border-accent-primary/50 break-all"
              })]
            }), (_0x5584c2 === "timeout" && (_0x854eeb || _0x32ec2d && _0x3a4847) || _0x5584c2 === "ban" || _0x5584c2 === "kick") && _0x3a7e06.jsx("div", {
              className: "p-3 border rounded-xl " + (_0x5584c2 === "ban" ? "bg-red-500/10 border-red-500/20" : "bg-orange-500/10 border-orange-500/20"),
              children: _0x3a7e06.jsxs("div", {
                className: "flex items-center gap-2 " + (_0x5584c2 === "ban" ? "text-red-400" : "text-orange-400"),
                children: [_0x3a7e06.jsx(_0x483c82, {
                  icon: "solar:danger-triangle-bold-duotone",
                  className: "size-5 min-w-5 min-h-5 mr-1"
                }), _0x3a7e06.jsx("span", {
                  className: "text-sm font-medium",
                  children: (() => {
                    const _0x3aa85b = _0x854eeb || parseInt(_0x3a4847);
                    if (_0x5584c2 === "ban") {
                      if (_0x3aa85b !== -1 && (_0x3aa85b || _0x854eeb || _0x32ec2d)) {
                        if (_0x3aa85b && _0x3aa85b > 0) {
                          return _0x4836ae("moderation.warningBanDuration", {
                            name: _0x249fe5,
                            duration: _0x3121a5(_0x3aa85b)
                          });
                        } else {
                          return "";
                        }
                      } else {
                        return _0x4836ae("moderation.warningBanPermanent", {
                          name: _0x249fe5
                        });
                      }
                    } else if (_0x5584c2 === "kick") {
                      return _0x4836ae("moderation.warningKick", {
                        name: _0x249fe5
                      });
                    } else if (!_0x3aa85b || _0x3aa85b <= 0) {
                      return "";
                    } else {
                      return _0x4836ae("moderation.warningTimeout", {
                        name: _0x249fe5,
                        duration: _0x3121a5(_0x3aa85b)
                      });
                    }
                  })()
                })]
              })
            })]
          }), _0x3a7e06.jsx("div", {
            className: "px-4 py-3 border-t border-border-subtle shrink-0",
            children: _0x3a7e06.jsxs("div", {
              className: "flex items-center gap-2",
              children: [_0x3a7e06.jsx("button", {
                onClick: _0x503b15,
                className: "flex-1 h-10 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer",
                children: _0x4836ae("moderation.cancel")
              }), _0x3a7e06.jsx("button", {
                onClick: _0x14910b,
                disabled: _0x5584c2 === "timeout" && !_0x854eeb && !_0x3a4847.trim(),
                className: "flex-1 h-10 rounded-xl text-text-primary text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 cursor-pointer " + (_0x5584c2 === "ban" ? "bg-red-600 hover:bg-red-700" : "bg-orange-600 hover:bg-orange-700"),
                children: _0x4836ae(_0x5584c2 === "ban" ? "moderation.banAction" : _0x5584c2 === "kick" ? "moderation.kickAction" : "moderation.timeoutAction")
              })]
            })
          })]
        })
      })
    })
  });
};
const p = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: x
}, Symbol.toStringTag, {
  value: "Module"
}));
export { x as M, c as Z, p as a };