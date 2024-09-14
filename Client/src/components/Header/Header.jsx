import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Convert token to a boolean
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="bg-slate-950 p-4 pb-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
<<<<<<< HEAD
          <h1 className="text-purple-300 text-2xl font-bold"><Link Link to="/">TalentCraft.AI</Link></h1>
=======
          <h1 className="text-purple-300 text-2xl font-bold"><Link Link to="/">TalentCraft</Link></h1>
>>>>>>> 5ea28ab5d89e76c12f687b9c7b32dd55b505e0ca
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-slate-300 hover:text-slate-100 hover:font-semibold">Home</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-slate-100 hover:font-semibold">About</Link></li>
              <li><Link to="/contactus" className="text-slate-300 hover:text-slate-100 hover:font-semibold">Contact</Link></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            {isLoggedIn ? (
              <button 
                onClick={handleLogout} 
                className="bg-purple-300 text-black px-4 py-2 rounded hover:bg-fuchsia-300"
              >
                Sign Out
              </button>
            ) : (
              <Link to="/login" className="bg-purple-300 text-black px-4 py-2 rounded hover:bg-fuchsia-300">
                Sign In
              </Link>
            )}
            {/* <Link to="/" className="bg-purple-300 text-black px-4 py-2 rounded hover:bg-fuchsia-300">Get Started Free</Link> */}
          </div>
        </div>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mt-4" />
      </div>
    </header>
  );
}
