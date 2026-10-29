import { b as _0x13d30b, j as _0x2d19bc } from "./index-cQfEKR1W.js";
import { H as _0x5d53c3, P as _0x25b43f, a as _0x354859, C as _0x35536f, D as _0x4a5499, c as _0x3d788d, d as _0x1906e1, e as _0x186d07, f as _0x598b11, g as _0x5576d4, h as _0x1315a1, I as _0x4db8b0, i as _0x21716f } from "./DocComponents-BWAUshvB.js";
import { C as _0x22f039 } from "./CodeBlock-B4seo9QW.js";
import "./clipboard-BQ9qambq.js";
import "./loader-circle-CTtxa1g9.js";
import "./prism-2cMp9j73.js";
function p() {
  const {
    t: _0x3eab3f
  } = _0x13d30b("docs");
  return _0x2d19bc.jsxs(_0x2d19bc.Fragment, {
    children: [_0x2d19bc.jsx(_0x5d53c3, {
      children: _0x3eab3f("voice.sesVoiceTitle")
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.sesVoiceIntro", {
        pkg: "@jubbio/voice"
      })
    }), _0x2d19bc.jsx(_0x354859, {
      id: "kurulum",
      children: _0x3eab3f("voice.kurulumTitle")
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.sesModulunuProjenizeEkleyin")
    }), _0x2d19bc.jsx(_0x22f039, {
      language: "bash",
      code: "npm install @jubbio/voice"
    }), _0x2d19bc.jsx(_0x35536f, {
      type: "warning",
      title: _0x3eab3f("voice.gereksinimlerTitle"),
      children: _0x3eab3f("voice.gereksinimlerDesc", {
        livekit: "@livekit/rtc-node",
        voice: "@jubbio/voice"
      })
    }), _0x2d19bc.jsx(_0x4a5499, {}), _0x2d19bc.jsx(_0x354859, {
      id: "temel-kullanim",
      children: _0x3eab3f("voice.temelKullanim")
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.sesModulundenGerekliFonksiyonlari")
    }), _0x2d19bc.jsx(_0x22f039, {
      language: "javascript",
      code: "import { Client, GatewayIntentBits } from '@jubbio/core';\nimport {\n  joinVoiceChannel,\n  getVoiceConnection,\n  createAudioPlayer,\n  createAudioResource,\n  createAudioResourceFromUrl,\n  probeAudioInfo,\n  AudioPlayerStatus,\n  VoiceConnectionStatus,\n  StreamType\n} from '@jubbio/voice';\n\nconst client = new Client({\n  intents: [\n    GatewayIntentBits.Guilds,\n    GatewayIntentBits.GuildVoiceStates\n  ]\n});"
    }), _0x2d19bc.jsx(_0x4a5499, {}), _0x2d19bc.jsx(_0x354859, {
      id: "join-voice",
      children: "joinVoiceChannel()"
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.joinVoiceDesc", {
        conn: "VoiceConnection"
      })
    }), _0x2d19bc.jsxs(_0x3d788d, {
      children: [_0x2d19bc.jsx(_0x1906e1, {
        children: _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thParametre")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thTip")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thZorunlu")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thvarsayilan")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thaciklama")
          })]
        })
      }), _0x2d19bc.jsxs(_0x5576d4, {
        children: [_0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "channelId"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "string"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdEvet")
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: "—"
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdsesKanaliId")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "guildId"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "string"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdEvet")
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: "—"
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdSunucuId")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "adapterCreator"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "GatewayAdapterCreator"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdEvet")
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: "—"
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdgatewayAdapterOlusturucu")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "selfMute"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "boolean"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdhayir")
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "false"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdsessizKatil")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "selfDeaf"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "boolean"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdhayir_")
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "false"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdsagirKatil")
          })]
        })]
      })]
    }), _0x2d19bc.jsx(_0x22f039, {
      language: "javascript",
      code: "const connection = joinVoiceChannel({\n  channelId: voiceChannelId,\n  guildId: guildId,\n  adapterCreator: client.voice.adapters.get(guildId),\n  selfMute: false,\n  selfDeaf: false\n});"
    }), _0x2d19bc.jsx(_0x35536f, {
      type: "warning",
      children: _0x3eab3f("voice.calloutBodyayniGuildchannelKombinasyonuIcin")
    }), _0x2d19bc.jsx(_0x21716f, {
      id: "get-voice",
      children: "getVoiceConnection()"
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.getVoiceDesc", {
        undef: "undefined"
      })
    }), _0x2d19bc.jsx(_0x22f039, {
      language: "javascript",
      code: "let connection = getVoiceConnection(guildId);\nif (!connection) {\n  connection = joinVoiceChannel({ ... });\n}"
    }), _0x2d19bc.jsx(_0x4a5499, {}), _0x2d19bc.jsx(_0x354859, {
      id: "voice-connection",
      children: "VoiceConnection"
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.sesKanaliBaglantisiniTemsil")
    }), _0x2d19bc.jsx(_0x21716f, {
      id: "connection-properties",
      children: "Properties"
    }), _0x2d19bc.jsxs(_0x3d788d, {
      children: [_0x2d19bc.jsx(_0x1906e1, {
        children: _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("th.thProperty")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thTip")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thaciklama_")
          })]
        })
      }), _0x2d19bc.jsxs(_0x5576d4, {
        children: [_0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "channelId"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "string"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdbagliOlunanKanalId")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "guildId"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "string"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdSunucuIdReadonly")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "state"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "{ status: VoiceConnectionStatus }"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdmevcutBaglantiDurumu")
          })]
        })]
      })]
    }), _0x2d19bc.jsx(_0x21716f, {
      id: "connection-methods",
      children: "Methods"
    }), _0x2d19bc.jsxs(_0x3d788d, {
      children: [_0x2d19bc.jsx(_0x1906e1, {
        children: _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("th.thMethod")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thdonus")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thaciklama__")
          })]
        })
      }), _0x2d19bc.jsxs(_0x5576d4, {
        children: [_0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "subscribe(player)"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "void"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdaudioPlayeriBaglantiyaAbone")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "unsubscribe()"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "void"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdmevcutPlayerAboneliginiKaldirir")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "disconnect()"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "boolean"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdkanaldanAyrilirBaglantiObjesi")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "rejoin()"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "boolean"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdbaglantiKesildiktenSonraAyni")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "destroy()"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "void"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdtamTemizlikGeriDonusu")
          })]
        })]
      })]
    }), _0x2d19bc.jsx(_0x22f039, {
      language: "javascript",
      code: "// Player abone et\nconnection.subscribe(player);\n\n// Player aboneliğini kaldır\nconnection.unsubscribe();\n\n// Kanaldan ayrıl (rejoin ile geri dönülebilir)\nconnection.disconnect();\n\n// Tekrar katıl\nconnection.rejoin();\n\n// Tam temizlik (player aboneliği kaldırılır, bağlantı yok edilir)\nconnection.destroy();"
    }), _0x2d19bc.jsx(_0x35536f, {
      type: "info",
      children: _0x3eab3f("voice.calloutBodybirBaglantiyaAyniAnda")
    }), _0x2d19bc.jsx(_0x35536f, {
      type: "warning",
      title: _0x3eab3f("voice.disconnectVsDestroyTitle"),
      children: _0x3eab3f("voice.disconnectVsDestroyDesc", {
        disconnect: "disconnect()",
        rejoin: "rejoin()",
        destroy: "destroy()"
      })
    }), _0x2d19bc.jsx(_0x4a5499, {}), _0x2d19bc.jsx(_0x354859, {
      id: "connection-status",
      children: "VoiceConnectionStatus"
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.sesBaglantisininOlasiDurumlari")
    }), _0x2d19bc.jsxs(_0x3d788d, {
      children: [_0x2d19bc.jsx(_0x1906e1, {
        children: _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thDurum")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thaciklama___")
          })]
        })
      }), _0x2d19bc.jsxs(_0x5576d4, {
        children: [_0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "Connecting"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdbaslangicDurumuGatewayeVoice")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "Signalling"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdvoiceServerUpdateAlindi")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "Ready"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdbaglantiHazirSesGonderilebilir")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "Disconnected"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdDisconnected", {
              rejoin: "rejoin()"
            })
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "Destroyed"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdDestroyed", {
              destroy: "destroy()"
            })
          })]
        })]
      })]
    }), _0x2d19bc.jsx(_0x21716f, {
      id: "connection-flow",
      children: _0x3eab3f("voice.baglantiAkisi")
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.baglantiKurulurkenDurumGecisleri")
    }), _0x2d19bc.jsx(_0x22f039, {
      language: "text",
      code: "Connecting → Signalling → Ready\n     ↓\nDisconnected ←→ (rejoin) → Connecting → ...\n     ↓\nDestroyed (geri dönüşü yok)"
    }), _0x2d19bc.jsx(_0x21716f, {
      id: "connection-events",
      children: _0x3eab3f("voice.baglantiOlaylari")
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.baglantiDurumDegisiklikleriniVe")
    }), _0x2d19bc.jsx(_0x22f039, {
      language: "javascript",
      code: "connection.on('stateChange', (oldState, newState) => {\n  // oldState, newState: { status: VoiceConnectionStatus }\n  console.log(`${oldState.status} -> ${newState.status}`);\n\n  if (newState.status === VoiceConnectionStatus.Disconnected) {\n    // Bağlantı kesildi\n  }\n});\n\nconnection.on('error', (error) => {\n  console.error('Bağlantı hatası:', error.message);\n});"
    }), _0x2d19bc.jsx(_0x4a5499, {}), _0x2d19bc.jsx(_0x354859, {
      id: "audio-player",
      children: "AudioPlayer"
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.audioPlayerIntro", {
        fn: "createAudioPlayer()"
      })
    }), _0x2d19bc.jsx(_0x21716f, {
      id: "create-player",
      children: "createAudioPlayer()"
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.yeniBirAudioPlayer")
    }), _0x2d19bc.jsxs(_0x3d788d, {
      children: [_0x2d19bc.jsx(_0x1906e1, {
        children: _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thOpsiyon")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thTip")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thvarsayilan_")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thaciklama____")
          })]
        })
      }), _0x2d19bc.jsxs(_0x5576d4, {
        children: [_0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "behaviors.noSubscriber"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "'pause' | 'play' | 'stop'"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "'pause'"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdaboneOlanBaglantiKalmadiginda")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "behaviors.maxMissedFrames"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "number"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "5"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdbaglantiOluSayilmadanOnce")
          })]
        })]
      })]
    }), _0x2d19bc.jsx(_0x22f039, {
      language: "javascript",
      code: "const player = createAudioPlayer({\n  behaviors: {\n    noSubscriber: 'pause',\n    maxMissedFrames: 5\n  }\n});\n\n// Bağlantıya abone et\nconnection.subscribe(player);"
    }), _0x2d19bc.jsx(_0x21716f, {
      id: "player-controls",
      children: _0x3eab3f("voice.playerKontrolleri")
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.sesCalmaDuraklatmaVe")
    }), _0x2d19bc.jsxs(_0x3d788d, {
      children: [_0x2d19bc.jsx(_0x1906e1, {
        children: _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("th.thMethod")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thdonus_")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thaciklama_____")
          })]
        })
      }), _0x2d19bc.jsxs(_0x5576d4, {
        children: [_0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "play(resource)"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "void"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdsesKaynaginiCalarMevcut")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "pause()"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "boolean"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdPauseDesc", {
              false: "false"
            })
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "unpause()"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "boolean"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdUnpauseDesc", {
              false: "false"
            })
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "stop(force?)"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "boolean"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdStopDesc", {
              force: "force=true"
            })
          })]
        })]
      })]
    }), _0x2d19bc.jsx(_0x22f039, {
      language: "javascript",
      code: "player.play(resource);\n\nconst paused = player.pause();     // true = başarılı\nconst unpaused = player.unpause(); // true = başarılı\nconst stopped = player.stop();     // true = durduruldu\nconst force = player.stop(true);   // force: Idle'dayken bile temizlik"
    }), _0x2d19bc.jsx(_0x21716f, {
      id: "player-state",
      children: "Player State"
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.oynatmaDurumunuVeMevcut")
    }), _0x2d19bc.jsxs(_0x3d788d, {
      children: [_0x2d19bc.jsx(_0x1906e1, {
        children: _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("th.thProperty")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thTip")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thaciklama______")
          })]
        })
      }), _0x2d19bc.jsxs(_0x5576d4, {
        children: [_0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "state.status"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "AudioPlayerStatus"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdMevcutDurum")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "state.resource"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "AudioResource | undefined"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdmevcutSesKaynagiPlayingpausedbufferingde")
          })]
        })]
      })]
    }), _0x2d19bc.jsx(_0x22f039, {
      language: "javascript",
      code: "if (player.state.status === AudioPlayerStatus.Playing) {\n  const current = player.state.resource;\n  console.log(current.metadata); // Metadata'ya erişim\n}"
    }), _0x2d19bc.jsx(_0x4a5499, {}), _0x2d19bc.jsx(_0x354859, {
      id: "player-status",
      children: "AudioPlayerStatus"
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.audioPlayerinOlasiDurumlari")
    }), _0x2d19bc.jsxs(_0x3d788d, {
      children: [_0x2d19bc.jsx(_0x1906e1, {
        children: _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thDurum")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thaciklama_______")
          })]
        })
      }), _0x2d19bc.jsxs(_0x5576d4, {
        children: [_0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "Idle"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdbostaHicbirSeyCalmiyor")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "Buffering"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdsesKaynagiHazirlaniyorFfmpeg")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "Playing"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdaktifOlarakSesCaliniyor")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "Paused"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdPausedDesc", {
              pause: "pause()"
            })
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "AutoPaused"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdaboneOlanBaglantiKalmadigi")
          })]
        })]
      })]
    }), _0x2d19bc.jsx(_0x21716f, {
      id: "player-events",
      children: _0x3eab3f("voice.playerOlaylari")
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.durumDegisiklikleriOynatmaBitisi")
    }), _0x2d19bc.jsx(_0x22f039, {
      language: "javascript",
      code: "// Durum değişikliği\nplayer.on('stateChange', (oldState, newState) => {\n  console.log(`${oldState.status} -> ${newState.status}`);\n});\n\n// Oynatma bitti\nplayer.on('idle', () => {\n  playNextSong();\n});\n\n// Hata\nplayer.on('error', (error) => {\n  console.error('Hata:', error.message);\n  console.error('Kaynak:', error.resource); // Hataya neden olan AudioResource\n});"
    }), _0x2d19bc.jsx(_0x35536f, {
      type: "info",
      children: _0x3eab3f("voice.errorCallout", {
        errorResource: "error.resource"
      })
    }), _0x2d19bc.jsx(_0x4a5499, {}), _0x2d19bc.jsx(_0x354859, {
      id: "audio-resource",
      children: "AudioResource"
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.audioResourceIntro", {
        create: "createAudioResource()",
        createUrl: "createAudioResourceFromUrl()"
      })
    }), _0x2d19bc.jsx(_0x21716f, {
      id: "resource-properties",
      children: "Properties"
    }), _0x2d19bc.jsxs(_0x3d788d, {
      children: [_0x2d19bc.jsx(_0x1906e1, {
        children: _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("th.thProperty")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thTip")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thaciklama________")
          })]
        })
      }), _0x2d19bc.jsxs(_0x5576d4, {
        children: [_0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "metadata"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "T"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdkaynagaEklenenMetadataGeneric")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "started"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "boolean"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdoynatmaBasladiMiVarsayilan")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "ended"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "boolean"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdoynatmaBittiMiVarsayilan")
          })]
        })]
      })]
    }), _0x2d19bc.jsx(_0x21716f, {
      id: "resource-methods",
      children: "Methods"
    }), _0x2d19bc.jsxs(_0x3d788d, {
      children: [_0x2d19bc.jsx(_0x1906e1, {
        children: _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("th.thMethod")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thdonus__")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thaciklama_________")
          })]
        })
      }), _0x2d19bc.jsxs(_0x5576d4, {
        children: [_0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "setVolume(volume)"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "void"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdsesSeviyesi01Aralik")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "getVolume()"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "number"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdMevcutSesSeviyesi")
          })]
        })]
      })]
    }), _0x2d19bc.jsx(_0x22f039, {
      language: "javascript",
      code: "// Ses seviyesi ayarla\nresource.setVolume(0.5);\n\n// Mevcut seviyeyi al\nconst vol = resource.getVolume(); // 0-1 arası\n\n// Metadata'ya erişim\nconsole.log(resource.metadata.title);\n\n// Durum kontrolü\nconsole.log(resource.started); // true/false\nconsole.log(resource.ended);   // true/false"
    }), _0x2d19bc.jsx(_0x4a5499, {}), _0x2d19bc.jsx(_0x354859, {
      id: "create-resource",
      children: "createAudioResource()"
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.dosyaYolundanVeyaUrlden")
    }), _0x2d19bc.jsxs(_0x3d788d, {
      children: [_0x2d19bc.jsx(_0x1906e1, {
        children: _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thOpsiyon")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thTip")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thvarsayilan__")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thaciklama__________")
          })]
        })
      }), _0x2d19bc.jsxs(_0x5576d4, {
        children: [_0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "metadata"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "T"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "undefined"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdkaynagaEklenecekMetadata")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "inputType"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "StreamType"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "StreamType.Arbitrary"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdSesStreamTipi")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "inlineVolume"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "boolean"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "undefined"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdVolumeTransformer")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "silencePaddingFrames"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "number"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "undefined"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdsonunaEklenecekSessizlikFrame")
          })]
        })]
      })]
    }), _0x2d19bc.jsx(_0x22f039, {
      language: "javascript",
      code: "const resource = createAudioResource('/path/to/audio.mp3', {\n  metadata: { title: 'Şarkım' },\n  inputType: StreamType.Arbitrary,\n  inlineVolume: true,\n  silencePaddingFrames: 5\n});\n\nplayer.play(resource);"
    }), _0x2d19bc.jsx(_0x35536f, {
      type: "warning",
      children: _0x3eab3f("voice.calloutBodysuAnSadeceString")
    }), _0x2d19bc.jsx(_0x4a5499, {}), _0x2d19bc.jsx(_0x354859, {
      id: "create-resource-url",
      children: "createAudioResourceFromUrl()"
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.urldenSesKaynagiOlusturur")
    }), _0x2d19bc.jsxs(_0x3d788d, {
      children: [_0x2d19bc.jsx(_0x1906e1, {
        children: _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thOpsiyon")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thTip")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thvarsayilan___")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thaciklama___________")
          })]
        })
      }), _0x2d19bc.jsxs(_0x5576d4, {
        children: [_0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "metadata"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "T"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "undefined"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdkaynagaEklenecekMetadata_")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "inputType"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "StreamType"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "StreamType.Arbitrary"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdSesStreamTipi")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "useYtDlp"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "boolean"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "undefined"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdytdlpIleUrlCikarma")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "ytDlpPath"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "string"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "undefined"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdYtDlpBinaryYolu")
          })]
        })]
      })]
    }), _0x2d19bc.jsx(_0x22f039, {
      language: "javascript",
      code: "const resource = createAudioResourceFromUrl('https://youtube.com/watch?v=...', {\n  metadata: { title: 'Video' },\n  useYtDlp: true,\n  ytDlpPath: '/usr/local/bin/yt-dlp'\n});\n\nplayer.play(resource);"
    }), _0x2d19bc.jsx(_0x4a5499, {}), _0x2d19bc.jsx(_0x354859, {
      id: "probe-audio",
      children: "probeAudioInfo()"
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.urlVeyaAramaSorgusundan")
    }), _0x2d19bc.jsxs(_0x3d788d, {
      children: [_0x2d19bc.jsx(_0x1906e1, {
        children: _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thParametre")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thTip")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thZorunlu")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thaciklama____________")
          })]
        })
      }), _0x2d19bc.jsxs(_0x5576d4, {
        children: [_0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "input"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "string"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdEvet")
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdurlVeyaAramaSorgusu")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "ytDlpPath"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "string"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdhayir__")
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdYtDlpBinaryYoluVarsayilan", {
              win: "'yt-dlp'",
              unix: "'~/.local/bin/yt-dlp'"
            })
          })]
        })]
      })]
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.donus")
    }), _0x2d19bc.jsxs(_0x3d788d, {
      children: [_0x2d19bc.jsx(_0x1906e1, {
        children: _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("th.thProperty")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thTip")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thaciklama_____________")
          })]
        })
      }), _0x2d19bc.jsxs(_0x5576d4, {
        children: [_0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "title"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "string"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdvideosesBasligiBulunamazsaUnknown")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "duration"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "number"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdsureSaniyeBulunamazsa0")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "thumbnail"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "string | undefined"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdkucukResimUrl")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "url"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "string"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdorijinaloynatilabilirUrl")
          })]
        })]
      })]
    }), _0x2d19bc.jsx(_0x22f039, {
      language: "javascript",
      code: "// URL'den\nconst info = await probeAudioInfo('https://youtube.com/watch?v=...');\n\n// Arama sorgusundan (YouTube'da arar)\nconst info = await probeAudioInfo('imagine dragons believer');\n\n// Özel yt-dlp yolu ile\nconst info = await probeAudioInfo('şarkı adı', '/custom/path/yt-dlp');\n\nconsole.log(info.title);     // Video başlığı\nconsole.log(info.duration);  // Süre (saniye)\nconsole.log(info.thumbnail); // Küçük resim URL\nconsole.log(info.url);       // Oynatılabilir URL\n\n// Çözümlenen URL'i kullan\nconst resource = createAudioResourceFromUrl(info.url);"
    }), _0x2d19bc.jsx(_0x35536f, {
      type: "warning",
      children: _0x3eab3f("voice.calloutBody30SaniyeTimeoutVar")
    }), _0x2d19bc.jsx(_0x4a5499, {}), _0x2d19bc.jsx(_0x354859, {
      id: "stream-type",
      children: "StreamType"
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.streamTypeIntro")
    }), _0x2d19bc.jsxs(_0x3d788d, {
      children: [_0x2d19bc.jsx(_0x1906e1, {
        children: _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thdeger")
          }), _0x2d19bc.jsx(_0x598b11, {
            children: _0x3eab3f("voice.thaciklama______________")
          })]
        })
      }), _0x2d19bc.jsxs(_0x5576d4, {
        children: [_0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "StreamType.Arbitrary"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdGenelSesStreami")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "StreamType.Raw"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdHamPCMSes")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "StreamType.Opus"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: _0x3eab3f("voice.tdopusKodlanmisSes")
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "StreamType.OggOpus"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: "OGG/Opus container"
          })]
        }), _0x2d19bc.jsxs(_0x186d07, {
          children: [_0x2d19bc.jsx(_0x1315a1, {
            children: _0x2d19bc.jsx(_0x4db8b0, {
              children: "StreamType.WebmOpus"
            })
          }), _0x2d19bc.jsx(_0x1315a1, {
            children: "WebM/Opus container"
          })]
        })]
      })]
    }), _0x2d19bc.jsx(_0x22f039, {
      language: "javascript",
      code: "import { StreamType } from '@jubbio/voice';\n\nconst resource = createAudioResource('/path/to/audio.opus', {\n  inputType: StreamType.Opus\n});"
    }), _0x2d19bc.jsx(_0x4a5499, {}), _0x2d19bc.jsx(_0x354859, {
      id: "music-bot-example",
      children: _0x3eab3f("voice.muzikBotuOrnegi")
    }), _0x2d19bc.jsx(_0x25b43f, {
      children: _0x3eab3f("voice.temelBirMuzikBotu")
    }), _0x2d19bc.jsx(_0x22f039, {
      language: "javascript",
      showLineNumbers: true,
      code: "import { Client, GatewayIntentBits, EmbedBuilder, Colors } from '@jubbio/core';\nimport {\n  joinVoiceChannel, getVoiceConnection,\n  createAudioPlayer, createAudioResourceFromUrl,\n  probeAudioInfo, AudioPlayerStatus\n} from '@jubbio/voice';\n\nconst client = new Client({\n  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]\n});\n\nconst players = new Map();\nconst queues = new Map();\n\nfunction getPlayer(guildId) {\n  let player = players.get(guildId);\n  if (!player) {\n    player = createAudioPlayer();\n    players.set(guildId, player);\n\n    // Oynatma bittiğinde sıradaki şarkıyı çal\n    player.on('idle', () => playNext(guildId));\n\n    // Hata durumunda logla ve devam et\n    player.on('error', (error) => {\n      console.error('Oynatma hatası:', error.message);\n      playNext(guildId);\n    });\n  }\n  return player;\n}\n\nasync function playNext(guildId) {\n  const queue = queues.get(guildId) || [];\n  if (queue.length === 0) return;\n\n  const song = queue.shift();\n  queues.set(guildId, queue);\n\n  const resource = createAudioResourceFromUrl(song.url, {\n    metadata: { title: song.title }\n  });\n  getPlayer(guildId).play(resource);\n}\n\nclient.on('interactionCreate', async (interaction) => {\n  if (!interaction.isCommand()) return;\n  const { commandName, guildId } = interaction;\n\n  if (commandName === 'play') {\n    const query = interaction.options.getString('query', true);\n    const voiceChannel = interaction.member?.voice?.channelId;\n\n    if (!voiceChannel) {\n      return interaction.reply({\n        content: '❌ Önce bir ses kanalına katıl!',\n        ephemeral: true\n      });\n    }\n\n    await interaction.deferReply();\n\n    try {\n      const info = await probeAudioInfo(query);\n\n      let connection = getVoiceConnection(guildId);\n      if (!connection) {\n        connection = joinVoiceChannel({\n          channelId: voiceChannel,\n          guildId,\n          adapterCreator: client.voice.adapters.get(guildId)\n        });\n        connection.subscribe(getPlayer(guildId));\n      }\n\n      const queue = queues.get(guildId) || [];\n      queue.push({\n        url: info.url,\n        title: info.title,\n        duration: info.duration\n      });\n      queues.set(guildId, queue);\n\n      // Boştaysa hemen çal\n      if (getPlayer(guildId).state.status === AudioPlayerStatus.Idle) {\n        playNext(guildId);\n      }\n\n      const embed = new EmbedBuilder()\n        .setTitle('🎵 Sıraya Eklendi')\n        .setDescription(`**${info.title}**`)\n        .setColor(Colors.Green)\n        .setThumbnail(info.thumbnail)\n        .setTimestamp();\n\n      await interaction.editReply({ embeds: [embed] });\n    } catch (error) {\n      await interaction.editReply(`❌ Hata: ${error.message}`);\n    }\n  }\n\n  if (commandName === 'skip') {\n    getPlayer(guildId).stop();\n    await interaction.reply('⏭️ Atlandı!');\n  }\n\n  if (commandName === 'stop') {\n    getPlayer(guildId).stop();\n    queues.set(guildId, []);\n    getVoiceConnection(guildId)?.destroy();\n    await interaction.reply('⏹️ Durduruldu!');\n  }\n});\n\nclient.login(process.env.BOT_TOKEN);"
    })]
  });
}
export { p as default };