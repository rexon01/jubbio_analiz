import { R as _0x322c81, b as _0x442cb0, b2 as _0x23522d, f as _0x1642b9, d as _0x5b844c, r as _0x40120f, a_ as _0x33d2d0, j as _0x5e1354, I as _0xc6fd9f, K as _0x146f64, s as _0x42d3b1, aN as _0x47c4b7, f4 as _0x88c496 } from "./index-cQfEKR1W.js";
import { D as _0x4f56b0, a as _0x4c0baf, b as _Component, c as _0x2158c7, d as _0xa13bd7 } from "./dialog-BMMpM7PR.js";
import { S as _0x35ba17 } from "./switch-lfnbGePn.js";
import { L as _0x42cad1 } from "./label-ODyS97Ju.js";
import { V as _0x194152 } from "./VisibilitySwitch-CMTX5ZFx.js";
import { g as _0x330aa8, a as _0x36501e, i as _0x920423, u as _0xdb41d1 } from "./templates-DiTUghFZ.js";
import { C as _0x1ad7a5, S as _0x5882b6, a as _0x1ef2a9, b as _0x3d6ff4, c as _0x23f508, d as _0x1d3893 } from "./select-DQjjzSZW.js";
import { bM as _0x131d94 } from "./AppLayout-BEBJqe9_.js";
import { k as _0x17c5ab } from "./soundboardFx-C2LP-Hjs.js";
import { P as _0x43fb3f } from "./plus-B7c2Px8R.js";
import { A as _0x194d41 } from "./arrow-left-B3FhifN2.js";
import { L as _0x5e8352 } from "./loader-circle-CTtxa1g9.js";
import "./index-yuEHo9bu.js";
import "./index-Oyyh46KT.js";
import "./tr-D975n4_R.js";
import "./arrow-right-DvlsXLCB.js";
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
import "./avatar-C-4BWxT3.js";
import "./ConfirmDialog-B4gIndKy.js";
import "./alert-dialog-BZuoGg7O.js";
import "./user-DSjlY8FD.js";
import "./refresh-cw-C3NlhmpS.js";
import "./trash-2-DuFcDcAU.js";
import "./clipboard-BQ9qambq.js";
import "./video-AtsAgCNJ.js";
import "./channelNotificationStore-FXjXBmS_.js";
import "./index.module-CsHioFCV.js";
import "./index-BUijt7wr.js";
function L(_0x17c169, _0x74b453) {
  const _0x1e5d72 = _0x17c169.trim();
  if (/^[A-Za-z0-9_-]+$/.test(_0x1e5d72)) {
    if ((_0x74b453 === "discord" ? /^[A-Za-z0-9_-]{2,32}$/ : /^[A-Za-z0-9]{8}$/).test(_0x1e5d72)) {
      return {
        code: _0x1e5d72,
        source: _0x74b453
      };
    } else {
      return null;
    }
  }
  try {
    const _0x130459 = new URL(_0x1e5d72.includes("://") ? _0x1e5d72 : "https://" + _0x1e5d72);
    if (_0x130459.protocol !== "http:" && _0x130459.protocol !== "https:") {
      return null;
    }
    const _0x4d117b = _0x130459.hostname.replace(/^www\./, "");
    let _0x2ba602 = "";
    if (_0x4d117b === "discord.new") {
      _0x2ba602 = _0x130459.pathname.slice(1);
      _0x74b453 = "discord";
    } else if (_0x4d117b === "discord.com" && _0x130459.pathname.startsWith("/template/")) {
      _0x2ba602 = _0x130459.pathname.slice(10);
      _0x74b453 = "discord";
    } else {
      if (!["jubbio.com", "localhost", "127.0.0.1"].includes(_0x4d117b) || !_0x130459.pathname.startsWith("/template/")) {
        return null;
      }
      _0x2ba602 = _0x130459.pathname.slice(10);
      _0x74b453 = "jubbio";
    }
    return L(_0x2ba602, _0x74b453);
  } catch {
    return null;
  }
}
const P = _0x322c81.memo(() => {
  const {
    t: _0x58e382
  } = _0x442cb0();
  const _0x4c1d84 = _0x23522d(_0x102576 => _0x102576.isCreateServerModalOpen);
  const _0x4f2c90 = _0x23522d(_0x115432 => _0x115432.setCreateServerModalOpen);
  const _0x309b35 = _0x23522d(_0x2be5c2 => _0x2be5c2.closeCreateServerModal);
  const _0x29bcda = _0x23522d(_0x5b5318 => _0x5b5318.openInviteModal);
  const _0x94cf7d = _0x1642b9(_0x275f0a => _0x275f0a.user);
  const _0x5672c8 = _0x5b844c();
  const [_0x5332f5, _0xcafca1] = _0x40120f.useState("choose");
  const [_0x13faf6, _0x431146] = _0x40120f.useState("");
  const [_0x5e80d1, _0x4caad4] = _0x40120f.useState(true);
  const [_0x3a17ce, _0x512fe4] = _0x40120f.useState(false);
  const [_0x4d2849, _0x575dbe] = _0x40120f.useState(true);
  const [_0x5d0a86, _0x51b7a2] = _0x40120f.useState(false);
  const [_0x1eefe0, _0x1774bd] = _0x40120f.useState("");
  const [_0xdaaf7, _0x26b612] = _0x40120f.useState(false);
  const [_0x2a6779, _0x1e6752] = _0x40120f.useState(null);
  const _0x233ef1 = _0x40120f.useRef(null);
  const [_0x3d4dfd, _0x36dc10] = _0x40120f.useState("jubbio");
  const _0x1b2c27 = _0x40120f.useRef(0);
  const [_0x4ef5e0, _0x16447e] = _0x40120f.useState("");
  const [_0x12c419, _0x366b38] = _0x40120f.useState(false);
  const [_0x46ce87, _0xf80de4] = _0x40120f.useState(null);
  const [_0x4be85a, _0x519a37] = _0x40120f.useState(null);
  const [_0x39384c, _0x26ca42] = _0x40120f.useState("");
  const [_0x836cb3, _0x30766f] = _0x40120f.useState(false);
  const _0x2e6612 = _0x40120f.useRef(null);
  _0x40120f.useEffect(() => {
    if (!_0x4c1d84) {
      return;
    }
    _0xcafca1("choose");
    _0x1774bd("");
    _0x26b612(false);
    _0x1e6752(null);
    _0x51b7a2(false);
    _0x512fe4(false);
    _0x36dc10("jubbio");
    _0x1b2c27.current++;
    _0x16447e("");
    _0x366b38(false);
    _0xf80de4(null);
    _0x519a37(null);
    _0x26ca42("");
    _0x30766f(false);
    const _0x8db5e3 = _0x94cf7d?.username?.trim();
    const _0x5a171c = _0x8db5e3 ? _0x58e382("server.createModal.defaultNameWithUser", {
      name: _0x8db5e3
    }) : _0x58e382("server.createModal.defaultName");
    _0x431146(_0x5a171c);
    _0x4caad4(true);
    _0x575dbe(true);
  }, [_0x4c1d84, _0x94cf7d?.username]);
  _0x40120f.useEffect(() => {
    if (!_0x5e80d1) {
      _0x575dbe(false);
    }
  }, [_0x5e80d1]);
  const _0x27e7af = _0x40120f.useCallback(_0x349458 => {
    _0x1774bd(_0x349458);
    _0x1e6752(null);
    if (_0x233ef1.current) {
      clearTimeout(_0x233ef1.current);
    }
    const _0x134821 = _0x17c5ab(_0x349458) ?? _0x349458.trim();
    if (_0x134821) {
      _0x26b612(true);
      _0x233ef1.current = setTimeout(async () => {
        try {
          const _0x55cfad = await _0x131d94(_0x134821);
          if (_0x55cfad?.guild) {
            _0x4f2c90(false);
            _0x29bcda(_0x134821);
          } else {
            _0x1e6752(_0x58e382("server.joinModal.serverNotFound"));
          }
        } catch (_0x593deb) {
          const _0x129989 = _0x593deb?.response?.status;
          _0x1e6752(_0x129989 === 404 ? _0x58e382("server.joinModal.inviteInvalid") : _0x593deb?.response?.data?.error || _0x58e382("server.joinModal.inviteInvalid"));
        } finally {
          _0x26b612(false);
        }
      }, 600);
    } else {
      _0x26b612(false);
    }
  }, [_0x4f2c90, _0x29bcda]);
  _0x40120f.useEffect(() => () => {
    if (_0x233ef1.current) {
      clearTimeout(_0x233ef1.current);
    }
    if (_0x2e6612.current) {
      clearTimeout(_0x2e6612.current);
    }
  }, []);
  const _0x542b4d = _0x40120f.useCallback(_0x22c6b5 => L(_0x22c6b5, _0x3d4dfd)?.code ?? "", [_0x3d4dfd]);
  const _0x5ebcb6 = _0x40120f.useCallback(_0x1dff06 => {
    _0x16447e(_0x1dff06);
    _0xf80de4(null);
    _0x519a37(null);
    if (_0x2e6612.current) {
      clearTimeout(_0x2e6612.current);
    }
    const _0x483909 = L(_0x1dff06, _0x3d4dfd);
    const _0x579c18 = ++_0x1b2c27.current;
    if (_0x483909) {
      _0x36dc10(_0x483909.source);
      _0x366b38(true);
      _0x2e6612.current = setTimeout(async () => {
        try {
          const _0x5c6c9a = _0x483909.source === "discord" ? await _0x330aa8(_0x483909.code) : await _0x36501e(_0x483909.code);
          if (_0x579c18 !== _0x1b2c27.current) {
            return;
          }
          _0x519a37(_0x5c6c9a);
          _0x26ca42(_0x5c6c9a.serialized_guild.name || "");
        } catch (_0xf7294b) {
          if (_0x579c18 === _0x1b2c27.current) {
            _0xf80de4(_0x58e382(_0xf7294b?.response?.status === 404 ? "template.createModal.notFound" : "template.createModal.fetchError"));
          }
        } finally {
          if (_0x579c18 === _0x1b2c27.current) {
            _0x366b38(false);
          }
        }
      }, 600);
    } else {
      _0x366b38(false);
    }
  }, [_0x3d4dfd, _0x58e382]);
  const _0x1ef34b = _0x40120f.useCallback(async () => {
    const _0xbfda5d = _0x542b4d(_0x4ef5e0);
    if (_0xbfda5d && _0x39384c.trim() && !(_0x39384c.trim().length < 2) && !_0x836cb3) {
      _0x30766f(true);
      try {
        const _0x4eba10 = (_0x3d4dfd === "discord" ? await _0x920423(_0xbfda5d, _0x39384c.trim()) : await _0xdb41d1(_0xbfda5d, {
          name: _0x39384c.trim()
        })).guild;
        if (_0x4eba10?.id) {
          const {
            addServerIfNotExists: _0x52fcf4
          } = _0x33d2d0.getState();
          _0x52fcf4({
            id: _0x4eba10.id,
            name: _0x4eba10.name,
            avatar_url: _0x4eba10.avatar_url || null,
            banner_url: _0x4eba10.banner_url || null,
            is_owner: true
          });
          _0x30766f(false);
          _0x309b35();
          setTimeout(() => _0x5672c8("/app/server/" + _0x4eba10.id), 50);
        }
      } catch {
        _0x30766f(false);
      }
    }
  }, [_0x3d4dfd, _0x4ef5e0, _0x39384c, _0x836cb3, _0x542b4d, _0x309b35, _0x5672c8]);
  return <_0x4f56b0 open={_0x4c1d84} onOpenChange={_0x4f2c90}><_0x4c0baf className="p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md overflow-hidden"><div className="p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40"><div className="bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col max-h-[calc(100dvh-2rem)]">{_0x5332f5 === "choose" && <_0x5e1354.Fragment><_Component className="px-4 py-4 border-b border-border-subtle shrink-0"><_0x2158c7 className="text-lg font-semibold text-text-primary">{_0x58e382("server.createModal.chooseTitle")}</_0x2158c7><_0xa13bd7 className="text-text-muted text-sm">{_0x58e382("server.createModal.chooseDesc")}</_0xa13bd7></_Component><div className="px-4 py-5"><div className="grid grid-cols-2 gap-3"><button type="button" onClick={() => _0xcafca1("create")} className="group relative flex flex-col items-center gap-3 p-5 rounded-xl bg-surface-inset/40 border border-border-subtle hover:border-accent-primary/30 hover:bg-accent-subtle transition-all cursor-pointer overflow-hidden"><img src="/jubbio-logo.svg" alt="" aria-hidden="true" className="pointer-events-none absolute -left-6 -bottom-4 size-30 opacity-0 translate-x-[-60%] rotate-[12deg] group-hover:opacity-[0.15] group-hover:translate-x-[-30%] group-hover:rotate-[6deg] transition-all duration-500 ease-out" /><div className="size-12 rounded-xl bg-accent-subtle flex items-center justify-center group-hover:bg-accent-subtle transition-colors relative z-10"><_0x43fb3f className="size-6 text-accent-primary-text" /></div><div className="text-center relative z-10"><p className="text-sm font-medium text-text-primary">{_0x58e382("server.createModal.createOption")}</p><p className="text-[11px] text-text-muted mt-1 leading-snug">{_0x58e382("server.createModal.createOptionDesc")}</p></div></button><button type="button" onClick={() => _0xcafca1("join")} className="group relative flex flex-col items-center gap-3 p-5 rounded-xl bg-surface-inset/40 border border-border-subtle hover:border-sky-400/30 hover:bg-sky-400/5 transition-all cursor-pointer overflow-hidden"><img src="/jubbio-logo.svg" alt="" aria-hidden="true" className="pointer-events-none absolute -right-6 -bottom-4 size-30 -scale-x-100 opacity-0 translate-x-[60%] rotate-[-12deg] group-hover:opacity-[0.15] group-hover:translate-x-[30%] group-hover:rotate-[-6deg] transition-all duration-500 ease-out" /><div className="size-12 rounded-xl bg-sky-400/15 flex items-center justify-center group-hover:bg-sky-400/25 transition-colors relative z-10"><_0xc6fd9f icon="solar:link-bold-duotone" className="size-6 text-sky-400" /></div><div className="text-center relative z-10"><p className="text-sm font-medium text-text-primary">{_0x58e382("server.joinModal.joinOption")}</p><p className="text-[11px] text-text-muted mt-1 leading-snug">{_0x58e382("server.joinModal.joinOptionDesc")}</p></div></button></div><button type="button" onClick={() => _0xcafca1("template")} className="group relative w-full mt-3 flex items-center gap-3 p-4 rounded-xl bg-surface-inset/40 border border-border-subtle hover:border-emerald-400/30 hover:bg-emerald-400/5 transition-all cursor-pointer overflow-hidden"><div className="size-10 rounded-xl bg-emerald-400/15 flex items-center justify-center group-hover:bg-emerald-400/25 transition-colors shrink-0"><_0xc6fd9f icon="solar:layers-bold-duotone" className="size-5 text-emerald-400" /></div><div className="text-left"><p className="text-sm font-medium text-text-primary">{_0x58e382("server.createModal.templateOption")}</p><p className="text-[11px] text-text-muted mt-0.5 leading-snug">{_0x58e382("server.createModal.templateOptionDesc")}</p></div></button></div></_0x5e1354.Fragment>}{_0x5332f5 === "create" && <_0x5e1354.Fragment><_Component className="px-4 py-4 border-b border-border-subtle shrink-0"><div className="flex items-center gap-2"><button type="button" onClick={() => _0xcafca1("choose")} className="size-7 rounded-lg bg-surface-inset/40 hover:bg-interactive-muted flex items-center justify-center transition-colors cursor-pointer"><_0x194d41 className="size-4 text-text-tertiary" /></button><_0x2158c7 className="text-lg font-semibold text-text-primary">{_0x58e382("server.createModal.title")}</_0x2158c7></div><_0xa13bd7 className="text-text-muted text-sm">{_0x58e382("server.createModal.description")}</_0xa13bd7></_Component><div className="px-4 py-5 space-y-5 overflow-y-auto scrollbar-thin"><div className="w-full min-w-0"><label className="text-xs text-text-muted mb-1.5 block">{_0x58e382("server.createModal.serverName")}</label><input type="text" value={_0x13faf6} onChange={_0x407225 => _0x431146(_0x407225.target.value)} aria-label={_0x58e382("server.createModal.serverName")} className="w-full h-11 px-4 rounded-xl bg-surface-inset/40 border border-border-subtle text-text-primary text-sm placeholder:text-text-muted outline-none focus:border-accent-primary/50 transition-colors" /></div><_0x194152 isPublic={_0x5e80d1} onPublicChange={_0x4caad4} /><div className="space-y-2"><button type="button" onClick={() => _0x512fe4(_0x200165 => !_0x200165)} className="text-xs text-sky-300 hover:text-sky-200 inline-flex items-center gap-1 cursor-pointer">{_0x3a17ce ? <_0x1ad7a5 className="w-3 h-3" /> : <_0x146f64 className="w-3 h-3" />}<span>{_0x58e382("server.createModal.advancedOptions", {
                      context: _0x3a17ce ? "hide" : "show"
                    })}</span></button>{_0x3a17ce && <div className="rounded-xl bg-surface-inset/40 border border-border-subtle p-3 text-sm text-text-secondary"><div className="flex items-center justify-between gap-2 py-1"><_0x42cad1 htmlFor="adv-discover" className={_0x42d3b1("text-xs cursor-pointer flex items-center gap-2", !_0x5e80d1 && "opacity-60 cursor-not-allowed")} onClick={_0x943476 => {
                      _0x943476.preventDefault();
                      if (_0x5e80d1) {
                        _0x575dbe(_0x336e4c => !_0x336e4c);
                      }
                    }}>{_0x4d2849 && _0x5e80d1 && <span className="inline-block size-1.5 rounded-full bg-emerald-400" />}{_0x58e382("server.createModal.discoverVisible")}</_0x42cad1><_0x47c4b7 label={_0x5e80d1 ? undefined : _0x58e382("server.createModal.discoverHiddenTooltip")}><div onClick={_0x3b8041 => _0x3b8041.stopPropagation()}><_0x35ba17 id="adv-discover" aria-label={_0x58e382("server.createModal.showInDiscover")} checked={_0x4d2849} onCheckedChange={_0x23b515 => _0x575dbe(Boolean(_0x23b515))} disabled={!_0x5e80d1} /></div></_0x47c4b7></div></div>}</div><p className="text-[11px] text-text-muted">{_0x58e382("server.createModal.policyNote")}</p></div><div className="px-4 py-3 border-t border-border-subtle shrink-0"><div className="flex items-center gap-2"><button type="button" onClick={() => _0xcafca1("choose")} disabled={_0x5d0a86} className="flex-1 h-10 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">{_0x58e382("server.createModal.cancel")}</button><button type="button" onClick={async () => {
                  if (!(_0x13faf6.trim().length < 2) && !_0x5d0a86) {
                    _0x51b7a2(true);
                    try {
                      const _0xa16bc3 = {
                        name: _0x13faf6.trim()
                      };
                      if (typeof _0x5e80d1 == "boolean") {
                        _0xa16bc3.is_public = _0x5e80d1;
                      }
                      if (_0x4d2849) {
                        _0xa16bc3.is_discoverable = true;
                      }
                      const _0x300055 = await _0x88c496(_0xa16bc3);
                      const _0x3bdce9 = _0x300055?.guild || _0x300055;
                      const _0x4488a9 = _0x3bdce9?.id;
                      if (_0x4488a9) {
                        const {
                          addServerIfNotExists: _0x2b6b5b
                        } = _0x33d2d0.getState();
                        _0x2b6b5b({
                          id: _0x4488a9,
                          name: _0x3bdce9.name || _0x13faf6.trim(),
                          avatar_url: _0x3bdce9.avatar_url || null,
                          banner_url: _0x3bdce9.banner_url || null,
                          is_owner: true
                        });
                      }
                      _0x51b7a2(false);
                      _0x309b35();
                      if (_0x4488a9) {
                        setTimeout(() => _0x5672c8("/app/server/" + _0x4488a9), 50);
                      }
                    } catch (_0x14b130) {
                      _0x51b7a2(false);
                    }
                  }
                }} disabled={_0x13faf6.trim().length < 2 || _0x5d0a86} className="flex-1 h-10 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer">{_0x5d0a86 ? <_0x5e1354.Fragment><_0x5e8352 className="size-4 animate-spin" />{_0x58e382("server.createModal.creating")}</_0x5e1354.Fragment> : _0x58e382("server.createModal.create")}</button></div></div></_0x5e1354.Fragment>}{_0x5332f5 === "join" && <_0x5e1354.Fragment><_Component className="px-4 py-4 border-b border-border-subtle shrink-0"><div className="flex items-center gap-2"><button type="button" onClick={() => _0xcafca1("choose")} className="size-7 rounded-lg bg-surface-inset/40 hover:bg-interactive-muted flex items-center justify-center transition-colors cursor-pointer"><_0x194d41 className="size-4 text-text-tertiary" /></button><_0x2158c7 className="text-lg font-semibold text-text-primary">{_0x58e382("server.joinModal.title")}</_0x2158c7></div><_0xa13bd7 className="text-text-muted text-sm">{_0x58e382("server.joinModal.description")}</_0xa13bd7></_Component><div className="px-4 py-5 space-y-4 overflow-y-auto scrollbar-thin"><div className="w-full min-w-0"><label className="text-xs text-text-muted mb-1.5 block">{_0x58e382("server.joinModal.inviteLink")}</label><div className="relative"><input type="text" value={_0x1eefe0} onChange={_0x3b0687 => _0x27e7af(_0x3b0687.target.value)} placeholder={_0x58e382("server.joinModal.invitePlaceholder")} aria-label={_0x58e382("server.joinModal.inviteLink")} className="w-full h-11 px-4 rounded-xl bg-surface-inset/40 border border-border-subtle text-text-primary text-sm placeholder:text-text-muted outline-none focus:border-sky-400/50 transition-colors" />{_0xdaaf7 && <div className="absolute right-3 top-1/2 -translate-y-1/2"><_0x5e8352 className="size-4 animate-spin text-text-tertiary" /></div>}</div></div>{_0x2a6779 && !_0xdaaf7 && <p className="text-xs text-red-400">{_0x2a6779}</p>}{!_0x1eefe0.trim() && <div className="rounded-xl bg-sky-500/5 border border-sky-500/15 p-3"><p className="text-xs text-sky-300/80 font-medium mb-2">{_0x58e382("server.joinModal.examplesTitle")}</p><div className="space-y-1.5"><div className="flex items-center gap-2 text-xs text-text-muted font-mono"><span className="size-1.5 rounded-full bg-sky-400/60 shrink-0" /><span>https://jubbio.com/invite/abc123</span></div><div className="flex items-center gap-2 text-xs text-text-muted font-mono"><span className="size-1.5 rounded-full bg-sky-400/60 shrink-0" /><span>abc123</span></div></div></div>}</div><div className="px-4 py-3 border-t border-border-subtle shrink-0"><button type="button" onClick={() => _0xcafca1("choose")} className="w-full h-10 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer">{_0x58e382("server.createModal.cancel")}</button></div></_0x5e1354.Fragment>}{_0x5332f5 === "template" && <_0x5e1354.Fragment><_Component className="px-4 py-4 border-b border-border-subtle shrink-0"><div className="flex items-center gap-2"><button type="button" onClick={() => _0xcafca1("choose")} className="size-7 rounded-lg bg-surface-inset/40 hover:bg-interactive-muted flex items-center justify-center transition-colors cursor-pointer"><_0x194d41 className="size-4 text-text-tertiary" /></button><_0x2158c7 className="text-lg font-semibold text-text-primary">{_0x58e382("server.createModal.templateTitle")}</_0x2158c7></div><_0xa13bd7 className="text-text-muted text-sm">{_0x58e382("server.createModal.templateDesc")}</_0xa13bd7></_Component><div className="px-4 py-5 space-y-4 overflow-y-auto scrollbar-thin"><_0x5882b6 value={_0x3d4dfd} onValueChange={_0x37a948 => {
                _0x36dc10(_0x37a948);
                _0x16447e("");
                _0x519a37(null);
                _0xf80de4(null);
                _0x366b38(false);
                _0x1b2c27.current++;
              }}><_0x1ef2a9><_0x3d6ff4 /></_0x1ef2a9><_0x23f508><_0x1d3893 value="jubbio">Jubbio</_0x1d3893><_0x1d3893 value="discord">Discord</_0x1d3893></_0x23f508></_0x5882b6>{_0x3d4dfd === "discord" && <p className="text-sm text-text-muted">{_0x58e382("orientation.discordImportHint")}</p>}{_0x4be85a?.warnings?.length > 0 && <div className="text-sm text-text-muted">{_0x4be85a.warnings.map(_0x30d543 => <p key={_0x30d543}>{_0x58e382("orientation.importWarnings." + _0x30d543)}</p>)}</div>}<div className="w-full min-w-0"><label className="text-xs text-text-muted mb-1.5 block">{_0x58e382("server.createModal.templateCodeLabel")}</label><div className="relative"><input type="text" value={_0x4ef5e0} onChange={_0x1c30b9 => _0x5ebcb6(_0x1c30b9.target.value)} placeholder={_0x58e382("server.createModal.templateCodePlaceholder")} aria-label={_0x58e382("server.createModal.templateCodeLabel")} className="w-full h-11 px-4 rounded-xl bg-surface-inset/40 border border-border-subtle text-text-primary text-sm placeholder:text-text-muted outline-none focus:border-emerald-400/50 transition-colors" />{_0x12c419 && <div className="absolute right-3 top-1/2 -translate-y-1/2"><_0x5e8352 className="size-4 animate-spin text-text-tertiary" /></div>}</div></div>{_0x46ce87 && !_0x12c419 && <p className="text-xs text-red-400">{_0x46ce87}</p>}{_0x4be85a && !_0x12c419 && !_0x46ce87 && <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-4 space-y-3"><div className="flex items-center gap-3"><div className="size-9 rounded-lg bg-emerald-400/15 flex items-center justify-center shrink-0 ring-1 ring-emerald-400/20"><_0xc6fd9f icon="solar:layers-bold-duotone" className="size-4.5 text-emerald-400" /></div><div className="flex-1 min-w-0"><p className="text-sm font-medium text-text-primary truncate">{_0x4be85a.name}</p>{_0x4be85a.description && <p className="text-[11px] text-text-muted truncate">{_0x4be85a.description}</p>}</div></div><div className="flex flex-wrap gap-2"><span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-emerald-400/10 text-emerald-300/90">{_0x4be85a.serialized_guild.channels.length} {_0x58e382("server.createModal.templateChannels")}</span><span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-emerald-400/10 text-emerald-300/90">{_0x4be85a.serialized_guild.roles.filter(_0x42a5ad => !_0x42a5ad.is_default).length} {_0x58e382("server.createModal.templateRoles")}</span><span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-md bg-emerald-400/10 text-emerald-300/90">{_0x4be85a.serialized_guild.categories.length} {_0x58e382("server.createModal.templateCategories")}</span></div><div><label className="text-xs text-text-muted mb-1 block">{_0x58e382("server.createModal.templateServerName")}</label><input type="text" value={_0x39384c} onChange={_0x1305a0 => _0x26ca42(_0x1305a0.target.value)} maxLength={100} placeholder={_0x58e382("server.createModal.templateServerNamePlaceholder")} className="w-full h-10 px-3 rounded-xl bg-surface-inset/50 border border-emerald-500/15 text-text-primary text-sm placeholder:text-text-muted outline-none focus:border-emerald-400/50 transition-colors" onKeyDown={_0x35cee9 => {
                    if (_0x35cee9.key === "Enter") {
                      _0x1ef34b();
                    }
                  }} /></div></div>}{!_0x4ef5e0.trim() && <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/15 p-3"><p className="text-xs text-emerald-300/80 font-medium mb-2">{_0x58e382("server.createModal.templateExamplesTitle")}</p><div className="space-y-1.5"><div className="flex items-center gap-2 text-xs text-text-muted font-mono"><span className="size-1.5 rounded-full bg-emerald-400/60 shrink-0" /><span>https://jubbio.com/template/a1b2c3d4</span></div><div className="flex items-center gap-2 text-xs text-text-muted font-mono"><span className="size-1.5 rounded-full bg-emerald-400/60 shrink-0" /><span>a1b2c3d4</span></div></div></div>}</div><div className="px-4 py-3 border-t border-border-subtle shrink-0"><div className="flex items-center gap-2"><button type="button" onClick={() => _0xcafca1("choose")} disabled={_0x836cb3} className="flex-1 h-10 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">{_0x58e382("server.createModal.cancel")}</button>{_0x4be85a && <button type="button" onClick={_0x1ef34b} disabled={_0x39384c.trim().length < 2 || _0x836cb3} className="flex-1 h-10 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer">{_0x836cb3 ? <_0x5e1354.Fragment><_0x5e8352 className="size-4 animate-spin" />{_0x58e382("server.createModal.creating")}</_0x5e1354.Fragment> : _0x58e382("server.createModal.templateCreate")}</button>}</div></div></_0x5e1354.Fragment>}</div></div></_0x4c0baf></_0x4f56b0>;
});
export { P as default };