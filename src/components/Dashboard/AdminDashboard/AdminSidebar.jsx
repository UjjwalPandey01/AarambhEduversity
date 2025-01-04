import React from "react";
import {  Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen flex flex-col">
      <div className="p-4 text-2xl font-bold">Aarambh Eduversity</div>
      <nav className="flex flex-col gap-4 p-4">
        <Link
          to="."
          className={({ isActive }) =>
            `py-2 px-4 rounded-lg ${isActive ? "bg-gray-700" : ""}`
          }
        >
          Dashboard
        </Link>
       
        <Link
          to="add-course"
          className={({ isActive }) =>
            `py-2 px-4 rounded-lg ${isActive ? "bg-gray-700" : ""}`
          }
        >
          Add Course
        </Link>
        <Link
          to="all-courses"
          className={({ isActive }) =>
            `py-2 px-4 rounded-lg ${isActive ? "bg-gray-700" : ""}`
          }
        >
          All Courses
        </Link> <Link
          to="profile-settings"
          className={({ isActive }) =>
            `py-2 px-4 rounded-lg ${isActive ? "bg-gray-700" : ""}`
          }
        >
          Profile
        </Link>
        <Link
          to="live-courses"
          className={({ isActive }) =>
            `py-2 px-4 rounded-lg ${isActive ? "bg-gray-700" : ""}`
          }
        >
          My Live Courses
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
