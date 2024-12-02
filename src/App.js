// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Pomodoro from "./Pomodoro";
import GuidedBreathing from "./GuidedBreathing";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
        <Route path="/guided-breathing" element={<GuidedBreathing />} />
      </Routes>
    </Router>
  );
};

export default App;
