import { ReactNode } from "react";

export interface ComponentCardProps {
  icon: ReactNode;
  title: string;
  category: "Popular" | "Sections";
  href?: string;
}

export const componentsTypes: ComponentCardProps[] = [
  {
    icon: "=",
    title: "NAVBARS & MENUS",
    href: "/components/navbar",
    category: "Popular",
  },
  // { icon: "👥", title: "TESTIMONIAL SECTIONS", category: "Popular" },
  // { icon: "⟶", title: "BUTTONS", category: "Popular" },
  // { icon: "🎯", title: "HERO SECTIONS", category: "Popular" },
  // { icon: "⟫", title: "CAROUSELS", category: "Popular" },
  {
    icon: "⚙️",
    title: "FEATURES SECTIONS",
    href: "/components/features",
    category: "Popular",
  },
  {
    icon: "⋮",
    title: "DROPDOWN MENUS",
    href: "/components/menus",
    category: "Popular",
  },
  {
    icon: "-",
    title: "Hero Sections",
    href: "/components/heros",
    category: "Sections",
  },
  // { icon: "⟳", title: "TOGGLES", category: "Popular" },
  // { icon: "📦", title: "3D SECTIONS", category: "Sections" },
  // { icon: "❓", title: "FAQ SECTIONS", category: "Sections" },
  // { icon: "⚙️", title: "FEATURES SECTIONS", category: "Sections" },
  // { icon: "✎", title: "FORM SECTIONS", category: "Sections" },
];
