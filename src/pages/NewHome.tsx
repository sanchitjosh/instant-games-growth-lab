
import React from 'react';
import { Link } from 'react-router-dom';

const NewHome: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          Welcome to Our Platform
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Your gateway to powerful digital solutions and growth strategies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            to="/facebookInstant"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            Facebook Instant Growth Hub
          </Link>
          
          <div className="text-gray-500">More services coming soon...</div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Growth Marketing</h3>
            <p className="text-gray-600">Accelerate your business growth with proven strategies</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Digital Solutions</h3>
            <p className="text-gray-600">Custom solutions tailored to your business needs</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
            <p className="text-gray-600">24/7 support from our team of specialists</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
