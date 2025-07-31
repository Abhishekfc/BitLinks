import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

// ❌ Removed Inter font import due to turbopack issue

export const metadata = {
  title: "Bitlinks - Your trusted URL shortner",
  description: "BitLinks helps you shorten your URLS easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-purple-50">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
