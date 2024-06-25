// SignIn.js
import React, { useState } from 'react';
import './Signin.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const Signin = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCreateAccount = () => {
    // Implement your logic to create an account
    console.log('Account created!');
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleCreateAccount}>
          <Link to="/">
          Create Account
          </Link>
        </button>
        <Link to="/log">Already an existing user?</Link>
      </form>
    </div>
  );
};

export default Signin;
