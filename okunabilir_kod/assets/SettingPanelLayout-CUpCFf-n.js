import { R as _0x5aea62, b as _0x3b237a, r, P as _0xe462f9, j as _0x5d5d98, an as _0x5d059b, I as _0x42564d, X as _0x5d0a3a, F as _0x11c086, cz as _0x107eaf } from "./index-cQfEKR1W.js";
import { c } from "./clipboard-BQ9qambq.js";
import { u as _0x8513fe } from "./useGlobalKeyboard-Woyx4Cai.js";
import { w as _0x26e8d6, x } from "./soundboardFx-C2LP-Hjs.js";
import "./index-BUijt7wr.js";
const _Component = _0x5aea62.memo(({
  subItems: _0xe64885,
  activeSubItem: _0x2e65f4,
  onSubItemClick: _0x4db27d,
  isOpen: _0x4652fc
}) => {
  const _0x1244e1 = _0x2e65f4 ? _0xe64885.findIndex(_0x33d7a7 => _0x33d7a7.id === _0x2e65f4) : -1;
  const _0x50b871 = _0xe64885.length * 32 + 8;
  return <div className="overflow-hidden transition-[max-height,opacity] duration-300 ease-out" style={{
    maxHeight: _0x4652fc ? _0x50b871 : 0,
    opacity: _0x4652fc ? 1 : 0
  }}><ul className="ml-5 mt-1 mb-1 pl-3 relative"><div className="absolute left-0 top-0 bottom-0 w-0.5 bg-surface-inset/50 rounded-full" /><div className="absolute left-0 w-0.5 rounded-full bg-accent-primary shadow-[0_0_6px_rgba(173,255,8,0.4)] will-change-transform" style={{
        height: 32,
        opacity: _0x1244e1 >= 0 ? 1 : 0,
        transform: "translateY(" + (_0x1244e1 >= 0 ? _0x1244e1 * 32 : 0) + "px) scaleY(" + (_0x1244e1 >= 0 ? 1 : 0) + ")",
        transition: "transform 250ms cubic-bezier(.4,0,.2,1), opacity 200ms ease-out"
      }} />{_0xe64885.map(_0x8165a => <li style={{
        height: 32
      }} className="flex items-center" key={_0x8165a.id}><button onClick={() => _0x4db27d?.(_0x8165a.id)} className={"w-full text-left px-2 rounded-md text-sm transition-colors duration-150 cursor-pointer " + (_0x2e65f4 === _0x8165a.id ? "text-text-primary font-medium" : "text-text-tertiary hover:text-text-secondary")}>{_0x8165a.label}</button></li>)}</ul></div>;
});
_Component.displayName = "SubItemNav";
const f = _0x5aea62.memo(({
  title: _0x58764c,
  entityId: _0x42f598,
  entityType: _0x5230a5,
  tabs: _0x47958f,
  activeTab: _0x4abf16,
  onTabChange: _0x538657,
  renderContent: _0x5a5f0f,
  onSave: _0x2eb457,
  onReset: _0x332176,
  onClose: _0x518cd2,
  isDirty: _0x315aa0 = false,
  hideSaveButton: _0x4c7d11 = false,
  onDirtyChange: _0x4cf6f,
  isSaving: _0x951856 = false,
  hasValidationError: _0x1c1ae5 = false,
  showDeleteButton: _0xd69fde = false,
  renderDeleteButton: _0x1e49bc,
  titleIcon: _0x253b91,
  titleIconContainerClass: _0x2cc346,
  activeSubItem: _0x151e67,
  onSubItemClick: _0x56b58a,
  sidebarFooter: _0x2ef422
}) => {
  const {
    t: _0x11983d
  } = _0x3b237a();
  const [_0x2d3a08, _0x1da52f] = r.useState(false);
  const [_0x339c52, _0x2d7298] = r.useState(false);
  r.useRef(_0x518cd2).current = _0x518cd2;
  const _0x1d156f = r.useRef(_0x315aa0);
  _0x1d156f.current = _0x315aa0;
  const _0x1f9f34 = r.useRef(() => {});
  const _0x2571dc = r.useMemo(() => {
    try {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      return false;
    }
  }, []);
  const _0x5b1622 = r.useMemo(() => _0x47958f.length === 0 || _0x47958f.some(_0x54cd78 => _0x54cd78.id === _0x4abf16), [_0x47958f, _0x4abf16]);
  r.useEffect(() => {
    if (!_0x5b1622 && _0x47958f.length > 0) {
      _0x538657(_0x47958f[0].id);
    }
  }, [_0x5b1622, _0x47958f, _0x538657]);
  const _0x4b8bfe = r.useMemo(() => _0x11983d(_0x5230a5 === "channel" ? "settings.entityChannel" : _0x5230a5 === "category" ? "settings.entityCategory" : _0x5230a5 === "user" ? "settings.entityUser" : "settings.entityServer"), [_0x5230a5, _0x11983d]);
  const _0x2ba069 = r.useMemo(() => {
    if (!_0x58764c) {
      return "";
    }
    const _0x4f45ae = _0x26e8d6(_0x58764c, _0x107eaf);
    return x(_0x4f45ae, "inline-block w-4 h-4 align-text-bottom mx-0.5");
  }, [_0x58764c]);
  const _0x1a95df = r.useCallback(async () => {
    if (await c(_0x42f598)) {
      _0x2d7298(true);
      _0xe462f9.success(_0x11983d("settings.idCopied", {
        type: _0x4b8bfe
      }), {
        description: _0x42f598
      });
      window.setTimeout(() => _0x2d7298(false), 1200);
    } else {
      _0xe462f9.error(_0x11983d("settings.copyFailed"));
    }
  }, [_0x42f598, _0x4b8bfe, _0x11983d]);
  const _0x6b6a50 = r.useCallback(() => {
    const _0x580015 = document.querySelector("[data-settings-modal]");
    const _0x54cb54 = document.querySelector("[data-unsaved-bar]");
    if (_0x580015 && !_0x2571dc) {
      _0x580015.animate([{
        transform: "translateX(0)"
      }, {
        transform: "translateX(-8px)"
      }, {
        transform: "translateX(8px)"
      }, {
        transform: "translateX(-6px)"
      }, {
        transform: "translateX(6px)"
      }, {
        transform: "translateX(-3px)"
      }, {
        transform: "translateX(3px)"
      }, {
        transform: "translateX(0)"
      }], {
        duration: 400,
        easing: "ease-out"
      });
    }
    if (_0x54cb54) {
      const _0x169293 = getComputedStyle(_0x54cb54);
      const _0x46b798 = _0x169293.backgroundColor;
      const _0x1e9722 = _0x169293.borderColor;
      _0x54cb54.animate([{
        offset: 0,
        borderColor: _0x1e9722,
        backgroundColor: _0x46b798
      }, {
        offset: 0.1,
        borderColor: "rgba(239, 68, 68, 0.6)",
        backgroundColor: "rgba(239, 68, 68, 0.15)"
      }, {
        offset: 0.8,
        borderColor: "rgba(239, 68, 68, 0.6)",
        backgroundColor: "rgba(239, 68, 68, 0.15)"
      }, {
        offset: 1,
        borderColor: _0x1e9722,
        backgroundColor: _0x46b798
      }], {
        duration: 600,
        easing: "ease-out"
      });
    }
  }, [_0x2571dc]);
  _0x1f9f34.current = _0x6b6a50;
  const _0x4bb5f0 = r.useCallback(_0x2a0cda => {
    if (_0x1d156f.current) {
      _0x6b6a50();
      _0xe462f9.warning(_0x11983d("settings.unsavedWarning"));
      return;
    }
    _0x538657(_0x2a0cda);
    const _0x5bb630 = document.querySelector("[data-settings-content]");
    if (_0x5bb630) {
      _0x5bb630.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, [_0x538657, _0x6b6a50, _0x11983d]);
  const _0x155248 = r.useCallback(() => {
    if (_0x1d156f.current) {
      _0x6b6a50();
      _0xe462f9.warning(_0x11983d("settings.unsavedWarning"));
      return;
    }
    if (!_0x2571dc) {
      _0x1da52f(false);
      const _0x3774a7 = window.setTimeout(() => _0x518cd2(), 280);
      return () => window.clearTimeout(_0x3774a7);
    }
    _0x518cd2();
  }, [_0x518cd2, _0x2571dc, _0x6b6a50]);
  const _0x4acc6d = r.useCallback(_0x498c76 => {
    if (_0x498c76.target === _0x498c76.currentTarget) {
      _0x155248();
    }
  }, [_0x155248]);
  _0x8513fe("Escape", _0x2e9a77 => {
    if (_0x1d156f.current) {
      _0x2e9a77.preventDefault();
      _0x6b6a50();
      _0xe462f9.warning(_0x11983d("settings.unsavedWarning"));
      return;
    }
    _0x155248();
  }, 9);
  r.useEffect(() => {
    const _0x4b0a3e = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = _0x4b0a3e;
    };
  }, []);
  r.useEffect(() => {
    const _0x4ffcfb = requestAnimationFrame(() => {
      requestAnimationFrame(() => _0x1da52f(true));
    });
    return () => cancelAnimationFrame(_0x4ffcfb);
  }, []);
  return <div className="fixed inset-0 z-60" aria-modal="true" role="dialog"><div className={"absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm transition-opacity ease-out " + (_0x2571dc ? "" : "duration-300") + " " + (_0x2d3a08 ? "opacity-100" : "opacity-0")} onClick={_0x155248} /><div className={"absolute inset-0 flex transform-gpu transition-opacity ease-out md:px-4 " + (_0x2571dc ? "" : "duration-300") + " " + (_0x2d3a08 ? "opacity-100" : "opacity-0")} onMouseDown={_0x4acc6d}><div data-settings-modal={true} className="mx-auto flex w-full max-w-7xl md:rounded-2xl flex-1 flex-col overflow-hidden border-0 md:border border-border-default bg-surface-base shadow-[0_24px_120px_-20px_rgba(0,0,0,0.65)] md:my-7"><div className="md:p-3 md:pb-0 md:mb-3"><header className="relative z-10 flex shrink-0 items-center justify-between border-b md:border border-border-default bg-surface-raised/70 px-3 py-1.5 md:px-3 md:py-1.5 md:rounded-xl" data-settings-root={true}><div className="flex min-w-0 flex-wrap items-center gap-2.5 md:gap-3.5"><div className="flex min-w-0 items-center gap-2.5">{_0x253b91 && <div className={"flex size-7 shrink-0 items-center justify-center rounded-lg " + (_0x2cc346 || "bg-surface-overlay overflow-hidden rounded-md border border-border-default")}>{_0x253b91}</div>}<span className="truncate text-sm font-medium text-text-primary md:text-base" title={_0x58764c} dangerouslySetInnerHTML={{
                  __html: _0x2ba069
                }} /></div><button onClick={_0x1a95df} className="inline-flex min-w-0 items-center gap-1.5 rounded-lg bg-surface-overlay/60 hover:bg-surface-overlay px-2.5 py-1.5 transition-colors cursor-pointer"><span className="text-xs font-medium text-text-secondary">ID:</span><span className="text-xs text-text-muted font-mono">{_0x42f598}</span>{_0x339c52 ? <_0x5d059b className="size-3.5 text-accent-primary-text" /> : <_0x42564d icon="solar:copy-bold-duotone" className="size-3.5 text-text-tertiary" />}</button></div><div className="flex items-center gap-3"><div className="hidden items-center gap-1.5 text-xs text-text-muted md:flex"><kbd className="rounded border border-border-default bg-surface-raised/70 px-1.5 py-0.5 font-mono text-[10px] text-text-secondary md:text-xs">ESC</kbd></div><button onClick={_0x155248} className="inline-flex size-9 items-center justify-center rounded-full border border-border-default bg-surface-raised/70 text-text-secondary transition hover:border-border-strong hover:bg-surface-overlay/70 hover:text-text-primary" aria-label={_0x11983d("settings.close")}><_0x5d0a3a className="h-4 w-4" /></button></div></header></div><div className="flex-1 overflow-hidden flex flex-col md:flex-row"><nav className="hidden md:flex md:w-[280px] shrink-0 flex-col bg-surface-base border-r border-border-default"><div className="flex-1 overflow-y-auto p-4 scrollbar-thin"><ul className="space-y-0.5">{(() => {
                  let _0x183400;
                  let _0x3a4f27 = true;
                  return _0x47958f.map(({
                    id: _0x18ba5c,
                    label: _0x3e61ea,
                    icon: _0x348e7b,
                    iconProps: _0x53c92b,
                    group: _0x3fcfbc,
                    badge: _0x13d258,
                    premium: _0x162ca7
                  }) => {
                    const _0xc7573f = _0x4abf16 === _0x18ba5c;
                    const _0x1e0d5f = _0x3fcfbc && _0x3fcfbc !== _0x183400;
                    const _0x551a5d = _0x1e0d5f && !_0x3a4f27;
                    if (_0x1e0d5f) {
                      _0x183400 = _0x3fcfbc;
                      _0x3a4f27 = false;
                    }
                    return <_0x5aea62.Fragment key={_0x18ba5c}>{_0x1e0d5f && <li className={_0x551a5d ? "pt-1 pb-0.5 mt-2 border-t border-border-default" : ""}><span className="text-[13px] font-semibold text-text-muted">{_0x3fcfbc}</span></li>}<li><button onClick={() => _0x4bb5f0(_0x18ba5c)} className={"flex w-full items-center gap-2.5 rounded-md border p-1.5 text-left transition-colors cursor-pointer " + (_0xc7573f ? "border-border-default bg-surface-overlay/50 text-text-primary" : _0x162ca7 ? "border-amber-500/20 bg-amber-500/5 text-text-tertiary hover:border-amber-500/30 hover:bg-amber-500/10 hover:text-text-secondary" : "border-transparent bg-transparent text-text-tertiary hover:border-border-default hover:bg-interactive-muted hover:text-text-secondary")}><span className={"flex size-7 items-center justify-center rounded-md " + (_0x162ca7 && !_0xc7573f ? "bg-amber-500/10" : "bg-surface-overlay/70")}><_0x348e7b className={(_0x53c92b?.className || "size-4") + " " + (_0xc7573f ? "text-accent-primary-text" : _0x162ca7 ? "text-amber-400" : "text-text-secondary")} /></span><span className="truncate text-base font-medium">{_0x3e61ea}</span>{_0x13d258 && <span className="ml-auto flex shrink-0 self-center">{_0x13d258}</span>}</button>{_0x47958f.find(_0x5d9c6d => _0x5d9c6d.id === _0x18ba5c)?.subItems && <_Component subItems={_0x47958f.find(_0x11179a => _0x11179a.id === _0x18ba5c).subItems} activeSubItem={_0x151e67} onSubItemClick={_0x56b58a} isOpen={_0xc7573f} />}</li></_0x5aea62.Fragment>;
                  });
                })()}{_0xd69fde && _0x1e49bc && (() => {
                  const _0x43a414 = _0x11983d("settings.dangerZone");
                  const _0x15e035 = _0x47958f[_0x47958f.length - 1]?.group;
                  const _0x36c1ee = _0x15e035 !== _0x43a414;
                  return <_0x5d5d98.Fragment>{_0x36c1ee && <li className="pt-1 pb-0.5 mt-2 border-t border-border-default"><span className="text-[14px] font-semibold text-text-muted">{_0x43a414}</span></li>}<li>{_0x1e49bc()}</li></_0x5d5d98.Fragment>;
                })()}</ul>{_0x2ef422}</div></nav><nav className="md:hidden flex-1 overflow-y-auto p-4"><div className="space-y-3">{(() => {
                let _0x26e1da;
                const _0x4d8c6c = [];
                _0x47958f.forEach(_0x50bbc6 => {
                  if (_0x50bbc6.group !== _0x26e1da) {
                    _0x4d8c6c.push({
                      group: _0x50bbc6.group,
                      items: [_0x50bbc6]
                    });
                    _0x26e1da = _0x50bbc6.group;
                  } else {
                    _0x4d8c6c[_0x4d8c6c.length - 1].items.push(_0x50bbc6);
                  }
                });
                return _0x4d8c6c.map((_0x11107b, _0x48a2ed) => <div key={_0x48a2ed}>{_0x11107b.group && <div className="px-4 pb-1.5 text-xs font-medium text-text-muted uppercase tracking-wide">{_0x11107b.group}</div>}<div className="rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden divide-y divide-border-default">{_0x11107b.items.map(({
                      id: _0x48616e,
                      label: _0x4133f7,
                      icon: _0x2b0ae9,
                      iconProps: _0xc4444c
                    }) => <button onClick={() => _0x4bb5f0(_0x48616e)} className="flex w-full items-center gap-3 px-4 py-3 text-left active:bg-surface-overlay/50" key={_0x48616e}><span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-overlay/70"><_0x2b0ae9 className={_0xc4444c?.className || "size-4 text-text-secondary"} /></span><span className="flex-1 truncate text-sm font-medium text-text-secondary">{_0x4133f7}</span><_0x11c086 className="size-4 text-text-muted" /></button>)}</div></div>);
              })()}{_0xd69fde && _0x1e49bc && (() => {
                const _0x4c701c = _0x11983d("settings.dangerZone");
                const _0x541665 = _0x47958f[_0x47958f.length - 1]?.group;
                const _0x8f58c7 = _0x541665 !== _0x4c701c;
                return <div>{_0x8f58c7 && <div className="px-4 pb-1.5 pt-3 text-xs font-medium text-text-muted uppercase tracking-wide">{_0x4c701c}</div>}<div className="rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden">{_0x1e49bc()}</div></div>;
              })()}</div></nav><section className="hidden md:flex md:flex-1 flex-col bg-surface-raised/50 overflow-y-auto scrollbar-thin" data-settings-content={true}><div className="p-6 w-full max-w-4xl mx-auto flex-1 pb-20">{(() => {
                const _0x9486ff = _0x47958f.find(_0x37f4c9 => _0x37f4c9.id === _0x4abf16);
                if (!_0x9486ff || _0x9486ff.hideTitle) {
                  return null;
                }
                const _0x4dd88c = _0x9486ff.icon;
                return <div className="mb-12 flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-lg bg-surface-overlay/70"><_0x4dd88c className={"size-6 text-accent-primary-text " + (_0x9486ff.iconProps?.className?.includes("fill-") ? "fill-current" : "")} /></span><h2 className="relative text-xl font-semibold text-text-primary">{_0x9486ff.label}<svg className="absolute -bottom-2 left-0 w-full overflow-visible -rotate-2 opacity-80" style={{
                      height: "6px"
                    }} viewBox="0 0 180 10" preserveAspectRatio="none" fill="none" key={_0x4abf16}><path d="M0 5 Q15 0 30 5 T60 5 T90 5 T120 5 T150 5 T180 5" stroke="var(--accent-primary, #adff08)" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" strokeDasharray="200" strokeDashoffset="200" style={{
                        animation: "waveDraw 0.8s ease-out forwards"
                      }} /></svg></h2></div>;
              })()}<r.Suspense fallback={<div className="absolute inset-0 flex items-center justify-center"><div className="size-8 border-[3px] border-border-default border-t-accent-primary rounded-full animate-spin" /></div>}>{_0x5a5f0f(_0x4abf16)}</r.Suspense></div>{_0x315aa0 && <div className="sticky bottom-0 left-0 right-0 z-20 pb-4 pt-2 flex justify-center pointer-events-none" style={{
              animation: "slideUpFade 0.3s ease-out"
            }}><div data-unsaved-bar={true} className="pointer-events-auto flex items-center gap-3 rounded-xl border border-border-default bg-surface-raised/95 dark:bg-surface-scrim p-2.5 backdrop-blur-md shadow-black/5 dark:shadow-black/40 shadow-lg"><button onClick={() => {
                  _0x332176?.();
                  _0x4cf6f?.(false);
                }} className="h-9 rounded-lg px-4 text-sm text-text-secondary transition hover:bg-surface-overlay cursor-pointer">{_0x11983d("settings.revert")}</button>{!_0x4c7d11 && <button onClick={_0x2eb457} disabled={_0x951856 || _0x1c1ae5} className="h-9 rounded-lg bg-accent-primary px-8 text-sm font-semibold text-black transition hover:bg-accent-primary/90 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer">{_0x11983d(_0x951856 ? "settings.saving" : "settings.saveChanges")}</button>}</div></div>}</section></div></div></div></div>;
});
export { f as default };