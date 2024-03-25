import React from "react";

const ColorCard = ({ color }) => {
  return (
    // <ul className="w-1/2 divide-y divide-gray-200 dark:divide-gray-700">
    <li className="p-3 my-3 sm:pb-4 bg-white">
      <div className="flex items-center justify-between space-x-2">
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-black"></div>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
            {color.name}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            {color.stock}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          Total Quantity
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          <button>Edit</button>
        </div>
      </div>
    </li>
    // </ul>
  );
};

export default ColorCard;
