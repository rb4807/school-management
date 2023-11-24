import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import TeacherList from './Teacher/TeacherList';
import TeacherData from './Teacher/TeacherData';
import Service from './Others/Services';

function App() {
    return (
        <div className="bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-400">
            <Router>
                <div>
                    <Routes>
                        <Route path="/TeacherData" element={<TeacherData />} />
                        <Route path="/TeacherList" element={<TeacherList />} />
                        <Route path="/Service" element={<Service />} />
                        <Route path="/" element={<LandingPage />} />
                    </Routes>
                </div>
            </Router>
        </div>          
    ); 
};


export default App;
