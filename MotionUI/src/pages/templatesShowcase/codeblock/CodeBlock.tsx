import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";

interface CodeBlockProps {
  code: string;
  language: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const copytoClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="relative">
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
        {code}
      </SyntaxHighlighter>
      <motion.button
        onClick={copytoClipboard}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-2 right-2 px-2 py-1 text-xs bg-blue-600 text-white rounded"
      >
        {copied ? "Copied" : "Copy"}
      </motion.button>
    </div>
  );
};
