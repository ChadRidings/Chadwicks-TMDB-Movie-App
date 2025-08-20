export interface BackgroundCoverType {
    imageUrl: string;
    children?: React.ReactNode;
    className?: string;
}

export interface MovieType {
    id: number;
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface VideoType {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
}

export interface VideosType {
  results: VideoType[];
}
