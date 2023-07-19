import React from 'react';
import { FaBook } from 'react-icons/fa';
import { FaPersonWalkingLuggage } from 'react-icons/fa6';
import { MdOutlineDashboard } from "react-icons/md";
import {  FaCog } from 'react-icons/fa';


function Sidebar() {
  return (

    <div className="sidebar h-screen w-40  flex flex-col bg-white lg:sticky lg:top-0">
      <img id="a" className="h-15 w-30" src="./tryp.png"></img>
      <div className="flex items-center justify-between mb-4 mt-16 border-gray-400 rounded-lg p-4 transition-colors duration-300 hover:bg-green-300 hover:text-white">
        <div className="flex items-center p-1">
          <MdOutlineDashboard className="mr-2 text-[#011425]" />
          <button className="ml-2 font-medium text-sm text-[#011425] transition-colors duration-300">
            Dashboard
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4 bg-green-300 border-gray-400 rounded-lg p-4 transition-colors duration-300 hover:bg-green-300 hover:text-white">
        <div className="flex items-center p-1">
          <FaBook className="mr-2 text-[#011425]" />
          <button className="ml-2 font-medium text-sm text-[#011425] transition-colors duration-300">
            Bookings
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4  border-gray-400 rounded-lg p-4 transition-colors duration-300 hover:bg-green-300 hover:text-white">
        <div className="flex items-center p-1">
          <FaPersonWalkingLuggage className="mr-2 text-[#011425]" />
          <button className="ml-2 font-medium text-sm text-[#011425] transition-colors duration-300">
            Tours
          </button>
        </div>
      </div>
      <div className="flex-grow"></div>
      <div className="flex items-center justify-between mb-4 border-gray-400 rounded-lg p-4 transition-colors duration-300 hover:bg-green-300 hover:text-white">
        <div className="flex items-center p-2">
          <FaCog className="mr-2 text-[#011425]" />
          <button className="ml-2 font-medium text-sm text-[#011425] transition-colors duration-300">
            Settings
          </button>
        </div>
      </div>
    </div>

  );
}

export default Sidebar;