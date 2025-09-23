import Image from "next/image";
import InfoSection from "@/components/InfoSection";

export default function AboutUs() {
  return (
    <div className="flex flex-col gap-y-0 mt-20">
      {/* Contenedor con imagen de fondo */}
      <div className="relative w-full min-h-[400px] md:min-h-[500px]">
        <Image
          src="https://drive.google.com/uc?export=view&id=1wJeqg7o0M_zG_dbn519PM2-8piUJ7cIG"
          alt="Viñedo"
          fill
          className="object-cover"
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Texto centrado */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-start text-quaternary px-6">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Lo Mejor De La Destileria Francesa
          </h1>
          <p className="max-w-2xl text-lg md:text-xl leading-relaxed">
            En Dans Le Vent, el arte de la destilación francesa se combina con
            un profundo respeto por el tiempo y la tradición. Cada gota refleja
            el savoir-faire transmitido por generaciones, donde la precisión, la
            paciencia y la pasión transforman la uva en un brandy de carácter
            inigualable.
          </p>
        </div>
      </div>

      {/* Otros contenedores */}
      <InfoSection
        src={"/images/molino-final.jpg"}
        title={"De La Rocha LLC"}
        text={
          "Nuestro brandy está inspirado en la pasión y tradición de más de 6 generaciones de destiladores de brandy, DANS LE VENT es la culminación de más de 150 años de perfeccionamiento de este noble licor."
        }
      />

      <InfoSection
        src={"/images/destiladoras.webp"}
        title={"Los pasos de nuestra destilacion"}
        text={
          "Buscando mantener sus raíces de 4 generaciones de molineros, desea introducir al mercado Boliviano está nueva marca, con una imagen clásica, donde se vea la tradición y las raíces, la pasión por el trabajo y los detalles, destacando que una bebida es compartir momentos, celebrar éxitos."
        }
        reverse={true}
      />

      <div id="faq" className="flex flex-col md:flex-row">
        {/* Video */}
        <div className="relative w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg h-[300px] md:h-[460px]">
          <iframe
            src="https://drive.google.com/file/d/1SD4We21F_mjYHrooLJ6pnosAwCGm3bI_/preview "
            className="w-full h-full object-contain"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left px-2 md:px-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-tertiary mb-4">
            Preguntas frecuentes
          </h1>
          <p className="text-lg md:text-xl text-quaternary leading-relaxed">
            ¿Qué hace especial el brandy VSOP? El Brandy VSOP Dans Le Vent es
            especial por su elaboración 100% con uvas de Coñac y su añejamiento
            en roble Troncáis, que le otorgan suavidad, elegancia y un sabor
            distintivo.
          </p>
        </div>
      </div>

      <InfoSection
        src={"/images/atardecer.png"}
        title={"Diferenciación"}
        text={
          "De La Rocha LLC se destaca en el mercado por traer el primer brandy a Bolivia, un producto que es esencialmente un coñac de alta calidad, incluso producido en la ciudad del coñac, siendo un brandy francés 100%. Además, estamos trabajando en proyectos emocionantes."
        }
        reverse={true}
      />

      {/* Misión y Visión */}
      <div className="relative w-full flex items-center justify-center py-12">
        <div className="p-8 w-11/12 md:w-10/12 lg:w-9/12 text-quaternary">
          <h1 className="text-center text-tertiary text-3xl md:text-4xl font-semibold mb-8">
            Quiénes Somos y Hacia Dónde Vamos
          </h1>

          <div className="flex flex-col md:flex-row gap-10 md:gap-20 text-quaternary">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-tertiary">Misión</h2>
              <p className="leading-relaxed text-lg">
                Comprometidos con nuestros principios y valores. A través de la
                integración de talentos, tecnologías de vanguardia y prácticas
                responsables, aportamos al crecimiento de nuestra compañía
                ofreciendo productos y servicios con valor agregado que superan
                las expectativas de nuestros clientes.
              </p>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-tertiary">Visión</h2>
              <p className="leading-relaxed text-lg">
                Somos una compañía que impulsa su crecimiento sostenido en la
                excelencia, calidad e innovación de nuestros productos y
                servicios con una firme política de mejora constante en nuestros
                procesos y recursos humanos; aportamos al crecimiento y mejora
                de las economías sin dejar de lado la responsabilidad social en
                nuestro entorno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
