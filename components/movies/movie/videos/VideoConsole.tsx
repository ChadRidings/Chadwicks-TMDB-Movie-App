"use client";

import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import VideoThumbnails from "./VideoThumbnails";
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
        <div className="w-full">
            <h2 className="text-2xl font-bold text-primary-b mb-4">{title}</h2>

            <VideoPlayer videoKey={selectedVideo} />
            <VideoThumbnails
                videos={videos}
                setSelectedVideo={setSelectedVideo}
                selectedVideo={selectedVideo}
            />
        </div>
    );
};

export default VideoConsole;
