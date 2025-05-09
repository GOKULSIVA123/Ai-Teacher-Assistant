import React from 'react'
import { useState } from 'react'

function Navbar() {
  const [toggle,setToggle]=useState(false)
  function Handle1(){
    setToggle(true)
  }
  function Handle2(){
    setToggle(false)
  }
  return (
    <>
      <div className='2xl:container bg-green-300'>
        <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2'>
          <div className='flex flex-row items-center justify-between'>
            <h1 className='font-[800] text-[20px]'>Teachify Ai</h1>
            <div className='md:hidden'>
            {!toggle?(
            <svg onClick={Handle1} 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            >
            <path
            fill="currentColor"
            d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
            ></path>
            </svg>):(
            <svg onClick={Handle2}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            >
            <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
            <path d="M5.47 5.47a.75.75 0 0 1 1.06 0l12 12a.75.75 0 1 1-1.06 1.06l-12-12a.75.75 0 0 1 0-1.06"></path>
            <path d="M18.53 5.47a.75.75 0 0 1 0 1.06l-12 12a.75.75 0 0 1-1.06-1.06l12-12a.75.75 0 0 1 1.06 0"></path>
            </g>
            </svg>
            )}
            </div>
          </div>
          <nav className={` bg-yellow-300 flex flex-col items-center md:bg-green-300 md:flex-row md:items-center md:justify-end md:gap-4 py-6  md:visible ${toggle?'visible':'invisible'}  ${toggle ? '' : 'h-0'} md:h-auto
            transition-all duration-200`}>
            <a href='#' className='font-[600] hover:underline'>Home</a>
            <a href='#' className='font-[600] hover:underline'>About</a>
            <a href='#' className='font-[600] hover:underline'>Contact</a>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar