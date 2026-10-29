import { b as _0x9abbaf, j as _0x3e1ef3 } from "./index-cQfEKR1W.js";
import { H as _0x3c3983, C as _0x5b08ea, a as _0x587111, P as _0x8617bf, k as _0x227eb6, L as _0x104a77, j as _0x1649a7, I as _0x5d16f3, m as _0xa1376, D as _0x4c918f, l as _0x20e462 } from "./DocComponents-BWAUshvB.js";
import { C as _0x2b37e9 } from "./CodeBlock-B4seo9QW.js";
import "./clipboard-BQ9qambq.js";
import "./loader-circle-CTtxa1g9.js";
import "./prism-2cMp9j73.js";
function m() {
  const {
    t: _0x4ebe9d
  } = _0x9abbaf("docs");
  const _0x3f86da = [{
    code: 400,
    body: "{\"error\":\"Emoji parametresi gereklidir\"}",
    condition: _0x4ebe9d("botApiInteractions.condEmojiEmpty")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid emoji format\",\"errors\":[...]}",
    condition: _0x4ebe9d("botApiInteractions.condEmojiInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Reaksiyon zaten mevcut\"}",
    condition: _0x4ebe9d("botApiInteractions.condReactionExists")
  }, {
    code: 401,
    body: "{\"error\":\"Kullanıcı kimliği doğrulanamadı\"}",
    condition: _0x4ebe9d("botApiInteractions.condUserIdMissing")
  }, {
    code: 404,
    body: "{\"error\":\"Mesaj bulunamadı\"}",
    condition: _0x4ebe9d("botApiInteractions.condMessageNotFound")
  }, {
    code: 500,
    body: "{\"error\":\"Reaksiyon eklenemedi\"}",
    condition: _0x4ebe9d("botApiInteractions.condDbError")
  }];
  const _0x381661 = [{
    code: 400,
    body: "{\"error\":\"Emoji parametresi gereklidir\"}",
    condition: _0x4ebe9d("botApiInteractions.condEmojiEmpty")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid emoji format\",\"errors\":[...]}",
    condition: _0x4ebe9d("botApiInteractions.condEmojiInvalid")
  }, {
    code: 401,
    body: "{\"error\":\"Kullanıcı kimliği doğrulanamadı\"}",
    condition: _0x4ebe9d("botApiInteractions.condUserIdMissing")
  }, {
    code: 404,
    body: "{\"error\":\"Reaksiyon bulunamadı\"}",
    condition: _0x4ebe9d("botApiInteractions.condReactionNotFound")
  }, {
    code: 500,
    body: "{\"error\":\"Reaksiyon kaldırılamadı\"}",
    condition: _0x4ebe9d("botApiInteractions.condDbError")
  }];
  const _0xac5890 = [{
    code: 400,
    body: "{\"error\":\"Geçersiz mesaj ID\"}",
    condition: _0x4ebe9d("botApiInteractions.condMessageIdParse")
  }, {
    code: 400,
    body: "{\"error\":\"Maksimum pinlenmiş mesaj sayısına ulaşıldı\"}",
    condition: _0x4ebe9d("botApiInteractions.condPinLimit")
  }, {
    code: 401,
    body: "{\"error\":\"Kullanıcı kimliği doğrulanamadı\"}",
    condition: _0x4ebe9d("botApiInteractions.condUserIdMissing")
  }, {
    code: 403,
    body: "{\"error\":\"Mesaj pinleme izniniz yok\"}",
    condition: _0x4ebe9d("botApiInteractions.condNoPermission")
  }, {
    code: 404,
    body: "{\"error\":\"Mesaj bulunamadı\"}",
    condition: _0x4ebe9d("botApiInteractions.condMessageNotFound")
  }, {
    code: 500,
    body: "{\"error\":\"Mesaj pinlenemedi\"}",
    condition: _0x4ebe9d("botApiInteractions.condDbError")
  }];
  const _0x490d00 = [{
    code: 400,
    body: "{\"error\":\"Geçersiz mesaj ID\"}",
    condition: _0x4ebe9d("botApiInteractions.condMessageIdParse")
  }, {
    code: 401,
    body: "{\"error\":\"Kullanıcı kimliği doğrulanamadı\"}",
    condition: _0x4ebe9d("botApiInteractions.condUserIdMissing")
  }, {
    code: 403,
    body: "{\"error\":\"Mesaj pin kaldırma izniniz yok\"}",
    condition: _0x4ebe9d("botApiInteractions.condUnpinNoPermission")
  }, {
    code: 404,
    body: "{\"error\":\"Mesaj bulunamadı\"}",
    condition: _0x4ebe9d("botApiInteractions.condMessageNotFound")
  }, {
    code: 500,
    body: "{\"error\":\"Mesaj pin kaldırılamadı\"}",
    condition: _0x4ebe9d("botApiInteractions.condDbError")
  }];
  const _0x3e8b37 = [{
    code: 400,
    body: "{\"error\":\"Geçersiz kanal ID\"}",
    condition: _0x4ebe9d("botApiInteractions.condChannelIdParse")
  }, {
    code: 500,
    body: "{\"error\":\"Pinli mesajlar alınamadı\"}",
    condition: _0x4ebe9d("botApiInteractions.condDbError")
  }];
  const _0x2ad638 = [{
    code: 400,
    body: "{\"error\":\"Invalid interaction ID format\",\"code\":50035}",
    condition: _0x4ebe9d("botApiInteractions.condInteractionIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Token is required\",\"code\":50035}",
    condition: _0x4ebe9d("botApiInteractions.condTokenEmpty")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid request body\",\"code\":50035}",
    condition: _0x4ebe9d("botApiInteractions.condJsonParse")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid response type: 99\",\"code\":50035}",
    condition: _0x4ebe9d("botApiInteractions.condInvalidType")
  }, {
    code: 400,
    body: "{\"error\":\"Interaction token expired\",\"code\":40061}",
    condition: _0x4ebe9d("botApiInteractions.condTokenExpired")
  }, {
    code: 400,
    body: "{\"error\":\"Interaction has already been acknowledged\",\"code\":40060}",
    condition: _0x4ebe9d("botApiInteractions.condAlreadyAcked")
  }, {
    code: 401,
    body: "{\"error\":\"Invalid interaction token\",\"code\":50027}",
    condition: _0x4ebe9d("botApiInteractions.condTokenInvalid")
  }, {
    code: 404,
    body: "{\"error\":\"Unknown interaction\",\"code\":10062}",
    condition: _0x4ebe9d("botApiInteractions.condInteractionNotFound")
  }, {
    code: 500,
    body: "{\"error\":\"Internal server error\"}",
    condition: _0x4ebe9d("botApiInteractions.condServiceError")
  }];
  const _0x53695b = [{
    code: 400,
    body: "{\"error\":\"Invalid application ID format\",\"code\":50035}",
    condition: _0x4ebe9d("botApiInteractions.condAppIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Token is required\",\"code\":50035}",
    condition: _0x4ebe9d("botApiInteractions.condTokenEmpty")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid request body\",\"code\":50035}",
    condition: _0x4ebe9d("botApiInteractions.condJsonParse")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid payload_json\",\"code\":50035}",
    condition: _0x4ebe9d("botApiInteractions.condMultipartPayloadInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Failed to parse multipart form\",\"code\":50035}",
    condition: _0x4ebe9d("botApiInteractions.condMultipartParse")
  }, {
    code: 400,
    body: "{\"error\":\"Interaction token expired\",\"code\":40061}",
    condition: _0x4ebe9d("botApiInteractions.condTokenExpired")
  }, {
    code: 401,
    body: "{\"error\":\"Invalid interaction token\",\"code\":50027}",
    condition: _0x4ebe9d("botApiInteractions.condTokenInvalid")
  }, {
    code: 404,
    body: "{\"error\":\"Unknown interaction\",\"code\":10062}",
    condition: _0x4ebe9d("botApiInteractions.condInteractionNotFound")
  }, {
    code: 404,
    body: "{\"error\":\"Original message not found\",\"code\":10008}",
    condition: _0x4ebe9d("botApiInteractions.condOriginalNotFound")
  }, {
    code: 500,
    body: "{\"error\":\"Internal server error\"}",
    condition: _0x4ebe9d("botApiInteractions.condServiceError")
  }];
  const _0x4a7665 = [{
    code: 400,
    body: "{\"error\":\"Invalid application ID format\",\"code\":50035}",
    condition: _0x4ebe9d("botApiInteractions.condAppIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Token is required\",\"code\":50035}",
    condition: _0x4ebe9d("botApiInteractions.condTokenEmpty")
  }, {
    code: 400,
    body: "{\"error\":\"Interaction token expired\",\"code\":40061}",
    condition: _0x4ebe9d("botApiInteractions.condTokenExpired")
  }, {
    code: 401,
    body: "{\"error\":\"Invalid interaction token\",\"code\":50027}",
    condition: _0x4ebe9d("botApiInteractions.condTokenInvalid")
  }, {
    code: 404,
    body: "{\"error\":\"Unknown interaction\",\"code\":10062}",
    condition: _0x4ebe9d("botApiInteractions.condInteractionNotFound")
  }, {
    code: 404,
    body: "{\"error\":\"Original message not found\",\"code\":10008}",
    condition: _0x4ebe9d("botApiInteractions.condOriginalNotFound")
  }, {
    code: 500,
    body: "{\"error\":\"Internal server error\"}",
    condition: _0x4ebe9d("botApiInteractions.condServiceError")
  }];
  const _0x36bd9e = [{
    code: 400,
    body: "{\"error\":\"Invalid application ID format\",\"code\":50035}",
    condition: _0x4ebe9d("botApiInteractions.condAppIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Token is required\",\"code\":50035}",
    condition: _0x4ebe9d("botApiInteractions.condTokenEmpty")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid request body\",\"code\":50035}",
    condition: _0x4ebe9d("botApiInteractions.condJsonParse")
  }, {
    code: 400,
    body: "{\"error\":\"Cannot send an empty message\",\"code\":50006}",
    condition: _0x4ebe9d("botApiInteractions.condFollowupEmpty")
  }, {
    code: 400,
    body: "{\"error\":\"Cannot send followup before initial response\",\"code\":40060}",
    condition: _0x4ebe9d("botApiInteractions.condFollowupBeforeInitial")
  }, {
    code: 400,
    body: "{\"error\":\"Interaction token expired\",\"code\":40061}",
    condition: _0x4ebe9d("botApiInteractions.condTokenExpired")
  }, {
    code: 401,
    body: "{\"error\":\"Invalid interaction token\",\"code\":50027}",
    condition: _0x4ebe9d("botApiInteractions.condTokenInvalid")
  }, {
    code: 404,
    body: "{\"error\":\"Unknown interaction\",\"code\":10062}",
    condition: _0x4ebe9d("botApiInteractions.condInteractionNotFound")
  }, {
    code: 500,
    body: "{\"error\":\"Internal server error\"}",
    condition: _0x4ebe9d("botApiInteractions.condServiceError")
  }];
  return <_0x3e1ef3.Fragment><_0x3c3983>{_0x4ebe9d("botApiInteractions.etkilesimler")}</_0x3c3983><_0x5b08ea type="info" title="omitempty">{_0x4ebe9d("botApiInteractions.calloutOmitempty")}</_0x5b08ea><_0x587111 id="reaksiyon-ekle">{_0x4ebe9d("botApiInteractions.reaksiyonEkle")}</_0x587111><_0x8617bf>{_0x4ebe9d("botApiInteractions.reaksiyonEkleDesc")}</_0x8617bf><_0x227eb6 method="PUT" path="/bot/guilds/{guildId}/channels/{channelId}/messages/{messageId}/reactions/{emoji}/@me" description={_0x4ebe9d("botApiInteractions.endpointReaksiyonEkleDesc")} auth="Bot Token" tryIt={{
      params: [{
        name: "guildId",
        in: "path",
        placeholder: _0x4ebe9d("botApiInteractions.placeholderSunucuId")
      }, {
        name: "channelId",
        in: "path",
        placeholder: _0x4ebe9d("botApiInteractions.placeholderKanalId")
      }, {
        name: "messageId",
        in: "path",
        placeholder: _0x4ebe9d("botApiInteractions.placeholderMesajId")
      }, {
        name: "emoji",
        in: "path",
        placeholder: ":emoji_name:"
      }]
    }} /><_0x5b08ea type="info" title={_0x4ebe9d("botApiInteractions.calloutdesteklenenEmojiFormatlari")}><_0x104a77><_0x1649a7><_0x5d16f3>:emoji_name:</_0x5d16f3> — {_0x4ebe9d("botApiInteractions.emojiIsimli")}</_0x1649a7><_0x1649a7><_0x5d16f3>{"<:name:id>"}</_0x5d16f3> — {_0x4ebe9d("botApiInteractions.emojiOzel")}</_0x1649a7><_0x1649a7><_0x5d16f3>{"<a:name:id>"}</_0x5d16f3> — {_0x4ebe9d("botApiInteractions.emojiAnimasyonlu")}</_0x1649a7></_0x104a77>{_0x4ebe9d("botApiInteractions.emojiUnicodeNot")}</_0x5b08ea><_0xa1376 success={<_0x2b37e9 code={"// 201 Created\n{\n  \"id\": 554200123456789012,\n  \"message_id\": 554200123456789000,\n  \"user_id\": 2,\n  \"emoji_name\": \"thumbsup\",\n  \"created_at\": \"2026-03-10T12:00:00Z\"\n}"} language="json" title="201 Created" />} errors={_0x3f86da} /><_0x4c918f /><_0x587111 id="reaksiyon-kaldir">{_0x4ebe9d("botApiInteractions.reaksiyonKaldir")}</_0x587111><_0x8617bf>{_0x4ebe9d("botApiInteractions.botunKendiEkledigiReaksiyonu")}</_0x8617bf><_0x227eb6 method="DELETE" path="/bot/guilds/{guildId}/channels/{channelId}/messages/{messageId}/reactions/{emoji}/@me" description={_0x4ebe9d("botApiInteractions.endpointReaksiyonKaldirDesc")} auth="Bot Token" tryIt={{
      params: [{
        name: "guildId",
        in: "path",
        placeholder: _0x4ebe9d("botApiInteractions.placeholderSunucuId")
      }, {
        name: "channelId",
        in: "path",
        placeholder: _0x4ebe9d("botApiInteractions.placeholderKanalId")
      }, {
        name: "messageId",
        in: "path",
        placeholder: _0x4ebe9d("botApiInteractions.placeholderMesajId")
      }, {
        name: "emoji",
        in: "path",
        placeholder: ":emoji_name:"
      }]
    }} /><_0xa1376 success={<_0x8617bf><_0x5d16f3>204 No Content</_0x5d16f3> — {_0x4ebe9d("botApiInteractions.noBody")}</_0x8617bf>} errors={_0x381661} /><_0x4c918f /><_0x587111 id="mesaj-pinle">{_0x4ebe9d("botApiInteractions.mesajPinle")}</_0x587111><_0x8617bf>{_0x4ebe9d("botApiInteractions.mesajPinleDesc")}</_0x8617bf><_0x227eb6 method="PUT" path="/bot/guilds/{guildId}/channels/{channelId}/pins/{messageId}" description={_0x4ebe9d("botApiInteractions.endpointPinleDesc")} auth="Bot Token" tryIt={{
      params: [{
        name: "guildId",
        in: "path",
        placeholder: _0x4ebe9d("botApiInteractions.placeholderSunucuId")
      }, {
        name: "channelId",
        in: "path",
        placeholder: _0x4ebe9d("botApiInteractions.placeholderKanalId")
      }, {
        name: "messageId",
        in: "path",
        placeholder: _0x4ebe9d("botApiInteractions.placeholderMesajId")
      }]
    }} /><_0xa1376 success={<_0x2b37e9 code={"// 200 OK\n{\n  \"id\": \"554207938495922176\",\n  \"channel_id\": \"548015323270361088\",\n  \"guild_id\": \"548015323203248128\",\n  \"author_id\": 1,\n  \"content_type\": \"text\",\n  \"is_pinned\": true,\n  \"pinned_at\": \"2026-03-10T11:57:12.589724+03:00\",\n  \"pinned_by\": 3781,\n  \"webhook_id\": \"554156771858460672\",\n  \"type\": \"webhook\",\n  \"created_at\": \"2026-03-10T10:44:29.229717+03:00\",\n  \"updated_at\": \"2026-03-10T11:57:12.589724+03:00\",\n  \"author\": {\n    \"id\": 1,\n    \"username\": \"kullanici\",\n    \"display_name\": \"Kullanıcı\",\n    \"avatar_url\": \"https://cdn.jubbio.com/users/1/avatars/example.png\"\n  },\n  \"embeds\": [\n    {\n      \"id\": 554207938588196860,\n      \"message_id\": 554207938495922200,\n      \"title\": \"[repo:main] 1 new commit(s)\",\n      \"description\": \"[`6fe7d1d`](https://github.com/...) .\",\n      \"url\": \"https://github.com/...\",\n      \"color\": 5763719,\n      \"footer\": { \"text\": \"GitHub • main\" },\n      \"author\": {\n        \"name\": \"username\",\n        \"url\": \"https://github.com/username\",\n        \"icon_url\": \"https://avatars.githubusercontent.com/u/123?v=4\"\n      },\n      \"timestamp\": \"2026-03-10T10:44:29.223091+03:00\",\n      \"created_at\": \"2026-03-10T10:44:29.245034+03:00\"\n    }\n  ]\n}"} language="json" title="200 OK" />} errors={_0xac5890} /><_0x4c918f /><_0x587111 id="pin-kaldir">{_0x4ebe9d("botApiInteractions.pinKaldir")}</_0x587111><_0x8617bf>{_0x4ebe9d("botApiInteractions.pinKaldirDesc")}</_0x8617bf><_0x227eb6 method="DELETE" path="/bot/guilds/{guildId}/channels/{channelId}/pins/{messageId}" description={_0x4ebe9d("botApiInteractions.endpointPinKaldirDesc")} auth="Bot Token" tryIt={{
      params: [{
        name: "guildId",
        in: "path",
        placeholder: _0x4ebe9d("botApiInteractions.placeholderSunucuId")
      }, {
        name: "channelId",
        in: "path",
        placeholder: _0x4ebe9d("botApiInteractions.placeholderKanalId")
      }, {
        name: "messageId",
        in: "path",
        placeholder: _0x4ebe9d("botApiInteractions.placeholderMesajId")
      }]
    }} /><_0xa1376 success={<_0x2b37e9 code={"// 200 OK — is_pinned, pinned_at, pinned_by alanları omitempty ile düşer\n{\n  \"id\": \"554207938495922176\",\n  \"channel_id\": \"548015323270361088\",\n  \"guild_id\": \"548015323203248128\",\n  \"author_id\": 1,\n  \"content_type\": \"text\",\n  \"webhook_id\": \"554156771858460672\",\n  \"type\": \"webhook\",\n  \"created_at\": \"2026-03-10T10:44:29.229717+03:00\",\n  \"updated_at\": \"2026-03-10T11:56:22.134408+03:00\",\n  \"author\": {\n    \"id\": 1,\n    \"username\": \"kullanici\",\n    \"display_name\": \"Kullanıcı\",\n    \"avatar_url\": \"https://cdn.jubbio.com/users/1/avatars/example.png\"\n  },\n  \"embeds\": [\n    {\n      \"id\": 554207938588196860,\n      \"message_id\": 554207938495922200,\n      \"title\": \"[repo:main] 1 new commit(s)\",\n      \"description\": \"[`6fe7d1d`](https://github.com/...) .\",\n      \"url\": \"https://github.com/...\",\n      \"color\": 5763719,\n      \"footer\": { \"text\": \"GitHub • main\" },\n      \"author\": {\n        \"name\": \"username\",\n        \"url\": \"https://github.com/username\",\n        \"icon_url\": \"https://avatars.githubusercontent.com/u/123?v=4\"\n      },\n      \"timestamp\": \"2026-03-10T10:44:29.223091+03:00\",\n      \"created_at\": \"2026-03-10T10:44:29.245034+03:00\"\n    }\n  ]\n}"} language="json" title="200 OK" />} errors={_0x490d00} /><_0x4c918f /><_0x587111 id="pinli-mesajlar">{_0x4ebe9d("botApiInteractions.pinliMesajlariListele")}</_0x587111><_0x8617bf>{_0x4ebe9d("botApiInteractions.kanaldakiTumPinliMesajlari")}</_0x8617bf><_0x227eb6 method="GET" path="/bot/guilds/{guildId}/channels/{channelId}/pins" description={_0x4ebe9d("botApiInteractions.endpointPinListeDesc")} auth="Bot Token" tryIt={{
      params: [{
        name: "guildId",
        in: "path",
        placeholder: _0x4ebe9d("botApiInteractions.placeholderSunucuId")
      }, {
        name: "channelId",
        in: "path",
        placeholder: _0x4ebe9d("botApiInteractions.placeholderKanalId")
      }]
    }} /><_0xa1376 success={<_0x2b37e9 code={"// 200 OK\n[\n  {\n    \"id\": \"554207938495922176\",\n    \"channel_id\": \"548015323270361088\",\n    \"guild_id\": \"548015323203248128\",\n    \"author_id\": 1,\n    \"content_type\": \"text\",\n    \"is_pinned\": true,\n    \"pinned_at\": \"2026-03-10T11:57:12.589724+03:00\",\n    \"pinned_by\": 3781,\n    \"type\": \"webhook\",\n    \"webhook_id\": \"554156771858460672\",\n    \"created_at\": \"2026-03-10T10:44:29.229717+03:00\",\n    \"updated_at\": \"2026-03-10T11:57:12.589724+03:00\",\n    \"author\": {\n      \"id\": 1,\n      \"username\": \"kullanici\",\n      \"display_name\": \"Kullanıcı\",\n      \"avatar_url\": \"https://cdn.jubbio.com/users/1/avatars/example.png\"\n    },\n    \"embeds\": [\n      {\n        \"id\": 554207938588196860,\n        \"message_id\": 554207938495922200,\n        \"title\": \"[repo:main] 1 new commit(s)\",\n        \"description\": \"[`6fe7d1d`](https://github.com/...) .\",\n        \"url\": \"https://github.com/...\",\n        \"color\": 5763719,\n        \"footer\": { \"text\": \"GitHub • main\" },\n        \"author\": {\n          \"name\": \"username\",\n          \"url\": \"https://github.com/username\",\n          \"icon_url\": \"https://avatars.githubusercontent.com/u/123?v=4\"\n        },\n        \"timestamp\": \"2026-03-10T10:44:29.223091+03:00\",\n        \"created_at\": \"2026-03-10T10:44:29.245034+03:00\"\n      }\n    ]\n  }\n]"} language="json" title="200 OK" />} errors={_0x3e8b37} /><_0x4c918f /><_0x587111 id="interaction-yanit">{_0x4ebe9d("botApiInteractions.interactionYanitiGonder")}</_0x587111><_0x8617bf>{_0x4ebe9d("botApiInteractions.slashCommandVeyaButon")}</_0x8617bf><_0x227eb6 method="POST" path="/interactions/{interactionId}/{token}/callback" description={_0x4ebe9d("botApiInteractions.endpointInteractionYanitDesc")} tryIt={{
      params: [{
        name: "interactionId",
        in: "path",
        placeholder: "Interaction ID"
      }, {
        name: "token",
        in: "path",
        placeholder: "Interaction Token"
      }],
      bodyType: "json",
      bodyTemplate: _0x4ebe9d("botApiInteractions.bodyTemplateInteractionYanit")
    }} /><_0x20e462 title={_0x4ebe9d("botApiMessages.titleJsonBody")} params={[{
      name: "type",
      type: "number",
      required: true,
      description: _0x4ebe9d("botApiInteractions.paramTypeDesc")
    }, {
      name: "data",
      type: "object",
      required: false,
      description: _0x4ebe9d("botApiInteractions.paramDataDesc")
    }]} /><_0x8617bf>{_0x4ebe9d("botApiInteractions.interactionYanitTipleri")}</_0x8617bf><_0x20e462 params={[{
      name: "1",
      type: "Pong",
      description: _0x4ebe9d("botApiInteractions.typeDescPong")
    }, {
      name: "4",
      type: "Message",
      description: _0x4ebe9d("botApiInteractions.typeDescMessage")
    }, {
      name: "5",
      type: "Deferred",
      description: _0x4ebe9d("botApiInteractions.typeDescDeferred")
    }, {
      name: "6",
      type: "Deferred Update",
      description: _0x4ebe9d("botApiInteractions.typeDescDeferredUpdate")
    }, {
      name: "7",
      type: "Update",
      description: _0x4ebe9d("botApiInteractions.typeDescUpdate")
    }, {
      name: "9",
      type: "Modal",
      description: _0x4ebe9d("botApiInteractions.typeDescModal")
    }]} /><_0xa1376 success={<_0x8617bf><_0x5d16f3>204 No Content</_0x5d16f3> — {_0x4ebe9d("botApiInteractions.noBody")}</_0x8617bf>} errors={_0x2ad638} /><_0x4c918f /><_0x587111 id="interaction-duzenle">{_0x4ebe9d("botApiInteractions.interactionYanitiniDuzenle")}</_0x587111><_0x8617bf>{_0x4ebe9d("botApiInteractions.deferredYanitSonrasiAsil")}</_0x8617bf><_0x227eb6 method="PATCH" path="/interactions/webhooks/{appId}/{token}/messages/@original" description={_0x4ebe9d("botApiInteractions.endpointInteractionDuzenleDesc")} tryIt={{
      params: [{
        name: "appId",
        in: "path",
        placeholder: "Application ID"
      }, {
        name: "token",
        in: "path",
        placeholder: "Interaction Token"
      }],
      bodyType: "json",
      bodyTemplate: _0x4ebe9d("botApiInteractions.bodyTemplateInteractionDuzenle")
    }} /><_0x5b08ea type="info" title={_0x4ebe9d("botApiInteractions.calloutDeferredResponse")}>{_0x4ebe9d("botApiInteractions.calloutDeferredResponseBody")}</_0x5b08ea><_0xa1376 success={<_0x2b37e9 code={"// 200 OK\n{\n  \"success\": true\n}"} language="json" title="200 OK" />} errors={_0x53695b} /><_0x4c918f /><_0x587111 id="interaction-sil">{_0x4ebe9d("botApiInteractions.interactionYanitiniSil")}</_0x587111><_0x8617bf>{_0x4ebe9d("botApiInteractions.gonderilenOrijinalInteractionYanitini")}</_0x8617bf><_0x227eb6 method="DELETE" path="/interactions/webhooks/{appId}/{token}/messages/@original" description={_0x4ebe9d("botApiInteractions.endpointInteractionSilDesc")} tryIt={{
      params: [{
        name: "appId",
        in: "path",
        placeholder: "Application ID"
      }, {
        name: "token",
        in: "path",
        placeholder: "Interaction Token"
      }]
    }} /><_0xa1376 success={<_0x8617bf><_0x5d16f3>204 No Content</_0x5d16f3> — {_0x4ebe9d("botApiInteractions.noBody")}</_0x8617bf>} errors={_0x4a7665} /><_0x4c918f /><_0x587111 id="followup-mesaj">{_0x4ebe9d("botApiInteractions.followupMesajGonder")}</_0x587111><_0x8617bf>{_0x4ebe9d("botApiInteractions.ilkYanittanSonraEk")}</_0x8617bf><_0x227eb6 method="POST" path="/interactions/webhooks/{appId}/{token}" description={_0x4ebe9d("botApiInteractions.endpointFollowupDesc")} tryIt={{
      params: [{
        name: "appId",
        in: "path",
        placeholder: "Application ID"
      }, {
        name: "token",
        in: "path",
        placeholder: "Interaction Token"
      }],
      bodyType: "json",
      bodyTemplate: _0x4ebe9d("botApiInteractions.bodyTemplateFollowup")
    }} /><_0x20e462 title={_0x4ebe9d("botApiMessages.titleJsonBody")} params={[{
      name: "content",
      type: "string",
      required: false,
      description: _0x4ebe9d("botApiInteractions.paramContentDesc")
    }, {
      name: "embeds",
      type: "APIEmbed[]",
      required: false,
      description: _0x4ebe9d("botApiInteractions.paramEmbedsDesc")
    }, {
      name: "flags",
      type: "number",
      required: false,
      description: _0x4ebe9d("botApiInteractions.paramFlagsDesc")
    }]} /><_0xa1376 success={<_0x2b37e9 code={"// 200 OK\n{\n  \"id\": \"554200123456789012\",\n  \"ephemeral\": false\n}"} language="json" title="200 OK" />} errors={_0x36bd9e} /></_0x3e1ef3.Fragment>;
}
export { m as default };