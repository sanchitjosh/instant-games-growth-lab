
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ResultsSection from '@/components/ResultsSection';
import VideoSection from '@/components/VideoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BookCallSection from '@/components/BookCallSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ResultsSection />
        <VideoSection />
        <TestimonialsSection />
        <BookCallSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
