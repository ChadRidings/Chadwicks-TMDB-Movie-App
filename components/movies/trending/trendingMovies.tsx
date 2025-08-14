'use client';

import { useQuery } from "@tanstack/react-query";
import TrendingShell from "./trendingShell";
import { CACHE_DURATION } from "../../../constants/global";

const TrendingMovies = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["trendingMovies"],
        queryFn: async () => {
            const res = await fetch("/api/trending");
            if (!res.ok) {
                throw new Error("Failed to fetch trending movies");
            }
            return res.json();
        },
        staleTime: CACHE_DURATION
    });

    if (isLoading) return <p>Loading trending...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <TrendingShell trending={data.results} />
        </>
    );
};

export default TrendingMovies;
