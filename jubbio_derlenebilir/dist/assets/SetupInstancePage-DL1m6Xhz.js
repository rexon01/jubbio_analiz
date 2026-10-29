import { b as _0x1856bb, v as _0x57fda6, d as _0x48d412, e as _0x8270b0, f as _0x2c052f, m as _0x48bf86, r as _0x52a5b9, c as _0x2ad10c, j as _0x6642cf, aL as _0x15558f, B as _0x52d87f, X as _0x12c8dd, an as _0x562396 } from "./index-cQfEKR1W.js";
import { I as _0xf5219 } from "./input-AMyERYwJ.js";
import { T as _0x23eef9 } from "./textarea-CIeIrkot.js";
import { L as _0x1ca36f } from "./loader-circle-CTtxa1g9.js";
import { S as _0x30ab3f } from "./server-BodYxqZP.js";
import { C as _0x1bec99 } from "./circle-alert-C4f7nAa2.js";
import { E as _0x4884d9 } from "./external-link-C9yxkvw1.js";
function N() {
  const {
    t: _0x396329
  } = _0x1856bb();
  const [_0x562177] = _0x57fda6();
  const _0x333e5f = _0x48d412();
  const _0x58b251 = _0x8270b0();
  const _0x498289 = _0x2c052f(_0x4cb169 => _0x4cb169.isAuthenticated);
  const _0x25812b = _0x2c052f(_0x4debd1 => _0x4debd1.isLoading);
  const _0x19fd68 = _0x2c052f(_0x5c2d45 => _0x5c2d45.bootstrapComplete);
  _0x48bf86(_0x396329("setup.instance.title"), "");
  const _0x4ae755 = _0x562177.get("code") || "";
  const [_0x1dbdf3, _0x5de4a0] = _0x52a5b9.useState("code");
  const [_0x17f864, _0x2b2776] = _0x52a5b9.useState(_0x4ae755);
  const [_0x1c3b2c, _0x431180] = _0x52a5b9.useState(null);
  const [_0x85fd90, _0x5a2958] = _0x52a5b9.useState("");
  const [_0x41283c, _0x482bae] = _0x52a5b9.useState("");
  const [_0x4f2caf, _0x4817ec] = _0x52a5b9.useState(false);
  const [_0x300a6e, _0xd9ab9] = _0x52a5b9.useState(null);
  const [_0x237ca5, _0x4de423] = _0x52a5b9.useState("");
  const _0x3a5b50 = _0x52a5b9.useRef(0);
  const _0x2f8498 = _0x52a5b9.useCallback(async _0x4153c3 => {
    const _0x297c91 = ++_0x3a5b50.current;
    const _0x56f641 = _0x4153c3.toUpperCase().trim();
    _0x431180(null);
    _0xd9ab9(null);
    _0x4817ec(true);
    try {
      const _0x443346 = await _0x2ad10c.get("/api/v1/federation/device-code/" + encodeURIComponent(_0x56f641));
      if (_0x297c91 !== _0x3a5b50.current) {
        return;
      }
      _0x431180({
        user_code: _0x56f641,
        instance_url: _0x443346.data.instance_url
      });
      _0x2b2776(_0x56f641);
      _0x5de4a0("form");
    } catch (_0x218fe9) {
      if (_0x297c91 !== _0x3a5b50.current) {
        return;
      }
      const _0x5a006c = _0x218fe9?.response?.data?.code;
      _0xd9ab9(_0x5a006c === "DEVICE_CODE_INVALID" ? _0x396329("setup.instance.codeNotFound") : _0x5a006c === "DEVICE_CODE_EXPIRED" ? _0x396329("setup.instance.codeExpired") : _0x218fe9?.response?.data?.message || _0x396329("common.error"));
      _0x5de4a0("code");
    } finally {
      if (_0x297c91 === _0x3a5b50.current) {
        _0x4817ec(false);
      }
    }
  }, [_0x396329]);
  _0x52a5b9.useEffect(() => {
    if (_0x4ae755 && _0x498289 && !_0x25812b && _0x19fd68) {
      _0x2f8498(_0x4ae755);
    }
    return () => {
      _0x3a5b50.current++;
    };
  }, [_0x4ae755, _0x498289, _0x25812b, _0x19fd68, _0x2f8498]);
  if (!_0x19fd68 || _0x25812b) {
    return _0x6642cf.jsx("div", {
      className: "min-h-screen flex items-center justify-center bg-surface-base",
      children: _0x6642cf.jsx(_0x1ca36f, {
        className: "size-8 animate-spin text-accent-primary"
      })
    });
  }
  if (!_0x498289) {
    const _0x53f373 = _0x58b251.pathname + _0x58b251.search;
    return _0x6642cf.jsx(_0x15558f, {
      to: "/login",
      state: {
        returnUrl: _0x53f373
      },
      replace: true
    });
  }
  return _0x6642cf.jsx("div", {
    className: "min-h-screen flex items-center justify-center bg-surface-base p-4",
    children: _0x6642cf.jsxs("div", {
      className: "w-full max-w-md",
      children: [_0x6642cf.jsxs("div", {
        className: "text-center mb-8",
        children: [_0x6642cf.jsx("div", {
          className: "size-16 mx-auto rounded-2xl bg-accent-primary/10 flex items-center justify-center mb-4",
          children: _0x6642cf.jsx(_0x30ab3f, {
            className: "size-8 text-accent-primary"
          })
        }), _0x6642cf.jsx("h1", {
          className: "text-2xl font-bold text-text-primary",
          children: _0x396329("setup.instance.title")
        }), _0x6642cf.jsx("p", {
          className: "text-text-tertiary mt-2",
          children: _0x396329("setup.instance.subtitle")
        })]
      }), _0x1dbdf3 === "code" && _0x6642cf.jsxs("form", {
        onSubmit: async _0x546b33 => {
          _0x546b33.preventDefault();
          const _0x538ee7 = _0x17f864.toUpperCase().trim();
          if (!_0x538ee7 || _0x538ee7.length < 9) {
            _0xd9ab9(_0x396329("setup.instance.invalidCode"));
          } else {
            await _0x2f8498(_0x538ee7);
          }
        },
        className: "bg-surface-overlay rounded-2xl border border-border-subtle p-6 space-y-4",
        children: [_0x6642cf.jsxs("div", {
          children: [_0x6642cf.jsx("label", {
            className: "text-sm font-medium text-text-secondary",
            children: _0x396329("setup.instance.codeLabel")
          }), _0x6642cf.jsx(_0xf5219, {
            value: _0x17f864,
            onChange: _0x1b42f3 => _0x2b2776(_0x1b42f3.target.value.toUpperCase()),
            placeholder: "XXXX-XXXX",
            className: "mt-1.5 text-center text-lg font-mono tracking-wider",
            maxLength: 9,
            autoFocus: true
          }), _0x6642cf.jsx("p", {
            className: "text-xs text-text-muted mt-2 text-center",
            children: _0x396329("setup.instance.codeHint")
          })]
        }), _0x300a6e && _0x6642cf.jsxs("div", {
          className: "flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm",
          children: [_0x6642cf.jsx(_0x1bec99, {
            className: "size-4 shrink-0"
          }), _0x300a6e]
        }), _0x6642cf.jsx(_0x52d87f, {
          type: "submit",
          className: "w-full",
          disabled: _0x17f864.length < 9,
          children: _0x396329("common.continue")
        })]
      }), _0x1dbdf3 === "form" && _0x6642cf.jsxs("form", {
        onSubmit: async _0x1d0a70 => {
          _0x1d0a70.preventDefault();
          if (_0x85fd90.trim() && _0x1c3b2c && !_0x4f2caf) {
            _0x4817ec(true);
            _0xd9ab9(null);
            try {
              const _0x15f29f = await _0x2ad10c.post("/api/v1/federation/device-authorize", {
                user_code: _0x1c3b2c.user_code,
                name: _0x85fd90.trim(),
                description: _0x41283c.trim() || undefined
              });
              _0x4de423(_0x15f29f.data.instance_name);
              _0x5de4a0("success");
            } catch (_0x48f587) {
              const _0x7a61a8 = _0x48f587?.response?.data?.code;
              _0xd9ab9(_0x7a61a8 === "DEVICE_CODE_INVALID" ? _0x396329("setup.instance.codeNotFound") : _0x7a61a8 === "DEVICE_CODE_EXPIRED" ? _0x396329("setup.instance.codeExpired") : _0x7a61a8 === "INSTANCE_URL_ALREADY_EXISTS" ? _0x396329("setup.instance.urlExists") : _0x48f587?.response?.data?.message || _0x396329("common.error"));
            } finally {
              _0x4817ec(false);
            }
          }
        },
        className: "bg-surface-overlay rounded-2xl border border-border-subtle p-6 space-y-4",
        children: [_0x6642cf.jsxs("div", {
          className: "text-center mb-2",
          children: [_0x6642cf.jsx("p", {
            className: "text-sm text-text-tertiary",
            children: _0x396329("setup.instance.formDesc")
          }), _0x6642cf.jsx("code", {
            className: "text-accent-primary font-mono",
            children: _0x1c3b2c?.user_code
          })]
        }), _0x6642cf.jsxs("div", {
          children: [_0x6642cf.jsxs("label", {
            className: "text-sm font-medium text-text-secondary",
            children: [_0x396329("setup.instance.name"), " *"]
          }), _0x6642cf.jsx(_0xf5219, {
            value: _0x85fd90,
            onChange: _0x58beb5 => _0x5a2958(_0x58beb5.target.value),
            placeholder: "My Company Server",
            className: "mt-1.5",
            maxLength: 100,
            required: true,
            autoFocus: true
          })]
        }), _0x1c3b2c?.instance_url && _0x6642cf.jsxs("div", {
          children: [_0x6642cf.jsx("label", {
            className: "text-sm font-medium text-text-secondary",
            children: _0x396329("setup.instance.url")
          }), _0x6642cf.jsx(_0xf5219, {
            type: "url",
            value: _0x1c3b2c.instance_url,
            className: "mt-1.5 bg-surface-base text-text-muted",
            disabled: true,
            readOnly: true
          }), _0x6642cf.jsx("p", {
            className: "text-xs text-text-muted mt-1",
            children: _0x396329("setup.instance.urlFromDevice")
          })]
        }), _0x6642cf.jsxs("div", {
          children: [_0x6642cf.jsx("label", {
            className: "text-sm font-medium text-text-secondary",
            children: _0x396329("setup.instance.description")
          }), _0x6642cf.jsx(_0x23eef9, {
            value: _0x41283c,
            onChange: _0x400a6e => _0x482bae(_0x400a6e.target.value),
            placeholder: _0x396329("setup.instance.descPlaceholder"),
            className: "mt-1.5 resize-none",
            rows: 2,
            maxLength: 500
          })]
        }), _0x300a6e && _0x6642cf.jsxs("div", {
          className: "flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm",
          children: [_0x6642cf.jsx(_0x1bec99, {
            className: "size-4 shrink-0"
          }), _0x300a6e]
        }), _0x6642cf.jsxs("div", {
          className: "flex gap-3 pt-2",
          children: [_0x6642cf.jsxs(_0x52d87f, {
            type: "button",
            variant: "outline",
            className: "flex-1",
            onClick: async () => {
              if (_0x1c3b2c && !_0x4f2caf) {
                _0x4817ec(true);
                try {
                  await _0x2ad10c.post("/api/v1/federation/device-deny", {
                    user_code: _0x1c3b2c.user_code
                  });
                  _0x5de4a0("error");
                  _0xd9ab9(_0x396329("setup.instance.denied"));
                } catch {
                  _0x333e5f("/");
                } finally {
                  _0x4817ec(false);
                }
              }
            },
            disabled: _0x4f2caf,
            children: [_0x6642cf.jsx(_0x12c8dd, {
              className: "size-4 mr-2"
            }), _0x396329("common.deny")]
          }), _0x6642cf.jsxs(_0x52d87f, {
            type: "submit",
            className: "flex-1",
            disabled: _0x4f2caf || !_0x85fd90.trim(),
            children: [_0x4f2caf ? _0x6642cf.jsx(_0x1ca36f, {
              className: "size-4 animate-spin mr-2"
            }) : _0x6642cf.jsx(_0x562396, {
              className: "size-4 mr-2"
            }), _0x396329("setup.instance.authorize")]
          })]
        })]
      }), _0x1dbdf3 === "success" && _0x6642cf.jsxs("div", {
        className: "bg-surface-overlay rounded-2xl border border-border-subtle p-6 text-center",
        children: [_0x6642cf.jsx("div", {
          className: "size-16 mx-auto rounded-full bg-green-500/10 flex items-center justify-center mb-4",
          children: _0x6642cf.jsx(_0x562396, {
            className: "size-8 text-green-400"
          })
        }), _0x6642cf.jsx("h2", {
          className: "text-xl font-semibold text-text-primary mb-2",
          children: _0x396329("setup.instance.successTitle")
        }), _0x6642cf.jsx("p", {
          className: "text-text-tertiary mb-4",
          children: _0x396329("setup.instance.successDesc", {
            name: _0x237ca5
          })
        }), _0x6642cf.jsx("p", {
          className: "text-sm text-text-muted mb-6",
          children: _0x396329("setup.instance.successHint")
        }), _0x6642cf.jsxs(_0x52d87f, {
          onClick: () => _0x333e5f("/dev/instances"),
          className: "gap-2",
          children: [_0x396329("setup.instance.viewInstances"), _0x6642cf.jsx(_0x4884d9, {
            className: "size-4"
          })]
        })]
      }), _0x1dbdf3 === "error" && _0x6642cf.jsxs("div", {
        className: "bg-surface-overlay rounded-2xl border border-border-subtle p-6 text-center",
        children: [_0x6642cf.jsx("div", {
          className: "size-16 mx-auto rounded-full bg-red-500/10 flex items-center justify-center mb-4",
          children: _0x6642cf.jsx(_0x12c8dd, {
            className: "size-8 text-red-400"
          })
        }), _0x6642cf.jsx("h2", {
          className: "text-xl font-semibold text-text-primary mb-2",
          children: _0x396329("setup.instance.errorTitle")
        }), _0x6642cf.jsx("p", {
          className: "text-text-tertiary mb-6",
          children: _0x300a6e || _0x396329("setup.instance.errorDesc")
        }), _0x6642cf.jsx(_0x52d87f, {
          onClick: () => _0x333e5f("/"),
          variant: "outline",
          children: _0x396329("setup.instance.goHome")
        })]
      }), _0x6642cf.jsxs("p", {
        className: "text-center text-sm text-text-muted mt-6",
        children: [_0x396329("setup.instance.help"), " ", _0x6642cf.jsx("a", {
          href: "/docs/self-hosted",
          className: "text-accent-primary hover:underline",
          children: _0x396329("setup.instance.helpLink")
        })]
      })]
    })
  });
}
export { N as default };