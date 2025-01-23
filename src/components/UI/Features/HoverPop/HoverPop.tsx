import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function HoverPop() {
  return (
    <div>
      <HoverPopImage />
    </div>
  );
}

interface TextItems {
  id: string;
  prefix: string;
  suffix: string;
  image: string;
  alt: string;
}

const services: TextItems[] = [
  {
    id: "interface",
    prefix: "Interface",
    suffix: "Design",
    image:
      "https://images.unsplash.com/photo-1545665277-5937489579f2?w=800&h=600&fit=crop",
    alt: "Ui Design",
  },
  {
    id: "3d",
    prefix: "3D Web",
    suffix: "Experiences",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    alt: "3D geometric shapes visualization",
  },
  {
    id: "creative",
    prefix: "Creative",
    suffix: "coding",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    alt: "Glowing lightbulb representing creative ideas",
  },
];

function HoverPopImage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 space-y-24">
      {services.map((service) => (
        <div
          key={service.id}
          onMouseEnter={() => setHoveredId(service.id)}
          onMouseLeave={() => setHoveredId(null)}
          className="h-[200px]"
        >
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter flex items-center">
            <span className="mr-6">{service.prefix}</span>
            <AnimatePresence>
              {hoveredId === service.id && (
                <motion.div
                  className="mx-8 my-4 w-[300px] h-[180px]"
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 300, damping: 24 },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    y: 20,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    className=""
                    initial={{ rotate: -10, scale: 0.9 }}
                    animate={{
                      rotate: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      },
                    }}
                  >
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.alt}
                      className="rounded-lg max-w-40 object-cover"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.span className="ml-6">{service.suffix}</motion.span>
          </h2>
        </div>
      ))}
    </div>
  );
}
