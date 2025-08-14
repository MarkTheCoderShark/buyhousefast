"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, Clock, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  address: z.string().min(4, "Property address is required"),
  state: z.enum(["California", "Washington"]),
});

type Values = z.infer<typeof schema>;

export default function HeroLeadCard({ prefilledState }: { prefilledState?: "California" | "Washington" }) {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<"idle" | "success" | "error">("idle");
  const [step, setStep] = useState<1 | 2>(1);

  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      state: prefilledState ?? "California",
    },
    mode: "onChange",
  });

  const watchedFields = {
    name: form.watch("name"),
    email: form.watch("email"),
    address: form.watch("address"),
  };

  const canProceedToStep2 = 
    watchedFields.name.length >= 2 && 
    /^\S+@\S+\.\S+$/.test(watchedFields.email) && 
    watchedFields.address.length >= 4;

  const handleNextStep = () => {
    if (canProceedToStep2) {
      setStep(2);
    } else {
      form.trigger(["name", "email", "address"]);
    }
  };

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
      setStep(1);
    } catch {
      setResult("error");
    } finally {
      setSubmitting(false);
    }
  }

  const trustSignals = [
    { icon: Shield, text: "100% Secure & Confidential" },
    { icon: Clock, text: "Response within 24 hours" },
    { icon: Home, text: "No fees or commissions" }
  ];

  return (
    <Card className="border bg-card/70 backdrop-blur-sm shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Get Your FREE Cash Offer</CardTitle>
        <CardDescription className="text-muted-foreground">
          No obligation, no pressure - just a fair market offer
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            {/* Progress indicator */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium",
                  step === 1 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                )}>
                  1
                </div>
                <span>Basic Info</span>
              </div>
              <div className="flex-1 mx-2 h-1 bg-muted rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: step === 1 ? "50%" : "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium",
                  step === 2 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground"
                )}>
                  2
                </div>
                <span>Details</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
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
                  
                  <FormField name="address" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Address</FormLabel>
                      <FormControl>
                        <Input placeholder="123 Main St, City" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <Button 
                    type="button" 
                    onClick={handleNextStep}
                    className="w-full h-11 rounded-full font-medium"
                  >
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <FormField name="phone" control={form.control} render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" inputMode="tel" placeholder="(555) 555-5555" {...field} />
                      </FormControl>
                      <FormDescription className="text-xs">
                        For faster response (we'll never spam you)
                      </FormDescription>
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
                        <FormDescription className="text-xs">Choose your service area</FormDescription>
                      )}
                      <FormMessage />
                    </FormItem>
                  )} />

                  <div className="flex gap-2">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setStep(1)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button 
                      type="submit" 
                      disabled={submitting} 
                      className="flex-1 h-11 rounded-full font-medium"
                    >
                      {submitting ? (
                        <span className="flex items-center">
                          <motion.div
                            className="mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Processing...
                        </span>
                      ) : (
                        "Get My FREE Cash Offer in 24 Hours"
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {result === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-green-50 border border-green-200 rounded-md flex items-center text-green-700"
                role="status"
              >
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                <p className="text-sm">Thanks! We'll reach out with your offer within 24 hours.</p>
              </motion.div>
            )}
            
            {result === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm"
                role="status"
              >
                Something went wrong. Please try again or call us directly.
              </motion.div>
            )}

            {/* Trust signals */}
            <div className="mt-2 space-y-2">
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center text-xs text-muted-foreground">
                  <signal.icon className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                  <span>{signal.text}</span>
                </div>
              ))}
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
} 