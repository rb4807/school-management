import React, {useContext, useState} from 'react'
import {jwtDecode} from "jwt-decode"
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext"
import logo from '../assets/logo.png'
 
const Navs = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const {user, logoutUser} = useContext(AuthContext)
    const token = localStorage.getItem("authTokens")
  
    if (token){
      const decoded = jwtDecode(token) 
      var user_id = decoded.user_id
      var username = decoded.username
    }

    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center sticky top-10">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
                </div>
                <nav className="hidden md:flex space-x-4">
                    {token === null &&  
                        <>
                            <Link to="/Login" target='__blank' className="border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600">Login</Link>
                            <Link to="/Register" target='__blank' className="border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600">Register</Link>
                        </>
                    }
                    {token !== null && 
                        <>
                            <p>Hello,{username}</p>
                            <Link to="/" target='__blank' onClick={logoutUser} className="border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600">Logout</Link>
                        </>
                    }
                </nav>
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
                        <a href='#social' className="border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600">Contact</a>

                        {token === null && 
                            <>
                                <Link to="/Login" target='__blank' className="block py-2 hover:text-indigo-600">Login</Link>
                                <Link to="/Register" target='__blank' className="block py-2 hover:text-indigo-600">Register</Link>
                            </>
                        }
                        {token !== null && 
                            <>
                                <Link to="/TeacherData" target='__blank' className="block py-2 hover:text-indigo-600">Teachers</Link>
                                <Link to="/" onClick={logoutUser} target='__blank' className="block py-2 hover:text-indigo-600">Logout</Link>

                            </> 
                        }
                    </div>
                )}
        </header>
    )
}

export default Navs