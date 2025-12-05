type PlayButtonProps = {
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
};

export function PlayButton({
  onClick,
  ariaLabel = "Play video",
  className = "",
}: PlayButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center cursor-pointer ${className}`}
      aria-label={ariaLabel}
    >
      <span className="video-play-pulse"></span>
      <span className="video-play-button">
        <span className="video-play-icon" />
      </span>
    </button>
  );
}
