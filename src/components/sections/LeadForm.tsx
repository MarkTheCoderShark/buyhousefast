"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone is required"),
  address: z.string().min(4, "Property address is required"),
  state: z.enum(["California", "Washington"]),
  notes: z.string().optional(),
});

type LeadValues = z.infer<typeof schema>;

export default function LeadForm({ state }: { state: "California" | "Washington" }) {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<LeadValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      state,
      notes: "",
    },
    mode: "onBlur",
  });

  async function onSubmit(values: LeadValues) {
    setSubmitting(true);
    setResult("idle");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setResult("success");
      form.reset({ ...values, name: "", email: "", phone: "", address: "", notes: "" });
    } catch {
      setResult("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="lead-form" className="mx-auto max-w-6xl px-4 pt-20">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Get Your {state} Cash Offer</h2>
          <p className="text-muted-foreground mt-2">Fill out the form and we’ll send a fair, no-obligation cash offer within 24 hours.</p>
          <ul className="text-sm text-muted-foreground grid gap-2 mt-4">
            <li>• Your information is private and secure</li>
            <li>• No fees or commissions</li>
            <li>• Cancel anytime — no obligation</li>
          </ul>
        </div>
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormField name="name" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="email" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" inputMode="email" placeholder="you@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="phone" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" inputMode="tel" placeholder="(555) 555-5555" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="address" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Address</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main St, City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="state" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input readOnly value={field.value} aria-readonly />
                  </FormControl>
                  <FormDescription>State is pre-filled based on this page.</FormDescription>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="notes" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes (optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Timeline, condition, or other details" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <Button type="submit" disabled={submitting} className="h-11">
                {submitting ? "Submitting..." : `Get Your ${state} Cash Offer`}
              </Button>
              {result === "success" && (
                <p className="text-sm text-green-600" role="status">Thanks! We’ll reach out shortly.</p>
              )}
              {result === "error" && (
                <p className="text-sm text-destructive" role="status">Something went wrong. Please try again.</p>
              )}
              <p className="text-xs text-muted-foreground">By submitting, you agree to our Privacy Policy and Terms. We respect your privacy.</p>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
} 