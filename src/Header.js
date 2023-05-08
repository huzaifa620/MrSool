import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between w-full bg-black p-3 text-white text-lg font-sans px-[20%] shadow-2xl fixed top-0 z-20'>
        <div className='cursor-pointer'>
            <img src='https://mrsool.co/images/Mrsool-Logo-v2.png' alt='' />
        </div>
        <div className='cursor-pointer'>
            <p className='underline decoration-mrsool-green underline-offset-8 decoration-4'>Demand Forecaster Dashboard</p>
        </div>
        <div className='flex'>
            <div className='bg-[#E10600] rounded-3xl px-4 py-1 cursor-pointer'>
                Logout
            </div>
        </div>
    </div>
  )
}

export default Header