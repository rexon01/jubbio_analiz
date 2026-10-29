(function () {
  "use strict";

  const e = {
    DISPATCH: 0,
    HEARTBEAT: 1,
    IDENTIFY: 2,
    VOICE_STATE_UPDATE: 4,
    RESUME: 6,
    RECONNECT: 7,
    REQUEST_GUILD_MEMBERS: 8,
    INVALID_SESSION: 9,
    HELLO: 10,
    HEARTBEAT_ACK: 11
  };
  Object.fromEntries(Object.entries(e).map(([e, t]) => [t, e]));
  const t = new TextEncoder();
  function i(e, i, s) {
    if (e.length > 50) {
      (function (e, i, s) {
        t.encodeInto(e, i.subarray(s));
      })(e, i, s);
    } else {
      (function (e, t, i) {
        const s = e.length;
        let n = i;
        let r = 0;
        while (r < s) {
          let i = e.charCodeAt(r++);
          if (i & -128) {
            if (i & -2048) {
              if (i >= 55296 && i <= 56319 && r < s) {
                const t = e.charCodeAt(r);
                if ((t & 64512) == 56320) {
                  ++r;
                  i = ((i & 1023) << 10) + (t & 1023) + 65536;
                }
              }
              if (i & -65536) {
                t[n++] = i >> 18 & 7 | 240;
                t[n++] = i >> 12 & 63 | 128;
                t[n++] = i >> 6 & 63 | 128;
              } else {
                t[n++] = i >> 12 & 15 | 224;
                t[n++] = i >> 6 & 63 | 128;
              }
            } else {
              t[n++] = i >> 6 & 31 | 192;
            }
            t[n++] = i & 63 | 128;
          } else {
            t[n++] = i;
          }
        }
      })(e, i, s);
    }
  }
  function s(e, t, i) {
    let s = t;
    const n = s + i;
    const r = [];
    let o = "";
    while (s < n) {
      const t = e[s++];
      if (t & 128) {
        if ((t & 224) == 192) {
          const i = e[s++] & 63;
          r.push((t & 31) << 6 | i);
        } else if ((t & 240) == 224) {
          const i = e[s++] & 63;
          const n = e[s++] & 63;
          r.push((t & 31) << 12 | i << 6 | n);
        } else if ((t & 248) == 240) {
          let i = (t & 7) << 18 | (e[s++] & 63) << 12 | (e[s++] & 63) << 6 | e[s++] & 63;
          if (i > 65535) {
            i -= 65536;
            r.push(i >>> 10 & 1023 | 55296);
            i = i & 1023 | 56320;
          }
          r.push(i);
        } else {
          r.push(t);
        }
      } else {
        r.push(t);
      }
      if (r.length >= 4096) {
        o += String.fromCharCode(...r);
        r.length = 0;
      }
    }
    if (r.length > 0) {
      o += String.fromCharCode(...r);
    }
    return o;
  }
  const n = new TextDecoder();
  function r(e, t, i) {
    if (i > 200) {
      return function (e, t, i) {
        const s = e.subarray(t, t + i);
        return n.decode(s);
      }(e, t, i);
    } else {
      return s(e, t, i);
    }
  }
  class o {
    type;
    data;
    constructor(e, t) {
      this.type = e;
      this.data = t;
    }
  }
  class a extends Error {
    constructor(e) {
      super(e);
      const t = Object.create(a.prototype);
      Object.setPrototypeOf(this, t);
      Object.defineProperty(this, "name", {
        configurable: true,
        enumerable: false,
        value: a.name
      });
    }
  }
  const h = 4294967295;
  function c(e, t, i) {
    const s = Math.floor(i / 4294967296);
    const n = i;
    e.setUint32(t, s);
    e.setUint32(t + 4, n);
  }
  function d(e, t) {
    return e.getInt32(t) * 4294967296 + e.getUint32(t + 4);
  }
  const l = {
    type: -1,
    encode: function (e) {
      if (e instanceof Date) {
        return function ({
          sec: e,
          nsec: t
        }) {
          if (e >= 0 && t >= 0 && e <= 17179869183) {
            if (t === 0 && e <= 4294967295) {
              const t = new Uint8Array(4);
              new DataView(t.buffer).setUint32(0, e);
              return t;
            }
            {
              const i = e / 4294967296;
              const s = e & -1;
              const n = new Uint8Array(8);
              const r = new DataView(n.buffer);
              r.setUint32(0, t << 2 | i & 3);
              r.setUint32(4, s);
              return n;
            }
          }
          {
            const i = new Uint8Array(12);
            const s = new DataView(i.buffer);
            s.setUint32(0, t);
            c(s, 4, e);
            return i;
          }
        }(function (e) {
          const t = e.getTime();
          const i = Math.floor(t / 1000);
          const s = (t - i * 1000) * 1000000;
          const n = Math.floor(s / 1000000000);
          return {
            sec: i + n,
            nsec: s - n * 1000000000
          };
        }(e));
      }
      return null;
    },
    decode: function (e) {
      const t = function (e) {
        const t = new DataView(e.buffer, e.byteOffset, e.byteLength);
        switch (e.byteLength) {
          case 4:
            return {
              sec: t.getUint32(0),
              nsec: 0
            };
          case 8:
            {
              const e = t.getUint32(0);
              return {
                sec: (e & 3) * 4294967296 + t.getUint32(4),
                nsec: e >>> 2
              };
            }
          case 12:
            return {
              sec: d(t, 4),
              nsec: t.getUint32(0)
            };
          default:
            throw new a(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${e.length}`);
        }
      }(e);
      return new Date(t.sec * 1000 + t.nsec / 1000000);
    }
  };
  class u {
    static defaultCodec = new u();
    __brand;
    builtInEncoders = [];
    builtInDecoders = [];
    encoders = [];
    decoders = [];
    constructor() {
      this.register(l);
    }
    register({
      type: e,
      encode: t,
      decode: i
    }) {
      if (e >= 0) {
        this.encoders[e] = t;
        this.decoders[e] = i;
      } else {
        const s = -1 - e;
        this.builtInEncoders[s] = t;
        this.builtInDecoders[s] = i;
      }
    }
    tryToEncode(e, t) {
      for (let i = 0; i < this.builtInEncoders.length; i++) {
        const s = this.builtInEncoders[i];
        if (s != null) {
          const n = s(e, t);
          if (n != null) {
            return new o(-1 - i, n);
          }
        }
      }
      for (let i = 0; i < this.encoders.length; i++) {
        const s = this.encoders[i];
        if (s != null) {
          const n = s(e, t);
          if (n != null) {
            return new o(i, n);
          }
        }
      }
      if (e instanceof o) {
        return e;
      } else {
        return null;
      }
    }
    decode(e, t, i) {
      const s = t < 0 ? this.builtInDecoders[-1 - t] : this.decoders[t];
      if (s) {
        return s(e, t, i);
      } else {
        return new o(t, e);
      }
    }
  }
  function f(e) {
    if (e instanceof Uint8Array) {
      return e;
    } else if (ArrayBuffer.isView(e)) {
      return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
    } else if (function (e) {
      return e instanceof ArrayBuffer || typeof SharedArrayBuffer != "undefined" && e instanceof SharedArrayBuffer;
    }(e)) {
      return new Uint8Array(e);
    } else {
      return Uint8Array.from(e);
    }
  }
  class p {
    extensionCodec;
    context;
    useBigInt64;
    maxDepth;
    initialBufferSize;
    sortKeys;
    forceFloat32;
    ignoreUndefined;
    forceIntegerToFloat;
    pos;
    view;
    bytes;
    entered = false;
    constructor(e) {
      this.extensionCodec = e?.extensionCodec ?? u.defaultCodec;
      this.context = e?.context;
      this.useBigInt64 = e?.useBigInt64 ?? false;
      this.maxDepth = e?.maxDepth ?? 100;
      this.initialBufferSize = e?.initialBufferSize ?? 2048;
      this.sortKeys = e?.sortKeys ?? false;
      this.forceFloat32 = e?.forceFloat32 ?? false;
      this.ignoreUndefined = e?.ignoreUndefined ?? false;
      this.forceIntegerToFloat = e?.forceIntegerToFloat ?? false;
      this.pos = 0;
      this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
      this.bytes = new Uint8Array(this.view.buffer);
    }
    clone() {
      return new p({
        extensionCodec: this.extensionCodec,
        context: this.context,
        useBigInt64: this.useBigInt64,
        maxDepth: this.maxDepth,
        initialBufferSize: this.initialBufferSize,
        sortKeys: this.sortKeys,
        forceFloat32: this.forceFloat32,
        ignoreUndefined: this.ignoreUndefined,
        forceIntegerToFloat: this.forceIntegerToFloat
      });
    }
    reinitializeState() {
      this.pos = 0;
    }
    encodeSharedRef(e) {
      if (this.entered) {
        return this.clone().encodeSharedRef(e);
      }
      try {
        this.entered = true;
        this.reinitializeState();
        this.doEncode(e, 1);
        return this.bytes.subarray(0, this.pos);
      } finally {
        this.entered = false;
      }
    }
    encode(e) {
      if (this.entered) {
        return this.clone().encode(e);
      }
      try {
        this.entered = true;
        this.reinitializeState();
        this.doEncode(e, 1);
        return this.bytes.slice(0, this.pos);
      } finally {
        this.entered = false;
      }
    }
    doEncode(e, t) {
      if (t > this.maxDepth) {
        throw new Error(`Too deep objects in depth ${t}`);
      }
      if (e == null) {
        this.encodeNil();
      } else if (typeof e == "boolean") {
        this.encodeBoolean(e);
      } else if (typeof e == "number") {
        if (this.forceIntegerToFloat) {
          this.encodeNumberAsFloat(e);
        } else {
          this.encodeNumber(e);
        }
      } else if (typeof e == "string") {
        this.encodeString(e);
      } else if (this.useBigInt64 && typeof e == "bigint") {
        this.encodeBigInt64(e);
      } else {
        this.encodeObject(e, t);
      }
    }
    ensureBufferSizeToWrite(e) {
      const t = this.pos + e;
      if (this.view.byteLength < t) {
        this.resizeBuffer(t * 2);
      }
    }
    resizeBuffer(e) {
      const t = new ArrayBuffer(e);
      const i = new Uint8Array(t);
      const s = new DataView(t);
      i.set(this.bytes);
      this.view = s;
      this.bytes = i;
    }
    encodeNil() {
      this.writeU8(192);
    }
    encodeBoolean(e) {
      if (e === false) {
        this.writeU8(194);
      } else {
        this.writeU8(195);
      }
    }
    encodeNumber(e) {
      if (!this.forceIntegerToFloat && Number.isSafeInteger(e)) {
        if (e >= 0) {
          if (e < 128) {
            this.writeU8(e);
          } else if (e < 256) {
            this.writeU8(204);
            this.writeU8(e);
          } else if (e < 65536) {
            this.writeU8(205);
            this.writeU16(e);
          } else if (e < 4294967296) {
            this.writeU8(206);
            this.writeU32(e);
          } else if (this.useBigInt64) {
            this.encodeNumberAsFloat(e);
          } else {
            this.writeU8(207);
            this.writeU64(e);
          }
        } else if (e >= -32) {
          this.writeU8(e + 32 | 224);
        } else if (e >= -128) {
          this.writeU8(208);
          this.writeI8(e);
        } else if (e >= -32768) {
          this.writeU8(209);
          this.writeI16(e);
        } else if (e >= -2147483648) {
          this.writeU8(210);
          this.writeI32(e);
        } else if (this.useBigInt64) {
          this.encodeNumberAsFloat(e);
        } else {
          this.writeU8(211);
          this.writeI64(e);
        }
      } else {
        this.encodeNumberAsFloat(e);
      }
    }
    encodeNumberAsFloat(e) {
      if (this.forceFloat32) {
        this.writeU8(202);
        this.writeF32(e);
      } else {
        this.writeU8(203);
        this.writeF64(e);
      }
    }
    encodeBigInt64(e) {
      if (e >= BigInt(0)) {
        this.writeU8(207);
        this.writeBigUint64(e);
      } else {
        this.writeU8(211);
        this.writeBigInt64(e);
      }
    }
    writeStringHeader(e) {
      if (e < 32) {
        this.writeU8(160 + e);
      } else if (e < 256) {
        this.writeU8(217);
        this.writeU8(e);
      } else if (e < 65536) {
        this.writeU8(218);
        this.writeU16(e);
      } else {
        if (!(e < 4294967296)) {
          throw new Error(`Too long string: ${e} bytes in UTF-8`);
        }
        this.writeU8(219);
        this.writeU32(e);
      }
    }
    encodeString(e) {
      const t = function (e) {
        const t = e.length;
        let i = 0;
        let s = 0;
        while (s < t) {
          let n = e.charCodeAt(s++);
          if (n & -128) {
            if (n & -2048) {
              if (n >= 55296 && n <= 56319 && s < t) {
                const t = e.charCodeAt(s);
                if ((t & 64512) == 56320) {
                  ++s;
                  n = ((n & 1023) << 10) + (t & 1023) + 65536;
                }
              }
              i += n & -65536 ? 4 : 3;
            } else {
              i += 2;
            }
          } else {
            i++;
          }
        }
        return i;
      }(e);
      this.ensureBufferSizeToWrite(5 + t);
      this.writeStringHeader(t);
      i(e, this.bytes, this.pos);
      this.pos += t;
    }
    encodeObject(e, t) {
      const i = this.extensionCodec.tryToEncode(e, this.context);
      if (i != null) {
        this.encodeExtension(i);
      } else if (Array.isArray(e)) {
        this.encodeArray(e, t);
      } else if (ArrayBuffer.isView(e)) {
        this.encodeBinary(e);
      } else {
        if (typeof e != "object") {
          throw new Error(`Unrecognized object: ${Object.prototype.toString.apply(e)}`);
        }
        this.encodeMap(e, t);
      }
    }
    encodeBinary(e) {
      const t = e.byteLength;
      if (t < 256) {
        this.writeU8(196);
        this.writeU8(t);
      } else if (t < 65536) {
        this.writeU8(197);
        this.writeU16(t);
      } else {
        if (!(t < 4294967296)) {
          throw new Error(`Too large binary: ${t}`);
        }
        this.writeU8(198);
        this.writeU32(t);
      }
      const i = f(e);
      this.writeU8a(i);
    }
    encodeArray(e, t) {
      const i = e.length;
      if (i < 16) {
        this.writeU8(144 + i);
      } else if (i < 65536) {
        this.writeU8(220);
        this.writeU16(i);
      } else {
        if (!(i < 4294967296)) {
          throw new Error(`Too large array: ${i}`);
        }
        this.writeU8(221);
        this.writeU32(i);
      }
      for (const s of e) {
        this.doEncode(s, t + 1);
      }
    }
    countWithoutUndefined(e, t) {
      let i = 0;
      for (const s of t) {
        if (e[s] !== undefined) {
          i++;
        }
      }
      return i;
    }
    encodeMap(e, t) {
      const i = Object.keys(e);
      if (this.sortKeys) {
        i.sort();
      }
      const s = this.ignoreUndefined ? this.countWithoutUndefined(e, i) : i.length;
      if (s < 16) {
        this.writeU8(128 + s);
      } else if (s < 65536) {
        this.writeU8(222);
        this.writeU16(s);
      } else {
        if (!(s < 4294967296)) {
          throw new Error(`Too large map object: ${s}`);
        }
        this.writeU8(223);
        this.writeU32(s);
      }
      for (const n of i) {
        const i = e[n];
        if (!this.ignoreUndefined || i !== undefined) {
          this.encodeString(n);
          this.doEncode(i, t + 1);
        }
      }
    }
    encodeExtension(e) {
      if (typeof e.data == "function") {
        const t = e.data(this.pos + 6);
        const i = t.length;
        if (i >= 4294967296) {
          throw new Error(`Too large extension object: ${i}`);
        }
        this.writeU8(201);
        this.writeU32(i);
        this.writeI8(e.type);
        this.writeU8a(t);
        return;
      }
      const t = e.data.length;
      if (t === 1) {
        this.writeU8(212);
      } else if (t === 2) {
        this.writeU8(213);
      } else if (t === 4) {
        this.writeU8(214);
      } else if (t === 8) {
        this.writeU8(215);
      } else if (t === 16) {
        this.writeU8(216);
      } else if (t < 256) {
        this.writeU8(199);
        this.writeU8(t);
      } else if (t < 65536) {
        this.writeU8(200);
        this.writeU16(t);
      } else {
        if (!(t < 4294967296)) {
          throw new Error(`Too large extension object: ${t}`);
        }
        this.writeU8(201);
        this.writeU32(t);
      }
      this.writeI8(e.type);
      this.writeU8a(e.data);
    }
    writeU8(e) {
      this.ensureBufferSizeToWrite(1);
      this.view.setUint8(this.pos, e);
      this.pos++;
    }
    writeU8a(e) {
      const t = e.length;
      this.ensureBufferSizeToWrite(t);
      this.bytes.set(e, this.pos);
      this.pos += t;
    }
    writeI8(e) {
      this.ensureBufferSizeToWrite(1);
      this.view.setInt8(this.pos, e);
      this.pos++;
    }
    writeU16(e) {
      this.ensureBufferSizeToWrite(2);
      this.view.setUint16(this.pos, e);
      this.pos += 2;
    }
    writeI16(e) {
      this.ensureBufferSizeToWrite(2);
      this.view.setInt16(this.pos, e);
      this.pos += 2;
    }
    writeU32(e) {
      this.ensureBufferSizeToWrite(4);
      this.view.setUint32(this.pos, e);
      this.pos += 4;
    }
    writeI32(e) {
      this.ensureBufferSizeToWrite(4);
      this.view.setInt32(this.pos, e);
      this.pos += 4;
    }
    writeF32(e) {
      this.ensureBufferSizeToWrite(4);
      this.view.setFloat32(this.pos, e);
      this.pos += 4;
    }
    writeF64(e) {
      this.ensureBufferSizeToWrite(8);
      this.view.setFloat64(this.pos, e);
      this.pos += 8;
    }
    writeU64(e) {
      this.ensureBufferSizeToWrite(8);
      (function (e, t, i) {
        const s = i / 4294967296;
        const n = i;
        e.setUint32(t, s);
        e.setUint32(t + 4, n);
      })(this.view, this.pos, e);
      this.pos += 8;
    }
    writeI64(e) {
      this.ensureBufferSizeToWrite(8);
      c(this.view, this.pos, e);
      this.pos += 8;
    }
    writeBigUint64(e) {
      this.ensureBufferSizeToWrite(8);
      this.view.setBigUint64(this.pos, e);
      this.pos += 8;
    }
    writeBigInt64(e) {
      this.ensureBufferSizeToWrite(8);
      this.view.setBigInt64(this.pos, e);
      this.pos += 8;
    }
  }
  function y(e) {
    return `${e < 0 ? "-" : ""}0x${Math.abs(e).toString(16).padStart(2, "0")}`;
  }
  const g = "array";
  const w = "map_key";
  const m = "map_value";
  const U = e => {
    if (typeof e == "string" || typeof e == "number") {
      return e;
    }
    throw new a("The type of key must be string or number but " + typeof e);
  };
  class E {
    stack = [];
    stackHeadPosition = -1;
    get length() {
      return this.stackHeadPosition + 1;
    }
    top() {
      return this.stack[this.stackHeadPosition];
    }
    pushArrayState(e) {
      const t = this.getUninitializedStateFromPool();
      t.type = g;
      t.position = 0;
      t.size = e;
      t.array = new Array(e);
    }
    pushMapState(e) {
      const t = this.getUninitializedStateFromPool();
      t.type = w;
      t.readCount = 0;
      t.size = e;
      t.map = {};
    }
    getUninitializedStateFromPool() {
      this.stackHeadPosition++;
      if (this.stackHeadPosition === this.stack.length) {
        const e = {
          type: undefined,
          size: 0,
          array: undefined,
          position: 0,
          readCount: 0,
          map: undefined,
          key: null
        };
        this.stack.push(e);
      }
      return this.stack[this.stackHeadPosition];
    }
    release(e) {
      if (this.stack[this.stackHeadPosition] !== e) {
        throw new Error("Invalid stack state. Released state is not on top of the stack.");
      }
      if (e.type === g) {
        const t = e;
        t.size = 0;
        t.array = undefined;
        t.position = 0;
        t.type = undefined;
      }
      if (e.type === w || e.type === m) {
        const t = e;
        t.size = 0;
        t.map = undefined;
        t.readCount = 0;
        t.type = undefined;
      }
      this.stackHeadPosition--;
    }
    reset() {
      this.stack.length = 0;
      this.stackHeadPosition = -1;
    }
  }
  const S = new DataView(new ArrayBuffer(0));
  const b = new Uint8Array(S.buffer);
  try {
    S.getInt8(0);
  } catch (Ee) {
    if (!(Ee instanceof RangeError)) {
      throw new Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access");
    }
  }
  const I = new RangeError("Insufficient data");
  const T = new class {
    hit = 0;
    miss = 0;
    caches;
    maxKeyLength;
    maxLengthPerKey;
    constructor(e = 16, t = 16) {
      this.maxKeyLength = e;
      this.maxLengthPerKey = t;
      this.caches = [];
      for (let i = 0; i < this.maxKeyLength; i++) {
        this.caches.push([]);
      }
    }
    canBeCached(e) {
      return e > 0 && e <= this.maxKeyLength;
    }
    find(e, t, i) {
      const s = this.caches[i - 1];
      e: for (const n of s) {
        const s = n.bytes;
        for (let n = 0; n < i; n++) {
          if (s[n] !== e[t + n]) {
            continue e;
          }
        }
        return n.str;
      }
      return null;
    }
    store(e, t) {
      const i = this.caches[e.length - 1];
      const s = {
        bytes: e,
        str: t
      };
      if (i.length >= this.maxLengthPerKey) {
        i[Math.random() * i.length | 0] = s;
      } else {
        i.push(s);
      }
    }
    decode(e, t, i) {
      const n = this.find(e, t, i);
      if (n != null) {
        this.hit++;
        return n;
      }
      this.miss++;
      const r = s(e, t, i);
      const o = Uint8Array.prototype.slice.call(e, t, t + i);
      this.store(o, r);
      return r;
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
    view = S;
    bytes = b;
    headByte = -1;
    stack = new E();
    entered = false;
    constructor(e) {
      this.extensionCodec = e?.extensionCodec ?? u.defaultCodec;
      this.context = e?.context;
      this.useBigInt64 = e?.useBigInt64 ?? false;
      this.rawStrings = e?.rawStrings ?? false;
      this.maxStrLength = e?.maxStrLength ?? h;
      this.maxBinLength = e?.maxBinLength ?? h;
      this.maxArrayLength = e?.maxArrayLength ?? h;
      this.maxMapLength = e?.maxMapLength ?? h;
      this.maxExtLength = e?.maxExtLength ?? h;
      this.keyDecoder = e?.keyDecoder !== undefined ? e.keyDecoder : T;
      this.mapKeyConverter = e?.mapKeyConverter ?? U;
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
    setBuffer(e) {
      const t = f(e);
      this.bytes = t;
      this.view = new DataView(t.buffer, t.byteOffset, t.byteLength);
      this.pos = 0;
    }
    appendBuffer(e) {
      if (this.headByte !== -1 || this.hasRemaining(1)) {
        const t = this.bytes.subarray(this.pos);
        const i = f(e);
        const s = new Uint8Array(t.length + i.length);
        s.set(t);
        s.set(i, t.length);
        this.setBuffer(s);
      } else {
        this.setBuffer(e);
      }
    }
    hasRemaining(e) {
      return this.view.byteLength - this.pos >= e;
    }
    createExtraByteError(e) {
      const {
        view: t,
        pos: i
      } = this;
      return new RangeError(`Extra ${t.byteLength - i} of ${t.byteLength} byte(s) found at buffer[${e}]`);
    }
    decode(e) {
      if (this.entered) {
        return this.clone().decode(e);
      }
      try {
        this.entered = true;
        this.reinitializeState();
        this.setBuffer(e);
        const t = this.doDecodeSync();
        if (this.hasRemaining(1)) {
          throw this.createExtraByteError(this.pos);
        }
        return t;
      } finally {
        this.entered = false;
      }
    }
    *decodeMulti(e) {
      if (this.entered) {
        const t = this.clone();
        yield* t.decodeMulti(e);
        return;
      }
      try {
        this.entered = true;
        this.reinitializeState();
        this.setBuffer(e);
        while (this.hasRemaining(1)) {
          yield this.doDecodeSync();
        }
      } finally {
        this.entered = false;
      }
    }
    async decodeAsync(e) {
      if (this.entered) {
        return this.clone().decodeAsync(e);
      }
      try {
        this.entered = true;
        let t;
        let i = false;
        for await (const o of e) {
          if (i) {
            this.entered = false;
            throw this.createExtraByteError(this.totalPos);
          }
          this.appendBuffer(o);
          try {
            t = this.doDecodeSync();
            i = true;
          } catch (Ee) {
            if (!(Ee instanceof RangeError)) {
              throw Ee;
            }
          }
          this.totalPos += this.pos;
        }
        if (i) {
          if (this.hasRemaining(1)) {
            throw this.createExtraByteError(this.totalPos);
          }
          return t;
        }
        const {
          headByte: s,
          pos: n,
          totalPos: r
        } = this;
        throw new RangeError(`Insufficient data in parsing ${y(s)} at ${r} (${n} in the current buffer)`);
      } finally {
        this.entered = false;
      }
    }
    decodeArrayStream(e) {
      return this.decodeMultiAsync(e, true);
    }
    decodeStream(e) {
      return this.decodeMultiAsync(e, false);
    }
    async *decodeMultiAsync(e, t) {
      if (this.entered) {
        const i = this.clone();
        yield* i.decodeMultiAsync(e, t);
        return;
      }
      try {
        this.entered = true;
        let i = t;
        let s = -1;
        for await (const n of e) {
          if (t && s === 0) {
            throw this.createExtraByteError(this.totalPos);
          }
          this.appendBuffer(n);
          if (i) {
            s = this.readArraySize();
            i = false;
            this.complete();
          }
          try {
            while (yield this.doDecodeSync(), --s !== 0);
          } catch (Ee) {
            if (!(Ee instanceof RangeError)) {
              throw Ee;
            }
          }
          this.totalPos += this.pos;
        }
      } finally {
        this.entered = false;
      }
    }
    doDecodeSync() {
      e: while (true) {
        const e = this.readHeadByte();
        let t;
        if (e >= 224) {
          t = e - 256;
        } else if (e < 192) {
          if (e < 128) {
            t = e;
          } else if (e < 144) {
            const i = e - 128;
            if (i !== 0) {
              this.pushMapState(i);
              this.complete();
              continue e;
            }
            t = {};
          } else if (e < 160) {
            const i = e - 144;
            if (i !== 0) {
              this.pushArrayState(i);
              this.complete();
              continue e;
            }
            t = [];
          } else {
            const i = e - 160;
            t = this.decodeString(i, 0);
          }
        } else if (e === 192) {
          t = null;
        } else if (e === 194) {
          t = false;
        } else if (e === 195) {
          t = true;
        } else if (e === 202) {
          t = this.readF32();
        } else if (e === 203) {
          t = this.readF64();
        } else if (e === 204) {
          t = this.readU8();
        } else if (e === 205) {
          t = this.readU16();
        } else if (e === 206) {
          t = this.readU32();
        } else if (e === 207) {
          t = this.useBigInt64 ? this.readU64AsBigInt() : this.readU64();
        } else if (e === 208) {
          t = this.readI8();
        } else if (e === 209) {
          t = this.readI16();
        } else if (e === 210) {
          t = this.readI32();
        } else if (e === 211) {
          t = this.useBigInt64 ? this.readI64AsBigInt() : this.readI64();
        } else if (e === 217) {
          const e = this.lookU8();
          t = this.decodeString(e, 1);
        } else if (e === 218) {
          const e = this.lookU16();
          t = this.decodeString(e, 2);
        } else if (e === 219) {
          const e = this.lookU32();
          t = this.decodeString(e, 4);
        } else if (e === 220) {
          const e = this.readU16();
          if (e !== 0) {
            this.pushArrayState(e);
            this.complete();
            continue e;
          }
          t = [];
        } else if (e === 221) {
          const e = this.readU32();
          if (e !== 0) {
            this.pushArrayState(e);
            this.complete();
            continue e;
          }
          t = [];
        } else if (e === 222) {
          const e = this.readU16();
          if (e !== 0) {
            this.pushMapState(e);
            this.complete();
            continue e;
          }
          t = {};
        } else if (e === 223) {
          const e = this.readU32();
          if (e !== 0) {
            this.pushMapState(e);
            this.complete();
            continue e;
          }
          t = {};
        } else if (e === 196) {
          const e = this.lookU8();
          t = this.decodeBinary(e, 1);
        } else if (e === 197) {
          const e = this.lookU16();
          t = this.decodeBinary(e, 2);
        } else if (e === 198) {
          const e = this.lookU32();
          t = this.decodeBinary(e, 4);
        } else if (e === 212) {
          t = this.decodeExtension(1, 0);
        } else if (e === 213) {
          t = this.decodeExtension(2, 0);
        } else if (e === 214) {
          t = this.decodeExtension(4, 0);
        } else if (e === 215) {
          t = this.decodeExtension(8, 0);
        } else if (e === 216) {
          t = this.decodeExtension(16, 0);
        } else if (e === 199) {
          const e = this.lookU8();
          t = this.decodeExtension(e, 1);
        } else if (e === 200) {
          const e = this.lookU16();
          t = this.decodeExtension(e, 2);
        } else {
          if (e !== 201) {
            throw new a(`Unrecognized type byte: ${y(e)}`);
          }
          {
            const e = this.lookU32();
            t = this.decodeExtension(e, 4);
          }
        }
        this.complete();
        const i = this.stack;
        while (i.length > 0) {
          const e = i.top();
          if (e.type === g) {
            e.array[e.position] = t;
            e.position++;
            if (e.position !== e.size) {
              continue e;
            }
            t = e.array;
            i.release(e);
          } else {
            if (e.type === w) {
              if (t === "__proto__") {
                throw new a("The key __proto__ is not allowed");
              }
              e.key = this.mapKeyConverter(t);
              e.type = m;
              continue e;
            }
            e.map[e.key] = t;
            e.readCount++;
            if (e.readCount !== e.size) {
              e.key = null;
              e.type = w;
              continue e;
            }
            t = e.map;
            i.release(e);
          }
        }
        return t;
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
      const e = this.readHeadByte();
      switch (e) {
        case 220:
          return this.readU16();
        case 221:
          return this.readU32();
        default:
          if (e < 160) {
            return e - 144;
          }
          throw new a(`Unrecognized array type byte: ${y(e)}`);
      }
    }
    pushMapState(e) {
      if (e > this.maxMapLength) {
        throw new a(`Max length exceeded: map length (${e}) > maxMapLengthLength (${this.maxMapLength})`);
      }
      this.stack.pushMapState(e);
    }
    pushArrayState(e) {
      if (e > this.maxArrayLength) {
        throw new a(`Max length exceeded: array length (${e}) > maxArrayLength (${this.maxArrayLength})`);
      }
      this.stack.pushArrayState(e);
    }
    decodeString(e, t) {
      if (!this.rawStrings || this.stateIsMapKey()) {
        return this.decodeUtf8String(e, t);
      } else {
        return this.decodeBinary(e, t);
      }
    }
    decodeUtf8String(e, t) {
      if (e > this.maxStrLength) {
        throw new a(`Max length exceeded: UTF-8 byte length (${e}) > maxStrLength (${this.maxStrLength})`);
      }
      if (this.bytes.byteLength < this.pos + t + e) {
        throw I;
      }
      const i = this.pos + t;
      let s;
      s = this.stateIsMapKey() && this.keyDecoder?.canBeCached(e) ? this.keyDecoder.decode(this.bytes, i, e) : r(this.bytes, i, e);
      this.pos += t + e;
      return s;
    }
    stateIsMapKey() {
      if (this.stack.length > 0) {
        return this.stack.top().type === w;
      }
      return false;
    }
    decodeBinary(e, t) {
      if (e > this.maxBinLength) {
        throw new a(`Max length exceeded: bin length (${e}) > maxBinLength (${this.maxBinLength})`);
      }
      if (!this.hasRemaining(e + t)) {
        throw I;
      }
      const i = this.pos + t;
      const s = this.bytes.subarray(i, i + e);
      this.pos += t + e;
      return s;
    }
    decodeExtension(e, t) {
      if (e > this.maxExtLength) {
        throw new a(`Max length exceeded: ext length (${e}) > maxExtLength (${this.maxExtLength})`);
      }
      const i = this.view.getInt8(this.pos + t);
      const s = this.decodeBinary(e, t + 1);
      return this.extensionCodec.decode(s, i, this.context);
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
      const e = this.view.getUint8(this.pos);
      this.pos++;
      return e;
    }
    readI8() {
      const e = this.view.getInt8(this.pos);
      this.pos++;
      return e;
    }
    readU16() {
      const e = this.view.getUint16(this.pos);
      this.pos += 2;
      return e;
    }
    readI16() {
      const e = this.view.getInt16(this.pos);
      this.pos += 2;
      return e;
    }
    readU32() {
      const e = this.view.getUint32(this.pos);
      this.pos += 4;
      return e;
    }
    readI32() {
      const e = this.view.getInt32(this.pos);
      this.pos += 4;
      return e;
    }
    readU64() {
      t = this.view;
      i = this.pos;
      const e = t.getUint32(i) * 4294967296 + t.getUint32(i + 4);
      var t;
      var i;
      this.pos += 8;
      return e;
    }
    readI64() {
      const e = d(this.view, this.pos);
      this.pos += 8;
      return e;
    }
    readU64AsBigInt() {
      const e = this.view.getBigUint64(this.pos);
      this.pos += 8;
      return e;
    }
    readI64AsBigInt() {
      const e = this.view.getBigInt64(this.pos);
      this.pos += 8;
      return e;
    }
    readF32() {
      const e = this.view.getFloat32(this.pos);
      this.pos += 4;
      return e;
    }
    readF64() {
      const e = this.view.getFloat64(this.pos);
      this.pos += 8;
      return e;
    }
  }
  const x = 10000;
  let B;
  let A;
  let D;
  let M = null;
  let C = null;
  let _ = "disconnected";
  let k = false;
  let L = true;
  let R = null;
  let N = false;
  let O = null;
  let P = 0;
  let z = false;
  let F = 0;
  let H = null;
  let W = null;
  let $ = 0;
  let K = null;
  let V = null;
  let j = null;
  let q = null;
  let G = 45000;
  let Q = null;
  let Y = "online";
  let J = false;
  let X = false;
  function Z(e) {
    self.postMessage(e);
  }
  function ee() {
    Z({
      type: "SESSION_UPDATE",
      session: {
        sessionId: O,
        lastSequence: P,
        isResuming: z
      }
    });
  }
  function te() {
    O = null;
    P = 0;
    z = false;
    ee();
  }
  function ie(e) {
    return ["CRITICAL", "HIGH", "MEDIUM", "LOW"][e] || "UNKNOWN";
  }
  const se = new class {
    queues = new Map();
    presenceMaps = new Map();
    MAX_QUEUE_SIZE = 100;
    batchTimer = null;
    batchIntervalMs = 16;
    eventsInWindow = 0;
    windowStart = Date.now();
    telemetryInterval = null;
    isVisible = true;
    onDispatch;
    constructor(e = 16, t) {
      this.batchIntervalMs = e;
      this.onDispatch = t;
      [0, 1, 2, 3].forEach(e => {
        this.queues.set(e, []);
        this.presenceMaps.set(e, new Map());
      });
      this.startTelemetry();
      if (typeof document != "undefined" && typeof document.addEventListener == "function") {
        try {
          document.addEventListener("visibilitychange", this.handleVisibilityChange);
        } catch {}
      }
    }
    handleVisibilityChange = () => {
      if (typeof document != "undefined") {
        this.isVisible = document.visibilityState === "visible";
        if (this.isVisible) {
          this.startTelemetry();
        } else {
          this.stopTelemetry();
        }
      }
    };
    startTelemetry() {
      this.telemetryInterval ||= setInterval(() => this.adjustBatching(), 1000);
    }
    stopTelemetry() {
      if (this.telemetryInterval) {
        clearInterval(this.telemetryInterval);
        this.telemetryInterval = null;
      }
    }
    enqueue(e, t) {
      const i = this.getPriorityForEvent(e) ?? 3;
      const s = this.queues.get(i);
      this.eventsInWindow++;
      if (e === "presence_update") {
        const e = t;
        const s = e.user_id || e.userId || e.user?.id;
        if (s) {
          const e = this.presenceMaps.get(i).get(String(s));
          if (e) {
            e.eventData = t;
            return;
          }
        }
      }
      const n = {
        eventType: e,
        eventData: t,
        timestamp: Date.now(),
        priority: i
      };
      if (s.length < this.MAX_QUEUE_SIZE) {
        s.push(n);
        if (e === "presence_update") {
          const e = t;
          const s = e.user_id || e.userId || e.user?.id;
          if (s) {
            this.presenceMaps.get(i).set(String(s), n);
          }
        }
      } else if (i === 3 && (s.shift(), s.push(n), e === "presence_update")) {
        const e = t;
        const s = e.user_id || e.userId || e.user?.id;
        if (s) {
          this.presenceMaps.get(i).set(String(s), n);
        }
      }
      this.scheduleProcessing();
    }
    scheduleProcessing() {
      if ((this.queues.get(0) || []).length > 0 && this.onDispatch) {
        if (this.batchTimer) {
          clearTimeout(this.batchTimer);
        }
        this.batchTimer = null;
        const e = this.processQueues();
        this.onDispatch(e);
        return;
      }
      this.batchTimer ||= setTimeout(() => {
        this.batchTimer = null;
        const e = this.processQueues();
        if (this.onDispatch) {
          this.onDispatch(e);
        }
      }, this.batchIntervalMs);
    }
    processQueues() {
      const e = [];
      [0, 1, 2, 3].forEach(t => {
        const i = t;
        const s = this.queues.get(i);
        while (s.length > 0) {
          const t = s.shift();
          if (t.eventType === "presence_update") {
            const e = t.eventData;
            const s = e?.user_id || e?.userId || e?.user?.id;
            if (s) {
              this.presenceMaps.get(i).delete(String(s));
            }
          }
          e.push(t);
        }
      });
      return e;
    }
    drain() {
      return this.processQueues();
    }
    clear() {
      this.queues.forEach(e => e.length = 0);
      this.presenceMaps.forEach(e => e.clear());
    }
    getPriorityForEvent(e) {
      return {
        READY: 0,
        RESUMED: 0,
        user_moderation: 0,
        moderation_updated: 0,
        MODERATION_UPDATED: 0,
        message_created: 1,
        presence_update: 1,
        permission_updated: 1,
        interaction_response: 1,
        interaction_followup: 1
      }[e];
    }
    adjustBatching() {
      const e = Date.now();
      const t = Math.max(1, e - this.windowStart);
      const i = this.eventsInWindow * 1000 / t;
      this.eventsInWindow = 0;
      this.windowStart = e;
      if (i > 2000) {
        this.batchIntervalMs = Math.min(200, this.batchIntervalMs * 2);
      } else if (i > 1000) {
        this.batchIntervalMs = Math.min(200, Math.round(this.batchIntervalMs * 1.5));
      } else if (i < 200) {
        this.batchIntervalMs = Math.max(8, Math.round(this.batchIntervalMs / 2));
      } else if (i < 500) {
        this.batchIntervalMs = Math.max(8, this.batchIntervalMs - 1);
      }
    }
    stop() {
      if (this.batchTimer) {
        clearTimeout(this.batchTimer);
        this.batchTimer = null;
      }
      this.stopTelemetry();
      this.clear();
    }
    destroy() {
      this.stop();
      if (typeof document != "undefined" && typeof document.removeEventListener == "function") {
        try {
          document.removeEventListener("visibilitychange", this.handleVisibilityChange);
        } catch {}
      }
      this.queues.clear();
      this.presenceMaps.clear();
      this.onDispatch = undefined;
    }
  }(16, e => {
    if (e.length) {
      Z({
        type: "BATCH_EVENTS",
        events: e.map(e => ({
          priority: ie(e.priority),
          eventType: e.eventType,
          eventData: e.eventData
        }))
      });
    }
  });
  const ne = new Map();
  let re = 0;
  function oe(e, t, i) {
    const s = ne.get(e);
    Z({
      type: "SUBSCRIPTION_STATE",
      subscription: e,
      target: s?.message.d,
      status: t,
      error: i
    });
  }
  function ae(e) {
    const t = ne.get(e);
    if (t && J) {
      if (t.timer) {
        clearTimeout(t.timer);
      }
      t.requestId = String(++re);
      t.attempts++;
      if (he({
        ...t.message,
        d: {
          ...t.message.d,
          request_id: t.requestId
        }
      })) {
        oe(e, "pending");
        if (X) {
          t.timer = setTimeout(() => {
            t.timer = null;
            oe(e, "failed", "Subscription acknowledgment timeout");
            if (t.attempts >= 3) {
              ue("Subscription processor is unresponsive");
            } else {
              me();
              if (J && ne.get(e) === t) {
                ae(e);
              }
            }
          }, Math.min(x * 2 ** Math.min(t.attempts - 1, 2), 30000));
        }
      }
    }
  }
  function he(e) {
    if (C?.readyState !== WebSocket.OPEN) {
      return false;
    }
    try {
      C.send((t = e, new p(i).encodeSharedRef(t)));
      return true;
    } catch {
      ue("Send failed");
      return false;
    }
    var t;
    var i;
  }
  function ce() {
    if (V) {
      clearTimeout(V);
    }
    if (j) {
      clearTimeout(j);
    }
    if (q) {
      clearTimeout(q);
    }
    V = j = q = null;
    Q = null;
    const e = C;
    C = null;
    if (e) {
      e.onopen = e.onmessage = e.onclose = e.onerror = null;
      try {
        e.close(1000, "Transport retired");
      } catch {}
    }
    _ = "disconnected";
    H = null;
    J = false;
    ne.forEach((e, t) => {
      if (e.timer) {
        clearTimeout(e.timer);
      }
      e.timer = null;
      e.requestId = "";
      e.attempts = 0;
      e.rejectionRetries = 0;
      oe(t, "pending");
    });
    const t = se.drain();
    if (t.length) {
      Z({
        type: "BATCH_EVENTS",
        events: t.map(e => ({
          priority: ie(e.priority),
          eventType: e.eventType,
          eventData: e.eventData
        }))
      });
    }
    se.clear();
    Z({
      type: "STATUS_CHANGE",
      status: "DISCONNECTED"
    });
  }
  function de() {
    if (!k || !L || K || N) {
      return;
    }
    F++;
    const e = M?.retry;
    const t = Math.min((e?.baseRetryDelay ?? 2000) * 2 ** Math.min(F - 1, 16), e?.maxRetryDelay ?? 32000);
    Z({
      type: "RECONNECT_ATTEMPT",
      attempt: F,
      maxRetries: 0,
      isSilent: F <= 2
    });
    K = setTimeout(() => {
      K = null;
      pe();
    }, Math.round(t * (0.5 + Math.random() * 0.5)));
  }
  function le(e, t) {
    const i = {
      reason: e,
      code: t?.code,
      wasClean: t?.wasClean,
      phase: _,
      generation: $,
      serverId: B,
      instanceId: A,
      at: Date.now(),
      lastAckAgeMs: W === null ? null : Date.now() - W,
      heartbeatPendingMs: Q === null ? null : Date.now() - Q,
      bufferedBytes: C?.bufferedAmount ?? 0
    };
    console.warn("[Worker] Transport closed", i);
    Z({
      type: "TRANSPORT_DIAGNOSTIC",
      diagnostic: i
    });
  }
  function ue(e) {
    le(e);
    console.warn("[Worker] Reconnecting:", e);
    ce();
    de();
  }
  function fe() {
    if (k && !N) {
      N = true;
      Z({
        type: "TOKEN_REQUEST"
      });
    }
  }
  function pe() {
    if (!k || !L || _ !== "disconnected" || N) {
      return;
    }
    if (K) {
      clearTimeout(K);
    }
    K = null;
    if (!R) {
      fe();
      return;
    }
    const t = M?.connection.url;
    if (t) {
      _ = "connecting";
      Z({
        type: "STATUS_CHANGE",
        status: "CONNECTING"
      });
      try {
        const i = new URL(t.replace(/^http/, "ws"));
        i.searchParams.set("encoding", "msgpack");
        const s = new WebSocket(i.toString());
        C = s;
        $++;
        B = A = undefined;
        W = null;
        s.binaryType = "arraybuffer";
        s.onopen = () => {
          if (C === s) {
            _ = "handshaking";
            ye("HELLO timeout");
          }
        };
        s.onmessage = t => {
          var i;
          var n;
          if (C === s) {
            try {
              const s = t.data instanceof ArrayBuffer ? (i = new Uint8Array(t.data), new v(n).decode(i)) : JSON.parse(t.data);
              if ((e => {
                if (!e || typeof e != "object") {
                  return false;
                }
                const t = e;
                return typeof t.op == "number" && t.op >= 0;
              })(s)) {
                (function (t) {
                  if (t.op === e.HELLO) {
                    const i = t.d;
                    X = i.subscription_ack === true;
                    B = i.server_id;
                    A = i.instance_id;
                    if (i.heartbeat_interval && i.heartbeat_interval > 0) {
                      G = i.heartbeat_interval;
                    }
                    if (O) {
                      if (he({
                        op: e.RESUME,
                        d: {
                          token: R,
                          session_id: O,
                          last_sequence: P
                        }
                      })) {
                        ye("RESUME timeout");
                      }
                    } else {
                      ge();
                    }
                    (function () {
                      if (j) {
                        clearTimeout(j);
                      }
                      const e = C;
                      if (!e) {
                        return;
                      }
                      let t = Date.now();
                      const i = () => {
                        if (C !== e) {
                          return;
                        }
                        if (Q !== null && Date.now() - Q >= G * 3) {
                          ue("Heartbeat ACK timeout");
                          return;
                        }
                        const s = Date.now() - t > G * 3;
                        t = Date.now();
                        if (s) {
                          me();
                        } else {
                          we();
                        }
                        if (C === e) {
                          j = setTimeout(i, G);
                        }
                      };
                      j = setTimeout(i, G);
                    })();
                  } else if (t.op === e.HEARTBEAT_ACK) {
                    W = Date.now();
                    if (H !== null && Date.now() - H >= G * 2) {
                      F = 0;
                    }
                    Q = null;
                    if (q) {
                      clearTimeout(q);
                    }
                    q = null;
                  } else if (t.op === e.HEARTBEAT) {
                    we();
                  } else if (t.op === e.RECONNECT) {
                    ue("Server requested reconnect");
                  } else if (t.op === e.INVALID_SESSION) {
                    const e = t.d;
                    const i = e?.message ?? "Invalid session";
                    if (/token/i.test(i)) {
                      ce();
                      R = null;
                      fe();
                    } else if (_ === "ready") {
                      Z({
                        type: "ERROR",
                        error: i
                      });
                    } else if (O) {
                      te();
                      ge();
                    } else {
                      ue(i);
                    }
                  } else if (t.op === e.DISPATCH) {
                    const e = t.d;
                    const i = t.t || e?.type;
                    const s = t.t ? t.d : e?.data;
                    if (!i || s === undefined) {
                      return;
                    }
                    if (_ === "handshaking" && O) {
                      ye("RESUME timeout");
                    }
                    const n = ["READY", "RESUMED", "SESSION_START"].includes(i);
                    if (t.s !== undefined) {
                      P = n ? t.s : Math.max(P, t.s);
                    }
                    if (n) {
                      const e = s;
                      if (!e.session_id) {
                        return;
                      }
                      if (V) {
                        clearTimeout(V);
                      }
                      V = null;
                      O = e.session_id;
                      z = i === "RESUMED";
                      _ = "ready";
                      J = true;
                      H = Date.now();
                      ee();
                      Z({
                        type: "STATUS_CHANGE",
                        status: "CONNECTED"
                      });
                      Ue(Y, D);
                      ne.forEach((e, t) => ae(t));
                    }
                    if (i === "SUBSCRIPTION_ACK") {
                      const e = s;
                      const t = String(e.subscription);
                      const i = ne.get(t);
                      if (i && i.requestId === e.request_id) {
                        if (i.timer) {
                          clearTimeout(i.timer);
                        }
                        i.timer = null;
                        i.attempts = 0;
                        oe(t, e.accepted ? "confirmed" : "failed", e.error);
                        if (e.accepted) {
                          i.rejectionRetries = 0;
                        } else if (e.retryable === true) {
                          const s = typeof e.retry_after_ms == "number" && e.retry_after_ms > 0 ? Math.min(e.retry_after_ms, 600000) : Math.min(2 ** Math.min(i.rejectionRetries++, 4) * 2000, 30000);
                          i.timer = setTimeout(() => {
                            i.timer = null;
                            if (ne.get(t) === i && J) {
                              ae(t);
                            }
                          }, s);
                        }
                      }
                    }
                    se.enqueue(i, s);
                  }
                })(s);
              }
            } catch (r) {
              console.warn("[Worker] Invalid message", r);
            }
          }
        };
        s.onerror = () => {};
        s.onclose = e => {
          if (C === s) {
            le(e.reason || "Remote close", e);
            ce();
            if (k) {
              if (e.code === 4003 || e.code === 4004) {
                R = null;
                fe();
              } else if (e.code === 4014) {
                k = false;
                Z({
                  type: "ERROR",
                  error: e.reason || "Connection rejected"
                });
              } else {
                if (e.code === 4006) {
                  te();
                }
                de();
              }
            }
          }
        };
        ye("Connection timeout", M?.connection.connectTimeout);
      } catch {
        ue("Connection failed");
      }
    } else {
      Z({
        type: "ERROR",
        error: "WebSocket URL is missing"
      });
    }
  }
  function ye(e, t = 10000) {
    if (V) {
      clearTimeout(V);
    }
    V = setTimeout(() => {
      ue(e);
    }, t);
  }
  function ge() {
    if (he({
      op: e.IDENTIFY,
      d: {
        token: R,
        properties: {
          os: "web",
          browser: "Jubbio",
          device: "desktop"
        }
      }
    })) {
      ye("IDENTIFY timeout");
    }
  }
  function we() {
    if (C?.readyState === WebSocket.OPEN) {
      if (Q === null) {
        Q = Date.now();
      }
      he({
        op: e.HEARTBEAT,
        d: P
      });
    }
  }
  function me() {
    if (!k || !L) {
      return;
    }
    if (_ === "disconnected") {
      if (!K) {
        pe();
      }
      return;
    }
    if (_ !== "ready" || q) {
      return;
    }
    const e = C;
    we();
    if (C === e) {
      q = setTimeout(() => {
        q = null;
        if (C === e && Q !== null) {
          ue("Connection probe ACK timeout");
        }
      }, x);
    }
  }
  function Ue(t, i) {
    if (J) {
      he({
        op: e.DISPATCH,
        t: "update_status",
        d: {
          state: t,
          ...(i !== undefined ? {
            activities: i
          } : {})
        }
      });
    }
  }
  self.onmessage = e => {
    const t = e.data;
    switch (t.type) {
      case "INIT":
        M = t.config;
        R = t.token;
        O = t.session?.sessionId ?? null;
        P = t.session?.lastSequence ?? 0;
        z = t.session?.isResuming ?? false;
        break;
      case "CONNECT":
        k = true;
        if (t.token) {
          R = t.token;
          N = false;
        }
        if (K) {
          break;
        }
        pe();
        break;
      case "DISCONNECT":
        k = false;
        if (K) {
          clearTimeout(K);
        }
        K = null;
        ce();
        ne.clear();
        N = false;
        R = null;
        Y = "online";
        D = undefined;
        te();
        break;
      case "SEND":
        if (!function (e) {
          i = e.t;
          const t = i?.match(/^(GUILD_PRESENCE|CHANNEL_PRESENCE|DM_CHANNEL)_(?:UN)?SUBSCRIBE$/)?.[1];
          var i;
          if (!t) {
            return false;
          }
          const s = ne.get(t);
          if (e.t?.endsWith("_UNSUBSCRIBE")) {
            const i = s?.message.d;
            const n = e.d;
            if (i && (i.guild_id !== n.guild_id || i.channel_id !== n.channel_id)) {
              return true;
            }
            if (s?.timer) {
              clearTimeout(s.timer);
            }
            if (s) {
              oe(t, "inactive");
            }
            ne.delete(t);
            if (J) {
              he(e);
            }
          } else {
            if (s?.timer) {
              clearTimeout(s.timer);
            }
            ne.set(t, {
              message: e,
              requestId: "",
              timer: null,
              attempts: 0,
              rejectionRetries: 0
            });
            oe(t, "pending");
            ae(t);
          }
          return true;
        }(t.data) && J) {
          he(t.data);
        }
        break;
      case "UPDATE_TOKEN":
        if (!k) {
          break;
        }
        R = t.token;
        N = false;
        pe();
        break;
      case "TOKEN_FAILED":
        if (!k) {
          break;
        }
        N = false;
        Z({
          type: "ERROR",
          error: "Token refresh failed"
        });
        de();
        break;
      case "VISIBILITY_CHANGE":
        if (t.isVisible) {
          me();
        }
        break;
      case "ONLINE_STATUS_CHANGE":
        L = t.isOnline;
        if (L) {
          me();
        } else {
          if (K) {
            clearTimeout(K);
          }
          K = null;
          ce();
        }
        break;
      case "SEND_PRESENCE_UPDATE":
        Y = t.presenceState;
        if (t.activities !== undefined) {
          D = t.activities;
        }
        Ue(Y, D);
    }
  };
})();