"use client";
import Image from "next/image";
import Link from "next/link";
import EventsSection from "../eventos/page";
import { Suspense } from "react";

export default function EstiloDeVida() {
  const lifestyleItems = [
    {
      image: "/images/botella-sostenida.png",
      title: "El Arte de Degustar Brandy",
      description:
        "Descubre los matices de saborear un brandy premium, desde el remolino en la copa hasta la cata y degustación.",
      navigation: "https://es.wikipedia.org/wiki/Brandy",
    },
    {
      image: "/images/comida.png",
      title: "Maridaje del Brandy con Comida Gourmet y Puros",
      description:
        "Explora los maridajes perfectos de Dans Le Vent con la alta cocina y los puros para una experiencia elevada.",
    },
    {
      image: "/images/fiesta.jpg",
      title: "Organizando Eventos Sofisticados con Dans Le Vent",
      description:
        "Aprende cómo crear reuniones memorables con Dans Le Vent como pieza central.",
    },
    {
      image: "/images/viaje.png",
      title: "Viajes y Experiencias con Dans Le Vent",
      description:
        "Emprende viajes que encarnan el lujo y la sofisticación del estilo de vida Dans Le Vent.",
    },
  ];
  const renderImage = (item) => (
    <Image
      src={item.image}
      alt={item.title}
      width={400}
      height={400}
      className="rounded-t-lg object-cover w-full h-100"
    />
  );
  return (
    <section className="max-w-7xl mx-auto px-2 py-12">
      <h1 className="text-title font-bold mb-8 text-tertiary ">
        Estilo de vida
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {lifestyleItems.map((item, index) => (
          <div
            className="bg-sixty rounded-lg shadow hover:shadow-2xl transition"
            key={index}
          >
            {item.navigation ? (
              <Link
                href={item.navigation}
                target="blank"
                rel="noopener noreferrer"
              >
                {renderImage(item)}
              </Link>
            ) : (
              renderImage(item)
            )}
            <div className="p-4">
              <h3 className="font-semibold text-subtitle mb-2 text-tertiary">
                {item.title}
              </h3>
              <p className="text-quaternary text-body">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10 ">
        <p className="mb-4 text-title text-tertiary">
          Comparte tus <strong>#DansLeVentMoments</strong> en redes sociales
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="https://www.instagram.com/danslevent_"
            className="bg-sixty px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition"
            target="blank"
          >
            Instagram
          </Link>
          <Link
            href="https://www.tiktok.com/@dansleventfrance"
            className="bg-sixty px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition"
            target="blank"
          >
            Tiktok
          </Link>
        </div>
      </div>
      <div>
        <Suspense fallback={<div>Cargando Eventos.....</div>}>
          <EventsSection />
        </Suspense>
      </div>
    </section>
  );
}
