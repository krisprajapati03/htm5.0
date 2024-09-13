import { useState } from 'react';
import axios from 'axios'; // Import axios for API requests

function Login() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [signInData, setSignInData] = useState({ email: '', password: '' });
    const [signUpData, setSignUpData] = useState({ firstName: '', lastName: '', userName: '', email: '', password: '' });

    const togglePanel = () => {
        setIsSignUp((prev) => !prev);
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:3000/v1/auth/login', signInData);
            console.log('Sign In Successful:', response.data);
            localStorage.setItem('token', response.data.token);
            // Handle successful sign-in, like redirecting or switching to dashboard
            window.location.href = '/selectoptions';
        } catch (error) {
            console.error('Sign In Error:', error);
        }
    };
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:3000/v1/auth/signup', signUpData);
            console.log('Sign Up Successful:', response.data);
            window.location.href = '/login';
        } catch (error) {
            console.error('Sign Up Error:', error);
        }
    };

    const handleSignInChange = (e) => {
        setSignInData({ ...signInData, [e.target.name]: e.target.value });
    };

    const handleSignUpChange = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
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
                    <form onSubmit={handleSignIn} className="w-1/2 float-left h-full p-8 flex flex-col justify-center items-start bg-gray-800 text-white">
                        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email/User Name"
                            value={signInData.email}
                            onChange={handleSignInChange}
                            className="w-full p-2 mb-4 border border-gray-400 bg-gray-800 text-white rounded"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={signInData.password}
                            onChange={handleSignInChange}
                            className="w-full p-2 mb-4 border border-gray-400 bg-gray-800 text-white rounded"
                        />
                        <a href="#" className="text-sm text-blue-400 mb-4">Forgot your password?</a>
                        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Sign In</button>
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
                    <form onSubmit={handleSignUp} className="w-1/2 float-right h-full p-8 flex flex-col justify-center items-start bg-gray-800 text-white">
                        <h1 className="text-2xl font-bold mb-4 self-center">Create Account</h1>
                        <div className="w-full flex space-x-4">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={signUpData.firstName}
                                onChange={handleSignUpChange}
                                className="w-1/2 p-2 mb-4 border border-gray-600 bg-gray-800 text-white rounded"
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={signUpData.lastName}
                                onChange={handleSignUpChange}
                                className="w-1/2 p-2 mb-4 border border-gray-600 bg-gray-800 text-white rounded"
                            />
                        </div>
                        <input
                            type="text"
                            name="userName"
                            placeholder="User Name"
                            value={signUpData.userName}
                            onChange={handleSignUpChange}
                            className="w-full p-2 mb-4 border border-gray-600 bg-gray-800 text-white rounded"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={signUpData.email}
                            onChange={handleSignUpChange}
                            className="w-full p-2 mb-4 border border-gray-600 bg-gray-800 text-white rounded"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={signUpData.password}
                            onChange={handleSignUpChange}
                            className="w-full p-2 mb-4 border border-gray-600 bg-gray-800 text-white rounded"
                        />
                        
                        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
