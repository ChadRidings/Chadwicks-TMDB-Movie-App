'use client';

import { useRef, useState } from "react";

export default function VideoPlayer() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentVideo, setCurrentVideo] = useState<string>("https://videos.pexels.com/video-files/3121102/3121102-uhd_2560_1440_24fps.mp4");

    const handlePlay = () => {
        videoRef.current?.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        videoRef.current?.pause();
        setIsPlaying(false);
    };

    const handleSeek = (seconds: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime += seconds;
        }
    };

    return (
        <div className="w-full mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="p-5 text-gray-600 dark:bg-gray-800 dark:text-gray-200">
                <video
                    ref={videoRef}
                    className="w-full"
                    controls
                    src={currentVideo}
                />

                <div className="mt-2 flex gap-2 text-3xl text-grey-300 dark:text-white">
                    <button onClick={handlePlay}><i className="bi bi-play-circle"></i></button>
                    <button onClick={handlePause}><i className="bi bi-pause-circle"></i></button>
                    <button onClick={() => handleSeek(-5)}><i className="bi bi-rewind-circle"></i></button>
                    <button onClick={() => handleSeek(5)}><i className="bi bi-fast-forward-circle"></i></button>
                </div>
            </div>
        </div>
    );
}
