"use client";
import React, { useEffect, useState } from "react";

const ColorBox = ({ color }) => {
  const [status, setStatus] = useState({
    statusText: "",
    statusColor: "",
  });

  // check status - update status based on stock and update staus text and color
  function checkStatus() {
    return color.stock >= 5
      ? setStatus({ statusText: "instock", statusColor: "green" })
      : color.stock >= 1 && color.stock < 5
      ? setStatus({ statusText: "running low", statusColor: "yellow" })
      : setStatus({ statusText: "out of Stock", statusColor: "red" });
  }

  // Check status only if color exists
  useEffect(() => {
    color !== "" && checkStatus();
  }, []);

  return (
    <div className="flex flex-col my-6 bg-white border border-gray-200 rounded-lg md:w-3/5 w-3/4 shadow-md md:flex-row">
      {/* Paint color Box Display */}
      <div
        style={{ backgroundColor: color.name }}
        className={`w-full rounded-l-lg h-36 md:w-36 m-1 shadow-lg shadow-slate-300
      md:rounded-s-lg`}
      ></div>

      {/* Information about specific color of paint */}
      <div class="w-1/2 flex flex-col justify-between p-4 leading-normal">
        {/* Color Name */}
        <h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          {color.name}
        </h5>
        <div className="font-normal text-gray-700 dark:text-gray-400">
          {/* Stock avaiable - number of paint container of each colorr */}
          <h5>Stock: {color.stock}</h5>
          {/* Status based on stock */}
          <h5 className="inline">Status: </h5>
          <p
            style={{ backgroundColor: status.statusColor }}
            className="font-bold inline-block p-1"
          >
            {status.statusText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorBox;
