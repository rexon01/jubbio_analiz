import { j as _0x3fa542, I as _0x3c2a3c, L as _0xf09f02 } from "./index-cQfEKR1W.js";
const r = ({
  item: _0x3e10f1
}) => {
  switch (_0x3e10f1.type) {
    case "paragraph":
      return _0x3fa542.jsx("p", {
        children: _0x3e10f1.text
      });
    case "list":
      return _0x3fa542.jsx("ul", {
        className: "list-disc list-inside space-y-1.5 ml-2",
        children: _0x3e10f1.items?.map((_0x39aec1, _0x4eb006) => _0x3fa542.jsx("li", {
          children: _0x39aec1
        }, _0x4eb006))
      });
    case "subsection":
      return _0x3fa542.jsxs("div", {
        className: "space-y-3",
        children: [_0x3fa542.jsx("h4", {
          className: "text-sm font-medium text-text-secondary",
          children: _0x3e10f1.title
        }), _0x3e10f1.content ? _0x3fa542.jsx("div", {
          className: "space-y-3 ml-1",
          children: _0x3e10f1.content.map((_0x5c97db, _0x2bd36d) => _0x3fa542.jsx(r, {
            item: _0x5c97db
          }, _0x2bd36d))
        }) : _0x3fa542.jsxs(_0x3fa542.Fragment, {
          children: [_0x3fa542.jsx("ul", {
            className: "list-disc list-inside space-y-1 ml-2",
            children: _0x3e10f1.items?.map((_0x5caca2, _0x2b109b) => _0x3fa542.jsx("li", {
              children: _0x5caca2
            }, _0x2b109b))
          }), _0x3e10f1.note && _0x3fa542.jsxs("div", {
            className: "flex items-start gap-2 mt-2 p-2.5 rounded-lg bg-blue-500/5 border border-blue-500/10",
            children: [_0x3fa542.jsx(_0x3c2a3c, {
              icon: "solar:info-circle-bold-duotone",
              className: "size-4 text-blue-400 mt-0.5 shrink-0"
            }), _0x3fa542.jsx("p", {
              className: "text-xs text-blue-300",
              children: _0x3e10f1.note
            })]
          })]
        })]
      });
    case "info":
      return _0x3fa542.jsx("div", {
        className: "rounded-lg bg-surface-overlay/50 p-3 space-y-1.5",
        children: _0x3e10f1.items?.map((_0x491456, _0x4ea100) => _0x3fa542.jsxs("div", {
          className: "flex items-center gap-2 text-sm",
          children: [_0x3fa542.jsxs("span", {
            className: "text-text-tertiary",
            children: [_0x491456.label, ":"]
          }), _0x491456.link ? _0x3fa542.jsx("a", {
            href: _0x491456.link,
            className: "text-accent-primary-text hover:text-[#9ee607] underline underline-offset-2",
            children: _0x491456.value
          }) : _0x3fa542.jsx("span", {
            className: "text-text-secondary font-medium",
            children: _0x491456.value
          })]
        }, _0x4ea100))
      });
    case "link":
      return _0x3fa542.jsx(_0xf09f02, {
        to: _0x3e10f1.href || "#",
        className: "inline-flex items-center gap-1 text-accent-primary-text hover:text-[#9ee607] underline underline-offset-2",
        children: _0x3e10f1.text
      });
    case "warning":
      return _0x3fa542.jsxs("div", {
        className: "flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20",
        children: [_0x3fa542.jsx(_0x3c2a3c, {
          icon: "solar:danger-triangle-bold-duotone",
          className: "size-5 text-red-400 mt-0.5 shrink-0"
        }), _0x3fa542.jsx("p", {
          className: "text-red-200",
          children: _0x3e10f1.text
        })]
      });
    case "steps":
      return _0x3fa542.jsx("ol", {
        className: "space-y-2 ml-1",
        children: _0x3e10f1.items?.map((_0x335706, _0x4a1d8c) => _0x3fa542.jsxs("li", {
          className: "flex items-start gap-3",
          children: [_0x3fa542.jsx("span", {
            className: "flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-subtle text-accent-primary-text text-xs font-semibold",
            children: _0x4a1d8c + 1
          }), _0x3fa542.jsx("span", {
            className: "pt-0.5",
            children: _0x335706
          })]
        }, _0x4a1d8c))
      });
    case "grid":
      return _0x3fa542.jsx("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
        children: _0x3e10f1.items?.map((_0x5732ed, _0xf57b16) => _0x3fa542.jsxs("div", {
          className: "flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-overlay/30",
          children: [_0x3fa542.jsx("div", {
            className: "size-1.5 rounded-full bg-red-400 shrink-0"
          }), _0x3fa542.jsx("span", {
            children: _0x5732ed
          })]
        }, _0xf57b16))
      });
    case "highlight":
      {
        const _0x568dda = {
          green: "bg-green-500/10 border-green-500/20 text-green-200",
          blue: "bg-blue-500/10 border-blue-500/20 text-blue-200",
          red: "bg-red-500/10 border-red-500/20 text-red-200"
        };
        const _0x269523 = {
          green: "text-green-400",
          blue: "text-blue-400",
          red: "text-red-400"
        };
        const _0x1aafd0 = _0x3e10f1.color || "green";
        return _0x3fa542.jsxs("div", {
          className: "flex items-start gap-3 p-4 rounded-xl border " + _0x568dda[_0x1aafd0],
          children: [_0x3fa542.jsx(_0x3c2a3c, {
            icon: "solar:shield-bold-duotone",
            className: "size-5 mt-0.5 shrink-0 " + _0x269523[_0x1aafd0]
          }), _0x3fa542.jsx("p", {
            children: _0x3e10f1.text
          })]
        });
      }
    case "danger-list":
      return _0x3fa542.jsx("div", {
        className: "rounded-xl bg-red-500/10 border border-red-500/20 p-4",
        children: _0x3fa542.jsx("ul", {
          className: "space-y-2",
          children: _0x3e10f1.items?.map((_0xdff35d, _0x459e4b) => _0x3fa542.jsxs("li", {
            className: "flex items-start gap-2 text-red-100",
            children: [_0x3fa542.jsx("span", {
              className: "text-red-400 mt-1",
              children: "•"
            }), _0x3fa542.jsx("span", {
              children: _0xdff35d
            })]
          }, _0x459e4b))
        })
      });
    case "cards":
      return _0x3fa542.jsx("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
        children: _0x3e10f1.items?.map((_0x3e6da3, _0x45ac2d) => _0x3fa542.jsxs("div", {
          className: "rounded-xl bg-surface-overlay/50 border border-border-default p-4",
          children: [_0x3fa542.jsx("h4", {
            className: "font-medium text-text-primary mb-2",
            children: _0x3e6da3.title
          }), _0x3fa542.jsx("p", {
            className: "text-sm text-text-tertiary",
            children: _0x3e6da3.text
          }), _0x3e6da3.link && _0x3fa542.jsx("a", {
            href: _0x3e6da3.link.href,
            className: "inline-block mt-2 text-sm text-accent-primary-text hover:text-[#9ee607] underline underline-offset-2",
            children: _0x3e6da3.link.label
          })]
        }, _0x45ac2d))
      });
    default:
      return null;
  }
};
const l = ({
  section: _0x14d61c
}) => _0x3fa542.jsxs("section", {
  id: _0x14d61c.id,
  className: "p-6 scroll-mt-[100px]",
  children: [_0x3fa542.jsx("h2", {
    className: "text-lg font-semibold text-text-primary mb-4",
    children: _0x14d61c.title
  }), _0x3fa542.jsx("div", {
    className: "text-sm text-text-tertiary space-y-3 leading-relaxed",
    children: _0x14d61c.content.map((_0x38e7da, _0x399048) => _0x3fa542.jsx(r, {
      item: _0x38e7da
    }, _0x399048))
  })]
});
const a = ({
  sections: _0x1713e2
}) => _0x3fa542.jsx(_0x3fa542.Fragment, {
  children: _0x1713e2.map(_0x3b74f0 => _0x3fa542.jsx(l, {
    section: _0x3b74f0
  }, _0x3b74f0.id))
});
export { a as L };