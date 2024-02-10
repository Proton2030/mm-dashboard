import React, { useEffect, useState } from "react";
import axios from "axios";

const EducationInfo = ({ user }: any) => {
  const [educationInfo, setEducationInfo] = useState({
    education: "",
    islamic_education: "",
  });

  useEffect(() => {
    if (user) {
      setEducationInfo({
        education: user.education || "",
        islamic_education: user.islamic_education || "",
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEducationInfo((prevEducationInfo) => ({
      ...prevEducationInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        "http://ec2-65-1-183-77.ap-south-1.compute.amazonaws.com:8181/api/v1/user/update-user-details",
        {
          userDetails: {
            education: educationInfo.education,
            islamic_education: educationInfo.islamic_education,
          },
          userObjectId: user.id,
        }
      );
      if (response.status === 200) {
        console.log("Education details updated successfully:", response.data.result);
      } else {
        console.error("Failed to update education details:", response.status);
      }
    } catch (error) {
      console.error("Error updating education details:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="education" className="mx-3 my-3 block text-base font-medium text-gray-900 dark:text-white">
              Education:
            </label>
            <input
              type="text"
              id="education"
              name="education"
              value={educationInfo.education}
              onChange={handleChange}
              className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter Your Education"
              required
            />
          </div>
          <div>
            <label htmlFor="Islamic_education" className="mx-3 my-3 block text-base font-medium text-gray-900 dark:text-white">
              Islamic Education:
            </label>
            <input
              type="text"
              id="Islamic_education"
              name="islamic_education"
              value={educationInfo.islamic_education}
              onChange={handleChange}
              className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter Your Islamic Education"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="mx-3 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EducationInfo;
