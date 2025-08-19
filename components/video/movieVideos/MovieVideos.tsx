'use client';

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { CACHE_DURATION } from "../../../constants/global";

const MovieVideos = ({ movieId }: { movieId: string }) => {
   const { data, error, isLoading } = useQuery({
        queryKey: ["movieVideos", movieId],
        queryFn: () => fetchMovieVideos(movieId),
        staleTime: CACHE_DURATION,
    });

    if (isLoading) return <p>Loading the movies video assets...</p>;
    if (error) return <p>Error: {(error as Error).message}</p>;
    if (!data) return <p>No movie data found</p>;

    console.log("MovieVideos data:", data);

    return (
        <div className="trailers">
            <h2>Trailers</h2>
            <ul>
                {data.results.map((video: any) => (
                    <li key={video.id}>
                        <a
                            href={`https://www.youtube.com/watch?v=${video.key}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {video.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const fetchMovieVideos = async (movieId: string) => {
    const res = await fetch(`/api/movies/movie/videos/${movieId}`);
    if (!res.ok) throw new Error("Failed to fetch movie videos");
    return res.json();
};

export default MovieVideos;
