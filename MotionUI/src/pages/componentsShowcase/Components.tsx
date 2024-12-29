import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

const Components: React.FC = () => {
  return (
    <section>
      <div className="flex ">
        <div>
          <Sidebar />
        </div>
        <div className="md:fixed md:left-64">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Components;
