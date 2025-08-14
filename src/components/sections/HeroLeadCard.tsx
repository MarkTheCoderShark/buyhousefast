"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Phone is required"),
  address: z.string().min(4, "Property address is required"),
  state: z.enum(["California", "Washington"]),
});

type Values = z.infer<typeof schema>;

export default function HeroLeadCard({ prefilledState }: { prefilledState?: "California" | "Washington" }) {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<"idle" | "success" | "error">("idle");

  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      state: prefilledState ?? "California",
    },
    mode: "onBlur",
  });

  async function onSubmit(values: Values) {
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
      form.reset({ ...values, name: "", email: "", phone: "", address: "" });
    } catch {
      setResult("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Card className="border bg-card/70 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Get Your Cash Offer</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-3">
            <div className="grid md:grid-cols-2 gap-3">
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
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <FormField name="phone" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input type="tel" inputMode="tel" placeholder="(555) 555-5555" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField name="state" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  {prefilledState ? (
                    <FormControl>
                      <Input readOnly value={field.value} aria-readonly />
                    </FormControl>
                  ) : (
                    <FormControl>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="California">California</SelectItem>
                          <SelectItem value="Washington">Washington</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  )}
                  {!prefilledState && (
                    <FormDescription>Choose your service area.</FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )} />
            </div>
            <FormField name="address" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Property Address</FormLabel>
                <FormControl>
                  <Input placeholder="123 Main St, City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <Button type="submit" disabled={submitting} className="h-11 rounded-full">
              {submitting ? "Submitting..." : `Get My Cash Offer`}
            </Button>
            {result === "success" && (
              <p className="text-xs text-green-600" role="status">Thanks! We’ll reach out shortly.</p>
            )}
            {result === "error" && (
              <p className="text-xs text-destructive" role="status">Something went wrong. Please try again.</p>
            )}
            <p className="text-[11px] text-muted-foreground">Private and secure. No fees or commissions.</p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
} 