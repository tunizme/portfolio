import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";

const Home = () => {
  return (
    <div
      id="home"
      className="md:w-9/12 w-11/12 m-auto md:pt-[120px] pt-[80px] pb-20 border-[var(--border-color)] border-b-[1px]"
    >
      <h3 className="text-center font-bold text-4xl">
        Hi, I'm <strong className="text-cyan-500">Anh Vu</strong>
      </h3>
      <h4 className="text-center font-semibold text-2xl pt-3">
        Welcome to my personal website!
      </h4>
      <p className="text-center font-medium text-xl pt-3 text-[var(--text-color-desc)]">
        I want to be a Software Engineer
      </p>
      <div className="w-full flex pt-4 items-center justify-center">
        <div className="w-[300px] h-[300px] rounded-full border-2 border-gray-500 flex items-center justify-center">
          <div className="w-[250px] h-[250px] rounded-full overflow-hidden">
            <img
              className="object-cover"
              src="https://lh3.googleusercontent.com/s3OkfCc07BzzsYlKsp8-5dfvZkV1rsDuJOE5AFwcmVHzQ_INN3tqJYEAGMDoDalSi1YfJ587YKf1L-H3r7hNGyhckkzx1YcHME1NWLAzjWoClFrd4gxDhsct2v03Csvc0Xd8bAx1AZZF2PWmA71YD9sSLw_qjO_zTQRQ5S1lrvJyecxcqHK0sM7uH6Bauk52ZfLnRZ6LljwwmA3z1UVVeNLWDNQ4QU13sFnqhuB7HA8FYT7hGsM03ZogC2ctxhnJPn8E1o1Pt89hfp-u9w7xaAL8_ATIXQxjyUpgpm97Vh7cR_8VGdB7JNREHMk99l6UT4FG_wFJRpJdpR2q9Wi74dPCkGiKlPFNmHAh-c3fTw-KIMIR0W_m7e9XlzMA7B7086pvwXj4NSq9hDmuVWKkypmH2ZdhT1dK5b3MuIpWkTVzdx8z-c9CYl9_UDXeSCfa_EUJlubWUMcww7qOkcg_4E7xusU9B9cjAh_Sd219E8E4hahHJet_-nOSvy0oxlEBMtaa7oGW2MsC1Cvavj1GMDzXCbwoGtieI5aR-IxaVthD4eieBVBH45Pci_jE0JzYV9mecJqhgMxQ7jVl0sRhSgBLN3ex1bFLishYa5tngvzf8CvlgKLTa2KlCePJIcAMG0NUfTZiYYzYHwVNCwYUpYpgbtZe9NivHUwh4mLVJhXVHKeZp_aTuajC8OSf17Qa1AJWA-WJV3Hh1YLLdV8-NBiZi4diSqOHQbuGnWwTaOjOXgXUnBQzjC4hY4FQ9zQxGcSYxymZLFvnlixM76lpVGJsqDDww6bYFoUTtwh4CndMao-Jzc5Hu8Lq4BXpjsciwYIMXiiNXOr6CmR9i1Gi2Zl5lRpaS7GFic8JNZwlWl0FzQeeilbVhK-N-Kk-YQBUdj2gzGBuC2DV1k6KiuLC4nNr3kmENkSXoRzwypusWJ72ojPL=w595-h893-s-no?authuser=0"
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
