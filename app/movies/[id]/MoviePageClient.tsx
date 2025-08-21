"use client";

import { useQuery } from "@tanstack/react-query";
import BackgroundCover from "../../../components/covers/background/backgroundCover";
import MovieDetails from "../../../components/movies/movie/details/MovieDetails";
import MovieVideos from "../../../components/video/MovieVideos";

const MoviePageClient = ({ movieId }: { movieId: string }) => {
    const { data: movie } = useQuery({
        queryKey: ["movie", movieId],
        queryFn: () =>
            fetch(`/api/movies/${movieId}`).then((res) => res.json()),
    });

    const { data: videos } = useQuery({
        queryKey: ["videos", movieId],
        queryFn: () =>
            fetch(`/api/movies/${movieId}/videos`).then((res) => res.json()),
    });

    return (
        <div className="flex flex-col max-w-[1440px] mx-auto bg-gray-100 text-gray-600 dark:bg-primary-dark dark:text-gray-200">
            <BackgroundCover
                imageUrl={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
            >
                <div className="flex justify-center items-start flex-wrap md:flex-nowrap pb-10 md:pb-50">
                    <div className="w-full md:w-1/2 m-0 md:m-4">
                        {movie && (
                            <MovieDetails movie={movie} />
                        )}
                    </div>
                    <div className="w-full md:w-1/2 m-0 md:m-4">
                        {videos && videos.results.length > 0 && (
                            <MovieVideos videos={videos} />
                        )}

                        {!videos || videos.results.length === 0 ? (
                            <p>No videos available for this movie.</p>
                        ) : null}
                    </div>
                </div>
            </BackgroundCover>
        </div>
    );
};

export default MoviePageClient;
