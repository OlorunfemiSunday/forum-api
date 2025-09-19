# Forum API

Simple Node/Express/Mongo forum API with authentication, threads and nested comments.

## Quick start

1. Copy `.env.example` to `.env` and set values.
2. Install dependencies: `npm install`
3. Start server: `npm run dev` (requires nodemon) or `npm start`

## Endpoints

Auth:
- POST /api/auth/signup
- POST /api/auth/login

Threads:
- POST /api/threads (protected)
- GET /api/threads
- GET /api/threads/:id
- DELETE /api/threads/:id (admin only)

Comments:
- POST /api/threads/:id/comments (protected) - add comment to thread
- POST /api/comments/:id/reply (protected) - reply to comment

## Notes
- Uses JWT for auth. Include `Authorization: Bearer <token>` header for protected routes.
- Admin role is a string on user document: `role: "admin"`.
