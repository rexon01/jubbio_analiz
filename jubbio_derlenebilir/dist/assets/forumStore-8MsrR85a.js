import { aa as _0x1060cb, dQ as _0x5ef94b, dm as _0x473bb5, dR as _0x3fa645, bS as _0x26d7ba } from "./index-cQfEKR1W.js";
import { g as _0x52ec15, u as _0x26b70b, a as _0x3c3e7a, b as _0x51a8c4, s as _0x2e5a96, r as _0x4f60d2, c as _0x8a8cdb, v as _0x51f00d, m as _0x386843, d as _0x442f88, e as _0x46471d, f as _0x36601c, h as _0x25a6ea, i as _0x1adc4d, j as _0x2df0cf, k as _0x47c0b6, l as _0x350c48 } from "./forum-KIuo_CQJ.js";
const y = _0x1060cb()((_0x131791, _0x1e997a) => ({
  profiles: {},
  loading: {},
  fetchProfile: async (_0x5a02e3, _0x352287) => {
    if (!_0x1e997a().loading[_0x5a02e3]) {
      _0x131791(_0x348878 => ({
        loading: {
          ..._0x348878.loading,
          [_0x5a02e3]: true
        }
      }));
      try {
        const _0x4daaf4 = (await _0x5ef94b(_0x5a02e3, _0x352287)).server_profile;
        _0x131791(_0x4daaf4 ? _0x486071 => ({
          profiles: {
            ..._0x486071.profiles,
            [_0x5a02e3]: _0x4daaf4
          },
          loading: {
            ..._0x486071.loading,
            [_0x5a02e3]: false
          }
        }) : _0xfdceaf => {
          const {
            [_0x5a02e3]: _0x352dc3,
            ..._0x53127c
          } = _0xfdceaf.profiles;
          return {
            profiles: _0x53127c,
            loading: {
              ..._0xfdceaf.loading,
              [_0x5a02e3]: false
            }
          };
        });
      } catch {
        _0x131791(_0x4742ca => ({
          loading: {
            ..._0x4742ca.loading,
            [_0x5a02e3]: false
          }
        }));
      }
    }
  },
  setProfile: (_0x3d6a08, _0x2a83bb) => {
    _0x131791(_0x36d167 => ({
      profiles: {
        ..._0x36d167.profiles,
        [_0x3d6a08]: _0x2a83bb
      }
    }));
  },
  updateProfile: (_0x318996, _0x863b43) => {
    _0x131791(_0x4ef42b => {
      const _0x3bb5ce = _0x4ef42b.profiles[_0x318996];
      if (_0x3bb5ce) {
        return {
          profiles: {
            ..._0x4ef42b.profiles,
            [_0x318996]: {
              ..._0x3bb5ce,
              ..._0x863b43
            }
          }
        };
      } else {
        return _0x4ef42b;
      }
    });
  },
  removeProfile: _0x3b8e65 => {
    _0x131791(_0x568efb => {
      const {
        [_0x3b8e65]: _0x3327f9,
        ..._0x3d92fd
      } = _0x568efb.profiles;
      return {
        profiles: _0x3d92fd
      };
    });
  },
  getProfile: _0x20db0f => _0x1e997a().profiles[_0x20db0f],
  clear: () => _0x131791({
    profiles: {},
    loading: {}
  })
}));
const C = {
  fetchProfile: (_0x270f2f, _0x57e7ee) => y.getState().fetchProfile(_0x270f2f, _0x57e7ee),
  setProfile: (_0x1876f5, _0x50ab72) => y.getState().setProfile(_0x1876f5, _0x50ab72),
  updateProfile: (_0x4ff7b3, _0x466dc3) => y.getState().updateProfile(_0x4ff7b3, _0x466dc3),
  removeProfile: _0x149222 => y.getState().removeProfile(_0x149222),
  getProfile: _0x30658b => y.getState().getProfile(_0x30658b),
  clear: () => y.getState().clear()
};
const w = _0x1060cb()(_0x473bb5((_0x340217, _0x10c5c2) => ({
  drafts: {},
  _hasHydrated: false,
  getDraft: _0x17ad4b => _0x10c5c2().drafts[_0x17ad4b] || "",
  setDraft: (_0x50f24e, _0x145bf3) => {
    _0x340217(_0x54051a => {
      const _0x22b4d6 = {
        ..._0x54051a.drafts
      };
      if (_0x145bf3.trim()) {
        _0x22b4d6[_0x50f24e] = _0x145bf3;
      } else {
        delete _0x22b4d6[_0x50f24e];
      }
      const _0xc522ab = Object.keys(_0x22b4d6);
      if (_0xc522ab.length > 100) {
        delete _0x22b4d6[_0xc522ab[0]];
      }
      return {
        drafts: _0x22b4d6
      };
    });
  },
  clearDraft: _0x143574 => {
    _0x340217(_0x4999e7 => {
      const _0x5e3496 = {
        ..._0x4999e7.drafts
      };
      delete _0x5e3496[_0x143574];
      return {
        drafts: _0x5e3496
      };
    });
  },
  setHasHydrated: _0x28a789 => {
    _0x340217({
      _hasHydrated: _0x28a789
    });
  }
}), {
  name: "chat-drafts",
  onRehydrateStorage: () => _0x4ce666 => {
    _0x4ce666?.setHasHydrated(true);
  }
}));
const L = "forum_prefs_";
function F(_0xfb7433) {
  try {
    const _0x2c2ad9 = localStorage.getItem("" + L + _0xfb7433);
    if (_0x2c2ad9) {
      return JSON.parse(_0x2c2ad9);
    } else {
      return {};
    }
  } catch {
    return {};
  }
}
function M(_0x363882, _0x27e59a) {
  try {
    const _0x567ba0 = {
      ...F(_0x363882),
      ..._0x27e59a
    };
    localStorage.setItem("" + L + _0x363882, JSON.stringify(_0x567ba0));
  } catch {}
}
const I = new Map();
const T = _0x1060cb()(_0x3fa645((_0x1a842b, _0x2f548a) => ({
  channels: new Map(),
  getChannelState: _0x5976fc => _0x2f548a().channels.get(_0x5976fc) ?? {
    posts: [],
    totalPosts: 0,
    currentPage: 1,
    totalPages: 0,
    hasMore: false,
    isLoadingPosts: false,
    settings: null,
    isLoadingSettings: false,
    tags: [],
    isLoadingTags: false,
    activeSort: "latest_activity",
    activeLayout: "list",
    activeFilters: {
      tagIds: [],
      filterMode: "or"
    },
    activePost: null,
    isLoadingActivePost: false,
    subscribedPosts: [],
    subscribedPostsFetched: false,
    lastFetched: null
  },
  _updateChannel: (_0x40c4ad, _0x4f1efb) => {
    _0x1a842b(_0x2a91f9 => {
      const _0x40addf = _0x2a91f9.channels.get(_0x40c4ad) ?? {
        posts: [],
        totalPosts: 0,
        currentPage: 1,
        totalPages: 0,
        hasMore: false,
        isLoadingPosts: false,
        settings: null,
        isLoadingSettings: false,
        tags: [],
        isLoadingTags: false,
        activeSort: "latest_activity",
        activeLayout: "list",
        activeFilters: {
          tagIds: [],
          filterMode: "or"
        },
        activePost: null,
        isLoadingActivePost: false,
        subscribedPosts: [],
        subscribedPostsFetched: false,
        lastFetched: null
      };
      const _0x2f881a = {
        ..._0x40addf,
        posts: _0x40addf.posts ?? []
      };
      const _0x3b1af0 = _0x4f1efb(_0x2f881a);
      const _0x235ec7 = new Map(_0x2a91f9.channels);
      _0x235ec7.set(_0x40c4ad, {
        ..._0x2f881a,
        ..._0x3b1af0
      });
      return {
        channels: _0x235ec7
      };
    });
  },
  fetchPosts: async (_0x4edc9a, _0x1053db, _0x440a8e) => {
    const {
      _updateChannel: _0x5db011
    } = _0x2f548a();
    const _0x1e05e0 = (I.get(_0x1053db) ?? 0) + 1;
    I.set(_0x1053db, _0x1e05e0);
    _0x5db011(_0x1053db, () => ({
      isLoadingPosts: true
    }));
    try {
      const _0x23abd8 = _0x2f548a().getChannelState(_0x1053db);
      const _0x2a9cc2 = {
        page: _0x440a8e?.page ?? 1,
        limit: _0x440a8e?.limit ?? 20,
        sort: _0x440a8e?.sort ?? _0x23abd8.activeSort,
        status: _0x440a8e?.status ?? _0x23abd8.activeFilters.status,
        tag_ids: _0x440a8e?.tag_ids ?? (_0x23abd8.activeFilters.tagIds.length > 0 ? _0x23abd8.activeFilters.tagIds.join(",") : undefined),
        filter_mode: _0x440a8e?.filter_mode ?? _0x23abd8.activeFilters.filterMode,
        author_id: _0x440a8e?.author_id,
        q: _0x440a8e?.q ?? _0x23abd8.activeFilters.query,
        pinned: _0x440a8e?.pinned
      };
      const _0x2728a2 = Object.fromEntries(Object.entries(_0x2a9cc2).filter(([, _0x3f6525]) => _0x3f6525 !== undefined));
      const _0x2b7453 = await _0x350c48(_0x4edc9a, _0x1053db, _0x2728a2);
      if (I.get(_0x1053db) !== _0x1e05e0) {
        return;
      }
      _0x5db011(_0x1053db, () => ({
        posts: _0x2b7453.posts ?? [],
        totalPosts: _0x2b7453.total,
        currentPage: _0x2b7453.page,
        totalPages: _0x2b7453.total_pages,
        hasMore: _0x2b7453.has_more,
        isLoadingPosts: false,
        lastFetched: Date.now()
      }));
    } catch {
      if (I.get(_0x1053db) === _0x1e05e0) {
        _0x5db011(_0x1053db, () => ({
          isLoadingPosts: false
        }));
      }
    }
  },
  fetchNextPage: async (_0x27cd3c, _0x2170d4) => {
    const {
      _updateChannel: _0xb03c75,
      getChannelState: _0x2f0b15
    } = _0x2f548a();
    const _0x2ade0a = _0x2f0b15(_0x2170d4);
    if (_0x2ade0a.hasMore && !_0x2ade0a.isLoadingPosts) {
      _0xb03c75(_0x2170d4, () => ({
        isLoadingPosts: true
      }));
      try {
        const _0xdd573b = _0x2ade0a.currentPage + 1;
        const {
          activeFilters: _0x2fcb05,
          activeSort: _0x32d2c1
        } = _0x2ade0a;
        const _0x580e08 = {
          page: _0xdd573b,
          limit: 20,
          sort: _0x32d2c1,
          status: _0x2fcb05.status,
          tag_ids: _0x2fcb05.tagIds.length > 0 ? _0x2fcb05.tagIds.join(",") : undefined,
          filter_mode: _0x2fcb05.filterMode,
          author_id: _0x2fcb05.authorId,
          q: _0x2fcb05.query,
          pinned: _0x2fcb05.pinned
        };
        const _0x350836 = await _0x350c48(_0x27cd3c, _0x2170d4, _0x580e08);
        _0xb03c75(_0x2170d4, _0x7db5b0 => ({
          posts: [...(_0x7db5b0.posts ?? []), ...(_0x350836.posts ?? [])],
          totalPosts: _0x350836.total,
          currentPage: _0x350836.page,
          totalPages: _0x350836.total_pages,
          hasMore: _0x350836.has_more,
          isLoadingPosts: false
        }));
      } catch {
        _0xb03c75(_0x2170d4, () => ({
          isLoadingPosts: false
        }));
      }
    }
  },
  fetchPostDetail: async (_0x33df19, _0x3f0581, _0xe45cb0) => {
    const {
      _updateChannel: _0x143369
    } = _0x2f548a();
    _0x143369(_0x3f0581, () => ({
      isLoadingActivePost: true
    }));
    try {
      const _0x2b89e2 = await _0x8a8cdb(_0x33df19, _0x3f0581, _0xe45cb0);
      _0x143369(_0x3f0581, () => ({
        activePost: _0x2b89e2,
        isLoadingActivePost: false
      }));
    } catch {
      _0x143369(_0x3f0581, () => ({
        isLoadingActivePost: false
      }));
    }
  },
  fetchSubscribedPosts: async (_0x1271cc, _0x5dea0c) => {
    const {
      _updateChannel: _0x3974fa,
      getChannelState: _0x106642
    } = _0x2f548a();
    const _0x4f2414 = _0x106642(_0x5dea0c);
    if (!_0x4f2414.subscribedPostsFetched && !_0x4f2414._subscribedLoading) {
      _0x3974fa(_0x5dea0c, () => ({
        _subscribedLoading: true
      }));
      try {
        const _0x4e3b1a = await _0x47c0b6(_0x1271cc, _0x5dea0c);
        _0x3974fa(_0x5dea0c, () => ({
          subscribedPosts: _0x4e3b1a,
          subscribedPostsFetched: true,
          _subscribedLoading: false
        }));
      } catch {
        _0x3974fa(_0x5dea0c, () => ({
          subscribedPostsFetched: true,
          _subscribedLoading: false
        }));
      }
    }
  },
  createPost: async (_0xdc0756, _0x42d384, _0x193b9a) => {
    const _0x14b263 = await _0x2df0cf(_0xdc0756, _0x42d384, _0x193b9a);
    const {
      _updateChannel: _0x244e8d
    } = _0x2f548a();
    if (_0x14b263.tags && _0x14b263.tags.length > 0 && _0x14b263.tags[0].tag) {
      _0x14b263.tags = _0x14b263.tags.map(_0x1e4c85 => ({
        id: _0x1e4c85.tag?.id || _0x1e4c85.tag_id || _0x1e4c85.id,
        name: _0x1e4c85.tag?.name || _0x1e4c85.name,
        emoji: _0x1e4c85.tag?.emoji || _0x1e4c85.emoji,
        color: _0x1e4c85.tag?.color || _0x1e4c85.color
      }));
    }
    if (_0x14b263.score === undefined || _0x14b263.score === null) {
      _0x14b263.score = (_0x14b263.upvote_count || 0) - (_0x14b263.downvote_count || 0);
    }
    if (_0x14b263.user_vote === undefined) {
      _0x14b263.user_vote = null;
    }
    _0x244e8d(_0x42d384, _0x15bf1f => ({
      posts: [_0x14b263, ...(_0x15bf1f.posts ?? [])],
      totalPosts: _0x15bf1f.totalPosts + 1,
      subscribedPosts: _0x14b263.thread_channel_id && !_0x15bf1f.subscribedPosts.some(_0x190791 => _0x190791.post_id === _0x14b263.id) ? [..._0x15bf1f.subscribedPosts, {
        thread_channel_id: _0x14b263.thread_channel_id,
        post_id: _0x14b263.id,
        name: _0x14b263.title
      }] : _0x15bf1f.subscribedPosts
    }));
    return _0x14b263;
  },
  updatePost: async (_0x3b610d, _0x3c581f, _0x59193b, _0x20728f) => {
    const _0x470130 = await _0x1adc4d(_0x3b610d, _0x3c581f, _0x59193b, _0x20728f);
    const {
      _updateChannel: _0x33f5af
    } = _0x2f548a();
    _0x33f5af(_0x3c581f, _0x5842ff => ({
      posts: _0x5842ff.posts.map(_0x5ee385 => _0x5ee385.id === _0x59193b ? _0x470130 : _0x5ee385),
      activePost: _0x5842ff.activePost?.id === _0x59193b ? _0x470130 : _0x5842ff.activePost,
      subscribedPosts: _0x5842ff.subscribedPosts.map(_0x12bb15 => _0x12bb15.post_id === _0x59193b ? {
        ..._0x12bb15,
        name: _0x470130.title
      } : _0x12bb15)
    }));
    return _0x470130;
  },
  deletePost: async (_0x4e2742, _0x206754, _0x34230d) => {
    await _0x25a6ea(_0x4e2742, _0x206754, _0x34230d);
    const {
      _updateChannel: _0x43feee
    } = _0x2f548a();
    _0x43feee(_0x206754, _0x56860c => ({
      posts: _0x56860c.posts.filter(_0x2cd0c7 => _0x2cd0c7.id !== _0x34230d),
      totalPosts: _0x56860c.totalPosts - 1,
      activePost: _0x56860c.activePost?.id === _0x34230d ? null : _0x56860c.activePost,
      subscribedPosts: _0x56860c.subscribedPosts.filter(_0xcbf6c8 => _0xcbf6c8.post_id !== _0x34230d)
    }));
  },
  updatePostStatus: async (_0x1534f5, _0xbda5a6, _0x3e9db4, _0x56e027) => {
    await _0x36601c(_0x1534f5, _0xbda5a6, _0x3e9db4, _0x56e027);
    const {
      _updateChannel: _0x2dec94
    } = _0x2f548a();
    _0x2dec94(_0xbda5a6, _0x599c36 => ({
      posts: _0x599c36.posts.map(_0x145626 => _0x145626.id === _0x3e9db4 ? {
        ..._0x145626,
        status: _0x56e027
      } : _0x145626),
      activePost: _0x599c36.activePost?.id === _0x3e9db4 ? {
        ..._0x599c36.activePost,
        status: _0x56e027
      } : _0x599c36.activePost
    }));
  },
  pinPost: async (_0xd55534, _0x34eb8c, _0x1d7a64, _0x36702) => {
    await _0x46471d(_0xd55534, _0x34eb8c, _0x1d7a64, _0x36702);
    const {
      _updateChannel: _0xea3f3c
    } = _0x2f548a();
    _0xea3f3c(_0x34eb8c, _0x32672c => ({
      posts: _0x32672c.posts.map(_0x53bf8a => _0x53bf8a.id === _0x1d7a64 ? {
        ..._0x53bf8a,
        is_pinned: _0x36702
      } : _0x53bf8a),
      activePost: _0x32672c.activePost?.id === _0x1d7a64 ? {
        ..._0x32672c.activePost,
        is_pinned: _0x36702
      } : _0x32672c.activePost
    }));
  },
  lockPost: async (_0x23680e, _0x463310, _0x29dd97, _0x222c15) => {
    await _0x442f88(_0x23680e, _0x463310, _0x29dd97, _0x222c15);
    const {
      _updateChannel: _0x567ff3
    } = _0x2f548a();
    _0x567ff3(_0x463310, _0x1808b0 => ({
      posts: _0x1808b0.posts.map(_0x4c64a2 => _0x4c64a2.id === _0x29dd97 ? {
        ..._0x4c64a2,
        is_locked: _0x222c15
      } : _0x4c64a2),
      activePost: _0x1808b0.activePost?.id === _0x29dd97 ? {
        ..._0x1808b0.activePost,
        is_locked: _0x222c15
      } : _0x1808b0.activePost
    }));
  },
  markAnswer: async (_0x1d32c9, _0x3f4ea2, _0x1c79f1, _0x4310d9) => {
    await _0x386843(_0x1d32c9, _0x3f4ea2, _0x1c79f1, _0x4310d9);
    const {
      _updateChannel: _0x3a64a6,
      getChannelState: _0x490212
    } = _0x2f548a();
    const _0x511fd3 = _0x490212(_0x3f4ea2);
    const _0x300efc = _0x511fd3.posts.find(_0x56a5ad => _0x56a5ad.id === _0x1c79f1) || _0x511fd3.activePost;
    const _0x46690d = _0x300efc?.answer_message_id === _0x4310d9;
    _0x3a64a6(_0x3f4ea2, _0x19a7b1 => ({
      posts: _0x19a7b1.posts.map(_0x4679f3 => _0x4679f3.id === _0x1c79f1 ? {
        ..._0x4679f3,
        is_answered: !_0x46690d,
        answer_message_id: _0x46690d ? undefined : _0x4310d9,
        status: _0x46690d ? "open" : "resolved"
      } : _0x4679f3),
      activePost: _0x19a7b1.activePost?.id === _0x1c79f1 ? {
        ..._0x19a7b1.activePost,
        is_answered: !_0x46690d,
        answer_message_id: _0x46690d ? undefined : _0x4310d9,
        status: _0x46690d ? "open" : "resolved"
      } : _0x19a7b1.activePost
    }));
  },
  vote: async (_0x40e827, _0x280f0d, _0x4682d0, _0x1eaeb4) => {
    const {
      _updateChannel: _0x1132cd
    } = _0x2f548a();
    const _0x3a7bc6 = _0x48d3d6 => {
      const _0x57cd99 = _0x48d3d6.user_vote;
      let _0x22ef83 = 0;
      let _0x331e7b = 0;
      if (_0x57cd99 === 1) {
        _0x22ef83 -= 1;
      }
      if (_0x57cd99 === -1) {
        _0x331e7b -= 1;
      }
      if (_0x1eaeb4 === 1) {
        _0x22ef83 += 1;
      }
      if (_0x1eaeb4 === -1) {
        _0x331e7b += 1;
      }
      const _0x2330bd = _0x48d3d6.upvote_count + _0x22ef83;
      const _0x4683de = _0x48d3d6.downvote_count + _0x331e7b;
      return {
        ..._0x48d3d6,
        user_vote: _0x1eaeb4,
        upvote_count: _0x2330bd,
        downvote_count: _0x4683de,
        score: _0x2330bd - _0x4683de
      };
    };
    _0x1132cd(_0x280f0d, _0x96e624 => ({
      posts: _0x96e624.posts.map(_0x41a81b => _0x41a81b.id === _0x4682d0 ? _0x3a7bc6(_0x41a81b) : _0x41a81b),
      activePost: _0x96e624.activePost?.id === _0x4682d0 ? _0x3a7bc6(_0x96e624.activePost) : _0x96e624.activePost
    }));
    try {
      await _0x51f00d(_0x40e827, _0x280f0d, _0x4682d0, _0x1eaeb4);
    } catch {
      try {
        const _0x19d32a = await _0x8a8cdb(_0x40e827, _0x280f0d, _0x4682d0);
        _0x1132cd(_0x280f0d, _0x327695 => ({
          posts: _0x327695.posts.map(_0x29b951 => _0x29b951.id === _0x4682d0 ? _0x19d32a : _0x29b951),
          activePost: _0x327695.activePost?.id === _0x4682d0 ? _0x19d32a : _0x327695.activePost
        }));
      } catch {}
    }
  },
  removeVote: async (_0x21c6c8, _0x7f3fd6, _0x2751ca) => {
    const {
      _updateChannel: _0x5f2ae2
    } = _0x2f548a();
    const _0x6cefd6 = _0x150bed => {
      const _0x207fb4 = _0x150bed.user_vote;
      let _0x5a001f = 0;
      let _0x276ef0 = 0;
      if (_0x207fb4 === 1) {
        _0x5a001f -= 1;
      }
      if (_0x207fb4 === -1) {
        _0x276ef0 -= 1;
      }
      const _0x2d8a9c = _0x150bed.upvote_count + _0x5a001f;
      const _0x2c901a = _0x150bed.downvote_count + _0x276ef0;
      return {
        ..._0x150bed,
        user_vote: null,
        upvote_count: _0x2d8a9c,
        downvote_count: _0x2c901a,
        score: _0x2d8a9c - _0x2c901a
      };
    };
    _0x5f2ae2(_0x7f3fd6, _0x5158d2 => ({
      posts: _0x5158d2.posts.map(_0x29d3ae => _0x29d3ae.id === _0x2751ca ? _0x6cefd6(_0x29d3ae) : _0x29d3ae),
      activePost: _0x5158d2.activePost?.id === _0x2751ca ? _0x6cefd6(_0x5158d2.activePost) : _0x5158d2.activePost
    }));
    try {
      await _0x4f60d2(_0x21c6c8, _0x7f3fd6, _0x2751ca);
    } catch {
      try {
        const _0x516ee7 = await _0x8a8cdb(_0x21c6c8, _0x7f3fd6, _0x2751ca);
        _0x5f2ae2(_0x7f3fd6, _0x10bf8c => ({
          posts: _0x10bf8c.posts.map(_0x2310ba => _0x2310ba.id === _0x2751ca ? _0x516ee7 : _0x2310ba),
          activePost: _0x10bf8c.activePost?.id === _0x2751ca ? _0x516ee7 : _0x10bf8c.activePost
        }));
      } catch {}
    }
  },
  subscribe: async (_0x55e3f3, _0x36abd9, _0x208bae, _0x26b3d6) => {
    const {
      _updateChannel: _0x3521b9,
      getChannelState: _0x2cc4d2
    } = _0x2f548a();
    const _0x32ac8b = _0x2cc4d2(_0x36abd9);
    const _0x53f3bc = _0x32ac8b.posts.find(_0x3afcaa => _0x3afcaa.id === _0x208bae) || _0x32ac8b.activePost;
    await _0x2e5a96(_0x55e3f3, _0x36abd9, _0x208bae, _0x26b3d6);
    _0x3521b9(_0x36abd9, _0x1b5ff0 => ({
      posts: _0x1b5ff0.posts.map(_0x203487 => _0x203487.id === _0x208bae ? {
        ..._0x203487,
        is_subscribed: true
      } : _0x203487),
      activePost: _0x1b5ff0.activePost?.id === _0x208bae ? {
        ..._0x1b5ff0.activePost,
        is_subscribed: true
      } : _0x1b5ff0.activePost
    }));
    const _0x42f72e = _0x53f3bc?.thread_channel_id;
    if (_0x42f72e) {
      _0x3521b9(_0x36abd9, _0x2fbfdc => _0x2fbfdc.subscribedPosts.some(_0x18fe86 => _0x18fe86.thread_channel_id === _0x42f72e) ? {} : {
        subscribedPosts: [..._0x2fbfdc.subscribedPosts, {
          thread_channel_id: _0x42f72e,
          post_id: _0x208bae,
          name: _0x53f3bc.title
        }]
      });
    }
  },
  unsubscribe: async (_0xdd044f, _0x576edc, _0x139208) => {
    const {
      _updateChannel: _0x212a8b
    } = _0x2f548a();
    await _0x51a8c4(_0xdd044f, _0x576edc, _0x139208);
    _0x212a8b(_0x576edc, _0x2b2b88 => ({
      posts: _0x2b2b88.posts.map(_0x657907 => _0x657907.id === _0x139208 ? {
        ..._0x657907,
        is_subscribed: false
      } : _0x657907),
      activePost: _0x2b2b88.activePost?.id === _0x139208 ? {
        ..._0x2b2b88.activePost,
        is_subscribed: false
      } : _0x2b2b88.activePost
    }));
    _0x212a8b(_0x576edc, _0x2281b8 => ({
      subscribedPosts: _0x2281b8.subscribedPosts.filter(_0x53afcf => _0x53afcf.post_id !== _0x139208)
    }));
  },
  fetchSettings: async (_0x595e25, _0x42bd0b) => {
    const {
      _updateChannel: _0x1b8610,
      getChannelState: _0x402348
    } = _0x2f548a();
    const _0x37e596 = _0x402348(_0x42bd0b);
    if (!_0x37e596.settings && !_0x37e596.isLoadingSettings) {
      _0x1b8610(_0x42bd0b, () => ({
        isLoadingSettings: true
      }));
      try {
        const _0x1d5706 = await _0x3c3e7a(_0x595e25, _0x42bd0b);
        const _0x13d4fe = F(_0x42bd0b);
        _0x1b8610(_0x42bd0b, () => ({
          settings: _0x1d5706,
          isLoadingSettings: false,
          activeSort: _0x13d4fe.sort || _0x1d5706.default_sort_order,
          activeLayout: _0x13d4fe.layout || _0x1d5706.default_layout,
          activeFilters: {
            status: _0x13d4fe.filterStatus,
            tagIds: _0x13d4fe.filterTagIds || [],
            filterMode: _0x13d4fe.filterMode || "or"
          }
        }));
      } catch {
        _0x1b8610(_0x42bd0b, () => ({
          isLoadingSettings: false
        }));
      }
    }
  },
  updateSettings: async (_0x15aa94, _0x43eee2, _0x541874) => {
    const _0x14a5ec = await _0x26b70b(_0x15aa94, _0x43eee2, _0x541874);
    const {
      _updateChannel: _0x27956c
    } = _0x2f548a();
    _0x27956c(_0x43eee2, () => ({
      settings: _0x14a5ec
    }));
  },
  fetchTags: async (_0x19bce9, _0x4da9f3) => {
    const {
      _updateChannel: _0x12a445,
      getChannelState: _0x5c6473
    } = _0x2f548a();
    const _0x2edbe7 = _0x5c6473(_0x4da9f3);
    if (!(_0x2edbe7.tags.length > 0) && !_0x2edbe7.isLoadingTags) {
      _0x12a445(_0x4da9f3, () => ({
        isLoadingTags: true
      }));
      try {
        const _0x3f98b7 = await _0x52ec15(_0x19bce9, _0x4da9f3);
        _0x12a445(_0x4da9f3, () => ({
          tags: _0x3f98b7,
          isLoadingTags: false
        }));
      } catch {
        _0x12a445(_0x4da9f3, () => ({
          isLoadingTags: false
        }));
      }
    }
  },
  setSort: (_0x211fc9, _0x3bb09a) => {
    _0x2f548a()._updateChannel(_0x211fc9, () => ({
      activeSort: _0x3bb09a
    }));
    M(_0x211fc9, {
      sort: _0x3bb09a
    });
  },
  setLayout: (_0x167cb3, _0x5484b8) => {
    _0x2f548a()._updateChannel(_0x167cb3, () => ({
      activeLayout: _0x5484b8
    }));
    M(_0x167cb3, {
      layout: _0x5484b8
    });
  },
  setFilterTags: (_0xef8395, _0x525386) => {
    _0x2f548a()._updateChannel(_0xef8395, _0x217aa9 => ({
      activeFilters: {
        ..._0x217aa9.activeFilters,
        tagIds: _0x525386
      }
    }));
    M(_0xef8395, {
      filterTagIds: _0x525386
    });
  },
  setFilterMode: (_0x407b58, _0x1abb4a) => {
    _0x2f548a()._updateChannel(_0x407b58, _0xae0bb8 => ({
      activeFilters: {
        ..._0xae0bb8.activeFilters,
        filterMode: _0x1abb4a
      }
    }));
    M(_0x407b58, {
      filterMode: _0x1abb4a
    });
  },
  setFilterStatus: (_0x10fce0, _0x452f0c) => {
    _0x2f548a()._updateChannel(_0x10fce0, _0x3732b3 => ({
      activeFilters: {
        ..._0x3732b3.activeFilters,
        status: _0x452f0c
      }
    }));
    M(_0x10fce0, {
      filterStatus: _0x452f0c
    });
  },
  setSearchQuery: (_0x1aa75f, _0x16463c) => {
    _0x2f548a()._updateChannel(_0x1aa75f, _0x40e18b => ({
      activeFilters: {
        ..._0x40e18b.activeFilters,
        query: _0x16463c
      }
    }));
  },
  clearFilters: _0x3b2108 => {
    _0x2f548a()._updateChannel(_0x3b2108, () => ({
      activeFilters: {
        tagIds: [],
        filterMode: "or"
      }
    }));
    M(_0x3b2108, {
      filterStatus: undefined,
      filterTagIds: [],
      filterMode: "or"
    });
  },
  clearActivePost: _0x194f5c => {
    _0x2f548a()._updateChannel(_0x194f5c, () => ({
      activePost: null
    }));
  },
  handlePostCreated: (_0x3e9dc8, _0x405006) => {
    _0x2f548a()._updateChannel(_0x3e9dc8, _0x3e2369 => _0x3e2369.posts?.some(_0x36b407 => _0x36b407.id === _0x405006.id) ? {} : {
      posts: [_0x405006, ...(_0x3e2369.posts ?? [])],
      totalPosts: _0x3e2369.totalPosts + 1
    });
  },
  handlePostUpdated: (_0x5c6192, _0x5cb4fc, _0x20c6e1) => {
    const _0x408076 = _0x20c6e1.is_answered === false ? {
      ..._0x20c6e1,
      answer_message_id: undefined
    } : _0x20c6e1;
    _0x2f548a()._updateChannel(_0x5c6192, _0x43fe49 => ({
      posts: (_0x43fe49.posts ?? []).map(_0x538f10 => _0x538f10.id === _0x5cb4fc ? {
        ..._0x538f10,
        ..._0x408076
      } : _0x538f10),
      activePost: _0x43fe49.activePost?.id === _0x5cb4fc ? {
        ..._0x43fe49.activePost,
        ..._0x408076
      } : _0x43fe49.activePost,
      subscribedPosts: _0x408076.title ? _0x43fe49.subscribedPosts.map(_0x24dfe0 => _0x24dfe0.post_id === _0x5cb4fc ? {
        ..._0x24dfe0,
        name: _0x408076.title
      } : _0x24dfe0) : _0x43fe49.subscribedPosts
    }));
  },
  handlePostDeleted: (_0x573c33, _0x1f4118) => {
    _0x2f548a()._updateChannel(_0x573c33, _0x3e7663 => ({
      posts: (_0x3e7663.posts ?? []).filter(_0x22fa40 => _0x22fa40.id !== _0x1f4118),
      totalPosts: _0x3e7663.totalPosts - 1,
      activePost: _0x3e7663.activePost?.id === _0x1f4118 ? null : _0x3e7663.activePost,
      subscribedPosts: _0x3e7663.subscribedPosts.filter(_0x317cf2 => _0x317cf2.post_id !== _0x1f4118)
    }));
  },
  handlePostVoted: (_0x3a66ab, _0xbfe8ae, _0x4b723e, _0x598812) => {
    _0x2f548a()._updateChannel(_0x3a66ab, _0x4474a7 => ({
      posts: _0x4474a7.posts.map(_0x1613e4 => _0x1613e4.id !== _0xbfe8ae ? _0x1613e4 : {
        ..._0x1613e4,
        upvote_count: _0x598812.upvote_count ?? _0x1613e4.upvote_count,
        downvote_count: _0x598812.downvote_count ?? _0x1613e4.downvote_count,
        score: (_0x598812.upvote_count ?? _0x1613e4.upvote_count) - (_0x598812.downvote_count ?? _0x1613e4.downvote_count)
      })
    }));
  },
  handlePostStatusChanged: (_0x326738, _0x16d663, _0x524722) => {
    _0x2f548a()._updateChannel(_0x326738, _0x462a27 => ({
      posts: _0x462a27.posts.map(_0x2f997d => _0x2f997d.id === _0x16d663 ? {
        ..._0x2f997d,
        status: _0x524722
      } : _0x2f997d),
      activePost: _0x462a27.activePost?.id === _0x16d663 ? {
        ..._0x462a27.activePost,
        status: _0x524722
      } : _0x462a27.activePost
    }));
  },
  handleSettingsUpdated: (_0x45f7c2, _0x23196d) => {
    _0x2f548a()._updateChannel(_0x45f7c2, _0x11e816 => ({
      settings: _0x11e816.settings ? {
        ..._0x11e816.settings,
        ..._0x23196d
      } : _0x11e816.settings,
      ...(_0x23196d.default_sort_order && !F(_0x45f7c2).sort ? {
        activeSort: _0x23196d.default_sort_order
      } : {}),
      ...(_0x23196d.default_layout && !F(_0x45f7c2).layout ? {
        activeLayout: _0x23196d.default_layout
      } : {})
    }));
  },
  handleTagsUpdated: (_0x718fb3, _0x28324e, _0x3f2e9c) => {
    _0x2f548a()._updateChannel(_0x718fb3, _0xc2cee1 => {
      switch (_0x28324e) {
        case "created":
          if (_0xc2cee1.tags.some(_0x40b7fb => _0x40b7fb.id === _0x3f2e9c.id)) {
            return {};
          } else {
            return {
              tags: [..._0xc2cee1.tags, _0x3f2e9c]
            };
          }
        case "updated":
          return {
            tags: _0xc2cee1.tags.map(_0x12877a => _0x12877a.id === _0x3f2e9c.id ? {
              ..._0x12877a,
              ..._0x3f2e9c
            } : _0x12877a)
          };
        case "deleted":
          return {
            tags: _0xc2cee1.tags.filter(_0x859100 => _0x859100.id !== _0x3f2e9c.id)
          };
        default:
          return {};
      }
    });
  },
  clearChannel: _0x840cd1 => {
    _0x1a842b(_0x386487 => {
      const _0xf6030e = new Map(_0x386487.channels);
      _0xf6030e.delete(_0x840cd1);
      return {
        channels: _0xf6030e
      };
    });
  },
  clear: () => {
    _0x1a842b({
      channels: new Map()
    });
  }
})));
T.getState().fetchPosts;
T.getState().fetchSettings;
T.getState().fetchTags;
T.getState().handlePostCreated;
T.getState().handlePostUpdated;
T.getState().handlePostDeleted;
T.getState().handlePostVoted;
T.getState().handlePostStatusChanged;
T.getState().handleSettingsUpdated;
T.getState().handleTagsUpdated;
T.getState().clearChannel;
T.getState().clear;
const j = [];
const k = [];
const A = {
  tagIds: [],
  filterMode: "or"
};
const D = _0x510a24 => T(_0x3b8ef8 => _0x3b8ef8.channels.get(_0x510a24)?.posts ?? j);
const q = _0x3b4834 => T(_0x16363b => _0x16363b.channels.get(_0x3b4834)?.settings ?? null);
const H = _0x3f5bb1 => T(_0x2d48fb => _0x2d48fb.channels.get(_0x3f5bb1)?.tags ?? k);
const U = _0x45efb3 => T(_0x419097 => _0x419097.channels.get(_0x45efb3)?.activePost ?? null);
const O = [];
const $ = _0x5d7ac0 => T(_0x4c1c12 => _0x4c1c12.channels.get(_0x5d7ac0)?.subscribedPosts ?? O);
const x = _0x37f71e => T(_0x27c226 => _0x27c226.channels.get(_0x37f71e)?.isLoadingPosts ?? false);
const N = _0x63b0aa => T(_0x555f04 => _0x555f04.channels.get(_0x63b0aa)?.activeSort ?? "latest_activity");
const V = _0x45cca3 => T(_0x104f34 => _0x104f34.channels.get(_0x45cca3)?.activeLayout ?? "list");
const J = _0x351445 => T(_0x454250 => _0x454250.channels.get(_0x351445)?.activeFilters ?? A);
const Q = {
  currentPage: 1,
  totalPages: 0,
  totalPosts: 0,
  hasMore: false
};
const R = _0x50eb3a => T(_0x26d7ba(_0x89cecc => {
  const _0x536218 = _0x89cecc.channels.get(_0x50eb3a);
  if (_0x536218) {
    return {
      currentPage: _0x536218.currentPage,
      totalPages: _0x536218.totalPages,
      totalPosts: _0x536218.totalPosts,
      hasMore: _0x536218.hasMore
    };
  } else {
    return Q;
  }
}));
export { T as a, w as b, $ as c, U as d, q as e, V as f, N as g, J as h, H as i, D as j, x as k, R as l, C as s, y as u };