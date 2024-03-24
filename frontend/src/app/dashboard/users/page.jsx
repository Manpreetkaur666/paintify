import UserCard from '@/app/components/UserCard';
import React from 'react'

const page = () => {
  return (
    <div className="h-screen flex justify-center">
      <ul className="w-1/2 divide-y divide-gray-200 dark:divide-gray-700">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </ul>
    </div>
  );
}

export default page

