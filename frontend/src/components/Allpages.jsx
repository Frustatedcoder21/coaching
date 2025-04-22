import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Courses from './Courses'
import Download from './Download'
import Contact from './Contact'
import Why from './Why'
import Teacher from './Teacher'
import Footer from './Footer'
import Topnav from './Topnav'
import Announcement from './Announcement'
const Allpages = () => {
  return (
    <div className='w-screen relative overflow-x-hidden'>
      <div className='w-full h-[40px] bg-[#00A9FF] hidden md:block fixed top-0 z-50 border-b-2 border-white'>
        <Topnav />
      </div>
      <div  className='w-full min-h-[10vh] md:h-[8vh] fixed top-0 md:top-10 z-50'>
       <Navbar />
      </div>
      <div name="home" className='w-full min-h-screen md:h-screen bg-white overflow-y-auto  mt-[10vh]'>
        <Home />
      </div>
      <div name="about" className='w-full   min-h-screen md:h-screen overflow-y-auto bg-[#CDF5FD]'>
       <About />
      </div>
      <div className='w-full  overflow-y-auto bg-white'>
      <Why />
      </div>
      <div className='w-full min-h-[70vh] md:h-[70vh] overflow-y-auto bg-[#89CFF3]'>
      <Teacher />
      </div>
      <div className='w-full  h-screen overflow-auto  bg-[#CDF5FD]'>
       <Courses />
      </div>
      <div className=' w-screen  bg-[#89CFF3]'>
       <Announcement />
      </div>
      <div name="contact" className='w-full min-h-[120vh] bg-[#CDF5FD]'>
      <Contact />
      </div>
      
      <div className='w-full h-[50vh] '>
      <Footer />
      </div>
    </div >
  )
}

export default Allpages