import React from 'react';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'

function Login() {
  const navigate = useNavigate();
  const handleLogin = (data) => {
    // Handle the response from the backend
    console.log('Login successful:', data);
    navigate('/');
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <LoginForm onLogin={handleLogin}/>
    </div>
  );
};

export default Login;