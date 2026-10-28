import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/fraunces";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingAction from "@/components/FloatingAction";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "GITM Gurugram — Engineering & Management Institute in Delhi NCR",
    template: "%s | GITM Gurugram",
  },
  description: site.description,
  keywords: [
    "GITM Gurgaon",
    "Global Institute of Technology and Management",
    "engineering college Gurugram",
    "B.Tech admission Gurgaon",
    "MBA Gurgaon",
    "AICTE approved college Delhi NCR",
  ],
  authors: [{ name: "Global Institute of Technology & Management" }],
  openGraph: {
    title: "GITM Gurugram — Engineering & Management Institute in Delhi NCR",
    description: site.description,
    url: site.url,
    siteName: "GITM Gurugram",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/campus-hero.jpg", width: 700, height: 508, alt: "GITM Gurugram campus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GITM Gurugram — Engineering & Management Institute in Delhi NCR",
    description: site.description,
    images: ["/images/campus-hero.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: site.name,
  alternateName: "GITM Gurgaon",
  url: site.url,
  logo: `${site.url}/images/campus-front.webp`,
  image: `${site.url}/images/campus-hero.jpg`,
  foundingDate: "2008",
  description: site.description,
  telephone: "+91-8053980002",
  email: "info@gitmgurgaon.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5 KM Milestone, Kheda Khurampur, Farrukhnagar, Haily Mandi Road",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122506",
    addressCountry: "IN",
  },
  sameAs: ["https://www.linkedin.com/school/gitm-gurgaon/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingAction />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
      </body>
    </html>
  );
}
