import { b as _0x162f63, j as _0x416770 } from "./index-cQfEKR1W.js";
import { L as _0x3bb57a } from "./LegalPageLayout-xqymhWe7.js";
import { L as _0x54c60d } from "./LegalContentRenderer-CG6um5ji.js";
const s = () => {
  const {
    t: _0x370f00
  } = _0x162f63();
  const _0x1425b4 = _0x370f00("legal.childSafetyPage.sections", {
    returnObjects: true
  });
  const _0x540d34 = Array.isArray(_0x1425b4) ? _0x1425b4.map(_0x292d54 => ({
    id: _0x292d54.id,
    title: _0x292d54.title
  })) : [];
  return <_0x3bb57a title={_0x370f00("legal.childSafetyPage.title")} description={_0x370f00("legal.childSafetyPage.description")} lastUpdated={_0x370f00("legal.childSafetyPage.lastUpdated")} icon="child-safety" tableOfContents={_0x540d34}>{Array.isArray(_0x1425b4) && <_0x54c60d sections={_0x1425b4} />}</_0x3bb57a>;
};
export { s as default };