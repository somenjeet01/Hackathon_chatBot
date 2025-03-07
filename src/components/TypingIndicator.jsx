import React from "react";

const TypingIndicator = () => {
  return (
    <div className="flex gap-1 items-center p-2">
      <div className="w-2 h-2 zinc-400 rounded-full animate-pulse"></div>
      <div className="w-2 h-2 zinc-400 rounded-full animate-pulse delay-100"></div>
      <div className="w-2 h-2 zinc-400 rounded-full animate-pulse delay-200"></div>
    </div>
  );
};

export default TypingIndicator;
