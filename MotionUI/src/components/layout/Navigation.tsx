import { MenuIcon, X } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router";

const navItems = [
  { label: "Components", href: "/components" },
  { label: "Templates", href: "/templates" },
  { label: "Pricing", href: "/pricing" },
  { label: "Generator", href: "/generator" },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
        <div>
          <Link to="/">Motion.co</Link>
        </div>
        {/* desktop navigation */}
        <nav className="hidden md:flex text-lg items-center justify-between space-x-4">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-2">
          <button>Docs</button>
          <button>Github</button>
        </div>
        {/* mobile menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <MenuIcon />}
        </button>
      </div>
      {/* open mobile nav */}
      {isOpen && (
        <nav className="fixed inset-0 top-16 z-50 ">
          <div className="flex flex-col items-center py-8 gap-6  bg-white border-2 border-black  ">
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
