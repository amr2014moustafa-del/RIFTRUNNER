const { app, BrowserWindow } = require('electron');
function createWindow() {
  const win = new BrowserWindow({
    width: 1280, height: 800, minWidth: 900, minHeight: 600,
    backgroundColor: '#080b10',
    autoHideMenuBar: true,
    title: 'ASHEN OATH: THE LAST EMBER',
    webPreferences: { contextIsolation: true, nodeIntegration: false }
  });
  win.loadFile('index.html');
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
