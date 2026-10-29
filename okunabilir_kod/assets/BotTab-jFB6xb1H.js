import { aC as _0x50f8e9, b as _0x55dfb7, r as _0x323483, P as _0xb6e463, j as _0x45c4ac, B as _0x3fa15f, an as _0x5df0ab, I as _0x21451a, aG as _0x36edd3, aH as _0x28061f, aI as _0x64311c } from "./index-cQfEKR1W.js";
import { I as _0x1b2e8f } from "./input-AMyERYwJ.js";
import { L as _0x465425 } from "./label-ODyS97Ju.js";
import { T as _0x1629d9 } from "./textarea-CIeIrkot.js";
import { C as _0x18ff9b } from "./checkbox-6NFFWv4U.js";
import { A as _0x149215, a as _0xab7a5f, b as _0x404f32 } from "./avatar-C-4BWxT3.js";
import { C as _0x2f590d } from "./ConfirmDialog-B4gIndKy.js";
import { c as _0x3e6588 } from "./clipboard-BQ9qambq.js";
import { U as _0x599975 } from "./UnsavedChangesBar-CFwXhL7X.js";
import { I as _0x5c413c } from "./ImageCropModal-Bz0NeASX.js";
import { k as _0x3c9af2, l as _0x44acdb, m as _0x39b0a2 } from "./developer-DCtAQT29.js";
import { I as _0x2053d1 } from "./image-CYAMq37h.js";
import { U as _0x3301da } from "./index.module-CsHioFCV.js";
import "./alert-dialog-BZuoGg7O.js";
import "./index-yuEHo9bu.js";
import "./index-Oyyh46KT.js";
import "./loader-circle-CTtxa1g9.js";
import "./dialog-BMMpM7PR.js";
import "./drawer-X7YyCqpZ.js";
const S = _0x129f32 => {
  const _0x290651 = document.createElement("textarea");
  _0x290651.innerHTML = _0x129f32;
  return _0x290651.value;
};
const R = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];
const w = ["MANAGE_GROUP", "CHANGE_GROUP_ICON", "CHANGE_DM_SETTINGS", "REQUEST_TO_SPEAK", "SHARE_CAMERA", "CONTROL_QUALITY"];
const _Component = _0x323483.memo(function () {
  const {
    t: _0x22954c
  } = _0x55dfb7();
  const [_0x358a22, _0x1fd049] = _0x323483.useState({});
  const [_0x24635a, _0x1f7235] = _0x323483.useState(null);
  const _0x376276 = _0x323483.useCallback(_0x4d4276 => {
    _0x1fd049(_0x323eea => ({
      ..._0x323eea,
      [_0x4d4276]: !_0x323eea[_0x4d4276]
    }));
  }, []);
  const _0x586e80 = _0x323483.useMemo(() => {
    let _0x2d528f = BigInt(0);
    Object.entries(_0x358a22).forEach(([_0x4b3adb, _0x5a79e0]) => {
      if (_0x5a79e0 && _0x36edd3[_0x4b3adb]) {
        _0x2d528f |= BigInt(_0x36edd3[_0x4b3adb]);
      }
    });
    return _0x2d528f.toString();
  }, [_0x358a22]);
  const _0x31ca1e = _0x323483.useCallback(() => {
    navigator.clipboard.writeText(_0x586e80);
    _0x1f7235("permission");
    setTimeout(() => _0x1f7235(null), 2000);
  }, [_0x586e80]);
  const _0x4f7d61 = _0x323483.useMemo(() => Object.values(_0x358a22).filter(Boolean).length, [_0x358a22]);
  const _0x36669d = _0x358a22.ADMINISTRATOR;
  return <section><div className="mb-4"><div className="text-sm font-semibold text-text-secondary flex items-center gap-2"><_0x21451a icon="solar:calculator-bold-duotone" className="size-4" />{_0x22954c("developer.botTab.permissionCalc")}</div><p className="text-xs text-text-muted mt-0.5">{_0x22954c("developer.botTab.permissionCalcDesc")}</p></div><div className="rounded-xl bg-surface-raised/50 border border-border-default p-4 mb-4"><div className="flex items-center gap-3"><div className="flex-1 min-w-0"><_0x465425 className="text-[10px] text-text-tertiary uppercase tracking-wider mb-1 block">{_0x22954c("developer.botTab.calculatedValue")}</_0x465425><_0x1b2e8f value={_0x586e80} readOnly={true} className="font-mono bg-surface-overlay/50 border-border-default text-accent-primary-text h-9 text-sm" /></div><_0x3fa15f variant="outline" size="icon" className="shrink-0 mt-5" onClick={_0x31ca1e}>{_0x24635a === "permission" ? <_0x5df0ab className="size-4 text-green-400" /> : <_0x21451a icon="solar:copy-bold-duotone" className="size-4" />}</_0x3fa15f></div><div className="flex items-center justify-between mt-2"><p className="text-[10px] text-text-muted">{_0x22954c("developer.botTab.selectedCount")} <span className="text-accent-primary-text font-medium">{_0x4f7d61}</span></p><_0x3fa15f variant="ghost" size="sm" className="h-6 text-[10px] text-red-400 hover:text-red-300 px-2" onClick={() => _0x1fd049({})}>{_0x22954c("developer.botTab.clearAll")}</_0x3fa15f></div></div><div className="space-y-2">{Object.entries(_0x28061f).filter(([_0x388bb9]) => _0x388bb9 !== "all" && _0x388bb9 !== "groups").map(([_0x272cc7, _0x16efb4]) => {
        const _0x392a73 = _0x16efb4.permissions.filter(_0x13be30 => !w.includes(_0x13be30));
        if (_0x392a73.length === 0) {
          return null;
        }
        const _0x3f5bb4 = _0x392a73.filter(_0xf13f76 => _0x358a22[_0xf13f76]).length;
        return <div className="rounded-xl border border-border-default/50 bg-surface-raised/30 overflow-hidden" key={_0x272cc7}><div className="flex items-center justify-between px-4 py-2.5"><div className="flex items-center gap-2"><span className="text-xs font-medium text-text-secondary">{_0x22954c("roles.cat" + (_0x272cc7.charAt(0).toUpperCase() + _0x272cc7.slice(1)), _0x16efb4.label)}</span>{_0x3f5bb4 > 0 && <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-accent-primary/10 text-accent-primary-text font-medium">{_0x3f5bb4}</span>}</div><div className="flex gap-3"><button onClick={() => {
                const _0x3c239b = {
                  ..._0x358a22
                };
                _0x392a73.forEach(_0x11cfc3 => {
                  _0x3c239b[_0x11cfc3] = true;
                });
                _0x1fd049(_0x3c239b);
              }} disabled={_0x36669d} className={"text-[10px] " + (_0x36669d ? "text-text-muted cursor-not-allowed" : "text-text-muted hover:text-accent-primary-text")}>{_0x22954c("developer.botTab.selectAll")}</button><button onClick={() => {
                const _0x38fef1 = {
                  ..._0x358a22
                };
                _0x392a73.forEach(_0x4a1676 => {
                  _0x38fef1[_0x4a1676] = false;
                });
                _0x1fd049(_0x38fef1);
              }} disabled={_0x36669d} className={"text-[10px] " + (_0x36669d ? "text-text-muted cursor-not-allowed" : "text-text-muted hover:text-red-400")}>{_0x22954c("developer.botTab.clear")}</button></div></div><div className="grid grid-cols-2 gap-x-2 gap-y-1 px-4 pb-3">{_0x392a73.map(_0x192e48 => {
              const _0x50cd6c = _0x36669d && _0x192e48 !== "ADMINISTRATOR";
              const _0x19f0e9 = !!_0x50cd6c || _0x358a22[_0x192e48] || false;
              return <label className={"flex items-center gap-2 px-2 py-1.5 rounded-md " + (_0x50cd6c ? "text-text-muted opacity-40 cursor-not-allowed" : _0x19f0e9 ? "text-accent-primary-text cursor-pointer" : "text-text-tertiary hover:text-text-secondary cursor-pointer")} key={_0x192e48}><_0x18ff9b checked={_0x19f0e9} onCheckedChange={() => !_0x50cd6c && _0x376276(_0x192e48)} disabled={_0x50cd6c} className="size-3.5" /><span className="text-[11px] leading-tight">{_0x22954c("roles.permLabel." + _0x192e48, _0x64311c[_0x192e48])}</span></label>;
            })}</div></div>;
      })}</div></section>;
});
const L = [{
  id: "guild_members",
  labelKey: "developer.botTab.guildMembers",
  descKey: "developer.botTab.guildMembersDesc"
}, {
  id: "guild_presences",
  labelKey: "developer.botTab.guildPresences",
  descKey: "developer.botTab.guildPresencesDesc"
}, {
  id: "message_content",
  labelKey: "developer.botTab.messageContent",
  descKey: "developer.botTab.messageContentDesc"
}];
function U() {
  const {
    application: _0xdb3295
  } = _0x50f8e9();
  const {
    t: _0xe0d08e
  } = _0x55dfb7();
  const _0x166e5d = _0x323483.useRef(null);
  const _0x30b151 = _0x323483.useRef(null);
  const [_0x2b44f3, _0x1f5a14] = _0x323483.useState(null);
  const [_0x5d5555, _0x438f7f] = _0x323483.useState(true);
  const [_0x4e6aaf, _0x1b4997] = _0x323483.useState(null);
  const [_0x11dcf7, _0x499f37] = _0x323483.useState("");
  const [_0x4a1fab, _0xfd8a45] = _0x323483.useState("");
  const [_0x3df2a6, _0x19123b] = _0x323483.useState("");
  const [_0x347d32, _0xbac1d5] = _0x323483.useState(null);
  const [_0x46ac3a, _0x57b6e5] = _0x323483.useState(null);
  const [_0x26aa8a, _0x49292a] = _0x323483.useState(null);
  const [_0x2c9214, _0x4da4d5] = _0x323483.useState(null);
  const [_0x15e6e3, _0x2aa0a0] = _0x323483.useState(false);
  const [_0x36f728, _0x2f8182] = _0x323483.useState(false);
  const [_0xb0a11, _0x541835] = _0x323483.useState(false);
  const [_0x5c9e65, _0x132b11] = _0x323483.useState(false);
  const [_0x16ed39, _0x48c8a4] = _0x323483.useState({
    guild_members: false,
    guild_presences: false,
    message_content: false
  });
  const [_0x2f60be, _0x4bf685] = _0x323483.useState(null);
  const [_0x734470, _0x31ef2f] = _0x323483.useState(false);
  const [_0x60dc31, _0x114125] = _0x323483.useState(false);
  const [_0x1461d4, _0x5f3dce] = _0x323483.useState(false);
  const [_0x5369a2, _0x65ac1c] = _0x323483.useState(false);
  const [_0x488797, _0x581971] = _0x323483.useState(null);
  const [_0x1cf3e3, _0xe8b003] = _0x323483.useState(false);
  const [_0x497d61, _0x45ae50] = _0x323483.useState(null);
  const [_0x4b6002, _0x17f9f5] = _0x323483.useState("avatar");
  const _0x587134 = _0x323483.useCallback(async () => {
    if (_0xdb3295?.id) {
      try {
        _0x438f7f(true);
        _0x1b4997(null);
        const _0x56bfbb = await _0x3c9af2(_0xdb3295.id);
        _0x1f5a14(_0x56bfbb);
        _0x499f37(S(_0x56bfbb.bot_username || ""));
        _0xfd8a45(S(_0x56bfbb.bot_display_name || ""));
        _0x19123b(S(_0x56bfbb.bot_bio || ""));
        _0x541835(_0x56bfbb.bot_public);
        _0x132b11(_0x56bfbb.bot_require_code_grant);
        _0x48c8a4(_0x56bfbb.privileged_intents);
        _0xbac1d5(null);
        _0x57b6e5(null);
        _0x49292a(null);
        _0x4da4d5(null);
        _0x2aa0a0(false);
        _0x2f8182(false);
      } catch (_0x189981) {
        const _0xf26ca6 = _0x189981.response?.data?.message || _0x189981.response?.data?.error || _0x189981.message;
        _0x1b4997(_0xf26ca6);
      } finally {
        _0x438f7f(false);
      }
    }
  }, [_0xdb3295?.id]);
  _0x323483.useEffect(() => {
    _0x587134();
  }, [_0x587134]);
  const _0x33faf3 = _0x323483.useMemo(() => _0x15e6e3 ? null : _0x46ac3a || _0x2b44f3?.bot_avatar_url || null, [_0x15e6e3, _0x46ac3a, _0x2b44f3?.bot_avatar_url]);
  const _0x417154 = _0x323483.useMemo(() => _0x36f728 ? null : _0x2c9214 || _0x2b44f3?.bot_banner_url || null, [_0x36f728, _0x2c9214, _0x2b44f3?.bot_banner_url]);
  const _0x412193 = _0x323483.useMemo(() => !!_0x2b44f3 && (_0x11dcf7 !== (_0x2b44f3.bot_username || "") || _0x4a1fab !== (_0x2b44f3.bot_display_name || "") || _0x3df2a6 !== (_0x2b44f3.bot_bio || "") || _0xb0a11 !== _0x2b44f3.bot_public || _0x5c9e65 !== _0x2b44f3.bot_require_code_grant || JSON.stringify(_0x16ed39) !== JSON.stringify(_0x2b44f3.privileged_intents) || _0x347d32 !== null || _0x26aa8a !== null || _0x15e6e3 || _0x36f728), [_0x11dcf7, _0x4a1fab, _0x3df2a6, _0xb0a11, _0x5c9e65, _0x16ed39, _0x2b44f3, _0x347d32, _0x26aa8a, _0x15e6e3, _0x36f728]);
  const _0x5f483a = _0x323483.useCallback(async (_0x524811, _0x1a6cc9) => {
    await _0x3e6588(_0x524811);
    _0x581971(_0x1a6cc9);
    _0xb6e463.success(_0xe0d08e("developer.botTab.copied"));
    setTimeout(() => _0x581971(null), 2000);
  }, []);
  const _0x3629eb = _0x323483.useCallback((_0xaf2c79, _0x585c63) => {
    const _0x433abb = _0xaf2c79.target.files?.[0];
    if (!_0x433abb) {
      return;
    }
    if (!R.includes(_0x433abb.type)) {
      _0xb6e463.error(_0xe0d08e("developer.botTab.unsupportedFormat"));
      return;
    }
    if (_0x433abb.size > 10485760) {
      _0xb6e463.error(_0xe0d08e("developer.botTab.fileTooLarge"));
      return;
    }
    const _0x23a2f3 = new FileReader();
    _0x23a2f3.onload = () => {
      _0x45ae50(_0x23a2f3.result);
      _0x17f9f5(_0x585c63);
      _0xe8b003(true);
    };
    _0x23a2f3.readAsDataURL(_0x433abb);
    _0xaf2c79.target.value = "";
  }, []);
  const _0x319447 = _0x323483.useCallback(_0x585f31 => {
    const _0x168410 = URL.createObjectURL(_0x585f31);
    if (_0x4b6002 === "avatar") {
      if (_0x46ac3a) {
        URL.revokeObjectURL(_0x46ac3a);
      }
      _0xbac1d5(_0x585f31);
      _0x57b6e5(_0x168410);
      _0x2aa0a0(false);
    } else {
      if (_0x2c9214) {
        URL.revokeObjectURL(_0x2c9214);
      }
      _0x49292a(_0x585f31);
      _0x4da4d5(_0x168410);
      _0x2f8182(false);
    }
    _0xe8b003(false);
    _0x45ae50(null);
  }, [_0x4b6002, _0x46ac3a, _0x2c9214]);
  const _0x50b981 = _0x323483.useCallback(_0x13e771 => {
    if (_0x13e771 === "avatar") {
      if (_0x46ac3a) {
        URL.revokeObjectURL(_0x46ac3a);
      }
      _0xbac1d5(null);
      _0x57b6e5(null);
      _0x2aa0a0(true);
    } else {
      if (_0x2c9214) {
        URL.revokeObjectURL(_0x2c9214);
      }
      _0x49292a(null);
      _0x4da4d5(null);
      _0x2f8182(true);
    }
  }, [_0x46ac3a, _0x2c9214]);
  const _0xd64463 = _0x323483.useCallback(_0x4dc743 => {
    _0x48c8a4(_0x337e80 => ({
      ..._0x337e80,
      [_0x4dc743]: !_0x337e80[_0x4dc743]
    }));
  }, []);
  const _0x42c043 = _0x323483.useCallback(() => {
    if (_0x2b44f3) {
      _0x499f37(S(_0x2b44f3.bot_username || ""));
      _0xfd8a45(S(_0x2b44f3.bot_display_name || ""));
      _0x19123b(S(_0x2b44f3.bot_bio || ""));
      _0x541835(_0x2b44f3.bot_public);
      _0x132b11(_0x2b44f3.bot_require_code_grant);
      _0x48c8a4(_0x2b44f3.privileged_intents);
      if (_0x46ac3a) {
        URL.revokeObjectURL(_0x46ac3a);
      }
      if (_0x2c9214) {
        URL.revokeObjectURL(_0x2c9214);
      }
      _0xbac1d5(null);
      _0x57b6e5(null);
      _0x49292a(null);
      _0x4da4d5(null);
      _0x2aa0a0(false);
      _0x2f8182(false);
    }
  }, [_0x2b44f3, _0x46ac3a, _0x2c9214]);
  const _0x20013b = _0x323483.useCallback(async () => {
    if (_0xdb3295?.id && _0x2b44f3) {
      _0x65ac1c(true);
      try {
        const _0x35058e = {};
        if (_0x11dcf7 !== (_0x2b44f3.bot_username || "")) {
          _0x35058e.bot_username = _0x11dcf7.trim();
        }
        if (_0x4a1fab !== (_0x2b44f3.bot_display_name || "")) {
          _0x35058e.bot_display_name = _0x4a1fab.trim() || null;
        }
        if (_0x3df2a6 !== (_0x2b44f3.bot_bio || "")) {
          _0x35058e.bot_bio = _0x3df2a6.trim() || null;
        }
        if (_0xb0a11 !== _0x2b44f3.bot_public) {
          _0x35058e.bot_public = _0xb0a11;
        }
        if (_0x5c9e65 !== _0x2b44f3.bot_require_code_grant) {
          _0x35058e.bot_require_code_grant = _0x5c9e65;
        }
        if (JSON.stringify(_0x16ed39) !== JSON.stringify(_0x2b44f3.privileged_intents)) {
          _0x35058e.privileged_intents = _0x16ed39;
        }
        if (_0x15e6e3) {
          _0x35058e.delete_avatar = true;
        }
        if (_0x36f728) {
          _0x35058e.delete_banner = true;
        }
        const _0x4b2e31 = await _0x44acdb(_0xdb3295.id, _0x35058e, _0x347d32 || undefined, _0x26aa8a || undefined);
        _0xb6e463.success(_0x4b2e31.message);
        if (_0x4b2e31.settings) {
          _0x1f5a14(_0x4fd8c6 => _0x4fd8c6 ? {
            ..._0x4fd8c6,
            ..._0x4b2e31.settings
          } : _0x4b2e31.settings);
        }
        if (_0x46ac3a) {
          URL.revokeObjectURL(_0x46ac3a);
        }
        if (_0x2c9214) {
          URL.revokeObjectURL(_0x2c9214);
        }
        _0xbac1d5(null);
        _0x57b6e5(null);
        _0x49292a(null);
        _0x4da4d5(null);
        _0x2aa0a0(false);
        _0x2f8182(false);
      } catch {} finally {
        _0x65ac1c(false);
      }
    }
  }, [_0x11dcf7, _0x4a1fab, _0x3df2a6, _0xb0a11, _0x5c9e65, _0x16ed39, _0x2b44f3, _0xdb3295, _0x347d32, _0x26aa8a, _0x46ac3a, _0x2c9214, _0x15e6e3, _0x36f728]);
  const _0x1b0ad7 = _0x323483.useCallback(async () => {
    if (_0xdb3295?.id) {
      _0x5f3dce(true);
      try {
        const _0x30b365 = await _0x39b0a2(_0xdb3295.id);
        _0x4bf685(_0x30b365.token);
        _0x31ef2f(true);
        _0x114125(false);
      } catch {} finally {
        _0x5f3dce(false);
      }
    }
  }, [_0xdb3295?.id]);
  if (_0xdb3295) {
    if (_0x5d5555) {
      return <div className="flex items-center justify-center py-20"><div className="size-8 animate-spin rounded-full border-2 border-border-default border-t-accent-primary" /></div>;
    } else if (_0x4e6aaf) {
      return <div className="flex flex-col items-center justify-center py-20 text-center"><p className="text-red-400 mb-4">{_0x4e6aaf}</p><_0x3fa15f variant="outline" onClick={_0x587134}>{_0xe0d08e("developer.botTab.retry")}</_0x3fa15f></div>;
    } else if (_0x2b44f3) {
      return <div className="space-y-8 pb-24"><div><h1 className="text-2xl font-bold text-text-primary">{_0xe0d08e("developer.botTab.title")}</h1><p className="text-sm text-text-tertiary mt-1">{_0xe0d08e("developer.botTab.subtitle")}</p></div><section><div className="mb-4"><div className="text-sm font-semibold text-text-secondary">{_0xe0d08e("developer.botTab.profile")}</div><p className="text-xs text-text-muted mt-0.5">{_0xe0d08e("developer.botTab.profileDesc")}</p></div><div className="rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden divide-y divide-border-default"><div className="px-4 py-4"><div className="flex items-center justify-between gap-4"><div className="flex items-center gap-4"><div className="relative"><_0x149215 className="size-20 rounded-xl shrink-0">{_0x33faf3 ? <_0xab7a5f src={_0x33faf3} alt={_0x11dcf7} className="object-cover" /> : <_0x404f32 className="rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-primary/5 text-accent-primary-text text-2xl font-bold">{_0x11dcf7?.charAt(0)?.toUpperCase() || "B"}</_0x404f32>}</_0x149215>{(_0x347d32 || _0x15e6e3) && <div className="absolute -top-1 -right-1 size-5 rounded-full bg-accent-primary flex items-center justify-center"><_0x5df0ab className="size-3 text-black" /></div>}</div><div className="min-w-0"><div className="text-sm font-medium text-text-secondary">{_0xe0d08e("developer.botTab.botAvatar")}</div><p className="text-xs text-text-tertiary mt-0.5">JPG, PNG, GIF, WebP • Max 10MB</p>{_0x15e6e3 && _0x2b44f3?.bot_avatar_url && <p className="text-xs text-amber-400 mt-1 flex items-center gap-1"><_0x2053d1 className="size-3" />{_0xe0d08e("developer.botTab.avatarRemoved")}</p>}</div></div><div className="flex items-center gap-2 shrink-0"><input ref={_0x166e5d} type="file" accept={R.join(",")} onChange={_0x115e27 => _0x3629eb(_0x115e27, "avatar")} className="hidden" /><_0x3fa15f variant="outline" size="sm" className="h-8 text-xs" onClick={() => _0x166e5d.current?.click()}><_0x3301da className="size-3 mr-1.5" />{_0xe0d08e(_0x33faf3 ? "developer.botTab.change" : "developer.botTab.upload")}</_0x3fa15f>{_0x33faf3 && !_0x15e6e3 && <_0x3fa15f variant="outline" size="sm" className="h-8 text-xs text-red-400 hover:text-red-300 hover:border-red-500/50" onClick={() => _0x50b981("avatar")}><_0x21451a icon="solar:trash-bin-trash-bold-duotone" className="size-3 mr-1.5" />{_0xe0d08e("developer.botTab.remove")}</_0x3fa15f>}{(_0x347d32 || _0x15e6e3) && <_0x3fa15f variant="ghost" size="sm" className="h-8 text-xs text-text-tertiary" onClick={() => {
                    if (_0x46ac3a) {
                      URL.revokeObjectURL(_0x46ac3a);
                    }
                    _0xbac1d5(null);
                    _0x57b6e5(null);
                    _0x2aa0a0(false);
                  }}>{_0xe0d08e("developer.botTab.cancel")}</_0x3fa15f>}</div></div></div><div className="px-4 py-4"><div className="flex items-center justify-between gap-4"><div className="flex items-center gap-4"><div className="relative"><div className="w-36 h-20 rounded-lg overflow-hidden shrink-0 bg-gradient-to-br from-slate-700 to-slate-800">{_0x417154 && <img src={_0x417154} alt="Banner" className="w-full h-full object-cover" />}</div>{(_0x26aa8a || _0x36f728) && <div className="absolute -top-1 -right-1 size-5 rounded-full bg-accent-primary flex items-center justify-center"><_0x5df0ab className="size-3 text-black" /></div>}</div><div className="min-w-0"><div className="text-sm font-medium text-text-secondary">{_0xe0d08e("developer.botTab.botBanner")}</div><p className="text-xs text-text-tertiary mt-0.5">JPG, PNG, GIF, WebP • Max 10MB</p>{_0x36f728 && _0x2b44f3?.bot_banner_url && <p className="text-xs text-amber-400 mt-1 flex items-center gap-1"><_0x2053d1 className="size-3" />{_0xe0d08e("developer.botTab.bannerRemoved")}</p>}</div></div><div className="flex items-center gap-2 shrink-0"><input ref={_0x30b151} type="file" accept={R.join(",")} onChange={_0x133c48 => _0x3629eb(_0x133c48, "banner")} className="hidden" /><_0x3fa15f variant="outline" size="sm" className="h-8 text-xs" onClick={() => _0x30b151.current?.click()}><_0x3301da className="size-3 mr-1.5" />{_0xe0d08e(_0x417154 ? "developer.botTab.change" : "developer.botTab.upload")}</_0x3fa15f>{_0x417154 && !_0x36f728 && <_0x3fa15f variant="outline" size="sm" className="h-8 text-xs text-red-400 hover:text-red-300 hover:border-red-500/50" onClick={() => _0x50b981("banner")}><_0x21451a icon="solar:trash-bin-trash-bold-duotone" className="size-3 mr-1.5" />{_0xe0d08e("developer.botTab.remove")}</_0x3fa15f>}{(_0x26aa8a || _0x36f728) && <_0x3fa15f variant="ghost" size="sm" className="h-8 text-xs text-text-tertiary" onClick={() => {
                    if (_0x2c9214) {
                      URL.revokeObjectURL(_0x2c9214);
                    }
                    _0x49292a(null);
                    _0x4da4d5(null);
                    _0x2f8182(false);
                  }}>{_0xe0d08e("developer.botTab.cancel")}</_0x3fa15f>}</div></div></div><div className="px-4 py-4"><_0x465425 htmlFor="bot-username" className="text-xs text-text-tertiary mb-2 block">{_0xe0d08e("developer.botTab.username")}</_0x465425><_0x1b2e8f id="bot-username" value={_0x11dcf7} onChange={_0x90419d => {
                const _0x434009 = _0x90419d.target.value;
                if (new TextEncoder().encode(_0x434009).length <= 120) {
                  _0x499f37(_0x434009);
                }
              }} maxLength={30} className="bg-surface-overlay/50 border-border-default" placeholder="bot_username" /><p className="text-xs text-text-muted mt-1">{_0xe0d08e("developer.botTab.usernameHint")}</p></div><div className="px-4 py-4"><_0x465425 htmlFor="bot-display-name" className="text-xs text-text-tertiary mb-2 block">{_0xe0d08e("developer.botTab.displayName")}</_0x465425><_0x1b2e8f id="bot-display-name" value={_0x4a1fab} onChange={_0x5bd1ed => {
                const _0x31c34b = _0x5bd1ed.target.value;
                if (new TextEncoder().encode(_0x31c34b).length <= 200) {
                  _0xfd8a45(_0x31c34b);
                }
              }} maxLength={50} className="bg-surface-overlay/50 border-border-default" placeholder={_0xe0d08e("developer.botTab.displayNamePlaceholder")} /><p className="text-xs text-text-muted mt-1">{_0xe0d08e("developer.botTab.displayNameHint")}</p></div><div className="px-4 py-4"><_0x465425 htmlFor="bot-bio" className="text-xs text-text-tertiary mb-2 block">{_0xe0d08e("developer.botTab.bio")}</_0x465425><_0x1629d9 id="bot-bio" value={_0x3df2a6} onChange={_0x249162 => {
                const _0x1ce519 = _0x249162.target.value;
                if (new TextEncoder().encode(_0x1ce519).length <= 2000) {
                  _0x19123b(_0x1ce519);
                }
              }} maxLength={500} className="bg-surface-overlay/50 border-border-default resize-none" placeholder={_0xe0d08e("developer.botTab.bioPlaceholder")} rows={3} /><div className="mt-1 text-xs text-text-muted">{_0xe0d08e("developer.botTab.charCount", {
                  count: _0x3df2a6.length,
                  max: 500
                })}</div></div></div></section><section><div className="mb-4"><div className="text-sm font-semibold text-text-secondary">{_0xe0d08e("developer.botTab.tokenManagement")}</div><p className="text-xs text-text-muted mt-0.5">{_0xe0d08e("developer.botTab.tokenManagementDesc")}</p></div><div className="rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden divide-y divide-border-default"><div className="px-4 py-4"><_0x465425 className="text-xs text-text-tertiary mb-2 block">{_0xe0d08e("developer.botTab.botToken")}</_0x465425><div className="flex gap-2 mb-2"><_0x1b2e8f value={_0x2f60be && _0x734470 ? _0x2f60be : "••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••"} readOnly={true} className="font-mono bg-surface-overlay/50 border-border-default flex-1" />{_0x2f60be && <_0x3fa15f variant="outline" size="icon" onClick={() => _0x31ef2f(!_0x734470)}>{_0x734470 ? <_0x21451a icon="solar:eye-closed-bold-duotone" className="size-4" /> : <_0x21451a icon="solar:eye-bold-duotone" className="size-4" />}</_0x3fa15f>}{_0x2f60be && _0x734470 && <_0x3fa15f variant="outline" size="icon" onClick={() => _0x5f483a(_0x2f60be, "token")}>{_0x488797 === "token" ? <_0x5df0ab className="size-4 text-green-400" /> : <_0x21451a icon="solar:copy-bold-duotone" className="size-4" />}</_0x3fa15f>}</div><div className="flex items-center justify-between"><p className="text-xs text-text-muted">{_0xe0d08e(_0x2f60be ? "developer.botTab.tokenSaveHint" : "developer.botTab.tokenHidden")}</p><_0x3fa15f variant="outline" size="sm" className="h-8 text-xs" onClick={() => _0x114125(true)}><_0x21451a icon="solar:refresh-bold-duotone" className="size-3 mr-1.5" />{_0xe0d08e("developer.botTab.resetToken")}</_0x3fa15f></div></div></div></section><section><div className="mb-4"><div className="text-sm font-semibold text-text-secondary">{_0xe0d08e("developer.botTab.behavior")}</div><p className="text-xs text-text-muted mt-0.5">{_0xe0d08e("developer.botTab.behaviorDesc")}</p></div><div className="rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden divide-y divide-border-default"><div className="px-4 py-4"><label className="flex items-center gap-3 cursor-pointer"><_0x18ff9b checked={_0xb0a11} onCheckedChange={_0x3c0d07 => _0x541835(!!_0x3c0d07)} /><div className="min-w-0 flex-1"><div className="text-sm font-medium text-text-secondary">{_0xe0d08e("developer.botTab.publicBot")}</div><p className="text-xs text-text-tertiary mt-0.5">{_0xe0d08e("developer.botTab.publicBotDesc")}</p></div></label></div><div className="px-4 py-4"><label className="flex items-center gap-3 cursor-pointer"><_0x18ff9b checked={_0x5c9e65} onCheckedChange={_0x1d9fee => _0x132b11(!!_0x1d9fee)} /><div className="min-w-0 flex-1"><div className="text-sm font-medium text-text-secondary">{_0xe0d08e("developer.botTab.requireCodeGrant")}</div><p className="text-xs text-text-tertiary mt-0.5">{_0xe0d08e("developer.botTab.requireCodeGrantDesc")}</p></div></label></div></div></section><section><div className="mb-4"><div className="text-sm font-semibold text-text-secondary">{_0xe0d08e("developer.botTab.privilegedIntents")}</div><p className="text-xs text-text-muted mt-0.5">{_0xe0d08e("developer.botTab.privilegedIntentsDesc")}</p></div><div className="rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden divide-y divide-border-default">{L.map(_0xaafef0 => <div className="px-4 py-4" key={_0xaafef0.id}><label className="flex items-center gap-3 cursor-pointer"><_0x18ff9b checked={_0x16ed39[_0xaafef0.id] || false} onCheckedChange={() => _0xd64463(_0xaafef0.id)} /><div className="min-w-0 flex-1"><div className="text-sm font-medium text-text-secondary">{_0xe0d08e(_0xaafef0.labelKey)}</div><p className="text-xs text-text-tertiary mt-0.5">{_0xe0d08e(_0xaafef0.descKey)}</p></div></label></div>)}</div></section><_Component /><_0x2f590d open={_0x60dc31} onOpenChange={_0x114125} onConfirm={_0x1b0ad7} isLoading={_0x1461d4} variant="danger" icon={<_0x21451a icon="solar:key-bold-duotone" className="size-5 text-red-400" />} title={_0xe0d08e("developer.botTab.resetTokenTitle")} description={_0xe0d08e("developer.botTab.resetTokenDesc")} confirmText={_0xe0d08e(_0x1461d4 ? "developer.botTab.resetting" : "developer.botTab.resetConfirm")} cancelText={_0xe0d08e("developer.botTab.resetTokenCancel")} /><_0x599975 hasChanges={_0x412193} isSaving={_0x5369a2} onSave={_0x20013b} onReset={_0x42c043} /><_0x5c413c isOpen={_0x1cf3e3} onClose={() => {
          _0xe8b003(false);
          _0x45ae50(null);
        }} imageSrc={_0x497d61} aspect={_0x4b6002 === "avatar" ? 1 : 16 / 9} onCropComplete={_0x319447} imageName={_0x4b6002 === "avatar" ? "bot-avatar.png" : "bot-banner.png"} /></div>;
    } else {
      return <div className="text-center py-10 text-text-tertiary">{_0xe0d08e("developer.botTab.noSettings")}</div>;
    }
  } else {
    return <div className="flex items-center justify-center py-20"><div className="size-8 animate-spin rounded-full border-2 border-border-default border-t-accent-primary" /></div>;
  }
}
export { U as default };