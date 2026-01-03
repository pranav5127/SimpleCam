# Stream

Stream is a small Expo-based React Native app that demonstrates camera recording, media management, and a lightweight Redux store. It uses Expo Router for navigation and Expo Camera / Media Library for media capture and storage.

## Table of contents

- Project overview
- Quick start
- Project structure
- Key components
- Store & hooks
- Services
- Development notes
- Contributing

## Project overview

Stream is built with Expo + Expo Router and React Native. It provides camera capture, recording controls, preview/gallery features, and persists metadata using a Redux store. The project is useful as a starting point for camera-centric mobile apps.

Tech stack

- Expo (managed workflow)
- React Native
- Expo Camera, Media Library
- Redux Toolkit + React Redux
- TypeScript

## Quick start

Prerequisites

- Node.js (recommended LTS)
- npm or yarn
- Expo CLI (optional, the `npm` scripts use `expo` directly)

Install

```bash
npm install
```

Run (development)

```bash
npm run start       # expo start
npm run android     # open on Android device/emulator
npm run ios         # open on iOS simulator/device
npm run web         # run in web browser
```

Other useful scripts

- `npm run reset-project` — runs the custom reset script in `scripts/reset-project.js` (if present)
- `npm run lint` — runs `expo lint`

## Project structure

Top-level files and folders

- `app/` — Expo Router pages and navigation entrypoints. Key files:
	- `app/_layout.tsx` — global layout and navigation wrapper.
	- `app/index.tsx` — main entry page.
	- `app/gallery.tsx` — gallery page for viewing saved assets.
- `assets/` — static assets (images, fonts, etc.)
- `components/` — reusable UI components:
	- `FlashIcon.tsx` — flash toggle UI
	- `GalleryPreview.tsx` — preview thumbnails / gallery preview
	- `PermissionManager.tsx` — permission request UI/logic
	- `RecordingTimer.tsx` — UI for showing recording time
	- `ShutterButton.tsx` — capture/record button component
- `constants/` — shared constants (colors, sizes, etc.)
- `hooks/` — custom hooks used by the app
- `services/` — small services for working with assets:
	- `getAssets.ts` — helpers to read assets from media library
	- `setAssets.ts` — helpers to persist or update assets
- `store/` — Redux Toolkit store and slices:
	- `store.ts` — Redux store configuration
	- `cameraSlice.ts` — camera-related state (e.g., flash, type)
	- `permissionSlice.ts` — permissions state
	- `hooks.ts` — typed Redux hooks (`useAppDispatch`, `useAppSelector`)
- `app.json`, `package.json`, `tsconfig.json`, `eslint.config.js` — project configs

## Key components

- `PermissionManager` — centralizes requesting and tracking camera/media permissions.
- `ShutterButton` — handles tap/hold gestures for photo capture and video recording.
- `RecordingTimer` — shows elapsed recording time while recording.
- `GalleryPreview` — shows the most recent assets and allows navigation to the full gallery.

Each component is intentionally small and focused so they can be reused across screens.

## Store & hooks

The app uses Redux Toolkit for predictable state management. Slices include:

- `cameraSlice` — camera settings (flash, camera type, recording state)
- `permissionSlice` — permission statuses for camera and media library

Access the store using typed hooks in `store/hooks.ts` (`useAppDispatch`, `useAppSelector`).

## Services

Services in `services/` provide small utility functions for interacting with the device media library and persisting asset metadata. Example responsibilities:

- Querying saved photos/videos
- Adding new assets to local state after capture
- Grouping or filtering assets for the gallery view

## Development notes

- Expo Router is used as the navigation solution; the app entrypoint is `expo-router/entry` defined in `package.json`'s `main` field.
- The camera features require runtime permissions. Use the `PermissionManager` component to request and validate them.
- To clear Metro/Expo cache, run:

```bash
expo start -c
```

- If you need to reset app-specific state, use `npm run reset-project` (ensure the `scripts/reset-project.js` file exists and is safe to run).

Testing on device

- For camera features test on a real device when possible — emulators can have limited camera support.

Known dependencies

- `expo-camera`, `expo-media-library` — camera and storage
- `@reduxjs/toolkit`, `react-redux` — state management

## Contributing

Contributions are welcome. Suggested workflow:

1. Create an issue describing the change or bug.
2. Create a feature branch.
3. Open a pull request with a clear description and testing notes.

Code style

- TypeScript is used throughout. Follow existing styles and run `npm run lint`.

## Contact

If you have questions or want to collaborate, open an issue in the repository.

---

Generated documentation: updated README to describe setup, structure, and development notes.