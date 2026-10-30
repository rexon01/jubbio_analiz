# jubbio_derlenebilir

`dist/assets` içindeki gizlenmiş kodun açılmış (deobfuscate) haliyle oluşturulmuş, paketlenebilen proje.
Genel yapı için bir üst klasördeki `MIMARI.md` dosyasına bak.

## Klasörler
- `dist/` — arayüz. `assets/*.js` dosyaları artık okunur JS; **doğrudan düzenlenebilir**, ayrı bir derleme adımı yok.
- `electron/` — masaüstü kabuğu (yamalı; farklar için `../MIMARI.md` bölüm 6).
- `electron/tor/` — isteğe bağlı `tor.exe` buraya konur (repoda yok).
- `release/` — `npm run pack` / `npm run dist` çıktısı (repoda yok).

## Komutlar
```
npm start          # paketlemeden çalıştır (electron .)
npm run pack       # release/win-unpacked oluştur
npm run dist       # NSIS kurulum dosyası (.exe) oluştur
```

## Notlar
- JSX'li, okumaya daha uygun hali `../okunabilir_kod/assets/` altında. Buradaki dosyalar ise aynı kodun
  tarayıcının doğrudan çalıştırabildiği hali (`jsx(...)` çağrıları olarak).
- Değişken adları (`_0x...`) orijinal değil; derlemede kaybolmuş isimler geri getirilemez.
- `package.json` içinde `npmRebuild: false` var: `uiohook-napi` hazır derlenmiş (prebuild) dosyayla
  geliyor, Visual Studio olmadan yeniden derlenemiyor.
- Orijinal `main.cjs` değiştirilmiş istemcileri `api.jubbio.com`'a raporlar; bu sürümde bu rapor kapalı.
