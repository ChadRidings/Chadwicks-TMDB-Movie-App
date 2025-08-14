import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import TrendingMovies from "../components/movies/trending/trendingMovies";
import UpcomingMovies from "../components/movies/upcoming/upcomingMovies";

const Page = async () => {

    return (
        <>
            <div className="flex flex-col max-w-[1440px] mx-auto bg-gray-100 text-gray-600 dark:bg-primary-dark dark:text-gray-200 p-4">
                <div className="w-full mb-4">
                    <TrendingMovies />
                </div>
                
                <UpcomingMovies />
                <VideoPlayer />
            </div>
        </>
    );
};

export default Page;
