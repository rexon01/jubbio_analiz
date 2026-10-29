import { R as _0x96dbe9, r as _0x263568, b as _0x17818a, f as _0x57e483, bT as _0x4bdc09, P as _0x188e8e, j as _0x12eb47, I as _0x3c4611, X as _0x30f915 } from "./index-cQfEKR1W.js";
import { D as _0x25176c, a as _0x204664, c as _0x5a7400, d as _0x479291 } from "./dialog-BMMpM7PR.js";
import { C as _0x35157f } from "./checkbox-6NFFWv4U.js";
import { A as _0x10cc83, a as _0x32e4e7, b as _0x3a5791 } from "./avatar-C-4BWxT3.js";
import { bT as _0x153cca } from "./AppLayout-BEBJqe9_.js";
import { aX as _0x4d6ad0, aV as _0x1bd40f } from "./soundboardFx-C2LP-Hjs.js";
import { I as _0x1d1244 } from "./ImageCropModal-Bz0NeASX.js";
import { C as _0x46ae2c } from "./ConfirmDialog-B4gIndKy.js";
import { L as _0x406241 } from "./loader-circle-CTtxa1g9.js";
import { U as _0x4e2ee6 } from "./user-minus-CgemOKRn.js";
import "./index-yuEHo9bu.js";
import "./tr-D975n4_R.js";
import "./select-DQjjzSZW.js";
import "./index-Oyyh46KT.js";
import "./arrow-left-B3FhifN2.js";
import "./arrow-right-DvlsXLCB.js";
import "./switch-lfnbGePn.js";
import "./drawer-X7YyCqpZ.js";
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
import "./user-DSjlY8FD.js";
import "./refresh-cw-C3NlhmpS.js";
import "./trash-2-DuFcDcAU.js";
import "./clipboard-BQ9qambq.js";
import "./label-ODyS97Ju.js";
import "./video-AtsAgCNJ.js";
import "./plus-B7c2Px8R.js";
import "./channelNotificationStore-FXjXBmS_.js";
import "./index.module-CsHioFCV.js";
import "./index-BUijt7wr.js";
import "./alert-dialog-BZuoGg7O.js";
const k = _0x96dbe9.memo(({
  open: _0x10ec53,
  onOpenChange: _0x81ef68,
  groupName: _0x67dcc6,
  groupIcon: _0x246650,
  currentMembers: _0x2396de,
  channelId: _0x2957c2,
  isOwner: _0x265e6b = false,
  onSave: _0x3c7788
}) => {
  const [_0x174d79, _0x5ef258] = _0x263568.useState(false);
  const {
    t: _0x286c7f
  } = _0x17818a();
  const _0x371d57 = _0x57e483(_0x31f940 => _0x31f940.user?.id);
  const {
    filteredFriends: _0x152734
  } = _0x153cca();
  const _0x44b722 = _0x4bdc09();
  const [_0x1f6d71, _0x4c1628] = _0x263568.useState("");
  const [_0x11e6a2, _0x3aede6] = _0x263568.useState([]);
  const [_0x23957c, _0xae28c5] = _0x263568.useState("members");
  const [_0x498ea9, _0x2c2324] = _0x263568.useState("");
  const [_0x30577a, _0x3327c5] = _0x263568.useState(null);
  const [_0x34b53a, _0x12fe82] = _0x263568.useState(null);
  const [_0x8d763c, _0x1ede2e] = _0x263568.useState(false);
  const [_0x50bbb6, _0x411cc8] = _0x263568.useState(null);
  _0x263568.useEffect(() => {
    if (_0x50bbb6) {
      return () => URL.revokeObjectURL(_0x50bbb6);
    }
  }, [_0x50bbb6]);
  const [_0x4e0db8, _0x42ae3d] = _0x263568.useState(null);
  const [_0xccee0e, _0x31c367] = _0x263568.useState(false);
  const _0xb3d71c = _0x263568.useMemo(() => {
    const _0x92f74e = new Set(_0x152734.map(_0x3bb2f8 => String(_0x3bb2f8.id)));
    const _0x536a6c = _0x152734.map(_0x4b6dcf => ({
      id: _0x4b6dcf.id,
      username: _0x4b6dcf.username || "",
      display_name: _0x4b6dcf.display_name || _0x4b6dcf.username || "",
      avatar_url: _0x4b6dcf.avatar_url || null,
      isFriend: true
    }));
    const _0x3ca7a9 = new Map();
    _0x44b722.forEach(_0x45d999 => {
      if (!_0x45d999.is_group && _0x45d999.participant) {
        const _0x369ba5 = String(_0x45d999.participant.user_id);
        if (!_0x92f74e.has(_0x369ba5) && !_0x3ca7a9.has(_0x369ba5)) {
          _0x3ca7a9.set(_0x369ba5, {
            id: _0x45d999.participant.user_id,
            username: _0x45d999.participant.username,
            display_name: _0x45d999.participant.display_name,
            avatar_url: _0x45d999.participant.avatar_url || null,
            isFriend: false
          });
        }
      }
      if (_0x45d999.is_group && _0x45d999.participants) {
        _0x45d999.participants.forEach(_0x5e2f98 => {
          const _0xb3cfd6 = String(_0x5e2f98.user_id);
          if (!_0x92f74e.has(_0xb3cfd6) && !_0x3ca7a9.has(_0xb3cfd6)) {
            _0x3ca7a9.set(_0xb3cfd6, {
              id: _0x5e2f98.user_id,
              username: _0x5e2f98.username,
              display_name: _0x5e2f98.display_name,
              avatar_url: _0x5e2f98.avatar_url || null,
              isFriend: false
            });
          }
        });
      }
    });
    return [..._0x536a6c, ...Array.from(_0x3ca7a9.values())];
  }, [_0x152734, _0x44b722]);
  _0x263568.useEffect(() => {
    if (_0x10ec53) {
      _0xae28c5("members");
      _0x4c1628("");
      _0x2c2324(_0x67dcc6);
      _0x12fe82(_0x246650 || null);
      _0x3327c5(null);
      _0x3aede6([]);
    }
  }, [_0x10ec53, _0x67dcc6, _0x246650, _0x2396de]);
  const _0x50150c = _0x263568.useMemo(() => {
    const _0x1357fd = _0x1f6d71.trim().toLowerCase();
    const _0x56cb2a = new Set(_0x2396de.map(_0x20d8c7 => Number(_0x20d8c7.id)));
    const _0x3e6dc0 = _0x371d57 ? Number(_0x371d57) : null;
    const _0x544dc2 = _0xb3d71c.filter(_0x234b35 => {
      const _0xa53922 = Number(_0x234b35.id);
      return !_0x56cb2a.has(_0xa53922) && _0xa53922 !== _0x3e6dc0;
    });
    if (_0x1357fd) {
      return _0x544dc2.filter(_0x396e61 => _0x396e61.username.toLowerCase().includes(_0x1357fd) || _0x396e61.display_name.toLowerCase().includes(_0x1357fd));
    } else {
      return _0x544dc2;
    }
  }, [_0xb3d71c, _0x1f6d71, _0x2396de, _0x371d57]);
  const _0x448268 = _0x263568.useCallback(_0x26fff1 => {
    _0x3aede6(_0x15d92b => _0x15d92b.includes(_0x26fff1) ? _0x15d92b.filter(_0x10d1b4 => _0x10d1b4 !== _0x26fff1) : _0x2396de.length + _0x15d92b.length >= 10 ? (_0x188e8e.error(_0x286c7f("groupDM.maxMembersError", {
      max: 10
    })), _0x15d92b) : [..._0x15d92b, _0x26fff1]);
  }, [_0x2396de.length]);
  const _0x3e349b = _0x263568.useCallback(async () => {
    try {
      _0x5ef258(true);
      const _0x1c7747 = {};
      if (_0x265e6b) {
        const _0x14ff44 = _0x498ea9.trim();
        if (_0x14ff44 !== _0x67dcc6 && _0x14ff44.length > 0) {
          _0x1c7747.name = _0x14ff44;
        }
        if (_0x30577a !== null) {
          _0x1c7747.avatar = _0x30577a;
        } else if (_0x30577a === null && _0x246650) {
          _0x1c7747.avatar = null;
        }
      }
      if (_0x11e6a2.length > 0) {
        _0x1c7747.add_recipients = _0x11e6a2;
      }
      if (Object.keys(_0x1c7747).length === 0) {
        _0x81ef68(false);
        return;
      }
      const _0x52d6c3 = await _0x4d6ad0(_0x2957c2, _0x1c7747);
      const _0x296811 = [..._0x2396de.map(_0x1bbdc9 => _0x1bbdc9.id), ..._0x11e6a2];
      _0x3c7788?.({
        name: _0x265e6b ? _0x52d6c3.name : _0x67dcc6,
        avatar: _0x265e6b ? _0x30577a : undefined,
        members: _0x296811
      });
      _0x81ef68(false);
    } catch {} finally {
      _0x5ef258(false);
    }
  }, [_0x11e6a2, _0x498ea9, _0x67dcc6, _0x30577a, _0x246650, _0x2396de, _0x2957c2, _0x265e6b, _0x81ef68, _0x3c7788]);
  _0x263568.useEffect(() => {
    if (!_0x30577a) {
      _0x12fe82(_0x246650 || null);
      return;
    }
    const _0x48c882 = URL.createObjectURL(_0x30577a);
    _0x12fe82(_0x48c882);
    return () => {
      URL.revokeObjectURL(_0x48c882);
    };
  }, [_0x30577a, _0x246650]);
  const _0x5be9f8 = _0x263568.useCallback(_0x207c3f => {
    const _0x380215 = URL.createObjectURL(_0x207c3f);
    if (_0x50bbb6) {
      URL.revokeObjectURL(_0x50bbb6);
    }
    _0x411cc8(_0x380215);
    _0x1ede2e(true);
  }, [_0x50bbb6]);
  const _0x3057a8 = _0x263568.useCallback(_0x34cc6b => {
    const _0x1d2b87 = _0x34cc6b.target.files?.[0];
    if (_0x1d2b87) {
      const _0x48ab74 = 5242880;
      if (_0x1d2b87.size > _0x48ab74) {
        _0x188e8e.error(_0x286c7f("groupDM.fileTooLarge"));
        _0x34cc6b.currentTarget.value = "";
        return;
      }
      _0x5be9f8(_0x1d2b87);
      _0x34cc6b.currentTarget.value = "";
    }
  }, [_0x5be9f8]);
  const _0x17fd07 = _0x263568.useCallback(() => {
    _0x3327c5(null);
    _0x12fe82(null);
  }, []);
  const _0x3f5023 = _0x263568.useCallback(async () => {
    if (_0x4e0db8) {
      try {
        _0x31c367(true);
        await _0x1bd40f(_0x2957c2, _0x4e0db8.id);
        _0x42ae3d(null);
        const _0x405eea = _0x2396de.filter(_0x449462 => _0x449462.id !== _0x4e0db8.id);
        _0x3c7788?.({
          name: _0x67dcc6,
          members: _0x405eea.map(_0x42b41e => _0x42b41e.id)
        });
      } catch {} finally {
        _0x31c367(false);
      }
    }
  }, [_0x4e0db8, _0x2957c2, _0x2396de, _0x67dcc6, _0x3c7788]);
  return _0x12eb47.jsx(_0x25176c, {
    open: _0x10ec53,
    onOpenChange: _0x81ef68,
    children: _0x12eb47.jsxs(_0x204664, {
      className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md overflow-hidden",
      children: [_0x12eb47.jsx("div", {
        className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40",
        children: _0x12eb47.jsxs("div", {
          className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col max-h-[85dvh]",
          children: [_0x12eb47.jsxs("div", {
            className: "px-4 py-4 border-b border-border-subtle shrink-0",
            children: [_0x12eb47.jsx(_0x5a7400, {
              className: "text-lg font-semibold text-text-primary",
              children: _0x286c7f("groupDM.editGroup")
            }), _0x12eb47.jsx(_0x479291, {
              className: "text-text-muted text-sm",
              children: _0x286c7f(_0x265e6b ? "groupDM.editGroupDescOwner" : "groupDM.editGroupDescMember")
            })]
          }), _0x265e6b && _0x12eb47.jsx("div", {
            className: "px-4 py-3 shrink-0",
            children: _0x12eb47.jsxs("div", {
              className: "flex gap-1 p-1 rounded-xl bg-surface-inset/40 border border-border-subtle",
              children: [_0x12eb47.jsx("button", {
                onClick: () => _0xae28c5("members"),
                className: "flex-1 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer " + (_0x23957c === "members" ? "bg-surface-inset/60 text-text-primary" : "text-text-tertiary hover:text-text-secondary"),
                children: _0x286c7f("groupDM.members")
              }), _0x12eb47.jsx("button", {
                onClick: () => _0xae28c5("details"),
                className: "flex-1 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer " + (_0x23957c === "details" ? "bg-surface-inset/60 text-text-primary" : "text-text-tertiary hover:text-text-secondary"),
                children: _0x286c7f("groupDM.details")
              })]
            })
          }), _0x12eb47.jsxs("div", {
            className: "flex-1 overflow-y-auto scrollbar-thin px-4",
            children: [_0x23957c === "members" && _0x12eb47.jsxs("div", {
              className: "space-y-3 pb-4",
              children: [_0x2396de.length > 0 && _0x12eb47.jsxs("div", {
                className: "space-y-1.5",
                children: [_0x12eb47.jsx("span", {
                  className: "text-xs text-text-muted",
                  children: _0x286c7f("groupDM.currentMembers", {
                    count: _0x2396de.length
                  })
                }), _0x12eb47.jsx("div", {
                  className: "flex flex-wrap gap-1.5",
                  children: _0x2396de.map(_0x27fbe6 => {
                    const _0x5e52ec = _0x371d57 != null && Number(_0x27fbe6.id) === Number(_0x371d57);
                    return _0x12eb47.jsxs("div", {
                      className: "flex items-center gap-1.5 pl-1 pr-1.5 py-1 rounded-full bg-surface-inset/40 border border-border-subtle group",
                      children: [_0x12eb47.jsxs(_0x10cc83, {
                        className: "size-5",
                        children: [_0x12eb47.jsx(_0x32e4e7, {
                          src: _0x27fbe6.avatar_url || undefined,
                          alt: _0x27fbe6.display_name
                        }), _0x12eb47.jsx(_0x3a5791, {
                          className: "text-[10px] bg-surface-inset text-text-primary",
                          children: _0x27fbe6.display_name.charAt(0).toUpperCase()
                        })]
                      }), _0x12eb47.jsx("span", {
                        className: "text-xs text-text-secondary font-medium",
                        children: _0x27fbe6.display_name
                      }), _0x5e52ec && _0x265e6b && _0x12eb47.jsx(_0x3c4611, {
                        icon: "solar:crown-bold-duotone",
                        className: "size-3 text-amber-400 fill-amber-400"
                      }), _0x265e6b && !_0x5e52ec && _0x12eb47.jsx("button", {
                        onClick: () => _0x42ae3d({
                          id: _0x27fbe6.id,
                          display_name: _0x27fbe6.display_name
                        }),
                        className: "size-4 rounded-full flex items-center justify-center text-text-muted hover:text-red-400 hover:bg-red-500/15 transition-colors cursor-pointer",
                        children: _0x12eb47.jsx(_0x30f915, {
                          className: "size-3"
                        })
                      })]
                    }, _0x27fbe6.id);
                  })
                })]
              }), _0x12eb47.jsx("span", {
                className: "text-xs text-text-muted",
                children: _0x286c7f("groupDM.addMembers")
              }), _0x12eb47.jsxs("div", {
                className: "flex items-center gap-2.5 px-3 py-2 rounded-xl bg-surface-inset/40 border border-border-subtle",
                children: [_0x12eb47.jsx(_0x3c4611, {
                  icon: "solar:magnifer-bold-duotone",
                  className: "size-4 text-text-muted shrink-0"
                }), _0x12eb47.jsx("input", {
                  type: "text",
                  placeholder: _0x286c7f("groupDM.searchFriendsShort"),
                  value: _0x1f6d71,
                  onChange: _0xa1f515 => _0x4c1628(_0xa1f515.target.value),
                  className: "flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none"
                }), _0x1f6d71 && _0x12eb47.jsx("button", {
                  onClick: () => _0x4c1628(""),
                  className: "text-text-muted hover:text-text-secondary cursor-pointer",
                  children: _0x12eb47.jsx(_0x30f915, {
                    className: "size-4"
                  })
                })]
              }), _0x12eb47.jsxs("div", {
                className: "rounded-xl bg-surface-inset/40 border border-border-subtle divide-y divide-border-subtle max-h-64 overflow-y-auto scrollbar-thin",
                children: [_0x50150c.length === 0 && _0x12eb47.jsxs("div", {
                  className: "flex flex-col items-center justify-center py-8 px-4 text-center",
                  children: [_0x12eb47.jsx(_0x3c4611, {
                    icon: "solar:ghost-bold-duotone",
                    className: "size-12 text-text-muted mb-3"
                  }), _0x12eb47.jsx("p", {
                    className: "text-text-tertiary text-sm font-medium mb-1",
                    children: _0x286c7f("groupDM.noFriendsToAdd")
                  }), _0x12eb47.jsx("p", {
                    className: "text-text-muted text-xs max-w-xs",
                    children: _0x1f6d71.trim() ? _0x286c7f("groupDM.noFriendsSearchHint") : _0x286c7f("groupDM.allFriendsInGroup")
                  })]
                }), _0x50150c.length > 0 && _0x11e6a2.length > 0 && _0x12eb47.jsx("div", {
                  className: "p-3 text-xs text-text-tertiary border-b border-border-subtle bg-surface-inset/10",
                  children: _0x286c7f("groupDM.selectedCount", {
                    current: _0x2396de.length + _0x11e6a2.length,
                    max: 10
                  })
                }), _0x50150c.map(_0x382e3f => {
                  const _0x21cc00 = _0x11e6a2.includes(_0x382e3f.id);
                  const _0x476499 = !_0x21cc00 && _0x2396de.length + _0x11e6a2.length >= 10;
                  return _0x12eb47.jsxs("label", {
                    className: "flex items-center gap-3 p-3 hover:bg-interactive-muted cursor-pointer transition-colors " + (_0x476499 ? "opacity-50 cursor-not-allowed" : ""),
                    children: [_0x12eb47.jsxs(_0x10cc83, {
                      className: "size-8 ring-2 ring-border-default",
                      children: [_0x12eb47.jsx(_0x32e4e7, {
                        src: _0x382e3f.avatar_url || undefined,
                        alt: _0x382e3f.display_name
                      }), _0x12eb47.jsx(_0x3a5791, {
                        className: "text-text-primary text-xs font-medium bg-gradient-to-br from-slate-600 to-slate-700",
                        children: _0x382e3f.display_name.charAt(0).toUpperCase()
                      })]
                    }), _0x12eb47.jsxs("div", {
                      className: "flex-1 min-w-0",
                      children: [_0x12eb47.jsxs("div", {
                        className: "flex items-center gap-1.5",
                        children: [_0x12eb47.jsx("p", {
                          className: "text-text-primary text-sm font-medium truncate",
                          children: _0x382e3f.display_name
                        }), !_0x382e3f.isFriend && _0x12eb47.jsx("span", {
                          className: "text-[10px] px-1.5 py-0.5 rounded bg-surface-inset/50 text-text-tertiary",
                          children: "DM"
                        })]
                      }), _0x12eb47.jsxs("p", {
                        className: "text-text-muted text-xs truncate",
                        children: ["@", _0x382e3f.username]
                      })]
                    }), _0x12eb47.jsx(_0x35157f, {
                      checked: _0x21cc00,
                      disabled: _0x476499,
                      onCheckedChange: () => !_0x476499 && _0x448268(_0x382e3f.id)
                    })]
                  }, _0x382e3f.id);
                })]
              })]
            }), _0x265e6b && _0x23957c === "details" && _0x12eb47.jsxs("div", {
              className: "space-y-3 pb-4",
              children: [_0x12eb47.jsxs("div", {
                className: "flex flex-col items-center space-y-3 pt-2",
                children: [_0x12eb47.jsxs("div", {
                  className: "relative",
                  children: [_0x12eb47.jsxs("label", {
                    className: "relative rounded-xl size-20 flex items-center justify-center cursor-pointer overflow-hidden ring-2 ring-border-subtle hover:ring-border-default transition-colors",
                    children: [_0x34b53a ? _0x12eb47.jsx("img", {
                      src: _0x34b53a,
                      alt: "avatar",
                      className: "w-full h-full object-cover"
                    }) : _0x12eb47.jsx("div", {
                      className: "w-full h-full bg-surface-inset/40 flex items-center justify-center",
                      children: _0x12eb47.jsx(_0x3c4611, {
                        icon: "solar:gallery-bold-duotone",
                        className: "size-10 text-text-muted"
                      })
                    }), _0x12eb47.jsx("input", {
                      type: "file",
                      accept: "image/*",
                      className: "absolute inset-0 opacity-0 cursor-pointer",
                      onChange: _0x3057a8
                    })]
                  }), _0x34b53a && _0x12eb47.jsx("button", {
                    onClick: _0x17fd07,
                    className: "absolute -top-2 -right-2 size-6 bg-red-500 hover:bg-red-600 text-text-primary rounded-full flex items-center justify-center cursor-pointer transition-colors",
                    children: _0x12eb47.jsx(_0x30f915, {
                      className: "size-3"
                    })
                  })]
                }), _0x12eb47.jsxs("div", {
                  className: "text-center",
                  children: [_0x12eb47.jsx("p", {
                    className: "text-sm text-text-secondary font-medium",
                    children: _0x286c7f("groupDM.groupAvatar")
                  }), _0x12eb47.jsx("p", {
                    className: "text-xs text-text-muted",
                    children: _0x286c7f("groupDM.groupAvatarHint")
                  })]
                })]
              }), _0x12eb47.jsxs("div", {
                className: "space-y-1.5",
                children: [_0x12eb47.jsx("label", {
                  htmlFor: "group-name",
                  className: "text-sm text-text-secondary font-medium",
                  children: _0x286c7f("groupDM.groupNameLabel")
                }), _0x12eb47.jsx("input", {
                  id: "group-name",
                  type: "text",
                  maxLength: 50,
                  placeholder: _0x286c7f("groupDM.groupNameInputPlaceholder"),
                  value: _0x498ea9,
                  onChange: _0x210109 => {
                    const _0x409cc8 = _0x210109.target.value;
                    if (new TextEncoder().encode(_0x409cc8).length <= 200) {
                      _0x2c2324(_0x409cc8);
                    }
                  },
                  className: "w-full h-10 px-3 rounded-xl bg-surface-inset/40 border border-border-subtle text-text-primary text-sm placeholder:text-text-muted outline-none focus:border-border-default transition-colors"
                }), _0x12eb47.jsx("p", {
                  className: "text-xs text-text-muted",
                  children: _0x286c7f("groupDM.groupNameChangeHint")
                })]
              })]
            })]
          }), _0x12eb47.jsx("div", {
            className: "sticky bottom-0 px-4 py-3 border-t border-border-subtle bg-surface-raised/95 backdrop-blur-xl shrink-0",
            children: _0x12eb47.jsxs("div", {
              className: "flex items-center gap-2",
              children: [_0x12eb47.jsx("button", {
                onClick: () => _0x81ef68(false),
                className: "flex-1 h-10 rounded-xl text-sm font-medium text-text-secondary bg-surface-inset/40 border border-border-subtle hover:bg-interactive-muted transition-colors cursor-pointer",
                children: _0x286c7f("groupDM.cancel")
              }), _0x12eb47.jsx("button", {
                onClick: _0x3e349b,
                disabled: _0x174d79,
                className: "flex-1 h-10 rounded-xl text-sm font-semibold bg-accent-primary hover:bg-[#9cef00] text-black transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
                children: _0x174d79 ? _0x12eb47.jsx(_0x406241, {
                  className: "size-4 animate-spin mx-auto"
                }) : _0x286c7f("groupDM.save")
              })]
            })
          })]
        })
      }), _0x12eb47.jsx(_0x1d1244, {
        isOpen: _0x8d763c,
        onClose: () => {
          _0x1ede2e(false);
          _0x411cc8(null);
        },
        imageSrc: _0x50bbb6,
        aspect: 1,
        imageName: "group-avatar.png",
        onCropComplete: _0x3c74cf => {
          _0x3327c5(_0x3c74cf);
        }
      }), _0x12eb47.jsx(_0x46ae2c, {
        open: !!_0x4e0db8,
        onOpenChange: _0x3c387b => {
          if (!_0x3c387b) {
            _0x42ae3d(null);
          }
        },
        onConfirm: _0x3f5023,
        isLoading: _0xccee0e,
        variant: "danger",
        icon: _0x12eb47.jsx(_0x4e2ee6, {
          className: "size-5 text-red-400"
        }),
        title: _0x286c7f("groupDM.removeMemberTitle"),
        subtitle: _0x4e0db8?.display_name,
        description: _0x286c7f("groupDM.removeMemberDesc", {
          name: _0x4e0db8?.display_name
        }),
        confirmText: _0x286c7f("groupDM.removeMemberConfirm")
      })]
    })
  });
});
export { k as default };