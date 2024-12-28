import React from "react";

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
    <button
      className={`px-4 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "text-blue-600 border-b-2 border-blue-600"
          : "text-gray-600 hover:text-blue-600"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
