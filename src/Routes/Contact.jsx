import React from 'react';
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa';
import './Contact.css';
import { Button } from '@mui/material';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
      <div>
        <NavBar/>
        
        <section className='contact'>
            <h2 className='section-title'>Get In <span>Touch</span></h2>
            <div className='contact-container'>
                <div className='contact-info'>
                    <h3 className='contact-title'>Don't be Shy!</h3>
                    <p className='contact-description'>
                        Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                    <div className='info-item'>
                        <FaEnvelopeOpen className='info-icon' />
                        <div>
                            <span className='info-title'>Mail me</span>
                            <h4 className='info-desc'>example@gmail.com</h4>
                        </div>
                    </div>
                    <div className='info-item'>
                        <FaPhoneSquareAlt className='info-icon' />
                        <div>
                            <span className='info-title'>Call me</span>
                            <h4 className='info-desc'>+1234567890</h4>
                        </div>
                    </div>
                    <div className='contact-socials'>
                        <a href="https://facebook.com" className='contact-social-link'>
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" className='contact-social-link'>
                            <FaTwitter />
                        </a>
                        <a href="https://youtube.com" className='contact-social-link'>
                            <FaYoutube />
                        </a>
                    </div>
                </div>
                <form className='contact-form'>
                    <input type='text' placeholder='Your Name' className='form-control' />
                    <input type='email' placeholder='Your Email' className='form-control' />
                    <input type='text' placeholder='Your Subject' className='form-control' />
                  
                   
                    <Button href="https://cdn.dribbble.com/users/428055/screenshots/5657587/sending-mi.gif" variant="contained" color="success" className='pulse-animation'>SEND Message</Button>
                    
                </form>
               

            </div>
            
<h2>For Further queries...</h2>
            <button>
              <Link to="/faq">Ask?
              </Link>
              </button>
        </section>
        
<Footer/>
        </div>
    );
};

export default Contact;