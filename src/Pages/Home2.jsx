// Home2.jsx
import React from 'react'
import {useNavigate} from "react-router-dom"

function Home2() {
  const navigate=useNavigate()
  return (
    <>
   <div className='w-full bg-green-300 mx-auto'>
        <div className='w-[95%] sm:w-[90%] min-h-screen mx-auto grid grid-cols-1 py-8'>
            <div className='flex flex-col mt-4 gap-3'>
                <h1 className='text-xl sm:text-2xl md:text-[25px] font-[600]'>Learn Smarter with AI Assistance</h1>
                <p className='text-base sm:text-lg md:text-[18px] font-[400]'>Master Physics, Mathematics, and Chemistry with personalized AI-powered guidance tailored to your learning style. Explore complex concepts through clear explanations, interactive examples, and real-time support. Challenge yourself with a variety of quizzes designed to test your understanding, reinforce knowledge, and track your progress on the path to academic success!</p>
            </div>
            
            <div className='flex flex-col lg:flex-row gap-5 mt-8'>
                {/* Physics Card */}
                <div className="bg-white rounded-lg w-full lg:w-1/3 p-4 flex flex-col items-center gap-3 shadow-md">
                    <h2 className="text-xl font-bold">Physics</h2>
                    <ul className="mb-2 text-sm sm:text-base">
                        <li>• Mechanics, Electricity, Thermodynamics</li>
                        <li>• Optics, Modern Physics</li>
                    </ul>
                    <p className="mb-1 text-sm sm:text-base"><strong>Quiz:</strong> What is Newton's Second Law?</p>
                    <p className="mb-1 text-sm sm:text-base"><strong>AI Help:</strong> Step-by-step solutions</p>
                    <div className='flex flex-col sm:flex-row items-center gap-3 w-full mt-auto'>
                        <button className='px-3 py-2 bg-black text-white rounded-lg w-full sm:w-auto hover:bg-gray-800 transition-colors' onClick={()=>navigate('/Physics')}>Attend Quizes!</button>
                        <button className='px-3 py-2 bg-black text-white rounded-lg w-full sm:w-auto mt-2 sm:mt-0 hover:bg-gray-800 transition-colors' onClick={()=>navigate('/PhysicsAssistant')}>Get Help with AI</button>
                    </div>
                </div>
                
                {/* Chemistry Card */}
                <div className="bg-white rounded-lg w-full lg:w-1/3 p-4 flex flex-col items-center gap-3 shadow-md mt-5 lg:mt-0">
                    <h2 className="text-xl font-bold">Chemistry</h2>
                    <ul className="mb-2 text-sm sm:text-base">
                        <li>• Reactions, Acids & Bases</li>
                        <li>• Organic Chemistry</li>
                    </ul>
                    <p className="mb-1 text-sm sm:text-base"><strong>Quiz:</strong> Balance the equation: H₂ + O₂ → H₂O</p>
                    <p className="mb-1 text-sm sm:text-base"><strong>AI Help:</strong> Understand reaction mechanisms</p>
                    <div className='flex flex-col sm:flex-row items-center gap-3 w-full mt-auto'>
                        <button className='px-3 py-2 bg-black text-white rounded-lg w-full sm:w-auto hover:bg-gray-800 transition-colors' onClick={()=>navigate('/Chemistry')}>Attend Quizes!</button>
                        <button className='px-3 py-2 bg-black text-white rounded-lg w-full sm:w-auto mt-2 sm:mt-0 hover:bg-gray-800 transition-colors' onClick={()=>navigate('/ChemistryAssistant')}>Get Help with AI</button>
                    </div>
                </div>
                
                {/* Maths Card */}
                <div className="bg-white rounded-lg w-full lg:w-1/3 p-4 flex flex-col items-center gap-3 shadow-md mt-5 lg:mt-0">
                    <h2 className="text-xl font-bold">Maths</h2>
                    <ul className="mb-2 text-sm sm:text-base">
                        <li>• Integrals, Differential Equation</li>
                        <li>• Probability, Functions</li>
                    </ul>
                    <p className="mb-1 text-sm sm:text-base"><strong>Quiz:</strong> Probability Questions</p>
                    <p className="mb-1 text-sm sm:text-base"><strong>AI Help:</strong> Step-by-step solutions with explanation.</p>
                    <button className='px-2 py-1.5 bg-black text-white rounded-lg text-xs sm:text-sm hover:bg-gray-800 transition-colors w-auto' onClick={()=>navigate('/Physics')}>Attend Quizes!</button>

<button className='px-2 py-1.5 bg-black text-white rounded-lg text-xs sm:text-sm hover:bg-gray-800 transition-colors w-auto' onClick={()=>navigate('/PhysicsAssistant')}>Get Help with AI</button>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home2
