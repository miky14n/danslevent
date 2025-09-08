"use client";
import Image from "next/image";

export default function ProductoCardAnimation({
  titulo,
  descripcion,
  textoVertical,
  botellaSrc,
}) {
  return (
    <div className="w-full h-auto min-h-[400px] md:h-[480px] bg-gradient-to-b from-[#C8782E] to-[#E9BE96] flex items-center justify-center">
      <div className="relative w-[95%] md:w-[90%] h-full flex flex-col md:flex-row items-center overflow-hidden group">
        {/* Contenedor circulo + botella */}
        <div className="flex-shrink-0 w-full md:w-[50%] flex items-center justify-center md:justify-end transform transition-transform duration-700 group-hover:md:-translate-x-[50%]">
          <div className="flex-shrink-0 w-[70%] sm:w-[60%] md:w-[50%] flex items-center justify-center">
            <Image
              src={botellaSrc}
              alt="Botella Producto"
              width={500}
              height={500}
              className="relative z-10 max-h-[95%] max-w-[95%] object-contain"
            />
          </div>
        </div>

        {/* Texto oculto */}
        <div className="w-full md:w-[60%] opacity-100 md:opacity-0 md:transform md:translate-x-20 transition-all duration-700 group-hover:opacity-100 group-hover:translate-x-0 text-center md:text-left mt-6 md:mt-0">
          <div className="p-4 sm:p-6 rounded shadow-md ">
            <h2 className="text-xl sm:text-2xl text-secondary font-bold">
              {titulo}
            </h2>
            <p className="text-secondary footer-font mt-2 w-full md:w-[80%] text-sm sm:text-base">
              {descripcion}
            </p>
          </div>
        </div>

        {/* Texto vertical */}
        <span className=" justify-start items-start hidden md:block absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-secondary font-bold text-xl sm:text-2xl">
          {textoVertical}
        </span>
      </div>
    </div>
  );
}
