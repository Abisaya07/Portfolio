import React from 'react'
import NavBar from '../Components/NavBar'


import Hero from '../Components/Hero'
import Skills from '../Components/Skills'
import Footer from '../Components/Footer'
import WorkExperience from '../Components/WorkExperience'
import ContactMe from '../Components/ContactMe'



const Home = () => {
  return (
    <div>
    <div className='conatiner'>
      <NavBar/>
      <Hero/>
      <Skills/>
      <WorkExperience/>
      <br></br>
      <ContactMe/>
      </div>
      <Footer/>
    
    </div>
  )
}

export default Home

