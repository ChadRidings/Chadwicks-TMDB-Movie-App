import {
    QueryClient,
    dehydrate,
    HydrationBoundary,
} from "@tanstack/react-query";
import MoviePageClient from "./MoviePageClient";
import { Providers } from "../../providers";
import { CACHE_DURATION } from "../../../constants/global";

const MoviePage = async (props: { params: { id: string } }) => {
    const { id: movieId } = await props.params;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["movie", movieId],
        queryFn: () => getMovieDetails(movieId),
        staleTime: CACHE_DURATION,
    });

    return (
        <Providers>
            <HydrationBoundary state={dehydrate(queryClient)}>
                <MoviePageClient movieId={movieId} />
            </HydrationBoundary>
        </Providers>
    );
};

const getMovieDetails = async (movieId: string) => {
    const token = process.env.TMDB_ACCESS_TOKEN;
    if (!token) throw new Error("Missing TMDB access token");

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        },
        cache: "no-store",
    });

    if (!res.ok) throw new Error(`Failed to fetch movie with id ${movieId}`);
    return res.json();
};

export default MoviePage;
