import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  status: "In Progress" | "Completed" | "On Hold";
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Website Redesign",
    description:
      "Overhaul of company website with modern design and improved UX.",
    status: "In Progress",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Creating a cross-platform mobile app for customer engagement.",
    status: "On Hold",
    color: "bg-yellow-500",
  },
  {
    id: 3,
    title: "Data Analytics Dashboard",
    description:
      "Building a comprehensive dashboard for business intelligence.",
    status: "Completed",
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "E-commerce Integration",
    description:
      "Integrating e-commerce functionality into existing web platform.",
    status: "In Progress",
    color: "bg-purple-500",
  },
];

export default function FileCabinet() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full space-y-4">
      <AnimatePresence>
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`w-full rounded-lg shadow-md overflow-hidden cursor-pointer ${project.color}`}
            style={{
              zIndex: projects.length - index,
              marginTop: index === 0 ? "0" : "-16px", // Stack effect
            }}
            onClick={() => toggleExpand(project.id)}
            whileHover={{
              y: -8,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              layout
              className="p-4 bg-opacity-90 backdrop-blur-sm flex justify-between items-center"
            >
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              {expandedId === project.id ? (
                <ChevronUp size={20} className="text-white" />
              ) : (
                <ChevronDown size={20} className="text-white" />
              )}
            </motion.div>
            <AnimatePresence>
              {expandedId === project.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 bg-white"
                >
                  <p className="text-gray-600 mb-2">{project.description}</p>
                  <p className="text-sm font-medium">
                    Status:{" "}
                    <span className={`${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function getStatusColor(status: Project["status"]) {
  switch (status) {
    case "In Progress":
      return "text-blue-600";
    case "Completed":
      return "text-green-600";
    case "On Hold":
      return "text-yellow-600";
    default:
      return "text-gray-600";
  }
}
