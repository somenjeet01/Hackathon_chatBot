import React, { useState, useEffect, useRef } from "react";
import MessageBubble from "../components/MessageBubble";
import TypingIndicator from "./TypingIndicator";
import InputBox from "./InputBox";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "agent" },
  ]);
  const [typing, setTyping] = useState(false);
  const chatRef = useRef(null);

  const handleSend = (message) => {
    setMessages([...messages, { text: message, sender: "user" }]);
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "I am here to help!", sender: "agent" },
      ]);
      setTyping(false);
    }, 2000);
  };

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="flex flex-col w-[90%] max-w-6xl mx-auto h-[80vh] bg-transparent">
      {/* Chat Messages (Fully Transparent) */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto p-6 space-y-4 bg-transparent"
      >
        {messages.map((msg, index) => (
          <MessageBubble key={index} text={msg.text} sender={msg.sender}  />
        ))}
        {typing &&  <TypingIndicator />}
      </div>

      {/* Input Box (Transparent, No Shadow) */}
      <div className="mt-4 w-full text-amber-50">
        <InputBox onSend={handleSend} />
      </div>
    </div> 
  );
};

export default ChatBox;
