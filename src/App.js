import { useEffect, useState } from "react";
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
    setTimeout(() => {
      document.documentElement.setAttribute(
        "data-color-scheme",
        darkMode ? "" : "dark"
      );
    }, 130);
  };

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <Main>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
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
