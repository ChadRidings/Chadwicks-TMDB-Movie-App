'use client';

import ReactPlayer from "react-player";

const VideoPlayer = ({ videoKey }: { videoKey: string }) => {
    return (
        <div className="flex justify-center mb-4">
            <div className="relative w-full aspect-video">
                <ReactPlayer
                    className="absolute top-0 left-0"
                    src={`https://www.youtube.com/watch?v=${videoKey}`}
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
                    aria-label={`Video player`}
                />
            </div>
        </div>
    );
};

export default VideoPlayer;
