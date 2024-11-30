import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Contact = () => {
  return (
    <div className="w-full px-4 py-10 mt-5">
      {/* Main Heading */}
      <h1 className='text-3xl md:text-4xl font-bold uppercase text-center mb-10'>
        Contact <span className='text-orange-600'>Us</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left side - Image */}
        <div className="flex justify-center">
          <img
            src={assets.contact_image}
            alt="Contact"
            className="w-full h-auto max-w-sm rounded-lg shadow-lg"
          />
        </div>

        {/* Right side - Contact Info */}
        <div className='flex flex-col gap-5 text-left font-[Outfit]'>
          <h2 className='text-2xl font-semibold  text-gray-800 mb-4'>
            OUR OFFICE
          </h2>
          <div className="text-gray-700">
            <p>00000 Willms Station</p>
            <p>Suite 000, Washington, USA</p>
          </div>

          <div className="text-gray-700 mt-4">
            <p><strong>Tel:</strong> (000) 000-0000</p>
            <p><strong>Email:</strong> greatstackdev@gmail.com</p>
          </div>

          <h2 className='text-2xl font-semibold text-gray-800 mt-8'>
            CAREERS AT PRESCRIPTO
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Learn more about our teams and job openings.
          </p>
          
          <button className='px-5 py-3 bg-orange-600 text-white rounded-lg w-fit mt-4 hover:bg-orange-700 transition-all'>
            EXPLORE MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
