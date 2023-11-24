import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import Navbar from './Navbar';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
                    </div>                        
                    <Navbar/>
                    
                    {/* Responsive Menu Button */}
                    <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                        </svg>
                    </button>
                </div>

                {/* Responsive Menu */}
                {menuOpen && (
                    <div className="md:hidden mt-2">
                        <Link to="/" target='__blank' className="block py-2 hover:text-indigo-600">Home</Link>
                        <Link to="/TeacherData" target='__blank' className="block py-2 hover:text-indigo-600">Teachers</Link>
                        <Link to="/Service" target='__blank' className="block py-2 hover:text-indigo-600">Services</Link>
                        <a href='#social' className="border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600">Contact</a>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;
