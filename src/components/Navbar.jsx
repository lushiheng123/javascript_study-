import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className='  bg-blue-500 flex justify-center'>
      <div className='px-10 py-1 justify-between items-center flex  w-[1400px]'>
        <div className='flex '>
          <NavLink to="/"  >
            <img src="./images/portfolio/logo-no-background.png" width="160" alt="img " />
            </NavLink>  
        </div>
        <div className='flex '>
          <button className=' w-48 p-2.5 bg-[#da4ea2] text-white'>
            <NavLink to="/" >Hire Me </NavLink>
         </button>
        </div>
      </div>
    </div>
  )
};
