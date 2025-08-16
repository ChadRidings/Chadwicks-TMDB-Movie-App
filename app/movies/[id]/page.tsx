import { dehydrate, QueryClient } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";
import MoviePageClient from "./MoviePageClient";
import { CACHE_DURATION } from "../../../constants/global";

async function getMovieDetails(movieId: string) {
    const token = process.env.TMDB_ACCESS_TOKEN;

    if (!token) {
        throw new Error("Missing TMDB access token");
    }

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        },
        // Avoid Next.js caching since we want fresh data
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch movie with id ${movieId}`);
    }

    return res.json();
}

export default async function MoviePage({
    params,
}: {
    params: { id: string };
}) {
    const movieId = params.id;
    const queryClient = new QueryClient();

    // Prefetch TMDB movie details into React Query cache
    await queryClient.prefetchQuery({
        queryKey: ["movie", movieId],
        queryFn: () => getMovieDetails(movieId),
        staleTime: CACHE_DURATION,
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <MoviePageClient movieId={movieId} />
        </HydrationBoundary>
    );
}
