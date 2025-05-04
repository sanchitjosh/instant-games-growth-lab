
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

export default VideoSection;
