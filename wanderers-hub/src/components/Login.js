import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/Login.css';

function Login() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/users/login', null, {
        params: credentials
      });
  
      if (response.status === 200) {
        const user = response.data;
  
        if (user.userType === 'ADMIN') {
          navigate('/wanderershub/admin');
        } else if (user.userType === 'CLIENT') {
          navigate('/wanderershub/home');
        } else if (user.userType === 'GUIDE') {
          navigate('/wanderershub/guide');
        }
      }
    } catch (error) {
      console.error('Login error:', error.response);
      setErrorMessage('Invalid email or password');
    }
  };
  

  return (
    <div>
      <div className="container mt-5">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          <button type="submit" className="btn btn-primary">Login</button>
          <p className="reg">Don't have an account? <a href="/wanderershub/register">Register</a></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
