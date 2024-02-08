import axios from "axios";
import React, { useEffect, useState } from "react";

const FamilyInfo = ({user}:any) => {
  const [familyData, setFamilyData] = useState({
    fathers_name: "",
    fathers_occupation: "",
    mothers_name: "",
    mothers_occupation: "",
    no_of_brothers: 0,
    no_of_sisters: 0,
    financial_condition: "",
  });



  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        "http://ec2-65-1-183-77.ap-south-1.compute.amazonaws.com:8181/api/v1/user/update-user-details",
        {
          userDetails: {
            fathers_name: familyData?.fathers_name,
            fathers_occupation: familyData?.fathers_occupation,
            mothers_name: familyData?.mothers_name,
            mothers_occupation: familyData?.mothers_occupation,
            no_of_brothers: familyData?.no_of_brothers,
            no_of_sisters: familyData?.no_of_sisters,
            financial_condition: familyData?.financial_condition,
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
      setFamilyData({
        fathers_name: user?.fathers_name,
        fathers_occupation: user?.fathers_occupation,
        mothers_name: user?.mothers_name,
        mothers_occupation: user?.mothers_occupation,
        no_of_brothers: user?.no_of_brothers,
        no_of_sisters: user?.no_of_sisters,
        financial_condition: user?.financial_condition,
      });
    }
  }, [user]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFamilyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <form>
        <div className="mb-6 grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="fathers_name"
              className="mx-3 my-3 mb-2 block text-base font-medium text-gray-900 dark:text-white"
            >
              Fathers name:
            </label>
            <input
              type="text"
              id="fathers_name"
              name="fathers_name"
              value={familyData.fathers_name}
              onChange={handleChange}
              className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter Your Fathers Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="fathers_occupation"
              className="mx-3 my-3 mb-2 block text-base font-medium text-gray-900 dark:text-white"
            >
              Fathers occupation:
            </label>
            <input
              type="text"
              id="fathers_occupation"
              value={familyData.fathers_occupation}
              onChange={handleChange}
              name="fathers_occupation"
              className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter Your Fathers occupation"
              required
            />
          </div>
          <div>
            <label
              htmlFor="mothers_name"
              className="mx-3 mb-2 block text-base font-medium text-gray-900 dark:text-white"
            >
              Mothers Name:
            </label>
            <input
              type="text"
              id="mothers_name"
              name="mothers_name"
              value={familyData.mothers_name}
              onChange={handleChange}
              className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter Your Mothers Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="mothers_occupation"
              className="mx-3 mb-2 block text-base font-medium text-gray-900 dark:text-white"
            >
              Mothers occupation:
            </label>
            <input
              type="text"
              id="mothers_occupation"
              name="mothers_occupation"
              value={familyData.mothers_occupation}
              onChange={handleChange}
              className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter Your Mothers occupation"
              required
            />
          </div>
          <div>
            <label
              htmlFor="no_of_brothers"
              className="mx-3 mb-2 block text-base font-medium text-gray-900 dark:text-white"
            >
              No of Brothers:
            </label>
            <input
              type="number"
              id="no_of_brothers"
              name="no_of_brothers"
              value={familyData.no_of_brothers}
              onChange={handleChange}
              className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              htmlFor="no_of_sisters"
              className="mx-3 mb-2 block text-base font-medium text-gray-900 dark:text-white"
            >
              No of Sisters:
            </label>
            <input
              type="number"
              id="no_of_sisters"
              name="no_of_sisters"
              value={familyData.no_of_sisters}
              onChange={handleChange}
              className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="financial_condition"
            className="mx-3 mb-2 block text-base font-medium text-gray-900 dark:text-white"
          >
            Financial Condition:
          </label>
          <select
            name="financial_condition"
            value={familyData.financial_condition}
              onChange={handleChange}
            className="mx-3  block w-auto rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
          >
            <option value="HIGH">HIGH</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="LOW">LOW</option>
          </select>
        </div>

        <button
          type="submit"
          onClick={()=>handleSubmit}
          className="mx-3 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FamilyInfo;
