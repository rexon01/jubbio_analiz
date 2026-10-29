'use strict';
function trustedMainOrigin(value, development = false) {
  try {
    const url = new URL(value);
    if (url.username || url.password) return false;
    if (url.protocol === 'app:' && url.host === '.') return true;
    return development && url.protocol === 'http:' && url.hostname === 'localhost' && url.port === '5173';
  } catch { return false; }
}
function trustedMainRequest(webContents, mainContents, details, development = false) {
  return !!mainContents && webContents === mainContents && details?.isMainFrame === true &&
    trustedMainOrigin(details.requestingUrl || details.securityOrigin, development);
}
function trustedMainSender(event, mainContents, development = false) {
  return !!mainContents && !mainContents.isDestroyed() && event?.sender === mainContents &&
    event.senderFrame === mainContents.mainFrame && trustedMainOrigin(event.senderFrame?.url, development);
}
module.exports = { trustedMainOrigin, trustedMainRequest, trustedMainSender };
