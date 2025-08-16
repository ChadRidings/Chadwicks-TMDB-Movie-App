"use client";

import { useEffect, useState, useRef } from "react";
import type { MovieType } from "../../../../types/global";
import CardVersionOne from "../../cards/version1/Card";

const OverflowScroller = ({
    data,
    title,
}: {
    data: MovieType[];
    title: string;
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [scrollX, setScrollX] = useState<number>(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const [itemsToScroll, setItemsToScroll] = useState(1);
    const [itemWidth, setItemWidth] = useState(0);

    const handleScrollLeft = () => {
        if (containerRef.current) {
            const newScrollX = Math.max(
                0,
                scrollX - itemWidth * itemsToScroll
            );
            containerRef.current.scrollTo({
                left: newScrollX,
                behavior: "smooth",
            });
            setScrollX(newScrollX);
        }
    };

    const handleScrollRight = () => {
        if (containerRef.current) {
            const scrollWidth = containerRef.current?.scrollWidth ?? 0;
            const newScrollX = Math.min(
                scrollWidth - containerWidth,
                scrollX + (itemWidth * itemsToScroll)
            );
            if (newScrollX !== scrollX) {
                containerRef.current.scrollTo({
                    left: newScrollX,
                    behavior: "smooth",
                });
                setScrollX(newScrollX);
            }
        }
    };

    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth);
            setItemsToScroll(containerRef.current.offsetWidth > 1024 ? 2 : 1);
            setItemWidth(containerRef.current.querySelector<HTMLElement>(":first-child")?.getBoundingClientRect().width ?? 0);
        }
    }, []);

    return (
        <>
            <div className="flex flex-row justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">{title}</h1>
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
                                (containerWidth ?? 0)
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                        }`}
                        onClick={handleScrollRight}
                    />
                </div>
            </div>
            <div
                className="flex flex-row flex-nowrap overflow-x-hidden overflow-x-auto scroll-smooth"
                ref={containerRef}
            >
                {data.map((movie: MovieType) => (
                    <CardVersionOne movie={movie} key={movie.id} />
                ))}
            </div>
        </>
    );
};

export default OverflowScroller;
