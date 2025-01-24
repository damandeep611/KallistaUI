import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function WriteCodeAnimation() {
  const [codeString, setCodeString] = useState("");

  useEffect(() => {
    setCodeString(`return fetch('https://www.flights-app.com/api/flights/recent', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => response.json())
.then(json => {
  return json;
});`);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 font-mono text-sm relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-cream-50 to-cream-100 dark:from-gray-700 dark:to-gray-600"
        animate={{
          background: [
            "linear-gradient(to top right, rgba(255, 253, 240, 0.05), rgba(255, 248, 225, 0.05))",
            "linear-gradient(to top right, rgba(255, 248, 225, 0.05), rgba(255, 253, 240, 0.05))",
            "linear-gradient(to top right, rgba(255, 253, 240, 0.05), rgba(255, 248, 225, 0.05))",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <div className="flex items-center gap-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <pre className="text-gray-700 dark:text-gray-300 relative z-10">
        <code>
          {codeString.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.03, delay: index * 0.03 }}
            >
              {char}
            </motion.span>
          ))}
        </code>
      </pre>
    </motion.div>
  );
}
