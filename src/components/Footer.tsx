
import React from 'react';

const Footer: React.FC = () => {
  return <footer className="bg-agency-dark text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Instant <span className="text-agency-blue">Acquisition</span></h2>
            <p className="text-gray-300 max-w-md">
              Specialized user acquisition agency for Facebook Instant Games. 
              Helping developers reach more players and increase revenue.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#results" className="text-gray-300 hover:text-white transition-colors">Results</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#video" className="text-gray-300 hover:text-white transition-colors">Video</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:instantacquisition@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Email: instantacquisition@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Instant Acquisition Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};

export default Footer;
