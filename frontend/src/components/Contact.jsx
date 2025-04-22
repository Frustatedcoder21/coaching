import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-full p-10  flex flex-col items-center font-primary'>
        <p className=' text-6xl mb-10'>Contact Us</p>
      <div className=' contact-form w-[350px] h-[500px] p-4 rounded-2xl bg-[#89CFF3] shadow-2xl shadow-blue-500 flex flex-col  items-center gap-4 '>
      <p className='text-center text-3xl'>Contact Form</p>
       <input type="text" className='w-[90%] h-[40px] rounded-2xl bg-amber-50 pl-4' placeholder='Name' />
       <input type="email" className='w-[90%] h-[40px] rounded-2xl bg-amber-50 pl-4' placeholder='Email' />
       <textarea name="" id="" placeholder='Write your message or query....' className='bg-amber-50 w-[90%] h-[250px] rounded-2xl px-5 py-3.5'></textarea>
      </div>
     
    </div>
  )
}

export default Contact