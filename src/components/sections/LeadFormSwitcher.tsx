"use client";

import { useState } from "react";
import LeadForm from "@/components/sections/LeadForm";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function LeadFormSwitcher() {
  const [state, setState] = useState<"California" | "Washington">("California");

  return (
    <section id="lead-form" className="mx-auto max-w-6xl px-4 pt-20">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Get Your Cash Offer</h2>
        <p className="text-muted-foreground mt-2">Select your state and tell us about your property to receive a fair, no-obligation cash offer.</p>
      </div>
      <div className="flex justify-center mb-6">
        <Select value={state} onValueChange={(v: string) => setState(v as "California" | "Washington")}>
          <SelectTrigger className="min-w-[220px]">
            <SelectValue placeholder="Select a state" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="California">California</SelectItem>
            <SelectItem value="Washington">Washington</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <LeadForm state={state} />
    </section>
  );
} 