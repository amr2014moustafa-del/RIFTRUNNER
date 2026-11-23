const { app, BrowserWindow, Menu, session, globalShortcut } = require('electron');
const path = require('path');
app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');
let splash, win;
function create() {
  // Fully offline: block every non-local request
  session.defaultSession.webRequest.onBeforeRequest((d, cb) =>
    cb({ cancel: !(d.url.startsWith('file:') || d.url.startsWith('devtools:') || d.url.startsWith('data:') || d.url.startsWith('blob:')) }));
  Menu.setApplicationMenu(null);
  const icon = path.join(__dirname, 'build', 'icon.png');
  splash = new BrowserWindow({ width: 520, height: 300, frame: false, resizable: false, alwaysOnTop: true, icon, backgroundColor: '#05050c' });
  splash.loadFile('splash.html');
  win = new BrowserWindow({
    width: 1280, height: 720, minWidth: 640, minHeight: 300, show: false, icon, backgroundColor: '#000000', title: 'RIFTRUNNER',
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true, devTools: false }
  });
  win.loadFile(path.join('game', 'index.html'));
  win.once('ready-to-show', () => setTimeout(() => { if (splash) splash.close(); win.show(); win.focus(); }, 1600));
  win.webContents.on('will-navigate', e => e.preventDefault());
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  win.webContents.on('before-input-event', (e, i) => {
    if (i.type === 'keyDown' && i.key === 'F11') { win.setFullScreen(!win.isFullScreen()); e.preventDefault(); }
  });
}
const lock = app.requestSingleInstanceLock();
if (!lock) app.quit(); else app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
