import React from "react";
import Sidebar from "./Sidebar";
import ShowcaseLibrary from "./ShowcaseLibrary";

const Components: React.FC = () => {
  return (
    <section>
      <div className="flex ">
        <div>
          <Sidebar />
        </div>
        <div>
          <ShowcaseLibrary />
        </div>
      </div>
    </section>
  );
};

export default Components;
