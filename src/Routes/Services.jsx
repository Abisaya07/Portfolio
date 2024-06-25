import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './services.css';
import { FaWpexplorer } from 'react-icons/fa';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
const Services = () => {
  const [expanded, setExpanded] = useState(false);

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  const handleLearnMoreClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
        <NavBar/>
    <motion.section
      className="services section"
      id="services"
      initial="hidden"
      animate="visible"
    >
      <div className="container3">
        <h2 className="section-title">Services</h2>
        <motion.div
          className={`services-container3 grid ${expanded ? 'expanded' : ''}`}
          variants={serviceVariants}
        >
         
          <div className="decorative-line"></div>
          <div className="decorative-circle"></div>

          <motion.div className="service" whileHover={{ scale: 1.05 }}>
            <i className="uil uil-web-grid service-icon"></i>
            <h2 className="service-title3">Developer</h2>
            <p className="service-description">"Developer" is a term that refers to a person who maintains code to create applications.
     
            </p>
            {expanded && (
              <div className="additional-content">
                {/* Add additional content here */}
                <p>        I play a crucial role in the field of software development in various areas.</p>
              </div>
            )}
            <motion.button
              className="service-button"
              whileHover={{ backgroundColor: '#2980b9' }}
              onClick={handleLearnMoreClick}
            >
              {expanded ? 'Show Less' : 'Learn More'}{' '}
              <i className={`uil uil-arrow-${expanded ? 'up' : 'right'} service-button-icon`}></i>
            </motion.button>
          </motion.div>
          <motion.div className="service" whileHover={{ scale: 1.05 }}>
            <i className="uil uil-web-grid service-icon"></i>
            <h3 className="service-title">Web Design</h3><br></br>
            <p className="service-description">
              I create modern and responsive web designs tailored to your business needs.
            </p>
            {expanded && (
              <div className="additional-content">
                {/* Add additional content here */}
               
                <p>It is the art of making websites look and feel good to the user  </p>
               
              </div>
            )}
            <motion.button
              className="service-button"
              whileHover={{ backgroundColor: '#2980b9' }}
              onClick={handleLearnMoreClick}
            >
              {expanded ? 'Show Less' : 'Learn More'}{' '}
              {/* <i className={uil uil-arrow-${expanded ? 'up' : 'right'} service-button-icon}></i> */}
            </motion.button>
          </motion.div>

          <motion.div className="service" whileHover={{ scale: 1.05 }}>
            <i className="uil uil-web-grid service-icon"></i>
            <FaWpexplorer className="fcon"/>
            <h3 className="service-title">BackEnd Developer</h3>
            <p className="service-description">
              I create modern and responsive web designs tailored to your business needs.
            </p>
            {expanded && (
              <div className="additional-content">
                {/* Add additional content here */}
                <p>They often work with languages like Java, Python, Ruby, or PHP.</p>
              </div>
            )}
            <motion.button
              className="service-button"
              whileHover={{ backgroundColor: '#2980b9' }}
              onClick={handleLearnMoreClick}
            >
              {expanded ? 'Show Less' : 'Learn More'}{' '}
              {/* <i className={uil uil-arrow-${expanded ? 'up' : 'right'} service-button-icon}></i> */}
            </motion.button>
          </motion.div>

          <motion.div className="service" whileHover={{ scale: 1.05 }}>
            <i className="uil uil-web-grid service-icon"></i>
            <h3 className="service-title">Full-Stack Developer</h3>
            <p className="service-description">
              I create modern and responsive web designs tailored to your business needs.
            </p>
            {expanded && (
              <div className="additional-content">
                {/* Add additional content here */}
                <p>Skilled in both front-end and back-end development, capable of working on all aspects of a software project.</p>
              </div>
            )}
            <motion.button
              className="service-button"
              whileHover={{ backgroundColor: '#2980b9' }}
              onClick={handleLearnMoreClick}
            >
              {expanded ? 'Show Less' : 'Learn More'}{' '}
              
            </motion.button>
          </motion.div>


        </motion.div> 
      </div>
    </motion.section>
    <Footer/>
    </div>
  );
};

export default Services;
