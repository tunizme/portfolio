import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Main from "./components/Main";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode((pre) => !pre);
  };
  return (
    <div
      className={`App transition-all ease-in-out duration-500 ${
        darkMode ? "dark" : ""
      }`}
    >
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Main>
        <Home />
        <About />
        <Skills />
        <Education />
        <Project />
        <Contact />
        <Footer />
      </Main>
    </div>
  );
}

export default App;
