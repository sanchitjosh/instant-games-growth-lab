
import React from 'react';

const Footer: React.FC = () => {
  const handleEmailClick = () => {
    const email = 'growth@instantacquisition.co';
    
    // Use window.location.href for better compatibility
    window.location.href = `mailto:${email}`;
  };

  return (
    <footer className="bg-agency-dark text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-xl font-bold mb-2">Instant <span className="text-agency-blue">Acquisition</span></h2>
            <p className="text-gray-300 text-sm max-w-md">
              Specialized user acquisition agency for Facebook Instant Games. 
              Helping developers reach more players and increase revenue.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#results" className="text-gray-300 hover:text-white transition-colors">Results</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#video" className="text-gray-300 hover:text-white transition-colors">Watch Demo</a>
            </div>
            
            <button 
              className="text-gray-300 hover:text-white transition-colors cursor-pointer"
              onClick={handleEmailClick}
            >
              Email: growth@instantacquisition.co
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Instant Acquisition Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
