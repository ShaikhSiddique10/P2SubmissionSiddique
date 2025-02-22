import React, { useState } from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Remove the authentication status from localStorage
    localStorage.removeItem('isAuthenticated');
    
    // Redirect to the Welcome Page after logout
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="logo">Online Auction</div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="/" className="active">Home</a>
        <a href="/signup">Sign Up</a>
        <a href="/signin">Sign In</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/post-auction">Post Auction</a>
        <button className="logout-button" onClick={handleLogout}>Log Out</button>
      </div>
      <div className="mobile-menu" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
    </nav>
  );
};

export default Navbar;
