import { t as _0x2d320e, R as _0x32b9ac, b as _0x2211b9, r as _0x5700eb, j as _0x31632a, I as _0x397d25, s as _0x5a9b4e } from "./index-cQfEKR1W.js";
import { D as _0x3b1466, a as _0x43842a, b as _0x26ae60, c as _0x1291d1, d as _0x44c7d7 } from "./dialog-BMMpM7PR.js";
import { f as _0x120e20, P as _0x4c2681, a as _0x5c2e17, b as _0x5a6233, t as _0x30d473 } from "./tr-D975n4_R.js";
import { C as _0x28173f } from "./calendar-2SpD7kOK.js";
import { L as _0x5c6ffe } from "./loader-circle-CTtxa1g9.js";
import _0x5acc4f from "./PasswordInput-B3lf9zf0.js"; /**
                                                     * @license lucide-react v0.535.0 - ISC
                                                     *
                                                     * This source code is licensed under the ISC license.
                                                     * See the LICENSE file in the root directory of this source tree.
                                                     */
const _Component = _0x2d320e("cake", [["path", {
  d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",
  key: "1w3rig"
}], ["path", {
  d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",
  key: "n2jgmb"
}], ["path", {
  d: "M2 21h20",
  key: "1nyx9w"
}], ["path", {
  d: "M7 8v3",
  key: "1qtyvj"
}], ["path", {
  d: "M12 8v3",
  key: "hwp4zt"
}], ["path", {
  d: "M17 8v3",
  key: "1i6e5u"
}], ["path", {
  d: "M7 4h.01",
  key: "1bh4kh"
}], ["path", {
  d: "M12 4h.01",
  key: "1ujb9j"
}], ["path", {
  d: "M17 4h.01",
  key: "1upcoc"
}]]);
const v = _0x32b9ac.memo(({
  isOpen: _0x5213d5,
  onClose: _0x37bf00,
  onSubmit: _0x528f19,
  message: _0x231a48
}) => {
  const {
    t: _0x1b88f1
  } = _0x2211b9();
  const [_0x36a5ab, _0x32147e] = _0x5700eb.useState(undefined);
  const [_0xac2b16, _0x10b8a6] = _0x5700eb.useState(false);
  const [_0x3c72a4, _0x56f66a] = _0x5700eb.useState("");
  const _0xf54e99 = _0x5700eb.useMemo(() => {
    const _0x20c7e0 = new Date();
    _0x20c7e0.setFullYear(_0x20c7e0.getFullYear() - 13);
    return _0x20c7e0;
  }, []);
  const _0x39f9cb = _0x5700eb.useMemo(() => new Date(1900, 0, 1), []);
  _0x32b9ac.useEffect(() => {
    if (_0x36a5ab) {
      _0x56f66a(_0x36a5ab > _0xf54e99 ? _0x1b88f1("auth.ageRestriction") : _0x36a5ab < _0x39f9cb ? _0x1b88f1("auth.invalidBirthDate") : "");
    }
  }, [_0x36a5ab, _0xf54e99, _0x39f9cb, _0x1b88f1]);
  const _0x50143a = _0x5700eb.useMemo(() => _0x36a5ab !== undefined && !_0x3c72a4, [_0x36a5ab, _0x3c72a4]);
  const _0x35b70 = _0x5700eb.useCallback(async () => {
    if (_0x50143a && !_0xac2b16 && _0x36a5ab) {
      _0x10b8a6(true);
      try {
        const _0x2fa920 = _0x120e20(_0x36a5ab, "yyyy-MM-dd");
        await _0x528f19(_0x2fa920);
      } catch {} finally {
        _0x10b8a6(false);
      }
    }
  }, [_0x50143a, _0xac2b16, _0x36a5ab, _0x528f19]);
  const _0x538cc4 = _0x5700eb.useCallback(() => {
    _0x37bf00();
    _0x32147e(undefined);
    _0x56f66a("");
    _0x10b8a6(false);
  }, [_0x37bf00]);
  return <_0x3b1466 open={_0x5213d5} onOpenChange={_0x2f691d => !_0x2f691d && _0x538cc4()}><_0x43842a className="p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md overflow-hidden"><div className="p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40"><div className="bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col"><_0x26ae60 className="px-6 pt-6 pb-4 text-center"><div className="mx-auto mb-4 size-14 rounded-2xl flex items-center justify-center" style={{
              backgroundColor: "rgba(var(--accent-primary-rgb, 173 255 8) / 0.08)"
            }}><_Component className="size-7" style={{
                color: "var(--accent-primary-text, #adff08)"
              }} /></div><_0x1291d1 className="text-xl font-semibold text-text-primary">{_0x1b88f1("auth.google.birthDateTitle")}</_0x1291d1><_0x44c7d7 className="text-text-tertiary text-sm mt-2">{_0x231a48 || _0x1b88f1("auth.google.birthDateDescription")}</_0x44c7d7></_0x26ae60><div className="px-6 pb-6 flex flex-col gap-4"><div className="grid gap-2"><label className="text-sm font-medium text-text-secondary">{_0x1b88f1("auth.birthDate")}<span className="text-red-500/90 ml-0.5">*</span></label><_0x4c2681><_0x5c2e17 asChild={true}><button type="button" className={_0x5a9b4e("w-full h-10 px-3 flex items-center gap-2 rounded-lg border border-border bg-surface-inset/40 text-sm text-left transition-colors hover:bg-surface-inset/60", !_0x36a5ab && "text-text-muted")}><_0x397d25 icon="solar:calendar-bold-duotone" className="h-4 w-4 text-text-tertiary shrink-0" />{_0x36a5ab ? _0x36a5ab.toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    }) : _0x1b88f1("auth.selectDate")}</button></_0x5c2e17><_0x5a6233 className="w-auto p-0"><_0x28173f locale={_0x30d473} mode="single" captionLayout="dropdown" selected={_0x36a5ab} onSelect={_0x32147e} disabled={{
                    before: _0x39f9cb
                  }} fromYear={1900} toDate={_0xf54e99} initialFocus={true} /></_0x5a6233></_0x4c2681>{_0x3c72a4 && <p className="text-sm text-destructive px-1">{_0x3c72a4}</p>}</div></div><div className="px-6 py-4 border-t border-border-subtle"><div className="flex items-center gap-3"><button onClick={_0x538cc4} className="flex-1 h-11 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer">{_0x1b88f1("common.cancel")}</button><button onClick={_0x35b70} disabled={!_0x50143a || _0xac2b16} className="flex-1 h-11 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer">{_0xac2b16 ? <_0x31632a.Fragment><_0x5c6ffe className="size-4 animate-spin" />{_0x1b88f1("auth.google.submitting")}</_0x31632a.Fragment> : _0x1b88f1("auth.google.continue")}</button></div></div></div></div></_0x43842a></_0x3b1466>;
});
const k = _0x32b9ac.memo(({
  isOpen: _0x5707c8,
  onClose: _0xe0833e,
  onSubmit: _0x5bcc3c,
  message: _0xa3cca9
}) => {
  const {
    t: _0x23f8c2
  } = _0x2211b9();
  const [_0x2f0200, _0x4209a3] = _0x5700eb.useState("");
  const [_0x1f7094, _0x3c85e3] = _0x5700eb.useState(false);
  const [_0x2e324d, _0x2cd626] = _0x5700eb.useState("");
  const _0xbdba04 = _0x5700eb.useMemo(() => _0x2f0200.trim().length > 0, [_0x2f0200]);
  const _0x5ab851 = _0x5700eb.useCallback(_0x256941 => {
    _0x4209a3(_0x256941.target.value);
    if (_0x2e324d) {
      _0x2cd626("");
    }
  }, [_0x2e324d]);
  const _0x25e9ab = _0x5700eb.useCallback(async () => {
    if (_0xbdba04 && !_0x1f7094) {
      _0x3c85e3(true);
      _0x2cd626("");
      try {
        await _0x5bcc3c(_0x2f0200);
      } catch (_0xcfed68) {
        const _0x3dc2c6 = _0xcfed68?.response?.status;
        const _0x1eb547 = _0xcfed68?.response?.data?.code;
        const _0x4a088e = _0xcfed68?.response?.data?.message;
        if (_0x3dc2c6 === 401 && _0x1eb547 === "INVALID_PASSWORD") {
          _0x2cd626(_0x4a088e || _0x23f8c2("auth.google.invalidPassword"));
        } else if (_0x4a088e) {
          _0x2cd626(_0x4a088e);
        }
      } finally {
        _0x3c85e3(false);
      }
    }
  }, [_0xbdba04, _0x1f7094, _0x2f0200, _0x5bcc3c, _0x23f8c2]);
  const _0x28bde1 = _0x5700eb.useCallback(_0x3bf987 => {
    if (_0x3bf987.key === "Enter") {
      _0x25e9ab();
    }
  }, [_0x25e9ab]);
  const _0xcfbe1b = _0x5700eb.useCallback(() => {
    _0xe0833e();
    _0x4209a3("");
    _0x2cd626("");
    _0x3c85e3(false);
  }, [_0xe0833e]);
  return <_0x3b1466 open={_0x5707c8} onOpenChange={_0x22a872 => !_0x22a872 && _0xcfbe1b()}><_0x43842a className="p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-md overflow-hidden"><div className="p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40"><div className="bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col"><_0x26ae60 className="px-6 pt-6 pb-4"><div className="flex items-start gap-4"><div className="size-12 rounded-2xl flex items-center justify-center shrink-0" style={{
                backgroundColor: "rgba(var(--accent-primary-rgb, 173 255 8) / 0.08)"
              }}><_0x397d25 icon="solar:link-bold-duotone" className="size-6" style={{
                  color: "var(--accent-primary-text, #adff08)"
                }} /></div><div className="text-left"><_0x1291d1 className="text-lg font-semibold text-text-primary">{_0x23f8c2("auth.google.linkTitle")}</_0x1291d1><_0x44c7d7 className="text-text-tertiary text-sm mt-1">{_0xa3cca9 || _0x23f8c2("auth.google.linkDescription")}</_0x44c7d7></div></div></_0x26ae60><div className="px-6 pb-6 flex flex-col gap-4"><div className="grid gap-2"><label className="text-sm font-medium text-text-secondary">{_0x23f8c2("auth.password")}<span className="text-red-500/90 ml-0.5">*</span></label><_0x5acc4f value={_0x2f0200} onChange={_0x5ab851} onKeyDown={_0x28bde1} placeholder={_0x23f8c2("auth.google.linkPasswordPlaceholder")} autoComplete="current-password" autoFocus={true} className={_0x2e324d ? "border-destructive" : ""} />{_0x2e324d && <p className="text-sm text-destructive px-1">{_0x2e324d}</p>}</div></div><div className="px-6 py-4 border-t border-border-subtle"><div className="flex items-center gap-3"><button onClick={_0xcfbe1b} className="flex-1 h-11 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer">{_0x23f8c2("common.cancel")}</button><button onClick={_0x25e9ab} disabled={!_0xbdba04 || _0x1f7094} className="flex-1 h-11 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer">{_0x1f7094 ? <_0x31632a.Fragment><_0x5c6ffe className="size-4 animate-spin" />{_0x23f8c2("auth.google.linking")}</_0x31632a.Fragment> : _0x23f8c2("auth.google.linkConfirm")}</button></div></div></div></div></_0x43842a></_0x3b1466>;
});
export { v as G, k as a };