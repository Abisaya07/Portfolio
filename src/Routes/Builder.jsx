import React from 'react';
import Body from '../Pages/Body';
import Header from '../Pages/Header'; 
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
const Builder = () => {
  return (
    <div>
      <NavBar/>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default Builder;

