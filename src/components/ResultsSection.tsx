
import React from 'react';
import PortfolioCard from './PortfolioCard';

const ResultsSection: React.FC = () => {
  const portfolioItems = [
    {
      image: "/lovable-uploads/7619935c-867a-4556-a191-3ed5fba55e96.png",
      title: "Revenue Growth Strategy",
      description: "Achieved $717,353 estimated revenue for a client's game over a 6-month campaign with multiple revenue peaks exceeding $28,000 in a single day."
    },
    {
      image: "/lovable-uploads/c13e7471-509c-45a6-a7cc-cbaa2ea84d96.png",
      title: "Global Monetization Strategy",
      description: "Implemented country-specific targeting resulting in over $313,000 in revenue with impressive impression rates across major markets like India, United States, and Brazil."
    },
    {
      image: "/lovable-uploads/65d497d4-7c7a-4e49-bfa5-084d81834b21.png",
      title: "Ad Spend Optimization",
      description: "Managed ₹25,035,682 in total ad spend across multiple countries with an average CTR of 2.14% and over 8 million link clicks."
    },
    {
      image: "/lovable-uploads/55b2cad5-906f-4403-a682-499edada2965.png",
      title: "Performance Metrics Improvement",
      description: "Increased CTR by 9.91% while optimizing eCPM to $3.96, creating balanced performance between impressions and revenue generation."
    },
    {
      image: "/lovable-uploads/579b7672-886c-4d66-a6f0-c088d194e6e7.png",
      title: "Multi-Country Campaign Management",
      description: "Successfully managed 17 concurrent campaigns across global markets, generating over 9.8 million impressions and nearly $16,000 in total spend with optimal cost efficiency."
    },
    {
      image: "/lovable-uploads/2754ae64-d758-49a3-9d3e-01d97bf49d76.png",
      title: "Geographic Performance Analysis",
      description: "Achieved exceptional performance in Brazil with 783.97% revenue growth and 704.33% increase in clicks, while maintaining strong metrics across 10+ countries."
    }
  ];

  return (
    <section id="results" className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agency-dark">Our Results</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We've helped dozens of Instant Game developers achieve remarkable growth. 
            Here are some of our recent success stories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
