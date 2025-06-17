const { dialog } = require("electron");

const menu = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open File',
        click: () => {
          dialog.showOpenDialog({
            properties: ['openFile'],
            filters: [{ name: 'Audio Files', extensions: ['mp3', 'wav', 'ogg'] }],
          }).then(result => {
            if (!result.canceled && result.filePaths.length > 0) {
              console.log('Selected file:', result.filePaths[0]);
              return result.filePaths[0]; // Return the selected file path
            
            }
          });
        },
        //accelerator: 'CmdOrCtrl+O', // Uncomment for keyboard shortcut
      },
      { type: 'separator' },
      { role: 'quit' },
    ],
  },
  {
    label: 'Help',
    submenu: [
      {
        label: 'About',
        click: () => {
          dialog.showMessageBox({
            type: 'info',
            title: 'About',
            message: 'Audio Player v1.0\nBuilt with Electron',
          });
        },
      },
      { type: 'separator' },
      { role: 'toggleDevTools' }, // Toggle Developer Tools
    ],
  }
]

module.exports = menu;