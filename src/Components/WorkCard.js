import "./WorkCardStyles.css";
import React from 'react'
import pur1 from "./pur1.png"
import pur2 from "./pur2.jpg"

import { NavLink } from "react-router-dom";
const WorkCard = () => {
  return (
    <div className="=work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-conatiner">
        <div className="project-card">
          <img src={pur1}alt="img"/>
          <h2 className="project-title">Ecommerce Website Design</h2>
          <div className="pro-details">
            <p>Creating an effective and engaging eCommerce web design is essential for success in the competitive online marketplace. A well-crafted design not only captures the attention of potential customers but also provides a seamless and intuitive shopping experience. From visually appealing product displays to user-friendly navigation, our eCommerce web design prioritizes both aesthetics and functionality. We understand the importance of a responsive layout that adapts to various devices, ensuring a consistent and enjoyable shopping journey for users on desktops, tablets, and smartphones.</p>
            <div className="pro-btns" >
              <button>
              <NavLink to="https://brandcurb.com/en/services/website-design-development/?gad_source=1&gclid=Cj0KCQiA5-uuBhDzARIsAAa21T_Uwn58ytqHBW5JgkttEhN4x-cCMNLE3KGt2sBf7bI4mpgmBYnU0oMaAktjEALw_wcB" className="btn">Buy Now</NavLink>
              </button>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pur2}alt="img"/>
          <h2 className="project-title">Dynamic Website Design</h2>
          <div className="pro-details">
            <p>Dynamic web design is at the forefront of modern digital experiences, offering a dynamic and interactive platform that adapts to user behavior in real-time. Our approach to dynamic web design goes beyond static content, providing users with an immersive and personalized journey. Through innovative technologies and dynamic content delivery, we create websites that respond to user inputs, delivering a tailored experience based on individual preferences.</p>
            <div className="pro-btns" >
            <button>
              <NavLink to="https://www.ubuy.co.in/brand/dynamic-design-house" className="btn">Buy Now</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
