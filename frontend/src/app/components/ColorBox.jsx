"use client";
import React from "react";

const ColorBox = ({ color }) => {
  return (
    <div className="flex flex-col my-6 bg-white border border-gray-200 rounded-lg md:w-3/5 w-3/4 shadow-md md:flex-row">
      <div
        className={`w-full rounded-l-lg h-36 md:w-36 m-1 shadow-lg shadow-slate-300
      md:rounded-s-lg ${color}`}
      ></div>
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          Blue Color
        </h5>
        <div className="font-normal text-gray-700 dark:text-gray-400">
          <h4>{`Color: ${color}`}</h4>
          <h5>Stock: </h5>
          <h5>Status: </h5>
        </div>
      </div>
    </div>
  );
};

export default ColorBox;
