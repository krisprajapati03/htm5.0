import React from 'react';

const InterviewPrep = () => {

  const handleTry = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login page
      window.location.href = '/login';
    } else {
      // Redirect to interview page
      window.location.href = '/selectoptions';
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-950 shadow-md rounded- p-8">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Text Content */}
          <div className="mb-8 p-8 pr-24 md:mb-0 md:w-1/2 flex flex-col items-start justify-center">
            <span className="text-sm bg-teal-100 text-teal-600 px-3  py-1 rounded-full font-medium">
              #1 AI Interview Prep
            </span>
            <h1 className="text-4xl font-bold mt-4 text-white">
              Boost your confidence, <br /> ace the job interview
            </h1>
            <p className="text-gray-700 text-start mb-16 mt-4">
              Practice job interview questions tailored to your job description. Get instant AI feedback and suggestions to improve your answers.
            </p>
            <button onClick={handleTry} className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
              Try now for free &rarr;
            </button>
            <p className="text-sm text-gray-500 ml-4 mt-2">No credit card needed</p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg">
            <div className="flex flex-wrap mb-4">
              <button className="px-3 py-2 bg-white text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-full shadow-sm m-1">
                Data Structure & Algorithms
              </button>
              <button className="px-3 py-2 bg-white text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-full shadow-sm m-1">
                System Design
              </button>
              <button className="px-3 py-2 bg-white text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-full shadow-sm m-1">
                Object Oriented Programming
              </button>
              <button className="px-3 py-2 bg-white text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-full shadow-sm m-1">
                DBMS
              </button>
              <button className="px-3 py-2 bg-white text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-full shadow-sm m-1">
                Operating System
              </button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-gray-800">
                Could you recount a time when you faced a challenging interaction with a customer and the strategies you employed to resolve it?
              </p>
              <textarea
              className="w-full mt-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
              rows="5"
              placeholder="Type your answer here..."
            ></textarea>
            {/* <div className="flex justify-end mt-2"> */}
              <button className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-6V7a1 1 0 012 0v5a1 1 0 01-2 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="mt-6">
              <div className="text-gray-500">Feedback</div>
              <div className="text-gray-500">Sample Response</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default InterviewPrep;
