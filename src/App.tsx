import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/home"
import { Go } from "./courseProgram/go/main"
import Rust from "./courseProgram/rust/main"
import Python from "./courseProgram/python/main"
import Typescript from "./courseProgram/typescript/main"
import { SidebarDemo } from "./dashboard/dashboard"

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<SidebarDemo />} />
        <Route path="/go" element={<Go />} />
        <Route path="/rust" element={<Rust />} />
        <Route path="/python" element={<Python />} />
        <Route path="/typescript" element={<Typescript />} />
      </Routes>
    </Router>
  );
};

export default App;
