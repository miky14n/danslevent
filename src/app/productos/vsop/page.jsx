"use client";
import Image from "next/image";
import ProductGrid from "@/components/ProductGrid";
import InfoCard from "@/components/InfoCard";

export default function VsopProductView() {
  const cocktails = [
    {
      image: "/images/sidecar.png",
      name: "Sidecar",
      link: "",
    },
    {
      image: "/images/Brandy-Alexander.png",
      name: "Brandy Alexander",
      link: "",
    },
    {
      image: "/images/French-Conection.png",
      name: "French Connection",
      link: "",
    },
  ];

  return (
    <section className="max-w-screen-2xl mx-auto px-4 md:px-8 py-16 space-y-20 mt-10">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-start">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-tertiary">BRANDY VSOP</h1>
          <p className="text-quaternary leading-relaxed text-lg">
            Elaborado 100% con uva y producido en el área del Sur de Francia,
            con cepas cultivadas en la región de Coñac, nuestro Brandy de
            denominación VSOP se añeja en barricas de roble procedentes del
            famoso bosque antiguo de “Tronçais”, donde se transfiere el
            característico sabor a vainilla y noble tostado haciéndolo complejo,
            suave y elegante. Este proceso se controla cuidadosamente durante
            cuatro a cinco años por nuestros expertos en las bodegas.
          </p>

          {/* Cóctel sugerido */}
          <div>
            <h2 className="text-2xl font-semibold text-tertiary mb-6">
              Cóctel sugerido — Crusta
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Ingredientes */}
              <InfoCard
                title="Ingredientes"
                items={[
                  "2 oz de Brandy DANS LE VENT",
                  "1 oz de Jugo de cranberry",
                  "0.5 oz de Jugo de limón",
                  "1 oz de Triple sec",
                  "Azúcar para escarchar el borde",
                ]}
                mediaType="image"
                mediaSrc="/DSC_0087.jpg"
                mediaAlt="Brandy Crusta"
              />

              {/* Preparación */}
              <InfoCard
                title="Preparación"
                items={[
                  "Escarchar el borde de la copa con limón y azúcar (opcional).",
                  "Llenar una coctelera con hielo.",
                  "Agregar 45 ml de brandy, 15 ml de licor de naranja y 15 ml de jugo de limón fresco.",
                  "Agregar un chorrito de curaçao o jarabe simple (opcional).",
                  "Agitar bien durante 15 segundos.",
                  "Colar la mezcla en la copa fría.",
                  "Decorar con una cáscara de limón dentro de la copa.",
                ]}
                mediaType="video"
                mediaSrc="/videos/vide-crusta.mp4"
              />
            </div>
          </div>
        </div>

        {/* Imagen de la botella */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/botella.jpg"
            alt="Brandy VSOP"
            width={620}
            height={620}
            className="rounded-2xl shadow-2xl object-contain max-w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* OTRAS OPCIONES */}
      <section className="space-y-8">
        <h2 className="text-center text-2xl font-semibold text-tertiary">
          Otras opciones de Cócteles
        </h2>
        <ProductGrid products={cocktails} />
      </section>
    </section>
  );
}
