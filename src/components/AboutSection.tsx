
import React from 'react';
import StatCard from './StatCard';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection: React.FC = () => {
  const stats = [
    { value: "500M+", label: "Total Installs Generated" },
    { value: "$8.5M+", label: "Revenue Generated" },
    { value: "350%", label: "Average ROAS" },
    { value: "23+", label: "Game Publishers Helped" }
  ];

  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-agency-dark mb-6">About Our Expertise</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                With over a decade of experience in mobile gaming and user acquisition, our team specializes exclusively in the Facebook Instant Games ecosystem. We understand the unique challenges and opportunities this platform presents.
              </p>
              <p>
                Our data-driven approach combines deep platform knowledge with cutting-edge analytics to optimize every aspect of your user acquisition funnel, from creative strategy to audience targeting.
              </p>
              <p>
                We've worked with developers of all sizes, from indie studios to major publishers, helping them navigate the complexities of the Instant Games market and achieve sustainable growth.
              </p>
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <StatCard 
                  key={index}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-agency-dark mb-8 text-center">Games & Companies We've Worked With</h3>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            {/* Replace with your actual client logos */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-400 font-bold">LOGO {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
