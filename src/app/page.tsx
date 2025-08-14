import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";
import CompareOptions from "@/components/sections/CompareOptions";
import Testimonials from "@/components/sections/Testimonials";
import SEOContentGlobal from "@/components/sections/SEOContentGlobal";
import ServiceAreasGlobal from "@/components/sections/ServiceAreasGlobal";
import LeadFormSwitcher from "@/components/sections/LeadFormSwitcher";
import FAQGlobal from "@/components/sections/FAQGlobal";

export default function Home() {
  return (
    <div className="">
      <Hero state="California & Washington" />
      <HowItWorks />
      <Benefits state="Your Area" />
      <CompareOptions state="Your Area" />

      <Testimonials state="California" headline="What California Sellers Say" />
      <Testimonials state="Washington" headline="What Washington Sellers Say" />

      <SEOContentGlobal />
      <ServiceAreasGlobal />

      <FAQGlobal />
      <LeadFormSwitcher />
    </div>
  );
}
