# Items App

Simple Next.js (App Router) application demonstrating public pages, mock authentication, and an Express API for items.

## Features
- Landing page (7 sections)
- Navbar with links to `Login` and `Items`
- Mock authentication (hardcoded `pallobi@gmail.com` / `123456`) stored in cookies
- Items list fetched from Express API (`GET /items`)
- Item details page (`/items/[id]`)
- Protected Add Item form (POST to Express `POST /items`)
- Toast notifications via `react-hot-toast`

## Setup

1. Start the Express API (from `d:/Projects`):

```powershell
cd d:/Projects
node index.js
```

2. Start the Next.js app (from `d:/Projects/items-app`):

```powershell
cd d:/Projects/items-app
pnpm install # or npm install
pnpm dev
```

## Routes
- `/` - Landing page (public)
- `/items` - Items list (public)
- `/items/[id]` - Item details (public)
- `/login` - Login page (public)
- `/add-item` - Protected; requires login cookie

## Notes
- Express API is at `https://article-blog-server-eight.vercel.app`.
- The app uses a simple cookie `auth=true` to track login state.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Google OAuth (NextAuth) setup

1. Create `.env.local` in the project root and fill values (see `.env.local.example`). Do NOT commit secrets.

2. In Google Cloud Console create an OAuth 2.0 Client ID (type: "Web application") and set the Authorized redirect URI to:

	- `http://localhost:3000/api/auth/callback/google`

3. If the OAuth consent screen is in "Testing" mode, add your Google account as a test user.

4. Restart the Next.js dev server after updating `.env.local`:

```bash
npm run dev
```

If you see `401 invalid_client` or "The OAuth client was not found", verify the `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in `.env.local` are exact and that the client type is "Web application".

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
