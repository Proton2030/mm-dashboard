import React from 'react'

const JobInfo = () => {
  return (
    <div>
      
<form>
    <div className="grid gap-2 h-screen mb-2 md:grid-cols-1">
        <div>
            <label htmlFor="occupation" className="block mx-3 my-2 text-sm font-semibold text-gray-900 dark:text-white">Occupation:</label>
            <input type="text" id="occupation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mx-3 my-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Occupation" required/>
        </div>
        <div>
            <label htmlFor="workplace" className="block mb-2 text-sm mx-3 font-semibold text-gray-900 dark:text-white">Workplace:</label>
            <input type="text" id="workplace" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mx-3 my-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Workplace" required/>
        </div>
        <div>
            <label htmlFor="monthly_income" className="block mb-2 mx-3  text-sm font-semibold text-gray-900 dark:text-white">Monthly Income:</label>
            <input type="number" id="income" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mx-3 my-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Monthly Income" required/>
        </div>  
        
      
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-md text-center w-40 h-12 px-2 py-2 my-2 mx-3  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Submit</button>
    </div>
    </form>
    </div>

    
  );
};

export default JobInfo;
