import { motion } from "framer-motion";
import { useState } from "react";
export default function HeroLines() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" bg-transparent">
      <svg
        className="absolute inset-0 w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Central Vertical Line */}
        <motion.line
          x1="50%"
          y1="50%"
          x2="50%"
          y2="66.67%"
          stroke={isHovered ? "#3B82F6" : "#CBD5E0"}
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 }}
        />

        {/* Left Horizontal Line */}
        <motion.line
          x1="70%"
          y1="66.67%"
          x2="9%"
          y2="66.67%"
          stroke={isHovered ? "#3B82F6" : "#CBD5E0"}
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        {/* left upward line */}
        <motion.line
          x1="9%"
          y1="10%"
          x2="9%"
          y2="66.67%"
          stroke={isHovered ? "#3B82F6" : "#CBD5E0"}
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />

        {/* Right Horizontal Line */}
        <motion.line
          x1="50%"
          y1="66.67%"
          x2="75%"
          y2="66.67%"
          stroke={isHovered ? "#3B82F6" : "#CBD5E0"}
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Central Node Connection */}
        <motion.line
          x1="50%"
          y1="66.67%"
          x2="50%"
          y2="80%"
          stroke={isHovered ? "#3B82F6" : "#CBD5E0"}
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />

        {/* Left Connection to "Your Customers" */}
        <motion.line
          x1="50%"
          y1="80%"
          x2="30%"
          y2="80%"
          stroke={isHovered ? "#3B82F6" : "#CBD5E0"}
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />

        {/* Right Connection to "Your CX Team" */}
        <motion.line
          x1="50%"
          y1="80%"
          x2="70%"
          y2="80%"
          stroke={isHovered ? "#3B82F6" : "#CBD5E0"}
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />

        {/* Team Member Connections */}
        {[1, 2, 3].map((_, index) => (
          <motion.line
            key={index}
            x1={`${70 + index * 5}%`}
            y1="80%"
            x2={`${70 + index * 5}%`}
            y2="90%"
            stroke={isHovered ? "#3B82F6" : "#CBD5E0"}
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.3, delay: 2 + index * 0.2 }}
          />
        ))}

        {/* Central Node */}
        <motion.circle
          cx="50%"
          cy="80%"
          r="10"
          fill={isHovered ? "#3B82F6" : "#CBD5E0"}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className=""
        />
      </svg>
    </div>
  );
}
