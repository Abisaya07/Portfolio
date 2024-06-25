import React, { useRef } from 'react'
import Slider from 'react-slick';
import image1 from "../utils/ai1.jpg"
import image2 from "../utils/book.jpg"
import image3 from "../utils/c++.jpg"
import image4 from "../utils/ll.jpg"
import image5 from "../utils/sens.png"
import image6 from "../utils/ll.jpg"

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components'; 

import Project from './Project';
let data = [
    {
        img : image1,
        disc : "SmartAssistant is an advanced AI project designed to enhance user productivity and streamline daily tasks. ",
        demo:"https://www.youtube.com/watch?v=hYv6BM2fWd8&list=PLd0qRSEDFQI7DgB5BKHQrryFlR02n1bK-",
        source:"https://github.com/topics/artificial-intelligence-projects",
        review:"/"
      },
    {
        img : image2,
        disc : "The Online Book Shopping Store to manage, buy, add, remove and sell books. Book name and Quantity selection..",
        "demo": "https://www.youtube.com/watch?v=hYv6BM2fWd8&list=PLd0qRSEDFQI7DgB5BKHQrryFlR02n1bK-",
        "source": "https://github.com/shashirajraja/onlinebookstore"
    },
    {
       img:image3,
       disc : "This is a project made to learn the algorithms in c++.This repository contains various C++ Programs.",
       "demo":"https://www.youtube.com/watch?v=hYv6BM2fWd8&list=PLd0qRSEDFQI7DgB5BKHQrryFlR02n1bK-",
      "source": "https://www.github.com"
    },
    {
         img:image4,
        disc : "This is a project made to learn the latest languages by building an app.",
        "demo": "https://www.youtube.com/watch?v=hYv6BM2fWd8&list=PLd0qRSEDFQI7DgB5BKHQrryFlR02n1bK-",
        "source": "https://www.github.com"
    },
    {
        img : image5,
        disc : "SmartAssistant is an advanced AI project designed to enhance user productivity and streamline daily tasks. ",
        demo:"https://www.youtube.com/watch?v=hYv6BM2fWd8&list=PLd0qRSEDFQI7DgB5BKHQrryFlR02n1bK-",
        source:"https://github.com/topics/artificial-intelligence-projects"
      },
      {
        img : image6,
        disc : "SmartAssistant is an advanced AI project designed to enhance user productivity and streamline daily tasks. ",
        demo:"https://www.youtube.com/watch?v=hYv6BM2fWd8&list=PLd0qRSEDFQI7DgB5BKHQrryFlR02n1bK-",
        source:"https://github.com/topics/artificial-intelligence-projects"
      },
    
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project  item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
     {/* <img src="src/image/camera.jpg"/> */}
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 3rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`