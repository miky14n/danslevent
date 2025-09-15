import Link from "next/link";
import { FacebookIc, InstagramIc, Tiktok } from "../Icons";

// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-secondary text-white p-8 footer-font">
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
              <Link href="/acerca-de-nosotros#faq" className="hover:underline">
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
              <a href="#" className="hover:underline">
                Agendar cita
              </a>
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
          <h3 className="font-semibold mb-4">Dansle Vent</h3>
          <p>Recibir ofertas</p>
          <div className="mt-2 flex">
            <input
              type="email"
              placeholder="Ingrese tu correo"
              className="p-2 rounded-l bg-white text-black flex-1 outline-none"
            />
            <button className="bg-primary text-white px-4 rounded-r hover:opacity-80">
              Unirse
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
