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
TMDB_ACCESS_TOKEN=your_longform_token
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```
3. Now you can access the API key in your server-side code, example: `const tmdbApiToken = process.env.TMDB_ACCESS_TOKEN`.
4. Make sure `.env.local` is listed in your `.gitignore` file so it's not committed to version control. (I've handled this already with `.env*`).
5. Never expose your TMDB API key to the client (therefor do NOT use `NEXT_PUBLIC_TMDB_ACCESS_TOKEN`).

## Getting Started

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

### 🔒 Protecting the TMDB API Key/Token (Even in Local Dev)

The TMDB API token is **never exposed to the browser** — not even during local development.  

Here's how we achieve that:

#### 1. Server Route as Proxy
- Instead of calling `https://api.themoviedb.org/3/...` directly from the client, we call our own Next.js **API routes** (e.g. `/api/movies/movie/details/[id]`, `/api/movies/trending`, `/api/movies/upcoming`).
- These API routes run **on the server** and have access to `process.env.TMDB_ACCESS_TOKEN`.
- The routes make the real request to TMDB using **Bearer token authentication**, then return only the relevant JSON data to the client.

#### 2. Environment Variables
- The TMDB access token is stored in `.env.local` and **is not committed** to version control.
- Server routes access it via `process.env.TMDB_ACCESS_TOKEN`.

#### 3. Client Components & TanStack Query
- Components like **TrendingMovies**, **UpcomingMovies**, and dynamic movie pages fetch data using **React Query** (`useQuery`).
- Each component defines its own `queryKey` and `queryFn`, and React Query handles caching, stale data, and automatic refetching.
- Example:

```ts
const { data, error, isLoading } = useQuery({
  queryKey: ["trendingMovies"],
  queryFn: async () => {
    const res = await fetch("/api/movies/trending");
    if (!res.ok) throw new Error("Failed to fetch trending movies");
    return res.json();
  },
  staleTime: CACHE_DURATION,
});
```

#### Server-Side Prefetching & Hydration (Pages)
For dynamic pages like /movies/[id], data is prefetched on the server using React Query’s prefetchQuery:

```ts
await queryClient.prefetchQuery({
  queryKey: ["movie", movieId],
  queryFn: () => getMovieDetails(movieId),
  staleTime: CACHE_DURATION,
});
```
The preloaded cache is passed to the client via HydrationBoundary and dehydrate(queryClient), so the client instantly has the data without waiting for a network request.

#### Benefits of This Setup
- Security – API tokens are never exposed to the browser.
- Automatic Caching – Avoids unnecessary re-fetches between components.
- Scalability – Each component owns its own data fetching logic; no global Redux store required.
- Consistency – All queries share the same QueryClient and cache.
- SEO & Performance – Server-side prefetch ensures pages render with data immediately and avoids client-side flicker.
