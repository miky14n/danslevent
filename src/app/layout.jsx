import "./globals.css";
import { Providers } from "./providers/provider";
import NavbarDLV from "@/components/NavbarDLV";
import Footer from "@/components/Footer";
import ModalAlert from "@/components/ModalAlert";

export const metadata = {
  metadataBase: new URL("https://dansleventfrance.com"),
  title: {
    default: "Dans Le Vent - Brandy Francés Elegante y Versátil",
    template: "%s | Dans Le Vent",
  },
  description:
    "Dans Le Vent es un brandy francés premium, elegante y versátil. Descubre la historia de la marca, nuestro producto exclusivo y recetas de cócteles sofisticados para cada ocasión.",
  keywords: [
    "Brandy",
    "Brandy Francés",
    "Brandy Premium",
    "Cócteles con Brandy",
    "Dans Le Vent",
    "Brandy Elegante",
    "Destilado de Francia",
    "Brandy Gourmet",
    "Brandy Artesanal",
  ],
  authors: [{ name: "Dans Le Vent", url: "https://dansleventfrance.com" }],
  alternates: {
    canonical: "https://dansleventfrance.com",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://dansleventfrance.com",
    siteName: "Dans Le Vent",
    title: "Dans Le Vent - Brandy Francés Elegante y Versátil",
    description:
      "Brandy premium elaborado en Francia. Descubre el sabor de Dans Le Vent y aprende recetas de cócteles exclusivos.",
    images: [
      {
        url: "https://dansleventfrance.com/images/log-danslevent.png",
        width: 800,
        height: 800,
        alt: "Logo Dans Le Vent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dans Le Vent - Brandy Francés Elegante y Versátil",
    description:
      "Descubre el brandy francés premium Dans Le Vent. Información de la marca, producto y recetas exclusivas de cócteles.",
    images: ["https://dansleventfrance.com/images/log-danslevent.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Brand",
              name: "Dans Le Vent",
              url: "https://dansleventfrance.com",
              logo: "https://dansleventfrance.com/images/log-danslevent.png",
              description:
                "Dans Le Vent es un brandy francés premium, elegante y versátil. Elaborado en Francia, ideal para cócteles sofisticados y momentos especiales.",
              sameAs: [
                "https://www.facebook.com/tu-pagina",
                "https://www.instagram.com/tu-pagina",
              ],
              product: {
                "@type": "Product",
                name: "Brandy Dans Le Vent",
                image: "https://dansleventfrance.com/images/log-danslevent.png",
                description:
                  "Brandy premium francés de sabor sofisticado y versátil, perfecto para cócteles y degustación.",
                brand: "Dans Le Vent",
              },
            }),
          }}
        />
      </head>
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <ModalAlert />
            <NavbarDLV />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
