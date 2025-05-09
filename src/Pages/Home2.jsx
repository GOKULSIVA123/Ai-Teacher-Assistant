import React from 'react'
import {useNavigate} from "react-router-dom"
function Home2() {
  const navigate=useNavigate()
  return (
    <>
   <div className='2xl:container bg-green-300 mx-auto'>
        <div className='w-[90%] h-[100vh] mx-auto grid grid-cols-1'>
            <div className='flex flex-col mt-4 gap-3'>
            <h1 className='text-[25px] font-[600]'>Learn Smarter with AI Assistance</h1>
            <p className='text-[18px] font-[400]'>Master Physics, Mathematics, and Chemistry with personalized AI-powered guidance tailored to your learning style. Explore complex concepts through clear explanations, interactive examples, and real-time support. Challenge yourself with a variety of quizzes designed to test your understanding, reinforce knowledge, and track your progress on the path to academic success!</p>
            </div>
            <div className='flex flex-row gap-5'>
                <div className="bg-white rounded-lg w-[35%] h-[50vh] flex flex-col items-center gap-3">
                <h2 className="text-xl font-bold ">Physics</h2>
                <ul className="mb-2">
                    <li>• Mechanics, Electricity, Thermodynamics</li>
                    <li>• Optics, Modern Physics</li>
                </ul>
                <p className="mb-1"><strong>Quiz:</strong> What is Newton's Second Law?</p>
                <p className="mb-1"><strong>AI Help:</strong> Step-by-step solutions</p>
                <div className='flex flex-row items-center gap-3'>
                <button className='px-1 py-1 bg-black text-white rounded-lg md:px-2 md:py-2' onClick={()=>navigate('/Physics')}>Attend Quizes!</button>
                <button className='px-1 py-1 bg-black text-white rounded-lg md:px-2 md:py-2' onClick={()=>navigate('/PhysicsAssistant')}>Get Help with Ai</button>
                </div>
                </div>
                <div className="bg-white rounded-lg w-[35%] h-[50vh] flex flex-col items-center gap-3">
                <h2 className="text-xl font-bold ">Chemistry</h2>
                <ul className="mb-2">
                    <li>• Reactions, Acids & Bases</li>
                    <li>• Organic Chemistry</li>
                </ul>
                <p className="mb-1"><strong>Quiz:</strong>Balance the equation: H₂ + O₂ → H₂O </p>
                <p className="mb-1"><strong>AI Help:</strong> Understand reaction mechanisms</p>
                <div className='flex flex-row items-center gap-3'>
                <button className='px-1 py-1 bg-black text-white rounded-lg md:px-2 md:py-2' onClick={()=>navigate('/Chemistry')}>Attend Quizes!</button>
                <button className='px-1 py-1 bg-black text-white rounded-lg md:px-2 md:py-2' onClick={()=>navigate('/ChemistryAssistant')}>Get Help with Ai</button>
                </div>
                </div>
                <div className="bg-white rounded-lg w-[35%] h-[50vh] flex flex-col items-center gap-3">
                <h2 className="text-xl font-bold ">Maths</h2>
                <ul className="mb-2">
                    <li>• Integrals,Differential Equation</li>
                    <li>• Probability,Functions</li>
                </ul>
                <p className="mb-1"><strong>Quiz:</strong> Probability Questions</p>
                <p className="mb-1"><strong>AI Help:</strong> Step-by-step solutions with explanation.</p>
                <div className='flex flex-row items-center gap-3'>
                <button className='px-1 py-1 bg-black text-white rounded-lg md:px-2 md:py-2' onClick={()=>navigate('/Maths')}>Attend Quizes!</button>
                <button className='px-1 py-1 bg-black text-white rounded-lg md:px-2 md:py-2' onClick={()=>navigate('/MathsAssistant')}>Get Help with Ai</button>
                </div>
                </div>

            </div>

        </div>
    </div>
    </>
  )
}

export default Home2