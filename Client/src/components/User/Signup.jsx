import React from 'react';

function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-3/4 max-w-4xl h-96 bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Create Account</h1>
        <div className="w-full flex space-x-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-1/2 p-2 mb-4 border border-gray-600 bg-gray-800 text-white rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-1/2 p-2 mb-4 border border-gray-600 bg-gray-800 text-white rounded"
          />
        </div>
        <input
          type="text"
          placeholder="User Name"
          className="w-full p-2 mb-4 border border-gray-600 bg-gray-800 text-white rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-600 bg-gray-800 text-white rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-600 bg-gray-800 text-white rounded"
        />
        <button className="w-full p-2 bg-blue-500 text-white rounded">Sign Up</button>
      </div>
    </div>
  );
}

export default SignUp;
