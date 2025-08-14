"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";
import CompareOptions from "@/components/sections/CompareOptions";
import Testimonials from "@/components/sections/Testimonials";
import SEOContentGlobal from "@/components/sections/SEOContentGlobal";
import ServiceAreasGlobal from "@/components/sections/ServiceAreasGlobal";
import LeadFormSwitcher from "@/components/sections/LeadFormSwitcher";
import FAQGlobal from "@/components/sections/FAQGlobal";
import { useId } from "react";

// Grid pattern component for visual texture
function GridPattern({ width, height, x, y, squares, className, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" className={className} {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any, i: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${i}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

// Section divider component with wave pattern
function WaveDivider({ className, inverted = false }: { className?: string, inverted?: boolean }) {
  return (
    <div className={`relative w-full h-16 md:h-24 overflow-hidden ${className}`}>
      <svg 
        className={`absolute w-full h-full ${inverted ? 'rotate-180' : ''}`}
        viewBox="0 0 1440 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M0 0L48 8.33333C96 16.6667 192 33.3333 288 41.6667C384 50 480 50 576 41.6667C672 33.3333 768 16.6667 864 16.6667C960 16.6667 1056 33.3333 1152 41.6667C1248 50 1344 50 1392 50L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V0Z" 
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

// Section wrapper with background pattern
function SectionWrapper({ 
  children, 
  className, 
  pattern = false,
  patternOpacity = 0.03,
  patternSize = 20
}: { 
  children: React.ReactNode, 
  className?: string,
  pattern?: boolean,
  patternOpacity?: number,
  patternSize?: number
}) {
  // Use deterministic pattern squares to avoid hydration mismatch
  const patternSquares = [
    [7, 2],
    [9, 4],
    [8, 1],
    [10, 3],
    [7, 5],
  ];

  return (
    <section className={`relative py-16 md:py-24 overflow-hidden ${className}`}>
      {pattern && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
            <GridPattern
              width={patternSize}
              height={patternSize}
              x="-12"
              y="4"
              squares={patternSquares}
              className={`absolute inset-0 h-full w-full opacity-5 mix-blend-overlay fill-current stroke-current`}
            />
          </div>
        </div>
      )}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <SectionWrapper className="bg-white">
        <Hero state="California & Washington" />
      </SectionWrapper>

      {/* Wave Divider */}
      <WaveDivider className="text-slate-900" />

      {/* How It Works - Dark Background with Pattern */}
      <SectionWrapper 
        className="bg-slate-900 text-white" 
        pattern={true}
        patternOpacity={0.05}
      >
        <div className="max-w-7xl mx-auto">
          <HowItWorks />
        </div>
      </SectionWrapper>

      {/* Wave Divider */}
      <WaveDivider className="text-slate-900" inverted={true} />

      {/* Benefits Section */}
      <SectionWrapper className="bg-white">
        <div className="max-w-7xl mx-auto">
          <Benefits state="Your Area" />
        </div>
      </SectionWrapper>

      {/* Separator */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Separator className="my-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      {/* Compare Options - Gradient Background */}
      <SectionWrapper 
        className="bg-gradient-to-br from-slate-50 to-blue-50" 
        pattern={true}
        patternOpacity={0.02}
      >
        <div className="max-w-7xl mx-auto">
          <Card className="border-none bg-white/50 backdrop-blur-sm shadow-lg">
            <CardContent className="p-0">
              <CompareOptions state="Your Area" />
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Wave Divider */}
      <WaveDivider className="text-slate-800" />

      {/* Testimonials - Dark Background */}
      <SectionWrapper 
        className="bg-slate-800 text-white"
        pattern={true}
        patternOpacity={0.04}
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <Card className="border-none bg-white/5 backdrop-blur-sm shadow-lg">
            <CardContent className="p-6">
              <Testimonials state="California" headline="What California Sellers Say" />
            </CardContent>
          </Card>
          
          <Card className="border-none bg-white/5 backdrop-blur-sm shadow-lg">
            <CardContent className="p-6">
              <Testimonials state="Washington" headline="What Washington Sellers Say" />
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Wave Divider */}
      <WaveDivider className="text-slate-800" inverted={true} />

      {/* SEO Content */}
      <SectionWrapper className="bg-white">
        <div className="max-w-7xl mx-auto">
          <SEOContentGlobal />
        </div>
      </SectionWrapper>

      {/* Separator */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Separator className="my-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      {/* Service Areas - Light Gray Background */}
      <SectionWrapper 
        className="bg-slate-50"
        pattern={true}
        patternOpacity={0.02}
      >
        <div className="max-w-7xl mx-auto">
          <Card className="border-none bg-white/80 backdrop-blur-sm shadow-lg">
            <CardContent className="p-6">
              <ServiceAreasGlobal />
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Separator */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Separator className="my-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      {/* FAQ Section */}
      <SectionWrapper className="bg-white">
        <div className="max-w-7xl mx-auto">
          <FAQGlobal />
        </div>
      </SectionWrapper>

      {/* Wave Divider */}
      <WaveDivider className="text-blue-600" />

      {/* Lead Form - Gradient Background */}
      <SectionWrapper 
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white"
        pattern={true}
        patternOpacity={0.05}
      >
        <div className="max-w-7xl mx-auto">
          <Card className="border-none bg-white/10 backdrop-blur-sm shadow-lg">
            <CardContent className="p-6">
              <LeadFormSwitcher />
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>
    </div>
  );
}
