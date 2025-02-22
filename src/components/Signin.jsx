import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.css'; // Make sure your CSS is imported

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and password are provided
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    // Hardcoded credentials for demo (replace with real authentication logic)
    if (email === 'user@example.com' && password === 'password123') {
      // Clear the error message
      setError('');

      // Store authentication status in localStorage
      localStorage.setItem('isAuthenticated', 'true');

      // Redirect to Dashboard
      navigate('/dashboard');
    } else {
      // If the credentials are invalid, show an error message
      setError('Invalid credentials, please try again');
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      {error && <p className="error-message">{error}</p>}

      {/* Link to SignUp Page */}
      <div className="links">
        <a href="/signup">Don't have an account? Sign Up</a>
      </div>

      {/* Forgot Password Link */}
      <div className="links">
        <a href="#" onClick={() => alert('Please contact support for password recovery.')}>Forgot Password?</a>
      </div>
    </div>
  );
};

export default SignIn;
