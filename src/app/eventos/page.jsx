"use client";
import Gallery from "@/components/Gallery";
import Image from "next/image";
import Link from "next/link";

export default function EventsSection() {
  const events = [
    {
      id: 1,
      title: "Fexpocruz 2025",
      description:
        "Dans Le Vent presentó su exquisito brandy en Fexpocruz, una de las ferias comerciales más importantes de Sudamérica. Los asistentes disfrutaron de catas exclusivas y conocieron la rica tradición y artesanía de la marca.",
      image:
        "https://drive.google.com/uc?export=view&id=1Ghkz-toyOAiAzWciglcQyqxZJNYvXx7T",
      link: "https://www.facebook.com/share/v/19crDQGxKC/",
      gallery: [
        {
          src: "https://drive.google.com/uc?export=view&id=16KVJ56kaX26oUWdbfw5HoNYdKkxNZ_7_",
          alt: "Fexpocruz 2025",
        },
        {
          src: "https://drive.google.com/uc?export=view&id=1SuEBIntI8K9hp3NvmkJVSNKYRajuBX4S",
          alt: "Fexpocruz 2025",
        },
        {
          src: "https://drive.google.com/uc?export=view&id=1G5LRESYoZI4Jp1g9PKvjED5EsKCP0nXx",
          alt: "Fexpocruz 2025",
        },
      ],
    },
    {
      id: 2,
      title: "Wine Fest 2025",
      description:
        "Dans Le Vent participó en Wine Fest, un festival de vinos y licores de primer nivel, que ofrece una oportunidad única para que los entusiastas experimenten la excepcional calidad y elegancia de su brandy.",
      image:
        "https://drive.google.com/uc?export=view&id=1rF5_Jzfk65EoWQsRjw5Bv7sRAdOBuUSv",
      link: "https://www.facebook.com/WineFestBolivia/",
      gallery: [
        {
          src: "https://drive.google.com/uc?export=view&id=1XqbxSDCqolG8tHUSMoPQLDuX2N5xuLer",
          alt: "Wine Fest 2025",
        },
        {
          src: "https://drive.google.com/uc?export=view&id=1fcIGIaCe-eujWRxY6LshtHhixQw-WGgw",
          alt: "Wine Fest 2025",
        },
        {
          src: "https://drive.google.com/uc?export=view&id=1L5nFk1O7HIA9VwSzAiRaSY-rnQN-0XI0",
          alt: "Wine Fest 2025",
        },
      ],
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-2xl sm:text-title text-tertiary font-bold mb-8">
        Dans Le Vent Presente En Eventos Clave
      </h1>

      <div className="space-y-12">
        {events.map((event) => (
          <div key={event.id} className="space-y-5">
            {/* Tarjeta principal */}
            <div className="grid md:grid-cols-4 gap-4 items-center">
              <div className="md:col-span-2">
                <Image
                  src={event.image}
                  alt={event.title}
                  width={700}
                  height={500}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="md:col-span-2 flex flex-col justify-between ">
                <div>
                  <h2 className="text-subtitle text-tertiary font-semibold">
                    {event.title}
                  </h2>
                  <p className="mt-2 text-quaternary text-body">
                    {event.description}
                  </p>
                </div>
                <Link
                  href={event.link}
                  target="blank"
                  className="mt-4 inline-block border border-white text-white bg-transparent font-medium py-2 px-4 rounded-lg transition duration-300 hover:bg-quaternary hover:text-secondary self-start "
                >
                  Ver más
                </Link>
              </div>
            </div>

            {/* Galería opcional */}
            {event.gallery.length > 0 && <Gallery event={event} />}
          </div>
        ))}
      </div>
    </section>
  );
}
