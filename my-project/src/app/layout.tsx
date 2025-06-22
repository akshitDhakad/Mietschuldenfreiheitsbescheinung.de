import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title:
    "Mietschuldenfreiheitsbescheinigung – Vorlage kostenlos & digital erstellen",
  description:
    "Jetzt Mietschuldenfreiheitsbescheinigung gratis downloaden oder digital erstellen lassen. Als PDF-Vorlage oder mit Online-Service – einfach & rechtskonform.",
  keywords:
    "Mietschuldenfreiheitsbescheinigung, Vorlage, PDF, kostenlos, digital erstellen, Mietbescheinigung",
  authors: [{ name: "mietschuldenfreiheitsbescheinigung.de" }],
  creator: "mietschuldenfreiheitsbescheinigung.de",
  publisher: "mietschuldenfreiheitsbescheinigung.de",
  robots: "index, follow",
  openGraph: {
    title:
      "Mietschuldenfreiheitsbescheinigung – Vorlage kostenlos & digital erstellen",
    description:
      "Jetzt Mietschuldenfreiheitsbescheinigung als PDF-Vorlage kostenlos oder digital erstellen lassen. Schnell, sicher & rechtskonform.",
    url: "https://www.mietschuldenfreiheitsbescheinigung.de/",
    siteName: "Mietschuldenfreiheitsbescheinigung",
    images: [
      {
        url: "https://www.mietschuldenfreiheitsbescheinigung.de/social/og-mietschuldenfreiheitsbescheinigung.png",
        width: 1200,
        height: 630,
        alt: "Mietschuldenfreiheitsbescheinigung",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mietschuldenfreiheitsbescheinigung – Vorlage kostenlos & digital erstellen",
    description:
      "Jetzt Mietschuldenfreiheitsbescheinigung als PDF-Vorlage kostenlos oder digital erstellen lassen. Schnell, sicher & rechtskonform.",
    images: [
      "https://www.mietschuldenfreiheitsbescheinigung.de/social/og-mietschuldenfreiheitsbescheinigung.png",
    ],
  },
  alternates: {
    canonical: "https://www.mietschuldenfreiheitsbescheinigung.de/",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Mietschuldenfreiheitsbescheinigung",
              description:
                "Jetzt Mietschuldenfreiheitsbescheinigung als PDF-Vorlage kostenlos oder digital erstellen lassen. Schnell, sicher & rechtskonform.",
              url: "https://www.mietschuldenfreiheitsbescheinigung.de",
              author: {
                "@type": "Organization",
                name: "mietschuldenfreiheitsbescheinigung.de",
              },
              publisher: {
                "@type": "Organization",
                name: "mietschuldenfreiheitsbescheinigung.de",
              },
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
