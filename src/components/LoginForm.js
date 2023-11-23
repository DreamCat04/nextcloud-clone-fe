import React, { useState } from 'react';
import '../css/LoginForm.css'
import { useNavigate } from 'react-router-dom';


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the credentials to the backend for verification
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        // If the response is successful, redirect to the main page
        navigate('/');
      } else {
        // If the response is not successful, set an error message
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return(
    <form className="login-form" onSubmit={handleSubmit}>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div>
        <label htmlFor="username">Username</label><br/>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label><br/>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;