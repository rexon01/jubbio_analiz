import { b as _0x265086, j as _0x3b032c, I as _0xc09a48 } from "./index-cQfEKR1W.js";
import { H as _0x44a1af, C as _0x5da3f7, D as _0xf88938, a as _0x26ec0a, P as _0x3b5dd1, b as _0x4865f6 } from "./DocComponents-BWAUshvB.js";
import { C as _0x104101 } from "./CodeBlock-B4seo9QW.js";
import "./clipboard-BQ9qambq.js";
import "./loader-circle-CTtxa1g9.js";
import "./prism-2cMp9j73.js";
function d() {
  const {
    t: _0x1eb634
  } = _0x265086("docs");
  const _0xc6670e = [{
    icon: "solar:window-frame-bold-duotone",
    label: _0x1eb634("quickstart.step1Title"),
    color: "text-blue-400 bg-blue-500/15"
  }, {
    icon: "solar:key-bold-duotone",
    label: _0x1eb634("quickstart.step2Title"),
    color: "text-amber-400 bg-amber-500/15"
  }, {
    icon: "solar:folder-bold-duotone",
    label: _0x1eb634("quickstart.step3Title"),
    color: "text-emerald-400 bg-emerald-500/15"
  }, {
    icon: "solar:code-bold-duotone",
    label: _0x1eb634("quickstart.step4Title"),
    color: "text-purple-400 bg-purple-500/15"
  }, {
    icon: "solar:play-bold-duotone",
    label: _0x1eb634("quickstart.step5Title"),
    color: "text-sky-400 bg-sky-500/15"
  }, {
    icon: "solar:user-plus-bold-duotone",
    label: _0x1eb634("quickstart.step6Title"),
    color: "text-rose-400 bg-rose-500/15"
  }];
  return <_0x3b032c.Fragment><div className="mb-10"><_0x44a1af>{_0x1eb634("quickstart.title")}</_0x44a1af><p className="text-lg text-text-tertiary leading-relaxed max-w-2xl">{_0x1eb634("quickstart.description")}</p></div><div className="flex flex-wrap gap-2 mb-10">{_0xc6670e.map(({
        icon: _0x323c3f,
        label: _0x16b9f7,
        color: _0x311023
      }, _0x23d053) => <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-default bg-surface-overlay/10" key={_0x23d053}><span className={"flex size-5 items-center justify-center rounded " + _0x311023.split(" ")[1]}><_0xc09a48 icon={_0x323c3f} className={"size-3 " + _0x311023.split(" ")[0]} /></span><span className="text-xs text-text-tertiary"><span className="text-text-muted font-mono mr-1">{_0x23d053 + 1}</span>{_0x16b9f7}</span></div>)}</div><_0x5da3f7 type="info" title={_0x1eb634("quickstart.requirementsTitle")}>{_0x1eb634("quickstart.requirementsDesc")}</_0x5da3f7><_0xf88938 /><_0x26ec0a id="adim-1-uygulama-olustur">{_0x1eb634("quickstart.step1Title")}</_0x26ec0a><_0x3b5dd1><_0x4865f6 href="/dev/applications">{_0x1eb634("quickstart.devPortal")}</_0x4865f6>{_0x1eb634("quickstart.step1Desc")}</_0x3b5dd1><_0xf88938 /><_0x26ec0a id="adim-2-bot-token-al">{_0x1eb634("quickstart.step2Title")}</_0x26ec0a><_0x3b5dd1>{_0x1eb634("quickstart.step2Desc")}</_0x3b5dd1><_0x5da3f7 type="error" title={_0x1eb634("quickstart.tokenSecurityTitle")}>{_0x1eb634("quickstart.tokenSecurityDesc")}</_0x5da3f7><h3 className="text-base font-semibold text-text-secondary mt-8 mb-3">{_0x1eb634("quickstart.privilegedIntentsTitle")}</h3><_0x3b5dd1>{_0x1eb634("quickstart.privilegedIntentsDesc")}</_0x3b5dd1><div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">{[{
        name: _0x1eb634("quickstart.guildMembers"),
        desc: _0x1eb634("quickstart.guildMembersDesc")
      }, {
        name: _0x1eb634("quickstart.presenceInfo"),
        desc: _0x1eb634("quickstart.presenceInfoDesc")
      }, {
        name: _0x1eb634("quickstart.messageContent"),
        desc: _0x1eb634("quickstart.messageContentDesc")
      }].map(({
        name: _0x4784a8,
        desc: _0x5bf3f9
      }) => <div className="px-3 py-2.5 rounded-lg border border-border-default bg-surface-overlay/10" key={_0x4784a8}><div className="text-[13px] font-medium text-text-secondary">{_0x4784a8}</div><div className="text-xs text-text-muted mt-0.5">{_0x5bf3f9}</div></div>)}</div><_0xf88938 /><_0x26ec0a id="adim-3-proje-kur">{_0x1eb634("quickstart.step3Title")}</_0x26ec0a><_0x104101 code="mkdir jubbio-bot\ncd jubbio-bot\nnpm init -y\nnpm install @jubbio/core" language="bash" title="Terminal" /><_0x3b5dd1>{_0x1eb634("quickstart.step3EnvDesc")}</_0x3b5dd1><_0x104101 code="BOT_TOKEN=buraya_bot_tokenini_yapistir" language="text" title=".env" /><_0x104101 code="node_modules\n.env" language="text" title=".gitignore" /><_0xf88938 /><_0x26ec0a id="adim-4-bot-kodu">{_0x1eb634("quickstart.step4Title")}</_0x26ec0a><_0x104101 code="import { Client, GatewayIntentBits } from '@jubbio/core';\n\nconst client = new Client({\n  intents: [\n    GatewayIntentBits.Guilds,\n    GatewayIntentBits.GuildMessages,\n    GatewayIntentBits.MessageContent,\n  ],\n});\n\nclient.on('ready', () => {\n  console.log(`✅ ${client.user.username} olarak giriş yapıldı!`);\n});\n\nclient.on('messageCreate', async (message) => {\n  if (message.author.bot) return;\n\n  if (message.content === '!ping') {\n    await message.reply('🏓 Pong!');\n  }\n\n  if (message.content === '!merhaba') {\n    await message.reply(`Merhaba ${message.author.username}! 👋`);\n  }\n});\n\nclient.login(process.env.BOT_TOKEN);" language="javascript" title="index.js" showLineNumbers={true} /><_0x5da3f7 type="info" title="ES Modules">{_0x1eb634("quickstart.esModulesDesc")}</_0x5da3f7><_0xf88938 /><_0x26ec0a id="adim-5-botu-calistir">{_0x1eb634("quickstart.step5Title")}</_0x26ec0a><_0x104101 code="node index.js" language="bash" title="Terminal" /><_0x3b5dd1>{_0x1eb634("quickstart.step5Desc")}</_0x3b5dd1><_0xf88938 /><_0x26ec0a id="adim-6-sunucuya-ekle">{_0x1eb634("quickstart.step6Title")}</_0x26ec0a><_0x3b5dd1>{_0x1eb634("quickstart.step6Desc")}</_0x3b5dd1><_0x5da3f7 type="success" title={_0x1eb634("quickstart.congratsTitle")}>{_0x1eb634("quickstart.congratsDesc")}</_0x5da3f7><_0xf88938 /><div className="flex items-center gap-3 mb-5 mt-14"><div className="flex size-8 items-center justify-center rounded-lg bg-purple-500/15"><_0xc09a48 icon="solar:stars-bold-duotone" className="size-4 text-purple-400" /></div><h2 className="text-2xl font-semibold text-text-primary tracking-tight">{_0x1eb634("quickstart.bonusSlashTitle")}</h2></div><_0x3b5dd1>{_0x1eb634("quickstart.bonusSlashDesc")}</_0x3b5dd1><_0x104101 code="import { Client, GatewayIntentBits, SlashCommandBuilder } from '@jubbio/core';\n\nconst client = new Client({\n  intents: [GatewayIntentBits.Guilds],\n});\n\nclient.on('ready', async () => {\n  console.log(`✅ ${client.user.username} hazır!`);\n\n  await client.rest.registerGlobalCommands([\n    new SlashCommandBuilder()\n      .setName('ping')\n      .setDescription('Botun gecikmesini gösterir')\n      .toJSON(),\n    new SlashCommandBuilder()\n      .setName('merhaba')\n      .setDescription('Seni selamlar')\n      .addStringOption(option =>\n        option.setName('mesaj').setDescription('Özel mesaj').setRequired(false)\n      )\n      .toJSON(),\n  ]);\n\n  console.log('📝 Slash komutları kaydedildi!');\n});\n\nclient.on('interactionCreate', async (interaction) => {\n  if (!interaction.isCommand()) return;\n\n  if (interaction.commandName === 'ping') {\n    await interaction.reply('🏓 Pong!');\n  }\n\n  if (interaction.commandName === 'merhaba') {\n    const mesaj = interaction.options.getString('mesaj') || 'Merhaba!';\n    await interaction.reply(`👋 ${mesaj}, ${interaction.user.username}!`);\n  }\n});\n\nclient.login(process.env.BOT_TOKEN);" language="javascript" title="slash-bot.js" showLineNumbers={true} /><_0x5da3f7 type="warning" title={_0x1eb634("quickstart.globalCommandDelayTitle")}>{_0x1eb634("quickstart.globalCommandDelayDesc")}</_0x5da3f7><_0xf88938 /><_0x26ec0a id="sonraki-adimlar">{_0x1eb634("intro.nextSteps")}</_0x26ec0a><div className="flex flex-col gap-2">{[{
        href: "/dev/docs/js/client",
        label: _0x1eb634("quickstart.nextClient"),
        desc: _0x1eb634("client.description")
      }, {
        href: "/dev/docs/js/events",
        label: _0x1eb634("quickstart.nextEvents"),
        desc: _0x1eb634("events.description")
      }, {
        href: "/dev/docs/js/builders",
        label: _0x1eb634("quickstart.nextBuilders"),
        desc: _0x1eb634("builders.description")
      }, {
        href: "/dev/docs/js/interactions",
        label: _0x1eb634("quickstart.nextInteractions"),
        desc: _0x1eb634("interactions.description")
      }, {
        href: "/dev/docs/js/voice",
        label: _0x1eb634("quickstart.nextVoice"),
        desc: _0x1eb634("voice.title", {
          defaultValue: "Ses kanalları ve müzik çalma"
        })
      }, {
        href: "/dev/docs/js/rest-api",
        label: _0x1eb634("quickstart.nextRestApi"),
        desc: _0x1eb634("restApi.title", {
          defaultValue: "Tüm endpoint referansı"
        })
      }].map(({
        href: _0x21cf8d,
        label: _0x541c51,
        desc: _0x526115
      }) => <p className="text-sm leading-relaxed" key={_0x21cf8d}><_0xc09a48 icon="solar:command-bold-duotone" className="size-3.5 inline-block align-middle mr-1.5 text-emerald-400" /><_0x4865f6 href={_0x21cf8d}>{_0x541c51}</_0x4865f6><span className="text-text-muted"> — {_0x526115}</span></p>)}</div></_0x3b032c.Fragment>;
}
export { d as default };