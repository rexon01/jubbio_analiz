import { b as _0x2be20f, j as _0x3ec9ee } from "./index-cQfEKR1W.js";
import { H as _0x34f621, P as _0x193fee, D as _0x2ba517, a as _0x20fd98, k as _0x38dcfa, l as _0x4feae0, C as _0x2274bc, i as _0x441268, R as _0x30a980, A as _0x3e87ba, c as _0x1f1ee9, d as _0x575309, e as _0x8d569, f as _0x2ee6b4, g as _0xf6c843, h as _0x4064c9, L as _0x3b32ea, j as _0x3d04e8, I as _0x817d94 } from "./DocComponents-BWAUshvB.js";
import { C as _0x5993b8 } from "./CodeBlock-B4seo9QW.js";
import "./clipboard-BQ9qambq.js";
import "./loader-circle-CTtxa1g9.js";
import "./prism-2cMp9j73.js";
function g() {
  const {
    t: _0x18bc92
  } = _0x2be20f("docs");
  return _0x3ec9ee.jsxs(_0x3ec9ee.Fragment, {
    children: [_0x3ec9ee.jsx(_0x34f621, {
      children: _0x18bc92("webhookExec.webhookIleMesajGonderme")
    }), _0x3ec9ee.jsx(_0x193fee, {
      children: _0x18bc92("webhookExec.webhookTokeniIleKimlik")
    }), _0x3ec9ee.jsx(_0x2ba517, {}), _0x3ec9ee.jsx(_0x20fd98, {
      id: "mesaj-gonder",
      children: _0x18bc92("webhookExec.mesajGonder")
    }), _0x3ec9ee.jsx(_0x38dcfa, {
      method: "POST",
      path: "/webhooks/{webhookId}/{webhookToken}",
      description: _0x18bc92("webhookExec.endpointDescSendMessage")
    }), _0x3ec9ee.jsx(_0x4feae0, {
      title: _0x18bc92("botApiMessages.titleJsonBody"),
      params: [{
        name: "content",
        type: "string",
        required: false,
        description: _0x18bc92("webhookExec.paramContent")
      }, {
        name: "username",
        type: "string",
        required: false,
        description: _0x18bc92("webhookExec.paramUsername")
      }, {
        name: "avatar_url",
        type: "string",
        required: false,
        description: _0x18bc92("webhookExec.paramAvatarUrl")
      }, {
        name: "embeds",
        type: "array",
        required: false,
        description: _0x18bc92("webhookExec.paramEmbeds")
      }]
    }), _0x3ec9ee.jsx(_0x2274bc, {
      type: "info",
      title: _0x18bc92("webhookExec.callouticerikGereksinimi"),
      children: _0x18bc92("webhookExec.callouticerikGereksinimiBody")
    }), _0x3ec9ee.jsx(_0x5993b8, {
      code: "{\n  \"content\": \"Merhaba dünya!\",\n  \"username\": \"Özel Bot Adı\",\n  \"avatar_url\": \"https://example.com/avatar.png\",\n  \"embeds\": [\n    {\n      \"title\": \"Embed Başlığı\",\n      \"description\": \"Embed açıklaması\",\n      \"color\": 5793266,\n      \"url\": \"https://example.com\",\n      \"footer\": { \"text\": \"Footer metni\" },\n      \"image\": { \"url\": \"https://example.com/image.png\" }\n    }\n  ]\n}",
      language: "json",
      title: _0x18bc92("webhookExec.titleornekBody")
    }), _0x3ec9ee.jsx(_0x441268, {
      id: "embed-yapisi",
      children: _0x18bc92("webhookExec.embedYapisi")
    }), _0x3ec9ee.jsx(_0x4feae0, {
      params: [{
        name: "title",
        type: "string",
        required: false,
        description: _0x18bc92("webhookExec.paramEmbedTitle")
      }, {
        name: "description",
        type: "string",
        required: false,
        description: _0x18bc92("webhookExec.paramEmbedDesc")
      }, {
        name: "color",
        type: "number",
        required: false,
        description: _0x18bc92("webhookExec.paramEmbedColor")
      }, {
        name: "url",
        type: "string",
        required: false,
        description: _0x18bc92("webhookExec.paramEmbedUrl")
      }, {
        name: "footer",
        type: "object",
        required: false,
        description: _0x18bc92("webhookExec.paramEmbedFooter")
      }, {
        name: "footer.text",
        type: "string",
        required: false,
        description: _0x18bc92("webhookExec.paramEmbedFooterText")
      }, {
        name: "footer.icon_url",
        type: "string",
        required: false,
        description: _0x18bc92("webhookExec.paramEmbedFooterIcon")
      }, {
        name: "image",
        type: "object",
        required: false,
        description: _0x18bc92("webhookExec.paramEmbedImage")
      }, {
        name: "image.url",
        type: "string",
        required: false,
        description: _0x18bc92("webhookExec.paramEmbedImageUrl")
      }, {
        name: "thumbnail",
        type: "object",
        required: false,
        description: _0x18bc92("webhookExec.paramEmbedThumbnail")
      }, {
        name: "thumbnail.url",
        type: "string",
        required: false,
        description: _0x18bc92("webhookExec.paramEmbedThumbnailUrl")
      }, {
        name: "author",
        type: "object",
        required: false,
        description: _0x18bc92("webhookExec.paramEmbedAuthor")
      }, {
        name: "author.name",
        type: "string",
        required: false,
        description: _0x18bc92("webhookExec.paramEmbedAuthorName")
      }, {
        name: "author.url",
        type: "string",
        required: false,
        description: _0x18bc92("webhookExec.paramEmbedAuthorUrl")
      }, {
        name: "author.icon_url",
        type: "string",
        required: false,
        description: _0x18bc92("webhookExec.paramEmbedAuthorIcon")
      }, {
        name: "timestamp",
        type: "string",
        required: false,
        description: _0x18bc92("webhookExec.paramEmbedTimestamp")
      }]
    }), _0x3ec9ee.jsx(_0x5993b8, {
      code: "{\n  \"id\": \"554200123456789012\",\n  \"channel_id\": \"545980009056055296\",\n  \"guild_id\": \"540528238699487232\",\n  \"type\": \"webhook\",\n  \"content\": \"Yeni deployment başarılı! 🚀\",\n  \"author\": {\n    \"username\": \"Deploy Bot\",\n    \"avatar_url\": \"https://cdn.example.com/deploy-bot.png\",\n    \"webhook_id\": \"554114951992586240\"\n  },\n  \"created_at\": 1741564800\n}",
      language: "json",
      title: "200 OK Response"
    }), _0x3ec9ee.jsx(_0x30a980, {
      codes: [{
        code: 200,
        description: _0x18bc92("webhookExec.resp200Sent")
      }, {
        code: 400,
        description: _0x18bc92("webhookExec.resp400ContentRequired")
      }, {
        code: 401,
        description: _0x18bc92("webhookExec.resp401InvalidToken")
      }, {
        code: 403,
        description: _0x18bc92("webhookExec.resp403Disabled")
      }, {
        code: 404,
        description: _0x18bc92("webhookExec.resp404NotFound")
      }, {
        code: 429,
        description: _0x18bc92("webhookExec.resp429RateLimit")
      }]
    }), _0x3ec9ee.jsx(_0x2ba517, {}), _0x3ec9ee.jsx(_0x20fd98, {
      id: "link-butonlari",
      children: _0x18bc92("webhookExec.linkButonlari")
    }), _0x3ec9ee.jsx(_0x193fee, {
      children: _0x18bc92("webhookExec.linkButonlariDesc")
    }), _0x3ec9ee.jsx(_0x2274bc, {
      type: "warning",
      title: _0x18bc92("webhookExec.calloutSadeceLinkButon"),
      children: _0x18bc92("webhookExec.calloutSadeceLinkButonBody")
    }), _0x3ec9ee.jsx(_0x5993b8, {
      code: "{\n  \"content\": \"Yeni deployment başarılı! 🚀\",\n  \"components\": [\n    {\n      \"type\": 1,\n      \"components\": [\n        {\n          \"type\": 2,\n          \"style\": 5,\n          \"label\": \"Siteyi Aç\",\n          \"url\": \"https://jubbio.com\"\n        },\n        {\n          \"type\": 2,\n          \"style\": 5,\n          \"label\": \"Dökümantasyon\",\n          \"url\": \"https://jubbio.com/dev/docs\",\n          \"emoji\": { \"name\": \"📚\" }\n        }\n      ]\n    }\n  ]\n}",
      language: "json",
      title: _0x18bc92("webhookExec.titleornekBody")
    }), _0x3ec9ee.jsx(_0x441268, {
      id: "component-alanlari",
      children: _0x18bc92("webhookExec.componentAlanlari")
    }), _0x3ec9ee.jsx(_0x4feae0, {
      title: "ActionRow",
      params: [{
        name: "type",
        type: "number",
        required: true,
        description: _0x18bc92("webhookExec.paramActionRowType")
      }, {
        name: "components",
        type: "array",
        required: true,
        description: _0x18bc92("webhookExec.paramActionRowComponents")
      }]
    }), _0x3ec9ee.jsx(_0x4feae0, {
      title: "Link Button",
      params: [{
        name: "type",
        type: "number",
        required: true,
        description: _0x18bc92("webhookExec.paramBtnType")
      }, {
        name: "style",
        type: "number",
        required: true,
        description: _0x18bc92("webhookExec.paramBtnStyle")
      }, {
        name: "label",
        type: "string",
        required: false,
        description: _0x18bc92("webhookExec.paramBtnLabel")
      }, {
        name: "url",
        type: "string",
        required: true,
        description: _0x18bc92("webhookExec.paramBtnUrl")
      }, {
        name: "emoji",
        type: "object",
        required: false,
        description: _0x18bc92("webhookExec.paramBtnEmoji")
      }, {
        name: "disabled",
        type: "boolean",
        required: false,
        description: _0x18bc92("webhookExec.paramBtnDisabled")
      }]
    }), _0x3ec9ee.jsx(_0x2274bc, {
      type: "info",
      title: _0x18bc92("webhookExec.calloutLinkButonKisitlamalar"),
      children: _0x18bc92("webhookExec.calloutLinkButonKisitlamalarBody")
    }), _0x3ec9ee.jsx(_0x2ba517, {}), _0x3ec9ee.jsx(_0x20fd98, {
      id: "attachment-gonderimi",
      children: _0x18bc92("webhookExec.attachmentGonderimi")
    }), _0x3ec9ee.jsx(_0x38dcfa, {
      method: "POST",
      path: "/webhooks/{webhookId}/{webhookToken}",
      description: _0x18bc92("webhookExec.endpointDescAttachment")
    }), _0x3ec9ee.jsx(_0x193fee, {
      children: _0x18bc92("webhookExec.attachmentDesc")
    }), _0x3ec9ee.jsx(_0x4feae0, {
      title: _0x18bc92("webhookExec.formFieldsTitle"),
      params: [{
        name: "payload_json",
        type: "string",
        required: false,
        description: _0x18bc92("webhookExec.paramPayloadJson")
      }, {
        name: "content",
        type: "string",
        required: false,
        description: _0x18bc92("webhookExec.paramFormContent")
      }, {
        name: "username",
        type: "string",
        required: false,
        description: _0x18bc92("webhookExec.paramFormUsername")
      }, {
        name: "files",
        type: "file",
        required: false,
        description: _0x18bc92("webhookExec.paramFormFiles")
      }]
    }), _0x3ec9ee.jsx(_0x2274bc, {
      type: "info",
      title: _0x18bc92("webhookExec.calloutikiKullanimSekli"),
      children: _0x18bc92("webhookExec.calloutikiKullanimSekliBody")
    }), _0x3ec9ee.jsx(_0x5993b8, {
      code: "curl -X POST " + _0x3e87ba + "/webhooks/WEBHOOK_ID/WEBHOOK_TOKEN \\\n  -F 'payload_json={\"content\": \"Dosya ektedir\"}' \\\n  -F 'files=@screenshot.png' \\\n  -F 'files=@report.pdf'",
      language: "bash",
      title: _0x18bc92("webhookExec.titlecurlIleDosyaGonderme")
    }), _0x3ec9ee.jsx(_0x5993b8, {
      code: "{\n  \"id\": \"...\",\n  \"channel_id\": \"...\",\n  \"guild_id\": \"...\",\n  \"type\": \"webhook\",\n  \"content\": \"Dosya ektedir\",\n  \"author\": {\n    \"username\": \"Captain Hook\",\n    \"avatar_url\": null,\n    \"webhook_id\": \"554114951992586240\"\n  },\n  \"attachments\": [\n    {\n      \"id\": \"554200123456789012\",\n      \"filename\": \"screenshot.png\",\n      \"content_type\": \"image/png\",\n      \"size\": 142857,\n      \"url\": \"https://cdn.example.com/attachments/554200123456789012.png\"\n    }\n  ],\n  \"created_at\": 1741564800\n}",
      language: "json",
      title: "Response (attachment ile)"
    }), _0x3ec9ee.jsx(_0x2274bc, {
      type: "warning",
      title: _0x18bc92("webhookExec.calloutAttachmentLimiti"),
      children: _0x18bc92("webhookExec.calloutAttachmentLimitiBody")
    }), _0x3ec9ee.jsx(_0x2ba517, {}), _0x3ec9ee.jsx(_0x20fd98, {
      id: "slack-uyumlu-format",
      children: _0x18bc92("webhookExec.slackUyumluFormat")
    }), _0x3ec9ee.jsx(_0x38dcfa, {
      method: "POST",
      path: "/webhooks/{webhookId}/{webhookToken}/slack",
      description: _0x18bc92("webhookExec.endpointDescSlack")
    }), _0x3ec9ee.jsx(_0x193fee, {
      children: _0x18bc92("webhookExec.mevcutSlackEntegrasyonlariniziMinimum")
    }), _0x3ec9ee.jsx(_0x5993b8, {
      code: "{\n  \"text\": \"Yeni deployment başarılı!\",\n  \"username\": \"Deploy Bot\",\n  \"icon_url\": \"https://example.com/deploy-icon.png\",\n  \"attachments\": [\n    {\n      \"color\": \"#36a64f\",\n      \"title\": \"Production Deploy\",\n      \"text\": \"v2.1.0 başarıyla deploy edildi\",\n      \"fields\": [\n        { \"title\": \"Environment\", \"value\": \"Production\", \"short\": true },\n        { \"title\": \"Version\", \"value\": \"v2.1.0\", \"short\": true }\n      ]\n    }\n  ]\n}",
      language: "json",
      title: _0x18bc92("webhookExec.titleornekBody")
    }), _0x3ec9ee.jsx(_0x2274bc, {
      type: "info",
      title: _0x18bc92("webhookExec.calloutslackDonusumu"),
      children: _0x18bc92("webhookExec.calloutslackDonusumuBody")
    }), _0x3ec9ee.jsxs(_0x1f1ee9, {
      children: [_0x3ec9ee.jsx(_0x575309, {
        children: _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x2ee6b4, {
            children: _0x18bc92("webhookExec.thslackAlani")
          }), _0x3ec9ee.jsx(_0x2ee6b4, {
            children: _0x18bc92("webhookExec.thdonusum")
          })]
        })
      }), _0x3ec9ee.jsxs(_0xf6c843, {
        children: [_0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: "text"
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdSlackTextMap")
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: "username"
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tddogrudanKullanilir")
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: "icon_url"
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdSlackIconMap")
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: "attachments"
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdembedeDonusturulur")
          })]
        })]
      })]
    }), _0x3ec9ee.jsx(_0x2ba517, {}), _0x3ec9ee.jsx(_0x20fd98, {
      id: "github-entegrasyonu",
      children: _0x18bc92("webhookExec.githubEntegrasyonu")
    }), _0x3ec9ee.jsx(_0x38dcfa, {
      method: "POST",
      path: "/webhooks/{webhookId}/{webhookToken}/github",
      description: _0x18bc92("webhookExec.endpointDescGithub")
    }), _0x3ec9ee.jsx(_0x4feae0, {
      title: _0x18bc92("webhookExec.titlegithubTarafindanGonderilenHeaderlar"),
      params: [{
        name: "Content-Type",
        type: "string",
        required: true,
        description: _0x18bc92("webhookExec.paramGithubContentType")
      }, {
        name: "X-GitHub-Event",
        type: "string",
        required: true,
        description: _0x18bc92("webhookExec.paramGithubEvent")
      }]
    }), _0x3ec9ee.jsx(_0x2274bc, {
      type: "info",
      title: _0x18bc92("webhookExec.calloutotomatikDonusum"),
      children: _0x18bc92("webhookExec.calloutBodybodyOlarakGithubinGonderdigi")
    }), _0x3ec9ee.jsx(_0x2274bc, {
      type: "warning",
      title: _0x18bc92("webhookExec.callouthmacDogrulamaOpsiyonel"),
      children: _0x18bc92("webhookExec.callouthmacBody")
    }), _0x3ec9ee.jsx(_0x441268, {
      id: "desteklenen-eventler",
      children: _0x18bc92("webhookExec.desteklenenEventler")
    }), _0x3ec9ee.jsxs(_0x1f1ee9, {
      children: [_0x3ec9ee.jsx(_0x575309, {
        children: _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x2ee6b4, {
            children: _0x18bc92("th.thEvent")
          }), _0x3ec9ee.jsx(_0x2ee6b4, {
            children: _0x18bc92("th.thDurum")
          }), _0x3ec9ee.jsx(_0x2ee6b4, {
            children: _0x18bc92("webhookExec.thembedIcerigi")
          })]
        })
      }), _0x3ec9ee.jsxs(_0xf6c843, {
        children: [_0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: "push"
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdrepoyaPushYapildiginda")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdcommitListesiMaks10")
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: "pull_request"
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdprAcmakapamamerge")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdPrDetail")
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: "issues"
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdissueAcmakapamayenidenAcma")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdissueBasligiBodyOnizleme")
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: "issue_comment"
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdIssueComment")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdyorumIcerigiIlgiliIssue")
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: "pull_request_review"
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdprReviewGonderildiginde")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdPrReviewDetail")
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: "create"
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdbranchVeyaTagOlusturuldugunda")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdrefTipiBranchtagVe")
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: "delete"
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdbranchVeyaTagSilindiginde")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdrefTipiVeAdi")
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: "release"
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdyeniReleaseYayinlandiginda")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdreleaseAdiTagPrerelease")
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: "fork"
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdrepoForkEdildiginde")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdforkEdenKullaniciVe")
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: "star"
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdrepoYildizlandiginda")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdyildizkaldirmaBilgisiToplamYildiz")
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: "ping"
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdwebhookBaglantiTesti")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdbaglantiBasariliMesajiVe")
          })]
        })]
      })]
    }), _0x3ec9ee.jsx(_0x2274bc, {
      type: "info",
      title: _0x18bc92("webhookExec.calloutdigerEventler"),
      children: _0x18bc92("webhookExec.calloutBodyyukaridaListelenmeyenTumGithub")
    }), _0x3ec9ee.jsx(_0x441268, {
      id: "embed-renk-kodlari",
      children: _0x18bc92("webhookExec.embedRenkKodlari")
    }), _0x3ec9ee.jsxs(_0x1f1ee9, {
      children: [_0x3ec9ee.jsx(_0x575309, {
        children: _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x2ee6b4, {
            children: _0x18bc92("th.thDurum")
          }), _0x3ec9ee.jsx(_0x2ee6b4, {
            children: _0x18bc92("th.thRenk")
          }), _0x3ec9ee.jsx(_0x2ee6b4, {
            children: _0x18bc92("th.thHex")
          })]
        })
      }), _0x3ec9ee.jsxs(_0xf6c843, {
        children: [_0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdpushBranchOlusturmaApproved")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdyesil")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: "#57F287"
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdprAcma")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdBlurple")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: "#5865F2"
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdPrClose")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdkirmizi")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: "#ED4245"
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdIssueComment")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdaltin")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: "#FEE75C"
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdReview")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdMor")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: "#9B59B6"
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdReleaseStar")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdkoyuYesil")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: "#2ECC71"
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdFork")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdMavi")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: "#3498DB"
          })]
        }), _0x3ec9ee.jsxs(_0x8d569, {
          children: [_0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdGenelPing")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: _0x18bc92("webhookExec.tdTuruncu")
          }), _0x3ec9ee.jsx(_0x4064c9, {
            children: "#E67E22"
          })]
        })]
      })]
    }), _0x3ec9ee.jsx(_0x441268, {
      id: "github-kurulumu",
      children: _0x18bc92("webhookExec.githubKurulumu")
    }), _0x3ec9ee.jsx(_0x2274bc, {
      type: "info",
      title: _0x18bc92("webhookExec.calloutadimAdimKurulum"),
      children: _0x3ec9ee.jsxs(_0x3b32ea, {
        ordered: true,
        children: [_0x3ec9ee.jsx(_0x3d04e8, {
          children: _0x18bc92("webhookExec.githubSetupStep1")
        }), _0x3ec9ee.jsx(_0x3d04e8, {
          children: "GitHub repo → Settings → Webhooks → Add webhook"
        }), _0x3ec9ee.jsxs(_0x3d04e8, {
          children: ["Payload URL: ", _0x3ec9ee.jsx(_0x817d94, {
            children: _0x3e87ba + "/webhooks/{webhookId}/{webhookToken}/github"
          })]
        }), _0x3ec9ee.jsx(_0x3d04e8, {
          children: _0x18bc92("webhookExec.calloutKurulumStep4")
        }), _0x3ec9ee.jsxs(_0x3d04e8, {
          children: ["Content type: ", _0x3ec9ee.jsx(_0x817d94, {
            children: "application/json"
          })]
        }), _0x3ec9ee.jsx(_0x3d04e8, {
          children: _0x18bc92("webhookExec.githubSetupStep6")
        }), _0x3ec9ee.jsx(_0x3d04e8, {
          children: _0x18bc92("webhookExec.githubSetupStep7")
        })]
      })
    }), _0x3ec9ee.jsx(_0x30a980, {
      codes: [{
        code: 200,
        description: _0x18bc92("webhookExec.resp200GithubProcessed")
      }, {
        code: 400,
        description: _0x18bc92("webhookExec.resp400GithubInvalid")
      }, {
        code: 403,
        description: _0x18bc92("webhookExec.resp403GithubHmac")
      }, {
        code: 404,
        description: _0x18bc92("webhookExec.resp404GithubNotFound")
      }]
    }), _0x3ec9ee.jsx(_0x2ba517, {}), _0x3ec9ee.jsx(_0x20fd98, {
      id: "token-tabanli-endpointler",
      children: _0x18bc92("webhookExec.tokenTabanliEndpointler")
    }), _0x3ec9ee.jsx(_0x193fee, {
      children: _0x18bc92("webhookExec.tokenDesc")
    }), _0x3ec9ee.jsx(_0x441268, {
      id: "webhook-bilgisi-token",
      children: _0x18bc92("webhookExec.webhookBilgisiToken")
    }), _0x3ec9ee.jsx(_0x38dcfa, {
      method: "GET",
      path: "/webhooks/{webhookId}/{webhookToken}",
      description: _0x18bc92("webhookExec.endpointDescTokenGet")
    }), _0x3ec9ee.jsx(_0x441268, {
      id: "webhook-guncelle-token",
      children: _0x18bc92("webhookExec.webhookGuncelleToken")
    }), _0x3ec9ee.jsx(_0x38dcfa, {
      method: "PATCH",
      path: "/webhooks/{webhookId}/{webhookToken}",
      description: _0x18bc92("webhookExec.endpointDescTokenUpdate")
    }), _0x3ec9ee.jsx(_0x441268, {
      id: "webhook-sil-token",
      children: _0x18bc92("webhookExec.webhookSilToken")
    }), _0x3ec9ee.jsx(_0x38dcfa, {
      method: "DELETE",
      path: "/webhooks/{webhookId}/{webhookToken}",
      description: _0x18bc92("webhookExec.endpointDescTokenDelete")
    }), _0x3ec9ee.jsx(_0x30a980, {
      codes: [{
        code: 200,
        description: _0x18bc92("webhookExec.resp200TokenSuccess")
      }, {
        code: 204,
        description: _0x18bc92("webhookExec.resp204TokenDeleted")
      }, {
        code: 401,
        description: _0x18bc92("webhookExec.resp401InvalidToken")
      }, {
        code: 404,
        description: _0x18bc92("webhookExec.resp404TokenNotFound")
      }]
    }), _0x3ec9ee.jsx(_0x2ba517, {}), _0x3ec9ee.jsx(_0x20fd98, {
      id: "rate-limiting",
      children: _0x18bc92("webhookExec.rateLimiting")
    }), _0x3ec9ee.jsx(_0x4feae0, {
      title: _0x18bc92("webhookExec.limitsTitle"),
      params: [{
        name: "rate_limit",
        type: "number",
        required: false,
        description: _0x18bc92("webhookExec.paramRateLimit")
      }, {
        name: "rate_limit_window",
        type: "number",
        required: false,
        description: _0x18bc92("webhookExec.paramRateWindow")
      }, {
        name: "rate_limit_cost",
        type: "number",
        required: false,
        description: _0x18bc92("webhookExec.paramRateCost")
      }]
    }), _0x3ec9ee.jsx(_0x193fee, {
      children: _0x18bc92("webhookExec.rateLimitDesc")
    }), _0x3ec9ee.jsx(_0x5993b8, {
      code: "{\n  \"message\": \"Rate limit exceeded\",\n  \"retry_after\": 12.5,\n  \"global\": false\n}",
      language: "json",
      title: "429 Too Many Requests"
    }), _0x3ec9ee.jsx(_0x2274bc, {
      type: "warning",
      title: _0x18bc92("webhookExec.calloutrateLimitHeaderlari"),
      children: _0x3ec9ee.jsxs(_0x3b32ea, {
        children: [_0x3ec9ee.jsx(_0x3d04e8, {
          children: _0x18bc92("webhookExec.calloutrateLimitBody1")
        }), _0x3ec9ee.jsx(_0x3d04e8, {
          children: _0x18bc92("webhookExec.calloutrateLimitBody2")
        }), _0x3ec9ee.jsx(_0x3d04e8, {
          children: _0x18bc92("webhookExec.calloutrateLimitBody3")
        })]
      })
    }), _0x3ec9ee.jsx(_0x2ba517, {}), _0x3ec9ee.jsx(_0x20fd98, {
      id: "hizli-baslangic",
      children: _0x18bc92("webhookExec.hizliBaslangicOrnekleri")
    }), _0x3ec9ee.jsx(_0x441268, {
      id: "curl-ornegi",
      children: _0x18bc92("webhookExec.titlecurlIleMesajGonderme")
    }), _0x3ec9ee.jsx(_0x5993b8, {
      code: "curl -X POST " + _0x3e87ba + "/webhooks/WEBHOOK_ID/WEBHOOK_TOKEN \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"content\": \"Merhaba dünya!\"}'",
      language: "bash",
      title: "cURL"
    }), _0x3ec9ee.jsx(_0x441268, {
      id: "javascript-ornegi",
      children: _0x18bc92("webhookExec.titlejavascriptIleMesajGonderme")
    }), _0x3ec9ee.jsx(_0x5993b8, {
      code: "const webhookUrl = '" + _0x3e87ba + "/webhooks/WEBHOOK_ID/WEBHOOK_TOKEN';\n\nconst response = await fetch(webhookUrl, {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/json' },\n  body: JSON.stringify({\n    content: 'Merhaba dünya!',\n    embeds: [{\n      title: 'Bildirim',\n      description: 'Bu bir test mesajıdır',\n      color: 5793266\n    }]\n  })\n});\n\nconst data = await response.json();\nconsole.log(data);",
      language: "javascript",
      title: "JavaScript (fetch)"
    }), _0x3ec9ee.jsx(_0x441268, {
      id: "github-webhook-kurulumu",
      children: _0x18bc92("webhookExec.githubWebhookKurulumu")
    }), _0x3ec9ee.jsxs(_0x3b32ea, {
      ordered: true,
      children: [_0x3ec9ee.jsx(_0x3d04e8, {
        children: _0x18bc92("webhookExec.githubSetupStep1")
      }), _0x3ec9ee.jsx(_0x3d04e8, {
        children: "GitHub repo → Settings → Webhooks → Add webhook"
      }), _0x3ec9ee.jsxs(_0x3d04e8, {
        children: ["Payload URL: ", _0x3ec9ee.jsx(_0x817d94, {
          children: _0x3e87ba + "/webhooks/WEBHOOK_ID/WEBHOOK_TOKEN/github"
        })]
      }), _0x3ec9ee.jsx(_0x3d04e8, {
        children: _0x18bc92("webhookExec.calloutKurulumStep4")
      }), _0x3ec9ee.jsxs(_0x3d04e8, {
        children: ["Content type: ", _0x3ec9ee.jsx(_0x817d94, {
          children: "application/json"
        })]
      }), _0x3ec9ee.jsx(_0x3d04e8, {
        children: _0x18bc92("webhookExec.githubSetupStep6")
      }), _0x3ec9ee.jsx(_0x3d04e8, {
        children: _0x18bc92("webhookExec.githubSetupStep7")
      })]
    })]
  });
}
export { g as default };