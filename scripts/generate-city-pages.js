const fs = require('fs');
const path = require('path');

const cities = {
  california: [
    { name: 'San Diego', slug: 'san-diego' },
    { name: 'Sacramento', slug: 'sacramento' },
    { name: 'Oakland', slug: 'oakland' },
    { name: 'Fresno', slug: 'fresno' },
    { name: 'Long Beach', slug: 'long-beach' },
    { name: 'Bakersfield', slug: 'bakersfield' }
  ],
  washington: [
    { name: 'Spokane', slug: 'spokane' },
    { name: 'Tacoma', slug: 'tacoma' },
    { name: 'Vancouver', slug: 'vancouver' },
    { name: 'Bellevue', slug: 'bellevue' },
    { name: 'Everett', slug: 'everett' },
    { name: 'Kent', slug: 'kent' },
    { name: 'Yakima', slug: 'yakima' }
  ]
};

const template = (cityName, stateName, stateSlug, citySlug) => `import type { Metadata } from "next";
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
  title: "Sell Your House Fast in ${cityName}, ${stateName === 'California' ? 'CA' : 'WA'} | Cash Offer in 24 Hours",
  description: "We buy houses in ${cityName} for cash. No repairs, no fees. Get a fair, no-obligation cash offer and close in as little as 7 days. Serving all ${cityName} neighborhoods.",
  alternates: { canonical: "/${stateSlug}/${citySlug}" },
  openGraph: {
    title: "Sell Your House Fast in ${cityName}",
    description: "Fair cash offers for ${cityName} homes in any condition. Close fast.",
    url: "/${stateSlug}/${citySlug}",
    type: "website",
  },
};

export default function ${cityName.replace(/\s+/g, '')}Page() {
  const ldLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SellHouseFast - ${cityName}",
    "description": "We buy houses for cash in ${cityName}, ${stateName === 'California' ? 'CA' : 'WA'}. Fast, fair, and hassle-free home sales.",
    "url": "https://www.sellhousefast.local/${stateSlug}/${citySlug}",
    "telephone": "+1-800-555-1234",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "${cityName}",
      "addressRegion": "${stateName === 'California' ? 'CA' : 'WA'}",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "${cityName}"
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
        "name": "How fast can I sell my house in ${cityName} for cash?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most ${cityName} homeowners close in 7-14 days. We buy directly with cash, eliminating lender delays and appraisals."
        }
      },
      {
        "@type": "Question", 
        "name": "Do you buy houses in any condition in ${cityName}?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we buy ${cityName} homes in any condition - no repairs needed. We purchase all property types throughout ${cityName}."
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
        "name": "${stateName}",
        "item": "https://www.sellhousefast.local/${stateSlug}"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "${cityName}",
        "item": "https://www.sellhousefast.local/${stateSlug}/${citySlug}"
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
          <Hero state="${cityName}, ${stateName === 'California' ? 'CA' : 'WA'}" />
        </div>
      </section>
      
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HowItWorks />
        </div>
      </section>
      
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Benefits state="${cityName}, ${stateName === 'California' ? 'CA' : 'WA'}" />
        </div>
      </section>
      
      <section className="bg-slate-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials state="${stateName}" />
        </div>
      </section>
      
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CompareOptions state="${cityName}, ${stateName === 'California' ? 'CA' : 'WA'}" />
        </div>
      </section>
      
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SEOContent state="${stateName}" />
        </div>
      </section>
      
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceAreas state="${stateName}" />
        </div>
      </section>
      
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm state="${stateName}" />
        </div>
      </section>
      
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ state="${cityName}" />
        </div>
      </section>
    </div>
  );
}`;

// Generate city pages
Object.entries(cities).forEach(([stateSlug, cityList]) => {
  cityList.forEach(city => {
    const cityDir = path.join(__dirname, '..', 'src', 'app', '(states)', stateSlug, '(cities)', city.slug);
    const pagePath = path.join(cityDir, 'page.tsx');
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(cityDir)) {
      fs.mkdirSync(cityDir, { recursive: true });
    }
    
    // Generate the page content
    const pageContent = template(
      city.name, 
      stateSlug === 'california' ? 'California' : 'Washington',
      stateSlug,
      city.slug
    );
    
    // Write the file
    fs.writeFileSync(pagePath, pageContent);
    console.log(`Generated: ${pagePath}`);
  });
});

console.log('All city pages generated successfully!'); 