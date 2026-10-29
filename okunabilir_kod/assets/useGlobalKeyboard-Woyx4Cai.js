import { r as _0x52f99b } from "./index-cQfEKR1W.js";
const s = new class {
  handlers = new Map();
  isListening = false;
  handleKeyDown = _0x4b8164 => {
    const _0x18a80e = (this.handlers.get(_0x4b8164.key) || []).sort((_0xcdc961, _0x120f85) => (_0x120f85.priority || 0) - (_0xcdc961.priority || 0));
    for (const {
      handler: _0x3ebd98
    } of _0x18a80e) {
      _0x3ebd98(_0x4b8164);
      if (_0x4b8164.defaultPrevented) {
        break;
      }
    }
  };
  register(_0x4cedc7, _0x29c31e, _0xe588f3 = 0) {
    if (!this.handlers.has(_0x4cedc7)) {
      this.handlers.set(_0x4cedc7, []);
    }
    this.handlers.get(_0x4cedc7).push({
      key: _0x4cedc7,
      handler: _0x29c31e,
      priority: _0xe588f3
    });
    if (!this.isListening) {
      document.addEventListener("keydown", this.handleKeyDown);
      this.isListening = true;
    }
    return () => this.unregister(_0x4cedc7, _0x29c31e);
  }
  unregister(_0x233b50, _0x1c1cc2) {
    const _0x2d4647 = this.handlers.get(_0x233b50);
    if (!_0x2d4647) {
      return;
    }
    const _0x51792e = _0x2d4647.findIndex(_0x3a0b9d => _0x3a0b9d.handler === _0x1c1cc2);
    if (_0x51792e > -1) {
      _0x2d4647.splice(_0x51792e, 1);
    }
    if (_0x2d4647.length === 0) {
      this.handlers.delete(_0x233b50);
    }
    if (this.handlers.size === 0 && this.isListening) {
      document.removeEventListener("keydown", this.handleKeyDown);
      this.isListening = false;
    }
  }
}();
const n = (_0x18c280, _0x29c8ae, _0x5c8737 = 0, _0x51ba92 = true) => {
  const _0x4ce890 = _0x52f99b.useRef(_0x29c8ae);
  _0x4ce890.current = _0x29c8ae;
  _0x52f99b.useEffect(() => {
    if (!_0x51ba92) {
      return;
    }
    return s.register(_0x18c280, _0x260204 => _0x4ce890.current(_0x260204), _0x5c8737);
  }, [_0x18c280, _0x5c8737, _0x51ba92]);
};
export { n as u };