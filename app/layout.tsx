import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kkvexa.com"),
  title: {
    default: "KKVEXA — AI & Software Studio | Intelligent Digital Products",
    template: "%s | KKVEXA — AI & Software Studio",
  },
  description:
    "KKVEXA is an AI & Software Studio engineering intelligent digital products, high-performance web applications, cross-platform mobile apps, SaaS platforms, and resilient automation pipelines.",
  keywords: [
    "AI software development",
    "AI integration",
    "LLM applications",
    "web application development",
    "mobile application development",
    "SaaS MVP engineering",
    "software development studio",
    "business automation",
    "KKVEXA",
  ],
  authors: [{ name: "KKVEXA Studio" }],
  creator: "KKVEXA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kkvexa.com",
    siteName: "KKVEXA",
    title: "KKVEXA — AI & Software Studio",
    description:
      "Building intelligent software, custom AI integrations, modern web applications, and business automation.",
    images: [
      {
        url: "/brand/og-image.svg",
        width: 1200,
        height: 630,
        alt: "KKVEXA AI & Software Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KKVEXA — AI & Software Studio",
    description:
      "Building intelligent software, custom AI integrations, modern web applications, and business automation.",
    images: ["/brand/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/brand/favicon.svg",
    shortcut: "/brand/favicon.svg",
    apple: "/brand/logo-symbol.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "KKVEXA",
    alternateName: "KKVEXA AI & Software Studio",
    description:
      "Engineering studio building custom AI integrations, web applications, mobile platforms, and business automation.",
    url: "https://kkvexa.com",
    logo: "https://kkvexa.com/brand/logo-symbol.svg",
    sameAs: [],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning Integration",
      "Web Application Development",
      "Mobile Application Development",
      "SaaS Architecture",
      "Workflow Automation",
    ],
    areaServed: "Global",
    serviceType: "Software Engineering & AI Integration",
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#080D16] text-[#F8FAFC] antialiased selection:bg-cyan-500/30 selection:text-white flex flex-col min-h-screen">
        <SkipLink />
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
