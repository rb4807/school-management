import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="hidden md:flex space-x-4">
            <Link to="/" target='__blank' className="border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600">Home</Link>
            <Link to="/TeacherData" target='__blank' className="border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600">Teachers</Link>
            <Link to="/Service" target='__blank' className="border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600">Services</Link>
            <a href='#social' className="border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600">Contact</a>
        </nav>
    )
}

export default Navbar