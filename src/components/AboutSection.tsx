
import React from 'react';
import StatCard from './StatCard';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection: React.FC = () => {
  const stats = [
    { value: "500M+", label: "Impressions" },
    { value: "15M+", label: "Installs" },
    { value: "$1.6M+", label: "Revenue" },
    { value: "571%", label: "Average ROAS" }
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
      </div>
    </section>
  );
};

export default AboutSection;
