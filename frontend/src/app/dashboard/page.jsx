import React from "react";
import DashboardCard from "../components/DashboardCard";

const page = () => {
  return (
    <div className="h-screen flex justify-center">
      <DashboardCard title="Available Colors" />
      <DashboardCard title="User List" />
    </div>
  );
};

export default page;
