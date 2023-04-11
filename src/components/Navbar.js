import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiOutlineHome } from "react-icons/hi";
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
    <>
      <div
        className={`fixed lg:block hidden ${
          shadow ? "shadow-lg" : ""
        } top-0 w-full h-20 z-[100] bg-inherit`}
      >
        <div className="flex md:w-9/12 w-full m-auto justify-between items-center h-full">
          <Link to="home" className="items-center cursor-pointer">
            tunizme
          </Link>
          <div className="hidden md:flex text-[var(--text-color-desc)]">
            <Link
              activeClass="text-[--text-color-light] dark:text-[--text-color-dark] font-medium"
              spy
              offset={-80}
              to="home"
              className="ml-10 items-center cursor-pointer"
            >
              Home
            </Link>
            <Link
              activeClass="text-[--text-color-light] dark:text-[--text-color-dark] font-medium"
              spy
              offset={-80}
              to="about"
              className="ml-10 items-center cursor-pointer"
            >
              About
            </Link>
            <Link
              activeClass="text-[--text-color-light] dark:text-[--text-color-dark] font-medium"
              spy
              offset={-80}
              to="skills"
              className="ml-10 items-center cursor-pointer"
            >
              Skills
            </Link>
            <Link
              activeClass="text-[--text-color-light] dark:text-[--text-color-dark] font-medium"
              spy
              offset={-80}
              to="education"
              className="ml-10 items-center cursor-pointer"
            >
              Education
            </Link>
            <Link
              activeClass="text-[--text-color-light] dark:text-[--text-color-dark] font-medium"
              spy
              offset={-80}
              to="projects"
              className="ml-10 items-center cursor-pointer"
            >
              Projects
            </Link>
            <Link
              activeClass="text-[--text-color-light] dark:text-[--text-color-dark] font-medium"
              spy
              offset={-80}
              to="contact"
              className="ml-10 items-center cursor-pointer"
            >
              Contact
            </Link>
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
      <div className="fixed lg:hidden h-16 w-[360px] right-0 left-0 bottom-8 m-auto bg-red-700 z-[100] rounded-full">
        <div className="flex w-full h-full items-center justify-center">
          <Link
            activeClass="text-[--text-color-light] dark:text-[--text-color-dark] font-medium"
            spy
            to="home"
          >
            <HiOutlineHome size={30} />
          </Link>
          <Link
            activeClass="text-[--text-color-light] dark:text-[--text-color-dark] font-medium"
            spy
            to="about"
          >
            <HiOutlineHome size={30} />
          </Link>
          <Link
            activeClass="text-[--text-color-light] dark:text-[--text-color-dark] font-medium"
            spy
            to="skills"
          >
            <HiOutlineHome size={30} />
          </Link>
          <Link
            activeClass="text-[--text-color-light] dark:text-[--text-color-dark] font-medium"
            spy
            to="education"
          >
            <HiOutlineHome size={30} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
