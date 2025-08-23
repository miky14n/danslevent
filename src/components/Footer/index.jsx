// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-[#0C2340] text-white p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8">
        
        {/* Seguinos */}
        <div>
          <h3 className="font-semibold mb-4">Síguenos</h3>
          <div className="flex gap-4">
            {/* Instagram SVG */}
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.33 3.608 1.304.975.975 1.242 2.242 1.304 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.33 2.633-1.304 3.608-.975.975-2.242 1.242-3.608 1.304-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.33-3.608-1.304-.975-.975-1.242-2.242-1.304-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.062-1.366.33-2.633 1.304-3.608.975-.975 2.242-1.242 3.608-1.304C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.782.13 4.607.397 3.635 1.369c-.972.972-1.239 2.147-1.297 3.417C2.014 5.668 2 6.077 2 9.337v5.326c0 3.26.014 3.669.072 4.949.058 1.27.325 2.445 1.297 3.417.972.972 2.147 1.239 3.417 1.297 1.28.058 1.689.072 4.949.072s3.669-.014 4.949-.072c1.27-.058 2.445-.325 3.417-1.297.972-.972 1.239-2.147 1.297-3.417.058-1.28.072-1.689.072-4.949s-.014-3.669-.072-4.949c-.058-1.27-.325-2.445-1.297-3.417-.972-.972-2.147-1.239-3.417-1.297C15.668.014 15.259 0 12 0z"/>
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/>
                <circle cx="18.406" cy="5.594" r="1.44"/>
              </svg>
            </a>

            {/* TikTok SVG */}
            <a href="#" aria-label="TikTok" className="hover:opacity-80">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2v8.5c-1.223 0-2.2-1.005-2.2-2.25s.977-2.25 2.2-2.25V2zM9.8 8.25c0 1.24 1.003 2.25 2.2 2.25s2.2-1.01 2.2-2.25S13.197 6 12 6 9.8 7.01 9.8 8.25zM12 10.5v11.25c-1.223 0-2.2-1.005-2.2-2.25s.977-2.25 2.2-2.25V10.5z"/>
              </svg>
            </a>

            {/* Facebook SVG */}
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17 22 12z"/>
              </svg>
            </a>
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
            <li><a href="#" className="hover:underline">Preguntas Frecuentes</a></li>
            <li><a href="#" className="hover:underline">Contactar</a></li>
            <li><a href="#" className="hover:underline">Agendar cita</a></li>
            <li><a href="#" className="hover:underline">Ubicación</a></li>
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
            <button className="bg-purple-500 text-white px-4 rounded-r hover:opacity-80">
              Unirse
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
