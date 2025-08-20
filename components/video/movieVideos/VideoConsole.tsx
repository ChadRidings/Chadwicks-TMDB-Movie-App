"use client";

import ReactPlayer from "react-player";
import dayjs from "dayjs";
import type { VideoType } from "../../../types/global";

const VideoConsole = ({
    title,
    videos,
}: {
    title: string;
    videos: VideoType[];
}) => {
    return (
        <>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>

            {videos.map((video: VideoType) => (
                <div key={video.id} className="mb-6">
                    <h3>{video.name}</h3>
                    <p className="text-sm italic">Published: {dayjs(video.published_at).format("MMMM D, YYYY")}</p>

                    <ReactPlayer
                        className=""
                        key={video.key}
                        src={`https://www.youtube.com/watch?v=${video.key}`}
                        controls
                        config={{
                            youtube: {
                                color: "white",
                                iv_load_policy: 3,
                            },
                        }}
                        crossOrigin="anonymous"
                    />
                </div>
            ))}
        </>
    );
};

export default VideoConsole;
