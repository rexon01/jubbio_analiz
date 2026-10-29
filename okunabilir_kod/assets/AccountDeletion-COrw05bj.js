import { b as _0x4ee07a, j as _0x3fd0f8 } from "./index-cQfEKR1W.js";
import { L as _0x4b8605 } from "./LegalPageLayout-xqymhWe7.js";
import { L as _0x2abcad } from "./LegalContentRenderer-CG6um5ji.js";
const i = () => {
  const {
    t: _0x290093
  } = _0x4ee07a();
  const _0x435671 = _0x290093("legal.accountDeletion.sections", {
    returnObjects: true
  });
  const _0x1f5b1a = Array.isArray(_0x435671) ? _0x435671.map(_0x1950e9 => ({
    id: _0x1950e9.id,
    title: _0x1950e9.title
  })) : [];
  return <_0x4b8605 title={_0x290093("legal.accountDeletion.title")} description={_0x290093("legal.accountDeletion.description")} lastUpdated={_0x290093("legal.accountDeletion.lastUpdated")} icon="default" tableOfContents={_0x1f5b1a}>{Array.isArray(_0x435671) && <_0x2abcad sections={_0x435671} />}</_0x4b8605>;
};
export { i as default };