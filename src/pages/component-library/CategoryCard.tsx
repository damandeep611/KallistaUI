import { NavLink } from "react-router";
import { ComponentCardProps } from "../../docs/componentTypeData";
import { motion } from "framer-motion";
import { useState } from "react";
// this file contains the card styling of Parent catgories of component types i.e hero sections, feature sections etc
export default function CategoryCard({
  icon,
  title,
  href,
  backgroundText,
}: ComponentCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <NavLink
      to={href || "#"}
      className="w-full min-h-24 p-4 relative border-[1px] border-slate-300 overflow-hidden group bg-white dark:bg-black hover:shadow-lg transition-shadow duration-300"
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to bg-indigo-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
        <div className="absolute z-10 top-6 rotate-30 -right-8 text-8xl text-slate-100 dark:text-slate-900 group-hover:hidden  duration-300">
          {backgroundText}
        </div>
        {/* ------marquee background text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center overflow-hidden"
        >
          <motion.div
            className="whitespace-nowrap text-white text-opacity-10 text-9xl font-bold"
            animate={{ x: isHovered ? [0, -1000] : 0 }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {backgroundText?.repeat(10)}
          </motion.div>
        </motion.div>
        <div>{icon}</div>
        <h3 className="text-lg font-medium text-slate-950 dark:text-white group-hover:text-white z-10 relative transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
    </NavLink>
  );
}
