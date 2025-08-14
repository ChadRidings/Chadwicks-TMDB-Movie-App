'use client';

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import type { MovieType } from "../../../types/global";
import { CACHE_DURATION } from "../../../constants/global";

const UpcomingMovies = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["trendingMovies"],
        queryFn: async () => {
            const res = await fetch("/api/upcoming");
            if (!res.ok) {
                throw new Error("Failed to fetch trending movies");
            }
            return res.json();
        },
        staleTime: CACHE_DURATION
    });

    if (isLoading) return <p>Loading trending...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <div className="flex flex-col w-full">
                <h1 className="text-2xl font-bold mb-4">Upcoming Movies</h1>
                {data.results.map((movie: MovieType) => (
                    <div key={movie.id} className="p-4">
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            width={500}
                            height={500}
                            className="rounded-lg shadow-lg"
                            loading="lazy"
                            style={{ width: "200px", height: "auto" }}
                        />
                        <h2 className="text-xl font-bold">{movie.title}</h2>
                        <p className="text-sm">{movie.release_date}</p>
                        <p className="text-sm">{movie.overview}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default UpcomingMovies;
