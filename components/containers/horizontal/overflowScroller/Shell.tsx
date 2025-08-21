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

    // Observe container width changes
    const { width: containerWidth } = useResizeObserver(containerRef);

    /**
     * Update metrics when container width or data changes
    */
    useEffect(() => {
        if (!containerRef.current) return;

        // Determine how many items to scroll at once based on container width
        setItemsToScroll(containerWidth > 1024 ? 2 : 1);

        const container = containerRef.current;
        const children = Array.from(container.children) as HTMLElement[];

        // Dynamically calculate item width including spacing (margin/gap)
        if (children.length >= 2) {
            const first = children[0];
            const second = children[1];

            const firstRect = first.getBoundingClientRect();
            const secondRect = second.getBoundingClientRect();

            // Gap between first and second cards
            const gap = secondRect.left - firstRect.right;
            setItemWidth(firstRect.width + gap);
        } else if (children.length === 1) {
            // Fallback if only one card exists
            setItemWidth(children[0].getBoundingClientRect().width);
        }

        // Update arrow states initially
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }, [containerWidth, data]);

    /**
     * Listen for scroll events to update arrow states dynamically
     */
    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const onScroll = () => {
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
        };
        container.addEventListener("scroll", onScroll);

        // Cleanup listener on unmount
        return () => container.removeEventListener("scroll", onScroll);
    }, []);

    /**
     * Scroll left or right by the correct number of items
     */
    const scrollBy = (direction: "left" | "right") => {
        if (!containerRef.current) return;

        // Scroll distance based on item width and number of items
        const delta = itemWidth * itemsToScroll;
        const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;

        // Set newScroll position between 0 and maximum scroll
        const newScroll =
            direction === "left"
                ? Math.max(0, containerRef.current.scrollLeft - delta)
                : Math.min(maxScroll, containerRef.current.scrollLeft + delta);

        // Smooth scroll to the calculated position
        containerRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    };

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-smooch-sans text-primary-yellow">{title}</h2>
                <div className="flex gap-4">
                    <i
                        className={`bi bi-chevron-left text-primary-blue hover:text-primary-ivory text-2xl transition duration-300 cursor-pointer
                            ${!canScrollLeft ? "opacity-50 cursor-not-allowed" : ""}
                        `}
                        onClick={() => scrollBy("left")}
                    />
                    <i
                        className={`bi bi-chevron-right text-primary-blue hover:text-primary-ivory text-2xl transition duration-300 cursor-pointer
                            ${!canScrollRight ? "opacity-50 cursor-not-allowed" : ""}
                        `}
                        onClick={() => scrollBy("right")}
                    />
                </div>
            </div>
            <div
                ref={containerRef}
                className="flex flex-nowrap overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
            >
                {data.map((movie: MovieType) => (
                    <div key={movie.id} className="snap-start">
                        <CardVersionOne movie={movie} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default OverflowScroller;
