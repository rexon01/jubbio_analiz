const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./index.esm-BuGQSi5y.js", "./index-cQfEKR1W.js", "./index-Cm--a4Hl.css"]) => i.map(i => d[i]);
import { R as _0x1a1a82, j as _0x495991, r as _0x231e40, w as _0x1dada3, b as _0x317c0c, c as _0x156bcc, _ as _0x3bf0bf } from "./index-cQfEKR1W.js";
import { S as _0x306135 } from "./submit-button-B2LF_DTf.js";
const a = "610591518773-8uft5h7qflg1748llood568pusluihqd.apps.googleusercontent.com";
const u = _0x1dada3();
const _Component2 = ({
  onIdToken: _0x10879d,
  disabled: _0x376bde = false,
  isLoading: _0x435991 = false
}) => {
  const {
    t: _0x137fea
  } = _0x317c0c();
  const [_0xa3ffac, _0x3080d4] = _0x231e40.useState(false);
  const _0x2ec917 = _0x231e40.useRef(null);
  const _0x4b36c0 = _0x376bde || _0x435991 || _0xa3ffac;
  _0x231e40.useEffect(() => () => {
    _0x2ec917.current?.();
  }, []);
  const _0x513a5d = _0x231e40.useCallback(async () => {
    if (!_0x4b36c0 && window.electron?.googleAuth) {
      _0x3080d4(true);
      try {
        const _0xc482a4 = new Promise(_0x325e65 => {
          const _0x1e68aa = window.electron.googleAuth.onResult(_0x1a5b60 => {
            _0x1e68aa();
            _0x2ec917.current = null;
            _0x325e65(_0x1a5b60);
          });
          _0x2ec917.current = _0x1e68aa;
        });
        const _0x5cadc6 = new Promise(_0x52cccc => {
          setTimeout(() => _0x52cccc({
            error: "timeout"
          }), 180000);
        });
        const _0x418f7d = await window.electron.googleAuth.start(a);
        if (!_0x418f7d.success) {
          console.error("[GoogleOAuth] Failed to start loopback server:", _0x418f7d.error);
          _0x3080d4(false);
          return;
        }
        const _0x58df35 = await Promise.race([_0xc482a4, _0x5cadc6]);
        if (_0x58df35.error) {
          console.error("[GoogleOAuth] Auth error:", _0x58df35.error);
          _0x3080d4(false);
          return;
        }
        if (_0x58df35.code) {
          const _0x835a2d = "https://gateway.jubbio.com";
          const _0x540fc5 = await _0x156bcc.post(_0x835a2d + "/api/v1/auth/google/exchange", {
            code: _0x58df35.code,
            redirect_uri: _0x418f7d.redirectUri,
            code_verifier: _0x58df35.codeVerifier
          });
          const _0x55e261 = _0x540fc5.data?.id_token;
          if (_0x55e261) {
            _0x10879d(_0x55e261);
          } else {
            console.error("[GoogleOAuth] No id_token in exchange response");
          }
        }
      } catch (_0x4258f2) {
        console.error("[GoogleOAuth] Error:", _0x4258f2);
      } finally {
        _0x3080d4(false);
      }
    }
  }, [_0x4b36c0, _0x10879d]);
  return <_0x306135 type="button" variant="google" loading={_0xa3ffac || _0x435991} disabled={_0x4b36c0} onClick={_0x513a5d}>{_0x137fea("auth.google.continueWith")}</_0x306135>;
};
const _Component3 = _0x231e40.lazy(() => _0x3bf0bf(() => import("./index.esm-BuGQSi5y.js"), __vite__mapDeps([0, 1, 2]), import.meta.url).then(_0x26aab0 => ({
  default: function (_0x325d22) {
    return <_Component {..._0x325d22} mod={_0x26aab0} />;
  }
})));
const _Component = ({
  onIdToken: _0x9cd54f,
  disabled: _0x57de55 = false,
  isLoading: _0x11241f = false,
  mod: _0x368984
}) => {
  const {
    t: _0x53d701,
    i18n: _0x13218d
  } = _0x317c0c();
  const _0x3c742f = _0x231e40.useRef(null);
  const [_0x455364, _0xf47f9a] = _0x231e40.useState(false);
  const _0x2622e4 = _0x57de55 || _0x11241f;
  const {
    GoogleOAuthProvider: _0x420524,
    GoogleLogin: _0x5e597a
  } = _0x368984;
  const _0x235393 = _0x231e40.useCallback(() => {
    if (!_0x2622e4) {
      _0xf47f9a(true);
    }
  }, [_0x2622e4]);
  const _0x21d211 = _0x231e40.useCallback(() => {
    _0xf47f9a(false);
  }, []);
  _0x231e40.useEffect(() => {
    if (_0x455364) {
      const _0x24feeb = () => _0xf47f9a(false);
      window.addEventListener("mouseup", _0x24feeb);
      window.addEventListener("touchend", _0x24feeb);
      return () => {
        window.removeEventListener("mouseup", _0x24feeb);
        window.removeEventListener("touchend", _0x24feeb);
      };
    }
  }, [_0x455364]);
  return <_0x420524 clientId={a}><div className="relative w-full h-11" ref={_0x3c742f} onMouseDown={_0x235393} onTouchStart={_0x235393} onMouseUp={_0x21d211} onTouchEnd={_0x21d211} onMouseLeave={_0x21d211}><div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl opacity-[0.011] z-10" style={{
        pointerEvents: _0x2622e4 ? "none" : "auto"
      }}><_0x5e597a onSuccess={_0x5a74f8 => {
          if (_0x5a74f8.credential) {
            _0x9cd54f(_0x5a74f8.credential);
          }
        }} onError={() => console.error("[GoogleSignIn] Login failed")} theme="outline" size="large" text="continue_with" shape="rectangular" width={_0x3c742f.current?.offsetWidth?.toString() || "400"} locale={_0x13218d.language} /></div><div className="absolute inset-0 pointer-events-none"><_0x306135 type="button" variant="google" loading={_0x11241f} disabled={_0x2622e4} isPressed={_0x455364}>{_0x53d701("auth.google.continueWith")}</_0x306135></div></div></_0x420524>;
};
const h = _0x1a1a82.memo(_0x48a2d8 => u ? <_Component2 {..._0x48a2d8} /> : <_0x231e40.Suspense fallback={<_0x306135 type="button" variant="google" loading={true} disabled={true}>Loading...</_0x306135>}><_Component3 {..._0x48a2d8} /></_0x231e40.Suspense>);
export { h as default };