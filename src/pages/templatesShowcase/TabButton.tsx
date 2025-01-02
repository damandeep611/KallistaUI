import React from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export const TabButton: React.FC<TabButtonProps> = ({
  label,
  isActive,
  onClick,
}) => {
  return (
    <motion.button
      className={`px-4 py-2 text-sm font-medium   transition-colors ${
        isActive
          ? "text-white bg-blue-700"
          : "text-neutral-900  hover:text-blue-600"
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.button>
  );
};
