import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Fortune Electrical — Power Done Right.",
  description:
    "Fortune Electrical — Premium electrical, data, security, and AV services across Melbourne and Victoria. Power Done Right.",
  keywords:
    "electrician Melbourne, electrical contractor Victoria, residential commercial industrial electrical, Croydon electrician, data communications, security systems",
  authors: [{ name: "Fortune Electrical" }],
  openGraph: {
    title: "Fortune Electrical — Power Done Right.",
    description:
      "Premium electrical, data, security, and AV services across Melbourne and Victoria.",
    type: "website",
    url: "https://fortuneelectrical.com.au",
  },
  icons: {
    icon: "/assets/footer-logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
