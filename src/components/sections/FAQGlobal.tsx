import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQGlobal() {
  const items = [
    {
      q: "How fast can I sell my house for cash?",
      a: "Most sellers close in 7–14 days. Because we buy directly with cash, there are no lender delays, appraisals, or showings—so your timeline is faster and more predictable.",
    },
    {
      q: "Do I need to make repairs or clean before selling?",
      a: "No. We buy houses as‑is. Skip repairs, cleaning, staging, and open houses. You can leave items you don’t want—our team handles the rest after closing.",
    },
    {
      q: "Are there fees, commissions, or obligation?",
      a: "There are no agent commissions and no hidden fees. Our fair cash offer is no‑obligation: review it, ask questions, and choose what works best for you.",
    },
    {
      q: "How do you make a fair cash offer?",
      a: "We analyze recent comparable sales, property condition, and local market trends. Then we present a transparent cash offer that reflects your home’s as‑is value and your preferred timeline.",
    },
    {
      q: "Can you help if I’m facing foreclosure or behind on payments?",
      a: "Yes. Selling quickly for cash can help you avoid foreclosure, late fees, and further credit damage. We coordinate a fast close and clear communication with your lender when needed.",
    },
    {
      q: "What types of properties do you buy?",
      a: "Single‑family homes, townhomes, condos, multi‑family, inherited properties, and houses needing major repairs. If you need to sell a house fast, we likely buy it.",
    },
    {
      q: "What’s the process to get started?",
      a: "Tell us about your property, receive a no‑obligation cash offer within 24 hours, and pick your closing date. It’s simple, private, and on your schedule.",
    },
  ];

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 pt-20">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Frequently Asked Questions</h2>
        <p className="text-muted-foreground mt-2">Answers about selling your house fast for cash—no repairs, no fees, on your timeline.</p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {items.map((it, i) => (
          <AccordionItem key={i} value={`g-item-${i}`}>
            <AccordionTrigger>{it.q}</AccordionTrigger>
            <AccordionContent>{it.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
} 