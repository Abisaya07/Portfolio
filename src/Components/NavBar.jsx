import React, { useState } from 'react'
import './NavBar.css'

import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <div>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className='nav-content'>
                    <h1 className='logo'>➻Portfolio.</h1>
                    <ul>
                        <li>
                            <Link to="/" className='menu-item'>Home</Link>

                        </li>
                        <li>
                            <Link to="/project" className='menu-item'>Project</Link>

                        </li>
                        <li>
                            <Link to="/resume" className='menu-item'>Resume</Link>

                        </li>
                        <li>
                            <Link to="/contact" className='menu-item'>Contact</Link>

                        </li>

                        <button className='contact-btn'>

                            <Link to="/hire" className='link-style'>
                                Hire Me
                            </Link>
                        </button>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>


                        <span className="material-icons" style={{ fontSize: "1.8rem" }}>
                            {openMenu ? "close" : "menu"}
                        </span>

                    </button>

                </div>
            </nav>
        </div>
    )
}

export default NavBar


