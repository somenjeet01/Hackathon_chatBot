import React, { useEffect } from "react";
import "./Bubbles.css"; // Import the CSS file

const Bubbles = () => {
  useEffect(() => {
    const bubbleContainer = document.querySelector(".chat-container"); // Select the container

    for (let i = 0; i < 15; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
      const size = Math.random() * 50 + 10; // Random size
      const left = Math.random() * 100; // Random horizontal position
      const duration = Math.random() * 10 + 5; // Random speed
      const delay = Math.random() * 5; // Random delay

      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}%`;
      bubble.style.animationDuration = `${duration}s`;
      bubble.style.animationDelay = `-${delay}s`;

      bubbleContainer.appendChild(bubble);
    }
  }, []);

  return <div className="chat-container"></div>;
};

export default Bubbles;
