
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ResultsSection from '@/components/ResultsSection';
import VideoSection from '@/components/VideoSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BookCallSection from '@/components/BookCallSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <ResultsSection />
        <VideoSection />
        <AboutSection />
        <TestimonialsSection />
        <BookCallSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
