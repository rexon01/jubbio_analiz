import { r as _0x2426ef, j as _0x51f8cf, I as _0x954e2c, b as _0x4b0a7f, F as _0x510879, c as _0x410a63, dW as _0x2b6603, d as _0x6c9fd, a_ as _0xe26931, _ as _0x54f49a, aN as _0x316114 } from "./index-cQfEKR1W.js";
import { A as _0x1cfe40, a as _0x4a1ad7, b as _0x15e8d2 } from "./avatar-C-4BWxT3.js";
import { A as _0x27c53a } from "./ApplicationFormDialog-Cf1dddtl.js";
import { C as _0x348b00 } from "./chevron-left-CoNyL-61.js";
const f = {
  twitch: {
    icon: "simple-icons:twitch",
    color: "#9146FF"
  },
  kick: {
    icon: "simple-icons:kick",
    color: "#53FC18"
  },
  youtube: {
    icon: "simple-icons:youtube",
    color: "#FF0000"
  }
};
const _Component2 = _0x2426ef.memo(({
  stream: _0x283123,
  onClick: _0x446fb5
}) => {
  const _0x1ed26c = f[_0x283123.platform] ?? f.twitch;
  const _0x9d4e6e = _0x283123.creatorName.slice(0, 2).toUpperCase();
  return <div role="button" tabIndex={0} onClick={() => _0x446fb5(_0x283123)} onKeyDown={_0x487095 => {
    if (_0x487095.key === "Enter" || _0x487095.key === " ") {
      _0x487095.preventDefault();
      _0x446fb5(_0x283123);
    }
  }} className="group cursor-pointer rounded-xl overflow-hidden border border-border-default/50 bg-surface-raised/40 hover:border-border-strong/60 hover:shadow-md transition-all duration-150"><div className="relative aspect-video bg-surface-overlay overflow-hidden">{_0x283123.thumbnailUrl ? <img src={_0x283123.thumbnailUrl} alt={_0x283123.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" /> : <div className="absolute inset-0 bg-surface-inset/60 flex items-center justify-center"><_0x954e2c icon={_0x1ed26c.icon} className="size-10 opacity-20" style={{
          color: _0x1ed26c.color
        }} /></div>}{_0x283123.isLive && <div className="absolute top-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded bg-status-error text-white text-[10px] font-bold uppercase tracking-wide"><span className="size-1.5 rounded-full bg-white animate-pulse" />LIVE</div>}<div className="absolute bottom-2 left-2 flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/70 text-white text-[10px] font-medium"><_0x954e2c icon="solar:users-group-rounded-bold" className="size-3" />{(_0x97cd66 = _0x283123.viewerCount, _0x97cd66 >= 1000000 ? (_0x97cd66 / 1000000).toFixed(1) + "M" : _0x97cd66 >= 1000 ? (_0x97cd66 / 1000).toFixed(1) + "K" : _0x97cd66.toString())}</div><div className="absolute top-2 right-2 p-1 rounded bg-black/60"><_0x954e2c icon={_0x1ed26c.icon} className="size-3.5" style={{
          color: _0x1ed26c.color
        }} /></div></div><div className="p-2.5 flex gap-2"><_0x1cfe40 className="size-8 shrink-0">{_0x283123.creatorAvatar ? <_0x4a1ad7 src={_0x283123.creatorAvatar} /> : <_0x15e8d2 className="bg-surface-inset text-text-primary text-[10px] font-semibold">{_0x9d4e6e}</_0x15e8d2>}</_0x1cfe40><div className="min-w-0 flex-1"><p className="text-sm font-medium text-text-primary truncate">{_0x283123.title}</p><p className="text-xs text-text-tertiary truncate">{_0x283123.creatorName}</p><p className="text-[10px] text-text-muted mt-0.5">{_0x283123.category}</p></div></div></div>;
  var _0x97cd66;
});
const g = {
  twitch: {
    icon: "simple-icons:twitch",
    color: "#9146FF"
  },
  kick: {
    icon: "simple-icons:kick",
    color: "#53FC18"
  },
  youtube: {
    icon: "simple-icons:youtube",
    color: "#FF0000"
  }
};
const _Component = _0x2426ef.memo(({
  streams: _0x51f3c4
}) => {
  const {
    t: _0x14ae87
  } = _0x4b0a7f();
  const [_0x1c7253, _0xa8d862] = _0x2426ef.useState(0);
  const _0x4019c9 = _0x2426ef.useCallback(() => _0xa8d862(_0x3e842e => (_0x3e842e - 1 + _0x51f3c4.length) % _0x51f3c4.length), [_0x51f3c4.length]);
  const _0x2001e8 = _0x2426ef.useCallback(() => _0xa8d862(_0x28d801 => (_0x28d801 + 1) % _0x51f3c4.length), [_0x51f3c4.length]);
  if (_0x51f3c4.length === 0) {
    return <div className="flex p-4 pb-0 gap-3 h-auto"><div className="flex-1 min-w-0 flex flex-col rounded-xl overflow-hidden border border-border-default/50 bg-surface-raised/30"><div className="relative w-full h-full flex flex-col items-center justify-center text-center p-6" style={{
          aspectRatio: "21/9"
        }}><_0x954e2c icon="solar:tv-bold-duotone" className="size-12 text-text-muted/20 mb-3" /><p className="text-sm font-medium text-text-secondary">{_0x14ae87("home.noLiveNow", "Şu an canlı yayın yok")}</p><p className="text-xs text-text-muted mt-1 max-w-xs">{_0x14ae87("home.noLiveNowDesc", "İçerik üreticiler yayına başladığında burada görünecek")}</p></div></div><div className="w-[340px] shrink-0 flex flex-col rounded-xl overflow-hidden border border-border-default/50 bg-surface-raised/30"><div className="px-3 py-2 border-b border-border-default flex items-center gap-2"><_0x954e2c icon="solar:chat-round-dots-bold" className="size-4 text-text-tertiary" /><span className="text-sm font-medium text-text-primary">{_0x14ae87("home.chat", "Sohbet")}</span></div><div className="flex-1 min-h-0 px-4 py-4 space-y-5 overflow-hidden"><div className="flex items-start gap-3"><div className="size-8 rounded-full bg-surface-inset/40 shrink-0" /><div className="space-y-1.5 pt-0.5"><div className="h-2.5 w-16 rounded-full bg-surface-inset/45" /><div className="h-3 w-36 rounded-full bg-surface-inset/25" /></div></div><div className="flex items-start gap-3"><div className="size-8 rounded-full bg-surface-inset/35 shrink-0" /><div className="space-y-1.5 pt-0.5"><div className="h-2.5 w-20 rounded-full bg-surface-inset/45" /><div className="h-3 w-48 rounded-full bg-surface-inset/25" /><div className="h-3 w-28 rounded-full bg-surface-inset/20" /></div></div><div className="flex items-start gap-3"><div className="size-8 rounded-full bg-surface-inset/40 shrink-0" /><div className="space-y-1.5 pt-0.5"><div className="h-2.5 w-24 rounded-full bg-surface-inset/45" /><div className="w-40 h-20 rounded-lg bg-surface-inset/20 border border-border-subtle/20" /></div></div><div className="flex items-start gap-3"><div className="size-8 rounded-full bg-surface-inset/35 shrink-0" /><div className="space-y-1.5 pt-0.5"><div className="h-2.5 w-14 rounded-full bg-surface-inset/45" /><div className="flex gap-1"><div className="size-6 rounded-md bg-surface-inset/25" /><div className="size-6 rounded-md bg-surface-inset/20" /><div className="size-6 rounded-md bg-surface-inset/25" /></div></div></div><div className="flex items-start gap-3"><div className="size-8 rounded-full bg-surface-inset/40 shrink-0" /><div className="space-y-1.5 pt-0.5"><div className="h-2.5 w-18 rounded-full bg-surface-inset/45" /><div className="h-3 w-32 rounded-full bg-surface-inset/25" /></div></div></div><div className="px-3 py-2.5 border-t border-border-default/50"><div className="h-9 rounded-xl bg-surface-inset/15 border border-border-subtle/30 flex items-center px-3"><div className="h-2.5 w-28 rounded-full bg-surface-inset/25" /></div></div></div></div>;
  }
  const _0x6dbb5d = _0x51f3c4[_0x1c7253];
  const _0x1d5923 = g[_0x6dbb5d.platform] ?? g.twitch;
  const _0x2e0ca1 = _0x6dbb5d.creatorName.slice(0, 2).toUpperCase();
  const _0x22592d = function (_0x46f04c, _0x34a283) {
    const _0x2815ec = function (_0x34d573) {
      let _0x29de1e = _0x34d573.trim();
      const _0x1419f6 = ["https://www.twitch.tv/", "https://twitch.tv/", "https://www.kick.com/", "https://kick.com/"];
      for (const _0x57d67a of _0x1419f6) {
        if (_0x29de1e.toLowerCase().startsWith(_0x57d67a)) {
          _0x29de1e = _0x29de1e.slice(_0x57d67a.length);
          break;
        }
      }
      const _0x352e33 = _0x29de1e.search(/[?/]/);
      if (_0x352e33 !== -1) {
        _0x29de1e = _0x29de1e.slice(0, _0x352e33);
      }
      return _0x29de1e;
    }(_0x34a283);
    switch (_0x46f04c) {
      case "twitch":
        return "https://www.twitch.tv/embed/" + _0x2815ec + "/chat?parent=" + window.location.hostname + "&darkpopout";
      case "kick":
        return "https://kick.com/popout/" + _0x2815ec + "/chat";
      default:
        return "";
    }
  }(_0x6dbb5d.platform, _0x6dbb5d.channelName);
  return <div className="flex p-4 pb-0 gap-3 h-auto"><div className="flex-1 min-w-0 flex flex-col rounded-xl overflow-hidden border border-border-default/50 bg-black"><div className="relative w-full" style={{
        aspectRatio: "16/9"
      }}><iframe src={k(_0x6dbb5d.platform, _0x6dbb5d.channelName)} title={_0x6dbb5d.title} className="absolute inset-0 w-full h-full" allowFullScreen={true} allow="autoplay; encrypted-media; fullscreen" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation" key={_0x6dbb5d.id} /><div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm pointer-events-none z-10"><span className="size-2 rounded-full bg-status-error animate-pulse" /><span className="text-xs font-medium text-white">{(_0x5d9d08 = _0x6dbb5d.viewerCount, _0x5d9d08 >= 1000000 ? (_0x5d9d08 / 1000000).toFixed(1) + "M" : _0x5d9d08 >= 1000 ? (_0x5d9d08 / 1000).toFixed(1) + "K" : _0x5d9d08.toString())} {_0x14ae87("home.viewers", "izleyici")}</span></div><div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm pointer-events-none z-10"><_0x954e2c icon={_0x1d5923.icon} className="size-3.5" style={{
            color: _0x1d5923.color
          }} /><span className="text-[11px] font-medium text-white capitalize">{_0x6dbb5d.platform}</span></div>{_0x51f3c4.length > 1 && <_0x51f8cf.Fragment><button type="button" onClick={_0x4019c9} className="absolute left-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer z-10"><_0x348b00 className="size-4" /></button><button type="button" onClick={_0x2001e8} className="absolute right-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-black/70 transition-colors cursor-pointer z-10"><_0x510879 className="size-4" /></button></_0x51f8cf.Fragment>}</div><div className="px-3 py-2 flex items-center gap-3 bg-surface-raised border-t border-border-default/50"><_0x1cfe40 className="size-8 shrink-0">{_0x6dbb5d.creatorAvatar ? <_0x4a1ad7 src={_0x6dbb5d.creatorAvatar} /> : <_0x15e8d2 className="bg-surface-inset text-text-primary text-[10px] font-bold">{_0x2e0ca1}</_0x15e8d2>}</_0x1cfe40><div className="min-w-0 flex-1"><p className="text-sm font-medium text-text-primary truncate">{_0x6dbb5d.title}</p><p className="text-xs text-text-tertiary truncate">{_0x6dbb5d.creatorName}</p></div><span className="px-2 py-0.5 rounded text-[10px] font-medium bg-surface-overlay/60 text-text-muted border border-border-subtle">{_0x6dbb5d.category}</span>{_0x51f3c4.length > 1 && <div className="flex items-center gap-1 ml-2">{_0x51f3c4.map((_0x3a53cf, _0x100341) => <button type="button" onClick={() => _0xa8d862(_0x100341)} className={"h-1.5 rounded-full transition-all cursor-pointer " + (_0x100341 === _0x1c7253 ? "w-4 bg-accent-primary" : "w-1.5 bg-text-muted/30 hover:bg-text-muted/50")} key={_0x100341} />)}</div>}</div></div><div className="w-[400px] shrink-0 flex flex-col rounded-xl overflow-hidden border border-border-default/50 bg-surface-raised"><div className="px-3 py-2 border-b border-border-default flex items-center gap-2"><_0x954e2c icon="solar:chat-round-dots-bold" className="size-4 text-text-tertiary" /><span className="text-sm font-medium text-text-primary">{_0x14ae87("home.chat", "Sohbet")}</span><_0x954e2c icon={_0x1d5923.icon} className="size-3 ml-auto" style={{
          color: _0x1d5923.color
        }} /></div><div className="flex-1 min-h-0">{_0x22592d ? typeof window != "undefined" && window.electron ? <webview src={_0x22592d} className="w-full h-full border-0" partition="persist:platform-chat" allowpopups={true} /> : <iframe src={_0x22592d} title="Stream chat" className="w-full h-full border-0" allow="clipboard-write" referrerPolicy="no-referrer-when-downgrade" key={_0x6dbb5d.id + "-chat"} /> : <div className="flex flex-col items-center justify-center h-full text-center p-4"><_0x954e2c icon="solar:chat-round-dots-bold" className="size-8 opacity-20 text-text-muted mb-2" /><p className="text-xs text-text-muted">{_0x14ae87("home.chatUnavailable", "Bu platform için sohbet embed desteklenmiyor.")}</p></div>}</div></div></div>;
  var _0x5d9d08;
});
async function j(_0x4ac02a) {
  return (await _0x410a63.get("/api/v1/guilds/" + _0x4ac02a + "/creators/settings")).data;
}
async function N(_0x4f75a5, _0x358e28) {
  await _0x410a63.patch("/api/v1/guilds/" + _0x4f75a5 + "/creators/settings", _0x358e28);
}
async function w() {
  return (await _0x410a63.get("/api/v1/creators/live")).data.creators || [];
}
function y(_0xdbc688) {
  return {
    id: _0xdbc688.guild_id,
    creatorId: _0xdbc688.guild_id,
    creatorName: _0xdbc688.name,
    creatorAvatar: _0xdbc688.avatar_url,
    title: _0xdbc688.stream_title || "",
    category: "Gaming",
    platform: _0xdbc688.stream_platform || "twitch",
    channelName: _0xdbc688.stream_channel || "",
    viewerCount: _0xdbc688.viewer_count || _0xdbc688.member_count,
    thumbnailUrl: _0xdbc688.stream_thumbnail_url,
    isLive: true
  };
}
function k(_0x28c7bc, _0x10c2ae) {
  const _0xa825cb = function (_0xbf58a4) {
    let _0x56e448 = _0xbf58a4.trim();
    const _0x2a42d7 = ["https://www.twitch.tv/", "https://twitch.tv/", "http://twitch.tv/", "https://www.kick.com/", "https://kick.com/", "http://kick.com/", "https://youtube.com/channel/", "https://www.youtube.com/channel/"];
    for (const _0x52338b of _0x2a42d7) {
      if (_0x56e448.toLowerCase().startsWith(_0x52338b)) {
        _0x56e448 = _0x56e448.slice(_0x52338b.length);
        break;
      }
    }
    const _0x1ed951 = _0x56e448.search(/[?/]/);
    if (_0x1ed951 !== -1) {
      _0x56e448 = _0x56e448.slice(0, _0x1ed951);
    }
    return _0x56e448;
  }(_0x10c2ae);
  if (!_0xa825cb) {
    return "";
  }
  switch (_0x28c7bc) {
    case "twitch":
      return "https://player.twitch.tv/?channel=" + _0xa825cb + "&parent=" + window.location.hostname + "&muted=true";
    case "kick":
      return "https://player.kick.com/" + _0xa825cb + "?muted=true";
    case "youtube":
      return "https://www.youtube.com/embed/live_stream?channel=" + _0xa825cb + "&mute=1";
    default:
      return "";
  }
}
const z = _0x2426ef.memo(({
  activitiesCollapsed: _0x598d8c,
  onToggleActivities: _0x480a7f
}) => {
  const {
    t: _0x23b0b8
  } = _0x4b0a7f();
  const [_0x46b91e, _0x545558] = _0x2426ef.useState([]);
  const [_0x320eb6, _0x2760ad] = _0x2426ef.useState(true);
  const [_0x111269, _0x2ebf0f] = _0x2426ef.useState([]);
  _0x2426ef.useEffect(() => {
    w().then(_0x5f2f8c => _0x545558(_0x5f2f8c.map(y))).catch(() => {}).finally(() => _0x2760ad(false));
    (async function () {
      return (await _0x410a63.get("/api/v1/creators/featured")).data.creators || [];
    })().then(_0x2ebf0f).catch(() => {});
  }, []);
  _0x2b6603("guild_updated", _0x2426ef.useCallback(_0x43ab61 => {
    if (_0x43ab61.changes?.is_live === true) {
      w().then(_0x25c0ec => _0x545558(_0x25c0ec.map(y))).catch(() => {});
    } else if (_0x43ab61.changes?.is_live === false) {
      _0x545558(_0x1e3443 => _0x1e3443.filter(_0x39a5ac => _0x39a5ac.id !== _0x43ab61.guild_id));
    }
  }, []));
  const _0x56307e = _0x46b91e;
  const _0x59190c = _0x6c9fd();
  const _0x2a42c5 = _0xe26931(_0x4346e4 => _0x4346e4.servers);
  const [_0x5a3517, _0xae333c] = _0x2426ef.useState({
    open: false,
    guildId: "",
    guildName: "",
    guildAvatar: null,
    questions: [],
    pending: false
  });
  const _0xa868d4 = _0x2426ef.useCallback(async _0x59b6d5 => {
    if (_0x2a42c5.some(_0x308c2e => String(_0x308c2e.id) === String(_0x59b6d5.creatorId))) {
      _0x59190c("/app/server/" + _0x59b6d5.creatorId);
    } else {
      try {
        const {
          joinGuild: _0x1726ca
        } = await _0x54f49a(async () => {
          const {
            joinGuild: _0x24eabc
          } = await import("./index-cQfEKR1W.js").then(_0x50c36d => _0x50c36d.fs);
          return {
            joinGuild: _0x24eabc
          };
        }, [], import.meta.url);
        const _0xd94915 = await _0x1726ca(_0x59b6d5.creatorId);
        if (_0xd94915.application_required) {
          _0xae333c({
            open: true,
            guildId: _0x59b6d5.creatorId,
            guildName: _0x59b6d5.creatorName,
            guildAvatar: _0x59b6d5.creatorAvatar || null,
            questions: _0xd94915.questions || [],
            pending: !!_0xd94915.application_pending
          });
          return;
        }
        const {
          addServerIfNotExists: _0x54eb87
        } = _0xe26931.getState();
        _0x54eb87({
          id: _0x59b6d5.creatorId,
          name: _0x59b6d5.creatorName,
          avatar_url: _0x59b6d5.creatorAvatar || null,
          banner_url: null
        });
        _0x59190c("/app/server/" + _0x59b6d5.creatorId);
      } catch {}
    }
  }, [_0x2a42c5, _0x59190c]);
  return <div className="h-full w-full overflow-y-auto overflow-x-hidden scrollbar-thin">{_0x480a7f && <div className="sticky top-0 z-10 flex items-center justify-end px-4 py-2 bg-surface-base/80 backdrop-blur-sm"><_0x316114 label={_0x23b0b8(_0x598d8c ? "home.showActivities" : "home.hideActivities", _0x598d8c ? "Etkinlikleri Göster" : "Etkinlikleri Gizle")} side="left"><button onClick={_0x480a7f} className="hidden lg:flex size-9 items-center justify-center rounded-lg bg-surface-overlay/60 hover:bg-surface-overlay transition-colors cursor-pointer text-text-secondary hover:text-text-primary"><_0x954e2c icon="solar:sidebar-minimalistic-bold-duotone" className={"size-5 transition-transform " + (_0x598d8c ? "rotate-180" : "")} /></button></_0x316114></div>}<_Component streams={_0x46b91e.slice(0, 5)} onStreamClick={_0xa868d4} /><div className="px-4 pb-6">{_0x320eb6 ? <div className="mt-5"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">{[1, 2, 3, 4].map(_0x1213a3 => <div className="rounded-xl border border-border-default/50 bg-surface-raised/40 overflow-hidden" key={_0x1213a3}><div className="aspect-video bg-surface-overlay animate-pulse" /><div className="p-2.5 flex gap-2"><div className="size-8 rounded-full bg-surface-inset animate-pulse shrink-0" /><div className="flex-1 space-y-1.5"><div className="h-3.5 w-3/4 rounded bg-surface-inset animate-pulse" /><div className="h-2.5 w-1/2 rounded bg-surface-inset/60 animate-pulse" /></div></div></div>)}</div></div> : _0x56307e.length > 0 ? <div className="mt-5"><div className="flex items-center gap-2 mb-4"><div className="flex items-center gap-2"><span className="relative flex size-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-error opacity-75" /><span className="relative inline-flex size-2.5 rounded-full bg-status-error" /></span><h2 className="text-lg font-semibold text-text-primary">{_0x23b0b8("home.liveNow", "Canlı Yayınlar")}</h2></div><span className="text-xs text-text-muted bg-surface-overlay/60 px-2 py-0.5 rounded-full">{_0x56307e.length}</span></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">{_0x56307e.map(_0x4da3f3 => <_Component2 stream={_0x4da3f3} onClick={_0xa868d4} key={_0x4da3f3.id} />)}</div></div> : null}{_0x111269.length > 0 && <div className="mt-8 pt-6 border-t border-border-subtle"><div className="flex items-center gap-2 mb-4"><_0x954e2c icon="solar:star-bold-duotone" className="size-5 text-accent-primary" /><h3 className="text-base font-semibold text-text-primary">{_0x23b0b8("home.featuredCreators", "Önerilen İçerik Üreticiler")}</h3></div><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">{_0x111269.map(_0x26ee7b => <div onClick={() => {
            if (_0x2a42c5.some(_0x3246db => String(_0x3246db.id) === String(_0x26ee7b.guild_id))) {
              _0x59190c("/app/server/" + _0x26ee7b.guild_id);
            } else {
              _0xa868d4({
                id: _0x26ee7b.guild_id,
                creatorId: _0x26ee7b.guild_id,
                creatorName: _0x26ee7b.name,
                creatorAvatar: _0x26ee7b.avatar_url
              });
            }
          }} className="rounded-xl border border-border-default/40 bg-surface-overlay/30 p-3 flex flex-col items-center gap-2 hover:bg-surface-overlay/50 transition-colors cursor-pointer" key={_0x26ee7b.guild_id}><div className="relative"><_0x1cfe40 className="size-12">{_0x26ee7b.avatar_url ? <_0x4a1ad7 src={_0x26ee7b.avatar_url} /> : <_0x15e8d2 className="bg-surface-inset text-text-primary text-sm font-bold">{_0x26ee7b.name.slice(0, 2).toUpperCase()}</_0x15e8d2>}</_0x1cfe40>{_0x26ee7b.is_live && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-0.5 px-1 h-3.5 bg-red-600 rounded-full shadow-[0_1px_4px_rgba(239,68,68,0.4)] border border-surface-overlay"><span className="size-1 rounded-full bg-white animate-pulse" /><span className="text-[7px] font-bold text-white">{_0x23b0b8("creatorPanel.liveBadge")}</span></span>}</div><span className="text-xs font-medium text-text-primary truncate max-w-full">{_0x26ee7b.name}</span><span className="text-[10px] text-text-muted">{_0x26ee7b.member_count.toLocaleString()} {_0x23b0b8("home.members", "üye")}</span></div>)}</div></div>}</div>{_0x5a3517.open && <_0x27c53a open={_0x5a3517.open} onClose={() => _0xae333c(_0x2bfb9d => ({
      ..._0x2bfb9d,
      open: false
    }))} guildId={_0x5a3517.guildId} guildName={_0x5a3517.guildName} guildAvatarUrl={_0x5a3517.guildAvatar} questions={_0x5a3517.questions} pending={_0x5a3517.pending} />}</div>;
});
export { z as L, k as a, j as g, N as u };