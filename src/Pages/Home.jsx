import React from 'react';
import teacher from '../assets/teacher.png';
import {useNavigate} from "react-router-dom"
import Home2 from './Home2';
function Home() {
    const navigate=useNavigate();

  return (
    <>
    <div className="2xl:container bg-blue-300 mx-auto p-4">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className='flex flex-col gap-2 items-start'>
          <h1 className="text-[25px] font-extrabold mb-4">
            Empower Your Learning with Our AI Teaching Assistant
          </h1>
          <p className='text-[20px] font-[400]'>
            Unlock your full potential with our intelligent AI Teaching Assistant designed to guide you through complex concepts in Physics, Chemistry, and Maths. Whether you're struggling with Newton’s laws, chemical reactions, or algebraic equations, our assistant provides clear explanations, step-by-step solutions, and tailored study tips.
          </p>
          <button className='bg-black px-2 py-2 text-white rounded-lg' onClick={()=>navigate("/TeacherAssistant")}>AI Teacher Assistant</button>
        </div>
        <div className="flex justify-center">
          <img src={teacher} alt="Teacher" className="w-[570px] h-[510px]" />
        </div>
      </div>
    </div>
    <Home2></Home2>
    </>
  );
}

export default Home;

