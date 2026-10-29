import { a as _0x503759 } from "./protocol-De1f5_BR.js";
new TextEncoder();
function e(_0x150881, _0x2ce569, _0x3d4914) {
  let _0x51ed72 = _0x2ce569;
  const _0x3997f9 = _0x51ed72 + _0x3d4914;
  const _0x5d5ab1 = [];
  let _0x2d41d8 = "";
  while (_0x51ed72 < _0x3997f9) {
    const _0x11eaf8 = _0x150881[_0x51ed72++];
    if (_0x11eaf8 & 128) {
      if ((_0x11eaf8 & 224) == 192) {
        const _0x412a2b = _0x150881[_0x51ed72++] & 63;
        _0x5d5ab1.push((_0x11eaf8 & 31) << 6 | _0x412a2b);
      } else if ((_0x11eaf8 & 240) == 224) {
        const _0x5cfee4 = _0x150881[_0x51ed72++] & 63;
        const _0xb468f3 = _0x150881[_0x51ed72++] & 63;
        _0x5d5ab1.push((_0x11eaf8 & 31) << 12 | _0x5cfee4 << 6 | _0xb468f3);
      } else if ((_0x11eaf8 & 248) == 240) {
        let _0x5bb7f1 = (_0x11eaf8 & 7) << 18 | (_0x150881[_0x51ed72++] & 63) << 12 | (_0x150881[_0x51ed72++] & 63) << 6 | _0x150881[_0x51ed72++] & 63;
        if (_0x5bb7f1 > 65535) {
          _0x5bb7f1 -= 65536;
          _0x5d5ab1.push(_0x5bb7f1 >>> 10 & 1023 | 55296);
          _0x5bb7f1 = _0x5bb7f1 & 1023 | 56320;
        }
        _0x5d5ab1.push(_0x5bb7f1);
      } else {
        _0x5d5ab1.push(_0x11eaf8);
      }
    } else {
      _0x5d5ab1.push(_0x11eaf8);
    }
    if (_0x5d5ab1.length >= 4096) {
      _0x2d41d8 += String.fromCharCode(..._0x5d5ab1);
      _0x5d5ab1.length = 0;
    }
  }
  if (_0x5d5ab1.length > 0) {
    _0x2d41d8 += String.fromCharCode(..._0x5d5ab1);
  }
  return _0x2d41d8;
}
const s = new TextDecoder();
function i(_0x3e29b3, _0x121148, _0x5f28e3) {
  if (_0x5f28e3 > 200) {
    return function (_0x5cee3a, _0x4de6d7, _0xd7b503) {
      const _0x4542b9 = _0x5cee3a.subarray(_0x4de6d7, _0x4de6d7 + _0xd7b503);
      return s.decode(_0x4542b9);
    }(_0x3e29b3, _0x121148, _0x5f28e3);
  } else {
    return e(_0x3e29b3, _0x121148, _0x5f28e3);
  }
}
class n {
  type;
  data;
  constructor(_0x1fd7e4, _0x322400) {
    this.type = _0x1fd7e4;
    this.data = _0x322400;
  }
}
class r extends Error {
  constructor(_0x3688f9) {
    super(_0x3688f9);
    const _0x25f3fd = Object.create(r.prototype);
    Object.setPrototypeOf(this, _0x25f3fd);
    Object.defineProperty(this, "name", {
      configurable: true,
      enumerable: false,
      value: r.name
    });
  }
}
const o = 4294967295;
function a(_0x41f7ef, _0x2fd9f8) {
  return _0x41f7ef.getInt32(_0x2fd9f8) * 4294967296 + _0x41f7ef.getUint32(_0x2fd9f8 + 4);
}
function h({
  sec: _0x3c4813,
  nsec: _0x550548
}) {
  if (_0x3c4813 >= 0 && _0x550548 >= 0 && _0x3c4813 <= 17179869183) {
    if (_0x550548 === 0 && _0x3c4813 <= 4294967295) {
      const _0x1dd026 = new Uint8Array(4);
      new DataView(_0x1dd026.buffer).setUint32(0, _0x3c4813);
      return _0x1dd026;
    }
    {
      const _0x409135 = _0x3c4813 / 4294967296;
      const _0x2c2de2 = _0x3c4813 & -1;
      const _0x4040f9 = new Uint8Array(8);
      const _0x45f84a = new DataView(_0x4040f9.buffer);
      _0x45f84a.setUint32(0, _0x550548 << 2 | _0x409135 & 3);
      _0x45f84a.setUint32(4, _0x2c2de2);
      return _0x4040f9;
    }
  }
  {
    const _0x5c5f8e = new Uint8Array(12);
    const _0x1955a2 = new DataView(_0x5c5f8e.buffer);
    _0x1955a2.setUint32(0, _0x550548);
    (function (_0x1c48d4, _0x491fba, _0x34064e) {
      const _0x1ebeac = Math.floor(_0x34064e / 4294967296);
      const _0x16e8aa = _0x34064e;
      _0x1c48d4.setUint32(_0x491fba, _0x1ebeac);
      _0x1c48d4.setUint32(_0x491fba + 4, _0x16e8aa);
    })(_0x1955a2, 4, _0x3c4813);
    return _0x5c5f8e;
  }
}
const c = {
  type: -1,
  encode: function (_0x5d2dbc) {
    if (_0x5d2dbc instanceof Date) {
      return h(function (_0x2abbf1) {
        const _0x319e2a = _0x2abbf1.getTime();
        const _0x25adfb = Math.floor(_0x319e2a / 1000);
        const _0x59e452 = (_0x319e2a - _0x25adfb * 1000) * 1000000;
        const _0x5951a2 = Math.floor(_0x59e452 / 1000000000);
        return {
          sec: _0x25adfb + _0x5951a2,
          nsec: _0x59e452 - _0x5951a2 * 1000000000
        };
      }(_0x5d2dbc));
    }
    return null;
  },
  decode: function (_0x39a3f3) {
    const _0x2c01e1 = function (_0x416b18) {
      const _0x13bd06 = new DataView(_0x416b18.buffer, _0x416b18.byteOffset, _0x416b18.byteLength);
      switch (_0x416b18.byteLength) {
        case 4:
          return {
            sec: _0x13bd06.getUint32(0),
            nsec: 0
          };
        case 8:
          {
            const _0x462f5b = _0x13bd06.getUint32(0);
            return {
              sec: (_0x462f5b & 3) * 4294967296 + _0x13bd06.getUint32(4),
              nsec: _0x462f5b >>> 2
            };
          }
        case 12:
          return {
            sec: a(_0x13bd06, 4),
            nsec: _0x13bd06.getUint32(0)
          };
        default:
          throw new r("Unrecognized data size for timestamp (expected 4, 8, or 12): " + _0x416b18.length);
      }
    }(_0x39a3f3);
    return new Date(_0x2c01e1.sec * 1000 + _0x2c01e1.nsec / 1000000);
  }
};
class d {
  static defaultCodec = new d();
  __brand;
  builtInEncoders = [];
  builtInDecoders = [];
  encoders = [];
  decoders = [];
  constructor() {
    this.register(c);
  }
  register({
    type: _0x1c325a,
    encode: _0x52f165,
    decode: _0x974b37
  }) {
    if (_0x1c325a >= 0) {
      this.encoders[_0x1c325a] = _0x52f165;
      this.decoders[_0x1c325a] = _0x974b37;
    } else {
      const _0x961c34 = -1 - _0x1c325a;
      this.builtInEncoders[_0x961c34] = _0x52f165;
      this.builtInDecoders[_0x961c34] = _0x974b37;
    }
  }
  tryToEncode(_0x33fbbe, _0x4b80cc) {
    for (let _0x585133 = 0; _0x585133 < this.builtInEncoders.length; _0x585133++) {
      const _0xde15f6 = this.builtInEncoders[_0x585133];
      if (_0xde15f6 != null) {
        const _0x83abd4 = _0xde15f6(_0x33fbbe, _0x4b80cc);
        if (_0x83abd4 != null) {
          return new n(-1 - _0x585133, _0x83abd4);
        }
      }
    }
    for (let _0x58a2de = 0; _0x58a2de < this.encoders.length; _0x58a2de++) {
      const _0x1f45d4 = this.encoders[_0x58a2de];
      if (_0x1f45d4 != null) {
        const _0x4de605 = _0x1f45d4(_0x33fbbe, _0x4b80cc);
        if (_0x4de605 != null) {
          return new n(_0x58a2de, _0x4de605);
        }
      }
    }
    if (_0x33fbbe instanceof n) {
      return _0x33fbbe;
    } else {
      return null;
    }
  }
  decode(_0x2017e2, _0x3452a3, _0x95b312) {
    const _0x18aafe = _0x3452a3 < 0 ? this.builtInDecoders[-1 - _0x3452a3] : this.decoders[_0x3452a3];
    if (_0x18aafe) {
      return _0x18aafe(_0x2017e2, _0x3452a3, _0x95b312);
    } else {
      return new n(_0x3452a3, _0x2017e2);
    }
  }
}
function l(_0x2969a8) {
  if (_0x2969a8 instanceof Uint8Array) {
    return _0x2969a8;
  } else if (ArrayBuffer.isView(_0x2969a8)) {
    return new Uint8Array(_0x2969a8.buffer, _0x2969a8.byteOffset, _0x2969a8.byteLength);
  } else if (function (_0x55102c) {
    return _0x55102c instanceof ArrayBuffer || typeof SharedArrayBuffer != "undefined" && _0x55102c instanceof SharedArrayBuffer;
  }(_0x2969a8)) {
    return new Uint8Array(_0x2969a8);
  } else {
    return Uint8Array.from(_0x2969a8);
  }
}
function p(_0x39ef91) {
  return (_0x39ef91 < 0 ? "-" : "") + "0x" + Math.abs(_0x39ef91).toString(16).padStart(2, "0");
}
const u = "array";
const f = "map_key";
const y = "map_value";
const g = _0x2c8b77 => {
  if (typeof _0x2c8b77 == "string" || typeof _0x2c8b77 == "number") {
    return _0x2c8b77;
  }
  throw new r("The type of key must be string or number but " + typeof _0x2c8b77);
};
class m {
  stack = [];
  stackHeadPosition = -1;
  get length() {
    return this.stackHeadPosition + 1;
  }
  top() {
    return this.stack[this.stackHeadPosition];
  }
  pushArrayState(_0xd88359) {
    const _0x4046f5 = this.getUninitializedStateFromPool();
    _0x4046f5.type = u;
    _0x4046f5.position = 0;
    _0x4046f5.size = _0xd88359;
    _0x4046f5.array = new Array(_0xd88359);
  }
  pushMapState(_0x5806f1) {
    const _0x374b24 = this.getUninitializedStateFromPool();
    _0x374b24.type = f;
    _0x374b24.readCount = 0;
    _0x374b24.size = _0x5806f1;
    _0x374b24.map = {};
  }
  getUninitializedStateFromPool() {
    this.stackHeadPosition++;
    if (this.stackHeadPosition === this.stack.length) {
      const _0x4293f6 = {
        type: undefined,
        size: 0,
        array: undefined,
        position: 0,
        readCount: 0,
        map: undefined,
        key: null
      };
      this.stack.push(_0x4293f6);
    }
    return this.stack[this.stackHeadPosition];
  }
  release(_0x4b27b7) {
    if (this.stack[this.stackHeadPosition] !== _0x4b27b7) {
      throw new Error("Invalid stack state. Released state is not on top of the stack.");
    }
    if (_0x4b27b7.type === u) {
      const _0x43b545 = _0x4b27b7;
      _0x43b545.size = 0;
      _0x43b545.array = undefined;
      _0x43b545.position = 0;
      _0x43b545.type = undefined;
    }
    if (_0x4b27b7.type === f || _0x4b27b7.type === y) {
      const _0x2d55c6 = _0x4b27b7;
      _0x2d55c6.size = 0;
      _0x2d55c6.map = undefined;
      _0x2d55c6.readCount = 0;
      _0x2d55c6.type = undefined;
    }
    this.stackHeadPosition--;
  }
  reset() {
    this.stack.length = 0;
    this.stackHeadPosition = -1;
  }
}
const w = new DataView(new ArrayBuffer(0));
const b = new Uint8Array(w.buffer);
try {
  w.getInt8(0);
} catch (_0x3ca5f0) {
  if (!(_0x3ca5f0 instanceof RangeError)) {
    throw new Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access");
  }
}
const S = new RangeError("Insufficient data");
const E = new class {
  hit = 0;
  miss = 0;
  caches;
  maxKeyLength;
  maxLengthPerKey;
  constructor(_0x445b4b = 16, _0x2cc3e9 = 16) {
    this.maxKeyLength = _0x445b4b;
    this.maxLengthPerKey = _0x2cc3e9;
    this.caches = [];
    for (let _0x29d867 = 0; _0x29d867 < this.maxKeyLength; _0x29d867++) {
      this.caches.push([]);
    }
  }
  canBeCached(_0x1f0068) {
    return _0x1f0068 > 0 && _0x1f0068 <= this.maxKeyLength;
  }
  find(_0x1f090a, _0x27b818, _0x319d10) {
    const _0x51582e = this.caches[_0x319d10 - 1];
    _0x59e505: for (const _0x5e2ad9 of _0x51582e) {
      const _0x296a9b = _0x5e2ad9.bytes;
      for (let _0x29abfc = 0; _0x29abfc < _0x319d10; _0x29abfc++) {
        if (_0x296a9b[_0x29abfc] !== _0x1f090a[_0x27b818 + _0x29abfc]) {
          continue _0x59e505;
        }
      }
      return _0x5e2ad9.str;
    }
    return null;
  }
  store(_0x501460, _0x4fb77d) {
    const _0x27ce53 = this.caches[_0x501460.length - 1];
    const _0x4bd87c = {
      bytes: _0x501460,
      str: _0x4fb77d
    };
    if (_0x27ce53.length >= this.maxLengthPerKey) {
      _0x27ce53[Math.random() * _0x27ce53.length | 0] = _0x4bd87c;
    } else {
      _0x27ce53.push(_0x4bd87c);
    }
  }
  decode(_0xae236b, _0x46fd1c, _0x2e1308) {
    const _0xf13a86 = this.find(_0xae236b, _0x46fd1c, _0x2e1308);
    if (_0xf13a86 != null) {
      this.hit++;
      return _0xf13a86;
    }
    this.miss++;
    const _0x4f2adb = e(_0xae236b, _0x46fd1c, _0x2e1308);
    const _0x2ac36b = Uint8Array.prototype.slice.call(_0xae236b, _0x46fd1c, _0x46fd1c + _0x2e1308);
    this.store(_0x2ac36b, _0x4f2adb);
    return _0x4f2adb;
  }
}();
class v {
  extensionCodec;
  context;
  useBigInt64;
  rawStrings;
  maxStrLength;
  maxBinLength;
  maxArrayLength;
  maxMapLength;
  maxExtLength;
  keyDecoder;
  mapKeyConverter;
  totalPos = 0;
  pos = 0;
  view = w;
  bytes = b;
  headByte = -1;
  stack = new m();
  entered = false;
  constructor(_0x2fefe1) {
    this.extensionCodec = _0x2fefe1?.extensionCodec ?? d.defaultCodec;
    this.context = _0x2fefe1?.context;
    this.useBigInt64 = _0x2fefe1?.useBigInt64 ?? false;
    this.rawStrings = _0x2fefe1?.rawStrings ?? false;
    this.maxStrLength = _0x2fefe1?.maxStrLength ?? o;
    this.maxBinLength = _0x2fefe1?.maxBinLength ?? o;
    this.maxArrayLength = _0x2fefe1?.maxArrayLength ?? o;
    this.maxMapLength = _0x2fefe1?.maxMapLength ?? o;
    this.maxExtLength = _0x2fefe1?.maxExtLength ?? o;
    this.keyDecoder = _0x2fefe1?.keyDecoder !== undefined ? _0x2fefe1.keyDecoder : E;
    this.mapKeyConverter = _0x2fefe1?.mapKeyConverter ?? g;
  }
  clone() {
    return new v({
      extensionCodec: this.extensionCodec,
      context: this.context,
      useBigInt64: this.useBigInt64,
      rawStrings: this.rawStrings,
      maxStrLength: this.maxStrLength,
      maxBinLength: this.maxBinLength,
      maxArrayLength: this.maxArrayLength,
      maxMapLength: this.maxMapLength,
      maxExtLength: this.maxExtLength,
      keyDecoder: this.keyDecoder
    });
  }
  reinitializeState() {
    this.totalPos = 0;
    this.headByte = -1;
    this.stack.reset();
  }
  setBuffer(_0x1bf8f5) {
    const _0x5285fb = l(_0x1bf8f5);
    this.bytes = _0x5285fb;
    this.view = new DataView(_0x5285fb.buffer, _0x5285fb.byteOffset, _0x5285fb.byteLength);
    this.pos = 0;
  }
  appendBuffer(_0x390999) {
    if (this.headByte !== -1 || this.hasRemaining(1)) {
      const _0x37d01e = this.bytes.subarray(this.pos);
      const _0x82919f = l(_0x390999);
      const _0x463d06 = new Uint8Array(_0x37d01e.length + _0x82919f.length);
      _0x463d06.set(_0x37d01e);
      _0x463d06.set(_0x82919f, _0x37d01e.length);
      this.setBuffer(_0x463d06);
    } else {
      this.setBuffer(_0x390999);
    }
  }
  hasRemaining(_0x1447a4) {
    return this.view.byteLength - this.pos >= _0x1447a4;
  }
  createExtraByteError(_0x741705) {
    const {
      view: _0x2fe70c,
      pos: _0x585c5c
    } = this;
    return new RangeError("Extra " + (_0x2fe70c.byteLength - _0x585c5c) + " of " + _0x2fe70c.byteLength + " byte(s) found at buffer[" + _0x741705 + "]");
  }
  decode(_0x1b315d) {
    if (this.entered) {
      return this.clone().decode(_0x1b315d);
    }
    try {
      this.entered = true;
      this.reinitializeState();
      this.setBuffer(_0x1b315d);
      const _0x3b0c0d = this.doDecodeSync();
      if (this.hasRemaining(1)) {
        throw this.createExtraByteError(this.pos);
      }
      return _0x3b0c0d;
    } finally {
      this.entered = false;
    }
  }
  *decodeMulti(_0x41913e) {
    if (this.entered) {
      const _0x102399 = this.clone();
      yield* _0x102399.decodeMulti(_0x41913e);
      return;
    }
    try {
      this.entered = true;
      this.reinitializeState();
      this.setBuffer(_0x41913e);
      while (this.hasRemaining(1)) {
        yield this.doDecodeSync();
      }
    } finally {
      this.entered = false;
    }
  }
  async decodeAsync(_0x43f44e) {
    if (this.entered) {
      return this.clone().decodeAsync(_0x43f44e);
    }
    try {
      this.entered = true;
      let _0x41497e;
      let _0x626304 = false;
      for await (const _0x4e57aa of _0x43f44e) {
        if (_0x626304) {
          this.entered = false;
          throw this.createExtraByteError(this.totalPos);
        }
        this.appendBuffer(_0x4e57aa);
        try {
          _0x41497e = this.doDecodeSync();
          _0x626304 = true;
        } catch (_0x1906fa) {
          if (!(_0x1906fa instanceof RangeError)) {
            throw _0x1906fa;
          }
        }
        this.totalPos += this.pos;
      }
      if (_0x626304) {
        if (this.hasRemaining(1)) {
          throw this.createExtraByteError(this.totalPos);
        }
        return _0x41497e;
      }
      const {
        headByte: _0x11a3f9,
        pos: _0x2fae47,
        totalPos: _0x4c48ef
      } = this;
      throw new RangeError("Insufficient data in parsing " + p(_0x11a3f9) + " at " + _0x4c48ef + " (" + _0x2fae47 + " in the current buffer)");
    } finally {
      this.entered = false;
    }
  }
  decodeArrayStream(_0x1b5b4c) {
    return this.decodeMultiAsync(_0x1b5b4c, true);
  }
  decodeStream(_0x48eae0) {
    return this.decodeMultiAsync(_0x48eae0, false);
  }
  async *decodeMultiAsync(_0x42f1ae, _0x2389a8) {
    if (this.entered) {
      const _0x42f1f2 = this.clone();
      yield* _0x42f1f2.decodeMultiAsync(_0x42f1ae, _0x2389a8);
      return;
    }
    try {
      this.entered = true;
      let _0x2071f7 = _0x2389a8;
      let _0x4e201d = -1;
      for await (const _0x1e098e of _0x42f1ae) {
        if (_0x2389a8 && _0x4e201d === 0) {
          throw this.createExtraByteError(this.totalPos);
        }
        this.appendBuffer(_0x1e098e);
        if (_0x2071f7) {
          _0x4e201d = this.readArraySize();
          _0x2071f7 = false;
          this.complete();
        }
        try {
          while (yield this.doDecodeSync(), --_0x4e201d !== 0);
        } catch (_0x5541e1) {
          if (!(_0x5541e1 instanceof RangeError)) {
            throw _0x5541e1;
          }
        }
        this.totalPos += this.pos;
      }
    } finally {
      this.entered = false;
    }
  }
  doDecodeSync() {
    _0x178dc6: while (true) {
      const _0x992f73 = this.readHeadByte();
      let _0x4ed658;
      if (_0x992f73 >= 224) {
        _0x4ed658 = _0x992f73 - 256;
      } else if (_0x992f73 < 192) {
        if (_0x992f73 < 128) {
          _0x4ed658 = _0x992f73;
        } else if (_0x992f73 < 144) {
          const _0x2c0626 = _0x992f73 - 128;
          if (_0x2c0626 !== 0) {
            this.pushMapState(_0x2c0626);
            this.complete();
            continue _0x178dc6;
          }
          _0x4ed658 = {};
        } else if (_0x992f73 < 160) {
          const _0x5a0ea1 = _0x992f73 - 144;
          if (_0x5a0ea1 !== 0) {
            this.pushArrayState(_0x5a0ea1);
            this.complete();
            continue _0x178dc6;
          }
          _0x4ed658 = [];
        } else {
          const _0x1958d3 = _0x992f73 - 160;
          _0x4ed658 = this.decodeString(_0x1958d3, 0);
        }
      } else if (_0x992f73 === 192) {
        _0x4ed658 = null;
      } else if (_0x992f73 === 194) {
        _0x4ed658 = false;
      } else if (_0x992f73 === 195) {
        _0x4ed658 = true;
      } else if (_0x992f73 === 202) {
        _0x4ed658 = this.readF32();
      } else if (_0x992f73 === 203) {
        _0x4ed658 = this.readF64();
      } else if (_0x992f73 === 204) {
        _0x4ed658 = this.readU8();
      } else if (_0x992f73 === 205) {
        _0x4ed658 = this.readU16();
      } else if (_0x992f73 === 206) {
        _0x4ed658 = this.readU32();
      } else if (_0x992f73 === 207) {
        _0x4ed658 = this.useBigInt64 ? this.readU64AsBigInt() : this.readU64();
      } else if (_0x992f73 === 208) {
        _0x4ed658 = this.readI8();
      } else if (_0x992f73 === 209) {
        _0x4ed658 = this.readI16();
      } else if (_0x992f73 === 210) {
        _0x4ed658 = this.readI32();
      } else if (_0x992f73 === 211) {
        _0x4ed658 = this.useBigInt64 ? this.readI64AsBigInt() : this.readI64();
      } else if (_0x992f73 === 217) {
        const _0x277dd0 = this.lookU8();
        _0x4ed658 = this.decodeString(_0x277dd0, 1);
      } else if (_0x992f73 === 218) {
        const _0x59f754 = this.lookU16();
        _0x4ed658 = this.decodeString(_0x59f754, 2);
      } else if (_0x992f73 === 219) {
        const _0x58f51c = this.lookU32();
        _0x4ed658 = this.decodeString(_0x58f51c, 4);
      } else if (_0x992f73 === 220) {
        const _0x16b6b0 = this.readU16();
        if (_0x16b6b0 !== 0) {
          this.pushArrayState(_0x16b6b0);
          this.complete();
          continue _0x178dc6;
        }
        _0x4ed658 = [];
      } else if (_0x992f73 === 221) {
        const _0x1ff989 = this.readU32();
        if (_0x1ff989 !== 0) {
          this.pushArrayState(_0x1ff989);
          this.complete();
          continue _0x178dc6;
        }
        _0x4ed658 = [];
      } else if (_0x992f73 === 222) {
        const _0x5d3b05 = this.readU16();
        if (_0x5d3b05 !== 0) {
          this.pushMapState(_0x5d3b05);
          this.complete();
          continue _0x178dc6;
        }
        _0x4ed658 = {};
      } else if (_0x992f73 === 223) {
        const _0x5de5c2 = this.readU32();
        if (_0x5de5c2 !== 0) {
          this.pushMapState(_0x5de5c2);
          this.complete();
          continue _0x178dc6;
        }
        _0x4ed658 = {};
      } else if (_0x992f73 === 196) {
        const _0x356110 = this.lookU8();
        _0x4ed658 = this.decodeBinary(_0x356110, 1);
      } else if (_0x992f73 === 197) {
        const _0x12061a = this.lookU16();
        _0x4ed658 = this.decodeBinary(_0x12061a, 2);
      } else if (_0x992f73 === 198) {
        const _0x1c35f7 = this.lookU32();
        _0x4ed658 = this.decodeBinary(_0x1c35f7, 4);
      } else if (_0x992f73 === 212) {
        _0x4ed658 = this.decodeExtension(1, 0);
      } else if (_0x992f73 === 213) {
        _0x4ed658 = this.decodeExtension(2, 0);
      } else if (_0x992f73 === 214) {
        _0x4ed658 = this.decodeExtension(4, 0);
      } else if (_0x992f73 === 215) {
        _0x4ed658 = this.decodeExtension(8, 0);
      } else if (_0x992f73 === 216) {
        _0x4ed658 = this.decodeExtension(16, 0);
      } else if (_0x992f73 === 199) {
        const _0x2e72b3 = this.lookU8();
        _0x4ed658 = this.decodeExtension(_0x2e72b3, 1);
      } else if (_0x992f73 === 200) {
        const _0xbbd9e1 = this.lookU16();
        _0x4ed658 = this.decodeExtension(_0xbbd9e1, 2);
      } else {
        if (_0x992f73 !== 201) {
          throw new r("Unrecognized type byte: " + p(_0x992f73));
        }
        {
          const _0x410464 = this.lookU32();
          _0x4ed658 = this.decodeExtension(_0x410464, 4);
        }
      }
      this.complete();
      const _0x2bc6f2 = this.stack;
      while (_0x2bc6f2.length > 0) {
        const _0xa295f6 = _0x2bc6f2.top();
        if (_0xa295f6.type === u) {
          _0xa295f6.array[_0xa295f6.position] = _0x4ed658;
          _0xa295f6.position++;
          if (_0xa295f6.position !== _0xa295f6.size) {
            continue _0x178dc6;
          }
          _0x4ed658 = _0xa295f6.array;
          _0x2bc6f2.release(_0xa295f6);
        } else {
          if (_0xa295f6.type === f) {
            if (_0x4ed658 === "__proto__") {
              throw new r("The key __proto__ is not allowed");
            }
            _0xa295f6.key = this.mapKeyConverter(_0x4ed658);
            _0xa295f6.type = y;
            continue _0x178dc6;
          }
          _0xa295f6.map[_0xa295f6.key] = _0x4ed658;
          _0xa295f6.readCount++;
          if (_0xa295f6.readCount !== _0xa295f6.size) {
            _0xa295f6.key = null;
            _0xa295f6.type = f;
            continue _0x178dc6;
          }
          _0x4ed658 = _0xa295f6.map;
          _0x2bc6f2.release(_0xa295f6);
        }
      }
      return _0x4ed658;
    }
  }
  readHeadByte() {
    if (this.headByte === -1) {
      this.headByte = this.readU8();
    }
    return this.headByte;
  }
  complete() {
    this.headByte = -1;
  }
  readArraySize() {
    const _0xd59bac = this.readHeadByte();
    switch (_0xd59bac) {
      case 220:
        return this.readU16();
      case 221:
        return this.readU32();
      default:
        if (_0xd59bac < 160) {
          return _0xd59bac - 144;
        }
        throw new r("Unrecognized array type byte: " + p(_0xd59bac));
    }
  }
  pushMapState(_0x1f7250) {
    if (_0x1f7250 > this.maxMapLength) {
      throw new r("Max length exceeded: map length (" + _0x1f7250 + ") > maxMapLengthLength (" + this.maxMapLength + ")");
    }
    this.stack.pushMapState(_0x1f7250);
  }
  pushArrayState(_0x195f2d) {
    if (_0x195f2d > this.maxArrayLength) {
      throw new r("Max length exceeded: array length (" + _0x195f2d + ") > maxArrayLength (" + this.maxArrayLength + ")");
    }
    this.stack.pushArrayState(_0x195f2d);
  }
  decodeString(_0x3feaf9, _0x267259) {
    if (!this.rawStrings || this.stateIsMapKey()) {
      return this.decodeUtf8String(_0x3feaf9, _0x267259);
    } else {
      return this.decodeBinary(_0x3feaf9, _0x267259);
    }
  }
  decodeUtf8String(_0x555f86, _0x5735c0) {
    if (_0x555f86 > this.maxStrLength) {
      throw new r("Max length exceeded: UTF-8 byte length (" + _0x555f86 + ") > maxStrLength (" + this.maxStrLength + ")");
    }
    if (this.bytes.byteLength < this.pos + _0x5735c0 + _0x555f86) {
      throw S;
    }
    const _0x1a9d61 = this.pos + _0x5735c0;
    let _0x4f17f6;
    _0x4f17f6 = this.stateIsMapKey() && this.keyDecoder?.canBeCached(_0x555f86) ? this.keyDecoder.decode(this.bytes, _0x1a9d61, _0x555f86) : i(this.bytes, _0x1a9d61, _0x555f86);
    this.pos += _0x5735c0 + _0x555f86;
    return _0x4f17f6;
  }
  stateIsMapKey() {
    if (this.stack.length > 0) {
      return this.stack.top().type === f;
    }
    return false;
  }
  decodeBinary(_0xb3c262, _0x31a5fc) {
    if (_0xb3c262 > this.maxBinLength) {
      throw new r("Max length exceeded: bin length (" + _0xb3c262 + ") > maxBinLength (" + this.maxBinLength + ")");
    }
    if (!this.hasRemaining(_0xb3c262 + _0x31a5fc)) {
      throw S;
    }
    const _0x444b7a = this.pos + _0x31a5fc;
    const _0x471fc8 = this.bytes.subarray(_0x444b7a, _0x444b7a + _0xb3c262);
    this.pos += _0x31a5fc + _0xb3c262;
    return _0x471fc8;
  }
  decodeExtension(_0x51f138, _0x527141) {
    if (_0x51f138 > this.maxExtLength) {
      throw new r("Max length exceeded: ext length (" + _0x51f138 + ") > maxExtLength (" + this.maxExtLength + ")");
    }
    const _0x4bf840 = this.view.getInt8(this.pos + _0x527141);
    const _0x2cf08b = this.decodeBinary(_0x51f138, _0x527141 + 1);
    return this.extensionCodec.decode(_0x2cf08b, _0x4bf840, this.context);
  }
  lookU8() {
    return this.view.getUint8(this.pos);
  }
  lookU16() {
    return this.view.getUint16(this.pos);
  }
  lookU32() {
    return this.view.getUint32(this.pos);
  }
  readU8() {
    const _0x35a5fd = this.view.getUint8(this.pos);
    this.pos++;
    return _0x35a5fd;
  }
  readI8() {
    const _0x17cf4e = this.view.getInt8(this.pos);
    this.pos++;
    return _0x17cf4e;
  }
  readU16() {
    const _0x355cc0 = this.view.getUint16(this.pos);
    this.pos += 2;
    return _0x355cc0;
  }
  readI16() {
    const _0x46417 = this.view.getInt16(this.pos);
    this.pos += 2;
    return _0x46417;
  }
  readU32() {
    const _0x426942 = this.view.getUint32(this.pos);
    this.pos += 4;
    return _0x426942;
  }
  readI32() {
    const _0x246c66 = this.view.getInt32(this.pos);
    this.pos += 4;
    return _0x246c66;
  }
  readU64() {
    _0x217f32 = this.view;
    _0x1ea28d = this.pos;
    const _0x1c5fc1 = _0x217f32.getUint32(_0x1ea28d) * 4294967296 + _0x217f32.getUint32(_0x1ea28d + 4);
    var _0x217f32;
    var _0x1ea28d;
    this.pos += 8;
    return _0x1c5fc1;
  }
  readI64() {
    const _0x28b6dc = a(this.view, this.pos);
    this.pos += 8;
    return _0x28b6dc;
  }
  readU64AsBigInt() {
    const _0x4c4393 = this.view.getBigUint64(this.pos);
    this.pos += 8;
    return _0x4c4393;
  }
  readI64AsBigInt() {
    const _0x459e64 = this.view.getBigInt64(this.pos);
    this.pos += 8;
    return _0x459e64;
  }
  readF32() {
    const _0x936736 = this.view.getFloat32(this.pos);
    this.pos += 4;
    return _0x936736;
  }
  readF64() {
    const _0x389884 = this.view.getFloat64(this.pos);
    this.pos += 8;
    return _0x389884;
  }
}
class x {
  socket = null;
  stopped = false;
  timer = null;
  heartbeat = null;
  lastMessage = 0;
  attempt = 0;
  pending = new Map();
  generation = 0;
  snapshot = null;
  clockSamples = [];
  ready = false;
  readyValue;
  waiters = new Set();
  kind;
  credentials;
  event;
  constructor(_0x29698d, _0x4bfdce, _0xc13450) {
    this.kind = _0x29698d;
    this.credentials = _0x4bfdce;
    this.event = _0xc13450;
  }
  start() {
    if (!this.socket && !this.stopped) {
      this.connect();
    }
  }
  whenReady(_0x722ebf = 10000) {
    if (this.stopped) {
      return Promise.reject(Object.assign(new Error("Transport disposed"), {
        code: "DISPOSED"
      }));
    } else if (this.ready) {
      return Promise.resolve(this.readyValue);
    } else {
      return new Promise((_0x17a00e, _0x4bed56) => {
        const _0x3597d8 = {
          resolve: _0x17a00e,
          reject: _0x4bed56,
          timer: setTimeout(() => {
            this.waiters.delete(_0x3597d8);
            _0x4bed56(Object.assign(new Error("Room join timed out"), {
              code: "TIMEOUT"
            }));
          }, _0x722ebf)
        };
        this.waiters.add(_0x3597d8);
      });
    }
  }
  async connect() {
    const _0x5b0e42 = ++this.generation;
    this.event("status", "connecting");
    try {
      const {
        endpoint: _0x4b2fc3,
        ticket: _0x3477c1
      } = await this.credentials();
      if (this.stopped || _0x5b0e42 !== this.generation) {
        return;
      }
      const _0x400eff = new URL(_0x4b2fc3);
      if (_0x400eff.username || _0x400eff.password || _0x400eff.search || _0x400eff.hash || !["wss:", "ws:"].includes(_0x400eff.protocol)) {
        throw new Error("Invalid app transport");
      }
      const _0x5806b0 = new WebSocket(_0x400eff);
      _0x5806b0.binaryType = "arraybuffer";
      this.socket = _0x5806b0;
      let _0x13673d = false;
      this.timer = setTimeout(() => {
        this.timer = null;
        if (this.socket === _0x5806b0) {
          _0x5806b0.close(4000, "App join timed out");
        }
      }, 10000);
      _0x5806b0.onopen = () => {
        this.lastMessage = Date.now();
        _0x5806b0.send(JSON.stringify({
          v: 1,
          type: this.kind === "room" ? "join" : "subscribe",
          ticket: _0x3477c1,
          encoding: "msgpack"
        }));
      };
      _0x5806b0.onmessage = _0x5112a0 => {
        if (this.socket !== _0x5806b0) {
          return;
        }
        const _0x4688fc = typeof _0x5112a0.data == "string" ? null : (_0x337fb4 => {
          try {
            return Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get.call(_0x337fb4);
          } catch {
            return null;
          }
        })(_0x5112a0.data);
        if (typeof _0x5112a0.data != "string" && _0x4688fc === null) {
          return;
        }
        if (typeof _0x5112a0.data == "string" ? _0x5112a0.data.length > 65536 : _0x4688fc > 65536) {
          _0x5806b0.close(1009);
          return;
        }
        let _0x3fa9f0;
        try {
          _0x3fa9f0 = typeof _0x5112a0.data == "string" ? JSON.parse(_0x5112a0.data) : (_0x4846fd = new Uint8Array(_0x5112a0.data), new v({
            maxArrayLength: 4096,
            maxMapLength: 4096,
            maxStrLength: 65536,
            maxBinLength: 65536
          }).decode(_0x4846fd));
        } catch {
          _0x5806b0.close(4003, "Invalid app protocol");
          return;
        }
        var _0x4846fd;
        if (!_0x3fa9f0 || typeof _0x3fa9f0 != "object" || Array.isArray(_0x3fa9f0) || _0x3fa9f0.v !== 1 || typeof _0x3fa9f0.type != "string") {
          this.event("status", "disconnected");
          this.dispose(Object.assign(new Error("Invalid app protocol"), {
            code: "BAD_REQUEST"
          }));
          return;
        }
        if (_0x3fa9f0.type === "snapshot") {
          const _0x4d8ade = _0x3fa9f0.data;
          if (!_0x4d8ade || typeof _0x4d8ade.roomId != "string" || !Number.isSafeInteger(_0x4d8ade.version) || !Number.isFinite(_0x4d8ade.serverTime) || !Object.hasOwn(_0x4d8ade, "publicState") || !Object.hasOwn(_0x4d8ade, "privateState") || _0x4d8ade.participants !== undefined && !_0x503759(_0x4d8ade.participants)) {
            this.event("status", "disconnected");
            this.dispose(Object.assign(new Error("Invalid app snapshot"), {
              code: "BAD_REQUEST"
            }));
            return;
          }
        }
        if (_0x3fa9f0.type === "error" && !_0x3fa9f0.requestId && ["UNAUTHENTICATED", "PERMISSION_DENIED", "NOT_FOUND", "VERSION_CONFLICT", "ROOM_EXPIRED", "ROOM_FULL"].includes(_0x3fa9f0.code || "")) {
          const _0xa04383 = Object.assign(new Error(_0x3fa9f0.code), {
            code: _0x3fa9f0.code
          });
          this.event("status", "disconnected");
          this.dispose(_0xa04383);
          return;
        }
        this.lastMessage = Date.now();
        if (_0x3fa9f0.type === "snapshot" || _0x3fa9f0.type === "subscribed") {
          this.ready = true;
          this.readyValue = _0x3fa9f0.data;
          for (const _0x589044 of this.waiters) {
            clearTimeout(_0x589044.timer);
            _0x589044.resolve(_0x3fa9f0.data);
          }
          this.waiters.clear();
          if (!_0x13673d) {
            _0x13673d = true;
            if (this.timer) {
              clearTimeout(this.timer);
            }
            this.timer = null;
            _0x5806b0.send(JSON.stringify({
              v: 1,
              type: "heartbeat",
              clientSentAt: Date.now()
            }));
          }
          this.attempt = 0;
          this.event("status", "connected");
          this.heartbeat ||= setInterval(() => {
            if (Date.now() - this.lastMessage > 30000) {
              this.restart();
            } else if (_0x5806b0.readyState === WebSocket.OPEN) {
              _0x5806b0.send(JSON.stringify({
                v: 1,
                type: "heartbeat",
                clientSentAt: Date.now()
              }));
            }
          }, 10000);
          this.timer ||= setTimeout(() => {
            this.timer = null;
            this.renew(_0x5806b0);
          }, 30000);
        }
        const _0x16468e = _0x3fa9f0.data;
        if (_0x3fa9f0.type === "snapshot") {
          this.snapshot = _0x3fa9f0.data;
        }
        if (_0x3fa9f0.type === "delta") {
          const _0x9cd2e2 = _0x3fa9f0.data;
          if (!_0x9cd2e2 || typeof _0x9cd2e2.roomId != "string" || typeof _0x9cd2e2.epoch != "string" || !Number.isSafeInteger(_0x9cd2e2.version) || _0x9cd2e2.version < 0 || !Number.isSafeInteger(_0x9cd2e2.sequence) || !Number.isSafeInteger(_0x9cd2e2.baseSequence) || _0x9cd2e2.baseSequence < 0 || _0x9cd2e2.sequence <= _0x9cd2e2.baseSequence || !Number.isFinite(_0x9cd2e2.serverTime) || !_0x9cd2e2.publicChanges || typeof _0x9cd2e2.publicChanges != "object" || Array.isArray(_0x9cd2e2.publicChanges) || !Array.isArray(_0x9cd2e2.removedPublicKeys) || _0x9cd2e2.removedPublicKeys.some(_0x47f422 => typeof _0x47f422 != "string") || _0x9cd2e2.participants !== undefined && !_0x503759(_0x9cd2e2.participants)) {
            this.event("status", "disconnected");
            this.dispose(Object.assign(new Error("Invalid app delta"), {
              code: "BAD_REQUEST"
            }));
            return;
          }
          if (!this.snapshot || _0x9cd2e2.roomId !== this.snapshot.roomId || _0x9cd2e2.epoch !== this.snapshot.epoch || _0x9cd2e2.baseSequence !== this.snapshot.sequence) {
            _0x5806b0.send(JSON.stringify({
              v: 1,
              type: "resync"
            }));
            return;
          }
          const _0xb83b25 = {
            ...this.snapshot.publicState,
            ..._0x9cd2e2.publicChanges
          };
          for (const _0x10ab16 of _0x9cd2e2.removedPublicKeys || []) {
            delete _0xb83b25[_0x10ab16];
          }
          this.snapshot = {
            ...this.snapshot,
            roomId: _0x9cd2e2.roomId,
            version: _0x9cd2e2.version,
            sequence: _0x9cd2e2.sequence,
            serverTime: _0x9cd2e2.serverTime,
            publicState: _0xb83b25,
            ...(Object.hasOwn(_0x9cd2e2, "privateState") ? {
              privateState: _0x9cd2e2.privateState
            } : {}),
            ...(_0x9cd2e2.participants ? {
              participants: _0x9cd2e2.participants
            } : {})
          };
          this.event("snapshot", this.snapshot);
          return;
        }
        if (_0x3fa9f0.type === "heartbeat_ack") {
          const _0x3c7121 = _0x3fa9f0.data;
          if (_0x3c7121 && Number.isFinite(_0x3c7121.clientSentAt) && Number.isFinite(_0x3c7121.serverTime)) {
            const _0x4f31fa = Date.now() - _0x3c7121.clientSentAt;
            if (_0x4f31fa >= 0 && _0x4f31fa <= 30000) {
              this.clockSamples.push({
                rtt: _0x4f31fa,
                offset: _0x3c7121.serverTime - (Date.now() + _0x3c7121.clientSentAt) / 2
              });
              this.clockSamples = this.clockSamples.slice(-10);
              const _0x2c17e2 = this.clockSamples.reduce((_0x5ae6ae, _0x670e4) => _0x5ae6ae.rtt <= _0x670e4.rtt ? _0x5ae6ae : _0x670e4);
              this.event("clock", {
                offsetMs: _0x2c17e2.offset,
                roundTripMs: _0x2c17e2.rtt
              });
            }
          }
        }
        const _0x38b7a7 = _0x3fa9f0.requestId || _0x16468e?.requestId;
        const _0x20d231 = _0x38b7a7 ? this.pending.get(_0x38b7a7) : undefined;
        if (_0x20d231 && _0x38b7a7 && (_0x3fa9f0.type === "error" || _0x3fa9f0.type === "command_result")) {
          this.pending.delete(_0x38b7a7);
          clearTimeout(_0x20d231.timer);
          if (_0x3fa9f0.type === "error") {
            _0x20d231.reject(Object.assign(new Error(_0x3fa9f0.code), {
              code: _0x3fa9f0.code
            }));
          } else if (_0x3fa9f0.type === "command_result") {
            _0x20d231.resolve(_0x3fa9f0.data);
          }
        }
        if (_0x3fa9f0.type && !["heartbeat_ack", "command_result"].includes(_0x3fa9f0.type)) {
          this.event(_0x3fa9f0.type, _0x3fa9f0.data);
        }
      };
      _0x5806b0.onclose = () => {
        if (this.socket === _0x5806b0) {
          this.clearSocket();
          this.event("status", "disconnected");
          if (!this.stopped) {
            this.timer = setTimeout(() => {
              this.timer = null;
              this.connect();
            }, Math.min(15000, 2 ** Math.min(this.attempt++, 5) * 500) + Math.random() * 250);
          }
        }
      };
      _0x5806b0.onerror = () => {};
    } catch (_0x281ff3) {
      if (this.stopped || _0x5b0e42 !== this.generation) {
        return;
      }
      this.event("status", "disconnected");
      if (["PERMISSION_DENIED", "UNAUTHENTICATED", "NOT_FOUND", "ROOM_EXPIRED", "VERSION_CONFLICT"].includes(_0x281ff3.code || "")) {
        this.dispose(_0x281ff3);
        return;
      }
      this.timer = setTimeout(() => {
        this.timer = null;
        this.connect();
      }, Math.min(15000, 2 ** Math.min(this.attempt++, 5) * 500));
    }
  }
  async renew(_0x278501) {
    try {
      const _0x35cd51 = await this.credentials();
      if (this.socket !== _0x278501 || this.stopped) {
        return;
      }
      if (_0x278501.readyState !== WebSocket.OPEN) {
        return;
      }
      _0x278501.send(JSON.stringify({
        v: 1,
        type: "renew",
        ticket: _0x35cd51.ticket
      }));
      this.timer = setTimeout(() => {
        this.timer = null;
        this.renew(_0x278501);
      }, 30000);
    } catch {
      if (this.socket === _0x278501) {
        this.restart();
      }
    }
  }
  resume() {
    if (!this.stopped && this.socket && Date.now() - this.lastMessage > 20000) {
      this.restart();
    }
  }
  restart() {
    const _0x11f6b = this.socket;
    this.clearSocket();
    _0x11f6b?.close();
    if (!this.stopped) {
      this.connect();
    }
  }
  command(_0x207dd9) {
    const _0xc26bbc = _0x207dd9.requestId;
    if (typeof _0xc26bbc != "string" || !_0xc26bbc || _0xc26bbc.length > 128) {
      return Promise.reject(Object.assign(new Error("BAD_REQUEST"), {
        code: "BAD_REQUEST"
      }));
    }
    if (this.pending.has(_0xc26bbc) || this.pending.size >= 32) {
      return Promise.reject(Object.assign(new Error("RATE_LIMITED"), {
        code: "RATE_LIMITED"
      }));
    }
    const _0x1293dd = JSON.stringify({
      ..._0x207dd9,
      v: 1,
      type: "command"
    });
    if (new TextEncoder().encode(_0x1293dd).length > 65536) {
      return Promise.reject(Object.assign(new Error("BAD_REQUEST"), {
        code: "BAD_REQUEST"
      }));
    } else if (!this.ready || this.socket?.readyState !== WebSocket.OPEN || this.socket.bufferedAmount > 262144) {
      return Promise.reject(Object.assign(new Error("SERVICE_UNAVAILABLE"), {
        code: "SERVICE_UNAVAILABLE"
      }));
    } else {
      return new Promise((_0x22ad18, _0x49ce64) => {
        const _0x50a809 = setTimeout(() => {
          this.pending.delete(_0xc26bbc);
          _0x49ce64(Object.assign(new Error("TIMEOUT"), {
            code: "TIMEOUT"
          }));
        }, 10000);
        this.pending.set(_0xc26bbc, {
          resolve: _0x22ad18,
          reject: _0x49ce64,
          timer: _0x50a809
        });
        this.socket.send(_0x1293dd);
      });
    }
  }
  clearSocket(_0x452d92 = Object.assign(new Error("Transport disconnected"), {
    code: "SERVICE_UNAVAILABLE"
  })) {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (this.heartbeat) {
      clearInterval(this.heartbeat);
    }
    this.timer = null;
    this.heartbeat = null;
    this.socket = null;
    this.snapshot = null;
    this.clockSamples = [];
    this.ready = false;
    this.readyValue = undefined;
    for (const _0x2eb37b of this.pending.values()) {
      clearTimeout(_0x2eb37b.timer);
      _0x2eb37b.reject(_0x452d92);
    }
    this.pending.clear();
  }
  dispose(_0x269130 = Object.assign(new Error("Transport disposed"), {
    code: "DISPOSED"
  })) {
    if (this.stopped) {
      return;
    }
    this.stopped = true;
    ++this.generation;
    const _0x193400 = this.socket;
    this.clearSocket(_0x269130);
    for (const _0x31b3c1 of this.waiters) {
      clearTimeout(_0x31b3c1.timer);
      _0x31b3c1.reject(_0x269130);
    }
    this.waiters.clear();
    _0x193400?.close(1000, "App disposed");
  }
}
export { x as A };