import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { logout } from '../store/slice/authenticationSlice'
const Anav = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
    <div className='w-screen  bg-[#00A9FF] pb-2'>
      <div className=' flex justify-between items-center px-5'>
      <img src="../logo.png" alt="logo" className='w-[150px]' />
      <p className='text-xl md:text-3xl'>Welcome Admin</p>
      <p className='text-red-500 hover:underline cursor-pointer' onClick={()=>{
     dispatch(logout());
     navigate('/admin/login')

      }}>Logout</p>
      </div>
      
        <ul className='w-full flex justify-center gap-10 text-xl font-semibold border-2 '>
     <li><Link to='/admin'>Course</Link></li>
     <li><Link to='/admin/teacher'>Teachers</Link></li>
     <li><Link to='/admin/announcement'>Announcements</Link></li>
    </ul>
    </div>
  )
}

export default Anav