import React, { useState } from "react";
import { useTabs } from "../hooks/useTabs";
import { TabButton } from "./TabButton";
import { RefreshCw } from "lucide-react";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import { CodeBlock } from "./codeblock/CodeBlock";

interface ShowcaseComponentProps {
  title: string;
  badge?: string;
  component: React.ReactNode;
  code: string;
  language: string;
  fullWidth?: boolean;
}

export const ShowcaseComponent: React.FC<ShowcaseComponentProps> = ({
  title,
  badge,
  component,
  code,
  language,
  fullWidth,
}) => {
  const { activeTab, switchTab } = useTabs();
  const [key, setKey] = useState(0);

  const reloadComponent = () => {
    setKey((prevKey) => prevKey + 1);
  };
  return (
    <div
      className={`bg-white shadow-md rounded-lg overflow-hidden ${
        fullWidth ? "w-full" : "max-w-4xl"
      }`}
    >
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h2>{title}</h2>
          {badge && <span className="px-2 py-1">{badge}</span>}
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
        <button className="ml-auto mr-4" onClick={reloadComponent}>
          <RefreshCw className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <div>
        {activeTab === "VIEW" ? (
          <div>
            <ErrorBoundary>
              <div key={key}>{component}</div>
            </ErrorBoundary>
          </div>
        ) : (
          <div>
            <CodeBlock code={code} language={language} />
          </div>
        )}
      </div>
    </div>
  );
};
