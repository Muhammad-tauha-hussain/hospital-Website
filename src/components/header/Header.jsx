import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/assets_admin/admin_logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import poepleIcon from '../../assets/assets_frontend/upload_area.png';
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null); // For outside click detection

    const links = [
        { name: 'Home', path: '/' },
        { name: "All Doctors", path: '/Doctor' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Admin Panel', path: '/admin' },
    ];

    // Toggle menu open state
    const handleMenuToggle = () => {
        setIsMenuOpen(prev => {
            const newState = !prev;
            document.body.style.overflow = newState ? "hidden" : "auto"; // Prevent scroll on mobile menu
            return newState;
        });
    };

    // Toggle dropdown visibility on click
    const handleDropdownToggle = () => {
        setIsDropdownOpen(prev => !prev);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside); // Add touch support for mobile
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    // Reusable Menu Links Component
    const MenuLinks = () => (
        <ul className='flex gap-6'>
            {links.map(link => (
                <li key={link.name}>
                    <NavLink to={link.path}
                        onClick={() => setIsMenuOpen(false)} // Close mobile menu on link click
                        className={({ isActive }) => isActive
                            ? "bg-[#fe956f] text-white px-4 py-2 rounded-3xl font-semibold"
                            : "text-sm font-semibold text-gray-800 hover:text-[#fe956f]"}
                    >
                        {link.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );

    return (
        <header>
            {/* Main Navbar */}
            <div className="relative w-full bg-transparent px-3 border-b border-[#ADADAD] pb-5">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <div className='cursor-pointer' onClick={() => navigate('/home')}>
                        <img src={logo} alt="Logo" className='w-44' />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex">
                        <MenuLinks />
                    </div>

                    {/* Desktop CTA Button */}
                    <div className='hidden lg:flex items-center'>
                        {!isLoggedIn && (
                            <button onClick={() => navigate('/login')} className='border px-5 py-3 bg-blue-500 rounded-3xl text-white'>
                                Create Account
                            </button>
                        )}
                        {isLoggedIn && (
                            <div className='rounded-full flex gap-1 cursor-pointer relative'
                                onClick={handleDropdownToggle} ref={dropdownRef}
                                aria-expanded={isDropdownOpen} aria-haspopup="true" aria-controls="dropdown-menu" // Accessibility
                            >
                                <img src={poepleIcon} className='w-[32px] rounded-full' alt="User Icon" />
                                <RiArrowDropDownLine className='text-2xl font-light pt-2' />
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className='flex lg:hidden'>
                        {isLoggedIn && (
                            <div className='rounded-full flex gap-1 cursor-pointer relative'
                                onClick={handleDropdownToggle} ref={dropdownRef}
                                aria-expanded={isDropdownOpen} aria-haspopup="true" aria-controls="dropdown-menu"
                            >
                                <img src={poepleIcon} className='w-[32px] rounded-full' alt="User Icon" />
                                <RiArrowDropDownLine className='text-2xl font-light pt-2' />
                            </div>
                        )}
                        <HiBars3BottomRight onClick={handleMenuToggle} className='text-3xl font-extrabold cursor-pointer' aria-label="Menu" />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-white z-50">
                    <div className="flex justify-between p-4">
                        <img src={logo} alt="Logo" className='w-[100px]' />
                        <HiXMark onClick={handleMenuToggle} className="text-3xl font-extrabold cursor-pointer" aria-label="Close Menu" />
                    </div>
                    <div className="flex flex-col items-center gap-6 mt-12">
                        <MenuLinks />
                    </div>
                </div>
            )}

            {/* Dropdown Menu on Profile Click */}
            {isDropdownOpen && (
                <div id="dropdown-menu" className='absolute right-10 mt-2 w-48 bg-white shadow-lg rounded-lg' ref={dropdownRef}>
                    <ul className='py-2'>
                        <li onClick={() => navigate('my-profile')} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                            My Profile
                        </li>
                        <li onClick={() => navigate('my-appointments')} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                            My Appointments
                        </li>
                        <li onClick={() => {
                            setIsLoggedIn(false);
                            navigate('/login'); // Redirect to login after logout
                        }} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                            Logout
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;
