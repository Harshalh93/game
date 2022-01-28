const { app, BrowserWindow } = require('electron')

{
  "name": "my-electron-app",
  "version": "0.1.0",
  "author": "Mr.h2s",
  "description": "My Electron app",
  "main": "main.js",
  "scripts": {
      "start": "electron ."
  }
}


function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
