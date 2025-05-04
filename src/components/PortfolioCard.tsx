
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";

interface PortfolioCardProps {
  image: string;
  title: string;
  description: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ image, title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer ${
        isExpanded ? 'scale-105' : ''
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative aspect-[4/3]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-bold text-lg text-agency-dark">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
      </div>
    </Card>
  );
};

export default PortfolioCard;
