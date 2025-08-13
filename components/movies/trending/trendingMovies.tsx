import type { MovieType } from '../../../types/movies';
import TrendingCard from './trendingCard';

const TrendingMovies = async () => {
    const tmdbApiKey = process.env.TMDB_API_KEY;
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${tmdbApiKey}&language=en-US`, {
        next: { revalidate: 60 },
    });

    if (!tmdbApiKey) {
        throw new Error("TMDB_API_KEY is not defined");
    }
    if (!response.ok) {
        throw new Error("Failed to fetch trending videos");
    }

    const trending = await response.json();

    return (
        <>
            <h1 className="text-2xl font-bold">Trending Movies</h1>
            <div className="flex flex-row w-full overflow-x-scroll">
                {trending.results.map((movie: MovieType) => (
                    <TrendingCard movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    );
};

export default TrendingMovies;
