import React from "react";

const ReligiousInfo = () => {
  return (
    <div>
      <h3 className="mx-3 mb-4 font-semibold text-gray-900 dark:text-white">
        Select Your Religion:
      </h3>
      <ul className="w-full items-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:flex">
        <li className="w-full border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r">
          <div className="flex items-center ps-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value=""
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
            />
            <label
              htmlFor="vue-checkbox-list"
              className="ms-2 w-full py-3 text-base font-medium text-gray-900 dark:text-gray-300"
            >
              Salah
            </label>
          </div>
        </li>
        <li className="w-full border-b border-gray-200 dark:border-gray-600 sm:border-b-0 sm:border-r">
          <div className="flex items-center ps-3">
            <input
              id="react-checkbox-list"
              type="checkbox"
              value=""
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
            />
            <label
              htmlFor="react-checkbox-list"
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
