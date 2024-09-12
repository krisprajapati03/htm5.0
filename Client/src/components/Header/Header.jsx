import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-purple-400 text-2xl font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <Link to="/signin" className="text-gray-800 items-center flex hover:text-gray-900">Sign In</Link>
          <Link to="/get-started" className="bg-purple-400 text-black px-4 py-2 rounded hover:bg-purple-500">Get Started Free</Link>
        </div>
      </div>
    </header>
  );
}