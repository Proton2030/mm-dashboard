import React, { useEffect, useState } from "react";
import EducationInfo from "layouts/education";
import FamilyInfo from "layouts/familyinfo";
import JobInfo from "layouts/jobinfo";
import PersonalInfo from "layouts/personalinfo";
import ReligiousInfo from "layouts/religiousinfo";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Tabs = () => {
  const navigate = useNavigate();
  const { ph } = useParams();

  const [activeTab, setActiveTab] = useState("personal");
  const [user, setUser] = useState();
  
  const handleTabClick = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "personal":
        return <PersonalInfo user={user} />;
      case "job":
        return <JobInfo user={user} />;
      case "education":
        return <EducationInfo user={user} />;
      case "regif":
        return <ReligiousInfo user={user}/>;
      case "family":
        return <FamilyInfo user={user}/>;
      default:
        return null;
    }
  };

  const fetchingUserById = async ()=>{
    const response = await axios.get(`http://ec2-65-1-183-77.ap-south-1.compute.amazonaws.com:8181/api/v1/user/search-user-admin?mobile=${ph}`); // Replace with the actual API endpoint to fetch user details
    setUser(response.data.result[0])
    console.log("----->user",response.data.result[0]);
  }

  useEffect(() => {
    fetchingUserById()
  }, [])
  

  return (
    <div>
      <div className="border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700  dark:text-gray-400">
        <ul className="-mb-px flex  col-span-10 overflow-x-auto">
          <li className="me-2 w-full">
            <div
              onClick={() => handleTabClick("personal")}
              className={`border-transparent inline-block rounded-t-lg border-b-2 p-2 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300 ${
                activeTab === "personal" ? "text-blue-600 dark:text-blue-500" : ""
              }`}
            >
              Personal Information
            </div>
          </li>
          {/* Repeat the same pattern for other tabs */}
          <li className="me-2 w-full">
            <div
              
              onClick={() => handleTabClick("job")}
              className={`border-transparent inline-block rounded-t-lg border-b-2 p-2 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300 ${
                activeTab === "job" ? "text-blue-600 dark:text-blue-500" : ""
              }`}
            >
              Job Information
            </div>
          </li>
          <li className="me-2 w-full">
            <div
              
              onClick={() => handleTabClick("education")}
              className={`border-transparent inline-block rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300 ${
                activeTab === "education" ? "text-blue-600 dark:text-blue-500" : ""
              }`}
            >
              Education
            </div>
          </li>
          <li className="me-2 w-full">
            <div
              
              onClick={() => handleTabClick("regif")}
              className={`border-transparent inline-block rounded-t-lg border-b-2 p-2 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300 ${
                activeTab === "regif" ? "text-blue-600 dark:text-blue-500" : ""
              }`}
            >
              Religious Information
            </div>
          </li>
          <li className="me-2 w-full">
            <div
              
              onClick={() => handleTabClick("family")}
              className={`border-transparent inline-block rounded-t-lg border-b-2 p-2 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300 ${
                activeTab === "family" ? "text-blue-600 dark:text-blue-500" : ""
              }`}
            >
              Family Information
            </div>
          </li>
          <li className="me-2 w-full">
            <a
              href="#"
              className="border-transparent inline-block rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
            >
              Choice List
            </a>
          </li>
          <li className="me-2 w-full">
            <a
              href="#"
              className="border-transparent inline-block rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
            >
              Choose List
            </a>
          </li>
          <li className="me-2 w-full">
            <a
              href="#"
              className="border-transparent inline-block rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
            >
              Chat List
            </a>
          </li>
        </ul>
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default Tabs;
