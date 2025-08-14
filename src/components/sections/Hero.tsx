import { Button } from "@/components/ui/button";
import { Star, Award, Clock, DollarSign, Home, BadgeCheck } from "lucide-react";
import HeroLeadCard from "@/components/sections/HeroLeadCard";
import { Badge } from "@/components/ui/badge";

export default function Hero({ state }: { state: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/60 pt-2 md:pt-4">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background/5 to-transparent"></div>
      
      <div className="mx-auto max-w-6xl px-4">
        {/* Announcement banner */}
        <div className="mb-8 flex justify-center">
          <Badge variant="outline" className="px-4 py-1.5 text-sm border-primary/30 bg-primary/5 text-primary">
            <Clock className="mr-1 h-3.5 w-3.5" /> Limited Time Offer: Get a Cash Offer Within 24 Hours
          </Badge>
        </div>
        
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 items-start">
          <div className="space-y-8">
            {/* Primary headline - more compelling and addressing pain points */}
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
                Get Cash for Your {state} House in 7 Days — No Repairs Needed
              </h1>
              
              <h2 className="text-lg md:text-xl text-muted-foreground max-w-prose">
                Facing foreclosure, inherited property, or need to relocate quickly? We buy houses in {state} in any condition and close on your timeline.
              </h2>
            </div>
            
            {/* Primary CTA section with stronger call to action */}
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <a href="#lead-form">
                <Button size="lg" className="w-full sm:w-auto h-12 px-8 rounded-full shadow-md hover:shadow-lg transition-all bg-primary hover:bg-primary/90">
                  Get Your Cash Offer Now
                </Button>
              </a>
              <a href="#how-it-works" className="text-sm underline underline-offset-4 text-center sm:text-left hover:text-primary transition-colors">
                See how it works
              </a>
            </div>
            
            {/* Key benefits with improved icons and messaging */}
            <div className="p-4 bg-card/50 border border-border/50 rounded-lg">
              <h3 className="text-base font-medium mb-3">Why Homeowners Choose Us:</h3>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary">
                    <DollarSign className="h-4 w-4" />
                  </div>
                  <span>No fees, commissions, or closing costs</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary">
                    <Clock className="h-4 w-4" />
                  </div>
                  <span>Close in as little as 7 days or on your timeline</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary">
                    <Home className="h-4 w-4" />
                  </div>
                  <span>Buy houses in any condition — no repairs needed</span>
                </li>
              </ul>
            </div>
            
            {/* Enhanced trust signals section */}
            <div className="pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground mb-3">Trusted by homeowners across {state}</p>
              <div className="flex flex-wrap gap-5 items-center">
                <div className="flex items-center gap-2 bg-card/50 px-3 py-1.5 rounded-md">
                  <Award className="h-5 w-5 text-primary" />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">BBB Accredited</span>
                    <span className="text-xs text-muted-foreground">A+ Rating</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-card/50 px-3 py-1.5 rounded-md">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">4.9/5 (120+ Reviews)</span>
                    <span className="text-xs text-muted-foreground">Google & Trustpilot</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-card/50 px-3 py-1.5 rounded-md">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Local {state} Experts</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Lead form with visual emphasis */}
          <div className="lg:mt-4 relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-xl blur-sm"></div>
            <div className="relative bg-card rounded-lg shadow-lg border border-border/50 overflow-hidden">
              <div className="bg-primary/10 p-4 border-b border-border/50">
                <h3 className="text-lg font-semibold text-center">Get Your No-Obligation Cash Offer</h3>
              </div>
              <div className="p-4">
                <HeroLeadCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 