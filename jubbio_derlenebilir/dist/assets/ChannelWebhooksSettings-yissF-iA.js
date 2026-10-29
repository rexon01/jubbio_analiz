import { c as _0xd5b758, O as _0xa6886f, r as _0x489a3d, b as _0x2b3fbc, P as _0x46f993, j as _0x38606f, B as _0x30773b, aN as _0x490bec, an as _0x572abe, I as _0x48bde1 } from "./index-cQfEKR1W.js";
import { c as _0x12c42c } from "./clipboard-BQ9qambq.js";
import { C as _0x32c19f } from "./ConfirmDialog-B4gIndKy.js";
import { S as _0x4d1ef6 } from "./SettingsTabSkeleton-BxH08jyt.js";
import { u as _0x40c4d5 } from "./useChannels-DWXrCtmH.js";
import "./alert-dialog-BZuoGg7O.js";
import "./index-yuEHo9bu.js";
import "./index-Oyyh46KT.js";
import "./loader-circle-CTtxa1g9.js";
import "./soundboardFx-C2LP-Hjs.js";
import "./index-BUijt7wr.js";
const u = ({
  className: _0x39e721
}) => _0x38606f.jsx(_0x48bde1, {
  icon: "solar:programming-bold-duotone",
  className: _0x39e721
});
const b = ({
  className: _0x294368
}) => _0x38606f.jsx(_0x48bde1, {
  icon: "solar:add-circle-bold-duotone",
  className: _0x294368
});
const g = ({
  className: _0x588956
}) => _0x38606f.jsx(_0x48bde1, {
  icon: "solar:trash-bin-trash-bold-duotone",
  className: _0x588956
});
const p = ({
  className: _0x1e43d8
}) => _0x38606f.jsx(_0x48bde1, {
  icon: "solar:link-bold-duotone",
  className: _0x1e43d8
});
const v = ({
  className: _0x2a993f
}) => _0x38606f.jsx(_0x48bde1, {
  icon: "solar:camera-bold-duotone",
  className: _0x2a993f
});
const j = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const f = _0x489a3d.forwardRef(({
  guildId: _0x3800ac,
  channelId: _0x4774de
}, _0x14e6ed) => {
  const {
    t: _0x423e2e
  } = _0x2b3fbc();
  const [_0x31c87c, _0x2a62fb] = _0x489a3d.useState([]);
  const [_0xe802bb, _0x576de0] = _0x489a3d.useState(true);
  const [_0x5648ed, _0x4091d5] = _0x489a3d.useState(false);
  const [_0xaccc51, _0x24ee7b] = _0x489a3d.useState(null);
  const [_0x5053e0, _0x1dfcb5] = _0x489a3d.useState("");
  const [_0x54d682, _0x16d9d7] = _0x489a3d.useState(null);
  const [_0x5679e7, _0x56aa10] = _0x489a3d.useState(null);
  const [_0x227e54, _0x23913c] = _0x489a3d.useState(false);
  const [_0xa124a1, _0x136513] = _0x489a3d.useState("");
  const [_0x4c3d19, _0xe22748] = _0x489a3d.useState(false);
  const [_0xb06428, _0x4d206b] = _0x489a3d.useState(null);
  const [_0xae208a, _0x3cfa97] = _0x489a3d.useState(false);
  const [_0x69fa32, _0xb04f23] = _0x489a3d.useState(null);
  const [_0x58fdd4, _0x3b948a] = _0x489a3d.useState(null);
  const _0x1ba75e = _0x489a3d.useRef(null);
  const {
    channels: _0x5e89fa
  } = _0x40c4d5(_0x3800ac);
  const _0x51fcb3 = _0x5e89fa.filter(_0x16ccd4 => !_0x16ccd4.type || _0x16ccd4.type === "text" || _0x16ccd4.type === "announcement" || _0x16ccd4.type === "forum");
  _0x489a3d.useImperativeHandle(_0x14e6ed, () => ({
    reset: () => {
      _0x5a81ea();
    }
  }));
  _0x489a3d.useEffect(() => () => {
    if (_0x5679e7 && _0x5679e7.startsWith("blob:")) {
      URL.revokeObjectURL(_0x5679e7);
    }
  }, [_0x5679e7]);
  const _0x5a81ea = _0x489a3d.useCallback(async () => {
    try {
      _0x576de0(true);
      const _0x19dacc = await async function (_0x32b1af, _0x3c7a28) {
        try {
          return (await _0xd5b758.get("/api/v1/guilds/" + _0x32b1af + "/channels/" + _0x3c7a28 + "/webhooks")).data;
        } catch (_0x3ac138) {
          throw _0xa6886f(_0x3ac138);
        }
      }(_0x3800ac, _0x4774de);
      _0x2a62fb(_0x19dacc);
    } catch {} finally {
      _0x576de0(false);
    }
  }, [_0x3800ac, _0x4774de]);
  _0x489a3d.useEffect(() => {
    _0x5a81ea();
  }, [_0x5a81ea]);
  const _0x14fd86 = _0x489a3d.useCallback(async () => {
    try {
      _0x4091d5(true);
      const _0x1b9cf9 = await async function (_0x4500a4, _0x56bdb3) {
        try {
          return (await _0xd5b758.post("/api/v1/guilds/" + _0x4500a4 + "/channels/" + _0x56bdb3 + "/webhooks")).data;
        } catch (_0xc4f561) {
          throw _0xa6886f(_0xc4f561);
        }
      }(_0x3800ac, _0x4774de);
      _0x2a62fb(_0x30b34a => [..._0x30b34a, _0x1b9cf9]);
    } catch {} finally {
      _0x4091d5(false);
    }
  }, [_0x3800ac, _0x4774de]);
  const _0x9be3d7 = _0x489a3d.useCallback(_0x199814 => {
    _0x24ee7b(_0x199814.id);
    _0x1dfcb5(_0x199814.name);
    _0x136513(_0x199814.channel_id || _0x4774de);
    _0x16d9d7(null);
    _0x56aa10(_0x199814.avatar_url);
    _0x23913c(false);
  }, [_0x4774de]);
  const _0x35f3e0 = _0x489a3d.useCallback(() => {
    if (_0x5679e7 && _0x5679e7.startsWith("blob:")) {
      URL.revokeObjectURL(_0x5679e7);
    }
    _0x24ee7b(null);
    _0x1dfcb5("");
    _0x136513("");
    _0x16d9d7(null);
    _0x56aa10(null);
    _0x23913c(false);
  }, [_0x5679e7]);
  const _0x2f15d8 = _0x489a3d.useCallback(_0x192377 => j.includes(_0x192377.type) ? !(_0x192377.size > 5242880) || (_0x46f993.error(_0x423e2e("serverSettings.channelSettings.webhooks.avatarTooLarge")), false) : (_0x46f993.error(_0x423e2e("serverSettings.channelSettings.webhooks.avatarInvalidType")), false), [_0x423e2e]);
  const _0x26f133 = _0x489a3d.useCallback(_0x302997 => {
    const _0x58d5ad = _0x302997.target.files?.[0];
    if (_0x58d5ad) {
      _0x302997.target.value = "";
      if (_0x2f15d8(_0x58d5ad)) {
        if (_0x5679e7 && _0x5679e7.startsWith("blob:")) {
          URL.revokeObjectURL(_0x5679e7);
        }
        _0x16d9d7(_0x58d5ad);
        _0x56aa10(URL.createObjectURL(_0x58d5ad));
        _0x23913c(false);
      }
    }
  }, [_0x5679e7, _0x2f15d8]);
  const _0x11048e = _0x489a3d.useCallback(() => {
    if (_0x5679e7 && _0x5679e7.startsWith("blob:")) {
      URL.revokeObjectURL(_0x5679e7);
    }
    _0x16d9d7(null);
    _0x56aa10(null);
    _0x23913c(true);
  }, [_0x5679e7]);
  const _0x1a0de4 = _0x489a3d.useCallback(async () => {
    if (!_0xaccc51) {
      return;
    }
    const _0x3872dd = _0x5053e0.trim();
    if (!_0x3872dd) {
      return;
    }
    const _0x3ff289 = _0x31c87c.find(_0x285cae => _0x285cae.id === _0xaccc51);
    if (!_0x3ff289) {
      return;
    }
    const _0x326cab = {};
    if (_0x3872dd !== _0x3ff289.name) {
      _0x326cab.name = _0x3872dd;
    }
    const _0x3578ce = _0x3ff289.channel_id || _0x4774de;
    if (_0xa124a1 && _0xa124a1 !== _0x3578ce) {
      _0x326cab.channel_id = _0xa124a1;
    }
    if (_0x54d682) {
      _0x326cab.avatar = _0x54d682;
    } else if (_0x227e54 && _0x3ff289.avatar_url) {
      _0x326cab.avatar_url = "";
    }
    if (Object.keys(_0x326cab).length !== 0) {
      try {
        _0xe22748(true);
        const _0x21693f = await async function (_0x53e1f0, _0x54becd) {
          try {
            const _0x58337e = new FormData();
            if (_0x54becd.name !== undefined) {
              _0x58337e.append("name", _0x54becd.name);
            }
            if (_0x54becd.channel_id !== undefined) {
              _0x58337e.append("channel_id", _0x54becd.channel_id);
            }
            if (_0x54becd.avatar) {
              _0x58337e.append("avatar", _0x54becd.avatar);
            } else if (_0x54becd.avatar_url !== undefined) {
              _0x58337e.append("avatar_url", _0x54becd.avatar_url);
            }
            return (await _0xd5b758.patch("/api/v1/guild-webhooks/" + _0x53e1f0, _0x58337e, {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            })).data;
          } catch (_0x235a2d) {
            throw _0xa6886f(_0x235a2d);
          }
        }(_0xaccc51, _0x326cab);
        if (_0x326cab.channel_id && _0x326cab.channel_id !== _0x4774de) {
          _0x2a62fb(_0x5bc5fa => _0x5bc5fa.filter(_0xcb5d2 => _0xcb5d2.id !== _0xaccc51));
        } else {
          _0x2a62fb(_0x35dd2b => _0x35dd2b.map(_0x392a98 => _0x392a98.id === _0xaccc51 ? _0x21693f : _0x392a98));
        }
        _0x35f3e0();
      } catch {} finally {
        _0xe22748(false);
      }
    } else {
      _0x35f3e0();
    }
  }, [_0xaccc51, _0x5053e0, _0xa124a1, _0x54d682, _0x227e54, _0x31c87c, _0x4774de, _0x35f3e0]);
  const _0x547c06 = _0x489a3d.useCallback(async () => {
    if (_0xb06428) {
      try {
        _0x3cfa97(true);
        await async function (_0x4f7376) {
          try {
            await _0xd5b758.delete("/api/v1/guild-webhooks/" + _0x4f7376);
          } catch (_0x2d82de) {
            throw _0xa6886f(_0x2d82de);
          }
        }(_0xb06428.id);
        _0x2a62fb(_0x52b236 => _0x52b236.filter(_0x4f050b => _0x4f050b.id !== _0xb06428.id));
        _0x4d206b(null);
      } catch {} finally {
        _0x3cfa97(false);
      }
    }
  }, [_0xb06428]);
  const _0x172909 = _0x489a3d.useCallback(async _0x2a8e0d => {
    await _0x12c42c(_0x2a8e0d.token);
    _0xb04f23(_0x2a8e0d.id);
    _0x46f993.success(_0x423e2e("serverSettings.channelSettings.webhooks.tokenCopied"));
    setTimeout(() => _0xb04f23(null), 2000);
  }, [_0x423e2e]);
  const _0x40b7be = _0x489a3d.useCallback(async _0x48c35a => {
    const _0x511d2f = "https://gateway.jubbio.com/api/v1/webhooks/" + _0x48c35a.id + "/" + _0x48c35a.token;
    await _0x12c42c(_0x511d2f);
    _0x3b948a(_0x48c35a.id);
    _0x46f993.success(_0x423e2e("serverSettings.channelSettings.webhooks.urlCopied"));
    setTimeout(() => _0x3b948a(null), 2000);
  }, [_0x423e2e]);
  if (_0xe802bb) {
    return _0x38606f.jsx(_0x4d1ef6, {});
  } else {
    return _0x38606f.jsxs("div", {
      className: "space-y-6",
      children: [_0x38606f.jsx("section", {
        children: _0x38606f.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [_0x38606f.jsxs("div", {
            children: [_0x38606f.jsxs("div", {
              className: "flex items-center gap-2",
              children: [_0x38606f.jsx(u, {
                className: "size-4 text-text-tertiary"
              }), _0x38606f.jsx("div", {
                className: "text-base leading-snug font-semibold text-text-secondary",
                children: _0x423e2e("serverSettings.channelSettings.webhooks.title")
              })]
            }), _0x38606f.jsx("p", {
              className: "text-sm leading-snug text-text-muted mt-0.5",
              children: _0x423e2e("serverSettings.channelSettings.webhooks.description")
            })]
          }), _0x31c87c.length < 15 && _0x38606f.jsxs(_0x30773b, {
            onClick: _0x14fd86,
            className: "h-8 px-3 text-[14px] bg-accent-primary text-black hover:bg-accent-primary/90 disabled:opacity-60",
            disabled: _0x5648ed,
            children: [_0x38606f.jsx(b, {
              className: "w-3.5 h-3.5 mr-1.5"
            }), _0x423e2e(_0x5648ed ? "serverSettings.channelSettings.webhooks.creating" : "serverSettings.channelSettings.webhooks.createNew")]
          })]
        })
      }), _0x38606f.jsx("input", {
        ref: _0x1ba75e,
        type: "file",
        accept: ".jpg,.jpeg,.png,.webp",
        className: "hidden",
        onChange: _0x26f133
      }), _0x31c87c.length === 0 ? _0x38606f.jsx("div", {
        className: "rounded-2xl border border-border-default bg-surface-raised/40 overflow-hidden hover:bg-interactive-muted transition-colors",
        children: _0x38606f.jsxs("div", {
          className: "p-12 text-center",
          children: [_0x38606f.jsx("div", {
            className: "flex items-center justify-center mb-4",
            children: _0x38606f.jsx(u, {
              className: "w-16 h-16 text-text-muted"
            })
          }), _0x38606f.jsx("h3", {
            className: "text-lg font-semibold text-text-secondary mb-2",
            children: _0x423e2e("serverSettings.channelSettings.webhooks.empty")
          }), _0x38606f.jsx("p", {
            className: "text-text-tertiary text-sm max-w-md mx-auto mb-6",
            children: _0x423e2e("serverSettings.channelSettings.webhooks.emptyDesc")
          }), _0x38606f.jsxs(_0x30773b, {
            onClick: _0x14fd86,
            disabled: _0x5648ed,
            className: "h-9 px-4 text-[14px] bg-accent-primary text-black hover:bg-accent-primary/90",
            children: [_0x38606f.jsx(b, {
              className: "w-4 h-4 mr-1.5"
            }), _0x423e2e(_0x5648ed ? "serverSettings.channelSettings.webhooks.creating" : "serverSettings.channelSettings.webhooks.createNew")]
          })]
        })
      }) : _0x38606f.jsx("div", {
        className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden divide-y divide-border-default",
        children: _0x31c87c.map(_0x4a69c7 => _0x38606f.jsxs("div", {
          children: [_0x38606f.jsxs("div", {
            className: "flex items-center gap-3 px-4 py-3",
            children: [_0x38606f.jsx("span", {
              className: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-overlay/70 overflow-hidden",
              children: _0x4a69c7.avatar_url ? _0x38606f.jsx("img", {
                src: _0x4a69c7.avatar_url,
                alt: _0x4a69c7.name,
                className: "size-10 rounded-lg object-cover"
              }) : _0x38606f.jsx(u, {
                className: "size-5 text-text-tertiary"
              })
            }), _0x38606f.jsxs("div", {
              className: "flex-1 min-w-0",
              children: [_0x38606f.jsx("div", {
                className: "text-[15px] font-medium text-text-secondary truncate",
                children: _0x4a69c7.name
              }), _0x38606f.jsxs("div", {
                className: "text-[13px] text-text-tertiary truncate",
                children: ["ID: ", _0x4a69c7.id]
              })]
            }), _0x38606f.jsxs("div", {
              className: "flex items-center gap-2 shrink-0",
              children: [_0x38606f.jsx(_0x490bec, {
                label: _0x423e2e("serverSettings.channelSettings.webhooks.copyUrl"),
                children: _0x38606f.jsx(_0x30773b, {
                  size: "sm",
                  variant: "ghost",
                  onClick: () => _0x40b7be(_0x4a69c7),
                  className: "h-8 w-8 p-0 bg-surface-overlay/40 border border-border-default hover:bg-surface-inset cursor-pointer",
                  children: _0x58fdd4 === _0x4a69c7.id ? _0x38606f.jsx(_0x572abe, {
                    className: "w-4 h-4 text-green-400"
                  }) : _0x38606f.jsx(p, {
                    className: "w-4 h-4 text-text-tertiary"
                  })
                })
              }), _0x38606f.jsx(_0x490bec, {
                label: _0x423e2e("serverSettings.channelSettings.webhooks.copyToken"),
                children: _0x38606f.jsx(_0x30773b, {
                  size: "sm",
                  variant: "ghost",
                  onClick: () => _0x172909(_0x4a69c7),
                  className: "h-8 w-8 p-0 bg-surface-overlay/40 border border-border-default hover:bg-surface-inset cursor-pointer",
                  children: _0x69fa32 === _0x4a69c7.id ? _0x38606f.jsx(_0x572abe, {
                    className: "w-4 h-4 text-green-400"
                  }) : _0x38606f.jsx(_0x48bde1, {
                    icon: "solar:copy-bold-duotone",
                    className: "w-4 h-4 text-text-tertiary"
                  })
                })
              }), _0x38606f.jsx(_0x490bec, {
                label: _0x423e2e("serverSettings.channelSettings.webhooks.edit"),
                children: _0x38606f.jsx(_0x30773b, {
                  size: "sm",
                  variant: "ghost",
                  onClick: () => _0xaccc51 === _0x4a69c7.id ? _0x35f3e0() : _0x9be3d7(_0x4a69c7),
                  className: "h-8 w-8 p-0 bg-surface-overlay/40 border border-border-default hover:bg-surface-inset cursor-pointer",
                  children: _0x38606f.jsx(_0x48bde1, {
                    icon: "solar:pen-bold-duotone",
                    className: "w-3.5 h-3.5 text-text-tertiary"
                  })
                })
              }), _0x38606f.jsx(_0x490bec, {
                label: _0x423e2e("serverSettings.channelSettings.webhooks.delete"),
                children: _0x38606f.jsx(_0x30773b, {
                  size: "sm",
                  variant: "ghost",
                  onClick: () => _0x4d206b(_0x4a69c7),
                  className: "h-8 w-8 p-0 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 hover:text-red-400 cursor-pointer",
                  children: _0x38606f.jsx(g, {
                    className: "w-4 h-4"
                  })
                })
              })]
            })]
          }), _0x38606f.jsx("div", {
            className: "overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
            style: {
              maxHeight: _0xaccc51 === _0x4a69c7.id ? 480 : 0,
              opacity: _0xaccc51 === _0x4a69c7.id ? 1 : 0
            },
            children: _0x38606f.jsxs("div", {
              className: "px-4 pb-4 pt-3 space-y-3 border-t border-border-subtle",
              children: [_0x38606f.jsxs("div", {
                className: "flex items-start gap-4",
                children: [_0x38606f.jsxs("div", {
                  className: "flex flex-col items-center gap-2 shrink-0",
                  children: [_0x38606f.jsxs("div", {
                    className: "relative group",
                    children: [_0x38606f.jsx("div", {
                      className: "flex size-24 items-center justify-center rounded-xl bg-surface-inset/40 border border-border-subtle overflow-hidden",
                      children: _0x5679e7 ? _0x38606f.jsx("img", {
                        src: _0x5679e7,
                        alt: _0x5053e0,
                        className: "size-24 rounded-xl object-cover"
                      }) : _0x38606f.jsx(u, {
                        className: "size-8 text-text-muted"
                      })
                    }), _0x38606f.jsx("div", {
                      className: "absolute inset-0 flex items-center justify-center rounded-xl bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity",
                      children: _0x38606f.jsx("button", {
                        type: "button",
                        onClick: () => _0x1ba75e.current?.click(),
                        className: "rounded-full p-2 text-text-primary hover:bg-surface-inset/80 transition-colors cursor-pointer",
                        children: _0x38606f.jsx(v, {
                          className: "size-5"
                        })
                      })
                    })]
                  }), _0x5679e7 && _0x38606f.jsxs("button", {
                    type: "button",
                    onClick: _0x11048e,
                    className: "flex items-center gap-1 text-[11px] text-red-400 hover:text-red-300 transition-colors cursor-pointer",
                    children: [_0x38606f.jsx(g, {
                      className: "size-3"
                    }), _0x423e2e("serverSettings.channelSettings.webhooks.remove")]
                  })]
                }), _0x38606f.jsxs("div", {
                  className: "flex-1 min-w-0 space-y-2",
                  children: [_0x38606f.jsxs("div", {
                    className: "flex gap-2",
                    children: [_0x38606f.jsx("div", {
                      className: "flex-1 min-w-0 rounded-xl bg-surface-inset/40 border border-border-subtle overflow-hidden",
                      children: _0x38606f.jsxs("div", {
                        className: "px-3 py-2",
                        children: [_0x38606f.jsx("label", {
                          className: "text-[11px] text-text-muted block mb-1",
                          children: _0x423e2e("serverSettings.channelSettings.webhooks.nameLabel")
                        }), _0x38606f.jsx("input", {
                          type: "text",
                          value: _0x5053e0,
                          onChange: _0x48e7b7 => _0x1dfcb5(_0x48e7b7.target.value),
                          maxLength: 80,
                          className: "w-full bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none"
                        })]
                      })
                    }), _0x38606f.jsx("div", {
                      className: "flex-1 min-w-0 rounded-xl bg-surface-inset/40 border border-border-subtle overflow-hidden",
                      children: _0x38606f.jsxs("div", {
                        className: "px-3 py-2",
                        children: [_0x38606f.jsx("label", {
                          className: "text-[11px] text-text-muted block mb-1",
                          children: _0x423e2e("serverSettings.channelSettings.webhooks.channelLabel")
                        }), _0x38606f.jsx("select", {
                          value: _0xa124a1,
                          onChange: _0x2b49a7 => _0x136513(_0x2b49a7.target.value),
                          className: "w-full bg-transparent text-sm text-text-primary outline-none cursor-pointer [&>option]:bg-surface-raised [&>option]:text-text-primary",
                          children: _0x51fcb3.map(_0x4ee467 => _0x38606f.jsxs("option", {
                            value: _0x4ee467.id,
                            children: ["# ", _0x4ee467.name]
                          }, _0x4ee467.id))
                        })]
                      })
                    })]
                  }), _0x38606f.jsx("p", {
                    className: "text-[11px] text-text-muted px-1",
                    children: _0x423e2e("serverSettings.channelSettings.webhooks.avatarHint")
                  })]
                })]
              }), _0x38606f.jsxs("div", {
                className: "flex items-center gap-2 justify-end pt-1",
                children: [_0x38606f.jsx("button", {
                  onClick: _0x35f3e0,
                  className: "h-9 px-4 rounded-xl bg-surface-inset/40 hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer",
                  children: _0x423e2e("serverSettings.channelSettings.webhooks.cancel")
                }), _0x38606f.jsx("button", {
                  onClick: _0x1a0de4,
                  disabled: _0x4c3d19 || !_0x5053e0.trim(),
                  className: "h-9 px-4 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer",
                  children: _0x4c3d19 ? _0x423e2e("serverSettings.channelSettings.webhooks.saving") : _0x38606f.jsxs(_0x38606f.Fragment, {
                    children: [_0x38606f.jsx(_0x572abe, {
                      className: "size-4"
                    }), _0x423e2e("serverSettings.channelSettings.webhooks.save")]
                  })
                })]
              })]
            })
          })]
        }, _0x4a69c7.id))
      }), _0x38606f.jsx("p", {
        className: "text-xs text-text-muted",
        children: _0x423e2e("serverSettings.channelSettings.webhooks.limitInfo", {
          current: _0x31c87c.length,
          max: 15
        })
      }), _0x38606f.jsx(_0x32c19f, {
        open: !!_0xb06428,
        onOpenChange: _0x4d5a05 => !_0x4d5a05 && _0x4d206b(null),
        onConfirm: _0x547c06,
        variant: "danger",
        icon: _0x38606f.jsx(_0x48bde1, {
          icon: "solar:trash-bin-trash-bold-duotone",
          className: "size-5 text-red-400"
        }),
        title: _0x423e2e("serverSettings.channelSettings.webhooks.deleteTitle"),
        subtitle: _0x423e2e("serverSettings.channelSettings.webhooks.deleteSubtitle"),
        description: _0x38606f.jsxs(_0x38606f.Fragment, {
          children: [_0x38606f.jsx("span", {
            className: "font-semibold text-text-secondary break-all",
            children: _0xb06428?.name
          }), " ", _0x423e2e("serverSettings.channelSettings.webhooks.deleteDesc")]
        }),
        confirmText: _0x423e2e("serverSettings.channelSettings.webhooks.deleteConfirm"),
        cancelText: _0x423e2e("serverSettings.channelSettings.webhooks.cancel"),
        isLoading: _0xae208a
      })]
    });
  }
});
f.displayName = "ChannelWebhooksSettings";
export { f as default };