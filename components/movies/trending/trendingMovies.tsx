import TrendingShell from "./trendingShell";

const TrendingMovies = async () => {
    const tmdbApiKey = process.env.TMDB_API_KEY;
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${tmdbApiKey}&language=en-US`);

    if (!tmdbApiKey) {
        throw new Error("TMDB_API_KEY is not defined");
    }
    if (!response.ok) {
        throw new Error("Failed to fetch trending videos");
    }

    const trending = await response.json();

    return (
        <>
            <TrendingShell trending={trending.results} />   
        </>
    );
};

export default TrendingMovies;
