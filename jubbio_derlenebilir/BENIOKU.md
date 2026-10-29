# jubbio_derlenebilir

`dist/assets` içindeki gizlenmiş kodun açılmış (deobfuscate) haliyle oluşturulmuş, paketlenebilen proje.
Genel yapı için bir üst klasördeki `MIMARI.md` dosyasına bak.

## Klasörler
- `dist/` — arayüz. `assets/*.js` dosyaları artık okunur JS; **doğrudan düzenlenebilir**, ayrı bir derleme adımı yok.
- `electron/` — masaüstü kabuğu (orijinalle aynı).
- `release/win-unpacked/Jubbio.exe` — son paketlenmiş çıktı.

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
- `main.cjs` içindeki bütünlük kontrolü değiştirilmiş istemcileri `api.jubbio.com`'a raporlayabilir.
