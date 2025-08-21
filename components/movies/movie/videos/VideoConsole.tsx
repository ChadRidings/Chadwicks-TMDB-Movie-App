"use client";

import { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import dayjs from "dayjs";
import type { VideoType } from "../../../../types/global";

const VideoConsole = ({
    title,
    videos,
}: {
    title: string;
    videos: VideoType[];
}) => {
    const [selectedVideo, setSelectedVideo] = useState<string>(videos[0].key);

    return (
        <div className="w-full border-1 border-gray-300">
            <h2 className="text-2xl font-bold text-primary-yellow mb-4">
                {title}
            </h2>

            <div className="flex justify-center mb-4">
                <div className="relative w-[90%] aspect-video">
                    <ReactPlayer
                        className="absolute top-0 left-0"
                        src={`https://www.youtube.com/watch?v=${selectedVideo}`}
                        width="100%"
                        height="100%"
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
            </div>

            {videos.map((video: VideoType) => (
                <div key={video.id} className="mb-6">
                    <h3>{video.name}</h3>
                    <p className="text-sm italic">
                        Published:{" "}
                        {dayjs(video.published_at).format("MMMM D, YYYY")}
                    </p>

                    <Image
                        src={`https://img.youtube.com/vi/${video.key}/maxresdefault.jpg`}
                        onClick={() => setSelectedVideo(video.key)}
                        className="cursor-pointer mb-2"
                        alt={video.name}
                        width={800}
                        height={600}
                        style={{ width: "192px", height: "108px" }}
                    />
                </div>
            ))}
        </div>
    );
};

export default VideoConsole;
