import { motion } from "framer-motion";
import { useRef } from "react";
const floatingElements = [
  { id: 1, title: "Card One", top: "40%", left: "60%" },
  { id: 2, title: "Card Two", top: "20%", left: "20%" },
  { id: 3, title: "Card Three", bottom: "30%", left: "70%" },
  { id: 4, title: "Card Four", top: "30%", right: "10%" },
];

export default function CenterCircleCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  return (
    <div ref={containerRef} className="relative h-[600px] lg:block">
      <motion.div className="center-circle absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-700 rounded-full opacity-90" />
      {floatingElements.map((element, index) => (
        <motion.div
          key={element.id}
          ref={(el) => (elementsRef.current[index] = el)}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          className="absolute z-10 bg-white border border-black p-4 rounded-xl shadow-lg w-40"
          style={{
            top: element.top,
            left: element.left,
            right: element.right,
            bottom: element.bottom,
          }}
        >
          <div className="flex items-center gap-3">
            <div className="  rounded-full">
              <span className="text-sm font-medium text-gray-700">
                {element.title}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
