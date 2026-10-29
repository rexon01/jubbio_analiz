import { b as _0x3464b3, j as _0x2ba981 } from "./index-cQfEKR1W.js";
import { H as _0x4e5960, a as _Component, P as _0x1f0299, k as _0x22e615, l as _0x4d088e, m as _0x13723a, D as _0x110a04, I as _0x2d7a50 } from "./DocComponents-BWAUshvB.js";
import { C as _0x399da1 } from "./CodeBlock-B4seo9QW.js";
import "./clipboard-BQ9qambq.js";
import "./loader-circle-CTtxa1g9.js";
import "./prism-2cMp9j73.js";
function p() {
  const {
    t: _0x17b572
  } = _0x3464b3("docs");
  const _0x7f8816 = [{
    code: 400,
    body: "{\"error\":\"Geçersiz guild ID'si\"}",
    condition: _0x17b572("botApiChannels.condGuildIdParse")
  }, {
    code: 400,
    body: "{\"error\":\"Geçersiz istek: <detay>\"}",
    condition: _0x17b572("botApiChannels.condJsonInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Geçersiz kategori ID'si\"}",
    condition: _0x17b572("botApiChannels.condCategoryIdParse")
  }, {
    code: 400,
    body: "{\"error\":\"Kanal adı boş olamaz\"}",
    condition: _0x17b572("botApiChannels.condNameEmpty")
  }, {
    code: 400,
    body: "{\"error\":\"Kategori adı boş olamaz\"}",
    condition: _0x17b572("botApiChannels.condCategoryNameEmpty")
  }, {
    code: 403,
    body: "{\"error\":\"Bu işlemi yapmaya yetkiniz yok\"}",
    condition: _0x17b572("botApiChannels.condNoPermission")
  }, {
    code: 404,
    body: "{\"error\":\"Belirtilen kategori bulunamadı\"}",
    condition: _0x17b572("botApiChannels.condCategoryNotFound")
  }, {
    code: 409,
    body: "{\"error\":\"Bu sunucuda zaten bir kurallar kanalı mevcut\"}",
    condition: _0x17b572("botApiChannels.condRulesExists")
  }, {
    code: 500,
    body: "{\"error\":\"Kanal oluşturulurken hata oluştu\"}",
    condition: _0x17b572("botApiChannels.condDbErrorCreate")
  }, {
    code: 500,
    body: "{\"error\":\"Kategori oluşturulurken hata oluştu\"}",
    condition: _0x17b572("botApiChannels.condDbErrorCategoryCreate")
  }];
  const _0x586012 = [{
    code: 400,
    body: "{\"error\":\"Geçersiz guild ID'si\"}",
    condition: _0x17b572("botApiChannels.condGuildIdParse")
  }, {
    code: 400,
    body: "{\"error\":\"Geçersiz kanal ID'si\"}",
    condition: _0x17b572("botApiChannels.condChannelIdParse")
  }, {
    code: 403,
    body: "{\"error\":\"Bu işlemi yapmaya yetkiniz yok\"}",
    condition: _0x17b572("botApiChannels.condNoPermission")
  }, {
    code: 404,
    body: "{\"error\":\"Kanal bulunamadı\"}",
    condition: _0x17b572("botApiChannels.condChannelNotFound")
  }, {
    code: 500,
    body: "{\"error\":\"Kanal alınırken hata oluştu\"}",
    condition: _0x17b572("botApiChannels.condDbErrorChannelGet")
  }, {
    code: 500,
    body: "{\"error\":\"Kanal silinirken hata oluştu\"}",
    condition: _0x17b572("botApiChannels.condDbErrorChannelDelete")
  }];
  const _0x286f7f = [{
    code: 400,
    body: "{\"error\":\"Geçersiz kategori ID'si\"}",
    condition: _0x17b572("botApiChannels.condCategoryIdParseDel")
  }, {
    code: 403,
    body: "{\"error\":\"Bu işlemi yapmaya yetkiniz yok\"}",
    condition: _0x17b572("botApiChannels.condNoPermission")
  }, {
    code: 404,
    body: "{\"error\":\"Kategori bulunamadı\"}",
    condition: _0x17b572("botApiChannels.condCategoryNotFoundDel")
  }, {
    code: 404,
    body: "{\"error\":\"Belirtilen kategori bulunamadı\"}",
    condition: _0x17b572("botApiChannels.condCategoryNotFoundOnDelete")
  }, {
    code: 500,
    body: "{\"error\":\"Kategori alınırken hata oluştu\"}",
    condition: _0x17b572("botApiChannels.condDbErrorCategoryGet")
  }, {
    code: 500,
    body: "{\"error\":\"Kategori silinirken hata oluştu\"}",
    condition: _0x17b572("botApiChannels.condDbErrorCategoryDelete")
  }];
  const _0x130ab3 = [{
    code: 400,
    body: "{\"error\":\"Geçersiz kanal ID'si\"}",
    condition: _0x17b572("botApiChannels.condPermChannelIdParse")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid overwrite ID\"}",
    condition: _0x17b572("botApiChannels.condPermOverwriteIdParse")
  }, {
    code: 400,
    body: "{\"error\":\"Geçersiz istek: <detay>\"}",
    condition: _0x17b572("botApiChannels.condPermJsonInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid allow permissions\"}",
    condition: _0x17b572("botApiChannels.condPermAllowParse")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid deny permissions\"}",
    condition: _0x17b572("botApiChannels.condPermDenyParse")
  }, {
    code: 404,
    body: "{\"error\":\"Kanal bulunamadı\"}",
    condition: _0x17b572("botApiChannels.condPermChannelNotFound")
  }, {
    code: 500,
    body: "{\"error\":\"Failed to update permission\"}",
    condition: _0x17b572("botApiChannels.condPermDbError")
  }];
  const _0x351f27 = [{
    code: 400,
    body: "{\"error\":\"Geçersiz kanal ID'si\"}",
    condition: _0x17b572("botApiChannels.condPermDelChannelIdParse")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid overwrite ID\"}",
    condition: _0x17b572("botApiChannels.condPermDelOverwriteIdParse")
  }, {
    code: 404,
    body: "{\"error\":\"Kanal bulunamadı\"}",
    condition: _0x17b572("botApiChannels.condPermDelChannelNotFound")
  }, {
    code: 404,
    body: "{\"error\":\"Permission overwrite not found\"}",
    condition: _0x17b572("botApiChannels.condPermDelNotFound")
  }, {
    code: 500,
    body: "{\"error\":\"Failed to delete permission\"}",
    condition: _0x17b572("botApiChannels.condPermDelDbError")
  }];
  return <_0x2ba981.Fragment><_0x4e5960>{_0x17b572("botApiChannels.title")}</_0x4e5960><_Component id="kanal-olustur">{_0x17b572("botApiChannels.kanalOlustur")}</_Component><_0x1f0299>{_0x17b572("botApiChannels.kanalOlusturDesc")}</_0x1f0299><_0x22e615 method="POST" path="/bot/guilds/{guildId}/channels" description={_0x17b572("botApiChannels.endpointKanalOlusturDesc")} auth="Bot Token" tryIt={{
      params: [{
        name: "guildId",
        in: "path",
        placeholder: _0x17b572("botApiChannels.placeholderSunucuId")
      }],
      bodyType: "json",
      bodyTemplate: _0x17b572("botApiChannels.bodyTemplateKanalOlustur")
    }} /><_0x4d088e title={_0x17b572("botApiMessages.titleJsonBody")} params={[{
      name: "name",
      type: "string",
      required: true,
      description: _0x17b572("botApiChannels.paramNameDesc")
    }, {
      name: "type",
      type: "number",
      required: true,
      description: _0x17b572("botApiChannels.paramTypeDesc")
    }, {
      name: "category_id",
      type: "string",
      required: false,
      description: _0x17b572("botApiChannels.paramCategoryIdDesc")
    }, {
      name: "permission_overwrites",
      type: "array",
      required: false,
      description: _0x17b572("botApiChannels.paramPermOverwritesDesc")
    }]} /><_0x13723a success={<_0x2ba981.Fragment><_0x399da1 code={"// 201 Created — Text/Voice kanal\n{\n  \"id\": \"554200123456789012\",\n  \"guild_id\": \"540528238699487232\",\n  \"category_id\": \"554100000000000000\",\n  \"name\": \"genel-sohbet\",\n  \"type\": \"text\",\n  \"created_at\": \"2026-03-10T12:00:00Z\",\n  \"updated_at\": \"2026-03-10T12:00:00Z\"\n}"} language="json" title="201 Created — Kanal" /><_0x399da1 code={"// 201 Created — Kategori (type=4)\n{\n  \"id\": \"554200123456789012\",\n  \"guild_id\": \"540528238699487232\",\n  \"name\": \"Yeni Kategori\",\n  \"type\": \"category\",\n  \"fractional_position\": \"a0\",\n  \"created_at\": \"2026-03-10T12:00:00Z\"\n}"} language="json" title="201 Created — Kategori" /></_0x2ba981.Fragment>} errors={_0x7f8816} /><_0x110a04 /><_Component id="kanal-sil">{_0x17b572("botApiChannels.kanalSil")}</_Component><_0x1f0299>{_0x17b572("botApiChannels.kanalSilDesc")}</_0x1f0299><_0x22e615 method="DELETE" path="/bot/guilds/{guildId}/channels/{channelId}" description={_0x17b572("botApiChannels.endpointKanalSilDesc")} auth="Bot Token" tryIt={{
      params: [{
        name: "guildId",
        in: "path",
        placeholder: _0x17b572("botApiChannels.placeholderSunucuId")
      }, {
        name: "channelId",
        in: "path",
        placeholder: _0x17b572("botApiChannels.placeholderKanalId")
      }]
    }} /><_0x13723a success={<_0x399da1 code={"// 200 OK\n{\n  \"message\": \"Kanal başarıyla silindi\"\n}"} language="json" title="200 OK" />} errors={_0x586012} /><_0x110a04 /><_Component id="kategori-sil">{_0x17b572("botApiChannels.kategoriSil")}</_Component><_0x1f0299>{_0x17b572("botApiChannels.kategoriSilDesc")}</_0x1f0299><_0x22e615 method="DELETE" path="/bot/guilds/{guildId}/categories/{categoryId}" description={_0x17b572("botApiChannels.endpointKategoriSilDesc")} auth="Bot Token" tryIt={{
      params: [{
        name: "guildId",
        in: "path",
        placeholder: _0x17b572("botApiChannels.placeholderSunucuId")
      }, {
        name: "categoryId",
        in: "path",
        placeholder: _0x17b572("botApiChannels.placeholderKategoriId")
      }]
    }} /><_0x13723a success={<_0x399da1 code={"// 200 OK\n{\n  \"message\": \"Kategori başarıyla silindi\"\n}"} language="json" title="200 OK" />} errors={_0x286f7f} /><_0x110a04 /><_Component id="kanal-izinleri">{_0x17b572("botApiChannels.kanalIzinleriniDuzenle")}</_Component><_0x1f0299>{_0x17b572("botApiChannels.kanalIzinleriDesc")}</_0x1f0299><_0x22e615 method="PUT" path="/bot/channels/{channelId}/permissions/{overwriteId}" description={_0x17b572("botApiChannels.endpointKanalIzinleriDesc")} auth="Bot Token" tryIt={{
      params: [{
        name: "channelId",
        in: "path",
        placeholder: _0x17b572("botApiChannels.placeholderKanalId")
      }, {
        name: "overwriteId",
        in: "path",
        placeholder: _0x17b572("botApiChannels.placeholderRolVeyaUyeId")
      }],
      bodyType: "json",
      bodyTemplate: _0x17b572("botApiChannels.bodyTemplateIzinDuzenle")
    }} /><_0x4d088e title={_0x17b572("botApiMessages.titleJsonBody")} params={[{
      name: "type",
      type: "number",
      required: true,
      description: _0x17b572("botApiChannels.paramPermTypeDesc")
    }, {
      name: "allow",
      type: "string",
      required: false,
      description: _0x17b572("botApiChannels.paramAllowDesc")
    }, {
      name: "deny",
      type: "string",
      required: false,
      description: _0x17b572("botApiChannels.paramDenyDesc")
    }]} /><_0x13723a success={<_0x1f0299><_0x2d7a50>204 No Content</_0x2d7a50> — {_0x17b572("botApiChannels.noBody")}</_0x1f0299>} errors={_0x130ab3} /><_0x110a04 /><_Component id="kanal-izni-sil">{_0x17b572("botApiChannels.kanalIzniSil")}</_Component><_0x1f0299>{_0x17b572("botApiChannels.kanaldakiBelirtilenIzinOverrideini")}</_0x1f0299><_0x22e615 method="DELETE" path="/bot/channels/{channelId}/permissions/{overwriteId}" description={_0x17b572("botApiChannels.endpointKanalIzniSilDesc")} auth="Bot Token" tryIt={{
      params: [{
        name: "channelId",
        in: "path",
        placeholder: _0x17b572("botApiChannels.placeholderKanalId")
      }, {
        name: "overwriteId",
        in: "path",
        placeholder: _0x17b572("botApiChannels.placeholderRolVeyaUyeId")
      }]
    }} /><_0x13723a success={<_0x1f0299><_0x2d7a50>204 No Content</_0x2d7a50> — {_0x17b572("botApiChannels.noBody")}</_0x1f0299>} errors={_0x351f27} /></_0x2ba981.Fragment>;
}
export { p as default };