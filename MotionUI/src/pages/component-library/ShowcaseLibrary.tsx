import React from "react";
import { Link } from "react-router";
import { Sparkle } from "lucide-react";
import MedalStar from "../../lib/Icons";
import { componentsTypes } from "./componentTypeData";
import CategoryCard from "./CategoryCard";



// this component contains the main content containing library of component categories list 
const ShowcaseLibrary: React.FC = () => {
  const popularComponents = componentsTypes.filter(
    (c) => c.category === "Popular"
  );
  const sectionComponents = componentsTypes.filter(
    (c) => c.category === "Sections"
  );
  return (
    <div className=" p-4 md:p-8">
      <div className="">
        <h1 className="mb-4 text-3xl md:text-4xl font-semibold text-gray-800">
          All Components
        </h1>
        <p className="max-w-2xl text-base text-neutral-700 mb-2 ">
          Components are built with{" "}
          <Link className="text-blue-700" to="https://react.dev/">
            React
          </Link>
          ,{" "}
          <Link className="text-blue-700" to="https://tailwindcss.com/">
            Tailwind CSS
          </Link>{" "}
          <Link className="text-blue-700" to="https://motion.dev/">
            Framer Motion
          </Link>{" "}
          and some combination of Framer Motion, vanilla JS animations,
          keyframes animations, or another popular, stable JavaScript animation
          library. We do our best to keep everything up to date with the latest
          version of each package, but let us know if you run into any problems.
        </p>
        <p className=" flex max-w-2xl text-base text-neutral-700 mb-2">
          Suggest new components for us to build by hitting the{" "}
          <Sparkle className="text-yellow-400 mx-3 cursor-pointer" /> icon
          anywhere you see it.
        </p>
      </div>

      <section className="my-8">
        <h2 className="text-2xl font-semibold my-7 flex items-center">
          Popular <MedalStar />
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {popularComponents.map((component) => (
            <CategoryCard key={component.title} {...component} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Sections</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sectionComponents.map((component) => (
            <CategoryCard key={component.title} {...component} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShowcaseLibrary;
