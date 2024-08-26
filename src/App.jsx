import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 text-white min-h-screen">
      <NavBar />
      <Home />
      <About />
      <SocialLinks />
    </div>
  );
}

export default App;
