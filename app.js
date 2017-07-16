const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('window-all-closed', function() {
  app.quit();
});
app.on('ready', function() {
  mainWindow = new BrowserWindow({
    alwaysOnTop: true,
    transparent: true,
    width: 600,
    height: 400,
    x:20, y:20,
    frame: false
  });
  mainWindow.loadURL('index.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
