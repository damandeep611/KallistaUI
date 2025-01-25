import { motion } from "framer-motion";

interface HoverMarqProps {
  heading: string;
  backgroundText: string;
}

export default function HoverMarquee() {
  return (
    <div className="flex items-center justify-center ">
      <div>
        <HoverMarq
          heading="Hover Reveal"
          backgroundText="Reveal Text animation"
        />
      </div>
    </div>
  );
}
interface HoverMarqProps {
  heading: string;
  backgroundText: string;
}

const HoverMarq = ({ heading, backgroundText }: HoverMarqProps) => {
  return (
    <motion.div
      className="relative w-64 h-96 rounded-lg overflow-hidden cursor-pointer"
      whileHover={{
        scale: 1.05,
        rotate: 2,
        transition: { duration: 0.3 },
      }}
      style={{
        cursor: "url(https://img.icons8.com/sf-black/64/hand-cursor.png), auto",
      }} // Add your custom cursor here
    >
      {/* gradient bg */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-700 to-violet-700"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1, opacity: 0.8 }}
      />

      {/* heading text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 text-white text-3xl font-bold p-6"
        whileHover={{ scale: 1.1 }}
      >
        {heading}
      </motion.div>

      {/* marquee bg text */}
      <motion.div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.div
          className="whitespace-nowrap text-white text-opacity-10 text-9xl font-bold"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          whileHover={{ opacity: 0.2 }}
        >
          {backgroundText.repeat(10)}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
