import React from 'react'
import { useState } from 'react';

function Editpage() {
    const [FormData, setFormData] = useState({
        full_name: '',
        email: '',
        mobile: '',
        password: '',
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
        status: '',
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
  return (

<div className='flex flex-wrap '>
<form action="submit_htmlForm.php" className='w-full md:w-1/2 lg:w-1/3 p-4' method="post">
  
<div className="flex flex-wrap">
  <label htmlFor="full_name" className="block mb-2 w-full md:w-1/4">Full Name:</label>
  <input type="text" id="full_name" name="full_name" className="w-full md:w-3/4 mb-4 p-2" required />
</div>
<div className="flex flex-wrap">
    <label htmlFor="email" className="block mb-2 w-full md:w-1/4">Email:</label>
    <input type="email" id="email" name="email" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="mobile"className="block mb-2 w-full md:w-1/4">Mobile:</label>
    <input type="text" id="mobile" name="mobile" required/></div>

  <div className="flex flex-wrap">  <label htmlFor="password"className="block mb-2 w-full md:w-1/4">Password:</label>
    <input type="password" id="password" name="password" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="gender"className="block mb-2 w-full md:w-1/4">Gender:</label>
    <select id="gender" name="gender" required>
        <option value="male">Male</option>
        <option value="female">Female</option>
   </select>
   </div>
<div className="flex flex-wrap">
    <label htmlFor="age"className="block mb-2 w-full md:w-1/4">Age:</label>
    <input type="number" id="age" name="age" required/></div>

   <div className="flex flex-wrap">
    <label htmlFor="marital_status"className="block mb-2 w-full md:w-1/4">Marital Status:</label>
    <input type="text" id="marital_status" name="marital_status" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="country"className="block mb-2 w-full md:w-1/4">Country:</label>
    <input type="text" id="country" name="country" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="state"className="block mb-2 w-full md:w-1/4">State:</label>
    <input type="text" id="state" name="state" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="height"className="block mb-2 w-full md:w-1/4">Height (cm):</label>
    <input type="number" id="height" name="height" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="weight"className="block mb-2 w-full md:w-1/4">Weight (kg):</label>
    <input type="number" id="weight" name="weight" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="body_color"className="block mb-2 w-full md:w-1/4">Body Color:</label>
    <input type="text" id="body_color" name="body_color" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="eye_color"className="block mb-2 w-full md:w-1/4">Eye Color:</label>
    <input type="text" id="eye_color" name="eye_color" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="hair_color"className="block mb-2 w-full md:w-1/4">Hair Color:</label>
    <input type="text" id="hair_color" name="hair_color" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="occupation"className="block mb-2 w-full md:w-1/4">Occupation:</label>
    
    <input type="text" id="occupation" name="occupation" required/>
    </div>
  <div className="flex flex-wrap"> 
    <label htmlFor="work_place">Work Place:</label>
    <input type="text" id="work_place" name="work_place" required/></div> 
    <div className="flex flex-wrap">
    <label htmlFor="monthly_income">Monthly Income:</label>
    <input type="text" id="monthly_income" name="monthly_income" required/>
    </div>
<div className="flex flex-wrap">
  <label htmlFor="education">Education:</label>
    <input type="text" id="education" name="education" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="islamic_education">Islamic Education:</label>
    <input type="text" id="islamic_education" name="islamic_education" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="salah">Salah:</label>
    <input type="text" id="salah" name="salah" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="sawum">Sawum:</label>
    <input type="text" id="sawum" name="sawum" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="hajab_maintain">Hajab Maintain:</label>
    <input type="text" id="hajab_maintain" name="hajab_maintain" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="religious">Religious:</label>
    <input type="text" id="religious" name="religious" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="fathers_name">Father's Name:</label>
    <input type="text" id="fathers_name" name="fathers_name" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="fathers_occupation">Father's Occupation:</label>
    <input type="text" id="fathers_occupation" name="fathers_occupation" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="mothers_name">Mother's Name:</label>
    <input type="text" id="mothers_name" name="mothers_name" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="mothers_occupation">Mother's Occupation:</label>
    <input type="text" id="mothers_occupation" name="mothers_occupation" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="no_of_brothers">Number of Brothers:</label>
    <input type="number" id="no_of_brothers" name="no_of_brothers" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="no_of_sisters">Number of Sisters:</label>
    <input type="number" id="no_of_sisters" name="no_of_sisters" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="total_family_member">Total Family Members:</label>
    <input type="number" id="total_family_member" name="total_family_member" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="financial_condition">Financial Condition:</label>
    <input type="text" id="financial_condition" name="financial_condition" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="status">Status:</label>
    <input type="text" id="status" name="status" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="profile_image_url">Profile Image URL:</label>
    <input type="text" id="profile_image_url" name="profile_image_url" required/></div>
<div className="flex flex-wrap">
   
    <label htmlFor="partner_min_age">Partner Minimum Age:</label>
    <input type="number" id="partner_min_age" name="partner_min_age" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="partner_max_age">Partner Maximum Age:</label>
    <input type="number" id="partner_max_age" name="partner_max_age" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="partner_bodyColor">Partner Body Color:</label>
    <input type="text" id="partner_bodyColor" name="partner_bodyColor" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="partner_min_height">Partner Minimum Height (cm):</label>
    <input type="number" id="partner_min_height" name="partner_min_height" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="partner_max_height">Partner Maximum Height (cm):</label>
    <input type="number" id="partner_max_height" name="partner_max_height" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="partner_min_weight">Partner Minimum Weight (kg):</label>
    <input type="number" id="partner_min_weight" name="partner_min_weight" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="partner_max_weight">Partner Maximum Weight (kg):</label>
    <input type="number" id="partner_max_weight" name="partner_max_weight" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="partner_education">Partner Education:</label>
    <input type="text" id="partner_education" name="partner_education" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="partner_islamic_education">Partner Islamic Education:</label>
    <input type="text" id="partner_islamic_education" name="partner_islamic_education" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="partner_salah">Partner Salah:</label>
    <input type="text" id="partner_salah" name="partner_salah" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="partner_hajab_maintain">Partner Hajab Maintain:</label>
    <input type="text" id="partner_hajab_maintain" name="partner_hajab_maintain" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="partner_religious">Partner Religious:</label>
    <input type="text" id="partner_religious" name="partner_religious" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="partner_marital_status">Partner Marital Status:</label>
    <input type="text" id="partner_marital_status" name="partner_marital_status" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="partner_coutry">Partner Country:</label>
    <input type="text" id="partner_coutry" name="partner_coutry" required/></div>
<div className="flex flex-wrap">
    <label htmlFor="partner_state">Partner State:</label>
    <input type="text" id="partner_state" name="partner_state" required/></div>
<div className="flex flex-wrap">
   
    <label htmlFor="message_limit">Message Limit:</label>
    <input type="number" id="message_limit" name="message_limit" required/>
</div>
    
    <input type="submit" value="Submit"/>
</form>

</div>
  )
}

export default Editpage