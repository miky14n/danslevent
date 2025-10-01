"use client";
import Link from "next/link";
import { FacebookIc, InstagramIc, Tiktok } from "../Icons";
import NewsletterForm from "../NewsletterForm";
import { useState, useEffect } from "react";

// components/Footer.jsx
export default function Footer() {
  const [isAdult, setIsAdult] = useState();
  useEffect(() => {
    const storedValue = localStorage.getItem("isAdult");
    setIsAdult(storedValue);
  }, []);
  return (
    <footer className="bg-secondary text-white p-8 footer-font">
      {isAdult && (
        <div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8">
            {/* Seguinos */}
            <div>
              <h3 className="font-semibold mb-4 items-center justify-center">
                Síguenos
              </h3>
              <div className="flex gap-3">
                <Link
                  href="https://www.instagram.com/danslevent_ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIc />
                </Link>
                <Link
                  href={"https://www.tiktok.com/@dansleventfrance"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Tiktok />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61579741095801"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIc />
                </Link>
              </div>
            </div>

            {/* Horarios */}
            <div>
              <h3 className="font-semibold mb-4">Horarios</h3>
              <p>Lun-Vie: 14pm - 20pm</p>
              <p>Sábado: 14pm - 20pm</p>
            </div>

            {/* Atención al cliente */}
            <div>
              <h3 className="font-semibold mb-4">Atención al cliente</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/acerca-de-nosotros#faq"
                    className="hover:underline"
                  >
                    Preguntas Frecuentes
                  </Link>
                </li>
                <Link
                  href="https://wa.me/77429267"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p href="#" className="hover:underline">
                    Contactar
                  </p>
                </Link>
                <li>
                  <Link href="/agendar-cita" className="hover:underline">
                    <p>Agendar cita</p>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://maps.app.goo.gl/rDtkCDLAWFYy7sGW7"
                    className="hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ubicación
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold mb-4">Dans le Vent</h3>
              <p>Recibir ofertas</p>
              <NewsletterForm />
            </div>
          </div>
          <p className="text-center mt-8">
            🍸 Este sitio contiene información sobre bebidas alcohólicas.
            Prohibida la venta a menores de edad. El consumo excesivo es
            perjudicial para la salud. ¡Disfruta responsablemente!
          </p>
        </div>
      )}
    </footer>
  );
}
