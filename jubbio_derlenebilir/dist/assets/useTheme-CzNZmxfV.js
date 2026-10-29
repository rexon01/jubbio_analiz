import { dA as _0x583e95, dB as _0x27b54a, bC as _0x252be7, r as _0x3b3790, dC as _0x147578, dD as _0x6df5b7 } from "./index-cQfEKR1W.js";
const s = {
  dark: {
    color: "#020617",
    symbolColor: "#94a3b8"
  },
  dark_v2: {
    color: "#0A0A0C",
    symbolColor: "#A1A1AA"
  },
  light: {
    color: "#f8fafc",
    symbolColor: "#475569"
  }
};
function c(_0x561447) {
  try {
    const _0x3c6802 = document.createElement("canvas").getContext("2d");
    if (!_0x3c6802) {
      return null;
    }
    _0x3c6802.fillStyle = _0x561447;
    const _0x393c72 = _0x3c6802.fillStyle;
    if (_0x393c72.startsWith("#")) {
      return _0x393c72;
    } else {
      return null;
    }
  } catch {
    return null;
  }
}
function l(_0x1686d4) {
  if (!window.electron?.setTitleBarOverlay) {
    return;
  }
  const _0x24bceb = _0x27b54a();
  if (_0x24bceb) {
    const _0x24edba = getComputedStyle(_0x24bceb);
    const _0x4b28e3 = _0x24edba.getPropertyValue("--color-surface-base").trim();
    const _0x51a8e2 = _0x24edba.getPropertyValue("--color-text-tertiary").trim();
    const _0xb313cd = _0x4b28e3 ? c(_0x4b28e3) : null;
    const _0x3013e2 = _0x51a8e2 ? c(_0x51a8e2) : null;
    if (_0xb313cd && _0x3013e2) {
      window.electron.setTitleBarOverlay({
        color: _0xb313cd,
        symbolColor: _0x3013e2
      });
      return;
    }
  }
  const _0x75c77 = s[_0x1686d4];
  window.electron.setTitleBarOverlay(_0x75c77);
}
function i(_0x292e18, _0x12d211) {
  if (_0x292e18 === "system") {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  } else if (_0x292e18 === "custom") {
    return _0x12d211 ?? "dark";
  } else {
    return _0x292e18;
  }
}
function u(_0x5adb16, _0x405359) {
  if (!_0x5adb16) {
    return;
  }
  const _0x42be03 = document.createElement("style");
  _0x42be03.setAttribute("data-theme-transition", "");
  _0x42be03.textContent = "*, *::before, *::after { transition: none !important; }";
  document.head.appendChild(_0x42be03);
  _0x5adb16.setAttribute("data-theme", _0x405359);
  _0x583e95(_0x405359);
  const _0x262bdb = document.documentElement;
  if (_0x405359 === "dark" || _0x405359 === "dark_v2") {
    _0x262bdb.classList.add("dark");
  } else {
    _0x262bdb.classList.remove("dark");
  }
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      _0x42be03.remove();
      l(_0x405359);
    });
  });
}
function d(_0x17ab79) {
  const _0x3d65e4 = _0x252be7(_0x351426 => _0x351426.settings.appearance.theme ?? "dark");
  const _0x195b98 = _0x252be7(_0x4754db => _0x4754db.settings.appearance.accentColor);
  const _0x389f23 = _0x252be7(_0x52b5f3 => _0x52b5f3.settings.appearance.colorMode ?? "dark");
  const _0x54f2d8 = _0x252be7(_0x556695 => _0x556695.settings.appearance.colorIntensity ?? "vivid");
  _0x3b3790.useLayoutEffect(() => {
    if (_0x17ab79.current) {
      return _0x147578(_0x17ab79.current);
    }
  }, [_0x17ab79]);
  _0x3b3790.useLayoutEffect(() => {
    const _0x3b83d8 = i(_0x3d65e4, _0x389f23);
    u(_0x17ab79.current, _0x3b83d8);
    _0x6df5b7(_0x195b98 != null ? Number(_0x195b98) : null, _0x3b83d8, _0x54f2d8);
    requestAnimationFrame(() => l(_0x3b83d8));
    if (_0x3d65e4 === "system") {
      const _0x5bd126 = window.matchMedia("(prefers-color-scheme: dark)");
      const _0x5ca41a = () => {
        const _0x2f7c0b = i("system");
        u(_0x17ab79.current, _0x2f7c0b);
        _0x6df5b7(_0x195b98 != null ? Number(_0x195b98) : null, _0x2f7c0b, _0x54f2d8);
      };
      _0x5bd126.addEventListener("change", _0x5ca41a);
      return () => _0x5bd126.removeEventListener("change", _0x5ca41a);
    }
  }, [_0x3d65e4, _0x195b98, _0x389f23, _0x54f2d8, _0x17ab79]);
}
function m() {
  return i(_0x252be7(_0x445817 => _0x445817.settings.appearance.theme ?? "dark"), _0x252be7(_0x7eb245 => _0x7eb245.settings.appearance.colorMode ?? "dark"));
}
export { u as applyThemeToElement, i as resolveTheme, l as syncTitleBarOverlay, d as useAppTheme, m as useResolvedTheme };