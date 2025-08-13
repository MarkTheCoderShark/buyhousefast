import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";
import Testimonials from "@/components/sections/Testimonials";
import LeadForm from "@/components/sections/LeadForm";
import FAQ from "@/components/sections/FAQ";
import CompareOptions from "@/components/sections/CompareOptions";
import SEOContent from "@/components/sections/SEOContent";
import ServiceAreas from "@/components/sections/ServiceAreas";

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
  const ldLocalBusiness = {
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

  const ldFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How fast can you buy my California house?", acceptedAnswer: { "@type": "Answer", text: "Many sellers close in 7–14 days; we work on your timeline." } },
      { "@type": "Question", name: "Do I need to make repairs?", acceptedAnswer: { "@type": "Answer", text: "No. Sell as-is. We handle repairs after closing." } },
      { "@type": "Question", name: "Are there commissions?", acceptedAnswer: { "@type": "Answer", text: "No agent commissions and no hidden fees." } }
    ]
  };

  const ldBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.buyhousefast.local/" },
      { "@type": "ListItem", position: 2, name: "California", item: "https://www.buyhousefast.local/california" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldLocalBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumbs) }} />
      <Hero state="California" />
      <HowItWorks />
      <Benefits state="California" />
      <Testimonials state="California" />
      <CompareOptions state="California" />
      <SEOContent state="California" />
      <ServiceAreas state="California" />
      <LeadForm state="California" />
      <FAQ state="California" />
    </>
  );
} 