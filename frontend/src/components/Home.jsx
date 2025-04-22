import React from 'react'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { Link } from 'react-scroll';
const Home = () => {
  useGSAP(()=>{
   gsap.from('.main1',{
    opacity:0,
    x:-200,
    duration:1,
    stagger:0.5

   })
  },[])
  return (
    <div className='w-full h-full p-10  flex flex-col flex-wrap justify-center items-center gap-10 relative'>
      <div className='w-full h-full absolute bg-[url("dopamine.png")] bg-cover bg-center opacity-5'></div>
      {/* <div className='break-words flex flex-col gap-2.5 items-center'>
        <p className='main1 text-8xl font-bold text-center text-[#FF9494]  font-main'>Science simplified</p>
        <p className='main1 text-8xl font-bold  text-center text-gray-700  font-main'>Success amplified </p>
        <button className=' px-4 py-3 rounded-2xl bg-[#FFE3E1] hover:bg-amber-200'>Contact Us</button>
      </div>
      <div>
        <img src="logo.png" className='w-[500px]' alt="" />
      </div> */}
      <h1 className='text-7xl md:text-9xl font-bold font-main text-center'>Dopamine Classes</h1> 
      <div className='flex flex-col gap-4 justify-center items-center '>
      <p onClick={()=>{
          console.log("hello");
          
        }}  className='main1 text-5xl font-semibold text-center text-[#00A9FF]  font-main'>Science simplified</p>
        <p className='main1 text-5xl font-semibold  text-center text-[#00A9FF]  font-main'>Success amplified </p>
        <button onClick={()=>{
          console.log("hello");
          
        }} className=' px-3 py-2 w-[150px] rounded-2xl bg-[#00A9FF] hover:bg-blue-700 hover:shadow-white shadow-2xl'><Link to='contact' smooth={true} offset={-85}>Contact</Link></button>
        </div>
    </div>
  )
}

export default Home