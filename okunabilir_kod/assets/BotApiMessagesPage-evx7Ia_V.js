import { b as _0x5a2bf6, j as _0x58815d } from "./index-cQfEKR1W.js";
import { H as _0x3f46a6, C as _0x5744ce, a as _0x2b2372, P as _0x27248e, k as _0x5c179c, l as _0x44d087, m as _0x2f0a92, D as _0x351fd1, I as _0x1f29ed } from "./DocComponents-BWAUshvB.js";
import { C as _0x3da80e } from "./CodeBlock-B4seo9QW.js";
import "./clipboard-BQ9qambq.js";
import "./loader-circle-CTtxa1g9.js";
import "./prism-2cMp9j73.js";
function m() {
  const {
    t: _0x40e2ee
  } = _0x5a2bf6("docs");
  const _0x2f5490 = [{
    code: 400,
    body: "{\"error\":\"Geçersiz kanal ID formatı\"}",
    condition: _0x40e2ee("botApiMessages.condChannelIdParse")
  }, {
    code: 400,
    body: "{\"error\":\"Geçersiz guild ID formatı\"}",
    condition: _0x40e2ee("botApiMessages.condGuildIdParse")
  }, {
    code: 400,
    body: "{\"error\":\"Geçersiz JSON formatı\"}",
    condition: _0x40e2ee("botApiMessages.condJsonParse")
  }, {
    code: 400,
    body: "{\"error\":\"Mesaj içeriği veya dosya gereklidir\"}",
    condition: _0x40e2ee("botApiMessages.condContentRequired")
  }, {
    code: 400,
    body: "{\"error\":\"Geçersiz reply_to_id formatı\"}",
    condition: _0x40e2ee("botApiMessages.condReplyToParse")
  }, {
    code: 400,
    body: "{\"error\":\"Kanal bu sunucuya ait değil\"}",
    condition: _0x40e2ee("botApiMessages.condChannelNotInGuild")
  }, {
    code: 400,
    body: "{\"error\":\"embed fields cannot exceed 25\"}",
    condition: _0x40e2ee("botApiMessages.condEmbedFieldsExceed")
  }, {
    code: 400,
    body: "{\"error\":\"Dosya yüklenemedi\"}",
    condition: _0x40e2ee("botApiMessages.condFileUploadFail")
  }, {
    code: 400,
    body: "{\"error\":\"Maksimum dosya sayısı aşıldı\"}",
    condition: _0x40e2ee("botApiMessages.condFileLimit")
  }, {
    code: 401,
    body: "{\"error\":\"Kullanıcı kimliği doğrulanamadı\"}",
    condition: _0x40e2ee("botApiMessages.condUserIdMissing")
  }, {
    code: 403,
    body: "{\"error\":\"Bu sunucudan yasaklandınız\"}",
    condition: _0x40e2ee("botApiMessages.condBanned")
  }, {
    code: 403,
    body: "{\"error\":\"Bu sunucunun üyesi değilsiniz\"}",
    condition: _0x40e2ee("botApiMessages.condNotMember")
  }, {
    code: 403,
    body: "{\"error\":\"Zaman aşımına uğradınız...\"}",
    condition: _0x40e2ee("botApiMessages.condTimeout")
  }, {
    code: 403,
    body: "{\"error\":\"Embed ve component yalnızca botlar...\"}",
    condition: _0x40e2ee("botApiMessages.condBotOnlyEmbed")
  }, {
    code: 403,
    body: "{\"error\":\"Dosya ekleme izniniz yok\"}",
    condition: _0x40e2ee("botApiMessages.condNoAttachFiles")
  }, {
    code: 404,
    body: "{\"error\":\"Kanal bulunamadı\"}",
    condition: _0x40e2ee("botApiMessages.condChannelNotFound")
  }, {
    code: 409,
    body: "{\"error\":\"Bu mesaj zaten gönderildi\"}",
    condition: _0x40e2ee("botApiMessages.condDuplicateNonce")
  }, {
    code: 429,
    body: "{\"error\":\"Yavaş mod aktif...\",\"retry_after\":10}",
    condition: _0x40e2ee("botApiMessages.condSlowmode")
  }, {
    code: 500,
    body: "{\"error\":\"Mesaj gönderilemedi\"}",
    condition: _0x40e2ee("botApiMessages.condDbError")
  }];
  const _0x51d5f7 = [..._0x2f5490, {
    code: 400,
    body: "{\"error\":\"Ephemeral mesaj için target_user_id gerekli\"}",
    condition: _0x40e2ee("botApiMessages.condEphemeralTargetMissing")
  }, {
    code: 400,
    body: "{\"error\":\"Ephemeral mesaj için content veya embeds gerekli\"}",
    condition: _0x40e2ee("botApiMessages.condEphemeralContentMissing")
  }];
  const _0x263fd2 = [{
    code: 400,
    body: "{\"error\":\"Geçersiz mesaj ID formatı\"}",
    condition: _0x40e2ee("botApiMessages.condMessageIdParse")
  }, {
    code: 400,
    body: "{\"error\":\"Geçersiz mesaj formatı\"}",
    condition: _0x40e2ee("botApiMessages.condJsonParseEdit")
  }, {
    code: 400,
    body: "{\"error\":\"At least one of content, embeds, or components...\"}",
    condition: _0x40e2ee("botApiMessages.condNoFieldProvided")
  }, {
    code: 400,
    body: "{\"error\":\"Mesaj içeriği 2000 karakteri aşamaz\"}",
    condition: _0x40e2ee("botApiMessages.condContentTooLong")
  }, {
    code: 401,
    body: "{\"error\":\"Kullanıcı kimliği doğrulanmalıdır\"}",
    condition: _0x40e2ee("botApiMessages.condUserIdMissingAuth")
  }, {
    code: 403,
    body: "{\"error\":\"Başkalarının mesajlarını düzenleyemezsiniz\"}",
    condition: _0x40e2ee("botApiMessages.condNotOwner")
  }, {
    code: 403,
    body: "{\"error\":\"Embed ve component yalnızca botlar...\"}",
    condition: _0x40e2ee("botApiMessages.condBotOnlyEmbedEdit")
  }, {
    code: 404,
    body: "{\"error\":\"Mesaj bulunamadı\"}",
    condition: _0x40e2ee("botApiMessages.condMessageNotFound")
  }, {
    code: 500,
    body: "{\"error\":\"Mesaj güncellenemedi\"}",
    condition: _0x40e2ee("botApiMessages.condDbErrorEdit")
  }];
  const _0x59ef03 = [{
    code: 400,
    body: "{\"error\":\"Geçersiz mesaj ID formatı\"}",
    condition: _0x40e2ee("botApiMessages.condDeleteMessageIdParse")
  }, {
    code: 400,
    body: "{\"error\":\"Geçersiz sunucu ID formatı\"}",
    condition: _0x40e2ee("botApiMessages.condDeleteGuildIdParse")
  }, {
    code: 401,
    body: "{\"error\":\"Kullanıcı kimliği doğrulanmalıdır\"}",
    condition: _0x40e2ee("botApiMessages.condDeleteUserIdMissing")
  }, {
    code: 403,
    body: "{\"error\":\"Bu mesajı silme yetkiniz yok\"}",
    condition: _0x40e2ee("botApiMessages.condDeleteNoPermission")
  }, {
    code: 404,
    body: "{\"error\":\"Mesaj bulunamadı\"}",
    condition: _0x40e2ee("botApiMessages.condDeleteMessageNotFound")
  }, {
    code: 500,
    body: "{\"error\":\"Mesaj silinemedi\"}",
    condition: _0x40e2ee("botApiMessages.condDeleteDbError")
  }];
  const _0x34696b = [{
    code: 400,
    body: "{\"error\":\"Geçersiz kanal ID\"}",
    condition: _0x40e2ee("botApiMessages.condBulkChannelIdParse")
  }, {
    code: 400,
    body: "{\"error\":\"Geçersiz guild ID\"}",
    condition: _0x40e2ee("botApiMessages.condBulkGuildIdParse")
  }, {
    code: 400,
    body: "{\"error\":\"messages array is required\"}",
    condition: _0x40e2ee("botApiMessages.condBulkJsonParse")
  }, {
    code: 400,
    body: "{\"error\":\"messages array cannot be empty\"}",
    condition: _0x40e2ee("botApiMessages.condBulkEmptyArray")
  }, {
    code: 400,
    body: "{\"error\":\"cannot delete more than 100 messages at once\"}",
    condition: _0x40e2ee("botApiMessages.condBulkTooMany")
  }, {
    code: 400,
    body: "{\"error\":\"invalid message ID: abc\"}",
    condition: _0x40e2ee("botApiMessages.condBulkInvalidId")
  }, {
    code: 200,
    body: "{\"error\":\"no messages found to delete\",\"deleted\":0}",
    condition: _0x40e2ee("botApiMessages.condBulkNoneFound")
  }, {
    code: 500,
    body: "{\"error\":\"failed to delete messages: ...\"}",
    condition: _0x40e2ee("botApiMessages.condBulkAllFailed")
  }];
  const _0x3355f3 = [{
    code: 400,
    body: "{\"error\":\"Geçersiz kanal ID formatı\"}",
    condition: _0x40e2ee("botApiMessages.condHistoryChannelIdParse")
  }, {
    code: 400,
    body: "{\"error\":\"around parametresi before veya after ile...\"}",
    condition: _0x40e2ee("botApiMessages.condHistoryAroundConflict")
  }, {
    code: 404,
    body: "{\"error\":\"Hedef mesaj bulunamadı\"}",
    condition: _0x40e2ee("botApiMessages.condHistoryTargetNotFound")
  }, {
    code: 500,
    body: "{\"error\":\"Mesajlar yüklenirken bir hata oluştu\"}",
    condition: _0x40e2ee("botApiMessages.condHistoryDbError")
  }];
  const _0x4b2245 = [{
    code: 400,
    body: "{\"error\":\"Geçersiz kanal ID\"}",
    condition: _0x40e2ee("botApiMessages.condUploadChannelIdParse")
  }, {
    code: 400,
    body: "{\"error\":\"Dosya sağlanmadı\"}",
    condition: _0x40e2ee("botApiMessages.condUploadNoFile")
  }, {
    code: 400,
    body: "{\"error\":\"Dosya çok büyük (maksimum 25MB)\"}",
    condition: _0x40e2ee("botApiMessages.condUploadTooLarge")
  }, {
    code: 400,
    body: "{\"error\":\"Bu dosya türüne izin verilmiyor\"}",
    condition: _0x40e2ee("botApiMessages.condUploadForbiddenType")
  }, {
    code: 500,
    body: "{\"error\":\"Dosya yüklenemedi\"}",
    condition: _0x40e2ee("botApiMessages.condUploadError")
  }, {
    code: 500,
    body: "{\"error\":\"Dosya meta verisi kaydedilemedi\"}",
    condition: _0x40e2ee("botApiMessages.condUploadDbError")
  }];
  const _0x26ce9b = [{
    code: 400,
    body: "{\"error\":\"Alıcı kullanıcı ID'si gerekli\"}",
    condition: _0x40e2ee("botApiMessages.condDmRecipientRequired")
  }, {
    code: 400,
    body: "{\"error\":\"Geçersiz alıcı kullanıcı ID formatı\"}",
    condition: _0x40e2ee("botApiMessages.condDmRecipientParse")
  }, {
    code: 400,
    body: "{\"error\":\"Kendinize mesaj gönderemezsiniz\"}",
    condition: _0x40e2ee("botApiMessages.condDmSelfMessage")
  }, {
    code: 400,
    body: "{\"error\":\"Mesaj içeriği gereklidir\"}",
    condition: _0x40e2ee("botApiMessages.condDmContentRequired")
  }, {
    code: 400,
    body: "{\"error\":\"Mesaj içeriği veya dosya gereklidir\"}",
    condition: _0x40e2ee("botApiMessages.condDmContentOrFileRequired")
  }, {
    code: 400,
    body: "{\"error\":\"mesaj içeriği en fazla 2000 karakter olabilir\"}",
    condition: _0x40e2ee("botApiMessages.condDmContentTooLong")
  }, {
    code: 401,
    body: "{\"error\":\"Kullanıcı kimliği doğrulanmadı\"}",
    condition: _0x40e2ee("botApiMessages.condDmTokenInvalid")
  }, {
    code: 403,
    body: "{\"error\":\"Bu kullanıcı doğrudan mesajları kabul etmiyor\"}",
    condition: _0x40e2ee("botApiMessages.condDmNotAccepting")
  }, {
    code: 403,
    body: "{\"error\":\"Bu kullanıcıyı engellediniz\"}",
    condition: _0x40e2ee("botApiMessages.condDmBlockedBySender")
  }, {
    code: 403,
    body: "{\"error\":\"Bu kullanıcı tarafından engellendiniz\"}",
    condition: _0x40e2ee("botApiMessages.condDmBlockedByRecipient")
  }, {
    code: 404,
    body: "{\"error\":\"Alıcı kullanıcı bulunamadı\"}",
    condition: _0x40e2ee("botApiMessages.condDmRecipientNotFound")
  }, {
    code: 409,
    body: "{\"error\":\"Bu mesaj zaten gönderildi\"}",
    condition: _0x40e2ee("botApiMessages.condDmDuplicate")
  }, {
    code: 500,
    body: "{\"error\":\"Gönderici bilgileri alınamadı\"}",
    condition: _0x40e2ee("botApiMessages.condDmSenderInfoError")
  }, {
    code: 500,
    body: "{\"error\":\"Alıcı bilgileri alınamadı\"}",
    condition: _0x40e2ee("botApiMessages.condDmRecipientInfoError")
  }, {
    code: 500,
    body: "{\"error\":\"DM kanalı oluşturulurken hata oluştu: ...\"}",
    condition: _0x40e2ee("botApiMessages.condDmChannelCreateError")
  }, {
    code: 500,
    body: "{\"error\":\"Mesaj gönderilemedi\"}",
    condition: _0x40e2ee("botApiMessages.condDmSendError")
  }, {
    code: 503,
    body: "{\"error\":\"Doğrudan mesaj izni kontrol edilemedi. Lütfen daha sonra tekrar deneyin\"}",
    condition: _0x40e2ee("botApiMessages.condDmPermissionCheckError")
  }];
  const _0x1be586 = [{
    code: 400,
    body: "{\"error\":\"Geçersiz mesaj formatı\"}",
    condition: _0x40e2ee("botApiMessages.condDmExistJsonParse")
  }, {
    code: 400,
    body: "{\"error\":\"Mesaj içeriği gereklidir\"}",
    condition: _0x40e2ee("botApiMessages.condDmExistContentRequired")
  }, {
    code: 400,
    body: "{\"error\":\"Mesaj içeriği çok uzun\"}",
    condition: _0x40e2ee("botApiMessages.condDmExistContentTooLong")
  }, {
    code: 400,
    body: "{\"error\":\"Geçersiz kanal ID formatı\"}",
    condition: _0x40e2ee("botApiMessages.condDmExistChannelIdParse")
  }, {
    code: 400,
    body: "{\"error\":\"Bu kanal bir DM kanalı değil\"}",
    condition: _0x40e2ee("botApiMessages.condDmExistNotDmChannel")
  }, {
    code: 400,
    body: "{\"error\":\"Geçersiz alıcı kullanıcı ID formatı\"}",
    condition: _0x40e2ee("botApiMessages.condDmExistRecipientParse")
  }, {
    code: 400,
    body: "{\"error\":\"Kendinize mesaj gönderemezsiniz\"}",
    condition: _0x40e2ee("botApiMessages.condDmExistSelfMessage")
  }, {
    code: 400,
    body: "{\"error\":\"Alıcı kullanıcı ID gereklidir\"}",
    condition: _0x40e2ee("botApiMessages.condDmExistRecipientIdRequired")
  }, {
    code: 401,
    body: "{\"error\":\"Kullanıcı kimliği doğrulanamadı\"}",
    condition: _0x40e2ee("botApiMessages.condDmExistUserIdMissing")
  }, {
    code: 403,
    body: "{\"error\":\"Bu kullanıcıyı engellediniz...\"}",
    condition: _0x40e2ee("botApiMessages.condDmExistBlockedBySender")
  }, {
    code: 403,
    body: "{\"error\":\"Bu kullanıcı tarafından engellendiniz\"}",
    condition: _0x40e2ee("botApiMessages.condDmExistBlockedByRecipient")
  }, {
    code: 403,
    body: "{\"error\":\"Bu kullanıcıya DM gönderemezsiniz\"}",
    condition: _0x40e2ee("botApiMessages.condDmExistDmRestriction")
  }, {
    code: 404,
    body: "{\"error\":\"Alıcı kullanıcı bulunamadı\"}",
    condition: _0x40e2ee("botApiMessages.condDmExistRecipientNotFound")
  }, {
    code: 409,
    body: "{\"error\":\"Bu mesaj zaten gönderildi\"}",
    condition: _0x40e2ee("botApiMessages.condDmExistDuplicate")
  }, {
    code: 500,
    body: "{\"error\":\"Gönderen bilgisi alınamadı\"}",
    condition: _0x40e2ee("botApiMessages.condDmExistSenderInfoError")
  }, {
    code: 500,
    body: "{\"error\":\"Alıcı bilgisi alınamadı\"}",
    condition: _0x40e2ee("botApiMessages.condDmExistRecipientInfoError")
  }, {
    code: 500,
    body: "{\"error\":\"DM kanalı oluşturulamadı: ...\"}",
    condition: _0x40e2ee("botApiMessages.condDmExistChannelCreateError")
  }, {
    code: 500,
    body: "{\"error\":\"Mesaj gönderilemedi\"}",
    condition: _0x40e2ee("botApiMessages.condDmExistSendError")
  }, {
    code: 503,
    body: "{\"error\":\"DM izni kontrol edilemedi\"}",
    condition: _0x40e2ee("botApiMessages.condDmExistPermissionCheckError")
  }];
  const _0x21dba9 = [{
    code: 400,
    body: "{\"error\":\"Geçersiz kanal ID formatı\"}",
    condition: _0x40e2ee("botApiMessages.condDmHistoryChannelIdParse")
  }, {
    code: 401,
    body: "{\"error\":\"Kullanıcı kimliği doğrulanamadı\"}",
    condition: _0x40e2ee("botApiMessages.condDmHistoryUserIdMissing")
  }, {
    code: 403,
    body: "{\"error\":\"Bu DM kanalına erişim izniniz yok\"}",
    condition: _0x40e2ee("botApiMessages.condDmHistoryNoAccess")
  }, {
    code: 404,
    body: "{\"error\":\"DM kanalı bulunamadı\"}",
    condition: _0x40e2ee("botApiMessages.condDmHistoryChannelNotFound")
  }, {
    code: 500,
    body: "{\"error\":\"Mesajlar yüklenirken hata oluştu\"}",
    condition: _0x40e2ee("botApiMessages.condDmHistoryDbError")
  }];
  return <_0x58815d.Fragment><_0x3f46a6>{_0x40e2ee("botApiMessages.title")}</_0x3f46a6><_0x5744ce type="info" title="omitempty">{_0x40e2ee("botApiMessages.calloutOmitempty")}</_0x5744ce><_0x2b2372 id="mesaj-gonder">{_0x40e2ee("botApiMessages.mesajGonder")}</_0x2b2372><_0x27248e>{_0x40e2ee("botApiMessages.mesajGonderDesc", {
        mentionFormat: "<@ID>"
      })}</_0x27248e><_0x5c179c method="POST" path="/bot/guilds/{guildId}/channels/{channelId}/messages" description={_0x40e2ee("botApiMessages.endpointMesajGonderDesc")} auth="Bot Token" tryIt={{
      params: [{
        name: "guildId",
        in: "path",
        placeholder: _0x40e2ee("botApiMessages.placeholderSunucuId")
      }, {
        name: "channelId",
        in: "path",
        placeholder: _0x40e2ee("botApiMessages.placeholderKanalId")
      }],
      bodyType: "json",
      bodyTemplate: _0x40e2ee("botApiMessages.bodyTemplateMerhaba")
    }} /><_0x44d087 title={_0x40e2ee("botApiMessages.titleJsonBody")} params={[{
      name: "content",
      type: "string",
      required: false,
      description: _0x40e2ee("botApiMessages.paramContentDesc")
    }, {
      name: "embeds",
      type: "APIEmbed[]",
      required: false,
      description: _0x40e2ee("botApiMessages.paramEmbedsDesc")
    }, {
      name: "components",
      type: "any[]",
      required: false,
      description: _0x40e2ee("botApiMessages.paramComponentsDesc")
    }, {
      name: "mentions",
      type: "MentionsData",
      required: false,
      description: _0x40e2ee("botApiMessages.paramMentionsDesc")
    }, {
      name: "message_reference",
      type: "object",
      required: false,
      description: _0x40e2ee("botApiMessages.paramMessageRefDesc")
    }]} /><_0x2f0a92 success={<_0x3da80e code={"// 201 Created\n{\n  \"id\": \"554200123456789012\",\n  \"channel_id\": \"545980009056055296\",\n  \"guild_id\": \"540528238699487232\",\n  \"content\": \"Merhaba!\",\n  \"type\": \"bot\",\n  \"application_id\": \"551234567890123456\",\n  \"created_at\": \"2026-03-10T12:00:00Z\",\n  \"author\": {\n    \"id\": 2,\n    \"username\": \"MyBot\",\n    \"display_name\": \"MyBot\",\n    \"avatar_url\": \"https://cdn.example.com/avatar.png\"\n  },\n  \"embeds\": [\n    {\n      \"id\": \"554200123456789013\",\n      \"message_id\": \"554200123456789012\",\n      \"title\": \"Başlık\",\n      \"description\": \"Açıklama\",\n      \"color\": 5793266\n    }\n  ],\n  \"mentions\": {\n    \"users\": [{ \"id\": 123, \"username\": \"ilkay\" }]\n  }\n}"} language="json" title="201 Created" />} errors={_0x2f5490} /><_0x351fd1 /><_0x2b2372 id="ephemeral-mesaj">{_0x40e2ee("botApiMessages.ephemeralMesajGonder")}</_0x2b2372><_0x27248e>{_0x40e2ee("botApiMessages.sadeceBelirtilenKullaniciyaGorunen")}</_0x27248e><_0x5c179c method="POST" path="/bot/guilds/{guildId}/channels/{channelId}/messages" description={_0x40e2ee("botApiMessages.endpointEphemeralDesc")} auth="Bot Token" tryIt={{
      params: [{
        name: "guildId",
        in: "path",
        placeholder: _0x40e2ee("botApiMessages.placeholderSunucuId")
      }, {
        name: "channelId",
        in: "path",
        placeholder: _0x40e2ee("botApiMessages.placeholderKanalId")
      }],
      bodyType: "json",
      bodyTemplate: _0x40e2ee("botApiMessages.bodyTemplateEphemeral")
    }} /><_0x44d087 title={_0x40e2ee("botApiMessages.titleJsonBody")} params={[{
      name: "content",
      type: "string",
      required: false,
      description: _0x40e2ee("botApiMessages.paramContentEphemeralDesc")
    }, {
      name: "embeds",
      type: "APIEmbed[]",
      required: false,
      description: _0x40e2ee("botApiMessages.paramEmbedsDesc")
    }, {
      name: "components",
      type: "any[]",
      required: false,
      description: _0x40e2ee("botApiMessages.paramComponentsDesc")
    }, {
      name: "flags",
      type: "number",
      required: true,
      description: _0x40e2ee("botApiMessages.paramFlagsDesc")
    }, {
      name: "target_user_id",
      type: "number",
      required: true,
      description: _0x40e2ee("botApiMessages.paramTargetUserIdDesc")
    }]} /><_0x2f0a92 success={<_0x3da80e code={"// 201 Created\n{\n  \"id\": \"554200123456789099\",\n  \"ephemeral\": true,\n  \"flags\": 64\n}"} language="json" title="201 Created" />} errors={_0x51d5f7} /><_0x351fd1 /><_0x2b2372 id="mesaj-duzenle">{_0x40e2ee("botApiMessages.mesajDuzenle")}</_0x2b2372><_0x27248e>{_0x40e2ee("botApiMessages.botunKendiGonderdigiMesaji")}</_0x27248e><_0x5c179c method="PATCH" path="/bot/guilds/{guildId}/channels/{channelId}/messages/{messageId}" description={_0x40e2ee("botApiMessages.endpointMesajDuzenleDesc")} auth="Bot Token" tryIt={{
      params: [{
        name: "guildId",
        in: "path",
        placeholder: _0x40e2ee("botApiMessages.placeholderSunucuId")
      }, {
        name: "channelId",
        in: "path",
        placeholder: _0x40e2ee("botApiMessages.placeholderKanalId")
      }, {
        name: "messageId",
        in: "path",
        placeholder: _0x40e2ee("botApiMessages.placeholderMesajId")
      }],
      bodyType: "json",
      bodyTemplate: _0x40e2ee("botApiMessages.bodyTemplateDuzenle")
    }} /><_0x44d087 title={_0x40e2ee("botApiMessages.titleJsonBody")} params={[{
      name: "content",
      type: "string",
      required: false,
      description: _0x40e2ee("botApiMessages.paramContentEditDesc")
    }, {
      name: "embeds",
      type: "APIEmbed[]",
      required: false,
      description: _0x40e2ee("botApiMessages.paramEmbedsEditDesc")
    }, {
      name: "components",
      type: "any[]",
      required: false,
      description: _0x40e2ee("botApiMessages.paramComponentsDesc")
    }]} /><_0x2f0a92 success={<_0x3da80e code={"// 200 OK\n{\n  \"id\": \"554200123456789012\",\n  \"channel_id\": \"545980009056055296\",\n  \"guild_id\": \"540528238699487232\",\n  \"content\": \"Düzenlenmiş içerik\",\n  \"is_edited\": true,\n  \"edited_at\": \"2026-03-10T12:05:00Z\",\n  \"updated_at\": \"2026-03-10T12:05:00Z\",\n  \"created_at\": \"2026-03-10T12:00:00Z\",\n  \"author\": {\n    \"id\": 2,\n    \"username\": \"MyBot\",\n    \"display_name\": \"MyBot\"\n  }\n}"} language="json" title="200 OK" />} errors={_0x263fd2} /><_0x351fd1 /><_0x2b2372 id="mesaj-sil">{_0x40e2ee("botApiMessages.mesajSil")}</_0x2b2372><_0x27248e>{_0x40e2ee("botApiMessages.mesajSilDesc")}</_0x27248e><_0x5c179c method="DELETE" path="/bot/guilds/{guildId}/channels/{channelId}/messages/{messageId}" description={_0x40e2ee("botApiMessages.endpointMesajSilDesc")} auth="Bot Token" tryIt={{
      params: [{
        name: "guildId",
        in: "path",
        placeholder: _0x40e2ee("botApiMessages.placeholderSunucuId")
      }, {
        name: "channelId",
        in: "path",
        placeholder: _0x40e2ee("botApiMessages.placeholderKanalId")
      }, {
        name: "messageId",
        in: "path",
        placeholder: _0x40e2ee("botApiMessages.placeholderMesajId")
      }]
    }} /><_0x2f0a92 success={<_0x27248e><_0x1f29ed>204 No Content</_0x1f29ed> — {_0x40e2ee("botApiMessages.noBody")}</_0x27248e>} errors={_0x59ef03} /><_0x351fd1 /><_0x2b2372 id="toplu-mesaj-sil">{_0x40e2ee("botApiMessages.topluMesajSil")}</_0x2b2372><_0x27248e>{_0x40e2ee("botApiMessages.topluMesajSilDesc")}</_0x27248e><_0x5c179c method="POST" path="/bot/guilds/{guildId}/channels/{channelId}/messages/bulk-delete" description={_0x40e2ee("botApiMessages.endpointTopluSilDesc")} auth="Bot Token" tryIt={{
      params: [{
        name: "guildId",
        in: "path",
        placeholder: _0x40e2ee("botApiMessages.placeholderSunucuId")
      }, {
        name: "channelId",
        in: "path",
        placeholder: _0x40e2ee("botApiMessages.placeholderKanalId")
      }],
      bodyType: "json",
      bodyTemplate: _0x40e2ee("botApiMessages.bodyTemplateTopluSil")
    }} /><_0x44d087 title={_0x40e2ee("botApiMessages.titleJsonBody")} params={[{
      name: "messages",
      type: "string[]",
      required: true,
      description: _0x40e2ee("botApiMessages.paramMessagesDesc")
    }]} /><_0x2f0a92 success={<_0x3da80e code={"// 200 OK\n{\n  \"deleted\": 3\n}"} language="json" title="200 OK" />} errors={_0x34696b} /><_0x351fd1 /><_0x2b2372 id="mesaj-gecmisi">{_0x40e2ee("botApiMessages.mesajGecmisi")}</_0x2b2372><_0x27248e>{_0x40e2ee("botApiMessages.kanaldanMesajListesiCeker")}</_0x27248e><_0x5c179c method="GET" path="/bot/guilds/{guildId}/channels/{channelId}/messages" description={_0x40e2ee("botApiMessages.endpointMesajGecmisiDesc")} auth="Bot Token" tryIt={{
      params: [{
        name: "guildId",
        in: "path",
        placeholder: _0x40e2ee("botApiMessages.placeholderSunucuId")
      }, {
        name: "channelId",
        in: "path",
        placeholder: _0x40e2ee("botApiMessages.placeholderKanalId")
      }, {
        name: "limit",
        in: "query",
        placeholder: "50"
      }, {
        name: "before",
        in: "query",
        placeholder: _0x40e2ee("botApiMessages.placeholderMesajId")
      }, {
        name: "after",
        in: "query",
        placeholder: _0x40e2ee("botApiMessages.placeholderMesajId")
      }]
    }} /><_0x44d087 title={_0x40e2ee("botApiMessages.titleQueryParams")} params={[{
      name: "limit",
      type: "number",
      required: false,
      description: _0x40e2ee("botApiMessages.paramLimitDesc")
    }, {
      name: "before",
      type: "string",
      required: false,
      description: _0x40e2ee("botApiMessages.paramBeforeDesc")
    }, {
      name: "after",
      type: "string",
      required: false,
      description: _0x40e2ee("botApiMessages.paramAfterDesc")
    }, {
      name: "around",
      type: "string",
      required: false,
      description: _0x40e2ee("botApiMessages.paramAroundDesc")
    }]} /><_0x2f0a92 success={<_0x3da80e code={"// 200 OK\n{\n  \"messages\": [\n    {\n      \"id\": \"554200123456789010\",\n      \"channel_id\": \"545980009056055296\",\n      \"guild_id\": \"540528238699487232\",\n      \"content\": \"Eski mesaj\",\n      \"created_at\": \"2026-03-10T11:55:00Z\",\n      \"author\": {\n        \"id\": 5,\n        \"username\": \"user1\",\n        \"display_name\": \"User One\"\n      }\n    }\n  ],\n  \"page_info\": {\n    \"has_next\": true,\n    \"has_prev\": false,\n    \"limit\": 50,\n    \"next_cursor\": \"554200123456789010\",\n    \"prev_cursor\": \"554200123456789060\"\n  }\n}"} language="json" title="200 OK" />} errors={_0x3355f3} /><_0x5744ce type="info" title={_0x40e2ee("botApiMessages.calloutAroundParam")}>{_0x40e2ee("botApiMessages.calloutAroundParamBody")}</_0x5744ce><_0x351fd1 /><_0x2b2372 id="dosya-ile-mesaj">{_0x40e2ee("botApiMessages.dosyaIleMesajGonder")}</_0x2b2372><_0x27248e>{_0x40e2ee("botApiMessages.mesajaDosyaEkleyerekGonderir")}</_0x27248e><_0x5c179c method="POST" path="/bot/guilds/{guildId}/channels/{channelId}/messages" description={_0x40e2ee("botApiMessages.endpointDosyaMesajDesc")} auth="Bot Token" /><_0x2f0a92 success={<_0x3da80e code={"// 201 Created\n{\n  \"id\": \"554200123456789012\",\n  \"channel_id\": \"545980009056055296\",\n  \"guild_id\": \"540528238699487232\",\n  \"content\": \"Log dosyası ekte\",\n  \"created_at\": \"2026-03-10T12:00:00Z\",\n  \"author\": {\n    \"id\": 2,\n    \"username\": \"MyBot\",\n    \"display_name\": \"MyBot\"\n  },\n  \"attachments\": [\n    {\n      \"id\": \"554200999888777666\",\n      \"message_id\": \"554200123456789012\",\n      \"filename\": \"output.txt\",\n      \"content_type\": \"text/plain\",\n      \"size\": 1024,\n      \"url\": \"https://cdn.jubbio.com/attachments/554200999888777666.txt\",\n      \"is_spoiler\": false,\n      \"created_at\": \"2026-03-10T12:00:00Z\"\n    }\n  ]\n}"} language="json" title="201 Created" />} errors={_0x2f5490} /><_0x351fd1 /><_0x2b2372 id="dosya-yukle">{_0x40e2ee("botApiMessages.dosyaYukleAttachment")}</_0x2b2372><_0x27248e>{_0x40e2ee("botApiMessages.dosyaYukleDesc")}</_0x27248e><_0x5c179c method="POST" path="/bot/guilds/{guildId}/channels/{channelId}/attachments" description={_0x40e2ee("botApiMessages.endpointDosyaYukleDesc")} auth="Bot Token" /><_0x2f0a92 success={<_0x58815d.Fragment><_0x3da80e code={"// 201 Created\n{\n  \"ID\": 554200999888777666,\n  \"MessageID\": 0,\n  \"Filename\": \"image.png\",\n  \"ContentType\": \"image/png\",\n  \"Size\": 204800,\n  \"URL\": \"https://cdn.jubbio.com/attachments/554200999888777666.png\"\n}"} language="json" title="201 Created" /><_0x5744ce type="warning" title={_0x40e2ee("botApiMessages.calloutfieldIsimleri")}>{_0x40e2ee("botApiMessages.calloutBodybuEndpointteFieldIsimleri")}</_0x5744ce></_0x58815d.Fragment>} errors={_0x4b2245} /><_0x351fd1 /><_0x2b2372 id="dm-yeni-konusma">{_0x40e2ee("botApiMessages.dmMesajGonderYeni")}</_0x2b2372><_0x27248e>{_0x40e2ee("botApiMessages.kanalIdsiOlmadanKullanici")}</_0x27248e><_0x5c179c method="POST" path="/bot/dm" description={_0x40e2ee("botApiMessages.endpointDmYeniDesc")} auth="Bot Token" tryIt={{
      bodyType: "json",
      bodyTemplate: _0x40e2ee("botApiMessages.bodyTemplateDmYeni")
    }} /><_0x44d087 title={_0x40e2ee("botApiMessages.titleJsonBody")} params={[{
      name: "recipient_user_id",
      type: "string",
      required: true,
      description: _0x40e2ee("botApiMessages.paramRecipientDesc")
    }, {
      name: "content",
      type: "string",
      required: false,
      description: _0x40e2ee("botApiMessages.paramDmContentDesc")
    }, {
      name: "reply_to_id",
      type: "string",
      required: false,
      description: _0x40e2ee("botApiMessages.paramReplyToDesc")
    }, {
      name: "gif",
      type: "object",
      required: false,
      description: _0x40e2ee("botApiMessages.paramGifDesc")
    }]} /><_0x44d087 title={_0x40e2ee("botApiMessages.titleMultipartFormData")} params={[{
      name: "recipient_user_id",
      type: "string",
      required: true,
      description: _0x40e2ee("botApiMessages.paramDmMultipartRecipientDesc")
    }, {
      name: "content",
      type: "string",
      required: false,
      description: _0x40e2ee("botApiMessages.paramDmMultipartContentDesc")
    }, {
      name: "reply_to_id",
      type: "string",
      required: false,
      description: _0x40e2ee("botApiMessages.paramDmMultipartReplyDesc")
    }, {
      name: "files",
      type: "file[]",
      required: false,
      description: _0x40e2ee("botApiMessages.paramDmMultipartFilesDesc")
    }]} /><_0x2f0a92 success={<_0x3da80e code={"// 201 Created — guild_id alanı DM'lerde yer almaz\n{\n  \"id\": \"123456789\",\n  \"channel_id\": \"987654321\",\n  \"content\": \"Merhaba!\",\n  \"created_at\": \"2026-03-10T12:00:00Z\",\n  \"author\": {\n    \"id\": 42,\n    \"username\": \"mybot\",\n    \"display_name\": \"My Bot\",\n    \"avatar_url\": \"https://cdn.example.com/avatar.png\"\n  },\n  \"attachments\": [],\n  \"embeds\": [],\n  \"reactions\": []\n}"} language="json" title="201 Created" />} errors={_0x26ce9b} /><_0x5744ce type="info" title={_0x40e2ee("botApiMessages.calloutkanalIdVsKullanici")}>{_0x40e2ee("botApiMessages.calloutDmKanalBody")}</_0x5744ce><_0x351fd1 /><_0x2b2372 id="dm-mesaj-gonder">{_0x40e2ee("botApiMessages.dmMesajGonderMevcut")}</_0x2b2372><_0x27248e>{_0x40e2ee("botApiMessages.mevcutBirDmKanalina")}</_0x27248e><_0x5c179c method="POST" path="/bot/dm/{channelId}" description={_0x40e2ee("botApiMessages.endpointDmMevcutDesc")} auth="Bot Token" tryIt={{
      params: [{
        name: "channelId",
        in: "path",
        placeholder: _0x40e2ee("botApiMessages.placeholderDmKanalId")
      }],
      bodyType: "json",
      bodyTemplate: _0x40e2ee("botApiMessages.bodyTemplateDmMevcut")
    }} /><_0x44d087 title={_0x40e2ee("botApiMessages.titleJsonBody")} params={[{
      name: "content",
      type: "string",
      required: false,
      description: _0x40e2ee("botApiMessages.paramDmMevcutContentDesc")
    }, {
      name: "embeds",
      type: "APIEmbed[]",
      required: false,
      description: _0x40e2ee("botApiMessages.paramDmMevcutEmbedsDesc")
    }]} /><_0x2f0a92 success={<_0x3da80e code={"// 201 Created — guild_id alanı DM'lerde yer almaz\n{\n  \"id\": \"554200123456789012\",\n  \"channel_id\": \"554100000000000001\",\n  \"content\": \"Merhaba! Bu bir DM mesajı.\",\n  \"created_at\": \"2026-03-10T12:00:00Z\",\n  \"author\": {\n    \"id\": 2,\n    \"username\": \"MyBot\",\n    \"display_name\": \"MyBot\"\n  }\n}"} language="json" title="201 Created" />} errors={_0x1be586} /><_0x351fd1 /><_0x2b2372 id="dm-mesaj-gecmisi">{_0x40e2ee("botApiMessages.dmMesajGecmisi")}</_0x2b2372><_0x27248e>{_0x40e2ee("botApiMessages.dmKanaldanMesajListesiCeker")}</_0x27248e><_0x5c179c method="GET" path="/bot/dm/{channelId}/messages" description={_0x40e2ee("botApiMessages.endpointDmMesajGecmisiDesc")} auth="Bot Token" tryIt={{
      params: [{
        name: "channelId",
        in: "path",
        placeholder: _0x40e2ee("botApiMessages.placeholderDmKanalId")
      }, {
        name: "limit",
        in: "query",
        placeholder: "50"
      }, {
        name: "before",
        in: "query",
        placeholder: _0x40e2ee("botApiMessages.placeholderMesajId")
      }, {
        name: "after",
        in: "query",
        placeholder: _0x40e2ee("botApiMessages.placeholderMesajId")
      }]
    }} /><_0x44d087 title={_0x40e2ee("botApiMessages.titleQueryParams")} params={[{
      name: "limit",
      type: "number",
      required: false,
      description: _0x40e2ee("botApiMessages.paramDmLimitDesc")
    }, {
      name: "before",
      type: "string",
      required: false,
      description: _0x40e2ee("botApiMessages.paramDmBeforeDesc")
    }, {
      name: "after",
      type: "string",
      required: false,
      description: _0x40e2ee("botApiMessages.paramDmAfterDesc")
    }]} /><_0x2f0a92 success={<_0x3da80e code={"// 200 OK\n{\n  \"messages\": [\n    {\n      \"id\": \"554200123456789010\",\n      \"channel_id\": \"554100000000000001\",\n      \"content\": \"Merhaba! Ben botunuzum.\",\n      \"created_at\": \"2026-03-10T11:55:00Z\",\n      \"author\": {\n        \"id\": 2,\n        \"username\": \"MyBot\",\n        \"display_name\": \"My Bot\",\n        \"avatar_url\": \"https://cdn.example.com/avatar.png\"\n      },\n      \"attachments\": [],\n      \"embeds\": [],\n      \"reactions\": []\n    },\n    {\n      \"id\": \"554200123456789008\",\n      \"channel_id\": \"554100000000000001\",\n      \"content\": \"Selam!\",\n      \"created_at\": \"2026-03-10T11:50:00Z\",\n      \"author\": {\n        \"id\": 123,\n        \"username\": \"kullanici\",\n        \"display_name\": \"Kullanıcı\",\n        \"avatar_url\": \"https://cdn.example.com/user.png\"\n      }\n    }\n  ],\n  \"page_info\": {\n    \"has_next\": true,\n    \"has_prev\": false,\n    \"limit\": 50,\n    \"next_cursor\": \"554200123456789008\",\n    \"prev_cursor\": \"554200123456789010\"\n  }\n}"} language="json" title="200 OK" />} errors={_0x21dba9} /><_0x5744ce type="info" title={_0x40e2ee("botApiMessages.calloutDmScope")}>{_0x40e2ee("botApiMessages.calloutDmScopeBody")}</_0x5744ce></_0x58815d.Fragment>;
}
export { m as default };