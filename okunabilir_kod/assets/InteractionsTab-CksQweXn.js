import { aC as _0x84629f, b as _0x159cad, r as _0x40f150, P as _0x190437, j as _0x563384, I as _0x301824, B as _0x1523a7 } from "./index-cQfEKR1W.js";
import { I as _0x4d3d7b } from "./input-AMyERYwJ.js";
import { L as _0x23158d } from "./label-ODyS97Ju.js";
import { c as _0x12dae7 } from "./clipboard-BQ9qambq.js";
import { n as _0x59bbd3, o as _0x311945 } from "./developer-DCtAQT29.js";
function m() {
  const {
    application: _0xba901d
  } = _0x84629f();
  const {
    t: _0x3a441c
  } = _0x159cad();
  const [_0x518ce4, _0x5595fb] = _0x40f150.useState(null);
  const [_0x4c3d1f, _0x2db411] = _0x40f150.useState(true);
  const [_0x3a0ee3, _0x406663] = _0x40f150.useState("");
  const [_0x28c179, _0x141037] = _0x40f150.useState(false);
  const [_0x3a55ca, _0x347d6f] = _0x40f150.useState(false);
  const [_0x5b3003, _0x322ce1] = _0x40f150.useState(null);
  const _0x34b0c7 = _0x40f150.useCallback(async () => {
    if (_0xba901d?.id) {
      try {
        _0x2db411(true);
        const _0x4ae166 = await _0x59bbd3(_0xba901d.id);
        _0x5595fb(_0x4ae166);
        _0x406663(_0x4ae166.interactions_endpoint_url || "");
      } catch {} finally {
        _0x2db411(false);
      }
    }
  }, [_0xba901d?.id]);
  _0x40f150.useEffect(() => {
    _0x34b0c7();
  }, [_0x34b0c7]);
  const _0x1428da = _0x40f150.useCallback((_0x11f2b7, _0x8332be) => {
    _0x12dae7(_0x11f2b7);
    _0x322ce1(_0x8332be);
    _0x190437.success(_0x3a441c("developer.interactionsTab.copied"));
    setTimeout(() => _0x322ce1(null), 2000);
  }, [_0x3a441c]);
  if (!_0xba901d) {
    return <div className="flex items-center justify-center py-20"><div className="size-8 animate-spin rounded-full border-2 border-border-default border-t-accent-primary" /></div>;
  }
  if (_0x4c3d1f) {
    return <div className="flex items-center justify-center py-20"><div className="size-8 animate-spin rounded-full border-2 border-border-default border-t-accent-primary" /></div>;
  }
  const _0x2cdf66 = !!_0x518ce4?.interactions_endpoint_url;
  const _0x138a83 = _0x3a0ee3.trim() !== (_0x518ce4?.interactions_endpoint_url || "");
  return <div className="space-y-6"><div><h2 className="text-lg font-semibold text-text-primary">{_0x3a441c("developer.interactionsTab.title")}</h2><p className="text-xs text-text-muted mt-0.5">{_0x3a441c("developer.interactionsTab.subtitle")}</p></div><section className="rounded-xl border border-border-default/50 bg-surface-raised/30 p-5 space-y-4"><div className="flex items-center gap-2"><_0x301824 icon="solar:link-bold-duotone" className="size-5 text-accent-primary-text" /><h3 className="text-sm font-semibold text-text-secondary">{_0x3a441c("developer.interactionsTab.endpointUrl")}</h3>{_0x2cdf66 && <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-green-500/10 text-green-400 font-medium ml-auto">{_0x3a441c("developer.interactionsTab.active")}</span>}</div><p className="text-xs text-text-muted">{_0x3a441c("developer.interactionsTab.endpointDesc")}</p><div><_0x23158d className="text-xs text-text-muted mb-1">{_0x3a441c("developer.interactionsTab.endpointUrl")}</_0x23158d><_0x4d3d7b value={_0x3a0ee3} onChange={_0x32998d => _0x406663(_0x32998d.target.value)} placeholder="https://your-server.com/api/interactions" className="h-9 text-sm font-mono" /><p className="text-[10px] text-text-muted mt-1">{_0x3a441c("developer.interactionsTab.endpointHint")}</p></div><div className="flex items-center gap-2"><_0x1523a7 size="sm" onClick={async () => {
          if (_0xba901d?.id) {
            if (_0x3a0ee3.trim()) {
              _0x141037(true);
              try {
                const _0x455a65 = await _0x311945(_0xba901d.id, _0x3a0ee3.trim());
                _0x5595fb(_0x455a65);
                _0x406663(_0x455a65.interactions_endpoint_url || "");
              } catch {} finally {
                _0x141037(false);
              }
            } else {
              _0x190437.error(_0x3a441c("developer.interactionsTab.urlRequired"));
            }
          }
        }} disabled={_0x28c179 || !_0x138a83 || !_0x3a0ee3.trim()} className="h-8 px-4 text-xs">{_0x28c179 ? <_0x301824 icon="solar:refresh-bold-duotone" className="size-4 animate-spin mr-1.5" /> : null}{_0x3a441c("developer.interactionsTab.saveEndpoint")}</_0x1523a7>{_0x2cdf66 && <_0x1523a7 size="sm" variant="outline" onClick={async () => {
          if (_0xba901d?.id) {
            _0x347d6f(true);
            try {
              const _0x211f91 = await _0x311945(_0xba901d.id, null);
              _0x5595fb(_0x211f91);
              _0x406663("");
            } catch {} finally {
              _0x347d6f(false);
            }
          }
        }} disabled={_0x3a55ca} className="h-8 px-4 text-xs text-red-400 hover:text-red-300 hover:border-red-500/50">{_0x3a441c("developer.interactionsTab.removeEndpoint")}</_0x1523a7>}</div></section><section className="rounded-xl border border-border-default/50 bg-surface-raised/30 p-5 space-y-4"><div className="flex items-center gap-2"><_0x301824 icon="solar:key-bold-duotone" className="size-5 text-text-tertiary" /><h3 className="text-sm font-semibold text-text-secondary">{_0x3a441c("developer.interactionsTab.publicKey")}</h3></div><p className="text-xs text-text-muted">{_0x3a441c("developer.interactionsTab.publicKeyDesc")}</p><div className="flex items-center gap-2"><code className="flex-1 px-3 py-2 rounded-lg bg-surface-overlay/50 border border-border-default/50 text-xs font-mono text-text-secondary truncate">{_0x518ce4?.verify_key || "—"}</code><_0x1523a7 size="sm" variant="outline" onClick={() => _0x518ce4?.verify_key && _0x1428da(_0x518ce4.verify_key, "verifyKey")} disabled={!_0x518ce4?.verify_key} className="h-8 px-3 text-xs shrink-0">{_0x5b3003 === "verifyKey" ? <_0x301824 icon="solar:check-circle-bold-duotone" className="size-4 text-green-400" /> : <_0x301824 icon="solar:copy-bold-duotone" className="size-4" />}</_0x1523a7></div></section><section className="rounded-xl border border-border-default/50 bg-surface-raised/30 p-5 space-y-3"><div className="flex items-center gap-2"><_0x301824 icon="solar:info-circle-bold-duotone" className="size-5 text-text-tertiary" /><h3 className="text-sm font-semibold text-text-secondary">{_0x3a441c("developer.interactionsTab.howItWorks")}</h3></div><div className="space-y-2.5"><div className="flex gap-3"><span className="size-5 rounded-full bg-accent-primary/10 text-accent-primary-text text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span><p className="text-xs text-text-muted">{_0x3a441c("developer.interactionsTab.step1")}</p></div><div className="flex gap-3"><span className="size-5 rounded-full bg-accent-primary/10 text-accent-primary-text text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span><p className="text-xs text-text-muted">{_0x3a441c("developer.interactionsTab.step2")}</p></div><div className="flex gap-3"><span className="size-5 rounded-full bg-accent-primary/10 text-accent-primary-text text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">3</span><p className="text-xs text-text-muted">{_0x3a441c("developer.interactionsTab.step3")}</p></div></div></section></div>;
}
export { m as default };