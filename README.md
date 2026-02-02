# Fasttrack App

Monorepo for **Fasttrack**:

- **Frontend**: Expo + React Native (Android / iOS / Web)
- **Backend**: Firebase Cloud Functions (Express) with MongoDB + Cloudinary

## Prerequisites

- Node.js **18+**
- npm (workspaces enabled)
- Expo Go app (for running on a physical device) or Android Studio / Xcode
- Firebase CLI access (the backend scripts use `firebase-tools` via `npx`)

## Repository structure

- `frontend/` - Expo app
- `backend/functions/` - Firebase Functions source (TypeScript)
- `firebase.json` - Emulator configuration
- `.firebaserc` - Firebase project mapping (needs your project id)

## Install dependencies

From the repo root:

```bash
npm install
```

This installs dependencies for the npm workspaces:

- `frontend`
- `backend/functions`

## Environment variables

### Frontend

Create `frontend/.env` (based on `frontend/.env.example`):

```env
EXPO_PUBLIC_API_BASE=
```

Example (when running Functions emulator locally):

```env
EXPO_PUBLIC_API_BASE=http://127.0.0.1:5001/<FIREBASE_PROJECT_ID>/us-central1/api
```

### Backend (Firebase Functions)

Create `backend/functions/.env` (based on `backend/functions/.env.example`):

```env
MONGODB_URI=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_UPLOAD_FOLDER=fasttrack
API_BASE_PATH=/api
```

## Configure Firebase project

Update `.firebaserc` with your Firebase project id:

```json
{
  "projects": {
    "default": "YOUR_FIREBASE_PROJECT_ID"
  }
}
```

## Run the app (development)

### Start frontend (Expo)

From repo root:

```bash
npm run dev
```

Or directly:

```bash
npm run frontend
```

Useful frontend scripts:

- `npm run start --workspace frontend`
- `npm run android --workspace frontend`
- `npm run ios --workspace frontend`
- `npm run web --workspace frontend`

### Start backend (Functions emulator)

From repo root:

```bash
npm run backend
```

This runs the Firebase Functions emulator on port `5001` (see `firebase.json`).

## Build / Deploy backend functions

From repo root:

```bash
npm run build --workspace backend/functions
npm run deploy --workspace backend/functions
```

## Notes

- The Functions entry point exports `api` (HTTP function). Routes are mounted under `API_BASE_PATH` (default: `/api`).
- If you change ports or regions, also update `EXPO_PUBLIC_API_BASE` accordingly.
