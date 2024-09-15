import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/main');
  };

  return (
    <>
      {/* Move the hr tag inside the container, after the content */}
      <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 " />
      <footer className="bg-slate-950 text-white p-4 flex justify-between items-center">
        <div className="text-purple-300">
          {/* <img src="" alt="TalentCraft Logo" className="h-8" /> */}
          <h1 className="text-2xl p-8 font-bold">TalentCraft.AI</h1>
        </div>
        <div className="text-right">
          <p>Made by CodeX-0.3</p>
          <p>Contact us: <a href="mailto:info@talentcraft.com" className="text-purple-300">info@talentcraft.com</a></p>
          <p onClick={handleNavigate} className="cursor-pointer">© 2024 TalentCraft. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
