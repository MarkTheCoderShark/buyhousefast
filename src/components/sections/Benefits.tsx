import { ShieldCheck, Timer, Wrench, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Benefits({ state }: { state: string }) {
  const items = [
    { icon: Wrench, title: "No Repairs Needed", desc: "Sell as-is. We handle fixes after closing." },
    { icon: Timer, title: "Close in Days", desc: "Pick a date that works for you, often in 7–14 days." },
    { icon: ShieldCheck, title: "Trusted Nationwide", desc: "Transparent process with no hidden fees or commissions." },
    { icon: Building2, title: `Local ${state} Experts`, desc: `We know ${state} markets and make competitive offers.` },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 pt-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold">Why Choose Us</h2>
        <p className="text-muted-foreground mt-2">A fair, fast, and convenient way to sell your home.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((b) => (
          <Card key={b.title}>
            <CardHeader>
              <b.icon className="size-7 text-primary" />
              <CardTitle className="mt-2 text-base">{b.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{b.desc}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
} 