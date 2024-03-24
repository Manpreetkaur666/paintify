import ColorCard from "@/app/components/ColorCard";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex justify-center">
      <ul className="w-1/2 divide-y divide-gray-200 dark:divide-gray-700">
        <ColorCard />
        <ColorCard />
        <ColorCard />
        <ColorCard />
      </ul>
    </div>
  );
};

export default page;
