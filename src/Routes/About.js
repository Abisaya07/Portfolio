import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { RiUser3Line } from 'react-icons/ri';
import { TiFolder } from 'react-icons/ti';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <NavBar/>
    <section id="duabt">
      <div className="duabt-header">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container duabt__container">
        <div className="duabt__me">
          <div className="duabt__me-image">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.egN6Oyc6AxyylXe19jDGCgHaEo&pid=Api&P=0&h=180"
              alt="about-me"  style={{
                width: '300px',
                height: '250px',
                borderRadius: '50%',  
              }}
              // style={{ borderRadius: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            />
          </div>
        </div>
        <div className="duabt__content">
          <div className="duabt__cards">
            <article className="duabt__card">
              <FaAward className="duabt__icon" />
              <h5>Education</h5>
              <small>Dr. D. Y. Patil Institute of Technology, Pimpri</small>
              {/* <small>B.E. Artificial Intelligence & Data Science</small> */}
            </article>

            <article className="duabt__card">
              <RiUser3Line className="duabt__icon" />
              <h5>Passionate Youtuber</h5>
              {/* <small>
                I create coding-related content on my YouTube Channel
              </small> */}
            </article>

            <article className="duabt__card">
              <TiFolder className="duabt__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <br></br>
          <p>
            I am Sonu Shriram Vishwakarma currently pursuing my B.E. in
            Artificial Intelligence And Data Science degree at Dr. D. Y. Patil
            Institute of Technology, Pimpri. 
          </p>
          <br></br>
          <Link to="/service" className="btn btn-primary">
  Let's Talk
</Link>

        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default About;