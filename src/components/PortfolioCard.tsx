
import React from 'react';
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose
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
        className="overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
        onClick={() => setIsOpen(true)}
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

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-xl">{title}</DialogTitle>
          </DialogHeader>
          <DialogClose className="absolute right-4 top-4 rounded-full p-2 opacity-70 hover:opacity-100 hover:bg-gray-100">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="relative aspect-[4/3] mt-2">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <p className="text-gray-700 mt-4">{description}</p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PortfolioCard;
