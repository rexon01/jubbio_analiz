import { b as _0x1593cb, r as _0x3d33b8, aU as _0x269c92, eX as _0xb8a204, dY as _0xc366c3, P as _0xb3379b, dW as _0x369483, j as _0x2e9713, I as _0x213b7a, b2 as _0x5a7464, B as _0x26af34, aG as _0x151bf0 } from "./index-cQfEKR1W.js";
import { c as _0x197047 } from "./clipboard-BQ9qambq.js";
import { I as _0x3cf5ac } from "./input-AMyERYwJ.js";
import { S as _0x1fb6f0 } from "./separator-Ba6vNTx4.js";
import { u as _0x69af1e, bE as _0x272b64, bF as _0x118986, bG as _0x4c8669, bH as _0x10d130, a4 as _0x3deaf7 } from "./AppLayout-BEBJqe9_.js";
import { C as _0x4a65a8 } from "./ConfirmDialog-B4gIndKy.js";
import { D as _0x28d9e6, a as _0x316b57, c as _0x1488f2, d as _0xb256c8 } from "./dialog-BMMpM7PR.js";
import { V as _0x43227e } from "./index-Oyyh46KT.js";
import { A as _0x5a3ef1, a as _0x2b555a, b as _0x1b867a } from "./avatar-C-4BWxT3.js";
import "./soundboardFx-C2LP-Hjs.js";
import "./index-BUijt7wr.js";
import "./tr-D975n4_R.js";
import "./select-DQjjzSZW.js";
import "./arrow-left-B3FhifN2.js";
import "./arrow-right-DvlsXLCB.js";
import "./loader-circle-CTtxa1g9.js";
import "./switch-lfnbGePn.js";
import "./drawer-X7YyCqpZ.js";
import "./index-yuEHo9bu.js";
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
import "./label-ODyS97Ju.js";
import "./video-AtsAgCNJ.js";
import "./plus-B7c2Px8R.js";
import "./channelNotificationStore-FXjXBmS_.js";
import "./index.module-CsHioFCV.js";
import "./alert-dialog-BZuoGg7O.js";
const z = ({
  className: _0x2bf626
}) => _0x2e9713.jsx(_0x213b7a, {
  icon: "solar:refresh-bold-duotone",
  className: _0x2bf626
});
const I = ({
  className: _0x22ee65
}) => _0x2e9713.jsx(_0x213b7a, {
  icon: "solar:add-circle-bold-duotone",
  className: _0x22ee65
});
const E = ({
  className: _0xe54dc9
}) => _0x2e9713.jsx(_0x213b7a, {
  icon: "solar:check-circle-bold-duotone",
  className: _0xe54dc9
});
const L = ({
  className: _0x3ded5e
}) => _0x2e9713.jsx(_0x213b7a, {
  icon: "solar:sort-bold-duotone",
  className: _0x3ded5e
});
const A = ({
  className: _0x56102b
}) => _0x2e9713.jsx(_0x213b7a, {
  icon: "solar:alt-arrow-up-bold",
  className: _0x56102b
});
const M = ({
  className: _0x1c2783
}) => _0x2e9713.jsx(_0x213b7a, {
  icon: "solar:alt-arrow-down-bold",
  className: _0x1c2783
});
const H = ({
  className: _0x1b2a27
}) => _0x2e9713.jsx(_0x213b7a, {
  icon: "solar:close-circle-bold-duotone",
  className: _0x1b2a27
});
const F = ({
  className: _0x1ac6a8
}) => _0x2e9713.jsx(_0x213b7a, {
  icon: "solar:link-bold-duotone",
  className: _0x1ac6a8
});
const $ = _0xe88bca => ({
  ..._0xe88bca,
  uses: _0xe88bca.used_count ?? _0xe88bca.uses ?? 0,
  created_by: typeof _0xe88bca.created_by == "object" ? _0xe88bca.created_by : {
    id: _0xe88bca.created_by,
    username: "unknown",
    display_name: "unknown",
    avatar_url: null
  }
});
const O = (_0x30a225, _0x549671) => _0x30a225 ? new Intl.DateTimeFormat(_0x549671 || "en", {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit"
}).format(new Date(_0x30a225)) : "-";
const U = (_0x510e91, _0x10c118, _0x409b63) => {
  if (!_0x510e91) {
    return _0x409b63("serverSettings.invites.unlimited");
  }
  const _0x1969da = new Date(_0x510e91).getTime() - _0x10c118.getTime();
  if (_0x1969da <= 0) {
    return _0x409b63("serverSettings.invites.expired");
  }
  const _0x3bb546 = Math.floor(_0x1969da / 1000);
  const _0x538cc9 = Math.floor(_0x3bb546 / 60);
  const _0x33c214 = Math.floor(_0x538cc9 / 60);
  const _0x18a57d = Math.floor(_0x33c214 / 24);
  const _0x5db59f = [];
  if (_0x18a57d > 0) {
    _0x5db59f.push(_0x18a57d + " " + _0x409b63("serverSettings.invites.day"));
  }
  const _0x7a99b9 = _0x33c214 % 24;
  if (_0x7a99b9 > 0) {
    _0x5db59f.push(_0x7a99b9 + " " + _0x409b63("serverSettings.invites.hour"));
  }
  const _0x5b67cb = _0x538cc9 % 60;
  if (_0x5b67cb > 0) {
    _0x5db59f.push(_0x5b67cb + " " + _0x409b63("serverSettings.invites.minute"));
  }
  const _0x1d8171 = _0x3bb546 % 60;
  if (_0x1d8171 >= 0 && _0x18a57d === 0 && _0x7a99b9 === 0) {
    _0x5db59f.push(_0x1d8171 + " " + _0x409b63("serverSettings.invites.second"));
  }
  if (_0x5db59f.length > 0) {
    return _0x409b63("serverSettings.invites.remaining", {
      time: _0x5db59f.join(" ")
    });
  } else {
    return _0x409b63("serverSettings.invites.expired");
  }
};
const G = (_0x5f4b8e, _0x3df035) => !!_0x5f4b8e.expires_at && new Date(_0x5f4b8e.expires_at).getTime() - _0x3df035.getTime() <= 0;
const P = _0x58f19d => {
  if (_0x58f19d.max_uses === 0 || _0x58f19d.max_uses === null) {
    return false;
  }
  return (_0x58f19d.used_count ?? _0x58f19d.uses ?? 0) >= _0x58f19d.max_uses;
};
const R = ({
  serverId: _0x343711
}) => {
  const {
    t: _0x1ebc55,
    i18n: _0x28e0a0
  } = _0x1593cb();
  const {
    has: _0xae972a,
    isOwner: _0x2fb465,
    isOwnerPerm: _0x5c90e1
  } = _0x69af1e(_0x343711);
  const _0x26cd23 = _0x2fb465 || _0x5c90e1 || _0xae972a(_0x151bf0.MANAGE_GUILD) || _0xae972a(_0x151bf0.ADMINISTRATOR);
  const [_0x44d9b9, _0x554b83] = _0x3d33b8.useState([]);
  const [_0x219ae2, _0x4ca9e7] = _0x3d33b8.useState(true);
  const [_0x291414, _0x367899] = _0x3d33b8.useState(false);
  const [_0x1d654b, _0x2ddd08] = _0x3d33b8.useState(null);
  const [_0x25f651, _0x171af2] = _0x3d33b8.useState(null);
  const [_0x268885, _0x464d91] = _0x3d33b8.useState("");
  const [_0x1519ed, _0x30524c] = _0x3d33b8.useState("keep");
  const [_0x2472cd, _0x4aa4d3] = _0x3d33b8.useState(false);
  const [_0x388a45, _0x3f8079] = _0x3d33b8.useState(null);
  const [_0x1f9bfb, _0x3ff937] = _0x3d33b8.useState(new Date());
  const [_0x4d0361, _0x13e91f] = _0x3d33b8.useState("");
  const [_0x3e4a32, _0x319036] = _0x3d33b8.useState(false);
  const [_0x4bde4f, _0x501938] = _0x3d33b8.useState("created_at");
  const [_0xfbc3df, _0x48ab3f] = _0x3d33b8.useState("desc");
  const [_0x159b70, _0x280df3] = _0x3d33b8.useState("");
  const [_0x1f78d3, _0x20daa0] = _0x3d33b8.useState("");
  const [_0x1e3acd, _0x39e28b] = _0x3d33b8.useState(false);
  const [_0x260ce9, _0x2d8c27] = _0x3d33b8.useState(false);
  const _0x1ac30b = _0x269c92(_0x2db971 => _0x2db971.guildFuelStatus[_0x343711]?.boost_tier ?? 0) >= 3;
  _0x3d33b8.useEffect(() => {
    if (!_0x1ac30b) {
      return;
    }
    let _0x483f7b = false;
    _0xb8a204(_0x343711).then(_0x2b30c4 => {
      if (_0x483f7b) {
        return;
      }
      const _0x4a03d6 = _0x2b30c4.vanity_url_code || "";
      _0x280df3(_0x4a03d6);
      _0x20daa0(_0x4a03d6);
    }).catch(() => {});
    return () => {
      _0x483f7b = true;
    };
  }, [_0x343711, _0x1ac30b]);
  const _0x37f3e1 = _0x3d33b8.useCallback(async () => {
    const _0x429c96 = _0x159b70.trim().toLowerCase();
    if (_0x429c96 !== _0x1f78d3 && (!(_0x429c96.length > 0) || !(_0x429c96.length < 3))) {
      _0x39e28b(true);
      try {
        await _0xc366c3(_0x343711, {
          vanity_url_code: _0x429c96 || null
        });
        _0x20daa0(_0x429c96);
      } catch {} finally {
        _0x39e28b(false);
      }
    }
  }, [_0x159b70, _0x1f78d3, _0x343711]);
  const _0x50a13e = _0x3d33b8.useCallback(async () => {
    if (_0x1f78d3) {
      await _0x197047("jubbio.net/" + _0x1f78d3);
      _0x2d8c27(true);
      _0xb3379b.success(_0x1ebc55("serverSettings.invites.vanityCopied"));
      setTimeout(() => _0x2d8c27(false), 2000);
    }
  }, [_0x1f78d3, _0x1ebc55]);
  const _0x1890aa = _0x3d33b8.useCallback(async () => {
    try {
      _0x4ca9e7(true);
      const _0x3a5eec = await _0x272b64(_0x343711);
      _0x554b83((_0x3a5eec.invites || []).map($));
    } catch {
      _0x554b83([]);
    } finally {
      _0x4ca9e7(false);
    }
  }, [_0x343711]);
  _0x3d33b8.useEffect(() => {
    _0x1890aa();
  }, [_0x1890aa]);
  _0x3d33b8.useEffect(() => {
    if (!_0x44d9b9.some(_0x7dc201 => _0x7dc201.expires_at)) {
      return;
    }
    const _0x41513b = setInterval(() => _0x3ff937(new Date()), 10000);
    return () => clearInterval(_0x41513b);
  }, [_0x44d9b9]);
  _0x369483("invite_created", _0x3d33b8.useCallback(_0x5665fc => {
    if (_0x5665fc.guild_id !== _0x343711) {
      return;
    }
    const _0x3027d7 = $(_0x5665fc.invite);
    _0x554b83(_0x6ca32 => {
      const _0x5ed982 = _0x6ca32.findIndex(_0x463770 => _0x463770.id === _0x3027d7.id);
      if (_0x5ed982 >= 0) {
        const _0x225adc = [..._0x6ca32];
        _0x225adc[_0x5ed982] = _0x3027d7;
        return _0x225adc;
      }
      return [_0x3027d7, ..._0x6ca32];
    });
    _0x4ca9e7(false);
  }, [_0x343711]));
  _0x369483("invite_deleted", _0x3d33b8.useCallback(_0x17db58 => {
    if (_0x17db58.guild_id === _0x343711) {
      _0x554b83(_0x539fcb => _0x539fcb.filter(_0x5d0dc0 => String(_0x5d0dc0.id) !== String(_0x17db58.invite_id)));
    }
  }, [_0x343711]));
  _0x369483("invite_used", _0x3d33b8.useCallback(_0x21b967 => {
    if (_0x21b967.guild_id === _0x343711) {
      _0x554b83(_0x219d13 => _0x219d13.map(_0x371e97 => {
        if (String(_0x371e97.id) === String(_0x21b967.invite_id) || _0x371e97.code === _0x21b967.invite_code) {
          const _0x1b008b = _0x371e97.used_count ?? _0x371e97.uses ?? 0;
          return {
            ..._0x371e97,
            used_count: _0x1b008b + 1,
            uses: _0x1b008b + 1
          };
        }
        return _0x371e97;
      }));
    }
  }, [_0x343711]));
  const _0x39b4cf = _0x3d33b8.useCallback(_0x5ddfd3 => {
    _0x171af2(_0x5ddfd3);
    const _0x926a1 = _0x5ddfd3.max_uses === 0 || _0x5ddfd3.max_uses === null ? "" : String(_0x5ddfd3.max_uses);
    _0x464d91(_0x926a1);
    _0x30524c("keep");
  }, []);
  const _0x59b2b3 = _0x3d33b8.useCallback(async () => {
    if (_0x25f651) {
      _0x4aa4d3(true);
      try {
        const _0x5618af = {};
        const _0x29c529 = _0x268885.trim() === "" ? null : parseInt(_0x268885, 10);
        if (_0x29c529 !== (_0x25f651.max_uses === 0 ? null : _0x25f651.max_uses)) {
          _0x5618af.max_uses = _0x29c529 === null ? 0 : _0x29c529;
        }
        if (_0x1519ed === "remove") {
          _0x5618af.expires_at = null;
        } else if (_0x1519ed !== "keep") {
          const _0x1d71c4 = parseInt(_0x1519ed, 10);
          const _0x2e2cca = new Date(Date.now() + _0x1d71c4 * 60 * 60 * 1000);
          _0x5618af.expires_at = _0x2e2cca.toISOString();
        }
        if (Object.keys(_0x5618af).length === 0) {
          _0x171af2(null);
          return;
        }
        const _0x334707 = await _0x118986(_0x343711, _0x25f651.id, _0x5618af);
        const _0x530e13 = $(_0x334707.invite);
        _0x554b83(_0x1a4279 => _0x1a4279.map(_0x31cf22 => _0x31cf22.id === _0x530e13.id ? _0x530e13 : _0x31cf22));
        _0x171af2(null);
      } catch {} finally {
        _0x4aa4d3(false);
      }
    }
  }, [_0x25f651, _0x268885, _0x1519ed, _0x343711]);
  const _0x1d001c = _0x3d33b8.useCallback(async () => {
    if (_0x1d654b) {
      try {
        await _0x4c8669(_0x343711, _0x1d654b);
        _0x2ddd08(null);
      } catch {}
    }
  }, [_0x343711, _0x1d654b]);
  const _0x5d150d = _0x3d33b8.useCallback(async _0x4978d5 => {
    const _0x2642c3 = _0x10d130(_0x4978d5.code);
    if (await _0x197047(_0x2642c3)) {
      _0x3f8079(_0x4978d5.id);
      _0xb3379b.success(_0x1ebc55("serverSettings.invites.copySuccess"));
      setTimeout(() => _0x3f8079(null), 2000);
    } else {
      _0xb3379b.error(_0x1ebc55("serverSettings.invites.copyFailed"));
    }
  }, []);
  const _0x4867f4 = _0x3d33b8.useCallback(_0x3b08bf => {
    if (_0x4bde4f === _0x3b08bf) {
      _0x48ab3f(_0x4563e6 => _0x4563e6 === "asc" ? "desc" : "asc");
    } else {
      _0x501938(_0x3b08bf);
      _0x48ab3f("desc");
    }
  }, [_0x4bde4f]);
  const _0x3edaf1 = _0x3d33b8.useMemo(() => {
    let _0x229f5e = _0x44d9b9;
    if (_0x4d0361.trim()) {
      const _0x2a6235 = _0x4d0361.toLowerCase();
      _0x229f5e = _0x44d9b9.filter(_0x35cdba => {
        const _0x290477 = typeof _0x35cdba.created_by == "object" ? _0x35cdba.created_by : null;
        return _0x35cdba.code.toLowerCase().includes(_0x2a6235) || _0x290477?.display_name?.toLowerCase().includes(_0x2a6235) || _0x290477?.username?.toLowerCase().includes(_0x2a6235);
      });
    }
    return [..._0x229f5e].sort((_0x44bdc3, _0x247081) => {
      const _0x1e2457 = G(_0x44bdc3, _0x1f9bfb) || P(_0x44bdc3);
      if (_0x1e2457 !== (G(_0x247081, _0x1f9bfb) || P(_0x247081))) {
        if (_0x1e2457) {
          return 1;
        } else {
          return -1;
        }
      }
      let _0x5b8705 = 0;
      switch (_0x4bde4f) {
        case "created_at":
          _0x5b8705 = new Date(_0x44bdc3.created_at || 0).getTime() - new Date(_0x247081.created_at || 0).getTime();
          break;
        case "uses":
          _0x5b8705 = (_0x44bdc3.used_count ?? _0x44bdc3.uses ?? 0) - (_0x247081.used_count ?? _0x247081.uses ?? 0);
          break;
        case "expires_at":
          _0x5b8705 = (_0x44bdc3.expires_at ? new Date(_0x44bdc3.expires_at).getTime() : Infinity) - (_0x247081.expires_at ? new Date(_0x247081.expires_at).getTime() : Infinity);
          break;
        case "creator":
          {
            const _0x5909c5 = typeof _0x44bdc3.created_by == "object" ? _0x44bdc3.created_by.display_name : "";
            const _0x1280e4 = typeof _0x247081.created_by == "object" ? _0x247081.created_by.display_name : "";
            _0x5b8705 = _0x5909c5.localeCompare(_0x1280e4, _0x28e0a0.language);
            break;
          }
      }
      if (_0xfbc3df === "asc") {
        return _0x5b8705;
      } else {
        return -_0x5b8705;
      }
    });
  }, [_0x44d9b9, _0x4d0361, _0x4bde4f, _0xfbc3df, _0x1f9bfb]);
  const _0x44c769 = _0x3d33b8.useMemo(() => {
    const _0xe25428 = _0x44d9b9.filter(_0x2da0ad => G(_0x2da0ad, _0x1f9bfb)).length;
    const _0x49df11 = _0x44d9b9.filter(_0x53fd6a => !G(_0x53fd6a, _0x1f9bfb) && P(_0x53fd6a)).length;
    return {
      active: _0x44d9b9.length - _0xe25428 - _0x49df11,
      expired: _0xe25428,
      full: _0x49df11
    };
  }, [_0x44d9b9, _0x1f9bfb]);
  const _0x15783d = ({
    column: _0x65d61f
  }) => _0x4bde4f !== _0x65d61f ? _0x2e9713.jsx(L, {
    className: "size-3 text-text-muted ml-1 inline"
  }) : _0xfbc3df === "asc" ? _0x2e9713.jsx(A, {
    className: "size-3 text-accent-primary-text ml-1 inline"
  }) : _0x2e9713.jsx(M, {
    className: "size-3 text-accent-primary-text ml-1 inline"
  });
  return _0x2e9713.jsx("div", {
    className: "w-full",
    children: _0x2e9713.jsxs("div", {
      className: "space-y-8",
      children: [_0x2e9713.jsxs("section", {
        children: [_0x2e9713.jsxs("div", {
          className: "mb-3",
          children: [_0x2e9713.jsxs("div", {
            className: "flex items-center gap-2",
            children: [_0x2e9713.jsx(F, {
              className: "size-4 text-text-tertiary"
            }), _0x2e9713.jsx("div", {
              className: "text-base leading-snug font-semibold text-text-secondary",
              children: _0x1ebc55("serverSettings.invites.vanityTitle")
            })]
          }), _0x2e9713.jsx("p", {
            className: "text-sm leading-snug text-text-muted mt-0.5",
            children: _0x1ebc55("serverSettings.invites.vanityDesc")
          })]
        }), _0x1ac30b ? _0x2e9713.jsx("div", {
          className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden",
          children: _0x2e9713.jsxs("div", {
            className: "px-4 py-3 space-y-3",
            children: [_0x2e9713.jsxs("div", {
              className: "flex items-center justify-between",
              children: [_0x2e9713.jsxs("div", {
                className: "flex items-center gap-2.5",
                children: [_0x2e9713.jsx("span", {
                  className: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10",
                  children: _0x2e9713.jsx(_0x213b7a, {
                    icon: "solar:gas-station-bold-duotone",
                    className: "size-4 text-amber-400"
                  })
                }), _0x2e9713.jsxs("div", {
                  children: [_0x2e9713.jsx("div", {
                    className: "text-[15px] font-medium text-text-secondary",
                    children: _0x1ebc55("serverSettings.invites.vanityTitle")
                  }), _0x2e9713.jsx("div", {
                    className: "text-[13px] text-text-tertiary",
                    children: "Tier 3"
                  })]
                })]
              }), _0x1f78d3 && _0x2e9713.jsx("span", {
                className: "px-2 py-0.5 rounded-md bg-emerald-500/10 text-[11px] font-medium text-emerald-400",
                children: _0x1ebc55("serverSettings.invites.vanityActiveLabel")
              })]
            }), _0x2e9713.jsxs("div", {
              className: "flex items-center gap-2 rounded-lg bg-surface-overlay/50 border border-border-default h-10 px-3",
              children: [_0x2e9713.jsx("span", {
                className: "text-sm text-text-muted shrink-0",
                children: "jubbio.net/"
              }), _0x2e9713.jsx("input", {
                value: _0x159b70,
                onChange: _0x1ee6a3 => _0x280df3(_0x1ee6a3.target.value.toLowerCase().replace(/[^a-z0-9-_]/g, "")),
                placeholder: _0x1ebc55("serverSettings.invites.vanityPlaceholder"),
                className: "flex-1 bg-transparent text-sm text-text-primary font-mono placeholder:text-text-muted/40 outline-none min-w-0",
                minLength: 3,
                maxLength: 20
              }), _0x1f78d3 && _0x159b70.trim() === _0x1f78d3 && _0x2e9713.jsx("button", {
                onClick: _0x50a13e,
                className: "shrink-0 text-text-tertiary hover:text-text-secondary transition-colors cursor-pointer",
                children: _0x260ce9 ? _0x2e9713.jsx(E, {
                  className: "size-4 text-emerald-400"
                }) : _0x2e9713.jsx(_0x213b7a, {
                  icon: "solar:copy-bold-duotone",
                  className: "size-4"
                })
              })]
            }), _0x159b70.trim() !== _0x1f78d3 && _0x2e9713.jsxs("div", {
              className: "flex gap-2",
              children: [_0x2e9713.jsx("button", {
                onClick: () => _0x280df3(_0x1f78d3),
                className: "flex-1 h-9 text-sm font-medium rounded-lg bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary transition-colors cursor-pointer",
                children: _0x1ebc55("serverSettings.invites.vanityCancel")
              }), _0x2e9713.jsx("button", {
                onClick: _0x37f3e1,
                disabled: _0x1e3acd || !_0x159b70.trim() || _0x159b70.trim().length < 3,
                className: "flex-1 h-9 text-sm font-medium rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-200 hover:bg-amber-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer",
                children: _0x1e3acd ? _0x2e9713.jsx(z, {
                  className: "size-4 animate-spin mx-auto"
                }) : _0x1ebc55("serverSettings.invites.vanitySave")
              })]
            })]
          })
        }) : _0x2e9713.jsx("div", {
          className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden",
          children: _0x2e9713.jsxs("div", {
            className: "px-4 py-3 flex items-center gap-3",
            children: [_0x2e9713.jsx("span", {
              className: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10",
              children: _0x2e9713.jsx(_0x213b7a, {
                icon: "solar:gas-station-bold-duotone",
                className: "size-4 text-amber-400"
              })
            }), _0x2e9713.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [_0x2e9713.jsx("div", {
                className: "text-[15px] font-medium text-text-secondary",
                children: _0x1ebc55("serverSettings.invites.vanityTierLocked")
              }), _0x2e9713.jsx("div", {
                className: "text-[13px] text-text-tertiary mt-0.5",
                children: _0x1ebc55("serverSettings.invites.vanityTierLockedDesc")
              })]
            }), _0x2e9713.jsx("button", {
              type: "button",
              onClick: () => {
                _0x5a7464.getState().closeServerSettings();
                _0x5a7464.getState().openGuildFuel(_0x343711);
              },
              className: "h-8 px-3 text-xs font-medium rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-200 hover:bg-amber-500/30 transition-colors active:scale-[0.97] cursor-pointer shrink-0",
              children: _0x1ebc55("serverSettings.general.unlockWithTier", {
                tier: 3
              })
            })]
          })
        })]
      }), _0x2e9713.jsx(_0x1fb6f0, {
        className: "bg-surface-overlay/70"
      }), _0x2e9713.jsxs("section", {
        children: [_0x2e9713.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [_0x2e9713.jsxs("div", {
            children: [_0x2e9713.jsxs("div", {
              className: "flex items-center gap-2",
              children: [_0x2e9713.jsx(F, {
                className: "size-4 text-text-tertiary"
              }), _0x2e9713.jsx("div", {
                className: "text-base leading-snug font-semibold text-text-secondary",
                children: _0x1ebc55("serverSettings.invites.title")
              })]
            }), _0x2e9713.jsx("p", {
              className: "text-sm leading-snug text-text-muted mt-0.5",
              children: _0x1ebc55("serverSettings.invites.description")
            })]
          }), _0x2e9713.jsxs("div", {
            className: "flex items-center gap-2",
            children: [!_0x219ae2 && _0x44d9b9.length > 0 && (_0x3e4a32 ? _0x2e9713.jsxs("div", {
              className: "relative flex items-center gap-1.5",
              children: [_0x2e9713.jsxs("div", {
                className: "relative",
                children: [_0x2e9713.jsx(_0x213b7a, {
                  icon: "solar:magnifer-bold-duotone",
                  className: "absolute left-2.5 top-1/2 -translate-y-1/2 text-text-tertiary w-3.5 h-3.5"
                }), _0x2e9713.jsx(_0x3cf5ac, {
                  placeholder: _0x1ebc55("serverSettings.invites.searchPlaceholder"),
                  value: _0x4d0361,
                  onChange: _0x140afb => _0x13e91f(_0x140afb.target.value),
                  onKeyDown: _0x537ee8 => {
                    if (_0x537ee8.key === "Escape") {
                      _0x319036(false);
                      _0x13e91f("");
                    }
                  },
                  className: "pl-8 h-8 w-52 bg-surface-overlay/50 border-border-strong text-xs",
                  autoFocus: true
                })]
              }), _0x2e9713.jsx(_0x26af34, {
                variant: "ghost",
                size: "sm",
                onClick: () => {
                  _0x319036(false);
                  _0x13e91f("");
                },
                className: "h-8 w-8 p-0 text-text-tertiary hover:text-text-secondary",
                children: _0x2e9713.jsx(H, {
                  className: "w-3.5 h-3.5"
                })
              })]
            }) : _0x2e9713.jsx(_0x26af34, {
              variant: "ghost",
              size: "sm",
              onClick: () => _0x319036(true),
              className: "h-8 w-8 p-0 text-text-tertiary hover:text-text-secondary hover:bg-surface-overlay/50",
              children: _0x2e9713.jsx(_0x213b7a, {
                icon: "solar:magnifer-bold-duotone",
                className: "w-3.5 h-3.5"
              })
            })), _0x2e9713.jsxs(_0x26af34, {
              onClick: () => _0x367899(true),
              className: "h-8 px-3 text-[14px] bg-accent-primary text-black hover:bg-accent-primary/90 disabled:opacity-60",
              children: [_0x2e9713.jsx(I, {
                className: "w-3.5 h-3.5 mr-1.5"
              }), _0x1ebc55("serverSettings.invites.newInvite")]
            })]
          })]
        }), _0x4d0361.trim() && _0x2e9713.jsxs("div", {
          className: "flex items-center gap-2 mb-3",
          children: [_0x2e9713.jsxs("span", {
            className: "inline-flex items-center gap-1.5 text-xs bg-surface-overlay/60 border border-border-default rounded-full px-3 py-1 text-text-secondary",
            children: [_0x2e9713.jsx(_0x213b7a, {
              icon: "solar:magnifer-bold-duotone",
              className: "w-3 h-3 text-text-tertiary"
            }), _0x2e9713.jsx("span", {
              className: "font-medium",
              children: _0x3edaf1.length
            }), " ", _0x1ebc55("serverSettings.invites.resultsFound")]
          }), _0x2e9713.jsx("button", {
            onClick: () => {
              _0x13e91f("");
              _0x319036(false);
            },
            className: "text-xs text-text-tertiary hover:text-text-secondary hover:bg-surface-overlay/60 rounded-md px-2.5 py-1 transition-colors cursor-pointer",
            children: _0x1ebc55("serverSettings.invites.showAll")
          })]
        }), _0x2e9713.jsx("div", {
          className: "rounded-lg border border-border-default bg-surface-raised/40 overflow-hidden",
          children: _0x219ae2 ? _0x2e9713.jsx("div", {
            className: "p-8 flex items-center justify-center",
            children: _0x2e9713.jsx(z, {
              className: "w-6 h-6 animate-spin text-text-tertiary"
            })
          }) : _0x44d9b9.length === 0 ? _0x2e9713.jsxs("div", {
            className: "p-12 text-center",
            children: [_0x2e9713.jsx("div", {
              className: "flex items-center justify-center mb-4",
              children: _0x2e9713.jsx(_0x213b7a, {
                icon: "solar:ghost-bold-duotone",
                className: "w-16 h-16 text-text-muted"
              })
            }), _0x2e9713.jsx("h3", {
              className: "text-lg font-semibold text-text-secondary mb-2",
              children: _0x1ebc55("serverSettings.invites.noInvites")
            }), _0x2e9713.jsx("p", {
              className: "text-text-tertiary text-sm max-w-md mx-auto mb-6",
              children: _0x1ebc55("serverSettings.invites.noInvitesDesc")
            }), _0x2e9713.jsxs(_0x26af34, {
              onClick: () => _0x367899(true),
              className: "h-9 px-4 text-[14px] bg-accent-primary text-black hover:bg-accent-primary/90",
              children: [_0x2e9713.jsx(I, {
                className: "w-4 h-4 mr-1.5"
              }), _0x1ebc55("serverSettings.invites.createInvite")]
            })]
          }) : _0x3edaf1.length === 0 ? _0x2e9713.jsxs("div", {
            className: "p-12 text-center",
            children: [_0x2e9713.jsx("div", {
              className: "flex items-center justify-center mb-4",
              children: _0x2e9713.jsx(_0x213b7a, {
                icon: "solar:ghost-bold-duotone",
                className: "w-16 h-16 text-text-muted"
              })
            }), _0x2e9713.jsx("h3", {
              className: "text-lg font-semibold text-text-secondary mb-2",
              children: _0x1ebc55("serverSettings.invites.noResults")
            }), _0x2e9713.jsx("p", {
              className: "text-text-tertiary text-sm max-w-md mx-auto mb-4",
              children: _0x1ebc55("serverSettings.invites.noResultsDesc", {
                query: _0x4d0361
              })
            }), _0x2e9713.jsx("button", {
              onClick: () => {
                _0x13e91f("");
                _0x319036(false);
              },
              className: "h-8 px-4 text-xs text-text-secondary bg-surface-overlay/60 hover:bg-surface-inset/60 border border-border-default rounded-md transition-colors cursor-pointer",
              children: _0x1ebc55("serverSettings.invites.showAllButton")
            })]
          }) : _0x2e9713.jsx("div", {
            className: "overflow-x-auto",
            children: _0x2e9713.jsxs("table", {
              className: "w-full",
              children: [_0x2e9713.jsx("thead", {
                className: "bg-surface-overlay/50 border-b border-border-default",
                children: _0x2e9713.jsxs("tr", {
                  children: [_0x2e9713.jsxs("th", {
                    onClick: () => _0x4867f4("creator"),
                    className: "px-4 py-3 text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider cursor-pointer hover:text-text-secondary transition-colors select-none",
                    children: [_0x1ebc55("serverSettings.invites.creatorHeader"), " ", _0x2e9713.jsx(_0x15783d, {
                      column: "creator"
                    })]
                  }), _0x2e9713.jsx("th", {
                    className: "px-4 py-3 text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider",
                    children: _0x1ebc55("serverSettings.invites.codeHeader")
                  }), _0x2e9713.jsxs("th", {
                    onClick: () => _0x4867f4("uses"),
                    className: "px-4 py-3 text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider cursor-pointer hover:text-text-secondary transition-colors select-none",
                    children: [_0x1ebc55("serverSettings.invites.usageHeader"), " ", _0x2e9713.jsx(_0x15783d, {
                      column: "uses"
                    })]
                  }), _0x2e9713.jsxs("th", {
                    onClick: () => _0x4867f4("expires_at"),
                    className: "px-4 py-3 text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider cursor-pointer hover:text-text-secondary transition-colors select-none",
                    children: [_0x1ebc55("serverSettings.invites.expiryHeader"), " ", _0x2e9713.jsx(_0x15783d, {
                      column: "expires_at"
                    })]
                  }), _0x2e9713.jsxs("th", {
                    onClick: () => _0x4867f4("created_at"),
                    className: "px-4 py-3 text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider cursor-pointer hover:text-text-secondary transition-colors select-none",
                    children: [_0x1ebc55("serverSettings.invites.createdHeader"), " ", _0x2e9713.jsx(_0x15783d, {
                      column: "created_at"
                    })]
                  }), _0x2e9713.jsx("th", {
                    className: "px-4 py-3 text-right text-xs font-semibold text-text-tertiary uppercase tracking-wider",
                    children: _0x1ebc55("serverSettings.invites.actionsHeader")
                  })]
                })
              }), _0x2e9713.jsx("tbody", {
                className: "divide-y divide-border-default",
                children: _0x3edaf1.map(_0x3e4679 => {
                  const _0x2caf88 = typeof _0x3e4679.created_by == "object" ? _0x3e4679.created_by : {
                    id: _0x3e4679.created_by,
                    username: _0x1ebc55("serverSettings.invites.unknownUser"),
                    display_name: _0x1ebc55("serverSettings.invites.unknownUser"),
                    avatar_url: null
                  };
                  const _0x5aeddc = G(_0x3e4679, _0x1f9bfb);
                  const _0x310250 = P(_0x3e4679);
                  const _0x2d4abc = _0x5aeddc || _0x310250;
                  return _0x2e9713.jsxs("tr", {
                    className: "transition-colors " + (_0x5aeddc ? "bg-red-500/5 hover:bg-red-500/10" : _0x310250 ? "bg-amber-500/5 hover:bg-amber-500/10" : "hover:bg-surface-overlay/30"),
                    children: [_0x2e9713.jsx("td", {
                      className: "px-4 py-3",
                      children: _0x2e9713.jsxs("div", {
                        className: "flex items-center gap-3 " + (_0x2d4abc ? "opacity-60" : ""),
                        children: [_0x2e9713.jsxs(_0x5a3ef1, {
                          className: "size-8 ring-2 ring-border-strong border border-border-default shrink-0",
                          children: [_0x2e9713.jsx(_0x2b555a, {
                            src: _0x2caf88.avatar_url || undefined,
                            alt: _0x2caf88.display_name
                          }), _0x2e9713.jsx(_0x1b867a, {
                            className: "text-text-primary text-xs font-medium bg-linear-to-br from-slate-600 to-slate-700",
                            children: _0x2caf88.display_name.charAt(0).toUpperCase()
                          })]
                        }), _0x2e9713.jsxs("div", {
                          className: "flex flex-col min-w-0",
                          children: [_0x2e9713.jsx("p", {
                            className: "text-sm font-medium text-text-primary truncate",
                            children: _0x2caf88.display_name
                          }), _0x2e9713.jsxs("p", {
                            className: "text-xs text-text-tertiary truncate",
                            children: ["@", _0x2caf88.username]
                          })]
                        })]
                      })
                    }), _0x2e9713.jsx("td", {
                      className: "px-4 py-3",
                      children: _0x2e9713.jsx("code", {
                        onClick: () => _0x5d150d(_0x3e4679),
                        className: "text-sm font-mono px-2 py-1 rounded cursor-pointer transition-colors " + (_0x2d4abc ? "text-text-tertiary bg-surface-overlay/30 hover:bg-surface-overlay/50" : "text-text-secondary bg-surface-overlay/50 hover:bg-surface-inset/60 hover:text-text-primary"),
                        title: _0x1ebc55("serverSettings.invites.copyTooltip"),
                        children: _0x388a45 === _0x3e4679.id ? _0x2e9713.jsx("span", {
                          className: "text-green-400",
                          children: _0x1ebc55("serverSettings.invites.copied")
                        }) : _0x3e4679.code
                      })
                    }), _0x2e9713.jsx("td", {
                      className: "px-4 py-3",
                      children: _0x2e9713.jsxs("span", {
                        className: "text-sm " + (_0x310250 ? "text-amber-400 font-medium" : "text-text-secondary"),
                        children: [_0x3e4679.used_count ?? _0x3e4679.uses ?? 0, " /", " ", _0x3e4679.max_uses === 0 || _0x3e4679.max_uses === null ? "∞" : _0x3e4679.max_uses, _0x310250 && !_0x5aeddc && _0x2e9713.jsx("span", {
                          className: "ml-1.5 text-[10px] text-amber-400/80 font-normal",
                          children: _0x1ebc55("serverSettings.invites.full")
                        })]
                      })
                    }), _0x2e9713.jsx("td", {
                      className: "px-4 py-3",
                      children: _0x2e9713.jsx("span", {
                        className: "text-sm " + (_0x5aeddc ? "text-red-400 font-medium" : "text-text-tertiary"),
                        children: U(_0x3e4679.expires_at, _0x1f9bfb, _0x1ebc55)
                      })
                    }), _0x2e9713.jsx("td", {
                      className: "px-4 py-3",
                      children: _0x2e9713.jsx("span", {
                        className: "text-sm text-text-tertiary",
                        children: O(_0x3e4679.created_at, _0x28e0a0.language)
                      })
                    }), _0x2e9713.jsx("td", {
                      className: "px-4 py-3",
                      children: _0x2e9713.jsxs("div", {
                        className: "flex items-center justify-end gap-2",
                        children: [_0x2e9713.jsx(_0x26af34, {
                          size: "sm",
                          variant: "ghost",
                          onClick: () => _0x5d150d(_0x3e4679),
                          className: "h-8 w-8 p-0 bg-surface-overlay/40 hover:bg-surface-inset cursor-pointer",
                          children: _0x388a45 === _0x3e4679.id ? _0x2e9713.jsx(E, {
                            className: "w-4 h-4 text-green-400"
                          }) : _0x2e9713.jsx(_0x213b7a, {
                            icon: "solar:copy-bold-duotone",
                            className: "w-4 h-4 text-text-tertiary"
                          })
                        }), _0x26cd23 && !_0x2d4abc && _0x2e9713.jsx(_0x26af34, {
                          size: "sm",
                          variant: "ghost",
                          onClick: () => _0x39b4cf(_0x3e4679),
                          className: "h-8 w-8 p-0 bg-surface-overlay/40 hover:bg-surface-inset cursor-pointer",
                          title: _0x1ebc55("serverSettings.invites.editTooltip"),
                          children: _0x2e9713.jsx(_0x213b7a, {
                            icon: "solar:pen-bold-duotone",
                            className: "w-3.5 h-3.5 text-text-tertiary"
                          })
                        }), _0x26cd23 && _0x2e9713.jsx(_0x26af34, {
                          size: "sm",
                          variant: "ghost",
                          onClick: () => _0x2ddd08(_0x3e4679.id),
                          className: "h-8 w-8 p-0 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 hover:text-red-400 cursor-pointer",
                          children: _0x2e9713.jsx(_0x213b7a, {
                            icon: "solar:trash-bin-trash-bold-duotone",
                            className: "w-4 h-4"
                          })
                        })]
                      })
                    })]
                  }, _0x3e4679.id);
                })
              })]
            })
          })
        }), _0x44d9b9.length > 0 && _0x2e9713.jsx("div", {
          className: "flex items-center justify-between mt-3",
          children: _0x2e9713.jsxs("p", {
            className: "text-xs text-text-muted",
            children: [_0x1ebc55("serverSettings.invites.totalInvites", {
              count: _0x44d9b9.length
            }), (_0x44c769.expired > 0 || _0x44c769.full > 0) && _0x2e9713.jsxs("span", {
              className: "ml-1.5",
              children: ["(", _0x2e9713.jsx("span", {
                className: "text-emerald-400",
                children: _0x1ebc55("serverSettings.invites.activeCount", {
                  count: _0x44c769.active
                })
              }), _0x44c769.full > 0 && _0x2e9713.jsxs("span", {
                className: "text-amber-400",
                children: [", ", _0x1ebc55("serverSettings.invites.fullCount", {
                  count: _0x44c769.full
                })]
              }), _0x44c769.expired > 0 && _0x2e9713.jsxs("span", {
                className: "text-red-400",
                children: [", ", _0x1ebc55("serverSettings.invites.expiredCount", {
                  count: _0x44c769.expired
                })]
              }), ")"]
            })]
          })
        })]
      }), _0x291414 && _0x2e9713.jsx(_0x3deaf7, {
        isOpen: _0x291414,
        onClose: () => {
          _0x367899(false);
        },
        guildId: _0x343711
      }), _0x2e9713.jsx(_0x4a65a8, {
        open: !!_0x1d654b,
        onOpenChange: _0x34addb => !_0x34addb && _0x2ddd08(null),
        onConfirm: _0x1d001c,
        variant: "danger",
        icon: _0x2e9713.jsx(_0x213b7a, {
          icon: "solar:trash-bin-trash-bold-duotone",
          className: "size-5 text-red-400"
        }),
        title: _0x1ebc55("serverSettings.invites.deleteTitle"),
        description: _0x1ebc55("serverSettings.invites.deleteDesc"),
        confirmText: _0x1ebc55("serverSettings.invites.deleteConfirm"),
        cancelText: _0x1ebc55("serverSettings.invites.deleteCancel")
      }), _0x2e9713.jsx(_0x28d9e6, {
        open: !!_0x25f651,
        onOpenChange: _0x267af0 => !_0x267af0 && _0x171af2(null),
        children: _0x2e9713.jsxs(_0x316b57, {
          className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md overflow-hidden",
          children: [_0x2e9713.jsxs(_0x43227e, {
            children: [_0x2e9713.jsx(_0x1488f2, {
              children: _0x1ebc55("serverSettings.invites.editTitle")
            }), _0x2e9713.jsx(_0xb256c8, {
              children: _0x1ebc55("serverSettings.invites.editDesc", {
                code: _0x25f651?.code || ""
              })
            })]
          }), _0x2e9713.jsx("div", {
            className: "p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40",
            children: _0x2e9713.jsxs("div", {
              className: "bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col",
              children: [_0x2e9713.jsxs("div", {
                className: "px-4 py-4 border-b border-border-subtle",
                children: [_0x2e9713.jsx("h2", {
                  className: "text-lg font-semibold text-text-primary",
                  children: _0x1ebc55("serverSettings.invites.editTitle")
                }), _0x25f651 && _0x2e9713.jsx("p", {
                  className: "text-sm text-text-tertiary mt-1",
                  children: _0x1ebc55("serverSettings.invites.editDesc", {
                    code: _0x25f651.code
                  })
                })]
              }), _0x2e9713.jsxs("div", {
                className: "px-4 py-4 space-y-4",
                children: [_0x2e9713.jsxs("div", {
                  children: [_0x2e9713.jsx("label", {
                    className: "text-sm font-medium text-text-secondary mb-1.5 block",
                    children: _0x1ebc55("serverSettings.invites.editMaxUses")
                  }), _0x2e9713.jsx("input", {
                    type: "number",
                    min: _0x25f651 ? _0x25f651.used_count ?? _0x25f651.uses ?? 0 : 0,
                    placeholder: _0x1ebc55("serverSettings.invites.editMaxUsesPlaceholder"),
                    value: _0x268885,
                    onChange: _0x54cc8c => _0x464d91(_0x54cc8c.target.value),
                    className: "w-full h-10 px-3 rounded-xl text-sm bg-surface-inset/40 border border-border-subtle text-text-primary placeholder:text-text-muted outline-none focus:border-border-default transition-colors"
                  }), _0x2e9713.jsx("p", {
                    className: "text-xs text-text-muted mt-1",
                    children: _0x1ebc55("serverSettings.invites.editMaxUsesHint", {
                      used: _0x25f651?.used_count ?? _0x25f651?.uses ?? 0
                    })
                  })]
                }), _0x2e9713.jsxs("div", {
                  children: [_0x2e9713.jsx("label", {
                    className: "text-sm font-medium text-text-secondary mb-1.5 block",
                    children: _0x1ebc55("serverSettings.invites.editExpiry")
                  }), _0x2e9713.jsxs("select", {
                    value: _0x1519ed,
                    onChange: _0x4e8b32 => _0x30524c(_0x4e8b32.target.value),
                    className: "w-full h-10 rounded-xl bg-surface-inset/40 border border-border-subtle text-text-primary text-sm px-3 outline-none focus:border-border-default transition-colors",
                    children: [_0x2e9713.jsx("option", {
                      value: "keep",
                      children: _0x1ebc55("serverSettings.invites.editExpiryKeep")
                    }), _0x2e9713.jsx("option", {
                      value: "remove",
                      children: _0x1ebc55("serverSettings.invites.editExpiryRemove")
                    }), _0x2e9713.jsx("option", {
                      value: "1",
                      children: _0x1ebc55("serverSettings.invites.editExpiry1h")
                    }), _0x2e9713.jsx("option", {
                      value: "6",
                      children: _0x1ebc55("serverSettings.invites.editExpiry6h")
                    }), _0x2e9713.jsx("option", {
                      value: "12",
                      children: _0x1ebc55("serverSettings.invites.editExpiry12h")
                    }), _0x2e9713.jsx("option", {
                      value: "24",
                      children: _0x1ebc55("serverSettings.invites.editExpiry1d")
                    }), _0x2e9713.jsx("option", {
                      value: "168",
                      children: _0x1ebc55("serverSettings.invites.editExpiry7d")
                    }), _0x2e9713.jsx("option", {
                      value: "720",
                      children: _0x1ebc55("serverSettings.invites.editExpiry30d")
                    })]
                  }), _0x25f651?.expires_at && _0x2e9713.jsx("p", {
                    className: "text-xs text-text-muted mt-1",
                    children: _0x1ebc55("serverSettings.invites.editExpiryCurrently", {
                      date: O(_0x25f651.expires_at, _0x28e0a0.language)
                    })
                  })]
                })]
              }), _0x2e9713.jsxs("div", {
                className: "sticky bottom-0 px-4 py-3 border-t border-border-subtle flex items-center justify-end gap-3",
                children: [_0x2e9713.jsx("button", {
                  onClick: () => _0x171af2(null),
                  className: "h-10 px-4 rounded-xl text-sm font-medium text-text-secondary bg-surface-inset/40 border border-border-subtle hover:bg-interactive-muted transition-colors cursor-pointer",
                  children: _0x1ebc55("serverSettings.invites.deleteCancel")
                }), _0x2e9713.jsxs("button", {
                  onClick: _0x59b2b3,
                  disabled: _0x2472cd,
                  className: "h-10 px-4 rounded-xl text-sm font-semibold transition-colors cursor-pointer disabled:cursor-not-allowed disabled:bg-surface-inset disabled:text-text-tertiary bg-accent-primary hover:bg-[#9cef00] text-black flex items-center gap-1.5",
                  children: [_0x2472cd ? _0x2e9713.jsx(z, {
                    className: "w-4 h-4 animate-spin"
                  }) : null, _0x1ebc55(_0x2472cd ? "serverSettings.invites.editSaving" : "serverSettings.invites.editSave")]
                })]
              })]
            })
          })]
        })
      })]
    })
  });
};
export { R as default };