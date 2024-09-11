import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-3/4 max-w-4xl h-96 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full h-full">
          <div className="w-1/2 float-left h-full flex flex-col justify-center items-center bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
            <p className="mb-4 text-center">
              To keep connected with us, please login with your personal info
            </p>
            <Link to="/signin">
              <button className="px-6 py-2 border border-white text-white rounded transition hover:bg-blue-300 hover:text-gray-900">
                Sign In
              </button>
            </Link>
          </div>
          <div className="w-1/2 float-right h-full flex flex-col justify-center items-center bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-4">Hello, Friend!</h1>
            <p className="mb-4 text-center">
              Enter your personal details and start your journey with us
            </p>
            <Link to="/signup">
              <button className="px-6 py-2 border border-white text-white rounded transition hover:bg-blue-300 hover:text-gray-900">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;