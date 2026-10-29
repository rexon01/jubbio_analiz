import { b as _0x58c969, r as _0x1f8139, j as _0x52c96d } from "./index-cQfEKR1W.js";
import { bw as _0x2cc83c, t as _0x109581 } from "./AppLayout-BEBJqe9_.js";
function a({
  guildId: _0x484a5c,
  channelId: _0x114fb2,
  userId: _0x1b4ccd,
  children: _0x200b38,
  refreshInterval: _0x2f58cb = 5000
}) {
  const {
    t: _0x265c39
  } = _0x58c969();
  const [_0x535990, _0x172314] = _0x1f8139.useState("");
  const [_0x5e6b82, _0xb86b24] = _0x1f8139.useState(_0x265c39("voice.screenShare.previewLoading"));
  _0x1f8139.useEffect(() => {
    let _0x510f89;
    let _0x567b3d;
    let _0x341f49 = false;
    let _0x92cc5 = "";
    let _0x1ef4d9 = 0;
    const _0x278100 = () => {
      if (_0x92cc5) {
        URL.revokeObjectURL(_0x92cc5);
      }
      _0x92cc5 = "";
      if (!_0x341f49) {
        _0x172314("");
      }
    };
    const _0x39a979 = async () => {
      if (_0x341f49 || document.visibilityState !== "visible") {
        return;
      }
      const _0x3e73d0 = ++_0x1ef4d9;
      _0x510f89?.abort();
      _0x510f89 = new AbortController();
      try {
        const _0x15ee8e = await _0x109581.get(_0x484a5c, _0x114fb2, _0x1b4ccd, _0x510f89.signal);
        if (_0x341f49 || _0x3e73d0 !== _0x1ef4d9) {
          return;
        }
        _0x278100();
        _0x92cc5 = URL.createObjectURL(_0x15ee8e);
        _0x172314(_0x92cc5);
        _0xb86b24("");
      } catch (_0x3be1a7) {
        if (_0x341f49 || _0x3e73d0 !== _0x1ef4d9) {
          return;
        }
        _0x278100();
        const _0x5849a1 = _0x3be1a7.response?.status;
        _0xb86b24(_0x265c39(_0x5849a1 === 401 || _0x5849a1 === 403 ? "voice.screenShare.previewForbidden" : "voice.screenShare.streamStarted"));
        if (_0x5849a1 === 401 || _0x5849a1 === 403) {
          return;
        }
      }
      if (!_0x341f49) {
        _0x567b3d = setTimeout(_0x39a979, _0x2f58cb);
      }
    };
    const _0x5df405 = () => {
      ++_0x1ef4d9;
      _0x510f89?.abort();
      clearTimeout(_0x567b3d);
      _0x278100();
      if (document.visibilityState === "visible") {
        _0x39a979();
      }
    };
    document.addEventListener("visibilitychange", _0x5df405);
    _0x39a979();
    return () => {
      _0x341f49 = true;
      ++_0x1ef4d9;
      _0x510f89?.abort();
      clearTimeout(_0x567b3d);
      document.removeEventListener("visibilitychange", _0x5df405);
      _0x278100();
    };
  }, [_0x484a5c, _0x114fb2, _0x1b4ccd, _0x265c39, _0x2f58cb]);
  return <div className="group/preview relative grid aspect-video place-items-center overflow-hidden rounded-md bg-black">{_0x535990 ? <_0x52c96d.Fragment><img src={_0x535990} alt={_0x265c39("voice.screenShare.previewAlt")} className="h-full w-full object-contain" /><span className="pointer-events-none absolute right-2 top-2 z-10 rounded bg-red-500 px-1.5 py-0.5 text-[9px] font-bold tracking-wide text-white">{_0x265c39("voice.screenShare.live")}</span><div className="absolute inset-0 flex items-center justify-center bg-black/45 opacity-0 transition-opacity duration-150 group-hover/preview:opacity-100 group-focus-within/preview:opacity-100">{_0x200b38}</div></_0x52c96d.Fragment> : <div className="flex flex-col items-center gap-2 px-4 py-3 text-center"><_0x2cc83c aria-hidden={true} className="size-7 text-text-tertiary" /><p role="status" className="text-xs text-text-secondary">{_0x5e6b82}</p>{_0x200b38}</div>}</div>;
}
export { a as P };