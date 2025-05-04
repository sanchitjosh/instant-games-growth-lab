
import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section id="video" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agency-dark">Watch How We Do It</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get an in-depth look at our approach to Instant Game growth and the strategies we use to drive results.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            {/* Replace the src with your actual YouTube embed link */}
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Instant Game Growth Strategy Video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Learn about the Facebook Instant Games ecosystem and how our strategies can help your game succeed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
