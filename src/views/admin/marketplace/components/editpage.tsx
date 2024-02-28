import React, { useEffect, useState } from "react";
import axios from "axios";

function Editpage({ userObjectId, userDetails }: any) {
  const [FormData, setFormData] = useState({
    full_name: "",
    email: "",
    mobile: userDetails.mobile,
    password: "",
    is_verified: false,
    gender: "male",
    age: 0,
    marital_status: "",
    country: "",
    state: "",
    height: 0,
    weight: 0,
    body_color: "",
    eye_color: "",
    hair_color: "",
    occupation: "",
    work_place: "",
    monthly_income: "",
    education: "",
    islamic_education: "",
    salah: "",
    sawum: "",
    hajab_maintain: "",
    religious: "",
    fathers_name: "",
    fathers_occupation: "",
    mothers_name: "",
    mothers_occupation: "",
    no_of_brothers: 0,
    no_of_sisters: 0,
    total_family_member: 0,
    financial_condition: "",
    status: "",
    profile_image_url: "",
    partner_min_age: 0,
    partner_max_age: 0,
    partner_bodyColor: "",
    partner_min_height: 0,
    partner_max_height: 0,
    partner_min_weight: 0,
    partner_max_weight: 0,
    partner_education: "",
    partner_islamic_education: "",
    partner_salah: "",
    partner_hajab_maintain: "",
    partner_religious: "",
    partner_marital_status: "",
    partner_coutry: "",
    partner_state: "",
    message_limit: 0,
  });

  useEffect(() => {
    if (userDetails) {
      // Update FormData with userDetails if available
      setFormData((prevUserData) => ({
        ...prevUserData,
        ...userDetails,
      }));
    }
  }, [userDetails]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.patch(
        "http://ec2-65-1-183-77.ap-south-1.compute.amazonaws.com:8181/api/v1/user/update-user-details",
        {
          userDetails: FormData,
          userObjectId: userObjectId,
        }
      );
      if (response.status === 200) {
        console.log("User details updated successfully:", response.data.result);
      } else {
        console.error("Failed to update user details:", response.status);
      }
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2 className="mt-32 text-4xl font-semibold text-gray-800">Edit User</h2>
      <form className="w-full p-4 md:w-1/2 lg:w-1/3" onSubmit={handleSubmit}>
        <div className="flex flex-wrap">
          <label htmlFor="full_name" className="mb-2 block w-full md:w-1/4">
            Full Name:
          </label>
          <input
            value={FormData?.full_name}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="full_name"
            name="full_name"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="email" className="mb-2 block w-full md:w-1/4">
            Email:
          </label>
          <input
            value={FormData?.email}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="mobile" className="mb-2 block w-full md:w-1/4">
            Mobile:
          </label>
          <input
            value={FormData?.mobile}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="mobile"
            name="mobile"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-wrap">
          <label htmlFor="password" className="mb-2 block w-full md:w-1/4">
            Password:
          </label>
          <input
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-wrap">
          <label htmlFor="gender" className="mb-2 block w-full md:w-1/4">
            Gender:
          </label>
          <select
            value={FormData?.gender}
            id="gender"
            name="gender"
            onChange={handleChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="age" className="mb-2 block w-full md:w-1/4">
            Age:
          </label>
          <input
            value={FormData?.age}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="number"
            id="age"
            name="age"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-wrap">
          <label
            htmlFor="marital_status"
            className="mb-2 block w-full md:w-1/4"
          >
            Marital Status:
          </label>
          <input
            value={FormData?.marital_status}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="marital_status"
            name="marital_status"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="country" className="mb-2 block w-full md:w-1/4">
            Country:
          </label>
          <input
            value={FormData?.country}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="country"
            name="country"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="state" className="mb-2 block w-full md:w-1/4">
            Dist:
          </label>
          <input
            value={FormData?.state}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="state"
            name="state"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="height" className="mb-2 block w-full md:w-1/4">
            Height (cm):
          </label>
          <input
            value={FormData?.height}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="number"
            id="height"
            name="height"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="weight" className="mb-2 block w-full md:w-1/4">
            Weight (kg):
          </label>
          <input
            value={FormData?.weight}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="number"
            id="weight"
            name="weight"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="body_color" className="mb-2 block w-full md:w-1/4">
            Body Color:
          </label>
          <input
            value={FormData?.body_color}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="body_color"
            name="body_color"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="eye_color" className="mb-2 block w-full md:w-1/4">
            Eye Color:
          </label>
          <input
            value={FormData?.eye_color}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="eye_color"
            name="eye_color"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="hair_color" className="mb-2 block w-full md:w-1/4">
            Hair Color:
          </label>
          <input
            value={FormData?.hair_color}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="hair_color"
            name="hair_color"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="occupation" className="mb-2 block w-full md:w-1/4">
            Occupation:
          </label>

          <input
            value={FormData?.occupation}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="occupation"
            name="occupation"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="work_place">Work Place:</label>
          <input
            value={FormData?.work_place}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="work_place"
            name="work_place"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="monthly_income">Monthly Income:</label>
          <input
            value={FormData?.monthly_income}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="monthly_income"
            name="monthly_income"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="education">Education:</label>
          <input
            value={FormData?.education}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="education"
            name="education"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="islamic_education">Islamic Education:</label>
          <input
            value={FormData?.islamic_education}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="islamic_education"
            name="islamic_education"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="salah">Salah:</label>
          <input
            value={FormData?.salah}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="salah"
            name="salah"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="sawum">Sawum:</label>
          <input
            value={FormData?.sawum}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="sawum"
            name="sawum"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="hajab_maintain">Hajab Maintain:</label>
          <input
            value={FormData?.hajab_maintain}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="hajab_maintain"
            name="hajab_maintain"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="religious">Religious:</label>
          <input
            value={FormData?.religious}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="religious"
            name="religious"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="fathers_name">Father's Name:</label>
          <input
            value={FormData?.fathers_name}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="fathers_name"
            name="fathers_name"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="fathers_occupation">Father's Occupation:</label>
          <input
            value={FormData?.fathers_occupation}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="fathers_occupation"
            name="fathers_occupation"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="mothers_name">Mother's Name:</label>
          <input
            value={FormData?.mothers_name}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="mothers_name"
            name="mothers_name"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="mothers_occupation">Mother's Occupation:</label>
          <input
            value={FormData?.mothers_occupation}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="mothers_occupation"
            name="mothers_occupation"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="no_of_brothers">Number of Brothers:</label>
          <input
            value={FormData?.no_of_brothers}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="number"
            id="no_of_brothers"
            name="no_of_brothers"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="no_of_sisters">Number of Sisters:</label>
          <input
            value={FormData?.no_of_sisters}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="number"
            id="no_of_sisters"
            name="no_of_sisters"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="total_family_member">Total Family Members:</label>
          <input
            value={FormData?.total_family_member}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="number"
            id="total_family_member"
            name="total_family_member"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="financial_condition">Financial Condition:</label>
          <input
            value={FormData?.financial_condition}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="financial_condition"
            name="financial_condition"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-wrap">
          <label htmlFor="status">Status:</label>
          <input
            value={FormData?.status}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="text"
            id="status"
            name="status"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-wrap">
          <label htmlFor="message_limit">Message Limit:</label>
          <input
            value={FormData?.message_limit}
            className="bg-gray-50ring-0 border-neutral-500 text-neutral-900 placeholder-violet-700 focus:ring-violet-500 focus:border-violet-500 checked:bg-emerald-500 relative mx-5 my-3  block w-64 rounded-lg border p-2.5 text-sm outline-none"
            type="number"
            id="message_limit"
            name="message_limit"
            onChange={handleChange}
          />
        </div>
        <input
          className="mt-10 h-16 w-56 rounded-full bg-gray-900 text-white"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default Editpage;
