import { aa as _0x51a981 } from "./index-cQfEKR1W.js";
const n = _0x51a981((_0x10a014, _0x3e3c59) => ({
  activeSidebar: null,
  serverGuildId: null,
  serverChannelId: null,
  dmChannelId: null,
  isSearchOpen: () => _0x3e3c59().activeSidebar === "search",
  isPinnedOpen: () => _0x3e3c59().activeSidebar === "pinned",
  openServerSearch: _0x2d8d9b => _0x10a014({
    activeSidebar: "search",
    serverGuildId: _0x2d8d9b,
    serverChannelId: null,
    dmChannelId: null
  }),
  openServerPinned: (_0x5516ec, _0x55cd25) => _0x10a014({
    activeSidebar: "pinned",
    serverGuildId: _0x5516ec,
    serverChannelId: _0x55cd25,
    dmChannelId: null
  }),
  closeServerSidebar: () => _0x10a014({
    activeSidebar: null,
    serverGuildId: null,
    serverChannelId: null
  }),
  toggleServerSearch: _0x52e010 => {
    const {
      activeSidebar: _0x21ce47,
      serverGuildId: _0x2a779a
    } = _0x3e3c59();
    _0x10a014(_0x21ce47 === "search" && _0x2a779a === _0x52e010 ? {
      activeSidebar: null,
      serverGuildId: null,
      serverChannelId: null
    } : {
      activeSidebar: "search",
      serverGuildId: _0x52e010,
      serverChannelId: null,
      dmChannelId: null
    });
  },
  toggleServerPinned: (_0x330291, _0x7a07f8) => {
    const {
      activeSidebar: _0x5a314b,
      serverGuildId: _0x240aff,
      serverChannelId: _0x59840a
    } = _0x3e3c59();
    _0x10a014(_0x5a314b === "pinned" && _0x240aff === _0x330291 && _0x59840a === _0x7a07f8 ? {
      activeSidebar: null,
      serverGuildId: null,
      serverChannelId: null
    } : {
      activeSidebar: "pinned",
      serverGuildId: _0x330291,
      serverChannelId: _0x7a07f8,
      dmChannelId: null
    });
  },
  openDMSearch: _0x34ff80 => _0x10a014({
    activeSidebar: "search",
    dmChannelId: _0x34ff80,
    serverGuildId: null,
    serverChannelId: null
  }),
  openDMPinned: _0x5d991f => _0x10a014({
    activeSidebar: "pinned",
    dmChannelId: _0x5d991f,
    serverGuildId: null,
    serverChannelId: null
  }),
  closeDMSidebar: () => _0x10a014({
    activeSidebar: null,
    dmChannelId: null
  }),
  toggleDMSearch: _0x225e8e => {
    const {
      activeSidebar: _0x3b7710,
      dmChannelId: _0x2f873f
    } = _0x3e3c59();
    _0x10a014(_0x3b7710 === "search" && _0x2f873f === _0x225e8e ? {
      activeSidebar: null,
      dmChannelId: null
    } : {
      activeSidebar: "search",
      dmChannelId: _0x225e8e,
      serverGuildId: null,
      serverChannelId: null
    });
  },
  toggleDMPinned: _0x360a6e => {
    const {
      activeSidebar: _0xa0c03d,
      dmChannelId: _0x35175f
    } = _0x3e3c59();
    _0x10a014(_0xa0c03d === "pinned" && _0x35175f === _0x360a6e ? {
      activeSidebar: null,
      dmChannelId: null
    } : {
      activeSidebar: "pinned",
      dmChannelId: _0x360a6e,
      serverGuildId: null,
      serverChannelId: null
    });
  },
  closeAll: () => _0x10a014({
    activeSidebar: null,
    serverGuildId: null,
    serverChannelId: null,
    dmChannelId: null
  })
}));
export { n as u };