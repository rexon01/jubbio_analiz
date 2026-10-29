import { b as _0xe0148d, d as _0x4491d4, r as _0x33db67, j as _0x54e6e6, G as _0xda0d2c, B as _0x4f8515 } from "./index-cQfEKR1W.js";
import { D as _0x4b00cf, a as _0x28e37a, b as _0x263e3e, c as _0x1c03ba } from "./dialog-BMMpM7PR.js";
import { I as _0x2974e7 } from "./input-AMyERYwJ.js";
import { L as _0xf22bec } from "./label-ODyS97Ju.js";
import { n as _0x3f5395, a1 as _0x3b5915 } from "./soundboardFx-C2LP-Hjs.js";
import { L as _0x1ead81 } from "./loader-circle-CTtxa1g9.js";
import "./index-yuEHo9bu.js";
import "./index-BUijt7wr.js";
const h = ({
  open: _0x5127c8,
  onOpenChange: _0x340587,
  instance: _0x44e49e
}) => {
  const {
    t: _0x2401f2
  } = _0xe0148d();
  const _0x5e1893 = _0x4491d4();
  const _0x11bbce = _0x3f5395(_0x2f7e83 => _0x2f7e83.loadInstanceGuilds);
  const _0x2d9c8d = _0x3f5395(_0x5341a7 => _0x5341a7.setActiveInstance);
  const [_0x5a291e, _0x43b0b5] = _0x33db67.useState("");
  const [_0x52c252, _0x3a415b] = _0x33db67.useState(false);
  const [_0x26d039, _0x7b2831] = _0x33db67.useState(null);
  _0x33db67.useEffect(() => {
    if (_0x5127c8) {
      _0x43b0b5("");
      _0x7b2831(null);
    }
  }, [_0x5127c8]);
  const _0x217955 = _0x33db67.useCallback(async () => {
    if (_0x44e49e && _0x5a291e.trim()) {
      _0x3a415b(true);
      _0x7b2831(null);
      try {
        const _0x309f09 = _0x3b5915(_0x44e49e.url);
        const _0x45990e = await _0x309f09.post("/api/v1/guilds", {
          name: _0x5a291e.trim()
        });
        const _0x49a4ed = _0x45990e.data.guild || _0x45990e.data;
        await _0x11bbce(_0x44e49e);
        _0x2d9c8d(_0x44e49e, String(_0x49a4ed.id));
        _0x5e1893("/app/instance/" + _0x44e49e.id + "/" + _0x49a4ed.id);
        _0x340587(false);
      } catch (_0x3a505d) {
        console.error("Failed to create guild:", _0x3a505d);
        _0x7b2831(_0x3a505d?.response?.data?.message || _0x2401f2("instance.create_guild_error", "Sunucu oluşturulamadı"));
      } finally {
        _0x3a415b(false);
      }
    }
  }, [_0x44e49e, _0x5a291e, _0x11bbce, _0x2d9c8d, _0x5e1893, _0x340587, _0x2401f2]);
  const _0x10908f = _0x33db67.useCallback(_0x369d72 => {
    if (_0x369d72.key === "Enter" && _0x5a291e.trim() && !_0x52c252) {
      _0x217955();
    }
  }, [_0x5a291e, _0x52c252, _0x217955]);
  if (_0x44e49e) {
    return <_0x4b00cf open={_0x5127c8} onOpenChange={_0x340587}><_0x28e37a className="sm:max-w-md"><_0x263e3e><_0x1c03ba className="flex items-center gap-2"><_0xda0d2c className="w-5 h-5 text-emerald-500" />{_0x2401f2("instance.create_guild", "Sunucu Oluştur")}</_0x1c03ba></_0x263e3e><div className="space-y-4 pt-2"><div className="flex items-center gap-2 p-2 rounded-lg bg-emerald-950/30 border border-emerald-800/30"><_0xda0d2c className="w-4 h-4 text-emerald-400" /><span className="text-sm text-emerald-300">{_0x44e49e.name}</span><span className="text-emerald-700">•</span><span className="text-xs text-emerald-500">{new URL(_0x44e49e.url).hostname}</span></div><div className="space-y-2"><_0xf22bec htmlFor="guild-name">{_0x2401f2("server.name", "Sunucu Adı")}</_0xf22bec><_0x2974e7 id="guild-name" value={_0x5a291e} onChange={_0x2179fd => _0x43b0b5(_0x2179fd.target.value)} onKeyDown={_0x10908f} placeholder={_0x2401f2("server.name_placeholder", "Sunucunun adı")} maxLength={100} autoFocus={true} /></div>{_0x26d039 && <p className="text-sm text-red-400">{_0x26d039}</p>}<div className="flex justify-end gap-2 pt-2"><_0x4f8515 variant="ghost" onClick={() => _0x340587(false)} disabled={_0x52c252}>{_0x2401f2("common.cancel", "İptal")}</_0x4f8515><_0x4f8515 onClick={_0x217955} disabled={!_0x5a291e.trim() || _0x52c252} className="bg-emerald-600 hover:bg-emerald-700">{_0x52c252 ? <_0x54e6e6.Fragment><_0x1ead81 className="w-4 h-4 mr-2 animate-spin" />{_0x2401f2("common.creating", "Oluşturuluyor...")}</_0x54e6e6.Fragment> : _0x2401f2("common.create", "Oluştur")}</_0x4f8515></div></div></_0x28e37a></_0x4b00cf>;
  } else {
    return null;
  }
};
export { h as CreateInstanceGuildModal, h as default };