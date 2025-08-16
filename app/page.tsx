import { Providers } from "./providers";
import TrendingMovies from "../components/movies/trending/trendingMovies";
import UpcomingMovies from "../components/movies/upcoming/upcomingMovies";

const Page = async () => {
    return (
        <>
            <Providers>
                <div className="flex flex-col max-w-[1440px] mx-auto bg-gray-100 text-gray-600 dark:bg-primary-dark dark:text-gray-200 p-4">
                    <div className="w-full mb-4">
                        <TrendingMovies />
                    </div>
                    <div className="w-full mb-4">
                        <UpcomingMovies />
                    </div>
                </div>
            </Providers>
        </>
    );
};

export default Page;
