"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header({ className }: { className?: string }) {
  return (
    <header className={cn("sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur", className)}>
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="font-semibold text-lg">BuyHouseFast</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/california" className="hover:text-foreground">California</Link>
          <Link href="/washington" className="hover:text-foreground">Washington</Link>
          <a href="#how-it-works" className="hover:text-foreground">How It Works</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#lead-form" className="hidden sm:block"><Button size="sm">Get My Cash Offer</Button></a>
          <button className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm" onClick={() => {
            const el = document.getElementById("mobile-menu");
            if (el) el.classList.toggle("hidden");
          }}>Menu</button>
        </div>
      </div>
      <div id="mobile-menu" className="md:hidden hidden border-t">
        <div className="mx-auto max-w-6xl px-4 py-3 grid gap-3">
          <Link href="/california">California</Link>
          <Link href="/washington">Washington</Link>
          <a href="#how-it-works">How It Works</a>
          <a href="#faq">FAQ</a>
          <a href="#lead-form" className="pt-2"><Button className="w-full">Get My Cash Offer</Button></a>
        </div>
      </div>
    </header>
  );
} 