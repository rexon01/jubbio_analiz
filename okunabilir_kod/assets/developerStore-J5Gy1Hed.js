import { d as _0x3be363, u as _0x22532e, c as _0x3081e9, g as _0x5cbf6a, a as _0x5bfab1 } from "./developer-DCtAQT29.js";
import { aa as _0x3b6ef2 } from "./index-cQfEKR1W.js";
const o = _0x3b6ef2(_0x502a6e => ({
  applications: [],
  currentApplication: null,
  pagination: null,
  isLoading: false,
  isLoadingApp: false,
  error: null,
  selectedAppId: null,
  fetchApplications: async (_0x354e6c = 1) => {
    _0x502a6e({
      isLoading: true,
      error: null
    });
    try {
      const _0x279457 = await _0x5bfab1(_0x354e6c);
      _0x502a6e({
        applications: _0x279457.applications,
        pagination: _0x279457.pagination,
        isLoading: false
      });
    } catch (_0x37a990) {
      _0x502a6e({
        isLoading: false,
        error: _0x37a990.message || "Uygulamalar yüklenirken bir hata oluştu"
      });
    }
  },
  fetchApplication: async _0x43e3bc => {
    _0x502a6e({
      isLoadingApp: true,
      error: null
    });
    try {
      const _0x1dc50e = await _0x5cbf6a(_0x43e3bc);
      _0x502a6e({
        currentApplication: _0x1dc50e,
        isLoadingApp: false
      });
      return _0x1dc50e;
    } catch (_0x20452b) {
      _0x502a6e({
        isLoadingApp: false,
        error: _0x20452b.message || "Uygulama yüklenirken bir hata oluştu"
      });
      throw _0x20452b;
    }
  },
  createApplication: async (_0x344aa7, _0x127edb = false) => {
    const _0x238e24 = await _0x3081e9(_0x344aa7, _0x127edb);
    _0x502a6e(_0x27adce => ({
      applications: [{
        id: _0x238e24.id,
        name: _0x238e24.name,
        avatar_url: _0x238e24.avatar_url,
        created_at: _0x238e24.created_at
      }, ..._0x27adce.applications],
      pagination: _0x27adce.pagination ? {
        ..._0x27adce.pagination,
        total: _0x27adce.pagination.total + 1
      } : null
    }));
    return _0x238e24;
  },
  updateApplication: async (_0x582bda, _0x537aed, _0x371e7a) => {
    const _0x1a19cf = await _0x22532e(_0x582bda, _0x537aed, _0x371e7a);
    const _0x31d868 = _0x1a19cf.application;
    _0x502a6e(_0x114ae0 => {
      const _0x349013 = _0x114ae0.currentApplication ? {
        ..._0x114ae0.currentApplication,
        ..._0x31d868
      } : _0x31d868;
      return {
        currentApplication: _0x349013,
        applications: _0x114ae0.applications.map(_0xa826fc => _0xa826fc.id === _0x582bda ? {
          ..._0xa826fc,
          name: _0x349013.name,
          avatar_url: _0x349013.avatar_url
        } : _0xa826fc)
      };
    });
    return _0x1a19cf.application;
  },
  deleteApplicationIcon: async _0x7653fd => {
    const _0xd22b67 = (await _0x3be363(_0x7653fd)).application;
    _0x502a6e(_0x58698b => ({
      currentApplication: _0xd22b67,
      applications: _0x58698b.applications.map(_0x3b0a4c => _0x3b0a4c.id === _0x7653fd ? {
        ..._0x3b0a4c,
        avatar_url: _0xd22b67.avatar_url
      } : _0x3b0a4c)
    }));
    return _0xd22b67;
  },
  removeApplication: _0x2e0114 => {
    _0x502a6e(_0x531051 => ({
      applications: _0x531051.applications.filter(_0x3c3a50 => _0x3c3a50.id !== _0x2e0114),
      currentApplication: _0x531051.currentApplication?.id === _0x2e0114 ? null : _0x531051.currentApplication,
      pagination: _0x531051.pagination ? {
        ..._0x531051.pagination,
        total: Math.max(0, _0x531051.pagination.total - 1)
      } : null
    }));
  },
  setSelectedApp: _0x5a96b3 => {
    _0x502a6e({
      selectedAppId: _0x5a96b3
    });
  },
  clearCurrentApplication: () => {
    _0x502a6e({
      currentApplication: null
    });
  }
}));
export { o as u };