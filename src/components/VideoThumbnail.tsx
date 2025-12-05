import { useState } from "react";
import { PlayButton } from "./ui/PlayButton";

type VideoThumbnailProps = {
  videoId: string;
  backgroundImage?: string;
  className?: string;
};

export function VideoThumbnail({
  videoId,
  backgroundImage,
  className = "",
}: VideoThumbnailProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(true);
  };

  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={
        backgroundImage && !isPlaying
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Campus video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayButton onClick={handleClick} ariaLabel="Play campus video" />
        </div>
      )}
    </div>
  );
}
