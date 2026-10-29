import { j as _0x1f1eae, D as _0xc7446d, w as _0x4ba01c, r as _0x3647eb, G as _0x470ddc, R as _0xd5b162, s as _0x11a2d4, I as _0x3abd75 } from "./index-cQfEKR1W.js";
import { M as _0x42324d, a as _0x5504bf, G as _0x5636bf, H as _0x3b15c2, b as _0x22427a, S as _0x200509, T as _0x2f4437, P as _0x30d04c, B as _0x10693c, c as _0x44e420, F as _0x4f2dc4, d as _0x1a37c4, R as _0x173ee0 } from "./thumbs-up-h5dpjlcj.js";
import { H as _0x1045ad } from "./heart-BTCd1Bwb.js";
import { S as _0x2e1619, Z as _0x311b6c, C as _0x160821 } from "./zap-B3VH4qT9.js";
import { S as _0x2fb92f } from "./smile-Do8NR4vN.js";
import { C as _0x38339c } from "./camera-Tq38xvm2.js";
import { C as _0x39f485 } from "./coffee-BNwzMqh6.js";
import { G as _0x4a6240 } from "./gift-Co-azAyt.js";
import { S as _0xd8b101 } from "./sparkles-CEeENQ_D.js";
import { U as _0x429952 } from "./users-CoSbgNbJ.js";
import { V as _0x1561f4, P as _0xffda36, A as _0x356065 } from "./video-AtsAgCNJ.js";
import { H } from "./hash-Dd0s6IKZ.js";
import { S as _0x562b1a } from "./settings-BHmftTyd.js";
import { I as _0xdf0298 } from "./image-CYAMq37h.js";
import { P as _0x422c56 } from "./palette-M-F5ZK9w.js";
import { T as _0x1c26b4 } from "./trophy-D1hvddoK.js";
import { I as _0xc4c059 } from "./input-AMyERYwJ.js";
import { L as _0x2f8b07 } from "./label-ODyS97Ju.js";
import _0x2ff81d from "./PasswordInput-B3lf9zf0.js";
const q = [_0x42324d, _0x1045ad, _0x2e1619, _0x2fb92f, _0x5504bf, _0x38339c, _0x5636bf, _0x3b15c2, _0x22427a, _0x200509, _0x2f4437, _0x311b6c, _0x39f485, _0x4a6240, _0xd8b101, _0x30d04c, _0x429952, _0x1561f4, _0xffda36, _0x470ddc, H, _0x356065, _0x10693c, _0x44e420, _0x562b1a, _0xdf0298, _0x4f2dc4, _0x422c56, _0x1c26b4, _0x160821, _0x1a37c4, _0x173ee0];
const E = () => {
  const _0x28c87b = _0x3647eb.useMemo(() => {
    const _0x223895 = [];
    const _0x2c7520 = 100 / 30;
    let _0x16adf4 = 0;
    for (let _0x1dc8e6 = 0; _0x1dc8e6 < 22; _0x1dc8e6++) {
      for (let _0x578638 = 0; _0x578638 < 32; _0x578638++) {
        const _0x57d0c8 = ((_0x1dc8e6 % 2 == 1 ? _0x578638 - 0.5 : _0x578638) - 1) * _0x2c7520;
        const _0x36298e = (_0x1dc8e6 - 1) * 5;
        _0x223895.push({
          Icon: q[_0x16adf4 % q.length],
          x: _0x57d0c8,
          y: _0x36298e,
          rotation: (_0x1dc8e6 + _0x578638) * 30 % 360,
          size: 32,
          opacity: 0.08
        });
        _0x16adf4++;
      }
    }
    return _0x223895;
  }, []);
  return _0x1f1eae.jsx("div", {
    className: "absolute inset-0 overflow-hidden pointer-events-none",
    children: _0x28c87b.map((_0x225e9f, _0x5dc4d5) => {
      const _0x349f5d = _0x225e9f.Icon;
      return _0x1f1eae.jsx(_0x349f5d, {
        className: "absolute text-text-primary",
        style: {
          left: _0x225e9f.x + "%",
          top: _0x225e9f.y + "%",
          transform: "rotate(" + _0x225e9f.rotation + "deg)",
          width: _0x225e9f.size,
          height: _0x225e9f.size,
          opacity: _0x225e9f.opacity
        },
        strokeWidth: 1.5
      }, _0x5dc4d5);
    })
  });
};
const K = ({
  children: _0xdf2243,
  leftContent: _0x1a644b
}) => _0x1f1eae.jsxs("div", {
  className: "w-full flex flex-col bg-background relative overflow-hidden",
  style: {
    height: "100dvh"
  },
  children: [_0x1f1eae.jsx(_0xc7446d, {}), _0x1f1eae.jsx(E, {}), _0x1f1eae.jsxs("div", {
    className: "absolute inset-0 overflow-hidden pointer-events-none",
    children: [_0x1f1eae.jsx("div", {
      className: "absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-primary/8 rounded-full blur-[120px]"
    }), _0x1f1eae.jsx("div", {
      className: "absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/6 rounded-full blur-[100px]"
    })]
  }), _0x1f1eae.jsx("div", {
    className: "flex-1 flex items-center justify-center p-4 sm:p-6 relative z-10",
    style: {
      marginTop: _0x4ba01c() ? "2rem" : "0"
    },
    children: _0x1f1eae.jsx("div", {
      className: "w-full max-w-4xl bg-surface-raised/80 backdrop-blur-xl rounded-2xl border border-border-default shadow-2xl shadow-black/20 overflow-hidden",
      children: _0x1f1eae.jsxs("div", {
        className: "flex flex-col lg:flex-row min-h-[560px]",
        children: [_0x1f1eae.jsxs("div", {
          className: "hidden lg:flex lg:w-[45%] bg-gradient-to-br from-accent-primary/10 via-purple-500/5 to-surface-inset/50 p-6 flex-col justify-between relative overflow-hidden",
          children: [_0x1f1eae.jsx("div", {
            className: "absolute -top-20 -left-20 w-64 h-64 bg-accent-primary/20 rounded-full blur-3xl"
          }), _0x1f1eae.jsx("div", {
            className: "absolute -bottom-10 -right-10 w-48 h-48 bg-purple-500/15 rounded-full blur-2xl"
          }), _0x1f1eae.jsx("div", {
            className: "relative z-10",
            children: _0x1f1eae.jsx("img", {
              src: "/jubbio-logo-32x32.svg",
              alt: "Jubbio",
              className: "size-8"
            })
          }), _0x1f1eae.jsxs("div", {
            className: "relative z-10",
            children: [_0x1f1eae.jsxs("h2", {
              className: "text-3xl font-bold text-text-primary leading-tight mb-3",
              children: ["Topluluğunla", _0x1f1eae.jsx("br", {}), "bağlantıda kal"]
            }), _0x1f1eae.jsx("p", {
              className: "text-text-secondary text-[15px] leading-relaxed",
              children: "Arkadaşlarınla sohbet et, sesli kanallarda takıl ve oyunlar oyna."
            }), _0x1a644b]
          })]
        }), _0x1f1eae.jsxs("div", {
          className: "flex-1 p-6 sm:p-8 lg:p-10 flex flex-col max-h-[calc(100vh-4rem)] lg:max-h-[80vh] overflow-y-auto scrollbar-hide",
          children: [_0x1f1eae.jsxs("div", {
            className: "lg:hidden flex items-center justify-center gap-1.5 mb-6 shrink-0",
            children: [_0x1f1eae.jsx("img", {
              src: "/jubbio-logo-32x32.svg",
              alt: "Jubbio",
              className: "size-7"
            }), _0x1f1eae.jsx("span", {
              className: "text-[22px] font-semibold text-text-primary tracking-tight -ml-2 mt-1",
              children: "ubbio"
            })]
          }), _0x1f1eae.jsx("div", {
            className: "w-full max-w-sm mx-auto my-auto space-y-6",
            children: _0xdf2243
          })]
        })]
      })
    })
  })]
});
const U = _0xd5b162.memo(({
  title: _0x13bd39,
  description: _0x47a472
}) => _0x1f1eae.jsxs("div", {
  className: "grid gap-2 text-center mb-6",
  children: [_0x1f1eae.jsx("h1", {
    className: "text-3xl font-bold",
    children: _0x13bd39
  }), _0x1f1eae.jsx("p", {
    className: "text-balance text-muted-foreground",
    children: _0x47a472
  })]
}));
const V = _0xd5b162.forwardRef(({
  label: _0xff493d,
  id: _0x3d54f8,
  error: _0x25b2f5,
  infoText: _0x5425eb,
  onFocus: _0x16cf74,
  onBlur: _0x3a2865,
  type: _0x1bbd55,
  icon: _0x479303,
  ..._0x15d13f
}, _0x2474f0) => {
  const _0x51f6e6 = _0x1bbd55 === "password" ? _0x2ff81d : _0xc4c059;
  const _0x385704 = _0x479303 !== undefined ? _0x479303 : ((_0xc4abeb, _0x3ab184) => _0x3ab184 === "email" ? _0x1f1eae.jsx(_0x3abd75, {
    icon: "solar:letter-bold-duotone",
    className: "size-5"
  }) : _0x3ab184 === "username" || _0x3ab184 === "display-name" ? _0x1f1eae.jsx(_0x3abd75, {
    icon: "solar:user-bold-duotone",
    className: "size-5"
  }) : _0x3ab184 === "confirm-password" ? _0x1f1eae.jsx(_0x3abd75, {
    icon: "solar:lock-keyhole-bold-duotone",
    className: "size-5"
  }) : _0xc4abeb === "email" ? _0x1f1eae.jsx(_0x3abd75, {
    icon: "solar:letter-bold-duotone",
    className: "size-5"
  }) : _0xc4abeb === "password" ? _0x1f1eae.jsx(_0x3abd75, {
    icon: "solar:lock-password-bold-duotone",
    className: "size-5"
  }) : null)(_0x1bbd55, _0x3d54f8);
  return _0x1f1eae.jsxs("div", {
    className: "grid gap-2",
    children: [_0x1f1eae.jsxs(_0x2f8b07, {
      htmlFor: _0x3d54f8,
      children: [_0xff493d, _0x15d13f.required && _0x1f1eae.jsx("span", {
        className: "text-red-500/90",
        children: "*"
      })]
    }), _0x1f1eae.jsx(_0x51f6e6, {
      id: _0x3d54f8,
      ref: _0x2474f0,
      type: _0x1bbd55,
      onFocus: _0x16cf74,
      onBlur: _0x3a2865,
      icon: _0x385704,
      className: _0x11a2d4({
        "border-destructive": _0x25b2f5
      }),
      ..._0x15d13f
    }), _0x25b2f5 && _0x1f1eae.jsx("p", {
      className: "text-sm text-destructive px-1 pt-1",
      children: _0x25b2f5
    }), _0x5425eb && _0x1f1eae.jsx("p", {
      className: "text-xs text-muted-foreground px-1",
      children: _0x5425eb
    })]
  });
});
V.displayName = "AuthInput";
const W = _0xd5b162.memo(V);
export { K as A, U as a, W as b };