import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { ComponentCardProps } from "./componentTypeData";

export default function CategoryCard({
  icon,
  title,
  href,
}: ComponentCardProps) {
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
}
