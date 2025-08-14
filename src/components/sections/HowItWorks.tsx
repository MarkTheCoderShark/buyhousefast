import React from "react";
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
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">How It Works</h2>
        <p className="text-white/80 mt-2">Three simple steps to sell your home fast.</p>
      </div>

      <div className="hidden md:flex items-start justify-between relative">
        <div className="absolute top-10 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-0.5 border-t-2 border-dashed border-border" />

        {steps.map((step, index) => (
          <div key={step.title} className="flex flex-col items-center w-1/3 px-4 relative z-10">
            <div className="mb-6 flex items-center justify-center">
              <div className="rounded-full bg-primary/10 border border-primary/20 p-4 size-20 flex flex-col items-center justify-center">
                <div className="rounded-full bg-primary text-primary-foreground size-8 flex items-center justify-center font-medium mb-1">
                  {index + 1}
                </div>
                <step.icon className="size-6 text-primary" />
              </div>
            </div>
            
            <Card className="w-full shadow-sm bg-white/95 border-white/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-slate-900">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">{step.desc}</CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="md:hidden space-y-8">
        {steps.map((step, index) => (
          <div key={step.title} className="relative">
            {index < steps.length - 1 && (
              <div className="absolute top-16 bottom-0 left-10 w-0.5 border-l-2 border-dashed border-border -z-10" />
            )}
            
            <div className="flex items-start gap-6">
              <div className="shrink-0 rounded-full bg-primary/10 border border-primary/20 p-3 size-20 flex flex-col items-center justify-center">
                <div className="rounded-full bg-primary text-primary-foreground size-7 flex items-center justify-center font-medium mb-1">
                  {index + 1}
                </div>
                <step.icon className="size-5 text-primary" />
              </div>
              
              <Card className="flex-1 shadow-sm bg-white/95 border-white/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-slate-900">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-slate-600">{step.desc}</CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 