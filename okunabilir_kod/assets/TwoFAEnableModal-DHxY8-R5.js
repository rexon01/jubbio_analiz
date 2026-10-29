import { b as _0x4500f3, r as _0x35d5a0, P as _0xee80f, j as _0x4eefbe, F as _0x4bcbba, I as _0x59ac21 } from "./index-cQfEKR1W.js";
import { I as _0x549fa0, a as _0x49afed, b as _0x36140d, c as _0x3d71b1 } from "./input-otp-BJ3P97wC.js";
import { D as _0x19c5e3, a as _0x4c36e8, c as _0x3757e2, d as _0x57ef09 } from "./dialog-BMMpM7PR.js";
import { V as _0x21aaac } from "./index-Oyyh46KT.js";
import { c as _0x219d01 } from "./clipboard-BQ9qambq.js";
import { b as _0x336fc9, v as _0x3f8e96, r as _0x3c4fef } from "./2fa-BVSDQ2X9.js";
import { B as _0x154bd2 } from "./BackupCodesDisplay-DP8oY1WR.js";
import { S as _0x8dc03f } from "./smartphone-CEPSHImI.js";
import { M as _0x146e24 } from "./mail-VxBGiXYt.js";
import { K as _0xedadfd } from "./key-gGt-5vdN.js";
import "./minus-DgcuZCwQ.js";
import "./index-yuEHo9bu.js";
import "./download-CURuSoyZ.js";
const y = ({
  isOpen: _0x4b4c6b,
  onClose: _0x48040d,
  onActivate: _0x5a1b7d
}) => {
  const {
    t: _0x930ce8
  } = _0x4500f3("privacy");
  const [_0x16dd68, _0x5aee23] = _0x35d5a0.useState(null);
  const [_0xc53c69, _0x28d4fe] = _0x35d5a0.useState("");
  const [_0x4fa386, _0x16882e] = _0x35d5a0.useState(false);
  const [_0x375d16, _0x2f214f] = _0x35d5a0.useState(null);
  const [_0x37fa4f, _0x5c898a] = _0x35d5a0.useState(false);
  const [_0xd8d4d, _0x24fd5d] = _0x35d5a0.useState({});
  const _0x5bb1ca = _0x35d5a0.useCallback(async _0x369b57 => {
    try {
      _0x16882e(true);
      _0x2f214f(_0x369b57);
      const _0x2afcb1 = await _0x336fc9({
        method: _0x369b57
      });
      _0x5aee23(_0x369b57);
      if (_0x369b57 === "app") {
        const _0x2994bc = _0x2afcb1;
        _0x24fd5d({
          sessionId: _0x2994bc.sessionId,
          qrCode: _0x2994bc.qrCode,
          secret: _0x2994bc.secret,
          backupCodes: _0x2994bc.backupCodes
        });
      } else {
        _0x24fd5d({
          expiresIn: _0x2afcb1.expiresIn
        });
      }
    } catch {} finally {
      _0x16882e(false);
      _0x2f214f(null);
    }
  }, []);
  const _0x589ca6 = _0x35d5a0.useCallback(() => {
    _0x5aee23(null);
  }, []);
  const _0x7baa6 = _0x35d5a0.useCallback(() => {
    _0x48040d();
    _0x5aee23(null);
    _0x28d4fe("");
    _0x24fd5d({});
    _0x2f214f(null);
    _0x16882e(false);
    _0x5c898a(false);
  }, [_0x48040d]);
  const _0x41a6c0 = _0x35d5a0.useCallback(async () => {
    if (_0x16dd68 && _0xc53c69 && _0xc53c69.length === 6) {
      try {
        _0x16882e(true);
        if (_0x16dd68 === "app" && !_0xd8d4d.sessionId) {
          _0xee80f.error(_0x930ce8("twoFAEnable.setupDataNotFound"));
          return;
        }
        if ((await _0x3f8e96(_0xc53c69, _0x16dd68, _0x16dd68 === "app" ? _0xd8d4d.sessionId : undefined)).success) {
          _0x5c898a(true);
          _0x5a1b7d(_0x16dd68, _0xc53c69);
        }
      } catch {} finally {
        _0x16882e(false);
      }
    } else {
      _0xee80f.error(_0x930ce8("twoFAEnable.enterVerificationCode"));
    }
  }, [_0x16dd68, _0xc53c69, _0xd8d4d.sessionId, _0x5a1b7d]);
  const _0x8fcc1d = _0x35d5a0.useCallback(async () => {
    try {
      _0x16882e(true);
      const _0x37c908 = await _0x3c4fef();
      _0x24fd5d(_0x2cf98c => ({
        ..._0x2cf98c,
        expiresIn: _0x37c908.expiresIn
      }));
    } catch {} finally {
      _0x16882e(false);
    }
  }, []);
  const _0x4c3e3a = _0x35d5a0.useCallback(async () => {
    if (!_0xd8d4d.secret) {
      return;
    }
    if (await _0x219d01(_0xd8d4d.secret)) {
      _0xee80f.success(_0x930ce8("twoFAEnable.setupKeycopied"));
    } else {
      _0xee80f.error(_0x930ce8("twoFAEnable.copyFailed"));
    }
  }, [_0xd8d4d.secret, _0x930ce8]);
  return <_0x19c5e3 open={_0x4b4c6b} onOpenChange={_0x7baa6}><_0x4c36e8 className="p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md overflow-hidden"><_0x21aaac><_0x3757e2>{_0x930ce8("twoFAEnable.title")}</_0x3757e2><_0x57ef09>{_0x930ce8("twoFAEnable.description")}</_0x57ef09></_0x21aaac><div className="p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40"><div className="bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col max-h-[90vh]"><div className="px-4 py-4 border-b border-border-subtle"><h2 className="text-lg font-semibold text-text-primary">{_0x930ce8("twoFAEnable.title")}</h2><p className="text-sm text-text-tertiary mt-1">{_0x930ce8("twoFAEnable.description")}</p></div><div className="px-4 py-4 overflow-y-auto scrollbar-thin scrollbar-track-surface-overlay/50 scrollbar-thumb-border-strong/70 hover:scrollbar-thumb-border-strong/80 scrollbar-thumb-rounded-full">{_0x16dd68 ? _0x37fa4f ? <div className="space-y-4"><div className="p-4 rounded-xl border border-green-500/20 bg-green-500/5"><div className="flex items-start gap-3"><div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/30"><_0x59ac21 icon="solar:lock-bold-duotone" className="w-4 h-4 text-green-400" /></div><div className="flex-1"><h3 className="text-sm font-semibold text-green-200 mb-1">{_0x930ce8("twoFAEnable.twoFAActivated")}</h3><p className="text-xs text-green-300/80 leading-relaxed">{_0x930ce8("twoFAEnable.accountProtectedWith", {
                        method: _0x930ce8(_0x16dd68 === "app" ? "twoFAEnable.methodApp" : "twoFAEnable.methodEmail")
                      })}</p></div></div></div>{_0x16dd68 === "app" && _0xd8d4d.backupCodes && <_0x154bd2 backupCodes={_0xd8d4d.backupCodes} showWarning={true} />}</div> : _0x16dd68 === "app" ? <div className="space-y-4"><div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5"><div className="flex items-start gap-3"><_0x8dc03f className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" /><div><h3 className="text-sm font-medium text-blue-200 mb-2">{_0x930ce8("twoFAEnable.appSetupTitle")}</h3><p className="text-xs text-blue-300/80 leading-relaxed">{_0x930ce8("twoFAEnable.appSetupDesc")}</p></div></div></div><div className="flex flex-col md:flex-row gap-6 items-center"><div className="shrink-0">{_0xd8d4d.qrCode ? <div className="w-40 h-40 bg-white rounded-lg border-2 border-border-default shadow-lg flex items-center justify-center relative overflow-hidden"><img src={_0xd8d4d.qrCode} alt="2FA QR Code" className="w-full h-full object-contain rounded" /></div> : <div className="w-40 h-40 bg-surface-overlay rounded-lg border-2 border-border-strong shadow-lg flex items-center justify-center"><div className="text-text-muted text-xs text-center">{_0x930ce8(_0x4fa386 ? "twoFAEnable.qrCodeLoading" : "twoFAEnable.qrCodeFailed")}</div></div>}<p className="text-xs text-text-tertiary text-center mt-2">{_0x930ce8("twoFAEnable.scanQRCode")}</p></div><div className="flex-1 min-w-0 space-y-4"><div className="text-center md:text-left"><div className="flex items-center justify-center md:justify-start gap-2 mb-2"><div className="h-px bg-surface-inset flex-1" /><span className="text-xs text-text-tertiary px-2">{_0x930ce8("twoFAEnable.or")}</span><div className="h-px bg-surface-inset flex-1" /></div><label className="text-sm font-medium text-text-secondary block">{_0x930ce8("twoFAEnable.enterSetupKeyManually")}</label><p className="text-xs text-text-tertiary mt-1">{_0x930ce8("twoFAEnable.cantScanQR")}</p></div><div className="relative"><input type="text" value={_0xd8d4d.secret || ""} readOnly={true} className="w-full text-sm text-text-secondary font-mono rounded-xl bg-surface-inset/40 border border-border-subtle py-2 pl-10 pr-10 focus:outline-none focus:border-blue-500/50 transition-colors" /><_0xedadfd className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" /><button onClick={_0x4c3e3a} disabled={!_0xd8d4d.secret} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-text-tertiary hover:text-blue-400 hover:bg-blue-500/10 rounded transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg></button></div></div></div><div className="space-y-3"><div className="text-center"><label className="text-sm font-medium text-text-secondary block mb-2">{_0x930ce8("twoFAEnable.verificationCode")}</label><p className="text-xs text-text-tertiary">{_0x930ce8("twoFAEnable.enterAppCode")}</p></div><div className="flex justify-center"><div className="bg-surface-inset/40 border border-border-subtle rounded-xl p-4"><_0x549fa0 maxLength={6} value={_0xc53c69} onChange={_0x28d4fe}><_0x49afed>{Array.from({
                          length: 3
                        }, (_0x238647, _0x41c69d) => <_0x36140d index={_0x41c69d} className="w-12 h-12 text-lg font-semibold border-border-strong bg-surface-inset/50 hover:bg-surface-inset/50 focus:bg-surface-inset/50 focus:border-blue-500/50 transition-colors" key={_0x41c69d} />)}</_0x49afed><_0x3d71b1 className="mx-2 text-text-muted" /><_0x49afed>{Array.from({
                          length: 3
                        }, (_0x217b05, _0x41b78e) => <_0x36140d index={_0x41b78e + 3} className="w-12 h-12 text-lg font-semibold border-border-strong bg-surface-inset/50 hover:bg-surface-inset/50 focus:bg-surface-inset/50 focus:border-blue-500/50 transition-colors" key={_0x41b78e + 3} />)}</_0x49afed></_0x549fa0></div></div><p className="text-xs text-text-muted text-center">{_0x930ce8("twoFAEnable.clickActivateAfterCode")}</p></div><p className="text-xs text-text-muted text-center">{_0x930ce8("twoFAEnable.activateSecurityNote")}</p></div> : <div className="space-y-4"><div className="p-4 rounded-xl border border-green-500/20 bg-green-500/5"><div className="flex items-start gap-3"><div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/30"><_0x146e24 className="w-4 h-4 text-green-400" /></div><div className="flex-1"><h3 className="text-sm font-semibold text-green-200 mb-1">{_0x930ce8("twoFAEnable.emailVerificationTitle")}</h3><p className="text-xs text-green-300/80 leading-relaxed">{_0x930ce8("twoFAEnable.emailVerificationDesc")}</p></div></div></div><div className="space-y-3"><div className="text-center"><label className="text-sm font-medium text-text-secondary block mb-2">{_0x930ce8("twoFAEnable.verificationCode")}</label><p className="text-xs text-text-tertiary">{_0x930ce8("twoFAEnable.enterEmailCode")}</p></div><div className="flex justify-center"><div className="bg-surface-inset/40 border border-border-subtle rounded-xl p-4"><_0x549fa0 maxLength={6} value={_0xc53c69} onChange={_0x28d4fe}><_0x49afed>{Array.from({
                          length: 3
                        }, (_0x299a5c, _0xf8deb5) => <_0x36140d index={_0xf8deb5} className="w-12 h-12 text-lg font-semibold border-border-strong bg-surface-inset/50 hover:bg-surface-inset/50 focus:bg-surface-inset/50 focus:border-green-500/50 transition-colors" key={_0xf8deb5} />)}</_0x49afed><_0x3d71b1 className="mx-2 text-text-muted" /><_0x49afed>{Array.from({
                          length: 3
                        }, (_0x2a55e0, _0x32e807) => <_0x36140d index={_0x32e807 + 3} className="w-12 h-12 text-lg font-semibold border-border-strong bg-surface-inset/50 hover:bg-surface-inset/50 focus:bg-surface-inset/50 focus:border-green-500/50 transition-colors" key={_0x32e807 + 3} />)}</_0x49afed></_0x549fa0></div></div><div className="text-center space-y-2"><p className="text-xs text-text-muted">{_0x930ce8("twoFAEnable.codeExpiresIn", {
                      minutes: _0xd8d4d.expiresIn ? Math.floor(_0xd8d4d.expiresIn / 60) : 5
                    })}</p><button onClick={_0x8fcc1d} disabled={_0x4fa386} className="text-xs text-text-tertiary hover:text-text-secondary underline transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">{_0x930ce8(_0x4fa386 ? "twoFAEnable.sendingCode" : "twoFAEnable.resend")}</button></div></div><p className="text-xs text-text-muted text-center">{_0x930ce8("twoFAEnable.activateSecurityNote")}</p></div> : <div className="space-y-4"><div onClick={() => !_0x4fa386 && _0x5bb1ca("app")} className={"p-4 rounded-xl border border-border-subtle bg-surface-inset/40 hover:bg-interactive-muted transition-colors group " + (_0x4fa386 ? "opacity-50 cursor-not-allowed" : "cursor-pointer")}><div className="flex items-center gap-3"><div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 group-hover:bg-blue-500/30 transition-colors">{_0x4fa386 && _0x375d16 === "app" ? <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" /> : <_0x8dc03f className="w-5 h-5 text-blue-400" />}</div><div className="flex-1"><div className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">{_0x930ce8(_0x4fa386 && _0x375d16 === "app" ? "twoFAEnable.setupStarting" : "twoFAEnable.getCodeViaApp")}</div><div className="text-xs text-text-tertiary mt-0.5">{_0x930ce8("twoFAEnable.appExamples")}</div></div>{!_0x4fa386 && <_0x4bcbba className="w-4 h-4 text-text-tertiary group-hover:text-text-secondary transition-colors" />}</div></div><div onClick={() => !_0x4fa386 && _0x5bb1ca("email")} className={"p-4 rounded-xl border border-border-subtle bg-surface-inset/40 hover:bg-interactive-muted transition-colors group " + (_0x4fa386 ? "opacity-50 cursor-not-allowed" : "cursor-pointer")}><div className="flex items-center gap-3"><div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-500/20 border border-green-500/30 group-hover:bg-green-500/30 transition-colors">{_0x4fa386 && _0x375d16 === "email" ? <div className="w-5 h-5 border-2 border-green-400 border-t-transparent rounded-full animate-spin" /> : <_0x146e24 className="w-5 h-5 text-green-400" />}</div><div className="flex-1"><div className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">{_0x930ce8(_0x4fa386 && _0x375d16 === "email" ? "twoFAEnable.sendingCode" : "twoFAEnable.getCodeViaEmail")}</div><div className="text-xs text-text-tertiary mt-0.5">{_0x930ce8("twoFAEnable.emailCodeDesc")}</div></div>{!_0x4fa386 && <_0x4bcbba className="w-4 h-4 text-text-tertiary group-hover:text-text-secondary transition-colors" />}</div></div></div>}</div>{(_0x16dd68 || _0x37fa4f) && <div className="sticky bottom-0 px-4 py-3 border-t border-border-subtle flex gap-3">{(() => {
              if (_0x37fa4f) {
                return <button onClick={_0x7baa6} className="flex-1 h-10 rounded-xl text-sm font-medium text-text-secondary bg-surface-inset/40 border border-border-subtle hover:bg-interactive-muted transition-colors cursor-pointer">{_0x930ce8("twoFAEnable.close")}</button>;
              }
              if (!_0x16dd68) {
                return null;
              }
              const _0x16097f = _0x16dd68 === "app" ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600";
              return <_0x4eefbe.Fragment><button onClick={_0x16dd68 ? _0x589ca6 : _0x7baa6} disabled={_0x4fa386} className="flex-1 h-10 rounded-xl text-sm font-medium text-text-secondary bg-surface-inset/40 border border-border-subtle hover:bg-interactive-muted transition-colors cursor-pointer disabled:opacity-50">{_0x930ce8("twoFAEnable.goBack")}</button><button onClick={_0x41a6c0} disabled={_0x4fa386 || _0xc53c69.length !== 6} className={"flex-1 h-10 rounded-xl text-sm font-semibold transition-colors cursor-pointer disabled:cursor-not-allowed disabled:bg-surface-inset disabled:text-text-tertiary " + _0x16097f + " text-text-primary"}>{_0x4fa386 ? <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" /> : _0x930ce8("twoFAEnable.activateTwoFA")}</button></_0x4eefbe.Fragment>;
            })()}</div>}</div></div></_0x4c36e8></_0x19c5e3>;
};
export { y as default };