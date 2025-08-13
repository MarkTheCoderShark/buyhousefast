import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero({ state }: { state: string }) {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-5">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Sell Your House Fast in {state}
          </h1>
          <h2 className="text-lg md:text-xl text-muted-foreground">
            Get a fair cash offer for your {state} home in any condition and close fast.
          </h2>
          <div className="flex gap-3">
            <a href="#lead-form"><Button className="h-11 px-6">Get Your {state} Cash Offer</Button></a>
            <a href="#how-it-works" className="text-sm underline underline-offset-4 self-center">See how it works</a>
          </div>
          <ul className="text-sm text-muted-foreground grid gap-2 pt-2">
            <li>• No repairs, fees, or commissions</li>
            <li>• Close on your timeline — as fast as 7 days</li>
            <li>• Trusted, transparent, and local to {state}</li>
          </ul>
        </div>
        <div className="relative aspect-[4/3] md:aspect-[5/4] rounded-xl border bg-card shadow-sm">
          <Image src="/next.svg" alt={`${state} homes`} fill className="object-contain p-8 dark:invert" />
        </div>
      </div>
    </section>
  );
} 