import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import "./Footer.css"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20}style={{color:"#fff",marginRight:"2rem"}}/>
                <div>
                    <p>123 Housing Society.</p>
                    <p>Coimbatore </p>
                </div>
            </div>
            <div className="phone">
                <FaPhone size={20}style={{color:"#fff",marginRight:"2rem"}}/>
            3456789987
            
            </div><br></br>
            <div className="email">
               <FaMailBulk size={20}style={{color:"#fff",marginRight:"2rem"}}/>
            dfgyvhubijnk@gmail.com
            
            </div>
        </div>
        <div className="right">
            <h4>
                About the company
            </h4>
            <p>I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to explore my portfolio and get in touch. Let's create something amazing together!

Thank you for stopping by.</p><br>
</br>
            <div className="socials">
            <FaFacebook size={30}style={{color:"#fff",marginRight:"1rem"}}/>
            <FaTwitter size={30}style={{color:"#fff",marginRight:"1rem"}}/>
            <FaLinkedin size={30}style={{color:"#fff",marginRight:"1rem"}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer