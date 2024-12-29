import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

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
    <div className=" p-12">
      <div className="space-y-8">
        <h1 className="text-4xl font-semibold text-gray-800">
          This is Framer motion and Gsap Motion Components
        </h1>
        <p className="">
          Addicting, interactive, animated UI components and templates for
          React, Tailwind CSS, Framer motion logo Framer Motion & more. Copy &
          paste them into your code with 2 clicks.
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
