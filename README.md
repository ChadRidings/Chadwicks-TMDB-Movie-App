# Chadwick's TMDB Movie App

This is a [Next.js](https://nextjs.org) project created by [Chad Ridings](https://github.com/ChadRidings).

## The Tools I'm Using

To learn more about the Chadwick's TMDB Movie App, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
- [Turbopack](https://nextjs.org/docs/app/api-reference/turbopack) - An incremental bundler optimized for JavaScript and TypeScript, written in Rust, and built into Next.js.
- [Tailwind](https://tailwindcss.com/docs/installation/using-vite) - A utility-first CSS framework.
- [Tanstack Query](https://tanstack.com/query/latest) - Powerful asynchronous state management, server-state utilities and data fetching. Fetch, cache, update, and wrangle all forms of async data in your applications all without touching any "global state".
- [Bootstrap Icons](https://icons.getbootstrap.com/) - Free, high quality, open source icon library with over 2,000 icons.
- [TMDB (The Movie Database)](https://www.themoviedb.org/) - online database for movies and TV shows.
- [TMDB API Reference](https://developer.themoviedb.org/reference/intro/getting-started) - The Movie Database (TMDB) API Reference

## Setting up TMDB Api Key

To setup the TMDB api for local development do the following:

1. At root level create a file named `.env.local`.
2. Add the following values to this new `.env.local` file:
```javascript
TMDB_API_KEY=your_api_key_here
```
3. Now you can access the API key in your server-side code, example: `const tmdbApiKey = process.env.TMDB_API_KEY`.
4. Make sure `.env.local` is listed in your `.gitignore` file so it's not committed to version control. (I've handled this already with `.env*`).
5. Never expose your TMDB API key to the client (therefor do NOT use `NEXT_PUBLIC_TMDB_API_KEY`).

## Getting Started

First, run the development server:

```bash
# Install dependencies:
npm i
```

```bash
# Build the application:
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---

## Data Fetching with TanStack Query

We use **[TanStack Query](https://tanstack.com/query/latest)** for client-side data fetching, caching, and state management for API data such as *Trending Movies*, *Upcoming Movies*, etc.

### 🔒 Protecting the TMDB API Key (Even in Local Dev)

The TMDB API key is **never exposed to the browser** - not even during local development.  

Here's how we achieve that:

#### 1. Server Route as Proxy
- Instead of calling `https://api.themoviedb.org/3/...` directly from the client, we call our own Next.js **API route** (e.g. `/api/trending`).
- This API route runs **on the server** and has access to `process.env.TMDB_API_KEY`.
- It makes the real request to TMDB, then sends only the relevant data back to the client.

#### 2. Environment Variables
- The TMDB key is stored in `.env.local` and **is not committed** to version control.
- The server fetch function pulls the key from `process.env.TMDB_API_KEY`.

### ✅ Benefits of This Setup
- **Security** – API key is never exposed to the browser.
- **Automatic Caching** – Avoids unnecessary re-fetches between components.
- **Scalability** – Each component can own its own data fetching logic without relying on a global Redux store.
- **Consistency** – All queries share the same `QueryClient` and cache.


