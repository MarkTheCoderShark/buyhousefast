"use client";

import { useMemo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialData {
  name: string;
  city: string;
  text: string;
  stars: number;
  situation?: string;
  timeframe?: string;
}

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

  const testimonials = useMemo((): TestimonialData[] => {
    if (state === "California") {
      return [
        { 
          name: "Maria Rodriguez", 
          city: "Los Angeles, CA", 
          text: "After my husband passed, I inherited his property in a rough neighborhood. The house needed $40k+ in repairs and I couldn't afford it. SellHouseFast gave me a fair cash offer and closed in 8 days. They handled everything - I didn't have to deal with contractors, showings, or months of uncertainty.", 
          stars: 5,
          situation: "Inherited Property",
          timeframe: "8 days"
        },
        { 
          name: "David Chen", 
          city: "San Jose, CA", 
          text: "I got transferred to Austin for work and had 3 weeks to move. Listed with an agent first but no serious offers after 2 weeks. Called SellHouseFast on a Friday, had an offer by Monday, and closed before my moving date. The price was actually better than what we would've netted after agent fees and carrying costs.", 
          stars: 5,
          situation: "Job Relocation",
          timeframe: "12 days"
        },
        { 
          name: "Jennifer Williams", 
          city: "San Diego, CA", 
          text: "Our rental property became a nightmare with problem tenants who stopped paying and trashed the place. Eviction would take months and cost thousands more. SellHouseFast bought it tenant-occupied and handled the whole situation. Finally got out of the landlord business and can sleep at night again.", 
          stars: 5,
          situation: "Problem Rental",
          timeframe: "14 days"
        },
        { 
          name: "Robert & Linda Park", 
          city: "Sacramento, CA", 
          text: "We fell behind on mortgage payments after Linda's cancer diagnosis. The bank started foreclosure proceedings and we were panicking. SellHouseFast moved fast, paid off our loan, and we walked away with enough cash to get back on our feet. They treated us with dignity during the worst time of our lives.", 
          stars: 5,
          situation: "Pre-Foreclosure",
          timeframe: "7 days"
        },
        { 
          name: "Amanda Torres", 
          city: "Oakland, CA", 
          text: "Divorce was messy and we just wanted to split the house proceeds quickly. Neither of us wanted to deal with repairs, staging, or showings. SellHouseFast made it simple - one fair offer, quick close, clean split. Helped us both move on faster.", 
          stars: 5,
          situation: "Divorce",
          timeframe: "10 days"
        },
        { 
          name: "Mike Thompson", 
          city: "Fresno, CA", 
          text: "Bought a flip house that turned into a money pit. Foundation issues, electrical problems, permit violations - I was in over my head. SellHouseFast bought it knowing all the problems and gave me enough to pay off my hard money loan. Saved me from bankruptcy.", 
          stars: 5,
          situation: "Failed Flip",
          timeframe: "6 days"
        }
      ];
    }
    return [
      { 
        name: "Kevin Martinez", 
        city: "Seattle, WA", 
        text: "I inherited my grandmother's house but lived in Portland. The property needed major work and I couldn't manage repairs from a distance. SellHouseFast gave me a fair cash offer and handled everything remotely. No stress, no trips back and forth.", 
        stars: 5,
        situation: "Inherited Property",
        timeframe: "11 days"
      },
      { 
        name: "Sarah Johnson", 
        city: "Tacoma, WA", 
        text: "Military relocation meant we had 30 days to sell and move across country. Traditional listing wasn't realistic with our timeline. SellHouseFast closed in 2 weeks and we got to focus on our family instead of house showings.", 
        stars: 5,
        situation: "Military Move",
        timeframe: "14 days"
      },
      { 
        name: "Jordan Kim", 
        city: "Spokane, WA", 
        text: "Divorce was dragging on and we needed to liquidate assets. The house was our biggest asset but neither of us wanted to deal with repairs or realtor commissions. SellHouseFast made it simple and fast so we could both move forward.", 
        stars: 5,
        situation: "Divorce",
        timeframe: "9 days"
      },
    ];
  }, [state]);

  const getInitials = (name: string) => name.split(" ").map((p) => p[0]).join("").toUpperCase();

  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-0" />
      
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">{headline}</h2>
        <p className="text-white/80 mt-2">{subheadline || `Real stories from ${state} homeowners.`}</p>
      </div>

      <div className="relative z-10">
        <Carousel className="py-6" opts={{ align: "start", loop: true, skipSnaps: false, dragFree: true }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((t, idx) => (
              <CarouselItem key={idx} className="pl-2 md:basis-1/2 lg:basis-1/2 xl:basis-1/3 md:pl-4">
                <Card className="h-full border bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="h-12 w-12 border-2 border-primary/20">
                        <AvatarImage src={`https://avatar.vercel.sh/${t.name.replace(/\s+/g, '')}.png`} alt={t.name} />
                        <AvatarFallback className="text-sm font-semibold">{getInitials(t.name)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
                        <p className="text-xs text-slate-600">{t.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex" aria-label={`${t.stars} star rating`}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={16} className={cn("fill-current", i < t.stars ? "text-amber-400" : "text-slate-300")} />
                        ))}
                      </div>
                      {t.situation && (
                        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                          {t.situation}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 pt-0">
                    <p className="text-sm text-slate-700 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                    {t.timeframe && (
                      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                        <span className="text-xs text-slate-500">Closed in:</span>
                        <span className="text-xs font-semibold text-green-600">{t.timeframe}</span>
                      </div>
                    )}
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