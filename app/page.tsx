'use client'

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import DemoSection from '@/components/DemoSection';
import FAQSection from '@/components/FAQSection';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-background">
          <Navigation />
          
          <main>
            <HeroSection />
            <HowItWorksSection />
            <FeaturesSection />
            <DemoSection />
            <FAQSection />
            <CTABanner />
          </main>
          
          <Footer />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
