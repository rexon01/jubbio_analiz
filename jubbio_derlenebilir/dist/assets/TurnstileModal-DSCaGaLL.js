import { R as _0x485017, b as _0x37b436, r as _0x70e817 } from "./index-cQfEKR1W.js";
import "./submit-button-B2LF_DTf.js";
const r = _0x485017.memo(({
  isOpen: _0x44cf62,
  onClose: _0x1af793,
  onVerify: _0x373542,
  title: _0x27f2c1,
  description: _0xfd9673
}) => {
  const {
    t: _0x58d9f6
  } = _0x37b436();
  const _0x456a3b = _0x70e817.useRef(null);
  const [_0xbdc659, _0x143959] = _0x70e817.useState(false);
  _0x70e817.useCallback(_0x2ae7d0 => {
    _0x143959(false);
    _0x373542(_0x2ae7d0);
  }, [_0x373542]);
  _0x70e817.useCallback(() => {
    _0x143959(true);
  }, []);
  _0x70e817.useCallback(() => {
    _0x143959(true);
    _0x456a3b.current?.reset();
  }, []);
  _0x70e817.useCallback(() => {
    _0x143959(false);
    _0x456a3b.current?.reset();
  }, []);
  return null;
});
export { r as T };