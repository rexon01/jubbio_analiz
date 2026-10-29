import { b as _0x1a554e, j as _0xea59f } from "./index-cQfEKR1W.js";
import { H as _0xf6a356, C as _0x223556, a as _0x166938, P as _0x546e65, k as _0x7a3f97, m as _0x412b24, D as _0x41fb6a, l as _0x110374 } from "./DocComponents-BWAUshvB.js";
import { C as _0x3b19de } from "./CodeBlock-B4seo9QW.js";
import "./clipboard-BQ9qambq.js";
import "./loader-circle-CTtxa1g9.js";
import "./prism-2cMp9j73.js";
const h = "{\n  \"id\": \"123456789\",\n  \"guild_id\": \"987654321\",\n  \"channel_id\": \"111222333\",\n  \"name\": \"My Webhook\",\n  \"avatar_url\": \"https://cdn.example.com/webhooks/123/avatar.png\",\n  \"token\": \"abc123xyz...\",\n  \"created_by\": 42,\n  \"is_active\": true,\n  \"last_used_at\": \"2026-03-10T12:00:00Z\",\n  \"rate_limit_remaining\": 5\n}";
function c() {
  const {
    t: _0x108d65
  } = _0x1a554e("docs");
  const _0xcf6e0c = [{
    code: 400,
    body: "{\"error\":\"Geçersiz guild ID\"}",
    condition: _0x108d65("botApiWebhooks.errorGuildIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Geçersiz kanal ID\"}",
    condition: _0x108d65("botApiWebhooks.errorChannelIdInvalid")
  }, {
    code: 401,
    body: "{\"error\":\"Kimlik doğrulama gerekli\"}",
    condition: _0x108d65("botApiWebhooks.errorAuthRequired")
  }, {
    code: 403,
    body: "{\"error\":\"Yetersiz izinler\"}",
    condition: _0x108d65("botApiWebhooks.errorInsufficientPerms")
  }, {
    code: 500,
    body: "{\"error\":\"Webhook'lar getirilemedi\"}",
    condition: _0x108d65("botApiWebhooks.errorServiceError")
  }];
  const _0x4fcd56 = [{
    code: 400,
    body: "{\"error\":\"Geçersiz guild ID\"}",
    condition: _0x108d65("botApiWebhooks.errorGuildIdInvalid")
  }, {
    code: 401,
    body: "{\"error\":\"Kimlik doğrulama gerekli\"}",
    condition: _0x108d65("botApiWebhooks.errorAuthRequired")
  }, {
    code: 403,
    body: "{\"error\":\"Yetersiz izinler\"}",
    condition: _0x108d65("botApiWebhooks.errorInsufficientPerms")
  }, {
    code: 500,
    body: "{\"error\":\"Webhook'lar getirilemedi\"}",
    condition: _0x108d65("botApiWebhooks.errorServiceError")
  }];
  const _0x167f06 = [{
    code: 400,
    body: "{\"error\":\"Geçersiz guild ID\"}",
    condition: _0x108d65("botApiWebhooks.errorGuildIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Geçersiz kanal ID\"}",
    condition: _0x108d65("botApiWebhooks.errorChannelIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"webhook name must be between 1 and 80 characters\"}",
    condition: _0x108d65("botApiWebhooks.errorInvalidName")
  }, {
    code: 400,
    body: "{\"error\":\"webhooks can only be created in text, announcement, or forum channels\"}",
    condition: _0x108d65("botApiWebhooks.errorIncompatibleChannel")
  }, {
    code: 401,
    body: "{\"error\":\"Kimlik doğrulama gerekli\"}",
    condition: _0x108d65("botApiWebhooks.errorAuthRequired")
  }, {
    code: 403,
    body: "{\"error\":\"Yetersiz izinler\"}",
    condition: _0x108d65("botApiWebhooks.errorInsufficientPerms")
  }, {
    code: 403,
    body: "{\"error\":\"guild has reached the maximum number of webhooks (15)\"}",
    condition: _0x108d65("botApiWebhooks.errorGuildWebhookLimit")
  }, {
    code: 500,
    body: "{\"error\":\"Webhook oluşturulamadı\"}",
    condition: _0x108d65("botApiWebhooks.errorServiceError")
  }];
  const _0x58f9d0 = [{
    code: 400,
    body: "{\"error\":\"Geçersiz webhook ID\"}",
    condition: _0x108d65("botApiWebhooks.errorWebhookIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Geçersiz guild ID\"}",
    condition: _0x108d65("botApiWebhooks.errorGuildIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Güncellenecek alan belirtilmedi\"}",
    condition: _0x108d65("botApiWebhooks.errorNoFieldsToUpdate")
  }, {
    code: 400,
    body: "{\"error\":\"webhook name must be between 1 and 80 characters\"}",
    condition: _0x108d65("botApiWebhooks.errorInvalidName")
  }, {
    code: 400,
    body: "{\"error\":\"webhooks can only be created in text, announcement, or forum channels\"}",
    condition: _0x108d65("botApiWebhooks.errorChannelMoveIncompat")
  }, {
    code: 400,
    body: "{\"error\":\"Geçersiz dosya türü. Sadece jpg, png, webp desteklenir\"}",
    condition: _0x108d65("botApiWebhooks.errorInvalidFileType")
  }, {
    code: 400,
    body: "{\"error\":\"Dosya okunamadı\"}",
    condition: _0x108d65("botApiWebhooks.errorFileReadFailed")
  }, {
    code: 400,
    body: "{\"error\":\"Dosya çok büyük. Maksimum: 5MB\"}",
    condition: _0x108d65("botApiWebhooks.errorFileTooLarge")
  }, {
    code: 400,
    body: "{\"error\":\"Desteklenmeyen dosya uzantısı\"}",
    condition: _0x108d65("botApiWebhooks.errorUnsupportedExt")
  }, {
    code: 400,
    body: "{\"error\":\"Geçersiz istek\"}",
    condition: _0x108d65("botApiWebhooks.errorJsonParseFailed")
  }, {
    code: 401,
    body: "{\"error\":\"Kimlik doğrulama gerekli\"}",
    condition: _0x108d65("botApiWebhooks.errorAuthRequired")
  }, {
    code: 403,
    body: "{\"error\":\"Yetersiz izinler\"}",
    condition: _0x108d65("botApiWebhooks.errorInsufficientPerms")
  }, {
    code: 404,
    body: "{\"error\":\"Webhook bulunamadı\"}",
    condition: _0x108d65("botApiWebhooks.errorWebhookNotFound")
  }, {
    code: 500,
    body: "{\"error\":\"Webhook güncellenemedi\"}",
    condition: _0x108d65("botApiWebhooks.errorUpdateFailed")
  }, {
    code: 500,
    body: "{\"error\":\"Avatar yüklenemedi\"}",
    condition: _0x108d65("botApiWebhooks.errorAvatarUploadFailed")
  }, {
    code: 503,
    body: "{\"error\":\"Dosya yükleme servisi kullanılamıyor\"}",
    condition: _0x108d65("botApiWebhooks.errorUploadServiceDown")
  }];
  const _0x183734 = [{
    code: 400,
    body: "{\"error\":\"Geçersiz webhook ID\"}",
    condition: _0x108d65("botApiWebhooks.errorWebhookIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Geçersiz guild ID\"}",
    condition: _0x108d65("botApiWebhooks.errorGuildIdInvalid")
  }, {
    code: 401,
    body: "{\"error\":\"Kimlik doğrulama gerekli\"}",
    condition: _0x108d65("botApiWebhooks.errorAuthRequired")
  }, {
    code: 403,
    body: "{\"error\":\"Yetersiz izinler\"}",
    condition: _0x108d65("botApiWebhooks.errorInsufficientPerms")
  }, {
    code: 404,
    body: "{\"error\":\"Webhook bulunamadı\"}",
    condition: _0x108d65("botApiWebhooks.errorWebhookNotFound")
  }, {
    code: 500,
    body: "{\"error\":\"Webhook silinemedi\"}",
    condition: _0x108d65("botApiWebhooks.errorDeleteFailed")
  }];
  return _0xea59f.jsxs(_0xea59f.Fragment, {
    children: [_0xea59f.jsx(_0xf6a356, {
      children: _0x108d65("botApiWebhooks.pageTitle")
    }), _0xea59f.jsx(_0x223556, {
      type: "info",
      title: "omitempty",
      children: _0x108d65("botApiWebhooks.calloutOmitempty")
    }), _0xea59f.jsx(_0x223556, {
      type: "info",
      title: _0x108d65("botApiWebhooks.calloutwebhookResponseYapisi"),
      children: _0x108d65("botApiWebhooks.calloutwebhookResponseBody")
    }), _0xea59f.jsx(_0x166938, {
      id: "kanal-webhooklari",
      children: _0x108d65("botApiWebhooks.kanalWebhooklariniListele")
    }), _0xea59f.jsx(_0x546e65, {
      children: _0x108d65("botApiWebhooks.kanalWebhooksDesc")
    }), _0xea59f.jsx(_0x7a3f97, {
      method: "GET",
      path: "/bot/guilds/{guildId}/channels/{channelId}/webhooks",
      description: _0x108d65("botApiWebhooks.endpointDescChannelWebhooks"),
      auth: "Bot Token",
      tryIt: {
        params: [{
          name: "guildId",
          in: "path",
          placeholder: _0x108d65("botApiWebhooks.placeholderGuildId")
        }, {
          name: "channelId",
          in: "path",
          placeholder: _0x108d65("botApiWebhooks.placeholderChannelId")
        }]
      }
    }), _0xea59f.jsx(_0x412b24, {
      success: _0xea59f.jsx(_0x3b19de, {
        code: "// 200 OK\n[\n  " + h + "\n]",
        language: "json",
        title: "200 OK"
      }),
      errors: _0xcf6e0c
    }), _0xea59f.jsx(_0x41fb6a, {}), _0xea59f.jsx(_0x166938, {
      id: "guild-webhooklari",
      children: _0x108d65("botApiWebhooks.guildWebhooklariniListele")
    }), _0xea59f.jsx(_0x546e65, {
      children: _0x108d65("botApiWebhooks.guildWebhooksDesc")
    }), _0xea59f.jsx(_0x7a3f97, {
      method: "GET",
      path: "/bot/guilds/{guildId}/webhooks",
      description: _0x108d65("botApiWebhooks.endpointDescGuildWebhooks"),
      auth: "Bot Token",
      tryIt: {
        params: [{
          name: "guildId",
          in: "path",
          placeholder: _0x108d65("botApiWebhooks.placeholderGuildId")
        }]
      }
    }), _0xea59f.jsx(_0x412b24, {
      success: _0xea59f.jsx(_0x3b19de, {
        code: "// 200 OK\n[\n  " + h + "\n]",
        language: "json",
        title: "200 OK"
      }),
      errors: _0x4fcd56
    }), _0xea59f.jsx(_0x41fb6a, {}), _0xea59f.jsx(_0x166938, {
      id: "webhook-olustur",
      children: _0x108d65("botApiWebhooks.webhookOlustur")
    }), _0xea59f.jsx(_0x546e65, {
      children: _0x108d65("botApiWebhooks.webhookOlusturDesc")
    }), _0xea59f.jsx(_0x7a3f97, {
      method: "POST",
      path: "/bot/guilds/{guildId}/channels/{channelId}/webhooks",
      description: _0x108d65("botApiWebhooks.endpointDescCreateWebhook"),
      auth: "Bot Token",
      tryIt: {
        params: [{
          name: "guildId",
          in: "path",
          placeholder: _0x108d65("botApiWebhooks.placeholderGuildId")
        }, {
          name: "channelId",
          in: "path",
          placeholder: _0x108d65("botApiWebhooks.placeholderChannelId")
        }],
        bodyType: "json",
        bodyTemplate: "{\n  \"name\": \"My Webhook\"\n}"
      }
    }), _0xea59f.jsx(_0x110374, {
      title: _0x108d65("botApiMessages.titleJsonBody"),
      params: [{
        name: "name",
        type: "string",
        required: true,
        description: _0x108d65("botApiWebhooks.paramName")
      }]
    }), _0xea59f.jsx(_0x412b24, {
      success: _0xea59f.jsx(_0x3b19de, {
        code: "// 201 Created\n" + h,
        language: "json",
        title: "201 Created"
      }),
      errors: _0x167f06
    }), _0xea59f.jsx(_0x41fb6a, {}), _0xea59f.jsx(_0x166938, {
      id: "webhook-guncelle",
      children: _0x108d65("botApiWebhooks.webhookGuncelle")
    }), _0xea59f.jsx(_0x546e65, {
      children: _0x108d65("botApiWebhooks.webhookGuncelleDesc")
    }), _0xea59f.jsx(_0x7a3f97, {
      method: "PATCH",
      path: "/bot/guilds/{guildId}/webhooks/{webhookId}",
      description: _0x108d65("botApiWebhooks.endpointDescUpdateWebhook"),
      auth: "Bot Token",
      tryIt: {
        params: [{
          name: "guildId",
          in: "path",
          placeholder: _0x108d65("botApiWebhooks.placeholderGuildId")
        }, {
          name: "webhookId",
          in: "path",
          placeholder: _0x108d65("botApiWebhooks.placeholderWebhookId")
        }],
        bodyType: "json",
        bodyTemplate: "{\n  \"name\": \"Updated Webhook\"\n}"
      }
    }), _0xea59f.jsx(_0x110374, {
      title: _0x108d65("botApiMessages.titleJsonBody"),
      params: [{
        name: "name",
        type: "string",
        required: false,
        description: _0x108d65("botApiWebhooks.paramUpdateName")
      }, {
        name: "avatar_url",
        type: "string",
        required: false,
        description: _0x108d65("botApiWebhooks.paramAvatarUrl")
      }, {
        name: "channel_id",
        type: "string",
        required: false,
        description: _0x108d65("botApiWebhooks.paramChannelId")
      }]
    }), _0xea59f.jsx(_0x223556, {
      type: "info",
      title: _0x108d65("botApiWebhooks.calloutmultipartAvatarYukleme"),
      children: _0x108d65("botApiWebhooks.calloutmultipartBody")
    }), _0xea59f.jsx(_0x412b24, {
      success: _0xea59f.jsx(_0x3b19de, {
        code: "// 200 OK\n" + h,
        language: "json",
        title: "200 OK"
      }),
      errors: _0x58f9d0
    }), _0xea59f.jsx(_0x41fb6a, {}), _0xea59f.jsx(_0x166938, {
      id: "webhook-sil",
      children: _0x108d65("botApiWebhooks.webhookSil")
    }), _0xea59f.jsx(_0x546e65, {
      children: _0x108d65("botApiWebhooks.webhookSilDesc")
    }), _0xea59f.jsx(_0x7a3f97, {
      method: "DELETE",
      path: "/bot/guilds/{guildId}/webhooks/{webhookId}",
      description: _0x108d65("botApiWebhooks.endpointDescDeleteWebhook"),
      auth: "Bot Token",
      tryIt: {
        params: [{
          name: "guildId",
          in: "path",
          placeholder: _0x108d65("botApiWebhooks.placeholderGuildId")
        }, {
          name: "webhookId",
          in: "path",
          placeholder: _0x108d65("botApiWebhooks.placeholderWebhookId")
        }]
      }
    }), _0xea59f.jsx(_0x412b24, {
      success: _0xea59f.jsx(_0x3b19de, {
        code: "// 204 No Content\n// Body yok",
        language: "json",
        title: "204 No Content"
      }),
      errors: _0x183734
    })]
  });
}
export { c as default };