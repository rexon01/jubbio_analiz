import { R as _0x1eb090, b as _0x2e6904, ba as _0x30442c, r as _0x232f2c, j as _0x5ed851, c3 as _0x4a7444, K as _0x2f74c8 } from "./index-cQfEKR1W.js";
import { bl as _0x3cad95, bk as _0xde9679, bm as _0x2b8fc6 } from "./AppLayout-BEBJqe9_.js";
import { h as _0x3e9d8c } from "./soundboardFx-C2LP-Hjs.js";
import { V as _0x3170e } from "./VoicePanel-3j4ol_VK.js";
import { P as _0x282416 } from "./video-AtsAgCNJ.js";
import { C as _0x1bc38a } from "./select-DQjjzSZW.js";
import "./tr-D975n4_R.js";
import "./arrow-left-B3FhifN2.js";
import "./arrow-right-DvlsXLCB.js";
import "./loader-circle-CTtxa1g9.js";
import "./switch-lfnbGePn.js";
import "./drawer-X7YyCqpZ.js";
import "./index-yuEHo9bu.js";
import "./input-AMyERYwJ.js";
import "./subscription-Cl5JAGbQ.js";
import "./useTheme-CzNZmxfV.js";
import "./ComparisonTable-DUfwtDVZ.js";
import "./card-Bk6R3tFg.js";
import "./gift-Co-azAyt.js";
import "./CheckoutPlaceholder-Dr0TfmeQ.js";
import "./IyzicoCheckoutFrame-f1WDW5o8.js";
import "./zap-B3VH4qT9.js";
import "./dialog-BMMpM7PR.js";
import "./submit-button-B2LF_DTf.js";
import "./NexusSuccessArtwork-YGvslhff.js";
import "./circle-x-BBSKKBIf.js";
import "./avatar-C-4BWxT3.js";
import "./ConfirmDialog-B4gIndKy.js";
import "./alert-dialog-BZuoGg7O.js";
import "./index-Oyyh46KT.js";
import "./user-DSjlY8FD.js";
import "./refresh-cw-C3NlhmpS.js";
import "./trash-2-DuFcDcAU.js";
import "./clipboard-BQ9qambq.js";
import "./label-ODyS97Ju.js";
import "./plus-B7c2Px8R.js";
import "./channelNotificationStore-FXjXBmS_.js";
import "./index.module-CsHioFCV.js";
import "./index-BUijt7wr.js";
import "./ReportDialog-ByLH3UTW.js";
import "./ReportMessageDialog-Ca_7LQnT.js";
import "./report-SxkUMari.js";
import "./message-square-warning-CLoriRUW.js";
import "./shield-off-BIo5sBqK.js";
import "./heart-BTCd1Bwb.js";
import "./user-x-D7hkQEsg.js";
import "./circle-question-mark-PWsoYL5a.js";
import "./ModerationSheet-CqLxYHCF.js";
import "./ModerationModal-CS_sqQfM.js";
import "./checkbox-6NFFWv4U.js";
const p = 260;
const j = 420;
const h = 560;
const b = _0x1eb090.memo(({
  participant: _0x3d1ad0,
  isGroup: _0x5342db = false,
  groupName: _0x44686,
  groupIcon: _0x2fb9cd,
  channelId: _0x37ea71,
  activeCall: _0x5b5903,
  onJoinCall: _0x3a5574
}) => {
  const _0x5e4d97 = _0x3cad95();
  const {
    t: _0x35614a
  } = _0x2e6904();
  const _0xcdeb17 = _0x3e9d8c(_0x17aff2 => _0x17aff2.status);
  const _0x18d816 = _0x3e9d8c(_0x20b3f1 => _0x20b3f1.call);
  const _0x3e4dfe = _0x30442c(_0x47a535 => _0x47a535.status);
  const _0x70868f = _0x30442c(_0x56b86b => _0x56b86b.guildId);
  const _0x4ea77e = _0x30442c(_0x3971f0 => _0x3971f0.channelId);
  const _0x569fce = _0x3e9d8c(_0x2ae03d => _0x2ae03d.endCall);
  const _0x58c10e = _0x70868f?.startsWith("dm-call-");
  const [_0x25550f, _0x3cedbe] = _0x232f2c.useState(() => {
    try {
      const _0x3b1810 = localStorage.getItem("dmCallPanelHeight");
      if (_0x3b1810) {
        const _0x1988a9 = parseInt(_0x3b1810, 10);
        if (_0x1988a9 >= p && _0x1988a9 <= h) {
          return _0x1988a9;
        }
      }
    } catch {}
    return j;
  });
  const [_0x3bb855, _0x4ecd19] = _0x232f2c.useState(null);
  _0x232f2c.useEffect(() => {
    if (_0x3bb855 === null) {
      try {
        localStorage.setItem("dmCallPanelHeight", String(_0x25550f));
      } catch {}
    }
  }, [_0x25550f, _0x3bb855]);
  const _0x337177 = _0x232f2c.useCallback(_0xd5b04a => {
    if (_0xd5b04a) {
      _0x4ecd19(_0x25550f);
      _0x3cedbe(h);
    } else if (_0x3bb855 !== null) {
      _0x3cedbe(_0x3bb855);
      _0x4ecd19(null);
    }
  }, [_0x25550f, _0x3bb855]);
  const _0x2900a8 = _0x232f2c.useCallback(() => {
    _0x3cedbe(_0x493a9b => _0x493a9b >= h ? p : _0x493a9b >= j ? h : j);
  }, []);
  const _0xd48e97 = _0x232f2c.useMemo(() => _0x5342db ? _0x44686 || _0x35614a("dm.group") : _0x3d1ad0?.display_name || _0x3d1ad0?.username || _0x35614a("dm.user"), [_0x5342db, _0x44686, _0x3d1ad0]);
  const _0x44ceec = _0x5342db ? _0x2fb9cd : _0x3d1ad0?.avatar_url;
  const _0x572e70 = _0x232f2c.useCallback(async () => {
    try {
      await _0xde9679();
    } catch (_0x51a412) {
      console.error("[DMCallPanel] Bağlantı kesme hatası:", _0x51a412);
    }
    _0x569fce();
  }, [_0x569fce]);
  const _0xb8d547 = _0x37ea71 && _0x4ea77e === _0x37ea71;
  const _0x1c9ace = _0x58c10e && _0xb8d547 && (_0x3e4dfe === "joining" || _0xcdeb17 === "starting");
  const _0xb35bc2 = _0x58c10e && _0xb8d547 && _0x3e4dfe === "joined";
  const _0x237693 = _0x5b5903?.status === "active";
  const _0x5ab09a = _0x5b5903?.participant_ids?.length || 0;
  const _0xdd3b83 = _0x5b5903?.has_screen_share || false;
  if (_0x1c9ace) {
    return _0x5ed851.jsx("div", {
      className: "bg-surface-base/95 backdrop-blur-sm border-b border-border-default",
      children: _0x5ed851.jsxs("div", {
        className: "relative py-3 px-4 overflow-hidden",
        children: [_0x5ed851.jsx("div", {
          className: "absolute inset-0 bg-gradient-to-r from-blue-900/10 via-slate-900/5 to-transparent"
        }), _0x5ed851.jsxs("div", {
          className: "relative flex items-center gap-3 z-10",
          children: [_0x5ed851.jsxs("div", {
            className: "relative flex-shrink-0",
            children: [_0x5ed851.jsx("div", {
              className: "absolute -inset-1 rounded-full bg-blue-500/20 animate-pulse"
            }), _0x5ed851.jsx("div", {
              className: "relative w-11 h-11 rounded-full bg-surface-overlay flex items-center justify-center overflow-hidden ring-2 ring-blue-500/40",
              children: _0x44ceec ? _0x5ed851.jsx("img", {
                src: _0x44ceec,
                alt: _0xd48e97,
                className: "w-full h-full object-cover"
              }) : _0x5ed851.jsx("span", {
                className: "text-base font-semibold text-text-secondary",
                children: _0xd48e97.charAt(0).toUpperCase()
              })
            })]
          }), _0x5ed851.jsxs("div", {
            className: "min-w-0 flex-1",
            children: [_0x5ed851.jsx("p", {
              className: "text-text-primary font-medium text-sm truncate",
              children: _0xd48e97
            }), _0x5ed851.jsxs("div", {
              className: "flex items-center gap-1.5 mt-0.5",
              children: [_0x5ed851.jsx("div", {
                className: "w-4 h-4 relative",
                children: _0x5ed851.jsx("div", {
                  className: "absolute inset-0 rounded-full border-2 border-blue-500/30 border-t-blue-500 animate-spin"
                })
              }), _0x5ed851.jsx("span", {
                className: "text-xs text-blue-400 font-medium",
                children: _0x35614a("dm.connecting")
              })]
            })]
          })]
        })]
      })
    });
  }
  if (_0x237693 && _0x5ab09a > 0 && !_0xb35bc2 && !_0x1c9ace) {
    return _0x5ed851.jsx("div", {
      className: "bg-surface-base/95 backdrop-blur-sm border-b border-border-default",
      children: _0x5ed851.jsxs("div", {
        className: "relative py-3 px-4 overflow-hidden",
        children: [_0x5ed851.jsx("div", {
          className: "absolute inset-0 bg-gradient-to-r from-green-900/10 via-emerald-900/5 to-transparent"
        }), _0x5ed851.jsxs("div", {
          className: "relative flex items-center justify-between z-10",
          children: [_0x5ed851.jsxs("div", {
            className: "flex items-center gap-3 min-w-0 flex-1",
            children: [_0x5ed851.jsxs("div", {
              className: "relative flex-shrink-0",
              children: [_0x5ed851.jsx("div", {
                className: "absolute -inset-1 rounded-full bg-green-500/20 animate-pulse"
              }), _0x5ed851.jsx("div", {
                className: "relative w-11 h-11 rounded-full bg-surface-overlay flex items-center justify-center overflow-hidden ring-2 ring-green-500/40",
                children: _0x44ceec ? _0x5ed851.jsx("img", {
                  src: _0x44ceec,
                  alt: _0xd48e97,
                  className: "w-full h-full object-cover"
                }) : _0x5ed851.jsx("span", {
                  className: "text-base font-semibold text-text-secondary",
                  children: _0xd48e97.charAt(0).toUpperCase()
                })
              })]
            }), _0x5ed851.jsxs("div", {
              className: "min-w-0 flex-1",
              children: [_0x5ed851.jsx("p", {
                className: "text-text-primary font-medium text-sm truncate",
                children: _0xd48e97
              }), _0x5ed851.jsxs("div", {
                className: "flex items-center gap-2 mt-0.5",
                children: [_0x5ed851.jsxs("div", {
                  className: "flex items-center gap-1",
                  children: [_0x5ed851.jsx("span", {
                    className: "w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"
                  }), _0x5ed851.jsx("span", {
                    className: "text-xs text-green-400 font-medium",
                    children: _0x5ab09a === 1 ? _0x35614a("dm.inCall") : _0x35614a("dm.participantCount", {
                      count: _0x5ab09a
                    })
                  })]
                }), _0xdd3b83 && _0x5ed851.jsxs("div", {
                  className: "flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-500/20 border border-blue-500/30",
                  children: [_0x5ed851.jsx(_0x4a7444, {
                    className: "w-3 h-3 text-blue-400"
                  }), _0x5ed851.jsx("span", {
                    className: "text-[10px] text-blue-400 font-medium",
                    children: _0x35614a("dm.screen")
                  })]
                })]
              })]
            })]
          }), _0x3a5574 && _0x5ed851.jsxs("button", {
            onClick: _0x3a5574,
            className: "flex-shrink-0 flex items-center gap-1.5 px-3 py-2 bg-green-600 hover:bg-green-500 active:bg-green-700 text-text-primary text-sm font-medium rounded-full transition-all duration-200 shadow-lg shadow-green-900/30 hover:shadow-green-900/40 hover:scale-105 active:scale-95",
            children: [_0x5ed851.jsx(_0x282416, {
              className: "w-4 h-4"
            }), _0x5ed851.jsx("span", {
              children: _0x35614a("dm.joinCall")
            })]
          })]
        })]
      })
    });
  }
  if (!_0x18d816 || !_0x58c10e || !_0xb8d547 || _0xcdeb17 === "idle" || _0xcdeb17 === "ended") {
    return null;
  }
  if (_0xcdeb17 === "ringing" && _0x3e4dfe === "joined") {
    return _0x5ed851.jsx("div", {
      className: "bg-surface-base/95 backdrop-blur-sm border-b border-border-default",
      children: _0x5ed851.jsxs("div", {
        className: "relative py-3 px-4 overflow-hidden",
        children: [_0x5ed851.jsx("div", {
          className: "absolute inset-0 bg-gradient-to-r from-green-900/10 via-emerald-900/5 to-transparent"
        }), _0x5ed851.jsxs("div", {
          className: "relative flex items-center justify-between z-10",
          children: [_0x5ed851.jsxs("div", {
            className: "flex items-center gap-3 min-w-0 flex-1",
            children: [_0x5ed851.jsxs("div", {
              className: "relative flex-shrink-0",
              children: [_0x5ed851.jsx("div", {
                className: "absolute -inset-1 rounded-full bg-green-500/20 animate-pulse"
              }), _0x5ed851.jsx("div", {
                className: "relative w-11 h-11 rounded-full bg-surface-overlay flex items-center justify-center overflow-hidden ring-2 ring-green-500/40",
                children: _0x44ceec ? _0x5ed851.jsx("img", {
                  src: _0x44ceec,
                  alt: _0xd48e97,
                  className: "w-full h-full object-cover"
                }) : _0x5ed851.jsx("span", {
                  className: "text-base font-semibold text-text-secondary",
                  children: _0xd48e97.charAt(0).toUpperCase()
                })
              })]
            }), _0x5ed851.jsxs("div", {
              className: "min-w-0 flex-1",
              children: [_0x5ed851.jsx("p", {
                className: "text-text-primary font-medium text-sm truncate",
                children: _0xd48e97
              }), _0x5ed851.jsxs("div", {
                className: "flex items-center gap-1.5 mt-0.5",
                children: [_0x5ed851.jsx(_0x282416, {
                  className: "w-3.5 h-3.5 text-green-400 animate-pulse"
                }), _0x5ed851.jsx("span", {
                  className: "text-xs text-green-400 font-medium",
                  children: _0x35614a("dm.ringing")
                })]
              })]
            })]
          }), _0x5ed851.jsx("button", {
            onClick: _0x572e70,
            className: "flex-shrink-0 w-9 h-9 rounded-full bg-red-500/15 hover:bg-red-500 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 group border border-red-500/20 hover:border-red-500",
            children: _0x5ed851.jsx(_0x282416, {
              className: "w-4 h-4 text-red-400 group-hover:text-white rotate-[135deg]"
            })
          })]
        })]
      })
    });
  }
  if (_0x5e4d97 && _0x3e4dfe === "joined") {
    const _0x25f363 = _0x25550f >= h;
    return _0x5ed851.jsx(_0x2b8fc6.Provider, {
      value: _0x5e4d97,
      children: _0x5ed851.jsxs("div", {
        className: "relative bg-surface-base border-b border-border-default transition-all duration-300 ease-out",
        style: {
          height: _0x25550f + "px"
        },
        children: [_0x5ed851.jsx(_0x3170e, {
          guildId: _0x70868f || "",
          channelId: _0x4ea77e || "",
          channels: [],
          isDM: true,
          dmDisplayName: _0xd48e97,
          onDMLeave: _0x572e70,
          onFocusChange: _0x337177
        }), _0x5ed851.jsx("button", {
          onClick: _0x2900a8,
          className: "absolute bottom-2 left-2 z-50 p-1.5 rounded-lg bg-surface-overlay/80 hover:bg-surface-inset/80 text-text-secondary hover:text-text-primary transition-colors backdrop-blur-sm",
          title: _0x35614a(_0x25f363 ? "dm.shrink" : "dm.expand"),
          children: _0x25f363 ? _0x5ed851.jsx(_0x1bc38a, {
            className: "w-4 h-4"
          }) : _0x5ed851.jsx(_0x2f74c8, {
            className: "w-4 h-4"
          })
        })]
      })
    });
  }
  return null;
});
export { b as default };