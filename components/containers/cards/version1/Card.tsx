"use client";

import Image from "next/image";
import Link from "next/link";
import StarRanking from "../../../starRanking/StarRanking";
import type { MovieType } from "../../../../types/global";

const CardVersionOne = ({ movie }: { movie: MovieType }) => {
    return (
        <div
            key={movie.id}
            className="flex flex-direction-row items-start m-2 p-4 bg-white dark:bg-primary-gray rounded-lg h-[222px]"
        >
            <div className="w-[128px] mr-4">
                <Link href={`/movies/${movie.id}`}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={movie.title}
                        className="rounded-lg"
                        loading="lazy"
                        width={128}
                        height={192}
                        style={{
                            width: "128px",
                            height: "192px",
                            objectFit: "cover",
                        }}
                    />
                </Link>
            </div>
            <div className="w-[180px] h-[192px] flex flex-col">
                <div className="flex-shrink-0 overflow-x-hidden whitespace-nowrap text-ellipsis text-primary-yellow font-smooch-sans text-xl mb-0">
                    {movie.title}
                </div>
                <div className="flex-1 overflow-y-hidden mb-0">
                    <p className="text-sm">{movie.overview}</p>
                </div>
                <div className="flex-shrink-0 mb-0">
                    <StarRanking rating={movie.vote_average} />
                </div>
            </div>
        </div>
    );
};

export default CardVersionOne;
