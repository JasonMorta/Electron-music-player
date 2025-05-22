# 🎵 Electron Music Player

A cross-platform desktop music player built with **Electron**, **React**, **Vite**, and **TypeScript**. This app allows users to select and play local music files from a clean, lightweight desktop interface.

---

## 📦 Features

- 🎧 Play local music files
- ⚡ Fast development with Vite + React
- 🖥️ Desktop packaging via electron-builder
- 🧩 Fully typed with TypeScript
- 🧱 Easy to customize UI and features
- 🪟 Windows production-ready build

---

## 📁 Project Structure

```
electron-music-player/
├── assets/                       # App assets (icons, etc.)
│   └── icon.ico
├── dist/                         # Vite build output
├── electron-musuic-player/
│   ├── main.ts                   # Electron main process
│   ├── preload.ts                # Optional preload script
│   ├── App.tsx                   # React app entry
│   └── index.html                # Root HTML
├── release/                      # Final packaged app
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/yourusername/electron-music-player.git
cd electron-music-player
pnpm install
```

### 2. Development Preview in Browser

```bash
pnpm run dev
```

Open browser at http://localhost:5173

### 3. Run Electron with Built Files (Dev)

```bash
pnpm run electron
```

This runs Electron and loads the built React frontend from Vite.

---

## 🏗️ Build for Production

### Full Build & Package

```bash
pnpm run dist
```

This will:
- Compile TypeScript: `tsc`
- Build the Vite frontend for production
- Package the app with `electron-builder`

The built `.exe` and supporting files will be in the `/release` folder.

---

## 🧰 Fixes & Configuration

### ✅ Fix Asset Paths in Production

Ensure you have this in `vite.config.ts`:

```ts
export default defineConfig({
  base: './',
  plugins: [react()],
});
```

### ✅ Fix Electron Loading Local HTML

In your `main.ts`, load the built file correctly:

```ts
mainWindow.loadFile(path.join(__dirname, 'index.html'));
```

If you see a blank window or missing `.js` files, make sure your `index.html` references assets like this:

```html
<script type="module" src="./assets/index-xxxxx.js"></script>
```

---

## 🎨 Customize Your Icon

1. Create a 256x256 `.ico` file (you can use [favicon.io](https://favicon.io) or GIMP/Photoshop).
2. Place it in the `assets/` folder.
3. Update your `package.json` under `build`:

```json
"build": {
  "icon": "assets/icon.ico"
}
```

This icon will appear in the `.exe` after build.

---

## 🛠️ package.json Example

```json
{
  "name": "electron-musuic-player",
  "author": "Your Name",
  "description": "Simple Electron music player that plays local music files",
  "version": "0.0.1",
  "main": "electron-music-player/dist/main.js",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "compile": "tsc",
    "dist": "pnpm build && pnpm compile && electron-builder",
    "electron": "tsc && electron electron-music-player/dist/main.js",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "build": {
    "appId": "com.yourname.musicplayer",
    "productName": "MusicPlayer",
    "directories": {
      "buildResources": "assets",
      "output": "release"
    },
    "files": [
      "electron-musuic-player/dist/**/*",
      "node_modules/**/*",
      "package.json"
    ],
    "win": {
      "target": "nsis"
    },
    "icon": "assets/icon.ico"
  },
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react-swc": "^3.9.0",
    "electron": "^36.2.1",
    "electron-builder": "^26.0.12",
    "typescript": "~5.8.3",
    "vite": "^6.3.5"
  }
}
```

---

## 💡 Ideas for Further Customization

- Add a music playlist system
- Show waveform visualizations
- Dark/light mode toggle
- Drag-and-drop music files
- Persist state using local storage or a lightweight DB like `lowdb`
- Show cover art from music metadata
- Global keyboard shortcuts (play/pause/next)
- Add support for `.m3u` playlists

---

## 🧽 Clean Build Cache

If you ever need a clean rebuild:

```bash
rm -rf dist release
pnpm install
pnpm run dist
```

---

## 🧾 License

MIT — feel free to modify and share!
