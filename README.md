# Chadwick TMDB Movie App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about the Chadwick TMDB Movie App, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Vite](https://vite.dev/) - next generation frontend tooling.
- [Tailwind](https://tailwindcss.com/docs/installation/using-vite) - utility-first CSS framework.
- [TMDB (The Movie Database) Api](https://www.themoviedb.org/) - online database for movies and TV shows.

## Setting up TMDB Api Key

To setup the TMDB api for local development do the following:

1. At root level create a file `.env.local`
2. Add the following values to `.env.local`:
```javascript
DATABASE_URL=your_database_url_here
API_KEY=your_api_key_here
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_KEY=your_secret_key_here
```
3. Access the variable in your Next.js code using `process.env.TMDB_API_KEY`.
4. Make sure `.env.local` is listed in your `.gitignore` file so it's not committed to version control.
5. For server-side code, you can use the variable directly. For client-side code, prefix the variable with `NEXT_PUBLIC_` (e.g., `NEXT_PUBLIC_TMDB_API_KEY`) to expose it safely.

Create

