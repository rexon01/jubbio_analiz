import { b as _0xddb42f, r as _0x31f77e, j as _0x464451, I as _0xb9c4bb, a_ as _0x1e3d55 } from "./index-cQfEKR1W.js";
import { D as _0x5888c9, a as _0x473db2, b as _0x5aa331, c, d as _0x28d2d0, f as _0xfcb9d } from "./dialog-BMMpM7PR.js";
import { L as _0x39c144 } from "./label-ODyS97Ju.js";
import { V as _0x18dc12 } from "./VisibilitySwitch-CMTX5ZFx.js";
import { S as _0x462377 } from "./submit-button-B2LF_DTf.js";
import { b as _0x2912cf } from "./validators-DXDy_d27.js";
import { a as _0x2ef3be } from "./apps-ravZtBTn.js";
import { I as _0x7ab91 } from "./input-AMyERYwJ.js";
import { A as _0x11f6f1 } from "./arrow-right-DvlsXLCB.js";
import { T as _0x3ea155 } from "./TipTapEditor-BMYECO5E.js";
import { E as _0x568763 } from "./AppLayout-BEBJqe9_.js";
import { H as _0x28da0d } from "./hash-Dd0s6IKZ.js";
const j = {
  rooms: {
    label: "Oyun/çalışma odaları",
    icon: "solar:users-group-rounded-bold-duotone"
  },
  documents: {
    label: "Kalıcı dokümanlar",
    icon: "solar:document-bold-duotone"
  },
  jobs: {
    label: "Zamanlanmış alarmlar",
    icon: "solar:alarm-bold-duotone"
  },
  notifications: {
    label: "Uygulama bildirimleri",
    icon: "solar:bell-bold-duotone"
  },
  voice: {
    label: "Onayınızla ses kanalına katılma",
    icon: "solar:microphone-bold-duotone"
  }
};
function N({
  guildId: _0x2a3585,
  onInstalled: _0x370810
}) {
  const {
    t: _0x1d537d
  } = _0xddb42f();
  const [_0x2e0aa4, _0x455442] = _0x31f77e.useState(false);
  const [_0x4d4fd4, _0x53a433] = _0x31f77e.useState("");
  const [_0x45467c, _0x3d3736] = _0x31f77e.useState([]);
  const [_0x3df190, _0x24a3d2] = _0x31f77e.useState("");
  const [_0x1c5bbd, _0x40c8f0] = _0x31f77e.useState([]);
  const [_0xe97152, _0x1a92e1] = _0x31f77e.useState("");
  const [_0x383094, _0x252db8] = _0x31f77e.useState(false);
  const _0x1c7c31 = _0x45467c.find(_0x186492 => _0x186492.version === _0x3df190);
  return _0x464451.jsxs(_0x464451.Fragment, {
    children: [_0x464451.jsxs("button", {
      type: "button",
      onClick: () => _0x455442(true),
      className: "inline-flex items-center gap-1.5 text-[12px] font-medium text-accent-primary hover:text-accent-primary-hover transition-colors",
      children: [_0x464451.jsx("span", {
        children: _0x1d537d("apps.installNew", "Uygulama kur")
      }), _0x464451.jsx(_0x11f6f1, {
        className: "size-3.5"
      })]
    }), _0x464451.jsx(_0x5888c9, {
      open: _0x2e0aa4,
      onOpenChange: _0x14a0f5 => {
        if (!_0x383094) {
          _0x455442(_0x14a0f5);
        }
      },
      children: _0x464451.jsxs(_0x473db2, {
        className: "sm:max-w-md gap-0 p-0",
        overlayClassName: "z-[209]",
        wrapperClassName: "z-[210]",
        children: [_0x464451.jsxs(_0x5aa331, {
          className: "px-5 pt-5 pb-4 gap-1.5",
          children: [_0x464451.jsx(c, {
            children: _0x1d537d("apps.installTitle", "Uygulama Kur")
          }), _0x464451.jsx(_0x28d2d0, {
            children: "Üçüncü taraf bir uygulamayı sunucunuza ekleyin."
          })]
        }), _0x464451.jsxs("div", {
          className: "px-5 pb-5 space-y-4",
          children: [_0x464451.jsx("p", {
            className: "text-[13px] text-text-muted",
            children: "Satranç, Okey ve 101 Okey Jubbio tarafından sunulur; kurulum gerektirmeden uygulama kanalı oluştururken seçebilirsiniz."
          }), _0x464451.jsxs("div", {
            children: [_0x464451.jsx(_0x39c144, {
              className: "text-[12px] capitalize tracking-wide text-text-muted font-medium mb-2 block",
              children: _0x1d537d("apps.customApp", "Özel Uygulama")
            }), _0x464451.jsx(_0x7ab91, {
              disabled: _0x383094,
              "aria-label": "Uygulama kimliği",
              placeholder: _0x1d537d("apps.appIdPlaceholder", "Uygulama kimliği"),
              value: _0x4d4fd4,
              onChange: _0x2b5b93 => {
                _0x53a433(_0x2b5b93.target.value);
                _0x3d3736([]);
                _0x24a3d2("");
                _0x1a92e1("");
              },
              icon: _0x464451.jsx(_0xb9c4bb, {
                icon: "solar:widget-bold-duotone",
                className: "size-5"
              }),
              rightElement: _0x464451.jsx("button", {
                type: "button",
                disabled: _0x383094 || !_0x4d4fd4.trim(),
                onClick: () => {
                  (async () => {
                    if (/^[1-9]\d{0,19}$/.test(_0x4d4fd4.trim())) {
                      _0x252db8(true);
                      _0x1a92e1("");
                      try {
                        const _0x362b45 = _0x4d4fd4.trim();
                        _0x53a433(_0x362b45);
                        const _0x2f6dd7 = await _0x2ef3be.versions(_0x362b45);
                        _0x3d3736(_0x2f6dd7);
                        _0x24a3d2(_0x2f6dd7[0]?.version || "");
                        _0x40c8f0(_0x2f6dd7[0]?.manifest.capabilities || []);
                        if (!_0x2f6dd7.length) {
                          _0x1a92e1("Yayınlanmış sürüm bulunamadı");
                        }
                      } catch {
                        _0x1a92e1("Uygulama bulunamadı");
                      } finally {
                        _0x252db8(false);
                      }
                    } else {
                      _0x1a92e1("Geçerli bir uygulama kimliği girin (sayısal)");
                    }
                  })();
                },
                className: "px-3 py-1.5 rounded-md text-[13px] font-medium bg-surface-overlay/80 text-text-secondary hover:bg-surface-overlay hover:text-text-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all press",
                children: _0x1d537d("apps.fetchVersions", "Getir")
              })
            })]
          }), _0x45467c.length > 1 && _0x464451.jsxs("div", {
            children: [_0x464451.jsx(_0x39c144, {
              className: "text-[12px] capitalize tracking-wide text-text-muted font-medium mb-2 block",
              children: _0x1d537d("apps.version", "Sürüm")
            }), _0x464451.jsx("div", {
              className: "flex flex-wrap gap-1.5",
              children: _0x45467c.map(_0x2e3604 => {
                const _0x5bb835 = _0x3df190 === _0x2e3604.version;
                return _0x464451.jsxs("button", {
                  type: "button",
                  onClick: () => {
                    _0x24a3d2(_0x2e3604.version);
                    _0x40c8f0(_0x2e3604.manifest.capabilities);
                  },
                  className: "px-3 py-1.5 rounded-full text-[13px] font-medium transition-all cursor-pointer press " + (_0x5bb835 ? "bg-accent-primary/20 text-accent-primary" : "bg-surface-inset/50 text-text-secondary hover:bg-surface-inset hover:text-text-primary"),
                  children: ["v", _0x2e3604.version]
                }, _0x2e3604.version);
              })
            })]
          }), _0x1c7c31 && _0x464451.jsxs("div", {
            className: "rounded-lg bg-surface-inset/30 border border-border-subtle overflow-hidden",
            children: [_0x464451.jsx("div", {
              className: "px-3 py-2.5 border-b border-border-subtle bg-surface-overlay/30",
              children: _0x464451.jsxs("div", {
                className: "flex items-center gap-2",
                children: [_0x464451.jsx("div", {
                  className: "size-8 rounded-lg bg-accent-primary/15 flex items-center justify-center",
                  children: _0x464451.jsx(_0xb9c4bb, {
                    icon: "solar:widget-bold-duotone",
                    className: "size-4 text-accent-primary"
                  })
                }), _0x464451.jsxs("div", {
                  children: [_0x464451.jsx("p", {
                    className: "text-[13px] font-medium text-text-primary",
                    children: _0x1c7c31.manifest.name
                  }), _0x464451.jsxs("p", {
                    className: "text-[11px] text-text-muted",
                    children: ["v", _0x1c7c31.version]
                  })]
                })]
              })
            }), _0x1c7c31.manifest.capabilities.length > 0 && _0x464451.jsxs("div", {
              className: "px-3 py-2.5 space-y-1.5",
              children: [_0x464451.jsx("p", {
                className: "text-[11px] text-text-muted uppercase tracking-wide font-medium",
                children: _0x1d537d("apps.permissions", "İzinler")
              }), _0x1c7c31.manifest.capabilities.map(_0xde867e => {
                const _0x222461 = j[_0xde867e];
                const _0x3d545f = _0x1c5bbd.includes(_0xde867e);
                return _0x464451.jsxs("label", {
                  className: "flex items-center gap-2.5 px-2 py-1.5 rounded-md cursor-pointer transition-all " + (_0x3d545f ? "bg-accent-primary/10" : "hover:bg-surface-overlay/50"),
                  children: [_0x464451.jsx("input", {
                    type: "checkbox",
                    checked: _0x3d545f,
                    onChange: _0x375297 => _0x40c8f0(_0x35ccbe => _0x375297.target.checked ? [..._0x35ccbe, _0xde867e] : _0x35ccbe.filter(_0x3d03c2 => _0x3d03c2 !== _0xde867e)),
                    className: "sr-only"
                  }), _0x464451.jsx("div", {
                    className: "size-4 rounded flex items-center justify-center transition-all " + (_0x3d545f ? "bg-accent-primary text-white" : "bg-surface-inset ring-1 ring-border-default"),
                    children: _0x3d545f && _0x464451.jsx(_0xb9c4bb, {
                      icon: "solar:check-read-linear",
                      className: "size-3"
                    })
                  }), _0x464451.jsx(_0xb9c4bb, {
                    icon: _0x222461.icon,
                    className: "size-4 " + (_0x3d545f ? "text-accent-primary" : "text-text-muted")
                  }), _0x464451.jsx("span", {
                    className: "text-[13px] " + (_0x3d545f ? "text-text-primary" : "text-text-secondary"),
                    children: _0x222461.label
                  })]
                }, _0xde867e);
              })]
            }), _0x1c7c31.manifest.networkOrigins.length > 0 && _0x464451.jsxs("div", {
              className: "px-3 py-2.5 border-t border-border-subtle",
              children: [_0x464451.jsx("p", {
                className: "text-[11px] text-text-muted uppercase tracking-wide font-medium mb-1.5",
                children: _0x1d537d("apps.networkAccess", "Ağ Erişimi")
              }), _0x464451.jsx("div", {
                className: "flex flex-wrap gap-1",
                children: _0x1c7c31.manifest.networkOrigins.map(_0x58d8c2 => _0x464451.jsxs("span", {
                  className: "inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-overlay/50 text-[11px] text-text-muted",
                  children: [_0x464451.jsx(_0xb9c4bb, {
                    icon: "solar:global-bold",
                    className: "size-3"
                  }), _0x58d8c2]
                }, _0x58d8c2))
              })]
            })]
          }), _0xe97152 && _0x464451.jsx("div", {
            className: "rounded-lg bg-red-500/10 border border-red-500/20 px-3 py-2",
            children: _0x464451.jsx("p", {
              className: "text-[13px] text-red-400",
              children: _0xe97152
            })
          })]
        }), _0x464451.jsx(_0xfcb9d, {
          className: "px-5 py-4 border-t border-border-subtle bg-surface-base/50",
          children: _0x464451.jsx(_0x462377, {
            loading: _0x383094,
            disabled: !_0x1c7c31,
            disabledReason: _0x1c7c31 ? undefined : _0x1d537d("apps.selectAppFirst", "Önce bir uygulama seçin"),
            onClick: () => {
              (async () => {
                if (_0x1c7c31) {
                  _0x252db8(true);
                  _0x1a92e1("");
                  try {
                    const _0x5d300a = await _0x2ef3be.install(_0x2a3585, _0x4d4fd4, _0x3df190, _0x1c5bbd);
                    _0x370810(_0x5d300a);
                    _0x455442(false);
                  } catch {
                    _0x1a92e1("Kurulum başarısız. Sunucu yönetme yetkisi gerekli.");
                  } finally {
                    _0x252db8(false);
                  }
                }
              })();
            },
            children: _0x1d537d("apps.installButton", "İzin Ver ve Kur")
          })
        })]
      })
    })]
  });
}
const C = ({
  className: _0x8aab84
}) => _0x464451.jsx(_0x28da0d, {
  className: _0x8aab84
});
const k = ({
  className: _0xd460f7
}) => _0x464451.jsx(_0xb9c4bb, {
  icon: "solar:volume-loud-bold-duotone",
  className: _0xd460f7
});
const w = _0x31f77e.memo(({
  isOpen: _0x4618e2,
  onClose: _0x2784cb,
  onCreate: _0x3f1225,
  initialType: _0x31a86c = "text",
  initialVisibility: _0x3d39ed = true,
  categoryId: _0x12fe0b,
  categoriesData: _0x56f335,
  guildId: _0x1856ae
}) => {
  const {
    t: _0x2034d1
  } = _0xddb42f();
  const [_0x59ff67, _0x4358c5] = _0x31f77e.useState("");
  const [_0x2db9b2, _0xd51b64] = _0x31f77e.useState("text");
  const [_0x276d3b, _0x3d1e67] = _0x31f77e.useState(_0x3d39ed ?? true);
  const [_0x58f22b, _0x404b99] = _0x31f77e.useState(false);
  const [_0x3f5100, _0x567afb] = _0x31f77e.useState(null);
  const _0xbf0a3d = _0x31f77e.useRef(null);
  const [_0x2b40a8, _0xb99b8] = _0x31f77e.useState(false);
  const [_0xa817e0, _0x1feb5d] = _0x31f77e.useState([]);
  const [_0x43e3b4, _0x4d0252] = _0x31f77e.useState("");
  const [_0x42b00c, _0x3d3268] = _0x31f77e.useState("");
  _0x31f77e.useEffect(() => {
    if (!_0x4618e2 || _0x2db9b2 !== "app" || !_0x1856ae) {
      return;
    }
    let _0x288edd = false;
    _0x3d3268("");
    _0x1feb5d([]);
    _0x4d0252("");
    _0x2ef3be.installations(_0x1856ae).then(_0x24e48f => {
      const _0x36c647 = new Set();
      const _0xdf1dfc = _0x24e48f.filter(_0x1f66ea => !_0x1f66ea.builtin_slug || !_0x36c647.has(_0x1f66ea.builtin_slug) && (_0x36c647.add(_0x1f66ea.builtin_slug), true));
      if (!_0x288edd) {
        _0x1feb5d(_0xdf1dfc);
      }
    }).catch(() => {
      if (!_0x288edd) {
        _0x3d3268("Uygulamalar yüklenemedi. Kanal yönetme yetkinizi ve uygulama servisi bağlantısını kontrol edin.");
      }
    });
    return () => {
      _0x288edd = true;
    };
  }, [_0x4618e2, _0x2db9b2, _0x1856ae]);
  _0x31f77e.useEffect(() => {
    if (_0x4618e2) {
      const _0x60b7b5 = _0x31a86c && ["text", "voice", "announcement", "stage", "forum", "rules", "stream", "app"].includes(_0x31a86c) ? _0x31a86c : "text";
      _0xd51b64(_0x60b7b5);
      _0x3d1e67(_0x3d39ed ?? true);
      _0x4358c5("");
      _0x567afb(null);
      _0x404b99(false);
    }
  }, [_0x4618e2, _0x31a86c, _0x3d39ed]);
  _0x31f77e.useEffect(() => {
    if (!_0x4618e2) {
      _0x4358c5("");
      _0x567afb(null);
      _0x404b99(false);
      document.body.style.pointerEvents = "auto";
    }
  }, [_0x4618e2]);
  _0x31f77e.useEffect(() => {
    if (_0x59ff67.trim()) {
      const _0x56cda9 = _0x2912cf(_0x59ff67.trim());
      _0x567afb(_0x56cda9);
    } else {
      _0x567afb(null);
    }
  }, [_0x59ff67]);
  _0x31f77e.useEffect(() => {
    _0x567afb(null);
  }, [_0x2db9b2]);
  const _0x265b3a = _0x31f77e.useCallback(async _0x357715 => {
    _0x357715.preventDefault();
    const _0x2ba6a3 = _0x59ff67.trim();
    const _0x4a10ab = _0x2912cf(_0x2ba6a3);
    if (_0x4a10ab) {
      console.error("Validation error:", _0x4a10ab);
    } else {
      _0x404b99(true);
      try {
        const _0x1055b7 = _0xa817e0.find(_0x31b704 => _0x31b704.id === _0x43e3b4);
        if (_0x2db9b2 === "app" && !_0x1055b7) {
          _0x567afb("Bir uygulama veya Jubbio oyunu seçin.");
          _0x404b99(false);
          return;
        }
        await _0x3f1225(_0x2ba6a3, _0x2db9b2, _0x276d3b, _0x12fe0b, _0x1055b7 && _0x2db9b2 === "app" ? {
          installationId: _0x1055b7.id,
          version: _0x1055b7.version
        } : undefined);
        _0x404b99(false);
        _0x2784cb();
      } catch (_0xf536f4) {
        console.error("Oda oluşturulurken hata:", _0xf536f4);
        _0x404b99(false);
      }
    }
  }, [_0x59ff67, _0x2db9b2, _0x276d3b, _0x3f1225, _0x12fe0b, _0xa817e0, _0x43e3b4, _0x2784cb]);
  const _0x379903 = _0x31f77e.useCallback(_0xf3ca23 => {
    _0xbf0a3d.current?.insertEmoji(_0xf3ca23);
  }, []);
  const _0x177203 = _0x31f77e.useMemo(() => _0x2db9b2 !== "stage", [_0x2db9b2]);
  const _0x4b456b = _0x31f77e.useMemo(() => _0x59ff67.trim().length > 0 && !_0x3f5100 && !_0x58f22b && (_0x2db9b2 !== "app" || !!_0x43e3b4), [_0x59ff67, _0x3f5100, _0x58f22b, _0x2db9b2, _0x43e3b4]);
  const _0x60fe41 = _0x31f77e.useMemo(() => new Map([["text", _0x2034d1("server.createChannel.placeholders.text")], ["voice", _0x2034d1("server.createChannel.placeholders.voice")], ["announcement", _0x2034d1("server.createChannel.placeholders.announcement")], ["stage", _0x2034d1("server.createChannel.placeholders.stage")], ["forum", _0x2034d1("server.createChannel.placeholders.forum")], ["rules", _0x2034d1("server.createChannel.placeholders.rules")], ["stream", _0x2034d1("server.createChannel.placeholders.stream", "yayın-kanalı")]]), [_0x2034d1]);
  const _0x195320 = _0x1e3d55(_0x31f77e.useCallback(_0x849646 => !!_0x1856ae && Boolean(_0x849646.servers.find(_0x4f66eb => String(_0x4f66eb.id) === String(_0x1856ae))?.is_creator), [_0x1856ae]));
  const _0x685505 = _0x31f77e.useMemo(() => [{
    value: "app",
    label: "Uygulama",
    icon: ({
      className: _0x49c73a
    }) => _0x464451.jsx(_0xb9c4bb, {
      icon: "solar:widget-bold-duotone",
      className: _0x49c73a
    }),
    color: "bg-indigo-500/20 text-indigo-400"
  }, {
    value: "text",
    label: _0x2034d1("server.createChannel.types.text"),
    icon: C,
    color: "bg-green-500/20 text-green-400"
  }, {
    value: "voice",
    label: _0x2034d1("server.createChannel.types.voice"),
    icon: k,
    color: "bg-purple-500/20 text-purple-400"
  }, {
    value: "forum",
    label: _0x2034d1("server.createChannel.types.forum"),
    icon: ({
      className: _0x125321
    }) => _0x464451.jsx(_0xb9c4bb, {
      icon: "solar:chat-round-bold-duotone",
      className: _0x125321
    }),
    color: "bg-orange-500/20 text-orange-400"
  }, {
    value: "rules",
    label: _0x2034d1("server.createChannel.types.rules"),
    icon: ({
      className: _0x390a8a
    }) => _0x464451.jsx(_0xb9c4bb, {
      icon: "solar:shield-bold-duotone",
      className: _0x390a8a
    }),
    color: "bg-amber-500/20 text-amber-400"
  }, ...(_0x195320 ? [{
    value: "stream",
    label: _0x2034d1("server.createChannel.types.stream", "Yayın"),
    icon: ({
      className: _0x391b6d
    }) => _0x464451.jsx(_0xb9c4bb, {
      icon: "solar:clapperboard-play-bold-duotone",
      className: _0x391b6d
    }),
    color: "bg-red-500/20 text-red-400"
  }] : [])], [_0x2034d1, _0x195320]);
  const _0xa8a9a1 = _0x31f77e.useMemo(() => _0x60fe41.get(_0x2db9b2) || _0x2034d1("server.createChannel.placeholders.default"), [_0x2db9b2, _0x60fe41, _0x2034d1]);
  const _0x132724 = _0x31f77e.useMemo(() => {
    const _0x5c0388 = _0x685505.find(_0x2fb2d8 => _0x2fb2d8.value === _0x2db9b2);
    const _0x35defb = _0x5c0388?.icon || C;
    return _0x464451.jsx(_0x35defb, {
      className: "size-5"
    });
  }, [_0x2db9b2, _0x685505]);
  const _0x4d3d09 = _0x31f77e.useCallback(_0x539e1f => {
    const _0x27f0cc = _0x56f335?.find(_0x28c964 => _0x28c964.category_id === _0x539e1f);
    if (_0x27f0cc?.category_name) {
      return _0x27f0cc.category_name;
    }
    switch (_0x539e1f) {
      case "text-channels":
        return _0x2034d1("server.createChannel.categoryNames.textChannels");
      case "voice-channels":
        return _0x2034d1("server.createChannel.categoryNames.voiceChannels");
      case "announcement-channels":
        return _0x2034d1("server.createChannel.categoryNames.announcementChannels");
      case "stage-channels":
        return _0x2034d1("server.createChannel.categoryNames.stageChannels");
      case "forum-channels":
        return _0x2034d1("server.createChannel.categoryNames.forumChannels");
      case "news-channels":
        return _0x2034d1("server.createChannel.categoryNames.newsChannels");
      case "rules-channels":
        return _0x2034d1("server.createChannel.categoryNames.rulesChannels");
      default:
        return _0x539e1f;
    }
  }, [_0x56f335]);
  if (_0x4618e2) {
    return _0x464451.jsx(_0x5888c9, {
      open: _0x4618e2,
      onOpenChange: _0x559188 => {
        if (!_0x559188) {
          document.body.style.pointerEvents = "auto";
          _0x2784cb();
        }
      },
      children: _0x464451.jsxs(_0x473db2, {
        className: "sm:max-w-lg gap-0 p-0",
        overlayClassName: "z-[199]",
        wrapperClassName: "z-[200]",
        onEscapeKeyDown: _0x2d12ac => {
          if (_0x58f22b) {
            _0x2d12ac.preventDefault();
          }
        },
        onPointerDownOutside: _0x526ffa => {
          if (_0x58f22b) {
            _0x526ffa.preventDefault();
          }
        },
        onInteractOutside: _0x3c73cf => {
          if (_0x58f22b) {
            _0x3c73cf.preventDefault();
          }
        },
        children: [_0x464451.jsxs(_0x5aa331, {
          className: "px-5 pt-5 pb-4 gap-1.5",
          children: [_0x464451.jsx(c, {
            children: _0x2034d1("server.createChannel.title")
          }), _0x464451.jsx(_0x28d2d0, {
            children: _0x12fe0b && _0x12fe0b.trim() !== "" ? _0x2034d1("server.createChannel.categoryInfo", {
              name: _0x4d3d09(_0x12fe0b)
            }) : _0x2034d1("server.createChannel.noCategoryInfo")
          })]
        }), _0x464451.jsxs("form", {
          onSubmit: _0x265b3a,
          className: "space-y-4 px-5 pb-5 " + (_0x58f22b ? "pointer-events-none opacity-60" : ""),
          children: [_0x464451.jsxs("div", {
            children: [_0x464451.jsx(_0x39c144, {
              className: "text-[12px] capitalize tracking-wide text-text-muted font-medium mb-2 block",
              children: _0x2034d1("server.createChannel.channelType")
            }), _0x464451.jsx("div", {
              className: "flex flex-wrap gap-1.5",
              children: _0x685505.map(_0x156a74 => {
                const _0x16717d = _0x156a74.icon;
                const _0x473f7a = _0x2db9b2 === _0x156a74.value;
                return _0x464451.jsxs("button", {
                  type: "button",
                  onClick: () => _0xd51b64(_0x156a74.value),
                  className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[13px] font-medium transition-all cursor-pointer press " + (_0x473f7a ? _0x156a74.color + " shadow-sm" : "bg-surface-inset/50 text-text-secondary hover:bg-surface-inset hover:text-text-primary"),
                  children: [_0x464451.jsx(_0x16717d, {
                    className: "size-4"
                  }), _0x464451.jsx("span", {
                    children: _0x156a74.label
                  })]
                }, _0x156a74.value);
              })
            })]
          }), _0x2db9b2 === "app" && _0x464451.jsxs("div", {
            children: [_0x464451.jsx(_0x39c144, {
              className: "text-[12px] capitalize tracking-wide text-text-muted font-medium mb-2 block",
              children: "Uygulama / Jubbio oyunları"
            }), _0x42b00c ? _0x464451.jsx("div", {
              className: "rounded-lg bg-red-500/10 border border-red-500/20 px-3 py-2.5",
              children: _0x464451.jsx("p", {
                className: "text-[13px] text-red-400",
                children: _0x42b00c
              })
            }) : _0xa817e0.length === 0 ? _0x464451.jsxs("div", {
              className: "rounded-lg bg-surface-inset/30 border border-border-subtle px-3 py-4 text-center",
              children: [_0x464451.jsx(_0xb9c4bb, {
                icon: "solar:box-minimalistic-bold-duotone",
                className: "size-8 text-text-muted/50 mx-auto mb-2"
              }), _0x464451.jsx("p", {
                className: "text-[13px] text-text-muted",
                children: "Bu ortamda kullanılabilir uygulama bulunamadı."
              }), _0x1856ae && _0x464451.jsx("div", {
                className: "mt-3",
                children: _0x464451.jsx(N, {
                  guildId: _0x1856ae,
                  onInstalled: _0xc9c2a4 => {
                    _0x1feb5d(_0x22e838 => [_0xc9c2a4, ..._0x22e838.filter(_0x26c90a => _0x26c90a.id !== _0xc9c2a4.id)]);
                    _0x4d0252(_0xc9c2a4.id);
                    _0x3d3268("");
                  }
                })
              })]
            }) : _0x464451.jsxs(_0x464451.Fragment, {
              children: [_0x464451.jsx("div", {
                className: "space-y-1.5",
                children: _0xa817e0.map(_0x48ee72 => {
                  const _0x21c088 = _0x43e3b4 === _0x48ee72.id;
                  return _0x464451.jsxs("button", {
                    type: "button",
                    onClick: () => {
                      _0x4d0252(_0x48ee72.id);
                      _0x567afb(null);
                    },
                    className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all cursor-pointer press " + (_0x21c088 ? "bg-accent-primary/15 ring-1 ring-accent-primary/40" : "bg-surface-inset/30 hover:bg-surface-inset/50 ring-1 ring-border-subtle"),
                    children: [_0x464451.jsx("div", {
                      className: "size-9 rounded-lg flex items-center justify-center shrink-0 " + (_0x21c088 ? "bg-accent-primary/20" : "bg-surface-overlay/60"),
                      children: _0x464451.jsx(_0xb9c4bb, {
                        icon: "solar:widget-bold-duotone",
                        className: "size-5 " + (_0x21c088 ? "text-accent-primary" : "text-text-muted")
                      })
                    }), _0x464451.jsxs("div", {
                      className: "flex-1 min-w-0",
                      children: [_0x464451.jsx("p", {
                        className: "text-[13px] font-medium truncate " + (_0x21c088 ? "text-text-primary" : "text-text-secondary"),
                        children: _0x48ee72.application_name || "App " + _0x48ee72.application_id
                      }), _0x464451.jsxs("p", {
                        className: "text-[11px] text-text-muted truncate",
                        children: [_0x48ee72.provider === "jubbio" ? "Jubbio · Kurulum gerektirmez · " : "", "v", _0x48ee72.version]
                      })]
                    }), _0x21c088 && _0x464451.jsx(_0xb9c4bb, {
                      icon: "solar:check-circle-bold",
                      className: "size-5 text-accent-primary shrink-0"
                    })]
                  }, _0x48ee72.id);
                })
              }), _0x464451.jsxs("div", {
                className: "flex items-center justify-between mt-2.5 px-0.5",
                children: [_0x464451.jsx("span", {
                  className: "text-[11px] text-text-muted/60",
                  children: _0x2034d1("server.createChannel.appBindingHint", "Kanal bu uygulama sürümüne bağlanır")
                }), _0x1856ae && _0x464451.jsx(N, {
                  guildId: _0x1856ae,
                  onInstalled: _0x27f881 => {
                    _0x1feb5d(_0x361b92 => [_0x27f881, ..._0x361b92.filter(_0x451bfd => _0x451bfd.id !== _0x27f881.id)]);
                    _0x4d0252(_0x27f881.id);
                    _0x3d3268("");
                  }
                })]
              })]
            })]
          }), _0x464451.jsxs("div", {
            children: [_0x464451.jsx(_0x39c144, {
              htmlFor: "channel-name",
              className: "text-[12px] capitalize tracking-wide text-text-muted font-medium mb-2 block",
              children: _0x2034d1("server.createChannel.channelName")
            }), _0x464451.jsxs("div", {
              className: "group/input",
              children: [_0x464451.jsxs("div", {
                className: "flex items-center gap-2 rounded-lg bg-surface-inset/30 px-2.5 py-1 focus-within:bg-surface-inset/40 ring-1 ring-border-subtle focus-within:ring-2 focus-within:ring-accent-primary/25 focus-within:ring-offset-1 focus-within:ring-offset-surface-raised transition-all",
                children: [_0x464451.jsx("div", {
                  className: "shrink-0 text-text-muted group-focus-within/input:text-text-secondary transition-colors",
                  children: _0x132724
                }), _0x464451.jsx(_0x3ea155, {
                  ref: _0xbf0a3d,
                  value: _0x59ff67,
                  onChange: _0x4358c5,
                  onSubmit: () => {
                    if (_0x4b456b) {
                      _0x265b3a(new Event("submit"));
                    }
                  },
                  placeholder: _0xa8a9a1,
                  maxByteLength: 200,
                  maxLength: 50,
                  disabled: _0x58f22b,
                  className: "flex-1 min-h-[20px] max-h-[20px] overflow-hidden text-[13px]"
                }), _0x464451.jsx(_0x568763, {
                  onEmojiSelect: _0x379903,
                  initialMode: "emoji",
                  hideGif: true,
                  modal: true,
                  onStateChange: _0x148db6 => _0xb99b8(_0x148db6),
                  contentClassName: "z-[210]",
                  children: _0x464451.jsx("button", {
                    type: "button",
                    className: "p-1.5 rounded-lg transition-all press cursor-pointer " + (_0x2b40a8 ? "text-accent-primary-text bg-accent-subtle" : "text-text-muted hover:text-text-secondary hover:bg-surface-overlay/60"),
                    children: _0x464451.jsx(_0xb9c4bb, {
                      icon: "solar:emoji-funny-circle-bold",
                      className: "size-6"
                    })
                  })
                })]
              }), _0x464451.jsxs("div", {
                className: "flex items-center justify-between mt-2 px-0.5",
                children: [_0x3f5100 ? _0x464451.jsx("span", {
                  className: "text-[11px] text-red-400 font-medium",
                  children: _0x3f5100
                }) : _0x464451.jsx("span", {
                  className: "text-[11px] text-text-muted/60",
                  children: _0x2034d1("server.createChannel.channelNameHint", "Boşluk yerine tire kullanılır")
                }), _0x464451.jsxs("span", {
                  className: "text-[11px] tabular-nums font-medium " + (_0x59ff67.length > 45 ? "text-amber-400" : "text-text-muted/70"),
                  children: [_0x59ff67.length, "/50"]
                })]
              })]
            })]
          }), _0x177203 && _0x464451.jsx(_0x18dc12, {
            isPublic: _0x276d3b,
            onPublicChange: _0x3d1e67,
            label: _0x2034d1("server.createChannel.visibility"),
            publicLabel: _0x2034d1("server.createChannel.publicChannel"),
            privateLabel: _0x2034d1("server.createChannel.privateChannel")
          })]
        }), _0x464451.jsx(_0xfcb9d, {
          className: "px-5 py-4 border-t border-border-subtle bg-surface-base/50",
          children: _0x464451.jsx(_0x462377, {
            loading: _0x58f22b,
            disabled: !_0x4b456b,
            disabledReason: _0x59ff67.trim() ? _0x3f5100 || undefined : _0x2034d1("server.createChannel.enterChannelName"),
            onClick: _0x39f5f5 => {
              _0x39f5f5.preventDefault();
              if (_0x4b456b) {
                _0x265b3a(_0x39f5f5);
              }
            },
            children: _0x2034d1("server.createChannel.create")
          })
        })]
      })
    });
  } else {
    return null;
  }
});
w.displayName = "CreateChannelDialog";
export { w as C };