import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const TeacherData = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/TeacherData');
                setTeachers(response.data);
            } 
            catch (error) {
                console.error('Error fetching data:', error);
            }
        };
      fetchTeachers();
    }, []);

    return (
        <>
            <Header/>
            <div className="flex justify-center items-center p-4">
                <Link to="/TeacherList" target='__blank' className="bg-indigo-600 hover:bg-indigo-400 text-white px-6 py-4 rounded-md">Teachers List</Link>
            </div>    
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {teachers.map((teacher) => (
                    <div key={teacher.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
                        <img src={`http://localhost:8000${teacher.image}`} loading='lazy' alt={teacher.name} className="w-full h-auto object-cover"/>
                        <div className="p-4">
                            <p className="text-xl font-bold mb-2">{teacher.name}</p>
                            <p className="text-gray-600">{teacher.department}</p>
                            <p className="text-gray-600">{teacher.experience} years of experience</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </>
    );
};

export default TeacherData;
