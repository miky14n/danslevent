import Image from "next/image";
import Link from "next/link";

export default function CocktailCard({ image, title, description, link }) {
  return (
    <div className="flex justify-center px-4 py-6">
      <div className="flex flex-col md:flex-row items-center bg-sixty rounded-xl shadow-md overflow-hidden p-6 gap-6 w-full max-w-5xl">
        {/* Imagen */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64">
            <Image
              src={image}
              alt={title}
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Contenido */}
        <div className="flex flex-col justify-between w-full md:w-2/3 space-y-4">
          <h2 className="text-3xl font-semibold text-yellow-200 ">{title}</h2>
          <p className="text-gray-200 text-2xl">{description}</p>
          <div className="flex justify-end">
            <Link
              href={link}
              className="bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded-lg transition text-lg"
            >
              Saber más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
