import { r as _0x44c583, aZ as _0x496536, d2 as _0x150fc2, dW as _0x5e4b49, b1 as _0xfd1c92, du as _0x5194ec, f as _0x4ba481, dv as _0x10ca3d, aG as _0x9ce622 } from "./index-cQfEKR1W.js";
import { ac as _0x52cce8, ad as _0x2ee9cc } from "./soundboardFx-C2LP-Hjs.js";
const _ = 300000;
const u = new Set();
const g = new Map();
const p = _0x2fe363 => u.has(_0x2fe363);
const f = _0x3099bb => {
  u.delete(_0x3099bb);
};
const h = new Set(["role_created", "role_updated", "role_deleted", "member_role_changed", "member_update", "permission_created", "permission_updated", "permission_deleted", "category_permission_updated", "channel_created", "channel_updated", "channel_deleted", "category_created", "category_updated", "category_deleted", "ownership_transferred"]);
const m = [];
const v = [];
const y = _0x4aefc3 => {
  const [_0x5c1f9a, _0x40c8b3] = _0x44c583.useState(null);
  const _0x17d90a = _0xfd1c92(_0x29dfaf => _0x4aefc3 ? _0x29dfaf.guildChannels.get(_0x4aefc3) : undefined);
  const _0x224725 = _0xfd1c92(_0xd06d30 => !!_0x4aefc3 && _0xd06d30.loadingGuilds.has(_0x4aefc3));
  const _0x1d7ea6 = _0x44c583.useRef(_0x4aefc3);
  _0x1d7ea6.current = _0x4aefc3;
  const _0xd49c2 = _0x17d90a?.channels ?? m;
  const _0x48a842 = _0x17d90a?.categoriesData ?? v;
  const _0x153efd = _0x44c583.useCallback(async (_0x150484 = false, _0x471c89 = false) => {
    if (!_0x4aefc3) {
      return;
    }
    if (!_0x150484 && _0x5194ec.getGuildChannels(_0x4aefc3)) {
      return;
    }
    if (!_0x471c89) {
      _0x5194ec.setLoading(_0x4aefc3, true);
    }
    _0x40c8b3(null);
    const _0x3d120b = _0x4aefc3;
    const _0x32fed2 = _0x4ba481.getState().user?.id;
    try {
      const _0x3b78c4 = await _0x52cce8(_0x4aefc3, {
        force: _0x150484
      });
      if (_0x4ba481.getState().user?.id !== _0x32fed2) {
        return;
      }
      const _0x26ef07 = _0x10ca3d(_0x3b78c4);
      _0x5194ec.setGuildChannels(_0x4aefc3, {
        channels: _0x26ef07,
        categoriesData: _0x3b78c4,
        lastFetched: Date.now()
      });
      _0x5194ec.setLoading(_0x4aefc3, false);
      f(_0x4aefc3);
    } catch (_0x3eb89e) {
      if (_0x4ba481.getState().user?.id !== _0x32fed2) {
        return;
      }
      if (!_0x471c89 && _0x1d7ea6.current === _0x3d120b) {
        _0x40c8b3(_0x3eb89e?.message || "Kanallar yüklenirken hata oluştu");
      }
      _0x5194ec.setLoading(_0x4aefc3, false);
    }
  }, [_0x4aefc3]);
  _0x44c583.useEffect(() => {
    if (!_0x4aefc3) {
      return;
    }
    const _0x1e1a1a = _0x5194ec.getGuildChannels(_0x4aefc3);
    if (_0x1e1a1a) {
      if (p(_0x4aefc3) || Date.now() - _0x1e1a1a.lastFetched > _) {
        _0x153efd(true, true);
      }
    } else {
      _0x153efd(false);
    }
  }, [_0x4aefc3, _0x153efd]);
  const _0x25a1b4 = _0x44c583.useCallback(_0x99abb0 => [..._0x99abb0].sort((_0x5f0e65, _0x2f9064) => {
    const _0x512807 = _0x5f0e65.fractional_position || "a0";
    const _0x2d2b08 = _0x2f9064.fractional_position || "a0";
    if (_0x512807 < _0x2d2b08) {
      return -1;
    } else if (_0x512807 > _0x2d2b08) {
      return 1;
    } else if (_0x5f0e65.id < _0x2f9064.id) {
      return -1;
    } else if (_0x5f0e65.id > _0x2f9064.id) {
      return 1;
    } else {
      return 0;
    }
  }), []);
  const _0x3095eb = _0x44c583.useCallback(_0x126a4c => {
    if (!_0x126a4c?.channel_id) {
      return;
    }
    const _0x58d370 = _0x126a4c.guild_id ? String(_0x126a4c.guild_id) : null;
    if (!_0x58d370) {
      return;
    }
    const _0x3d0118 = _0x5194ec.getGuildChannels(_0x58d370);
    if (!_0x3d0118) {
      return;
    }
    if (_0x3d0118.categoriesData.some(_0x5ba66c => _0x5ba66c.channels.some(_0x1c0778 => _0x1c0778.id === _0x126a4c.channel_id))) {
      return;
    }
    const _0x5fb2cb = {
      id: _0x126a4c.channel_id,
      name: _0x126a4c.name,
      type: _0x126a4c.type || "text",
      fractional_position: _0x126a4c.fractional_position || "a0",
      is_private: _0x126a4c.is_private || false,
      is_nsfw: _0x126a4c.is_nsfw || false,
      topic: _0x126a4c.topic || "",
      avatar_url: _0x126a4c.avatar_url,
      category_id: _0x126a4c.category_id,
      user_limit: _0x126a4c.user_limit || 0
    };
    _0x5194ec.addChannel(_0x58d370, _0x5fb2cb, _0x126a4c.category_id);
  }, []);
  const _0x20889d = _0x44c583.useCallback(_0x13d4e5 => {
    if (!_0x13d4e5?.channel_id) {
      return;
    }
    const _0x29fa44 = _0x13d4e5.guild_id ? String(_0x13d4e5.guild_id) : null;
    if (!_0x29fa44) {
      return;
    }
    if (_0x5194ec.getGuildChannels(_0x29fa44)) {
      _0x5194ec.removeChannel(_0x29fa44, _0x13d4e5.channel_id);
    }
  }, []);
  const _0x3ef1f0 = _0x44c583.useCallback(_0x315898 => {
    if (!_0x315898?.channel_id || !_0x315898?.changes) {
      return;
    }
    const _0x13518b = _0x315898.guild_id ? String(_0x315898.guild_id) : null;
    if (!_0x13518b) {
      return;
    }
    const _0x936f0b = _0x5194ec.getGuildChannels(_0x13518b);
    if (!_0x936f0b) {
      return;
    }
    const _0xf63a8f = _0x13518b === _0x4aefc3;
    const _0xa3690b = Array.isArray(_0x315898.changes);
    const _0x29fa19 = _0xa3690b ? _0x315898.changes.reduce((_0x4af72d, _0x199206) => {
      if (_0x315898[_0x199206] !== undefined) {
        _0x4af72d[_0x199206] = _0x315898[_0x199206];
      }
      return _0x4af72d;
    }, {}) : _0x315898.changes;
    const _0x100aed = _0x29fa19.is_private !== undefined;
    const _0x2361df = _0x29fa19.is_private === false;
    const _0x5930a0 = _0x29fa19.is_private === true;
    const _0x517d19 = _0x315898.has_access === true;
    const _0x4dfaba = _0x315898.permission_updated === true;
    const _0x556574 = _0x9ce622.VIEW_CHANNEL;
    let _0x52606b = null;
    if (_0x4dfaba) {
      if (_0x29fa19.effective_permissions !== undefined) {
        _0x52606b = (_0x29fa19.effective_permissions & _0x556574) !== 0;
      } else if (_0x29fa19.allow_permissions !== undefined && _0x29fa19.deny_permissions !== undefined) {
        _0x52606b = (_0x29fa19.allow_permissions & ~_0x29fa19.deny_permissions & _0x556574) !== 0;
      }
    }
    if (_0x52606b === false && !_0x517d19) {
      _0x5194ec.removeChannel(_0x13518b, _0x315898.channel_id);
      return;
    }
    if (_0x100aed && _0x5930a0 && !_0x517d19) {
      _0x5194ec.removeChannel(_0x13518b, _0x315898.channel_id);
      return;
    }
    const _0x45c0c7 = _0x936f0b.channels.some(_0x1cb0f2 => _0x1cb0f2.id === _0x315898.channel_id);
    if (!_0x45c0c7 && _0x52606b === true && _0xf63a8f) {
      _0x2ee9cc(_0x13518b, _0x315898.channel_id).then(_0xe8e3c1 => {
        const _0x35eadc = _0x5194ec.getGuildChannels(_0x13518b);
        if (!_0x35eadc) {
          return;
        }
        if (_0x35eadc.channels.some(_0x1c6810 => _0x1c6810.id === _0x315898.channel_id)) {
          return;
        }
        const _0x30d597 = {
          id: _0xe8e3c1.id,
          name: _0xe8e3c1.name,
          type: _0xe8e3c1.type || "text",
          fractional_position: _0xe8e3c1.fractional_position || "a0",
          is_private: _0xe8e3c1.is_private || false,
          is_nsfw: _0xe8e3c1.is_nsfw || false,
          topic: _0xe8e3c1.topic || "",
          avatar_url: _0xe8e3c1.avatar_url,
          category_id: _0xe8e3c1.category_id,
          slowmode_seconds: _0xe8e3c1.slowmode_seconds
        };
        _0x5194ec.addChannel(_0x13518b, _0x30d597, _0xe8e3c1.category_id);
      }).catch(_0x38c4a3 => {
        console.error("[useChannels] Failed to fetch channel details after permission change:", _0x38c4a3);
        if (_0xf63a8f) {
          _0x153efd(true, true);
        }
      });
      return;
    }
    if (!_0x45c0c7 && _0x100aed && _0x2361df && _0xf63a8f) {
      _0x2ee9cc(_0x13518b, _0x315898.channel_id).then(_0x23dc71 => {
        const _0x1243f3 = _0x5194ec.getGuildChannels(_0x13518b);
        if (!_0x1243f3) {
          return;
        }
        if (_0x1243f3.channels.some(_0x4a7a29 => _0x4a7a29.id === _0x315898.channel_id)) {
          return;
        }
        const _0x2bec6a = {
          id: _0x23dc71.id,
          name: _0x23dc71.name,
          type: _0x23dc71.type || "text",
          fractional_position: _0x23dc71.fractional_position || "a0",
          is_private: _0x23dc71.is_private || false,
          is_nsfw: _0x23dc71.is_nsfw || false,
          topic: _0x23dc71.topic || "",
          avatar_url: _0x23dc71.avatar_url,
          category_id: _0x23dc71.category_id,
          slowmode_seconds: _0x23dc71.slowmode_seconds
        };
        _0x5194ec.addChannel(_0x13518b, _0x2bec6a, _0x23dc71.category_id);
      }).catch(_0x151cb6 => {
        console.error("[useChannels] Failed to fetch channel details after visibility change:", _0x151cb6);
        if (_0xf63a8f) {
          _0x153efd(true, true);
        }
      });
      return;
    }
    if (!_0x45c0c7) {
      return;
    }
    const _0x5dacd2 = {};
    if (_0x29fa19.name !== undefined) {
      _0x5dacd2.name = _0x29fa19.name;
    }
    if (_0x29fa19.type !== undefined) {
      _0x5dacd2.type = _0x29fa19.type;
    }
    if (_0x29fa19.is_nsfw !== undefined) {
      _0x5dacd2.is_nsfw = _0x29fa19.is_nsfw;
    }
    if (_0x29fa19.topic !== undefined) {
      _0x5dacd2.topic = _0x29fa19.topic;
    }
    if (_0x29fa19.avatar_url !== undefined) {
      _0x5dacd2.avatar_url = _0x29fa19.avatar_url;
    }
    if (_0x29fa19.fractional_position !== undefined) {
      _0x5dacd2.fractional_position = _0x29fa19.fractional_position;
    }
    if (_0x29fa19.is_private !== undefined) {
      _0x5dacd2.is_private = _0x29fa19.is_private;
    }
    if (_0x29fa19.slowmode_seconds !== undefined) {
      _0x5dacd2.slowmode_seconds = _0x29fa19.slowmode_seconds;
    }
    if (_0x29fa19.user_limit !== undefined) {
      _0x5dacd2.user_limit = _0x29fa19.user_limit;
    }
    if (_0x29fa19.allow_permissions !== undefined) {
      _0x5dacd2.allow_permissions = _0x29fa19.allow_permissions;
    }
    if (_0x29fa19.deny_permissions !== undefined) {
      _0x5dacd2.deny_permissions = _0x29fa19.deny_permissions;
    }
    if (_0x4dfaba) {
      const _0x580266 = _0x936f0b.channels.find(_0x572d59 => _0x572d59.id === _0x315898.channel_id);
      if (_0x29fa19.effective_permissions !== undefined) {
        _0x5dacd2.effective_permissions = _0x29fa19.effective_permissions;
      } else if (_0x29fa19.allow_permissions !== undefined && _0x29fa19.deny_permissions !== undefined) {
        const _0x2cc94c = _0x580266?.effective_permissions ?? 0;
        const _0x34cf42 = _0x29fa19.allow_permissions;
        const _0x4860e5 = _0x29fa19.deny_permissions;
        _0x5dacd2.effective_permissions = _0x2cc94c & ~_0x4860e5 | _0x34cf42;
      }
    }
    if (_0x29fa19.category_id !== undefined) {
      const _0x415e6d = _0x29fa19.category_id === null || _0x29fa19.category_id === "" ? "0" : String(_0x29fa19.category_id);
      _0x5194ec._updateCategoriesData(_0x13518b, _0x39826f => {
        let _0x5cc58a = null;
        let _0x456234 = _0x39826f.map(_0xa4fe21 => {
          const _0x7fd90f = _0xa4fe21.channels.findIndex(_0x4b13af => _0x4b13af.id === _0x315898.channel_id);
          if (_0x7fd90f > -1) {
            _0x5cc58a = {
              ..._0xa4fe21.channels[_0x7fd90f],
              category_id: _0x415e6d,
              ..._0x5dacd2
            };
            return {
              ..._0xa4fe21,
              channels: _0xa4fe21.channels.filter(_0x58fb96 => _0x58fb96.id !== _0x315898.channel_id)
            };
          } else {
            return _0xa4fe21;
          }
        });
        if (_0x5cc58a) {
          const _0x384b50 = _0x456234.findIndex(_0x24fed5 => _0x24fed5.category_id === _0x415e6d);
          if (_0x384b50 > -1) {
            _0x456234[_0x384b50] = {
              ..._0x456234[_0x384b50],
              channels: _0x25a1b4([..._0x456234[_0x384b50].channels, _0x5cc58a])
            };
          } else if (_0x415e6d === "0") {
            _0x456234.unshift({
              category_id: "0",
              category_name: "",
              category_position: 0,
              channels: [_0x5cc58a]
            });
          } else {
            _0x456234.push({
              category_id: _0x415e6d,
              category_name: "",
              category_position: 999,
              channels: [_0x5cc58a]
            });
          }
        }
        return _0x456234.map(_0x321756 => ({
          ..._0x321756,
          channels: _0x25a1b4(_0x321756.channels)
        }));
      });
    } else if (Object.keys(_0x5dacd2).length > 0) {
      _0x5194ec.updateChannel(_0x13518b, _0x315898.channel_id, _0x5dacd2);
      if (_0x5dacd2.fractional_position !== undefined) {
        _0x5194ec._updateCategoriesData(_0x13518b, _0x50022c => _0x50022c.map(_0x4a7961 => ({
          ..._0x4a7961,
          channels: _0x25a1b4(_0x4a7961.channels)
        })));
      }
    } else if (_0xa3690b && _0xf63a8f) {
      _0x153efd(true, true);
    }
  }, [_0x4aefc3, _0x153efd, _0x25a1b4]);
  const _0x1af707 = _0x44c583.useCallback(_0x3094f4 => {
    if (!_0x3094f4?.category_id) {
      return;
    }
    const _0xcbee2d = _0x3094f4.guild_id ? String(_0x3094f4.guild_id) : null;
    if (!_0xcbee2d) {
      return;
    }
    const _0x554f3d = String(_0x3094f4.category_id);
    const _0x14217e = _0x5194ec._getCategoriesData(_0xcbee2d);
    if (!_0x14217e) {
      return;
    }
    if (_0x14217e.some(_0x21dfcf => String(_0x21dfcf.category_id) === _0x554f3d)) {
      return;
    }
    const _0x3e15fe = {
      category_id: _0x554f3d,
      category_name: _0x3094f4.name,
      category_position: _0x3094f4.position || 0,
      fractional_position: _0x3094f4.fractional_position,
      channels: []
    };
    _0x5194ec.addCategory(_0xcbee2d, _0x3e15fe);
  }, []);
  const _0x3b1f35 = _0x44c583.useCallback(_0x3e3599 => {
    if (!_0x3e3599?.category_id) {
      return;
    }
    const _0x164349 = _0x3e3599.guild_id ? String(_0x3e3599.guild_id) : null;
    if (!_0x164349) {
      return;
    }
    const _0x375bd7 = String(_0x3e3599.category_id);
    const _0xc5521f = _0x5194ec._getCategoriesData(_0x164349);
    if (_0xc5521f?.some(_0x4d98be => String(_0x4d98be.category_id) === _0x375bd7)) {
      _0x5194ec.removeCategory(_0x164349, _0x375bd7);
    }
  }, []);
  const _0x254757 = _0x44c583.useCallback(_0x265a46 => {
    if (!_0x265a46?.category_id || !_0x265a46?.changes) {
      return;
    }
    const _0x2305b8 = _0x265a46.guild_id ? String(_0x265a46.guild_id) : null;
    if (!_0x2305b8) {
      return;
    }
    const _0x21b7d8 = String(_0x265a46.category_id);
    const _0x4e1fca = _0x5194ec._getCategoriesData(_0x2305b8);
    if (!_0x4e1fca?.some(_0x22dc85 => String(_0x22dc85.category_id) === _0x21b7d8)) {
      console.log("[useChannels] Category does not exist, skipping update:", _0x21b7d8);
      return;
    }
    const _0x3dab8d = {};
    const _0x2a0e6d = Array.isArray(_0x265a46.changes);
    const _0x13de81 = _0x2a0e6d ? _0x265a46.changes.reduce((_0x271326, _0x32214f) => {
      if (_0x265a46[_0x32214f] !== undefined) {
        _0x271326[_0x32214f] = _0x265a46[_0x32214f];
      }
      return _0x271326;
    }, {}) : _0x265a46.changes;
    if (_0x13de81.name !== undefined) {
      _0x3dab8d.category_name = _0x13de81.name;
    }
    if (_0x13de81.position !== undefined) {
      _0x3dab8d.category_position = _0x13de81.position;
    }
    if (_0x13de81.fractional_position !== undefined) {
      _0x3dab8d.fractional_position = _0x13de81.fractional_position;
    }
    if (_0x2a0e6d && _0x265a46.fractional_position !== undefined && _0x3dab8d.fractional_position === undefined) {
      _0x3dab8d.fractional_position = _0x265a46.fractional_position;
    }
    if (Object.keys(_0x3dab8d).length > 0) {
      _0x5194ec.updateCategory(_0x2305b8, _0x21b7d8, _0x3dab8d);
    } else if (_0x2a0e6d && _0x2305b8 === _0x4aefc3) {
      _0x153efd(true, true);
    }
  }, [_0x4aefc3, _0x153efd]);
  const _0x320cd6 = _0x44c583.useCallback(_0x3d51d4 => {
    if (!_0x3d51d4?.guild_id || !_0x3d51d4?.changes?.permissions) {
      return;
    }
    const _0x4a3e71 = String(_0x3d51d4.guild_id);
    if (_0x5194ec.getGuildChannels(_0x4a3e71) && _0x4a3e71 === _0x4aefc3) {
      _0x153efd(true, true);
    }
  }, [_0x4aefc3, _0x153efd]);
  const _0x1010bc = _0x4ba481(_0x5b864c => _0x5b864c.user?.id);
  const _0x42698c = _0x44c583.useCallback(_0x1119e9 => {
    if (!_0x1119e9?.guild_id || !_0x1119e9?.user_id) {
      return;
    }
    const _0xdffcbe = String(_0x1119e9.guild_id);
    const _0x1ad951 = String(_0x1119e9.user_id);
    if (String(_0x1010bc) !== _0x1ad951) {
      return;
    }
    if (_0x5194ec.getGuildChannels(_0xdffcbe)) {
      setTimeout(() => _0x153efd(true, true), 0);
    }
  }, [_0x1010bc, _0x153efd]);
  const _0x37879e = _0x44c583.useCallback(_0x44032d => {
    if (!_0x44032d?.guild_id) {
      return;
    }
    const _0x4f25f2 = String(_0x44032d.guild_id);
    const _0x35e90b = _0x5194ec.getGuildChannels(_0x4f25f2);
    if (!_0x35e90b) {
      return;
    }
    const _0x5af7e4 = _0x4f25f2 === _0x4aefc3;
    const {
      scope: _0x40c0ba,
      target_id: _0x51b743,
      has_access: _0x5a960f,
      effective_permissions: _0x5ee3b1
    } = _0x44032d;
    if (_0x40c0ba === "channel" && _0x51b743) {
      if (_0x5a960f === false) {
        _0x5194ec.removeChannel(_0x4f25f2, _0x51b743);
      } else if (_0x5a960f === true) {
        const _0x502817 = _0x35e90b.channels?.find(_0x13a79f => _0x13a79f.id === _0x51b743);
        if (_0x502817) {
          if (_0x5ee3b1 !== undefined) {
            _0x5194ec.updateChannel(_0x4f25f2, _0x51b743, {
              effective_permissions: _0x5ee3b1
            });
          }
        } else if (_0x5af7e4) {
          _0x153efd(true, true);
        }
      } else if (_0x5ee3b1 !== undefined) {
        _0x5194ec.updateChannel(_0x4f25f2, _0x51b743, {
          effective_permissions: _0x5ee3b1
        });
      } else if (_0x5af7e4) {
        _0x153efd(true, true);
      }
    } else if (_0x40c0ba === "category" && _0x51b743 && _0x5a960f === false) {
      _0x5194ec.removeCategory(_0x4f25f2, _0x51b743);
    } else if (_0x5af7e4) {
      _0x153efd(true, true);
    }
  }, [_0x4aefc3, _0x153efd]);
  _0x496536((_0x391798, _0x183338) => {
    switch (_0x391798) {
      case "channel_created":
        _0x3095eb(_0x183338);
        break;
      case "channel_deleted":
        _0x20889d(_0x183338);
        break;
      case "channel_updated":
        _0x3ef1f0(_0x183338);
        break;
      case "category_created":
        _0x1af707(_0x183338);
        break;
      case "category_deleted":
        _0x3b1f35(_0x183338);
        break;
      case "category_updated":
        _0x254757(_0x183338);
        break;
      case "role_updated":
        _0x320cd6(_0x183338);
        break;
      case "role_deleted":
        if (_0x183338?.guild_id && String(_0x183338.guild_id) === _0x4aefc3) {
          setTimeout(() => _0x153efd(true, true), 0);
        }
        break;
      case "member_role_changed":
        _0x42698c(_0x183338);
        break;
      case "permission_updated":
      case "permission_created":
      case "permission_deleted":
      case "category_permission_updated":
        _0x37879e(_0x183338);
        break;
      case "guild_deleted":
        if (_0x183338?.guild_id === _0x4aefc3 && _0x4aefc3) {
          _0x5194ec.clearGuild(_0x4aefc3);
        }
    }
  }, [_0x3095eb, _0x20889d, _0x3ef1f0, _0x1af707, _0x3b1f35, _0x254757, _0x320cd6, _0x42698c, _0x37879e, _0x4aefc3]);
  const _0x2cba59 = _0x44c583.useRef(_0x153efd);
  _0x2cba59.current = _0x153efd;
  const _0x4b08ac = _0x44c583.useCallback(() => {
    _0x2cba59.current(true, true);
  }, []);
  const _0x4acc6f = _0x44c583.useCallback(_0x387d85 => !!_0x5194ec.getGuildChannels(_0x387d85), []);
  (function (_0x4d329a, _0x36029f, _0x3061f4, _0x5085cd) {
    const _0x5e5609 = _0x44c583.useRef(_0x3061f4);
    _0x5e5609.current = _0x3061f4;
    const _0x44d5b7 = _0x44c583.useRef(_0x4d329a);
    _0x44d5b7.current = _0x4d329a;
    const _0x3581cf = _0x44c583.useRef(null);
    const _0x7b20c2 = _0x4b7877 => {
      if (!_0x44d5b7.current) {
        return;
      }
      const _0x1ec9e2 = _0x44d5b7.current;
      const _0x369cbf = Date.now();
      const _0x32f918 = _0xfd1c92.getState().guildChannels.get(_0x1ec9e2);
      if ((!!_0x4b7877 || !!p(_0x1ec9e2) || !_0x32f918 || !(_0x369cbf - _0x32f918.lastFetched < _)) && !(_0x369cbf - (g.get(_0x1ec9e2) ?? 0) < (_0x4b7877 ? 1000 : 5000))) {
        g.set(_0x1ec9e2, _0x369cbf);
        f(_0x1ec9e2);
        _0x5e5609.current();
      }
    };
    _0x496536((_0x1616a8, _0x144f78) => {
      if (!h.has(_0x1616a8)) {
        return;
      }
      if (["channel_updated", "category_updated", "role_updated", "member_update"].includes(_0x1616a8) && !_0x150fc2(_0x144f78)) {
        return;
      }
      const _0x32cb18 = _0x144f78?.guild_id ? String(_0x144f78.guild_id) : null;
      if (_0x32cb18) {
        if (_0x1616a8 !== "member_role_changed" && _0x1616a8 !== "member_update" || !_0x144f78?.user_id || !_0x36029f || String(_0x144f78.user_id) === String(_0x36029f)) {
          if (_0x32cb18 === _0x44d5b7.current) {
            if (_0x3581cf.current) {
              clearTimeout(_0x3581cf.current);
            }
            _0x3581cf.current = setTimeout(() => {
              _0x3581cf.current = null;
              _0x7b20c2(true);
            }, 400);
          } else if (_0x5085cd(_0x32cb18)) {
            u.add(_0x32cb18);
          }
        }
      }
    }, [_0x36029f, _0x5085cd]);
    _0x5e4b49("app_resumed", () => _0x7b20c2(true));
    _0x44c583.useEffect(() => {
      const _0x36c3da = () => {
        if (!document.hidden) {
          _0x7b20c2(false);
        }
      };
      const _0x5ed6d1 = () => _0x7b20c2(false);
      const _0x95f964 = () => _0x7b20c2(true);
      document.addEventListener("visibilitychange", _0x36c3da);
      window.addEventListener("focus", _0x5ed6d1);
      window.addEventListener("online", _0x95f964);
      return () => {
        document.removeEventListener("visibilitychange", _0x36c3da);
        window.removeEventListener("focus", _0x5ed6d1);
        window.removeEventListener("online", _0x95f964);
        if (_0x3581cf.current) {
          clearTimeout(_0x3581cf.current);
        }
      };
    }, []);
  })(_0x4aefc3, _0x1010bc ? String(_0x1010bc) : undefined, _0x4b08ac, _0x4acc6f);
  const _0x1738b2 = _0x44c583.useCallback(() => {
    _0x153efd(true);
  }, [_0x153efd]);
  const _0x262a22 = _0x44c583.useMemo(() => _0xd49c2.length > 0 || _0x48a842.some(_0x291f1a => _0x291f1a.category_id !== "0" && _0x291f1a.channels.length === 0), [_0xd49c2.length, _0x48a842]);
  return _0x44c583.useMemo(() => ({
    channels: _0xd49c2,
    categoriesData: _0x48a842,
    isLoading: _0x224725,
    error: _0x5c1f9a,
    hasContent: _0x262a22,
    refreshChannels: _0x1738b2
  }), [_0xd49c2, _0x48a842, _0x224725, _0x5c1f9a, _0x262a22, _0x1738b2]);
};
export { y as u };