"use client";
import { useState } from "react";
import Alert from "../Alert";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // null | { message, color }

  const handleJoin = async (e) => {
    e.preventDefault();
    if (!email) {
      setStatus({ message: "Ingresa un correo válido", color: "danger" });
      return;
    }

    try {
      const res = await fetch("/api/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          personalSubject: "Nuevo suscriptor",
          personalMessage: "Se unió un usuario a la newsletter",
          email,
        }),
      });

      if (!res.ok) throw new Error("Error enviando correo");

      setStatus({ message: "¡Gracias por unirte!", color: "success" });
      setEmail("");
    } catch (error) {
      console.error(error);
      setStatus({
        message: "Ocurrió un error, intenta nuevamente",
        color: "danger",
      });
    }
  };

  return (
    <div className="mt-2">
      {status && (
        <Alert
          message={status.message}
          color={status.color}
          setStatus={setStatus}
        />
      )}

      <form onSubmit={handleJoin} className="flex">
        <input
          type="email"
          placeholder="Ingrese tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded-l bg-white text-black flex-1 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white px-4 rounded-r hover:opacity-80"
        >
          Unirse
        </button>
      </form>
    </div>
  );
}
