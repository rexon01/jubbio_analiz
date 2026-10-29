import { dU as _0x6c32b2, dV as _0xbe2b65, aD as _0x52bd43 } from "./index-cQfEKR1W.js";
var u;
var t;
var a = {
  exports: {}
};
var o = {};
if (!t) {
  t = 1;
  a.exports = function () {
    if (u) {
      return o;
    }
    u = 1;
    var _0x5ab638 = _0x6c32b2();
    var _0x34b573 = _0xbe2b65();
    var _0x45d538 = typeof Object.is == "function" ? Object.is : function (_0x2d1779, _0x5d73af) {
      return _0x2d1779 === _0x5d73af && (_0x2d1779 !== 0 || 1 / _0x2d1779 == 1 / _0x5d73af) || _0x2d1779 != _0x2d1779 && _0x5d73af != _0x5d73af;
    };
    var _0x4d3a57 = _0x34b573.useSyncExternalStore;
    var _0x1d2798 = _0x5ab638.useRef;
    var _0x4d9196 = _0x5ab638.useEffect;
    var _0x2621fa = _0x5ab638.useMemo;
    var _0x2d1160 = _0x5ab638.useDebugValue;
    o.useSyncExternalStoreWithSelector = function (_0x2d2abe, _0x5d606e, _0x44192c, _0x17a186, _0x372447) {
      var _0x44e8a7 = _0x1d2798(null);
      if (_0x44e8a7.current === null) {
        var _0x3c3fa5 = {
          hasValue: false,
          value: null
        };
        _0x44e8a7.current = _0x3c3fa5;
      } else {
        _0x3c3fa5 = _0x44e8a7.current;
      }
      _0x44e8a7 = _0x2621fa(function () {
        function _0x29867a(_0x5b3d7a) {
          if (!_0x104164) {
            _0x104164 = true;
            _0x197de2 = _0x5b3d7a;
            _0x5b3d7a = _0x17a186(_0x5b3d7a);
            if (_0x372447 !== undefined && _0x3c3fa5.hasValue) {
              var _0x438bdf = _0x3c3fa5.value;
              if (_0x372447(_0x438bdf, _0x5b3d7a)) {
                return _0x1fd4c5 = _0x438bdf;
              }
            }
            return _0x1fd4c5 = _0x5b3d7a;
          }
          _0x438bdf = _0x1fd4c5;
          if (_0x45d538(_0x197de2, _0x5b3d7a)) {
            return _0x438bdf;
          }
          var _0x59a6e9 = _0x17a186(_0x5b3d7a);
          if (_0x372447 !== undefined && _0x372447(_0x438bdf, _0x59a6e9)) {
            _0x197de2 = _0x5b3d7a;
            return _0x438bdf;
          } else {
            _0x197de2 = _0x5b3d7a;
            return _0x1fd4c5 = _0x59a6e9;
          }
        }
        var _0x197de2;
        var _0x1fd4c5;
        var _0x104164 = false;
        var _0x57d46f = _0x44192c === undefined ? null : _0x44192c;
        return [function () {
          return _0x29867a(_0x5d606e());
        }, _0x57d46f === null ? undefined : function () {
          return _0x29867a(_0x57d46f());
        }];
      }, [_0x5d606e, _0x44192c, _0x17a186, _0x372447]);
      var _0x72ab37 = _0x4d3a57(_0x2d2abe, _0x44e8a7[0], _0x44e8a7[1]);
      _0x4d9196(function () {
        _0x3c3fa5.hasValue = true;
        _0x3c3fa5.value = _0x72ab37;
      }, [_0x72ab37]);
      _0x2d1160(_0x72ab37);
      return _0x72ab37;
    };
    return o;
  }();
}
var i = a.exports;
const s = _0x52bd43(i);
export { s as u, i as w };