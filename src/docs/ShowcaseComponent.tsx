import React, { useState } from "react";
import { useTabs } from "../hooks/useTabs";
import { TabButton } from "./TabButton";
import { RefreshCw } from "lucide-react";
import { CodeBlock } from "./CodeBlock";
import { AnimatePresence, motion } from "framer-motion";
import ErrorBoundary from "./ErrorBoundary";

interface ShowcaseComponentProps {
  title: string;
  badge?: string;
  component: React.ReactNode;
  code: string;
  language: string;
  fullWidth?: boolean;
  height?: string | number;
}

export const ShowcaseComponent: React.FC<ShowcaseComponentProps> = ({
  title,
  badge,
  component,
  code,
  language,
  fullWidth,
  height,
}) => {
  const { activeTab, switchTab } = useTabs();
  const [key, setKey] = useState(0);

  const reloadComponent = () => {
    setKey((prevKey) => prevKey + 1);
  };
  return (
    <div
      className={` m-2 h-auto border border-gray-500  ${
        fullWidth ? "w-full" : "w-full"
      }`}
    >
      <div className="p-4 ">
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-medium">{title}</h2>
            {badge && (
              <span className="flex items-center gap-1 px-1.5 py-0.5 border border-emerald-600 text-xs text-emerald-900 bg-emerald-100">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                <span className="font-medium">{badge}</span>
              </span>
            )}
          </div>
          <div className="  flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="ml-auto mr-4"
              onClick={reloadComponent}
            >
              <RefreshCw className="w-5 h-5 text-gray-600" />
            </motion.button>
            <div className=" border-2 border-black flex items-center">
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
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={activeTab + key}>
          {activeTab === "VIEW" ? (
            <div className="p-4">
              <ErrorBoundary>
                <motion.div
                  key={key}
                  style={{
                    height: height || "auto",
                    overflow: "auto",
                  }}
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
