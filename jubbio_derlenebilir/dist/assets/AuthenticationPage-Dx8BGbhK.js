import { b as _0x422f78, j as _0x26e6fe, I as _0x141f2e } from "./index-cQfEKR1W.js";
import { H as _0x173b40, D as _0x3c7495, a as _0x2ad8ba, P as _0x3fb6c1, b as _0x3fdcc1, A as _0x5b5e6e, C as _0x451314, c as _0x20c3d1, d as _0x5882c1, e as _0x3c4829, f as _0x559347, g as _0x5b2a2e, h as _0x5bcae5, I as _0x22ff47, E as _0x811799 } from "./DocComponents-BWAUshvB.js";
import { C as _0x395fdb } from "./CodeBlock-B4seo9QW.js";
import "./clipboard-BQ9qambq.js";
import "./loader-circle-CTtxa1g9.js";
import "./prism-2cMp9j73.js";
function g() {
  const {
    t: _0x5bf39a
  } = _0x422f78("docs");
  return _0x26e6fe.jsxs(_0x26e6fe.Fragment, {
    children: [_0x26e6fe.jsxs("div", {
      className: "mb-10",
      children: [_0x26e6fe.jsx(_0x173b40, {
        children: _0x5bf39a("auth.title")
      }), _0x26e6fe.jsx("p", {
        className: "text-lg text-text-tertiary leading-relaxed max-w-2xl",
        children: _0x5bf39a("auth.description")
      })]
    }), _0x26e6fe.jsxs("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10",
      children: [_0x26e6fe.jsxs("a", {
        href: "#bot-token",
        className: "group flex items-center gap-4 p-4 rounded-xl border border-border-default bg-surface-overlay/20 hover:bg-surface-overlay/50 hover:border-emerald-500/30 transition-all",
        children: [_0x26e6fe.jsx("div", {
          className: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15",
          children: _0x26e6fe.jsx(_0x141f2e, {
            icon: "solar:bot-bold-duotone",
            className: "size-5 text-emerald-400"
          })
        }), _0x26e6fe.jsxs("div", {
          className: "min-w-0",
          children: [_0x26e6fe.jsx("div", {
            className: "text-sm font-semibold text-text-primary group-hover:text-emerald-400 transition-colors",
            children: "Bot Token"
          }), _0x26e6fe.jsx("div", {
            className: "text-xs text-text-muted mt-0.5",
            children: _0x5bf39a("auth.botTokenDesc")
          })]
        })]
      }), _0x26e6fe.jsxs("a", {
        href: "#oauth2-token",
        className: "group flex items-center gap-4 p-4 rounded-xl border border-border-default bg-surface-overlay/20 hover:bg-surface-overlay/50 hover:border-blue-500/30 transition-all",
        children: [_0x26e6fe.jsx("div", {
          className: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/15",
          children: _0x26e6fe.jsx(_0x141f2e, {
            icon: "solar:key-bold-duotone",
            className: "size-5 text-blue-400"
          })
        }), _0x26e6fe.jsxs("div", {
          className: "min-w-0",
          children: [_0x26e6fe.jsx("div", {
            className: "text-sm font-semibold text-text-primary group-hover:text-blue-400 transition-colors",
            children: "OAuth2 Bearer"
          }), _0x26e6fe.jsx("div", {
            className: "text-xs text-text-muted mt-0.5",
            children: _0x5bf39a("auth.oauth2Desc")
          })]
        })]
      })]
    }), _0x26e6fe.jsx(_0x3c7495, {}), _0x26e6fe.jsx(_0x2ad8ba, {
      id: "bot-token",
      children: "Bot Token"
    }), _0x26e6fe.jsx(_0x3fb6c1, {
      children: _0x5bf39a("auth.botTokenDesc")
    }), _0x26e6fe.jsx("h3", {
      className: "text-base font-semibold text-text-secondary mt-8 mb-3",
      children: _0x5bf39a("auth.howToGetToken")
    }), _0x26e6fe.jsxs(_0x3fb6c1, {
      children: [_0x26e6fe.jsx(_0x3fdcc1, {
        href: "/dev/applications",
        children: _0x5bf39a("quickstart.devPortal")
      }), " → ", _0x5bf39a("auth.getTokenStep1")]
    }), _0x26e6fe.jsx("h3", {
      className: "text-base font-semibold text-text-secondary mt-8 mb-3",
      children: _0x5bf39a("auth.tokenUsage")
    }), _0x26e6fe.jsx(_0x395fdb, {
      code: "const response = await fetch('" + _0x5b5e6e + "/users/@me', {\n  headers: {\n    'Authorization': 'Bot YOUR_BOT_TOKEN',\n    'Content-Type': 'application/json',\n  },\n});\n\nconst botUser = await response.json();",
      language: "javascript",
      title: _0x5bf39a("auth.botTokenApiRequest")
    }), _0x26e6fe.jsx(_0x3fb6c1, {
      children: _0x5bf39a("auth.jubbioCoreTokenDesc")
    }), _0x26e6fe.jsx(_0x395fdb, {
      code: "import { Client, GatewayIntentBits } from '@jubbio/core';\n\nconst client = new Client({\n  intents: [GatewayIntentBits.Guilds]\n});\n\nawait client.login(process.env.BOT_TOKEN);\nconst guild = await client.rest.getGuild('sunucu-id');",
      language: "javascript",
      title: _0x5bf39a("auth.jubbioCoreTokenUsage")
    }), _0x26e6fe.jsxs(_0x451314, {
      type: "error",
      title: _0x5bf39a("auth.tokenSecurityRules"),
      children: [_0x5bf39a("auth.secRule1"), ". ", _0x5bf39a("auth.secRule2"), ". ", _0x5bf39a("auth.secRule3"), ". ", _0x5bf39a("auth.secRule4"), ". ", _0x5bf39a("auth.secRule5"), "."]
    }), _0x26e6fe.jsx("h3", {
      className: "text-base font-semibold text-text-secondary mt-8 mb-3",
      children: _0x5bf39a("auth.tokenReset")
    }), _0x26e6fe.jsx(_0x3fb6c1, {
      children: _0x5bf39a("auth.tokenResetDesc")
    }), _0x26e6fe.jsx(_0x3c7495, {}), _0x26e6fe.jsx(_0x2ad8ba, {
      id: "oauth2-token",
      children: "OAuth2 Bearer Token"
    }), _0x26e6fe.jsx(_0x3fb6c1, {
      children: _0x5bf39a("auth.oauth2Desc")
    }), _0x26e6fe.jsx(_0x395fdb, {
      code: "const response = await fetch('" + _0x5b5e6e + "/users/@me', {\n  headers: {\n    'Authorization': 'Bearer USER_ACCESS_TOKEN',\n    'Content-Type': 'application/json',\n  },\n});\n\nconst user = await response.json();",
      language: "javascript",
      title: _0x5bf39a("auth.bearerTokenApiRequest")
    }), _0x26e6fe.jsx("h3", {
      className: "text-base font-semibold text-text-secondary mt-8 mb-3",
      children: _0x5bf39a("auth.oauth2FlowTitle")
    }), _0x26e6fe.jsx("div", {
      className: "mb-6 rounded-xl border border-border-default overflow-hidden divide-y divide-border-subtle",
      children: [{
        step: "1",
        text: _0x5bf39a("auth.oauth2Step1")
      }, {
        step: "2",
        text: _0x5bf39a("auth.oauth2Step2")
      }, {
        step: "3",
        text: _0x5bf39a("auth.oauth2Step3")
      }, {
        step: "4",
        text: _0x5bf39a("auth.oauth2Step4")
      }, {
        step: "5",
        text: _0x5bf39a("auth.oauth2Step5")
      }].map(({
        step: _0x9a9ee2,
        text: _0x36c7c6
      }) => _0x26e6fe.jsxs("div", {
        className: "flex items-center gap-3 px-4 py-2.5 hover:bg-surface-overlay/20 transition-colors",
        children: [_0x26e6fe.jsx("span", {
          className: "flex size-6 shrink-0 items-center justify-center rounded-md bg-blue-500/15 text-xs font-mono font-semibold text-blue-400",
          children: _0x9a9ee2
        }), _0x26e6fe.jsx("span", {
          className: "text-sm text-text-secondary",
          children: _0x36c7c6
        })]
      }, _0x9a9ee2))
    }), _0x26e6fe.jsx(_0x395fdb, {
      code: "const tokenResponse = await fetch('" + _0x5b5e6e + "/oauth2/token', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },\n  body: new URLSearchParams({\n    grant_type: 'authorization_code',\n    code: 'AUTHORIZATION_CODE',\n    redirect_uri: 'https://example.com/callback',\n    client_id: 'YOUR_CLIENT_ID',\n    client_secret: 'YOUR_CLIENT_SECRET',\n  }),\n});\n\nconst { access_token, refresh_token, expires_in } = await tokenResponse.json();",
      language: "javascript",
      title: _0x5bf39a("auth.oauth2CodeFlowTitle"),
      showLineNumbers: true
    }), _0x26e6fe.jsx(_0x3fb6c1, {
      children: _0x5bf39a("auth.clientSecretDesc")
    }), _0x26e6fe.jsx(_0x3c7495, {}), _0x26e6fe.jsx(_0x2ad8ba, {
      id: "token-turleri",
      children: _0x5bf39a("auth.tokenTypesComparison")
    }), _0x26e6fe.jsxs(_0x20c3d1, {
      children: [_0x26e6fe.jsx(_0x5882c1, {
        children: _0x26e6fe.jsxs(_0x3c4829, {
          children: [_0x26e6fe.jsx(_0x559347, {
            children: _0x5bf39a("auth.feature")
          }), _0x26e6fe.jsx(_0x559347, {
            children: "Bot Token"
          }), _0x26e6fe.jsx(_0x559347, {
            children: "Bearer Token"
          })]
        })
      }), _0x26e6fe.jsxs(_0x5b2a2e, {
        children: [_0x26e6fe.jsxs(_0x3c4829, {
          children: [_0x26e6fe.jsx(_0x5bcae5, {
            children: "Prefix"
          }), _0x26e6fe.jsx(_0x5bcae5, {
            children: _0x26e6fe.jsx(_0x22ff47, {
              children: "Bot"
            })
          }), _0x26e6fe.jsx(_0x5bcae5, {
            children: _0x26e6fe.jsx(_0x22ff47, {
              children: "Bearer"
            })
          })]
        }), _0x26e6fe.jsxs(_0x3c4829, {
          children: [_0x26e6fe.jsx(_0x5bcae5, {
            children: _0x5bf39a("auth.usage")
          }), _0x26e6fe.jsx(_0x5bcae5, {
            children: _0x5bf39a("auth.botApps")
          }), _0x26e6fe.jsx(_0x5bcae5, {
            children: _0x5bf39a("auth.onBehalfOfUser")
          })]
        }), _0x26e6fe.jsxs(_0x3c4829, {
          children: [_0x26e6fe.jsx(_0x5bcae5, {
            children: _0x5bf39a("auth.obtainedFrom")
          }), _0x26e6fe.jsx(_0x5bcae5, {
            children: _0x5bf39a("auth.devPortalBotTab")
          }), _0x26e6fe.jsx(_0x5bcae5, {
            children: _0x5bf39a("auth.viaOAuth2")
          })]
        }), _0x26e6fe.jsxs(_0x3c4829, {
          children: [_0x26e6fe.jsx(_0x5bcae5, {
            children: _0x5bf39a("auth.duration")
          }), _0x26e6fe.jsx(_0x5bcae5, {
            children: _0x5bf39a("auth.validUntilReset")
          }), _0x26e6fe.jsx(_0x5bcae5, {
            children: _0x5bf39a("auth.accessRefreshDuration")
          })]
        }), _0x26e6fe.jsxs(_0x3c4829, {
          children: [_0x26e6fe.jsx(_0x5bcae5, {
            children: _0x5bf39a("auth.gatewayConnection")
          }), _0x26e6fe.jsx(_0x5bcae5, {
            children: _0x5bf39a("auth.yes")
          }), _0x26e6fe.jsx(_0x5bcae5, {
            children: _0x5bf39a("auth.no")
          })]
        }), _0x26e6fe.jsxs(_0x3c4829, {
          children: [_0x26e6fe.jsx(_0x5bcae5, {
            children: _0x5bf39a("auth.accessScope")
          }), _0x26e6fe.jsx(_0x5bcae5, {
            children: _0x5bf39a("auth.allBotPerms")
          }), _0x26e6fe.jsx(_0x5bcae5, {
            children: _0x5bf39a("auth.limitedToScopes")
          })]
        })]
      })]
    }), _0x26e6fe.jsx(_0x3c7495, {}), _0x26e6fe.jsx(_0x2ad8ba, {
      id: "token-yenileme",
      children: _0x5bf39a("auth.tokenRefreshTitle")
    }), _0x26e6fe.jsx(_0x3fb6c1, {
      children: _0x5bf39a("auth.tokenRefreshDesc")
    }), _0x26e6fe.jsx(_0x811799, {
      method: "POST",
      path: "/oauth2/token"
    }), _0x26e6fe.jsx(_0x395fdb, {
      code: "const response = await fetch('" + _0x5b5e6e + "/oauth2/token', {\n  method: 'POST',\n  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },\n  body: new URLSearchParams({\n    grant_type: 'refresh_token',\n    refresh_token: 'YOUR_REFRESH_TOKEN',\n    client_id: 'YOUR_CLIENT_ID',\n    client_secret: 'YOUR_CLIENT_SECRET',\n  }),\n});\n\nconst { access_token, refresh_token, expires_in } = await response.json();",
      language: "javascript",
      title: _0x5bf39a("auth.tokenRefreshTitle")
    }), _0x26e6fe.jsx(_0x451314, {
      type: "info",
      title: _0x5bf39a("auth.tokenDurationsTitle"),
      children: _0x5bf39a("auth.tokenDurationsDesc")
    }), _0x26e6fe.jsx(_0x3c7495, {}), _0x26e6fe.jsx(_0x2ad8ba, {
      id: "redirect-uri",
      children: _0x5bf39a("auth.redirectUriTitle")
    }), _0x26e6fe.jsx(_0x3fb6c1, {
      children: _0x5bf39a("auth.redirectUriDesc")
    }), _0x26e6fe.jsx(_0x451314, {
      type: "warning",
      title: _0x5bf39a("auth.devEnvironmentTitle"),
      children: _0x5bf39a("auth.devEnvironmentDesc")
    })]
  });
}
export { g as default };