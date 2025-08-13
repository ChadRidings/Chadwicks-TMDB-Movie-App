import Image from "next/image";
import type { MovieType } from "../../../types/movies";

const TrendingCard = ({ movie }: { movie: MovieType }) => {
    return (
        <div
            key={movie.id}
            className="flex flex-direction-row items-start m-4 p-4 bg-white dark:bg-slate-900 rounded-lg"
        >
            <div className="w-[128px] mr-4">
                <Image
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-lg"
                    loading="lazy"
                    width={128}
                    height={192}
                />
            </div>
            <div className="w-[180px]">
                <h2 className="text-xl font-bold">{movie.title}</h2>
                <p className="text-sm">{movie.release_date}</p>
                <p className="text-sm">{movie.overview}</p>
            </div>
        </div>
    );
};

export default TrendingCard;
