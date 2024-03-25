"use client";
import React, { useContext, useState, useEffect } from "react";
import UserContext from "../context/users/UserContext";

const Modal = ({ toggle, toggleDisplay, user }) => {
  const context = useContext(UserContext);
  const { updateUser } = context;
  const [userInfo, setUserInfo] = useState({
    eid: user._id,
    ename: user.name,
    eemail: user.email,
    erole: user.role,
  });

  const saveUser = (currentUser) => {
    setUserInfo({
      eid: currentUser._id,
      ename: currentUser.name,
      eemail: currentUser.email,
      erole: currentUser.role,
    });
    updateUser(userInfo.eid, userInfo.ename, userInfo.eemail, userInfo.erole);
  };


  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div
      id="myModal"
      className={`modal ${
        toggle ? "block" : "hidden"
      } z-10 w-1/2 h-1/2 bg-slate-200 fixed left-50 top-20`}
    >
      {/* <!-- Modal content --> */}
      <div className="modal-content">
        <button
          className="close absolute right-0 bg-red-600 w-6 h-6"
          onClick={() => toggleDisplay()}
        >
          &times;
        </button>

        {/* form to edit user details */}
        <form className="max-w-md mx-auto p-6" method="post">
          {/* User Name */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="ename"
              id="name"
              value={userInfo.ename}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>

          {/* User Email */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="eemail"
              id="email"
              value={userInfo.eemail}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email
            </label>
          </div>

          {/* User Role */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="erole"
              id="role"
              value={userInfo.erole}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Role
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="my-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                saveUser(userInfo);
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
