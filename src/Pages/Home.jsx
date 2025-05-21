// Home.jsx
import React from 'react';
import teacher from '../assets/teacher.png';
import {useNavigate} from "react-router-dom"
import Home2 from './Home2';

function Home() {
    const navigate=useNavigate();

  return (
    <>
    <div className="w-full bg-blue-300 mx-auto p-4">
      <div className="w-[95%] sm:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-8">
        <div className='flex flex-col gap-4 items-start'>
          <h1 className="text-xl sm:text-2xl md:text-[25px] font-extrabold mb-2 md:mb-4">
            Empower Your Learning with Our AI Teaching Assistant
          </h1>
          <p className='text-base sm:text-lg md:text-[20px] font-[400]'>
            Unlock your full potential with our intelligent AI Teaching Assistant designed to guide you through complex concepts in Physics, Chemistry, and Maths. Whether you're struggling with Newton's laws, chemical reactions, or algebraic equations, our assistant provides clear explanations, step-by-step solutions, and tailored study tips.
          </p>
          <button className='bg-black px-2 py-1.5 text-white rounded-lg text-sm sm:text-base hover:bg-gray-800 transition-colors w-auto max-w-[200px]' onClick={()=>navigate("/TeacherAssistant")}>AI Teacher Assistant</button>
        </div>
        
        <div className="flex justify-center mt-6 md:mt-0">
          <img src={teacher} alt="Teacher" className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[570px] h-auto" />
        </div>
      </div>
    </div>
    <Home2></Home2>
    </>
  );
}

export default Home;
