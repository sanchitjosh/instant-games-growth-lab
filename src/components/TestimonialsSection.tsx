
import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Their understanding of the Instant Games platform is unmatched. They helped us increase our daily active users by 200% while maintaining our acquisition costs.",
      author: "Alex Johnson",
      role: "CEO",
      company: "PuzzlePlay Games"
    },
    {
      quote: "We tried multiple agencies before, but none delivered results like this team. Our ROAS increased from 150% to over 400% within just two months.",
      author: "Sarah Chen",
      role: "Marketing Director",
      company: "GameStudio X"
    },
    {
      quote: "Not only did they help us acquire users, but they also provided valuable insights that helped us improve our game's retention mechanics.",
      author: "Michael Rodriguez",
      role: "Product Manager",
      company: "FunGames Interactive"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agency-dark">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what game developers have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
