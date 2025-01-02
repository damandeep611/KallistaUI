import React from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const Components: React.FC = () => {
  return (
    <section className="flex  h-screen overflow-hidden">
      <div>
        <Sidebar />
      </div>
      <div className=" flex-1 overflow-auto">
        <Outlet />
      </div>
    </section>
  );
};

export default Components;
