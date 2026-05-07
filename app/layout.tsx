import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://fortuneelectrical.com.au"),
  title: "Fortune Electrical — Power Done Right.",
  description:
    "Residential, commercial, industrial electrical and data, communications & security/access control services across Melbourne and Victoria. Power Done Right.",
  keywords:
    "electrician Melbourne, electrical contractor Victoria, residential commercial industrial electrical, Croydon electrician, data communications, security access control",
  authors: [{ name: "Fortune Electrical" }],
  openGraph: {
    title: "Fortune Electrical — Power Done Right.",
    description:
      "Residential, commercial, industrial electrical and data, communications & security/access control services across Melbourne and Victoria.",
    type: "website",
    url: "https://fortuneelectrical.com.au",
    siteName: "Fortune Electrical",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectricalContractor",
  name: "Fortune Electrical",
  url: "https://fortuneelectrical.com.au",
  logo: "https://fortuneelectrical.com.au/assets/footer-logo.png",
  image: "https://fortuneelectrical.com.au/assets/footer-logo.png",
  description:
    "Residential, commercial, industrial electrical and data, communications & security/access control services across Melbourne and Victoria.",
  telephone: "+61431820530",
  email: "admin@fortuneelectrical.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Croydon",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: [
    { "@type": "City", name: "Melbourne" },
    { "@type": "State", name: "Victoria" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electrical Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residential Electrical",
          url: "https://fortuneelectrical.com.au/residential/",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Electrical",
          url: "https://fortuneelectrical.com.au/commercial/",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Industrial Electrical",
          url: "https://fortuneelectrical.com.au/industrial/",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data, Communications & Security/Access Control",
          url: "https://fortuneelectrical.com.au/data-communications-security/",
        },
      },
    ],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Fortune Electrical",
  url: "https://fortuneelectrical.com.au",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
