import { c as _0x4fd60b, O as _0x103394, b as _0xaf6058, C as _0x279847, r, x as _0x14b200, j as _0x57a26b, E as _0x2acc26, I as _0x3b942d, _ as _0x4230fd } from "./index-cQfEKR1W.js";
const m = r.lazy(() => _0x4230fd(() => import("./Aurora-QHjOwBoE.js"), [], import.meta.url));
const d = ["general", "bug_report", "feature_request", "account_issue", "partnership", "other"];
const x = () => {
  const {
    t: _0x30fec6
  } = _0xaf6058();
  _0x279847(_0x30fec6("contact.pageTitle"), _0x30fec6("contact.pageDescription"), "");
  const [_0xfef558, _0x43c73b] = r.useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [_0x5d117a, _0x280a44] = r.useState({});
  const [_0x5b114b, _0x56e97f] = r.useState(false);
  const [_0x4ecbf5, _0x3f6c7e] = r.useState(false);
  const _0x1e13b8 = _0x39345a => {
    const {
      name: _0x376111,
      value: _0x1731d4
    } = _0x39345a.target;
    _0x43c73b(_0x282f12 => ({
      ..._0x282f12,
      [_0x376111]: _0x1731d4
    }));
    if (_0x5d117a[_0x376111]) {
      _0x280a44(_0x1ad1d1 => ({
        ..._0x1ad1d1,
        [_0x376111]: ""
      }));
    }
  };
  const _0x3c9612 = _0x14b200();
  return _0x57a26b.jsxs(_0x2acc26, {
    showDownloadBar: false,
    accentColor: "#38BDF8",
    children: [_0x3c9612 && _0x57a26b.jsx("div", {
      className: "absolute inset-0 opacity-25 pointer-events-none",
      style: {
        maskImage: "linear-gradient(to bottom, black 30%, transparent 70%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 70%)"
      },
      children: _0x57a26b.jsx(r.Suspense, {
        fallback: null,
        children: _0x57a26b.jsx(m, {
          colorStops: ["#0EA5E9", "#38BDF8", "#6366F1"],
          amplitude: 1,
          blend: 0.6,
          speed: 0.3
        })
      })
    }), _0x57a26b.jsxs("div", {
      className: "relative max-w-2xl mx-auto px-4 sm:px-6 pt-36 md:pt-44 pb-32",
      children: [_0x57a26b.jsxs("div", {
        className: "text-center mb-10",
        children: [_0x57a26b.jsx("h1", {
          className: "text-4xl sm:text-5xl font-bold text-text-primary tracking-tight",
          children: _0x30fec6("contact.title")
        }), _0x57a26b.jsx("p", {
          className: "mt-4 text-lg text-text-tertiary",
          children: _0x30fec6("contact.subtitle")
        })]
      }), _0x4ecbf5 ? _0x57a26b.jsxs("div", {
        className: "rounded-3xl bg-surface-raised/80 border border-border-default p-8 text-center shadow-sm",
        children: [_0x57a26b.jsx("div", {
          className: "size-16 mx-auto mb-4 rounded-full bg-accent-subtle flex items-center justify-center",
          children: _0x57a26b.jsx(_0x3b942d, {
            icon: "solar:letter-bold-duotone",
            className: "size-8 text-accent-primary-text"
          })
        }), _0x57a26b.jsx("h2", {
          className: "text-xl font-semibold text-text-primary mb-2",
          children: _0x30fec6("contact.successTitle")
        }), _0x57a26b.jsx("p", {
          className: "text-text-tertiary",
          children: _0x30fec6("contact.successDescription")
        })]
      }) : _0x57a26b.jsx("form", {
        onSubmit: async _0xfe8e43 => {
          _0xfe8e43.preventDefault();
          if ((() => {
            const _0x449aa1 = {};
            const _0x16085d = _0xfef558.name.trim();
            const _0x4772d9 = _0xfef558.message.trim();
            if (!_0x16085d || _0x16085d.length < 2 || _0x16085d.length > 100) {
              _0x449aa1.name = _0x30fec6("contact.errors.name");
            }
            if (!_0xfef558.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(_0xfef558.email)) {
              _0x449aa1.email = _0x30fec6("contact.errors.email");
            }
            if (!_0xfef558.subject || !d.includes(_0xfef558.subject)) {
              _0x449aa1.subject = _0x30fec6("contact.errors.subject");
            }
            if (!_0x4772d9 || _0x4772d9.length < 10 || _0x4772d9.length > 5000) {
              _0x449aa1.message = _0x30fec6("contact.errors.message");
            }
            _0x280a44(_0x449aa1);
            return Object.keys(_0x449aa1).length === 0;
          })()) {
            _0x56e97f(true);
            try {
              await async function (_0x18fee2) {
                try {
                  const {
                    data: _0x373d22
                  } = await _0x4fd60b.post("/api/v1/contact", _0x18fee2);
                  return _0x373d22;
                } catch (_0x71b5dd) {
                  throw _0x103394(_0x71b5dd);
                }
              }({
                name: _0xfef558.name.trim(),
                email: _0xfef558.email.trim(),
                subject: _0xfef558.subject,
                message: _0xfef558.message.trim()
              });
              _0x3f6c7e(true);
            } catch {} finally {
              _0x56e97f(false);
            }
          }
        },
        className: "rounded-3xl bg-surface-raised/80 border border-border-default p-6 sm:p-8 shadow-sm",
        noValidate: true,
        children: _0x57a26b.jsxs("div", {
          className: "space-y-5",
          children: [_0x57a26b.jsxs("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
            children: [_0x57a26b.jsxs("div", {
              children: [_0x57a26b.jsx("label", {
                htmlFor: "name",
                className: "block text-sm font-medium text-text-secondary mb-2",
                children: _0x30fec6("contact.form.name")
              }), _0x57a26b.jsx("input", {
                type: "text",
                id: "name",
                name: "name",
                required: true,
                maxLength: 100,
                value: _0xfef558.name,
                onChange: _0x1e13b8,
                className: "w-full h-11 px-4 rounded-xl bg-surface-overlay border text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary transition-colors " + (_0x5d117a.name ? "border-red-500" : "border-border-strong"),
                placeholder: _0x30fec6("contact.form.namePlaceholder")
              }), _0x5d117a.name && _0x57a26b.jsx("p", {
                className: "mt-1 text-xs text-red-400",
                children: _0x5d117a.name
              })]
            }), _0x57a26b.jsxs("div", {
              children: [_0x57a26b.jsx("label", {
                htmlFor: "email",
                className: "block text-sm font-medium text-text-secondary mb-2",
                children: _0x30fec6("contact.form.email")
              }), _0x57a26b.jsx("input", {
                type: "email",
                id: "email",
                name: "email",
                required: true,
                value: _0xfef558.email,
                onChange: _0x1e13b8,
                className: "w-full h-11 px-4 rounded-xl bg-surface-overlay border text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary transition-colors " + (_0x5d117a.email ? "border-red-500" : "border-border-strong"),
                placeholder: _0x30fec6("contact.form.emailPlaceholder")
              }), _0x5d117a.email && _0x57a26b.jsx("p", {
                className: "mt-1 text-xs text-red-400",
                children: _0x5d117a.email
              })]
            })]
          }), _0x57a26b.jsxs("div", {
            children: [_0x57a26b.jsx("label", {
              htmlFor: "subject",
              className: "block text-sm font-medium text-text-secondary mb-2",
              children: _0x30fec6("contact.form.subject")
            }), _0x57a26b.jsxs("select", {
              id: "subject",
              name: "subject",
              required: true,
              value: _0xfef558.subject,
              onChange: _0x1e13b8,
              className: "w-full h-11 px-4 rounded-xl bg-surface-overlay border text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary transition-colors " + (_0x5d117a.subject ? "border-red-500" : "border-border-strong"),
              children: [_0x57a26b.jsx("option", {
                value: "",
                children: _0x30fec6("contact.form.subjectPlaceholder")
              }), d.map(_0x11ab7f => _0x57a26b.jsx("option", {
                value: _0x11ab7f,
                children: _0x30fec6("contact.form.subjects." + _0x11ab7f)
              }, _0x11ab7f))]
            }), _0x5d117a.subject && _0x57a26b.jsx("p", {
              className: "mt-1 text-xs text-red-400",
              children: _0x5d117a.subject
            })]
          }), _0x57a26b.jsxs("div", {
            children: [_0x57a26b.jsx("label", {
              htmlFor: "message",
              className: "block text-sm font-medium text-text-secondary mb-2",
              children: _0x30fec6("contact.form.message")
            }), _0x57a26b.jsx("textarea", {
              id: "message",
              name: "message",
              required: true,
              rows: 5,
              maxLength: 5000,
              value: _0xfef558.message,
              onChange: _0x1e13b8,
              className: "w-full px-4 py-3 rounded-xl bg-surface-overlay border text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:border-accent-primary transition-colors resize-none " + (_0x5d117a.message ? "border-red-500" : "border-border-strong"),
              placeholder: _0x30fec6("contact.form.messagePlaceholder")
            }), _0x57a26b.jsxs("div", {
              className: "flex items-center justify-between mt-1",
              children: [_0x5d117a.message ? _0x57a26b.jsx("p", {
                className: "text-xs text-red-400",
                children: _0x5d117a.message
              }) : _0x57a26b.jsx("span", {}), _0x57a26b.jsxs("span", {
                className: "text-xs text-text-muted",
                children: [_0xfef558.message.length, "/5000"]
              })]
            })]
          }), _0x57a26b.jsx("button", {
            type: "submit",
            disabled: _0x5b114b,
            className: "flex items-center justify-center gap-2 w-full h-12 rounded-2xl bg-accent-primary hover:bg-accent-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-surface-base font-semibold text-sm transition-colors",
            children: _0x5b114b ? _0x57a26b.jsx("div", {
              className: "size-5 animate-spin rounded-full border-2 border-border-strong/20 border-t-slate-900"
            }) : _0x57a26b.jsxs(_0x57a26b.Fragment, {
              children: [_0x57a26b.jsx(_0x3b942d, {
                icon: "solar:plain-bold-duotone",
                className: "size-4"
              }), _0x30fec6("contact.form.submit")]
            })
          })]
        })
      }), _0x57a26b.jsxs("div", {
        className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-text-tertiary",
        children: [_0x57a26b.jsxs("a", {
          href: "tel:08503096609",
          className: "flex items-center gap-2 hover:text-accent-primary-text transition-colors",
          children: [_0x57a26b.jsx(_0x3b942d, {
            icon: "solar:phone-bold-duotone",
            className: "size-4"
          }), "0850 309 6609"]
        }), _0x57a26b.jsxs("a", {
          href: "mailto:support@jubbio.com",
          className: "flex items-center gap-2 hover:text-accent-primary-text transition-colors",
          children: [_0x57a26b.jsx(_0x3b942d, {
            icon: "solar:letter-bold-duotone",
            className: "size-4"
          }), "support@jubbio.com"]
        })]
      })]
    })]
  });
};
export { x as default };