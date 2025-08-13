"use client";

import { useMemo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Testimonials({ state }: { state: string }) {
  const testimonials = useMemo(() => {
    if (state === "California") {
      return [
        { name: "Ana G.", city: "Los Angeles", text: "They closed in 9 days. I didn’t lift a finger for repairs.", stars: 5 },
        { name: "Mark R.", city: "San Diego", text: "Fair price and super professional — no surprises.", stars: 5 },
        { name: "Priya S.", city: "San Jose", text: "We needed to relocate fast. The offer and timing were perfect.", stars: 5 },
      ];
    }
    return [
      { name: "Kevin L.", city: "Seattle", text: "I inherited a fixer-upper. They bought it as-is quickly.", stars: 5 },
      { name: "Mia P.", city: "Tacoma", text: "Clear communication and an easy close.", stars: 5 },
      { name: "Jordan W.", city: "Spokane", text: "Best route for selling fast without hassle.", stars: 5 },
    ];
  }, [state]);

  return (
    <section className="mx-auto max-w-6xl px-4 pt-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold">What Sellers Say</h2>
        <p className="text-muted-foreground mt-2">Real stories from {state} homeowners.</p>
      </div>
      <div className="relative">
        <Carousel className="py-6">
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((t, idx) => (
              <CarouselItem key={idx} className="pl-2 md:basis-1/2 lg:basis-1/3 md:pl-4">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-base">{t.name} • {t.city}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <div className="mb-2" aria-label={`${t.stars} star rating`}>
                      {Array.from({ length: t.stars }).map((_, i) => (
                        <span key={i} aria-hidden>⭐</span>
                      ))}
                    </div>
                    <p>“{t.text}”</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
} 