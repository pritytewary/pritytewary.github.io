import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

import SocialLinks from "./components/SocialLinks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Workpage from "./works/page";
import Skillpage from "./skillsets/page";
import Contactpage from "./contact/page";

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-black to-gray-800 text-white min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Workpage />} />
          <Route path="/skillsets" element={<Skillpage />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>

        <SocialLinks />
      </div>
    </Router>
  );
}

export default App;
