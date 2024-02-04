import React from "react";

const Tabs = () => {
  return (
    <div>
      <div className="border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
        <ul className="-mb-px flex flex-wrap">
          <li className="me-2">
            <a
              href="#"
              className="border-transparent inline-block rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
            >
              Personal Information
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="active inline-block rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600 dark:border-blue-500 dark:text-blue-500"
              aria-current="page"
            >
              Job Information
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="border-transparent inline-block rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
            >
              Education
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="border-transparent inline-block rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
            >
              Religious Information
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="border-transparent inline-block rounded-t-lg border-b-2 p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
            >
              Family Information
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
