import { animated, useSpring } from "@react-spring/web";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const floatingElements = [
  { id: 1, title: "E-Signature", top: "40%", left: "60%" },
  { id: 2, title: "Invoices", top: "20%", right: "20%" },
  { id: 3, title: "E-Forms", bottom: "30%", left: "70%" },
  { id: 4, title: "E-Receipts", top: "30%", right: "10%" },
];

interface Point {
  x: number;
  y: number;
}

const AnimatedPath = animated("path");

export default function LandingPage() {
  const [elementPositions, setElementPositions] = useState<Point[]>([]);
  const [centralPosition, setCenterPosition] = useState<Point>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updatePositions = () => {
      if (!containerRef.current) return;
      const centerElement =
        containerRef.current.querySelector(".center-circle");
      if (centerElement) {
        const rect = centerElement.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        setCenterPosition({
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        });
      }
      const positions = elementsRef.current.map((element) => {
        if (!element || !containerRef.current) return { x: 0, y: 0 };
        const rect = element.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        return {
          x: rect.left - containerRect.left + rect.width / 2,
          y: rect.top - containerRect.top + rect.height / 2,
        };
      });
      setElementPositions(positions);
    };
    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  const lineSpring = useSpring({
    from: { length: 0 },
    to: { length: 1 },
    config: { duration: 1500 },
  });
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-purple-50">
      {/* Hero Content */}
      <div className="container mx-auto px-6 pt-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center justify-center font-medium  border border-gray-300 shadow-sm  h-8 px-3 text-xs rounded-full">
              {" "}
              🎉 <div className="bg-gray-400 w-0.5 mx-2 h-3" /> New ! Globe
              Animations <ArrowRight className=" mx-2 w-3 h-3" />
            </span>
            <h1 className="mt-4 text-5xl font-bold leading-tight text-gray-900">
              Effortless Motion UI - Built with{" "}
              <span className="text-blue-800">React and TailwindCss</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Next-Gen Data Integrity Powered by Blockchain-Verified Timestamps
              and Advanced e-Signatures. Secure and seal any data with ease. The
              future of digital signed agreements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3 bg-gray-900 text-white rounded-full flex items-center gap-2 hover:bg-gray-800 transition-colors"
            >
              Protect Your Data Now
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right Column - Interactive Illustration */}
          <div
            ref={containerRef}
            className="relative h-[600px] hidden lg:block"
          >
            {/* connecting lines svg */}
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ zIndex: 1 }}
            >
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
                  <stop offset="100%" stopColor="rgba(147, 51, 234, 0.7)" />
                </linearGradient>
              </defs>
              {/* animated connection lines */}
              {elementPositions.map((pos, index) => (
                <AnimatedPath
                  key={`line-${index}`}
                  d={`M ${centralPosition.x} ${centralPosition.y} L ${pos.x} ${pos.y}`}
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray={1}
                  strokeDashoffset={lineSpring.length.to((x) => 1 - x)}
                />
              ))}
              {/* inter element connections  */}
              {elementPositions.map((pos1, i) =>
                elementPositions.map((pos2, j) => {
                  if (i < j) {
                    return (
                      <AnimatedPath
                        key={`connection-${i}-${j}`}
                        d={`M ${pos1.x} L ${pos2.x} ${pos2.y}`}
                        stroke="url(#lineGradient)"
                        strokeWidth="1.5"
                        fill="none"
                        strokeDasharray={1}
                        strokeDashoffset={lineSpring.length.to((x) => 1 - x)}
                      />
                    );
                  }
                  return null;
                })
              )}
            </svg>
            {/* Center Circle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="center-circle absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-600 rounded-full opacity-90"
            />

            {/* Floating Elements */}
            {floatingElements.map((element, index) => (
              <motion.div
                key={element.id}
                ref={(el) => (elementsRef.current[index] = el)}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="absolute z-10 bg-white p-4 rounded-xl shadow-lg w-40"
                style={{
                  top: element.top,
                  left: element.left,
                  right: element.right,
                  bottom: element.bottom,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  <span className="text-sm font-medium text-gray-700">
                    {element.title}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Connecting Lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ zIndex: 1 }}
            >
              <pattern
                id="grid"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" className="fill-gray-900" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
