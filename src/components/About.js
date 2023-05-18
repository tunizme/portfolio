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
        <p className="tracking-widest text-justify">
          I'm Tran Anh Vu, a 20-year-old. I'm studying at Danang University of
          Science and Technology majoring in computer engineering. Born in Hue,
          I've been captivated by technology for as long as I can remember.
          Choosing computer engineering as my field of study allows me to
          contribute to its advancement. At my school, I've gained practical
          skills in programming, software development, hardware design, and
          networking. I stay updated with the latest tech trends and enjoy
          exploring nature and spending time with loved ones. As a computer
          engineer, I'm excited to make a positive impact on society through
          innovation and collaboration.
        </p>
      </div>
    </div>
  );
};

export default About;
