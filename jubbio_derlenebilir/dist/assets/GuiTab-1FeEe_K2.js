import { aC as _0x56c15d, r as _0x4c13b8, c as _0x1cb847, j as _0x413ebe } from "./index-cQfEKR1W.js";
import { v as _0x55deac } from "./protocol-De1f5_BR.js";
const n = JSON.stringify({
  schemaVersion: 1,
  name: "My app",
  version: "1.0.0",
  entryPoint: "index.html",
  capabilities: ["rooms", "documents"],
  room: {
    kind: "workspace",
    maxParticipants: 8,
    spectators: true
  },
  backend: {
    mode: "managed"
  },
  networkOrigins: []
}, null, 2);
const r = async _0x28f645 => Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", _0x28f645)), _0x4bf57c => _0x4bf57c.toString(16).padStart(2, "0")).join("");
function l() {
  const {
    application: _0x3b1de5
  } = _0x56c15d();
  const _0x18f646 = "/api/v1/applications/" + _0x3b1de5.id + "/gui";
  const [_0x125b1a, _0x531aa3] = _0x4c13b8.useState(n);
  const [_0x56c911, _0x31012e] = _0x4c13b8.useState([]);
  const [_0x455443, _0x30ed23] = _0x4c13b8.useState([]);
  const [_0xff0531, _0x29dc8d] = _0x4c13b8.useState(false);
  const [_0x2129f4, _0xd53403] = _0x4c13b8.useState("");
  const [_0x1d63f0, _0x27bdc8] = _0x4c13b8.useState("");
  const [_0x57fcd5, _0x4aaa9e] = _0x4c13b8.useState("");
  const [_0x2042fc, _0x2ca6f3] = _0x4c13b8.useState(null);
  const _0x174060 = async () => _0x30ed23((await _0x1cb847.get(_0x18f646 + "/versions")).data.data);
  _0x4c13b8.useEffect(() => {
    let _0xf6018a = false;
    _0x1cb847.get(_0x18f646 + "/versions").then(_0x907102 => {
      if (!_0xf6018a) {
        _0x30ed23(_0x907102.data.data);
      }
    }).catch(() => {
      if (!_0xf6018a) {
        _0xd53403("Sürümler alınamadı.");
      }
    });
    return () => {
      _0xf6018a = true;
    };
  }, [_0x18f646]);
  return _0x413ebe.jsxs("section", {
    className: "max-w-3xl space-y-5 p-6 text-text-primary",
    children: [_0x413ebe.jsx("h1", {
      className: "text-xl font-semibold",
      children: "GUI uygulaması"
    }), _0x413ebe.jsx("p", {
      className: "text-text-secondary",
      children: "Uygulamanın build klasörünü yükleyin. Yayınlanan sürümler değiştirilemez; güncellemeler yeni sürüm olarak yayınlanır."
    }), _0x413ebe.jsxs("label", {
      className: "block",
      children: ["Manifest", _0x413ebe.jsx("textarea", {
        "aria-label": "Uygulama manifesti",
        value: _0x125b1a,
        onChange: _0x1cd9c5 => _0x531aa3(_0x1cd9c5.target.value),
        rows: 17,
        className: "mt-2 w-full rounded bg-surface-inset p-3 font-mono text-sm"
      })]
    }), _0x413ebe.jsxs("label", {
      className: "block",
      children: ["Build klasörü", _0x413ebe.jsx("input", {
        type: "file",
        multiple: true,
        webkitdirectory: "",
        onChange: _0x56403e => _0x31012e(Array.from(_0x56403e.target.files || [])),
        className: "mt-2 block"
      })]
    }), _0x413ebe.jsx("button", {
      disabled: _0xff0531,
      onClick: async () => {
        _0x29dc8d(true);
        _0xd53403("");
        try {
          const _0x177204 = _0x55deac(JSON.parse(_0x125b1a), false);
          if (!_0x56c911.length || _0x56c911.length > 512 || _0x56c911.reduce((_0x1ccb7e, _0x2f2155) => _0x1ccb7e + _0x2f2155.size, 0) > 104857600) {
            throw new Error("1–512 dosya, toplam en fazla 100 MB seçin.");
          }
          const _0x569096 = await Promise.all(_0x56c911.map(async _0x43a099 => {
            const _0x39b044 = (_0x43a099.webkitRelativePath || _0x43a099.name).split("/");
            const _0x43e374 = _0x43a099.webkitRelativePath ? _0x39b044.slice(1).join("/") : _0x43a099.name;
            if (_0x43a099.size > 16777216 || !/^[-a-zA-Z0-9_./]+$/.test(_0x43e374) || _0x43e374.split("/").includes("..")) {
              throw new Error("Geçersiz dosya yolu veya 16 MB üzerinde dosya.");
            }
            return {
              file: _0x43a099,
              path: _0x43e374,
              bytes: _0x43a099.size,
              sha256: await r(await _0x43a099.arrayBuffer())
            };
          }));
          _0x569096.sort((_0xda41e1, _0x177c73) => _0xda41e1.path.localeCompare(_0x177c73.path, "en"));
          const _0x4a9913 = _0x569096.map(({
            path: _0x49fb43,
            bytes: _0x5065f4,
            sha256: _0x589931
          }) => ({
            path: _0x49fb43,
            sha256: _0x589931,
            bytes: _0x5065f4
          }));
          if (!_0x4a9913.some(_0x461fc9 => _0x461fc9.path === _0x177204.entryPoint)) {
            throw new Error("Manifest giriş dosyası seçilen klasörde yok.");
          }
          const _0x370887 = await r(new TextEncoder().encode(JSON.stringify(_0x4a9913)).buffer);
          const _0x45edb5 = (await _0x1cb847.get(_0x18f646 + "/versions")).data.data.find(_0x25cf15 => _0x25cf15.version === _0x177204.version);
          if (_0x45edb5 && (_0x45edb5.status !== "draft" || _0x45edb5.bundle_hash !== _0x370887 || JSON.stringify(_0x55deac(_0x45edb5.manifest, false)) !== JSON.stringify(_0x177204))) {
            throw new Error("Bu sürüm değiştirilemez. Manifest sürümünü artırın.");
          }
          if (!_0x45edb5) {
            await _0x1cb847.post(_0x18f646 + "/versions", {
              manifest: _0x177204,
              bundleHash: _0x370887
            });
          }
          for (let _0x516665 = 0; !_0x45edb5?.bundle_files && _0x516665 < _0x569096.length; _0x516665++) {
            const _0x104c3d = _0x569096[_0x516665];
            _0xd53403("Dosyalar yükleniyor: " + (_0x516665 + 1) + "/" + _0x569096.length);
            await _0x1cb847.put("/api/v1/apps/assets/" + _0x3b1de5.id + "/" + _0x177204.version, _0x104c3d.file, {
              params: {
                path: _0x104c3d.path
              },
              headers: {
                "Content-Type": "application/octet-stream"
              }
            });
          }
          const _0x5a74fa = (await _0x1cb847.post("/api/v1/apps/assets/" + _0x3b1de5.id + "/" + _0x177204.version + "/receipt", {
            files: _0x4a9913
          })).data.data.receipt;
          await _0x1cb847.post(_0x18f646 + "/versions/" + _0x177204.version + "/publish", {
            receipt: _0x5a74fa
          });
          await _0x174060();
          _0xd53403(_0x177204.version + " yayınlandı.");
        } catch (_0x475881) {
          _0xd53403(_0x475881.message || "Yayınlama başarısız.");
        } finally {
          _0x29dc8d(false);
        }
      },
      className: "rounded bg-accent-primary px-4 py-2 disabled:opacity-50",
      children: "Doğrula ve yayınla"
    }), _0x2129f4 && _0x413ebe.jsx("p", {
      role: "status",
      className: "text-text-secondary",
      children: _0x2129f4
    }), _0x413ebe.jsx("ul", {
      className: "space-y-2",
      children: _0x455443.map(_0x195876 => _0x413ebe.jsxs("li", {
        className: "flex items-center gap-3",
        children: [_0x413ebe.jsxs("span", {
          children: [_0x195876.version, " · ", _0x195876.status]
        }), _0x195876.status === "published" && _0x413ebe.jsx("button", {
          disabled: _0xff0531,
          className: "text-red-400",
          onClick: async () => {
            _0x29dc8d(true);
            try {
              await _0x1cb847.post(_0x18f646 + "/versions/" + _0x195876.version + "/revoke");
              await _0x174060();
            } catch {
              _0xd53403("Sürüm geri çekilemedi.");
            } finally {
              _0x29dc8d(false);
            }
          },
          children: "Geri çek"
        })]
      }, _0x195876.version))
    }), _0x413ebe.jsxs("div", {
      className: "space-y-3 border-t border-border-default pt-4",
      children: [_0x413ebe.jsx("h2", {
        className: "font-semibold",
        children: "Geliştirici backend’i"
      }), _0x413ebe.jsx("p", {
        className: "text-sm text-text-secondary",
        children: "Anahtar yalnız uygulamanızın sunucusunda kullanılır; GUI bundle’ına ve manifest’e eklemeyin. 30 gün geçerlidir."
      }), _0x413ebe.jsx("button", {
        disabled: _0xff0531,
        onClick: async () => {
          _0x29dc8d(true);
          try {
            _0x2ca6f3((await _0x1cb847.post("/api/v1/apps/applications/" + _0x3b1de5.id + "/backend-keys")).data.data);
          } catch {
            _0xd53403("Backend anahtarı oluşturulamadı.");
          } finally {
            _0x29dc8d(false);
          }
        },
        className: "rounded bg-surface-inset px-4 py-2",
        children: "Backend anahtarı oluştur"
      }), _0x2042fc && _0x413ebe.jsxs("div", {
        children: [_0x413ebe.jsxs("label", {
          children: ["Anahtar", _0x413ebe.jsx("input", {
            "aria-label": "Backend anahtarı",
            readOnly: true,
            value: _0x2042fc.token,
            className: "mt-2 w-full rounded bg-surface-inset p-2 font-mono text-xs"
          })]
        }), _0x413ebe.jsx("button", {
          className: "mt-2 text-red-400",
          onClick: async () => {
            try {
              await _0x1cb847.delete("/api/v1/apps/applications/" + _0x3b1de5.id + "/backend-keys/" + _0x2042fc.id);
              _0x2ca6f3(null);
            } catch {
              _0xd53403("Anahtar iptal edilemedi.");
            }
          },
          children: "Bu anahtarı iptal et"
        })]
      })]
    }), _0x413ebe.jsxs("div", {
      className: "space-y-3 border-t border-border-default pt-4",
      children: [_0x413ebe.jsx("h2", {
        className: "font-semibold",
        children: "Sunucuya kur"
      }), _0x413ebe.jsx("input", {
        "aria-label": "Sunucu kimliği",
        placeholder: "Sunucu kimliği",
        value: _0x1d63f0,
        onChange: _0x31507a => _0x27bdc8(_0x31507a.target.value),
        className: "rounded bg-surface-inset p-2"
      }), _0x413ebe.jsxs("select", {
        "aria-label": "Kurulacak sürüm",
        value: _0x57fcd5,
        onChange: _0x5d7d2e => _0x4aaa9e(_0x5d7d2e.target.value),
        className: "ml-2 rounded bg-surface-inset p-2",
        children: [_0x413ebe.jsx("option", {
          value: "",
          children: "Sürüm seçin"
        }), _0x455443.filter(_0x3463aa => _0x3463aa.status === "published").map(_0xe5aca3 => _0x413ebe.jsx("option", {
          children: _0xe5aca3.version
        }, _0xe5aca3.version))]
      }), _0x413ebe.jsx("p", {
        className: "text-sm text-text-secondary",
        children: "Kurulum bu sürümün manifestinde belirtilen yeteneklere izin verir. Sunucuyu yönetme yetkisi gerekir."
      }), _0x413ebe.jsx("button", {
        disabled: _0xff0531 || !_0x57fcd5,
        onClick: async () => {
          _0x29dc8d(true);
          _0xd53403("");
          try {
            if (!/^[1-9]\d{0,19}$/.test(_0x1d63f0) || !_0x57fcd5) {
              throw new Error("Sunucu kimliği ve yayınlanmış sürüm seçin.");
            }
            const _0x4158ea = (await _0x1cb847.get(_0x18f646 + "/versions")).data.data.find(_0x4ad1c6 => _0x4ad1c6.version === _0x57fcd5);
            if (!_0x4158ea || _0x4158ea.status !== "published") {
              throw new Error("Yayınlanmış sürüm gerekli.");
            }
            await _0x1cb847.post("/api/v1/apps/guilds/" + _0x1d63f0 + "/installations", {
              applicationId: _0x3b1de5.id,
              version: _0x57fcd5,
              approvedCapabilities: _0x4158ea.manifest.capabilities
            });
            _0xd53403("Uygulama kuruldu. Sunucuda uygulama kanalı oluşturabilirsiniz.");
          } catch (_0xbeb616) {
            _0xd53403(_0xbeb616.message);
          } finally {
            _0x29dc8d(false);
          }
        },
        className: "rounded bg-accent-primary px-4 py-2 disabled:opacity-50",
        children: "Sunucuya kur"
      })]
    })]
  });
}
export { l as default };