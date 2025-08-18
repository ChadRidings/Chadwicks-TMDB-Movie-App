"use client";

import { useRef, useState, useEffect } from "react";
import type { MovieType } from "../../../../types/global";
import CardVersionOne from "../../cards/version1/Card";
import { useResizeObserver } from "../../../../hooks/useResizeObserver";

const OverflowScroller = ({
    data,
    title,
}: {
    data: MovieType[];
    title: string;
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [itemsToScroll, setItemsToScroll] = useState(1);
    const [itemWidth, setItemWidth] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    
    const { width: containerWidth } = useResizeObserver(containerRef);

    // Update metrics when container width or data changes
    useEffect(() => {
        if (!containerRef.current) return;

        setItemsToScroll(containerWidth > 1024 ? 2 : 1);
        const firstChild =
            containerRef.current.querySelector<HTMLElement>(":first-child");
        setItemWidth(firstChild?.offsetWidth ?? 0);

        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }, [containerWidth, data]);

    // Listen for scroll events to update arrow states
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const onScroll = () => {
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(
                container.scrollLeft <
                    container.scrollWidth - container.clientWidth
            );
        };

        container.addEventListener("scroll", onScroll);
        return () => container.removeEventListener("scroll", onScroll);
    }, []);

    // Function to scroll left or right
    const scrollBy = (direction: "left" | "right") => {
        if (!containerRef.current) return;
        const delta = itemWidth * itemsToScroll;
        const maxScroll =
            containerRef.current.scrollWidth - containerRef.current.clientWidth;
        const newScroll =
            direction === "left"
                ? Math.max(0, containerRef.current.scrollLeft - delta)
                : Math.min(maxScroll, containerRef.current.scrollLeft + delta);

        containerRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    };

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">{title}</h1>
                <div className="flex gap-4">
                    <i
                        className={`bi bi-chevron-left text-primary-ivory hover:text-primary-blue text-2xl transition duration-300 cursor-pointer ${
                            !canScrollLeft
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                        }`}
                        onClick={() => scrollBy("left")}
                    />
                    <i
                        className={`bi bi-chevron-right text-primary-ivory hover:text-primary-blue text-2xl transition duration-300 cursor-pointer ${
                            !canScrollRight
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                        }`}
                        onClick={() => scrollBy("right")}
                    />
                </div>
            </div>
            <div
                ref={containerRef}
                className="flex flex-nowrap overflow-x-auto scroll-smooth scrollbar-hide"
            >
                {data.map((movie: MovieType) => (
                    <CardVersionOne key={movie.id} movie={movie} />
                ))}
            </div>
        </>
    );
};

export default OverflowScroller;
