import React, { useState } from 'react';
import axios from 'axios';

export const AdduserModal = () => {
  const [userData, setUserData] = useState({
    full_name: '',
    mobile: '',
    password: '',
    status:"ACTIVE",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8989/api/v1/auth/signup', userData);
      console.log('User signed up successfully:', response.data);
    } catch (error) {
      console.error('Error signing up user:', error);
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="full_name" value={userData.full_name} onChange={handleChange} />
        </label>
        <br />
        <label>
        mobile:
          <input type="mobile" name="mobile" value={userData.mobile} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={userData.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
