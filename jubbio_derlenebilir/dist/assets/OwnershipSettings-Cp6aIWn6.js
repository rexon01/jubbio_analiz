import { R as _0x23c72b, b as _0x5aab49, f as _0x163f60, b2 as _0x3c3917, r as _0x20192e, P as _0x57144b, j as _0x10a381, I as _0x18645e, X as _0x1a288d } from "./index-cQfEKR1W.js";
import { V as _0x3f4e2b } from "./index-Oyyh46KT.js";
import { M as _0x2ad81a } from "./MemberSelector-COJb6MJ2.js";
import _0x47994d from "./TwoFAModal-BM80kxyU.js";
import _0x74eea5 from "./GoogleSignInButton-qzyZ0Qtb.js";
import { D as _0xaafd94, a as _0x39d635, c as _0x41ac00, d as _0x399d31 } from "./dialog-BMMpM7PR.js";
import { A as _0x39870b } from "./arrow-right-DvlsXLCB.js";
import "./input-AMyERYwJ.js";
import "./label-ODyS97Ju.js";
import "./ComparisonTable-DUfwtDVZ.js";
import "./subscription-Cl5JAGbQ.js";
import "./card-Bk6R3tFg.js";
import "./gift-Co-azAyt.js";
import "./index-Bk4sqYoK.js";
import "./input-otp-BJ3P97wC.js";
import "./minus-DgcuZCwQ.js";
import "./2fa-BVSDQ2X9.js";
import "./loader-circle-CTtxa1g9.js";
import "./key-gGt-5vdN.js";
import "./mail-VxBGiXYt.js";
import "./smartphone-CEPSHImI.js";
import "./index-yuEHo9bu.js";
import "./submit-button-B2LF_DTf.js";
const g = ({
  className: _0xd135ab
}) => _0x10a381.jsx(_0x18645e, {
  icon: "solar:transfer-horizontal-bold-duotone",
  className: _0xd135ab
});
const w = _0x23c72b.memo(({
  serverId: _0x4c0ad8
}) => {
  const {
    t: _0x532b57
  } = _0x5aab49();
  const _0x401588 = _0x163f60(_0x1357ed => _0x1357ed.user);
  const _0x36b164 = _0x3c3917(_0x134c84 => _0x134c84.closeServerSettings);
  const [_0x25f401, _0x3faa4a] = _0x20192e.useState(false);
  const [_0x22732b, _0x5910ee] = _0x20192e.useState(null);
  const [_0x6713ec, _0x59b268] = _0x20192e.useState("");
  const [_0xf37a5a, _0x3feec6] = _0x20192e.useState([]);
  const [_0xd39cf4, _0x168734] = _0x20192e.useState(false);
  const [_0x194618, _0x401f18] = _0x20192e.useState("");
  const [_0xd10cd9, _0x4d65e0] = _0x20192e.useState(false);
  const [_0x28664b, _0x1aecfd] = _0x20192e.useState(false);
  const [_0x4f3323, _0x4b92d3] = _0x20192e.useState(false);
  const [_0x11e97d, _0xbd7448] = _0x20192e.useState(false);
  const [_0x1885a9, _0x462775] = _0x20192e.useState("app");
  const [_0x16a542, _0x5150d5] = _0x20192e.useState(null);
  const _0x22693f = _0x401588?.has_password ?? true;
  const _0x42883e = _0x20192e.useMemo(() => {
    if (!_0x401588) {
      return "U";
    }
    return (_0x401588.display_name || _0x401588.username).split(" ").map(_0x24100e => _0x24100e[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
  }, [_0x401588]);
  const _0x2f7b00 = _0x20192e.useMemo(() => _0x401588 ? _0x401588.display_name || _0x401588.username : _0x532b57("serverSettings.ownership.loading"), [_0x401588]);
  const _0x373e90 = _0x20192e.useMemo(() => {
    if (!_0x22732b) {
      return "?";
    }
    const _0x22b2de = _0x22732b.display_name || _0x22732b.username;
    return _0x22b2de?.split(" ").map(_0x5a8897 => _0x5a8897[0]).filter(Boolean).slice(0, 2).join("").toUpperCase() || "?";
  }, [_0x22732b]);
  const _0x1a7403 = _0x20192e.useMemo(() => _0x22732b ? _0x22732b.display_name || _0x22732b.username : _0x532b57("serverSettings.ownership.notSelected"), [_0x22732b]);
  const _0x512ff5 = _0x20192e.useCallback((_0x1a59c4, _0x5ed183) => {
    _0x3feec6(_0x1a59c4);
    if (_0x1a59c4.length > 0) {
      const _0x14f23f = _0x1a59c4[0];
      const _0x36c3c1 = _0x5ed183.find(_0x43c9b7 => String(_0x43c9b7.user_id || _0x43c9b7.id) === _0x14f23f);
      if (_0x36c3c1) {
        _0x5910ee(_0x36c3c1);
        _0x3faa4a(false);
      }
    } else {
      _0x5910ee(null);
    }
  }, []);
  const _0x59f81d = _0x20192e.useCallback(() => {
    _0x5910ee(null);
    _0x3feec6([]);
  }, []);
  const _0x10bed9 = _0x20192e.useCallback(() => {
    if (_0x22732b) {
      _0x168734(true);
    }
  }, [_0x22732b]);
  const _0x28608f = _0x20192e.useCallback(async () => {
    if (!_0x194618 || !_0x22732b) {
      return;
    }
    const _0x386f0f = String(_0x22732b.user_id || _0x22732b.id);
    const {
      accessToken: _0x42074c
    } = _0x163f60.getState();
    if (_0x42074c) {
      try {
        _0x1aecfd(true);
        _0x57144b.loading(_0x532b57("serverSettings.ownership.transferLoading"), {
          id: "transfer-ownership"
        });
        const _0x37917f = await fetch("https://gateway.jubbio.com/api/v1/guilds/" + _0x4c0ad8 + "/ownership", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + _0x42074c
          },
          credentials: "include",
          body: JSON.stringify({
            new_owner_id: _0x386f0f,
            password: _0x194618
          })
        });
        const _0x4b175b = await _0x37917f.json();
        if (_0x37917f.status === 400 && _0x4b175b.requires2FA) {
          _0x57144b.dismiss("transfer-ownership");
          _0x5150d5({
            newOwnerId: _0x386f0f,
            password: _0x194618
          });
          _0x462775(_0x4b175b.twoFactorMethod || "app");
          _0x168734(false);
          _0xbd7448(true);
          return;
        }
        if (!_0x37917f.ok) {
          const _0x3ba155 = _0x4b175b.error || _0x4b175b.message || _0x532b57("serverSettings.ownership.transferFailed");
          throw new Error(_0x3ba155);
        }
        _0x57144b.success(_0x532b57("serverSettings.ownership.transferSuccess"), {
          id: "transfer-ownership"
        });
        setTimeout(() => {
          _0x36b164();
        }, 3000);
        _0x168734(false);
        _0x401f18("");
        _0x4d65e0(false);
        _0x5910ee(null);
        _0x3feec6([]);
      } catch (_0x2f05ec) {
        console.error("Transfer ownership error:", _0x2f05ec);
        _0x57144b.error(_0x2f05ec.message || _0x532b57("serverSettings.ownership.transferFailed"), {
          id: "transfer-ownership"
        });
      } finally {
        _0x1aecfd(false);
      }
    } else {
      _0x57144b.error(_0x532b57("serverSettings.ownership.sessionNotFound"));
    }
  }, [_0x194618, _0x22732b, _0x4c0ad8, _0x36b164]);
  const _0x573b00 = _0x20192e.useCallback(async _0x2e6a1f => {
    if (!_0x22732b) {
      return;
    }
    const _0xf0ee4a = String(_0x22732b.user_id || _0x22732b.id);
    const {
      accessToken: _0x1ab784
    } = _0x163f60.getState();
    if (_0x1ab784) {
      try {
        _0x4b92d3(true);
        _0x57144b.loading(_0x532b57("serverSettings.ownership.transferLoading"), {
          id: "transfer-ownership"
        });
        const _0xa05d3f = await fetch("https://gateway.jubbio.com/api/v1/guilds/" + _0x4c0ad8 + "/ownership", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + _0x1ab784
          },
          credentials: "include",
          body: JSON.stringify({
            new_owner_id: _0xf0ee4a,
            google_id_token: _0x2e6a1f
          })
        });
        const _0x2e2937 = await _0xa05d3f.json();
        if (_0xa05d3f.status === 400 && _0x2e2937.requires2FA) {
          _0x57144b.dismiss("transfer-ownership");
          _0x5150d5({
            newOwnerId: _0xf0ee4a,
            google_id_token: _0x2e6a1f
          });
          _0x462775(_0x2e2937.twoFactorMethod || "app");
          _0x168734(false);
          _0xbd7448(true);
          return;
        }
        if (!_0xa05d3f.ok) {
          throw new Error(_0x2e2937.error || _0x2e2937.message || _0x532b57("serverSettings.ownership.transferFailed"));
        }
        _0x57144b.success(_0x532b57("serverSettings.ownership.transferSuccess"), {
          id: "transfer-ownership"
        });
        setTimeout(() => {
          _0x36b164();
        }, 3000);
        _0x168734(false);
        _0x5910ee(null);
        _0x3feec6([]);
      } catch (_0x1227b9) {
        console.error("Transfer ownership (Google) error:", _0x1227b9);
        _0x57144b.error(_0x1227b9.message || _0x532b57("serverSettings.ownership.transferFailed"), {
          id: "transfer-ownership"
        });
      } finally {
        _0x4b92d3(false);
      }
    } else {
      _0x57144b.error(_0x532b57("serverSettings.ownership.sessionNotFound"));
    }
  }, [_0x22732b, _0x4c0ad8, _0x36b164]);
  const _0xc06cbf = _0x20192e.useCallback(async (_0x433301, _0x5cb4b0) => {
    if (!_0x16a542) {
      return;
    }
    const {
      accessToken: _0x349f7b
    } = _0x163f60.getState();
    if (_0x349f7b) {
      try {
        _0x1aecfd(true);
        _0x57144b.loading(_0x532b57("serverSettings.ownership.transferLoading"), {
          id: "transfer-ownership"
        });
        const _0xfa24c6 = await fetch("https://gateway.jubbio.com/api/v1/guilds/" + _0x4c0ad8 + "/ownership", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + _0x349f7b
          },
          credentials: "include",
          body: JSON.stringify({
            new_owner_id: _0x16a542.newOwnerId,
            ...(_0x16a542.password && {
              password: _0x16a542.password
            }),
            ...(_0x16a542.google_id_token && {
              google_id_token: _0x16a542.google_id_token
            }),
            two_factor_code: _0x433301
          })
        });
        const _0x14b9dd = await _0xfa24c6.json();
        if (!_0xfa24c6.ok) {
          const _0x19e129 = _0x14b9dd.error || _0x14b9dd.message || _0x532b57("serverSettings.ownership.transferFailed");
          throw new Error(_0x19e129);
        }
        _0x57144b.success(_0x532b57("serverSettings.ownership.transferSuccess"), {
          id: "transfer-ownership"
        });
        setTimeout(() => {
          _0x36b164();
        }, 3000);
        _0xbd7448(false);
        _0x5150d5(null);
        _0x401f18("");
        _0x4d65e0(false);
        _0x5910ee(null);
        _0x3feec6([]);
      } catch (_0x2c7b2c) {
        console.error("Transfer ownership with 2FA error:", _0x2c7b2c);
        _0x57144b.error(_0x2c7b2c.message || _0x532b57("serverSettings.ownership.transferFailed"), {
          id: "transfer-ownership"
        });
        throw _0x2c7b2c;
      } finally {
        _0x1aecfd(false);
      }
    } else {
      _0x57144b.error(_0x532b57("serverSettings.ownership.sessionNotFound"));
    }
  }, [_0x16a542, _0x4c0ad8, _0x36b164]);
  const _0x34a62c = _0x20192e.useCallback(() => {
    _0x168734(false);
    _0x401f18("");
    _0x4d65e0(false);
  }, []);
  const _0x195553 = _0x20192e.useCallback(() => {
    _0xbd7448(false);
    _0x5150d5(null);
  }, []);
  return _0x10a381.jsxs("div", {
    className: "space-y-6",
    children: [_0x10a381.jsxs("section", {
      children: [_0x10a381.jsxs("div", {
        className: "mb-3",
        children: [_0x10a381.jsxs("div", {
          className: "flex items-center gap-2",
          children: [_0x10a381.jsx(_0x18645e, {
            icon: "solar:crown-bold-duotone",
            className: "size-4 text-text-tertiary"
          }), _0x10a381.jsx("div", {
            className: "text-base leading-snug font-semibold text-text-secondary",
            children: _0x532b57("serverSettings.ownership.currentOwner")
          })]
        }), _0x10a381.jsx("p", {
          className: "text-sm leading-snug text-text-muted mt-0.5",
          children: _0x532b57("serverSettings.ownership.currentOwnerDesc")
        })]
      }), _0x10a381.jsxs("div", {
        className: "flex items-center gap-3 p-4 rounded-xl border border-border-default bg-surface-raised/40",
        children: [_0x10a381.jsxs("div", {
          className: "relative",
          children: [_0x401588?.avatar_url ? _0x10a381.jsx("img", {
            src: _0x401588.avatar_url,
            alt: _0x2f7b00,
            className: "size-12 rounded-full object-cover"
          }) : _0x10a381.jsx("div", {
            className: "size-12 rounded-full bg-linear-to-br from-accent-primary/20 to-accent-primary/10 flex items-center justify-center",
            children: _0x10a381.jsx("span", {
              className: "text-lg font-bold text-text-secondary",
              children: _0x42883e
            })
          }), _0x10a381.jsx("div", {
            className: "absolute -bottom-1 -right-1 size-5 rounded-full bg-accent-primary flex items-center justify-center border-2 border-border-strong",
            children: _0x10a381.jsx(_0x18645e, {
              icon: "solar:crown-bold-duotone",
              className: "size-3 text-surface-base"
            })
          })]
        }), _0x10a381.jsxs("div", {
          className: "flex-1",
          children: [_0x10a381.jsx("div", {
            className: "text-sm font-semibold text-text-secondary",
            children: _0x2f7b00
          }), _0x10a381.jsx("p", {
            className: "text-xs text-text-tertiary",
            children: _0x532b57("serverSettings.ownership.serverOwner")
          })]
        }), _0x10a381.jsx("div", {
          className: "px-3 py-1.5 rounded-lg bg-accent-subtle border border-accent-border",
          children: _0x10a381.jsx("span", {
            className: "text-xs font-semibold text-accent-primary-text",
            children: _0x532b57("serverSettings.ownership.ownerBadge")
          })
        })]
      })]
    }), _0x10a381.jsx("div", {
      className: "border-t border-border-default"
    }), _0x10a381.jsxs("section", {
      children: [_0x10a381.jsxs("div", {
        className: "mb-3",
        children: [_0x10a381.jsxs("div", {
          className: "flex items-center gap-2",
          children: [_0x10a381.jsx(g, {
            className: "size-4 text-text-tertiary"
          }), _0x10a381.jsx("div", {
            className: "text-base leading-snug font-semibold text-text-secondary",
            children: _0x532b57("serverSettings.ownership.transferTitle")
          })]
        }), _0x10a381.jsx("p", {
          className: "text-sm leading-snug text-text-muted mt-0.5",
          children: _0x532b57("serverSettings.ownership.transferDesc")
        })]
      }), _0x10a381.jsx("div", {
        className: "p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 mb-4",
        children: _0x10a381.jsxs("div", {
          className: "flex items-start gap-3",
          children: [_0x10a381.jsx("div", {
            className: "size-5 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5",
            children: _0x10a381.jsx("span", {
              className: "text-amber-500 text-xs font-bold",
              children: "!"
            })
          }), _0x10a381.jsxs("div", {
            className: "flex-1 text-xs text-text-secondary space-y-1.5",
            children: [_0x10a381.jsx("p", {
              className: "font-medium text-amber-400",
              children: _0x532b57("serverSettings.ownership.transferWarningTitle")
            }), _0x10a381.jsxs("ul", {
              className: "space-y-1",
              children: [_0x10a381.jsxs("li", {
                className: "flex items-center gap-2",
                children: [_0x10a381.jsx("span", {
                  className: "size-1 rounded-full bg-amber-400/60"
                }), _0x532b57("serverSettings.ownership.transferWarningPerms")]
              }), _0x10a381.jsxs("li", {
                className: "flex items-center gap-2",
                children: [_0x10a381.jsx("span", {
                  className: "size-1 rounded-full bg-amber-400/60"
                }), _0x532b57("serverSettings.ownership.transferWarningLose")]
              }), _0x10a381.jsxs("li", {
                className: "flex items-center gap-2",
                children: [_0x10a381.jsx("span", {
                  className: "size-1 rounded-full bg-amber-400/60"
                }), _0x532b57("serverSettings.ownership.transferWarningIrreversible")]
              })]
            })]
          })]
        })
      }), _0x10a381.jsxs("div", {
        className: "p-4 rounded-xl border border-border-default bg-surface-raised/40",
        children: [_0x10a381.jsxs("div", {
          className: "flex items-center gap-4",
          children: [_0x10a381.jsxs("div", {
            className: "flex-1 flex items-center gap-3",
            children: [_0x10a381.jsxs("div", {
              className: "relative",
              children: [_0x401588?.avatar_url ? _0x10a381.jsx("img", {
                src: _0x401588.avatar_url,
                alt: _0x2f7b00,
                className: "size-10 rounded-full object-cover"
              }) : _0x10a381.jsx("div", {
                className: "size-10 rounded-full bg-linear-to-br from-accent-primary/20 to-accent-primary/10 flex items-center justify-center",
                children: _0x10a381.jsx("span", {
                  className: "text-sm font-bold text-text-secondary",
                  children: _0x42883e
                })
              }), _0x10a381.jsx("div", {
                className: "absolute -bottom-0.5 -right-0.5 size-4 rounded-full bg-accent-primary flex items-center justify-center border-2 border-border-strong",
                children: _0x10a381.jsx(_0x18645e, {
                  icon: "solar:crown-bold-duotone",
                  className: "size-2.5 text-surface-base"
                })
              })]
            }), _0x10a381.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [_0x10a381.jsx("div", {
                className: "text-xs font-medium text-text-secondary truncate",
                children: _0x2f7b00
              }), _0x10a381.jsx("p", {
                className: "text-[11px] text-text-muted",
                children: _0x532b57("serverSettings.ownership.currentOwnerLabel")
              })]
            })]
          }), _0x10a381.jsx("div", {
            className: "shrink-0",
            children: _0x10a381.jsx(_0x39870b, {
              className: "size-5 text-text-muted"
            })
          }), _0x10a381.jsx("div", {
            className: "flex-1 flex items-center gap-3",
            children: _0x22732b ? _0x10a381.jsxs(_0x10a381.Fragment, {
              children: [_0x22732b.avatar_url ? _0x10a381.jsx("img", {
                src: _0x22732b.avatar_url,
                alt: _0x1a7403,
                className: "size-10 rounded-full object-cover"
              }) : _0x10a381.jsx("div", {
                className: "size-10 rounded-full bg-surface-inset flex items-center justify-center",
                children: _0x10a381.jsx("span", {
                  className: "text-sm font-bold text-text-secondary",
                  children: _0x373e90
                })
              }), _0x10a381.jsxs("div", {
                className: "flex-1 min-w-0",
                children: [_0x10a381.jsx("div", {
                  className: "text-xs font-medium text-text-secondary truncate",
                  children: _0x1a7403
                }), _0x10a381.jsx("p", {
                  className: "text-[11px] text-text-muted",
                  children: _0x532b57("serverSettings.ownership.newOwnerLabel")
                })]
              }), _0x10a381.jsx("button", {
                onClick: _0x59f81d,
                className: "size-6 rounded-md flex items-center justify-center hover:bg-surface-inset/50 transition-colors shrink-0",
                title: _0x532b57("serverSettings.ownership.removeSelection"),
                children: _0x10a381.jsx(_0x1a288d, {
                  className: "size-4 text-text-tertiary hover:text-text-secondary"
                })
              })]
            }) : _0x10a381.jsxs("button", {
              onClick: () => _0x3faa4a(true),
              className: "flex items-center gap-3 flex-1 min-w-0 cursor-pointer group",
              children: [_0x10a381.jsx("div", {
                className: "size-10 rounded-full bg-surface-overlay flex items-center justify-center border-2 border-border-default border-dashed group-hover:border-border-default group-hover:bg-surface-inset/50 transition-colors",
                children: _0x10a381.jsx("span", {
                  className: "text-lg text-text-muted group-hover:text-text-tertiary transition-colors",
                  children: "?"
                })
              }), _0x10a381.jsxs("div", {
                className: "flex-1 min-w-0 text-left",
                children: [_0x10a381.jsx("div", {
                  className: "text-xs font-medium text-text-tertiary truncate group-hover:text-text-secondary transition-colors",
                  children: _0x532b57("serverSettings.ownership.selectMemberHint")
                }), _0x10a381.jsx("p", {
                  className: "text-[11px] text-text-muted",
                  children: _0x532b57("serverSettings.ownership.newOwnerLabel")
                })]
              })]
            })
          })]
        }), _0x10a381.jsx("button", {
          onClick: () => _0x3faa4a(true),
          className: "w-full mt-4 py-2.5 px-4 rounded-lg border border-border-default bg-surface-overlay/40 text-sm font-medium text-text-secondary hover:bg-surface-overlay/60 hover:border-border-default transition-colors",
          children: _0x532b57(_0x22732b ? "serverSettings.ownership.changeMember" : "serverSettings.ownership.selectMember")
        })]
      }), _0x10a381.jsx("div", {
        className: "mt-4 overflow-hidden transition-all duration-300 ease-out " + (_0x22732b ? "max-h-20 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"),
        children: _0x10a381.jsx("button", {
          onClick: _0x10bed9,
          disabled: _0x28664b,
          className: "w-full py-3 px-4 rounded-lg font-semibold text-sm transition-colors bg-red-500/10 hover:bg-red-500/15 border border-red-500/20 hover:border-red-500/30 text-red-400 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
          children: _0x10a381.jsxs("div", {
            className: "flex items-center justify-center gap-2",
            children: [_0x28664b ? _0x10a381.jsx("div", {
              className: "size-4 border-2 border-red-400/30 border-t-red-400 rounded-full animate-spin"
            }) : _0x10a381.jsx(_0x18645e, {
              icon: "solar:crown-bold-duotone",
              className: "size-4"
            }), _0x10a381.jsx("span", {
              children: _0x532b57(_0x28664b ? "serverSettings.ownership.transferring" : "serverSettings.ownership.transferButton")
            })]
          })
        })
      })]
    }), _0x10a381.jsx(_0xaafd94, {
      open: _0x25f401,
      onOpenChange: _0x3faa4a,
      children: _0x10a381.jsxs(_0x39d635, {
        className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-lg overflow-hidden",
        children: [_0x10a381.jsxs(_0x3f4e2b, {
          children: [_0x10a381.jsx(_0x41ac00, {
            children: _0x532b57("serverSettings.ownership.selectNewOwner")
          }), _0x10a381.jsx(_0x399d31, {
            children: _0x532b57("serverSettings.ownership.selectNewOwnerDesc")
          })]
        }), _0x10a381.jsx("div", {
          className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40",
          children: _0x10a381.jsxs("div", {
            className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col max-h-[80vh]",
            children: [_0x10a381.jsxs("div", {
              className: "px-4 py-4 border-b border-border-subtle",
              children: [_0x10a381.jsx("h2", {
                className: "text-lg font-semibold text-text-primary",
                children: _0x532b57("serverSettings.ownership.selectNewOwner")
              }), _0x10a381.jsx("p", {
                className: "text-sm text-text-tertiary mt-1",
                children: _0x532b57("serverSettings.ownership.selectNewOwnerDesc")
              })]
            }), _0x10a381.jsx("div", {
              className: "px-4 py-4 flex-1 overflow-hidden",
              children: _0x10a381.jsx(_0x2ad81a, {
                guildId: _0x4c0ad8,
                isOpen: _0x25f401,
                searchQuery: _0x6713ec,
                onSearchQueryChange: _0x59b268,
                selectedMemberIds: _0xf37a5a,
                onSelectedMembersChange: _0x512ff5,
                showBadge: false,
                showLabel: false,
                filterOwner: true,
                ownerUserId: _0x401588?.id,
                height: "400px"
              })
            }), _0x10a381.jsx("div", {
              className: "sticky bottom-0 px-4 py-3 border-t border-border-subtle",
              children: _0x10a381.jsx("button", {
                onClick: () => _0x3faa4a(false),
                className: "w-full h-10 rounded-xl text-sm font-medium text-text-secondary bg-surface-inset/40 border border-border-subtle hover:bg-interactive-muted transition-colors cursor-pointer",
                children: _0x532b57("serverSettings.ownership.cancelButton")
              })
            })]
          })
        })]
      })
    }), _0x10a381.jsx(_0xaafd94, {
      open: _0xd39cf4,
      onOpenChange: _0x34a62c,
      children: _0x10a381.jsxs(_0x39d635, {
        className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md overflow-hidden",
        children: [_0x10a381.jsxs(_0x3f4e2b, {
          children: [_0x10a381.jsx(_0x41ac00, {
            children: _0x532b57("serverSettings.ownership.passwordTitle")
          }), _0x10a381.jsx(_0x399d31, {
            children: _0x532b57("serverSettings.ownership.passwordDesc")
          })]
        }), _0x10a381.jsx("div", {
          className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40",
          children: _0x10a381.jsxs("div", {
            className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col",
            children: [_0x10a381.jsxs("div", {
              className: "px-4 py-4 border-b border-border-subtle",
              children: [_0x10a381.jsx("h2", {
                className: "text-lg font-semibold text-text-primary",
                children: _0x532b57("serverSettings.ownership.passwordTitle")
              }), _0x10a381.jsx("p", {
                className: "text-sm text-text-tertiary mt-1",
                children: _0x532b57("serverSettings.ownership.passwordDesc")
              })]
            }), _0x10a381.jsx("div", {
              className: "px-4 py-4 space-y-2",
              children: _0x22693f ? _0x10a381.jsxs(_0x10a381.Fragment, {
                children: [_0x10a381.jsx("label", {
                  className: "text-sm font-medium text-text-secondary",
                  children: _0x532b57("serverSettings.ownership.passwordLabel")
                }), _0x10a381.jsxs("div", {
                  className: "relative",
                  children: [_0x10a381.jsx("input", {
                    type: _0xd10cd9 ? "text" : "password",
                    value: _0x194618,
                    onChange: _0x5d73f6 => _0x401f18(_0x5d73f6.target.value),
                    placeholder: _0x532b57("serverSettings.ownership.passwordPlaceholder"),
                    className: "w-full h-10 rounded-xl bg-surface-inset/40 border border-border-subtle text-text-secondary placeholder:text-text-muted px-3 pr-10 text-sm focus:outline-none focus:border-red-500/50 transition-colors",
                    autoComplete: "current-password",
                    onKeyDown: _0x4711d0 => {
                      if (_0x4711d0.key === "Enter" && _0x194618) {
                        _0x28608f();
                      }
                    }
                  }), _0x10a381.jsx("button", {
                    type: "button",
                    onClick: () => _0x4d65e0(!_0xd10cd9),
                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-secondary transition-colors",
                    children: _0xd10cd9 ? _0x10a381.jsx(_0x18645e, {
                      icon: "solar:eye-closed-bold-duotone",
                      className: "h-4 w-4"
                    }) : _0x10a381.jsx(_0x18645e, {
                      icon: "solar:eye-bold-duotone",
                      className: "h-4 w-4"
                    })
                  })]
                })]
              }) : _0x10a381.jsxs("div", {
                className: "space-y-3",
                children: [_0x10a381.jsx("p", {
                  className: "text-sm text-text-secondary",
                  children: _0x532b57("serverSettings.ownership.googleVerifyDesc")
                }), _0x10a381.jsx(_0x74eea5, {
                  onIdToken: _0x573b00,
                  disabled: _0x4f3323,
                  isLoading: _0x4f3323
                })]
              })
            }), _0x10a381.jsxs("div", {
              className: "sticky bottom-0 px-4 py-3 border-t border-border-subtle flex gap-3",
              children: [_0x10a381.jsx("button", {
                onClick: _0x34a62c,
                disabled: _0x28664b || _0x4f3323,
                className: "flex-1 h-10 rounded-xl text-sm font-medium text-text-secondary bg-surface-inset/40 border border-border-subtle hover:bg-interactive-muted transition-colors cursor-pointer disabled:opacity-50",
                children: _0x532b57("serverSettings.ownership.cancelButton")
              }), _0x22693f && _0x10a381.jsx("button", {
                onClick: _0x28608f,
                disabled: !_0x194618 || _0x28664b,
                className: "flex-1 h-10 rounded-xl text-sm font-semibold transition-colors cursor-pointer disabled:cursor-not-allowed disabled:bg-surface-inset disabled:text-text-tertiary bg-red-500 hover:bg-red-600 text-text-primary",
                children: _0x28664b ? _0x10a381.jsxs("div", {
                  className: "flex items-center justify-center gap-2",
                  children: [_0x10a381.jsx("div", {
                    className: "size-4 border-2 border-border-default border-t-white rounded-full animate-spin"
                  }), _0x532b57("serverSettings.ownership.verifying")]
                }) : _0x532b57("serverSettings.ownership.confirm")
              })]
            })]
          })
        })]
      })
    }), _0x11e97d && _0x10a381.jsx(_0x47994d, {
      isOpen: _0x11e97d,
      onClose: _0x195553,
      onVerify: _0xc06cbf,
      twoFactorType: _0x1885a9,
      isLoading: _0x28664b
    })]
  });
});
export { w as default };