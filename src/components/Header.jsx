import React from 'react'
// import { Autocomplete } from '@react-google-maps/api'
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center p-4 bg-blue-900 bg-opacity-85 shadow-md'>
      <div className='text-2xl text-white font-semibold'>
        <span>Travel Trail</span>
      </div>
      <div className='flex justify-center items-center space-x-4'>
        <span className='text-white hidden sm:block'>Explore new places</span>
        {/* <Autocomplete> */}
          <div className='flex items-center  bg-gray-100 bg-opacity-15  p-1 rounded-md shadow-sm'>
            <input 
              type='text' 
              placeholder='Search...' 
              aria-label='Search places'
              className='bg-transparent text-white placeholder-slate-300 text-[1rem] outline-none w-full px-2'
            />
            <CiSearch className='text-white cursor-pointer' size={30} />
          </div>
        {/* </Autocomplete> */}
      </div>
    </div>
  )
}

export default Header
