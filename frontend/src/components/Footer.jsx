import React from 'react'
import { Link } from 'react-scroll'
const Footer = () => {
  return (
    <div  className='w-full h-full relative bg-[#00A9FF] flex items-center font-primary'>
      <footer className='w-full  '>
  <div class="footer-container flex justify-around gap-3  break-words px-5">
    <div class="footer-section shrink-1">
      <h3>About Us</h3>
      <p>Providing quality education in science with expert faculty and a student-centric approach.</p>
    </div>
    
    <div class="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><Link to='home' smooth={true}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-85}>About Us</Link></li>
        <li><Link to='course' smooth={true} offset={-85}>Courses</Link></li>
        <li><Link to='contact' smooth={true} offset={-85}>Contact</Link></li>
      </ul>
    </div>

    <div class="footer-section">
      <h3>Contact Us</h3>
      <p>Email: thedopamineclasses@gmail.com</p>
      <p>Phone: +91 9432540264</p>
      <p>Address: 3/2/1 Patwar Bagan Lane, Kolkata-700009</p>
    </div>

  </div>

  <div class="footer-bottom  absolute left-2 bottom-2">
    <p>&copy; 2025 Dopamine Classes. All rights reserved.</p>
  </div>
</footer>
    </div>
  )
}

export default Footer