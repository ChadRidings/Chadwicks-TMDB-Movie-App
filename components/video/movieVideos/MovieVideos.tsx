'use client';

import VideoConsole from "./VideoConsole";
import type { VideoType, VideosType } from '../../../types/global';

const MovieVideos = ({ videos }: { videos: VideosType }) => {
    // For now, filter the videos to only show YouTube videos.
    const youtubeVideos = videos.results.filter((video: VideoType) => video.site === 'YouTube');

    // You can further filter by type if needed (e.g., trailers, teasers, etc.)
    const trailerVideos = youtubeVideos.filter((video: VideoType) => video.type === 'Trailer');
    const teaserVideos = youtubeVideos.filter((video: VideoType) => video.type === 'Teaser');
    const clipVideos = youtubeVideos.filter((video: VideoType) => video.type === 'Clip');
    const behindTheScenesVideos = youtubeVideos.filter((video: VideoType) => video.type === 'Behind the Scenes');
    const featuretteVideos = youtubeVideos.filter((video: VideoType) => video.type === 'Featurette');
    const shortVideos = youtubeVideos.filter((video: VideoType) => video.type === 'Short');

    return (
        <>
            <div className="trailers">
                <VideoConsole
                    title="Trailers"
                    videos={trailerVideos}
                />
            </div>
            <div>
                {videos.results.length === 0 && (
                    <p>No videos available for this movie.</p>
                )}
            </div>
        </>
    );
};

export default MovieVideos;
