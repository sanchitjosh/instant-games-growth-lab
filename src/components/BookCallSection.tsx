
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const BookCallSection: React.FC = () => {
  return (
    <section id="book-call" className="py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-agency-dark">Ready to Accelerate Your Growth?</h2>
          <p className="mt-3 text-base text-gray-600 max-w-xl mx-auto">
            Book a free 30-minute strategy call to discuss your game and how we can help you reach your growth goals.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-[4/3] h-[400px] w-full">
                <iframe
                  src="https://calendly.com/wedoacquisition/30min_discover_call"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Schedule a call"
                />
              </div>
            </CardContent>
          </Card>
          <p className="text-sm text-gray-500 mt-3 text-center">
            No obligation. We'll analyze your current strategy and provide actionable insights during the call.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookCallSection;
