import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full m-auto h-[60px] border-t-[1px] flex items-center justify-center">
      {/* <div className="flex items-center justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/tr%E1%BA%A7n-anh-v%C5%A9-b18aab264/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="block p-3 bg-[#00587c] shadow-lg rounded-full">
            <FaLinkedinIn size={20} color="white" />
          </span>
        </a>
        <a href="https://github.com/tunizme" target="_blank" rel="noreferrer">
          <span className="block p-3 bg-[#00587c] shadow-lg rounded-full">
            <FaGithub size={20} color="white" />
          </span>
        </a>
        <a
          href="https://www.facebook.com/VuKunnn/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="block p-3 bg-[#00587c] shadow-lg rounded-full">
            <FaFacebookF size={20} color="white" />
          </span>
        </a>
      </div> */}
      <p className="text-center font-normal text-sm">
        © All rights reserved by Anh Vu
      </p>
    </div>
  );
};

export default Footer;
