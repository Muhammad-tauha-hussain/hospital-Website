import React from 'react';
import { assets } from '../../assets/assets_frontend/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full'>
      <div className='w-full rounded-lg bg-blue-500 flex flex-col md:flex-row items-center justify-between p-7 text-white'>
        {/* Left side div */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h1 className='text-3xl md:text-4xl font-bold'>
            Book Appointment With 100+ Trusted Doctors
          </h1>
          <button onClick={()=> {navigate('/login'); scrollTo(0,0)}} className='bg-gray-300 text-black px-6 py-2 mt-4 rounded-lg font-semibold hover:bg-gray-400 transition-colors'>
            Create account
          </button>
        </div>

        {/* Right side div */}
        <div className='hidden md:w-1/2 mt-6 md:mt-0 md:block  justify-center'>
          <img
            src={assets.appointment_img}
            alt="Appointment"
            className='w-full md:w-[300px]  rounded-lg '
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
