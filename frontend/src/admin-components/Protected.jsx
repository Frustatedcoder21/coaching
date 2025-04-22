import React from 'react'
import { useSelector } from 'react-redux'
import Login from './Login'
const Protected = ({children}) => {
    const {isloggedIn}=useSelector((state)=>state.authentication)
   
    
  return (
    <div className='w-screen min-h-screen md:h-screen overflow-x-hidden'>
{isloggedIn?children:<Login/>}
    </div>
   
  )
}

export default Protected