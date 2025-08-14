"use client";

import { useMemo, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  state: string;
  headline?: string;
  subheadline?: string;
}

export default function Testimonials({ 
  state, 
  headline = "What Sellers Say", 
  subheadline 
}: TestimonialProps) {
  const [api, setApi] = useState<any>(null);

  const testimonials = useMemo(() => {
    if (state === "California") {
      return [
        { name: "Ana G.", city: "Los Angeles", text: "They closed in 9 days. I didn't lift a finger for repairs.", stars: 5 },
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

  const getInitials = (name: string) => name.split(" ").map((p) => p[0]).join("").toUpperCase();

  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-0" />
      
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold">{headline}</h2>
        <p className="text-muted-foreground mt-2">{subheadline || `Real stories from ${state} homeowners.`}</p>
      </div>

      <div className="relative z-10">
        <Carousel setApi={setApi} className="py-6" opts={{ align: "start", loop: testimonials.length > 3 }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((t, idx) => (
              <CarouselItem key={idx} className="pl-2 md:basis-1/2 lg:basis-1/3 md:pl-4">
                <Card className="h-full border bg-card/50 backdrop-blur-sm hover:shadow-md transition-shadow duration-200">
                  <CardHeader className="pb-2 flex flex-row items-center gap-3">
                    <Avatar className="h-10 w-10 border-2 border-primary/10">
                      <AvatarImage src={`https://avatar.vercel.sh/${t.name.replace(' ', '')}.png`} alt={t.name} />
                      <AvatarFallback>{getInitials(t.name)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-base font-medium">{t.name}</h3>
                      <p className="text-xs text-muted-foreground">{t.city}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex" aria-label={`${t.stars} star rating`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={16} className={cn("fill-current", i < t.stars ? "text-amber-400" : "text-muted stroke-muted fill-muted")} />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">"{t.text}"</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-2">
            <CarouselPrevious className="relative static transform-none mx-1" />
            <CarouselNext className="relative static transform-none mx-1" />
          </div>
        </Carousel>
      </div>
    </section>
  );
} 