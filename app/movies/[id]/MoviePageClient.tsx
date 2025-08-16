"use client";

import { useQuery } from "@tanstack/react-query";
import { Providers } from "../../providers";
import { CACHE_DURATION } from "../../../constants/global";

async function fetchMovieDetails(movieId: string) {
    const res = await fetch(`/api/movies/movie/details/${movieId}`);
    if (!res.ok) {
        throw new Error("Failed to fetch movie details");
    }
    return res.json();
}

export default function MoviePageClient({ movieId }: { movieId: string }) {
    const { data, error, isLoading } = useQuery({
        queryKey: ["movie", movieId],
        queryFn: () => fetchMovieDetails(movieId),
        staleTime: CACHE_DURATION,
    });

    if (isLoading) return <p>Loading movie details...</p>;
    if (error) return <p>Error: {(error as Error).message}</p>;

    return (
        <div className="flex flex-col max-w-[1440px] mx-auto bg-gray-100 text-gray-600 dark:bg-primary-dark dark:text-gray-200 p-4">
            <div className="w-full mb-4">
                <h1>{data.title}</h1>
                <p>{data.overview}</p>
            </div>
        </div>
    );
}
