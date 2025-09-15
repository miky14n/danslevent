import Image from "next/image";

export default function InfoSection({
  src,
  title,
  text,
  reverse = false,
  personalWidth,
  customHeight,
}) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-1 md:gap-1 w-full px-1`}
    >
      {/* Imagen */}
      <div
        className={`relative w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg ${
          !personalWidth && !customHeight ? "h-[300px] md:h-[460px]" : ""
        }`}
        style={customHeight && personalWidth ? { height: customHeight } : {}}
      >
        {personalWidth && customHeight ? (
          <Image
            src={src}
            alt={title}
            width={personalWidth}
            height={customHeight}
            className="rounded-xl shadow-lg object-cover"
          />
        ) : (
          <Image src={src} alt={title} fill className="object-cover" />
        )}
      </div>

      {/* Texto */}
      <div className="w-full md:w-1/2 justify-center text-center md:text-left px-2 md:px-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-tertiary mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-quaternary text-center leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
