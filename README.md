# NEXA — short-video social platform foundation

A mobile-first React + Vite application connected to Firebase Authentication, Realtime Database, and Storage. This is the first functional foundation and is intentionally not presented as a fully-featured TikTok replacement.

## Run locally

1. Install Node.js 20+ and npm.
2. Copy `.env.example` to `.env` (the supplied Firebase web config is already included; these identifiers are public client configuration, not private server credentials).
3. Run `npm install`, then `npm run dev`.
4. In Firebase Console for `nexalive-f5a58`, enable **Email/Password** in Authentication, create/enable Realtime Database and Storage, and deploy `database.rules.json` and `storage.rules`.
5. Add your local and production app domains under Firebase Authentication → Settings → Authorized domains.

`npm run build` runs the production compilation check.

## Functional in this foundation

- Email/password registration, sign-in, sign-out, and profile creation.
- Realtime public video feed, visibility-based autoplay/pause, upload progress, and video uploads to Storage.
- Likes, comments, follows, user profiles, profile editing, and account-scoped notifications using Realtime Database.
- Discovery/search for loaded users and videos; English/Pashto UI direction; light/dark theme.
- Responsive five-item navigation and mobile layout.

## Initial data model

- `/users/{uid}`: public profile fields and timestamps.
- `/usernames/{lowercaseUsername}`: username reservation.
- `/videos/{videoId}`: media URL, author, caption, privacy, creation timestamp, and storage path.
- `/likes/{videoId}/{uid}`: like marker.
- `/comments/{videoId}/{commentId}`: comment records.
- `/following/{uid}/{followedUid}`: follow marker.
- `/notifications/{recipientUid}/{notificationId}`: notification records.

## Security and known follow-ups

The included rules restrict profile changes and media uploads to their owner and require authentication for interactions. Public video/profile reads support the first-stage feed. Production needs server-side moderation, robust username reservation and cleanup, rate limits/abuse controls, private-account-aware read rules, signed/processed media delivery, reporting workflows, and App Check. Realtime Database rules cannot safely enforce application-wide rate limits. Firebase rules must be deployed before client operations will succeed. Do not put Admin SDK credentials in this repository.

The initial editor is a direct video upload (not a trimming/filter/music editor). Live streaming, private messaging, push delivery, transcoding, and advanced analytics are not implemented in this foundation and require additional product/backend work and, for streaming/transcoding, external services.
