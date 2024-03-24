"use client";
import React, { useContext, useEffect } from "react";
import "./home.css";
import ColorBox from "../components/ColorBox";
import ColorContext from "../context/colors/ColorContext";

const page = () => {
  const context = useContext(ColorContext);
  const { getAllColors, colors } = context;

  // Calculate total number of Items in Inventory - all colors
  function calculateTotalItems() {
    const stock = colors.map((color) => color.stock);
    const total = stock.reduce((accu, curr) => accu + curr, 0);
    return total;
  }

  useEffect(() => {
    getAllColors();
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold text-center p-2">Paint Inventory</h1>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div>
        {/* Paint Information bar */}
        <div className="flex m-4 justify-center items-center text-slate-500">
          {/* Total number of colors */}
          <h3 className="mx-6 text-black">
            Colors: <span className="font-bold">{colors.length}</span>
          </h3>
          {/* Total number of items */}
          <h3 className="mx-6 text-black">
            Total Quantity:{" "}
            <span className="font-bold">{calculateTotalItems()}</span>
          </h3>
        </div>

        {/* List of Available Paint Colors */}
        <div className="flex flex-col justify-center items-center">
          {/* Map each color into ColorBox */}
          {colors.map((color) => {
            return <ColorBox color={color} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
