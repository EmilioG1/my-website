import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import ProjectList from "./components/ProjectList/ProjectList";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
