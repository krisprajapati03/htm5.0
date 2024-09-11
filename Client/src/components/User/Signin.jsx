import React from 'react';

function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-3/4 max-w-4xl h-96 bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email/User Name"
          className="w-full p-2 mb-4 border border-gray-400 bg-gray-800 text-white rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-400 bg-gray-800 text-white rounded"
        />
        <a href="#" className="text-sm text-blue-400 mb-4">Forgot your password?</a>
        <button className="w-full p-2 bg-blue-500 text-white rounded">Sign In</button>
      </div>
    </div>
  );
}

export default SignIn;
