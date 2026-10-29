import { b as _0x38dc16, j as _0x39f8e0 } from "./index-cQfEKR1W.js";
import { H as _0x1515fc, P as _0x199f6e, D as _0x5d977e, a as _0x45ceeb, c as _0x285d4c, d as _0x506464, e as _0x37bf37, f as _0x48dd09, g as _0x140684, h as _0x37697c, I as _0x3e0445, i as _0x1fc567, C as _0x368ef5, l as _0x4623b9 } from "./DocComponents-BWAUshvB.js";
import { C as _0x2a04a9 } from "./CodeBlock-B4seo9QW.js";
import "./clipboard-BQ9qambq.js";
import "./loader-circle-CTtxa1g9.js";
import "./prism-2cMp9j73.js";
function p() {
  const {
    t: _0x3e746c
  } = _0x38dc16("docs");
  return _0x39f8e0.jsxs(_0x39f8e0.Fragment, {
    children: [_0x39f8e0.jsx(_0x1515fc, {
      children: _0x3e746c("oauth2Flow.title")
    }), _0x39f8e0.jsx(_0x199f6e, {
      children: _0x3e746c("oauth2Flow.intro")
    }), _0x39f8e0.jsx(_0x2a04a9, {
      language: "bash",
      code: "npm install @jubbio/auth"
    }), _0x39f8e0.jsx(_0x5d977e, {}), _0x39f8e0.jsx(_0x45ceeb, {
      id: "hizli-baslangic",
      children: _0x3e746c("oauth2Flow.quickStart")
    }), _0x39f8e0.jsx(_0x2a04a9, {
      language: "typescript",
      code: "import { JubbioAuth } from '@jubbio/auth';\n\nconst auth = new JubbioAuth({\n  clientId: 'YOUR_CLIENT_ID',\n  redirectUri: 'https://yourapp.com/callback',\n  scopes: ['identify', 'guilds'],\n});\n\n// Giriş başlat\nawait auth.login();"
    }), _0x39f8e0.jsx(_0x5d977e, {}), _0x39f8e0.jsx(_0x45ceeb, {
      id: "yapilandirma",
      children: _0x3e746c("oauth2Flow.configuration")
    }), _0x39f8e0.jsx(_0x199f6e, {
      children: _0x3e746c("oauth2Flow.configDesc")
    }), _0x39f8e0.jsxs(_0x285d4c, {
      children: [_0x39f8e0.jsx(_0x506464, {
        children: _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thField")
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thType")
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thRequired")
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thDefault")
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thDescription")
          })]
        })
      }), _0x39f8e0.jsxs(_0x140684, {
        children: [_0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "clientId"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "string"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.yes")
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "—"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.cfgClientId")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "redirectUri"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "string"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.yes")
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "—"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.cfgRedirectUri")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "scopes"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "string[]"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.no")
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "['identify']"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.cfgScopes")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "baseUrl"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "string"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.no")
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "https://gateway.jubbio.com"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.cfgBaseUrl")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "authorizeUrl"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "string"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.no")
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "https://jubbio.com"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.cfgAuthorizeUrl")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "popup"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "boolean"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.no")
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "false"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.cfgPopup")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "popupOptions"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "object"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.no")
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "{ width: 500, height: 700 }"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.cfgPopupOptions")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "autoStore"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "boolean"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.no")
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "true"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.cfgAutoStore")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "storagePrefix"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "string"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.no")
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "jubbio_"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.cfgStoragePrefix")
          })]
        })]
      })]
    }), _0x39f8e0.jsx(_0x5d977e, {}), _0x39f8e0.jsx(_0x45ceeb, {
      id: "oauth2-akisi",
      children: _0x3e746c("oauth2Flow.flowTitle")
    }), _0x39f8e0.jsx(_0x1fc567, {
      id: "giris-baslat",
      children: _0x3e746c("oauth2Flow.step1Login")
    }), _0x39f8e0.jsx(_0x199f6e, {
      children: _0x3e746c("oauth2Flow.step1Desc")
    }), _0x39f8e0.jsx(_0x2a04a9, {
      language: "typescript",
      code: "await auth.login();"
    }), _0x39f8e0.jsx(_0x1fc567, {
      id: "callback",
      children: _0x3e746c("oauth2Flow.step2Callback")
    }), _0x39f8e0.jsx(_0x199f6e, {
      children: _0x3e746c("oauth2Flow.step2Desc")
    }), _0x39f8e0.jsx(_0x2a04a9, {
      language: "typescript",
      code: "const result = await auth.handleCallback();\nconsole.log(result.user);   // { id, username, display_name, avatar_url, ... }\nconsole.log(result.tokens); // { access_token, refresh_token, expires_in, ... }"
    }), _0x39f8e0.jsx(_0x368ef5, {
      type: "info",
      title: "handleCallback()",
      children: _0x3e746c("oauth2Flow.handleCallbackInfo")
    }), _0x39f8e0.jsx(_0x1fc567, {
      id: "popup-modu",
      children: _0x3e746c("oauth2Flow.step3Popup")
    }), _0x39f8e0.jsx(_0x2a04a9, {
      language: "typescript",
      code: "const auth = new JubbioAuth({\n  clientId: 'YOUR_CLIENT_ID',\n  redirectUri: 'https://yourapp.com/callback',\n  popup: true,\n  popupOptions: { width: 500, height: 700 },\n});\n\nawait auth.login(); // Popup açılır, sayfa yönlenmez"
    }), _0x39f8e0.jsx(_0x5d977e, {}), _0x39f8e0.jsx(_0x45ceeb, {
      id: "metodlar",
      children: _0x3e746c("oauth2Flow.methods")
    }), _0x39f8e0.jsxs(_0x285d4c, {
      children: [_0x39f8e0.jsx(_0x506464, {
        children: _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("th.thMethod")
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thReturn")
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thDescription")
          })]
        })
      }), _0x39f8e0.jsxs(_0x140684, {
        children: [_0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "login()"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "Promise<void>"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.mLogin")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "handleCallback()"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "Promise<CallbackResult>"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.mHandleCallback")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "refreshToken(clientSecret?)"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "Promise<TokenResponse>"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.mRefreshToken")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "getUser()"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "Promise<JubbioUser>"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.mGetUser")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "getGuilds()"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "Promise<JubbioGuild[]>"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.mGetGuilds")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "getConnections()"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "Promise<any[]>"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.mGetConnections")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "getRelationships()"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "Promise<any[]>"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.mGetRelationships")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "isLoggedIn()"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "boolean"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.mIsLoggedIn")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "getAccessToken()"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "string | null"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.mGetAccessToken")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "logout()"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "void"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.mLogout")
          })]
        })]
      })]
    }), _0x39f8e0.jsx(_0x5d977e, {}), _0x39f8e0.jsx(_0x45ceeb, {
      id: "tipler",
      children: _0x3e746c("oauth2Flow.types")
    }), _0x39f8e0.jsx(_0x1fc567, {
      id: "jubbio-user",
      children: "JubbioUser"
    }), _0x39f8e0.jsx(_0x2a04a9, {
      language: "typescript",
      code: "interface JubbioUser {\n  id: string;\n  username: string;\n  display_name: string | null;\n  avatar_url: string | null;\n  email?: string;          // 'email' scope gerektirir\n  created_at: string;\n}"
    }), _0x39f8e0.jsx(_0x1fc567, {
      id: "jubbio-guild",
      children: "JubbioGuild"
    }), _0x39f8e0.jsx(_0x2a04a9, {
      language: "typescript",
      code: "interface JubbioGuild {\n  id: string;\n  name: string;\n  icon_url: string | null;\n  banner_url: string | null;\n  owner_id: string;\n  member_count: number;\n  is_owner: boolean;\n  permissions: string;     // Bigint string\n  is_verified: boolean;\n}"
    }), _0x39f8e0.jsx(_0x1fc567, {
      id: "token-response",
      children: "TokenResponse"
    }), _0x39f8e0.jsx(_0x2a04a9, {
      language: "typescript",
      code: "interface TokenResponse {\n  access_token: string;\n  token_type: string;\n  expires_in: number;      // Saniye cinsinden\n  refresh_token: string;\n  scope: string;\n}"
    }), _0x39f8e0.jsx(_0x5d977e, {}), _0x39f8e0.jsx(_0x45ceeb, {
      id: "hata-yonetimi",
      children: _0x3e746c("oauth2Flow.errorHandling")
    }), _0x39f8e0.jsx(_0x2a04a9, {
      language: "typescript",
      code: "import { JubbioAuthError } from '@jubbio/auth';\n\ntry {\n  await auth.handleCallback();\n} catch (err) {\n  if (err instanceof JubbioAuthError) {\n    console.error(err.code, err.message);\n  }\n}"
    }), _0x39f8e0.jsxs(_0x285d4c, {
      children: [_0x39f8e0.jsx(_0x506464, {
        children: _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thErrorCode")
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thDescription")
          })]
        })
      }), _0x39f8e0.jsxs(_0x140684, {
        children: [_0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "state_mismatch"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.errStateMismatch")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "missing_code"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.errMissingCode")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "missing_verifier"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.errMissingVerifier")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "token_exchange_failed"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.errTokenExchange")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "refresh_failed"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.errRefreshFailed")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "not_authenticated"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.errNotAuth")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "api_error"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.errApiError")
          })]
        })]
      })]
    }), _0x39f8e0.jsx(_0x5d977e, {}), _0x39f8e0.jsx(_0x45ceeb, {
      id: "token-saklama",
      children: _0x3e746c("oauth2Flow.tokenStorage")
    }), _0x39f8e0.jsx(_0x199f6e, {
      children: _0x3e746c("oauth2Flow.tokenStorageDesc")
    }), _0x39f8e0.jsxs(_0x285d4c, {
      children: [_0x39f8e0.jsx(_0x506464, {
        children: _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x48dd09, {
            children: "Key"
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thDescription")
          })]
        })
      }), _0x39f8e0.jsxs(_0x140684, {
        children: [_0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "jubbio_access_token"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "Access token"
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "jubbio_refresh_token"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "Refresh token"
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "jubbio_expires_at"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.storageExpiresAt")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "jubbio_scope"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.storageScope")
          })]
        })]
      })]
    }), _0x39f8e0.jsx(_0x368ef5, {
      type: "info",
      children: _0x3e746c("oauth2Flow.pkceStorageNote")
    }), _0x39f8e0.jsx(_0x5d977e, {}), _0x39f8e0.jsx(_0x45ceeb, {
      id: "vanilla-js",
      children: _0x3e746c("oauth2Flow.vanillaJs")
    }), _0x39f8e0.jsx(_0x2a04a9, {
      language: "html",
      code: "<div id=\"jubbio-login\"></div>\n\n<script type=\"module\">\nimport { JubbioAuth, renderLoginButton } from '@jubbio/auth';\n\nconst auth = new JubbioAuth({\n  clientId: 'YOUR_CLIENT_ID',\n  redirectUri: window.location.origin + '/callback',\n});\n\nrenderLoginButton('#jubbio-login', auth, {\n  label: 'Jubbio ile Giriş Yap',\n  size: 'medium',\n  theme: 'brand',\n});\n</script>"
    }), _0x39f8e0.jsx(_0x1fc567, {
      id: "render-login-button",
      children: "renderLoginButton()"
    }), _0x39f8e0.jsx(_0x4623b9, {
      params: [{
        name: "container",
        type: "HTMLElement | string",
        required: true,
        description: _0x3e746c("oauth2Flow.rlbContainer")
      }, {
        name: "auth",
        type: "JubbioAuth",
        required: true,
        description: _0x3e746c("oauth2Flow.rlbAuth")
      }, {
        name: "options",
        type: "LoginButtonOptions",
        required: false,
        description: _0x3e746c("oauth2Flow.rlbOptions")
      }]
    }), _0x39f8e0.jsx(_0x4623b9, {
      title: "LoginButtonOptions",
      params: [{
        name: "label",
        type: "string",
        required: false,
        description: _0x3e746c("oauth2Flow.btnLabel")
      }, {
        name: "size",
        type: "'small' | 'medium' | 'large'",
        required: false,
        description: _0x3e746c("oauth2Flow.btnSize")
      }, {
        name: "theme",
        type: "'brand' | 'dark' | 'light'",
        required: false,
        description: _0x3e746c("oauth2Flow.btnTheme")
      }, {
        name: "showLogo",
        type: "boolean",
        required: false,
        description: _0x3e746c("oauth2Flow.btnShowLogo")
      }, {
        name: "fullWidth",
        type: "boolean",
        required: false,
        description: _0x3e746c("oauth2Flow.btnFullWidth")
      }, {
        name: "className",
        type: "string",
        required: false,
        description: _0x3e746c("oauth2Flow.btnClassName")
      }, {
        name: "onLogin",
        type: "() => void",
        required: false,
        description: _0x3e746c("oauth2Flow.rlbOnLogin")
      }, {
        name: "onError",
        type: "(error: Error) => void",
        required: false,
        description: _0x3e746c("oauth2Flow.rlbOnError")
      }]
    }), _0x39f8e0.jsx(_0x1fc567, {
      id: "handle-callback-page",
      children: "handleCallbackPage()"
    }), _0x39f8e0.jsx(_0x199f6e, {
      children: _0x3e746c("oauth2Flow.vanillaCallbackDesc")
    }), _0x39f8e0.jsx(_0x2a04a9, {
      language: "html",
      code: "<script type=\"module\">\nimport { JubbioAuth, handleCallbackPage } from '@jubbio/auth';\n\nconst auth = new JubbioAuth({\n  clientId: 'YOUR_CLIENT_ID',\n  redirectUri: window.location.origin + '/callback',\n});\n\nhandleCallbackPage(auth, {\n  successRedirect: '/',\n  redirectDelay: 1500,\n  onSuccess: (result) => console.log('Hoş geldin', result.user.username),\n  onError: (err) => console.error('Hata:', err.message),\n});\n</script>"
    }), _0x39f8e0.jsx(_0x4623b9, {
      title: "CallbackHandlerOptions",
      params: [{
        name: "showLoading",
        type: "boolean",
        required: false,
        description: _0x3e746c("oauth2Flow.chShowLoading")
      }, {
        name: "successRedirect",
        type: "string",
        required: false,
        description: _0x3e746c("oauth2Flow.cbSuccessRedirect")
      }, {
        name: "autoRedirect",
        type: "boolean",
        required: false,
        description: _0x3e746c("oauth2Flow.chAutoRedirect")
      }, {
        name: "redirectDelay",
        type: "number",
        required: false,
        description: _0x3e746c("oauth2Flow.cbRedirectDelay")
      }, {
        name: "onSuccess",
        type: "(result: CallbackResult) => void",
        required: false,
        description: _0x3e746c("oauth2Flow.cbOnSuccess")
      }, {
        name: "onError",
        type: "(error: Error) => void",
        required: false,
        description: _0x3e746c("oauth2Flow.cbOnError")
      }]
    }), _0x39f8e0.jsx(_0x5d977e, {}), _0x39f8e0.jsx(_0x45ceeb, {
      id: "auth-react",
      children: _0x3e746c("oauth2Flow.authReactTitle")
    }), _0x39f8e0.jsx(_0x199f6e, {
      children: _0x3e746c("oauth2Flow.authReactIntro")
    }), _0x39f8e0.jsx(_0x2a04a9, {
      language: "bash",
      code: "npm install @jubbio/auth @jubbio/auth-react"
    }), _0x39f8e0.jsx(_0x5d977e, {}), _0x39f8e0.jsx(_0x45ceeb, {
      id: "react-hizli-baslangic",
      children: _0x3e746c("oauth2Flow.reactQuickStart")
    }), _0x39f8e0.jsx(_0x2a04a9, {
      language: "tsx",
      code: "import { JubbioProvider, JubbioLoginButton, JubbioCallback, useJubbio } from '@jubbio/auth-react';\n\nfunction App() {\n  return (\n    <JubbioProvider config={{\n      clientId: 'YOUR_CLIENT_ID',\n      redirectUri: 'https://yourapp.com/callback',\n      scopes: ['identify', 'guilds'],\n    }}>\n      <Router>\n        <Route path=\"/\" element={<HomePage />} />\n        <Route path=\"/callback\" element={<JubbioCallback />} />\n      </Router>\n    </JubbioProvider>\n  );\n}\n\nfunction HomePage() {\n  const { user, isLoggedIn } = useJubbio();\n  if (isLoggedIn && user) return <p>Hoş geldin, {user.display_name || user.username}!</p>;\n  return <JubbioLoginButton />;\n}"
    }), _0x39f8e0.jsx(_0x5d977e, {}), _0x39f8e0.jsx(_0x45ceeb, {
      id: "react-bilesenleri",
      children: _0x3e746c("oauth2Flow.reactComponents")
    }), _0x39f8e0.jsx(_0x1fc567, {
      id: "jubbio-provider",
      children: "JubbioProvider"
    }), _0x39f8e0.jsx(_0x199f6e, {
      children: _0x3e746c("oauth2Flow.providerDesc")
    }), _0x39f8e0.jsxs(_0x285d4c, {
      children: [_0x39f8e0.jsx(_0x506464, {
        children: _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x48dd09, {
            children: "Prop"
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thType")
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thDescription")
          })]
        })
      }), _0x39f8e0.jsxs(_0x140684, {
        children: [_0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "config"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "JubbioAuthConfig"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.providerConfigProp")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "children"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "ReactNode"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.providerChildrenProp")
          })]
        })]
      })]
    }), _0x39f8e0.jsx(_0x1fc567, {
      id: "jubbio-login-button",
      children: "JubbioLoginButton"
    }), _0x39f8e0.jsx(_0x199f6e, {
      children: _0x3e746c("oauth2Flow.loginButtonDesc")
    }), _0x39f8e0.jsx(_0x2a04a9, {
      language: "tsx",
      code: "<JubbioLoginButton\n  label=\"Jubbio ile Giriş Yap\"\n  size=\"medium\"\n  theme=\"brand\"\n  showLogo={true}\n  fullWidth={false}\n/>"
    }), _0x39f8e0.jsxs(_0x285d4c, {
      children: [_0x39f8e0.jsx(_0x506464, {
        children: _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x48dd09, {
            children: "Prop"
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thType")
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thDefault")
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thDescription")
          })]
        })
      }), _0x39f8e0.jsxs(_0x140684, {
        children: [_0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "label"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "string"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "'Jubbio ile Giriş Yap'"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.btnLabel")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "size"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "'small' | 'medium' | 'large'"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "'medium'"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.btnSize")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "theme"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "'brand' | 'dark' | 'light'"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "'brand'"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.btnTheme")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "showLogo"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "boolean"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "true"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.btnShowLogo")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "fullWidth"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "boolean"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "false"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.btnFullWidth")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "disabled"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "boolean"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "false"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.btnDisabled")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "className"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "string"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "''"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.btnClassName")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "style"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "CSSProperties"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "—"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.btnStyle")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "children"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "ReactNode"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "—"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.btnChildren")
          })]
        })]
      })]
    }), _0x39f8e0.jsx(_0x1fc567, {
      id: "tema-renkleri",
      children: _0x3e746c("oauth2Flow.themeColors")
    }), _0x39f8e0.jsxs(_0x285d4c, {
      children: [_0x39f8e0.jsx(_0x506464, {
        children: _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thTheme")
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thBackground")
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thText")
          })]
        })
      }), _0x39f8e0.jsxs(_0x140684, {
        children: [_0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "brand"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "#5865F2 (Blurple)"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.white")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "dark"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "#1E1F22"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.white")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "light"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "#FFFFFF"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.darkGrey")
          })]
        })]
      })]
    }), _0x39f8e0.jsx(_0x1fc567, {
      id: "boyutlar",
      children: _0x3e746c("oauth2Flow.sizes")
    }), _0x39f8e0.jsxs(_0x285d4c, {
      children: [_0x39f8e0.jsx(_0x506464, {
        children: _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.btnSize")
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thHeight")
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: "Font"
          })]
        })
      }), _0x39f8e0.jsxs(_0x140684, {
        children: [_0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "small"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "32px"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "13px"
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "medium"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "40px"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "14px"
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "large"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "48px"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "16px"
          })]
        })]
      })]
    }), _0x39f8e0.jsx(_0x1fc567, {
      id: "jubbio-callback",
      children: "JubbioCallback"
    }), _0x39f8e0.jsx(_0x199f6e, {
      children: _0x3e746c("oauth2Flow.callbackDesc")
    }), _0x39f8e0.jsx(_0x2a04a9, {
      language: "tsx",
      code: "<JubbioCallback\n  successRedirect=\"/\"\n  redirectDelay={1500}\n  onSuccess={(result) => console.log(result.user)}\n  onError={(err) => console.error(err)}\n/>"
    }), _0x39f8e0.jsxs(_0x285d4c, {
      children: [_0x39f8e0.jsx(_0x506464, {
        children: _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x48dd09, {
            children: "Prop"
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thType")
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thDefault")
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thDescription")
          })]
        })
      }), _0x39f8e0.jsxs(_0x140684, {
        children: [_0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "successRedirect"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "string"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "'/'"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.cbSuccessRedirect")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "redirectDelay"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "number"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "1500"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.cbRedirectDelay")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "loadingComponent"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "ReactNode"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "—"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.cbLoadingComponent")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "successComponent"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "(username: string) => ReactNode"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "—"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.cbSuccessComponent")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "errorComponent"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "(error: string) => ReactNode"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "—"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.cbErrorComponent")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "onSuccess"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "(result) => void"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "—"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.cbOnSuccess")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "onError"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "(error) => void"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "—"
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.cbOnError")
          })]
        })]
      })]
    }), _0x39f8e0.jsx(_0x5d977e, {}), _0x39f8e0.jsx(_0x45ceeb, {
      id: "use-jubbio",
      children: "useJubbio()"
    }), _0x39f8e0.jsx(_0x199f6e, {
      children: _0x3e746c("oauth2Flow.useJubbioDesc")
    }), _0x39f8e0.jsx(_0x2a04a9, {
      language: "tsx",
      code: "const { user, isLoggedIn, isLoading, login, logout, auth, setUser } = useJubbio();"
    }), _0x39f8e0.jsxs(_0x285d4c, {
      children: [_0x39f8e0.jsx(_0x506464, {
        children: _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thField")
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thType")
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thDescription")
          })]
        })
      }), _0x39f8e0.jsxs(_0x140684, {
        children: [_0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "auth"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "JubbioAuth"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.hookAuth")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "user"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "JubbioUser | null"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.hookUser")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "isLoggedIn"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "boolean"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.hookIsLoggedIn")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "isLoading"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "boolean"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.hookIsLoading")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "login"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "() => Promise<void>"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.hookLogin")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "logout"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "() => void"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.hookLogout")
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "setUser"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "(user) => void"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: _0x3e746c("oauth2Flow.hookSetUser")
          })]
        })]
      })]
    }), _0x39f8e0.jsx(_0x5d977e, {}), _0x39f8e0.jsx(_0x45ceeb, {
      id: "ozel-callback",
      children: _0x3e746c("oauth2Flow.customCallbackComponents")
    }), _0x39f8e0.jsx(_0x2a04a9, {
      language: "tsx",
      code: "<JubbioCallback\n  loadingComponent={<MySpinner />}\n  successComponent={(username) => (\n    <div className=\"success-card\">\n      <h2>Merhaba {username}!</h2>\n      <p>Dashboard'a yönlendiriliyorsun...</p>\n    </div>\n  )}\n  errorComponent={(error) => (\n    <div className=\"error-card\">\n      <h2>Bir sorun oluştu</h2>\n      <p>{error}</p>\n      <a href=\"/\">Ana sayfaya dön</a>\n    </div>\n  )}\n/>"
    }), _0x39f8e0.jsx(_0x5d977e, {}), _0x39f8e0.jsx(_0x45ceeb, {
      id: "tam-ornek",
      children: _0x3e746c("oauth2Flow.fullExample")
    }), _0x39f8e0.jsx(_0x2a04a9, {
      language: "tsx",
      code: "import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';\nimport { JubbioProvider, JubbioLoginButton, JubbioCallback, useJubbio } from '@jubbio/auth-react';\nimport { useState, useEffect } from 'react';\n\nconst config = {\n  clientId: 'YOUR_CLIENT_ID',\n  redirectUri: 'https://yourapp.com/callback',\n  scopes: ['identify', 'guilds'],\n};\n\nfunction App() {\n  return (\n    <JubbioProvider config={config}>\n      <BrowserRouter>\n        <Routes>\n          <Route path=\"/\" element={<Home />} />\n          <Route path=\"/callback\" element={<JubbioCallback successRedirect=\"/dashboard\" />} />\n          <Route path=\"/dashboard\" element={<Dashboard />} />\n        </Routes>\n      </BrowserRouter>\n    </JubbioProvider>\n  );\n}\n\nfunction Home() {\n  const { isLoggedIn } = useJubbio();\n  if (isLoggedIn) return <Navigate to=\"/dashboard\" />;\n  return <JubbioLoginButton size=\"large\" />;\n}\n\nfunction Dashboard() {\n  const { user, logout, auth, isLoggedIn } = useJubbio();\n  const [guilds, setGuilds] = useState([]);\n\n  useEffect(() => {\n    auth.getGuilds().then(setGuilds).catch(console.error);\n  }, []);\n\n  if (!isLoggedIn) return <Navigate to=\"/\" />;\n\n  return (\n    <div>\n      <h1>Hoş geldin, {user?.display_name || user?.username}!</h1>\n      <h2>Sunucuların</h2>\n      <ul>\n        {guilds.map(g => (\n          <li key={g.id}>{g.name} {g.is_owner && '👑'}</li>\n        ))}\n      </ul>\n      <button onClick={logout}>Çıkış Yap</button>\n    </div>\n  );\n}"
    }), _0x39f8e0.jsx(_0x5d977e, {}), _0x39f8e0.jsx(_0x45ceeb, {
      id: "ozel-buton",
      children: _0x3e746c("oauth2Flow.customButton")
    }), _0x39f8e0.jsx(_0x2a04a9, {
      language: "tsx",
      code: "// Tamamen özel içerik\n<JubbioLoginButton>\n  <img src=\"/my-icon.svg\" width={20} />\n  <span>Hesabımla Devam Et</span>\n</JubbioLoginButton>\n\n// Sadece hook kullanarak\nfunction MyLoginButton() {\n  const { login, isLoading } = useJubbio();\n  return (\n    <button onClick={login} disabled={isLoading}>\n      {isLoading ? 'Yükleniyor...' : 'Giriş Yap'}\n    </button>\n  );\n}"
    }), _0x39f8e0.jsx(_0x5d977e, {}), _0x39f8e0.jsx(_0x45ceeb, {
      id: "peer-dependencies",
      children: "Peer Dependencies"
    }), _0x39f8e0.jsxs(_0x285d4c, {
      children: [_0x39f8e0.jsx(_0x506464, {
        children: _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thPackage")
          }), _0x39f8e0.jsx(_0x48dd09, {
            children: _0x3e746c("oauth2Flow.thVersion")
          })]
        })
      }), _0x39f8e0.jsxs(_0x140684, {
        children: [_0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "react"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: ">=17.0.0"
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "react-dom"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: ">=17.0.0"
          })]
        }), _0x39f8e0.jsxs(_0x37bf37, {
          children: [_0x39f8e0.jsx(_0x37697c, {
            children: _0x39f8e0.jsx(_0x3e0445, {
              children: "@jubbio/auth"
            })
          }), _0x39f8e0.jsx(_0x37697c, {
            children: "^1.0.0"
          })]
        })]
      })]
    })]
  });
}
export { p as default };