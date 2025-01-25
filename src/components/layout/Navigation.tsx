import { MenuIcon, X } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import DarkModeToggle from "./darkModeToggle";

const navItems = [
  { label: "Components", href: "/components" },
  { label: "Templates", href: "/templates" },
  { label: "Pricing", href: "/pricing" },
  { label: "Generator", href: "/generator" },
  { label: "Prompts", href: "/prompts" },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="flex items-center justify-between h-[54px] pl-4 border-b border-gray-700">
        <div>
          <Link
            to="/"
            className="text-lg font-bold dark:text-white transition-colors duration-500"
          >
            Motion{" "}
            <span className="dark:text-blue-600 transition-colors duration-700">
              .Co
            </span>
          </Link>
        </div>
        {/* desktop navigation */}
        <nav className="hidden md:flex text-sm font-medium uppercase dark:text-white items-center justify-between space-x-4">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-2">
          <DarkModeToggle />
          <button className="font-semibold dark:text-white">Sign In</button>
          <button className="bg-black text-white dark:text-black dark:bg-white font-semibold h-[54px] px-8">
            Get Started
          </button>
        </div>
        {/* mobile menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <MenuIcon />}
        </button>
      </div>
      {/* open mobile nav */}
      {isOpen && (
        <nav className="fixed inset-0 top-16 z-50 ">
          <div className="flex flex-col items-center py-8 gap-6 text-sm font-medium  bg-white border-2 border-black  ">
            {navItems.map((item) => (
              <NavLink key={item.label} to={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="fixed inset-0 -z-50 backdrop-blur top-[64px]"></div>
        </nav>
      )}
    </header>
  );
};

export default Navigation;
