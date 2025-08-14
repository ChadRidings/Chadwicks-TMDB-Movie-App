const StarRanking = ({ rating }: { rating: number }) => {
    const filledStars = Math.floor((rating / 10) * 5);
    const halfStar = (rating / 10) * 5 - filledStars > 0.5;
    const stars = Array.from({ length: 5 }, (_, index) => {
        if (index < filledStars) {
            return (
                <svg
                    key={index}
                    className="w-5 h-5 text-primary-yellow"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 .587l3.668 7.568 8.332 1.214-6.032 5.882 1.424 8.302L12 18.896l-7.392 3.88 1.424-8.302L.001 9.369l8.332-1.214L12 .587z" />
                </svg>
            );
        } else if (halfStar && index === filledStars) {
            return (
                <svg key={index} className="w-5 h-5" viewBox="0 0 24 24">
                    <clipPath id="left-half-star-clip">
                        <rect x="0" y="0" width="12" height="24" />
                    </clipPath>
                    <clipPath id="right-half-star-clip">
                        <rect x="12" y="0" width="12" height="24" />
                    </clipPath>
                    <path
                        d="M12 .587l3.668 7.568 8.332 1.214-6.032 5.882 1.424 8.302L12 18.896l-7.392 3.88 1.424-8.302L.001 9.369l8.332-1.214L12 .587z"
                        clipPath="url(#left-half-star-clip)"
                        fill="#faa91a"
                    />
                    <path
                        d="M12 .587l3.668 7.568 8.332 1.214-6.032 5.882 1.424 8.302L12 18.896l-7.392 3.88 1.424-8.302L.001 9.369l8.332-1.214L12 .587z"
                        clipPath="url(#right-half-star-clip)"
                        fill="#999"
                    />
                </svg>
            );
        } else {
            return (
                <svg
                    key={index}
                    className="w-5 h-5 text-primary-ivory"
                    fill="#999"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 .587l3.668 7.568 8.332 1.214-6.032 5.882 1.424 8.302L12 18.896l-7.392 3.88 1.424-8.302L.001 9.369l8.332-1.214L12 .587z" />
                </svg>
            );
        }
    });

    return <div className="flex space-x-1">{stars}</div>;
};

export default StarRanking;
