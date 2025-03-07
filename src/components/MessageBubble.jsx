import React from "react";
import { FaRobot, FaUser } from "react-icons/fa"; // Import icons from react-icons
import { FaUserAstronaut } from "react-icons/fa6";

const MessageBubble = ({ text, sender }) => {
  const isUser = sender === "user";

  return (
    <div
      className={`flex items-center ${
        isUser ? "justify-end" : "justify-start"
      } space-x-2`}
    >
      {/* AI Avatar */}
      {!isUser && (
        <FaRobot className="text-gray-400 w-8 h-8" /> // AI Icon
      )}

      {/* Message Bubble */}
      <div
        className={`px-4 py-2 max-w-[60%] rounded-lg ${
          isUser ? "bg-gray-800 text-white" : "bg-gray-800 text-white"
        }`}
      >
        {text}
      </div>

      {/* User Avatar */}
      {isUser && (
        <FaUserAstronaut className="text-gray-400 w-7 h-8" /> // User Icon
      )}
    </div>
  );
};

export default MessageBubble;
