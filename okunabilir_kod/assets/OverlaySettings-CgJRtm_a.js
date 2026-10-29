import { b as _0x5597a6, bC as _0x35d116, a_ as _0x5e958e, r as _0x1de17e, b1 as _0x31b7db, dv as _0x3cb89b, P as _0x2faa69, j as _0x241853, R as _0x5a1949, I as _0x386fba } from "./index-cQfEKR1W.js";
import { ac as _0x3f9cb9 } from "./soundboardFx-C2LP-Hjs.js";
import { S as _0xf3d8dc } from "./switch-lfnbGePn.js";
import { S as _0xcc11a3 } from "./separator-Ba6vNTx4.js";
import "./index-BUijt7wr.js";
const _Component = ({
  className: _0x5364bf
}) => <_0x386fba icon="solar:layers-bold-duotone" className={_0x5364bf} />;
const _Component2 = ({
  className: _0x502b4a
}) => <_0x386fba icon="solar:keyboard-bold-duotone" className={_0x502b4a} />;
const _Component5 = ({
  className: _0x1c88cb
}) => <_0x386fba icon="solar:chat-square-bold-duotone" className={_0x1c88cb} />;
const _Component4 = ({
  className: _0x348c8b
}) => <_0x386fba icon="solar:restart-bold-duotone" className={_0x348c8b} />;
const _Component3 = ({
  children: _0x2991bc,
  highlight: _0x10266c = false
}) => <span className={"\n    inline-flex items-center justify-center min-w-[28px] h-7 px-2\n    text-xs font-semibold font-mono rounded-md border border-b-2 transition-all\n    " + (_0x10266c ? "bg-accent-subtle border-accent-border border-b-accent-border text-accent-primary-text" : "bg-surface-overlay border-border-strong border-b-border-strong text-text-secondary") + "\n  "}>{_0x2991bc}</span>;
const f = ({
  onDirtyChange: _0x138ec5
}) => {
  const {
    t: _0xe5055b
  } = _0x5597a6();
  const _0x20ca92 = _0x35d116(_0x471acc => _0x471acc.settings.overlay);
  const _0x261801 = _0x35d116(_0x2ab1df => _0x2ab1df.setOverlaySettings);
  const _0x1f4bf9 = _0x35d116(_0xb350b9 => _0xb350b9.settings.overlay.enabled);
  const _0x4c8761 = _0x5e958e(_0x241130 => _0x241130.servers);
  const [_0xf97c22, _0x48777e] = _0x1de17e.useState([]);
  const [_0x2c0a98, _0xca4465] = _0x1de17e.useState(false);
  const [_0x4a09d9, _0x58f735] = _0x1de17e.useState(false);
  const [_0x584ef6, _0x49b534] = _0x1de17e.useState(_0x20ca92.chat.width || 320);
  const [_0x72e278, _0x451443] = _0x1de17e.useState(_0x20ca92.chat.height || 400);
  const [_0x53cab0, _0x210eed] = _0x1de17e.useState(null);
  const [_0x18ab96, _0x54b56f] = _0x1de17e.useState(_0x20ca92);
  _0x1de17e.useEffect(() => {
    const _0x3c59cd = _0x20ca92.enabled !== _0x18ab96.enabled || _0x20ca92.shortcut !== _0x18ab96.shortcut || _0x20ca92.chat.enabled !== _0x18ab96.chat.enabled || _0x20ca92.chat.guildId !== _0x18ab96.chat.guildId || _0x20ca92.chat.channelId !== _0x18ab96.chat.channelId || _0x584ef6 !== (_0x18ab96.chat.width || 320) || _0x72e278 !== (_0x18ab96.chat.height || 400);
    _0x138ec5?.(_0x3c59cd);
  }, [_0x20ca92, _0x18ab96, _0x584ef6, _0x72e278, _0x138ec5]);
  _0x1de17e.useEffect(() => {
    const _0x5e5d2b = _0x20ca92.chat.guildId;
    if (!_0x5e5d2b) {
      _0x48777e([]);
      return;
    }
    const _0x1327a8 = _0x31b7db.getState().getGuildChannels(_0x5e5d2b);
    if (_0x1327a8?.channels) {
      _0x48777e(_0x1327a8.channels.filter(_0x5acae9 => _0x5acae9.type === "text" || _0x5acae9.type === "voice").map(_0xf5ea53 => ({
        id: _0xf5ea53.id,
        name: _0xf5ea53.name,
        type: _0xf5ea53.type || "text"
      })));
    } else {
      _0xca4465(true);
      _0x3f9cb9(_0x5e5d2b).then(_0x59ae9f => {
        const _0x315f5a = _0x3cb89b(_0x59ae9f).filter(_0x51732f => _0x51732f.type === "text" || _0x51732f.type === "voice").map(_0x12c70b => ({
          id: _0x12c70b.id,
          name: _0x12c70b.name,
          type: _0x12c70b.type || "text"
        }));
        _0x48777e(_0x315f5a);
      }).catch(() => _0x48777e([])).finally(() => _0xca4465(false));
    }
  }, [_0x20ca92.chat.guildId]);
  _0x1de17e.useEffect(() => {
    if (!_0x4a09d9) {
      return;
    }
    const _0x1ca2b9 = _0x1a98ed => {
      _0x1a98ed.preventDefault();
      _0x1a98ed.stopPropagation();
      _0x1a98ed.stopImmediatePropagation();
      if (_0x1a98ed.code === "Escape") {
        _0x58f735(false);
        _0x210eed(null);
        return;
      }
      if (["ControlLeft", "ControlRight", "ShiftLeft", "ShiftRight", "AltLeft", "AltRight"].includes(_0x1a98ed.code)) {
        _0x210eed({
          ctrl: _0x1a98ed.ctrlKey,
          shift: _0x1a98ed.shiftKey,
          alt: _0x1a98ed.altKey
        });
        return;
      }
      const _0x179912 = [];
      if (_0x1a98ed.ctrlKey) {
        _0x179912.push("Ctrl");
      }
      if (_0x1a98ed.shiftKey) {
        _0x179912.push("Shift");
      }
      if (_0x1a98ed.altKey) {
        _0x179912.push("Alt");
      }
      _0x179912.push((_0x44b8ed => {
        const _0x314b25 = {
          Space: "Space",
          ShiftLeft: "L-Shift",
          ShiftRight: "R-Shift",
          ControlLeft: "L-Ctrl",
          ControlRight: "R-Ctrl",
          AltLeft: "L-Alt",
          AltRight: "R-Alt",
          Tab: "Tab",
          CapsLock: "Caps",
          Backquote: "`",
          Escape: "Esc",
          Enter: "Enter",
          Backspace: "⌫"
        };
        if (_0x314b25[_0x44b8ed]) {
          return _0x314b25[_0x44b8ed];
        } else if (_0x44b8ed.startsWith("Key")) {
          return _0x44b8ed.slice(3);
        } else if (_0x44b8ed.startsWith("Digit")) {
          return _0x44b8ed.slice(5);
        } else if (_0x44b8ed.startsWith("Numpad")) {
          return "Num" + _0x44b8ed.slice(6);
        } else {
          return _0x44b8ed;
        }
      })(_0x1a98ed.code));
      const _0x10927e = _0x179912.join("+");
      _0x261801({
        shortcut: _0x10927e
      });
      _0x58f735(false);
      _0x210eed(null);
      _0x138ec5?.(true);
      _0x2faa69.success(_0xe5055b("overlay.shortcutSet", {
        shortcut: _0x10927e
      }));
    };
    window.addEventListener("keydown", _0x1ca2b9, true);
    return () => window.removeEventListener("keydown", _0x1ca2b9, true);
  }, [_0x4a09d9, _0x261801, _0x138ec5]);
  const _0x3c6f7e = _0x1de17e.useCallback(_0xb68ddd => {
    _0x261801({
      enabled: _0xb68ddd
    });
    window.electron?.passiveOverlay?.setEnabled(_0xb68ddd);
  }, [_0x261801]);
  const _0x38cd12 = _0x1de17e.useCallback(() => {
    const _0x4169f6 = !_0x20ca92.chat.enabled;
    _0x261801({
      chat: {
        ..._0x20ca92.chat,
        enabled: _0x4169f6
      }
    });
    window.electron?.overlayChat?.setConfig({
      enabled: _0x4169f6,
      guildId: _0x20ca92.chat.guildId,
      channelId: _0x20ca92.chat.channelId,
      channelName: _0x20ca92.chat.channelName,
      width: _0x20ca92.chat.width || 320,
      height: _0x20ca92.chat.height || 400
    });
  }, [_0x20ca92.chat, _0x261801]);
  const _0x3dcf52 = _0x1de17e.useCallback(_0x500aff => {
    _0x261801({
      chat: {
        ..._0x20ca92.chat,
        guildId: _0x500aff || null,
        channelId: null,
        channelName: null
      }
    });
    window.electron?.overlayChat?.setConfig({
      enabled: _0x20ca92.chat.enabled,
      guildId: _0x500aff || null,
      channelId: null,
      channelName: null,
      width: _0x20ca92.chat.width || 320,
      height: _0x20ca92.chat.height || 400
    });
  }, [_0x20ca92.chat, _0x261801]);
  const _0x537bd8 = _0x1de17e.useCallback(_0x2bf465 => {
    const _0x1ed501 = _0xf97c22.find(_0x4de8f3 => _0x4de8f3.id === _0x2bf465);
    const _0xa0b749 = _0x1ed501?.name || null;
    _0x261801({
      chat: {
        ..._0x20ca92.chat,
        channelId: _0x2bf465 || null,
        channelName: _0xa0b749
      }
    });
    window.electron?.overlayChat?.setConfig({
      enabled: _0x20ca92.chat.enabled,
      guildId: _0x20ca92.chat.guildId,
      channelId: _0x2bf465 || null,
      channelName: _0xa0b749,
      width: _0x20ca92.chat.width || 320,
      height: _0x20ca92.chat.height || 400
    });
  }, [_0x20ca92.chat, _0xf97c22, _0x261801]);
  const _0xdd89f7 = _0x1de17e.useCallback(() => {
    if (typeof localStorage != "undefined") {
      localStorage.removeItem("overlay-widget-position");
      localStorage.removeItem("overlay-chat-position");
      localStorage.removeItem("overlay-chat-size");
    }
    _0x2faa69.success(_0xe5055b("overlay.positionsReset"));
  }, []);
  const _0x861222 = (_0x20ca92.shortcut || "Shift+`").split("+");
  return <div className="space-y-8"><div><h2 className="text-lg font-semibold text-text-primary">Overlay</h2><p className="text-sm text-text-muted mt-1">{_0xe5055b("overlay.description")}</p></div><section><div className="rounded-xl bg-surface-overlay/40 border border-border-default overflow-hidden"><div role="button" tabIndex={0} onClick={() => _0x3c6f7e(!_0x1f4bf9)} onKeyDown={_0x2fe7bf => _0x2fe7bf.key === "Enter" && _0x3c6f7e(!_0x1f4bf9)} className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-surface-overlay/50 active:bg-surface-overlay/60 transition-colors cursor-pointer"><span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-surface-overlay/70"><_Component className="size-4 text-text-secondary" /></span><div className="flex-1 min-w-0"><div className="text-sm font-medium text-text-secondary">Overlay</div><div className="text-[11px] text-text-muted mt-0.5">{_0xe5055b("overlay.overlayToggleDesc")}</div></div><div onClick={_0x2c788a => _0x2c788a.stopPropagation()} onKeyDown={_0x4dc1d4 => _0x4dc1d4.stopPropagation()}><_0xf3d8dc checked={_0x1f4bf9} onCheckedChange={_0x3c6f7e} /></div></div></div></section><_0xcc11a3 className="bg-surface-overlay/70" /><section><div className="mb-4"><div className="flex items-center gap-2"><_Component2 className="size-4 text-text-tertiary" /><div className="text-sm font-semibold text-text-secondary">{_0xe5055b("overlay.shortcutTitle")}</div></div><p className="text-xs text-text-muted mt-0.5">{_0xe5055b("overlay.shortcutDesc")}</p></div><div className="rounded-xl bg-surface-overlay/40 border border-border-default overflow-hidden"><div className={"flex items-center gap-3 px-4 py-3.5 transition-colors " + (_0x4a09d9 ? "bg-accent-subtle" : "")}><span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-surface-overlay/70"><_Component2 className={"size-4 " + (_0x4a09d9 ? "text-accent-primary-text" : "text-text-secondary")} /></span><div className="flex-1 min-w-0"><div className="text-sm font-medium text-text-secondary">{_0xe5055b("overlay.shortcutKey")}</div>{_0x4a09d9 && <div className="text-[11px] text-accent-primary-text mt-0.5">{_0xe5055b("overlay.pressCombo")}</div>}</div><div className="flex items-center gap-2">{_0x4a09d9 ? <div className="flex items-center gap-1 min-w-[80px] justify-end">{_0x53cab0 ? <_0x241853.Fragment>{_0x53cab0.ctrl && <_Component3>Ctrl</_Component3>}{_0x53cab0.shift && <_Component3>Shift</_Component3>}{_0x53cab0.alt && <_Component3>Alt</_Component3>}<span className="text-text-muted text-xs mx-0.5">+</span><span className="text-text-muted text-xs animate-pulse">...</span></_0x241853.Fragment> : <div className="h-7 px-3 rounded-md border-2 border-dashed border-accent-border flex items-center"><span className="text-accent-primary-text/60 text-xs animate-pulse">...</span></div>}</div> : <_0x241853.Fragment><button onClick={() => _0x58f735(true)} className="group flex items-center gap-1 cursor-pointer">{_0x861222.map((_0x32af6c, _0x568d77) => <_0x5a1949.Fragment key={_0x568d77}>{_0x568d77 > 0 && <span className="text-text-muted text-xs mx-0.5">+</span>}<_Component3 highlight={_0x568d77 === _0x861222.length - 1}>{_0x32af6c}</_Component3></_0x5a1949.Fragment>)}</button><button onClick={() => {
                _0x261801({
                  shortcut: "Shift+`"
                });
                _0x138ec5?.(true);
              }} className="size-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-secondary hover:bg-surface-overlay transition-all cursor-pointer" title={_0xe5055b("overlay.resetDefault")}><_Component4 className="size-3.5" /></button></_0x241853.Fragment>}</div></div></div></section><_0xcc11a3 className="bg-surface-overlay/70" /><section><div className="mb-4"><div className="flex items-center gap-2"><_Component5 className="size-4 text-text-tertiary" /><div className="text-sm font-semibold text-text-secondary">{_0xe5055b("overlay.chatWidget")}</div></div><p className="text-xs text-text-muted mt-0.5">{_0xe5055b("overlay.chatWidgetDesc")}</p></div><div className="rounded-xl bg-surface-overlay/40 border border-border-default overflow-hidden divide-y divide-border-default"><div role="button" tabIndex={0} onClick={() => _0x38cd12()} onKeyDown={_0x3a62b5 => _0x3a62b5.key === "Enter" && _0x38cd12()} className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-surface-overlay/50 active:bg-surface-overlay/60 transition-colors cursor-pointer"><span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-surface-overlay/70"><_Component5 className="size-4 text-text-secondary" /></span><div className="flex-1 min-w-0"><div className="text-sm font-medium text-text-secondary">{_0xe5055b("overlay.enableChatWidget")}</div><div className="text-[11px] text-text-muted mt-0.5">{_0xe5055b("overlay.showChannelMessages")}</div></div><div onClick={_0x348af0 => _0x348af0.stopPropagation()} onKeyDown={_0x344352 => _0x344352.stopPropagation()}><_0xf3d8dc checked={_0x20ca92.chat.enabled} onCheckedChange={_0x38cd12} /></div></div>{_0x20ca92.chat.enabled && <div className="p-4 space-y-3"><div><label className="text-xs font-medium text-text-muted mb-1.5 block">{_0xe5055b("overlay.server")}</label><select value={_0x20ca92.chat.guildId || ""} onChange={_0x6d08e7 => _0x3dcf52(_0x6d08e7.target.value)} className="w-full h-10 px-3 bg-surface-overlay border border-border-subtle rounded-lg text-sm text-text-primary appearance-none cursor-pointer focus:outline-none focus:border-accent-border"><option value="">{_0xe5055b("overlay.selectServer")}</option>{_0x4c8761.map(_0x5c1c75 => <option value={_0x5c1c75.id} key={_0x5c1c75.id}>{_0x5c1c75.name}</option>)}</select></div><div><label className="text-xs font-medium text-text-muted mb-1.5 block">{_0xe5055b("overlay.channel")}</label><select value={_0x20ca92.chat.channelId || ""} onChange={_0x599eef => _0x537bd8(_0x599eef.target.value)} disabled={!_0x20ca92.chat.guildId || _0x2c0a98} className="w-full h-10 px-3 bg-surface-overlay border border-border-subtle rounded-lg text-sm text-text-primary appearance-none cursor-pointer disabled:opacity-50 focus:outline-none focus:border-accent-border"><option value="">{_0xe5055b(_0x2c0a98 ? "overlay.loading" : "overlay.selectChannel")}</option>{_0xf97c22.map(_0x1ce727 => <option value={_0x1ce727.id} key={_0x1ce727.id}>#{_0x1ce727.name}</option>)}</select></div><div className="pt-2 space-y-3"><div><div className="flex items-center justify-between mb-1.5"><label className="text-xs font-medium text-text-muted">{_0xe5055b("overlay.width")}</label><span className="text-xs text-text-tertiary tabular-nums">{_0x584ef6}px</span></div><input type="range" min={200} max={500} value={_0x584ef6} onChange={_0x2e2dc2 => _0x49b534(parseInt(_0x2e2dc2.target.value))} onPointerUp={() => _0x261801({
                chat: {
                  ..._0x20ca92.chat,
                  width: _0x584ef6
                }
              })} className="w-full h-1.5 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:border-0" style={{
                background: "linear-gradient(to right, var(--color-accent-primary) " + (_0x584ef6 - 200) / 300 * 100 + "%, var(--color-surface-overlay) " + (_0x584ef6 - 200) / 300 * 100 + "%)"
              }} /></div><div><div className="flex items-center justify-between mb-1.5"><label className="text-xs font-medium text-text-muted">{_0xe5055b("overlay.height")}</label><span className="text-xs text-text-tertiary tabular-nums">{_0x72e278}px</span></div><input type="range" min={150} max={600} value={_0x72e278} onChange={_0x34504d => _0x451443(parseInt(_0x34504d.target.value))} onPointerUp={() => _0x261801({
                chat: {
                  ..._0x20ca92.chat,
                  height: _0x72e278
                }
              })} className="w-full h-1.5 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:border-0" style={{
                background: "linear-gradient(to right, var(--color-accent-primary) " + (_0x72e278 - 150) / 450 * 100 + "%, var(--color-surface-overlay) " + (_0x72e278 - 150) / 450 * 100 + "%)"
              }} /></div></div></div>}</div></section><_0xcc11a3 className="bg-surface-overlay/70" /><section><button type="button" onClick={_0xdd89f7} className="w-full flex items-center justify-center gap-2 rounded-xl bg-surface-overlay/60 border border-border-default px-4 py-3 text-sm font-medium text-text-muted transition-all duration-200 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20 cursor-pointer"><_Component4 className="size-4" />{_0xe5055b("overlay.resetPositions")}</button><p className="text-[11px] text-text-muted text-center mt-2">{_0xe5055b("overlay.resetPositionsDesc")}</p></section></div>;
};
export { f as default };