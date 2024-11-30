import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    profilePic: assets.profile_pic,
    address: {
      line1: '123 Main St',
      line2: 'Anytown, USA',
      city: 'Anytown',
      state: 'CA',
      zip: '12345'
    },
    gender: 'Male',
    dob: '1998-01-29'
  });

  return (
    <div className="max-w-screen-md mx-auto p-4">
      {/* Profile Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-4">
          {!isEdit ? (
            <img
              src={userProfile.profilePic}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover mr-4"
            />
          ) : (
            <input type="file" className="w-full p-2 border border-gray-300 rounded-lg" />
          )}
          <h1 className="text-2xl font-bold">
            {!isEdit ? userProfile.name : <input type="text" onChange={(e)=>setUserProfile({...userProfile,name:e.target.value})} value={userProfile.name} className="p-2 border border-gray-300 rounded-lg w-full" />}
          </h1>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p>Email:</p>
          {!isEdit ? (
            <p className="mb-4">{userProfile.email}</p>
          ) : (
            <input type="email"
            onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
            className="w-full p-2 border border-gray-300 rounded-lg mb-4" />
          )}

          <p>Phone Number:</p>
          {!isEdit ? (
            <p className="mb-4">{userProfile.phone}</p>
          ) : (
            <input type="text" 
            onChange={(e)=>setUserProfile({...userProfile, phone:e.target.value})}
            value={userProfile.phone}
            className="w-full p-2 border border-gray-300 rounded-lg mb-4" />
          )}

          <p>Address:</p>
          {!isEdit ? (
            <p className="mb-4">
              {userProfile.address.line1}, {userProfile.address.line2}, {userProfile.address.city}, {userProfile.address.state}, {userProfile.address.zip}
            </p>
          ) : (
            <input type="text"
            onChange={(e)=> setUserProfile({...userProfile, address: e.target.value})}
            value={userProfile.address}
            className="w-full p-2 border border-gray-300 rounded-lg mb-4" />
          )}
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h2 className="text-xl font-semibold mb-2">Basic Information</h2>
          <p>Gender:</p>
          {!isEdit ? (
            <p className="mb-4">{userProfile.gender}</p>
          ) : (
            <select
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              value={userProfile.gender}
              onChange={(e) => setUserProfile({ ...userProfile, gender: e.target.value })}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          )}

          <p>Birthday:</p>
          {!isEdit ? (
            <p>{userProfile.dob}</p>
          ) : (
            <input type="date" className="w-full p-2 border border-gray-300 rounded-lg" />
          )}
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-end mt-4">
        {isEdit ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
            onClick={() => setIsEdit(false)}
          >
            Save Information
          </button>
        ) : (
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default MyProfile;
