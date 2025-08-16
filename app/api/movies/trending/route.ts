import { NextResponse } from "next/server";

export const GET = async () => {
    const apiToken = process.env.TMDB_ACCESS_TOKEN;

    if (!apiToken) {
        return NextResponse.json(
            { error: "Missing TMDB API key" },
            { status: 500 }
        );
    }

    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/trending/movie/week?&language=en-US`,
            {
                headers: {
                    Authorization: `Bearer ${apiToken}`,
                },
            }
        );

        if (!res.ok) {
            return NextResponse.json(
                { error: `TMDB error ${res.status}` },
                { status: res.status }
            );
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        return NextResponse.json({ error: message }, { status: 500 });
    }
};
