import { b as _0x1d120e, r as _0x405d83, P as _0x25af9f, j as _0x4fd64d } from "./index-cQfEKR1W.js";
import { c as _0x1a09a5 } from "./clipboard-BQ9qambq.js";
import { K as _0x24d1e1 } from "./key-gGt-5vdN.js";
import { D as _0x2ebbf2 } from "./download-CURuSoyZ.js";
const d = ({
  backupCodes: _0x1e32c8,
  onCopy: _0x305cbe,
  onDownload: _0x45f7b8,
  showWarning: _0x5176e0 = true
}) => {
  const {
    t: _0x365871
  } = _0x1d120e("privacy");
  const _0xc8a329 = _0x405d83.useCallback(async () => {
    if (!_0x1e32c8 || _0x1e32c8.length === 0) {
      return;
    }
    const _0x88adf5 = _0x1e32c8.join(", ");
    if (await _0x1a09a5(_0x88adf5)) {
      _0x25af9f.success(_0x365871("backupCodes.codesCopied"));
      _0x305cbe?.();
    } else {
      _0x25af9f.error(_0x365871("backupCodes.copyFailed"));
    }
  }, [_0x1e32c8, _0x305cbe, _0x365871]);
  const _0x148e14 = _0x405d83.useCallback(async () => {
    if (!_0x1e32c8 || _0x1e32c8.length === 0) {
      return;
    }
    const _0x5abd1 = _0x365871("backupCodes.fileTitle") + "\n========================\n" + _0x365871("backupCodes.fileCreatedDate", {
      date: new Date().toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })
    }) + "\n\n" + _0x365871("backupCodes.fileKeepSafe") + "\n" + _0x365871("backupCodes.fileOneTimeUse") + "\n\n" + _0x365871("backupCodes.fileYourCodes") + "\n" + _0x1e32c8.map((_0x4a2aef, _0x4bc903) => _0x4bc903 + 1 + ". " + _0x4a2aef).join("\n") + "\n\n========================\n" + _0x365871("backupCodes.fileKeepSecure");
    try {
      const _0x4a32a6 = new Blob([_0x5abd1], {
        type: "text/plain;charset=utf-8"
      });
      const _0x47ec7a = URL.createObjectURL(_0x4a32a6);
      const _0x413445 = document.createElement("a");
      _0x413445.href = _0x47ec7a;
      _0x413445.download = "jubbio-backup-codes-" + new Date().toISOString().split("T")[0] + ".txt";
      document.body.appendChild(_0x413445);
      _0x413445.click();
      document.body.removeChild(_0x413445);
      URL.revokeObjectURL(_0x47ec7a);
      _0x25af9f.success(_0x365871("backupCodes.codesDownloaded"));
      _0x45f7b8?.();
    } catch (_0x564905) {
      console.error("İndirme/Paylaşım hatası:", _0x564905);
      if (_0x564905?.message?.includes("cancel")) {
        return;
      }
      _0x25af9f.error(_0x365871("backupCodes.operationFailed"));
    }
  }, [_0x1e32c8, _0x45f7b8, _0x365871]);
  return <div className="space-y-4"><div className="p-4 rounded-lg border border-orange-500/20 bg-orange-500/5"><div className="flex items-start gap-3"><div className="flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/30"><_0x24d1e1 className="w-4 h-4 text-orange-400" /></div><div className="flex-1"><h3 className="text-sm font-semibold text-orange-200 mb-2">{_0x365871("backupCodes.saveYourCodes")}</h3>{_0x5176e0 && <p className="text-xs text-orange-300/80 leading-relaxed mb-3">{_0x365871("backupCodes.codesShownOnce")}</p>}<div className="bg-surface-overlay/40 border border-border-default rounded-lg p-3"><div className="grid grid-cols-2 gap-2 text-xs font-mono text-text-secondary">{_0x1e32c8.map((_0x253a2b, _0x6a5d47) => <div className="p-2 bg-surface-inset/50 rounded text-center" key={_0x6a5d47}>{_0x253a2b}</div>)}</div><div className="mt-3 flex gap-2"><button onClick={_0xc8a329} className="flex-1 py-2 px-3 text-xs font-medium text-orange-200 bg-orange-500/20 border border-orange-500/30 rounded hover:bg-orange-500/30 active:bg-orange-500/40 transition-colors">{_0x365871("backupCodes.copyAllCodes")}</button><button onClick={_0x148e14} className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-medium text-blue-200 bg-blue-500/20 border border-blue-500/30 rounded hover:bg-blue-500/30 active:bg-blue-500/40 transition-colors"><_0x2ebbf2 className="size-3.5" />{_0x365871("backupCodes.download")}</button></div></div></div></div></div></div>;
};
export { d as B };