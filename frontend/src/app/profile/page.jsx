"use client";
import React, { useContext, useEffect } from "react";
import profileImg from "../../../public/images/profilePage/profile.png";
import Image from "next/image";
import UserContext from "../context/users/UserContext";

const page = () => {
  const context = useContext(UserContext);
  const { user } = context;

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          {/* Profila Photo */}
          <Image
            src={profileImg}
            className="w-1/2 h-1/2 m-4"
            alt="profile Image"
          />

          {/* User Name */}
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {user.name}
          </h5>

          {/* User Position */}
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {user.role}
          </span>

          {/* Edit Options */}
          <div className="flex mt-4 md:mt-6">
            <a
              href="#"
              className="inline-flex items-center px-4 mx-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Edit
            </a>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
