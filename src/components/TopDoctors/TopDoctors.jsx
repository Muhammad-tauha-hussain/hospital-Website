import React from 'react';
import { doctors } from '../../assets/assets_frontend/assets';
import { Navigate, useNavigate } from 'react-router-dom';

const TopDoctors = () => {
  const navigate = useNavigate();

  const handleNavigator = () =>{
    navigate('/doctor');
    scrollTo('/doctor', 0,0);
  }
  return (
    <div className='w-full p-5 md:p-8'>
      {/* Header Section */}
      <div className='text-center mb-6'>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-3'>
          Top Doctors to Book
        </h1>
        <p className='text-gray-600 text-sm md:text-base'>
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      {/* Doctors Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left'>
        {
          doctors.slice(0,10).map((doctor) => {
            return (
              <div 
                onClick={()=> navigate(`appointment/${doctor._id}`)}
                key={doctor._id} 
                className='bg-white shadow-lg rounded-lg py-7 px-5 hover:shadow-2xl transition-shadow duration-300 cursor-pointer'
              >
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className='w-full rounded-t-lg mb-4 bg-[#EAEFFF]'
                />
                <p className='text-green-500 font-semibold'><span className='w-2 h-2 inline-block rounded-full bg-green-400 mr-2'></span>Availible</p>
                <h2 className='text-xl font-semibold text-gray-900'>
                  {doctor.name}
                </h2>
                <p className='text-gray-500'>
                  {doctor.speciality}
                </p>
              </div>
            );
          })
        }
      </div>
        <div>
        <button  onClick={()=> handleNavigator()} className='mt-10 px-9 py-3 border border-gray-400 rounded-3xl bg-green-200 hover:bg-green-400 transition-all '>More</button>
        </div>
    </div>
  );
}

export default TopDoctors;
