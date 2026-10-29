import { g as _0x1290e7, s, a, b as _0x43939a } from "./discovery-D38nftjH.js";
import { aa as _0x513ead } from "./index-cQfEKR1W.js";
function t(_0x14cef1, _0x5c982f) {
  const _0x1258ff = new Set(_0x14cef1.map(_0x4cfc73 => _0x4cfc73.id));
  const _0x1a6219 = _0x5c982f.filter(_0x2d82bb => !_0x1258ff.has(_0x2d82bb.id));
  return [..._0x14cef1, ..._0x1a6219];
}
let c = 0;
let i = 0;
let d = 0;
const n = _0x513ead((_0x2355d6, _0x4a3d86) => ({
  categories: [],
  categoriesLoaded: false,
  homeGuilds: [],
  searchResults: [],
  searchQuery: "",
  isSearchMode: false,
  selectedCategoryId: null,
  categoryResults: [],
  cursors: {},
  hasMoreMap: {},
  isLoading: false,
  isLoadingMore: false,
  searchLoading: false,
  hasInitiallyLoaded: false,
  featuredOfficial: null,
  featuredDeveloper: null,
  featuredLoaded: false,
  initialize: async () => {
    _0x2355d6({
      isLoading: true
    });
    const _0xf20178 = _0x4a3d86();
    const _0x4c1c0c = !_0xf20178.categoriesLoaded;
    const _0x4857a9 = !_0xf20178.featuredLoaded;
    try {
      const _0x1e9947 = _0x4c1c0c ? a().then(_0x4d7d0f => {
        const _0x20303d = function (_0x4798a2) {
          return [..._0x4798a2].map(_0x3e8806 => ({
            ..._0x3e8806,
            id: String(_0x3e8806.id)
          })).sort((_0x1b84e2, _0x140580) => (_0x1b84e2.sort_order ?? 0) - (_0x140580.sort_order ?? 0));
        }(Array.isArray(_0x4d7d0f) ? _0x4d7d0f : []);
        _0x2355d6({
          categories: _0x20303d,
          categoriesLoaded: true
        });
        return _0x20303d;
      }) : Promise.resolve(_0xf20178.categories);
      const _0x5f34a8 = _0x1290e7(null).then(_0x7979d0 => {
        _0x2355d6({
          homeGuilds: _0x7979d0.data ?? [],
          cursors: {
            ..._0x4a3d86().cursors,
            home: _0x7979d0.next_cursor ?? null
          },
          hasMoreMap: {
            ..._0x4a3d86().hasMoreMap,
            home: _0x7979d0.has_more ?? false
          },
          hasInitiallyLoaded: true
        });
      });
      const _0x18095d = _0x4857a9 ? _0x43939a().then(_0x25f9f8 => {
        _0x2355d6({
          featuredOfficial: _0x25f9f8.official,
          featuredDeveloper: _0x25f9f8.developer,
          featuredLoaded: true
        });
      }).catch(() => {
        _0x2355d6({
          featuredLoaded: true
        });
      }) : Promise.resolve();
      await Promise.all([_0x1e9947, _0x5f34a8, _0x18095d]);
    } finally {
      _0x2355d6({
        isLoading: false
      });
    }
  },
  setSearchQuery: _0x211e55 => {
    const _0x3704d4 = ++c;
    d++;
    _0x2355d6({
      searchQuery: _0x211e55,
      isLoadingMore: false
    });
    if (_0x211e55.length < 2) {
      _0x2355d6({
        isSearchMode: false,
        searchResults: [],
        searchLoading: false
      });
    } else {
      _0x2355d6({
        isSearchMode: true,
        searchLoading: true
      });
      s(_0x211e55).then(_0x661823 => {
        if (_0x3704d4 === c) {
          _0x2355d6({
            searchResults: _0x661823.data ?? [],
            cursors: {
              ..._0x4a3d86().cursors,
              search: _0x661823.next_cursor ?? null
            },
            hasMoreMap: {
              ..._0x4a3d86().hasMoreMap,
              search: _0x661823.has_more ?? false
            }
          });
        }
      }).catch(() => {}).finally(() => {
        if (_0x3704d4 === c) {
          _0x2355d6({
            searchLoading: false
          });
        }
      });
    }
  },
  clearSearch: () => {
    c++;
    d++;
    _0x2355d6({
      isLoadingMore: false,
      searchQuery: "",
      searchResults: [],
      isSearchMode: false,
      searchLoading: false,
      cursors: {
        ..._0x4a3d86().cursors,
        search: null
      },
      hasMoreMap: {
        ..._0x4a3d86().hasMoreMap,
        search: false
      }
    });
  },
  setSelectedCategory: _0x7ee7f8 => {
    const _0x41b03d = ++i;
    d++;
    _0x2355d6({
      selectedCategoryId: _0x7ee7f8,
      isLoadingMore: false
    });
    if (_0x7ee7f8 !== null) {
      _0x2355d6({
        isLoading: true
      });
      _0x1290e7(_0x7ee7f8).then(_0x53ddf1 => {
        if (_0x41b03d === i) {
          _0x2355d6({
            categoryResults: _0x53ddf1.data ?? [],
            cursors: {
              ..._0x4a3d86().cursors,
              category: _0x53ddf1.next_cursor ?? null
            },
            hasMoreMap: {
              ..._0x4a3d86().hasMoreMap,
              category: _0x53ddf1.has_more ?? false
            }
          });
        }
      }).catch(() => {}).finally(() => {
        if (_0x41b03d === i) {
          _0x2355d6({
            isLoading: false
          });
        }
      });
    } else {
      _0x2355d6({
        categoryResults: [],
        isLoading: false,
        cursors: {
          ..._0x4a3d86().cursors,
          category: null
        },
        hasMoreMap: {
          ..._0x4a3d86().hasMoreMap,
          category: false
        }
      });
    }
  },
  loadMore: async () => {
    const _0x110142 = _0x4a3d86();
    if (_0x110142.isLoadingMore || _0x110142.searchLoading || _0x110142.isLoading) {
      return;
    }
    let _0x476d9a;
    let _0x246637;
    let _0x23fcd4;
    if (_0x110142.isSearchMode) {
      _0x476d9a = "search";
      _0x23fcd4 = "search";
      const _0x49d1a2 = _0x110142.searchQuery;
      _0x246637 = _0x247f9d => s(_0x49d1a2, _0x247f9d);
    } else if (_0x110142.selectedCategoryId) {
      _0x476d9a = "category";
      _0x23fcd4 = "category";
      const _0x452ac3 = _0x110142.selectedCategoryId;
      _0x246637 = _0x19b91d => _0x1290e7(_0x452ac3, _0x19b91d);
    } else {
      _0x476d9a = "home";
      _0x23fcd4 = "home";
      _0x246637 = _0x2297af => _0x1290e7(null, _0x2297af);
    }
    const _0x1c1f52 = _0x110142.cursors[_0x476d9a];
    const _0x22eeb6 = _0x110142.hasMoreMap[_0x476d9a];
    if (!_0x1c1f52 || _0x22eeb6 === false) {
      return;
    }
    _0x2355d6({
      isLoadingMore: true
    });
    const _0x596915 = ++d;
    try {
      const _0x3adf81 = await _0x246637(_0x1c1f52);
      if (_0x596915 !== d) {
        return;
      }
      _0x2355d6({
        cursors: {
          ..._0x4a3d86().cursors,
          [_0x476d9a]: _0x3adf81.next_cursor ?? null
        },
        hasMoreMap: {
          ..._0x4a3d86().hasMoreMap,
          [_0x476d9a]: _0x3adf81.has_more ?? false
        }
      });
      _0x4a3d86().appendGuilds(_0x23fcd4, _0x3adf81.data ?? []);
    } finally {
      if (_0x596915 === d) {
        _0x2355d6({
          isLoadingMore: false
        });
      }
    }
  },
  appendGuilds: (_0x101492, _0x1afad9) => {
    _0x2355d6(_0x39b5ea => _0x101492 === "search" ? {
      searchResults: t(_0x39b5ea.searchResults, _0x1afad9)
    } : _0x101492 === "category" ? {
      categoryResults: t(_0x39b5ea.categoryResults, _0x1afad9)
    } : {
      homeGuilds: t(_0x39b5ea.homeGuilds, _0x1afad9)
    });
  }
}));
export { n as u };