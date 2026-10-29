const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["./CategoryGeneralSettings-De155prd.js", "./index-cQfEKR1W.js", "./index-Cm--a4Hl.css", "./input-AMyERYwJ.js", "./label-ODyS97Ju.js", "./validators-DXDy_d27.js", "./index-BUijt7wr.js", "./CategoryPermissionsSettings-IFmKMgol.js", "./separator-Ba6vNTx4.js", "./VisibilitySwitch-CMTX5ZFx.js", "./switch-lfnbGePn.js", "./soundboardFx-C2LP-Hjs.js", "./PermissionManager-DIa7EmgV.js", "./ComparisonTable-DUfwtDVZ.js", "./subscription-Cl5JAGbQ.js", "./card-Bk6R3tFg.js", "./gift-Co-azAyt.js", "./MemberSelector-COJb6MJ2.js", "./index-Bk4sqYoK.js", "./dialog-BMMpM7PR.js", "./index-yuEHo9bu.js", "./index-Oyyh46KT.js", "./minus-DgcuZCwQ.js"]) => i.map(i => d[i]);
import { R as _0x516c95, b2 as _0x4f7fa4, b as _0x506061, r, j as _0x26dea8, P as _0x95d9df, I as _0x5946db, _ as _0x325a45 } from "./index-cQfEKR1W.js";
import { ae as _0x1e141f, af as _0x3638e1 } from "./soundboardFx-C2LP-Hjs.js";
import { C as _0x1de903 } from "./ConfirmDialog-B4gIndKy.js";
import { c as _0x31eb9b } from "./validators-DXDy_d27.js";
import _0x11a10b from "./SettingPanelLayout-CUpCFf-n.js";
import "./index-BUijt7wr.js";
import "./alert-dialog-BZuoGg7O.js";
import "./index-yuEHo9bu.js";
import "./index-Oyyh46KT.js";
import "./loader-circle-CTtxa1g9.js";
import "./clipboard-BQ9qambq.js";
import "./useGlobalKeyboard-Woyx4Cai.js";
const u = ({
  className: _0x54fbda
}) => <_0x5946db icon="solar:settings-bold-duotone" className={_0x54fbda} />;
const x = ({
  className: _0x54386e
}) => <_0x5946db icon="solar:shield-bold-duotone" className={_0x54386e} />;
const _Component = _0x516c95.lazy(() => _0x325a45(() => import("./CategoryGeneralSettings-De155prd.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6]), import.meta.url));
const _Component2 = _0x516c95.lazy(() => _0x325a45(() => import("./CategoryPermissionsSettings-IFmKMgol.js"), __vite__mapDeps([7, 1, 2, 8, 9, 10, 4, 11, 6, 12, 13, 14, 15, 16, 17, 3, 18, 19, 20, 21, 22]), import.meta.url));
const b = _0x516c95.memo(({
  categoryId: _0x1c04ff,
  serverId: _0x4d3dc2,
  categoryName: _0x1e05fa,
  onCategoryDeleted: _0x54af07
}) => {
  const _0x16cc36 = _0x4f7fa4(_0x12a71d => _0x12a71d.closeCategorySettings);
  const {
    t: _0x5343b3
  } = _0x506061();
  const [_0x4633f4, _0x529b8c] = r.useState(null);
  const [_0xc270f2, _0x56885b] = r.useState(true);
  const [_0x56ddbf, _0x51779e] = r.useState(false);
  const [_0x57dd8e, _0x3e4366] = r.useState(false);
  const [_0x383fb5, _0x3fd94a] = r.useState(false);
  const [_0x2f9936, _0x1b3782] = r.useState(false);
  const _0x45aaa1 = true;
  const _0x6efb81 = r.useMemo(() => [{
    id: "general",
    label: _0x5343b3("serverSettings.categorySettings.generalTab"),
    icon: u,
    group: _0x5343b3("serverSettings.categorySettings.generalGroup")
  }, {
    id: "permissions",
    label: _0x5343b3("serverSettings.categorySettings.permissionsTab"),
    icon: x,
    group: _0x5343b3("serverSettings.categorySettings.accessGroup")
  }], [_0x5343b3]);
  const _0x37dc7c = r.useCallback(_0x52da57 => _0x52da57.split(" ").map(_0x329641 => _0x329641[0]).filter(Boolean).slice(0, 2).join("").toUpperCase(), []);
  const _0x3edc26 = r.useMemo(() => {
    const _0x49bd6e = _0x4633f4?.name || _0x1e05fa || _0x5343b3("serverSettings.categorySettings.title");
    const _0x4ef81b = _0x37dc7c(_0x49bd6e);
    return <span className="text-xs font-bold text-text-primary">{_0x4ef81b}</span>;
  }, [_0x4633f4?.name, _0x1e05fa, _0x37dc7c]);
  r.useEffect(() => {
    (async () => {
      if (_0x4d3dc2 && _0x1c04ff) {
        try {
          _0x56885b(true);
          const _0x2ba927 = await _0x3638e1(_0x4d3dc2, _0x1c04ff);
          _0x529b8c(_0x2ba927);
        } catch {} finally {
          _0x56885b(false);
        }
      }
    })();
  }, [_0x4d3dc2, _0x1c04ff]);
  r.useEffect(() => {}, [_0x45aaa1, _0x16cc36]);
  const _0x56870f = r.useRef(null);
  const _0x36a174 = r.useRef(null);
  const [_0x8280f1, _0xfa0ad8] = r.useState("general");
  const _0x43b72e = r.useCallback(async () => {
    _0x3e4366(true);
    try {
      let _0x55d4c4 = false;
      if (_0x8280f1 === "general" && _0x56870f.current) {
        const _0x2c7d93 = _0x56870f.current.getValues();
        if (!_0x2c7d93) {
          _0x95d9df.info(_0x5343b3("serverSettings.categorySettings.noChanges"));
          _0x3e4366(false);
          return;
        }
        const _0x319b08 = _0x31eb9b(_0x2c7d93.name);
        if (_0x319b08) {
          _0x95d9df.error(_0x319b08);
          _0x3e4366(false);
          return;
        }
        if (_0x4633f4 && _0x2c7d93.name !== _0x4633f4.name) {
          _0x55d4c4 = true;
          const _0x5e478d = await _0x1e141f(_0x4d3dc2, _0x1c04ff, {
            name: _0x2c7d93.name
          });
          _0x529b8c(_0x5e478d);
          _0x56870f.current?.markPristine?.(_0x5e478d);
        }
      }
      if (_0x8280f1 === "permissions" && _0x36a174.current) {
        try {
          await _0x36a174.current.savePermissions();
          _0x55d4c4 = true;
        } catch {}
      }
      if (_0x55d4c4) {
        _0x51779e(false);
      }
    } catch {} finally {
      _0x3e4366(false);
    }
  }, [_0x8280f1, _0x4633f4, _0x4d3dc2, _0x1c04ff]);
  const _0x171bbd = r.useCallback(() => {
    if (_0x8280f1 === "general") {
      _0x56870f.current?.reset?.();
    } else if (_0x8280f1 === "permissions") {
      _0x36a174.current?.reset?.();
    }
    _0x51779e(false);
  }, [_0x8280f1]);
  const _0x327ec8 = r.useCallback(_0xe889fd => <_0x26dea8.Fragment><div style={{
      display: _0xe889fd === "general" ? undefined : "none"
    }}><_Component ref={_0x56870f} categoryId={_0x1c04ff} categoryData={_0x4633f4} isLoading={_0xc270f2} onDirtyChange={_0x51779e} onValidationErrorChange={_0x1b3782} /></div><div style={{
      display: _0xe889fd === "permissions" ? undefined : "none"
    }}><_Component2 ref={_0x36a174} guildId={_0x4d3dc2} categoryId={_0x1c04ff} categoryData={_0x4633f4} onDirtyChange={_0x51779e} /></div></_0x26dea8.Fragment>, [_0x45aaa1, _0x4d3dc2, _0x1c04ff, _0x4633f4, _0xc270f2]);
  const _0x552670 = r.useCallback(async () => {
    try {
      _0x3fd94a(false);
      _0x16cc36();
      _0x54af07?.(_0x1c04ff);
    } catch {}
  }, [_0x16cc36, _0x1c04ff, _0x54af07]);
  const _0x2b6022 = r.useCallback(() => <_0x26dea8.Fragment><button onClick={() => _0x3fd94a(true)} className="flex w-full items-center gap-3 px-4 py-3 md:gap-2.5 md:p-1.5 rounded-xl md:rounded-md border border-red-500/30 bg-red-500/10 md:bg-red-500/5 text-left active:bg-red-500/20 md:hover:bg-red-500/15 transition-colors cursor-pointer"><span className="flex size-8 md:size-7 shrink-0 items-center justify-center rounded-lg md:rounded-md bg-red-500/20"><_0x5946db icon="solar:trash-bin-trash-bold-duotone" className="size-4 text-red-400" /></span><span className="flex-1 truncate text-base font-medium text-red-400">{_0x5343b3("serverSettings.categorySettings.deleteCategory")}</span></button><_0x1de903 open={_0x383fb5} onOpenChange={_0x3fd94a} onConfirm={_0x552670} variant="danger" icon={<_0x5946db icon="solar:trash-bin-trash-bold-duotone" className="size-5 text-red-400" />} title={_0x5343b3("serverSettings.categorySettings.deleteCategory")} subtitle={_0x5343b3("serverSettings.categorySettings.deleteIrreversible")} description={<_0x26dea8.Fragment><span className="font-semibold text-text-secondary break-all">{_0x4633f4?.name || _0x1e05fa || _0x5343b3("serverSettings.categorySettings.title")}</span> {_0x5343b3("serverSettings.categorySettings.deleteCategoryConfirmDesc")}<div className="mt-4 p-3 rounded-xl bg-red-500/5 border border-red-500/20"><div className="flex items-start gap-3"><div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5"><span className="text-red-500 text-xs font-bold">!</span></div><div className="flex-1"><h4 className="text-sm font-semibold text-red-400 mb-2">{_0x5343b3("serverSettings.categorySettings.onDeleteTitle")}</h4><ul className="space-y-1.5 text-sm text-text-secondary"><li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400/60" />{_0x5343b3("serverSettings.categorySettings.onDeleteRoomsUncategorized")}</li><li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400/60" />{_0x5343b3("serverSettings.categorySettings.onDeleteSettingsLost")}</li><li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-400/60" />{_0x5343b3("serverSettings.categorySettings.onDeleteRoomsRegrouped")}</li></ul></div></div></div></_0x26dea8.Fragment>} confirmText={_0x5343b3("serverSettings.categorySettings.deleteCategory")} cancelText={_0x5343b3("serverSettings.categorySettings.cancel")} /></_0x26dea8.Fragment>, [_0x383fb5, _0x4633f4?.name, _0x1e05fa, _0x552670, _0x5343b3]);
  return <_0x11a10b title={_0x4633f4?.name || _0x1e05fa || _0x5343b3("serverSettings.categorySettings.title")} entityId={_0x1c04ff} entityType="category" tabs={_0x6efb81} activeTab={_0x8280f1} onTabChange={_0xfa0ad8} renderContent={_0x327ec8} onSave={_0x43b72e} onReset={_0x171bbd} onClose={_0x16cc36} isDirty={_0x56ddbf} onDirtyChange={_0x51779e} isSaving={_0x57dd8e} hasValidationError={_0x2f9936} showDeleteButton={true} renderDeleteButton={_0x2b6022} titleIcon={_0x3edc26} titleIconContainerClass="bg-gradient-to-br from-accent-primary/20 to-accent-primary/10 border border-accent-border" />;
});
export { b as default };