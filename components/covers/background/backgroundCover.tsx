import type { BackgroundCoverType } from "../../../types/global";

const BackgroundCover = ({
    imageUrl,
    children,
    className
}: BackgroundCoverType) => {
    return (
        <div
            className={`relative w-full h-64 bg-center bg-cover ${className || ""} p-4`}
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            {/* Overlay tint layer */}
            <div className="absolute inset-0 bg-black/90" />

            {/* Content goes on top of overlay */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default BackgroundCover;
