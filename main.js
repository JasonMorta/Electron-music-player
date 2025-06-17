const {
  app,
  BrowserWindow,
  ipcMain,
  Menu,
} = require('electron/main');
const path = require('node:path')
const menu = require('./menu');
// import path from 'path';
// import fs from 'fs';
const usMac = process.platform === 'darwin';
const isDev = process.env.NODE_ENV !== 'development';
console.log('isDev', isDev)
console.log('Running on macOS:', usMac);


// const indexPath = path.join(__dirname, 'index.html');
// console.log('Trying to load:', indexPath);
// console.log('Exists:', fs.existsSync(indexPath));

function createWindow() {
  const win = new BrowserWindow({
    title: 'Audio Player',
    width: isDev ? 1500 : 600,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: true,
    },
  });

  // Open DevTools automatically for debugging if n dev mode
  if (isDev) {
    win.webContents.openDevTools();
  }

  //win.loadFile(path.join(__dirname, './renderer/electron-music-player/dist/index.html'));
  win.loadFile('./UI/index.html')




  // Optional: handle window closed
  win.on('closed', () => {
    // Dereference the window object if needed
  });
}

// IPC handler for file selection
// ipcMain.handle('select-file', async () => {
//   const result = await dialog.showOpenDialog({
//     properties: ['openFile'],
//     filters: [{ name: 'Audio Files', extensions: ['mp3', 'wav', 'ogg'] }],
//   });
//   return result.canceled ? null : result.filePaths[0];
// });

app.whenReady().then(() => {
  createWindow();

  // Set up the application menu
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});



// Quitting the app when all windows are closed. excluding macOS where it's common to keep the app running in the background.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
