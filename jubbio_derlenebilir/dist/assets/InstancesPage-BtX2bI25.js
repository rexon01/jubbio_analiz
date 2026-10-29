import { b as _0x5d7d53, m as _0x1fa3d6, r as _0x16425c, j as _0x530c84, B as _0x1b0b09, an as _0x49de10, c as _0x2b1efb } from "./index-cQfEKR1W.js";
import { I as _0x53f42b } from "./input-AMyERYwJ.js";
import { T as _0x12861b } from "./textarea-CIeIrkot.js";
import { D as _0x5cfe37, a as _0x30b37b, b as _0x149512, c as _0x4be1cd, d as _0x12a141 } from "./dialog-BMMpM7PR.js";
import { A as _0x335374, a as _0xcd6483, d as _0x378afc, b as _0x4b32c1, c as _0x4bbe7a, e as _0x315c00, f as _0x37e701, g } from "./alert-dialog-BZuoGg7O.js";
import { P as _0x1cb66c } from "./plus-B7c2Px8R.js";
import { R as _0x4792ec, E as _0x4c431c } from "./refresh-cw-C3NlhmpS.js";
import { S as _0x5d38d7 } from "./server-BodYxqZP.js";
import { E as _0x2c45bf } from "./external-link-C9yxkvw1.js";
import { T as _0x18c07c } from "./trash-2-DuFcDcAU.js";
import { C as _0x139305 } from "./copy-D6m_ILAw.js";
import { E as _0x593c71 } from "./eye-CZP2GlMx.js";
import "./index-yuEHo9bu.js";
function E() {
  const {
    t: _0x2746c8
  } = _0x5d7d53();
  _0x1fa3d6(_0x2746c8("developer.instances.title"), "");
  const [_0x3e1f9c, _0x235d30] = _0x16425c.useState([]);
  const [_0x696169, _0xbe94a4] = _0x16425c.useState(true);
  const [_0x327ec1, _0x5ecdb5] = _0x16425c.useState(null);
  const [_0x34ad79, _0x34bbbc] = _0x16425c.useState(false);
  const [_0x37e7c1, _0x3f9d8a] = _0x16425c.useState(null);
  const [_0x5867f7, _0x206ef1] = _0x16425c.useState(null);
  const [_0x55d8c8, _0x3c9b02] = _0x16425c.useState("");
  const [_0xe78685, _0x5cbd9c] = _0x16425c.useState("");
  const [_0x17d8cc, _0x45e33e] = _0x16425c.useState("");
  const [_0xae102c, _0x4c8f66] = _0x16425c.useState(false);
  const [_0x17a26e, _0x453b6b] = _0x16425c.useState(false);
  const [_0x4d1a15, _0x2b8a1f] = _0x16425c.useState(false);
  const [_0x3e9632, _0x328d95] = _0x16425c.useState(false);
  const _0x26f3d1 = async () => {
    _0xbe94a4(true);
    _0x5ecdb5(null);
    try {
      const _0x54a9f4 = await _0x2b1efb.get("/api/v1/federation/instances/me");
      _0x235d30(_0x54a9f4.data.instances || []);
    } catch (_0x11e6f0) {
      console.error("Failed to fetch instances:", _0x11e6f0);
      _0x5ecdb5(_0x2746c8("common.error"));
    } finally {
      _0xbe94a4(false);
    }
  };
  _0x16425c.useEffect(() => {
    _0x26f3d1();
  }, []);
  const _0x49434c = async (_0x18ab5c, _0x26dc05) => {
    await navigator.clipboard.writeText(_0x18ab5c);
    if (_0x26dc05 === "key") {
      _0x453b6b(true);
      setTimeout(() => _0x453b6b(false), 2000);
    } else {
      _0x2b8a1f(true);
      setTimeout(() => _0x2b8a1f(false), 2000);
    }
  };
  const _0x1b6f09 = {
    active: "bg-green-500/10 text-green-400 border-green-500/20",
    pending: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    suspended: "bg-red-500/10 text-red-400 border-red-500/20",
    revoked: "bg-gray-500/10 text-gray-400 border-gray-500/20"
  };
  return _0x530c84.jsxs("div", {
    className: "space-y-6",
    children: [_0x530c84.jsxs("div", {
      className: "flex items-center justify-between",
      children: [_0x530c84.jsxs("div", {
        children: [_0x530c84.jsx("h1", {
          className: "text-2xl font-bold text-text-primary",
          children: _0x2746c8("developer.instances.title")
        }), _0x530c84.jsx("p", {
          className: "text-sm text-text-tertiary mt-1",
          children: _0x2746c8("developer.instances.subtitle")
        })]
      }), _0x530c84.jsxs(_0x1b0b09, {
        onClick: () => _0x34bbbc(true),
        className: "gap-2",
        children: [_0x530c84.jsx(_0x1cb66c, {
          className: "size-4"
        }), _0x2746c8("developer.instances.create")]
      })]
    }), _0x696169 ? _0x530c84.jsx("div", {
      className: "flex items-center justify-center py-12",
      children: _0x530c84.jsx(_0x4792ec, {
        className: "size-6 animate-spin text-text-tertiary"
      })
    }) : _0x327ec1 ? _0x530c84.jsxs("div", {
      role: "alert",
      className: "space-y-4 rounded-xl border border-border-subtle bg-surface-overlay p-6 text-center",
      children: [_0x530c84.jsx("p", {
        className: "text-sm text-text-secondary",
        children: _0x327ec1
      }), _0x530c84.jsx(_0x1b0b09, {
        variant: "outline",
        onClick: _0x26f3d1,
        children: _0x2746c8("common.retry")
      })]
    }) : _0x3e1f9c.length === 0 ? _0x530c84.jsxs("div", {
      className: "text-center py-16 bg-surface-overlay rounded-xl border border-border-subtle",
      children: [_0x530c84.jsx(_0x5d38d7, {
        className: "size-12 mx-auto text-text-muted mb-4"
      }), _0x530c84.jsx("h3", {
        className: "text-lg font-medium text-text-primary mb-2",
        children: _0x2746c8("developer.instances.empty")
      }), _0x530c84.jsx("p", {
        className: "text-sm text-text-tertiary mb-6 max-w-md mx-auto",
        children: _0x2746c8("developer.instances.emptyDesc")
      }), _0x530c84.jsxs(_0x1b0b09, {
        onClick: () => _0x34bbbc(true),
        className: "gap-2",
        children: [_0x530c84.jsx(_0x1cb66c, {
          className: "size-4"
        }), _0x2746c8("developer.instances.createFirst")]
      })]
    }) : _0x530c84.jsx("div", {
      className: "grid gap-4",
      children: _0x3e1f9c.map(_0x5f0722 => _0x530c84.jsx("div", {
        className: "bg-surface-overlay rounded-xl border border-border-subtle p-5 hover:border-border-strong transition-colors",
        children: _0x530c84.jsxs("div", {
          className: "flex items-start justify-between gap-4",
          children: [_0x530c84.jsxs("div", {
            className: "flex items-start gap-4 min-w-0",
            children: [_0x530c84.jsx("div", {
              className: "size-12 rounded-xl bg-accent-primary/10 flex items-center justify-center shrink-0",
              children: _0x530c84.jsx(_0x5d38d7, {
                className: "size-6 text-accent-primary"
              })
            }), _0x530c84.jsxs("div", {
              className: "min-w-0",
              children: [_0x530c84.jsxs("div", {
                className: "flex items-center gap-2",
                children: [_0x530c84.jsx("h3", {
                  className: "font-semibold text-text-primary truncate",
                  children: _0x5f0722.name
                }), _0x530c84.jsx("span", {
                  className: "px-2 py-0.5 text-xs font-medium rounded-full border " + _0x1b6f09[_0x5f0722.status],
                  children: _0x5f0722.status
                })]
              }), _0x530c84.jsxs("a", {
                href: _0x5f0722.url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-sm text-text-tertiary hover:text-accent-primary flex items-center gap-1 mt-0.5",
                children: [_0x5f0722.url, _0x530c84.jsx(_0x2c45bf, {
                  className: "size-3"
                })]
              }), _0x5f0722.description && _0x530c84.jsx("p", {
                className: "text-sm text-text-muted mt-2 line-clamp-2",
                children: _0x5f0722.description
              }), _0x530c84.jsxs("div", {
                className: "flex items-center gap-4 mt-3 text-xs text-text-muted",
                children: [_0x530c84.jsxs("span", {
                  children: ["ID: ", _0x5f0722.id]
                }), _0x5f0722.last_heartbeat && _0x530c84.jsxs("span", {
                  children: ["Last seen: ", new Date(_0x5f0722.last_heartbeat).toLocaleDateString()]
                })]
              })]
            })]
          }), _0x530c84.jsx(_0x1b0b09, {
            variant: "ghost",
            size: "sm",
            onClick: () => _0x3f9d8a(_0x5f0722),
            className: "text-text-muted hover:text-red-400 shrink-0",
            children: _0x530c84.jsx(_0x18c07c, {
              className: "size-4"
            })
          })]
        })
      }, _0x5f0722.id))
    }), _0x530c84.jsx(_0x5cfe37, {
      open: _0x34ad79,
      onOpenChange: _0x34bbbc,
      children: _0x530c84.jsxs(_0x30b37b, {
        className: "sm:max-w-md",
        children: [_0x530c84.jsxs(_0x149512, {
          children: [_0x530c84.jsx(_0x4be1cd, {
            children: _0x2746c8("developer.instances.createTitle")
          }), _0x530c84.jsx(_0x12a141, {
            children: _0x2746c8("developer.instances.createDesc")
          })]
        }), _0x530c84.jsxs("form", {
          onSubmit: async _0x4db69f => {
            _0x4db69f.preventDefault();
            if (_0x55d8c8.trim() && _0xe78685.trim()) {
              _0x4c8f66(true);
              try {
                const _0x23dcc7 = await _0x2b1efb.post("/api/v1/federation/instances/register", {
                  name: _0x55d8c8.trim(),
                  url: _0xe78685.trim(),
                  description: _0x17d8cc.trim() || null
                });
                _0x206ef1(_0x23dcc7.data);
                _0x34bbbc(false);
                _0x3c9b02("");
                _0x5cbd9c("");
                _0x45e33e("");
                _0x26f3d1();
              } catch {} finally {
                _0x4c8f66(false);
              }
            }
          },
          className: "space-y-4 mt-4",
          children: [_0x530c84.jsxs("div", {
            children: [_0x530c84.jsxs("label", {
              className: "text-sm font-medium text-text-secondary",
              children: [_0x2746c8("developer.instances.name"), " *"]
            }), _0x530c84.jsx(_0x53f42b, {
              value: _0x55d8c8,
              onChange: _0x5e6d86 => _0x3c9b02(_0x5e6d86.target.value),
              placeholder: "My Company Server",
              className: "mt-1.5",
              maxLength: 100,
              required: true
            })]
          }), _0x530c84.jsxs("div", {
            children: [_0x530c84.jsxs("label", {
              className: "text-sm font-medium text-text-secondary",
              children: [_0x2746c8("developer.instances.url"), " *"]
            }), _0x530c84.jsx(_0x53f42b, {
              type: "url",
              value: _0xe78685,
              onChange: _0x2ae68a => _0x5cbd9c(_0x2ae68a.target.value),
              placeholder: "https://jubbio.mycompany.com",
              className: "mt-1.5",
              required: true
            }), _0x530c84.jsx("p", {
              className: "text-xs text-text-muted mt-1",
              children: _0x2746c8("developer.instances.urlHint")
            })]
          }), _0x530c84.jsxs("div", {
            children: [_0x530c84.jsx("label", {
              className: "text-sm font-medium text-text-secondary",
              children: _0x2746c8("developer.instances.description")
            }), _0x530c84.jsx(_0x12861b, {
              value: _0x17d8cc,
              onChange: _0x5e351d => _0x45e33e(_0x5e351d.target.value),
              placeholder: _0x2746c8("developer.instances.descPlaceholder"),
              className: "mt-1.5 resize-none",
              rows: 3,
              maxLength: 500
            })]
          }), _0x530c84.jsxs("div", {
            className: "flex justify-end gap-3 pt-2",
            children: [_0x530c84.jsx(_0x1b0b09, {
              type: "button",
              variant: "outline",
              onClick: () => _0x34bbbc(false),
              children: _0x2746c8("common.cancel")
            }), _0x530c84.jsx(_0x1b0b09, {
              type: "submit",
              disabled: _0xae102c || !_0x55d8c8.trim() || !_0xe78685.trim(),
              children: _0x2746c8(_0xae102c ? "common.creating" : "developer.instances.create")
            })]
          })]
        })]
      })
    }), _0x530c84.jsx(_0x5cfe37, {
      open: !!_0x5867f7,
      onOpenChange: () => _0x206ef1(null),
      children: _0x530c84.jsxs(_0x30b37b, {
        className: "sm:max-w-lg",
        children: [_0x530c84.jsxs(_0x149512, {
          children: [_0x530c84.jsxs(_0x4be1cd, {
            className: "flex items-center gap-2",
            children: [_0x530c84.jsx(_0x49de10, {
              className: "size-5 text-green-400"
            }), _0x2746c8("developer.instances.createdTitle")]
          }), _0x530c84.jsx(_0x12a141, {
            children: _0x2746c8("developer.instances.createdDesc")
          })]
        }), _0x5867f7 && _0x530c84.jsxs("div", {
          className: "space-y-4 mt-4",
          children: [_0x530c84.jsx("div", {
            className: "p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg",
            children: _0x530c84.jsxs("p", {
              className: "text-sm text-yellow-400 font-medium",
              children: ["⚠️ ", _0x2746c8("developer.instances.secretWarning")]
            })
          }), _0x530c84.jsxs("div", {
            children: [_0x530c84.jsx("label", {
              className: "text-sm font-medium text-text-secondary",
              children: _0x2746c8("developer.instances.token")
            }), _0x530c84.jsxs("div", {
              className: "flex items-center gap-2 mt-1.5",
              children: [_0x530c84.jsx("code", {
                className: "flex-1 px-3 py-2 bg-surface-inset rounded-lg text-sm font-mono text-text-primary truncate",
                children: _0x5867f7.apiKey
              }), _0x530c84.jsx(_0x1b0b09, {
                variant: "outline",
                size: "sm",
                onClick: () => _0x49434c(_0x5867f7.apiKey, "key"),
                children: _0x17a26e ? _0x530c84.jsx(_0x49de10, {
                  className: "size-4 text-green-400"
                }) : _0x530c84.jsx(_0x139305, {
                  className: "size-4"
                })
              })]
            })]
          }), _0x530c84.jsxs("div", {
            children: [_0x530c84.jsx("label", {
              className: "text-sm font-medium text-text-secondary",
              children: _0x2746c8("developer.instances.secret")
            }), _0x530c84.jsxs("div", {
              className: "flex items-center gap-2 mt-1.5",
              children: [_0x530c84.jsx("code", {
                className: "flex-1 px-3 py-2 bg-surface-inset rounded-lg text-sm font-mono text-text-primary truncate",
                children: _0x3e9632 ? _0x5867f7.apiSecret : "••••••••••••••••••••••••"
              }), _0x530c84.jsx(_0x1b0b09, {
                variant: "outline",
                size: "sm",
                onClick: () => _0x328d95(!_0x3e9632),
                children: _0x3e9632 ? _0x530c84.jsx(_0x4c431c, {
                  className: "size-4"
                }) : _0x530c84.jsx(_0x593c71, {
                  className: "size-4"
                })
              }), _0x530c84.jsx(_0x1b0b09, {
                variant: "outline",
                size: "sm",
                onClick: () => _0x49434c(_0x5867f7.apiSecret, "secret"),
                children: _0x4d1a15 ? _0x530c84.jsx(_0x49de10, {
                  className: "size-4 text-green-400"
                }) : _0x530c84.jsx(_0x139305, {
                  className: "size-4"
                })
              })]
            })]
          }), _0x530c84.jsxs("div", {
            className: "p-4 bg-surface-inset rounded-lg",
            children: [_0x530c84.jsx("p", {
              className: "text-sm font-medium text-text-secondary mb-2",
              children: _0x2746c8("developer.instances.envExample")
            }), _0x530c84.jsx("code", {
              className: "block text-xs font-mono text-text-muted whitespace-pre-wrap",
              children: "JUBBIO_INSTANCE_TOKEN=" + _0x5867f7.apiKey
            })]
          }), _0x530c84.jsx(_0x1b0b09, {
            className: "w-full",
            onClick: () => _0x206ef1(null),
            children: _0x2746c8("developer.instances.done")
          })]
        })]
      })
    }), _0x530c84.jsx(_0x335374, {
      open: !!_0x37e7c1,
      onOpenChange: () => _0x3f9d8a(null),
      children: _0x530c84.jsxs(_0xcd6483, {
        children: [_0x530c84.jsxs(_0x378afc, {
          children: [_0x530c84.jsx(_0x4b32c1, {
            children: _0x2746c8("developer.instances.deleteTitle")
          }), _0x530c84.jsx(_0x4bbe7a, {
            children: _0x2746c8("developer.instances.deleteDesc", {
              name: _0x37e7c1?.name
            })
          })]
        }), _0x530c84.jsxs(_0x315c00, {
          children: [_0x530c84.jsx(_0x37e701, {
            children: _0x2746c8("common.cancel")
          }), _0x530c84.jsx(g, {
            onClick: async () => {
              if (_0x37e7c1) {
                try {
                  await _0x2b1efb.delete("/api/v1/federation/instances/" + _0x37e7c1.id);
                  _0x235d30(_0x12a721 => _0x12a721.filter(_0xf25a3d => _0xf25a3d.id !== _0x37e7c1.id));
                } catch {} finally {
                  _0x3f9d8a(null);
                }
              }
            },
            className: "bg-red-500 hover:bg-red-600",
            children: _0x2746c8("common.delete")
          })]
        })]
      })
    })]
  });
}
export { E as default };