const tmdbApiKey = process.env.TMDB_API_KEY;

export const fetchTrendingMovies = async () => {
    const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${tmdbApiKey}&language=en-US`
    );
    return response.json();
};
