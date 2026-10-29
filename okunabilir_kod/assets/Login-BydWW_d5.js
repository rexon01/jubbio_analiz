const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./index-cQfEKR1W.js", "./index-Cm--a4Hl.css"]) => i.map(i => d[i]);
import { b as _0x43fa83, d as _0xbeb19e, e as _0x15d393, f as _0x2fd08f, g as _0x57d817, r as _0x39c4c3, h as _0x2e8013, _ as _0x4b04a4, A as _0x212d0b, i as _0x5f1727, k as _0x24585e, l as _0x2a8b54, m, n as _0x10b95c, o as _0x2a4c75, j as _0xb3d158, I as _0x4462c7, L as _0x44b986, p as _0x3a7c9a } from "./index-cQfEKR1W.js";
import { A as _0x2aabf8, a as _0x2c4834, b as _0x312419 } from "./AuthInput-C-W1lSJn.js";
import { T as _0x174b1f } from "./TurnstileModal-DSCaGaLL.js";
import { L as _0x3fe260 } from "./label-ODyS97Ju.js";
import { S } from "./submit-button-B2LF_DTf.js";
import _0x7255e7 from "./PasswordInput-B3lf9zf0.js";
import _0x3e5c27 from "./TwoFAModal-BM80kxyU.js";
import { O as _0x440064 } from "./OTPVerificationModal-Dys1Wl1u.js";
import _0x2bb244 from "./GoogleSignInButton-qzyZ0Qtb.js";
import { G as _0x3d0822, a as _0x41be61 } from "./GoogleLinkModal-fM8JLtlA.js";
import { A as _0x182422, a as _0x37c108, b as _0x27384f } from "./avatar-C-4BWxT3.js";
import { A as _0x2072b4 } from "./arrow-right-DvlsXLCB.js";
import "./thumbs-up-h5dpjlcj.js";
import "./heart-BTCd1Bwb.js";
import "./zap-B3VH4qT9.js";
import "./smile-Do8NR4vN.js";
import "./camera-Tq38xvm2.js";
import "./coffee-BNwzMqh6.js";
import "./gift-Co-azAyt.js";
import "./sparkles-CEeENQ_D.js";
import "./users-CoSbgNbJ.js";
import "./video-AtsAgCNJ.js";
import "./hash-Dd0s6IKZ.js";
import "./settings-BHmftTyd.js";
import "./image-CYAMq37h.js";
import "./palette-M-F5ZK9w.js";
import "./trophy-D1hvddoK.js";
import "./input-AMyERYwJ.js";
import "./input-otp-BJ3P97wC.js";
import "./minus-DgcuZCwQ.js";
import "./dialog-BMMpM7PR.js";
import "./index-yuEHo9bu.js";
import "./2fa-BVSDQ2X9.js";
import "./loader-circle-CTtxa1g9.js";
import "./key-gGt-5vdN.js";
import "./mail-VxBGiXYt.js";
import "./smartphone-CEPSHImI.js";
import "./tr-D975n4_R.js";
import "./calendar-2SpD7kOK.js";
import "./chevron-left-CoNyL-61.js";
const E = () => {
  const {
    t: _0x58596e
  } = _0x43fa83();
  const _0x325a0b = _0xbeb19e();
  const _0x30e58e = _0x15d393();
  const {
    login: _0x5e673a,
    setLoading: _0x4bca16,
    isLoading: _0x531a36
  } = _0x2fd08f();
  const {
    accounts: _0x3f3632,
    switchAccount: _0x4c422b,
    removeAccount: _0x4206a5
  } = _0x57d817();
  const _0x1e36c2 = new URLSearchParams(_0x30e58e.search);
  const _0x23bcd1 = _0x1e36c2.get("add_account") === "true";
  const _0x1c2c51 = _0x1e36c2.get("expired_account");
  const _0x20266e = _0x3f3632.length > 0 && !_0x23bcd1;
  const [_0x555da3, _0x51e19f] = _0x39c4c3.useState(!_0x20266e);
  const [_0x54517a, _0x240003] = _0x39c4c3.useState("");
  const [_0x56d9a7, _0x1682a7] = _0x39c4c3.useState("");
  const [_0x2eb4d8, _0x30c48d] = _0x39c4c3.useState("");
  const [_0x1e0736, _0x2f47b2] = _0x39c4c3.useState(false);
  const [_0x36d547, _0x541255] = _0x39c4c3.useState(null);
  const [_0x21d868, _0x4706e6] = _0x39c4c3.useState(false);
  const [_0x358ad9, _0x246e19] = _0x39c4c3.useState(false);
  const [_0xe572d5, _0x4b4684] = _0x39c4c3.useState(null);
  const [_0x1a7c3a, _0x8f5c9a] = _0x39c4c3.useState(false);
  const [_0x3648f7, _0x52d327] = _0x39c4c3.useState(false);
  const [_0x20695c, _0x554928] = _0x39c4c3.useState(null);
  const [_0x1c7230, _0x1f8694] = _0x39c4c3.useState(null);
  const [_0x2b642e, _0x488a0b] = _0x39c4c3.useState(false);
  const [_0xdaa836, _0x131368] = _0x39c4c3.useState(false);
  const [_0x532a6e, _0x3f38b2] = _0x39c4c3.useState(false);
  const [_0xfcef5f, _0x39d275] = _0x39c4c3.useState(null);
  const [_0x3f586a, _0x2b05a3] = _0x39c4c3.useState("");
  const [_0x162714, _0x95a054] = _0x39c4c3.useState("");
  const [_0x3ae009, _0x3fc4ac] = _0x39c4c3.useState(null);
  const _0x58fb3d = _0x39c4c3.useCallback(() => {
    if (_0x54517a && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(_0x54517a)) {
      _0x30c48d(_0x58596e("auth.invalidEmail"));
    } else {
      _0x30c48d("");
    }
  }, [_0x54517a, _0x58596e]);
  const _0x56c8e2 = _0x39c4c3.useMemo(() => {
    const _0x58f0eb = [];
    if (!_0x54517a.trim()) {
      _0x58f0eb.push(_0x58596e("auth.emailRequired"));
    }
    if (!_0x56d9a7.trim()) {
      _0x58f0eb.push(_0x58596e("auth.passwordRequired"));
    }
    return _0x58f0eb;
  }, [_0x54517a, _0x56d9a7, _0x58596e]);
  const _0x549496 = _0x39c4c3.useMemo(() => _0x56c8e2.length > 0 || !!_0x2eb4d8, [_0x56c8e2, _0x2eb4d8]);
  const _0x2dc48f = _0x39c4c3.useMemo(() => {
    const _0x493bdb = [..._0x56c8e2];
    if (_0x2eb4d8) {
      _0x493bdb.push(_0x58596e("auth.emailInvalid"));
    }
    return [...new Set(_0x493bdb)];
  }, [_0x56c8e2, _0x2eb4d8, _0x58596e]);
  const _0x1eeb74 = _0x39c4c3.useCallback(_0x1a4822 => _0x240003(_0x1a4822.target.value), []);
  const _0x5d3256 = _0x39c4c3.useCallback(_0x427af5 => _0x1682a7(_0x427af5.target.value), []);
  const _0x6b88ff = _0x39c4c3.useCallback(async (_0x1acf22, _0xdc90fe) => {
    if (_0x36d547 && !_0x21d868) {
      if (_0x1acf22 !== "") {
        _0x4706e6(true);
        try {
          const _0xd31a63 = await _0x2e8013.verify2FALogin(_0x36d547.userId, _0x1acf22);
          const _0x3d09c9 = new URLSearchParams(window.location.search);
          const _0x69cf80 = _0x3d09c9.get("invite");
          if (_0x3d09c9.get("add_account") === "true") {
            const {
              useAccountStore: _0x581233
            } = await _0x4b04a4(async () => {
              const {
                useAccountStore: _0x11bfaa
              } = await import("./index-cQfEKR1W.js").then(_0xac69ed => _0xac69ed.fy);
              return {
                useAccountStore: _0x11bfaa
              };
            }, [], import.meta.url);
            const {
              tokenStorage: _0x321b88
            } = await _0x4b04a4(async () => {
              const {
                tokenStorage: _0x196474
              } = await import("./index-cQfEKR1W.js").then(_0x42e482 => _0x42e482.fr);
              return {
                tokenStorage: _0x196474
              };
            }, [], import.meta.url);
            const _0x3bbd1d = _0x2fd08f.getState();
            if (_0x3bbd1d.user && _0x3bbd1d.sessionId && _0x3bbd1d.deviceId) {
              _0x581233.getState().addAccount({
                user_id: _0x3bbd1d.user.id,
                username: _0x3bbd1d.user.username,
                email: _0x3bbd1d.user.email,
                display_name: _0x3bbd1d.user.display_name,
                avatar_url: _0x3bbd1d.user.avatar_url,
                session_id: _0x3bbd1d.sessionId,
                device_id: _0x3bbd1d.deviceId,
                presence_status: _0x3bbd1d.user.presence_status,
                added_at: Date.now()
              });
            }
            if (_0x321b88.isNativeApp() && _0xd31a63.refresh_token) {
              await _0x321b88.set(_0xd31a63.refresh_token);
            }
            _0x2fd08f.getState().setAccessToken(_0xd31a63.access_token);
            const _0x27f3a1 = await _0x2e8013.getMe();
            await _0x5e673a(_0x27f3a1, _0xd31a63);
            if (_0x321b88.isNativeApp() && _0xd31a63.refresh_token) {
              await _0x321b88.setForAccount(String(_0x27f3a1.id), _0xd31a63.refresh_token);
            }
            _0x2f47b2(false);
            _0x541255(null);
            _0x325a0b("/app", {
              replace: true
            });
            return;
          }
          _0x2fd08f.getState().setAccessToken(_0xd31a63.access_token);
          const _0x19f53d = await _0x2e8013.getMe();
          await _0x5e673a(_0x19f53d, _0xd31a63);
          _0x2f47b2(false);
          _0x541255(null);
          const _0x2567e9 = _0x30e58e.state?.returnUrl;
          if (_0x2567e9 && _0x2567e9.startsWith("/")) {
            _0x325a0b(_0x2567e9, {
              replace: true
            });
          } else {
            const _0x2fa8cd = _0x3d09c9.get("template");
            _0x325a0b("/app", {
              state: _0x69cf80 ? {
                inviteCode: _0x69cf80
              } : _0x2fa8cd ? {
                templateCode: _0x2fa8cd
              } : undefined,
              replace: true
            });
          }
        } catch (_0x196764) {} finally {
          _0x4706e6(false);
        }
      } else {
        try {
          _0x4706e6(true);
          const _0xf7dc1b = await _0x2e8013.login({
            email: _0x54517a,
            password: _0x56d9a7,
            ...(_0x20695c && {
              turnstileToken: _0x20695c
            })
          });
          if ("requires2FA" in _0xf7dc1b && _0xf7dc1b.requires2FA) {
            _0x541255(_0xf7dc1b);
          }
        } catch (_0x5b9267) {
          console.error("Login resend hatası:", _0x5b9267);
        } finally {
          _0x4706e6(false);
        }
      }
    }
  }, [_0x36d547, _0x5e673a, _0x325a0b, _0x30e58e, _0x54517a, _0x56d9a7, _0x21d868, _0x58596e]);
  const _0x3ac1ec = _0x39c4c3.useCallback(() => {
    _0x2f47b2(false);
    _0x541255(null);
  }, []);
  const _0x1a3066 = _0x39c4c3.useCallback(async _0x144a84 => {
    if (_0xe572d5 && !_0x1a7c3a) {
      _0x8f5c9a(true);
      try {
        const _0x1abd34 = await _0x2e8013.verifyOTP({
          verification_id: _0xe572d5.verification_id,
          otp: _0x144a84
        });
        _0x2fd08f.getState().setAccessToken(_0x1abd34.access_token);
        const _0x7984b0 = await _0x2e8013.getMe();
        await _0x5e673a(_0x7984b0, _0x1abd34);
        _0x246e19(false);
        _0x4b4684(null);
        const _0x5c1b16 = new URLSearchParams(window.location.search);
        const _0xef488c = _0x5c1b16.get("invite");
        const _0x4bc50c = _0x5c1b16.get("template");
        const _0x2fcbb7 = _0x30e58e.state?.returnUrl;
        if (_0x2fcbb7 && _0x2fcbb7.startsWith("/")) {
          _0x325a0b(_0x2fcbb7, {
            replace: true
          });
        } else {
          _0x325a0b("/app", {
            state: _0xef488c ? {
              inviteCode: _0xef488c
            } : _0x4bc50c ? {
              templateCode: _0x4bc50c
            } : undefined,
            replace: true
          });
        }
      } catch (_0x260fe8) {} finally {
        _0x8f5c9a(false);
      }
    }
  }, [_0xe572d5, _0x1a7c3a, _0x5e673a, _0x325a0b, _0x30e58e, _0x58596e]);
  const _0x46f91f = _0x39c4c3.useCallback(async () => {
    if (_0xe572d5) {
      try {
        const _0xbefd87 = await _0x2e8013.resendOTP(_0xe572d5.verification_id);
        _0x4b4684(_0x58016e => _0x58016e ? {
          ..._0x58016e,
          otp_expires_in: _0xbefd87.otp_expires_in
        } : null);
      } catch (_0x370cd9) {
        if (_0x370cd9 instanceof _0x212d0b) {
          _0x370cd9.response;
        }
        throw _0x370cd9;
      }
    }
  }, [_0xe572d5, _0x58596e]);
  const _0x28efa9 = _0x39c4c3.useCallback(() => {
    _0x246e19(false);
    _0x4b4684(null);
  }, []);
  const _0x293152 = _0x39c4c3.useCallback(async _0x4d323c => {
    if (!_0x2b642e && !_0x531a36) {
      _0x39d275(_0x4d323c);
      await _0xe84700(_0x4d323c, _0x20695c || undefined);
    }
  }, [_0x2b642e, _0x531a36, _0x20695c]);
  const _0xe84700 = _0x39c4c3.useCallback(async (_0x5afaa5, _0x259c7c) => {
    _0x488a0b(true);
    try {
      const _0x31aae2 = await _0x2e8013.googleAuth(_0x5afaa5, undefined, _0x259c7c);
      if (_0x5f1727(_0x31aae2)) {
        _0x2b05a3(_0x31aae2.message);
        _0x131368(true);
        return;
      }
      if (_0x24585e(_0x31aae2)) {
        _0x3fc4ac(_0x31aae2);
        _0x95a054(_0x31aae2.message);
        _0x3f38b2(true);
        return;
      }
      if (_0x2a8b54(_0x31aae2)) {
        _0x2fd08f.getState().setAccessToken(_0x31aae2.access_token);
        const _0x27bef5 = await _0x2e8013.getMe();
        await _0x5e673a(_0x27bef5, _0x31aae2);
        const _0x400e7f = new URLSearchParams(window.location.search);
        const _0x539e1e = _0x400e7f.get("invite");
        const _0x4b8acc = _0x400e7f.get("template");
        const _0x1b4185 = _0x30e58e.state?.returnUrl;
        if (_0x1b4185 && _0x1b4185.startsWith("/")) {
          _0x325a0b(_0x1b4185, {
            replace: true
          });
        } else {
          _0x325a0b("/app", {
            state: _0x539e1e ? {
              inviteCode: _0x539e1e
            } : _0x4b8acc ? {
              templateCode: _0x4b8acc
            } : undefined,
            replace: true
          });
        }
      }
    } catch (_0x135ee1) {
      if (_0x135ee1 instanceof _0x212d0b && _0x135ee1.response?.status === 429) {
        return;
      }
    } finally {
      _0x488a0b(false);
    }
  }, [_0x5e673a, _0x325a0b, _0x30e58e]);
  const _0x273053 = _0x39c4c3.useCallback(async _0x345f03 => {
    if (_0xfcef5f) {
      try {
        const _0xd86a33 = await _0x2e8013.googleAuth(_0xfcef5f, _0x345f03, _0x20695c || undefined);
        if (_0x24585e(_0xd86a33)) {
          _0x131368(false);
          _0x3fc4ac(_0xd86a33);
          _0x95a054(_0xd86a33.message);
          _0x3f38b2(true);
          return;
        }
        if (_0x2a8b54(_0xd86a33)) {
          _0x2fd08f.getState().setAccessToken(_0xd86a33.access_token);
          const _0x408b15 = await _0x2e8013.getMe();
          await _0x5e673a(_0x408b15, _0xd86a33);
          _0x131368(false);
          const _0x10f4e3 = _0x30e58e.state?.from || "/app";
          _0x325a0b(_0x10f4e3, {
            replace: true
          });
        }
      } catch (_0x705c39) {
        if (_0x705c39 instanceof _0x212d0b && _0x705c39.response?.status === 403 && _0x705c39.response?.data?.code === "UNDERAGE_USER") {
          _0x131368(false);
        }
        throw _0x705c39;
      }
    }
  }, [_0xfcef5f, _0x20695c, _0x5e673a, _0x325a0b, _0x30e58e, _0x58596e]);
  const _0x3dec6a = _0x39c4c3.useCallback(async _0x7dc87c => {
    if (_0xfcef5f && _0x3ae009) {
      try {
        const _0x17fcf1 = await _0x2e8013.googleLinkConfirm({
          user_id: _0x3ae009.user_id,
          id_token: _0xfcef5f,
          password: _0x7dc87c
        });
        _0x2fd08f.getState().setAccessToken(_0x17fcf1.access_token);
        const _0x1b3fcc = await _0x2e8013.getMe();
        await _0x5e673a(_0x1b3fcc, _0x17fcf1);
        _0x3f38b2(false);
        const _0x111314 = _0x30e58e.state?.from || "/app";
        _0x325a0b(_0x111314, {
          replace: true
        });
      } catch (_0x2f1da9) {
        throw _0x2f1da9;
      }
    }
  }, [_0xfcef5f, _0x3ae009, _0x5e673a, _0x325a0b, _0x30e58e, _0x58596e]);
  const _0x538792 = async _0x442676 => {
    const _0x2abaf9 = _0x442676 || _0x20695c;
    _0x4bca16(true);
    try {
      const _0x188872 = await _0x2e8013.login({
        email: _0x54517a,
        password: _0x56d9a7,
        ...(_0x2abaf9 && {
          turnstileToken: _0x2abaf9
        })
      });
      if (_0x3a7c9a(_0x188872)) {
        _0x4b4684(_0x188872);
        _0x246e19(true);
        _0x4bca16(false);
        return;
      }
      if (_0x10b95c(_0x188872)) {
        _0x541255(_0x188872);
        _0x2f47b2(true);
        _0x4bca16(false);
        return;
      }
      if (_0x2a4c75(_0x188872)) {
        const _0x12a6e9 = new URLSearchParams(window.location.search);
        const _0xe43c82 = _0x12a6e9.get("invite");
        if (_0x12a6e9.get("add_account") === "true") {
          const {
            useAccountStore: _0x47e05e
          } = await _0x4b04a4(async () => {
            const {
              useAccountStore: _0x20ad27
            } = await import("./index-cQfEKR1W.js").then(_0x59fef8 => _0x59fef8.fy);
            return {
              useAccountStore: _0x20ad27
            };
          }, __vite__mapDeps([0, 1]), import.meta.url);
          const {
            tokenStorage: _0x4392bb
          } = await _0x4b04a4(async () => {
            const {
              tokenStorage: _0x43611f
            } = await import("./index-cQfEKR1W.js").then(_0x5bf1cc => _0x5bf1cc.fr);
            return {
              tokenStorage: _0x43611f
            };
          }, [], import.meta.url);
          const _0xf913b8 = _0x2fd08f.getState();
          if (_0xf913b8.user && _0xf913b8.sessionId && _0xf913b8.deviceId) {
            _0x47e05e.getState().addAccount({
              user_id: _0xf913b8.user.id,
              username: _0xf913b8.user.username,
              email: _0xf913b8.user.email,
              display_name: _0xf913b8.user.display_name,
              avatar_url: _0xf913b8.user.avatar_url,
              session_id: _0xf913b8.sessionId,
              device_id: _0xf913b8.deviceId,
              presence_status: _0xf913b8.user.presence_status,
              added_at: Date.now()
            });
          }
          if (_0x4392bb.isNativeApp() && _0x188872.refresh_token) {
            await _0x4392bb.set(_0x188872.refresh_token);
          }
          _0x2fd08f.getState().setAccessToken(_0x188872.access_token);
          const _0x3c2d22 = await _0x2e8013.getMe();
          await _0x5e673a(_0x3c2d22, _0x188872);
          if (_0x4392bb.isNativeApp() && _0x188872.refresh_token) {
            await _0x4392bb.setForAccount(String(_0x3c2d22.id), _0x188872.refresh_token);
          }
          _0x325a0b("/app", {
            replace: true
          });
          return;
        }
        _0x2fd08f.getState().setAccessToken(_0x188872.access_token);
        const _0x4ce6e1 = await _0x2e8013.getMe();
        await _0x5e673a(_0x4ce6e1, _0x188872);
        const _0x296e59 = _0x30e58e.state?.returnUrl;
        if (_0x296e59 && _0x296e59.startsWith("/")) {
          _0x325a0b(_0x296e59, {
            replace: true
          });
        } else {
          const _0x5d7421 = _0x12a6e9.get("template");
          _0x325a0b("/app", {
            state: _0xe43c82 ? {
              inviteCode: _0xe43c82
            } : _0x5d7421 ? {
              templateCode: _0x5d7421
            } : undefined,
            replace: true
          });
        }
      }
    } catch (_0x54dcf4) {
      if (_0x54dcf4 instanceof _0x212d0b && _0x54dcf4.response?.status === 429) {
        return;
      }
      _0x554928(null);
    } finally {
      _0x4bca16(false);
    }
  };
  m(_0x58596e("auth.login"));
  const [_0x56a8c5, _0x58ad9a] = _0x39c4c3.useState(_0x1c2c51 ? Number(_0x1c2c51) : null);
  const [_0x281980, _0xe440f6] = _0x39c4c3.useState(null);
  const [_0x5ab19d, _0x54d4fe] = _0x39c4c3.useState("");
  const [_0x5f433e, _0x55143b] = _0x39c4c3.useState(false);
  const [_0x116b81, _0x3c694b] = _0x39c4c3.useState(false);
  const [_0x5e6185, _0x4a9f94] = _0x39c4c3.useState(null);
  const _0x40d439 = _0x39c4c3.useCallback(async _0x3538d8 => {
    if (_0x56a8c5 !== _0x3538d8.user_id) {
      _0xe440f6(_0x3538d8.user_id);
      _0x58ad9a(null);
      try {
        if (await _0x4c422b(_0x3538d8.user_id)) {
          _0x325a0b("/app", {
            replace: true
          });
        } else {
          _0x58ad9a(_0x3538d8.user_id);
          _0x54d4fe("");
        }
      } catch {
        _0x58ad9a(_0x3538d8.user_id);
        _0x54d4fe("");
      } finally {
        _0xe440f6(null);
      }
    }
  }, [_0x4c422b, _0x325a0b, _0x56a8c5]);
  const _0x1a09fa = _0x39c4c3.useCallback(async _0x37282a => {
    if (_0x5ab19d.trim() && !_0x5f433e) {
      await _0x146726(_0x37282a);
    }
  }, [_0x5ab19d, _0x5f433e]);
  const _0x146726 = _0x39c4c3.useCallback(async (_0x48b090, _0x3d7172) => {
    _0x55143b(true);
    try {
      const _0x300226 = await _0x2e8013.login({
        email: _0x48b090.email,
        password: _0x5ab19d,
        ...(_0x3d7172 && {
          turnstileToken: _0x3d7172
        })
      });
      if (_0x10b95c(_0x300226)) {
        _0x240003(_0x48b090.email);
        _0x1682a7(_0x5ab19d);
        _0x541255(_0x300226);
        _0x2f47b2(true);
        _0x58ad9a(null);
        _0x51e19f(true);
        return;
      }
      if (_0x2a4c75(_0x300226)) {
        _0x2fd08f.getState().setAccessToken(_0x300226.access_token);
        const _0x989794 = await _0x2e8013.getMe();
        await _0x5e673a(_0x989794, _0x300226);
        window.location.href = "/app";
      }
    } catch (_0x42b490) {
      if (_0x42b490 instanceof _0x212d0b && _0x42b490.response?.status === 429) {
        return;
      }
    } finally {
      _0x55143b(false);
    }
  }, [_0x5ab19d, _0x5e673a]);
  if (!_0x555da3 && _0x20266e) {
    return <_0x2aabf8><_0x2c4834 title={_0x58596e("auth.login")} description={_0x58596e("auth.savedAccountsDesc")} /><div className="rounded-xl bg-surface-inset/30 border border-border-default overflow-hidden">{_0x3f3632.map((_0x5c2c23, _0x106a86) => {
          const _0x3c7204 = _0x56a8c5 === _0x5c2c23.user_id;
          const _0x48f980 = _0x281980 === _0x5c2c23.user_id;
          const _0x86a72 = _0x106a86 === _0x3f3632.length - 1;
          return <div className={"transition-all " + (_0x3c7204 ? "bg-amber-500/5" : _0x48f980 ? "bg-surface-overlay/40" : "")} key={_0x5c2c23.user_id}><div onClick={() => !_0x281980 && !_0x3c7204 && _0x40d439(_0x5c2c23)} className={"flex items-center gap-3.5 px-4 py-3.5 " + (_0x3c7204 || _0x48f980 ? "" : "cursor-pointer hover:bg-surface-overlay/60")}><_0x182422 className="size-11 ring-2 ring-border-default shrink-0">{_0x5c2c23.avatar_url ? <_0x37c108 src={_0x5c2c23.avatar_url} alt={_0x5c2c23.display_name || _0x5c2c23.username} className="object-cover" /> : null}<_0x27384f className="text-text-primary text-sm font-semibold bg-gradient-to-br from-slate-600 to-slate-700">{_0x5c2c23.username.charAt(0).toUpperCase()}</_0x27384f></_0x182422><div className="flex-1 min-w-0"><p className="text-[15px] font-medium text-text-primary truncate">{_0x5c2c23.display_name || _0x5c2c23.username}</p><p className="text-[13px] text-text-tertiary truncate">@{_0x5c2c23.username}</p>{_0x3c7204 && <p className="text-[12px] text-amber-500 mt-1">{_0x58596e("auth.sessionExpired")}</p>}</div><div className="flex items-center gap-1 shrink-0">{!_0x48f980 && !_0x3c7204 && <button onClick={_0x22c7b3 => {
                  _0x22c7b3.stopPropagation();
                  _0x4206a5(_0x5c2c23.user_id);
                }} className="size-7 flex items-center justify-center rounded-md hover:bg-red-500/10 text-text-tertiary hover:text-red-400 transition-colors cursor-pointer" title={_0x58596e("auth.removeAccount")}><_0x4462c7 icon="solar:trash-bin-trash-bold" className="size-4" /></button>}{_0x48f980 ? <div className="size-5 border-2 border-text-tertiary/30 border-t-accent-primary rounded-full animate-spin" /> : _0x3c7204 ? null : <_0x2072b4 className="size-4 text-text-tertiary" />}</div></div>{_0x3c7204 && <form onSubmit={_0x852613 => {
              _0x852613.preventDefault();
              _0x1a09fa(_0x5c2c23);
            }} className="px-4 pb-3.5 space-y-3"><_0x7255e7 value={_0x5ab19d} onChange={_0x48bcf2 => _0x54d4fe(_0x48bcf2.target.value)} placeholder={_0x58596e("auth.password")} autoFocus={true} autoComplete="current-password" className="w-full h-9" /><button type="submit" disabled={!_0x5ab19d.trim() || _0x5f433e} className="w-full h-9 rounded-lg bg-accent-primary hover:bg-accent-primary/90 text-black text-sm font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">{_0x5f433e ? <_0x4462c7 icon="solar:refresh-bold-duotone" className="size-4 animate-spin mx-auto" /> : _0x58596e("auth.login")}</button></form>}{!_0x86a72 && <div className="mx-4 border-t border-surface-inset/50" />}</div>;
        })}</div><div className="mt-5 pt-4 border-t border-surface-inset/50"><S type="button" variant="secondary" onClick={() => _0x51e19f(true)}>{_0x58596e("auth.loginWithDifferentAccount")}</S></div></_0x2aabf8>;
  } else {
    return <_0x2aabf8><_0x2c4834 title="Jubbio" description="Jubbio" /><_0x2bb244 onIdToken={_0x293152} disabled={_0x531a36} isLoading={_0x2b642e} /><div className="relative"><div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div><div className="relative flex justify-center text-xs"><span className="bg-surface-raised px-2 text-muted-foreground">{_0x58596e("auth.google.orDivider")}</span></div></div><form onSubmit={async _0x1f6a9a => {
        _0x1f6a9a.preventDefault();
        if (!_0x549496 && !_0x531a36) {
          await _0x538792();
        }
      }} className="grid gap-4"><_0x312419 id="email" label={_0x58596e("auth.email")} type="email" placeholder={_0x58596e("auth.emailPlaceholder")} required={true} value={_0x54517a} onChange={_0x1eeb74} onBlur={_0x58fb3d} error={_0x2eb4d8} autoComplete="email" /><div className="grid gap-2"><div className="flex items-center"><_0x3fe260 htmlFor="password">{_0x58596e("auth.password")}<span className="text-red-500/90">*</span></_0x3fe260><_0x44b986 to="/forgot-password" className="ml-auto inline-block text-sm underline">{_0x58596e("auth.forgotPasswordLink")}</_0x44b986></div><_0x7255e7 id="password" required={true} value={_0x56d9a7} onChange={_0x5d3256} autoComplete="current-password" /></div><S disabled={_0x549496} loading={_0x531a36} errorList={_0x2dc48f} errorTitle={_0x58596e("auth.completeForm")} errorDescription={_0x58596e("auth.loginFormErrorDesc")}>{_0x58596e("auth.login")}</S></form><div className="mt-4 text-center text-sm">{_0x58596e("auth.noAccount")} <_0x44b986 to={_0x23bcd1 ? "/register?add_account=true" : "/register"} className="underline">{_0x58596e("auth.register")}</_0x44b986></div>{_0x36d547 && <_0x3e5c27 isOpen={_0x1e0736} onClose={_0x3ac1ec} onVerify={_0x6b88ff} twoFactorType={_0x36d547.twoFactorMethod} isLoading={_0x21d868} userId={_0x36d547.userId} isLoginMode={true} />}{_0xe572d5 && <_0x440064 isOpen={_0x358ad9} onClose={_0x28efa9} onVerify={_0x1a3066} onResend={_0x46f91f} email={_0x54517a} otpExpiresIn={_0xe572d5.otp_expires_in} isLoading={_0x1a7c3a} type="login" />}<_0x3d0822 isOpen={_0xdaa836} onClose={() => _0x131368(false)} onSubmit={_0x273053} message={_0x3f586a} /><_0x41be61 isOpen={_0x532a6e} onClose={() => _0x3f38b2(false)} onSubmit={_0x3dec6a} message={_0x162714} /><_0x174b1f isOpen={_0x3648f7} onClose={() => {
        _0x52d327(false);
        _0x1f8694(null);
      }} onVerify={_0x339936 => {
        _0x554928(_0x339936);
        _0x52d327(false);
        if (_0x1c7230 === "login") {
          _0x538792(_0x339936);
        } else if (_0x1c7230 === "google" && _0xfcef5f) {
          _0xe84700(_0xfcef5f, _0x339936);
        }
        _0x1f8694(null);
      }} /><_0x174b1f isOpen={_0x116b81} onClose={() => {
        _0x3c694b(false);
        _0x4a9f94(null);
      }} onVerify={_0x46c0c2 => {
        _0x3c694b(false);
        if (_0x5e6185) {
          _0x146726(_0x5e6185, _0x46c0c2);
        }
        _0x4a9f94(null);
      }} /></_0x2aabf8>;
  }
};
export { E as default };