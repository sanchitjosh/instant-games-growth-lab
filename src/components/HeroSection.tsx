
import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-16 px-4 md:pt-40 md:pb-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agency-dark leading-tight">
              Accelerate Your <span className="text-agency-blue">Instant Game</span> Growth
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              We help Facebook Instant Game developers acquire high-quality users, maximize revenue, and achieve exceptional ROAS through data-driven strategies and platform expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-agency-blue hover:bg-agency-blue/90 text-white"
                onClick={() => document.getElementById('book-call')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Free Strategy Call
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-agency-blue text-agency-blue hover:bg-agency-blue/10"
                onClick={() => document.getElementById('video')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 h-4 w-4" /> Watch Intro Video
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -left-8 -top-8 w-64 h-64 bg-agency-blue/10 rounded-full"></div>
              <div className="absolute -right-4 -bottom-4 w-40 h-40 bg-agency-accent/10 rounded-full"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Instant Game Growth" 
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
