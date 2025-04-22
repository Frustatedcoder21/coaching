import React from 'react'

const Topnav = () => {
  return (
    <div className='w-full h-full flex justify-around items-center font-primary'>
    <div className='flex items-center gap-2.5'>
        <img src="phone.svg" className='w-[20px]' alt="" />
        <p>+91 9432540264</p>
    </div>
    <div className='flex items-center gap-2.5'>
        <img src="location.svg" className='w-[20px]' alt="" />
        <p>3/2/1 Patwar Bagan Lane, Kolkata-700009</p>
    </div>
    <div className='flex items-center gap-2.5'>
        <img src="email.svg" className='w-[20px]' alt="" />
        <p>thedopamineclasses@gmail.com</p>
    </div>
    <div></div>
    </div>
  )
}

export default Topnav