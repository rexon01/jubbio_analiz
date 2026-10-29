import { R as _0x4f0ee9, b as _0x1197cb, r as _0x39340d, d$ as _0x29f6bb, j as _0x53445f, I as _0x156497 } from "./index-cQfEKR1W.js";
import { A as _0x19eaaf, a as _0x468848, b as _0x33f307 } from "./avatar-C-4BWxT3.js";
import { D as _0x526df3, a as _0x177390, c as _0x94fd0e, d as _0x241084 } from "./dialog-BMMpM7PR.js";
import { L as _0x58f8c9 } from "./loader-circle-CTtxa1g9.js";
const u = _0x4f0ee9.memo(({
  open: _0x5e4a13,
  onClose: _0x28ca34,
  guildId: _0x1e1b3c,
  guildName: _0x5a4b9d,
  guildAvatarUrl: _0x5a98dd,
  guildSplashUrl: _0x39d00f,
  guildDescription: _0x5b271e,
  guildMemberCount: _0x234a38,
  guildOnlineCount: _0x2b46a2,
  questions: _0x292327,
  pending: _0x27add7
}) => {
  const {
    t: _0x50b243
  } = _0x1197cb();
  const [_0x3fb0f3, _0x2a2d6a] = _0x39340d.useState(() => {
    const _0x4132e7 = {};
    _0x292327.forEach(_0x36fafa => {
      _0x4132e7[_0x36fafa.id] = "";
    });
    return _0x4132e7;
  });
  const [_0x27a7a3, _0x4d8b3e] = _0x39340d.useState(false);
  const [_0x10b57e, _0x37a6bb] = _0x39340d.useState(false);
  const _0xc43d06 = !_0x292327.some(_0x760130 => _0x760130.required && !_0x3fb0f3[_0x760130.id]?.trim());
  const _0x5271aa = _0x5a4b9d.slice(0, 2).toUpperCase();
  const _0x3a9ef0 = _0x39340d.useCallback(async () => {
    if (_0xc43d06 && !_0x27a7a3) {
      try {
        _0x4d8b3e(true);
        const _0x3864a5 = _0x292327.map(_0x5df4d2 => ({
          question_id: _0x5df4d2.id,
          question: _0x5df4d2.question,
          answer: _0x3fb0f3[_0x5df4d2.id]?.trim() || ""
        })).filter(_0x2396d9 => _0x2396d9.answer);
        await _0x29f6bb(_0x1e1b3c, _0x3864a5);
        _0x37a6bb(true);
      } catch {} finally {
        _0x4d8b3e(false);
      }
    }
  }, [_0x1e1b3c, _0x292327, _0x3fb0f3, _0xc43d06, _0x27a7a3]);
  const _0x26b4a9 = _0x39340d.useCallback(_0x1a9c1f => {
    if (!_0x1a9c1f) {
      _0x28ca34();
    }
  }, [_0x28ca34]);
  if (_0x27add7) {
    return _0x53445f.jsx(_0x526df3, {
      open: _0x5e4a13,
      onOpenChange: _0x26b4a9,
      children: _0x53445f.jsxs(_0x177390, {
        className: "sm:max-w-sm p-0 gap-0 bg-transparent border-0 shadow-none overflow-hidden",
        children: [_0x53445f.jsx(_0x94fd0e, {
          className: "sr-only",
          children: _0x50b243("invite.modal.applicationPendingTitle", "Application Pending")
        }), _0x53445f.jsx(_0x241084, {
          className: "sr-only",
          children: _0x5a4b9d
        }), _0x53445f.jsx("div", {
          className: "rounded-2xl border border-border-default bg-surface-raised shadow-xl shadow-black/10 overflow-hidden",
          children: _0x53445f.jsxs("div", {
            className: "px-6 py-12 flex flex-col items-center gap-3 text-center",
            children: [_0x53445f.jsx("div", {
              className: "size-16 rounded-full bg-blue-500/15 flex items-center justify-center",
              children: _0x53445f.jsx(_0x156497, {
                icon: "solar:clock-circle-bold-duotone",
                className: "size-8 text-blue-400"
              })
            }), _0x53445f.jsx("h3", {
              className: "text-base font-semibold text-text-primary",
              children: _0x50b243("invite.modal.applicationPendingTitle", "Application Pending")
            }), _0x53445f.jsx("p", {
              className: "text-sm text-text-tertiary max-w-xs",
              children: _0x50b243("invite.modal.applicationPendingDesc", "You already have a pending application for this server. Please wait for it to be reviewed.")
            }), _0x53445f.jsx("button", {
              onClick: _0x28ca34,
              className: "mt-3 h-10 px-8 rounded-xl text-sm font-medium bg-surface-inset/40 border border-border-subtle text-text-secondary hover:bg-interactive-muted transition-colors cursor-pointer",
              children: _0x50b243("invite.modal.close", "Close")
            })]
          })
        })]
      })
    });
  } else if (_0x10b57e) {
    return _0x53445f.jsx(_0x526df3, {
      open: _0x5e4a13,
      onOpenChange: _0x26b4a9,
      children: _0x53445f.jsxs(_0x177390, {
        className: "sm:max-w-sm p-0 gap-0 bg-transparent border-0 shadow-none overflow-hidden",
        children: [_0x53445f.jsx(_0x94fd0e, {
          className: "sr-only",
          children: _0x50b243("invite.modal.applicationSent", "Application Sent!")
        }), _0x53445f.jsx(_0x241084, {
          className: "sr-only",
          children: _0x5a4b9d
        }), _0x53445f.jsx("div", {
          className: "rounded-2xl border border-border-default bg-surface-raised shadow-xl shadow-black/10 overflow-hidden",
          children: _0x53445f.jsxs("div", {
            className: "px-6 py-12 flex flex-col items-center gap-3 text-center",
            children: [_0x53445f.jsx("div", {
              className: "size-16 rounded-full bg-emerald-500/15 flex items-center justify-center",
              children: _0x53445f.jsx(_0x156497, {
                icon: "solar:check-circle-bold-duotone",
                className: "size-8 text-emerald-400"
              })
            }), _0x53445f.jsx("h3", {
              className: "text-base font-semibold text-text-primary",
              children: _0x50b243("invite.modal.applicationSent", "Application Sent!")
            }), _0x53445f.jsx("p", {
              className: "text-sm text-text-tertiary max-w-xs",
              children: _0x50b243("invite.modal.applicationSentDesc", "Your application has been submitted. You will be notified once it is reviewed.")
            }), _0x53445f.jsx("button", {
              onClick: _0x28ca34,
              className: "mt-3 h-10 px-8 rounded-xl text-sm font-medium bg-surface-inset/40 border border-border-subtle text-text-secondary hover:bg-interactive-muted transition-colors cursor-pointer",
              children: _0x50b243("invite.modal.close", "Close")
            })]
          })
        })]
      })
    });
  } else {
    return _0x53445f.jsx(_0x526df3, {
      open: _0x5e4a13,
      onOpenChange: _0x26b4a9,
      children: _0x53445f.jsxs(_0x177390, {
        className: "p-0 gap-0 bg-transparent border-0 shadow-none sm:max-w-4xl max-h-[85dvh] overflow-hidden",
        children: [_0x53445f.jsx(_0x94fd0e, {
          className: "sr-only",
          children: _0x50b243("invite.modal.applicationForm", "Application Form")
        }), _0x53445f.jsx(_0x241084, {
          className: "sr-only",
          children: _0x5a4b9d
        }), _0x53445f.jsx("div", {
          className: "rounded-2xl border border-border-default bg-surface-raised shadow-xl shadow-black/10 overflow-hidden",
          children: _0x53445f.jsxs("div", {
            className: "flex flex-col md:flex-row md:min-h-[460px] max-h-[85dvh]",
            children: [_0x53445f.jsxs("div", {
              className: "md:w-[45%] shrink-0 relative bg-surface-base/50 border-b md:border-b-0 md:border-r border-border-default p-6 md:p-8 flex flex-col overflow-hidden",
              children: [_0x39d00f && _0x53445f.jsxs(_0x53445f.Fragment, {
                children: [_0x53445f.jsx("img", {
                  src: _0x39d00f,
                  alt: "",
                  className: "absolute inset-0 w-full h-full object-cover opacity-50 blur-sm"
                }), _0x53445f.jsx("div", {
                  className: "absolute inset-0 bg-surface-base/60"
                })]
              }), _0x53445f.jsxs("div", {
                className: "relative flex-1 flex flex-col items-center justify-center py-4",
                children: [_0x53445f.jsx(_0x19eaaf, {
                  className: "size-20 rounded-2xl ring-2 ring-border-subtle mb-4",
                  children: _0x5a98dd ? _0x53445f.jsx(_0x468848, {
                    src: _0x5a98dd,
                    className: "rounded-2xl"
                  }) : _0x53445f.jsx(_0x33f307, {
                    className: "rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 text-lg font-bold text-text-tertiary",
                    children: _0x5271aa
                  })
                }), _0x53445f.jsx("h2", {
                  className: "text-lg font-bold text-text-primary text-center",
                  children: _0x5a4b9d
                }), _0x5b271e && _0x53445f.jsx("p", {
                  className: "text-sm text-text-tertiary text-center mt-2 line-clamp-3 max-w-[280px]",
                  children: _0x5b271e
                }), (_0x234a38 || _0x2b46a2) && _0x53445f.jsxs("div", {
                  className: "flex items-center gap-3 mt-4",
                  children: [_0x2b46a2 !== undefined && _0x2b46a2 > 0 && _0x53445f.jsxs("div", {
                    className: "flex items-center gap-1.5 text-xs text-text-muted",
                    children: [_0x53445f.jsx("span", {
                      className: "size-2 rounded-full bg-emerald-400"
                    }), _0x53445f.jsxs("span", {
                      children: [_0x2b46a2.toLocaleString(), " ", _0x50b243("invite.modal.online", "online")]
                    })]
                  }), _0x234a38 !== undefined && _0x234a38 > 0 && _0x53445f.jsxs("div", {
                    className: "flex items-center gap-1.5 text-xs text-text-muted",
                    children: [_0x53445f.jsx("span", {
                      className: "size-2 rounded-full bg-surface-inset"
                    }), _0x53445f.jsxs("span", {
                      children: [_0x234a38.toLocaleString(), " ", _0x50b243("invite.modal.members", "members")]
                    })]
                  })]
                })]
              }), _0x53445f.jsx("div", {
                className: "relative mt-auto pt-4",
                children: _0x53445f.jsxs("p", {
                  className: "text-[11px] text-text-muted flex items-start gap-1.5",
                  children: [_0x53445f.jsx(_0x156497, {
                    icon: "solar:info-circle-bold-duotone",
                    className: "size-3.5 shrink-0 mt-0.5"
                  }), _0x53445f.jsx("span", {
                    children: _0x50b243("invite.modal.applicationHint", "Your application will be reviewed by the server moderators.")
                  })]
                })
              })]
            }), _0x53445f.jsxs("div", {
              className: "flex-1 p-6 md:p-8 flex flex-col min-h-0",
              children: [_0x53445f.jsxs("div", {
                className: "mb-4",
                children: [_0x53445f.jsx("h3", {
                  className: "text-base font-semibold text-text-primary",
                  children: _0x50b243("invite.modal.applicationForm", "Application Form")
                }), _0x53445f.jsx("p", {
                  className: "text-sm text-text-muted mt-1",
                  children: _0x50b243("invite.modal.applicationFormDesc", "Answer the questions below to apply.")
                })]
              }), _0x53445f.jsx("div", {
                className: "flex-1 overflow-y-auto -mx-1 px-1 space-y-4 scrollbar-thin",
                children: _0x292327.sort((_0xd4508b, _0x8aeef9) => _0xd4508b.position - _0x8aeef9.position).map((_0x144c62, _0x44a33e) => _0x53445f.jsxs("div", {
                  className: "space-y-1.5",
                  children: [_0x53445f.jsxs("label", {
                    className: "text-sm font-medium text-text-secondary flex items-center gap-1.5",
                    children: [_0x53445f.jsxs("span", {
                      className: "text-xs text-text-muted font-mono",
                      children: [_0x44a33e + 1, "."]
                    }), _0x144c62.question, _0x144c62.required ? _0x53445f.jsx("span", {
                      className: "text-amber-500 text-[10px] font-semibold uppercase",
                      children: "*"
                    }) : _0x53445f.jsxs("span", {
                      className: "text-[10px] text-text-muted font-medium",
                      children: ["(", _0x50b243("serverSettings.onboarding.optional", "Optional"), ")"]
                    })]
                  }), _0x53445f.jsx("textarea", {
                    value: _0x3fb0f3[_0x144c62.id] || "",
                    onChange: _0x3589d8 => _0x2a2d6a(_0x1b12b2 => ({
                      ..._0x1b12b2,
                      [_0x144c62.id]: _0x3589d8.target.value.slice(0, 1000)
                    })),
                    placeholder: _0x144c62.placeholder || _0x50b243("invite.modal.answerPlaceholder", "Type your answer..."),
                    maxLength: 1000,
                    rows: 3,
                    className: "w-full rounded-xl border border-border-default bg-surface-base/60 px-3.5 py-2.5 text-sm text-text-secondary placeholder:text-text-muted outline-none focus:border-accent-primary/40 focus:ring-1 focus:ring-accent-primary/20 resize-none transition-colors"
                  }), _0x53445f.jsx("div", {
                    className: "flex justify-end mt-0.5",
                    children: _0x53445f.jsxs("span", {
                      className: "text-[10px] " + ((_0x3fb0f3[_0x144c62.id]?.length || 0) > 900 ? "text-amber-500" : "text-text-muted/50"),
                      children: [_0x3fb0f3[_0x144c62.id]?.length || 0, "/1000"]
                    })
                  })]
                }, _0x144c62.id))
              }), _0x53445f.jsx("div", {
                className: "pt-5 mt-auto border-t border-border-default/50",
                children: _0x53445f.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [_0x53445f.jsx("button", {
                    type: "button",
                    onClick: _0x28ca34,
                    className: "flex-1 h-11 rounded-xl border border-border-default hover:bg-interactive-muted text-text-secondary text-sm font-medium transition-colors cursor-pointer",
                    children: _0x50b243("invite.modal.cancel", "Cancel")
                  }), _0x53445f.jsx("button", {
                    type: "button",
                    onClick: _0x3a9ef0,
                    disabled: !_0xc43d06 || _0x27a7a3,
                    className: "flex-1 h-11 rounded-xl bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer",
                    children: _0x27a7a3 ? _0x53445f.jsxs(_0x53445f.Fragment, {
                      children: [_0x53445f.jsx(_0x58f8c9, {
                        className: "size-4 animate-spin"
                      }), _0x50b243("invite.modal.submitting", "Submitting...")]
                    }) : _0x53445f.jsxs(_0x53445f.Fragment, {
                      children: [_0x53445f.jsx(_0x156497, {
                        icon: "solar:arrow-right-bold",
                        className: "size-4"
                      }), _0x50b243("invite.modal.submitApplication", "Submit Application")]
                    })
                  })]
                })
              })]
            })]
          })
        })]
      })
    });
  }
});
export { u as A };