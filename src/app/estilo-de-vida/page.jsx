"use client";
import Image from "next/image";
import Link from "next/link";

export default function EstiloDeVida() {
  const lifestyleItems = [
    {
      image: "/images/brandy-degustar.jpg",
      title: "El Arte de Degustar Brandy",
      description:
        "Descubre los matices de saborear un brandy premium, desde el remolino en la copa hasta la cata y degustación.",
    },
    {
      image: "/images/brandy-maridaje.jpg",
      title: "Maridaje del Brandy con Comida Gourmet y Puros",
      description:
        "Explora los maridajes perfectos de Dans Le Vent con la alta cocina y los puros para una experiencia elevada.",
    },
    {
      image: "/images/brandy-eventos.jpg",
      title: "Organizando Eventos Sofisticados con Dans Le Vent",
      description:
        "Aprende cómo crear reuniones memorables con Dans Le Vent como pieza central.",
    },
    {
      image: "/images/brandy-viajes.jpg",
      title: "Viajes y Experiencias con Dans Le Vent",
      description:
        "Emprende viajes que encarnan el lujo y la sofisticación del estilo de vida Dans Le Vent.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-8">Estilo de vida</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {lifestyleItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={250}
              className="rounded-t-lg object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="mb-4">
          Comparte tus <strong>#DansLeVentMoments</strong> en redes sociales
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="#"
            className="bg-gray-100 px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition"
          >
            Instagram
          </Link>
          <Link
            href="#"
            className="bg-gray-100 px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition"
          >
            Tiktok
          </Link>
        </div>
      </div>
    </section>
  );
}
