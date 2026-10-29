import { r as _0x2e9c03, f as _0x16b383, b as _0x59fbd5, a_ as _0x553645, aG as _0x107fb4, P as _0x7a81ee, eJ as _0x5e7751, j as _0x3ac2cc, I as _0x22daad, B as _0x2779e0, eK as _0x317c34, dQ as _0xd28f68 } from "./index-cQfEKR1W.js";
import { I as _0x5198d9 } from "./input-AMyERYwJ.js";
import { L as _0x4bf332 } from "./label-ODyS97Ju.js";
import { S as _0x450d98 } from "./separator-Ba6vNTx4.js";
import { C as _0x19effb } from "./ConfirmDialog-B4gIndKy.js";
import { S as _0x493c04, a as _0x3b08fb, b as _0x29940f, c as _0xcd87a2, d as _0x6b3ea3 } from "./select-DQjjzSZW.js";
import { I as _0x2e094c } from "./ImageCropModal-Bz0NeASX.js";
import { A as _0x24ac98, a as _0x1d4603, b as _0x3b252d } from "./avatar-C-4BWxT3.js";
import { af as _0x4c0bcc } from "./AppLayout-BEBJqe9_.js";
import { L as _0x19da08 } from "./loader-circle-CTtxa1g9.js";
import { C as _0x59f379 } from "./camera-Tq38xvm2.js";
import { I as _0x10832f } from "./image-up-5-QJy6FJ.js";
import "./alert-dialog-BZuoGg7O.js";
import "./index-yuEHo9bu.js";
import "./index-Oyyh46KT.js";
import "./dialog-BMMpM7PR.js";
import "./drawer-X7YyCqpZ.js";
import "./index.module-CsHioFCV.js";
import "./soundboardFx-C2LP-Hjs.js";
import "./index-BUijt7wr.js";
import "./tr-D975n4_R.js";
import "./arrow-left-B3FhifN2.js";
import "./arrow-right-DvlsXLCB.js";
import "./switch-lfnbGePn.js";
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
import "./video-AtsAgCNJ.js";
import "./plus-B7c2Px8R.js";
import "./channelNotificationStore-FXjXBmS_.js";
const z = 500;
const L = _0x2e9c03.forwardRef(({
  userId: _0x57e5ca,
  onDirtyChange: _0x441123,
  initialGuildId: _0xbd42fd
}, _0x5384c4) => {
  const {
    user: _0xdbd8a1
  } = _0x16b383();
  const {
    t: _0xda61c4
  } = _0x59fbd5();
  const _0x551395 = _0x553645(_0x159ca2 => _0x159ca2.servers);
  const _0x5ad400 = _0x553645(_0x1ba7b9 => _0x1ba7b9.loadServers);
  const [_0x5d79eb, _0x580079] = _0x2e9c03.useState("");
  const _0x550be8 = _0x2e9c03.useMemo(() => _0x551395.filter(_0x3f9251 => {
    if (_0x3f9251.is_owner) {
      return true;
    }
    const _0x5d8d58 = BigInt(_0x3f9251.permissions ?? 0);
    return !!(_0x5d8d58 & BigInt(_0x107fb4.ADMINISTRATOR)) || !!(_0x5d8d58 & BigInt(_0x107fb4.CHANGE_SERVER_PROFILE)) || !!(_0x5d8d58 & BigInt(_0x107fb4.MANAGE_NICKNAMES));
  }), [_0x551395]);
  const [_0x416713, _0x1b1744] = _0x2e9c03.useState(false);
  const [_0x56b473, _0x592eac] = _0x2e9c03.useState({
    nickname: "",
    avatar_url: "",
    banner_url: "",
    bio: ""
  });
  const [_0x31580f, _0x4db67e] = _0x2e9c03.useState({
    nickname: "",
    avatar_url: "",
    banner_url: "",
    bio: ""
  });
  const [_0x138585, _0x51ede2] = _0x2e9c03.useState(null);
  const [_0x1f86b7, _0xc03d6c] = _0x2e9c03.useState(null);
  const [_0x20a248, _0x5eca0] = _0x2e9c03.useState(false);
  const [_0x12a20e, _0x43de24] = _0x2e9c03.useState(false);
  const _0x30e87a = _0x2e9c03.useRef(null);
  const _0x5615ee = _0x2e9c03.useRef(null);
  const [_0x3d8957, _0x30fdc5] = _0x2e9c03.useState({
    isOpen: false,
    imageSrc: null,
    aspect: 1,
    onComplete: () => {},
    imageName: undefined
  });
  const [_0x9ad201, _0xfd8cea] = _0x2e9c03.useState(false);
  const [_0x414221, _0x4f3ee5] = _0x2e9c03.useState(false);
  _0x2e9c03.useEffect(() => {
    _0x5ad400();
  }, [_0x5ad400]);
  _0x2e9c03.useEffect(() => {
    if (_0xbd42fd && _0x550be8.length > 0 && _0x550be8.some(_0x2faaa2 => _0x2faaa2.id === _0xbd42fd)) {
      _0x580079(_0xbd42fd);
    }
  }, [_0xbd42fd, _0x550be8]);
  _0x2e9c03.useEffect(() => {
    if (!_0x5d79eb || !_0x57e5ca) {
      return;
    }
    let _0x2986b2 = false;
    (async () => {
      _0x1b1744(true);
      try {
        const _0x30123c = await _0xd28f68(_0x5d79eb, _0x57e5ca);
        if (_0x2986b2) {
          return;
        }
        const _0x2083b2 = _0x30123c.server_profile;
        const _0x23951f = {
          nickname: _0x2083b2?.nickname ?? "",
          avatar_url: _0x2083b2?.avatar_url ?? "",
          banner_url: _0x2083b2?.banner_url ?? "",
          bio: _0x2083b2?.bio ?? ""
        };
        _0x592eac(_0x23951f);
        _0x4db67e(_0x23951f);
        _0x51ede2(null);
        _0xc03d6c(null);
        _0x5eca0(false);
        _0x43de24(false);
      } catch {
        if (!_0x2986b2) {
          _0x7a81ee.error(_0xda61c4("profile.serverProfileLoadError"));
        }
      } finally {
        if (!_0x2986b2) {
          _0x1b1744(false);
        }
      }
    })();
    return () => {
      _0x2986b2 = true;
    };
  }, [_0x5d79eb, _0x57e5ca, _0xda61c4]);
  const _0x4e0ae6 = _0x2e9c03.useMemo(() => {
    if (!_0x5d79eb) {
      return false;
    }
    return _0x56b473.nickname !== _0x31580f.nickname || _0x56b473.bio !== _0x31580f.bio || _0x138585 !== null || _0x1f86b7 !== null || _0x20a248 || _0x12a20e;
  }, [_0x5d79eb, _0x56b473, _0x31580f, _0x138585, _0x1f86b7, _0x20a248, _0x12a20e]);
  _0x2e9c03.useEffect(() => {
    _0x441123?.(_0x4e0ae6);
  }, [_0x4e0ae6, _0x441123]);
  const [_0x1f035d, _0x5ba2d1] = _0x2e9c03.useState(null);
  _0x2e9c03.useEffect(() => {
    if (_0x138585) {
      const _0x48784b = URL.createObjectURL(_0x138585);
      _0x5ba2d1(_0x48784b);
      return () => URL.revokeObjectURL(_0x48784b);
    }
    _0x5ba2d1(_0x20a248 ? null : _0x56b473.avatar_url || null);
  }, [_0x138585, _0x20a248, _0x56b473.avatar_url]);
  const [_0x168335, _0x130e2b] = _0x2e9c03.useState(null);
  _0x2e9c03.useEffect(() => {
    if (_0x1f86b7) {
      const _0x4b955c = URL.createObjectURL(_0x1f86b7);
      _0x130e2b(_0x4b955c);
      return () => URL.revokeObjectURL(_0x4b955c);
    }
    _0x130e2b(_0x12a20e ? null : _0x56b473.banner_url || null);
  }, [_0x1f86b7, _0x12a20e, _0x56b473.banner_url]);
  const _0x42cc80 = _0x2e9c03.useCallback((_0x490d2b, _0x220839, _0x3b1c16) => {
    if (!_0x490d2b.target.files?.length) {
      return;
    }
    const _0x3cb8d6 = _0x490d2b.target.files[0];
    if (_0x3cb8d6.size > 10485760) {
      _0x7a81ee.error(_0xda61c4("profile.fileTooLarge", {
        size: (_0x3cb8d6.size / 1048576).toFixed(2),
        max: 10
      }));
      _0x490d2b.target.value = "";
      return;
    }
    if (!["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(_0x3cb8d6.type)) {
      _0x7a81ee.error(_0xda61c4("profile.invalidFileType"));
      _0x490d2b.target.value = "";
      return;
    }
    const _0x11be9c = new FileReader();
    _0x11be9c.addEventListener("load", () => {
      _0x30fdc5({
        isOpen: true,
        imageSrc: _0x11be9c.result,
        aspect: _0x220839,
        onComplete: _0x409121 => {
          _0x3b1c16(_0x409121);
          if (_0x3b1c16 === _0x51ede2) {
            _0x5eca0(false);
          }
          if (_0x3b1c16 === _0xc03d6c) {
            _0x43de24(false);
          }
        },
        imageName: _0x3cb8d6.name
      });
    });
    _0x11be9c.readAsDataURL(_0x3cb8d6);
    _0x490d2b.target.value = "";
  }, [_0xda61c4]);
  const _0x52419a = (_0xdbd8a1?.display_name || "").trim() || _0xdbd8a1?.username || "";
  const _0x367cfa = (_0x52419a || "U").charAt(0).toUpperCase();
  const _0x2e71b1 = _0xdbd8a1?.avatar_url;
  const _0xc0131d = _0xdbd8a1?.banner_url || null;
  const _0x565ad4 = _0x56b473.nickname || _0x52419a || _0xda61c4("settings.defaultUser");
  const _0x48f880 = _0x1f035d || _0x2e71b1;
  const _0x3b275f = _0x168335 || _0xc0131d;
  const _0x1d7a0c = _0x2e9c03.useMemo(() => _0x550be8.find(_0x3c97a7 => _0x3c97a7.id === _0x5d79eb), [_0x550be8, _0x5d79eb]);
  _0x2e9c03.useImperativeHandle(_0x5384c4, () => ({
    save: async () => {
      if (!_0x5d79eb || !_0x4e0ae6) {
        return false;
      }
      try {
        const _0x16a62f = {};
        if (_0x56b473.nickname !== _0x31580f.nickname) {
          _0x16a62f.nickname = _0x56b473.nickname;
        }
        if (_0x56b473.bio !== _0x31580f.bio) {
          _0x16a62f.bio = _0x56b473.bio;
        }
        if (_0x20a248 && _0x31580f.avatar_url) {
          _0x16a62f.avatar_url = "";
        } else if (_0x138585) {
          _0x16a62f.avatar = _0x138585;
        }
        if (_0x12a20e && _0x31580f.banner_url) {
          _0x16a62f.banner_url = "";
        } else if (_0x1f86b7) {
          _0x16a62f.banner = _0x1f86b7;
        }
        const _0x379954 = (await _0x5e7751(_0x5d79eb, _0x57e5ca, _0x16a62f)).server_profile;
        const _0x49d673 = {
          nickname: _0x379954?.nickname ?? "",
          avatar_url: _0x379954?.avatar_url ?? "",
          banner_url: _0x379954?.banner_url ?? "",
          bio: _0x379954?.bio ?? ""
        };
        _0x592eac(_0x49d673);
        _0x4db67e(_0x49d673);
        _0x51ede2(null);
        _0xc03d6c(null);
        _0x5eca0(false);
        _0x43de24(false);
        return true;
      } catch {
        return false;
      }
    },
    reset: () => {
      _0x592eac(_0x31580f);
      _0x51ede2(null);
      _0xc03d6c(null);
      _0x5eca0(false);
      _0x43de24(false);
    }
  }));
  if (_0x550be8.length === 0) {
    return <div className="space-y-8"><section><div className="mb-4"><div className="flex items-center gap-2"><_0x22daad icon="solar:server-bold-duotone" className="size-4 text-text-tertiary" /><div className="text-base leading-snug font-semibold text-text-secondary">{_0xda61c4("profile.serverProfiles")}</div></div><p className="text-sm leading-snug text-text-muted mt-0.5">{_0xda61c4("profile.serverProfilesDesc")}</p></div><div className="rounded-lg border border-border-default bg-surface-overlay/40 overflow-hidden"><div className="p-12 text-center"><div className="flex items-center justify-center mb-4"><_0x22daad icon="solar:ghost-bold-duotone" className="w-16 h-16 text-text-muted" /></div><h3 className="text-lg font-semibold text-text-secondary mb-2">{_0xda61c4("profile.noServers")}</h3><p className="text-text-tertiary text-sm max-w-md mx-auto">{_0xda61c4("profile.noServersDesc")}</p></div></div></section></div>;
  } else {
    return <_0x3ac2cc.Fragment><div className="space-y-8"><section><div className="mb-2"><div className="flex items-center gap-2"><_0x22daad icon="solar:server-bold-duotone" className="size-4 text-text-tertiary" /><div className="text-base leading-snug font-semibold text-text-secondary">{_0xda61c4("profile.serverProfiles")}</div></div><p className="text-sm leading-snug text-text-muted mt-0.5">{_0xda61c4("profile.serverProfilesDesc")}</p></div><_0x493c04 value={_0x5d79eb} onValueChange={_0x580079}><_0x3b08fb className="w-full h-auto! py-2 px-2.5 bg-surface-overlay/40 border-border-default text-text-primary hover:bg-interactive-active transition-colors focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400/70"><_0x29940f placeholder={_0xda61c4("profile.selectServer")}>{_0x1d7a0c && <div className="flex items-center space-x-3"><div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden shrink-0">{_0x1d7a0c.avatar_url ? <img src={_0x1d7a0c.avatar_url} alt="" className="w-full h-full object-cover rounded-lg" /> : <div className="w-full h-full bg-linear-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center text-xs font-semibold text-text-primary">{_0x1d7a0c.name.charAt(0).toUpperCase()}</div>}</div><div className="flex flex-col items-start"><div className="font-medium text-sm">{_0x1d7a0c.name}</div><div className="text-xs text-text-tertiary/90">{_0xda61c4("profile.serverProfilesDesc")}</div></div></div>}</_0x29940f></_0x3b08fb><_0xcd87a2 className="bg-surface-raised/95 border-border-strong/50 backdrop-blur-xl w-full">{_0x550be8.map(_0x1dea12 => <_0x6b3ea3 value={_0x1dea12.id} className="text-text-primary py-3 px-4 transition-colors cursor-pointer data-[highlighted]:bg-interactive-hover hover:bg-interactive-hover focus:bg-interactive-hover" key={_0x1dea12.id}><div className="flex items-center space-x-3"><div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden shrink-0">{_0x1dea12.avatar_url ? <img src={_0x1dea12.avatar_url} alt="" className="w-full h-full object-cover rounded-lg" /> : <div className="w-full h-full bg-linear-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center text-xs font-semibold text-text-primary">{_0x1dea12.name.charAt(0).toUpperCase()}</div>}</div><div className="flex flex-col items-start"><div className="font-medium">{_0x1dea12.name}</div><div className="text-xs text-text-tertiary">{_0xda61c4("profile.serverProfilesDesc")}</div></div></div></_0x6b3ea3>)}</_0xcd87a2></_0x493c04></section>{_0x5d79eb && <_0x3ac2cc.Fragment>{_0x416713 ? <div className="flex items-center justify-center py-8 gap-2 text-text-tertiary"><_0x19da08 className="size-4 animate-spin" /><span className="text-sm">{_0xda61c4("profile.loadingServerProfile")}</span></div> : <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-8"><div className="space-y-8 overflow-auto scrollbar-thin"><_0x450d98 className="bg-surface-overlay/70" /><section><div className="mb-2"><_0x4bf332 className="text-sm leading-snug text-text-tertiary">{_0xda61c4("profile.serverAvatar")}</_0x4bf332><p className="text-xs text-text-muted mt-0.5">{_0xda61c4("profile.serverAvatarDesc")}</p></div><div className="flex items-center gap-4"><button type="button" onClick={() => _0x30e87a.current?.click()} className="group relative w-20 h-20 rounded-2xl overflow-hidden bg-surface-overlay/60 grid place-items-center text-text-secondary text-lg font-semibold cursor-pointer">{_0x1f035d ? <img src={_0x1f035d} alt="server avatar" className="absolute inset-0 w-full h-full object-cover" /> : _0x2e71b1 ? <img src={_0x2e71b1} alt="avatar fallback" className="absolute inset-0 w-full h-full object-cover opacity-40" /> : <span>{_0x367cfa}</span>}<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1"><_0x59f379 className="size-5 text-white" /><span className="text-[10px] font-medium text-white/80">{_0xda61c4("profile.change")}</span></div></button><div className="flex flex-col gap-1.5"><_0x2779e0 type="button" variant="outline" className="h-8 px-3 text-xs" onClick={() => _0x30e87a.current?.click()}>{_0xda61c4("profile.changeImage")}</_0x2779e0>{(_0x138585 || _0x56b473.avatar_url) && !_0x20a248 && <button type="button" onClick={() => {
                      _0x51ede2(null);
                      _0x5eca0(true);
                    }} className="h-8 px-3 text-xs text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/15 rounded-md border border-red-500/20 hover:border-red-500/30 transition-colors cursor-pointer">{_0xda61c4("profile.remove")}</button>}<input ref={_0x30e87a} type="file" accept=".jpg,.jpeg,.png,.webp" onChange={_0x51638b => _0x42cc80(_0x51638b, 1, _0x51ede2)} className="hidden" /></div></div></section><_0x450d98 className="bg-surface-overlay/70" /><section><div className="mb-2"><_0x4bf332 className="text-sm leading-snug text-text-tertiary">{_0xda61c4("profile.serverBanner")}</_0x4bf332><p className="text-xs text-text-muted mt-0.5">{_0xda61c4("profile.serverBannerDesc")}</p></div><div className="relative aspect-16/6 rounded-2xl border border-dashed border-border-default bg-surface-overlay/40 overflow-hidden hover:border-border-default transition-colors group/sbanner">{_0x168335 ? <img src={_0x168335} alt="server banner" className="absolute inset-0 w-full h-full object-cover" /> : <button type="button" onClick={() => _0x5615ee.current?.click()} className="absolute inset-0 flex flex-col items-center justify-center gap-2 cursor-pointer group-hover/sbanner:bg-surface-overlay/30 transition-colors"><_0x10832f className="size-8 text-text-muted group-hover/sbanner:text-text-tertiary transition-colors" /><span className="text-sm text-text-muted group-hover/sbanner:text-text-tertiary transition-colors">{_0xda61c4("profile.coverUploadHint")}</span><span className="text-[11px] text-text-muted">{_0xda61c4("profile.coverRecommended")}</span></button>}{_0x168335 && <div className="absolute top-2 right-2 flex items-center gap-2 p-1.5 rounded-lg bg-black/60 backdrop-blur-md"><_0x2779e0 type="button" variant="outline" className="h-7 px-2.5 text-xs bg-white/20 border-white/20 text-white hover:bg-white/30 hover:border-white/30 transition-colors" onClick={() => _0x5615ee.current?.click()}><_0x59f379 className="w-4 h-4 mr-2" />{_0xda61c4("profile.change")}</_0x2779e0>{(_0x1f86b7 || _0x56b473.banner_url) && !_0x12a20e && <_0x2779e0 type="button" variant="ghost" className="h-7 px-2 text-xs text-white/80 hover:bg-white/15 hover:text-white" onClick={() => {
                      _0xc03d6c(null);
                      _0x43de24(true);
                    }}>{_0xda61c4("profile.remove")}</_0x2779e0>}</div>}<input ref={_0x5615ee} type="file" accept=".jpg,.jpeg,.png,.webp" onChange={_0x18b0df => _0x42cc80(_0x18b0df, 16 / 6, _0xc03d6c)} className="hidden" /></div></section><_0x450d98 className="bg-surface-overlay/70" /><section><div className="space-y-1.5"><_0x4bf332 htmlFor="server_nickname" className="text-sm leading-snug text-text-tertiary">{_0xda61c4("profile.serverNickname")}</_0x4bf332><_0x5198d9 id="server_nickname" value={_0x56b473.nickname} onChange={_0x34dcbc => {
                    const _0x442f65 = _0x34dcbc.target.value;
                    if ((!_0x442f65 || !!/^[a-zA-ZğüşıöçÄÜŞİÖÇ0-9\s._-]*$/.test(_0x442f65)) && !(_0x442f65.length > 50)) {
                      _0x592eac(_0x35bd14 => ({
                        ..._0x35bd14,
                        nickname: _0x442f65
                      }));
                    }
                  }} maxLength={50} placeholder={_0xda61c4("profile.serverNicknamePlaceholder")} /><div className={"flex items-center justify-end text-[11px] transition-colors " + (_0x56b473.nickname.length >= 50 ? "text-red-400" : _0x56b473.nickname.length >= 42.5 ? "text-amber-400" : "text-text-muted")}>{_0x56b473.nickname.length}/{50}</div></div></section><section><div className="space-y-1.5"><_0x4bf332 htmlFor="server_bio" className="text-sm leading-snug text-text-tertiary">{_0xda61c4("profile.serverBio")}</_0x4bf332><textarea id="server_bio" value={_0x56b473.bio} onChange={_0x2a5780 => {
                    const _0x43a79c = _0x2a5780.target.value;
                    if (!(_0x43a79c.length > z) && !(new TextEncoder().encode(_0x43a79c).length > 2000)) {
                      _0x592eac(_0x24a761 => ({
                        ..._0x24a761,
                        bio: _0x43a79c
                      }));
                    }
                  }} placeholder={_0xda61c4("profile.serverBioPlaceholder")} maxLength={z} rows={3} className="min-h-[160px] w-full rounded-md border border-border-default bg-surface-overlay/40 px-3 py-2 text-sm text-text-secondary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/20 focus:border-accent-primary/30 hover:border-border-strong transition-colors resize-y" /><div className={"flex items-center justify-end text-[11px] transition-colors " + (_0x56b473.bio.length >= z ? "text-red-400" : _0x56b473.bio.length >= 425 ? "text-amber-400" : "text-text-muted")}>{_0x56b473.bio.length}/{z}</div></div></section><_0x450d98 className="bg-surface-overlay/70" /><section><div className="mb-3"><div className="flex items-center gap-2"><_0x22daad icon="solar:trash-bin-trash-bold-duotone" className="size-4 text-red-500 dark:text-red-400" /><div className="text-base leading-snug font-semibold text-red-600 dark:text-red-300">{_0xda61c4("profile.dangerZone")}</div></div><p className="text-sm leading-snug text-text-muted mt-0.5">{_0xda61c4("profile.dangerZoneDesc")}</p></div><div className="rounded-xl bg-red-500/10 dark:bg-red-900/20 border border-red-500/20 dark:border-red-800/50 overflow-hidden"><button type="button" onClick={() => _0xfd8cea(true)} className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-red-500/15 dark:hover:bg-red-900/30 active:bg-red-500/20 dark:active:bg-red-900/40 transition-colors cursor-pointer"><span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-red-500/15 dark:bg-red-500/20"><_0x22daad icon="solar:trash-bin-trash-bold-duotone" className="size-4 text-red-500 dark:text-red-400" /></span><div className="flex-1 min-w-0"><div className="text-[15px] font-medium text-red-700 dark:text-red-200">{_0xda61c4("profile.resetServerProfile")}</div><div className="text-[13px] text-red-500 dark:text-red-400 mt-0.5">{_0xda61c4("profile.resetServerProfileDesc")}</div></div></button></div></section></div><aside className="hidden lg:block"><div className={"sticky transition-[top] duration-300 ease-out " + (_0x4e0ae6 ? "top-[92px]" : "top-6")}><div className="relative rounded-2xl border border-border-default bg-surface-raised/95 shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur overflow-hidden"><div className="relative aspect-16/6 bg-linear-to-br from-accent-primary/40 to-accent-primary/10">{_0x3b275f && <img src={_0x3b275f} alt="banner" className="absolute inset-0 w-full h-full object-cover" />}</div><div className="px-4 pb-3"><div className="relative z-10 w-min -mt-10 flex items-center gap-3"><_0x24ac98 className="size-17 ring-5 ring-surface-raised border border-border-default"><_0x1d4603 src={_0x48f880 || undefined} alt="avatar" /><_0x3b252d className="bg-surface-overlay text-text-secondary text-lg font-semibold">{_0x367cfa}</_0x3b252d></_0x24ac98><div className="absolute -bottom-1 -right-1"><_0x4c0bcc userId={_0x57e5ca} size={6} borderWidth={5} borderColor="border-surface-raised" /></div></div><div className="mt-3 min-w-0"><div className="text-sm font-semibold text-text-primary truncate">{_0x565ad4}</div><div className="text-xs text-text-tertiary truncate">@{_0xdbd8a1?.username}</div></div></div>{(_0x56b473.bio || "").trim().length > 0 && <div className="px-4 pb-3"><div className="text-xs text-text-tertiary line-clamp-3 wrap-break-words">{_0x56b473.bio.trim()}</div></div>}<div className="px-4 py-3 border-t border-border-default text-[11px] text-text-tertiary flex items-center justify-between"><span>{_0xda61c4("profile.preview")}</span><span className="inline-flex items-center gap-1"><span className="inline-block size-1.5 rounded-full bg-accent-primary" />{_0xda61c4("profile.liveUpdating")}</span></div></div></div></aside></div>}</_0x3ac2cc.Fragment>}</div><_0x19effb open={_0x9ad201} onOpenChange={_0xfd8cea} onConfirm={async () => {
        _0x4f3ee5(true);
        try {
          await _0x317c34(_0x5d79eb, _0x57e5ca);
          const _0x4cc71f = {
            nickname: "",
            avatar_url: "",
            banner_url: "",
            bio: ""
          };
          _0x592eac(_0x4cc71f);
          _0x4db67e(_0x4cc71f);
          _0x51ede2(null);
          _0xc03d6c(null);
          _0x5eca0(false);
          _0x43de24(false);
          _0x7a81ee.success(_0xda61c4("profile.serverProfileResetSuccess"));
          _0xfd8cea(false);
        } catch {
          _0x7a81ee.error(_0xda61c4("profile.serverProfileLoadError"));
        } finally {
          _0x4f3ee5(false);
        }
      }} isLoading={_0x414221} icon={<_0x22daad icon="solar:trash-bin-trash-bold-duotone" className="size-5 text-red-400" />} title={_0xda61c4("profile.resetServerProfile")} subtitle={_0x1d7a0c?.name} description={_0xda61c4("profile.serverProfileResetConfirm")} confirmText={_0xda61c4("profile.reset")} variant="danger" /><_0x2e094c isOpen={_0x3d8957.isOpen} onClose={() => _0x30fdc5(_0x59c51d => ({
        ..._0x59c51d,
        isOpen: false,
        imageSrc: null
      }))} imageSrc={_0x3d8957.imageSrc} aspect={_0x3d8957.aspect} onCropComplete={_0x3d8957.onComplete} imageName={_0x3d8957.imageName} /></_0x3ac2cc.Fragment>;
  }
});
L.displayName = "ServerProfileSettings";
export { L as default };