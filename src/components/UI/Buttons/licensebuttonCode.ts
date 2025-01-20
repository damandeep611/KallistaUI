export const licensebuttonCode =
  'import React from "react";\r\nimport { motion } from "framer-motion";\r\n\r\nconst LicensePlateButton: React.FC = () => {\r\n  return (\r\n    <div className="group relative h-fit w-fit">\r\n      {/* Background Grid */}\r\n      <div\r\n        className="absolute inset-0 z-0 bg-neutral-900 bg-grid-pattern pointer-events-none"\r\n        aria-hidden="true"\r\n      ></div>\r\n\r\n      {/* Left Bolt */}\r\n      <div\r\n        className="absolute top-1/2 left-2 w-3 h-3 bg-gray-600 rounded-full border-2 border-gray-400 transform -translate-y-1/2 z-10 shadow-inner"\r\n        aria-hidden="true"\r\n      ></div>\r\n\r\n      {/* Button */}\r\n      <motion.button\r\n        className="relative z-20 text-center cursor-pointer overflow-hidden font-bold text-xl py-4 px-8 bg-gradient-to-b from-yellow-400 to-yellow-500 text-blue-900 uppercase tracking-wide border-4 border-blue-900 shadow-md"\r\n        style={{\r\n          clipPath:\r\n            "polygon(8px 0%, calc(100% - 8px) 0%, 100% 8px, 100% 100%, calc(100% - 8px) 100%, 8px 100%, 0 100%, 0 0)",\r\n        }}\r\n        whileHover={{\r\n          rotate: 2, // Slight rotation for dangling effect\r\n          translateY: 4, // Smooth downward movement\r\n        }}\r\n        transition={{\r\n          type: "spring", // Spring animation for smoothness\r\n          stiffness: 300, // Controls the spring strength\r\n          damping: 15, // Reduces bounciness\r\n        }}\r\n      >\r\n        <div className="text-xs tracking-wider">New York</div>\r\n        <div className="text-3xl font-extrabold mt-1">Outer Componenet</div>\r\n        <div className="text-sm tracking-wider mt-1">Empire State</div>\r\n      </motion.button>\r\n\r\n      {/* Right Bolt */}\r\n      <div\r\n        className="absolute top-1/2 right-2 w-3 h-3 bg-gray-600 rounded-full border-2 border-gray-400 transform -translate-y-1/2 z-10 shadow-inner"\r\n        aria-hidden="true"\r\n      ></div>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default LicensePlateButton;\r\n';
