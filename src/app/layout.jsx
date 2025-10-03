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
    "Dans Le Vent, brandy francés elegante y versátil. Descubre nuestra marca, producto premium y recetas de cócteles exclusivos. Un destilado para disfrutar en cada ocasión.",
  keywords: [
    "Brandy",
    "Brandy Francés",
    "Brandy Premium",
    "Cócteles con Brandy",
    "Dans Le Vent",
    "Brandy Elegante",
    "Destilado de Francia",
  ],
  authors: [{ name: "Dans Le Vent", url: "https://dansleventfrance.com" }],
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
        width: 600,
        height: 600,
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Brandy Dans Le Vent",
    image: "https://dansleventfrance.com/images/log-danslevent.png",
    description:
      "Brandy premium francés de sabor sofisticado y versátil, perfecto para cócteles y degustación.",
    brand: {
      "@type": "Brand",
      name: "Dans Le Vent",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: "35.00",
      availability: "https://schema.org/InStock",
      url: "https://dansleventfrance.com",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Cliente verificado",
        },
        datePublished: "2024-10-01",
        reviewBody: "Excelente brandy, muy elegante y versátil para cócteles.",
        name: "Reseña sobre Brandy Dans Le Vent",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
  };

  return (
    <html lang="es">
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            {/* JSON-LD para SEO */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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
