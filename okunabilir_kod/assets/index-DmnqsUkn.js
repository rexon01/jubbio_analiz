import { r as _0x28da8d } from "./index-cQfEKR1W.js"; /**
                                                      * table-core
                                                      *
                                                      * Copyright (c) TanStack
                                                      *
                                                      * This source code is licensed under the MIT license found in the
                                                      * LICENSE.md file in the root directory of this source tree.
                                                      *
                                                      * @license MIT
                                                      */
function t(_0x384605, _0xbb0fa5) {
  if (typeof _0x384605 == "function") {
    return _0x384605(_0xbb0fa5);
  } else {
    return _0x384605;
  }
}
function n(_0x158432, _0x5e8a22) {
  return _0x5869a0 => {
    _0x5e8a22.setState(_0x5a6ae5 => ({
      ..._0x5a6ae5,
      [_0x158432]: t(_0x5869a0, _0x5a6ae5[_0x158432])
    }));
  };
}
function l(_0x24c968) {
  return _0x24c968 instanceof Function;
}
function o(_0x496932, _0x119c33, _0x49a692) {
  let _0x5843e1;
  let _0x597adc = [];
  return _0x33c810 => {
    let _0x67c414;
    if (_0x49a692.key && _0x49a692.debug) {
      _0x67c414 = Date.now();
    }
    const _0x5b95ef = _0x496932(_0x33c810);
    if (_0x5b95ef.length === _0x597adc.length && !_0x5b95ef.some((_0x342c7a, _0x4da529) => _0x597adc[_0x4da529] !== _0x342c7a)) {
      return _0x5843e1;
    }
    let _0x32066d;
    _0x597adc = _0x5b95ef;
    if (_0x49a692.key && _0x49a692.debug) {
      _0x32066d = Date.now();
    }
    _0x5843e1 = _0x119c33(..._0x5b95ef);
    if (_0x49a692 != null && _0x49a692.onChange != null) {
      _0x49a692.onChange(_0x5843e1);
    }
    if (_0x49a692.key && _0x49a692.debug && _0x49a692 != null && _0x49a692.debug()) {
      const _0xcfd9ba = Math.round((Date.now() - _0x67c414) * 100) / 100;
      const _0x515365 = Math.round((Date.now() - _0x32066d) * 100) / 100;
      const _0xca41da = _0x515365 / 16;
      const _0x16e716 = (_0x294e90, _0x1b4d2c) => {
        for (_0x294e90 = String(_0x294e90); _0x294e90.length < _0x1b4d2c;) {
          _0x294e90 = " " + _0x294e90;
        }
        return _0x294e90;
      };
      console.info("%c⏱ " + _0x16e716(_0x515365, 5) + " /" + _0x16e716(_0xcfd9ba, 5) + " ms", "\n            font-size: .6rem;\n            font-weight: bold;\n            color: hsl(" + Math.max(0, Math.min(120 - _0xca41da * 120, 120)) + "deg 100% 31%);", _0x49a692 == null ? undefined : _0x49a692.key);
    }
    return _0x5843e1;
  };
}
function i(_0xcb6c78, _0x279c7e, _0x4704b1, _0x36bc16) {
  return {
    debug: () => {
      return (_0xcb6c78 == null ? undefined : _0xcb6c78.debugAll) ?? _0xcb6c78[_0x279c7e];
    },
    key: false,
    onChange: _0x36bc16
  };
}
const r = "debugHeaders";
function a(_0x51e92a, _0x105a01, _0x20774c) {
  let _0xc409e1 = {
    id: _0x20774c.id ?? _0x105a01.id,
    column: _0x105a01,
    index: _0x20774c.index,
    isPlaceholder: !!_0x20774c.isPlaceholder,
    placeholderId: _0x20774c.placeholderId,
    depth: _0x20774c.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const _0x214475 = [];
      const _0x562f75 = _0x1cba4b => {
        if (_0x1cba4b.subHeaders && _0x1cba4b.subHeaders.length) {
          _0x1cba4b.subHeaders.map(_0x562f75);
        }
        _0x214475.push(_0x1cba4b);
      };
      _0x562f75(_0xc409e1);
      return _0x214475;
    },
    getContext: () => ({
      table: _0x51e92a,
      header: _0xc409e1,
      column: _0x105a01
    })
  };
  _0x51e92a._features.forEach(_0x5ab961 => {
    if (_0x5ab961.createHeader != null) {
      _0x5ab961.createHeader(_0xc409e1, _0x51e92a);
    }
  });
  return _0xc409e1;
}
const u = {
  createTable: _0x4d0e17 => {
    _0x4d0e17.getHeaderGroups = o(() => [_0x4d0e17.getAllColumns(), _0x4d0e17.getVisibleLeafColumns(), _0x4d0e17.getState().columnPinning.left, _0x4d0e17.getState().columnPinning.right], (_0x2f9646, _0x144413, _0x1f3891, _0xba3dc1) => {
      const _0xec3fdc = (_0x1f3891 == null ? undefined : _0x1f3891.map(_0x4bf2e2 => _0x144413.find(_0x2fcac2 => _0x2fcac2.id === _0x4bf2e2)).filter(Boolean)) ?? [];
      const _0x346892 = (_0xba3dc1 == null ? undefined : _0xba3dc1.map(_0x32efdd => _0x144413.find(_0x1bc989 => _0x1bc989.id === _0x32efdd)).filter(Boolean)) ?? [];
      return s(_0x2f9646, [..._0xec3fdc, ..._0x144413.filter(_0x1fa6c6 => (_0x1f3891 == null || !_0x1f3891.includes(_0x1fa6c6.id)) && (_0xba3dc1 == null || !_0xba3dc1.includes(_0x1fa6c6.id))), ..._0x346892], _0x4d0e17);
    }, i(_0x4d0e17.options, r));
    _0x4d0e17.getCenterHeaderGroups = o(() => [_0x4d0e17.getAllColumns(), _0x4d0e17.getVisibleLeafColumns(), _0x4d0e17.getState().columnPinning.left, _0x4d0e17.getState().columnPinning.right], (_0x25e1b3, _0x432688, _0x1ff2da, _0x1bd681) => s(_0x25e1b3, _0x432688 = _0x432688.filter(_0x5472b1 => (_0x1ff2da == null || !_0x1ff2da.includes(_0x5472b1.id)) && (_0x1bd681 == null || !_0x1bd681.includes(_0x5472b1.id))), _0x4d0e17, "center"), i(_0x4d0e17.options, r));
    _0x4d0e17.getLeftHeaderGroups = o(() => [_0x4d0e17.getAllColumns(), _0x4d0e17.getVisibleLeafColumns(), _0x4d0e17.getState().columnPinning.left], (_0x549ead, _0x51fb0f, _0x47aded) => {
      return s(_0x549ead, (_0x47aded == null ? undefined : _0x47aded.map(_0x32a45d => _0x51fb0f.find(_0x3572be => _0x3572be.id === _0x32a45d)).filter(Boolean)) ?? [], _0x4d0e17, "left");
    }, i(_0x4d0e17.options, r));
    _0x4d0e17.getRightHeaderGroups = o(() => [_0x4d0e17.getAllColumns(), _0x4d0e17.getVisibleLeafColumns(), _0x4d0e17.getState().columnPinning.right], (_0xe87b9a, _0x5d2bf0, _0x4ce1bc) => {
      return s(_0xe87b9a, (_0x4ce1bc == null ? undefined : _0x4ce1bc.map(_0x5650bb => _0x5d2bf0.find(_0x17e4af => _0x17e4af.id === _0x5650bb)).filter(Boolean)) ?? [], _0x4d0e17, "right");
    }, i(_0x4d0e17.options, r));
    _0x4d0e17.getFooterGroups = o(() => [_0x4d0e17.getHeaderGroups()], _0x3bbd09 => [..._0x3bbd09].reverse(), i(_0x4d0e17.options, r));
    _0x4d0e17.getLeftFooterGroups = o(() => [_0x4d0e17.getLeftHeaderGroups()], _0x5dd445 => [..._0x5dd445].reverse(), i(_0x4d0e17.options, r));
    _0x4d0e17.getCenterFooterGroups = o(() => [_0x4d0e17.getCenterHeaderGroups()], _0x5aee94 => [..._0x5aee94].reverse(), i(_0x4d0e17.options, r));
    _0x4d0e17.getRightFooterGroups = o(() => [_0x4d0e17.getRightHeaderGroups()], _0x185b47 => [..._0x185b47].reverse(), i(_0x4d0e17.options, r));
    _0x4d0e17.getFlatHeaders = o(() => [_0x4d0e17.getHeaderGroups()], _0x5eaa3c => _0x5eaa3c.map(_0x4df03c => _0x4df03c.headers).flat(), i(_0x4d0e17.options, r));
    _0x4d0e17.getLeftFlatHeaders = o(() => [_0x4d0e17.getLeftHeaderGroups()], _0x131fc1 => _0x131fc1.map(_0x82171 => _0x82171.headers).flat(), i(_0x4d0e17.options, r));
    _0x4d0e17.getCenterFlatHeaders = o(() => [_0x4d0e17.getCenterHeaderGroups()], _0x3916cb => _0x3916cb.map(_0x1af33c => _0x1af33c.headers).flat(), i(_0x4d0e17.options, r));
    _0x4d0e17.getRightFlatHeaders = o(() => [_0x4d0e17.getRightHeaderGroups()], _0x49d849 => _0x49d849.map(_0x4c6ec8 => _0x4c6ec8.headers).flat(), i(_0x4d0e17.options, r));
    _0x4d0e17.getCenterLeafHeaders = o(() => [_0x4d0e17.getCenterFlatHeaders()], _0x54b0d7 => _0x54b0d7.filter(_0x55dbe6 => {
      var _0xe7f2bf;
      return (_0xe7f2bf = _0x55dbe6.subHeaders) == null || !_0xe7f2bf.length;
    }), i(_0x4d0e17.options, r));
    _0x4d0e17.getLeftLeafHeaders = o(() => [_0x4d0e17.getLeftFlatHeaders()], _0x38540e => _0x38540e.filter(_0x1fae2c => {
      var _0x3c6008;
      return (_0x3c6008 = _0x1fae2c.subHeaders) == null || !_0x3c6008.length;
    }), i(_0x4d0e17.options, r));
    _0x4d0e17.getRightLeafHeaders = o(() => [_0x4d0e17.getRightFlatHeaders()], _0xdafedb => _0xdafedb.filter(_0x1ea75a => {
      var _0x20c4d2;
      return (_0x20c4d2 = _0x1ea75a.subHeaders) == null || !_0x20c4d2.length;
    }), i(_0x4d0e17.options, r));
    _0x4d0e17.getLeafHeaders = o(() => [_0x4d0e17.getLeftHeaderGroups(), _0x4d0e17.getCenterHeaderGroups(), _0x4d0e17.getRightHeaderGroups()], (_0xe1c08b, _0x95b3bb, _0x11ae15) => {
      var _0x159d34;
      var _0x4ccf24;
      var _0x17755a;
      return [...(((_0x159d34 = _0xe1c08b[0]) == null ? undefined : _0x159d34.headers) ?? []), ...(((_0x4ccf24 = _0x95b3bb[0]) == null ? undefined : _0x4ccf24.headers) ?? []), ...(((_0x17755a = _0x11ae15[0]) == null ? undefined : _0x17755a.headers) ?? [])].map(_0x3ebf16 => _0x3ebf16.getLeafHeaders()).flat();
    }, i(_0x4d0e17.options, r));
  }
};
function s(_0x404694, _0x2a41e2, _0x1ae3d6, _0x43756c) {
  var _0x5cff6a;
  let _0x22c60f = 0;
  const _0x86e5a7 = function (_0x41f3ec, _0x4dfae3 = 1) {
    _0x22c60f = Math.max(_0x22c60f, _0x4dfae3);
    _0x41f3ec.filter(_0x162d17 => _0x162d17.getIsVisible()).forEach(_0x27f8ec => {
      var _0x28a203;
      if ((_0x28a203 = _0x27f8ec.columns) != null && _0x28a203.length) {
        _0x86e5a7(_0x27f8ec.columns, _0x4dfae3 + 1);
      }
    }, 0);
  };
  _0x86e5a7(_0x404694);
  let _0x128380 = [];
  const _0x9ae122 = (_0x478d7e, _0x9c1182) => {
    const _0x59c263 = {
      depth: _0x9c1182,
      id: [_0x43756c, "" + _0x9c1182].filter(Boolean).join("_"),
      headers: []
    };
    const _0x6df843 = [];
    _0x478d7e.forEach(_0x2676ff => {
      const _0x18f534 = [..._0x6df843].reverse()[0];
      let _0x391708;
      let _0x472635 = false;
      if (_0x2676ff.column.depth === _0x59c263.depth && _0x2676ff.column.parent) {
        _0x391708 = _0x2676ff.column.parent;
      } else {
        _0x391708 = _0x2676ff.column;
        _0x472635 = true;
      }
      if (_0x18f534 && (_0x18f534 == null ? undefined : _0x18f534.column) === _0x391708) {
        _0x18f534.subHeaders.push(_0x2676ff);
      } else {
        const _0x50c615 = a(_0x1ae3d6, _0x391708, {
          id: [_0x43756c, _0x9c1182, _0x391708.id, _0x2676ff == null ? undefined : _0x2676ff.id].filter(Boolean).join("_"),
          isPlaceholder: _0x472635,
          placeholderId: _0x472635 ? "" + _0x6df843.filter(_0x33caf5 => _0x33caf5.column === _0x391708).length : undefined,
          depth: _0x9c1182,
          index: _0x6df843.length
        });
        _0x50c615.subHeaders.push(_0x2676ff);
        _0x6df843.push(_0x50c615);
      }
      _0x59c263.headers.push(_0x2676ff);
      _0x2676ff.headerGroup = _0x59c263;
    });
    _0x128380.push(_0x59c263);
    if (_0x9c1182 > 0) {
      _0x9ae122(_0x6df843, _0x9c1182 - 1);
    }
  };
  const _0x3bcb9b = _0x2a41e2.map((_0x434250, _0x804ad7) => a(_0x1ae3d6, _0x434250, {
    depth: _0x22c60f,
    index: _0x804ad7
  }));
  _0x9ae122(_0x3bcb9b, _0x22c60f - 1);
  _0x128380.reverse();
  const _0x1f509d = _0x171495 => _0x171495.filter(_0x1c9518 => _0x1c9518.column.getIsVisible()).map(_0x5ba7eb => {
    let _0x51c8a6 = 0;
    let _0x3df0ac = 0;
    let _0x381b15 = [0];
    if (_0x5ba7eb.subHeaders && _0x5ba7eb.subHeaders.length) {
      _0x381b15 = [];
      _0x1f509d(_0x5ba7eb.subHeaders).forEach(_0x41329f => {
        let {
          colSpan: _0x25907b,
          rowSpan: _0x4f19d8
        } = _0x41329f;
        _0x51c8a6 += _0x25907b;
        _0x381b15.push(_0x4f19d8);
      });
    } else {
      _0x51c8a6 = 1;
    }
    _0x3df0ac += Math.min(..._0x381b15);
    _0x5ba7eb.colSpan = _0x51c8a6;
    _0x5ba7eb.rowSpan = _0x3df0ac;
    return {
      colSpan: _0x51c8a6,
      rowSpan: _0x3df0ac
    };
  });
  _0x1f509d(((_0x5cff6a = _0x128380[0]) == null ? undefined : _0x5cff6a.headers) ?? []);
  return _0x128380;
}
const g = (_0x587541, _0x4b561b, _0x230432, _0x52af74, _0x1b0586, _0x1966e1, _0xb6f3b2) => {
  let _0x3f1b01 = {
    id: _0x4b561b,
    index: _0x52af74,
    original: _0x230432,
    depth: _0x1b0586,
    parentId: _0xb6f3b2,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: _0x38c781 => {
      if (_0x3f1b01._valuesCache.hasOwnProperty(_0x38c781)) {
        return _0x3f1b01._valuesCache[_0x38c781];
      }
      const _0x21cdc2 = _0x587541.getColumn(_0x38c781);
      if (_0x21cdc2 != null && _0x21cdc2.accessorFn) {
        _0x3f1b01._valuesCache[_0x38c781] = _0x21cdc2.accessorFn(_0x3f1b01.original, _0x52af74);
        return _0x3f1b01._valuesCache[_0x38c781];
      } else {
        return undefined;
      }
    },
    getUniqueValues: _0x168ff3 => {
      if (_0x3f1b01._uniqueValuesCache.hasOwnProperty(_0x168ff3)) {
        return _0x3f1b01._uniqueValuesCache[_0x168ff3];
      }
      const _0x4166f9 = _0x587541.getColumn(_0x168ff3);
      if (_0x4166f9 != null && _0x4166f9.accessorFn) {
        if (_0x4166f9.columnDef.getUniqueValues) {
          _0x3f1b01._uniqueValuesCache[_0x168ff3] = _0x4166f9.columnDef.getUniqueValues(_0x3f1b01.original, _0x52af74);
          return _0x3f1b01._uniqueValuesCache[_0x168ff3];
        } else {
          _0x3f1b01._uniqueValuesCache[_0x168ff3] = [_0x3f1b01.getValue(_0x168ff3)];
          return _0x3f1b01._uniqueValuesCache[_0x168ff3];
        }
      } else {
        return undefined;
      }
    },
    renderValue: _0x12cd9e => {
      return _0x3f1b01.getValue(_0x12cd9e) ?? _0x587541.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => function (_0x479428, _0x3555d6) {
      const _0x2f78bb = [];
      const _0x278453 = _0x5dd5f8 => {
        _0x5dd5f8.forEach(_0x38887b => {
          _0x2f78bb.push(_0x38887b);
          const _0x1ad228 = _0x3555d6(_0x38887b);
          if (_0x1ad228 != null && _0x1ad228.length) {
            _0x278453(_0x1ad228);
          }
        });
      };
      _0x278453(_0x479428);
      return _0x2f78bb;
    }(_0x3f1b01.subRows, _0x4f8473 => _0x4f8473.subRows),
    getParentRow: () => _0x3f1b01.parentId ? _0x587541.getRow(_0x3f1b01.parentId, true) : undefined,
    getParentRows: () => {
      let _0x421e07 = [];
      let _0x4f5af6 = _0x3f1b01;
      while (true) {
        const _0x1f1426 = _0x4f5af6.getParentRow();
        if (!_0x1f1426) {
          break;
        }
        _0x421e07.push(_0x1f1426);
        _0x4f5af6 = _0x1f1426;
      }
      return _0x421e07.reverse();
    },
    getAllCells: o(() => [_0x587541.getAllLeafColumns()], _0x52f699 => _0x52f699.map(_0x2f225e => function (_0x295fc9, _0x5d881f, _0x2ab724, _0x24d227) {
      const _0x526861 = {
        id: _0x5d881f.id + "_" + _0x2ab724.id,
        row: _0x5d881f,
        column: _0x2ab724,
        getValue: () => _0x5d881f.getValue(_0x24d227),
        renderValue: () => {
          return _0x526861.getValue() ?? _0x295fc9.options.renderFallbackValue;
        },
        getContext: o(() => [_0x295fc9, _0x2ab724, _0x5d881f, _0x526861], (_0x196331, _0x2ee0aa, _0x1b209c, _0x3f6b4a) => ({
          table: _0x196331,
          column: _0x2ee0aa,
          row: _0x1b209c,
          cell: _0x3f6b4a,
          getValue: _0x3f6b4a.getValue,
          renderValue: _0x3f6b4a.renderValue
        }), i(_0x295fc9.options, "debugCells"))
      };
      _0x295fc9._features.forEach(_0x2da194 => {
        if (_0x2da194.createCell != null) {
          _0x2da194.createCell(_0x526861, _0x2ab724, _0x5d881f, _0x295fc9);
        }
      }, {});
      return _0x526861;
    }(_0x587541, _0x3f1b01, _0x2f225e, _0x2f225e.id)), i(_0x587541.options, "debugRows")),
    _getAllCellsByColumnId: o(() => [_0x3f1b01.getAllCells()], _0x414d10 => _0x414d10.reduce((_0x53fcce, _0x2532d8) => {
      _0x53fcce[_0x2532d8.column.id] = _0x2532d8;
      return _0x53fcce;
    }, {}), i(_0x587541.options, "debugRows"))
  };
  for (let _0x638452 = 0; _0x638452 < _0x587541._features.length; _0x638452++) {
    const _0x18e7f9 = _0x587541._features[_0x638452];
    if (_0x18e7f9 != null && _0x18e7f9.createRow != null) {
      _0x18e7f9.createRow(_0x3f1b01, _0x587541);
    }
  }
  return _0x3f1b01;
};
const d = {
  createColumn: (_0x50c64b, _0x474b77) => {
    _0x50c64b._getFacetedRowModel = _0x474b77.options.getFacetedRowModel && _0x474b77.options.getFacetedRowModel(_0x474b77, _0x50c64b.id);
    _0x50c64b.getFacetedRowModel = () => _0x50c64b._getFacetedRowModel ? _0x50c64b._getFacetedRowModel() : _0x474b77.getPreFilteredRowModel();
    _0x50c64b._getFacetedUniqueValues = _0x474b77.options.getFacetedUniqueValues && _0x474b77.options.getFacetedUniqueValues(_0x474b77, _0x50c64b.id);
    _0x50c64b.getFacetedUniqueValues = () => _0x50c64b._getFacetedUniqueValues ? _0x50c64b._getFacetedUniqueValues() : new Map();
    _0x50c64b._getFacetedMinMaxValues = _0x474b77.options.getFacetedMinMaxValues && _0x474b77.options.getFacetedMinMaxValues(_0x474b77, _0x50c64b.id);
    _0x50c64b.getFacetedMinMaxValues = () => {
      if (_0x50c64b._getFacetedMinMaxValues) {
        return _0x50c64b._getFacetedMinMaxValues();
      }
    };
  }
};
const c = (_0x1f7d8c, _0x457e7c, _0x3129f7) => {
  var _0xc1b00a;
  var _0x329ee2;
  const _0x45bae8 = _0x3129f7 == null || (_0xc1b00a = _0x3129f7.toString()) == null ? undefined : _0xc1b00a.toLowerCase();
  return Boolean((_0x329ee2 = _0x1f7d8c.getValue(_0x457e7c)) == null || (_0x329ee2 = _0x329ee2.toString()) == null || (_0x329ee2 = _0x329ee2.toLowerCase()) == null ? undefined : _0x329ee2.includes(_0x45bae8));
};
c.autoRemove = _0x5da70e => b(_0x5da70e);
const p = (_0x49d596, _0x42c447, _0x5a9da1) => {
  var _0x3d96ba;
  return Boolean((_0x3d96ba = _0x49d596.getValue(_0x42c447)) == null || (_0x3d96ba = _0x3d96ba.toString()) == null ? undefined : _0x3d96ba.includes(_0x5a9da1));
};
p.autoRemove = _0x451581 => b(_0x451581);
const f = (_0xe4aad8, _0xbfde8, _0x496c3d) => {
  var _0x765638;
  return ((_0x765638 = _0xe4aad8.getValue(_0xbfde8)) == null || (_0x765638 = _0x765638.toString()) == null ? undefined : _0x765638.toLowerCase()) === (_0x496c3d == null ? undefined : _0x496c3d.toLowerCase());
};
f.autoRemove = _0x2bfac9 => b(_0x2bfac9);
const m = (_0x442b5f, _0x1496c7, _0x3bcb1e) => {
  var _0x17af79;
  if ((_0x17af79 = _0x442b5f.getValue(_0x1496c7)) == null) {
    return undefined;
  } else {
    return _0x17af79.includes(_0x3bcb1e);
  }
};
m.autoRemove = _0x23e6a6 => b(_0x23e6a6);
const w = (_0x31a7f7, _0x5eb505, _0x59d099) => !_0x59d099.some(_0x2030e0 => {
  var _0x1c0fdd;
  return (_0x1c0fdd = _0x31a7f7.getValue(_0x5eb505)) == null || !_0x1c0fdd.includes(_0x2030e0);
});
w.autoRemove = _0x5b6d99 => b(_0x5b6d99) || _0x5b6d99 == null || !_0x5b6d99.length;
const S = (_0x51734a, _0x13a0cd, _0x4ca561) => _0x4ca561.some(_0x5d3031 => {
  var _0x4c767b;
  if ((_0x4c767b = _0x51734a.getValue(_0x13a0cd)) == null) {
    return undefined;
  } else {
    return _0x4c767b.includes(_0x5d3031);
  }
});
S.autoRemove = _0xec51f7 => b(_0xec51f7) || _0xec51f7 == null || !_0xec51f7.length;
const h = (_0x9fd557, _0x4ee5f3, _0x1adafc) => _0x9fd557.getValue(_0x4ee5f3) === _0x1adafc;
h.autoRemove = _0x546557 => b(_0x546557);
const C = (_0x43d468, _0x519b05, _0x3a5eb7) => _0x43d468.getValue(_0x519b05) == _0x3a5eb7;
C.autoRemove = _0x15340f => b(_0x15340f);
const v = (_0x465f95, _0xc4b02b, _0x2983f9) => {
  let [_0x19812c, _0x119252] = _0x2983f9;
  const _0x39bb96 = _0x465f95.getValue(_0xc4b02b);
  return _0x39bb96 >= _0x19812c && _0x39bb96 <= _0x119252;
};
v.resolveFilterValue = _0x28fafa => {
  let [_0x504207, _0x2a82d3] = _0x28fafa;
  let _0x261127 = typeof _0x504207 != "number" ? parseFloat(_0x504207) : _0x504207;
  let _0x4b6b3e = typeof _0x2a82d3 != "number" ? parseFloat(_0x2a82d3) : _0x2a82d3;
  let _0x2157f2 = _0x504207 === null || Number.isNaN(_0x261127) ? -Infinity : _0x261127;
  let _0x553b4f = _0x2a82d3 === null || Number.isNaN(_0x4b6b3e) ? Infinity : _0x4b6b3e;
  if (_0x2157f2 > _0x553b4f) {
    const _0x515cb5 = _0x2157f2;
    _0x2157f2 = _0x553b4f;
    _0x553b4f = _0x515cb5;
  }
  return [_0x2157f2, _0x553b4f];
};
v.autoRemove = _0x47658b => b(_0x47658b) || b(_0x47658b[0]) && b(_0x47658b[1]);
const R = {
  includesString: c,
  includesStringSensitive: p,
  equalsString: f,
  arrIncludes: m,
  arrIncludesAll: w,
  arrIncludesSome: S,
  equals: h,
  weakEquals: C,
  inNumberRange: v
};
function b(_0xe84952) {
  return _0xe84952 == null || _0xe84952 === "";
}
const F = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: _0x2fba4d => ({
    columnFilters: [],
    ..._0x2fba4d
  }),
  getDefaultOptions: _0x142efb => ({
    onColumnFiltersChange: n("columnFilters", _0x142efb),
    filterFromLeafRows: false,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (_0x37a4c5, _0x198d63) => {
    _0x37a4c5.getAutoFilterFn = () => {
      const _0x38b491 = _0x198d63.getCoreRowModel().flatRows[0];
      const _0x76574a = _0x38b491 == null ? undefined : _0x38b491.getValue(_0x37a4c5.id);
      if (typeof _0x76574a == "string") {
        return R.includesString;
      } else if (typeof _0x76574a == "number") {
        return R.inNumberRange;
      } else if (typeof _0x76574a == "boolean" || _0x76574a !== null && typeof _0x76574a == "object") {
        return R.equals;
      } else if (Array.isArray(_0x76574a)) {
        return R.arrIncludes;
      } else {
        return R.weakEquals;
      }
    };
    _0x37a4c5.getFilterFn = () => {
      var _0x346ac9;
      if (l(_0x37a4c5.columnDef.filterFn)) {
        return _0x37a4c5.columnDef.filterFn;
      } else if (_0x37a4c5.columnDef.filterFn === "auto") {
        return _0x37a4c5.getAutoFilterFn();
      } else {
        return ((_0x346ac9 = _0x198d63.options.filterFns) == null ? undefined : _0x346ac9[_0x37a4c5.columnDef.filterFn]) ?? R[_0x37a4c5.columnDef.filterFn];
      }
    };
    _0x37a4c5.getCanFilter = () => {
      var _0x3ee88f;
      var _0x10bf67;
      var _0x585941;
      return ((_0x3ee88f = _0x37a4c5.columnDef.enableColumnFilter) == null || _0x3ee88f) && ((_0x10bf67 = _0x198d63.options.enableColumnFilters) == null || _0x10bf67) && ((_0x585941 = _0x198d63.options.enableFilters) == null || _0x585941) && !!_0x37a4c5.accessorFn;
    };
    _0x37a4c5.getIsFiltered = () => _0x37a4c5.getFilterIndex() > -1;
    _0x37a4c5.getFilterValue = () => {
      var _0x2b45f9;
      if ((_0x2b45f9 = _0x198d63.getState().columnFilters) == null || (_0x2b45f9 = _0x2b45f9.find(_0x2b643b => _0x2b643b.id === _0x37a4c5.id)) == null) {
        return undefined;
      } else {
        return _0x2b45f9.value;
      }
    };
    _0x37a4c5.getFilterIndex = () => {
      var _0x450695;
      return ((_0x450695 = _0x198d63.getState().columnFilters) == null ? undefined : _0x450695.findIndex(_0x40c24e => _0x40c24e.id === _0x37a4c5.id)) ?? -1;
    };
    _0x37a4c5.setFilterValue = _0x3638f2 => {
      _0x198d63.setColumnFilters(_0x567c32 => {
        const _0x371e57 = _0x37a4c5.getFilterFn();
        const _0x23a1b0 = _0x567c32 == null ? undefined : _0x567c32.find(_0x267428 => _0x267428.id === _0x37a4c5.id);
        const _0x20d402 = t(_0x3638f2, _0x23a1b0 ? _0x23a1b0.value : undefined);
        if (M(_0x371e57, _0x20d402, _0x37a4c5)) {
          return (_0x567c32 == null ? undefined : _0x567c32.filter(_0x16e3ab => _0x16e3ab.id !== _0x37a4c5.id)) ?? [];
        }
        const _0xf4d995 = {
          id: _0x37a4c5.id,
          value: _0x20d402
        };
        if (_0x23a1b0) {
          return (_0x567c32 == null ? undefined : _0x567c32.map(_0x241b68 => _0x241b68.id === _0x37a4c5.id ? _0xf4d995 : _0x241b68)) ?? [];
        } else if (_0x567c32 != null && _0x567c32.length) {
          return [..._0x567c32, _0xf4d995];
        } else {
          return [_0xf4d995];
        }
      });
    };
  },
  createRow: (_0x2cdf50, _0x17ce8c) => {
    _0x2cdf50.columnFilters = {};
    _0x2cdf50.columnFiltersMeta = {};
  },
  createTable: _0x2c118f => {
    _0x2c118f.setColumnFilters = _0x4d949a => {
      const _0xffba3 = _0x2c118f.getAllLeafColumns();
      if (_0x2c118f.options.onColumnFiltersChange != null) {
        _0x2c118f.options.onColumnFiltersChange(_0x33a080 => {
          var _0x24df93;
          if ((_0x24df93 = t(_0x4d949a, _0x33a080)) == null) {
            return undefined;
          } else {
            return _0x24df93.filter(_0x448cc3 => {
              const _0x3b464a = _0xffba3.find(_0x17d95a => _0x17d95a.id === _0x448cc3.id);
              if (_0x3b464a) {
                if (M(_0x3b464a.getFilterFn(), _0x448cc3.value, _0x3b464a)) {
                  return false;
                }
              }
              return true;
            });
          }
        });
      }
    };
    _0x2c118f.resetColumnFilters = _0x21cf64 => {
      var _0x2852e4;
      _0x2c118f.setColumnFilters(_0x21cf64 ? [] : ((_0x2852e4 = _0x2c118f.initialState) == null ? undefined : _0x2852e4.columnFilters) ?? []);
    };
    _0x2c118f.getPreFilteredRowModel = () => _0x2c118f.getCoreRowModel();
    _0x2c118f.getFilteredRowModel = () => {
      if (!_0x2c118f._getFilteredRowModel && _0x2c118f.options.getFilteredRowModel) {
        _0x2c118f._getFilteredRowModel = _0x2c118f.options.getFilteredRowModel(_0x2c118f);
      }
      if (_0x2c118f.options.manualFiltering || !_0x2c118f._getFilteredRowModel) {
        return _0x2c118f.getPreFilteredRowModel();
      } else {
        return _0x2c118f._getFilteredRowModel();
      }
    };
  }
};
function M(_0x2157bf, _0x55c7e6, _0x6aa74d) {
  return !!_0x2157bf && !!_0x2157bf.autoRemove && _0x2157bf.autoRemove(_0x55c7e6, _0x6aa74d) || _0x55c7e6 === undefined || typeof _0x55c7e6 == "string" && !_0x55c7e6;
}
const I = {
  sum: (_0x3c393a, _0x17a8bc, _0x5719c9) => _0x5719c9.reduce((_0x182ea7, _0x1dbfe7) => {
    const _0x522b27 = _0x1dbfe7.getValue(_0x3c393a);
    return _0x182ea7 + (typeof _0x522b27 == "number" ? _0x522b27 : 0);
  }, 0),
  min: (_0x3fd6b6, _0x2b5081, _0x260e0e) => {
    let _0x289241;
    _0x260e0e.forEach(_0x393ef3 => {
      const _0x1fdc04 = _0x393ef3.getValue(_0x3fd6b6);
      if (_0x1fdc04 != null && (_0x289241 > _0x1fdc04 || _0x289241 === undefined && _0x1fdc04 >= _0x1fdc04)) {
        _0x289241 = _0x1fdc04;
      }
    });
    return _0x289241;
  },
  max: (_0x376b15, _0x1588e3, _0x46d7b8) => {
    let _0x95b245;
    _0x46d7b8.forEach(_0x39aad2 => {
      const _0x341bdc = _0x39aad2.getValue(_0x376b15);
      if (_0x341bdc != null && (_0x95b245 < _0x341bdc || _0x95b245 === undefined && _0x341bdc >= _0x341bdc)) {
        _0x95b245 = _0x341bdc;
      }
    });
    return _0x95b245;
  },
  extent: (_0x7a92e3, _0x3ab202, _0x4a716c) => {
    let _0x34ec3b;
    let _0x50d158;
    _0x4a716c.forEach(_0x20318d => {
      const _0x4b4ac7 = _0x20318d.getValue(_0x7a92e3);
      if (_0x4b4ac7 != null) {
        if (_0x34ec3b === undefined) {
          if (_0x4b4ac7 >= _0x4b4ac7) {
            _0x34ec3b = _0x50d158 = _0x4b4ac7;
          }
        } else {
          if (_0x34ec3b > _0x4b4ac7) {
            _0x34ec3b = _0x4b4ac7;
          }
          if (_0x50d158 < _0x4b4ac7) {
            _0x50d158 = _0x4b4ac7;
          }
        }
      }
    });
    return [_0x34ec3b, _0x50d158];
  },
  mean: (_0x55ea75, _0x4082b7) => {
    let _0xdd0614 = 0;
    let _0xae477b = 0;
    _0x4082b7.forEach(_0x4a5b80 => {
      let _0xa5fb88 = _0x4a5b80.getValue(_0x55ea75);
      if (_0xa5fb88 != null && (_0xa5fb88 = +_0xa5fb88) >= _0xa5fb88) {
        ++_0xdd0614;
        _0xae477b += _0xa5fb88;
      }
    });
    if (_0xdd0614) {
      return _0xae477b / _0xdd0614;
    }
  },
  median: (_0x1abc97, _0x1cb951) => {
    if (!_0x1cb951.length) {
      return;
    }
    const _0xd53264 = _0x1cb951.map(_0x32bcc9 => _0x32bcc9.getValue(_0x1abc97));
    _0x2b4bf0 = _0xd53264;
    if (!Array.isArray(_0x2b4bf0) || !_0x2b4bf0.every(_0x3be7f2 => typeof _0x3be7f2 == "number")) {
      return;
    }
    var _0x2b4bf0;
    if (_0xd53264.length === 1) {
      return _0xd53264[0];
    }
    const _0x416b10 = Math.floor(_0xd53264.length / 2);
    const _0x374441 = _0xd53264.sort((_0x527f25, _0x506ba5) => _0x527f25 - _0x506ba5);
    if (_0xd53264.length % 2 != 0) {
      return _0x374441[_0x416b10];
    } else {
      return (_0x374441[_0x416b10 - 1] + _0x374441[_0x416b10]) / 2;
    }
  },
  unique: (_0x4293ce, _0x326f0b) => Array.from(new Set(_0x326f0b.map(_0x56dfcb => _0x56dfcb.getValue(_0x4293ce))).values()),
  uniqueCount: (_0x340700, _0x5d5021) => new Set(_0x5d5021.map(_0x2f9d51 => _0x2f9d51.getValue(_0x340700))).size,
  count: (_0x313402, _0x3251ad) => _0x3251ad.length
};
const P = {
  getDefaultColumnDef: () => ({
    aggregatedCell: _0x325f9c => {
      var _0x524969;
      return ((_0x524969 = _0x325f9c.getValue()) == null || _0x524969.toString == null ? undefined : _0x524969.toString()) ?? null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: _0x308cab => ({
    grouping: [],
    ..._0x308cab
  }),
  getDefaultOptions: _0x4b25ab => ({
    onGroupingChange: n("grouping", _0x4b25ab),
    groupedColumnMode: "reorder"
  }),
  createColumn: (_0x21183c, _0x196f5f) => {
    _0x21183c.toggleGrouping = () => {
      _0x196f5f.setGrouping(_0x4f3065 => _0x4f3065 != null && _0x4f3065.includes(_0x21183c.id) ? _0x4f3065.filter(_0x5cc229 => _0x5cc229 !== _0x21183c.id) : [...(_0x4f3065 ?? []), _0x21183c.id]);
    };
    _0x21183c.getCanGroup = () => {
      var _0x4ad344;
      var _0x5e76da;
      return ((_0x4ad344 = _0x21183c.columnDef.enableGrouping) == null || _0x4ad344) && ((_0x5e76da = _0x196f5f.options.enableGrouping) == null || _0x5e76da) && (!!_0x21183c.accessorFn || !!_0x21183c.columnDef.getGroupingValue);
    };
    _0x21183c.getIsGrouped = () => {
      var _0x44caa3;
      if ((_0x44caa3 = _0x196f5f.getState().grouping) == null) {
        return undefined;
      } else {
        return _0x44caa3.includes(_0x21183c.id);
      }
    };
    _0x21183c.getGroupedIndex = () => {
      var _0x57dd7e;
      if ((_0x57dd7e = _0x196f5f.getState().grouping) == null) {
        return undefined;
      } else {
        return _0x57dd7e.indexOf(_0x21183c.id);
      }
    };
    _0x21183c.getToggleGroupingHandler = () => {
      const _0x3653a3 = _0x21183c.getCanGroup();
      return () => {
        if (_0x3653a3) {
          _0x21183c.toggleGrouping();
        }
      };
    };
    _0x21183c.getAutoAggregationFn = () => {
      const _0x4c52c3 = _0x196f5f.getCoreRowModel().flatRows[0];
      const _0x4c03c1 = _0x4c52c3 == null ? undefined : _0x4c52c3.getValue(_0x21183c.id);
      if (typeof _0x4c03c1 == "number") {
        return I.sum;
      } else if (Object.prototype.toString.call(_0x4c03c1) === "[object Date]") {
        return I.extent;
      } else {
        return undefined;
      }
    };
    _0x21183c.getAggregationFn = () => {
      var _0x19625f;
      if (!_0x21183c) {
        throw new Error();
      }
      if (l(_0x21183c.columnDef.aggregationFn)) {
        return _0x21183c.columnDef.aggregationFn;
      } else if (_0x21183c.columnDef.aggregationFn === "auto") {
        return _0x21183c.getAutoAggregationFn();
      } else {
        return ((_0x19625f = _0x196f5f.options.aggregationFns) == null ? undefined : _0x19625f[_0x21183c.columnDef.aggregationFn]) ?? I[_0x21183c.columnDef.aggregationFn];
      }
    };
  },
  createTable: _0x221920 => {
    _0x221920.setGrouping = _0x4896bd => _0x221920.options.onGroupingChange == null ? undefined : _0x221920.options.onGroupingChange(_0x4896bd);
    _0x221920.resetGrouping = _0x32272d => {
      var _0x1b824f;
      _0x221920.setGrouping(_0x32272d ? [] : ((_0x1b824f = _0x221920.initialState) == null ? undefined : _0x1b824f.grouping) ?? []);
    };
    _0x221920.getPreGroupedRowModel = () => _0x221920.getFilteredRowModel();
    _0x221920.getGroupedRowModel = () => {
      if (!_0x221920._getGroupedRowModel && _0x221920.options.getGroupedRowModel) {
        _0x221920._getGroupedRowModel = _0x221920.options.getGroupedRowModel(_0x221920);
      }
      if (_0x221920.options.manualGrouping || !_0x221920._getGroupedRowModel) {
        return _0x221920.getPreGroupedRowModel();
      } else {
        return _0x221920._getGroupedRowModel();
      }
    };
  },
  createRow: (_0x28a250, _0x23da3d) => {
    _0x28a250.getIsGrouped = () => !!_0x28a250.groupingColumnId;
    _0x28a250.getGroupingValue = _0x13f99a => {
      if (_0x28a250._groupingValuesCache.hasOwnProperty(_0x13f99a)) {
        return _0x28a250._groupingValuesCache[_0x13f99a];
      }
      const _0x5f382b = _0x23da3d.getColumn(_0x13f99a);
      if (_0x5f382b != null && _0x5f382b.columnDef.getGroupingValue) {
        _0x28a250._groupingValuesCache[_0x13f99a] = _0x5f382b.columnDef.getGroupingValue(_0x28a250.original);
        return _0x28a250._groupingValuesCache[_0x13f99a];
      } else {
        return _0x28a250.getValue(_0x13f99a);
      }
    };
    _0x28a250._groupingValuesCache = {};
  },
  createCell: (_0x4ab107, _0x58a472, _0x1bcd7a, _0x297c16) => {
    _0x4ab107.getIsGrouped = () => _0x58a472.getIsGrouped() && _0x58a472.id === _0x1bcd7a.groupingColumnId;
    _0x4ab107.getIsPlaceholder = () => !_0x4ab107.getIsGrouped() && _0x58a472.getIsGrouped();
    _0x4ab107.getIsAggregated = () => {
      var _0x2ca37d;
      return !_0x4ab107.getIsGrouped() && !_0x4ab107.getIsPlaceholder() && (_0x2ca37d = _0x1bcd7a.subRows) != null && !!_0x2ca37d.length;
    };
  }
};
const V = {
  getInitialState: _0x59f3bd => ({
    columnOrder: [],
    ..._0x59f3bd
  }),
  getDefaultOptions: _0x9a1976 => ({
    onColumnOrderChange: n("columnOrder", _0x9a1976)
  }),
  createColumn: (_0x479e84, _0x466a01) => {
    _0x479e84.getIndex = o(_0x1507ae => [z(_0x466a01, _0x1507ae)], _0x112c76 => _0x112c76.findIndex(_0x5ebdf4 => _0x5ebdf4.id === _0x479e84.id), i(_0x466a01.options, "debugColumns"));
    _0x479e84.getIsFirstColumn = _0x554dd3 => {
      var _0x5989c3;
      return ((_0x5989c3 = z(_0x466a01, _0x554dd3)[0]) == null ? undefined : _0x5989c3.id) === _0x479e84.id;
    };
    _0x479e84.getIsLastColumn = _0x3c13bb => {
      var _0x56fe33;
      const _0x18e7c6 = z(_0x466a01, _0x3c13bb);
      return ((_0x56fe33 = _0x18e7c6[_0x18e7c6.length - 1]) == null ? undefined : _0x56fe33.id) === _0x479e84.id;
    };
  },
  createTable: _0x21e1fd => {
    _0x21e1fd.setColumnOrder = _0xadc10e => _0x21e1fd.options.onColumnOrderChange == null ? undefined : _0x21e1fd.options.onColumnOrderChange(_0xadc10e);
    _0x21e1fd.resetColumnOrder = _0x545b78 => {
      _0x21e1fd.setColumnOrder(_0x545b78 ? [] : _0x21e1fd.initialState.columnOrder ?? []);
    };
    _0x21e1fd._getOrderColumnsFn = o(() => [_0x21e1fd.getState().columnOrder, _0x21e1fd.getState().grouping, _0x21e1fd.options.groupedColumnMode], (_0x1c69c3, _0x57c8dd, _0x391b1f) => _0x10b55d => {
      let _0x40da67 = [];
      if (_0x1c69c3 != null && _0x1c69c3.length) {
        const _0x376a72 = [..._0x1c69c3];
        const _0xcadf36 = [..._0x10b55d];
        while (_0xcadf36.length && _0x376a72.length) {
          const _0x203359 = _0x376a72.shift();
          const _0x449539 = _0xcadf36.findIndex(_0xf893ae => _0xf893ae.id === _0x203359);
          if (_0x449539 > -1) {
            _0x40da67.push(_0xcadf36.splice(_0x449539, 1)[0]);
          }
        }
        _0x40da67 = [..._0x40da67, ..._0xcadf36];
      } else {
        _0x40da67 = _0x10b55d;
      }
      return function (_0x463547, _0x2cf497, _0x5f1b7e) {
        if (_0x2cf497 == null || !_0x2cf497.length || !_0x5f1b7e) {
          return _0x463547;
        }
        const _0x2ca733 = _0x463547.filter(_0x4d2fc6 => !_0x2cf497.includes(_0x4d2fc6.id));
        if (_0x5f1b7e === "remove") {
          return _0x2ca733;
        } else {
          return [..._0x2cf497.map(_0x3e0424 => _0x463547.find(_0x59112c => _0x59112c.id === _0x3e0424)).filter(Boolean), ..._0x2ca733];
        }
      }(_0x40da67, _0x57c8dd, _0x391b1f);
    }, i(_0x21e1fd.options, "debugTable"));
  }
};
const x = {
  getInitialState: _0x23be41 => ({
    columnPinning: {
      left: [],
      right: []
    },
    ..._0x23be41
  }),
  getDefaultOptions: _0x54fd75 => ({
    onColumnPinningChange: n("columnPinning", _0x54fd75)
  }),
  createColumn: (_0x338527, _0x3dfd48) => {
    _0x338527.pin = _0x5cdeec => {
      const _0x145d8c = _0x338527.getLeafColumns().map(_0x39580c => _0x39580c.id).filter(Boolean);
      _0x3dfd48.setColumnPinning(_0x2bcff4 => {
        if (_0x5cdeec === "right") {
          return {
            left: ((_0x2bcff4 == null ? undefined : _0x2bcff4.left) ?? []).filter(_0x23cbde => _0x145d8c == null || !_0x145d8c.includes(_0x23cbde)),
            right: [...((_0x2bcff4 == null ? undefined : _0x2bcff4.right) ?? []).filter(_0x5e15d8 => _0x145d8c == null || !_0x145d8c.includes(_0x5e15d8)), ..._0x145d8c]
          };
        } else if (_0x5cdeec === "left") {
          return {
            left: [...((_0x2bcff4 == null ? undefined : _0x2bcff4.left) ?? []).filter(_0xe478ac => _0x145d8c == null || !_0x145d8c.includes(_0xe478ac)), ..._0x145d8c],
            right: ((_0x2bcff4 == null ? undefined : _0x2bcff4.right) ?? []).filter(_0x45f9a4 => _0x145d8c == null || !_0x145d8c.includes(_0x45f9a4))
          };
        } else {
          return {
            left: ((_0x2bcff4 == null ? undefined : _0x2bcff4.left) ?? []).filter(_0x210dfe => _0x145d8c == null || !_0x145d8c.includes(_0x210dfe)),
            right: ((_0x2bcff4 == null ? undefined : _0x2bcff4.right) ?? []).filter(_0x60b826 => _0x145d8c == null || !_0x145d8c.includes(_0x60b826))
          };
        }
      });
    };
    _0x338527.getCanPin = () => _0x338527.getLeafColumns().some(_0x3fb4d8 => {
      var _0x1837b1;
      var _0x30d6f6;
      return ((_0x1837b1 = _0x3fb4d8.columnDef.enablePinning) == null || _0x1837b1) && ((_0x30d6f6 = _0x3dfd48.options.enableColumnPinning ?? _0x3dfd48.options.enablePinning) == null || _0x30d6f6);
    });
    _0x338527.getIsPinned = () => {
      const _0x37d87e = _0x338527.getLeafColumns().map(_0x993111 => _0x993111.id);
      const {
        left: _0x415080,
        right: _0xde1cc1
      } = _0x3dfd48.getState().columnPinning;
      const _0x2b09c4 = _0x37d87e.some(_0x2f3010 => _0x415080 == null ? undefined : _0x415080.includes(_0x2f3010));
      const _0x4d66e1 = _0x37d87e.some(_0x486eac => _0xde1cc1 == null ? undefined : _0xde1cc1.includes(_0x486eac));
      if (_0x2b09c4) {
        return "left";
      } else {
        return !!_0x4d66e1 && "right";
      }
    };
    _0x338527.getPinnedIndex = () => {
      var _0x514422;
      const _0x535393 = _0x338527.getIsPinned();
      if (_0x535393) {
        return ((_0x514422 = _0x3dfd48.getState().columnPinning) == null || (_0x514422 = _0x514422[_0x535393]) == null ? undefined : _0x514422.indexOf(_0x338527.id)) ?? -1;
      } else {
        return 0;
      }
    };
  },
  createRow: (_0x22245c, _0x596b81) => {
    _0x22245c.getCenterVisibleCells = o(() => [_0x22245c._getAllVisibleCells(), _0x596b81.getState().columnPinning.left, _0x596b81.getState().columnPinning.right], (_0x14be37, _0xa37bd6, _0x2c1572) => {
      const _0xda8d3 = [...(_0xa37bd6 ?? []), ...(_0x2c1572 ?? [])];
      return _0x14be37.filter(_0x495e3b => !_0xda8d3.includes(_0x495e3b.column.id));
    }, i(_0x596b81.options, "debugRows"));
    _0x22245c.getLeftVisibleCells = o(() => [_0x22245c._getAllVisibleCells(), _0x596b81.getState().columnPinning.left], (_0x499863, _0x2f1c02) => (_0x2f1c02 ?? []).map(_0x90686a => _0x499863.find(_0x26ad26 => _0x26ad26.column.id === _0x90686a)).filter(Boolean).map(_0x50cdbd => ({
      ..._0x50cdbd,
      position: "left"
    })), i(_0x596b81.options, "debugRows"));
    _0x22245c.getRightVisibleCells = o(() => [_0x22245c._getAllVisibleCells(), _0x596b81.getState().columnPinning.right], (_0x13122e, _0xb7e5b9) => (_0xb7e5b9 ?? []).map(_0x9931a7 => _0x13122e.find(_0x57af51 => _0x57af51.column.id === _0x9931a7)).filter(Boolean).map(_0x132f7b => ({
      ..._0x132f7b,
      position: "right"
    })), i(_0x596b81.options, "debugRows"));
  },
  createTable: _0x39521c => {
    _0x39521c.setColumnPinning = _0x33c3fb => _0x39521c.options.onColumnPinningChange == null ? undefined : _0x39521c.options.onColumnPinningChange(_0x33c3fb);
    _0x39521c.resetColumnPinning = _0x3eda6f => {
      var _0x3a3d05;
      return _0x39521c.setColumnPinning(_0x3eda6f ? {
        left: [],
        right: []
      } : ((_0x3a3d05 = _0x39521c.initialState) == null ? undefined : _0x3a3d05.columnPinning) ?? {
        left: [],
        right: []
      });
    };
    _0x39521c.getIsSomeColumnsPinned = _0x279ccf => {
      var _0x1f9dff;
      const _0x46cde2 = _0x39521c.getState().columnPinning;
      var _0x41d38d;
      var _0x2d1b3b;
      if (_0x279ccf) {
        return Boolean((_0x1f9dff = _0x46cde2[_0x279ccf]) == null ? undefined : _0x1f9dff.length);
      } else {
        return Boolean(((_0x41d38d = _0x46cde2.left) == null ? undefined : _0x41d38d.length) || ((_0x2d1b3b = _0x46cde2.right) == null ? undefined : _0x2d1b3b.length));
      }
    };
    _0x39521c.getLeftLeafColumns = o(() => [_0x39521c.getAllLeafColumns(), _0x39521c.getState().columnPinning.left], (_0x304115, _0x48ada6) => (_0x48ada6 ?? []).map(_0x3a8e36 => _0x304115.find(_0x32b05f => _0x32b05f.id === _0x3a8e36)).filter(Boolean), i(_0x39521c.options, "debugColumns"));
    _0x39521c.getRightLeafColumns = o(() => [_0x39521c.getAllLeafColumns(), _0x39521c.getState().columnPinning.right], (_0x44928b, _0x5d8a41) => (_0x5d8a41 ?? []).map(_0x3dccc9 => _0x44928b.find(_0x3107b9 => _0x3107b9.id === _0x3dccc9)).filter(Boolean), i(_0x39521c.options, "debugColumns"));
    _0x39521c.getCenterLeafColumns = o(() => [_0x39521c.getAllLeafColumns(), _0x39521c.getState().columnPinning.left, _0x39521c.getState().columnPinning.right], (_0x2b0ac5, _0x5d4f42, _0x50b860) => {
      const _0x48eb61 = [...(_0x5d4f42 ?? []), ...(_0x50b860 ?? [])];
      return _0x2b0ac5.filter(_0x6467f3 => !_0x48eb61.includes(_0x6467f3.id));
    }, i(_0x39521c.options, "debugColumns"));
  }
};
const _ = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
};
const y = {
  getDefaultColumnDef: () => _,
  getInitialState: _0x1e1985 => ({
    columnSizing: {},
    columnSizingInfo: {
      startOffset: null,
      startSize: null,
      deltaOffset: null,
      deltaPercentage: null,
      isResizingColumn: false,
      columnSizingStart: []
    },
    ..._0x1e1985
  }),
  getDefaultOptions: _0x18e983 => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: n("columnSizing", _0x18e983),
    onColumnSizingInfoChange: n("columnSizingInfo", _0x18e983)
  }),
  createColumn: (_0x58fd4, _0x205aa7) => {
    _0x58fd4.getSize = () => {
      const _0x3e7d6e = _0x205aa7.getState().columnSizing[_0x58fd4.id];
      return Math.min(Math.max(_0x58fd4.columnDef.minSize ?? _.minSize, _0x3e7d6e ?? _0x58fd4.columnDef.size ?? _.size), _0x58fd4.columnDef.maxSize ?? _.maxSize);
    };
    _0x58fd4.getStart = o(_0x467cbe => [_0x467cbe, z(_0x205aa7, _0x467cbe), _0x205aa7.getState().columnSizing], (_0x43a14b, _0x1fff5e) => _0x1fff5e.slice(0, _0x58fd4.getIndex(_0x43a14b)).reduce((_0x4f0650, _0x41d51f) => _0x4f0650 + _0x41d51f.getSize(), 0), i(_0x205aa7.options, "debugColumns"));
    _0x58fd4.getAfter = o(_0x2fec01 => [_0x2fec01, z(_0x205aa7, _0x2fec01), _0x205aa7.getState().columnSizing], (_0x4856df, _0x424c01) => _0x424c01.slice(_0x58fd4.getIndex(_0x4856df) + 1).reduce((_0x38f565, _0x496d11) => _0x38f565 + _0x496d11.getSize(), 0), i(_0x205aa7.options, "debugColumns"));
    _0x58fd4.resetSize = () => {
      _0x205aa7.setColumnSizing(_0x17bb1b => {
        let {
          [_0x58fd4.id]: _0x12f88e,
          ..._0x874487
        } = _0x17bb1b;
        return _0x874487;
      });
    };
    _0x58fd4.getCanResize = () => {
      var _0x23f512;
      var _0x48ee29;
      return ((_0x23f512 = _0x58fd4.columnDef.enableResizing) == null || _0x23f512) && ((_0x48ee29 = _0x205aa7.options.enableColumnResizing) == null || _0x48ee29);
    };
    _0x58fd4.getIsResizing = () => _0x205aa7.getState().columnSizingInfo.isResizingColumn === _0x58fd4.id;
  },
  createHeader: (_0x553091, _0x8138b9) => {
    _0x553091.getSize = () => {
      let _0x49bad5 = 0;
      const _0x1f58ec = _0x203a1a => {
        if (_0x203a1a.subHeaders.length) {
          _0x203a1a.subHeaders.forEach(_0x1f58ec);
        } else {
          _0x49bad5 += _0x203a1a.column.getSize() ?? 0;
        }
      };
      _0x1f58ec(_0x553091);
      return _0x49bad5;
    };
    _0x553091.getStart = () => {
      if (_0x553091.index > 0) {
        const _0x1fd4c8 = _0x553091.headerGroup.headers[_0x553091.index - 1];
        return _0x1fd4c8.getStart() + _0x1fd4c8.getSize();
      }
      return 0;
    };
    _0x553091.getResizeHandler = _0x3c73a7 => {
      const _0xed3e49 = _0x8138b9.getColumn(_0x553091.column.id);
      const _0x1b5e9b = _0xed3e49 == null ? undefined : _0xed3e49.getCanResize();
      return _0x35a244 => {
        if (!_0xed3e49 || !_0x1b5e9b) {
          return;
        }
        if (_0x35a244.persist != null) {
          _0x35a244.persist();
        }
        if (G(_0x35a244) && _0x35a244.touches && _0x35a244.touches.length > 1) {
          return;
        }
        const _0x3da9e8 = _0x553091.getSize();
        const _0xd7b014 = _0x553091 ? _0x553091.getLeafHeaders().map(_0x151aed => [_0x151aed.column.id, _0x151aed.column.getSize()]) : [[_0xed3e49.id, _0xed3e49.getSize()]];
        const _0x38bb36 = G(_0x35a244) ? Math.round(_0x35a244.touches[0].clientX) : _0x35a244.clientX;
        const _0x3bc717 = {};
        const _0x363ae1 = (_0x401c72, _0x5c8246) => {
          if (typeof _0x5c8246 == "number") {
            _0x8138b9.setColumnSizingInfo(_0x1d5f2e => {
              const _0x3a9109 = _0x8138b9.options.columnResizeDirection === "rtl" ? -1 : 1;
              const _0x20f985 = (_0x5c8246 - ((_0x1d5f2e == null ? undefined : _0x1d5f2e.startOffset) ?? 0)) * _0x3a9109;
              const _0xdd2ea2 = Math.max(_0x20f985 / ((_0x1d5f2e == null ? undefined : _0x1d5f2e.startSize) ?? 0), -0.999999);
              _0x1d5f2e.columnSizingStart.forEach(_0x5f3da8 => {
                let [_0x1f31e4, _0x18eb8b] = _0x5f3da8;
                _0x3bc717[_0x1f31e4] = Math.round(Math.max(_0x18eb8b + _0x18eb8b * _0xdd2ea2, 0) * 100) / 100;
              });
              return {
                ..._0x1d5f2e,
                deltaOffset: _0x20f985,
                deltaPercentage: _0xdd2ea2
              };
            });
            if (_0x8138b9.options.columnResizeMode === "onChange" || _0x401c72 === "end") {
              _0x8138b9.setColumnSizing(_0x44201a => ({
                ..._0x44201a,
                ..._0x3bc717
              }));
            }
          }
        };
        const _0x48093a = _0x295815 => _0x363ae1("move", _0x295815);
        const _0x30dc3a = _0x317901 => {
          _0x363ae1("end", _0x317901);
          _0x8138b9.setColumnSizingInfo(_0x8df476 => ({
            ..._0x8df476,
            isResizingColumn: false,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        };
        const _0x235f69 = _0x3c73a7 || (typeof document != "undefined" ? document : null);
        const _0x1d2bcc = {
          moveHandler: _0x2edd37 => _0x48093a(_0x2edd37.clientX),
          upHandler: _0x502f1f => {
            if (_0x235f69 != null) {
              _0x235f69.removeEventListener("mousemove", _0x1d2bcc.moveHandler);
            }
            if (_0x235f69 != null) {
              _0x235f69.removeEventListener("mouseup", _0x1d2bcc.upHandler);
            }
            _0x30dc3a(_0x502f1f.clientX);
          }
        };
        const _0x596587 = {
          moveHandler: _0x38c356 => {
            if (_0x38c356.cancelable) {
              _0x38c356.preventDefault();
              _0x38c356.stopPropagation();
            }
            _0x48093a(_0x38c356.touches[0].clientX);
            return false;
          },
          upHandler: _0x401ae4 => {
            var _0x1599c4;
            if (_0x235f69 != null) {
              _0x235f69.removeEventListener("touchmove", _0x596587.moveHandler);
            }
            if (_0x235f69 != null) {
              _0x235f69.removeEventListener("touchend", _0x596587.upHandler);
            }
            if (_0x401ae4.cancelable) {
              _0x401ae4.preventDefault();
              _0x401ae4.stopPropagation();
            }
            _0x30dc3a((_0x1599c4 = _0x401ae4.touches[0]) == null ? undefined : _0x1599c4.clientX);
          }
        };
        const _0x96d976 = !!function () {
          if (typeof E == "boolean") {
            return E;
          }
          let _0x2eaded = false;
          try {
            const _0x1c956a = {
              get passive() {
                _0x2eaded = true;
                return false;
              }
            };
            const _0x3ee508 = () => {};
            window.addEventListener("test", _0x3ee508, _0x1c956a);
            window.removeEventListener("test", _0x3ee508);
          } catch (_0xbe8514) {
            _0x2eaded = false;
          }
          E = _0x2eaded;
          return E;
        }() && {
          passive: false
        };
        if (G(_0x35a244)) {
          if (_0x235f69 != null) {
            _0x235f69.addEventListener("touchmove", _0x596587.moveHandler, _0x96d976);
          }
          if (_0x235f69 != null) {
            _0x235f69.addEventListener("touchend", _0x596587.upHandler, _0x96d976);
          }
        } else {
          if (_0x235f69 != null) {
            _0x235f69.addEventListener("mousemove", _0x1d2bcc.moveHandler, _0x96d976);
          }
          if (_0x235f69 != null) {
            _0x235f69.addEventListener("mouseup", _0x1d2bcc.upHandler, _0x96d976);
          }
        }
        _0x8138b9.setColumnSizingInfo(_0x467606 => ({
          ..._0x467606,
          startOffset: _0x38bb36,
          startSize: _0x3da9e8,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: _0xd7b014,
          isResizingColumn: _0xed3e49.id
        }));
      };
    };
  },
  createTable: _0x89e6c9 => {
    _0x89e6c9.setColumnSizing = _0x2bdcfa => _0x89e6c9.options.onColumnSizingChange == null ? undefined : _0x89e6c9.options.onColumnSizingChange(_0x2bdcfa);
    _0x89e6c9.setColumnSizingInfo = _0x4f5867 => _0x89e6c9.options.onColumnSizingInfoChange == null ? undefined : _0x89e6c9.options.onColumnSizingInfoChange(_0x4f5867);
    _0x89e6c9.resetColumnSizing = _0x2c9ddb => {
      _0x89e6c9.setColumnSizing(_0x2c9ddb ? {} : _0x89e6c9.initialState.columnSizing ?? {});
    };
    _0x89e6c9.resetHeaderSizeInfo = _0x71046e => {
      _0x89e6c9.setColumnSizingInfo(_0x71046e ? {
        startOffset: null,
        startSize: null,
        deltaOffset: null,
        deltaPercentage: null,
        isResizingColumn: false,
        columnSizingStart: []
      } : _0x89e6c9.initialState.columnSizingInfo ?? {
        startOffset: null,
        startSize: null,
        deltaOffset: null,
        deltaPercentage: null,
        isResizingColumn: false,
        columnSizingStart: []
      });
    };
    _0x89e6c9.getTotalSize = () => {
      var _0x1577db;
      return ((_0x1577db = _0x89e6c9.getHeaderGroups()[0]) == null ? undefined : _0x1577db.headers.reduce((_0x47edfb, _0x5c162b) => _0x47edfb + _0x5c162b.getSize(), 0)) ?? 0;
    };
    _0x89e6c9.getLeftTotalSize = () => {
      var _0x41c72d;
      return ((_0x41c72d = _0x89e6c9.getLeftHeaderGroups()[0]) == null ? undefined : _0x41c72d.headers.reduce((_0x25ad66, _0xe6b41) => _0x25ad66 + _0xe6b41.getSize(), 0)) ?? 0;
    };
    _0x89e6c9.getCenterTotalSize = () => {
      var _0x3915d7;
      return ((_0x3915d7 = _0x89e6c9.getCenterHeaderGroups()[0]) == null ? undefined : _0x3915d7.headers.reduce((_0x22d088, _0x27af3e) => _0x22d088 + _0x27af3e.getSize(), 0)) ?? 0;
    };
    _0x89e6c9.getRightTotalSize = () => {
      var _0x5e1487;
      return ((_0x5e1487 = _0x89e6c9.getRightHeaderGroups()[0]) == null ? undefined : _0x5e1487.headers.reduce((_0x96c356, _0x4c4942) => _0x96c356 + _0x4c4942.getSize(), 0)) ?? 0;
    };
  }
};
let E = null;
function G(_0x215493) {
  return _0x215493.type === "touchstart";
}
function z(_0x47326a, _0x4173a8) {
  if (_0x4173a8) {
    if (_0x4173a8 === "center") {
      return _0x47326a.getCenterVisibleLeafColumns();
    } else if (_0x4173a8 === "left") {
      return _0x47326a.getLeftVisibleLeafColumns();
    } else {
      return _0x47326a.getRightVisibleLeafColumns();
    }
  } else {
    return _0x47326a.getVisibleLeafColumns();
  }
}
const A = {
  getInitialState: _0x4c23e4 => ({
    rowSelection: {},
    ..._0x4c23e4
  }),
  getDefaultOptions: _0x27b063 => ({
    onRowSelectionChange: n("rowSelection", _0x27b063),
    enableRowSelection: true,
    enableMultiRowSelection: true,
    enableSubRowSelection: true
  }),
  createTable: _0x2f18d7 => {
    _0x2f18d7.setRowSelection = _0x1577a1 => _0x2f18d7.options.onRowSelectionChange == null ? undefined : _0x2f18d7.options.onRowSelectionChange(_0x1577a1);
    _0x2f18d7.resetRowSelection = _0x3bc66e => {
      return _0x2f18d7.setRowSelection(_0x3bc66e ? {} : _0x2f18d7.initialState.rowSelection ?? {});
    };
    _0x2f18d7.toggleAllRowsSelected = _0x34ba2b => {
      _0x2f18d7.setRowSelection(_0x3cf844 => {
        _0x34ba2b = _0x34ba2b !== undefined ? _0x34ba2b : !_0x2f18d7.getIsAllRowsSelected();
        const _0x116aeb = {
          ..._0x3cf844
        };
        const _0x2ccc2c = _0x2f18d7.getPreGroupedRowModel().flatRows;
        if (_0x34ba2b) {
          _0x2ccc2c.forEach(_0x2190f5 => {
            if (_0x2190f5.getCanSelect()) {
              _0x116aeb[_0x2190f5.id] = true;
            }
          });
        } else {
          _0x2ccc2c.forEach(_0x4c36ab => {
            delete _0x116aeb[_0x4c36ab.id];
          });
        }
        return _0x116aeb;
      });
    };
    _0x2f18d7.toggleAllPageRowsSelected = _0x432bfd => _0x2f18d7.setRowSelection(_0x524256 => {
      const _0x177d70 = _0x432bfd !== undefined ? _0x432bfd : !_0x2f18d7.getIsAllPageRowsSelected();
      const _0x5cfa54 = {
        ..._0x524256
      };
      _0x2f18d7.getRowModel().rows.forEach(_0x1f669d => {
        D(_0x5cfa54, _0x1f669d.id, _0x177d70, true, _0x2f18d7);
      });
      return _0x5cfa54;
    });
    _0x2f18d7.getPreSelectedRowModel = () => _0x2f18d7.getCoreRowModel();
    _0x2f18d7.getSelectedRowModel = o(() => [_0x2f18d7.getState().rowSelection, _0x2f18d7.getCoreRowModel()], (_0x85f0bb, _0x377da5) => Object.keys(_0x85f0bb).length ? L(_0x2f18d7, _0x377da5) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, i(_0x2f18d7.options, "debugTable"));
    _0x2f18d7.getFilteredSelectedRowModel = o(() => [_0x2f18d7.getState().rowSelection, _0x2f18d7.getFilteredRowModel()], (_0x25ad90, _0x339442) => Object.keys(_0x25ad90).length ? L(_0x2f18d7, _0x339442) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, i(_0x2f18d7.options, "debugTable"));
    _0x2f18d7.getGroupedSelectedRowModel = o(() => [_0x2f18d7.getState().rowSelection, _0x2f18d7.getSortedRowModel()], (_0x1dc5a3, _0x10a4e9) => Object.keys(_0x1dc5a3).length ? L(_0x2f18d7, _0x10a4e9) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, i(_0x2f18d7.options, "debugTable"));
    _0x2f18d7.getIsAllRowsSelected = () => {
      const _0x524e9d = _0x2f18d7.getFilteredRowModel().flatRows;
      const {
        rowSelection: _0x597ee6
      } = _0x2f18d7.getState();
      let _0x1d951e = Boolean(_0x524e9d.length && Object.keys(_0x597ee6).length);
      if (_0x1d951e && _0x524e9d.some(_0x20720 => _0x20720.getCanSelect() && !_0x597ee6[_0x20720.id])) {
        _0x1d951e = false;
      }
      return _0x1d951e;
    };
    _0x2f18d7.getIsAllPageRowsSelected = () => {
      const _0x516569 = _0x2f18d7.getPaginationRowModel().flatRows.filter(_0x36db2f => _0x36db2f.getCanSelect());
      const {
        rowSelection: _0x32eef7
      } = _0x2f18d7.getState();
      let _0x241068 = !!_0x516569.length;
      if (_0x241068 && _0x516569.some(_0x6c1d56 => !_0x32eef7[_0x6c1d56.id])) {
        _0x241068 = false;
      }
      return _0x241068;
    };
    _0x2f18d7.getIsSomeRowsSelected = () => {
      const _0x5b1a4c = Object.keys(_0x2f18d7.getState().rowSelection ?? {}).length;
      return _0x5b1a4c > 0 && _0x5b1a4c < _0x2f18d7.getFilteredRowModel().flatRows.length;
    };
    _0x2f18d7.getIsSomePageRowsSelected = () => {
      const _0x12c828 = _0x2f18d7.getPaginationRowModel().flatRows;
      return !_0x2f18d7.getIsAllPageRowsSelected() && _0x12c828.filter(_0x3128b => _0x3128b.getCanSelect()).some(_0x4e64fb => _0x4e64fb.getIsSelected() || _0x4e64fb.getIsSomeSelected());
    };
    _0x2f18d7.getToggleAllRowsSelectedHandler = () => _0xe561d8 => {
      _0x2f18d7.toggleAllRowsSelected(_0xe561d8.target.checked);
    };
    _0x2f18d7.getToggleAllPageRowsSelectedHandler = () => _0x172dc6 => {
      _0x2f18d7.toggleAllPageRowsSelected(_0x172dc6.target.checked);
    };
  },
  createRow: (_0x3672b7, _0x260a2a) => {
    _0x3672b7.toggleSelected = (_0x4658f3, _0x220446) => {
      const _0x4c12c5 = _0x3672b7.getIsSelected();
      _0x260a2a.setRowSelection(_0x43ce82 => {
        var _0x3e88d7;
        _0x4658f3 = _0x4658f3 !== undefined ? _0x4658f3 : !_0x4c12c5;
        if (_0x3672b7.getCanSelect() && _0x4c12c5 === _0x4658f3) {
          return _0x43ce82;
        }
        const _0xe7f612 = {
          ..._0x43ce82
        };
        D(_0xe7f612, _0x3672b7.id, _0x4658f3, (_0x3e88d7 = _0x220446 == null ? undefined : _0x220446.selectChildren) == null || _0x3e88d7, _0x260a2a);
        return _0xe7f612;
      });
    };
    _0x3672b7.getIsSelected = () => {
      const {
        rowSelection: _0x470c19
      } = _0x260a2a.getState();
      return H(_0x3672b7, _0x470c19);
    };
    _0x3672b7.getIsSomeSelected = () => {
      const {
        rowSelection: _0x3b3a2c
      } = _0x260a2a.getState();
      return O(_0x3672b7, _0x3b3a2c) === "some";
    };
    _0x3672b7.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: _0x5de2cb
      } = _0x260a2a.getState();
      return O(_0x3672b7, _0x5de2cb) === "all";
    };
    _0x3672b7.getCanSelect = () => {
      var _0x140e2b;
      if (typeof _0x260a2a.options.enableRowSelection == "function") {
        return _0x260a2a.options.enableRowSelection(_0x3672b7);
      } else {
        return (_0x140e2b = _0x260a2a.options.enableRowSelection) == null || _0x140e2b;
      }
    };
    _0x3672b7.getCanSelectSubRows = () => {
      var _0x2e472d;
      if (typeof _0x260a2a.options.enableSubRowSelection == "function") {
        return _0x260a2a.options.enableSubRowSelection(_0x3672b7);
      } else {
        return (_0x2e472d = _0x260a2a.options.enableSubRowSelection) == null || _0x2e472d;
      }
    };
    _0x3672b7.getCanMultiSelect = () => {
      var _0xa0ef92;
      if (typeof _0x260a2a.options.enableMultiRowSelection == "function") {
        return _0x260a2a.options.enableMultiRowSelection(_0x3672b7);
      } else {
        return (_0xa0ef92 = _0x260a2a.options.enableMultiRowSelection) == null || _0xa0ef92;
      }
    };
    _0x3672b7.getToggleSelectedHandler = () => {
      const _0x5d4ab1 = _0x3672b7.getCanSelect();
      return _0xa3864 => {
        var _0x5ba1d5;
        if (_0x5d4ab1) {
          _0x3672b7.toggleSelected((_0x5ba1d5 = _0xa3864.target) == null ? undefined : _0x5ba1d5.checked);
        }
      };
    };
  }
};
const D = (_0x51e7b3, _0x19aaae, _0x30de4e, _0x19acac, _0xed5766) => {
  var _0x5d4b8f;
  const _0x2eb813 = _0xed5766.getRow(_0x19aaae, true);
  if (_0x30de4e) {
    if (!_0x2eb813.getCanMultiSelect()) {
      Object.keys(_0x51e7b3).forEach(_0x4950ac => delete _0x51e7b3[_0x4950ac]);
    }
    if (_0x2eb813.getCanSelect()) {
      _0x51e7b3[_0x19aaae] = true;
    }
  } else {
    delete _0x51e7b3[_0x19aaae];
  }
  if (_0x19acac && (_0x5d4b8f = _0x2eb813.subRows) != null && _0x5d4b8f.length && _0x2eb813.getCanSelectSubRows()) {
    _0x2eb813.subRows.forEach(_0x825c84 => D(_0x51e7b3, _0x825c84.id, _0x30de4e, _0x19acac, _0xed5766));
  }
};
function L(_0x2bdb53, _0x531441) {
  const _0x16d480 = _0x2bdb53.getState().rowSelection;
  const _0x1d90dd = [];
  const _0xca6192 = {};
  const _0x1aeb0e = function (_0x5b96b4, _0x29876e) {
    return _0x5b96b4.map(_0x4fd2c1 => {
      var _0x499b24;
      const _0x4d3dd3 = H(_0x4fd2c1, _0x16d480);
      if (_0x4d3dd3) {
        _0x1d90dd.push(_0x4fd2c1);
        _0xca6192[_0x4fd2c1.id] = _0x4fd2c1;
      }
      if ((_0x499b24 = _0x4fd2c1.subRows) != null && _0x499b24.length) {
        _0x4fd2c1 = {
          ..._0x4fd2c1,
          subRows: _0x1aeb0e(_0x4fd2c1.subRows)
        };
      }
      if (_0x4d3dd3) {
        return _0x4fd2c1;
      }
    }).filter(Boolean);
  };
  return {
    rows: _0x1aeb0e(_0x531441.rows),
    flatRows: _0x1d90dd,
    rowsById: _0xca6192
  };
}
function H(_0x27fe8a, _0x4c2520) {
  var _0x49f591;
  return (_0x49f591 = _0x4c2520[_0x27fe8a.id]) != null && _0x49f591;
}
function O(_0x19b54f, _0x400aa8, _0x57133c) {
  var _0x45971a;
  if ((_0x45971a = _0x19b54f.subRows) == null || !_0x45971a.length) {
    return false;
  }
  let _0x3cc7bf = true;
  let _0x141e82 = false;
  _0x19b54f.subRows.forEach(_0x5a8276 => {
    if ((!_0x141e82 || _0x3cc7bf) && (_0x5a8276.getCanSelect() && (H(_0x5a8276, _0x400aa8) ? _0x141e82 = true : _0x3cc7bf = false), _0x5a8276.subRows && _0x5a8276.subRows.length)) {
      const _0x5176be = O(_0x5a8276, _0x400aa8);
      if (_0x5176be === "all") {
        _0x141e82 = true;
      } else if (_0x5176be === "some") {
        _0x141e82 = true;
        _0x3cc7bf = false;
      } else {
        _0x3cc7bf = false;
      }
    }
  });
  if (_0x3cc7bf) {
    return "all";
  } else {
    return !!_0x141e82 && "some";
  }
}
const B = /([0-9]+)/gm;
function T(_0x970d07, _0x3762d2) {
  if (_0x970d07 === _0x3762d2) {
    return 0;
  } else if (_0x970d07 > _0x3762d2) {
    return 1;
  } else {
    return -1;
  }
}
function q(_0x3f5ee6) {
  if (typeof _0x3f5ee6 == "number") {
    if (isNaN(_0x3f5ee6) || _0x3f5ee6 === Infinity || _0x3f5ee6 === -Infinity) {
      return "";
    } else {
      return String(_0x3f5ee6);
    }
  } else if (typeof _0x3f5ee6 == "string") {
    return _0x3f5ee6;
  } else {
    return "";
  }
}
function k(_0x53514f, _0x1d4a0a) {
  const _0x21a843 = _0x53514f.split(B).filter(Boolean);
  const _0x47a8ae = _0x1d4a0a.split(B).filter(Boolean);
  while (_0x21a843.length && _0x47a8ae.length) {
    const _0x203234 = _0x21a843.shift();
    const _0x38bd2a = _0x47a8ae.shift();
    const _0x562727 = parseInt(_0x203234, 10);
    const _0x327975 = parseInt(_0x38bd2a, 10);
    const _0x49af24 = [_0x562727, _0x327975].sort();
    if (isNaN(_0x49af24[0])) {
      if (_0x203234 > _0x38bd2a) {
        return 1;
      }
      if (_0x38bd2a > _0x203234) {
        return -1;
      }
    } else {
      if (isNaN(_0x49af24[1])) {
        if (isNaN(_0x562727)) {
          return -1;
        } else {
          return 1;
        }
      }
      if (_0x562727 > _0x327975) {
        return 1;
      }
      if (_0x327975 > _0x562727) {
        return -1;
      }
    }
  }
  return _0x21a843.length - _0x47a8ae.length;
}
const j = {
  alphanumeric: (_0x12e8b4, _0x223124, _0x279be3) => k(q(_0x12e8b4.getValue(_0x279be3)).toLowerCase(), q(_0x223124.getValue(_0x279be3)).toLowerCase()),
  alphanumericCaseSensitive: (_0x188bc0, _0x264125, _0x20067c) => k(q(_0x188bc0.getValue(_0x20067c)), q(_0x264125.getValue(_0x20067c))),
  text: (_0x41fa70, _0x32de3f, _0x4b8d6e) => T(q(_0x41fa70.getValue(_0x4b8d6e)).toLowerCase(), q(_0x32de3f.getValue(_0x4b8d6e)).toLowerCase()),
  textCaseSensitive: (_0x224165, _0x3e661e, _0x149175) => T(q(_0x224165.getValue(_0x149175)), q(_0x3e661e.getValue(_0x149175))),
  datetime: (_0x2f2b0c, _0x630210, _0x138707) => {
    const _0x57d20c = _0x2f2b0c.getValue(_0x138707);
    const _0x2e3ec2 = _0x630210.getValue(_0x138707);
    if (_0x57d20c > _0x2e3ec2) {
      return 1;
    } else if (_0x57d20c < _0x2e3ec2) {
      return -1;
    } else {
      return 0;
    }
  },
  basic: (_0x547141, _0x21f19b, _0xfa99ba) => T(_0x547141.getValue(_0xfa99ba), _0x21f19b.getValue(_0xfa99ba))
};
const N = [u, {
  getInitialState: _0x56e21d => ({
    columnVisibility: {},
    ..._0x56e21d
  }),
  getDefaultOptions: _0x4d58a0 => ({
    onColumnVisibilityChange: n("columnVisibility", _0x4d58a0)
  }),
  createColumn: (_0x11b9bc, _0x574679) => {
    _0x11b9bc.toggleVisibility = _0x5878c1 => {
      if (_0x11b9bc.getCanHide()) {
        _0x574679.setColumnVisibility(_0x233633 => ({
          ..._0x233633,
          [_0x11b9bc.id]: _0x5878c1 ?? !_0x11b9bc.getIsVisible()
        }));
      }
    };
    _0x11b9bc.getIsVisible = () => {
      var _0x32d10a;
      var _0x3ce464;
      const _0xb2f2ea = _0x11b9bc.columns;
      return (_0x32d10a = _0xb2f2ea.length ? _0xb2f2ea.some(_0x37dc6d => _0x37dc6d.getIsVisible()) : (_0x3ce464 = _0x574679.getState().columnVisibility) == null ? undefined : _0x3ce464[_0x11b9bc.id]) == null || _0x32d10a;
    };
    _0x11b9bc.getCanHide = () => {
      var _0x4c33fa;
      var _0x6a6336;
      return ((_0x4c33fa = _0x11b9bc.columnDef.enableHiding) == null || _0x4c33fa) && ((_0x6a6336 = _0x574679.options.enableHiding) == null || _0x6a6336);
    };
    _0x11b9bc.getToggleVisibilityHandler = () => _0x579c05 => {
      if (_0x11b9bc.toggleVisibility != null) {
        _0x11b9bc.toggleVisibility(_0x579c05.target.checked);
      }
    };
  },
  createRow: (_0x4abf6a, _0x262332) => {
    _0x4abf6a._getAllVisibleCells = o(() => [_0x4abf6a.getAllCells(), _0x262332.getState().columnVisibility], _0x4718d7 => _0x4718d7.filter(_0x8e989c => _0x8e989c.column.getIsVisible()), i(_0x262332.options, "debugRows"));
    _0x4abf6a.getVisibleCells = o(() => [_0x4abf6a.getLeftVisibleCells(), _0x4abf6a.getCenterVisibleCells(), _0x4abf6a.getRightVisibleCells()], (_0x131594, _0x4c9830, _0xaab120) => [..._0x131594, ..._0x4c9830, ..._0xaab120], i(_0x262332.options, "debugRows"));
  },
  createTable: _0x1cac53 => {
    const _0x215753 = (_0x485cf9, _0x2ea3d3) => o(() => [_0x2ea3d3(), _0x2ea3d3().filter(_0x827cd6 => _0x827cd6.getIsVisible()).map(_0x3cffab => _0x3cffab.id).join("_")], _0x59df1c => _0x59df1c.filter(_0x457f97 => _0x457f97.getIsVisible == null ? undefined : _0x457f97.getIsVisible()), i(_0x1cac53.options, "debugColumns"));
    _0x1cac53.getVisibleFlatColumns = _0x215753(0, () => _0x1cac53.getAllFlatColumns());
    _0x1cac53.getVisibleLeafColumns = _0x215753(0, () => _0x1cac53.getAllLeafColumns());
    _0x1cac53.getLeftVisibleLeafColumns = _0x215753(0, () => _0x1cac53.getLeftLeafColumns());
    _0x1cac53.getRightVisibleLeafColumns = _0x215753(0, () => _0x1cac53.getRightLeafColumns());
    _0x1cac53.getCenterVisibleLeafColumns = _0x215753(0, () => _0x1cac53.getCenterLeafColumns());
    _0x1cac53.setColumnVisibility = _0x22fc54 => _0x1cac53.options.onColumnVisibilityChange == null ? undefined : _0x1cac53.options.onColumnVisibilityChange(_0x22fc54);
    _0x1cac53.resetColumnVisibility = _0x95d0f8 => {
      _0x1cac53.setColumnVisibility(_0x95d0f8 ? {} : _0x1cac53.initialState.columnVisibility ?? {});
    };
    _0x1cac53.toggleAllColumnsVisible = _0x561ac1 => {
      _0x561ac1 = _0x561ac1 ?? !_0x1cac53.getIsAllColumnsVisible();
      _0x1cac53.setColumnVisibility(_0x1cac53.getAllLeafColumns().reduce((_0x6a83eb, _0x6a683b) => ({
        ..._0x6a83eb,
        [_0x6a683b.id]: _0x561ac1 || _0x6a683b.getCanHide == null || !_0x6a683b.getCanHide()
      }), {}));
    };
    _0x1cac53.getIsAllColumnsVisible = () => !_0x1cac53.getAllLeafColumns().some(_0xa68fc9 => _0xa68fc9.getIsVisible == null || !_0xa68fc9.getIsVisible());
    _0x1cac53.getIsSomeColumnsVisible = () => _0x1cac53.getAllLeafColumns().some(_0x3dcf2f => _0x3dcf2f.getIsVisible == null ? undefined : _0x3dcf2f.getIsVisible());
    _0x1cac53.getToggleAllColumnsVisibilityHandler = () => _0x1aeef5 => {
      var _0x4203a6;
      _0x1cac53.toggleAllColumnsVisible((_0x4203a6 = _0x1aeef5.target) == null ? undefined : _0x4203a6.checked);
    };
  }
}, V, x, d, F, {
  createTable: _0x369323 => {
    _0x369323._getGlobalFacetedRowModel = _0x369323.options.getFacetedRowModel && _0x369323.options.getFacetedRowModel(_0x369323, "__global__");
    _0x369323.getGlobalFacetedRowModel = () => _0x369323.options.manualFiltering || !_0x369323._getGlobalFacetedRowModel ? _0x369323.getPreFilteredRowModel() : _0x369323._getGlobalFacetedRowModel();
    _0x369323._getGlobalFacetedUniqueValues = _0x369323.options.getFacetedUniqueValues && _0x369323.options.getFacetedUniqueValues(_0x369323, "__global__");
    _0x369323.getGlobalFacetedUniqueValues = () => _0x369323._getGlobalFacetedUniqueValues ? _0x369323._getGlobalFacetedUniqueValues() : new Map();
    _0x369323._getGlobalFacetedMinMaxValues = _0x369323.options.getFacetedMinMaxValues && _0x369323.options.getFacetedMinMaxValues(_0x369323, "__global__");
    _0x369323.getGlobalFacetedMinMaxValues = () => {
      if (_0x369323._getGlobalFacetedMinMaxValues) {
        return _0x369323._getGlobalFacetedMinMaxValues();
      }
    };
  }
}, {
  getInitialState: _0x110f3a => ({
    globalFilter: undefined,
    ..._0x110f3a
  }),
  getDefaultOptions: _0x480b3d => ({
    onGlobalFilterChange: n("globalFilter", _0x480b3d),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: _0x41ec49 => {
      var _0x26377e;
      const _0x364f72 = (_0x26377e = _0x480b3d.getCoreRowModel().flatRows[0]) == null || (_0x26377e = _0x26377e._getAllCellsByColumnId()[_0x41ec49.id]) == null ? undefined : _0x26377e.getValue();
      return typeof _0x364f72 == "string" || typeof _0x364f72 == "number";
    }
  }),
  createColumn: (_0x377602, _0x40368c) => {
    _0x377602.getCanGlobalFilter = () => {
      var _0xb71d7;
      var _0x4d7ceb;
      var _0x2c6775;
      var _0x2cce80;
      return ((_0xb71d7 = _0x377602.columnDef.enableGlobalFilter) == null || _0xb71d7) && ((_0x4d7ceb = _0x40368c.options.enableGlobalFilter) == null || _0x4d7ceb) && ((_0x2c6775 = _0x40368c.options.enableFilters) == null || _0x2c6775) && ((_0x2cce80 = _0x40368c.options.getColumnCanGlobalFilter == null ? undefined : _0x40368c.options.getColumnCanGlobalFilter(_0x377602)) == null || _0x2cce80) && !!_0x377602.accessorFn;
    };
  },
  createTable: _0x2c57dd => {
    _0x2c57dd.getGlobalAutoFilterFn = () => R.includesString;
    _0x2c57dd.getGlobalFilterFn = () => {
      var _0x5f8f0e;
      const {
        globalFilterFn: _0x205e2b
      } = _0x2c57dd.options;
      if (l(_0x205e2b)) {
        return _0x205e2b;
      } else if (_0x205e2b === "auto") {
        return _0x2c57dd.getGlobalAutoFilterFn();
      } else {
        return ((_0x5f8f0e = _0x2c57dd.options.filterFns) == null ? undefined : _0x5f8f0e[_0x205e2b]) ?? R[_0x205e2b];
      }
    };
    _0x2c57dd.setGlobalFilter = _0x46cd3e => {
      if (_0x2c57dd.options.onGlobalFilterChange != null) {
        _0x2c57dd.options.onGlobalFilterChange(_0x46cd3e);
      }
    };
    _0x2c57dd.resetGlobalFilter = _0x54f967 => {
      _0x2c57dd.setGlobalFilter(_0x54f967 ? undefined : _0x2c57dd.initialState.globalFilter);
    };
  }
}, {
  getInitialState: _0x1c53d6 => ({
    sorting: [],
    ..._0x1c53d6
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: _0x5b834a => ({
    onSortingChange: n("sorting", _0x5b834a),
    isMultiSortEvent: _0x36a5a6 => _0x36a5a6.shiftKey
  }),
  createColumn: (_0x13efd5, _0xc2d9ec) => {
    _0x13efd5.getAutoSortingFn = () => {
      const _0x2ab909 = _0xc2d9ec.getFilteredRowModel().flatRows.slice(10);
      let _0x9d47b7 = false;
      for (const _0x57e4f8 of _0x2ab909) {
        const _0x1512f8 = _0x57e4f8 == null ? undefined : _0x57e4f8.getValue(_0x13efd5.id);
        if (Object.prototype.toString.call(_0x1512f8) === "[object Date]") {
          return j.datetime;
        }
        if (typeof _0x1512f8 == "string" && (_0x9d47b7 = true, _0x1512f8.split(B).length > 1)) {
          return j.alphanumeric;
        }
      }
      if (_0x9d47b7) {
        return j.text;
      } else {
        return j.basic;
      }
    };
    _0x13efd5.getAutoSortDir = () => {
      const _0x56ed5d = _0xc2d9ec.getFilteredRowModel().flatRows[0];
      if (typeof (_0x56ed5d == null ? undefined : _0x56ed5d.getValue(_0x13efd5.id)) == "string") {
        return "asc";
      } else {
        return "desc";
      }
    };
    _0x13efd5.getSortingFn = () => {
      var _0x57887f;
      if (!_0x13efd5) {
        throw new Error();
      }
      if (l(_0x13efd5.columnDef.sortingFn)) {
        return _0x13efd5.columnDef.sortingFn;
      } else if (_0x13efd5.columnDef.sortingFn === "auto") {
        return _0x13efd5.getAutoSortingFn();
      } else {
        return ((_0x57887f = _0xc2d9ec.options.sortingFns) == null ? undefined : _0x57887f[_0x13efd5.columnDef.sortingFn]) ?? j[_0x13efd5.columnDef.sortingFn];
      }
    };
    _0x13efd5.toggleSorting = (_0x40bfeb, _0x44f02e) => {
      const _0x1e8c9b = _0x13efd5.getNextSortingOrder();
      const _0x3d74bf = _0x40bfeb != null;
      _0xc2d9ec.setSorting(_0x21cd00 => {
        const _0xf0b0a = _0x21cd00 == null ? undefined : _0x21cd00.find(_0x400ee0 => _0x400ee0.id === _0x13efd5.id);
        const _0x1984aa = _0x21cd00 == null ? undefined : _0x21cd00.findIndex(_0x48f7d5 => _0x48f7d5.id === _0x13efd5.id);
        let _0x53da5a;
        let _0x552dc0 = [];
        let _0x1b61c6 = _0x3d74bf ? _0x40bfeb : _0x1e8c9b === "desc";
        _0x53da5a = _0x21cd00 != null && _0x21cd00.length && _0x13efd5.getCanMultiSort() && _0x44f02e ? _0xf0b0a ? "toggle" : "add" : _0x21cd00 != null && _0x21cd00.length && _0x1984aa !== _0x21cd00.length - 1 ? "replace" : _0xf0b0a ? "toggle" : "replace";
        if (_0x53da5a === "toggle") {
          if (!_0x3d74bf && !_0x1e8c9b) {
            _0x53da5a = "remove";
          }
        }
        if (_0x53da5a === "add") {
          _0x552dc0 = [..._0x21cd00, {
            id: _0x13efd5.id,
            desc: _0x1b61c6
          }];
          _0x552dc0.splice(0, _0x552dc0.length - (_0xc2d9ec.options.maxMultiSortColCount ?? Number.MAX_SAFE_INTEGER));
        } else {
          _0x552dc0 = _0x53da5a === "toggle" ? _0x21cd00.map(_0x364d9a => _0x364d9a.id === _0x13efd5.id ? {
            ..._0x364d9a,
            desc: _0x1b61c6
          } : _0x364d9a) : _0x53da5a === "remove" ? _0x21cd00.filter(_0x42243c => _0x42243c.id !== _0x13efd5.id) : [{
            id: _0x13efd5.id,
            desc: _0x1b61c6
          }];
        }
        return _0x552dc0;
      });
    };
    _0x13efd5.getFirstSortDir = () => {
      if (_0x13efd5.columnDef.sortDescFirst ?? _0xc2d9ec.options.sortDescFirst ?? _0x13efd5.getAutoSortDir() === "desc") {
        return "desc";
      } else {
        return "asc";
      }
    };
    _0x13efd5.getNextSortingOrder = _0x448cbc => {
      var _0x5e1a8c;
      var _0x57504e;
      const _0x57463d = _0x13efd5.getFirstSortDir();
      const _0x3fbe99 = _0x13efd5.getIsSorted();
      if (_0x3fbe99) {
        return (_0x3fbe99 === _0x57463d || (_0x5e1a8c = _0xc2d9ec.options.enableSortingRemoval) != null && !_0x5e1a8c || !!_0x448cbc && (_0x57504e = _0xc2d9ec.options.enableMultiRemove) != null && !_0x57504e) && (_0x3fbe99 === "desc" ? "asc" : "desc");
      } else {
        return _0x57463d;
      }
    };
    _0x13efd5.getCanSort = () => {
      var _0x31dd6a;
      var _0x328202;
      return ((_0x31dd6a = _0x13efd5.columnDef.enableSorting) == null || _0x31dd6a) && ((_0x328202 = _0xc2d9ec.options.enableSorting) == null || _0x328202) && !!_0x13efd5.accessorFn;
    };
    _0x13efd5.getCanMultiSort = () => {
      return _0x13efd5.columnDef.enableMultiSort ?? _0xc2d9ec.options.enableMultiSort ?? !!_0x13efd5.accessorFn;
    };
    _0x13efd5.getIsSorted = () => {
      var _0x5e7be6;
      const _0x18e049 = (_0x5e7be6 = _0xc2d9ec.getState().sorting) == null ? undefined : _0x5e7be6.find(_0x438424 => _0x438424.id === _0x13efd5.id);
      return !!_0x18e049 && (_0x18e049.desc ? "desc" : "asc");
    };
    _0x13efd5.getSortIndex = () => {
      var _0xd2e21a;
      return ((_0xd2e21a = _0xc2d9ec.getState().sorting) == null ? undefined : _0xd2e21a.findIndex(_0x11335f => _0x11335f.id === _0x13efd5.id)) ?? -1;
    };
    _0x13efd5.clearSorting = () => {
      _0xc2d9ec.setSorting(_0x1f48a7 => _0x1f48a7 != null && _0x1f48a7.length ? _0x1f48a7.filter(_0x38779e => _0x38779e.id !== _0x13efd5.id) : []);
    };
    _0x13efd5.getToggleSortingHandler = () => {
      const _0x416743 = _0x13efd5.getCanSort();
      return _0x25e6f7 => {
        if (_0x416743) {
          if (_0x25e6f7.persist != null) {
            _0x25e6f7.persist();
          }
          if (_0x13efd5.toggleSorting != null) {
            _0x13efd5.toggleSorting(undefined, !!_0x13efd5.getCanMultiSort() && (_0xc2d9ec.options.isMultiSortEvent == null ? undefined : _0xc2d9ec.options.isMultiSortEvent(_0x25e6f7)));
          }
        }
      };
    };
  },
  createTable: _0x1330ab => {
    _0x1330ab.setSorting = _0x3adbae => _0x1330ab.options.onSortingChange == null ? undefined : _0x1330ab.options.onSortingChange(_0x3adbae);
    _0x1330ab.resetSorting = _0x46b6e2 => {
      var _0x23cb39;
      _0x1330ab.setSorting(_0x46b6e2 ? [] : ((_0x23cb39 = _0x1330ab.initialState) == null ? undefined : _0x23cb39.sorting) ?? []);
    };
    _0x1330ab.getPreSortedRowModel = () => _0x1330ab.getGroupedRowModel();
    _0x1330ab.getSortedRowModel = () => {
      if (!_0x1330ab._getSortedRowModel && _0x1330ab.options.getSortedRowModel) {
        _0x1330ab._getSortedRowModel = _0x1330ab.options.getSortedRowModel(_0x1330ab);
      }
      if (_0x1330ab.options.manualSorting || !_0x1330ab._getSortedRowModel) {
        return _0x1330ab.getPreSortedRowModel();
      } else {
        return _0x1330ab._getSortedRowModel();
      }
    };
  }
}, P, {
  getInitialState: _0x583c4c => ({
    expanded: {},
    ..._0x583c4c
  }),
  getDefaultOptions: _0x5835b6 => ({
    onExpandedChange: n("expanded", _0x5835b6),
    paginateExpandedRows: true
  }),
  createTable: _0x1ac3fa => {
    let _0x16d7cb = false;
    let _0x48b599 = false;
    _0x1ac3fa._autoResetExpanded = () => {
      if (_0x16d7cb) {
        if (_0x1ac3fa.options.autoResetAll ?? _0x1ac3fa.options.autoResetExpanded ?? !_0x1ac3fa.options.manualExpanding) {
          if (_0x48b599) {
            return;
          }
          _0x48b599 = true;
          _0x1ac3fa._queue(() => {
            _0x1ac3fa.resetExpanded();
            _0x48b599 = false;
          });
        }
      } else {
        _0x1ac3fa._queue(() => {
          _0x16d7cb = true;
        });
      }
    };
    _0x1ac3fa.setExpanded = _0xe69959 => _0x1ac3fa.options.onExpandedChange == null ? undefined : _0x1ac3fa.options.onExpandedChange(_0xe69959);
    _0x1ac3fa.toggleAllRowsExpanded = _0x3aeaf2 => {
      if (_0x3aeaf2 ?? !_0x1ac3fa.getIsAllRowsExpanded()) {
        _0x1ac3fa.setExpanded(true);
      } else {
        _0x1ac3fa.setExpanded({});
      }
    };
    _0x1ac3fa.resetExpanded = _0x1e75a4 => {
      var _0x475029;
      _0x1ac3fa.setExpanded(_0x1e75a4 ? {} : ((_0x475029 = _0x1ac3fa.initialState) == null ? undefined : _0x475029.expanded) ?? {});
    };
    _0x1ac3fa.getCanSomeRowsExpand = () => _0x1ac3fa.getPrePaginationRowModel().flatRows.some(_0x42fada => _0x42fada.getCanExpand());
    _0x1ac3fa.getToggleAllRowsExpandedHandler = () => _0x4c4a26 => {
      if (_0x4c4a26.persist != null) {
        _0x4c4a26.persist();
      }
      _0x1ac3fa.toggleAllRowsExpanded();
    };
    _0x1ac3fa.getIsSomeRowsExpanded = () => {
      const _0x1eb11f = _0x1ac3fa.getState().expanded;
      return _0x1eb11f === true || Object.values(_0x1eb11f).some(Boolean);
    };
    _0x1ac3fa.getIsAllRowsExpanded = () => {
      const _0x3507df = _0x1ac3fa.getState().expanded;
      if (typeof _0x3507df == "boolean") {
        return _0x3507df === true;
      } else {
        return !!Object.keys(_0x3507df).length && !_0x1ac3fa.getRowModel().flatRows.some(_0x417bf9 => !_0x417bf9.getIsExpanded());
      }
    };
    _0x1ac3fa.getExpandedDepth = () => {
      let _0x336962 = 0;
      (_0x1ac3fa.getState().expanded === true ? Object.keys(_0x1ac3fa.getRowModel().rowsById) : Object.keys(_0x1ac3fa.getState().expanded)).forEach(_0x49dc64 => {
        const _0x5ee3b6 = _0x49dc64.split(".");
        _0x336962 = Math.max(_0x336962, _0x5ee3b6.length);
      });
      return _0x336962;
    };
    _0x1ac3fa.getPreExpandedRowModel = () => _0x1ac3fa.getSortedRowModel();
    _0x1ac3fa.getExpandedRowModel = () => {
      if (!_0x1ac3fa._getExpandedRowModel && _0x1ac3fa.options.getExpandedRowModel) {
        _0x1ac3fa._getExpandedRowModel = _0x1ac3fa.options.getExpandedRowModel(_0x1ac3fa);
      }
      if (_0x1ac3fa.options.manualExpanding || !_0x1ac3fa._getExpandedRowModel) {
        return _0x1ac3fa.getPreExpandedRowModel();
      } else {
        return _0x1ac3fa._getExpandedRowModel();
      }
    };
  },
  createRow: (_0x16b95b, _0x8df0c2) => {
    _0x16b95b.toggleExpanded = _0x1be70f => {
      _0x8df0c2.setExpanded(_0x481843 => {
        const _0x588e8c = _0x481843 === true || _0x481843 != null && !!_0x481843[_0x16b95b.id];
        let _0x5e7f6f = {};
        if (_0x481843 === true) {
          Object.keys(_0x8df0c2.getRowModel().rowsById).forEach(_0xa55607 => {
            _0x5e7f6f[_0xa55607] = true;
          });
        } else {
          _0x5e7f6f = _0x481843;
        }
        _0x1be70f = _0x1be70f ?? !_0x588e8c;
        if (!_0x588e8c && _0x1be70f) {
          return {
            ..._0x5e7f6f,
            [_0x16b95b.id]: true
          };
        }
        if (_0x588e8c && !_0x1be70f) {
          const {
            [_0x16b95b.id]: _0x54e5c2,
            ..._0x170ebf
          } = _0x5e7f6f;
          return _0x170ebf;
        }
        return _0x481843;
      });
    };
    _0x16b95b.getIsExpanded = () => {
      const _0x364979 = _0x8df0c2.getState().expanded;
      return !!((_0x8df0c2.options.getIsRowExpanded == null ? undefined : _0x8df0c2.options.getIsRowExpanded(_0x16b95b)) ?? (_0x364979 === true || (_0x364979 == null ? undefined : _0x364979[_0x16b95b.id])));
    };
    _0x16b95b.getCanExpand = () => {
      var _0x3d70c9;
      var _0x9edbb7;
      return (_0x8df0c2.options.getRowCanExpand == null ? undefined : _0x8df0c2.options.getRowCanExpand(_0x16b95b)) ?? (((_0x3d70c9 = _0x8df0c2.options.enableExpanding) == null || _0x3d70c9) && (_0x9edbb7 = _0x16b95b.subRows) != null && !!_0x9edbb7.length);
    };
    _0x16b95b.getIsAllParentsExpanded = () => {
      let _0x2a5a8c = true;
      let _0x20b8a5 = _0x16b95b;
      while (_0x2a5a8c && _0x20b8a5.parentId) {
        _0x20b8a5 = _0x8df0c2.getRow(_0x20b8a5.parentId, true);
        _0x2a5a8c = _0x20b8a5.getIsExpanded();
      }
      return _0x2a5a8c;
    };
    _0x16b95b.getToggleExpandedHandler = () => {
      const _0x3d59f8 = _0x16b95b.getCanExpand();
      return () => {
        if (_0x3d59f8) {
          _0x16b95b.toggleExpanded();
        }
      };
    };
  }
}, {
  getInitialState: _0x4307b7 => ({
    ..._0x4307b7,
    pagination: {
      pageIndex: 0,
      pageSize: 10,
      ...(_0x4307b7 == null ? undefined : _0x4307b7.pagination)
    }
  }),
  getDefaultOptions: _0x2a16fb => ({
    onPaginationChange: n("pagination", _0x2a16fb)
  }),
  createTable: _0x539437 => {
    let _0x556b17 = false;
    let _0x4d3861 = false;
    _0x539437._autoResetPageIndex = () => {
      if (_0x556b17) {
        if (_0x539437.options.autoResetAll ?? _0x539437.options.autoResetPageIndex ?? !_0x539437.options.manualPagination) {
          if (_0x4d3861) {
            return;
          }
          _0x4d3861 = true;
          _0x539437._queue(() => {
            _0x539437.resetPageIndex();
            _0x4d3861 = false;
          });
        }
      } else {
        _0x539437._queue(() => {
          _0x556b17 = true;
        });
      }
    };
    _0x539437.setPagination = _0x24a722 => _0x539437.options.onPaginationChange == null ? undefined : _0x539437.options.onPaginationChange(_0x5f279a => t(_0x24a722, _0x5f279a));
    _0x539437.resetPagination = _0x2cb017 => {
      _0x539437.setPagination(_0x2cb017 ? {
        pageIndex: 0,
        pageSize: 10
      } : _0x539437.initialState.pagination ?? {
        pageIndex: 0,
        pageSize: 10
      });
    };
    _0x539437.setPageIndex = _0x1e25d5 => {
      _0x539437.setPagination(_0x1c0d2e => {
        let _0x30932c = t(_0x1e25d5, _0x1c0d2e.pageIndex);
        const _0x2400a2 = _0x539437.options.pageCount === undefined || _0x539437.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : _0x539437.options.pageCount - 1;
        _0x30932c = Math.max(0, Math.min(_0x30932c, _0x2400a2));
        return {
          ..._0x1c0d2e,
          pageIndex: _0x30932c
        };
      });
    };
    _0x539437.resetPageIndex = _0x41c00 => {
      var _0x928632;
      _0x539437.setPageIndex(_0x41c00 ? 0 : ((_0x928632 = _0x539437.initialState) == null || (_0x928632 = _0x928632.pagination) == null ? undefined : _0x928632.pageIndex) ?? 0);
    };
    _0x539437.resetPageSize = _0x4e347a => {
      var _0x522976;
      _0x539437.setPageSize(_0x4e347a ? 10 : ((_0x522976 = _0x539437.initialState) == null || (_0x522976 = _0x522976.pagination) == null ? undefined : _0x522976.pageSize) ?? 10);
    };
    _0x539437.setPageSize = _0x476e6c => {
      _0x539437.setPagination(_0x3dde86 => {
        const _0xf94c20 = Math.max(1, t(_0x476e6c, _0x3dde86.pageSize));
        const _0x1de030 = _0x3dde86.pageSize * _0x3dde86.pageIndex;
        const _0x212d0f = Math.floor(_0x1de030 / _0xf94c20);
        return {
          ..._0x3dde86,
          pageIndex: _0x212d0f,
          pageSize: _0xf94c20
        };
      });
    };
    _0x539437.setPageCount = _0x3bb37b => _0x539437.setPagination(_0x392525 => {
      let _0x877ea5 = t(_0x3bb37b, _0x539437.options.pageCount ?? -1);
      if (typeof _0x877ea5 == "number") {
        _0x877ea5 = Math.max(-1, _0x877ea5);
      }
      return {
        ..._0x392525,
        pageCount: _0x877ea5
      };
    });
    _0x539437.getPageOptions = o(() => [_0x539437.getPageCount()], _0x3d02c4 => {
      let _0x30d894 = [];
      if (_0x3d02c4 && _0x3d02c4 > 0) {
        _0x30d894 = [...new Array(_0x3d02c4)].fill(null).map((_0x2f5b61, _0x315dbb) => _0x315dbb);
      }
      return _0x30d894;
    }, i(_0x539437.options, "debugTable"));
    _0x539437.getCanPreviousPage = () => _0x539437.getState().pagination.pageIndex > 0;
    _0x539437.getCanNextPage = () => {
      const {
        pageIndex: _0x296e34
      } = _0x539437.getState().pagination;
      const _0x5d3a6e = _0x539437.getPageCount();
      return _0x5d3a6e === -1 || _0x5d3a6e !== 0 && _0x296e34 < _0x5d3a6e - 1;
    };
    _0x539437.previousPage = () => _0x539437.setPageIndex(_0x2610bf => _0x2610bf - 1);
    _0x539437.nextPage = () => _0x539437.setPageIndex(_0xfc5898 => _0xfc5898 + 1);
    _0x539437.firstPage = () => _0x539437.setPageIndex(0);
    _0x539437.lastPage = () => _0x539437.setPageIndex(_0x539437.getPageCount() - 1);
    _0x539437.getPrePaginationRowModel = () => _0x539437.getExpandedRowModel();
    _0x539437.getPaginationRowModel = () => {
      if (!_0x539437._getPaginationRowModel && _0x539437.options.getPaginationRowModel) {
        _0x539437._getPaginationRowModel = _0x539437.options.getPaginationRowModel(_0x539437);
      }
      if (_0x539437.options.manualPagination || !_0x539437._getPaginationRowModel) {
        return _0x539437.getPrePaginationRowModel();
      } else {
        return _0x539437._getPaginationRowModel();
      }
    };
    _0x539437.getPageCount = () => {
      return _0x539437.options.pageCount ?? Math.ceil(_0x539437.getRowCount() / _0x539437.getState().pagination.pageSize);
    };
    _0x539437.getRowCount = () => {
      return _0x539437.options.rowCount ?? _0x539437.getPrePaginationRowModel().rows.length;
    };
  }
}, {
  getInitialState: _0xa6591b => ({
    rowPinning: {
      top: [],
      bottom: []
    },
    ..._0xa6591b
  }),
  getDefaultOptions: _0x1b839a => ({
    onRowPinningChange: n("rowPinning", _0x1b839a)
  }),
  createRow: (_0x48d208, _0xbbab2a) => {
    _0x48d208.pin = (_0x349103, _0xe2b7c5, _0x23d196) => {
      const _0x516913 = _0xe2b7c5 ? _0x48d208.getLeafRows().map(_0x488750 => {
        let {
          id: _0x387b1b
        } = _0x488750;
        return _0x387b1b;
      }) : [];
      const _0x17ba18 = _0x23d196 ? _0x48d208.getParentRows().map(_0x361b74 => {
        let {
          id: _0x7a69c7
        } = _0x361b74;
        return _0x7a69c7;
      }) : [];
      const _0x3ba476 = new Set([..._0x17ba18, _0x48d208.id, ..._0x516913]);
      _0xbbab2a.setRowPinning(_0x15c442 => {
        if (_0x349103 === "bottom") {
          return {
            top: ((_0x15c442 == null ? undefined : _0x15c442.top) ?? []).filter(_0x37b535 => _0x3ba476 == null || !_0x3ba476.has(_0x37b535)),
            bottom: [...((_0x15c442 == null ? undefined : _0x15c442.bottom) ?? []).filter(_0x59940e => _0x3ba476 == null || !_0x3ba476.has(_0x59940e)), ...Array.from(_0x3ba476)]
          };
        } else if (_0x349103 === "top") {
          return {
            top: [...((_0x15c442 == null ? undefined : _0x15c442.top) ?? []).filter(_0x1fbac2 => _0x3ba476 == null || !_0x3ba476.has(_0x1fbac2)), ...Array.from(_0x3ba476)],
            bottom: ((_0x15c442 == null ? undefined : _0x15c442.bottom) ?? []).filter(_0x417c15 => _0x3ba476 == null || !_0x3ba476.has(_0x417c15))
          };
        } else {
          return {
            top: ((_0x15c442 == null ? undefined : _0x15c442.top) ?? []).filter(_0x578192 => _0x3ba476 == null || !_0x3ba476.has(_0x578192)),
            bottom: ((_0x15c442 == null ? undefined : _0x15c442.bottom) ?? []).filter(_0x27bd9a => _0x3ba476 == null || !_0x3ba476.has(_0x27bd9a))
          };
        }
      });
    };
    _0x48d208.getCanPin = () => {
      var _0x5d0197;
      const {
        enableRowPinning: _0x168c44,
        enablePinning: _0x18ed21
      } = _0xbbab2a.options;
      if (typeof _0x168c44 == "function") {
        return _0x168c44(_0x48d208);
      } else {
        return (_0x5d0197 = _0x168c44 ?? _0x18ed21) == null || _0x5d0197;
      }
    };
    _0x48d208.getIsPinned = () => {
      const _0x47d303 = [_0x48d208.id];
      const {
        top: _0x3be52d,
        bottom: _0x131035
      } = _0xbbab2a.getState().rowPinning;
      const _0x16888b = _0x47d303.some(_0xbbb618 => _0x3be52d == null ? undefined : _0x3be52d.includes(_0xbbb618));
      const _0x1870f1 = _0x47d303.some(_0x5c3b6b => _0x131035 == null ? undefined : _0x131035.includes(_0x5c3b6b));
      if (_0x16888b) {
        return "top";
      } else {
        return !!_0x1870f1 && "bottom";
      }
    };
    _0x48d208.getPinnedIndex = () => {
      var _0xc2a18e;
      const _0x43c474 = _0x48d208.getIsPinned();
      if (!_0x43c474) {
        return -1;
      }
      const _0xa57856 = (_0xc2a18e = _0x43c474 === "top" ? _0xbbab2a.getTopRows() : _0xbbab2a.getBottomRows()) == null ? undefined : _0xc2a18e.map(_0x46637b => {
        let {
          id: _0x132429
        } = _0x46637b;
        return _0x132429;
      });
      return (_0xa57856 == null ? undefined : _0xa57856.indexOf(_0x48d208.id)) ?? -1;
    };
  },
  createTable: _0x231a63 => {
    _0x231a63.setRowPinning = _0x501d3e => _0x231a63.options.onRowPinningChange == null ? undefined : _0x231a63.options.onRowPinningChange(_0x501d3e);
    _0x231a63.resetRowPinning = _0x54a8e9 => {
      var _0x3bb80e;
      return _0x231a63.setRowPinning(_0x54a8e9 ? {
        top: [],
        bottom: []
      } : ((_0x3bb80e = _0x231a63.initialState) == null ? undefined : _0x3bb80e.rowPinning) ?? {
        top: [],
        bottom: []
      });
    };
    _0x231a63.getIsSomeRowsPinned = _0xbb1c5a => {
      var _0x4180dd;
      const _0xc60aa6 = _0x231a63.getState().rowPinning;
      var _0x17676b;
      var _0x440889;
      if (_0xbb1c5a) {
        return Boolean((_0x4180dd = _0xc60aa6[_0xbb1c5a]) == null ? undefined : _0x4180dd.length);
      } else {
        return Boolean(((_0x17676b = _0xc60aa6.top) == null ? undefined : _0x17676b.length) || ((_0x440889 = _0xc60aa6.bottom) == null ? undefined : _0x440889.length));
      }
    };
    _0x231a63._getPinnedRows = (_0x87bb06, _0x1674d1, _0x2dd0b0) => {
      var _0x5ccfc0;
      return ((_0x5ccfc0 = _0x231a63.options.keepPinnedRows) == null || _0x5ccfc0 ? (_0x1674d1 ?? []).map(_0x207248 => {
        const _0xd9b997 = _0x231a63.getRow(_0x207248, true);
        if (_0xd9b997.getIsAllParentsExpanded()) {
          return _0xd9b997;
        } else {
          return null;
        }
      }) : (_0x1674d1 ?? []).map(_0x1451f0 => _0x87bb06.find(_0x3af0ce => _0x3af0ce.id === _0x1451f0))).filter(Boolean).map(_0x4e985a => ({
        ..._0x4e985a,
        position: _0x2dd0b0
      }));
    };
    _0x231a63.getTopRows = o(() => [_0x231a63.getRowModel().rows, _0x231a63.getState().rowPinning.top], (_0x58bbef, _0x12a4f6) => _0x231a63._getPinnedRows(_0x58bbef, _0x12a4f6, "top"), i(_0x231a63.options, "debugRows"));
    _0x231a63.getBottomRows = o(() => [_0x231a63.getRowModel().rows, _0x231a63.getState().rowPinning.bottom], (_0x5a164b, _0x4c564c) => _0x231a63._getPinnedRows(_0x5a164b, _0x4c564c, "bottom"), i(_0x231a63.options, "debugRows"));
    _0x231a63.getCenterRows = o(() => [_0x231a63.getRowModel().rows, _0x231a63.getState().rowPinning.top, _0x231a63.getState().rowPinning.bottom], (_0x1682ea, _0x205c39, _0x5e1c42) => {
      const _0x1a027b = new Set([...(_0x205c39 ?? []), ...(_0x5e1c42 ?? [])]);
      return _0x1682ea.filter(_0x5a7955 => !_0x1a027b.has(_0x5a7955.id));
    }, i(_0x231a63.options, "debugRows"));
  }
}, A, y];
function U(_0x50e35b) {
  const _0x1f1dd2 = [...N, ...(_0x50e35b._features ?? [])];
  let _0x153a0d = {
    _features: _0x1f1dd2
  };
  const _0x15553d = _0x153a0d._features.reduce((_0x273f52, _0x2252e1) => Object.assign(_0x273f52, _0x2252e1.getDefaultOptions == null ? undefined : _0x2252e1.getDefaultOptions(_0x153a0d)), {});
  let _0x707054 = {
    ...(_0x50e35b.initialState ?? {})
  };
  _0x153a0d._features.forEach(_0x4e6f6d => {
    _0x707054 = (_0x4e6f6d.getInitialState == null ? undefined : _0x4e6f6d.getInitialState(_0x707054)) ?? _0x707054;
  });
  const _0x1390f1 = [];
  let _0x552833 = false;
  const _0x14fd47 = {
    _features: _0x1f1dd2,
    options: {
      ..._0x15553d,
      ..._0x50e35b
    },
    initialState: _0x707054,
    _queue: _0x5290b3 => {
      _0x1390f1.push(_0x5290b3);
      if (!_0x552833) {
        _0x552833 = true;
        Promise.resolve().then(() => {
          while (_0x1390f1.length) {
            _0x1390f1.shift()();
          }
          _0x552833 = false;
        }).catch(_0x8a4fd4 => setTimeout(() => {
          throw _0x8a4fd4;
        }));
      }
    },
    reset: () => {
      _0x153a0d.setState(_0x153a0d.initialState);
    },
    setOptions: _0x42714b => {
      const _0x1ffff6 = t(_0x42714b, _0x153a0d.options);
      var _0x3b82db;
      _0x3b82db = _0x1ffff6;
      _0x153a0d.options = _0x153a0d.options.mergeOptions ? _0x153a0d.options.mergeOptions(_0x15553d, _0x3b82db) : {
        ..._0x15553d,
        ..._0x3b82db
      };
    },
    getState: () => _0x153a0d.options.state,
    setState: _0x4a3e15 => {
      if (_0x153a0d.options.onStateChange != null) {
        _0x153a0d.options.onStateChange(_0x4a3e15);
      }
    },
    _getRowId: (_0x669eda, _0x409ba7, _0x75b14) => {
      return (_0x153a0d.options.getRowId == null ? undefined : _0x153a0d.options.getRowId(_0x669eda, _0x409ba7, _0x75b14)) ?? "" + (_0x75b14 ? [_0x75b14.id, _0x409ba7].join(".") : _0x409ba7);
    },
    getCoreRowModel: () => {
      _0x153a0d._getCoreRowModel ||= _0x153a0d.options.getCoreRowModel(_0x153a0d);
      return _0x153a0d._getCoreRowModel();
    },
    getRowModel: () => _0x153a0d.getPaginationRowModel(),
    getRow: (_0x105500, _0x3af694) => {
      let _0x59b8d3 = (_0x3af694 ? _0x153a0d.getPrePaginationRowModel() : _0x153a0d.getRowModel()).rowsById[_0x105500];
      if (!_0x59b8d3 && (_0x59b8d3 = _0x153a0d.getCoreRowModel().rowsById[_0x105500], !_0x59b8d3)) {
        throw new Error();
      }
      return _0x59b8d3;
    },
    _getDefaultColumnDef: o(() => [_0x153a0d.options.defaultColumn], _0x583323 => {
      _0x583323 = _0x583323 ?? {};
      return {
        header: _0x54a496 => {
          const _0x35239c = _0x54a496.header.column.columnDef;
          if (_0x35239c.accessorKey) {
            return _0x35239c.accessorKey;
          } else if (_0x35239c.accessorFn) {
            return _0x35239c.id;
          } else {
            return null;
          }
        },
        cell: _0x15a716 => {
          var _0x5308db;
          return ((_0x5308db = _0x15a716.renderValue()) == null || _0x5308db.toString == null ? undefined : _0x5308db.toString()) ?? null;
        },
        ..._0x153a0d._features.reduce((_0xc5a46b, _0x4abe03) => Object.assign(_0xc5a46b, _0x4abe03.getDefaultColumnDef == null ? undefined : _0x4abe03.getDefaultColumnDef()), {}),
        ..._0x583323
      };
    }, i(_0x50e35b, "debugColumns")),
    _getColumnDefs: () => _0x153a0d.options.columns,
    getAllColumns: o(() => [_0x153a0d._getColumnDefs()], _0x6775e3 => {
      const _0xf6e08f = function (_0x56b342, _0x234dc7, _0x1e2042 = 0) {
        return _0x56b342.map(_0xa670d2 => {
          const _0x5a2847 = function (_0x509dcd, _0x44c5dd, _0x57f7d3, _0x4e3844) {
            const _0x5cbc2f = {
              ..._0x509dcd._getDefaultColumnDef(),
              ..._0x44c5dd
            };
            const _0x29f2f7 = _0x5cbc2f.accessorKey;
            let _0x32f938;
            let _0xa0715c = _0x5cbc2f.id ?? (_0x29f2f7 ? typeof String.prototype.replaceAll == "function" ? _0x29f2f7.replaceAll(".", "_") : _0x29f2f7.replace(/\./g, "_") : undefined) ?? (typeof _0x5cbc2f.header == "string" ? _0x5cbc2f.header : undefined);
            if (_0x5cbc2f.accessorFn) {
              _0x32f938 = _0x5cbc2f.accessorFn;
            } else if (_0x29f2f7) {
              _0x32f938 = _0x29f2f7.includes(".") ? _0x282a17 => {
                let _0x125b7f = _0x282a17;
                for (const _0x176de4 of _0x29f2f7.split(".")) {
                  var _0x31c58b;
                  _0x125b7f = (_0x31c58b = _0x125b7f) == null ? undefined : _0x31c58b[_0x176de4];
                }
                return _0x125b7f;
              } : _0x5b9d62 => _0x5b9d62[_0x5cbc2f.accessorKey];
            }
            if (!_0xa0715c) {
              throw new Error();
            }
            let _0x1cb96a = {
              id: "" + String(_0xa0715c),
              accessorFn: _0x32f938,
              parent: _0x4e3844,
              depth: _0x57f7d3,
              columnDef: _0x5cbc2f,
              columns: [],
              getFlatColumns: o(() => [true], () => {
                var _0xd79dbf;
                return [_0x1cb96a, ...((_0xd79dbf = _0x1cb96a.columns) == null ? undefined : _0xd79dbf.flatMap(_0x471779 => _0x471779.getFlatColumns()))];
              }, i(_0x509dcd.options, "debugColumns")),
              getLeafColumns: o(() => [_0x509dcd._getOrderColumnsFn()], _0x49ab3f => {
                var _0x23f548;
                if ((_0x23f548 = _0x1cb96a.columns) != null && _0x23f548.length) {
                  return _0x49ab3f(_0x1cb96a.columns.flatMap(_0x1175bb => _0x1175bb.getLeafColumns()));
                } else {
                  return [_0x1cb96a];
                }
              }, i(_0x509dcd.options, "debugColumns"))
            };
            for (const _0x5213b5 of _0x509dcd._features) {
              if (_0x5213b5.createColumn != null) {
                _0x5213b5.createColumn(_0x1cb96a, _0x509dcd);
              }
            }
            return _0x1cb96a;
          }(_0x153a0d, _0xa670d2, _0x1e2042, _0x234dc7);
          const _0x2ea367 = _0xa670d2;
          _0x5a2847.columns = _0x2ea367.columns ? _0xf6e08f(_0x2ea367.columns, _0x5a2847, _0x1e2042 + 1) : [];
          return _0x5a2847;
        });
      };
      return _0xf6e08f(_0x6775e3);
    }, i(_0x50e35b, "debugColumns")),
    getAllFlatColumns: o(() => [_0x153a0d.getAllColumns()], _0x3063df => _0x3063df.flatMap(_0x90337b => _0x90337b.getFlatColumns()), i(_0x50e35b, "debugColumns")),
    _getAllFlatColumnsById: o(() => [_0x153a0d.getAllFlatColumns()], _0x2a3879 => _0x2a3879.reduce((_0x2ad40f, _0x494fcc) => {
      _0x2ad40f[_0x494fcc.id] = _0x494fcc;
      return _0x2ad40f;
    }, {}), i(_0x50e35b, "debugColumns")),
    getAllLeafColumns: o(() => [_0x153a0d.getAllColumns(), _0x153a0d._getOrderColumnsFn()], (_0x190366, _0x5e9f9b) => _0x5e9f9b(_0x190366.flatMap(_0xc79bae => _0xc79bae.getLeafColumns())), i(_0x50e35b, "debugColumns")),
    getColumn: _0x15d600 => _0x153a0d._getAllFlatColumnsById()[_0x15d600]
  };
  Object.assign(_0x153a0d, _0x14fd47);
  for (let _0x157a51 = 0; _0x157a51 < _0x153a0d._features.length; _0x157a51++) {
    const _0x28e9f5 = _0x153a0d._features[_0x157a51];
    if (_0x28e9f5 != null && _0x28e9f5.createTable != null) {
      _0x28e9f5.createTable(_0x153a0d);
    }
  }
  return _0x153a0d;
}
function $() {
  return _0x2a67e4 => o(() => [_0x2a67e4.options.data], _0x2c6bf7 => {
    const _0x573f16 = {
      rows: [],
      flatRows: [],
      rowsById: {}
    };
    const _0x4c8a68 = function (_0x213098, _0x2cfc25 = 0, _0x53960d) {
      const _0x5ea5a8 = [];
      for (let _0x2e5a66 = 0; _0x2e5a66 < _0x213098.length; _0x2e5a66++) {
        const _0x19c330 = g(_0x2a67e4, _0x2a67e4._getRowId(_0x213098[_0x2e5a66], _0x2e5a66, _0x53960d), _0x213098[_0x2e5a66], _0x2e5a66, _0x2cfc25, 0, _0x53960d == null ? undefined : _0x53960d.id);
        var _0xb9cf1f;
        _0x573f16.flatRows.push(_0x19c330);
        _0x573f16.rowsById[_0x19c330.id] = _0x19c330;
        _0x5ea5a8.push(_0x19c330);
        if (_0x2a67e4.options.getSubRows) {
          _0x19c330.originalSubRows = _0x2a67e4.options.getSubRows(_0x213098[_0x2e5a66], _0x2e5a66);
          if ((_0xb9cf1f = _0x19c330.originalSubRows) != null && _0xb9cf1f.length) {
            _0x19c330.subRows = _0x4c8a68(_0x19c330.originalSubRows, _0x2cfc25 + 1, _0x19c330);
          }
        }
      }
      return _0x5ea5a8;
    };
    _0x573f16.rows = _0x4c8a68(_0x2c6bf7);
    return _0x573f16;
  }, i(_0x2a67e4.options, "debugTable", 0, () => _0x2a67e4._autoResetPageIndex()));
}
function X(_0x5ef7, _0x285746, _0x44db75) {
  if (_0x44db75.options.filterFromLeafRows) {
    return function (_0x13bc71, _0x52e586, _0x5157c7) {
      const _0x24b520 = [];
      const _0x4cccdd = {};
      const _0x1aae31 = _0x5157c7.options.maxLeafRowFilterDepth ?? 100;
      const _0x2157f3 = function (_0x4b768a, _0x302c0 = 0) {
        const _0x25a0ff = [];
        for (let _0x4a667d = 0; _0x4a667d < _0x4b768a.length; _0x4a667d++) {
          var _0x3ed8a2;
          let _0x52d9ec = _0x4b768a[_0x4a667d];
          const _0x2a036c = g(_0x5157c7, _0x52d9ec.id, _0x52d9ec.original, _0x52d9ec.index, _0x52d9ec.depth, 0, _0x52d9ec.parentId);
          _0x2a036c.columnFilters = _0x52d9ec.columnFilters;
          if ((_0x3ed8a2 = _0x52d9ec.subRows) != null && _0x3ed8a2.length && _0x302c0 < _0x1aae31) {
            _0x2a036c.subRows = _0x2157f3(_0x52d9ec.subRows, _0x302c0 + 1);
            _0x52d9ec = _0x2a036c;
            if (_0x52e586(_0x52d9ec) && !_0x2a036c.subRows.length) {
              _0x25a0ff.push(_0x52d9ec);
              _0x4cccdd[_0x52d9ec.id] = _0x52d9ec;
              _0x24b520.push(_0x52d9ec);
              continue;
            }
            if (_0x52e586(_0x52d9ec) || _0x2a036c.subRows.length) {
              _0x25a0ff.push(_0x52d9ec);
              _0x4cccdd[_0x52d9ec.id] = _0x52d9ec;
              _0x24b520.push(_0x52d9ec);
              continue;
            }
          } else {
            _0x52d9ec = _0x2a036c;
            if (_0x52e586(_0x52d9ec)) {
              _0x25a0ff.push(_0x52d9ec);
              _0x4cccdd[_0x52d9ec.id] = _0x52d9ec;
              _0x24b520.push(_0x52d9ec);
            }
          }
        }
        return _0x25a0ff;
      };
      return {
        rows: _0x2157f3(_0x13bc71),
        flatRows: _0x24b520,
        rowsById: _0x4cccdd
      };
    }(_0x5ef7, _0x285746, _0x44db75);
  } else {
    return function (_0x147d5f, _0x55e26a, _0x716112) {
      const _0x51cb65 = [];
      const _0x3082e1 = {};
      const _0x3c6551 = _0x716112.options.maxLeafRowFilterDepth ?? 100;
      const _0x292d8a = function (_0x1957b7, _0x413ad3 = 0) {
        const _0x2616d1 = [];
        for (let _0x8bf469 = 0; _0x8bf469 < _0x1957b7.length; _0x8bf469++) {
          let _0x3608ea = _0x1957b7[_0x8bf469];
          if (_0x55e26a(_0x3608ea)) {
            var _0x548ee1;
            if ((_0x548ee1 = _0x3608ea.subRows) != null && _0x548ee1.length && _0x413ad3 < _0x3c6551) {
              const _0xda5f43 = g(_0x716112, _0x3608ea.id, _0x3608ea.original, _0x3608ea.index, _0x3608ea.depth, 0, _0x3608ea.parentId);
              _0xda5f43.subRows = _0x292d8a(_0x3608ea.subRows, _0x413ad3 + 1);
              _0x3608ea = _0xda5f43;
            }
            _0x2616d1.push(_0x3608ea);
            _0x51cb65.push(_0x3608ea);
            _0x3082e1[_0x3608ea.id] = _0x3608ea;
          }
        }
        return _0x2616d1;
      };
      return {
        rows: _0x292d8a(_0x147d5f),
        flatRows: _0x51cb65,
        rowsById: _0x3082e1
      };
    }(_0x5ef7, _0x285746, _0x44db75);
  }
}
function K() {
  return _0x13b9ee => o(() => [_0x13b9ee.getPreFilteredRowModel(), _0x13b9ee.getState().columnFilters, _0x13b9ee.getState().globalFilter], (_0x370ae1, _0x48c7f3, _0x389d49) => {
    if (!_0x370ae1.rows.length || (_0x48c7f3 == null || !_0x48c7f3.length) && !_0x389d49) {
      for (let _0x100397 = 0; _0x100397 < _0x370ae1.flatRows.length; _0x100397++) {
        _0x370ae1.flatRows[_0x100397].columnFilters = {};
        _0x370ae1.flatRows[_0x100397].columnFiltersMeta = {};
      }
      return _0x370ae1;
    }
    const _0x5be5f0 = [];
    const _0x2a6029 = [];
    (_0x48c7f3 ?? []).forEach(_0x5aaaec => {
      const _0x4af535 = _0x13b9ee.getColumn(_0x5aaaec.id);
      if (!_0x4af535) {
        return;
      }
      const _0xc7c736 = _0x4af535.getFilterFn();
      if (_0xc7c736) {
        _0x5be5f0.push({
          id: _0x5aaaec.id,
          filterFn: _0xc7c736,
          resolvedValue: (_0xc7c736.resolveFilterValue == null ? undefined : _0xc7c736.resolveFilterValue(_0x5aaaec.value)) ?? _0x5aaaec.value
        });
      }
    });
    const _0x4dd306 = (_0x48c7f3 ?? []).map(_0x4e17e6 => _0x4e17e6.id);
    const _0x4ff192 = _0x13b9ee.getGlobalFilterFn();
    const _0x5a8029 = _0x13b9ee.getAllLeafColumns().filter(_0xa69a81 => _0xa69a81.getCanGlobalFilter());
    let _0x22b4d1;
    let _0x36c5d5;
    if (_0x389d49 && _0x4ff192 && _0x5a8029.length) {
      _0x4dd306.push("__global__");
      _0x5a8029.forEach(_0x13f64b => {
        _0x2a6029.push({
          id: _0x13f64b.id,
          filterFn: _0x4ff192,
          resolvedValue: (_0x4ff192.resolveFilterValue == null ? undefined : _0x4ff192.resolveFilterValue(_0x389d49)) ?? _0x389d49
        });
      });
    }
    for (let _0x3b9a67 = 0; _0x3b9a67 < _0x370ae1.flatRows.length; _0x3b9a67++) {
      const _0x464d4a = _0x370ae1.flatRows[_0x3b9a67];
      _0x464d4a.columnFilters = {};
      if (_0x5be5f0.length) {
        for (let _0x3d842a = 0; _0x3d842a < _0x5be5f0.length; _0x3d842a++) {
          _0x22b4d1 = _0x5be5f0[_0x3d842a];
          const _0x443137 = _0x22b4d1.id;
          _0x464d4a.columnFilters[_0x443137] = _0x22b4d1.filterFn(_0x464d4a, _0x443137, _0x22b4d1.resolvedValue, _0x3aa1f1 => {
            _0x464d4a.columnFiltersMeta[_0x443137] = _0x3aa1f1;
          });
        }
      }
      if (_0x2a6029.length) {
        for (let _0x34a847 = 0; _0x34a847 < _0x2a6029.length; _0x34a847++) {
          _0x36c5d5 = _0x2a6029[_0x34a847];
          const _0x36991c = _0x36c5d5.id;
          if (_0x36c5d5.filterFn(_0x464d4a, _0x36991c, _0x36c5d5.resolvedValue, _0x3bfdb6 => {
            _0x464d4a.columnFiltersMeta[_0x36991c] = _0x3bfdb6;
          })) {
            _0x464d4a.columnFilters.__global__ = true;
            break;
          }
        }
        if (_0x464d4a.columnFilters.__global__ !== true) {
          _0x464d4a.columnFilters.__global__ = false;
        }
      }
    }
    return X(_0x370ae1.rows, _0x4bec95 => {
      for (let _0x3ded27 = 0; _0x3ded27 < _0x4dd306.length; _0x3ded27++) {
        if (_0x4bec95.columnFilters[_0x4dd306[_0x3ded27]] === false) {
          return false;
        }
      }
      return true;
    }, _0x13b9ee);
  }, i(_0x13b9ee.options, "debugTable", 0, () => _0x13b9ee._autoResetPageIndex()));
}
function J(_0x2c3699) {
  return _0x2605a8 => o(() => [_0x2605a8.getState().pagination, _0x2605a8.getPrePaginationRowModel(), _0x2605a8.options.paginateExpandedRows ? undefined : _0x2605a8.getState().expanded], (_0x490347, _0x202103) => {
    if (!_0x202103.rows.length) {
      return _0x202103;
    }
    const {
      pageSize: _0x230795,
      pageIndex: _0x441416
    } = _0x490347;
    let {
      rows: _0x179892,
      flatRows: _0x3db969,
      rowsById: _0x523d2a
    } = _0x202103;
    const _0x5a4dc3 = _0x230795 * _0x441416;
    const _0x1b25cb = _0x5a4dc3 + _0x230795;
    let _0x55b690;
    _0x179892 = _0x179892.slice(_0x5a4dc3, _0x1b25cb);
    _0x55b690 = _0x2605a8.options.paginateExpandedRows ? {
      rows: _0x179892,
      flatRows: _0x3db969,
      rowsById: _0x523d2a
    } : function (_0xd6dba4) {
      const _0x5ef019 = [];
      const _0x2eb00c = _0x2f7111 => {
        var _0x5e8fa6;
        _0x5ef019.push(_0x2f7111);
        if ((_0x5e8fa6 = _0x2f7111.subRows) != null && _0x5e8fa6.length && _0x2f7111.getIsExpanded()) {
          _0x2f7111.subRows.forEach(_0x2eb00c);
        }
      };
      _0xd6dba4.rows.forEach(_0x2eb00c);
      return {
        rows: _0x5ef019,
        flatRows: _0xd6dba4.flatRows,
        rowsById: _0xd6dba4.rowsById
      };
    }({
      rows: _0x179892,
      flatRows: _0x3db969,
      rowsById: _0x523d2a
    });
    _0x55b690.flatRows = [];
    const _0x20eee5 = _0x1610f8 => {
      _0x55b690.flatRows.push(_0x1610f8);
      if (_0x1610f8.subRows.length) {
        _0x1610f8.subRows.forEach(_0x20eee5);
      }
    };
    _0x55b690.rows.forEach(_0x20eee5);
    return _0x55b690;
  }, i(_0x2605a8.options, "debugTable"));
}
function Q() {
  return _0x329089 => o(() => [_0x329089.getState().sorting, _0x329089.getPreSortedRowModel()], (_0x35e2a8, _0x32c4b5) => {
    if (!_0x32c4b5.rows.length || _0x35e2a8 == null || !_0x35e2a8.length) {
      return _0x32c4b5;
    }
    const _0x39b32c = _0x329089.getState().sorting;
    const _0x1e368c = [];
    const _0x1df7d1 = _0x39b32c.filter(_0x252d9c => {
      var _0x235ad4;
      if ((_0x235ad4 = _0x329089.getColumn(_0x252d9c.id)) == null) {
        return undefined;
      } else {
        return _0x235ad4.getCanSort();
      }
    });
    const _0x15ee7c = {};
    _0x1df7d1.forEach(_0x19da9f => {
      const _0x5ed513 = _0x329089.getColumn(_0x19da9f.id);
      if (_0x5ed513) {
        _0x15ee7c[_0x19da9f.id] = {
          sortUndefined: _0x5ed513.columnDef.sortUndefined,
          invertSorting: _0x5ed513.columnDef.invertSorting,
          sortingFn: _0x5ed513.getSortingFn()
        };
      }
    });
    const _0x3be827 = _0x127f15 => {
      const _0x11e7ca = _0x127f15.map(_0x4dfd53 => ({
        ..._0x4dfd53
      }));
      _0x11e7ca.sort((_0x1b3cd2, _0x1861ee) => {
        for (let _0x467a80 = 0; _0x467a80 < _0x1df7d1.length; _0x467a80 += 1) {
          var _0x190159;
          const _0x18e179 = _0x1df7d1[_0x467a80];
          const _0x152f65 = _0x15ee7c[_0x18e179.id];
          const _0x201469 = _0x152f65.sortUndefined;
          const _0x1af855 = (_0x190159 = _0x18e179 == null ? undefined : _0x18e179.desc) != null && _0x190159;
          let _0x1d0d8f = 0;
          if (_0x201469) {
            const _0x4431f0 = _0x1b3cd2.getValue(_0x18e179.id) === undefined;
            const _0x43fdfd = _0x1861ee.getValue(_0x18e179.id) === undefined;
            if (_0x4431f0 || _0x43fdfd) {
              if (_0x201469 === "first") {
                if (_0x4431f0) {
                  return -1;
                } else {
                  return 1;
                }
              }
              if (_0x201469 === "last") {
                if (_0x4431f0) {
                  return 1;
                } else {
                  return -1;
                }
              }
              _0x1d0d8f = _0x4431f0 && _0x43fdfd ? 0 : _0x4431f0 ? _0x201469 : -_0x201469;
            }
          }
          if (_0x1d0d8f === 0) {
            _0x1d0d8f = _0x152f65.sortingFn(_0x1b3cd2, _0x1861ee, _0x18e179.id);
          }
          if (_0x1d0d8f !== 0) {
            if (_0x1af855) {
              _0x1d0d8f *= -1;
            }
            if (_0x152f65.invertSorting) {
              _0x1d0d8f *= -1;
            }
            return _0x1d0d8f;
          }
        }
        return _0x1b3cd2.index - _0x1861ee.index;
      });
      _0x11e7ca.forEach(_0x547ee8 => {
        var _0x39f7b7;
        _0x1e368c.push(_0x547ee8);
        if ((_0x39f7b7 = _0x547ee8.subRows) != null && _0x39f7b7.length) {
          _0x547ee8.subRows = _0x3be827(_0x547ee8.subRows);
        }
      });
      return _0x11e7ca;
    };
    return {
      rows: _0x3be827(_0x32c4b5.rows),
      flatRows: _0x1e368c,
      rowsById: _0x32c4b5.rowsById
    };
  }, i(_0x329089.options, "debugTable", 0, () => _0x329089._autoResetPageIndex()));
} /**
  * react-table
  *
  * Copyright (c) TanStack
  *
  * This source code is licensed under the MIT license found in the
  * LICENSE.md file in the root directory of this source tree.
  *
  * @license MIT
  */
function W(_0x3bf830, _0x13dda3) {
  if (_0x3bf830) {
    if (function (_0x1a26c7) {
      return typeof _0x1a26c7 == "function" && (() => {
        const _0x55d0e1 = Object.getPrototypeOf(_0x1a26c7);
        return _0x55d0e1.prototype && _0x55d0e1.prototype.isReactComponent;
      })();
    }(_0x3fe123 = _0x3bf830) || typeof _0x3fe123 == "function" || function (_0xd83668) {
      return typeof _0xd83668 == "object" && typeof _0xd83668.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(_0xd83668.$$typeof.description);
    }(_0x3fe123)) {
      return _0x28da8d.createElement(_0x3bf830, _0x13dda3);
    } else {
      return _0x3bf830;
    }
  } else {
    return null;
  }
  var _0x3fe123;
}
function Y(_0x36a5fe) {
  const _0x4c0f4c = {
    state: {},
    onStateChange: () => {},
    renderFallbackValue: null,
    ..._0x36a5fe
  };
  const [_0x45bf47] = _0x28da8d.useState(() => ({
    current: U(_0x4c0f4c)
  }));
  const [_0x10fbcd, _0x4e61e3] = _0x28da8d.useState(() => _0x45bf47.current.initialState);
  _0x45bf47.current.setOptions(_0x34c679 => ({
    ..._0x34c679,
    ..._0x36a5fe,
    state: {
      ..._0x10fbcd,
      ..._0x36a5fe.state
    },
    onStateChange: _0x256bd6 => {
      _0x4e61e3(_0x256bd6);
      if (_0x36a5fe.onStateChange != null) {
        _0x36a5fe.onStateChange(_0x256bd6);
      }
    }
  }));
  return _0x45bf47.current;
}
export { Q as a, $ as b, J as c, W as f, K as g, Y as u };