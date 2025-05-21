import React, { useState, useEffect } from 'react'

function Navbar() {
  const [toggle, setToggle] = useState(false)
  
  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToggle(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className='w-full bg-green-300 shadow-md sticky top-0 z-50'>
        <div className='w-[90%] mx-auto py-4'>
          <div className='flex flex-row items-center justify-between'>
            <h1 className='font-[800] text-[20px] md:text-[22px]'>Teachify AI</h1>
            
            {/* Mobile Menu Button */}
            <button 
              className='md:hidden p-2 focus:outline-none'
              onClick={() => setToggle(!toggle)}
              aria-label="Toggle menu"
            >
              {!toggle ? (
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    fill="currentColor"
                    d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                    <path d="M5.47 5.47a.75.75 0 0 1 1.06 0l12 12a.75.75 0 1 1-1.06 1.06l-12-12a.75.75 0 0 1 0-1.06"></path>
                    <path d="M18.53 5.47a.75.75 0 0 1 0 1.06l-12 12a.75.75 0 0 1-1.06-1.06l12-12a.75.75 0 0 1 1.06 0"></path>
                  </g>
                </svg>
              )}
            </button>
            
            {/* Desktop Navigation */}
            <nav className='hidden md:flex md:items-center md:gap-8'>
              <a href='#' className='font-[600] hover:text-green-800 transition-colors'>Home</a>
              <a href='#' className='font-[600] hover:text-green-800 transition-colors'>About</a>
              <a href='#' className='font-[600] hover:text-green-800 transition-colors'>Contact</a>
            </nav>
          </div>
          
          {/* Mobile Navigation */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              toggle ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <nav className='flex flex-col bg-green-200 rounded-lg shadow-inner'>
              <a href='#' className='font-[600] py-3 px-4 border-b border-green-300 hover:bg-green-300 transition-colors'>Home</a>
              <a href='#' className='font-[600] py-3 px-4 border-b border-green-300 hover:bg-green-300 transition-colors'>About</a>
              <a href='#' className='font-[600] py-3 px-4 hover:bg-green-300 transition-colors'>Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
