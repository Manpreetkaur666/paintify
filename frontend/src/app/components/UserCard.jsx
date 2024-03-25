"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import Modal from "./Modal";
import UserContext from "../context/users/UserContext";

const UserCard = ({ user }) => {
    // const context = useContext(UserContext);
  const [toggle, setToggle] = useState(false);

  function toggleDisplay() {
    setToggle(!toggle);
  }
  return (
    <>
      <li className="p-3 my-3 sm:pb-4 bg-white">
        <div className="flex items-center justify-between space-x-2">
          <div className="flex-shrink-0">
            {/* User Image */}
            <div className="w-8 h-8 rounded-full bg-black">
              {/* <Image width={40} height={40} loader={() => user.photo} /> */}
            </div>
          </div>
          <div className="min-w-0">
            {/* User Name */}
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {user.name}
            </p>
            {/* User Email */}
            <p className="text-sm font-medium text-gray-500 truncate dark:text-white">
              {user.email}
            </p>
            {/* User Role */}
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {user.role}
            </p>
          </div>
          {/* Edit Option */}
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <button onClick={() => toggleDisplay()}>Edit</button>
          </div>
        </div>
      </li>

      <Modal toggle={toggle} toggleDisplay={toggleDisplay} user={user} />
    </>
  );
};

export default UserCard;
