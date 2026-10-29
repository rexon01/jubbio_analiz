import { b as _0x12169e, j as _0x4f6449 } from "./index-cQfEKR1W.js";
import { H as _0x275afb, P as _0x3c1705, C as _0x520093, L as _0xe41bee, j as _0x714ef7, D as _0x4837d5, a as _0x551b52, k as _0x131da2, R as _0x2cb29e, i as _0x452f1f, l as _0x397f66 } from "./DocComponents-BWAUshvB.js";
import { C as _0x28415d } from "./CodeBlock-B4seo9QW.js";
import "./clipboard-BQ9qambq.js";
import "./loader-circle-CTtxa1g9.js";
import "./prism-2cMp9j73.js";
function g() {
  const {
    t: _0x490b13
  } = _0x12169e("docs");
  return _0x4f6449.jsxs(_0x4f6449.Fragment, {
    children: [_0x4f6449.jsx(_0x275afb, {
      children: _0x490b13("webhookMgmt.webhookYonetimi")
    }), _0x4f6449.jsx(_0x3c1705, {
      children: _0x490b13("webhookMgmt.webhooklarHariciServislerdenGithub")
    }), _0x4f6449.jsx(_0x520093, {
      type: "info",
      title: _0x490b13("webhookMgmt.calloutGenelBilgiler"),
      children: _0x4f6449.jsxs(_0xe41bee, {
        children: [_0x4f6449.jsx(_0x714ef7, {
          children: _0x490b13("webhookMgmt.genelBilgiMaxWebhook")
        }), _0x4f6449.jsx(_0x714ef7, {
          children: _0x490b13("webhookMgmt.genelBilgiKanalTipleri")
        }), _0x4f6449.jsx(_0x714ef7, {
          children: _0x490b13("webhookMgmt.genelBilgiOtoIsim")
        }), _0x4f6449.jsx(_0x714ef7, {
          children: _0x490b13("webhookMgmt.genelBilgiToken")
        }), _0x4f6449.jsx(_0x714ef7, {
          children: _0x490b13("webhookMgmt.genelBilgiRateLimit")
        }), _0x4f6449.jsx(_0x714ef7, {
          children: _0x490b13("webhookMgmt.genelBilgiAvatar")
        })]
      })
    }), _0x4f6449.jsx(_0x4837d5, {}), _0x4f6449.jsx(_0x551b52, {
      id: "webhook-olustur",
      children: _0x490b13("webhookMgmt.webhookOlustur")
    }), _0x4f6449.jsx(_0x3c1705, {
      children: _0x490b13("webhookMgmt.olusturDesc")
    }), _0x4f6449.jsx(_0x131da2, {
      method: "POST",
      path: "/guilds/{guildId}/channels/{channelId}/webhooks",
      auth: "Bearer",
      description: _0x490b13("webhookMgmt.endpointDescCreate")
    }), _0x4f6449.jsx(_0x28415d, {
      code: "{\n  \"id\": \"554114951992586240\",\n  \"guild_id\": \"540528238699487232\",\n  \"channel_id\": \"545980009056055296\",\n  \"name\": \"Captain Hook\",\n  \"avatar_url\": null,\n  \"token\": \"WBTUYkSzHiKQNzXm_cBkNf95DlPYzpXnstvWM50mIx4\",\n  \"created_by\": 2,\n  \"is_active\": true,\n  \"last_used_at\": null,\n  \"rate_limit_remaining\": 60\n}",
      language: "json",
      title: "201 Created"
    }), _0x4f6449.jsx(_0x2cb29e, {
      codes: [{
        code: 201,
        description: _0x490b13("webhookMgmt.resp201Created")
      }, {
        code: 400,
        description: _0x490b13("webhookMgmt.resp400InvalidChannel")
      }, {
        code: 403,
        description: _0x490b13("webhookMgmt.resp403LimitOrPerm")
      }]
    }), _0x4f6449.jsx(_0x4837d5, {}), _0x4f6449.jsx(_0x551b52, {
      id: "webhook-listele",
      children: _0x490b13("webhookMgmt.webhooklariListele")
    }), _0x4f6449.jsx(_0x452f1f, {
      id: "kanal-webhooklari",
      children: _0x490b13("webhookMgmt.kanalWebhooklari")
    }), _0x4f6449.jsx(_0x131da2, {
      method: "GET",
      path: "/guilds/{guildId}/channels/{channelId}/webhooks",
      auth: "Bearer",
      description: _0x490b13("webhookMgmt.endpointDescListChannel")
    }), _0x4f6449.jsx(_0x452f1f, {
      id: "guild-webhooklari",
      children: _0x490b13("webhookMgmt.guildWebhooklari")
    }), _0x4f6449.jsx(_0x131da2, {
      method: "GET",
      path: "/guilds/{guildId}/webhooks",
      auth: "Bearer",
      description: _0x490b13("webhookMgmt.endpointDescListGuild")
    }), _0x4f6449.jsx(_0x3c1705, {
      children: _0x490b13("webhookMgmt.herIkiEndpointDe")
    }), _0x4f6449.jsx(_0x2cb29e, {
      codes: [{
        code: 200,
        description: _0x490b13("webhookMgmt.resp200List")
      }, {
        code: 403,
        description: _0x490b13("webhookMgmt.resp403Perm")
      }]
    }), _0x4f6449.jsx(_0x4837d5, {}), _0x4f6449.jsx(_0x551b52, {
      id: "webhook-detay",
      children: _0x490b13("webhookMgmt.webhookDetayi")
    }), _0x4f6449.jsx(_0x131da2, {
      method: "GET",
      path: "/guild-webhooks/{webhookId}",
      auth: "Bearer",
      description: _0x490b13("webhookMgmt.endpointDescDetail")
    }), _0x4f6449.jsx(_0x2cb29e, {
      codes: [{
        code: 200,
        description: _0x490b13("webhookMgmt.resp200Detail")
      }, {
        code: 404,
        description: _0x490b13("webhookMgmt.resp404NotFound")
      }]
    }), _0x4f6449.jsx(_0x4837d5, {}), _0x4f6449.jsx(_0x551b52, {
      id: "webhook-guncelle",
      children: _0x490b13("webhookMgmt.webhookGuncelle")
    }), _0x4f6449.jsx(_0x131da2, {
      method: "PATCH",
      path: "/guild-webhooks/{webhookId}",
      auth: "Bearer",
      description: _0x490b13("webhookMgmt.endpointDescUpdate")
    }), _0x4f6449.jsx(_0x3c1705, {
      children: _0x490b13("webhookMgmt.guncelleDesc")
    }), _0x4f6449.jsx(_0x452f1f, {
      id: "json-body",
      children: _0x490b13("webhookMgmt.jsonBodyTitle")
    }), _0x4f6449.jsx(_0x28415d, {
      code: "{\n  \"name\": \"Yeni İsim\",\n  \"avatar_url\": \"https://cdn.example.com/avatar.png\",\n  \"channel_id\": \"545980009056055297\"\n}",
      language: "json",
      title: "JSON Body"
    }), _0x4f6449.jsx(_0x520093, {
      type: "warning",
      title: _0x490b13("webhookMgmt.calloutAvatarSilme"),
      children: _0x490b13("webhookMgmt.calloutAvatarSilmeBody")
    }), _0x4f6449.jsx(_0x452f1f, {
      id: "multipart-form-data",
      children: _0x490b13("webhookMgmt.multipartTitle")
    }), _0x4f6449.jsx(_0x397f66, {
      params: [{
        name: "name",
        type: "string",
        required: false,
        description: _0x490b13("webhookMgmt.paramName")
      }, {
        name: "avatar",
        type: "file",
        required: false,
        description: _0x490b13("webhookMgmt.paramAvatar")
      }, {
        name: "avatar_url",
        type: "string",
        required: false,
        description: _0x490b13("webhookMgmt.paramAvatarUrl")
      }, {
        name: "channel_id",
        type: "string",
        required: false,
        description: _0x490b13("webhookMgmt.paramChannelId")
      }]
    }), _0x4f6449.jsx(_0x2cb29e, {
      codes: [{
        code: 200,
        description: _0x490b13("webhookMgmt.resp200Updated")
      }, {
        code: 400,
        description: _0x490b13("webhookMgmt.resp400InvalidUpdate")
      }, {
        code: 404,
        description: _0x490b13("webhookMgmt.resp404UpdateNotFound")
      }]
    }), _0x4f6449.jsx(_0x4837d5, {}), _0x4f6449.jsx(_0x551b52, {
      id: "webhook-sil",
      children: _0x490b13("webhookMgmt.webhookSil")
    }), _0x4f6449.jsx(_0x131da2, {
      method: "DELETE",
      path: "/guild-webhooks/{webhookId}",
      auth: "Bearer",
      description: _0x490b13("webhookMgmt.endpointDescDelete")
    }), _0x4f6449.jsx(_0x2cb29e, {
      codes: [{
        code: 204,
        description: _0x490b13("webhookMgmt.resp204Deleted")
      }, {
        code: 403,
        description: _0x490b13("webhookMgmt.resp403Perm")
      }, {
        code: 404,
        description: _0x490b13("webhookMgmt.resp404NotFound")
      }]
    }), _0x4f6449.jsx(_0x4837d5, {}), _0x4f6449.jsx(_0x551b52, {
      id: "bot-api",
      children: _0x490b13("webhookMgmt.botApiEndpoints")
    }), _0x4f6449.jsx(_0x3c1705, {
      children: _0x490b13("webhookMgmt.botApiDesc")
    }), _0x4f6449.jsx(_0x452f1f, {
      id: "bot-olustur",
      children: _0x490b13("webhookMgmt.webhookOlusturBot")
    }), _0x4f6449.jsx(_0x131da2, {
      method: "POST",
      path: "/bot/guilds/{guildId}/channels/{channelId}/webhooks",
      auth: "Bot",
      description: _0x490b13("webhookMgmt.endpointDescBotCreate")
    }), _0x4f6449.jsx(_0x452f1f, {
      id: "bot-listele-kanal",
      children: _0x490b13("webhookMgmt.kanalWebhooklariBot")
    }), _0x4f6449.jsx(_0x131da2, {
      method: "GET",
      path: "/bot/guilds/{guildId}/channels/{channelId}/webhooks",
      auth: "Bot",
      description: _0x490b13("webhookMgmt.endpointDescBotListChannel")
    }), _0x4f6449.jsx(_0x452f1f, {
      id: "bot-listele-guild",
      children: _0x490b13("webhookMgmt.guildWebhooklariBot")
    }), _0x4f6449.jsx(_0x131da2, {
      method: "GET",
      path: "/bot/guilds/{guildId}/webhooks",
      auth: "Bot",
      description: _0x490b13("webhookMgmt.endpointDescBotListGuild")
    }), _0x4f6449.jsx(_0x452f1f, {
      id: "bot-guncelle",
      children: _0x490b13("webhookMgmt.webhookGuncelleBot")
    }), _0x4f6449.jsx(_0x131da2, {
      method: "PATCH",
      path: "/bot/guilds/{guildId}/webhooks/{webhookId}",
      auth: "Bot",
      description: _0x490b13("webhookMgmt.endpointDescBotUpdate")
    }), _0x4f6449.jsx(_0x452f1f, {
      id: "bot-sil",
      children: _0x490b13("webhookMgmt.webhookSilBot")
    }), _0x4f6449.jsx(_0x131da2, {
      method: "DELETE",
      path: "/bot/guilds/{guildId}/webhooks/{webhookId}",
      auth: "Bot",
      description: _0x490b13("webhookMgmt.endpointDescBotDelete")
    })]
  });
}
export { g as default };