import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import LeadForm from "@/components/sections/LeadForm";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Sell Your House Fast in Washington | Cash Offer in 24 Hours",
  description: "We buy houses in Washington for cash. Any condition, any situation. Get a fair, no-obligation cash offer and close quickly.",
  alternates: { canonical: "/washington" },
  openGraph: {
    title: "Sell Your House Fast in Washington",
    description: "Fair cash offers for Washington homes. Close in days, not months.",
    url: "/washington",
    type: "website",
  },
};

export default function WashingtonPage() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "BuyHouseFast Washington",
    areaServed: "Washington",
    url: "https://www.buyhousefast.local/washington",
    telephone: "+1-800-555-1234",
    sameAs: [
      "https://www.facebook.com/buyhousefast",
      "https://www.linkedin.com/company/buyhousefast"
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "WA",
      addressCountry: "US"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Hero state="Washington" />
      <HowItWorks />
      <Benefits state="Washington" />
      <Testimonials state="Washington" />
      <LeadForm state="Washington" />
      <FAQ state="Washington" />
    </>
  );
} 