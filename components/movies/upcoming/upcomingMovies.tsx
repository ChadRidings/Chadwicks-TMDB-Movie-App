"use client";

import { useQuery } from "@tanstack/react-query";
import OverflowScroller from "../../containers/horizontal/overflowScroller/Shell";
import { CACHE_DURATION } from "../../../constants/global";

const UpcomingMovies = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["upcomingMovies"],
        queryFn: async () => {
            const res = await fetch("/api/movies/upcoming");
            if (!res.ok) {
                throw new Error("Failed to fetch upcoming movies");
            }
            return res.json();
        },
        staleTime: CACHE_DURATION,
    });

    if (isLoading) return <p>Loading upcoming movies...</p>;
    if (error) return <p>Error: {(error as Error).message}</p>;

    return <OverflowScroller data={data.results} title="Upcoming Movies" />;
};

export default UpcomingMovies;
