import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title:
    "Mietschuldenfreiheitsbescheinigung – Vorlage kostenlos & digital erstellen",
  description:
    "Jetzt Mietschuldenfreiheitsbescheinigung gratis downloaden oder digital erstellen lassen. Als PDF-Vorlage oder mit Online-Service – einfach & rechtskonform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
