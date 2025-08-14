"use client";

import { useState } from "react";
import LeadForm from "@/components/sections/LeadForm";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function LeadFormSwitcher() {
  const [state, setState] = useState<"California" | "Washington">("California");

  return (
    <section id="lead-form" className="mx-auto max-w-6xl px-4 pt-20">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Get Your Cash Offer</h2>
        <p className="text-white/80 mt-2">Select your state and tell us about your property to receive a fair, no-obligation cash offer.</p>
      </div>
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <label className="block text-white/90 text-sm font-medium mb-2 text-center">
            Choose Your State
          </label>
          <Select value={state} onValueChange={(v: string) => setState(v as "California" | "Washington")}>
            <SelectTrigger className="min-w-[280px] h-12 bg-white text-slate-700 border-2 border-blue-200 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 shadow-sm font-medium">
              <SelectValue placeholder="Select your state" />
            </SelectTrigger>
            <SelectContent className="bg-white border-blue-200 shadow-xl">
              <SelectItem value="California" className="text-slate-700 hover:bg-blue-50 focus:bg-blue-50 cursor-pointer py-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌴</span>
                  <span className="font-medium">California</span>
                </div>
              </SelectItem>
              <SelectItem value="Washington" className="text-slate-700 hover:bg-blue-50 focus:bg-blue-50 cursor-pointer py-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏔️</span>
                  <span className="font-medium">Washington</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <LeadForm state={state} />
    </section>
  );
} 