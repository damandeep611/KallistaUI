import { motion } from "framer-motion";

const marqueeContent = [
  "SIGN IN SECTIONS",
  "TESTIMONIAL SECTIONS",
  "3D SECTIONS",
  "FAQ SECTIONS",
  "FEATURES SECTIONS",
  "CAROUSELS",
  "COUNTDOWN",
  "DROPDOWN MENUS",
  "GRIDS",
  "INPUTS",
  "LINKS",
  "LOADERS",
];

export default function MarqueeLanding() {
  return (
    <div className="relative flex flex-col overflow-hidden bg-indigo-600 py-8 text-white">
      {/* TOP ROW moving left */}
      <div className="flex whitespace-nowrap">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="flex gap-8 pr-8 text-3xl font-bold"
        >
          {marqueeContent.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="flex gap-8 pr-8 text-3xl font-bold"
        >
          {marqueeContent.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </motion.div>
      </div>
      {/* Bottom row - moving right */}
      <div className="flex whitespace-nowrap pt-8 ">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 70,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="flex gap-8 pr-8 text-3xl font-bold"
        >
          {marqueeContent.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 70,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="flex gap-8 pr-8 text-3xl font-bold"
        >
          {marqueeContent.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
