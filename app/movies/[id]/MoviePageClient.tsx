"use client";

import { useQuery } from "@tanstack/react-query";
import { CACHE_DURATION } from "../../../constants/global";
import BackgroundCover from "../../../components/covers/background/backgroundCover";
import MovieVideos from "../../../components/video/movieVideos/MovieVideos";

const MoviePageClient = ({ movieId }: { movieId: string }) => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["movie", movieId],
        queryFn: () => fetchMovieDetails(movieId),
        staleTime: CACHE_DURATION,
    });

    if (isLoading) return <p>Loading movie details...</p>;
    if (error) return <p>Error: {(error as Error).message}</p>;
    if (!data) return <p>No movie data found</p>;

    console.log("MovieDetails data:", data);

    return (
        <div className="flex flex-col max-w-[1440px] mx-auto bg-gray-100 text-gray-600 dark:bg-primary-dark dark:text-gray-200">
            <BackgroundCover imageUrl={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`}>
                <h1>{data.title}</h1>
                <p>{data.overview}</p>
                <p>Release Date: {data.release_date}</p>
                <p>Rating: {data.vote_average}</p>
                <p>Runtime: {data.runtime} minutes</p>

                
                        <MovieVideos movieId={movieId} />
                   
            </BackgroundCover>
        </div>
    );
};

const fetchMovieDetails = async (movieId: string) => {
    const res = await fetch(`/api/movies/movie/details/${movieId}`);
    if (!res.ok) throw new Error("Failed to fetch movie details");
    return res.json();
};

export default MoviePageClient;
