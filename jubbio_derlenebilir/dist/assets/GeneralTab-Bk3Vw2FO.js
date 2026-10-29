import { aC as _0x2f6daf, b as _0x280660, r as _0x2a4a14, P as _0xf27c6e, j as _0x44155e, an as _0x386641, B as _0x4d9245, I as _0x1220fc, X as _0x105681 } from "./index-cQfEKR1W.js";
import { u as _0x321216 } from "./developerStore-J5Gy1Hed.js";
import { I as _0x5a3ae8 } from "./input-AMyERYwJ.js";
import { T as _0x2919e6 } from "./textarea-CIeIrkot.js";
import { L as _0x41feac } from "./label-ODyS97Ju.js";
import { A as _0x3f2125, a as _0x2d3ea8, b as _0x51f6c6 } from "./avatar-C-4BWxT3.js";
import { S as _0x33e718 } from "./switch-lfnbGePn.js";
import { c as _0x23e2c0 } from "./clipboard-BQ9qambq.js";
import { I as _0x1683cc } from "./ImageCropModal-Bz0NeASX.js";
import { U as _0x5c024c } from "./UnsavedChangesBar-CFwXhL7X.js";
import { e as _0x2c4266, r as _0x159dcd, f as _0x5f4e67 } from "./developer-DCtAQT29.js";
import { I as _0x3be18a } from "./image-CYAMq37h.js";
import { U as _0x2b990e } from "./index.module-CsHioFCV.js";
import { P as _0x37e7ba } from "./plus-B7c2Px8R.js";
import "./dialog-BMMpM7PR.js";
import "./index-yuEHo9bu.js";
import "./drawer-X7YyCqpZ.js";
const z = _0x3eff5f => {
  const _0x65e7ed = document.createElement("textarea");
  _0x65e7ed.innerHTML = _0x3eff5f;
  return _0x65e7ed.value;
};
const w = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"];
const C = "JPG, PNG, GIF, WebP";
function S() {
  const {
    application: _0x37d1e9
  } = _0x2f6daf();
  const {
    updateApplication: _0x587df4,
    currentApplication: _0x361597
  } = _0x321216();
  const {
    t: _0x6239a6
  } = _0x280660();
  const _0x26fe77 = _0x2a4a14.useRef(null);
  const _0x164cfc = _0x361597 || _0x37d1e9;
  const [_0x287558, _0x215dd5] = _0x2a4a14.useState(z(_0x37d1e9.name));
  const [_0x2328eb, _0x1280a7] = _0x2a4a14.useState(z(_0x37d1e9.description || ""));
  const [_0x2f6b92, _0xeaa0f6] = _0x2a4a14.useState(_0x37d1e9.tags || []);
  const [_0xb2acc8, _0x4a230f] = _0x2a4a14.useState("");
  const [_0x4b2bc5, _0x1792b6] = _0x2a4a14.useState(_0x37d1e9.terms_of_service_url || "");
  const [_0x536b90, _0x11d423] = _0x2a4a14.useState(_0x37d1e9.privacy_policy_url || "");
  const [_0xf5bcb2, _0x4d47e1] = _0x2a4a14.useState(_0x37d1e9.is_active);
  const [_0x2f9e2a, _0x3d0e78] = _0x2a4a14.useState(null);
  const [_0x436cc2, _0x25d1c6] = _0x2a4a14.useState(false);
  const [_0x8f713c, _0x5dc92b] = _0x2a4a14.useState(false);
  const [_0x1d4d44, _0x4e34d1] = _0x2a4a14.useState(false);
  const [_0x2ead51, _0x29a14b] = _0x2a4a14.useState(null);
  const [_0x4b3020, _0x236d81] = _0x2a4a14.useState(null);
  const [_0x2780be, _0x2842ee] = _0x2a4a14.useState(null);
  const [_0x57baad, _0x5c6c91] = _0x2a4a14.useState(false);
  const [_0x384c1c, _0x4c263e] = _0x2a4a14.useState(false);
  const [_0x88e930, _0x4430af] = _0x2a4a14.useState(null);
  const [_0x112ee9, _0x22f82f] = _0x2a4a14.useState(false);
  const [_0x944eed, _0x39f480] = _0x2a4a14.useState(null);
  const _0x35a4f2 = _0x2a4a14.useMemo(() => _0x287558 !== z(_0x164cfc.name) || _0x2328eb !== z(_0x164cfc.description || "") || JSON.stringify(_0x2f6b92) !== JSON.stringify(_0x164cfc.tags || []) || _0x4b2bc5 !== (_0x164cfc.terms_of_service_url || "") || _0x536b90 !== (_0x164cfc.privacy_policy_url || "") || _0xf5bcb2 !== _0x164cfc.is_active || _0x4b3020 !== null || _0x57baad, [_0x287558, _0x2328eb, _0x2f6b92, _0x4b2bc5, _0x536b90, _0xf5bcb2, _0x4b3020, _0x57baad, _0x164cfc]);
  const _0x8ec418 = _0x2a4a14.useCallback(async () => {
    _0x25d1c6(true);
    try {
      const _0x3360c4 = await _0x2c4266(_0x164cfc.id);
      _0x3d0e78(_0x3360c4);
    } catch {} finally {
      _0x25d1c6(false);
    }
  }, [_0x164cfc.id]);
  _0x2a4a14.useEffect(() => {
    _0x8ec418();
  }, [_0x8ec418]);
  const _0x530c2c = _0x2a4a14.useCallback(async () => {
    _0x5dc92b(true);
    _0x29a14b(null);
    try {
      await _0x159dcd(_0x164cfc.id);
      _0x8ec418();
    } catch (_0x14cfec) {
      const _0x1d07b1 = _0x14cfec?.response?.data?.message || _0x14cfec?.response?.data?.detail || _0x14cfec?.message;
      if (_0x1d07b1) {
        _0x29a14b(_0x1d07b1);
      }
    } finally {
      _0x5dc92b(false);
    }
  }, [_0x164cfc.id, _0x8ec418]);
  const _0x41bb06 = _0x2a4a14.useCallback(async () => {
    _0x4e34d1(true);
    try {
      await _0x5f4e67(_0x164cfc.id);
      _0x8ec418();
    } catch {} finally {
      _0x4e34d1(false);
    }
  }, [_0x164cfc.id, _0x8ec418]);
  const _0x256527 = _0x2a4a14.useCallback(async (_0x12ff11, _0x4f1e76) => {
    await _0x23e2c0(_0x12ff11);
    _0x39f480(_0x4f1e76);
    _0xf27c6e.success(_0x6239a6("developer.generalTab.copied"));
    setTimeout(() => _0x39f480(null), 2000);
  }, []);
  const _0x4c4617 = _0x2a4a14.useCallback(() => {
    const _0x440f88 = _0xb2acc8.trim().toLowerCase();
    if (_0x440f88) {
      if (_0x2f6b92.length >= 5) {
        _0xf27c6e.error(_0x6239a6("developer.generalTab.maxTags"));
      } else if (_0x2f6b92.includes(_0x440f88)) {
        _0xf27c6e.error(_0x6239a6("developer.generalTab.tagExists"));
      } else {
        _0xeaa0f6([..._0x2f6b92, _0x440f88]);
        _0x4a230f("");
      }
    }
  }, [_0xb2acc8, _0x2f6b92]);
  const _0x3f731d = _0x2a4a14.useCallback(_0x3b8072 => {
    _0xeaa0f6(_0x106a4c => _0x106a4c.filter(_0x3d109a => _0x3d109a !== _0x3b8072));
  }, []);
  const _0x197dd9 = _0x2a4a14.useCallback(_0x445810 => {
    const _0x1fdac0 = _0x445810.target.files?.[0];
    if (!_0x1fdac0) {
      return;
    }
    if (!w.includes(_0x1fdac0.type)) {
      _0xf27c6e.error(_0x6239a6("developer.generalTab.unsupportedFormat", {
        formats: C
      }));
      return;
    }
    if (_0x1fdac0.size > 10485760) {
      _0xf27c6e.error(_0x6239a6("developer.generalTab.fileTooLarge"));
      return;
    }
    const _0x2ba46f = new FileReader();
    _0x2ba46f.onload = () => {
      _0x4430af(_0x2ba46f.result);
      _0x4c263e(true);
    };
    _0x2ba46f.readAsDataURL(_0x1fdac0);
    _0x445810.target.value = "";
  }, []);
  const _0x1b68bc = _0x2a4a14.useCallback(_0x388892 => {
    _0x236d81(_0x388892);
    _0x2842ee(URL.createObjectURL(_0x388892));
    _0x5c6c91(false);
    _0x4c263e(false);
    _0x4430af(null);
  }, []);
  const _0xc0e793 = _0x2a4a14.useCallback(() => {
    _0x236d81(null);
    if (_0x2780be) {
      URL.revokeObjectURL(_0x2780be);
    }
    _0x2842ee(null);
    _0x5c6c91(true);
  }, [_0x2780be]);
  const _0x106343 = _0x2a4a14.useCallback(() => {
    _0x236d81(null);
    if (_0x2780be) {
      URL.revokeObjectURL(_0x2780be);
    }
    _0x2842ee(null);
    _0x5c6c91(false);
  }, [_0x2780be]);
  const _0x56a991 = _0x2a4a14.useCallback(() => {
    _0x215dd5(z(_0x164cfc.name));
    _0x1280a7(z(_0x164cfc.description || ""));
    _0xeaa0f6(_0x164cfc.tags || []);
    _0x1792b6(_0x164cfc.terms_of_service_url || "");
    _0x11d423(_0x164cfc.privacy_policy_url || "");
    _0x4d47e1(_0x164cfc.is_active);
    _0x106343();
  }, [_0x164cfc, _0x106343]);
  const _0x386c3f = _0x2a4a14.useCallback(async () => {
    if (_0x287558.trim()) {
      _0x22f82f(true);
      try {
        const _0x5cc6d8 = {};
        if (_0x287558.trim() !== _0x164cfc.name) {
          _0x5cc6d8.name = _0x287558.trim();
        }
        if (_0x2328eb.trim() !== (_0x164cfc.description || "")) {
          _0x5cc6d8.description = _0x2328eb.trim() || null;
        }
        if (JSON.stringify(_0x2f6b92) !== JSON.stringify(_0x164cfc.tags || [])) {
          _0x5cc6d8.tags = _0x2f6b92.length > 0 ? _0x2f6b92 : null;
        }
        if (_0x4b2bc5.trim() !== (_0x164cfc.terms_of_service_url || "")) {
          _0x5cc6d8.terms_of_service_url = _0x4b2bc5.trim() || null;
        }
        if (_0x536b90.trim() !== (_0x164cfc.privacy_policy_url || "")) {
          _0x5cc6d8.privacy_policy_url = _0x536b90.trim() || null;
        }
        if (_0xf5bcb2 !== _0x164cfc.is_active) {
          _0x5cc6d8.is_active = _0xf5bcb2;
        }
        if (_0x57baad && _0x164cfc.avatar_url) {
          _0x5cc6d8.delete_icon = true;
        }
        if (Object.keys(_0x5cc6d8).length > 0 || _0x4b3020) {
          await _0x587df4(_0x164cfc.id, _0x5cc6d8, _0x4b3020 || undefined);
        }
        _0x236d81(null);
        if (_0x2780be) {
          URL.revokeObjectURL(_0x2780be);
        }
        _0x2842ee(null);
        _0x5c6c91(false);
      } catch {} finally {
        _0x22f82f(false);
      }
    } else {
      _0xf27c6e.error(_0x6239a6("developer.generalTab.nameRequired"));
    }
  }, [_0x287558, _0x2328eb, _0x2f6b92, _0x4b2bc5, _0x536b90, _0xf5bcb2, _0x4b3020, _0x2780be, _0x57baad, _0x164cfc, _0x587df4]);
  const _0x3d0f9f = _0x2a4a14.useMemo(() => _0x57baad ? null : _0x2780be || _0x164cfc.avatar_url, [_0x57baad, _0x2780be, _0x164cfc.avatar_url]);
  return _0x44155e.jsxs("div", {
    className: "space-y-8 pb-24",
    children: [_0x44155e.jsxs("div", {
      children: [_0x44155e.jsx("h1", {
        className: "text-2xl font-bold text-text-primary",
        children: _0x6239a6("developer.generalTab.title")
      }), _0x44155e.jsx("p", {
        className: "text-sm text-text-tertiary mt-1",
        children: _0x6239a6("developer.generalTab.subtitle")
      })]
    }), _0x44155e.jsxs("section", {
      children: [_0x44155e.jsxs("div", {
        className: "mb-4",
        children: [_0x44155e.jsx("div", {
          className: "text-sm font-semibold text-text-secondary",
          children: _0x6239a6("developer.generalTab.identity")
        }), _0x44155e.jsx("p", {
          className: "text-xs text-text-muted mt-0.5",
          children: _0x6239a6("developer.generalTab.identityDesc")
        })]
      }), _0x44155e.jsxs("div", {
        className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden divide-y divide-border-default",
        children: [_0x44155e.jsx("div", {
          className: "px-4 py-4",
          children: _0x44155e.jsxs("div", {
            className: "flex items-center justify-between gap-4",
            children: [_0x44155e.jsxs("div", {
              className: "flex items-center gap-4",
              children: [_0x44155e.jsxs("div", {
                className: "relative",
                children: [_0x44155e.jsx(_0x3f2125, {
                  className: "size-16 rounded-xl shrink-0",
                  children: _0x3d0f9f ? _0x44155e.jsx(_0x2d3ea8, {
                    src: _0x3d0f9f,
                    alt: _0x164cfc.name
                  }) : _0x44155e.jsx(_0x51f6c6, {
                    className: "rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 text-text-secondary text-xl font-semibold",
                    children: _0x164cfc.name.charAt(0).toUpperCase()
                  })
                }), (_0x4b3020 || _0x57baad) && _0x44155e.jsx("div", {
                  className: "absolute -top-1 -right-1 size-5 rounded-full bg-accent-primary flex items-center justify-center",
                  children: _0x44155e.jsx(_0x386641, {
                    className: "size-3 text-black"
                  })
                })]
              }), _0x44155e.jsxs("div", {
                className: "min-w-0",
                children: [_0x44155e.jsx("div", {
                  className: "text-sm font-medium text-text-secondary",
                  children: _0x6239a6("developer.generalTab.appIcon")
                }), _0x44155e.jsxs("p", {
                  className: "text-xs text-text-tertiary mt-0.5",
                  children: [C, " • Max 10MB"]
                }), _0x57baad && _0x164cfc.avatar_url && _0x44155e.jsxs("p", {
                  className: "text-xs text-amber-400 mt-1 flex items-center gap-1",
                  children: [_0x44155e.jsx(_0x3be18a, {
                    className: "size-3"
                  }), _0x6239a6("developer.generalTab.iconRemoved")]
                })]
              })]
            }), _0x44155e.jsxs("div", {
              className: "flex items-center gap-2 shrink-0",
              children: [_0x44155e.jsx("input", {
                ref: _0x26fe77,
                type: "file",
                accept: w.join(","),
                onChange: _0x197dd9,
                className: "hidden"
              }), _0x44155e.jsxs(_0x4d9245, {
                variant: "outline",
                size: "sm",
                className: "h-8 text-xs",
                onClick: () => _0x26fe77.current?.click(),
                children: [_0x44155e.jsx(_0x2b990e, {
                  className: "size-3 mr-1.5"
                }), _0x6239a6(_0x3d0f9f ? "developer.generalTab.change" : "developer.generalTab.upload")]
              }), _0x3d0f9f && !_0x57baad && _0x44155e.jsxs(_0x4d9245, {
                variant: "outline",
                size: "sm",
                className: "h-8 text-xs text-red-400 hover:text-red-300 hover:border-red-500/50",
                onClick: _0xc0e793,
                children: [_0x44155e.jsx(_0x1220fc, {
                  icon: "solar:trash-bin-trash-bold-duotone",
                  className: "size-3 mr-1.5"
                }), _0x6239a6("developer.generalTab.remove")]
              }), (_0x4b3020 || _0x57baad) && _0x44155e.jsx(_0x4d9245, {
                variant: "ghost",
                size: "sm",
                className: "h-8 text-xs text-text-tertiary",
                onClick: _0x106343,
                children: _0x6239a6("developer.generalTab.cancel")
              })]
            })]
          })
        }), _0x44155e.jsx("div", {
          className: "px-4 py-3",
          children: _0x44155e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [_0x44155e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [_0x44155e.jsx("span", {
                className: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-overlay/70",
                children: _0x44155e.jsx(_0x1220fc, {
                  icon: "solar:hashtag-bold-duotone",
                  className: "size-4 text-text-tertiary"
                })
              }), _0x44155e.jsxs("div", {
                children: [_0x44155e.jsx("div", {
                  className: "text-sm font-medium text-text-secondary",
                  children: "Application ID"
                }), _0x44155e.jsx("div", {
                  className: "text-xs text-text-tertiary font-mono mt-0.5",
                  children: _0x164cfc.id
                })]
              })]
            }), _0x44155e.jsx(_0x4d9245, {
              variant: "ghost",
              size: "icon",
              className: "size-8",
              onClick: () => _0x256527(_0x164cfc.id, "id"),
              children: _0x944eed === "id" ? _0x44155e.jsx(_0x386641, {
                className: "size-4 text-green-400"
              }) : _0x44155e.jsx(_0x1220fc, {
                icon: "solar:copy-bold-duotone",
                className: "size-4 text-text-tertiary"
              })
            })]
          })
        }), _0x44155e.jsx("div", {
          className: "px-4 py-3",
          children: _0x44155e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [_0x44155e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [_0x44155e.jsx("span", {
                className: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-overlay/70",
                children: _0x44155e.jsx(_0x1220fc, {
                  icon: "solar:shield-bold-duotone",
                  className: "size-4 text-text-tertiary"
                })
              }), _0x44155e.jsxs("div", {
                className: "min-w-0 flex-1",
                children: [_0x44155e.jsx("div", {
                  className: "text-sm font-medium text-text-secondary",
                  children: "Public Key"
                }), _0x44155e.jsx("div", {
                  className: "text-xs text-text-tertiary font-mono mt-0.5 truncate max-w-[200px] sm:max-w-[300px]",
                  children: _0x164cfc.verify_key
                })]
              })]
            }), _0x44155e.jsx(_0x4d9245, {
              variant: "ghost",
              size: "icon",
              className: "size-8",
              onClick: () => _0x256527(_0x164cfc.verify_key, "key"),
              children: _0x944eed === "key" ? _0x44155e.jsx(_0x386641, {
                className: "size-4 text-green-400"
              }) : _0x44155e.jsx(_0x1220fc, {
                icon: "solar:copy-bold-duotone",
                className: "size-4 text-text-tertiary"
              })
            })]
          })
        })]
      })]
    }), _0x44155e.jsxs("section", {
      children: [_0x44155e.jsxs("div", {
        className: "mb-4",
        children: [_0x44155e.jsx("div", {
          className: "text-sm font-semibold text-text-secondary",
          children: _0x6239a6("developer.generalTab.status")
        }), _0x44155e.jsx("p", {
          className: "text-xs text-text-muted mt-0.5",
          children: _0x6239a6("developer.generalTab.statusDesc")
        })]
      }), _0x44155e.jsxs("div", {
        className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden divide-y divide-border-default",
        children: [_0x44155e.jsx("div", {
          className: "relative w-full px-4 py-3 hover:bg-surface-overlay/30 transition-colors text-left cursor-pointer overflow-hidden " + (_0xf5bcb2 ? "bg-gradient-to-r from-green-500/10 to-transparent" : ""),
          onClick: () => _0x4d47e1(!_0xf5bcb2),
          children: _0x44155e.jsxs("div", {
            className: "flex items-center justify-between relative z-10",
            children: [_0x44155e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [_0x44155e.jsx("span", {
                className: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-overlay/70",
                children: _0x44155e.jsx(_0x1220fc, {
                  icon: "solar:power-bold-duotone",
                  className: "size-4 text-text-tertiary"
                })
              }), _0x44155e.jsxs("div", {
                children: [_0x44155e.jsx("div", {
                  className: "text-sm font-medium text-text-secondary",
                  children: _0x6239a6("developer.generalTab.appStatus")
                }), _0x44155e.jsx("p", {
                  className: "text-xs text-text-tertiary mt-0.5",
                  children: _0x6239a6("developer.generalTab.appStatusDesc")
                })]
              })]
            }), _0x44155e.jsxs("div", {
              className: "flex items-center gap-3",
              children: [_0x44155e.jsx("span", {
                className: "text-xs font-medium " + (_0xf5bcb2 ? "text-green-400" : "text-text-muted"),
                children: _0x6239a6(_0xf5bcb2 ? "developer.generalTab.active" : "developer.generalTab.inactive")
              }), _0x44155e.jsx(_0x33e718, {
                checked: _0xf5bcb2,
                onCheckedChange: _0x4d47e1,
                className: "data-[state=checked]:bg-green-500",
                onClick: _0x445df6 => _0x445df6.stopPropagation()
              })]
            })]
          })
        }), _0x44155e.jsx("div", {
          className: "relative w-full px-4 py-3 overflow-hidden",
          children: _0x44155e.jsxs("div", {
            className: "flex items-center gap-3",
            children: [_0x44155e.jsx("span", {
              className: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-overlay/70",
              children: _0x44155e.jsx(_0x1220fc, {
                icon: "solar:shop-bold-duotone",
                className: "size-4 text-text-tertiary"
              })
            }), _0x44155e.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [_0x44155e.jsx("div", {
                className: "text-sm font-medium text-text-secondary",
                children: _0x6239a6("developer.generalTab.storeVisibility")
              }), _0x44155e.jsx("p", {
                className: "text-xs text-text-tertiary mt-0.5",
                children: _0x6239a6("developer.generalTab.storeVisibilityDescNew", {
                  defaultValue: "Mağazada görünmek için onay başvurusu yapmanız gerekir."
                })
              })]
            }), _0x44155e.jsxs("div", {
              className: "shrink-0",
              children: [_0x164cfc.is_public && (_0x164cfc.listing_status === "approved" || !_0x164cfc.listing_status) && _0x44155e.jsxs("span", {
                className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-medium text-green-400",
                children: [_0x44155e.jsx("span", {
                  className: "size-1.5 rounded-full bg-green-400 animate-pulse"
                }), _0x6239a6("developer.generalTab.listingActive", {
                  defaultValue: "Aktif"
                })]
              }), _0x164cfc.listing_status === "pending" && _0x44155e.jsxs("span", {
                className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-xs font-medium text-yellow-400",
                children: [_0x44155e.jsx(_0x1220fc, {
                  icon: "solar:clock-circle-bold-duotone",
                  className: "size-3"
                }), _0x6239a6("developer.generalTab.listingPending", {
                  defaultValue: "İnceleniyor"
                })]
              }), _0x164cfc.listing_status === "rejected" && _0x44155e.jsxs("span", {
                className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-medium text-red-400",
                children: [_0x44155e.jsx(_0x1220fc, {
                  icon: "solar:close-circle-bold-duotone",
                  className: "size-3"
                }), _0x6239a6("developer.generalTab.listingRejected", {
                  defaultValue: "Reddedildi"
                })]
              }), (_0x164cfc.listing_status === "none" || !_0x164cfc.listing_status) && !_0x164cfc.is_public && _0x44155e.jsx("span", {
                className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-overlay/50 border border-border-default text-xs font-medium text-text-muted",
                children: _0x6239a6("developer.generalTab.listingNotListed", {
                  defaultValue: "Listelenmemiş"
                })
              })]
            })]
          })
        })]
      })]
    }), _0x44155e.jsxs("section", {
      children: [_0x44155e.jsxs("div", {
        className: "mb-4",
        children: [_0x44155e.jsx("div", {
          className: "text-sm font-semibold text-text-secondary",
          children: _0x6239a6("developer.generalTab.storeListing", {
            defaultValue: "Mağaza Başvurusu"
          })
        }), _0x44155e.jsx("p", {
          className: "text-xs text-text-muted mt-0.5",
          children: _0x6239a6("developer.generalTab.storeListingDesc", {
            defaultValue: "Uygulamanızın mağazada görünmesi için aşağıdaki gereksinimleri karşılamanız ve onay başvurusu yapmanız gerekir."
          })
        })]
      }), _0x44155e.jsxs("div", {
        className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden",
        children: [_0x164cfc.listing_status === "rejected" && (_0x2f9e2a?.listing_rejection_reason || _0x164cfc.listing_rejection_reason) && _0x44155e.jsx("div", {
          className: "px-4 py-3 bg-red-500/5 border-b border-red-500/20",
          children: _0x44155e.jsxs("div", {
            className: "flex items-start gap-2",
            children: [_0x44155e.jsx(_0x1220fc, {
              icon: "solar:danger-triangle-bold-duotone",
              className: "size-4 text-red-400 shrink-0 mt-0.5"
            }), _0x44155e.jsxs("div", {
              children: [_0x44155e.jsx("div", {
                className: "text-xs font-medium text-red-400",
                children: _0x6239a6("developer.generalTab.rejectionReason", {
                  defaultValue: "Red Sebebi"
                })
              }), _0x44155e.jsx("p", {
                className: "text-xs text-red-300/80 mt-0.5",
                children: _0x2f9e2a?.listing_rejection_reason || _0x164cfc.listing_rejection_reason
              })]
            })]
          })
        }), _0x44155e.jsx("div", {
          className: "px-4 py-3 space-y-2.5",
          children: _0x436cc2 ? _0x44155e.jsx("div", {
            className: "flex items-center justify-center py-4",
            children: _0x44155e.jsx("div", {
              className: "size-5 animate-spin rounded-full border-2 border-border-default border-t-accent-primary"
            })
          }) : _0x2f9e2a ? _0x44155e.jsx(_0x44155e.Fragment, {
            children: Object.entries(_0x2f9e2a.checks).map(([_0x2514cc, _0x46deff]) => _0x44155e.jsxs("div", {
              className: "flex items-center gap-2.5",
              children: [_0x44155e.jsx("span", {
                className: "flex size-5 shrink-0 items-center justify-center rounded-full " + (_0x46deff.passed ? "bg-green-500/20" : "bg-surface-overlay/50"),
                children: _0x46deff.passed ? _0x44155e.jsx(_0x386641, {
                  className: "size-3 text-green-400"
                }) : _0x44155e.jsx(_0x105681, {
                  className: "size-3 text-text-muted"
                })
              }), _0x44155e.jsx("span", {
                className: "text-sm " + (_0x46deff.passed ? "text-text-secondary" : "text-text-muted"),
                children: _0x6239a6("developer.generalTab.listingCheck." + _0x2514cc, {
                  defaultValue: _0x46deff.detail
                })
              }), _0x46deff.current !== undefined && !_0x46deff.passed && _0x44155e.jsxs("span", {
                className: "text-xs text-text-muted ml-auto",
                children: ["(", _0x46deff.current, ")"]
              })]
            }, _0x2514cc))
          }) : null
        }), _0x44155e.jsxs("div", {
          className: "px-4 py-3 border-t border-border-default bg-surface-overlay/20",
          children: [(_0x164cfc.listing_status === "none" || _0x164cfc.listing_status === "rejected" || !_0x164cfc.listing_status) && !_0x164cfc.is_public && _0x44155e.jsxs(_0x44155e.Fragment, {
            children: [_0x2ead51 && _0x44155e.jsx("p", {
              className: "text-xs text-red-400 mb-2",
              children: _0x2ead51
            }), _0x44155e.jsxs(_0x4d9245, {
              onClick: _0x530c2c,
              disabled: _0x8f713c || !_0x2f9e2a?.eligible,
              className: "w-full bg-accent-primary/20 border border-accent-primary/30 text-accent-primary-text hover:bg-accent-primary/30 disabled:opacity-50",
              variant: "outline",
              children: [_0x8f713c ? _0x44155e.jsx("div", {
                className: "size-4 animate-spin rounded-full border-2 border-accent-primary border-t-transparent mr-2"
              }) : _0x44155e.jsx(_0x1220fc, {
                icon: "solar:document-add-bold-duotone",
                className: "size-4 mr-2"
              }), _0x6239a6("developer.generalTab.submitForReview", {
                defaultValue: "Onaya Gönder"
              })]
            })]
          }), _0x164cfc.listing_status === "pending" && _0x44155e.jsxs("div", {
            className: "space-y-2",
            children: [_0x44155e.jsxs("div", {
              className: "flex items-center gap-2 text-xs text-yellow-400/80",
              children: [_0x44155e.jsx(_0x1220fc, {
                icon: "solar:clock-circle-bold-duotone",
                className: "size-3.5"
              }), _0x44155e.jsx("span", {
                children: _0x6239a6("developer.generalTab.listingPendingDesc", {
                  defaultValue: "Başvurunuz inceleniyor. Onaylandığında uygulamanız mağazada görünecektir."
                })
              })]
            }), _0x44155e.jsxs(_0x4d9245, {
              onClick: _0x41bb06,
              disabled: _0x1d4d44,
              variant: "ghost",
              className: "w-full text-text-muted hover:text-text-secondary",
              size: "sm",
              children: [_0x1d4d44 ? _0x44155e.jsx("div", {
                className: "size-3.5 animate-spin rounded-full border-2 border-text-muted border-t-transparent mr-2"
              }) : _0x44155e.jsx(_0x105681, {
                className: "size-3.5 mr-2"
              }), _0x6239a6("developer.generalTab.cancelListing", {
                defaultValue: "Başvuruyu İptal Et"
              })]
            })]
          }), _0x164cfc.is_public && (_0x164cfc.listing_status === "approved" || !_0x164cfc.listing_status) && _0x44155e.jsxs("div", {
            className: "flex items-center gap-2 text-xs text-green-400/80",
            children: [_0x44155e.jsx(_0x1220fc, {
              icon: "solar:verified-check-bold-duotone",
              className: "size-3.5"
            }), _0x44155e.jsx("span", {
              children: _0x6239a6("developer.generalTab.listingApprovedDesc", {
                defaultValue: "Uygulamanız mağazada görünüyor."
              })
            })]
          })]
        })]
      })]
    }), _0x44155e.jsxs("section", {
      children: [_0x44155e.jsxs("div", {
        className: "mb-4",
        children: [_0x44155e.jsx("div", {
          className: "text-sm font-semibold text-text-secondary",
          children: _0x6239a6("developer.generalTab.editableInfo")
        }), _0x44155e.jsx("p", {
          className: "text-xs text-text-muted mt-0.5",
          children: _0x6239a6("developer.generalTab.editableInfoDesc")
        })]
      }), _0x44155e.jsxs("div", {
        className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden divide-y divide-border-default",
        children: [_0x44155e.jsxs("div", {
          className: "px-4 py-4",
          children: [_0x44155e.jsx(_0x41feac, {
            htmlFor: "app-name",
            className: "text-xs text-text-tertiary mb-2 block",
            children: _0x6239a6("developer.generalTab.appName")
          }), _0x44155e.jsx(_0x5a3ae8, {
            id: "app-name",
            value: _0x287558,
            onChange: _0x28d92c => {
              const _0x881a84 = _0x28d92c.target.value;
              if (new TextEncoder().encode(_0x881a84).length <= 128) {
                _0x215dd5(_0x881a84);
              }
            },
            maxLength: 32,
            className: "bg-surface-overlay/50 border-border-default",
            placeholder: _0x6239a6("developer.generalTab.appNamePlaceholder")
          }), _0x44155e.jsx("div", {
            className: "mt-1 text-xs text-text-muted",
            children: _0x6239a6("developer.generalTab.charCount", {
              count: _0x287558.length,
              max: 32
            })
          })]
        }), _0x44155e.jsxs("div", {
          className: "px-4 py-4",
          children: [_0x44155e.jsx(_0x41feac, {
            htmlFor: "app-desc",
            className: "text-xs text-text-tertiary mb-2 block",
            children: _0x6239a6("developer.generalTab.description")
          }), _0x44155e.jsx(_0x2919e6, {
            id: "app-desc",
            value: _0x2328eb,
            onChange: _0x54d99a => {
              const _0x2fc801 = _0x54d99a.target.value;
              if (new TextEncoder().encode(_0x2fc801).length <= 1600) {
                _0x1280a7(_0x2fc801);
              }
            },
            maxLength: 400,
            rows: 3,
            className: "bg-surface-overlay/50 border-border-default resize-none",
            placeholder: _0x6239a6("developer.generalTab.descriptionPlaceholder")
          }), _0x44155e.jsx("div", {
            className: "mt-1 text-xs text-text-muted",
            children: _0x6239a6("developer.generalTab.charCount", {
              count: _0x2328eb.length,
              max: 400
            })
          })]
        }), _0x44155e.jsxs("div", {
          className: "px-4 py-4",
          children: [_0x44155e.jsx(_0x41feac, {
            className: "text-xs text-text-tertiary mb-2 block",
            children: _0x6239a6("developer.generalTab.tags")
          }), _0x44155e.jsxs("div", {
            className: "flex flex-wrap gap-2 mb-3",
            children: [_0x2f6b92.map(_0x73cc05 => _0x44155e.jsxs("span", {
              className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-accent-subtle text-accent-primary-text text-xs font-medium",
              children: [_0x73cc05, _0x44155e.jsx("button", {
                type: "button",
                onClick: () => _0x3f731d(_0x73cc05),
                className: "hover:text-text-primary transition-colors",
                children: _0x44155e.jsx(_0x105681, {
                  className: "size-3"
                })
              })]
            }, _0x73cc05)), _0x2f6b92.length === 0 && _0x44155e.jsx("span", {
              className: "text-xs text-text-muted",
              children: _0x6239a6("developer.generalTab.noTags")
            })]
          }), _0x2f6b92.length < 5 && _0x44155e.jsxs("div", {
            className: "flex gap-2",
            children: [_0x44155e.jsx(_0x5a3ae8, {
              value: _0xb2acc8,
              onChange: _0x3b17dd => {
                const _0x211890 = _0x3b17dd.target.value;
                if (new TextEncoder().encode(_0x211890).length <= 80) {
                  _0x4a230f(_0x211890);
                }
              },
              onKeyDown: _0x1e972e => _0x1e972e.key === "Enter" && (_0x1e972e.preventDefault(), _0x4c4617()),
              maxLength: 20,
              className: "bg-surface-overlay/50 border-border-default flex-1",
              placeholder: _0x6239a6("developer.generalTab.newTagPlaceholder")
            }), _0x44155e.jsx(_0x4d9245, {
              type: "button",
              variant: "outline",
              size: "icon",
              onClick: _0x4c4617,
              disabled: !_0xb2acc8.trim(),
              className: "shrink-0",
              children: _0x44155e.jsx(_0x37e7ba, {
                className: "size-4"
              })
            })]
          })]
        })]
      })]
    }), _0x44155e.jsxs("section", {
      children: [_0x44155e.jsxs("div", {
        className: "mb-4",
        children: [_0x44155e.jsx("div", {
          className: "text-sm font-semibold text-text-secondary",
          children: _0x6239a6("developer.generalTab.legalLinks")
        }), _0x44155e.jsx("p", {
          className: "text-xs text-text-muted mt-0.5",
          children: _0x6239a6("developer.generalTab.legalLinksDesc")
        })]
      }), _0x44155e.jsxs("div", {
        className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden divide-y divide-border-default",
        children: [_0x44155e.jsxs("div", {
          className: "px-4 py-4",
          children: [_0x44155e.jsxs("div", {
            className: "flex items-center gap-2 mb-2",
            children: [_0x44155e.jsx(_0x1220fc, {
              icon: "solar:file-text-bold-duotone",
              className: "size-4 text-text-tertiary"
            }), _0x44155e.jsx(_0x41feac, {
              htmlFor: "terms-url",
              className: "text-xs text-text-tertiary",
              children: _0x6239a6("developer.generalTab.termsUrl")
            })]
          }), _0x44155e.jsx(_0x5a3ae8, {
            id: "terms-url",
            type: "url",
            value: _0x4b2bc5,
            onChange: _0x5e7a3d => _0x1792b6(_0x5e7a3d.target.value),
            className: "bg-surface-overlay/50 border-border-default",
            placeholder: "https://example.com/terms"
          })]
        }), _0x44155e.jsxs("div", {
          className: "px-4 py-4",
          children: [_0x44155e.jsxs("div", {
            className: "flex items-center gap-2 mb-2",
            children: [_0x44155e.jsx(_0x1220fc, {
              icon: "solar:global-bold-duotone",
              className: "size-4 text-text-tertiary"
            }), _0x44155e.jsx(_0x41feac, {
              htmlFor: "privacy-url",
              className: "text-xs text-text-tertiary",
              children: _0x6239a6("developer.generalTab.privacyUrl")
            })]
          }), _0x44155e.jsx(_0x5a3ae8, {
            id: "privacy-url",
            type: "url",
            value: _0x536b90,
            onChange: _0x426069 => _0x11d423(_0x426069.target.value),
            className: "bg-surface-overlay/50 border-border-default",
            placeholder: "https://example.com/privacy"
          })]
        })]
      })]
    }), _0x44155e.jsx(_0x5c024c, {
      hasChanges: _0x35a4f2,
      isSaving: _0x112ee9,
      onSave: _0x386c3f,
      onReset: _0x56a991
    }), _0x44155e.jsx(_0x1683cc, {
      isOpen: _0x384c1c,
      onClose: () => {
        _0x4c263e(false);
        _0x4430af(null);
      },
      imageSrc: _0x88e930,
      aspect: 1,
      onCropComplete: _0x1b68bc,
      imageName: "app-icon.png"
    })]
  });
}
export { S as default };