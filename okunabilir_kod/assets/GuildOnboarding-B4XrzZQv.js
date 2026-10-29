import { r as _0x1088ff, eG as _0x417e90, ap as _0x1948bf, a1 as _0x3d4c37, j as _0x44e4de, W as _0x23d9dd, a2 as _0x518304, eH as _0x527808, eI as _0x37ddcd, $ as _0x7dff4f, Q as _0x4ecd2e, Y as _0x44fabf, s as _0x32d809, b as _0x444e30, B as _0x599470, I as _0x56dcb0, d as _0x15bd2b, dP as _0x100d14, aZ as _0x4c4c48, P as _0x1c3bfc } from "./index-cQfEKR1W.js";
import { D as _0x56c6d3, a as _0x44eb99, b as _0x3e3703, c as _0x2e2249, d as _0x3c1dcb } from "./dialog-BMMpM7PR.js";
import { P as _0x19cab, a as _0x332b30, b as _0x3c7566 } from "./tr-D975n4_R.js";
import { I as _0x842386 } from "./input-AMyERYwJ.js";
import { u as _0x74617f } from "./useChannels-DWXrCtmH.js";
import { an as _0x4dcc96, al as _0x396bd5 } from "./AppLayout-BEBJqe9_.js";
var M = Object.defineProperty;
var A = (_0x373b0e, _0x398e46) => M(_0x373b0e, "name", {
  value: _0x398e46,
  configurable: true
});
var E = {
  Automatic: "automatic",
  Manual: "manual"
};
var $ = "Tabs";
var [O, P] = _0x44fabf($, [_0x417e90]);
var R = _0x417e90();
var [V, F] = O($);
var _Component = _0x1088ff.forwardRef(A(function (_0x47a7c8, _0x5e4a83) {
  const {
    __scopeTabs: _0x3cd5d8,
    value: _0x685688,
    onValueChange: _0x38faee,
    defaultValue: _0x261997,
    orientation: _0x1ddc59 = "horizontal",
    dir: _0x1ebef7,
    activationMode: _0x255ca6 = E.Automatic,
    ..._0x5f22bf
  } = _0x47a7c8;
  const _0x5e91a5 = _0x1948bf(_0x1ebef7);
  const [_0x178415, _0x1df1eb] = _0x3d4c37({
    prop: _0x685688,
    onChange: _0x38faee,
    defaultProp: _0x261997 ?? "",
    caller: $
  });
  return <V scope={_0x3cd5d8} baseId={_0x518304()} value={_0x178415} onValueChange={_0x1df1eb} orientation={_0x1ddc59} dir={_0x5e91a5} activationMode={_0x255ca6}><_0x23d9dd.div dir={_0x5e91a5} data-orientation={_0x1ddc59} {..._0x5f22bf} ref={_0x5e4a83} /></V>;
}, "Tabs"));
var L = _0x1088ff.forwardRef(A(function (_0x103a64, _0x4ce325) {
  const {
    __scopeTabs: _0x42ef84,
    loop: _0x3266c6 = true,
    ..._0x187664
  } = _0x103a64;
  const _0x3d26fb = F("TabsList", _0x42ef84);
  const _0x29ed15 = R(_0x42ef84);
  return <_0x527808 asChild={true} {..._0x29ed15} orientation={_0x3d26fb.orientation} dir={_0x3d26fb.dir} loop={_0x3266c6}><_0x23d9dd.div role="tablist" aria-orientation={_0x3d26fb.orientation} {..._0x187664} ref={_0x4ce325} /></_0x527808>;
}, "TabsList"));
var B = _0x1088ff.forwardRef(A(function (_0x488487, _0x517142) {
  const {
    __scopeTabs: _0x5e82ef,
    value: _0x51ad,
    disabled: _0x57ba3e = false,
    ..._0x2318c4
  } = _0x488487;
  const _0x19ce08 = F("TabsTrigger", _0x5e82ef);
  const _0x55c906 = R(_0x5e82ef);
  const _0x56d3ae = K(_0x19ce08.baseId, _0x51ad);
  const _0x15448b = U(_0x19ce08.baseId, _0x51ad);
  const _0x2ef11e = _0x51ad === _0x19ce08.value;
  return <_0x37ddcd asChild={true} {..._0x55c906} focusable={!_0x57ba3e} active={_0x2ef11e}><_0x23d9dd.button type="button" role="tab" aria-selected={_0x2ef11e} aria-controls={_0x15448b} data-state={_0x2ef11e ? "active" : "inactive"} data-disabled={_0x57ba3e ? "" : undefined} disabled={_0x57ba3e} id={_0x56d3ae} {..._0x2318c4} ref={_0x517142} onMouseDown={_0x7dff4f(_0x488487.onMouseDown, _0x29d259 => {
      if (_0x57ba3e || _0x29d259.button !== 0 || _0x29d259.ctrlKey !== false) {
        _0x29d259.preventDefault();
      } else {
        _0x29d259.currentTarget.focus();
        _0x19ce08.onValueChange(_0x51ad);
      }
    })} onKeyDown={_0x7dff4f(_0x488487.onKeyDown, _0x591506 => {
      if (!_0x57ba3e && _0x591506.target === _0x591506.currentTarget) {
        if ([" ", "Enter"].includes(_0x591506.key)) {
          _0x19ce08.onValueChange(_0x51ad);
        }
      }
    })} onFocus={_0x7dff4f(_0x488487.onFocus, () => {
      const _0x3b6cb9 = _0x19ce08.activationMode !== E.Manual;
      if (!_0x2ef11e && !_0x57ba3e && !!_0x3b6cb9) {
        _0x19ce08.onValueChange(_0x51ad);
      }
    })} /></_0x37ddcd>;
}, "TabsTrigger"));
var G = _0x1088ff.forwardRef(A(function (_0x14ada0, _0x247bb8) {
  const {
    __scopeTabs: _0x366056,
    value: _0x3c9ff8,
    forceMount: _0x4ae256,
    children: _0x50ae71,
    ..._0x5f3763
  } = _0x14ada0;
  const _0x2e9d09 = F("TabsContent", _0x366056);
  const _0x22d9ed = K(_0x2e9d09.baseId, _0x3c9ff8);
  const _0x4851ea = U(_0x2e9d09.baseId, _0x3c9ff8);
  const _0x993288 = _0x3c9ff8 === _0x2e9d09.value;
  const _0x295b07 = _0x1088ff.useRef(_0x993288);
  _0x1088ff.useEffect(() => {
    const _0x3cc82f = requestAnimationFrame(() => _0x295b07.current = false);
    return () => cancelAnimationFrame(_0x3cc82f);
  }, []);
  return <_0x4ecd2e present={_0x4ae256 || _0x993288}>{({
      present: _0x2bf774
    }) => <_0x23d9dd.div data-state={_0x993288 ? "active" : "inactive"} data-orientation={_0x2e9d09.orientation} role="tabpanel" aria-labelledby={_0x22d9ed} hidden={!_0x2bf774} id={_0x4851ea} tabIndex={0} {..._0x5f3763} ref={_0x247bb8} style={{
      ..._0x14ada0.style,
      animationDuration: _0x295b07.current ? "0s" : undefined
    }}>{_0x2bf774 && _0x50ae71}</_0x23d9dd.div>}</_0x4ecd2e>;
}, "TabsContent"));
function K(_0x432175, _0x5318fd) {
  return _0x432175 + "-trigger-" + _0x5318fd;
}
function U(_0x4d8df4, _0x3f81f1) {
  return _0x4d8df4 + "-content-" + _0x3f81f1;
}
function Z({
  className: _0x16113b,
  ..._0x2d9f79
}) {
  return <_Component data-slot="tabs" className={_0x32d809("flex flex-col gap-2", _0x16113b)} {..._0x2d9f79} />;
}
function H({
  className: _0x2597f4,
  ..._0x37756f
}) {
  return <L data-slot="tabs-list" className={_0x32d809("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", _0x2597f4)} {..._0x37756f} />;
}
function Q({
  className: _0x3b695e,
  ..._0x3f2c80
}) {
  return <B data-slot="tabs-trigger" className={_0x32d809("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", _0x3b695e)} {..._0x3f2c80} />;
}
function W({
  className: _0x226c31,
  ..._0x4d39c3
}) {
  return <G data-slot="tabs-content" className={_0x32d809("flex-1 outline-none", _0x226c31)} {..._0x4d39c3} />;
}
function Y({
  value: _0x30c9b0
}) {
  const _0x52bdcb = _0x30c9b0.match(/^<(a?):([A-Za-z0-9_]{1,32}):(\d{1,20})>$/);
  if (_0x52bdcb) {
    return <img className="size-5 inline-block shrink-0" src={_0x4dcc96(_0x52bdcb[3], _0x52bdcb[1] === "a")} alt={_0x52bdcb[2]} />;
  } else {
    return <span>{_0x30c9b0}</span>;
  }
}
function J({
  config: _0x5efb80,
  answers: _0x4dd47b,
  onChange: _0x1fe38c,
  beforeOnly: _0x310763 = false
}) {
  const {
    t: _0x29ec26
  } = _0x444e30();
  return <div className="space-y-6">{_0x5efb80.prompts.filter(_0x327e3d => !_0x310763 || _0x327e3d.in_onboarding).map(_0x231728 => {
      const _0x3b67e0 = <div className="grid gap-2">{_0x231728.options.map(_0x56e2a3 => <_0x599470 variant="outline" className="h-auto justify-start text-left whitespace-normal py-3 gap-3" aria-pressed={(_0x4dd47b[_0x231728.id] ?? []).includes(_0x56e2a3.id)} onClick={() => ((_0x562e37, _0x29d1b5) => {
          const _0x3d8e10 = _0x4dd47b[_0x562e37.id] ?? [];
          _0x1fe38c({
            ..._0x4dd47b,
            [_0x562e37.id]: _0x3d8e10.includes(_0x29d1b5) ? _0x3d8e10.filter(_0x4bdbc6 => _0x4bdbc6 !== _0x29d1b5) : _0x562e37.single_select ? [_0x29d1b5] : [..._0x3d8e10, _0x29d1b5]
          });
        })(_0x231728, _0x56e2a3.id)} key={_0x56e2a3.id}><_0x56dcb0 icon={(_0x4dd47b[_0x231728.id] ?? []).includes(_0x56e2a3.id) ? "solar:check-square-bold" : "solar:square-linear"} className="shrink-0" /><div><Y value={_0x56e2a3.emoji} /> {_0x56e2a3.title}{_0x56e2a3.description && <p className="text-xs text-text-muted font-normal">{_0x56e2a3.description}</p>}</div></_0x599470>)}</div>;
      return <section className="space-y-3" key={_0x231728.id}><p className="font-semibold text-text-primary">{_0x231728.title}{_0x231728.required && <span className="ml-2 text-xs text-text-muted">{_0x29ec26("orientation.required")}</span>}</p>{_0x231728.type === 1 ? <_0x19cab><_0x332b30 asChild={true}><_0x599470 variant="outline" className="w-full justify-between">{_0x29ec26("orientation.selected", {
                count: _0x4dd47b[_0x231728.id]?.length ?? 0
              })}<_0x56dcb0 icon="solar:alt-arrow-down-linear" /></_0x599470></_0x332b30><_0x3c7566 className="max-h-80 overflow-y-auto">{_0x3b67e0}</_0x3c7566></_0x19cab> : _0x3b67e0}</section>;
    })}</div>;
}
function X({
  guildId: _0x2461f2
}) {
  const {
    t: _0x32cb5e
  } = _0x444e30();
  const _0x7607ab = _0x15bd2b();
  const _0x4ecaa0 = _0x100d14(_0x10f030 => _0x10f030.active);
  const _0x563e60 = _0x100d14(_0x3338b5 => _0x2461f2 ? _0x3338b5.data[_0x2461f2] : undefined);
  const _0x13660c = _0x100d14(_0x26d896 => _0x2461f2 ? _0x26d896.summaries[_0x2461f2] : undefined);
  const _0x20249e = _0x100d14(_0xe9b34d => !!_0x2461f2 && _0xe9b34d.errors[_0x2461f2]);
  const [_0xf3c4c7, _0x252eb7] = _0x1088ff.useState({});
  const [_0x277c33, _0x3238b1] = _0x1088ff.useState([]);
  const [_0x58eb08, _0x28f840] = _0x1088ff.useState([]);
  const [_0x560435, _0xb6fc62] = _0x1088ff.useState(0);
  _0x1088ff.useEffect(() => _0xb6fc62(0), [_0x2461f2, _0x563e60?.version]);
  const [_0x5e2d30, _0x3122b3] = _0x1088ff.useState([]);
  const [_0x397931, _0x17e789] = _0x1088ff.useState(false);
  const [_0x108708, _0xc72be2] = _0x1088ff.useState("");
  const {
    channels: _0x46b752,
    refreshChannels: _0x3b333d
  } = _0x74617f(_0x2461f2);
  _0x1088ff.useEffect(() => {
    if (_0x2461f2 && !_0x563e60 && _0x13660c?.enabled !== false) {
      _0x100d14.getState().load(_0x2461f2);
    }
  }, [_0x2461f2, _0x563e60, _0x13660c?.version, _0x13660c?.enabled]);
  _0x1088ff.useEffect(() => {
    if (_0x563e60) {
      _0x252eb7(Object.fromEntries(_0x563e60.config.prompts.map(_0x45aa29 => [_0x45aa29.id, (_0x563e60.state.answers?.[_0x45aa29.id] ?? []).filter(_0x42e886 => _0x45aa29.options.some(_0x5e855b => _0x5e855b.id === _0x42e886))])));
      _0x3238b1(_0x563e60.state.custom_channel_ids ?? []);
      _0x28f840(_0x563e60.state.hidden_channel_ids ?? []);
      _0x3122b3((_0x563e60.state.completed_task_ids ?? []).filter(_0x4f154a => _0x563e60.config.guide.tasks.some(_0x4469d9 => _0x4469d9.id === _0x4f154a)));
      if (_0x563e60.needs_onboarding && _0x2461f2) {
        _0x100d14.getState().open(_0x2461f2, "questions", true);
      }
    }
  }, [_0x563e60, _0x2461f2]);
  _0x4c4c48((_0x25a1a7, _0x4f9204) => {
    const _0x4cf250 = String(_0x25a1a7).toUpperCase();
    if (_0x4cf250 === "ONBOARDING_UPDATED" || _0x4cf250 === "ONBOARDING_MEMBER_UPDATED") {
      _0x100d14.getState().event(_0x4cf250, _0x4f9204);
    }
  }, [_0x2461f2]);
  _0x1088ff.useEffect(() => {
    if (_0x4ecaa0 && _0x2461f2 && _0x4ecaa0.guildId === _0x2461f2 && _0x563e60) {
      if (_0x563e60.config.enabled) {
        if (_0x4ecaa0.tab === "guide" && !_0x563e60.config.guide.enabled) {
          _0x100d14.getState().open(_0x2461f2, "questions");
        }
      } else {
        _0x100d14.getState().close();
      }
    }
  }, [_0x2461f2, _0x563e60?.config.enabled, _0x563e60?.config.guide.enabled, _0x4ecaa0?.tab, _0x4ecaa0?.guildId]);
  const _0x326149 = new Set([...(_0x563e60?.config.default_channel_ids ?? []), ..._0x277c33, ...(_0x563e60?.config.prompts.flatMap(_0x319158 => _0x319158.options.filter(_0x165862 => _0xf3c4c7[_0x319158.id]?.includes(_0x165862.id)).flatMap(_0x38063b => _0x38063b.channel_ids)) ?? [])].filter(_0x536492 => !_0x58eb08.includes(_0x536492)));
  const _0xc1bb9f = _0x563e60?.config.prompts.filter(_0x4221ba => _0x4221ba.in_onboarding) ?? [];
  const _0x331b2f = _0x563e60 && _0x4ecaa0?.required ? {
    ..._0x563e60.config,
    prompts: _0xc1bb9f.slice(_0x560435, _0x560435 + 1)
  } : _0x563e60?.config;
  return <_0x56c6d3 open={!!_0x2461f2 && _0x4ecaa0?.guildId === _0x2461f2} onOpenChange={_0x1da8a0 => {
    if (!_0x1da8a0 && !_0x4ecaa0?.required) {
      _0x100d14.getState().close();
    }
  }}><_0x44eb99 className="max-w-2xl max-h-[85dvh] flex flex-col"><_0x3e3703><_0x2e2249>{_0x32cb5e(_0x4ecaa0?.required ? "orientation.welcome" : "orientation.title")}</_0x2e2249><_0x3c1dcb>{_0x32cb5e("orientation.description")}</_0x3c1dcb></_0x3e3703>{_0x563e60 ? <_0x44e4de.Fragment><Z value={_0x4ecaa0?.tab ?? "questions"} onValueChange={_0x3f4549 => _0x2461f2 && _0x100d14.getState().open(_0x2461f2, _0x3f4549, _0x4ecaa0?.required)} className="flex-1 overflow-y-auto space-y-4"><H><Q value="questions">{_0x32cb5e("orientation.customize")}</Q>{!_0x4ecaa0?.required && <Q value="channels">{_0x32cb5e("orientation.browse")}</Q>}{!_0x4ecaa0?.required && _0x563e60.config.guide.enabled && <Q value="guide">{_0x32cb5e("orientation.guide")}</Q>}</H><W value="questions"><J config={_0x331b2f} answers={_0xf3c4c7} onChange={_0x252eb7} beforeOnly={_0x4ecaa0?.required} /></W><W value="channels" className="space-y-3"><_0x842386 value={_0x108708} onChange={_0x1031d4 => _0xc72be2(_0x1031d4.target.value)} placeholder={_0x32cb5e("orientation.search")} />{_0x46b752.filter(_0x5d2a7a => _0x5d2a7a.name.toLowerCase().includes(_0x108708.toLowerCase()) && (!_0x563e60.config.guide.enabled || !_0x563e60.config.guide.resource_channel_ids.includes(_0x5d2a7a.id))).map(_0x13df90 => <_0x599470 variant="outline" className="w-full justify-start gap-3" onClick={() => {
              if (_0x326149.has(_0x13df90.id)) {
                _0x28f840(_0x3943d6 => [..._0x3943d6, _0x13df90.id]);
                _0x3238b1(_0x5c8b61 => _0x5c8b61.filter(_0x3446cf => _0x3446cf !== _0x13df90.id));
              } else {
                _0x28f840(_0x3f81fa => _0x3f81fa.filter(_0x59421c => _0x59421c !== _0x13df90.id));
                _0x3238b1(_0x94c807 => _0x94c807.includes(_0x13df90.id) ? _0x94c807 : [..._0x94c807, _0x13df90.id]);
              }
            }} key={_0x13df90.id}><_0x56dcb0 icon={_0x326149.has(_0x13df90.id) ? "solar:check-square-bold" : "solar:square-linear"} /><span>{_0x13df90.name}</span></_0x599470>)}</W><W value="guide" className="space-y-5"><_0x396bd5 content={_0x563e60.config.guide.welcome} />{_0x563e60.config.guide.tasks.map(_0x17dbad => <_0x599470 variant="outline" className="w-full h-auto justify-start gap-3 py-3 whitespace-normal text-left" disabled={_0x397931} onClick={() => {
              if (!_0x2461f2) {
                return;
              }
              _0x17e789(true);
              const _0x142231 = _0x5e2d30.includes(_0x17dbad.id) ? _0x5e2d30 : [..._0x5e2d30, _0x17dbad.id];
              _0x100d14.getState().save(_0x2461f2, {
                hidden_channel_ids: _0x58eb08,
                member_revision: _0x563e60.state.revision,
                version: _0x563e60.version,
                answers: _0xf3c4c7,
                channel_ids: _0x277c33.filter(_0x5b942a => _0x46b752.some(_0x30a072 => _0x30a072.id === _0x5b942a)),
                completed_task_ids: _0x142231,
                complete: false
              }).then(() => {
                _0x7607ab("/app/server/" + _0x2461f2 + "/" + _0x17dbad.channel_id);
                _0x100d14.getState().close();
              }).catch(() => _0x1c3bfc.error(_0x32cb5e("orientation.saveFailed"))).finally(() => _0x17e789(false));
            }} key={_0x17dbad.id}><_0x56dcb0 icon={_0x5e2d30.includes(_0x17dbad.id) ? "solar:check-circle-bold" : "solar:circle-linear"} /><div>{_0x17dbad.title}<p className="text-xs text-text-muted">{_0x17dbad.description}</p></div></_0x599470>)}{_0x563e60.config.guide.resource_channel_ids.filter(_0x39cbec => _0x46b752.some(_0x45f6e8 => _0x45f6e8.id === _0x39cbec)).map(_0x5c9ae4 => <_0x599470 variant="secondary" className="w-full justify-start" onClick={() => {
              _0x7607ab("/app/server/" + _0x2461f2 + "/" + _0x5c9ae4, {
                state: {
                  resourcePage: true
                }
              });
              _0x100d14.getState().close();
            }} key={_0x5c9ae4}><_0x56dcb0 icon="solar:book-linear" className="mr-2" />{_0x46b752.find(_0x10f1f5 => _0x10f1f5.id === _0x5c9ae4)?.name}</_0x599470>)}</W></Z><div className="flex justify-end gap-2 border-t border-border-default pt-4">{_0x4ecaa0?.required && _0x560435 > 0 && <_0x599470 variant="outline" onClick={() => _0xb6fc62(_0xbecda5 => _0xbecda5 - 1)}>{_0x32cb5e("orientation.previous")}</_0x599470>}<_0x599470 disabled={_0x397931 || !_0x563e60.config.enabled || !!_0x4ecaa0?.required && !!_0xc1bb9f[_0x560435]?.required && !_0xf3c4c7[_0xc1bb9f[_0x560435].id]?.length} onClick={() => {
            if (_0x4ecaa0?.required && _0x560435 < _0xc1bb9f.length - 1) {
              _0xb6fc62(_0x3334ca => _0x3334ca + 1);
            } else {
              (async _0x34c3b4 => {
                if (_0x2461f2 && _0x563e60 && !_0x397931) {
                  _0x17e789(true);
                  try {
                    await _0x100d14.getState().save(_0x2461f2, {
                      hidden_channel_ids: _0x58eb08,
                      member_revision: _0x563e60.state.revision,
                      version: _0x563e60.version,
                      answers: _0xf3c4c7,
                      channel_ids: _0x277c33.filter(_0x21592c => _0x46b752.some(_0x2bf469 => _0x2bf469.id === _0x21592c)),
                      completed_task_ids: _0x5e2d30,
                      complete: _0x34c3b4
                    });
                    _0x3b333d();
                    if (_0x4ecaa0?.required && _0x563e60.config.guide.enabled) {
                      _0x100d14.getState().open(_0x2461f2, "guide");
                    } else {
                      _0x100d14.getState().close();
                    }
                  } catch {
                    _0x1c3bfc.error(_0x32cb5e("orientation.saveFailed"));
                    _0x100d14.getState().load(_0x2461f2, true);
                  } finally {
                    _0x17e789(false);
                  }
                }
              })(true);
            }
          }}>{_0x32cb5e(_0x4ecaa0?.required ? _0x560435 < _0xc1bb9f.length - 1 ? "orientation.next" : "orientation.complete" : "orientation.save")}</_0x599470></div></_0x44e4de.Fragment> : <div className="py-8 text-center"><p>{_0x32cb5e(_0x20249e ? "orientation.unavailable" : "common.loading")}</p>{_0x20249e && <_0x599470 variant="outline" onClick={() => _0x2461f2 && void _0x100d14.getState().load(_0x2461f2, true)}>{_0x32cb5e("orientation.retry")}</_0x599470>}</div>}</_0x44eb99></_0x56c6d3>;
}
A(K, "makeTriggerId");
A(U, "makeContentId");
export { Y as A, X as G, J as O, Z as T, H as a, Q as b, W as c };