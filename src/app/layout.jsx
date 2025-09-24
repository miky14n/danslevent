import "./globals.css";
import { Providers } from "./providers/provider";
import NavbarDLV from "@/components/NavbarDLV";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dans Le Vent",
  description:
    "Dans Le Vent, brandy elegante y versátil. Encuentra información de la marca, nuestro producto y recetas de cocteles para disfrutar en cada ocasión.",
  keywords: ["Brandy, Francia"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <NavbarDLV />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
