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
    name: "SellHouseFast California",
    areaServed: "California",
    url: "https://www.sellhousefast.local/california",
    telephone: "+1-800-555-1234",
    sameAs: [
      "https://www.facebook.com/sellhousefast",
      "https://www.linkedin.com/company/sellhousefast"
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sellhousefast.local/" },
      { "@type": "ListItem", position: 2, name: "California", item: "https://www.sellhousefast.local/california" }
    ]
  };

  return (
    <div className="bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldLocalBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumbs) }} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-slate-100 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero state="California" />
        </div>
      </section>

      {/* How It Works - Dark Background */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HowItWorks />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Benefits state="California" />
        </div>
      </section>

      {/* Testimonials - Dark Background */}
      <section className="bg-slate-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials state="California" />
        </div>
      </section>

      {/* Compare Options - Gradient Background */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CompareOptions state="California" />
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContent state="California" />
        </div>
      </section>

      {/* Service Areas - Light Gray Background */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceAreas state="California" />
        </div>
      </section>

      {/* Lead Form - Blue Gradient */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm state="California" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ state="California" />
        </div>
      </section>
    </div>
  );
} 