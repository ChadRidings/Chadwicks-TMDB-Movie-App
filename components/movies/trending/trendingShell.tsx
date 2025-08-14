import type { MovieType } from "../../../types/movies";
import TrendingCard from "./trendingCard";

const TrendingMovies = ({ trending } : { trending: MovieType[] }) => {

    return (
        <>
            <h1 className="text-2xl font-bold">Trending Movies</h1>
            <div
                className="flex flex-row flex-nowrap overflow-x-hidden overflow-x-auto cursor-grab"
            >
                {trending.map((movie: MovieType) => (
                    <TrendingCard movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    );
};

export default TrendingMovies;
