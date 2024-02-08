import React from "react";

const EducationInfo = () => {
  return (
    <div>
      <form>
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="education"
              className="mx-3 my-3 block text-base font-medium text-gray-900 dark:text-white"
            >
              Education:
            </label>
            <input
              type="text"
              id="education"
              name="education"
              className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter Your Education"
              required
            />
          </div>
          <div>
            <label
              htmlFor="Islamic_education"
              className="mx-3 my-3 block text-base font-medium text-gray-900 dark:text-white"
            >
              Islamic Education:
            </label>
            <input
              type="text"
              id="Islamic_education"
              name="islamic_education"
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
