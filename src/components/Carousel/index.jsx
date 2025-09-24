"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Carousel = ({
  images,
  // altura responsiva por defecto (puedes seguir pasando `height` si quieres)
  height = "h-80 sm:h-96 md:h-[32rem]",
  widthImg = 500,
  heightImg = 500,
  autoSlide = false,
  autoSlideInterval = 3000,
  pauseOnHover = true,
}) => {
  const [current, setCurrent] = useState(0);
  const [dragStartX, setDragStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // ---- AutoSlide condicional (pausa en hover o mientras se arrastra)
  useEffect(() => {
    if (!autoSlide || isHovered || isDragging) return;
    timerRef.current = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(timerRef.current);
  }, [autoSlide, autoSlideInterval, isHovered, isDragging]);

  // ---- Drag handlers (mouse + touch) con loop
  const getClientX = (e) =>
    e?.clientX ?? e?.touches?.[0]?.clientX ?? e?.changedTouches?.[0]?.clientX;

  const handleDragStart = (e) => {
    setIsDragging(true);
    setDragStartX(getClientX(e));
    // detener autoslide mientras se arrastra
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleDragEnd = (e) => {
    if (dragStartX == null) return;
    const endX = getClientX(e);
    const diff = dragStartX - endX;

    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();

    setDragStartX(null);
    setIsDragging(false);
  };

  return (
    <div
      className="relative w-full flex justify-center select-none"
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => {
        pauseOnHover && setIsHovered(false);
        // si se soltó el mouse fuera del carrusel, cerrar drag limpio
        setDragStartX(null);
        setIsDragging(false);
      }}
    >
      {/* Wrapper del carrusel */}
      <div
        className={`relative overflow-hidden rounded-lg ${height} w-full max-w-4xl`}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {console.log(image.navigation)}
            <Link href={image.navigation} className="block relative z-10">
              <Image
                src={image.src}
                alt={`Slide ${index + 1}`}
                width={widthImg}
                height={heightImg}
                draggable={false}
                className="object-contain max-h-full max-w-full rounded-xl pointer-events-none"
                priority={index === 0}
              />
            </Link>
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Controles */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
        aria-label="Anterior"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" viewBox="0 0 6 10" fill="none">
            <path
              d="M5 1 1 5l4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
        aria-label="Siguiente"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" viewBox="0 0 6 10" fill="none">
            <path
              d="m1 9 4-4-4-4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
