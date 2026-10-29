import { b as _0x5de21f, j as _0xe9409a } from "./index-cQfEKR1W.js";
import { L as _0x3b97ca } from "./LegalPageLayout-xqymhWe7.js";
import { L as _0x1ededa } from "./LegalContentRenderer-CG6um5ji.js";
const r = () => {
  const {
    t: _0x5f15c1
  } = _0x5de21f();
  const _0x20ff34 = _0x5f15c1("legal.distanceSales.sections", {
    returnObjects: true
  });
  const _0x44b728 = Array.isArray(_0x20ff34) ? _0x20ff34.map(_0x1b589d => ({
    id: _0x1b589d.id,
    title: _0x1b589d.title.replace(/^\d+\.\s*/, "")
  })) : [];
  return _0xe9409a.jsx(_0x3b97ca, {
    title: _0x5f15c1("legal.distanceSales.title"),
    description: _0x5f15c1("legal.distanceSales.description"),
    lastUpdated: _0x5f15c1("legal.distanceSales.lastUpdated"),
    icon: "terms",
    tableOfContents: _0x44b728,
    children: Array.isArray(_0x20ff34) && _0xe9409a.jsx(_0x1ededa, {
      sections: _0x20ff34
    })
  });
};
export { r as default };