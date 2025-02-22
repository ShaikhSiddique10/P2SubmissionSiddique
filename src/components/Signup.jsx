import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css'; // Import the updated CSS

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Validate user input (Basic validation example)
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Example of a simple signup logic (use your API here)
    if (email && password === confirmPassword) {
      // If signup is successful, redirect to the SignIn page
      navigate('/signin'); // Updated redirect to SignIn page after successful signup
    } else {
      setError('Signup failed, please try again');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <div className="links">
        <a href="/signin">Already have an account? Sign In</a>
      </div>
    </div>
  );
}

export default SignUp;
