# Jubbio Masaüstü — Kod Haritası

Sürüm: **3.7.4** · Electron 44 · React (Vite derlemesi)

Bu harita, `dist/` içindeki derlenmiş/gizlenmiş kodun `okunabilir_kod/` altında açılmış hali ve
`electron/` klasöründeki düz kod incelenerek çıkarıldı. Orijinal klasör yapısı derlemede kaybolduğu
için modüller Vite'ın oluşturduğu "chunk" (parça) dosya adlarıyla anılıyor.

---

## 1. Genel yapı

```
┌───────────────────────────── Electron (Node.js) ─────────────────────────────┐
│ electron/main.cjs        Ana süreç: pencereler, tepsi, güncelleme, IPC,       │
│                          kısayollar, oyun algılama, overlay, güvenli depolama │
│ electron/preload.cjs     window.electron köprüsü (contextBridge)              │
│ electron/splash.html     Açılış/güncelleme ekranı                             │
│ electron/overlay*.html   Oyun içi overlay (aktif + pasif)                     │
└───────────────┬──────────────────────────────────────────────────────────────┘
                │ IPC (ipcMain.handle / ipcRenderer.invoke)
┌───────────────▼────────────────── Renderer (Chromium) ───────────────────────┐
│ dist/index.html  →  assets/index-*.js   (React + Router + i18n + store'lar)   │
│                      └─ lazy import ile sayfa parçaları (Login, AppLayout…)   │
└───────────────┬──────────────────────────────────────────────────────────────┘
                │ HTTPS / WSS
┌───────────────▼──────────────────────────────────────────────────────────────┐
│ gateway.jubbio.com/api/v1  REST API (auth, guilds, webhooks, abonelik…)       │
│ realtime.jubbio.com        WebSocket (mesaj/olay akışı, websocket.worker)     │
│ livekit.jubbio.com         Ses / görüntü / ekran paylaşımı (LiveKit, WebRTC)  │
│ cdn.jubbio.com             Avatar, emoji, ek dosya, rnnoise modeli            │
│ api.jubbio.com             Telemetri (tamper-report)                          │
└──────────────────────────────────────────────────────────────────────────────┘
```

## 2. Electron katmanı (`electron/`)

| Dosya | Görev |
|---|---|
| `main.cjs` (~95 KB) | Uygulamanın kalbi. Aşağıdaki bölümlerin hepsi burada. |
| `preload.cjs` | `window.electron` nesnesini renderer'a açar; IPC çağrılarını sarar. |
| `app-permissions.cjs` | IPC çağrısının güvenilir pencereden gelip gelmediğini doğrular (`trustedMainSender`). |
| `game-detection-policy.cjs`, `game-process-inspector.cjs`, `resources/game-process-policy.json` | Çalışan oyunları algılayıp "oynuyor" durumu üretir. |
| `splash.html` | Açılış ekranı ve güncelleme ilerlemesi. |
| `overlay.html`, `overlay-passive.html`, `overlay-preload.cjs` | Oyun üstü overlay: kim konuşuyor, sohbet, kontroller. |

### `main.cjs` içindeki IPC kanalları (gruplu)

- **Pencere:** `window-minimize/maximize/close`, `window-is-*`, `set-titlebar-overlay`
- **Güncelleme (electron-updater):** `check-for-updates`, `download-update`, `install-update(-now)`, `skip-update`, `retry-update`, `get-app-version`
- **Sistem:** `get-auto-launch`, `set-auto-launch`, `open-external`, `show-notification`, `update-thumbar-buttons` (görev çubuğu mikrofon/kulaklık düğmeleri)
- **Ekran paylaşımı:** `get-screen-sources`, `start-screen-capture`, `set-pending-screen-share`
- **Google ile giriş:** `google-oauth-start` (127.0.0.1 üzerinde geçici geri dönüş sunucusu + accounts.google.com)
- **Oyun algılama:** `get-running-processes(-with-titles)`, `get-foreground-app-info`, `verify-game-processes`, `release-game-process-checks`
- **Güvenli depolama (safeStorage, `secure-storage.enc`):** `secure-storage-set/get/remove/available` — oturum token'ları burada şifreli tutulur
- **Overlay:** `overlay-*`, `passive-overlay-*`, `overlay-chat-*`
- **Global kısayollar (uiohook-napi):** `global-hook-set-ptt-key`, `-mute-key`, `-deafen-key`, `global-hook-start/stop` — bas-konuş vb. uygulama arka plandayken de çalışır
- **Bütünlük:** `get-renderer-tamper-status`, `report-renderer-tamper-status`

### Bütünlük (tamper) kontrolü
`detectTampering()` (main.cjs:70) şunlara bakar: preload hash'i, Vencord/BetterDiscord benzeri
ortam değişkenleri ve argümanlar, `main.cjs` içine enjekte edilmiş kod kalıpları. **Uygulamayı
engellemez**, sadece `https://api.jubbio.com/v1/telemetry/tamper-report` adresine rapor gönderir.

## 3. Renderer (arayüz) katmanı

### Giriş noktası
`dist/index.html` → `assets/index-cQfEKR1W.js` (~6 MB). İçinde: React, React Router, i18next,
zustand store'ları, API istemcisi (axios), rota tanımları ve ortak UI bileşenleri.
Sayfalar `React.lazy(() => import("./X-hash.js"))` ile ihtiyaç anında yüklenir.

### Rotalar
| Kök | Alt yollar | Parça dosyaları |
|---|---|---|
| `/` (site) | `about`, `download`, `donate`, `contact`, `roadmap`, `partnership(/apply)`, `help-center/:categoryId/:articleId`, yasal sayfalar (`privacy-policy`, `terms-of-service`, `cookie-policy`, `distance-sales`, `child-safety`) | `About`, `Download`, `HelpCenter`, `LegalPage`… |
| `/` (hesap) | `login`, `register`, `forgot-password`, `reset-password`, `verify-email`, `authentication`, `auth/success`, `account-deletion` | `Login`, `Register`, `TwoFAModal`, `TurnstileModal`… |
| `/app` | `friends(/add)`, `dm/:channelId`, `server/:serverId/:channelId?`, `instance/:instanceId/:guildId/:channelId?`, `discover(/apps,/servers)`, `store(/:appId)`, `settings`, `nexus`, `invite/:code`, `template/:code`, `setup/instance` | `AppLayout`, `ServerPage`, `DMPage`, `Chat`, `VoicePanel`… |
| `/app/checkout` | — | `CheckoutPage`, `IyzicoCheckoutFrame` (iyzico ödeme) |
| `/dev` | `applications(/:appId)`, `bot`, `oauth2(/authorize,/flow,/scopes)`, `docs`, `quickstart`, `bot-api/*`, `js/*` (SDK belgeleri), `webhooks/*` | `DeveloperLayout`, `DocsLayout`, `BotApi*Page`… |

### Ana özellik modülleri
| Alan | Önemli parçalar |
|---|---|
| **Uygulama iskeleti** | `AppLayout` (1,6 MB — sunucu listesi, kanal listesi, üye listesi, global durum), `QuickSwitcher`, `useGlobalKeyboard`, `ShortcutsModal` |
| **Mesajlaşma** | `Chat` (mesaj listesi/gönderme), `TipTapEditor` (zengin metin editörü), `LinkRenderer`, `CodeBlock` + `prism` (kod renklendirme), `SearchPanel`, `ReportMessageDialog` |
| **Sunucular** | `ServerPage`, `ServerSettingsPanel`, `RoleManagement`, `PermissionManager`, `MemberManagement`, `InviteManagement`, `EmojiManagement`, `AuditLogSettings`, `GuildOnboarding`, `TemplateSettings` |
| **Kanallar** | `CreateChannelDialog`, `ChannelSettingsPanel`, `CategorySettingsPanel`, `ChannelWebhooksSettings`, `ForumPanel`/`forumStore`, `AppChannelView` |
| **DM** | `DMPage`, `DMHeader`, `DMCallPanel`, `DMMembersSidebar`, `EditGroupDM` |
| **Ses / görüntü** | `VoicePanel`, `VoiceSocialRoom`/`socialRoomStore`, `VoiceChatSidePanel`, `soundboardFx`, `StreamPreviewImage`, `VoiceSettings` — LiveKit üzerinden |
| **Gerçek zamanlı** | `websocket.worker` (Web Worker içinde WebSocket bağlantısı), `channelNotificationStore` |
| **Kullanıcı ayarları** | `UserSettingsPanel` → `ProfileSettings`, `PrivacySettings`, `DeviceManagement`, `ConnectionsSettings`, `ThemeSettings`, `LanguageTimeSettings`, `OverlaySettings`, `GameActivitySettings`, 2FA modalları |
| **Ödeme** | `SubscriptionSettings`, `FuelPackModal`, `GuildFuelModal`, `CheckoutPage`, `PaymentResult` |
| **Keşfet / mağaza** | `DiscoverPage`/`discoveryStore`, `StorePage`, `StoreAppDetailPage` |
| **Geliştirici portalı** | `developerStore`, `ApplicationsPage`, `OAuth2*`, `BotApi*`, dil bazlı belgeler (`tr-docs`, `en-docs`, `az-docs`, `uz-docs`) |
| **Görsel efektler** | `react-three-fiber`, `useOGLRenderer`, `Aurora`, `SoftAurora`, `Silk` (arka plan animasyonları) |
| **Çeviriler** | `tr`, `en`, `az`, `uz` + `*-help`, `*-docs` |
| **Durum yönetimi** | zustand store'ları (`*Store` dosyaları), `clearAllStores` (çıkışta temizlik) |

## 4. Önemli akışlar

**Giriş:** `Login` → `gateway.jubbio.com/api/v1/auth/...` → (gerekirse Turnstile captcha, 2FA) →
token `secure-storage-set` ile Electron'da şifreli saklanır → `auth/refresh` ile yenilenir →
`/app`'e yönlendirilir. Google ile girişte `google-oauth-start` IPC'si sistem tarayıcısını açar.

**Mesaj:** `TipTapEditor` → REST ile gönderim → diğer istemcilere `realtime.jubbio.com`
WebSocket'i üzerinden olay olarak düşer → `websocket.worker` ana iş parçacığına iletir → store güncellenir → `Chat` yeniden çizilir.

**Ses kanalı:** kanala tıkla → API'den LiveKit token'ı → `wss://livekit.jubbio.com` → WebRTC.
Gürültü engelleme modeli `cdn.jubbio.com/rnnoise`'dan yüklenir. Bas-konuş tuşu `uiohook-napi` ile global dinlenir.

## 5. Klasörler

| Klasör | İçerik |
|---|---|
| `okunabilir_kod/assets/` | Arayüz derlemesinin JSX'li okunur hali — **okumak için** |
| `jubbio_derlenebilir/` | Okunur kodla çalışan, `electron-builder` ile paketlenebilen proje (`dist/` + yamalı `electron/`) |
| `electron/` | Orijinal masaüstü kabuğu (zaten düz kod, değiştirilmemiş) |

Orijinal gizlenmiş `dist/` derlemesi ve `release/` çıktıları repoya alınmadı.

## 6. Derlenebilir sürümdeki değişiklikler

`jubbio_derlenebilir/electron/` ile kökteki orijinal `electron/` arasındaki farklar:

| Dosya | Değişiklik |
|---|---|
| `main.cjs` | `detectTampering()` her zaman `detected: false` döner; `reportTampering` ve renderer tamper raporu erken `return` ile kapatıldı |
| `main.cjs` | Yeni "Nexus Tor" bölümü: `nexus-tor-connect` / `nexus-tor-disconnect` IPC'leri `tor.exe`'yi (`resources/tor` → `electron/tor` → `PATH`) `--SocksPort 9050` ile başlatır, oturumu SOCKS'a yönlendirir ve `check.torproject.org/api/ip` ile doğrular |
| `preload.cjs` | `window.electron.torConnect()` / `torDisconnect()` eklendi |
| `package.json` | `appId: com.jubbio.client.duzenlenmis`, `productName: Jubbio Duzenlenmis`, `publish: null`, `extraResources` ile `electron/tor` |

Farkları görmek için: `git diff --no-index electron jubbio_derlenebilir/electron`
