"use client";

import { useQuery } from "@tanstack/react-query";
import BackgroundCover from "../../../components/covers/background/backgroundCover";
import MovieVideos from "../../../components/video/movieVideos/MovieVideos";

const MoviePageClient = ({ movieId }: { movieId: string }) => {
    
    const { data: movie } = useQuery({
        queryKey: ["movie", movieId],
        queryFn: () => fetch(`/api/movies/${movieId}`).then(res => res.json()),
    });

    const { data: videos } = useQuery({
        queryKey: ["videos", movieId],
        queryFn: () => fetch(`/api/movies/${movieId}/videos`).then(res => res.json()),
    });

    return (
        <div className="flex flex-col max-w-[1440px] mx-auto bg-gray-100 text-gray-600 dark:bg-primary-dark dark:text-gray-200">
            <BackgroundCover imageUrl={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <p>Release Date: {movie.release_date}</p>
                <p>Rating: {movie.vote_average}</p>
                <p>Runtime: {movie.runtime} minutes</p>
                
                {videos && videos.results.length > 0 && (
                    <MovieVideos videos={videos} />
                )}

                {!videos || videos.results.length === 0 ? (
                    <p>No videos available for this movie.</p>
                ) : null}
                   
            </BackgroundCover>
        </div>
    );
};

export default MoviePageClient;
