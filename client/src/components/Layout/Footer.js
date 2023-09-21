import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-dark text-light p-3'>
      <h1 className='text-center form-control-sm'>All Right Reserve &copy; Kensy 2023</h1>
      <p className="text-center p-1 m-4">
        <Link to="/about" className='m-4  text-white' >About</Link>
        
        <Link to="/contact"className='m-4 text-white' >Contact Us</Link>
        
        <Link to="/policy" className='m-4 text-white' >Privacy Policy</Link>
      </p>
    </div>
    
  )
}

export default Footer
