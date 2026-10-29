import { d as _0x5be2dd, b as _0x36f084, j as _0x1c3ec5, I as _0x1fc583 } from "./index-cQfEKR1W.js";
import { H as _0x3a686e, a as _0xa5d83, D as _0x3cd3eb, P as _0x1b78f9, A as _0x5d417a, C as _0x326911, I as _0x37db94, b as _0x2233d5 } from "./DocComponents-BWAUshvB.js";
import { C as _0x52ce1a } from "./CodeBlock-B4seo9QW.js";
import "./clipboard-BQ9qambq.js";
import "./loader-circle-CTtxa1g9.js";
import "./prism-2cMp9j73.js";
function b() {
  const _0x542f29 = _0x5be2dd();
  const {
    t: _0x41c13e
  } = _0x36f084("docs");
  return <_0x1c3ec5.Fragment><div className="mb-10"><_0x3a686e>{_0x41c13e("intro.title")}</_0x3a686e><p className="text-lg text-text-tertiary leading-relaxed max-w-2xl">{_0x41c13e("intro.description")}</p></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"><button onClick={() => _0x542f29("/dev/docs/bot-api")} className="group flex items-center gap-4 p-4 rounded-xl border border-border-default bg-surface-overlay/20 hover:bg-surface-overlay/50 hover:border-emerald-500/30 transition-all text-left cursor-pointer"><div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15"><_0x1fc583 icon="solar:global-bold-duotone" className="size-5 text-emerald-400" /></div><div className="min-w-0"><div className="text-sm font-semibold text-text-primary group-hover:text-emerald-400 transition-colors">REST API</div><div className="text-xs text-text-muted mt-0.5">{_0x41c13e("intro.restApiCardDesc")}</div></div></button><button onClick={() => _0x542f29("/dev/docs/js/client")} className="group flex items-center gap-4 p-4 rounded-xl border border-border-default bg-surface-overlay/20 hover:bg-surface-overlay/50 hover:border-blue-500/30 transition-all text-left cursor-pointer"><div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/15"><_0x1fc583 icon="solar:box-bold-duotone" className="size-5 text-blue-400" /></div><div className="min-w-0"><div className="text-sm font-semibold text-text-primary group-hover:text-blue-400 transition-colors">jubbio.js</div><div className="text-xs text-text-muted mt-0.5">Node.js / TypeScript SDK</div></div></button></div><_0xa5d83 id="ne-yapabilirsin">{_0x41c13e("intro.whatCanYouDo")}</_0xa5d83><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">{[{
        icon: "solar:chat-square-bold-duotone",
        iconCls: "bg-blue-500/15",
        iconText: "text-blue-400",
        label: _0x41c13e("intro.botDev"),
        desc: _0x41c13e("intro.botDevDesc")
      }, {
        icon: "solar:slash-circle-bold-duotone",
        iconCls: "bg-purple-500/15",
        iconText: "text-purple-400",
        label: _0x41c13e("intro.slashCommands"),
        desc: _0x41c13e("intro.slashCommandsDesc")
      }, {
        icon: "solar:puzzle-bold-duotone",
        iconCls: "bg-amber-500/15",
        iconText: "text-amber-400",
        label: _0x41c13e("intro.interactiveComponents"),
        desc: _0x41c13e("intro.interactiveComponentsDesc")
      }, {
        icon: "solar:microphone-bold-duotone",
        iconCls: "bg-emerald-500/15",
        iconText: "text-emerald-400",
        label: _0x41c13e("intro.voiceSupport"),
        desc: _0x41c13e("intro.voiceSupportDesc")
      }, {
        icon: "solar:link-bold-duotone",
        iconCls: "bg-sky-500/15",
        iconText: "text-sky-400",
        label: _0x41c13e("intro.webhooksItem"),
        desc: _0x41c13e("intro.webhooksItemDesc")
      }, {
        icon: "solar:shield-bold-duotone",
        iconCls: "bg-rose-500/15",
        iconText: "text-rose-400",
        label: _0x41c13e("intro.oauth2Integration"),
        desc: _0x41c13e("intro.oauth2IntegrationDesc")
      }].map(({
        icon: _0x5f02c9,
        iconCls: _0x38e8b1,
        iconText: _0x52c5a5,
        label: _0x1501ac,
        desc: _0x1fd6a7
      }) => <div className="flex items-start gap-3 p-3.5 rounded-lg border border-border-default bg-surface-overlay/10" key={_0x1501ac}><div className={"flex size-8 shrink-0 items-center justify-center rounded-md " + _0x38e8b1}><_0x1fc583 icon={_0x5f02c9} className={"size-4 " + _0x52c5a5} /></div><div className="min-w-0"><div className="text-[13px] font-medium text-text-secondary">{_0x1501ac}</div><div className="text-xs text-text-muted mt-0.5">{_0x1fd6a7}</div></div></div>)}</div><_0x3cd3eb /><_0xa5d83 id="api-base-url">Base URL</_0xa5d83><_0x1b78f9>{_0x41c13e("intro.apiBaseUrlDesc")}</_0x1b78f9><_0x52ce1a code={_0x5d417a} language="text" title="Base URL" /><_0xa5d83 id="kimlik-dogrulama">{_0x41c13e("intro.authTitle")}</_0xa5d83><_0x1b78f9>{_0x41c13e("intro.authDesc")}</_0x1b78f9><_0x52ce1a code="// Bot uygulamaları\nAuthorization: Bot YOUR_BOT_TOKEN\n\n// Kullanıcı adına işlem (OAuth2)\nAuthorization: Bearer USER_ACCESS_TOKEN" language="http" title="Authorization Header" /><_0x326911 type="error" title={_0x41c13e("intro.tokenSecurityTitle")}>{_0x41c13e("intro.tokenSecurityDesc")}</_0x326911><_0x3cd3eb /><_0xa5d83 id="jubbio-js">{_0x41c13e("intro.jubbioJsLibraries")}</_0xa5d83><_0x1b78f9>{_0x41c13e("intro.jubbioJsLibrariesDesc")}</_0x1b78f9><div className="flex flex-col gap-2 mb-6"><div className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-border-default bg-surface-overlay/10"><_0x37db94>@jubbio/core</_0x37db94><span className="text-xs text-text-muted">{_0x41c13e("intro.coreDesc")}</span></div><div className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-border-default bg-surface-overlay/10"><_0x37db94>@jubbio/voice</_0x37db94><span className="text-xs text-text-muted">{_0x41c13e("intro.voiceDesc")}</span></div></div><_0x52ce1a code={"npm install @jubbio/core\nnpm install @jubbio/voice  # " + _0x41c13e("intro.voiceOptional")} language="bash" title={_0x41c13e("intro.installation")} /><_0x3cd3eb /><_0xa5d83 id="sonraki-adimlar">{_0x41c13e("intro.nextSteps")}</_0xa5d83><div className="flex flex-col gap-2">{[{
        href: "/dev/docs/quickstart",
        label: _0x41c13e("nav.quickstart"),
        desc: _0x41c13e("intro.nextStep1")
      }, {
        href: "/dev/docs/authentication",
        label: _0x41c13e("nav.authentication"),
        desc: _0x41c13e("intro.nextStep2")
      }, {
        href: "/dev/docs/bot-api",
        label: _0x41c13e("nav.botApi"),
        desc: _0x41c13e("intro.nextStep3")
      }, {
        href: "/dev/docs/js/client",
        label: "jubbio.js Client",
        desc: _0x41c13e("intro.nextStep4")
      }].map(({
        href: _0x4b1806,
        label: _0x50944e,
        desc: _0x291dbb
      }) => <p className="text-sm leading-relaxed" key={_0x4b1806}><_0x1fc583 icon="solar:bolt-bold-duotone" className="size-3.5 inline-block align-middle mr-1.5 text-emerald-400" /><_0x2233d5 href={_0x4b1806}>{_0x50944e}</_0x2233d5><span className="text-text-muted"> — {_0x291dbb}</span></p>)}</div></_0x1c3ec5.Fragment>;
}
export { b as default };