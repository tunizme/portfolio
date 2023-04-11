import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiSun, FiMoon, FiBookOpen } from "react-icons/fi";
import { HiOutlineHome, HiMenuAlt1 } from "react-icons/hi";
import {
  AiOutlineUser,
  AiOutlineFire,
  AiOutlineProject,
  AiOutlineContacts,
  AiOutlineClose,
} from "react-icons/ai";
const Navbar = (props) => {
  const [shadow, setShadow] = useState(false);
  const [menu, setMenu] = useState(false);
  const handleSetMenu = () => {
    setMenu((pre) => !pre);
  };
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
              activeClass="text-[--text-color-light] dark:text-[--text-color-dark] duration-75 ease-in-out"
              spy
              offset={-80}
              to="home"
              className="ml-10 items-center cursor-pointer"
            >
              Home
            </Link>
            <Link
              activeClass="text-[--text-color-light] dark:text-[--text-color-dark] duration-75 ease-in-out"
              spy
              offset={-80}
              to="about"
              className="ml-10 items-center cursor-pointer"
            >
              About
            </Link>
            <Link
              activeClass="text-[--text-color-light] dark:text-[--text-color-dark] duration-75 ease-in-out"
              spy
              offset={-80}
              to="skills"
              className="ml-10 items-center cursor-pointer"
            >
              Skills
            </Link>
            <Link
              activeClass="text-[--text-color-light] dark:text-[--text-color-dark] duration-75 ease-in-out"
              spy
              offset={-80}
              to="education"
              className="ml-10 items-center cursor-pointer"
            >
              Education
            </Link>
            <Link
              activeClass="text-[--text-color-light] dark:text-[--text-color-dark] duration-75 ease-in-out"
              spy
              offset={-80}
              to="projects"
              className="ml-10 items-center cursor-pointer"
            >
              Projects
            </Link>
            <Link
              activeClass="text-[--text-color-light] dark:text-[--text-color-dark] duration-75 ease-in-out"
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
      <div className="fixed lg:hidden w-[340px] right-0 left-0 bottom-8 m-auto bg-[#0000004d] backdrop-blur-[15px] z-[100] rounded-full">
        <div className="w-full h-16 flex items-center justify-center">
          <div
            className={`${
              menu ? "hidden" : "flex"
            } w-full justify-between px-8`}
          >
            <Link
              spy
              to="home"
              className="text-[--text-color-dark] cursor-pointer"
            >
              <HiOutlineHome size={25} />
            </Link>
            <div className="flex gap-4">
              <span
                className="flex items-center cursor-pointer text-[--color-text-dark]"
                onClick={props.toggleDarkMode}
              >
                {props.darkMode ? <FiSun size={25} /> : <FiMoon size={25} />}
              </span>
              <span
                className="flex items-center cursor-pointer"
                onClick={handleSetMenu}
              >
                <HiMenuAlt1 size={25} color="var(--text-color-dark)" />
              </span>
            </div>
          </div>
          <div
            className={`${
              menu ? "flex" : "hidden"
            } w-full justify-between px-8 relative`}
          >
            <div
              className="absolute p-1 rounded-full bg-[#000000]  top-[-24px] right-0"
              onClick={handleSetMenu}
            >
              <AiOutlineClose size={15} color="var(--text-color-dark)" />
            </div>
            <Link
              spy
              to="about"
              className="text-[--text-color-dark] cursor-pointer"
            >
              <AiOutlineUser size={25} />
            </Link>
            <Link
              spy
              to="skills"
              className="text-[--text-color-dark] cursor-pointer"
            >
              <AiOutlineFire size={25} />
            </Link>
            <Link
              spy
              to="education"
              className="text-[--text-color-dark] cursor-pointer"
            >
              <FiBookOpen size={25} />
            </Link>
            <Link
              spy
              to="projects"
              className="text-[--text-color-dark] cursor-pointer"
            >
              <AiOutlineProject size={25} />
            </Link>
            <Link
              spy
              to="contact"
              className="text-[--text-color-dark] cursor-pointer"
            >
              <AiOutlineContacts size={25} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
