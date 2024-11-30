import React from 'react';
import { specialityData } from '../../assets/assets_frontend/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div className="py-10 px-4" id='speciality'>
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-700">Find by Speciality</h1>
        <p className="text-gray-600 mt-2">
          Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
        </p>
      </div>

      {/* Speciality Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {specialityData.map((speciality, index) => (
          <Link
          onClick={()=>scrollTo(0,0)}
          to={`/doctors/${speciality.speciality}`}
            key={index}
            className="border border-gray-200 rounded-lg py-5 w-36 hover:shadow-lg transition-all hover:-translate-y-2"
          >
            <img
              className="w-24 h-24 mx-auto object-cover mb-4"
              src={speciality.image}
              alt={speciality.speciality}
            />
            <p className="text-center text-sm text-gray-800 font-semibold md:text-sm">{speciality.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
