
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, author, role, company, avatarUrl 
}) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
            {avatarUrl ? (
              <img 
                src={avatarUrl} 
                alt={author} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-agency-blue/20 text-agency-blue">
                {author.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <h4 className="font-bold text-agency-dark">{author}</h4>
            <p className="text-sm text-gray-600">{role}, {company}</p>
          </div>
        </div>
        <p className="text-gray-700 italic">"{quote}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
