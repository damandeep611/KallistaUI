import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router";

interface ComponentCardProps {
  icon: ReactNode;
  title: string;
  category: "Popular" | "Sections";
  href?: string;
}

const components: ComponentCardProps[] = [
  {
    icon: "=",
    title: "NAVBARS & MENUS",
    href: "/components/navbar",
    category: "Popular",
  },
  // { icon: "👥", title: "TESTIMONIAL SECTIONS", category: "Popular" },
  // { icon: "⟶", title: "BUTTONS", category: "Popular" },
  // { icon: "🎯", title: "HERO SECTIONS", category: "Popular" },
  // { icon: "⟫", title: "CAROUSELS", category: "Popular" },
  {
    icon: "⚙️",
    title: "FEATURES SECTIONS",
    href: "/components/features",
    category: "Popular",
  },
  {
    icon: "⋮",
    title: "DROPDOWN MENUS",
    href: "/components/menus",
    category: "Popular",
  },
  {icon: "-", title: "Hero Sections", href: "/components/heros", category: "Sections"}
  // { icon: "⟳", title: "TOGGLES", category: "Popular" },
  // { icon: "📦", title: "3D SECTIONS", category: "Sections" },
  // { icon: "❓", title: "FAQ SECTIONS", category: "Sections" },
  // { icon: "⚙️", title: "FEATURES SECTIONS", category: "Sections" },
  // { icon: "✎", title: "FORM SECTIONS", category: "Sections" },
];

const Card = ({ icon, title, href }: ComponentCardProps) => {
  return (
    <NavLink to={href || "#"} className="block">
      <motion.div className="relative overflow-hidden rounded-lg border border-x-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
        <div className="flex items-center space-x-4">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
      </motion.div>
    </NavLink>
  );
};

const ShowcaseLibrary: React.FC = () => {
  const popularComponents = components.filter((c) => c.category === "Popular");
  const sectionComponents = components.filter((c) => c.category === "Sections");
  return (
    <div className=" p-4 md:p-8">
      <div className="">
        <h1 className="mb-4 text-3xl md:text-4xl font-semibold text-gray-800">
        All Components

        </h1>
        <p className="max-w-2xl text-base text-neutral-700 mb-2 ">
        Components are built with <Link className="text-blue-700" to="https://react.dev/">React</Link>, <Link className="text-blue-700" to="https://tailwindcss.com/">Tailwind CSS</Link> <Link className="text-blue-700" to="https://motion.dev/">Framer Motion</Link> and some combination of Framer Motion, vanilla JS animations, keyframes animations, or another popular, stable JavaScript animation library. We do our best to keep everything up to date with the latest version of each package, but let us know if you run into any problems.
        </p>
        <p className="max-w-2xl text-base text-neutral-700 mb-2">
        Suggest new components for us to build by hitting the  icon anywhere you see it.


        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold">Popular</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {popularComponents.map((component) => (
            <Card key={component.title} {...component} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold">Sections</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sectionComponents.map((component) => (
            <Card key={component.title} {...component} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ShowcaseLibrary;
