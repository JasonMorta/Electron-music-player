const { contextBridge, ipcRenderer } = require('electron')
const os = require('os')
const path = require('path')

contextBridge.exposeInMainWorld('versions', {
  // selectFile: () => ipcRenderer.invoke('select-file')
  node: () => process.versions.node,
  electron: () => process.versions.electron,
  chrome: () => process.versions.chrome,
});

contextBridge.exposeInMainWorld('os', {
  homedir: () => os.homedir(),
  platform: () => os.platform(),
  release: () => os.release(),
  arch: () => os.arch(),
  cpus: () => os.cpus(),
});

contextBridge.exposeInMainWorld('path', {
  join: (...args) => path.join(...args),
  dirname: (p) => path.dirname(p),
  basename: (p) => path.basename(p),
  extname: (p) => path.extname(p),
});