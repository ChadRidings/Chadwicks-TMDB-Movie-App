"use client";

import dayjs from "dayjs";
import type { MovieDetailsType } from "../../../../types/global";

const MovieDetails = ({ movie }: { movie: MovieDetailsType }) => {
    return (
        <div className="movie-details">
            <h1 className="text-3xl font-bold mb-4 text-primary-yellow">{movie.title}</h1>

            <p className="mb-2">{movie.overview}</p>

            <p className="text-sm text-gray-500">
                Release Date: {dayjs(movie.release_date).format("MMMM D, YYYY")}
            </p>

            <p className="text-sm text-gray-500">
                Rating: {movie.vote_average}
            </p>

            <p className="text-sm text-gray-500">
                Runtime: {movie.runtime} minutes
            </p>

            {movie.homepage && (
                <p className="text-sm text-gray-500">
                    Official Site:
                    <a
                        href={movie.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        {movie.homepage}
                    </a>
                </p>
            )}

            {movie.genres.length > 0 && (
                <p className="text-sm text-gray-500">
                    Genres:
                    {movie.genres.map((genre) => genre.name).join(", ")}
                </p>
            )}

            {movie.production_companies.length > 0 && (
                <p className="text-sm text-gray-500">
                    Production Companies:
                    {movie.production_companies
                        .map((company) => company.name)
                        .join(", ")}
                </p>
            )}

            {movie.production_countries.length > 0 && (
                <p className="text-sm text-gray-500">
                    Production Countries:
                    {movie.production_countries
                        .map((country) => country.name)
                        .join(", ")}
                </p>
            )}

            {movie.spoken_languages.length > 0 && (
                <p className="text-sm text-gray-500">
                    Spoken Languages:
                    {movie.spoken_languages
                        .map((language) => language.name)
                        .join(", ")}
                </p>
            )}

            {movie.belongs_to_collection && movie.belongs_to_collection.name && (
                <p className="text-sm text-gray-500">
                    Collection: {movie.belongs_to_collection.name}
                </p>
            )}
        </div>
    );
};

export default MovieDetails;
