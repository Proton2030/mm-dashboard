import React from "react";

const FamilyInfo = () => {
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
            className="mx-3  block w-auto rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            required
          >
            <option value="">HIGH</option>
            <option value="">MEDIUM</option>
            <option value="">LOW</option>
          </select>
        </div>

        <button
          type="submit"
          className="mx-3 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FamilyInfo;
