// import type { UserType } from "../types/users";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";

const Page = async () => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const users: UserType[] = await response.json();

    return (
        <>
            <div className="flex w-full max-w-[1440px] mx-auto bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-200">
                <VideoPlayer />
            </div>
        </>
    );
};

export default Page;
