"use client";
import React from "react";
import "./home.css";
import Link from "next/link";
import ColorBox from "../components/ColorBox";

const page = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center p-2">Paint Inventory</h1>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div>
        <div className="flex m-4 justify-center items-center text-slate-500">
          <h3 className="mx-6">Colors: </h3>
          <h3 className="mx-6">Total Quantity: </h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <ColorBox color={"bg-blue-color"} />
          <ColorBox color={"bg-gray-color"} />
          <ColorBox color={"bg-white-color"} />
          <ColorBox color={"bg-black"} />
          <ColorBox color={"bg-purple-color"} />
        </div>
      </div>
    </div>
  );
};

export default page;
