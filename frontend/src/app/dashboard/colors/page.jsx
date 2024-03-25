'use client'
import ColorCard from "@/app/components/ColorCard";
import ColorContext from "@/app/context/colors/ColorContext";
import React, { useContext, useEffect } from "react";

const page = () => {
  const context = useContext(ColorContext);
  const { getAllColors, colors } = context;

   useEffect(() => {
     getAllColors();
   }, []);
  
  return (
    <div className="h-screen flex justify-center">
      <ul className="w-1/2 divide-y divide-gray-200 dark:divide-gray-700">
        {colors.map((color) => {
          return <ColorCard color={color} />;
        })}
      </ul>
    </div>
  );
};

export default page;
