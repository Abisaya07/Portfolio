import React  from "react";


import"./index.css"


import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

// import NavBar from "./Components/NavBar";
import Home from "./Routes/Home";

import Sample7 from "./Routes/Sample7";
import Project from "./Routes/Project";

import Contact from "./Routes/Contact";
import Purchase from "./Routes/Purchase";
import HireMe from "./Components/HireMe";
import About from "./Routes/About";
import Services from "./Routes/Services";
import Builder from "./Routes/Builder";
import Projects from "./Routes/Projects";
import Accocontrol from "./Pages/Accocontrol";
import Resume from "./Routes/Resume";
import Clients from "./Routes/Clients";
import Signin from "./Components/Signin";
import Login from "./Routes/Login";
// import Contact from "./Pages/Contact";






function App() {
  return (
   <div>
  

  

   
    <BrowserRouter>
   
    <Routes>
    <Route  path="/"  element={<Home/>}  />

    <Route  path="/about"  element={<About/>}  />
    <Route  path="/project"  element={<Projects/>}  />
    <Route  path="/resume"  element={<Builder/>}  />
    <Route  path="/contact"  element={<Contact/>}  /> 
    <Route path="/purchase" element={<Purchase/>}/>
    <Route path="/hire" element={<HireMe/>}/>
    <Route path="/service" element={<Services/>}/> 
    <Route path="/faq" element={<Accocontrol/>}/>
    <Route path="/clients" element={<Clients/>}/>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/log" element={<Login/>}/>
    </Routes>
<Outlet/>
    </BrowserRouter>
    
    
    


   </div>
  );
}

export default App;

