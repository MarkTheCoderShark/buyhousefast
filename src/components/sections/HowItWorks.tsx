import { ClipboardList, Handshake, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowItWorks() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Submit Property Info",
      desc: "Tell us about your home and situation in minutes.",
    },
    {
      icon: Handshake,
      title: "Receive a Fair Cash Offer",
      desc: "We review quickly and present a no-obligation cash offer.",
    },
    {
      icon: Home,
      title: "Close Fast, No Repairs Needed",
      desc: "Pick your closing date. We handle the details.",
    },
  ];

  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-4 pt-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold">How It Works</h2>
        <p className="text-muted-foreground mt-2">Three simple steps to sell your home fast.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <Card key={s.title}>
            <CardHeader>
              <s.icon className="size-8 text-primary" />
              <CardTitle className="mt-2">{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{s.desc}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
} 