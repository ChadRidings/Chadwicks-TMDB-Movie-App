import Image from 'next/image';
import type { MovieType } from '../../../types/global';

const PopularMovies = async () => {
    const tmdbApiKey = process.env.TMDB_API_KEY;
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbApiKey}&language=en-US`, {
        next: { revalidate: 60 },
    });

    if (!tmdbApiKey) {
        throw new Error("TMDB_API_KEY is not defined");
    }
    if (!response.ok) {
        throw new Error("Failed to fetch trending videos");
    }

    const upcoming = await response.json();

    return (
        <>
            <div className="flex flex-col w-full">
                <h1 className="text-2xl font-bold mb-4">Upcoming Movies</h1>
                {upcoming.results.map((movie: MovieType) => (
                    <div key={movie.id} className="p-4">
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            width={500}
                            height={500}
                            className="rounded-lg shadow-lg"
                            loading="lazy"
                            style={{ width: '200px', height: 'auto' }}

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

export default PopularMovies;
