import { b as _0xbcd133, C as _0x380d64, d as _0x198c61, x as _0x3fced0, r, j as _0x63488b, E as _0x94fecf, I as _0x155b26, B as _0x1ddb4c, X as _0x333b25, L as _0x4fae54, _ as _0x3207f8, P as _0x1d1067 } from "./index-cQfEKR1W.js";
import { I as _0x194050 } from "./input-AMyERYwJ.js";
import { L as _0x258127 } from "./label-ODyS97Ju.js";
import { T as _0x295496 } from "./textarea-CIeIrkot.js";
import { S as _0x468c29, a as _0x175e92, b as _0x5bddde, c as _0x5ceaba, d as _0x1b563b } from "./select-DQjjzSZW.js";
import { p as _0x11d28a } from "./partnership-CCggKLDk.js";
import { A as _0x545ccd } from "./arrow-left-B3FhifN2.js";
import { P as _0x219600 } from "./plus-B7c2Px8R.js";
import { L as _0x4e2095 } from "./loader-circle-CTtxa1g9.js";
import "./index-Oyyh46KT.js";
const F = r.lazy(() => _0x3207f8(() => import("./Aurora-QHjOwBoE.js"), [], import.meta.url));
const E = () => {
  const {
    t: _0x3ef0e9
  } = _0xbcd133();
  _0x380d64(_0x3ef0e9("partnership.apply.pageTitle"), _0x3ef0e9("partnership.apply.pageDescription"), "");
  const _0x51cbab = _0x198c61();
  const _0x1c1186 = _0x3fced0();
  const [_0xac82a7, _0x32acdd] = r.useState(false);
  const [_0x4f2450, _0x4e6e95] = r.useState(false);
  const [_0x2b658e, _0x3bafe6] = r.useState({});
  const [_0x45ee4c, _0x55438b] = r.useState({});
  const [_0x34653c, _0xbd7390] = r.useState({
    partnerType: "",
    platforms: [],
    totalFollowers: "",
    hasJubbioServer: "",
    serverId: "",
    contactEmail: "",
    socialLinks: [""],
    whyPartner: ""
  });
  const _0x1f07f1 = [{
    value: "community",
    label: _0x3ef0e9("partnership.types.community.title"),
    description: _0x3ef0e9("partnership.types.community.description"),
    icon: "solar:users-group-rounded-bold-duotone",
    gradient: "from-blue-500 to-cyan-500"
  }, {
    value: "creator",
    label: _0x3ef0e9("partnership.types.creator.title"),
    description: _0x3ef0e9("partnership.types.creator.description"),
    icon: "solar:star-bold-duotone",
    gradient: "from-purple-500 to-pink-500"
  }, {
    value: "corporate",
    label: _0x3ef0e9("partnership.types.corporate.title"),
    description: _0x3ef0e9("partnership.types.corporate.description"),
    icon: "solar:global-bold-duotone",
    gradient: "from-[#F59E0B] to-green-500"
  }];
  const _0x54ca57 = [{
    value: "yes",
    label: _0x3ef0e9("common.yes"),
    description: _0x3ef0e9("partnership.apply.hasServerYes"),
    icon: "solar:check-circle-bold-duotone",
    gradient: "from-green-500 to-emerald-500"
  }, {
    value: "no",
    label: _0x3ef0e9("common.no"),
    description: _0x3ef0e9("partnership.apply.hasServerNo"),
    icon: "close",
    gradient: "from-white/[0.03] to-white/[0.06]"
  }];
  const _0x5fcc3b = [{
    value: "youtube",
    label: "YouTube",
    color: "bg-red-500"
  }, {
    value: "twitch",
    label: "Twitch",
    color: "bg-purple-500"
  }, {
    value: "instagram",
    label: "Instagram",
    color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400"
  }, {
    value: "tiktok",
    label: "TikTok",
    color: "bg-black"
  }, {
    value: "twitter",
    label: "X (Twitter)",
    color: "bg-white/[0.03]"
  }, {
    value: "discord",
    label: "Discord",
    color: "bg-indigo-500"
  }, {
    value: "kick",
    label: "Kick",
    color: "bg-green-500"
  }, {
    value: "other",
    label: _0x3ef0e9("partnership.apply.otherPlatform"),
    color: "bg-white/[0.03]"
  }];
  const _0x10627f = [{
    value: "1000-5000",
    label: "1.000 - 5.000",
    description: _0x3ef0e9("partnership.apply.followers.beginner"),
    gradient: "from-sky-400 to-blue-500",
    avgCount: 3000
  }, {
    value: "5000-10000",
    label: "5.000 - 10.000",
    description: _0x3ef0e9("partnership.apply.followers.growing"),
    gradient: "from-emerald-400 to-teal-500",
    avgCount: 7500
  }, {
    value: "10000-50000",
    label: "10.000 - 50.000",
    description: _0x3ef0e9("partnership.apply.followers.medium"),
    gradient: "from-amber-400 to-orange-500",
    avgCount: 30000
  }, {
    value: "50000-100000",
    label: "50.000 - 100.000",
    description: _0x3ef0e9("partnership.apply.followers.large"),
    gradient: "from-rose-400 to-pink-500",
    avgCount: 75000
  }, {
    value: "100000-500000",
    label: "100.000 - 500.000",
    description: _0x3ef0e9("partnership.apply.followers.veryLarge"),
    gradient: "from-violet-400 to-purple-500",
    avgCount: 300000
  }, {
    value: "500000+",
    label: "500.000+",
    description: _0x3ef0e9("partnership.apply.followers.mega"),
    gradient: "from-[#F59E0B] to-green-500",
    avgCount: 500000
  }];
  const _0x19b8bf = _0x2229bf => {
    const {
      name: _0x4cfc30,
      value: _0x1148eb
    } = _0x2229bf.target;
    _0xbd7390(_0x5f21cc => ({
      ..._0x5f21cc,
      [_0x4cfc30]: _0x1148eb
    }));
  };
  const _0x739a50 = (_0x30c9d2, _0x8094e3) => {
    _0xbd7390(_0x148dea => ({
      ..._0x148dea,
      [_0x30c9d2]: _0x8094e3
    }));
  };
  const _0x45f731 = _0x15260f => {
    if (!_0x15260f.trim()) {
      return true;
    }
    try {
      const _0x5d7f9e = new URL(_0x15260f);
      return _0x5d7f9e.protocol === "https:" || _0x5d7f9e.protocol === "http:";
    } catch {
      return false;
    }
  };
  const _0x2a96c8 = (_0x438902, _0x1320b7) => {
    if (_0x1320b7.trim() && !_0x45f731(_0x1320b7)) {
      _0x3bafe6(_0x4b932e => ({
        ..._0x4b932e,
        [_0x438902]: _0x3ef0e9("partnership.apply.invalidUrl")
      }));
    } else {
      _0x3bafe6(_0xedbae3 => {
        const _0x343851 = {
          ..._0xedbae3
        };
        delete _0x343851[_0x438902];
        return _0x343851;
      });
    }
  };
  if (_0x4f2450) {
    return <_0x94fecf showDownloadBar={false} accentColor="#F59E0B"><div className="relative min-h-[80vh] flex items-center justify-center"><div className="relative z-10 text-center p-8 max-w-md mx-auto"><div className="w-20 h-20 rounded-full bg-[#F59E0B]/10 flex items-center justify-center mx-auto mb-6"><_0x155b26 icon="solar:check-circle-bold-duotone" className="h-10 w-10 text-[#F59E0B]" /></div><h1 className="text-3xl font-bold text-white mb-4">{_0x3ef0e9("partnership.apply.successTitle")}</h1><p className="text-white/50 mb-8">{_0x3ef0e9("partnership.apply.successDescription")}</p><_0x1ddb4c onClick={() => _0x51cbab("/partnership")} className="bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold rounded-full px-6"><_0x545ccd className="mr-2 h-4 w-4" />{_0x3ef0e9("partnership.apply.backToPartner")}</_0x1ddb4c></div></div></_0x94fecf>;
  } else {
    return <_0x94fecf showDownloadBar={false} accentColor="#F59E0B">{_0x1c1186 && <div className="absolute inset-x-0 top-0 h-[280px] md:h-[800px] opacity-40 pointer-events-none" style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 60%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 60%, transparent 100%)"
      }}><r.Suspense fallback={null}><F colorStops={["#F59E0B", "#F97316", "#DC2626"]} amplitude={1} blend={0.6} speed={0.3} /></r.Suspense></div>}<div className="relative mx-auto max-w-xl px-4 sm:px-6 pt-36 md:pt-44 pb-24"><div className="mb-10"><h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{_0x3ef0e9("partnership.apply.formTitle")}</h1><p className="text-sm text-white/50 leading-relaxed max-w-md">{_0x3ef0e9("partnership.apply.formDescription")}</p></div><form onSubmit={async _0x301d7d => {
          _0x301d7d.preventDefault();
          _0x55438b({});
          const _0x3da754 = {};
          let _0x2bdd9b = null;
          if (!_0x34653c.partnerType) {
            _0x3da754.partnerType = true;
            _0x2bdd9b ||= "field-partnerType";
          }
          if (_0x34653c.platforms.length === 0) {
            _0x3da754.platforms = true;
            _0x2bdd9b ||= "field-platforms";
          }
          if (!_0x34653c.totalFollowers) {
            _0x3da754.totalFollowers = true;
            _0x2bdd9b ||= "field-totalFollowers";
          }
          if (!_0x34653c.hasJubbioServer) {
            _0x3da754.hasJubbioServer = true;
            _0x2bdd9b ||= "field-hasJubbioServer";
          }
          if (_0x34653c.hasJubbioServer === "yes" && !_0x34653c.serverId) {
            _0x3da754.serverId = true;
            _0x2bdd9b ||= "serverId";
          }
          if (!_0x34653c.contactEmail) {
            _0x3da754.contactEmail = true;
            _0x2bdd9b ||= "contactEmail";
          }
          const _0x1225b4 = _0x34653c.socialLinks.map((_0x10655f, _0x13f279) => ({
            link: _0x10655f,
            index: _0x13f279
          })).filter(({
            link: _0x2d11a0
          }) => _0x2d11a0.trim() && !_0x45f731(_0x2d11a0));
          if (_0x1225b4.length > 0) {
            _0x3da754.socialLinks = true;
            const _0x2e827a = {};
            _0x1225b4.forEach(({
              index: _0x5ec2ab
            }) => {
              _0x2e827a[_0x5ec2ab] = _0x3ef0e9("partnership.apply.invalidUrl");
            });
            _0x3bafe6(_0x2e827a);
            _0x2bdd9b ||= "field-socialLinks";
          }
          if (Object.keys(_0x3da754).length > 0) {
            _0x55438b(_0x3da754);
            _0x1d1067.error(_0x3ef0e9("partnership.apply.fillRequired"));
            if (_0x2bdd9b) {
              (_0x21e5aa => {
                const _0xf607ec = document.getElementById(_0x21e5aa);
                if (_0xf607ec) {
                  _0xf607ec.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                  });
                  if (_0xf607ec.tagName === "INPUT" || _0xf607ec.tagName === "TEXTAREA") {
                    setTimeout(() => _0xf607ec.focus(), 500);
                  }
                }
              })(_0x2bdd9b);
            }
            return;
          }
          _0x32acdd(true);
          try {
            const _0x1290f6 = {
              community: "community",
              creator: "content_creator",
              corporate: "corporate"
            };
            const _0x4808c2 = _0x10627f.find(_0x25a007 => _0x25a007.value === _0x34653c.totalFollowers);
            const _0x2318aa = _0x4808c2?.avgCount || 0;
            const _0x469c8b = _0x34653c.socialLinks.filter(_0x3f416d => _0x3f416d.trim() !== "");
            const _0x46c6e3 = {
              partner_type: _0x1290f6[_0x34653c.partnerType],
              platforms: _0x34653c.platforms,
              follower_count: _0x2318aa,
              has_jubbio_guild: _0x34653c.hasJubbioServer === "yes",
              email: _0x34653c.contactEmail
            };
            if (_0x34653c.hasJubbioServer === "yes" && _0x34653c.serverId) {
              _0x46c6e3.guild_id = _0x34653c.serverId;
            }
            if (_0x469c8b.length > 0) {
              _0x46c6e3.social_links = _0x469c8b.slice(0, 10);
            }
            if (_0x34653c.whyPartner.trim()) {
              _0x46c6e3.reason = _0x34653c.whyPartner.slice(0, 2000);
            }
            await _0x11d28a.apply(_0x46c6e3);
            _0x4e6e95(true);
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          } catch {} finally {
            _0x32acdd(false);
          }
        }} className="space-y-6"><div className="space-y-5"><div className="flex items-center gap-3 mb-3"><h2 className="text-lg font-semibold text-white">{_0x3ef0e9("partnership.apply.partnerInfo")}</h2></div><div id="field-partnerType" className="space-y-2"><_0x258127 className="text-sm font-medium text-white/40">{_0x3ef0e9("partnership.apply.selectPartnerType")} <span className="text-red-400">*</span></_0x258127><_0x468c29 value={_0x34653c.partnerType} onValueChange={_0x299ee5 => {
                _0x739a50("partnerType", _0x299ee5);
                _0x55438b(_0x221cf5 => ({
                  ..._0x221cf5,
                  partnerType: false
                }));
              }}><_0x175e92 className={"w-full !h-12 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-white [&>span]:py-0 " + (_0x45ee4c.partnerType ? "border-red-500 ring-1 ring-red-500/30" : "")}><_0x5bddde placeholder={_0x3ef0e9("partnership.apply.selectPartnerTypePlaceholder")}>{_0x34653c.partnerType && (() => {
                      const _0x39124d = _0x1f07f1.find(_0x36efb4 => _0x36efb4.value === _0x34653c.partnerType);
                      if (_0x39124d) {
                        return <div className="flex items-center gap-3"><div className={"w-7 h-7 rounded-lg bg-gradient-to-br " + _0x39124d.gradient + " flex items-center justify-center"}><_0x155b26 icon={_0x39124d.icon} className="h-4 w-4 text-white" /></div><div className="flex flex-col items-start"><span className="font-medium text-sm">{_0x39124d.label}</span><span className="text-xs text-white/50">{_0x39124d.description}</span></div></div>;
                      } else {
                        return null;
                      }
                    })()}</_0x5bddde></_0x175e92><_0x5ceaba className="rounded-xl border border-white/[0.08] bg-[#1a1a1a]">{_0x1f07f1.map(_0x4cc4b5 => <_0x1b563b value={_0x4cc4b5.value} className="py-3 px-3" key={_0x4cc4b5.value}><div className="flex items-center gap-3"><div className={"w-8 h-8 rounded-lg bg-gradient-to-br " + _0x4cc4b5.gradient + " flex items-center justify-center"}><_0x155b26 icon={_0x4cc4b5.icon} className="h-4 w-4 text-white" /></div><div className="flex flex-col items-start"><span className="font-medium">{_0x4cc4b5.label}</span><span className="text-xs text-white/50">{_0x4cc4b5.description}</span></div></div></_0x1b563b>)}</_0x5ceaba></_0x468c29></div><div id="field-platforms" className="space-y-3"><_0x258127 className="text-sm font-medium text-white/40">{_0x3ef0e9("partnership.apply.activePlatforms")} <span className="text-red-400">*</span></_0x258127><div className={"flex flex-wrap gap-2 p-2 rounded-lg " + (_0x45ee4c.platforms ? "ring-1 ring-red-500/50 bg-red-500/5" : "")}>{_0x5fcc3b.map(_0x25931a => {
                  const _0x2e66c0 = _0x34653c.platforms.includes(_0x25931a.value);
                  return <button type="button" onClick={() => {
                    (_0x39fd09 => {
                      _0xbd7390(_0x31b365 => {
                        const _0x3b1ffc = _0x31b365.platforms.includes(_0x39fd09) ? _0x31b365.platforms.filter(_0x4a0335 => _0x4a0335 !== _0x39fd09) : [..._0x31b365.platforms, _0x39fd09];
                        return {
                          ..._0x31b365,
                          platforms: _0x3b1ffc
                        };
                      });
                    })(_0x25931a.value);
                    _0x55438b(_0x2cdc54 => ({
                      ..._0x2cdc54,
                      platforms: false
                    }));
                  }} className={"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all duration-200 " + (_0x2e66c0 ? "bg-[#F59E0B]/10 text-[#F59E0B] ring-1 ring-[#F59E0B]/30" : "bg-white/[0.03] text-white/50 hover:text-white/70 hover:bg-white/[0.06]")} key={_0x25931a.value}><span className={"w-2 h-2 rounded-full " + _0x25931a.color} />{_0x25931a.label}</button>;
                })}</div><p className="text-xs text-white/30">{_0x3ef0e9("partnership.apply.multipleSelect")}</p></div><div id="field-totalFollowers" className="space-y-2"><_0x258127 className="text-sm font-medium text-white/40">{_0x3ef0e9("partnership.apply.totalFollowers")} <span className="text-red-400">*</span></_0x258127><_0x468c29 value={_0x34653c.totalFollowers} onValueChange={_0x4c859a => {
                _0x739a50("totalFollowers", _0x4c859a);
                _0x55438b(_0x44f1ac => ({
                  ..._0x44f1ac,
                  totalFollowers: false
                }));
              }}><_0x175e92 className={"w-full !h-12 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-white [&>span]:py-0 " + (_0x45ee4c.totalFollowers ? "border-red-500 ring-1 ring-red-500/30" : "")}><_0x5bddde placeholder={_0x3ef0e9("partnership.apply.selectFollowers")}>{_0x34653c.totalFollowers && (() => {
                      const _0x10516b = _0x10627f.find(_0x8e8260 => _0x8e8260.value === _0x34653c.totalFollowers);
                      if (_0x10516b) {
                        return <div className="flex items-center gap-3"><div className={"w-7 h-7 rounded-lg bg-gradient-to-br " + _0x10516b.gradient + " flex items-center justify-center"}><_0x155b26 icon="solar:users-group-rounded-bold-duotone" className="h-4 w-4 text-white" /></div><div className="flex flex-col items-start"><span className="font-medium text-sm">{_0x10516b.label}</span><span className="text-xs text-white/50">{_0x10516b.description}</span></div></div>;
                      } else {
                        return null;
                      }
                    })()}</_0x5bddde></_0x175e92><_0x5ceaba className="rounded-xl border border-white/[0.08] bg-[#1a1a1a]">{_0x10627f.map(_0x35d34e => <_0x1b563b value={_0x35d34e.value} className="py-3 px-3" key={_0x35d34e.value}><div className="flex items-center gap-3"><div className={"w-8 h-8 rounded-lg bg-gradient-to-br " + _0x35d34e.gradient + " flex items-center justify-center"}><_0x155b26 icon="solar:users-group-rounded-bold-duotone" className="h-4 w-4 text-white" /></div><div className="flex flex-col items-start"><span className="font-medium">{_0x35d34e.label}</span><span className="text-xs text-white/50">{_0x35d34e.description}</span></div></div></_0x1b563b>)}</_0x5ceaba></_0x468c29><p className="text-xs text-white/30">{_0x3ef0e9("partnership.apply.totalFollowersHint")}</p></div></div><div className="h-px bg-white/[0.06] my-8" /><div className="space-y-6"><div className="flex items-center gap-3 mb-4"><h2 className="text-xl font-semibold text-white">{_0x3ef0e9("partnership.apply.serverInfo")}</h2></div><div id="field-hasJubbioServer" className="space-y-2"><_0x258127 className="text-sm font-medium text-white/40">{_0x3ef0e9("partnership.apply.hasJubbioServer")} <span className="text-red-400">*</span></_0x258127><_0x468c29 value={_0x34653c.hasJubbioServer} onValueChange={_0x4558ef => {
                _0x739a50("hasJubbioServer", _0x4558ef);
                _0x55438b(_0x2b337c => ({
                  ..._0x2b337c,
                  hasJubbioServer: false
                }));
              }}><_0x175e92 className={"w-full !h-12 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-white [&>span]:py-0 " + (_0x45ee4c.hasJubbioServer ? "border-red-500 ring-1 ring-red-500/30" : "")}><_0x5bddde placeholder={_0x3ef0e9("partnership.apply.select")}>{_0x34653c.hasJubbioServer && (() => {
                      const _0x67995e = _0x54ca57.find(_0xc454a => _0xc454a.value === _0x34653c.hasJubbioServer);
                      if (_0x67995e) {
                        return <div className="flex items-center gap-3"><div className={"w-7 h-7 rounded-lg bg-gradient-to-br " + _0x67995e.gradient + " flex items-center justify-center"}>{_0x67995e.value === "no" ? <_0x333b25 className="h-4 w-4 text-white" /> : <_0x155b26 icon={_0x67995e.icon} className="h-4 w-4 text-white" />}</div><div className="flex flex-col items-start"><span className="font-medium text-sm">{_0x67995e.label}</span><span className="text-xs text-white/50">{_0x67995e.description}</span></div></div>;
                      } else {
                        return null;
                      }
                    })()}</_0x5bddde></_0x175e92><_0x5ceaba className="rounded-xl border border-white/[0.08] bg-[#1a1a1a]">{_0x54ca57.map(_0x1d9e0a => <_0x1b563b value={_0x1d9e0a.value} className="py-3 px-3" key={_0x1d9e0a.value}><div className="flex items-center gap-3"><div className={"w-8 h-8 rounded-lg bg-gradient-to-br " + _0x1d9e0a.gradient + " flex items-center justify-center"}>{_0x1d9e0a.value === "no" ? <_0x333b25 className="h-4 w-4 text-white" /> : <_0x155b26 icon={_0x1d9e0a.icon} className="h-4 w-4 text-white" />}</div><div className="flex flex-col items-start"><span className="font-medium">{_0x1d9e0a.label}</span><span className="text-xs text-white/50">{_0x1d9e0a.description}</span></div></div></_0x1b563b>)}</_0x5ceaba></_0x468c29></div>{_0x34653c.hasJubbioServer === "yes" && <div className="space-y-2"><_0x258127 htmlFor="serverId" className="text-sm font-medium text-white/40">{_0x3ef0e9("partnership.apply.serverId")} <span className="text-red-400">*</span></_0x258127><_0x194050 id="serverId" name="serverId" placeholder={_0x3ef0e9("partnership.apply.serverIdPlaceholder")} value={_0x34653c.serverId} onChange={_0x393dff => {
                _0x19b8bf(_0x393dff);
                _0x55438b(_0x1d9846 => ({
                  ..._0x1d9846,
                  serverId: false
                }));
              }} className={"h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#F59E0B]/50 focus:bg-white/[0.05] " + (_0x45ee4c.serverId ? "border-red-500 ring-1 ring-red-500/30" : "")} /><p className="text-xs text-white/30">{_0x3ef0e9("partnership.apply.serverIdHint")}</p></div>}</div><div className="h-px bg-white/[0.06] my-8" /><div className="space-y-6"><div className="flex items-center gap-3 mb-4"><h2 className="text-xl font-semibold text-white">{_0x3ef0e9("partnership.apply.contactInfo")}</h2></div><div className="space-y-2"><_0x258127 htmlFor="contactEmail" className="text-sm font-medium text-white/40">{_0x3ef0e9("partnership.apply.email")} <span className="text-red-400">*</span></_0x258127><_0x194050 id="contactEmail" name="contactEmail" type="email" placeholder="ornek@email.com" value={_0x34653c.contactEmail} onChange={_0x1c61f8 => {
                _0x19b8bf(_0x1c61f8);
                _0x55438b(_0x22e634 => ({
                  ..._0x22e634,
                  contactEmail: false
                }));
              }} className={"h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#F59E0B]/50 focus:bg-white/[0.05] " + (_0x45ee4c.contactEmail ? "border-red-500 ring-1 ring-red-500/30" : "")} /></div><div id="field-socialLinks" className="space-y-2"><_0x258127 className="text-sm font-medium text-white/40">{_0x3ef0e9("partnership.apply.socialLinks")}</_0x258127><div className="space-y-3">{_0x34653c.socialLinks.map((_0x8ae65c, _0x536f28) => <div className="space-y-1" key={_0x536f28}><div className="flex items-center gap-2"><div className="relative flex-1"><_0x155b26 icon="solar:link-bold-duotone" className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" /><_0x194050 placeholder={_0x536f28 === 0 ? "https://youtube.com/@channel" : "https://instagram.com/account"} value={_0x8ae65c} onChange={_0x40ce09 => ((_0x4ab618, _0x61c664) => {
                        _0xbd7390(_0x4330c2 => {
                          const _0x1e46c4 = [..._0x4330c2.socialLinks];
                          _0x1e46c4[_0x4ab618] = _0x61c664;
                          if (_0x4ab618 === _0x1e46c4.length - 1 && _0x61c664.trim() !== "") {
                            _0x1e46c4.push("");
                          }
                          return {
                            ..._0x4330c2,
                            socialLinks: _0x1e46c4
                          };
                        });
                      })(_0x536f28, _0x40ce09.target.value)} onBlur={() => (_0x1a40ef => {
                        const _0x5b8db2 = _0x34653c.socialLinks[_0x1a40ef];
                        _0x2a96c8(_0x1a40ef, _0x5b8db2);
                        _0xbd7390(_0x539c3d => {
                          if (_0x539c3d.socialLinks[_0x1a40ef].trim() === "" && _0x1a40ef !== _0x539c3d.socialLinks.length - 1 && _0x539c3d.socialLinks.length > 1) {
                            const _0x478012 = _0x539c3d.socialLinks.filter((_0x282c2d, _0x34f8e3) => _0x34f8e3 !== _0x1a40ef);
                            _0x3bafe6(_0x534a99 => {
                              const _0x2b7ea4 = {
                                ..._0x534a99
                              };
                              delete _0x2b7ea4[_0x1a40ef];
                              return _0x2b7ea4;
                            });
                            return {
                              ..._0x539c3d,
                              socialLinks: _0x478012
                            };
                          }
                          return _0x539c3d;
                        });
                      })(_0x536f28)} className={"pl-10 pr-4 h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#F59E0B]/50 focus:bg-white/[0.05] " + (_0x2b658e[_0x536f28] ? "border-red-500/60 focus:border-red-500" : "")} /></div>{_0x34653c.socialLinks.length > 1 && _0x536f28 < _0x34653c.socialLinks.length - 1 && <_0x1ddb4c type="button" variant="ghost" size="icon" onClick={() => (_0x40a98e => {
                      _0xbd7390(_0x297d4e => {
                        if (_0x297d4e.socialLinks.length > 1) {
                          const _0x1b1ade = _0x297d4e.socialLinks.filter((_0x24578b, _0x5ca080) => _0x5ca080 !== _0x40a98e);
                          _0x3bafe6(_0x448fa3 => {
                            const _0x4cd395 = {
                              ..._0x448fa3
                            };
                            delete _0x4cd395[_0x40a98e];
                            const _0x1e5f41 = {};
                            Object.keys(_0x4cd395).forEach(_0x3a806e => {
                              const _0x4d8f66 = parseInt(_0x3a806e);
                              if (_0x4d8f66 > _0x40a98e) {
                                _0x1e5f41[_0x4d8f66 - 1] = _0x4cd395[_0x4d8f66];
                              } else {
                                _0x1e5f41[_0x4d8f66] = _0x4cd395[_0x4d8f66];
                              }
                            });
                            return _0x1e5f41;
                          });
                          return {
                            ..._0x297d4e,
                            socialLinks: _0x1b1ade
                          };
                        }
                        return _0x297d4e;
                      });
                    })(_0x536f28)} className="h-9 w-9 text-white/50 hover:text-red-400 hover:bg-red-500/10"><_0x333b25 className="h-4 w-4" /></_0x1ddb4c>}{_0x536f28 === _0x34653c.socialLinks.length - 1 && _0x8ae65c.trim() === "" && _0x34653c.socialLinks.length > 1 && <div className="w-9" />}</div>{_0x2b658e[_0x536f28] && <p className="text-xs text-red-400 pl-1">{_0x2b658e[_0x536f28]}</p>}</div>)}</div><p className="text-xs text-white/30 mt-1"><_0x219600 className="inline h-3 w-3 mr-1" />{_0x3ef0e9("partnership.apply.socialLinksHint")}</p></div></div><div className="h-px bg-white/[0.06] my-8" /><div className="space-y-6"><div className="flex items-center gap-3 mb-4"><div className="flex flex-col"><h2 className="text-xl font-semibold text-white">{_0x3ef0e9("partnership.apply.motivationTitle")}</h2><span className="text-xs text-white/30">{_0x3ef0e9("common.optional")}</span></div></div><div className="space-y-2"><_0x258127 htmlFor="whyPartner" className="text-sm font-medium text-white/40">{_0x3ef0e9("partnership.apply.whyPartner")}</_0x258127><_0x295496 id="whyPartner" name="whyPartner" placeholder={_0x3ef0e9("partnership.apply.whyPartnerPlaceholder")} value={_0x34653c.whyPartner} onChange={_0x19b8bf} rows={4} className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-all placeholder:text-white/25 focus:border-[#F59E0B]/50 focus:bg-white/[0.05] resize-y" /></div></div><div className="flex flex-col sm:flex-row gap-4 justify-end pt-4"><_0x4fae54 to="/partnership"><_0x1ddb4c type="button" variant="outline" className="w-full sm:w-auto border-white/[0.08] text-white/70 hover:bg-white/[0.03] hover:text-white">{_0x3ef0e9("common.cancel")}</_0x1ddb4c></_0x4fae54><_0x1ddb4c type="submit" disabled={_0xac82a7} className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold rounded-full py-4">{_0xac82a7 ? <_0x63488b.Fragment><_0x4e2095 className="mr-2 h-4 w-4 animate-spin" />{_0x3ef0e9("partnership.apply.submitting")}</_0x63488b.Fragment> : <_0x63488b.Fragment><_0x155b26 icon="solar:plain-bold-duotone" className="mr-2 h-4 w-4" />{_0x3ef0e9("partnership.apply.submit")}</_0x63488b.Fragment>}</_0x1ddb4c></div></form></div></_0x94fecf>;
  }
};
export { E as default };