import { aa as _0x3b5a59, aV as _0x2d5576, dm as _0x5f4fc4, dn as _0x2d6924, bS as _0x579b5e, cI as _0x1fceac, dp as _0x1d7ad4, a9 as _0x204f2b, dq as _0x58ac1d, f as _0x22aaa1, be as _0x3f90ba, bd as _0x2e96d8, aY as _0x365c6c, c as _0x44b99c, O as _0x56f0fc, ah as _0x50bfcf, aW as _0x41afc7, aX as _0x293a3b, aP as _0x5a2d98, c_ as _0xf41bb6, c2 as _0x801e51, dr as _0x588afa, ds as _0xc3c4e0, dt as _0x415cee, du as _0x276176, dv as _0x38a55f, dw as _0xbff658, dx as _0x5182d0, dy as _0x465a90, bC as _0x165fee, dz as _0x4d0476, bD as _0x483872 } from "./index-cQfEKR1W.js";
import { e as _0x10ee7b } from "./index-BUijt7wr.js";
function L(_0x28f462) {
  if (_0x28f462 && _0x28f462.is_bot !== undefined) {
    _0x2d5576.getState().updateParticipantByUserId(String(_0x28f462.user_id), {
      is_bot: _0x28f462.is_bot,
      application_id: _0x28f462.application_id
    });
  }
}
const R = _0x3b5a59((_0x4a18c4, _0x53e2f6) => ({
  channels: new Map(),
  activeChannelId: null,
  setChannel: (_0x2f1068, _0x463881) => {
    L(_0x463881.participant);
    _0x4a18c4(_0xa2c9b7 => {
      const _0x21f149 = new Map(_0xa2c9b7.channels);
      if (_0x21f149.size >= 50 && !_0x21f149.has(_0x2f1068)) {
        const _0x1a0fa4 = [];
        for (const _0x271f2d of _0x21f149.keys()) {
          if (_0x271f2d !== _0xa2c9b7.activeChannelId && (_0x1a0fa4.push(_0x271f2d), _0x21f149.size - _0x1a0fa4.length < 50)) {
            break;
          }
        }
        for (const _0x19e934 of _0x1a0fa4) {
          _0x21f149.delete(_0x19e934);
        }
      }
      _0x21f149.set(_0x2f1068, _0x463881);
      return {
        channels: _0x21f149
      };
    });
  },
  updateChannel: (_0x23f27a, _0x36e0d3) => {
    _0x4a18c4(_0x4db404 => {
      const _0x3f21d3 = _0x4db404.channels.get(_0x23f27a);
      if (!_0x3f21d3) {
        return _0x4db404;
      }
      const _0x37883c = new Map(_0x4db404.channels);
      _0x37883c.set(_0x23f27a, {
        ..._0x3f21d3,
        ..._0x36e0d3
      });
      return {
        channels: _0x37883c
      };
    });
  },
  updateParticipant: (_0x43439f, _0x338f6c) => {
    const _0x2cf0d2 = _0x53e2f6().channels.get(_0x43439f)?.participant;
    if (_0x2cf0d2) {
      L({
        ..._0x2cf0d2,
        ..._0x338f6c
      });
    }
    _0x4a18c4(_0x2176d3 => {
      const _0x3bcf68 = _0x2176d3.channels.get(_0x43439f);
      if (!_0x3bcf68 || !_0x3bcf68.participant) {
        return _0x2176d3;
      }
      const _0xf292e8 = new Map(_0x2176d3.channels);
      _0xf292e8.set(_0x43439f, {
        ..._0x3bcf68,
        participant: {
          ..._0x3bcf68.participant,
          ..._0x338f6c
        }
      });
      return {
        channels: _0xf292e8
      };
    });
  },
  updateParticipantByUserId: (_0x1d531b, _0x185e99) => {
    _0x4a18c4(_0x64547c => {
      let _0x42287c = false;
      const _0x29f82b = new Map(_0x64547c.channels);
      for (const [_0x38375a, _0x26d80a] of _0x29f82b) {
        if (!_0x26d80a.is_group && _0x26d80a.participant && String(_0x26d80a.participant.user_id) === _0x1d531b) {
          _0x29f82b.set(_0x38375a, {
            ..._0x26d80a,
            participant: {
              ..._0x26d80a.participant,
              ..._0x185e99
            }
          });
          _0x42287c = true;
        }
      }
      if (_0x42287c) {
        return {
          channels: _0x29f82b
        };
      } else {
        return _0x64547c;
      }
    });
  },
  setActiveChannel: _0x326173 => {
    _0x4a18c4({
      activeChannelId: _0x326173
    });
  },
  getChannel: _0x17da68 => _0x53e2f6().channels.get(_0x17da68),
  getActiveChannel: () => {
    const {
      channels: _0x27b5b1,
      activeChannelId: _0x3061c3
    } = _0x53e2f6();
    if (_0x3061c3) {
      return _0x27b5b1.get(_0x3061c3);
    }
  },
  removeChannel: _0x13644b => {
    _0x4a18c4(_0x456420 => {
      const _0x203647 = new Map(_0x456420.channels);
      _0x203647.delete(_0x13644b);
      return {
        channels: _0x203647,
        activeChannelId: _0x456420.activeChannelId === _0x13644b ? null : _0x456420.activeChannelId
      };
    });
  },
  clear: () => {
    _0x4a18c4({
      channels: new Map(),
      activeChannelId: null
    });
  }
}));
const x = _0x2867d8 => R(_0x49b14e => {
  if (_0x2867d8) {
    return _0x49b14e.channels.get(_0x2867d8);
  }
});
const N = {
  updateParticipantByUserId: (_0x3f38c7, _0xd60bd0) => R.getState().updateParticipantByUserId(_0x3f38c7, _0xd60bd0),
  updateChannel: (_0x1e309b, _0x59ac4a) => R.getState().updateChannel(_0x1e309b, _0x59ac4a)
};
const U = _0x3b5a59()(_0x5f4fc4((_0x2ea25c, _0x1e52f3) => ({
  lastVisitedChannels: {},
  setLastVisitedChannel: (_0xdb581c, _0x35278f) => {
    if (_0x1e52f3().lastVisitedChannels[_0xdb581c] !== _0x35278f) {
      _0x2ea25c(_0x498b60 => ({
        lastVisitedChannels: {
          ..._0x498b60.lastVisitedChannels,
          [_0xdb581c]: _0x35278f
        }
      }));
    }
  },
  getLastVisitedChannel: _0x1e1030 => _0x1e52f3().lastVisitedChannels[_0x1e1030],
  removeGuild: _0x427cc9 => {
    _0x2ea25c(_0x3d5502 => {
      const {
        [_0x427cc9]: _0x18a6a5,
        ..._0x4732f6
      } = _0x3d5502.lastVisitedChannels;
      return {
        lastVisitedChannels: _0x4732f6
      };
    });
  },
  clear: () => {
    _0x2ea25c({
      lastVisitedChannels: {}
    });
  }
}), {
  name: "last-visited-channels"
}));
const P = {
  setLastVisitedChannel: (_0x2b3a88, _0x18f213) => U.getState().setLastVisitedChannel(_0x2b3a88, _0x18f213),
  getLastVisitedChannel: _0x1d6f25 => U.getState().getLastVisitedChannel(_0x1d6f25),
  removeGuild: _0x45adb9 => U.getState().removeGuild(_0x45adb9),
  clear: () => U.getState().clear()
};
const G = _0x3b5a59((_0x3b8506, _0x100134) => ({
  markers: new Map(),
  setMarker: (_0x3e39f1, _0x2eb374) => _0x3b8506(_0x5ddc98 => {
    const _0x24d279 = new Map(_0x5ddc98.markers);
    _0x24d279.set(_0x3e39f1, _0x2eb374);
    return {
      markers: _0x24d279
    };
  }),
  clearMarker: _0x537538 => _0x3b8506(_0x34b90d => {
    const _0xa8117e = new Map(_0x34b90d.markers);
    _0xa8117e.delete(_0x537538);
    return {
      markers: _0xa8117e
    };
  }),
  getMarker: _0x31397c => _0x100134().markers.get(_0x31397c),
  hasMarker: _0x29bcb5 => _0x100134().markers.has(_0x29bcb5)
}));
let z = 0;
const F = (() => {
  const _0xa30f52 = new Map();
  return {
    set: (_0x3f4585, _0x3ca4e9) => {
      _0xa30f52.set(_0x3f4585, _0x3ca4e9);
    },
    get: _0x8ff633 => _0xa30f52.get(_0x8ff633),
    delete: _0x157a55 => {
      const _0x3d4083 = _0xa30f52.get(_0x157a55);
      if (_0x3d4083) {
        clearTimeout(_0x3d4083);
        _0xa30f52.delete(_0x157a55);
      }
    },
    clear: () => {
      _0xa30f52.forEach(_0x547751 => clearTimeout(_0x547751));
      _0xa30f52.clear();
    },
    size: () => _0xa30f52.size
  };
})();
const j = _0x3b5a59((_0x142124, _0x3529c2) => ({
  notificationsById: {},
  notificationIds: [],
  addNotification: _0x40f0e3 => {
    const _0x114b4b = "notification_" + Date.now() + "_" + z++;
    const _0x51c8ed = {
      ..._0x40f0e3,
      id: _0x114b4b,
      timestamp: Date.now(),
      duration: _0x40f0e3.duration ?? 5000
    };
    _0x142124(_0x2d6924(_0x460103 => {
      _0x460103.notificationsById[_0x114b4b] = _0x51c8ed;
      _0x460103.notificationIds.push(_0x114b4b);
    }));
    if (_0x51c8ed.duration !== 0) {
      const _0x18f1da = setTimeout(() => {
        _0x3529c2().removeNotification(_0x114b4b);
      }, _0x51c8ed.duration);
      F.set(_0x114b4b, _0x18f1da);
    }
    return _0x114b4b;
  },
  removeNotification: _0x4c6020 => {
    F.delete(_0x4c6020);
    _0x142124(_0x2d6924(_0x38f4a2 => {
      delete _0x38f4a2.notificationsById[_0x4c6020];
      _0x38f4a2.notificationIds = _0x38f4a2.notificationIds.filter(_0x3cf2af => _0x3cf2af !== _0x4c6020);
    }));
  },
  clearAllNotifications: () => {
    F.clear();
    _0x142124(_0x2d6924(_0x390ab9 => {
      _0x390ab9.notificationsById = {};
      _0x390ab9.notificationIds = [];
    }));
  }
}));
const H = _0x1540e7 => _0x1540e7.notificationIds.map(_0x111b75 => _0x1540e7.notificationsById[_0x111b75]);
const B = () => j(_0x579b5e(H));
const W = _0x3b5a59((_0x2f2596, _0x514df0) => ({
  typingUsers: {},
  _timeouts: {},
  addTypingUser: (_0x22aa48, _0x4c191b) => {
    const _0x1ff679 = _0x514df0();
    const _0x4b7eac = _0x1ff679._timeouts[_0x22aa48]?.[_0x4c191b.user_id];
    if (_0x4b7eac) {
      clearTimeout(_0x4b7eac);
    }
    const _0x42d28a = setTimeout(() => {
      _0x514df0().removeTypingUser(_0x22aa48, _0x4c191b.user_id);
    }, 10000);
    _0x2f2596(_0x4c8fc0 => {
      const _0x388ed7 = _0x4c8fc0.typingUsers[_0x22aa48] || [];
      const _0x530f50 = _0x388ed7.findIndex(_0x174863 => _0x174863.user_id === _0x4c191b.user_id);
      let _0x27a5a3;
      if (_0x530f50 >= 0) {
        _0x27a5a3 = [..._0x388ed7];
        _0x27a5a3[_0x530f50] = _0x4c191b;
      } else {
        _0x27a5a3 = [..._0x388ed7, _0x4c191b];
      }
      return {
        typingUsers: {
          ..._0x4c8fc0.typingUsers,
          [_0x22aa48]: _0x27a5a3
        },
        _timeouts: {
          ..._0x4c8fc0._timeouts,
          [_0x22aa48]: {
            ..._0x4c8fc0._timeouts[_0x22aa48],
            [_0x4c191b.user_id]: _0x42d28a
          }
        }
      };
    });
  },
  removeTypingUser: (_0xfc3681, _0x2228c1) => {
    const _0x1554a5 = _0x514df0();
    const _0x4b1496 = _0x1554a5._timeouts[_0xfc3681]?.[_0x2228c1];
    if (_0x4b1496) {
      clearTimeout(_0x4b1496);
    }
    _0x2f2596(_0x558eff => {
      const _0x4bb086 = (_0x558eff.typingUsers[_0xfc3681] || []).filter(_0x17015b => _0x17015b.user_id !== _0x2228c1);
      const _0x453404 = {
        ..._0x558eff.typingUsers
      };
      const _0x171093 = {
        ..._0x558eff._timeouts
      };
      if (_0x4bb086.length > 0) {
        _0x453404[_0xfc3681] = _0x4bb086;
      } else {
        delete _0x453404[_0xfc3681];
      }
      if (_0x171093[_0xfc3681]) {
        const _0x8f90e1 = {
          ..._0x171093[_0xfc3681]
        };
        delete _0x8f90e1[_0x2228c1];
        if (Object.keys(_0x8f90e1).length > 0) {
          _0x171093[_0xfc3681] = _0x8f90e1;
        } else {
          delete _0x171093[_0xfc3681];
        }
      }
      return {
        typingUsers: _0x453404,
        _timeouts: _0x171093
      };
    });
  },
  clearChannelTyping: _0xcd129f => {
    const _0x28875f = _0x514df0()._timeouts[_0xcd129f];
    if (_0x28875f) {
      Object.values(_0x28875f).forEach(_0x50266c => clearTimeout(_0x50266c));
    }
    _0x2f2596(_0x59e83d => {
      const _0x2015a5 = {
        ..._0x59e83d.typingUsers
      };
      const _0x2b91dd = {
        ..._0x59e83d._timeouts
      };
      delete _0x2015a5[_0xcd129f];
      delete _0x2b91dd[_0xcd129f];
      return {
        typingUsers: _0x2015a5,
        _timeouts: _0x2b91dd
      };
    });
  }
}));
const q = [];
const Y = _0x95e0f2 => W(_0x579b5e(_0x52e734 => _0x52e734.typingUsers[_0x95e0f2] || q));
const V = {
  call: null,
  participants: [],
  incomingCall: null,
  status: "idle",
  error: null,
  isVideoEnabled: false,
  showSoloTimeoutModal: false,
  lastCallDuration: null
};
const J = _0x3b5a59(_0x4cd136 => ({
  ...V,
  setCall: _0x189f72 => _0x4cd136({
    call: _0x189f72
  }),
  setParticipants: _0x1f612a => _0x4cd136({
    participants: _0x1f612a
  }),
  setIncomingCall: _0x452cd3 => _0x4cd136({
    incomingCall: _0x452cd3
  }),
  setStatus: _0x7e3819 => _0x4cd136({
    status: _0x7e3819
  }),
  setError: _0x25b6c3 => _0x4cd136({
    error: _0x25b6c3
  }),
  setVideoEnabled: _0x16c411 => _0x4cd136({
    isVideoEnabled: _0x16c411
  }),
  setShowSoloTimeoutModal: _0x1d2dd0 => _0x4cd136({
    showSoloTimeoutModal: _0x1d2dd0
  }),
  setLastCallDuration: _0x45018a => _0x4cd136({
    lastCallDuration: _0x45018a
  }),
  startCallSession: _0x5acdaa => {
    _0x1fceac();
    _0x4cd136({
      call: _0x5acdaa.call,
      participants: _0x5acdaa.participants,
      incomingCall: null,
      status: _0x5acdaa.call.status === "ringing" ? "ringing" : "ongoing",
      error: null
    });
  },
  endCall: () => {
    _0x1fceac();
    _0x4cd136({
      ...V,
      status: "ended"
    });
  },
  dismissIncomingCall: () => {
    _0x1fceac();
    _0x4cd136({
      incomingCall: null
    });
  },
  reset: () => {
    _0x1fceac();
    _0x4cd136(V);
  }
}));
const X = _0x460dbb => _0x460dbb.incomingCall;
const Z = () => J(X);
const K = () => J(_0x2e52ca => _0x2e52ca.status);
const Q = () => J(_0x2f1153 => _0x2f1153.showSoloTimeoutModal);
const ee = _0x1d7ad4.create({
  withCredentials: false,
  headers: {
    "X-Client-Type": _0x204f2b
  }
});
function te(_0x350d69) {
  const _0x5b29b4 = _0x1d7ad4.create({
    baseURL: _0x350d69,
    withCredentials: false,
    headers: {
      "X-Client-Type": _0x204f2b
    }
  });
  _0x58ac1d(_0x5b29b4);
  _0x5b29b4.interceptors.request.use(_0x335eb6 => {
    const {
      accessToken: _0x567aef
    } = _0x22aaa1.getState();
    if (_0x567aef) {
      _0x335eb6.headers.Authorization = "Bearer " + _0x567aef;
    }
    const _0xd2c99f = {
      tr: "tr-TR",
      en: "en-US",
      az: "az-AZ",
      uz: "uz-UZ"
    };
    const _0x1dc14c = _0x3f90ba.language || "en";
    _0x335eb6.headers["Accept-Language"] = _0xd2c99f[_0x1dc14c] || _0xd2c99f.en;
    return _0x335eb6;
  });
  _0x5b29b4.interceptors.response.use(undefined, _0xGuildErr => {
    try {
      const _0xGuildData = _0xGuildErr?.response?.data;
      const _0xGuildStr = (_0xGuildData && typeof _0xGuildData == "object") ? ((typeof _0xGuildData.message == "string" ? _0xGuildData.message : "") + " " + (typeof _0xGuildData.error == "string" ? _0xGuildData.error : "") + " " + (typeof _0xGuildData.detail == "string" ? _0xGuildData.detail : "")) : (typeof _0xGuildData == "string" ? _0xGuildData : "");
      const _0xGuildWords = ["abonelik", "subscription", "nexus", "premium", "yeterli", "sufficient", "gerekli", "upgrade", "farklı sunucu", "cross-guild", "cross guild"];
      if (_0xGuildStr.trim().length > 0 && _0xGuildWords.some(_0xw => _0xGuildStr.toLowerCase().includes(_0xw))) {
        _0xGuildErr._nexusSubError = true;
      }
    } catch (_0xe) {}
    return Promise.reject(_0xGuildErr);
  });
  return _0x5b29b4;
}
_0x58ac1d(ee);
ee.interceptors.request.use(_0xadaee0 => {
  const {
    activeInstance: _0x3d84cf
  } = de.getState();
  if (!_0x3d84cf?.url) {
    return Promise.reject(new Error("No active instance selected"));
  }
  _0xadaee0.baseURL = _0x3d84cf.url;
  const {
    accessToken: _0x5a771a
  } = _0x22aaa1.getState();
  if (_0x5a771a) {
    _0xadaee0.headers.Authorization = "Bearer " + _0x5a771a;
  }
  const _0x3e901a = {
    tr: "tr-TR",
    en: "en-US",
    az: "az-AZ",
    uz: "uz-UZ"
  };
  const _0x553528 = _0x3f90ba.language || "en";
  _0xadaee0.headers["Accept-Language"] = _0x3e901a[_0x553528] || _0x3e901a.en;
  return _0xadaee0;
}, _0x577b62 => Promise.reject(_0x577b62));
ee.interceptors.response.use(_0x3e3a19 => _0x3e3a19, _0x50ca16 => {
  try {
    const _0xEeData = _0x50ca16?.response?.data;
    const _0xEeStr = (_0xEeData && typeof _0xEeData == "object") ? ((typeof _0xEeData.message == "string" ? _0xEeData.message : "") + " " + (typeof _0xEeData.error == "string" ? _0xEeData.error : "") + " " + (typeof _0xEeData.detail == "string" ? _0xEeData.detail : "")) : (typeof _0xEeData == "string" ? _0xEeData : "");
    const _0xEeWords = ["abonelik", "subscription", "nexus", "premium", "yeterli", "sufficient", "gerekli", "upgrade", "farklı sunucu", "cross-guild", "cross guild"];
    if (_0xEeStr.trim().length > 0 && _0xEeWords.some(_0xw => _0xEeStr.toLowerCase().includes(_0xw))) {
      _0x50ca16._nexusSubError = true;
    }
  } catch (_0xe) {}
  console.error("[instanceAxios] Request failed:", _0x50ca16?.response?.status, _0x50ca16?.config?.url);
  return Promise.reject(_0x50ca16);
});
class ne {
  ws = null;
  instanceId;
  wsUrl;
  status = "disconnected";
  heartbeatInterval = null;
  heartbeatTimer = null;
  reconnectTimer = null;
  reconnectAttempts = 0;
  maxReconnectAttempts = 10;
  reconnectDelay = 1000;
  lastSequence = 0;
  sessionId = null;
  isManualDisconnect = false;
  onStatusChange;
  onEvent;
  eventListeners = new Set();
  constructor(_0x4014ff) {
    this.instanceId = _0x4014ff.instanceId;
    const _0x1ee4f5 = new URL(_0x4014ff.instanceUrl);
    const _0x2bb8c3 = _0x1ee4f5.protocol === "https:" ? "wss:" : "ws:";
    const _0x268180 = parseInt(_0x1ee4f5.port || (_0x1ee4f5.protocol === "https:" ? "443" : "80")) + 1;
    this.wsUrl = _0x2bb8c3 + "//" + _0x1ee4f5.hostname + ":" + _0x268180;
    this.onStatusChange = _0x4014ff.onStatusChange;
    this.onEvent = _0x4014ff.onEvent;
  }
  addEventListener(_0x493af6) {
    this.eventListeners.add(_0x493af6);
    return () => this.eventListeners.delete(_0x493af6);
  }
  connect() {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN && this.ws.readyState !== WebSocket.CONNECTING) {
      this.isManualDisconnect = false;
      this.updateStatus("connecting");
      try {
        this.ws = new WebSocket(this.wsUrl);
        this.setupEventHandlers();
      } catch (_0x3c5589) {
        console.error("[InstanceWS:" + this.instanceId + "] Connection error:", _0x3c5589);
        this.updateStatus("error");
        this.scheduleReconnect();
      }
    } else {
      console.log("[InstanceWS:" + this.instanceId + "] Already connected or connecting");
    }
  }
  disconnect() {
    this.isManualDisconnect = true;
    this.cleanup();
    this.updateStatus("disconnected");
  }
  getStatus() {
    return this.status;
  }
  getInstanceId() {
    return this.instanceId;
  }
  send(_0x4d2406) {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      console.warn("[InstanceWS:" + this.instanceId + "] Cannot send - not connected");
      return false;
    }
    try {
      this.ws.send(JSON.stringify(_0x4d2406));
      return true;
    } catch (_0xbe034a) {
      console.error("[InstanceWS:" + this.instanceId + "] Send error:", _0xbe034a);
      return false;
    }
  }
  sendTyping(_0x165f47) {
    this.send({
      op: _0x2e96d8.DISPATCH,
      t: "TYPING_START",
      d: {
        channel_id: _0x165f47
      }
    });
  }
  setupEventHandlers() {
    if (this.ws) {
      this.ws.onopen = () => {
        console.log("[InstanceWS:" + this.instanceId + "] Connected");
        this.reconnectAttempts = 0;
      };
      this.ws.onclose = _0xa26d48 => {
        console.log("[InstanceWS:" + this.instanceId + "] Closed:", _0xa26d48.code, _0xa26d48.reason);
        this.stopHeartbeat();
        if (this.isManualDisconnect) {
          this.updateStatus("disconnected");
        } else {
          this.updateStatus("reconnecting");
          this.scheduleReconnect();
        }
      };
      this.ws.onerror = _0xfb2f6b => {
        console.error("[InstanceWS:" + this.instanceId + "] Error:", _0xfb2f6b);
        this.updateStatus("error");
      };
      this.ws.onmessage = _0x1728a8 => {
        this.handleMessage(_0x1728a8.data);
      };
    }
  }
  handleMessage(_0x370d69) {
    try {
      const _0x400b99 = JSON.parse(_0x370d69);
      if (_0x400b99.s !== undefined && _0x400b99.s > this.lastSequence) {
        this.lastSequence = _0x400b99.s;
      }
      switch (_0x400b99.op) {
        case _0x2e96d8.HELLO:
          this.handleHello(_0x400b99.d);
          break;
        case _0x2e96d8.HEARTBEAT:
          this.sendHeartbeat();
          break;
        case _0x2e96d8.HEARTBEAT_ACK:
          break;
        case _0x2e96d8.DISPATCH:
          this.handleDispatch(_0x400b99.t || "", _0x400b99.d);
          break;
        case _0x2e96d8.INVALID_SESSION:
          console.warn("[InstanceWS:" + this.instanceId + "] Invalid session, reconnecting...");
          this.sessionId = null;
          this.scheduleReconnect(true);
          break;
        case _0x2e96d8.RECONNECT:
          console.log("[InstanceWS:" + this.instanceId + "] Server requested reconnect");
          this.scheduleReconnect(true);
          break;
        default:
          console.log("[InstanceWS:" + this.instanceId + "] Unknown opcode:", _0x400b99.op);
      }
    } catch (_0x245dbc) {
      console.error("[InstanceWS:" + this.instanceId + "] Message parse error:", _0x245dbc);
    }
  }
  handleHello(_0x3d58a5) {
    console.log("[InstanceWS:" + this.instanceId + "] Received HELLO, heartbeat interval:", _0x3d58a5.heartbeat_interval);
    this.heartbeatInterval = _0x3d58a5.heartbeat_interval;
    this.startHeartbeat();
    this.sendIdentify();
  }
  sendIdentify() {
    const _0x5e1096 = _0x22aaa1.getState().accessToken;
    if (!_0x5e1096) {
      console.error("[InstanceWS:" + this.instanceId + "] No auth token for IDENTIFY");
      this.disconnect();
      return;
    }
    const _0x31926d = {
      op: _0x2e96d8.IDENTIFY,
      d: {
        token: _0x5e1096,
        properties: {
          os: navigator.platform,
          browser: "Jubbio Desktop",
          device: "desktop"
        },
        ...(this.sessionId && {
          session_id: this.sessionId,
          seq: this.lastSequence
        })
      }
    };
    this.send(_0x31926d);
    this.updateStatus("connected");
  }
  handleDispatch(_0x441711, _0x39020b) {
    if (_0x441711 === "READY") {
      this.sessionId = _0x39020b?.session_id;
      console.log("[InstanceWS:" + this.instanceId + "] Ready, session:", this.sessionId);
    }
    this.emitEvent(_0x441711, _0x39020b);
    _0x365c6c.emit("instance:" + this.instanceId + ":" + _0x441711.toLowerCase(), _0x39020b);
    _0x365c6c.emit("instance_event", {
      instanceId: this.instanceId,
      eventType: _0x441711,
      eventData: _0x39020b
    });
  }
  emitEvent(_0x201a2f, _0x11cf9e) {
    if (this.onEvent) {
      this.onEvent(_0x201a2f, _0x11cf9e);
    }
    this.eventListeners.forEach(_0x3d2d78 => {
      try {
        _0x3d2d78(_0x201a2f, _0x11cf9e);
      } catch (_0x243e9a) {
        console.error("[InstanceWS:" + this.instanceId + "] Event listener error:", _0x243e9a);
      }
    });
  }
  startHeartbeat() {
    this.stopHeartbeat();
    if (this.heartbeatInterval) {
      this.heartbeatTimer = setInterval(() => {
        this.sendHeartbeat();
      }, this.heartbeatInterval);
      this.sendHeartbeat();
    }
  }
  stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
  }
  sendHeartbeat() {
    this.send({
      op: _0x2e96d8.HEARTBEAT,
      d: this.lastSequence
    });
  }
  scheduleReconnect(_0x32f879 = false) {
    if (this.isManualDisconnect) {
      return;
    }
    if (this.reconnectTimer) {
      return;
    }
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.error("[InstanceWS:" + this.instanceId + "] Max reconnect attempts reached");
      this.updateStatus("error");
      return;
    }
    const _0x3eded6 = _0x32f879 ? 100 : Math.min(this.reconnectDelay * Math.pow(2, this.reconnectAttempts), 30000);
    console.log("[InstanceWS:" + this.instanceId + "] Reconnecting in " + _0x3eded6 + "ms (attempt " + (this.reconnectAttempts + 1) + ")");
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null;
      this.reconnectAttempts++;
      this.connect();
    }, _0x3eded6);
  }
  cleanup() {
    this.stopHeartbeat();
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    if (this.ws) {
      this.ws.onopen = null;
      this.ws.onclose = null;
      this.ws.onerror = null;
      this.ws.onmessage = null;
      if (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING) {
        this.ws.close(1000, "Client disconnect");
      }
      this.ws = null;
    }
  }
  updateStatus(_0x4c228b) {
    if (this.status !== _0x4c228b) {
      this.status = _0x4c228b;
      if (this.onStatusChange) {
        this.onStatusChange(_0x4c228b);
      }
      _0x365c6c.emit("instance_ws_status", {
        instanceId: this.instanceId,
        status: _0x4c228b
      });
    }
  }
}
const ae = new class {
  connections = new Map();
  activeInstanceId = null;
  connect(_0x578d22, _0x45667e) {
    let _0x522ba6 = this.connections.get(_0x578d22);
    if (!_0x522ba6) {
      _0x522ba6 = new ne({
        instanceId: _0x578d22,
        instanceUrl: _0x45667e,
        onStatusChange: _0x38f67a => {
          console.log("[InstanceWSManager] Instance " + _0x578d22 + " status:", _0x38f67a);
        }
      });
      this.connections.set(_0x578d22, _0x522ba6);
    }
    if (_0x522ba6.getStatus() === "disconnected") {
      _0x522ba6.connect();
    }
    return _0x522ba6;
  }
  disconnect(_0x487398) {
    const _0x15e6a7 = this.connections.get(_0x487398);
    if (_0x15e6a7) {
      _0x15e6a7.disconnect();
      this.connections.delete(_0x487398);
    }
  }
  disconnectAll() {
    this.connections.forEach(_0x5c47fb => {
      _0x5c47fb.disconnect();
    });
    this.connections.clear();
    this.activeInstanceId = null;
  }
  getService(_0x35b7ab) {
    return this.connections.get(_0x35b7ab);
  }
  setActiveInstance(_0x50f522) {
    this.activeInstanceId = _0x50f522;
  }
  getActiveService() {
    if (this.activeInstanceId) {
      return this.connections.get(this.activeInstanceId);
    }
  }
  getConnectedInstances() {
    return Array.from(this.connections.entries()).filter(([_0x561f56, _0x47dbb5]) => _0x47dbb5.getStatus() === "connected").map(([_0xbced4a]) => _0xbced4a);
  }
}();
const de = _0x3b5a59((_0x206238, _0x3f56e2) => ({
  instances: [],
  instanceStates: new Map(),
  activeInstance: null,
  activeInstanceGuildId: null,
  activeGuildState: null,
  isLoading: false,
  isLoaded: false,
  error: null,
  loadInstances: async () => {
    const {
      isLoading: _0x972f5b,
      isLoaded: _0x25cdfb
    } = _0x3f56e2();
    if (!_0x972f5b && !_0x25cdfb) {
      _0x206238({
        isLoading: true,
        error: null
      });
      try {
        let _0x81dc41 = (await _0x44b99c.get("/api/v1/federation/instances/joined")).data.instances || [];
        0;
        const _0x478238 = new Map();
        _0x81dc41.forEach(_0x1e776a => {
          _0x478238.set(_0x1e776a.id, {
            guilds: [],
            isExpanded: false,
            isLoadingGuilds: false,
            guildsLoaded: false,
            wsStatus: "disconnected",
            error: null
          });
        });
        _0x206238({
          instances: _0x81dc41,
          instanceStates: _0x478238,
          isLoading: false,
          isLoaded: true
        });
      } catch (_0x227c44) {
        if (_0x227c44?.response?.status !== 401 && _0x227c44?.response?.status !== 404) {
          console.error("Failed to load instances:", _0x227c44);
          _0x206238({
            error: "Failed to load instances"
          });
        }
        _0x206238({
          isLoading: false,
          isLoaded: true
        });
      }
    }
  },
  setActiveInstance: (_0x214e02, _0x3aafa4 = null) => {
    const _0x504134 = _0x3f56e2().activeInstance;
    if (!!_0x504134 && (!_0x214e02 || _0x504134.id !== _0x214e02.id)) {
      ae.disconnect(_0x504134.id);
    }
    _0x206238({
      activeInstance: _0x214e02,
      activeInstanceGuildId: _0x3aafa4,
      activeGuildState: null
    });
    if (_0x214e02) {
      ae.setActiveInstance(_0x214e02.id);
      ae.connect(_0x214e02.id, _0x214e02.url).addEventListener((_0x493b4d, _0x165419) => {
        _0x3f56e2().handleWSEvent(_0x493b4d, _0x165419);
      });
      if (_0x3aafa4) {
        _0x3f56e2().selectGuild(_0x3aafa4);
      }
    } else {
      ae.setActiveInstance(null);
    }
  },
  toggleInstanceExpanded: _0x25babe => {
    const {
      instanceStates: _0xe3c045,
      instances: _0x7269e5
    } = _0x3f56e2();
    const _0x1b517a = _0xe3c045.get(_0x25babe);
    if (!_0x1b517a) {
      return;
    }
    const _0x2fcff3 = new Map(_0xe3c045);
    const _0x1752ad = !_0x1b517a.isExpanded;
    _0x2fcff3.set(_0x25babe, {
      ..._0x1b517a,
      isExpanded: _0x1752ad
    });
    _0x206238({
      instanceStates: _0x2fcff3
    });
    if (_0x1752ad && !_0x1b517a.guildsLoaded && !_0x1b517a.isLoadingGuilds) {
      const _0x137646 = _0x7269e5.find(_0xbca6db => _0xbca6db.id === _0x25babe);
      if (_0x137646) {
        _0x3f56e2().loadInstanceGuilds(_0x137646);
      }
    }
  },
  loadInstanceGuilds: async _0x4bae87 => {
    const {
      instanceStates: _0x23f016
    } = _0x3f56e2();
    const _0x59d2c9 = _0x23f016.get(_0x4bae87.id);
    if (!_0x59d2c9 || _0x59d2c9.isLoadingGuilds) {
      return;
    }
    const _0x5ddc90 = new Map(_0x23f016);
    _0x5ddc90.set(_0x4bae87.id, {
      ..._0x59d2c9,
      isLoadingGuilds: true,
      error: null
    });
    _0x206238({
      instanceStates: _0x5ddc90
    });
    try {
      0;
      const _0x2c6ff9 = te(_0x4bae87.url);
      const _0x246403 = await _0x2c6ff9.get("/api/v1/guilds");
      const _0x8ea517 = (_0x246403.data.guilds || _0x246403.data || []).map(_0x488d02 => ({
        id: String(_0x488d02.id),
        name: _0x488d02.name,
        avatar_url: _0x488d02.icon || _0x488d02.avatar_url || null,
        member_count: _0x488d02.member_count,
        owner_id: _0x488d02.owner_id ? String(_0x488d02.owner_id) : undefined,
        banner_url: _0x488d02.banner_url || null
      }));
      const _0x23ce84 = new Map(_0x3f56e2().instanceStates);
      _0x23ce84.set(_0x4bae87.id, {
        ..._0x23ce84.get(_0x4bae87.id),
        guilds: _0x8ea517,
        isLoadingGuilds: false,
        guildsLoaded: true,
        error: null
      });
      _0x206238({
        instanceStates: _0x23ce84
      });
    } catch (_0x5434af) {
      console.error("Failed to load guilds from instance " + _0x4bae87.name + ":", _0x5434af);
      const _0x301f87 = new Map(_0x3f56e2().instanceStates);
      const _0xedcd96 = _0x301f87.get(_0x4bae87.id);
      _0x301f87.set(_0x4bae87.id, {
        ..._0xedcd96,
        isLoadingGuilds: false,
        guildsLoaded: true,
        error: _0x5434af?.message || "Bağlantı hatası"
      });
      _0x206238({
        instanceStates: _0x301f87
      });
    }
  },
  selectGuild: async _0x3850e4 => {
    const {
      activeInstance: _0x51bcd3,
      activeInstanceGuildId: _0x516ca7,
      activeGuildState: _0x5c78d9
    } = _0x3f56e2();
    if (_0x51bcd3) {
      if (_0x516ca7 !== _0x3850e4 || !_0x5c78d9?.guild) {
        _0x206238({
          activeInstanceGuildId: _0x3850e4,
          activeGuildState: {
            guild: null,
            channels: [],
            categories: [],
            members: [],
            activeChannelId: null,
            messages: new Map(),
            unreadCounts: new Map(),
            typingUsers: new Map(),
            isLoadingGuild: true,
            isLoadingChannels: false,
            isLoadingMembers: false,
            error: null
          }
        });
        await _0x3f56e2().loadGuildData(_0x3850e4);
      }
    }
  },
  selectChannel: _0x2ccaaf => {
    const _0x228646 = _0x3f56e2().activeGuildState;
    if (_0x228646) {
      _0x206238({
        activeGuildState: {
          ..._0x228646,
          activeChannelId: _0x2ccaaf
        }
      });
      _0x3f56e2().clearUnread(_0x2ccaaf);
    }
  },
  loadGuildData: async _0x41f9c4 => {
    const {
      activeInstance: _0x4a60c0,
      activeGuildState: _0x5328f0
    } = _0x3f56e2();
    if (_0x4a60c0) {
      try {
        const _0x39002f = te(_0x4a60c0.url);
        const [_0x4b1d63, _0x16218e] = await Promise.all([_0x39002f.get("/api/v1/guilds/" + _0x41f9c4), _0x39002f.get("/api/v1/guilds/" + _0x41f9c4 + "/channels")]);
        const _0x5cb557 = _0x4b1d63.data;
        const _0x4fa976 = {
          id: String(_0x5cb557.id),
          name: _0x5cb557.name,
          avatar_url: _0x5cb557.icon || _0x5cb557.avatar_url || null,
          member_count: _0x5cb557.member_count,
          owner_id: _0x5cb557.owner_id ? String(_0x5cb557.owner_id) : undefined,
          banner_url: _0x5cb557.banner_url || null
        };
        const _0x540b83 = _0x16218e.data || [];
        const _0x27e2ee = [];
        _0x540b83.forEach(_0x2d5ecb => {
          _0x2d5ecb.channels.forEach(_0x45ad39 => {
            _0x27e2ee.push({
              ..._0x45ad39,
              category_id: _0x2d5ecb.category_id,
              category_name: _0x2d5ecb.category_name
            });
          });
        });
        const _0x48b31a = _0x27e2ee.find(_0x261edf => _0x261edf.type === "text");
        _0x206238({
          activeGuildState: {
            ..._0x5328f0,
            guild: _0x4fa976,
            channels: _0x27e2ee,
            categories: _0x540b83,
            activeChannelId: _0x48b31a?.id || null,
            isLoadingGuild: false,
            error: null
          }
        });
        _0x3f56e2().loadGuildMembers(_0x41f9c4);
      } catch (_0x382139) {
        console.error("Failed to load guild data:", _0x382139);
        _0x206238({
          activeGuildState: {
            ..._0x5328f0,
            isLoadingGuild: false,
            error: _0x382139?.message || "Guild yüklenemedi"
          }
        });
      }
    }
  },
  loadGuildMembers: async _0x433f03 => {
    const {
      activeInstance: _0x51fe3d,
      activeGuildState: _0x16be82
    } = _0x3f56e2();
    if (_0x51fe3d && _0x16be82) {
      _0x206238({
        activeGuildState: {
          ..._0x16be82,
          isLoadingMembers: true
        }
      });
      try {
        const _0x4962a2 = te(_0x51fe3d.url);
        const _0x3cfc37 = (await _0x4962a2.get("/api/v1/guilds/" + _0x433f03 + "/members")).data.presence_groups || [];
        _0x206238({
          activeGuildState: {
            ..._0x3f56e2().activeGuildState,
            members: _0x3cfc37,
            isLoadingMembers: false
          }
        });
      } catch (_0x3ceeb2) {
        console.error("Failed to load members:", _0x3ceeb2);
        _0x206238({
          activeGuildState: {
            ..._0x3f56e2().activeGuildState,
            isLoadingMembers: false
          }
        });
      }
    }
  },
  loadChannelMessages: async (_0x4c4366, _0x3218a5) => {
    const {
      activeInstance: _0x27d480,
      activeInstanceGuildId: _0x433c9e
    } = _0x3f56e2();
    if (!_0x27d480 || !_0x433c9e) {
      return [];
    }
    try {
      const _0x57518a = te(_0x27d480.url);
      const _0xfe114d = {
        limit: 50
      };
      if (_0x3218a5) {
        _0xfe114d.before = _0x3218a5;
      }
      const _0xc6cc52 = await _0x57518a.get("/api/v1/guilds/" + _0x433c9e + "/channels/" + _0x4c4366 + "/messages", {
        params: _0xfe114d
      });
      const _0x195c2d = (_0xc6cc52.data.messages || _0xc6cc52.data || []).map(_0x299420 => ({
        id: String(_0x299420.id || _0x299420.message_id),
        content: _0x299420.content || "",
        author_id: _0x299420.author_id || _0x299420.user_id,
        author: {
          id: _0x299420.author?.id || _0x299420.author_id || _0x299420.user_id,
          username: _0x299420.author?.username || _0x299420.username || "",
          display_name: _0x299420.author?.display_name || _0x299420.display_name,
          avatar_url: _0x299420.author?.avatar_url || _0x299420.avatar_url,
          color: _0x299420.author?.color || _0x299420.color
        },
        channel_id: _0x4c4366,
        guild_id: String(_0x299420.guild_id),
        created_at: _0x299420.created_at,
        edited_at: _0x299420.edited_at,
        attachments: _0x299420.attachments,
        reply_to_id: _0x299420.reply_to_id,
        reply_to: _0x299420.reply_to,
        reactions: _0x299420.reactions,
        is_pinned: _0x299420.is_pinned,
        type: _0x299420.type
      }));
      _0x195c2d.reverse();
      if (_0x3218a5) {
        _0x3f56e2().prependMessages(_0x4c4366, _0x195c2d);
      } else {
        _0x3f56e2().setMessages(_0x4c4366, _0x195c2d);
      }
      return _0x195c2d;
    } catch (_0x4bb984) {
      console.error("Failed to load messages:", _0x4bb984);
      return [];
    }
  },
  addMessage: (_0xce790e, _0x32521f) => {
    const _0x5c38c6 = _0x3f56e2().activeGuildState;
    if (!_0x5c38c6) {
      return;
    }
    const _0x1b4b13 = _0x5c38c6.messages.get(_0xce790e) || [];
    const _0x49b970 = new Map(_0x5c38c6.messages);
    _0x49b970.set(_0xce790e, [..._0x1b4b13, _0x32521f]);
    _0x206238({
      activeGuildState: {
        ..._0x5c38c6,
        messages: _0x49b970
      }
    });
  },
  updateMessage: (_0x44e855, _0x336683, _0x43a2c8) => {
    const _0x46e997 = _0x3f56e2().activeGuildState;
    if (!_0x46e997) {
      return;
    }
    const _0x1ee59e = _0x46e997.messages.get(_0x44e855) || [];
    const _0x1bfee2 = new Map(_0x46e997.messages);
    _0x1bfee2.set(_0x44e855, _0x1ee59e.map(_0x1addcc => _0x1addcc.id === _0x336683 ? {
      ..._0x1addcc,
      ..._0x43a2c8
    } : _0x1addcc));
    _0x206238({
      activeGuildState: {
        ..._0x46e997,
        messages: _0x1bfee2
      }
    });
  },
  deleteMessage: (_0x31726a, _0x57e166) => {
    const _0x3a3dd8 = _0x3f56e2().activeGuildState;
    if (!_0x3a3dd8) {
      return;
    }
    const _0x23a40d = _0x3a3dd8.messages.get(_0x31726a) || [];
    const _0x296156 = new Map(_0x3a3dd8.messages);
    _0x296156.set(_0x31726a, _0x23a40d.filter(_0x5c28a8 => _0x5c28a8.id !== _0x57e166));
    _0x206238({
      activeGuildState: {
        ..._0x3a3dd8,
        messages: _0x296156
      }
    });
  },
  setMessages: (_0x191f6e, _0x3710d4) => {
    const _0x5c4bcb = _0x3f56e2().activeGuildState;
    if (!_0x5c4bcb) {
      return;
    }
    const _0x274407 = new Map(_0x5c4bcb.messages);
    _0x274407.set(_0x191f6e, _0x3710d4);
    _0x206238({
      activeGuildState: {
        ..._0x5c4bcb,
        messages: _0x274407
      }
    });
  },
  prependMessages: (_0x25908f, _0x1f505d) => {
    const _0x5e965d = _0x3f56e2().activeGuildState;
    if (!_0x5e965d) {
      return;
    }
    const _0x215c0e = _0x5e965d.messages.get(_0x25908f) || [];
    const _0x47acf6 = new Map(_0x5e965d.messages);
    _0x47acf6.set(_0x25908f, [..._0x1f505d, ..._0x215c0e]);
    _0x206238({
      activeGuildState: {
        ..._0x5e965d,
        messages: _0x47acf6
      }
    });
  },
  setTypingUser: (_0x574ec1, _0x288dff, _0x33f72b) => {
    const _0x3e1f3d = _0x3f56e2().activeGuildState;
    if (!_0x3e1f3d) {
      return;
    }
    const _0x25c093 = new Map(_0x3e1f3d.typingUsers);
    const _0x18bb89 = new Set(_0x25c093.get(_0x574ec1) || []);
    if (_0x33f72b) {
      _0x18bb89.add(_0x288dff);
    } else {
      _0x18bb89.delete(_0x288dff);
    }
    _0x25c093.set(_0x574ec1, _0x18bb89);
    _0x206238({
      activeGuildState: {
        ..._0x3e1f3d,
        typingUsers: _0x25c093
      }
    });
    if (_0x33f72b) {
      setTimeout(() => {
        _0x3f56e2().setTypingUser(_0x574ec1, _0x288dff, false);
      }, 8000);
    }
  },
  incrementUnread: _0x51b7fc => {
    const _0x4c6b36 = _0x3f56e2().activeGuildState;
    if (!_0x4c6b36) {
      return;
    }
    if (_0x4c6b36.activeChannelId === _0x51b7fc) {
      return;
    }
    const _0x343b5f = new Map(_0x4c6b36.unreadCounts);
    const _0x13c381 = _0x343b5f.get(_0x51b7fc) || 0;
    _0x343b5f.set(_0x51b7fc, _0x13c381 + 1);
    _0x206238({
      activeGuildState: {
        ..._0x4c6b36,
        unreadCounts: _0x343b5f
      }
    });
  },
  clearUnread: _0x5cbdfb => {
    const _0x5ec7e8 = _0x3f56e2().activeGuildState;
    if (!_0x5ec7e8) {
      return;
    }
    const _0x270492 = new Map(_0x5ec7e8.unreadCounts);
    _0x270492.delete(_0x5cbdfb);
    _0x206238({
      activeGuildState: {
        ..._0x5ec7e8,
        unreadCounts: _0x270492
      }
    });
  },
  updateWSStatus: (_0x495787, _0xfe244e) => {
    const {
      instanceStates: _0x5793d2
    } = _0x3f56e2();
    const _0x1b3fbb = _0x5793d2.get(_0x495787);
    if (!_0x1b3fbb) {
      return;
    }
    const _0x7a4657 = new Map(_0x5793d2);
    _0x7a4657.set(_0x495787, {
      ..._0x1b3fbb,
      wsStatus: _0xfe244e
    });
    _0x206238({
      instanceStates: _0x7a4657
    });
  },
  disconnectInstance: _0x310d7f => {
    ae.disconnect(_0x310d7f);
    const {
      activeInstance: _0x5279af
    } = _0x3f56e2();
    if (_0x5279af?.id === _0x310d7f) {
      _0x206238({
        activeInstance: null,
        activeInstanceGuildId: null,
        activeGuildState: null
      });
    }
  },
  clearInstances: () => {
    ae.disconnectAll();
    _0x206238({
      instances: [],
      instanceStates: new Map(),
      activeInstance: null,
      activeInstanceGuildId: null,
      activeGuildState: null,
      error: null,
      isLoaded: false
    });
  },
  handleWSEvent: (_0x2ba40f, _0x5a053e) => {
    const {
      activeGuildState: _0x168a67,
      activeInstanceGuildId: _0x4b2745
    } = _0x3f56e2();
    if (!_0x168a67) {
      return;
    }
    const _0x4a323a = String(_0x5a053e.guild_id);
    if (_0x4a323a === _0x4b2745) {
      switch (_0x2ba40f) {
        case "MESSAGE_CREATED":
        case "MESSAGE_CREATE":
          {
            const _0x24b107 = {
              id: String(_0x5a053e.id || _0x5a053e.message_id),
              content: _0x5a053e.content || "",
              author_id: _0x5a053e.author_id || _0x5a053e.user_id,
              author: {
                id: _0x5a053e.author?.id || _0x5a053e.author_id || _0x5a053e.user_id,
                username: _0x5a053e.author?.username || _0x5a053e.username || "",
                display_name: _0x5a053e.author?.display_name || _0x5a053e.display_name,
                avatar_url: _0x5a053e.author?.avatar_url || _0x5a053e.avatar_url,
                color: _0x5a053e.author?.color || _0x5a053e.color
              },
              channel_id: String(_0x5a053e.channel_id),
              guild_id: _0x4a323a,
              created_at: _0x5a053e.created_at || new Date().toISOString(),
              attachments: _0x5a053e.attachments,
              reply_to_id: _0x5a053e.reply_to_id,
              reply_to: _0x5a053e.reply_to,
              type: _0x5a053e.type
            };
            _0x3f56e2().addMessage(_0x24b107.channel_id, _0x24b107);
            _0x3f56e2().incrementUnread(_0x24b107.channel_id);
            _0x3f56e2().setTypingUser(_0x24b107.channel_id, _0x24b107.author_id, false);
            break;
          }
        case "MESSAGE_UPDATED":
        case "MESSAGE_UPDATE":
          _0x3f56e2().updateMessage(String(_0x5a053e.channel_id), String(_0x5a053e.id || _0x5a053e.message_id), {
            content: _0x5a053e.content,
            edited_at: _0x5a053e.edited_at || new Date().toISOString()
          });
          break;
        case "MESSAGE_DELETED":
        case "MESSAGE_DELETE":
          _0x3f56e2().deleteMessage(String(_0x5a053e.channel_id), String(_0x5a053e.id || _0x5a053e.message_id));
          break;
        case "TYPING_START":
          _0x3f56e2().setTypingUser(String(_0x5a053e.channel_id), _0x5a053e.user_id, true);
          break;
        case "PRESENCE_UPDATE":
          break;
        case "CHANNEL_CREATED":
        case "CHANNEL_UPDATED":
        case "CHANNEL_DELETED":
          if (_0x4b2745) {
            _0x3f56e2().loadGuildData(_0x4b2745);
          }
          break;
        case "MEMBER_JOINED":
        case "MEMBER_LEFT":
        case "MEMBER_UPDATED":
          if (_0x4b2745) {
            _0x3f56e2().loadGuildMembers(_0x4b2745);
          }
      }
    }
  }
}));
const ue = _0x3b5a59((_0x32dbe5, _0x1ef6e1) => ({
  atBottom: new Map(),
  setAtBottom: (_0x3c74f4, _0x35c5c2) => _0x32dbe5(_0x891a1e => {
    const _0x4eddb6 = new Map(_0x891a1e.atBottom);
    _0x4eddb6.set(_0x3c74f4, _0x35c5c2);
    return {
      atBottom: _0x4eddb6
    };
  }),
  isAtBottom: _0x115eef => _0x1ef6e1().atBottom.get(_0x115eef) ?? false
}));
const se = {
  setAtBottom: (_0x2eca6f, _0x364f1c) => ue.getState().setAtBottom(_0x2eca6f, _0x364f1c),
  isAtBottom: _0x29addb => ue.getState().isAtBottom(_0x29addb)
};
const re = _0x6b012f => ue(_0x58cb19 => !!_0x6b012f && (_0x58cb19.atBottom.get(_0x6b012f) ?? false));
async function ie(_0x558d83 = 1, _0x16f3db = 50) {
  return (await _0x44b99c.get("/api/v1/auth/me/favorite-gifs", {
    params: {
      page: _0x558d83,
      per_page: _0x16f3db
    }
  })).data;
}
const oe = _0x3b5a59((_0x1f7a11, _0x1d5b72) => ({
  favorites: [],
  favoriteIds: new Set(),
  loaded: false,
  loading: false,
  fetchFavorites: async () => {
    if (!_0x1d5b72().loaded && !_0x1d5b72().loading) {
      _0x1f7a11({
        loading: true
      });
      try {
        let _0x8e57 = [];
        let _0x114c99 = 1;
        let _0x5863a2 = true;
        while (_0x5863a2) {
          const _0x4b2527 = await ie(_0x114c99, 100);
          _0x8e57 = [..._0x8e57, ..._0x4b2527.data];
          _0x5863a2 = _0x4b2527.has_next;
          _0x114c99++;
        }
        _0x1f7a11({
          favorites: _0x8e57,
          favoriteIds: new Set(_0x8e57.map(_0x5c3f30 => _0x5c3f30.gif_id)),
          loaded: true,
          loading: false
        });
      } catch {
        _0x1f7a11({
          loading: false
        });
      }
    }
  },
  toggleFavorite: async _0x2ae88d => {
    const {
      favoriteIds: _0x5659e9,
      favorites: _0x442828
    } = _0x1d5b72();
    if (_0x5659e9.has(_0x2ae88d.gif_id)) {
      const _0x2aa6b4 = new Set(_0x5659e9);
      _0x2aa6b4.delete(_0x2ae88d.gif_id);
      _0x1f7a11({
        favorites: _0x442828.filter(_0x552f6f => _0x552f6f.gif_id !== _0x2ae88d.gif_id),
        favoriteIds: _0x2aa6b4
      });
      try {
        await async function (_0x249f32) {
          await _0x44b99c.delete("/api/v1/auth/me/favorite-gifs/" + _0x249f32);
        }(_0x2ae88d.gif_id);
      } catch {
        _0x1f7a11({
          favorites: _0x442828,
          favoriteIds: _0x5659e9
        });
      }
    } else {
      const _0x3bb7b1 = {
        id: "temp-" + _0x2ae88d.gif_id,
        gif_id: _0x2ae88d.gif_id,
        gif_url: _0x2ae88d.gif_url,
        preview_url: _0x2ae88d.preview_url,
        title: _0x2ae88d.title,
        width: _0x2ae88d.width,
        height: _0x2ae88d.height
      };
      const _0x3ac990 = new Set(_0x5659e9);
      _0x3ac990.add(_0x2ae88d.gif_id);
      _0x1f7a11({
        favorites: [_0x3bb7b1, ..._0x442828],
        favoriteIds: _0x3ac990
      });
      try {
        const _0x186a40 = await async function (_0x512a93) {
          return (await _0x44b99c.post("/api/v1/auth/me/favorite-gifs", _0x512a93)).data;
        }(_0x2ae88d);
        _0x1f7a11(_0x4b037a => ({
          favorites: _0x4b037a.favorites.map(_0x1054e6 => _0x1054e6.id === _0x3bb7b1.id ? _0x186a40 : _0x1054e6)
        }));
      } catch {
        _0x1f7a11({
          favorites: _0x442828,
          favoriteIds: _0x5659e9
        });
      }
    }
  },
  isFavorite: _0x2f206f => _0x1d5b72().favoriteIds.has(_0x2f206f)
}));
async function ce(_0x4b1c42, _0x40bcee) {
  if (_0x4b1c42.length === 0) {
    return {
      unreads: []
    };
  }
  try {
    const _0x3b177a = await _0x44b99c.get("/api/v1/users/@me/unreads", {
      params: {
        channel_ids: _0x4b1c42.slice(0, 50).join(",")
      },
      signal: _0x40bcee?.signal
    });
    if (!Array.isArray(_0x3b177a.data?.unreads)) {
      throw new Error("Invalid inbox messages response");
    }
    return _0x3b177a.data;
  } catch (_0x1c2251) {
    throw _0x56f0fc(_0x1c2251);
  }
}
async function le(_0x256257) {
  try {
    const _0x348e3c = await _0x44b99c.get("/api/v1/users/@me/mentions", {
      signal: _0x256257?.signal,
      params: {
        limit: _0x256257?.limit ?? 25,
        before: _0x256257?.before,
        filter: _0x256257?.filter
      }
    });
    if (!Array.isArray(_0x348e3c.data?.mentions)) {
      throw new Error("Invalid inbox mentions response");
    }
    return _0x348e3c.data;
  } catch (_0x5e38de) {
    throw _0x56f0fc(_0x5e38de);
  }
}
async function fe() {
  try {
    await _0x44b99c.post("/api/v1/users/@me/mentions/read-all");
  } catch (_0x2528fe) {
    throw _0x56f0fc(_0x2528fe);
  }
}
class me extends Error {
  statusCode;
  endpoint;
  constructor(_0xc66e39, _0x535167, _0x4d5919) {
    super(_0xc66e39);
    this.name = "FriendsAPIError";
    this.statusCode = _0x535167;
    this.endpoint = _0x4d5919;
  }
}
const he = _0x138382 => typeof _0x138382 == "string" && _0x138382.length ? /<script|javascript:|on\w+\s*=|data:|vbscript:/i.test(_0x138382) ? _0x138382.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").replace(/javascript:|on\w+\s*=|data:|vbscript:/gi, "").trim() : _0x138382.trim() : "";
const ge = async (_0x153ea6, _0x12159c = 1, _0x1a577d = 10, _0x43ecf6) => {
  try {
    const _0x28972b = (await _0x44b99c.get("/api/v1/friends/search", {
      params: {
        q: _0x153ea6,
        page: _0x12159c,
        per_page: _0x1a577d
      },
      signal: _0x43ecf6?.signal
    })).data;
    if (!_0x50bfcf(_0x28972b, ["data", "page", "total"])) {
      throw new me("Invalid response format", 500, "/api/v1/friends/search");
    }
    return _0x28972b;
  } catch (_0x3409ff) {
    throw _0x56f0fc(_0x3409ff);
  }
};
const be = async _0x340617 => {
  try {
    const _0x1ec2b8 = (await _0x44b99c.post("/api/v1/friends/requests", {
      username: _0x340617
    })).data;
    if (!_0x50bfcf(_0x1ec2b8, ["message"])) {
      throw new me("Invalid response format", 500, "/api/v1/friends/requests");
    }
    _0x1ec2b8.message &&= he(_0x1ec2b8.message);
    return _0x1ec2b8;
  } catch (_0x160f48) {
    throw _0x56f0fc(_0x160f48);
  }
};
const ye = async (_0xe71d4, _0x592904) => {
  try {
    const _0x1f419e = (await _0x44b99c.put("/api/v1/friends/requests/" + _0xe71d4, {
      status: _0x592904
    })).data;
    if (!_0x50bfcf(_0x1f419e, ["message"])) {
      throw new me("Invalid response format", 500, "/api/v1/friends/requests/" + _0xe71d4);
    }
    _0x1f419e.message &&= he(_0x1f419e.message);
    return _0x1f419e;
  } catch (_0x577b64) {
    throw _0x56f0fc(_0x577b64);
  }
};
const we = async _0x13f4aa => {
  try {
    const _0x15b9e7 = (await _0x44b99c.delete("/api/v1/friends/requests/" + _0x13f4aa)).data;
    if (!_0x50bfcf(_0x15b9e7, ["message"])) {
      throw new me("Invalid response format", 500, "/api/v1/friends/requests/" + _0x13f4aa);
    }
    _0x15b9e7.message &&= he(_0x15b9e7.message);
    return _0x15b9e7;
  } catch (_0x157555) {
    throw _0x56f0fc(_0x157555);
  }
};
const ve = async (_0x322aa2 = false, _0x3914b0) => {
  const {
    u: _0x10a263,
    s: _0xad4767
  } = (() => {
    const _0xef4971 = _0x22aaa1.getState();
    return {
      u: _0xef4971.user?.id,
      s: _0xef4971.sessionId
    };
  })();
  const _0x3f2bff = ((_0x2b87a3, _0x26d292) => {
    const {
      u: _0x559400,
      s: _0x24aa67,
      ..._0x21eed5
    } = _0x26d292;
    const _0x2b4d75 = [_0x2b87a3];
    if (_0x559400) {
      _0x2b4d75.push("u=" + _0x559400);
    }
    if (_0x24aa67) {
      _0x2b4d75.push("s=" + _0x24aa67);
    }
    Object.entries(_0x21eed5).forEach(([_0x2afafe, _0xe02ed3]) => _0xe02ed3 !== undefined && _0x2b4d75.push(_0x2afafe + "=" + _0xe02ed3));
    return _0x2b4d75.join(":");
  })(_0x293a3b.friendRequests() + ":incoming", {
    u: _0x10a263,
    s: _0xad4767 || "no-session"
  });
  return await _0x41afc7.getOrFetch(_0x3f2bff, async () => {
    try {
      const _0x4de30a = [];
      for (let _0x5c1dd3 = 1;; _0x5c1dd3++) {
        const _0x5cdba0 = (await _0x44b99c.get("/api/v1/friends/requests", {
          params: {
            page: _0x5c1dd3,
            per_page: 50
          },
          signal: _0x3914b0?.signal
        })).data;
        if (!Array.isArray(_0x5cdba0?.data)) {
          throw new me("Invalid response format", 500, "/api/v1/friends/requests");
        }
        _0x4de30a.push(..._0x5cdba0.data);
        if (!_0x5cdba0.has_next || _0x5cdba0.data.length === 0) {
          break;
        }
      }
      return {
        data: _0x4de30a
      };
    } catch (_0x4df5d5) {
      throw _0x56f0fc(_0x4df5d5);
    }
  }, {
    ttlMs: 30000,
    force: _0x322aa2
  });
};
const _e = async _0x583f2a => {
  try {
    const _0x55780b = (await _0x44b99c.delete("/api/v1/friends/" + _0x583f2a)).data;
    _0x55780b.message &&= he(_0x55780b.message);
    return _0x55780b;
  } catch (_0x1710a7) {
    throw _0x56f0fc(_0x1710a7);
  }
};
const Se = async () => {
  try {
    const _0x33527e = (await _0x44b99c.get("/api/v1/friends/suggestions")).data;
    if (!_0x50bfcf(_0x33527e, ["count", "suggestions"])) {
      throw new me("Invalid response format", 500, "/api/v1/friends/suggestions");
    }
    return _0x33527e;
  } catch (_0x55d808) {
    throw _0x56f0fc(_0x55d808);
  }
};
const Ie = async _0xfae723 => {
  try {
    const _0x379b9c = (await _0x44b99c.get("/api/v1/friends/mutual/" + _0xfae723)).data;
    if (!_0x50bfcf(_0x379b9c, ["count", "mutual_friends", "target_user_id"])) {
      throw new me("Invalid response format", 500, "/api/v1/friends/mutual/" + _0xfae723);
    }
    return _0x379b9c;
  } catch (_0x544ac5) {
    throw _0x56f0fc(_0x544ac5);
  }
};
const Ce = async (_0x30a982, _0x5c8c61) => {
  try {
    const _0x1a806f = (await _0x44b99c.patch("/api/v1/friends/" + _0x30a982 + "/note", {
      note: _0x5c8c61
    })).data;
    _0x1a806f.message &&= he(_0x1a806f.message);
    return _0x1a806f;
  } catch (_0x5374c0) {
    throw _0x56f0fc(_0x5374c0);
  }
};
const ke = async _0x3c595c => {
  try {
    const _0x4db8ea = (await _0x44b99c.delete("/api/v1/friends/" + _0x3c595c + "/note")).data;
    _0x4db8ea.message &&= he(_0x4db8ea.message);
    return _0x4db8ea;
  } catch (_0x1e447a) {
    throw _0x56f0fc(_0x1e447a);
  }
};
const Ee = async _0x434a64 => {
  try {
    return (await _0x44b99c.get("/api/v1/friends/" + _0x434a64 + "/note")).data;
  } catch (_0x4218cd) {
    throw _0x56f0fc(_0x4218cd);
  }
};
const Ae = async _0x5ae39a => {
  try {
    const _0x2ff2e0 = (await _0x44b99c.post("/api/v1/friends/" + _0x5ae39a + "/favorite")).data;
    _0x2ff2e0.message &&= he(_0x2ff2e0.message);
    return _0x2ff2e0;
  } catch (_0x5d4af2) {
    throw _0x56f0fc(_0x5d4af2);
  }
};
const Te = async _0x20402d => {
  try {
    const _0x5e7df1 = (await _0x44b99c.delete("/api/v1/friends/" + _0x20402d + "/favorite")).data;
    _0x5e7df1.message &&= he(_0x5e7df1.message);
    return _0x5e7df1;
  } catch (_0x246a26) {
    throw _0x56f0fc(_0x246a26);
  }
};
const Me = /^[\w-]{1,64}(?::[\w-]{1,64})?$/;
function De(_0x5d58d3) {
  try {
    const _0x41ae5c = _0x5d58d3.trim();
    const _0x379294 = new URL(/^https?:\/\//i.test(_0x41ae5c) ? _0x41ae5c : "https://" + _0x41ae5c);
    if (!["http:", "https:"].includes(_0x379294.protocol) || _0x379294.username || _0x379294.password) {
      return null;
    }
    const _0x520caa = _0x379294.hostname.toLowerCase();
    const _0x4b7e61 = _0x520caa === "jubbio.net" || _0x520caa === "www.jubbio.net";
    if (!_0x4b7e61 && !["jubbio.com", "www.jubbio.com", "localhost", "127.0.0.1"].includes(_0x520caa)) {
      return null;
    }
    const _0x46fea0 = _0x379294.pathname.match(_0x4b7e61 ? /^\/(?:invite\/)?([^/]+)\/?$/ : /^\/invite\/([^/]+)\/?$/);
    if (!_0x46fea0) {
      return null;
    }
    const _0x30d0ab = decodeURIComponent(_0x46fea0[1]);
    if (Me.test(_0x30d0ab)) {
      return _0x30d0ab;
    } else {
      return null;
    }
  } catch {
    return null;
  }
}
const $e = _0x54d1ce => {
  const _0x45ddb2 = typeof _0x54d1ce == "number" ? _0x54d1ce < 1000000000000 ? _0x54d1ce * 1000 : _0x54d1ce : Date.parse(_0x54d1ce);
  if (Number.isFinite(_0x45ddb2)) {
    return _0x45ddb2;
  } else {
    return 0;
  }
};
function Oe(_0x190f66) {
  return {
    id: "mention:" + _0x190f66.message_id,
    kind: "mention",
    mentionId: _0x190f66.id,
    messageId: _0x190f66.message_id,
    channelId: _0x190f66.channel_id,
    guildId: _0x190f66.guild_id,
    channelName: _0x190f66.channel_name,
    guildName: _0x190f66.guild_name,
    author: _0x190f66.author,
    body: _0x190f66.content,
    createdAt: $e(_0x190f66.created_at),
    read: _0x190f66.read
  };
}
function Le(_0x46d76a) {
  const _0x20f5a2 = _0x46d76a.guild_id ? undefined : function (_0x58313a, _0x1408ff) {
    if (typeof _0x58313a != "string") {
      return;
    }
    if (_0x1408ff === "invite") {
      try {
        const _0x5ec47d = JSON.parse(_0x58313a).invite_code;
        if (typeof _0x5ec47d == "string" && /^[\w-]{1,64}(?::[\w-]{1,64})?$/.test(_0x5ec47d)) {
          return _0x5ec47d;
        }
      } catch {}
    }
    const _0x1b224a = _0x58313a.match(/https?:\/\/[^\s<>]+/g) || [];
    for (const _0x5422b6 of _0x1b224a) {
      const _0x43aeba = De(_0x5422b6);
      if (_0x43aeba) {
        return _0x43aeba;
      }
    }
  }(_0x46d76a.content, _0x46d76a.type);
  let _0x41f61b;
  if (_0x20f5a2 && _0x46d76a.type === "invite") {
    try {
      const _0x215479 = JSON.parse(_0x46d76a.content).guild?.name;
      if (typeof _0x215479 == "string") {
        _0x41f61b = _0x215479.slice(0, 100);
      }
    } catch {}
  }
  return {
    id: (_0x20f5a2 ? "invite:message" : "message") + ":" + _0x46d76a.message_id,
    kind: _0x20f5a2 ? "invite" : _0x46d76a.application_id ? "app" : "message",
    inviteCode: _0x20f5a2,
    messageId: _0x46d76a.message_id,
    channelId: _0x46d76a.channel_id,
    guildId: _0x46d76a.guild_id,
    channelName: _0x46d76a.channel_name,
    guildName: _0x41f61b || _0x46d76a.guild_name,
    author: _0x46d76a.author,
    body: _0x20f5a2 ? "" : _0x46d76a.content,
    createdAt: $e(_0x46d76a.created_at),
    count: _0x46d76a.unread_count
  };
}
function Re(_0x1c9c28) {
  return {
    id: "friend:" + _0x1c9c28.id,
    kind: "friend",
    requestId: _0x1c9c28.id,
    author: _0x1c9c28.from_user_metadata,
    body: _0x1c9c28.message || "",
    createdAt: $e(_0x1c9c28.created_at)
  };
}
function xe(_0x4bf88c, _0x3113a0) {
  const _0x5151b0 = new Map(_0x3113a0.entries.map(_0x3f48fa => [_0x3f48fa.id, _0x3f48fa]));
  const _0x451542 = _0x3113a0.viewed_before ? $e(_0x3113a0.viewed_before) : 0;
  const _0x210fc1 = _0x3113a0.dismissed_before ? $e(_0x3113a0.dismissed_before) : 0;
  const _0x4ba903 = new Set(_0x4bf88c.filter(_0x25b6f7 => _0x25b6f7.kind === "mention" && _0x25b6f7.messageId).map(_0x2d1bd8 => _0x2d1bd8.messageId));
  const _0x2777f8 = new Set(_0x4bf88c.filter(_0xd0b08f => _0xd0b08f.kind === "invite" && !_0xd0b08f.messageId).map(_0x1b9627 => _0x1b9627.inviteCode));
  return [...new Map(_0x4bf88c.filter(_0x171fb0 => _0x171fb0.kind === "friend" || _0x171fb0.createdAt > Date.now() - 7776000000).map(_0x143854 => [_0x143854.id, _0x143854])).values()].filter(_0x293d05 => !_0x5151b0.get(_0x293d05.id)?.dismissed && _0x293d05.createdAt > _0x210fc1).filter(_0x7ed741 => (!_0x7ed741.messageId || _0x7ed741.kind === "mention" || !_0x4ba903.has(_0x7ed741.messageId)) && (_0x7ed741.kind !== "invite" || !_0x7ed741.messageId || !_0x2777f8.has(_0x7ed741.inviteCode))).map(_0x1ac808 => ({
    ..._0x1ac808,
    read: _0x1ac808.read || _0x5151b0.get(_0x1ac808.id)?.viewed || _0x1ac808.createdAt <= _0x451542
  })).sort((_0x46587e, _0x36c079) => _0x36c079.createdAt - _0x46587e.createdAt || _0x36c079.id.localeCompare(_0x46587e.id));
}
let Ne = 0;
let Ue = null;
let Pe = false;
let Ge = false;
let ze = false;
const Fe = new Set();
const je = new Set();
const He = new Set();
const Be = ["state", "mention", "message", "friend", "invite", "app", "inviteHistory"];
let We = 0;
let qe = 0;
const Ye = new Map();
const Ve = (_0xd3f3cd, _0x218466) => {
  const _0x24b7ee = _0xd3f3cd.channelId ? _0x218466[_0xd3f3cd.channelId] : undefined;
  return !!_0x24b7ee && !!_0xd3f3cd.messageId && (_0x24b7ee.messageId && /^\d+$/.test(_0x24b7ee.messageId) && /^\d+$/.test(_0xd3f3cd.messageId) ? BigInt(_0xd3f3cd.messageId) <= BigInt(_0x24b7ee.messageId) : _0xd3f3cd.createdAt <= _0x24b7ee.at);
};
const Je = () => {
  const _0x9e826d = _0x22aaa1.getState().user?.id;
  if (_0x9e826d == null) {
    return null;
  } else {
    return String(_0x9e826d);
  }
};
async function Xe(_0x173678, _0x21241f) {
  const _0x5e3f02 = [];
  let _0x3ba334 = 0;
  await Promise.all(Array.from({
    length: Math.min(4, Math.ceil(_0x173678.length / 50))
  }, async () => {
    while (_0x3ba334 < _0x173678.length && !_0x21241f.aborted) {
      const _0x1c6827 = _0x3ba334;
      _0x3ba334 += 50;
      _0x5e3f02.push(...(await ce(_0x173678.slice(_0x1c6827, _0x1c6827 + 50), {
        signal: _0x21241f
      })).unreads);
    }
  }));
  return _0x5e3f02;
}
const Ze = _0x3b5a59((_0x4dafe6, _0x44cd1e) => ({
  failedOperation: null,
  owner: null,
  items: [],
  markers: {
    viewed_before: null,
    dismissed_before: null,
    entries: []
  },
  loading: false,
  updating: false,
  error: false,
  unavailable: [],
  mentionCursor: "",
  inviteCursor: "",
  inviteMessageCursor: "",
  appCursor: "",
  lastFetched: {},
  channelReads: {},
  lastReadAllBefore: 0,
  reset: _0x434565 => {
    Ne++;
    We++;
    Ue?.abort();
    Ue = null;
    Pe = false;
    Ge = false;
    ze = false;
    Fe.clear();
    je.clear();
    He.clear();
    Ye.clear();
    qe++;
    _0x4dafe6({
      failedOperation: null,
      owner: _0x434565,
      items: [],
      markers: {
        viewed_before: null,
        dismissed_before: null,
        entries: []
      },
      loading: false,
      updating: false,
      error: false,
      unavailable: [],
      mentionCursor: "",
      inviteCursor: "",
      inviteMessageCursor: "",
      appCursor: "",
      lastFetched: {},
      channelReads: {},
      lastReadAllBefore: 0
    });
  },
  ensureFresh: async (_0x1c57ed = 300000, _0x41e19c) => {
    const _0x4ebafd = Je();
    if (_0x44cd1e().owner !== _0x4ebafd) {
      _0x44cd1e().reset(_0x4ebafd);
    }
    if (!_0x4ebafd) {
      return;
    }
    const _0x2d56a2 = Date.now();
    const _0x5da852 = Be.filter(_0x5d6579 => {
      if (_0x5d6579 === "app") {
        return false;
      }
      if (je.has(_0x5d6579)) {
        return false;
      }
      const _0x56c1e7 = _0x44cd1e().lastFetched[_0x5d6579];
      return !!_0x41e19c?.force?.includes(_0x5d6579) || !_0x56c1e7 || !_0x41e19c?.lazy?.includes(_0x5d6579) && _0x2d56a2 - _0x56c1e7 >= _0x1c57ed;
    });
    if (_0x5da852.length) {
      await _0x44cd1e().refresh(false, _0x5da852);
    }
  },
  refreshChannels: async _0x3e8a63 => {
    const _0x1757ba = Je();
    if (!_0x1757ba || _0x44cd1e().owner !== _0x1757ba) {
      return;
    }
    if (!_0x44cd1e().lastFetched.message) {
      return;
    }
    if (je.has("message")) {
      for (const _0x536f13 of _0x3e8a63) {
        He.add(_0x536f13);
      }
      return;
    }
    const _0x4799b0 = _0x801e51.getState().channels;
    const _0x3e251b = [...new Set(_0x3e8a63)].filter(_0x4a000a => (_0x4799b0.get(_0x4a000a)?.unreadCount ?? 0) > 0);
    if (!_0x3e251b.length) {
      return;
    }
    const _0x10111f = Ne;
    const _0x2622ef = qe;
    let _0x1606d6;
    try {
      _0x1606d6 = [];
      for (let _0xbf86f8 = 0; _0xbf86f8 < _0x3e251b.length; _0xbf86f8 += 50) {
        _0x1606d6.push(...(await ce(_0x3e251b.slice(_0xbf86f8, _0xbf86f8 + 50))).unreads);
      }
    } catch {
      return;
    }
    if (_0x10111f !== Ne || _0x1757ba !== Je()) {
      return;
    }
    if (qe !== _0x2622ef) {
      _0x44cd1e().refreshChannels(_0x3e251b);
      return;
    }
    const _0x4bf060 = new Set(_0x3e251b);
    const _0x48b499 = _0x1606d6.map(Le);
    const _0x22b360 = new Set(_0x48b499.map(_0x1cd7b3 => _0x1cd7b3.id));
    _0x4dafe6(_0x1ddacd => ({
      items: [..._0x1ddacd.items.filter(_0x815ddb => !_0x22b360.has(_0x815ddb.id) && (_0x815ddb.kind !== "message" && (_0x815ddb.kind !== "app" || !_0x815ddb.messageId) || !_0x815ddb.channelId || !_0x4bf060.has(_0x815ddb.channelId))), ..._0x48b499].map(_0x49e1ee => !_0x49e1ee.read && Ve(_0x49e1ee, _0x1ddacd.channelReads) ? {
        ..._0x49e1ee,
        read: true
      } : _0x49e1ee).sort((_0x1f682e, _0x51ab67) => _0x51ab67.createdAt - _0x1f682e.createdAt).slice(0, 1000)
    }));
  },
  applyChannelRead: (_0x1409b8, _0x1a55e6) => {
    _0x4dafe6(_0x4d4f99 => {
      const _0x4505c9 = _0x4d4f99.channelReads[_0x1409b8];
      if (_0x4505c9?.messageId && _0x1a55e6 && /^\d+$/.test(_0x4505c9.messageId) && /^\d+$/.test(_0x1a55e6) && BigInt(_0x4505c9.messageId) > BigInt(_0x1a55e6)) {
        _0x1a55e6 = _0x4505c9.messageId;
      }
      const _0x1078af = {
        ..._0x4d4f99.channelReads,
        [_0x1409b8]: {
          messageId: _0x1a55e6,
          at: Date.now()
        }
      };
      return {
        channelReads: _0x1078af,
        items: _0x4d4f99.items.map(_0xb9295f => !_0xb9295f.read && Ve(_0xb9295f, _0x1078af) ? {
          ..._0xb9295f,
          read: true
        } : _0xb9295f)
      };
    });
  },
  removeChannel: _0x1a9cac => {
    qe++;
    if (_0x44cd1e().loading) {
      Ye.set("channel:" + _0x1a9cac, qe);
    }
    _0x4dafe6(_0xc76d3b => ({
      items: _0xc76d3b.items.filter(_0x3d7d77 => _0x3d7d77.channelId !== _0x1a9cac)
    }));
  },
  removeGuild: _0x567a43 => {
    qe++;
    if (_0x44cd1e().loading) {
      Ye.set("guild:" + _0x567a43, qe);
    }
    _0x4dafe6(_0x319292 => ({
      items: _0x319292.items.filter(_0x1e4c3e => _0x1e4c3e.guildId !== _0x567a43)
    }));
  },
  removeMessage: _0x4639fc => {
    qe++;
    if (_0x44cd1e().loading) {
      Ye.set("message:" + _0x4639fc, qe);
    }
    _0x4dafe6(_0x3219f7 => ({
      items: _0x3219f7.items.filter(_0x4fba64 => _0x4fba64.messageId !== _0x4639fc)
    }));
  },
  refresh: async (_0x39ab85 = false, _0x5938ea) => {
    const _0x29e49f = Je();
    if (_0x44cd1e().owner !== _0x29e49f) {
      _0x44cd1e().reset(_0x29e49f);
    }
    if (!_0x29e49f) {
      return;
    }
    if (_0x44cd1e().loading) {
      ze = Pe ? ze && _0x39ab85 : _0x39ab85;
      Pe = true;
      if (_0x5938ea) {
        for (const _0x29123d of _0x5938ea.length ? _0x5938ea : ["state"]) {
          Fe.add(_0x29123d);
        }
      } else {
        Ge = true;
      }
      return;
    }
    const _0x4831f8 = Ne;
    const _0x1c0c37 = We;
    const _0x1f066b = qe;
    const _0x17b9c6 = new AbortController();
    Ue = _0x17b9c6;
    const _0x2163ef = _0x44cd1e();
    _0x4dafe6({
      loading: true
    });
    const _0x176e13 = _0x5d1585 => !_0x5938ea || _0x5938ea.includes(_0x5d1585);
    je.clear();
    for (const _0x619d81 of Be) {
      if (_0x176e13(_0x619d81) || _0x619d81 === "state" && _0x5938ea?.length === 0) {
        je.add(_0x619d81);
      }
    }
    const _0x3839c6 = [..._0x801e51.getState().channels.values()].filter(_0x5a639a => _0x5a639a.unreadCount > 0).map(_0x237d48 => _0x237d48.channelId);
    const _0x280717 = [_0x176e13("state") || _0x5938ea?.length === 0 ? _0x44b99c.get("/api/v1/users/@me/inbox-state", {
      signal: _0x17b9c6.signal
    }).then(_0x160691 => {
      if (!Array.isArray(_0x160691.data?.entries)) {
        throw new Error("Invalid inbox state");
      }
      return _0x160691.data;
    }) : Promise.resolve(null), !_0x176e13("mention") || _0x39ab85 && !_0x2163ef.mentionCursor ? Promise.resolve(null) : le({
      limit: 50,
      before: _0x39ab85 ? _0x2163ef.mentionCursor : undefined,
      signal: _0x17b9c6.signal
    }), !_0x39ab85 && _0x176e13("message") ? Xe(_0x3839c6, _0x17b9c6.signal) : Promise.resolve(null), !_0x39ab85 && _0x176e13("friend") ? ve(true, {
      signal: _0x17b9c6.signal
    }).then(_0x1d19b6 => _0x1d19b6.data.filter(_0x51bce5 => _0x51bce5.status === "pending" && String(_0x51bce5.to_user_id) === _0x29e49f)) : Promise.resolve(null), !_0x176e13("invite") || _0x39ab85 && !_0x2163ef.inviteCursor ? Promise.resolve(null) : _0x44b99c.get("/api/v1/users/@me/community-invites", {
      params: {
        before: _0x39ab85 ? _0x2163ef.inviteCursor : undefined
      },
      signal: _0x17b9c6.signal
    }).then(_0x1ce69a => {
      if (!Array.isArray(_0x1ce69a.data?.invites)) {
        throw new Error("Invalid invitation inbox");
      }
      return _0x1ce69a.data;
    }), (_0x176e13("app") && (!_0x39ab85 || _0x2163ef.appCursor), Promise.resolve(null)), !_0x176e13("inviteHistory") || _0x39ab85 && !_0x2163ef.inviteMessageCursor ? Promise.resolve(null) : _0x44b99c.get("/api/v1/users/@me/invite-messages", {
      params: {
        before: _0x39ab85 ? _0x2163ef.inviteMessageCursor : undefined
      },
      signal: _0x17b9c6.signal
    }).then(_0x529025 => {
      if (!Array.isArray(_0x529025.data?.messages)) {
        throw new Error("Invalid invitation history");
      }
      return _0x529025.data;
    })];
    const _0x4d47e6 = await Promise.allSettled(_0x280717);
    if (_0x4831f8 !== Ne || _0x29e49f !== Je()) {
      return;
    }
    let _0x537e63 = [..._0x44cd1e().unavailable];
    const _0x5a4e72 = ["state", "mention", "message", "friend", "invite", "app", "inviteHistory"];
    const _0x144ebf = {
      ..._0x44cd1e().lastFetched
    };
    _0x4d47e6.forEach((_0x58bc40, _0xd7eef5) => {
      if (_0x58bc40.status === "rejected") {
        if (!_0x537e63.includes(_0x5a4e72[_0xd7eef5])) {
          _0x537e63.push(_0x5a4e72[_0xd7eef5]);
        }
      } else if (_0x58bc40.value !== null) {
        _0x537e63 = _0x537e63.filter(_0xb0616c => _0xb0616c !== _0x5a4e72[_0xd7eef5]);
        if (!_0x39ab85) {
          _0x144ebf[_0x5a4e72[_0xd7eef5]] = Date.now();
        }
      }
    });
    let _0x4fba43 = _0x39ab85 ? _0x44cd1e().items : [..._0x44cd1e().items];
    const _0x8f701a = (_0x3df864, _0x3f4d62) => {
      if (!_0x39ab85) {
        _0x4fba43 = _0x4fba43.filter(_0x382386 => _0x382386.kind !== _0x3df864);
      }
      _0x4fba43.push(..._0x3f4d62);
    };
    const [, _0x734925, _0x4f9484, _0x26f1d2, _0x2a6fd0, _0x3cf41a, _0x159e7a] = _0x4d47e6;
    if (_0x734925.status === "fulfilled" && _0x734925.value) {
      _0x8f701a("mention", _0x734925.value.mentions.map(Oe));
      _0x4dafe6({
        mentionCursor: _0x734925.value.next_cursor ?? (_0x734925.value.mentions.length === 50 ? _0x734925.value.mentions.at(-1).id : "")
      });
    }
    if (_0x4f9484.status === "fulfilled" && _0x4f9484.value) {
      _0x4fba43 = _0x4fba43.filter(_0x72778e => _0x72778e.kind !== "message" && (_0x72778e.kind !== "app" || !_0x72778e.messageId));
      _0x4fba43.push(..._0x4f9484.value.map(Le));
    }
    if (_0x26f1d2.status === "fulfilled" && _0x26f1d2.value) {
      _0x8f701a("friend", _0x26f1d2.value.map(Re));
    }
    if (_0x2a6fd0.status === "fulfilled" && _0x2a6fd0.value) {
      if (!_0x39ab85) {
        _0x4fba43 = _0x4fba43.filter(_0x3f2748 => _0x3f2748.kind !== "invite" || !!_0x3f2748.messageId);
      }
      _0x4fba43.push(..._0x2a6fd0.value.invites.map(_0x55dda8 => ({
        id: "invite:" + _0x55dda8.id,
        kind: "invite",
        inviteCode: _0x55dda8.invite_code,
        guildId: _0x55dda8.guild_id,
        guildName: _0x55dda8.guild_name,
        author: _0x55dda8.author,
        body: "",
        createdAt: $e(_0x55dda8.created_at),
        expired: _0x55dda8.expired
      })));
      _0x4dafe6({
        inviteCursor: _0x2a6fd0.value.next_cursor
      });
    }
    if (_0x3cf41a.status === "fulfilled" && _0x3cf41a.value) {
      if (!_0x39ab85) {
        _0x4fba43 = _0x4fba43.filter(_0x1bd49a => _0x1bd49a.kind !== "app" || !!_0x1bd49a.messageId);
      }
      _0x4fba43.push(..._0x3cf41a.value.notifications.map(_0x495ed8 => ({
        id: "app:" + _0x495ed8.id,
        kind: "app",
        title: _0x495ed8.title,
        body: _0x495ed8.body,
        guildId: _0x495ed8.guild_id,
        channelId: _0x495ed8.channel_id,
        createdAt: $e(_0x495ed8.created_at),
        read: !!_0x495ed8.read_at
      })));
      _0x4dafe6({
        appCursor: _0x3cf41a.value.next_cursor
      });
    }
    if (_0x159e7a.status === "fulfilled" && _0x159e7a.value) {
      if (!_0x39ab85) {
        _0x4fba43 = _0x4fba43.filter(_0xce4491 => _0xce4491.kind !== "invite" || !_0xce4491.messageId);
      }
      _0x4fba43.push(..._0x159e7a.value.messages.map(Le).filter(_0x2efea7 => _0x2efea7.kind === "invite"));
      _0x4dafe6({
        inviteMessageCursor: _0x159e7a.value.next_cursor
      });
    }
    _0x4fba43 = _0x4fba43.filter(_0x205568 => ["channel", "guild", "message"].every(_0x43e61e => {
      const _0x78fef3 = _0x43e61e === "channel" ? _0x205568.channelId : _0x43e61e === "guild" ? _0x205568.guildId : _0x205568.messageId;
      return !_0x78fef3 || (Ye.get(_0x43e61e + ":" + _0x78fef3) || 0) <= _0x1f066b;
    })).map(_0x3603de => !_0x3603de.read && Ve(_0x3603de, _0x44cd1e().channelReads) ? {
      ..._0x3603de,
      read: true
    } : _0x3603de).filter(_0xe8faea => !_0x537e63.includes(_0xe8faea.kind === "invite" && _0xe8faea.messageId ? "inviteHistory" : _0xe8faea.kind === "app" && _0xe8faea.messageId ? "message" : _0xe8faea.kind)).sort((_0x5d4151, _0x5db317) => _0x5db317.createdAt - _0x5d4151.createdAt).slice(0, 1000);
    const _0x1a097a = _0x4d47e6[0].status === "fulfilled" && _0x4d47e6[0].value && _0x1c0c37 === We && !_0x44cd1e().updating ? _0x4d47e6[0].value : _0x44cd1e().markers;
    _0x4dafe6({
      items: _0x4fba43,
      markers: _0x1a097a,
      loading: false,
      unavailable: _0x537e63,
      error: _0x537e63.length > 0 || !!_0x44cd1e().failedOperation,
      lastFetched: _0x144ebf
    });
    Ue = null;
    je.clear();
    Ye.clear();
    if (He.size) {
      const _0x4a0e5e = [...He];
      He.clear();
      _0x44cd1e().refreshChannels(_0x4a0e5e);
    }
    if (Pe) {
      Pe = false;
      const _0x25e5f3 = Ge ? undefined : [...Fe];
      const _0x1ea16e = ze;
      Ge = false;
      ze = false;
      Fe.clear();
      _0x44cd1e().refresh(_0x1ea16e, _0x25e5f3);
    }
  },
  applyReadAll: (_0xbcb0a5, _0x3eb9a6) => {
    const _0x45fb0c = _0x44cd1e();
    if (Je() !== _0x45fb0c.owner || !_0xbcb0a5.success) {
      return;
    }
    const _0x564493 = $e(_0xbcb0a5.before);
    if (_0x564493 < _0x45fb0c.lastReadAllBefore) {
      return;
    }
    if (_0x564493 === _0x45fb0c.lastReadAllBefore) {
      if (_0x3eb9a6) {
        _0x801e51.getState().applyBulkRead(_0xbcb0a5.read_states, _0x3eb9a6);
      }
      return;
    }
    We++;
    _0x801e51.getState().applyBulkRead(_0xbcb0a5.read_states, _0x3eb9a6);
    const _0x55d14e = {
      ..._0x45fb0c.channelReads
    };
    for (const _0x321206 of _0xbcb0a5.read_states) {
      _0x55d14e[_0x321206.channel_id] = {
        messageId: _0x321206.last_read_message_id,
        at: _0x564493
      };
    }
    _0x4dafe6({
      markers: _0xbcb0a5.markers,
      lastReadAllBefore: _0x564493,
      channelReads: _0x55d14e,
      items: _0x45fb0c.items.map(_0x5eb391 => _0x5eb391.createdAt <= _0x564493 ? {
        ..._0x5eb391,
        read: true
      } : _0x5eb391),
      lastFetched: {
        ..._0x45fb0c.lastFetched,
        state: Date.now()
      }
    });
  },
  operate: async (_0xd691c7, _0x43f2a5) => {
    const _0x5e6126 = _0x44cd1e();
    const _0x9cfd33 = Je();
    const _0x142415 = Ne;
    if (!_0x9cfd33 || _0x9cfd33 !== _0x5e6126.owner || _0x5e6126.updating) {
      return;
    }
    const _0x3a7926 = _0x43f2a5 || xe(_0x5e6126.items, _0x5e6126.markers).map(_0x38c099 => _0x38c099.id);
    We++;
    const _0x505019 = We;
    const _0x3e16d1 = _0xd691c7.endsWith("_all");
    const _0xc95ae6 = new Date().toISOString();
    const _0x1cff5e = new Map(_0x5e6126.markers.entries.map(_0x471f0e => [_0x471f0e.id, _0x471f0e]));
    if (!_0x3e16d1) {
      for (const _0x110176 of _0x3a7926.slice(0, 1000)) {
        _0x1cff5e.set(_0x110176, {
          id: _0x110176,
          viewed: true,
          dismissed: _0xd691c7 === "dismiss" || !!_0x1cff5e.get(_0x110176)?.dismissed
        });
      }
    }
    const _0x5755ca = {
      ..._0x5e6126.markers,
      entries: [..._0x1cff5e.values()],
      ...(_0x3e16d1 ? {
        viewed_before: _0xc95ae6
      } : {}),
      ...(_0xd691c7 === "dismiss_all" ? {
        dismissed_before: _0xc95ae6
      } : {})
    };
    const _0x451adb = _0xd691c7 === "view_all" ? _0xf41bb6() : undefined;
    let _0x167c32 = false;
    _0x4dafe6({
      updating: true,
      error: false,
      markers: _0x5755ca
    });
    try {
      if (_0xd691c7 === "view_all") {
        const _0x250fa8 = _0x451adb?.baseline;
        const _0x21d454 = await async function (_0x499087 = false) {
          const _0xd5b19f = await _0x44b99c.post("/api/v1/users/@me/inbox/read-all", {
            include_apps: _0x499087
          });
          if (!_0xd5b19f.data.success || !_0xd5b19f.data.markers || !Array.isArray(_0xd5b19f.data.read_states) || !Number.isFinite(Date.parse(_0xd5b19f.data.before))) {
            throw Error("Inbox read-all failed");
          }
          return _0xd5b19f.data;
        }(false);
        if (_0x142415 !== Ne || _0x9cfd33 !== Je()) {
          return;
        }
        _0x44cd1e().applyReadAll(_0x21d454, _0x250fa8);
        _0x4dafe6({
          error: false,
          failedOperation: null
        });
        return;
      }
      const _0x3078d0 = await _0x44b99c.patch("/api/v1/users/@me/inbox-state", {
        action: _0xd691c7,
        ids: _0x3a7926.slice(0, 1000)
      });
      if (_0x142415 !== Ne || _0x9cfd33 !== Je()) {
        return;
      }
      _0x167c32 = true;
      _0x4dafe6({
        markers: _0x3078d0.data
      });
      const _0x37c43c = _0x3a7926.filter(_0x60914a => _0x60914a.startsWith("app:"));
      const _0x4154ae = _0xd691c7.endsWith("_all");
      const _0x1eea18 = _0x4154ae && false;
      const _0x3d5876 = _0x5e6126.items.filter(_0x3ef90d => _0x3ef90d.mentionId && _0x3a7926.includes(_0x3ef90d.id)).map(_0xa5b553 => _0xa5b553.mentionId);
      const _0xa5df6c = _0x4154ae ? [fe()] : Array.from({
        length: Math.ceil(_0x3d5876.length / 100)
      }, (_0x6e173e, _0xe18b96) => async function (_0x4f3be1) {
        try {
          await _0x44b99c.post("/api/v1/users/@me/mentions/read", {
            mention_ids: _0x4f3be1
          });
        } catch (_0x2cffbe) {
          throw _0x56f0fc(_0x2cffbe);
        }
      }(_0x3d5876.slice(_0xe18b96 * 100, _0xe18b96 * 100 + 100)));
      const _0x472a4e = await Promise.allSettled([..._0xa5df6c, ...(_0x1eea18 ? [_0x44b99c.post("/api/v1/apps/inbox/read-all", {
        before: _0xd691c7 === "dismiss_all" ? _0x3078d0.data.dismissed_before : _0x3078d0.data.viewed_before
      })] : _0x37c43c.map(_0x396ab9 => _0x44b99c.post("/api/v1/apps/inbox/" + _0x396ab9.slice(4) + "/read")))]);
      if (_0x142415 === Ne && _0x9cfd33 === Je()) {
        const _0x206f87 = new Set(_0x4154ae ? _0x5e6126.items.map(_0x48e225 => _0x48e225.id) : _0x3a7926);
        _0x4dafe6(_0x1aaf5b => ({
          items: _0x1aaf5b.items.map(_0x4de3a0 => _0x206f87.has(_0x4de3a0.id) && _0x4de3a0.kind !== "friend" ? {
            ..._0x4de3a0,
            read: true
          } : _0x4de3a0)
        }));
      }
      if (_0x142415 === Ne) {
        const _0x4ddbb1 = _0x472a4e.some(_0x54befb => _0x54befb.status === "rejected");
        _0x4dafe6({
          error: _0x4ddbb1,
          failedOperation: _0x4ddbb1 ? {
            action: _0xd691c7,
            ids: _0x3a7926
          } : null
        });
      }
    } catch {
      if (!_0x167c32) {
        if (_0x142415 === Ne && _0x9cfd33 === Je()) {
          if (_0x44cd1e().markers === _0x5755ca && We === _0x505019) {
            _0x4dafe6({
              markers: _0x5e6126.markers
            });
          }
          if (We === _0x505019) {
            _0x451adb?.rollback();
          }
        }
      }
      if (_0x142415 === Ne) {
        _0x4dafe6({
          error: true,
          failedOperation: {
            action: _0xd691c7,
            ids: _0x3a7926
          }
        });
      }
    } finally {
      if (_0x142415 === Ne) {
        _0x4dafe6({
          updating: false
        });
      }
    }
  },
  respond: async (_0x364c24, _0x215428) => {
    const _0x44497e = Je();
    const _0x5ebd3b = Ne;
    if (_0x44497e && _0x44cd1e().owner === _0x44497e && _0x364c24.requestId) {
      await ye(_0x364c24.requestId, _0x215428 ? "accepted" : "rejected");
      if (_0x5ebd3b === Ne && _0x44497e === Je()) {
        if (_0x364c24.author?.id) {
          _0x5a2d98.getState().removeIncomingRequest(_0x364c24.author.id);
        }
        _0x4dafe6(_0x4913ca => ({
          items: _0x4913ca.items.filter(_0x2bc2e1 => _0x2bc2e1.id !== _0x364c24.id)
        }));
      }
    }
  }
}));
const Ke = _0x5854d2 => xe(_0x5854d2.items, _0x5854d2.markers);
let Qe = 0;
const et = () => String(_0x22aaa1.getState().user?.id ?? "");
const tt = _0x3b5a59((_0x37f50b, _0x313aea) => ({
  bookmarks: [],
  bookmarksLoading: false,
  bookmarksHasMore: true,
  cursor: "",
  error: null,
  fetchBookmarks: async (_0x3e7b1a = false) => {
    if (_0x313aea().bookmarksLoading || !_0x3e7b1a && !_0x313aea().bookmarksHasMore) {
      return;
    }
    const _0x42a5af = Qe;
    const _0x4b5d06 = et();
    if (!_0x4b5d06) {
      return;
    }
    const _0x463bf6 = _0x3e7b1a ? undefined : _0x313aea().cursor;
    _0x37f50b({
      bookmarksLoading: true,
      error: null
    });
    try {
      const _0x361ba0 = await async function (_0x4f8cb3) {
        try {
          const _0x35059d = await _0x44b99c.get("/api/v1/users/@me/bookmarks", {
            params: {
              limit: _0x4f8cb3?.limit ?? 25,
              before: _0x4f8cb3?.before
            }
          });
          if (!Array.isArray(_0x35059d.data?.bookmarks)) {
            throw new Error("Invalid inbox bookmarks response");
          }
          return _0x35059d.data;
        } catch (_0x5209ad) {
          throw _0x56f0fc(_0x5209ad);
        }
      }({
        limit: 25,
        before: _0x463bf6
      });
      if (_0x42a5af !== Qe || _0x4b5d06 !== et()) {
        return;
      }
      const _0x3c5f90 = _0x361ba0.next_cursor ?? (_0x361ba0.bookmarks.length === 25 ? _0x361ba0.bookmarks.at(-1).id : "");
      _0x37f50b(_0x39d6c0 => ({
        bookmarks: [...new Map((_0x3e7b1a ? _0x361ba0.bookmarks : [..._0x39d6c0.bookmarks, ..._0x361ba0.bookmarks]).map(_0x2b23d9 => [_0x2b23d9.id, _0x2b23d9])).values()],
        bookmarksHasMore: !!_0x3c5f90,
        cursor: _0x3c5f90,
        bookmarksLoading: false
      }));
    } catch {
      if (_0x42a5af === Qe && _0x4b5d06 === et()) {
        _0x37f50b({
          error: "Failed to fetch bookmarks",
          bookmarksLoading: false
        });
      }
    }
  },
  addBookmark: async _0x5f3304 => {
    const _0x2d394a = Qe;
    const _0x3fc212 = et();
    try {
      await async function (_0x48ec53) {
        try {
          await _0x44b99c.post("/api/v1/users/@me/bookmarks", _0x48ec53);
        } catch (_0x3b2faf) {
          throw _0x56f0fc(_0x3b2faf);
        }
      }(_0x5f3304);
      if (_0x2d394a === Qe && _0x3fc212 === et()) {
        await _0x313aea().fetchBookmarks(true);
      }
    } catch {
      if (_0x2d394a === Qe && _0x3fc212 === et()) {
        _0x37f50b({
          error: "Failed to add bookmark"
        });
      }
    }
  },
  removeBookmark: async _0x159ef2 => {
    const _0x131493 = Qe;
    const _0x1ccf3e = et();
    _0x37f50b(_0x173185 => ({
      bookmarks: _0x173185.bookmarks.filter(_0x3a0e6a => _0x3a0e6a.message_id !== _0x159ef2)
    }));
    try {
      await async function (_0x5561f5) {
        try {
          await _0x44b99c.delete("/api/v1/users/@me/bookmarks/" + _0x5561f5);
        } catch (_0x972df4) {
          throw _0x56f0fc(_0x972df4);
        }
      }(_0x159ef2);
    } catch {
      if (_0x131493 === Qe && _0x1ccf3e === et()) {
        await _0x313aea().fetchBookmarks(true);
      }
    }
  },
  clear: () => {
    Qe++;
    _0x37f50b({
      bookmarks: [],
      bookmarksLoading: false,
      bookmarksHasMore: true,
      cursor: "",
      error: null
    });
  }
}));
const nt = () => tt(_0x1af1f1 => _0x1af1f1.bookmarks);
const at = () => tt(_0x400ca4 => _0x400ca4.bookmarksLoading);
const dt = {
  addBookmark: _0xb28c31 => tt.getState().addBookmark(_0xb28c31),
  clear: () => tt.getState().clear()
};
function ut(_0x3db08c) {
  return new Promise(_0x296b51 => {
    const _0x3d4efd = URL.createObjectURL(_0x3db08c);
    if (_0x3db08c.type.startsWith("image/")) {
      const _0x467f6d = new Image();
      _0x467f6d.onload = () => {
        URL.revokeObjectURL(_0x3d4efd);
        _0x296b51({
          width: _0x467f6d.naturalWidth,
          height: _0x467f6d.naturalHeight
        });
      };
      _0x467f6d.onerror = () => {
        URL.revokeObjectURL(_0x3d4efd);
        _0x296b51(null);
      };
      _0x467f6d.src = _0x3d4efd;
      return;
    }
    if (_0x3db08c.type.startsWith("video/")) {
      const _0x27c202 = document.createElement("video");
      _0x27c202.preload = "metadata";
      _0x27c202.onloadedmetadata = () => {
        URL.revokeObjectURL(_0x3d4efd);
        _0x296b51({
          width: _0x27c202.videoWidth,
          height: _0x27c202.videoHeight
        });
      };
      _0x27c202.onerror = () => {
        URL.revokeObjectURL(_0x3d4efd);
        _0x296b51(null);
      };
      _0x27c202.src = _0x3d4efd;
      return;
    }
    URL.revokeObjectURL(_0x3d4efd);
    _0x296b51(null);
  });
}
async function st(_0x5752fe) {
  const _0x1f711f = [];
  for (const _0x36fc1b of _0x5752fe) {
    const _0x4ba335 = await ut(_0x36fc1b);
    if (_0x4ba335) {
      _0x1f711f.push({
        filename: _0x36fc1b.name,
        width: _0x4ba335.width,
        height: _0x4ba335.height
      });
    } else {
      _0x1f711f.push({
        filename: _0x36fc1b.name
      });
    }
  }
  return _0x1f711f;
}
const rt = new WeakMap();
const it = new WeakMap();
const ot = new WeakMap();
const ct = new WeakMap();
const lt = new WeakSet();
function ft(_0x280216, _0x576a78, _0x170c35) {
  return new Promise((_0x5f08a3, _0x248e11) => {
    const _0x48e2bc = new XMLHttpRequest();
    let _0x4eb625;
    let _0x15076c = ct.get(_0x576a78);
    if (!_0x15076c) {
      _0x15076c = new Set();
      ct.set(_0x576a78, _0x15076c);
    }
    _0x15076c.add(_0x48e2bc);
    _0x48e2bc.onloadend = () => _0x15076c.delete(_0x48e2bc);
    try {
      _0x4eb625 = new URL(_0x280216.url);
    } catch {
      _0x15076c.delete(_0x48e2bc);
      _0x248e11(new Error(_0x3f90ba.t("uploads.failed")));
      return;
    }
    if (_0x4eb625.protocol !== "https:" || _0x4eb625.username || _0x4eb625.password || _0x4eb625.port || !_0x4eb625.hostname.endsWith("-s3.storage.bunnycdn.com")) {
      _0x15076c.delete(_0x48e2bc);
      _0x248e11(new Error(_0x3f90ba.t("uploads.failed")));
      return;
    }
    _0x48e2bc.open("PUT", _0x280216.url);
    _0x48e2bc.timeout = 600000;
    _0x48e2bc.withCredentials = false;
    _0x48e2bc.setRequestHeader("Content-Type", "application/octet-stream");
    _0x48e2bc.upload.onprogress = _0x40e06a => _0x170c35(Math.min(_0x40e06a.loaded, _0x280216.size));
    _0x48e2bc.onload = () => _0x48e2bc.status >= 200 && _0x48e2bc.status < 300 ? _0x5f08a3() : _0x248e11(Object.assign(new Error(_0x3f90ba.t("uploads.failed")), {
      status: _0x48e2bc.status
    }));
    _0x48e2bc.onerror = _0x48e2bc.ontimeout = () => _0x248e11(new Error(_0x3f90ba.t("uploads.failed")));
    _0x48e2bc.onabort = () => _0x248e11(new DOMException("Upload cancelled", "AbortError"));
    _0x48e2bc.send(_0x576a78.slice(_0x280216.offset, _0x280216.offset + _0x280216.size));
  });
}
async function pt(_0x1ab9e6, _0x414579, _0x36aea9, _0x35ebe9 = _0x44b99c, _0x1a479e = "message") {
  const _0x4923bc = _0x414579.reduce((_0x20ef3e, _0x4bf6ee) => _0x20ef3e + _0x4bf6ee.size, 0);
  if (_0x4923bc <= 83886080) {
    return null;
  }
  _0x414579.forEach(_0x310e35 => lt.delete(_0x310e35));
  if (!(await async function (_0x247bd5, _0x9c2789) {
    let _0x357c3a = ot.get(_0x247bd5);
    if (!_0x357c3a || _0x357c3a.expires < Date.now()) {
      const _0x4bca23 = _0x247bd5.get("/api/v1/uploads/capabilities", {
        _skipToast: true
      }).then(_0x181ddf => _0x181ddf.data).catch(_0x3e55de => {
        if ([404, 405, 501].includes(_0x3e55de?.response?.status)) {
          return {
            enabled: false
          };
        }
        ot.delete(_0x247bd5);
        throw _0x3e55de;
      });
      _0x357c3a = {
        expires: Date.now() + 60000,
        request: _0x4bca23
      };
      ot.set(_0x247bd5, _0x357c3a);
    }
    const _0x4ae268 = await _0x357c3a.request;
    return Boolean(_0x4ae268.enabled && (_0x9c2789 !== "forum" || _0x4ae268.forum));
  }(_0x35ebe9, _0x1a479e))) {
    throw new Error(_0x3f90ba.t("uploads.unavailable"));
  }
  const _0x2b9be2 = await st(_0x414579);
  if (_0x414579.some(_0x59d8d3 => lt.has(_0x59d8d3))) {
    throw new DOMException("Upload cancelled", "AbortError");
  }
  const _0x599f3b = function (_0xb5180a, _0x5f23cf) {
    return (_0xb5180a.defaults.baseURL ?? "") + ":" + (_0x22aaa1.getState().user?.id ?? "") + ":" + _0x5f23cf;
  }(_0x35ebe9, _0x1ab9e6);
  const _0x83914b = [];
  let _0x30ceac = 0;
  for (let _0x41cc98 = 0; _0x41cc98 < _0x414579.length; _0x41cc98++) {
    const _0x31ff32 = _0x414579[_0x41cc98];
    let _0x482915 = it.get(_0x31ff32);
    if (!_0x482915) {
      _0x482915 = new Map();
      it.set(_0x31ff32, _0x482915);
    }
    let _0x33950e = _0x482915.get(_0x599f3b);
    if (_0x33950e) {
      try {
        _0x33950e = (await _0x35ebe9.get("/api/v1/uploads/" + _0x33950e.id, {
          _skipToast: true
        })).data;
      } catch (_0x77b8ef) {
        if (![404, 410].includes(_0x77b8ef?.response?.status)) {
          throw _0x77b8ef;
        }
        _0x33950e = undefined;
      }
    }
    _0x33950e ||= (await _0x35ebe9.post("/api/v1/uploads/channels/" + _0x1ab9e6, {
      ..._0x2b9be2[_0x41cc98],
      size: _0x31ff32.size,
      content_type: _0x31ff32.type || "application/octet-stream"
    }, {
      _skipToast: true
    })).data;
    _0x482915.set(_0x599f3b, _0x33950e);
    rt.set(_0x33950e, _0x35ebe9);
    if (lt.has(_0x31ff32)) {
      mt(_0x31ff32, _0x35ebe9);
      throw new DOMException("Upload cancelled", "AbortError");
    }
    if (_0x33950e.status !== "ready" && _0x33950e.status !== "consumed") {
      const _0x25861f = new Map(_0x33950e.parts.map(_0x441510 => [_0x441510.number, _0x441510.done ? _0x441510.size : 0]));
      const _0x3ba8de = () => _0x36aea9?.(Math.min(95, Math.round((_0x30ceac + [..._0x25861f.values()].reduce((_0x5a156b, _0x5918ae) => _0x5a156b + _0x5918ae, 0)) / _0x4923bc * 95)));
      const _0xc95588 = _0x33950e.parts.filter(_0xe4d5c0 => !_0xe4d5c0.done);
      const _0x2914c8 = async () => {
        while (_0xc95588.length) {
          if (lt.has(_0x31ff32)) {
            throw new DOMException("Upload cancelled", "AbortError");
          }
          let _0x53ca51 = _0xc95588.shift();
          let _0x3adbd0 = false;
          for (let _0x2af955 = 0; _0x2af955 < 3; _0x2af955++) {
            try {
              await ft(_0x53ca51, _0x31ff32, _0x68280c => {
                _0x25861f.set(_0x53ca51.number, _0x68280c);
                _0x3ba8de();
              });
              _0x3adbd0 = true;
              break;
            } catch (_0x45d63b) {
              if (_0x45d63b.name === "AbortError" || lt.has(_0x31ff32)) {
                throw _0x45d63b;
              }
              if (_0x2af955 === 2) {
                throw _0x45d63b;
              }
              _0x25861f.set(_0x53ca51.number, 0);
              if (_0x45d63b.status === 401 || _0x45d63b.status === 403) {
                const _0x5a19a6 = (await _0x35ebe9.get("/api/v1/uploads/" + _0x33950e.id, {
                  _skipToast: true
                })).data;
                _0x53ca51 = _0x5a19a6.parts.find(_0x3b3851 => _0x3b3851.number === _0x53ca51.number);
                if (!_0x53ca51) {
                  throw _0x45d63b;
                }
              }
              await new Promise(_0x36bfe7 => setTimeout(_0x36bfe7, (_0x2af955 + 1) * 500));
            }
          }
          if (!_0x3adbd0) {
            throw new Error(_0x3f90ba.t("uploads.failed"));
          }
          _0x25861f.set(_0x53ca51.number, _0x53ca51.size);
          _0x3ba8de();
        }
      };
      const _0x400daf = (await Promise.allSettled([_0x2914c8(), _0x2914c8()])).find(_0x717da5 => _0x717da5.status === "rejected");
      if (_0x400daf) {
        throw _0x400daf.reason;
      }
      await _0x35ebe9.post("/api/v1/uploads/" + _0x33950e.id + "/complete", {}, {
        _skipToast: true
      });
      _0x33950e.status = "ready";
    }
    _0x83914b.push(_0x33950e.id);
    _0x30ceac += _0x31ff32.size;
  }
  return {
    ids: _0x83914b,
    nonce: "upload:" + _0x83914b.join(":"),
    consumed: () => {
      _0x414579.forEach(_0x29de58 => it.get(_0x29de58)?.delete(_0x599f3b));
      _0x36aea9?.(100);
    }
  };
}
function mt(_0x3c50de, _0x1dd64e = _0x44b99c) {
  lt.add(_0x3c50de);
  ct.get(_0x3c50de)?.forEach(_0x58268c => _0x58268c.abort());
  const _0x18c120 = it.get(_0x3c50de);
  if (_0x18c120) {
    it.delete(_0x3c50de);
    for (const _0x39c49a of _0x18c120.values()) {
      (rt.get(_0x39c49a) ?? _0x1dd64e).delete("/api/v1/uploads/" + _0x39c49a.id, {
        _skipToast: true
      }).catch(() => {});
    }
  }
}
const ht = _0x3b5a59(_0x416b46 => ({
  counts: {},
  fetchCount: async _0x2b48f4 => {
    try {
      const _0x3a116a = await _0x588afa(_0x2b48f4, {
        status: 0,
        limit: 1
      });
      _0x416b46(_0x57a9a7 => ({
        counts: {
          ..._0x57a9a7.counts,
          [_0x2b48f4]: _0x3a116a.total || 0
        }
      }));
    } catch {}
  },
  increment: _0x10e5c7 => {
    _0x416b46(_0x5854a3 => ({
      counts: {
        ..._0x5854a3.counts,
        [_0x10e5c7]: (_0x5854a3.counts[_0x10e5c7] || 0) + 1
      }
    }));
  },
  decrement: _0x5b3932 => {
    _0x416b46(_0x2e57dd => ({
      counts: {
        ..._0x2e57dd.counts,
        [_0x5b3932]: Math.max(0, (_0x2e57dd.counts[_0x5b3932] || 0) - 1)
      }
    }));
  },
  setCount: (_0x2c95b1, _0xa8d8e9) => {
    _0x416b46(_0x387623 => ({
      counts: {
        ..._0x387623.counts,
        [_0x2c95b1]: _0xa8d8e9
      }
    }));
  }
}));
const gt = Object.freeze(Object.defineProperty({
  __proto__: null,
  usePendingApplicationsStore: ht
}, Symbol.toStringTag, {
  value: "Module"
}));
const bt = _0x3b5a59()(_0x5f4fc4(_0x1a532f => ({
  showOwnCamera: true,
  showParticipantsWithoutVideo: true,
  prioritizeSpeakers: false,
  hideScreenSharePreview: false,
  mirrorCamera: true,
  setShowOwnCamera: _0x36fea1 => _0x1a532f({
    showOwnCamera: _0x36fea1
  }),
  setShowParticipantsWithoutVideo: _0x46bd00 => _0x1a532f({
    showParticipantsWithoutVideo: _0x46bd00
  }),
  setPrioritizeSpeakers: _0x24128e => _0x1a532f({
    prioritizeSpeakers: _0x24128e
  }),
  setHideScreenSharePreview: _0x45bfe5 => _0x1a532f({
    hideScreenSharePreview: _0x45bfe5
  }),
  setMirrorCamera: _0x4a3e26 => _0x1a532f({
    mirrorCamera: _0x4a3e26
  })
}), {
  name: "jubbio-voice-view"
}));
async function yt(_0xeacc9f, _0x45c56a) {
  return async function (_0x59d5e3, _0x3f2fd8, _0x548b13 = 300000, _0x14bd07) {
    return _0x41afc7.getOrFetch(_0x59d5e3, _0x3f2fd8, {
      ttlMs: _0x548b13,
      force: _0x14bd07
    });
  }(_0x293a3b.channelsByGuild(_0xeacc9f), async () => {
    try {
      if (_0x45c56a?.force) {
        return (await _0x44b99c.get("/api/v1/guilds/" + _0xeacc9f + "/channels", {
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache"
          }
        })).data;
      }
      return (await _0x44b99c.get("/api/v1/guilds/" + _0xeacc9f + "/channels")).data;
    } catch (_0x537101) {
      throw _0x56f0fc(_0x537101);
    }
  }, 300000, _0x45c56a?.force);
}
async function wt(_0x4bcb3e, _0x52b008) {
  try {
    return (await _0x44b99c.get("/api/v1/channels/" + _0x4bcb3e + "/" + _0x52b008 + "/settings")).data;
  } catch (_0x383057) {
    throw _0x56f0fc(_0x383057);
  }
}
async function vt(_0x5c6d1b, _0x255ff7) {
  try {
    const _0x58cdf4 = (await _0x44b99c.post("/api/v1/guilds/" + _0x5c6d1b + "/channels", _0x255ff7)).data;
    _0xc3c4e0.clearChannelData(_0x5c6d1b);
    return _0x58cdf4;
  } catch (_0xb7910e) {
    throw _0x56f0fc(_0xb7910e);
  }
}
async function _t(_0x2b9f4c, _0x7d5ff5, _0x532ff6) {
  try {
    const _0x30e129 = (await _0x44b99c.put("/api/v1/guilds/" + _0x2b9f4c + "/channels/" + _0x7d5ff5, _0x532ff6)).data;
    _0xc3c4e0.clearChannelData(_0x2b9f4c, _0x7d5ff5);
    return _0x30e129;
  } catch (_0x56ba2c) {
    throw _0x56f0fc(_0x56ba2c);
  }
}
async function St(_0x319849, _0x37293a, _0x4ad16d) {
  try {
    const _0x2aeee1 = (await _0x44b99c.patch("/api/v1/channels/" + _0x319849 + "/" + _0x37293a, _0x4ad16d)).data;
    _0xc3c4e0.clearChannelData(_0x319849, _0x37293a);
    return _0x2aeee1;
  } catch (_0x52d44a) {
    throw _0x56f0fc(_0x52d44a);
  }
}
async function It(_0x1a67e8, _0x4102e4, _0x1c4077) {
  try {
    const _0x105fc4 = (await _0x44b99c.patch("/api/v1/channels/" + _0x1a67e8 + "/" + _0x4102e4, _0x1c4077, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })).data;
    _0xc3c4e0.clearChannelData(_0x1a67e8, _0x4102e4);
    return _0x105fc4;
  } catch (_0x194564) {
    throw _0x56f0fc(_0x194564);
  }
}
async function Ct(_0x535283, _0x38f731) {
  try {
    const _0x1d74d7 = (await _0x44b99c.delete("/api/v1/channels/" + _0x535283 + "/" + _0x38f731)).data;
    _0xc3c4e0.clearChannelData(_0x535283);
    return _0x1d74d7;
  } catch (_0x5cb778) {
    throw _0x56f0fc(_0x5cb778);
  }
}
async function kt(_0x16fec6, _0x290679) {
  try {
    const _0x10f6cb = (await _0x44b99c.post("/api/v1/guilds/" + _0x16fec6 + "/categories", _0x290679)).data;
    _0xc3c4e0.clearChannelData(_0x16fec6);
    return _0x10f6cb;
  } catch (_0x5bc3ad) {
    throw _0x56f0fc(_0x5bc3ad);
  }
}
async function Et(_0x4ce05c, _0x1d7fb7) {
  try {
    const _0x3e8aa7 = (await _0x44b99c.delete("/api/v1/guilds/" + _0x4ce05c + "/categories/" + _0x1d7fb7)).data;
    _0xc3c4e0.clearChannelData(_0x4ce05c);
    return _0x3e8aa7;
  } catch (_0x516a97) {
    throw _0x56f0fc(_0x516a97);
  }
}
async function At(_0x5be716, _0x119b75) {
  try {
    return (await _0x44b99c.get("/api/v1/guilds/" + _0x5be716 + "/categories/" + _0x119b75)).data;
  } catch (_0x4de5cd) {
    throw _0x56f0fc(_0x4de5cd);
  }
}
async function Tt(_0x1c0e73, _0x38d833, _0x38ba1c) {
  try {
    const _0x2a56b8 = (await _0x44b99c.patch("/api/v1/guilds/" + _0x1c0e73 + "/categories/" + _0x38d833, _0x38ba1c)).data;
    _0xc3c4e0.clearChannelData(_0x1c0e73);
    return _0x2a56b8;
  } catch (_0x4317de) {
    throw _0x56f0fc(_0x4317de);
  }
}
async function Mt(_0x245f3a, _0x1b9ea3, _0x5ccbd9) {
  try {
    const _0x2b3934 = (await _0x44b99c.patch("/api/v1/guilds/" + _0x245f3a + "/categories/" + _0x1b9ea3 + "/position", _0x5ccbd9)).data;
    _0xc3c4e0.clearChannelData(_0x245f3a);
    return _0x2b3934;
  } catch (_0x223cb0) {
    throw _0x56f0fc(_0x223cb0);
  }
}
async function Dt(_0x4707b3, _0x507a87) {
  try {
    return (await _0x44b99c.get("/api/v1/guilds/" + _0x4707b3 + "/channels/" + _0x507a87 + "/permissions/all")).data;
  } catch (_0x4fcc0b) {
    throw _0x56f0fc(_0x4fcc0b);
  }
}
async function $t(_0x21bfa8, _0x445a1b, _0x205970) {
  try {
    return (await _0x44b99c.delete("/api/v1/channels/" + _0x21bfa8 + "/" + _0x445a1b + "/permissions/" + _0x205970)).data;
  } catch (_0x1bfa8b) {
    throw _0x56f0fc(_0x1bfa8b);
  }
}
async function Ot(_0x7ba2d2, _0x465edf, _0x334f0a, _0x128472, _0xe16e13) {
  try {
    return (await _0x44b99c.patch("/api/v1/channels/" + _0x7ba2d2 + "/" + _0x465edf + "/permissions/" + _0x334f0a, {
      allow_permissions: _0x128472,
      deny_permissions: _0xe16e13
    })).data;
  } catch (_0x479ffd) {
    throw _0x56f0fc(_0x479ffd);
  }
}
async function Lt(_0x2e64f7, _0xa540eb, _0x364523, _0x1f20e5) {
  try {
    return (await _0x44b99c.post("/api/v1/channels/" + _0x2e64f7 + "/" + _0xa540eb + "/permissions/bulk", {
      role_ids: _0x364523,
      user_ids: _0x1f20e5
    })).data;
  } catch (_0x191be4) {
    throw _0x56f0fc(_0x191be4);
  }
}
async function Rt(_0x37df95, _0x58e39d, _0x42e603) {
  try {
    const _0x113a8d = (await _0x44b99c.patch("/api/v1/channels/" + _0x37df95 + "/" + _0x58e39d + "/position", _0x42e603)).data;
    _0xc3c4e0.clearChannelData(_0x37df95);
    return _0x113a8d;
  } catch (_0x5484c2) {
    throw _0x56f0fc(_0x5484c2);
  }
}
async function xt(_0xbe0f1d, _0x5a8f5c) {
  try {
    return (await _0x44b99c.get("/api/v1/guilds/" + _0xbe0f1d + "/categories/" + _0x5a8f5c + "/permissions/all")).data;
  } catch (_0x4913ad) {
    throw _0x56f0fc(_0x4913ad);
  }
}
async function Nt(_0x45ed39, _0xdc2935, _0x2dcde4, _0x3e5ef1, _0x3f3ee7) {
  try {
    return (await _0x44b99c.patch("/api/v1/guilds/" + _0x45ed39 + "/categories/" + _0xdc2935 + "/permissions/" + _0x2dcde4, {
      allow_permissions: _0x3e5ef1,
      deny_permissions: _0x3f3ee7
    })).data;
  } catch (_0x290b4c) {
    throw _0x56f0fc(_0x290b4c);
  }
}
async function Ut(_0x2bd53a, _0x16b81d, _0x14c57d) {
  try {
    return (await _0x44b99c.delete("/api/v1/guilds/" + _0x2bd53a + "/categories/" + _0x16b81d + "/permissions/" + _0x14c57d)).data;
  } catch (_0x146375) {
    throw _0x56f0fc(_0x146375);
  }
}
async function Pt(_0x4d706f, _0xe28bf8, _0x43a20c, _0x2c6b0a) {
  try {
    return (await _0x44b99c.post("/api/v1/guilds/" + _0x4d706f + "/categories/" + _0xe28bf8 + "/permissions/bulk", {
      role_ids: _0x43a20c,
      user_ids: _0x2c6b0a
    })).data;
  } catch (_0x449f91) {
    throw _0x56f0fc(_0x449f91);
  }
}
async function Gt(_0x58b036, _0x4d94a9) {
  try {
    return (await _0x44b99c.post("/api/v1/guilds/" + _0x58b036 + "/categories/" + _0x4d94a9 + "/sync-permissions")).data;
  } catch (_0x53e730) {
    throw _0x56f0fc(_0x53e730);
  }
}
async function zt(_0x2c5d62, _0x58a516, _0x4c57fc) {
  try {
    const _0x2f8088 = (await _0x44b99c.post("/api/v1/guilds/" + _0x2c5d62 + "/channels/" + _0x58a516 + "/clone", _0x4c57fc ?? {})).data;
    _0xc3c4e0.clearChannelData(_0x2c5d62);
    return _0x2f8088;
  } catch (_0x3f764f) {
    throw _0x56f0fc(_0x3f764f);
  }
}
var Ft = function () {
  var _0x2f33e2 = {
    base: "https://twemoji.maxcdn.com/v/14.0.2/",
    ext: ".png",
    size: "72x72",
    className: "emoji",
    convert: {
      fromCodePoint: function (_0x46acf5) {
        var _0x41b75d = typeof _0x46acf5 == "string" ? parseInt(_0x46acf5, 16) : _0x46acf5;
        if (_0x41b75d < 65536) {
          return _0x1c121a(_0x41b75d);
        }
        return _0x1c121a(55296 + ((_0x41b75d -= 65536) >> 10), 56320 + (_0x41b75d & 1023));
      },
      toCodePoint: _0x248dcf
    },
    onerror: function () {
      if (this.parentNode) {
        this.parentNode.replaceChild(_0x33f14f(this.alt, false), this);
      }
    },
    parse: function (_0x3f1885, _0x6a15a8) {
      if (!_0x6a15a8 || typeof _0x6a15a8 == "function") {
        _0x6a15a8 = {
          callback: _0x6a15a8
        };
      }
      return (typeof _0x3f1885 == "string" ? _0x5be12f : _0x3d91d6)(_0x3f1885, {
        callback: _0x6a15a8.callback || _0x443654,
        attributes: typeof _0x6a15a8.attributes == "function" ? _0x6a15a8.attributes : _0x49fea0,
        base: typeof _0x6a15a8.base == "string" ? _0x6a15a8.base : _0x2f33e2.base,
        ext: _0x6a15a8.ext || _0x2f33e2.ext,
        size: _0x6a15a8.folder || (_0x415955 = _0x6a15a8.size || _0x2f33e2.size, typeof _0x415955 == "number" ? _0x415955 + "x" + _0x415955 : _0x415955),
        className: _0x6a15a8.className || _0x2f33e2.className,
        onerror: _0x6a15a8.onerror || _0x2f33e2.onerror
      });
      var _0x415955;
    },
    replace: _0x1c7990,
    test: function (_0xdcdfc) {
      _0x3f26eb.lastIndex = 0;
      var _0x144221 = _0x3f26eb.test(_0xdcdfc);
      _0x3f26eb.lastIndex = 0;
      return _0x144221;
    }
  };
  var _0x10e0b8 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    "\"": "&quot;"
  };
  var _0x3f26eb = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g;
  var _0x32f6c9 = /\uFE0F/g;
  var _0x3a4bc0 = String.fromCharCode(8205);
  var _0x53dc21 = /[&<>'"]/g;
  var _0x191d8e = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/;
  var _0x1c121a = String.fromCharCode;
  return _0x2f33e2;
  function _0x33f14f(_0x106c56, _0x3dbb29) {
    return document.createTextNode(_0x3dbb29 ? _0x106c56.replace(_0x32f6c9, "") : _0x106c56);
  }
  function _0x43e08b(_0x5cee27) {
    return _0x5cee27.replace(_0x53dc21, _0x490e2b);
  }
  function _0x443654(_0x4a6fb5, _0x14179e) {
    return `${_0x14179e.base}${_0x14179e.size}/${_0x4a6fb5}${_0x14179e.ext}`;
  }
  function _0x39630d(_0x32d7b0, _0x1286ec) {
    var _0x211629;
    var _0x1ad408;
    var _0x159541 = _0x32d7b0.childNodes;
    for (var _0x11987a = _0x159541.length; _0x11987a--;) {
      if ((_0x1ad408 = (_0x211629 = _0x159541[_0x11987a]).nodeType) === 3) {
        _0x1286ec.push(_0x211629);
      } else if (_0x1ad408 === 1 && !("ownerSVGElement" in _0x211629) && !_0x191d8e.test(_0x211629.nodeName.toLowerCase())) {
        _0x39630d(_0x211629, _0x1286ec);
      }
    }
    return _0x1286ec;
  }
  function _0x4e78f9(_0x2617c1) {
    return _0x248dcf(_0x2617c1.indexOf(_0x3a4bc0) < 0 ? _0x2617c1.replace(_0x32f6c9, "") : _0x2617c1);
  }
  function _0x3d91d6(_0xebb27e, _0x4e8ebb) {
    var _0x50cff4;
    var _0x2f7f5d;
    var _0x59c521;
    for (var _0x1dc809, _0x5c4a10, _0x5d821b, _0x53dc7e, _0x4d71eb, _0x30ca4e, _0x526e2d, _0x1ddcb2, _0x142fc3, _0x4e6178, _0x3d761d = _0x39630d(_0xebb27e, []), _0x3d9162 = _0x3d761d.length; _0x3d9162--;) {
      _0x59c521 = false;
      _0x1dc809 = document.createDocumentFragment();
      _0x5d821b = (_0x5c4a10 = _0x3d761d[_0x3d9162]).nodeValue;
      _0x4d71eb = 0;
      while (_0x53dc7e = _0x3f26eb.exec(_0x5d821b)) {
        if ((_0x30ca4e = _0x53dc7e.index) !== _0x4d71eb) {
          _0x1dc809.appendChild(_0x33f14f(_0x5d821b.slice(_0x4d71eb, _0x30ca4e), true));
        }
        _0x142fc3 = _0x4e78f9(_0x1ddcb2 = _0x53dc7e[0]);
        _0x4d71eb = _0x30ca4e + _0x1ddcb2.length;
        _0x4e6178 = _0x4e8ebb.callback(_0x142fc3, _0x4e8ebb);
        if (_0x142fc3 && _0x4e6178) {
          (_0x526e2d = new Image()).onerror = _0x4e8ebb.onerror;
          _0x526e2d.setAttribute("draggable", "false");
          for (_0x2f7f5d in _0x50cff4 = _0x4e8ebb.attributes(_0x1ddcb2, _0x142fc3)) {
            if (_0x50cff4.hasOwnProperty(_0x2f7f5d) && _0x2f7f5d.indexOf("on") !== 0 && !_0x526e2d.hasAttribute(_0x2f7f5d)) {
              _0x526e2d.setAttribute(_0x2f7f5d, _0x50cff4[_0x2f7f5d]);
            }
          }
          _0x526e2d.className = _0x4e8ebb.className;
          _0x526e2d.alt = _0x1ddcb2;
          _0x526e2d.src = _0x4e6178;
          _0x59c521 = true;
          _0x1dc809.appendChild(_0x526e2d);
        }
        if (!_0x526e2d) {
          _0x1dc809.appendChild(_0x33f14f(_0x1ddcb2, false));
        }
        _0x526e2d = null;
      }
      if (_0x59c521) {
        if (_0x4d71eb < _0x5d821b.length) {
          _0x1dc809.appendChild(_0x33f14f(_0x5d821b.slice(_0x4d71eb), true));
        }
        _0x5c4a10.parentNode.replaceChild(_0x1dc809, _0x5c4a10);
      }
    }
    return _0xebb27e;
  }
  function _0x5be12f(_0x29bc0b, _0x249d06) {
    return _0x1c7990(_0x29bc0b, function (_0x265dee) {
      var _0x8d7604;
      var _0x39e9b6;
      var _0xce3536 = _0x265dee;
      var _0x11dcda = _0x4e78f9(_0x265dee);
      var _0x43d758 = _0x249d06.callback(_0x11dcda, _0x249d06);
      if (_0x11dcda && _0x43d758) {
        _0xce3536 = `<img class="${_0x249d06.className}" draggable="false" alt="${_0x265dee}" src="${_0x43d758}"`;
        for (_0x39e9b6 in _0x8d7604 = _0x249d06.attributes(_0x265dee, _0x11dcda)) {
          if (_0x8d7604.hasOwnProperty(_0x39e9b6) && _0x39e9b6.indexOf("on") !== 0 && _0xce3536.indexOf(" " + _0x39e9b6 + "=") === -1) {
            _0xce3536 = _0xce3536.concat(" ", _0x39e9b6, "=\"", _0x43e08b(_0x8d7604[_0x39e9b6]), "\"");
          }
        }
        _0xce3536 = _0xce3536.concat("/>");
      }
      return _0xce3536;
    });
  }
  function _0x490e2b(_0x4fc4e0) {
    return _0x10e0b8[_0x4fc4e0];
  }
  function _0x49fea0() {
    return null;
  }
  function _0x1c7990(_0x2dee31, _0xcf367a) {
    return String(_0x2dee31).replace(_0x3f26eb, _0xcf367a);
  }
  function _0x248dcf(_0x2559c5, _0x343f60) {
    var _0x3118b0 = [];
    var _0x59f9a0 = 0;
    for (var _0x2c3f78 = 0, _0x1f464c = 0; _0x1f464c < _0x2559c5.length;) {
      _0x59f9a0 = _0x2559c5.charCodeAt(_0x1f464c++);
      if (_0x2c3f78) {
        _0x3118b0.push((65536 + (_0x2c3f78 - 55296 << 10) + (_0x59f9a0 - 56320)).toString(16));
        _0x2c3f78 = 0;
      } else if (_0x59f9a0 >= 55296 && _0x59f9a0 <= 56319) {
        _0x2c3f78 = _0x59f9a0;
      } else {
        _0x3118b0.push(_0x59f9a0.toString(16));
      }
    }
    return _0x3118b0.join(_0x343f60 || "-");
  }
}(); /*! @license DOMPurify 3.4.16 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.16/LICENSE */
function jt(_0x5474b3, _0x561c28) {
  if (_0x561c28 == null || _0x561c28 > _0x5474b3.length) {
    _0x561c28 = _0x5474b3.length;
  }
  for (var _0x4a957e = 0, _0x3ae145 = Array(_0x561c28); _0x4a957e < _0x561c28; _0x4a957e++) {
    _0x3ae145[_0x4a957e] = _0x5474b3[_0x4a957e];
  }
  return _0x3ae145;
}
function Ht(_0x2e0ade, _0x1fc55b) {
  return function (_0x191147) {
    if (Array.isArray(_0x191147)) {
      return _0x191147;
    }
  }(_0x2e0ade) || function (_0x34b342, _0x538532) {
    var _0x320f7d = _0x34b342 == null ? null : typeof Symbol != "undefined" && _0x34b342[Symbol.iterator] || _0x34b342["@@iterator"];
    if (_0x320f7d != null) {
      var _0x399ea4;
      var _0x6fd42f;
      var _0x20ca2a;
      var _0x47923a;
      var _0x5366fc = [];
      var _0x39e4ae = true;
      var _0x5c9bd7 = false;
      try {
        _0x20ca2a = (_0x320f7d = _0x320f7d.call(_0x34b342)).next;
        if (_0x538532 === 0) ;else {
          for (; !(_0x39e4ae = (_0x399ea4 = _0x20ca2a.call(_0x320f7d)).done) && (_0x5366fc.push(_0x399ea4.value), _0x5366fc.length !== _0x538532); _0x39e4ae = true);
        }
      } catch (_0x5efa12) {
        _0x5c9bd7 = true;
        _0x6fd42f = _0x5efa12;
      } finally {
        try {
          if (!_0x39e4ae && _0x320f7d.return != null && (_0x47923a = _0x320f7d.return(), Object(_0x47923a) !== _0x47923a)) {
            return;
          }
        } finally {
          if (_0x5c9bd7) {
            throw _0x6fd42f;
          }
        }
      }
      return _0x5366fc;
    }
  }(_0x2e0ade, _0x1fc55b) || function (_0x522d90, _0x4c2b55) {
    if (_0x522d90) {
      if (typeof _0x522d90 == "string") {
        return jt(_0x522d90, _0x4c2b55);
      }
      var _0x28bad7 = {}.toString.call(_0x522d90).slice(8, -1);
      if (_0x28bad7 === "Object" && _0x522d90.constructor) {
        _0x28bad7 = _0x522d90.constructor.name;
      }
      if (_0x28bad7 === "Map" || _0x28bad7 === "Set") {
        return Array.from(_0x522d90);
      } else if (_0x28bad7 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x28bad7)) {
        return jt(_0x522d90, _0x4c2b55);
      } else {
        return undefined;
      }
    }
  }(_0x2e0ade, _0x1fc55b) || function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
const Bt = Object.entries;
const Wt = Object.setPrototypeOf;
const qt = Object.isFrozen;
const Yt = Object.getPrototypeOf;
const Vt = Object.getOwnPropertyDescriptor;
let Jt = Object.freeze;
let Xt = Object.seal;
let Zt = Object.create;
let Kt = typeof Reflect != "undefined" && Reflect;
let Qt = Kt.apply;
let en = Kt.construct;
Jt ||= function (_0x15d150) {
  return _0x15d150;
};
Xt ||= function (_0x2aa2bc) {
  return _0x2aa2bc;
};
Qt ||= function (_0x10d7c0, _0x3d7d0e) {
  for (var _0x2bb23e = arguments.length, _0xa6c1f6 = new Array(_0x2bb23e > 2 ? _0x2bb23e - 2 : 0), _0x57984c = 2; _0x57984c < _0x2bb23e; _0x57984c++) {
    _0xa6c1f6[_0x57984c - 2] = arguments[_0x57984c];
  }
  return _0x10d7c0.apply(_0x3d7d0e, _0xa6c1f6);
};
en ||= function (_0x120a66) {
  for (var _0x4e03f4 = arguments.length, _0x141060 = new Array(_0x4e03f4 > 1 ? _0x4e03f4 - 1 : 0), _0x377838 = 1; _0x377838 < _0x4e03f4; _0x377838++) {
    _0x141060[_0x377838 - 1] = arguments[_0x377838];
  }
  return new _0x120a66(..._0x141060);
};
const tn = In(Array.prototype.forEach);
const nn = In(Array.prototype.lastIndexOf);
const an = In(Array.prototype.pop);
const dn = In(Array.prototype.push);
const un = In(Array.prototype.splice);
const sn = Array.isArray;
const rn = In(String.prototype.toLowerCase);
const on = In(String.prototype.toString);
const cn = In(String.prototype.match);
const ln = In(String.prototype.replace);
const fn = In(String.prototype.indexOf);
const pn = In(String.prototype.trim);
const mn = In(Number.prototype.toString);
const hn = In(Boolean.prototype.toString);
const gn = typeof BigInt == "undefined" ? null : In(BigInt.prototype.toString);
const bn = typeof Symbol == "undefined" ? null : In(Symbol.prototype.toString);
const yn = In(Object.prototype.hasOwnProperty);
const wn = In(Object.prototype.toString);
const vn = In(RegExp.prototype.test);
Sn = TypeError;
const _n = function () {
  for (var _0x33f02f = arguments.length, _0xb1960f = new Array(_0x33f02f), _0x4998c0 = 0; _0x4998c0 < _0x33f02f; _0x4998c0++) {
    _0xb1960f[_0x4998c0] = arguments[_0x4998c0];
  }
  return en(Sn, _0xb1960f);
};
var Sn;
function In(_0x4aeb3a) {
  return function (_0x29dc0f) {
    if (_0x29dc0f instanceof RegExp) {
      _0x29dc0f.lastIndex = 0;
    }
    for (var _0x49c51b = arguments.length, _0x2f58c3 = new Array(_0x49c51b > 1 ? _0x49c51b - 1 : 0), _0x1a6ebc = 1; _0x1a6ebc < _0x49c51b; _0x1a6ebc++) {
      _0x2f58c3[_0x1a6ebc - 1] = arguments[_0x1a6ebc];
    }
    return Qt(_0x4aeb3a, _0x29dc0f, _0x2f58c3);
  };
}
function Cn(_0x3ad1a4, _0xf348a1, _0xb3ec6 = rn) {
  if (Wt) {
    Wt(_0x3ad1a4, null);
  }
  if (!sn(_0xf348a1)) {
    return _0x3ad1a4;
  }
  let _0x557ad8 = _0xf348a1.length;
  while (_0x557ad8--) {
    let _0xcc6cb7 = _0xf348a1[_0x557ad8];
    if (typeof _0xcc6cb7 == "string") {
      const _0x2f8267 = _0xb3ec6(_0xcc6cb7);
      if (_0x2f8267 !== _0xcc6cb7) {
        if (!qt(_0xf348a1)) {
          _0xf348a1[_0x557ad8] = _0x2f8267;
        }
        _0xcc6cb7 = _0x2f8267;
      }
    }
    _0x3ad1a4[_0xcc6cb7] = true;
  }
  return _0x3ad1a4;
}
function kn(_0x329bbe) {
  for (let _0x37bbf5 = 0; _0x37bbf5 < _0x329bbe.length; _0x37bbf5++) {
    if (!yn(_0x329bbe, _0x37bbf5)) {
      _0x329bbe[_0x37bbf5] = null;
    }
  }
  return _0x329bbe;
}
function En(_0x142505) {
  const _0x4cd4c8 = Zt(null);
  for (const _0x5c09e7 of Bt(_0x142505)) {
    var _0x1e584a = Ht(_0x5c09e7, 2);
    const _0x2dab6e = _0x1e584a[0];
    const _0x5c478e = _0x1e584a[1];
    if (yn(_0x142505, _0x2dab6e)) {
      if (sn(_0x5c478e)) {
        _0x4cd4c8[_0x2dab6e] = kn(_0x5c478e);
      } else if (_0x5c478e && typeof _0x5c478e == "object" && _0x5c478e.constructor === Object) {
        _0x4cd4c8[_0x2dab6e] = En(_0x5c478e);
      } else {
        _0x4cd4c8[_0x2dab6e] = _0x5c478e;
      }
    }
  }
  return _0x4cd4c8;
}
function An(_0x5bf89c, _0x556e56) {
  while (_0x5bf89c !== null) {
    const _0xc69460 = Vt(_0x5bf89c, _0x556e56);
    if (_0xc69460) {
      if (_0xc69460.get) {
        return In(_0xc69460.get);
      }
      if (typeof _0xc69460.value == "function") {
        return In(_0xc69460.value);
      }
    }
    _0x5bf89c = Yt(_0x5bf89c);
  }
  return function () {
    return null;
  };
}
const Tn = Jt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
const Mn = Jt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
const Dn = Jt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
const $n = Jt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
const On = Jt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
const Ln = Jt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
const Rn = Jt(["#text"]);
const xn = Jt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]);
const Nn = Jt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
const Un = Jt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
const Pn = Jt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
const Gn = Xt(/{{[\w\W]*|^[\w\W]*}}/g);
const zn = Xt(/<%[\w\W]*|^[\w\W]*%>/g);
const Fn = Xt(/\${[\w\W]*/g);
const jn = Xt(/^data-[\-\w.\u00B7-\uFFFF]+$/);
const Hn = Xt(/^aria-[\-\w]+$/);
const Bn = Xt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
const Wn = Xt(/^(?:\w+script|data):/i);
const qn = Xt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
const Yn = Xt(/^html$/i);
const Vn = Xt(/^[a-z][.\w]*(-[.\w]+)+$/i);
const Jn = Xt(/<[/\w!]/g);
const Xn = Xt(/<[/\w]/g);
const Zn = Xt(/<\/no(script|embed|frames)/i);
const Kn = Xt(/\/>/i);
const Qn = 1;
const ea = 3;
const ta = 7;
const na = 8;
const aa = 9;
const da = 11;
const ua = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"];
const sa = Jt(Cn({}, ua));
const ra = function () {
  const _0x33cb3f = {};
  tn(ua, _0x370efd => {
    _0x33cb3f[_0x370efd] = Xt(new RegExp("</" + _0x370efd + "(?=[\\t\\n\\f\\r />])", "i"));
  });
  return Jt(_0x33cb3f);
}();
const ia = function () {
  if (typeof window == "undefined") {
    return null;
  } else {
    return window;
  }
};
const oa = function (_0x5bc2f4, _0x308d4c, _0x127e38, _0x31f0fd) {
  if (yn(_0x5bc2f4, _0x308d4c) && sn(_0x5bc2f4[_0x308d4c])) {
    return Cn(_0x31f0fd.base ? En(_0x31f0fd.base) : {}, _0x5bc2f4[_0x308d4c], _0x31f0fd.transform);
  } else {
    return _0x127e38;
  }
};
const ca = function (_0x42f9df, _0x59f86f, _0x1bdeb9) {
  const _0x22d989 = yn(_0x42f9df, _0x59f86f) ? _0x42f9df[_0x59f86f] : undefined;
  if (_0x22d989 && typeof _0x22d989 == "object") {
    return En(_0x22d989);
  } else {
    return _0x1bdeb9();
  }
};
var la = function e(_0x3d5327 = ia()) {
  const _0x1fa9da = _0x790999 => e(_0x790999);
  _0x1fa9da.version = "3.4.16";
  _0x1fa9da.removed = [];
  if (!_0x3d5327 || !_0x3d5327.document || _0x3d5327.document.nodeType !== aa || !_0x3d5327.Element) {
    _0x1fa9da.isSupported = false;
    return _0x1fa9da;
  }
  let _0x4f783a = _0x3d5327.document;
  const _0x6b0215 = _0x4f783a;
  const _0x3277c5 = _0x6b0215.currentScript;
  _0x3d5327.DocumentFragment;
  const _0x52beb2 = _0x3d5327.HTMLTemplateElement;
  const _0x2c7c3f = _0x3d5327.Node;
  const _0x3bf9da = _0x3d5327.Element;
  const _0x6e4229 = _0x3d5327.NodeFilter;
  if (_0x3d5327.NamedNodeMap === undefined) {
    if (!_0x3d5327.NamedNodeMap) {
      _0x3d5327.MozNamedAttrMap;
    }
  }
  _0x3d5327.HTMLFormElement;
  const _0x576d21 = _0x3d5327.DOMParser;
  const _0x3af2c4 = _0x3d5327.trustedTypes;
  const _0x382ee6 = _0x3bf9da.prototype;
  const _0x1fe21a = An(_0x382ee6, "cloneNode");
  const _0x1c3c9b = An(_0x382ee6, "remove");
  const _0x5285ef = An(_0x382ee6, "removeAttributeNode");
  const _0x2360f5 = An(_0x382ee6, "nextSibling");
  const _0x1e0424 = An(_0x382ee6, "childNodes");
  const _0x31eae1 = An(_0x382ee6, "parentNode");
  const _0x4afe32 = An(_0x382ee6, "shadowRoot");
  const _0x3e982a = An(_0x382ee6, "attributes");
  const _0x363373 = _0x2c7c3f && _0x2c7c3f.prototype ? An(_0x2c7c3f.prototype, "nodeType") : null;
  const _0xfdb7fd = _0x2c7c3f && _0x2c7c3f.prototype ? An(_0x2c7c3f.prototype, "nodeName") : null;
  const _0x1c4ac4 = _0x2c7c3f && _0x2c7c3f.prototype ? An(_0x2c7c3f.prototype, "ownerDocument") : null;
  const _0x25f3c0 = function (_0x412150) {
    if (_0x363373) {
      return _0x363373(_0x412150);
    } else {
      return _0x412150.nodeType;
    }
  };
  const _0x361189 = function (_0x2a4dac) {
    if (_0xfdb7fd) {
      return _0xfdb7fd(_0x2a4dac);
    } else {
      return _0x2a4dac.nodeName;
    }
  };
  if (typeof _0x52beb2 == "function") {
    const _0x42b3b3 = _0x4f783a.createElement("template");
    if (_0x42b3b3.content && _0x42b3b3.content.ownerDocument) {
      _0x4f783a = _0x42b3b3.content.ownerDocument;
    }
  }
  let _0x27762b;
  let _0x29a15b;
  let _0x4fd22c = "";
  let _0x43cfd9 = false;
  let _0x26c4c3 = 0;
  const _0x5583c8 = function () {
    if (_0x26c4c3 > 0) {
      throw _n("A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the \"DOMPurify and Trusted Types\" section of the README.");
    }
  };
  const _0x3081b7 = function (_0x15fbad) {
    _0x5583c8();
    _0x26c4c3++;
    try {
      return _0x27762b.createHTML(_0x15fbad);
    } finally {
      _0x26c4c3--;
    }
  };
  const _0x193c3f = function () {
    if (!_0x43cfd9) {
      _0x29a15b = function (_0x3ac1b3, _0x3ec042) {
        if (typeof _0x3ac1b3 != "object" || typeof _0x3ac1b3.createPolicy != "function") {
          return null;
        }
        let _0x13ed89 = null;
        const _0x12af5b = "data-tt-policy-suffix";
        if (_0x3ec042 && _0x3ec042.hasAttribute(_0x12af5b)) {
          _0x13ed89 = _0x3ec042.getAttribute(_0x12af5b);
        }
        const _0x470c24 = "dompurify" + (_0x13ed89 ? "#" + _0x13ed89 : "");
        try {
          return _0x3ac1b3.createPolicy(_0x470c24, {
            createHTML: _0x476c16 => _0x476c16,
            createScriptURL: _0xfdf83b => _0xfdf83b
          });
        } catch (_0x234e47) {
          console.warn("TrustedTypes policy " + _0x470c24 + " could not be created.");
          return null;
        }
      }(_0x3af2c4, _0x3277c5);
      _0x43cfd9 = true;
    }
    return _0x29a15b;
  };
  const _0x37b786 = _0x4f783a;
  const _0x1453e7 = _0x37b786.implementation;
  const _0x348c7f = _0x37b786.createNodeIterator;
  const _0x37a3b4 = _0x37b786.createDocumentFragment;
  const _0x17ec2a = _0x37b786.getElementsByTagName;
  const _0x333799 = _0x6b0215.importNode;
  let _0x5de5e7 = {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
  _0x1fa9da.isSupported = typeof Bt == "function" && typeof _0x31eae1 == "function" && _0x1453e7 && _0x1453e7.createHTMLDocument !== undefined;
  const _0x2246e7 = Gn;
  const _0x188dd4 = zn;
  const _0x40d039 = Fn;
  const _0x1b03d1 = jn;
  const _0x4f4fda = Hn;
  const _0x17f56c = Wn;
  const _0x57d363 = qn;
  const _0x185c88 = Vn;
  let _0x516b54 = Bn;
  let _0x4c83df = null;
  const _0x3e2941 = Cn({}, [...Tn, ...Mn, ...Dn, ...On, ...Rn]);
  let _0x1c69a4 = null;
  const _0x40321a = Cn({}, [...xn, ...Nn, ...Un, ...Pn]);
  let _0x54e044 = Object.seal(Zt(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  let _0x22b02c = null;
  let _0x4715fb = null;
  const _0x528e7c = Object.seal(Zt(null, {
    tagCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    }
  }));
  let _0x4f5b4e = true;
  let _0xa3607e = true;
  let _0x2c044c = false;
  let _0x36160f = true;
  let _0x52dd06 = false;
  let _0x11726f = true;
  let _0x592baf = false;
  let _0x428458 = false;
  let _0x5a72f1 = null;
  let _0x301a51 = null;
  let _0x46dea4 = false;
  let _0x31b99e = false;
  let _0x32e29c = false;
  let _0x1c173b = false;
  let _0x25a58d = true;
  let _0x1e3eb = false;
  const _0x19c3f9 = "user-content-";
  let _0x279ca3 = true;
  let _0x2a06bd = false;
  let _0x1b031c = {};
  let _0x4f19f2 = null;
  const _0x100e3c = Cn({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "selectedcontent", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let _0x5f23ce = null;
  const _0x1c1b72 = Cn({}, ["audio", "video", "img", "source", "image", "track"]);
  let _0x4be572 = null;
  const _0x59c111 = Cn({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
  const _0x3c2504 = "http://www.w3.org/1998/Math/MathML";
  const _0x138eae = "http://www.w3.org/2000/svg";
  const _0x38b37e = "http://www.w3.org/1999/xhtml";
  let _0x43418c = _0x38b37e;
  let _0x3949e8 = false;
  let _0x1a0d0a = null;
  const _0xd11789 = Cn({}, [_0x3c2504, _0x138eae, _0x38b37e], on);
  const _0x30718e = Jt(["mi", "mo", "mn", "ms", "mtext"]);
  let _0x2f5e5f = Cn({}, _0x30718e);
  const _0x4d7639 = Jt(["annotation-xml"]);
  let _0x4ef3d1 = Cn({}, _0x4d7639);
  const _0x529916 = Cn({}, ["title", "style", "font", "a", "script"]);
  let _0x27f544 = null;
  const _0x38a42b = ["application/xhtml+xml", "text/html"];
  let _0x5d7c81 = null;
  let _0x59913a = null;
  const _0x8ceda5 = _0x4f783a.createElement("form");
  const _0x45ef5a = function (_0x544e6e) {
    return _0x544e6e instanceof RegExp || _0x544e6e instanceof Function;
  };
  const _0x5370fb = function (_0x199038 = {}) {
    if (_0x59913a && _0x59913a === _0x199038) {
      return;
    }
    if (!_0x199038 || typeof _0x199038 != "object") {
      _0x199038 = {};
    }
    _0x199038 = En(_0x199038);
    _0x27f544 = _0x38a42b.indexOf(_0x199038.PARSER_MEDIA_TYPE) === -1 ? "text/html" : _0x199038.PARSER_MEDIA_TYPE;
    _0x5d7c81 = _0x27f544 === "application/xhtml+xml" ? on : rn;
    _0x4c83df = oa(_0x199038, "ALLOWED_TAGS", _0x3e2941, {
      transform: _0x5d7c81
    });
    _0x1c69a4 = oa(_0x199038, "ALLOWED_ATTR", _0x40321a, {
      transform: _0x5d7c81
    });
    _0x1a0d0a = oa(_0x199038, "ALLOWED_NAMESPACES", _0xd11789, {
      transform: on
    });
    _0x4be572 = oa(_0x199038, "ADD_URI_SAFE_ATTR", _0x59c111, {
      transform: _0x5d7c81,
      base: _0x59c111
    });
    _0x5f23ce = oa(_0x199038, "ADD_DATA_URI_TAGS", _0x1c1b72, {
      transform: _0x5d7c81,
      base: _0x1c1b72
    });
    _0x4f19f2 = oa(_0x199038, "FORBID_CONTENTS", _0x100e3c, {
      transform: _0x5d7c81
    });
    _0x22b02c = oa(_0x199038, "FORBID_TAGS", En({}), {
      transform: _0x5d7c81
    });
    _0x4715fb = oa(_0x199038, "FORBID_ATTR", En({}), {
      transform: _0x5d7c81
    });
    _0x1b031c = !!yn(_0x199038, "USE_PROFILES") && (_0x199038.USE_PROFILES && typeof _0x199038.USE_PROFILES == "object" ? En(_0x199038.USE_PROFILES) : _0x199038.USE_PROFILES);
    _0x4f5b4e = _0x199038.ALLOW_ARIA_ATTR !== false;
    _0xa3607e = _0x199038.ALLOW_DATA_ATTR !== false;
    _0x2c044c = _0x199038.ALLOW_UNKNOWN_PROTOCOLS || false;
    _0x36160f = _0x199038.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    _0x52dd06 = _0x199038.SAFE_FOR_TEMPLATES || false;
    _0x11726f = _0x199038.SAFE_FOR_XML !== false;
    _0x592baf = _0x199038.WHOLE_DOCUMENT || false;
    _0x31b99e = _0x199038.RETURN_DOM || false;
    _0x32e29c = _0x199038.RETURN_DOM_FRAGMENT || false;
    _0x1c173b = _0x199038.RETURN_TRUSTED_TYPE || false;
    _0x46dea4 = _0x199038.FORCE_BODY || false;
    _0x25a58d = _0x199038.SANITIZE_DOM !== false;
    _0x1e3eb = _0x199038.SANITIZE_NAMED_PROPS || false;
    _0x279ca3 = _0x199038.KEEP_CONTENT !== false;
    _0x2a06bd = _0x199038.IN_PLACE || false;
    _0x516b54 = function (_0x408b6b) {
      try {
        vn(_0x408b6b, "");
        return true;
      } catch (_0xbef122) {
        return false;
      }
    }(_0x199038.ALLOWED_URI_REGEXP) ? _0x199038.ALLOWED_URI_REGEXP : Bn;
    _0x43418c = typeof _0x199038.NAMESPACE == "string" ? _0x199038.NAMESPACE : _0x38b37e;
    _0x2f5e5f = ca(_0x199038, "MATHML_TEXT_INTEGRATION_POINTS", () => Cn({}, _0x30718e));
    _0x4ef3d1 = ca(_0x199038, "HTML_INTEGRATION_POINTS", () => Cn({}, _0x4d7639));
    const _0x4d974e = ca(_0x199038, "CUSTOM_ELEMENT_HANDLING", () => Zt(null));
    _0x54e044 = Zt(null);
    if (yn(_0x4d974e, "tagNameCheck") && _0x45ef5a(_0x4d974e.tagNameCheck)) {
      _0x54e044.tagNameCheck = _0x4d974e.tagNameCheck;
    }
    if (yn(_0x4d974e, "attributeNameCheck") && _0x45ef5a(_0x4d974e.attributeNameCheck)) {
      _0x54e044.attributeNameCheck = _0x4d974e.attributeNameCheck;
    }
    if (yn(_0x4d974e, "allowCustomizedBuiltInElements") && typeof _0x4d974e.allowCustomizedBuiltInElements == "boolean") {
      _0x54e044.allowCustomizedBuiltInElements = _0x4d974e.allowCustomizedBuiltInElements;
    }
    Xt(_0x54e044);
    if (_0x52dd06) {
      _0xa3607e = false;
    }
    if (_0x32e29c) {
      _0x31b99e = true;
    }
    if (_0x1b031c) {
      _0x4c83df = Cn({}, Rn);
      _0x1c69a4 = Zt(null);
      if (_0x1b031c.html === true) {
        Cn(_0x4c83df, Tn);
        Cn(_0x1c69a4, xn);
      }
      if (_0x1b031c.svg === true) {
        Cn(_0x4c83df, Mn);
        Cn(_0x1c69a4, Nn);
        Cn(_0x1c69a4, Pn);
      }
      if (_0x1b031c.svgFilters === true) {
        Cn(_0x4c83df, Dn);
        Cn(_0x1c69a4, Nn);
        Cn(_0x1c69a4, Pn);
      }
      if (_0x1b031c.mathMl === true) {
        Cn(_0x4c83df, On);
        Cn(_0x1c69a4, Un);
        Cn(_0x1c69a4, Pn);
      }
    }
    _0x528e7c.tagCheck = null;
    _0x528e7c.attributeCheck = null;
    if (yn(_0x199038, "ADD_TAGS")) {
      if (typeof _0x199038.ADD_TAGS == "function") {
        _0x528e7c.tagCheck = _0x199038.ADD_TAGS;
      } else if (sn(_0x199038.ADD_TAGS)) {
        if (_0x4c83df === _0x3e2941) {
          _0x4c83df = En(_0x4c83df);
        }
        Cn(_0x4c83df, _0x199038.ADD_TAGS, _0x5d7c81);
      }
    }
    if (yn(_0x199038, "ADD_ATTR")) {
      if (typeof _0x199038.ADD_ATTR == "function") {
        _0x528e7c.attributeCheck = _0x199038.ADD_ATTR;
      } else if (sn(_0x199038.ADD_ATTR)) {
        if (_0x1c69a4 === _0x40321a) {
          _0x1c69a4 = En(_0x1c69a4);
        }
        Cn(_0x1c69a4, _0x199038.ADD_ATTR, _0x5d7c81);
      }
    }
    if (yn(_0x199038, "ADD_FORBID_CONTENTS") && sn(_0x199038.ADD_FORBID_CONTENTS)) {
      if (_0x4f19f2 === _0x100e3c) {
        _0x4f19f2 = En(_0x4f19f2);
      }
      Cn(_0x4f19f2, _0x199038.ADD_FORBID_CONTENTS, _0x5d7c81);
    }
    if (_0x279ca3) {
      _0x4c83df["#text"] = true;
    }
    if (_0x592baf) {
      Cn(_0x4c83df, ["html", "head", "body"]);
    }
    if (_0x4c83df.table) {
      Cn(_0x4c83df, ["tbody"]);
      delete _0x22b02c.tbody;
    }
    if (_0x199038.TRUSTED_TYPES_POLICY) {
      if (typeof _0x199038.TRUSTED_TYPES_POLICY.createHTML != "function") {
        throw _n("TRUSTED_TYPES_POLICY configuration option must provide a \"createHTML\" hook.");
      }
      if (typeof _0x199038.TRUSTED_TYPES_POLICY.createScriptURL != "function") {
        throw _n("TRUSTED_TYPES_POLICY configuration option must provide a \"createScriptURL\" hook.");
      }
      const _0x100f62 = _0x27762b;
      _0x27762b = _0x199038.TRUSTED_TYPES_POLICY;
      try {
        _0x4fd22c = _0x3081b7("");
      } catch (_0x2f8acf) {
        _0x27762b = _0x100f62;
        throw _0x2f8acf;
      }
    } else if (_0x199038.TRUSTED_TYPES_POLICY === null) {
      _0x27762b = undefined;
      _0x4fd22c = "";
    } else {
      if (_0x27762b === undefined) {
        _0x27762b = _0x193c3f();
      }
      if (_0x27762b && typeof _0x4fd22c == "string") {
        _0x4fd22c = _0x3081b7("");
      }
    }
    if (Jt) {
      Jt(_0x199038);
    }
    _0x59913a = _0x199038;
  };
  const _0x411e19 = Cn({}, [...Mn, ...Dn, ...$n]);
  const _0x1f58b3 = Cn({}, [...On, ...Ln]);
  const _0x13ae65 = function (_0x2c9d80) {
    let _0x5001cf = _0x31eae1(_0x2c9d80);
    if (!_0x5001cf || !_0x5001cf.tagName) {
      _0x5001cf = {
        namespaceURI: _0x43418c,
        tagName: "template"
      };
    }
    const _0x4225aa = rn(_0x2c9d80.tagName);
    const _0x23c9e4 = rn(_0x5001cf.tagName);
    return !!_0x1a0d0a[_0x2c9d80.namespaceURI] && (_0x2c9d80.namespaceURI === _0x138eae ? function (_0x3314cf, _0x1e8220, _0x2cabc1) {
      if (_0x1e8220.namespaceURI === _0x38b37e) {
        return _0x3314cf === "svg";
      } else if (_0x1e8220.namespaceURI === _0x3c2504) {
        return _0x3314cf === "svg" && (_0x2cabc1 === "annotation-xml" || _0x2f5e5f[_0x2cabc1]);
      } else {
        return Boolean(_0x411e19[_0x3314cf]);
      }
    }(_0x4225aa, _0x5001cf, _0x23c9e4) : _0x2c9d80.namespaceURI === _0x3c2504 ? function (_0x408787, _0x2bb044, _0x326832) {
      if (_0x2bb044.namespaceURI === _0x38b37e) {
        return _0x408787 === "math";
      } else if (_0x2bb044.namespaceURI === _0x138eae) {
        return _0x408787 === "math" && _0x4ef3d1[_0x326832];
      } else {
        return Boolean(_0x1f58b3[_0x408787]);
      }
    }(_0x4225aa, _0x5001cf, _0x23c9e4) : _0x2c9d80.namespaceURI === _0x38b37e ? function (_0x441a33, _0x41d03a, _0x39b4dd) {
      return (_0x41d03a.namespaceURI !== _0x138eae || !!_0x4ef3d1[_0x39b4dd]) && (_0x41d03a.namespaceURI !== _0x3c2504 || !!_0x2f5e5f[_0x39b4dd]) && !_0x1f58b3[_0x441a33] && (_0x529916[_0x441a33] || !_0x411e19[_0x441a33]);
    }(_0x4225aa, _0x5001cf, _0x23c9e4) : _0x27f544 === "application/xhtml+xml" && !!_0x1a0d0a[_0x2c9d80.namespaceURI]);
  };
  const _0x28a2af = function (_0x4e06e0) {
    dn(_0x1fa9da.removed, {
      element: _0x4e06e0
    });
    try {
      _0x31eae1(_0x4e06e0).removeChild(_0x4e06e0);
    } catch (_0x1ef1bb) {
      _0x1c3c9b(_0x4e06e0);
      if (!_0x31eae1(_0x4e06e0)) {
        throw _n("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
      }
    }
  };
  const _0x339b36 = function (_0xcf28b9, _0x50f96f, _0x1f6249) {
    try {
      _0x5285ef(_0xcf28b9, _0x50f96f);
    } catch (_0x5eed83) {
      try {
        _0xcf28b9.removeAttribute(_0x1f6249);
      } catch (_0x838846) {}
    }
  };
  const _0x4ebda5 = function (_0x15aa97) {
    _0x56b1ca(_0x15aa97);
    const _0x1381fc = _0x1e0424(_0x15aa97);
    if (_0x1381fc) {
      const _0x2872ea = [];
      tn(_0x1381fc, _0x498ce6 => {
        dn(_0x2872ea, _0x498ce6);
      });
      tn(_0x2872ea, _0x34e69d => {
        try {
          _0x1c3c9b(_0x34e69d);
        } catch (_0x40bbf7) {}
      });
    }
    const _0x497a11 = _0x3e982a(_0x15aa97);
    if (_0x497a11) {
      for (let _0x2b30f2 = _0x497a11.length - 1; _0x2b30f2 >= 0; --_0x2b30f2) {
        const _0x1959e5 = _0x497a11[_0x2b30f2];
        const _0x33dde5 = _0x1959e5 && _0x1959e5.name;
        if (typeof _0x33dde5 == "string") {
          _0x339b36(_0x15aa97, _0x1959e5, _0x33dde5);
        }
      }
    }
  };
  const _0xff5d66 = function (_0x2755cb, _0x5b31aa, _0x1f3f78) {
    if (!_0x1f3f78) {
      try {
        _0x1f3f78 = _0x5b31aa.getAttributeNode(_0x2755cb);
      } catch (_0x2b103b) {
        _0x1f3f78 = null;
      }
    }
    dn(_0x1fa9da.removed, {
      attribute: _0x1f3f78 || null,
      from: _0x5b31aa
    });
    try {
      if (_0x1f3f78) {
        _0x5285ef(_0x5b31aa, _0x1f3f78);
      } else {
        _0x5b31aa.removeAttribute(_0x2755cb);
      }
    } catch (_0x26ebab) {
      try {
        _0x5b31aa.removeAttribute(_0x2755cb);
      } catch (_0x2cfe8a) {}
    }
    if (_0x2755cb === "is") {
      if (_0x31b99e || _0x32e29c) {
        try {
          _0x28a2af(_0x5b31aa);
        } catch (_0x30cef4) {}
      } else {
        try {
          _0x5b31aa.setAttribute(_0x2755cb, "");
        } catch (_0x5c28fa) {}
      }
    }
  };
  const _0x3800fb = function (_0x5e199d) {
    const _0x3363af = _0x3e982a(_0x5e199d);
    if (_0x3363af) {
      for (let _0xc1611d = _0x3363af.length - 1; _0xc1611d >= 0; --_0xc1611d) {
        const _0x398eb2 = _0x3363af[_0xc1611d];
        const _0x5f274f = _0x398eb2 && _0x398eb2.name;
        if (typeof _0x5f274f == "string" && !_0x1c69a4[_0x5d7c81(_0x5f274f)]) {
          _0x339b36(_0x5e199d, _0x398eb2, _0x5f274f);
        }
      }
    }
  };
  const _0x56b1ca = function (_0x3ca087) {
    const _0x5d6eb0 = [_0x3ca087];
    while (_0x5d6eb0.length > 0) {
      const _0x18ca0e = _0x5d6eb0.pop();
      if (_0x25f3c0(_0x18ca0e) === Qn) {
        _0x3800fb(_0x18ca0e);
      }
      const _0x47d753 = _0x1e0424(_0x18ca0e);
      if (_0x47d753) {
        for (let _0x51a4eb = _0x47d753.length - 1; _0x51a4eb >= 0; --_0x51a4eb) {
          _0x5d6eb0.push(_0x47d753[_0x51a4eb]);
        }
      }
    }
  };
  const _0x43134c = function (_0x17bf7c, _0x1e5820) {
    return !!_0x11726f && (_0x17bf7c === "patchsrc" || _0x17bf7c === "for" && _0x1e5820 !== "label" && _0x1e5820 !== "output");
  };
  const _0xb0d0f2 = function (_0x1d879a) {
    let _0x42a500 = null;
    let _0x2b130c = null;
    if (_0x46dea4) {
      _0x1d879a = "<remove></remove>" + _0x1d879a;
    } else {
      const _0x46ac7a = cn(_0x1d879a, /^[\r\n\t ]+/);
      _0x2b130c = _0x46ac7a && _0x46ac7a[0];
    }
    if (_0x27f544 === "application/xhtml+xml" && _0x43418c === _0x38b37e) {
      _0x1d879a = "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head></head><body>" + _0x1d879a + "</body></html>";
    }
    const _0x5f36f3 = _0x27762b ? _0x3081b7(_0x1d879a) : _0x1d879a;
    if (_0x43418c === _0x38b37e) {
      try {
        _0x42a500 = new _0x576d21().parseFromString(_0x5f36f3, _0x27f544);
      } catch (_0x415895) {}
    }
    if (!_0x42a500 || !_0x42a500.documentElement) {
      _0x42a500 = _0x1453e7.createDocument(_0x43418c, "template", null);
      try {
        _0x42a500.documentElement.innerHTML = _0x3949e8 ? _0x4fd22c : _0x5f36f3;
      } catch (_0x3600c3) {}
    }
    const _0x175de4 = _0x42a500.body || _0x42a500.documentElement;
    if (_0x1d879a && _0x2b130c) {
      _0x175de4.insertBefore(_0x4f783a.createTextNode(_0x2b130c), _0x175de4.childNodes[0] || null);
    }
    if (_0x43418c === _0x38b37e) {
      return _0x17ec2a.call(_0x42a500, _0x592baf ? "html" : "body")[0];
    } else if (_0x592baf) {
      return _0x42a500.documentElement;
    } else {
      return _0x175de4;
    }
  };
  const _0x3fbccd = function (_0x2fc723) {
    const _0x1df525 = _0x1c4ac4 ? _0x1c4ac4(_0x2fc723) : _0x2fc723.ownerDocument;
    return _0x348c7f.call(_0x1df525 || _0x2fc723, _0x2fc723, _0x6e4229.SHOW_ELEMENT | _0x6e4229.SHOW_COMMENT | _0x6e4229.SHOW_TEXT | _0x6e4229.SHOW_PROCESSING_INSTRUCTION | _0x6e4229.SHOW_CDATA_SECTION, null);
  };
  const _0x5596f3 = function (_0x4395e6) {
    _0x4395e6 = ln(_0x4395e6, _0x2246e7, " ");
    _0x4395e6 = ln(_0x4395e6, _0x188dd4, " ");
    return _0x4395e6 = ln(_0x4395e6, _0x40d039, " ");
  };
  const _0x341e6e = function (_0x299790) {
    var _0x92e346;
    _0x299790.normalize();
    const _0x3de795 = _0x1c4ac4 ? _0x1c4ac4(_0x299790) : _0x299790.ownerDocument;
    const _0x3004f0 = _0x348c7f.call(_0x3de795 || _0x299790, _0x299790, _0x6e4229.SHOW_TEXT | _0x6e4229.SHOW_COMMENT | _0x6e4229.SHOW_CDATA_SECTION | _0x6e4229.SHOW_PROCESSING_INSTRUCTION, null);
    let _0x503532 = _0x3004f0.nextNode();
    while (_0x503532) {
      _0x503532.data = _0x5596f3(_0x503532.data);
      _0x503532 = _0x3004f0.nextNode();
    }
    const _0x1db8c5 = (_0x92e346 = _0x299790.querySelectorAll) === null || _0x92e346 === undefined ? undefined : _0x92e346.call(_0x299790, "template");
    if (_0x1db8c5) {
      tn(_0x1db8c5, _0x217212 => {
        if (_0x311b8f(_0x217212.content)) {
          _0x341e6e(_0x217212.content);
        }
      });
    }
  };
  const _0x5002e5 = function (_0x4393b3) {
    const _0x2f72c7 = _0xfdb7fd ? _0xfdb7fd(_0x4393b3) : null;
    return typeof _0x2f72c7 == "string" && _0x5d7c81(_0x2f72c7) === "form" && (typeof _0x4393b3.nodeName != "string" || typeof _0x4393b3.textContent != "string" || typeof _0x4393b3.removeChild != "function" || _0x4393b3.attributes !== _0x3e982a(_0x4393b3) || typeof _0x4393b3.removeAttribute != "function" || typeof _0x4393b3.removeAttributeNode != "function" || typeof _0x4393b3.getAttributeNode != "function" || typeof _0x4393b3.setAttribute != "function" || typeof _0x4393b3.namespaceURI != "string" || typeof _0x4393b3.insertBefore != "function" || typeof _0x4393b3.hasChildNodes != "function" || _0x4393b3.nodeType !== _0x363373(_0x4393b3) || _0x4393b3.childNodes !== _0x1e0424(_0x4393b3));
  };
  const _0x311b8f = function (_0xf74fba) {
    if (!_0x363373 || typeof _0xf74fba != "object" || _0xf74fba === null) {
      return false;
    }
    try {
      return _0x363373(_0xf74fba) === da;
    } catch (_0x521008) {
      return false;
    }
  };
  const _0x5753d0 = function (_0x307919) {
    if (!_0x363373 || typeof _0x307919 != "object" || _0x307919 === null) {
      return false;
    }
    try {
      return typeof _0x363373(_0x307919) == "number";
    } catch (_0x5dd192) {
      return false;
    }
  };
  function _0x2529fd(_0x5dfb48, _0x32a7ad, _0x2f1800) {
    if (_0x5dfb48.length !== 0) {
      tn(_0x5dfb48, _0x4fd761 => {
        _0x4fd761.call(_0x1fa9da, _0x32a7ad, _0x2f1800, _0x59913a);
      });
    }
  }
  const _0x2b210b = function (_0xd69ee4, _0x4c4bd0) {
    if (_0xd69ee4 instanceof RegExp) {
      return vn(_0xd69ee4, _0x4c4bd0);
    }
    if (_0xd69ee4 instanceof Function) {
      for (var _0x3227f0 = arguments.length, _0x17397b = new Array(_0x3227f0 > 2 ? _0x3227f0 - 2 : 0), _0x59dd9d = 2; _0x59dd9d < _0x3227f0; _0x59dd9d++) {
        _0x17397b[_0x59dd9d - 2] = arguments[_0x59dd9d];
      }
      return Boolean(_0xd69ee4(_0x4c4bd0, ..._0x17397b));
    }
    return false;
  };
  const _0x5ccbc8 = function (_0x7ab4df, _0x17d980, _0x3e0204, _0x2583be) {
    if (_0x7ab4df.length === 0) {
      return _0x17d980;
    } else if (_0x17d980 === _0x3e0204 || _0x17d980 === _0x2583be) {
      return En(_0x17d980);
    } else {
      return _0x17d980;
    }
  };
  const _0x3ba347 = function (_0x57b8c1, _0x38425b) {
    return _0x57b8c1 !== _0x38425b && _0x31eae1(_0x57b8c1) === null && (_0x2a06bd && _0x56b1ca(_0x57b8c1), true);
  };
  const _0x4dac54 = function (_0x213586, _0x4889f1) {
    _0x2529fd(_0x5de5e7.beforeSanitizeElements, _0x213586, null);
    if (_0x3ba347(_0x213586, _0x4889f1)) {
      return true;
    }
    if (_0x5002e5(_0x213586)) {
      _0x28a2af(_0x213586);
      return true;
    }
    const _0x59add5 = _0x5d7c81(_0x361189(_0x213586));
    _0x4c83df = _0x5ccbc8(_0x5de5e7.uponSanitizeElement, _0x4c83df, _0x3e2941, _0x5a72f1);
    _0x2529fd(_0x5de5e7.uponSanitizeElement, _0x213586, {
      tagName: _0x59add5,
      allowedTags: _0x4c83df
    });
    if (_0x3ba347(_0x213586, _0x4889f1)) {
      return true;
    }
    if (function (_0x4373a4, _0x103007) {
      return !!_0x11726f && !!_0x4373a4.hasChildNodes() && !_0x5753d0(_0x4373a4.firstElementChild) && !!vn(Jn, _0x4373a4.textContent) && !!vn(Jn, _0x4373a4.innerHTML) || !!_0x11726f && _0x4373a4.namespaceURI === _0x38b37e && !!sa[_0x103007] && (!!_0x5753d0(_0x4373a4.firstElementChild) || typeof _0x4373a4.textContent == "string" && !!vn(ra[_0x103007], _0x4373a4.textContent)) || _0x4373a4.nodeType === ta || !!_0x11726f && _0x4373a4.nodeType === na && !!vn(Xn, _0x4373a4.data);
    }(_0x213586, _0x59add5)) {
      _0x28a2af(_0x213586);
      return true;
    }
    if (_0x22b02c[_0x59add5] || (!(_0x528e7c.tagCheck instanceof Function) || !_0x528e7c.tagCheck(_0x59add5)) && !_0x4c83df[_0x59add5]) {
      const _0x3a9a8d = function (_0x4b6c15, _0x5d995b, _0x2b391d) {
        if (!_0x22b02c[_0x5d995b] && _0x13b7f1(_0x5d995b) && _0x2b210b(_0x54e044.tagNameCheck, _0x5d995b)) {
          return false;
        }
        if (_0x279ca3 && !_0x4f19f2[_0x5d995b]) {
          const _0x591a9c = _0x31eae1(_0x4b6c15);
          const _0xe19527 = _0x1e0424(_0x4b6c15);
          if (_0xe19527 && _0x591a9c) {
            for (let _0x107f5c = _0xe19527.length - 1; _0x107f5c >= 0; --_0x107f5c) {
              const _0x469fe4 = _0x4b6c15 === _0x2b391d ? _0x1fe21a(_0xe19527[_0x107f5c], true) : _0xe19527[_0x107f5c];
              _0x591a9c.insertBefore(_0x469fe4, _0x2360f5(_0x4b6c15));
            }
          }
        }
        _0x28a2af(_0x4b6c15);
        return true;
      }(_0x213586, _0x59add5, _0x4889f1);
      return _0x3a9a8d === false && !(_0x2529fd(_0x5de5e7.afterSanitizeElements, _0x213586, null), !_0x3ba347(_0x213586, _0x4889f1)) || _0x3a9a8d;
    }
    if (_0x25f3c0(_0x213586) === Qn && !_0x13ae65(_0x213586)) {
      _0x28a2af(_0x213586);
      return true;
    }
    if ((_0x59add5 === "noscript" || _0x59add5 === "noembed" || _0x59add5 === "noframes") && vn(Zn, _0x213586.innerHTML)) {
      _0x28a2af(_0x213586);
      return true;
    }
    if (_0x52dd06 && _0x213586.nodeType === ea) {
      const _0x1b7389 = _0x5596f3(_0x213586.textContent);
      if (_0x213586.textContent !== _0x1b7389) {
        dn(_0x1fa9da.removed, {
          element: _0x213586.cloneNode()
        });
        _0x213586.textContent = _0x1b7389;
      }
    }
    _0x2529fd(_0x5de5e7.afterSanitizeElements, _0x213586, null);
    return _0x3ba347(_0x213586, _0x4889f1);
  };
  const _0x2c0f23 = function (_0x4d5b36, _0x3a59d2, _0xbac508) {
    if (_0x4715fb[_0x3a59d2]) {
      return false;
    }
    if (_0x43134c(_0x3a59d2, _0x4d5b36)) {
      return false;
    }
    if (_0x25a58d && (_0x3a59d2 === "id" || _0x3a59d2 === "name") && (_0xbac508 in _0x4f783a || _0xbac508 in _0x8ceda5)) {
      return false;
    }
    const _0x2996f1 = _0x1c69a4[_0x3a59d2] || _0x528e7c.attributeCheck instanceof Function && _0x528e7c.attributeCheck(_0x3a59d2, _0x4d5b36);
    return !!_0xa3607e && !!vn(_0x1b03d1, _0x3a59d2) || !!_0x4f5b4e && !!vn(_0x4f4fda, _0x3a59d2) || (_0x2996f1 ? !!_0x4be572[_0x3a59d2] || !!vn(_0x516b54, ln(_0xbac508, _0x57d363, "")) || (_0x3a59d2 === "src" || _0x3a59d2 === "xlink:href" || _0x3a59d2 === "href") && _0x4d5b36 !== "script" && fn(_0xbac508, "data:") === 0 && !!_0x5f23ce[_0x4d5b36] || !!_0x2c044c && !vn(_0x17f56c, ln(_0xbac508, _0x57d363, "")) || !_0xbac508 : _0x13b7f1(_0x4d5b36) && _0x2b210b(_0x54e044.tagNameCheck, _0x4d5b36) && _0x2b210b(_0x54e044.attributeNameCheck, _0x3a59d2, _0x4d5b36) || _0x3a59d2 === "is" && _0x54e044.allowCustomizedBuiltInElements && _0x2b210b(_0x54e044.tagNameCheck, _0xbac508));
  };
  const _0x1d1d72 = Cn({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]);
  const _0x13b7f1 = function (_0x334909) {
    return !_0x1d1d72[rn(_0x334909)] && vn(_0x185c88, _0x334909);
  };
  const _0xc765b1 = function (_0x5b31c5, _0x3a652c, _0x49ed15, _0x364613) {
    if (_0x27762b && typeof _0x3af2c4 == "object" && typeof _0x3af2c4.getAttributeType == "function" && !_0x49ed15) {
      switch (_0x3af2c4.getAttributeType(_0x5b31c5, _0x3a652c)) {
        case "TrustedHTML":
          return _0x3081b7(_0x364613);
        case "TrustedScriptURL":
          return function (_0x495368) {
            _0x5583c8();
            _0x26c4c3++;
            try {
              return _0x27762b.createScriptURL(_0x495368);
            } finally {
              _0x26c4c3--;
            }
          }(_0x364613);
      }
    }
    return _0x364613;
  };
  const _0x545721 = function (_0x5b83e6, _0x508d90, _0x244c22, _0x5a5ee2) {
    try {
      if (_0x244c22) {
        _0x5b83e6.setAttributeNS(_0x244c22, _0x508d90, _0x5a5ee2);
      } else {
        _0x5b83e6.setAttribute(_0x508d90, _0x5a5ee2);
      }
      return !_0x5002e5(_0x5b83e6) || (_0x28a2af(_0x5b83e6), false);
    } catch (_0x414e14) {
      _0xff5d66(_0x508d90, _0x5b83e6);
      return false;
    }
  };
  const _0x1be4f3 = function (_0x381c03, _0x593400) {
    _0x2529fd(_0x5de5e7.beforeSanitizeAttributes, _0x381c03, null);
    if (_0x3ba347(_0x381c03, _0x593400)) {
      return;
    }
    const _0x117bcc = _0x381c03.attributes;
    if (!_0x117bcc || _0x5002e5(_0x381c03)) {
      return;
    }
    _0x1c69a4 = _0x5ccbc8(_0x5de5e7.uponSanitizeAttribute, _0x1c69a4, _0x40321a, _0x301a51);
    const _0xe339f6 = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: _0x1c69a4,
      forceKeepAttr: undefined
    };
    let _0x5d60bf = _0x117bcc.length;
    const _0x3744e5 = _0x5d7c81(_0x381c03.nodeName);
    while (_0x5d60bf--) {
      const _0x158af7 = _0x117bcc[_0x5d60bf];
      const _0x4a4a01 = _0x158af7.name;
      const _0x485586 = _0x158af7.namespaceURI;
      const _0x5779e1 = _0x158af7.value;
      const _0x5df544 = _0x5d7c81(_0x4a4a01);
      const _0x3c300b = _0x5779e1;
      let _0x5cea40 = _0x4a4a01 === "value" ? _0x3c300b : pn(_0x3c300b);
      let _0x4ed7b5 = false;
      _0xe339f6.attrName = _0x5df544;
      _0xe339f6.attrValue = _0x5cea40;
      _0xe339f6.keepAttr = true;
      _0xe339f6.forceKeepAttr = undefined;
      _0x2529fd(_0x5de5e7.uponSanitizeAttribute, _0x381c03, _0xe339f6);
      _0x5cea40 = _0xe339f6.attrValue;
      if (!!_0x1e3eb && (_0x5df544 === "id" || _0x5df544 === "name") && fn(_0x5cea40, _0x19c3f9) !== 0) {
        _0xff5d66(_0x4a4a01, _0x381c03, _0x158af7);
        _0x5cea40 = _0x19c3f9 + _0x5cea40;
        _0x4ed7b5 = true;
      }
      if (_0x11726f && vn(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, _0x5cea40)) {
        _0xff5d66(_0x4a4a01, _0x381c03, _0x158af7);
      } else if (_0x5df544 === "attributename" && cn(_0x5cea40, "href")) {
        _0xff5d66(_0x4a4a01, _0x381c03, _0x158af7);
      } else if (!_0xe339f6.forceKeepAttr) {
        if (_0xe339f6.keepAttr && (_0x36160f || !vn(Kn, _0x5cea40))) {
          if (_0x52dd06) {
            _0x5cea40 = _0x5596f3(_0x5cea40);
          }
          if (_0x2c0f23(_0x3744e5, _0x5df544, _0x5cea40)) {
            _0x5cea40 = _0xc765b1(_0x3744e5, _0x5df544, _0x485586, _0x5cea40);
            if (_0x5cea40 !== _0x3c300b && _0x545721(_0x381c03, _0x4a4a01, _0x485586, _0x5cea40) && _0x4ed7b5) {
              an(_0x1fa9da.removed);
            }
          } else {
            _0xff5d66(_0x4a4a01, _0x381c03, _0x158af7);
          }
        } else {
          _0xff5d66(_0x4a4a01, _0x381c03, _0x158af7);
        }
      }
    }
    _0x2529fd(_0x5de5e7.afterSanitizeAttributes, _0x381c03, null);
    _0x3ba347(_0x381c03, _0x593400);
  };
  const _0x2b6fd8 = function (_0x49cf5e) {
    let _0xc0a990 = null;
    const _0x971254 = _0x3fbccd(_0x49cf5e);
    for (_0x2529fd(_0x5de5e7.beforeSanitizeShadowDOM, _0x49cf5e, null); _0xc0a990 = _0x971254.nextNode();) {
      _0x2529fd(_0x5de5e7.uponSanitizeShadowNode, _0xc0a990, null);
      _0x4dac54(_0xc0a990, _0x49cf5e);
      _0x1be4f3(_0xc0a990, _0x49cf5e);
      if (_0x311b8f(_0xc0a990.content)) {
        _0x2b6fd8(_0xc0a990.content);
      }
      if (_0x25f3c0(_0xc0a990) === Qn) {
        const _0x350833 = _0x4afe32(_0xc0a990);
        if (_0x311b8f(_0x350833)) {
          _0x51fab7(_0x350833);
          _0x2b6fd8(_0x350833);
        }
      }
    }
    _0x2529fd(_0x5de5e7.afterSanitizeShadowDOM, _0x49cf5e, null);
  };
  const _0x51fab7 = function (_0x48457e) {
    const _0x426278 = [{
      node: _0x48457e,
      shadow: null
    }];
    while (_0x426278.length > 0) {
      const _0x3a4e78 = _0x426278.pop();
      if (_0x3a4e78.shadow) {
        _0x2b6fd8(_0x3a4e78.shadow);
        continue;
      }
      const _0x567edb = _0x3a4e78.node;
      const _0x2a3795 = _0x25f3c0(_0x567edb) === Qn;
      const _0x58c6e8 = _0x1e0424(_0x567edb);
      if (_0x58c6e8) {
        for (let _0x23c97b = _0x58c6e8.length - 1; _0x23c97b >= 0; --_0x23c97b) {
          _0x426278.push({
            node: _0x58c6e8[_0x23c97b],
            shadow: null
          });
        }
      }
      if (_0x2a3795) {
        const _0x54a653 = _0xfdb7fd ? _0xfdb7fd(_0x567edb) : null;
        if (typeof _0x54a653 == "string" && _0x5d7c81(_0x54a653) === "template") {
          const _0x1f897d = _0x567edb.content;
          if (_0x311b8f(_0x1f897d)) {
            _0x426278.push({
              node: _0x1f897d,
              shadow: null
            });
          }
        }
      }
      if (_0x2a3795) {
        const _0x21959c = _0x4afe32(_0x567edb);
        if (_0x311b8f(_0x21959c)) {
          _0x426278.push({
            node: null,
            shadow: _0x21959c
          }, {
            node: _0x21959c,
            shadow: null
          });
        }
      }
    }
  };
  _0x1fa9da.sanitize = function (_0x1c95bd, _0x37e510 = {}) {
    let _0xe72af5 = null;
    let _0x343aed = null;
    let _0x55c7b5 = null;
    let _0x453b12 = null;
    _0x3949e8 = !_0x1c95bd;
    if (_0x3949e8) {
      _0x1c95bd = "<!-->";
    }
    if (typeof _0x1c95bd != "string" && !_0x5753d0(_0x1c95bd) && typeof (_0x1c95bd = function (_0x4c0b05) {
      switch (typeof _0x4c0b05) {
        case "string":
          return _0x4c0b05;
        case "number":
          return mn(_0x4c0b05);
        case "boolean":
          return hn(_0x4c0b05);
        case "bigint":
          if (gn) {
            return gn(_0x4c0b05);
          } else {
            return "0";
          }
        case "symbol":
          if (bn) {
            return bn(_0x4c0b05);
          } else {
            return "Symbol()";
          }
        case "undefined":
        default:
          return wn(_0x4c0b05);
        case "function":
        case "object":
          {
            if (_0x4c0b05 === null) {
              return wn(_0x4c0b05);
            }
            const _0x314514 = _0x4c0b05;
            const _0x211b71 = An(_0x314514, "toString");
            if (typeof _0x211b71 == "function") {
              const _0x451529 = _0x211b71(_0x314514);
              if (typeof _0x451529 == "string") {
                return _0x451529;
              } else {
                return wn(_0x451529);
              }
            }
            return wn(_0x4c0b05);
          }
      }
    }(_0x1c95bd)) != "string") {
      throw _n("dirty is not a string, aborting");
    }
    if (!_0x1fa9da.isSupported) {
      return _0x1c95bd;
    }
    if (_0x428458) {
      _0x4c83df = _0x5a72f1;
      _0x1c69a4 = _0x301a51;
    } else {
      _0x5370fb(_0x37e510);
    }
    if (_0x5de5e7.uponSanitizeElement.length > 0 || _0x5de5e7.uponSanitizeAttribute.length > 0) {
      _0x4c83df = En(_0x4c83df);
    }
    if (_0x5de5e7.uponSanitizeAttribute.length > 0) {
      _0x1c69a4 = En(_0x1c69a4);
    }
    _0x1fa9da.removed = [];
    const _0x3a4009 = _0x2a06bd && typeof _0x1c95bd != "string" && _0x5753d0(_0x1c95bd);
    if (_0x3a4009) {
      (function (_0x4acaab) {
        if (!_0x11726f) {
          return;
        }
        const _0x5cabb1 = [_0x4acaab];
        while (_0x5cabb1.length > 0) {
          const _0x17fb24 = _0x5cabb1.pop();
          const _0x4a281a = _0x25f3c0(_0x17fb24);
          if (_0x4a281a === ta || _0x4a281a === na && vn(Xn, _0x17fb24.data)) {
            try {
              _0x1c3c9b(_0x17fb24);
            } catch (_0x55c7eb) {}
            continue;
          }
          if (_0x4a281a === Qn) {
            const _0x5870fe = _0x17fb24;
            const _0x44e3da = _0x5d7c81(_0x361189(_0x17fb24));
            try {
              if (_0x5870fe.hasAttribute && _0x5870fe.hasAttribute("patchsrc")) {
                _0x5870fe.removeAttribute("patchsrc");
              }
              if (_0x5870fe.hasAttribute && _0x5870fe.hasAttribute("for") && _0x43134c("for", _0x44e3da)) {
                _0x5870fe.removeAttribute("for");
              }
            } catch (_0x3f65c2) {}
          }
          const _0x19b753 = _0x1e0424(_0x17fb24);
          if (_0x19b753) {
            for (let _0x3b2dce = _0x19b753.length - 1; _0x3b2dce >= 0; --_0x3b2dce) {
              _0x5cabb1.push(_0x19b753[_0x3b2dce]);
            }
          }
        }
      })(_0x1c95bd);
      const _0x579d65 = _0x361189(_0x1c95bd);
      if (typeof _0x579d65 == "string") {
        const _0xdb79e5 = _0x5d7c81(_0x579d65);
        if (!_0x4c83df[_0xdb79e5] || _0x22b02c[_0xdb79e5]) {
          _0x4ebda5(_0x1c95bd);
          throw _n("root node is forbidden and cannot be sanitized in-place");
        }
      }
      if (_0x5002e5(_0x1c95bd)) {
        _0x4ebda5(_0x1c95bd);
        throw _n("root node is clobbered and cannot be sanitized in-place");
      }
      try {
        _0x51fab7(_0x1c95bd);
      } catch (_0x3cb2d0) {
        _0x4ebda5(_0x1c95bd);
        throw _0x3cb2d0;
      }
    } else if (_0x5753d0(_0x1c95bd)) {
      _0xe72af5 = _0xb0d0f2("<!---->");
      _0x343aed = _0xe72af5.ownerDocument.importNode(_0x1c95bd, true);
      if (_0x343aed.nodeType === Qn && _0x343aed.nodeName === "BODY" || _0x343aed.nodeName === "HTML") {
        _0xe72af5 = _0x343aed;
      } else {
        _0xe72af5.appendChild(_0x343aed);
      }
      _0x51fab7(_0xe72af5);
    } else {
      if (!_0x31b99e && !_0x52dd06 && !_0x592baf && _0x1c95bd.indexOf("<") === -1) {
        if (_0x27762b && _0x1c173b) {
          return _0x3081b7(_0x1c95bd);
        } else {
          return _0x1c95bd;
        }
      }
      _0xe72af5 = _0xb0d0f2(_0x1c95bd);
      if (!_0xe72af5) {
        if (_0x31b99e) {
          return null;
        } else if (_0x1c173b) {
          return _0x4fd22c;
        } else {
          return "";
        }
      }
    }
    if (_0xe72af5 && _0x46dea4) {
      _0x28a2af(_0xe72af5.firstChild);
    }
    const _0x3dc85e = _0x3a4009 ? _0x1c95bd : _0xe72af5;
    try {
      const _0x255b29 = _0x3fbccd(_0x3dc85e);
      while (_0x55c7b5 = _0x255b29.nextNode()) {
        _0x4dac54(_0x55c7b5, _0x3dc85e);
        _0x1be4f3(_0x55c7b5, _0x3dc85e);
        if (_0x311b8f(_0x55c7b5.content)) {
          _0x2b6fd8(_0x55c7b5.content);
        }
      }
    } catch (_0x455996) {
      if (_0x3a4009) {
        _0x4ebda5(_0x1c95bd);
        tn(_0x1fa9da.removed, _0x28a3b7 => {
          if (_0x28a3b7.element) {
            _0x56b1ca(_0x28a3b7.element);
          }
        });
      }
      throw _0x455996;
    }
    if (_0x3a4009) {
      let _0x1a05b0 = false;
      tn(_0x1fa9da.removed, _0x59c9bd => {
        if (_0x59c9bd.element) {
          if (_0x59c9bd.element === _0x1c95bd) {
            _0x1a05b0 = true;
          }
          _0x56b1ca(_0x59c9bd.element);
        }
      });
      if (_0x1a05b0) {
        throw _n("a node selected for removal could not be safely returned; refusing to sanitize in place");
      }
      if (_0x52dd06) {
        _0x341e6e(_0x1c95bd);
      }
      return _0x1c95bd;
    }
    if (_0x31b99e) {
      if (_0x52dd06) {
        _0x341e6e(_0xe72af5);
      }
      if (_0x32e29c) {
        for (_0x453b12 = _0x37a3b4.call(_0xe72af5.ownerDocument); _0xe72af5.firstChild;) {
          _0x453b12.appendChild(_0xe72af5.firstChild);
        }
      } else {
        _0x453b12 = _0xe72af5;
      }
      if (_0x1c69a4.shadowroot || _0x1c69a4.shadowrootmode) {
        _0x453b12 = _0x333799.call(_0x6b0215, _0x453b12, true);
      }
      return _0x453b12;
    }
    let _0x5da8f4 = _0x592baf ? _0xe72af5.outerHTML : _0xe72af5.innerHTML;
    if (_0x592baf && _0x4c83df["!doctype"] && _0xe72af5.ownerDocument && _0xe72af5.ownerDocument.doctype && _0xe72af5.ownerDocument.doctype.name && vn(Yn, _0xe72af5.ownerDocument.doctype.name)) {
      _0x5da8f4 = "<!DOCTYPE " + _0xe72af5.ownerDocument.doctype.name + ">\n" + _0x5da8f4;
    }
    if (_0x52dd06) {
      _0x5da8f4 = _0x5596f3(_0x5da8f4);
    }
    if (_0x27762b && _0x1c173b) {
      return _0x3081b7(_0x5da8f4);
    } else {
      return _0x5da8f4;
    }
  };
  _0x1fa9da.setConfig = function () {
    _0x5370fb(arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {});
    _0x428458 = true;
    _0x5a72f1 = _0x4c83df;
    _0x301a51 = _0x1c69a4;
  };
  _0x1fa9da.clearConfig = function () {
    _0x59913a = null;
    _0x428458 = false;
    _0x5a72f1 = null;
    _0x301a51 = null;
    _0x27762b = _0x29a15b;
    _0x4fd22c = "";
  };
  _0x1fa9da.isValidAttribute = function (_0x2dc5d2, _0x33f9af, _0x105ea3) {
    if (!_0x59913a) {
      _0x5370fb({});
    }
    const _0x163774 = _0x5d7c81(_0x2dc5d2);
    const _0xf1598e = _0x5d7c81(_0x33f9af);
    return _0x2c0f23(_0x163774, _0xf1598e, _0x105ea3);
  };
  _0x1fa9da.addHook = function (_0x1fab84, _0x4e45cb) {
    if (typeof _0x4e45cb == "function" && yn(_0x5de5e7, _0x1fab84)) {
      dn(_0x5de5e7[_0x1fab84], _0x4e45cb);
    }
  };
  _0x1fa9da.removeHook = function (_0x180810, _0x17958b) {
    if (yn(_0x5de5e7, _0x180810)) {
      if (_0x17958b !== undefined) {
        const _0x53a860 = nn(_0x5de5e7[_0x180810], _0x17958b);
        if (_0x53a860 === -1) {
          return undefined;
        } else {
          return un(_0x5de5e7[_0x180810], _0x53a860, 1)[0];
        }
      }
      return an(_0x5de5e7[_0x180810]);
    }
  };
  _0x1fa9da.removeHooks = function (_0x252251) {
    if (yn(_0x5de5e7, _0x252251)) {
      _0x5de5e7[_0x252251] = [];
    }
  };
  _0x1fa9da.removeAllHooks = function () {
    _0x5de5e7 = {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: []
    };
  };
  return _0x1fa9da;
}();
const fa = _0x3979bc => {
  const _0x5343c4 = (_0x36300e => {
    let _0x2ce843 = _0x36300e.replace(/&#(\d+);/g, (_0x455098, _0x3df4f6) => String.fromCharCode(parseInt(_0x3df4f6, 10)));
    _0x2ce843 = _0x2ce843.replace(/&#x([0-9a-fA-F]+);/g, (_0x2ea39d, _0x38ffef) => String.fromCharCode(parseInt(_0x38ffef, 16)));
    const _0x444716 = {
      "&lt;": "<",
      "&gt;": ">",
      "&amp;": "&",
      "&quot;": "\"",
      "&apos;": "'",
      "&#39;": "'",
      "&nbsp;": " "
    };
    for (const [_0x308294, _0x3dbdf8] of Object.entries(_0x444716)) {
      _0x2ce843 = _0x2ce843.split(_0x308294).join(_0x3dbdf8);
    }
    return _0x2ce843;
  })(_0x3979bc);
  const _0x4e8295 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  };
  return _0x5343c4.replace(/[&<>"']/g, _0x39d39a => _0x4e8295[_0x39d39a] || _0x39d39a);
};
const pa = {
  folder: "svg",
  ext: ".svg",
  base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/"
};
const ma = _0x10ee7b();
const ha = new Map();
const ga = _0x4306c0 => {
  if (ha.has(_0x4306c0)) {
    return ha.get(_0x4306c0);
  }
  const _0x4f752e = Ft.parse(_0x4306c0, pa).match(/src="([^"]+)"/)?.[1] || "";
  ha.set(_0x4306c0, _0x4f752e);
  return _0x4f752e;
};
const ba = new Map();
const ya = (_0x5424c5, _0x446957 = "emoji") => {
  const _0x5e2c7c = fa(_0x5424c5);
  const _0x3cafd4 = _0x5e2c7c + ":" + _0x446957;
  if (ba.has(_0x3cafd4)) {
    return ba.get(_0x3cafd4);
  }
  const _0xc1ceb0 = (_0x276d5b => la.sanitize(_0x276d5b, {
    ALLOWED_TAGS: ["img", "span"],
    ALLOWED_ATTR: ["src", "alt", "class", "title", "loading", "draggable"],
    ALLOW_DATA_ATTR: false
  }))(Ft.parse(_0x5e2c7c, {
    ...pa,
    className: _0x446957,
    attributes: () => ({
      loading: "lazy",
      draggable: "false"
    })
  }));
  if (ba.size >= 1000) {
    const _0x51dc10 = ba.keys().next().value;
    if (_0x51dc10 !== undefined) {
      ba.delete(_0x51dc10);
    }
  }
  ba.set(_0x3cafd4, _0xc1ceb0);
  return _0xc1ceb0;
};
const wa = (_0x28988e, _0x4ac05f = "emoji") => Ft.parse(_0x28988e, {
  ...pa,
  className: _0x4ac05f,
  attributes: () => ({
    loading: "lazy",
    draggable: "false"
  })
});
const va = (_0x3b59ec, _0x3ba9f5) => {
  let _0x2487ac = _0x3b59ec;
  const _0x394e49 = [];
  _0x2487ac = _0x2487ac.replace(/<a?:[a-zA-Z0-9_]+:\d+>/g, _0x132892 => {
    const _0xa30ffe = "__GUILD_EMOJI_" + _0x394e49.length + "__";
    _0x394e49.push(_0x132892);
    return _0xa30ffe;
  });
  const _0x2a1cee = [];
  _0x2487ac = _0x2487ac.replace(/https?:\/\/[^\s]+/g, _0x436f73 => {
    const _0x444586 = "__URL_PLACEHOLDER_" + _0x2a1cee.length + "__";
    _0x2a1cee.push(_0x436f73);
    return _0x444586;
  });
  _0x2487ac = _0x2487ac.replace(/:([a-zA-Z0-9_+-]+):/g, (_0x3566ab, _0x20e578) => _0x3ba9f5[_0x20e578] || _0x3566ab);
  _0x2a1cee.forEach((_0x224ad4, _0x44da04) => {
    _0x2487ac = _0x2487ac.replace("__URL_PLACEHOLDER_" + _0x44da04 + "__", _0x224ad4);
  });
  _0x394e49.forEach((_0x51b0ea, _0xe67ff2) => {
    _0x2487ac = _0x2487ac.replace("__GUILD_EMOJI_" + _0xe67ff2 + "__", _0x51b0ea);
  });
  return _0x2487ac;
};
const _a = () => ma;
const Sa = _0x24d488 => _0x24d488 ? _0x24d488.replace(_a(), _0x3157b6 => _0x415cee(_0x3157b6)) : _0x24d488;
async function Ia(_0x29d6ca, _0x3743d2, _0x18c886 = {}, _0x48d2e6, _0x108e19) {
  try {
    const _0x273f7c = function (_0x308980, _0x337cd6, _0x50a0d4) {
      const _0x773c0f = [_0x293a3b.channelMessages(_0x308980, _0x337cd6)];
      if (_0x50a0d4.limit) {
        _0x773c0f.push("l:" + _0x50a0d4.limit);
      }
      if (_0x50a0d4.before) {
        _0x773c0f.push("b:" + _0x50a0d4.before);
      }
      if (_0x50a0d4.after) {
        _0x773c0f.push("a:" + _0x50a0d4.after);
      }
      if (_0x50a0d4.around) {
        _0x773c0f.push("ar:" + _0x50a0d4.around);
      }
      return _0x773c0f.join(":");
    }(_0x29d6ca, _0x3743d2, _0x18c886);
    return await async function (_0x1a6a45, _0xd64dd4, _0xdb6fce = 120000, _0x37f0e1) {
      return _0x41afc7.getOrFetch(_0x1a6a45, _0xd64dd4, {
        ttlMs: _0xdb6fce,
        force: _0x37f0e1
      });
    }(_0x273f7c, async () => (await _0x44b99c.get("/api/v1/guilds/" + _0x29d6ca + "/channels/" + _0x3743d2 + "/messages", {
      params: {
        ...(_0x18c886.limit && {
          limit: _0x18c886.limit
        }),
        ...(_0x18c886.before && {
          before: _0x18c886.before
        }),
        ...(_0x18c886.after && {
          after: _0x18c886.after
        }),
        ...(_0x18c886.around && {
          around: _0x18c886.around
        })
      },
      signal: _0x48d2e6
    })).data, 120000, _0x108e19?.force);
  } catch (_0x118f7c) {
    throw _0x56f0fc(_0x118f7c);
  }
}
async function Ca(_0x19539e, _0x1366a4, _0x100f28, _0x2db29b) {
  try {
    const _0x280cd0 = Sa(_0x100f28.content);
    let _0x1475c5;
    const _0x51369a = Array.isArray(_0x100f28.files) && _0x100f28.files.length > 0;
    const _0x3c0237 = _0x51369a ? await pt(_0x1366a4, _0x100f28.files, _0x2db29b) : null;
    if (_0x3c0237) {
      _0x1475c5 = await _0x44b99c.post("/api/v1/guilds/" + _0x19539e + "/channels/" + _0x1366a4 + "/messages", {
        content: _0x280cd0,
        reply_to_id: _0x100f28.reply_to_id ?? null,
        nonce: _0x100f28.nonce || _0x3c0237.nonce,
        ...(_0x100f28.mentions && {
          mentions: _0x100f28.mentions
        }),
        ...(_0x100f28.command && {
          command: _0x100f28.command
        }),
        ...(_0x100f28.poll && {
          poll: _0x100f28.poll
        }),
        upload_ids: _0x3c0237.ids
      }, {
        _skip429Handler: true
      });
      _0x3c0237.consumed();
    } else if (_0x51369a) {
      const _0x22e308 = new FormData();
      _0x22e308.append("content", _0x280cd0);
      if (_0x100f28.nonce) {
        _0x22e308.append("nonce", _0x100f28.nonce);
      }
      if (_0x100f28.reply_to_id !== undefined && _0x100f28.reply_to_id !== null) {
        _0x22e308.append("reply_to_id", String(_0x100f28.reply_to_id));
      }
      if (_0x100f28.mentions) {
        _0x22e308.append("mentions", JSON.stringify(_0x100f28.mentions));
      }
      if (_0x100f28.command) {
        _0x22e308.append("command", JSON.stringify(_0x100f28.command));
      }
      for (const _0x5e21ab of _0x100f28.files) {
        _0x22e308.append("files", _0x5e21ab, _0x5e21ab.name);
      }
      const _0x16e7a5 = await st(_0x100f28.files);
      _0x22e308.append("attachments", JSON.stringify(_0x16e7a5));
      _0x1475c5 = await _0x44b99c.post("/api/v1/guilds/" + _0x19539e + "/channels/" + _0x1366a4 + "/messages", _0x22e308, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        _skip429Handler: true,
        onUploadProgress: _0x2db29b ? _0x82a2c5 => {
          if (_0x82a2c5.total) {
            const _0x46075b = Math.round(_0x82a2c5.loaded * 100 / _0x82a2c5.total);
            _0x2db29b(_0x46075b);
          }
        } : undefined
      });
    } else {
      _0x1475c5 = await _0x44b99c.post("/api/v1/guilds/" + _0x19539e + "/channels/" + _0x1366a4 + "/messages", {
        content: _0x280cd0,
        reply_to_id: _0x100f28.reply_to_id ?? null,
        ...(_0x100f28.nonce && {
          nonce: _0x100f28.nonce
        }),
        ...(_0x100f28.mentions && {
          mentions: _0x100f28.mentions
        }),
        ...(_0x100f28.command && {
          command: _0x100f28.command
        }),
        ...(_0x100f28.gif && {
          gif: _0x100f28.gif
        }),
        ...(_0x100f28.poll && {
          poll: _0x100f28.poll
        })
      }, {
        _skip429Handler: true
      });
    }
    _0xc3c4e0.clearChannelData(_0x19539e, _0x1366a4);
    return _0x1475c5.data;
  } catch (_0x61a40e) {
    if (_0x61a40e?.response?.status === 429 || _0x61a40e?.response?.data?.remaining_seconds) {
      throw _0x61a40e;
    }
    throw _0x56f0fc(_0x61a40e);
  }
}
async function ka(_0x18217f, _0x1fa01d, _0x2fa470, _0x601be5) {
  try {
    const _0xc2be79 = {
      content: Sa(_0x601be5.content)
    };
    if (_0x601be5.mentions) {
      const _0x36f264 = {};
      if (_0x601be5.mentions.users && _0x601be5.mentions.users.length > 0) {
        _0x36f264.users = _0x601be5.mentions.users;
      }
      if (_0x601be5.mentions.roles && _0x601be5.mentions.roles.length > 0) {
        _0x36f264.roles = _0x601be5.mentions.roles;
      }
      if (_0x601be5.mentions.channels && _0x601be5.mentions.channels.length > 0) {
        _0x36f264.channels = _0x601be5.mentions.channels;
      }
      if (_0x601be5.mentions.everyone === true) {
        _0x36f264.everyone = true;
      }
      if (_0x601be5.mentions.mention_here === true) {
        _0x36f264.mention_here = true;
      }
      if (Object.keys(_0x36f264).length > 0) {
        _0xc2be79.mentions = _0x36f264;
      }
    }
    const _0x176c4f = await _0x44b99c.patch("/api/v1/guilds/" + _0x18217f + "/channels/" + _0x1fa01d + "/messages/" + _0x2fa470, _0xc2be79);
    _0xc3c4e0.clearChannelData(_0x18217f, _0x1fa01d);
    return _0x176c4f.data;
  } catch (_0x5525ab) {
    throw _0x56f0fc(_0x5525ab);
  }
}
async function Ea(_0x40ff8f, _0x33f8ec, _0x4b202b) {
  try {
    await _0x44b99c.delete("/api/v1/guilds/" + _0x40ff8f + "/channels/" + _0x33f8ec + "/messages/" + _0x4b202b);
    _0xc3c4e0.clearChannelData(_0x40ff8f, _0x33f8ec);
  } catch (_0x3bd37b) {
    throw _0x56f0fc(_0x3bd37b);
  }
}
const Aa = (_0xbe18e0, _0x30520c) => {
  _0xc3c4e0.clearChannelData(_0xbe18e0, _0x30520c);
};
const Ta = async (_0x18ad7e, _0x485fe9, _0x2268d4 = {}) => Ia(_0x18ad7e, _0x485fe9, _0x2268d4, undefined, {
  force: true
});
async function Ma(_0x34232a, _0x373729, _0x23f881) {
  try {
    const _0x4c2930 = await _0x44b99c.post("/api/v1/guilds/" + _0x34232a + "/channels/" + _0x373729 + "/messages/" + _0x23f881 + "/pin");
    _0xc3c4e0.clearChannelData(_0x34232a, _0x373729);
    return _0x4c2930.data;
  } catch (_0xd0528d) {
    throw _0x56f0fc(_0xd0528d);
  }
}
async function Da(_0xfca2c1, _0x3c177f, _0x1826f9) {
  try {
    const _0x2ce0c9 = await _0x44b99c.delete("/api/v1/guilds/" + _0xfca2c1 + "/channels/" + _0x3c177f + "/messages/" + _0x1826f9 + "/pin");
    _0xc3c4e0.clearChannelData(_0xfca2c1, _0x3c177f);
    return _0x2ce0c9.data;
  } catch (_0x264de3) {
    throw _0x56f0fc(_0x264de3);
  }
}
async function $a(_0x1cf6ee, _0x422848) {
  try {
    return (await _0x44b99c.get("/api/v1/guilds/" + _0x1cf6ee + "/channels/" + _0x422848 + "/messages/pinned")).data;
  } catch (_0x20bf9a) {
    throw _0x56f0fc(_0x20bf9a);
  }
}
async function Oa(_0xae472b, _0x554501, _0x3e0a62, _0x46dc8d, _0x2dabaa) {
  try {
    const _0xa8689b = {
      target_channel_id: _0x46dc8d
    };
    if (_0x2dabaa) {
      _0xa8689b.target_guild_id = _0x2dabaa;
    }
    return (await _0x44b99c.post("/api/v1/guilds/" + _0xae472b + "/channels/" + _0x554501 + "/messages/" + _0x3e0a62 + "/forward", _0xa8689b)).data;
  } catch (_0x8d637f) {
    throw _0x56f0fc(_0x8d637f);
  }
}
async function La(_0xbc4f99, _0x3798cb, _0x2f063c) {
  try {
    await _0x44b99c.patch("/api/v1/guilds/" + _0xbc4f99 + "/channels/" + _0x3798cb + "/messages/" + _0x2f063c + "/suppress-embeds");
  } catch (_0x2e5da1) {
    throw _0x56f0fc(_0x2e5da1);
  }
}
const Ra = new Set(["text", "announcement", "rules", undefined, null, ""]);
const xa = new Map();
let Na = null;
function Ua(_0x202da3) {
  if (!_0x202da3 || _0x202da3.startsWith("instance:")) {
    return;
  }
  const _0x3f0c56 = Date.now();
  const _0x408e8d = xa.get(_0x202da3);
  if (!_0x408e8d || !(_0x3f0c56 - _0x408e8d < 60000)) {
    xa.set(_0x202da3, _0x3f0c56);
    (async function (_0x38a166) {
      const _0x48033e = _0x22aaa1.getState().user?.id;
      if (!_0x48033e) {
        return;
      }
      let _0x344f3e = _0x276176.getGuildChannels(_0x38a166)?.channels;
      if (!_0x344f3e) {
        const _0x3a8f65 = await yt(_0x38a166);
        if (_0x22aaa1.getState().user?.id !== _0x48033e) {
          return;
        }
        if (!_0x276176.getGuildChannels(_0x38a166)) {
          _0x276176.setGuildChannels(_0x38a166, {
            channels: _0x38a55f(_0x3a8f65),
            categoriesData: _0x3a8f65,
            lastFetched: Date.now()
          });
        }
        _0x344f3e = _0x276176.getGuildChannels(_0x38a166)?.channels;
      }
      if (!_0x344f3e || _0x344f3e.length === 0) {
        return;
      }
      const _0xa63226 = P.getLastVisitedChannel(_0x38a166);
      const _0x28b802 = _0xa63226 && _0x344f3e.find(_0x2ee4db => _0x2ee4db.id === _0xa63226) || _0x344f3e[0];
      if (!_0x28b802) {
        return;
      }
      const _0x5a2e74 = [_0xbff658(_0x38a166, {
        channelId: _0x28b802.id
      })];
      if (_0x28b802.id === _0xa63226 && Ra.has(_0x28b802.type) && !_0x5182d0(_0x465a90(_0x48033e, undefined, _0x38a166, _0x28b802.id))) {
        _0x5a2e74.push(Ia(_0x38a166, _0x28b802.id, {
          limit: 30
        }));
      }
      await Promise.allSettled(_0x5a2e74);
    })(_0x202da3).catch(() => {});
  }
}
function Pa(_0x146fd3) {
  Ga();
  Na = setTimeout(() => {
    Na = null;
    Ua(_0x146fd3);
  }, 120);
}
function Ga() {
  if (Na) {
    clearTimeout(Na);
    Na = null;
  }
}
function za() {
  Ga();
  xa.clear();
}
const Fa = function (_0x12a302 = 1000) {
  const _0x28aee0 = new Map();
  return {
    enqueue: (_0x5463a0, _0x49facf, _0x2ea24c) => {
      let _0x18107f = _0x28aee0.get(_0x5463a0);
      if (!_0x18107f) {
        _0x18107f = {
          pending: null,
          waiters: [],
          running: false
        };
        _0x28aee0.set(_0x5463a0, _0x18107f);
      }
      const _0x18991a = _0x18107f;
      const _0x2a3798 = _0x18991a.pending?.id;
      if (!_0x2a3798 || _0x49facf.length > _0x2a3798.length || _0x49facf.length === _0x2a3798.length && _0x49facf >= _0x2a3798) {
        _0x18991a.pending = {
          id: _0x49facf,
          send: _0x2ea24c
        };
      }
      const _0x516ff1 = () => {
        if (!_0x18991a.running && !_0x18991a.timer) {
          _0x18991a.timer = setTimeout(async () => {
            _0x18991a.timer = undefined;
            const _0x220fc3 = _0x18991a.pending;
            if (!_0x220fc3) {
              return;
            }
            const _0x406a2b = _0x18991a.waiters.splice(0);
            _0x18991a.pending = null;
            _0x18991a.running = true;
            try {
              await _0x220fc3.send(_0x220fc3.id);
              _0x406a2b.forEach(_0x3c7dbd => _0x3c7dbd.resolve());
            } catch (_0x347b69) {
              _0x406a2b.forEach(_0x31ef05 => _0x31ef05.reject(_0x347b69));
            } finally {
              _0x18991a.running = false;
              if (_0x18991a.pending) {
                _0x516ff1();
              } else if (_0x28aee0.get(_0x5463a0) === _0x18991a) {
                _0x28aee0.delete(_0x5463a0);
              }
            }
          }, _0x12a302);
        }
      };
      const _0x225b29 = new Promise((_0x28d2b0, _0x14eb29) => _0x18991a.waiters.push({
        resolve: _0x28d2b0,
        reject: _0x14eb29
      }));
      _0x516ff1();
      return _0x225b29;
    },
    clear: () => {
      for (const _0x4410db of _0x28aee0.values()) {
        if (_0x4410db.timer) {
          clearTimeout(_0x4410db.timer);
        }
        _0x4410db.pending = null;
        _0x4410db.waiters.splice(0).forEach(_0x419b1d => _0x419b1d.reject(new Error("Account session changed")));
      }
      _0x28aee0.clear();
    }
  };
}();
async function ja(_0x3bc1fa, _0x26a04e, _0x4ebc2a) {
  try {
    return (await _0x44b99c.get("/api/v1/dm/group/members/" + _0x3bc1fa + "/" + _0x26a04e, {
      headers: {
        "Cache-Control": "no-cache"
      },
      signal: _0x4ebc2a
    })).data;
  } catch (_0x43fa76) {
    throw _0x56f0fc(_0x43fa76);
  }
}
async function Ha(_0x534270) {
  try {
    const _0x10a11a = await _0x44b99c.post("/api/v1/messages/dm", _0x534270);
    _0xc3c4e0.clearDMData();
    return _0x10a11a.data;
  } catch (_0xcf3496) {
    throw _0x56f0fc(_0xcf3496);
  }
}
async function Ba(_0x4f01ba, _0xae219e, _0x3f925c) {
  try {
    const _0x537523 = Sa(_0xae219e.content);
    const _0x48c4a6 = Array.isArray(_0xae219e.files) && _0xae219e.files.length > 0;
    let _0x315898;
    const _0x39c1cd = _0x48c4a6 ? await pt(_0x4f01ba, _0xae219e.files, _0x3f925c) : null;
    if (_0x39c1cd) {
      _0x315898 = await _0x44b99c.post("/api/v1/messages/dm/" + _0x4f01ba, {
        content: _0x537523,
        reply_to_id: _0xae219e.reply_to_id ?? null,
        nonce: _0xae219e.nonce || _0x39c1cd.nonce,
        upload_ids: _0x39c1cd.ids
      }, {
        _skip429Handler: true
      });
      _0x39c1cd.consumed();
    } else if (_0x48c4a6) {
      const _0x74a4c2 = new FormData();
      _0x74a4c2.append("content", _0x537523);
      if (_0xae219e.nonce) {
        _0x74a4c2.append("nonce", _0xae219e.nonce);
      }
      if (_0xae219e.reply_to_id !== undefined && _0xae219e.reply_to_id !== null) {
        _0x74a4c2.append("reply_to_id", String(_0xae219e.reply_to_id));
      }
      for (const _0x41cec0 of _0xae219e.files) {
        _0x74a4c2.append("files", _0x41cec0, _0x41cec0.name);
      }
      const _0x2292e8 = await st(_0xae219e.files);
      _0x74a4c2.append("attachments", JSON.stringify(_0x2292e8));
      _0x315898 = await _0x44b99c.post("/api/v1/messages/dm/" + _0x4f01ba, _0x74a4c2, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        _skip429Handler: true,
        onUploadProgress: _0x3f925c ? _0x1c656c => {
          if (_0x1c656c.total) {
            const _0x3eee44 = Math.round(_0x1c656c.loaded * 100 / _0x1c656c.total);
            _0x3f925c(_0x3eee44);
          }
        } : undefined
      });
    } else {
      _0x315898 = await _0x44b99c.post("/api/v1/messages/dm/" + _0x4f01ba, {
        content: _0x537523,
        reply_to_id: _0xae219e.reply_to_id ?? null,
        ...(_0xae219e.nonce && {
          nonce: _0xae219e.nonce
        }),
        ...(_0xae219e.gif && {
          gif: _0xae219e.gif
        })
      }, {
        _skip429Handler: true
      });
    }
    return _0x315898.data;
  } catch (_0x2d8852) {
    if (_0x2d8852?.response?.status === 429) {
      throw _0x2d8852;
    }
    throw _0x56f0fc(_0x2d8852);
  }
}
async function Wa(_0x5509a2, _0xcfb984 = {}, _0x160890) {
  try {
    return (await _0x44b99c.get("/api/v1/dm/" + _0x5509a2 + "/messages", {
      params: {
        ...(_0xcfb984.limit && {
          limit: _0xcfb984.limit
        }),
        ...(_0xcfb984.before && {
          before: _0xcfb984.before
        }),
        ...(_0xcfb984.after && {
          after: _0xcfb984.after
        }),
        ...(_0xcfb984.around && {
          around: _0xcfb984.around
        })
      },
      headers: {
        "Cache-Control": "no-cache"
      },
      signal: _0x160890
    })).data;
  } catch (_0x4493f3) {
    throw _0x56f0fc(_0x4493f3);
  }
}
async function qa(_0x23a510, _0x5038dd, _0xe55542) {
  try {
    const _0x114b6a = {
      content: Sa(_0xe55542.content)
    };
    if (_0xe55542.mentions) {
      const _0x36cb6d = {};
      if (_0xe55542.mentions.users?.length) {
        _0x36cb6d.users = _0xe55542.mentions.users;
      }
      if (_0xe55542.mentions.roles?.length) {
        _0x36cb6d.roles = _0xe55542.mentions.roles;
      }
      if (_0xe55542.mentions.channels?.length) {
        _0x36cb6d.channels = _0xe55542.mentions.channels;
      }
      if (_0xe55542.mentions.everyone) {
        _0x36cb6d.everyone = true;
      }
      if (Object.keys(_0x36cb6d).length > 0) {
        _0x114b6a.mentions = _0x36cb6d;
      }
    }
    return (await _0x44b99c.patch("/api/v1/dm/" + _0x23a510 + "/messages/" + _0x5038dd, _0x114b6a)).data;
  } catch (_0x54cedb) {
    throw _0x56f0fc(_0x54cedb);
  }
}
async function Ya(_0x48e3a4, _0xed2e02) {
  try {
    await _0x44b99c.delete("/api/v1/dm/" + _0x48e3a4 + "/messages/" + _0xed2e02);
  } catch (_0x2527de) {
    throw _0x56f0fc(_0x2527de);
  }
}
async function Va(_0x2d3e2f) {
  return async function (_0x20b8bf, _0x1a4102, _0x4225eb = 60000, _0x30b684) {
    return _0x41afc7.getOrFetch(_0x20b8bf, _0x1a4102, {
      ttlMs: _0x4225eb,
      force: _0x30b684
    });
  }(_0x293a3b.dmChannels(), async () => {
    try {
      return (await _0x44b99c.get("/api/v1/users/@me/channels")).data;
    } catch (_0x27e97d) {
      throw _0x56f0fc(_0x27e97d);
    }
  }, 60000, _0x2d3e2f?.force);
}
async function Ja(_0x492f23, _0x429c17) {
  try {
    return (await _0x44b99c.get("/api/v1/users/" + _0x492f23 + "/dm", {
      headers: {
        "Cache-Control": "no-cache"
      },
      signal: _0x429c17
    })).data;
  } catch (_0x31906f) {
    throw _0x56f0fc(_0x31906f);
  }
}
const Xa = () => _0xc3c4e0.clearDMData();
async function Za(_0x429c98) {
  try {
    const _0x2f8014 = new FormData();
    _0x429c98.recipients.forEach(_0x5e165d => _0x2f8014.append("recipients[]", _0x5e165d));
    _0x2f8014.append("is_group", "true");
    if (_0x429c98.name?.trim()) {
      _0x2f8014.append("name", _0x429c98.name.trim());
    }
    if (_0x429c98.avatar) {
      _0x2f8014.append("avatar", _0x429c98.avatar);
    }
    const _0x9fc71b = await _0x44b99c.post("/api/v1/users/@me/channels", _0x2f8014, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    _0xc3c4e0.clearDMData();
    return _0x9fc71b.data;
  } catch (_0x3e55f8) {
    throw _0x56f0fc(_0x3e55f8);
  }
}
async function Ka(_0x7174a4, _0x4016ec) {
  try {
    const _0x3d760d = new FormData();
    if (_0x4016ec.name !== undefined) {
      _0x3d760d.append("name", _0x4016ec.name.trim());
    }
    if (_0x4016ec.avatar !== undefined) {
      if (_0x4016ec.avatar === null) {
        _0x3d760d.append("avatar", "");
      } else if (_0x4016ec.avatar instanceof File) {
        _0x3d760d.append("avatar", _0x4016ec.avatar);
      }
    }
    if (_0x4016ec.add_recipients?.length) {
      _0x4016ec.add_recipients.forEach(_0x30b6ca => {
        _0x3d760d.append("add_recipients", _0x30b6ca.toString());
      });
    }
    const _0x5cbce2 = await _0x44b99c.patch("/api/v1/dm/" + _0x7174a4 + "/group", _0x3d760d, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    _0xc3c4e0.clearDMData();
    return _0x5cbce2.data;
  } catch (_0x1c9ba0) {
    throw _0x56f0fc(_0x1c9ba0);
  }
}
async function Qa(_0x5de606, _0x34989d) {
  try {
    const _0x38b244 = await _0x44b99c.delete("/api/v1/dm/" + _0x5de606 + "/group/recipients/" + _0x34989d);
    _0xc3c4e0.clearDMData();
    return _0x38b244.data;
  } catch (_0x385405) {
    throw _0x56f0fc(_0x385405);
  }
}
async function ed(_0x15743b) {
  try {
    const _0x4fca95 = await _0x44b99c.post("/api/v1/dm/" + _0x15743b + "/group/leave", {});
    _0xc3c4e0.clearDMData();
    return _0x4fca95.data;
  } catch (_0xdc3279) {
    throw _0x56f0fc(_0xdc3279);
  }
}
async function td(_0xd35959) {
  try {
    const _0xabfb95 = await _0x44b99c.delete("/api/v1/users/@me/channels/" + _0xd35959);
    _0xc3c4e0.clearDMData();
    return _0xabfb95.data;
  } catch (_0x16ecc8) {
    throw _0x56f0fc(_0x16ecc8);
  }
}
async function nd(_0x142478, _0x235cc7) {
  try {
    const _0x544bc6 = await _0x44b99c.post("/api/v1/dm/" + _0x142478 + "/group/transfer", _0x235cc7);
    _0xc3c4e0.clearDMData();
    return _0x544bc6.data;
  } catch (_0x3c07fe) {
    throw _0x56f0fc(_0x3c07fe);
  }
}
async function ad(_0x231458, _0x4fc5ae) {
  try {
    return (await _0x44b99c.post("/api/v1/dm/" + _0x231458 + "/messages/" + _0x4fc5ae + "/pin")).data;
  } catch (_0x115ad8) {
    throw _0x56f0fc(_0x115ad8);
  }
}
async function dd(_0x4f4123, _0x99de2c) {
  try {
    return (await _0x44b99c.delete("/api/v1/dm/" + _0x4f4123 + "/messages/" + _0x99de2c + "/pin")).data;
  } catch (_0x2904c8) {
    throw _0x56f0fc(_0x2904c8);
  }
}
const ud = Object.freeze(Object.defineProperty({
  __proto__: null,
  clearDMChannelsCache: Xa,
  closeDM: td,
  createGroupDM: Za,
  deleteDMMessage: Ya,
  editDMMessage: qa,
  getDMChannelByUserId: Ja,
  getDMChannels: Va,
  getDMMessages: Wa,
  getDMPinnedMessages: async function (_0x74f678) {
    try {
      return (await _0x44b99c.get("/api/v1/dm/" + _0x74f678 + "/messages/pinned")).data;
    } catch (_0x335ad0) {
      throw _0x56f0fc(_0x335ad0);
    }
  },
  getGroupDMMemberDetails: ja,
  getGroupDMMembers: async function (_0x362a66, _0xdf95a2) {
    try {
      return (await _0x44b99c.get("/api/v1/dm/group/members/" + _0x362a66, {
        headers: {
          "Cache-Control": "no-cache"
        },
        signal: _0xdf95a2
      })).data;
    } catch (_0x4843c0) {
      throw _0x56f0fc(_0x4843c0);
    }
  },
  leaveGroupDM: ed,
  pinDMMessage: ad,
  removeGroupDMMember: Qa,
  sendDM: Ha,
  sendDMToChannel: Ba,
  transferGroupDMOwnership: nd,
  unpinDMMessage: dd,
  updateGroupDM: Ka
}, Symbol.toStringTag, {
  value: "Module"
}));
const sd = _0x3b5a59(() => ({
  saving: false
}));
function rd(_0x252736, _0x8f2a37) {
  const _0x148ca7 = _0x16c04e => Date.parse(_0x8f2a37.get(_0x16c04e)?.pinned_at ?? "") || 0;
  return [..._0x252736].sort((_0x7aceb5, _0x47a2cf) => _0x148ca7(_0x47a2cf.channelId) - _0x148ca7(_0x7aceb5.channelId));
}
async function id(_0x388a5d) {
  const _0x38a269 = _0x22aaa1.getState().user?.id;
  const _0x5d05b0 = _0x2d5576.getState().channelsMap.get(_0x388a5d);
  if (_0x38a269 && _0x5d05b0 && !sd.getState().saving) {
    sd.setState({
      saving: true
    });
    try {
      const _0x423da9 = await _0x44b99c.patch("/api/v1/users/@me/channels/" + _0x388a5d + "/pin", {
        pinned: !_0x5d05b0.pinned_at
      });
      if (!_0x423da9.data?.success || !_0x4d0476(_0x423da9.data.pin) || _0x423da9.data.pin.channel_id !== _0x388a5d) {
        throw Error("Invalid pin response");
      }
      if (_0x22aaa1.getState().user?.id !== _0x38a269) {
        return;
      }
      _0x2d5576.getState().applyPinStates([_0x423da9.data.pin]);
      Xa();
    } finally {
      sd.setState({
        saving: false
      });
    }
  }
}
const od = new Map();
function cd() {
  const _0x52386a = _0x22aaa1.getState().user?.id;
  const _0x10ce28 = _0x165fee.getState();
  const _0x4a2906 = _0x10ce28.settings.home.pinnedDmChannelIds ?? [];
  if (!_0x52386a || !_0x10ce28.isLoaded || _0x4a2906.length === 0) {
    return Promise.resolve();
  }
  const _0x4e06ea = String(_0x52386a);
  const _0x1187c2 = od.get(_0x4e06ea);
  if (_0x1187c2) {
    return _0x1187c2;
  }
  const _0x581f12 = (async () => {
    const _0x18fe16 = await _0x44b99c.post("/api/v1/users/@me/channels/pins/import", {
      channel_ids: _0x4a2906
    });
    if (!_0x18fe16.data?.success || !Array.isArray(_0x18fe16.data.pins) || !_0x18fe16.data.pins.every(_0x4d0476)) {
      throw Error("Invalid import response");
    }
    if (_0x22aaa1.getState().user?.id === _0x52386a) {
      _0x2d5576.getState().applyPinStates(_0x18fe16.data.pins);
      Xa();
      await _0x483872.updateHomeSettings({
        pinnedDmChannelIds: []
      });
      if (_0x22aaa1.getState().user?.id === _0x52386a) {
        _0x165fee.getState().setHomeSettings({
          pinnedDmChannelIds: []
        });
      }
    }
  })().finally(() => od.delete(_0x4e06ea));
  od.set(_0x4e06ea, _0x581f12);
  return _0x581f12;
}
let ld = 0;
const fd = _0x3b5a59(_0x19291a => ({
  items: [],
  push: _0x3f0d8c => _0x19291a(_0xa22e78 => ({
    items: [..._0xa22e78.items.slice(-11), {
      ..._0x3f0d8c,
      key: ++ld
    }]
  })),
  remove: _0xad16b2 => _0x19291a(_0x640535 => ({
    items: _0x640535.items.filter(_0x533359 => _0x533359.key !== _0xad16b2)
  }))
}));
const pd = "soundboard_play_request";
export { ue as $, Q as A, we as B, G as C, N as D, W as E, Xa as F, re as G, Fa as H, se as I, $e as J, dt as K, td as L, Y as M, fa as N, Ja as O, Za as P, sd as Q, cd as R, pd as S, Se as T, rd as U, id as V, Va as W, ed as X, bt as Y, za as Z, U as _, j as a, pt as a0, te as a1, zt as a2, kt as a3, Ct as a4, Et as a5, vt as a6, $a as a7, Da as a8, Mt as a9, Ba as aA, Ta as aB, _a as aC, It as aD, St as aE, Dt as aF, Lt as aG, Ut as aH, $t as aI, Nt as aJ, Ot as aK, xt as aL, Pt as aM, Gt as aN, ke as aO, Ce as aP, Ee as aQ, x as aR, _t as aS, K as aT, ge as aU, Qa as aV, nd as aW, Ka as aX, gt as aY, ud as aZ, Rt as aa, Ia as ab, yt as ac, wt as ad, Tt as ae, At as af, Sa as ag, st as ah, ye as ai, Ha as aj, Ie as ak, ja as al, La as am, wa as an, Oa as ao, Ca as ap, mt as aq, Ea as ar, ka as as, Ma as at, Aa as au, Wa as av, qa as aw, Ya as ax, ad as ay, dd as az, B as b, Ze as c, nt as d, at as e, tt as f, ht as g, J as h, oe as i, ga as j, De as k, Ae as l, Te as m, de as n, Ga as o, Ua as p, Pa as q, _e as r, be as s, P as t, R as u, Ke as v, va as w, ya as x, fd as y, Z as z };