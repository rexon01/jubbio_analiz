import { r as _0x418098 } from "./index-cQfEKR1W.js";
function e(_0x1951bc) {
  let _0x2ccf19 = _0x1951bc[0];
  let _0x3e9c78 = _0x1951bc[1];
  let _0x4bec57 = _0x1951bc[2];
  return Math.sqrt(_0x2ccf19 * _0x2ccf19 + _0x3e9c78 * _0x3e9c78 + _0x4bec57 * _0x4bec57);
}
function s(_0x3e4aae, _0x564eb2) {
  _0x3e4aae[0] = _0x564eb2[0];
  _0x3e4aae[1] = _0x564eb2[1];
  _0x3e4aae[2] = _0x564eb2[2];
  return _0x3e4aae;
}
function i(_0x33da20, _0x25cd7d, _0x3a41ab) {
  _0x33da20[0] = _0x25cd7d[0] + _0x3a41ab[0];
  _0x33da20[1] = _0x25cd7d[1] + _0x3a41ab[1];
  _0x33da20[2] = _0x25cd7d[2] + _0x3a41ab[2];
  return _0x33da20;
}
function r(_0x3ebff9, _0x5923a7, _0x31cd68) {
  _0x3ebff9[0] = _0x5923a7[0] - _0x31cd68[0];
  _0x3ebff9[1] = _0x5923a7[1] - _0x31cd68[1];
  _0x3ebff9[2] = _0x5923a7[2] - _0x31cd68[2];
  return _0x3ebff9;
}
function n(_0x19f403, _0x37c002, _0x3e0f3f) {
  _0x19f403[0] = _0x37c002[0] * _0x3e0f3f;
  _0x19f403[1] = _0x37c002[1] * _0x3e0f3f;
  _0x19f403[2] = _0x37c002[2] * _0x3e0f3f;
  return _0x19f403;
}
function a(_0x370572) {
  let _0x11c9b8 = _0x370572[0];
  let _0x96c2d = _0x370572[1];
  let _0xe7535d = _0x370572[2];
  return _0x11c9b8 * _0x11c9b8 + _0x96c2d * _0x96c2d + _0xe7535d * _0xe7535d;
}
function h(_0x3f772d, _0x3d95a1) {
  let _0x37db77 = _0x3d95a1[0];
  let _0x3d346f = _0x3d95a1[1];
  let _0x5827b2 = _0x3d95a1[2];
  let _0x2aa941 = _0x37db77 * _0x37db77 + _0x3d346f * _0x3d346f + _0x5827b2 * _0x5827b2;
  if (_0x2aa941 > 0) {
    _0x2aa941 = 1 / Math.sqrt(_0x2aa941);
  }
  _0x3f772d[0] = _0x3d95a1[0] * _0x2aa941;
  _0x3f772d[1] = _0x3d95a1[1] * _0x2aa941;
  _0x3f772d[2] = _0x3d95a1[2] * _0x2aa941;
  return _0x3f772d;
}
function o(_0x2464d7, _0x5e574f) {
  return _0x2464d7[0] * _0x5e574f[0] + _0x2464d7[1] * _0x5e574f[1] + _0x2464d7[2] * _0x5e574f[2];
}
function l(_0x313df4, _0x1af471, _0x35bdef) {
  let _0x287f88 = _0x1af471[0];
  let _0x17b6f0 = _0x1af471[1];
  let _0xa2119e = _0x1af471[2];
  let _0x4b6443 = _0x35bdef[0];
  let _0x37e9ee = _0x35bdef[1];
  let _0x402094 = _0x35bdef[2];
  _0x313df4[0] = _0x17b6f0 * _0x402094 - _0xa2119e * _0x37e9ee;
  _0x313df4[1] = _0xa2119e * _0x4b6443 - _0x287f88 * _0x402094;
  _0x313df4[2] = _0x287f88 * _0x37e9ee - _0x17b6f0 * _0x4b6443;
  return _0x313df4;
}
const u = function () {
  const _0x398119 = [0, 0, 0];
  const _0x1ee134 = [0, 0, 0];
  return function (_0x54f368, _0x47e294) {
    s(_0x398119, _0x54f368);
    s(_0x1ee134, _0x47e294);
    h(_0x398119, _0x398119);
    h(_0x1ee134, _0x1ee134);
    let _0xc03f2 = o(_0x398119, _0x1ee134);
    if (_0xc03f2 > 1) {
      return 0;
    } else if (_0xc03f2 < -1) {
      return Math.PI;
    } else {
      return Math.acos(_0xc03f2);
    }
  };
}();
class c extends Array {
  constructor(_0x3f8f6d = 0, _0x5ed19e = _0x3f8f6d, _0x34bba5 = _0x3f8f6d) {
    super(_0x3f8f6d, _0x5ed19e, _0x34bba5);
    return this;
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(_0x8d92ee) {
    this[0] = _0x8d92ee;
  }
  set y(_0x132ff5) {
    this[1] = _0x132ff5;
  }
  set z(_0x1a4ce5) {
    this[2] = _0x1a4ce5;
  }
  set(_0x38567e, _0x12c603 = _0x38567e, _0x4a93bb = _0x38567e) {
    if (_0x38567e.length) {
      return this.copy(_0x38567e);
    } else {
      (function (_0x367a7b, _0x3e633f, _0x2457b2, _0x4705e2) {
        _0x367a7b[0] = _0x3e633f;
        _0x367a7b[1] = _0x2457b2;
        _0x367a7b[2] = _0x4705e2;
      })(this, _0x38567e, _0x12c603, _0x4a93bb);
      return this;
    }
  }
  copy(_0x4b8224) {
    s(this, _0x4b8224);
    return this;
  }
  add(_0x570956, _0x3d165e) {
    if (_0x3d165e) {
      i(this, _0x570956, _0x3d165e);
    } else {
      i(this, this, _0x570956);
    }
    return this;
  }
  sub(_0x40ac4a, _0x38ddcb) {
    if (_0x38ddcb) {
      r(this, _0x40ac4a, _0x38ddcb);
    } else {
      r(this, this, _0x40ac4a);
    }
    return this;
  }
  multiply(_0x337274) {
    var _0x5ab190;
    var _0x2073aa;
    var _0x5239ab;
    if (_0x337274.length) {
      _0x2073aa = this;
      _0x5239ab = _0x337274;
      (_0x5ab190 = this)[0] = _0x2073aa[0] * _0x5239ab[0];
      _0x5ab190[1] = _0x2073aa[1] * _0x5239ab[1];
      _0x5ab190[2] = _0x2073aa[2] * _0x5239ab[2];
    } else {
      n(this, this, _0x337274);
    }
    return this;
  }
  divide(_0x5cb1b5) {
    var _0x4e5c13;
    var _0x400037;
    var _0x590daf;
    if (_0x5cb1b5.length) {
      _0x400037 = this;
      _0x590daf = _0x5cb1b5;
      (_0x4e5c13 = this)[0] = _0x400037[0] / _0x590daf[0];
      _0x4e5c13[1] = _0x400037[1] / _0x590daf[1];
      _0x4e5c13[2] = _0x400037[2] / _0x590daf[2];
    } else {
      n(this, this, 1 / _0x5cb1b5);
    }
    return this;
  }
  inverse(_0x6e1ab9 = this) {
    var _0x5949f7;
    var _0x28bd85;
    _0x28bd85 = _0x6e1ab9;
    (_0x5949f7 = this)[0] = 1 / _0x28bd85[0];
    _0x5949f7[1] = 1 / _0x28bd85[1];
    _0x5949f7[2] = 1 / _0x28bd85[2];
    return this;
  }
  len() {
    return e(this);
  }
  distance(_0x35cd63) {
    if (_0x35cd63) {
      return function (_0x22edef, _0x518602) {
        let _0x303ece = _0x518602[0] - _0x22edef[0];
        let _0x4898a4 = _0x518602[1] - _0x22edef[1];
        let _0x29ca9a = _0x518602[2] - _0x22edef[2];
        return Math.sqrt(_0x303ece * _0x303ece + _0x4898a4 * _0x4898a4 + _0x29ca9a * _0x29ca9a);
      }(this, _0x35cd63);
    } else {
      return e(this);
    }
  }
  squaredLen() {
    return a(this);
  }
  squaredDistance(_0x2c413b) {
    if (_0x2c413b) {
      return function (_0x14d7fc, _0x4b7a1b) {
        let _0x15e831 = _0x4b7a1b[0] - _0x14d7fc[0];
        let _0x336b18 = _0x4b7a1b[1] - _0x14d7fc[1];
        let _0x59d999 = _0x4b7a1b[2] - _0x14d7fc[2];
        return _0x15e831 * _0x15e831 + _0x336b18 * _0x336b18 + _0x59d999 * _0x59d999;
      }(this, _0x2c413b);
    } else {
      return a(this);
    }
  }
  negate(_0x2b90d7 = this) {
    var _0x372184;
    var _0x40f7ab;
    _0x40f7ab = _0x2b90d7;
    (_0x372184 = this)[0] = -_0x40f7ab[0];
    _0x372184[1] = -_0x40f7ab[1];
    _0x372184[2] = -_0x40f7ab[2];
    return this;
  }
  cross(_0x3f16d9, _0x2d5a0e) {
    if (_0x2d5a0e) {
      l(this, _0x3f16d9, _0x2d5a0e);
    } else {
      l(this, this, _0x3f16d9);
    }
    return this;
  }
  scale(_0x46fc3d) {
    n(this, this, _0x46fc3d);
    return this;
  }
  normalize() {
    h(this, this);
    return this;
  }
  dot(_0x474d1b) {
    return o(this, _0x474d1b);
  }
  equals(_0x3a8b78) {
    _0x340f35 = _0x3a8b78;
    return (_0x22a70e = this)[0] === _0x340f35[0] && _0x22a70e[1] === _0x340f35[1] && _0x22a70e[2] === _0x340f35[2];
    var _0x22a70e;
    var _0x340f35;
  }
  applyMatrix3(_0x3c8653) {
    (function (_0x8e6737, _0x15f8b1, _0x4fbe7d) {
      let _0x24d1b1 = _0x15f8b1[0];
      let _0x220dc1 = _0x15f8b1[1];
      let _0x17be00 = _0x15f8b1[2];
      _0x8e6737[0] = _0x24d1b1 * _0x4fbe7d[0] + _0x220dc1 * _0x4fbe7d[3] + _0x17be00 * _0x4fbe7d[6];
      _0x8e6737[1] = _0x24d1b1 * _0x4fbe7d[1] + _0x220dc1 * _0x4fbe7d[4] + _0x17be00 * _0x4fbe7d[7];
      _0x8e6737[2] = _0x24d1b1 * _0x4fbe7d[2] + _0x220dc1 * _0x4fbe7d[5] + _0x17be00 * _0x4fbe7d[8];
    })(this, this, _0x3c8653);
    return this;
  }
  applyMatrix4(_0x3247e1) {
    (function (_0x9cce5f, _0x3c313a, _0x424d0a) {
      let _0x169715 = _0x3c313a[0];
      let _0x1af3b6 = _0x3c313a[1];
      let _0x46e842 = _0x3c313a[2];
      let _0x55ca92 = _0x424d0a[3] * _0x169715 + _0x424d0a[7] * _0x1af3b6 + _0x424d0a[11] * _0x46e842 + _0x424d0a[15];
      _0x55ca92 = _0x55ca92 || 1;
      _0x9cce5f[0] = (_0x424d0a[0] * _0x169715 + _0x424d0a[4] * _0x1af3b6 + _0x424d0a[8] * _0x46e842 + _0x424d0a[12]) / _0x55ca92;
      _0x9cce5f[1] = (_0x424d0a[1] * _0x169715 + _0x424d0a[5] * _0x1af3b6 + _0x424d0a[9] * _0x46e842 + _0x424d0a[13]) / _0x55ca92;
      _0x9cce5f[2] = (_0x424d0a[2] * _0x169715 + _0x424d0a[6] * _0x1af3b6 + _0x424d0a[10] * _0x46e842 + _0x424d0a[14]) / _0x55ca92;
    })(this, this, _0x3247e1);
    return this;
  }
  scaleRotateMatrix4(_0x37bf53) {
    (function (_0x593070, _0x2c73a1, _0x3c0eed) {
      let _0x2eed1e = _0x2c73a1[0];
      let _0x2a5964 = _0x2c73a1[1];
      let _0x58342e = _0x2c73a1[2];
      let _0x1b194d = _0x3c0eed[3] * _0x2eed1e + _0x3c0eed[7] * _0x2a5964 + _0x3c0eed[11] * _0x58342e + _0x3c0eed[15];
      _0x1b194d = _0x1b194d || 1;
      _0x593070[0] = (_0x3c0eed[0] * _0x2eed1e + _0x3c0eed[4] * _0x2a5964 + _0x3c0eed[8] * _0x58342e) / _0x1b194d;
      _0x593070[1] = (_0x3c0eed[1] * _0x2eed1e + _0x3c0eed[5] * _0x2a5964 + _0x3c0eed[9] * _0x58342e) / _0x1b194d;
      _0x593070[2] = (_0x3c0eed[2] * _0x2eed1e + _0x3c0eed[6] * _0x2a5964 + _0x3c0eed[10] * _0x58342e) / _0x1b194d;
    })(this, this, _0x37bf53);
    return this;
  }
  applyQuaternion(_0x19905d) {
    (function (_0x1d7b08, _0x5ddc6f, _0x57cd39) {
      let _0x34e1e1 = _0x5ddc6f[0];
      let _0x1898fa = _0x5ddc6f[1];
      let _0x26b3b8 = _0x5ddc6f[2];
      let _0x19724c = _0x57cd39[0];
      let _0xfda7f6 = _0x57cd39[1];
      let _0x78ad10 = _0x57cd39[2];
      let _0x546d8a = _0xfda7f6 * _0x26b3b8 - _0x78ad10 * _0x1898fa;
      let _0x1cabb5 = _0x78ad10 * _0x34e1e1 - _0x19724c * _0x26b3b8;
      let _0x653379 = _0x19724c * _0x1898fa - _0xfda7f6 * _0x34e1e1;
      let _0x33b2c0 = _0xfda7f6 * _0x653379 - _0x78ad10 * _0x1cabb5;
      let _0x2330e7 = _0x78ad10 * _0x546d8a - _0x19724c * _0x653379;
      let _0x2b03ff = _0x19724c * _0x1cabb5 - _0xfda7f6 * _0x546d8a;
      let _0x3df5cb = _0x57cd39[3] * 2;
      _0x546d8a *= _0x3df5cb;
      _0x1cabb5 *= _0x3df5cb;
      _0x653379 *= _0x3df5cb;
      _0x33b2c0 *= 2;
      _0x2330e7 *= 2;
      _0x2b03ff *= 2;
      _0x1d7b08[0] = _0x34e1e1 + _0x546d8a + _0x33b2c0;
      _0x1d7b08[1] = _0x1898fa + _0x1cabb5 + _0x2330e7;
      _0x1d7b08[2] = _0x26b3b8 + _0x653379 + _0x2b03ff;
    })(this, this, _0x19905d);
    return this;
  }
  angle(_0x815dcd) {
    return u(this, _0x815dcd);
  }
  lerp(_0x188176, _0x168878) {
    (function (_0x499348, _0x2ca497, _0x4630e3, _0x2b9b9b) {
      let _0x1d7125 = _0x2ca497[0];
      let _0x499f10 = _0x2ca497[1];
      let _0x18d039 = _0x2ca497[2];
      _0x499348[0] = _0x1d7125 + _0x2b9b9b * (_0x4630e3[0] - _0x1d7125);
      _0x499348[1] = _0x499f10 + _0x2b9b9b * (_0x4630e3[1] - _0x499f10);
      _0x499348[2] = _0x18d039 + _0x2b9b9b * (_0x4630e3[2] - _0x18d039);
    })(this, this, _0x188176, _0x168878);
    return this;
  }
  smoothLerp(_0x47b503, _0x2364df, _0xa4d903) {
    (function (_0x1329ab, _0xe4ee50, _0x365a3d, _0xba2c26, _0x19770e) {
      const _0x1da823 = Math.exp(-_0xba2c26 * _0x19770e);
      let _0xeb8ef5 = _0xe4ee50[0];
      let _0xf2aaa0 = _0xe4ee50[1];
      let _0x42ca23 = _0xe4ee50[2];
      _0x1329ab[0] = _0x365a3d[0] + (_0xeb8ef5 - _0x365a3d[0]) * _0x1da823;
      _0x1329ab[1] = _0x365a3d[1] + (_0xf2aaa0 - _0x365a3d[1]) * _0x1da823;
      _0x1329ab[2] = _0x365a3d[2] + (_0x42ca23 - _0x365a3d[2]) * _0x1da823;
    })(this, this, _0x47b503, _0x2364df, _0xa4d903);
    return this;
  }
  clone() {
    return new c(this[0], this[1], this[2]);
  }
  fromArray(_0x5cc2bc, _0xdf2cb4 = 0) {
    this[0] = _0x5cc2bc[_0xdf2cb4];
    this[1] = _0x5cc2bc[_0xdf2cb4 + 1];
    this[2] = _0x5cc2bc[_0xdf2cb4 + 2];
    return this;
  }
  toArray(_0x1d38b4 = [], _0x31444f = 0) {
    _0x1d38b4[_0x31444f] = this[0];
    _0x1d38b4[_0x31444f + 1] = this[1];
    _0x1d38b4[_0x31444f + 2] = this[2];
    return _0x1d38b4;
  }
  transformDirection(_0x3af1de) {
    const _0x18b422 = this[0];
    const _0x26c8a0 = this[1];
    const _0x3f0231 = this[2];
    this[0] = _0x3af1de[0] * _0x18b422 + _0x3af1de[4] * _0x26c8a0 + _0x3af1de[8] * _0x3f0231;
    this[1] = _0x3af1de[1] * _0x18b422 + _0x3af1de[5] * _0x26c8a0 + _0x3af1de[9] * _0x3f0231;
    this[2] = _0x3af1de[2] * _0x18b422 + _0x3af1de[6] * _0x26c8a0 + _0x3af1de[10] * _0x3f0231;
    return this.normalize();
  }
}
const d = new c();
let g = 1;
let f = 1;
let p = false;
class m {
  constructor(_0xc9862e, _0x3768ec = {}) {
    if (!_0xc9862e.canvas) {
      console.error("gl not passed as first argument to Geometry");
    }
    this.gl = _0xc9862e;
    this.attributes = _0x3768ec;
    this.id = g++;
    this.VAOs = {};
    this.drawRange = {
      start: 0,
      count: 0
    };
    this.instancedCount = 0;
    this.gl.renderer.bindVertexArray(null);
    this.gl.renderer.currentGeometry = null;
    this.glState = this.gl.renderer.state;
    for (let _0x267d7d in _0x3768ec) {
      this.addAttribute(_0x267d7d, _0x3768ec[_0x267d7d]);
    }
  }
  addAttribute(_0xd361be, _0x3228e4) {
    this.attributes[_0xd361be] = _0x3228e4;
    _0x3228e4.id = f++;
    _0x3228e4.size = _0x3228e4.size || 1;
    _0x3228e4.type = _0x3228e4.type || (_0x3228e4.data.constructor === Float32Array ? this.gl.FLOAT : _0x3228e4.data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT);
    _0x3228e4.target = _0xd361be === "index" ? this.gl.ELEMENT_ARRAY_BUFFER : this.gl.ARRAY_BUFFER;
    _0x3228e4.normalized = _0x3228e4.normalized || false;
    _0x3228e4.stride = _0x3228e4.stride || 0;
    _0x3228e4.offset = _0x3228e4.offset || 0;
    _0x3228e4.count = _0x3228e4.count || (_0x3228e4.stride ? _0x3228e4.data.byteLength / _0x3228e4.stride : _0x3228e4.data.length / _0x3228e4.size);
    _0x3228e4.divisor = _0x3228e4.instanced || 0;
    _0x3228e4.needsUpdate = false;
    _0x3228e4.usage = _0x3228e4.usage || this.gl.STATIC_DRAW;
    if (!_0x3228e4.buffer) {
      this.updateAttribute(_0x3228e4);
    }
    if (_0x3228e4.divisor) {
      this.isInstanced = true;
      if (this.instancedCount && this.instancedCount !== _0x3228e4.count * _0x3228e4.divisor) {
        console.warn("geometry has multiple instanced buffers of different length");
        return this.instancedCount = Math.min(this.instancedCount, _0x3228e4.count * _0x3228e4.divisor);
      }
      this.instancedCount = _0x3228e4.count * _0x3228e4.divisor;
    } else if (_0xd361be === "index") {
      this.drawRange.count = _0x3228e4.count;
    } else if (!this.attributes.index) {
      this.drawRange.count = Math.max(this.drawRange.count, _0x3228e4.count);
    }
  }
  updateAttribute(_0x207c6a) {
    const _0x4fa4cb = !_0x207c6a.buffer;
    if (_0x4fa4cb) {
      _0x207c6a.buffer = this.gl.createBuffer();
    }
    if (this.glState.boundBuffer !== _0x207c6a.buffer) {
      this.gl.bindBuffer(_0x207c6a.target, _0x207c6a.buffer);
      this.glState.boundBuffer = _0x207c6a.buffer;
    }
    if (_0x4fa4cb) {
      this.gl.bufferData(_0x207c6a.target, _0x207c6a.data, _0x207c6a.usage);
    } else {
      this.gl.bufferSubData(_0x207c6a.target, 0, _0x207c6a.data);
    }
    _0x207c6a.needsUpdate = false;
  }
  setIndex(_0x13241f) {
    this.addAttribute("index", _0x13241f);
  }
  setDrawRange(_0x3b6a73, _0x385472) {
    this.drawRange.start = _0x3b6a73;
    this.drawRange.count = _0x385472;
  }
  setInstancedCount(_0xbf9312) {
    this.instancedCount = _0xbf9312;
  }
  createVAO(_0x5d9c63) {
    this.VAOs[_0x5d9c63.attributeOrder] = this.gl.renderer.createVertexArray();
    this.gl.renderer.bindVertexArray(this.VAOs[_0x5d9c63.attributeOrder]);
    this.bindAttributes(_0x5d9c63);
  }
  bindAttributes(_0x2d48e2) {
    _0x2d48e2.attributeLocations.forEach((_0x5ac373, {
      name: _0x5197c0,
      type: _0x41e9d0
    }) => {
      if (!this.attributes[_0x5197c0]) {
        console.warn("active attribute " + _0x5197c0 + " not being supplied");
        return;
      }
      const _0x523585 = this.attributes[_0x5197c0];
      this.gl.bindBuffer(_0x523585.target, _0x523585.buffer);
      this.glState.boundBuffer = _0x523585.buffer;
      let _0x42afcf = 1;
      if (_0x41e9d0 === 35674) {
        _0x42afcf = 2;
      }
      if (_0x41e9d0 === 35675) {
        _0x42afcf = 3;
      }
      if (_0x41e9d0 === 35676) {
        _0x42afcf = 4;
      }
      const _0x2c5d3e = _0x523585.size / _0x42afcf;
      const _0x6c57fd = _0x42afcf === 1 ? 0 : _0x42afcf * _0x42afcf * 4;
      const _0x5322ae = _0x42afcf === 1 ? 0 : _0x42afcf * 4;
      for (let _0x527baa = 0; _0x527baa < _0x42afcf; _0x527baa++) {
        this.gl.vertexAttribPointer(_0x5ac373 + _0x527baa, _0x2c5d3e, _0x523585.type, _0x523585.normalized, _0x523585.stride + _0x6c57fd, _0x523585.offset + _0x527baa * _0x5322ae);
        this.gl.enableVertexAttribArray(_0x5ac373 + _0x527baa);
        this.gl.renderer.vertexAttribDivisor(_0x5ac373 + _0x527baa, _0x523585.divisor);
      }
    });
    if (this.attributes.index) {
      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.attributes.index.buffer);
    }
  }
  draw({
    program: _0x1aad45,
    mode: _0x20ee2d = this.gl.TRIANGLES
  }) {
    if (this.gl.renderer.currentGeometry !== this.id + "_" + _0x1aad45.attributeOrder) {
      if (!this.VAOs[_0x1aad45.attributeOrder]) {
        this.createVAO(_0x1aad45);
      }
      this.gl.renderer.bindVertexArray(this.VAOs[_0x1aad45.attributeOrder]);
      this.gl.renderer.currentGeometry = this.id + "_" + _0x1aad45.attributeOrder;
    }
    _0x1aad45.attributeLocations.forEach((_0x550d03, {
      name: _0x19aefc
    }) => {
      const _0xf8d921 = this.attributes[_0x19aefc];
      if (_0xf8d921.needsUpdate) {
        this.updateAttribute(_0xf8d921);
      }
    });
    let _0x47818f = 2;
    if (this.attributes.index?.type === this.gl.UNSIGNED_INT) {
      _0x47818f = 4;
    }
    if (this.isInstanced) {
      if (this.attributes.index) {
        this.gl.renderer.drawElementsInstanced(_0x20ee2d, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * _0x47818f, this.instancedCount);
      } else {
        this.gl.renderer.drawArraysInstanced(_0x20ee2d, this.drawRange.start, this.drawRange.count, this.instancedCount);
      }
    } else if (this.attributes.index) {
      this.gl.drawElements(_0x20ee2d, this.drawRange.count, this.attributes.index.type, this.attributes.index.offset + this.drawRange.start * _0x47818f);
    } else {
      this.gl.drawArrays(_0x20ee2d, this.drawRange.start, this.drawRange.count);
    }
  }
  getPosition() {
    const _0x4c0e53 = this.attributes.position;
    if (_0x4c0e53.data) {
      return _0x4c0e53;
    } else if (p) {
      return undefined;
    } else {
      console.warn("No position buffer data found to compute bounds");
      return p = true;
    }
  }
  computeBoundingBox(_0x179296) {
    _0x179296 ||= this.getPosition();
    const _0x2791b4 = _0x179296.data;
    const _0x68d69d = _0x179296.size;
    this.bounds ||= {
      min: new c(),
      max: new c(),
      center: new c(),
      scale: new c(),
      radius: Infinity
    };
    const _0x15b10f = this.bounds.min;
    const _0x535409 = this.bounds.max;
    const _0x5f5c96 = this.bounds.center;
    const _0x6499e3 = this.bounds.scale;
    _0x15b10f.set(Infinity);
    _0x535409.set(-Infinity);
    for (let _0x180bfe = 0, _0x333e3b = _0x2791b4.length; _0x180bfe < _0x333e3b; _0x180bfe += _0x68d69d) {
      const _0x3325a2 = _0x2791b4[_0x180bfe];
      const _0x5cc9b1 = _0x2791b4[_0x180bfe + 1];
      const _0x27d7e4 = _0x2791b4[_0x180bfe + 2];
      _0x15b10f.x = Math.min(_0x3325a2, _0x15b10f.x);
      _0x15b10f.y = Math.min(_0x5cc9b1, _0x15b10f.y);
      _0x15b10f.z = Math.min(_0x27d7e4, _0x15b10f.z);
      _0x535409.x = Math.max(_0x3325a2, _0x535409.x);
      _0x535409.y = Math.max(_0x5cc9b1, _0x535409.y);
      _0x535409.z = Math.max(_0x27d7e4, _0x535409.z);
    }
    _0x6499e3.sub(_0x535409, _0x15b10f);
    _0x5f5c96.add(_0x15b10f, _0x535409).divide(2);
  }
  computeBoundingSphere(_0x32a0d3) {
    _0x32a0d3 ||= this.getPosition();
    const _0x281b1f = _0x32a0d3.data;
    const _0x5ea0e0 = _0x32a0d3.size;
    if (!this.bounds) {
      this.computeBoundingBox(_0x32a0d3);
    }
    let _0x5e11fd = 0;
    for (let _0x63eb60 = 0, _0x1ee0b8 = _0x281b1f.length; _0x63eb60 < _0x1ee0b8; _0x63eb60 += _0x5ea0e0) {
      d.fromArray(_0x281b1f, _0x63eb60);
      _0x5e11fd = Math.max(_0x5e11fd, this.bounds.center.squaredDistance(d));
    }
    this.bounds.radius = Math.sqrt(_0x5e11fd);
  }
  remove() {
    for (let _0x215f7a in this.VAOs) {
      this.gl.renderer.deleteVertexArray(this.VAOs[_0x215f7a]);
      delete this.VAOs[_0x215f7a];
    }
    for (let _0x12dc52 in this.attributes) {
      this.gl.deleteBuffer(this.attributes[_0x12dc52].buffer);
      delete this.attributes[_0x12dc52];
    }
  }
}
let x = 1;
const b = {};
class M {
  constructor(_0x40f01c, {
    vertex: _0x59eb78,
    fragment: _0x206516,
    uniforms: _0x28c7da = {},
    transparent: _0xdcd84 = false,
    cullFace: _0x3c6431 = _0x40f01c.BACK,
    frontFace: _0x1c1bef = _0x40f01c.CCW,
    depthTest: _0x258681 = true,
    depthWrite: _0x25d4aa = true,
    depthFunc: _0x391f00 = _0x40f01c.LEQUAL
  } = {}) {
    if (!_0x40f01c.canvas) {
      console.error("gl not passed as first argument to Program");
    }
    this.gl = _0x40f01c;
    this.uniforms = _0x28c7da;
    this.id = x++;
    if (!_0x59eb78) {
      console.warn("vertex shader not supplied");
    }
    if (!_0x206516) {
      console.warn("fragment shader not supplied");
    }
    this.transparent = _0xdcd84;
    this.cullFace = _0x3c6431;
    this.frontFace = _0x1c1bef;
    this.depthTest = _0x258681;
    this.depthWrite = _0x25d4aa;
    this.depthFunc = _0x391f00;
    this.blendFunc = {};
    this.blendEquation = {};
    this.stencilFunc = {};
    this.stencilOp = {};
    if (this.transparent && !this.blendFunc.src) {
      if (this.gl.renderer.premultipliedAlpha) {
        this.setBlendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA);
      } else {
        this.setBlendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
      }
    }
    this.vertexShader = _0x40f01c.createShader(_0x40f01c.VERTEX_SHADER);
    this.fragmentShader = _0x40f01c.createShader(_0x40f01c.FRAGMENT_SHADER);
    this.program = _0x40f01c.createProgram();
    _0x40f01c.attachShader(this.program, this.vertexShader);
    _0x40f01c.attachShader(this.program, this.fragmentShader);
    this.setShaders({
      vertex: _0x59eb78,
      fragment: _0x206516
    });
  }
  setShaders({
    vertex: _0x1be5f9,
    fragment: _0x1dbeef
  }) {
    if (_0x1be5f9) {
      this.gl.shaderSource(this.vertexShader, _0x1be5f9);
      this.gl.compileShader(this.vertexShader);
      if (this.gl.getShaderInfoLog(this.vertexShader) !== "") {
        console.warn(this.gl.getShaderInfoLog(this.vertexShader) + "\nVertex Shader\n" + E(_0x1be5f9));
      }
    }
    if (_0x1dbeef) {
      this.gl.shaderSource(this.fragmentShader, _0x1dbeef);
      this.gl.compileShader(this.fragmentShader);
      if (this.gl.getShaderInfoLog(this.fragmentShader) !== "") {
        console.warn(this.gl.getShaderInfoLog(this.fragmentShader) + "\nFragment Shader\n" + E(_0x1dbeef));
      }
    }
    this.gl.linkProgram(this.program);
    if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
      return console.warn(this.gl.getProgramInfoLog(this.program));
    }
    this.uniformLocations = new Map();
    let _0x379d6b = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
    for (let _0x2c38fb = 0; _0x2c38fb < _0x379d6b; _0x2c38fb++) {
      let _0x4761d9 = this.gl.getActiveUniform(this.program, _0x2c38fb);
      this.uniformLocations.set(_0x4761d9, this.gl.getUniformLocation(this.program, _0x4761d9.name));
      const _0x3b52fd = _0x4761d9.name.match(/(\w+)/g);
      _0x4761d9.uniformName = _0x3b52fd[0];
      _0x4761d9.nameComponents = _0x3b52fd.slice(1);
    }
    this.attributeLocations = new Map();
    const _0xe9cb5 = [];
    const _0x5887d8 = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
    for (let _0x4cb1ec = 0; _0x4cb1ec < _0x5887d8; _0x4cb1ec++) {
      const _0x38039b = this.gl.getActiveAttrib(this.program, _0x4cb1ec);
      const _0x2d59a1 = this.gl.getAttribLocation(this.program, _0x38039b.name);
      if (_0x2d59a1 !== -1) {
        _0xe9cb5[_0x2d59a1] = _0x38039b.name;
        this.attributeLocations.set(_0x38039b, _0x2d59a1);
      }
    }
    this.attributeOrder = _0xe9cb5.join("");
  }
  setBlendFunc(_0x2d0a1c, _0x45536b, _0x4a309c, _0x46475e) {
    this.blendFunc.src = _0x2d0a1c;
    this.blendFunc.dst = _0x45536b;
    this.blendFunc.srcAlpha = _0x4a309c;
    this.blendFunc.dstAlpha = _0x46475e;
    if (_0x2d0a1c) {
      this.transparent = true;
    }
  }
  setBlendEquation(_0x3ab52f, _0x3ad7a9) {
    this.blendEquation.modeRGB = _0x3ab52f;
    this.blendEquation.modeAlpha = _0x3ad7a9;
  }
  setStencilFunc(_0x4942c3, _0x3f654f, _0x48c0a5) {
    this.stencilRef = _0x3f654f;
    this.stencilFunc.func = _0x4942c3;
    this.stencilFunc.ref = _0x3f654f;
    this.stencilFunc.mask = _0x48c0a5;
  }
  setStencilOp(_0x29a571, _0x500bb2, _0x53c996) {
    this.stencilOp.stencilFail = _0x29a571;
    this.stencilOp.depthFail = _0x500bb2;
    this.stencilOp.depthPass = _0x53c996;
  }
  applyState() {
    if (this.depthTest) {
      this.gl.renderer.enable(this.gl.DEPTH_TEST);
    } else {
      this.gl.renderer.disable(this.gl.DEPTH_TEST);
    }
    if (this.cullFace) {
      this.gl.renderer.enable(this.gl.CULL_FACE);
    } else {
      this.gl.renderer.disable(this.gl.CULL_FACE);
    }
    if (this.blendFunc.src) {
      this.gl.renderer.enable(this.gl.BLEND);
    } else {
      this.gl.renderer.disable(this.gl.BLEND);
    }
    if (this.cullFace) {
      this.gl.renderer.setCullFace(this.cullFace);
    }
    this.gl.renderer.setFrontFace(this.frontFace);
    this.gl.renderer.setDepthMask(this.depthWrite);
    this.gl.renderer.setDepthFunc(this.depthFunc);
    if (this.blendFunc.src) {
      this.gl.renderer.setBlendFunc(this.blendFunc.src, this.blendFunc.dst, this.blendFunc.srcAlpha, this.blendFunc.dstAlpha);
    }
    this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB, this.blendEquation.modeAlpha);
    if (this.stencilFunc.func || this.stencilOp.stencilFail) {
      this.gl.renderer.enable(this.gl.STENCIL_TEST);
    } else {
      this.gl.renderer.disable(this.gl.STENCIL_TEST);
    }
    this.gl.renderer.setStencilFunc(this.stencilFunc.func, this.stencilFunc.ref, this.stencilFunc.mask);
    this.gl.renderer.setStencilOp(this.stencilOp.stencilFail, this.stencilOp.depthFail, this.stencilOp.depthPass);
  }
  use({
    flipFaces: _0x57c4a7 = false
  } = {}) {
    let _0x50acaa = -1;
    if (this.gl.renderer.state.currentProgram !== this.id) {
      this.gl.useProgram(this.program);
      this.gl.renderer.state.currentProgram = this.id;
    }
    this.uniformLocations.forEach((_0x1509e7, _0x56b145) => {
      let _0xcbb02f = this.uniforms[_0x56b145.uniformName];
      for (const _0x17e76e of _0x56b145.nameComponents) {
        if (!_0xcbb02f) {
          break;
        }
        if (!(_0x17e76e in _0xcbb02f)) {
          if (Array.isArray(_0xcbb02f.value)) {
            break;
          }
          _0xcbb02f = undefined;
          break;
        }
        _0xcbb02f = _0xcbb02f[_0x17e76e];
      }
      if (!_0xcbb02f) {
        return A("Active uniform " + _0x56b145.name + " has not been supplied");
      }
      if (_0xcbb02f && _0xcbb02f.value === undefined) {
        return A(_0x56b145.name + " uniform is missing a value parameter");
      }
      if (_0xcbb02f.value.texture) {
        _0x50acaa += 1;
        _0xcbb02f.value.update(_0x50acaa);
        return _(this.gl, _0x56b145.type, _0x1509e7, _0x50acaa);
      }
      if (_0xcbb02f.value.length && _0xcbb02f.value[0].texture) {
        const _0x38f595 = [];
        _0xcbb02f.value.forEach(_0x17f833 => {
          _0x50acaa += 1;
          _0x17f833.update(_0x50acaa);
          _0x38f595.push(_0x50acaa);
        });
        return _(this.gl, _0x56b145.type, _0x1509e7, _0x38f595);
      }
      _(this.gl, _0x56b145.type, _0x1509e7, _0xcbb02f.value);
    });
    this.applyState();
    if (_0x57c4a7) {
      this.gl.renderer.setFrontFace(this.frontFace === this.gl.CCW ? this.gl.CW : this.gl.CCW);
    }
  }
  remove() {
    this.gl.deleteProgram(this.program);
  }
}
function _(_0x40ee32, _0x3aea21, _0x31a98e, _0x23ff32) {
  _0x23ff32 = _0x23ff32.length ? function (_0x2774dd) {
    const _0x29689c = _0x2774dd.length;
    const _0x4e93a1 = _0x2774dd[0].length;
    if (_0x4e93a1 === undefined) {
      return _0x2774dd;
    }
    const _0x29cd9f = _0x29689c * _0x4e93a1;
    let _0xeb62a = b[_0x29cd9f];
    if (!_0xeb62a) {
      b[_0x29cd9f] = _0xeb62a = new Float32Array(_0x29cd9f);
    }
    for (let _0x2f4282 = 0; _0x2f4282 < _0x29689c; _0x2f4282++) {
      _0xeb62a.set(_0x2774dd[_0x2f4282], _0x2f4282 * _0x4e93a1);
    }
    return _0xeb62a;
  }(_0x23ff32) : _0x23ff32;
  const _0x5e516d = _0x40ee32.renderer.state.uniformLocations.get(_0x31a98e);
  if (_0x23ff32.length) {
    if (_0x5e516d === undefined || _0x5e516d.length !== _0x23ff32.length) {
      _0x40ee32.renderer.state.uniformLocations.set(_0x31a98e, _0x23ff32.slice(0));
    } else {
      if (function (_0x10de8f, _0x200ef6) {
        if (_0x10de8f.length !== _0x200ef6.length) {
          return false;
        }
        for (let _0x26f54c = 0, _0x20d591 = _0x10de8f.length; _0x26f54c < _0x20d591; _0x26f54c++) {
          if (_0x10de8f[_0x26f54c] !== _0x200ef6[_0x26f54c]) {
            return false;
          }
        }
        return true;
      }(_0x5e516d, _0x23ff32)) {
        return;
      }
      if (_0x5e516d.set) {
        _0x5e516d.set(_0x23ff32);
      } else {
        (function (_0x4a7aa9, _0x81eeb1) {
          for (let _0x2bf19a = 0, _0x52b721 = _0x4a7aa9.length; _0x2bf19a < _0x52b721; _0x2bf19a++) {
            _0x4a7aa9[_0x2bf19a] = _0x81eeb1[_0x2bf19a];
          }
        })(_0x5e516d, _0x23ff32);
      }
      _0x40ee32.renderer.state.uniformLocations.set(_0x31a98e, _0x5e516d);
    }
  } else {
    if (_0x5e516d === _0x23ff32) {
      return;
    }
    _0x40ee32.renderer.state.uniformLocations.set(_0x31a98e, _0x23ff32);
  }
  switch (_0x3aea21) {
    case 5126:
      if (_0x23ff32.length) {
        return _0x40ee32.uniform1fv(_0x31a98e, _0x23ff32);
      } else {
        return _0x40ee32.uniform1f(_0x31a98e, _0x23ff32);
      }
    case 35664:
      return _0x40ee32.uniform2fv(_0x31a98e, _0x23ff32);
    case 35665:
      return _0x40ee32.uniform3fv(_0x31a98e, _0x23ff32);
    case 35666:
      return _0x40ee32.uniform4fv(_0x31a98e, _0x23ff32);
    case 35670:
    case 5124:
    case 35678:
    case 36306:
    case 35680:
    case 36289:
      if (_0x23ff32.length) {
        return _0x40ee32.uniform1iv(_0x31a98e, _0x23ff32);
      } else {
        return _0x40ee32.uniform1i(_0x31a98e, _0x23ff32);
      }
    case 35671:
    case 35667:
      return _0x40ee32.uniform2iv(_0x31a98e, _0x23ff32);
    case 35672:
    case 35668:
      return _0x40ee32.uniform3iv(_0x31a98e, _0x23ff32);
    case 35673:
    case 35669:
      return _0x40ee32.uniform4iv(_0x31a98e, _0x23ff32);
    case 35674:
      return _0x40ee32.uniformMatrix2fv(_0x31a98e, false, _0x23ff32);
    case 35675:
      return _0x40ee32.uniformMatrix3fv(_0x31a98e, false, _0x23ff32);
    case 35676:
      return _0x40ee32.uniformMatrix4fv(_0x31a98e, false, _0x23ff32);
  }
}
function E(_0x25340f) {
  let _0x478d14 = _0x25340f.split("\n");
  for (let _0x444da0 = 0; _0x444da0 < _0x478d14.length; _0x444da0++) {
    _0x478d14[_0x444da0] = _0x444da0 + 1 + ": " + _0x478d14[_0x444da0];
  }
  return _0x478d14.join("\n");
}
let v = 0;
function A(_0x21e2b0) {
  if (!(v > 100)) {
    console.warn(_0x21e2b0);
    v++;
    if (v > 100) {
      console.warn("More than 100 program warnings - stopping logs.");
    }
  }
}
const w = new c();
let F = 1;
class y {
  constructor({
    canvas: _0x5be411 = document.createElement("canvas"),
    width: _0x3beafc = 300,
    height: _0x4869f1 = 150,
    dpr: _0x4a2e1e = 1,
    alpha: _0x279230 = false,
    depth: _0x5ac956 = true,
    stencil: _0x428224 = false,
    antialias: _0x443cf1 = false,
    premultipliedAlpha: _0x42d8f1 = false,
    preserveDrawingBuffer: _0x2e53ab = false,
    powerPreference: _0x4d665a = "default",
    autoClear: _0x5cf224 = true,
    webgl: _0x3cba08 = 2
  } = {}) {
    const _0x59d40d = {
      alpha: _0x279230,
      depth: _0x5ac956,
      stencil: _0x428224,
      antialias: _0x443cf1,
      premultipliedAlpha: _0x42d8f1,
      preserveDrawingBuffer: _0x2e53ab,
      powerPreference: _0x4d665a
    };
    this.dpr = _0x4a2e1e;
    this.alpha = _0x279230;
    this.color = true;
    this.depth = _0x5ac956;
    this.stencil = _0x428224;
    this.premultipliedAlpha = _0x42d8f1;
    this.autoClear = _0x5cf224;
    this.id = F++;
    if (_0x3cba08 === 2) {
      this.gl = _0x5be411.getContext("webgl2", _0x59d40d);
    }
    this.isWebgl2 = !!this.gl;
    this.gl ||= _0x5be411.getContext("webgl", _0x59d40d);
    if (!this.gl) {
      console.error("unable to create webgl context");
    }
    this.gl.renderer = this;
    this.setSize(_0x3beafc, _0x4869f1);
    this.state = {};
    this.state.blendFunc = {
      src: this.gl.ONE,
      dst: this.gl.ZERO
    };
    this.state.blendEquation = {
      modeRGB: this.gl.FUNC_ADD
    };
    this.state.cullFace = false;
    this.state.frontFace = this.gl.CCW;
    this.state.depthMask = true;
    this.state.depthFunc = this.gl.LEQUAL;
    this.state.premultiplyAlpha = false;
    this.state.flipY = false;
    this.state.unpackAlignment = 4;
    this.state.framebuffer = null;
    this.state.viewport = {
      x: 0,
      y: 0,
      width: null,
      height: null
    };
    this.state.textureUnits = [];
    this.state.activeTextureUnit = 0;
    this.state.boundBuffer = null;
    this.state.uniformLocations = new Map();
    this.state.currentProgram = null;
    this.extensions = {};
    if (this.isWebgl2) {
      this.getExtension("EXT_color_buffer_float");
      this.getExtension("OES_texture_float_linear");
    } else {
      this.getExtension("OES_texture_float");
      this.getExtension("OES_texture_float_linear");
      this.getExtension("OES_texture_half_float");
      this.getExtension("OES_texture_half_float_linear");
      this.getExtension("OES_element_index_uint");
      this.getExtension("OES_standard_derivatives");
      this.getExtension("EXT_sRGB");
      this.getExtension("WEBGL_depth_texture");
      this.getExtension("WEBGL_draw_buffers");
    }
    this.getExtension("WEBGL_compressed_texture_astc");
    this.getExtension("EXT_texture_compression_bptc");
    this.getExtension("WEBGL_compressed_texture_s3tc");
    this.getExtension("WEBGL_compressed_texture_etc1");
    this.getExtension("WEBGL_compressed_texture_pvrtc");
    this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
    this.vertexAttribDivisor = this.getExtension("ANGLE_instanced_arrays", "vertexAttribDivisor", "vertexAttribDivisorANGLE");
    this.drawArraysInstanced = this.getExtension("ANGLE_instanced_arrays", "drawArraysInstanced", "drawArraysInstancedANGLE");
    this.drawElementsInstanced = this.getExtension("ANGLE_instanced_arrays", "drawElementsInstanced", "drawElementsInstancedANGLE");
    this.createVertexArray = this.getExtension("OES_vertex_array_object", "createVertexArray", "createVertexArrayOES");
    this.bindVertexArray = this.getExtension("OES_vertex_array_object", "bindVertexArray", "bindVertexArrayOES");
    this.deleteVertexArray = this.getExtension("OES_vertex_array_object", "deleteVertexArray", "deleteVertexArrayOES");
    this.drawBuffers = this.getExtension("WEBGL_draw_buffers", "drawBuffers", "drawBuffersWEBGL");
    this.parameters = {};
    this.parameters.maxTextureUnits = this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    this.parameters.maxAnisotropy = this.getExtension("EXT_texture_filter_anisotropic") ? this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
  }
  setSize(_0x3bbeb7, _0x18612d) {
    this.width = _0x3bbeb7;
    this.height = _0x18612d;
    this.gl.canvas.width = _0x3bbeb7 * this.dpr;
    this.gl.canvas.height = _0x18612d * this.dpr;
    if (this.gl.canvas.style) {
      Object.assign(this.gl.canvas.style, {
        width: _0x3bbeb7 + "px",
        height: _0x18612d + "px"
      });
    }
  }
  setViewport(_0x59d4b4, _0xb9f0fa, _0x402049 = 0, _0x3657e7 = 0) {
    if (this.state.viewport.width !== _0x59d4b4 || this.state.viewport.height !== _0xb9f0fa) {
      this.state.viewport.width = _0x59d4b4;
      this.state.viewport.height = _0xb9f0fa;
      this.state.viewport.x = _0x402049;
      this.state.viewport.y = _0x3657e7;
      this.gl.viewport(_0x402049, _0x3657e7, _0x59d4b4, _0xb9f0fa);
    }
  }
  setScissor(_0x4c1c3f, _0x409172, _0x52b31a = 0, _0x2a038f = 0) {
    this.gl.scissor(_0x52b31a, _0x2a038f, _0x4c1c3f, _0x409172);
  }
  enable(_0x167d48) {
    if (this.state[_0x167d48] !== true) {
      this.gl.enable(_0x167d48);
      this.state[_0x167d48] = true;
    }
  }
  disable(_0x5cf59e) {
    if (this.state[_0x5cf59e] !== false) {
      this.gl.disable(_0x5cf59e);
      this.state[_0x5cf59e] = false;
    }
  }
  setBlendFunc(_0x3ee6d5, _0x12766c, _0x58a2b6, _0x3a74f7) {
    if (this.state.blendFunc.src !== _0x3ee6d5 || this.state.blendFunc.dst !== _0x12766c || this.state.blendFunc.srcAlpha !== _0x58a2b6 || this.state.blendFunc.dstAlpha !== _0x3a74f7) {
      this.state.blendFunc.src = _0x3ee6d5;
      this.state.blendFunc.dst = _0x12766c;
      this.state.blendFunc.srcAlpha = _0x58a2b6;
      this.state.blendFunc.dstAlpha = _0x3a74f7;
      if (_0x58a2b6 !== undefined) {
        this.gl.blendFuncSeparate(_0x3ee6d5, _0x12766c, _0x58a2b6, _0x3a74f7);
      } else {
        this.gl.blendFunc(_0x3ee6d5, _0x12766c);
      }
    }
  }
  setBlendEquation(_0x6f24ff, _0x157908) {
    _0x6f24ff = _0x6f24ff || this.gl.FUNC_ADD;
    if (this.state.blendEquation.modeRGB !== _0x6f24ff || this.state.blendEquation.modeAlpha !== _0x157908) {
      this.state.blendEquation.modeRGB = _0x6f24ff;
      this.state.blendEquation.modeAlpha = _0x157908;
      if (_0x157908 !== undefined) {
        this.gl.blendEquationSeparate(_0x6f24ff, _0x157908);
      } else {
        this.gl.blendEquation(_0x6f24ff);
      }
    }
  }
  setCullFace(_0x2fc9a5) {
    if (this.state.cullFace !== _0x2fc9a5) {
      this.state.cullFace = _0x2fc9a5;
      this.gl.cullFace(_0x2fc9a5);
    }
  }
  setFrontFace(_0x1d8a37) {
    if (this.state.frontFace !== _0x1d8a37) {
      this.state.frontFace = _0x1d8a37;
      this.gl.frontFace(_0x1d8a37);
    }
  }
  setDepthMask(_0x3f3e87) {
    if (this.state.depthMask !== _0x3f3e87) {
      this.state.depthMask = _0x3f3e87;
      this.gl.depthMask(_0x3f3e87);
    }
  }
  setDepthFunc(_0x2f0a91) {
    if (this.state.depthFunc !== _0x2f0a91) {
      this.state.depthFunc = _0x2f0a91;
      this.gl.depthFunc(_0x2f0a91);
    }
  }
  setStencilMask(_0x36eb13) {
    if (this.state.stencilMask !== _0x36eb13) {
      this.state.stencilMask = _0x36eb13;
      this.gl.stencilMask(_0x36eb13);
    }
  }
  setStencilFunc(_0x15b242, _0x980ef0, _0x18fa8e) {
    if (this.state.stencilFunc !== _0x15b242 || this.state.stencilRef !== _0x980ef0 || this.state.stencilFuncMask !== _0x18fa8e) {
      this.state.stencilFunc = _0x15b242 || this.gl.ALWAYS;
      this.state.stencilRef = _0x980ef0 || 0;
      this.state.stencilFuncMask = _0x18fa8e || 0;
      this.gl.stencilFunc(_0x15b242 || this.gl.ALWAYS, _0x980ef0 || 0, _0x18fa8e || 0);
    }
  }
  setStencilOp(_0x33f3f2, _0x4449b9, _0x558afd) {
    if (this.state.stencilFail !== _0x33f3f2 || this.state.stencilDepthFail !== _0x4449b9 || this.state.stencilDepthPass !== _0x558afd) {
      this.state.stencilFail = _0x33f3f2;
      this.state.stencilDepthFail = _0x4449b9;
      this.state.stencilDepthPass = _0x558afd;
      this.gl.stencilOp(_0x33f3f2, _0x4449b9, _0x558afd);
    }
  }
  activeTexture(_0x4833b0) {
    if (this.state.activeTextureUnit !== _0x4833b0) {
      this.state.activeTextureUnit = _0x4833b0;
      this.gl.activeTexture(this.gl.TEXTURE0 + _0x4833b0);
    }
  }
  bindFramebuffer({
    target: _0x40b8da = this.gl.FRAMEBUFFER,
    buffer: _0x3516a8 = null
  } = {}) {
    if (this.state.framebuffer !== _0x3516a8) {
      this.state.framebuffer = _0x3516a8;
      this.gl.bindFramebuffer(_0x40b8da, _0x3516a8);
    }
  }
  getExtension(_0x271b96, _0x18ec37, _0x22b4fd) {
    if (_0x18ec37 && this.gl[_0x18ec37]) {
      return this.gl[_0x18ec37].bind(this.gl);
    } else {
      this.extensions[_0x271b96] ||= this.gl.getExtension(_0x271b96);
      if (_0x18ec37) {
        if (this.extensions[_0x271b96]) {
          return this.extensions[_0x271b96][_0x22b4fd].bind(this.extensions[_0x271b96]);
        } else {
          return null;
        }
      } else {
        return this.extensions[_0x271b96];
      }
    }
  }
  sortOpaque(_0x9357af, _0x58cf0a) {
    if (_0x9357af.renderOrder !== _0x58cf0a.renderOrder) {
      return _0x9357af.renderOrder - _0x58cf0a.renderOrder;
    } else if (_0x9357af.program.id !== _0x58cf0a.program.id) {
      return _0x9357af.program.id - _0x58cf0a.program.id;
    } else if (_0x9357af.zDepth !== _0x58cf0a.zDepth) {
      return _0x9357af.zDepth - _0x58cf0a.zDepth;
    } else {
      return _0x58cf0a.id - _0x9357af.id;
    }
  }
  sortTransparent(_0x60107d, _0x5018d8) {
    if (_0x60107d.renderOrder !== _0x5018d8.renderOrder) {
      return _0x60107d.renderOrder - _0x5018d8.renderOrder;
    } else if (_0x60107d.zDepth !== _0x5018d8.zDepth) {
      return _0x5018d8.zDepth - _0x60107d.zDepth;
    } else {
      return _0x5018d8.id - _0x60107d.id;
    }
  }
  sortUI(_0x40f42a, _0x16b35e) {
    if (_0x40f42a.renderOrder !== _0x16b35e.renderOrder) {
      return _0x40f42a.renderOrder - _0x16b35e.renderOrder;
    } else if (_0x40f42a.program.id !== _0x16b35e.program.id) {
      return _0x40f42a.program.id - _0x16b35e.program.id;
    } else {
      return _0x16b35e.id - _0x40f42a.id;
    }
  }
  getRenderList({
    scene: _0xa311e5,
    camera: _0x20f305,
    frustumCull: _0x7f67b8,
    sort: _0x119cff
  }) {
    let _0xc9804e = [];
    if (_0x20f305 && _0x7f67b8) {
      _0x20f305.updateFrustum();
    }
    _0xa311e5.traverse(_0x1ae453 => {
      if (!_0x1ae453.visible) {
        return true;
      }
      if (_0x1ae453.draw) {
        if (!_0x7f67b8 || !_0x1ae453.frustumCulled || !_0x20f305 || !!_0x20f305.frustumIntersectsMesh(_0x1ae453)) {
          _0xc9804e.push(_0x1ae453);
        }
      }
    });
    if (_0x119cff) {
      const _0x500efd = [];
      const _0x37fb51 = [];
      const _0x4e02f4 = [];
      _0xc9804e.forEach(_0x27adb1 => {
        if (_0x27adb1.program.transparent) {
          if (_0x27adb1.program.depthTest) {
            _0x37fb51.push(_0x27adb1);
          } else {
            _0x4e02f4.push(_0x27adb1);
          }
        } else {
          _0x500efd.push(_0x27adb1);
        }
        _0x27adb1.zDepth = 0;
        if (_0x27adb1.renderOrder === 0 && _0x27adb1.program.depthTest && _0x20f305) {
          _0x27adb1.worldMatrix.getTranslation(w);
          w.applyMatrix4(_0x20f305.projectionViewMatrix);
          _0x27adb1.zDepth = w.z;
        }
      });
      _0x500efd.sort(this.sortOpaque);
      _0x37fb51.sort(this.sortTransparent);
      _0x4e02f4.sort(this.sortUI);
      _0xc9804e = _0x500efd.concat(_0x37fb51, _0x4e02f4);
    }
    return _0xc9804e;
  }
  render({
    scene: _0x2e4d4c,
    camera: _0x169ae2,
    target: _0x3c8e6b = null,
    update: _0x49e519 = true,
    sort: _0x58ce9c = true,
    frustumCull: _0x89608e = true,
    clear: _0x32d00d
  }) {
    if (_0x3c8e6b === null) {
      this.bindFramebuffer();
      this.setViewport(this.width * this.dpr, this.height * this.dpr);
    } else {
      this.bindFramebuffer(_0x3c8e6b);
      this.setViewport(_0x3c8e6b.width, _0x3c8e6b.height);
    }
    if (_0x32d00d || this.autoClear && _0x32d00d !== false) {
      if (!!this.depth && (!_0x3c8e6b || !!_0x3c8e6b.depth)) {
        this.enable(this.gl.DEPTH_TEST);
        this.setDepthMask(true);
      }
      if (this.stencil || !_0x3c8e6b || _0x3c8e6b.stencil) {
        this.enable(this.gl.STENCIL_TEST);
        this.setStencilMask(255);
      }
      this.gl.clear((this.color ? this.gl.COLOR_BUFFER_BIT : 0) | (this.depth ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.stencil ? this.gl.STENCIL_BUFFER_BIT : 0));
    }
    if (_0x49e519) {
      _0x2e4d4c.updateMatrixWorld();
    }
    if (_0x169ae2) {
      _0x169ae2.updateMatrixWorld();
    }
    this.getRenderList({
      scene: _0x2e4d4c,
      camera: _0x169ae2,
      frustumCull: _0x89608e,
      sort: _0x58ce9c
    }).forEach(_0x5785c5 => {
      _0x5785c5.draw({
        camera: _0x169ae2
      });
    });
  }
}
function C(_0x26bfca, _0x535f85, _0x35a44e) {
  let _0x1af328 = _0x535f85[0];
  let _0x40522f = _0x535f85[1];
  let _0x1f432a = _0x535f85[2];
  let _0x28ef46 = _0x535f85[3];
  let _0x33a37b = _0x35a44e[0];
  let _0x2ff8cb = _0x35a44e[1];
  let _0x37f586 = _0x35a44e[2];
  let _0x5a0377 = _0x35a44e[3];
  _0x26bfca[0] = _0x1af328 * _0x5a0377 + _0x28ef46 * _0x33a37b + _0x40522f * _0x37f586 - _0x1f432a * _0x2ff8cb;
  _0x26bfca[1] = _0x40522f * _0x5a0377 + _0x28ef46 * _0x2ff8cb + _0x1f432a * _0x33a37b - _0x1af328 * _0x37f586;
  _0x26bfca[2] = _0x1f432a * _0x5a0377 + _0x28ef46 * _0x37f586 + _0x1af328 * _0x2ff8cb - _0x40522f * _0x33a37b;
  _0x26bfca[3] = _0x28ef46 * _0x5a0377 - _0x1af328 * _0x33a37b - _0x40522f * _0x2ff8cb - _0x1f432a * _0x37f586;
  return _0x26bfca;
}
const S = function (_0x4a8957, _0x5b2b7a) {
  _0x4a8957[0] = _0x5b2b7a[0];
  _0x4a8957[1] = _0x5b2b7a[1];
  _0x4a8957[2] = _0x5b2b7a[2];
  _0x4a8957[3] = _0x5b2b7a[3];
  return _0x4a8957;
};
const R = function (_0x2f8a61, _0x3cd866, _0x56a22c, _0x2f3cd0, _0x1033fe) {
  _0x2f8a61[0] = _0x3cd866;
  _0x2f8a61[1] = _0x56a22c;
  _0x2f8a61[2] = _0x2f3cd0;
  _0x2f8a61[3] = _0x1033fe;
  return _0x2f8a61;
};
const O = function (_0xe27ee6, _0xd9c52) {
  return _0xe27ee6[0] * _0xd9c52[0] + _0xe27ee6[1] * _0xd9c52[1] + _0xe27ee6[2] * _0xd9c52[2] + _0xe27ee6[3] * _0xd9c52[3];
};
const L = function (_0x2085d0, _0x6e265c) {
  let _0xf795 = _0x6e265c[0];
  let _0x1b8166 = _0x6e265c[1];
  let _0x2d0844 = _0x6e265c[2];
  let _0x3a1ea7 = _0x6e265c[3];
  let _0x2d242f = _0xf795 * _0xf795 + _0x1b8166 * _0x1b8166 + _0x2d0844 * _0x2d0844 + _0x3a1ea7 * _0x3a1ea7;
  if (_0x2d242f > 0) {
    _0x2d242f = 1 / Math.sqrt(_0x2d242f);
  }
  _0x2085d0[0] = _0xf795 * _0x2d242f;
  _0x2085d0[1] = _0x1b8166 * _0x2d242f;
  _0x2085d0[2] = _0x2d0844 * _0x2d242f;
  _0x2085d0[3] = _0x3a1ea7 * _0x2d242f;
  return _0x2085d0;
};
class T extends Array {
  constructor(_0x5bac50 = 0, _0x35f525 = 0, _0x488f35 = 0, _0x5e3e42 = 1) {
    super(_0x5bac50, _0x35f525, _0x488f35, _0x5e3e42);
    this.onChange = () => {};
    this._target = this;
    const _0x5c92f3 = ["0", "1", "2", "3"];
    return new Proxy(this, {
      set(_0x208b5b, _0x313db4) {
        const _0x3d5aed = Reflect.set(...arguments);
        if (_0x3d5aed && _0x5c92f3.includes(_0x313db4)) {
          _0x208b5b.onChange();
        }
        return _0x3d5aed;
      }
    });
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  get w() {
    return this[3];
  }
  set x(_0x56117c) {
    this._target[0] = _0x56117c;
    this.onChange();
  }
  set y(_0x16f8ae) {
    this._target[1] = _0x16f8ae;
    this.onChange();
  }
  set z(_0x108fbb) {
    this._target[2] = _0x108fbb;
    this.onChange();
  }
  set w(_0x2ce709) {
    this._target[3] = _0x2ce709;
    this.onChange();
  }
  identity() {
    var _0x275b9d;
    (_0x275b9d = this._target)[0] = 0;
    _0x275b9d[1] = 0;
    _0x275b9d[2] = 0;
    _0x275b9d[3] = 1;
    this.onChange();
    return this;
  }
  set(_0x5b5e40, _0x305665, _0x8826c8, _0x2f45c7) {
    if (_0x5b5e40.length) {
      return this.copy(_0x5b5e40);
    } else {
      R(this._target, _0x5b5e40, _0x305665, _0x8826c8, _0x2f45c7);
      this.onChange();
      return this;
    }
  }
  rotateX(_0x3ded06) {
    (function (_0x13b167, _0x419289, _0x4e17aa) {
      _0x4e17aa *= 0.5;
      let _0x4bcd62 = _0x419289[0];
      let _0x49592d = _0x419289[1];
      let _0x1aa8e5 = _0x419289[2];
      let _0x396c46 = _0x419289[3];
      let _0x3ee2c9 = Math.sin(_0x4e17aa);
      let _0xb9f037 = Math.cos(_0x4e17aa);
      _0x13b167[0] = _0x4bcd62 * _0xb9f037 + _0x396c46 * _0x3ee2c9;
      _0x13b167[1] = _0x49592d * _0xb9f037 + _0x1aa8e5 * _0x3ee2c9;
      _0x13b167[2] = _0x1aa8e5 * _0xb9f037 - _0x49592d * _0x3ee2c9;
      _0x13b167[3] = _0x396c46 * _0xb9f037 - _0x4bcd62 * _0x3ee2c9;
    })(this._target, this._target, _0x3ded06);
    this.onChange();
    return this;
  }
  rotateY(_0x4ece9b) {
    (function (_0x27b017, _0x6578c, _0x236b54) {
      _0x236b54 *= 0.5;
      let _0x3d52b1 = _0x6578c[0];
      let _0x2e3113 = _0x6578c[1];
      let _0x23d61e = _0x6578c[2];
      let _0x5f437e = _0x6578c[3];
      let _0x5b17e9 = Math.sin(_0x236b54);
      let _0x17139d = Math.cos(_0x236b54);
      _0x27b017[0] = _0x3d52b1 * _0x17139d - _0x23d61e * _0x5b17e9;
      _0x27b017[1] = _0x2e3113 * _0x17139d + _0x5f437e * _0x5b17e9;
      _0x27b017[2] = _0x23d61e * _0x17139d + _0x3d52b1 * _0x5b17e9;
      _0x27b017[3] = _0x5f437e * _0x17139d - _0x2e3113 * _0x5b17e9;
    })(this._target, this._target, _0x4ece9b);
    this.onChange();
    return this;
  }
  rotateZ(_0xa70352) {
    (function (_0x1c17eb, _0x3dc3bc, _0xbf0983) {
      _0xbf0983 *= 0.5;
      let _0xd89c9 = _0x3dc3bc[0];
      let _0xe4ed5b = _0x3dc3bc[1];
      let _0x56b117 = _0x3dc3bc[2];
      let _0x13bc94 = _0x3dc3bc[3];
      let _0x546371 = Math.sin(_0xbf0983);
      let _0x5840ce = Math.cos(_0xbf0983);
      _0x1c17eb[0] = _0xd89c9 * _0x5840ce + _0xe4ed5b * _0x546371;
      _0x1c17eb[1] = _0xe4ed5b * _0x5840ce - _0xd89c9 * _0x546371;
      _0x1c17eb[2] = _0x56b117 * _0x5840ce + _0x13bc94 * _0x546371;
      _0x1c17eb[3] = _0x13bc94 * _0x5840ce - _0x56b117 * _0x546371;
    })(this._target, this._target, _0xa70352);
    this.onChange();
    return this;
  }
  inverse(_0x3b4a31 = this._target) {
    (function (_0xd4e8f0, _0x429430) {
      let _0x35bfd2 = _0x429430[0];
      let _0x21c1fb = _0x429430[1];
      let _0x4f6c8a = _0x429430[2];
      let _0x36b8ca = _0x429430[3];
      let _0x4dc788 = _0x35bfd2 * _0x35bfd2 + _0x21c1fb * _0x21c1fb + _0x4f6c8a * _0x4f6c8a + _0x36b8ca * _0x36b8ca;
      let _0x16a43e = _0x4dc788 ? 1 / _0x4dc788 : 0;
      _0xd4e8f0[0] = -_0x35bfd2 * _0x16a43e;
      _0xd4e8f0[1] = -_0x21c1fb * _0x16a43e;
      _0xd4e8f0[2] = -_0x4f6c8a * _0x16a43e;
      _0xd4e8f0[3] = _0x36b8ca * _0x16a43e;
    })(this._target, _0x3b4a31);
    this.onChange();
    return this;
  }
  conjugate(_0x65715c = this._target) {
    var _0x5e3fd7;
    var _0x53e4d2;
    _0x5e3fd7 = this._target;
    _0x53e4d2 = _0x65715c;
    _0x5e3fd7[0] = -_0x53e4d2[0];
    _0x5e3fd7[1] = -_0x53e4d2[1];
    _0x5e3fd7[2] = -_0x53e4d2[2];
    _0x5e3fd7[3] = _0x53e4d2[3];
    this.onChange();
    return this;
  }
  copy(_0x486171) {
    S(this._target, _0x486171);
    this.onChange();
    return this;
  }
  normalize(_0x383ab2 = this._target) {
    L(this._target, _0x383ab2);
    this.onChange();
    return this;
  }
  multiply(_0x54cc78, _0x5247ec) {
    if (_0x5247ec) {
      C(this._target, _0x54cc78, _0x5247ec);
    } else {
      C(this._target, this._target, _0x54cc78);
    }
    this.onChange();
    return this;
  }
  dot(_0xa41187) {
    return O(this._target, _0xa41187);
  }
  fromMatrix3(_0x5a7d26) {
    (function (_0x32b801, _0x37370f) {
      let _0x2c37ff;
      let _0x90001b = _0x37370f[0] + _0x37370f[4] + _0x37370f[8];
      if (_0x90001b > 0) {
        _0x2c37ff = Math.sqrt(_0x90001b + 1);
        _0x32b801[3] = _0x2c37ff * 0.5;
        _0x2c37ff = 0.5 / _0x2c37ff;
        _0x32b801[0] = (_0x37370f[5] - _0x37370f[7]) * _0x2c37ff;
        _0x32b801[1] = (_0x37370f[6] - _0x37370f[2]) * _0x2c37ff;
        _0x32b801[2] = (_0x37370f[1] - _0x37370f[3]) * _0x2c37ff;
      } else {
        let _0x24b775 = 0;
        if (_0x37370f[4] > _0x37370f[0]) {
          _0x24b775 = 1;
        }
        if (_0x37370f[8] > _0x37370f[_0x24b775 * 3 + _0x24b775]) {
          _0x24b775 = 2;
        }
        let _0x28c578 = (_0x24b775 + 1) % 3;
        let _0x3b9a45 = (_0x24b775 + 2) % 3;
        _0x2c37ff = Math.sqrt(_0x37370f[_0x24b775 * 3 + _0x24b775] - _0x37370f[_0x28c578 * 3 + _0x28c578] - _0x37370f[_0x3b9a45 * 3 + _0x3b9a45] + 1);
        _0x32b801[_0x24b775] = _0x2c37ff * 0.5;
        _0x2c37ff = 0.5 / _0x2c37ff;
        _0x32b801[3] = (_0x37370f[_0x28c578 * 3 + _0x3b9a45] - _0x37370f[_0x3b9a45 * 3 + _0x28c578]) * _0x2c37ff;
        _0x32b801[_0x28c578] = (_0x37370f[_0x28c578 * 3 + _0x24b775] + _0x37370f[_0x24b775 * 3 + _0x28c578]) * _0x2c37ff;
        _0x32b801[_0x3b9a45] = (_0x37370f[_0x3b9a45 * 3 + _0x24b775] + _0x37370f[_0x24b775 * 3 + _0x3b9a45]) * _0x2c37ff;
      }
    })(this._target, _0x5a7d26);
    this.onChange();
    return this;
  }
  fromEuler(_0x3503eb, _0x3dd426) {
    (function (_0x202e93, _0x2fd988, _0x10f452 = "YXZ") {
      let _0x5ebc98 = Math.sin(_0x2fd988[0] * 0.5);
      let _0x2f6183 = Math.cos(_0x2fd988[0] * 0.5);
      let _0x513fd0 = Math.sin(_0x2fd988[1] * 0.5);
      let _0xf1a206 = Math.cos(_0x2fd988[1] * 0.5);
      let _0x5a5577 = Math.sin(_0x2fd988[2] * 0.5);
      let _0x5b3dfb = Math.cos(_0x2fd988[2] * 0.5);
      if (_0x10f452 === "XYZ") {
        _0x202e93[0] = _0x5ebc98 * _0xf1a206 * _0x5b3dfb + _0x2f6183 * _0x513fd0 * _0x5a5577;
        _0x202e93[1] = _0x2f6183 * _0x513fd0 * _0x5b3dfb - _0x5ebc98 * _0xf1a206 * _0x5a5577;
        _0x202e93[2] = _0x2f6183 * _0xf1a206 * _0x5a5577 + _0x5ebc98 * _0x513fd0 * _0x5b3dfb;
        _0x202e93[3] = _0x2f6183 * _0xf1a206 * _0x5b3dfb - _0x5ebc98 * _0x513fd0 * _0x5a5577;
      } else if (_0x10f452 === "YXZ") {
        _0x202e93[0] = _0x5ebc98 * _0xf1a206 * _0x5b3dfb + _0x2f6183 * _0x513fd0 * _0x5a5577;
        _0x202e93[1] = _0x2f6183 * _0x513fd0 * _0x5b3dfb - _0x5ebc98 * _0xf1a206 * _0x5a5577;
        _0x202e93[2] = _0x2f6183 * _0xf1a206 * _0x5a5577 - _0x5ebc98 * _0x513fd0 * _0x5b3dfb;
        _0x202e93[3] = _0x2f6183 * _0xf1a206 * _0x5b3dfb + _0x5ebc98 * _0x513fd0 * _0x5a5577;
      } else if (_0x10f452 === "ZXY") {
        _0x202e93[0] = _0x5ebc98 * _0xf1a206 * _0x5b3dfb - _0x2f6183 * _0x513fd0 * _0x5a5577;
        _0x202e93[1] = _0x2f6183 * _0x513fd0 * _0x5b3dfb + _0x5ebc98 * _0xf1a206 * _0x5a5577;
        _0x202e93[2] = _0x2f6183 * _0xf1a206 * _0x5a5577 + _0x5ebc98 * _0x513fd0 * _0x5b3dfb;
        _0x202e93[3] = _0x2f6183 * _0xf1a206 * _0x5b3dfb - _0x5ebc98 * _0x513fd0 * _0x5a5577;
      } else if (_0x10f452 === "ZYX") {
        _0x202e93[0] = _0x5ebc98 * _0xf1a206 * _0x5b3dfb - _0x2f6183 * _0x513fd0 * _0x5a5577;
        _0x202e93[1] = _0x2f6183 * _0x513fd0 * _0x5b3dfb + _0x5ebc98 * _0xf1a206 * _0x5a5577;
        _0x202e93[2] = _0x2f6183 * _0xf1a206 * _0x5a5577 - _0x5ebc98 * _0x513fd0 * _0x5b3dfb;
        _0x202e93[3] = _0x2f6183 * _0xf1a206 * _0x5b3dfb + _0x5ebc98 * _0x513fd0 * _0x5a5577;
      } else if (_0x10f452 === "YZX") {
        _0x202e93[0] = _0x5ebc98 * _0xf1a206 * _0x5b3dfb + _0x2f6183 * _0x513fd0 * _0x5a5577;
        _0x202e93[1] = _0x2f6183 * _0x513fd0 * _0x5b3dfb + _0x5ebc98 * _0xf1a206 * _0x5a5577;
        _0x202e93[2] = _0x2f6183 * _0xf1a206 * _0x5a5577 - _0x5ebc98 * _0x513fd0 * _0x5b3dfb;
        _0x202e93[3] = _0x2f6183 * _0xf1a206 * _0x5b3dfb - _0x5ebc98 * _0x513fd0 * _0x5a5577;
      } else if (_0x10f452 === "XZY") {
        _0x202e93[0] = _0x5ebc98 * _0xf1a206 * _0x5b3dfb - _0x2f6183 * _0x513fd0 * _0x5a5577;
        _0x202e93[1] = _0x2f6183 * _0x513fd0 * _0x5b3dfb - _0x5ebc98 * _0xf1a206 * _0x5a5577;
        _0x202e93[2] = _0x2f6183 * _0xf1a206 * _0x5a5577 + _0x5ebc98 * _0x513fd0 * _0x5b3dfb;
        _0x202e93[3] = _0x2f6183 * _0xf1a206 * _0x5b3dfb + _0x5ebc98 * _0x513fd0 * _0x5a5577;
      }
    })(this._target, _0x3503eb, _0x3503eb.order);
    if (!_0x3dd426) {
      this.onChange();
    }
    return this;
  }
  fromAxisAngle(_0x354eb0, _0x321520) {
    (function (_0x339ffc, _0x4ba75e, _0x332ae2) {
      _0x332ae2 *= 0.5;
      let _0x516eeb = Math.sin(_0x332ae2);
      _0x339ffc[0] = _0x516eeb * _0x4ba75e[0];
      _0x339ffc[1] = _0x516eeb * _0x4ba75e[1];
      _0x339ffc[2] = _0x516eeb * _0x4ba75e[2];
      _0x339ffc[3] = Math.cos(_0x332ae2);
    })(this._target, _0x354eb0, _0x321520);
    this.onChange();
    return this;
  }
  slerp(_0x23264f, _0x24c1dc) {
    (function (_0x1032ae, _0x4edaff, _0x49b402, _0x361d74) {
      let _0x3952f0;
      let _0x5700ac;
      let _0x50b404;
      let _0x51b914;
      let _0x28d5bb;
      let _0x3db7f9 = _0x4edaff[0];
      let _0x3a11fc = _0x4edaff[1];
      let _0x3a7809 = _0x4edaff[2];
      let _0x3d0046 = _0x4edaff[3];
      let _0x622d48 = _0x49b402[0];
      let _0x49ea26 = _0x49b402[1];
      let _0x1dab9a = _0x49b402[2];
      let _0x1bfc5f = _0x49b402[3];
      _0x5700ac = _0x3db7f9 * _0x622d48 + _0x3a11fc * _0x49ea26 + _0x3a7809 * _0x1dab9a + _0x3d0046 * _0x1bfc5f;
      if (_0x5700ac < 0) {
        _0x5700ac = -_0x5700ac;
        _0x622d48 = -_0x622d48;
        _0x49ea26 = -_0x49ea26;
        _0x1dab9a = -_0x1dab9a;
        _0x1bfc5f = -_0x1bfc5f;
      }
      if (1 - _0x5700ac > 0.000001) {
        _0x3952f0 = Math.acos(_0x5700ac);
        _0x50b404 = Math.sin(_0x3952f0);
        _0x51b914 = Math.sin((1 - _0x361d74) * _0x3952f0) / _0x50b404;
        _0x28d5bb = Math.sin(_0x361d74 * _0x3952f0) / _0x50b404;
      } else {
        _0x51b914 = 1 - _0x361d74;
        _0x28d5bb = _0x361d74;
      }
      _0x1032ae[0] = _0x51b914 * _0x3db7f9 + _0x28d5bb * _0x622d48;
      _0x1032ae[1] = _0x51b914 * _0x3a11fc + _0x28d5bb * _0x49ea26;
      _0x1032ae[2] = _0x51b914 * _0x3a7809 + _0x28d5bb * _0x1dab9a;
      _0x1032ae[3] = _0x51b914 * _0x3d0046 + _0x28d5bb * _0x1bfc5f;
    })(this._target, this._target, _0x23264f, _0x24c1dc);
    this.onChange();
    return this;
  }
  fromArray(_0x2af52e, _0x2fe61e = 0) {
    this._target[0] = _0x2af52e[_0x2fe61e];
    this._target[1] = _0x2af52e[_0x2fe61e + 1];
    this._target[2] = _0x2af52e[_0x2fe61e + 2];
    this._target[3] = _0x2af52e[_0x2fe61e + 3];
    this.onChange();
    return this;
  }
  toArray(_0x3a67d8 = [], _0x58138a = 0) {
    _0x3a67d8[_0x58138a] = this[0];
    _0x3a67d8[_0x58138a + 1] = this[1];
    _0x3a67d8[_0x58138a + 2] = this[2];
    _0x3a67d8[_0x58138a + 3] = this[3];
    return _0x3a67d8;
  }
}
function B(_0x5ee8cb) {
  let _0x27c343 = _0x5ee8cb[0];
  let _0x125239 = _0x5ee8cb[1];
  let _0x11342f = _0x5ee8cb[2];
  let _0x49b829 = _0x5ee8cb[3];
  let _0x1c7426 = _0x5ee8cb[4];
  let _0x506519 = _0x5ee8cb[5];
  let _0x5b36a5 = _0x5ee8cb[6];
  let _0x287910 = _0x5ee8cb[7];
  let _0x1c950e = _0x5ee8cb[8];
  let _0x33f3bf = _0x5ee8cb[9];
  let _0xb69201 = _0x5ee8cb[10];
  let _0x17fd17 = _0x5ee8cb[11];
  let _0x160fb8 = _0x5ee8cb[12];
  let _0x12acfb = _0x5ee8cb[13];
  let _0x579408 = _0x5ee8cb[14];
  let _0x4bc4b2 = _0x5ee8cb[15];
  return (_0x27c343 * _0x506519 - _0x125239 * _0x1c7426) * (_0xb69201 * _0x4bc4b2 - _0x17fd17 * _0x579408) - (_0x27c343 * _0x5b36a5 - _0x11342f * _0x1c7426) * (_0x33f3bf * _0x4bc4b2 - _0x17fd17 * _0x12acfb) + (_0x27c343 * _0x287910 - _0x49b829 * _0x1c7426) * (_0x33f3bf * _0x579408 - _0xb69201 * _0x12acfb) + (_0x125239 * _0x5b36a5 - _0x11342f * _0x506519) * (_0x1c950e * _0x4bc4b2 - _0x17fd17 * _0x160fb8) - (_0x125239 * _0x287910 - _0x49b829 * _0x506519) * (_0x1c950e * _0x579408 - _0xb69201 * _0x160fb8) + (_0x11342f * _0x287910 - _0x49b829 * _0x5b36a5) * (_0x1c950e * _0x12acfb - _0x33f3bf * _0x160fb8);
}
function I(_0x58171f, _0x3f1a1a, _0x471db9) {
  let _0x1169ae = _0x3f1a1a[0];
  let _0x5cec89 = _0x3f1a1a[1];
  let _0x3c7f11 = _0x3f1a1a[2];
  let _0x40147a = _0x3f1a1a[3];
  let _0x561f4c = _0x3f1a1a[4];
  let _0x17eb44 = _0x3f1a1a[5];
  let _0x5d5be4 = _0x3f1a1a[6];
  let _0x1acfff = _0x3f1a1a[7];
  let _0xfc24a2 = _0x3f1a1a[8];
  let _0x15465b = _0x3f1a1a[9];
  let _0x3087c5 = _0x3f1a1a[10];
  let _0x5f0aff = _0x3f1a1a[11];
  let _0x83fa93 = _0x3f1a1a[12];
  let _0x3df0c1 = _0x3f1a1a[13];
  let _0x3eb8f8 = _0x3f1a1a[14];
  let _0x47c0eb = _0x3f1a1a[15];
  let _0x491ced = _0x471db9[0];
  let _0x24e5c3 = _0x471db9[1];
  let _0x30a72b = _0x471db9[2];
  let _0xbcafd = _0x471db9[3];
  _0x58171f[0] = _0x491ced * _0x1169ae + _0x24e5c3 * _0x561f4c + _0x30a72b * _0xfc24a2 + _0xbcafd * _0x83fa93;
  _0x58171f[1] = _0x491ced * _0x5cec89 + _0x24e5c3 * _0x17eb44 + _0x30a72b * _0x15465b + _0xbcafd * _0x3df0c1;
  _0x58171f[2] = _0x491ced * _0x3c7f11 + _0x24e5c3 * _0x5d5be4 + _0x30a72b * _0x3087c5 + _0xbcafd * _0x3eb8f8;
  _0x58171f[3] = _0x491ced * _0x40147a + _0x24e5c3 * _0x1acfff + _0x30a72b * _0x5f0aff + _0xbcafd * _0x47c0eb;
  _0x491ced = _0x471db9[4];
  _0x24e5c3 = _0x471db9[5];
  _0x30a72b = _0x471db9[6];
  _0xbcafd = _0x471db9[7];
  _0x58171f[4] = _0x491ced * _0x1169ae + _0x24e5c3 * _0x561f4c + _0x30a72b * _0xfc24a2 + _0xbcafd * _0x83fa93;
  _0x58171f[5] = _0x491ced * _0x5cec89 + _0x24e5c3 * _0x17eb44 + _0x30a72b * _0x15465b + _0xbcafd * _0x3df0c1;
  _0x58171f[6] = _0x491ced * _0x3c7f11 + _0x24e5c3 * _0x5d5be4 + _0x30a72b * _0x3087c5 + _0xbcafd * _0x3eb8f8;
  _0x58171f[7] = _0x491ced * _0x40147a + _0x24e5c3 * _0x1acfff + _0x30a72b * _0x5f0aff + _0xbcafd * _0x47c0eb;
  _0x491ced = _0x471db9[8];
  _0x24e5c3 = _0x471db9[9];
  _0x30a72b = _0x471db9[10];
  _0xbcafd = _0x471db9[11];
  _0x58171f[8] = _0x491ced * _0x1169ae + _0x24e5c3 * _0x561f4c + _0x30a72b * _0xfc24a2 + _0xbcafd * _0x83fa93;
  _0x58171f[9] = _0x491ced * _0x5cec89 + _0x24e5c3 * _0x17eb44 + _0x30a72b * _0x15465b + _0xbcafd * _0x3df0c1;
  _0x58171f[10] = _0x491ced * _0x3c7f11 + _0x24e5c3 * _0x5d5be4 + _0x30a72b * _0x3087c5 + _0xbcafd * _0x3eb8f8;
  _0x58171f[11] = _0x491ced * _0x40147a + _0x24e5c3 * _0x1acfff + _0x30a72b * _0x5f0aff + _0xbcafd * _0x47c0eb;
  _0x491ced = _0x471db9[12];
  _0x24e5c3 = _0x471db9[13];
  _0x30a72b = _0x471db9[14];
  _0xbcafd = _0x471db9[15];
  _0x58171f[12] = _0x491ced * _0x1169ae + _0x24e5c3 * _0x561f4c + _0x30a72b * _0xfc24a2 + _0xbcafd * _0x83fa93;
  _0x58171f[13] = _0x491ced * _0x5cec89 + _0x24e5c3 * _0x17eb44 + _0x30a72b * _0x15465b + _0xbcafd * _0x3df0c1;
  _0x58171f[14] = _0x491ced * _0x3c7f11 + _0x24e5c3 * _0x5d5be4 + _0x30a72b * _0x3087c5 + _0xbcafd * _0x3eb8f8;
  _0x58171f[15] = _0x491ced * _0x40147a + _0x24e5c3 * _0x1acfff + _0x30a72b * _0x5f0aff + _0xbcafd * _0x47c0eb;
  return _0x58171f;
}
function N(_0x12159d, _0x49087e) {
  let _0x20fbb9 = _0x49087e[0];
  let _0x563317 = _0x49087e[1];
  let _0x33719e = _0x49087e[2];
  let _0x5ec694 = _0x49087e[4];
  let _0x4a2b35 = _0x49087e[5];
  let _0x46bbf6 = _0x49087e[6];
  let _0x2938b1 = _0x49087e[8];
  let _0xaff9cd = _0x49087e[9];
  let _0x2ee78f = _0x49087e[10];
  _0x12159d[0] = Math.hypot(_0x20fbb9, _0x563317, _0x33719e);
  _0x12159d[1] = Math.hypot(_0x5ec694, _0x4a2b35, _0x46bbf6);
  _0x12159d[2] = Math.hypot(_0x2938b1, _0xaff9cd, _0x2ee78f);
  return _0x12159d;
}
const D = function () {
  const _0x13318d = [1, 1, 1];
  return function (_0x594bf8, _0x21447e) {
    let _0x2998d9 = _0x13318d;
    N(_0x2998d9, _0x21447e);
    let _0x4a6427 = 1 / _0x2998d9[0];
    let _0x54cd96 = 1 / _0x2998d9[1];
    let _0x32a4b3 = 1 / _0x2998d9[2];
    let _0x1c29b6 = _0x21447e[0] * _0x4a6427;
    let _0xa62735 = _0x21447e[1] * _0x54cd96;
    let _0xd1f1fa = _0x21447e[2] * _0x32a4b3;
    let _0x4d1047 = _0x21447e[4] * _0x4a6427;
    let _0x52a66b = _0x21447e[5] * _0x54cd96;
    let _0x1b1fe6 = _0x21447e[6] * _0x32a4b3;
    let _0x42bfe1 = _0x21447e[8] * _0x4a6427;
    let _0x4f104f = _0x21447e[9] * _0x54cd96;
    let _0x345d4a = _0x21447e[10] * _0x32a4b3;
    let _0x3c779e = _0x1c29b6 + _0x52a66b + _0x345d4a;
    let _0x1d283f = 0;
    if (_0x3c779e > 0) {
      _0x1d283f = Math.sqrt(_0x3c779e + 1) * 2;
      _0x594bf8[3] = _0x1d283f * 0.25;
      _0x594bf8[0] = (_0x1b1fe6 - _0x4f104f) / _0x1d283f;
      _0x594bf8[1] = (_0x42bfe1 - _0xd1f1fa) / _0x1d283f;
      _0x594bf8[2] = (_0xa62735 - _0x4d1047) / _0x1d283f;
    } else if (_0x1c29b6 > _0x52a66b && _0x1c29b6 > _0x345d4a) {
      _0x1d283f = Math.sqrt(1 + _0x1c29b6 - _0x52a66b - _0x345d4a) * 2;
      _0x594bf8[3] = (_0x1b1fe6 - _0x4f104f) / _0x1d283f;
      _0x594bf8[0] = _0x1d283f * 0.25;
      _0x594bf8[1] = (_0xa62735 + _0x4d1047) / _0x1d283f;
      _0x594bf8[2] = (_0x42bfe1 + _0xd1f1fa) / _0x1d283f;
    } else if (_0x52a66b > _0x345d4a) {
      _0x1d283f = Math.sqrt(1 + _0x52a66b - _0x1c29b6 - _0x345d4a) * 2;
      _0x594bf8[3] = (_0x42bfe1 - _0xd1f1fa) / _0x1d283f;
      _0x594bf8[0] = (_0xa62735 + _0x4d1047) / _0x1d283f;
      _0x594bf8[1] = _0x1d283f * 0.25;
      _0x594bf8[2] = (_0x1b1fe6 + _0x4f104f) / _0x1d283f;
    } else {
      _0x1d283f = Math.sqrt(1 + _0x345d4a - _0x1c29b6 - _0x52a66b) * 2;
      _0x594bf8[3] = (_0xa62735 - _0x4d1047) / _0x1d283f;
      _0x594bf8[0] = (_0x42bfe1 + _0xd1f1fa) / _0x1d283f;
      _0x594bf8[1] = (_0x1b1fe6 + _0x4f104f) / _0x1d283f;
      _0x594bf8[2] = _0x1d283f * 0.25;
    }
    return _0x594bf8;
  };
}();
function P(_0x4aa799, _0x4cef5b, _0x22e01d) {
  _0x4aa799[0] = _0x4cef5b[0] + _0x22e01d[0];
  _0x4aa799[1] = _0x4cef5b[1] + _0x22e01d[1];
  _0x4aa799[2] = _0x4cef5b[2] + _0x22e01d[2];
  _0x4aa799[3] = _0x4cef5b[3] + _0x22e01d[3];
  _0x4aa799[4] = _0x4cef5b[4] + _0x22e01d[4];
  _0x4aa799[5] = _0x4cef5b[5] + _0x22e01d[5];
  _0x4aa799[6] = _0x4cef5b[6] + _0x22e01d[6];
  _0x4aa799[7] = _0x4cef5b[7] + _0x22e01d[7];
  _0x4aa799[8] = _0x4cef5b[8] + _0x22e01d[8];
  _0x4aa799[9] = _0x4cef5b[9] + _0x22e01d[9];
  _0x4aa799[10] = _0x4cef5b[10] + _0x22e01d[10];
  _0x4aa799[11] = _0x4cef5b[11] + _0x22e01d[11];
  _0x4aa799[12] = _0x4cef5b[12] + _0x22e01d[12];
  _0x4aa799[13] = _0x4cef5b[13] + _0x22e01d[13];
  _0x4aa799[14] = _0x4cef5b[14] + _0x22e01d[14];
  _0x4aa799[15] = _0x4cef5b[15] + _0x22e01d[15];
  return _0x4aa799;
}
function q(_0x3dacdc, _0x431a37, _0x5bc635) {
  _0x3dacdc[0] = _0x431a37[0] - _0x5bc635[0];
  _0x3dacdc[1] = _0x431a37[1] - _0x5bc635[1];
  _0x3dacdc[2] = _0x431a37[2] - _0x5bc635[2];
  _0x3dacdc[3] = _0x431a37[3] - _0x5bc635[3];
  _0x3dacdc[4] = _0x431a37[4] - _0x5bc635[4];
  _0x3dacdc[5] = _0x431a37[5] - _0x5bc635[5];
  _0x3dacdc[6] = _0x431a37[6] - _0x5bc635[6];
  _0x3dacdc[7] = _0x431a37[7] - _0x5bc635[7];
  _0x3dacdc[8] = _0x431a37[8] - _0x5bc635[8];
  _0x3dacdc[9] = _0x431a37[9] - _0x5bc635[9];
  _0x3dacdc[10] = _0x431a37[10] - _0x5bc635[10];
  _0x3dacdc[11] = _0x431a37[11] - _0x5bc635[11];
  _0x3dacdc[12] = _0x431a37[12] - _0x5bc635[12];
  _0x3dacdc[13] = _0x431a37[13] - _0x5bc635[13];
  _0x3dacdc[14] = _0x431a37[14] - _0x5bc635[14];
  _0x3dacdc[15] = _0x431a37[15] - _0x5bc635[15];
  return _0x3dacdc;
}
class U extends Array {
  constructor(_0x1c338e = 1, _0x195570 = 0, _0x320cdc = 0, _0x4a60c3 = 0, _0x550849 = 0, _0xe2bb31 = 1, _0xef4768 = 0, _0x5a131e = 0, _0x475069 = 0, _0x3d1786 = 0, _0x20435e = 1, _0x20dd9c = 0, _0x396196 = 0, _0xf65a4c = 0, _0x3e0f1e = 0, _0x1f39e4 = 1) {
    super(_0x1c338e, _0x195570, _0x320cdc, _0x4a60c3, _0x550849, _0xe2bb31, _0xef4768, _0x5a131e, _0x475069, _0x3d1786, _0x20435e, _0x20dd9c, _0x396196, _0xf65a4c, _0x3e0f1e, _0x1f39e4);
    return this;
  }
  get x() {
    return this[12];
  }
  get y() {
    return this[13];
  }
  get z() {
    return this[14];
  }
  get w() {
    return this[15];
  }
  set x(_0x48abd8) {
    this[12] = _0x48abd8;
  }
  set y(_0x45acc2) {
    this[13] = _0x45acc2;
  }
  set z(_0xae2534) {
    this[14] = _0xae2534;
  }
  set w(_0x511870) {
    this[15] = _0x511870;
  }
  set(_0x3cf70c, _0x5d3d7f, _0x3d49d7, _0x283cba, _0x6c8d5e, _0x4d6ae0, _0xae80ab, _0x4d35d3, _0x2d1929, _0x764030, _0x4f8c0e, _0x56371c, _0x48ee99, _0x24e7cb, _0x482985, _0x5e7893) {
    if (_0x3cf70c.length) {
      return this.copy(_0x3cf70c);
    } else {
      (function (_0x12356b, _0x29893e, _0x3fd9c0, _0x6be961, _0x322db1, _0x466d52, _0x3d256e, _0x174ebe, _0x7acc4b, _0x47acd5, _0x2fd7ae, _0x2846bc, _0x305055, _0x4f563b, _0x1cf06f, _0x148118, _0x2ed3b8) {
        _0x12356b[0] = _0x29893e;
        _0x12356b[1] = _0x3fd9c0;
        _0x12356b[2] = _0x6be961;
        _0x12356b[3] = _0x322db1;
        _0x12356b[4] = _0x466d52;
        _0x12356b[5] = _0x3d256e;
        _0x12356b[6] = _0x174ebe;
        _0x12356b[7] = _0x7acc4b;
        _0x12356b[8] = _0x47acd5;
        _0x12356b[9] = _0x2fd7ae;
        _0x12356b[10] = _0x2846bc;
        _0x12356b[11] = _0x305055;
        _0x12356b[12] = _0x4f563b;
        _0x12356b[13] = _0x1cf06f;
        _0x12356b[14] = _0x148118;
        _0x12356b[15] = _0x2ed3b8;
      })(this, _0x3cf70c, _0x5d3d7f, _0x3d49d7, _0x283cba, _0x6c8d5e, _0x4d6ae0, _0xae80ab, _0x4d35d3, _0x2d1929, _0x764030, _0x4f8c0e, _0x56371c, _0x48ee99, _0x24e7cb, _0x482985, _0x5e7893);
      return this;
    }
  }
  translate(_0x116def, _0x4bda0d = this) {
    (function (_0x5b3023, _0x3ea13e, _0x47a5fa) {
      let _0xbe792b;
      let _0xbbc1f3;
      let _0x11d731;
      let _0x2fc1a1;
      let _0x2147e6;
      let _0x1c7ed1;
      let _0x315523;
      let _0x58f075;
      let _0x2abe69;
      let _0x41a49a;
      let _0x5886d3;
      let _0x2b6227;
      let _0xf1a638 = _0x47a5fa[0];
      let _0x4d2cb7 = _0x47a5fa[1];
      let _0x529cbf = _0x47a5fa[2];
      if (_0x3ea13e === _0x5b3023) {
        _0x5b3023[12] = _0x3ea13e[0] * _0xf1a638 + _0x3ea13e[4] * _0x4d2cb7 + _0x3ea13e[8] * _0x529cbf + _0x3ea13e[12];
        _0x5b3023[13] = _0x3ea13e[1] * _0xf1a638 + _0x3ea13e[5] * _0x4d2cb7 + _0x3ea13e[9] * _0x529cbf + _0x3ea13e[13];
        _0x5b3023[14] = _0x3ea13e[2] * _0xf1a638 + _0x3ea13e[6] * _0x4d2cb7 + _0x3ea13e[10] * _0x529cbf + _0x3ea13e[14];
        _0x5b3023[15] = _0x3ea13e[3] * _0xf1a638 + _0x3ea13e[7] * _0x4d2cb7 + _0x3ea13e[11] * _0x529cbf + _0x3ea13e[15];
      } else {
        _0xbe792b = _0x3ea13e[0];
        _0xbbc1f3 = _0x3ea13e[1];
        _0x11d731 = _0x3ea13e[2];
        _0x2fc1a1 = _0x3ea13e[3];
        _0x2147e6 = _0x3ea13e[4];
        _0x1c7ed1 = _0x3ea13e[5];
        _0x315523 = _0x3ea13e[6];
        _0x58f075 = _0x3ea13e[7];
        _0x2abe69 = _0x3ea13e[8];
        _0x41a49a = _0x3ea13e[9];
        _0x5886d3 = _0x3ea13e[10];
        _0x2b6227 = _0x3ea13e[11];
        _0x5b3023[0] = _0xbe792b;
        _0x5b3023[1] = _0xbbc1f3;
        _0x5b3023[2] = _0x11d731;
        _0x5b3023[3] = _0x2fc1a1;
        _0x5b3023[4] = _0x2147e6;
        _0x5b3023[5] = _0x1c7ed1;
        _0x5b3023[6] = _0x315523;
        _0x5b3023[7] = _0x58f075;
        _0x5b3023[8] = _0x2abe69;
        _0x5b3023[9] = _0x41a49a;
        _0x5b3023[10] = _0x5886d3;
        _0x5b3023[11] = _0x2b6227;
        _0x5b3023[12] = _0xbe792b * _0xf1a638 + _0x2147e6 * _0x4d2cb7 + _0x2abe69 * _0x529cbf + _0x3ea13e[12];
        _0x5b3023[13] = _0xbbc1f3 * _0xf1a638 + _0x1c7ed1 * _0x4d2cb7 + _0x41a49a * _0x529cbf + _0x3ea13e[13];
        _0x5b3023[14] = _0x11d731 * _0xf1a638 + _0x315523 * _0x4d2cb7 + _0x5886d3 * _0x529cbf + _0x3ea13e[14];
        _0x5b3023[15] = _0x2fc1a1 * _0xf1a638 + _0x58f075 * _0x4d2cb7 + _0x2b6227 * _0x529cbf + _0x3ea13e[15];
      }
    })(this, _0x4bda0d, _0x116def);
    return this;
  }
  rotate(_0x1134f4, _0x3961c1, _0x38b2c0 = this) {
    (function (_0x1d737c, _0x2173f6, _0x3afcb1, _0xdcca51) {
      let _0xcc9988;
      let _0xe21ed5;
      let _0x47644e;
      let _0x4ac589;
      let _0x5aa873;
      let _0x14af0a;
      let _0x381464;
      let _0x1cd66e;
      let _0x1ec4d9;
      let _0x10b71a;
      let _0x469cae;
      let _0x3ae68f;
      let _0x35d74e;
      let _0x52ce62;
      let _0x3fc287;
      let _0xaa97ef;
      let _0x5ed0b2;
      let _0x45e2db;
      let _0xe93aaf;
      let _0x338ea2;
      let _0x264182;
      let _0x323253;
      let _0x16f828;
      let _0x8b99af;
      let _0x44a707 = _0xdcca51[0];
      let _0x314a5c = _0xdcca51[1];
      let _0x1395d7 = _0xdcca51[2];
      let _0x2a4867 = Math.hypot(_0x44a707, _0x314a5c, _0x1395d7);
      if (!(Math.abs(_0x2a4867) < 0.000001)) {
        _0x2a4867 = 1 / _0x2a4867;
        _0x44a707 *= _0x2a4867;
        _0x314a5c *= _0x2a4867;
        _0x1395d7 *= _0x2a4867;
        _0xcc9988 = Math.sin(_0x3afcb1);
        _0xe21ed5 = Math.cos(_0x3afcb1);
        _0x47644e = 1 - _0xe21ed5;
        _0x4ac589 = _0x2173f6[0];
        _0x5aa873 = _0x2173f6[1];
        _0x14af0a = _0x2173f6[2];
        _0x381464 = _0x2173f6[3];
        _0x1cd66e = _0x2173f6[4];
        _0x1ec4d9 = _0x2173f6[5];
        _0x10b71a = _0x2173f6[6];
        _0x469cae = _0x2173f6[7];
        _0x3ae68f = _0x2173f6[8];
        _0x35d74e = _0x2173f6[9];
        _0x52ce62 = _0x2173f6[10];
        _0x3fc287 = _0x2173f6[11];
        _0xaa97ef = _0x44a707 * _0x44a707 * _0x47644e + _0xe21ed5;
        _0x5ed0b2 = _0x314a5c * _0x44a707 * _0x47644e + _0x1395d7 * _0xcc9988;
        _0x45e2db = _0x1395d7 * _0x44a707 * _0x47644e - _0x314a5c * _0xcc9988;
        _0xe93aaf = _0x44a707 * _0x314a5c * _0x47644e - _0x1395d7 * _0xcc9988;
        _0x338ea2 = _0x314a5c * _0x314a5c * _0x47644e + _0xe21ed5;
        _0x264182 = _0x1395d7 * _0x314a5c * _0x47644e + _0x44a707 * _0xcc9988;
        _0x323253 = _0x44a707 * _0x1395d7 * _0x47644e + _0x314a5c * _0xcc9988;
        _0x16f828 = _0x314a5c * _0x1395d7 * _0x47644e - _0x44a707 * _0xcc9988;
        _0x8b99af = _0x1395d7 * _0x1395d7 * _0x47644e + _0xe21ed5;
        _0x1d737c[0] = _0x4ac589 * _0xaa97ef + _0x1cd66e * _0x5ed0b2 + _0x3ae68f * _0x45e2db;
        _0x1d737c[1] = _0x5aa873 * _0xaa97ef + _0x1ec4d9 * _0x5ed0b2 + _0x35d74e * _0x45e2db;
        _0x1d737c[2] = _0x14af0a * _0xaa97ef + _0x10b71a * _0x5ed0b2 + _0x52ce62 * _0x45e2db;
        _0x1d737c[3] = _0x381464 * _0xaa97ef + _0x469cae * _0x5ed0b2 + _0x3fc287 * _0x45e2db;
        _0x1d737c[4] = _0x4ac589 * _0xe93aaf + _0x1cd66e * _0x338ea2 + _0x3ae68f * _0x264182;
        _0x1d737c[5] = _0x5aa873 * _0xe93aaf + _0x1ec4d9 * _0x338ea2 + _0x35d74e * _0x264182;
        _0x1d737c[6] = _0x14af0a * _0xe93aaf + _0x10b71a * _0x338ea2 + _0x52ce62 * _0x264182;
        _0x1d737c[7] = _0x381464 * _0xe93aaf + _0x469cae * _0x338ea2 + _0x3fc287 * _0x264182;
        _0x1d737c[8] = _0x4ac589 * _0x323253 + _0x1cd66e * _0x16f828 + _0x3ae68f * _0x8b99af;
        _0x1d737c[9] = _0x5aa873 * _0x323253 + _0x1ec4d9 * _0x16f828 + _0x35d74e * _0x8b99af;
        _0x1d737c[10] = _0x14af0a * _0x323253 + _0x10b71a * _0x16f828 + _0x52ce62 * _0x8b99af;
        _0x1d737c[11] = _0x381464 * _0x323253 + _0x469cae * _0x16f828 + _0x3fc287 * _0x8b99af;
        if (_0x2173f6 !== _0x1d737c) {
          _0x1d737c[12] = _0x2173f6[12];
          _0x1d737c[13] = _0x2173f6[13];
          _0x1d737c[14] = _0x2173f6[14];
          _0x1d737c[15] = _0x2173f6[15];
        }
      }
    })(this, _0x38b2c0, _0x1134f4, _0x3961c1);
    return this;
  }
  scale(_0x437a37, _0x5d20d2 = this) {
    (function (_0x443001, _0x3c0841, _0x374126) {
      let _0x314619 = _0x374126[0];
      let _0x33ca29 = _0x374126[1];
      let _0x2ad60e = _0x374126[2];
      _0x443001[0] = _0x3c0841[0] * _0x314619;
      _0x443001[1] = _0x3c0841[1] * _0x314619;
      _0x443001[2] = _0x3c0841[2] * _0x314619;
      _0x443001[3] = _0x3c0841[3] * _0x314619;
      _0x443001[4] = _0x3c0841[4] * _0x33ca29;
      _0x443001[5] = _0x3c0841[5] * _0x33ca29;
      _0x443001[6] = _0x3c0841[6] * _0x33ca29;
      _0x443001[7] = _0x3c0841[7] * _0x33ca29;
      _0x443001[8] = _0x3c0841[8] * _0x2ad60e;
      _0x443001[9] = _0x3c0841[9] * _0x2ad60e;
      _0x443001[10] = _0x3c0841[10] * _0x2ad60e;
      _0x443001[11] = _0x3c0841[11] * _0x2ad60e;
      _0x443001[12] = _0x3c0841[12];
      _0x443001[13] = _0x3c0841[13];
      _0x443001[14] = _0x3c0841[14];
      _0x443001[15] = _0x3c0841[15];
    })(this, _0x5d20d2, typeof _0x437a37 == "number" ? [_0x437a37, _0x437a37, _0x437a37] : _0x437a37);
    return this;
  }
  add(_0xd3c28c, _0x2f40d6) {
    if (_0x2f40d6) {
      P(this, _0xd3c28c, _0x2f40d6);
    } else {
      P(this, this, _0xd3c28c);
    }
    return this;
  }
  sub(_0x11dc18, _0x379e7a) {
    if (_0x379e7a) {
      q(this, _0x11dc18, _0x379e7a);
    } else {
      q(this, this, _0x11dc18);
    }
    return this;
  }
  multiply(_0x126ea5, _0x210b70) {
    var _0x939f3d;
    var _0x2bef58;
    var _0x42d1fa;
    if (_0x126ea5.length) {
      if (_0x210b70) {
        I(this, _0x126ea5, _0x210b70);
      } else {
        I(this, this, _0x126ea5);
      }
    } else {
      _0x2bef58 = this;
      _0x42d1fa = _0x126ea5;
      (_0x939f3d = this)[0] = _0x2bef58[0] * _0x42d1fa;
      _0x939f3d[1] = _0x2bef58[1] * _0x42d1fa;
      _0x939f3d[2] = _0x2bef58[2] * _0x42d1fa;
      _0x939f3d[3] = _0x2bef58[3] * _0x42d1fa;
      _0x939f3d[4] = _0x2bef58[4] * _0x42d1fa;
      _0x939f3d[5] = _0x2bef58[5] * _0x42d1fa;
      _0x939f3d[6] = _0x2bef58[6] * _0x42d1fa;
      _0x939f3d[7] = _0x2bef58[7] * _0x42d1fa;
      _0x939f3d[8] = _0x2bef58[8] * _0x42d1fa;
      _0x939f3d[9] = _0x2bef58[9] * _0x42d1fa;
      _0x939f3d[10] = _0x2bef58[10] * _0x42d1fa;
      _0x939f3d[11] = _0x2bef58[11] * _0x42d1fa;
      _0x939f3d[12] = _0x2bef58[12] * _0x42d1fa;
      _0x939f3d[13] = _0x2bef58[13] * _0x42d1fa;
      _0x939f3d[14] = _0x2bef58[14] * _0x42d1fa;
      _0x939f3d[15] = _0x2bef58[15] * _0x42d1fa;
    }
    return this;
  }
  identity() {
    var _0x19330c;
    (_0x19330c = this)[0] = 1;
    _0x19330c[1] = 0;
    _0x19330c[2] = 0;
    _0x19330c[3] = 0;
    _0x19330c[4] = 0;
    _0x19330c[5] = 1;
    _0x19330c[6] = 0;
    _0x19330c[7] = 0;
    _0x19330c[8] = 0;
    _0x19330c[9] = 0;
    _0x19330c[10] = 1;
    _0x19330c[11] = 0;
    _0x19330c[12] = 0;
    _0x19330c[13] = 0;
    _0x19330c[14] = 0;
    _0x19330c[15] = 1;
    return this;
  }
  copy(_0xe17d87) {
    var _0x391b35;
    var _0x5aa5fa;
    _0x5aa5fa = _0xe17d87;
    (_0x391b35 = this)[0] = _0x5aa5fa[0];
    _0x391b35[1] = _0x5aa5fa[1];
    _0x391b35[2] = _0x5aa5fa[2];
    _0x391b35[3] = _0x5aa5fa[3];
    _0x391b35[4] = _0x5aa5fa[4];
    _0x391b35[5] = _0x5aa5fa[5];
    _0x391b35[6] = _0x5aa5fa[6];
    _0x391b35[7] = _0x5aa5fa[7];
    _0x391b35[8] = _0x5aa5fa[8];
    _0x391b35[9] = _0x5aa5fa[9];
    _0x391b35[10] = _0x5aa5fa[10];
    _0x391b35[11] = _0x5aa5fa[11];
    _0x391b35[12] = _0x5aa5fa[12];
    _0x391b35[13] = _0x5aa5fa[13];
    _0x391b35[14] = _0x5aa5fa[14];
    _0x391b35[15] = _0x5aa5fa[15];
    return this;
  }
  fromPerspective({
    fov: _0x6038b7,
    aspect: _0x2fd2e6,
    near: _0x43d76d,
    far: _0x380305
  } = {}) {
    (function (_0x46b93b, _0x49682d, _0x4acaa7, _0x130d8f, _0x34ce8d) {
      let _0x55e710 = 1 / Math.tan(_0x49682d / 2);
      let _0x5f10d5 = 1 / (_0x130d8f - _0x34ce8d);
      _0x46b93b[0] = _0x55e710 / _0x4acaa7;
      _0x46b93b[1] = 0;
      _0x46b93b[2] = 0;
      _0x46b93b[3] = 0;
      _0x46b93b[4] = 0;
      _0x46b93b[5] = _0x55e710;
      _0x46b93b[6] = 0;
      _0x46b93b[7] = 0;
      _0x46b93b[8] = 0;
      _0x46b93b[9] = 0;
      _0x46b93b[10] = (_0x34ce8d + _0x130d8f) * _0x5f10d5;
      _0x46b93b[11] = -1;
      _0x46b93b[12] = 0;
      _0x46b93b[13] = 0;
      _0x46b93b[14] = _0x34ce8d * 2 * _0x130d8f * _0x5f10d5;
      _0x46b93b[15] = 0;
    })(this, _0x6038b7, _0x2fd2e6, _0x43d76d, _0x380305);
    return this;
  }
  fromOrthogonal({
    left: _0x4c65f5,
    right: _0x195ab1,
    bottom: _0x5be693,
    top: _0x4c3a29,
    near: _0x36db19,
    far: _0x48bbbc
  }) {
    (function (_0x4dfb79, _0x52f9e0, _0x21e1c4, _0x1afcb1, _0x226776, _0x3a3493, _0x3cc450) {
      let _0x2bd837 = 1 / (_0x52f9e0 - _0x21e1c4);
      let _0xffebe8 = 1 / (_0x1afcb1 - _0x226776);
      let _0x2e6e87 = 1 / (_0x3a3493 - _0x3cc450);
      _0x4dfb79[0] = _0x2bd837 * -2;
      _0x4dfb79[1] = 0;
      _0x4dfb79[2] = 0;
      _0x4dfb79[3] = 0;
      _0x4dfb79[4] = 0;
      _0x4dfb79[5] = _0xffebe8 * -2;
      _0x4dfb79[6] = 0;
      _0x4dfb79[7] = 0;
      _0x4dfb79[8] = 0;
      _0x4dfb79[9] = 0;
      _0x4dfb79[10] = _0x2e6e87 * 2;
      _0x4dfb79[11] = 0;
      _0x4dfb79[12] = (_0x52f9e0 + _0x21e1c4) * _0x2bd837;
      _0x4dfb79[13] = (_0x226776 + _0x1afcb1) * _0xffebe8;
      _0x4dfb79[14] = (_0x3cc450 + _0x3a3493) * _0x2e6e87;
      _0x4dfb79[15] = 1;
    })(this, _0x4c65f5, _0x195ab1, _0x5be693, _0x4c3a29, _0x36db19, _0x48bbbc);
    return this;
  }
  fromQuaternion(_0x17488d) {
    (function (_0x1da180, _0x2fc734) {
      let _0x27a211 = _0x2fc734[0];
      let _0xc80b07 = _0x2fc734[1];
      let _0x286093 = _0x2fc734[2];
      let _0x14cc71 = _0x2fc734[3];
      let _0x203778 = _0x27a211 + _0x27a211;
      let _0x28b538 = _0xc80b07 + _0xc80b07;
      let _0x2dd345 = _0x286093 + _0x286093;
      let _0x57a192 = _0x27a211 * _0x203778;
      let _0x24a7d1 = _0xc80b07 * _0x203778;
      let _0x195105 = _0xc80b07 * _0x28b538;
      let _0x586fbb = _0x286093 * _0x203778;
      let _0x2268be = _0x286093 * _0x28b538;
      let _0x3b764d = _0x286093 * _0x2dd345;
      let _0x191107 = _0x14cc71 * _0x203778;
      let _0x44c2d7 = _0x14cc71 * _0x28b538;
      let _0x2f1156 = _0x14cc71 * _0x2dd345;
      _0x1da180[0] = 1 - _0x195105 - _0x3b764d;
      _0x1da180[1] = _0x24a7d1 + _0x2f1156;
      _0x1da180[2] = _0x586fbb - _0x44c2d7;
      _0x1da180[3] = 0;
      _0x1da180[4] = _0x24a7d1 - _0x2f1156;
      _0x1da180[5] = 1 - _0x57a192 - _0x3b764d;
      _0x1da180[6] = _0x2268be + _0x191107;
      _0x1da180[7] = 0;
      _0x1da180[8] = _0x586fbb + _0x44c2d7;
      _0x1da180[9] = _0x2268be - _0x191107;
      _0x1da180[10] = 1 - _0x57a192 - _0x195105;
      _0x1da180[11] = 0;
      _0x1da180[12] = 0;
      _0x1da180[13] = 0;
      _0x1da180[14] = 0;
      _0x1da180[15] = 1;
    })(this, _0x17488d);
    return this;
  }
  setPosition(_0x5a0c4d) {
    this.x = _0x5a0c4d[0];
    this.y = _0x5a0c4d[1];
    this.z = _0x5a0c4d[2];
    return this;
  }
  inverse(_0x4dbe89 = this) {
    (function (_0x11dcc6, _0x3ec4f3) {
      let _0x1153dc = _0x3ec4f3[0];
      let _0x4037a7 = _0x3ec4f3[1];
      let _0x27b087 = _0x3ec4f3[2];
      let _0xb1619c = _0x3ec4f3[3];
      let _0x2a89e4 = _0x3ec4f3[4];
      let _0xa44645 = _0x3ec4f3[5];
      let _0x504b2e = _0x3ec4f3[6];
      let _0xc164d = _0x3ec4f3[7];
      let _0x1b4ab5 = _0x3ec4f3[8];
      let _0x240d4f = _0x3ec4f3[9];
      let _0x50b4a3 = _0x3ec4f3[10];
      let _0x3b9d15 = _0x3ec4f3[11];
      let _0x192796 = _0x3ec4f3[12];
      let _0x29b677 = _0x3ec4f3[13];
      let _0x4b419c = _0x3ec4f3[14];
      let _0x3f84fc = _0x3ec4f3[15];
      let _0x255ae4 = _0x1153dc * _0xa44645 - _0x4037a7 * _0x2a89e4;
      let _0x4900bd = _0x1153dc * _0x504b2e - _0x27b087 * _0x2a89e4;
      let _0xc72a81 = _0x1153dc * _0xc164d - _0xb1619c * _0x2a89e4;
      let _0x2fa9cf = _0x4037a7 * _0x504b2e - _0x27b087 * _0xa44645;
      let _0x2e0fdd = _0x4037a7 * _0xc164d - _0xb1619c * _0xa44645;
      let _0x941d51 = _0x27b087 * _0xc164d - _0xb1619c * _0x504b2e;
      let _0x11b690 = _0x1b4ab5 * _0x29b677 - _0x240d4f * _0x192796;
      let _0xf07b1a = _0x1b4ab5 * _0x4b419c - _0x50b4a3 * _0x192796;
      let _0x172103 = _0x1b4ab5 * _0x3f84fc - _0x3b9d15 * _0x192796;
      let _0x29e537 = _0x240d4f * _0x4b419c - _0x50b4a3 * _0x29b677;
      let _0x281e58 = _0x240d4f * _0x3f84fc - _0x3b9d15 * _0x29b677;
      let _0x1f8077 = _0x50b4a3 * _0x3f84fc - _0x3b9d15 * _0x4b419c;
      let _0x3b1db5 = _0x255ae4 * _0x1f8077 - _0x4900bd * _0x281e58 + _0xc72a81 * _0x29e537 + _0x2fa9cf * _0x172103 - _0x2e0fdd * _0xf07b1a + _0x941d51 * _0x11b690;
      if (_0x3b1db5) {
        _0x3b1db5 = 1 / _0x3b1db5;
        _0x11dcc6[0] = (_0xa44645 * _0x1f8077 - _0x504b2e * _0x281e58 + _0xc164d * _0x29e537) * _0x3b1db5;
        _0x11dcc6[1] = (_0x27b087 * _0x281e58 - _0x4037a7 * _0x1f8077 - _0xb1619c * _0x29e537) * _0x3b1db5;
        _0x11dcc6[2] = (_0x29b677 * _0x941d51 - _0x4b419c * _0x2e0fdd + _0x3f84fc * _0x2fa9cf) * _0x3b1db5;
        _0x11dcc6[3] = (_0x50b4a3 * _0x2e0fdd - _0x240d4f * _0x941d51 - _0x3b9d15 * _0x2fa9cf) * _0x3b1db5;
        _0x11dcc6[4] = (_0x504b2e * _0x172103 - _0x2a89e4 * _0x1f8077 - _0xc164d * _0xf07b1a) * _0x3b1db5;
        _0x11dcc6[5] = (_0x1153dc * _0x1f8077 - _0x27b087 * _0x172103 + _0xb1619c * _0xf07b1a) * _0x3b1db5;
        _0x11dcc6[6] = (_0x4b419c * _0xc72a81 - _0x192796 * _0x941d51 - _0x3f84fc * _0x4900bd) * _0x3b1db5;
        _0x11dcc6[7] = (_0x1b4ab5 * _0x941d51 - _0x50b4a3 * _0xc72a81 + _0x3b9d15 * _0x4900bd) * _0x3b1db5;
        _0x11dcc6[8] = (_0x2a89e4 * _0x281e58 - _0xa44645 * _0x172103 + _0xc164d * _0x11b690) * _0x3b1db5;
        _0x11dcc6[9] = (_0x4037a7 * _0x172103 - _0x1153dc * _0x281e58 - _0xb1619c * _0x11b690) * _0x3b1db5;
        _0x11dcc6[10] = (_0x192796 * _0x2e0fdd - _0x29b677 * _0xc72a81 + _0x3f84fc * _0x255ae4) * _0x3b1db5;
        _0x11dcc6[11] = (_0x240d4f * _0xc72a81 - _0x1b4ab5 * _0x2e0fdd - _0x3b9d15 * _0x255ae4) * _0x3b1db5;
        _0x11dcc6[12] = (_0xa44645 * _0xf07b1a - _0x2a89e4 * _0x29e537 - _0x504b2e * _0x11b690) * _0x3b1db5;
        _0x11dcc6[13] = (_0x1153dc * _0x29e537 - _0x4037a7 * _0xf07b1a + _0x27b087 * _0x11b690) * _0x3b1db5;
        _0x11dcc6[14] = (_0x29b677 * _0x4900bd - _0x192796 * _0x2fa9cf - _0x4b419c * _0x255ae4) * _0x3b1db5;
        _0x11dcc6[15] = (_0x1b4ab5 * _0x2fa9cf - _0x240d4f * _0x4900bd + _0x50b4a3 * _0x255ae4) * _0x3b1db5;
      }
    })(this, _0x4dbe89);
    return this;
  }
  compose(_0x49f169, _0x5c5fad, _0x4e1afd) {
    (function (_0x44348f, _0x3ec505, _0x1f624b, _0x338a38) {
      const _0x59df3c = _0x44348f;
      const _0x174c5d = _0x3ec505[0];
      const _0x5347e7 = _0x3ec505[1];
      const _0x5c1206 = _0x3ec505[2];
      const _0x504de6 = _0x3ec505[3];
      const _0x4b5f01 = _0x174c5d + _0x174c5d;
      const _0x43a6fb = _0x5347e7 + _0x5347e7;
      const _0x140581 = _0x5c1206 + _0x5c1206;
      const _0x21aa30 = _0x174c5d * _0x4b5f01;
      const _0xb2def2 = _0x174c5d * _0x43a6fb;
      const _0x1b2449 = _0x174c5d * _0x140581;
      const _0xa8ad1b = _0x5347e7 * _0x43a6fb;
      const _0x312673 = _0x5347e7 * _0x140581;
      const _0x4019e6 = _0x5c1206 * _0x140581;
      const _0x3d72e2 = _0x504de6 * _0x4b5f01;
      const _0x73997e = _0x504de6 * _0x43a6fb;
      const _0x45f8ce = _0x504de6 * _0x140581;
      const _0x316bd0 = _0x338a38[0];
      const _0x4a4ff7 = _0x338a38[1];
      const _0x24dbc2 = _0x338a38[2];
      _0x59df3c[0] = (1 - (_0xa8ad1b + _0x4019e6)) * _0x316bd0;
      _0x59df3c[1] = (_0xb2def2 + _0x45f8ce) * _0x316bd0;
      _0x59df3c[2] = (_0x1b2449 - _0x73997e) * _0x316bd0;
      _0x59df3c[3] = 0;
      _0x59df3c[4] = (_0xb2def2 - _0x45f8ce) * _0x4a4ff7;
      _0x59df3c[5] = (1 - (_0x21aa30 + _0x4019e6)) * _0x4a4ff7;
      _0x59df3c[6] = (_0x312673 + _0x3d72e2) * _0x4a4ff7;
      _0x59df3c[7] = 0;
      _0x59df3c[8] = (_0x1b2449 + _0x73997e) * _0x24dbc2;
      _0x59df3c[9] = (_0x312673 - _0x3d72e2) * _0x24dbc2;
      _0x59df3c[10] = (1 - (_0x21aa30 + _0xa8ad1b)) * _0x24dbc2;
      _0x59df3c[11] = 0;
      _0x59df3c[12] = _0x1f624b[0];
      _0x59df3c[13] = _0x1f624b[1];
      _0x59df3c[14] = _0x1f624b[2];
      _0x59df3c[15] = 1;
    })(this, _0x49f169, _0x5c5fad, _0x4e1afd);
    return this;
  }
  decompose(_0x579a43, _0x31bac6, _0xa53b06) {
    (function (_0x1f022d, _0x161a68, _0x111c62, _0x261228) {
      let _0x3d63c8 = e([_0x1f022d[0], _0x1f022d[1], _0x1f022d[2]]);
      const _0x5d8d87 = e([_0x1f022d[4], _0x1f022d[5], _0x1f022d[6]]);
      const _0x220ba0 = e([_0x1f022d[8], _0x1f022d[9], _0x1f022d[10]]);
      if (B(_0x1f022d) < 0) {
        _0x3d63c8 = -_0x3d63c8;
      }
      _0x111c62[0] = _0x1f022d[12];
      _0x111c62[1] = _0x1f022d[13];
      _0x111c62[2] = _0x1f022d[14];
      const _0xd1c02b = _0x1f022d.slice();
      const _0x17aa63 = 1 / _0x3d63c8;
      const _0x574d06 = 1 / _0x5d8d87;
      const _0x5923fd = 1 / _0x220ba0;
      _0xd1c02b[0] *= _0x17aa63;
      _0xd1c02b[1] *= _0x17aa63;
      _0xd1c02b[2] *= _0x17aa63;
      _0xd1c02b[4] *= _0x574d06;
      _0xd1c02b[5] *= _0x574d06;
      _0xd1c02b[6] *= _0x574d06;
      _0xd1c02b[8] *= _0x5923fd;
      _0xd1c02b[9] *= _0x5923fd;
      _0xd1c02b[10] *= _0x5923fd;
      D(_0x161a68, _0xd1c02b);
      _0x261228[0] = _0x3d63c8;
      _0x261228[1] = _0x5d8d87;
      _0x261228[2] = _0x220ba0;
    })(this, _0x579a43, _0x31bac6, _0xa53b06);
    return this;
  }
  getRotation(_0x6ad66e) {
    D(_0x6ad66e, this);
    return this;
  }
  getTranslation(_0x2522f8) {
    var _0x30bd9e;
    var _0x1edf3c;
    _0x1edf3c = this;
    (_0x30bd9e = _0x2522f8)[0] = _0x1edf3c[12];
    _0x30bd9e[1] = _0x1edf3c[13];
    _0x30bd9e[2] = _0x1edf3c[14];
    return this;
  }
  getScaling(_0xb99057) {
    N(_0xb99057, this);
    return this;
  }
  getMaxScaleOnAxis() {
    return function (_0x3d156e) {
      let _0x9af66b = _0x3d156e[0];
      let _0x4929fa = _0x3d156e[1];
      let _0x51a22b = _0x3d156e[2];
      let _0x136218 = _0x3d156e[4];
      let _0x31e302 = _0x3d156e[5];
      let _0x3d76eb = _0x3d156e[6];
      let _0x17b66e = _0x3d156e[8];
      let _0x509a52 = _0x3d156e[9];
      let _0x4d8990 = _0x3d156e[10];
      const _0x11594b = _0x9af66b * _0x9af66b + _0x4929fa * _0x4929fa + _0x51a22b * _0x51a22b;
      const _0x4156ff = _0x136218 * _0x136218 + _0x31e302 * _0x31e302 + _0x3d76eb * _0x3d76eb;
      const _0x280490 = _0x17b66e * _0x17b66e + _0x509a52 * _0x509a52 + _0x4d8990 * _0x4d8990;
      return Math.sqrt(Math.max(_0x11594b, _0x4156ff, _0x280490));
    }(this);
  }
  lookAt(_0x4e659e, _0x4eaa13, _0x2dee34) {
    (function (_0x1cb420, _0x56e3ca, _0xf7a681, _0x4a24df) {
      let _0x39db51 = _0x56e3ca[0];
      let _0x3f4736 = _0x56e3ca[1];
      let _0x29582e = _0x56e3ca[2];
      let _0x5c6feb = _0x4a24df[0];
      let _0x832e4d = _0x4a24df[1];
      let _0x17d9d5 = _0x4a24df[2];
      let _0x11eaaa = _0x39db51 - _0xf7a681[0];
      let _0x281f21 = _0x3f4736 - _0xf7a681[1];
      let _0x2d512e = _0x29582e - _0xf7a681[2];
      let _0x37f956 = _0x11eaaa * _0x11eaaa + _0x281f21 * _0x281f21 + _0x2d512e * _0x2d512e;
      if (_0x37f956 === 0) {
        _0x2d512e = 1;
      } else {
        _0x37f956 = 1 / Math.sqrt(_0x37f956);
        _0x11eaaa *= _0x37f956;
        _0x281f21 *= _0x37f956;
        _0x2d512e *= _0x37f956;
      }
      let _0x44d05d = _0x832e4d * _0x2d512e - _0x17d9d5 * _0x281f21;
      let _0x285223 = _0x17d9d5 * _0x11eaaa - _0x5c6feb * _0x2d512e;
      let _0x5f1895 = _0x5c6feb * _0x281f21 - _0x832e4d * _0x11eaaa;
      _0x37f956 = _0x44d05d * _0x44d05d + _0x285223 * _0x285223 + _0x5f1895 * _0x5f1895;
      if (_0x37f956 === 0) {
        if (_0x17d9d5) {
          _0x5c6feb += 0.000001;
        } else if (_0x832e4d) {
          _0x17d9d5 += 0.000001;
        } else {
          _0x832e4d += 0.000001;
        }
        _0x44d05d = _0x832e4d * _0x2d512e - _0x17d9d5 * _0x281f21;
        _0x285223 = _0x17d9d5 * _0x11eaaa - _0x5c6feb * _0x2d512e;
        _0x5f1895 = _0x5c6feb * _0x281f21 - _0x832e4d * _0x11eaaa;
        _0x37f956 = _0x44d05d * _0x44d05d + _0x285223 * _0x285223 + _0x5f1895 * _0x5f1895;
      }
      _0x37f956 = 1 / Math.sqrt(_0x37f956);
      _0x44d05d *= _0x37f956;
      _0x285223 *= _0x37f956;
      _0x5f1895 *= _0x37f956;
      _0x1cb420[0] = _0x44d05d;
      _0x1cb420[1] = _0x285223;
      _0x1cb420[2] = _0x5f1895;
      _0x1cb420[3] = 0;
      _0x1cb420[4] = _0x281f21 * _0x5f1895 - _0x2d512e * _0x285223;
      _0x1cb420[5] = _0x2d512e * _0x44d05d - _0x11eaaa * _0x5f1895;
      _0x1cb420[6] = _0x11eaaa * _0x285223 - _0x281f21 * _0x44d05d;
      _0x1cb420[7] = 0;
      _0x1cb420[8] = _0x11eaaa;
      _0x1cb420[9] = _0x281f21;
      _0x1cb420[10] = _0x2d512e;
      _0x1cb420[11] = 0;
      _0x1cb420[12] = _0x39db51;
      _0x1cb420[13] = _0x3f4736;
      _0x1cb420[14] = _0x29582e;
      _0x1cb420[15] = 1;
    })(this, _0x4e659e, _0x4eaa13, _0x2dee34);
    return this;
  }
  determinant() {
    return B(this);
  }
  fromArray(_0xedc3eb, _0x17f2c5 = 0) {
    this[0] = _0xedc3eb[_0x17f2c5];
    this[1] = _0xedc3eb[_0x17f2c5 + 1];
    this[2] = _0xedc3eb[_0x17f2c5 + 2];
    this[3] = _0xedc3eb[_0x17f2c5 + 3];
    this[4] = _0xedc3eb[_0x17f2c5 + 4];
    this[5] = _0xedc3eb[_0x17f2c5 + 5];
    this[6] = _0xedc3eb[_0x17f2c5 + 6];
    this[7] = _0xedc3eb[_0x17f2c5 + 7];
    this[8] = _0xedc3eb[_0x17f2c5 + 8];
    this[9] = _0xedc3eb[_0x17f2c5 + 9];
    this[10] = _0xedc3eb[_0x17f2c5 + 10];
    this[11] = _0xedc3eb[_0x17f2c5 + 11];
    this[12] = _0xedc3eb[_0x17f2c5 + 12];
    this[13] = _0xedc3eb[_0x17f2c5 + 13];
    this[14] = _0xedc3eb[_0x17f2c5 + 14];
    this[15] = _0xedc3eb[_0x17f2c5 + 15];
    return this;
  }
  toArray(_0x413120 = [], _0x3f2747 = 0) {
    _0x413120[_0x3f2747] = this[0];
    _0x413120[_0x3f2747 + 1] = this[1];
    _0x413120[_0x3f2747 + 2] = this[2];
    _0x413120[_0x3f2747 + 3] = this[3];
    _0x413120[_0x3f2747 + 4] = this[4];
    _0x413120[_0x3f2747 + 5] = this[5];
    _0x413120[_0x3f2747 + 6] = this[6];
    _0x413120[_0x3f2747 + 7] = this[7];
    _0x413120[_0x3f2747 + 8] = this[8];
    _0x413120[_0x3f2747 + 9] = this[9];
    _0x413120[_0x3f2747 + 10] = this[10];
    _0x413120[_0x3f2747 + 11] = this[11];
    _0x413120[_0x3f2747 + 12] = this[12];
    _0x413120[_0x3f2747 + 13] = this[13];
    _0x413120[_0x3f2747 + 14] = this[14];
    _0x413120[_0x3f2747 + 15] = this[15];
    return _0x413120;
  }
}
const z = new U();
class V extends Array {
  constructor(_0x413e83 = 0, _0x49c228 = _0x413e83, _0x312851 = _0x413e83, _0x137919 = "YXZ") {
    super(_0x413e83, _0x49c228, _0x312851);
    this.order = _0x137919;
    this.onChange = () => {};
    this._target = this;
    const _0x2126d2 = ["0", "1", "2"];
    return new Proxy(this, {
      set(_0x37bd5e, _0x2a4377) {
        const _0x30fe73 = Reflect.set(...arguments);
        if (_0x30fe73 && _0x2126d2.includes(_0x2a4377)) {
          _0x37bd5e.onChange();
        }
        return _0x30fe73;
      }
    });
  }
  get x() {
    return this[0];
  }
  get y() {
    return this[1];
  }
  get z() {
    return this[2];
  }
  set x(_0x3a6414) {
    this._target[0] = _0x3a6414;
    this.onChange();
  }
  set y(_0x450405) {
    this._target[1] = _0x450405;
    this.onChange();
  }
  set z(_0x434e68) {
    this._target[2] = _0x434e68;
    this.onChange();
  }
  set(_0x1164b0, _0x559111 = _0x1164b0, _0x4d6a77 = _0x1164b0) {
    if (_0x1164b0.length) {
      return this.copy(_0x1164b0);
    } else {
      this._target[0] = _0x1164b0;
      this._target[1] = _0x559111;
      this._target[2] = _0x4d6a77;
      this.onChange();
      return this;
    }
  }
  copy(_0x76285e) {
    this._target[0] = _0x76285e[0];
    this._target[1] = _0x76285e[1];
    this._target[2] = _0x76285e[2];
    this.onChange();
    return this;
  }
  reorder(_0x2af527) {
    this._target.order = _0x2af527;
    this.onChange();
    return this;
  }
  fromRotationMatrix(_0x5c9b75, _0x342cb4 = this.order) {
    (function (_0x4e4a04, _0x43c189, _0x206959 = "YXZ") {
      if (_0x206959 === "XYZ") {
        _0x4e4a04[1] = Math.asin(Math.min(Math.max(_0x43c189[8], -1), 1));
        if (Math.abs(_0x43c189[8]) < 0.99999) {
          _0x4e4a04[0] = Math.atan2(-_0x43c189[9], _0x43c189[10]);
          _0x4e4a04[2] = Math.atan2(-_0x43c189[4], _0x43c189[0]);
        } else {
          _0x4e4a04[0] = Math.atan2(_0x43c189[6], _0x43c189[5]);
          _0x4e4a04[2] = 0;
        }
      } else if (_0x206959 === "YXZ") {
        _0x4e4a04[0] = Math.asin(-Math.min(Math.max(_0x43c189[9], -1), 1));
        if (Math.abs(_0x43c189[9]) < 0.99999) {
          _0x4e4a04[1] = Math.atan2(_0x43c189[8], _0x43c189[10]);
          _0x4e4a04[2] = Math.atan2(_0x43c189[1], _0x43c189[5]);
        } else {
          _0x4e4a04[1] = Math.atan2(-_0x43c189[2], _0x43c189[0]);
          _0x4e4a04[2] = 0;
        }
      } else if (_0x206959 === "ZXY") {
        _0x4e4a04[0] = Math.asin(Math.min(Math.max(_0x43c189[6], -1), 1));
        if (Math.abs(_0x43c189[6]) < 0.99999) {
          _0x4e4a04[1] = Math.atan2(-_0x43c189[2], _0x43c189[10]);
          _0x4e4a04[2] = Math.atan2(-_0x43c189[4], _0x43c189[5]);
        } else {
          _0x4e4a04[1] = 0;
          _0x4e4a04[2] = Math.atan2(_0x43c189[1], _0x43c189[0]);
        }
      } else if (_0x206959 === "ZYX") {
        _0x4e4a04[1] = Math.asin(-Math.min(Math.max(_0x43c189[2], -1), 1));
        if (Math.abs(_0x43c189[2]) < 0.99999) {
          _0x4e4a04[0] = Math.atan2(_0x43c189[6], _0x43c189[10]);
          _0x4e4a04[2] = Math.atan2(_0x43c189[1], _0x43c189[0]);
        } else {
          _0x4e4a04[0] = 0;
          _0x4e4a04[2] = Math.atan2(-_0x43c189[4], _0x43c189[5]);
        }
      } else if (_0x206959 === "YZX") {
        _0x4e4a04[2] = Math.asin(Math.min(Math.max(_0x43c189[1], -1), 1));
        if (Math.abs(_0x43c189[1]) < 0.99999) {
          _0x4e4a04[0] = Math.atan2(-_0x43c189[9], _0x43c189[5]);
          _0x4e4a04[1] = Math.atan2(-_0x43c189[2], _0x43c189[0]);
        } else {
          _0x4e4a04[0] = 0;
          _0x4e4a04[1] = Math.atan2(_0x43c189[8], _0x43c189[10]);
        }
      } else if (_0x206959 === "XZY") {
        _0x4e4a04[2] = Math.asin(-Math.min(Math.max(_0x43c189[4], -1), 1));
        if (Math.abs(_0x43c189[4]) < 0.99999) {
          _0x4e4a04[0] = Math.atan2(_0x43c189[6], _0x43c189[5]);
          _0x4e4a04[1] = Math.atan2(_0x43c189[8], _0x43c189[0]);
        } else {
          _0x4e4a04[0] = Math.atan2(-_0x43c189[9], _0x43c189[10]);
          _0x4e4a04[1] = 0;
        }
      }
    })(this._target, _0x5c9b75, _0x342cb4);
    this.onChange();
    return this;
  }
  fromQuaternion(_0x4c0978, _0x5475a7 = this.order, _0x422f9b) {
    z.fromQuaternion(_0x4c0978);
    this._target.fromRotationMatrix(z, _0x5475a7);
    if (!_0x422f9b) {
      this.onChange();
    }
    return this;
  }
  fromArray(_0x4c6a9b, _0x44676e = 0) {
    this._target[0] = _0x4c6a9b[_0x44676e];
    this._target[1] = _0x4c6a9b[_0x44676e + 1];
    this._target[2] = _0x4c6a9b[_0x44676e + 2];
    return this;
  }
  toArray(_0x5aad1f = [], _0x18af28 = 0) {
    _0x5aad1f[_0x18af28] = this[0];
    _0x5aad1f[_0x18af28 + 1] = this[1];
    _0x5aad1f[_0x18af28 + 2] = this[2];
    return _0x5aad1f;
  }
}
class k {
  constructor() {
    this.parent = null;
    this.children = [];
    this.visible = true;
    this.matrix = new U();
    this.worldMatrix = new U();
    this.matrixAutoUpdate = true;
    this.worldMatrixNeedsUpdate = false;
    this.position = new c();
    this.quaternion = new T();
    this.scale = new c(1);
    this.rotation = new V();
    this.up = new c(0, 1, 0);
    this.rotation._target.onChange = () => this.quaternion.fromEuler(this.rotation, true);
    this.quaternion._target.onChange = () => this.rotation.fromQuaternion(this.quaternion, undefined, true);
  }
  setParent(_0x570f0c, _0x296606 = true) {
    if (this.parent && _0x570f0c !== this.parent) {
      this.parent.removeChild(this, false);
    }
    this.parent = _0x570f0c;
    if (_0x296606 && _0x570f0c) {
      _0x570f0c.addChild(this, false);
    }
  }
  addChild(_0x3caaf2, _0x14d9fb = true) {
    if (!~this.children.indexOf(_0x3caaf2)) {
      this.children.push(_0x3caaf2);
    }
    if (_0x14d9fb) {
      _0x3caaf2.setParent(this, false);
    }
  }
  removeChild(_0x5349eb, _0x57badf = true) {
    if (~this.children.indexOf(_0x5349eb)) {
      this.children.splice(this.children.indexOf(_0x5349eb), 1);
    }
    if (_0x57badf) {
      _0x5349eb.setParent(null, false);
    }
  }
  updateMatrixWorld(_0x1e857f) {
    if (this.matrixAutoUpdate) {
      this.updateMatrix();
    }
    if (this.worldMatrixNeedsUpdate || _0x1e857f) {
      if (this.parent === null) {
        this.worldMatrix.copy(this.matrix);
      } else {
        this.worldMatrix.multiply(this.parent.worldMatrix, this.matrix);
      }
      this.worldMatrixNeedsUpdate = false;
      _0x1e857f = true;
    }
    for (let _0x49db0e = 0, _0x575af6 = this.children.length; _0x49db0e < _0x575af6; _0x49db0e++) {
      this.children[_0x49db0e].updateMatrixWorld(_0x1e857f);
    }
  }
  updateMatrix() {
    this.matrix.compose(this.quaternion, this.position, this.scale);
    this.worldMatrixNeedsUpdate = true;
  }
  traverse(_0x29d7c7) {
    if (!_0x29d7c7(this)) {
      for (let _0x3eb1a3 = 0, _0x37a77a = this.children.length; _0x3eb1a3 < _0x37a77a; _0x3eb1a3++) {
        this.children[_0x3eb1a3].traverse(_0x29d7c7);
      }
    }
  }
  decompose() {
    this.matrix.decompose(this.quaternion._target, this.position, this.scale);
    this.rotation.fromQuaternion(this.quaternion);
  }
  lookAt(_0x40d5a1, _0xd151f0 = false) {
    if (_0xd151f0) {
      this.matrix.lookAt(this.position, _0x40d5a1, this.up);
    } else {
      this.matrix.lookAt(_0x40d5a1, this.position, this.up);
    }
    this.matrix.getRotation(this.quaternion._target);
    this.rotation.fromQuaternion(this.quaternion);
  }
}
function G(_0x5d89eb, _0x561bf9, _0x1fb63d) {
  let _0x1f845c = _0x561bf9[0];
  let _0x1507ef = _0x561bf9[1];
  let _0x2a5bcf = _0x561bf9[2];
  let _0x395a73 = _0x561bf9[3];
  let _0x5f209d = _0x561bf9[4];
  let _0x8a95d3 = _0x561bf9[5];
  let _0x1d00a0 = _0x561bf9[6];
  let _0x497e4e = _0x561bf9[7];
  let _0x383c59 = _0x561bf9[8];
  let _0x581925 = _0x1fb63d[0];
  let _0x49ca51 = _0x1fb63d[1];
  let _0x5ef4a3 = _0x1fb63d[2];
  let _0x14a8ca = _0x1fb63d[3];
  let _0x3152c5 = _0x1fb63d[4];
  let _0x15ef5e = _0x1fb63d[5];
  let _0x382820 = _0x1fb63d[6];
  let _0xff0a10 = _0x1fb63d[7];
  let _0x5638f7 = _0x1fb63d[8];
  _0x5d89eb[0] = _0x581925 * _0x1f845c + _0x49ca51 * _0x395a73 + _0x5ef4a3 * _0x1d00a0;
  _0x5d89eb[1] = _0x581925 * _0x1507ef + _0x49ca51 * _0x5f209d + _0x5ef4a3 * _0x497e4e;
  _0x5d89eb[2] = _0x581925 * _0x2a5bcf + _0x49ca51 * _0x8a95d3 + _0x5ef4a3 * _0x383c59;
  _0x5d89eb[3] = _0x14a8ca * _0x1f845c + _0x3152c5 * _0x395a73 + _0x15ef5e * _0x1d00a0;
  _0x5d89eb[4] = _0x14a8ca * _0x1507ef + _0x3152c5 * _0x5f209d + _0x15ef5e * _0x497e4e;
  _0x5d89eb[5] = _0x14a8ca * _0x2a5bcf + _0x3152c5 * _0x8a95d3 + _0x15ef5e * _0x383c59;
  _0x5d89eb[6] = _0x382820 * _0x1f845c + _0xff0a10 * _0x395a73 + _0x5638f7 * _0x1d00a0;
  _0x5d89eb[7] = _0x382820 * _0x1507ef + _0xff0a10 * _0x5f209d + _0x5638f7 * _0x497e4e;
  _0x5d89eb[8] = _0x382820 * _0x2a5bcf + _0xff0a10 * _0x8a95d3 + _0x5638f7 * _0x383c59;
  return _0x5d89eb;
}
class W extends Array {
  constructor(_0x3df057 = 1, _0x4bf27d = 0, _0x6055cf = 0, _0x2838b1 = 0, _0x582bb1 = 1, _0x5437ca = 0, _0x4eec0f = 0, _0x528da6 = 0, _0x3408cd = 1) {
    super(_0x3df057, _0x4bf27d, _0x6055cf, _0x2838b1, _0x582bb1, _0x5437ca, _0x4eec0f, _0x528da6, _0x3408cd);
    return this;
  }
  set(_0x129277, _0x1fc4ee, _0x11619f, _0x4c3b16, _0x5eaaf4, _0x52fd4e, _0x3a153e, _0xbe0cf9, _0x15d6bc) {
    if (_0x129277.length) {
      return this.copy(_0x129277);
    } else {
      (function (_0x1fc870, _0x34ae77, _0x190f73, _0x301f04, _0xdb642b, _0x1235f0, _0x5e7d39, _0x22b886, _0x3a3bee, _0x2370d3) {
        _0x1fc870[0] = _0x34ae77;
        _0x1fc870[1] = _0x190f73;
        _0x1fc870[2] = _0x301f04;
        _0x1fc870[3] = _0xdb642b;
        _0x1fc870[4] = _0x1235f0;
        _0x1fc870[5] = _0x5e7d39;
        _0x1fc870[6] = _0x22b886;
        _0x1fc870[7] = _0x3a3bee;
        _0x1fc870[8] = _0x2370d3;
      })(this, _0x129277, _0x1fc4ee, _0x11619f, _0x4c3b16, _0x5eaaf4, _0x52fd4e, _0x3a153e, _0xbe0cf9, _0x15d6bc);
      return this;
    }
  }
  translate(_0x22a100, _0x8e24ca = this) {
    (function (_0x5c565c, _0xecc375, _0x185af8) {
      let _0x52d8a4 = _0xecc375[0];
      let _0x56f463 = _0xecc375[1];
      let _0x14815b = _0xecc375[2];
      let _0x12ef6c = _0xecc375[3];
      let _0x1afd4a = _0xecc375[4];
      let _0x40e749 = _0xecc375[5];
      let _0x4ce2cb = _0xecc375[6];
      let _0x23d7e9 = _0xecc375[7];
      let _0x58369b = _0xecc375[8];
      let _0x5232b6 = _0x185af8[0];
      let _0x354afe = _0x185af8[1];
      _0x5c565c[0] = _0x52d8a4;
      _0x5c565c[1] = _0x56f463;
      _0x5c565c[2] = _0x14815b;
      _0x5c565c[3] = _0x12ef6c;
      _0x5c565c[4] = _0x1afd4a;
      _0x5c565c[5] = _0x40e749;
      _0x5c565c[6] = _0x5232b6 * _0x52d8a4 + _0x354afe * _0x12ef6c + _0x4ce2cb;
      _0x5c565c[7] = _0x5232b6 * _0x56f463 + _0x354afe * _0x1afd4a + _0x23d7e9;
      _0x5c565c[8] = _0x5232b6 * _0x14815b + _0x354afe * _0x40e749 + _0x58369b;
    })(this, _0x8e24ca, _0x22a100);
    return this;
  }
  rotate(_0x283f5b, _0x4cc199 = this) {
    (function (_0x4dec3f, _0x3c37be, _0x3131e4) {
      let _0xd52e13 = _0x3c37be[0];
      let _0x33498e = _0x3c37be[1];
      let _0x3d52af = _0x3c37be[2];
      let _0x3efa65 = _0x3c37be[3];
      let _0x518bea = _0x3c37be[4];
      let _0x147eb7 = _0x3c37be[5];
      let _0x252d91 = _0x3c37be[6];
      let _0x52b8e8 = _0x3c37be[7];
      let _0x4e3034 = _0x3c37be[8];
      let _0x377f8f = Math.sin(_0x3131e4);
      let _0x3507d5 = Math.cos(_0x3131e4);
      _0x4dec3f[0] = _0x3507d5 * _0xd52e13 + _0x377f8f * _0x3efa65;
      _0x4dec3f[1] = _0x3507d5 * _0x33498e + _0x377f8f * _0x518bea;
      _0x4dec3f[2] = _0x3507d5 * _0x3d52af + _0x377f8f * _0x147eb7;
      _0x4dec3f[3] = _0x3507d5 * _0x3efa65 - _0x377f8f * _0xd52e13;
      _0x4dec3f[4] = _0x3507d5 * _0x518bea - _0x377f8f * _0x33498e;
      _0x4dec3f[5] = _0x3507d5 * _0x147eb7 - _0x377f8f * _0x3d52af;
      _0x4dec3f[6] = _0x252d91;
      _0x4dec3f[7] = _0x52b8e8;
      _0x4dec3f[8] = _0x4e3034;
    })(this, _0x4cc199, _0x283f5b);
    return this;
  }
  scale(_0x1da8f6, _0x224031 = this) {
    (function (_0x3a6f5c, _0x79c09e, _0x581833) {
      let _0x585715 = _0x581833[0];
      let _0x1f5fa5 = _0x581833[1];
      _0x3a6f5c[0] = _0x585715 * _0x79c09e[0];
      _0x3a6f5c[1] = _0x585715 * _0x79c09e[1];
      _0x3a6f5c[2] = _0x585715 * _0x79c09e[2];
      _0x3a6f5c[3] = _0x1f5fa5 * _0x79c09e[3];
      _0x3a6f5c[4] = _0x1f5fa5 * _0x79c09e[4];
      _0x3a6f5c[5] = _0x1f5fa5 * _0x79c09e[5];
      _0x3a6f5c[6] = _0x79c09e[6];
      _0x3a6f5c[7] = _0x79c09e[7];
      _0x3a6f5c[8] = _0x79c09e[8];
    })(this, _0x224031, _0x1da8f6);
    return this;
  }
  multiply(_0x472d57, _0x9d8ebe) {
    if (_0x9d8ebe) {
      G(this, _0x472d57, _0x9d8ebe);
    } else {
      G(this, this, _0x472d57);
    }
    return this;
  }
  identity() {
    var _0x3beaa6;
    (_0x3beaa6 = this)[0] = 1;
    _0x3beaa6[1] = 0;
    _0x3beaa6[2] = 0;
    _0x3beaa6[3] = 0;
    _0x3beaa6[4] = 1;
    _0x3beaa6[5] = 0;
    _0x3beaa6[6] = 0;
    _0x3beaa6[7] = 0;
    _0x3beaa6[8] = 1;
    return this;
  }
  copy(_0x5a493a) {
    var _0x2c39e6;
    var _0x113348;
    _0x113348 = _0x5a493a;
    (_0x2c39e6 = this)[0] = _0x113348[0];
    _0x2c39e6[1] = _0x113348[1];
    _0x2c39e6[2] = _0x113348[2];
    _0x2c39e6[3] = _0x113348[3];
    _0x2c39e6[4] = _0x113348[4];
    _0x2c39e6[5] = _0x113348[5];
    _0x2c39e6[6] = _0x113348[6];
    _0x2c39e6[7] = _0x113348[7];
    _0x2c39e6[8] = _0x113348[8];
    return this;
  }
  fromMatrix4(_0x26671a) {
    var _0x3d5fcb;
    var _0x178555;
    _0x178555 = _0x26671a;
    (_0x3d5fcb = this)[0] = _0x178555[0];
    _0x3d5fcb[1] = _0x178555[1];
    _0x3d5fcb[2] = _0x178555[2];
    _0x3d5fcb[3] = _0x178555[4];
    _0x3d5fcb[4] = _0x178555[5];
    _0x3d5fcb[5] = _0x178555[6];
    _0x3d5fcb[6] = _0x178555[8];
    _0x3d5fcb[7] = _0x178555[9];
    _0x3d5fcb[8] = _0x178555[10];
    return this;
  }
  fromQuaternion(_0x10fa60) {
    (function (_0x4ccdd4, _0x4d9fbb) {
      let _0x3ecbcc = _0x4d9fbb[0];
      let _0x229f51 = _0x4d9fbb[1];
      let _0x3fb73e = _0x4d9fbb[2];
      let _0x3793ab = _0x4d9fbb[3];
      let _0x19377d = _0x3ecbcc + _0x3ecbcc;
      let _0x42d016 = _0x229f51 + _0x229f51;
      let _0xe2ca0d = _0x3fb73e + _0x3fb73e;
      let _0x5054ea = _0x3ecbcc * _0x19377d;
      let _0x6e8601 = _0x229f51 * _0x19377d;
      let _0x64d065 = _0x229f51 * _0x42d016;
      let _0x3526c9 = _0x3fb73e * _0x19377d;
      let _0x511f71 = _0x3fb73e * _0x42d016;
      let _0x4db743 = _0x3fb73e * _0xe2ca0d;
      let _0x588b55 = _0x3793ab * _0x19377d;
      let _0xe8dcfd = _0x3793ab * _0x42d016;
      let _0x1f392d = _0x3793ab * _0xe2ca0d;
      _0x4ccdd4[0] = 1 - _0x64d065 - _0x4db743;
      _0x4ccdd4[3] = _0x6e8601 - _0x1f392d;
      _0x4ccdd4[6] = _0x3526c9 + _0xe8dcfd;
      _0x4ccdd4[1] = _0x6e8601 + _0x1f392d;
      _0x4ccdd4[4] = 1 - _0x5054ea - _0x4db743;
      _0x4ccdd4[7] = _0x511f71 - _0x588b55;
      _0x4ccdd4[2] = _0x3526c9 - _0xe8dcfd;
      _0x4ccdd4[5] = _0x511f71 + _0x588b55;
      _0x4ccdd4[8] = 1 - _0x5054ea - _0x64d065;
    })(this, _0x10fa60);
    return this;
  }
  fromBasis(_0x562404, _0x25b591, _0x702faa) {
    this.set(_0x562404[0], _0x562404[1], _0x562404[2], _0x25b591[0], _0x25b591[1], _0x25b591[2], _0x702faa[0], _0x702faa[1], _0x702faa[2]);
    return this;
  }
  inverse(_0x5ba1fe = this) {
    (function (_0x5b5390, _0x5d03a0) {
      let _0x80e656 = _0x5d03a0[0];
      let _0x50d9f2 = _0x5d03a0[1];
      let _0xd2dde1 = _0x5d03a0[2];
      let _0x3fe12a = _0x5d03a0[3];
      let _0x218743 = _0x5d03a0[4];
      let _0x18d162 = _0x5d03a0[5];
      let _0x3de0d1 = _0x5d03a0[6];
      let _0x35db3d = _0x5d03a0[7];
      let _0x18b506 = _0x5d03a0[8];
      let _0x3e1044 = _0x18b506 * _0x218743 - _0x18d162 * _0x35db3d;
      let _0x134457 = -_0x18b506 * _0x3fe12a + _0x18d162 * _0x3de0d1;
      let _0x532274 = _0x35db3d * _0x3fe12a - _0x218743 * _0x3de0d1;
      let _0x892646 = _0x80e656 * _0x3e1044 + _0x50d9f2 * _0x134457 + _0xd2dde1 * _0x532274;
      if (_0x892646) {
        _0x892646 = 1 / _0x892646;
        _0x5b5390[0] = _0x3e1044 * _0x892646;
        _0x5b5390[1] = (-_0x18b506 * _0x50d9f2 + _0xd2dde1 * _0x35db3d) * _0x892646;
        _0x5b5390[2] = (_0x18d162 * _0x50d9f2 - _0xd2dde1 * _0x218743) * _0x892646;
        _0x5b5390[3] = _0x134457 * _0x892646;
        _0x5b5390[4] = (_0x18b506 * _0x80e656 - _0xd2dde1 * _0x3de0d1) * _0x892646;
        _0x5b5390[5] = (-_0x18d162 * _0x80e656 + _0xd2dde1 * _0x3fe12a) * _0x892646;
        _0x5b5390[6] = _0x532274 * _0x892646;
        _0x5b5390[7] = (-_0x35db3d * _0x80e656 + _0x50d9f2 * _0x3de0d1) * _0x892646;
        _0x5b5390[8] = (_0x218743 * _0x80e656 - _0x50d9f2 * _0x3fe12a) * _0x892646;
      }
    })(this, _0x5ba1fe);
    return this;
  }
  getNormalMatrix(_0x3f9e07) {
    (function (_0x2ba40f, _0x5336ae) {
      let _0x22bcc0 = _0x5336ae[0];
      let _0x30e8ed = _0x5336ae[1];
      let _0x43691a = _0x5336ae[2];
      let _0x339ba4 = _0x5336ae[3];
      let _0x32bb14 = _0x5336ae[4];
      let _0x347287 = _0x5336ae[5];
      let _0x5f55d5 = _0x5336ae[6];
      let _0x5bfc66 = _0x5336ae[7];
      let _0x496a19 = _0x5336ae[8];
      let _0x4e3741 = _0x5336ae[9];
      let _0x560038 = _0x5336ae[10];
      let _0x31f3b6 = _0x5336ae[11];
      let _0x41ddfa = _0x5336ae[12];
      let _0x1ca3ef = _0x5336ae[13];
      let _0x314c58 = _0x5336ae[14];
      let _0x4b118e = _0x5336ae[15];
      let _0x229669 = _0x22bcc0 * _0x347287 - _0x30e8ed * _0x32bb14;
      let _0x500a48 = _0x22bcc0 * _0x5f55d5 - _0x43691a * _0x32bb14;
      let _0x321383 = _0x22bcc0 * _0x5bfc66 - _0x339ba4 * _0x32bb14;
      let _0x24bd27 = _0x30e8ed * _0x5f55d5 - _0x43691a * _0x347287;
      let _0x5ae3ef = _0x30e8ed * _0x5bfc66 - _0x339ba4 * _0x347287;
      let _0x161464 = _0x43691a * _0x5bfc66 - _0x339ba4 * _0x5f55d5;
      let _0x309d11 = _0x496a19 * _0x1ca3ef - _0x4e3741 * _0x41ddfa;
      let _0x42fb33 = _0x496a19 * _0x314c58 - _0x560038 * _0x41ddfa;
      let _0x2adf63 = _0x496a19 * _0x4b118e - _0x31f3b6 * _0x41ddfa;
      let _0x4bafdb = _0x4e3741 * _0x314c58 - _0x560038 * _0x1ca3ef;
      let _0xaa882 = _0x4e3741 * _0x4b118e - _0x31f3b6 * _0x1ca3ef;
      let _0xffa40 = _0x560038 * _0x4b118e - _0x31f3b6 * _0x314c58;
      let _0x23ceaa = _0x229669 * _0xffa40 - _0x500a48 * _0xaa882 + _0x321383 * _0x4bafdb + _0x24bd27 * _0x2adf63 - _0x5ae3ef * _0x42fb33 + _0x161464 * _0x309d11;
      if (_0x23ceaa) {
        _0x23ceaa = 1 / _0x23ceaa;
        _0x2ba40f[0] = (_0x347287 * _0xffa40 - _0x5f55d5 * _0xaa882 + _0x5bfc66 * _0x4bafdb) * _0x23ceaa;
        _0x2ba40f[1] = (_0x5f55d5 * _0x2adf63 - _0x32bb14 * _0xffa40 - _0x5bfc66 * _0x42fb33) * _0x23ceaa;
        _0x2ba40f[2] = (_0x32bb14 * _0xaa882 - _0x347287 * _0x2adf63 + _0x5bfc66 * _0x309d11) * _0x23ceaa;
        _0x2ba40f[3] = (_0x43691a * _0xaa882 - _0x30e8ed * _0xffa40 - _0x339ba4 * _0x4bafdb) * _0x23ceaa;
        _0x2ba40f[4] = (_0x22bcc0 * _0xffa40 - _0x43691a * _0x2adf63 + _0x339ba4 * _0x42fb33) * _0x23ceaa;
        _0x2ba40f[5] = (_0x30e8ed * _0x2adf63 - _0x22bcc0 * _0xaa882 - _0x339ba4 * _0x309d11) * _0x23ceaa;
        _0x2ba40f[6] = (_0x1ca3ef * _0x161464 - _0x314c58 * _0x5ae3ef + _0x4b118e * _0x24bd27) * _0x23ceaa;
        _0x2ba40f[7] = (_0x314c58 * _0x321383 - _0x41ddfa * _0x161464 - _0x4b118e * _0x500a48) * _0x23ceaa;
        _0x2ba40f[8] = (_0x41ddfa * _0x5ae3ef - _0x1ca3ef * _0x321383 + _0x4b118e * _0x229669) * _0x23ceaa;
      }
    })(this, _0x3f9e07);
    return this;
  }
}
let X = 0;
class Y extends k {
  constructor(_0x58fb0d, {
    geometry: _0x4eb2ff,
    program: _0xb2c434,
    mode: _0x47994e = _0x58fb0d.TRIANGLES,
    frustumCulled: _0xd943fe = true,
    renderOrder: _0x5b7ad9 = 0
  } = {}) {
    super();
    if (!_0x58fb0d.canvas) {
      console.error("gl not passed as first argument to Mesh");
    }
    this.gl = _0x58fb0d;
    this.id = X++;
    this.geometry = _0x4eb2ff;
    this.program = _0xb2c434;
    this.mode = _0x47994e;
    this.frustumCulled = _0xd943fe;
    this.renderOrder = _0x5b7ad9;
    this.modelViewMatrix = new U();
    this.normalMatrix = new W();
    this.beforeRenderCallbacks = [];
    this.afterRenderCallbacks = [];
  }
  onBeforeRender(_0x263269) {
    this.beforeRenderCallbacks.push(_0x263269);
    return this;
  }
  onAfterRender(_0x2f8a35) {
    this.afterRenderCallbacks.push(_0x2f8a35);
    return this;
  }
  draw({
    camera: _0x2e46ab
  } = {}) {
    if (_0x2e46ab) {
      if (!this.program.uniforms.modelMatrix) {
        Object.assign(this.program.uniforms, {
          modelMatrix: {
            value: null
          },
          viewMatrix: {
            value: null
          },
          modelViewMatrix: {
            value: null
          },
          normalMatrix: {
            value: null
          },
          projectionMatrix: {
            value: null
          },
          cameraPosition: {
            value: null
          }
        });
      }
      this.program.uniforms.projectionMatrix.value = _0x2e46ab.projectionMatrix;
      this.program.uniforms.cameraPosition.value = _0x2e46ab.worldPosition;
      this.program.uniforms.viewMatrix.value = _0x2e46ab.viewMatrix;
      this.modelViewMatrix.multiply(_0x2e46ab.viewMatrix, this.worldMatrix);
      this.normalMatrix.getNormalMatrix(this.modelViewMatrix);
      this.program.uniforms.modelMatrix.value = this.worldMatrix;
      this.program.uniforms.modelViewMatrix.value = this.modelViewMatrix;
      this.program.uniforms.normalMatrix.value = this.normalMatrix;
    }
    this.beforeRenderCallbacks.forEach(_0x44459c => _0x44459c && _0x44459c({
      mesh: this,
      camera: _0x2e46ab
    }));
    let _0x5b6953 = this.program.cullFace && this.worldMatrix.determinant() < 0;
    this.program.use({
      flipFaces: _0x5b6953
    });
    this.geometry.draw({
      mode: this.mode,
      program: this.program
    });
    this.afterRenderCallbacks.forEach(_0x1646d9 => _0x1646d9 && _0x1646d9({
      mesh: this,
      camera: _0x2e46ab
    }));
  }
}
class Z extends m {
  constructor(_0x4b59dd, {
    attributes: _0x52fcf6 = {}
  } = {}) {
    Object.assign(_0x52fcf6, {
      position: {
        size: 2,
        data: new Float32Array([-1, -1, 3, -1, -1, 3])
      },
      uv: {
        size: 2,
        data: new Float32Array([0, 0, 2, 0, 0, 2])
      }
    });
    super(_0x4b59dd, _0x52fcf6);
  }
}
function j(_0x9ff0db, _0x42a29d) {
  const _0x2ebda2 = _0x418098.useRef(_0x42a29d);
  _0x2ebda2.current = _0x42a29d;
  const _0x16bee8 = _0x418098.useRef(true);
  const _0x3defce = _0x418098.useRef(false);
  const _0xc8b66a = _0x418098.useRef(null);
  _0x418098.useEffect(() => {
    const _0x46b90d = _0x9ff0db.current;
    if (!_0x46b90d) {
      return;
    }
    const _0x29b29b = new IntersectionObserver(([_0x33e593]) => {
      _0x16bee8.current = _0x33e593.isIntersecting;
    }, {
      threshold: 0
    });
    _0x29b29b.observe(_0x46b90d);
    return () => _0x29b29b.disconnect();
  }, [_0x9ff0db]);
  const _0x514eee = _0x418098.useCallback(() => {
    const _0x12ea48 = _0x9ff0db.current;
    if (!_0x12ea48) {
      return;
    }
    if (_0xc8b66a.current) {
      _0xc8b66a.current();
      _0xc8b66a.current = null;
    }
    const _0x2d3d25 = _0x2ebda2.current;
    const _0x2a69b1 = new y({
      alpha: true,
      premultipliedAlpha: _0x2d3d25.premultipliedAlpha ?? false,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio, 2)
    });
    const _0x429b4c = _0x2a69b1.gl;
    _0x429b4c.clearColor(0, 0, 0, 0);
    if (_0x2d3d25.manualBlend) {
      _0x429b4c.enable(_0x429b4c.BLEND);
      _0x429b4c.blendFunc(_0x429b4c.ONE, _0x429b4c.ONE_MINUS_SRC_ALPHA);
    }
    _0x429b4c.canvas.style.backgroundColor = "transparent";
    const _0x5115b5 = new Z(_0x429b4c);
    if (_0x2d3d25.removeUV && _0x5115b5.attributes.uv) {
      delete _0x5115b5.attributes.uv;
    }
    const _0x564b3d = new M(_0x429b4c, {
      vertex: _0x2d3d25.vertex,
      fragment: _0x2d3d25.fragment,
      uniforms: {
        ..._0x2d3d25.uniforms
      }
    });
    const _0x474a7a = new Y(_0x429b4c, {
      geometry: _0x5115b5,
      program: _0x564b3d
    });
    function _0x17d3ae() {
      if (!_0x12ea48) {
        return;
      }
      const _0x27a5b1 = _0x12ea48.offsetWidth;
      const _0x661033 = _0x12ea48.offsetHeight;
      _0x2a69b1.setSize(_0x27a5b1, _0x661033);
      _0x2ebda2.current.onResize?.(_0x564b3d, _0x27a5b1, _0x661033);
    }
    _0x12ea48.appendChild(_0x429b4c.canvas);
    window.addEventListener("resize", _0x17d3ae);
    _0x17d3ae();
    _0x2d3d25.onInit?.(_0x429b4c, _0x564b3d, _0x2a69b1);
    let _0xc7ee70 = null;
    function _0xb99e26(_0x5a7ea8) {
      _0x5a7ea8.preventDefault();
      _0x3defce.current = true;
      cancelAnimationFrame(_0x336a97);
      _0xc7ee70 = setTimeout(() => {
        if (_0x3defce.current) {
          _0x514eee();
        }
      }, 1000);
    }
    function _0x4b2c25() {
      _0x3defce.current = false;
      if (_0xc7ee70) {
        clearTimeout(_0xc7ee70);
        _0xc7ee70 = null;
      }
      _0x514eee();
    }
    _0x429b4c.canvas.addEventListener("webglcontextlost", _0xb99e26);
    _0x429b4c.canvas.addEventListener("webglcontextrestored", _0x4b2c25);
    let _0x336a97 = 0;
    let _0x4b3dbf = 0;
    _0x336a97 = requestAnimationFrame(function _0x43dc86(_0x37eff4) {
      _0x336a97 = requestAnimationFrame(_0x43dc86);
      if (!_0x16bee8.current || _0x3defce.current) {
        return;
      }
      const _0x53fdba = (_0x37eff4 - _0x4b3dbf) * 0.001;
      _0x4b3dbf = _0x37eff4;
      _0x2ebda2.current.onFrame(_0x564b3d, _0x37eff4, _0x53fdba);
      _0x2a69b1.render({
        scene: _0x474a7a
      });
    });
    _0xc8b66a.current = () => {
      cancelAnimationFrame(_0x336a97);
      window.removeEventListener("resize", _0x17d3ae);
      _0x429b4c.canvas.removeEventListener("webglcontextlost", _0xb99e26);
      _0x429b4c.canvas.removeEventListener("webglcontextrestored", _0x4b2c25);
      if (_0xc7ee70) {
        clearTimeout(_0xc7ee70);
      }
      if (_0x12ea48 && _0x429b4c.canvas.parentNode === _0x12ea48) {
        _0x12ea48.removeChild(_0x429b4c.canvas);
      }
      _0x429b4c.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [_0x9ff0db]);
  return {
    createRenderer: _0x514eee,
    isVisibleRef: _0x16bee8,
    contextLostRef: _0x3defce,
    cleanupRef: _0xc8b66a
  };
}
export { j as u };