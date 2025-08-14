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
  title: "Sell Your House Fast in Bellevue, WA | Cash Offer in 24 Hours",
  description: "We buy houses in Bellevue for cash. No repairs, no fees. Get a fair, no-obligation cash offer and close in as little as 7 days. Serving all Bellevue neighborhoods.",
  alternates: { canonical: "/washington/bellevue" },
  openGraph: {
    title: "Sell Your House Fast in Bellevue",
    description: "Fair cash offers for Bellevue homes in any condition. Close fast.",
    url: "/washington/bellevue",
    type: "website",
  },
};

export default function BellevuePage() {
  const ldLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SellHouseFast - Bellevue",
    "description": "We buy houses for cash in Bellevue, WA. Fast, fair, and hassle-free home sales.",
    "url": "https://www.sellhousefast.local/washington/bellevue",
    "telephone": "+1-800-555-1234",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bellevue",
      "addressRegion": "WA",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Bellevue"
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "95"
    }
  };

  const ldFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast can I sell my house in Bellevue for cash?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Bellevue homeowners close in 7-14 days. We buy directly with cash, eliminating lender delays and appraisals."
        }
      },
      {
        "@type": "Question", 
        "name": "Do you buy houses in any condition in Bellevue?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we buy Bellevue homes in any condition - no repairs needed. We purchase all property types throughout Bellevue."
        }
      }
    ]
  };

  const ldBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.sellhousefast.local"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "Washington",
        "item": "https://www.sellhousefast.local/washington"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Bellevue",
        "item": "https://www.sellhousefast.local/washington/bellevue"
      }
    ]
  };

  return (
    <div className="bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldLocalBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldBreadcrumbs) }} />
      
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Hero state="Bellevue, WA" />
        </div>
      </section>
      
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HowItWorks />
        </div>
      </section>
      
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Benefits state="Bellevue, WA" />
        </div>
      </section>
      
      <section className="bg-slate-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials state="Washington" />
        </div>
      </section>
      
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CompareOptions state="Bellevue, WA" />
        </div>
      </section>
      
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContent state="Washington" />
        </div>
      </section>
      
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceAreas state="Washington" />
        </div>
      </section>
      
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm state="Washington" />
        </div>
      </section>
      
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ state="Bellevue" />
        </div>
      </section>
    </div>
  );
}