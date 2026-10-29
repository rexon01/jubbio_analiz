'use strict';
const { contextBridge, ipcRenderer } = require('electron');

// Channels that overlay HTML pages are allowed to send to main process
const SEND_CHANNELS = [
  'overlay-navigate-server',
  'overlay-widget-position',
  'overlay-control',
  'overlay-close',
  'overlay-chat-request-channels',
  'overlay-chat-size',
  'overlay-chat-save-settings',
  'overlay-chat-position',
  'overlay-ready',
  'passive-overlay-ready',
];

// Channels that overlay HTML pages are allowed to listen on
const ON_CHANNELS = [
  'overlay-navigate-done',
  'overlay-set-widget-position',
  'overlay-update',
  'overlay-position',
  'overlay-chat-initial-settings',
  'overlay-chat-channels',
  'overlay-chat-config',
  'overlay-chat-message',
  'overlay-chat-set-position',
  'overlay-chat-set-size',
  'passive-overlay-update',
  'passive-overlay-set-position',
];

// Channels that overlay HTML pages are allowed to invoke on main process
const INVOKE_CHANNELS = ['get-screen-sources'];

contextBridge.exposeInMainWorld('electronAPI', {
  send: (channel, ...args) => {
    if (SEND_CHANNELS.includes(channel)) {
      ipcRenderer.send(channel, ...args);
    }
  },
  on: (channel, listener) => {
    if (ON_CHANNELS.includes(channel)) {
      // Wrap to strip the IpcRendererEvent; callers use (_e, data) pattern
      ipcRenderer.on(channel, (_event, ...args) => listener({}, ...args));
    }
  },
  invoke: (channel, ...args) => {
    if (INVOKE_CHANNELS.includes(channel)) {
      return ipcRenderer.invoke(channel, ...args);
    }
    return Promise.reject(new Error(`Invoke channel not allowed: ${channel}`));
  },
});
