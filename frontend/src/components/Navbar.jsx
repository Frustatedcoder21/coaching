import React,{useState} from 'react'
import { useGSAP } from '@gsap/react'
import { Link } from 'react-scroll'
import gsap from 'gsap'
const Navbar = () => {
    const [visible,setVisible]=useState(false)
    useGSAP(()=>{
     gsap.from('.navitems',{
      y:-100,
      opacity:0,
      duration:0.5,
      stagger:0.2
     })
    },[])
    
  return (
    <div className='w-full h-full bg-[#00A9FF] font-primary'>
        <div className='flex justify-between items-end  pr-6 pb-3'>
     <div className=''>
        <img src="logo.png" alt="logo" className='w-[150px]' />
     </div>
     <div>
      <ul className='hidden md:flex gap-8 text-2xl font-medium'>
        <li className='navitems cursor-pointer'><Link to='home' smooth={true}>Home</Link></li>
        <li className='navitems cursor-pointer'><Link to='about' smooth={true} offset={-85}>About Us</Link></li>
        <li className='navitems cursor-pointer'><Link to='course' smooth={true} offset={-85}>Courses</Link></li>
        <li className='navitems cursor-pointer'><Link to='contact' smooth={true} offset={-85}>Contact</Link></li>
      </ul>
     </div>
     <button className='inline md:hidden' onClick={()=>setVisible(prev=>!prev)}><img src={visible?"cross.svg":"menu.svg"} className='w-[30px]' alt="" /></button>
    </div>
   {visible &&  <div className=' md:hidden flex justify-center   bg-[#00A9FF]'>
        <ul className='flex flex-col gap-3'>
        <li className='navitems'><Link to='home' smooth={true}>Home</Link></li>
        <li className='navitems'><Link to='about' smooth={true} offset={-85}>About Us</Link></li>
        <li className='navitems'><Link to='course' smooth={true} offset={-85}>Courses</Link></li>
        <li className='navitems'><Link to='contact' smooth={true} offset={-85}>Contact</Link></li>
        </ul>
    </div>}
    </div>
  )
}

export default Navbar