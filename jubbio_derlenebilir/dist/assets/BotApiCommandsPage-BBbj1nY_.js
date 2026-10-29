import { b as _0xb66228, j as _0x8ca1fa } from "./index-cQfEKR1W.js";
import { H as _0x3b448a, C as _0x38103d, a as _0x5dc168, P as _0x326abb, k as _0x1fedde, l as _0x387f73, m, D as _0x53f4c5, c, d as _0x119360, e as _0x33e706, f as _0x356ce3, g as _0x3ecb4e, h as _0x4b5f0b, I } from "./DocComponents-BWAUshvB.js";
import { C as _0x231267 } from "./CodeBlock-B4seo9QW.js";
import "./clipboard-BQ9qambq.js";
import "./loader-circle-CTtxa1g9.js";
import "./prism-2cMp9j73.js";
const A = "{\n  \"id\": \"123456789\",\n  \"application_id\": \"987654321\",\n  \"name\": \"ban\",\n  \"description\": \"Kullanıcıyı yasakla\",\n  \"options\": [\n    {\n      \"name\": \"user\",\n      \"description\": \"Yasaklanacak kullanıcı\",\n      \"type\": 6,\n      \"required\": true\n    }\n  ],\n  \"default_member_permissions\": \"8\",\n  \"dm_permission\": true,\n  \"nsfw\": false,\n  \"icon_url\": \"https://example.com/icon.png\",\n  \"guild_id\": \"111222333\",\n  \"version\": \"1710000000\",\n  \"created_at\": \"2026-03-10T12:00:00Z\",\n  \"updated_at\": \"2026-03-10T12:00:00Z\"\n}";
function y() {
  const {
    t: _0x57fba5
  } = _0xb66228("docs");
  const _0x4eb9b3 = [{
    code: 400,
    body: "{\"error\":\"Invalid application ID format\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorAppIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid request body\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorJsonParse")
  }, {
    code: 400,
    body: "{\"error\":\"Command name is required\",\"code\":50035,\"field\":\"name\"}",
    condition: _0x57fba5("botApiCommands.errorNameEmpty")
  }, {
    code: 400,
    body: "{\"error\":\"Command description is required\",\"code\":50035,\"field\":\"description\"}",
    condition: _0x57fba5("botApiCommands.errorDescEmpty")
  }, {
    code: 400,
    body: "{\"error\":\"Command name must be 32 characters or less\",\"code\":50035,\"field\":\"name\"}",
    condition: _0x57fba5("botApiCommands.errorNameTooLong")
  }, {
    code: 400,
    body: "{\"error\":\"Command name cannot contain spaces\",\"code\":50035,\"field\":\"name\"}",
    condition: _0x57fba5("botApiCommands.errorNameSpaces")
  }, {
    code: 400,
    body: "{\"error\":\"Command name must be lowercase\",\"code\":50035,\"field\":\"name\"}",
    condition: _0x57fba5("botApiCommands.errorNameUppercase")
  }, {
    code: 400,
    body: "{\"error\":\"Command name contains invalid characters...\",\"code\":50035,\"field\":\"name\"}",
    condition: _0x57fba5("botApiCommands.errorNameInvalidChars")
  }, {
    code: 400,
    body: "{\"error\":\"Command description must be 100 characters or less\",\"code\":50035,\"field\":\"description\"}",
    condition: _0x57fba5("botApiCommands.errorDescTooLong")
  }, {
    code: 400,
    body: "{\"error\":\"Commands can have at most 25 options\",\"code\":50035,\"field\":\"options\"}",
    condition: _0x57fba5("botApiCommands.errorOptionsTooMany")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid options format\",\"code\":50035,\"field\":\"options\"}",
    condition: _0x57fba5("botApiCommands.errorOptionsInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Maximum number of commands (100) reached\",\"code\":30032}",
    condition: _0x57fba5("botApiCommands.errorMaxCommands")
  }, {
    code: 403,
    body: "{\"error\":\"You can only manage commands for your own application\",\"code\":50001}",
    condition: _0x57fba5("botApiCommands.errorNotOwnApp")
  }, {
    code: 500,
    body: "{\"error\":\"Internal server error\"}",
    condition: _0x57fba5("botApiCommands.errorServiceError")
  }];
  const _0x117f49 = [..._0x4eb9b3.slice(0, -1), {
    code: 400,
    body: "{\"error\":\"Invalid guild ID format\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorGuildIdInvalid")
  }, {
    code: 500,
    body: "{\"error\":\"Internal server error\"}",
    condition: _0x57fba5("botApiCommands.errorServiceError")
  }];
  const _0x49be22 = [{
    code: 400,
    body: "{\"error\":\"Invalid application ID format\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorAppIdInvalid")
  }, {
    code: 403,
    body: "{\"error\":\"You can only view commands for your own application\",\"code\":50001}",
    condition: _0x57fba5("botApiCommands.errorNotOwnAppView")
  }, {
    code: 500,
    body: "{\"error\":\"Internal server error\"}",
    condition: _0x57fba5("botApiCommands.errorServiceError")
  }];
  const _0x579d90 = [{
    code: 400,
    body: "{\"error\":\"Invalid application ID format\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorAppIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid guild ID format\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorGuildIdInvalid")
  }, {
    code: 403,
    body: "{\"error\":\"You can only view commands for your own application\",\"code\":50001}",
    condition: _0x57fba5("botApiCommands.errorNotOwnAppView")
  }, {
    code: 500,
    body: "{\"error\":\"Internal server error\"}",
    condition: _0x57fba5("botApiCommands.errorServiceError")
  }];
  const _0x1882d5 = [{
    code: 400,
    body: "{\"error\":\"Invalid application ID format\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorAppIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid command ID format\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorCommandIdInvalid")
  }, {
    code: 403,
    body: "{\"error\":\"You can only view commands for your own application\",\"code\":50001}",
    condition: _0x57fba5("botApiCommands.errorNotOwnAppCommand")
  }, {
    code: 404,
    body: "{\"error\":\"Unknown command\",\"code\":10003}",
    condition: _0x57fba5("botApiCommands.errorCommandNotFound")
  }, {
    code: 500,
    body: "{\"error\":\"Internal server error\"}",
    condition: _0x57fba5("botApiCommands.errorServiceError")
  }];
  const _0x3661a4 = [{
    code: 400,
    body: "{\"error\":\"Invalid application ID format\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorAppIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid guild ID format\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorGuildIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid command ID format\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorCommandIdInvalid")
  }, {
    code: 403,
    body: "{\"error\":\"You can only view commands for your own application\",\"code\":50001}",
    condition: _0x57fba5("botApiCommands.errorNotOwnAppCommand")
  }, {
    code: 404,
    body: "{\"error\":\"Unknown command\",\"code\":10003}",
    condition: _0x57fba5("botApiCommands.errorCommandNotFoundGuild")
  }, {
    code: 500,
    body: "{\"error\":\"Internal server error\"}",
    condition: _0x57fba5("botApiCommands.errorServiceError")
  }];
  const _0x554dd1 = [{
    code: 400,
    body: "{\"error\":\"Invalid application ID format\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorAppIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid command ID format\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorCommandIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid request body\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorJsonParse")
  }, {
    code: 400,
    body: "{\"error\":\"Command name must be 32 characters or less\",\"code\":50035,\"field\":\"name\"}",
    condition: _0x57fba5("botApiCommands.errorNameTooLong")
  }, {
    code: 400,
    body: "{\"error\":\"Command name cannot contain spaces\",\"code\":50035,\"field\":\"name\"}",
    condition: _0x57fba5("botApiCommands.errorNameSpaces")
  }, {
    code: 400,
    body: "{\"error\":\"Command name must be lowercase\",\"code\":50035,\"field\":\"name\"}",
    condition: _0x57fba5("botApiCommands.errorNameUppercase")
  }, {
    code: 400,
    body: "{\"error\":\"Command name contains invalid characters...\",\"code\":50035,\"field\":\"name\"}",
    condition: _0x57fba5("botApiCommands.errorNameInvalidCharsUpdate")
  }, {
    code: 400,
    body: "{\"error\":\"Command description must be 100 characters or less\",\"code\":50035,\"field\":\"description\"}",
    condition: _0x57fba5("botApiCommands.errorDescTooLong")
  }, {
    code: 400,
    body: "{\"error\":\"Commands can have at most 25 options\",\"code\":50035,\"field\":\"options\"}",
    condition: _0x57fba5("botApiCommands.errorOptionsTooMany")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid options format\",\"code\":50035,\"field\":\"options\"}",
    condition: _0x57fba5("botApiCommands.errorOptionsInvalid")
  }, {
    code: 403,
    body: "{\"error\":\"You can only manage commands for your own application\",\"code\":50001}",
    condition: _0x57fba5("botApiCommands.errorNotOwnAppCommand")
  }, {
    code: 404,
    body: "{\"error\":\"Unknown command\",\"code\":10003}",
    condition: _0x57fba5("botApiCommands.errorCommandNotFoundApp")
  }, {
    code: 500,
    body: "{\"error\":\"Internal server error\"}",
    condition: _0x57fba5("botApiCommands.errorServiceError")
  }];
  const _0x4334ee = [..._0x554dd1.slice(0, 2), {
    code: 400,
    body: "{\"error\":\"Invalid guild ID format\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorGuildIdInvalid")
  }, ..._0x554dd1.slice(2)];
  const _0x298240 = [{
    code: 400,
    body: "{\"error\":\"Invalid application ID format\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorAppIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid command ID format\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorCommandIdInvalid")
  }, {
    code: 403,
    body: "{\"error\":\"You can only manage commands for your own application\",\"code\":50001}",
    condition: _0x57fba5("botApiCommands.errorNotOwnAppCommand")
  }, {
    code: 404,
    body: "{\"error\":\"Unknown command\",\"code\":10003}",
    condition: _0x57fba5("botApiCommands.errorCommandNotFound")
  }, {
    code: 500,
    body: "{\"error\":\"Internal server error\"}",
    condition: _0x57fba5("botApiCommands.errorServiceError")
  }];
  const _0x2b00ec = [{
    code: 400,
    body: "{\"error\":\"Invalid application ID format\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorAppIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid guild ID format\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorGuildIdInvalid")
  }, {
    code: 400,
    body: "{\"error\":\"Invalid command ID format\",\"code\":50035}",
    condition: _0x57fba5("botApiCommands.errorCommandIdInvalid")
  }, {
    code: 403,
    body: "{\"error\":\"You can only manage commands for your own application\",\"code\":50001}",
    condition: _0x57fba5("botApiCommands.errorNotOwnAppCommand")
  }, {
    code: 404,
    body: "{\"error\":\"Unknown command\",\"code\":10003}",
    condition: _0x57fba5("botApiCommands.errorCommandNotFoundGuild")
  }, {
    code: 500,
    body: "{\"error\":\"Internal server error\"}",
    condition: _0x57fba5("botApiCommands.errorServiceError")
  }];
  return _0x8ca1fa.jsxs(_0x8ca1fa.Fragment, {
    children: [_0x8ca1fa.jsx(_0x3b448a, {
      children: _0x57fba5("botApiCommands.pageTitle")
    }), _0x8ca1fa.jsx(_0x38103d, {
      type: "info",
      title: "omitempty",
      children: _0x57fba5("botApiCommands.calloutOmitempty")
    }), _0x8ca1fa.jsx(_0x38103d, {
      type: "info",
      title: _0x57fba5("botApiCommands.callouthataFormati"),
      children: _0x57fba5("botApiCommands.callouthataFormatiBody")
    }), _0x8ca1fa.jsx(_0x38103d, {
      type: "info",
      title: _0x57fba5("botApiCommands.calloutrouteYapisi"),
      children: _0x57fba5("botApiCommands.calloutrouteYapisiBody")
    }), _0x8ca1fa.jsx(_0x5dc168, {
      id: "global-komut",
      children: _0x57fba5("botApiCommands.globalKomutKaydet")
    }), _0x8ca1fa.jsx(_0x326abb, {
      children: _0x57fba5("botApiCommands.tumGuildlerdeGecerliBir")
    }), _0x8ca1fa.jsx(_0x1fedde, {
      method: "POST",
      path: "/applications/{appId}/commands",
      description: _0x57fba5("botApiCommands.endpointDescGlobalCreate"),
      auth: "Bot Token",
      tryIt: {
        params: [{
          name: "appId",
          in: "path",
          placeholder: "Application ID"
        }],
        bodyType: "json",
        bodyTemplate: "{\n  \"name\": \"ping\",\n  \"description\": \"Pong döner\"\n}"
      }
    }), _0x8ca1fa.jsx(_0x387f73, {
      title: _0x57fba5("botApiMessages.titleJsonBody"),
      params: [{
        name: "name",
        type: "string",
        required: true,
        description: _0x57fba5("botApiCommands.paramName")
      }, {
        name: "description",
        type: "string",
        required: true,
        description: _0x57fba5("botApiCommands.paramDescription")
      }, {
        name: "type",
        type: "number",
        required: false,
        description: _0x57fba5("botApiCommands.paramType")
      }, {
        name: "options",
        type: "array",
        required: false,
        description: _0x57fba5("botApiCommands.paramOptions")
      }, {
        name: "default_member_permissions",
        type: "string",
        required: false,
        description: _0x57fba5("botApiCommands.paramDefaultPerms")
      }, {
        name: "dm_permission",
        type: "boolean",
        required: false,
        description: _0x57fba5("botApiCommands.paramDmPermission")
      }, {
        name: "nsfw",
        type: "boolean",
        required: false,
        description: _0x57fba5("botApiCommands.paramNsfw")
      }]
    }), _0x8ca1fa.jsx(m, {
      success: _0x8ca1fa.jsx(_0x231267, {
        code: "// 201 Created\n" + A,
        language: "json",
        title: "201 Created"
      }),
      errors: _0x4eb9b3
    }), _0x8ca1fa.jsx(_0x53f4c5, {}), _0x8ca1fa.jsx(_0x5dc168, {
      id: "guild-komut",
      children: _0x57fba5("botApiCommands.guildKomutKaydet")
    }), _0x8ca1fa.jsx(_0x326abb, {
      children: _0x57fba5("botApiCommands.belirliBirGuildeOzel")
    }), _0x8ca1fa.jsx(_0x1fedde, {
      method: "POST",
      path: "/applications/{appId}/guilds/{guildId}/commands",
      description: _0x57fba5("botApiCommands.endpointDescGuildCreate"),
      auth: "Bot Token",
      tryIt: {
        params: [{
          name: "appId",
          in: "path",
          placeholder: "Application ID"
        }, {
          name: "guildId",
          in: "path",
          placeholder: "Guild ID"
        }],
        bodyType: "json",
        bodyTemplate: "{\n  \"name\": \"ping\",\n  \"description\": \"Pong döner\"\n}"
      }
    }), _0x8ca1fa.jsx(m, {
      success: _0x8ca1fa.jsx(_0x231267, {
        code: "// 201 Created — guild_id alanı eklenir\n" + A,
        language: "json",
        title: "201 Created"
      }),
      errors: _0x117f49
    }), _0x8ca1fa.jsx(_0x53f4c5, {}), _0x8ca1fa.jsx(_0x5dc168, {
      id: "global-komutlari-listele",
      children: _0x57fba5("botApiCommands.globalKomutlariListele")
    }), _0x8ca1fa.jsx(_0x326abb, {
      children: _0x57fba5("botApiCommands.globalListDesc")
    }), _0x8ca1fa.jsx(_0x1fedde, {
      method: "GET",
      path: "/applications/{appId}/commands",
      description: _0x57fba5("botApiCommands.endpointDescGlobalList"),
      auth: "Bot Token",
      tryIt: {
        params: [{
          name: "appId",
          in: "path",
          placeholder: "Application ID"
        }]
      }
    }), _0x8ca1fa.jsx(m, {
      success: _0x8ca1fa.jsx(_0x231267, {
        code: "// 200 OK\n[\n  " + A + "\n]",
        language: "json",
        title: "200 OK"
      }),
      errors: _0x49be22
    }), _0x8ca1fa.jsx(_0x53f4c5, {}), _0x8ca1fa.jsx(_0x5dc168, {
      id: "guild-komutlarini-listele",
      children: _0x57fba5("botApiCommands.guildKomutlariniListele")
    }), _0x8ca1fa.jsx(_0x326abb, {
      children: _0x57fba5("botApiCommands.guildListDesc")
    }), _0x8ca1fa.jsx(_0x1fedde, {
      method: "GET",
      path: "/applications/{appId}/guilds/{guildId}/commands",
      description: _0x57fba5("botApiCommands.endpointDescGuildList"),
      auth: "Bot Token",
      tryIt: {
        params: [{
          name: "appId",
          in: "path",
          placeholder: "Application ID"
        }, {
          name: "guildId",
          in: "path",
          placeholder: "Guild ID"
        }]
      }
    }), _0x8ca1fa.jsx(m, {
      success: _0x8ca1fa.jsx(_0x231267, {
        code: "// 200 OK — her objede guild_id eklenir\n[\n  " + A + "\n]",
        language: "json",
        title: "200 OK"
      }),
      errors: _0x579d90
    }), _0x8ca1fa.jsx(_0x53f4c5, {}), _0x8ca1fa.jsx(_0x5dc168, {
      id: "global-komut-detay",
      children: _0x57fba5("botApiCommands.globalKomutDetayi")
    }), _0x8ca1fa.jsx(_0x326abb, {
      children: _0x57fba5("botApiCommands.belirliBirGlobalKomutun")
    }), _0x8ca1fa.jsx(_0x1fedde, {
      method: "GET",
      path: "/applications/{appId}/commands/{commandId}",
      description: _0x57fba5("botApiCommands.endpointDescGlobalDetail"),
      auth: "Bot Token",
      tryIt: {
        params: [{
          name: "appId",
          in: "path",
          placeholder: "Application ID"
        }, {
          name: "commandId",
          in: "path",
          placeholder: "Command ID"
        }]
      }
    }), _0x8ca1fa.jsx(m, {
      success: _0x8ca1fa.jsx(_0x231267, {
        code: "// 200 OK\n" + A,
        language: "json",
        title: "200 OK"
      }),
      errors: _0x1882d5
    }), _0x8ca1fa.jsx(_0x53f4c5, {}), _0x8ca1fa.jsx(_0x5dc168, {
      id: "guild-komut-detay",
      children: _0x57fba5("botApiCommands.guildKomutDetayi")
    }), _0x8ca1fa.jsx(_0x326abb, {
      children: _0x57fba5("botApiCommands.belirliBirGuildKomutunun")
    }), _0x8ca1fa.jsx(_0x1fedde, {
      method: "GET",
      path: "/applications/{appId}/guilds/{guildId}/commands/{commandId}",
      description: _0x57fba5("botApiCommands.endpointDescGuildDetail"),
      auth: "Bot Token",
      tryIt: {
        params: [{
          name: "appId",
          in: "path",
          placeholder: "Application ID"
        }, {
          name: "guildId",
          in: "path",
          placeholder: "Guild ID"
        }, {
          name: "commandId",
          in: "path",
          placeholder: "Command ID"
        }]
      }
    }), _0x8ca1fa.jsx(m, {
      success: _0x8ca1fa.jsx(_0x231267, {
        code: "// 200 OK — guild_id dahil\n" + A,
        language: "json",
        title: "200 OK"
      }),
      errors: _0x3661a4
    }), _0x8ca1fa.jsx(_0x53f4c5, {}), _0x8ca1fa.jsx(_0x5dc168, {
      id: "global-komut-guncelle",
      children: _0x57fba5("botApiCommands.globalKomutGuncelle")
    }), _0x8ca1fa.jsx(_0x326abb, {
      children: _0x57fba5("botApiCommands.mevcutBirGlobalKomutun")
    }), _0x8ca1fa.jsx(_0x1fedde, {
      method: "PATCH",
      path: "/applications/{appId}/commands/{commandId}",
      description: _0x57fba5("botApiCommands.endpointDescGlobalUpdate"),
      auth: "Bot Token",
      tryIt: {
        params: [{
          name: "appId",
          in: "path",
          placeholder: "Application ID"
        }, {
          name: "commandId",
          in: "path",
          placeholder: "Command ID"
        }],
        bodyType: "json",
        bodyTemplate: "{\n  \"description\": \"Güncellenmiş açıklama\"\n}"
      }
    }), _0x8ca1fa.jsx(m, {
      success: _0x8ca1fa.jsx(_0x231267, {
        code: "// 200 OK\n" + A,
        language: "json",
        title: "200 OK"
      }),
      errors: _0x554dd1
    }), _0x8ca1fa.jsx(_0x53f4c5, {}), _0x8ca1fa.jsx(_0x5dc168, {
      id: "guild-komut-guncelle",
      children: _0x57fba5("botApiCommands.guildKomutGuncelle")
    }), _0x8ca1fa.jsx(_0x326abb, {
      children: _0x57fba5("botApiCommands.belirliBirGuildKomutunu")
    }), _0x8ca1fa.jsx(_0x1fedde, {
      method: "PATCH",
      path: "/applications/{appId}/guilds/{guildId}/commands/{commandId}",
      description: _0x57fba5("botApiCommands.endpointDescGuildUpdate"),
      auth: "Bot Token",
      tryIt: {
        params: [{
          name: "appId",
          in: "path",
          placeholder: "Application ID"
        }, {
          name: "guildId",
          in: "path",
          placeholder: "Guild ID"
        }, {
          name: "commandId",
          in: "path",
          placeholder: "Command ID"
        }],
        bodyType: "json",
        bodyTemplate: "{\n  \"description\": \"Güncellenmiş açıklama\"\n}"
      }
    }), _0x8ca1fa.jsx(m, {
      success: _0x8ca1fa.jsx(_0x231267, {
        code: "// 200 OK — guild_id dahil\n" + A,
        language: "json",
        title: "200 OK"
      }),
      errors: _0x4334ee
    }), _0x8ca1fa.jsx(_0x53f4c5, {}), _0x8ca1fa.jsx(_0x5dc168, {
      id: "global-komut-sil",
      children: _0x57fba5("botApiCommands.globalKomutSil")
    }), _0x8ca1fa.jsx(_0x326abb, {
      children: _0x57fba5("botApiCommands.kayitliBirGlobalKomutu")
    }), _0x8ca1fa.jsx(_0x1fedde, {
      method: "DELETE",
      path: "/applications/{appId}/commands/{commandId}",
      description: _0x57fba5("botApiCommands.endpointDescGlobalDelete"),
      auth: "Bot Token",
      tryIt: {
        params: [{
          name: "appId",
          in: "path",
          placeholder: "Application ID"
        }, {
          name: "commandId",
          in: "path",
          placeholder: "Command ID"
        }]
      }
    }), _0x8ca1fa.jsx(m, {
      success: _0x8ca1fa.jsx(_0x231267, {
        code: "// 204 No Content\n// Body yok",
        language: "json",
        title: "204 No Content"
      }),
      errors: _0x298240
    }), _0x8ca1fa.jsx(_0x53f4c5, {}), _0x8ca1fa.jsx(_0x5dc168, {
      id: "guild-komut-sil",
      children: _0x57fba5("botApiCommands.guildKomutSil")
    }), _0x8ca1fa.jsx(_0x326abb, {
      children: _0x57fba5("botApiCommands.belirliBirGuildKomutunu_")
    }), _0x8ca1fa.jsx(_0x1fedde, {
      method: "DELETE",
      path: "/applications/{appId}/guilds/{guildId}/commands/{commandId}",
      description: _0x57fba5("botApiCommands.endpointDescGuildDelete"),
      auth: "Bot Token",
      tryIt: {
        params: [{
          name: "appId",
          in: "path",
          placeholder: "Application ID"
        }, {
          name: "guildId",
          in: "path",
          placeholder: "Guild ID"
        }, {
          name: "commandId",
          in: "path",
          placeholder: "Command ID"
        }]
      }
    }), _0x8ca1fa.jsx(m, {
      success: _0x8ca1fa.jsx(_0x231267, {
        code: "// 204 No Content\n// Body yok",
        language: "json",
        title: "204 No Content"
      }),
      errors: _0x2b00ec
    }), _0x8ca1fa.jsx(_0x53f4c5, {}), _0x8ca1fa.jsx(_0x5dc168, {
      id: "mention-sistemi",
      children: _0x57fba5("botApiCommands.mentionSistemi")
    }), _0x8ca1fa.jsx(_0x326abb, {
      children: _0x57fba5("botApiCommands.mentionDesc")
    }), _0x8ca1fa.jsxs(c, {
      children: [_0x8ca1fa.jsx(_0x119360, {
        children: _0x8ca1fa.jsxs(_0x33e706, {
          children: [_0x8ca1fa.jsx(_0x356ce3, {
            children: _0x57fba5("th.thFormat")
          }), _0x8ca1fa.jsx(_0x356ce3, {
            children: _0x57fba5("botApiCommands.thaciklama")
          }), _0x8ca1fa.jsx(_0x356ce3, {
            children: _0x57fba5("botApiCommands.thornek")
          })]
        })
      }), _0x8ca1fa.jsxs(_0x3ecb4e, {
        children: [_0x8ca1fa.jsxs(_0x33e706, {
          children: [_0x8ca1fa.jsx(_0x4b5f0b, {
            children: _0x8ca1fa.jsx(I, {
              children: "<@ID>"
            })
          }), _0x8ca1fa.jsx(_0x4b5f0b, {
            children: _0x57fba5("botApiCommands.tdkullaniciMention")
          }), _0x8ca1fa.jsx(_0x4b5f0b, {
            children: _0x8ca1fa.jsx(I, {
              children: "<@123>"
            })
          })]
        }), _0x8ca1fa.jsxs(_0x33e706, {
          children: [_0x8ca1fa.jsx(_0x4b5f0b, {
            children: _0x8ca1fa.jsx(I, {
              children: "<@&ID>"
            })
          }), _0x8ca1fa.jsx(_0x4b5f0b, {
            children: _0x57fba5("botApiCommands.tdRolMention")
          }), _0x8ca1fa.jsx(_0x4b5f0b, {
            children: _0x8ca1fa.jsx(I, {
              children: "<@&456>"
            })
          })]
        }), _0x8ca1fa.jsxs(_0x33e706, {
          children: [_0x8ca1fa.jsx(_0x4b5f0b, {
            children: _0x8ca1fa.jsx(I, {
              children: "<#ID>"
            })
          }), _0x8ca1fa.jsx(_0x4b5f0b, {
            children: _0x57fba5("botApiCommands.tdKanalMention")
          }), _0x8ca1fa.jsx(_0x4b5f0b, {
            children: _0x8ca1fa.jsx(I, {
              children: "<#789>"
            })
          })]
        }), _0x8ca1fa.jsxs(_0x33e706, {
          children: [_0x8ca1fa.jsx(_0x4b5f0b, {
            children: _0x8ca1fa.jsx(I, {
              children: "@everyone"
            })
          }), _0x8ca1fa.jsx(_0x4b5f0b, {
            children: _0x57fba5("botApiCommands.tdEveryoneMention")
          }), _0x8ca1fa.jsx(_0x4b5f0b, {
            children: _0x8ca1fa.jsx(I, {
              children: "@everyone"
            })
          })]
        })]
      })]
    }), _0x8ca1fa.jsx(_0x231267, {
      code: "POST /api/v1/guilds/{guild_id}/channels/{channel_id}/messages\n\n{\n  \"content\": \"Merhaba <@123>!\"\n}",
      language: "json",
      title: _0x57fba5("botApiCommands.titlementionOrnegi")
    }), _0x8ca1fa.jsx(_0x326abb, {
      children: _0x57fba5("botApiCommands.mentionExplicitDesc")
    }), _0x8ca1fa.jsx(_0x231267, {
      code: "{\n  \"content\": \"Merhaba <@123>!\",\n  \"mentions\": {\n    \"users\": [{ \"id\": 123, \"username\": \"ilkay\" }],\n    \"roles\": [\"456\"],\n    \"everyone\": false\n  }\n}",
      language: "json",
      title: _0x57fba5("botApiCommands.titleacikMentionVerisi")
    })]
  });
}
export { y as default };