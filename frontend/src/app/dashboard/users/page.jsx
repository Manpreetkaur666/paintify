'use client'
import UserCard from '@/app/components/UserCard';
import UserContext from '@/app/context/users/UserContext';
import React, { useContext, useEffect } from 'react'

const page = () => {
    const context = useContext(UserContext);
    const { getAllUsers, users } = context;

    useEffect(() => {
      getAllUsers();
    }, []);
  
  return (
    <div className="h-screen flex justify-center">
      <ul className="w-1/2 divide-y divide-gray-200 dark:divide-gray-700">
        {/* map users into list - UserCard */}
        {users.map((user) => {
          return <UserCard user={user} />
        })}
      </ul>
    </div>
  );
}

export default page

