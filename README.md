# YouTube Watch Later Cleaner

Lightweight browser console/script tool to remove all videos from your YouTube "Watch later" playlist by simulating the playlist item menu → "Remove from Watch later" action.

Reasons to use
- Quick cleanup of a large Watch Later playlist
- Runs in browser (no YouTube API or authentication required)
- Can be used as a one-off console snippet or built into a small bundle

Features
- Finds playlist items on the Watch Later page
- Opens the item menu and clicks "Remove from Watch later"
- Logs removed video titles and errors to the console
- Simple, dependency-free runtime behavior after bundling

Prerequisites
- Node.js (>= 14) and npm (for building)
- A modern browser (Chrome, Edge, Firefox) with DevTools

Quick start (recommended)
1. Clone the repo and install:
   - npm install
2. Build the script:
   - npm run deploy
3. Open your Watch Later playlist in the browser:
   - https://www.youtube.com/playlist?list=WL
4. Open DevTools → Console (F12) and inject the bundle:
   - Open `dist/bundle.js`, copy its contents and paste into the Console
5. Execute the cleanup:
   - WatchLaterCleaner.main()
   - The console will log progress and removed video titles.

Notes about building and exports
- The repository's webpack/esbuild config bundles the script into a global named `WatchLaterCleaner` (see `webpack.config.js` / `package.json` scripts).
- After injecting the bundle in a page, try `WatchLaterCleaner.main()` depending on how the bundle exposes exports.

Security & privacy
- Script runs in your browser and performs clicks on playlist items — it does not send data to any external service.
- Use at your own risk — test with a few items first.
