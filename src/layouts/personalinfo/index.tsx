import React from "react";

const PersonalInfo = () => {
  return (
    <div>
      <form action="">
        <div className="my-2 mb-2 grid gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="full_name"
              className="mx-3 mb-3 block text-base font-medium text-gray-900 dark:text-white"
            >
              Full Name:
            </label>
            <input
              type="text"
              id="full_name"
              className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter Your Full Name"
              required
            />
          </div>
          <div>
            <label className="mx-3 mb-3 block text-base font-medium text-gray-900 dark:text-white">
              Select Your Gender:
            </label>
            <select>
              <option value="">Female</option>
              <option value="">Male</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="Age"
              className="mx-3 mb-1 block text-base font-medium text-gray-900 dark:text-white"
            >
              Age:
            </label>
            <input
              type="number"
              id="age"
              className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Your age"
              required
            />
          </div>
          <div>
            <label
              htmlFor="Marital_status"
              className="mx-3 mb-1 block text-base font-medium text-gray-900 dark:text-white"
            >
              Marital Status:
            </label>
            <select
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="district"
              className="mx-3 mb-1 block text-base font-medium text-gray-900 dark:text-white"
            >
              District:
            </label>
            <select
              id="district"
              className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required
            >
              <option value="Dhaka">Dhaka</option>
              <option value="Barishal">Barishal</option>
              <option value="Komilla">Komilla</option>
              <option value="Khulna">Khulna</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="Height"
              className="mx-3 mb-1 block text-base font-medium text-gray-900 dark:text-white"
            >
              Height:
            </label>
            <input
              type="number"
              id="height"
              className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Enter your height"
              required
            />
          </div>
        </div>
        <div className="mb-1">
          <label
            htmlFor="Weight"
            className="mx-3 mb-2 block text-base font-medium text-gray-900 dark:text-white"
          >
            Weight:
          </label>
          <input
            type="number"
            id="weight"
            className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Enter Your weight"
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="body_color"
            className="mx-3 mb-1 block text-base font-medium text-gray-900 dark:text-white"
          >
            Body Color:
          </label>
          <input
            type="text"
            id="body_color"
            className="mx-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Enter Body color"
            required
          />
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

export default PersonalInfo;
