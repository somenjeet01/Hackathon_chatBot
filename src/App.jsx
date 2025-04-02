import React from "react";
import Navbar from "./components/Navbar";
import ChatBox from "./components/ChatBox";
import Bubbles from "./components/Bubbles";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 items-center justify-center">
        <ChatBox />
        <Bubbles/>
      </div>
    </div>
  );
};

export default App;



