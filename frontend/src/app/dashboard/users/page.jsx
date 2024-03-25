"use client";
import UserCard from "@/app/components/UserCard";
import UserContext from "@/app/context/users/UserContext";
import React, { useContext, useEffect } from "react";

const page = () => {
  const context = useContext(UserContext);
  const { getAllUsers, users } = context;

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <button className="my-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Add New User
        </button>
      </div>
      <div className="h-screen flex justify-center">
        <ul className="w-1/2 divide-y divide-gray-200 dark:divide-gray-700">
          {/* map users into list - UserCard */}
          {users.map((user) => {
            return <UserCard user={user} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default page;
