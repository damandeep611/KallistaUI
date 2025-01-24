import React from "react";
import { NavLink } from "react-router";

const Templates: React.FC = () => {
  return (
    <section className="mx-auto">
      <div className="max-w-7xl px-12">
        <div className="max-w-3xl py-8 space-y-6">
          <h1 className="text-5xl font-semibold">
            Animated Landing Page Templates
          </h1>
          <p className="text-lg">
            Ship faster with a more memorable brand look and feel. All of our
            templates are built with React on top of NextJS, styled with
            TailwindCSS, and leverage Framer Motion for smooth, addicting
            animations.
          </p>
        </div>
        {/* template cards  */}
        <div>
          {/* ai landing  */}
          <div className="p-8 border border-black max-w-sm space-y-4">
            <h3 className="text-xl font-semibold">Ai Local Agent</h3>
            <p className="text-sm ">
              Landing page for a LLM Powered Local Ai Agent
            </p>
            <div className="flex items-center gap-2">
              <NavLink
                to="/templates/demo/ailanding"
                className="bg-blue-700 px-2 text-white"
              >
                Live demo
              </NavLink>
              <button className="bg-white text-black px-2 border border-black">
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Templates;
