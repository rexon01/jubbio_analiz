const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./index-cQfEKR1W.js", "./index-Cm--a4Hl.css"]) => i.map(i => d[i]);
import { r as _0x443735, bC as _0x4afefd, bS as _0x4ef86e, eT as _0x9c234e, b as _0x4c0679, bD as _0x2051e7, P as _0x29c3d3, j as _0x1061d3, I as _0x2f1d5d, _ as _0x3fa5fe } from "./index-cQfEKR1W.js";
import { S as _0x3cb70f } from "./separator-Ba6vNTx4.js";
import { S as _0x10d52c, a as _0x1fb350, b as _0x322a1f, c as _0x2abc7d, d as _0x138e01 } from "./select-DQjjzSZW.js";
import "./index-Oyyh46KT.js";
const h = {
  "🇹🇷": "TR",
  "🇬🇧": "GB",
  "🇦🇿": "AZ",
  "🇺🇿": "UZ"
};
const _Component = _0x443735.lazy(() => _0x3fa5fe(() => import("./index-cQfEKR1W.js").then(_0xd46a32 => _0xd46a32.fz), __vite__mapDeps([0, 1]), import.meta.url).then(_0x1db92d => ({
  default: _0x443735.memo(({
    native: _0x563d69,
    size: _0x5cdccf = 20
  }) => {
    const _0x565043 = "/twemoji-sheet-64.png";
    const _0x3eedba = _0x1db92d.SHEET_COLUMNS * 100 + "% " + _0x1db92d.SHEET_ROWS * 100 + "%";
    const [_0x1326e2, _0x4839ee] = _0x443735.useState(() => _0x1db92d.getSpriteSheetUrl(_0x565043));
    _0x443735.useEffect(() => _0x1db92d.onSpriteReady(_0x565043, _0x2fd08b => _0x4839ee(_0x2fd08b)), []);
    const _0x2d3918 = _0x1db92d.emojiByNative.get(_0x563d69);
    if (!_0x2d3918) {
      return <span className="text-base">{_0x563d69}</span>;
    }
    const _0xfbb8a2 = _0x1db92d.getBackgroundPosition(_0x2d3918.sheetX, _0x2d3918.sheetY);
    return <span role="img" aria-label={_0x2d3918.shortName} style={{
      display: "inline-block",
      width: _0x5cdccf,
      height: _0x5cdccf,
      backgroundImage: "url(" + _0x1326e2 + ")",
      backgroundSize: _0x3eedba,
      backgroundPosition: _0xfbb8a2
    }} />;
  })
})));
const _Component2 = _0x443735.memo(({
  native: _0x34eb98,
  size: _0xd9b8b2 = 20
}) => <_0x443735.Suspense fallback={<span className="text-xs font-semibold text-text-tertiary" style={{
  width: _0xd9b8b2,
  height: _0xd9b8b2,
  lineHeight: _0xd9b8b2 + "px",
  textAlign: "center",
  display: "inline-block"
}}>{h[_0x34eb98] ?? _0x34eb98}</span>}><_Component native={_0x34eb98} size={_0xd9b8b2} /></_0x443735.Suspense>);
_Component2.displayName = "FlagIcon";
const _Component3 = _0x443735.memo(({
  format: _0x1b12ce
}) => {
  const _0x37224b = new Date();
  const _0x493995 = _0x37224b.getHours();
  const _0x59ac32 = _0x37224b.getMinutes().toString().padStart(2, "0");
  const _0x2b8902 = _0x1b12ce === "12h" ? (_0x493995 % 12 || 12) + ":" + _0x59ac32 + " " + (_0x493995 >= 12 ? "PM" : "AM") : _0x493995.toString().padStart(2, "0") + ":" + _0x59ac32;
  return <div className="flex items-center justify-center h-[125px] rounded-lg bg-surface-base border border-border-default"><span className="text-3xl font-mono font-semibold text-text-secondary tabular-nums">{_0x2b8902}</span></div>;
});
_Component3.displayName = "ClockPreview";
const j = [{
  value: "tr",
  label: "Türkçe",
  flag: "🇹🇷",
  isDefault: true
}, {
  value: "en",
  label: "English",
  flag: "🇬🇧"
}, {
  value: "az",
  label: "Azərbaycan Türkcəsi",
  flag: "🇦🇿"
}, {
  value: "uz",
  label: "O'zbekcha",
  flag: "🇺🇿"
}];
const N = _0x443735.memo(_0x443735.forwardRef(({
  onDirtyChange: _0x18fa8d
}, _0x4ba848) => {
  const _0x48acb9 = _0x4afefd(_0x4ef86e(_0x9c234e));
  const _0x2cc260 = _0x4afefd(_0x3494ff => _0x3494ff.setAppearanceSettings);
  const {
    t: _0x288fbd,
    i18n: _0xd172cb
  } = _0x4c0679();
  const _0x4b2eca = _0x443735.useRef(_0x18fa8d);
  _0x4b2eca.current = _0x18fa8d;
  const [_0x5a86f1, _0x284230] = _0x443735.useState(_0x48acb9.language ?? "tr");
  const [_0x4d01e6, _0x5340da] = _0x443735.useState(_0x48acb9.clockFormat ?? "24h");
  const [_0x3819b9, _0x53d190] = _0x443735.useState(_0x48acb9);
  _0x443735.useEffect(() => {
    _0xd172cb.changeLanguage(_0x5a86f1);
    localStorage.setItem("app-language", _0x5a86f1);
  }, [_0x5a86f1, _0xd172cb]);
  _0x443735.useEffect(() => {
    _0x284230(_0x48acb9.language ?? "tr");
    _0x5340da(_0x48acb9.clockFormat ?? "24h");
    _0x53d190(_0x48acb9);
  }, [_0x48acb9]);
  _0x443735.useEffect(() => {
    const _0x82a705 = _0x5a86f1 !== (_0x3819b9.language ?? "tr") || _0x4d01e6 !== (_0x3819b9.clockFormat ?? "24h");
    _0x4b2eca.current?.(_0x82a705);
  }, [_0x5a86f1, _0x4d01e6, _0x3819b9]);
  const _0x39c11f = _0x443735.useCallback(() => {
    const _0x17176b = {};
    if (_0x5a86f1 !== (_0x3819b9.language ?? "tr")) {
      _0x17176b.language = _0x5a86f1;
    }
    if (_0x4d01e6 !== (_0x3819b9.clockFormat ?? "24h")) {
      _0x17176b.clockFormat = _0x4d01e6;
    }
    return _0x17176b;
  }, [_0x5a86f1, _0x4d01e6, _0x3819b9]);
  const _0x3c6bc2 = _0x443735.useCallback(_0xf55694 => {
    _0x53d190(_0xf55694);
    _0x284230(_0xf55694.language ?? "tr");
    _0x5340da(_0xf55694.clockFormat ?? "24h");
  }, []);
  const _0x2782e7 = _0x443735.useCallback(() => {
    _0x284230(_0x3819b9.language ?? "tr");
    _0x5340da(_0x3819b9.clockFormat ?? "24h");
  }, [_0x3819b9]);
  const _0x390b7d = _0x443735.useCallback(async () => {
    const _0x511a10 = _0x39c11f();
    if (Object.keys(_0x511a10).length === 0) {
      return false;
    }
    try {
      await _0x2051e7.updateAppearanceSettings(_0x511a10);
      _0x2cc260(_0x511a10);
      _0x53d190(_0x1a1dfb => ({
        ..._0x1a1dfb,
        ..._0x511a10
      }));
      return true;
    } catch (_0x2ce102) {
      console.error("Failed to save language & time settings:", _0x2ce102);
      _0x29c3d3.error(_0x288fbd("languageTime.saveFailed"));
      return false;
    }
  }, [_0x39c11f, _0x2cc260, _0x288fbd]);
  _0x443735.useImperativeHandle(_0x4ba848, () => ({
    getValues: _0x39c11f,
    markPristine: _0x3c6bc2,
    reset: _0x2782e7,
    save: _0x390b7d
  }), [_0x39c11f, _0x3c6bc2, _0x2782e7, _0x390b7d]);
  const _0x3655c2 = _0x443735.useMemo(() => j.find(_0x454112 => _0x454112.value === _0x5a86f1), [_0x5a86f1]);
  const _0x387f7b = _0x443735.useMemo(() => [{
    value: "24h",
    label: _0x288fbd("languageTime.clock24"),
    desc: _0x288fbd("languageTime.clock24Desc"),
    isDefault: true
  }, {
    value: "12h",
    label: _0x288fbd("languageTime.clock12"),
    desc: _0x288fbd("languageTime.clock12Desc")
  }], [_0x288fbd]);
  return <div className="space-y-8"><section><div className="mb-4 sm:mb-5"><div className="flex items-center gap-2"><_0x2f1d5d icon="solar:global-bold-duotone" className="size-4 text-text-tertiary" /><div className="text-base font-semibold text-text-secondary">{_0x288fbd("languageTime.language")}</div></div><p className="text-sm text-text-muted mt-0.5">{_0x288fbd("languageTime.languageDesc")}</p></div><_0x10d52c value={_0x5a86f1} onValueChange={_0x33c924 => _0x284230(_0x33c924)}><_0x1fb350 className="w-full h-[52px] min-h-[52px] py-2 px-3 rounded-xl bg-surface-inset/40 border border-border-subtle text-text-primary hover:bg-interactive-muted transition-colors focus:ring-2 focus:ring-accent-primary/30 focus:border-accent-primary/50"><_0x322a1f>{_0x3655c2 && <div className="flex items-center gap-3"><_Component2 native={_0x3655c2.flag} size={24} /><span className="text-sm font-medium text-text-secondary">{_0x3655c2.label}</span></div>}</_0x322a1f></_0x1fb350><_0x2abc7d className="bg-surface-raised/95 border-border-strong/50 backdrop-blur-xl">{j.map(_0x1bcc8b => <_0x138e01 value={_0x1bcc8b.value} className="text-text-primary py-3 px-4 cursor-pointer data-[highlighted]:bg-interactive-hover hover:bg-interactive-hover focus:bg-interactive-hover transition-colors" key={_0x1bcc8b.value}><div className="flex items-center gap-3"><_Component2 native={_0x1bcc8b.flag} size={24} /><span className="text-sm font-medium">{_0x1bcc8b.label}</span></div></_0x138e01>)}</_0x2abc7d></_0x10d52c><p className="text-[11px] text-text-muted mt-2 leading-relaxed">{_0x288fbd("languageTime.translationNotice")} <a href="mailto:language@jubbio.com" className="text-accent-primary-text hover:underline">language@jubbio.com</a></p></section><_0x3cb70f className="bg-surface-overlay/70" /><section><div className="mb-4 sm:mb-5"><div className="flex items-center gap-2"><_0x2f1d5d icon="solar:clock-circle-bold-duotone" className="size-4 text-text-tertiary" /><div className="text-base font-semibold text-text-secondary">{_0x288fbd("languageTime.clockFormat")}</div></div><p className="text-sm text-text-muted mt-0.5">{_0x288fbd("languageTime.clockFormatDesc")}</p></div><div className="flex gap-4"><div className="w-[70%] shrink-0 rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden divide-y divide-border-default">{_0x387f7b.map(_0x5d2776 => {
            const _0x3dc045 = _0x4d01e6 === _0x5d2776.value;
            return <button onClick={() => _0x5340da(_0x5d2776.value)} className={"w-full flex items-center gap-3 px-4 py-3 text-left transition-colors cursor-pointer " + (_0x3dc045 ? "bg-accent-subtle" : "active:bg-interactive-hover")} key={_0x5d2776.value}><div className={"size-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors " + (_0x3dc045 ? "border-accent-primary bg-accent-primary" : "border-border-strong")}>{_0x3dc045 && <div className="size-1.5 rounded-full bg-surface-raised" />}</div><div className="flex-1 min-w-0"><div className="flex items-center gap-2"><span className={"text-sm font-medium leading-none transition-colors " + (_0x3dc045 ? "text-accent-primary-text" : "text-text-secondary")}>{_0x5d2776.label}</span>{"isDefault" in _0x5d2776 && _0x5d2776.isDefault && <span className="text-[10px] font-medium text-text-muted bg-surface-overlay/80 px-1.5 py-0.5 rounded">{_0x288fbd("appearance.default")}</span>}</div><div className="text-[11px] text-text-muted mt-1">{_0x5d2776.desc}</div></div></button>;
          })}</div><div className="w-[30%]"><_Component3 format={_0x4d01e6} /></div></div></section></div>;
}));
N.displayName = "LanguageTimeSettings";
export { N as default };