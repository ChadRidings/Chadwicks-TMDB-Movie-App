import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import TrendingMovies from "../components/movies/trending/trendingMovies";
import UpcomingMovies from "../components/movies/upcoming/upcomingMovies";

const Page = async () => {
    // const tmdbApiKey = process.env.TMDB_API_KEY;
    // const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${tmdbApiKey}&language=en-US`, {
    //     next: { revalidate: 60 },
    // });
    // const trending = await response.json();

    return (
        <>
            <div className="flex flex-col max-w-[1440px] mx-auto bg-gray-100 text-gray-600 dark:bg-zinc-950 dark:text-gray-200 p-4">
                <div className="w-full">
                    <TrendingMovies />
                </div>
                
                <UpcomingMovies />
                <VideoPlayer />
            </div>
        </>
    );
};

export default Page;
