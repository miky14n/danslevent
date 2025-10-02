/* eslint-disable @next/next/no-img-element */

export default function Unauthorized() {
  return (
    <div className="relative h-screen overflow-hidden bg-indigo-900">
      {/* Background image */}
      <img
        src="https://www.bluehost.com/blog/wp-content/uploads/2023/06/what-is-a-401-error.png"
        alt="Unauthorized"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-white  text-3xl md:text-5xl leading-snug md:leading-tight">
          Tú no puedes estar en esta pagina. <br />
          Vuelve por donde viniste.
        </h1>
      </div>
    </div>
  );
}
