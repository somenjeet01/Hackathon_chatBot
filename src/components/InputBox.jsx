import React, { useState } from "react";

const InputBox = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      onSend(message);
      setMessage("");
    }
  };

const handleKeyDown = (event) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault(); // Prevent newline in input field
    handleSend();
  }
};


  return (
    <div className="flex items-center w-full bg-transparent rounded-lg p-3 shadow-lg">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={5} 
        className="flex-1 resize-none overflow-hidden p-3 text-lg bg-transparent outline-none rounded-xl max-h-40 min-h-[50px] w-full shadow-none h-16 overflow-y-auto"
        placeholder="Type a message..."
        style={{
          lineHeight: "2",
          height: `${Math.min(40 + message.split("\n").length * 20, 160)}px`,
        }}
        onKeyDown={handleKeyDown} // Detect Enter key
      />
      <button
        onClick={handleSend}
        className="ml-3 px-6 py-3 0 text-white rounded-lg hover:bg-blue-600 text-lg dark:border-gray-600"
      >
        Send
      </button>
    </div>
  );
};

export default InputBox;
