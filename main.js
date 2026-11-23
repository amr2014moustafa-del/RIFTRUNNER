const { app, BrowserWindow, Menu, session } = require('electron');
const path = require('path');

app.commandLine.appendSwitch('autoplay-policy', 'no-user-gesture-required');

let splash;
let win;

function create() {
  // Keep the game fully offline: allow only local app resources.
  session.defaultSession.webRequest.onBeforeRequest((details, callback) => {
    const url = details.url;
    const isLocal = url.startsWith('file:') ||
      url.startsWith('devtools:') ||
      url.startsWith('data:') ||
      url.startsWith('blob:');
    callback({ cancel: !isLocal });
  });

  Menu.setApplicationMenu(null);

  const icon = path.join(__dirname, 'icon.png');

  splash = new BrowserWindow({
    width: 520,
    height: 300,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
    icon,
    backgroundColor: '#05050c'
  });
  splash.loadFile(path.join(__dirname, 'splash.html'));

  win = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 640,
    minHeight: 300,
    show: false,
    icon,
    backgroundColor: '#000000',
    title: 'RIFTRUNNER',
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      devTools: false
    }
  });

  win.loadFile(path.join(__dirname, 'index.html'));

  win.once('ready-to-show', () => {
    setTimeout(() => {
      if (splash && !splash.isDestroyed()) splash.close();
      if (win && !win.isDestroyed()) {
        win.show();
        win.focus();
      }
    }, 1600);
  });

  win.webContents.on('will-navigate', event => event.preventDefault());
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  win.webContents.on('before-input-event', (event, input) => {
    if (input.type === 'keyDown' && input.key === 'F11') {
      win.setFullScreen(!win.isFullScreen());
      event.preventDefault();
    }
  });
}

const lock = app.requestSingleInstanceLock();
if (!lock) {
  app.quit();
} else {
  app.whenReady().then(create);
}

app.on('window-all-closed', () => app.quit());
