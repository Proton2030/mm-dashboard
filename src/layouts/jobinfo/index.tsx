import React, { useEffect, useState } from "react";
import axios from "axios";

const JobInfo = ({ user }: any) => {
  const [jobInfo, setJobInfo] = useState({
    occupation: "",
    work_place: "",
    monthly_income: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setJobInfo((prevJobInfo) => ({
      ...prevJobInfo,
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
            occupation: jobInfo.occupation,
            work_place: jobInfo.work_place,
            monthly_income: jobInfo.monthly_income,
          },
          userObjectId: user.id,
        }
      );
      if (response.status === 200) {
        console.log("Job details updated successfully:", response.data.result);
      } else {
        console.error("Failed to update job details:", response.status);
      }
    } catch (error) {
      console.error("Error updating job details:", error);
    }
  };

  useEffect(() => {
    if (user) {
      setJobInfo({
        occupation: user.occupation || "",
        work_place: user.work_place || "",
        monthly_income: user.monthly_income || 0,
      });
    }
  }, [user]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2 grid  gap-2 md:grid-cols-1">
          <div>
            <label htmlFor="occupation" className="mx-3 my-2 block text-base font-medium text-gray-900 dark:text-white">
              Occupation:
            </label>
            <input
              type="text"
              id="occupation"
              name="occupation"
              value={jobInfo.occupation}
              onChange={handleChange}
              className="mx-3 my-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter Your Occupation"
              required
            />
          </div>
          <div>
            <label htmlFor="workplace" className="mx-3 mb-1 block text-base font-medium text-gray-900 dark:text-white">
              Workplace:
            </label>
            <input
              type="text"
              id="workplace"
              name="work_place"
              value={jobInfo.work_place}
              onChange={handleChange}
              className="mx-3 my-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter Your Workplace"
              required
            />
          </div>
          <div>
            <label htmlFor="monthly_income" className="mx-3 mb-2 block text-base font-medium text-gray-900 dark:text-white">
              Monthly Income:
            </label>
            <input
              type="number"
              id="income"
              name="monthly_income"
              value={jobInfo.monthly_income}
              onChange={handleChange}
              className="mx-3 my-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Your Monthly Income"
              required
            />
          </div>

          <button
            type="submit"
            className="mx-3 my-2 h-12 w-40 rounded-md bg-blue-700 px-2 py-2 text-center font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobInfo;
