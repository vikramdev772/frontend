import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDoubleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-300 to-pink-300 p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="text-white text-xl font-bold">
          <img src={logo} alt="Logo" className="w-[40px]" />
        </Link>
      </div>
      
      {/* Hamburger Menu */}
      <div className="block lg:hidden">
        <button onClick={toggleMenu} onDoubleClick={handleDoubleClick} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      
      {/* Navigation Links (Desktop) */}
      <div className="hidden lg:flex items-center space-x-4">
        <Link to="/home" className="text-white text-xl font-extrabold hover:text-blue-400">Home</Link>
        
        <Link to="/login" className="text-white text-xl font-extrabold hover:text-blue-400">Login</Link>
        <Link to="/signup" className="text-white text-xl font-extrabold hover:text-blue-400">Signup</Link>
      </div>
      
      {/* Dropdown Menu (Mobile) */}
      {isOpen && (
        <div className="lg:hidden absolute top-full bg-gray-800 w-full left-0">
          <div className="flex flex-col space-y-2 p-4">
            <Link to="/home" className="text-white font-extrabold hover:text-blue-400">Home</Link>

            <Link to="/login" className="text-white font-extrabold hover:text-blue-400">Login</Link>
            <Link to="/signup" className="text-white font-extrabold hover:text-blue-400">Signup</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
