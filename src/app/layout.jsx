import './globals.css';
import { Providers } from './providers/provider';
import NavbarDLV from '@/components/NavbarDLV';
import Footer from '@/components/Footer';

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
