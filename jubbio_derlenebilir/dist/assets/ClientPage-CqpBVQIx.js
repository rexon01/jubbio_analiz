import { b as _0x1589b1, j as _0x3a0862 } from "./index-cQfEKR1W.js";
import { H as _0x34fe0f, P as _0x5031a1, D as _0x5a1a3c, a as _0x50fb89, c as _0x2549a6, d as _0x2bfa03, e as _0x3f7fc4, f as _0x5c8e84, g as _0x176e37, h as _0xfb609a, I as _0x2d6caf, C as _0x3023a1, i as _0x265af5 } from "./DocComponents-BWAUshvB.js";
import { C as _0x3ae23e } from "./CodeBlock-B4seo9QW.js";
import "./clipboard-BQ9qambq.js";
import "./loader-circle-CTtxa1g9.js";
import "./prism-2cMp9j73.js";
function m() {
  const {
    t: _0x57da8f
  } = _0x1589b1("docs");
  return _0x3a0862.jsxs(_0x3a0862.Fragment, {
    children: [_0x3a0862.jsx(_0x34fe0f, {
      children: "Client"
    }), _0x3a0862.jsx(_0x5031a1, {
      children: _0x57da8f("client.jubbioGatewayeBaglanmakEventleri")
    }), _0x3a0862.jsx(_0x3ae23e, {
      language: "javascript",
      code: "import { Client, GatewayIntentBits } from '@jubbio/core';\n\nconst client = new Client({\n  intents: [\n    GatewayIntentBits.Guilds,\n    GatewayIntentBits.GuildMessages,\n    GatewayIntentBits.MessageContent,\n  ]\n});\n\nclient.on('ready', () => {\n  console.log(`${client.user.username} hazır!`);\n});\n\nawait client.login(process.env.BOT_TOKEN);"
    }), _0x3a0862.jsx(_0x5a1a3c, {}), _0x3a0862.jsx(_0x50fb89, {
      id: "client-options",
      children: "Client Options"
    }), _0x3a0862.jsxs(_0x2549a6, {
      children: [_0x3a0862.jsx(_0x2bfa03, {
        children: _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0x5c8e84, {
            children: _0x57da8f("th.thOption")
          }), _0x3a0862.jsx(_0x5c8e84, {
            children: _0x57da8f("client.thTip")
          }), _0x3a0862.jsx(_0x5c8e84, {
            children: _0x57da8f("client.thvarsayilan")
          }), _0x3a0862.jsx(_0x5c8e84, {
            children: _0x57da8f("client.thaciklama")
          })]
        })
      }), _0x3a0862.jsxs(_0x176e37, {
        children: [_0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "intents"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "GatewayIntentBits[]"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: "—"
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdalmakIstediginizGatewayEventleri")
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "shards"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "[number, number]"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "[0, 1]"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdshardIdVeToplam")
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "gatewayUrl"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "string"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "wss://realtime.jubbio.com/ws/bot"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdGatewayWebSocketUrli")
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "apiUrl"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "string"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "https://gateway.jubbio.com/api/v1"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdRestApiBaseUrli")
          })]
        })]
      })]
    }), _0x3a0862.jsx(_0x5a1a3c, {}), _0x3a0862.jsx(_0x50fb89, {
      id: "client-properties",
      children: "Properties"
    }), _0x3a0862.jsxs(_0x2549a6, {
      children: [_0x3a0862.jsx(_0x2bfa03, {
        children: _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0x5c8e84, {
            children: _0x57da8f("th.thProperty")
          }), _0x3a0862.jsx(_0x5c8e84, {
            children: _0x57da8f("client.thTip")
          }), _0x3a0862.jsx(_0x5c8e84, {
            children: _0x57da8f("client.thaciklama_")
          })]
        })
      }), _0x3a0862.jsxs(_0x176e37, {
        children: [_0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "user"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "User | null"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdbotunKullaniciBilgisi")
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "applicationId"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "string | null"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdBotApplicationIdsi")
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "guilds"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "Collection<string, Guild>"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdbotunBulunduguSunucular")
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "channels"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "Collection<string, Channel>"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tderisilebilirKanallar")
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "users"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "Collection<string, User>"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdkullaniciCachei")
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "rest"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "REST"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdRestApiIstemcisi")
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "voice"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "{ adapters: Map }"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdsesBaglantiAdaptorleri")
          })]
        })]
      })]
    }), _0x3a0862.jsx(_0x3023a1, {
      type: "info",
      children: _0x57da8f("client.calloutUserApplicationId", {
        user: "user",
        applicationId: "applicationId",
        ready: "ready"
      })
    }), _0x3a0862.jsx(_0x5a1a3c, {}), _0x3a0862.jsx(_0x50fb89, {
      id: "client-methods",
      children: "Methods"
    }), _0x3a0862.jsx(_0x265af5, {
      id: "login",
      children: "login(token)"
    }), _0x3a0862.jsx(_0x5031a1, {
      children: _0x57da8f("client.loginDesc2", {
        ready: "ready"
      })
    }), _0x3a0862.jsx(_0x3ae23e, {
      language: "javascript",
      code: "await client.login(process.env.BOT_TOKEN);"
    }), _0x3a0862.jsxs(_0x2549a6, {
      children: [_0x3a0862.jsx(_0x2bfa03, {
        children: _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0x5c8e84, {
            children: _0x57da8f("client.thParametre")
          }), _0x3a0862.jsx(_0x5c8e84, {
            children: _0x57da8f("client.thTip")
          }), _0x3a0862.jsx(_0x5c8e84, {
            children: _0x57da8f("client.thaciklama__")
          })]
        })
      }), _0x3a0862.jsx(_0x176e37, {
        children: _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "token"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "string"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdTokenDesc", {
              bot: "Bot"
            })
          })]
        })
      })]
    }), _0x3a0862.jsx(_0x265af5, {
      id: "destroy",
      children: "destroy()"
    }), _0x3a0862.jsx(_0x5031a1, {
      children: _0x57da8f("client.gatewayBaglantisiniKapatirTum")
    }), _0x3a0862.jsx(_0x3ae23e, {
      language: "javascript",
      code: "client.destroy();"
    }), _0x3a0862.jsx(_0x5a1a3c, {}), _0x3a0862.jsx(_0x50fb89, {
      id: "client-events",
      children: "Events"
    }), _0x3a0862.jsxs(_0x2549a6, {
      children: [_0x3a0862.jsx(_0x2bfa03, {
        children: _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0x5c8e84, {
            children: _0x57da8f("th.thEvent")
          }), _0x3a0862.jsx(_0x5c8e84, {
            children: _0x57da8f("client.thParametre")
          }), _0x3a0862.jsx(_0x5c8e84, {
            children: _0x57da8f("client.thaciklama___")
          })]
        })
      }), _0x3a0862.jsxs(_0x176e37, {
        children: [_0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "ready"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "client"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdbotHazirOldugunda")
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "messageCreate"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "message"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdyeniMesajGeldiginde")
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "interactionCreate"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "interaction"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdslashKomutVeyaButon")
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "guildCreate"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "guild"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdbotBirSunucuyaEklendiginde")
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "guildDelete"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "guild"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdbotBirSunucudanCikarildiginda")
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "guildBanAdd"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "data"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdbirKullaniciBanYediginde")
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "guildBanRemove"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "data"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdbirKullaniciUnbanEdildiginde")
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "inviteCreate"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "data"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tddavetOlusturuldugunda")
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "inviteDelete"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "data"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tddavetSilindiginde")
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "presenceUpdate"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "data"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdkullaniciDurumuDegistiginde")
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "voiceServerUpdate"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "data"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdvoiceServerBilgisiGuncellendiginde")
          })]
        })]
      })]
    }), _0x3a0862.jsx(_0x3ae23e, {
      language: "javascript",
      code: "client.on('messageCreate', (message) => {\n  if (message.content === '!ping') {\n    message.reply('Pong!');\n  }\n});\n\nclient.on('interactionCreate', async (interaction) => {\n  if (interaction.commandName === 'merhaba') {\n    await interaction.reply('Selam!');\n  }\n});"
    }), _0x3a0862.jsx(_0x5a1a3c, {}), _0x3a0862.jsx(_0x50fb89, {
      id: "gateway-reconnect",
      children: "Gateway Reconnect"
    }), _0x3a0862.jsx(_0x5031a1, {
      children: _0x57da8f("client.baglantiKoptugundaClientExponential")
    }), _0x3a0862.jsx(_0x265af5, {
      id: "gateway-close-codes",
      children: "Close Codes"
    }), _0x3a0862.jsxs(_0x2549a6, {
      children: [_0x3a0862.jsx(_0x2bfa03, {
        children: _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0x5c8e84, {
            children: _0x57da8f("client.thKod")
          }), _0x3a0862.jsx(_0x5c8e84, {
            children: _0x57da8f("client.thaciklama____")
          }), _0x3a0862.jsx(_0x5c8e84, {
            children: _0x57da8f("client.thyenidenBaglanir")
          })]
        })
      }), _0x3a0862.jsxs(_0x176e37, {
        children: [_0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "4000"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdBilinmeyenHata")
          }), _0x3a0862.jsx(_0xfb609a, {
            children: "✅"
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "4001"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdBilinmeyenOpcode")
          }), _0x3a0862.jsx(_0xfb609a, {
            children: "✅"
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "4002"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdgecersizPayload")
          }), _0x3a0862.jsx(_0xfb609a, {
            children: "✅"
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "4003"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdkimlikDogrulamasiYapilmadi")
          }), _0x3a0862.jsx(_0xfb609a, {
            children: "✅"
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "4004"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdgecersizToken")
          }), _0x3a0862.jsx(_0xfb609a, {
            children: "❌"
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "4005"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdzatenKimlikDogrulanmis")
          }), _0x3a0862.jsx(_0xfb609a, {
            children: "✅"
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "4007"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdgecersizSequence")
          }), _0x3a0862.jsx(_0xfb609a, {
            children: "✅"
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "4008"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdrateLimitAsildi")
          }), _0x3a0862.jsx(_0xfb609a, {
            children: "✅"
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "4009"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdoturumZamanAsimi")
          }), _0x3a0862.jsx(_0xfb609a, {
            children: "✅"
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "4010"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdgecersizShard")
          }), _0x3a0862.jsx(_0xfb609a, {
            children: "❌"
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "4011"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdShardingGerekli")
          }), _0x3a0862.jsx(_0xfb609a, {
            children: "❌"
          })]
        }), _0x3a0862.jsxs(_0x3f7fc4, {
          children: [_0x3a0862.jsx(_0xfb609a, {
            children: _0x3a0862.jsx(_0x2d6caf, {
              children: "4014"
            })
          }), _0x3a0862.jsx(_0xfb609a, {
            children: _0x57da8f("client.tdizinVerilmeyenIntentler")
          }), _0x3a0862.jsx(_0xfb609a, {
            children: "❌"
          })]
        })]
      })]
    }), _0x3a0862.jsx(_0x3023a1, {
      type: "warning",
      title: _0x57da8f("client.calloutkaliciHatalar"),
      children: _0x57da8f("client.calloutKaliciHatalarBody", {
        code4004: "4004",
        code4010: "4010",
        code4011: "4011",
        code4014: "4014",
        login: "login()"
      })
    })]
  });
}
export { m as default };