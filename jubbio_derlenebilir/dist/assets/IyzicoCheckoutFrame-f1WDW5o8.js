import { b as _0x38c9c7, r as _0x408dc2, j as _0x38923a } from "./index-cQfEKR1W.js";
import { L as _0x3c8513 } from "./loader-circle-CTtxa1g9.js";
function i(_0x13c14d) {
  if (!_0x13c14d) {
    return;
  }
  const _0x5808b3 = new URL(_0x13c14d);
  if (_0x5808b3.protocol !== "https:" || _0x5808b3.username || _0x5808b3.password || _0x5808b3.port || _0x5808b3.hostname !== "iyzipay.com" && !_0x5808b3.hostname.endsWith(".iyzipay.com")) {
    throw new Error("Invalid iyzico payment page URL");
  }
  _0x5808b3.searchParams.delete("iframe");
  return _0x5808b3.toString();
}
function a(_0x25a941, _0x34d2c8, _0x2658b2) {
  if (!_0x34d2c8?.contentWindow || _0x25a941.source !== _0x34d2c8.contentWindow || _0x25a941.data?.type !== "iyzico-callback" || _0x25a941.data?.kind !== _0x2658b2) {
    return false;
  }
  const _0x17f22f = new Set([window.location.origin, "https://gateway.jubbio.com", "https://api.jubbio.com"]);
  try {
    _0x17f22f.add(new URL("https://gateway.jubbio.com", window.location.origin).origin);
  } catch {}
  return _0x17f22f.has(_0x25a941.origin);
}
function o({
  checkoutFormContent: _0x49c3e0,
  paymentPageUrl: _0x1079fe,
  title: _0x332127,
  className: _0x40cb3f,
  frameRef: _0x1d8073
}) {
  const {
    t: _0x3a22f1
  } = _0x38c9c7();
  const _0x2c8875 = _0x408dc2.useRef(null);
  const [_0x299385, _0x349643] = _0x408dc2.useState(false);
  const _0x2a56a7 = _0x408dc2.useCallback(_0x17899b => {
    _0x2c8875.current = _0x17899b;
    if (typeof _0x1d8073 == "function") {
      _0x1d8073(_0x17899b);
    } else if (_0x1d8073) {
      _0x1d8073.current = _0x17899b;
    }
  }, [_0x1d8073]);
  _0x408dc2.useEffect(() => {
    const _0x3b4be3 = _0x9ec3ad => {
      const _0x41ecdc = _0x9ec3ad.data?.kind;
      var _0x30b7f8;
      if (["subscription", "fuel", "donate"].includes(_0x41ecdc) && a(_0x9ec3ad, _0x2c8875.current, _0x41ecdc)) {
        _0x2c8875.current?.contentWindow?.postMessage({
          type: "iyzico-callback-ack"
        }, _0x9ec3ad.origin);
        if (_0x9ec3ad.data.status === "pending") {
          _0x349643(true);
          if (typeof (_0x30b7f8 = _0x9ec3ad.data.receipt) == "string" && !(_0x30b7f8.length > 2048) && !!/^[\w-]+\.[\w-]+$/.test(_0x30b7f8)) {
            window.location.assign("/payment/result?receipt=" + encodeURIComponent(_0x30b7f8));
          }
        }
      }
    };
    window.addEventListener("message", _0x3b4be3);
    return () => window.removeEventListener("message", _0x3b4be3);
  }, []);
  const _0x5c1995 = _0x408dc2.useMemo(() => i(_0x1079fe), [_0x1079fe]);
  const _0x45cf23 = _0x408dc2.useRef(undefined);
  _0x408dc2.useEffect(() => {
    if (_0x5c1995 && _0x45cf23.current !== _0x5c1995) {
      _0x45cf23.current = _0x5c1995;
      (function (_0x518ca6) {
        const _0x2e57ec = i(_0x518ca6);
        if (!_0x2e57ec) {
          throw new Error("Missing iyzico payment page URL");
        }
        window.location.assign(_0x2e57ec);
      })(_0x5c1995);
    }
  }, [_0x5c1995]);
  const _0x106884 = _0x408dc2.useMemo(() => _0x5c1995 ? undefined : function (_0x659f0a) {
    return "<!doctype html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:system-ui,sans-serif}#iyzipay-checkout-form{min-height:400px}</style></head><body><div id=\"iyzipay-checkout-form\" class=\"responsive\"></div>" + _0x659f0a + "</body></html>";
  }(_0x49c3e0), [_0x5c1995, _0x49c3e0]);
  if (_0x299385) {
    return _0x38923a.jsxs("div", {
      className: (_0x40cb3f ?? "") + " flex flex-col items-center justify-center gap-4 text-gray-700 p-6",
      role: "status",
      children: [_0x38923a.jsx(_0x3c8513, {
        className: "size-7 animate-spin"
      }), _0x38923a.jsx("h3", {
        className: "font-semibold",
        children: _0x3a22f1("paymentResult.pendingTitle")
      }), _0x38923a.jsx("p", {
        className: "text-sm text-center",
        children: _0x3a22f1("paymentResult.pendingDescription")
      })]
    });
  } else if (_0x5c1995) {
    return _0x38923a.jsxs("div", {
      className: (_0x40cb3f ?? "") + " flex flex-col items-center justify-center gap-4 text-gray-700 p-6",
      role: "status",
      children: [_0x38923a.jsx(_0x3c8513, {
        className: "size-7 animate-spin"
      }), _0x38923a.jsx("p", {
        className: "text-sm",
        children: _0x3a22f1("paymentResult.redirecting")
      }), _0x38923a.jsx("a", {
        href: _0x5c1995,
        className: "text-sm font-medium underline underline-offset-4",
        children: _0x3a22f1("subscription.prepaid.continue")
      })]
    });
  } else {
    return _0x38923a.jsx("iframe", {
      ref: _0x2a56a7,
      srcDoc: _0x106884,
      title: _0x332127,
      className: _0x40cb3f,
      sandbox: "allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox",
      allow: "payment"
    });
  }
}
export { o as I, a as i };