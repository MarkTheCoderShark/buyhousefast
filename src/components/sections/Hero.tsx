import { Button } from "@/components/ui/button";
import { Star, Award, CheckCircle } from "lucide-react";
import HeroLeadCard from "@/components/sections/HeroLeadCard";

export default function Hero({ state }: { state: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/60 pt-8 md:pt-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background/5 to-transparent"></div>
      
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 items-start">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text">
              Sell Your House Fast in {state}
            </h1>
            
            <h2 className="text-lg md:text-xl text-muted-foreground max-w-prose">
              Get a fair cash offer for your {state} home in any condition and close fast.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <a href="#lead-form">
                <Button size="lg" className="w-full sm:w-auto h-12 px-8 rounded-full shadow-md hover:shadow-lg transition-all">
                  Get Your {state} Cash Offer
                </Button>
              </a>
              <a href="#how-it-works" className="text-sm underline underline-offset-4 text-center sm:text-left hover:text-primary transition-colors">
                See how it works
              </a>
            </div>
            
            <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>No repairs, fees, or commissions</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Close on your timeline — as fast as 7 days</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>Trusted, transparent, and local to {state}</span>
              </li>
            </ul>
            
            <div className="pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground mb-3">Trusted by homeowners across {state}</p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-1">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">BBB Accredited</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.9/5 (120+ Reviews)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:mt-4">
            <HeroLeadCard />
          </div>
        </div>
      </div>
    </section>
  );
} 