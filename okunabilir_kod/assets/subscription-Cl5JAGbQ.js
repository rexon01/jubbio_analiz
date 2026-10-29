function t(_0x1354f3) {
  return (_0x1354f3.interval === "yearly" ? 12 : 1) * (_0x1354f3.intervalCount || 1);
}
function e(_0x30fc4b, _0xefdfb8, _0x232011 = new Date()) {
  const _0xd59fc2 = new Date(_0x30fc4b && Date.parse(_0x30fc4b) > _0x232011.getTime() ? _0x30fc4b : _0x232011);
  const _0x1ccbb5 = _0xd59fc2.getUTCDate();
  _0xd59fc2.setUTCDate(1);
  _0xd59fc2.setUTCMonth(_0xd59fc2.getUTCMonth() + _0xefdfb8);
  const _0x4cb51f = new Date(Date.UTC(_0xd59fc2.getUTCFullYear(), _0xd59fc2.getUTCMonth() + 1, 0)).getUTCDate();
  _0xd59fc2.setUTCDate(Math.min(_0x1ccbb5, _0x4cb51f));
  return _0xd59fc2.toISOString();
}
function n(_0x3ab560, _0x48bb65) {
  return _0x3ab560.pricing.find(_0x5ad33e => t(_0x5ad33e) === _0x48bb65) ?? null;
}
function r(_0x30c318) {
  const _0x44ecd3 = _0x30c318.plan.pricing.find(_0x31aa6b => _0x31aa6b.id === _0x30c318.pricingId);
  if (_0x44ecd3) {
    return t(_0x44ecd3);
  }
  const _0x3b18bd = (Date.parse(_0x30c318.currentPeriodEnd) - Date.parse(_0x30c318.currentPeriodStart)) / 86400000;
  if (_0x3b18bd > 150) {
    return 12;
  } else if (_0x3b18bd > 45) {
    return 3;
  } else {
    return 1;
  }
}
function i(_0x268465, _0x42bedd) {
  if (_0x268465.tier === "free" || _0x268465.pricing.length === 0) {
    return null;
  } else {
    return _0x268465.pricing.find(_0x2ffcf1 => _0x2ffcf1.interval === _0x42bedd && (_0x2ffcf1.intervalCount || 1) === 1) ?? null;
  }
}
function a(_0x57d4ed, _0x416880, _0x4d6484) {
  if (_0x4d6484) {
    return _0x4d6484;
  }
  if (_0x57d4ed === 0) {
    return "Free";
  }
  const _0xb5cec1 = Math.floor(_0x57d4ed / 100);
  const _0x32d552 = (_0x57d4ed % 100).toString().padStart(2, "0");
  switch (_0x416880.toUpperCase()) {
    case "TRY":
      return "₺" + _0xb5cec1 + "," + _0x32d552;
    case "USD":
      return "$" + _0xb5cec1 + "." + _0x32d552;
    case "EUR":
      return "€" + _0xb5cec1 + "." + _0x32d552;
    case "GBP":
      return "£" + _0xb5cec1 + "." + _0x32d552;
    default:
      return _0xb5cec1 + "." + _0x32d552 + " " + _0x416880;
  }
}
function u(_0x4efa96) {
  return !!_0x4efa96 && (_0x4efa96.status === "active" || _0x4efa96.status === "cancelled" && !!_0x4efa96.currentPeriodEnd && new Date(_0x4efa96.currentPeriodEnd) > new Date());
}
function c(_0x291792) {
  return !!_0x291792 && _0x291792.planId !== "free" && u(_0x291792);
}
export { a as formatPrice, i as getPricingForInterval, n as getPricingForMonths, t as getPricingMonths, r as getSubscriptionMonths, c as hasNexusSubscription, u as isSubscriptionActive, e as previewNexusEnd };