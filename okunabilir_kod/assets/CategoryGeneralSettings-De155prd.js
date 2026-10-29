import { R as _0x23a670, b as _0x1d3168, r as _0x3ad12e, dW as _0x5c075a, P as _0x313582, j as _0x2b5d03, I as _0x50116e } from "./index-cQfEKR1W.js";
import { I as _0x5b9fd4 } from "./input-AMyERYwJ.js";
import { L as _0x3a8af4 } from "./label-ODyS97Ju.js";
import { c as _0x35717b } from "./validators-DXDy_d27.js";
import "./index-BUijt7wr.js";
const l = _0x1f6f56 => {
  const _0x5bc430 = document.createElement("textarea");
  _0x5bc430.innerHTML = _0x1f6f56;
  return _0x5bc430.value;
};
const m = _0x23a670.forwardRef(({
  categoryId: _0x4cadf1,
  categoryData: _0xba3ecd,
  isLoading: _0x2c229b,
  onDirtyChange: _0x207e8a,
  onValidationErrorChange: _0x28a752
}, _0x34e7b7) => {
  const {
    t: _0x58e9d0
  } = _0x1d3168();
  const [_0x5bd872, _0x4a8f34] = _0x3ad12e.useState("");
  const [_0x334c2c, _0x119667] = _0x3ad12e.useState(null);
  _0x3ad12e.useEffect(() => {
    if (_0xba3ecd) {
      _0x4a8f34(l(_0xba3ecd.name || ""));
    }
  }, [_0xba3ecd]);
  _0x3ad12e.useEffect(() => {
    if (_0xba3ecd) {
      const _0x5d7eb3 = _0x5bd872 !== l(_0xba3ecd.name || "");
      _0x207e8a(_0x5d7eb3);
      const _0x27d86d = _0x35717b(_0x5bd872);
      _0x119667(_0x27d86d);
      _0x28a752(!!_0x27d86d);
    }
  }, [_0x5bd872, _0xba3ecd, _0x207e8a, _0x28a752]);
  _0x5c075a("category_updated", _0x11cfa9 => {
    const {
      category_id: _0x2f7d56,
      changes: _0x323738
    } = _0x11cfa9;
    if (_0x2f7d56 === _0x4cadf1 && _0x323738.name) {
      _0x4a8f34(l(_0x323738.name));
      _0x313582.success(_0x58e9d0("serverSettings.categorySettings.categoryNameUpdated"));
    }
  });
  const _0x53c775 = _0x3ad12e.useCallback(_0x5ae1ff => {
    if (new TextEncoder().encode(_0x5ae1ff).length <= 200) {
      _0x4a8f34(_0x5ae1ff);
    }
  }, []);
  _0x23a670.useImperativeHandle(_0x34e7b7, () => ({
    getValues: () => ({
      name: _0x5bd872
    }),
    reset: () => {
      if (_0xba3ecd) {
        _0x4a8f34(l(_0xba3ecd.name || ""));
      }
    },
    markPristine: _0x265d42 => {
      if (_0x265d42?.name) {
        _0x4a8f34(l(_0x265d42.name));
      }
    }
  }), [_0x5bd872, _0xba3ecd]);
  return <div className="space-y-8">{_0x2c229b ? <div className="flex items-center justify-center py-12"><div className="h-8 w-8 animate-spin rounded-full border-2 border-solid border-accent-primary border-t-transparent" /></div> : <section><div className="space-y-8"><section><div className="mb-2"><div className="flex items-center gap-2"><_0x50116e icon="solar:folder-bold-duotone" className="size-4 text-text-tertiary" /><div className="text-base leading-snug font-semibold text-text-secondary">{_0x58e9d0("serverSettings.categorySettings.categoryName")}</div></div><p className="text-sm leading-snug text-text-muted mt-0.5">{_0x58e9d0("serverSettings.categorySettings.categoryNameDesc")}</p></div><div className="space-y-1.5"><_0x3a8af4 htmlFor="category-name" className="text-sm leading-snug text-text-tertiary">{_0x58e9d0("serverSettings.categorySettings.nameLabel")}</_0x3a8af4><_0x5b9fd4 id="category-name" value={_0x5bd872} onChange={_0x2b9ea0 => _0x53c775(_0x2b9ea0.target.value)} maxLength={50} placeholder={_0x58e9d0("serverSettings.categorySettings.namePlaceholder")} className={"bg-surface-overlay/50 text-text-secondary placeholder:text-text-muted focus:ring-accent-primary/20 " + (_0x334c2c ? "border-red-500/50 focus:border-red-500/50" : "border-border-default focus:border-accent-primary/50")} />{_0x334c2c && <div className="text-xs text-red-400 mt-1">{_0x334c2c}</div>}<div className="flex items-center justify-end text-[11px] text-text-muted">{_0x5bd872.length}/50</div></div></section></div></section>}</div>;
});
m.displayName = "CategoryGeneralSettings";
export { m as default };