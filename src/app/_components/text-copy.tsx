"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function TextCopy({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex items-center gap-1 transition-colors">
      <p className="font-light text-primary-20 text-wrap flex-grow text-xs">
        {text}
      </p>
      <button
        onClick={handleCopy}
        aria-label={isCopied ? "Copied" : "Copy to clipboard"}
        className="flex-shrink-0"
      >
        {isCopied ? (
          <Check className="h-5 w-3  text-green-500" />
        ) : (
          <Copy className="h-5 w-3" />
        )}
      </button>
    </div>
  );
}
