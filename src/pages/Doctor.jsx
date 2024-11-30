import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { doctors } from '../assets/assets_frontend/assets';

const Doctor = () => {
  // const {speciality} = useParams()
  // console.log(speciality);
  
    const [FilteredDoctors, setFilterDoctors] = useState(doctors)
    const [list, setList] = useState(false);
    const openList = () =>{
      setList(!list);
    }
    const filteringData = (department ) =>{
        const filter = doctors.filter((doctor)=> doctor.speciality == department)
        setFilterDoctors(filter);
    }
  return (
    <div className="p-6">
      <p className="text-left text-sm font-semibold mb-6">Browse through the doctors specialists</p>
      
      <div className="w-full flex flex-wrap gap-0">
        {/* 1st div - Specialties List */}
        <div className="w-full mb-5 md:w-1/3 text-left mt-10">
          <div>
            <button className='block border border-gray-400 px-10 py-1 rounded-lg md:hidden' onClick={openList}>Filter</button>
            <ul className={`${list ? 'block mt-5' : 'hidden'} space-y-4 text-gray-700 font-medium md:block`}>
            <li className="hover:text-blue-500 cursor-pointer border border-gray-400 w-[70%] p-1 rounded-md" onClick={() => filteringData('General physician')}>General Physician</li>
            <li className="hover:text-blue-500 cursor-pointer border border-gray-400 w-[70%] p-1 rounded-md" onClick={() => filteringData('Gynecologist')}>Gynecologist</li>
            <li className="hover:text-blue-500 cursor-pointer border border-gray-400 w-[70%] p-1 rounded-md" onClick={() => filteringData('Dermatologist')}>Dermatologist</li>
            <li className="hover:text-blue-500 cursor-pointer border border-gray-400 w-[70%] p-1 rounded-md" onClick={() => filteringData('Pediatricians')}>Pediatricians</li>
            <li className="hover:text-blue-500 cursor-pointer border border-gray-400 w-[70%] p-1 rounded-md" onClick={() => filteringData('Neurologist')}>Neurologist</li>
            <li className="hover:text-blue-500 cursor-pointer border border-gray-400 w-[70%] p-1 rounded-md" onClick={() => filteringData('Gastroenterologist')}>Gastroenterologist</li>
          </ul>
          
          </div>
        </div>

        {/* 2nd div - Doctors List */}
        <div className="w-full md:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {FilteredDoctors.map((doctor, index) => {
            return (
              <Link
              to={`/appointment/${doctor._id}`}
              key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition-all">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full bg-blue-200" 
                />
                <div className="p-4 text-left">
                  <p className='text-green-500'><span className='w-2 h-2 inline-block rounded-full bg-green-400 mr-2'></span>Available</p>
                  <h3 className="text-lg font-bold text-gray-800">{doctor.name}</h3>
                  <p className="text-gray-600 text-sm">{doctor.speciality}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Doctor;
