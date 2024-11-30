import React from 'react';
import { assets } from '../../assets/assets_frontend/assets';

const Hero = () => {
  return (
    <div className='w-full h-auto bg-gradient-to-r from-blue-500 to-blue-700 text-white mt-10 rounded-lg grid grid-cols-1 md:grid-cols-2 items-center p-8 md:h-[500px]'>
      {/* Left side div */}
      <div className='md:w-3/4 space-y-6 text-left'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
          Book Appointment <br />
          With Trusted Doctors
        </h1>
        <div className='flex items-center gap-3'>
          <img src={assets.group_profiles} alt="profiles" className='h-14 md:h-16 rounded-full object-cover' />
          <p className='text-sm md:text-base'>
            Simply browse through our extensive list of trusted doctors,<br />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a href='#speciality' className='w-[270px] bg-white text-black hover:scale-105 transition-transform font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full flex justify-between items-center'>
          <span>Book Appointment</span>
          <img src={assets.arrow_icon} alt="icon" className='w-4 md:w-5' />
        </a>
      </div>

      {/* Right side div */}
      <div className='mt-6 md:mt-0 flex justify-center'>
        <img src={assets.header_img} alt="header" className='w-full h-[250px] md:h-[350px] lg:h-[400px] object-cover rounded-lg' />
      </div>
    </div>
  );
};

export default Hero;
