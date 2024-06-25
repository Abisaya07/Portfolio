import React from 'react'
import './MobileNav.css'

const MobileNav = ({isOpen,toggleMenu}) => {
  return (
    <div>
    
    <div className={`mobile-menu ${isOpen?"active":""}`}
    onClick={toggleMenu}>
    <div className='mobile-menu-container'>
    <h1 className='logo'>➻Portfolio.</h1><br></br>
    <ul>
        <li>
            <a className='menu-item'>Home</a>
            
        </li>
        <li>
            <a className='menu-item'>Projects</a>

        </li>
        <li>
            <a className='menu-item'>Resume</a>

        </li>
        <li>
            <a className='menu-item'>Contact</a>

        </li>
        <button className='contact-btn' onClick={()=>{}}>
            Hire Me
        </button>
        </ul>
        
    </div>


    </div>
    </div>
  )
}

export default MobileNav
