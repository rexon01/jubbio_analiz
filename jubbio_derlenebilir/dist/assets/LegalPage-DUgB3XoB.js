import { b as _0x1ca867, j as _0x1a73e5 } from "./index-cQfEKR1W.js";
import { L as _0xec6cd8 } from "./LegalPageLayout-xqymhWe7.js";
import { L as _0x32f49f } from "./LegalContentRenderer-CG6um5ji.js";
const s = ({
  legalKey: _0x36a3a8,
  icon: _0x462062
}) => {
  const {
    t: _0x3f9e87
  } = _0x1ca867();
  const _0x154f61 = _0x3f9e87("legal." + _0x36a3a8 + ".sections", {
    returnObjects: true
  });
  const _0x5cee41 = Array.isArray(_0x154f61) ? _0x154f61.map(_0x48fae0 => ({
    id: _0x48fae0.id,
    title: _0x48fae0.title.replace(/^\d+\.\s*/, "")
  })) : [];
  return _0x1a73e5.jsx(_0xec6cd8, {
    title: _0x3f9e87("legal." + _0x36a3a8 + ".title"),
    description: _0x3f9e87("legal." + _0x36a3a8 + ".description"),
    lastUpdated: _0x3f9e87("legal." + _0x36a3a8 + ".lastUpdated"),
    icon: _0x462062,
    tableOfContents: _0x5cee41,
    children: Array.isArray(_0x154f61) && _0x1a73e5.jsx(_0x32f49f, {
      sections: _0x154f61
    })
  });
};
export { s as L };