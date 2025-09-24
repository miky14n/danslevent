"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-normal mt-20  px-4 py-12">
      <div className="text-center max-w-2xl mb-8">
        <h1 className="text-4xl md:text-4xl font-bold text-quinary">
          Gracias por contactarse con la familia Dans Le Vent
        </h1>
        <p className="mt-3 text-quaternary text-[20px]">
          Será agendado en la brevedad posible. Por favor, ingrese todos los
          datos del formulario y un encargado se pondrá en contacto con usted.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-primary border border-quaternary rounded-xl shadow-lg p-8 w-full max-w-3xl"
      >
        {/* Inputs responsivos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <input
            type="text"
            name="name"
            placeholder="Ingrese su nombre"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-quinary focus:outline-none bg-white "
          />
          <input
            type="text"
            name="number"
            placeholder="Ingrese su número de celular"
            value={formData.number}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-quinary focus:outline-none bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Ingrese su correo"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-quinary focus:outline-none bg-white"
          />
        </div>

        {/* Textarea */}
        <textarea
          name="reason"
          placeholder="Motivo por el que desea que lo contactemos..."
          value={formData.reason}
          onChange={handleChange}
          rows="4"
          className="w-full mt-4 px-4 py-2 border rounded-md focus:ring-2 focus:ring-quinary focus:outline-none bg-white"
        />

        {/* Botón */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-gradient-to-r from-primary to-blue-600 text-white font-semibold px-8 py-3 rounded-md shadow-md hover:opacity-90 transition"
          >
            Agendar
          </button>
        </div>
      </form>
    </section>
  );
}
