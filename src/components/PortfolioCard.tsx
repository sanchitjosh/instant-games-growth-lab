
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
  index: number; // Add index to determine if it's in the first row
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ image, title, description, index }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isFirstRow = index < 3; // First three items are in the first row

  return (
    <>
      <Card 
        className="overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer h-full flex flex-col"
        onClick={() => setIsOpen(true)}
      >
        <div className="relative w-full pb-[60%] bg-white">
          <img 
            src={image} 
            alt={title} 
            className={`absolute top-0 left-0 w-full h-full ${isFirstRow 
              ? "object-contain scale-175 transform-origin-center p-2" // Increase zoom to 175% for first row images
              : "object-contain bg-white" // Keep second row as is
            }`}
          />
        </div>
        <div className="p-4 space-y-2 flex-grow">
          <h3 className="font-bold text-lg text-agency-dark">{title}</h3>
          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        </div>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-4xl w-[95vw] max-h-[95vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">{title}</DialogTitle>
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </DialogHeader>
          <div className="w-full max-h-[80vh] overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto object-contain rounded-md"
            />
          </div>
          <p className="text-gray-700 mt-4">{description}</p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PortfolioCard;
