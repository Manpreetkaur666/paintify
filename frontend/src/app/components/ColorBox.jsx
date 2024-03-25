"use client";
import React, { useEffect, useState } from "react";
import ColorModal from "./ColorModal";

const ColorBox = ({ color }) => {
  const [status, setStatus] = useState({
    statusText: "",
    statusColor: "",
  });

  const [toggle, setToggle] = useState(false);

  function toggleDisplay() {
    setToggle(!toggle);
  }

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

      {/* Edit button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-fit h-fit px-7 py-2.5 my-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => toggleDisplay()}
        >
          Edit
        </button>
      </div>

      <ColorModal toggle={toggle} toggleDisplay={toggleDisplay} color={color} />
    </div>
  );
};

export default ColorBox;
