import React, { useState } from 'react';
import InputField from './components/InputField';
import Countdown from './components/Countdown';
function RegistrationForm() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: '',
    email: "",
    password: ""
  });
  const [isEmpty, setIsEmpty] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(userDetails).some(value => value.trim() === '')) {
      alert('Please fill all fields properly.');
      setIsEmpty(prevState => ({
        ...prevState,
        firstName: userDetails.firstName.trim() === '',
        lastName: userDetails.lastName.trim() === '',
        email: userDetails.email.trim() === '',
        password: userDetails.password.trim() === ''
      }));
      return;
    }
    alert('Registration Successful!! ');
    console.log(userDetails);
    setUserDetails({
      firstName: "",
      lastName: '',
      email: "",
      password: "",
    });
    setIsEmpty({
      firstName: false,
      lastName: false,
      email: false,
      password: false
    });
  };

  const handleUserData = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevValue => ({ ...prevValue, [name]: value }));
    setIsEmpty(prevState => ({
      ...prevState,
      [name]: false
    }));
  };

  return (
    <div className='container'>
    <div className='formContainer'>
      <form onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <InputField
          type="text"
          Label="First Name"
          name="firstName"
          value={userDetails.firstName}
          handleUserData={handleUserData}
          isEmpty={isEmpty.firstName}
        />
        <InputField
          type="text"
          Label="Last Name"
          name="lastName"
          
          value={userDetails.lastName}
          handleUserData={handleUserData}
          isEmpty={isEmpty.lastName}
        />
        <InputField
          type="email"
          Label=" Email - Id "
          name="email"
          marginRight={true}
          
          value={userDetails.email}
          handleUserData={handleUserData}
          isEmpty={isEmpty.email}
        />
        <InputField
          type="password"
          Label="Password "
          name="password"
          marginRight={true}
          
          value={userDetails.password}
          handleUserData={handleUserData}
          isEmpty={isEmpty.password}
        />
       <div className='register-container'>
       <button type="submit" className='register-button'>Register</button>
       </div>
      </form>
      <Countdown />
      
    </div>
    
    </div>
    
  );

}

export default RegistrationForm;

