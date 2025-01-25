import { ReactNode } from "react";

export interface ComponentCardProps {
  icon?: ReactNode;
  title: string;
  category: "Popular" | "Sections" | "Components";
  href?: string;
  backgroundText?: string;
}

export const componentsTypes: ComponentCardProps[] = [
  {
    backgroundText: "Navigation Components",
    title: "NAVBARS",
    href: "/components/navbar",
    category: "Popular",
  },
  // { icon: "👥", title: "TESTIMONIAL SECTIONS", category: "Popular" },
  // { icon: "⟶", title: "BUTTONS", category: "Popular" },
  // { icon: "🎯", title: "HERO SECTIONS", category: "Popular" },
  // { icon: "⟫", title: "CAROUSELS", category: "Popular" },
  {
    backgroundText: "Feature Sections",
    title: "FEATURES",
    href: "/components/features",
    category: "Popular",
  },
  {
    backgroundText: "DropDown Menus",
    title: "MENUS",
    href: "/components/menus",
    category: "Popular",
  },
  {
    backgroundText: "Animations",
    title: "Animations",
    href: "/components/animations",
    category: "Popular",
  },
  {
    backgroundText: "Hero Sections",
    title: "Hero",
    href: "/components/heros",
    category: "Sections",
  },
  {
    backgroundText: "Buttons",
    title: "Buttons",
    href: "/components/buttons",
    category: "Components",
  },
  {
    backgroundText: "Cards",
    title: "Cards",
    href: "/components/cards",
    category: "Components",
  },
  // { icon: "⟳", title: "TOGGLES", category: "Popular" },
  // { icon: "📦", title: "3D SECTIONS", category: "Sections" },
  // { icon: "❓", title: "FAQ SECTIONS", category: "Sections" },
  // { icon: "⚙️", title: "FEATURES SECTIONS", category: "Sections" },
  // { icon: "✎", title: "FORM SECTIONS", category: "Sections" },
];
