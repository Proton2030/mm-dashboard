import React, { useState } from 'react';
import axios from 'axios';

export const AdduserModal = () => {
  const [userData, setUserData] = useState({
    full_name: '',
    mobile: '',
    password: '',
    status:" ",
    gender: 'male',
    age: 0,
    marital_status: '',
    country: '',
    state: '',
    height: 0,
    weight: 0,
    body_color: '',
    eye_color: '',
    hair_color: '',
    occupation: '',
    work_place: '',
    monthly_income: '',
    education: '',
    islamic_education: '',
    salah: '',
    sawum: '',
    hajab_maintain: '',
    religious: '',
    fathers_name: '',
    fathers_occupation: '',
    mothers_name: '',
    mothers_occupation: '',
    no_of_brothers: 0,
    no_of_sisters: 0,
    total_family_member: 0,
    financial_condition: '',
    profile_image_url: '',
    partner_min_age: 0,
    partner_max_age: 0,
    partner_bodyColor: '',
    partner_min_height: 0,
    partner_max_height: 0,
    partner_min_weight: 0,
    partner_max_weight: 0,
    partner_education: '',
    partner_islamic_education: '',
    partner_salah: '',
    partner_hajab_maintain: '',
    partner_religious: '',
    partner_marital_status: '',
    partner_coutry: '',
    partner_state: '',
    message_limit: 0,
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
      <form className='w-full md:w-1/2 lg:w-1/3 p-4' onSubmit={handleSubmit}>
       <div className="flex flex-wrap">
 <label htmlFor="full_name" className="block mb-2 w-full md:w-1/4">Full Name:</label>
   <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="full_name" name="full_name"   onChange={handleChange} />
 </div>
 <div className="flex flex-wrap">
     <label htmlFor="email" className="block mb-2 w-full md:w-1/4">Email:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="email" id="email" name="email"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="mobile"className="block mb-2 w-full md:w-1/4">Mobile:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="mobile" name="mobile"  onChange={handleChange}/></div>

   <div className="flex flex-wrap">  <label htmlFor="password"className="block mb-2 w-full md:w-1/4">Password:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5" type="password" id="password" name="password"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="gender"className="block mb-2 w-full md:w-1/4">Gender:</label>
     <select id="gender" name="gender"  onChange={handleChange}>
         <option value="male">Male</option>
         <option value="female">Female</option>
    </select>
    </div>
 <div className="flex flex-wrap">
     <label htmlFor="age"className="block mb-2 w-full md:w-1/4">Age:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="number" id="age" name="age"  onChange={handleChange}/></div>

    <div className="flex flex-wrap">
     <label htmlFor="marital_status"className="block mb-2 w-full md:w-1/4">Marital Status:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="marital_status" name="marital_status"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="country"className="block mb-2 w-full md:w-1/4">Country:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="country" name="country"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="state"className="block mb-2 w-full md:w-1/4">State:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="state" name="state"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="height"className="block mb-2 w-full md:w-1/4">Height (cm):</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="number" id="height" name="height"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="weight"className="block mb-2 w-full md:w-1/4">Weight (kg):</label>
<input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="number" id="weight" name="weight"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="body_color"className="block mb-2 w-full md:w-1/4">Body Color:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="body_color" name="body_color"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="eye_color"className="block mb-2 w-full md:w-1/4">Eye Color:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="eye_color" name="eye_color"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="hair_color"className="block mb-2 w-full md:w-1/4">Hair Color:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="hair_color" name="hair_color"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="occupation"className="block mb-2 w-full md:w-1/4">Occupation:</label>
    
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="occupation" name="occupation"  onChange={handleChange}/>
     </div>
   <div className="flex flex-wrap"> 
     <label htmlFor="work_place">Work Place:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="work_place" name="work_place"  onChange={handleChange}/></div> 
     <div className="flex flex-wrap">
     <label htmlFor="monthly_income">Monthly Income:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="monthly_income" name="monthly_income"  onChange={handleChange}/>
     </div>
 <div className="flex flex-wrap">
   <label htmlFor="education">Education:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="education" name="education"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="islamic_education">Islamic Education:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="islamic_education" name="islamic_education"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="salah">Salah:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="salah" name="salah"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="sawum">Sawum:</label>
         <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="sawum" name="sawum"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="hajab_maintain">Hajab Maintain:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="hajab_maintain" name="hajab_maintain"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="religious">Religious:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="religious" name="religious"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="fathers_name">Father's Name:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="fathers_name" name="fathers_name"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="fathers_occupation">Father's Occupation:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="fathers_occupation" name="fathers_occupation"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="mothers_name">Mother's Name:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="mothers_name" name="mothers_name"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="mothers_occupation">Mother's Occupation:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="mothers_occupation" name="mothers_occupation"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="no_of_brothers">Number of Brothers:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="number" id="no_of_brothers" name="no_of_brothers"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="no_of_sisters">Number of Sisters:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="number" id="no_of_sisters" name="no_of_sisters"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="total_family_member">Total Family Members:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="number" id="total_family_member" name="total_family_member"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="financial_condition">Financial Condition:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="financial_condition" name="financial_condition"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="status">Status:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="status" name="status"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="profile_image_url">Profile Image URL:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="profile_image_url" name="profile_image_url"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
   
     <label htmlFor="partner_min_age">Partner Minimum Age:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="number" id="partner_min_age" name="partner_min_age"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="partner_max_age">Partner Maximum Age:</label>
    <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="number" id="partner_max_age" name="partner_max_age"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="partner_bodyColor">Partner Body Color:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="partner_bodyColor" name="partner_bodyColor"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="partner_min_height">Partner Minimum Height (cm):</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="number" id="partner_min_height" name="partner_min_height"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="partner_max_height">Partner Maximum Height (cm):</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="number" id="partner_max_height" name="partner_max_height"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="partner_min_weight">Partner Minimum Weight (kg):</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="number" id="partner_min_weight" name="partner_min_weight"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="partner_max_weight">Partner Maximum Weight (kg):</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="number" id="partner_max_weight" name="partner_max_weight"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="partner_education">Partner Education:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="partner_education" name="partner_education"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="partner_islamic_education">Partner Islamic Education:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="partner_islamic_education" name="partner_islamic_education"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="partner_salah">Partner Salah:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="partner_salah" name="partner_salah"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="partner_hajab_maintain">Partner Hajab Maintain:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="partner_hajab_maintain" name="partner_hajab_maintain"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
 <label htmlFor="partner_religious">Partner Religious:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="partner_religious" name="partner_religious"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="partner_marital_status">Partner Marital Status:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="partner_marital_status" name="partner_marital_status"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="partner_coutry">Partner Country:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="partner_coutry" name="partner_coutry"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
     <label htmlFor="partner_state">Partner State:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="text" id="partner_state" name="partner_state"  onChange={handleChange}/></div>
 <div className="flex flex-wrap">
   
     <label htmlFor="message_limit">Message Limit:</label>
     <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="number" id="message_limit" name="message_limit"  onChange={handleChange}/>
 </div>
    
        <input className="relative bg-gray-50ring-0 outline-none border border-neutral-500 text-neutral-900 placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500  focus:border-violet-500 block w-64 p-2.5 checked:bg-emerald-500 my-3 mx-5"type="submit" value="Submit" />
      </form>
    </div>
  );
};
