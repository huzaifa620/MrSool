import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between md:justify-center xl:space-x-32 2xl:space-x-64 w-full bg-black lg:px-3 py-3 text-white text-lg font-sans shadow-2xl fixed top-0 z-20'>
        <div className='cursor-pointer w-1/3 flex items-center justify-center scale-75 lg:scale-100'>
            <img src='https://mrsool.co/images/Mrsool-Logo-v2.png' alt='' />
        </div>
        <div className='cursor-pointer w-1/3 hidden md:flex items-center justify-center'>
            <p className='text-lg lg:text-xl xl:text-2xl underline decoration-mrsool-green underline-offset-8 decoration-4'> Demand Forecaster Dashboard </p>
        </div>
        <div className='w-1/3 flex items-center justify-center'>
            <div className='bg-[#E10600] hover:bg-[#af0500] text-center items-center justify-center rounded-3xl px-4 py-1 cursor-pointer text-xs md:text-base'>
                Logout
            </div>
        </div>
    </div>
  )
}

export default Header