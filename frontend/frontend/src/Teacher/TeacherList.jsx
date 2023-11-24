import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function TeacherData() {
    const [teachers, setTeachers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTeacher, setSelectedTeacher] = useState({});
    const [teacherName, setTeacherName] = useState('');
    const [teacherDepartment, setTeacherDepartment] = useState('');
    const [teacherExperience, setTeacherExperience] = useState('');
    const [image, setImage] = useState('');
    
    useEffect(() => {
        updateData();
    }, []);
    
    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/TeacherList');
                setTeachers(response.data);
            } 
            catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchTeachers();
    }, []);

    const openModal = (teacher) => {
        setIsModalOpen(true);
        setSelectedTeacher(teacher);
        setTeacherName(teacher.name);
        setTeacherDepartment(teacher.department);
        setTeacherExperience(teacher.experience);
        setImage(teacher.image);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const updateData = async () => { 
        try {
            const response = await axios.get('http://localhost:8000/TeacherData');
            setTeachers(response.data);
        } 
        catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleEditTeacher = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', teacherName);
        formData.append('department', teacherDepartment);
        formData.append('experience', teacherExperience);
        formData.append('image', image);
    
        try {
            const response = await axios.post(`http://localhost:8000/edit/${selectedTeacher.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            console.log('Edit Teacher Response:', response);
    
            if (response.status === 200) {
                setTeachers(teachers.map((teacher) => (teacher.id === selectedTeacher.id ? response.data : teacher)));
                closeModal();
                updateData();
            }
        } catch (error) {
            console.error('Error editing teacher:', error);
        }
    };
    
    const handleAddTeacher = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', teacherName);
        formData.append('department', teacherDepartment);
        formData.append('experience', teacherExperience);
        formData.append('image', image);
    
        try {
            const response = await axios.post('http://localhost:8000/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            console.log('Add Teacher Response:', response);
    
            if (response.status === 200) {
                setTeachers([...teachers, response.data]);
                closeModal();
                updateData();
            }
        } catch (error) {
            console.error('Error adding teacher:', error);
        }
    };
    
      
    const handleDeleteTeacher = async () => {
        try {
            await axios.post(`http://localhost:8000/delete/${selectedTeacher.id}`);
            setTeachers(teachers.filter((teacher) => teacher.id !== selectedTeacher.id));
            closeModal();
        } 
        catch (error) {
            console.error('Error deleting teacher:', error);
        }
        updateData(); 
    };   

    return (
        <>
            <Header/>
            <div className="min-h-screen">
                <h1 className="text-3xl text-center my-4">Teacher Data</h1>
                <div className="container mx-auto">
                    <div className="flex justify-center items-center p-4">
                        <button className="bg-blue-500 hover:bg-blue-700 flex justify-center text-white font-bold py-2 px-4 rounded" onClick={() => openModal({})}>
                            Add Teacher
                        </button>
                    </div>
                    <div className="p-2 table-responsive bg-white/[.08] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                        <table className="min-w-full border border-collapse border-slate-500">
                            <thead>
                                <tr>
                                    <th className="w-1/4 p-3 border border-slate-500">Name</th>
                                    <th className="w-1/4 p-3 border border-slate-500">Department</th>
                                    <th className="w-1/4 p-3 border border-slate-500">Experience</th>
                                    <th className="w-1/4 p-3 border border-slate-500">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teachers.map(teacher => (
                                    <tr key={teacher.id}>
                                        <td className='p-3 border border-slate-500'>{teacher.name}</td>
                                        <td className='p-3 border border-slate-500'>{teacher.department}</td>
                                        <td className='p-3 border border-slate-500'>{teacher.experience}</td>
                                        <td className='flex justify-center gap-2 p-3 border border-slate-500'>
                                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded" onClick={() => openModal(teacher)}>
                                                Edit
                                            </button>
                                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDeleteTeacher()}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                            <div className="modal-content py-4 text-left px-6">
                                <h2 className="text-2xl">{selectedTeacher.id ? 'Edit' : 'Add'} Teacher</h2>
                                <form className="mt-4">
                                    <label htmlFor="name">Name</label>
                                    <input id="name" type="text" className="border-2 w-full p-2 rounded" value={teacherName} onChange={e => setTeacherName(e.target.value)} />

                                    <label htmlFor="department" className="mt-4">Department</label>
                                    <input id="department" type="text" className="border-2 w-full p-2 rounded" value={teacherDepartment} onChange={e => setTeacherDepartment(e.target.value)} />

                                    <label htmlFor="experience" className="mt-4">Experience</label>
                                    <input id="experience" type="text" className="border-2 w-full p-2 rounded" value={teacherExperience} onChange={e => setTeacherExperience(e.target.value)} />

                                    <label htmlFor="image" className="mt-4">Image</label>
                                    <input id="image" type="file" className="border-2 w-full p-2 rounded" onChange={e => setImage(e.target.files[0])} />
                                </form>
                            </div>
                            <div className="modal-footer flex justify-between items-center p-6">
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={closeModal}>
                                    Cancel
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleEditTeacher}>
                                    {selectedTeacher.id ? 'Save' : ''} Teacher
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddTeacher}>
                                    {selectedTeacher.id ? 'ADD' : ''} Teacher
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
                        <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
                            <div className="modal-content py-4 text-left px-6">
                                <h2 className="text-2xl">{selectedTeacher.id ? 'Edit' : 'Add'} Teacher</h2>
                                <form className="mt-4">
                                    <label htmlFor="name">Name</label>
                                    <input id="name" type="text" className="border-2 w-full p-2 rounded" value={teacherName} onChange={e => setTeacherName(e.target.value)} />

                                    <label htmlFor="department" className="mt-4">Department</label>
                                    <input id="department" type="text" className="border-2 w-full p-2 rounded" value={teacherDepartment} onChange={e => setTeacherDepartment(e.target.value)} />

                                    <label htmlFor="experience" className="mt-4">Experience</label>
                                    <input id="experience" type="text" className="border-2 w-full p-2 rounded" value={teacherExperience} onChange={e => setTeacherExperience(e.target.value)} />

                                    <label htmlFor="image" className="mt-4">Image</label>
                                    <input id="image" type="file" className="border-2 w-full p-2 rounded" onChange={e => setImage(e.target.files[0])} />
                                </form>
                            </div>
                            <div className="modal-footer flex justify-between items-center p-6">
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={closeModal}>
                                    Cancel
                                </button>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddTeacher}>
                                    {selectedTeacher.id ? 'Save' : 'Add'} Teacher
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer/>
        </>
    );
}

export default TeacherData;