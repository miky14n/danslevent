import Link from "next/link";
import { FacebookIc, InstagramIc, Tiktok } from "../Icons";

// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-secondary text-white p-8 footer-font">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8">
        {/* Seguinos */}
        <div>
          <h3 className="font-semibold mb-4">Síguenos</h3>
          <div className="flex gap-3">
            <Link
              href="https://www.instagram.com/industrias_delarocha?igsh=d3oyYW91MzF4dHN0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIc />
            </Link>
            <Tiktok />
            <Link
              href="https://m.facebook.com/p/Industrias-De-La-Rocha-61566914166399/"
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
              <a href="#" className="hover:underline">
                Preguntas Frecuentes
              </a>
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
              <a href="#" className="hover:underline">
                Ubicación
              </a>
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
