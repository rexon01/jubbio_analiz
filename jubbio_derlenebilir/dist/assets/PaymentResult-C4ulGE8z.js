import { t as _0x29dfad, c as _0x18a5e6, v as _0x1fbf15, b as _0xaddc9, r as _0x588dac, j as _0x3e7119, L as _0x49fed9, f as _0x27b537, J as _0x17a8ea, aU as _0x4771b8 } from "./index-cQfEKR1W.js";
import { N as _0x11e27c } from "./NexusSuccessArtwork-YGvslhff.js";
import { L as _0x16608c } from "./loader-circle-CTtxa1g9.js";
import { C as _0x3f7482 } from "./circle-x-BBSKKBIf.js";
/**
* @license lucide-react v0.535.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const p = _0x29dfad("clock-3", [["path", {
  d: "M12 6v6h4",
  key: "135r8i"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}]]);
function x() {
  const [_0x382f9a] = _0x1fbf15();
  const {
    t: _0x2b5bee
  } = _0xaddc9();
  const _0x2943ca = _0x382f9a.get("receipt");
  const [_0x513992, _0x3b4e08] = _0x588dac.useState(null);
  const [_0x11db1a, _0xac0119] = _0x588dac.useState(true);
  const [_0x1184ec, _0x2c35ca] = _0x588dac.useState(false);
  const [_0x52a4bf, _0x254ab9] = _0x588dac.useState(false);
  const [_0x22fd48, _0x305b73] = _0x588dac.useState(0);
  _0x588dac.useEffect(() => {
    let _0x4157c9;
    let _0x9f7c48 = false;
    let _0x510b61 = 0;
    _0xac0119(true);
    _0x2c35ca(false);
    _0x254ab9(false);
    _0x3b4e08(null);
    if (!_0x2943ca) {
      _0x2c35ca(true);
      _0xac0119(false);
      return;
    }
    const _0x673741 = () => {
      if (!_0x9f7c48 && ++_0x510b61 < 120) {
        _0x4157c9 = setTimeout(_0x784e63, 5000);
      }
    };
    const _0x784e63 = async () => {
      try {
        const _0x5375bc = await async function (_0x4bc840) {
          return (await _0x18a5e6.get("https://gateway.jubbio.com/api/v1/auth/subscriptions/checkout-result/" + encodeURIComponent(_0x4bc840), {
            _skipToast: true,
            _skip429Handler: true,
            timeout: 15000
          })).data.result;
        }(_0x2943ca);
        if (_0x9f7c48) {
          return;
        }
        _0x254ab9(false);
        _0x3b4e08(_0x5375bc);
        if (_0x5375bc.status === "success" && _0x27b537.getState().isAuthenticated) {
          if (_0x5375bc.kind === "subscription") {
            _0x17a8ea.getState().fetchSubscriptionStatus().catch(() => {});
          }
          if (_0x5375bc.kind === "fuel") {
            _0x4771b8.getState().fetchUserFuel().catch(() => {});
          }
        }
        if (_0x5375bc.status === "pending") {
          _0x673741();
        }
      } catch (_0x36085c) {
        if (_0x9f7c48) {
          return;
        }
        const _0x25d264 = _0x36085c.response;
        if (_0x25d264?.status === 400 && _0x25d264.data?.code === "PAYMENT_RESULT_INVALID") {
          _0x2c35ca(true);
        } else {
          _0x254ab9(true);
          _0x673741();
        }
      } finally {
        if (!_0x9f7c48) {
          _0xac0119(false);
        }
      }
    };
    _0x784e63();
    return () => {
      _0x9f7c48 = true;
      clearTimeout(_0x4157c9);
    };
  }, [_0x2943ca, _0x22fd48]);
  const _0x11afd4 = _0x11db1a ? "loading" : _0x1184ec ? "invalid" : _0x513992?.status ?? (_0x52a4bf ? "unavailable" : "invalid");
  const _0x2a0d75 = _0x513992?.kind === "donate" ? "/donate" : _0x513992?.kind === "subscription" ? "/app/nexus" : "/app";
  return _0x3e7119.jsx("main", {
    className: "min-h-screen bg-surface-base text-text-primary flex items-center justify-center p-5",
    children: _0x3e7119.jsxs("section", {
      className: "w-full max-w-md rounded-2xl border border-border-subtle bg-surface-overlay/30 p-7 text-center space-y-5",
      children: [_0x11afd4 === "success" ? _0x3e7119.jsx(_0x11e27c, {}) : _0x11afd4 === "loading" ? _0x3e7119.jsx(_0x16608c, {
        className: "size-12 mx-auto animate-spin text-accent-primary"
      }) : _0x11afd4 === "pending" ? _0x3e7119.jsx(p, {
        className: "size-12 mx-auto text-amber-400"
      }) : _0x3e7119.jsx(_0x3f7482, {
        className: "size-12 mx-auto text-status-danger"
      }), _0x3e7119.jsxs("div", {
        className: "space-y-2",
        children: [_0x3e7119.jsx("h1", {
          className: "text-2xl font-semibold tracking-tight",
          children: _0x2b5bee("paymentResult." + _0x11afd4 + "Title")
        }), _0x3e7119.jsx("p", {
          className: "text-sm leading-relaxed text-text-secondary",
          children: _0x2b5bee("paymentResult." + _0x11afd4 + "Description")
        })]
      }), !_0x11db1a && _0x52a4bf && _0x513992?.status === "pending" && _0x3e7119.jsx("p", {
        role: "alert",
        className: "text-sm text-amber-400",
        children: _0x2b5bee("paymentResult.unavailableDescription")
      }), !_0x11db1a && !_0x1184ec && (_0x52a4bf || _0x513992?.status === "pending") && _0x3e7119.jsx("button", {
        type: "button",
        onClick: () => _0x305b73(_0x4eb40 => _0x4eb40 + 1),
        className: "text-sm font-medium underline underline-offset-4",
        children: _0x2b5bee("paymentResult.retry")
      }), !_0x11db1a && _0x3e7119.jsx(_0x49fed9, {
        to: _0x2a0d75,
        className: "inline-flex justify-center items-center h-10 w-full rounded-lg bg-white text-black text-sm font-semibold hover:bg-white/90",
        children: _0x2b5bee("paymentResult.back")
      })]
    })
  });
}
export { x as default };