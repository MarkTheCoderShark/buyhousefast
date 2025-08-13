import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ({ state }: { state: string }) {
  const items = [
    {
      q: `How fast can you buy my ${state} house?`,
      a: "Many sellers close in as little as 7–14 days. We work on your timeline.",
    },
    {
      q: "Do I need to make repairs or clean?",
      a: "No. Sell as-is. We handle repairs and cleanup after closing.",
    },
    {
      q: "Are there fees or commissions?",
      a: "No agent commissions and no hidden fees. The offer is the amount you receive minus standard closing costs.",
    },
    {
      q: "What types of situations do you help with?",
      a: "Relocation, inherited homes, foreclosure, divorce, behind on payments, vacant properties, and more.",
    },
  ];

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 pt-20">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">Frequently Asked Questions</h2>
        <p className="text-muted-foreground mt-2">Answers to common questions about selling for cash in {state}.</p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {items.map((it, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{it.q}</AccordionTrigger>
            <AccordionContent>{it.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
} 