import { t as _0x3859f1, aD as _0x4aaab2, b as _0x58e13a, r as _0x216463, P as _0x282675, eJ as _0xd7c35b, j as _0x2305a3, I as _0x2ae7cf, an as _0x509408, eK as _0x28dbc6, dQ as _0x2cae1f, aG as _0x495909, bV as _0x2a8579, R as _0x1568ab, f as _0x24b307, b2 as _0x1bae9d, eo as _0x4bacba, bC as _0xfbb4b, ef as _0x4a23a3, aN as _0x11ee99, aT as _0x4d1609 } from "./index-cQfEKR1W.js";
import { u as _0x24581b, bt as _0x1a40fc, C as _0x5d980b, b as _0x3c2293, af as _0x15d27e, U as _0x5a3d0f, c as _0x1190c4, d as _0x5ea4ab, bu as _0x542b2b, l as _0x15ffb7, a7 as _0x1bcf87, an as _0x18883b } from "./AppLayout-BEBJqe9_.js";
import { c as _0x5e3b72 } from "./clipboard-BQ9qambq.js";
import { M as _0x48e762 } from "./ModerationModal-CS_sqQfM.js";
import { F as _0x5e60a8, U as _0x4dd5fa } from "./UserProfilePanel-COOz864M.js";
import { D as _0x2a8616, a as _0x5d0927, b as _0x25cda2, c as _0x2fe9b6 } from "./dialog-BMMpM7PR.js";
import { I as _0x501301 } from "./ImageCropModal-Bz0NeASX.js";
import { C as _0x27fd0e } from "./ConfirmDialog-B4gIndKy.js";
import { L as _0x203e97 } from "./loader-circle-CTtxa1g9.js";
import { C as _0x108deb } from "./camera-Tq38xvm2.js";
import { T as _0x28616e } from "./trash-2-DuFcDcAU.js";
import { j as _0x10d21e } from "./soundboardFx-C2LP-Hjs.js";
import { C as _0x148bd0 } from "./zap-B3VH4qT9.js";
import { C as _0x5bc852 } from "./user-DSjlY8FD.js";
import { S as _0x3cb4e2 } from "./settings-BHmftTyd.js";
import { U as _0x2c7c9f } from "./user-minus-CgemOKRn.js";
import { P as _0x21d7a7 } from "./pencil-Uxk32dwB.js";
import { C as _0x48e7af } from "./copy-D6m_ILAw.js"; /**
                                                     * @license lucide-react v0.535.0 - ISC
                                                     *
                                                     * This source code is licensed under the ISC license.
                                                     * See the LICENSE file in the root directory of this source tree.
                                                     */
const Y = _0x3859f1("user-check", [["path", {
  d: "m16 11 2 2 4-4",
  key: "9rsbq5"
}], ["path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
  key: "1yyitq"
}], ["circle", {
  cx: "9",
  cy: "7",
  r: "4",
  key: "nufk8"
}]]);
var ee;
var se;
if (!se) {
  se = 1;
  ee = function e(_0x255851, _0x1aee3d) {
    if (_0x255851 === _0x1aee3d) {
      return true;
    }
    if (_0x255851 && _0x1aee3d && typeof _0x255851 == "object" && typeof _0x1aee3d == "object") {
      if (_0x255851.constructor !== _0x1aee3d.constructor) {
        return false;
      }
      var _0x1ac009;
      var _0x4db369;
      var _0x1fdf84;
      if (Array.isArray(_0x255851)) {
        if ((_0x1ac009 = _0x255851.length) != _0x1aee3d.length) {
          return false;
        }
        for (_0x4db369 = _0x1ac009; _0x4db369-- !== 0;) {
          if (!e(_0x255851[_0x4db369], _0x1aee3d[_0x4db369])) {
            return false;
          }
        }
        return true;
      }
      if (_0x255851.constructor === RegExp) {
        return _0x255851.source === _0x1aee3d.source && _0x255851.flags === _0x1aee3d.flags;
      }
      if (_0x255851.valueOf !== Object.prototype.valueOf) {
        return _0x255851.valueOf() === _0x1aee3d.valueOf();
      }
      if (_0x255851.toString !== Object.prototype.toString) {
        return _0x255851.toString() === _0x1aee3d.toString();
      }
      if ((_0x1ac009 = (_0x1fdf84 = Object.keys(_0x255851)).length) !== Object.keys(_0x1aee3d).length) {
        return false;
      }
      for (_0x4db369 = _0x1ac009; _0x4db369-- !== 0;) {
        if (!Object.prototype.hasOwnProperty.call(_0x1aee3d, _0x1fdf84[_0x4db369])) {
          return false;
        }
      }
      for (_0x4db369 = _0x1ac009; _0x4db369-- !== 0;) {
        var _0x1468a8 = _0x1fdf84[_0x4db369];
        if ((_0x1468a8 !== "_owner" || !_0x255851.$$typeof) && !e(_0x255851[_0x1468a8], _0x1aee3d[_0x1468a8])) {
          return false;
        }
      }
      return true;
    }
    return _0x255851 != _0x255851 && _0x1aee3d != _0x1aee3d;
  };
}
var re = ee;
const te = _0x4aaab2(re);
const _Component2 = ({
  open: _0x3700aa,
  onOpenChange: _0x4efed9,
  guildId: _0x487530,
  userId: _0x157470,
  memberName: _0x339a7b
}) => {
  const {
    t: _0x41e548
  } = _0x58e13a();
  const {
    has: _0x494b4d,
    isOwner: _0x2d50e4,
    isOwnerPerm: _0x34fc97
  } = _0x24581b(_0x487530);
  const _0x5ee96c = _0x2d50e4 || _0x34fc97 || _0x494b4d(_0x495909.MANAGE_NICKNAMES);
  _0x216463.useEffect(() => {
    if (_0x3700aa && !_0x5ee96c) {
      _0x4efed9(false);
    }
  }, [_0x3700aa, _0x5ee96c, _0x4efed9]);
  const [_0x1c8d54, _0x266710] = _0x216463.useState(false);
  const [_0x2d09ac, _0xe60563] = _0x216463.useState(false);
  const [_0x82db3b, _0x1f32db] = _0x216463.useState({
    nickname: "",
    avatar_url: "",
    banner_url: "",
    bio: ""
  });
  const [_0x2e5522, _0x5ebb53] = _0x216463.useState({
    nickname: "",
    avatar_url: "",
    banner_url: "",
    bio: ""
  });
  const [_0x129ac2, _0x25762a] = _0x216463.useState(null);
  const [_0x151434, _0x5a0e5a] = _0x216463.useState(false);
  const [_0x56fa8a, _0x233f4d] = _0x216463.useState(false);
  const [_0x586a21, _0x2a13eb] = _0x216463.useState(false);
  const _0x19cba3 = _0x216463.useRef(null);
  const [_0xa78dba, _0x509cdd] = _0x216463.useState({
    isOpen: false,
    imageSrc: null,
    onComplete: () => {},
    imageName: undefined
  });
  _0x216463.useEffect(() => {
    if (!_0x3700aa || !_0x5ee96c || !_0x487530 || !_0x157470) {
      return;
    }
    let _0xab4e8 = false;
    (async () => {
      _0x266710(true);
      try {
        const _0x3d092d = await _0x2cae1f(_0x487530, String(_0x157470));
        if (_0xab4e8) {
          return;
        }
        const _0x52bba5 = _0x3d092d.server_profile;
        const _0x42f855 = {
          nickname: _0x52bba5?.nickname ?? "",
          avatar_url: _0x52bba5?.avatar_url ?? "",
          banner_url: _0x52bba5?.banner_url ?? "",
          bio: _0x52bba5?.bio ?? ""
        };
        _0x1f32db(_0x42f855);
        _0x5ebb53(_0x42f855);
        _0x25762a(null);
        _0x5a0e5a(false);
      } catch {} finally {
        if (!_0xab4e8) {
          _0x266710(false);
        }
      }
    })();
    return () => {
      _0xab4e8 = true;
    };
  }, [_0x3700aa, _0x5ee96c, _0x487530, _0x157470, _0x41e548]);
  const [_0x10ec66, _0x4431b3] = _0x216463.useState(null);
  _0x216463.useEffect(() => {
    if (_0x129ac2) {
      const _0x54ecbb = URL.createObjectURL(_0x129ac2);
      _0x4431b3(_0x54ecbb);
      return () => URL.revokeObjectURL(_0x54ecbb);
    }
    _0x4431b3(_0x151434 ? null : _0x82db3b.avatar_url || null);
  }, [_0x129ac2, _0x151434, _0x82db3b.avatar_url]);
  const _0x193d40 = _0x216463.useCallback(_0x5a99a6 => {
    if (!_0x5a99a6.target.files?.length) {
      return;
    }
    const _0x2cc0cc = _0x5a99a6.target.files[0];
    if (_0x2cc0cc.size > 10485760) {
      _0x282675.error(_0x41e548("profile.fileTooLarge", {
        size: (_0x2cc0cc.size / 1048576).toFixed(2),
        max: 10
      }));
      _0x5a99a6.target.value = "";
      return;
    }
    if (!["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(_0x2cc0cc.type)) {
      _0x282675.error(_0x41e548("profile.invalidFileType"));
      _0x5a99a6.target.value = "";
      return;
    }
    const _0x32f747 = new FileReader();
    _0x32f747.addEventListener("load", () => {
      _0x509cdd({
        isOpen: true,
        imageSrc: _0x32f747.result,
        onComplete: _0x4af987 => {
          _0x25762a(_0x4af987);
          _0x5a0e5a(false);
        },
        imageName: _0x2cc0cc.name
      });
    });
    _0x32f747.readAsDataURL(_0x2cc0cc);
    _0x5a99a6.target.value = "";
  }, [_0x41e548]);
  const _0x1f2a7c = _0x82db3b.nickname !== _0x2e5522.nickname || _0x82db3b.bio !== _0x2e5522.bio || _0x129ac2 !== null || _0x151434;
  const _0x4c46f4 = _0x216463.useCallback(async () => {
    if (_0x1f2a7c && _0x5ee96c) {
      _0xe60563(true);
      try {
        const _0x4ffaaa = {};
        if (_0x82db3b.nickname !== _0x2e5522.nickname) {
          _0x4ffaaa.nickname = _0x82db3b.nickname;
        }
        if (_0x82db3b.bio !== _0x2e5522.bio) {
          _0x4ffaaa.bio = _0x82db3b.bio;
        }
        if (_0x151434 && _0x2e5522.avatar_url) {
          _0x4ffaaa.avatar_url = "";
        } else if (_0x129ac2) {
          _0x4ffaaa.avatar = _0x129ac2;
        }
        const _0xa3396e = (await _0xd7c35b(_0x487530, String(_0x157470), _0x4ffaaa)).server_profile;
        const _0x36104a = {
          nickname: _0xa3396e?.nickname ?? "",
          avatar_url: _0xa3396e?.avatar_url ?? "",
          banner_url: _0xa3396e?.banner_url ?? "",
          bio: _0xa3396e?.bio ?? ""
        };
        _0x1f32db(_0x36104a);
        _0x5ebb53(_0x36104a);
        _0x25762a(null);
        _0x5a0e5a(false);
        _0x4efed9(false);
      } catch {} finally {
        _0xe60563(false);
      }
    }
  }, [_0x1f2a7c, _0x5ee96c, _0x82db3b, _0x2e5522, _0x129ac2, _0x151434, _0x487530, _0x157470, _0x41e548, _0x4efed9]);
  const _0x3493e3 = _0x216463.useMemo(() => _0x339a7b.charAt(0).toUpperCase(), [_0x339a7b]);
  const _0x49ab31 = _0x82db3b.nickname || _0x339a7b;
  return <_0x2305a3.Fragment><_0x2a8616 open={_0x3700aa && _0x5ee96c} onOpenChange={_0x4efed9}><_0x5d0927 className="p-0 gap-0 bg-transparent border-0 shadow-none !max-w-[480px] overflow-hidden fixed" style={{
        width: "480px",
        maxWidth: "calc(100vw - 2rem)"
      }} aria-describedby={undefined}><div className="p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40 overflow-hidden"><div className="bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col max-h-[85vh]"><_0x25cda2 className="px-5 py-4 border-b border-border-subtle shrink-0"><_0x2fe9b6 className="text-lg font-semibold text-text-primary">{_0x41e548("server.editMemberProfile")}</_0x2fe9b6><p className="text-sm text-text-muted mt-0.5">{_0x339a7b}</p></_0x25cda2>{_0x1c8d54 ? <div className="flex items-center justify-center py-16 gap-2 text-text-tertiary"><_0x203e97 className="size-4 animate-spin" /><span className="text-sm">{_0x41e548("profile.loadingServerProfile")}</span></div> : <_0x2305a3.Fragment><div className="flex-1 overflow-y-auto overflow-x-hidden px-5 py-4 space-y-4 scrollbar-thin"><div className="flex items-center gap-3 p-4 rounded-xl border border-border-subtle bg-surface-inset/10"><div className="w-12 h-12 rounded-full overflow-hidden bg-surface-overlay flex items-center justify-center shrink-0 ring-2 ring-border-subtle">{_0x10ec66 ? <img src={_0x10ec66} alt="" className="w-full h-full object-cover" /> : <span className="text-sm font-bold text-text-primary">{_0x3493e3}</span>}</div><div className="flex-1 min-w-0 overflow-hidden"><p className="font-semibold text-text-primary truncate">{_0x49ab31}</p>{_0x82db3b.bio ? <p className="text-xs text-text-muted truncate">{_0x82db3b.bio}</p> : <p className="text-xs text-text-muted">{_0x41e548("server.preview")}</p>}</div></div><div className="rounded-xl bg-surface-inset/40 border border-border-subtle overflow-hidden"><div className="flex items-center gap-3 px-4 py-3 border-b border-border-subtle"><div className="w-9 h-9 rounded-lg bg-surface-inset/40 flex items-center justify-center shrink-0"><_0x2ae7cf icon="solar:user-bold-duotone" className="size-4 text-text-tertiary" /></div><div className="flex-1 min-w-0"><p className="text-sm text-text-primary font-medium">{_0x41e548("profile.profilePicture")}</p><p className="text-xs text-text-muted">{_0x41e548("profile.profilePictureDesc")}</p></div></div><div className="px-4 py-3 flex items-center gap-4"><button type="button" onClick={() => _0x19cba3.current?.click()} className="group relative w-16 h-16 rounded-2xl ring-4 ring-border-strong/80 border border-border-default overflow-hidden bg-surface-overlay/60 grid place-items-center text-text-secondary text-lg font-semibold cursor-pointer shrink-0">{_0x10ec66 ? <img src={_0x10ec66} alt="" className="absolute inset-0 w-full h-full object-cover" /> : <span>{_0x3493e3}</span>}<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-0.5"><_0x108deb className="size-5 text-text-primary" /></div></button><div className="flex flex-col gap-1.5"><button type="button" onClick={() => _0x19cba3.current?.click()} className="h-8 px-3 text-xs font-medium text-text-secondary bg-surface-inset/40 hover:bg-interactive-muted rounded-lg border border-border-subtle hover:border-border-default transition-colors">{_0x41e548("profile.changeImage")}</button>{(_0x129ac2 || _0x82db3b.avatar_url) && !_0x151434 && <button type="button" onClick={() => {
                        _0x25762a(null);
                        _0x5a0e5a(true);
                      }} className="h-8 px-3 text-xs text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/15 rounded-lg border border-red-500/20 hover:border-red-500/30 transition-colors">{_0x41e548("profile.remove")}</button>}</div></div><input ref={_0x19cba3} type="file" accept=".jpg,.jpeg,.png,.webp" onChange={_0x193d40} className="hidden" /></div><div className="rounded-xl bg-surface-inset/40 border border-border-subtle overflow-hidden"><div className="flex items-center gap-3 px-4 py-3"><div className="w-9 h-9 rounded-lg bg-surface-inset/40 flex items-center justify-center shrink-0"><_0x1a40fc className="size-4 text-text-tertiary" /></div><div className="flex-1 min-w-0 overflow-hidden"><label htmlFor="edit_nickname" className="text-xs text-text-muted block mb-1">{_0x41e548("profile.serverNickname")}</label><input id="edit_nickname" type="text" value={_0x82db3b.nickname} onChange={_0x58693e => {
                        const _0x141107 = _0x58693e.target.value;
                        if ((!_0x141107 || !!/^[a-zA-ZğüşıöçÄÜŞİÖÇ0-9\s._-]*$/.test(_0x141107)) && !(_0x141107.length > 50)) {
                          _0x1f32db(_0x321594 => ({
                            ..._0x321594,
                            nickname: _0x141107
                          }));
                        }
                      }} maxLength={50} placeholder={_0x41e548("profile.serverNicknamePlaceholder")} className="w-full bg-transparent text-text-primary text-sm placeholder:text-text-muted outline-none" /></div><span className="text-xs text-text-muted shrink-0">{_0x82db3b.nickname.length}/{50}</span></div></div><div className="rounded-xl bg-surface-inset/40 border border-border-subtle overflow-hidden"><div className="flex items-start gap-3 px-4 py-3"><div className="w-9 h-9 rounded-lg bg-surface-inset/40 flex items-center justify-center shrink-0 mt-0.5"><_0x5e60a8 className="size-4 text-text-tertiary" /></div><div className="flex-1 min-w-0 overflow-hidden"><label htmlFor="edit_bio" className="text-xs text-text-muted block mb-1">{_0x41e548("profile.serverBio")}</label><textarea id="edit_bio" value={_0x82db3b.bio} onChange={_0x507828 => {
                        const _0x4caa8f = _0x507828.target.value;
                        if (!(_0x4caa8f.length > 500) && !(new TextEncoder().encode(_0x4caa8f).length > 2000)) {
                          _0x1f32db(_0x5a012c => ({
                            ..._0x5a012c,
                            bio: _0x4caa8f
                          }));
                        }
                      }} placeholder={_0x41e548("profile.serverBioPlaceholder")} maxLength={500} rows={3} className="w-full bg-transparent text-text-primary text-sm placeholder:text-text-muted outline-none resize-none" /></div><span className="text-xs text-text-muted shrink-0">{_0x82db3b.bio.length}/{500}</span></div></div></div><div className="px-5 py-4 border-t border-border-subtle shrink-0"><div className="flex items-center gap-2"><button type="button" onClick={() => _0x233f4d(true)} disabled={_0x2d09ac} className="h-10 px-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-sm font-medium transition-colors flex items-center gap-2 disabled:opacity-50"><_0x28616e className="size-4" />{_0x41e548("profile.resetServerProfile")}</button><div className="flex-1" /><button type="button" onClick={() => _0x4efed9(false)} disabled={_0x2d09ac} className="h-10 px-5 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors disabled:opacity-50">{_0x41e548("common.cancel")}</button><button type="button" onClick={_0x4c46f4} disabled={!_0x1f2a7c || _0x2d09ac} className="h-10 px-5 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">{_0x2d09ac ? <_0x203e97 className="size-4 animate-spin" /> : <_0x2305a3.Fragment><_0x509408 className="size-4" />{_0x41e548("common.save")}</_0x2305a3.Fragment>}</button></div></div></_0x2305a3.Fragment>}</div></div></_0x5d0927></_0x2a8616><_0x27fd0e open={_0x56fa8a && _0x5ee96c} onOpenChange={_0x233f4d} onConfirm={async () => {
      if (_0x5ee96c) {
        _0x2a13eb(true);
        try {
          await _0x28dbc6(_0x487530, String(_0x157470));
          const _0x2eeada = {
            nickname: "",
            avatar_url: "",
            banner_url: "",
            bio: ""
          };
          _0x1f32db(_0x2eeada);
          _0x5ebb53(_0x2eeada);
          _0x25762a(null);
          _0x5a0e5a(false);
          _0x233f4d(false);
        } catch {} finally {
          _0x2a13eb(false);
        }
      }
    }} isLoading={_0x586a21} icon={<_0x28616e className="size-5 text-red-400" />} title={_0x41e548("profile.resetServerProfile")} subtitle={_0x339a7b} description={_0x41e548("profile.serverProfileResetConfirm")} confirmText={_0x41e548("profile.reset")} variant="danger" /><_0x501301 isOpen={_0xa78dba.isOpen} onClose={() => _0x509cdd(_0x4cd636 => ({
      ..._0x4cd636,
      isOpen: false,
      imageSrc: null
    }))} imageSrc={_0xa78dba.imageSrc} aspect={1} onCropComplete={_0xa78dba.onComplete} imageName={_0xa78dba.imageName} /></_0x2305a3.Fragment>;
};
const ne = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: _Component2
}, Symbol.toStringTag, {
  value: "Module"
}));
function ie(_0x539193) {
  if (_0x1bcf87(_0x539193)) {
    const _0x34c8dd = _0x539193.match(/^<(a)?:([a-zA-Z0-9_]+):(\d+)>$/);
    if (_0x34c8dd) {
      return _0x18883b(_0x34c8dd[3], Boolean(_0x34c8dd[1]));
    }
  }
  return _0x10d21e(_0x539193);
}
const _Component = _0x216463.memo(({
  emoji: _0x137321,
  text: _0x32017e
}) => {
  const _0x5e5c63 = _0x1568ab.useRef(null);
  const _0x58abd0 = _0x1568ab.useRef(null);
  const _0x25ee1d = _0x1568ab.useRef(null);
  const [_0x591aa7, _0x2f2585] = _0x1568ab.useState(false);
  const [_0x181e2a, _0x573a18] = _0x1568ab.useState(false);
  _0x1568ab.useEffect(() => {
    const _0x4b96ec = _0x5e5c63.current;
    const _0x464b45 = _0x58abd0.current;
    if (_0x4b96ec && _0x464b45) {
      _0x2f2585(_0x464b45.scrollWidth > _0x4b96ec.clientWidth);
    }
  }, [_0x32017e]);
  _0x1568ab.useEffect(() => {
    if (!_0x591aa7) {
      return;
    }
    const _0x5148bc = _0x5e5c63.current;
    if (!_0x5148bc) {
      return;
    }
    const _0x41e138 = _0x5148bc.closest("[data-member-item]");
    if (!_0x41e138) {
      return;
    }
    let _0x119b60 = false;
    const _0x55b20d = () => {
      _0x119b60 = false;
      if (_0x25ee1d.current) {
        cancelAnimationFrame(_0x25ee1d.current);
        _0x25ee1d.current = null;
      }
      _0x573a18(true);
      const _0x503451 = _0x58abd0.current;
      const _0x1c9b0a = _0x5e5c63.current;
      if (!_0x503451 || !_0x1c9b0a) {
        return;
      }
      const _0x212e35 = _0x503451.scrollWidth - _0x1c9b0a.clientWidth;
      if (_0x212e35 <= 0) {
        return;
      }
      const _0x89dc34 = _0x212e35 + 8;
      const _0x1f942f = Math.max(1500, _0x89dc34 * 20);
      let _0x4cfd55 = null;
      let _0x4bc25c = "scroll";
      let _0x16d555 = 0;
      const _0x144244 = _0x31e21d => {
        if (_0x119b60) {
          return;
        }
        if (_0x4cfd55 === null) {
          _0x4cfd55 = _0x31e21d;
          _0x16d555 = _0x31e21d;
        }
        const _0x37cc83 = _0x31e21d - _0x16d555;
        if (_0x4bc25c === "scroll") {
          const _0x4c1e1d = Math.min(_0x37cc83 / _0x1f942f, 1);
          const _0x3f24aa = _0x4c1e1d < 0.5 ? _0x4c1e1d * 2 * _0x4c1e1d : 1 - Math.pow(_0x4c1e1d * -2 + 2, 2) / 2;
          _0x503451.style.transform = "translateX(" + -_0x89dc34 * _0x3f24aa + "px)";
          if (_0x4c1e1d >= 1) {
            _0x4bc25c = "pause";
            _0x16d555 = _0x31e21d;
          }
        } else if (_0x4bc25c === "pause") {
          if (_0x37cc83 >= 600) {
            _0x4bc25c = "rewind";
            _0x16d555 = _0x31e21d;
          }
        } else if (_0x4bc25c === "rewind") {
          const _0x4a3f86 = Math.min(_0x37cc83 / 300, 1);
          const _0x50fad2 = _0x4a3f86 < 0.5 ? _0x4a3f86 * 2 * _0x4a3f86 : 1 - Math.pow(_0x4a3f86 * -2 + 2, 2) / 2;
          _0x503451.style.transform = "translateX(" + -_0x89dc34 * (1 - _0x50fad2) + "px)";
          if (_0x4a3f86 >= 1) {
            _0x4bc25c = "scroll";
            _0x16d555 = _0x31e21d;
          }
        }
        _0x25ee1d.current = requestAnimationFrame(_0x144244);
      };
      _0x25ee1d.current = requestAnimationFrame(_0x144244);
    };
    const _0x2480f4 = () => {
      _0x119b60 = true;
      if (_0x25ee1d.current) {
        cancelAnimationFrame(_0x25ee1d.current);
        _0x25ee1d.current = null;
      }
      _0x573a18(false);
      const _0x50abed = _0x58abd0.current;
      if (_0x50abed) {
        _0x50abed.style.transform = "translateX(0)";
      }
    };
    _0x41e138.addEventListener("pointerenter", _0x55b20d);
    _0x41e138.addEventListener("pointerleave", _0x2480f4);
    return () => {
      _0x119b60 = true;
      if (_0x25ee1d.current) {
        cancelAnimationFrame(_0x25ee1d.current);
      }
      _0x41e138.removeEventListener("pointerenter", _0x55b20d);
      _0x41e138.removeEventListener("pointerleave", _0x2480f4);
    };
  }, [_0x591aa7]);
  const _0x5e76ba = _0x181e2a ? "linear-gradient(to right, transparent 0%, black 8px, black calc(100% - 8px), transparent 100%)" : _0x591aa7 ? "linear-gradient(to right, black 0%, black calc(100% - 8px), transparent 100%)" : undefined;
  return <div className="flex items-center gap-1 min-w-0 max-w-[140px]">{_0x137321 && <img src={ie(_0x137321)} alt={_0x137321} className="size-3 shrink-0" />}<div ref={_0x5e5c63} className="overflow-hidden min-w-0 flex-1" style={_0x5e76ba ? {
      maskImage: _0x5e76ba,
      WebkitMaskImage: _0x5e76ba
    } : undefined}><span ref={_0x58abd0} className="text-[11px] text-text-tertiary whitespace-nowrap leading-tight block will-change-transform">{_0x32017e}</span></div></div>;
});
const oe = _0x216463.memo(({
  member: _0x901fc7,
  isActive: _0x17b04c = false,
  loadingPresence: _0x1007f0 = false,
  onSelect: _0x57a08e,
  onToggleActive: _0xfd9691,
  onModeration: _0x57946d,
  onTimeout: _0x175efe,
  onBan: _0x3f32b3,
  onClearTimeout: _0x3f2cbd,
  onRemoveFromGroup: _0x3f55eb,
  onMakeGroupOwner: _0x3e4fd8,
  canTimeout: _0x26b2cc = false,
  canKick: _0x3ea538 = false,
  canBan: _0x4431d8 = false,
  canRemoveFromGroup: _0x59f3eb = false,
  canMakeGroupOwner: _0x4784fd = false,
  canManageNicknames: _0x3bc97c = false,
  hasAnyModerationPermission: _0x28e29a = false,
  guildId: _0x443d41,
  memberTimeouts: _0x26ffca,
  currentUserId: _0x347b78,
  isOffline: _0x27200e = false
}) => {
  const {
    t: _0x498638
  } = _0x58e13a();
  const _0x4d6a16 = String(_0x901fc7.user_id ?? _0x901fc7.id);
  const _0x1b7882 = _0x2a8579();
  const _0x5bea85 = _0x1568ab.useMemo(() => _0x26ffca?.[_0x4d6a16], [_0x26ffca, _0x4d6a16]);
  const _0x555c97 = _0x1568ab.useMemo(() => _0x4d6a16 === String(_0x347b78), [_0x4d6a16, _0x347b78]);
  const _0x5a8c3e = _0x1568ab.useMemo(() => _0x27200e && !_0x901fc7.presence ? {
    status: "offline",
    updated_at: ""
  } : _0x901fc7.presence ? {
    status: _0x901fc7.presence.status,
    updated_at: _0x901fc7.presence.updated_at,
    epoch: _0x901fc7.presence.epoch,
    mobile_online: _0x901fc7.presence.mobile_online
  } : undefined, [_0x901fc7.presence, _0x27200e]);
  const [_0x2b421b, _0x480f69] = _0x216463.useState(false);
  const [_0x5d20c3, _0x31d31c] = _0x216463.useState(false);
  const [_0x2973cf, _0x1b3a89] = _0x216463.useState(false);
  const [_0x5a6020, _0x4b252f] = _0x216463.useState(false);
  const _0xf22916 = _0x24b307(_0xdfb8db => _0xdfb8db.user);
  const _0x4a05bb = _0xf22916?.role === "admin";
  const _0x40cc99 = _0x1bae9d(_0x18aeba => _0x18aeba.openUserSettings);
  const _0x534be0 = _0x4bacba();
  const _0xc84455 = _0xfbb4b(_0x425263 => _0x425263.settings.appearance.colorMode ?? "dark");
  const _0x5e9483 = _0x216463.useMemo(() => _0x534be0 === "system" ? window.matchMedia("(prefers-color-scheme: dark)").matches : _0x534be0 === "custom" ? _0xc84455 === "dark" : _0x534be0.startsWith("dark"), [_0x534be0, _0xc84455]);
  _0x1568ab.useEffect(() => {
    _0x31d31c(false);
  }, [_0x901fc7.user_id, _0x901fc7.avatar_url]);
  const _0x48f63e = _0x901fc7.display_name?.trim() || _0x901fc7.username || "Üye #" + (_0x901fc7.user_id ?? _0x901fc7.id);
  const _0xf6a1f9 = String(_0x48f63e).charAt(0).toUpperCase();
  const _0x3dcb30 = Boolean(_0x901fc7.isOwner);
  const _0x26ef4d = _0x216463.useMemo(() => {
    if (_0x5d20c3) {
      return false;
    }
    if (!_0x901fc7.avatar_url) {
      return false;
    }
    return _0x901fc7.avatar_url.trim().length > 0;
  }, [_0x901fc7.avatar_url, _0x5d20c3]);
  const _0x56a60a = _0x216463.useMemo(() => {
    if (!_0x5bea85?.timeout_until) {
      return null;
    }
    const _0x178356 = new Date(_0x5bea85.timeout_until);
    const _0x522e52 = new Date();
    const _0x4d633b = _0x178356.getTime() - _0x522e52.getTime();
    if (_0x4d633b <= 0) {
      return null;
    }
    const _0x58b964 = Math.floor(_0x4d633b / 3600000);
    const _0x43997e = Math.floor(_0x4d633b % 3600000 / 60000);
    let _0x36d4e5 = "";
    _0x36d4e5 = _0x58b964 > 0 ? _0x58b964 + " saat " + _0x43997e + " dk" : _0x43997e > 0 ? _0x43997e + " dk" : "1 dk";
    return {
      timeLeft: _0x36d4e5,
      reason: _0x5bea85.timeout_reason,
      until: _0x178356.toLocaleString(undefined)
    };
  }, [_0x5bea85]);
  const _0x2db97d = _0x901fc7.user_id ?? _0x901fc7.id;
  const _0x124774 = _0x216463.useCallback(_0x310529 => {
    if (_0x17b04c) {
      _0xfd9691?.();
      return;
    }
    const _0x30b993 = _0x310529.currentTarget.getBoundingClientRect();
    _0x57a08e(_0x2db97d, _0x30b993, _0x901fc7);
  }, [_0x17b04c, _0x2db97d, _0x57a08e, _0xfd9691, _0x901fc7]);
  const _0x410a62 = _0x216463.useCallback(() => {
    if (_0x57946d) {
      _0x57946d(_0x901fc7);
    } else {
      _0x282675.info("Moderasyon özelliği geliştiriliyor");
    }
  }, [_0x57946d, _0x901fc7]);
  const _0x13445a = _0x216463.useCallback(() => {
    if (_0x3f32b3) {
      _0x3f32b3(_0x901fc7);
    } else {
      _0x282675.error(_0x498638("server.featureNotActive"));
    }
  }, [_0x3f32b3, _0x901fc7]);
  const _0x2c61e9 = _0x216463.useCallback(() => {
    if (_0x3ea538) {
      _0x480f69(true);
    } else {
      _0x282675.error(_0x498638("server.noKickPermission"));
    }
  }, [_0x3ea538]);
  const _0x5b14d6 = _0x216463.useCallback(async (_0x814ce7, _0x4f8953, _0x16eea5) => {
    if (_0x814ce7 === "kick") {
      if (!_0x443d41 || !_0x901fc7.user_id) {
        _0x282675.error(_0x498638("server.guildOrMemberMissing"));
        return;
      }
      try {
        if ((await _0x4a23a3(_0x443d41, [String(_0x901fc7.user_id)])).successful > 0) {
          _0x282675.success(_0x498638("server.memberKicked"), {
            description: _0x498638("server.memberKickedDesc", {
              name: _0x901fc7.display_name || _0x901fc7.username
            })
          });
          _0x480f69(false);
        } else {
          _0x282675.error(_0x498638("server.memberKickFailed"), {
            description: _0x498638("server.memberKickFailedDesc")
          });
        }
      } catch (_0x39d1d3) {
        console.error("Kick error:", _0x39d1d3);
        _0x282675.error(_0x39d1d3?.response?.data?.error || _0x498638("server.memberKickError"));
      }
    }
  }, [_0x901fc7.user_id, _0x901fc7.display_name, _0x901fc7.username, _0x443d41]);
  const _0x106c95 = _0x216463.useCallback(() => {
    if (_0x175efe) {
      _0x175efe(_0x901fc7);
    } else {
      _0x282675.error(_0x498638("server.featureNotActive"));
    }
  }, [_0x175efe, _0x901fc7]);
  const _0x421b31 = _0x216463.useCallback(() => {
    if (_0x3f2cbd) {
      _0x3f2cbd(_0x901fc7);
    } else {
      _0x282675.info(_0x498638("server.timeoutRemoveDeveloping"));
    }
  }, [_0x3f2cbd, _0x901fc7]);
  const _0x1c3132 = _0x216463.useCallback(() => {
    if (_0x3f55eb) {
      _0x3f55eb(_0x901fc7);
    } else {
      _0x282675.error(_0x498638("server.featureNotActive"));
    }
  }, [_0x3f55eb, _0x901fc7]);
  const _0x49b8aa = _0x216463.useCallback(() => {
    if (_0x3e4fd8) {
      _0x3e4fd8(_0x901fc7);
    } else {
      _0x282675.error(_0x498638("server.featureNotActive"));
    }
  }, [_0x3e4fd8, _0x901fc7]);
  const _0x4fe8e8 = _0x216463.useCallback(() => {
    _0x31d31c(true);
  }, []);
  const _0x2ce477 = _0x216463.useCallback(() => {}, []);
  const _0xe58252 = _0x216463.useCallback(async () => {
    if (await _0x5e3b72(String(_0x2db97d))) {
      _0x282675.success(_0x498638("server.userIdCopied"));
    } else {
      _0x282675.error(_0x498638("server.copyFailed"));
    }
  }, [_0x2db97d]);
  const _0x411b6d = _0x28e29a || _0x4a05bb || _0x59f3eb || _0x4784fd || _0x555c97 || !_0x555c97 && _0x3bc97c || _0x1b7882;
  const [_0x24f316, _0x52ed05] = _0x216463.useState(false);
  const _0x5f16cc = !!(_0x1611a4 = _0x901fc7.avatar_url) && _0x1611a4.toLowerCase().includes(".gif");
  var _0x1611a4;
  const [_0x43230b, _0x548307] = _0x216463.useState(null);
  _0x1568ab.useEffect(() => {
    if (!_0x5f16cc || !_0x901fc7.avatar_url) {
      _0x548307(null);
      return;
    }
    const _0x3751ad = new Image();
    _0x3751ad.crossOrigin = "anonymous";
    _0x3751ad.onload = () => {
      try {
        const _0x1330af = document.createElement("canvas");
        _0x1330af.width = _0x3751ad.naturalWidth || _0x3751ad.width;
        _0x1330af.height = _0x3751ad.naturalHeight || _0x3751ad.height;
        const _0x3b73d6 = _0x1330af.getContext("2d");
        if (_0x3b73d6) {
          _0x3b73d6.drawImage(_0x3751ad, 0, 0);
          const _0x685dd3 = _0x1330af.toDataURL("image/png");
          _0x548307(_0x685dd3);
        }
      } catch (_0xe2669f) {
        _0x548307(null);
      }
    };
    _0x3751ad.onerror = () => {
      _0x548307(null);
    };
    _0x3751ad.src = _0x901fc7.avatar_url;
  }, [_0x901fc7.avatar_url, _0x5f16cc]);
  const _0x5392ef = _0x216463.useMemo(() => {
    if (_0x901fc7.avatar_url) {
      if (_0x5f16cc && !_0x24f316 && _0x43230b) {
        return _0x43230b;
      } else {
        return _0x901fc7.avatar_url;
      }
    }
  }, [_0x901fc7.avatar_url, _0x5f16cc, _0x24f316, _0x43230b]);
  return <_0x2305a3.Fragment><_0x5d980b><_0x3c2293><div className={"flex select-none items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer " + (_0x17b04c ? "bg-surface-overlay" : "hover:bg-surface-overlay/80") + " " + (_0x27200e ? "opacity-40" : "")} data-member-item="1" data-user-id={String(_0x2db97d)} onClick={_0x124774} onMouseEnter={() => _0x52ed05(true)} onMouseLeave={() => _0x52ed05(false)}><div className="relative"><div className="size-8 shrink-0 rounded-md overflow-hidden bg-surface-overlay flex items-center justify-center relative">{_0x26ef4d && !_0x5d20c3 ? <img src={_0x5392ef} alt={_0x48f63e} className="w-full h-full object-cover" loading="lazy" decoding="async" onError={_0x4fe8e8} onLoad={_0x2ce477} /> : <div className="w-full h-full bg-surface-overlay text-text-primary text-xs font-semibold flex items-center justify-center">{_0xf6a1f9}</div>}</div>{_0x1007f0 ? <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-[3px] border-surface-raised bg-surface-inset animate-pulse" /> : <_0x15d27e userId={_0x2db97d} className="absolute -bottom-1 -right-1" size={4} borderWidth={3} borderColor="border-surface-raised" apiPresence={_0x5a8c3e} />}</div><div className="min-w-0 flex flex-col justify-center"><div className="flex items-center gap-2"><div className="text-sm font-semibold text-text-secondary truncate" style={_0x216463.useMemo(() => {
                let _0x4a8833;
                if (_0x901fc7.color) {
                  _0x4a8833 = _0x901fc7.color;
                } else if (_0x901fc7.roles && _0x901fc7.roles.length > 0) {
                  _0x4a8833 = _0x5a3d0f(_0x901fc7.roles);
                }
                if (!_0x4a8833) {
                  return {};
                }
                const _0x52f196 = _0x4a8833.replace("#", "");
                const _0xb4f403 = parseInt(_0x52f196.substring(0, 2), 16) / 255;
                const _0x14f211 = parseInt(_0x52f196.substring(2, 4), 16) / 255;
                const _0x4d9ba8 = parseInt(_0x52f196.substring(4, 6), 16) / 255;
                const _0x1376bf = _0x55d09a => _0x55d09a <= 0.03928 ? _0x55d09a / 12.92 : Math.pow((_0x55d09a + 0.055) / 1.055, 2.4);
                const _0x8e0273 = _0x1376bf(_0xb4f403) * 0.2126 + _0x1376bf(_0x14f211) * 0.7152 + _0x1376bf(_0x4d9ba8) * 0.0722;
                const _0x5dedf3 = _0x5e9483 ? 0.03 : 0.95;
                const _0xc6af29 = (Math.max(_0x8e0273, _0x5dedf3) + 0.05) / (Math.min(_0x8e0273, _0x5dedf3) + 0.05);
                const _0x3cf272 = {
                  color: _0x4a8833
                };
                if (!_0x5e9483 && _0xc6af29 < 3) {
                  const _0x5bffca = _0x8e0273 > 0.4 ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)";
                  _0x3cf272.textShadow = "1.5px 0 0 " + _0x5bffca + ", -1.5px 0 0 " + _0x5bffca + ", 0 1.5px 0 " + _0x5bffca + ", 0 -1.5px 0 " + _0x5bffca;
                }
                return _0x3cf272;
              }, [_0x901fc7.color, _0x901fc7.roles, _0x5e9483])}>{_0x48f63e}</div>{_0x3dcb30 && <_0x11ee99 label="Sunucu Sahibi" side="top"><_0x148bd0 className="size-4 text-yellow-400 fill-yellow-400 shrink-0" /></_0x11ee99>}{_0x901fc7.staff_badge && <_0x11ee99 label={_0x901fc7.staff_badge.name} side="top"><img src={_0x901fc7.staff_badge.icon_url} alt={_0x901fc7.staff_badge.name} className="size-4 shrink-0 object-contain" /></_0x11ee99>}{_0x901fc7.is_bot && <_0x11ee99 label={_0x498638("userDetailsPopover.app")} side="top"><_0x2ae7cf icon="solar:global-bold-duotone" className="size-4 shrink-0 text-emerald-400" /></_0x11ee99>}{_0x901fc7.is_booster && <_0x11ee99 label={<div className="flex flex-col items-center text-center gap-2"><_0x2ae7cf icon="solar:gas-station-bold-duotone" className="size-8 text-accent-primary-text" /><div className="text-xs font-semibold text-text-primary">{_0x498638("userDetailsPopover.serverBooster")}</div>{_0x901fc7.boosted_since && <div className="text-[10px] text-text-tertiary leading-tight">{_0x498638("userDetailsPopover.boosterSince", {
                    date: new Date(_0x901fc7.boosted_since).toLocaleDateString(undefined, {
                      day: "numeric",
                      month: "short",
                      year: "numeric"
                    })
                  })}</div>}</div>} className="max-w-[150px] whitespace-normal" side="top"><_0x2ae7cf icon="solar:gas-station-bold-duotone" className="size-4 shrink-0 text-accent-primary-text" /></_0x11ee99>}{_0x901fc7.is_timed_out && _0x28e29a && <_0x11ee99 label={<div className="space-y-1"><div className="font-semibold text-orange-400">{_0x498638("moderation.timedOut")}</div>{_0x56a60a && <div className="text-xs space-y-1"><div>Kalan süre: <span className="font-medium">{_0x56a60a.timeLeft}</span></div><div>{_0x498638("server.reason")} <span className="font-medium">{_0x56a60a.reason}</span></div><div>Bitiş: <span className="font-medium">{_0x56a60a.until}</span></div></div>}</div>} side="top"><_0x5bc852 className="w-3 h-3 text-orange-400 shrink-0" /></_0x11ee99>}</div>{_0x901fc7.presence?.activities && _0x901fc7.presence.activities.length > 0 && _0x901fc7.presence.activities.find(_0x8ce0db => _0x8ce0db.type === "playing") ? (() => {
              const _0x366317 = _0x901fc7.presence.activities.find(_0x3448fe => _0x3448fe.type === "playing");
              const _0xbe4aeb = _0x498638("member.playing", {
                name: _0x366317.name
              });
              const _0x5f222b = _0xbe4aeb.indexOf(_0x366317.name);
              const _0x30eb71 = _0x5f222b > 0 ? _0xbe4aeb.slice(0, _0x5f222b) : "";
              const _0xed98cc = _0x5f222b >= 0 ? _0xbe4aeb.slice(_0x5f222b + _0x366317.name.length) : "";
              return <div className="flex items-center gap-1 min-w-0 max-w-[140px]"><_0x2ae7cf icon="solar:gamepad-bold" className="size-4 text-green-600 shrink-0" /><span className="text-[11px] whitespace-nowrap truncate">{_0x30eb71 && <span className="text-text-tertiary">{_0x30eb71}</span>}<span className="text-text-secondary font-medium">{_0x366317.name}</span>{_0xed98cc && <span className="text-text-tertiary font-medium">{_0xed98cc}</span>}</span></div>;
            })() : _0x901fc7.custom_status?.text ? <_Component emoji={_0x901fc7.custom_status.emoji} text={_0x901fc7.custom_status.text} /> : null}</div></div></_0x3c2293>{_0x411b6d && <_0x1190c4 className="w-61">{_0x28e29a && <_0x5ea4ab onClick={_0x410a62}><_0x2ae7cf icon="solar:shield-bold-duotone" className="size-4" /><span className="flex-1">{_0x498638("server.memberModeration")}</span></_0x5ea4ab>}{_0x4a05bb && <_0x5ea4ab onClick={() => _0x1b3a89(true)} variant="destructive"><_0x3cb4e2 className="size-4" /><span className="flex-1">{_0x498638("server.adminModeration")}</span></_0x5ea4ab>}{!_0x3dcb30 && _0x28e29a && <_0x2305a3.Fragment>{_0x4431d8 && <_0x5ea4ab onClick={_0x13445a} variant="destructive"><_0x542b2b className="size-4" /><span className="flex-1">{_0x498638("server.banFromServer")}</span></_0x5ea4ab>}{_0x3ea538 && <_0x5ea4ab onClick={_0x2c61e9} variant="destructive"><_0x2c7c9f className="size-4" /><span className="flex-1">{_0x498638("server.kickFromServer")}</span></_0x5ea4ab>}{_0x26b2cc && !_0x901fc7.is_timed_out && <_0x5ea4ab onClick={_0x106c95}><_0x5bc852 className="size-4 text-orange-400" /><span className="flex-1">{_0x498638("server.applyTimeout")}</span></_0x5ea4ab>}{_0x26b2cc && _0x901fc7.is_timed_out && <_0x2305a3.Fragment><_0x5ea4ab onClick={_0x106c95}><_0x5bc852 className="size-4 text-orange-400" /><span className="flex-1">{_0x498638("server.updateTimeout")}</span></_0x5ea4ab><_0x5ea4ab onClick={_0x421b31}><_0x5bc852 className="size-4 text-green-400" /><span className="flex-1">{_0x498638("server.clearTimeout")}</span></_0x5ea4ab></_0x2305a3.Fragment>}</_0x2305a3.Fragment>}{_0x59f3eb && <_0x5ea4ab onClick={_0x1c3132} variant="destructive"><_0x2c7c9f className="size-4" /><span className="flex-1">{_0x498638("server.removeFromGroup")}</span></_0x5ea4ab>}{_0x4784fd && <_0x5ea4ab onClick={_0x49b8aa} variant="destructive"><Y className="size-4" /><span className="flex-1">{_0x498638("server.makeGroupOwner")}</span></_0x5ea4ab>}{(_0x59f3eb || _0x4784fd) && <_0x15ffb7 />}{_0x28e29a && <_0x15ffb7 />}{_0x555c97 && <_0x5ea4ab onClick={() => _0x40cc99("server-profiles", _0x443d41)}><_0x21d7a7 className="size-4" /><span className="flex-1">{_0x498638("server.editServerProfile")}</span></_0x5ea4ab>}{!_0x555c97 && _0x3bc97c && <_0x5ea4ab onClick={() => _0x4b252f(true)}><_0x21d7a7 className="size-4" /><span className="flex-1">{_0x498638("server.editMemberProfile")}</span></_0x5ea4ab>}{_0x1b7882 && <_0x5ea4ab onClick={_0xe58252}><_0x48e7af className="size-4" /><span className="flex-1">{_0x498638("server.copyUserId")}</span></_0x5ea4ab>}</_0x1190c4>}</_0x5d980b><_0x48e762 isOpen={_0x2b421b} onClose={() => _0x480f69(false)} onApply={_0x5b14d6} memberName={_0x48f63e} guildId={_0x443d41} memberId={_0x2db97d} actionType="kick" />{_0x2973cf && <_0x4dd5fa userId={Number(_0x901fc7.user_id ?? _0x901fc7.id)} onClose={() => _0x1b3a89(false)} />}{_0x5a6020 && _0x443d41 && <_Component2 open={_0x5a6020} onOpenChange={_0x4b252f} guildId={_0x443d41} userId={_0x4d6a16} memberName={_0x48f63e} />}{_0x555c97 && _0x901fc7.is_timed_out && _0x56a60a && <div className="fixed top-4 right-4 z-50"><div className="group relative"><div className="w-12 h-12 bg-orange-500/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-orange-400/50 shadow-2xl cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500/30"><_0x4d1609 className="w-6 h-6 text-orange-400" /></div><div className="absolute top-0 right-16 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none group-hover:pointer-events-auto"><div className="bg-surface-raised/95 backdrop-blur-md border border-orange-500/30 rounded-lg p-4 shadow-2xl min-w-[280px]"><div className="flex items-start gap-3"><div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center shrink-0"><_0x4d1609 className="w-4 h-4 text-orange-400" /></div><div className="flex-1 space-y-2"><div className="font-semibold text-orange-400 text-sm">{_0x498638("moderation.youAreTimedOut")}</div><div className="text-xs text-text-secondary space-y-1"><div className="flex items-center gap-2"><_0x5bc852 className="w-3 h-3 text-orange-400" /><span>Kalan süre: <span className="font-medium text-orange-300">{_0x56a60a.timeLeft}</span></span></div><div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-surface-inset" /><span>{_0x498638("server.reason")} <span className="font-medium">{_0x56a60a.reason}</span></span></div><div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-surface-inset" /><span>Bitiş: <span className="font-medium">{_0x56a60a.until}</span></span></div></div></div></div></div></div></div></div>}</_0x2305a3.Fragment>;
}, (_0x5a0389, _0x1c6c9f) => {
  const _0x47af19 = _0x5a0389.isActive !== _0x1c6c9f.isActive;
  const _0x46b685 = _0x5a0389.loadingPresence !== _0x1c6c9f.loadingPresence;
  const _0x3e6f30 = _0x5a0389.isOffline !== _0x1c6c9f.isOffline;
  if (_0x47af19 || _0x46b685 || _0x3e6f30) {
    return false;
  }
  const _0x44ab2a = !te(_0x5a0389.member, _0x1c6c9f.member);
  const _0x1646ec = _0x5a0389.memberTimeouts !== _0x1c6c9f.memberTimeouts;
  const _0x47d407 = _0x5a0389.currentUserId !== _0x1c6c9f.currentUserId;
  return !_0x44ab2a && !_0x1646ec && !_0x47d407;
});
oe.displayName = "MemberItem";
export { ne as E, oe as M };