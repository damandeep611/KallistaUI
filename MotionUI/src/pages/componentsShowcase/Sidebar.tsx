import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface SidebarItem {
  title: string;
  items?: string[];
  icon?: ReactNode;
}

const sidebarItems: SidebarItem[] = [
  { title: "All Components", icon: "⚡" },
  {
    title: "Sections",
    items: [
      "FAQ",
      "Forms",
      "Heros",
      "Features",
      "Pricing",
      "Sign In",
      "Stats",
      "Testimonials",
      "3D",
      "Kanban Board",
    ],
  },
  {
    title: "Components",
    items: [
      "Accordions",
      "Buttons",
      "Calendars",
      "Cards",
      "Carousels",
      "Countdown",
      "DropDown Menu",
    ],
  },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("All Components");
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <>
      {/* desktop sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="hidden md:block fixed left-0 top-16 h-screen w-64 bg-white border-r border-gray-200 overflow-y-auto"
      >
        <div className="p-4">
          {sidebarItems.map((item) => (
            <div className="mb-6" key={item.title}>
              <button
                onClick={() => setActiveItem(item.title)}
                className={`flex items-center w-full text-left px-4 rounded-lg transition-colors ${
                  activeItem === item.title
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.icon && <span className="mr-3">{item.icon}</span>}{" "}
                <span className="font-medium">{item.title}</span>
              </button>
              {item.items && (
                <div className="mt-2 ml-4 space-y-1">
                  {item.items.map((subItem) => (
                    <button
                      onClick={() => setActiveItem(subItem)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeItem === subItem
                          ? "text-indigo-600 bg-indigo-50"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                      key={subItem}
                    >
                      {subItem}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
      {/* mobile naviation */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
        <motion.button
          onClick={toggleSidebar}
          className="w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex justify-between items-center"
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-medium text-gray-700">Menu</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowDown />
          </motion.span>
        </motion.button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-[60vh] overflow-y-auto  custom-scrollbar"
            >
              <div className="p-4">
                {sidebarItems.map((item) => (
                  <div key={item.title}>
                    <button
                      onClick={() => {
                        setActiveItem(item.title);
                        setIsOpen(false);
                      }}
                      className={`flex items-center w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeItem === item.title
                          ? "bg-indigo-50 text-indigo-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {item.icon && <span className="mr-3">{item.icon}</span>}{" "}
                      <span className="font-medium">{item.title}</span>
                    </button>
                    {item.items && (
                      <div>
                        {item.items.map((subItem) => (
                          <button
                            key={subItem}
                            onClick={() => {
                              setActiveItem(subItem);
                              setIsOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                              activeItem === subItem
                                ? "text-indigo-600 bg-indigo-50"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            {subItem}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
