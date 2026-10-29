import { t as _0x35cc72, c as _0x30f2e1, O as _0x4ad891, b as _0x2e2ec9, f as _0x14c9d3, d as _0x1625c1, r as _0xcdc3ba, j as _0x38e95e, c3 as _0x47d3dc, an as _0x27a123, X as _0x344352, as as _0x597a98, at as _0x1ce379, au as _0x36b03b, av as _0x143036, aw as _0x33f922, G as _0x1a1cb0 } from "./index-cQfEKR1W.js";
import { getSessions as _0x328dd0, getSessionStats as _0x32db7a, getSessionLimit as _0x333aee, endSession as _0x2c979d, endAllSessions as _0x47ae78 } from "./sessions-grdrH4SC.js";
import { C as _0x5c9b26 } from "./ConfirmDialog-B4gIndKy.js";
import { I as _0x15d95e } from "./input-AMyERYwJ.js";
import { S as _0x3976e1 } from "./separator-Ba6vNTx4.js";
import { E as _0xe285fd } from "./ellipsis-Bsf-uAoC.js";
import { P as _0x117f4c } from "./pencil-Uxk32dwB.js";
import { S as _0xa82073 } from "./shield-off-BIo5sBqK.js";
import { T as _0x4b9fd7 } from "./trash-2-DuFcDcAU.js";
import { L as _0x445aaf } from "./user-DSjlY8FD.js";
import { S as _0x4c83e9 } from "./smartphone-CEPSHImI.js"; /**
                                                           * @license lucide-react v0.535.0 - ISC
                                                           *
                                                           * This source code is licensed under the ISC license.
                                                           * See the LICENSE file in the root directory of this source tree.
                                                           */
const L = _0x35cc72("activity", [["path", {
  d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
  key: "169zse"
}]]);
const T = _0x35cc72("screen-share", [["path", {
  d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",
  key: "i8wdob"
}], ["path", {
  d: "M8 21h8",
  key: "1ev6f3"
}], ["path", {
  d: "M12 17v4",
  key: "1riwvh"
}], ["path", {
  d: "m17 8 5-5",
  key: "fqif7o"
}], ["path", {
  d: "M17 3h5v5",
  key: "1o3tu8"
}]]);
const $ = _0x35cc72("shield-check", [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}], ["path", {
  d: "m9 12 2 2 4-4",
  key: "dzmm74"
}]]);
const A = _0x35cc72("tablet", [["rect", {
  width: "16",
  height: "20",
  x: "4",
  y: "2",
  rx: "2",
  ry: "2",
  key: "76otgf"
}], ["line", {
  x1: "12",
  x2: "12.01",
  y1: "18",
  y2: "18",
  key: "1dp563"
}]]);
const E = () => {
  const {
    t: _0x444c36,
    i18n: _0x530829
  } = _0x2e2ec9("devices");
  const {
    logout: _0x31505b
  } = _0x14c9d3();
  const _0x170e21 = _0x1625c1();
  const [_0x327b63, _0x448c6a] = _0xcdc3ba.useState([]);
  const [_0x525898, _0x267cd2] = _0xcdc3ba.useState(false);
  const [_0x2526ae, _0x494cbe] = _0xcdc3ba.useState(null);
  const [_0x261345, _0x3b1e62] = _0xcdc3ba.useState([]);
  const [_0x232c11, _0x3a1fd0] = _0xcdc3ba.useState(null);
  const [_0x5f0a15, _0x5fdd26] = _0xcdc3ba.useState(null);
  const [_0x371410, _0x45c198] = _0xcdc3ba.useState(null);
  const [_0x1f165f, _0x364e40] = _0xcdc3ba.useState("");
  const [_0xb4d465, _0x481462] = _0xcdc3ba.useState(false);
  const [_0x5a9f2c, _0x24044c] = _0xcdc3ba.useState(null);
  const [_0x10046a, _0x4ff9de] = _0xcdc3ba.useState(false);
  const [_0x23b84e, _0x55e926] = _0xcdc3ba.useState(null);
  const [_0xbc85b1, _0x28d0d5] = _0xcdc3ba.useState(false);
  const [_0x3f93ff, _0x1c2242] = _0xcdc3ba.useState(false);
  const [_0x47ac21, _0x3a804f] = _0xcdc3ba.useState(false);
  const _0x288b2f = _0xaf4de9 => {
    switch (_0xaf4de9) {
      case "desktop":
      default:
        return <_0x47d3dc className="size-5" />;
      case "mobile":
        return <_0x4c83e9 className="size-5" />;
      case "tablet":
        return <A className="size-5" />;
    }
  };
  const _0x5cb2f2 = _0x570c72 => {
    switch (_0x570c72) {
      case "desktop":
        return "text-blue-400";
      case "mobile":
        return "text-green-400";
      case "tablet":
        return "text-purple-400";
      default:
        return "text-text-tertiary";
    }
  };
  const _0x4aebe9 = _0x59f961 => {
    switch (_0x59f961) {
      case "desktop":
        return "bg-blue-500/20";
      case "mobile":
        return "bg-green-500/20";
      case "tablet":
        return "bg-purple-500/20";
      default:
        return "bg-surface-inset/20";
    }
  };
  const _0x3df3c8 = _0x2a4c4c => {
    switch (_0x2a4c4c) {
      case "web":
      default:
        return <_0x1a1cb0 className="size-3.5" />;
      case "mobile":
        return <_0x4c83e9 className="size-3.5" />;
      case "desktop":
        return <_0x47d3dc className="size-3.5" />;
    }
  };
  const _0xf5410d = _0xcdc3ba.useMemo(() => {
    const _0x226ad8 = {};
    _0x261345.forEach(_0x371005 => {
      _0x226ad8[_0x371005.device_id] ||= [];
      _0x226ad8[_0x371005.device_id].push(_0x371005);
    });
    return _0x226ad8;
  }, [_0x261345]);
  const _0x18194a = _0xcdc3ba.useCallback(async () => {
    try {
      _0x267cd2(true);
      const _0x2ab99b = await async function () {
        try {
          return (await _0x30f2e1.get("/api/v1/auth/devices")).data;
        } catch (_0x121b53) {
          throw _0x4ad891(_0x121b53);
        }
      }();
      _0x448c6a(_0x2ab99b.devices);
      if (_0x2ab99b.devices.length > 0) {
        _0x494cbe(_0x2ab99b.devices[0].id);
      }
    } catch {} finally {
      _0x267cd2(false);
    }
  }, []);
  const _0xb637b8 = _0xcdc3ba.useCallback(async () => {
    try {
      const _0x4994f3 = await _0x328dd0();
      _0x3b1e62(_0x4994f3.sessions);
    } catch {}
  }, []);
  const _0x523f7a = _0xcdc3ba.useCallback(async () => {
    try {
      const [_0x47277d, _0x5119b2] = await Promise.all([_0x32db7a(), _0x333aee()]);
      _0x3a1fd0(_0x47277d);
      _0x5fdd26(_0x5119b2);
    } catch {}
  }, []);
  _0xcdc3ba.useEffect(() => {
    _0x18194a();
    _0xb637b8();
    _0x523f7a();
  }, [_0x18194a, _0xb637b8, _0x523f7a]);
  const _0xbcb199 = _0xcdc3ba.useCallback(_0x4b8211 => {
    _0x45c198(_0x4b8211.id);
    _0x364e40(_0x4b8211.name);
  }, []);
  const _0x41be73 = _0xcdc3ba.useCallback(() => {
    _0x45c198(null);
    _0x364e40("");
  }, []);
  const _0x4302ef = _0xcdc3ba.useCallback(async _0x31581e => {
    if (_0x1f165f.trim()) {
      try {
        _0x481462(true);
        await async function (_0x553c3b, _0x559a8e) {
          try {
            return (await _0x30f2e1.patch("/api/v1/auth/devices/" + _0x553c3b, {
              name: _0x559a8e
            })).data;
          } catch (_0x3f92b1) {
            throw _0x4ad891(_0x3f92b1);
          }
        }(_0x31581e, _0x1f165f.trim());
        _0x448c6a(_0x408fcb => _0x408fcb.map(_0x20840a => _0x20840a.id === _0x31581e ? {
          ..._0x20840a,
          name: _0x1f165f.trim()
        } : _0x20840a));
        _0x45c198(null);
        _0x364e40("");
      } catch {} finally {
        _0x481462(false);
      }
    }
  }, [_0x1f165f]);
  const _0x571ae6 = _0xcdc3ba.useCallback(async () => {
    if (_0x5a9f2c) {
      try {
        _0x4ff9de(true);
        await async function (_0x31da12) {
          try {
            return (await _0x30f2e1.delete("/api/v1/auth/devices/" + _0x31da12)).data;
          } catch (_0x17aa6a) {
            throw _0x4ad891(_0x17aa6a);
          }
        }(_0x5a9f2c.id);
        _0x448c6a(_0x5edcfb => _0x5edcfb.filter(_0x2bf3aa => _0x2bf3aa.id !== _0x5a9f2c.id));
        _0x3b1e62(_0x3bf8fd => _0x3bf8fd.filter(_0x49b6ea => _0x49b6ea.device_id !== _0x5a9f2c.id));
      } catch {} finally {
        _0x4ff9de(false);
        _0x24044c(null);
      }
    }
  }, [_0x5a9f2c]);
  const _0x1856c2 = _0xcdc3ba.useCallback(async _0xfde295 => {
    const _0x36bba1 = !_0xfde295.is_trusted;
    try {
      await async function (_0x62f22f, _0x11735f) {
        try {
          return (await _0x30f2e1.patch("/api/v1/auth/devices/" + _0x62f22f + "/trust", {
            is_trusted: _0x11735f
          })).data;
        } catch (_0x1d2a2d) {
          throw _0x4ad891(_0x1d2a2d);
        }
      }(_0xfde295.id, _0x36bba1);
      _0x448c6a(_0x33dcb3 => _0x33dcb3.map(_0x2ad122 => _0x2ad122.id === _0xfde295.id ? {
        ..._0x2ad122,
        is_trusted: _0x36bba1
      } : _0x2ad122));
    } catch {}
  }, []);
  const _0x39a3cb = _0xcdc3ba.useCallback(async () => {
    if (_0x23b84e) {
      try {
        _0x28d0d5(true);
        await _0x2c979d(_0x23b84e.id);
        _0x3b1e62(_0x4e0f22 => _0x4e0f22.filter(_0x28cf8b => _0x28cf8b.id !== _0x23b84e.id));
        _0x523f7a();
      } catch {} finally {
        _0x28d0d5(false);
        _0x55e926(null);
      }
    }
  }, [_0x23b84e, _0x523f7a]);
  const _0x68eb78 = _0xcdc3ba.useCallback(async () => {
    try {
      _0x3a804f(true);
      await _0x47ae78();
      _0x1c2242(false);
      _0x31505b();
      _0x170e21("/login", {
        replace: true
      });
    } catch {} finally {
      _0x3a804f(false);
    }
  }, [_0x31505b, _0x170e21]);
  return <div className="space-y-8">{(_0x232c11 || _0x5f0a15) && <section><div className="mb-4 sm:mb-6"><div className="flex items-center gap-2"><L className="size-4 text-text-tertiary" /><div className="text-base font-semibold text-text-secondary">{_0x444c36("sessionStats")}</div></div></div><div className="grid grid-cols-2 sm:grid-cols-4 gap-3">{_0x232c11 && <_0x38e95e.Fragment><div className="rounded-xl bg-surface-overlay/40 border border-border-default p-3"><div className="text-[11px] text-text-muted uppercase tracking-wider">{_0x444c36("totalSessions")}</div><div className="text-2xl font-bold text-text-secondary mt-1">{_0x232c11.total_sessions}</div></div><div className="rounded-xl bg-surface-overlay/40 border border-border-default p-3"><div className="text-[11px] text-text-muted uppercase tracking-wider">{_0x444c36("activeStat")}</div><div className="text-2xl font-bold text-green-500 mt-1">{_0x232c11.active_sessions}</div></div><div className="rounded-xl bg-surface-overlay/40 border border-border-default p-3"><div className="text-[11px] text-text-muted uppercase tracking-wider">{_0x444c36("last24h")}</div><div className="text-2xl font-bold text-blue-400 mt-1">{_0x232c11.sessions_last_24h}</div></div></_0x38e95e.Fragment>}{_0x5f0a15 && <div className="rounded-xl bg-surface-overlay/40 border border-border-default p-3"><div className="text-[11px] text-text-muted uppercase tracking-wider">{_0x444c36("sessionLimit")}</div><div className="text-2xl font-bold text-text-secondary mt-1">{_0x5f0a15.current_sessions}/{_0x5f0a15.max_sessions}</div><div className="mt-2 h-1.5 rounded-full bg-surface-inset/50 overflow-hidden"><div className="h-full rounded-full bg-accent-primary transition-all" style={{
              width: Math.min(_0x5f0a15.usage_percentage, 100) + "%"
            }} /></div></div>}</div></section>}{(_0x232c11 || _0x5f0a15) && <_0x3976e1 className="bg-surface-overlay/70" />}<section><div className="mb-4 sm:mb-6"><div className="flex items-center gap-2"><T className="size-4 text-text-tertiary" /><div className="text-base font-semibold text-text-secondary">{_0x444c36("sessionManagement")}</div></div><p className="text-sm text-text-muted mt-0.5">{_0x444c36("sessionManagementDesc")}</p><p className="text-[12px] text-amber-600/80 dark:text-amber-400/60 mt-1">{_0x444c36("devNotice")}</p></div><div className="rounded-xl bg-surface-overlay/40 border border-border-default"><div className="flex items-center gap-3 px-4 py-3 border-b border-border-default"><span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-overlay/70"><_0x47d3dc className="size-4 text-text-secondary" /></span><div className="flex-1 min-w-0"><div className="text-[15px] font-medium text-text-secondary">{_0x444c36("activeDevices")}</div><div className="text-[13px] text-text-tertiary mt-0.5">{_0x444c36("devicesConnected", {
                count: _0x327b63.length
              })}</div></div></div>{_0x525898 ? <div className="divide-y divide-border-default">{[1, 2, 3].map(_0x2824a2 => <div className="px-4 py-3 animate-pulse" key={_0x2824a2}><div className="flex items-center gap-3"><div className="size-10 bg-surface-inset/50 rounded-lg" /><div className="flex-1 space-y-2"><div className="h-4 w-32 bg-surface-inset/50 rounded" /><div className="h-3 w-24 bg-surface-inset/50 rounded" /></div></div></div>)}</div> : _0x327b63.length === 0 ? <div className="text-center py-8 text-text-tertiary"><_0x47d3dc className="w-8 h-8 mx-auto mb-2 opacity-50" /><p className="text-sm">{_0x444c36("noDevicesFound")}</p></div> : <div className="divide-y divide-border-default">{_0x327b63.map(_0x40a6da => {
            const _0xf7f913 = _0x40a6da.id === _0x2526ae;
            const _0x53cbf2 = _0xf5410d[_0x40a6da.id] || [];
            const _0x52393b = _0x371410 === _0x40a6da.id;
            return <div className={"px-4 py-3 " + (_0xf7f913 ? "bg-green-900/10" : "")} key={_0x40a6da.id}><div className="flex items-start gap-3"><div className={"flex size-10 shrink-0 items-center justify-center rounded-lg " + _0x4aebe9(_0x40a6da.type)}><span className={_0x5cb2f2(_0x40a6da.type)}>{_0x288b2f(_0x40a6da.type)}</span></div><div className="flex-1 min-w-0">{_0x52393b ? <div className="flex items-center gap-2"><_0x15d95e value={_0x1f165f} onChange={_0x2b8162 => _0x364e40(_0x2b8162.target.value)} onKeyDown={_0x36a4ee => {
                      if (_0x36a4ee.key === "Enter") {
                        _0x4302ef(_0x40a6da.id);
                      }
                      if (_0x36a4ee.key === "Escape") {
                        _0x41be73();
                      }
                    }} className="h-8 text-sm bg-surface-overlay/50 border-border-default" autoFocus={true} disabled={_0xb4d465} /><button onClick={() => _0x4302ef(_0x40a6da.id)} disabled={_0xb4d465 || !_0x1f165f.trim()} className="p-1.5 rounded-md text-green-400 hover:bg-green-500/20 disabled:opacity-50 cursor-pointer"><_0x27a123 className="size-4" /></button><button onClick={_0x41be73} className="p-1.5 rounded-md text-text-tertiary hover:bg-surface-overlay/50 cursor-pointer"><_0x344352 className="size-4" /></button></div> : <div className="flex items-center gap-2 flex-wrap"><span className="text-[15px] font-medium text-text-secondary truncate">{_0x40a6da.name}</span>{_0xf7f913 && <span className="text-[11px] text-green-400 bg-green-500/20 px-1.5 py-0.5 rounded">{_0x444c36("thisDevice")}</span>}{_0x40a6da.is_trusted && <span className="text-[11px] text-blue-400 bg-blue-500/20 px-1.5 py-0.5 rounded">{_0x444c36("trusted")}</span>}</div>}<div className="text-[13px] text-text-tertiary mt-0.5">{_0x40a6da.capabilities.browser} • {_0x40a6da.capabilities.os}</div><div className="text-[13px] text-text-muted mt-0.5">{_0x40a6da.location_data?.city && _0x40a6da.location_data?.country_name ? _0x40a6da.location_data.city + ", " + _0x40a6da.location_data.country_name : _0x444c36("locationUnknown")} • {new Date(_0x40a6da.last_used).toLocaleDateString(_0x530829.language)}</div>{_0x53cbf2.length > 0 && <div className="mt-2 space-y-1">{_0x53cbf2.map(_0xf7f48e => <div className="flex items-center justify-between gap-2 py-1 px-2 rounded-lg bg-surface-overlay/30" key={_0xf7f48e.id}><div className="flex items-center gap-2 min-w-0"><span className="text-text-muted">{_0x3df3c8(_0xf7f48e.session_type)}</span><span className="text-[12px] text-text-tertiary truncate">{_0xf7f48e.ip_address}</span><span className="text-[11px] text-text-muted">{new Date(_0xf7f48e.last_activity).toLocaleDateString(_0x530829.language)}</span>{_0xf7f48e.is_active && <span className="size-1.5 rounded-full bg-green-400 shrink-0" />}</div><button onClick={() => _0x55e926(_0xf7f48e)} className="text-[11px] text-red-400 hover:text-red-300 px-1.5 py-0.5 rounded hover:bg-red-500/10 shrink-0 cursor-pointer">{_0x444c36("endSession")}</button></div>)}</div>}</div>{!_0x52393b && <_0x597a98><_0x1ce379 asChild={true}><button className="p-1.5 rounded-md text-text-tertiary hover:text-text-secondary hover:bg-surface-overlay/50 cursor-pointer shrink-0"><_0xe285fd className="size-4" /></button></_0x1ce379><_0x36b03b align="end" className="w-59"><_0x143036 onClick={() => _0xbcb199(_0x40a6da)}><_0x117f4c className="size-4" /><span className="flex-1">{_0x444c36("rename")}</span></_0x143036><_0x143036 onClick={() => _0x1856c2(_0x40a6da)}>{_0x40a6da.is_trusted ? <_0x38e95e.Fragment><_0xa82073 className="size-4" /><span className="flex-1">{_0x444c36("untrustDevice")}</span></_0x38e95e.Fragment> : <_0x38e95e.Fragment><$ className="size-4" /><span className="flex-1">{_0x444c36("trustDevice")}</span></_0x38e95e.Fragment>}</_0x143036>{!_0xf7f913 && <_0x38e95e.Fragment><_0x33f922 /><_0x143036 variant="destructive" onClick={() => _0x24044c(_0x40a6da)}><_0x4b9fd7 className="size-4" /><span className="flex-1">{_0x444c36("removeDevice")}</span></_0x143036></_0x38e95e.Fragment>}</_0x36b03b></_0x597a98>}</div></div>;
          })}</div>}</div>{_0x261345.length > 0 && <div className="mt-3"><div className="rounded-xl bg-red-500/10 dark:bg-red-900/20 border border-red-500/20 dark:border-red-800/50 overflow-hidden"><button onClick={() => _0x1c2242(true)} className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-red-500/15 dark:hover:bg-red-900/25 active:bg-red-500/20 dark:active:bg-red-900/40 transition-colors cursor-pointer"><span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-red-500/15 dark:bg-red-500/20"><_0x445aaf className="size-4 text-red-500 dark:text-red-400" /></span><div className="flex-1 min-w-0"><div className="text-[15px] font-medium text-red-700 dark:text-red-200">{_0x444c36("endAllSessions")}</div><div className="text-[13px] text-red-500 dark:text-red-400 mt-0.5">{_0x444c36("endAllSessionsWarning")}</div></div></button></div></div>}<div className="mt-3"><small className="text-[11px] text-text-muted">IP geolocation by <a href="https://lite.ip2location.com" target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-text-secondary underline transition-colors">IP2Location LITE</a></small></div></section><_0x5c9b26 open={!!_0x5a9f2c} onOpenChange={_0x35f653 => !_0x35f653 && _0x24044c(null)} onConfirm={_0x571ae6} isLoading={_0x10046a} icon={<_0x4b9fd7 className="size-5 text-red-400" />} title={_0x444c36("removeDevice")} subtitle={_0x5a9f2c?.name} description={_0x444c36("removeDeviceConfirm")} warningText={_0x444c36("removeDeviceWarning")} confirmText={_0x444c36("confirm")} variant="danger" /><_0x5c9b26 open={!!_0x23b84e} onOpenChange={_0xe81e1b => !_0xe81e1b && _0x55e926(null)} onConfirm={_0x39a3cb} isLoading={_0xbc85b1} icon={<_0x445aaf className="size-5 text-red-400" />} title={_0x444c36("endSession")} subtitle={_0x23b84e?.ip_address} description={_0x444c36("endSessionConfirm")} warningText={_0x444c36("endSessionWarning")} confirmText={_0x444c36("confirm")} variant="danger" /><_0x5c9b26 open={_0x3f93ff} onOpenChange={_0x1c2242} onConfirm={_0x68eb78} isLoading={_0x47ac21} icon={<_0x445aaf className="size-5 text-red-400" />} title={_0x444c36("endAllSessions")} description={_0x444c36("endAllSessionsConfirm")} warningText={_0x444c36("endAllSessionsWarning")} confirmText={_0x444c36("confirm")} variant="danger" /></div>;
};
const F = Object.freeze(Object.defineProperty({
  __proto__: null,
  default: E
}, Symbol.toStringTag, {
  value: "Module"
}));
export { E as D, $ as S, F as a };