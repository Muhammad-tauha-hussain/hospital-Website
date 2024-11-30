import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { assets, doctors } from '../assets/assets_frontend/assets';

const Appointement = () => {
  const navigate = useNavigate();
  const { docId } = useParams();
  const [filteredDoctor, setFilteredDoctor] = useState(null);
  
  useEffect(() => {
    const result = doctors.find((doc) => doc._id === docId);
    setFilteredDoctor(result);
  }, [docId]);

  // Handle the case when filteredDoctor is null (still loading or no doctor found)
  if (!filteredDoctor) {
    return <p className="text-center py-10 text-lg">Loading doctor information...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {/* Doctor Image */}
        <div className='col-span-1 border border-gray-300 rounded-lg p-4'>
          <img 
            src={filteredDoctor.image} 
            alt="Doctor" 
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Doctor Info */}
        <div className='col-span-2 border border-gray-300 rounded-lg p-6 bg-white shadow-lg'>
          <h1 className="text-2xl font-bold text-gray-800">{filteredDoctor.name}</h1>
          <h5 className="text-xl text-gray-600 mt-2">{filteredDoctor.degree} - {filteredDoctor.experience} years of experience</h5>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">About</h3>
            <p className="text-gray-600 mt-2">{filteredDoctor.about}</p>
          </div>

          <div className="mt-6">
            <h1 className="text-xl font-bold text-gray-800">Appointment Fee: <span className="text-green-500">${filteredDoctor.fees}</span></h1>
          </div>

          <button
          onClick={()=> navigate('/login')}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Book Appointment
          </button>
        </div>
      </div>

      {/* Doctor's Schedule */}
      <div className="mt-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Available Time Slots</h1>
        {Object.keys(filteredDoctor.schedule).map((day, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-lg font-semibold text-gray-700">{day}</h2>
            <ul className="list-none ml-6 mt-2">
              {filteredDoctor.schedule[day].map((slot, idx) => (
                <li key={idx} className="text-gray-600">{slot}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>



      {/* related doctors */}
      
    </div>
  );
}

export default Appointement;
