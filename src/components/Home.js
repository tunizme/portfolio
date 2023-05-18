import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";

const Home = () => {
  return (
    <div
      id="home"
      className="h-screen md:w-9/12 w-11/12 m-auto md:pt-[140px] pt-[80px] border-[--border-color] border-b-[1px]"
    >
      <h3 className="text-center font-bold text-4xl tracking-widest">
        I'm <strong className="text-cyan-500">Anh Vu</strong>
      </h3>
      <h4 className="text-center font-medium text-2xl pt-3 tracking-wider">
        Welcome to my personal website!
      </h4>
      <p className="text-center font-medium text-xl pt-3 text-[var(--text-color-desc)] tracking-wider">
        {/* My Aim in Life to become ... */}
      </p>
      <div className="w-full flex pt-4 items-center justify-center">
        <div className="w-[300px] h-[300px] rounded-full border-2 border-gray-500 flex items-center justify-center">
          <div className="w-[250px] h-[250px] rounded-full overflow-hidden">
            <img
              className="object-cover"
              src="../assets/img/avatar.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex pt-10 items-center justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/tr%E1%BA%A7n-anh-v%C5%A9-b18aab264/"
          target="_blank"
          rel="noreferrer"
        >
          <span
            className="block p-3 bg-[var(--container-color)] dark:bg-[var()] shadow-gray-500 shadow-md rounded-full hover:-translate-y-3 duration-200 ease-linear
            hover:bg-[#0366c2]"
          >
            <FaLinkedinIn size={20} color="white" />
          </span>
        </a>
        <a href="https://github.com/tunizme" target="_blank" rel="noreferrer">
          <span
            className="block p-3 bg-[var(--container-color)] dark:bg-[var()] shadow-gray-500 shadow-md rounded-full hover:-translate-y-3 duration-200 ease-linear
            hover:bg-[#181a1b]"
          >
            <FaGithub size={20} color="white" />
          </span>
        </a>
        <a
          href="https://www.facebook.com/VuKunnn/"
          target="_blank"
          rel="noreferrer"
        >
          <span
            className="block p-3 bg-[var(--container-color)] dark:bg-[var()] shadow-gray-500 shadow-md rounded-full hover:-translate-y-3 duration-200 ease-linear
            hover:bg-[#4267B2]"
          >
            <FaFacebookF size={20} color="white" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Home;
