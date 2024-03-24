import React from 'react'

const UserCard = () => {
  return (
    <li className="p-3 my-3 sm:pb-4 bg-white">
      <div className="flex items-center justify-between space-x-2">
        <div className="flex-shrink-0">
          
          <div className="w-8 h-8 rounded-full bg-black"></div>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            User name
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            Position
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <button>Edit</button>
        </div>
      </div>
    </li>
  );
}

export default UserCard
