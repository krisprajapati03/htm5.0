import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-slate-950 p-4 pb-0">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-slate-100 text-2xl font-bold">TalentCraft</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-slate-300 hover:text-slate-100 hover:font-semibold">Home</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-slate-100 hover:font-semibold">About</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-slate-100 hover:font-semibold">Contact</Link></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <Link to="/signin" className="text-gray-200 items-center flex hover:text-slate-300">Sign In</Link>
            <Link to="/get-started" className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-stone-300">Get Started Free</Link>
          </div>
        </div>
        {/* Move the hr tag inside the container, after the content */}
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mt-4" />
      </div>
    </header>
  );
}
