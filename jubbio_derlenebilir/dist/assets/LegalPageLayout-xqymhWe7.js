import { e, b as _0x48a702, C as _0x4e33ce, r, j as _0x34886c, E as _0xd11460, I as _0x4cde1d, L as _0xe5880c } from "./index-cQfEKR1W.js";
const d = {
  privacy: "solar:shield-bold-duotone",
  terms: "solar:document-bold-duotone",
  cookie: "solar:donut-bold-duotone",
  "child-safety": "solar:shield-check-bold-duotone",
  default: "solar:file-text-bold-duotone"
};
const i = ({
  title: _0x136aae,
  description: _0x24b4ce,
  lastUpdated: _0x5a1027,
  icon: _0x4064e8 = "default",
  tableOfContents: _0x50093d,
  children: _0x267781
}) => {
  const _0x1519a1 = e();
  const {
    t: _0x5ded0f
  } = _0x48a702();
  _0x4e33ce(_0x136aae, _0x24b4ce, "");
  r.useEffect(() => {
    const _0x1de258 = "https://jubbio.com" + _0x1519a1.pathname;
    let _0x5a1871 = document.querySelector("link[rel=\"canonical\"]");
    if (_0x5a1871) {
      _0x5a1871.href = _0x1de258;
    } else {
      _0x5a1871 = document.createElement("link");
      _0x5a1871.rel = "canonical";
      _0x5a1871.href = _0x1de258;
      document.head.appendChild(_0x5a1871);
    }
    let _0xfcc28d = document.querySelector("meta[property=\"og:url\"]");
    if (_0xfcc28d) {
      _0xfcc28d.setAttribute("content", _0x1de258);
    } else {
      _0xfcc28d = document.createElement("meta");
      _0xfcc28d.setAttribute("property", "og:url");
      _0xfcc28d.setAttribute("content", _0x1de258);
      document.head.appendChild(_0xfcc28d);
    }
  }, [_0x1519a1.pathname]);
  const _0xcaf432 = d[_0x4064e8];
  const [_0x289ec3, _0x523f96] = r.useState("");
  r.useEffect(() => {
    if (!_0x50093d || _0x50093d.length === 0) {
      return;
    }
    const _0x51d168 = () => {
      const _0x157c63 = _0x50093d.map(_0x1dcefb => document.getElementById(_0x1dcefb.id)).filter(Boolean);
      let _0x2d7898 = "";
      for (const _0x324840 of _0x157c63) {
        if (_0x324840 && _0x324840.getBoundingClientRect().top <= 150) {
          _0x2d7898 = _0x324840.id;
        }
      }
      _0x523f96(_0x2d7898 || _0x50093d[0]?.id || "");
    };
    _0x51d168();
    window.addEventListener("scroll", _0x51d168, {
      passive: true
    });
    return () => window.removeEventListener("scroll", _0x51d168);
  }, [_0x50093d]);
  return _0x34886c.jsx(_0xd11460, {
    showDownloadBar: false,
    children: _0x34886c.jsxs("div", {
      className: "relative max-w-6xl mx-auto px-4 sm:px-6 pt-36 md:pt-44 pb-32",
      children: [_0x34886c.jsxs("div", {
        className: "text-center mb-8",
        children: [_0x34886c.jsx("div", {
          className: "inline-flex items-center justify-center size-16 sm:size-20 rounded-2xl bg-gradient-to-br from-accent-subtle to-accent-subtle border border-accent-border mb-4",
          children: _0x34886c.jsx(_0x4cde1d, {
            icon: _0xcaf432,
            className: "size-8 sm:size-10 text-accent-primary-text"
          })
        }), _0x34886c.jsx("h1", {
          className: "text-3xl sm:text-4xl font-bold text-text-primary mb-3",
          children: _0x136aae
        }), _0x34886c.jsx("p", {
          className: "text-text-tertiary text-sm sm:text-base max-w-xl mx-auto",
          children: _0x24b4ce
        }), _0x34886c.jsxs("p", {
          className: "text-xs text-text-muted mt-4",
          children: [_0x5ded0f("legal.lastUpdated"), ": ", _0x5a1027]
        })]
      }), _0x34886c.jsxs("div", {
        className: "flex flex-col lg:flex-row gap-6",
        children: [_0x50093d && _0x50093d.length > 0 && _0x34886c.jsx("aside", {
          className: "lg:w-64 shrink-0",
          children: _0x34886c.jsx("div", {
            className: "lg:sticky lg:top-24",
            children: _0x34886c.jsxs("div", {
              className: "rounded-xl bg-surface-raised/50 backdrop-blur-xl border border-border-default overflow-hidden shadow-sm",
              children: [_0x34886c.jsx("div", {
                className: "px-4 py-3 border-b border-border-default",
                children: _0x34886c.jsx("h3", {
                  className: "text-sm px-1 font-semibold text-text-tertiary",
                  children: _0x5ded0f("legal.tableOfContents")
                })
              }), _0x34886c.jsx("nav", {
                className: "divide-y divide-border-default",
                children: _0x50093d.map((_0xa4ec9, _0x502107) => {
                  const _0x369690 = _0x289ec3 === _0xa4ec9.id;
                  return _0x34886c.jsxs("button", {
                    onClick: () => (_0x31acd3 => {
                      const _0x57cdf1 = document.getElementById(_0x31acd3);
                      if (_0x57cdf1) {
                        const _0xda7555 = _0x57cdf1.getBoundingClientRect().top + window.scrollY - 100;
                        window.scrollTo({
                          top: _0xda7555,
                          behavior: "smooth"
                        });
                      }
                    })(_0xa4ec9.id),
                    className: "w-full flex items-center gap-3 px-4 py-3 text-left transition-all " + (_0x369690 ? "bg-accent-subtle" : "hover:bg-interactive-hover active:bg-surface-overlay"),
                    children: [_0x34886c.jsx("span", {
                      className: "flex size-7 shrink-0 items-center justify-center rounded-lg text-xs font-semibold " + (_0x369690 ? "bg-accent-subtle text-accent-primary-text" : "bg-surface-overlay/70 text-text-tertiary"),
                      children: _0x502107 + 1
                    }), _0x34886c.jsx("span", {
                      className: "text-sm truncate " + (_0x369690 ? "font-medium text-accent-primary-text" : "text-text-secondary"),
                      children: _0xa4ec9.title
                    })]
                  }, _0xa4ec9.id);
                })
              })]
            })
          })
        }), _0x34886c.jsx("div", {
          className: "flex-1 min-w-0",
          children: _0x34886c.jsx("div", {
            className: "rounded-2xl bg-surface-raised/80 backdrop-blur-xl border border-border-default shadow-sm overflow-hidden",
            children: _0x34886c.jsx("div", {
              className: "divide-y divide-border-default",
              children: _0x267781
            })
          })
        })]
      }), _0x34886c.jsxs("div", {
        className: "mt-8 rounded-2xl bg-surface-raised/80 backdrop-blur-xl border border-border-default p-6 shadow-sm",
        children: [_0x34886c.jsx("h3", {
          className: "text-sm font-semibold text-text-primary mb-4",
          children: _0x5ded0f("legal.relatedPages")
        }), _0x34886c.jsxs("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
          children: [_0x34886c.jsxs(_0xe5880c, {
            to: "/privacy-policy",
            className: "flex items-center gap-3 p-3 rounded-xl bg-surface-overlay/50 hover:bg-surface-overlay transition-colors group",
            children: [_0x34886c.jsx("div", {
              className: "size-9 rounded-xl bg-blue-500/10 flex items-center justify-center",
              children: _0x34886c.jsx(_0x4cde1d, {
                icon: "solar:shield-bold-duotone",
                className: "size-4 text-blue-500"
              })
            }), _0x34886c.jsx("span", {
              className: "text-sm text-text-secondary group-hover:text-text-primary transition-colors",
              children: _0x5ded0f("legal.privacyPolicy")
            })]
          }), _0x34886c.jsxs(_0xe5880c, {
            to: "/terms-of-service",
            className: "flex items-center gap-3 p-3 rounded-xl bg-surface-overlay/50 hover:bg-surface-overlay transition-colors group",
            children: [_0x34886c.jsx("div", {
              className: "size-9 rounded-xl bg-purple-500/10 flex items-center justify-center",
              children: _0x34886c.jsx(_0x4cde1d, {
                icon: "solar:document-bold-duotone",
                className: "size-4 text-purple-500"
              })
            }), _0x34886c.jsx("span", {
              className: "text-sm text-text-secondary group-hover:text-text-primary transition-colors",
              children: _0x5ded0f("legal.termsOfService")
            })]
          }), _0x34886c.jsxs(_0xe5880c, {
            to: "/cookie-policy",
            className: "flex items-center gap-3 p-3 rounded-xl bg-surface-overlay/50 hover:bg-surface-overlay transition-colors group",
            children: [_0x34886c.jsx("div", {
              className: "size-9 rounded-xl bg-orange-500/10 flex items-center justify-center",
              children: _0x34886c.jsx(_0x4cde1d, {
                icon: "solar:donut-bold-duotone",
                className: "size-4 text-orange-500"
              })
            }), _0x34886c.jsx("span", {
              className: "text-sm text-text-secondary group-hover:text-text-primary transition-colors",
              children: _0x5ded0f("legal.cookiePolicy")
            })]
          }), _0x34886c.jsxs(_0xe5880c, {
            to: "/child-safety",
            className: "flex items-center gap-3 p-3 rounded-xl bg-surface-overlay/50 hover:bg-surface-overlay transition-colors group",
            children: [_0x34886c.jsx("div", {
              className: "size-9 rounded-xl bg-emerald-500/10 flex items-center justify-center",
              children: _0x34886c.jsx(_0x4cde1d, {
                icon: "solar:shield-check-bold-duotone",
                className: "size-4 text-emerald-500"
              })
            }), _0x34886c.jsx("span", {
              className: "text-sm text-text-secondary group-hover:text-text-primary transition-colors",
              children: _0x5ded0f("legal.childSafety")
            })]
          })]
        })]
      })]
    })
  });
};
export { i as L };