import React from "react";

const JobInfo = () => {
  return (
    <div>
      <form>
        <div className="mb-2 grid  gap-2 md:grid-cols-1">
          <div>
            <label
              htmlFor="occupation"
              className="mx-3 my-2 block text-base font-medium text-gray-900 dark:text-white"
            >
              Occupation:
            </label>
            <input
              type="text"
              id="occupation"
              className="mx-3 my-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter Your Occupation"
              required
            />
          </div>
          <div>
            <label
              htmlFor="workplace"
              className="mx-3 mb-1 block text-base font-medium text-gray-900 dark:text-white"
            >
              Workplace:
            </label>
            <input
              type="text"
              id="workplace"
              className="mx-3 my-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter Your Workplace"
              required
            />
          </div>
          <div>
            <label
              htmlFor="monthly_income"
              className="mx-3 mb-2 block  text-base font-medium text-gray-900 dark:text-white"
            >
              Monthly Income:
            </label>
            <input
              type="number"
              id="income"
              className="mx-3 my-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Your Monthly Income"
              required
            />
          </div>

          <button
            type="submit"
            className="mx-3 my-2 h-12 w-40 rounded-md bg-blue-700 px-2 py-2 text-center font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobInfo;
