import React, { useEffect, useState } from "react";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });
  // update the dark mode class on root element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // save the preferences to local storage
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  return (
    <>
      <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2">
        {/* Sliding background */}
        <div
          className={`absolute inset-0 -z-10 bg-gradient-to-r from-black to-black transition-transform duration-700 ease-in-out ${
            isDarkMode ? "translate-x-0" : "-translate-x-full"
          }`}
        ></div>
        {isDarkMode ? "🌙" : "☀️"}{" "}
      </button>
    </>
  );
};

export default DarkModeToggle;
