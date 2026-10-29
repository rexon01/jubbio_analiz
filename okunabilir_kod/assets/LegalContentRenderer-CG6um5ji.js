import { j as _0x3fa542, I as _0x3c2a3c, L as _0xf09f02 } from "./index-cQfEKR1W.js";
const _Component = ({
  item: _0x3e10f1
}) => {
  switch (_0x3e10f1.type) {
    case "paragraph":
      return <p>{_0x3e10f1.text}</p>;
    case "list":
      return <ul className="list-disc list-inside space-y-1.5 ml-2">{_0x3e10f1.items?.map((_0x39aec1, _0x4eb006) => <li key={_0x4eb006}>{_0x39aec1}</li>)}</ul>;
    case "subsection":
      return <div className="space-y-3"><h4 className="text-sm font-medium text-text-secondary">{_0x3e10f1.title}</h4>{_0x3e10f1.content ? <div className="space-y-3 ml-1">{_0x3e10f1.content.map((_0x5c97db, _0x2bd36d) => <_Component item={_0x5c97db} key={_0x2bd36d} />)}</div> : <_0x3fa542.Fragment><ul className="list-disc list-inside space-y-1 ml-2">{_0x3e10f1.items?.map((_0x5caca2, _0x2b109b) => <li key={_0x2b109b}>{_0x5caca2}</li>)}</ul>{_0x3e10f1.note && <div className="flex items-start gap-2 mt-2 p-2.5 rounded-lg bg-blue-500/5 border border-blue-500/10"><_0x3c2a3c icon="solar:info-circle-bold-duotone" className="size-4 text-blue-400 mt-0.5 shrink-0" /><p className="text-xs text-blue-300">{_0x3e10f1.note}</p></div>}</_0x3fa542.Fragment>}</div>;
    case "info":
      return <div className="rounded-lg bg-surface-overlay/50 p-3 space-y-1.5">{_0x3e10f1.items?.map((_0x491456, _0x4ea100) => <div className="flex items-center gap-2 text-sm" key={_0x4ea100}><span className="text-text-tertiary">{_0x491456.label}:</span>{_0x491456.link ? <a href={_0x491456.link} className="text-accent-primary-text hover:text-[#9ee607] underline underline-offset-2">{_0x491456.value}</a> : <span className="text-text-secondary font-medium">{_0x491456.value}</span>}</div>)}</div>;
    case "link":
      return <_0xf09f02 to={_0x3e10f1.href || "#"} className="inline-flex items-center gap-1 text-accent-primary-text hover:text-[#9ee607] underline underline-offset-2">{_0x3e10f1.text}</_0xf09f02>;
    case "warning":
      return <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20"><_0x3c2a3c icon="solar:danger-triangle-bold-duotone" className="size-5 text-red-400 mt-0.5 shrink-0" /><p className="text-red-200">{_0x3e10f1.text}</p></div>;
    case "steps":
      return <ol className="space-y-2 ml-1">{_0x3e10f1.items?.map((_0x335706, _0x4a1d8c) => <li className="flex items-start gap-3" key={_0x4a1d8c}><span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-subtle text-accent-primary-text text-xs font-semibold">{_0x4a1d8c + 1}</span><span className="pt-0.5">{_0x335706}</span></li>)}</ol>;
    case "grid":
      return <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">{_0x3e10f1.items?.map((_0x5732ed, _0xf57b16) => <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-overlay/30" key={_0xf57b16}><div className="size-1.5 rounded-full bg-red-400 shrink-0" /><span>{_0x5732ed}</span></div>)}</div>;
    case "highlight":
      {
        const _0x568dda = {
          green: "bg-green-500/10 border-green-500/20 text-green-200",
          blue: "bg-blue-500/10 border-blue-500/20 text-blue-200",
          red: "bg-red-500/10 border-red-500/20 text-red-200"
        };
        const _0x269523 = {
          green: "text-green-400",
          blue: "text-blue-400",
          red: "text-red-400"
        };
        const _0x1aafd0 = _0x3e10f1.color || "green";
        return <div className={"flex items-start gap-3 p-4 rounded-xl border " + _0x568dda[_0x1aafd0]}><_0x3c2a3c icon="solar:shield-bold-duotone" className={"size-5 mt-0.5 shrink-0 " + _0x269523[_0x1aafd0]} /><p>{_0x3e10f1.text}</p></div>;
      }
    case "danger-list":
      return <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4"><ul className="space-y-2">{_0x3e10f1.items?.map((_0xdff35d, _0x459e4b) => <li className="flex items-start gap-2 text-red-100" key={_0x459e4b}><span className="text-red-400 mt-1">•</span><span>{_0xdff35d}</span></li>)}</ul></div>;
    case "cards":
      return <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{_0x3e10f1.items?.map((_0x3e6da3, _0x45ac2d) => <div className="rounded-xl bg-surface-overlay/50 border border-border-default p-4" key={_0x45ac2d}><h4 className="font-medium text-text-primary mb-2">{_0x3e6da3.title}</h4><p className="text-sm text-text-tertiary">{_0x3e6da3.text}</p>{_0x3e6da3.link && <a href={_0x3e6da3.link.href} className="inline-block mt-2 text-sm text-accent-primary-text hover:text-[#9ee607] underline underline-offset-2">{_0x3e6da3.link.label}</a>}</div>)}</div>;
    default:
      return null;
  }
};
const _Component2 = ({
  section: _0x14d61c
}) => <section id={_0x14d61c.id} className="p-6 scroll-mt-[100px]"><h2 className="text-lg font-semibold text-text-primary mb-4">{_0x14d61c.title}</h2><div className="text-sm text-text-tertiary space-y-3 leading-relaxed">{_0x14d61c.content.map((_0x38e7da, _0x399048) => <_Component item={_0x38e7da} key={_0x399048} />)}</div></section>;
const a = ({
  sections: _0x1713e2
}) => <_0x3fa542.Fragment>{_0x1713e2.map(_0x3b74f0 => <_Component2 section={_0x3b74f0} key={_0x3b74f0.id} />)}</_0x3fa542.Fragment>;
export { a as L };