

import React from "react";
import { useNavigate } from "react-router-dom";
import "./HireMe.css";

const HireMe = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      navigate("/");
    event.preventDefault();
    };
  return (
    <div className="signup-container">
      <h2>Sign Up for Hiring</h2>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="position">Desired Position:</label>
        <input type="text" id="position" name="position" required />

        <label htmlFor="resume">Upload Resume:</label>
        <input type="file" id="resume" name="resume" accept=".pdf, .doc, .docx" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HireMe;
