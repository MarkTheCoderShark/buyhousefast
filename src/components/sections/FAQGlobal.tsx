"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, DollarSign, HelpCircle, Home, Phone, Shield, ThumbsUp } from "lucide-react";
import Link from "next/link";

type FAQItem = {
  category: string;
  icon: React.ReactNode;
  question: string;
  answer: React.ReactNode;
};

export default function FAQGlobal() {
  const items: FAQItem[] = [
    {
      category: "Process",
      icon: <Clock className="h-5 w-5" />,
      question: "How fast can I sell my house for cash?",
      answer: (
        <div>
          <p>Most sellers close in <strong className="text-primary">7–14 days</strong>. Because we buy directly with cash, there are:</p>
          <ul className="mt-2 space-y-1 list-disc pl-5">
            <li>No lender delays or financing contingencies</li>
            <li>No appraisal waiting periods</li>
            <li>No showings or open houses</li>
            <li>No back-and-forth negotiations with buyers</li>
          </ul>
          <p className="mt-2 text-muted-foreground italic">Your timeline is completely flexible - you choose your closing date.</p>
        </div>
      ),
    },
    {
      category: "Property Condition",
      icon: <Home className="h-5 w-5" />,
      question: "Do I need to make repairs or clean before selling?",
      answer: (
        <div>
          <p>Absolutely <strong className="text-primary">NO repairs or cleaning needed</strong>. We buy houses as‑is, in any condition:</p>
          <ul className="mt-2 space-y-1 list-disc pl-5">
            <li>Skip costly repairs and renovations</li>
            <li>No cleaning, staging, or preparing for showings</li>
            <li>Leave unwanted items behind - we'll handle disposal</li>
            <li>Even homes with serious structural issues or damage</li>
          </ul>
          <p className="mt-2 text-muted-foreground italic">Many sellers save $15,000+ by avoiding repair costs and cleaning expenses.</p>
        </div>
      ),
    },
    {
      category: "Costs",
      icon: <DollarSign className="h-5 w-5" />,
      question: "Are there fees, commissions, or obligation?",
      answer: (
        <div>
          <p><strong className="text-primary">Zero fees, zero commissions, zero obligation</strong>. Unlike traditional real estate:</p>
          <ul className="mt-2 space-y-1 list-disc pl-5">
            <li>No 5-6% agent commissions ($15,000+ on average homes)</li>
            <li>No closing costs or hidden fees</li>
            <li>No obligation to accept our offer</li>
            <li>No pressure tactics or sales gimmicks</li>
          </ul>
          <div className="mt-3 p-3 bg-muted/50 rounded-md flex items-start gap-2">
            <ThumbsUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm">Our transparent cash offer is what you actually receive at closing - no surprises or deductions.</p>
          </div>
        </div>
      ),
    },
    {
      category: "Pricing",
      icon: <DollarSign className="h-5 w-5" />,
      question: "How do you make a fair cash offer?",
      answer: (
        <div>
          <p>We create a <strong className="text-primary">transparent, fair market offer</strong> based on:</p>
          <ul className="mt-2 space-y-1 list-disc pl-5">
            <li>Recent comparable sales in your neighborhood</li>
            <li>Current property condition and needed repairs</li>
            <li>Local market trends and demand</li>
            <li>Your timeline and specific situation</li>
          </ul>
          <div className="mt-3 p-3 bg-muted/50 rounded-md flex items-start gap-2">
            <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm">While our offer reflects the as-is value and convenience of a quick cash sale, we pride ourselves on making the highest possible offers while still solving your selling challenges.</p>
          </div>
        </div>
      ),
    },
    {
      category: "Urgent Situations",
      icon: <HelpCircle className="h-5 w-5" />,
      question: "Can you help if I'm facing foreclosure or behind on payments?",
      answer: (
        <div>
          <p><strong className="text-primary">Yes, we specialize in urgent situations</strong> and can help with:</p>
          <ul className="mt-2 space-y-1 list-disc pl-5">
            <li>Stopping foreclosure proceedings</li>
            <li>Catching up on missed mortgage payments</li>
            <li>Preventing further credit damage</li>
            <li>Coordinating with your lender directly</li>
          </ul>
          <div className="mt-3 p-3 bg-muted/50 rounded-md flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm">We've helped hundreds of homeowners avoid foreclosure with our quick closing process and direct lender communication.</p>
          </div>
        </div>
      ),
    },
    {
      category: "Property Types",
      icon: <Home className="h-5 w-5" />,
      question: "What types of properties do you buy?",
      answer: (
        <div>
          <p>We purchase <strong className="text-primary">virtually all residential property types</strong>:</p>
          <ul className="mt-2 space-y-1 list-disc pl-5">
            <li>Single‑family homes in any condition</li>
            <li>Multi-family properties (duplexes, triplexes, etc.)</li>
            <li>Townhomes and condos</li>
            <li>Inherited properties and probate situations</li>
            <li>Fire or water damaged homes</li>
            <li>Properties with tenant issues or code violations</li>
          </ul>
          <p className="mt-2 text-muted-foreground italic">If you need to sell a house fast, we likely buy it - even properties other investors avoid.</p>
        </div>
      ),
    },
    {
      category: "Getting Started",
      icon: <CheckCircle className="h-5 w-5" />,
      question: "What's the process to get started?",
      answer: (
        <div>
          <p>Our <strong className="text-primary">simple 3-step process</strong> makes selling fast and stress-free:</p>
          <ol className="mt-2 space-y-2 list-decimal pl-5">
            <li><strong>Request an offer</strong> - Fill out our quick form or call us</li>
            <li><strong>Get your cash offer</strong> - Receive a no-obligation offer within 24 hours</li>
            <li><strong>Close on your schedule</strong> - Pick your closing date and get paid</li>
          </ol>
          <div className="mt-4 flex justify-center">
            <Button size="sm" className="px-6">Get Your Cash Offer Now</Button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="faq" className="mx-auto max-w-5xl px-4 py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="text-muted-foreground mt-3 text-lg">
          Common questions about our cash home buying process
        </p>
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
        <div className="bg-muted/50 p-6 rounded-lg border border-border/60 hidden md:block">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">BBB Accredited</h3>
                <p className="text-sm text-muted-foreground">A+ Rating</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <Home className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">1,000+ Homes</h3>
                <p className="text-sm text-muted-foreground">Purchased Since 2010</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-full">
                <ThumbsUp className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">4.9/5 Stars</h3>
                <p className="text-sm text-muted-foreground">Based on 300+ Reviews</p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-border/60">
              <p className="text-sm font-medium mb-2">Have more questions?</p>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <Link href="tel:555-123-4567" className="text-primary hover:underline">
                  (555) 123-4567
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {items.map((item, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="bg-card rounded-lg border border-border/60 shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="px-5 py-4 hover:no-underline group">
                  <div className="flex items-center gap-3 text-left">
                    <div className="bg-primary/10 p-2 rounded-full hidden sm:flex">
                      {item.icon}
                    </div>
                    <div>
                      <Badge 
                        variant="secondary" 
                        className="mb-1 text-xs font-normal"
                      >
                        {item.category}
                      </Badge>
                      <h3 className="text-base sm:text-lg font-medium group-hover:text-primary">
                        {item.question}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 pt-0 text-base">
                  <div className="pl-0 sm:pl-12">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 p-5 bg-muted/50 rounded-lg border border-border/60 md:hidden">
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">BBB Accredited</h3>
                  <p className="text-sm text-muted-foreground">A+ Rating</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <ThumbsUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">4.9/5 Stars</h3>
                  <p className="text-sm text-muted-foreground">300+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">
          Still have questions? We're here to help!
        </p>
        <Button size="lg" className="mr-3">
          Get Your Cash Offer
        </Button>
        <Button variant="outline" size="lg">
          Call (555) 123-4567
        </Button>
      </div>
    </section>
  );
} 