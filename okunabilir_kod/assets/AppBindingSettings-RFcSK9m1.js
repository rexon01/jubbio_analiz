import { r as _0x330f9a, j as _0x23fdf7, c as _0x5d7d67 } from "./index-cQfEKR1W.js";
import { a as _0x2b0b99 } from "./apps-ravZtBTn.js";
import { ad as _0x21b7cd, aS as _0x591d4b } from "./soundboardFx-C2LP-Hjs.js";
import { D as _0x409498, a as _0x377613, c as _0x5bee97, d as _0x2ca623 } from "./dialog-BMMpM7PR.js";
import "./index-BUijt7wr.js";
import "./index-yuEHo9bu.js";
function m({
  guildId: _0xcc6747,
  channelId: _0x384e48,
  onChanged: _0x13a6b8
}) {
  const [_0x4ceb5e, _0x380367] = _0x330f9a.useState(false);
  const [_0x338f50, _0x215064] = _0x330f9a.useState([]);
  const [_0x27cd46, _0x3df2f1] = _0x330f9a.useState("");
  const [_0x4326c8, _0x32898d] = _0x330f9a.useState(false);
  const [_0x3826e4, _0xeecb4b] = _0x330f9a.useState("");
  const _0x1e3d87 = _0x338f50.find(_0x564d12 => _0x564d12.provider === "jubbio");
  return <_0x23fdf7.Fragment><button onClick={() => {
      (async () => {
        _0x380367(true);
        _0x32898d(true);
        _0xeecb4b("");
        try {
          const _0x2a9e07 = await _0x21b7cd(_0xcc6747, _0x384e48);
          if (!_0x2a9e07.app_installation_id) {
            throw new Error("Binding missing");
          }
          const _0x3b368f = (await _0x5d7d67.get("/api/v1/apps/guilds/" + _0xcc6747 + "/installations/" + _0x2a9e07.app_installation_id)).data.data;
          _0x215064((await _0x2b0b99.installations(_0xcc6747)).filter(_0x302a30 => String(_0x302a30.application_id) === String(_0x3b368f.application_id)));
          _0x3df2f1(_0x2a9e07.app_installation_id);
        } catch {
          _0xeecb4b("Uygulama sürümleri alınamadı.");
        } finally {
          _0x32898d(false);
        }
      })();
    }} className="px-3 py-1 text-sm text-text-secondary">Uygulama sürümü</button><_0x409498 open={_0x4ceb5e} onOpenChange={_0x53ec9f => {
      if (!_0x4326c8) {
        _0x380367(_0x53ec9f);
      }
    }}><_0x377613><_0x5bee97>Kanalın uygulama sürümü</_0x5bee97><_0x2ca623>{_0x1e3d87 ? "Bu oyun Jubbio tarafından otomatik güncellenir. Devam eden maçlar kendi sürümünde tamamlanır; yeni maçlar güncel sürümde açılır." : "Sunucuya eklenmiş bir sürüme geçin. Devam eden maçlar kendi sürümlerinde kalır."}</_0x2ca623>{_0x1e3d87 ? <p>Güncel sürüm: {_0x1e3d87.version}</p> : <select aria-label="Kanal sürümü" disabled={_0x4326c8} value={_0x27cd46} onChange={_0x2ab3c2 => _0x3df2f1(_0x2ab3c2.target.value)} className="rounded bg-surface-inset p-2">{_0x338f50.map(_0x2050c4 => <option value={_0x2050c4.id} key={_0x2050c4.id}>{_0x2050c4.version}</option>)}</select>}{_0x3826e4 && <p role="alert">{_0x3826e4}</p>}{!_0x1e3d87 && <button disabled={_0x4326c8 || !_0x338f50.some(_0x30c358 => _0x30c358.id === _0x27cd46)} onClick={() => {
          (async () => {
            const _0x13763e = _0x338f50.find(_0x5490d0 => _0x5490d0.id === _0x27cd46);
            if (_0x13763e) {
              _0x32898d(true);
              _0xeecb4b("");
              try {
                await _0x591d4b(_0xcc6747, _0x384e48, {
                  app_installation_id: _0x13763e.id,
                  app_version: _0x13763e.version
                });
                _0x380367(false);
                _0x13a6b8?.();
              } catch {
                _0xeecb4b("Sürüm değiştirilemedi. Kurulumun aktif ve sürümün yayınlanmış olması gerekir.");
              } finally {
                _0x32898d(false);
              }
            }
          })();
        }} className="rounded bg-accent-primary px-4 py-2 disabled:opacity-50">Bu sürümü kullan</button>}</_0x377613></_0x409498></_0x23fdf7.Fragment>;
}
export { m as default };