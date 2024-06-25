import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Project = (props) => {
  const {img ,disc ,demo ,source,review} = props.item;

  return (
    <Container className='project'>
      <img src={img} alt="project" className="img" />
      <div className="disc">
        <h1>Description</h1>
        <p>{disc}</p>
        <a href={demo}>Demo</a>
        <a href={source}>Source</a>
       
      </div>
    </Container>
  );
}

export default Project;

const Container = styled.div`
  height: 20rem;
  background-color:#4e5156 ;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor:pointer;
  position: relative;
  overflow:hidden;
  

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 900ms ease-in-out;
    
  }

  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -12rem;
    text-align: left;
    padding: 2.7rem;
    background: linear-gradient(rgba(0,0,0, 0.600), rgba(0,0,0, 0.900));
    transition: all 400ms ease-in-out;
   

    h1 {
      font-size: 1rem;
    }

    p {
      width: 90%;
      font-size: 0.8rem;

      a {
        margin-left: 0.4rem;
        color: red;
      }
    }
  }

  :hover > .img {
    transform: scale(1.3);
  }

  :hover > .disc {
    bottom: 0;
  }
  a{
    text-decoration:none;
    color:black;
    font-size: 15px;
    font-weight: 100;
    border-radius: 30px;
    background:rgb(207, 218, 215);

    padding: 1px 12px; 
}`;