import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import LeadForm from "@/components/sections/LeadForm";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Sell Your House Fast in California | Cash Offer in 24 Hours",
  description: "We buy houses in California for cash. No repairs, no fees. Get a fair, no-obligation cash offer and close in as little as 7 days.",
  alternates: { canonical: "/california" },
  openGraph: {
    title: "Sell Your House Fast in California",
    description: "Fair cash offers for California homes in any condition. Close fast.",
    url: "/california",
    type: "website",
  },
};

export default function CaliforniaPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "BuyHouseFast California",
    areaServed: "California",
    url: "https://www.buyhousefast.local/california",
    telephone: "+1-800-555-1234",
    sameAs: [
      "https://www.facebook.com/buyhousefast",
      "https://www.linkedin.com/company/buyhousefast"
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "CA",
      addressCountry: "US"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Hero state="California" />
      <HowItWorks />
      <Benefits state="California" />
      <Testimonials state="California" />
      <LeadForm state="California" />
      <FAQ state="California" />
    </>
  );
} 