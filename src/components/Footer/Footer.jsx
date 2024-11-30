import React from 'react';
import { assets } from '../../assets/assets_frontend/assets';

const Footer = () => {
  return (
    <div className="w-full text-gray-700 py-10 px-5 mt-20">
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Left column: Logo and description */}
        <div>
          <img src={assets.logo} alt="Logo" className="w-24 mb-4" />
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis dignissimos perspiciatis laboriosam veniam perferendis. 
            Illum alias officia perferendis aspernatur, consequatur voluptatibus nemo excepturi corrupti dicta dolores possimus!
          </p>
        </div>

        {/* Middle column: Company links */}
        <div>
          <h1 className="font-semibold mb-4">Company</h1>
          <ul className="space-y-2">
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>About Us</li>
            <li className='cursor-pointer'>Delivery</li>
            <li className='cursor-pointer'>Privacy Policy</li>
          </ul>
        </div>

        {/* Right column: Contact info */}
        <div>
          <h1 className="font-semibold mb-4">Get In Touch</h1>
          <ul className="space-y-2">
            <li>+0-000-000-000</li>
            <li>mohammadkhizarhamza.45@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom row: Copyright */}
      <div className="mt-20 text-center text-lg ">
        &copy; 2024 Khizar-Yaldaram - All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
