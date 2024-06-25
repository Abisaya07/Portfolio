import React from 'react';
import img1 from"./img1.png"
import img2 from"./img2.png"
import img3 from"./img3.png"
import css from"./css.png"
import img11 from"./img11.avif"
import './Hero.css'
import { Link } from 'react-router-dom';
const Hero = () => {
  return (

      <section className='hero-container'>
        <div className='hero=content'>
        <h2 style={{ fontSize: '3rem' }}>Building Digital Experiences That Inspire</h2><br></br>
            <p>Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions</p><br></br>
            <button >
                <Link to="/about" className='abi' > Learn More</Link></button>
        </div>
        <div className='hero-img'>
            <div>
                <div className='tech-icons'>
                     <img src={img1} alt="" style={{ width: '40px', height: '40px' }} />
                </div>
                <img
  src="https://img.freepik.com/premium-photo/anime-girl-black-dress-long-black-hair-beautiful-purple-flower-her-hair-blue-eyes-overgrow_920873-336.jpg"
  alt=""
  style={{
    width: '400px',
    height: '450px',
    borderRadius: '70px',  
  }}
/>

            </div>
            
            <div>
                <div className='tech-icon'>
                <img src={img2} alt="" style={{ width: '40px', height: '40px' }} />
                     </div>           
                <div className='tech-icon'>
                <img src={css} alt="" style={{ width: '40px', height: '40px' }} />
                     </div>           
                <div className='tech-icon'>
                <img src={img3} alt="" style={{ width: '40px', height: '40px' }} />
                     </div>           
                    </div>
        </div>
     
      </section>
   
  )
}

export default Hero