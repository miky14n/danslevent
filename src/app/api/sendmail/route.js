/* eslint-disable prettier/prettier */
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const data = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_TO_SENDER,
        pass: process.env.PASS_APPLICATION,
      },
    });
    const personalMessage =
      data.personalMessage ||
      "Se recibió la siguiente solicitud para agendar una cita y ser atendido por la siguiente persona.";
    let mailOptions;
    if (data.number) {
      mailOptions = {
        from: process.env.MAIL_TO_SENDER,
        to: process.env.MAIL_TO_RECEIVER,
        subject: data.personalSubject || "Solicitud de reunión",
        html: `
         <html>
        <body>
          <h1>${personalMessage}</h1>
          <p>Nombre: <strong>${data.name}</strong></p>
          <p>Número de celular: <strong>${data.number}</strong></p>
          <p>Correo electrónico: <strong>${data.email}</strong></p>
          <h4>Motico por el que desea ser contactado es</h4>
          <p>${data.reason}</p>
        </body>
      </html>
      `,
      };
    } else {
      mailOptions = {
        from: process.env.MAIL_TO_SENDER,
        to: process.env.MAIL_TO_RECEIVER,
        subject: data.personalSubject || "Solicitud de recibir novedades",
        html: `
         <html>
        <body>
          <h1>El siguiente usuario de correo desea recibir novedades</h1>
          <p>Correo electrónico: <strong>${data.email}</strong></p>
          <h4>Motivo por el que desea recibir novedades de ofertas</h4>
        </body>
      </html>
      `,
      };
    }

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Correo enviado" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error enviando correo" }), {
      status: 500,
    });
  }
}
