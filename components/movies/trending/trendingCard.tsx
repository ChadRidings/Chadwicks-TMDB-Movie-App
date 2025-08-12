import Image from 'next/image';
import type { MovieType } from '../../../types/movies';

const TrendingCard = ({ movie }: { movie: MovieType }) => {
    return (
        <div key={movie.id} className="p-4">
            <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
                loading="lazy"
                style={{ width: '200px', height: 'auto' }}

            />
            <h2 className="text-xl font-bold">{movie.title}</h2>
            <p className="text-sm">{movie.release_date}</p>
            <p className="text-sm">{movie.overview}</p>
        </div>
    );
};

export default TrendingCard;
