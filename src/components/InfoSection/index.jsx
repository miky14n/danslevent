import Image from "next/image";

export default function InfoSection({
  src,
  title,
  text,
  reverse = false,
  personalWidth = 723,
  customHeight = 460,
}) {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-6 md:gap-12 w-full px-4`}
    >
      {/* Imagen */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={src}
          alt={title}
          width={personalWidth}
          height={customHeight}
          className="rounded-xl shadow-lg object-cover "
        />
      </div>

      {/* Texto */}
      <div className="w-full md:w-1/2 text-center md:text-left px-2 md:px-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-tertiary mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-quaternary leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
