
import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-agency-dark mb-4">Video Demo</h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border">
            <p className="text-lg text-gray-600 mb-4">
              Our video demo is currently being updated with the latest case studies and strategies.
            </p>
            <p className="text-gray-500">
              Check back soon for fresh insights into our Instant Game growth approach!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
