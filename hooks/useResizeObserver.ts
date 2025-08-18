import { useState, useEffect } from "react";

export const useResizeObserver = <T extends HTMLElement>(
    ref: React.RefObject<T | null>
) => {
    const [size, setSize] = useState<{ width: number; height: number }>({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        // Get the element to observe
        const element = ref.current;

        // If the element is not available, do nothing
        if (!element) return;

        // Create a ResizeObserver to observe size changes
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect;
                setSize({ width, height });
            }
        });

        // Start observing the element
        observer.observe(element);

        return () => observer.disconnect();
    }, [ref]);

    return size;
};
