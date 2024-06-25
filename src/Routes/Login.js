
import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm(); // Use the form validation logic
    if (isFormValid()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  // Function to validate form inputs
  const validateForm = () => {
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }
    setErrors(validationErrors);
  };

  // Function to check if the form is valid
  const isFormValid = () => {
    return Object.values(errors).every((error) => !error);
  };

  return (
    <div className="login-container_25">
      <center>
        
        <h1>Login</h1>
      </center>
      <form onSubmit={handleSubmit}>
        <div className="form-group_25">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Your Name"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="form-group_25">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group_25">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

         <button type="submit"><Link to="/">Login</Link></button> 
         {/* Link to another page without using useHistory */}
        
      </form>
    </div>
  );
};

export default Login;


