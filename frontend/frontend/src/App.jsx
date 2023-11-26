import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import LandingPage from './LandingPage/LandingPage';
import TeacherList from './Teacher/TeacherList';
import TeacherData from './Teacher/TeacherData';
import Login from './authentication/login';
import Register from './authentication/register';

function App() {
    return (
        <div className="bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-400">
            <Router>
                <AuthProvider>
                    <div>
                        <Routes>
                            <Route path="/Login" element={<Login />} />
                            <Route path="/Register" element={<Register />} />
                            <Route path="/TeacherData" element={<TeacherData />} />
                            <Route path="/TeacherList" element={<TeacherList />} />
                            <Route path="/" element={<LandingPage />} />
                        </Routes>
                    </div>
                </AuthProvider>
            </Router>
        </div>          
    ); 
};


export default App;
