import { t as _0x3a2b2f, R as _0x27016a, b as _0x2a3dd1, r, j as _0x255e20, aT as _0x510506 } from "./index-cQfEKR1W.js";
import { R as _0x545067 } from "./ReportDialog-ByLH3UTW.js";
import { a as _0x2f4126 } from "./report-SxkUMari.js";
import { M as _0x2e04a7 } from "./message-square-warning-CLoriRUW.js";
import { S as _0x1f90d2 } from "./shield-off-BIo5sBqK.js";
import { H as _0x117a1d } from "./heart-BTCd1Bwb.js";
import { U as _0x4d175c } from "./user-x-D7hkQEsg.js";
import { C as _0x10123f } from "./circle-question-mark-PWsoYL5a.js";
/**
* @license lucide-react v0.535.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const _Component2 = _0x3a2b2f("baby", [["path", {
  d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",
  key: "1u7htd"
}], ["path", {
  d: "M15 12h.01",
  key: "1k8ypt"
}], ["path", {
  d: "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",
  key: "11xh7x"
}], ["path", {
  d: "M9 12h.01",
  key: "157uk2"
}]]);
const _Component = _0x3a2b2f("shield-alert", [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
  key: "oel41y"
}], ["path", {
  d: "M12 8v4",
  key: "1got3b"
}], ["path", {
  d: "M12 16h.01",
  key: "1drbdi"
}]]);
const _Component3 = _0x3a2b2f("swords", [["polyline", {
  points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5",
  key: "1hfsw2"
}], ["line", {
  x1: "13",
  x2: "19",
  y1: "19",
  y2: "13",
  key: "1vrmhu"
}], ["line", {
  x1: "16",
  x2: "20",
  y1: "16",
  y2: "20",
  key: "1bron3"
}], ["line", {
  x1: "19",
  x2: "21",
  y1: "21",
  y2: "19",
  key: "13pww6"
}], ["polyline", {
  points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5",
  key: "hbey2j"
}], ["line", {
  x1: "5",
  x2: "9",
  y1: "14",
  y2: "18",
  key: "1hf58s"
}], ["line", {
  x1: "7",
  x2: "4",
  y1: "17",
  y2: "20",
  key: "pidxm4"
}], ["line", {
  x1: "3",
  x2: "5",
  y1: "19",
  y2: "21",
  key: "1pehsh"
}]]);
const u = [{
  value: "spam",
  labelKey: "report.reasons.spam",
  descKey: "report.reasons.spamDesc",
  icon: <_0x510506 className="size-4" />
}, {
  value: "harassment",
  labelKey: "report.reasons.harassment",
  descKey: "report.reasons.harassmentDesc",
  icon: <_0x2e04a7 className="size-4" />
}, {
  value: "hate_speech",
  labelKey: "report.reasons.hateSpeech",
  descKey: "report.reasons.hateSpeechDesc",
  icon: <_Component className="size-4" />
}, {
  value: "nsfw",
  labelKey: "report.reasons.nsfw",
  descKey: "report.reasons.nsfwDesc",
  icon: <_0x1f90d2 className="size-4" />
}, {
  value: "underage",
  labelKey: "report.reasons.underage",
  descKey: "report.reasons.underageDesc",
  icon: <_Component2 className="size-4" />
}, {
  value: "self_harm",
  labelKey: "report.reasons.selfHarm",
  descKey: "report.reasons.selfHarmDesc",
  icon: <_0x117a1d className="size-4" />
}, {
  value: "violence",
  labelKey: "report.reasons.violence",
  descKey: "report.reasons.violenceDesc",
  icon: <_Component3 className="size-4" />
}, {
  value: "impersonation",
  labelKey: "report.reasons.impersonation",
  descKey: "report.reasons.impersonationDesc",
  icon: <_0x4d175c className="size-4" />
}, {
  value: "other",
  labelKey: "report.reasons.other",
  descKey: "report.reasons.otherDesc",
  icon: <_0x10123f className="size-4" />
}];
const b = _0x27016a.memo(({
  open: _0x9fb891,
  onOpenChange: _0x4f4f62,
  messageId: _0x351cbb,
  reportedUserId: _0x2eda0b,
  guildId: _0x2d7667,
  channelId: _0x50a5bd
}) => {
  const {
    t: _0xddd98c
  } = _0x2a3dd1();
  const _0x40610e = r.useCallback(async (_0x1c9535, _0x568b0a) => {
    await _0x2f4126(_0x351cbb, {
      reported_user_id: _0x2eda0b,
      reason: _0x1c9535,
      description: _0x568b0a,
      guild_id: _0x2d7667,
      channel_id: _0x50a5bd
    });
  }, [_0x351cbb, _0x2eda0b, _0x2d7667, _0x50a5bd]);
  return <_0x545067 open={_0x9fb891} onOpenChange={_0x4f4f62} title={_0xddd98c("report.title")} subtitle={_0xddd98c("report.subtitle")} reasonOptions={u} onSubmit={_0x40610e} />;
});
export { b as R, u as a };