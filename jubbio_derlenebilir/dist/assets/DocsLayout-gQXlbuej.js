import { r as _0x3741b5, b as _0x1e0cc8, e as _0x577f13, d as _0x4a326e, aM as _0x5278c8, j as _0x4c9e3f, I as _0x4d739c, B as _0x3484a1, X as _0x2f2eb9, aq as _0x387110, _ as _0x597507, aB as _0x34adc0, s as _0x40278f, F as _0x1257d2 } from "./index-cQfEKR1W.js";
import { D as _0x3b640d } from "./DevHeader-WqTblGAC.js";
import { T as _0x3dbf68 } from "./DocComponents-BWAUshvB.js";
import { C as _0x12ff14 } from "./chevron-left-CoNyL-61.js";
import "./avatar-C-4BWxT3.js";
import "./ConfirmDialog-B4gIndKy.js";
import "./alert-dialog-BZuoGg7O.js";
import "./index-yuEHo9bu.js";
import "./index-Oyyh46KT.js";
import "./loader-circle-CTtxa1g9.js";
import "./clipboard-BQ9qambq.js";
const p = ({
  className: _0x338154
}) => _0x4c9e3f.jsx(_0x4d739c, {
  icon: "solar:box-bold-duotone",
  className: _0x338154
});
const I = _0x3741b5.lazy(() => _0x597507(() => import("./DocsSearchModal-CeHZ-aob.js"), [], import.meta.url));
const x = typeof navigator != "undefined" && /mac/i.test(navigator.userAgent);
const K = [{
  titleKey: "nav.gettingStarted",
  icon: "solar:book-bold-duotone",
  items: [{
    titleKey: "nav.introduction",
    href: "/dev/docs",
    icon: "solar:file-text-bold-duotone",
    available: true
  }, {
    titleKey: "nav.quickstart",
    href: "/dev/docs/quickstart",
    icon: "solar:rocket-bold-duotone",
    available: true
  }, {
    titleKey: "nav.authentication",
    href: "/dev/docs/authentication",
    icon: "solar:shield-check-bold-duotone",
    available: true
  }]
}, {
  titleKey: "nav.restApiSection",
  icon: "solar:global-bold-duotone",
  items: [{
    titleKey: "nav.botApi",
    href: "/dev/docs/bot-api",
    icon: "solar:file-text-bold-duotone",
    available: true
  }, {
    titleKey: "nav.botApiSub.messages",
    href: "/dev/docs/bot-api/messages",
    icon: "solar:chat-square-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.msgSub.send",
      anchorId: "mesaj-gonder"
    }, {
      labelKey: "nav.msgSub.ephemeral",
      anchorId: "ephemeral-mesaj"
    }, {
      labelKey: "nav.msgSub.edit",
      anchorId: "mesaj-duzenle"
    }, {
      labelKey: "nav.msgSub.delete",
      anchorId: "mesaj-sil"
    }, {
      labelKey: "nav.msgSub.bulkDelete",
      anchorId: "toplu-mesaj-sil"
    }, {
      labelKey: "nav.msgSub.history",
      anchorId: "mesaj-gecmisi"
    }, {
      labelKey: "nav.msgSub.withFile",
      anchorId: "dosya-ile-mesaj"
    }, {
      labelKey: "nav.msgSub.upload",
      anchorId: "dosya-yukle"
    }, {
      labelKey: "nav.msgSub.dmNew",
      anchorId: "dm-yeni-konusma"
    }, {
      labelKey: "nav.msgSub.dm",
      anchorId: "dm-mesaj-gonder"
    }, {
      labelKey: "nav.msgSub.dmHistory",
      anchorId: "dm-mesaj-gecmisi"
    }]
  }, {
    titleKey: "nav.botApiSub.interactions",
    href: "/dev/docs/bot-api/interactions",
    icon: "solar:bolt-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.intSub.addReaction",
      anchorId: "reaksiyon-ekle"
    }, {
      labelKey: "nav.intSub.removeReaction",
      anchorId: "reaksiyon-kaldir"
    }, {
      labelKey: "nav.intSub.pin",
      anchorId: "mesaj-pinle"
    }, {
      labelKey: "nav.intSub.unpin",
      anchorId: "pin-kaldir"
    }, {
      labelKey: "nav.intSub.pinnedList",
      anchorId: "pinli-mesajlar"
    }, {
      labelKey: "nav.intSub.respond",
      anchorId: "interaction-yanit"
    }, {
      labelKey: "nav.intSub.edit",
      anchorId: "interaction-duzenle"
    }, {
      labelKey: "nav.intSub.delete",
      anchorId: "interaction-sil"
    }, {
      labelKey: "nav.intSub.followup",
      anchorId: "followup-mesaj"
    }]
  }, {
    titleKey: "nav.botApiSub.channels",
    href: "/dev/docs/bot-api/channels",
    icon: "solar:hashtag-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.chSub.create",
      anchorId: "kanal-olustur"
    }, {
      labelKey: "nav.chSub.delete",
      anchorId: "kanal-sil"
    }, {
      labelKey: "nav.chSub.deleteCategory",
      anchorId: "kategori-sil"
    }, {
      labelKey: "nav.chSub.permissions",
      anchorId: "kanal-izinleri"
    }, {
      labelKey: "nav.chSub.deletePermission",
      anchorId: "kanal-izni-sil"
    }]
  }, {
    titleKey: "nav.botApiSub.members",
    href: "/dev/docs/bot-api/members",
    icon: "solar:users-group-rounded-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.memSub.info",
      anchorId: "uye-bilgisi"
    }, {
      labelKey: "nav.memSub.list",
      anchorId: "uyeleri-listele"
    }, {
      labelKey: "nav.memSub.timeout",
      anchorId: "uye-timeout"
    }, {
      labelKey: "nav.memSub.kick",
      anchorId: "uye-at"
    }, {
      labelKey: "nav.memSub.ban",
      anchorId: "uye-yasakla"
    }, {
      labelKey: "nav.memSub.unban",
      anchorId: "yasak-kaldir"
    }, {
      labelKey: "nav.memSub.edit",
      anchorId: "uye-duzenle"
    }, {
      labelKey: "nav.memSub.addRole",
      anchorId: "rol-ekle"
    }, {
      labelKey: "nav.memSub.removeRole",
      anchorId: "rol-kaldir"
    }, {
      labelKey: "nav.memSub.bulkAssign",
      anchorId: "toplu-rol-atama"
    }, {
      labelKey: "nav.memSub.bulkRemove",
      anchorId: "toplu-rol-kaldirma"
    }]
  }, {
    titleKey: "nav.botApiSub.guild",
    href: "/dev/docs/bot-api/guild",
    icon: "solar:crown-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.guildSub.info",
      anchorId: "guild-bilgisi"
    }, {
      labelKey: "nav.guildSub.channels",
      anchorId: "guild-kanallari"
    }, {
      labelKey: "nav.guildSub.emojis",
      anchorId: "guild-emojileri"
    }, {
      labelKey: "nav.guildSub.banList",
      anchorId: "ban-listesi"
    }, {
      labelKey: "nav.guildSub.banInfo",
      anchorId: "ban-bilgisi"
    }, {
      labelKey: "nav.guildSub.roles",
      anchorId: "rolleri-listele"
    }, {
      labelKey: "nav.guildSub.createRole",
      anchorId: "rol-olustur"
    }, {
      labelKey: "nav.guildSub.editRole",
      anchorId: "rol-duzenle"
    }, {
      labelKey: "nav.guildSub.deleteRole",
      anchorId: "rol-sil"
    }, {
      labelKey: "nav.guildSub.createInvite",
      anchorId: "davet-olustur"
    }, {
      labelKey: "nav.guildSub.inviteInfo",
      anchorId: "davet-bilgisi"
    }, {
      labelKey: "nav.guildSub.guildInvites",
      anchorId: "guild-davetleri"
    }, {
      labelKey: "nav.guildSub.deleteInvite",
      anchorId: "davet-sil"
    }, {
      labelKey: "nav.guildSub.userInfo",
      anchorId: "kullanici-bilgisi"
    }, {
      labelKey: "nav.guildSub.botInfo",
      anchorId: "bot-bilgisi"
    }]
  }, {
    titleKey: "nav.botApiSub.webhooks",
    href: "/dev/docs/bot-api/webhooks",
    icon: "solar:link-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.whSub.channelList",
      anchorId: "kanal-webhooklari"
    }, {
      labelKey: "nav.whSub.guildList",
      anchorId: "guild-webhooklari"
    }, {
      labelKey: "nav.whSub.create",
      anchorId: "webhook-olustur"
    }, {
      labelKey: "nav.whSub.update",
      anchorId: "webhook-guncelle"
    }, {
      labelKey: "nav.whSub.delete",
      anchorId: "webhook-sil"
    }]
  }, {
    titleKey: "nav.botApiSub.commands",
    href: "/dev/docs/bot-api/commands",
    icon: "solar:command-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.cmdSub.globalCreate",
      anchorId: "global-komut"
    }, {
      labelKey: "nav.cmdSub.guildCreate",
      anchorId: "guild-komut"
    }, {
      labelKey: "nav.cmdSub.globalList",
      anchorId: "global-komutlari-listele"
    }, {
      labelKey: "nav.cmdSub.guildList",
      anchorId: "guild-komutlarini-listele"
    }, {
      labelKey: "nav.cmdSub.globalDetail",
      anchorId: "global-komut-detay"
    }, {
      labelKey: "nav.cmdSub.guildDetail",
      anchorId: "guild-komut-detay"
    }, {
      labelKey: "nav.cmdSub.globalUpdate",
      anchorId: "global-komut-guncelle"
    }, {
      labelKey: "nav.cmdSub.guildUpdate",
      anchorId: "guild-komut-guncelle"
    }, {
      labelKey: "nav.cmdSub.globalDelete",
      anchorId: "global-komut-sil"
    }, {
      labelKey: "nav.cmdSub.guildDelete",
      anchorId: "guild-komut-sil"
    }, {
      labelKey: "nav.cmdSub.mention",
      anchorId: "mention-sistemi"
    }]
  }]
}, {
  titleKey: "nav.webhooks",
  icon: "solar:link-bold-duotone",
  items: [{
    titleKey: "nav.webhookManagement",
    href: "/dev/docs/webhooks/management",
    icon: "solar:link-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.webhookSub.create",
      anchorId: "webhook-olustur"
    }, {
      labelKey: "nav.webhookSub.list",
      anchorId: "webhook-listele"
    }, {
      labelKey: "nav.webhookSub.detail",
      anchorId: "webhook-detay"
    }, {
      labelKey: "nav.webhookSub.update",
      anchorId: "webhook-guncelle"
    }, {
      labelKey: "nav.webhookSub.delete",
      anchorId: "webhook-sil"
    }, {
      labelKey: "nav.webhookSub.botApi",
      anchorId: "bot-api"
    }]
  }, {
    titleKey: "nav.webhookExecute",
    href: "/dev/docs/webhooks/execute",
    icon: "solar:plain-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.webhookSub.sendMessage",
      anchorId: "mesaj-gonder"
    }, {
      labelKey: "nav.webhookSub.linkButtons",
      anchorId: "link-butonlari"
    }, {
      labelKey: "nav.webhookSub.attachments",
      anchorId: "attachment-gonderimi"
    }, {
      labelKey: "nav.webhookSub.slack",
      anchorId: "slack-uyumlu"
    }, {
      labelKey: "nav.webhookSub.github",
      anchorId: "github-entegrasyonu"
    }, {
      labelKey: "nav.webhookSub.tokenEndpoints",
      anchorId: "token-endpointleri"
    }, {
      labelKey: "nav.webhookSub.rateLimit",
      anchorId: "rate-limiting"
    }, {
      labelKey: "nav.webhookSub.quickStart",
      anchorId: "hizli-baslangic"
    }]
  }]
}, {
  titleKey: "nav.oauth2",
  icon: "solar:key-bold-duotone",
  items: [{
    titleKey: "nav.oauth2Flow",
    href: "/dev/docs/oauth2/flow",
    icon: "solar:lock-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.oauth2Sub.quickStart",
      anchorId: "hizli-baslangic"
    }, {
      labelKey: "nav.oauth2Sub.config",
      anchorId: "yapilandirma"
    }, {
      labelKey: "nav.oauth2Sub.flow",
      anchorId: "oauth2-akisi"
    }, {
      labelKey: "nav.oauth2Sub.methods",
      anchorId: "metodlar"
    }, {
      labelKey: "nav.oauth2Sub.types",
      anchorId: "tipler"
    }, {
      labelKey: "nav.oauth2Sub.errors",
      anchorId: "hata-yonetimi"
    }, {
      labelKey: "nav.oauth2Sub.tokenStorage",
      anchorId: "token-saklama"
    }, {
      labelKey: "nav.oauth2Sub.vanillaJs",
      anchorId: "vanilla-js"
    }, {
      labelKey: "nav.oauth2Sub.authReact",
      anchorId: "auth-react"
    }, {
      labelKey: "nav.oauth2Sub.reactComponents",
      anchorId: "react-bilesenleri"
    }, {
      labelKey: "nav.oauth2Sub.useJubbio",
      anchorId: "use-jubbio"
    }, {
      labelKey: "nav.oauth2Sub.customCallback",
      anchorId: "ozel-callback"
    }, {
      labelKey: "nav.oauth2Sub.fullExample",
      anchorId: "tam-ornek"
    }]
  }, {
    titleKey: "nav.scopes",
    href: "/dev/docs/oauth2/scopes",
    icon: "solar:key-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.oauth2Sub.basicScopes",
      anchorId: "temel-scopelar"
    }, {
      labelKey: "nav.oauth2Sub.botScopes",
      anchorId: "bot-scopelari"
    }, {
      labelKey: "nav.oauth2Sub.scopeUsage",
      anchorId: "scope-kullanimi"
    }]
  }]
}];
const S = [{
  titleKey: "nav.jsBasic",
  icon: "solar:box-bold-duotone",
  items: [{
    titleKey: "nav.client",
    href: "/dev/docs/js/client",
    icon: "solar:bot-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.clientSub.options",
      anchorId: "client-options"
    }, {
      labelKey: "nav.clientSub.properties",
      anchorId: "client-properties"
    }, {
      labelKey: "nav.clientSub.methods",
      anchorId: "client-methods"
    }, {
      labelKey: "nav.clientSub.events",
      anchorId: "client-events"
    }, {
      labelKey: "nav.clientSub.reconnect",
      anchorId: "gateway-reconnect"
    }, {
      labelKey: "nav.clientSub.closeCodes",
      anchorId: "gateway-close-codes"
    }]
  }, {
    titleKey: "nav.events",
    href: "/dev/docs/js/events",
    icon: "solar:soundwave-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.eventsSub.list",
      anchorId: "event-listesi"
    }, {
      labelKey: "nav.eventsSub.message",
      anchorId: "mesaj-eventleri"
    }, {
      labelKey: "nav.eventsSub.interaction",
      anchorId: "interaction-eventleri"
    }, {
      labelKey: "nav.eventsSub.guild",
      anchorId: "guild-eventleri"
    }, {
      labelKey: "nav.eventsSub.member",
      anchorId: "uye-eventleri"
    }, {
      labelKey: "nav.eventsSub.channel",
      anchorId: "kanal-eventleri"
    }, {
      labelKey: "nav.eventsSub.role",
      anchorId: "rol-eventleri"
    }, {
      labelKey: "nav.eventsSub.invite",
      anchorId: "davet-eventleri"
    }, {
      labelKey: "nav.eventsSub.voice",
      anchorId: "ses-eventleri"
    }, {
      labelKey: "nav.eventsSub.other",
      anchorId: "diger-eventler"
    }]
  }, {
    titleKey: "nav.structures",
    href: "/dev/docs/js/structures",
    icon: "solar:box-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.structSub.user",
      anchorId: "user"
    }, {
      labelKey: "nav.structSub.guild",
      anchorId: "guild"
    }, {
      labelKey: "nav.structSub.guildMember",
      anchorId: "guildmember"
    }, {
      labelKey: "nav.structSub.message",
      anchorId: "message"
    }, {
      labelKey: "nav.structSub.channel",
      anchorId: "channel"
    }, {
      labelKey: "nav.structSub.collection",
      anchorId: "collection"
    }]
  }]
}, {
  titleKey: "nav.jsInteractions",
  icon: "solar:bolt-bold-duotone",
  items: [{
    titleKey: "nav.interactions",
    href: "/dev/docs/js/interactions",
    icon: "solar:chat-square-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.interSub.base",
      anchorId: "base-interaction"
    }, {
      labelKey: "nav.interSub.command",
      anchorId: "command-interaction"
    }, {
      labelKey: "nav.interSub.button",
      anchorId: "button-interaction"
    }, {
      labelKey: "nav.interSub.selectMenu",
      anchorId: "selectmenu-interaction"
    }, {
      labelKey: "nav.interSub.modal",
      anchorId: "modal-interaction"
    }, {
      labelKey: "nav.interSub.autocomplete",
      anchorId: "autocomplete-interaction"
    }, {
      labelKey: "nav.interSub.options",
      anchorId: "command-options"
    }, {
      labelKey: "nav.interSub.files",
      anchorId: "file-support"
    }, {
      labelKey: "nav.interSub.factory",
      anchorId: "create-interaction"
    }]
  }, {
    titleKey: "nav.builders",
    href: "/dev/docs/js/builders",
    icon: "solar:puzzle-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.builderSub.embed",
      anchorId: "embed-builder"
    }, {
      labelKey: "nav.builderSub.button",
      anchorId: "button-builder"
    }, {
      labelKey: "nav.builderSub.selectMenu",
      anchorId: "select-menu-builder"
    }, {
      labelKey: "nav.builderSub.actionRow",
      anchorId: "action-row-builder"
    }, {
      labelKey: "nav.builderSub.slashCommand",
      anchorId: "slash-command-builder"
    }, {
      labelKey: "nav.builderSub.modal",
      anchorId: "modal-builder"
    }, {
      labelKey: "nav.builderSub.textInput",
      anchorId: "text-input-builder"
    }]
  }]
}, {
  titleKey: "nav.jsApiVoice",
  icon: "solar:code-bold-duotone",
  items: [{
    titleKey: "nav.restApi",
    href: "/dev/docs/js/rest-api",
    icon: "solar:global-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.restSub.constructor",
      anchorId: "constructor"
    }, {
      labelKey: "nav.restSub.messages",
      anchorId: "messages"
    }, {
      labelKey: "nav.restSub.reactions",
      anchorId: "reactions"
    }, {
      labelKey: "nav.restSub.members",
      anchorId: "members"
    }, {
      labelKey: "nav.restSub.roles",
      anchorId: "roles"
    }, {
      labelKey: "nav.restSub.channels",
      anchorId: "channels"
    }, {
      labelKey: "nav.restSub.guild",
      anchorId: "guild-rest"
    }, {
      labelKey: "nav.restSub.invites",
      anchorId: "invites"
    }, {
      labelKey: "nav.restSub.users",
      anchorId: "users-rest"
    }, {
      labelKey: "nav.restSub.webhooks",
      anchorId: "webhooks"
    }, {
      labelKey: "nav.restSub.commands",
      anchorId: "slash-commands-rest"
    }, {
      labelKey: "nav.restSub.interactions",
      anchorId: "interaction-rest"
    }, {
      labelKey: "nav.restSub.mentions",
      anchorId: "mentions"
    }, {
      labelKey: "nav.restSub.genericHttp",
      anchorId: "generic-http"
    }]
  }, {
    titleKey: "nav.voice",
    href: "/dev/docs/js/voice",
    icon: "solar:microphone-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.voiceSub.setup",
      anchorId: "kurulum"
    }, {
      labelKey: "nav.voiceSub.join",
      anchorId: "join-voice"
    }, {
      labelKey: "nav.voiceSub.connection",
      anchorId: "voice-connection"
    }, {
      labelKey: "nav.voiceSub.connectionStatus",
      anchorId: "connection-status"
    }, {
      labelKey: "nav.voiceSub.player",
      anchorId: "audio-player"
    }, {
      labelKey: "nav.voiceSub.playerStatus",
      anchorId: "player-status"
    }, {
      labelKey: "nav.voiceSub.resource",
      anchorId: "audio-resource"
    }, {
      labelKey: "nav.voiceSub.createResource",
      anchorId: "create-resource"
    }, {
      labelKey: "nav.voiceSub.createFromUrl",
      anchorId: "create-resource-url"
    }, {
      labelKey: "nav.voiceSub.probe",
      anchorId: "probe-audio"
    }, {
      labelKey: "nav.voiceSub.streamType",
      anchorId: "stream-type"
    }, {
      labelKey: "nav.voiceSub.example",
      anchorId: "music-bot-example"
    }]
  }]
}, {
  titleKey: "nav.jsAdvanced",
  icon: "solar:command-bold-duotone",
  items: [{
    titleKey: "nav.permissions",
    href: "/dev/docs/js/permissions",
    icon: "solar:shield-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.permSub.check",
      anchorId: "permission-check"
    }, {
      labelKey: "nav.permSub.bitfield",
      anchorId: "permissions-bitfield"
    }, {
      labelKey: "nav.permSub.static",
      anchorId: "static-properties"
    }, {
      labelKey: "nav.permSub.resolvable",
      anchorId: "permission-resolvable"
    }, {
      labelKey: "nav.permSub.flagsGeneral",
      anchorId: "flags-general"
    }, {
      labelKey: "nav.permSub.flagsMessages",
      anchorId: "flags-messages"
    }, {
      labelKey: "nav.permSub.flagsVoice",
      anchorId: "flags-voice"
    }, {
      labelKey: "nav.permSub.flagsVideo",
      anchorId: "flags-video"
    }, {
      labelKey: "nav.permSub.flagsAdvanced",
      anchorId: "flags-advanced"
    }]
  }, {
    titleKey: "nav.collectors",
    href: "/dev/docs/js/collectors",
    icon: "solar:layers-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.collSub.base",
      anchorId: "collector-base"
    }, {
      labelKey: "nav.collSub.options",
      anchorId: "collector-options"
    }, {
      labelKey: "nav.collSub.message",
      anchorId: "message-collector"
    }, {
      labelKey: "nav.collSub.interaction",
      anchorId: "interaction-collector"
    }, {
      labelKey: "nav.collSub.reaction",
      anchorId: "reaction-collector"
    }, {
      labelKey: "nav.collSub.awaitMessages",
      anchorId: "await-messages"
    }, {
      labelKey: "nav.collSub.awaitReactions",
      anchorId: "await-reactions"
    }, {
      labelKey: "nav.collSub.filter",
      anchorId: "filter-function"
    }, {
      labelKey: "nav.collSub.example",
      anchorId: "full-example"
    }]
  }, {
    titleKey: "nav.sharding",
    href: "/dev/docs/js/sharding",
    icon: "solar:branch-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.shardSub.manager",
      anchorId: "sharding-manager"
    }, {
      labelKey: "nav.shardSub.properties",
      anchorId: "manager-properties"
    }, {
      labelKey: "nav.shardSub.methods",
      anchorId: "manager-methods"
    }, {
      labelKey: "nav.shardSub.managerEvents",
      anchorId: "manager-events"
    }, {
      labelKey: "nav.shardSub.shard",
      anchorId: "shard-class"
    }, {
      labelKey: "nav.shardSub.shardEvents",
      anchorId: "shard-events"
    }, {
      labelKey: "nav.shardSub.status",
      anchorId: "shard-status"
    }, {
      labelKey: "nav.shardSub.clientUtil",
      anchorId: "shard-client-util"
    }, {
      labelKey: "nav.shardSub.env",
      anchorId: "env-variables"
    }, {
      labelKey: "nav.shardSub.respawn",
      anchorId: "auto-respawn"
    }, {
      labelKey: "nav.shardSub.example",
      anchorId: "full-example"
    }]
  }, {
    titleKey: "nav.enums",
    href: "/dev/docs/js/enums",
    icon: "solar:hashtag-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.enumSub.intents",
      anchorId: "gateway-intents"
    }, {
      labelKey: "nav.enumSub.channelType",
      anchorId: "channel-type"
    }, {
      labelKey: "nav.enumSub.interactionType",
      anchorId: "interaction-type"
    }, {
      labelKey: "nav.enumSub.responseType",
      anchorId: "interaction-response-type"
    }, {
      labelKey: "nav.enumSub.commandType",
      anchorId: "application-command-type"
    }, {
      labelKey: "nav.enumSub.optionType",
      anchorId: "command-option-type"
    }, {
      labelKey: "nav.enumSub.messageFlags",
      anchorId: "message-flags"
    }, {
      labelKey: "nav.enumSub.opcodes",
      anchorId: "gateway-opcodes"
    }, {
      labelKey: "nav.enumSub.activityType",
      anchorId: "activity-type"
    }, {
      labelKey: "nav.enumSub.presenceStatus",
      anchorId: "presence-status"
    }, {
      labelKey: "nav.enumSub.overwriteType",
      anchorId: "overwrite-type"
    }, {
      labelKey: "nav.enumSub.shardStatus",
      anchorId: "shard-status"
    }, {
      labelKey: "nav.enumSub.permissionFlags",
      anchorId: "permission-flags"
    }, {
      labelKey: "nav.enumSub.voiceEnums",
      anchorId: "voice-enums"
    }]
  }, {
    titleKey: "nav.formatting",
    href: "/dev/docs/js/formatting",
    icon: "solar:text-bold-duotone",
    available: true,
    subItems: [{
      labelKey: "nav.fmtSub.textFormat",
      anchorId: "text-formatting"
    }, {
      labelKey: "nav.fmtSub.codeFormat",
      anchorId: "code-formatting"
    }, {
      labelKey: "nav.fmtSub.links",
      anchorId: "links"
    }, {
      labelKey: "nav.fmtSub.mentions",
      anchorId: "mentions"
    }, {
      labelKey: "nav.fmtSub.emoji",
      anchorId: "format-emoji"
    }, {
      labelKey: "nav.fmtSub.timestamps",
      anchorId: "timestamps"
    }, {
      labelKey: "nav.fmtSub.headings",
      anchorId: "headings"
    }, {
      labelKey: "nav.fmtSub.lists",
      anchorId: "lists"
    }, {
      labelKey: "nav.fmtSub.namespace",
      anchorId: "formatters-namespace"
    }]
  }]
}];
const g = [...K, ...S];
const f = _0x3741b5.memo(function ({
  subItems: _0x5eb63e,
  activeAnchor: _0x5ac66f,
  isOpen: _0x352677,
  onSubItemClick: _0x23d134
}) {
  const {
    t: _0x548e29
  } = _0x1e0cc8("docs");
  const _0x4e659b = _0x5ac66f ? _0x5eb63e.findIndex(_0x1e1f23 => _0x1e1f23.anchorId === _0x5ac66f) : -1;
  const _0xd12cad = _0x5eb63e.length * 28 + 12;
  return _0x4c9e3f.jsx("div", {
    className: "overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
    style: {
      maxHeight: _0x352677 ? _0xd12cad : 0,
      opacity: _0x352677 ? 1 : 0
    },
    children: _0x4c9e3f.jsxs("ul", {
      className: "ml-6 mt-1 mb-1 pl-3 relative",
      children: [_0x4c9e3f.jsx("div", {
        className: "absolute left-0 top-0 bottom-0 w-0.5 bg-surface-inset/40 rounded-full"
      }), _0x4c9e3f.jsx("div", {
        className: "absolute left-0 w-0.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.4)] will-change-transform",
        style: {
          height: 28,
          opacity: _0x4e659b >= 0 ? 1 : 0,
          transform: "translateY(" + (_0x4e659b >= 0 ? _0x4e659b * 28 : 0) + "px) scaleY(" + (_0x4e659b >= 0 ? 1 : 0) + ")",
          transition: "transform 250ms cubic-bezier(.4,0,.2,1), opacity 200ms ease-out"
        }
      }), _0x5eb63e.map(_0xe0bd4c => _0x4c9e3f.jsx("li", {
        style: {
          height: 28
        },
        className: "flex items-center",
        children: _0x4c9e3f.jsx("button", {
          onClick: () => _0x23d134(_0xe0bd4c.anchorId),
          className: _0x40278f("w-full text-left px-2 rounded-md text-[13px] transition-colors duration-150 cursor-pointer truncate", _0x5ac66f === _0xe0bd4c.anchorId ? "text-emerald-400 font-medium" : "text-text-muted hover:text-text-secondary"),
          children: _0x548e29(_0xe0bd4c.labelKey)
        })
      }, _0xe0bd4c.anchorId))]
    })
  });
});
const k = _0x3741b5.memo(function ({
  section: _0x56a266,
  onItemClick: _0x4d1072,
  activeAnchor: _0x5de734,
  onSubItemClick: _0x3421c5
}) {
  const {
    t: _0x1902ce
  } = _0x1e0cc8("docs");
  const _0x3fef76 = _0x577f13();
  return _0x4c9e3f.jsxs("div", {
    className: "mb-4",
    children: [_0x4c9e3f.jsx("div", {
      className: "mb-2 px-1",
      children: _0x4c9e3f.jsx("span", {
        className: "text-xs font-semibold text-text-tertiary",
        children: _0x1902ce(_0x56a266.titleKey)
      })
    }), _0x4c9e3f.jsx("div", {
      className: "rounded-xl bg-surface-raised/50 border border-border-default overflow-hidden divide-y divide-border-default",
      children: _0x56a266.items.map(_0x75ad75 => _0x75ad75.available ? _0x4c9e3f.jsxs("div", {
        children: [_0x4c9e3f.jsx(_0x34adc0, {
          to: _0x75ad75.href,
          end: _0x75ad75.href === "/dev/docs" || _0x75ad75.href === "/dev/docs/bot-api",
          onClick: _0x4d1072,
          className: ({
            isActive: _0x314c4f
          }) => _0x40278f("group flex items-center gap-3 px-3 py-2.5 text-left transition-all duration-200", _0x314c4f ? "bg-emerald-500/10" : "hover:bg-surface-overlay/30 active:bg-surface-overlay/50"),
          children: ({
            isActive: _0x38a1f0
          }) => _0x4c9e3f.jsxs(_0x4c9e3f.Fragment, {
            children: [_0x4c9e3f.jsx("span", {
              className: _0x40278f("flex size-7 shrink-0 items-center justify-center rounded-lg transition-all duration-200", _0x38a1f0 ? "bg-emerald-500/15" : "bg-surface-overlay/50 group-hover:bg-surface-inset/50"),
              children: _0x4c9e3f.jsx(_0x4d739c, {
                icon: _0x75ad75.icon,
                className: _0x40278f("size-3.5 transition-colors duration-200", _0x38a1f0 ? "text-emerald-400" : "text-text-muted group-hover:text-text-secondary")
              })
            }), _0x4c9e3f.jsx("span", {
              className: _0x40278f("flex-1 text-sm font-medium transition-colors duration-200", _0x38a1f0 ? "text-emerald-400" : "text-text-secondary group-hover:text-text-primary"),
              children: _0x1902ce(_0x75ad75.titleKey)
            }), _0x4c9e3f.jsx(_0x1257d2, {
              className: _0x40278f("size-4 transition-all duration-200", _0x38a1f0 ? "text-emerald-400 translate-x-0 opacity-100" : "text-text-muted -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-text-tertiary")
            })]
          })
        }, _0x75ad75.href), _0x75ad75.subItems && _0x4c9e3f.jsx(f, {
          subItems: _0x75ad75.subItems,
          activeAnchor: _0x3fef76.pathname === _0x75ad75.href ? _0x5de734 : null,
          isOpen: _0x3fef76.pathname === _0x75ad75.href,
          onSubItemClick: _0x3421c5
        })]
      }, _0x75ad75.href) : _0x4c9e3f.jsxs("div", {
        className: "group flex items-center gap-3 px-3 py-2.5 text-left cursor-not-allowed opacity-50",
        children: [_0x4c9e3f.jsx("span", {
          className: "flex size-7 shrink-0 items-center justify-center rounded-lg bg-surface-overlay/30",
          children: _0x4c9e3f.jsx(_0x4d739c, {
            icon: _0x75ad75.icon,
            className: "size-3.5 text-text-muted"
          })
        }), _0x4c9e3f.jsx("span", {
          className: "flex-1 text-sm font-medium text-text-muted",
          children: _0x1902ce(_0x75ad75.titleKey)
        }), _0x4c9e3f.jsx("span", {
          className: "text-[10px] px-1.5 py-0.5 rounded bg-surface-overlay/50 text-text-muted",
          children: _0x1902ce("nav.comingSoon")
        })]
      }, _0x75ad75.href))
    })]
  });
});
const j = _0x3741b5.memo(function ({
  onClick: _0x570e4f
}) {
  const {
    t: _0x2a81f6
  } = _0x1e0cc8("docs");
  return _0x4c9e3f.jsxs("div", {
    className: "mb-4",
    children: [_0x4c9e3f.jsx("div", {
      className: "mb-2 px-1",
      children: _0x4c9e3f.jsx("span", {
        className: "text-xs font-semibold text-text-tertiary",
        children: _0x2a81f6("nav.jsBasic").replace(" Temel", "").replace(" Basic", "")
      })
    }), _0x4c9e3f.jsxs("button", {
      onClick: _0x570e4f,
      className: "w-full group flex items-center gap-3 px-3 py-3 rounded-xl bg-surface-raised/50 border border-border-default hover:bg-blue-500/5 hover:border-blue-500/20 transition-all duration-200 text-left cursor-pointer",
      children: [_0x4c9e3f.jsx("span", {
        className: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/15",
        children: _0x4c9e3f.jsx(p, {
          className: "size-4 text-blue-400"
        })
      }), _0x4c9e3f.jsxs("div", {
        className: "flex-1 min-w-0",
        children: [_0x4c9e3f.jsx("span", {
          className: "text-sm font-medium text-text-secondary group-hover:text-blue-400 transition-colors block",
          children: "jubbio.js SDK"
        }), _0x4c9e3f.jsx("span", {
          className: "text-[11px] text-text-muted block mt-0.5",
          children: "Client, Events, Builders, Voice..."
        })]
      }), _0x4c9e3f.jsx(_0x1257d2, {
        className: "size-4 text-text-muted group-hover:text-blue-400 transition-all duration-200"
      })]
    })]
  });
});
const w = _0x3741b5.memo(function ({
  onClick: _0x121a63
}) {
  return _0x4c9e3f.jsxs("div", {
    className: "px-3 pb-3",
    children: [_0x4c9e3f.jsxs("button", {
      onClick: _0x121a63,
      className: "group flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-surface-overlay/50 transition-colors text-left cursor-pointer w-full",
      children: [_0x4c9e3f.jsx(_0x12ff14, {
        className: "size-4 text-text-muted group-hover:text-text-secondary transition-colors"
      }), _0x4c9e3f.jsx("span", {
        className: "text-[13px] text-text-muted group-hover:text-text-secondary transition-colors",
        children: "Dokümantasyon"
      })]
    }), _0x4c9e3f.jsxs("div", {
      className: "mt-2 flex items-center gap-2 px-2",
      children: [_0x4c9e3f.jsx(p, {
        className: "size-4 text-blue-400"
      }), _0x4c9e3f.jsx("span", {
        className: "text-sm font-semibold text-text-secondary",
        children: "jubbio.js SDK"
      })]
    })]
  });
});
const N = _0x3741b5.memo(function ({
  isJsMode: _0x49beba,
  activeAnchor: _0x5896f8,
  onSubItemClick: _0x4fbb4e,
  onItemClick: _0x5b1b86,
  onJsEntry: _0x5bb9eb,
  onBackToMain: _0x56d588
}) {
  if (_0x49beba) {
    return _0x4c9e3f.jsxs(_0x4c9e3f.Fragment, {
      children: [_0x4c9e3f.jsx(w, {
        onClick: _0x56d588
      }), S.map(_0x416be5 => _0x4c9e3f.jsx(k, {
        section: _0x416be5,
        onItemClick: _0x5b1b86,
        activeAnchor: _0x5896f8,
        onSubItemClick: _0x4fbb4e
      }, _0x416be5.titleKey))]
    });
  } else {
    return _0x4c9e3f.jsxs(_0x4c9e3f.Fragment, {
      children: [K.map(_0x385771 => _0x4c9e3f.jsx(k, {
        section: _0x385771,
        onItemClick: _0x5b1b86,
        activeAnchor: _0x5896f8,
        onSubItemClick: _0x4fbb4e
      }, _0x385771.titleKey)), _0x4c9e3f.jsx(j, {
        onClick: _0x5bb9eb
      })]
    });
  }
});
function C() {
  const [_0x470f64, _0x350456] = _0x3741b5.useState(false);
  const [_0x243331, _0x163133] = _0x3741b5.useState(false);
  const [_0x4a2306, _0x135275] = _0x3741b5.useState(null);
  const [_0x53b983, _0x2b52f0] = _0x3741b5.useState(false);
  const {
    t: _0x5eda88
  } = _0x1e0cc8("docs");
  const _0x234df6 = _0x577f13();
  const _0x59af97 = _0x4a326e();
  const _0x3c0a41 = _0x3741b5.useRef(null);
  _0x3741b5.useEffect(() => {
    _0x5278c8().then(() => _0x2b52f0(true));
  }, []);
  const _0x262727 = _0x234df6.pathname.startsWith("/dev/docs/js/");
  const _0x1f0dbd = _0x3741b5.useCallback(() => {
    for (const _0x3f30aa of g) {
      for (const _0x57499d of _0x3f30aa.items) {
        if (_0x57499d.subItems && _0x234df6.pathname === _0x57499d.href) {
          return _0x57499d.subItems.map(_0x1db1d1 => _0x1db1d1.anchorId);
        }
      }
    }
    return [];
  }, [_0x234df6.pathname]);
  _0x3741b5.useEffect(() => {
    const _0xa66565 = _0x1f0dbd();
    if (_0xa66565.length === 0) {
      _0x135275(null);
      return;
    }
    const _0x43b409 = _0x3c0a41.current;
    if (!_0x43b409) {
      return;
    }
    let _0x109580 = 0;
    const _0x200de7 = () => {
      const _0x44b479 = _0x43b409.getBoundingClientRect();
      const _0x16b1c9 = _0x44b479.top + _0x44b479.height * 0.3;
      let _0x4819c5 = null;
      for (const _0x458cc3 of _0xa66565) {
        const _0x129421 = document.getElementById(_0x458cc3);
        if (_0x129421 && _0x129421.getBoundingClientRect().top <= _0x16b1c9) {
          _0x4819c5 = _0x458cc3;
        }
      }
      _0x135275(_0x4819c5 || _0xa66565[0]);
    };
    const _0x2e7d2c = () => {
      cancelAnimationFrame(_0x109580);
      _0x109580 = requestAnimationFrame(_0x200de7);
    };
    const _0x2980e4 = setTimeout(() => {
      _0x43b409.addEventListener("scroll", _0x2e7d2c, {
        passive: true
      });
      _0x200de7();
    }, 200);
    return () => {
      clearTimeout(_0x2980e4);
      cancelAnimationFrame(_0x109580);
      _0x43b409.removeEventListener("scroll", _0x2e7d2c);
    };
  }, [_0x1f0dbd]);
  _0x3741b5.useEffect(() => {
    _0x135275(null);
    _0x3c0a41.current?.scrollTo({
      top: 0
    });
  }, [_0x234df6.pathname]);
  const _0xf737bd = _0x3741b5.useCallback(_0x5a8ca4 => {
    const _0x3a56a1 = document.getElementById(_0x5a8ca4);
    const _0x50416c = _0x3c0a41.current;
    if (_0x3a56a1 && _0x50416c) {
      const _0x36a2d1 = _0x50416c.getBoundingClientRect();
      const _0x2ef8f0 = _0x3a56a1.getBoundingClientRect().top - _0x36a2d1.top + _0x50416c.scrollTop - 24;
      _0x50416c.scrollTo({
        top: _0x2ef8f0,
        behavior: "smooth"
      });
    }
  }, []);
  const _0x3c2438 = _0x3741b5.useCallback(() => {
    _0x59af97("/dev/docs/js/client");
  }, [_0x59af97]);
  const _0x41803d = _0x3741b5.useCallback(() => {
    _0x59af97("/dev/docs");
  }, [_0x59af97]);
  _0x3741b5.useEffect(() => {
    const _0x4db854 = _0x7a17bf => {
      if ((_0x7a17bf.ctrlKey || _0x7a17bf.metaKey) && _0x7a17bf.key === "k") {
        _0x7a17bf.preventDefault();
        _0x163133(true);
      }
    };
    document.addEventListener("keydown", _0x4db854);
    return () => document.removeEventListener("keydown", _0x4db854);
  }, []);
  const _0x2b192c = _0x3741b5.useCallback(() => _0x163133(true), []);
  const _0x14ef70 = _0x3741b5.useCallback(() => _0x163133(false), []);
  const _0x27c7b8 = _0x3741b5.useCallback(() => _0x350456(true), []);
  const _0x4942d2 = _0x3741b5.useCallback(() => _0x350456(false), []);
  return _0x4c9e3f.jsxs("div", {
    className: "h-screen flex flex-col bg-surface-base overflow-hidden",
    children: [_0x4c9e3f.jsx(_0x3b640d, {
      showMobileMenu: true,
      onMenuClick: _0x27c7b8
    }), _0x53b983 ? _0x4c9e3f.jsxs(_0x4c9e3f.Fragment, {
      children: [_0x4c9e3f.jsxs("div", {
        className: "flex flex-1 overflow-hidden",
        children: [_0x4c9e3f.jsxs("aside", {
          className: "hidden lg:flex lg:w-72 lg:flex-col border-r border-border-default bg-surface-base",
          children: [_0x4c9e3f.jsx("div", {
            className: "p-4",
            children: _0x4c9e3f.jsxs("button", {
              onClick: _0x2b192c,
              className: "w-full flex items-center gap-3 px-3 h-10 rounded-xl bg-surface-raised/50 border border-border-default text-left transition-all duration-200 hover:bg-surface-overlay/50 hover:border-border-default group",
              children: [_0x4c9e3f.jsx(_0x4d739c, {
                icon: "solar:magnifer-bold-duotone",
                className: "size-4 text-text-muted group-hover:text-text-tertiary transition-colors"
              }), _0x4c9e3f.jsx("span", {
                className: "flex-1 text-sm text-text-muted group-hover:text-text-tertiary transition-colors",
                children: _0x5eda88("nav.search")
              }), _0x4c9e3f.jsxs("kbd", {
                className: "hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] rounded border border-border-strong bg-surface-overlay text-text-tertiary",
                children: [x ? "⌘" : "Ctrl", " K"]
              })]
            })
          }), _0x4c9e3f.jsx("nav", {
            className: "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent px-3 pb-4",
            children: _0x4c9e3f.jsx(N, {
              isJsMode: _0x262727,
              activeAnchor: _0x4a2306,
              onSubItemClick: _0xf737bd,
              onJsEntry: _0x3c2438,
              onBackToMain: _0x41803d
            })
          })]
        }), _0x470f64 && _0x4c9e3f.jsxs(_0x4c9e3f.Fragment, {
          children: [_0x4c9e3f.jsx("div", {
            className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden",
            onClick: _0x4942d2
          }), _0x4c9e3f.jsxs("aside", {
            className: "fixed inset-y-0 left-0 z-50 w-80 flex flex-col bg-surface-base border-r border-border-default lg:hidden",
            children: [_0x4c9e3f.jsxs("div", {
              className: "flex h-14 items-center justify-between px-4 border-b border-border-default",
              children: [_0x4c9e3f.jsxs("div", {
                className: "flex items-center gap-2",
                children: [_0x4c9e3f.jsx(_0x4d739c, {
                  icon: "solar:book-bold-duotone",
                  className: "size-5 text-emerald-400"
                }), _0x4c9e3f.jsx("span", {
                  className: "font-semibold text-text-primary",
                  children: _0x5eda88("nav.documentation")
                })]
              }), _0x4c9e3f.jsx(_0x3484a1, {
                variant: "ghost",
                size: "icon",
                className: "size-8 rounded-lg",
                onClick: _0x4942d2,
                children: _0x4c9e3f.jsx(_0x2f2eb9, {
                  className: "size-4"
                })
              })]
            }), _0x4c9e3f.jsx("div", {
              className: "p-4",
              children: _0x4c9e3f.jsxs("button", {
                onClick: () => {
                  _0x4942d2();
                  _0x2b192c();
                },
                className: "w-full flex items-center gap-3 px-3 h-10 rounded-xl bg-surface-raised/50 border border-border-default text-left transition-all duration-200 active:bg-surface-overlay/50",
                children: [_0x4c9e3f.jsx(_0x4d739c, {
                  icon: "solar:magnifer-bold-duotone",
                  className: "size-4 text-text-muted"
                }), _0x4c9e3f.jsx("span", {
                  className: "flex-1 text-sm text-text-muted",
                  children: _0x5eda88("nav.search")
                })]
              })
            }), _0x4c9e3f.jsx("nav", {
              className: "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent px-3 pb-4",
              children: _0x4c9e3f.jsx(N, {
                isJsMode: _0x262727,
                activeAnchor: _0x4a2306,
                onSubItemClick: _0x12dc4b => {
                  _0x4942d2();
                  setTimeout(() => _0xf737bd(_0x12dc4b), 300);
                },
                onItemClick: _0x4942d2,
                onJsEntry: () => {
                  _0x4942d2();
                  _0x3c2438();
                },
                onBackToMain: () => {
                  _0x4942d2();
                  _0x41803d();
                }
              })
            })]
          })]
        }), _0x4c9e3f.jsx("main", {
          ref: _0x3c0a41,
          className: "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent",
          children: _0x4c9e3f.jsx("div", {
            className: "mx-auto max-w-4xl px-8 py-12",
            children: _0x4c9e3f.jsx(_0x3dbf68, {
              children: _0x4c9e3f.jsx(_0x387110, {})
            })
          })
        })]
      }), _0x243331 && _0x4c9e3f.jsx(_0x3741b5.Suspense, {
        fallback: null,
        children: _0x4c9e3f.jsx(I, {
          isOpen: _0x243331,
          onClose: _0x14ef70
        })
      })]
    }) : _0x4c9e3f.jsx("div", {
      className: "flex-1 flex items-center justify-center",
      children: _0x4c9e3f.jsx("div", {
        className: "size-6 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin"
      })
    })]
  });
}
export { C as default };