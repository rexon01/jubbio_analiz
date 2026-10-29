import { r as _0x14ebf3, b as _0x162476, P as _0x13d19c, j as _0x312a40, I as _0x1c4189 } from "./index-cQfEKR1W.js";
import { g as _0x3f8349, u as _0x24ca47, a as _0x38196b } from "./LiveFeed-CUXYXohQ.js";
import { c } from "./connections-XHoM7_KU.js";
import "./avatar-C-4BWxT3.js";
import "./ApplicationFormDialog-Cf1dddtl.js";
import "./dialog-BMMpM7PR.js";
import "./index-yuEHo9bu.js";
import "./loader-circle-CTtxa1g9.js";
import "./chevron-left-CoNyL-61.js";
const o = [{
  value: "twitch",
  label: "Twitch",
  icon: "simple-icons:twitch",
  color: "#9146FF",
  disabled: false
}, {
  value: "kick",
  label: "Kick",
  icon: "simple-icons:kick",
  color: "#53FC18",
  disabled: false
}, {
  value: "youtube",
  label: "YouTube",
  icon: "simple-icons:youtube",
  color: "#FF0000",
  disabled: true
}];
const d = ["twitch", "kick"];
const m = _0x14ebf3.forwardRef(({
  serverId: _0xb905f6,
  onDirtyChange: _0x45e543
}, _0x16da62) => {
  const {
    t: _0x4b0d85
  } = _0x162476();
  const [_0x48ee23, _0x5cfbae] = _0x14ebf3.useState(true);
  const [_0x49987b, _0x40799b] = _0x14ebf3.useState("twitch");
  const [_0x328f0e, _0x344737] = _0x14ebf3.useState({
    twitch: "",
    kick: "",
    youtube: ""
  });
  const [_0x320a0c, _0x5d05c5] = _0x14ebf3.useState(false);
  const [_0x5ee6f2, _0x55f4ef] = _0x14ebf3.useState(null);
  const [_0x4d02a8, _0x3883fd] = _0x14ebf3.useState([]);
  const [_0x10df7a, _0x1dd11f] = _0x14ebf3.useState(null);
  const _0x3abc40 = _0x14ebf3.useRef(null);
  const [_0x1c2db8, _0x4d05e0] = _0x14ebf3.useState({
    platform: "twitch",
    channel: ""
  });
  const _0xe5f8f9 = _0x328f0e[_0x49987b];
  const _0x4c83c8 = _0x49987b !== _0x1c2db8.platform || _0xe5f8f9 !== _0x1c2db8.channel;
  const _0x210ae9 = _0x14ebf3.useCallback(_0x46cd46 => _0x4d02a8.find(_0x2b911d => _0x2b911d.type === _0x46cd46), [_0x4d02a8]);
  const _0x2cd302 = _0x210ae9(_0x49987b);
  const _0x3f5f55 = d.includes(_0x49987b);
  _0x14ebf3.useEffect(() => {
    _0x45e543?.(_0x4c83c8);
  }, [_0x4c83c8, _0x45e543]);
  _0x14ebf3.useEffect(() => {
    Promise.all([_0x3f8349(_0xb905f6), c.getUserConnections().catch(() => [])]).then(([_0x1ed239, _0x2ad670]) => {
      const _0x29d8e5 = _0x1ed239.stream_platform || "twitch";
      const _0x2fccd3 = _0x1ed239.stream_channel || "";
      _0x40799b(_0x29d8e5);
      _0x344737(_0x287fca => ({
        ..._0x287fca,
        [_0x29d8e5]: _0x2fccd3
      }));
      _0x4d05e0({
        platform: _0x29d8e5,
        channel: _0x2fccd3
      });
      _0x5d05c5(_0x1ed239.is_live);
      _0x55f4ef(_0x1ed239.stream_title);
      _0x3883fd(_0x2ad670);
    }).catch(() => _0x13d19c.error(_0x4b0d85("creatorPanel.fetchError", "Yayıncı ayarları yüklenemedi"))).finally(() => _0x5cfbae(false));
  }, [_0xb905f6]);
  _0x14ebf3.useEffect(() => {
    if (!_0x3f5f55) {
      return;
    }
    const _0xf7a454 = _0x210ae9(_0x49987b);
    if (_0xf7a454?.provider_username) {
      _0x344737(_0x5093e4 => ({
        ..._0x5093e4,
        [_0x49987b]: _0xf7a454.provider_username
      }));
    }
  }, [_0x49987b, _0x4d02a8, _0x3f5f55, _0x210ae9]);
  const _0x174e10 = _0x14ebf3.useCallback(async _0x427f2f => {
    try {
      _0x1dd11f(_0x427f2f);
      const _0x2a6462 = await c.authorize(_0x427f2f);
      const _0x218996 = 500;
      const _0x14495a = 700;
      const _0x5c03d3 = Math.round(window.screenX + (window.outerWidth - _0x218996) / 2);
      const _0xd285 = Math.round(window.screenY + (window.outerHeight - _0x14495a) / 2);
      const _0x316009 = window.open(_0x2a6462, "_blank", "width=" + _0x218996 + ",height=" + _0x14495a + ",left=" + _0x5c03d3 + ",top=" + _0xd285);
      if (_0x316009) {
        _0x3abc40.current = setInterval(async () => {
          if (_0x316009.closed) {
            clearInterval(_0x3abc40.current);
            _0x3abc40.current = null;
            _0x1dd11f(null);
            c.getUserConnections().then(_0x31dfc1 => _0x3883fd(_0x31dfc1)).catch(() => {});
            return;
          }
          try {
            const _0x2836ee = await c.getUserConnections();
            if (_0x2836ee.some(_0x4a934d => _0x4a934d.type === _0x427f2f)) {
              clearInterval(_0x3abc40.current);
              _0x3abc40.current = null;
              _0x1dd11f(null);
              _0x3883fd(_0x2836ee);
              try {
                _0x316009.close();
              } catch {}
            }
          } catch {}
        }, 2000);
      }
    } catch {
      _0x1dd11f(null);
    }
  }, []);
  _0x14ebf3.useEffect(() => () => {
    if (_0x3abc40.current) {
      clearInterval(_0x3abc40.current);
    }
  }, []);
  _0x14ebf3.useEffect(() => {
    const _0x5d4f84 = _0x172507 => {
      if (_0x172507.data?.type !== "CONNECTION_RESULT") {
        return;
      }
      const {
        status: _0x56b78c,
        provider: _0x18a7ca
      } = _0x172507.data.data ?? {};
      if (_0x56b78c === "success" && _0x18a7ca && d.includes(_0x18a7ca)) {
        _0x1dd11f(null);
        c.getUserConnections().then(_0x1c1506 => _0x3883fd(_0x1c1506)).catch(() => {});
      }
    };
    window.addEventListener("message", _0x5d4f84);
    return () => window.removeEventListener("message", _0x5d4f84);
  }, []);
  const _0x49cc62 = _0x14ebf3.useCallback(async () => {
    const _0xe9fc5e = _0x328f0e[_0x49987b];
    if (!d.includes(_0x49987b) || _0x210ae9(_0x49987b)) {
      if (_0x49987b && _0xe9fc5e) {
        await _0x24ca47(_0xb905f6, {
          stream_platform: _0x49987b,
          stream_channel: _0xe9fc5e
        });
        _0x4d05e0({
          platform: _0x49987b,
          channel: _0xe9fc5e
        });
        _0x13d19c.success(_0x4b0d85("creatorPanel.saved", "Yayın ayarları kaydedildi"));
      } else {
        _0x13d19c.error(_0x4b0d85("creatorPanel.fillRequired", "Platform ve kanal adı zorunludur"));
      }
    } else {
      _0x13d19c.error(_0x4b0d85("creatorPanel.mustConnect", "Önce hesabınızı bağlamanız gerekiyor"));
    }
  }, [_0xb905f6, _0x49987b, _0x328f0e, _0x210ae9]);
  const _0x1d77c1 = _0x14ebf3.useCallback(() => {
    _0x40799b(_0x1c2db8.platform);
    _0x344737(_0x268d5f => ({
      ..._0x268d5f,
      [_0x1c2db8.platform]: _0x1c2db8.channel
    }));
  }, [_0x1c2db8]);
  _0x14ebf3.useImperativeHandle(_0x16da62, () => ({
    save: _0x49cc62,
    reset: _0x1d77c1
  }), [_0x49cc62, _0x1d77c1]);
  if (_0x48ee23) {
    return <div className="flex items-center justify-center py-20"><div className="size-8 border-[3px] border-border-default border-t-accent-primary rounded-full animate-spin" /></div>;
  }
  const _0x533a15 = _0x49987b && _0xe5f8f9 ? _0x38196b(_0x49987b, _0xe5f8f9) : "";
  return <div className="space-y-8 pb-4"><section><div className="mb-5"><div className="flex items-center gap-2"><_0x1c4189 icon="solar:settings-bold-duotone" className="size-4 text-text-tertiary" /><h3 className="text-base font-semibold text-text-secondary">{_0x4b0d85("creatorPanel.streamSettings", "Yayın Ayarları")}</h3></div><p className="text-sm text-text-muted mt-0.5">{_0x4b0d85("creatorPanel.streamSettingsDesc", "Yayın yaptığınız platformu seçin. Twitch ve Kick için hesap bağlantısı gereklidir; YouTube için kanal URL'si girebilirsiniz.")}</p></div><div className="rounded-xl bg-surface-overlay/40 border border-border-default overflow-hidden"><div className="px-4 pt-4 pb-3 border-b border-border-default"><div className="flex gap-1.5 p-1 rounded-lg bg-surface-inset/30 border border-border-subtle/50">{o.map(_0x388cd2 => <button type="button" onClick={() => !_0x388cd2.disabled && _0x40799b(_0x388cd2.value)} disabled={_0x388cd2.disabled} className={"flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-[13px] font-medium transition-all " + (_0x388cd2.disabled ? "opacity-30 cursor-not-allowed grayscale" : _0x49987b === _0x388cd2.value ? "bg-surface-raised shadow-sm text-text-primary cursor-pointer" : "text-text-muted hover:text-text-secondary cursor-pointer")} key={_0x388cd2.value}><_0x1c4189 icon={_0x388cd2.icon} className="size-3.5" style={{
                color: _0x49987b !== _0x388cd2.value || _0x388cd2.disabled ? undefined : _0x388cd2.color
              }} />{_0x388cd2.label}{_0x388cd2.disabled && <span className="text-[9px] text-text-muted">{_0x4b0d85("common.soon", "Yakında")}</span>}</button>)}</div></div><div className="px-4 py-4">{_0x3f5f55 ? _0x2cd302 ? <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/20">{_0x2cd302.provider_avatar ? <img src={_0x2cd302.provider_avatar} alt="" className="size-8 rounded-full object-cover" /> : <div className="size-8 rounded-full bg-surface-overlay flex items-center justify-center"><_0x1c4189 icon={o.find(_0x293a8c => _0x293a8c.value === _0x49987b).icon} className="size-4" style={{
                color: o.find(_0x2e10e2 => _0x2e10e2.value === _0x49987b).color
              }} /></div>}<div className="flex-1 min-w-0"><div className="flex items-center gap-2"><span className="text-sm font-medium text-text-primary truncate">{_0x2cd302.provider_username}</span><span className="text-[10px] font-medium text-green-600 dark:text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded">{_0x4b0d85("creatorPanel.linked", "Bağlı")}</span></div><p className="text-[11px] text-text-muted mt-0.5">{_0x4b0d85("creatorPanel.linkedDesc", "Hesap doğrulandı. Kanal bilgisi otomatik kullanılıyor.")}</p></div><_0x1c4189 icon="solar:verified-check-bold" className="size-5 text-green-400 shrink-0" /></div> : <div className="space-y-3"><div className="flex items-start gap-3 p-3 rounded-lg bg-amber-500/5 border border-amber-500/20"><_0x1c4189 icon="solar:shield-warning-bold-duotone" className="size-5 text-amber-400 shrink-0 mt-0.5" /><div className="flex-1 min-w-0"><p className="text-sm font-medium text-text-secondary">{_0x4b0d85("creatorPanel.connectionRequired", "Hesap bağlantısı gerekli")}</p><p className="text-[11px] text-text-muted mt-0.5">{_0x4b0d85("creatorPanel.connectionRequiredDesc", "Kötüye kullanımı önlemek için yayın platformu hesabınızı bağlamanız gerekiyor.")}</p></div></div><button type="button" onClick={() => _0x174e10(_0x49987b)} disabled={_0x10df7a === _0x49987b} className="w-full flex items-center justify-center gap-2 h-10 rounded-xl text-sm font-medium transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed border border-border-default bg-surface-overlay/50 hover:bg-surface-overlay text-text-secondary">{_0x10df7a === _0x49987b ? <div className="size-4 border-2 border-text-muted border-t-transparent rounded-full animate-spin" /> : <_0x1c4189 icon={o.find(_0x3413fe => _0x3413fe.value === _0x49987b).icon} className="size-4" style={{
                color: o.find(_0x1e791a => _0x1e791a.value === _0x49987b).color
              }} />}{_0x4b0d85("creatorPanel.connectAccount", "{{platform}} hesabını bağla", {
                platform: o.find(_0xa13c3 => _0xa13c3.value === _0x49987b).label
              })}</button></div> : <_0x312a40.Fragment><label className="text-xs font-medium text-text-tertiary mb-1.5 block">{_0x4b0d85("creatorPanel.channelName", "Kanal Adı veya URL")}</label><input type="text" value={_0xe5f8f9} onChange={_0x49038e => _0x344737(_0x5a898b => ({
              ..._0x5a898b,
              [_0x49987b]: _0x49038e.target.value
            }))} placeholder="UC... veya https://youtube.com/channel/UC..." className="w-full h-9 rounded-lg bg-surface-inset/30 border border-border-subtle px-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-primary/50 focus:ring-1 focus:ring-accent-primary/20 transition-all" /><p className="text-[11px] text-text-muted mt-1.5">{_0x4b0d85("creatorPanel.channelHint", "Tam URL veya sadece kanal adı girebilirsiniz. Otomatik olarak algılanır.")}</p></_0x312a40.Fragment>}</div></div></section>{_0x320a0c && <section><div className="rounded-xl bg-surface-overlay/40 border border-border-default overflow-hidden"><div className="px-4 py-3 flex items-center gap-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-red-500/15"><_0x1c4189 icon="solar:clapperboard-play-bold-duotone" className="size-4 text-red-400" /></span><div className="flex-1 min-w-0"><div className="flex items-center gap-2"><p className="text-[15px] font-medium text-text-primary truncate">{_0x5ee6f2 || _0x4b0d85("creatorPanel.liveNow", "Şu an canlı")}</p><span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-red-500/15 border border-red-500/20 shrink-0"><span className="size-1.5 rounded-full bg-red-500 animate-pulse" /><span className="text-[9px] font-bold text-red-400">{_0x4b0d85("creatorPanel.liveBadge")}</span></span></div><p className="text-[13px] text-text-muted mt-0.5">{_0x4b0d85("creatorPanel.autoDetected", "Platform API'sinden otomatik algılandı")}</p></div></div></div></section>}{_0x533a15 && <section><div className="mb-5"><div className="flex items-center gap-2"><_0x1c4189 icon="solar:monitor-bold-duotone" className="size-4 text-text-tertiary" /><h3 className="text-base font-semibold text-text-secondary">{_0x4b0d85("creatorPanel.preview", "Önizleme")}</h3></div><p className="text-sm text-text-muted mt-0.5">{_0x4b0d85("creatorPanel.previewDesc", "Yayınınız izleyicilere bu şekilde görünecek.")}</p></div><div className="rounded-xl overflow-hidden border border-border-default bg-black/80"><div className="aspect-video w-full">{_0x320a0c ? <iframe src={_0x533a15 + (_0x533a15.includes("?") ? "&" : "?") + "muted=true"} title="Stream preview" className="w-full h-full" allowFullScreen={true} allow="autoplay; encrypted-media" sandbox="allow-scripts allow-same-origin allow-popups allow-presentation" /> : <div className="w-full h-full flex flex-col items-center justify-center text-center p-6"><_0x1c4189 icon="solar:tv-bold-duotone" className="size-10 text-white/10 mb-3" /><p className="text-xs text-white/30">{_0x4b0d85("creatorPanel.previewOffline", "Yayın başladığında burada önizleme görünecek")}</p><p className="text-[10px] text-white/15 mt-2 font-mono truncate max-w-full px-4">{_0x533a15}</p></div>}</div></div></section>}</div>;
});
m.displayName = "CreatorStreamSettings";
const u = _0x14ebf3.memo(m);
export { u as default };