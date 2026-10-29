const { app, BrowserWindow, ipcMain, Tray, Menu, protocol, net, Notification, safeStorage, globalShortcut, shell } = require('electron');
const { autoUpdater } = require('electron-updater');
const { uIOhook, UiohookKey } = require('uiohook-napi');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const { trustedMainOrigin, trustedMainSender } = require('./app-permissions.cjs');

function assertMainSender(event) {
  if (!trustedMainSender(event, mainWindow?.webContents, isDev)) throw new Error('Untrusted IPC sender');
}
function assertStorageKey(key) {
  if (typeof key !== 'string' || !key || key.length > 256 || ['__proto__', 'constructor', 'prototype'].includes(key)) throw new Error('Invalid storage key');
}

// Secure storage için dosya yolu
const SECURE_STORAGE_FILE = path.join(app.getPath('userData'), 'secure-storage.enc');

const isDev = process.env.NODE_ENV === 'development';
const isMSStore = !!process.windowsStore;

// Windows'ta bildirim uygulama adını ayarla
if (process.platform === 'win32') {
  // ponytail: MS Store AUMID'i Windows tarafından otomatik ayarlanıyor
  // Normal build için manuel set ediyoruz
  // ceiling: MS Store'da bu satır yok sayılıyor, Windows paketten alıyor
  if (!isMSStore) {
    app.setAppUserModelId('com.jubbio.desktop');
  }
  // MS Store build'inde Windows otomatik olarak doğru AUMID'i kullanıyor
}

// Uygulama adını ayarla (görev çubuğu için)
app.name = 'Jubbio';

// ============================================
// ANTI-TAMPER & SECURITY (Production Only)
// ============================================

// Expected hash embedded at build time (placeholder - real hash set by build process)
// This allows detecting if preload.cjs has been modified post-build
const EXPECTED_PRELOAD_HASH = process.env.EXPECTED_PRELOAD_HASH || null;

function setupSecurityChecks() {
  if (isDev) return;

  const inspectArgs = process.argv.some(arg => 
    arg.includes('--inspect') || 
    arg.includes('--remote-debugging-port')
  );
  
  if (inspectArgs) {
    console.error('Debugging not allowed in production');
    app.quit();
    return;
  }

  const preloadPath = path.join(__dirname, 'preload.cjs');
  if (fs.existsSync(preloadPath)) {
    const preloadContent = fs.readFileSync(preloadPath);
    const preloadHash = crypto.createHash('sha256').update(preloadContent).digest('hex');
    process.env.PRELOAD_HASH = preloadHash;
  }
}

/**
 * Detect tampering indicators in main process
 * Returns an object with detected issues (REPORT ONLY - never blocks app)
 */
function detectTampering() {
  const issues = [];

  try {
    // Check 1: Preload hash mismatch (if expected hash is set)
    if (EXPECTED_PRELOAD_HASH && process.env.PRELOAD_HASH) {
      if (process.env.PRELOAD_HASH !== EXPECTED_PRELOAD_HASH) {
        issues.push({
          type: 'preload_hash_mismatch',
          expected: EXPECTED_PRELOAD_HASH.substring(0, 16) + '...',
          actual: process.env.PRELOAD_HASH.substring(0, 16) + '...'
        });
      }
    }

    // Check 2: Suspicious environment variables (common mod loader patterns)
    const suspiciousEnvVars = ['VUBBIO_ENABLED', 'VENCORD_ENABLED', 'BD_ENABLED', 'BETTERDISCORD'];
    for (const envVar of suspiciousEnvVars) {
      if (process.env[envVar]) {
        issues.push({
          type: 'suspicious_env_var',
          name: envVar
        });
      }
    }

    // Check 3: Suspicious command line arguments
    const suspiciousArgs = ['--vubbio', '--vencord', '--betterdiscord', '--inject', '--mod'];
    for (const arg of process.argv) {
      const lowerArg = arg.toLowerCase();
      for (const suspicious of suspiciousArgs) {
        if (lowerArg.includes(suspicious)) {
          issues.push({
            type: 'suspicious_arg',
            arg: arg.substring(0, 50) // Truncate long args
          });
          break;
        }
      }
    }

    // Check 4: Main process file integrity (check if main.cjs was modified)
    const mainPath = path.join(__dirname, 'main.cjs');
    if (fs.existsSync(mainPath)) {
      const mainContent = fs.readFileSync(mainPath, 'utf8');
      // Look for common injection patterns
      const injectionPatterns = [
        /require\s*\(\s*['"`]vubbio/i,
        /require\s*\(\s*['"`]vencord/i,
        /require\s*\(\s*['"`]betterdiscord/i,
        /window\.Vubbio/i,
        /window\.Vencord/i,
        /window\.BetterDiscord/i,
      ];
      for (const pattern of injectionPatterns) {
        if (pattern.test(mainContent)) {
          issues.push({
            type: 'main_injection_detected',
            pattern: pattern.source.substring(0, 30)
          });
        }
      }

      // executeJavaScript: main.cjs bunu kendisi meşru olarak kullanıyor (createWindow),
      // bu yüzden varlığını değil, beklenenden fazla çağrı olup olmadığını kontrol et.
      // NOTE: main.cjs'e yeni bir executeJavaScript çağrısı eklenirse bu sayıyı güncelle.
      const ALLOWED_EXECUTE_JS_CALLS = 1;
      const executeJsCalls = (mainContent.match(/executeJavaScript\s*\(/gi) || []).length;
      if (executeJsCalls > ALLOWED_EXECUTE_JS_CALLS) {
        issues.push({
          type: 'main_injection_detected',
          pattern: 'executeJavaScript',
          count: executeJsCalls
        });
      }
    }

  } catch (err) {
    // Silently ignore errors - detection should never crash the app
    console.error('[TamperDetect] Detection error (non-fatal):', err.message);
  }

  return {
    detected: issues.length > 0,
    issues,
    timestamp: Date.now(),
    appVersion: app.getVersion()
  };
}

/**
 * Report tampering telemetry to backend (non-blocking, fail-safe)
 * Only runs in production, silently fails on error
 */
function reportTamperTelemetry(tamperResult) {
  // Only report in production
  if (isDev) return;
  
  // Only report if issues were detected
  if (!tamperResult.detected || tamperResult.issues.length === 0) return;

  try {
    const telemetryUrl = 'https://api.jubbio.com/v1/telemetry/tamper-report';
    
    const postData = JSON.stringify({
      appVersion: tamperResult.appVersion,
      platform: process.platform,
      arch: process.arch,
      electronVersion: process.versions.electron,
      issues: tamperResult.issues,
      timestamp: tamperResult.timestamp
    });

    const request = net.request({
      method: 'POST',
      url: telemetryUrl,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    });

    // Non-blocking: don't wait for response, ignore all errors
    request.on('error', () => {
      // Silently ignore - telemetry should never affect user experience
    });

    request.on('response', () => {
      // Response received - no action needed
    });

    request.write(postData);
    request.end();

    console.log('[TamperTelemetry] Report sent (async, non-blocking)');
  } catch (err) {
    // Silently ignore all errors - telemetry must never crash the app
  }
}

/**
 * Run tamper detection after app is ready
 * Called from app-ready handler, runs asynchronously
 */
function runTamperDetection() {
  if (isDev) return;

  // Run detection asynchronously to not block startup
  setImmediate(() => {
    try {
      const result = detectTampering();
      
      if (result.detected) {
        console.log('[TamperDetect] Issues detected:', result.issues.length);
        // Report to telemetry (non-blocking)
        reportTamperTelemetry(result);
      }
      
      // Also check renderer-side tampering via IPC (if mainWindow is ready)
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.executeJavaScript(
          'window.electron && window.electron.tamperStatus ? window.electron.tamperStatus.get() : null'
        ).then((rendererStatus) => {
          if (rendererStatus && rendererStatus.detected) {
            console.log('[TamperDetect] Renderer issues detected:', rendererStatus.issues.length);
            // Combine with main process issues and report
            const combinedResult = {
              ...result,
              detected: true,
              issues: [...result.issues, ...rendererStatus.issues],
              rendererTimestamp: rendererStatus.timestamp
            };
            reportTamperTelemetry(combinedResult);
          }
        }).catch(() => {
          // Ignore errors - renderer might not have tamper status exposed yet
        });
      }
    } catch (err) {
      // Silently ignore - detection must never crash the app
      console.error('[TamperDetect] Error (non-fatal):', err.message);
    }
  });
}

// IPC handler to receive tamper status from renderer
ipcMain.handle('get-renderer-tamper-status', async (event) => {
  // This is called from renderer to report its tamper detection results
  // Return acknowledgment - actual processing happens in renderer
  return { received: true };
});

// IPC handler for renderer to report tamper status
ipcMain.handle('report-renderer-tamper-status', async (event, status) => {
  if (isDev) return { received: true };
  
  try {
    if (status && status.detected && status.issues && status.issues.length > 0) {
      console.log('[TamperDetect] Renderer reported issues:', status.issues.length);
      
      // Get main process detection results
      const mainResult = detectTampering();
      
      // Combine and report
      const combinedResult = {
        detected: true,
        issues: [...mainResult.issues, ...status.issues],
        timestamp: Date.now(),
        appVersion: app.getVersion(),
        rendererTimestamp: status.timestamp
      };
      
      reportTamperTelemetry(combinedResult);
    }
  } catch (err) {
    // Silently ignore
  }
  
  return { received: true };
});

setupSecurityChecks();

// Enable Wayland support on Linux
if (process.platform === 'linux') {
  app.commandLine.appendSwitch('enable-features', 'UseOzonePlatform');
  app.commandLine.appendSwitch('ozone-platform-hint', 'auto');
}

// Windows screen capture - enable WGC for better performance (60fps support)
if (process.platform === 'win32') {
  app.commandLine.appendSwitch('enable-usermedia-screen-capturing');
  // Prevent Windows from ducking (lowering volume of) other apps when voice is active.
  // 'ambient' tells the OS this is NOT a communications app, so it skips the
  // "reduce other apps' volume by 80%" behavior that Windows applies by default.
  app.commandLine.appendSwitch('audio-category-type', 'ambient');
}

// Screen capture stream cache
let screenCaptureStream = null;

// Register custom protocol
protocol.registerSchemesAsPrivileged([
  {
    scheme: 'app',
    privileges: {
      standard: true,
      secure: true,
      supportFetchAPI: true,
      corsEnabled: true
    }
  }
]);

let mainWindow;
let splashWindow;
let overlayWindow = null;
let tray = null;
let isQuitting = false;
let updateAvailable = false;
let updateDownloaded = false;
let updateInfo = null;

// ============================================
// CUSTOM PROTOCOL (jubbio://)
// ============================================

// Register as default handler for jubbio:// protocol
if (process.defaultApp) {
  // Dev mode: register with path to electron executable
  if (process.argv.length >= 2) {
    app.setAsDefaultProtocolClient('jubbio', process.execPath, [path.resolve(process.argv[1])]);
  }
} else {
  app.setAsDefaultProtocolClient('jubbio');
}

// Deep link URL that arrived before the app was ready
let pendingDeepLink = null;

function handleDeepLink(url) {
  if (!url || !url.startsWith('jubbio://')) return;
  
  // jubbio://focus — sadece pencereyi öne getir, renderer'a bir şey gönderme
  if (url === 'jubbio://focus' || url.startsWith('jubbio://focus?')) {
    if (mainWindow && !mainWindow.isDestroyed()) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.show();
      mainWindow.focus();
    }
    return;
  }
  
  // If mainWindow is ready, send immediately
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('deep-link', url);
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.show();
    mainWindow.focus();
  } else {
    // Store for later — will be sent when window is ready
    pendingDeepLink = url;
  }
}

// ============================================
// SINGLE INSTANCE LOCK
// ============================================

const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} else {
  // Second instance launched (e.g. user clicked jubbio:// link while app is running)
  app.on('second-instance', (event, commandLine) => {
    // On Windows/Linux, the deep link URL is in commandLine
    const deepLinkUrl = commandLine.find(arg => arg.startsWith('jubbio://'));
    if (deepLinkUrl) {
      handleDeepLink(deepLinkUrl);
    } else if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.show();
      mainWindow.focus();
    }
  });
}

// macOS: deep link arrives via open-url event
app.on('open-url', (event, url) => {
  event.preventDefault();
  handleDeepLink(url);
});

// ============================================
// AUTO UPDATER CONFIGURATION
// ============================================

autoUpdater.autoDownload = true;
autoUpdater.autoInstallOnAppQuit = false; // Biz kendimiz yönetiyoruz
// Web installer kullanmıyoruz; tam NSIS paketi + .blockmap ile differential indirme yapılır.
// CDN (BunnyCDN) multi-range isteklerini desteklemediği için publish.useMultipleRangeRequest=false (package.json).
autoUpdater.disableWebInstaller = true;
autoUpdater.disableDifferentialDownload = false;

const GITHUB_TOKEN = process.env.GITHUB_UPDATE_TOKEN || '';
if (GITHUB_TOKEN) {
  autoUpdater.requestHeaders = {
    Authorization: `token ${GITHUB_TOKEN}`
  };
}

// Splash'a güncelleme durumu gönder
function sendSplashUpdate(type, data = {}) {
  if (splashWindow && !splashWindow.isDestroyed()) {
    splashWindow.webContents.send('update-status', { type, ...data });
  }
}

// Main window'a güncelleme durumu gönder
function sendMainUpdate(status, data = {}) {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('update-status', { status, ...data });
  }
}

function setupAutoUpdater() {
  autoUpdater.on('checking-for-update', () => {
    console.log('[AutoUpdater] Checking for update...');
    sendSplashUpdate('checking');
  });

  autoUpdater.on('update-available', (info) => {
    console.log('[AutoUpdater] Update available:', info.version);
    updateAvailable = true;
    updateInfo = info;
    // Güncelleme bulundu, splash'ı kapatılamaz yap
    if (splashWindow && !splashWindow.isDestroyed()) {
      splashWindow.setClosable(false);
    }
    sendSplashUpdate('available', { version: info.version });
    // autoDownload: true olduğu için otomatik indirilecek
  });

  autoUpdater.on('update-not-available', (info) => {
    console.log('[AutoUpdater] No update available');
    updateAvailable = false;
    sendSplashUpdate('not-available');
    // Güncelleme yok, uygulamayı başlat
    proceedToApp();
  });

  autoUpdater.on('download-progress', (progress) => {
    const percent = Math.round(progress.percent);
    console.log('[AutoUpdater] Download progress:', percent + '%');
    sendSplashUpdate('downloading', { 
      percent,
      transferred: progress.transferred,
      total: progress.total,
      bytesPerSecond: progress.bytesPerSecond
    });
  });

  autoUpdater.on('update-downloaded', (info) => {
    console.log('[AutoUpdater] Update downloaded:', info.version);
    updateDownloaded = true;
    sendSplashUpdate('installing', { version: info.version });
    
    setTimeout(() => {
      isQuitting = true;
      
      // Tüm pencereleri kapat ki installer dosyaları değiştirebilsin
      if (splashWindow && !splashWindow.isDestroyed()) {
        splashWindow.destroy();
        splashWindow = null;
      }
      if (overlayWindow && !overlayWindow.isDestroyed()) {
        overlayWindow.destroy();
        overlayWindow = null;
      }
      if (passiveOverlayWindow && !passiveOverlayWindow.isDestroyed()) {
        passiveOverlayWindow.destroy();
        passiveOverlayWindow = null;
      }
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.destroy();
        mainWindow = null;
      }
      
      autoUpdater.quitAndInstall(true, true);
    }, 1500);
  });

  autoUpdater.on('error', (error) => {
    console.error('[AutoUpdater] Error:', error.message);
    // Hata durumunda splash'ı kapatılabilir yap
    if (splashWindow && !splashWindow.isDestroyed()) {
      splashWindow.setClosable(true);
    }
    sendSplashUpdate('error', { message: error.message });
  });
}

// ============================================
// SPLASH WINDOW
// ============================================

function createSplashWindow() {
  splashWindow = new BrowserWindow({
    width: 300,
    height: 400,
    minWidth: 300,
    minHeight: 400,
    maxWidth: 300,
    maxHeight: 400,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  splashWindow.loadFile(path.join(__dirname, 'splash.html'));
  splashWindow.center();

  splashWindow.on('closed', () => {
    splashWindow = null;
  });
}

// ============================================
// MAIN WINDOW
// ============================================

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    title: 'Jubbio',
    frame: false,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#020617',
      symbolColor: '#94a3b8',
      height: 32
    },
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.cjs'),
      backgroundThrottling: false, // Screen share için gerekli
      webviewTag: true // Stream platform chat embeds (Kick/Twitch)
    },
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'resources/icons/icon.ico'),
    show: false
  });

  // ── Media & device permissions ──────────────────────────────────────
  // Electron 17+ requires three separate handlers to fully auto-grant
  // camera, microphone, screen capture and device enumeration without
  // showing any browser-style permission prompts.

  const session = mainWindow.webContents.session;

  // 1. Permission request handler — called for getUserMedia, getDisplayMedia, notifications etc.
  session.setPermissionRequestHandler((webContents, permission, callback, details) => {
    const { trustedMainRequest } = require('./app-permissions.cjs');
    if (!trustedMainRequest(webContents, mainWindow?.webContents, details, isDev)) { callback(false); return; }
    const allowed = new Set([
      'media',            // legacy catch-all for camera+mic
      'camera',           // Electron 25+ splits camera from media
      'microphone',       // Electron 25+ splits microphone from media
      'display-capture',  // getDisplayMedia / screen share
      'mediaKeySystem',   // EME / DRM
      'notifications',
      'fullscreen',
      'pointerLock',
      'geolocation',
      'clipboard-read',
      'clipboard-sanitized-write',
      'window-management',
      'idle-detection',
      'speaker-selection', // Electron 31+ for setSinkId
    ]);

    if (allowed.has(permission)) {
      callback(true);
    } else {
      console.log('[Permission] Denied request:', permission);
      callback(false);
    }
  });

  // 2. Permission check handler — synchronous check before the request is even made
  session.setPermissionCheckHandler((webContents, permission, requestingOrigin, details) => {
    const { trustedMainRequest } = require('./app-permissions.cjs');
    if (!trustedMainRequest(webContents, mainWindow?.webContents, { ...details, requestingUrl:details?.requestingUrl || requestingOrigin }, isDev)) return false;
    const allowed = new Set([
      'media', 'camera', 'microphone', 'display-capture',
      'mediaKeySystem', 'notifications', 'fullscreen', 'pointerLock',
      'geolocation', 'clipboard-read', 'clipboard-sanitized-write',
      'window-management', 'idle-detection', 'speaker-selection',
    ]);

    // details.mediaType can be 'video' or 'audio' when permission is 'media'
    // Always allow both
    return allowed.has(permission);
  });

  // 3. Device permission handler — Electron 17+ requires this for persistent device access
  //    Without it, getUserMedia/enumerateDevices may show a browser-style prompt or fail
  session.setDevicePermissionHandler((details) => {
    const { trustedMainOrigin } = require('./app-permissions.cjs');
    if (!trustedMainOrigin(details.origin, isDev)) return false;
    const allowedDeviceTypes = ['audioinput', 'audiooutput', 'videoinput'];
    if (details.deviceType && !allowedDeviceTypes.includes(details.deviceType)) return false;
    return true;
  });

  // Open external links in system browser instead of Electron
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'deny' };
  });

  const handleNavigation = (event, url) => {
    // Allow internal navigation (dev server or app protocol)
    if (trustedMainOrigin(url, isDev)) return;
    event.preventDefault();
    // External URLs → open in system browser
    if (url.startsWith('http://') || url.startsWith('https://')) {
      shell.openExternal(url).catch(error => console.warn('External navigation failed:', error.message));
    }
  };
  mainWindow.webContents.on('will-navigate', handleNavigation);
  mainWindow.webContents.on('will-redirect', handleNavigation);

  // Store pending screen share source and audio preference for display media handler
  global.pendingScreenShareSource = null;
  global.pendingScreenShareWithAudio = false;

  // Display media request handler
  mainWindow.webContents.session.setDisplayMediaRequestHandler(async (request, callback) => {
    if (!request.frame || request.frame !== mainWindow?.webContents.mainFrame || !require('./app-permissions.cjs').trustedMainOrigin(request.securityOrigin, isDev)) { callback({}); return; }
    const { desktopCapturer } = require('electron');
    
    try {
      // If we have a pending source from our modal, use it
      if (global.pendingScreenShareSource) {
        const sourceId = global.pendingScreenShareSource;
        const withAudio = global.pendingScreenShareWithAudio;
        global.pendingScreenShareSource = null;
        global.pendingScreenShareWithAudio = false;
        
        const sources = await desktopCapturer.getSources({ 
          types: [sourceId.startsWith('screen:') ? 'screen' : 'window'],
          thumbnailSize: { width: 0, height: 0 },
          fetchWindowIcons: false,
        });
        const source = sources.find(s => s.id === sourceId);
        
        if (source) {
          // 'loopback' captures system audio (app sounds) without microphone
          callback({ 
            video: source,
            audio: withAudio ? 'loopback' : undefined
          });
          return;
        }
        // Never substitute another screen for a selected window that has closed.
        callback({});
        return;
      }

      callback({});
    } catch (err) {
      console.error('Display media handler error:', err);
      callback({});
    }
  });

  if (isDev) {
    // Vite dev server'ın hazır olmasını bekle
    const waitForVite = async (url, maxRetries = 30) => {
      const http = require('http');
      for (let i = 0; i < maxRetries; i++) {
        try {
          await new Promise((resolve, reject) => {
            const req = http.get(url, (res) => {
              resolve(true);
            });
            req.on('error', reject);
            req.setTimeout(1000, () => {
              req.destroy();
              reject(new Error('timeout'));
            });
          });
          return true;
        } catch {
          console.log(`[Main] Waiting for Vite... (${i + 1}/${maxRetries})`);
          await new Promise(r => setTimeout(r, 500));
        }
      }
      return false;
    };

    waitForVite('http://localhost:5173').then((ready) => {
      if (ready) {
        mainWindow.loadURL('http://localhost:5173/login');
      } else {
        console.error('[Main] Vite dev server not available, trying anyway...');
        mainWindow.loadURL('http://localhost:5173/login');
      }
    });
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL('app://./index.html');
    // Production'da DevTools'u engelle
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow.webContents.closeDevTools();
    });
  }

  // did-finish-load ile de splash'ı kapat (fallback)
  mainWindow.webContents.once('did-finish-load', () => {
    console.log('[Main] did-finish-load triggered');
  });

  // Ctrl+/- ve Ctrl+0 ile zoom'u engelle (uygulama içinde zoom istenmiyor)
  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.control && !input.alt && !input.meta) {
      if (input.key === '+' || input.key === '=' || input.key === '-' || input.key === '0') {
        event.preventDefault();
      }
    }
  });

  // Wait for React app to signal it's ready (auth resolved, correct route shown)
  let appShown = false;
  const showApp = () => {
    if (appShown) return;
    appShown = true;
    if (splashWindow && !splashWindow.isDestroyed()) {
      splashWindow.close();
      splashWindow = null;
    }
    mainWindow.webContents.setZoomFactor(1.0);
    mainWindow.show();
    mainWindow.focus();
    // Send any pending deep link that arrived before the window was ready
    if (pendingDeepLink) {
      mainWindow.webContents.send('deep-link', pendingDeepLink);
      pendingDeepLink = null;
    }
  };

  // React sends 'app-ready' after auth bootstrap completes
  ipcMain.once('app-ready', () => {
    console.log('[Main] app-ready signal received from renderer');
    showApp();
    // Run tamper detection after app is shown (async, non-blocking)
    runTamperDetection();
  });

  mainWindow.webContents.once('dom-ready', () => {
    console.log('[Main] dom-ready triggered');
    // Fallback: if React doesn't signal within 4s, show anyway
    setTimeout(() => {
      if (!appShown) {
        console.log('[Main] Fallback: showing app after timeout');
        showApp();
      }
    }, 4000);
  });

  mainWindow.once('ready-to-show', () => {
    console.log('[Main] ready-to-show triggered');
  });

  mainWindow.on('close', (event) => {
    if (!isQuitting) {
      event.preventDefault();
      mainWindow.hide();
      return false;
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Passive overlay: mainWindow focus kaybettiğinde veya gizlendiğinde göster
  mainWindow.on('blur', () => {
    if (shouldShowPassiveOverlay()) {
      showPassiveOverlay();
    }
  });

  mainWindow.on('hide', () => {
    if (shouldShowPassiveOverlay()) {
      showPassiveOverlay();
    }
  });

  mainWindow.on('focus', () => {
    hidePassiveOverlay();
  });

  mainWindow.on('show', () => {
    // Pencere gösterildiğinde ve focus aldığında passive'i gizle
    if (mainWindow && mainWindow.isFocused()) {
      hidePassiveOverlay();
    }
  });
}

// ============================================
// TRAY
// ============================================

function createTray() {
  const isMac = process.platform === 'darwin';
  const iconPath = path.join(__dirname, isMac ? 'resources/icons/16x16.png' : 'resources/icons/32x32.png');
  tray = new Tray(iconPath);

  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Göster/Gizle',
      click: () => {
        if (mainWindow) {
          if (mainWindow.isVisible()) {
            if (mainWindow.isFocused()) mainWindow.hide();
            else mainWindow.focus();
          } else {
            mainWindow.show();
            mainWindow.focus();
          }
        }
      }
    },
    { type: 'separator' },
    {
      label: 'Çıkış',
      click: () => {
        isQuitting = true;
        app.quit();
      }
    }
  ]);

  tray.setToolTip('Jubbio');
  tray.setContextMenu(contextMenu);

  tray.on('click', () => {
    if (mainWindow) {
      if (mainWindow.isVisible()) {
        if (mainWindow.isFocused()) mainWindow.hide();
        else mainWindow.focus();
      } else {
        mainWindow.show();
        mainWindow.focus();
      }
    }
  });
}

// ============================================
// APP STARTUP FLOW
// ============================================

function proceedToApp() {
  console.log('[PERF] proceedToApp() started');
  sendSplashUpdate('loading', { message: 'Uygulama hazırlanıyor...' });
  const t0 = Date.now();
  createTray();
  console.log(`[PERF] createTray: ${Date.now() - t0}ms`);
  const t1 = Date.now();
  createWindow();
  console.log(`[PERF] createWindow: ${Date.now() - t1}ms`);
  const t2 = Date.now();
  // Overlay penceresini önceden oluştur (gizli), toggle anında açılsın
  createOverlayWindow();
  console.log(`[PERF] createOverlayWindow: ${Date.now() - t2}ms`);
  const t3 = Date.now();
  // Passive overlay'i de önceden oluştur (gizli, bağlanınca gösterilecek)
  createPassiveOverlay();
  console.log(`[PERF] createPassiveOverlay: ${Date.now() - t3}ms`);
  console.log(`[PERF] proceedToApp() total: ${Date.now() - t0}ms`);
}

// Sadece single instance lock alındıysa uygulamayı başlat
if (gotTheLock) {
  app.whenReady().then(async () => {
    // First-run: enable auto-launch by default on initial install
    const firstRunFlag = path.join(app.getPath('userData'), '.auto-launch-initialized');
    if (!fs.existsSync(firstRunFlag)) {
      try {
        app.setLoginItemSettings({ openAtLogin: true, path: process.execPath });
        fs.writeFileSync(firstRunFlag, '1');
        console.log('[AutoLaunch] Enabled by default on first run');
      } catch (e) {
        console.error('[AutoLaunch] First-run setup failed:', e.message);
      }
    } else {
      // Re-register auto-launch with current exe path (survives app updates)
      try {
        const loginSettings = app.getLoginItemSettings();
        if (loginSettings.openAtLogin) {
          app.setLoginItemSettings({
            openAtLogin: true,
            path: process.execPath,
          });
        }
      } catch (e) {
        console.error('[AutoLaunch] Re-registration failed:', e.message);
      }
    }

    // Register file protocol (modern API)
    protocol.handle('app', (request) => {
      let url = request.url.slice(6); // Remove 'app://' prefix
      // Remove leading dot and slashes: ./index.html -> index.html
      url = url.replace(/^\.?\/+/, '');

      const filePath = path.normalize(`${__dirname}/../dist/${url}`);

      // If the file exists, serve it (JS, CSS, images, etc.)
      // Otherwise, fall back to index.html for SPA client-side routing
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        return net.fetch(`file://${filePath}`);
      }
      return net.fetch(`file://${path.normalize(`${__dirname}/../dist/index.html`)}`);
    });

    // Splash ekranını oluştur
    createSplashWindow();

    // Auto updater'ı ayarla (MS Store build'inde atla)
    if (!isMSStore) {
      setupAutoUpdater();
    }

    if (!isDev) {
      if (isMSStore || true) {
        // Düzenlenmiş sürüm güncellemesiz (publish: null); paketlenmemişken updater
        // hiçbir olay göndermediği için splash "denetleniyor"da takılıyordu.
        // MS Store: Güncellemeler Store tarafından yönetilir, updater'ı atla
        console.log('[Main] MS Store build detected, skipping auto-updater');
        sendSplashUpdate('loading', { message: 'Uygulama hazırlanıyor...' });
        setTimeout(() => proceedToApp(), 500);
      } else {
        // Standalone: Güncelleme kontrolü yap
        sendSplashUpdate('checking');
        
        try {
          await autoUpdater.checkForUpdates();
          // Event handler'lar devam edecek (update-available veya update-not-available)
        } catch (err) {
          console.error('[AutoUpdater] Check failed:', err.message);
          sendSplashUpdate('error', { message: err.message });
          // Hata olsa bile uygulamayı başlat
          setTimeout(() => proceedToApp(), 2000);
        }
      }
    } else {
      // Dev mode: Güncelleme kontrolü atla, splash'ı kısa süre göster
      sendSplashUpdate('loading', { message: 'Geliştirici modu...' });
      setTimeout(() => proceedToApp(), 800);
    }
  });
}

app.on('before-quit', () => {
  isQuitting = true;
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin' && isQuitting) {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// ============================================
// IPC HANDLERS - Auto Launch (Startup)
// ============================================

ipcMain.handle('get-auto-launch', () => {
  const settings = app.getLoginItemSettings();
  return { enabled: settings.openAtLogin };
});

ipcMain.handle('set-auto-launch', (event, enabled) => {
  try {
    // Use explicit path to survive app updates (exe path may change)
    app.setLoginItemSettings({
      openAtLogin: enabled,
      path: process.execPath,
    });
    return { success: true, enabled };
  } catch (error) {
    console.error('[AutoLaunch] Error:', error.message);
    return { success: false, error: error.message };
  }
});

// Open URL in default browser (for checkout, external links)
ipcMain.handle('open-external', async (event, url) => {
  const { shell } = require('electron');
  // Only allow https URLs to jubbio.com for security
  if (typeof url === 'string' && url.startsWith('https://')) {
    await shell.openExternal(url);
  }
});

// Update titlebar overlay colors (Windows)
ipcMain.handle('set-titlebar-overlay', (event, options) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (win && typeof win.setTitleBarOverlay === 'function') {
    try {
      win.setTitleBarOverlay(options);
      return { success: true };
    } catch {
      return { success: false };
    }
  }
  return { success: false };
});

// ============================================
// IPC HANDLERS - Splash
// ============================================

// Splash'tan "Şimdi Güncelle" butonuna tıklandığında
ipcMain.on('install-update-now', () => {
  console.log('[AutoUpdater] Installing update now...');
  if (updateDownloaded) {
    sendSplashUpdate('installing');
    setTimeout(() => {
      isQuitting = true;
      
      if (splashWindow && !splashWindow.isDestroyed()) {
        splashWindow.destroy();
        splashWindow = null;
      }
      if (overlayWindow && !overlayWindow.isDestroyed()) {
        overlayWindow.destroy();
        overlayWindow = null;
      }
      if (passiveOverlayWindow && !passiveOverlayWindow.isDestroyed()) {
        passiveOverlayWindow.destroy();
        passiveOverlayWindow = null;
      }
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.destroy();
        mainWindow = null;
      }
      
      autoUpdater.quitAndInstall(true, true);
    }, 500);
  }
});

// Splash'tan "Güncellemeyi Atla" (sadece hata durumunda)
ipcMain.on('skip-update', () => {
  console.log('[AutoUpdater] Skipping update...');
  proceedToApp();
});

// Splash'tan "Tekrar Dene"
ipcMain.on('retry-update', async () => {
  console.log('[AutoUpdater] Retrying update...');
  sendSplashUpdate('checking');
  try {
    await autoUpdater.checkForUpdates();
  } catch (err) {
    sendSplashUpdate('error', { message: err.message });
  }
});

// ============================================
// IPC HANDLERS - Window Controls
// ============================================

ipcMain.on('window-minimize', () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) win.minimize();
});

ipcMain.on('window-maximize', () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) {
    if (win.isMaximized()) win.unmaximize();
    else win.maximize();
  }
});

ipcMain.on('window-close', () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) win.close();
});

ipcMain.handle('window-is-maximized', () => {
  const win = BrowserWindow.getFocusedWindow();
  return win ? win.isMaximized() : false;
});

ipcMain.handle('window-set-fullscreen', (event, flag) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (win) win.setFullScreen(flag);
});

ipcMain.handle('window-is-fullscreen', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  return win ? win.isFullScreen() : false;
});

ipcMain.handle('window-is-focused', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  return win ? win.isFocused() : false;
});

// ============================================
// IPC HANDLERS - Screen Capture
// ============================================

ipcMain.handle('get-screen-sources', async (event, types = ['window', 'screen']) => {
  const { desktopCapturer } = require('electron');

  try {
    const sources = await desktopCapturer.getSources({
      types: types,
      thumbnailSize: { width: 288, height: 162 }, // 16:9 — smaller for faster encode/transfer
      fetchWindowIcons: types.includes('window'), // Only fetch icons for windows, not screens
    });

    return sources
      .filter(source => source && source.id && source.name)
      .map(source => ({
        id: source.id,
        name: source.name,
        thumbnail: source.thumbnail ? source.thumbnail.toDataURL('image/jpeg', 0.6) : '',
        appIcon: source.appIcon ? source.appIcon.toDataURL('image/png', 0.8) : null
      }));
  } catch (error) {
    console.error('Failed to get screen sources:', error);
    return [];
  }
});

// Start screen capture - returns stream ID for renderer to use
ipcMain.handle('start-screen-capture', async (event, sourceId) => {
  try {
    const win = BrowserWindow.fromWebContents(event.sender);
    if (!win) return { success: false, error: 'Window not found' };

    // Use desktopCapturer to get the stream in main process
    const { desktopCapturer } = require('electron');
    
    // Get the source to verify it exists
    const sources = await desktopCapturer.getSources({ 
      types: ['window', 'screen'],
      thumbnailSize: { width: 0, height: 0 }
    });
    
    const source = sources.find(s => s.id === sourceId);
    if (!source) {
      return { success: false, error: 'Source not found' };
    }

    // Return the sourceId - renderer will use getDisplayMedia with constraints
    return { 
      success: true, 
      sourceId: source.id,
      sourceName: source.name,
      sourceType: source.id.startsWith('screen:') ? 'screen' : 'window'
    };
  } catch (error) {
    console.error('Failed to start screen capture:', error);
    return { success: false, error: error.message };
  }
});

// Set pending screen share source for display media handler
ipcMain.handle('set-pending-screen-share', async (event, sourceId, withAudio = false) => {
  assertMainSender(event);
  if (sourceId !== null && (typeof sourceId !== 'string' || !/^(screen|window):[\d:]+$/.test(sourceId))) throw new Error('Invalid screen source');
  if (typeof withAudio !== 'boolean') throw new Error('Invalid audio preference');
  global.pendingScreenShareSource = sourceId;
  global.pendingScreenShareWithAudio = withAudio;
  return { success: true };
});

// ============================================
// IPC HANDLERS - Thumbar
// ============================================

ipcMain.on('update-thumbar-buttons', (event, state) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  if (!win) return;

  if (!state.isConnected) {
    try {
      win.setThumbarButtons([]);
      if (tray) {
        const defaultMenu = Menu.buildFromTemplate([
          {
            label: 'Göster/Gizle',
            click: () => {
              if (mainWindow) {
                if (mainWindow.isVisible()) {
                  if (mainWindow.isFocused()) mainWindow.hide();
                  else mainWindow.focus();
                } else {
                  mainWindow.show();
                  mainWindow.focus();
                }
              }
            }
          },
          { type: 'separator' },
          { label: 'Çıkış', click: () => { isQuitting = true; app.quit(); } }
        ]);
        tray.setContextMenu(defaultMenu);
      }
    } catch (e) {
      console.error('Failed to clear thumbar buttons:', e);
    }
    return;
  }

  const thumbarPath = path.join(__dirname, '../electron/resources/thumbar');
  const getIcon = (name) => path.join(thumbarPath, name);
  const isPTT = state.isPushToTalk === true;

  if (tray) {
    const trayMenuTemplate = [
      {
        label: 'Göster/Gizle',
        click: () => {
          if (mainWindow) {
            if (mainWindow.isVisible()) {
              if (mainWindow.isFocused()) mainWindow.hide();
              else mainWindow.focus();
            } else {
              mainWindow.show();
              mainWindow.focus();
            }
          }
        }
      },
      { type: 'separator' },
      { 
        label: isPTT ? 'Bas-Konuş Modu' : (state.isMuted ? 'Sesi Aç' : 'Sustur'), 
        enabled: !isPTT,
        click: () => { if (!isPTT) win.webContents.send('thumbar-action', 'toggle-mic'); } 
      },
      { label: state.isDeafened ? 'Sağırlaştırmayı Kaldır' : 'Sağırlaştır', click: () => { win.webContents.send('thumbar-action', 'toggle-deaf'); } },
      { label: 'Ayrıl', click: () => { win.webContents.send('thumbar-action', 'disconnect'); } },
      { type: 'separator' },
      { label: 'Çıkış', click: () => { isQuitting = true; app.quit(); } }
    ];
    tray.setContextMenu(Menu.buildFromTemplate(trayMenuTemplate));
  }

  try {
    // PTT modunda mikrofon butonu disabled (THBF_DISABLED = 0x1)
    const micButton = {
      tooltip: isPTT ? 'Bas-Konuş Modu Aktif' : (state.isMuted ? 'Sesi Aç' : 'Sustur'),
      icon: getIcon(state.isMuted ? 'mic-off.png' : 'mic-on.png'),
      flags: isPTT ? ['disabled'] : [],
      click: () => { if (!isPTT) win.webContents.send('thumbar-action', 'toggle-mic'); }
    };

    win.setThumbarButtons([
      micButton,
      { tooltip: state.isDeafened ? 'Duy' : 'Sağırlaştır', icon: getIcon(state.isDeafened ? 'headphone-off.png' : 'headphone-on.png'), click: () => { win.webContents.send('thumbar-action', 'toggle-deaf'); } },
      { tooltip: 'Ayrıl', icon: getIcon('disconnect.png'), click: () => { win.webContents.send('thumbar-action', 'disconnect'); } }
    ]);
  } catch (e) {
    console.error('Failed to set thumbar buttons:', e);
  }
});

// ============================================
// IPC HANDLERS - Notifications
// ============================================

ipcMain.handle('show-notification', async (event, { title, body, icon, tag, data }) => {
  try {
    const notification = new Notification({
      title,
      body,
      icon: icon || path.join(__dirname, 'resources/icons/256x256.png'),
      silent: false,
      tag,
    });

    notification.once('click', () => {
      if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore();
        mainWindow.show();
        mainWindow.focus();
      }
      if (data && mainWindow) {
        mainWindow.webContents.send('notification-clicked', data);
      }
    });

    notification.show();
    return { success: true };
  } catch (error) {
    console.error('Failed to show notification:', error);
    return { success: false, error: error.message };
  }
});

// ============================================
// IPC HANDLERS - Google OAuth (Loopback)
// ============================================

let oauthServer = null;

ipcMain.handle('google-oauth-start', async (event, clientId) => {
  const http = require('http');
  const url = require('url');

  // Önceki server varsa kapat
  if (oauthServer) {
    try { oauthServer.close(); } catch {}
    oauthServer = null;
  }

  const crypto = require('crypto');
  const codeVerifier = crypto.randomBytes(32).toString('base64url');
  const codeChallenge = crypto.createHash('sha256').update(codeVerifier).digest('base64url');
  const state = crypto.randomBytes(16).toString('hex');

  return new Promise((resolve) => {
    // ponytail: kullanıcı tarayıcıyı kapatıp uygulamaya dönerse focus event'i ile yakala
    // shell.openExternal ile açılan sekmeyi takip edemiyoruz, ama pencere focus'a
    // dönüp 2sn içinde callback gelmezse kullanıcı vazgeçmiş demektir
    let focusHandler = null;

    const cleanupFocusHandler = () => {
      if (focusHandler && mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.removeListener('focus', focusHandler);
      }
      focusHandler = null;
    };

    const server = http.createServer((req, res) => {
      const parsed = url.parse(req.url, true);

      if (parsed.pathname === '/' || parsed.pathname === '/callback') {
        const receivedState = parsed.query.state;
        if (receivedState !== state) {
          res.writeHead(400);
          res.end('State mismatch');
          return;
        }
        const code = parsed.query.code;
        const error = parsed.query.error;

        // Web sitesindeki auth/success sayfasına yönlendir
        const appUrl = 'https://jubbio.com';
        const status = error ? 'error' : 'success';
        const redirectUrl = `${appUrl}/auth/success?status=${status}`;

        res.writeHead(302, { 'Location': redirectUrl });
        res.end();

        // Server'ı kapat
        try { server.close(); } catch {}
        oauthServer = null;
        cleanupFocusHandler();

        // Ana pencereyi öne getir
        if (mainWindow && !mainWindow.isDestroyed()) {
          if (mainWindow.isMinimized()) mainWindow.restore();
          mainWindow.show();
          mainWindow.focus();
        }

        if (error) {
          if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.webContents.send('google-oauth-result', { error: error });
          }
        } else if (code) {
          if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.webContents.send('google-oauth-result', { code: code, codeVerifier: codeVerifier });
          }
        }
      } else {
        res.writeHead(404);
        res.end('Not Found');
      }
    });

    // Port 0 = OS boş port atar
    server.listen(0, '127.0.0.1', () => {
      const port = server.address().port;
      oauthServer = server;

      const redirectUri = `http://127.0.0.1:${port}`;
      const scope = 'openid email profile';
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
        `client_id=${encodeURIComponent(clientId)}` +
        `&redirect_uri=${encodeURIComponent(redirectUri)}` +
        `&response_type=code` +
        `&scope=${encodeURIComponent(scope)}` +
        `&access_type=offline` +
        `&prompt=select_account` +
        `&state=${encodeURIComponent(state)}` +
        `&code_challenge=${encodeURIComponent(codeChallenge)}` +
        `&code_challenge_method=S256`;

      // Sistem tarayıcısında aç
      shell.openExternal(authUrl);

      resolve({ success: true, port, redirectUri });
    });

    server.on('error', (err) => {
      console.error('[GoogleOAuth] Server error:', err.message);
      oauthServer = null;
      cleanupFocusHandler();
      resolve({ success: false, error: err.message });
    });

    // 5 dakika sonra timeout
    setTimeout(() => {
      if (oauthServer === server) {
        try { server.close(); } catch {}
        oauthServer = null;
        cleanupFocusHandler();
        // ponytail: timeout'ta renderer'a bildir — yoksa loading spinner sonsuza kadar kalır
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send('google-oauth-result', { error: 'timeout' });
        }
      }
    }, 5 * 60 * 1000);

    // Focus handler'ı kur — uygulama focus'a dönüp 2sn içinde callback gelmezse iptal et
    focusHandler = () => {
      if (oauthServer !== server) return;
      setTimeout(() => {
        if (oauthServer === server) {
          try { server.close(); } catch {}
          oauthServer = null;
          cleanupFocusHandler();
          if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.webContents.send('google-oauth-result', { error: 'cancelled' });
          }
        }
      }, 2000);
    };
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.on('focus', focusHandler);
    }
  });
});

// ============================================
// IPC HANDLERS - Auto Updater (Main Window)
// ============================================

ipcMain.handle('check-for-updates', async () => {
  if (isMSStore) {
    console.log('[AutoUpdater] IPC: Skipped (MS Store build)');
    return { success: false, error: 'Updates managed by Microsoft Store' };
  }
  console.log('[AutoUpdater] IPC: check-for-updates called');
  try {
    const result = await autoUpdater.checkForUpdates();
    console.log('[AutoUpdater] IPC: check-for-updates result:', result?.updateInfo?.version);
    return { success: true, result };
  } catch (error) {
    console.error('[AutoUpdater] IPC: check-for-updates error:', error.message);
    return { success: false, error: error.message };
  }
});

ipcMain.handle('download-update', async () => {
  if (isMSStore) {
    return { success: false, error: 'Updates managed by Microsoft Store' };
  }
  console.log('[AutoUpdater] IPC: download-update called');
  try {
    await autoUpdater.downloadUpdate();
    console.log('[AutoUpdater] IPC: download-update started');
    return { success: true };
  } catch (error) {
    console.error('[AutoUpdater] IPC: download-update error:', error.message);
    return { success: false, error: error.message };
  }
});

ipcMain.handle('install-update', () => {
  if (isMSStore) {
    return { success: false, error: 'Updates managed by Microsoft Store' };
  }
  isQuitting = true;
  
  if (splashWindow && !splashWindow.isDestroyed()) {
    splashWindow.destroy();
    splashWindow = null;
  }
  if (overlayWindow && !overlayWindow.isDestroyed()) {
    overlayWindow.destroy();
    overlayWindow = null;
  }
  if (passiveOverlayWindow && !passiveOverlayWindow.isDestroyed()) {
    passiveOverlayWindow.destroy();
    passiveOverlayWindow = null;
  }
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.destroy();
    mainWindow = null;
  }
  
  autoUpdater.quitAndInstall(true, true);
});

ipcMain.handle('get-app-version', () => {
  return app.getVersion();
});

// ============================================
// GAME ACTIVITY - PROCESS SCANNER
// ============================================

const gameProcessInspector = require('./game-process-inspector.cjs').createGameProcessInspector();

ipcMain.handle('verify-game-processes', async (event, candidates) => {
  assertMainSender(event);
  if (process.platform !== 'win32') return {};
  return gameProcessInspector.verify(candidates);
});
ipcMain.handle('release-game-process-checks', event => { assertMainSender(event); gameProcessInspector.clear(); });
app.on('will-quit', () => gameProcessInspector.clear());

ipcMain.handle('get-running-processes', async (event) => {
  assertMainSender(event);
  const { execFile } = require('child_process');
  try {
    if (process.platform === 'win32') {
      const instances = await gameProcessInspector.getSnapshot();
      return { processes: [...new Set(instances.map(item => item.name))], instances, titles: {}, ok: true };
    } else if (process.platform === 'darwin') {
      const output = await new Promise((resolve, reject) => {
        execFile('ps', ['-eo', 'comm'], { encoding: 'utf8', timeout: 5000 }, (err, stdout) => {
          if (err) reject(err);
          else resolve(stdout);
        });
      });
      const processes = output
        .split('\n')
        .map(p => p.trim().split('/').pop())
        .filter(Boolean);

      // Try to get window titles on macOS
      let titles = {};
      try {
        const titleOutput = await new Promise((resolve, reject) => {
          execFile('osascript', ['-e',
            'tell application "System Events" to get {name, displayed name} of every process whose background only is false'
          ], { encoding: 'utf8', timeout: 8000 }, (err, stdout) => {
            if (err) reject(err);
            else resolve(stdout);
          });
        });
        const lines = titleOutput.trim().split(', ');
        const half = Math.floor(lines.length / 2);
        for (let i = 0; i < half; i++) {
          const processName = lines[i]?.trim();
          const displayName = lines[i + half]?.trim();
          if (processName && displayName) {
            titles[processName] = displayName;
          }
        }
      } catch { /* ignore */ }

      return { processes: [...new Set(processes)], titles };
    } else {
      const output = await new Promise((resolve, reject) => {
        execFile('ps', ['-eo', 'comm', '--no-headers'], { encoding: 'utf8', timeout: 5000 }, (err, stdout) => {
          if (err) reject(err);
          else resolve(stdout);
        });
      });
      const processes = output
        .split('\n')
        .map(p => p.trim())
        .filter(Boolean);
      return { processes: [...new Set(processes)], titles: {} };
    }
  } catch (error) {
    console.error('[GameActivity] Failed to get running processes:', error.message);
    return { processes: [], titles: {} };
  }
});

// Get running processes WITH their window titles (for game name detection)
ipcMain.handle('get-running-processes-with-titles', async () => {
  const { execFile } = require('child_process');
  try {
    if (process.platform === 'win32') {
      // Use tasklist /V for verbose output which includes window titles
      const output = await new Promise((resolve, reject) => {
        execFile('powershell', [
          '-NoProfile', '-Command',
          'Get-Process | Where-Object { $_.MainWindowTitle -ne "" } | Select-Object ProcessName, MainWindowTitle | ConvertTo-Json -Compress'
        ], { encoding: 'utf8', timeout: 8000 }, (err, stdout) => {
          if (err) reject(err);
          else resolve(stdout);
        });
      });

      try {
        const parsed = JSON.parse(output);
        // PowerShell returns single object (not array) if only one result
        const items = Array.isArray(parsed) ? parsed : [parsed];
        const result = {};
        for (const item of items) {
          if (item.ProcessName && item.MainWindowTitle) {
            const exeName = item.ProcessName + '.exe';
            // Only keep the first window title per process (main window)
            if (!result[exeName]) {
              result[exeName] = item.MainWindowTitle;
            }
          }
        }
        return result;
      } catch {
        return {};
      }
    } else if (process.platform === 'darwin') {
      // macOS: use AppleScript to get app names (which are usually game names)
      const output = await new Promise((resolve, reject) => {
        execFile('osascript', ['-e',
          'tell application "System Events" to get {name, displayed name} of every process whose background only is false'
        ], { encoding: 'utf8', timeout: 8000 }, (err, stdout) => {
          if (err) reject(err);
          else resolve(stdout);
        });
      });

      // Parse AppleScript output: "name1, name2, ..., displayedName1, displayedName2, ..."
      const result = {};
      try {
        const lines = output.trim().split(', ');
        const half = Math.floor(lines.length / 2);
        for (let i = 0; i < half; i++) {
          const processName = lines[i]?.trim();
          const displayName = lines[i + half]?.trim();
          if (processName && displayName) {
            result[processName] = displayName;
          }
        }
      } catch { /* ignore parse errors */ }
      return result;
    } else {
      // Linux: use wmctrl or xdotool if available
      const output = await new Promise((resolve, reject) => {
        execFile('wmctrl', ['-l'], { encoding: 'utf8', timeout: 5000 }, (err, stdout) => {
          if (err) reject(err);
          else resolve(stdout);
        });
      }).catch(() => '');

      const result = {};
      if (output) {
        const lines = output.split('\n').filter(Boolean);
        for (const line of lines) {
          // wmctrl format: 0x... desktop hostname title
          const parts = line.split(/\s+/);
          if (parts.length >= 4) {
            const title = parts.slice(3).join(' ');
            if (title) {
              result[title] = title;
            }
          }
        }
      }
      return result;
    }
  } catch (error) {
    console.error('[GameActivity] Failed to get process titles:', error.message);
    return {};
  }
});

// ============================================
// IPC HANDLERS - Foreground App Detection (for passive overlay)
// ============================================

// Jubbio dışında bir uygulama fullscreen/borderless modda mı?
// Bu, passive overlay'in gösterilip gösterilmeyeceğini belirler.
// Blacklist: tarayıcılar, medya oynatıcılar, sistem uygulamaları
const PASSIVE_OVERLAY_BLACKLIST = new Set([
  // Browsers (fullscreen video izlerken overlay istemeyiz)
  'chrome.exe', 'firefox.exe', 'msedge.exe', 'opera.exe', 'brave.exe',
  'vivaldi.exe', 'arc.exe', 'safari',
  // Media players
  'vlc.exe', 'mpv.exe', 'mpc-hc64.exe', 'mpc-hc.exe', 'wmplayer.exe',
  'PotPlayerMini64.exe', 'PotPlayerMini.exe',
  // Streaming
  'Netflix.exe', 'DISNEY+.exe',
  // System
  'explorer.exe', 'ShellExperienceHost.exe', 'SearchHost.exe',
  'LockApp.exe', 'SystemSettings.exe',
  // Our app
  'Jubbio.exe', 'jubbio.exe', 'electron.exe',
]);

ipcMain.handle('get-foreground-app-info', async () => {
  const startTime = Date.now();
  // Jubbio penceresi focus'ta mı? Focus'ta değilse başka uygulama ön planda demektir.
  const isJubbioFocused = mainWindow && !mainWindow.isDestroyed() && mainWindow.isFocused();
  const elapsed = Date.now() - startTime;
  if (elapsed > 50) console.warn(`[PERF] get-foreground-app-info took ${elapsed}ms`);

  return {
    processName: null,
    isFullscreen: !isJubbioFocused,
    isBlacklisted: isJubbioFocused,
  };
});

// ============================================
// IPC HANDLERS - Secure Storage
// ============================================

// Secure storage helper functions
function readSecureStorage() {
  try {
    if (fs.existsSync(SECURE_STORAGE_FILE)) {
      const encrypted = fs.readFileSync(SECURE_STORAGE_FILE);
      const decrypted = safeStorage.decryptString(encrypted);
      return JSON.parse(decrypted);
    }
  } catch (err) {
    console.error('[SecureStorage] Read error:', err.message);
  }
  return {};
}

function writeSecureStorage(data) {
  try {
    const json = JSON.stringify(data);
    const encrypted = safeStorage.encryptString(json);
    fs.writeFileSync(SECURE_STORAGE_FILE, encrypted);
    return true;
  } catch (err) {
    console.error('[SecureStorage] Write error:', err.message);
    return false;
  }
}

ipcMain.handle('secure-storage-set', async (event, { key, value } = {}) => {
  assertMainSender(event);
  assertStorageKey(key);
  if (typeof value !== 'string' || value.length > 65536) throw new Error('Invalid storage value');
  if (!safeStorage.isEncryptionAvailable()) {
    console.warn('[SecureStorage] Encryption not available');
    return { success: false, error: 'Encryption not available' };
  }
  
  const data = readSecureStorage();
  data[key] = value;
  const success = writeSecureStorage(data);
  return { success };
});

ipcMain.handle('secure-storage-get', async (event, { key } = {}) => {
  assertMainSender(event);
  assertStorageKey(key);
  if (!safeStorage.isEncryptionAvailable()) {
    return { success: false, value: null, error: 'Encryption not available' };
  }
  
  const data = readSecureStorage();
  return { success: true, value: data[key] || null };
});

ipcMain.handle('secure-storage-remove', async (event, { key } = {}) => {
  assertMainSender(event);
  assertStorageKey(key);
  if (!safeStorage.isEncryptionAvailable()) {
    return { success: false, error: 'Encryption not available' };
  }
  
  const data = readSecureStorage();
  delete data[key];
  const success = writeSecureStorage(data);
  return { success };
});

ipcMain.handle('secure-storage-available', (event) => {
  assertMainSender(event);
  return safeStorage.isEncryptionAvailable();
});


// ============================================
// OVERLAY WINDOW
// ============================================

let overlayReady = false;
let pendingOverlayState = null;
let overlayVisible = false;
let overlayReadyResolve = null; // Promise resolve for first-time ready wait

function createOverlayWindow() {
  if (overlayWindow && !overlayWindow.isDestroyed()) return;

  const { screen } = require('electron');
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.bounds;

  overlayReady = false;
  pendingOverlayState = null;
  overlayVisible = false;
  overlayReadyResolve = null;

  overlayWindow = new BrowserWindow({
    width,
    height,
    x: primaryDisplay.bounds.x,
    y: primaryDisplay.bounds.y,
    transparent: true,
    frame: false,
    skipTaskbar: true,
    resizable: false,
    movable: false,
    hasShadow: false,
    show: false,
    focusable: true,
    type: 'toolbar',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'overlay-preload.cjs'),
      backgroundThrottling: false
    }
  });

  overlayWindow.loadFile(path.join(__dirname, 'overlay.html'));
  overlayWindow.setAlwaysOnTop(true, 'pop-up-menu', 1);

  // Dev mode: Ctrl+R ile overlay + passive overlay'i yeniden yükle, Ctrl+Shift+I ile DevTools aç
  if (isDev) {
    overlayWindow.webContents.on('before-input-event', (event, input) => {
      if (input.control && input.key === 'r') {
        overlayWindow.webContents.reload();
        overlayReady = false;
        // Passive overlay'i de yeniden yükle
        if (passiveOverlayWindow && !passiveOverlayWindow.isDestroyed()) {
          passiveOverlayWindow.webContents.reload();
          passiveOverlayReady = false;
        }
        event.preventDefault();
      }
      if (input.control && input.shift && input.key === 'I') {
        overlayWindow.webContents.openDevTools({ mode: 'detach' });
        event.preventDefault();
      }
    });
  }

  if (process.platform === 'win32') {
    // Taskbar üstünde kalmak için blur'da yeniden assert et
    overlayWindow.on('blur', () => {
      if (overlayWindow && !overlayWindow.isDestroyed() && overlayVisible) {
        overlayWindow.setAlwaysOnTop(false);
        overlayWindow.setAlwaysOnTop(true, 'pop-up-menu', 1);
      }
    });
  }
  if (process.platform !== 'win32') {
    overlayWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  }

  overlayWindow.on('closed', () => {
    overlayWindow = null;
    overlayReady = false;
    overlayVisible = false;
  });

  console.log('[Overlay] Overlay window pre-created (hidden)');
}

function waitForOverlayReady() {
  if (overlayReady) return Promise.resolve();
  return new Promise(resolve => { overlayReadyResolve = resolve; });
}

function showOverlay() {
  if (!overlayWindow || overlayWindow.isDestroyed()) {
    createOverlayWindow();
    // İlk oluşturmada ready event'ini bekle, sonra göster
    waitForOverlayReady().then(() => {
      if (overlayWindow && !overlayWindow.isDestroyed()) {
        ensureOverlayBounds();
        overlayWindow.setOpacity(0);
        overlayWindow.showInactive();
        overlayWindow.setAlwaysOnTop(true, 'pop-up-menu', 1);
        overlayVisible = true;
        // Interactive overlay açıkken passive'i gizle
        hidePassiveOverlay();
        // Bir frame sonra opacity'yi aç — bounds stabilize olsun
        setTimeout(() => {
          if (overlayWindow && !overlayWindow.isDestroyed()) {
            overlayWindow.setOpacity(1);
            overlayWindow.focus();
          }
        }, 32);
        if (pendingOverlayState) {
          overlayWindow.webContents.send('overlay-update', pendingOverlayState);
          pendingOverlayState = null;
        }
      }
    });
    return;
  }
  ensureOverlayBounds();
  overlayWindow.setOpacity(0);
  overlayWindow.showInactive();
  overlayWindow.setAlwaysOnTop(true, 'pop-up-menu', 1);
  overlayVisible = true;
  // Interactive overlay açıkken passive'i gizle
  hidePassiveOverlay();
  setTimeout(() => {
    if (overlayWindow && !overlayWindow.isDestroyed()) {
      overlayWindow.setOpacity(1);
      overlayWindow.focus();
    }
  }, 32);
  // State varsa hemen gönder
  if (overlayReady && pendingOverlayState) {
    overlayWindow.webContents.send('overlay-update', pendingOverlayState);
    pendingOverlayState = null;
  }
}

// Göstermeden önce tam ekran boyutuna set et (titreşmeyi önler)
function ensureOverlayBounds() {
  if (!overlayWindow || overlayWindow.isDestroyed()) return;
  const { screen } = require('electron');
  const primaryDisplay = screen.getPrimaryDisplay();
  const { x, y, width, height } = primaryDisplay.bounds;
  overlayWindow.setBounds({ x, y, width, height });
}

function hideOverlay() {
  if (overlayWindow && !overlayWindow.isDestroyed()) {
    overlayWindow.hide();
    overlayVisible = false;
    // Interactive overlay kapandığında, gösterilecek bir şey varsa passive'i tekrar göster
    if (shouldShowPassiveOverlay()) {
      showPassiveOverlay();
    }
  }
}

function isOverlayVisible() {
  return overlayVisible && overlayWindow !== null && !overlayWindow.isDestroyed();
}

function sendOverlayUpdate(state) {
  // Passive overlay'e her zaman gönder
  sendPassiveOverlayUpdate(state);
  
  if (!overlayWindow || overlayWindow.isDestroyed()) return;
  if (!overlayReady) {
    pendingOverlayState = state;
    return;
  }
  // Gizli olsa bile state'i cache'le, gösterildiğinde güncel olsun
  pendingOverlayState = state;
  if (overlayVisible) {
    overlayWindow.webContents.send('overlay-update', state);
  }
}

// Overlay ready — flush pending state
ipcMain.on('overlay-ready', () => {
  console.log('[Overlay] Overlay ready');
  overlayReady = true;
  // Resolve waiting promise (showOverlay ilk oluşturmada bunu bekler)
  if (overlayReadyResolve) {
    overlayReadyResolve();
    overlayReadyResolve = null;
  }
  if (pendingOverlayState && overlayWindow && !overlayWindow.isDestroyed()) {
    overlayWindow.webContents.send('overlay-update', pendingOverlayState);
    pendingOverlayState = null;
  }
  // Kaydedilmiş widget pozisyonunu gönder
  if (savedWidgetPosition && overlayWindow && !overlayWindow.isDestroyed()) {
    overlayWindow.webContents.send('overlay-set-widget-position', savedWidgetPosition);
  }
  // Kaydedilmiş chat config'i gönder (also as initial settings for dirty tracking)
  if (overlayChatConfig && overlayWindow && !overlayWindow.isDestroyed()) {
    overlayWindow.webContents.send('overlay-chat-config', overlayChatConfig);
    overlayWindow.webContents.send('overlay-chat-initial-settings', overlayChatConfig);
  }
  // Request guild list from renderer (overlay needs it for chat dropdown)
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('overlay-request-guilds');
  }
});

// Overlay close from overlay window
ipcMain.on('overlay-close', () => {
  hideOverlay();
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('overlay-toggled', false);
  }
});

// Overlay control actions (mic, camera, screen, disconnect) → forward to main window
ipcMain.on('overlay-control', (event, action) => {
  if (mainWindow && !mainWindow.isDestroyed()) {
    // Chat widget config from overlay
    if (action.startsWith('chat-config:')) {
      try {
        const config = JSON.parse(action.substring('chat-config:'.length));
        overlayChatConfig = config;
        // Forward to passive overlay (not back to interactive overlay — avoid loop)
        if (passiveOverlayWindow && !passiveOverlayWindow.isDestroyed() && passiveOverlayReady) {
          passiveOverlayWindow.webContents.send('overlay-chat-config', config);
        }
        // Forward to renderer to persist settings
        mainWindow.webContents.send('overlay-chat-config-changed', config);
        // Show/hide passive overlay based on new state
        if (shouldShowPassiveOverlay() && mainWindow && !mainWindow.isFocused()) {
          showPassiveOverlay();
        } else if (!shouldShowPassiveOverlay()) {
          hidePassiveOverlay();
        }
      } catch (e) {}
      return;
    }
    // Ayarlar/kalite açılırken overlay'i kapat ve ana pencereyi göster
    if (action === 'open-settings' || action === 'open-camera-quality' || action === 'open-screen-quality') {
      hideOverlay();
      mainWindow.webContents.send('overlay-toggled', false);
      mainWindow.show();
      mainWindow.focus();
    }
    mainWindow.webContents.send('overlay-control', action);
  }
});

// Overlay chat — request channels for a guild
ipcMain.on('overlay-chat-request-channels', (event, guildId) => {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('overlay-chat-request-channels', guildId);
  }
});

// Overlay chat — save settings to API (triggered from overlay dropdown save button)
// Sends the current overlayChatConfig along with the save signal
ipcMain.on('overlay-chat-save-settings', () => {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('overlay-chat-save-settings', overlayChatConfig);
  }
});

// Overlay chat — channels response from renderer → forward to overlay
ipcMain.on('overlay-chat-channels-response', (event, channels) => {
  if (overlayWindow && !overlayWindow.isDestroyed() && overlayReady) {
    overlayWindow.webContents.send('overlay-chat-channels', channels);
  }
});

// Overlay navigate to server — spinner göster, ana pencerede sunucuyu aç, sonra overlay'i kapat
ipcMain.on('overlay-navigate-server', (event, serverId) => {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('overlay-navigate-server', serverId);
    mainWindow.show();
    mainWindow.focus();
  }
});

// Renderer sunucuyu yükledikten sonra overlay'i kapat
ipcMain.on('overlay-navigate-done', () => {
  // Overlay'e loading bitti sinyali gönder
  if (overlayWindow && !overlayWindow.isDestroyed() && overlayReady) {
    overlayWindow.webContents.send('overlay-navigate-done');
  }
  hideOverlay();
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send('overlay-toggled', false);
  }
});

// Widget pozisyon senkronizasyonu — interactive overlay'den passive overlay'e
let savedWidgetPosition = null;

// ── Overlay State Persistence ──
// Electron-store yerine overlay HTML'lerinin kendi localStorage'ını kullanıyoruz
// Main process sadece bellekte tutar, overlay'ler kendi localStorage'larından okur/yazar

// Helper: passive overlay gösterilmeli mi?
function shouldShowPassiveOverlay() {
  const hasParticipants = passiveOverlayState && passiveOverlayState.participants && passiveOverlayState.participants.length > 0;
  const hasChatWidget = overlayChatConfig && overlayChatConfig.enabled && overlayChatConfig.channelId;
  return !!(hasParticipants || hasChatWidget);
}

ipcMain.on('overlay-widget-position', (event, pos) => {
  savedWidgetPosition = pos;
  // Passive overlay'e de gönder
  if (passiveOverlayWindow && !passiveOverlayWindow.isDestroyed() && passiveOverlayReady) {
    passiveOverlayWindow.webContents.send('passive-overlay-set-position', pos);
  }
});

// IPC handlers
ipcMain.handle('overlay-show', () => {
  showOverlay();
  return { success: true };
});

ipcMain.handle('overlay-hide', () => {
  hideOverlay();
  return { success: true };
});

ipcMain.handle('overlay-is-visible', () => {
  return isOverlayVisible();
});

// ── PERF: overlay-update-state frequency tracking ──
let _overlayIpcCount = 0;
let _overlayIpcLastLog = Date.now();

ipcMain.handle('overlay-update-state', (event, state) => {
  _overlayIpcCount++;
  const now = Date.now();
  if (now - _overlayIpcLastLog > 5000) {
    console.log(`[PERF] overlay-update-state: ${_overlayIpcCount} calls in last 5s (${(_overlayIpcCount / 5).toFixed(1)}/s)`);
    _overlayIpcCount = 0;
    _overlayIpcLastLog = now;
  }
  sendOverlayUpdate(state);
  return { success: true };
});

ipcMain.handle('overlay-set-position', (event, position) => {
  if (isOverlayVisible() && overlayReady) {
    overlayWindow.webContents.send('overlay-position', position);
  }
  return { success: true };
});

// ── Overlay global shortcut ─────────────────────────────────────────
let overlayShortcutRegistered = false;
let currentOverlayAccelerator = null;

function registerOverlayShortcut(accelerator) {
  // Aynı kısayol zaten kayıtlıysa tekrar kaydetme
  if (overlayShortcutRegistered && currentOverlayAccelerator === accelerator) {
    return { success: true };
  }

  // Eski shortcut varsa hemen unregister et (farklı accelerator olabilir)
  if (currentOverlayAccelerator && currentOverlayAccelerator !== accelerator) {
    try {
      globalShortcut.unregister(currentOverlayAccelerator);
      console.log('[Overlay] Old shortcut unregistered:', currentOverlayAccelerator);
    } catch {}
  }
  overlayShortcutRegistered = false;
  currentOverlayAccelerator = null;
  
  try {
    const success = globalShortcut.register(accelerator, () => {
      console.log('[Overlay] Shortcut pressed, visible:', isOverlayVisible());
      if (isOverlayVisible()) {
        hideOverlay();
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send('overlay-toggled', false);
        }
      } else {
        showOverlay();
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send('overlay-toggled', true);
        }
      }
    });
    
    if (success) {
      overlayShortcutRegistered = true;
      currentOverlayAccelerator = accelerator;
      console.log('[Overlay] Shortcut registered:', accelerator);
    } else {
      console.error('[Overlay] Failed to register shortcut:', accelerator);
    }
    return { success };
  } catch (err) {
    console.error('[Overlay] Shortcut registration error:', err.message);
    return { success: false, error: err.message };
  }
}

function unregisterOverlayShortcut() {
  if (overlayShortcutRegistered && currentOverlayAccelerator) {
    const acc = currentOverlayAccelerator;
    overlayShortcutRegistered = false;
    currentOverlayAccelerator = null;
    try {
      globalShortcut.unregister(acc);
      console.log('[Overlay] Shortcut unregistered:', acc);
    } catch {}
  }
}

ipcMain.handle('overlay-register-shortcut', (event, accelerator) => {
  return registerOverlayShortcut(accelerator);
});

ipcMain.handle('overlay-unregister-shortcut', () => {
  unregisterOverlayShortcut();
  return { success: true };
});

// ============================================
// PASSIVE OVERLAY (Click-Through, Always Visible)
// ============================================

let passiveOverlayWindow = null;
let passiveOverlayReady = false;
let passiveOverlayEnabled = true; // Kullanıcı ayarından kontrol edilir
let passiveOverlayState = null;

function createPassiveOverlay() {
  if (passiveOverlayWindow && !passiveOverlayWindow.isDestroyed()) return;

  const { screen } = require('electron');
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.bounds;

  passiveOverlayReady = false;

  passiveOverlayWindow = new BrowserWindow({
    width,
    height,
    x: primaryDisplay.bounds.x,
    y: primaryDisplay.bounds.y,
    transparent: true,
    frame: false,
    skipTaskbar: true,
    resizable: false,
    movable: false,
    hasShadow: false,
    show: false,
    focusable: false,
    type: 'toolbar',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'overlay-preload.cjs'),
      backgroundThrottling: false
    }
  });

  passiveOverlayWindow.loadFile(path.join(__dirname, 'overlay-passive.html'));
  passiveOverlayWindow.setAlwaysOnTop(true, 'screen-saver', 1);

  // Dev mode: Ctrl+R ile passive overlay'i yeniden yükle
  if (isDev) {
    passiveOverlayWindow.webContents.on('before-input-event', (event, input) => {
      if (input.control && input.key === 'r') {
        passiveOverlayWindow.webContents.reload();
        passiveOverlayReady = false;
        event.preventDefault();
      }
      if (input.control && input.shift && input.key === 'I') {
        passiveOverlayWindow.webContents.openDevTools({ mode: 'detach' });
        event.preventDefault();
      }
    });
  }
  
  // ★ Click-through: tüm mouse event'leri alttaki uygulamaya geçer
  // forward: false — forwarding cursor flickering'e neden oluyor (overlay ile ana pencere arası geçiş)
  passiveOverlayWindow.setIgnoreMouseEvents(true);

  // Windows'ta content protection — ekran paylaşımında görünmez (opsiyonel)
  // passiveOverlayWindow.setContentProtection(true);

  passiveOverlayWindow.on('closed', () => {
    passiveOverlayWindow = null;
    passiveOverlayReady = false;
  });

  console.log('[PassiveOverlay] Created (hidden, click-through)');
}

function showPassiveOverlay() {
  if (!passiveOverlayEnabled) return;
  if (!passiveOverlayWindow || passiveOverlayWindow.isDestroyed()) {
    createPassiveOverlay();
  }
  // Interactive overlay açıkken passive'i gizle (çakışmasın)
  if (overlayVisible) return;
  
  if (passiveOverlayWindow && !passiveOverlayWindow.isDestroyed()) {
    // Aktif ekranı tespit et (cursor'un bulunduğu ekran)
    const { screen } = require('electron');
    const cursorPoint = screen.getCursorScreenPoint();
    const activeDisplay = screen.getDisplayNearestPoint(cursorPoint);
    const { x, y, width, height } = activeDisplay.bounds;
    passiveOverlayWindow.setBounds({ x, y, width, height });

    passiveOverlayWindow.showInactive(); // Focus çalmadan göster
    passiveOverlayWindow.setAlwaysOnTop(true, 'screen-saver', 1);
    // Flush cached state immediately on show (was suppressed while hidden)
    if (passiveOverlayReady && passiveOverlayState) {
      passiveOverlayWindow.webContents.send('passive-overlay-update', passiveOverlayState);
    }
    // Kaydedilmiş widget pozisyonunu gönder
    if (savedWidgetPosition && passiveOverlayReady) {
      passiveOverlayWindow.webContents.send('passive-overlay-set-position', savedWidgetPosition);
    }
  }
}

function hidePassiveOverlay() {
  // Clear state so stale participants don't show when overlay is shown again
  passiveOverlayState = null;
  if (passiveOverlayWindow && !passiveOverlayWindow.isDestroyed()) {
    // Send empty state to clear UI before hiding
    if (passiveOverlayReady) {
      passiveOverlayWindow.webContents.send('passive-overlay-update', { participants: [], channelName: '' });
    }
    passiveOverlayWindow.hide();
  }
}

function sendPassiveOverlayUpdate(state) {
  passiveOverlayState = state;
  if (!passiveOverlayWindow || passiveOverlayWindow.isDestroyed() || !passiveOverlayReady) return;
  // ponytail: don't send updates to hidden window — prevents DOM buildup in invisible webContents
  if (!passiveOverlayWindow.isVisible()) return;
  passiveOverlayWindow.webContents.send('passive-overlay-update', state);
}

// Passive overlay ready
ipcMain.on('passive-overlay-ready', () => {
  console.log('[PassiveOverlay] Ready');
  passiveOverlayReady = true;
  if (passiveOverlayState) {
    sendPassiveOverlayUpdate(passiveOverlayState);
  }
  // Kaydedilmiş chat config ve pozisyonu gönder
  if (overlayChatConfig && passiveOverlayWindow && !passiveOverlayWindow.isDestroyed()) {
    passiveOverlayWindow.webContents.send('overlay-chat-config', overlayChatConfig);
  }
  if (overlayChatPosition && passiveOverlayWindow && !passiveOverlayWindow.isDestroyed()) {
    passiveOverlayWindow.webContents.send('overlay-chat-set-position', overlayChatPosition);
  }
});

// Renderer'dan ses kanalına bağlanma/ayrılma bildirimi
ipcMain.handle('passive-overlay-set-connected', (event, connected) => {
  if (connected) {
    showPassiveOverlay();
  } else {
    hidePassiveOverlay();
  }
  return { success: true };
});

// Passive overlay'i etkinleştir/devre dışı bırak (kullanıcı ayarı)
ipcMain.handle('passive-overlay-set-enabled', (event, enabled) => {
  passiveOverlayEnabled = enabled;
  if (!enabled) {
    hidePassiveOverlay();
  }
  return { success: true };
});

// ============================================
// OVERLAY CHAT WIDGET
// ============================================

let overlayChatConfig = null; // { enabled: boolean, guildId: string, channelId: string, channelName: string }
let overlayChatPosition = null; // { x: number, y: number }
let overlayChatMessages = []; // Last N messages to show
const OVERLAY_CHAT_MAX_MESSAGES = 50;

// Renderer sets chat widget config (which channel to show)
ipcMain.handle('overlay-chat-set-config', (event, config) => {
  overlayChatConfig = config;
  // Forward config to passive overlay
  if (passiveOverlayWindow && !passiveOverlayWindow.isDestroyed() && passiveOverlayReady) {
    passiveOverlayWindow.webContents.send('overlay-chat-config', config);
  }
  // Also forward to interactive overlay
  if (overlayWindow && !overlayWindow.isDestroyed() && overlayReady) {
    overlayWindow.webContents.send('overlay-chat-config', config);
  }
  return { success: true };
});

// Renderer sends new chat message to overlay
ipcMain.handle('overlay-chat-new-message', (event, message) => {
  if (!overlayChatConfig || !overlayChatConfig.enabled) return { success: false };
  
  // Add to buffer
  overlayChatMessages.push(message);
  if (overlayChatMessages.length > OVERLAY_CHAT_MAX_MESSAGES) {
    overlayChatMessages = overlayChatMessages.slice(-OVERLAY_CHAT_MAX_MESSAGES);
  }
  
  // Forward to passive overlay
  if (passiveOverlayWindow && !passiveOverlayWindow.isDestroyed() && passiveOverlayReady) {
    passiveOverlayWindow.webContents.send('overlay-chat-message', message);
  }
  return { success: true };
});

// Chat widget position (saved from interactive overlay drag)
ipcMain.on('overlay-chat-position', (event, pos) => {
  overlayChatPosition = pos;
  // Forward to passive overlay
  if (passiveOverlayWindow && !passiveOverlayWindow.isDestroyed() && passiveOverlayReady) {
    passiveOverlayWindow.webContents.send('overlay-chat-set-position', pos);
  }
});

// Chat widget size
ipcMain.on('overlay-chat-size', (event, size) => {
  // Forward to passive overlay
  if (passiveOverlayWindow && !passiveOverlayWindow.isDestroyed() && passiveOverlayReady) {
    passiveOverlayWindow.webContents.send('overlay-chat-set-size', size);
  }
});

// ============================================
// GLOBAL INPUT HOOK (Push-to-Talk support)
// ============================================

// uiohook keycode -> DOM e.code mapping
const UIOHOOK_TO_CODE = {
  [UiohookKey.Escape]: 'Escape',
  [UiohookKey.F1]: 'F1', [UiohookKey.F2]: 'F2', [UiohookKey.F3]: 'F3', [UiohookKey.F4]: 'F4',
  [UiohookKey.F5]: 'F5', [UiohookKey.F6]: 'F6', [UiohookKey.F7]: 'F7', [UiohookKey.F8]: 'F8',
  [UiohookKey.F9]: 'F9', [UiohookKey.F10]: 'F10', [UiohookKey.F11]: 'F11', [UiohookKey.F12]: 'F12',
  [UiohookKey.Backquote]: 'Backquote',
  [UiohookKey['1']]: 'Digit1', [UiohookKey['2']]: 'Digit2', [UiohookKey['3']]: 'Digit3',
  [UiohookKey['4']]: 'Digit4', [UiohookKey['5']]: 'Digit5', [UiohookKey['6']]: 'Digit6',
  [UiohookKey['7']]: 'Digit7', [UiohookKey['8']]: 'Digit8', [UiohookKey['9']]: 'Digit9',
  [UiohookKey['0']]: 'Digit0',
  [UiohookKey.Minus]: 'Minus', [UiohookKey.Equal]: 'Equal',
  [UiohookKey.Backspace]: 'Backspace', [UiohookKey.Tab]: 'Tab',
  [UiohookKey.Q]: 'KeyQ', [UiohookKey.W]: 'KeyW', [UiohookKey.E]: 'KeyE', [UiohookKey.R]: 'KeyR',
  [UiohookKey.T]: 'KeyT', [UiohookKey.Y]: 'KeyY', [UiohookKey.U]: 'KeyU', [UiohookKey.I]: 'KeyI',
  [UiohookKey.O]: 'KeyO', [UiohookKey.P]: 'KeyP',
  [UiohookKey.BracketLeft]: 'BracketLeft', [UiohookKey.BracketRight]: 'BracketRight',
  [UiohookKey.Enter]: 'Enter',
  [UiohookKey.CapsLock]: 'CapsLock',
  [UiohookKey.A]: 'KeyA', [UiohookKey.S]: 'KeyS', [UiohookKey.D]: 'KeyD', [UiohookKey.F]: 'KeyF',
  [UiohookKey.G]: 'KeyG', [UiohookKey.H]: 'KeyH', [UiohookKey.J]: 'KeyJ', [UiohookKey.K]: 'KeyK',
  [UiohookKey.L]: 'KeyL',
  [UiohookKey.Semicolon]: 'Semicolon', [UiohookKey.Quote]: 'Quote', [UiohookKey.Backslash]: 'Backslash',
  [UiohookKey.Shift]: 'ShiftLeft',
  [UiohookKey.Z]: 'KeyZ', [UiohookKey.X]: 'KeyX', [UiohookKey.C]: 'KeyC', [UiohookKey.V]: 'KeyV',
  [UiohookKey.B]: 'KeyB', [UiohookKey.N]: 'KeyN', [UiohookKey.M]: 'KeyM',
  [UiohookKey.Comma]: 'Comma', [UiohookKey.Period]: 'Period', [UiohookKey.Slash]: 'Slash',
  [UiohookKey.ShiftRight]: 'ShiftRight',
  [UiohookKey.Ctrl]: 'ControlLeft', [UiohookKey.CtrlRight]: 'ControlRight',
  [UiohookKey.Alt]: 'AltLeft', [UiohookKey.AltRight]: 'AltRight',
  [UiohookKey.Meta]: 'MetaLeft', [UiohookKey.MetaRight]: 'MetaRight',
  [UiohookKey.Space]: 'Space',
  [UiohookKey.Insert]: 'Insert', [UiohookKey.Delete]: 'Delete',
  [UiohookKey.Home]: 'Home', [UiohookKey.End]: 'End',
  [UiohookKey.PageUp]: 'PageUp', [UiohookKey.PageDown]: 'PageDown',
  [UiohookKey.ArrowUp]: 'ArrowUp', [UiohookKey.ArrowDown]: 'ArrowDown',
  [UiohookKey.ArrowLeft]: 'ArrowLeft', [UiohookKey.ArrowRight]: 'ArrowRight',
  [UiohookKey.NumLock]: 'NumLock',
  [UiohookKey.NumpadDivide]: 'NumpadDivide', [UiohookKey.NumpadMultiply]: 'NumpadMultiply',
  [UiohookKey.NumpadSubtract]: 'NumpadSubtract', [UiohookKey.NumpadAdd]: 'NumpadAdd',
  [UiohookKey.NumpadEnter]: 'NumpadEnter', [UiohookKey.NumpadDecimal]: 'NumpadDecimal',
  [UiohookKey.Numpad0]: 'Numpad0', [UiohookKey.Numpad1]: 'Numpad1', [UiohookKey.Numpad2]: 'Numpad2',
  [UiohookKey.Numpad3]: 'Numpad3', [UiohookKey.Numpad4]: 'Numpad4', [UiohookKey.Numpad5]: 'Numpad5',
  [UiohookKey.Numpad6]: 'Numpad6', [UiohookKey.Numpad7]: 'Numpad7', [UiohookKey.Numpad8]: 'Numpad8',
  [UiohookKey.Numpad9]: 'Numpad9',
};

// Mouse button mapping: uiohook button -> Mouse{n} string
const UIOHOOK_MOUSE_MAP = {
  1: 'Mouse0', // Left
  2: 'Mouse2', // Right
  3: 'Mouse1', // Middle
  4: 'Mouse3', // Back
  5: 'Mouse4', // Forward
};

let globalHookStarted = false;
let globalHookCleanup = null;

// PTT key filter — only matching events are sent to renderer
// Parsed from combo string like "Ctrl+Space", "Mouse3", "KeyV" etc.
let pttFilter = null; // { type: 'keyboard'|'mouse', key: string, ctrl: bool, shift: bool, alt: bool }
let muteFilter = null; // Same format as pttFilter
let deafenFilter = null; // Same format as pttFilter

function parsePTTCombo(combo) {
  if (!combo) return null;
  const parts = combo.split('+');
  const filter = { type: 'keyboard', key: '', ctrl: false, shift: false, alt: false };
  for (const part of parts) {
    const lower = part.toLowerCase();
    if (lower === 'ctrl' || lower === 'control') filter.ctrl = true;
    else if (lower === 'shift') filter.shift = true;
    else if (lower === 'alt') filter.alt = true;
    else {
      filter.key = part;
      if (part.startsWith('Mouse')) filter.type = 'mouse';
    }
  }
  return filter.key ? filter : null;
}

function setupGlobalInputHook() {
  if (globalHookStarted) return;
  globalHookCleanup?.();
  const listeners = [];
  const listen = (name, handler) => {
    uIOhook.on(name, handler);
    listeners.push([name, handler]);
  };
  globalHookCleanup = () => {
    for (const [name, handler] of listeners) uIOhook.removeListener(name, handler);
    listeners.length = 0;
    if (mainWindow && !mainWindow.isDestroyed()) mainWindow.webContents.send('global-ptt', false);
  };

  // Track modifier state
  let pttActive = false;
  const modifiers = { ctrl: false, shift: false, alt: false };

  listen('keydown', (e) => {
    const code = UIOHOOK_TO_CODE[e.keycode];
    if (!code) return;

    // Update modifier tracking
    if (code === 'ControlLeft' || code === 'ControlRight') modifiers.ctrl = true;
    else if (code === 'ShiftLeft' || code === 'ShiftRight') modifiers.shift = true;
    else if (code === 'AltLeft' || code === 'AltRight') modifiers.alt = true;

    // Check PTT filter
    if (pttFilter && pttFilter.type === 'keyboard' && code === pttFilter.key) {
      if (pttFilter.ctrl === modifiers.ctrl && pttFilter.shift === modifiers.shift && pttFilter.alt === modifiers.alt) {
        if (!pttActive) {
          pttActive = true;
          if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.webContents.send('global-ptt', true);
          }
        }
      }
    }

    // Check mute filter (toggle on keydown)
    if (muteFilter && muteFilter.type === 'keyboard' && code === muteFilter.key) {
      if (muteFilter.ctrl === modifiers.ctrl && muteFilter.shift === modifiers.shift && muteFilter.alt === modifiers.alt) {
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send('global-mute-toggle');
        }
      }
    }

    // Check deafen filter (toggle on keydown)
    if (deafenFilter && deafenFilter.type === 'keyboard' && code === deafenFilter.key) {
      if (deafenFilter.ctrl === modifiers.ctrl && deafenFilter.shift === modifiers.shift && deafenFilter.alt === modifiers.alt) {
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send('global-deafen-toggle');
        }
      }
    }
  });

  listen('keyup', (e) => {
    const code = UIOHOOK_TO_CODE[e.keycode];
    if (!code) return;

    // Modifier state güncelle (match check'ten ÖNCE)
    if (code === 'ControlLeft' || code === 'ControlRight') modifiers.ctrl = false;
    else if (code === 'ShiftLeft' || code === 'ShiftRight') modifiers.shift = false;
    else if (code === 'AltLeft' || code === 'AltRight') modifiers.alt = false;

    if (pttFilter && pttFilter.type === 'keyboard') {
      // Ana PTT tuşunun bırakılması — modifier durumundan bağımsız
      if (code === pttFilter.key) {
        if (pttActive) {
          pttActive = false;
          if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.webContents.send('global-ptt', false);
          }
        }
      }
      // Combo'nun parçası olan modifier bırakıldığında da PTT kapat (pttActive guard ile)
      else if (pttActive) {
        if ((pttFilter.ctrl && (code === 'ControlLeft' || code === 'ControlRight')) ||
            (pttFilter.shift && (code === 'ShiftLeft' || code === 'ShiftRight')) ||
            (pttFilter.alt && (code === 'AltLeft' || code === 'AltRight'))) {
          pttActive = false;
          if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.webContents.send('global-ptt', false);
          }
        }
      }
    }
  });

  listen('mousedown', (e) => {
    const button = UIOHOOK_MOUSE_MAP[e.button];
    if (!button) return;

    // PTT
    if (pttFilter && pttFilter.type === 'mouse' && button === pttFilter.key) {
      if (pttFilter.ctrl === modifiers.ctrl && pttFilter.shift === modifiers.shift && pttFilter.alt === modifiers.alt) {
        if (!pttActive) {
          pttActive = true;
          if (mainWindow && !mainWindow.isDestroyed()) {
            mainWindow.webContents.send('global-ptt', true);
          }
        }
      }
    }

    // Mute toggle
    if (muteFilter && muteFilter.type === 'mouse' && button === muteFilter.key) {
      if (muteFilter.ctrl === modifiers.ctrl && muteFilter.shift === modifiers.shift && muteFilter.alt === modifiers.alt) {
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send('global-mute-toggle');
        }
      }
    }

    // Deafen toggle
    if (deafenFilter && deafenFilter.type === 'mouse' && button === deafenFilter.key) {
      if (deafenFilter.ctrl === modifiers.ctrl && deafenFilter.shift === modifiers.shift && deafenFilter.alt === modifiers.alt) {
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send('global-deafen-toggle');
        }
      }
    }
  });

  listen('mouseup', (e) => {
    if (!pttFilter || pttFilter.type !== 'mouse') return;
    const button = UIOHOOK_MOUSE_MAP[e.button];
    if (button !== pttFilter.key) return;

    if (pttActive && mainWindow && !mainWindow.isDestroyed()) {
      pttActive = false;
      mainWindow.webContents.send('global-ptt', false);
    }
  });

  try { uIOhook.start(); } catch (error) {
    globalHookCleanup();
    globalHookCleanup = null;
    throw error;
  }
  globalHookStarted = true;
  console.log('[GlobalHook] Global input hook started');
  console.log('[PERF] uIOhook.start() completed — if cursor freezes after this, uIOhook is the cause');
}

// Renderer tells us which key combo to listen for
ipcMain.handle('global-hook-set-ptt-key', (event, comboString) => {
  pttFilter = parsePTTCombo(comboString);
  console.log('[GlobalHook] PTT key set:', comboString, '->', pttFilter);
  return { success: true };
});

ipcMain.handle('global-hook-set-mute-key', (event, comboString) => {
  muteFilter = parsePTTCombo(comboString);
  console.log('[GlobalHook] Mute key set:', comboString, '->', muteFilter);
  return { success: true };
});

ipcMain.handle('global-hook-set-deafen-key', (event, comboString) => {
  deafenFilter = parsePTTCombo(comboString);
  console.log('[GlobalHook] Deafen key set:', comboString, '->', deafenFilter);
  return { success: true };
});

// Start/stop hook based on renderer request
ipcMain.handle('global-hook-start', () => {
  setupGlobalInputHook();
  return { success: true };
});

ipcMain.handle('global-hook-stop', () => {
  try {
    if (globalHookStarted) uIOhook.stop();
  } finally {
    globalHookCleanup?.();
    globalHookCleanup = null;
    globalHookStarted = false;
    pttFilter = null;
    muteFilter = null;
    deafenFilter = null;
    console.log('[GlobalHook] Global input hook stopped');
  }
  return { success: true };
});

// Cleanup on quit
app.on('will-quit', () => {
  if (globalHookStarted) {
    uIOhook.stop();
    globalHookStarted = false;
  }
  globalShortcut.unregisterAll();
  if (overlayWindow && !overlayWindow.isDestroyed()) {
    overlayWindow.close();
    overlayWindow = null;
  }
  if (passiveOverlayWindow && !passiveOverlayWindow.isDestroyed()) {
    passiveOverlayWindow.close();
    passiveOverlayWindow = null;
  }
});
