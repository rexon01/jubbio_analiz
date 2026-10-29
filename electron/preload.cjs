const { contextBridge, ipcRenderer } = require('electron');

// ============================================
// TAMPER DETECTION (Preload-side, Production Only)
// ============================================

// Safe environment check - process.env may not exist in some contexts (e.g., test VMs)
const isDev = (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'development');

// Store tamper detection results at load time
let tamperStatus = null;

/**
 * Detect tampering indicators in renderer context
 * Checks for common mod-loader signatures and monkey-patched APIs
 * REPORT ONLY - never blocks or crashes the app
 */
function detectPreloadTampering() {
  if (isDev) {
    return { detected: false, issues: [], timestamp: Date.now() };
  }

  const issues = [];

  try {
    // Check 1: Known mod-loader globals (checked after DOMContentLoaded)
    // We'll check these later via the exposed API since window isn't available yet in preload

    // Check 2: Check if native prototypes have been modified
    // This runs at preload time before any renderer scripts

    // Store original toString representations for comparison
    const nativeToString = Function.prototype.toString.call.bind(Function.prototype.toString);
    
    // Check fetch - should be native code
    try {
      const fetchStr = nativeToString(fetch);
      if (!fetchStr.includes('[native code]')) {
        issues.push({
          type: 'fetch_modified',
          detail: 'fetch function appears to be monkey-patched'
        });
      }
    } catch (e) {
      // If we can't check, it might be modified
      issues.push({
        type: 'fetch_access_error',
        detail: 'Cannot inspect fetch function'
      });
    }

    // Check XMLHttpRequest
    try {
      const xhrStr = nativeToString(XMLHttpRequest);
      if (!xhrStr.includes('[native code]')) {
        issues.push({
          type: 'xhr_modified',
          detail: 'XMLHttpRequest appears to be monkey-patched'
        });
      }
    } catch (e) {
      issues.push({
        type: 'xhr_access_error',
        detail: 'Cannot inspect XMLHttpRequest'
      });
    }

    // Check WebSocket
    try {
      const wsStr = nativeToString(WebSocket);
      if (!wsStr.includes('[native code]')) {
        issues.push({
          type: 'websocket_modified',
          detail: 'WebSocket appears to be monkey-patched'
        });
      }
    } catch (e) {
      issues.push({
        type: 'websocket_access_error',
        detail: 'Cannot inspect WebSocket'
      });
    }

    // Check localStorage/sessionStorage
    try {
      const lsGetStr = nativeToString(Storage.prototype.getItem);
      const lsSetStr = nativeToString(Storage.prototype.setItem);
      if (!lsGetStr.includes('[native code]') || !lsSetStr.includes('[native code]')) {
        issues.push({
          type: 'storage_modified',
          detail: 'Storage API appears to be monkey-patched'
        });
      }
    } catch (e) {
      // Ignore - some environments may restrict this
    }

  } catch (err) {
    // Silently ignore errors - detection should never crash the app
  }

  return {
    detected: issues.length > 0,
    issues,
    timestamp: Date.now()
  };
}

// Run initial detection at preload time
tamperStatus = detectPreloadTampering();

/**
 * Check for renderer-side mod signatures (called after DOM is ready)
 * Returns additional issues found in the renderer context
 */
function checkRendererModSignatures() {
  if (isDev) {
    return [];
  }

  const issues = [];

  try {
    // Check for known mod-loader globals
    const modGlobals = [
      { name: 'Vubbio', type: 'vubbio_global' },
      { name: 'Vencord', type: 'vencord_global' },
      { name: 'BetterDiscord', type: 'betterdiscord_global' },
      { name: 'BETTERDISCORD_CONFIG', type: 'betterdiscord_config' },
      { name: '__VUBBIO__', type: 'vubbio_internal' },
      { name: '__VENCORD__', type: 'vencord_internal' },
    ];

    for (const mod of modGlobals) {
      try {
        // Use indirect eval to check window context
        if (typeof window !== 'undefined' && window[mod.name] !== undefined) {
          issues.push({
            type: mod.type,
            detail: `Global ${mod.name} detected`
          });
        }
      } catch (e) {
        // Ignore access errors
      }
    }

    // Check for suspicious DOM elements (mod UI badges, panels)
    if (typeof document !== 'undefined') {
      const suspiciousSelectors = [
        '[data-vubbio]',
        '[data-vencord]',
        '[data-betterdiscord]',
        '#vubbio-badge',
        '#vencord-badge',
        '.vubbio-panel',
        '.vencord-panel'
      ];

      for (const selector of suspiciousSelectors) {
        try {
          if (document.querySelector(selector)) {
            issues.push({
              type: 'suspicious_dom_element',
              detail: `Element matching "${selector}" found`
            });
          }
        } catch (e) {
          // Ignore selector errors
        }
      }
    }

    // Check for modified prototype chains on key APIs
    try {
      const fetchProto = Object.getPrototypeOf(fetch);
      if (fetchProto !== Function.prototype) {
        issues.push({
          type: 'fetch_prototype_chain',
          detail: 'fetch prototype chain modified'
        });
      }
    } catch (e) {
      // Ignore
    }

  } catch (err) {
    // Silently ignore errors
  }

  return issues;
}

// ============================================
// CONTEXT BRIDGE EXPOSURE
// ============================================

// Renderer process'e güvenli API expose et
if (process.isMainFrame) {
contextBridge.exposeInMainWorld('electron', {
  platform: process.platform,
  versions: {
    node: process.versions.node,
    chrome: process.versions.chrome,
    electron: process.versions.electron
  },
  // Tamper detection status (report only, never blocks)
  tamperStatus: {
    get: () => {
      // Combine preload-time detection with renderer-side checks
      const rendererIssues = checkRendererModSignatures();
      const combined = {
        detected: tamperStatus.detected || rendererIssues.length > 0,
        issues: [...tamperStatus.issues, ...rendererIssues],
        timestamp: tamperStatus.timestamp,
        checkedAt: Date.now()
      };
      return combined;
    },
    // Allow renderer to report status back to main process
    report: () => {
      const status = {
        detected: tamperStatus.detected,
        issues: [...tamperStatus.issues, ...checkRendererModSignatures()],
        timestamp: Date.now()
      };
      return ipcRenderer.invoke('report-renderer-tamper-status', status);
    }
  },
  // App ready signal — tells main process to show the window
  appReady: () => ipcRenderer.send('app-ready'),
  // Window controls
  minimize: () => ipcRenderer.send('window-minimize'),
  maximize: () => ipcRenderer.send('window-maximize'),
  close: () => ipcRenderer.send('window-close'),
  isMaximized: () => ipcRenderer.invoke('window-is-maximized'),
  isFocused: () => ipcRenderer.invoke('window-is-focused'),
  // Fullscreen controls
  setFullScreen: (flag) => ipcRenderer.invoke('window-set-fullscreen', flag),
  isFullScreen: () => ipcRenderer.invoke('window-is-fullscreen'),
  // Screen capture sources
  getScreenSources: async (types) => {
    return ipcRenderer.invoke('get-screen-sources', types);
  },
  // Set pending screen share source (for display media handler)
  setPendingScreenShare: (sourceId, withAudio = false) => {
    return ipcRenderer.invoke('set-pending-screen-share', sourceId, withAudio);
  },
  // Thumbar controls
  setThumbarState: (state) => ipcRenderer.send('update-thumbar-buttons', state),
  onThumbarAction: (callback) => {
    const handler = (event, action) => callback(action);
    ipcRenderer.on('thumbar-action', handler);
    return () => ipcRenderer.removeListener('thumbar-action', handler);
  },
  // System notifications
  showNotification: (options) => ipcRenderer.invoke('show-notification', options),
  onNotificationClick: (callback) => {
    const handler = (event, data) => callback(data);
    ipcRenderer.on('notification-clicked', handler);
    return () => ipcRenderer.removeListener('notification-clicked', handler);
  },
  // Auto Updater
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  checkForUpdates: () => ipcRenderer.invoke('check-for-updates'),
  downloadUpdate: () => ipcRenderer.invoke('download-update'),
  installUpdate: () => ipcRenderer.invoke('install-update'),
  onUpdateStatus: (callback) => {
    const handler = (event, data) => callback(data);
    ipcRenderer.on('update-status', handler);
    return () => ipcRenderer.removeListener('update-status', handler);
  },
  // Secure Storage
  secureStorage: {
    set: (key, value) => ipcRenderer.invoke('secure-storage-set', { key, value }),
    get: (key) => ipcRenderer.invoke('secure-storage-get', { key }),
    remove: (key) => ipcRenderer.invoke('secure-storage-remove', { key }),
    isAvailable: () => ipcRenderer.invoke('secure-storage-available')
  },
  // Auto Launch (Startup)
  autoLaunch: {
    get: () => ipcRenderer.invoke('get-auto-launch'),
    set: (enabled) => ipcRenderer.invoke('set-auto-launch', enabled),
  },
  // Open URL in default browser
  openExternal: (url) => ipcRenderer.invoke('open-external', url),
  // Google OAuth (loopback server for Electron)
  googleAuth: {
    start: (clientId) => ipcRenderer.invoke('google-oauth-start', clientId),
    onResult: (callback) => {
      const handler = (event, result) => callback(result);
      ipcRenderer.on('google-oauth-result', handler);
      return () => ipcRenderer.removeListener('google-oauth-result', handler);
    },
  },
  // Deep link handler (jubbio:// protocol)
  onDeepLink: (callback) => {
    const handler = (event, url) => callback(url);
    ipcRenderer.on('deep-link', handler);
    return () => ipcRenderer.removeListener('deep-link', handler);
  },
  // Titlebar overlay color (Windows)
  setTitleBarOverlay: (options) => ipcRenderer.invoke('set-titlebar-overlay', options),
  // Global Input Hook (for push-to-talk when app is not focused)
  globalHook: {
    start: () => ipcRenderer.invoke('global-hook-start'),
    stop: () => ipcRenderer.invoke('global-hook-stop'),
    setPTTKey: (combo) => ipcRenderer.invoke('global-hook-set-ptt-key', combo),
    setMuteKey: (combo) => ipcRenderer.invoke('global-hook-set-mute-key', combo),
    setDeafenKey: (combo) => ipcRenderer.invoke('global-hook-set-deafen-key', combo),
    onPTT: (callback) => {
      const handler = (event, active) => callback(active);
      ipcRenderer.on('global-ptt', handler);
      return () => ipcRenderer.removeListener('global-ptt', handler);
    },
    onMuteToggle: (callback) => {
      const handler = () => callback();
      ipcRenderer.on('global-mute-toggle', handler);
      return () => ipcRenderer.removeListener('global-mute-toggle', handler);
    },
    onDeafenToggle: (callback) => {
      const handler = () => callback();
      ipcRenderer.on('global-deafen-toggle', handler);
      return () => ipcRenderer.removeListener('global-deafen-toggle', handler);
    },
  },
  // Game Activity - Process Scanner
  getRunningProcesses: () => ipcRenderer.invoke('get-running-processes'),
  verifyGameProcesses: candidates => ipcRenderer.invoke('verify-game-processes', candidates),
  releaseGameProcessChecks: () => ipcRenderer.invoke('release-game-process-checks'),
  getRunningProcessesWithTitles: () => ipcRenderer.invoke('get-running-processes-with-titles'),
  // Foreground app detection (for passive overlay)
  getForegroundAppInfo: () => ipcRenderer.invoke('get-foreground-app-info'),
  // Overlay
  overlay: {
    show: () => ipcRenderer.invoke('overlay-show'),
    hide: () => ipcRenderer.invoke('overlay-hide'),
    isVisible: () => ipcRenderer.invoke('overlay-is-visible'),
    updateState: (state) => ipcRenderer.invoke('overlay-update-state', state),
    setPosition: (position) => ipcRenderer.invoke('overlay-set-position', position),
    registerShortcut: (accelerator) => ipcRenderer.invoke('overlay-register-shortcut', accelerator),
    unregisterShortcut: () => ipcRenderer.invoke('overlay-unregister-shortcut'),
    onToggled: (callback) => {
      const handler = (event, visible) => callback(visible);
      ipcRenderer.on('overlay-toggled', handler);
      return () => ipcRenderer.removeListener('overlay-toggled', handler);
    },
    onControl: (callback) => {
      const handler = (event, action) => callback(action);
      ipcRenderer.on('overlay-control', handler);
      return () => ipcRenderer.removeListener('overlay-control', handler);
    },
    onNavigateServer: (callback) => {
      const handler = (event, serverId) => callback(serverId);
      ipcRenderer.on('overlay-navigate-server', handler);
      return () => ipcRenderer.removeListener('overlay-navigate-server', handler);
    },
    onRequestGuilds: (callback) => {
      const handler = () => callback();
      ipcRenderer.on('overlay-request-guilds', handler);
      return () => ipcRenderer.removeListener('overlay-request-guilds', handler);
    },
    notifyNavigateDone: () => ipcRenderer.send('overlay-navigate-done'),
  },
  // Passive Overlay (click-through, always visible when in voice)
  passiveOverlay: {
    setConnected: (connected) => ipcRenderer.invoke('passive-overlay-set-connected', connected),
    setEnabled: (enabled) => ipcRenderer.invoke('passive-overlay-set-enabled', enabled),
  },
  // Overlay Chat Widget
  overlayChat: {
    setConfig: (config) => ipcRenderer.invoke('overlay-chat-set-config', config),
    sendMessage: (message) => ipcRenderer.invoke('overlay-chat-new-message', message),
    setPosition: (pos) => ipcRenderer.send('overlay-chat-position', pos),
    onRequestChannels: (callback) => {
      const handler = (event, guildId) => callback(guildId);
      ipcRenderer.on('overlay-chat-request-channels', handler);
      return () => ipcRenderer.removeListener('overlay-chat-request-channels', handler);
    },
    sendChannels: (channels) => ipcRenderer.send('overlay-chat-channels-response', channels),
    onConfigChanged: (callback) => {
      const handler = (event, config) => callback(config);
      ipcRenderer.on('overlay-chat-config-changed', handler);
      return () => ipcRenderer.removeListener('overlay-chat-config-changed', handler);
    },
    onSaveSettings: (callback) => {
      const handler = (event, config) => callback(config);
      ipcRenderer.on('overlay-chat-save-settings', handler);
      return () => ipcRenderer.removeListener('overlay-chat-save-settings', handler);
    },
  },
});

}
