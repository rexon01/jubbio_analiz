import { b as _0x25b6bb, r as _0x796898, P as _0x4829a1, j as _0x138953, aT as _0x34e9a5, I as _0x1a524f } from "./index-cQfEKR1W.js";
import { I as _0xffcf3a, a as _0x1a1131, b as _0x523a86, c as _Component } from "./input-otp-BJ3P97wC.js";
import { D as _0x5dfb10, a as _0x1e7d9e, c as _0x199aa4, d as _0x432c01 } from "./dialog-BMMpM7PR.js";
import { V as _0x1d3d89 } from "./index-Oyyh46KT.js";
import { s as _0x3bbfc9, a as _0x3317e6 } from "./2fa-BVSDQ2X9.js";
import { E as _0x57b911 } from "./refresh-cw-C3NlhmpS.js";
import { E as _0x5441ea } from "./eye-CZP2GlMx.js";
import "./minus-DgcuZCwQ.js";
import "./index-yuEHo9bu.js";
const g = ({
  isOpen: _0x49074a,
  onClose: _0x592737,
  onDelete: _0x5b371a,
  twoFactorType: _0x15a437
}) => {
  const {
    t: _0x59729c
  } = _0x25b6bb("privacy");
  const [_0x3126e4, _0x4e4dfd] = _0x796898.useState("");
  const [_0x14c249, _0x3b6b3c] = _0x796898.useState("");
  const [_0x2d23c3, _0x3861d8] = _0x796898.useState(false);
  const [_0x20fc3c, _0x39c433] = _0x796898.useState(false);
  const [_0x5d80da, _0x5bfd0a] = _0x796898.useState(0);
  const [_0x1c1782, _0x1b69d4] = _0x796898.useState(false);
  const [_0x3d1603, _0x1108f8] = _0x796898.useState(false);
  const [_0x18dee7, _0x897070] = _0x796898.useState("");
  const _0x34645c = _0x796898.useCallback(async () => {
    if (!(_0x5d80da > 0)) {
      try {
        _0x39c433(true);
        await _0x3bbfc9();
        _0x5bfd0a(90);
      } catch {} finally {
        _0x39c433(false);
      }
    }
  }, [_0x5d80da]);
  _0x796898.useEffect(() => {
    if (_0x49074a && _0x15a437 === "email") {
      _0x34645c();
    }
  }, [_0x49074a, _0x15a437, _0x34645c]);
  _0x796898.useEffect(() => {
    if (_0x5d80da > 0) {
      const _0x18243c = setTimeout(() => {
        _0x5bfd0a(_0x5d80da - 1);
      }, 1000);
      return () => clearTimeout(_0x18243c);
    }
  }, [_0x5d80da]);
  const _0x55a6c8 = _0x796898.useCallback(() => {
    _0x592737();
    _0x4e4dfd("");
    _0x3b6b3c("");
    _0x3861d8(false);
    _0x39c433(false);
    _0x5bfd0a(0);
    _0x1b69d4(false);
    _0x1108f8(false);
    _0x897070("");
  }, [_0x592737]);
  const _0x45dc82 = _0x796898.useCallback(async () => {
    if (_0x3126e4.trim()) {
      if (_0x15a437) {
        const _0xe2d035 = _0x3d1603 ? _0x18dee7 : _0x14c249;
        const _0x25543b = _0x3d1603 ? 8 : 6;
        if (!_0xe2d035 || _0xe2d035.length !== _0x25543b) {
          _0x4829a1.error(_0x59729c("deleteAccountModal.enterDigitCode", {
            length: _0x25543b,
            type: _0x59729c(_0x3d1603 ? "deleteAccountModal.backupType" : "deleteAccountModal.verificationType")
          }));
          return;
        }
      }
      try {
        _0x3861d8(true);
        const _0x10dd8a = _0x15a437 ? _0x3d1603 ? _0x18dee7 : _0x14c249 : undefined;
        await _0x3317e6(_0x3126e4, _0x10dd8a);
        _0x5b371a();
        _0x55a6c8();
      } catch {} finally {
        _0x3861d8(false);
      }
    } else {
      _0x4829a1.error(_0x59729c("deleteAccountModal.enterPasswordFirst"));
    }
  }, [_0x3126e4, _0x14c249, _0x18dee7, _0x3d1603, _0x15a437, _0x5b371a, _0x55a6c8, _0x59729c]);
  const _0x25fb5f = _0x796898.useMemo(() => "w-10 h-12 text-lg font-semibold border-border-strong bg-surface-inset/50 hover:bg-surface-inset/50 focus:bg-surface-inset/50 focus:border-red-500/50 transition-colors", []);
  const _0x429c68 = _0x796898.useMemo(() => "w-12 h-12 text-lg font-semibold border-border-strong bg-surface-inset/50 hover:bg-surface-inset/50 focus:bg-surface-inset/50 transition-colors " + (_0x15a437 === "email" ? "focus:border-green-500/50" : "focus:border-red-500/50"), [_0x15a437]);
  const _0x5a6803 = _0x3126e4.trim().length > 0 && (!_0x15a437 || (_0x3d1603 ? _0x18dee7.length === 8 : _0x14c249.length === 6));
  return <_0x5dfb10 open={_0x49074a} onOpenChange={_0x55a6c8}><_0x1e7d9e className="p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md overflow-hidden"><_0x1d3d89><_0x199aa4>{_0x59729c("deleteAccountModal.title")}</_0x199aa4><_0x432c01>{_0x59729c("deleteAccountModal.description")}</_0x432c01></_0x1d3d89><div className="p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40"><div className="bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col max-h-[90vh]"><div className="px-4 py-4 border-b border-border-subtle"><h2 className="text-lg font-semibold text-text-primary">{_0x59729c("deleteAccountModal.title")}</h2><p className="text-sm text-text-tertiary mt-1">{_0x59729c("deleteAccountModal.description")}</p></div><div className="px-4 py-4 overflow-y-auto scrollbar-thin scrollbar-track-surface-overlay/50 scrollbar-thumb-border-strong/70 hover:scrollbar-thumb-border-strong/80 scrollbar-thumb-rounded-full"><form onSubmit={_0x3b20e2 => {
              _0x3b20e2.preventDefault();
              _0x45dc82();
            }} className="space-y-5"><input type="email" autoComplete="email" style={{
                position: "absolute",
                left: "-9999px",
                opacity: 0,
                pointerEvents: "none"
              }} tabIndex={-1} aria-hidden="true" /><div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5"><div className="flex items-start gap-3"><div className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/30"><_0x34e9a5 className="w-4 h-4 text-red-400" /></div><div className="flex-1"><h3 className="text-sm font-semibold text-red-200 mb-1">{_0x59729c("deleteAccountModal.criticalWarning")}</h3><p className="text-xs text-red-300/80 leading-relaxed">{_0x59729c(_0x15a437 ? "deleteAccountModal.criticalWarningDesc2FA" : "deleteAccountModal.criticalWarningDesc")}</p></div></div></div><div className="space-y-2"><label className="text-sm font-medium text-text-secondary">{_0x59729c("deleteAccountModal.accountPassword")}</label><div className="relative"><input type={_0x1c1782 ? "text" : "password"} value={_0x3126e4} onChange={_0x1df79a => _0x4e4dfd(_0x1df79a.target.value)} placeholder={_0x59729c("deleteAccountModal.enterPassword")} className="w-full h-10 rounded-xl bg-surface-inset/40 border border-border-subtle text-text-secondary placeholder:text-text-muted px-3 pr-10 text-sm focus:outline-none focus:border-red-500/50 transition-colors" disabled={_0x2d23c3} required={true} autoComplete="current-password" /><button type="button" onClick={() => _0x1b69d4(!_0x1c1782)} className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-secondary transition-colors" disabled={_0x2d23c3}>{_0x1c1782 ? <_0x57b911 className="w-4 h-4" /> : <_0x5441ea className="w-4 h-4" />}</button></div></div>{_0x15a437 && <div className="space-y-3"><div className="text-center"><label className="text-sm font-medium text-text-secondary block mb-2">{_0x59729c(_0x3d1603 ? "deleteAccountModal.backupCode" : "deleteAccountModal.twoFAVerificationCode")}</label><p className="text-xs text-text-tertiary">{_0x15a437 === "app" ? _0x3d1603 ? _0x59729c("deleteAccountModal.enterBackupCode") : <_0x138953.Fragment>{_0x59729c("deleteAccountModal.enterAppCode")} <button type="button" onClick={() => {
                        _0x1108f8(!_0x3d1603);
                        _0x3b6b3c("");
                        _0x897070("");
                      }} className="text-xs text-text-tertiary hover:text-text-secondary underline transition-colors">{_0x59729c("deleteAccountModal.useBackupCode")}</button></_0x138953.Fragment> : <_0x138953.Fragment>{_0x59729c("deleteAccountModal.enterEmailCode")} <button type="button" onClick={_0x34645c} disabled={_0x20fc3c || _0x5d80da > 0} className="text-xs text-text-tertiary hover:text-text-secondary underline transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">{_0x20fc3c ? _0x59729c("deleteAccountModal.sending") : _0x5d80da > 0 ? _0x59729c("deleteAccountModal.resendCooldown", {
                          seconds: _0x5d80da
                        }) : _0x59729c("deleteAccountModal.resend")}</button></_0x138953.Fragment>}{_0x15a437 === "app" && _0x3d1603 && <_0x138953.Fragment> <button type="button" onClick={() => {
                        _0x1108f8(!_0x3d1603);
                        _0x3b6b3c("");
                        _0x897070("");
                      }} className="text-xs text-text-tertiary hover:text-text-secondary underline transition-colors">{_0x59729c("deleteAccountModal.useNormalCode")}</button></_0x138953.Fragment>}</p></div><div className="flex justify-center"><div className="bg-surface-inset/40 border border-border-subtle rounded-xl p-4">{_0x3d1603 ? <_0xffcf3a maxLength={8} value={_0x18dee7} onChange={_0x897070}><_0x1a1131>{Array.from({
                          length: 4
                        }, (_0x20f442, _0x1a80dc) => <_0x523a86 index={_0x1a80dc} className={_0x25fb5f} key={_0x1a80dc} />)}</_0x1a1131><_Component className="mx-2 text-text-muted" /><_0x1a1131>{Array.from({
                          length: 4
                        }, (_0x17a8b6, _0x847f5b) => <_0x523a86 index={_0x847f5b + 4} className={_0x25fb5f} key={_0x847f5b + 4} />)}</_0x1a1131></_0xffcf3a> : <_0xffcf3a maxLength={6} value={_0x14c249} onChange={_0x3b6b3c}><_0x1a1131>{Array.from({
                          length: 3
                        }, (_0x2860b3, _0x17b2eb) => <_0x523a86 index={_0x17b2eb} className={_0x429c68} key={_0x17b2eb} />)}</_0x1a1131><_Component className="mx-2 text-text-muted" /><_0x1a1131>{Array.from({
                          length: 3
                        }, (_0x593200, _0x2f6d40) => <_0x523a86 index={_0x2f6d40 + 3} className={_0x429c68} key={_0x2f6d40 + 3} />)}</_0x1a1131></_0xffcf3a>}</div></div></div>}<p className="text-xs text-text-muted text-center">{_0x59729c("deleteAccountModal.deleteWarning")}</p></form></div><div className="sticky bottom-0 px-4 py-3 border-t border-border-subtle flex gap-3"><button onClick={_0x55a6c8} disabled={_0x2d23c3} className="flex-1 h-10 rounded-xl text-sm font-medium text-text-secondary bg-surface-inset/40 border border-border-subtle hover:bg-interactive-muted transition-colors cursor-pointer disabled:opacity-50">{_0x59729c("common.cancel", {
                ns: "translation"
              })}</button><button onClick={_0x45dc82} disabled={_0x2d23c3 || !_0x5a6803 || _0x20fc3c} className="flex-1 h-10 rounded-xl text-sm font-semibold transition-colors cursor-pointer disabled:cursor-not-allowed disabled:bg-surface-inset disabled:text-text-tertiary bg-red-500 hover:bg-red-600 text-text-primary">{_0x2d23c3 ? <div className="flex items-center justify-center gap-2"><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />{_0x59729c("deleteAccountModal.deleting")}</div> : _0x20fc3c ? _0x59729c("deleteAccountModal.sendingCode") : <div className="flex items-center justify-center gap-2"><_0x1a524f icon="solar:trash-bin-trash-bold-duotone" className="size-4" />{_0x59729c("deleteAccountModal.deletePermanently")}</div>}</button></div></div></div></_0x1e7d9e></_0x5dfb10>;
};
export { g as default };