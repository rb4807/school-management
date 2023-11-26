import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from "../Context/AuthContext"

const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        email.length > 0 && loginUser(email, password)

        console.log(email)
        console.log(password)
    }
    return (
        <>
            <nav class="w-full rounded-md flex justify-evenly md:justify-start p-10">
                <ol class="flex">
                    <li>
                        <a href='/' class="text-white hover:text-blue-700 ml-2">Home</a>
                    </li>
                    <li>
                    <span class="mx-2 text-white">/</span>
                    </li>
                    <li>
                        <a href="/login" class="text-white hover:text-blue-700">Login</a>
                    </li>
                </ol>
            </nav>
            <div className='h-screen flex items-center justify-center'>
                <div className="content p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-3xl text-white font-bold mb-6 text-center">Login</h1>
                    <form onSubmit={handleSubmit} className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2">Email:</label>
                        <input type="email" name="email" placeholder='Email' className="bg-white/[.02] w-full p-2 border placeholder-white border-neutral-400 rounded-md focus:outline-none focus:border-indigo-500" />

                        <label className="block text-white text-sm font-bold mb-2 mt-4">Password:</label>
                        <input type="password" name="password" placeholder='Password' className="bg-white/[.02] w-full p-2 placeholder-white border border-neutral-400 rounded-md focus:outline-none focus:border-indigo-500 mt-1" />

                        <button type="submit" className="w-full bg-indigo-500 text-white p-2 rounded-md mt-4 hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo">
                            Login
                        </button>
                    </form>
                    <h2 className='text-center text-xl text-white'>New User?<span className='ml-4 text-white underline underline-offset-1'><Link to="/Register" target='__blank'>Register Now</Link></span></h2>
                </div>
            </div>
        </>

    )
}

export default Login