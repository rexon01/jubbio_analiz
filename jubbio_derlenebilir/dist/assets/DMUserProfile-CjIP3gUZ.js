import { f as _0x11dc60, b as _0x550f4a, r as _0x27cbae, aP as _0x3a0cba, aZ as _0x3172d1, j as _0x566637, aN as _0x40aa68, b2 as _0x3a0143, I as _0x3835, P as _0x2b9bfd, R as _0x1cae5a, h as _0x1ae042 } from "./index-cQfEKR1W.js";
import { A as _0x2b3364, a as _0x12f21c, b as _0x4cb890 } from "./avatar-C-4BWxT3.js";
import { C as _0x3314aa } from "./ConfirmDialog-B4gIndKy.js";
import { F as _0x2db6c1, I as _0x6a7c80 } from "./IncomingFriendRequestBanner-JRkFxhgX.js";
import { c1 as _0x4b106f, bO as _0x5bbadc, ab as _0x46aa19, ac as _0x49dae1, ad as _0x121f96, bu as _0x3aca19, af as _0x254cf8, ag as _0x3ca824, ah as _0xa7f1f2, ai as _0x11da28, aj as _0x691c60, ak as _0x2edb45, al as _0xc82dcc } from "./AppLayout-BEBJqe9_.js";
import { r as _0x4c555f, aU as _0x2cab75, ak as _0xc51b35, aQ as _0x2335bd, ai as _0x1baaa1, B as _0x2648e7, s as _0x12195a, aO as _0x3afd33, aP as _0x50edf9 } from "./soundboardFx-C2LP-Hjs.js";
import { d as _0x59962f } from "./validators-DXDy_d27.js";
import { c as _0x3dc56c } from "./clipboard-BQ9qambq.js";
import { U as _0x5bbbf1 } from "./user-minus-CgemOKRn.js";
import { C as _0xe60399 } from "./zap-B3VH4qT9.js";
import "./alert-dialog-BZuoGg7O.js";
import "./index-yuEHo9bu.js";
import "./index-Oyyh46KT.js";
import "./loader-circle-CTtxa1g9.js";
import "./ReportDialog-ByLH3UTW.js";
import "./dialog-BMMpM7PR.js";
import "./drawer-X7YyCqpZ.js";
import "./report-SxkUMari.js";
import "./arrow-up-B3WqkBSJ.js";
import "./tr-D975n4_R.js";
import "./select-DQjjzSZW.js";
import "./arrow-left-B3FhifN2.js";
import "./arrow-right-DvlsXLCB.js";
import "./switch-lfnbGePn.js";
import "./input-AMyERYwJ.js";
import "./subscription-Cl5JAGbQ.js";
import "./useTheme-CzNZmxfV.js";
import "./ComparisonTable-DUfwtDVZ.js";
import "./card-Bk6R3tFg.js";
import "./gift-Co-azAyt.js";
import "./CheckoutPlaceholder-Dr0TfmeQ.js";
import "./IyzicoCheckoutFrame-f1WDW5o8.js";
import "./submit-button-B2LF_DTf.js";
import "./NexusSuccessArtwork-YGvslhff.js";
import "./circle-x-BBSKKBIf.js";
import "./user-DSjlY8FD.js";
import "./refresh-cw-C3NlhmpS.js";
import "./trash-2-DuFcDcAU.js";
import "./label-ODyS97Ju.js";
import "./video-AtsAgCNJ.js";
import "./plus-B7c2Px8R.js";
import "./channelNotificationStore-FXjXBmS_.js";
import "./index.module-CsHioFCV.js";
import "./index-BUijt7wr.js";
const K = _0x1cae5a.memo(({
  bio: _0x1090b5
}) => {
  const {
    t: _0x59ceee
  } = _0x550f4a();
  const [_0x302704, _0x4f2f1e] = _0x27cbae.useState(false);
  const [_0x452b22, _0x4ebe71] = _0x27cbae.useState(false);
  const _0x22e75e = _0x1cae5a.useRef(null);
  _0x27cbae.useEffect(() => {
    if (_0x22e75e.current) {
      _0x4ebe71(_0x22e75e.current.scrollHeight > 60);
    }
  }, [_0x1090b5]);
  return _0x566637.jsxs("div", {
    className: "rounded-xl bg-black/10 border border-white/10 p-3",
    children: [_0x566637.jsx("p", {
      className: "text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1.5",
      children: _0x59ceee("dm.aboutMe")
    }), _0x566637.jsx("div", {
      ref: _0x22e75e,
      className: "text-[13px] text-text-secondary leading-relaxed break-all overflow-wrap-anywhere " + (_0x302704 ? "max-h-44 overflow-y-auto scrollbar-thin" : "overflow-hidden"),
      style: !_0x302704 && _0x452b22 ? {
        maxHeight: "60px"
      } : undefined,
      children: _0x566637.jsx(_0xc82dcc, {
        content: _0x1090b5
      })
    }), _0x452b22 && _0x566637.jsx("button", {
      onClick: () => _0x4f2f1e(_0x22bf6b => !_0x22bf6b),
      className: "mt-1 text-[11px] font-medium text-text-primary/80 hover:text-text-primary underline underline-offset-2 transition-colors cursor-pointer",
      children: _0x59ceee(_0x302704 ? "userDetailsPopover.showLess" : "userDetailsPopover.showMore")
    })]
  });
});
K.displayName = "DMBioSection";
const V = ({
  isBot: _0x2348e7 = false,
  applicationId: _0x359503,
  userName: _0x466c01,
  username: _0x59f416,
  userAvatar: _0x578605,
  bannerUrl: _0x31cac8,
  profileTheme: _0x726a30,
  bio: _0x47f6ee,
  isOwner: _0x1d7043,
  userId: _0x4701ba,
  presence: _0x6a1cef,
  hideMessageButton: _0x3cffe7 = false,
  allowDirectMessages: _0x23a738,
  isBlocked: _0x3ffbe5 = false,
  customStatus: _0x3e3cb4
}) => {
  const _0x5bd385 = _0x11dc60.getState().user?.id;
  const {
    t: _0x3d3266
  } = _0x550f4a();
  const _0x4bfc6f = _0x466c01.charAt(0).toUpperCase();
  const [_0x2f454f, _0x3ae4bc] = _0x27cbae.useState(false);
  const [_0x571e2c, _0x11ec29] = _0x27cbae.useState(false);
  const [_0x52b043, _0x9c33d0] = _0x27cbae.useState(false);
  const [_0x3787bb, _0x2d73c1] = _0x27cbae.useState(false);
  const [_0x59460d, _0x5671ea] = _0x27cbae.useState(false);
  const [_0x2ef825, _0x2b763b] = _0x27cbae.useState(false);
  const [_0x5306b0, _0x8b183] = _0x27cbae.useState(false);
  const [_0xce0fd3, _0x5e563d] = _0x27cbae.useState(false);
  const [_0x311ef9, _0x37bcec] = _0x27cbae.useState(false);
  const [_0x8f2d66, _0x75a258] = _0x27cbae.useState(false);
  const _0x151b74 = _0x4b106f();
  const [_0x26065d, _0x47ee37] = _0x27cbae.useState([]);
  const [_0x45f1cb, _0x24e536] = _0x27cbae.useState(0);
  const [_0x4732f0, _0x447d2b] = _0x27cbae.useState(false);
  const [_0x901e3, _0x48e9ac] = _0x27cbae.useState("");
  const [_0xa86019, _0x32b6f8] = _0x27cbae.useState(false);
  const [_0x3045ee, _0x1ee28d] = _0x27cbae.useState(false);
  const [_0x4574ca, _0x41c6cc] = _0x27cbae.useState(false);
  const _0x8498bd = _0x27cbae.useMemo(() => {
    const _0x2c1265 = Number(_0x4701ba);
    if (Number.isNaN(_0x2c1265)) {
      return null;
    } else {
      return _0x2c1265;
    }
  }, [_0x4701ba]);
  const _0x5d19c3 = _0x5bbadc(_0x4701ba);
  const _0xc4af95 = _0x46aa19(_0x4701ba ? String(_0x4701ba) : undefined);
  const _0x4ef006 = _0x27cbae.useMemo(() => {
    if (_0xc4af95.epoch > 0) {
      const _0x1cada0 = _0xc4af95.state;
      if (_0x1cada0 === "invisible") {
        return "offline";
      } else if (_0x1cada0 === "online" || _0x1cada0 === "idle" || _0x1cada0 === "dnd") {
        return _0x1cada0;
      } else {
        return "offline";
      }
    }
    const _0x40db13 = _0x6a1cef?.status;
    if (_0x40db13 === "invisible") {
      return "offline";
    } else if (_0x40db13 === "online" || _0x40db13 === "idle" || _0x40db13 === "dnd") {
      return _0x40db13;
    } else {
      return "offline";
    }
  }, [_0xc4af95, _0x6a1cef?.status]);
  const _0x17d634 = _0x3a0cba(_0x31eb4e => _0x31eb4e.pendingOutgoing);
  const _0x3669d1 = _0x3a0cba(_0x14a4c8 => _0x14a4c8.pendingIncoming);
  const _0x8d27d1 = _0x3a0cba(_0x9ee26b => _0x9ee26b.blockedUsers);
  const _0x15afbc = _0x27cbae.useMemo(() => !!_0x3ffbe5 || !!_0x8498bd && _0x8d27d1.some(_0x4ac3b3 => _0x4ac3b3.id === _0x8498bd), [_0x3ffbe5, _0x8498bd, _0x8d27d1]);
  const _0x20cbf2 = _0x27cbae.useMemo(() => !!_0x8498bd && !_0x2f454f && _0x17d634.some(_0xade56f => _0xade56f.id === _0x8498bd), [_0x17d634, _0x8498bd, _0x2f454f]);
  const _0x5c0751 = _0x27cbae.useMemo(() => !!_0x8498bd && !_0x2f454f && _0x3669d1.some(_0x2f93a5 => _0x2f93a5.id === _0x8498bd), [_0x3669d1, _0x8498bd, _0x2f454f]);
  const _0xfa0f7e = _0x27cbae.useMemo(() => {
    if (!_0x8498bd) {
      return null;
    }
    const _0x271b8a = _0x3669d1.find(_0x5dba38 => _0x5dba38.id === _0x8498bd);
    return _0x271b8a?.request_id || null;
  }, [_0x3669d1, _0x8498bd]);
  const _0x5b12b0 = _0x27cbae.useMemo(() => String(_0x5bd385 ?? "") === String(_0x4701ba), [_0x5bd385, _0x4701ba]);
  _0x27cbae.useEffect(() => {
    _0x3ae4bc(false);
    _0x11ec29(false);
    _0x9c33d0(false);
    _0x5671ea(false);
    _0x2b763b(false);
    _0x8b183(false);
    _0x5e563d(false);
    _0x47ee37([]);
    _0x24e536(0);
    _0x447d2b(false);
    _0x48e9ac("");
    _0x32b6f8(false);
    _0x1ee28d(false);
    _0x41c6cc(false);
  }, [_0x4701ba]);
  _0x3172d1((_0x492db0, _0x4bfeb8) => {
    if (_0x492db0 !== "user_updated") {
      return;
    }
    const _0x36f622 = Number(_0x4bfeb8?.userId || _0x4bfeb8?.id);
    if (!_0x36f622 || _0x36f622 !== _0x8498bd) {
      return;
    }
    const _0xdebb1e = _0x4bfeb8?.changes || {};
    if (!_0xdebb1e.display_name) {
      _0xdebb1e.username;
    }
  }, [_0x8498bd]);
  _0x3172d1((_0x193dc8, _0xa0302b) => {
    if (_0x8498bd && _0x5bd385) {
      if (_0x193dc8 === "friend_request_responded") {
        const _0x51c08c = Number(_0xa0302b?.from_user_id || _0xa0302b?.from_user_metadata?.id);
        const _0x472856 = Number(_0xa0302b?.to_user_id || _0xa0302b?.to_user_metadata?.id);
        const _0x3f8ef6 = _0xa0302b?.status;
        if (_0x3f8ef6 !== "accepted" || _0x51c08c !== _0x8498bd && _0x472856 !== _0x8498bd) {
          if (_0x3f8ef6 === "rejected" && (_0x51c08c === _0x8498bd || _0x472856 === _0x8498bd)) {
            _0x3ae4bc(false);
          }
        } else {
          _0x3ae4bc(true);
        }
      } else if (_0x193dc8 === "friend_added") {
        const _0xbfd84a = Number(_0xa0302b?.user_id);
        const _0x3e5bb8 = Number(_0xa0302b?.friend_id);
        const _0x2087fd = Number(_0x5bd385);
        if ((_0xbfd84a === _0x2087fd ? _0x3e5bb8 : _0x3e5bb8 === _0x2087fd ? _0xbfd84a : null) === _0x8498bd) {
          _0x3ae4bc(true);
        }
      } else if (_0x193dc8 === "friend_removed") {
        const _0x27ed3e = Number(_0xa0302b?.user_id);
        const _0x5c1fbc = Number(_0xa0302b?.friend_id);
        const _0x33838a = Number(_0x5bd385);
        if ((_0x27ed3e === _0x33838a ? _0x5c1fbc : _0x5c1fbc === _0x33838a ? _0x27ed3e : null) === _0x8498bd) {
          _0x3ae4bc(false);
        }
      }
    }
  }, [_0x8498bd, _0x5bd385]);
  _0x27cbae.useEffect(() => {
    let _0x23a308 = true;
    (async () => {
      if (_0x5b12b0 || _0x2348e7) {
        _0x3ae4bc(false);
      } else {
        try {
          if (!_0x8498bd || !_0x59f416) {
            return;
          }
          if (_0x59f416 === "—" || _0x59f416.toLowerCase() === "yükleniyor…") {
            _0x3ae4bc(false);
            return;
          }
          const _0x558ac9 = await _0x2cab75(_0x59f416, 1, 1);
          const _0x4114b6 = Array.isArray(_0x558ac9?.data) ? _0x558ac9.data : [];
          const _0x8089a4 = String(_0x59f416).toLowerCase();
          const _0x2956bf = _0x4114b6.some(_0x2d5dc0 => {
            const _0x5bf854 = String(_0x2d5dc0?.friend_metadata?.id ?? _0x2d5dc0?.friend_id);
            const _0x5dcf0d = String(_0x2d5dc0?.friend_metadata?.username ?? "").toLowerCase();
            return _0x5bf854 === String(_0x8498bd) || _0x5dcf0d && _0x5dcf0d === _0x8089a4;
          });
          if (_0x23a308) {
            _0x3ae4bc(_0x2956bf);
          }
        } catch {
          if (_0x23a308) {
            _0x3ae4bc(false);
          }
        }
      }
    })();
    return () => {
      _0x23a308 = false;
    };
  }, [_0x8498bd, _0x5b12b0, _0x2348e7, _0x59f416]);
  _0x27cbae.useEffect(() => {
    let _0x21172f = true;
    (async () => {
      if (!_0x2348e7 && _0x2f454f && _0x8498bd && !_0x5b12b0 && !(_0x45f1cb > 0) && !(_0x26065d.length > 0)) {
        try {
          _0x447d2b(true);
          const _0x31dbdb = await _0xc51b35(_0x8498bd);
          if (!_0x21172f) {
            return;
          }
          _0x47ee37(_0x31dbdb?.mutual_friends || []);
          _0x24e536(_0x31dbdb?.count || (_0x31dbdb?.mutual_friends?.length ?? 0));
        } catch {
          if (!_0x21172f) {
            return;
          }
          _0x47ee37([]);
          _0x24e536(0);
        } finally {
          if (_0x21172f) {
            _0x447d2b(false);
          }
        }
      }
    })();
    return () => {
      _0x21172f = false;
    };
  }, [_0x2348e7, _0x2f454f, _0x8498bd, _0x5b12b0, _0x45f1cb, _0x26065d.length]);
  _0x27cbae.useEffect(() => {
    let _0x3430f8 = true;
    (async () => {
      try {
        if (_0x2f454f && typeof _0x8498bd == "number") {
          const _0x2cdce0 = await _0x2335bd(_0x8498bd);
          if (!_0x3430f8) {
            return;
          }
          const _0x44dc4b = _0x2cdce0?.note || "";
          _0x48e9ac(_0x44dc4b);
          _0x41c6cc(_0x44dc4b.length > 0);
        }
      } catch {
        if (_0x3430f8) {
          _0x41c6cc(false);
        }
      }
    })();
    return () => {
      _0x3430f8 = false;
    };
  }, [_0x2f454f, _0x8498bd]);
  const {
    badges: _0xfbd0e2,
    badgesLoading: _0xe0e098
  } = _0x49dae1(_0x8498bd, !_0x5b12b0);
  const _0x41f563 = () => {
    _0x8b183(true);
  };
  const _0x2ba9dd = () => {
    _0x37bcec(true);
  };
  return _0x566637.jsx("div", {
    className: "w-80 p-3 flex flex-col h-full",
    children: _0x566637.jsx("div", {
      className: "rounded-lg shadow-2xl shadow-black/5 dark:shadow-black/40 flex-1 min-h-0 " + (_0x726a30 ? "p-[3px]" : "p-px bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20"),
      style: _0x726a30 ? (() => {
        const [_0x36ba63, _0x1577d7] = _0x726a30.split("|");
        if (_0x36ba63 && _0x1577d7) {
          return {
            background: "linear-gradient(180deg, " + _0x36ba63 + " 0%, " + _0x36ba63 + " 40%, " + _0x1577d7 + " 100%)"
          };
        } else {
          return undefined;
        }
      })() : undefined,
      children: _0x566637.jsxs("div", {
        className: "relative overflow-auto h-full bg-surface-raised rounded-lg scrollbar-hide " + (_0x726a30 && !_0x2edb45(_0x726a30) ? "theme-dark-text" : "") + " " + (_0x726a30 && _0x2edb45(_0x726a30) ? "theme-light-text" : ""),
        style: _0x691c60(_0x726a30),
        children: [_0x726a30 && (() => {
          const [_0x1da834, _0x4a2d49] = _0x726a30.split("|");
          if (_0x1da834 && _0x4a2d49) {
            return _0x566637.jsx("div", {
              className: "absolute inset-0 pointer-events-none z-0 " + (_0x121f96(_0x726a30) ? "opacity-100" : "opacity-50"),
              style: {
                background: "linear-gradient(180deg, " + _0x1da834 + " 0%, " + _0x4a2d49 + " 100%)"
              }
            });
          } else {
            return null;
          }
        })(), _0x566637.jsxs("div", {
          className: "relative z-[1]",
          children: [_0x566637.jsxs("div", {
            className: "relative aspect-16/6",
            children: [_0x566637.jsx("div", {
              className: "absolute inset-0 bg-center bg-cover",
              style: {
                backgroundImage: _0x31cac8 ? "url(" + _0x31cac8 + ")" : "linear-gradient(135deg, rgba(173,255,8,0.15) 0%, var(--color-surface-overlay) 50%, var(--color-surface-base) 100%)"
              }
            }), _0x566637.jsx("div", {
              className: "absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent"
            }), !_0x5b12b0 && _0x566637.jsxs("div", {
              className: "absolute top-2.5 right-2.5 z-10 flex items-center gap-1",
              children: [_0x566637.jsx(_0x40aa68, {
                label: _0x15afbc ? _0x3d3266("dm.unblock", "Engeli Kaldır") : _0x3d3266("dm.block"),
                side: "bottom",
                children: _0x566637.jsx("button", {
                  onClick: _0x43cf95 => {
                    _0x43cf95.preventDefault();
                    _0x43cf95.stopPropagation();
                    if (_0x15afbc) {
                      _0x2ba9dd();
                    } else {
                      _0x41f563();
                    }
                  },
                  className: "size-7 rounded-lg bg-black/40 hover:bg-black/60 border border-white/10 backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer",
                  "aria-label": _0x15afbc ? _0x3d3266("dm.unblock", "Engeli Kaldır") : _0x3d3266("dm.block"),
                  children: _0x566637.jsx(_0x3aca19, {
                    className: "size-3.5 text-white/70"
                  })
                })
              }), _0x2f454f && _0x566637.jsx(_0x40aa68, {
                label: _0x3d3266("dm.removeFriend"),
                side: "bottom",
                children: _0x566637.jsx("button", {
                  onClick: _0x2c0858 => {
                    _0x2c0858.preventDefault();
                    _0x2c0858.stopPropagation();
                    _0x5671ea(true);
                  },
                  className: "size-7 rounded-lg bg-black/40 hover:bg-black/60 border border-white/10 backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer",
                  "aria-label": _0x3d3266("dm.removeFriend"),
                  children: _0x566637.jsx(_0x5bbbf1, {
                    className: "size-3.5 text-white/70"
                  })
                })
              })]
            })]
          }), _0x566637.jsx("div", {
            className: "relative px-4 -mt-10 z-10 mb-1",
            children: _0x566637.jsxs("div", {
              className: "flex items-start gap-0",
              children: [_0x566637.jsxs("div", {
                className: "relative inline-block shrink-0",
                children: [_0x566637.jsxs("div", {
                  className: "relative cursor-pointer group/avatar",
                  onClick: () => {
                    _0x3a0143.getState().openProfileModal({
                      isBot: _0x2348e7,
                      userId: _0x8498bd,
                      name: _0x466c01,
                      username: _0x59f416 || _0x466c01.toLowerCase().replace(/\s+/g, ""),
                      avatarUrl: _0x578605,
                      bannerUrl: _0x31cac8,
                      profileTheme: _0x726a30,
                      bio: _0x47f6ee,
                      presenceStatus: _0x6a1cef?.status || "offline",
                      isFriend: _0x2f454f,
                      isSelf: _0x5b12b0,
                      isSentPending: _0x20cbf2,
                      allowDirectMessages: _0x23a738
                    });
                  },
                  children: [_0x566637.jsxs(_0x2b3364, {
                    className: "size-[4.5rem] bg-surface-raised ring-4 " + (_0x726a30 ? "border-0" : "border-4 border-border-subtle") + " shadow-xl shadow-black/30 " + (_0x4ef006 === "online" ? "ring-green-500" : _0x4ef006 === "idle" ? "ring-yellow-500" : _0x4ef006 === "dnd" ? "ring-red-500" : "ring-surface-raised/95"),
                    children: [_0x578605 ? _0x566637.jsx(_0x12f21c, {
                      src: _0x578605,
                      alt: _0x466c01
                    }) : null, _0x566637.jsx(_0x4cb890, {
                      className: "text-base font-semibold bg-gradient-to-br from-slate-400 to-slate-500 dark:from-slate-600 dark:to-slate-700 text-text-primary/90",
                      children: _0x4bfc6f
                    })]
                  }), _0x566637.jsx("div", {
                    className: "absolute inset-0 rounded-full bg-black/0 group-hover/avatar:bg-black/30 transition-colors ring-4 ring-transparent"
                  })]
                }), _0x566637.jsx("div", {
                  className: "presence-badge-frame absolute -bottom-1 -right-0.5 rounded-full border-[3px] border-surface-raised bg-surface-raised flex items-center justify-center overflow-visible [&:has([data-presence-device=mobile])]:rounded-none [&:has([data-presence-device=mobile])]:right-0 [&:has([data-presence-device=mobile])]:-bottom-0.5 [&:has([data-presence-device=mobile])]:border-0 [&:has([data-presence-device=mobile])]:bg-transparent",
                  children: _0x566637.jsx(_0x254cf8, {
                    userId: String(_0x4701ba),
                    size: 4,
                    borderWidth: 1,
                    borderColor: "border-surface-raised",
                    apiPresence: {
                      status: _0x4ef006,
                      updated_at: ""
                    }
                  })
                })]
              }), _0x3e3cb4?.text && _0x566637.jsx("div", {
                className: "relative mt-5 -ml-1 flex-1 min-w-0 group/status",
                children: _0x566637.jsx("div", {
                  className: "ml-4",
                  children: _0x566637.jsx(_0x3ca824, {
                    customStatus: _0x3e3cb4,
                    onSubmit: () => {},
                    onClear: () => {},
                    editable: false,
                    bubbleStyle: _0xa7f1f2(_0x726a30)
                  })
                })
              })]
            })
          }), _0x566637.jsxs("div", {
            className: "px-4 pb-3",
            children: [_0x2348e7 && _0x566637.jsxs("div", {
              className: "mt-3 rounded-xl bg-surface-overlay/60 border border-border-subtle p-3",
              children: [_0x566637.jsx("div", {
                className: "flex items-center gap-2 mb-2",
                children: _0x566637.jsxs("div", {
                  className: "inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md bg-emerald-500/15",
                  children: [_0x566637.jsxs("svg", {
                    className: "w-3.5 h-3.5 text-emerald-400",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [_0x566637.jsx("circle", {
                      cx: "12",
                      cy: "12",
                      r: "10"
                    }), _0x566637.jsx("path", {
                      d: "M2 12h20"
                    }), _0x566637.jsx("path", {
                      d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                    })]
                  }), _0x566637.jsx("span", {
                    className: "text-[10px] font-semibold text-emerald-400",
                    children: _0x3d3266("userDetailsPopover.app")
                  })]
                })
              }), _0x566637.jsx("p", {
                className: "text-xs text-text-secondary leading-relaxed",
                children: _0x3d3266("dm.botDescription")
              }), _0x359503 && _0x566637.jsxs("button", {
                onClick: async () => {
                  await navigator.clipboard.writeText(_0x359503);
                  _0x2b9bfd.success(_0x3d3266("dm.applicationIdCopied", "Uygulama kimliği kopyalandı"));
                },
                className: "mt-2.5 w-full flex items-center justify-between gap-2 px-2.5 py-2 rounded-lg bg-surface-inset/50 hover:bg-surface-inset/70 border border-border-subtle transition-colors cursor-pointer group",
                children: [_0x566637.jsxs("div", {
                  className: "min-w-0 text-left",
                  children: [_0x566637.jsx("p", {
                    className: "text-[10px] text-text-muted mb-0.5",
                    children: _0x3d3266("dm.botApplicationId")
                  }), _0x566637.jsx("p", {
                    className: "text-xs text-text-secondary font-mono truncate",
                    children: _0x359503
                  })]
                }), _0x566637.jsx(_0x3835, {
                  icon: "solar:copy-bold-duotone",
                  className: "size-4 text-text-muted group-hover:text-text-secondary transition-colors shrink-0"
                })]
              })]
            }), _0x566637.jsxs("div", {
              className: "mt-2 flex items-center justify-between gap-2",
              children: [_0x566637.jsxs("div", {
                className: "min-w-0",
                children: [_0x566637.jsxs("div", {
                  className: "flex items-center gap-1.5",
                  children: [_0x566637.jsx("div", {
                    className: "text-sm font-bold text-text-primary truncate cursor-pointer hover:underline",
                    onClick: () => {
                      _0x3a0143.getState().openProfileModal({
                        isBot: _0x2348e7,
                        userId: _0x8498bd,
                        name: _0x466c01,
                        username: _0x59f416 || _0x466c01.toLowerCase().replace(/\s+/g, ""),
                        avatarUrl: _0x578605,
                        bannerUrl: _0x31cac8,
                        profileTheme: _0x726a30,
                        bio: _0x47f6ee,
                        presenceStatus: _0x6a1cef?.status || "offline",
                        isFriend: _0x2f454f,
                        isSelf: _0x5b12b0,
                        isSentPending: _0x20cbf2,
                        allowDirectMessages: _0x23a738
                      });
                    },
                    children: _0x466c01
                  }), _0x1d7043 && _0x566637.jsx(_0x40aa68, {
                    label: _0x3d3266("dm.serverOwner"),
                    side: "top",
                    children: _0x566637.jsx(_0xe60399, {
                      className: "w-4 h-4 text-yellow-400 fill-yellow-400"
                    })
                  })]
                }), _0x566637.jsxs("div", {
                  className: "text-xs text-text-tertiary truncate",
                  children: ["@", _0x59f416 || _0x466c01.toLowerCase().replace(/\s+/g, "")]
                })]
              }), _0x566637.jsx(_0x2db6c1, {
                isBot: _0x2348e7,
                isFriend: _0x2f454f,
                isSentPending: _0x20cbf2,
                isReceivedPending: _0x5c0751,
                isSelf: _0x5b12b0,
                addingFriend: _0x571e2c,
                cancelling: _0x52b043,
                acceptingRequest: _0x3787bb,
                onAddFriend: async () => {
                  if (!_0x2f454f && _0x59f416 && !_0x571e2c) {
                    try {
                      _0x11ec29(true);
                      await _0x12195a(_0x59f416);
                    } catch {} finally {
                      _0x11ec29(false);
                    }
                  }
                },
                onCancelRequest: async () => {
                  if (!_0x8498bd || _0x52b043) {
                    return;
                  }
                  const _0x4f4144 = _0x17d634.find(_0x15d57c => _0x15d57c.id === _0x8498bd);
                  if (_0x4f4144?.request_id) {
                    try {
                      _0x9c33d0(true);
                      await _0x2648e7(_0x4f4144.request_id);
                      _0x3a0cba.getState().removeOutgoingRequest(_0x8498bd);
                    } catch {} finally {
                      _0x9c33d0(false);
                    }
                  }
                },
                onRemoveFriend: () => _0x5671ea(true),
                onAcceptRequest: async () => {
                  if (_0xfa0f7e && !_0x3787bb) {
                    try {
                      _0x2d73c1(true);
                      await _0x1baaa1(_0xfa0f7e, "accepted");
                      _0x3a0cba.getState().removeIncomingRequest(_0x8498bd);
                      _0x3ae4bc(true);
                    } catch {} finally {
                      _0x2d73c1(false);
                    }
                  }
                },
                onRejectRequest: async () => {
                  if (_0xfa0f7e) {
                    try {
                      await _0x1baaa1(_0xfa0f7e, "rejected");
                      _0x3a0cba.getState().removeIncomingRequest(_0x8498bd);
                    } catch {}
                  }
                },
                onBlock: _0x41f563,
                onUnblock: _0x2ba9dd,
                isBlocked: _0x15afbc,
                onCopyUserId: async () => {
                  if (_0x4701ba) {
                    await _0x3dc56c(String(_0x4701ba));
                    _0x2b9bfd.success(_0x3d3266("dm.userIdCopied"));
                  }
                },
                userId: _0x4701ba,
                username: _0x59f416,
                hideMessageButton: _0x3cffe7,
                allowDirectMessages: _0x23a738
              })]
            }), _0x5c0751 && !_0x5b12b0 && !_0x2348e7 && _0x566637.jsx(_0x6a7c80, {
              className: "mt-3",
              username: _0x59f416
            }), !_0x5b12b0 && (_0xe0e098 ? _0x566637.jsx("div", {
              className: "flex items-center gap-1.5 mt-3",
              children: [1, 2, 3].map(_0xd92922 => _0x566637.jsx("div", {
                className: "size-5 rounded-full bg-surface-inset/35 animate-pulse"
              }, _0xd92922))
            }) : _0xfbd0e2.length > 0 && _0x566637.jsx("div", {
              className: "flex items-center gap-1.5 mt-3 flex-wrap",
              children: _0xfbd0e2.map(_0x1281be => _0x566637.jsx(_0x40aa68, {
                className: "max-w-[150px] whitespace-normal",
                label: _0x566637.jsxs("div", {
                  className: "flex flex-col items-center text-center gap-2",
                  children: [_0x566637.jsx("img", {
                    src: _0x1281be.icon_url || "/badges/default.png",
                    alt: _0x1281be.name,
                    className: "size-8 object-contain"
                  }), _0x566637.jsx("div", {
                    className: "text-xs font-semibold text-text-primary",
                    children: _0x1281be.name
                  }), _0x1281be.description && _0x566637.jsx("div", {
                    className: "text-[10px] text-text-tertiary leading-tight",
                    children: _0x1281be.description
                  })]
                }),
                side: "top",
                children: _0x566637.jsx("img", {
                  src: _0x1281be.icon_url || "/badges/default.png",
                  alt: _0x1281be.name,
                  className: "size-5 object-contain cursor-pointer hover:scale-110 transition-transform"
                })
              }, _0x1281be.id))
            }))]
          }), _0x566637.jsxs("div", {
            className: "px-4 pb-3 space-y-2.5",
            children: [_0x2f454f && !_0x5b12b0 && _0x566637.jsx(_0x566637.Fragment, {
              children: _0x4732f0 ? _0x566637.jsxs("div", {
                className: "flex items-center gap-2",
                children: [_0x566637.jsx("div", {
                  className: "flex -space-x-2",
                  children: Array.from({
                    length: 3
                  }).map((_0x31f9ea, _0x163f9d) => _0x566637.jsx(_0x2b3364, {
                    className: "size-6 ring-2 ring-surface-raised border border-border-subtle",
                    children: _0x566637.jsx(_0x4cb890, {
                      className: "bg-surface-inset/35 animate-pulse"
                    })
                  }, _0x163f9d))
                }), _0x566637.jsx("div", {
                  className: "h-3 w-24 rounded bg-surface-inset/35 animate-pulse"
                })]
              }) : (_0x45f1cb > 0 || _0x26065d.length > 0) && _0x566637.jsxs("div", {
                className: "flex items-center gap-2",
                children: [_0x566637.jsx("div", {
                  className: "flex -space-x-2",
                  children: _0x26065d.slice(0, 3).map(_0x4e3409 => {
                    const _0x965e7c = _0x4e3409.avatar_url || _0x4e3409.friend_metadata?.avatar_url || "";
                    const _0x1677f8 = _0x4e3409.username || _0x4e3409.friend_metadata?.username || "";
                    const _0x5e67e8 = (_0x4e3409.friend_metadata?.display_name || "").trim() || _0x1677f8 || "";
                    const _0x1af27b = (_0x5e67e8 || _0x1677f8).slice(0, 2).toUpperCase();
                    return _0x566637.jsx(_0x40aa68, {
                      label: "@" + (_0x1677f8 || _0x5e67e8),
                      side: "bottom",
                      children: _0x566637.jsx(_0x2b3364, {
                        className: "size-6 ring-2 ring-surface-raised border border-border-subtle cursor-default",
                        children: _0x965e7c ? _0x566637.jsx(_0x12f21c, {
                          src: _0x965e7c,
                          alt: _0x5e67e8 || _0x1677f8
                        }) : _0x566637.jsx(_0x4cb890, {
                          className: "text-[10px] font-semibold bg-surface-inset/35 text-text-primary",
                          children: _0x1af27b
                        })
                      })
                    }, _0x4e3409.friend_id);
                  })
                }), _0x566637.jsx("span", {
                  className: "text-[11px] text-text-tertiary whitespace-nowrap",
                  children: _0x3d3266("dm.mutualFriends", {
                    count: _0x45f1cb
                  })
                })]
              })
            }), (() => {
              const _0x292b17 = _0x5d19c3 || _0x6a1cef?.activities?.find(_0x103518 => _0x103518.type === "playing") || _0x6a1cef?.activities?.[0] || null;
              if (_0x292b17) {
                return _0x566637.jsx(_0x11da28, {
                  activity: _0x292b17
                });
              } else {
                return null;
              }
            })(), _0x47f6ee && _0x566637.jsx(K, {
              bio: _0x47f6ee
            }), _0x2f454f && !_0x5b12b0 && _0x566637.jsxs(_0x566637.Fragment, {
              children: [_0x566637.jsxs("div", {
                className: "flex items-center gap-2 mb-2",
                children: [_0x566637.jsx("p", {
                  className: "text-[10px] font-semibold text-text-muted uppercase tracking-widest",
                  children: _0x3d3266("dm.note")
                }), _0x566637.jsx("span", {
                  className: "text-[10px] text-text-muted ml-auto",
                  children: _0x3d3266("dm.noteOnlyYou")
                })]
              }), _0x566637.jsx("textarea", {
                value: _0x901e3,
                onChange: _0xfd496e => {
                  const _0xc7bc80 = _0xfd496e.target.value;
                  if (new TextEncoder().encode(_0xc7bc80).length <= 760) {
                    _0x48e9ac(_0xc7bc80);
                  }
                },
                maxLength: 190,
                className: "w-full h-16 resize-none bg-surface-inset/30 rounded-lg px-2.5 py-2 border border-border-subtle focus:border-accent-primary/30 text-[13px] text-text-secondary placeholder:text-text-muted outline-none transition-colors",
                placeholder: _0x3d3266("dm.notePlaceholder")
              }), _0x566637.jsxs("div", {
                className: "mt-1 px-1 flex items-center justify-between",
                children: [_0x566637.jsxs("span", {
                  className: "text-[11px] tabular-nums " + (_0x901e3.length < 5 && _0x901e3.length > 0 ? "text-red-400" : "text-text-muted"),
                  children: [_0x901e3.length, "/190"]
                }), _0x566637.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [_0x4574ca && _0x566637.jsx("button", {
                    disabled: _0x3045ee,
                    onClick: async () => {
                      if (_0x8498bd && !_0x3045ee) {
                        try {
                          _0x1ee28d(true);
                          await _0x3afd33(_0x8498bd);
                          _0x48e9ac("");
                          _0x41c6cc(false);
                        } catch {} finally {
                          _0x1ee28d(false);
                        }
                      }
                    },
                    className: "text-[13px] font-semibold text-red-400 hover:text-red-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer",
                    children: _0x3d3266(_0x3045ee ? "dm.noteDeleting" : "dm.noteDelete")
                  }), _0x566637.jsx("button", {
                    disabled: _0xa86019 || _0x901e3.trim().length < 5,
                    onClick: async () => {
                      if (!_0x8498bd || _0xa86019) {
                        return;
                      }
                      const _0x5ee9ea = _0x59962f(_0x901e3);
                      if (_0x5ee9ea) {
                        _0x2b9bfd.error(_0x5ee9ea);
                      } else {
                        try {
                          _0x32b6f8(true);
                          const _0x3c57b3 = _0x901e3.trim();
                          await _0x50edf9(_0x8498bd, _0x3c57b3);
                          _0x41c6cc(true);
                        } catch {} finally {
                          _0x32b6f8(false);
                        }
                      }
                    },
                    className: "text-[13px] font-semibold text-accent-primary-text hover:text-accent-primary-text/80 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer",
                    children: _0x3d3266(_0xa86019 ? "dm.noteSaving" : "dm.noteSave")
                  })]
                })]
              })]
            })]
          }), _0x566637.jsx(_0x3314aa, {
            open: _0x59460d,
            onOpenChange: _0x5671ea,
            onConfirm: async () => {
              if (_0x8498bd) {
                try {
                  _0x2b763b(true);
                  await _0x4c555f(_0x8498bd);
                  _0x3ae4bc(false);
                  _0x151b74(_0x8498bd);
                  _0x5671ea(false);
                } catch {} finally {
                  _0x2b763b(false);
                }
              }
            },
            isLoading: _0x2ef825,
            variant: "danger",
            icon: _0x566637.jsx(_0x5bbbf1, {
              className: "size-5 text-red-400"
            }),
            title: _0x3d3266("friends.removeConfirmTitle"),
            description: _0x3d3266("friends.removeConfirmDesc", {
              username: _0x59f416
            }),
            confirmText: _0x3d3266(_0x2ef825 ? "friends.removing" : "friends.removeFriend")
          }), _0x566637.jsx(_0x3314aa, {
            open: _0x5306b0,
            onOpenChange: _0x8b183,
            onConfirm: async () => {
              if (_0x8498bd) {
                _0x5e563d(true);
                try {
                  await _0x1ae042.blockUser(_0x8498bd);
                  _0x8b183(false);
                  _0x3ae4bc(false);
                  _0x3a0cba.getState().addBlockedUser({
                    id: _0x8498bd,
                    username: _0x59f416 || "",
                    display_name: _0x466c01,
                    avatar_url: _0x578605 || undefined
                  });
                } catch {} finally {
                  _0x5e563d(false);
                }
              }
            },
            isLoading: _0xce0fd3,
            variant: "danger",
            icon: _0x566637.jsx(_0x3aca19, {
              className: "size-5 text-red-400"
            }),
            title: _0x3d3266("friends.blockConfirmTitle"),
            description: _0x3d3266("friends.blockConfirmDescription", {
              username: _0x59f416
            }),
            confirmText: _0x3d3266(_0xce0fd3 ? "friends.blocking" : "friends.block")
          }), _0x566637.jsx(_0x3314aa, {
            open: _0x311ef9,
            onOpenChange: _0x37bcec,
            onConfirm: async () => {
              if (_0x8498bd) {
                _0x75a258(true);
                try {
                  await _0x1ae042.unblockUser(_0x8498bd);
                  _0x3a0cba.getState().removeBlockedUser(_0x8498bd);
                  _0x37bcec(false);
                } catch {} finally {
                  _0x75a258(false);
                }
              }
            },
            isLoading: _0x8f2d66,
            variant: "warning",
            icon: _0x566637.jsx(_0x3aca19, {
              className: "size-5 text-amber-400"
            }),
            title: _0x3d3266("friends.unblockConfirmTitle", {
              defaultValue: "Engeli Kaldır"
            }),
            description: _0x3d3266("friends.unblockConfirmDescription", {
              username: _0x59f416,
              defaultValue: "@" + _0x59f416 + " kullanıcısının engelini kaldırmak istediğine emin misin?"
            }),
            confirmText: _0x8f2d66 ? _0x3d3266("friends.unblocking", {
              defaultValue: "Kaldırılıyor..."
            }) : _0x3d3266("friends.unblock", {
              defaultValue: "Engeli Kaldır"
            })
          })]
        })]
      })
    })
  });
};
export { V as default };