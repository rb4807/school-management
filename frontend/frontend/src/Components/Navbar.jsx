import React, {useContext} from 'react'
import {jwtDecode} from "jwt-decode"
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext"

const Navbar = () => {
    const {user, logoutUser} = useContext(AuthContext)
    const token = localStorage.getItem("authTokens")
  
    if (token){
      const decoded = jwtDecode(token) 
      var user_id = decoded.user_id
      var username = decoded.username
    }

    return (
        <nav className="hidden md:flex space-x-4">
            {token !== null &&  
                <p>Hello, {username}</p>
            }
            <Link to="/" target='__blank' className="border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600">Home</Link>
            <a href='#social' className="border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600">Contact</a>
            {token === null && 
                <>
                    <Link to="/Login" target='__blank' className="border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600">Login</Link>
                    <Link to="/Register" target='__blank' className="border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600">Register</Link>
                </>
            }
            {token !== null && 
                <>
                    <Link to="/TeacherData" target='__blank' className="border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600">Teachers</Link>
                    <Link to="/" target='__blank' onClick={logoutUser} className="border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600">Logout</Link>
                </>
            }
        </nav>
    )
}

export default Navbar