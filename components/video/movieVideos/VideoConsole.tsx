'use client';

import ReactPlayer from 'react-player';
import type { VideoType } from '../../../types/global';

const VideoConsole = ({ title, videos }: { title: string; videos: VideoType[] }) => {
    console.log("Trailer data:", videos);

    return (
        <div className="video-console">
            <h2>{title}</h2>
            <ul>
                {videos.map((video: VideoType) => (
                    <div key={video.id}>
                        <h3>{video.name}</h3>
                        <ReactPlayer
                            key={video.id}
                            src={`https://www.youtube.com/watch?v=${video.key}`}
                            crossOrigin="anonymous"
                        />
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default VideoConsole;
