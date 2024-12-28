import { ReactNode, useState } from "react";

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
      <div className="fixed left-0 top-16 h-screen w-64 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-4">
          {sidebarItems.map((item) => (
            <div className="mb-6" key={item.title}>
              <button className="flex items-center w-full text-left px-4 rounded-lg ">
                {item.icon && <span>{item.icon}</span>}{" "}
                <span className="font-medium">{item.title}</span>
              </button>
              {item.items && (
                <div className="mt-2 ml-4 space-y-1">
                  {item.items.map((subItem) => (
                    <button
                      className="w-full text-left px-4 py-2"
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
      </div>
    </>
  );
}
