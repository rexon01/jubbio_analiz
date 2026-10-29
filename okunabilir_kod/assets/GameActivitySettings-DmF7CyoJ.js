import { r as _0x1094fd, b as _0x6fdfc3, d5 as _0x263a45, d6 as _0x4ee4b6, fq as _0x1bf205, j as _0x49f366, P as _0x1afb9a, I as _0x49bf35 } from "./index-cQfEKR1W.js";
import { S as _0x4b0ce4 } from "./switch-lfnbGePn.js";
import { S as _0x5d478e } from "./separator-Ba6vNTx4.js";
const _Component2 = ({
  className: _0x5419e6
}) => <_0x49bf35 icon="solar:gamepad-bold-duotone" className={_0x5419e6} />;
const _Component3 = ({
  className: _0x2525f5
}) => <_0x49bf35 icon="solar:eye-bold-duotone" className={_0x2525f5} />;
const _Component6 = ({
  className: _0x252547
}) => <_0x49bf35 icon="solar:eye-closed-bold-duotone" className={_0x252547} />;
const _Component7 = ({
  className: _0x119357
}) => <_0x49bf35 icon="solar:magnifer-bold-duotone" className={_0x119357} />;
const _Component4 = ({
  className: _0x3c3574
}) => <_0x49bf35 icon="solar:clock-circle-bold-duotone" className={_0x3c3574} />;
const _Component5 = ({
  className: _0x42c86a
}) => <_0x49bf35 icon="solar:monitor-bold-duotone" className={_0x42c86a} />;
const _Component8 = ({
  className: _0x825e3a
}) => <_0x49bf35 icon="solar:danger-circle-bold-duotone" className={_0x825e3a} />;
const _Component = ({
  className: _0x11e475
}) => <_0x49bf35 icon="solar:refresh-bold-duotone" className={_0x11e475} />;
const h = _0x1094fd.forwardRef(({
  onDirtyChange: _0x599e29
}, _0x130881) => {
  const {
    t: _0xf43c3e
  } = _0x6fdfc3();
  const {
    showActivity: _0x2051cc,
    gameSettings: _0x52ea91,
    currentGame: _0x418231,
    gameStartTime: _0x11b257,
    isScanning: _0x240ebe,
    fetchSettings: _0x4f3f0c,
    toggleActivityAPI: _0x442507,
    toggleGameVisibilityAPI: _0x5c46cf
  } = _0x263a45();
  const [_0x3424ab, _0x26d361] = _0x1094fd.useState(true);
  const [_0x40a902, _0x1f48c0] = _0x1094fd.useState("");
  const [_0x58e113, _0x5c3831] = _0x1094fd.useState([]);
  const [_0x4f979d, _0x4f2e63] = _0x1094fd.useState(false);
  const _0x4f0f94 = _0x1094fd.useRef(null);
  const _0x2bdbdd = typeof window != "undefined" && !!window.electron;
  _0x1094fd.useEffect(() => {
    (async () => {
      _0x26d361(true);
      await _0x4f3f0c();
      _0x26d361(false);
    })();
  }, [_0x4f3f0c]);
  _0x1094fd.useEffect(() => {
    if (_0x2051cc && _0x2bdbdd) {
      _0x4ee4b6.start();
    } else {
      _0x4ee4b6.stop();
    }
    return () => {};
  }, [_0x2051cc, _0x2bdbdd]);
  _0x1094fd.useEffect(() => {
    if (_0x40a902.trim()) {
      if (_0x4f0f94.current) {
        clearTimeout(_0x4f0f94.current);
      }
      _0x4f0f94.current = setTimeout(async () => {
        _0x4f2e63(true);
        try {
          const _0x29e87f = await _0x1bf205.searchGames(_0x40a902, 10);
          _0x5c3831(_0x29e87f);
        } catch {
          _0x5c3831([]);
        } finally {
          _0x4f2e63(false);
        }
      }, 300);
      return () => {
        if (_0x4f0f94.current) {
          clearTimeout(_0x4f0f94.current);
        }
      };
    }
    _0x5c3831([]);
  }, [_0x40a902]);
  _0x1094fd.useImperativeHandle(_0x130881, () => ({
    getValues: () => ({}),
    markPristine: () => {},
    reset: () => {},
    save: async () => true
  }));
  _0x1094fd.useEffect(() => {
    _0x599e29?.(false);
  }, [_0x599e29]);
  const _0xe54227 = _0x1094fd.useCallback(async _0x485084 => {
    await _0x442507(_0x485084);
  }, [_0x442507]);
  const _0xe6ca34 = _0x1094fd.useCallback(async (_0x5889b7, _0x247f3d) => {
    await _0x5c46cf(_0x5889b7, _0x247f3d);
  }, [_0x5c46cf]);
  if (_0x3424ab) {
    return <div className="flex items-center justify-center py-20"><_Component className="size-6 animate-spin text-text-muted" /></div>;
  } else {
    return <div className="space-y-8"><section><div className="mb-4 sm:mb-5"><div className="flex items-center gap-2"><_Component2 className="size-4 text-text-tertiary" /><div className="text-base font-semibold text-text-secondary">{_0xf43c3e("settings.showGameActivity", "Oyun aktivitesini göster")}</div></div><p className="text-sm text-text-muted mt-0.5">{_0xf43c3e("settings.gameActivityDesc", "Oyun aktivitenizi yönetin. Hangi oyunları oynadığınız diğer kullanıcılara gösterilsin.")}</p></div><div className="rounded-xl bg-surface-overlay/40 border border-border-default overflow-hidden"><div role="button" tabIndex={0} onClick={() => _0xe54227(!_0x2051cc)} onKeyDown={_0x4947fa => _0x4947fa.key === "Enter" && _0xe54227(!_0x2051cc)} className="group/vs w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-surface-overlay/50 active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50 focus-visible:ring-inset rounded-xl cursor-pointer"><div className="flex items-start gap-3 flex-1 min-w-0 pr-3"><span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-inset mt-0.5"><_Component3 className="size-4 text-text-secondary" /></span><div><span className="text-[15px] font-medium text-text-secondary block">{_0xf43c3e("settings.showGameActivity", "Oyun aktivitesini göster")}</span><p className="text-[13px] text-text-tertiary mt-0.5 max-w-md">{_0xf43c3e("settings.showGameActivityDesc", "Diğer kullanıcılar hangi oyunu oynadığınızı görebilir.")}</p></div></div><_0x4b0ce4 checked={_0x2051cc} onCheckedChange={_0xe54227} onClick={_0xf71567 => _0xf71567.stopPropagation()} /></div></div>{_0x418231 && <div className="mt-4 rounded-xl border border-border-default bg-surface-overlay/40 p-4"><div className="flex items-center gap-3">{_0x418231.cover_url ? <img src={_0x418231.cover_url} alt={_0x418231.name} className="size-12 rounded-lg object-cover" /> : <div className="size-12 rounded-lg bg-surface-inset flex items-center justify-center"><_Component2 className="size-6 text-text-muted" /></div>}<div className="flex-1 min-w-0"><div className="flex items-center gap-2"><span className="size-2 rounded-full bg-green-500 animate-pulse" /><span className="text-sm font-medium text-text-primary truncate">{_0xf43c3e("settings.currentlyPlaying", "Şu an oynuyor")}</span></div><p className="text-base font-semibold text-text-primary truncate mt-0.5">{_0x418231.name}</p>{_0x11b257 && <div className="flex items-center gap-1 mt-1"><_Component4 className="size-3 text-text-muted" /><span className="text-xs text-text-muted">{(_0x4b5883 => {
                    if (!_0x4b5883) {
                      return "";
                    }
                    const _0x534181 = Math.floor((Date.now() - _0x4b5883) / 1000);
                    const _0x5cb85f = Math.floor(_0x534181 / 3600);
                    const _0x26c2b5 = Math.floor(_0x534181 % 3600 / 60);
                    if (_0x5cb85f > 0) {
                      return _0x5cb85f + "h " + _0x26c2b5 + "m";
                    } else {
                      return _0x26c2b5 + "m";
                    }
                  })(_0x11b257)}</span></div>}</div></div></div>}{!_0x2bdbdd && <div className="mt-4 flex items-start gap-3 rounded-lg border border-border-default bg-surface-overlay/40 p-3"><_Component5 className="size-5 text-text-muted shrink-0 mt-0.5" /><div><p className="text-sm font-medium text-text-primary">{_0xf43c3e("settings.gameActivityDesktopOnly", "Masaüstü uygulaması gerekli")}</p><p className="text-xs text-text-muted mt-0.5">{_0xf43c3e("settings.gameActivityDesktopOnlyDesc", "Oyun tespiti yalnızca masaüstü uygulamasında çalışır. Otomatik oyun tespiti için masaüstü uygulamasını kullanın.")}</p></div></div>}{_0x2bdbdd && _0x2051cc && <div className="mt-3 flex items-center gap-2 text-xs text-text-muted">{_0x240ebe ? <_0x49f366.Fragment><_Component className="size-3 animate-spin" /><span>{_0xf43c3e("settings.scanningProcesses", "Oyunlar taranıyor...")}</span></_0x49f366.Fragment> : <_0x49f366.Fragment><span className="size-2 rounded-full bg-green-500/60" /><span>{_0xf43c3e("settings.scannerActive", "Tarayıcı aktif")}</span></_0x49f366.Fragment>}</div>}</section><_0x5d478e className="bg-surface-overlay/70" /><section><div className="mb-4 sm:mb-5"><div className="flex items-center gap-2"><_Component6 className="size-4 text-text-tertiary" /><div className="text-base font-semibold text-text-secondary">{_0xf43c3e("settings.gameVisibility", "Oyun Görünürlüğü")}</div></div><p className="text-sm text-text-muted mt-0.5">{_0xf43c3e("settings.gameVisibilityDesc", "Belirli oyunların aktivite durumunuzda gösterilip gösterilmeyeceğini seçin.")}</p></div>{_0x52ea91.length > 0 ? <div className="space-y-2">{_0x52ea91.map(_0x39b97c => <div className="flex items-center justify-between gap-3 rounded-lg border border-border-default bg-surface-overlay/30 px-3 py-2.5" key={_0x39b97c.game_id}><div className="flex items-center gap-3 min-w-0">{_0x39b97c.icon_url ? <img src={_0x39b97c.icon_url} alt={_0x39b97c.name} className="size-8 rounded-md object-cover" /> : <div className="size-8 rounded-md bg-surface-inset flex items-center justify-center"><_Component2 className="size-4 text-text-muted" /></div>}<span className="text-sm font-medium text-text-primary truncate">{_0x39b97c.name}</span></div><div className="flex items-center gap-2 shrink-0">{_0x39b97c.show_in_status ? <_Component3 className="size-4 text-text-muted" /> : <_Component6 className="size-4 text-text-muted" />}<_0x4b0ce4 checked={_0x39b97c.show_in_status} onCheckedChange={_0xa7a348 => _0xe6ca34(_0x39b97c.game_id, _0xa7a348)} disabled={!_0x2051cc} /></div></div>)}</div> : <div className="flex flex-col items-center justify-center py-8 text-center"><_Component2 className="size-10 text-text-muted/50 mb-2" /><p className="text-sm text-text-muted">{_0xf43c3e("settings.noGamesDetected", "Henüz tespit edilen oyun yok")}</p><p className="text-xs text-text-muted/70 mt-1">{_0xf43c3e("settings.noGamesDetectedDesc", "Bir oyun başlattığınızda burada görünecektir.")}</p></div>}</section><_0x5d478e className="bg-surface-overlay/70" /><section><div className="mb-4 sm:mb-5"><div className="flex items-center gap-2"><_Component7 className="size-4 text-text-tertiary" /><div className="text-base font-semibold text-text-secondary">{_0xf43c3e("settings.searchGames", "Oyun Ara")}</div></div><p className="text-sm text-text-muted mt-0.5">{_0xf43c3e("settings.searchGamesDesc", "Oyun veritabanında arama yaparak manuel olarak oyun ekleyebilirsiniz.")}</p></div><div className="relative"><_Component7 className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-text-muted" /><input type="text" value={_0x40a902} onChange={_0x65f43c => _0x1f48c0(_0x65f43c.target.value)} placeholder={_0xf43c3e("settings.searchGamesPlaceholder", "Oyun adı yazın...")} className="w-full rounded-lg border border-border-default bg-surface-overlay/50 pl-9 pr-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent-primary" />{_0x4f979d && <_Component className="absolute right-3 top-1/2 -translate-y-1/2 size-4 animate-spin text-text-muted" />}</div>{_0x58e113.length > 0 && <div className="mt-2 max-h-60 overflow-y-auto rounded-lg border border-border-default bg-surface-overlay/50">{_0x58e113.map(_0x1118f0 => <button onClick={() => {
            _0x263a45.getState().setCurrentGame({
              id: _0x1118f0.id,
              name: _0x1118f0.name,
              slug: _0x1118f0.slug,
              icon_url: _0x1118f0.icon_url,
              cover_url: _0x1118f0.cover_url,
              genres: _0x1118f0.genres,
              platforms: _0x1118f0.platforms
            }, null);
            _0x1f48c0("");
            _0x5c3831([]);
            _0x1afb9a.success(_0xf43c3e("settings.gameActivitySet", "{{game}} aktivite olarak ayarlandı", {
              game: _0x1118f0.name
            }));
          }} className="flex items-center gap-3 w-full px-3 py-2 text-left hover:bg-surface-overlay/80 transition-colors first:rounded-t-lg last:rounded-b-lg" key={_0x1118f0.id}>{_0x1118f0.icon_url ? <img src={_0x1118f0.icon_url} alt={_0x1118f0.name} className="size-8 rounded-md object-cover" /> : <div className="size-8 rounded-md bg-surface-inset flex items-center justify-center"><_Component2 className="size-4 text-text-muted" /></div>}<div className="flex-1 min-w-0"><p className="text-sm font-medium text-text-primary truncate">{_0x1118f0.name}</p>{_0x1118f0.genres.length > 0 && <p className="text-xs text-text-muted truncate">{_0x1118f0.genres.join(", ")}</p>}</div></button>)}</div>}</section><div className="flex items-start gap-3 rounded-lg border border-border-default bg-surface-overlay/40 p-3"><_Component8 className="size-4 text-text-muted shrink-0 mt-0.5" /><p className="text-xs text-text-muted leading-relaxed">{_0xf43c3e("settings.gameActivityInfo", "Oyun aktivitesi, çalışan uygulamalarınızı tarayarak otomatik olarak tespit edilir. Yalnızca veritabanımızda kayıtlı oyunlar tanınır. Tanınmayan bir oyun için eşleştirme önerisi gönderebilirsiniz.")}</p></div></div>;
  }
});
h.displayName = "GameActivitySettings";
export { h as default };