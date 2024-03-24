'use client'
import React from "react";
import DashboardCard from "../components/DashboardCard";

const page = () => {
  return (
    <div className="h-screen flex justify-center">
      <DashboardCard title="Available Colors" link="colors" />
      <DashboardCard title="User List" link="users" />
    </div>
  );
};

export default page;
