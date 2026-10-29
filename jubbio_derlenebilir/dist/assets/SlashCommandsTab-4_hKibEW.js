import { aC as _0x1852f1, b as _0x479d58, r as _0x1ce5c8, j as _0x1e74cc, B as _0xb824e, I as _0x49705c, K as _0x2c501b, P as _0x4ea805, F as _0x920102 } from "./index-cQfEKR1W.js";
import { I as _0x10db22 } from "./input-AMyERYwJ.js";
import { L as _0x443d8e } from "./label-ODyS97Ju.js";
import { C as _0x37a3e2 } from "./checkbox-6NFFWv4U.js";
import { S as _0x4061ba, a as _0xa85749, b as _0x2bff55, c as _0x17f188, d as _0x3b9b10 } from "./select-DQjjzSZW.js";
import { C as _0x3ac32f } from "./ConfirmDialog-B4gIndKy.js";
import { p as _0x5c1a8e, q as _0x2cd226, s as _0x792a6d, t as _0xe1d4c5 } from "./developer-DCtAQT29.js";
import { P as _0x6b4ec2 } from "./plus-B7c2Px8R.js";
import { T as _0x5730c5 } from "./trash-2-DuFcDcAU.js";
import "./index-Oyyh46KT.js";
import "./alert-dialog-BZuoGg7O.js";
import "./index-yuEHo9bu.js";
import "./loader-circle-CTtxa1g9.js";
const k = [{
  value: 1,
  label: "Sub Command"
}, {
  value: 2,
  label: "Sub Command Group"
}, {
  value: 3,
  label: "String"
}, {
  value: 4,
  label: "Integer"
}, {
  value: 5,
  label: "Boolean"
}, {
  value: 6,
  label: "User"
}, {
  value: 7,
  label: "Channel"
}, {
  value: 8,
  label: "Role"
}, {
  value: 9,
  label: "Mentionable"
}, {
  value: 10,
  label: "Number"
}, {
  value: 11,
  label: "Attachment"
}];
const T = [{
  value: 0,
  label: "Text"
}, {
  value: 2,
  label: "Voice"
}, {
  value: 4,
  label: "Category"
}, {
  value: 5,
  label: "Announcement"
}, {
  value: 13,
  label: "Stage"
}, {
  value: 15,
  label: "Forum"
}];
function S({
  choices: _0x3084b6,
  onChange: _0x261139,
  optionType: _0x4cb7f7
}) {
  const _0x216093 = (_0x336062, _0x46419e, _0x37fb39) => {
    const _0x5346b4 = [..._0x3084b6];
    _0x5346b4[_0x336062] = _0x46419e !== "value" || _0x4cb7f7 !== 4 && _0x4cb7f7 !== 10 ? {
      ..._0x5346b4[_0x336062],
      [_0x46419e]: _0x37fb39
    } : {
      ..._0x5346b4[_0x336062],
      value: Number(_0x37fb39) || 0
    };
    _0x261139(_0x5346b4);
  };
  return _0x1e74cc.jsxs("div", {
    className: "space-y-1.5",
    children: [_0x1e74cc.jsxs("div", {
      className: "flex items-center justify-between",
      children: [_0x1e74cc.jsxs(_0x443d8e, {
        className: "text-[10px] text-text-muted uppercase tracking-wider",
        children: ["Choices (", _0x3084b6.length, "/25)"]
      }), _0x1e74cc.jsx("button", {
        onClick: () => {
          if (!(_0x3084b6.length >= 25)) {
            _0x261139([..._0x3084b6, {
              name: "",
              value: _0x4cb7f7 === 3 ? "" : 0
            }]);
          }
        },
        className: "text-[10px] text-accent-primary-text hover:underline",
        disabled: _0x3084b6.length >= 25,
        children: "+ Add"
      })]
    }), _0x3084b6.map((_0x3240c2, _0x3a0b05) => _0x1e74cc.jsxs("div", {
      className: "flex items-center gap-2",
      children: [_0x1e74cc.jsx(_0x10db22, {
        value: _0x3240c2.name,
        onChange: _0x2f5b71 => _0x216093(_0x3a0b05, "name", _0x2f5b71.target.value),
        placeholder: "Display name",
        className: "h-7 text-xs flex-1",
        maxLength: 100
      }), _0x1e74cc.jsx(_0x10db22, {
        value: String(_0x3240c2.value),
        onChange: _0x503a59 => _0x216093(_0x3a0b05, "value", _0x503a59.target.value),
        placeholder: "Value",
        className: "h-7 text-xs w-24 font-mono",
        type: _0x4cb7f7 === 3 ? "text" : "number"
      }), _0x1e74cc.jsx("button", {
        onClick: () => {
          _0x4ce4d8 = _0x3a0b05;
          _0x261139(_0x3084b6.filter((_0x54534d, _0x262dd1) => _0x262dd1 !== _0x4ce4d8));
          return;
          var _0x4ce4d8;
        },
        className: "text-text-muted hover:text-red-400 shrink-0",
        children: _0x1e74cc.jsx(_0x5730c5, {
          className: "size-3"
        })
      })]
    }, _0x3a0b05))]
  });
}
function w({
  option: _0x1d39d5,
  index: _0x433f88,
  onChange: _0x32343d,
  onRemove: _0x9df06b,
  depth: _0x4a1499 = 0
}) {
  const [_0x1d3f0d, _0x190820] = _0x1ce5c8.useState(true);
  const _0x180d88 = _0x1d39d5.type === 1 || _0x1d39d5.type === 2;
  const _0x321cb5 = _0x1d39d5.type === 3 || _0x1d39d5.type === 4 || _0x1d39d5.type === 10;
  const _0x1fba8f = _0x1d39d5.type === 4 || _0x1d39d5.type === 10;
  const _0x4be864 = _0x1d39d5.type === 3;
  const _0xa4e125 = _0x1d39d5.type === 7;
  const _0x58130e = _0x1ce5c8.useCallback((_0x147b2f, _0x260211) => {
    const _0x475762 = [...(_0x1d39d5.options || [])];
    _0x475762[_0x147b2f] = _0x260211;
    _0x32343d(_0x433f88, {
      ..._0x1d39d5,
      options: _0x475762
    });
  }, [_0x1d39d5, _0x433f88, _0x32343d]);
  const _0x248a8a = _0x1ce5c8.useCallback(_0x7092e5 => {
    const _0x50aa2e = (_0x1d39d5.options || []).filter((_0x1e9c3b, _0x34e9ea) => _0x34e9ea !== _0x7092e5);
    _0x32343d(_0x433f88, {
      ..._0x1d39d5,
      options: _0x50aa2e
    });
  }, [_0x1d39d5, _0x433f88, _0x32343d]);
  return _0x1e74cc.jsxs("div", {
    className: "border border-border-default/50 rounded-lg p-3 bg-surface-overlay/30 " + (_0x4a1499 > 0 ? "ml-4" : ""),
    children: [_0x1e74cc.jsxs("div", {
      className: "flex items-center gap-2 mb-2",
      children: [_0x1e74cc.jsx("button", {
        onClick: () => _0x190820(!_0x1d3f0d),
        className: "text-text-muted hover:text-text-secondary",
        children: _0x1d3f0d ? _0x1e74cc.jsx(_0x2c501b, {
          className: "size-4"
        }) : _0x1e74cc.jsx(_0x920102, {
          className: "size-4"
        })
      }), _0x1e74cc.jsx("span", {
        className: "text-xs font-mono text-accent-primary-text",
        children: _0x1d39d5.name || "option_" + (_0x433f88 + 1)
      }), _0x1e74cc.jsx("span", {
        className: "text-[10px] px-1.5 py-0.5 rounded bg-surface-overlay text-text-muted",
        children: (_0x58b0b5 = _0x1d39d5.type, k.find(_0x3a632f => _0x3a632f.value === _0x58b0b5)?.label || "Type " + _0x58b0b5)
      }), _0x1d39d5.required && _0x1e74cc.jsx("span", {
        className: "text-[10px] px-1.5 py-0.5 rounded bg-accent-primary/10 text-accent-primary-text",
        children: "required"
      }), _0x1e74cc.jsx("button", {
        onClick: () => _0x9df06b(_0x433f88),
        className: "ml-auto text-text-muted hover:text-red-400",
        children: _0x1e74cc.jsx(_0x5730c5, {
          className: "size-3.5"
        })
      })]
    }), _0x1d3f0d && _0x1e74cc.jsxs("div", {
      className: "space-y-3 mt-3",
      children: [_0x1e74cc.jsxs("div", {
        className: "grid grid-cols-2 gap-3",
        children: [_0x1e74cc.jsxs("div", {
          children: [_0x1e74cc.jsx(_0x443d8e, {
            className: "text-xs text-text-muted",
            children: "Name"
          }), _0x1e74cc.jsx(_0x10db22, {
            value: _0x1d39d5.name,
            onChange: _0x1b6710 => _0x32343d(_0x433f88, {
              ..._0x1d39d5,
              name: _0x1b6710.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, "")
            }),
            placeholder: "option-name",
            className: "h-8 text-sm font-mono",
            maxLength: 32
          })]
        }), _0x1e74cc.jsxs("div", {
          children: [_0x1e74cc.jsx(_0x443d8e, {
            className: "text-xs text-text-muted",
            children: "Type"
          }), _0x1e74cc.jsxs(_0x4061ba, {
            value: String(_0x1d39d5.type),
            onValueChange: _0x9242c1 => _0x32343d(_0x433f88, {
              ..._0x1d39d5,
              type: Number(_0x9242c1),
              choices: undefined,
              options: undefined
            }),
            children: [_0x1e74cc.jsx(_0xa85749, {
              className: "h-8 text-sm",
              children: _0x1e74cc.jsx(_0x2bff55, {})
            }), _0x1e74cc.jsx(_0x17f188, {
              children: k.filter(_0x3601fa => _0x4a1499 === 0 || _0x3601fa.value !== 1 && _0x3601fa.value !== 2).map(_0x27adeb => _0x1e74cc.jsx(_0x3b9b10, {
                value: String(_0x27adeb.value),
                children: _0x27adeb.label
              }, _0x27adeb.value))
            })]
          })]
        })]
      }), _0x1e74cc.jsxs("div", {
        children: [_0x1e74cc.jsx(_0x443d8e, {
          className: "text-xs text-text-muted",
          children: "Description"
        }), _0x1e74cc.jsx(_0x10db22, {
          value: _0x1d39d5.description,
          onChange: _0x1d2573 => _0x32343d(_0x433f88, {
            ..._0x1d39d5,
            description: _0x1d2573.target.value
          }),
          placeholder: "What this option does",
          className: "h-8 text-sm",
          maxLength: 100
        })]
      }), _0x1e74cc.jsxs("div", {
        className: "flex items-center gap-4 flex-wrap",
        children: [!_0x180d88 && _0x1e74cc.jsxs("label", {
          className: "flex items-center gap-2 cursor-pointer",
          children: [_0x1e74cc.jsx(_0x37a3e2, {
            checked: _0x1d39d5.required || false,
            onCheckedChange: _0x1e495b => _0x32343d(_0x433f88, {
              ..._0x1d39d5,
              required: !!_0x1e495b
            })
          }), _0x1e74cc.jsx("span", {
            className: "text-xs text-text-secondary",
            children: "Required"
          })]
        }), _0x321cb5 && _0x1e74cc.jsxs("label", {
          className: "flex items-center gap-2 cursor-pointer",
          children: [_0x1e74cc.jsx(_0x37a3e2, {
            checked: _0x1d39d5.autocomplete || false,
            onCheckedChange: _0xaf24c9 => _0x32343d(_0x433f88, {
              ..._0x1d39d5,
              autocomplete: !!_0xaf24c9,
              choices: _0xaf24c9 ? undefined : _0x1d39d5.choices
            })
          }), _0x1e74cc.jsx("span", {
            className: "text-xs text-text-secondary",
            children: "Autocomplete"
          })]
        })]
      }), _0x1fba8f && _0x1e74cc.jsxs("div", {
        className: "grid grid-cols-2 gap-3",
        children: [_0x1e74cc.jsxs("div", {
          children: [_0x1e74cc.jsx(_0x443d8e, {
            className: "text-xs text-text-muted",
            children: "Min Value"
          }), _0x1e74cc.jsx(_0x10db22, {
            type: "number",
            value: _0x1d39d5.min_value ?? "",
            onChange: _0x27b0c4 => _0x32343d(_0x433f88, {
              ..._0x1d39d5,
              min_value: _0x27b0c4.target.value ? Number(_0x27b0c4.target.value) : undefined
            }),
            placeholder: "No min",
            className: "h-7 text-xs"
          })]
        }), _0x1e74cc.jsxs("div", {
          children: [_0x1e74cc.jsx(_0x443d8e, {
            className: "text-xs text-text-muted",
            children: "Max Value"
          }), _0x1e74cc.jsx(_0x10db22, {
            type: "number",
            value: _0x1d39d5.max_value ?? "",
            onChange: _0x4d9742 => _0x32343d(_0x433f88, {
              ..._0x1d39d5,
              max_value: _0x4d9742.target.value ? Number(_0x4d9742.target.value) : undefined
            }),
            placeholder: "No max",
            className: "h-7 text-xs"
          })]
        })]
      }), _0x4be864 && _0x1e74cc.jsxs("div", {
        className: "grid grid-cols-2 gap-3",
        children: [_0x1e74cc.jsxs("div", {
          children: [_0x1e74cc.jsx(_0x443d8e, {
            className: "text-xs text-text-muted",
            children: "Min Length"
          }), _0x1e74cc.jsx(_0x10db22, {
            type: "number",
            value: _0x1d39d5.min_length ?? "",
            onChange: _0x121dc8 => _0x32343d(_0x433f88, {
              ..._0x1d39d5,
              min_length: _0x121dc8.target.value ? Number(_0x121dc8.target.value) : undefined
            }),
            placeholder: "0",
            className: "h-7 text-xs",
            min: 0,
            max: 6000
          })]
        }), _0x1e74cc.jsxs("div", {
          children: [_0x1e74cc.jsx(_0x443d8e, {
            className: "text-xs text-text-muted",
            children: "Max Length"
          }), _0x1e74cc.jsx(_0x10db22, {
            type: "number",
            value: _0x1d39d5.max_length ?? "",
            onChange: _0x2a536f => _0x32343d(_0x433f88, {
              ..._0x1d39d5,
              max_length: _0x2a536f.target.value ? Number(_0x2a536f.target.value) : undefined
            }),
            placeholder: "6000",
            className: "h-7 text-xs",
            min: 1,
            max: 6000
          })]
        })]
      }), _0xa4e125 && _0x1e74cc.jsxs("div", {
        children: [_0x1e74cc.jsx(_0x443d8e, {
          className: "text-xs text-text-muted mb-1.5 block",
          children: "Allowed Channel Types"
        }), _0x1e74cc.jsx("div", {
          className: "flex flex-wrap gap-2",
          children: T.map(_0x231566 => {
            const _0x23ea7e = _0x1d39d5.channel_types?.includes(_0x231566.value) || false;
            return _0x1e74cc.jsxs("label", {
              className: "flex items-center gap-1.5 cursor-pointer",
              children: [_0x1e74cc.jsx(_0x37a3e2, {
                checked: _0x23ea7e,
                onCheckedChange: _0x272c54 => {
                  const _0x147c35 = _0x1d39d5.channel_types || [];
                  const _0x33fddd = _0x272c54 ? [..._0x147c35, _0x231566.value] : _0x147c35.filter(_0x23cccf => _0x23cccf !== _0x231566.value);
                  _0x32343d(_0x433f88, {
                    ..._0x1d39d5,
                    channel_types: _0x33fddd.length > 0 ? _0x33fddd : undefined
                  });
                }
              }), _0x1e74cc.jsx("span", {
                className: "text-[10px] text-text-secondary",
                children: _0x231566.label
              })]
            }, _0x231566.value);
          })
        })]
      }), _0x321cb5 && !_0x1d39d5.autocomplete && _0x1e74cc.jsx(S, {
        choices: _0x1d39d5.choices || [],
        onChange: _0x2e5e07 => _0x32343d(_0x433f88, {
          ..._0x1d39d5,
          choices: _0x2e5e07.length > 0 ? _0x2e5e07 : undefined
        }),
        optionType: _0x1d39d5.type
      }), _0x180d88 && _0x1e74cc.jsxs("div", {
        className: "space-y-2",
        children: [_0x1e74cc.jsxs("div", {
          className: "flex items-center justify-between",
          children: [_0x1e74cc.jsxs(_0x443d8e, {
            className: "text-[10px] text-text-muted uppercase tracking-wider",
            children: [_0x1d39d5.type === 2 ? "Sub Commands" : "Parameters", " (", (_0x1d39d5.options || []).length, "/25)"]
          }), _0x1e74cc.jsx("button", {
            onClick: () => {
              const _0x4e6bdd = _0x1d39d5.options || [];
              if (!(_0x4e6bdd.length >= 25)) {
                _0x32343d(_0x433f88, {
                  ..._0x1d39d5,
                  options: [..._0x4e6bdd, {
                    type: 3,
                    name: "",
                    description: "",
                    required: false
                  }]
                });
              }
            },
            className: "text-[10px] text-accent-primary-text hover:underline",
            children: "+ Add"
          })]
        }), (_0x1d39d5.options || []).map((_0x113d36, _0x4d7395) => _0x1e74cc.jsx(w, {
          option: _0x113d36,
          index: _0x4d7395,
          onChange: _0x58130e,
          onRemove: _0x248a8a,
          depth: _0x4a1499 + 1
        }, _0x4d7395))]
      })]
    })]
  });
  var _0x58b0b5;
}
function z({
  command: _0x54ac39,
  onDelete: _0x4117ae,
  onSave: _0x44dfa5
}) {
  const [_0x1d050c, _0x258ea0] = _0x1ce5c8.useState(false);
  return _0x1e74cc.jsxs("div", {
    className: "hover:bg-surface-overlay/20 transition-colors",
    children: [_0x1e74cc.jsxs("div", {
      className: "flex items-center gap-3 px-4 py-3 cursor-pointer select-none",
      onClick: () => _0x258ea0(!_0x1d050c),
      children: [_0x54ac39.icon_url ? _0x1e74cc.jsx("img", {
        src: _0x54ac39.icon_url,
        alt: "",
        className: "size-8 rounded-lg object-cover shrink-0 border border-border-default/50"
      }) : _0x1e74cc.jsx("div", {
        className: "size-8 rounded-lg bg-surface-overlay/50 flex items-center justify-center shrink-0",
        children: _0x1e74cc.jsx(_0x49705c, {
          icon: "solar:command-bold-duotone",
          className: "size-4 text-text-muted"
        })
      }), _0x1e74cc.jsxs("div", {
        className: "flex-1 min-w-0",
        children: [_0x1e74cc.jsxs("div", {
          className: "flex items-center gap-2",
          children: [_0x1e74cc.jsxs("span", {
            className: "text-sm font-mono font-medium text-accent-primary-text",
            children: ["/", _0x54ac39.name]
          }), _0x54ac39.nsfw && _0x1e74cc.jsx("span", {
            className: "text-[9px] px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 font-medium",
            children: "NSFW"
          }), !_0x54ac39.dm_permission && _0x1e74cc.jsx("span", {
            className: "text-[9px] px-1.5 py-0.5 rounded bg-surface-overlay text-text-muted",
            children: "No DM"
          }), _0x54ac39.options && _0x54ac39.options.length > 0 && _0x1e74cc.jsxs("span", {
            className: "text-[9px] px-1.5 py-0.5 rounded bg-surface-overlay text-text-muted",
            children: [_0x54ac39.options.length, " param"]
          })]
        }), _0x1e74cc.jsx("p", {
          className: "text-xs text-text-muted mt-0.5 truncate",
          children: _0x54ac39.description
        })]
      }), _0x1e74cc.jsxs("div", {
        className: "flex items-center gap-1 shrink-0",
        children: [_0x1e74cc.jsx("button", {
          onClick: _0x3d29b5 => {
            _0x3d29b5.stopPropagation();
            _0x4117ae(_0x54ac39);
          },
          className: "size-7 rounded-lg flex items-center justify-center text-text-muted hover:text-red-400 hover:bg-red-500/10 transition-colors",
          children: _0x1e74cc.jsx(_0x5730c5, {
            className: "size-3.5"
          })
        }), _0x1e74cc.jsx(_0x2c501b, {
          className: "size-4 text-text-muted transition-transform duration-200 " + (_0x1d050c ? "rotate-180" : "")
        })]
      })]
    }), _0x1d050c && _0x1e74cc.jsx("div", {
      className: "px-4 pb-4 animate-in fade-in slide-in-from-top-1 duration-150",
      children: _0x1e74cc.jsx(_, {
        initialData: _0x54ac39,
        onSubmit: _0x44dfa5,
        onCancel: () => _0x258ea0(false),
        isEdit: true
      })
    })]
  });
}
function _({
  initialData: _0x322ee8,
  onSubmit: _0x159566,
  onCancel: _0x325c51,
  isEdit: _0x4590af
}) {
  const {
    t: _0x3d3e27
  } = _0x479d58();
  const [_0x40dc0b, _0x201bbc] = _0x1ce5c8.useState(_0x322ee8?.name || "");
  const [_0x4a40fb, _0x1ec682] = _0x1ce5c8.useState(_0x322ee8?.description || "");
  const [_0x200e85, _0x1f2575] = _0x1ce5c8.useState(_0x322ee8?.icon_url || "");
  const [_0x3a3bcf, _0x3ef6cf] = _0x1ce5c8.useState(null);
  const [_0x3808bf, _0x4c3684] = _0x1ce5c8.useState(_0x322ee8?.icon_url || null);
  _0x1ce5c8.useEffect(() => {
    if (_0x3808bf?.startsWith("blob:")) {
      return () => URL.revokeObjectURL(_0x3808bf);
    }
  }, [_0x3808bf]);
  const [_0x1ce41b, _0x5eaab6] = _0x1ce5c8.useState(_0x322ee8?.dm_permission ?? true);
  const [_0x338ed8, _0x43f1eb] = _0x1ce5c8.useState(_0x322ee8?.nsfw ?? false);
  const [_0x2671b4, _0x4b9199] = _0x1ce5c8.useState(_0x322ee8?.options || []);
  const [_0x23f735, _0x43e4ce] = _0x1ce5c8.useState(false);
  const _0x1eddda = _0x1ce5c8.useCallback((_0x16244c, _0x58c522) => {
    _0x4b9199(_0xfabe50 => _0xfabe50.map((_0x60c6b1, _0x369908) => _0x369908 === _0x16244c ? _0x58c522 : _0x60c6b1));
  }, []);
  const _0x34b5f6 = _0x1ce5c8.useCallback(_0x287dfe => {
    _0x4b9199(_0x1e5b18 => _0x1e5b18.filter((_0x47b81f, _0x1ae92d) => _0x1ae92d !== _0x287dfe));
  }, []);
  return _0x1e74cc.jsxs("div", {
    className: "rounded-xl border border-border-default/50 bg-surface-raised/50 p-5 space-y-4",
    children: [_0x1e74cc.jsxs("div", {
      className: "flex items-center justify-between",
      children: [_0x1e74cc.jsx("h3", {
        className: "text-sm font-semibold text-text-secondary",
        children: _0x3d3e27(_0x4590af ? "developer.slashCommandsTab.editCommand" : "developer.slashCommandsTab.createCommand")
      }), _0x1e74cc.jsx("button", {
        onClick: _0x325c51,
        className: "text-text-muted hover:text-text-secondary text-xs",
        children: _0x3d3e27("developer.slashCommandsTab.cancel")
      })]
    }), _0x1e74cc.jsxs("div", {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4",
      children: [_0x1e74cc.jsxs("div", {
        children: [_0x1e74cc.jsx(_0x443d8e, {
          className: "text-xs text-text-muted mb-1",
          children: _0x3d3e27("developer.slashCommandsTab.commandName")
        }), _0x1e74cc.jsxs("div", {
          className: "relative",
          children: [_0x1e74cc.jsx("span", {
            className: "absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-sm",
            children: "/"
          }), _0x1e74cc.jsx(_0x10db22, {
            value: _0x40dc0b,
            onChange: _0x36e4b4 => _0x201bbc(_0x36e4b4.target.value.toLowerCase().replace(/[^a-z0-9_-]/g, "")),
            placeholder: "my-command",
            className: "h-9 text-sm font-mono pl-7",
            maxLength: 32
          })]
        }), _0x1e74cc.jsx("p", {
          className: "text-[10px] text-text-muted mt-1",
          children: _0x3d3e27("developer.slashCommandsTab.nameHint")
        })]
      }), _0x1e74cc.jsxs("div", {
        children: [_0x1e74cc.jsx(_0x443d8e, {
          className: "text-xs text-text-muted mb-1",
          children: _0x3d3e27("developer.slashCommandsTab.description")
        }), _0x1e74cc.jsx(_0x10db22, {
          value: _0x4a40fb,
          onChange: _0x3abbcf => _0x1ec682(_0x3abbcf.target.value),
          placeholder: "What this command does",
          className: "h-9 text-sm",
          maxLength: 100
        }), _0x1e74cc.jsxs("p", {
          className: "text-[10px] text-text-muted mt-1",
          children: [_0x4a40fb.length, "/100"]
        })]
      })]
    }), _0x1e74cc.jsxs("div", {
      children: [_0x1e74cc.jsx(_0x443d8e, {
        className: "text-xs text-text-muted mb-1",
        children: _0x3d3e27("developer.slashCommandsTab.iconUrl")
      }), _0x1e74cc.jsxs("div", {
        className: "flex items-center gap-3",
        children: [_0x3808bf ? _0x1e74cc.jsxs("div", {
          className: "relative",
          children: [_0x1e74cc.jsx("img", {
            src: _0x3808bf,
            alt: "",
            className: "size-10 rounded-lg object-cover border border-border-default/50"
          }), _0x1e74cc.jsx("button", {
            onClick: () => {
              _0x3ef6cf(null);
              _0x4c3684(null);
              _0x1f2575("");
            },
            className: "absolute -top-1.5 -right-1.5 size-4 rounded-full bg-red-500 text-white flex items-center justify-center text-[10px] hover:bg-red-600",
            children: "×"
          })]
        }) : _0x1e74cc.jsxs("label", {
          className: "size-10 rounded-lg border-2 border-dashed border-border-default/50 flex items-center justify-center cursor-pointer hover:border-accent-primary/50 transition-colors",
          children: [_0x1e74cc.jsx(_0x49705c, {
            icon: "solar:upload-bold-duotone",
            className: "size-4 text-text-muted"
          }), _0x1e74cc.jsx("input", {
            type: "file",
            accept: "image/png,image/jpeg,image/webp",
            onChange: _0x1d37be => {
              const _0x404bcb = _0x1d37be.target.files?.[0];
              if (_0x404bcb) {
                if (_0x404bcb.size > 2097152) {
                  _0x4ea805.error("Icon file too large (max 2MB)");
                } else {
                  _0x3ef6cf(_0x404bcb);
                  _0x4c3684(URL.createObjectURL(_0x404bcb));
                  _0x1f2575("");
                }
              }
            },
            className: "hidden"
          })]
        }), _0x1e74cc.jsxs("div", {
          className: "flex-1 min-w-0",
          children: [_0x1e74cc.jsx("p", {
            className: "text-[10px] text-text-muted",
            children: _0x3d3e27("developer.slashCommandsTab.iconUrlHint")
          }), _0x1e74cc.jsx("p", {
            className: "text-[10px] text-text-muted",
            children: "PNG, JPG, WebP • Max 2MB"
          })]
        })]
      })]
    }), _0x1e74cc.jsxs("div", {
      className: "flex items-center gap-6",
      children: [_0x1e74cc.jsxs("label", {
        className: "flex items-center gap-2 cursor-pointer",
        children: [_0x1e74cc.jsx(_0x37a3e2, {
          checked: _0x1ce41b,
          onCheckedChange: _0xc4e6ed => _0x5eaab6(!!_0xc4e6ed)
        }), _0x1e74cc.jsx("span", {
          className: "text-xs text-text-secondary",
          children: _0x3d3e27("developer.slashCommandsTab.allowInDMs")
        })]
      }), _0x1e74cc.jsxs("label", {
        className: "flex items-center gap-2 cursor-pointer",
        children: [_0x1e74cc.jsx(_0x37a3e2, {
          checked: _0x338ed8,
          onCheckedChange: _0x383beb => _0x43f1eb(!!_0x383beb)
        }), _0x1e74cc.jsx("span", {
          className: "text-xs text-text-secondary",
          children: "NSFW"
        })]
      })]
    }), _0x1e74cc.jsxs("div", {
      children: [_0x1e74cc.jsxs("div", {
        className: "flex items-center justify-between mb-2",
        children: [_0x1e74cc.jsxs(_0x443d8e, {
          className: "text-xs text-text-muted",
          children: [_0x3d3e27("developer.slashCommandsTab.options"), " (", _0x2671b4.length, "/25)"]
        }), _0x1e74cc.jsxs(_0xb824e, {
          size: "sm",
          variant: "ghost",
          onClick: () => {
            if (_0x2671b4.length >= 25) {
              _0x4ea805.error(_0x3d3e27("developer.slashCommandsTab.maxOptions"));
            } else {
              _0x4b9199(_0x35dd38 => [..._0x35dd38, {
                type: 3,
                name: "",
                description: "",
                required: false
              }]);
            }
          },
          className: "h-7 text-xs gap-1",
          children: [_0x1e74cc.jsx(_0x6b4ec2, {
            className: "size-3"
          }), " ", _0x3d3e27("developer.slashCommandsTab.addOption")]
        })]
      }), _0x2671b4.length > 0 && _0x1e74cc.jsx("div", {
        className: "space-y-2",
        children: _0x2671b4.map((_0x1382b8, _0x5ce624) => _0x1e74cc.jsx(w, {
          option: _0x1382b8,
          index: _0x5ce624,
          onChange: _0x1eddda,
          onRemove: _0x34b5f6
        }, _0x5ce624))
      })]
    }), _0x1e74cc.jsxs("div", {
      className: "flex justify-end gap-2 pt-2 border-t border-border-default/50",
      children: [_0x1e74cc.jsx(_0xb824e, {
        variant: "outline",
        size: "sm",
        onClick: _0x325c51,
        className: "h-8 px-4 text-xs",
        children: _0x3d3e27("developer.slashCommandsTab.cancel")
      }), _0x1e74cc.jsxs(_0xb824e, {
        size: "sm",
        onClick: async () => {
          if (!_0x40dc0b.trim()) {
            _0x4ea805.error(_0x3d3e27("developer.slashCommandsTab.nameRequired"));
            return;
          }
          if (!_0x4a40fb.trim()) {
            _0x4ea805.error(_0x3d3e27("developer.slashCommandsTab.descRequired"));
            return;
          }
          const _0x35e47b = _0x2671b4.filter(_0x194ee0 => _0x194ee0.name.trim() && _0x194ee0.description.trim());
          _0x43e4ce(true);
          try {
            const _0xf988bc = {
              name: _0x40dc0b.trim(),
              description: _0x4a40fb.trim(),
              dm_permission: _0x1ce41b,
              nsfw: _0x338ed8,
              ...(_0x35e47b.length > 0 ? {
                options: _0x35e47b
              } : {}),
              ...(_0x200e85.trim() && !_0x3a3bcf ? {
                icon_url: _0x200e85.trim()
              } : {})
            };
            await _0x159566(_0xf988bc, _0x3a3bcf || undefined);
          } finally {
            _0x43e4ce(false);
          }
        },
        disabled: _0x23f735,
        className: "h-8 px-4 text-xs",
        children: [_0x23f735 ? _0x1e74cc.jsx(_0x49705c, {
          icon: "solar:refresh-bold-duotone",
          className: "size-4 animate-spin mr-1"
        }) : null, _0x3d3e27(_0x4590af ? "developer.slashCommandsTab.save" : "developer.slashCommandsTab.create")]
      })]
    })]
  });
}
function L() {
  const {
    application: _0x50c2ce
  } = _0x1852f1();
  const {
    t: _0x58ee44
  } = _0x479d58();
  const [_0x37f775, _0x45bdf7] = _0x1ce5c8.useState([]);
  const [_0x823b07, _0x5c5353] = _0x1ce5c8.useState(true);
  const [_0x2aef98, _0x2e8f0a] = _0x1ce5c8.useState(false);
  const [_0x520613, _0x49a43b] = _0x1ce5c8.useState(null);
  const _0x22788a = _0x1ce5c8.useCallback(async () => {
    if (_0x50c2ce?.id) {
      try {
        _0x5c5353(true);
        const _0x1ad232 = await _0x5c1a8e(_0x50c2ce.id);
        _0x45bdf7(_0x1ad232);
      } catch {} finally {
        _0x5c5353(false);
      }
    }
  }, [_0x50c2ce?.id]);
  _0x1ce5c8.useEffect(() => {
    _0x22788a();
  }, [_0x22788a]);
  if (_0x50c2ce) {
    if (_0x823b07) {
      return _0x1e74cc.jsx("div", {
        className: "flex items-center justify-center py-20",
        children: _0x1e74cc.jsx("div", {
          className: "size-8 animate-spin rounded-full border-2 border-border-default border-t-accent-primary"
        })
      });
    } else {
      return _0x1e74cc.jsxs("div", {
        className: "space-y-6",
        children: [_0x1e74cc.jsxs("div", {
          className: "flex items-center justify-between",
          children: [_0x1e74cc.jsxs("div", {
            children: [_0x1e74cc.jsx("h2", {
              className: "text-lg font-semibold text-text-primary",
              children: _0x58ee44("developer.slashCommandsTab.title")
            }), _0x1e74cc.jsx("p", {
              className: "text-xs text-text-muted mt-0.5",
              children: _0x58ee44("developer.slashCommandsTab.subtitle", {
                count: _0x37f775.length,
                max: 100
              })
            })]
          }), !_0x2aef98 && _0x1e74cc.jsxs(_0xb824e, {
            size: "sm",
            onClick: () => _0x2e8f0a(true),
            className: "h-8 gap-1.5 text-xs",
            disabled: _0x37f775.length >= 100,
            children: [_0x1e74cc.jsx(_0x6b4ec2, {
              className: "size-3.5"
            }), _0x58ee44("developer.slashCommandsTab.newCommand")]
          })]
        }), _0x2aef98 && _0x1e74cc.jsx(_, {
          onSubmit: async (_0x1ebd83, _0x4c8193) => {
            await _0x792a6d(_0x50c2ce.id, _0x1ebd83, _0x4c8193);
            _0x2e8f0a(false);
            _0x22788a();
          },
          onCancel: () => _0x2e8f0a(false)
        }), _0x37f775.length !== 0 || _0x2aef98 ? _0x1e74cc.jsx("div", {
          className: "rounded-xl border border-border-default/50 bg-surface-raised/30 overflow-hidden divide-y divide-border-default/50",
          children: _0x37f775.map(_0x1c2258 => _0x1e74cc.jsx(z, {
            command: _0x1c2258,
            onDelete: _0x1e59ac => _0x49a43b(_0x1e59ac),
            onSave: async (_0x4d7810, _0x5438e1) => {
              await _0x2cd226(_0x50c2ce.id, _0x1c2258.id, _0x4d7810, _0x5438e1);
              _0x22788a();
            }
          }, _0x1c2258.id))
        }) : _0x1e74cc.jsxs("div", {
          className: "flex flex-col items-center justify-center py-16 text-center",
          children: [_0x1e74cc.jsx("div", {
            className: "size-14 rounded-2xl bg-surface-overlay/50 flex items-center justify-center mb-4",
            children: _0x1e74cc.jsx(_0x49705c, {
              icon: "solar:command-bold-duotone",
              className: "size-7 text-text-muted"
            })
          }), _0x1e74cc.jsx("h3", {
            className: "text-base font-semibold text-text-secondary mb-1",
            children: _0x58ee44("developer.slashCommandsTab.noCommands")
          }), _0x1e74cc.jsx("p", {
            className: "text-sm text-text-muted max-w-sm",
            children: _0x58ee44("developer.slashCommandsTab.noCommandsDesc")
          })]
        }), _0x1e74cc.jsx(_0x3ac32f, {
          open: !!_0x520613,
          onOpenChange: _0xb89574 => {
            if (!_0xb89574) {
              _0x49a43b(null);
            }
          },
          title: _0x58ee44("developer.slashCommandsTab.deleteTitle"),
          description: _0x58ee44("developer.slashCommandsTab.deleteDesc", {
            name: _0x520613?.name || ""
          }),
          confirmText: _0x58ee44("developer.slashCommandsTab.delete"),
          onConfirm: async () => {
            if (_0x520613) {
              try {
                await _0xe1d4c5(_0x50c2ce.id, _0x520613.id);
                _0x49a43b(null);
                _0x22788a();
              } catch {}
            }
          },
          variant: "danger",
          icon: _0x1e74cc.jsx(_0x5730c5, {
            className: "size-5 text-red-400"
          })
        })]
      });
    }
  } else {
    return _0x1e74cc.jsx("div", {
      className: "flex items-center justify-center py-20",
      children: _0x1e74cc.jsx("div", {
        className: "size-8 animate-spin rounded-full border-2 border-border-default border-t-accent-primary"
      })
    });
  }
}
export { L as default };