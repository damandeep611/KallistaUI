import React from "react";
import { motion } from "framer-motion";

const LicensePlateButton: React.FC = () => {
  return (
    <div className="group relative h-fit w-fit">
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 bg-neutral-900 bg-grid-pattern pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* Left Bolt */}
      <div
        className="absolute top-1/2 left-2 w-3 h-3 bg-gray-600 rounded-full border-2 border-gray-400 transform -translate-y-1/2 z-10 shadow-inner"
        aria-hidden="true"
      ></div>

      {/* Button */}
      <motion.button
        className="relative z-20 text-center cursor-pointer overflow-hidden font-bold text-xl py-4 px-8 bg-gradient-to-b from-yellow-400 to-yellow-500 text-blue-900 uppercase tracking-wide border-4 border-blue-900 shadow-md"
        style={{
          clipPath:
            "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% 100%, calc(100% - 8px) 100%, 8px 100%, 0 100%, 0 0)",
        }}
        whileHover={{
          rotate: 2, // Slight rotation for dangling effect
          translateY: 4, // Smooth downward movement
        }}
        transition={{
          type: "spring", // Spring animation for smoothness
          stiffness: 300, // Controls the spring strength
          damping: 15, // Reduces bounciness
        }}
      >
        <div className="text-xs tracking-wider">New York</div>
        <div className="text-3xl font-extrabold mt-1">View Components</div>
        <div className="text-sm tracking-wider mt-1">Empire State</div>
      </motion.button>

      {/* Right Bolt */}
      <div
        className="absolute top-1/2 right-2 w-3 h-3 bg-gray-600 rounded-full border-2 border-gray-400 transform -translate-y-1/2 z-10 shadow-inner"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default LicensePlateButton;
