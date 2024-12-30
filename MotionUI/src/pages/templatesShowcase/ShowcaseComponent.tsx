import React, { useState } from "react";
import { useTabs } from "../../hooks/useTabs";
import { TabButton } from "./TabButton";
import { RefreshCw } from "lucide-react";
import { CodeBlock } from "./codeblock/CodeBlock";
import { AnimatePresence, motion } from "framer-motion";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

interface ShowcaseComponentProps {
  title: string;
  badge?: string;
  component: React.ReactNode;
  code: string;
  language: string;
  fullWidth?: boolean;
  height?: string | number;
  containerStyle?: React.CSSProperties;
}

export const ShowcaseComponent: React.FC<ShowcaseComponentProps> = ({
  title,
  badge,
  component,
  code,
  language,
  fullWidth,
  height,
   containerStyle
}) => {
  const { activeTab, switchTab } = useTabs();
  const [key, setKey] = useState(0);

  const reloadComponent = () => {
    setKey((prevKey) => prevKey + 1);
  };
  return (
    <div
      className={`border-2 border-blue-900 m-2 ${
        fullWidth ? "w-full" : "max-w-7xl"
      }`}
    >
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">{title}</h2>
          {badge && (
            <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">
              {badge}
            </span>
          )}
        </div>
      </div>
      <div className="border-b flex items-center">
        <TabButton
          label="VIEW"
          isActive={activeTab === "VIEW"}
          onClick={() => switchTab("VIEW")}
        />
        <TabButton
          label="CODE"
          isActive={activeTab === "CODE"}
          onClick={() => switchTab("CODE")}
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="ml-auto mr-4"
          onClick={reloadComponent}
        >
          <RefreshCw className="w-5 h-5 text-gray-600" />
        </motion.button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === "VIEW" ? (
            <div className="p-4">
              <ErrorBoundary>
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ height:  height || 'auto', overflow: "auto", ...containerStyle}}
                >
                  {component}
                </motion.div>
              </ErrorBoundary>
            </div>
          ) : (
            <div className="p-4 max-h-[600px] overflow-auto">
              <CodeBlock code={code} language={language} />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
