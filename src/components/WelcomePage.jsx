// src/WelcomePage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css'; // Include the CSS

function WelcomePage() {
  const navigate = useNavigate(); // For navigation

  const handleSignUp = () => {
    // Redirect to SignUp page
    navigate('/signup');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h1>Welcome to Our Auction Application!</h1>
        <p>We are glad to have you. Please sign up to start your journey!</p>
        <button onClick={handleSignUp} className="welcome-button">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
