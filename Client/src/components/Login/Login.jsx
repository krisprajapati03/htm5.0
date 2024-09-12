import React, { useState } from 'react';

function Login() {
    const [isSignUp, setIsSignUp] = useState(false);

    const togglePanel = () => {
        setIsSignUp((prev) => !prev);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-950">
            <div className="relative w-3/4 max-w-4xl h-96 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className={`absolute inset-0 w-full h-full transform ${isSignUp ? 'translate-x-full' : ''} transition-transform duration-500`}>
                    <div className="w-1/2 float-left h-full flex flex-col justify-center items-center bg-gray-900 text-white p-8">
                        <h1 className="text-3xl font-bold mb-4">Welcome Back!</h1>
                        <p className="mb-4 text-center">To keep connected with us, please login with your personal info</p>
                        <button
                            onClick={togglePanel}
                            className="px-6 py-2 border border-white text-white rounded transition hover:bg-blue-300 hover:text-gray-900"
                        >
                            Sign In
                        </button>
                    </div>
                    <form className="w-1/2 float-left h-full p-8 flex flex-col justify-center items-start bg-gray-800 text-white">
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
                    </form>
                </div>

                <div className={`absolute inset-0 w-full h-full transform ${!isSignUp ? '-translate-x-full' : ''} transition-transform duration-500`}>
                    <div className="w-1/2 float-right h-full flex flex-col justify-center items-center bg-gray-900 text-white p-8">
                        <h1 className="text-3xl font-bold mb-4">Hello, Friend!</h1>
                        <p className="mb-4 text-center">Enter your personal details and start your journey with us</p>
                        <button
                            onClick={togglePanel}
                            className="px-6 py-2 border border-white text-white rounded transition hover:bg-blue-300 hover:text-gray-900"
                        >
                            Sign Up
                        </button>
                    </div>
                    <form className="w-1/2 float-right h-full p-8 flex flex-col justify-center items-start bg-gray-800 text-white">
                        <h1 className="text-2xl font-bold mb-4 self-center">Create Account</h1>
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
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;