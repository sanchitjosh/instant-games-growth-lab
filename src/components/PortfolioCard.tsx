
import React from 'react';
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { X } from "lucide-react";

interface PortfolioCardProps {
  image: string;
  title: string;
  description: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ image, title, description }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Card 
        className="overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer h-full flex flex-col"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative w-full" style={{ paddingTop: '75%' }}>
          <img 
            src={image} 
            alt={title} 
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
        <div className="p-4 space-y-2 flex-grow">
          <h3 className="font-bold text-lg text-agency-dark">{title}</h3>
          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        </div>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-xl">{title}</DialogTitle>
          </DialogHeader>
          <div className="relative w-full" style={{ paddingTop: '65%' }}>
            <img 
              src={image} 
              alt={title} 
              className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
            />
          </div>
          <p className="text-gray-700 mt-4">{description}</p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PortfolioCard;
