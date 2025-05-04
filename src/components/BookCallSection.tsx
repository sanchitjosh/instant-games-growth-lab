
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const BookCallSection: React.FC = () => {
  return (
    <section id="book-call" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agency-dark">Ready to Accelerate Your Growth?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Book a free 30-minute strategy call to discuss your game and how we can help you reach your growth goals.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[3/2] h-[600px] w-full">
                {/* Replace with your actual Calendly embed code */}
                <iframe
                  src="https://calendly.com/your-calendly-link"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Schedule a call"
                />
              </div>
            </CardContent>
          </Card>
          <p className="text-sm text-gray-500 mt-4 text-center">
            No obligation. We'll analyze your current strategy and provide actionable insights during the call.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookCallSection;
