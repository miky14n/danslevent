import Image from "next/image";

export default function InfoCard({
  title,
  items = [],
  mediaType = "image", // "image" | "video"
  mediaSrc,
  mediaAlt = "",
  textHeight = "h-70",
  mediaHeight = "h-150",
}) {
  return (
    <div className="rounded-2xl bg-white/5 p-5 shadow flex flex-col">
      {/* Texto */}
      <div className={`${textHeight}`}>
        <h3 className="text-lg font-semibold text-tertiary mb-3">{title}</h3>
        <ul className="list-disc list-inside text-quaternary space-y-1 text-sm">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={`mt-6 ${mediaHeight} flex items-center justify-center`}>
        {mediaType === "image" ? (
          <Image
            src={mediaSrc}
            alt={mediaAlt}
            width={400}
            height={400}
            quality={100}
            className="rounded-2xl shadow-lg object-cover w-full h-full"
          />
        ) : (
          <video
            className="rounded-2xl shadow-lg object-cover w-full h-full"
            controls
            src={mediaSrc}
            autoPlay
            muted
          >
            Tu navegador no soporta el video.
          </video>
        )}
      </div>
    </div>
  );
}
