import { r as _0x186baf, b as _0xe3f8ba, j as _0x2d17dc, s, I as _0x12ab5e, an as _0x48007e, L as _0x274218, aN as _0x2555cf } from "./index-cQfEKR1W.js";
import { c as _0x2b6290 } from "./clipboard-BQ9qambq.js";
import { L as _0x2f8638 } from "./loader-circle-CTtxa1g9.js";
const i = "https://gateway.jubbio.com/api/v1";
const x = "jubbio_docs_bot_token";
function m() {
  try {
    return localStorage.getItem(x) || "";
  } catch {
    return "";
  }
}
const u = _0x36903f => _0x36903f < 300 ? "bg-emerald-500/15 ring-emerald-500/25" : _0x36903f < 400 ? "bg-amber-500/15 ring-amber-500/25" : "bg-red-500/15 ring-red-500/25";
const p = "tryit_param_";
function b(_0x479d88) {
  try {
    return sessionStorage.getItem(p + _0x479d88) || "";
  } catch {
    return "";
  }
}
const h = _0x186baf.memo(function ({
  method: _0x10dadc,
  path: _0xb2447,
  params: _0xa6ec9d = [],
  bodyType: _0x29c556 = "none",
  bodyTemplate: _0x51c867
}) {
  const {
    t: _0x1df569
  } = _0xe3f8ba("docs");
  const [_0x4f2edb, _0x45bd1b] = _0x186baf.useState(m);
  const [_0x51f4b9, _0x1d0d8a] = _0x186baf.useState(() => {
    const _0x453343 = {};
    for (const _0x2455a8 of _0xa6ec9d) {
      _0x453343[_0x2455a8.name] = _0x2455a8.defaultValue || (_0x2455a8.in === "path" ? b(_0x2455a8.name) : "");
    }
    return _0x453343;
  });
  const [_0x465a15, _0x4d5f9b] = _0x186baf.useState(_0x51c867 || "");
  const [_0x55a0e8, _0x5a7932] = _0x186baf.useState(null);
  const [_0x1ce61a, _0x166c9b] = _0x186baf.useState(false);
  const [_0x441f66, _0xdd4d0b] = _0x186baf.useState(null);
  const [_0x1c0a57, _0x205f65] = _0x186baf.useState(false);
  _0x186baf.useEffect(() => {
    (function (_0x5b14a5) {
      try {
        localStorage.setItem(x, _0x5b14a5);
      } catch {}
    })(_0x4f2edb);
  }, [_0x4f2edb]);
  const _0x32e23d = _0x186baf.useCallback((_0x5cbe50, _0x508b52, _0x331a59) => {
    _0x1d0d8a(_0x583159 => ({
      ..._0x583159,
      [_0x5cbe50]: _0x508b52
    }));
    if (_0x331a59 === "path") {
      (function (_0x205457, _0x1a73cc) {
        try {
          if (_0x1a73cc) {
            sessionStorage.setItem(p + _0x205457, _0x1a73cc);
          } else {
            sessionStorage.removeItem(p + _0x205457);
          }
        } catch {}
      })(_0x5cbe50, _0x508b52);
    }
  }, []);
  const _0x36caa2 = _0x186baf.useCallback(() => {
    let _0x185237 = i + _0xb2447;
    const _0x2c87a0 = [];
    for (const _0x555ead of _0xa6ec9d) {
      const _0x33d4ed = _0x51f4b9[_0x555ead.name] || "";
      if (_0x555ead.in === "path") {
        _0x185237 = _0x185237.replace("{" + _0x555ead.name + "}", encodeURIComponent(_0x33d4ed));
      } else if (_0x555ead.in === "query" && _0x33d4ed) {
        _0x2c87a0.push(encodeURIComponent(_0x555ead.name) + "=" + encodeURIComponent(_0x33d4ed));
      }
    }
    if (_0x2c87a0.length) {
      _0x185237 += "?" + _0x2c87a0.join("&");
    }
    return _0x185237;
  }, [_0xb2447, _0xa6ec9d, _0x51f4b9]);
  const _0x38c944 = _0x186baf.useCallback(async () => {
    _0x166c9b(true);
    _0xdd4d0b(null);
    _0x5a7932(null);
    _0x205f65(false);
    const _0x5499fe = _0x36caa2();
    const _0x442cfd = {};
    if (_0x4f2edb) {
      _0x442cfd.Authorization = _0x4f2edb.startsWith("Bot ") || _0x4f2edb.startsWith("Bearer ") ? _0x4f2edb : "Bot " + _0x4f2edb;
    }
    const _0x4fbd34 = _0x29c556 === "json" && _0x465a15.trim() && _0x10dadc !== "GET";
    if (_0x4fbd34) {
      _0x442cfd["Content-Type"] = "application/json";
    }
    const _0x5e80c8 = performance.now();
    try {
      const _0x50f83c = await fetch(_0x5499fe, {
        method: _0x10dadc,
        headers: _0x442cfd,
        body: _0x4fbd34 ? _0x465a15 : undefined
      });
      const _0x344260 = Math.round(performance.now() - _0x5e80c8);
      let _0x4d2cb5;
      try {
        const _0x3712fe = await _0x50f83c.json();
        _0x4d2cb5 = JSON.stringify(_0x3712fe, null, 2);
      } catch {
        _0x4d2cb5 = await _0x50f83c.text().catch(() => _0x1df569("common.emptyResponse"));
        _0x4d2cb5 ||= _0x1df569("common.emptyResponse");
      }
      _0x5a7932({
        status: _0x50f83c.status,
        statusText: _0x50f83c.statusText,
        body: _0x4d2cb5,
        time: _0x344260
      });
    } catch (_0x441865) {
      _0xdd4d0b(_0x441865 instanceof Error ? _0x441865.message : _0x1df569("common.requestFailed"));
    } finally {
      _0x166c9b(false);
    }
  }, [_0x36caa2, _0x4f2edb, _0x465a15, _0x29c556, _0x10dadc]);
  const _0x117870 = _0x186baf.useCallback(() => {
    if (_0x55a0e8) {
      _0x2b6290(_0x55a0e8.body);
      _0x205f65(true);
      setTimeout(() => _0x205f65(false), 1500);
    }
  }, [_0x55a0e8]);
  const _0x5f4479 = _0xa6ec9d.filter(_0x43bae7 => _0x43bae7.in === "path");
  const _0x32f291 = _0xa6ec9d.filter(_0xef01a8 => _0xef01a8.in === "query");
  const _0x52a135 = _0x29c556 === "json" && _0x10dadc !== "GET";
  return _0x2d17dc.jsxs("div", {
    className: "rounded-xl border border-border-default bg-surface-overlay/20 overflow-hidden",
    children: [_0x2d17dc.jsxs(g, {
      label: _0x1df569("common.auth"),
      children: [_0x2d17dc.jsx("input", {
        type: "password",
        value: _0x4f2edb,
        onChange: _0x260652 => _0x45bd1b(_0x260652.target.value),
        placeholder: _0x1df569("common.tokenPlaceholder"),
        className: f
      }), _0x2d17dc.jsx("p", {
        className: "mt-1.5 text-[11px] text-text-muted",
        children: _0x1df569("common.tokenStorageNote")
      })]
    }), _0x5f4479.length > 0 && _0x2d17dc.jsx(g, {
      label: _0x1df569("common.pathParams"),
      children: _0x2d17dc.jsx("div", {
        className: "space-y-2",
        children: _0x5f4479.map(_0x47899d => _0x2d17dc.jsxs("div", {
          className: "flex items-center gap-2.5",
          children: [_0x2d17dc.jsx("code", {
            className: "text-sky-400 text-[12px] font-mono w-28 shrink-0",
            children: "{" + _0x47899d.name + "}"
          }), _0x2d17dc.jsx("input", {
            value: _0x51f4b9[_0x47899d.name] || "",
            onChange: _0x44abd2 => _0x32e23d(_0x47899d.name, _0x44abd2.target.value, "path"),
            placeholder: _0x47899d.placeholder || _0x47899d.name,
            className: f
          })]
        }, _0x47899d.name))
      })
    }), _0x32f291.length > 0 && _0x2d17dc.jsx(g, {
      label: _0x1df569("common.queryParams"),
      children: _0x2d17dc.jsx("div", {
        className: "space-y-2",
        children: _0x32f291.map(_0x5e676e => _0x2d17dc.jsxs("div", {
          className: "flex items-center gap-2.5",
          children: [_0x2d17dc.jsx("code", {
            className: "text-purple-400 text-[12px] font-mono w-28 shrink-0",
            children: _0x5e676e.name
          }), _0x2d17dc.jsx("input", {
            value: _0x51f4b9[_0x5e676e.name] || "",
            onChange: _0x3ad4af => _0x32e23d(_0x5e676e.name, _0x3ad4af.target.value, "query"),
            placeholder: _0x5e676e.placeholder || _0x5e676e.name,
            className: f
          })]
        }, _0x5e676e.name))
      })
    }), _0x52a135 && _0x2d17dc.jsx(g, {
      label: _0x1df569("common.jsonBody"),
      children: _0x2d17dc.jsx("textarea", {
        value: _0x465a15,
        onChange: _0x209c0a => _0x4d5f9b(_0x209c0a.target.value),
        rows: Math.min(Math.max(_0x465a15.split("\n").length, 3), 12),
        spellCheck: false,
        className: s(f, "resize-y min-h-[72px]")
      })
    }), _0x2d17dc.jsxs("div", {
      className: "px-5 py-3.5 flex items-center gap-3 border-t border-border-subtle",
      children: [_0x2d17dc.jsxs("button", {
        onClick: _0x38c944,
        disabled: _0x1ce61a,
        className: s("inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ring-1 ring-inset", _0x1ce61a ? "bg-surface-inset/30 text-text-muted ring-border-strong/40 cursor-wait" : "bg-emerald-500/15 text-emerald-400 ring-emerald-500/25 hover:bg-emerald-500/25 active:scale-[0.97]"),
        children: [_0x1ce61a ? _0x2d17dc.jsx(_0x2f8638, {
          className: "size-3 animate-spin"
        }) : _0x2d17dc.jsx(_0x12ab5e, {
          icon: "solar:plain-bold-duotone",
          className: "size-3"
        }), _0x1df569(_0x1ce61a ? "common.sending" : "common.send")]
      }), _0x55a0e8 && _0x2d17dc.jsxs("div", {
        className: "flex items-center gap-2 text-xs",
        children: [_0x2d17dc.jsxs("span", {
          className: s("inline-flex px-2 py-0.5 rounded-md font-mono font-semibold ring-1 ring-inset", (_0x30fb9a = _0x55a0e8.status, _0x30fb9a < 300 ? "text-emerald-400" : _0x30fb9a < 400 ? "text-amber-400" : "text-red-400"), u(_0x55a0e8.status)),
          children: [_0x55a0e8.status, " ", _0x55a0e8.statusText]
        }), _0x2d17dc.jsx("span", {
          className: "text-text-muted",
          children: "•"
        }), _0x2d17dc.jsxs("span", {
          className: "text-text-muted font-mono",
          children: [_0x55a0e8.time, "ms"]
        })]
      }), _0x441f66 && _0x2d17dc.jsx("span", {
        className: "text-xs text-red-400",
        children: _0x441f66
      })]
    }), _0x55a0e8 && _0x2d17dc.jsxs("div", {
      className: "border-t border-border-subtle",
      children: [_0x2d17dc.jsxs("div", {
        className: "px-5 py-2.5 flex items-center justify-between bg-surface-overlay/20",
        children: [_0x2d17dc.jsx("span", {
          className: "text-xs font-semibold uppercase tracking-wider text-text-tertiary",
          children: _0x1df569("common.response")
        }), _0x2d17dc.jsxs("button", {
          onClick: _0x117870,
          className: "inline-flex items-center gap-1 text-[11px] text-text-muted hover:text-text-secondary transition-colors cursor-pointer",
          children: [_0x1c0a57 ? _0x2d17dc.jsx(_0x48007e, {
            className: "size-3 text-emerald-400"
          }) : _0x2d17dc.jsx(_0x12ab5e, {
            icon: "solar:copy-bold-duotone",
            className: "size-3"
          }), _0x1df569(_0x1c0a57 ? "common.copied" : "common.copy")]
        })]
      }), _0x2d17dc.jsx("div", {
        className: "rounded-b-xl bg-surface-raised/60",
        children: _0x2d17dc.jsx("pre", {
          className: "px-5 py-4 text-[12px] font-mono text-text-secondary leading-relaxed overflow-x-auto max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent whitespace-pre-wrap break-all",
          children: _0x55a0e8.body
        })
      })]
    })]
  });
  var _0x30fb9a;
});
const f = "w-full bg-surface-overlay/30 border border-border-default rounded-lg px-3 py-2 text-[13px] font-mono text-text-secondary placeholder:text-text-muted focus:outline-none focus:border-border-default focus:ring-1 focus:ring-border-default/50 transition-all";
function g({
  label: _0x4964d6,
  children: _0xd6bbc7
}) {
  return _0x2d17dc.jsxs("div", {
    className: "px-5 py-3.5 border-t border-border-subtle first:border-t-0",
    children: [_0x2d17dc.jsx("label", {
      className: "text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-2 block",
      children: _0x4964d6
    }), _0xd6bbc7]
  });
}
const y = _0x186baf.createContext({
  openKey: null,
  setOpenKey: () => {}
});
function j({
  children: _0xd17fbf
}) {
  const [_0x1b2574, _0x50e236] = _0x186baf.useState(null);
  const _0x261fa1 = _0x186baf.useMemo(() => ({
    openKey: _0x1b2574,
    setOpenKey: _0x50e236
  }), [_0x1b2574]);
  return _0x2d17dc.jsx(y.Provider, {
    value: _0x261fa1,
    children: _0xd17fbf
  });
}
function N({
  children: _0x4dc3bc
}) {
  return _0x2d17dc.jsx("h1", {
    className: "text-3xl font-bold text-text-primary mb-6 tracking-tight leading-tight",
    children: _0x4dc3bc
  });
}
function v({
  children: _0x9930c3,
  id: _0x45b376
}) {
  return _0x2d17dc.jsx("h2", {
    id: _0x45b376,
    className: "text-2xl font-semibold text-text-primary mt-14 mb-5 scroll-mt-20 tracking-tight",
    children: _0x9930c3
  });
}
function k({
  children: _0x57efb0,
  id: _0x4e736a
}) {
  return _0x2d17dc.jsx("h3", {
    id: _0x4e736a,
    className: "text-xl font-semibold text-text-secondary mt-10 mb-4 scroll-mt-20",
    children: _0x57efb0
  });
}
function w({
  children: _0x2909f8
}) {
  return _0x2d17dc.jsx("p", {
    className: "text-text-secondary leading-7 mb-5",
    children: _0x2909f8
  });
}
function T({
  children: _0x530533
}) {
  return _0x2d17dc.jsx("code", {
    className: "px-1.5 py-0.5 rounded-md bg-surface-overlay/70 text-sky-400 text-[0.8125rem] font-mono",
    children: _0x530533
  });
}
function C({
  href: _0x261b6f,
  children: _0x37e622,
  external: _0x32af4a
}) {
  if (_0x32af4a || _0x261b6f.startsWith("http")) {
    return _0x2d17dc.jsxs("a", {
      href: _0x261b6f,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "text-emerald-400 hover:text-emerald-300 hover:underline underline-offset-2 inline-flex items-center gap-1 transition-colors",
      children: [_0x37e622, _0x2d17dc.jsx(_0x12ab5e, {
        icon: "solar:square-arrow-right-up-bold-duotone",
        className: "size-3"
      })]
    });
  } else {
    return _0x2d17dc.jsx(_0x274218, {
      to: _0x261b6f,
      className: "text-emerald-400 hover:text-emerald-300 hover:underline underline-offset-2 inline-flex items-center gap-1 transition-colors",
      children: _0x37e622
    });
  }
}
const S = {
  info: "solar:info-circle-bold-duotone",
  warning: "solar:danger-triangle-bold-duotone",
  error: "solar:danger-circle-bold-duotone",
  success: "solar:check-circle-bold-duotone"
};
function E({
  type: _0x23f948 = "info",
  title: _0x46c9bd,
  children: _0x4d1bbe
}) {
  const _0x1c9823 = I[_0x23f948] || I.info;
  const _0x25acdc = S[_0x23f948];
  return _0x2d17dc.jsx("div", {
    className: s("rounded-xl border p-5 mb-6", _0x1c9823.bg, _0x1c9823.border),
    children: _0x46c9bd ? _0x2d17dc.jsxs(_0x2d17dc.Fragment, {
      children: [_0x2d17dc.jsxs("div", {
        className: s("flex items-center gap-2 font-medium mb-2", _0x1c9823.text),
        children: [_0x2d17dc.jsx(_0x12ab5e, {
          icon: _0x25acdc,
          className: "size-4 shrink-0"
        }), _0x2d17dc.jsx("span", {
          children: _0x46c9bd
        })]
      }), _0x2d17dc.jsx("div", {
        className: s("text-sm leading-relaxed", _0x1c9823.bodyText),
        children: _0x4d1bbe
      })]
    }) : _0x2d17dc.jsxs("div", {
      className: s("flex gap-2 text-sm leading-relaxed", _0x1c9823.bodyText),
      children: [_0x2d17dc.jsx(_0x12ab5e, {
        icon: _0x25acdc,
        className: s("size-4 shrink-0 mt-0.5", _0x1c9823.text)
      }), _0x2d17dc.jsx("div", {
        children: _0x4d1bbe
      })]
    })
  });
}
const I = {
  info: {
    bg: "bg-blue-500/8",
    border: "border-blue-500/20",
    text: "text-blue-400",
    bodyText: "text-blue-200/80"
  },
  warning: {
    bg: "bg-amber-500/8",
    border: "border-amber-500/20",
    text: "text-amber-400",
    bodyText: "text-amber-200/80"
  },
  error: {
    bg: "bg-red-500/8",
    border: "border-red-500/20",
    text: "text-red-400",
    bodyText: "text-red-200/80"
  },
  success: {
    bg: "bg-green-500/8",
    border: "border-green-500/20",
    text: "text-green-400",
    bodyText: "text-green-200/80"
  }
};
function q({
  children: _0x119172,
  ordered: _0x54da57
}) {
  const _0x2933c6 = _0x54da57 ? "ol" : "ul";
  return _0x2d17dc.jsx(_0x2933c6, {
    className: s("mb-6 space-y-2.5 text-text-secondary leading-7", _0x54da57 ? "list-decimal list-inside" : "list-disc list-inside"),
    children: _0x119172
  });
}
function z({
  children: _0x9e009f
}) {
  return _0x2d17dc.jsx("li", {
    className: "pl-1",
    children: _0x9e009f
  });
}
function R({
  children: _0x462a89
}) {
  return _0x2d17dc.jsx("div", {
    className: "overflow-x-auto mb-6 rounded-xl border border-border-default",
    children: _0x2d17dc.jsx("table", {
      className: "w-full text-sm",
      children: _0x462a89
    })
  });
}
function P({
  children: _0x2b44ec
}) {
  return _0x2d17dc.jsx("thead", {
    className: "bg-surface-overlay/30 text-text-secondary",
    children: _0x2b44ec
  });
}
function L({
  children: _0x347db9
}) {
  return _0x2d17dc.jsx("tbody", {
    className: "divide-y divide-border-default",
    children: _0x347db9
  });
}
function U({
  children: _0x3ad91e
}) {
  return _0x2d17dc.jsx("tr", {
    className: "transition-colors hover:bg-surface-overlay/20",
    children: _0x3ad91e
  });
}
function B({
  children: _0x5b132f
}) {
  return _0x2d17dc.jsx("th", {
    className: "px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-text-tertiary",
    children: _0x5b132f
  });
}
function $({
  children: _0x236f80
}) {
  return _0x2d17dc.jsx("td", {
    className: "px-5 py-3.5 text-text-secondary",
    children: _0x236f80
  });
}
function _() {
  return _0x2d17dc.jsx("hr", {
    className: "border-border-default my-12"
  });
}
function A({
  method: _0x499225
}) {
  return _0x2d17dc.jsx("span", {
    className: s("px-2.5 py-1 rounded-md text-xs font-mono font-semibold ring-1 ring-inset", {
      GET: "bg-emerald-500/15 text-emerald-400 ring-emerald-500/20",
      POST: "bg-blue-500/15 text-blue-400 ring-blue-500/20",
      PUT: "bg-amber-500/15 text-amber-400 ring-amber-500/20",
      PATCH: "bg-purple-500/15 text-purple-400 ring-purple-500/20",
      DELETE: "bg-red-500/15 text-red-400 ring-red-500/20"
    }[_0x499225]),
    children: _0x499225
  });
}
function K({
  method: _0x51cfe1,
  path: _0x5d41d9
}) {
  return _0x2d17dc.jsxs("div", {
    className: "flex flex-wrap items-center gap-x-3 gap-y-1.5 px-4 py-3 rounded-xl bg-surface-overlay/30 border border-border-default mb-5 font-mono text-sm",
    children: [_0x2d17dc.jsx("span", {
      className: "shrink-0",
      children: _0x2d17dc.jsx(A, {
        method: _0x51cfe1
      })
    }), _0x2d17dc.jsxs("span", {
      className: "text-text-secondary break-all",
      children: [_0x2d17dc.jsx(_0x2555cf, {
        label: i,
        side: "top",
        wrapperClassName: "inline shrink-0",
        children: _0x2d17dc.jsx("span", {
          className: "text-emerald-400/70 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/15 px-1 py-px mr-0.5 rounded cursor-help transition-colors",
          children: "BASE_URL"
        })
      }), _0x2d17dc.jsx("span", {
        children: _0x5d41d9
      })]
    })]
  });
}
function M({
  code: _0xe6407
}) {
  const _0x4b96ab = typeof _0xe6407 == "string" ? parseInt(_0xe6407) : _0xe6407;
  const _0x38b720 = _0x4b96ab < 300 ? "bg-emerald-500/15 text-emerald-400 ring-emerald-500/25" : _0x4b96ab < 400 ? "bg-blue-500/15 text-blue-400 ring-blue-500/25" : _0x4b96ab < 500 ? "bg-amber-500/15 text-amber-400 ring-amber-500/25" : "bg-red-500/15 text-red-400 ring-red-500/25";
  return _0x2d17dc.jsx("span", {
    className: s("inline-flex px-2 py-0.5 rounded-md text-xs font-mono font-semibold ring-1 ring-inset", _0x38b720),
    children: _0xe6407
  });
}
function O({
  codes: _0x2712a1
}) {
  return _0x2d17dc.jsx("div", {
    className: "mb-6 rounded-xl border border-border-default overflow-hidden divide-y divide-border-subtle",
    children: _0x2712a1.map(_0x917cb3 => _0x2d17dc.jsxs("div", {
      className: "flex items-center gap-4 px-5 py-3 hover:bg-surface-overlay/20 transition-colors",
      children: [_0x2d17dc.jsx(M, {
        code: _0x917cb3.code
      }), _0x2d17dc.jsx("span", {
        className: "text-sm text-text-secondary",
        children: _0x917cb3.description
      })]
    }, _0x917cb3.code))
  });
}
function F({
  params: _0x3f6a2a,
  title: _0x8ebf1e
}) {
  const {
    t: _0xaf3d35
  } = _0xe3f8ba("docs");
  return _0x2d17dc.jsxs("div", {
    className: "mb-6 rounded-xl border border-border-default overflow-hidden",
    children: [_0x8ebf1e && _0x2d17dc.jsx("div", {
      className: "px-5 py-2.5 bg-surface-overlay/20 border-b border-border-subtle",
      children: _0x2d17dc.jsx("span", {
        className: "text-xs font-semibold uppercase tracking-wider text-text-tertiary",
        children: _0x8ebf1e
      })
    }), _0x2d17dc.jsxs("table", {
      className: "w-full text-sm",
      children: [_0x2d17dc.jsx("thead", {
        className: "bg-surface-overlay/30",
        children: _0x2d17dc.jsxs("tr", {
          children: [_0x2d17dc.jsx("th", {
            className: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-text-tertiary",
            children: _0xaf3d35("common.field")
          }), _0x2d17dc.jsx("th", {
            className: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-text-tertiary",
            children: _0xaf3d35("common.type")
          }), _0x2d17dc.jsx("th", {
            className: "px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-text-tertiary",
            children: _0xaf3d35("common.description")
          })]
        })
      }), _0x2d17dc.jsx("tbody", {
        className: "divide-y divide-border-subtle",
        children: _0x3f6a2a.map(_0x28e4b4 => _0x2d17dc.jsxs("tr", {
          className: "hover:bg-surface-overlay/20 transition-colors",
          children: [_0x2d17dc.jsxs("td", {
            className: "px-5 py-3 whitespace-nowrap",
            children: [_0x2d17dc.jsx("code", {
              className: "text-sky-400 text-[13px] font-mono",
              children: _0x28e4b4.name
            }), _0x28e4b4.required !== undefined && _0x2d17dc.jsx("span", {
              className: s("ml-2 inline-flex px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide", _0x28e4b4.required ? "bg-amber-500/15 text-amber-400 ring-1 ring-inset ring-amber-500/25" : "bg-surface-inset/40 text-text-muted"),
              children: _0x28e4b4.required ? _0xaf3d35("common.required") : _0xaf3d35("common.optional")
            })]
          }), _0x2d17dc.jsx("td", {
            className: "px-5 py-3",
            children: _0x2d17dc.jsx("code", {
              className: "text-purple-400 text-[13px] font-mono",
              children: _0x28e4b4.type
            })
          }), _0x2d17dc.jsx("td", {
            className: "px-5 py-3 text-text-secondary",
            children: _0x28e4b4.description
          })]
        }, _0x28e4b4.name))
      })]
    })]
  });
}
function G({
  method: _0x45e0cf,
  path: _0x44c2eb,
  description: _0x15637e,
  auth: _0x4aff55,
  tryIt: _0x197c21
}) {
  const {
    t: _0x120c06
  } = _0xe3f8ba("docs");
  const _0x1b635b = _0x45e0cf + ":" + _0x44c2eb;
  const {
    openKey: _0xe0a743,
    setOpenKey: _0x4e787c
  } = _0x186baf.useContext(y);
  const _0xabc15e = _0xe0a743 === _0x1b635b;
  const _0x23d187 = _0x186baf.useCallback(() => _0x4e787c(_0xabc15e ? null : _0x1b635b), [_0xabc15e, _0x1b635b, _0x4e787c]);
  return _0x2d17dc.jsxs("div", {
    className: s("mb-5 rounded-xl border border-border-default bg-surface-overlay/20 border-l-[3px] overflow-hidden", {
      GET: "border-l-emerald-500/60",
      POST: "border-l-blue-500/60",
      PUT: "border-l-amber-500/60",
      PATCH: "border-l-purple-500/60",
      DELETE: "border-l-red-500/60"
    }[_0x45e0cf]),
    children: [_0x2d17dc.jsxs("div", {
      className: "flex flex-wrap items-center gap-x-3 gap-y-1.5 px-4 py-3",
      children: [_0x2d17dc.jsx("span", {
        className: "shrink-0",
        children: _0x2d17dc.jsx(A, {
          method: _0x45e0cf
        })
      }), _0x2d17dc.jsxs("code", {
        className: "text-sm font-mono text-text-secondary break-all",
        children: [_0x2d17dc.jsx(_0x2555cf, {
          label: i,
          side: "top",
          wrapperClassName: "inline shrink-0",
          children: _0x2d17dc.jsx("span", {
            className: "text-emerald-400/70 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/15 px-1 py-px mr-0.5 rounded cursor-help transition-colors",
            children: "BASE_URL"
          })
        }), _0x2d17dc.jsx("span", {
          children: _0x44c2eb
        })]
      }), (_0x197c21 || _0x4aff55) && _0x2d17dc.jsxs("div", {
        className: "shrink-0 ml-auto flex items-center gap-2",
        children: [_0x197c21 && _0x2d17dc.jsx("button", {
          onClick: _0x23d187,
          className: s("px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer", _0xabc15e ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-surface-inset/40 text-text-tertiary hover:text-emerald-400 hover:bg-emerald-500/10 border border-border-default"),
          children: _0x120c06(_0xabc15e ? "common.close" : "common.tryIt")
        }), _0x4aff55 && _0x2d17dc.jsxs("span", {
          className: "hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-inset/30 text-[11px] font-medium text-text-tertiary",
          children: [_0x2d17dc.jsxs("svg", {
            className: "size-3",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [_0x2d17dc.jsx("rect", {
              x: "3",
              y: "11",
              width: "18",
              height: "11",
              rx: "2",
              ry: "2"
            }), _0x2d17dc.jsx("path", {
              d: "M7 11V7a5 5 0 0 1 10 0v4"
            })]
          }), _0x4aff55]
        })]
      })]
    }), _0x15637e && _0x2d17dc.jsx("div", {
      className: "px-4 pb-3 -mt-1",
      children: _0x2d17dc.jsx("span", {
        className: "text-[13px] text-text-tertiary",
        children: _0x15637e
      })
    }), _0xabc15e && _0x197c21 && _0x2d17dc.jsx("div", {
      className: "px-4 pb-4",
      children: _0x2d17dc.jsx(h, {
        method: _0x45e0cf,
        path: _0x44c2eb,
        params: _0x197c21.params,
        bodyType: _0x197c21.bodyType,
        bodyTemplate: _0x197c21.bodyTemplate
      })
    })]
  });
}
const W = {
  200: "200 OK",
  400: "400 Bad Request",
  401: "401 Unauthorized",
  403: "403 Forbidden",
  404: "404 Not Found",
  409: "409 Conflict",
  429: "429 Too Many Requests",
  500: "500 Internal Server Error",
  503: "503 Service Unavailable"
};
const D = _0x186baf.memo(function ({
  success: _0x540c73,
  errors: _0x43eacc
}) {
  const {
    t: _0xb6766e
  } = _0xe3f8ba("docs");
  const [_0x50e00a, _0x317baa] = _0x186baf.useState("success");
  const _0x4fea7d = _0x186baf.useCallback(() => _0x317baa("success"), []);
  const _0x2d165f = _0x186baf.useCallback(() => _0x317baa("errors"), []);
  const _0x1afe9f = _0x50e00a === "errors" ? function (_0x4070d3) {
    const _0x1870b0 = new Map();
    for (const _0x3db4fe of _0x4070d3) {
      const _0x2c763d = _0x1870b0.get(_0x3db4fe.code);
      if (_0x2c763d) {
        _0x2c763d.push(_0x3db4fe);
      } else {
        _0x1870b0.set(_0x3db4fe.code, [_0x3db4fe]);
      }
    }
    return Array.from(_0x1870b0.entries()).sort((_0x333ab7, _0x416935) => _0x333ab7[0] - _0x416935[0]);
  }(_0x43eacc) : [];
  return _0x2d17dc.jsxs("div", {
    className: "mb-6 rounded-xl border border-border-default overflow-hidden",
    children: [_0x2d17dc.jsxs("div", {
      className: "flex border-b border-border-subtle bg-surface-overlay/20",
      children: [_0x2d17dc.jsx("button", {
        onClick: _0x4fea7d,
        className: s("px-4 py-2 text-xs font-semibold transition-colors cursor-pointer", _0x50e00a === "success" ? "text-emerald-400 border-b-2 border-emerald-400 -mb-px" : "text-text-muted hover:text-text-secondary"),
        children: _0xb6766e("common.success")
      }), _0x2d17dc.jsxs("button", {
        onClick: _0x2d165f,
        className: s("px-4 py-2 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5", _0x50e00a === "errors" ? "text-red-400 border-b-2 border-red-400 -mb-px" : "text-text-muted hover:text-text-secondary"),
        children: [_0xb6766e("common.errors"), _0x2d17dc.jsx("span", {
          className: s("text-[10px] px-1.5 py-0.5 rounded-full font-mono", _0x50e00a === "errors" ? "bg-red-500/15 text-red-400" : "bg-surface-inset/50 text-text-muted"),
          children: _0x43eacc.length
        })]
      })]
    }), _0x50e00a === "success" ? _0x2d17dc.jsx("div", {
      className: "p-4",
      children: _0x540c73
    }) : _0x2d17dc.jsx("div", {
      className: "max-h-[480px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent p-4 space-y-4",
      children: _0x1afe9f.map(([_0x372ba8, _0x52aff2]) => _0x2d17dc.jsxs("div", {
        children: [_0x2d17dc.jsxs("div", {
          className: "flex items-center gap-2 mb-2",
          children: [_0x2d17dc.jsx(M, {
            code: _0x372ba8
          }), _0x2d17dc.jsx("span", {
            className: "text-xs text-text-muted font-medium",
            children: W[_0x372ba8] ?? "" + _0x372ba8
          })]
        }), _0x2d17dc.jsx("div", {
          className: "rounded-lg bg-surface-raised/60 border border-border-subtle overflow-hidden",
          children: _0x2d17dc.jsx("pre", {
            className: "text-[12px] font-mono leading-relaxed p-3 overflow-x-auto",
            children: _0x52aff2.map((_0x237c71, _0xb9d7f) => _0x2d17dc.jsxs("div", {
              className: "flex gap-2",
              children: [_0x2d17dc.jsxs("span", {
                className: "text-text-tertiary select-none shrink-0",
                children: ["//", " ", _0x237c71.condition]
              }), "\n", _0x2d17dc.jsx("span", {
                className: "text-text-secondary",
                children: _0x237c71.body
              }), _0xb9d7f < _0x52aff2.length - 1 && "\n\n"]
            }, _0xb9d7f))
          })
        })]
      }, _0x372ba8))
    })]
  });
});
export { i as A, E as C, _ as D, K as E, N as H, T as I, q as L, w as P, O as R, j as T, v as a, C as b, R as c, P as d, U as e, B as f, L as g, $ as h, k as i, z as j, G as k, F as l, D as m };