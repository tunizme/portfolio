import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="md:w-9/12 w-11/12 m-auto md:pt-40 pt-[80px] pb-40 border-[var(--border-color)] border-b-[1px]"
    >
      <h1 className="text-center font-bold text-4xl">About</h1>
      <p className="text-center font-normal text-sm text-[var(--text-color-desc)]">
        Who I Am
      </p>
    </div>
  );
};

export default About;
