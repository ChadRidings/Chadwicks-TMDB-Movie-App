import { API_TOKEN } from "../constants/global";

export const tmdbQueryFn = (endpoint: string) => async () => {
    if (!API_TOKEN) throw new Error("Missing TMDB access token");

    const res = await fetch(`https://api.themoviedb.org/3/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            Accept: "application/json",
        },
        cache: "no-store",
    });

    if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
    return res.json();
};
