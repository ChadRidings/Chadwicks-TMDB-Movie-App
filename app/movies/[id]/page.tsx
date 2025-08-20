import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import MoviePageClient from "./MoviePageClient";
import { Providers } from "../../providers";
import { CACHE_DURATION } from "../../../constants/global";
import { tmdbQueryFn } from "../../../utils/tmdb";

const MoviePage = async (props: { params: { id: string } }) => {
    const { id: movieId } = await props.params;
    const queryClient = new QueryClient();

   // Prefetch multiple endpoints
    await Promise.all([
        queryClient.prefetchQuery({
            queryKey: ["movie", movieId],
            queryFn: tmdbQueryFn(`movie/${movieId}`),
            staleTime: CACHE_DURATION,
        }),
        queryClient.prefetchQuery({
            queryKey: ["videos", movieId],
            queryFn: tmdbQueryFn(`movie/${movieId}/videos?language=en-US`),
            staleTime: CACHE_DURATION,
        }),
    ]);

    return (
        <Providers>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <MoviePageClient movieId={movieId} />
            </HydrationBoundary>
        </Providers>
    );
};

export default MoviePage;
