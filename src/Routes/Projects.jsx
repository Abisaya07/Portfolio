import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';
import { Zoom } from 'react-awesome-reveal';
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
// import Clients from './Clients';

const Projects = () => {
    return (
        <div>
            <NavBar />
            <div>
                <Container id='project'>
                    <Zoom>
                        <h1 className="h13">Recent <span className="green">Projects</span></h1>
                        <p className="p3">A well-optimized project page can enhance your website's visibility on search engines, making it easier for potential clients or employers to find you.</p><br></br>
                    </Zoom>
                    <Slide>
                        <SliderComp />
                    </Slide><br></br>

                    <button className="lbt">


                        <Link to="/clients" className='abt' > Review</Link>
                    </button>
                    <button className="lbt">
                        <Link to="/purchase" className='abt' > Purchase</Link>
                        </button>
                </Container><br></br>


            </div>
            <Footer />
        </div>
    )
}

export default Projects;

const Container = styled.div`

    width: 100%;
    max-width: 1600px;
    height:698px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    background-color:#130f2a;
    .lbt {
        margin-right: 10px; /* Adjust the margin as needed */
        transition: background-color 0.3s ease; /* Add a smooth transition effect */
      }
      
      .lbt:hover {
        background-color: rgba(0, 0, 0, 0.1); /* Adjust the transparency as needed */
      }
      
      /* Other styles for your buttons */
      
      

    @media(max-width: 840px){
        width: 90%;
        
    }
    .h13{
        font-size: 2.9rem;
        color:violet;
    }
    

    .p3{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 1.1rem;
        color:white;
        @media(max-width : 500px){
            width: 90%;
        }
        
          
          /* Other styles for your buttons */
          
    }
`

const Slide = styled.div``