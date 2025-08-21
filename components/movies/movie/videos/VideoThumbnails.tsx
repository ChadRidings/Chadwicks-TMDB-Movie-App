"use client";

import Image from "next/image";
import dayjs from "dayjs";
import type { VideoType } from "../../../../types/global";

const VideoThumbnails = ({
    videos,
    setSelectedVideo,
    selectedVideo,
}: {
    videos: VideoType[];
    setSelectedVideo: (videoKey: string) => void;
    selectedVideo: string;
}) => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-wrap justify-start gap-5">
                {videos.map((video: VideoType) => (
                    <div
                        key={video.id}
                        className={
                            "relative flex-none w-[192px] h-[108px] " +
                            (selectedVideo === video.key
                                ? "border-2 border-primary-yellow"
                                : "")
                        }
                    >
                        <Image
                            src={`https://img.youtube.com/vi/${video.key}/maxresdefault.jpg`}
                            onClick={() => setSelectedVideo(video.key)}
                            className="cursor-pointer w-full h-full object-cover"
                            alt={video.name}
                            width={192}
                            height={108}
                            aria-label={`Thumbnail for ${video.name}`}
                        />

                        {selectedVideo === video.key && (
                            <>
                                <div className="absolute inset-0 bg-black/85" />
                                <p className="absolute bottom-[4px] left-[6px] z-10 text-xs text-primary-yellow italic">
                                    {video.name}<br/>
                                    Published:{" "}
                                    {dayjs(video.published_at).format(
                                        "MMMM D, YYYY"
                                    )}
                                </p>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoThumbnails;
