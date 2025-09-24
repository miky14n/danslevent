/* eslint-disable prettier/prettier */
import Carousel from "@/components/Carousel";
import ModalAlert from "@/components/ModalAlert";
import ProductoCard from "@/components/ProductoCardAnimation";
import VideoEmbed from "@/components/VideoEmbed";
import Image from "next/image";

export default function Home() {
  const imagesCarousel = [
    {
      src: "/images/sidecar.png",
      navigation: "/cocteles/sidecar",
    },
    {
      src: "/images/crusta.jpg",

      navigation: "/cocteles/crusta",
    },
  ];
  return (
    <div className="text-tertiary">
      <ModalAlert />

      {/* Video */}
      <div className="">
        <VideoEmbed
          src="/videos/intro.mp4"
          autoPlay
          muted
          loop
          controls={false}
        />
      </div>

      {/* Intro */}

      {/* Sección destilería */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 p-1 md:p-1">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Por qué celebrar junto a Dans Le Vent?
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            Un brindis con Dans Le Vent es un tributo al arte y la elegancia
            francesa. Suave, refinado y lleno de carácter, es la elección
            perfecta para momentos que merecen ser inolvidables.
          </p>

          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            LO MEJOR DE LA DESTILERÍA FRANCESA
          </h1>
          <p className="text-base md:text-xl leading-relaxed text-center items-center">
            En Dans Le Vent, el arte de la destilación francesa se combina con
            un profundo respeto por el tiempo y la tradición. Cada gota refleja
            el savoir-faire transmitido por generaciones, donde la precisión, la
            paciencia y la pasión transforman la uva en un brandy de carácter
            inigualable.
          </p>
        </div>
        <div className="relative w-full h-[400px] md:h-auto md:min-h-[500px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/viniedo1.png"
            alt="viñedo"
            fill
            className="object-cover rounded-xl "
            quality={100}
          />
        </div>
      </div>

      {/* Producto */}
      <div className="px-0">
        <ProductoCard
          titulo="VSOP Brandy"
          descripcion="Destilado 100% de uvas francesas y añejado de al menos 4 años en barricas de roble de Tronçais. Suave, elegante y con notas de vainilla y roble tostado."
          textoVertical="Nuestro Producto"
          botellaSrc="/images/combine.png"
          navigation="/productos/vsop"
        />
      </div>

      {/* Cocteles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-1 md:p-1">
        <div className="flex flex-col justify-center items-center text-center md:text-left">
          <h1 className="text-2xl  md:text-3xl font-bold mb-4">CÓCTELES</h1>
          <p className="text-center md:text-xl leading-relaxed max-w-md mx-auto md:mx-0">
            El arte de crear recetas junto a Dans Le Vent, dejando volar la
            imaginación.
          </p>
        </div>
        <div className="flex justify-center">
          <Carousel
            images={imagesCarousel}
            height="h-[400px] md:h-[550px]"
            widthImg={300}
            heightImg={300}
            autoSlide={true}
          />
        </div>
      </div>

      {/* Legado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-1 md:p-1 items-center">
        <div className="flex justify-center">
          <Image
            src={"/images/Aroundpicture.png"}
            width={400}
            height={400}
            alt="legado"
            className="w-full max-w-sm md:max-w-md"
          />
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            NUESTRO LEGADO
          </h1>
          <h2 className="text-lg md:text-2xl leading-relaxed mb-4 max-w-md mx-auto md:mx-0">
            Una tradición francesa reinterpretada con elegancia
          </h2>
          <p className="text-sm md:text-base max-w-md mx-auto md:mx-0">
            Dans Le Vent VSOP, elaborado 100% con uvas de Coñac y añejado en
            roble Troncáis, combina tradición artesanal y excelencia francesa en
            cada gota.
          </p>
        </div>
      </div>
    </div>
  );
}
