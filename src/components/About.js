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
      <div className="w-8/12 m-auto flex items-center justify-center pt-20">
        <p className="tracking-widest text-center">
          My full name is Tran Anh Vu. I'm studying at Danang University of
          Science and Technology majoring in computer engineering. My future
          direction is to become xyz ...
        </p>
      </div>
    </div>
  );
};

export default About;
