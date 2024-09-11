import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-white hover:text-gray-200">Home</Link></li>
            <li><Link to="/about" className="text-white hover:text-gray-200">About</Link></li>
            <li><Link to="/contact" className="text-white hover:text-gray-200">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <Link to="/signin" className="text-white hover:text-gray-200">Sign In</Link>
          <Link to="/get-started" className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200">Get Started Free</Link>
        </div>
      </div>
    </header>
  );
}