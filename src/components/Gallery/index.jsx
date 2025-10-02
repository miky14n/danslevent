"use client";
import { useState } from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";

export default function Gallery({ event }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Galería */}
      {event.gallery.length > 0 && (
        <div className="flex flex-wrap gap-4">
          {event.gallery.map((img, idx) => (
            <div
              key={idx}
              className="flex-1 min-w-[120px] max-w-[200px] cursor-pointer"
              onClick={() => setSelectedImage(img.src)} // al click guardo la imagen
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[345px]"
              />
              <p className="mt-2 text-sm text-quaternary text-center">
                {img.alt}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Modal / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // cerrar al click en el fondo
        >
          <div className="relative max-w-6xl w-full max-h-[90vh] p-4 flex items-center justify-center">
            <Image
              src={selectedImage}
              alt="preview"
              width={1200}
              height={800}
              className="rounded-lg object-contain w-auto max-w-full max-h-[85vh]"
            />

            {/* Botón de cerrar */}
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg"
              onClick={(e) => {
                e.stopPropagation(); // evita cerrar al hacer click en el botón
                setSelectedImage(null);
              }}
            >
              <FiX size={24} className="text-black" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
