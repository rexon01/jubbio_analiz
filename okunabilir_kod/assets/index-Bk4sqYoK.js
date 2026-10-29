import { r as _0x46e66d, j as _0x5c890d, aj as _0x5810db } from "./index-cQfEKR1W.js";
var n;
var {
  min: o,
  max: s,
  abs: i,
  floor: l
} = Math;
var c = (_0x514599, _0x42dfc3, _0x30fbd8) => o(_0x30fbd8, s(_0x42dfc3, _0x514599));
var u = _0x5caa7b => _0x5caa7b.sort((_0x5eaeab, _0x30e225) => _0x5eaeab - _0x30e225);
var a = setTimeout;
var f = clearTimeout;
var d = typeof queueMicrotask == "function" ? queueMicrotask : _0x37d446 => {
  Promise.resolve().then(_0x37d446);
};
var h = () => {
  let _0x20ef82;
  return [new Promise(_0x313acd => {
    _0x20ef82 = _0x313acd;
  }), _0x20ef82];
};
var v = typeof window != "undefined";
var p = () => {
  if (n == null) {
    n = /iP(hone|od|ad)/.test(navigator.userAgent) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 0;
  }
  return n;
};
var m = _0x2a36c4 => s(_0x2a36c4.t(), _0x2a36c4.o());
var g = ({
  l: _0x142380,
  i: _0x1d0c0c,
  u: _0xd2b974,
  h: _0x1e4522,
  t: _0x5135dd,
  $: _0x5c0a9e,
  p: _0x1041c6,
  m: _0x24b58e,
  S: _0x10a288
}, _0x440845 = 0) => {
  let _0x14b540 = !!_0x440845;
  let _0x1f819f = 1;
  let _0x3305de = 0;
  let _0x185c9c = 0;
  let _0x3814b7 = 0;
  let _0x39dc13 = 0;
  let _0x1f85f9 = 0;
  let _0x386ff8 = 0;
  let _0x21c63f = 0;
  let _0xed60ed = 0;
  let _0x221cd2 = null;
  let _0x5175a6 = [0, _0x14b540 ? s(_0x440845 - 1, 0) : -1];
  let _0x3d4498 = false;
  const _0x58507d = new Set();
  const _0x4848bd = () => _0x3814b7 - _0x185c9c;
  const _0x15e408 = () => _0x4848bd() + _0x1f85f9 + _0x39dc13;
  const _0x5e177e = _0xd05146 => _0x1d0c0c(_0xd05146) - _0x1f85f9;
  const _0x3ae02c = _0x302330 => {
    if (_0xed60ed === 2) {
      return true;
    }
    if (_0x221cd2 && _0xed60ed === 1) {
      return _0x302330 < _0x221cd2[0];
    }
    const _0x5cbd44 = _0x4848bd();
    const _0x5080f2 = _0x5e177e(_0x302330);
    const _0x940e93 = _0xd2b974(_0x302330);
    if (_0x21c63f !== 1 && _0xed60ed === 0) {
      return _0x5080f2 + _0x940e93 <= _0x5cbd44;
    } else {
      return _0x5080f2 < _0x5cbd44 && _0x5080f2 + _0x940e93 < _0x5cbd44 + _0x3305de;
    }
  };
  const _0x1f7df2 = _0xf636c4 => {
    if (_0xf636c4) {
      if (p() && _0x21c63f !== 0 || _0x221cd2 && _0xed60ed === 1) {
        _0x1f85f9 += _0xf636c4;
      } else {
        _0x39dc13 += _0xf636c4;
      }
    }
  };
  return {
    _: () => {
      _0x58507d.clear();
    },
    v: () => _0x1f819f,
    l: (_0x92f12c = 200) => {
      if (!_0x3d4498 || _0x14b540) {
        return _0x5175a6;
      }
      let _0x3a22ea;
      let _0x5c56ca;
      if (_0x386ff8) {
        [_0x3a22ea, _0x5c56ca] = _0x5175a6;
      } else {
        let _0x5057bb = s(0, _0x15e408());
        let _0x4a0398 = _0x5057bb + _0x3305de;
        if (!_0x24b58e()) {
          _0x92f12c = s(0, _0x92f12c);
          if (_0x21c63f !== 1) {
            _0x5057bb -= _0x92f12c;
          }
          if (_0x21c63f !== 2) {
            _0x4a0398 += _0x92f12c;
          }
        }
        [_0x3a22ea, _0x5c56ca] = _0x5175a6 = _0x142380(s(0, _0x5057bb), s(0, _0x4a0398));
        if (_0x221cd2) {
          _0x3a22ea = o(_0x3a22ea, _0x221cd2[0]);
          _0x5c56ca = s(_0x5c56ca, _0x221cd2[1]);
        }
      }
      return [s(_0x3a22ea, 0), o(_0x5c56ca, _0x5c0a9e() - 1)];
    },
    I: _0x1e4522,
    i: _0x5e177e,
    u: _0xd2b974,
    R: _0x5c0a9e,
    k: () => _0x3814b7,
    T: _0x15e408,
    O: () => _0x21c63f !== 0,
    o: () => _0x3305de,
    M: () => _0x185c9c,
    t: _0x5135dd,
    C: () => {
      _0x386ff8 = _0x39dc13;
      _0x39dc13 = 0;
      return [_0x386ff8, _0xed60ed === 2];
    },
    L: (_0x12c6f7, _0x2c371e) => {
      const _0x2950fd = [_0x12c6f7, _0x2c371e];
      _0x58507d.add(_0x2950fd);
      return () => {
        _0x58507d.delete(_0x2950fd);
      };
    },
    A: (_0x59ec58, _0x3926b1) => {
      let _0x38569d;
      let _0x5d6c04;
      let _0x417dbc = 0;
      switch (_0x59ec58) {
        case 1:
          {
            if (_0x3926b1 === _0x3814b7 && _0xed60ed === 0) {
              break;
            }
            const _0x3e075d = _0x386ff8;
            _0x386ff8 = 0;
            const _0x851b4e = _0x3926b1 - _0x3814b7;
            const _0x2e915b = i(_0x851b4e);
            if ((!_0x3e075d || !(_0x2e915b < i(_0x3e075d) + 1)) && _0xed60ed === 0) {
              _0x21c63f = _0x851b4e < 0 ? 2 : 1;
            }
            _0x14b540 &&= false;
            _0x3814b7 = _0x3926b1;
            _0x417dbc = 4;
            const _0x5f480b = _0x4848bd();
            if (_0x5f480b >= -_0x3305de && _0x5f480b <= _0x5135dd()) {
              _0x417dbc += 1;
              _0x5d6c04 = _0x2e915b > _0x3305de;
            }
            break;
          }
        case 2:
          _0x417dbc = 8;
          if (_0x21c63f !== 0) {
            _0x38569d = true;
            _0x417dbc += 1;
          }
          _0x21c63f = 0;
          _0xed60ed = 0;
          _0x221cd2 = null;
          break;
        case 3:
          {
            const _0x33abf3 = _0x3926b1.filter(([_0x48be5b, _0x2bec81]) => !_0x1e4522(_0x48be5b, _0x2bec81));
            if (!_0x33abf3.length) {
              break;
            }
            _0x1f7df2(_0x10a288(_0x33abf3, _0x3ae02c, _0x15e408(), _0x3305de));
            _0x417dbc = 3;
            _0x5d6c04 = true;
            break;
          }
        case 4:
          if (_0x3305de !== _0x3926b1) {
            if (!_0x3305de) {
              _0x3d4498 = _0x5d6c04 = true;
            }
            _0x3305de = _0x3926b1;
            _0x417dbc = 3;
          }
          break;
        case 5:
          if (_0x3926b1[1]) {
            _0x1f7df2(_0x1041c6(_0x3926b1[0], true));
            _0xed60ed = 2;
            _0x417dbc = 1;
          } else {
            _0x1041c6(_0x3926b1[0]);
            _0x417dbc = 1;
          }
          break;
        case 6:
          _0x185c9c = _0x3926b1;
          break;
        case 7:
          _0xed60ed = 1;
          break;
        case 9:
          if (_0x3926b1 != null) {
            _0x1f7df2(_0x3926b1);
            _0x417dbc = 1;
          }
          break;
        case 8:
          _0x221cd2 = _0x142380(_0x3926b1, _0x3926b1 + _0x3305de);
          _0x417dbc = 1;
      }
      if (_0x417dbc) {
        _0x1f819f = 1 + (_0x1f819f & 2147483647);
        if (_0x38569d && _0x1f85f9) {
          _0x39dc13 += _0x1f85f9;
          _0x1f85f9 = 0;
        }
        _0x58507d.forEach(([_0x39a941, _0x29229d]) => {
          if (_0x417dbc & _0x39a941) {
            _0x29229d(_0x5d6c04);
          }
        });
      }
    }
  };
};
var y = (_0x1d3add, _0x16b125, _0x3558d4) => {
  const _0x32abe5 = _0x3558d4 ? "unshift" : "push";
  for (let _0xf9c1ef = 0; _0xf9c1ef < _0x16b125; _0xf9c1ef++) {
    _0x1d3add[_0x32abe5](-1);
  }
  return _0x1d3add;
};
var w = (_0x583af8, _0xf71516, _0xf43542, _0x1d752d = 0, _0x4c0ca4 = _0xf71516 - 1) => {
  let _0x5d9ac = _0x1d752d;
  while (_0x1d752d <= _0x4c0ca4) {
    const _0x45a385 = l((_0x1d752d + _0x4c0ca4) / 2);
    if (_0x583af8(_0x45a385) <= _0xf43542) {
      _0x5d9ac = _0x45a385;
      _0x1d752d = _0x45a385 + 1;
    } else {
      _0x4c0ca4 = _0x45a385 - 1;
    }
  }
  return c(_0x5d9ac, 0, _0xf71516 - 1);
};
var k = (_0x48164f, _0x86032b, _0x25fb0d) => {
  let _0x337d6d = _0x25fb0d && _0x25fb0d[1] || _0x86032b || 40;
  let _0x298463 = -1;
  let _0x3c1c95 = 0;
  let _0x194394 = !_0x86032b;
  let _0xe92fdc = 0;
  const _0x1ded8b = _0x25fb0d && _0x25fb0d[0];
  const _0x13b3d2 = _0x1ded8b ? y(_0x1ded8b.slice(0, o(_0x48164f, _0x1ded8b.length)), s(0, _0x48164f - _0x1ded8b.length)) : y([], _0x48164f);
  const _0xc12c44 = y([], _0x48164f + 1);
  const _0x2600c7 = _0x4b7499 => {
    const _0x268400 = _0x13b3d2[_0x4b7499];
    if (_0x268400 === -1) {
      return _0x337d6d;
    } else {
      return _0x268400;
    }
  };
  const _0x4353d4 = _0x5bf228 => {
    if (!_0x48164f) {
      return 0;
    }
    if (_0x298463 >= _0x5bf228) {
      return _0xc12c44[_0x5bf228];
    }
    if (_0x298463 < 0) {
      _0xc12c44[0] = 0;
      _0x298463 = 0;
    }
    let _0x18043c = _0x298463;
    let _0x21cf56 = _0xc12c44[_0x18043c];
    while (_0x18043c < _0x5bf228) {
      _0x21cf56 += _0x2600c7(_0x18043c);
      _0xc12c44[++_0x18043c] = _0x21cf56;
    }
    _0x298463 = _0x5bf228;
    return _0x21cf56;
  };
  return {
    l: (_0x30c1e6, _0x41e3bd) => {
      let _0x13a9c3;
      let _0x457e86;
      _0xe92fdc = o(_0xe92fdc, _0x48164f - 1);
      if (_0x4353d4(_0xe92fdc) <= _0x30c1e6) {
        _0x457e86 = w(_0x4353d4, _0x48164f, _0x41e3bd, _0xe92fdc);
        _0x13a9c3 = w(_0x4353d4, _0x48164f, _0x30c1e6, _0xe92fdc, _0x457e86);
      } else {
        _0x13a9c3 = w(_0x4353d4, _0x48164f, _0x30c1e6, undefined, _0xe92fdc);
        _0x457e86 = w(_0x4353d4, _0x48164f, _0x41e3bd, _0x13a9c3);
      }
      _0xe92fdc = _0x13a9c3;
      return [_0x13a9c3, _0x457e86];
    },
    W: _0x3bd9ca => w(_0x4353d4, _0x48164f, _0x3bd9ca),
    i: _0x4353d4,
    u: _0x2600c7,
    h: (_0xdef482, _0x953acd = -1) => _0x13b3d2[_0xdef482] === _0x953acd,
    S: (_0x369f2f, _0x5e62af, _0x1e5216, _0x1cc7a5) => {
      let _0x241326 = _0x369f2f.reduce((_0x592756, [_0x3fdf1a, _0x27a369]) => _0x5e62af(_0x3fdf1a) ? _0x592756 + (_0x27a369 - _0x2600c7(_0x3fdf1a)) : _0x592756, 0);
      for (const [_0x40fd29, _0x56531d] of _0x369f2f) {
        _0x3c1c95 += _0x13b3d2[_0x40fd29] === -1 ? _0x56531d : _0x56531d - _0x2600c7(_0x40fd29);
        _0x13b3d2[_0x40fd29] = _0x56531d;
        _0x298463 = o(_0x40fd29, _0x298463);
      }
      if (_0x194394 && _0x1cc7a5 && _0x3c1c95 > _0x1cc7a5) {
        let _0x22d825 = 0;
        const _0xfd7e13 = w(_0x4353d4, _0x48164f, _0x1e5216 + _0x241326);
        const _0x3c8971 = [];
        _0x13b3d2.forEach((_0x119255, _0x1e2f52) => {
          if (_0x119255 !== -1) {
            if (_0x119255) {
              _0x3c8971.push(_0x119255);
            }
            if (_0x1e2f52 < _0xfd7e13) {
              _0x22d825++;
            }
          }
        });
        _0x298463 = -1;
        u(_0x3c8971);
        const _0x4fb0aa = _0x3c8971.length;
        const _0x4bb46a = _0x4fb0aa / 2 | 0;
        const _0x43c5bc = _0x4fb0aa % 2 == 0 ? (_0x3c8971[_0x4bb46a - 1] + _0x3c8971[_0x4bb46a]) / 2 : _0x3c8971[_0x4bb46a];
        const _0x4caea3 = _0x337d6d;
        _0x241326 += ((_0x337d6d = _0x43c5bc) - _0x4caea3) * s(_0xfd7e13 - _0x22d825, 0);
        _0x194394 = false;
      }
      return _0x241326;
    },
    t: () => _0x4353d4(_0x48164f),
    $: () => _0x48164f,
    p: (_0x377e2b, _0x1834a2) => {
      const _0x51a359 = _0x377e2b - _0x48164f;
      _0x298463 = _0x1834a2 ? -1 : o(_0x377e2b - 1, _0x298463);
      _0x48164f = _0x377e2b;
      if (_0x51a359 > 0) {
        y(_0xc12c44, _0x51a359);
        y(_0x13b3d2, _0x51a359, _0x1834a2);
        return _0x337d6d * _0x51a359;
      } else {
        _0xc12c44.splice(_0x51a359);
        return (_0x1834a2 ? _0x13b3d2.splice(0, -_0x51a359) : _0x13b3d2.splice(_0x51a359)).reduce((_0x331f01, _0x169954) => _0x331f01 - (_0x169954 === -1 ? _0x337d6d : _0x169954), 0);
      }
    },
    m: () => _0x194394,
    H: () => [_0x13b3d2.slice(), _0x337d6d]
  };
};
var b = (_0x1ca392, _0x9152a7) => {
  let _0x286f0f;
  let _0x31dfe6;
  let _0x8f3a = h();
  let _0x466f4b = true;
  const _0x256762 = new WeakMap();
  const _0x5c468f = (_0x110907 => {
    let _0x6c0bc6;
    return {
      J(_0x2a2bd9) {
        (_0x6c0bc6 ||= new ((_0x17e1ef => _0x17e1ef.defaultView)((_0x2fffd3 => _0x2fffd3.ownerDocument)(_0x2a2bd9)).ResizeObserver)(_0x110907)).observe(_0x2a2bd9);
      },
      j(_0x13bccc) {
        _0x6c0bc6.unobserve(_0x13bccc);
      },
      D() {
        if (_0x6c0bc6) {
          _0x6c0bc6.disconnect();
        }
      }
    };
  })(_0x27d933 => {
    const _0x29aa4c = [];
    for (const {
      target: _0x4654ef,
      contentRect: {
        width: _0x5741d6,
        height: _0x52b4a9
      }
    } of _0x27d933) {
      if (_0x4654ef === _0x286f0f) {
        if (_0x5741d6 || _0x52b4a9) {
          if (!_0x466f4b) {
            _0x31dfe6.G();
          }
          _0x466f4b = true;
          _0x1ca392.A(4, _0x9152a7 ? _0x5741d6 : _0x52b4a9);
        } else {
          _0x466f4b = false;
        }
      } else if (_0x4654ef.offsetParent) {
        const _0x22dc65 = _0x256762.get(_0x4654ef);
        if (_0x22dc65 != null) {
          _0x29aa4c.push([_0x22dc65, _0x9152a7 ? _0x5741d6 : _0x52b4a9]);
        }
      }
    }
    if (_0x29aa4c.length) {
      _0x1ca392.A(3, _0x29aa4c);
    }
  });
  return {
    K(_0x46d97e, _0x2e9465 = _0x46d97e.parentElement) {
      _0x5c468f.J(_0x286f0f = _0x2e9465);
      _0x31dfe6 = ((_0x3c69de, _0x1fc966, _0x495b8, _0x3fbe33, _0x251b6f, _0x226e04) => {
        let _0x5b6487;
        let _0x53fd9f;
        let _0x1dfe1a = 0;
        let _0x118a50 = false;
        let _0x5498d3 = false;
        let _0x40dd42 = false;
        let _0x4ab87a = false;
        const _0x2e1add = Date.now;
        const _0x2bc4a4 = _0x3fbe33 ? "scrollLeft" : "scrollTop";
        const _0x521a92 = _0x3fbe33 ? "left" : "top";
        const _0x4ad6b7 = _0x38dc6b => _0x251b6f ? -_0x38dc6b : _0x38dc6b;
        const _0x2d7f14 = () => _0x4ad6b7(_0x495b8[_0x2bc4a4]);
        const _0x541fc4 = (_0x449713, _0x489d08) => {
          _0x495b8.scrollTo({
            [_0x521a92]: _0x4ad6b7(_0x449713),
            behavior: _0x489d08 ? "smooth" : "instant"
          });
        };
        const _0x3e1062 = () => {
          if (_0x118a50 || _0x5498d3) {
            _0x118a50 = false;
            _0x232a66();
            return;
          }
          _0x40dd42 = false;
          _0x3c69de.A(2);
        };
        const _0x232a66 = () => {
          f(_0x53fd9f);
          _0x53fd9f = a(_0x3e1062, 150);
        };
        const _0x4f49cc = () => {
          _0x1dfe1a = _0x2e1add();
          if (_0x40dd42) {
            _0x4ab87a = true;
          }
          _0x3c69de.A(1, _0x2d7f14());
          _0x232a66();
        };
        const _0x1a599a = _0x3900ff => {
          if (_0x118a50 || !_0x3c69de.O() || _0x3900ff.ctrlKey) {
            return;
          }
          const _0x3674df = _0x2e1add() - _0x1dfe1a;
          if (_0x3674df < 150 && _0x3674df > 50 && (_0x3fbe33 ? _0x3900ff.deltaX : _0x3900ff.deltaY)) {
            _0x118a50 = true;
          }
        };
        const _0xf68b17 = () => {
          _0x5498d3 = true;
          _0x40dd42 = _0x4ab87a = false;
        };
        const _0x2926f5 = () => {
          _0x5498d3 = false;
          if (p()) {
            _0x40dd42 = true;
          }
        };
        _0x1fc966.addEventListener("scroll", _0x4f49cc);
        _0x1fc966.addEventListener("wheel", _0x1a599a, {
          passive: true
        });
        _0x1fc966.addEventListener("touchstart", _0xf68b17, {
          passive: true
        });
        _0x1fc966.addEventListener("touchend", _0x2926f5, {
          passive: true
        });
        return {
          G: _0x4f49cc,
          D: () => {
            _0x1fc966.removeEventListener("scroll", _0x4f49cc);
            _0x1fc966.removeEventListener("wheel", _0x1a599a);
            _0x1fc966.removeEventListener("touchstart", _0xf68b17);
            _0x1fc966.removeEventListener("touchend", _0x2926f5);
            f(_0x53fd9f);
          },
          U: () => {
            const [_0x3a7f16, _0x1521cf] = _0x3c69de.C();
            if (!_0x3a7f16) {
              return;
            }
            if (_0x4ab87a && _0x226e04) {
              _0x226e04();
            }
            _0x4ab87a = false;
            const _0x1781ec = _0x3c69de.k();
            const _0x46ceb5 = _0x1781ec + _0x3a7f16;
            const _0x117876 = _0x3c69de.M() + _0x3c69de.t() - _0x3c69de.o();
            if (_0x46ceb5 <= 0 || _0x46ceb5 >= _0x117876 || _0x1781ec >= _0x117876) {
              _0x541fc4(_0x46ceb5);
            } else {
              _0x495b8.scrollBy({
                [_0x521a92]: _0x4ad6b7(_0x3a7f16),
                behavior: "instant"
              });
            }
            if (_0x1521cf) {
              if (_0x5b6487) {
                _0x5b6487();
              }
              if (_0x3c69de.o() > _0x3c69de.t()) {
                _0x3c69de.A(1, _0x2d7f14());
              }
            }
          },
          F: (_0x5f0baf, _0x44e73e) => {
            let _0x4773c3;
            let _0x415267;
            let _0x4d0e62;
            if (_0x5b6487) {
              _0x5b6487();
            }
            const _0x233b62 = _0x5b6487 = () => {
              _0x4773c3 = true;
              f(_0x415267);
              if (_0x4d0e62) {
                _0x4d0e62();
              }
            };
            const _0x4eab9c = () => {
              if (!_0x4773c3) {
                if (_0x3c69de.o()) {
                  f(_0x415267);
                  _0x415267 = a(_0x233b62, 150);
                }
                if (_0x44e73e) {
                  for (let [_0x2d9b48, _0x107a9c] = _0x3c69de.l(0); _0x2d9b48 <= _0x107a9c; _0x2d9b48++) {
                    if (_0x3c69de.I(_0x2d9b48)) {
                      return;
                    }
                  }
                  _0x233b62();
                }
                _0x3c69de.A(7);
                _0x541fc4(_0x5f0baf(), _0x44e73e);
              }
            };
            if (_0x44e73e) {
              _0x3c69de.A(8, _0x5f0baf());
            }
            (() => {
              if (_0x4773c3) {
                return;
              }
              let _0x3d4208;
              _0x4d0e62 = _0x3c69de.L(2, () => {
                if (!_0x3d4208) {
                  _0x3d4208 = true;
                  d(() => {
                    _0x3d4208 = false;
                    _0x4eab9c();
                  });
                }
              });
              _0x4eab9c();
            })();
          }
        };
      })(_0x1ca392, _0x2e9465, _0x2e9465, _0x9152a7, _0x9152a7 && getComputedStyle(_0x2e9465).direction === "rtl", () => {
        const _0x59a59e = _0x9152a7 ? "overflowX" : "overflowY";
        const _0x182938 = _0x2e9465.style;
        const _0x46c5fc = _0x182938[_0x59a59e];
        _0x182938[_0x59a59e] = "hidden";
        a(() => {
          _0x182938[_0x59a59e] = _0x46c5fc;
        });
      });
      _0x8f3a[1](true);
    },
    _() {
      _0x5c468f.D();
      if (_0x31dfe6) {
        _0x31dfe6.D();
      }
      _0x8f3a[1](false);
      _0x8f3a = h();
    },
    N: (_0xbd9560, _0x3366d8) => {
      _0x256762.set(_0xbd9560, _0x3366d8);
      _0x5c468f.J(_0xbd9560);
      return () => {
        _0x256762.delete(_0xbd9560);
        _0x5c468f.j(_0xbd9560);
      };
    },
    async Z(_0x369b5d, _0x2891f6) {
      if (await _0x8f3a[0]) {
        _0x31dfe6.F(_0x369b5d, _0x2891f6);
      }
    },
    ee() {
      if (_0x31dfe6) {
        _0x31dfe6.U();
      }
    },
    te: _0x1ca392.M
  };
};
var S = (_0x5c8cff, _0x262b0d) => {
  _0x5c8cff.Z(() => _0x262b0d);
};
var E = (_0x3c5fbe, _0x4ddcea, _0x469ae2, {
  align: _0x59feee,
  smooth: _0x5e89f0,
  offset: _0x5b0117 = 0
} = {}) => {
  _0x469ae2 = c(_0x469ae2, 0, _0x4ddcea.R() - 1);
  if (_0x59feee === "nearest") {
    const _0x417822 = _0x4ddcea.i(_0x469ae2);
    const _0x191363 = _0x4ddcea.k();
    if (_0x417822 < _0x191363) {
      _0x59feee = "start";
    } else {
      if (!(_0x417822 + _0x4ddcea.u(_0x469ae2) > _0x191363 + _0x4ddcea.o())) {
        return;
      }
      _0x59feee = "end";
    }
  }
  _0x3c5fbe.Z(() => _0x5b0117 + _0x3c5fbe.te() + _0x4ddcea.i(_0x469ae2) + (_0x59feee === "end" ? _0x4ddcea.u(_0x469ae2) - _0x4ddcea.o() : _0x59feee === "center" ? (_0x4ddcea.u(_0x469ae2) - _0x4ddcea.o()) / 2 : 0), _0x5e89f0);
};
var z = v ? _0x46e66d.useLayoutEffect : _0x46e66d.useEffect;
var R = "current";
var L = (_0x3e06a6, _0x327121) => {
  if (Array.isArray(_0x3e06a6)) {
    for (const _0x335c67 of _0x3e06a6) {
      L(_0x335c67, _0x327121);
    }
  } else if (_0x3e06a6 != null && typeof _0x3e06a6 != "boolean") {
    _0x327121.push(_0x3e06a6);
  }
};
var M = _0x2f52c1 => {
  const _0x1604c6 = _0x46e66d.useRef(_0x2f52c1);
  z(() => {
    _0x1604c6[R] = _0x2f52c1;
  }, [_0x2f52c1]);
  return _0x1604c6;
};
var _Component = _0x46e66d.memo(({
  oe: _0x51aae7,
  ne: _0x4559ac,
  re: _0x37ba40,
  se: _0x114077,
  le: _0x1b2a0c,
  ie: _0x4509b1,
  ce: _0x3b00e8,
  fe: _0x52d155
}) => {
  const _0x1edfe2 = _0x46e66d.useRef(null);
  z(() => _0x4559ac(_0x1edfe2[R], _0x37ba40), [_0x37ba40]);
  const _0x17f35a = _0x46e66d.useMemo(() => {
    const _0x58cae2 = {
      contain: "layout style",
      position: _0x1b2a0c && _0x52d155 ? undefined : "absolute",
      [_0x3b00e8 ? "height" : "width"]: "100%",
      [_0x3b00e8 ? "top" : "left"]: 0,
      [_0x3b00e8 ? "insetInlineStart" : "top"]: _0x114077,
      visibility: !_0x1b2a0c || _0x52d155 ? undefined : "hidden"
    };
    if (_0x3b00e8) {
      _0x58cae2.display = "inline-flex";
    }
    return _0x58cae2;
  }, [_0x114077, _0x1b2a0c, _0x52d155, _0x3b00e8]);
  return _0x5c890d.jsx(_0x4509b1, typeof _0x4509b1 == "string" ? {
    ref: _0x1edfe2,
    style: _0x17f35a,
    children: _0x51aae7
  } : {
    ref: _0x1edfe2,
    style: _0x17f35a,
    index: _0x37ba40,
    children: _0x51aae7
  });
});
var A = _0x46e66d.forwardRef(({
  children: _0x4229ed,
  data: _0x3e530e,
  bufferSize: _0x1b9d10,
  itemSize: _0x4a8846,
  shift: _0x4afda1,
  horizontal: _0x553fa2,
  keepMounted: _0x136c68,
  cache: _0x42be73,
  startMargin: _0x361761 = 0,
  ssrCount: _0x267757,
  as: _0x46d07b = "div",
  item: _0xb10520 = "div",
  scrollRef: _0x2dc13b,
  onScroll: _0x228c81,
  onScrollEnd: _0x5be10e,
  onResize: _0x4d6099
}, _0x355519) => {
  const [_0x408b55, _0x33d06a] = ((_0x5cceb8, _0x4c131d) => _0x46e66d.useMemo(() => {
    if (typeof _0x5cceb8 == "function") {
      return [_0x45ea9a => _0x5cceb8(_0x4c131d[_0x45ea9a], _0x45ea9a), _0x4c131d.length];
    }
    const _0x51da58 = (_0xa8c1c => {
      const _0x2bd5ac = [];
      L(_0xa8c1c, _0x2bd5ac);
      return _0x2bd5ac;
    })(_0x5cceb8);
    return [_0x56477f => _0x51da58[_0x56477f], _0x51da58.length];
  }, [_0x5cceb8, _0x4c131d]))(_0x4229ed, _0x3e530e);
  const _0x358db4 = _0x46e66d.useRef(null);
  const _0x5d95b1 = _0x46e66d.useRef(!!_0x267757);
  const _0x2ba804 = M(_0x228c81);
  const _0x8e4f13 = M(_0x5be10e);
  const _0x51a9a6 = M(_0x4d6099);
  const [_0x359327, _0x3bf421, _0x1c8860, _0x571b6a] = (_0x2c9fa9 => {
    const _0x2e66cf = _0x46e66d.useRef(null);
    return _0x2e66cf.current ||= _0x2c9fa9();
  })(() => {
    const _0xe2741c = !!_0x553fa2;
    const _0x48e734 = k(_0x33d06a, _0x4a8846, _0x42be73);
    const _0x4e6511 = g(_0x48e734, _0x267757);
    return [_0x4e6511, _0x48e734, b(_0x4e6511, _0xe2741c), _0xe2741c];
  });
  if (_0x33d06a !== _0x359327.R()) {
    _0x359327.A(5, [_0x33d06a, _0x4afda1]);
  }
  if (_0x361761 !== _0x359327.M()) {
    _0x359327.A(6, _0x361761);
  }
  const [_0x3b86a9, _0x247889] = _0x46e66d.useReducer(_0x359327.v, undefined, _0x359327.v);
  const _0x576d07 = _0x359327.O();
  const _0x32e309 = _0x359327.t();
  const _0x209edc = [];
  const _0x3ef673 = _0x391b80 => {
    const _0x3464ce = _0x408b55(_0x391b80);
    return <_Component ne={_0x1c8860.N} re={_0x391b80} se={_0x359327.i(_0x391b80)} le={_0x359327.I(_0x391b80)} ie={_0xb10520} oe={_0x3464ce} ce={_0x571b6a} fe={_0x5d95b1[R]} key={((_0x5f316b, _0x4c4d58) => {
      const _0x23ae20 = _0x5f316b.key;
      return _0x23ae20 ?? "_" + _0x4c4d58;
    })(_0x3464ce, _0x391b80)} />;
  };
  z(() => {
    _0x5d95b1[R] = false;
    _0x359327.L(1, _0x3fe69f => {
      if (_0x3fe69f) {
        _0x5810db.flushSync(_0x247889);
      } else {
        _0x247889();
      }
    });
    _0x359327.L(4, () => {
      if (_0x2ba804.current) {
        _0x2ba804.current(_0x359327.k());
      }
    });
    _0x359327.L(8, () => {
      if (_0x8e4f13.current) {
        _0x8e4f13.current();
      }
    });
    _0x359327.L(2, () => {
      if (_0x51a9a6.current) {
        _0x51a9a6.current();
      }
    });
    const _0x1363d2 = _0x358db4[R];
    if (_0x2dc13b) {
      d(() => {
        if (_0x2dc13b.current) {
          _0x1c8860.K(_0x1363d2, _0x2dc13b[R]);
        }
      });
    } else {
      _0x1c8860.K(_0x1363d2);
    }
    return () => {
      _0x359327._();
      _0x1c8860._();
    };
  }, []);
  z(() => {
    _0x1c8860.ee();
  }, [_0x3b86a9]);
  _0x46e66d.useImperativeHandle(_0x355519, () => ({
    get cache() {
      return _0x3bf421.H();
    },
    get scrollOffset() {
      return _0x359327.k();
    },
    get scrollSize() {
      return m(_0x359327);
    },
    get viewportSize() {
      return _0x359327.o();
    },
    findItemIndex: _0x5c3a0a => _0x3bf421.W(_0x5c3a0a - _0x359327.M()),
    getItemOffset: _0x359327.i,
    getItemSize: _0x359327.u,
    scrollToIndex: (_0x2f8033, _0xdff903) => E(_0x1c8860, _0x359327, _0x2f8033, _0xdff903),
    scrollTo: _0x388497 => S(_0x1c8860, _0x388497),
    scrollBy: _0x5b4699 => ((_0x114ff0, _0x23dbc4, _0x3831a1) => {
      S(_0x114ff0, _0x3831a1 + _0x23dbc4.k());
    })(_0x1c8860, _0x359327, _0x5b4699)
  }), []);
  if (_0x136c68) {
    const _0x15644c = new Set(_0x136c68);
    for (let [_0x53504d, _0x16c8d] = _0x359327.l(_0x1b9d10); _0x53504d <= _0x16c8d; _0x53504d++) {
      _0x15644c.add(_0x53504d);
    }
    u([..._0x15644c]).forEach(_0x463c54 => {
      if (_0x463c54 < _0x33d06a) {
        _0x209edc.push(_0x3ef673(_0x463c54));
      }
    });
  } else {
    for (let [_0x3750a3, _0x220ce5] = _0x359327.l(_0x1b9d10); _0x3750a3 <= _0x220ce5; _0x3750a3++) {
      _0x209edc.push(_0x3ef673(_0x3750a3));
    }
  }
  return <_0x46d07b ref={_0x358db4} style={{
    contain: "size style",
    overflowAnchor: "none",
    flex: "none",
    position: "relative",
    width: _0x571b6a ? _0x32e309 : "100%",
    height: _0x571b6a ? "100%" : _0x32e309,
    pointerEvents: _0x576d07 ? "none" : undefined
  }}>{_0x209edc}</_0x46d07b>;
});
var I = _0x46e66d.forwardRef(({
  children: _0x5b7197,
  data: _0x1b27e8,
  bufferSize: _0x1ae0db,
  itemSize: _0x592ac3,
  shift: _0xbfc674,
  horizontal: _0x31e313,
  keepMounted: _0x55a72d,
  cache: _0x3db5ec,
  ssrCount: _0x2f6586,
  item: _0x17783b,
  onScroll: _0x344288,
  onScrollEnd: _0x48f023,
  onResize: _0x267842,
  style: _0x329ae0,
  ..._0x4311b8
}, _0x5e4e81) => <div {..._0x4311b8} style={{
  display: "block",
  [_0x31e313 ? "overflowX" : "overflowY"]: "auto",
  contain: "strict",
  width: "100%",
  height: "100%",
  ..._0x329ae0
}}><A ref={_0x5e4e81} data={_0x1b27e8} bufferSize={_0x1ae0db} itemSize={_0x592ac3} shift={_0xbfc674} horizontal={_0x31e313} keepMounted={_0x55a72d} cache={_0x3db5ec} ssrCount={_0x2f6586} item={_0x17783b} onScroll={_0x344288} onScrollEnd={_0x48f023} onResize={_0x267842}>{_0x5b7197}</A></div>);
export { I as i };