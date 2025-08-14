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
  const ldLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SellHouseFast Washington",
    areaServed: "Washington",
    url: "https://www.sellhousefast.local/washington",
    telephone: "+1-800-555-1234",
    sameAs: [
      "https://www.facebook.com/sellhousefast",
      "https://www.linkedin.com/company/sellhousefast"
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "WA",
      addressCountry: "US"
    }
  };

  const ldFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "How fast can you buy my Washington house?", acceptedAnswer: { "@type": "Answer", text: "Many sellers close in 7–14 days; we work on your timeline." } },
      { "@type": "Question", name: "Do I need to make repairs?", acceptedAnswer: { "@type": "Answer", text: "No. Sell as-is. We handle repairs after closing." } },
      { "@type": "Question", name: "Are there commissions?", acceptedAnswer: { "@type": "Answer", text: "No agent commissions and no hidden fees." } }
    ]
  };

  const ldBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sellhousefast.local/" },
      { "@type": "ListItem", position: 2, name: "Washington", item: "https://www.sellhousefast.local/washington" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldLocalBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumbs) }} />
      <Hero state="Washington" />
      <HowItWorks />
      <Benefits state="Washington" />
      <Testimonials state="Washington" />
      <CompareOptions state="Washington" />
      <SEOContent state="Washington" />
      <ServiceAreas state="Washington" />
      <LeadForm state="Washington" />
      <FAQ state="Washington" />
    </>
  );
} 