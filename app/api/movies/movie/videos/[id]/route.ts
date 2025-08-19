import { NextResponse } from "next/server";
import { API_TOKEN } from "../../../../../../constants/global";

export const GET = async (
    _request: Request,
    { params }: { params: { id: string } }
) => {
    const movieId = params.id;

    if (!API_TOKEN) {
        return NextResponse.json(
            { error: "Missing TMDB API key" },
            { status: 500 }
        );
    }

    try {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,
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
