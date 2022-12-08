const { app, BrowserWindow } = require('electron')
require('@electron/remote/main').initialize()

function createWindow() {

  // checking os
  if (process.platform === "win32") {
    var iconPath = 'icons/icon.png';
  } else if (process.platform === "darwin") {
    var iconPath = 'icons/icon.icns';
  }

  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    },
    icon: iconPath
  })

  // loading main window
  win.loadURL(`http://URL_HERE.com/`);
  win.show();
}

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})