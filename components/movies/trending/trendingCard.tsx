import Image from "next/image";
import type { MovieType } from "../../../types/movies";

const TrendingCard = ({ movie }: { movie: MovieType }) => {
    return (
        <div
            key={movie.id}
            className="flex flex-direction-row items-start m-2 p-4 bg-white dark:bg-primary-gray rounded-lg h-[222px]"
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
            <div className="w-[180px] h-[192px] flex flex-col">
                <div className="flex-shrink-0 overflow-x-hidden whitespace-nowrap text-ellipsis text-primary-yellow">
                    {movie.title}
                </div>
                <div className="flex-1 overflow-y-hidden">
                    <p className="text-sm">{movie.overview}</p>
                </div>
                <div className="flex-shrink-0">(star system)</div>
            </div>
        </div>
    );
};

export default TrendingCard;
