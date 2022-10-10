import React from "react";
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import ProjectList from "./components/ProjectList/ProjectList";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <ProjectList />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
