
import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const HeroSection: React.FC = () => {
  return <section id="home" className="pt-32 pb-16 px-4 md:pt-40 md:pb-24">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="space-y-6 max-w-2xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agency-dark leading-tight">
              Accelerate Your <span className="text-agency-blue">Instant Games</span> Growth
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              We help Facebook Instant Game developers acquire high-quality users, maximize revenue, and achieve exceptional ROAS through data-driven strategies and platform expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Button size="lg" className="bg-agency-blue hover:bg-agency-blue/90 text-white" onClick={() => document.getElementById('book-call')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Book a Free Strategy Call
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-agency-blue text-agency-blue hover:bg-agency-blue/10"
                onClick={() => window.location.href = 'mailto:growth@instantacquisition.co'}
              >
                <Mail className="mr-2 h-4 w-4" /> Email Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default HeroSection;
