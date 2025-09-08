"use client";
import Image from "next/image";
import ProductGrid from "@/components/ProductGrid";

export default function VsopProductView() {
  const cocktails = [
    {
      image: "/sidecar.png",
      name: "Sidecar",
      link: "",
    },
    {
      image: "/Brandy-Alexander.png",
      name: "Brandy Alexander",
      link: "",
    },
    {
      image: "/French-Conection.png",
      name: "French Connection",
      link: "",
    },
  ];

  return (
    <main className="max-w-screen-2xl mx-auto px-4 md:px-8 py-16 space-y-20 mt-10">
      {/* HERO */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Texto descriptivo */}
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
              <div className="rounded-2xl bg-white/5 p-5 shadow">
                <h3 className="text-lg font-semibold text-tertiary mb-3">
                  Ingredientes
                </h3>
                <ul className="list-disc list-inside text-quaternary space-y-1 text-sm">
                  <li>2 oz de Brandy DANS LE VENT</li>
                  <li>1 oz de Jugo de cranberry</li>
                  <li>0.5 oz de Jugo de limón</li>
                  <li>1 oz de Triple sec</li>
                  <li>Azúcar para escarchar el borde </li>
                </ul>
                <div className="mt-10 space-y-4">
                  <Image
                    src="/DSC_0087.jpg"
                    alt="Brandy Crusta"
                    width={240}
                    height={444}
                    quality={100}
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>

              {/* Preparación */}
              <div className="rounded-2xl bg-white/5 p-5 shadow">
                <h3 className="text-lg font-semibold text-tertiary mb-3">
                  Preparación
                </h3>
                <ul className="list-disc list-inside text-quaternary space-y-1 text-sm">
                  <li>
                    Escarchar el borde de la copa con limón y azúcar (opcional).
                  </li>
                  <li>Llenar una coctelera con hielo.</li>
                  <li>
                    Agregar 45 ml de brandy, 15 ml de licor de naranja y 15 ml
                    de jugo de limón fresco.
                  </li>
                  <li>
                    Agregar un chorrito de curaçao o jarabe simple (opcional).
                  </li>
                  <li>Agitar bien durante 15 segundos.</li>
                  <li>Colar la mezcla en la copa fría.</li>
                  <li>Decorar con una cáscara de limón dentro de la copa.</li>
                </ul>

                <div className="mt-4 space-y-4">
                  <video
                    className="rounded-2xl shadow-lg w-full h-auto"
                    controls
                    src="/Video 1.mp4"
                    autoPlay
                    muted
                  >
                    Tu navegador no soporta el video.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen de la botella */}
        <div className="flex justify-center items-center">
          <Image
            src="/edit 6.png"
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
    </main>
  );
}
