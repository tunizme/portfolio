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
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode"))
      ? JSON.parse(localStorage.getItem("darkMode"))
      : false
  );
  const toggleDarkMode = () => {
    setDarkMode((pre) => !pre);
    setTimeout(() => {
      document.documentElement.setAttribute(
        "data-color-scheme",
        darkMode ? "" : "dark"
      );
    }, 130);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.setAttribute("data-color-scheme", "dark");
    }
  }, [darkMode]);

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
