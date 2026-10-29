import { R as _0x2dbd11, b as _0x3bc4b7, r, e7 as _0x380d82, ei as _0x4b3994, ej as _0x5d7fb8, j as _0x819580, I as _0x535cc7, P as _0xedc590, ef as _0x2efb85, aG as _0x495663, dw as _0x18bb23, dO as _0x3dfc6c, aN as _0x198533, as as _0x4175c4, at as _0x2fa511, B as _0x41a2bf, au as _0x33347a, dd as _0x4d7e0c, aw as _0x27b843, eF as _0x16bdfe } from "./index-cQfEKR1W.js";
import { x as _0x1634a3 } from "./soundboardFx-C2LP-Hjs.js";
import { u as _0x2de269 } from "./useGlobalKeyboard-Woyx4Cai.js";
import { u as _0x5b7a66, f as _0x3f23f2, g as _0x234204, a as _0xd023a8, b as _0x1b35e5 } from "./index-DmnqsUkn.js";
import { T as _0x5307a1, a as _0x1a3857, b as _0x20c06d, c as _0x47e922, d as _0x4b3cb9, e as _0x3d76bf } from "./ComparisonTable-DUfwtDVZ.js";
import { I } from "./input-AMyERYwJ.js";
import { A as _0x4f894a, a as _0x3f9c3f, b as _0x387709 } from "./avatar-C-4BWxT3.js";
import { C as _0x1785a3 } from "./checkbox-6NFFWv4U.js";
import { P as _0x2a6db6, a as _0x412de7, b as _0x350a5c } from "./tr-D975n4_R.js";
import { u as _0x20503f } from "./AppLayout-BEBJqe9_.js";
import { C as _0x513be5 } from "./ConfirmDialog-B4gIndKy.js";
import _0x5bcb2a from "./ModerationSheet-CqLxYHCF.js";
import { S as _0x20f3f9 } from "./separator-Ba6vNTx4.js";
import "./index-BUijt7wr.js";
import "./subscription-Cl5JAGbQ.js";
import "./card-Bk6R3tFg.js";
import "./gift-Co-azAyt.js";
import "./select-DQjjzSZW.js";
import "./index-Oyyh46KT.js";
import "./arrow-left-B3FhifN2.js";
import "./arrow-right-DvlsXLCB.js";
import "./loader-circle-CTtxa1g9.js";
import "./switch-lfnbGePn.js";
import "./drawer-X7YyCqpZ.js";
import "./index-yuEHo9bu.js";
import "./useTheme-CzNZmxfV.js";
import "./CheckoutPlaceholder-Dr0TfmeQ.js";
import "./IyzicoCheckoutFrame-f1WDW5o8.js";
import "./zap-B3VH4qT9.js";
import "./dialog-BMMpM7PR.js";
import "./submit-button-B2LF_DTf.js";
import "./NexusSuccessArtwork-YGvslhff.js";
import "./circle-x-BBSKKBIf.js";
import "./user-DSjlY8FD.js";
import "./refresh-cw-C3NlhmpS.js";
import "./trash-2-DuFcDcAU.js";
import "./clipboard-BQ9qambq.js";
import "./label-ODyS97Ju.js";
import "./video-AtsAgCNJ.js";
import "./plus-B7c2Px8R.js";
import "./channelNotificationStore-FXjXBmS_.js";
import "./index.module-CsHioFCV.js";
import "./alert-dialog-BZuoGg7O.js";
import "./ModerationModal-CS_sqQfM.js";
const q = ({
  className: _0x4f9da1
}) => _0x819580.jsx(_0x535cc7, {
  icon: "solar:refresh-bold-duotone",
  className: _0x4f9da1
});
const W = _0x2dbd11.memo(({
  guildId: _0x265d98,
  userIds: _0x18fc0e,
  assignedRoleNames: _0x38b792,
  onRoleAdded: _0x2d080f,
  onRoleRemoved: _0x14e5c6,
  children: _0x30132c,
  side: _0x531d13 = "right",
  align: _0x3645f3 = "start",
  open: _0x32cc36,
  onOpenChange: _0x4f555a
}) => {
  const {
    t: _0x575d4d
  } = _0x3bc4b7();
  const [_0x1ab461, _0x23d5a1] = r.useState("");
  const [_0x29ca14, _0x16a3fc] = r.useState(null);
  const _0x361303 = _0x380d82(_0x265d98);
  const _0xd2d5fd = r.useCallback(async _0x1f8c94 => {
    if (!_0x265d98 || _0x18fc0e.length === 0 || _0x29ca14) {
      return;
    }
    const _0x40a479 = _0x38b792.some(_0x40919c => _0x40919c === _0x1f8c94.name);
    _0x16a3fc(_0x1f8c94.id);
    try {
      if (_0x40a479) {
        await _0x4b3994(_0x265d98, _0x1f8c94.id, _0x18fc0e);
        _0x14e5c6?.(_0x1f8c94);
      } else {
        await _0x5d7fb8(_0x265d98, _0x1f8c94.id, _0x18fc0e);
        _0x2d080f?.(_0x1f8c94);
      }
    } catch {} finally {
      _0x16a3fc(null);
    }
  }, [_0x265d98, _0x18fc0e, _0x29ca14, _0x38b792, _0x2d080f, _0x14e5c6]);
  const _0x5ae99b = r.useCallback(_0x190c32 => {
    if (!_0x190c32) {
      _0x23d5a1("");
    }
    _0x4f555a?.(_0x190c32);
  }, [_0x4f555a]);
  const _0x15990e = _0x361303.filter(_0xf13441 => _0xf13441.name !== "all" && _0xf13441.name !== "@everyone");
  return _0x819580.jsxs(_0x2a6db6, {
    open: _0x32cc36,
    onOpenChange: _0x5ae99b,
    children: [_0x819580.jsx(_0x412de7, {
      asChild: true,
      children: _0x30132c
    }), _0x819580.jsxs(_0x350a5c, {
      className: "w-56 p-0 bg-surface-overlay/95 backdrop-blur-xl border-border-subtle",
      side: _0x531d13,
      align: _0x3645f3,
      sideOffset: 8,
      collisionPadding: 16,
      avoidCollisions: true,
      onOpenAutoFocus: _0x49241a => _0x49241a.preventDefault(),
      children: [_0x819580.jsx("div", {
        className: "p-2 border-b border-border-default",
        children: _0x819580.jsxs("div", {
          className: "flex items-center gap-2 px-2 h-8 rounded-md bg-surface-inset/40 border border-border-default",
          children: [_0x819580.jsx(_0x535cc7, {
            icon: "solar:magnifer-bold-duotone",
            className: "size-3.5 text-text-muted shrink-0"
          }), _0x819580.jsx("input", {
            type: "text",
            value: _0x1ab461,
            onChange: _0x1ab494 => _0x23d5a1(_0x1ab494.target.value),
            placeholder: _0x575d4d("userDetailsPopover.searchRoles"),
            className: "flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none",
            autoFocus: true
          })]
        })
      }), _0x819580.jsx("div", {
        className: "max-h-60 overflow-y-auto p-1 scrollbar-thin",
        children: _0x15990e.length === 0 ? _0x819580.jsx("div", {
          className: "flex items-center justify-center py-4",
          children: _0x819580.jsx(q, {
            className: "size-4 text-text-muted animate-spin"
          })
        }) : (() => {
          const _0x103f2c = _0x15990e.filter(_0x4c0de4 => !_0x1ab461 || _0x4c0de4.name?.toLowerCase().includes(_0x1ab461.toLowerCase()));
          if (_0x103f2c.length === 0) {
            return _0x819580.jsx("p", {
              className: "px-3 py-2 text-xs text-text-muted italic",
              children: _0x575d4d("userDetailsPopover.noRolesFound")
            });
          } else {
            return _0x103f2c.map(_0x1a4166 => {
              const _0xf00a6a = _0x38b792.some(_0x5d52c2 => _0x5d52c2 === _0x1a4166.name);
              const _0x22d664 = _0x29ca14 === _0x1a4166.id;
              const _0x237702 = _0x29ca14 !== null && !_0x22d664;
              const _0x4c52ab = _0x1a4166.color ? typeof _0x1a4166.color == "number" ? "#" + _0x1a4166.color.toString(16).padStart(6, "0") : String(_0x1a4166.color) : undefined;
              return _0x819580.jsxs("button", {
                onClick: () => _0xd2d5fd(_0x1a4166),
                disabled: _0x237702 || _0x22d664,
                className: "w-full flex items-center gap-2.5 px-3 py-1.5 rounded-md text-sm transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed text-left hover:bg-surface-inset/50",
                children: [_0x819580.jsx("span", {
                  className: "truncate flex-1 font-medium",
                  style: {
                    color: _0x4c52ab || undefined
                  },
                  children: _0x1a4166.name
                }), _0x819580.jsx("div", {
                  className: "size-4 shrink-0 flex items-center justify-center",
                  children: _0x22d664 ? _0x819580.jsx(q, {
                    className: "size-3.5 text-accent-primary-text animate-spin"
                  }) : _0x819580.jsx("div", {
                    className: "size-4 rounded border-2 transition-colors " + (_0xf00a6a ? "bg-accent-primary border-accent-primary" : "border-border-strong bg-transparent"),
                    children: _0xf00a6a && _0x819580.jsx("svg", {
                      className: "size-full text-black",
                      viewBox: "0 0 12 12",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      children: _0x819580.jsx("path", {
                        d: "M2.5 6L5 8.5L9.5 3.5"
                      })
                    })
                  })
                })]
              }, _0x1a4166.id);
            });
          }
        })()
      })]
    })]
  });
});
const V = ({
  className: _0x463810
}) => _0x819580.jsx(_0x535cc7, {
  icon: "solar:user-minus-bold-duotone",
  className: _0x463810
});
const Z = ({
  isOpen: _0x5a414f,
  onClose: _0x422ea1,
  selectedMembers: _0x5101fe,
  serverId: _0x51d6e5,
  onSuccess: _0xf0b2f3
}) => {
  const [_0x273028, _0x42fc0b] = r.useState(false);
  const {
    t: _0x567f44
  } = _0x3bc4b7();
  const _0x131d00 = _0x5101fe.some(_0xd15fa8 => _0xd15fa8.isOwner);
  const _0x51b89e = _0x5101fe.filter(_0x378108 => !_0x378108.isOwner);
  const _0x6aeb70 = _0x51b89e.length;
  return _0x819580.jsx(_0x513be5, {
    open: _0x5a414f,
    onOpenChange: _0x422ea1,
    onConfirm: async () => {
      if (_0x6aeb70 !== 0) {
        if (_0x6aeb70 > 10) {
          _0xedc590.error(_0x567f44("moderation.maxBulkKick"));
        } else {
          _0x42fc0b(true);
          try {
            const _0x44ece7 = _0x51b89e.map(_0x2dada0 => String(_0x2dada0.user_id));
            await _0x2efb85(_0x51d6e5, _0x44ece7);
            _0xf0b2f3();
            _0x422ea1();
          } catch (_0x4a04f9) {} finally {
            _0x42fc0b(false);
          }
        }
      } else {
        _0xedc590.error(_0x567f44("moderation.noKickableMembers"));
      }
    },
    isLoading: _0x273028,
    variant: "danger",
    icon: _0x819580.jsx(V, {
      className: "size-5 text-red-400"
    }),
    title: _0x567f44("moderation.bulkKickTitle"),
    description: _0x819580.jsxs(_0x819580.Fragment, {
      children: [_0x567f44("moderation.bulkKickDesc"), _0x819580.jsx("div", {
        className: "mt-3 max-h-40 overflow-y-auto space-y-2",
        children: _0x5101fe.map(_0x2daf7e => _0x819580.jsxs("div", {
          className: "flex items-center gap-3 p-2 rounded-lg " + (_0x2daf7e.isOwner ? "bg-yellow-500/10 border border-yellow-500/20" : "bg-surface-overlay/40 border border-border-default"),
          children: [_0x819580.jsx(_0x4f894a, {
            className: "h-8 w-8",
            children: _0x819580.jsx("div", {
              className: "w-full h-full bg-surface-inset rounded-full flex items-center justify-center text-sm font-semibold text-text-secondary",
              children: (_0x2daf7e.display_name || _0x2daf7e.username).charAt(0).toUpperCase()
            })
          }), _0x819580.jsxs("div", {
            className: "flex-1 min-w-0",
            children: [_0x819580.jsxs("div", {
              className: "flex items-center gap-2",
              children: [_0x819580.jsx("span", {
                className: "font-medium " + (_0x2daf7e.isOwner ? "text-yellow-400" : "text-text-secondary"),
                children: _0x2daf7e.display_name || _0x2daf7e.username
              }), _0x2daf7e.isOwner && _0x819580.jsx(_0x535cc7, {
                icon: "solar:crown-bold-duotone",
                className: "w-4 h-4 text-yellow-500"
              })]
            }), _0x819580.jsxs("span", {
              className: "text-xs text-text-tertiary",
              children: ["@", _0x2daf7e.username]
            })]
          }), _0x2daf7e.isOwner && _0x819580.jsx("div", {
            className: "text-xs text-yellow-400 bg-yellow-500/20 px-2 py-1 rounded",
            children: _0x567f44("moderation.serverOwner")
          })]
        }, _0x2daf7e.id))
      }), _0x131d00 && _0x819580.jsxs("div", {
        className: "mt-3 flex items-start gap-2 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg",
        children: [_0x819580.jsx(_0x535cc7, {
          icon: "solar:danger-triangle-bold-duotone",
          className: "w-5 h-5 text-yellow-500 mt-0.5 shrink-0"
        }), _0x819580.jsxs("div", {
          className: "text-sm text-yellow-300",
          children: [_0x819580.jsx("p", {
            className: "font-medium",
            children: _0x567f44("moderation.ownerCannotBeKicked")
          }), _0x819580.jsx("p", {
            className: "text-yellow-400/80 mt-1",
            children: _0x567f44("moderation.ownerCannotBeKickedDesc")
          })]
        })]
      }), _0x6aeb70 > 10 && _0x819580.jsxs("div", {
        className: "mt-3 flex items-start gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg",
        children: [_0x819580.jsx(_0x535cc7, {
          icon: "solar:danger-triangle-bold-duotone",
          className: "w-5 h-5 text-red-500 mt-0.5 shrink-0"
        }), _0x819580.jsxs("div", {
          className: "text-sm text-red-300",
          children: [_0x819580.jsx("p", {
            className: "font-medium",
            children: _0x567f44("moderation.tooManySelected")
          }), _0x819580.jsx("p", {
            className: "text-red-400/80 mt-1",
            children: _0x567f44("moderation.tooManySelectedDesc")
          })]
        })]
      }), _0x819580.jsx("div", {
        className: "mt-3 text-sm text-text-secondary",
        children: _0x819580.jsxs("p", {
          children: [_0x819580.jsx("span", {
            className: "font-medium",
            children: _0x6aeb70
          }), " ", _0x567f44("moderation.membersToKick", {
            count: _0x6aeb70
          }).replace(_0x6aeb70 + " ", ""), _0x131d00 && _0x819580.jsxs("span", {
            className: "text-yellow-400 ml-1",
            children: ["• ", _0x567f44("moderation.membersCannotKick", {
              count: _0x5101fe.length - _0x6aeb70
            })]
          })]
        })
      })]
    }),
    confirmText: _0x567f44("moderation.kickCount", {
      count: _0x6aeb70
    }),
    cancelText: _0x567f44("moderation.cancelBtn")
  });
};
const J = ({
  className: _0x3306f1
}) => _0x819580.jsx(_0x535cc7, {
  icon: "solar:user-minus-bold-duotone",
  className: _0x3306f1
});
const Q = ({
  isOpen: _0x205849,
  onClose: _0x3d9401,
  member: _0x398c63,
  serverId: _0x1e162f,
  onSuccess: _0x54618a
}) => {
  const [_0x2821a2, _0x573598] = r.useState(false);
  const {
    t: _0x4c6b68
  } = _0x3bc4b7();
  if (_0x398c63.isOwner) {
    return _0x819580.jsx(_0x513be5, {
      open: _0x205849,
      onOpenChange: _0x3d9401,
      onConfirm: () => _0x3d9401(),
      variant: "warning",
      icon: _0x819580.jsx(_0x535cc7, {
        icon: "solar:danger-triangle-bold-duotone",
        className: "size-5 text-yellow-500"
      }),
      title: _0x4c6b68("moderation.ownerCannotKickTitle"),
      description: _0x819580.jsxs(_0x819580.Fragment, {
        children: [_0x4c6b68("moderation.ownerCannotKickDesc"), _0x819580.jsxs("div", {
          className: "mt-3 flex items-center gap-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg",
          children: [_0x819580.jsx(_0x4f894a, {
            className: "h-12 w-12",
            children: _0x819580.jsx("div", {
              className: "w-full h-full bg-surface-inset rounded-full flex items-center justify-center text-lg font-semibold text-text-secondary",
              children: (_0x398c63.display_name || _0x398c63.username).charAt(0).toUpperCase()
            })
          }), _0x819580.jsxs("div", {
            className: "flex-1 min-w-0",
            children: [_0x819580.jsxs("div", {
              className: "flex items-center gap-2",
              children: [_0x819580.jsx("span", {
                className: "font-medium text-yellow-400",
                children: _0x398c63.display_name || _0x398c63.username
              }), _0x819580.jsx(_0x535cc7, {
                icon: "solar:crown-bold-duotone",
                className: "w-5 h-5 text-yellow-500"
              })]
            }), _0x819580.jsxs("span", {
              className: "text-sm text-yellow-400/80",
              children: ["@", _0x398c63.username]
            }), _0x819580.jsx("div", {
              className: "text-xs text-yellow-400 bg-yellow-500/20 px-2 py-1 rounded mt-1 inline-block",
              children: _0x4c6b68("moderation.serverOwner")
            })]
          })]
        }), _0x819580.jsxs("div", {
          className: "mt-3 text-sm text-text-secondary",
          children: [_0x819580.jsx("p", {
            children: _0x4c6b68("moderation.ownerAbilities")
          }), _0x819580.jsxs("ul", {
            className: "list-disc list-inside mt-2 space-y-1 text-text-tertiary",
            children: [_0x819580.jsx("li", {
              children: _0x4c6b68("moderation.ownerAbility1")
            }), _0x819580.jsx("li", {
              children: _0x4c6b68("moderation.ownerAbility2")
            }), _0x819580.jsx("li", {
              children: _0x4c6b68("moderation.ownerAbility3")
            }), _0x819580.jsx("li", {
              children: _0x4c6b68("moderation.ownerAbility4")
            })]
          })]
        })]
      }),
      confirmText: _0x4c6b68("moderation.understood")
    });
  } else {
    return _0x819580.jsx(_0x513be5, {
      open: _0x205849,
      onOpenChange: _0x3d9401,
      onConfirm: async () => {
        if (_0x398c63.isOwner) {
          _0xedc590.error(_0x4c6b68("moderation.ownerCannotBeKickedSingle"));
        } else {
          _0x573598(true);
          try {
            await _0x2efb85(_0x1e162f, [String(_0x398c63.user_id)]);
            _0x54618a();
            _0x3d9401();
          } catch (_0x52192d) {} finally {
            _0x573598(false);
          }
        }
      },
      isLoading: _0x2821a2,
      variant: "danger",
      icon: _0x819580.jsx(J, {
        className: "size-5 text-red-400"
      }),
      title: _0x4c6b68("moderation.singleKickTitle"),
      description: _0x819580.jsxs(_0x819580.Fragment, {
        children: [_0x819580.jsx("strong", {
          children: _0x398c63.display_name || _0x398c63.username
        }), " ", _0x4c6b68("moderation.singleKickDesc"), _0x819580.jsxs("div", {
          className: "mt-3 flex items-center gap-3 p-3 bg-surface-overlay/40 border border-border-default rounded-lg",
          children: [_0x819580.jsx(_0x4f894a, {
            className: "h-12 w-12",
            children: _0x819580.jsx("div", {
              className: "w-full h-full bg-surface-inset rounded-full flex items-center justify-center text-lg font-semibold text-text-secondary",
              children: (_0x398c63.display_name || _0x398c63.username).charAt(0).toUpperCase()
            })
          }), _0x819580.jsxs("div", {
            className: "flex-1 min-w-0",
            children: [_0x819580.jsx("div", {
              className: "font-medium text-text-secondary",
              children: _0x398c63.display_name || _0x398c63.username
            }), _0x819580.jsxs("span", {
              className: "text-sm text-text-tertiary",
              children: ["@", _0x398c63.username]
            })]
          })]
        }), _0x819580.jsxs("div", {
          className: "mt-3 flex items-start gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg",
          children: [_0x819580.jsx(_0x535cc7, {
            icon: "solar:danger-triangle-bold-duotone",
            className: "w-5 h-5 text-red-500 mt-0.5 shrink-0"
          }), _0x819580.jsxs("div", {
            className: "text-sm text-red-300",
            children: [_0x819580.jsx("p", {
              className: "font-medium",
              children: _0x4c6b68("moderation.attention")
            }), _0x819580.jsx("p", {
              className: "text-red-400/80 mt-1",
              children: _0x4c6b68("moderation.kickWarning")
            })]
          })]
        })]
      }),
      confirmText: _0x4c6b68("moderation.kickMemberBtn"),
      cancelText: _0x4c6b68("moderation.cancelBtn")
    });
  }
};
const X = ({
  className: _0x55288b
}) => _0x819580.jsx(_0x535cc7, {
  icon: "solar:menu-dots-bold",
  className: _0x55288b
});
const Y = ({
  className: _0x3b29da
}) => _0x819580.jsx(_0x535cc7, {
  icon: "solar:alt-arrow-left-bold",
  className: _0x3b29da
});
const ee = ({
  className: _0x290c41
}) => _0x819580.jsx(_0x535cc7, {
  icon: "solar:alt-arrow-right-bold",
  className: _0x290c41
});
const se = ({
  className: _0xd1af56
}) => _0x819580.jsx(_0x535cc7, {
  icon: "solar:user-minus-bold-duotone",
  className: _0xd1af56
});
const re = ({
  className: _0x515352
}) => _0x819580.jsx(_0x535cc7, {
  icon: "solar:close-circle-bold-duotone",
  className: _0x515352
});
const te = ({
  className: _0x3c8cac
}) => _0x819580.jsx(_0x535cc7, {
  icon: "solar:add-circle-bold-duotone",
  className: _0x3c8cac
});
const ae = _0x2dbd11.memo(({
  serverId: _0x284eab
}) => {
  const {
    t: _0x2903a7,
    i18n: _0x270875
  } = _0x3bc4b7();
  const [_0x3d40c0, _0x49824f] = r.useState([]);
  const [_0x4fb326, _0x475210] = r.useState([]);
  const [_0x51c05d, _0x41513d] = r.useState(true);
  const [_0x26b5e2, _0x502df7] = r.useState(null);
  const [_0x3a43ca, _0x2fa8ac] = r.useState([]);
  const [_0x234e80, _0x39e2c7] = r.useState([]);
  const [_0x1ffc31, _0x1ac6a8] = r.useState({});
  const [_0x499dfb, _0x20a444] = r.useState("");
  const [_0x452f5b, _0x447ac5] = r.useState(false);
  const [_0x20b355, _0x33a103] = r.useState(false);
  const [_0x5390cb] = r.useState(50);
  const [_0x49d44e, _0x564ccc] = r.useState({
    hasNextPage: false,
    hasPrevPage: false
  });
  const [_0x44a877, _0x109980] = r.useState(false);
  const [_0x2f6097, _0x56f908] = r.useState([]);
  const [_0x35b9b2, _0x389d2d] = r.useState(null);
  const [_0x4001ed, _0x49ff19] = r.useState(false);
  const [_0x148046, _0x421a21] = r.useState(null);
  const {
    hasAny: _0x2b7beb,
    isOwner: _0x4919b5,
    isOwnerPerm: _0x22c0c2
  } = _0x20503f(_0x284eab);
  const _0x1364c1 = _0x4919b5 || _0x22c0c2 || _0x2b7beb(_0x495663.MANAGE_GUILD, _0x495663.KICK_MEMBERS, _0x495663.BAN_MEMBERS);
  const _0x567cb9 = _0x2b7beb(_0x495663.KICK_MEMBERS) || _0x4919b5 || _0x22c0c2;
  const _0x485eeb = r.useCallback(async (_0x1dc9f9, _0x5c4709 = "initial") => {
    if (_0x284eab) {
      _0x41513d(true);
      _0x502df7(null);
      try {
        const _0x23a690 = await _0x18bb23(_0x284eab, {
          force: true,
          cursor: _0x1dc9f9,
          flat: true
        });
        const _0x50047a = _0x23a690?.members || [];
        const _0x3800ac = _0x3dfc6c.getState().getGuildRoles(_0x284eab);
        const _0x5f3d9a = _0x50047a.map(_0x2d0d10 => {
          if (Array.isArray(_0x2d0d10.roles) && _0x2d0d10.roles.length > 0 && typeof _0x2d0d10.roles[0] == "string") {
            const _0x5e197d = _0x2d0d10.roles.map(_0x462a1b => {
              const _0x419a3e = _0x3800ac.find(_0x3854f0 => _0x3854f0.id === _0x462a1b);
              if (_0x419a3e) {
                return {
                  id: _0x419a3e.id,
                  name: _0x419a3e.name,
                  color: _0x419a3e.color,
                  is_primary: false,
                  hoist: _0x419a3e.hoist
                };
              } else {
                return {
                  id: _0x462a1b,
                  name: undefined,
                  color: null,
                  is_primary: false,
                  hoist: false
                };
              }
            }).filter(_0xda7e1f => _0xda7e1f.name && _0xda7e1f.name !== "all" && _0xda7e1f.name !== "@everyone");
            return {
              ..._0x2d0d10,
              roles: _0x5e197d
            };
          }
          return _0x2d0d10;
        });
        const _0x1c2251 = _0x23a690?.page_info;
        _0x564ccc({
          nextCursor: _0x1c2251?.next_cursor,
          prevCursor: _0x1c2251?.prev_cursor,
          hasNextPage: _0x1c2251?.has_next || false,
          hasPrevPage: _0x1c2251?.has_prev || false,
          currentCursor: _0x1dc9f9
        });
        if (_0x5c4709 === "initial") {
          _0x475210(_0x5f3d9a);
          _0x49824f(_0x5f3d9a);
        } else {
          _0x49824f(_0x5f3d9a);
        }
      } catch (_0x547726) {
        const _0x40b6dc = _0x547726?.response?.data?.error || _0x547726?.response?.data?.message || _0x2903a7("serverSettings.members.loadError");
        _0x502df7(_0x40b6dc);
        console.error("API Error:", _0x547726);
      } finally {
        _0x41513d(false);
      }
    }
  }, [_0x284eab, _0x5390cb]);
  r.useEffect(() => {
    _0x485eeb();
  }, [_0x485eeb]);
  _0x2de269("k", _0x4ba87d => {
    if (_0x4ba87d.ctrlKey) {
      _0x4ba87d.preventDefault();
      if (_0x20b355) {
        const _0x543b63 = document.getElementById("member-management-search-input");
        if (_0x543b63) {
          _0x543b63.focus();
        }
      } else {
        _0x33a103(true);
      }
    }
  }, 3);
  const _0x45ec66 = () => {
    _0x485eeb();
    _0x1ac6a8({});
  };
  const _0x389cb5 = r.useCallback(async (_0x1d76fd, _0x4f27ba, _0x5ac76c) => {
    try {
      const _0x37a551 = _0x3dfc6c.getState().getGuildRoles(_0x284eab);
      const _0x44bfc5 = _0x37a551?.find(_0x283f26 => _0x283f26.name === _0x1d76fd.name) || _0x1d76fd;
      if (_0x44bfc5 && _0x44bfc5.id) {
        await _0x4b3994(_0x284eab, _0x44bfc5.id, [_0x4f27ba]);
        _0x49824f(_0x175092 => _0x175092.map(_0x2581e2 => _0x2581e2.user_id === _0x4f27ba ? {
          ..._0x2581e2,
          roles: (_0x2581e2.roles || []).filter(_0x7793c8 => _0x7793c8.id !== _0x44bfc5.id)
        } : _0x2581e2));
      }
    } catch {}
  }, [_0x284eab]);
  const _0x5063f6 = r.useCallback(({
    role: _0xc67238,
    userId: _0x2b53ab,
    member: _0x3d8477
  }) => {
    const [_0x22b88b, _0x1f2cba] = r.useState(false);
    const _0x6b5e91 = typeof _0xc67238.color == "number" && _0xc67238.color > 0 ? "#" + _0xc67238.color.toString(16).padStart(6, "0") : "#94a3b8";
    return _0x819580.jsxs("span", {
      className: "text-xs font-medium bg-surface-overlay/60 pl-2 pr-1 py-1 rounded-sm inline-flex items-center gap-1 group",
      children: [_0x819580.jsx("span", {
        className: "inline-block w-2 h-2 rounded-full mr-1",
        style: {
          backgroundColor: _0x6b5e91
        }
      }), _0x819580.jsx("span", {
        dangerouslySetInnerHTML: {
          __html: _0x1634a3(_0xc67238.name || "", "emoji inline-block align-[-0.1em] w-[1em] h-[1em]")
        }
      }), _0xc67238.name && _0x2b53ab && _0x1364c1 && _0x819580.jsxs(_0x2a6db6, {
        open: _0x22b88b,
        onOpenChange: _0x1f2cba,
        children: [_0x819580.jsx(_0x412de7, {
          asChild: true,
          children: _0x819580.jsx("button", {
            onClick: _0x4e142f => {
              _0x4e142f.stopPropagation();
              _0x1f2cba(true);
            },
            className: "ml-1 hover:bg-red-500/20 hover:text-red-400 rounded-sm p-0.5 transition-colors border border-red-500/30 cursor-pointer",
            title: _0xc67238.name + " rolünü kaldır",
            children: _0x819580.jsx(re, {
              className: "w-3 h-3 text-red-400"
            })
          })
        }), _0x819580.jsxs(_0x350a5c, {
          className: "w-56 p-3 bg-surface-raised border-border-default",
          side: "top",
          align: "center",
          onClick: _0x75ef64 => _0x75ef64.stopPropagation(),
          children: [_0x819580.jsxs("p", {
            className: "text-xs text-text-secondary mb-2.5",
            children: [_0x819580.jsx("span", {
              className: "font-medium text-text-primary",
              children: _0xc67238.name
            }), " ", _0x2903a7("serverSettings.members.removeRoleConfirm", {
              role: ""
            })]
          }), _0x819580.jsxs("div", {
            className: "flex gap-2",
            children: [_0x819580.jsx("button", {
              onClick: () => _0x1f2cba(false),
              className: "flex-1 h-7 text-xs rounded-md border border-border-strong text-text-secondary hover:bg-surface-overlay transition-colors cursor-pointer",
              children: _0x2903a7("serverSettings.members.cancelButton")
            }), _0x819580.jsx("button", {
              onClick: async () => {
                _0x1f2cba(false);
                await _0x389cb5(_0xc67238, _0x2b53ab, _0x3d8477);
              },
              className: "flex-1 h-7 text-xs rounded-md bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 transition-colors cursor-pointer",
              children: _0x2903a7("serverSettings.members.removeButton")
            })]
          })]
        })]
      })]
    });
  }, [_0x1364c1, _0x389cb5]);
  const _0x1461f8 = r.useMemo(() => [{
    id: "select",
    header: ({
      table: _0x526f60
    }) => _0x819580.jsx("div", {
      className: "pl-2",
      children: _0x819580.jsx(_0x1785a3, {
        checked: _0x526f60.getIsAllPageRowsSelected(),
        onCheckedChange: _0x22fba2 => _0x526f60.toggleAllPageRowsSelected(!!_0x22fba2),
        "aria-label": _0x2903a7("serverSettings.members.selectAllRows"),
        className: "border-border-default data-[state=checked]:bg-accent-primary data-[state=checked]:border-accent-primary data-[state=checked]:text-black"
      })
    }),
    cell: ({
      row: _0x4be27d
    }) => _0x819580.jsx("div", {
      className: "pl-2",
      children: _0x819580.jsx(_0x1785a3, {
        checked: _0x4be27d.getIsSelected(),
        onCheckedChange: _0x4fd435 => _0x4be27d.toggleSelected(!!_0x4fd435),
        "aria-label": _0x2903a7("serverSettings.members.selectRow"),
        className: "border-border-default data-[state=checked]:bg-accent-primary data-[state=checked]:border-accent-primary data-[state=checked]:text-black"
      })
    }),
    enableSorting: false,
    size: 50
  }, {
    accessorKey: "username",
    header: _0x2903a7("serverSettings.members.memberHeader"),
    cell: ({
      row: _0x55450e
    }) => {
      const _0x2a660e = _0x55450e.original;
      const _0x4a6e73 = _0x2a660e.display_name || _0x2a660e.username;
      return _0x819580.jsxs("div", {
        className: "flex items-center gap-3",
        children: [_0x819580.jsxs(_0x4f894a, {
          className: "h-8 w-8",
          children: [_0x2a660e.avatar_url ? _0x819580.jsx(_0x3f9c3f, {
            src: _0x2a660e.avatar_url,
            alt: _0x4a6e73
          }) : null, _0x819580.jsx(_0x387709, {
            className: "bg-surface-inset text-text-secondary text-xs font-semibold",
            children: _0x4a6e73.charAt(0).toUpperCase()
          })]
        }), _0x819580.jsxs("div", {
          className: "flex flex-col",
          children: [_0x819580.jsxs("div", {
            className: "flex items-center gap-2",
            children: [_0x819580.jsx("span", {
              className: "text-[15px] font-medium text-text-secondary",
              children: _0x4a6e73
            }), _0x2a660e.isOwner && _0x819580.jsx(_0x535cc7, {
              icon: "solar:crown-bold-duotone",
              className: "w-4 h-4 text-yellow-500"
            }), _0x2a660e.is_bot && _0x819580.jsx(_0x198533, {
              label: _0x819580.jsxs("span", {
                className: "flex items-center gap-1.5",
                children: [_0x819580.jsx(_0x535cc7, {
                  icon: "solar:global-bold-duotone",
                  className: "w-4 h-4 text-emerald-400"
                }), _0x2903a7("serverSettings.members.application")]
              }),
              children: _0x819580.jsx(_0x535cc7, {
                icon: "solar:global-bold-duotone",
                className: "w-4 h-4 text-emerald-400"
              })
            })]
          }), _0x819580.jsxs("span", {
            className: "text-sm text-text-tertiary",
            children: ["@", _0x2a660e.username]
          })]
        })]
      });
    },
    size: 250
  }, {
    accessorKey: "roles",
    header: _0x2903a7("serverSettings.members.rolesHeader"),
    cell: ({
      row: _0x3c97c2
    }) => ((_0x4566bf, _0x1132d8, _0x37250) => {
      const _0x205224 = _0x4566bf?.filter(_0x1df75d => _0x1df75d.name && _0x1df75d.name !== "all") || [];
      return _0x819580.jsxs("div", {
        className: "flex items-center gap-2",
        children: [_0x205224.length > 0 ? _0x819580.jsxs(_0x819580.Fragment, {
          children: [_0x205224.slice(0, 3).map((_0x381641, _0xb0cf09) => _0x819580.jsx(_0x5063f6, {
            role: _0x381641,
            userId: _0x1132d8,
            member: _0x37250
          }, _0xb0cf09)), _0x205224.length > 3 && _0x819580.jsxs(_0x2a6db6, {
            children: [_0x819580.jsx(_0x412de7, {
              asChild: true,
              children: _0x819580.jsxs("button", {
                onClick: _0x470028 => _0x470028.stopPropagation(),
                className: "text-xs text-text-tertiary hover:text-text-secondary bg-surface-overlay/60 hover:bg-surface-inset/60 px-1.5 py-1 rounded-sm transition-colors cursor-pointer",
                children: ["+", _0x205224.length - 3]
              })
            }), _0x819580.jsxs(_0x350a5c, {
              className: "w-64 p-3 bg-surface-raised border-border-default",
              side: "top",
              align: "start",
              onClick: _0x22e5c4 => _0x22e5c4.stopPropagation(),
              children: [_0x819580.jsx("p", {
                className: "text-xs font-medium text-text-tertiary mb-2",
                children: _0x2903a7("serverSettings.members.allRoles", {
                  count: _0x205224.length
                })
              }), _0x819580.jsx("div", {
                className: "flex flex-wrap gap-1.5",
                children: _0x205224.map((_0x4de317, _0x33f0f7) => {
                  const _0x3c8bb0 = typeof _0x4de317.color == "number" && _0x4de317.color > 0 ? "#" + _0x4de317.color.toString(16).padStart(6, "0") : "#94a3b8";
                  return _0x819580.jsxs("span", {
                    className: "text-xs font-medium bg-surface-overlay/60 px-2 py-1 rounded-sm inline-flex items-center gap-1.5",
                    children: [_0x819580.jsx("span", {
                      className: "inline-block w-2 h-2 rounded-full",
                      style: {
                        backgroundColor: _0x3c8bb0
                      }
                    }), _0x819580.jsx("span", {
                      dangerouslySetInnerHTML: {
                        __html: _0x1634a3(_0x4de317.name || "", "emoji inline-block align-[-0.1em] w-[1em] h-[1em]")
                      }
                    })]
                  }, _0x33f0f7);
                })
              })]
            })]
          })]
        }) : _0x819580.jsx("span", {
          className: "text-xs text-text-tertiary italic",
          children: _0x2903a7("serverSettings.members.noRole")
        }), _0x1364c1 && _0x37250 && _0x819580.jsx(W, {
          guildId: _0x284eab,
          userIds: [_0x37250.user_id],
          assignedRoleNames: (_0x37250.roles || []).filter(_0xd16870 => _0xd16870.name).map(_0x5e48e4 => _0x5e48e4.name),
          onRoleAdded: _0x404d3c => {
            _0x49824f(_0x50d4da => _0x50d4da.map(_0x143867 => {
              if (_0x143867.user_id !== _0x37250.user_id) {
                return _0x143867;
              }
              const _0xf0004c = [...(_0x143867.roles || [])];
              if (!_0xf0004c.some(_0x14a64c => _0x14a64c.name === _0x404d3c.name)) {
                _0xf0004c.push({
                  id: _0x404d3c.id,
                  name: _0x404d3c.name,
                  color: _0x404d3c.color,
                  is_primary: _0x404d3c.is_primary,
                  hoist: _0x404d3c.hoist
                });
              }
              return {
                ..._0x143867,
                roles: _0xf0004c
              };
            }));
          },
          onRoleRemoved: _0x904ece => {
            _0x49824f(_0x37bfc0 => _0x37bfc0.map(_0x336c82 => _0x336c82.user_id !== _0x37250.user_id ? _0x336c82 : {
              ..._0x336c82,
              roles: (_0x336c82.roles || []).filter(_0x20aa3c => _0x20aa3c.name !== _0x904ece.name)
            }));
          },
          side: "right",
          align: "start",
          children: _0x819580.jsx("button", {
            onClick: _0x579b2f => {
              _0x579b2f.stopPropagation();
            },
            className: "cursor-pointer hover:bg-green-500/20 hover:text-green-400 rounded-sm p-1 transition-colors border border-green-500/30",
            title: _0x2903a7("serverSettings.members.addRoleToMember"),
            children: _0x819580.jsx(te, {
              className: "w-3 h-3 text-green-400"
            })
          })
        })]
      });
    })(_0x3c97c2.original.roles, _0x3c97c2.original.user_id, _0x3c97c2.original),
    enableSorting: false,
    size: 300
  }, {
    accessorKey: "joined_at",
    header: _0x2903a7("serverSettings.members.joinDateHeader"),
    cell: ({
      row: _0x1c6043
    }) => {
      const _0x146f6b = _0x1c6043.original.joined_at;
      if (!_0x146f6b) {
        return _0x819580.jsx("span", {
          className: "text-text-tertiary",
          children: "-"
        });
      }
      const _0x1c832d = new Date(_0x146f6b);
      const _0x36542f = new Date().getTime() - _0x1c832d.getTime();
      const _0x3c0ec6 = Math.floor(_0x36542f / 86400000);
      const _0x36a2cb = Math.floor(_0x36542f % 86400000 / 3600000);
      const _0x33678e = _0x1c832d.toLocaleDateString(_0x270875.language, {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
      const _0x3884cb = _0x1c832d.toLocaleTimeString(_0x270875.language, {
        hour: "2-digit",
        minute: "2-digit"
      });
      let _0x597fcb = "";
      if (_0x3c0ec6 === 0 && _0x36a2cb < 24) {
        _0x597fcb = _0x36a2cb === 0 ? _0x2903a7("serverSettings.members.timeAgo.justNow") : _0x36a2cb === 1 ? _0x2903a7("serverSettings.members.timeAgo.oneHour") : _0x2903a7("serverSettings.members.timeAgo.hours", {
          count: _0x36a2cb
        });
      } else if (_0x3c0ec6 === 1) {
        _0x597fcb = _0x2903a7("serverSettings.members.timeAgo.yesterday");
      } else if (_0x3c0ec6 < 7) {
        _0x597fcb = _0x2903a7("serverSettings.members.timeAgo.days", {
          count: _0x3c0ec6
        });
      } else if (_0x3c0ec6 < 30) {
        const _0x448110 = Math.floor(_0x3c0ec6 / 7);
        _0x597fcb = _0x2903a7("serverSettings.members.timeAgo.weeks", {
          count: _0x448110
        });
      } else if (_0x3c0ec6 < 365) {
        const _0xd2c546 = Math.floor(_0x3c0ec6 / 30);
        _0x597fcb = _0x2903a7("serverSettings.members.timeAgo.months", {
          count: _0xd2c546
        });
      } else {
        const _0x40c4b4 = Math.floor(_0x3c0ec6 / 365);
        _0x597fcb = _0x2903a7("serverSettings.members.timeAgo.years", {
          count: _0x40c4b4
        });
      }
      const _0x51d174 = _0x1c832d.toLocaleDateString(_0x270875.language, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
      return _0x819580.jsx(_0x198533, {
        label: _0x51d174,
        children: _0x819580.jsxs("div", {
          className: "flex flex-col gap-1 cursor-default",
          children: [_0x819580.jsx("span", {
            className: "text-sm text-text-secondary font-medium",
            children: _0x33678e
          }), _0x819580.jsxs("span", {
            className: "text-xs text-text-tertiary",
            children: [_0x3884cb, " • ", _0x597fcb]
          })]
        })
      });
    },
    size: 180
  }, {
    id: "actions",
    header: "",
    cell: ({
      row: _0x1b46ab
    }) => {
      const _0x28ee00 = _0x1b46ab.original;
      const [_0x40787d, _0x34de5b] = r.useState(false);
      if (!_0x1364c1 || _0x28ee00.isOwner) {
        return null;
      } else {
        return _0x819580.jsxs(_0x4175c4, {
          open: _0x40787d,
          onOpenChange: _0x34de5b,
          children: [_0x819580.jsx(_0x2fa511, {
            asChild: true,
            children: _0x819580.jsx(_0x41a2bf, {
              variant: "ghost",
              className: "h-8 w-8 p-0",
              children: _0x819580.jsx(X, {
                className: "h-4 w-4"
              })
            })
          }), _0x819580.jsxs(_0x33347a, {
            align: "end",
            className: "z-80 min-w-40",
            children: [_0x819580.jsx(_0x4d7e0c, {
              className: "text-text-secondary font-semibold px-3 py-2 text-xs",
              children: _0x2903a7("serverSettings.members.actions")
            }), _0x819580.jsx(_0x27b843, {
              className: "bg-surface-inset/50"
            }), _0x819580.jsxs("button", {
              className: "flex items-center gap-2 w-full px-2 py-1.5 text-sm text-text-secondary hover:bg-surface-overlay/80 rounded-sm transition-colors cursor-pointer",
              onClick: () => {
                (_0x42d353 => {
                  _0x421a21(_0x42d353);
                  _0x49ff19(true);
                })(_0x28ee00);
                _0x34de5b(false);
              },
              children: [_0x819580.jsx(_0x535cc7, {
                icon: "solar:shield-bold-duotone",
                className: "w-4 h-4 text-text-tertiary"
              }), _0x2903a7("serverSettings.members.memberModeration")]
            }), !_0x28ee00.isOwner && _0x567cb9 && _0x819580.jsxs("button", {
              className: "flex items-center gap-2 w-full px-2 py-1.5 text-sm text-red-400 hover:bg-red-500/10 rounded-sm transition-colors cursor-pointer",
              onClick: () => {
                (_0x56a63d => {
                  _0x389d2d(_0x56a63d.user_id);
                })(_0x28ee00);
                _0x34de5b(false);
              },
              children: [_0x819580.jsx(se, {
                className: "w-4 h-4"
              }), _0x2903a7("serverSettings.members.kickFromServer")]
            })]
          })]
        });
      }
    },
    enableSorting: false,
    size: 50
  }], [_0x1364c1]);
  const _0x2c51f0 = _0x5b7a66({
    data: _0x3d40c0,
    columns: _0x1461f8,
    getCoreRowModel: _0x1b35e5(),
    getSortedRowModel: _0xd023a8(),
    getFilteredRowModel: _0x234204(),
    onSortingChange: _0x2fa8ac,
    onColumnFiltersChange: _0x39e2c7,
    onRowSelectionChange: _0x1ac6a8,
    state: {
      sorting: _0x3a43ca,
      columnFilters: _0x234e80,
      rowSelection: _0x1ffc31
    }
  });
  if (_0x51c05d) {
    return _0x819580.jsx("div", {
      className: "space-y-8",
      children: _0x819580.jsxs("section", {
        children: [_0x819580.jsxs("div", {
          className: "mb-2",
          children: [_0x819580.jsxs("div", {
            className: "flex items-center gap-2",
            children: [_0x819580.jsx(_0x535cc7, {
              icon: "solar:users-group-rounded-bold-duotone",
              className: "size-4 text-text-tertiary"
            }), _0x819580.jsx("div", {
              className: "text-base leading-snug font-semibold text-text-secondary",
              children: _0x2903a7("serverSettings.members.title")
            })]
          }), _0x819580.jsx("p", {
            className: "text-sm leading-snug text-text-muted mt-0.5",
            children: _0x2903a7("serverSettings.members.description")
          })]
        }), _0x819580.jsx("div", {
          className: "rounded-2xl border border-border-default bg-surface-raised/40 p-8 hover:bg-interactive-muted transition-colors",
          children: _0x819580.jsx("div", {
            className: "flex items-center justify-center",
            children: _0x819580.jsx("div", {
              className: "size-8 border-[3px] border-border-default border-t-accent-primary rounded-full animate-spin"
            })
          })
        })]
      })
    });
  }
  if (_0x26b5e2) {
    return _0x819580.jsx("div", {
      className: "space-y-8",
      children: _0x819580.jsxs("section", {
        children: [_0x819580.jsxs("div", {
          className: "mb-2",
          children: [_0x819580.jsxs("div", {
            className: "flex items-center gap-2",
            children: [_0x819580.jsx(_0x535cc7, {
              icon: "solar:users-group-rounded-bold-duotone",
              className: "size-4 text-text-tertiary"
            }), _0x819580.jsx("div", {
              className: "text-base leading-snug font-semibold text-text-secondary",
              children: _0x2903a7("serverSettings.members.title")
            })]
          }), _0x819580.jsx("p", {
            className: "text-sm leading-snug text-text-muted mt-0.5",
            children: _0x2903a7("serverSettings.members.description")
          })]
        }), _0x819580.jsx("div", {
          className: "rounded-2xl border border-red-800/70 bg-red-900/20 p-8 hover:bg-red-900/25 transition-colors",
          children: _0x819580.jsxs("div", {
            className: "text-center",
            children: [_0x819580.jsx("p", {
              className: "text-red-400",
              children: _0x26b5e2
            }), _0x819580.jsx(_0x41a2bf, {
              variant: "outline",
              className: "mt-4",
              onClick: () => _0x485eeb(),
              children: _0x2903a7("serverSettings.members.retryButton")
            })]
          })
        })]
      })
    });
  }
  const _0x22831b = _0x2c51f0.getFilteredSelectedRowModel().rows;
  const _0x2c94b4 = _0x22831b.length;
  return _0x819580.jsxs("div", {
    className: "space-y-3",
    children: [_0x819580.jsxs("section", {
      children: [_0x819580.jsxs("div", {
        className: "flex items-center justify-between gap-4 mb-2",
        children: [_0x819580.jsxs("div", {
          children: [_0x819580.jsxs("div", {
            className: "flex items-center gap-2",
            children: [_0x819580.jsx(_0x535cc7, {
              icon: "solar:users-group-rounded-bold-duotone",
              className: "size-4 text-text-tertiary"
            }), _0x819580.jsx("div", {
              className: "text-base leading-snug font-semibold text-text-secondary",
              children: _0x2903a7("serverSettings.members.title")
            })]
          }), _0x819580.jsxs("p", {
            className: "text-sm leading-snug text-text-muted mt-0.5",
            children: [_0x2903a7("serverSettings.members.description"), ".", _0x2c94b4 > 0 && " • " + _0x2903a7("serverSettings.members.selected", {
              count: _0x2c94b4
            }), _0x499dfb.trim() && _0x819580.jsxs(_0x819580.Fragment, {
              children: [" • ", _0x819580.jsx("span", {
                className: "text-text-tertiary",
                children: _0x2903a7("serverSettings.members.searchResults", {
                  count: _0x3d40c0.length
                })
              })]
            })]
          })]
        }), _0x819580.jsx("div", {
          className: "flex items-center gap-2",
          children: _0x20b355 ? _0x819580.jsxs("div", {
            className: "relative flex items-center gap-2",
            children: [_0x819580.jsxs("div", {
              className: "relative",
              children: [_0x819580.jsx(_0x535cc7, {
                icon: "solar:magnifer-bold-duotone",
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary w-4 h-4"
              }), _0x819580.jsx(I, {
                placeholder: _0x2903a7("serverSettings.members.searchPlaceholder"),
                value: _0x499dfb,
                onChange: _0x39c9d0 => _0x20a444(_0x39c9d0.target.value),
                onKeyDown: _0x212b6b => {
                  if (_0x212b6b.key === "Enter") {
                    _0x212b6b.preventDefault();
                    (async () => {
                      if (_0x284eab) {
                        if (!_0x499dfb.trim()) {
                          _0x447ac5(false);
                          _0x49824f(_0x4fb326);
                          _0x564ccc({
                            hasNextPage: false,
                            hasPrevPage: false
                          });
                          return;
                        }
                        _0x447ac5(true);
                        try {
                          const _0x3c16dc = await _0x16bdfe(_0x284eab, _0x499dfb);
                          const _0x472beb = _0x3dfc6c.getState().getGuildRoles(_0x284eab);
                          const _0x3e2d26 = _0x3c16dc.map(_0x575fce => {
                            let _0x317141 = [];
                            if (Array.isArray(_0x575fce.roles) && _0x575fce.roles.length > 0 && typeof _0x575fce.roles[0] == "string") {
                              _0x317141 = _0x575fce.roles.map(_0x7ec125 => {
                                const _0x36a26a = _0x472beb.find(_0x4678f => _0x4678f.id === _0x7ec125);
                                if (_0x36a26a) {
                                  return {
                                    id: _0x36a26a.id,
                                    name: _0x36a26a.name,
                                    color: _0x36a26a.color,
                                    is_primary: false,
                                    hoist: _0x36a26a.hoist
                                  };
                                } else {
                                  return {
                                    id: _0x7ec125,
                                    name: undefined,
                                    color: null,
                                    is_primary: false,
                                    hoist: false
                                  };
                                }
                              }).filter(_0x2f7708 => _0x2f7708.name && _0x2f7708.name !== "all" && _0x2f7708.name !== "@everyone");
                            } else if (Array.isArray(_0x575fce.roles)) {
                              _0x317141 = _0x575fce.roles.map((_0x401ea8, _0x3effb5) => ({
                                id: _0x401ea8.id || "role-" + _0x3effb5,
                                name: _0x401ea8.name,
                                color: _0x401ea8.color,
                                is_primary: _0x401ea8.is_primary,
                                hoist: _0x401ea8.hoist
                              }));
                            }
                            return {
                              ..._0x575fce,
                              user_id: _0x575fce.user_id,
                              id: _0x575fce.id || "search-" + _0x575fce.user_id,
                              roles: _0x317141
                            };
                          });
                          _0x49824f(_0x3e2d26);
                          _0x564ccc({
                            hasNextPage: false,
                            hasPrevPage: false
                          });
                        } catch (_0x3ec333) {
                          console.error("Member search failed:", _0x3ec333);
                          _0x49824f([]);
                        } finally {
                          _0x447ac5(false);
                        }
                      }
                    })();
                  }
                  if (_0x212b6b.key === "Escape") {
                    _0x33a103(false);
                    _0x20a444("");
                    _0x49824f(_0x4fb326);
                    _0x447ac5(false);
                  }
                },
                className: "pl-10 pr-20 h-9 w-64 bg-surface-overlay/50 border-border-strong text-sm",
                id: "member-management-search-input",
                name: "memberSearch",
                autoComplete: "off",
                autoFocus: true
              }), _0x452f5b ? _0x819580.jsx("div", {
                className: "absolute right-3 top-1/2 transform -translate-y-1/2",
                children: _0x819580.jsx("div", {
                  className: "w-3 h-3 border-2 border-border-default border-t-transparent rounded-full animate-spin"
                })
              }) : _0x819580.jsx("kbd", {
                className: "absolute right-2 top-1/2 transform -translate-y-1/2 px-1.5 py-0.5 text-[10px] rounded-md border border-border-default bg-surface-overlay/60 text-text-secondary",
                children: _0x819580.jsx("span", {
                  className: "text-xs",
                  children: "Enter"
                })
              })]
            }), _0x819580.jsx(_0x41a2bf, {
              variant: "ghost",
              size: "sm",
              onClick: () => {
                _0x33a103(false);
                _0x20a444("");
                _0x49824f(_0x4fb326);
                _0x447ac5(false);
              },
              className: "h-9 w-9 p-0 text-text-tertiary hover:text-text-secondary",
              children: _0x819580.jsx(re, {
                className: "w-4 h-4"
              })
            })]
          }) : _0x819580.jsx(_0x198533, {
            label: _0x2903a7("serverSettings.members.searchTooltip"),
            children: _0x819580.jsx(_0x41a2bf, {
              variant: "ghost",
              size: "sm",
              onClick: () => _0x33a103(true),
              className: "h-9 w-9 p-0 text-text-tertiary hover:text-text-secondary hover:bg-surface-overlay/50",
              children: _0x819580.jsx(_0x535cc7, {
                icon: "solar:magnifer-bold-duotone",
                className: "w-4 h-4"
              })
            })
          })
        })]
      }), _0x819580.jsx(_0x20f3f9, {}), _0x499dfb.trim() && !_0x452f5b && _0x819580.jsxs("div", {
        className: "flex items-center gap-2 mt-2",
        children: [_0x819580.jsxs("span", {
          className: "inline-flex items-center gap-1.5 text-xs bg-surface-overlay/60 border border-border-default rounded-full px-3 py-1 text-text-secondary",
          children: [_0x819580.jsx(_0x535cc7, {
            icon: "solar:magnifer-bold-duotone",
            className: "w-3 h-3 text-text-tertiary"
          }), _0x819580.jsx("span", {
            className: "font-medium",
            children: _0x3d40c0.length
          }), " ", _0x2903a7("serverSettings.members.resultsFound")]
        }), _0x819580.jsx("button", {
          onClick: () => {
            _0x20a444("");
            _0x49824f(_0x4fb326);
            _0x447ac5(false);
            _0x33a103(false);
          },
          className: "text-xs text-text-tertiary hover:text-text-secondary hover:bg-surface-overlay/60 rounded-md px-2.5 py-1 transition-colors cursor-pointer",
          children: _0x2903a7("serverSettings.members.showAll")
        })]
      })]
    }), _0x819580.jsx("div", {
      className: "overflow-hidden transition-all duration-300 ease-out " + (_0x2c94b4 > 0 && _0x1364c1 ? "max-h-24 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"),
      children: _0x819580.jsx("section", {
        children: _0x819580.jsx("div", {
          className: "rounded-xl border border-accent-border bg-accent-subtle backdrop-blur-sm px-4 py-3",
          children: _0x819580.jsxs("div", {
            className: "flex items-center justify-between gap-3",
            children: [_0x819580.jsxs("div", {
              className: "flex items-center gap-3",
              children: [_0x819580.jsx("div", {
                className: "flex items-center justify-center size-7 rounded-full bg-accent-subtle text-accent-primary-text text-xs font-bold tabular-nums",
                children: _0x2c94b4
              }), _0x819580.jsx("span", {
                className: "text-sm text-text-secondary",
                children: _0x2903a7("serverSettings.members.memberSelected")
              }), _0x819580.jsx("button", {
                onClick: () => _0x1ac6a8({}),
                className: "h-7 px-2.5 text-xs text-text-tertiary hover:text-text-secondary hover:bg-surface-overlay/60 rounded-md transition-colors cursor-pointer",
                children: _0x2903a7("serverSettings.members.clearSelection")
              })]
            }), _0x819580.jsxs("div", {
              className: "flex items-center gap-2",
              children: [_0x819580.jsx(W, {
                guildId: _0x284eab,
                userIds: _0x22831b.map(_0x38f7e2 => _0x38f7e2.original.user_id),
                assignedRoleNames: (() => {
                  const _0x5bde82 = _0x22831b.map(_0x130499 => _0x130499.original);
                  if (_0x5bde82.length === 0) {
                    return [];
                  }
                  return (_0x5bde82[0].roles || []).filter(_0x43eac7 => _0x43eac7.name).map(_0x278562 => _0x278562.name).filter(_0x5348d1 => _0x5bde82.every(_0x517eab => (_0x517eab.roles || []).some(_0x5ca356 => _0x5ca356.name === _0x5348d1)));
                })(),
                onRoleAdded: _0x59c206 => {
                  const _0x5ba9e3 = _0x22831b.map(_0x179b68 => _0x179b68.original.user_id);
                  _0x49824f(_0x1d67e6 => _0x1d67e6.map(_0x1935b9 => {
                    if (!_0x5ba9e3.includes(_0x1935b9.user_id)) {
                      return _0x1935b9;
                    }
                    const _0x3fc40b = [...(_0x1935b9.roles || [])];
                    if (!_0x3fc40b.some(_0x5d0dd3 => _0x5d0dd3.id === _0x59c206.id)) {
                      _0x3fc40b.push({
                        id: _0x59c206.id,
                        name: _0x59c206.name,
                        color: _0x59c206.color,
                        is_primary: _0x59c206.is_primary,
                        hoist: _0x59c206.hoist
                      });
                    }
                    return {
                      ..._0x1935b9,
                      roles: _0x3fc40b
                    };
                  }));
                },
                onRoleRemoved: _0x46dfbe => {
                  const _0x18b17f = _0x22831b.map(_0x3b64e8 => _0x3b64e8.original.user_id);
                  _0x49824f(_0x59bc5f => _0x59bc5f.map(_0x1350d0 => _0x18b17f.includes(_0x1350d0.user_id) ? {
                    ..._0x1350d0,
                    roles: (_0x1350d0.roles || []).filter(_0x2c94ee => _0x2c94ee.name !== _0x46dfbe.name)
                  } : _0x1350d0));
                },
                side: "left",
                align: "start",
                children: _0x819580.jsxs(_0x41a2bf, {
                  variant: "outline",
                  size: "sm",
                  className: "h-8 text-xs bg-surface-overlay/60 border-border-default hover:bg-surface-inset/60",
                  children: [_0x819580.jsx(_0x535cc7, {
                    icon: "solar:shield-bold-duotone",
                    className: "w-3.5 h-3.5 mr-1.5"
                  }), _0x2903a7("serverSettings.members.assignRole")]
                })
              }), _0x567cb9 && _0x819580.jsxs(_0x41a2bf, {
                variant: "outline",
                size: "sm",
                onClick: () => {
                  const _0x500b8f = _0x22831b.map(_0x1874e9 => _0x1874e9.original);
                  if (_0x500b8f.some(_0x4db256 => _0x4db256.isOwner)) {
                    _0xedc590.warning(_0x2903a7("serverSettings.members.ownerKickWarning"));
                  }
                  _0x56f908(_0x500b8f);
                  _0x109980(true);
                },
                disabled: _0x22831b.some(_0x4b3e7e => _0x4b3e7e.original.isOwner),
                className: "h-8 text-xs text-red-400 border-red-500/30 hover:bg-red-500/10 disabled:opacity-50",
                children: [_0x819580.jsx(se, {
                  className: "w-3.5 h-3.5 mr-1.5"
                }), _0x2903a7("serverSettings.members.kickFromServer")]
              })]
            })]
          })
        })
      })
    }), _0x819580.jsxs("section", {
      children: [_0x819580.jsx("div", {
        className: "rounded-2xl border border-border-default bg-surface-raised/40 overflow-hidden hover:bg-interactive-muted transition-colors",
        children: _0x819580.jsxs(_0x5307a1, {
          children: [_0x819580.jsx(_0x1a3857, {
            children: _0x2c51f0.getHeaderGroups().map(_0x2f6a2b => _0x819580.jsx(_0x20c06d, {
              className: "border-border-default",
              children: _0x2f6a2b.headers.map(_0x3a5360 => _0x819580.jsx(_0x47e922, {
                className: "text-text-secondary font-semibold",
                style: {
                  width: _0x3a5360.getSize()
                },
                children: _0x3a5360.isPlaceholder ? null : _0x3f23f2(_0x3a5360.column.columnDef.header, _0x3a5360.getContext())
              }, _0x3a5360.id))
            }, _0x2f6a2b.id))
          }), _0x819580.jsx(_0x4b3cb9, {
            children: _0x2c51f0.getRowModel().rows?.length ? _0x2c51f0.getRowModel().rows.map(_0x1b22d2 => _0x819580.jsx(_0x20c06d, {
              "data-state": _0x1b22d2.getIsSelected() && "selected",
              onClick: _0x584a80 => {
                if (!_0x584a80.target.closest("button, [role=\"checkbox\"], [role=\"menuitem\"], a, input")) {
                  _0x1b22d2.toggleSelected(!_0x1b22d2.getIsSelected());
                }
              },
              className: "border-border-subtle transition-colors cursor-pointer select-none " + (_0x1b22d2.getIsSelected() ? "bg-surface-overlay/60! hover:bg-surface-overlay/80" : "hover:bg-surface-overlay/30"),
              children: _0x1b22d2.getVisibleCells().map(_0x3a1076 => _0x819580.jsx(_0x3d76bf, {
                style: {
                  width: _0x3a1076.column.getSize()
                },
                children: _0x3f23f2(_0x3a1076.column.columnDef.cell, _0x3a1076.getContext())
              }, _0x3a1076.id))
            }, _0x1b22d2.id)) : _0x819580.jsx(_0x20c06d, {
              children: _0x819580.jsx(_0x3d76bf, {
                colSpan: _0x1461f8.length,
                className: "h-auto p-0",
                children: _0x819580.jsxs("div", {
                  className: "p-12 text-center",
                  children: [_0x819580.jsx("div", {
                    className: "flex items-center justify-center mb-4",
                    children: _0x819580.jsx(_0x535cc7, {
                      icon: "solar:ghost-bold-duotone",
                      className: "w-16 h-16 text-text-muted"
                    })
                  }), _0x819580.jsx("h3", {
                    className: "text-lg font-semibold text-text-secondary mb-2",
                    children: _0x499dfb.trim() ? _0x2903a7("serverSettings.members.noSearchResult") : _0x2903a7("serverSettings.members.noMembers")
                  }), _0x819580.jsx("p", {
                    className: "text-text-tertiary text-sm max-w-md mx-auto mb-6",
                    children: _0x499dfb.trim() ? _0x2903a7("serverSettings.members.noSearchResultDesc", {
                      query: _0x499dfb
                    }) : _0x2903a7("serverSettings.members.noMembersDesc")
                  }), _0x499dfb.trim() && _0x819580.jsx(_0x41a2bf, {
                    variant: "outline",
                    size: "sm",
                    onClick: () => {
                      _0x20a444("");
                      _0x49824f(_0x4fb326);
                      _0x447ac5(false);
                      _0x33a103(false);
                    },
                    className: "text-xs",
                    children: _0x2903a7("serverSettings.members.showAllButton")
                  })]
                })
              })
            })
          })]
        })
      }), _0x819580.jsxs("div", {
        className: "flex items-center justify-between mt-4",
        children: [_0x819580.jsx("div", {
          className: "flex items-center gap-2",
          children: _0x819580.jsxs("p", {
            className: "text-xs text-text-muted",
            children: [_0x2903a7("serverSettings.members.membersShowing", {
              count: _0x3d40c0.length
            }), _0x49d44e.currentCursor && " • " + _0x2903a7("serverSettings.members.pageContinuing")]
          })
        }), _0x819580.jsxs("div", {
          className: "flex items-center gap-2",
          children: [_0x819580.jsx(_0x41a2bf, {
            variant: "outline",
            size: "sm",
            onClick: () => {
              if (_0x49d44e.hasPrevPage && _0x49d44e.prevCursor) {
                _0x485eeb(_0x49d44e.prevCursor, "prev");
              }
            },
            disabled: !_0x49d44e.hasPrevPage || _0x51c05d,
            children: _0x819580.jsx(Y, {
              className: "w-4 h-4"
            })
          }), _0x819580.jsx(_0x41a2bf, {
            variant: "outline",
            size: "sm",
            onClick: () => {
              if (_0x49d44e.hasNextPage && _0x49d44e.nextCursor) {
                _0x485eeb(_0x49d44e.nextCursor, "next");
              }
            },
            disabled: !_0x49d44e.hasNextPage || _0x51c05d,
            children: _0x819580.jsx(ee, {
              className: "w-4 h-4"
            })
          })]
        })]
      })]
    }), _0x819580.jsx(Z, {
      isOpen: _0x44a877,
      onClose: () => {
        _0x109980(false);
        _0x56f908([]);
      },
      selectedMembers: _0x2f6097.map(_0x4e97db => ({
        id: _0x4e97db.id || "",
        user_id: _0x4e97db.user_id,
        username: _0x4e97db.username,
        display_name: _0x4e97db.display_name || undefined,
        isOwner: _0x4e97db.isOwner || false
      })),
      serverId: _0x284eab,
      onSuccess: _0x45ec66
    }), _0x819580.jsx(Q, {
      isOpen: !!_0x35b9b2,
      onClose: () => _0x389d2d(null),
      member: (() => {
        const _0x33256d = _0x3d40c0.find(_0x15ebfc => _0x15ebfc.user_id === _0x35b9b2);
        if (_0x33256d) {
          return {
            id: _0x33256d.id || "",
            user_id: _0x33256d.user_id,
            username: _0x33256d.username,
            display_name: _0x33256d.display_name || undefined,
            isOwner: _0x33256d.isOwner || false
          };
        } else {
          return {
            id: "",
            user_id: 0,
            username: "",
            display_name: "",
            isOwner: false
          };
        }
      })(),
      serverId: _0x284eab,
      onSuccess: _0x45ec66
    }), _0x4001ed && _0x148046 && _0x819580.jsx(_0x5bcb2a, {
      isOpen: _0x4001ed,
      onClose: () => {
        _0x49ff19(false);
        setTimeout(() => {
          _0x421a21(null);
        }, 100);
      },
      guildId: _0x284eab,
      member: {
        id: _0x148046.id || "",
        user_id: _0x148046.user_id,
        username: _0x148046.username,
        display_name: _0x148046.display_name || undefined,
        isOwner: _0x148046.isOwner || false,
        roles: _0x148046.roles,
        joined_at: _0x148046.joined_at
      }
    })]
  });
});
export { ae as default };