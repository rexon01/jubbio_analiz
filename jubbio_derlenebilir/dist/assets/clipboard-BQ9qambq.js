async function t(_0x40f54d) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(_0x40f54d);
      return true;
    } catch {}
  }
  try {
    const _0xf426f5 = document.createElement("textarea");
    _0xf426f5.value = _0x40f54d;
    _0xf426f5.style.position = "fixed";
    _0xf426f5.style.left = "-9999px";
    _0xf426f5.style.top = "-9999px";
    _0xf426f5.style.opacity = "0";
    document.body.appendChild(_0xf426f5);
    _0xf426f5.focus();
    _0xf426f5.select();
    const _0x2a6bf7 = document.execCommand("copy");
    document.body.removeChild(_0xf426f5);
    return _0x2a6bf7;
  } catch {
    return false;
  }
}
export { t as c };