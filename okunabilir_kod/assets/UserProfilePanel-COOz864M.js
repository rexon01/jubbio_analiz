import { t as _0x515755, c as _0x1ad581, O as _0x722ba9, b as _0x2d8e50, r, aj as _0x5bd69e, j as _0x109c06, X as _0x5c3ada, B as _0x1b2034, G as _0x251d7d, aT as _0x2c7423, P as _0x26037b, aN as _0x3d5146, eS as _0x4cd154 } from "./index-cQfEKR1W.js";
import { B as _0x30d3da } from "./ComparisonTable-DUfwtDVZ.js";
import { C as _0x43c8a3 } from "./checkbox-6NFFWv4U.js";
import { L as _0x400c45 } from "./label-ODyS97Ju.js";
import { T as _0x4d9b7a } from "./textarea-CIeIrkot.js";
import { D as _0x42a4f4, a as _0x36c84d, b as _0x3b13b9, c as _0x39ed5f, f as _0x370060 } from "./dialog-BMMpM7PR.js";
import { c as _0x5e127a } from "./clipboard-BQ9qambq.js";
import { u as _0xa31615 } from "./useGlobalKeyboard-Woyx4Cai.js";
import { L as _0x5119b1 } from "./loader-circle-CTtxa1g9.js";
import { A as _0x497177 } from "./arrow-left-B3FhifN2.js";
import { C as _0x384dcf } from "./copy-D6m_ILAw.js";
import { C as _0x4b16a4, L as _0xeac8a9 } from "./user-DSjlY8FD.js";
import { B as _0x5248d6 } from "./bot--rnBv7zG.js";
import { bu as _0x5c06ad, bv as _0x15c010 } from "./AppLayout-BEBJqe9_.js";
import { U } from "./user-x-D7hkQEsg.js"; /**
                                          * @license lucide-react v0.535.0 - ISC
                                          *
                                          * This source code is licensed under the ISC license.
                                          * See the LICENSE file in the root directory of this source tree.
                                          */
const G = _0x515755("calendar", [["path", {
  d: "M8 2v4",
  key: "1cmpym"
}], ["path", {
  d: "M16 2v4",
  key: "4m81vk"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2",
  key: "1hopcy"
}], ["path", {
  d: "M3 10h18",
  key: "8toen8"
}]]);
const O = _0x515755("circle-check-big", [["path", {
  d: "M21.801 10A10 10 0 1 1 17 3.335",
  key: "yps3ct"
}], ["path", {
  d: "m9 11 3 3L22 4",
  key: "1pflzl"
}]]);
const B = _0x515755("file-text", [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
  key: "1rqfz7"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4",
  key: "tnqrlb"
}], ["path", {
  d: "M10 9H8",
  key: "b1mrlr"
}], ["path", {
  d: "M16 13H8",
  key: "t4e002"
}], ["path", {
  d: "M16 17H8",
  key: "z1uh3a"
}]]);
const T = _0x515755("network", [["rect", {
  x: "16",
  y: "16",
  width: "6",
  height: "6",
  rx: "1",
  key: "4q2zg0"
}], ["rect", {
  x: "2",
  y: "16",
  width: "6",
  height: "6",
  rx: "1",
  key: "8cvhb9"
}], ["rect", {
  x: "9",
  y: "2",
  width: "6",
  height: "6",
  rx: "1",
  key: "1egb70"
}], ["path", {
  d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",
  key: "1jsf9p"
}], ["path", {
  d: "M12 12V8",
  key: "2874zd"
}]]);
const M = {
  async getUsers(_0x25755a = {}) {
    try {
      const _0x2984b3 = {};
      if (_0x25755a.page) {
        _0x2984b3.page = _0x25755a.page;
      }
      if (_0x25755a.limit) {
        _0x2984b3.limit = _0x25755a.limit;
      }
      if (_0x25755a.search) {
        _0x2984b3.search = _0x25755a.search;
      }
      if (_0x25755a.role) {
        _0x2984b3.role = _0x25755a.role;
      }
      if (_0x25755a.is_active !== undefined) {
        _0x2984b3.is_active = _0x25755a.is_active;
      }
      if (_0x25755a.is_bot !== undefined) {
        _0x2984b3.is_bot = _0x25755a.is_bot;
      }
      if (_0x25755a["include-badge"]) {
        _0x2984b3["include-badge"] = _0x25755a["include-badge"];
      }
      if (_0x25755a["exclude-badge"]) {
        _0x2984b3["exclude-badge"] = _0x25755a["exclude-badge"];
      }
      return (await _0x1ad581.get("/api/v1/admin/users", {
        params: _0x2984b3,
        headers: {
          "Content-Type": "application/json"
        }
      })).data;
    } catch (_0x38927c) {
      throw _0x722ba9(_0x38927c);
    }
  },
  async getUserById(_0xd4c3f7) {
    try {
      return (await _0x1ad581.get("/api/v1/admin/users/" + _0xd4c3f7, {
        headers: {
          "Content-Type": "application/json"
        }
      })).data;
    } catch (_0x522dee) {
      throw _0x722ba9(_0x522dee);
    }
  },
  async getRelatedAccounts(_0x515b69) {
    try {
      return (await _0x1ad581.get("/api/v1/admin/users/" + _0x515b69 + "/related-accounts", {
        headers: {
          "Content-Type": "application/json"
        }
      })).data;
    } catch (_0x29d684) {
      throw _0x722ba9(_0x29d684);
    }
  },
  async endUserSessions(_0x4b051d) {
    try {
      return (await _0x1ad581.post("/api/v1/admin/users/" + _0x4b051d + "/end-sessions", undefined, {
        headers: {
          "Content-Type": "application/json"
        }
      })).data;
    } catch (_0x4180f) {
      throw _0x722ba9(_0x4180f);
    }
  },
  async banUser(_0x424806, _0x153de4) {
    try {
      return (await _0x1ad581.post("/api/v1/admin/users/" + _0x424806 + "/ban", _0x153de4, {
        headers: {
          "Content-Type": "application/json"
        }
      })).data;
    } catch (_0x825645) {
      throw _0x722ba9(_0x825645);
    }
  },
  async unbanUser(_0x434d2b, _0x113f9d) {
    try {
      return (await _0x1ad581.post("/api/v1/admin/users/" + _0x434d2b + "/ban", _0x113f9d, {
        headers: {
          "Content-Type": "application/json"
        }
      })).data;
    } catch (_0x5f5a54) {
      throw _0x722ba9(_0x5f5a54);
    }
  },
  async updateUserRole(_0x4db5a1, _0x3f140e) {
    try {
      return (await _0x1ad581.put("/api/v1/admin/users/" + _0x4db5a1 + "/role", {
        role: _0x3f140e
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      })).data;
    } catch (_0x26c36b) {
      throw _0x722ba9(_0x26c36b);
    }
  },
  async approveAllBetaApplications() {
    try {
      return (await _0x1ad581.post("/api/v1/admin/beta/approve-all", undefined, {
        headers: {
          "Content-Type": "application/json"
        }
      })).data;
    } catch (_0x41ff44) {
      throw _0x722ba9(_0x41ff44);
    }
  },
  async resendBetaEmails() {
    try {
      return (await _0x1ad581.post("/api/v1/admin/beta/resend-emails", undefined, {
        headers: {
          "Content-Type": "application/json"
        }
      })).data;
    } catch (_0x4ebdf6) {
      throw _0x722ba9(_0x4ebdf6);
    }
  }
};
const L = ({
  guildId: _0x1072bd,
  variant: _0x445ad9 = "purple"
}) => {
  const {
    t: _0x1b7989
  } = _0x2d8e50();
  const [_0xbeafee, _0xce4849] = r.useState(null);
  const [_0x4375da, _0x34de4b] = r.useState(false);
  const _0x36cf8b = _0x445ad9 === "purple" ? "border-purple-500/30 bg-purple-500/10 text-purple-300" : "border-amber-500/30 bg-amber-500/10 text-amber-300";
  return <_0x3d5146 label={_0xbeafee || _0x1b7989("admin.clickShowServerName")} side="top"><_0x30d3da variant="outline" className={_0x36cf8b + " font-mono text-[10px] px-1.5 cursor-pointer hover:opacity-80 transition-opacity"} onClick={async () => {
      if (!_0xbeafee && !_0x4375da) {
        _0x34de4b(true);
        try {
          const _0x247117 = await _0x4cd154(_0x1072bd);
          _0xce4849(_0x247117.name || _0x1b7989("admin.unknownServer"));
        } catch {
          _0xce4849(_0x1b7989("admin.serverNotFound"));
        } finally {
          _0x34de4b(false);
        }
      }
    }}>{_0x4375da ? <_0x5119b1 className="w-2 h-2 animate-spin" /> : _0x1072bd}</_0x30d3da></_0x3d5146>;
};
const $ = ({
  userId: _0x3b8c28,
  onClose: _0xf4d7c5
}) => {
  const {
    t: _0x42d9c6,
    i18n: _0x273817
  } = _0x2d8e50();
  const [_0x17e756, _0x21ac57] = r.useState(null);
  const [_0x52a735, _0x11b393] = r.useState(null);
  const [_0xa795d3, _0x576dc8] = r.useState(true);
  const [_0x54cc93, _0x11b941] = r.useState(null);
  const [_0x193155, _0x3a9de9] = r.useState(false);
  const [_0x1515e5, _0x5df836] = r.useState(true);
  const [_0x3a5269, _0x54f89f] = r.useState(true);
  const [_0x471ff5, _0x2ce236] = r.useState(false);
  const [_0x4869fa, _0x593dd3] = r.useState(false);
  const [_0x3c9359, _0x5e0901] = r.useState("");
  const [_0x352902, _0x5a8f83] = r.useState(false);
  const [_0x390ab4, _0x3d91b3] = r.useState(false);
  const [_0x29d1f8, _0x1f2467] = r.useState(null);
  const [_0x4fb9af, _0x16b2f7] = r.useState(null);
  const [_0x2eb828, _0x4f7ec7] = r.useState(false);
  const [_0x249e97, _0x174da6] = r.useState(false);
  const [_0x1a2959, _0x5e37bc] = r.useState(true);
  const [_0x391b3f, _0x2b4d17] = r.useState(true);
  const [_0x14ec3d, _0x24d26d] = r.useState(false);
  const [_0x33723a, _0xec560f] = r.useState("");
  const [_0x405f49, _0x3519ba] = r.useState(false);
  const [_0x31b03f, _0x3261e6] = r.useState(false);
  const [_0x112bd9, _0xd02904] = r.useState(false);
  r.useEffect(() => {
    (async () => {
      _0x576dc8(true);
      _0x11b941(null);
      try {
        const _0x289541 = await M.getRelatedAccounts(_0x3b8c28);
        const _0x1d39b9 = {
          id: _0x289541.target_user.id,
          username: _0x289541.target_user.username,
          display_name: _0x289541.target_user.display_name || _0x289541.target_user.username,
          email: "",
          avatar_url: _0x289541.target_user.avatar_url,
          banner_url: _0x289541.target_user.banner_url,
          bio: _0x289541.target_user.bio,
          role: "user",
          is_active: _0x289541.target_user.is_active,
          created_at: _0x289541.target_user.created_at,
          updated_at: _0x289541.target_user.created_at,
          last_activity: _0x289541.target_user.last_activity ?? null,
          is_bot: false
        };
        _0x21ac57(_0x1d39b9);
        _0x11b393(_0x289541);
      } catch (_0x10daa0) {
        console.error("Failed to load user info:", _0x10daa0);
        _0x11b941(_0x10daa0 instanceof Error ? _0x10daa0.message : _0x42d9c6("admin.userLoadError"));
      } finally {
        _0x576dc8(false);
      }
    })();
  }, [_0x3b8c28]);
  const _0xe5b714 = _0x1f3aa1 => _0x1f3aa1.avatar_url || null;
  const _0x25f70f = _0x11aa0b => (_0x11aa0b.display_name || _0x11aa0b.username).split(" ").map(_0x7a956f => _0x7a956f[0]).filter(Boolean).slice(0, 2).join("").toUpperCase() || "?";
  const _0x427d04 = _0x363518 => {
    const _0x2b7526 = _0x273817.language || "en";
    return new Date(_0x363518).toLocaleDateString(_0x2b7526, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  const _0x88d7a3 = () => {
    _0x3a9de9(false);
    _0x5df836(true);
    _0x54f89f(true);
    _0x2ce236(false);
    _0x593dd3(false);
    _0x5e0901("");
  };
  const _0x4d7666 = () => {
    _0x174da6(false);
    _0x5e37bc(true);
    _0x2b4d17(true);
    _0x24d26d(false);
    _0xec560f("");
  };
  _0xa31615("Escape", () => {
    if (!_0x193155 && !_0x249e97 && !_0x390ab4 && !_0x31b03f) {
      _0xf4d7c5();
    }
  }, 8);
  if (_0xa795d3) {
    return _0x5bd69e.createPortal(<div className="fixed inset-0 z-[9999] flex" aria-modal="true" role="dialog"><div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={_0xf4d7c5} /><div className="relative ml-auto w-full max-w-4xl h-full bg-surface-base border-l border-border-default shadow-[−8px_0_40px_rgba(0,0,0,0.5)] animate-in slide-in-from-right duration-300"><div className="h-full flex items-center justify-center"><div className="text-center"><_0x5119b1 className="w-8 h-8 animate-spin text-accent-primary mx-auto mb-3" /><p className="text-text-tertiary">{_0x42d9c6("admin.loadingUserInfo")}</p></div></div></div></div>, document.body);
  }
  if (_0x54cc93 || !_0x17e756) {
    return _0x5bd69e.createPortal(<div className="fixed inset-0 z-[9999] flex" aria-modal="true" role="dialog"><div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={_0xf4d7c5} /><div className="relative ml-auto w-full max-w-4xl h-full bg-surface-base border-l border-border-default shadow-[−8px_0_40px_rgba(0,0,0,0.5)] animate-in slide-in-from-right duration-300"><div className="h-full flex items-center justify-center"><div className="text-center"><_0x5c3ada className="w-8 h-8 text-status-error mx-auto mb-3" /><p className="text-text-primary font-medium">{_0x42d9c6("admin.userNotFound")}</p><p className="text-text-muted text-sm mt-1">{_0x54cc93}</p><_0x1b2034 variant="outline" onClick={_0xf4d7c5} className="mt-4 border-border-default text-text-secondary">{_0x42d9c6("common.close")}</_0x1b2034></div></div></div></div>, document.body);
  }
  const _0x3c6d1e = _0xe5b714(_0x17e756);
  const _0x40ba43 = _0x25f70f(_0x17e756);
  const _0x421e4c = ({
    u: _0x397342,
    className: _0x3e1620 = "w-24 h-24"
  }) => {
    const _0x42bc03 = _0xe5b714(_0x397342);
    const _0x26b701 = _0x25f70f(_0x397342);
    if (_0x42bc03) {
      return <img src={_0x42bc03} alt={_0x397342.display_name} className={_0x3e1620 + " rounded-full object-cover"} />;
    } else {
      return <div className={_0x3e1620 + " rounded-full bg-surface-overlay grid place-items-center text-text-secondary font-semibold"}><span>{_0x26b701}</span></div>;
    }
  };
  return _0x5bd69e.createPortal(<_0x109c06.Fragment><div className="fixed inset-0 z-[9999] flex" aria-modal="true" role="dialog" aria-labelledby="user-profile-title"><div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={_0xf4d7c5} /><div className="relative ml-auto w-full max-w-4xl h-full bg-surface-base border-l border-border-default shadow-[−8px_0_40px_rgba(0,0,0,0.5)] animate-in slide-in-from-right duration-300"><div className="h-full overflow-y-auto p-6 scrollbar-thin"><_0x1b2034 variant="ghost" size="sm" onClick={_0xf4d7c5} className="mb-6 text-text-tertiary hover:text-text-primary hover:bg-surface-overlay/50"><_0x497177 className="w-4 h-4 mr-2" />{_0x42d9c6("common.close")}</_0x1b2034><div className="relative mb-16">{_0x17e756.banner_url ? <img src={_0x17e756.banner_url} alt="Banner" className="w-full h-40 object-cover rounded-xl" /> : <div className="w-full h-40 bg-gradient-to-r from-surface-overlay via-surface-inset to-surface-overlay rounded-xl" />}<div className="absolute -bottom-12 left-8">{_0x3c6d1e ? <img src={_0x3c6d1e} alt={_0x17e756.display_name} className="w-24 h-24 rounded-full border-4 border-surface-base object-cover" /> : <div className="w-24 h-24 rounded-full border-4 border-surface-base bg-surface-overlay grid place-items-center text-text-secondary text-2xl font-semibold">{_0x40ba43}</div>}</div></div><div className="space-y-6"><div className="flex items-start justify-between"><div><h2 id="user-profile-title" className="text-2xl font-bold text-text-primary">{_0x17e756.display_name}</h2><p className="text-text-tertiary text-lg">@{_0x17e756.username}</p></div><div className="flex gap-2"><_0x30d3da variant="outline" className={"text-sm px-3 py-1 " + (_0x17e756.role === "admin" ? "border-status-error/30 bg-status-error-subtle text-status-error" : _0x17e756.role === "moderator" ? "border-status-info/30 bg-status-info-subtle text-status-info" : "border-border-default bg-surface-overlay text-text-tertiary")}>{_0x17e756.role === "admin" ? _0x42d9c6("admin.admin") : _0x17e756.role === "moderator" ? _0x42d9c6("admin.moderator") : _0x42d9c6("admin.user")}</_0x30d3da><_0x30d3da variant="outline" className={"text-sm px-3 py-1 " + (_0x17e756.is_active ? "border-status-success/30 bg-status-success-subtle text-status-success" : "border-status-error/30 bg-status-error-subtle text-status-error")}>{_0x17e756.is_active ? _0x42d9c6("admin.active") : _0x42d9c6("admin.inactive")}</_0x30d3da></div></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"><div className="p-4 bg-surface-overlay/40 border border-border-subtle rounded-xl"><div className="flex items-center gap-3 mb-2"><div className="p-2 bg-surface-inset/50 rounded-lg"><span className="text-text-tertiary font-mono text-sm">#</span></div><span className="text-text-muted text-sm">{_0x42d9c6("admin.userId")}</span></div><div className="flex items-center gap-2"><p className="text-text-primary font-mono text-lg">{_0x17e756.id}</p><_0x1b2034 variant="ghost" size="sm" onClick={() => (async _0x5ee0a8 => {
                    await _0x5e127a(_0x5ee0a8);
                    _0x26037b.success(_0x42d9c6("admin.copied"));
                  })(String(_0x17e756.id))} className="h-7 w-7 p-0 text-text-muted hover:text-text-secondary"><_0x384dcf className="w-3.5 h-3.5" /></_0x1b2034></div></div><div className="p-4 bg-surface-overlay/40 border border-border-subtle rounded-xl"><div className="flex items-center gap-3 mb-2"><div className="p-2 bg-surface-inset/50 rounded-lg"><G className="w-4 h-4 text-text-tertiary" /></div><span className="text-text-muted text-sm">{_0x42d9c6("admin.registrationDate")}</span></div><p className="text-text-primary">{_0x427d04(_0x17e756.created_at)}</p></div><div className="p-4 bg-surface-overlay/40 border border-border-subtle rounded-xl"><div className="flex items-center gap-3 mb-2"><div className="p-2 bg-surface-inset/50 rounded-lg"><_0x4b16a4 className="w-4 h-4 text-text-tertiary" /></div><span className="text-text-muted text-sm">{_0x42d9c6("admin.lastActivity")}</span></div><p className="text-text-primary">{_0x17e756.last_activity ? _0x427d04(_0x17e756.last_activity) : <span className="text-text-muted italic">{_0x42d9c6("admin.never")}</span>}</p></div></div><div className="p-4 bg-surface-overlay/40 border border-border-subtle rounded-xl"><div className="flex items-center gap-3 mb-3"><div className="p-2 bg-surface-inset/50 rounded-lg"><B className="w-4 h-4 text-text-tertiary" /></div><span className="text-text-muted text-sm">{_0x42d9c6("admin.about")}</span></div><p className="text-text-secondary leading-relaxed">{_0x17e756.bio || <span className="text-text-muted italic">{_0x42d9c6("admin.noBio")}</span>}</p></div><div className="p-4 bg-surface-overlay/40 border border-border-subtle rounded-xl"><div className="flex items-center gap-3 mb-4"><div className="p-2 bg-surface-inset/50 rounded-lg"><T className="w-4 h-4 text-text-tertiary" /></div><span className="text-text-muted text-sm">{_0x42d9c6("admin.ipAndRelatedAccounts")}</span></div>{_0x52a735 ? <div className="space-y-4">{_0x52a735.ips.length > 0 && <div><p className="text-text-tertiary text-xs mb-2 uppercase tracking-wide">{_0x42d9c6("admin.ipAddresses", {
                      count: _0x52a735.ip_count
                    })}</p><div className="flex flex-wrap gap-2">{_0x52a735.ips.map(_0x1b15a9 => <div className={"flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-mono " + (_0x1b15a9.is_banned ? "bg-status-error-subtle border border-status-error/30 text-status-error" : "bg-surface-inset/50 border border-border-subtle text-text-secondary")} key={_0x1b15a9.ip_address}><_0x251d7d className="w-3 h-3" /><span>{_0x1b15a9.ip_address}</span>{_0x1b15a9.is_banned && <_0x30d3da variant="outline" className="text-[10px] px-1.5 py-0 border-status-error/30 text-status-error">{_0x42d9c6("admin.banned")}</_0x30d3da>}<span className="text-text-muted text-xs">({_0x1b15a9.related_user_count} {_0x42d9c6("admin.account", {
                          count: _0x1b15a9.related_user_count
                        })})</span></div>)}</div></div>}{_0x52a735.related_accounts.count > 0 && <div><p className="text-text-tertiary text-xs mb-2 uppercase tracking-wide">{_0x42d9c6("admin.relatedAccounts", {
                      count: _0x52a735.related_accounts.count
                    })}</p><div className="grid grid-cols-1 md:grid-cols-2 gap-2">{_0x52a735.related_accounts.users.map(_0x35119e => <div className={"flex items-center gap-3 p-2 rounded-lg " + (_0x35119e.is_active ? "bg-surface-inset/30 border border-border-subtle" : "bg-status-error-subtle border border-status-error/20")} key={_0x35119e.id}><div className="flex items-center gap-2 flex-1 min-w-0">{_0x35119e.is_bot && <_0x5248d6 className="w-3 h-3 text-purple-400 flex-shrink-0" />}<span className="text-text-muted font-mono text-xs">#{_0x35119e.id}</span><span className="text-text-primary truncate">@{_0x35119e.username}</span></div><_0x30d3da variant="outline" className={"text-[10px] px-1.5 py-0 flex-shrink-0 " + (_0x35119e.is_active ? "border-status-success/30 text-status-success" : "border-status-error/30 text-status-error")}>{_0x35119e.is_active ? _0x42d9c6("admin.active") : _0x42d9c6("admin.inactive")}</_0x30d3da></div>)}</div></div>}{_0x52a735.ips.length === 0 && _0x52a735.related_accounts.count === 0 && <p className="text-text-muted text-sm italic">{_0x42d9c6("admin.noRelatedAccounts")}</p>}</div> : <p className="text-text-muted text-sm italic">{_0x42d9c6("admin.dataLoadFailed")}</p>}</div><div className="flex flex-wrap gap-3 pt-4 border-t border-border-default"><_0x1b2034 variant="outline" onClick={() => _0x3261e6(true)} className="border-border-default text-text-secondary hover:bg-surface-overlay"><_0xeac8a9 className="w-4 h-4 mr-2" />{_0x42d9c6("admin.endSessions")}</_0x1b2034>{_0x17e756.is_active ? <_0x1b2034 onClick={() => {
                _0x3a9de9(true);
              }} className="bg-red-600 hover:bg-red-700 text-white"><_0x5c06ad className="w-4 h-4 mr-2" />{_0x42d9c6("admin.ban")}</_0x1b2034> : <_0x1b2034 onClick={() => {
                _0x174da6(true);
              }} className="bg-emerald-600 hover:bg-emerald-700 text-white"><_0x15c010 className="w-4 h-4 mr-2" />{_0x42d9c6("admin.unban")}</_0x1b2034>}</div></div></div></div></div><_0x42a4f4 open={_0x31b03f} onOpenChange={_0x3261e6}><_0x36c84d className="bg-surface-base border-border-default text-text-primary max-w-md" overlayClassName="z-[10000]" wrapperClassName="z-[10001]"><_0x3b13b9><_0x39ed5f className="flex items-center gap-2 text-status-warning"><_0xeac8a9 className="w-5 h-5" />{_0x42d9c6("admin.endSessions")}</_0x39ed5f></_0x3b13b9><div className="space-y-4"><div className="flex items-center gap-3 p-3 bg-surface-overlay/50 rounded-lg"><_0x421e4c u={_0x17e756} className="w-10 h-10" /><div><p className="font-medium">{_0x17e756.display_name}</p><p className="text-sm text-text-tertiary">@{_0x17e756.username}</p></div></div><p className="text-text-secondary text-sm">{_0x42d9c6("admin.endSessionsConfirm")}</p></div><_0x370060 className="gap-2"><_0x1b2034 variant="outline" onClick={() => _0x3261e6(false)} className="border-border-default text-text-secondary hover:bg-surface-overlay">{_0x42d9c6("common.cancel")}</_0x1b2034><_0x1b2034 onClick={async () => {
            if (_0x17e756) {
              try {
                _0xd02904(true);
                await M.endUserSessions(_0x17e756.id);
                _0x3261e6(false);
              } catch {} finally {
                _0xd02904(false);
              }
            }
          }} disabled={_0x112bd9} className="bg-orange-600 hover:bg-orange-700 text-white">{_0x112bd9 ? <_0x109c06.Fragment><_0x5119b1 className="w-4 h-4 mr-2 animate-spin" />{_0x42d9c6("admin.ending")}</_0x109c06.Fragment> : <_0x109c06.Fragment><_0xeac8a9 className="w-4 h-4 mr-2" />{_0x42d9c6("admin.endSessions")}</_0x109c06.Fragment>}</_0x1b2034></_0x370060></_0x36c84d></_0x42a4f4><_0x42a4f4 open={_0x193155} onOpenChange={_0x3a9de9}><_0x36c84d className="bg-surface-base border-border-default text-text-primary max-w-md max-h-[80vh] overflow-y-auto" overlayClassName="z-[10000]" wrapperClassName="z-[10001]"><_0x3b13b9><_0x39ed5f className="flex items-center gap-2 text-status-error"><_0x5c06ad className="w-5 h-5" />{_0x42d9c6("admin.banUser")}</_0x39ed5f></_0x3b13b9><div className="space-y-4"><div className="flex items-center gap-3 p-3 bg-surface-overlay/50 rounded-lg"><_0x421e4c u={_0x17e756} className="w-10 h-10" /><div><p className="font-medium">{_0x17e756.display_name}</p><p className="text-sm text-text-tertiary">@{_0x17e756.username}</p></div></div><div className="space-y-3"><div className="flex items-center space-x-2"><_0x43c8a3 id="banAllIps" checked={_0x1515e5} onCheckedChange={_0x38b67b => _0x5df836(_0x38b67b === true)} /><_0x400c45 htmlFor="banAllIps" className="flex items-center gap-2 text-text-secondary cursor-pointer"><_0x251d7d className="w-4 h-4" />{_0x42d9c6("admin.banAllIps")}</_0x400c45></div><div className="flex items-center space-x-2"><_0x43c8a3 id="banRelatedAccounts" checked={_0x3a5269} onCheckedChange={_0x8a18ee => _0x54f89f(_0x8a18ee === true)} /><_0x400c45 htmlFor="banRelatedAccounts" className="flex items-center gap-2 text-text-secondary cursor-pointer"><U className="w-4 h-4" />{_0x42d9c6("admin.banRelatedAccounts")}</_0x400c45></div><div className="flex items-center space-x-2"><_0x43c8a3 id="removeFromGuilds" checked={_0x471ff5} onCheckedChange={_0x3386f4 => _0x2ce236(_0x3386f4 === true)} /><_0x400c45 htmlFor="removeFromGuilds" className="flex items-center gap-2 text-text-secondary cursor-pointer"><_0xeac8a9 className="w-4 h-4" />{_0x42d9c6("admin.removeFromGuilds")}</_0x400c45></div><div className="flex items-center space-x-2"><_0x43c8a3 id="suspendOwnedGuilds" checked={_0x4869fa} onCheckedChange={_0x1640ba => _0x593dd3(_0x1640ba === true)} /><_0x400c45 htmlFor="suspendOwnedGuilds" className="flex items-center gap-2 text-text-secondary cursor-pointer"><_0x15c010 className="w-4 h-4" />{_0x42d9c6("admin.suspendOwnedGuilds")}</_0x400c45></div></div><div className="space-y-2"><_0x400c45 htmlFor="ipBanReason" className="text-text-secondary">{_0x42d9c6("admin.banReason")} <span className="text-status-error">*</span></_0x400c45><_0x4d9b7a id="ipBanReason" placeholder={_0x42d9c6("admin.banReasonPlaceholder")} value={_0x3c9359} onChange={_0x48b882 => _0x5e0901(_0x48b882.target.value)} className="bg-surface-overlay/50 border-border-default text-text-primary placeholder:text-text-muted min-h-[80px]" /></div></div><_0x370060 className="gap-2"><_0x1b2034 variant="outline" onClick={_0x88d7a3} className="border-border-default text-text-secondary hover:bg-surface-overlay">{_0x42d9c6("common.cancel")}</_0x1b2034><_0x1b2034 onClick={async () => {
            if (_0x17e756 && _0x3c9359.trim()) {
              try {
                _0x5a8f83(true);
                const _0x6fcf7a = await M.banUser(_0x17e756.id, {
                  is_active: false,
                  ban_all_ips: _0x1515e5,
                  ban_related_accounts: _0x3a5269,
                  remove_membership_from_guilds: _0x471ff5,
                  suspend_owned_guilds: _0x4869fa,
                  ip_ban_reason: _0x3c9359.trim()
                });
                _0x21ac57(_0x32efcd => _0x32efcd ? {
                  ..._0x32efcd,
                  is_active: false
                } : null);
                _0x88d7a3();
                _0x1f2467(_0x6fcf7a);
                _0x16b2f7(null);
                _0x4f7ec7(false);
                _0x3d91b3(true);
              } catch {} finally {
                _0x5a8f83(false);
              }
            } else {
              _0x26037b.error(_0x42d9c6("admin.enterBanReason"));
            }
          }} disabled={_0x352902 || !_0x3c9359.trim()} className="bg-red-600 hover:bg-red-700 text-white">{_0x352902 ? <_0x109c06.Fragment><_0x5119b1 className="w-4 h-4 mr-2 animate-spin" />{_0x42d9c6("admin.banning")}</_0x109c06.Fragment> : <_0x109c06.Fragment><_0x5c06ad className="w-4 h-4 mr-2" />{_0x42d9c6("admin.ban")}</_0x109c06.Fragment>}</_0x1b2034></_0x370060></_0x36c84d></_0x42a4f4><_0x42a4f4 open={_0x249e97} onOpenChange={_0x174da6}><_0x36c84d className="bg-surface-base border-border-default text-text-primary max-w-md max-h-[80vh] overflow-y-auto" overlayClassName="z-[10000]" wrapperClassName="z-[10001]"><_0x3b13b9><_0x39ed5f className="flex items-center gap-2 text-status-success"><_0x15c010 className="w-5 h-5" />{_0x42d9c6("admin.liftBan")}</_0x39ed5f></_0x3b13b9><div className="space-y-4"><div className="flex items-center gap-3 p-3 bg-surface-overlay/50 rounded-lg"><_0x421e4c u={_0x17e756} className="w-10 h-10" /><div><p className="font-medium">{_0x17e756.display_name}</p><p className="text-sm text-text-tertiary">@{_0x17e756.username}</p></div></div><div className="space-y-3"><div className="flex items-center space-x-2"><_0x43c8a3 id="unbanAllIps" checked={_0x1a2959} onCheckedChange={_0x4c9762 => _0x5e37bc(_0x4c9762 === true)} /><_0x400c45 htmlFor="unbanAllIps" className="flex items-center gap-2 text-text-secondary cursor-pointer"><_0x251d7d className="w-4 h-4" />{_0x42d9c6("admin.unbanAllIps")}</_0x400c45></div><div className="flex items-center space-x-2"><_0x43c8a3 id="unbanRelatedAccounts" checked={_0x391b3f} onCheckedChange={_0x15f0b5 => _0x2b4d17(_0x15f0b5 === true)} /><_0x400c45 htmlFor="unbanRelatedAccounts" className="flex items-center gap-2 text-text-secondary cursor-pointer"><U className="w-4 h-4" />{_0x42d9c6("admin.unbanRelatedAccounts")}</_0x400c45></div><div className="flex items-center space-x-2"><_0x43c8a3 id="unsuspendOwnedGuilds" checked={_0x14ec3d} onCheckedChange={_0x18b264 => _0x24d26d(_0x18b264 === true)} /><_0x400c45 htmlFor="unsuspendOwnedGuilds" className="flex items-center gap-2 text-text-secondary cursor-pointer"><_0x15c010 className="w-4 h-4" />{_0x42d9c6("admin.unsuspendOwnedGuilds")}</_0x400c45></div></div><div className="space-y-2"><_0x400c45 htmlFor="unbanReason" className="text-text-secondary">{_0x42d9c6("admin.unbanReason")} <span className="text-status-error">*</span></_0x400c45><_0x4d9b7a id="unbanReason" placeholder={_0x42d9c6("admin.unbanReasonPlaceholder")} value={_0x33723a} onChange={_0x532a69 => _0xec560f(_0x532a69.target.value)} className="bg-surface-overlay/50 border-border-default text-text-primary placeholder:text-text-muted min-h-[80px]" /></div></div><_0x370060 className="gap-2"><_0x1b2034 variant="outline" onClick={_0x4d7666} className="border-border-default text-text-secondary hover:bg-surface-overlay">{_0x42d9c6("common.cancel")}</_0x1b2034><_0x1b2034 onClick={async () => {
            if (_0x17e756 && _0x33723a.trim()) {
              try {
                _0x3519ba(true);
                const _0x66e78d = await M.unbanUser(_0x17e756.id, {
                  is_active: true,
                  unban_related_ips: _0x1a2959,
                  unban_related_accounts: _0x391b3f,
                  unsuspend_owned_guilds: _0x14ec3d,
                  ip_ban_reason: _0x33723a.trim()
                });
                _0x21ac57(_0x3cbdb4 => _0x3cbdb4 ? {
                  ..._0x3cbdb4,
                  is_active: true
                } : null);
                _0x4d7666();
                _0x16b2f7(_0x66e78d);
                _0x1f2467(null);
                _0x4f7ec7(true);
                _0x3d91b3(true);
              } catch {} finally {
                _0x3519ba(false);
              }
            } else {
              _0x26037b.error(_0x42d9c6("admin.enterUnbanReason"));
            }
          }} disabled={_0x405f49 || !_0x33723a.trim()} className="bg-emerald-600 hover:bg-emerald-700 text-white">{_0x405f49 ? <_0x109c06.Fragment><_0x5119b1 className="w-4 h-4 mr-2 animate-spin" />{_0x42d9c6("admin.lifting")}</_0x109c06.Fragment> : <_0x109c06.Fragment><_0x15c010 className="w-4 h-4 mr-2" />{_0x42d9c6("admin.liftBan")}</_0x109c06.Fragment>}</_0x1b2034></_0x370060></_0x36c84d></_0x42a4f4><_0x42a4f4 open={_0x390ab4} onOpenChange={_0x3d91b3}><_0x36c84d className="bg-surface-base border-border-default text-text-primary max-w-md max-h-[80vh] overflow-y-auto" overlayClassName="z-[10000]" wrapperClassName="z-[10001]"><_0x3b13b9><_0x39ed5f className="flex items-center gap-2 text-status-success"><O className="w-5 h-5" />{_0x42d9c6(_0x2eb828 ? "admin.unbanCompleted" : "admin.banCompleted")}</_0x39ed5f></_0x3b13b9>{!_0x2eb828 && _0x29d1f8 && <div className="space-y-4"><div className="p-3 bg-surface-overlay/50 rounded-lg"><p className="text-text-secondary">{_0x29d1f8.message}</p><p className="text-sm text-text-tertiary mt-1">{_0x42d9c6("admin.userLabel")}: <span className="text-text-primary">@{_0x29d1f8.username}</span></p></div>{_0x29d1f8.ip_ban && _0x29d1f8.ip_ban.banned_ip_count > 0 && <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg"><div className="flex items-center gap-2 text-orange-400 mb-2"><_0x251d7d className="w-4 h-4" /><span className="font-medium">{_0x42d9c6("admin.bannedIps", {
                  count: _0x29d1f8.ip_ban.banned_ip_count
                })}</span></div><div className="flex flex-wrap gap-2">{_0x29d1f8.ip_ban.banned_ips.map(_0x547612 => <_0x30d3da variant="outline" className="border-orange-500/30 bg-orange-500/10 text-orange-300 font-mono text-xs" key={_0x547612}>{_0x547612}</_0x30d3da>)}</div></div>}{_0x29d1f8.related_accounts_banned && _0x29d1f8.related_accounts_banned.count > 0 && <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg"><div className="flex items-center gap-2 text-red-400 mb-2"><U className="w-4 h-4" /><span className="font-medium">{_0x42d9c6("admin.bannedRelatedAccounts", {
                  count: _0x29d1f8.related_accounts_banned.count
                })}</span></div><div className="space-y-1">{_0x29d1f8.related_accounts_banned.accounts.map(_0x3e7793 => <div className="flex items-center gap-2 text-sm" key={_0x3e7793.id}><span className="text-text-muted font-mono">#{_0x3e7793.id}</span><span className="text-text-secondary">@{_0x3e7793.username}</span></div>)}</div></div>}{_0x29d1f8.guild_removal && _0x29d1f8.guild_removal.total_guilds_affected > 0 && <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg"><div className="flex items-center gap-2 text-purple-400 mb-2"><_0xeac8a9 className="w-4 h-4" /><span className="font-medium">{_0x42d9c6("admin.removedFromServers", {
                  count: _0x29d1f8.guild_removal.total_guilds_affected
                })}</span></div><div className="space-y-3">{_0x29d1f8.guild_removal.results.filter(_0xa73f5d => _0xa73f5d.removedFromCount > 0 || _0xa73f5d.skippedOwnerGuildIds.length > 0).map(_0x3b424f => <div className="text-sm border-b border-purple-500/10 pb-2 last:border-0 last:pb-0" key={_0x3b424f.userId}><div className="flex items-center gap-2 text-text-secondary mb-1"><span className="text-text-muted font-mono">#{_0x3b424f.userId}</span><span>{_0x3b424f.removedFromCount} {_0x42d9c6("admin.removedFromServerCount")}</span></div>{_0x3b424f.guildIds.length > 0 && <div className="flex flex-wrap gap-1 mt-1">{_0x3b424f.guildIds.map(_0x3b3980 => <L guildId={_0x3b3980} variant="purple" key={_0x3b3980} />)}</div>}{_0x3b424f.skippedOwnerGuildIds.length > 0 && <div className="mt-2"><div className="text-xs text-amber-400 mb-1">⚠️ {_0x42d9c6("admin.skippedOwner", {
                      count: _0x3b424f.skippedOwnerGuildIds.length
                    })}:</div><div className="flex flex-wrap gap-1">{_0x3b424f.skippedOwnerGuildIds.map(_0x429117 => <L guildId={_0x429117} variant="amber" key={_0x429117} />)}</div></div>}</div>)}</div></div>}{_0x29d1f8.guild_suspend && _0x29d1f8.guild_suspend.suspended_count > 0 && <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg"><div className="flex items-center gap-2 text-orange-400 mb-2"><_0x15c010 className="w-4 h-4" /><span className="font-medium">{_0x42d9c6("admin.suspendedGuilds", {
                  count: _0x29d1f8.guild_suspend.suspended_count
                })}</span></div><div className="space-y-1">{_0x29d1f8.guild_suspend.suspended_guilds.map(_0x28d38a => <div className="flex items-center gap-2 text-sm" key={_0x28d38a.id}><span className="text-text-muted font-mono text-xs">#{_0x28d38a.id}</span><span className="text-text-secondary">{_0x28d38a.name}</span>{_0x28d38a.already_suspended && <_0x30d3da variant="outline" className="text-[10px] px-1.5 py-0 border-border-default text-text-muted">{_0x42d9c6("admin.alreadySuspended")}</_0x30d3da>}</div>)}</div></div>}{(!_0x29d1f8.ip_ban || _0x29d1f8.ip_ban.banned_ip_count === 0) && (!_0x29d1f8.related_accounts_banned || _0x29d1f8.related_accounts_banned.count === 0) && (!_0x29d1f8.guild_removal || _0x29d1f8.guild_removal.total_guilds_affected === 0) && (!_0x29d1f8.guild_suspend || _0x29d1f8.guild_suspend.suspended_count === 0) && <div className="p-3 bg-surface-overlay/50 rounded-lg text-text-tertiary text-sm"><_0x2c7423 className="w-4 h-4 inline mr-2" />{_0x42d9c6("admin.noAdditionalBanActions")}</div>}</div>}{_0x2eb828 && _0x4fb9af && <div className="space-y-4"><div className="p-3 bg-surface-overlay/50 rounded-lg"><p className="text-text-secondary">{_0x4fb9af.message}</p><p className="text-sm text-text-tertiary mt-1">{_0x42d9c6("admin.userLabel")}: <span className="text-text-primary">@{_0x4fb9af.username}</span></p></div>{_0x4fb9af.ip_unban && _0x4fb9af.ip_unban.unbanned_ip_count > 0 && <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg"><div className="flex items-center gap-2 text-emerald-400 mb-2"><_0x251d7d className="w-4 h-4" /><span className="font-medium">{_0x42d9c6("admin.unbannedIps", {
                  count: _0x4fb9af.ip_unban.unbanned_ip_count
                })}</span></div><div className="flex flex-wrap gap-2">{_0x4fb9af.ip_unban.unbanned_ips.map(_0x33d160 => <_0x30d3da variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-mono text-xs" key={_0x33d160}>{_0x33d160}</_0x30d3da>)}</div></div>}{_0x4fb9af.ip_unban?.related_accounts_unbanned && _0x4fb9af.ip_unban.related_accounts_unbanned.count > 0 && <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg"><div className="flex items-center gap-2 text-emerald-400 mb-2"><U className="w-4 h-4" /><span className="font-medium">{_0x42d9c6("admin.unbannedRelatedAccounts", {
                  count: _0x4fb9af.ip_unban.related_accounts_unbanned.count
                })}</span></div><div className="space-y-1">{_0x4fb9af.ip_unban.related_accounts_unbanned.accounts.map(_0x99a92a => <div className="flex items-center gap-2 text-sm" key={_0x99a92a.id}><span className="text-text-muted font-mono">#{_0x99a92a.id}</span><span className="text-text-secondary">@{_0x99a92a.username}</span></div>)}</div></div>}{_0x4fb9af.guild_unsuspend && _0x4fb9af.guild_unsuspend.unsuspended_count > 0 && <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg"><div className="flex items-center gap-2 text-emerald-400 mb-2"><_0x15c010 className="w-4 h-4" /><span className="font-medium">{_0x42d9c6("admin.guildsUnsuspended", {
                  count: _0x4fb9af.guild_unsuspend.unsuspended_count
                })}</span></div><div className="space-y-1">{_0x4fb9af.guild_unsuspend.unsuspended_guilds.map(_0x5c5d91 => <div className="flex items-center gap-2 text-sm" key={_0x5c5d91.id}><span className="text-text-muted font-mono text-xs">#{_0x5c5d91.id}</span><span className="text-text-secondary">{_0x5c5d91.name}</span></div>)}</div></div>}{(!_0x4fb9af.ip_unban || _0x4fb9af.ip_unban.unbanned_ip_count === 0) && (!_0x4fb9af.ip_unban?.related_accounts_unbanned || _0x4fb9af.ip_unban.related_accounts_unbanned.count === 0) && (!_0x4fb9af.guild_unsuspend || _0x4fb9af.guild_unsuspend.unsuspended_count === 0) && <div className="p-3 bg-surface-overlay/50 rounded-lg text-text-tertiary text-sm"><_0x2c7423 className="w-4 h-4 inline mr-2" />{_0x42d9c6("admin.noAdditionalUnbanActions")}</div>}</div>}<_0x370060><_0x1b2034 onClick={() => _0x3d91b3(false)} className="bg-surface-overlay hover:bg-surface-inset text-text-primary">{_0x42d9c6("common.ok")}</_0x1b2034></_0x370060></_0x36c84d></_0x42a4f4></_0x109c06.Fragment>, document.body);
};
export { B as F, $ as U };