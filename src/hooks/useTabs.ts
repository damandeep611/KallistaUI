import { useState } from "react";

type Tab = "VIEW" | "CODE";

export function useTabs(initialTab: Tab = "VIEW") {
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);
  const switchTab = (tab: Tab) => {
    setActiveTab(tab);
  };
  return { activeTab, switchTab };
}
