"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Close, HamburgerMenu } from "../Icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0B2340]">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Barra superior */}
        <div className="flex items-center justify-between h-20 relative">
          {/* Menú izquierdo (solo desktop) */}
          <div className="hidden md:flex space-x-12 text-white font-medium">
            <Link href="/productos" className="hover:text-yellow-400 transition">
              Nuestros Productos
            </Link>
            <Link href="/cocteles" className="hover:text-yellow-400 transition">
              Nuestros Cócteles
            </Link>
          </div>

          {/* Logo centrado SIEMPRE */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="img-logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Menú derecho (solo desktop) */}
          <div className="hidden md:flex space-x-12 text-white font-medium">
            <Link href="/nosotros" className="hover:text-yellow-400 transition">
              Acerca de Nosotros
            </Link>
            <Link href="/estilo-vida" className="hover:text-yellow-400 transition">
              Estilo de Vida
            </Link>
          </div>

          {/* Botón hamburguesa (solo mobile, alineado derecha) */}
          <button
            className="md:hidden text-white ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // Icono "X"
              <Close/>
            ) : (
              // Icono "hamburguesa"
              <HamburgerMenu/>
            )}
          </button>
        </div>

        {/* Menú en mobile */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 pb-4 text-white font-medium">
            <Link href="/productos" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
              Nuestros Productos
            </Link>
            <Link href="/cocteles" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
              Nuestros Cócteles
            </Link>
            <Link href="/nosotros" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
              Acerca de Nosotros
            </Link>
            <Link href="/estilo-vida" onClick={() => setIsOpen(false)} className="hover:text-yellow-400">
              Estilo de Vida
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
