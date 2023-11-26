import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from "../Context/AuthContext"

const Register = () => {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
  
    const {registerUser} = useContext(AuthContext)
  
    console.log(email);
    console.log(username);
    console.log(password);
    console.log(password2);
  
  
    const handleSubmit = async e => {
      e.preventDefault()
      registerUser(email, username, password, password2)
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
                        <a href="/register" class="text-white hover:text-blue-700">Registration</a>
                    </li>
                </ol>
            </nav>
            <div className='h-screen flex items-center justify-center'>
                <div className="content p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-3xl text-white font-bold mb-6 text-center">Registration</h1>
                    <form onSubmit={handleSubmit} className="mb-6">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2">Email:</label>
                                <input onChange={e => setEmail(e.target.value)} type="email" name="email" placeholder='Email' className="bg-white/[.02] w-full p-2 placeholder-white border border-neutral-400 rounded-md focus:outline-none focus:border-indigo-500"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2">Username:</label>
                                <input onChange={e => setUsername(e.target.value)} type="password" name="password" placeholder='Username' className="bg-white/[.02] w-full p-2 placeholder-white border border-neutral-400 rounded-md focus:outline-none focus:border-indigo-500"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2">Password:</label>
                                <input onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder='Password' className="bg-white/[.02] w-full p-2 placeholder-white border border-neutral-400 rounded-md focus:outline-none focus:border-indigo-500"/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-white text-sm font-bold mb-2">Confirm Password:</label>
                                <input onChange={e => setPassword2(e.target.value)} type="password" name="password2" placeholder='Confirm Password' className="bg-white/[.02] w-full p-2 placeholder-white border border-neutral-400 rounded-md focus:outline-none focus:border-indigo-500"/>
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-indigo-500 text-white p-2 rounded-md mt-4 hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo">
                            Login
                        </button>
                    </form>
                    <h2 className='text-center text-xl text-white'>Already have account?<span className='ml-4 text-white underline underline-offset-1'><Link to="/Login" target='__blank'>Login Now</Link></span></h2>
                </div>
            </div>
        </>
    )
}

export default Register