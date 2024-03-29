import axios from "axios";
import React, { useEffect, useState } from "react";

const ReligiousInfo = ({ user }: any) => {
  const [religiousData, setReligiousData] = useState({
    salah: false,
    sawum: false,
  });

 

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setReligiousData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  useEffect(() => {
    if (user) {
      setReligiousData({
        salah: user?.salah,
        sawum: user?.sawum,
      
      });
    }
  }, [user]);

  return (
    <div>
      <h3 className="mx-3 my-3 font-medium text-gray-900 dark:text-white">
        Select Your Religion:
      </h3>
      <ul className="w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:flex">
        <li className="w-full border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r">
          <div className="flex items-center ps-3">
            <input
              id="check_salah"
              type="checkbox"
              name="salah"
              checked={religiousData.salah}
              onChange={handleCheckboxChange}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
            />
            <label
              htmlFor="salah-checkbox-list"
              className="ms-2 w-full py-3 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              Salah
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r">
          <div className="flex items-center ps-3">
            <input
              id="check_sawum"
              type="checkbox"
              name="sawum"
              checked={religiousData.sawum}
              onChange={handleCheckboxChange}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
            />
            <label
              htmlFor="sawum-checkbox-list"
              className="ms-2 w-full py-3 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              Sawum
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ReligiousInfo;
