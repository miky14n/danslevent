import PropTypes from "prop-types";

const isExternalEmbed = (url) => {
  return /youtube\.com|youtu\.be|vimeo\.com/.test(url);
};

export default function VideoEmbed({
  src,
  autoPlay = false,
  loop = false,
  muted = false,
  playsInline = true,
  controls = true,
  poster,
  loading = "lazy",
  className = "",
  title = "Embedded video",
}) {
  if (isExternalEmbed(src)) {
    // Forzar autoplay en YouTube/Vimeo si está activado
    const autoplayUrl = autoPlay
      ? `${src}${src.includes("?") ? "&" : "?"}autoplay=1&mute=1${loop ? "&loop=1" : ""}`
      : src;

    return (
      <div
        className={`relative w-full overflow-hidden aspect-video ${className}`}
      >
        <iframe
          src={autoplayUrl}
          loading={loading}
          allow="autoplay; fullscreen"
          allowFullScreen
          title={title}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden aspect-video ${className}`}
    >
      <video
        src={src}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        controls={controls}
        poster={poster}
        preload="metadata"
        className="w-full h-full object-cover shadow-md"
      >
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
  );
}

VideoEmbed.propTypes = {
  src: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool,
  loop: PropTypes.bool,
  muted: PropTypes.bool,
  playsInline: PropTypes.bool,
  controls: PropTypes.bool,
  poster: PropTypes.string,
  loading: PropTypes.oneOf(["eager", "lazy"]),
  className: PropTypes.string,
  title: PropTypes.string,
};
