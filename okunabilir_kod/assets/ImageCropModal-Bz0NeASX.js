import { R as _0x58905a, r as _0x5ad797, a, b as _0x21a729, j as _0x3a250d, I as _0x11abe3 } from "./index-cQfEKR1W.js";
import { D as _0x2bb030, a as _0x4e6497, b as _0x279676, c as _Component4, d as _Component5 } from "./dialog-BMMpM7PR.js";
import { D as _0x382cab, a as _0x174dea, b as _0x1b3d79, c as _0x5cbe76, d as _0x5db66b } from "./drawer-X7YyCqpZ.js";
import { C as _0x320f19 } from "./index.module-CsHioFCV.js";
const _Component2 = ({
  className: _0xa6155f
}) => <_0x11abe3 icon="solar:magnifer-zoom-in-bold-duotone" className={_0xa6155f} />;
const _Component = ({
  className: _0x33741b
}) => <_0x11abe3 icon="solar:magnifer-zoom-out-bold-duotone" className={_0x33741b} />;
const _Component3 = ({
  className: _0x5f1963
}) => <_0x11abe3 icon="solar:refresh-bold-duotone" className={_0x5f1963} />;
const v = async (_0x35a52b, _0x44a146, _0x4ca389 = 0, _0x485404 = "cropped-image.png") => {
  const _0x763bab = await (_0x47a6c5 = _0x35a52b, new Promise((_0x3a1a16, _0x28d4af) => {
    const _0x37151f = new Image();
    _0x37151f.addEventListener("load", () => _0x3a1a16(_0x37151f));
    _0x37151f.addEventListener("error", _0x4e7015 => _0x28d4af(_0x4e7015));
    _0x37151f.crossOrigin = "anonymous";
    _0x37151f.src = _0x47a6c5;
  }));
  var _0x47a6c5;
  const _0x5ed31c = document.createElement("canvas");
  const _0x4ab1a9 = _0x5ed31c.getContext("2d");
  if (!_0x4ab1a9) {
    throw new Error("Canvas context unavailable");
  }
  const _0x234584 = Math.max(_0x763bab.width, _0x763bab.height) / 2 * Math.sqrt(2) * 2;
  _0x5ed31c.width = _0x234584;
  _0x5ed31c.height = _0x234584;
  _0x4ab1a9.translate(_0x234584 / 2, _0x234584 / 2);
  _0x4ab1a9.rotate(_0x4ca389 * Math.PI / 180);
  _0x4ab1a9.translate(-_0x234584 / 2, -_0x234584 / 2);
  _0x4ab1a9.drawImage(_0x763bab, _0x234584 / 2 - _0x763bab.width * 0.5, _0x234584 / 2 - _0x763bab.height * 0.5);
  const _0x6ee386 = Math.round(_0x234584 / 2 - _0x763bab.width * 0.5 + _0x44a146.x);
  const _0x56cce2 = Math.round(_0x234584 / 2 - _0x763bab.height * 0.5 + _0x44a146.y);
  const _0x27f665 = document.createElement("canvas");
  _0x27f665.width = _0x44a146.width;
  _0x27f665.height = _0x44a146.height;
  const _0x4ae1c1 = _0x27f665.getContext("2d");
  if (!_0x4ae1c1) {
    throw new Error("Crop canvas context unavailable");
  }
  _0x4ae1c1.drawImage(_0x5ed31c, _0x6ee386, _0x56cce2, _0x44a146.width, _0x44a146.height, 0, 0, _0x44a146.width, _0x44a146.height);
  return new Promise((_0x3b24be, _0x501c85) => {
    _0x27f665.toBlob(_0x3cd6e2 => {
      if (_0x3cd6e2) {
        const _0x1b62d0 = _0x485404.replace(/\.[^.]+$/, "") + ".webp";
        _0x3b24be(new File([_0x3cd6e2], _0x1b62d0, {
          type: "image/webp"
        }));
      } else {
        _0x501c85(new Error("Image encoding failed"));
      }
    }, "image/webp", 0.9);
  });
};
const N = _0x58905a.memo(({
  isOpen: _0x398223,
  onClose: _0x13980c,
  imageSrc: _0x13c9ea,
  aspect: _0x484f79,
  onCropComplete: _0x48a921,
  imageName: _0x16fdf8 = "cropped-image.png",
  cropShape: _0x4fadd2 = "rect"
}) => {
  const [_0x219ad9, _0x369671] = _0x5ad797.useState({
    x: 0,
    y: 0
  });
  const [_0x14b10b, _0x4f0190] = _0x5ad797.useState(1);
  const [_0x1137a2, _0x3d65a6] = _0x5ad797.useState(0);
  const [_0x502d6a, _0x3c961d] = _0x5ad797.useState(null);
  const [_0x55e17b, _0x5b891e] = _0x5ad797.useState(false);
  const _0x58df4e = a("(max-width: 767px)");
  const {
    t: _0x92f807
  } = _0x21a729();
  _0x58905a.useEffect(() => {
    if (!_0x398223) {
      _0x369671({
        x: 0,
        y: 0
      });
      _0x4f0190(1);
      _0x3d65a6(0);
      _0x3c961d(null);
      _0x5b891e(false);
    }
  }, [_0x398223]);
  const _0x283bb3 = _0x5ad797.useCallback((_0xc1a73a, _0x46c0ec) => {
    _0x3c961d(_0x46c0ec);
  }, []);
  const _0x200935 = _0x5ad797.useCallback(async () => {
    if (_0x13c9ea && _0x502d6a && !_0x55e17b) {
      _0x5b891e(true);
      await new Promise(_0x1d40de => requestAnimationFrame(() => requestAnimationFrame(_0x1d40de)));
      try {
        const _0x3d73ef = await v(_0x13c9ea, _0x502d6a, _0x1137a2, _0x16fdf8);
        _0x48a921(_0x3d73ef);
        _0x13980c();
      } catch (_0x3d1282) {
        console.error("Crop error:", _0x3d1282);
      } finally {
        _0x5b891e(false);
      }
    }
  }, [_0x13c9ea, _0x502d6a, _0x1137a2, _0x16fdf8, _0x48a921, _0x13980c, _0x55e17b]);
  const _0x95a36f = _0x5ad797.useCallback(_0x5b2763 => {
    const _0x172c02 = _0x5b2763.target.value.replace(/[^0-9]/g, "");
    if (_0x172c02 === "") {
      _0x3d65a6(0);
      return;
    }
    const _0x4295b9 = Math.min(360, Math.max(0, parseInt(_0x172c02, 10)));
    if (!isNaN(_0x4295b9)) {
      _0x3d65a6(_0x4295b9);
    }
  }, []);
  const _0x30819c = <div className="flex flex-col h-full"><div className="relative flex-1 min-h-[300px] bg-black/50">{_0x13c9ea && <_0x320f19 image={_0x13c9ea} crop={_0x219ad9} zoom={_0x14b10b} rotation={_0x1137a2} aspect={_0x484f79} onCropChange={_0x369671} onZoomChange={_0x4f0190} onRotationChange={_0x3d65a6} onCropComplete={_0x283bb3} cropShape={_0x4fadd2} showGrid={false} style={{
        containerStyle: {
          borderRadius: "12px"
        },
        cropAreaStyle: {
          border: "3px solid var(--accent-primary, #adff08)"
        }
      }} />}</div><div className="px-4 py-4 space-y-4"><div className="flex items-center gap-3"><_Component className="size-4 text-text-tertiary" /><input type="range" min={1} max={3} step={0.1} value={_0x14b10b} onChange={_0x5e03ae => _0x4f0190(Number(_0x5e03ae.target.value))} className="flex-1 h-1.5 bg-surface-inset rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent-primary [&::-webkit-slider-thumb]:cursor-pointer" /><_Component2 className="size-4 text-text-tertiary" /></div><div className="flex items-center gap-3"><_Component3 className="size-4 text-text-tertiary flex-shrink-0" /><input type="range" min={0} max={360} step={1} value={_0x1137a2} onChange={_0x348c74 => _0x3d65a6(Number(_0x348c74.target.value))} className="flex-1 h-1.5 bg-surface-inset rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent-primary [&::-webkit-slider-thumb]:cursor-pointer" /><div className="flex items-center flex-shrink-0"><input type="text" inputMode="numeric" value={_0x1137a2} onChange={_0x95a36f} className="w-8 bg-transparent text-xs text-text-tertiary text-right outline-none focus:text-text-primary [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" /><span className="text-xs text-text-tertiary">°</span></div></div></div><div className="px-4 py-3 border-t border-border-subtle"><div className="flex items-center gap-2"><button onClick={_0x13980c} className="flex-1 h-10 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer">{_0x92f807("serverSettings.imageCrop.cancelBtn")}</button><button onClick={_0x200935} disabled={!_0x502d6a || _0x55e17b} className="flex-1 h-10 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">{_0x55e17b && <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>}{_0x55e17b ? _0x92f807("serverSettings.imageCrop.processing", {
            defaultValue: _0x92f807("serverSettings.imageCrop.cropAndSave")
          }) : _0x92f807("serverSettings.imageCrop.cropAndSave")}</button></div></div></div>;
  if (_0x58df4e) {
    return <_0x382cab open={_0x398223} onOpenChange={_0x55ff02 => !_0x55ff02 && _0x13980c()}><_0x174dea className="bg-surface-raised border-border-default text-text-primary max-h-[90dvh]"><_0x1b3d79 className="px-4 py-3 border-b border-border-subtle"><_0x5cbe76 className="text-lg font-semibold">{_0x92f807("serverSettings.imageCrop.title")}</_0x5cbe76><_0x5db66b className="text-text-muted text-sm">{_0x92f807("serverSettings.imageCrop.description")}</_0x5db66b></_0x1b3d79>{_0x30819c}</_0x174dea></_0x382cab>;
  } else {
    return <_0x2bb030 open={_0x398223} onOpenChange={_0x921afe => !_0x921afe && _0x13980c()}><_0x4e6497 className="p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-lg overflow-hidden" overlayClassName="z-[199]" wrapperClassName="z-[200]"><div className="p-px rounded-2xl bg-gradient-to-br from-border-strong/40 via-transparent to-border-default/20 shadow-2xl shadow-black/5 dark:shadow-black/40"><div className="bg-surface-raised/95 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col"><_0x279676 className="px-4 py-4 border-b border-border-subtle shrink-0"><_Component4 className="text-lg font-semibold text-text-primary">{_0x92f807("serverSettings.imageCrop.title")}</_Component4><_Component5 className="text-text-muted text-sm">{_0x92f807("serverSettings.imageCrop.description")}</_Component5></_0x279676>{_0x30819c}</div></div></_0x4e6497></_0x2bb030>;
  }
});
export { N as I };