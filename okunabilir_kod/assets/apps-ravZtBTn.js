import { c as _0x5d5098, be as _0x520d52 } from "./index-cQfEKR1W.js";
const s = {
  voiceTable: async (_0x129962, _0x2e0eef, _0x2982de) => (await _0x5d5098.get("/api/v1/apps/voice/" + _0x129962 + "/" + _0x2e0eef + "/table", {
    signal: _0x2982de
  })).data.data,
  async joinVoiceTable(_0x5d71da, _0x41c979, _0x16fc71, _0x186f81, _0x19e855) {
    try {
      return (await _0x5d5098.post("/api/v1/apps/voice/" + _0x5d71da + "/" + _0x41c979 + "/tables/" + _0x16fc71 + "/join", {
        role: _0x186f81,
        ...(_0x19e855 ? {
          roomId: _0x19e855
        } : {})
      })).data.data;
    } catch (_0x55dae1) {
      const _0x2b3af3 = _0x55dae1;
      throw Object.assign(new Error(_0x2b3af3.response?.data?.code || "SERVICE_UNAVAILABLE"), {
        code: _0x2b3af3.response?.data?.code || "SERVICE_UNAVAILABLE"
      });
    }
  },
  catalog: async () => (await _0x5d5098.get("/api/v1/apps/catalog")).data.data,
  async launch(_0xefee83, _0x2ef5d2, _0x65bf8e, _0x25ad38) {
    try {
      return (await _0x5d5098.post("/api/v1/apps/channels/" + _0xefee83 + "/" + _0x2ef5d2 + "/launch", {
        locale: (_0x520d52.language || navigator.language).split("-")[0],
        theme: document.documentElement.classList.contains("dark") ? "dark" : "light",
        ...(_0x25ad38 ? {
          roomId: _0x25ad38
        } : {})
      }, {
        signal: _0x65bf8e
      })).data.data;
    } catch (_0x419fe9) {
      const _0xdb6ac9 = _0x419fe9;
      const _0xd869e6 = _0xdb6ac9.response?.status;
      throw Object.assign(new Error(_0xdb6ac9.response?.data?.code || "Application service unavailable"), {
        code: _0xdb6ac9.response?.data?.code || {
          401: "UNAUTHENTICATED",
          403: "PERMISSION_DENIED",
          404: "NOT_FOUND",
          429: "RATE_LIMITED"
        }[_0xd869e6 || 0] || "SERVICE_UNAVAILABLE"
      });
    }
  },
  installations: async _0xa10af6 => (await _0x5d5098.get("/api/v1/apps/guilds/" + _0xa10af6 + "/installations")).data.data,
  versions: async _0x4b4e7c => (await _0x5d5098.get("/api/v1/apps/applications/" + _0x4b4e7c + "/versions")).data.data,
  install: async (_0x2e6be4, _0x34bca8, _0x4eca2f, _0x5ce9c6) => (await _0x5d5098.post("/api/v1/apps/guilds/" + _0x2e6be4 + "/installations", {
    applicationId: _0x34bca8,
    version: _0x4eca2f,
    approvedCapabilities: _0x5ce9c6
  })).data.data
};
async function e(_0x3ce8cc, _0xee8f74, _0x915ecc, _0x663d4f = "POST", _0x488645) {
  const _0x17b711 = await fetch(new URL("/api/v1/apps/" + _0x3ce8cc, "https://gateway.jubbio.com"), {
    method: _0x663d4f,
    credentials: "omit",
    redirect: "error",
    signal: _0x488645,
    headers: {
      Authorization: "Bearer " + _0xee8f74,
      "Content-Type": "application/json"
    },
    ...(_0x663d4f === "GET" ? {} : {
      body: JSON.stringify(_0x915ecc)
    })
  });
  const _0x1359a9 = await _0x17b711.json();
  if (!_0x17b711.ok || _0x1359a9.success === false) {
    throw Object.assign(new Error(_0x1359a9.code || "SERVICE_UNAVAILABLE"), {
      code: _0x1359a9.code || "SERVICE_UNAVAILABLE"
    });
  }
  return _0x1359a9.data;
}
export { s as a, e as s };