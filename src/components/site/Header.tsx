"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={cn("sticky top-3 z-40 w-full", className)}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-full border border-border/30 bg-white backdrop-blur shadow-sm flex items-center justify-between gap-4 px-4 py-1.5">
          <Link 
            href="/" 
            className="font-semibold text-sm md:text-base transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-md"
          >
            SellHouseFast
          </Link>
          
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/california" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-md">California</Link>
            <Link href="/washington" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-md">Washington</Link>
            <a href="#how-it-works" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-md">How It Works</a>
            <a href="#faq" className="hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-md">FAQ</a>
          </nav>
          
          <div className="flex items-center gap-3">
            <a href="tel:8005551234" className="hidden md:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-md">
              <Phone className="h-3.5 w-3.5" />
              <span>(800) 555-1234</span>
            </a>
            
            <a href="#lead-form" className="hidden sm:block">
              <Button size="sm" className="rounded-full px-4 shadow-sm hover:shadow-md transition-shadow focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                Get My Cash Offer
              </Button>
            </a>
            
            <button 
              aria-label="Toggle menu" 
              aria-expanded={isMobileMenuOpen}
              className="md:hidden inline-flex items-center justify-center rounded-full border border-border/40 px-3 py-1.5 text-sm transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1" 
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            >
              Menu
            </button>
          </div>
        </div>
      </div>
      
      <div className={cn("md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border/30 bg-white backdrop-blur", isMobileMenuOpen ? "max-h-64" : "max-h-0 border-t-0")}> 
        <div className="mx-auto max-w-6xl px-4 py-3 grid gap-3">
          <Link href="/california" className="text-sm hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-md px-2 py-1">California</Link>
          <Link href="/washington" className="text-sm hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-md px-2 py-1">Washington</Link>
          <a href="#how-it-works" className="text-sm hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-md px-2 py-1">How It Works</a>
          <a href="#faq" className="text-sm hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-md px-2 py-1">FAQ</a>
          <a href="tel:8005551234" className="text-sm flex items-center gap-1.5 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 rounded-md px-2 py-1">
            <Phone className="h-3.5 w-3.5" />
            <span>(800) 555-1234</span>
          </a>
          <a href="#lead-form" className="pt-2">
            <Button className="w-full rounded-full shadow-sm hover:shadow-md transition-shadow">Get My Cash Offer</Button>
          </a>
        </div>
      </div>
    </header>
  );
} 