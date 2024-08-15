import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from './Footer';
import '../css/Login.css'

function Login() {
  const [credentials, setCredentials] = useState({ uname: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/login', credentials)
      .then(response => {
        // Handle successful login, redirect to dashboard
      })
      .catch(error => {
        console.error("There was an error logging in!", error);
      });
  };

  return (
    <div>
      <div className="container mt-5">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" name="uname" value={credentials.uname} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name="password" value={credentials.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <p className='reg'>Don't have an account <a href='/wanderershub/register'>Register</a></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
