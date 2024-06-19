import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginForm = ({ isAuthenticated, setIsAuthenticated }) => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    if (userDetails.email.trim() === '' || userDetails.password.trim() === '') {
      alert('Please fill in both email and password.');
      return;
    }
    console.log("User Details:", userDetails);
    const isValidUser = true; 
    if (isValidUser) {
      
      setIsAuthenticated(true);
      localStorage.setItem("loginPage",true);
      alert("Login successful!!");
      navigate('/home');
    } else {
      alert('Invalid email or password. Please try again.');
    }

    //
    setUserDetails({ email: "", password: "" });
  };

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevValue => ({ ...prevValue, [name]: value }));
  };

  return (
    <div className='main-login-container'>
      <h1 className='Welcome-msg'>Welcome to MyMoneyManager</h1>
      <h2 className='Welcome-msg'>The correct place for safe & security</h2>
      <div className='Login-container'>
        {!isAuthenticated && (
          <>
            <div className='Login-formContainer'>
              <form onSubmit={handleLogin}>
                <h2 className='main-heading'>Login Form</h2>
                <div className="login-input-group">
                  <label htmlFor="email">Email - Id : </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userDetails.email}
                    onChange={handleUserData}
                  />
                </div>
                <div className="login-input-group">
                  <label htmlFor="password">Password : </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={userDetails.password}
                    onChange={handleUserData}
                  />
                </div>
                <div className='login-container'>
                  <button type="submit" className='login-button'>Login</button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
