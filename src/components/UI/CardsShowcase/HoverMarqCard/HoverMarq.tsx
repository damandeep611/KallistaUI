import { useState } from "react";
import { motion } from "framer-motion";

interface HoverMarqProps {
  heading: string;
  backgroundText: string;
}

export default function HoverMarquee() {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-6">
      <div>
        <HoverMarq
          heading="Marquee Card"
          backgroundText="Reveal Text animation"
        />
      </div>
    </div>
  );
}

const HoverMarq = ({ heading, backgroundText }: HoverMarqProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="relative w-64 h-96 rounded-lg overflow-hidden cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* gradient bg */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-700 to to-violet-700"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      />
      {/* heading text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 text-white text-3xl font-bold p-6"
      >
        {heading}
      </motion.div>
      {/* marquee bg text */}
      <motion.div
        className=" absolute inset-0 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="whitespace-nowrap text-white text-opacity-10 text-9xl font-bold"
          animate={{ x: isHovered ? [0, -1000] : 0 }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {backgroundText.repeat(10)}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
