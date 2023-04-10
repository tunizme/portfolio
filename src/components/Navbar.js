import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
const Navbar = (props) => {
  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={`fixed lg:block hidden ${
        shadow ? "shadow-lg" : ""
      } top-0 w-full h-20 z-[100] bg-inherit`}
    >
      <div className="flex md:w-9/12 w-full m-auto justify-between items-center h-full">
        <a href="/#">tunizme</a>
        <div className="hidden md:flex text-[var(--text-color-desc)]">
          <a className="ml-10 items-center" href="#home">
            Home
          </a>
          <a className="ml-10 items-center" href="#about">
            About
          </a>
          <a className="ml-10 items-center" href="#skills">
            Skills
          </a>
          <a className="ml-10 items-center" href="#education">
            Education
          </a>
          <a className="ml-10 items-center" href="#project">
            Projects
          </a>
          <a className="ml-10 items-center" href="#contact">
            Contact
          </a>
          <span
            className={`ml-10 flex items-center cursor-pointer ${
              props.darkMode
                ? "hover:text-[var(--text-color-dark)]"
                : "hover:text-[var(--text-color-light)]"
            } `}
            onClick={props.toggleDarkMode}
          >
            {props.darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
