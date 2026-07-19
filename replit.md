# Elite Fitness

A professional fitness coaching website built with Angular 18, Tailwind CSS, and TypeScript.

## Running the app

**Workflow:** `Start application` — runs `npm start -- --host 0.0.0.0 --port 5000` and serves on port 5000.

## Stack

- **Framework:** Angular 18 (standalone components, esbuild application builder)
- **Styling:** Tailwind CSS + SCSS
- **Language:** TypeScript 5.5
- **Build tool:** Angular CLI 18 / esbuild

## Pages

- `/` — Home
- `/about` — About
- `/services` — Services
- `/contact` — Contact

## Installing dependencies

```bash
npm install --ignore-scripts
node node_modules/esbuild/install.js
```

`--ignore-scripts` is required to avoid a failing `node-gyp` build for `lmdb`. The esbuild binary must then be installed separately via its own install script. `@rollup/rollup-linux-x64-gnu` and `@lmdb/lmdb-linux-x64` are installed automatically as optional packages.

## package.json overrides

- `websocket-driver` → `0.7.5` (older version blocked by Replit security policy)
- `shell-quote` → `1.8.4` (older version blocked by Replit security policy)
- `string-width@4 > strip-ansi` → `6.0.1` (prevents ESM strip-ansi@7 from being nested under the CJS string-width@4, which caused `stripAnsi is not a function` at Angular CLI startup)

## User preferences
