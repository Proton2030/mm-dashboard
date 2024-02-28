import axios from "axios";
import React, { useEffect, useState } from "react";

const PersonalInfo = ({ user }: any) => {
  const [formData, setFormData] = useState({
    full_name: user?.full_name || "",
    gender: user?.gender || "",
    age: user?.age || "",
    marital_status: user?.marital_status || "",
    district: user?.district || "",
    height: user?.height || "",
    weight: user?.weight || "",
    body_color: user?.body_color || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async () => {
    // e.preventDefault();
    console.log("submit clicked");
    console.log("Form data:", formData);
    try {
      const response = await axios.patch(
        "http://ec2-65-1-183-77.ap-south-1.compute.amazonaws.com:8181/api/v1/user/update-user-details",
        {
          userDetails: formData,
          userObjectId: user._id, // Assuming user object has an _id field
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

  useEffect(() => {
    if (user) {
      setFormData({
        full_name: user.full_name || "",
        gender: user.gender || "",
        age: user.age || "",
        marital_status: user.marital_status || "",
        district: user.district || "",
        height: user.height || "",
        weight: user.weight || "",
        body_color: user.body_color || "",
      });
    }
  }, [user]);
  return (
    <div>
      <div className="my-2 mb-2 grid gap-4 md:grid-cols-2">
        <div>
          <label
            htmlFor="full_name"
            className="mx-3 mb-3 block text-base font-medium text-gray-900 dark:text-white"
          >
            Full Name:
          </label>
          <input
            type="text"
            id="full_name"
            value={formData?.full_name}
            onChange={handleChange}
            name="full_name"
            className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Enter Your Full Name"
            required
          />
        </div>

        <div className="mx-4 mt-8 flex items-center justify-start gap-4">
          <div className="flex items-center gap-2 ">
            <label className=" block text-base font-medium text-gray-900 dark:text-white">
              Select Your Gender:
            </label>
            <select
              className="mx-3"
              name="gender"
              value={formData?.gender}
              onChange={handleChange}
            >
              <option value="FEMALE">Female</option>
              <option value="MALE">Male</option>
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="Age"
            className="mx-3 mb-1 block text-base font-medium text-gray-900 dark:text-white"
          >
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData?.age}
            onChange={handleChange}
            className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Your age"
            required
          />
        </div>
        <div>
          <label
            htmlFor="Marital_status"
            className="mx-3 mb-1 block text-base font-medium text-gray-900 dark:text-white"
          >
            Marital Status:
          </label>
          <select
            name="marital_status"
            value={formData?.marital_status}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
          >
            <option value="MARRIED">MARRIED</option>
            <option value="UNMARRIED">UNMARRIED</option>
            <option value="DIVORCED">DIVORCED</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="district"
            className="mx-3 mb-1 block text-base font-medium text-gray-900 dark:text-white"
          >
            District:
          </label>
          <select
            id="district"
            name="district"
            value={formData?.district}
            onChange={handleChange}
            className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
          >
            <option value="Dhaka">Dhaka</option>
            <option value="Barishal">Barishal</option>
            <option value="Komilla">Komilla</option>
            <option value="Khulna">Khulna</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="Height"
            className="mx-3 mb-1 block text-base font-medium text-gray-900 dark:text-white"
          >
            Height:
          </label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData?.height}
            onChange={handleChange}
            className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Enter your height"
            required
          />
        </div>
      </div>
      <div className="mb-1">
        <label
          htmlFor="Weight"
          className="mx-3 mb-2 block text-base font-medium text-gray-900 dark:text-white"
        >
          Weight:
        </label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData?.weight}
          onChange={handleChange}
          className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Enter Your weight"
          required
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="body_color"
          className="mx-3 mb-1 block text-base font-medium text-gray-900 dark:text-white"
        >
          Body Color:
        </label>
        <input
          type="text"
          id="body_color"
          name="body_color"
          value={formData?.body_color}
          onChange={handleChange}
          className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Enter Body color"
          required
        />
      </div>

      <button
        onClick={handleSubmit}
        className="mx-3 w-20 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
      >
        Submit
      </button>
    </div>
  );
};

export default PersonalInfo;
