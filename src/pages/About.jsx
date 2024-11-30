import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const About = () => {
  return (
    <div className='w-full px-4 py-10 mt-5'>
      {/* Main Heading */}
      <h1 className='text-3xl md:text-4xl font-bold uppercase text-center mb-12'>
        About <span className='text-orange-600'>Us</span>
      </h1>

      {/* About Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
        {/* Left side - Image */}
        <div className="flex justify-center">
          <img
            src={assets.about_image}
            alt="About Us"
            className="w-full h-auto max-w-sm rounded-lg shadow-lg"
          />
        </div>

        {/* Right side - Text */}
        <div>
          <p className="text-gray-700 leading-relaxed mb-6 text-justify">
            Welcome to <strong>Prescripto</strong>, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
            <br /><br />
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <h1 className='text-3xl md:text-4xl font-bold uppercase text-center mb-10'>
        WHY <span className='text-orange-600'>CHOOSE US</span>
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* 1st div */}
        <div className='p-20 border border-gray-200 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-lg text-center'>
          <h2 className="text-xl font-bold mb-4">EFFICIENCY</h2>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        {/* 2nd div */}
        <div className='p-20 border border-gray-200 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-lg text-center'>
          <h2 className="text-xl font-bold mb-4">CONVENIENCE</h2>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        {/* 3rd div */}
        <div className='p-20 border border-gray-200 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-lg text-center'>
          <h2 className="text-xl font-bold mb-4">PERSONALIZATION</h2>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
