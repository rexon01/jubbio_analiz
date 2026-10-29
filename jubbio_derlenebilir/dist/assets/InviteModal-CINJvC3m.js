import { R as _0x382c45, b as _0xfe26c1, d as _0x4b7bed, f as _0x4cd14f, a_ as _0x1cc295, bS as _0x4dfbd5, b2 as _0x44d112, r as _0x854760, j as _0x4a2bf5 } from "./index-cQfEKR1W.js";
import { aq as _0x2989e9, bM as _0x4424d8 } from "./AppLayout-BEBJqe9_.js";
import { A as _0x2469ec, a as _0x223a23, b as _0x1f9cde } from "./avatar-C-4BWxT3.js";
import { D as _0x510cd3, a as _0x3d5ec7, c as _0x4a4daf, d as _0x5447b7 } from "./dialog-BMMpM7PR.js";
import { A as _0x2045b6 } from "./ApplicationFormDialog-Cf1dddtl.js";
import { L as _0x155f15 } from "./loader-circle-CTtxa1g9.js";
import { C as _0x139123 } from "./circle-check-Dx5tVQS9.js";
import "./soundboardFx-C2LP-Hjs.js";
import "./index-BUijt7wr.js";
import "./tr-D975n4_R.js";
import "./select-DQjjzSZW.js";
import "./index-Oyyh46KT.js";
import "./arrow-left-B3FhifN2.js";
import "./arrow-right-DvlsXLCB.js";
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
import "./submit-button-B2LF_DTf.js";
import "./NexusSuccessArtwork-YGvslhff.js";
import "./circle-x-BBSKKBIf.js";
import "./ConfirmDialog-B4gIndKy.js";
import "./alert-dialog-BZuoGg7O.js";
import "./user-DSjlY8FD.js";
import "./refresh-cw-C3NlhmpS.js";
import "./trash-2-DuFcDcAU.js";
import "./clipboard-BQ9qambq.js";
import "./label-ODyS97Ju.js";
import "./video-AtsAgCNJ.js";
import "./plus-B7c2Px8R.js";
import "./channelNotificationStore-FXjXBmS_.js";
import "./index.module-CsHioFCV.js";
const N = _0x382c45.memo(() => {
  const {
    t: _0x35846e
  } = _0xfe26c1();
  const _0x572ce5 = _0x4b7bed();
  const {
    isAuthenticated: _0x147467,
    isLoading: _0x57984d
  } = _0x4cd14f();
  const {
    servers: _0xb87e18
  } = _0x1cc295(_0x4dfbd5(_0x4c7dde => ({
    servers: _0x4c7dde.servers
  })));
  const _0x13ed09 = _0x44d112(_0x234b10 => _0x234b10.isInviteModalOpen);
  const _0x4780fb = _0x44d112(_0xd7ab10 => _0xd7ab10.inviteCode);
  const _0x37d897 = _0x44d112(_0x1bc139 => _0x1bc139.closeInviteModal);
  const [_0x2c4c55, _0x596aff] = _0x854760.useState(null);
  const [_0x437b81, _0x5a21cf] = _0x854760.useState(true);
  const [_0xd04014, _0x567c57] = _0x854760.useState(false);
  const [_0x3c00df, _0x3d057b] = _0x854760.useState(null);
  const [_0x27586a, _0x1a31d1] = _0x854760.useState(false);
  const [_0x353cb9, _0x38a0ce] = _0x854760.useState([]);
  const [_0x193af8, _0xcf27b] = _0x854760.useState(null);
  const [_0x3c430c, _0x49a2ff] = _0x854760.useState(false);
  _0x854760.useEffect(() => {
    if (!_0x13ed09 || !_0x4780fb) {
      _0x596aff(null);
      _0x3d057b(null);
      _0x5a21cf(false);
      return;
    }
    if (_0x147467 && !_0x57984d) {
      (async () => {
        try {
          _0x5a21cf(true);
          _0x3d057b(null);
          const _0x3fa097 = await _0x4424d8(_0x4780fb);
          if (!_0x3fa097 || !_0x3fa097.invite) {
            _0x3d057b(_0x35846e("invite.modal.inviteInfoMissing"));
            return;
          }
          if (!_0x3fa097.guild) {
            _0x3d057b(_0x35846e("invite.modal.serverInfoNotFound"));
            return;
          }
          _0x596aff(_0x3fa097);
        } catch (_0x44d620) {
          const _0x4a05d3 = _0x44d620?.response?.status;
          const _0x5eee41 = _0x44d620?.response?.data?.error;
          _0x3d057b(_0x5eee41 === "INSTANCE_NOT_FOUND" ? _0x35846e("invite.modal.instanceNotFound") : _0x5eee41 === "INSTANCE_UNAVAILABLE" ? _0x35846e("invite.modal.instanceUnavailable") : _0x4a05d3 === 404 ? _0x35846e("invite.modal.inviteCodeInvalid") : _0x4a05d3 === 403 ? _0x35846e("invite.modal.inviteAccessDenied") : _0x44d620?.response?.data?.error || _0x44d620?.message || _0x35846e("invite.modal.inviteCodeNotFound"));
        } finally {
          _0x5a21cf(false);
        }
      })();
    }
  }, [_0x4780fb, _0x13ed09, _0x147467, _0x57984d]);
  _0x854760.useEffect(() => {
    if (!_0x13ed09) {
      _0x596aff(null);
      _0x3d057b(null);
      _0x5a21cf(false);
      _0x567c57(false);
      _0x1a31d1(false);
      _0x38a0ce([]);
      _0xcf27b(null);
    }
  }, [_0x13ed09]);
  const _0x1e6a09 = _0x854760.useCallback(async () => {
    if (_0x4780fb && _0x2c4c55?.guild?.id && _0x2c4c55?.guild?.name) {
      try {
        _0x567c57(true);
        const _0x476704 = await _0x2989e9(_0x4780fb);
        if (_0x476704.application_required) {
          if (_0x476704.application_pending) {
            _0x49a2ff(true);
            _0x1a31d1(true);
            _0xcf27b(_0x476704.guild_id || _0x2c4c55.guild.id);
            return;
          } else {
            _0x49a2ff(false);
            _0x1a31d1(true);
            _0x38a0ce(_0x476704.questions || []);
            _0xcf27b(_0x476704.guild_id || _0x2c4c55.guild.id);
            return;
          }
        }
        const {
          addServerIfNotExists: _0x2a654a
        } = _0x1cc295.getState();
        _0x2a654a({
          id: _0x2c4c55.guild.id,
          name: _0x2c4c55.guild.name,
          avatar_url: _0x2c4c55.guild.avatar_url,
          banner_url: _0x2c4c55.guild.banner_url
        });
        _0x37d897();
        _0x572ce5("/app/server/" + _0x2c4c55.guild.id);
      } catch (_0x208d5d) {
        const _0x357e5a = _0x208d5d?.response?.data?.error || _0x208d5d?.message || _0x35846e("invite.modal.joinFailed");
        if (_0x357e5a.toLowerCase().includes("zaten üye") || _0x357e5a.toLowerCase().includes("already a member") || _0x357e5a.toLowerCase().includes("already member")) {
          const {
            addServerIfNotExists: _0x3a2f81
          } = _0x1cc295.getState();
          _0x3a2f81({
            id: _0x2c4c55.guild.id,
            name: _0x2c4c55.guild.name,
            avatar_url: _0x2c4c55.guild.avatar_url,
            banner_url: _0x2c4c55.guild.banner_url
          });
          _0x37d897();
          _0x572ce5("/app/server/" + _0x2c4c55.guild.id);
          return;
        }
      } finally {
        _0x567c57(false);
      }
    }
  }, [_0x4780fb, _0x2c4c55, _0x37d897, _0x572ce5]);
  const _0x12ff0f = _0x854760.useMemo(() => _0x2c4c55?.guild?.name ? _0x2c4c55.guild.name.split(" ").filter(Boolean).map(_0x4a9f8a => _0x4a9f8a[0]).join("").slice(0, 2).toUpperCase() : "??", [_0x2c4c55]);
  const _0x1e7ec9 = _0x854760.useMemo(() => !!_0x2c4c55?.guild?.id && !!_0xb87e18.length && _0xb87e18.some(_0x1e5a48 => String(_0x1e5a48.id) === String(_0x2c4c55.guild.id)), [_0x2c4c55, _0xb87e18]);
  const _0x1d069b = _0x854760.useCallback(_0x8c913f => {
    if (!_0x8c913f) {
      _0x37d897();
    }
  }, [_0x37d897]);
  const _0x11d2fa = _0x854760.useCallback(() => {
    if (_0x2c4c55?.guild?.id) {
      _0x37d897();
      _0x572ce5("/app/server/" + _0x2c4c55.guild.id);
    }
  }, [_0x2c4c55?.guild?.id, _0x37d897, _0x572ce5]);
  if (!_0x13ed09 && !_0x27586a) {
    return null;
  }
  const _0x2a8a0a = _0x2c4c55?.guild;
  return _0x4a2bf5.jsxs(_0x4a2bf5.Fragment, {
    children: [_0x4a2bf5.jsx(_0x510cd3, {
      open: _0x13ed09 && !_0x27586a,
      onOpenChange: _0x1d069b,
      children: _0x4a2bf5.jsxs(_0x3d5ec7, {
        className: "p-0 gap-0 bg-transparent border-0 shadow-none overflow-hidden flex flex-col items-center justify-center " + (_0x437b81 || _0x3c00df || !_0x2a8a0a ? "!max-w-sm w-full" : "w-full !max-w-6xl h-[80vh]"),
        children: [_0x4a2bf5.jsx(_0x4a4daf, {
          className: "sr-only",
          children: _0x2a8a0a?.name ? _0x35846e("invite.modal.serverInviteTitle", {
            name: _0x2a8a0a.name
          }) : _0x35846e("invite.modal.serverInvite")
        }), _0x4a2bf5.jsx(_0x5447b7, {
          className: "sr-only",
          children: _0x2a8a0a?.name ? _0x35846e("invite.modal.serverInviteDesc", {
            name: _0x2a8a0a.name
          }) : _0x35846e("invite.modal.serverInviteLoading")
        }), _0x437b81 && _0x4a2bf5.jsxs("div", {
          className: "w-full relative rounded-2xl overflow-hidden shadow-2xl shadow-black/5 dark:shadow-black/40",
          children: [_0x4a2bf5.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-br from-surface-overlay via-surface-overlay/95 to-surface-base"
          }), _0x4a2bf5.jsxs("div", {
            className: "relative z-[1] px-6 py-12 flex flex-col items-center gap-3",
            children: [_0x4a2bf5.jsx(_0x155f15, {
              className: "size-8 animate-spin text-text-tertiary"
            }), _0x4a2bf5.jsx("p", {
              className: "text-sm text-text-muted",
              children: _0x35846e("invite.modal.serverInviteLoading")
            })]
          })]
        }), !_0x437b81 && (_0x3c00df || !_0x2a8a0a) && _0x4a2bf5.jsxs("div", {
          className: "w-full relative rounded-2xl overflow-hidden shadow-2xl shadow-black/5 dark:shadow-black/40",
          children: [_0x4a2bf5.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-br from-surface-overlay via-surface-overlay/95 to-surface-base"
          }), _0x4a2bf5.jsxs("div", {
            className: "relative z-[1] px-6 py-10 flex flex-col items-center gap-3 text-center",
            children: [_0x4a2bf5.jsx("div", {
              className: "size-14 rounded-full bg-red-500/15 flex items-center justify-center",
              children: _0x4a2bf5.jsx("svg", {
                className: "size-7 text-red-400",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: 2,
                children: _0x4a2bf5.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M6 18L18 6M6 6l12 12"
                })
              })
            }), _0x4a2bf5.jsx("p", {
              className: "text-sm font-medium text-text-primary",
              children: _0x35846e("invite.modal.inviteInvalid")
            }), _0x4a2bf5.jsx("p", {
              className: "text-xs text-text-tertiary max-w-xs",
              children: _0x3c00df || _0x35846e("invite.modal.inviteInvalidDesc")
            }), _0x4a2bf5.jsx("button", {
              onClick: () => _0x37d897(),
              className: "mt-2 h-9 px-6 rounded-xl text-sm font-medium bg-surface-inset/40 border border-border-subtle text-text-secondary hover:bg-interactive-muted transition-colors cursor-pointer",
              children: _0x35846e("invite.modal.close")
            })]
          })]
        }), !_0x437b81 && !_0x3c00df && _0x2a8a0a && !_0x27586a && _0x4a2bf5.jsxs("div", {
          className: "w-full relative rounded-2xl overflow-hidden shadow-2xl shadow-black/5 dark:shadow-black/40 h-full flex flex-col",
          children: [_0x2a8a0a.splash_url ? _0x4a2bf5.jsxs(_0x4a2bf5.Fragment, {
            children: [_0x4a2bf5.jsx("img", {
              src: _0x2a8a0a.splash_url,
              alt: "",
              className: "absolute inset-0 w-full h-full object-cover"
            }), _0x4a2bf5.jsx("div", {
              className: "absolute inset-0 bg-black/40"
            }), _0x4a2bf5.jsx("div", {
              className: "absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"
            })]
          }) : _0x4a2bf5.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-br from-surface-overlay via-surface-overlay/95 to-surface-base"
          }), _0x4a2bf5.jsx("div", {
            className: "w-full relative z-[1] flex flex-col items-center justify-center px-6 flex-1",
            children: _0x4a2bf5.jsx("div", {
              className: "w-full max-w-xs",
              children: _0x4a2bf5.jsx("div", {
                className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-transparent",
                children: _0x4a2bf5.jsxs("div", {
                  className: "bg-surface-raised/90 backdrop-blur-xl rounded-2xl overflow-hidden",
                  children: [_0x4a2bf5.jsx("div", {
                    className: "relative w-full h-32 overflow-hidden",
                    children: _0x2a8a0a.banner_url ? _0x4a2bf5.jsxs(_0x4a2bf5.Fragment, {
                      children: [_0x4a2bf5.jsx("img", {
                        src: _0x2a8a0a.banner_url,
                        alt: "",
                        className: "w-full h-full object-cover"
                      }), _0x4a2bf5.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-b from-transparent to-surface-raised/80"
                      })]
                    }) : _0x4a2bf5.jsx("div", {
                      className: "w-full h-full bg-gradient-to-br from-surface-inset/50 via-surface-overlay/50 to-surface-raised/50"
                    })
                  }), _0x4a2bf5.jsx("div", {
                    className: "flex justify-center -mt-11 relative z-10",
                    children: _0x4a2bf5.jsxs(_0x2469ec, {
                      className: "size-20 border-[3px] border-surface-raised shadow-lg",
                      children: [_0x4a2bf5.jsx(_0x223a23, {
                        src: _0x2a8a0a.avatar_url || undefined,
                        alt: _0x2a8a0a.name
                      }), _0x4a2bf5.jsx(_0x1f9cde, {
                        className: "text-lg font-bold text-text-primary bg-gradient-to-br from-surface-inset to-surface-overlay",
                        children: _0x12ff0f
                      })]
                    })
                  }), _0x4a2bf5.jsxs("div", {
                    className: "px-6 pt-3 pb-6 text-center",
                    children: [_0x4a2bf5.jsx("h2", {
                      className: "text-lg font-semibold text-text-primary",
                      children: _0x2a8a0a.name
                    }), _0x2c4c55?.instanceName && _0x4a2bf5.jsx("div", {
                      className: "flex items-center justify-center gap-1.5 mt-1",
                      children: _0x4a2bf5.jsxs("span", {
                        className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent-primary/10 text-accent-primary text-xs font-medium",
                        children: [_0x4a2bf5.jsxs("svg", {
                          className: "size-3",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          children: [_0x4a2bf5.jsx("circle", {
                            cx: "12",
                            cy: "12",
                            r: "10"
                          }), _0x4a2bf5.jsx("path", {
                            d: "M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                          })]
                        }), _0x2c4c55.instanceName]
                      })
                    }), _0x2a8a0a.description && _0x4a2bf5.jsx("p", {
                      className: "text-sm text-text-tertiary mt-0.5 leading-relaxed line-clamp-2",
                      children: _0x2a8a0a.description
                    }), _0x4a2bf5.jsxs("div", {
                      className: "flex items-center justify-center gap-3 mt-2.5",
                      children: [_0x2a8a0a.online_count > 0 && _0x4a2bf5.jsxs("div", {
                        className: "flex items-center gap-1.5",
                        children: [_0x4a2bf5.jsx("span", {
                          className: "size-2 rounded-full bg-emerald-400"
                        }), _0x4a2bf5.jsxs("span", {
                          className: "text-xs text-text-tertiary",
                          children: [_0x2a8a0a.online_count.toLocaleString(), " ", _0x35846e("invite.modal.online")]
                        })]
                      }), _0x2a8a0a.member_count > 0 && _0x4a2bf5.jsxs("div", {
                        className: "flex items-center gap-1.5",
                        children: [_0x4a2bf5.jsx("span", {
                          className: "size-2 rounded-full bg-surface-inset"
                        }), _0x4a2bf5.jsxs("span", {
                          className: "text-xs text-text-tertiary",
                          children: [_0x2a8a0a.member_count.toLocaleString(), " ", _0x35846e("invite.modal.members")]
                        })]
                      })]
                    }), _0x4a2bf5.jsx("div", {
                      className: "mt-4",
                      children: _0x1e7ec9 ? _0x4a2bf5.jsxs("div", {
                        className: "space-y-2",
                        children: [_0x4a2bf5.jsxs("div", {
                          className: "flex items-center justify-center gap-1.5 text-emerald-400 text-xs",
                          children: [_0x4a2bf5.jsx(_0x139123, {
                            className: "size-3.5"
                          }), _0x4a2bf5.jsx("span", {
                            children: _0x35846e("invite.modal.alreadyMember")
                          })]
                        }), _0x4a2bf5.jsx("button", {
                          onClick: _0x11d2fa,
                          className: "w-full h-10 rounded-xl bg-surface-inset/60 border border-border-subtle hover:bg-surface-inset/50 text-text-primary text-sm font-medium transition-colors cursor-pointer",
                          children: _0x35846e("invite.modal.goToServer")
                        })]
                      }) : _0x4a2bf5.jsx("button", {
                        onClick: _0x1e6a09,
                        disabled: _0xd04014,
                        className: "w-full h-10 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer",
                        children: _0xd04014 ? _0x4a2bf5.jsxs(_0x4a2bf5.Fragment, {
                          children: [_0x4a2bf5.jsx(_0x155f15, {
                            className: "size-4 animate-spin"
                          }), _0x35846e("invite.modal.joining")]
                        }) : _0x35846e("invite.modal.joinServer")
                      })
                    })]
                  })]
                })
              })
            })
          })]
        })]
      })
    }), _0x27586a && _0x2a8a0a && _0x193af8 && _0x4a2bf5.jsx(_0x2045b6, {
      open: _0x27586a,
      onClose: () => {
        _0x1a31d1(false);
        _0x37d897();
      },
      guildId: _0x193af8,
      guildName: _0x2a8a0a.name,
      guildAvatarUrl: _0x2a8a0a.avatar_url,
      guildSplashUrl: _0x2a8a0a.splash_url || _0x2a8a0a.banner_url,
      guildDescription: _0x2a8a0a.description,
      guildMemberCount: _0x2a8a0a.member_count,
      guildOnlineCount: _0x2a8a0a.online_count,
      questions: _0x353cb9,
      pending: _0x3c430c
    })]
  });
});
export { N as default };