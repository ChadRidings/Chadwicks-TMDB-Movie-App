"use client";

import { useState, useRef } from "react";
import type { MovieType } from "../../../types/global";
import TrendingCard from "./trendingCard";

const TrendingMovies = ({ trending }: { trending: MovieType[] }) => {
    const [scrollX, setScrollX] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleScrollLeft = () => {
        if (containerRef.current) {
            const itemWidth =
                containerRef.current.querySelector<HTMLElement>(
                    ":first-child"
                )?.offsetWidth;
            const newScrollX = Math.max(0, scrollX - (itemWidth ?? 0) * 2 - 20);
            containerRef.current.scrollTo({
                left: newScrollX,
                behavior: "smooth",
            });
            setScrollX(newScrollX);
        }
    };

    const handleScrollRight = () => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const scrollWidth = containerRef.current?.scrollWidth ?? 0;
            const itemWidth =
                containerRef.current.querySelector<HTMLElement>(
                    ":first-child"
                )?.offsetWidth;
            const newScrollX = Math.min(
                scrollWidth - containerWidth,
                scrollX + (itemWidth ?? 0) * 2
            );
            containerRef.current.scrollTo({
                left: newScrollX,
                behavior: "smooth",
            });
            setScrollX(newScrollX);
        }
    };

    return (
        <>
            <div className="flex flex-row justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Trending Movies</h1>
                <div className="flex flex-row">
                    <i
                        className={`bi bi-chevron-left text-primary-ivory hover:text-primary-blue text-2xl mr-4 transition duration-300 cursor-pointer ${
                            scrollX === 0 ? "opacity-50 cursor-not-allowed" : ""
                        }`}
                        onClick={handleScrollLeft}
                    />
                    <i
                        className={`bi bi-chevron-right text-primary-ivory hover:text-primary-blue text-2xl mr-4 transition duration-300 cursor-pointer ${
                            scrollX >=
                            (containerRef.current?.scrollWidth ?? 0) -
                                (containerRef.current?.offsetWidth ?? 0)
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                        }`}
                        onClick={handleScrollRight}
                    />
                </div>
            </div>
            <div
                className="flex flex-row flex-nowrap overflow-x-hidden"
                ref={containerRef}
            >
                {trending.map((movie: MovieType) => (
                    <TrendingCard movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    );
};

export default TrendingMovies;
