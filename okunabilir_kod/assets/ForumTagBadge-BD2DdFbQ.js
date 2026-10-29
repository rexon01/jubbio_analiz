import { R as _0x3df73d, j as _0x41a1de, an as _0x5c7fca } from "./index-cQfEKR1W.js";
import { j as _0x4e12fb } from "./soundboardFx-C2LP-Hjs.js";
const r = _0x3df73d.memo(({
  name: _0x1fec2d,
  emoji: _0x58602d,
  color: _0x228917,
  isActive: _0x294e63,
  size: _0x4676bb = "default",
  onClick: _0x53f20c,
  className: _0x4d5b1e = ""
}) => {
  const _0x14f5df = _0x53f20c ? "button" : "span";
  const _0x294106 = _0x4676bb === "small";
  const _0x3953f5 = _0x58602d ? _0x4e12fb(_0x58602d) : "";
  return <_0x14f5df onClick={_0x53f20c} className={"inline-flex items-center rounded-full border border-white/[0.08] text-text-primary whitespace-nowrap transition-all shrink-0 " + (_0x228917 ? "" : "bg-surface-inset/60") + " " + (_0x294106 ? "gap-1.5 text-[11px] font-medium px-2.5 h-[26px]" : "gap-2 text-[13px] font-medium px-3 h-[34px]") + " " + (_0x53f20c ? "cursor-pointer hover:brightness-110" : "") + " " + (_0x294e63 ? "ring-1 ring-white/20" : "") + " " + _0x4d5b1e} style={{
    backgroundColor: _0x228917 ? _0x228917 + "25" : undefined
  }}>{_0x58602d && (_0x3953f5 ? <img src={_0x3953f5} alt={_0x58602d} className={_0x294106 ? "size-3.5" : "size-5"} /> : <span className={_0x294106 ? "text-[11px]" : "text-[14px]"}>{_0x58602d}</span>)}{_0x1fec2d}{_0x294e63 && <_0x5c7fca className={_0x294106 ? "size-3" : "size-3.5"} strokeWidth={3} />}</_0x14f5df>;
});
export { r as F };